(() => {
  const root = document.querySelector("#quali-app");
  if (!root) return;

  // Konfiguration kommt aus der jeweiligen Themenseite (window.GEO_QUALI).
  const cfg = window.GEO_QUALI || {};
  const tasks = Array.isArray(cfg.tasks) ? cfg.tasks : [];
  const levelLabel = cfg.levelLabel || "Geometrie";
  const themeLine = cfg.themeLine || "Thema: Berechnungen an geometrischen Figuren, Mathematik 9.";
  if (!tasks.length) {
    root.innerHTML = '<p class="menu-note">Für dieses Thema sind noch keine Aufgaben hinterlegt.</p>';
    return;
  }

  const apiUrl =
    window.GRUMI_MATH_KI_API_URL ||
    (location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:3000/api/check"
      : "https://grumi-mathe-ki.onrender.com/api/check");

  const baseSteps = [
    {
      title: "Skizze, gegeben, gesucht",
      intro: "Das Foto soll zeigen, dass du die Aufgabe verstanden und sauber sortiert hast.",
      short: "Skizze",
    },
    {
      title: "Plan und Formel",
      intro: "Das Foto soll deinen Rechenplan zeigen: passende Formel und bei Bedarf Pythagoras.",
      short: "Plan",
    },
    {
      title: "Rechnung",
      intro: "Das Foto soll Einsetzen, Umformen und Rechnen mit Einheiten zeigen.",
      short: "Rechnung",
    },
    {
      title: "Antwort und Einheit",
      intro: "Das Foto soll den Antwortsatz mit sinnvoll gerundetem Ergebnis und richtiger Einheit zeigen.",
      short: "Antwort",
    },
  ];

  let currentTaskIndex = 0;
  let currentStepIndex = 0;
  let currentSteps = [];
  let currentHintItems = [];
  let hintPartKey = null;
  let selectedFile = null;
  let previewUrl = "";
  let tipsShown = 0;
  const completed = new Set();

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Brüche als echten Bruchstrich: Unicode-Brüche (⅓ …), "x/y" und "(…)/y".
  const vulgarFractions = {
    "½": ["1", "2"], "⅓": ["1", "3"], "⅔": ["2", "3"], "¼": ["1", "4"],
    "¾": ["3", "4"], "⅕": ["1", "5"], "⅙": ["1", "6"], "⅛": ["1", "8"],
  };
  function frac(numerator, denominator) {
    return `<span class="frac"><span>${numerator}</span><span>${denominator}</span></span>`;
  }
  function mathify(escapedText) {
    let out = escapedText.replace(
      /\(([^()]+)\)\/([^\s;,)<]+)/g,
      (match, numerator, denominator) => frac(numerator, denominator),
    );
    out = out.replace(
      /([A-Za-z0-9²³ₖₛ₀-₉]+)\/([A-Za-z0-9²³ₖₛ₀-₉]+)/g,
      (match, numerator, denominator) => frac(numerator, denominator),
    );
    out = out.replace(/[½⅓⅔¼¾⅕⅙⅛]/g, (glyph) => {
      const parts = vulgarFractions[glyph];
      return parts ? frac(parts[0], parts[1]) : glyph;
    });
    return out;
  }

  function completedKey(taskIndex = currentTaskIndex, stepIndex = currentStepIndex) {
    return `${taskIndex}:${stepIndex}`;
  }

  function givensTable(task) {
    const t = task.table;
    if (!t) return "";
    const head = t.cols.map((c) => `<th scope="col">${escapeHtml(c)})</th>`).join("");
    const body = t.rows
      .map((row) => {
        const cells = row.cells
          .map((cell) => (cell ? `<td>${escapeHtml(cell)}</td>` : `<td class="empty">?</td>`))
          .join("");
        return `<tr><th scope="row">${escapeHtml(row.label)}</th>${cells}</tr>`;
      })
      .join("");
    return `<div class="givens-wrap"><table class="givens-table"><thead><tr><td class="corner"></td>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  // Zerlegt den Aufgabentext in Einleitung und Teilaufgaben a), b), c) ...
  function getSubtasks(task) {
    const text = String(task.text || "");
    const markerRe = /\s([a-h])\)\s/g;
    const markers = [];
    let match;
    while ((match = markerRe.exec(text)) !== null) {
      markers.push({ index: match.index, label: match[1], contentStart: markerRe.lastIndex });
    }
    if (markers.length < 2 || markers[0].label !== "a") {
      return { lead: text, parts: [] };
    }
    const lead = text.slice(0, markers[0].index).trim();
    const parts = markers.map((marker, index) => {
      const end = index + 1 < markers.length ? markers[index + 1].index : text.length;
      const body = text
        .slice(marker.contentStart, end)
        .trim()
        .replace(/[\s,;]+$/, "")
        .replace(/\s+(und|sowie|oder)$/i, "");
      return { label: marker.label, body };
    });
    return { lead, parts };
  }

  function taskTextHtml(task) {
    const { lead, parts } = getSubtasks(task);
    if (parts.length === 0) {
      return `<p class="task-text">${escapeHtml(String(task.text || ""))}</p>`;
    }
    let leadText = lead;
    if (leadText && !/[.:!?]$/.test(leadText)) leadText += ":";
    const leadHtml = leadText ? `<p class="task-text task-intro">${escapeHtml(leadText)}</p>` : "";
    const items = parts
      .map((part) => `<li><span class="part-label">${escapeHtml(part.label)})</span><span class="part-body">${escapeHtml(part.body)}</span></li>`)
      .join("");
    return `${leadHtml}<ul class="task-text task-parts">${items}</ul>`;
  }

  // Foto-Schritte: ohne Teilaufgaben die vier Standardschritte, mit a) b) c) ...
  // für jede Teilaufgabe alle vier Schritte nacheinander.
  function getSteps(task) {
    const { parts } = getSubtasks(task);
    if (parts.length === 0) {
      return baseSteps.map((base, index) => ({
        kind: index,
        part: null,
        partBody: "",
        kindShort: base.short,
        title: base.title,
        intro: base.intro,
      }));
    }
    const steps = [];
    parts.forEach((part) => {
      baseSteps.forEach((base, index) => {
        steps.push({
          kind: index,
          part: part.label,
          partBody: part.body,
          kindShort: base.short,
          title: `Teil ${part.label}) – ${base.title}`,
          intro: base.intro,
        });
      });
    });
    return steps;
  }

  function setFeedbackPlaceholder() {
    return `
      <div id="photo-feedback" class="feedback-box muted" aria-live="polite">
        <h3>Bereit</h3>
        <p>Lade ein Foto genau zu diesem Schritt hoch.</p>
      </div>`;
  }

  function formatFeedbackLine(rawLine, kind) {
    let line = String(rawLine).trim().replace(/^[-•*]\s*/, "");
    line = line.replace(/[✓✔✅]+\s*$/u, "").trim();
    if (!line) return "";

    const isMissing = /^fehlt\b/i.test(line);
    let cls = "fb-line";
    let icon = "•";
    if (isMissing) {
      cls = "fb-line miss";
      icon = "✗";
    } else if (kind === "ok") {
      cls = "fb-line ok";
      icon = "✓";
    } else if (kind === "no") {
      cls = "fb-line warn";
      icon = "!";
    }

    const escaped = escapeHtml(line);
    const match = escaped.match(/^([^:<]{1,30}:)\s*(.+)$/);
    let content;
    if (match && /[=√π·]|\d/.test(match[2])) {
      content = `<span class="fb-label">${match[1]}</span> <span class="fb-eq">${mathify(match[2])}</span>`;
    } else {
      content = mathify(escaped);
    }
    return `<li class="${cls}"><span class="fb-ico">${icon}</span><span class="fb-text">${content}</span></li>`;
  }

  function setFeedback(kind, title, body, lines = []) {
    const feedback = root.querySelector("#photo-feedback");
    if (!feedback) return;
    const safeKind = kind || "muted";
    feedback.className = `feedback-box ${safeKind}`;
    const titleIcon = safeKind === "ok" ? "✓" : safeKind === "no" ? "✗" : "•";
    const items = lines
      .map((line) => formatFeedbackLine(line, safeKind))
      .filter(Boolean)
      .join("");
    const bodyHtml = body
      ? `<p class="fb-suggestion">${mathify(escapeHtml(body))}</p>`
      : "";
    feedback.innerHTML = `
      <h3><span class="fb-title-ico">${titleIcon}</span>${escapeHtml(title)}</h3>
      ${bodyHtml}
      ${items ? `<ul class="fb-list">${items}</ul>` : ""}
    `;
  }

  function mustItems(task, step) {
    const part = step.part;
    const partTag = part ? `Teil ${part}): ` : "";
    const partGoal = part && step.partBody ? ` (${step.partBody})` : "";
    if (step.kind === 0) {
      return part
        ? [
            `${partTag}gegeben & gesucht notieren${partGoal}`,
            "Figur skizzieren und Maße eintragen",
            "rechte Winkel und gesuchte Größe markieren",
            "Einheiten mit aufschreiben",
          ]
        : [
            "Figur skizzieren und Maße eintragen",
            "gegebene Werte aus dem Text herausschreiben",
            "notieren, was gesucht ist",
            "Einheiten mit aufschreiben",
          ];
    }
    if (step.kind === 1) {
      return part
        ? [
            `${partTag}passende Formel auswählen${partGoal}`,
            "wenn nötig fehlende Länge mit Pythagoras einplanen",
            "den Rechenweg in sinnvoller Reihenfolge planen",
            "markieren, welcher Wert zuerst berechnet wird",
          ]
        : [
            "passende Formel(n) selbst auswählen",
            "wenn nötig fehlende Länge mit Pythagoras einplanen",
            "den Rechenweg in sinnvoller Reihenfolge planen",
            "markieren, welcher Wert zuerst berechnet wird",
          ];
    }
    if (step.kind === 2) {
      return part
        ? [
            `${partTag}Werte einsetzen und ausrechnen`,
            "Zwischenschritte sauber rechnen",
            "wenn nötig zuerst Pythagoras anwenden",
            "Einheiten mitschreiben",
          ]
        : [
            "Werte in die Formel einsetzen",
            "Zwischenschritte sauber rechnen",
            "wenn nötig zuerst Pythagoras anwenden",
            "Einheiten mitschreiben",
          ];
    }
    return part
      ? [
          `${partTag}Antwortsatz mit Einheit schreiben`,
          "sinnvoll runden",
          "Ergebnis auf Plausibilität prüfen",
        ]
      : [
          `Ergebnis: ${task.result}`,
          "sinnvoll runden",
          "Antwortsatz mit passender Einheit schreiben",
        ];
  }

  function sketch(task) {
    if (task.sketchSvg) {
      return `<div class="sketch-frame">${task.sketchSvg}</div>`;
    }
    const note = task.figure
      ? `<p class="sketch-note">${escapeHtml(task.figure)}</p>`
      : "";
    return `
      <div class="sketch-frame sketch-hint">
        <p>Zeichne die Figur ordentlich ab und trage alle gegebenen Maße ein.</p>
        <p>Markiere rechte Winkel, gleiche Seiten und die gesuchte Größe.</p>
        ${note}
      </div>`;
  }

  function getPartFormulas(task, step) {
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    if (ph && Array.isArray(ph.formulas)) return ph.formulas;
    return task.plan || [];
  }

  function getHintItems(task, step) {
    const items = [{ key: "geg", label: "gegeben & gesucht" }];
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    let sketchOn;
    if (ph) sketchOn = ph.sketch !== false;
    else sketchOn = task.noSketch ? false : true;
    if (task.figureSvg) sketchOn = false; // gegebene Skizze ist bereits sichtbar
    if (sketchOn) items.push({ key: "skizze", label: "Skizze" });
    const formulas = getPartFormulas(task, step);
    if (formulas.length) {
      items.push({ key: "formel", label: formulas.length === 1 ? "Formel" : "Formeln" });
    }
    return items;
  }

  function hintBlocks(task, step, hintItems) {
    const blocks = [];
    hintItems.forEach((item, index) => {
      if (index >= tipsShown) return;
      const num = index + 1;
      if (item.key === "geg") {
        const gesucht = step.part ? `Teil ${step.part}) – ${step.partBody}` : task.searched;
        blocks.push(`
        <div class="hint-block">
          <h4><span class="hint-num">${num}</span> Gegeben &amp; gesucht</h4>
          <div class="task-meta">
            ${(task.given || []).map((value) => `<span>${escapeHtml(value)}</span>`).join("")}
            <span>gesucht: ${escapeHtml(gesucht)}</span>
          </div>
        </div>`);
      } else if (item.key === "skizze") {
        blocks.push(`
        <div class="hint-block">
          <h4><span class="hint-num">${num}</span> Skizze</h4>
          ${sketch(task)}
        </div>`);
      } else if (item.key === "formel") {
        const formulas = getPartFormulas(task, step);
        const title = formulas.length === 1
          ? "Formel (passend zu diesem Teil)"
          : (step.part ? "Formeln für diesen Teil" : "Grundformel");
        blocks.push(`
        <div class="hint-block">
          <h4><span class="hint-num">${num}</span> ${title}</h4>
          <div class="mini-plan">
            ${formulas.map((line) => `<div>${mathify(escapeHtml(line))}</div>`).join("")}
          </div>
        </div>`);
      }
    });
    return blocks.join("");
  }

  function taskAiText(task, step) {
    const lines = [
      themeLine,
      `Aufgabe ${task.id}: ${task.title}`,
      task.text,
      `Gegeben: ${(task.given || []).join(", ")}`,
      `Gesucht: ${task.searched}`,
      `Erwarteter Rechenplan: ${(task.plan || []).join("; ")}`,
      `Erwarteter Rechenweg: ${task.solution}`,
      `Erwartetes Ergebnis: ${task.result}`,
    ];
    if (step.part) {
      lines.push(`Aktuelle Teilaufgabe: ${step.part}) ${step.partBody}`);
      lines.push(`Wichtig: Pruefe in diesem Foto NUR die Teilaufgabe ${step.part}). Andere Teilaufgaben gehoeren nicht zu diesem Foto und duerfen hier fehlen.`);
    }
    lines.push(`Aktueller Foto-Schritt: Foto ${step.kind + 1} - ${baseSteps[step.kind].title}`);
    lines.push(`Pflichtbestandteile dieses Fotos: ${mustItems(task, step).join("; ")}`);
    return lines.join("\n");
  }

  function renderFeedbackFromServer(data) {
    const lines = String(data.analysis || "")
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean);
    setFeedback(
      data.correct ? "ok" : "no",
      data.summary || (data.correct ? "Der Schritt passt." : "Da stimmt noch etwas nicht."),
      data.suggestion || (data.correct ? "Weiter zum nächsten Foto-Schritt." : "Verbessere den markierten Schritt und lade ein neues Foto hoch."),
      lines,
    );
  }

  async function checkPhoto() {
    const task = tasks[currentTaskIndex];
    const step = currentSteps[currentStepIndex];
    const button = root.querySelector("#check-photo");
    if (!selectedFile) {
      setFeedback("no", "Foto fehlt", "Wähle zuerst ein Foto zu diesem Schritt aus.");
      return;
    }

    const formData = new FormData();
    formData.append("equation", taskAiText(task, step));
    formData.append("taskLevel", `${levelLabel} Quali Aufgabe ${task.id}${step.part ? `, Teil ${step.part})` : ""}`);
    formData.append("taskStep", String(step.kind + 1));
    formData.append("taskStepTitle", baseSteps[step.kind].title);
    formData.append("image", selectedFile);

    button.disabled = true;
    setFeedback("muted", "Prüfe Foto...", "Die KI schaut nur auf den aktuell ausgewählten Foto-Schritt.");

    try {
      const response = await fetch(apiUrl, { method: "POST", body: formData });
      const payload = await response.json().catch(() => ({}));
      const feedback = payload.feedback
        ? (typeof payload.feedback === "string" ? JSON.parse(payload.feedback) : payload.feedback)
        : payload;

      if (!response.ok) {
        setFeedback("no", "Prüfung nicht abgeschlossen", feedback.suggestion || feedback.analysis || "Bitte versuche es gleich noch einmal.");
        return;
      }

      renderFeedbackFromServer(feedback);
      if (feedback.correct) {
        completed.add(completedKey());
      }
    } catch (error) {
      setFeedback("no", "Server nicht erreichbar", "Starte lokal die KI-App oder prüfe die Internetverbindung.");
    } finally {
      button.disabled = false;
    }
  }

  function chooseFile(file) {
    if (!file) return;
    selectedFile = file;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    const preview = root.querySelector("#photo-preview");
    if (preview) {
      preview.innerHTML = `<img alt="Vorschau des Fotos" src="${previewUrl}">`;
    }
    setFeedback("muted", "Foto ausgewählt", "Klicke jetzt auf „Foto prüfen“.");
  }

  function moveTask(delta) {
    currentTaskIndex = (currentTaskIndex + delta + tasks.length) % tasks.length;
    currentStepIndex = 0;
    selectedFile = null;
    tipsShown = 0;
    render();
  }

  function render() {
    const task = tasks[currentTaskIndex];
    const steps = getSteps(task);
    currentSteps = steps;
    if (currentStepIndex >= steps.length) currentStepIndex = 0;
    const step = steps[currentStepIndex];
    const must = mustItems(task, step);

    // Tipps gehören zur Teilaufgabe: bei Wechsel wieder einklappen.
    const partKey = `${currentTaskIndex}:${step.part || "_"}`;
    if (partKey !== hintPartKey) {
      tipsShown = 0;
      hintPartKey = partKey;
    }
    const hintItems = getHintItems(task, step);
    currentHintItems = hintItems;

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      previewUrl = "";
    }

    root.innerHTML = `
      <aside class="quali-menu card">
        <h3>Aufgaben</h3>
        <div class="task-button-list">
          ${tasks.map((item, index) => `
            <button class="quali-task-button ${index === currentTaskIndex ? "active" : ""}" type="button" data-task="${index}">
              <span class="task-number">${item.id}</span>
              <span>${escapeHtml(item.title)}<small>${escapeHtml(item.group)}</small></span>
            </button>`).join("")}
        </div>
        <p class="menu-note">Jeder Foto-Schritt wird einzeln geprüft. Bei a), b), c) … gehst du Foto 1–4 pro Teilaufgabe durch.</p>
      </aside>

      <section class="quali-work">
        <article class="task-head">
          <div class="task-title-row">
            <div>
              <span class="task-badge">${escapeHtml(task.group)}</span>
              <h2>Aufgabe ${task.id}: ${escapeHtml(task.title)}</h2>
            </div>
            <div class="nav-row">
              <button class="nav-button" type="button" id="prev-task">Zurück</button>
              <button class="nav-button" type="button" id="next-task">Nächste Aufgabe</button>
            </div>
          </div>
          ${taskTextHtml(task)}
          ${task.figureSvg ? `<figure class="task-figure"><div class="figure-frame">${task.figureSvg}</div><figcaption>Gegebene Skizze – nicht maßstabsgetreu</figcaption></figure>` : ""}
          ${givensTable(task)}
        </article>

        <div class="quali-grid">
          <section class="sketch-card hint-card">
            <h3>Tipps${step.part ? ` für Teil ${escapeHtml(step.part)})` : ""}</h3>
            <p class="hint-intro">Versuche die Aufgabe zuerst selbst. Brauchst du Hilfe, blende dir die passenden Tipps Schritt für Schritt ein.</p>
            ${tipsShown < hintItems.length
              ? `<button class="hint-button" type="button" id="show-hint">Tipp ${tipsShown + 1} anzeigen: ${escapeHtml(hintItems[tipsShown].label)}</button>`
              : `<p class="hint-done">Alle Tipps sind eingeblendet.</p>`}
            ${hintBlocks(task, step, hintItems)}
          </section>

          <section class="photo-card">
            <article class="step-card">
              <h3>${step.part
                ? `Teil ${escapeHtml(step.part)}) – Foto ${step.kind + 1}: ${escapeHtml(baseSteps[step.kind].title)}`
                : `Foto ${currentStepIndex + 1}: ${escapeHtml(step.title)}`}</h3>
              <p class="step-progress">Schritt ${currentStepIndex + 1} von ${steps.length}</p>
              <p>${escapeHtml(step.intro)}</p>
              <ul class="must-list">
                ${must.map((item, index) => `<li data-index="${index + 1}">${mathify(escapeHtml(item))}</li>`).join("")}
              </ul>
            </article>

            <div class="upload-row">
              <label class="upload-label" for="photo-file">Datei auswählen</label>
              <input id="photo-file" type="file" accept="image/*">
              <label class="upload-label" for="photo-camera">Von Kamera aufnehmen</label>
              <input id="photo-camera" type="file" accept="image/*" capture="environment">
              <button class="check-button" type="button" id="check-photo">Foto prüfen</button>
            </div>

            <div id="photo-preview" class="preview-box">Noch kein Foto ausgewählt.</div>
            ${setFeedbackPlaceholder()}

            <div class="nav-row">
              <button class="nav-button" type="button" id="prev-step">Vorheriger Foto-Schritt</button>
              <button class="nav-button" type="button" id="next-step">Nächster Foto-Schritt</button>
            </div>
          </section>
        </div>

        <details class="teacher-card">
          <summary>Erwarteter Lösungsweg</summary>
          <p>${mathify(escapeHtml(task.solution))}</p>
          <p><strong>${mathify(escapeHtml(task.result))}</strong></p>
        </details>
      </section>
    `;

    root.querySelectorAll("[data-task]").forEach((button) => {
      button.addEventListener("click", () => {
        currentTaskIndex = Number(button.dataset.task);
        currentStepIndex = 0;
        selectedFile = null;
        tipsShown = 0;
        render();
      });
    });
    root.querySelector("#prev-task")?.addEventListener("click", () => moveTask(-1));
    root.querySelector("#next-task")?.addEventListener("click", () => moveTask(1));
    root.querySelector("#prev-step")?.addEventListener("click", () => {
      currentStepIndex = Math.max(0, currentStepIndex - 1);
      selectedFile = null;
      render();
    });
    root.querySelector("#next-step")?.addEventListener("click", () => {
      currentStepIndex = Math.min(currentSteps.length - 1, currentStepIndex + 1);
      selectedFile = null;
      render();
    });
    root.querySelector("#photo-file")?.addEventListener("change", (event) => chooseFile(event.target.files?.[0]));
    root.querySelector("#photo-camera")?.addEventListener("change", (event) => chooseFile(event.target.files?.[0]));
    root.querySelector("#check-photo")?.addEventListener("click", checkPhoto);
    root.querySelector("#show-hint")?.addEventListener("click", () => {
      tipsShown = Math.min(currentHintItems.length, tipsShown + 1);
      render();
    });
  }

  render();
})();
