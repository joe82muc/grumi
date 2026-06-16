(() => {
  const root = document.querySelector("#quali-app");
  if (!root) return;

  const apiUrl =
    window.GRUMI_MATH_KI_API_URL ||
    (location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:3000/api/check"
      : "https://grumi-mathe-ki.onrender.com/api/check");

  const photoSteps = [
    {
      title: "Skizze, gegeben, gesucht",
      intro: "Das Foto soll zeigen, dass du die Aufgabe verstanden und sauber sortiert hast.",
      short: "Skizze",
    },
    {
      title: "Plan und Formel",
      intro: "Das Foto soll deinen Rechenplan zeigen: passende Formel, Radius aus d und bei Bedarf Pythagoras.",
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

  const tasks = [
    {
      id: "1",
      group: "Bestimmungsdreieck",
      title: "Schultüte: Körperhöhe",
      text: "Eine Schultüte hat den Durchmesser d = 10 cm und die Mantellinie s = 13 cm. Berechne die Körperhöhe hₖ.",
      given: ["d = 10 cm", "s = 13 cm"],
      searched: "hₖ",
      labels: { d: "10 cm", r: "5 cm", h: "?", s: "13 cm" },
      plan: ["r = d : 2", "s² = r² + hₖ²", "hₖ² = s² - r²"],
      solution: "r = 5 cm; hₖ² = 13² - 5² = 144; hₖ = 12 cm.",
      result: "hₖ = 12 cm",
    },
    {
      id: "2",
      group: "Bestimmungsdreieck",
      title: "Verkehrskegel: Mantellinie",
      text: "Ein Verkehrskegel hat d = 16 cm und hₖ = 15 cm. Berechne die Mantellinie s.",
      given: ["d = 16 cm", "hₖ = 15 cm"],
      searched: "s",
      labels: { d: "16 cm", r: "8 cm", h: "15 cm", s: "?" },
      plan: ["r = d : 2", "s² = r² + hₖ²", "s = √(r² + hₖ²)"],
      solution: "r = 8 cm; s² = 8² + 15² = 289; s = 17 cm.",
      result: "s = 17 cm",
    },
    {
      id: "3",
      group: "Volumen",
      title: "Eistüte: Rauminhalt",
      text: "Eine Eistüte wird näherungsweise als Kegel betrachtet. Sie hat d = 6 cm und hₖ = 12 cm. Berechne das Volumen.",
      given: ["d = 6 cm", "hₖ = 12 cm"],
      searched: "V",
      labels: { d: "6 cm", r: "3 cm", h: "12 cm", s: "" },
      plan: ["r = d : 2", "V = ⅓ · π · r² · hₖ", "Ergebnis in cm³"],
      solution: "r = 3 cm; V = 1/3 · π · 3² · 12 = 36π ≈ 113,1 cm³.",
      result: "V ≈ 113,1 cm³",
    },
    {
      id: "4",
      group: "Umkehraufgabe",
      title: "Gussform: Höhe gesucht",
      text: "Eine kegelförmige Gussform hat d = 14 cm und das Volumen V = 462 cm³. Berechne die Höhe hₖ.",
      given: ["d = 14 cm", "V = 462 cm³"],
      searched: "hₖ",
      labels: { d: "14 cm", r: "7 cm", h: "?", s: "" },
      plan: ["r = d : 2", "V = ⅓ · π · r² · hₖ", "hₖ = 3V : (π · r²)"],
      solution: "r = 7 cm; hₖ = 3 · 462 : (π · 7²) ≈ 9,0 cm.",
      result: "hₖ ≈ 9,0 cm",
    },
    {
      id: "5",
      group: "Sachaufgabe",
      title: "Partyhut: Papierfläche",
      text: "Ein Partyhut ist ein Kegel ohne Grundfläche. Er hat d = 20 cm und hₖ = 24 cm. Berechne die benötigte Papierfläche.",
      given: ["d = 20 cm", "hₖ = 24 cm"],
      searched: "M",
      labels: { d: "20 cm", r: "10 cm", h: "24 cm", s: "?" },
      plan: ["r = d : 2", "s² = r² + hₖ²", "M = π · r · s"],
      solution: "r = 10 cm; s = √(10² + 24²) = 26 cm; M = π · 10 · 26 ≈ 817 cm².",
      result: "M ≈ 817 cm²",
    },
    {
      id: "6",
      group: "Sachaufgabe",
      title: "Kegeldach: Blechbedarf",
      text: "Ein rundes Kegeldach hat d = 6,0 m und hₖ = 2,0 m. Für Verschnitt werden 10 % zusätzlich eingeplant. Berechne den Blechbedarf.",
      given: ["d = 6,0 m", "hₖ = 2,0 m", "10 % Verschnitt"],
      searched: "M mit Zuschlag",
      labels: { d: "6,0 m", r: "3,0 m", h: "2,0 m", s: "?" },
      plan: ["s² = r² + hₖ²", "M = π · r · s", "M · 1,10"],
      solution: "r = 3,0 m; s = √(3² + 2²) ≈ 3,61 m; M ≈ 34,0 m²; mit 10 %: ≈ 37,4 m².",
      result: "Blechbedarf ≈ 37,4 m²",
    },
    {
      id: "7",
      group: "Sachaufgabe",
      title: "Sandhaufen: Kosten",
      text: "Ein Sandhaufen hat ungefähr die Form eines Kegels mit d = 4,0 m und hₖ = 1,5 m. 1 m³ Sand kostet 36 €. Berechne die Kosten.",
      given: ["d = 4,0 m", "hₖ = 1,5 m", "36 € pro m³"],
      searched: "Kosten",
      labels: { d: "4,0 m", r: "2,0 m", h: "1,5 m", s: "" },
      plan: ["r = d : 2", "V = ⅓ · π · r² · hₖ", "Kosten = V · 36 €"],
      solution: "r = 2,0 m; V = 1/3 · π · 2² · 1,5 = 2π ≈ 6,28 m³; Kosten ≈ 6,28 · 36 € ≈ 226 €.",
      result: "Kosten ≈ 226 €",
    },
    {
      id: "8",
      group: "Umkehraufgabe",
      title: "Lampenschirm: Durchmesser",
      text: "Der Mantel eines kegelförmigen Lampenschirms hat M = 471 cm². Die Mantellinie beträgt s = 25 cm. Berechne den Durchmesser d.",
      given: ["M = 471 cm²", "s = 25 cm"],
      searched: "d",
      labels: { d: "?", r: "?", h: "", s: "25 cm" },
      plan: ["M = π · r · s", "r = M : (π · s)", "d = 2r"],
      solution: "r = 471 : (π · 25) ≈ 6,0 cm; d ≈ 12,0 cm.",
      result: "d ≈ 12,0 cm",
    },
    {
      id: "9",
      group: "Oberfläche",
      title: "Dekokegel: Gesamtoberfläche",
      text: "Ein Dekokegel hat d = 18 cm und s = 15 cm. Berechne Grundfläche, Mantelfläche und Gesamtoberfläche.",
      given: ["d = 18 cm", "s = 15 cm"],
      searched: "G, M und O",
      labels: { d: "18 cm", r: "9 cm", h: "?", s: "15 cm" },
      plan: ["r = d : 2", "G = π · r²", "M = π · r · s", "O = G + M"],
      solution: "r = 9 cm; G = 81π ≈ 254,5 cm²; M = 135π ≈ 424,1 cm²; O = 216π ≈ 678,6 cm².",
      result: "O ≈ 678,6 cm²",
    },
    {
      id: "10",
      group: "Einheiten",
      title: "Fülltrichter: Liter",
      text: "Ein kegelförmiger Trichter hat d = 8 cm und hₖ = 15 cm. Berechne das Volumen in cm³ und in Litern.",
      given: ["d = 8 cm", "hₖ = 15 cm"],
      searched: "V in cm³ und l",
      labels: { d: "8 cm", r: "4 cm", h: "15 cm", s: "" },
      plan: ["r = d : 2", "V = ⅓ · π · r² · hₖ", "1000 cm³ = 1 l"],
      solution: "r = 4 cm; V = 1/3 · π · 4² · 15 = 80π ≈ 251,3 cm³ ≈ 0,25 l.",
      result: "V ≈ 251,3 cm³ ≈ 0,25 l",
    },
  ];

  let currentTaskIndex = 0;
  let currentStepIndex = 0;
  let selectedFile = null;
  let previewUrl = "";
  const completed = new Set();

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function completedKey(taskIndex = currentTaskIndex, stepIndex = currentStepIndex) {
    return `${taskIndex}:${stepIndex}`;
  }

  function setFeedback(kind, title, body, lines = []) {
    const feedback = root.querySelector("#photo-feedback");
    if (!feedback) return;
    feedback.className = `feedback-box ${kind || "muted"}`;
    feedback.innerHTML = `
      <h3>${escapeHtml(title)}</h3>
      <p>${escapeHtml(body)}</p>
      ${lines.length ? `<ul>${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` : ""}
    `;
  }

  function mustItems(task, stepIndex) {
    if (stepIndex === 0) {
      return [
        "Kegel oder Bestimmungsdreieck zeichnen",
        `gegeben notieren: ${task.given.join(", ")}`,
        `gesucht notieren: ${task.searched}`,
        "Einheiten mit aufschreiben",
      ];
    }
    if (stepIndex === 1) {
      return [
        "passende Formel(n) auswählen",
        ...task.plan,
        "kurz markieren, welcher Wert zuerst berechnet wird",
      ];
    }
    if (stepIndex === 2) {
      return [
        "Werte in die Formel einsetzen",
        "Zwischenschritte sauber rechnen",
        "bei d immer zuerst mit r weiterrechnen",
        "Einheiten mitschreiben",
      ];
    }
    return [
      `Ergebnis: ${task.result}`,
      "sinnvoll runden",
      "Antwortsatz mit passender Einheit schreiben",
    ];
  }

  function sketch(task) {
    const label = (key, fallback) => escapeHtml(task.labels[key] || fallback || "");
    const usesTriangle = task.plan.some((line) => line.includes("s²") || line.includes("√"));
    const triangleHidden = !usesTriangle;
    const sLabel = label("s", "s");
    const hLabel = label("h", "hₖ");
    const rLabel = label("r", "r");
    const dLabel = label("d", "d");
    const coneHeightLabel = task.labels.h ? `hₖ = ${hLabel}` : "hₖ";
    const slantLabel = task.labels.s ? `s = ${sLabel}` : "s";
    const radiusLabel = task.labels.r ? `r = ${rLabel}` : "r";
    const diameterLabel = task.labels.d ? `d = ${dLabel}` : "d";
    const rightPanel = triangleHidden
      ? `
        <circle cx="350" cy="142" r="55" fill="rgba(20,184,166,.13)" stroke="#0f766e" stroke-width="3"/>
        <line x1="350" y1="142" x2="405" y2="142" stroke="#0f766e" stroke-width="4"/>
        <text class="svg-label" x="374" y="132" fill="#0f766e">${radiusLabel}</text>
        <text x="292" y="230" fill="#52627a" font-size="13" font-weight="700">Grundkreis</text>`
      : `
        <polygon points="290,205 440,205 290,78" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="3"/>
        <path d="M 290 178 L 317 178 L 317 205" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="290" y1="205" x2="440" y2="205" stroke="#0f766e" stroke-width="5"/>
        <line x1="290" y1="205" x2="290" y2="78" stroke="#be185d" stroke-width="5"/>
        <line x1="290" y1="78" x2="440" y2="205" stroke="#334155" stroke-width="5"/>
        <text class="svg-label" x="340" y="228" fill="#0f766e">r = ${rLabel}</text>
        <text class="svg-label" x="236" y="145" fill="#be185d">hₖ = ${hLabel}</text>
        <text class="svg-label" x="356" y="120" fill="#334155" transform="rotate(40 356 120)">s = ${sLabel}</text>
        <text x="306" y="55" fill="#52627a" font-size="13" font-weight="700">Bestimmungsdreieck</text>`;

    return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze zur Kegelaufgabe">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <ellipse cx="145" cy="210" rx="88" ry="24" fill="rgba(20,184,166,.14)" stroke="#0f766e" stroke-width="2"/>
        <path d="M 145 42 L 57 210 Q 145 244 233 210 Z" fill="rgba(251,146,60,.22)" stroke="#9a3412" stroke-width="2.5"/>
        <line x1="145" y1="42" x2="145" y2="210" stroke="#be185d" stroke-width="3" stroke-dasharray="7 5"/>
        <line x1="145" y1="210" x2="233" y2="210" stroke="#0f766e" stroke-width="3"/>
        <line x1="145" y1="42" x2="233" y2="210" stroke="#334155" stroke-width="3"/>
        <line x1="57" y1="244" x2="233" y2="244" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="116" y="263" fill="#334155">${diameterLabel}</text>
        <text class="svg-label" x="154" y="139" fill="#be185d">${coneHeightLabel}</text>
        <text class="svg-label" x="188" y="201" fill="#0f766e">${radiusLabel}</text>
        <text class="svg-label" x="194" y="103" fill="#334155" transform="rotate(62 194 103)">${slantLabel}</text>
        <text x="95" y="28" fill="#52627a" font-size="13" font-weight="700">Kegelskizze</text>
        ${rightPanel}
      </svg>`;
  }

  function taskAiText(task, stepIndex) {
    return [
      "Thema: Kegel Quali-Aufgabe Mathematik 9.",
      `Aufgabe ${task.id}: ${task.title}`,
      task.text,
      `Gegeben: ${task.given.join(", ")}`,
      `Gesucht: ${task.searched}`,
      `Erwarteter Rechenweg: ${task.solution}`,
      `Erwartetes Ergebnis: ${task.result}`,
      `Aktueller Foto-Schritt: Foto ${stepIndex + 1} - ${photoSteps[stepIndex].title}`,
      `Pflichtbestandteile dieses Fotos: ${mustItems(task, stepIndex).join("; ")}`,
    ].join("\n");
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
    const step = photoSteps[currentStepIndex];
    const button = root.querySelector("#check-photo");
    if (!selectedFile) {
      setFeedback("no", "Foto fehlt", "Wähle zuerst ein Foto zu diesem Schritt aus.");
      return;
    }

    const formData = new FormData();
    formData.append("equation", taskAiText(task, currentStepIndex));
    formData.append("taskLevel", `Kegel Quali Aufgabe ${task.id}`);
    formData.append("taskStep", String(currentStepIndex + 1));
    formData.append("taskStepTitle", step.title);
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
        root.querySelector(`[data-step="${currentStepIndex}"]`)?.classList.add("done");
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
    render();
  }

  function render() {
    const task = tasks[currentTaskIndex];
    const step = photoSteps[currentStepIndex];
    const must = mustItems(task, currentStepIndex);

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
        <p class="menu-note">Jeder Foto-Schritt wird einzeln geprüft. So sehen die Schülerinnen und Schüler sofort, welcher Teil noch fehlt.</p>
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
          <p class="task-text">${escapeHtml(task.text)}</p>
          <div class="task-meta">
            ${task.given.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
            <span>gesucht: ${escapeHtml(task.searched)}</span>
          </div>
        </article>

        <div class="step-tabs" aria-label="Foto-Schritte">
          ${photoSteps.map((item, index) => `
            <button class="step-tab ${index === currentStepIndex ? "active" : ""} ${completed.has(completedKey(currentTaskIndex, index)) ? "done" : ""}" type="button" data-step="${index}">
              <span>Foto ${index + 1}</span>
              <strong>${escapeHtml(item.short)}</strong>
            </button>`).join("")}
        </div>

        <div class="quali-grid">
          <section class="sketch-card">
            <h3>Mathetools-Skizze</h3>
            <div class="sketch-frame">${sketch(task)}</div>
            <div class="mini-plan">
              ${task.plan.map((line) => `<div>${escapeHtml(line)}</div>`).join("")}
            </div>
          </section>

          <section class="photo-card">
            <article class="step-card">
              <h3>Foto ${currentStepIndex + 1}: ${escapeHtml(step.title)}</h3>
              <p>${escapeHtml(step.intro)}</p>
              <ul class="must-list">
                ${must.map((item, index) => `<li data-index="${index + 1}">${escapeHtml(item)}</li>`).join("")}
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
            <div id="photo-feedback" class="feedback-box muted" aria-live="polite">
              <h3>Bereit</h3>
              <p>Lade ein Foto genau zu diesem Schritt hoch.</p>
            </div>

            <div class="nav-row">
              <button class="nav-button" type="button" id="prev-step">Vorheriger Foto-Schritt</button>
              <button class="nav-button" type="button" id="next-step">Nächster Foto-Schritt</button>
            </div>
          </section>
        </div>

        <details class="teacher-card">
          <summary>Erwarteter Lösungsweg</summary>
          <p>${escapeHtml(task.solution)}</p>
          <p><strong>${escapeHtml(task.result)}</strong></p>
        </details>
      </section>
    `;

    root.querySelectorAll("[data-task]").forEach((button) => {
      button.addEventListener("click", () => {
        currentTaskIndex = Number(button.dataset.task);
        currentStepIndex = 0;
        selectedFile = null;
        render();
      });
    });
    root.querySelectorAll("[data-step]").forEach((button) => {
      button.addEventListener("click", () => {
        currentStepIndex = Number(button.dataset.step);
        selectedFile = null;
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
      currentStepIndex = Math.min(photoSteps.length - 1, currentStepIndex + 1);
      selectedFile = null;
      render();
    });
    root.querySelector("#photo-file")?.addEventListener("change", (event) => chooseFile(event.target.files?.[0]));
    root.querySelector("#photo-camera")?.addEventListener("change", (event) => chooseFile(event.target.files?.[0]));
    root.querySelector("#check-photo")?.addEventListener("click", checkPhoto);
  }

  render();
})();
