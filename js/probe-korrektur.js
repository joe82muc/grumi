/* Zurückbekommene Proben aller Fächer ansehen und drucken (korrektur.html im Hauptordner).
 *   korrektur.html                       -> Liste „Zurückbekommen“ des Kindes (alle Fächer)
 *   korrektur.html?modul=<m>&id=<abgabe> -> die korrigierte Probe: Aufgabe · Deine Antwort · Punkte · Rückmeldung
 * Zugang nur mit dem Code des Kindes – kein Link mit Daten. Ist das Kind in diesem Tab schon mit seinem Code
 * angemeldet, muss es ihn nicht noch einmal eintippen. Dieselbe Seite ist die Ansicht für die Eltern: drucken oder
 * als PDF speichern (im Druck stehen Namenszeile und Unterschriftsfeld).
 * Server: /api/proben/rueckgabe/meine | ansehen (proben-rueckgabe.js). Aussehen: 7M/Deutsch/probe.css.
 * Deutsch 7 bringt seine eigene Korrekturseite mit (7M/Deutsch/korrektur.html) – die Liste verweist dorthin.
 */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const MODUL = params.get("modul") || "", ID = params.get("id") || "";
  const FACH = { NT: "Natur und Technik" };
  let code = "";

  const zahl = n => String(Math.round(Number(n) * 2) / 2).replace(".", ",");
  const datum = iso => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }); };
  const fach = f => FACH[f] || f || "";
  // Anmeldung dieses Tabs (die anderen Seiten schreiben sie; hier wird nur gelesen) oder die Anmeldung der Startseite
  function gemerkterCode() {
    try { const t = JSON.parse(sessionStorage.getItem("grumi-code-tab") || "null"); if (t && /^\d{3}$/.test(t.code) && Date.now() - t.zeit < 600000) return t.code; } catch (_e) {}
    return "";
  }
  function status(text, art) { const s = $("status"); s.textContent = text; s.className = "notice" + (art ? " " + art : ""); s.hidden = !text; }
  async function post(route, body) {
    const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 75000);
    try {
      const res = await fetch(API + "/api/proben/rueckgabe/" + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body), signal: ctl.signal });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw Object.assign(new Error(data.message || "Das hat nicht geklappt."), { code: data.error, status: res.status });
      return data;
    } catch (e) {
      if (e.name === "AbortError" || e instanceof TypeError) throw new Error("Der Server antwortet gerade nicht. Versuche es in einer Minute noch einmal.");
      throw e;
    } finally { clearTimeout(frist); }
  }
  // Deutsch 7 hat eine eigene Korrekturseite
  const linkZu = r => (r.modul === "d7proben" ? "7M/Deutsch/korrektur.html?test=" + encodeURIComponent(r.testId) : "korrektur.html?modul=" + encodeURIComponent(r.modul) + "&id=" + encodeURIComponent(r.id));

  async function liste() {
    const d = await post("meine", { code });
    $("anmelden").hidden = true; $("korrektur").hidden = true;
    $("liste").hidden = false;
    $("liste").innerHTML = `<div class="eyebrow">Klasse ${esc(d.klasse || "")}</div><h1>Zurückbekommen</h1>` +
      (d.rueckgaben.length ? `<div class="exam-list">${d.rueckgaben.map(r => `<article class="exam-tile"><div><h2>📄 ${esc(r.titel)}</h2>
        <p>${esc(fach(r.fach))} · geschrieben am ${datum(r.datum)} · zurückbekommen am ${datum(r.freigegebenAm)}</p></div>
        <div><span class="pill ${r.neu ? "open" : ""}">${r.neu ? "NEUE KORREKTUR" : "korrigiert"}</span><a class="btn" href="${esc(linkZu(r))}">Korrektur öffnen</a></div></article>`).join("")}</div>`
        : `<p class="notice">Du hast noch keine korrigierte Probe zurückbekommen. Sobald deine Lehrkraft eine Probe zurückgibt, steht sie hier und auf der Startseite.</p>`) +
      `<p><a class="btn secondary" href="index.html">Zur Startseite</a></p>`;
  }

  function teil(titel, inhalt, klasse) { return inhalt ? `<div class="k-teil"><span>${titel}</span><div class="${klasse || ""}">${inhalt}</div></div>` : ""; }
  function blatt(k) {
    return `<div class="kopfkarte"><div><div class="eyebrow">Korrigierte Probe · ${esc(fach(k.fach))}</div><h1>${esc(k.titel)}</h1>
        <dl><dt>Klasse</dt><dd>${esc(k.klasse || "")}</dd><dt>Geschrieben am</dt><dd>${datum(k.datum)}</dd><dt>Zurückbekommen am</dt><dd>${datum(k.freigegebenAm)}</dd>
        <dt>Schülerkennung</dt><dd>Code ${esc(k.code)}</dd><dt class="nur-druck">Name</dt><dd class="nur-druck">________________________________</dd></dl></div>
      <div class="ergebnis"><span>Punkte</span><strong>${zahl(k.score)} / ${zahl(k.total)}</strong><span>${esc(k.percent)} %</span>${k.grade !== "" && k.grade != null ? `<span class="note">Note ${esc(k.grade)}</span>` : ""}</div></div>` +
      (k.kommentar ? `<div class="k-lehrer" style="margin-top:14px"><div class="k-teil" style="margin-top:0"><span>Kommentar deiner Lehrkraft</span><p style="white-space:pre-line;margin:0">${esc(k.kommentar)}</p></div></div>` : "") +
      `<div id="k-aufgaben" style="margin-top:14px">` + (k.aufgaben.length ? k.aufgaben.map(a => {
        const punkte = `<span class="k-punkte${a.points >= a.max ? " voll" : a.points === 0 ? " null" : ""}">${zahl(a.points)} / ${zahl(a.max)}</span>`;
        const korrektur = (a.comment ? `<p>${esc(a.comment)}</p>` : "") + (a.loesung ? `<p>${a.beispiel ? "Beispiel für eine richtige Antwort: " : "Richtig ist: "}${esc(a.loesung)}</p>` : "") ||
          (a.points >= a.max ? "<p>Richtig.</p>" : "");
        return `<section class="k-aufgabe"><div class="k-kopf"><b>Aufgabe ${esc(a.nr)}</b>${punkte}</div>` +
          teil("Aufgabe", a.prompt ? `<p>${esc(a.prompt)}</p>` : "") +
          teil("Deine Antwort", `<div class="k-antwort${a.given ? "" : " leer"}">${a.given ? esc(a.given) : "Keine Antwort."}</div>`) +
          teil("Korrektur", korrektur) + "</section>";
      }).join("") : `<p class="notice">Für diese Probe gibt es keine Einzelauflistung der Antworten.</p>`) + "</div>" +
      `<p class="k-fuss" style="margin-top:12px;font-size:.85rem;color:var(--muted)">Die Probe wurde am Tablet geschrieben. Freie Antworten wurden mit KI-Unterstützung bewertet, maßgeblich ist die Bewertung der Lehrkraft.</p>` +
      `<div class="unterschrift"><div>Datum, Unterschrift einer/eines Erziehungsberechtigten</div><div>Das nehme ich mir für das nächste Mal vor:</div></div>`;
  }
  async function zeigen() {
    const k = (await post("ansehen", { code, modul: MODUL, id: ID })).korrektur;
    $("anmelden").hidden = true; $("liste").hidden = true;
    $("blatt").innerHTML = blatt(k);
    $("korrektur").hidden = false;
    document.title = "Korrigierte Probe: " + k.titel + " | GRUMI";
    status("");
  }
  async function start() {
    status("Einen Moment …");
    try { await (MODUL && ID ? zeigen() : liste()); status(""); }
    catch (e) {
      if (e.code === "nicht_freigegeben" || e.code === "not_found") { try { await liste(); } catch (_e) {} status(e.message, ""); return; }
      $("anmelden").hidden = false; status(e.message, "bad");
    }
  }

  $("code-form").addEventListener("submit", e => { e.preventDefault(); code = $("code").value.trim(); start(); });
  $("drucken").addEventListener("click", () => window.print());
  $("pdf").addEventListener("click", () => { $("pdf-hilfe").hidden = false; setTimeout(() => window.print(), 150); });

  code = gemerkterCode();
  if (code) start(); else $("anmelden").hidden = false;
})();
