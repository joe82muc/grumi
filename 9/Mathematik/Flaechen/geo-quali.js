(() => {
  const root = document.querySelector("#quali-app");
  if (!root) return;

  // Konfiguration kommt aus der jeweiligen Themenseite (window.GEO_QUALI).
  const cfg = window.GEO_QUALI || {};
  const tasks = Array.isArray(cfg.tasks) ? cfg.tasks : [];
  const levelLabel = cfg.levelLabel || "Geometrie";
  const themeLine = cfg.themeLine || "Thema: Berechnungen an geometrischen Figuren, Mathematik 9.";
  // Nur die Grundformel(n) als Tipp; Umstellen mit eingesetzten Werten als eigener Tipp.
  const baseFormulas = cfg.baseFormulas || {};
  const rearrange = cfg.rearrange || {};
  const videos = cfg.videos || {};
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
  let hintPartKey = null;
  let selectedFile = null;
  let previewUrl = "";
  let hintVisible = false;
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

  function svgWrap(label, body, viewBox = "0 0 280 210") {
    return `<svg viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">
  <defs>
    <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="3.5" orient="auto">
      <path d="M0 0 L7 3.5 L0 7 Z" fill="#475569"/>
    </marker>
  </defs>
  ${body}
</svg>`;
  }

  function txt(x, y, value, anchor = "middle", size = 13, color = "#334155") {
    return `<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="${size}" fill="${color}">${value}</text>`;
  }

  function rightAngle(x, y, dx = 16, dy = -16, color = "#475569") {
    return `<path d="M${x} ${y + dy} L${x + dx} ${y + dy} L${x + dx} ${y}" fill="none" stroke="${color}" stroke-width="1.4"/>`;
  }

  function triangleHeightSvg(baseLabel, heightLabel, extra = "") {
    return svgWrap("Dreieck mit Grundseite und Hoehe", `
  <polygon points="42,170 238,170 150,42" fill="rgba(20,184,166,.13)" stroke="#0f766e" stroke-width="2"/>
  <line x1="150" y1="42" x2="150" y2="170" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${rightAngle(150, 170)}
  ${txt(140, 190, baseLabel)}
  ${txt(160, 112, heightLabel, "start")}
  ${extra}
`, "0 0 280 210");
  }

  function equilateralTriangleSvg() {
    return svgWrap("Gleichseitiges Dreieck mit Hoehe", `
  <polygon points="45,172 235,172 140,42" fill="rgba(20,184,166,.13)" stroke="#0f766e" stroke-width="2"/>
  <line x1="140" y1="42" x2="140" y2="172" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="140" y1="172" x2="235" y2="172" stroke="#f59e0b" stroke-width="2.4"/>
  ${rightAngle(140, 172)}
  ${txt(140, 195, "a = 8 cm")}
  ${txt(188, 164, "4 cm", "middle", 12, "#92400e")}
  ${txt(84, 104, "a = 8 cm", "middle", 12)}
  ${txt(148, 112, "h gesucht", "start", 13, "#0b6b58")}
`, "0 0 280 220");
  }

  function rightTriangleSvg(baseLabel, heightLabel, hypLabel = "", areaLabel = "") {
    return svgWrap("Rechtwinkliges Dreieck", `
  <polygon points="50,160 226,160 50,52" fill="rgba(20,184,166,.13)" stroke="#0f766e" stroke-width="2"/>
  ${rightAngle(50, 160, 16, -16, "#0f766e")}
  ${txt(138, 182, baseLabel)}
  ${txt(36, 110, heightLabel, "middle")}
  ${hypLabel ? txt(142, 96, hypLabel, "middle") : ""}
  ${areaLabel ? txt(132, 140, areaLabel, "middle", 12, "#0b6b58") : ""}
`, "0 0 280 210");
  }

  function squareSvg(sideLabel, opts = {}) {
    const diagonal = opts.diagonal
      ? `<line x1="70" y1="170" x2="190" y2="50" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${txt(146, 104, opts.diagonal, "middle", 12)}`
      : "";
    const fill = opts.fill || "rgba(20,184,166,.12)";
    return svgWrap("Quadrat", `
  <rect x="70" y="50" width="120" height="120" fill="${fill}" stroke="#0f766e" stroke-width="2"/>
  ${diagonal}
  ${txt(130, 190, sideLabel)}
  ${opts.area ? txt(130, 116, opts.area, "middle", 13, "#0b6b58") : ""}
`, "0 0 260 220");
  }

  function rectangleSvg(widthLabel, heightLabel, opts = {}) {
    const diagonal = opts.diagonal
      ? `<line x1="46" y1="152" x2="226" y2="58" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${txt(148, 94, opts.diagonal, "middle", 12)}`
      : "";
    const gate = opts.gate
      ? `<path d="M112 152 H150" stroke="#f59e0b" stroke-width="5" stroke-linecap="round"/>
  ${txt(131, 174, opts.gate, "middle", 12, "#92400e")}`
      : "";
    return svgWrap("Rechteck", `
  <rect x="46" y="58" width="180" height="94" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  ${diagonal}
  ${gate}
  ${txt(136, opts.gate ? 48 : 178, widthLabel)}
  ${txt(32, 108, heightLabel, "middle")}
  ${opts.area ? txt(136, 112, opts.area, "middle", 13, "#0b6b58") : ""}
`, "0 0 280 210");
  }

  function parallelogramSvg(baseLabel, heightLabel, areaLabel = "") {
    return svgWrap("Parallelogramm mit Hoehe", `
  <polygon points="54,160 214,160 246,72 86,72" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <line x1="86" y1="72" x2="86" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${rightAngle(86, 160)}
  ${txt(134, 184, baseLabel)}
  ${txt(98, 118, heightLabel, "start")}
  ${areaLabel ? txt(150, 122, areaLabel, "middle", 13, "#0b6b58") : ""}
`, "0 0 300 210");
  }

  function trapezoidSvg(aLabel, cLabel, hLabel, extra = "") {
    return svgWrap("Trapez mit Hoehe", `
  <polygon points="44,160 236,160 196,70 86,70" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <line x1="86" y1="70" x2="86" y2="160" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${rightAngle(86, 160)}
  ${txt(140, 184, aLabel)}
  ${txt(141, 62, cLabel)}
  ${txt(98, 118, hLabel, "start")}
  ${extra}
`, "0 0 280 210");
  }

  function kiteSvg() {
    return svgWrap("Drachenviereck mit Diagonalen", `
  <polygon points="130,28 205,112 130,190 62,112" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <line x1="62" y1="112" x2="205" y2="112" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  <line x1="130" y1="28" x2="130" y2="190" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  ${rightAngle(130, 112, 13, 13)}
  ${txt(162, 104, "e = 10 cm", "middle")}
  ${txt(140, 73, "f = 14 cm", "start")}
`, "0 0 260 220");
  }

  function circleSvg(opts = {}) {
    const radiusLine = opts.radius ? `<line x1="120" y1="120" x2="200" y2="120" stroke="#0f766e" stroke-width="1.7"/>${txt(162, 112, opts.radius, "middle", 12)}` : "";
    const diameterLine = opts.diameter ? `<line x1="40" y1="120" x2="200" y2="120" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>${txt(120, 142, opts.diameter, "middle", 12)}` : "";
    const circumference = opts.circumference ? `<path d="M188 62 A82 82 0 0 1 198 168" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)"/>${txt(208, 116, opts.circumference, "start", 12, "#92400e")}` : "";
    return svgWrap("Kreis", `
  <circle cx="120" cy="120" r="80" fill="rgba(20,184,166,.13)" stroke="#0f766e" stroke-width="2"/>
  <circle cx="120" cy="120" r="3" fill="#0f766e"/>
  ${radiusLine}
  ${diameterLine}
  ${circumference}
  ${opts.area ? txt(120, 96, opts.area, "middle", 13, "#0b6b58") : ""}
`, "0 0 260 240");
  }

  function tireSvg() {
    return svgWrap("Reifen mit Durchmesser und Strecke", `
  <line x1="34" y1="168" x2="286" y2="168" stroke="#94a3b8" stroke-width="3"/>
  <circle cx="92" cy="118" r="50" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="3"/>
  <circle cx="92" cy="118" r="26" fill="#fff" stroke="#0f766e" stroke-width="1.8"/>
  <line x1="42" y1="118" x2="142" y2="118" stroke="#475569" stroke-width="1.5" stroke-dasharray="5 4"/>
  <path d="M128 82 A50 50 0 0 1 141 129" fill="none" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)"/>
  ${txt(92, 108, "d = 50 cm")}
  ${txt(210, 190, "Strecke 1 km")}
`, "0 0 320 220");
  }

  function clockSvg() {
    return svgWrap("Turmuhr mit zwei Zeigern", `
  <circle cx="135" cy="115" r="82" fill="rgba(20,184,166,.09)" stroke="#0f766e" stroke-width="2"/>
  <circle cx="135" cy="115" r="4" fill="#0f766e"/>
  <line x1="135" y1="115" x2="135" y2="35" stroke="#0f766e" stroke-width="3" stroke-linecap="round"/>
  <line x1="135" y1="115" x2="192" y2="115" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/>
  <path d="M185 58 A72 72 0 0 1 204 127" fill="none" stroke="#0f766e" stroke-width="2" marker-end="url(#arrow)"/>
  ${txt(148, 56, "3 m", "start", 12)}
  ${txt(165, 106, "2 m", "start", 12, "#92400e")}
  ${txt(135, 218, "Weg der Zeigerspitze = Kreisumfang")}
`, "0 0 280 240");
  }

  function goatAreaSvg() {
    return svgWrap("Kreisflaeche mit Strick als Radius", `
  <circle cx="135" cy="112" r="58" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <circle cx="135" cy="112" r="100" fill="none" stroke="#f59e0b" stroke-width="2" stroke-dasharray="7 5"/>
  <circle cx="135" cy="112" r="4" fill="#475569"/>
  <line x1="135" y1="112" x2="193" y2="112" stroke="#0f766e" stroke-width="1.6"/>
  <line x1="135" y1="112" x2="235" y2="112" stroke="#f59e0b" stroke-width="1.6"/>
  ${txt(164, 104, "5 m", "middle", 12)}
  ${txt(207, 132, "10 m", "middle", 12, "#92400e")}
  ${txt(135, 222, "Strick = Radius der Grasflaeche")}
`, "0 0 280 240");
  }

  function polygonPoints(n, cx = 140, cy = 112, r = 78, rotation = -90) {
    return Array.from({ length: n }, (_, i) => {
      const angle = (Math.PI / 180) * (rotation + (360 / n) * i);
      return `${(cx + r * Math.cos(angle)).toFixed(1)},${(cy + r * Math.sin(angle)).toFixed(1)}`;
    }).join(" ");
  }

  function regularPolygonSvg(n, opts = {}) {
    const points = polygonPoints(n);
    const angle = (Math.PI / 180) * (-90 + 360 / n);
    const p1 = { x: 140 + 78 * Math.cos(-Math.PI / 2), y: 112 + 78 * Math.sin(-Math.PI / 2) };
    const p2 = { x: 140 + 78 * Math.cos(angle), y: 112 + 78 * Math.sin(angle) };
    const mid = { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 };
    return svgWrap(`Regelmaessiges ${n}-Eck`, `
  <polygon points="${points}" fill="rgba(20,184,166,.11)" stroke="#0f766e" stroke-width="2"/>
  <line x1="140" y1="112" x2="${p1.x.toFixed(1)}" y2="${p1.y.toFixed(1)}" stroke="#475569" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="140" y1="112" x2="${p2.x.toFixed(1)}" y2="${p2.y.toFixed(1)}" stroke="#475569" stroke-width="1.2" stroke-dasharray="5 4"/>
  <line x1="140" y1="112" x2="${mid.x.toFixed(1)}" y2="${mid.y.toFixed(1)}" stroke="#f59e0b" stroke-width="1.5"/>
  ${txt(140, 106, opts.center || "M", "middle", 12)}
  ${txt(((p1.x + p2.x) / 2).toFixed(1), (Math.min(p1.y, p2.y) - 8).toFixed(1), opts.side || "s", "middle", 12)}
  ${opts.radius ? txt(108, 76, opts.radius, "middle", 12) : ""}
  ${opts.height ? txt(mid.x + 9, mid.y + 18, opts.height, "start", 12, "#92400e") : ""}
  ${opts.angle ? txt(154, 94, opts.angle, "start", 12, "#0b6b58") : ""}
  ${opts.caption ? txt(140, 220, opts.caption, "middle", 12) : ""}
`, "0 0 280 240");
  }

  function applyAutoSketches() {
    const byLevel = {
      "Dreiecke": {
        "2": triangleHeightSvg("g = 12 cm", "h = 7 cm", txt(92, 126, "A gesucht", "middle", 12, "#0b6b58")),
        "3": rightTriangleSvg("a = 9 cm", "b = 6 cm", "", "A gesucht"),
        "4": rightTriangleSvg("a = 6 cm", "b gesucht", "", "A = 24 cm2"),
        "5": rightTriangleSvg("a = 9 cm", "b = 12 cm", "c gesucht"),
        "6": rightTriangleSvg("b gesucht", "a = 16 cm", "c = 20 cm"),
        "9": equilateralTriangleSvg(),
      },
      "Vierecke": {
        "2": squareSvg("a gesucht", { diagonal: "d gesucht", area: "A = 49 cm2" }),
        "3": rectangleSvg("a = 8 cm", "b = 5 cm", { area: "A gesucht" }),
        "4": rectangleSvg("a = 12 cm", "b = 9 cm", { diagonal: "d gesucht" }),
        "6": parallelogramSvg("g = 12 cm", "h gesucht", "A = 72 cm2"),
        "8": kiteSvg(),
        "10": trapezoidSvg("a = 9 cm", "c = 5 cm", "h gesucht", txt(188, 122, "A = 56 cm2", "middle", 12, "#0b6b58")),
        "11": squareSvg("a gesucht", { area: "u = 16 m", fill: "rgba(251,146,60,.16)" }),
        "12": rectangleSvg("30 m", "20 m", { gate: "Tor 3 m frei" }),
      },
      "Kreis": {
        "2": circleSvg({ radius: "r = 7 cm", circumference: "u gesucht" }),
        "3": circleSvg({ radius: "r = 6 cm", area: "A gesucht" }),
        "4": circleSvg({ radius: "r gesucht", circumference: "u = 18,84 cm" }),
        "5": circleSvg({ radius: "r gesucht", area: "A = 50,24 cm2" }),
        "6": tireSvg(),
        "7": clockSvg(),
        "9": goatAreaSvg(),
      },
      "Vielecke": {
        "2": regularPolygonSvg(9, { side: "s", angle: "&beta; gesucht", caption: "Bestimmungsdreieck mit Basiswinkeln &alpha;" }),
        "3": regularPolygonSvg(6, { side: "s = 5 cm", caption: "u = 6 &middot; s" }),
        "4": regularPolygonSvg(8, { side: "s = 4 cm", height: "h = 4,8 cm", caption: "8 gleiche Bestimmungsdreiecke" }),
        "5": regularPolygonSvg(9, { side: "s = 5 cm", radius: "r = 7,4 cm", height: "h gesucht" }),
        "6": regularPolygonSvg(8, { side: "s gesucht", height: "h gesucht", caption: "A = 19,2 m2" }),
        "7": regularPolygonSvg(5, { side: "s gesucht", height: "h gesucht", caption: "Springbrunnenflaeche" }),
        "8": `${regularPolygonSvg(8, { side: "4 cm", caption: "u Achteck" })}<div class="figure-pair-note">Vergleiche danach mit einem Rechteck: 2 &middot; (l + b) = gleicher Umfang.</div>`,
      },
    };
    const level = String(levelLabel || "");
    const diagrams = Object.keys(byLevel).find((key) => level.includes(key));
    if (!diagrams) return;
    tasks.forEach((task) => {
      if (task.noSketch || task.figureSvg) return;
      const autoSvg = byLevel[diagrams][task.id];
      if (autoSvg) task.figureSvg = autoSvg;
    });
  }

  applyAutoSketches();

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

  // Letzter Feedback-Aufruf, damit der Tipp-Button das Feedback neu zeichnen kann.
  let lastFeedback = null;

  // offerHint: { task, step, key } – zeigt bei Fehler einen kleinen Tipp-Button.
  function setFeedback(kind, title, body, lines = [], offerHint = null) {
    lastFeedback = { kind, title, body, lines, offerHint };
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

    let hintHtml = "";
    if (offerHint && offerHint.key) {
      if (hintVisible) {
        hintHtml = `
          <div class="fb-hint">
            ${renderHintContent(offerHint.task, offerHint.step, offerHint.key)}
            <button class="hint-toggle fb-hint-hide" type="button">Tipp ausblenden</button>
          </div>`;
      } else {
        hintHtml = `
          <button class="fb-hint-btn" type="button">💡 Tipp anzeigen: ${escapeHtml(hintLabel(offerHint.key))}</button>`;
      }
    }

    feedback.innerHTML = `
      <h3><span class="fb-title-ico">${titleIcon}</span>${escapeHtml(title)}</h3>
      ${bodyHtml}
      ${items ? `<ul class="fb-list">${items}</ul>` : ""}
      ${hintHtml}
    `;

    feedback.querySelector(".fb-hint-btn")?.addEventListener("click", () => {
      hintVisible = true;
      setFeedback(kind, title, body, lines, offerHint);
    });
    feedback.querySelector(".fb-hint-hide")?.addEventListener("click", () => {
      hintVisible = false;
      setFeedback(kind, title, body, lines, offerHint);
    });
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
    return baseFormulas[task.id] || task.plan || [];
  }

  // Schritt-für-Schritt-Umstellen mit bereits eingesetzten Werten (eigener Tipp).
  function getRearrange(task, step) {
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    if (ph && Array.isArray(ph.rearrange)) return ph.rearrange;
    const r = rearrange[task.id];
    if (!r) return [];
    if (Array.isArray(r)) return step.part ? [] : r;
    return r[step.part] || [];
  }

  // Genau ein Tipp passend zum aktuellen Foto-Schritt. Wird nur eingeblendet,
  // wenn die KI im Feedback einen Fehler gemeldet hat.
  function hintForStep(task, step) {
    if (step.kind === 0) {
      const ph = step.part && task.partHints ? task.partHints[step.part] : null;
      let sketchOn;
      if (ph) sketchOn = ph.sketch !== false;
      else sketchOn = task.noSketch ? false : true;
      if (task.figureSvg) sketchOn = false;
      return sketchOn ? "skizze" : "geg";
    }
    if (step.kind === 1) {
      return getPartFormulas(task, step).length ? "formel" : "geg";
    }
    if (step.kind === 2) {
      return getRearrange(task, step).length ? "umstellen" : "formel";
    }
    return null;
  }

  // Inhalt genau eines Tipps (ohne Nummerierung) für die Anzeige unter dem Feedback.
  function renderHintContent(task, step, key) {
    if (key === "geg") {
      const gesucht = step.part ? `Teil ${step.part}) – ${step.partBody}` : task.searched;
      return `
        <div class="hint-block">
          <h4>Gegeben &amp; gesucht</h4>
          <div class="task-meta">
            ${(task.given || []).map((value) => `<span>${escapeHtml(value)}</span>`).join("")}
            <span>gesucht: ${escapeHtml(gesucht)}</span>
          </div>
        </div>`;
    }
    if (key === "skizze") {
      return `
        <div class="hint-block">
          <h4>Skizze</h4>
          ${sketch(task)}
        </div>`;
    }
    if (key === "formel") {
      const formulas = getPartFormulas(task, step);
      const title = step.part ? "Grundformel für diesen Teil" : "Grundformel (noch nicht umgestellt)";
      return `
        <div class="hint-block">
          <h4>${title}</h4>
          <div class="mini-plan">
            ${formulas.map((line) => `<div>${mathify(escapeHtml(line))}</div>`).join("")}
          </div>
        </div>`;
    }
    if (key === "umstellen") {
      const steps = getRearrange(task, step);
      return `
        <div class="hint-block">
          <h4>Werte einsetzen &amp; umstellen</h4>
          <div class="mini-plan rearrange-plan">
            ${steps.map((line) => `<div>${mathify(escapeHtml(line))}</div>`).join("")}
          </div>
        </div>`;
    }
    return "";
  }

  // Kurzes Label für den Tipp-Button im Feedback.
  function hintLabel(key) {
    if (key === "skizze") return "Skizze";
    if (key === "geg") return "gegeben & gesucht";
    if (key === "formel") return "passende Formel";
    if (key === "umstellen") return "Werte einsetzen & umstellen";
    return "Tipp";
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

  function renderFeedbackFromServer(data, task, step) {
    const lines = String(data.analysis || "")
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean);
    let offerHint = null;
    if (!data.correct) {
      const key = hintForStep(task, step);
      if (key) offerHint = { task, step, key };
    }
    setFeedback(
      data.correct ? "ok" : "no",
      data.summary || (data.correct ? "Der Schritt passt." : "Da stimmt noch etwas nicht."),
      data.suggestion || (data.correct ? "Weiter zum nächsten Foto-Schritt." : "Verbessere den markierten Schritt und lade ein neues Foto hoch."),
      lines,
      offerHint,
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
    hintVisible = false;
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

      renderFeedbackFromServer(feedback, task, step);
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
    hintVisible = false;
    render();
  }

  function render() {
    const task = tasks[currentTaskIndex];
    const steps = getSteps(task);
    currentSteps = steps;
    if (currentStepIndex >= steps.length) currentStepIndex = 0;
    const step = steps[currentStepIndex];
    const must = mustItems(task, step);

    // Tipp gehört zum aktuellen (Teil-)Foto-Schritt: bei jedem Wechsel wieder
    // ausblenden, damit der Schüler erst selbst versucht.
    const partKey = `${currentTaskIndex}:${step.part || "_"}:${step.kind}`;
    if (partKey !== hintPartKey) {
      hintVisible = false;
      hintPartKey = partKey;
    }

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

      </section>
    `;

    root.querySelectorAll("[data-task]").forEach((button) => {
      button.addEventListener("click", () => {
        currentTaskIndex = Number(button.dataset.task);
        currentStepIndex = 0;
        selectedFile = null;
        hintVisible = false;
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
  }

  render();
})();
