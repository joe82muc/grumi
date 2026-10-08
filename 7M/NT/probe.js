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
    if (!res.ok) throw new Error(({locked:"Diese Probe ist noch gesperrt.",already_submitted:"Diese Probe wurde mit diesem Code bereits abgegeben.",submission_in_progress:"Eine Abgabe läuft bereits."})[data.error] || data.message || data.error || "Serverfehler");
    return data;
  }
  // Abgabe: Bei Netz- oder Serverfehler versucht es die Seite von selbst noch dreimal (die Antworten bleiben stehen).
  // Kam schon die erste Sendung an und nur die Antwort ging verloren, meldet der Server beim neuen Versuch
  // „schon abgegeben“ – dann ist die Abgabe da (angekommen), nur das Ergebnis lässt sich hier nicht mehr zeigen.
  async function abgeben(body, melde) {
    const FEHLER = {locked:"Diese Probe ist gesperrt. Sag deiner Lehrkraft Bescheid – deine Antworten bleiben hier stehen.",already_submitted:"Diese Probe wurde mit diesem Code bereits abgegeben."};
    let letzter = "";
    for (let versuch = 1; versuch <= 4; versuch++) {
      const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 70000);
      try {
        const res = await fetch(API + "/api/nt7/submit", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:ctl.signal});
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.result) return data;
        if (res.status === 409 && versuch > 1) return {angekommen:true};
        if (res.status === 409 && data.error === "submission_in_progress") letzter = "Eine Abgabe läuft bereits.";
        else if (res.status >= 400 && res.status < 500 && res.status !== 429) throw Object.assign(new Error(FEHLER[data.error] || data.message || data.error || "Die Abgabe wurde nicht angenommen."), {endgueltig:true});
        else letzter = "Der Server ist gerade nicht erreichbar.";
      } catch (err) {
        if (err.endgueltig) throw err;
        letzter = err.name === "AbortError" ? "Der Server antwortet nicht." : "Keine Verbindung zum Server.";
      } finally { clearTimeout(frist); }
      if (versuch < 4) { melde(letzter + " Neuer Versuch " + (versuch + 1) + " von 4 … Lass die Seite offen.", versuch + 1); await new Promise(r => setTimeout(r, 3000 * versuch)); }
    }
    throw new Error("Die Abgabe ist noch nicht angekommen (" + letzter + "). Deine Antworten bleiben hier stehen. Sag deiner Lehrkraft Bescheid und tippe dann noch einmal auf „Probe abgeben“.");
  }
  function status(message, bad = false) { $("status").textContent = message; $("status").classList.toggle("bad",bad); $("status").hidden = false; }
  // Zug (M oder R) und Themenbereich kommen aus dem Link der Übersicht (?zug=R&thema=mensch) oder aus dem Tab.
  // Proben mit Zug zeigt die Seite nur dem passenden Zug; die beiden ersten Luft-Proben (ohne Zug) sind für 7M.
  // Seit 07.10.2026 gibt es je Themenbereich eine Probe über alle seine Module (R- und M-Fassung). Frühere Fassungen
  // (alt) zeigt die Seite nur noch, solange sie freigeschaltet sind.
  const THEMEN = {luft: "Luft", atome: "Atome und Materie", tiere: "Tiere an Land und in der Luft", mensch: "Mensch und Gesundheit", strom: "Elektrizität"};
  let zug = /^[MR]$/i.test(params.get("zug") || "") ? params.get("zug").toUpperCase() : "";
  try { if (zug) sessionStorage.setItem("grumi-nt7-zug", zug); else zug = sessionStorage.getItem("grumi-nt7-zug") || ""; } catch (_e) {}
  const thema = THEMEN[params.get("thema")] ? params.get("thema") : "";
  const passt = t => (t.zug ? (!zug || t.zug === zug) : zug !== "R") && (!thema || (t.thema || "luft") === thema) && (!t.alt || t.unlocked);
  // Woher die Aufgabe stammt: Modul (Titel) und „Transfer“ – steht in der Probe und im Ergebnis bei jeder Aufgabe
  const herkunft = a => (a.modulTitel ? `<span class="pill herkunft" title="Diese Aufgabe gehört zu diesem Lernmodul">📘 ${esc(a.modulTitel)}</span>` : "") + (a.transfer ? `<span class="pill transfer" title="Hier wendest du dein Wissen auf etwas Neues an">🔁 Transfer</span>` : "");
  (function kopf() {
    const klasse = zug === "R" ? "7R" : zug === "M" ? "7M" : "7";
    const zurueck = zug === "R" ? "../../7R/NT/index.html" : "index.html";
    document.querySelector(".brand").setAttribute("href", zurueck);
    document.querySelector(".brand span").textContent = klasse + " / NT";
    document.querySelector(".top-tag").textContent = "Proben" + (thema ? " · " + THEMEN[thema] : "");
    document.querySelector("#exam-main > .eyebrow").textContent = "Natur und Technik · Klasse " + klasse;
    document.querySelector("#exam-main > h1").textContent = thema ? "Proben: " + THEMEN[thema] : "Proben Natur und Technik";
    document.title = "Proben" + (thema ? " " + THEMEN[thema] : "") + " | Natur und Technik " + klasse;
  })();
  async function load() {
    try {
      const data = await request("list");
      data.tests = data.tests.filter(passt);
      if (!data.tests.length) { $("exam-list").innerHTML = ""; status("Für diesen Themenbereich gibt es noch keine Probe."); return; }
      $("exam-list").innerHTML = data.tests.map(t => `<article class="exam-tile"><div><div class="eyebrow">${esc(t.scope)}</div><h2>${esc(t.title)}</h2><p>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · etwa ${t.minutes} Minuten</p></div><div><span class="pill ${t.unlocked ? "open" : ""}">${t.unlocked ? "Freigeschaltet" : "Gesperrt"}</span><br><button class="btn" data-test="${t.id}" ${t.unlocked ? "" : "disabled"}>Auswählen</button></div></article>`).join("");
      status("Wähle eine freigeschaltete Probe. Zur Vorbereitung kannst du jederzeit zu den Lernmodulen zurückgehen.");
      // Vorauswahl: ?test=<Kennung> (neu), ?probe=1|2 (die beiden ersten Luft-Proben), sonst die einzige offene Probe
      const offen = data.tests.filter(t => t.unlocked);
      const desired = params.get("test") || (params.get("probe") === "2" ? "nt7-luft-2" : params.get("probe") === "1" ? "nt7-luft-1" : "");
      const test = offen.find(t => t.id === desired) || (offen.length === 1 ? offen[0] : null);
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
    // Reihenfolge: für jeden Platz (1., 2., …) den passenden Schritt wählen
    if (item.type === "order") controls = item.steps.map((_,j) => `<label class="match-row"><strong>${j+1}.</strong><select data-order="${j}"><option value="">Bitte wählen</option>${item.steps.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "text") controls = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="4" maxlength="1500" placeholder="Schreibe deine Antwort in eigenen Worten."></textarea>`;
    return `<section class="check exam-question" data-nr="${item.nr}"><div class="question-head"><span class="kopf-links"><span class="pill">Aufgabe ${item.nr}</span>${herkunft(item)}</span><span>${item.points} ${item.points === 1 ? "Punkt" : "Punkte"}</span></div><h3>${esc(item.prompt)}</h3>${image}${controls}</section>`;
  }
  function collect() {
    return exam.items.map(item => {
      const el = document.querySelector(`[data-nr="${item.nr}"]`);
      if (item.type === "choice") { const radio = el.querySelector("input:checked"); return radio ? Number(radio.value) : null; }
      if (item.type === "match" || item.type === "order") return [...el.querySelectorAll("select")].map(select => select.value);
      return el.querySelector("textarea").value.trim();
    });
  }
  function resultMarkup(detail) {
    const given = Array.isArray(detail.given) ? detail.given.map((v,j) => `${esc(detail.labels[j])}: ${esc(v || "–")}`).join("<br>") : esc(detail.given || "–");
    const expected = Array.isArray(detail.expected) ? detail.expected.map((v,j) => `${esc(detail.labels[j])}: ${esc(v)}`).join("<br>") : esc(detail.expected);
    return `<div class="result-row"><div class="question-head"><span class="kopf-links"><strong>Aufgabe ${detail.nr}</strong>${herkunft(detail)}</span><strong>${detail.points} / ${detail.maxPoints}</strong></div><p>${esc(detail.prompt)}</p><p><b>Deine Antwort:</b><br>${given}</p><p><b>Lösung:</b><br>${expected}</p>${detail.comment ? `<p class="video-note">${esc(detail.comment)}</p>` : ""}</div>`;
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
      ProbeSchutz.start({ testId: data.test.id, code: student.code, box: $("questions") });
      window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) { status(err.message,true); window.scrollTo({top:0,behavior:"smooth"}); }
    finally { button.disabled = false; }
  });
  $("exam-form").addEventListener("submit", async e => {
    e.preventDefault();
    if (!confirm("Probe wirklich abgeben? Danach kannst du nichts mehr ändern.")) return;
    const button = $("submit-exam"); button.disabled = true; button.textContent = "Wird ausgewertet ...";
    try {
      const data = await abgeben({testId:exam.test.id,...student,answers:collect(),verlassen:ProbeSchutz.verlassen(),protokoll:ProbeSchutz.protokoll()}, text => { status(text,true); button.textContent = "Wird noch einmal gesendet ..."; });
      if (data.angekommen) {
        ProbeSchutz.ende();
        $("questions-section").hidden = true; $("status").hidden = true;
        $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Deine Abgabe ist angekommen</h1><p class="notice">Die Verbindung war kurz unterbrochen. Deine Antworten sind gespeichert. Dein Ergebnis zeigt dir deine Lehrkraft.</p>`;
        $("result-section").hidden = false; window.scrollTo({top:0,behavior:"smooth"});
        return;
      }
      ProbeSchutz.ende();
      if (ProbeSchutz.abgegeben && ProbeSchutz.abgegeben(data.result, { box: $("result-section"), weg: [$("questions-section"), $("status")], titel: exam.test.title })) return;   // Note erst nach der Rückgabe
      $("questions-section").hidden = true;
      $("status").hidden = true;
      const r = data.result;
      $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Dein Ergebnis</h1><div class="score-line"><strong>${r.score} / ${r.total}</strong><span>${r.percent} % · Note ${r.grade}</span></div>${r.needsReview ? `<p class="notice">Einige freie Antworten wurden nur vorläufig mit Stichwörtern bewertet, weil die KI nicht erreichbar war. Die Lehrkraft kann die Punkte korrigieren.</p>` : ""}<h2>Lösungsschlüssel und Rückmeldung</h2>${r.details.map(resultMarkup).join("")}<p class="nextbar"><a class="btn secondary" href="index.html">Zurück zur Lernreihe</a></p>`;
      $("result-section").hidden = false; window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) { button.disabled = false; button.textContent = "Probe abgeben und auswerten"; status(err.message,true); window.scrollTo({top:0,behavior:"smooth"}); }
  });
  load();
})();
