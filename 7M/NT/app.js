(function () {
  "use strict";
  const content = window.NT_CONTENT;
  const nav = document.getElementById("course-nav");
  const main = document.getElementById("main");
  const key = "grumi-nt7-luft-progress-v1";
  let progress = {};
  try { progress = JSON.parse(localStorage.getItem(key) || "{}"); } catch (_) { progress = {}; }
  const esc = (s) => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
  const section = (title, html) => `<section class="unit-section"><h2>${title}</h2>${html}</section>`;
  const figure = (name, alt, caption) => `<figure class="figure"><img src="assets/${name}" alt="${esc(alt)}" loading="lazy"><figcaption>${esc(caption)}</figcaption></figure>`;
  function save() { localStorage.setItem(key, JSON.stringify(progress)); renderNav(); }
  function renderNav(active = new URLSearchParams(location.search).get("teil")) {
    nav.innerHTML = `<div class="nav-group"><button class="nav-item ${!active ? "active" : ""}" data-open="home">Übersicht</button></div>` +
      [1, 2].map(group => `<div class="nav-group"><div class="nav-title">Luft · Probe ${group}</div>` +
        content.units.filter(u => u.group === group).map((u, i) => `<button class="nav-item ${active === u.id ? "active" : ""} ${progress[u.id]?.done ? "done" : ""}" data-open="${u.id}"><span class="nav-number">${progress[u.id]?.done ? "✓" : (group - 1) * 4 + i + 1}</span><span>${esc(u.title)}</span></button>`).join("") +
        `<a class="nav-link" href="probe.html?probe=${group}">Probe ${group} öffnen →</a></div>`).join("") +
      `<div class="nav-group"><div class="nav-title">Weitere Themen</div>` + content.topics.map((t,i) => `<button class="nav-item ${active === "topic-"+i ? "active" : ""}" data-open="topic-${i}">${esc(t.title)}</button>`).join("") + `</div>`;
    const jump = document.getElementById("mobile-jump");
    jump.innerHTML = `<option value="home">Übersicht</option>` + [1,2].map(group => `<optgroup label="Luft · Probe ${group}">${content.units.filter(u => u.group === group).map(u => `<option value="${u.id}">${esc(u.title)}</option>`).join("")}</optgroup>`).join("") + `<optgroup label="Weitere Themen">${content.topics.map((t,i) => `<option value="topic-${i}">${esc(t.title)}</option>`).join("")}</optgroup>`;
    jump.value = active || "home";
  }
  function renderHome() {
    main.innerHTML = `<div class="eyebrow">Natur und Technik · Klasse 7M</div><h1>Luft verstehen</h1><p class="intro">Acht kurze Lernsequenzen führen dich durch die beiden Proben. Lies den Text, betrachte die Bilder aus dem Unterricht und prüfe dich nach jedem Abschnitt selbst. Du kannst alles direkt am Tablet bearbeiten.</p><div class="toolbar"><span class="pill">8 Lernsequenzen</span><span class="pill">2 Proben</span></div><div class="course-overview"><div class="overview-band"><div class="eyebrow">Probe 1 · Grundlagen</div><h2>Luft und Wind</h2><ul><li>Eigenschaften der Luft</li><li>78 % Stickstoff, 21 % Sauerstoff, 1 % Rest</li><li>Formeln und Moleküle</li><li>Luftdruck und Windkraft</li></ul><button class="btn" data-open="luft-alltag">Mit Teil 1 beginnen</button> <a href="probe.html?probe=1">Zur Probe 1</a></div><div class="overview-band orange"><div class="eyebrow">Probe 2 · Reaktionen und Umwelt</div><h2>Feuer und saubere Luft</h2><ul><li>Feuerdreieck und Brandschutz</li><li>Eisenwolle und Apfel</li><li>Schadstoffe, Smog und Feinstaub</li></ul><button class="btn" data-open="feuer">Mit Teil 5 beginnen</button> <a href="probe.html?probe=2">Zur Probe 2</a></div></div>${section("Weitere Themen", `<div class="topic-list">${content.topics.map((t,i) => `<div class="topic-row"><strong>${esc(t.title)}</strong><span>${t.parts.map(esc).join(" · ")} · Menüpunkte vorbereitet</span></div>`).join("")}</div>`)}`;
  }
  function renderCheck(c, i) {
    let body = "";
    if (c.type === "choice") body = `<div class="options">${c.options.map((o,j) => `<label class="option"><input type="radio" name="q${i}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    if (c.type === "match") {
      const opts = c.pairs.map(p => p[1]).slice().sort((a,b) => a.localeCompare(b, "de"));
      body = c.pairs.map((p,j) => `<label class="match-row"><strong>${esc(p[0])}</strong><select data-row="${j}"><option value="">Bitte zuordnen</option>${opts.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    }
    if (c.type === "reflect") body = `<textarea aria-label="Deine Antwort" placeholder="Schreibe deine Erklärung in eigenen Worten ..."></textarea>`;
    return `<div class="check" data-check="${i}"><h3>${i+1}. ${esc(c.prompt)}</h3>${body}<button class="btn secondary check-btn">${c.type === "reflect" ? "Musterantwort zeigen" : "Antwort prüfen"}</button><div class="feedback" hidden aria-live="polite"></div></div>`;
  }
  function renderUnit(u) {
    const idx = content.units.indexOf(u);
    const video = u.video ? section("Video", `${u.video.embed ? `<iframe class="video-frame" src="${u.video.embed}" title="${esc(u.video.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` : ""}<p><a href="${u.video.url}" target="_blank" rel="noopener noreferrer">${esc(u.video.title)} ↗</a></p><p class="video-note">${esc(u.video.note)}</p>`) : "";
    main.innerHTML = `<div class="eyebrow">Luft · Probe ${u.group} · Teil ${idx+1} von 8</div><h1>${esc(u.title)}</h1><p class="intro">${esc(u.lead)}</p>${section("Verstehen", u.paragraphs.map(p => `<p>${esc(p)}</p>`).join("") + figure(u.image,u.imageAlt,u.imageCaption) + (u.extraImage ? figure(u.extraImage,u.extraImageAlt,u.extraImageCaption) : ""))}${video}${section("Wortspeicher", `<div class="word-grid">${u.words.map(w => `<div class="word"><strong>${esc(w[0])}</strong><span>${esc(w[1])}</span></div>`).join("")}</div>`)}${section("Jetzt du", `<p>Prüfe jede Antwort direkt. Bei einer freien Erklärung kannst du deine Formulierung mit der Musterantwort vergleichen.</p>${u.checks.map(renderCheck).join("")}`)}<div class="nextbar"><button class="btn" id="finish-unit">${progress[u.id]?.done ? "Erneut als bearbeitet markieren" : "Teil abschließen"}</button>${content.units[idx+1] ? `<button class="btn secondary" data-open="${content.units[idx+1].id}">Nächster Teil →</button>` : `<a class="btn" href="probe.html?probe=2">Zur Probe 2 →</a>`}</div>`;
    main.querySelectorAll(".check-btn").forEach(button => button.addEventListener("click", () => check(u, Number(button.closest(".check").dataset.check))));
    document.getElementById("finish-unit").addEventListener("click", () => { progress[u.id] ||= {checks:[]}; progress[u.id].done = true; save(); document.getElementById("finish-unit").textContent = "Teil bearbeitet ✓"; });
  }
  function check(u, i) {
    const c = u.checks[i], el = main.querySelector(`[data-check="${i}"]`), feedback = el.querySelector(".feedback");
    let ok = false, message = "";
    if (c.type === "choice") {
      const input = el.querySelector("input:checked");
      if (!input) { message = "Wähle zuerst eine Antwort."; }
      else { ok = Number(input.value) === c.answer; message = `${ok ? "Richtig!" : `Noch nicht. Richtig ist: ${c.options[c.answer]}`} ${c.explain}`; }
    } else if (c.type === "match") {
      const values = [...el.querySelectorAll("select")].map(s => s.value);
      if (values.some(v => !v)) message = "Ordne zuerst alle Begriffe zu.";
      else { const count = values.filter((v,j) => v === c.pairs[j][1]).length; ok = count === values.length; message = `${count} von ${values.length} richtig. ${ok ? "Sehr gut!" : "Versuche es noch einmal."}`; }
    } else {
      message = `Musterantwort: ${c.expected}`;
      ok = Boolean(el.querySelector("textarea").value.trim());
      if (!ok) message += " Schreibe danach deine eigene Erklärung auf.";
    }
    feedback.textContent = message; feedback.hidden = false; feedback.classList.toggle("bad", !ok);
    if (ok) { progress[u.id] ||= {checks:[]}; progress[u.id].checks[i] = true; save(); }
  }
  function renderTopic(i) {
    const t = content.topics[i];
    main.innerHTML = `<div class="eyebrow">Natur und Technik · weiterer Themenbereich</div><h1>${esc(t.title)}</h1><p class="intro">Dieser Bereich ist im Menü bereits nach den vorhandenen Unterrichtspräsentationen gegliedert. Interaktive Lernsequenzen folgen hier später.</p>${section("Untermenüs", `<div class="topic-list">${t.parts.map((p,j) => `<div class="topic-row"><strong>${String(j+1).padStart(2,"0")} · ${esc(p)}</strong><span>In Vorbereitung</span></div>`).join("")}</div>`)}<div class="nextbar"><button class="btn secondary" data-open="home">Zur Luft-Reihe</button></div>`;
  }
  function open(id, history = true) {
    if (history) historyPush(id);
    if (id === "home") renderHome();
    else if (id.startsWith("topic-")) renderTopic(Number(id.split("-")[1]));
    else renderUnit(content.units.find(u => u.id === id) || content.units[0]);
    renderNav(id === "home" ? null : id);
    main.focus(); window.scrollTo({top:0,behavior:"instant"});
  }
  function historyPush(id) { history.pushState({}, "", id === "home" ? "index.html" : `?teil=${encodeURIComponent(id)}`); }
  document.addEventListener("click", e => { const button = e.target.closest("[data-open]"); if (button) open(button.dataset.open); });
  document.getElementById("mobile-jump").addEventListener("change", e => open(e.target.value));
  window.addEventListener("popstate", () => open(new URLSearchParams(location.search).get("teil") || "home", false));
  open(new URLSearchParams(location.search).get("teil") || "home", false);
})();
