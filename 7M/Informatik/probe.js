/* Proben Informatik 7 (7R und 7M) – abgeleitet von 7M/NT/probe.js, Server: /api/inf7 (englisch_9, nt7.js mit inf7-fragen.js).
   Je Modul eine Probe in einer Fassung für 7R und für 7M. Zusätzliche Aufgabenart: Reihenfolge (order).
   Informatik 8 (8M/Informatik/probe.html) nutzt dieses Skript mit: Dort steht themen.js davor, und die Kursliste
   (window.GRUMI_KURS) nennt STUFE, PFAD und die Module. */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"})[c]);
  let selected, student, exam;
  const KURS = window.GRUMI_KURS || null, ST = (KURS && KURS.STUFE) || "7", PFAD = (KURS && KURS.PFAD) || "/api/inf7";
  async function request(route, body) {
    const res = await fetch(API + PFAD + "/" + route, body ? {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)} : {});
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
        const res = await fetch(API + PFAD + "/submit", {method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body),signal:ctl.signal});
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
  // Zug (M oder R) und Modul kommen aus dem Link der Übersicht (?zug=R&thema=filius) oder aus dem Tab.
  // Jede Probe gibt es in einer Fassung je Zug; die Seite zeigt nur die Fassung des eigenen Zugs.
  const THEMEN = KURS && KURS.THEMEN ? KURS.THEMEN.reduce((o, t) => { o[t.id] = t.titel; return o; }, {})
    : {sicher: "Internet und Sicherheit", filius: "Netzwerke mit Filius", gimp: "Digitale Bilder mit GIMP", inkscape: "Vektorgrafik mit Inkscape", scratch: "Programmieren mit Scratch"};
  let zug = /^[MR]$/i.test(params.get("zug") || "") ? params.get("zug").toUpperCase() : "";
  try { if (zug) sessionStorage.setItem("grumi-i" + ST + "-zug", zug); else zug = sessionStorage.getItem("grumi-i" + ST + "-zug") || ""; } catch (_e) {}
  const thema = THEMEN[params.get("thema")] ? params.get("thema") : "";
  const passt = t => (!zug || !t.zug || t.zug === zug) && (!thema || t.thema === thema);
  (function kopf() {
    const klasse = zug === "R" ? ST + "R" : zug === "M" ? ST + "M" : ST;
    const zurueck = zug === "R" ? "../../" + ST + "R/Informatik/index.html" : "index.html";
    document.querySelector(".brand").setAttribute("href", zurueck);
    document.querySelector(".brand span").textContent = klasse + " / Informatik";
    document.querySelector(".top-tag").textContent = "Proben" + (thema ? " · " + THEMEN[thema] : "");
    document.querySelector("#exam-main > .eyebrow").textContent = "Informatik · Klasse " + klasse;
    document.querySelector("#exam-main > h1").textContent = thema ? "Probe: " + THEMEN[thema] : "Proben Informatik";
    document.title = "Probe" + (thema ? " " + THEMEN[thema] : "n") + " | Informatik " + klasse;
  })();
  async function load() {
    try {
      const data = await request("list");
      data.tests = data.tests.filter(passt);
      if (!data.tests.length) { $("exam-list").innerHTML = ""; status("Für dieses Modul gibt es noch keine Probe."); return; }
      $("exam-list").innerHTML = data.tests.map(t => `<article class="exam-tile"><div><div class="eyebrow">${esc(t.scope)}</div><h2>${esc(t.title)}</h2><p>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · etwa ${t.minutes} Minuten</p></div><div><span class="pill ${t.unlocked ? "open" : ""}">${t.unlocked ? "Freigeschaltet" : "Gesperrt"}</span><br><button class="btn" data-test="${t.id}" ${t.unlocked ? "" : "disabled"}>Auswählen</button></div></article>`).join("");
      status("Wähle die freigeschaltete Probe. Zur Vorbereitung kannst du jederzeit zu den Einheiten zurückgehen.");
      // Vorauswahl: ?test=<Kennung>, sonst die einzige offene Probe
      const offen = data.tests.filter(t => t.unlocked);
      const desired = params.get("test") || "";
      const test = offen.find(t => t.id === desired) || (offen.length === 1 ? offen[0] : null);
      if (test) select(test);
    } catch (e) { status("Der Probenserver ist noch nicht erreichbar. Die Einheiten funktionieren unabhängig davon. " + e.message,true); }
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
    if (item.type === "order") controls = `<div class="order-box" data-order>${item.steps.map(o => `<div class="order-row" data-step="${esc(o)}"><span class="order-nr"></span><span class="order-text">${esc(o)}</span><span class="order-move"><button type="button" data-move="-1" aria-label="nach oben">▲</button><button type="button" data-move="1" aria-label="nach unten">▼</button></span></div>`).join("")}</div><p class="order-hint">Bringe die Schritte mit den Pfeilen in die richtige Reihenfolge. Oben steht, was zuerst kommt.</p>`;
    if (item.type === "text") controls = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="4" maxlength="1500" placeholder="Schreibe deine Antwort in eigenen Worten."></textarea>`;
    return `<section class="check exam-question" data-nr="${item.nr}"><div class="question-head"><span class="pill">Aufgabe ${item.nr}</span><span>${item.points} ${item.points === 1 ? "Punkt" : "Punkte"}</span></div><h3>${esc(item.prompt)}</h3>${image}${controls}</section>`;
  }
  function collect() {
    return exam.items.map(item => {
      const el = document.querySelector(`[data-nr="${item.nr}"]`);
      if (item.type === "choice") { const radio = el.querySelector("input:checked"); return radio ? Number(radio.value) : null; }
      if (item.type === "match") return [...el.querySelectorAll("select")].map(select => select.value);
      if (item.type === "order") return [...el.querySelectorAll(".order-row")].map(row => row.dataset.step);
      return el.querySelector("textarea").value.trim();
    });
  }
  function resultMarkup(detail) {
    const given = Array.isArray(detail.given) ? detail.given.map((v,j) => `${esc(detail.labels[j])}: ${esc(v || "–")}`).join("<br>") : esc(detail.given || "–");
    const expected = Array.isArray(detail.expected) ? detail.expected.map((v,j) => `${esc(detail.labels[j])}: ${esc(v)}`).join("<br>") : esc(detail.expected);
    return `<div class="result-row"><div class="question-head"><strong>Aufgabe ${detail.nr}</strong><strong>${detail.points} / ${detail.maxPoints}</strong></div><p>${esc(detail.prompt)}</p><p><b>Deine Antwort:</b><br>${given}</p><p><b>Lösung:</b><br>${expected}</p>${detail.comment ? `<p class="video-note">${esc(detail.comment)}</p>` : ""}</div>`;
  }
  $("questions").addEventListener("click", e => {
    const knopf = e.target.closest("[data-move]"); if (!knopf) return;
    const zeile = knopf.closest(".order-row"), box = zeile.parentElement, zeilen = [...box.children], i = zeilen.indexOf(zeile), j = i + Number(knopf.dataset.move);
    if (j < 0 || j >= zeilen.length) return;
    if (j < i) box.insertBefore(zeile, zeilen[j]); else box.insertBefore(zeilen[j], zeile);
    knopf.focus();
  });
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
      $("questions-section").hidden = true;
      $("status").hidden = true;
      const r = data.result;
      $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Dein Ergebnis</h1><div class="score-line"><strong>${r.score} / ${r.total}</strong><span>${r.percent} % · Note ${r.grade}</span></div>${r.needsReview ? `<p class="notice">Einige freie Antworten wurden nur vorläufig mit Stichwörtern bewertet, weil die KI nicht erreichbar war. Die Lehrkraft kann die Punkte korrigieren.</p>` : ""}<h2>Lösungsschlüssel und Rückmeldung</h2>${r.details.map(resultMarkup).join("")}<p class="nextbar"><a class="btn secondary" href="index.html">Zurück zur Lernreihe</a></p>`;
      $("result-section").hidden = false; window.scrollTo({top:0,behavior:"smooth"});
    } catch (err) { button.disabled = false; button.textContent = "Probe abgeben und auswerten"; status(err.message,true); window.scrollTo({top:0,behavior:"smooth"}); }
  });
  load();
})();
