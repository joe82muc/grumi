/* Deutsch 7: Probe schreiben (probe.html) – gebaut wie die Probe-Seite von NT 7 (../NT/probe.js).
 * Unterschiede: Lesetexte mit festen Zeilennummern neben den Aufgaben, mehr Aufgabenarten (kurze Eingaben, Kommas
 * setzen, Zeilenangabe, offene Antworten, längerer Text) und kein Ergebnis nach der Abgabe: Erst korrigiert die KI,
 * dann prüft die Lehrkraft und gibt die korrigierte Probe zurück (korrektur.html).
 * Link aus der Übersicht: probe.html?nr=2&zug=R  ·  eine bestimmte Fassung: probe.html?test=d7-p2-r-a
 *
 * Deutsch 8 (der Server schickt beim Start eine „sitzung“ mit):
 * - Zeit: Der Server hält den Beginn fest; die Restzeit wird nach seiner Uhr gezeigt. Neuladen beginnt die Zeit nicht
 *   neu. Ist die Zeit um, steht das groß da – abgegeben wird nichts von selbst, das entscheidet das Kind (und die
 *   Lehrkraft sieht die Zeiten).
 * - Zwischenstand: Antworten werden wie bisher sofort auf dem Gerät gesichert (js/probe-schutz.js) und zusätzlich
 *   alle paar Sekunden auf dem Server. Fällt die Verbindung aus: „Noch nicht synchronisiert – Verbindung prüfen.“,
 *   danach von selbst wieder. Beginnt das Kind an einem anderen Gerät neu, kommt der Stand vom Server zurück.
 * - Schreibaufgaben bekommen den Aufsatzeditor (aufsatz-editor.js): Planung, Rückgängig/Wiederholen, Zähler, Vollbild.
 *   Eine KI-Hilfe gibt es in der Probe nicht.
 * - Was der Probenmodus sperrt oder festhält, stellt die Lehrkraft je Probe ein (test.schutz).
 */
(function () {
  "use strict";
  // Jahrgang: 7 (Vorgabe) oder 8 – Deutsch 8 setzt window.DEUTSCH_NR vor diesem Skript (8/Deutsch/…html)
  const DNR = window.DEUTSCH_NR || (window.GRUMI_KURS && window.GRUMI_KURS.NR) || 7, DNAME = "Deutsch " + DNR, DAPI = "/api/d" + DNR;
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = D7Lesetext.esc;
  let selected, student, exam;
  // Deutsch 8: Aufsatzeditoren der Schreibaufgaben (Nummer der Aufgabe -> Editor) und die Sitzung auf dem Server
  const editoren = {};
  let sitzung = null, versatz = 0, schmutzig = false, sendet = false, sichertakt = null, uhr = null, abgegeben = false;
  const beginnKey = () => "grumi-probe-beginn~" + exam.test.id + "~" + student.code;
  const merk = { lies(k) { try { return localStorage.getItem(k) || ""; } catch (_e) { return ""; } }, setz(k, v) { try { localStorage.setItem(k, v); } catch (_e) {} }, weg(k) { try { localStorage.removeItem(k); } catch (_e) {} } };

  const FEHLER = {locked: "Diese Probe ist gesperrt. Sag deiner Lehrkraft Bescheid.", already_submitted: "Diese Probe wurde mit diesem Code bereits abgegeben.", submission_in_progress: "Eine Abgabe läuft bereits.", test_not_found: "Diese Probe gibt es nicht."};
  async function request(route, body) {
    const res = await fetch(API + DAPI + "/proben/" + route, body ? {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body)} : {});
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
        const res = await fetch(API + DAPI + "/proben/submit", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body), signal: ctl.signal});
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
  try { if (zug) sessionStorage.setItem("grumi-d" + DNR + "-zug", zug); else zug = sessionStorage.getItem("grumi-d" + DNR + "-zug") || ""; } catch (_e) {}
  const nr = parseInt(params.get("nr"), 10) || 0;
  const passt = t => (!zug || t.zug === zug) && (!nr || t.nr === nr);
  const klasse = t => (t.zug === "M" ? "M" : "R") + DNR;

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
    // Deutsch 8: lange Sätze stehen ganz da, gewählt wird ihre Stelle (ein Auswahlfeld kann lange Sätze nicht zeigen)
    if (item.type === "order" && exam.sitzung && item.steps.some(o => o.length > 44)) controls = `<p class="zaehler">Wähle bei jedem Satz, an welcher Stelle er steht.</p><div class="order-lang">${item.steps.map((o, j) => `<label class="order-zeile"><select data-stelle="${j}" aria-label="Stelle für: ${esc(o)}"><option value="">Stelle</option>${item.steps.map((_, k) => `<option value="${k + 1}">${k + 1}.</option>`).join("")}</select><span>${esc(o)}</span></label>`).join("")}</div>`;
    else if (item.type === "order") controls = item.steps.map((_, j) => `<label class="order-row"><strong>${j + 1}. Stelle</strong><select data-order="${j}"><option value="">Bitte wählen</option>${item.steps.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "felder") controls = item.felder.map((f, j) => `<label class="feld-row${f.breit || !f.label ? " breit" : ""}">${f.label ? `<span>${esc(f.label)}</span>` : ""}<input type="text" data-feld="${j}" maxlength="300" aria-label="${esc(f.label || "Antwort " + (j + 1))}"></label>`).join("");
    if (item.type === "komma") controls = `<p class="zaehler">Tippe zwischen zwei Wörtern auf das Kästchen, um ein Komma zu setzen. Noch einmal tippen nimmt es wieder weg.</p>` +
      item.saetze.map((w, s) => `<div class="komma-satz" data-satz="${s}">${w.map((wort, k) => `<span>${esc(wort)}</span>` + (k < w.length - 1 ? `<label class="komma-luecke"><input type="checkbox" data-komma="${k}" aria-label="Komma nach ${esc(wort)}"><i>,</i></label>` : "")).join("")}</div>`).join("");
    if (item.type === "zeile") controls = `<div class="zeile-row"><span>Zeile</span><input type="text" inputmode="numeric" maxlength="3" data-von aria-label="von Zeile"><span>bis</span><input type="text" inputmode="numeric" maxlength="3" data-bis aria-label="bis Zeile"><span class="zaehler">Steht es in einer einzigen Zeile, lass das zweite Feld leer.</span></div>`;
    if (item.type === "offen") controls = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="5" maxlength="2500" placeholder="Schreibe deine Antwort in ganzen Sätzen."></textarea>`;
    if (item.type === "schreiben" && exam.sitzung && window.AufsatzEditor) controls = `<div class="ae-platz" data-ae="${item.nr}"></div>`;
    else if (item.type === "schreiben") controls = (item.material ? `<div class="material">${esc(item.material)}</div>` : "") +
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
      if (item.type === "order" && el.querySelector("[data-stelle]")) {       // Satz je Stelle (jede Stelle nur einmal)
        const aus = item.steps.map(() => "");
        el.querySelectorAll("[data-stelle]").forEach(s => { const p = Number(s.value); if (p >= 1 && p <= aus.length && !aus[p - 1]) aus[p - 1] = item.steps[Number(s.dataset.stelle)]; });
        return aus;
      }
      if (item.type === "match" || item.type === "order") return [...el.querySelectorAll("select")].map(s => s.value);
      if (item.type === "felder") return [...el.querySelectorAll("input[data-feld]")].map(i => i.value.trim());
      if (item.type === "komma") return [...el.querySelectorAll(".komma-satz")].map(s => [...s.querySelectorAll("input:checked")].map(i => Number(i.dataset.komma)));
      if (item.type === "zeile") return {von: el.querySelector("[data-von]").value.trim(), bis: el.querySelector("[data-bis]").value.trim()};
      return (el.querySelector("textarea.lang") || el.querySelector("textarea")).value.trim();
    });
  }
  // Planung zu den Schreibaufgaben: { "<Nummer>": { feld: "Text" } }
  function planAlle() {
    const plan = {};
    Object.keys(editoren).forEach(nr => { const p = editoren[nr].wert().plan; if (Object.keys(p).length) plan[nr] = p; });
    return plan;
  }
  // Zwischenstand vom Server in die Felder schreiben (anderes Gerät, Speicher des Geräts geleert)
  function setzeStand(z) {
    exam.items.forEach((item, i) => {
      const el = document.querySelector(`.frage[data-nr="${item.nr}"]`), a = z.answers[i];
      const feuer = (x, art) => x.dispatchEvent(new Event(art, {bubbles: true}));
      if (a === null || a === undefined) return;
      if (item.type === "choice") { const r = el.querySelector(`input[value="${Number(a)}"]`); if (r) { r.checked = true; feuer(r, "change"); } }
      else if (item.type === "order" && el.querySelector("[data-stelle]")) a.forEach((satz, j) => { const s = el.querySelector(`[data-stelle="${item.steps.indexOf(satz)}"]`); if (satz && s) { s.value = String(j + 1); feuer(s, "change"); } });
      else if (item.type === "match" || item.type === "order") [...el.querySelectorAll("select")].forEach((s, j) => { if (a[j]) { s.value = a[j]; feuer(s, "change"); } });
      else if (item.type === "felder") [...el.querySelectorAll("input[data-feld]")].forEach((f, j) => { if (a[j]) { f.value = a[j]; feuer(f, "input"); } });
      else if (item.type === "komma") [...el.querySelectorAll(".komma-satz")].forEach((s, j) => (a[j] || []).forEach(k => { const h = s.querySelector(`input[data-komma="${k}"]`); if (h) { h.checked = true; feuer(h, "change"); } }));
      else if (item.type === "zeile") { el.querySelector("[data-von]").value = a.von || ""; el.querySelector("[data-bis]").value = a.bis || ""; }
      else if (editoren[item.nr]) editoren[item.nr].setze({text: String(a), plan: (z.plan || {})[item.nr] || {}});
      else if (a) { const ta = el.querySelector("textarea"); ta.value = String(a); ProbeSchutz.gesetzt(ta); feuer(ta, "input"); }
    });
  }

  /* ---------- Deutsch 8: Zeit und Zwischenstand auf dem Server ---------- */
  const zweistellig = n => String(n).padStart(2, "0");
  const uhrzeit = iso => { const d = iso ? new Date(iso) : new Date(); return isNaN(d) ? "" : zweistellig(d.getHours()) + ":" + zweistellig(d.getMinutes()); };
  function standZeigen(art, text) {
    const s = $("sitz-stand"); if (!s) return;
    const worte = {ok: "Gespeichert ✓", laeuft: "Speichert …", offen: "Noch nicht synchronisiert – Verbindung prüfen."};
    s.className = "sitz-stand " + art; s.textContent = text || worte[art] || "";
    Object.keys(editoren).forEach(nr => editoren[nr].status(art, text));
  }
  function zeitZeigen() {
    const z = $("sitz-zeit"); if (!z || !sitzung) return;
    if (!sitzung.timer) { z.hidden = true; return; }
    const rest = Math.round((Date.parse(sitzung.endetAm) - (Date.now() + versatz)) / 1000);
    z.hidden = false;
    z.classList.toggle("knapp", rest <= 300 && rest > 0); z.classList.toggle("um", rest <= 0);
    z.textContent = rest > 0 ? "⏱ Noch " + Math.floor(rest / 60) + ":" + zweistellig(rest % 60) + " Minuten" : "⏱ Die Zeit ist um";
    const um = $("zeit-um");
    if (um) um.hidden = rest > 0;
  }
  function sitzungUebernehmen(s) { if (!s) return; sitzung = s; versatz = Date.parse(s.serverZeit) - Date.now(); merk.setz(beginnKey(), s.begonnenAm); zeitZeigen(); }
  function plane(ms) { clearTimeout(sichertakt); sichertakt = setTimeout(() => { sichertakt = null; sichern(); }, ms); }
  async function sichern(beimGehen) {
    if (!sitzung || abgegeben || !schmutzig) return;
    if (sendet) { if (!sichertakt) plane(2000); return; }
    clearTimeout(sichertakt); sichertakt = null; sendet = true; schmutzig = false;
    try {
      const res = await fetch(API + DAPI + "/proben/zwischenstand", {method: "POST", headers: {"Content-Type": "application/json"}, keepalive: !!beimGehen,
        body: JSON.stringify({testId: exam.test.id, code: student.code, answers: collect(), plan: planAlle(), begonnenAm: sitzung.begonnenAm})});
      const d = await res.json().catch(() => ({}));
      if (res.status === 409) { schmutzig = false; standZeigen("ok", "Diese Probe ist schon abgegeben."); return; }
      if (res.status === 403) { standZeigen("offen", "Die Probe ist gesperrt – deine Antworten bleiben auf diesem Gerät. Sag deiner Lehrkraft Bescheid."); schmutzig = true; plane(30000); return; }
      if (!res.ok || !d.ok) throw new Error("nicht gespeichert");
      sitzungUebernehmen(d.sitzung);
      if (!schmutzig) standZeigen("ok", "Gespeichert ✓ " + uhrzeit(d.gespeichertAm));
    } catch (_e) {
      schmutzig = true; standZeigen("offen"); plane(12000);            // von selbst wieder versuchen
    } finally { sendet = false; if (schmutzig && !sichertakt) plane(4000); }
  }
  function geaendert() { if (!sitzung || abgegeben) return; schmutzig = true; standZeigen("laeuft"); plane(4000); }
  function sitzungStarten(zurueck) {
    sitzungUebernehmen(exam.sitzung);
    if (!$("sitz-leiste")) {
      $("questions-section").insertAdjacentHTML("afterbegin", '<div class="sitz-leiste" id="sitz-leiste"><span class="sitz-zeit" id="sitz-zeit" hidden></span><span class="sitz-stand" id="sitz-stand" role="status"></span></div>' +
        '<p class="notice bad" id="zeit-um" hidden>Die Zeit für diese Probe ist um. Lies deine Antworten noch einmal durch und gib die Probe jetzt ab. Abgegeben wird sie erst, wenn du auf „Probe abgeben“ tippst.</p>');
    }
    // Stand vom Server nur, wenn dieses Gerät keinen eigenen hat
    if (!zurueck && exam.zwischenstand && Array.isArray(exam.zwischenstand.answers)) {
      setzeStand(exam.zwischenstand);
      standZeigen("ok", "Dein Stand von " + uhrzeit(exam.zwischenstand.gespeichertAm) + " Uhr ist wieder da.");
    } else if (zurueck) { schmutzig = true; standZeigen("laeuft"); plane(1500); }
    else standZeigen("ok", "Deine Antworten werden laufend gespeichert.");
    Object.keys(editoren).forEach(nr => editoren[nr].geaendert());
    ["input", "change"].forEach(art => $("questions").addEventListener(art, geaendert));
    clearInterval(uhr); uhr = setInterval(zeitZeigen, 1000); zeitZeigen();
    window.addEventListener("online", () => { if (schmutzig) sichern(); });
    window.addEventListener("pagehide", () => sichern(true));
    document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") sichern(true); });
  }
  // Schreibaufgaben mit dem Aufsatzeditor ausstatten
  function editorenBauen() {
    document.querySelectorAll(".ae-platz[data-ae]").forEach(platz => {
      const item = exam.items.find(x => String(x.nr) === platz.dataset.ae), text = item.text ? exam.texte.find(t => t.id === item.text) : null;
      const auftrag = `<p><b>${esc(item.prompt)}</b></p>` + (item.vorgabe ? `<div class="vorgabe">${esc(item.vorgabe)}</div>` : "") + (item.hilfe ? `<p class="hilfe">💡 ${esc(item.hilfe)}</p>` : "") +
        (item.raster ? `<p class="zaehler">Bewertet wird: ${item.raster.map(r => esc(r.name) + " (" + r.punkte + ")").join(" · ")}</p>` : "");
      const material = (item.material ? `<div class="material">${esc(item.material)}</div>` : "") + (text ? D7Lesetext.html(text) : "");
      editoren[item.nr] = AufsatzEditor.bauen(platz, {name: "Dein Text zu Aufgabe " + item.nr, auftrag, material, form: item.form, plan: item.plan, zug: exam.test.zug, min: item.minWoerter || 0, max: 12000, klasse: "lang",
        gesetzt: ta => ProbeSchutz.gesetzt(ta)});
      // Die Planung steht am Anfang offen – wer schon schreibt, klappt sie zu
      editoren[item.nr].zeige("plan", true);
      // Material im Editor: Zeilen einpassen, sobald es zu sehen ist
      platz.addEventListener("click", e => { if (e.target.closest(".ae-k")) setTimeout(() => D7Lesetext.einpassen(platz), 30); });
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
      exam = await request("start", {testId: selected.id, ...student, begonnenAm: merk.lies("grumi-probe-beginn~" + selected.id + "~" + student.code) || undefined});
      $("wahl").hidden = true;
      $("questions-section").hidden = false;
      $("exam-kicker").textContent = ((exam.test.zug === "M" ? "M" : "R") + DNR) + (exam.test.variante === "B" ? " · Nachschreiber" : "") + (exam.test.scope ? " · " + exam.test.scope : "");
      $("exam-title").textContent = exam.test.title;
      $("exam-points").textContent = exam.test.maxPoints + " Punkte · etwa " + exam.test.minutes + " Minuten";
      if (exam.test.hinweis) $("exam-hinweis").textContent = exam.test.hinweis;
      $("lesespalte").innerHTML = exam.texte.map(D7Lesetext.html).join("");
      $("spalten").classList.toggle("ohne-text", !exam.texte.length);
      document.body.classList.toggle("ohne-text-seite", !exam.texte.length);
      $("questions").innerHTML = exam.items.map(itemMarkup).join("");
      D7Lesetext.einpassen($("lesespalte")); D7Lesetext.antippen($("lesespalte"));
      if (exam.sitzung && window.AufsatzEditor) editorenBauen();
      // Was der Probenmodus sperrt und festhält: Vorgabe (Deutsch 7) oder die Einstellung der Lehrkraft (Deutsch 8)
      const schutz = exam.test.schutz || {};
      const zurueck = ProbeSchutz.start({testId: exam.test.id, code: student.code, box: $("questions"), ueberwachung: true, einfuegen: exam.test.einfuegen,
        wechsel: schutz.wechsel, warnen: schutz.warnen, kopieren: schutz.kopieren, ausschneiden: schutz.ausschneiden, kontextmenue: schutz.kontextmenue, spruenge: schutz.spruenge});
      // offen sagen, was im Probenmodus festgehalten wird
      if (!$("schutz-hinweis")) $("questions").insertAdjacentHTML("beforebegin", '<p class="schutz-hinweis" id="schutz-hinweis"></p>');
      $("schutz-hinweis").textContent = "🔒 Probenmodus" + (exam.sitzung ? " – ohne Hilfe der KI" : "") + ": " +
        (schutz.wechsel === false ? "" : "Verlässt du diese Seite (anderer Tab, andere App), wird das mit Uhrzeit und Dauer für deine Lehrkraft festgehalten. ") +
        (exam.test.einfuegen === "protokollieren" ? "Eingefügter Text wird mit Uhrzeit und Länge vermerkt." : schutz.kopieren === "erlauben" ? "Einfügen ist gesperrt." : "Einfügen und Kopieren sind gesperrt.");
      if (exam.sitzung) sitzungStarten(zurueck);
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
  $("questions").addEventListener("input", e => { const z = e.target.matches && e.target.matches("textarea.lang") ? e.target.nextElementSibling : null; if (z && z.hasAttribute("data-zaehler")) zaehle(e.target, z); });
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
      Object.keys(editoren).forEach(nr => editoren[nr].vollbild(false));
      await abgeben({testId: exam.test.id, ...student, answers, verlassen: ProbeSchutz.verlassen(), protokoll: ProbeSchutz.protokoll(), ...(sitzung ? {plan: planAlle()} : {})}, text => { examStatus(text); button.textContent = "Wird noch einmal gesendet ..."; });
      abgegeben = true; clearTimeout(sichertakt); clearInterval(uhr);
      if (sitzung) merk.weg(beginnKey());
      ProbeSchutz.ende();
      document.body.classList.remove("text-offen");
      $("questions-section").hidden = true;
      $("result-section").innerHTML = `<div class="eyebrow">Abgegeben · ${esc(exam.test.title)}</div><h1>Deine Probe ist angekommen ✅</h1>
        <p class="notice gut">Alle deine Antworten sind gespeichert.</p>
        <p class="intro">So geht es weiter: Zuerst korrigiert die KI, dann prüft deine Lehrkraft jede Aufgabe. Danach bekommst du die korrigierte Probe zurück – du findest sie in der Übersicht ${DNAME} unter „Meine Proben“. Dort kannst du sie ansehen und ausdrucken.</p>
        <p><a class="btn" href="index.html">Zur Übersicht ${DNAME}</a></p>`;
      $("result-section").hidden = false; window.scrollTo({top: 0});
    } catch (err) { button.disabled = false; button.textContent = "Probe abgeben"; examStatus(err.message); $("exam-status").scrollIntoView({behavior: "smooth", block: "center"}); }
  });
  load();
})();
