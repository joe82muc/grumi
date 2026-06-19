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

  const baseSteps = [
    {
      title: "Skizze, gegeben, gesucht",
      intro: "Das Foto soll zeigen, dass du die Aufgabe verstanden und sauber sortiert hast.",
      short: "Skizze",
    },
    {
      title: "Plan und Formel",
      intro: "Das Foto soll deinen Rechenplan zeigen: passende Formel und bei Bedarf die Seitenhöhe mit Pythagoras.",
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

  // Hinweis: Die Zahlenwerte sind bewusst leicht gegenüber dem Buch verändert
  // (Urheberrecht). Aufgabentyp und Rechenweg bleiben gleich; alles ist neu
  // durchgerechnet.
  const tasks = [
    {
      id: "1",
      group: "Tabelle",
      title: "Pyramidengrößen bestimmen",
      text: "Berechne die fehlenden Werte und jeweils den Flächeninhalt eines Seitendreiecks. Runde auf eine Dezimalstelle.",
      table: {
        cols: ["a", "b", "c", "d", "e"],
        rows: [
          { label: "a", cells: ["8 cm", "12 cm", "", "5 m", ""] },
          { label: "hₖ", cells: ["3 cm", "", "6 cm", "4 m", "9 dm"] },
          { label: "hₛ", cells: ["", "10 cm", "", "", ""] },
          { label: "kₛ", cells: ["", "", "", "", ""] },
          { label: "G", cells: ["", "", "", "", "49 dm²"] },
          { label: "V", cells: ["", "", "200 cm³", "", ""] },
        ],
      },
      given: ["a) a = 8 cm; hₖ = 3 cm", "b) a = 12 cm; hₛ = 10 cm", "c) V = 200 cm³; hₖ = 6 cm", "d) a = 5 m; hₖ = 4 m", "e) G = 49 dm²; hₖ = 9 dm"],
      searched: "G, a bzw. hₖ, hₛ, kₛ, V und Seitendreieck",
      labels: { a: "a", h: "hₖ", hs: "hₛ", k: "kₛ" },
      plan: ["G = a²", "hₛ² = hₖ² + (a/2)²", "kₛ² = hₖ² + (a/√2)²", "V = ⅓ · a² · hₖ", "Seitendreieck = ½ · a · hₛ"],
      solution: "a) hₛ = √(3² + 4²) = 5 cm; G = 64 cm²; V = ⅓ · 64 · 3 = 64 cm³; kₛ = √(3² + (8/√2)²) ≈ 6,4 cm; Seitendreieck = ½ · 8 · 5 = 20 cm². b) hₖ = √(10² − 6²) = 8 cm; G = 144 cm²; V = 384 cm³; Seitendreieck = ½ · 12 · 10 = 60 cm². c) a = √(3 · 200 : 6) = 10 cm; G = 100 cm²; hₛ = √(6² + 5²) ≈ 7,8 cm; Seitendreieck ≈ 39,1 cm². d) G = 25 m²; V ≈ 33,3 m³; hₛ = √(4² + 2,5²) ≈ 4,7 m; Seitendreieck ≈ 11,8 m². e) a = 7 dm; hₛ = √(9² + 3,5²) ≈ 9,7 dm; V = 147 dm³; Seitendreieck ≈ 33,8 dm².",
      result: "Lösungen siehe Lösungsweg (eigene Werte – kein 1:1-Buchabdruck)",
    },
    {
      id: "2",
      group: "Skizze",
      title: "Pyramide: Volumen, hₛ und Seitendreieck",
      text: "Eine quadratische Pyramide hat die Grundkante a = 10 cm und die Körperhöhe hₖ = 12 cm. Berechne mit diesen Maßen a) das Volumen, b) die Länge der Seitenhöhe hₛ und c) den Flächeninhalt eines Seitendreiecks (graues Dreieck).",
      given: ["a = 10 cm", "hₖ = 12 cm"],
      searched: "V, hₛ und Seitendreieck",
      labels: { a: "10 cm", h: "12 cm", hs: "?", k: "" },
      plan: ["V = ⅓ · a² · hₖ", "hₛ² = hₖ² + (a/2)²", "Seitendreieck = ½ · a · hₛ"],
      partHints: {
        a: { sketch: false, formulas: ["V = ⅓ · a² · hₖ"] },
        b: { sketch: true, formulas: ["hₛ² = hₖ² + (a/2)²"] },
        c: { sketch: false, formulas: ["Seitendreieck = ½ · a · hₛ"] },
      },
      solution: "V = ⅓ · 10² · 12 = 400 cm³; hₛ = √(12² + 5²) = √169 = 13 cm; Seitendreieck = ½ · 10 · 13 = 65 cm².",
      result: "V = 400 cm³; hₛ = 13 cm; Seitendreieck = 65 cm²",
    },
    {
      id: "3",
      group: "Sachaufgabe",
      title: "Silberschmied: Briefbeschwerer",
      text: "Ein Silberschmied gießt aus Sterlingsilber einen Briefbeschwerer in Form einer Pyramide mit gleichseitigem Dreieck als Grundfläche. Die Grundkante ist a = 8 cm lang, die Seitenkanten messen k = 11 cm. 1 cm³ Sterlingsilber wiegt 10,5 g. a) Berechne das Gewicht des Briefbeschwerers. b) Berechne die Oberfläche. Runde alle Ergebnisse auf zwei Dezimalstellen.",
      given: ["gleichseitige Grundfläche: a = 8 cm", "Seitenkante k = 11 cm", "1 cm³ = 10,5 g"],
      searched: "Gewicht und Oberfläche",
      labels: { a: "8 cm", h: "?", hs: "?", k: "11 cm" },
      shape: "dreieck",
      plan: ["G = (√3/4) · a²", "hₛ = √(k² − (a/2)²)", "hₖ = √(k² − (a/√3)²)", "V = ⅓ · G · hₖ", "O = G + 3 · ½ · a · hₛ"],
      partHints: {
        a: { sketch: true, formulas: ["G = (√3/4) · a²", "hₖ = √(k² − (a/√3)²)", "V = ⅓ · G · hₖ", "Gewicht = V · 10,5 g"] },
        b: { sketch: true, formulas: ["hₛ = √(k² − (a/2)²)", "O = G + 3 · ½ · a · hₛ"] },
      },
      solution: "G = (√3/4) · 8² ≈ 27,71 cm²; hₛ = √(11² − 4²) = √105 ≈ 10,25 cm; hₖ = √(11² − (8/√3)²) ≈ 9,98 cm; V = ⅓ · 27,71 · 9,98 ≈ 92,22 cm³; Gewicht = 92,22 · 10,5 ≈ 968,31 g; O = 27,71 + 3 · ½ · 8 · 10,25 ≈ 150,68 cm².",
      result: "Gewicht ≈ 968,31 g; O ≈ 150,68 cm²",
    },
    {
      id: "4",
      group: "Sachaufgabe",
      title: "Goldschmied: Doppelpyramide",
      text: "Ein Goldschmied gießt aus einem quaderförmigen Goldbarren (a = 16 mm, b = 8 mm, c = 6 mm) ein Schmuckstück in Form einer Doppelpyramide mit quadratischer Grundfläche (Grundkante a = 10 mm). a) Skizziere den Längsschnitt. b) Wie hoch wird das Schmuckstück insgesamt? c) Wie schwer ist es? 1 cm³ Gold wiegt 19,3 g. Runde auf zwei Dezimalstellen.",
      given: ["Quader: 16 mm · 8 mm · 6 mm", "Doppelpyramide: a = 10 mm", "1 cm³ Gold = 19,3 g"],
      searched: "Gesamthöhe und Gewicht",
      labels: { a: "10 mm", h: "?", hs: "", k: "" },
      shape: "doppel",
      plan: ["V = a · b · c (Quader = Goldmenge)", "V = 2 · ⅓ · a² · h (Doppelpyramide)", "h = 3V : (2 · a²)", "Gesamthöhe = 2 · h", "Gewicht = V · 19,3 g (V in cm³)"],
      partHints: {
        a: { sketch: true, formulas: [] },
        b: { sketch: true, formulas: ["V = a · b · c (Quader = Goldmenge)", "V = 2 · ⅓ · a² · h", "h = 3V : (2 · a²)", "Gesamthöhe = 2 · h"] },
        c: { sketch: false, formulas: ["Gewicht = V · 19,3 g (V in cm³)"] },
      },
      solution: "V = 16 · 8 · 6 = 768 mm³; aus 768 = 2 · ⅓ · 10² · h folgt h = 768 · 3 : (2 · 100) = 11,52 mm; Gesamthöhe = 2 · 11,52 = 23,04 mm; V = 0,768 cm³; Gewicht = 0,768 · 19,3 ≈ 14,82 g.",
      result: "Gesamthöhe = 23,04 mm; Gewicht ≈ 14,82 g",
    },
    {
      id: "5",
      group: "Sachaufgabe",
      title: "Große Pyramide: Volumen & Verwitterung",
      text: "Eine berühmte Pyramide mit quadratischer Grundfläche hatte ursprünglich die Grundkante a = 230 m und die Höhe hₖ = 146 m. a) Berechne das ursprüngliche Volumen. b) Heute ist sie nur noch 136 m hoch und die Grundkanten sind um 5 m kürzer. Berechne den Volumenverlust in m³ und in Prozent (auf eine Dezimalstelle). c) Der Mantel war mit Platten verkleidet. Wie viele m² Platten waren das mit 10 % Verschnitt?",
      given: ["früher: a = 230 m, hₖ = 146 m", "heute: a = 225 m, hₖ = 136 m", "10 % Verschnitt"],
      searched: "V, Volumenverlust und Plattenfläche",
      labels: { a: "230 m", h: "146 m", hs: "?", k: "" },
      plan: ["V = ⅓ · a² · hₖ (früher und heute)", "Verlust = V_früher − V_heute", "Prozent = Verlust : V_früher · 100", "hₛ² = hₖ² + (a/2)²", "M = 2 · a · hₛ; mit 10 %: M · 1,10"],
      partHints: {
        a: { sketch: false, formulas: ["V = ⅓ · a² · hₖ"] },
        b: { sketch: false, formulas: ["V = ⅓ · a² · hₖ (früher und heute)", "Verlust = V_früher − V_heute", "Prozent = Verlust : V_früher · 100"] },
        c: { sketch: true, formulas: ["hₛ² = hₖ² + (a/2)²", "M = 2 · a · hₛ", "mit 10 %: M · 1,10"] },
      },
      solution: "V_früher = ⅓ · 230² · 146 ≈ 2 574 466,67 m³; V_heute = ⅓ · 225² · 136 = 2 295 000 m³; Verlust ≈ 279 466,67 m³ ≈ 10,9 %. hₛ = √(146² + 115²) ≈ 185,85 m; M = 2 · 230 · 185,85 ≈ 85 492 m²; mit 10 %: ≈ 94 041 m².",
      result: "V ≈ 2 574 466,67 m³; Verlust ≈ 279 466,67 m³ (≈ 10,9 %); Platten ≈ 94 041 m²",
    },
  ];

  const baseFormulas = {
    "1": ["G = a²", "hₛ² = hₖ² + (a/2)²", "kₛ² = hₖ² + (a/√2)²", "V = ⅓ · a² · hₖ", "Seitendreieck = ½ · a · hₛ"],
    "2": ["V = ⅓ · a² · hₖ", "hₛ² = hₖ² + (a/2)²", "Seitendreieck = ½ · a · hₛ"],
    "3": ["G = (√3/4) · a²", "hₛ² = k² − (a/2)²", "V = ⅓ · G · hₖ", "O = G + 3 · ½ · a · hₛ"],
    "4": ["V_Quader = a · b · c", "V = 2 · ⅓ · a² · h"],
    "5": ["V = ⅓ · a² · hₖ", "hₛ² = hₖ² + (a/2)²", "M = 2 · a · hₛ"],
  };

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

  // Wandelt bereits escapeten Text so um, dass Brüche "x/y" als echter
  // Bruchstrich erscheinen. Mehrgliedrige Zähler werden geklammert geschrieben,
  // z. B. "(3 · V)/a²".
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

  // Rendert die "gegeben"-Werte einer Tabellen-Aufgabe als übersichtliche
  // Tabelle (Spalten a–e, Zeilen = Größen; leere Zellen = gesucht).
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
  // Gibt parts = [] zurück, wenn es keine echten Teilaufgaben gibt.
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

  // Originalaufgabe übersichtlich darstellen: Einleitung als Absatz, dann jede
  // Teilaufgabe a), b), c) ... in einer eigenen Zeile.
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

  // Baut die Foto-Schritte. Ohne Teilaufgaben: die vier Standardschritte.
  // Mit a), b), c) ...: für jede Teilaufgabe alle vier Schritte nacheinander.
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

  // Eine einzelne Prüfzeile der KI hübsch aufbereiten: Häkchen bzw. Markierung,
  // "Label: Formel" trennen und die Formel mit Bruchstrich hervorheben.
  function formatFeedbackLine(rawLine, kind) {
    let line = String(rawLine).trim().replace(/^[-•*•]\s*/, "");
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
            "Skizze oder Bestimmungsdreieck passend zeichnen",
            "alle nötigen Werte mit Einheit aufschreiben",
            "klar markieren, was in diesem Teil gesucht ist",
          ]
        : [
            "Pyramide oder Bestimmungsdreieck zeichnen",
            "gegebene Werte aus dem Text herausschreiben",
            "notieren, was gesucht ist",
            "Einheiten mit aufschreiben",
          ];
    }
    if (step.kind === 1) {
      return part
        ? [
            `${partTag}passende Formel auswählen${partGoal}`,
            "wenn nötig zuerst die Seitenhöhe hₛ einplanen",
            "den Rechenweg in sinnvoller Reihenfolge planen",
            "kurz markieren, welcher Wert zuerst berechnet wird",
          ]
        : [
            "passende Formel(n) selbst auswählen",
            "den Rechenweg in sinnvoller Reihenfolge planen",
            "wenn nötig zuerst die Seitenhöhe hₛ einplanen",
            "kurz markieren, welcher Wert zuerst berechnet wird",
          ];
    }
    if (step.kind === 2) {
      return part
        ? [
            `${partTag}Werte einsetzen und ausrechnen`,
            "Zwischenschritte sauber rechnen",
            "wenn nötig zuerst die Seitenhöhe hₛ mit Pythagoras bestimmen",
            "Einheiten mitschreiben",
          ]
        : [
            "Werte in die Formel einsetzen",
            "Zwischenschritte sauber rechnen",
            "wenn nötig zuerst die Seitenhöhe hₛ mit Pythagoras bestimmen",
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
    const label = (key, fallback) => escapeHtml(task.labels[key] || fallback || "");
    const aLabel = task.labels.a ? `a = ${label("a", "a")}` : "a";
    const hLabel = task.labels.h ? `hₖ = ${label("h", "hₖ")}` : "hₖ";
    const hsLabel = task.labels.hs ? `hₛ = ${label("hs", "hₛ")}` : "hₛ";
    const kLabel = task.labels.k ? `k = ${label("k", "k")}` : "k";

    // Pyramide mit gleichseitiger Dreiecks-Grundfläche (Aufgabe 512).
    if (task.shape === "dreieck") {
      return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze: Pyramide mit gleichseitiger Grundfläche">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <polygon points="150,42 90,214 246,214" fill="rgba(124,58,237,.16)" stroke="#5b21b6" stroke-width="2.5"/>
        <line x1="150" y1="42" x2="182" y2="178" stroke="#5b21b6" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="90" y1="214" x2="182" y2="178" stroke="#5b21b6" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="246" y1="214" x2="182" y2="178" stroke="#5b21b6" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="150" y1="42" x2="168" y2="206" stroke="#be185d" stroke-width="3" stroke-dasharray="7 5"/>
        <path d="M 168 206 L 184 206 L 184 192" fill="none" stroke="#172033" stroke-width="2.2"/>
        <line x1="150" y1="42" x2="168" y2="214" stroke="#334155" stroke-width="2" stroke-dasharray="4 4"/>
        <line x1="90" y1="238" x2="246" y2="238" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="168" y="257" fill="#0f766e" text-anchor="middle">${aLabel}</text>
        <text class="svg-label" x="118" y="142" fill="#be185d">${hLabel}</text>
        <text class="svg-label" x="206" y="120" fill="#5b21b6" transform="rotate(50 206 120)">${kLabel}</text>
        <text x="70" y="30" fill="#52627a" font-size="13" font-weight="700">Dreieckspyramide</text>
        <polygon points="320,212 442,212 320,118" fill="rgba(124,58,237,.10)" stroke="#7c3aed" stroke-width="3"/>
        <path d="M 320 190 L 342 190 L 342 212" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="320" y1="212" x2="442" y2="212" stroke="#0f766e" stroke-width="5"/>
        <line x1="320" y1="212" x2="320" y2="118" stroke="#be185d" stroke-width="5"/>
        <line x1="320" y1="118" x2="442" y2="212" stroke="#5b21b6" stroke-width="5"/>
        <text class="svg-label" x="356" y="230" fill="#0f766e">a/2</text>
        <text class="svg-label" x="288" y="170" fill="#be185d">${hsLabel}</text>
        <text class="svg-label" x="388" y="158" fill="#5b21b6" transform="rotate(38 388 158)">${kLabel}</text>
        <text x="316" y="108" fill="#52627a" font-size="12" font-weight="700">hₛ = √(k² − (a/2)²)</text>
      </svg>`;
    }

    // Doppelpyramide / Längsschnitt (Aufgabe 513).
    if (task.shape === "doppel") {
      return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze: Doppelpyramide mit Längsschnitt">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <polygon points="130,28 70,134 130,160" fill="rgba(124,58,237,.16)" stroke="#5b21b6" stroke-width="2"/>
        <polygon points="130,28 130,160 190,134" fill="rgba(124,58,237,.28)" stroke="#5b21b6" stroke-width="2"/>
        <polygon points="130,244 70,134 130,160" fill="rgba(124,58,237,.10)" stroke="#5b21b6" stroke-width="2"/>
        <polygon points="130,244 130,160 190,134" fill="rgba(124,58,237,.20)" stroke="#5b21b6" stroke-width="2"/>
        <line x1="70" y1="134" x2="130" y2="108" stroke="#5b21b6" stroke-width="1.4" stroke-dasharray="5 4"/>
        <line x1="190" y1="134" x2="130" y2="108" stroke="#5b21b6" stroke-width="1.4" stroke-dasharray="5 4"/>
        <line x1="130" y1="28" x2="130" y2="108" stroke="#5b21b6" stroke-width="1.4" stroke-dasharray="5 4"/>
        <line x1="130" y1="244" x2="130" y2="108" stroke="#5b21b6" stroke-width="1.4" stroke-dasharray="5 4"/>
        <text class="svg-label" x="84" y="128" fill="#0f766e">${aLabel}</text>
        <text x="58" y="22" fill="#52627a" font-size="13" font-weight="700">Doppelpyramide</text>
        <polygon points="370,46 300,143 370,240 440,143" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2.5"/>
        <line x1="300" y1="143" x2="440" y2="143" stroke="#0f766e" stroke-width="2"/>
        <line x1="370" y1="46" x2="370" y2="240" stroke="#be185d" stroke-width="2.4" stroke-dasharray="7 5" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="356" y="138" fill="#0f766e">${aLabel}</text>
        <text class="svg-label" x="378" y="96" fill="#be185d">h</text>
        <text class="svg-label" x="378" y="200" fill="#be185d">h</text>
        <text x="300" y="32" fill="#52627a" font-size="12" font-weight="700">Längsschnitt (Höhe = 2·h)</text>
      </svg>`;
    }

    const wantsEdge = task.plan.some((line) => line.includes("Diagonale"));
    const usesTriangle = wantsEdge || task.plan.some((line) => line.includes("hₛ") || line.includes("√"));

    // Die Grundfläche der quadratischen Pyramide ist immer ein Quadrat.
    const grundQuadratBig = `
        <rect x="318" y="96" width="104" height="104" fill="rgba(20,184,166,.14)" stroke="#0f766e" stroke-width="3"/>
        <path d="M 318 96 L 334 96 L 334 112" fill="none" stroke="#0f766e" stroke-width="2"/>
        <text class="svg-label" x="352" y="154" fill="#0f4f74">G = a²</text>
        <text class="svg-label" x="352" y="218" fill="#0f766e">${aLabel}</text>
        <text x="316" y="84" fill="#52627a" font-size="13" font-weight="700">Grundfläche (Quadrat)</text>`;
    const grundQuadratSmall = `
        <rect x="364" y="46" width="70" height="70" fill="rgba(20,184,166,.14)" stroke="#0f766e" stroke-width="3"/>
        <path d="M 364 46 L 378 46 L 378 60" fill="none" stroke="#0f766e" stroke-width="2"/>
        <text class="svg-label" x="399" y="134" fill="#0f766e">${aLabel}</text>
        <text x="360" y="38" fill="#52627a" font-size="12" font-weight="700">Grundfläche</text>`;

    let rightPanel;
    if (!usesTriangle) {
      rightPanel = grundQuadratBig;
    } else if (wantsEdge) {
      rightPanel = grundQuadratSmall + `
        <line x1="364" y1="116" x2="434" y2="46" stroke="#7c3aed" stroke-width="2" stroke-dasharray="4 3"/>
        <polygon points="296,236 430,236 296,150" fill="rgba(124,58,237,.10)" stroke="#7c3aed" stroke-width="3"/>
        <path d="M 296 212 L 318 212 L 318 236" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="296" y1="236" x2="430" y2="236" stroke="#0f766e" stroke-width="5"/>
        <line x1="296" y1="236" x2="296" y2="150" stroke="#be185d" stroke-width="5"/>
        <line x1="296" y1="150" x2="430" y2="236" stroke="#7c3aed" stroke-width="5"/>
        <text class="svg-label" x="316" y="254" fill="#0f766e">halbe Diagonale</text>
        <text class="svg-label" x="250" y="198" fill="#be185d">${hLabel}</text>
        <text class="svg-label" x="372" y="188" fill="#5b21b6" transform="rotate(40 372 188)">${kLabel}</text>
        <text x="296" y="142" fill="#52627a" font-size="13" font-weight="700">Dreieck für Kante k</text>`;
    } else {
      rightPanel = grundQuadratSmall + `
        <polygon points="296,236 430,236 296,150" fill="rgba(124,58,237,.10)" stroke="#7c3aed" stroke-width="3"/>
        <path d="M 296 212 L 318 212 L 318 236" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="296" y1="236" x2="430" y2="236" stroke="#0f766e" stroke-width="5"/>
        <line x1="296" y1="236" x2="296" y2="150" stroke="#be185d" stroke-width="5"/>
        <line x1="296" y1="150" x2="430" y2="236" stroke="#7c3aed" stroke-width="5"/>
        <text class="svg-label" x="330" y="254" fill="#0f766e">a/2</text>
        <text class="svg-label" x="250" y="198" fill="#be185d">${hLabel}</text>
        <text class="svg-label" x="372" y="188" fill="#5b21b6" transform="rotate(40 372 188)">${hsLabel}</text>
        <text x="296" y="142" fill="#52627a" font-size="13" font-weight="700">Dreieck für hₛ</text>`;
    }

    return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze zur Pyramidenaufgabe">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <polygon points="130,52 58,200 130,222" fill="rgba(124,58,237,.20)" stroke="#5b21b6" stroke-width="2"/>
        <polygon points="130,52 130,222 202,200" fill="rgba(124,58,237,.32)" stroke="#5b21b6" stroke-width="2"/>
        <path d="M 58 200 L 130 178 L 202 200" fill="none" stroke="#5b21b6" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="130" y1="52" x2="130" y2="178" stroke="#5b21b6" stroke-width="1.6" stroke-dasharray="5 4"/>
        <line x1="130" y1="200" x2="130" y2="52" stroke="#be185d" stroke-width="3" stroke-dasharray="7 5"/>
        <path d="M 130 200 L 150 200 L 150 184" fill="none" stroke="#172033" stroke-width="2.2"/>
        <line x1="166" y1="211" x2="130" y2="52" stroke="#334155" stroke-width="2.4" stroke-dasharray="4 4"/>
        <line x1="58" y1="240" x2="202" y2="240" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="104" y="259" fill="#0f766e">${aLabel}</text>
        <text class="svg-label" x="92" y="135" fill="#be185d">${hLabel}</text>
        <text class="svg-label" x="170" y="150" fill="#334155" transform="rotate(60 170 150)">${hsLabel}</text>
        <text x="64" y="34" fill="#52627a" font-size="13" font-weight="700">Pyramidenskizze</text>
        ${rightPanel}
      </svg>`;
  }

  // Die zum aktuellen (Teil-)Schritt passenden Formeln. Bei Teilaufgaben nur
  // die wirklich nötigen Formeln, sonst die Grundformeln der Aufgabe.
  function getPartFormulas(task, step) {
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    if (ph && Array.isArray(ph.formulas)) return ph.formulas;
    return baseFormulas[task.id] || task.plan || [];
  }

  // Welche Tipps passen zum aktuellen (Teil-)Schritt? Skizze nur, wenn sie
  // hilft; Formel-Tipp nur, wenn es eine passende Formel gibt.
  function getHintItems(task, step) {
    const items = [{ key: "geg", label: "gegeben & gesucht" }];
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    const sketchOn = ph ? ph.sketch !== false : true;
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
            ${task.given.map((value) => `<span>${escapeHtml(value)}</span>`).join("")}
            <span>gesucht: ${escapeHtml(gesucht)}</span>
          </div>
        </div>`);
      } else if (item.key === "skizze") {
        blocks.push(`
        <div class="hint-block">
          <h4><span class="hint-num">${num}</span> Skizze</h4>
          <div class="sketch-frame">${sketch(task)}</div>
        </div>`);
      } else if (item.key === "formel") {
        const formulas = getPartFormulas(task, step);
        const title = formulas.length === 1
          ? "Formel (passend zu diesem Teil)"
          : (step.part ? "Formeln für diesen Teil" : "Grundformel (noch nicht umgestellt)");
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
      "Thema: Quadratische Pyramide, Quali-Aufgabe Mathematik 9.",
      `Aufgabe ${task.id}: ${task.title}`,
      task.text,
      `Gegeben: ${task.given.join(", ")}`,
      `Gesucht: ${task.searched}`,
      `Erwarteter Rechenplan: ${task.plan.join("; ")}`,
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
    formData.append("taskLevel", `Pyramide Quali Aufgabe ${task.id}${step.part ? `, Teil ${step.part})` : ""}`);
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

    // Tipps gehören zur Teilaufgabe: bei Wechsel der Teilaufgabe wieder
    // einklappen, damit man erst selbst versucht. Innerhalb derselben
    // Teilaufgabe (Foto 1–4) bleiben die Tipps sichtbar.
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
          ${taskTextHtml(task)}
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
          <p>${mathify(escapeHtml(task.solution))}</p>
          <p><strong>${escapeHtml(task.result)}</strong></p>
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
