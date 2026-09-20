(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
  let selected, student, exam;
  async function request(route, body) {
    const res = await fetch(API + "/api/nt7/" + route, body ? {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)} : {});
    const data = await res.json();
    if (!res.ok) throw new Error(({locked:"Diese Probe ist noch gesperrt.",already_submitted:"Diese Probe wurde unter diesem Namen bereits abgegeben.",submission_in_progress:"Eine Abgabe läuft bereits."})[data.error] || data.error || "Serverfehler");
    return data;
  }
  function status(message, bad = false) { $("status").textContent = message; $("status").classList.toggle("bad",bad); $("status").hidden = false; }
  async function load() {
    try {
      const data = await request("list");
      $("exam-list").innerHTML = data.tests.map(t => `<article class="exam-tile"><div><div class="eyebrow">${esc(t.scope)}</div><h2>${esc(t.title)}</h2><p>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · etwa ${t.minutes} Minuten</p></div><div><span class="pill ${t.unlocked ? "open" : ""}">${t.unlocked ? "Freigeschaltet" : "Gesperrt"}</span><br><button class="btn" data-test="${t.id}" ${t.unlocked ? "" : "disabled"}>Auswählen</button></div></article>`).join("");
      status("Wähle eine freigeschaltete Probe. Zur Vorbereitung kannst du jederzeit zur Luft-Reihe zurückgehen.");
      const desired = params.get("probe") === "2" ? "nt7-luft-2" : "nt7-luft-1";
      const test = data.tests.find(t => t.id === desired && t.unlocked);
      if (test) select(test);
    } catch (e) { status("Der Probenserver ist noch nicht erreichbar. Die Lernsequenzen funktionieren unabhängig davon. " + e.message,true); }
  }
  function select(t) {
    selected = t;
    $("selected-title").textContent = t.title;
    $("identity-section").hidden = false;
    $("identity-section").scrollIntoView({behavior:"smooth"});
  }
  function itemMarkup(item) {
    const image = item.image ? `<figure class="figure exam-image"><img src="${esc(item.image)}" alt="${esc(item.imageAlt || "Bild zur Aufgabe")}"></figure>` : "";
    let controls = "";
    if (item.type === "choice") controls = `<div class="options">${item.options.map((o,j) => `<label class="option"><input type="radio" name="item-${item.nr}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    if (item.type === "match") controls = item.labels.map((label,j) => `<label class="match-row"><strong>${esc(label)}</strong><select data-match="${j}"><option value="">Bitte zuordnen</option>${item.targets.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "text") controls = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="4" maxlength="1500" placeholder="Schreibe deine Antwort in eigenen Worten."></textarea>`;
    return `<section class="check exam-question" data-nr="${item.nr}"><div class="question-head"><span class="pill">Aufgabe ${item.nr}</span><span>${item.points} ${item.points === 1 ? "Punkt" : "Punkte"}</span></div><h3>${esc(item.prompt)}</h3>${image}${controls}</section>`;
  }
  function collect() {
    return exam.items.map(item => {
      const el = document.querySelector(`[data-nr="${item.nr}"]`);
      if (item.type === "choice") { const radio = el.querySelector("input:checked"); return radio ? Number(radio.value) : null; }
      if (item.type === "match") return [...el.querySelectorAll("select")].map(select => select.value);
      return el.querySelector("textarea").value.trim();
    });
  }
  function resultMarkup(detail) {
    const given = Array.isArray(detail.given) ? detail.given.map((v,j) => `${esc(detail.labels[j])}: ${esc(v || "–")}`).join("<br>") : esc(detail.given || "–");
    const expected = Array.isArray(detail.expected) ? detail.expected.map((v,j) => `${esc(detail.labels[j])}: ${esc(v)}`).join("<br>") : esc(detail.expected);
    return `<div class="result-row"><div class="question-head"><strong>Aufgabe ${detail.nr}</strong><strong>${detail.points} / ${detail.maxPoints}</strong></div><p>${esc(detail.prompt)}</p><p><b>Deine Antwort:</b><br>${given}</p><p><b>Lösung:</b><br>${expected}</p>${detail.comment ? `<p class="video-note">${esc(detail.comment)}</p>` : ""}</div>`;
  }
  $("exam-list").addEventListener("click", e => {
    const button = e.target.closest("[data-test]");
    if (!button) return;
    const t = selected?.id === button.dataset.test ? selected : [...$("exam-list").querySelectorAll("[data-test]")].find(b => b.dataset.test === button.dataset.test);
    select({id:button.dataset.test,title:button.closest("article").querySelector("h2").textContent});
  });
  $("identity-form").addEventListener("submit", async e => {
    e.preventDefault();
    student = Object.fromEntries(new FormData(e.currentTarget));
    const button = e.currentTarget.querySelector("button"); button.disabled = true;
    try {
      const data = await request("start",{testId:selected.id,...student}); exam = data;
      $("identity-section").hidden = true; $("exam-list").hidden = true; $("status").hidden = true;
      $("questions-section").hidden = false;
      $("exam-kicker").textContent = data.test.scope;
      $("exam-title").textContent = data.test.title;
      $("exam-points").textContent = data.test.maxPoints + " Punkte";
      $("questions").innerHTML = data.items.map(itemMarkup).join("");
      window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) { status(err.message,true); window.scrollTo({top:0,behavior:"smooth"}); }
    finally { button.disabled = false; }
  });
  $("exam-form").addEventListener("submit", async e => {
    e.preventDefault();
    if (!confirm("Probe wirklich abgeben? Danach kannst du nichts mehr ändern.")) return;
    const button = $("submit-exam"); button.disabled = true; button.textContent = "Wird ausgewertet ...";
    try {
      const data = await request("submit",{testId:exam.test.id,...student,answers:collect()});
      $("questions-section").hidden = true;
      const r = data.result;
      $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Dein Ergebnis</h1><div class="score-line"><strong>${r.score} / ${r.total}</strong><span>${r.percent} % · Note ${r.grade}</span></div>${r.needsReview ? `<p class="notice">Einige freie Antworten wurden nur vorläufig mit Stichwörtern bewertet, weil die KI nicht erreichbar war. Die Lehrkraft kann die Punkte korrigieren.</p>` : ""}<h2>Lösungsschlüssel und Rückmeldung</h2>${r.details.map(resultMarkup).join("")}<p class="nextbar"><a class="btn secondary" href="index.html">Zurück zur Lernreihe</a></p>`;
      $("result-section").hidden = false; window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) { button.disabled = false; button.textContent = "Probe abgeben und auswerten"; status(err.message,true); window.scrollTo({top:0,behavior:"smooth"}); }
  });
  load();
})();
