/* Gleichungen loesen, Mathematik 7M/7R: Lernpfad, Aufgaben, gestufte Tipps,
   Schnell-Check mit Probe, Balkenwaage und KI-Pruefung des Rechenwegs
   (Dienst grumi-mathe-ki, Modus klasse=7). Fortschritt im Browser. */
(() => {
  const DATA = window.M7_GLEICHUNGEN;
  const R = window.M7Rechnen;
  if (!DATA || !R) return;

  const API_URL =
    window.GRUMI_MATH_KI_API_URL ||
    (location.protocol === "file:" || location.hostname === "localhost" || location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:3000/api/check"
      : "https://grumi-mathe-ki.onrender.com/api/check");
  const STORAGE_KEY = "grumi-mathe7-gleichungen-v1";

  const $ = (selector) => document.querySelector(selector);
  const el = {
    hero: $("#hero-stats"),
    path: $("#path"),
    levelCard: $(".g7-level"),
    levelBadge: $("#level-badge"),
    levelGroup: $("#level-group"),
    levelTitle: $("#level-title"),
    levelGoal: $("#level-goal"),
    levelTags: $("#level-tags"),
    example: $("#example"),
    exampleBody: $("#example-body"),
    taskTitle: $("#task-title"),
    chips: $("#task-chips"),
    display: $("#task-display"),
    prev: $("#prev-task"),
    next: $("#next-task"),
    hintButton: $("#hint-button"),
    hintButtonText: $("#hint-button-text"),
    hintNote: $("#hint-note"),
    hints: $("#hint-list"),
    quickForm: $("#quick-form"),
    quickLabel: $("#quick-label"),
    quickInput: $("#quick-input"),
    quickResult: $("#quick-result"),
    photoForm: $("#photo-form"),
    photoInput: $("#photo-input"),
    cameraInput: $("#camera-input"),
    cameraButton: $("#camera-button"),
    preview: $("#preview"),
    canvas: $("#preview-canvas"),
    previewEmpty: $("#preview-empty"),
    checkButton: $("#check-button"),
    feedback: $("#feedback"),
    modeButtons: [...document.querySelectorAll("[data-mode]")],
    modeFoto: $("#mode-foto"),
    modeStift: $("#mode-stift"),
    checkSteps: $("#check-steps"),
    inkCanvas: $("#ink-canvas"),
    inkEmpty: $("#ink-empty"),
    inkNote: $("#ink-note"),
    inkTools: [...document.querySelectorAll("[data-tool]")],
  };

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  const hand = (text) => `<span class="g7-hand">${escapeHtml(R.pretty(text))}</span>`;
  const cmd = (text) => (text ? `<span class="g7-cmd">${escapeHtml(R.pretty(text))}</span>` : "");

  const ICONS = {
    lob: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.3a2 2 0 0 0 2-1.7l1.4-9a2 2 0 0 0-2-2.3z"/><path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>',
    hint: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z"/></svg>',
    next: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>',
    folge: '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>',
  };

  /* ---------- Aufgaben vorbereiten ---------- */

  const groups = DATA.gruppen;
  const levels = DATA.stufen.map((stufe, index) => ({
    ...stufe,
    nr: index + 1,
    aufgaben: stufe.aufgaben.map((raw, taskNumber) => prepareTask(stufe, raw, taskNumber)),
  }));

  function prepareTask(stufe, raw, index) {
    const id = `${stufe.id}-${index + 1}`;
    if (stufe.typ === "term") {
      const x = R.Frac.from(raw.x);
      return {
        id,
        typ: "term",
        term: raw.term,
        x,
        text: `Berechne den Term ${R.pretty(raw.term)} für x = ${x}.`,
        loesung: R.termValue(raw.term, x),
        werte: [],
      };
    }
    if (stufe.typ === "gleichung") {
      return { id, typ: "gleichung", gleichung: raw, text: raw, loesung: R.solveEquation(raw), werte: [] };
    }
    return {
      id,
      typ: stufe.typ,
      text: raw.text,
      frage: raw.frage || "",
      variable: raw.variable || "",
      modell: raw.modell,
      tipp: raw.tipp || "",
      terme: raw.terme || [],
      werte: raw.werte || [],
      loesung: R.solveEquation(raw.modell),
    };
  }

  /* ---------- Fortschritt (nur in diesem Browser) ---------- */

  function loadProgress() {
    try {
      const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
      if (parsed && typeof parsed === "object" && parsed.tasks && typeof parsed.tasks === "object") {
        return parsed;
      }
    } catch {
      // ohne gespeicherten Fortschritt weiter
    }
    return { tasks: {}, last: null };
  }

  const progress = loadProgress();

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // privater Modus oder Speicher voll: Fortschritt gilt nur bis zum Neuladen
    }
  }

  const taskState = (task) => progress.tasks[task.id] || {};

  function markTask(task, patch) {
    progress.tasks[task.id] = { ...taskState(task), ...patch };
    saveProgress();
  }

  const solvedCount = (level) => level.aufgaben.filter((task) => taskState(task).geloest).length;
  const starCount = (level) => level.aufgaben.filter((task) => taskState(task).stern).length;

  /* ---------- Zustand ---------- */

  let levelIndex = 0;
  let taskIndex = 0;
  let hintLevel = 0;
  let checking = false;
  const photo = { file: null, upload: null, ready: Promise.resolve(null) };

  const currentLevel = () => levels[levelIndex];
  const currentTask = () => currentLevel().aufgaben[taskIndex];

  function firstOpenTask(level) {
    const index = level.aufgaben.findIndex((task) => !taskState(task).geloest);
    return index < 0 ? 0 : index;
  }

  function initialPosition() {
    const param = new URLSearchParams(location.search).get("stufe");
    if (param) {
      const number = Number(param);
      const index =
        Number.isInteger(number) && number >= 1 && number <= levels.length
          ? number - 1
          : levels.findIndex((level) => level.id === param);
      if (index >= 0) return { level: index, task: firstOpenTask(levels[index]) };
    }
    const last = progress.last;
    if (last) {
      const index = levels.findIndex((level) => level.id === last.stufe);
      if (index >= 0) {
        const count = levels[index].aufgaben.length;
        return { level: index, task: Math.min(Math.max(0, Number(last.aufgabe) || 0), count - 1) };
      }
    }
    return { level: 0, task: 0 };
  }

  /* ---------- Kopf und Lernpfad ---------- */

  function renderHero() {
    const total = levels.reduce((sum, level) => sum + level.aufgaben.length, 0);
    const solved = levels.reduce((sum, level) => sum + solvedCount(level), 0);
    const stars = levels.reduce((sum, level) => sum + starCount(level), 0);
    el.hero.innerHTML = `
      <div class="g7-stat"><strong>${solved}</strong><span>von ${total} gelöst</span></div>
      <div class="g7-stat"><strong>${stars} ★</strong><span>mit Probe</span></div>
    `;
  }

  function stationHtml(level) {
    const solved = solvedCount(level);
    const count = level.aufgaben.length;
    const active = level.nr - 1 === levelIndex;
    const done = solved === count;
    const label = `Stufe ${level.nr}: ${level.titel}, ${solved} von ${count} gelöst${level.mZug ? ", vor allem für 7M" : ""}`;
    return `
      <button type="button" class="g7-station${active ? " is-active" : ""}${done ? " is-done" : ""}"
        data-level="${level.nr - 1}" aria-label="${escapeHtml(label)}"${active ? ' aria-current="step"' : ""}>
        ${level.mZug ? '<span class="g7-station-m" aria-hidden="true">M</span>' : ""}
        <span class="g7-station-num" aria-hidden="true">${done ? "✓" : level.nr}</span>
        <span class="g7-station-title" aria-hidden="true">${escapeHtml(level.titel)}</span>
        <span class="g7-station-bar" aria-hidden="true"><span style="width:${Math.round((solved / count) * 100)}%"></span></span>
        <span class="g7-station-count" aria-hidden="true">${solved}/${count}</span>
      </button>
    `;
  }

  function renderPath() {
    el.path.innerHTML = groups
      .map((group) => {
        const members = levels.filter((level) => level.gruppe === group.id);
        return `
          <section class="g7-group tone-${group.id}" aria-label="${escapeHtml(group.titel)}">
            <div class="g7-group-head">
              <h3>${escapeHtml(group.titel)}</h3>
              <p>${escapeHtml(group.text)}</p>
            </div>
            <div class="g7-stations">${members.map(stationHtml).join("")}</div>
          </section>
        `;
      })
      .join("");
  }

  /* ---------- Stufe und Beispiel ---------- */

  function termTableHtml(tabelle) {
    const values = tabelle.werte.map((value) => R.Frac.from(value));
    const results = values.map((value) => R.termValue(tabelle.term, value));
    const step = R.termValue(tabelle.term, R.Frac.from(1)).sub(R.termValue(tabelle.term, R.Frac.from(0)));
    return `
      <table class="g7-mini-table">
        <tr><th scope="row">x</th>${values.map((value) => `<td>${value}</td>`).join("")}</tr>
        <tr><th scope="row">${escapeHtml(R.pretty(tabelle.term))}</th>${results.map((value) => `<td>${value}</td>`).join("")}</tr>
      </table>
      <p class="g7-rule">Wird x um 1 größer, wird der Term um ${step} größer.</p>
    `;
  }

  function exampleHtml(level) {
    const example = level.beispiel;
    const parts = [`<p class="g7-example-task">Beispiel: ${escapeHtml(R.pretty(example.aufgabe))}</p>`];
    if (example.schritte) {
      parts.push(`<ol class="g7-steps-inline">${example.schritte.map((step) => `<li>${escapeHtml(step)}</li>`).join("")}</ol>`);
    }
    if (example.tabelle3) {
      parts.push(`
        <table class="g7-mini-table">
          ${example.tabelle3.map(([name, term]) => `<tr><td>${escapeHtml(name)}</td><td>${hand(term)}</td></tr>`).join("")}
        </table>
      `);
    }
    const lines = example.zeilen.map(([text, op]) => `<div class="g7-line">${hand(text)}${cmd(op)}</div>`).join("");
    const values = (example.werte || []).map((value) => `<div class="g7-line">${hand(value)}</div>`).join("");
    const answer = example.antwort ? `<div class="g7-line"><span class="g7-hand">A: ${escapeHtml(example.antwort)}</span></div>` : "";
    const probe = example.probe ? `<div class="g7-line g7-probe-line">${hand(`Probe: ${example.probe}`)}</div>` : "";
    parts.push(`<div class="g7-paper">${lines}${values}${answer}${probe}</div>`);
    if (example.waage) parts.push('<div class="g7-waage" id="waage"></div>');
    if (example.tabelle) parts.push(termTableHtml(example.tabelle));
    if (example.regeln) {
      parts.push(`<ul class="g7-list">${example.regeln.map((rule) => `<li>${escapeHtml(rule)}</li>`).join("")}</ul>`);
    }
    if (example.uebersetzung) {
      parts.push(`
        <table class="g7-mini-table">
          <tr><th>Im Text</th><th>In der Gleichung</th></tr>
          ${example.uebersetzung.map(([text, math]) => `<tr><td>${escapeHtml(text)}</td><td>${hand(math)}</td></tr>`).join("")}
        </table>
      `);
    }
    if (example.merksatz) parts.push(`<p class="g7-rule"><b>Merke:</b> ${escapeHtml(example.merksatz)}</p>`);
    return parts.join("");
  }

  function renderLevel() {
    const level = currentLevel();
    const group = groups.find((entry) => entry.id === level.gruppe);
    el.levelCard.className = `g7-card g7-level tone-${level.gruppe}`;
    el.levelBadge.textContent = level.nr;
    el.levelGroup.textContent = `Stufe ${level.nr} · ${group ? group.titel : ""}`;
    el.levelTitle.textContent = level.titel;
    el.levelGoal.textContent = level.ziel;
    el.levelTags.innerHTML = `
      <span class="g7-tag">LehrplanPLUS: ${escapeHtml(level.lehrplan)}</span>
      ${level.mZug ? '<span class="g7-tag is-m">vor allem 7M</span>' : ""}
    `;
    el.exampleBody.innerHTML = exampleHtml(level);
    // Beispiel beim ersten Besuch offen, am Handy zugeklappt (sonst ist die Aufgabe weit unten)
    const untouched = level.aufgaben.every((task) => !taskState(task).geloest && !taskState(task).schnell);
    el.example.open = untouched && !window.matchMedia("(max-width: 640px)").matches;
    const waage = document.querySelector("#waage");
    if (waage) createWaage(waage, level.beispiel.aufgabe);
  }

  /* ---------- Balkenwaage ---------- */

  const waageTerm = (factor, summand) => `${factor === 1 ? "" : factor}x${summand ? ` + ${summand}` : ""}`;

  function waageFrames(a, b, c) {
    const lin = waageTerm;
    const describe = (factor, summand) =>
      `${factor === 1 ? "eine x-Kiste" : `${factor} x-Kisten`}${summand ? ` und ${summand} ${summand === 1 ? "Gewicht" : "Gewichte"}` : ""}`;
    const frames = [
      {
        L: { x: a, u: b },
        R: { u: c },
        eq: `${lin(a, b)} = ${c}`,
        caption: `Beide Seiten sind gleich schwer. Links: ${describe(a, b)}. Rechts: ${c} Gewichte.`,
      },
    ];
    let right = c;
    if (b > 0) {
      frames.push({
        L: { x: a, u: b, weg: b },
        R: { u: right, weg: b },
        eq: `${lin(a, b)} = ${right}`,
        op: `− ${b}`,
        caption: `Rechne − ${b}: Nimm auf beiden Seiten ${b} ${b === 1 ? "Gewicht" : "Gewichte"} weg.`,
      });
      right -= b;
      frames.push({
        L: { x: a },
        R: { u: right },
        eq: `${lin(a, 0)} = ${right}`,
        caption: "Die Waage ist immer noch im Gleichgewicht.",
      });
    }
    if (a > 1) {
      const keep = right / a;
      frames.push({
        L: { x: a, xweg: a - 1 },
        R: { u: right, weg: right - keep },
        eq: `${lin(a, 0)} = ${right}`,
        op: `: ${a}`,
        caption: `Rechne : ${a}: Teile beide Seiten in ${a} gleiche Teile. Behalte auf jeder Seite einen Teil.`,
      });
      frames.push({
        L: { x: 1 },
        R: { u: keep },
        eq: `x = ${keep}`,
        caption: `Eine x-Kiste wiegt so viel wie ${keep} Gewichte. Also ist x = ${keep}.`,
      });
    } else {
      frames[frames.length - 1].caption = `Die x-Kiste wiegt so viel wie ${right} Gewichte. Also ist x = ${right}.`;
    }
    return frames;
  }

  function panItems(side, cx) {
    const out = [];
    const bottom = 174;
    const box = 28;
    const gap = 5;
    const xCount = side.x || 0;
    const xGone = side.xweg || 0;
    const xRows = Math.ceil(xCount / 4);
    for (let i = 0; i < xCount; i += 1) {
      const row = Math.floor(i / 4);
      const inRow = Math.min(4, xCount - row * 4);
      const width = inRow * box + (inRow - 1) * gap;
      const x0 = cx - width / 2 + (i % 4) * (box + gap);
      const y0 = bottom - box - row * (box + gap);
      out.push(`
        <g class="w-item${i >= xCount - xGone ? " is-weg" : ""}">
          <rect x="${x0}" y="${y0}" width="${box}" height="${box}" rx="6" fill="#1f5f88"/>
          <text x="${x0 + box / 2}" y="${y0 + box / 2 + 6}" text-anchor="middle" font-size="19" fill="#ffffff" font-family="Patrick Hand, Segoe Print, cursive">x</text>
        </g>
      `);
    }
    const units = side.u || 0;
    const unitsGone = side.weg || 0;
    const radius = 8;
    const unitGap = 4;
    const unitBottom = bottom - xRows * (box + gap);
    for (let i = 0; i < units; i += 1) {
      const row = Math.floor(i / 7);
      const inRow = Math.min(7, units - row * 7);
      const width = inRow * radius * 2 + (inRow - 1) * unitGap;
      const cxi = cx - width / 2 + radius + (i % 7) * (radius * 2 + unitGap);
      const cyi = unitBottom - radius - row * (radius * 2 + unitGap);
      out.push(
        `<circle class="w-item${i >= units - unitsGone ? " is-weg" : ""}" cx="${cxi}" cy="${cyi}" r="${radius}" fill="#f2b705" stroke="#a87b06" stroke-width="1.5"/>`,
      );
    }
    return out.join("");
  }

  function createWaage(container, equationText) {
    const eq = R.parseEquation(equationText);
    if (!eq) return;
    const a = eq.left.a.toNumber();
    const b = eq.left.b.toNumber();
    const c = eq.right.b.toNumber();
    const xValue = (c - b) / a;
    const frames = waageFrames(a, b, c);
    const tiltFrame =
      b > 0
        ? { L: { x: a }, R: { u: c }, eq: `${waageTerm(a, 0)} ≠ ${c}`, caption: `Nur links ${b} weggenommen? Die Waage kippt! Die Gleichung stimmt nicht mehr. Rechne immer auf beiden Seiten dasselbe.` }
        : { L: { x: a - 1 }, R: { u: c }, eq: `${waageTerm(a - 1, 0)} ≠ ${c}`, caption: "Nur links eine x-Kiste weggenommen? Die Waage kippt! Rechne immer auf beiden Seiten dasselbe." };
    let index = 0;
    let tilted = false;

    container.innerHTML = `
      <svg viewBox="0 0 440 250" role="img" aria-label="Balkenwaage: Beide Seiten der Gleichung sind gleich schwer.">
        <path d="M220 56 L188 232 H252 Z" fill="#d3dee7"/>
        <rect x="150" y="232" width="140" height="10" rx="5" fill="#9fb3c4"/>
        <g class="w-pan w-pan-l">
          <line x1="90" y1="56" x2="30" y2="176" stroke="#8aa0b3" stroke-width="2"/>
          <line x1="90" y1="56" x2="150" y2="176" stroke="#8aa0b3" stroke-width="2"/>
          <path d="M16 176 H164 Q158 193 140 193 H40 Q22 193 16 176 Z" fill="#e3ebf1" stroke="#9fb3c4"/>
          <g class="w-items"></g>
        </g>
        <g class="w-pan w-pan-r">
          <line x1="350" y1="56" x2="290" y2="176" stroke="#8aa0b3" stroke-width="2"/>
          <line x1="350" y1="56" x2="410" y2="176" stroke="#8aa0b3" stroke-width="2"/>
          <path d="M276 176 H424 Q418 193 400 193 H300 Q282 193 276 176 Z" fill="#e3ebf1" stroke="#9fb3c4"/>
          <g class="w-items"></g>
        </g>
        <g class="w-beam">
          <rect x="80" y="51" width="280" height="10" rx="5" fill="#0c5f66"/>
          <circle cx="220" cy="56" r="8" fill="#083f45"/>
        </g>
      </svg>
      <p class="g7-waage-eq"></p>
      <p class="g7-waage-caption" aria-live="polite"></p>
      <div class="g7-waage-buttons">
        <button type="button" class="g7-btn g7-btn-soft" data-waage="back">&lsaquo; Zurück</button>
        <button type="button" class="g7-btn g7-btn-soft" data-waage="next">Nächster Schritt &rsaquo;</button>
        <button type="button" class="g7-btn g7-btn-outline" data-waage="tilt">Nur links wegnehmen?</button>
      </div>
    `;

    const leftPan = container.querySelector(".w-pan-l");
    const rightPan = container.querySelector(".w-pan-r");
    const beam = container.querySelector(".w-beam");
    const eqLine = container.querySelector(".g7-waage-eq");
    const caption = container.querySelector(".g7-waage-caption");
    const back = container.querySelector('[data-waage="back"]');
    const next = container.querySelector('[data-waage="next"]');
    const tilt = container.querySelector('[data-waage="tilt"]');

    function draw() {
      const frame = tilted ? tiltFrame : frames[index];
      leftPan.querySelector(".w-items").innerHTML = panItems(frame.L, 90);
      rightPan.querySelector(".w-items").innerHTML = panItems(frame.R, 350);
      const weightLeft = (frame.L.x || 0) * xValue + (frame.L.u || 0);
      const weightRight = (frame.R.x || 0) * xValue + (frame.R.u || 0);
      const heavier = Math.max(weightLeft, weightRight, 1);
      const angle = tilted ? Math.max(-12, Math.min(12, ((weightRight - weightLeft) / heavier) * 30)) : 0;
      const drop = 130 * Math.sin((angle * Math.PI) / 180);
      beam.style.transform = `rotate(${angle}deg)`;
      leftPan.style.transform = `translateY(${-drop}px)`;
      rightPan.style.transform = `translateY(${drop}px)`;
      eqLine.innerHTML = `<span class="g7-hand">${escapeHtml(R.pretty(frame.eq))}</span>${tilted ? "" : cmd(frame.op || "")}`;
      caption.textContent = frame.caption;
      caption.classList.toggle("is-tilt", tilted);
      back.disabled = tilted || index === 0;
      next.disabled = tilted || index === frames.length - 1;
      tilt.textContent = tilted ? "Zurück ins Gleichgewicht" : "Nur links wegnehmen?";
    }

    back.addEventListener("click", () => {
      index = Math.max(0, index - 1);
      draw();
    });
    next.addEventListener("click", () => {
      index = Math.min(frames.length - 1, index + 1);
      draw();
    });
    tilt.addEventListener("click", () => {
      tilted = !tilted;
      if (tilted) index = 0;
      draw();
    });
    draw();
  }

  /* ---------- Aufgabe ---------- */

  function renderChips() {
    const level = currentLevel();
    el.chips.innerHTML = level.aufgaben
      .map((task, index) => {
        const state = taskState(task);
        const classes = ["g7-chip"];
        if (index === taskIndex) classes.push("is-active");
        if (state.geloest) classes.push("is-done");
        else if (state.schnell) classes.push("is-quick");
        const label = `Aufgabe ${index + 1}${state.geloest ? ", gelöst" : state.schnell ? ", Ergebnis stimmt" : ""}${state.stern ? ", mit Probe" : ""}`;
        return `
          <button type="button" class="${classes.join(" ")}" data-task="${index}" aria-label="${escapeHtml(label)}"${index === taskIndex ? ' aria-current="true"' : ""}>
            ${state.geloest ? "✓" : index + 1}${state.stern ? '<span class="g7-chip-star" aria-hidden="true">★</span>' : ""}
          </button>
        `;
      })
      .join("");
  }

  function taskDisplayHtml(task) {
    if (task.typ === "term") {
      return `
        <span class="g7-hand g7-task-equation">${escapeHtml(R.pretty(task.term))}</span>
        <p class="g7-task-question">Berechne den Term für <span class="g7-hand">x = ${escapeHtml(task.x.toString())}</span>.</p>
      `;
    }
    if (task.typ === "gleichung") {
      return `<span class="g7-hand g7-task-equation">${escapeHtml(R.pretty(task.gleichung))}</span>`;
    }
    return `
      <p class="g7-task-text">${escapeHtml(task.text)}</p>
      ${task.frage ? `<p class="g7-task-question">${escapeHtml(task.frage)}</p>` : ""}
    `;
  }

  function hintsFor(task) {
    if (task.typ === "term") {
      const coefficient = /(\d+)\s*x/.exec(task.term);
      return [
        coefficient
          ? `Ersetze x durch ${task.x}. Denk dran: ${coefficient[1]}x bedeutet ${coefficient[1]} · x.`
          : `Ersetze x durch ${task.x}.`,
        "Rechne dann aus. Es gilt Punkt vor Strich: zuerst mal, dann plus oder minus.",
        `So fängst du an: ${R.substituteX(task.term, task.x)} = …`,
      ];
    }
    if (task.typ === "gleichung") {
      const steps = R.solutionSteps(task.gleichung);
      const first = steps[0];
      let tip1 = "Ziel: x soll allein stehen.";
      if (first && first.art === "zusammenfassen") {
        tip1 = "Fasse zuerst zusammen: alle x zusammen und alle Zahlen ohne x zusammen.";
      } else if (first && first.art === "plus") {
        tip1 = "Ziel: x soll allein stehen. Welche Zahl steht noch bei x? Rechne auf beiden Seiten das Gegenteil.";
      } else if (first && first.art === "teilen") {
        tip1 = `Ziel: x soll allein stehen. Vor dem x steht ${first.zahl}. Was ist das Gegenteil von „mal ${first.zahl}“?`;
      }
      const ops = steps.filter((step) => step.art !== "zusammenfassen").map((step) => step.opText);
      let tip2 = ops.length ? `Rechne auf beiden Seiten: ${ops.join(", danach ")}.` : "Rechne auf beiden Seiten dasselbe.";
      if (steps.some((step) => step.art === "teilen" && step.zahl.sign() < 0)) {
        tip2 += " Achte beim Teilen durch eine negative Zahl auf das Vorzeichen.";
      }
      const tip3 =
        steps.length >= 2
          ? `Nach dem ersten Schritt steht da: ${first.eqText}`
          : "Mach zum Schluss die Probe: Setze dein Ergebnis in die Aufgabe ein.";
      return [tip1, tip2, tip3];
    }
    if (task.typ === "raetsel") {
      return [
        "Die gesuchte Zahl nennst du x.",
        "Übersetze Stück für Stück: „das Dreifache“ wird 3x, „addieren“ wird +, „subtrahieren“ oder „vermindern um“ wird −, „ich erhalte“ wird =.",
        `Die Gleichung lautet: ${R.pretty(task.modell)}`,
      ];
    }
    if (task.typ === "sachaufgabe") {
      return [
        `Lege zuerst x fest: ${task.variable}`,
        `${task.tipp ? `${task.tipp}. ` : ""}Überlege: Was kommt mehrmals vor? Das gehört zu x. Was kommt fest dazu? Was ist das Ganze?`,
        `Die Gleichung lautet: ${R.pretty(task.modell)}`,
      ];
    }
    return [
      `Lege zuerst x fest: ${task.variable}`,
      `Schreibe die anderen Mengen mit x: ${task.terme.slice(1).join(", ")}. Zusammen ergeben alle die Gesamtzahl.`,
      `Die Gleichung lautet: ${R.pretty(task.modell)}. Danach setzt du x in jeden Term ein.`,
    ];
  }

  function renderHints() {
    const hints = hintsFor(currentTask());
    el.hints.innerHTML = hints
      .slice(0, hintLevel)
      .map((hint, index) => `<li><b aria-hidden="true">${index + 1}</b><span>${escapeHtml(R.pretty(hint))}</span></li>`)
      .join("");
    const left = hints.length - hintLevel;
    el.hintButton.disabled = left <= 0;
    el.hintButtonText.textContent = hintLevel === 0 ? "Tipp anzeigen" : left > 0 ? "Noch ein Tipp" : "Alle Tipps gezeigt";
    el.hintNote.textContent = left > 0 ? `${left} ${left === 1 ? "Tipp" : "Tipps"} übrig, einer nach dem anderen` : "Jetzt schaffst du es!";
  }

  function quickLabelFor(task) {
    if (task.typ === "term") return "Schnell-Check: Ergebnis =";
    if (task.typ === "gleichung") return "Schnell-Check: x =";
    return `Schnell-Check: ${task.variable.replace(/^x\s*=\s*/i, "")} =`;
  }

  function renderTask() {
    const level = currentLevel();
    const task = currentTask();
    el.taskTitle.textContent = `Aufgabe ${taskIndex + 1} von ${level.aufgaben.length}`;
    el.display.innerHTML = taskDisplayHtml(task);
    el.quickLabel.textContent = quickLabelFor(task);
    el.quickInput.value = "";
    el.quickResult.className = "g7-quick-result";
    el.quickResult.innerHTML = "";
    hintLevel = 0;
    renderHints();
    renderChips();
    clearPhoto();
    ink.clear(true);
    el.feedback.innerHTML = "";
    progress.last = { stufe: level.id, aufgabe: taskIndex };
    saveProgress();
  }

  function selectLevel(index, task) {
    levelIndex = (index + levels.length) % levels.length;
    const level = currentLevel();
    taskIndex = task === undefined ? firstOpenTask(level) : Math.min(Math.max(0, task), level.aufgaben.length - 1);
    try {
      const url = new URL(location.href);
      url.searchParams.set("stufe", String(level.nr));
      history.replaceState(null, "", url);
    } catch {
      // file:// ohne History: egal
    }
    renderPath();
    renderLevel();
    renderTask();
  }

  function selectTask(index) {
    taskIndex = index;
    renderTask();
  }

  function stepTask(direction) {
    const count = currentLevel().aufgaben.length;
    const target = taskIndex + direction;
    if (target >= 0 && target < count) {
      selectTask(target);
      return;
    }
    const nextLevel = levelIndex + direction;
    if (nextLevel < 0 || nextLevel >= levels.length) return;
    selectLevel(nextLevel, direction > 0 ? 0 : levels[nextLevel].aufgaben.length - 1);
  }

  /* ---------- Schnell-Check ---------- */

  function showQuick(ok, html) {
    el.quickResult.className = `g7-quick-result ${ok ? "is-ok" : "is-no"}`;
    el.quickResult.innerHTML = html;
  }

  function quickCheck() {
    const task = currentTask();
    const value = R.parseUserNumber(el.quickInput.value);
    if (!value) {
      showQuick(false, "<p>Gib eine Zahl ein, zum Beispiel 7 oder −3.</p>");
      return;
    }
    let ok = false;
    if (task.typ === "term") {
      ok = value.equals(task.loesung);
      showQuick(
        ok,
        ok
          ? `<p><b>Richtig!</b></p><div class="g7-line">${hand(`${R.substituteX(task.term, task.x)} = ${task.loesung}`)}</div>`
          : `<p><b>Noch nicht.</b> Setze für x die ${escapeHtml(task.x.toString())} ein und denk an Punkt vor Strich.</p>`,
      );
    } else if (task.typ === "gleichung") {
      const probe = R.probe(task.gleichung, value);
      ok = Boolean(probe && probe.holds);
      showQuick(
        ok,
        `
          <p><b>${ok ? "Richtig!" : "Noch nicht."}</b> Probe mit x = ${escapeHtml(value.toString())}:</p>
          <div class="g7-line">${hand(`${probe.left} = ${probe.right}`)}</div>
          <div class="g7-line">${hand(`${probe.leftValue} ${ok ? "=" : "≠"} ${probe.rightValue} ${ok ? "✓" : "✗"}`)}</div>
          <p>${ok ? "Deine Zahl macht die Gleichung wahr. Lass jetzt noch deinen Rechenweg prüfen." : "Die beiden Seiten sind nicht gleich. Prüfe deinen Rechenweg."}</p>
        `,
      );
    } else {
      ok = Boolean(task.loesung && value.equals(task.loesung));
      const probe = ok ? R.probe(task.modell, value) : null;
      showQuick(
        ok,
        ok
          ? `<p><b>Richtig!</b> Probe mit deiner Zahl:</p><div class="g7-line">${hand(`${probe.left} = ${probe.right} ✓`)}</div>${task.typ === "profi" ? "<p>Setze x jetzt in die anderen Terme ein.</p>" : ""}`
          : "<p><b>Noch nicht.</b> Passt deine Zahl zu allen Angaben im Text? Setze sie in deine Gleichung ein.</p>",
      );
    }
    if (ok && !taskState(task).schnell) {
      markTask(task, { schnell: true });
      renderChips();
    }
  }

  /* ---------- Foto ---------- */

  function clearPhoto() {
    photo.file = null;
    photo.upload = null;
    photo.ready = Promise.resolve(null);
    el.photoInput.value = "";
    el.cameraInput.value = "";
    el.canvas.hidden = true;
    el.previewEmpty.hidden = false;
    el.preview.classList.remove("has-photo");
  }

  function drawPreview(img) {
    const scale = Math.min(1, 820 / img.naturalWidth);
    el.canvas.width = Math.round(img.naturalWidth * scale);
    el.canvas.height = Math.round(img.naturalHeight * scale);
    el.canvas.getContext("2d").drawImage(img, 0, 0, el.canvas.width, el.canvas.height);
    el.canvas.hidden = false;
    el.previewEmpty.hidden = true;
    el.preview.classList.add("has-photo");
  }

  function toJpeg(img, file) {
    return new Promise((resolve) => {
      const scale = Math.min(1, 1800 / Math.max(img.naturalWidth, img.naturalHeight));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(img.naturalWidth * scale));
      canvas.height = Math.max(1, Math.round(img.naturalHeight * scale));
      const context = canvas.getContext("2d");
      if (!context) {
        resolve(file);
        return;
      }
      context.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(file);
            return;
          }
          const name = (file.name || "rechenweg").replace(/\.[^.]+$/, "") + ".jpg";
          resolve(new File([blob], name, { type: "image/jpeg", lastModified: Date.now() }));
        },
        "image/jpeg",
        0.9,
      );
    });
  }

  function loadPhoto(file) {
    if (!file) return;
    el.feedback.innerHTML = "";
    photo.file = file;
    photo.upload = file;
    const img = new Image();
    photo.ready = new Promise((resolve) => {
      img.onload = async () => {
        URL.revokeObjectURL(img.src);
        drawPreview(img);
        photo.upload = await toJpeg(img, file);
        resolve(photo.upload);
      };
      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        clearPhoto();
        renderInfo("Foto nicht lesbar", "Das Foto konnte nicht geöffnet werden. Versuche es noch einmal oder wähle ein JPG-Foto.");
        resolve(null);
      };
    });
    img.src = URL.createObjectURL(file);
  }

  /* ---------- Schreibfeld fuer Stift und Finger (z. B. iPad) ---------- */

  const INK_COLOR = "#1d2b6b";
  const GRID = 28;

  function createInkPad(canvas, { onChange, onPen }) {
    const ctx = canvas.getContext("2d");
    let strokes = [];
    const history = [];
    let current = null;
    let erasing = null;
    let tool = "stift";
    let penSeen = false;
    let width = 0;
    let height = 0;

    // Stift: Strichbreite nach Druck, Finger und Maus: gleich breit
    const lineWidth = (stroke, point) => (stroke.pen ? 1.4 + point.p * 2.8 : 3);

    function pointOf(event) {
      const rect = canvas.getBoundingClientRect();
      return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
        p: event.pressure > 0 ? event.pressure : 0.5,
      };
    }

    function prepare(target) {
      target.strokeStyle = INK_COLOR;
      target.lineCap = "round";
      target.lineJoin = "round";
    }

    function drawStroke(target, stroke, dx, dy) {
      const pts = stroke.points;
      prepare(target);
      if (pts.length < 3) {
        const first = pts[0];
        const last = pts[pts.length - 1];
        target.lineWidth = lineWidth(stroke, last);
        target.beginPath();
        target.moveTo(first.x - dx, first.y - dy);
        target.lineTo(last.x - dx + 0.01, last.y - dy);
        target.stroke();
        return;
      }
      let start = pts[0];
      for (let i = 1; i < pts.length - 1; i += 1) {
        const mid = { x: (pts[i].x + pts[i + 1].x) / 2, y: (pts[i].y + pts[i + 1].y) / 2 };
        target.lineWidth = lineWidth(stroke, pts[i]);
        target.beginPath();
        target.moveTo(start.x - dx, start.y - dy);
        target.quadraticCurveTo(pts[i].x - dx, pts[i].y - dy, mid.x - dx, mid.y - dy);
        target.stroke();
        start = mid;
      }
      const last = pts[pts.length - 1];
      target.beginPath();
      target.moveTo(start.x - dx, start.y - dy);
      target.lineTo(last.x - dx, last.y - dy);
      target.stroke();
    }

    function redraw() {
      ctx.clearRect(0, 0, width, height);
      strokes.forEach((stroke) => drawStroke(ctx, stroke, 0, 0));
      onChange(strokes.length === 0);
    }

    // Beim Schreiben nur das neue Stueck zeichnen, damit es fluessig bleibt
    function extend(stroke) {
      const pts = stroke.points;
      prepare(ctx);
      while (stroke.drawn < pts.length - 1) {
        const i = stroke.drawn;
        if (i === 0) {
          stroke.mid = pts[0];
          stroke.drawn = 1;
          continue;
        }
        const mid = { x: (pts[i].x + pts[i + 1].x) / 2, y: (pts[i].y + pts[i + 1].y) / 2 };
        ctx.lineWidth = lineWidth(stroke, pts[i]);
        ctx.beginPath();
        ctx.moveTo(stroke.mid.x, stroke.mid.y);
        ctx.quadraticCurveTo(pts[i].x, pts[i].y, mid.x, mid.y);
        ctx.stroke();
        stroke.mid = mid;
        stroke.drawn = i + 1;
      }
    }

    function distanceToSegment(p, a, b) {
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const lengthSq = dx * dx + dy * dy;
      const t = lengthSq ? Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / lengthSq)) : 0;
      return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
    }

    function touches(stroke, point) {
      const pts = stroke.points;
      if (pts.length === 1) return Math.hypot(pts[0].x - point.x, pts[0].y - point.y) <= 16;
      for (let i = 1; i < pts.length; i += 1) {
        if (distanceToSegment(point, pts[i - 1], pts[i]) <= 12 + lineWidth(stroke, pts[i])) return true;
      }
      return false;
    }

    // Radierer loescht ganze Striche, die er beruehrt; der Weg wird lueckenlos abgefahren
    function eraseAlong(to) {
      const from = erasing.last || to;
      const steps = Math.max(1, Math.ceil(Math.hypot(to.x - from.x, to.y - from.y) / 6));
      let changed = false;
      for (let s = 1; s <= steps; s += 1) {
        const point = { x: from.x + ((to.x - from.x) * s) / steps, y: from.y + ((to.y - from.y) * s) / steps };
        for (let i = strokes.length - 1; i >= 0; i -= 1) {
          if (touches(strokes[i], point)) {
            erasing.items.push({ index: i, stroke: strokes[i] });
            strokes.splice(i, 1);
            changed = true;
          }
        }
      }
      erasing.last = to;
      if (changed) redraw();
    }

    canvas.addEventListener("pointerdown", (event) => {
      if (event.pointerType === "pen" && !penSeen) {
        penSeen = true;
        onPen();
      }
      // Mit Stift: aufliegende Hand (touch) schreibt nicht mit
      if (penSeen && event.pointerType === "touch") return;
      if (event.pointerType === "mouse" && event.button !== 0) return;
      if (current || erasing) return;
      event.preventDefault();
      try {
        canvas.setPointerCapture(event.pointerId);
      } catch {
        // ohne Capture schreibt es trotzdem, nur nicht ueber den Rand hinaus
      }
      const point = pointOf(event);
      // Werkzeug Radierer oder Radierer-Taste am Stift
      if (tool === "radierer" || (event.buttons & 32) === 32) {
        erasing = { pointerId: event.pointerId, items: [], last: null };
        eraseAlong(point);
        return;
      }
      current = { pen: event.pointerType === "pen", points: [point], drawn: 0, pointerId: event.pointerId };
      strokes.push(current);
      onChange(false);
    });

    canvas.addEventListener("pointermove", (event) => {
      const active = current || erasing;
      if (!active || event.pointerId !== active.pointerId) return;
      event.preventDefault();
      const coalesced = typeof event.getCoalescedEvents === "function" ? event.getCoalescedEvents() : [];
      const events = coalesced.length ? coalesced : [event];
      if (erasing) {
        events.forEach((item) => eraseAlong(pointOf(item)));
        return;
      }
      events.forEach((item) => current.points.push(pointOf(item)));
      extend(current);
    });

    function finish(event) {
      if (erasing && event.pointerId === erasing.pointerId) {
        if (erasing.items.length) history.push({ type: "erase", items: erasing.items });
        erasing = null;
        return;
      }
      if (!current || event.pointerId !== current.pointerId) return;
      history.push({ type: "add", stroke: current });
      current = null;
      redraw();
    }

    canvas.addEventListener("pointerup", finish);
    canvas.addEventListener("pointercancel", finish);

    function resize() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      width = rect.width;
      height = rect.height;
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      redraw();
    }

    /** Beschriebenen Bereich zuschneiden und als PNG liefern (weiss, zartes Karo). */
    function toFile() {
      if (!strokes.length) return Promise.resolve(null);
      let minX = Infinity;
      let minY = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      strokes.forEach((stroke) =>
        stroke.points.forEach((q) => {
          minX = Math.min(minX, q.x);
          minY = Math.min(minY, q.y);
          maxX = Math.max(maxX, q.x);
          maxY = Math.max(maxY, q.y);
        }),
      );
      const margin = 30;
      minX = Math.max(0, minX - margin);
      minY = Math.max(0, minY - margin);
      maxX = Math.min(width, maxX + margin);
      maxY = Math.min(height, maxY + margin);
      const w = Math.max(40, maxX - minX);
      const h = Math.max(40, maxY - minY);
      const scale = Math.min(2, 1800 / Math.max(w, h));
      const out = document.createElement("canvas");
      out.width = Math.round(w * scale);
      out.height = Math.round(h * scale);
      const target = out.getContext("2d");
      target.fillStyle = "#ffffff";
      target.fillRect(0, 0, out.width, out.height);
      target.setTransform(scale, 0, 0, scale, 0, 0);
      target.strokeStyle = "#e6edf3";
      target.lineWidth = 1;
      target.beginPath();
      for (let gx = Math.ceil(minX / GRID) * GRID; gx <= maxX; gx += GRID) {
        target.moveTo(gx - minX, 0);
        target.lineTo(gx - minX, h);
      }
      for (let gy = Math.ceil(minY / GRID) * GRID; gy <= maxY; gy += GRID) {
        target.moveTo(0, gy - minY);
        target.lineTo(w, gy - minY);
      }
      target.stroke();
      strokes.forEach((stroke) => drawStroke(target, stroke, minX, minY));
      return new Promise((resolve) =>
        out.toBlob(
          (blob) =>
            resolve(blob ? new File([blob], "rechenweg-stift.png", { type: "image/png", lastModified: Date.now() }) : null),
          "image/png",
        ),
      );
    }

    return {
      resize,
      toFile,
      isEmpty: () => strokes.length === 0,
      setTool(next) {
        tool = next;
      },
      undo() {
        const action = history.pop();
        if (!action) return;
        if (action.type === "add") strokes = strokes.filter((stroke) => stroke !== action.stroke);
        if (action.type === "erase") {
          action.items.slice().reverse().forEach(({ index, stroke }) => strokes.splice(index, 0, stroke));
        }
        if (action.type === "clear") strokes = action.strokes.slice();
        redraw();
      },
      /** reset: neue Aufgabe, ohne Rueckgaengig-Schritt */
      clear(reset) {
        if (reset) {
          strokes = [];
          history.length = 0;
          current = null;
          erasing = null;
          redraw();
          return;
        }
        if (!strokes.length) return;
        history.push({ type: "clear", strokes: strokes.slice() });
        strokes = [];
        redraw();
      },
      grow() {
        canvas.style.height = `${Math.min(1400, canvas.getBoundingClientRect().height + 220)}px`;
        resize();
      },
    };
  }

  const ink = createInkPad(el.inkCanvas, {
    onChange: (empty) => {
      el.inkEmpty.hidden = !empty;
    },
    onPen: () => {
      el.inkNote.textContent = "Stift erkannt: Deine Hand darf auf dem Bildschirm liegen.";
    },
  });

  const CHECK_STEPS = {
    foto: [
      ["Im Heft rechnen", "jeden Schritt in eine neue Zeile, mit Kommandostrich"],
      ["Foto machen", "hell, gerade, nur diese Aufgabe"],
      ["Prüfen lassen", "die KI liest, der Computer rechnet nach"],
    ],
    stift: [
      ["Ins Feld schreiben", "mit Stift oder Finger, eine Zeile pro Schritt"],
      ["Kurz kontrollieren", "gut lesbar? Mit dem Radierer verbessern"],
      ["Prüfen lassen", "die KI liest, der Computer rechnet nach"],
    ],
  };

  let mode = "foto";

  function setMode(next) {
    mode = next === "stift" ? "stift" : "foto";
    el.modeButtons.forEach((button) => {
      const active = button.dataset.mode === mode;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    el.modeFoto.hidden = mode !== "foto";
    el.preview.hidden = mode !== "foto";
    el.modeStift.hidden = mode !== "stift";
    el.checkSteps.innerHTML = CHECK_STEPS[mode]
      .map(([title, text]) => `<li><b>${escapeHtml(title)}</b><span>${escapeHtml(text)}</span></li>`)
      .join("");
    if (mode === "stift") ink.resize();
    if (progress.abgabe !== mode) {
      progress.abgabe = mode;
      saveProgress();
    }
  }

  function setTool(next) {
    ink.setTool(next);
    el.inkTools.forEach((button) => {
      const active = button.dataset.tool === next;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    el.modeStift.classList.toggle("is-eraser", next === "radierer");
  }

  /* ---------- Rueckmeldung ---------- */

  function renderInfo(title, text) {
    el.feedback.innerHTML = `
      <div class="g7-fb is-info">
        <div class="g7-fb-head">
          <span class="g7-fb-icon" aria-hidden="true">?</span>
          <div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(text)}</p></div>
        </div>
      </div>
    `;
  }

  function box(kind, title, text) {
    if (!text) return "";
    return `<div class="g7-fb-box is-${kind}">${ICONS[kind] || ""}<p><b>${escapeHtml(title)}</b>${escapeHtml(text)}</p></div>`;
  }

  /* Gestufte Hilfe: Zeile davor mit Kommandostrich, darunter die richtige Zeile */
  function reveal(label, previous, op, line) {
    if (!line) return "";
    const first = previous && op ? `<div class="g7-line">${hand(previous)}${cmd(op)}</div>` : "";
    return `
      <details class="g7-reveal">
        <summary>${escapeHtml(label)}</summary>
        <div class="g7-paper">${first}<div class="g7-line">${hand(line)}</div></div>
      </details>
    `;
  }

  const STATUS_TEXT = {
    ok: ["✓", "richtig"],
    fehler: ["✗", "hier ist der Fehler"],
    folge: ["→", "danach richtig weitergerechnet"],
    unklar: ["?", "nicht sicher gelesen"],
  };

  const PROBE_TEXT = {
    richtig: "★ Probe richtig",
    keine: "Probe fehlt noch",
    falsch: "Probe stimmt noch nicht",
    "zeigt-fehler": "Deine Probe zeigt: Da stimmt etwas nicht",
  };

  function renderFeedback(data, task) {
    const level = currentLevel();
    const readable = data.lesbar !== false && data.passtZurAufgabe !== false;
    const kind = !readable ? "info" : data.correct && data.fertig ? "ok" : data.correct ? "next" : "error";
    const title = !data.lesbar
      ? "Foto nicht lesbar"
      : data.passtZurAufgabe === false
        ? "Andere Aufgabe?"
        : data.correct && data.fertig
          ? "Richtig gelöst!"
          : data.correct
            ? "Bis hierhin richtig"
            : "Ein Fehler steckt drin";
    const icon = { ok: "✓", next: "→", error: "!", info: "?" }[kind];
    const zeilen = data.zeilen || [];
    const errorPos = (data.fehlerZeile || 0) - 1;
    const beforeError =
      errorPos >= 1 && zeilen[errorPos - 1] ? zeilen[errorPos - 1].text : task.typ === "gleichung" ? task.gleichung : "";
    const lastLine = zeilen.length ? zeilen[zeilen.length - 1].text : "";

    const lines = zeilen
      .map((line) => {
        const status = STATUS_TEXT[line.status] ? line.status : "unklar";
        const [symbol, label] = STATUS_TEXT[status];
        return `
          <div class="g7-fb-line is-${status}">
            <span class="g7-mark is-${status}" role="img" aria-label="${label}">${symbol}</span>
            <div class="g7-line">${hand(line.text)}${cmd(line.umformung)}${status === "fehler" ? '<span class="g7-fb-tag">Hier ist der Fehler</span>' : ""}</div>
          </div>
        `;
      })
      .join("");

    const probe = data.probe && data.probe !== "entfaellt" && readable && (data.fertig || data.probe !== "keine")
      ? `<span class="g7-probe is-${escapeHtml(data.probe)}">${escapeHtml(PROBE_TEXT[data.probe] || "")}</span>`
      : "";

    let extra = "";
    if (data.correct && data.fertig) {
      const hadStar = taskState(task).stern;
      markTask(task, { geloest: true, schnell: true, stern: hadStar || data.probe === "richtig" });
      renderChips();
      renderPath();
      renderHero();
      const solved = solvedCount(level);
      const nextLevel = levels[levelIndex + 1];
      if (solved === level.aufgaben.length) {
        extra = `
          <div class="g7-level-done">
            <strong>Stufe ${level.nr} geschafft!</strong>
            <span>Du hast alle ${level.aufgaben.length} Aufgaben gelöst${starCount(level) ? `, ${starCount(level)} davon mit Probe` : ""}.</span>
            ${nextLevel ? `<button type="button" class="g7-btn g7-btn-soft" data-go-level="${levelIndex + 1}">Weiter zu Stufe ${nextLevel.nr}: ${escapeHtml(nextLevel.titel)} &rsaquo;</button>` : ""}
          </div>
        `;
      } else {
        extra = `<button type="button" class="g7-btn g7-btn-soft" data-next-task>Nächste Aufgabe &rsaquo;</button>`;
      }
    }

    el.feedback.innerHTML = `
      <div class="g7-fb is-${kind}">
        <div class="g7-fb-head">
          <span class="g7-fb-icon" aria-hidden="true">${icon}</span>
          <div><h3>${escapeHtml(title)}</h3>${data.summary ? `<p>${escapeHtml(data.summary)}</p>` : ""}</div>
        </div>
        ${lines ? `<div class="g7-paper g7-fb-lines" aria-label="Dein Rechenweg, wie die KI ihn gelesen hat">${lines}</div>` : ""}
        ${readable ? box("lob", "Das ist schon gut: ", data.lob) : ""}
        ${!data.correct ? box("hint", "Denkanstoß: ", data.denkanstoss) : ""}
        ${data.nachFehlerRichtig ? box("folge", "", "Nach dem Fehler hast du richtig weitergerechnet. Verbessere die markierte Zeile, dann passt auch der Rest.") : ""}
        ${!data.correct ? reveal("Richtige Zeile zeigen", beforeError, data.loesungsUmformung, data.loesungsschritt) : ""}
        ${box("next", data.correct && data.fertig ? "" : "So geht's weiter: ", data.naechsterSchritt)}
        ${data.correct && !data.fertig ? reveal("Nächste Zeile zeigen", lastLine, data.naechsteUmformung, data.naechsteZeile) : ""}
        ${data.hinweis ? `<p class="g7-fb-tip">Tipp: ${escapeHtml(data.hinweis)}</p>` : ""}
        ${extra}
        <div class="g7-fb-footer">
          ${probe}
          <p class="g7-fb-meta">${data.geprueft === "rechner" ? "Die KI hat gelesen, der Computer hat jede Zeile nachgerechnet." : "Geprüft von der KI."}</p>
        </div>
      </div>
    `;
  }

  function renderLegacy(data) {
    const lines = String(data.analysis || "")
      .split(/\n+/)
      .map((line) => line.replace(/^\[(ok|fehler|fehlt)\]\s*/i, "").trim())
      .filter(Boolean);
    el.feedback.innerHTML = `
      <div class="g7-fb ${data.correct ? "is-next" : "is-error"}">
        <div class="g7-fb-head">
          <span class="g7-fb-icon" aria-hidden="true">${data.correct ? "✓" : "!"}</span>
          <div><h3>${data.correct ? "Sieht gut aus" : "Noch nicht richtig"}</h3><p>${escapeHtml(data.summary || "")}</p></div>
        </div>
        ${lines.length ? `<ul class="g7-list">${lines.map((line) => `<li>${escapeHtml(line)}</li>`).join("")}</ul>` : ""}
        ${box("next", "So geht's weiter: ", data.suggestion)}
      </div>
    `;
  }

  function setChecking(on) {
    checking = on;
    el.checkButton.disabled = on;
    el.checkButton.textContent = on ? "Prüfe …" : "Rechenweg prüfen";
  }

  async function submitPhoto(event) {
    event.preventDefault();
    if (checking) return;
    let file = null;
    if (mode === "stift") {
      if (ink.isEmpty()) {
        renderInfo("Noch nichts geschrieben", "Schreib zuerst deinen Rechenweg in das Feld: eine Zeile pro Schritt.");
        return;
      }
      file = await ink.toFile();
    } else {
      file = (await photo.ready) || photo.upload || photo.file;
    }
    if (!file) {
      renderInfo("Foto fehlt", "Wähle zuerst ein Foto von deinem Rechenweg aus oder nimm eins mit der Kamera auf.");
      return;
    }
    const level = currentLevel();
    const task = currentTask();
    const form = new FormData();
    form.append("klasse", "7");
    form.append("aufgabenTyp", task.typ);
    form.append("taskLevel", `Stufe ${level.nr} · ${level.titel.replace(/\u00AD/g, "")}`);
    form.append("equation", task.text);
    if (task.typ === "term") {
      form.append("term", task.term);
      form.append("xWert", String(task.x.toNumber()));
    }
    if (task.typ === "gleichung") form.append("gleichung", task.gleichung);
    if (task.modell) {
      form.append("modell", task.modell);
      form.append("variable", task.variable || "");
    }
    if (task.werte && task.werte.length) form.append("werte", JSON.stringify(task.werte));
    form.append("quelle", mode);
    form.append("image", file);

    setChecking(true);
    el.feedback.innerHTML = `
      <div class="g7-fb is-info">
        <div class="g7-fb-head">
          <span class="g7-fb-icon" aria-hidden="true">…</span>
          <div><h3>Ich prüfe deinen Rechenweg …</h3><p>Das dauert meist 10 bis 20 Sekunden. Beim ersten Mal am Tag kann es länger dauern, weil der Server erst startet.</p></div>
        </div>
      </div>
    `;
    try {
      const response = await fetch(API_URL, { method: "POST", body: form });
      const payload = await response.json().catch(() => ({}));
      let data = payload.feedbackData;
      if (!data && typeof payload.feedback === "string") {
        try {
          data = JSON.parse(payload.feedback);
        } catch {
          data = null;
        }
      }
      if (!data) throw new Error("Die Antwort des Servers war leer. Bitte versuche es noch einmal.");
      if (task !== currentTask()) return;
      if (data.modus === "klasse7") renderFeedback(data, task);
      else renderLegacy(data);
    } catch (error) {
      renderInfo(
        "Prüfung gerade nicht möglich",
        error instanceof TypeError
          ? "Der Prüf-Server antwortet gerade nicht. Warte eine Minute und versuche es noch einmal."
          : error.message,
      );
    } finally {
      setChecking(false);
    }
  }

  /* ---------- Ereignisse ---------- */

  el.path.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level]");
    if (button) selectLevel(Number(button.dataset.level));
  });
  el.chips.addEventListener("click", (event) => {
    const button = event.target.closest("[data-task]");
    if (button) selectTask(Number(button.dataset.task));
  });
  el.prev.addEventListener("click", () => stepTask(-1));
  el.next.addEventListener("click", () => stepTask(1));
  el.hintButton.addEventListener("click", () => {
    hintLevel += 1;
    renderHints();
  });
  el.quickForm.addEventListener("submit", (event) => {
    event.preventDefault();
    quickCheck();
  });
  el.photoInput.addEventListener("change", () => loadPhoto(el.photoInput.files[0]));
  el.cameraInput.addEventListener("change", () => loadPhoto(el.cameraInput.files[0]));
  el.cameraButton.addEventListener("click", () => el.cameraInput.click());
  el.photoForm.addEventListener("submit", submitPhoto);
  el.modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
  el.inkTools.forEach((button) => button.addEventListener("click", () => setTool(button.dataset.tool)));
  el.modeStift.addEventListener("click", (event) => {
    const action = event.target.closest("[data-ink]");
    if (!action) return;
    if (action.dataset.ink === "undo") ink.undo();
    if (action.dataset.ink === "clear") ink.clear(false);
    if (action.dataset.ink === "grow") ink.grow();
  });
  let resizeFrame = 0;
  window.addEventListener("resize", () => {
    cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      if (mode === "stift") ink.resize();
    });
  });
  el.feedback.addEventListener("click", (event) => {
    if (event.target.closest("[data-next-task]")) stepTask(1);
    const levelButton = event.target.closest("[data-go-level]");
    if (levelButton) selectLevel(Number(levelButton.dataset.goLevel), 0);
  });

  const start = initialPosition();
  levelIndex = start.level;
  taskIndex = start.task;
  renderHero();
  renderPath();
  renderLevel();
  renderTask();
  setMode(progress.abgabe);
})();
