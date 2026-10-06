/* Deutsch 7: korrigierte Probe ansehen und drucken (korrektur.html).
 *   korrektur.html              -> Liste „Meine Proben“ des Kindes
 *   korrektur.html?test=<id>    -> die korrigierte Probe (nur wenn die Lehrkraft sie freigegeben hat)
 * Zugang nur mit dem Code des Kindes – kein Link mit Daten. Ist das Kind in diesem Tab schon mit seinem Code
 * angemeldet (GRUMI merkt sich das je Tab für 10 Minuten), muss es ihn nicht noch einmal eintippen.
 * Dieselbe Seite ist die Ansicht für die Eltern: drucken oder als PDF speichern.
 */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = D7Lesetext.esc;
  const TEST = params.get("test") || "";
  let code = "";

  // Anmeldung dieses Tabs (js/lernstand.js und die anderen Seiten schreiben sie; hier wird nur gelesen)
  function tabCode() {
    try { const t = JSON.parse(sessionStorage.getItem("grumi-code-tab") || "null"); return t && /^\d{3}$/.test(t.code) && Date.now() - t.zeit < 600000 ? t.code : ""; } catch (_e) { return ""; }
  }
  function status(text, art) { const s = $("status"); s.textContent = text; s.className = "notice" + (art ? " " + art : ""); s.hidden = !text; }
  async function post(route, body) {
    const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 75000);
    try {
      const res = await fetch(API + "/api/d7/proben/" + route, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(body), signal: ctl.signal});
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw Object.assign(new Error(data.message || "Das hat nicht geklappt."), {code: data.error, status: res.status});
      return data;
    } catch (e) {
      if (e.name === "AbortError" || e instanceof TypeError) throw new Error("Der Server antwortet gerade nicht. Versuche es in einer Minute noch einmal.");
      throw e;
    } finally { clearTimeout(frist); }
  }

  async function liste() {
    const d = await post("meine", {code});
    $("anmelden").hidden = true; $("korrektur").hidden = true;
    $("liste").hidden = false;
    $("liste").innerHTML = `<div class="eyebrow">Deutsch 7 · Klasse ${esc(d.klasse || "")}</div><h1>Meine Proben</h1>` +
      (d.abgaben.length ? `<div class="exam-list">${d.abgaben.map(a => `<article class="exam-tile"><div><h2>📄 ${esc(a.title)}</h2>
        <p>Geschrieben am ${D7Korrektur.datum(a.abgegebenAm)}${a.status === "korrigiert" ? " · korrigiert zurück am " + D7Korrektur.datum(a.freigegebenAm) : ""}</p></div>
        <div>${a.status === "korrigiert" ? `<span class="pill ${a.neu ? "open" : ""}">${a.neu ? "NEUE KORREKTUR" : "korrigiert"}</span><a class="btn" href="korrektur.html?test=${encodeURIComponent(a.testId)}">Korrektur öffnen</a>`
          : `<span class="pill">abgegeben</span><span style="color:var(--muted);font-size:.9rem">Deine Lehrkraft korrigiert noch.</span>`}</div></article>`).join("")}</div>`
        : `<p class="notice">Du hast noch keine Deutsch-Probe abgegeben.</p>`) +
      `<p><a class="btn secondary" href="index.html">Zur Übersicht Deutsch 7</a></p>`;
  }
  async function zeigen() {
    const d = await post("korrektur", {code, testId: TEST});
    const k = d.korrektur;
    $("anmelden").hidden = true; $("liste").hidden = true;
    $("blatt").innerHTML = D7Korrektur.html(k);
    const texte = (k.texte || []);
    $("texte").hidden = !texte.length;
    $("mit-text").closest("label").hidden = !texte.length;
    $("texte-inhalt").innerHTML = texte.map(D7Lesetext.html).join("");
    $("korrektur").hidden = false;
    document.title = "Korrigierte Probe: " + k.title + " | Deutsch 7";
    status("");
  }
  async function start() {
    status("Einen Moment …");
    try { await (TEST ? zeigen() : liste()); }
    catch (e) {
      if (e.code === "nicht_freigegeben" || e.code === "not_found") { status(e.message, ""); try { await liste(); } catch (_e) {} status(e.message, ""); return; }
      $("anmelden").hidden = false; status(e.message, "bad");
    }
  }

  $("code-form").addEventListener("submit", e => { e.preventDefault(); code = $("code").value.trim(); start(); });
  $("drucken").addEventListener("click", () => window.print());
  $("pdf").addEventListener("click", () => { $("pdf-hilfe").hidden = false; setTimeout(() => window.print(), 150); });
  // Lesetexte mitdrucken: Die Texte gehören dann zum Blatt
  $("mit-text").addEventListener("change", e => { $("texte").classList.toggle("kein-druck", !e.target.checked); if (e.target.checked) { $("texte").open = true; D7Lesetext.einpassen($("texte")); } });
  $("texte").addEventListener("toggle", () => { if ($("texte").open) D7Lesetext.einpassen($("texte")); });

  code = tabCode();
  if (code) start(); else $("anmelden").hidden = false;
})();
