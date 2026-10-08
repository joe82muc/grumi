/* NT 8: Seite, auf der die Kinder eine Probe schreiben (probe.html?thema=<Bereich>&zug=R|M oder ?test=<Kennung>).
 * Ablauf wie in NT 7 (Liste → Code → Aufgaben → Abgabe), dazu für NT 8:
 * - Sitzung auf dem Server: Der Beginn zählt dort. Neuladen, Safari-Neustart, WLAN-Ausfall oder ein anderes Gerät
 *   beginnen die Probe nicht neu – Zeit und Antworten laufen weiter (Server: nt7.js mit sitzung).
 * - Zwischenstand: Antworten werden nach jeder Änderung und spätestens alle 15 Sekunden gesichert – auf dem Gerät
 *   (js/probe-schutz.js) und auf dem Server. Die Leiste zeigt „Gespeichert ✓“ oder „Noch nicht synchronisiert“.
 * - Probenmodus (js/probe-schutz.js): Verlassen der Seite mit Uhrzeit und Dauer, Einfügen und Kopieren gesperrt,
 *   auffällig große Texteingaben, Verbindungsabbrüche – alles nur als Protokoll für die Lehrkraft. Nichts davon gibt
 *   ab, bewertet oder ändert Punkte. Auch wenn die Zeit um ist, gibt die Seite nicht von selbst ab.
 * - Aufgabenarten: Ankreuzen (eine oder mehrere Antworten), Zuordnen, Reihenfolge, Lückentext, Richtig/Falsch, Zahl
 *   mit Einheit, freie Antwort, Bauaufgabe im NT-Labor; dazu Bilder, Messwerttabellen, Diagramme und Animationen
 *   (beliebig oft abspielbar). Keine Tipps, keine Hilfestufen, keine Lösungen.
 * - Nach der Abgabe steht nur „Abgegeben!“. Punkte, Korrektur und Lernschritte kommen mit der Rückgabe durch die
 *   Lehrkraft (Startseite „Zurückbekommen“ und Übersicht NT 8).
 */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" })[c]);
  const THEMEN = { magnet: "Magnetismus und Induktion", energie: "Energie nutzen", gesundheit: "Mensch und Gesundheit", stoffe: "Atome, Ionen und chemische Reaktionen", saeuren: "Säuren, Laugen und Salze" };
  const FEHLER = { locked: "Diese Probe ist noch gesperrt.", already_submitted: "Diese Probe wurde mit diesem Code bereits abgegeben.", submission_in_progress: "Eine Abgabe läuft bereits." };
  let selected, student, exam, labore = {}, versatz = 0, schmutzig = false, sendet = false, zuletztGesichert = "", takt = null, uhr = null;

  async function request(route, body) {
    const res = await fetch(API + "/api/nt8/" + route, body ? { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) } : {});
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw Object.assign(new Error(FEHLER[data.error] || data.message || data.error || "Serverfehler"), { code: data.error });
    return data;
  }
  function status(message, bad = false) { $("status").textContent = message; $("status").classList.toggle("bad", bad); $("status").hidden = false; }

  // Zug (M oder R) und Themenbereich aus dem Link der Übersicht oder aus dem Tab
  let zug = /^[MR]$/i.test(params.get("zug") || "") ? params.get("zug").toUpperCase() : "";
  try { if (zug) sessionStorage.setItem("grumi-nt8-zug", zug); else zug = sessionStorage.getItem("grumi-nt8-zug") || ""; } catch (_e) {}
  const thema = THEMEN[params.get("thema")] ? params.get("thema") : "";
  // Nachschreibproben (Variante B) stehen erst in der Liste, wenn die Lehrkraft sie freigeschaltet hat
  const passt = t => (!zug || t.zug === zug) && (!thema || t.thema === thema) && (t.variante !== "B" || t.unlocked);
  const herkunft = a => (a.modulTitel ? `<span class="pill herkunft" title="Diese Aufgabe gehört zu diesem Lernmodul">📘 ${esc(a.modulTitel)}</span>` : "") + (a.transfer ? `<span class="pill transfer" title="Hier wendest du dein Wissen auf etwas Neues an">🔁 Transfer</span>` : "");
  (function kopf() {
    const klasse = zug === "R" ? "8R" : zug === "M" ? "8M" : "8";
    const zurueck = zug === "R" ? "../../8R/NT/index.html" : "index.html";
    document.querySelector(".brand").setAttribute("href", zurueck);
    document.querySelector(".brand span").textContent = klasse + " / NT";
    document.querySelector(".top-tag").textContent = "Proben" + (thema ? " · " + THEMEN[thema] : "");
    document.querySelector("#exam-main > .eyebrow").textContent = "Natur und Technik · Klasse " + klasse;
    document.querySelector("#exam-main > h1").textContent = thema ? "Probe: " + THEMEN[thema] : "Proben Natur und Technik";
    document.title = "Probe" + (thema ? " " + THEMEN[thema] : "n") + " | Natur und Technik " + klasse;
    // Im selben Tab schon mit dem Code angemeldet: Code vorschlagen
    try { const t = JSON.parse(sessionStorage.getItem("grumi-code-tab") || "null"); if (t && /^\d{3}$/.test(t.code) && t.code[0] !== "0" && Date.now() - t.zeit < 600000) $("code").value = t.code; } catch (_e) {}
  })();

  async function load() {
    try {
      const data = await request("list");
      const tests = data.tests.filter(passt);
      if (!tests.length) { $("exam-list").innerHTML = ""; status("Für diesen Themenbereich gibt es noch keine Probe."); return; }
      $("exam-list").innerHTML = tests.map(t => `<article class="exam-tile"><div><div class="eyebrow">${esc(t.scope)}</div><h2>${esc(t.title)}</h2><p>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · ${t.minutes} Minuten</p></div><div><span class="pill ${t.unlocked ? "open" : ""}">${t.unlocked ? "Freigeschaltet" : "Gesperrt"}</span><br><button class="btn" data-test="${t.id}" ${t.unlocked ? "" : "disabled"}>Auswählen</button></div></article>`).join("");
      status("Wähle die freigeschaltete Probe. Zur Vorbereitung kannst du jederzeit zu den Lernmodulen und Lernkarten zurückgehen.");
      const offen = tests.filter(t => t.unlocked), test = offen.find(t => t.id === params.get("test")) || (offen.length === 1 ? offen[0] : null);
      if (test) select(test);
    } catch (e) { status("Der Probenserver ist noch nicht erreichbar. Die Lernmodule funktionieren unabhängig davon. " + e.message, true); }
  }
  function select(t) {
    selected = t;
    $("selected-title").textContent = t.title;
    $("identity-section").hidden = false;
    $("identity-section").scrollIntoView({ behavior: "smooth" });
  }

  /* ---------- Aufgaben zeichnen ---------- */
  function itemMarkup(item) {
    let c = "";
    if (item.type === "choice") c = `<div class="options">${item.options.map((o, j) => `<label class="option"><input type="radio" name="item-${item.nr}" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    if (item.type === "multi") c = `<p class="mehrfach-hinweis">Mehrere Antworten können richtig sein. Für jedes falsche Kreuz wird ein Punkt abgezogen.</p><div class="options">${item.options.map((o, j) => `<label class="option"><input type="checkbox" value="${j}"><span>${esc(o)}</span></label>`).join("")}</div>`;
    if (item.type === "match") c = item.labels.map((label, j) => `<label class="match-row"><strong>${esc(label)}</strong><select data-match="${j}"><option value="">Bitte zuordnen</option>${item.targets.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "order") c = item.steps.map((_, j) => `<label class="match-row"><strong>${j + 1}.</strong><select data-order="${j}"><option value="">Bitte wählen</option>${item.steps.map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join("")}</select></label>`).join("");
    if (item.type === "gaps") c = `<p class="luecken">${esc(item.gapText).replace(/\{(\d+)\}/g, (_, n) => { const o = item.gapOptions[n - 1] || []; return `<select data-gap="${n - 1}" aria-label="Lücke ${n}"><option value="">Lücke ${n}</option>${o.map(w => `<option value="${esc(w)}">${esc(w)}</option>`).join("")}</select>`; })}</p>`;
    if (item.type === "tf") c = `<div class="rf">${item.statements.map((s, j) => `<div class="rf-zeile"><span>${esc(s)}</span><span class="rf-wahl"><label><input type="radio" name="rf-${item.nr}-${j}" value="1"> richtig</label><label><input type="radio" name="rf-${item.nr}-${j}" value="0"> falsch</label></span></div>`).join("")}</div>`;
    if (item.type === "number") c = `<div class="zahl-zeile"><label>Ergebnis: <input type="text" inputmode="decimal" maxlength="12" data-zahl="1" aria-label="Zahl zu Aufgabe ${item.nr}" placeholder="Zahl"></label>${item.units ? `<select data-einheit="1" aria-label="Einheit"><option value="">Einheit</option>${item.units.map(u => `<option value="${esc(u)}">${esc(u)}</option>`).join("")}</select>` : item.unit ? `<strong>${esc(item.unit)}</strong>` : ""}</div>`;
    if (item.type === "text") c = `<textarea aria-label="Antwort zu Aufgabe ${item.nr}" rows="4" maxlength="1500" placeholder="Schreibe deine Antwort in eigenen Worten."></textarea>`;
    const lab = item.labor ? `<div data-labor="${item.nr}"></div>` : "";
    return `<section class="check exam-question" data-nr="${item.nr}"><div class="question-head"><span class="kopf-links"><span class="pill">Aufgabe ${item.nr}</span>${herkunft(item)}</span><span>${item.points} ${item.points === 1 ? "Punkt" : "Punkte"}</span></div><h3>${esc(item.prompt)}</h3>${window.NT8Darstellung.html(item)}${lab}${c}</section>`;
  }
  const frage = nr => document.querySelector(`#questions [data-nr="${nr}"]`);
  function collect() {
    return exam.items.map(item => {
      const el = frage(item.nr);
      if (item.type === "choice") { const r = el.querySelector("input:checked"); return r ? Number(r.value) : null; }
      if (item.type === "multi") return [...el.querySelectorAll("input:checked")].map(i => Number(i.value));
      if (item.type === "match" || item.type === "order" || item.type === "gaps") return [...el.querySelectorAll("select")].map(s => s.value);
      if (item.type === "tf") return item.statements.map((_, j) => { const r = el.querySelector(`input[name="rf-${item.nr}-${j}"]:checked`); return r ? r.value === "1" : null; });
      if (item.type === "number") return { wert: el.querySelector("[data-zahl]").value.trim(), einheit: (el.querySelector("[data-einheit]") || { value: "" }).value };
      if (item.type === "labor") { const lab = labore[item.nr]; return lab ? { zustand: lab.zustand(), text: lab.beschreibe().replace(/<[^>]+>/g, "") } : null; }
      return el.querySelector("textarea").value.trim();
    });
  }
  const leer = (item, a) => a === null || a === "" || (Array.isArray(a) && !a.some(x => x !== "" && x !== null)) || (item.type === "number" && !a.wert) || (item.type === "labor" && !beruehrt[item.nr]);
  const beruehrt = {};
  // Zwischenstand vom Server in die Seite schreiben (anderes Gerät, Speicher des Browsers gelöscht)
  function setze(answers) {
    exam.items.forEach((item, i) => {
      const a = answers[i], el = frage(item.nr);
      if (a === null || a === undefined) return;
      if (item.type === "choice") { const r = el.querySelector(`input[value="${a}"]`); if (r) r.checked = true; }
      else if (item.type === "multi") (a || []).forEach(v => { const b = el.querySelector(`input[value="${v}"]`); if (b) b.checked = true; });
      else if (item.type === "match" || item.type === "order" || item.type === "gaps") [...el.querySelectorAll("select")].forEach((s, j) => { if (a[j]) s.value = a[j]; });
      else if (item.type === "tf") (a || []).forEach((v, j) => { if (v === true || v === false) { const r = el.querySelector(`input[name="rf-${item.nr}-${j}"][value="${v ? 1 : 0}"]`); if (r) r.checked = true; } });
      else if (item.type === "number") { el.querySelector("[data-zahl]").value = a.wert || ""; const e = el.querySelector("[data-einheit]"); if (e && a.einheit) e.value = a.einheit; }
      else if (item.type === "labor") { if (a.zustand && labore[item.nr]) { labore[item.nr].setze(a.zustand); beruehrt[item.nr] = true; } }
      else { const t = el.querySelector("textarea"); t.value = a; if (window.ProbeSchutz.gesetzt) window.ProbeSchutz.gesetzt(t); }
    });
  }
  const laborStaende = () => { const s = {}; Object.keys(labore).forEach(nr => { s[nr] = { z: labore[nr].zustand(), b: !!beruehrt[nr] }; }); return s; };
  const laborSetzen = s => Object.keys(s || {}).forEach(nr => { if (labore[nr] && s[nr] && s[nr].b) { labore[nr].setze(s[nr].z); beruehrt[nr] = true; } });

  /* ---------- Zeit und Zwischenstand ---------- */
  const zwei = n => String(n).padStart(2, "0");
  function zeitZeigen() {
    const s = exam && exam.sitzung, el = $("probe-zeit");
    if (!s) { el.textContent = ""; return; }
    const rest = Math.round((Date.parse(s.endetAm) - (Date.now() + versatz)) / 1000);
    el.classList.toggle("knapp", rest <= 300 && rest > 0); el.classList.toggle("um", rest <= 0);
    el.textContent = rest > 0 ? `⏱ noch ${Math.floor(rest / 60)}:${zwei(rest % 60)} Minuten (von ${s.minuten})` : "⏱ Die Zeit ist um – gib jetzt ab.";
  }
  function syncZeigen(art, text) { const el = $("probe-sync"); el.className = "sync" + (art ? " " + art : ""); el.textContent = text; }
  function geaendert() { schmutzig = true; syncZeigen("offen", "Noch nicht synchronisiert"); clearTimeout(geaendert.t); geaendert.t = setTimeout(sichern, 2500); }
  async function sichern(keepalive) {
    if (!exam || !schmutzig || sendet) return;
    sendet = true; schmutzig = false;
    try {
      const res = await fetch(API + "/api/nt8/zwischenstand", { method: "POST", headers: { "Content-Type": "application/json" }, keepalive: keepalive === true,
        body: JSON.stringify({ testId: exam.test.id, code: student.code, answers: collect(), verlassen: ProbeSchutz.verlassen(), protokoll: ProbeSchutz.protokoll() }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok || !d.ok) throw new Error(d.error || "HTTP " + res.status);
      zuletztGesichert = new Date(d.gespeichertAm).toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" });
      if (!schmutzig) syncZeigen("", "Gespeichert ✓ " + zuletztGesichert);
    } catch (_e) {
      schmutzig = true;
      syncZeigen(navigator.onLine === false ? "weg" : "offen", navigator.onLine === false ? "Keine Verbindung – deine Antworten bleiben auf diesem Gerät" : "Noch nicht synchronisiert");
    } finally { sendet = false; }
  }
  window.addEventListener("online", () => { if (exam) { schmutzig = true; sichern(); } });
  window.addEventListener("offline", () => { if (exam) syncZeigen("weg", "Keine Verbindung – deine Antworten bleiben auf diesem Gerät"); });
  document.addEventListener("visibilitychange", () => { if (exam && document.visibilityState === "hidden") { schmutzig = true; sichern(true); } });

  /* ---------- Start ---------- */
  $("exam-list").addEventListener("click", e => {
    const button = e.target.closest("[data-test]");
    if (button) select({ id: button.dataset.test, title: button.closest("article").querySelector("h2").textContent });
  });
  $("identity-form").addEventListener("submit", async e => {
    e.preventDefault();
    student = Object.fromEntries(new FormData(e.currentTarget));
    const button = e.currentTarget.querySelector("button"); button.disabled = true;
    try {
      const data = await request("start", { testId: selected.id, ...student }); exam = data;
      if (data.sitzung) versatz = Date.parse(data.sitzung.serverZeit) - Date.now();
      $("identity-section").hidden = true; $("exam-list").hidden = true; $("status").hidden = true;
      $("questions-section").hidden = false;
      $("exam-kicker").textContent = data.test.scope;
      $("exam-title").textContent = data.test.title;
      $("exam-points").textContent = data.test.maxPoints + " Punkte";
      $("questions").innerHTML = data.items.map(itemMarkup).join("");
      labore = {};
      data.items.forEach(item => {
        if (!item.labor) return;
        const el = document.querySelector(`#questions [data-labor="${item.nr}"]`), lab = window.NT8Darstellung.labor(el, item);
        if (lab && item.type === "labor") { labore[item.nr] = lab; lab.beiAenderung(() => { beruehrt[item.nr] = true; geaendert(); }); }
      });
      const lokal = ProbeSchutz.start({ testId: data.test.id, code: student.code, box: $("questions"), extra: { holen: laborStaende, setzen: laborSetzen } });
      // Kein Stand auf diesem Gerät, aber einer auf dem Server (anderes Gerät, neuer Browser): übernehmen
      if (!lokal && data.zwischenstand && Array.isArray(data.zwischenstand.answers)) { setze(data.zwischenstand.answers); status("Deine Antworten vom letzten Mal sind wieder da. Mach einfach weiter."); }
      ["input", "change"].forEach(art => $("questions").addEventListener(art, geaendert));
      zeitZeigen(); clearInterval(uhr); uhr = setInterval(zeitZeigen, 1000);
      clearInterval(takt); takt = setInterval(() => { if (schmutzig) sichern(); }, 15000);
      syncZeigen("", data.zwischenstand ? "Gespeichert ✓" : "Bereit – wird laufend gesichert");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) { status(err.message, true); window.scrollTo({ top: 0, behavior: "smooth" }); }
    finally { button.disabled = false; }
  });

  /* ---------- Abgabe ---------- */
  // Bei Netz- oder Serverfehler versucht es die Seite von selbst noch dreimal (die Antworten bleiben stehen). Kam schon
  // die erste Sendung an und nur die Antwort ging verloren, meldet der Server beim neuen Versuch „schon abgegeben“.
  async function abgeben(body, melde) {
    const MELD = { locked: "Diese Probe ist gesperrt. Sag deiner Lehrkraft Bescheid – deine Antworten bleiben hier stehen.", already_submitted: FEHLER.already_submitted };
    let letzter = "";
    for (let versuch = 1; versuch <= 4; versuch++) {
      const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 70000);
      try {
        const res = await fetch(API + "/api/nt8/submit", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: ctl.signal });
        const data = await res.json().catch(() => ({}));
        if (res.ok && data.result) return data;
        if (res.status === 409 && versuch > 1) return { angekommen: true };
        if (res.status === 409 && data.error === "submission_in_progress") letzter = "Eine Abgabe läuft bereits.";
        else if (res.status >= 400 && res.status < 500 && res.status !== 429) throw Object.assign(new Error(MELD[data.error] || data.message || data.error || "Die Abgabe wurde nicht angenommen."), { endgueltig: true });
        else letzter = "Der Server ist gerade nicht erreichbar.";
      } catch (err) {
        if (err.endgueltig) throw err;
        letzter = err.name === "AbortError" ? "Der Server antwortet nicht." : "Keine Verbindung zum Server.";
      } finally { clearTimeout(frist); }
      if (versuch < 4) { melde(letzter + " Neuer Versuch " + (versuch + 1) + " von 4 … Lass die Seite offen."); await new Promise(r => setTimeout(r, 3000 * versuch)); }
    }
    throw new Error("Die Abgabe ist noch nicht angekommen (" + letzter + "). Deine Antworten bleiben hier stehen und sind gesichert. Sag deiner Lehrkraft Bescheid und tippe dann noch einmal auf „Probe abgeben“.");
  }
  $("exam-form").addEventListener("submit", async e => {
    e.preventDefault();
    const answers = collect(), offen = exam.items.filter((item, i) => leer(item, answers[i])).map(item => item.nr);
    const hinweis = $("leer-hinweis");
    hinweis.hidden = !offen.length;
    hinweis.textContent = offen.length ? (offen.length === 1 ? "Aufgabe " + offen[0] + " ist noch leer." : "Diese Aufgaben sind noch leer: " + offen.join(", ") + ".") : "";
    if (!confirm((offen.length ? hinweis.textContent + "\n\n" : "") + "Probe wirklich abgeben? Danach kannst du nichts mehr ändern.")) return;
    const button = $("submit-exam"); button.disabled = true; button.textContent = "Wird abgegeben ...";
    try {
      const data = await abgeben({ testId: exam.test.id, ...student, answers, verlassen: ProbeSchutz.verlassen(), protokoll: ProbeSchutz.protokoll() }, text => { status(text, true); button.textContent = "Wird noch einmal gesendet ..."; });
      clearInterval(takt); clearInterval(uhr); clearTimeout(geaendert.t);
      // für die Übersicht: „abgegeben – wartet auf die Korrektur“
      try { const k = "grumi-nt8-abgegeben~code-" + student.code, m = JSON.parse(localStorage.getItem(k) || "{}") || {}; m[exam.test.id] = new Date().toISOString(); localStorage.setItem(k, JSON.stringify(m)); } catch (_e) {}
      const titel = exam.test.title;
      ProbeSchutz.ende(); exam = null;
      // Punkte und Korrektur gibt es erst mit der Rückgabe durch die Lehrkraft – auch wenn ein Server sie mitschickt
      const result = data.angekommen ? { abgegeben: true, submittedAt: new Date().toISOString() } : { abgegeben: true, submittedAt: (data.result && data.result.submittedAt) || new Date().toISOString() };
      ProbeSchutz.abgegeben(result, { box: $("result-section"), weg: [$("questions-section"), $("status")], titel });
    } catch (err) { button.disabled = false; button.textContent = "Probe abgeben"; status(err.message, true); window.scrollTo({ top: 0, behavior: "smooth" }); }
  });
  load();
})();
