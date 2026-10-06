/* Deutsch 7: Probe schreiben (probe.html) – gebaut wie die Probe-Seite von NT 7 (../NT/probe.js).
 * Unterschiede: Lesetexte mit festen Zeilennummern neben den Aufgaben, mehr Aufgabenarten (kurze Eingaben, Kommas
 * setzen, Zeilenangabe, offene Antworten, längerer Text) und kein Ergebnis nach der Abgabe: Erst korrigiert die KI,
 * dann prüft die Lehrkraft und gibt die korrigierte Probe zurück (korrektur.html).
 * Link aus der Übersicht: probe.html?nr=2&zug=R  ·  eine bestimmte Fassung: probe.html?test=d7-p2-r-a
 */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = D7Lesetext.esc;
  let selected, student, exam;

  const FEHLER = {locked: "Diese Probe ist gesperrt. Sag deiner Lehrkraft Bescheid.", already_submitted: "Diese Probe wurde mit diesem Code bereits abgegeben.", submission_in_progress: "Eine Abgabe läuft bereits.", test_not_found: "Diese Probe gibt es nicht."};
  async function request(route, body) {
    const res = await fetch(API + "/api/d7/proben/" + route, body ? {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)} : {});
    const data = await res.json();
    if (!res.ok) throw new Error(data.message || FEHLER[data.error] || data.error || "Serverfehler");
    return data;
  }
  // Abgabe: Bei Netz- oder Serverfehler versucht es die Seite von selbst noch dreimal (die Antworten bleiben stehen).
  // Kam schon die erste Sendung an und nur die Antwort ging verloren, meldet der Server beim neuen Versuch
  // „schon abgegeben“ – dann ist die Abgabe da.
  async function abgeben(body, melde) {
    let letzter = "";
    for (let versuch = 1; versuch <= 4; versuch++) {
      const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 70000);
      try {
        const res = await fetch(API + "/api/d7/proben/submit", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body), signal: ctl.signal});
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.angekommen) return data;
        if (res.status === 409 && versuch > 1) return {angekommen: true};
        if (res.status === 409 && data.error === "submission_in_progress") letzter = "Eine Abgabe läuft bereits.";
        else if (res.status >= 400 && res.status < 500 && res.status !== 429) throw Object.assign(new Error((data.error === "locked" ? "Diese Probe ist gesperrt. Sag deiner Lehrkraft Bescheid – deine Antworten bleiben hier stehen." : data.message || FEHLER[data.error]) || "Die Abgabe wurde nicht angenommen."), {endgueltig: true});
        else letzter = "Der Server ist gerade nicht erreichbar.";
      } catch (err) {
        if (err.endgueltig) throw err;
        letzter = err.name === "AbortError" ? "Der Server antwortet nicht." : "Keine Verbindung zum Server.";
      } finally { clearTimeout(frist); }
      if (versuch < 4) { melde(letzter + " Neuer Versuch " + (versuch + 1) + " von 4 … Lass die Seite offen."); await new Promise(r => setTimeout(r, 3000 * versuch)); }
    }
    throw new Error("Die Abgabe ist noch nicht angekommen (" + letzter + "). Deine Antworten bleiben hier stehen. Sag deiner Lehrkraft Bescheid und tippe dann noch einmal auf „Probe abgeben“.");
  }
  function status(message, bad = false) { $("status").textContent = message; $("status").classList.toggle("bad", bad); $("status").hidden = false; }
  function examStatus(message) { $("exam-status").textContent = message; $("exam-status").hidden = !message; }

  // Zug (M oder R) kommt aus dem Link der Übersicht (?zug=R) oder aus dem Tab; die Nummer der Probe aus ?nr=
  let zug = /^[MR]$/i.test(params.get("zug") || "") ? params.get("zug").toUpperCase() : "";
  try { if (zug) sessionStorage.setItem("grumi-d7-zug", zug); else zug = sessionStorage.getItem("grumi-d7-zug") || ""; } catch (_e) {}
  const nr = parseInt(params.get("nr"), 10) || 0;
  const passt = t => (!zug || t.zug === zug) && (!nr || t.nr === nr);
  const klasse = t => (t.zug === "M" ? "M7" : "R7");

  async function load() {
    try {
      const data = await request("list");
      const tests = data.tests.filter(passt);
      if (!tests.length) { $("exam-list").innerHTML = ""; status(nr ? "Diese Probe ist noch nicht freigeschaltet oder noch in Vorbereitung." : "Im Moment gibt es hier keine Probe."); return; }
      $("exam-list").innerHTML = tests.map(t => `<article class="exam-tile"><div><div class="eyebrow">${esc(t.scope)}</div><h2>${esc(t.title)}</h2>
        <p>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · etwa ${t.minutes} Minuten · ${klasse(t)}${t.variante === "B" ? " · Nachschreiber" : ""}</p></div>
        <div><span class="pill ${t.unlocked ? "open" : ""}">${t.unlocked ? "Freigeschaltet" : "Gesperrt"}</span><button class="btn" data-test="${esc(t.id)}" data-title="${esc(t.title)}" ${t.unlocked ? "" : "disabled"}>Auswählen</button></div></article>`).join("");
      status("Wähle eine freigeschaltete Probe.");
      const offen = tests.filter(t => t.unlocked);
      const test = offen.find(t => t.id === params.get("test")) || (offen.length === 1 ? offen[0] : null);
      if (test) select(test);
    } catch (e) { status("Der Probenserver ist gerade nicht erreichbar. Lade die Seite in einer Minute neu. " + e.message, true); }
  }
  function select(t) {
    selected = t;
    $("selected-title").textContent = t.title;
    $("identity-section").hidden = false;
    $("identity-section").scrollIntoView({behavior: "smooth", block: "center"});
  }

  /* ---------- Aufgaben zeichnen ---------- */
  const textTitel = id => { const t = exam.texte.find(x => x.id === id); return t ? t.titel || t.art || "Text" : ""; };
  function itemMarkup(item) {
    let controls = "";
    if (item.type === "choice") controls = `<div class="options">${item.options.map((o, j) => `<label class="option"><input type="radio" name="item-${item.nr}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    // lange Zuordnungsziele (z. B. Überschriften): Auswahlfeld in voller Breite unter dem Begriff
    const lang = item.type === "match" && item.targets.some(o => o.length > 24) ? " lang" : "";
    if (item.type === "match") controls = item.labels.map((label, j) => `<label class="match-row${lang}"><strong>${esc(label)}</strong><select data-match="${j}"><option value="">Bitte zuordnen</option>${item.targets.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "order") controls = item.steps.map((_, j) => `<label class="order-row"><strong>${j + 1}. Stelle</strong><select data-order="${j}"><option value="">Bitte wählen</option>${item.steps.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "felder") controls = item.felder.map((f, j) => `<label class="feld-row${f.breit || !f.label ? " breit" : ""}">${f.label ? `<span>${esc(f.label)}</span>` : ""}<input type="text" data-feld="${j}" maxlength="300" aria-label="${esc(f.label || "Antwort " + (j + 1))}"></label>`).join("");
    if (item.type === "komma") controls = `<p class="zaehler">Tippe zwischen zwei Wörtern auf das Kästchen, um ein Komma zu setzen. Noch einmal tippen nimmt es wieder weg.</p>` +
      item.saetze.map((w, s) => `<div class="komma-satz" data-satz="${s}">${w.map((wort, k) => `<span>${esc(wort)}</span>` + (k < w.length - 1 ? `<label class="komma-luecke"><input type="checkbox" data-komma="${k}" aria-label="Komma nach ${esc(wort)}"><i>,</i></label>` : "")).join("")}</div>`).join("");
    if (item.type === "zeile") controls = `<div class="zeile-row"><span>Zeile</span><input type="text" inputmode="numeric" maxlength="3" data-von aria-label="von Zeile"><span>bis</span><input type="text" inputmode="numeric" maxlength="3" data-bis aria-label="bis Zeile"><span class="zaehler">Steht es in einer einzigen Zeile, lass das zweite Feld leer.</span></div>`;
    if (item.type === "offen") controls = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="5" maxlength="2500" placeholder="Schreibe deine Antwort in ganzen Sätzen."></textarea>`;
    if (item.type === "schreiben") controls = (item.material ? `<div class="material">${esc(item.material)}</div>` : "") +
      `<textarea class="lang" aria-label="Dein Text zu Aufgabe ${item.nr}" rows="16" maxlength="12000" placeholder="Schreibe hier deinen Text." data-min="${item.minWoerter || 0}"></textarea><div class="zaehler" data-zaehler>0 Wörter${item.minWoerter ? " · mindestens " + item.minWoerter : ""}</div>`;
    return `<section class="frage" data-nr="${item.nr}" data-type="${item.type}"><div class="frage-kopf"><span class="pill">Aufgabe ${item.nr}</span><span>${String(item.points).replace(".", ",")} ${item.points === 1 ? "Punkt" : "Punkte"}</span></div>
      ${item.text ? `<button type="button" class="bezug" data-zutext="${esc(item.text)}">📖 ${esc(textTitel(item.text))}</button><br>` : ""}<h3>${esc(item.prompt)}</h3>
      ${item.vorgabe ? `<div class="vorgabe">${esc(item.vorgabe)}</div>` : ""}${item.hilfe ? `<p class="hilfe">💡 ${esc(item.hilfe)}</p>` : ""}${controls}</section>`;
  }
  const woerter = s => D7Zeilen.woerter(s);
  function collect() {
    return exam.items.map(item => {
      const el = document.querySelector(`.frage[data-nr="${item.nr}"]`);
      if (item.type === "choice") { const radio = el.querySelector("input:checked"); return radio ? Number(radio.value) : null; }
      if (item.type === "match" || item.type === "order") return [...el.querySelectorAll("select")].map(s => s.value);
      if (item.type === "felder") return [...el.querySelectorAll("input[data-feld]")].map(i => i.value.trim());
      if (item.type === "komma") return [...el.querySelectorAll(".komma-satz")].map(s => [...s.querySelectorAll("input:checked")].map(i => Number(i.dataset.komma)));
      if (item.type === "zeile") return {von: el.querySelector("[data-von]").value.trim(), bis: el.querySelector("[data-bis]").value.trim()};
      return el.querySelector("textarea").value.trim();
    });
  }
  // Welche Aufgaben sind noch ganz leer? (Kommas setzen kann absichtlich leer sein)
  function leere(antworten) {
    return exam.items.filter((item, i) => {
      const a = antworten[i];
      if (item.type === "choice") return a === null;
      if (item.type === "match" || item.type === "order" || item.type === "felder") return a.every(v => !v);
      if (item.type === "zeile") return !a.von;
      if (item.type === "komma") return false;
      return !a;
    }).map(item => item.nr);
  }
  function zeigeText(id) {
    document.body.classList.add("text-offen");
    const ziel = $("lesespalte").querySelector(`.lt[data-text="${id}"]`);
    D7Lesetext.einpassen($("lesespalte"));
    if (ziel) ziel.scrollIntoView({block: "start"});
  }

  $("exam-list").addEventListener("click", e => {
    const button = e.target.closest("[data-test]");
    if (button) select({id: button.dataset.test, title: button.dataset.title});
  });
  $("identity-form").addEventListener("submit", async e => {
    e.preventDefault();
    student = Object.fromEntries(new FormData(e.currentTarget));
    const button = e.currentTarget.querySelector("button"); button.disabled = true;
    try {
      exam = await request("start", {testId: selected.id, ...student});
      $("wahl").hidden = true;
      $("questions-section").hidden = false;
      $("exam-kicker").textContent = (exam.test.zug === "M" ? "M7" : "R7") + (exam.test.variante === "B" ? " · Nachschreiber" : "") + (exam.test.scope ? " · " + exam.test.scope : "");
      $("exam-title").textContent = exam.test.title;
      $("exam-points").textContent = exam.test.maxPoints + " Punkte · etwa " + exam.test.minutes + " Minuten";
      if (exam.test.hinweis) $("exam-hinweis").textContent = exam.test.hinweis;
      $("lesespalte").innerHTML = exam.texte.map(D7Lesetext.html).join("");
      $("spalten").classList.toggle("ohne-text", !exam.texte.length);
      document.body.classList.toggle("ohne-text-seite", !exam.texte.length);
      $("questions").innerHTML = exam.items.map(itemMarkup).join("");
      D7Lesetext.einpassen($("lesespalte")); D7Lesetext.antippen($("lesespalte"));
      ProbeSchutz.start({testId: exam.test.id, code: student.code, box: $("questions"), ueberwachung: true, einfuegen: exam.test.einfuegen});
      // offen sagen, was im Probenmodus festgehalten wird
      if (!$("schutz-hinweis")) $("questions").insertAdjacentHTML("beforebegin", '<p class="schutz-hinweis" id="schutz-hinweis"></p>');
      $("schutz-hinweis").textContent = "🔒 Probenmodus: Verlässt du diese Seite (anderer Tab, andere App), wird das mit Uhrzeit und Dauer für deine Lehrkraft festgehalten. " +
        (exam.test.einfuegen === "protokollieren" ? "Eingefügter Text wird mit Uhrzeit und Länge vermerkt." : "Einfügen und Kopieren sind gesperrt.");
      document.querySelectorAll("[data-zaehler]").forEach(z => { const ta = z.previousElementSibling; z.dataset.fuer = "1"; zaehle(ta, z); });
      window.scrollTo({top: 0});
    } catch (err) { status(err.message, true); $("status").scrollIntoView({behavior: "smooth", block: "center"}); }
    finally { button.disabled = false; }
  });
  function zaehle(ta, z) {
    const n = woerter(ta.value), min = Number(ta.dataset.min) || 0;
    z.textContent = n + (n === 1 ? " Wort" : " Wörter") + (min ? " · mindestens " + min : "");
    z.classList.toggle("gut", min > 0 && n >= min);
  }
  $("questions").addEventListener("input", e => { if (e.target.matches && e.target.matches("textarea.lang")) zaehle(e.target, e.target.nextElementSibling); });
  $("questions").addEventListener("click", e => { const b = e.target.closest("[data-zutext]"); if (b) zeigeText(b.dataset.zutext); });
  $("text-auf").addEventListener("click", () => { document.body.classList.add("text-offen"); D7Lesetext.einpassen($("lesespalte")); });
  $("text-zu").addEventListener("click", () => document.body.classList.remove("text-offen"));

  $("exam-form").addEventListener("submit", async e => {
    e.preventDefault();
    const answers = collect(), offen = leere(answers);
    if (!confirm((offen.length ? (offen.length === 1 ? "Aufgabe " + offen[0] + " ist" : "Die Aufgaben " + offen.join(", ") + " sind") + " noch leer.\n\n" : "") + "Probe wirklich abgeben? Danach kannst du nichts mehr ändern.")) return;
    const button = $("submit-exam"); button.disabled = true; button.textContent = "Wird gesendet ...";
    examStatus("");
    try {
      await abgeben({testId: exam.test.id, ...student, answers, verlassen: ProbeSchutz.verlassen(), protokoll: ProbeSchutz.protokoll()}, text => { examStatus(text); button.textContent = "Wird noch einmal gesendet ..."; });
      ProbeSchutz.ende();
      document.body.classList.remove("text-offen");
      $("questions-section").hidden = true;
      $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Deine Probe ist angekommen ✅</h1>
        <p class="notice gut">Alle deine Antworten sind gespeichert.</p>
        <p class="intro">So geht es weiter: Zuerst korrigiert die KI, dann prüft deine Lehrkraft jede Aufgabe. Danach bekommst du die korrigierte Probe zurück – du findest sie in der Übersicht Deutsch 7 unter „Meine Proben“. Dort kannst du sie ansehen und ausdrucken.</p>
        <p><a class="btn" href="index.html">Zur Übersicht Deutsch 7</a></p>`;
      $("result-section").hidden = false; window.scrollTo({top: 0});
    } catch (err) { button.disabled = false; button.textContent = "Probe abgeben"; examStatus(err.message); $("exam-status").scrollIntoView({behavior: "smooth", block: "center"}); }
  });
  load();
})();
