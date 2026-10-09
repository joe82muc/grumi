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
  const linkZu = r => (r.modul === "d7proben" ? "7M/Deutsch/korrektur.html?test=" + encodeURIComponent(r.testId) : r.modul === "d8proben" ? "8/Deutsch/korrektur.html?test=" + encodeURIComponent(r.testId) : "korrektur.html?modul=" + encodeURIComponent(r.modul) + "&id=" + encodeURIComponent(r.id));

  async function liste() {
    const d = await post("meine", { code });
    $("anmelden").hidden = true; $("korrektur").hidden = true;
    $("liste").hidden = false;
    $("liste").innerHTML = `<div class="eyebrow">Klasse ${esc(d.klasse || "")}</div><h1>Zurückbekommen</h1>` +
      (d.rueckgaben.length ? `<div class="exam-list">${d.rueckgaben.map(r => `<article class="exam-tile"><div><h2>📄 ${esc(r.titel)}</h2>
        <p>${esc(fach(r.fach))} · geschrieben am ${datum(r.datum)} · zurückbekommen am ${datum(r.freigegebenAm)}</p></div>
        <div><span class="pill ${r.neu ? "open" : ""}">${r.neu ? "NEUE KORREKTUR" : "korrigiert"}</span><a class="btn" href="${esc(linkZu(r))}">Korrektur öffnen</a></div></article>`).join("")}</div>`
        : `<p class="notice">Du hast noch keine korrigierte Probe zurückbekommen. Sobald deine Lehrkraft eine Probe zurückgibt, steht sie hier und auf der Startseite.</p>`) +
      // Vokabeltests: Die falschen Wörter aller Tests sammelt die Merkliste (merkliste.html) – dort kann das Kind sie üben
      `<p>${d.rueckgaben.some(r => r.modul === "vokabeltest") ? `<a class="btn" href="merkliste.html">📕 Meine Merkliste: falsche Wörter üben</a> ` : ""}<a class="btn secondary" href="index.html">Zur Startseite</a></p>`;
  }

  function teil(titel, inhalt, klasse) { return inhalt ? `<div class="k-teil"><span>${titel}</span><div class="${klasse || ""}">${inhalt}</div></div>` : ""; }
  // Viele kurze Aufgaben (Vokabeltest, Grammatikprobe): als Tabelle, damit die Korrektur auf ein bis zwei Blätter passt
  function kurzeAufgaben(aufgaben) {
    const kurz = (s, n) => String(s || "").length <= n;
    return aufgaben.length >= 15 && aufgaben.every(a => kurz(a.prompt, 120) && kurz(a.given, 120) && kurz(a.loesung, 160) && kurz(a.comment, 200));
  }
  function tabelle(aufgaben) {
    if (!document.getElementById("k-tab-stil")) {
      const s = document.createElement("style"); s.id = "k-tab-stil";
      s.textContent = ".k-tab{width:100%;border-collapse:collapse;background:#fff;border:1px solid #e5d9db;border-radius:12px;font-size:.98rem}" +
        ".k-tab th{font-size:.72rem;text-transform:uppercase;letter-spacing:.05em;text-align:left;color:#6b5b5f;padding:8px 10px;border-bottom:2px solid #e5d9db}" +
        ".k-tab td{padding:6px 10px;border-bottom:1px solid #f0e6e8;vertical-align:top;overflow-wrap:anywhere}" +
        ".k-tab .nr{color:#8a7a7e;width:2.4em}.k-tab .p{width:3.2em;font-weight:800;text-align:center;white-space:nowrap}" +
        ".k-tab tr.ok .p{color:#15803d}.k-tab tr.no .p,.k-tab tr.no .a{color:#b3261e}.k-tab .leer{color:#9a8a8e;font-style:italic}.k-tab small{display:block;color:#6b5b5f}" +
        "@media (max-width:560px){.k-tab{font-size:.88rem}.k-tab td,.k-tab th{padding:5px 6px}}" +
        // Druck: Kopf zweispaltig (Angaben links, Punkte rechts) und enge Zeilen – 35 Wörter passen auf ein A4-Blatt
        "@media print{.kopfkarte{grid-template-columns:1fr auto!important;align-items:start}.k-tab{font-size:9pt;border-radius:0}.k-tab td{padding:1.6pt 6pt}.k-tab th{padding:2.5pt 6pt;font-size:6.5pt}" +
        ".k-tab tr{break-inside:avoid}.k-fuss{font-size:7.5pt!important;margin-top:4pt!important}.unterschrift{margin-top:10mm!important}}";
      document.head.appendChild(s);
    }
    return `<table class="k-tab"><thead><tr><th class="nr">Nr.</th><th>Aufgabe</th><th>Deine Antwort</th><th class="p"></th><th>Richtig ist</th></tr></thead><tbody>` +
      aufgaben.map(a => `<tr class="${a.points >= a.max ? "ok" : "no"}"><td class="nr">${esc(a.nr)}</td><td>${esc(a.prompt)}${a.modul || a.transfer ? `<small>${a.modul ? "📘 " + esc(a.modul) : ""}${a.modul && a.transfer ? " · " : ""}${a.transfer ? "🔁 Transfer" : ""}</small>` : ""}</td>` +
        `<td class="a${a.given ? "" : " leer"}">${a.given ? esc(a.given) : "keine Antwort"}${a.comment ? `<small>${esc(a.comment)}</small>` : ""}</td>` +
        // ein Punkt: Haken oder Kreuz; mehrere Punkte: erreichte von möglichen
        `<td class="p">${a.max > 1 ? zahl(a.points) + "/" + zahl(a.max) : a.points >= a.max ? "✓" : "✗"}</td><td>${a.loesung ? (a.beispiel ? "z. B. " : "") + esc(a.loesung) : ""}</td></tr>`).join("") + "</tbody></table>";
  }
  // Herkunft einer Aufgabe: Modul und „Transfer“ (Block-Proben in Natur und Technik)
  function herkunft(a) {
    return (a.modul ? `<span class="k-modul">📘 ${esc(a.modul)}</span>` : "") + (a.transfer ? `<span class="k-transfer">🔁 Transfer</span>` : "");
  }
  // Punkte je Modul – zeigt, welches Modul das Kind noch einmal ansehen sollte
  function jeModul(aufgaben) {
    const reihe = [], map = {};
    aufgaben.forEach(a => { if (!a.modul) return; if (!map[a.modul]) { map[a.modul] = { p: 0, max: 0 }; reihe.push(a.modul); } map[a.modul].p += Number(a.points) || 0; map[a.modul].max += Number(a.max) || 0; });
    if (reihe.length < 2) return "";
    if (!document.getElementById("k-modul-stil")) {
      const s = document.createElement("style"); s.id = "k-modul-stil";
      s.textContent = ".k-module{margin-top:14px;background:#fff;border:1px solid #e5d9db;border-radius:14px;padding:12px 14px}.k-module h2{margin:0 0 8px;font-size:1rem}" +
        ".k-module ul{list-style:none;margin:0;padding:0;display:grid;gap:5px}.k-module li{display:grid;grid-template-columns:minmax(0,1fr) 90px auto;gap:10px;align-items:center;font-size:.95rem}" +
        ".k-module .balken{height:9px;border-radius:99px;background:#eee3e5;overflow:hidden}.k-module .balken i{display:block;height:100%;background:#15803d}.k-module li.wenig .balken i{background:#b3261e}.k-module li.mittel .balken i{background:#c27a00}" +
        ".k-module b{white-space:nowrap}.k-module p{margin:8px 0 0;font-size:.85rem;color:#6b5b5f}" +
        ".k-modul,.k-transfer{display:inline-block;margin-left:8px;padding:2px 9px;border-radius:99px;font-size:.78rem;font-weight:700;background:#e7f3fc;color:#0b5d98}.k-transfer{background:#fef3c7;color:#92400e}" +
        "@media print{.k-module{break-inside:avoid;padding:6pt 8pt}.k-module li{font-size:9pt}.k-modul,.k-transfer{border:1px solid #999;background:none;color:#000}}";
      document.head.appendChild(s);
    }
    return `<div class="k-module"><h2>Punkte je Modul</h2><ul>` + reihe.map(m => {
      const x = map[m], pct = x.max ? Math.round(x.p / x.max * 100) : 0;
      return `<li class="${pct < 40 ? "wenig" : pct < 70 ? "mittel" : ""}"><span>${esc(m)}</span><span class="balken"><i style="width:${pct}%"></i></span><b>${zahl(x.p)} / ${zahl(x.max)}</b></li>`;
    }).join("") + `</ul><p>Bei wenigen Punkten lohnt es sich, dieses Modul noch einmal durchzuarbeiten.</p></div>`;
  }
  /* ---------- NT 8: Abbildungen, Lernschritte, Zusammenfassung ----------
     Bild, Messwerttabelle, Diagramm und Versuche einer Aufgabe zeichnet 8M/NT/darstellung.js (mit labor.js) – geladen
     wird es erst, wenn eine Probe so etwas enthält. Versuche stehen hier als Bild des Endzustands mit Beschreibung. */
  const nt8Noetig = liste => liste.some(k => (k.aufgaben || []).some(a => a.tabelle || a.diagramm || a.labor || a.zustand || a.image));
  function nt8Laden() {
    return new Promise(fertig => {
      if (window.NT8Darstellung) return fertig();
      const css = document.createElement("link"); css.rel = "stylesheet"; css.href = "8M/NT/nt8.css"; document.head.appendChild(css);
      const dateien = ["8M/NT/labor.js", "8M/NT/darstellung.js"];
      (function naechste(i) { if (i >= dateien.length) return fertig(); const s = document.createElement("script"); s.src = dateien[i]; s.onload = s.onerror = () => naechste(i + 1); document.head.appendChild(s); })(0);
    });
  }
  function nt8Fuellen(liste) {
    if (!window.NT8Darstellung) return;
    document.querySelectorAll("#blatt [data-k-labor]").forEach(el => {
      const [b, nr] = el.dataset.kLabor.split("|"), a = ((liste[b] || {}).aufgaben || []).find(x => String(x.nr) === nr);
      if (a && !el.firstChild) window.NT8Darstellung.labor(el, a, { statisch: true });
    });
  }
  const darstellung = (a, b) => (window.NT8Darstellung ? window.NT8Darstellung.html(a, "8M/NT/") : "") + (a.labor ? `<div data-k-labor="${b}|${esc(a.nr)}"></div>` : "");
  // „Dein nächster Lernschritt“: Hinweis aus der Korrektur, sonst das Modul, das die Aufgabe geübt hat
  const lernschritt = a => (a.tipp ? esc(a.tipp) : a.points < a.max && a.modul ? `Wiederhole im Modul „${esc(a.modul)}“ die passende Station${a.transfer ? " und übe Transferaufgaben in der Probe-Vorbereitung" : ""}.` : "");
  // Am Ende: Was schon gut klappt und was noch geübt werden sollte (nach den Punkten je Modul; ab 70 % „gut“)
  function fazit(aufgaben) {
    const map = {}, reihe = [];
    aufgaben.forEach(a => { [a.modul, a.transfer ? "Transfer: Wissen auf Neues anwenden" : ""].forEach(n => { if (!n) return; if (!map[n]) { map[n] = { p: 0, max: 0 }; reihe.push(n); } map[n].p += Number(a.points) || 0; map[n].max += Number(a.max) || 0; }); });
    if (reihe.length < 2) return "";
    const gut = reihe.filter(n => map[n].max && map[n].p / map[n].max >= .7), ueben = reihe.filter(n => map[n].max && map[n].p / map[n].max < .7);
    const liste = l => l.length ? "<ul>" + l.map(n => `<li>${esc(n)}</li>`).join("") + "</ul>" : "<p>–</p>";
    return `<div class="k-fazit" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-top:14px">
      <div style="background:#f0fbf4;border:1.5px solid #86d3a4;border-radius:14px;padding:10px 14px"><b>DAS KANNST DU SCHON GUT</b>${liste(gut)}</div>
      <div style="background:#fffbeb;border:1.5px solid #fde68a;border-radius:14px;padding:10px 14px"><b>DAS SOLLTEST DU NOCH ÜBEN</b>${liste(ueben)}</div></div>`;
  }
  function blatt(k, b) {
    const nt8 = k.modul === "nt8";
    return `<div class="kopfkarte"><div><div class="eyebrow">Korrigierte Probe · ${esc(fach(k.fach))}${k.variante === "B" ? " · Nachschreibprobe" : ""}</div><h1>${esc(k.titel)}</h1>
        <dl><dt>Klasse</dt><dd>${esc(k.klasse || "")}</dd><dt>Geschrieben am</dt><dd>${datum(k.datum)}</dd>${k.freigegebenAm ? `<dt>Zurückbekommen am</dt><dd>${datum(k.freigegebenAm)}</dd>` : ""}
        ${k.code ? `<dt>Schülerkennung</dt><dd>Code ${esc(k.code)}</dd>` : ""}${k.name ? `<dt>Name</dt><dd>${esc(k.name)}</dd>` : `<dt class="nur-druck">Name</dt><dd class="nur-druck">________________________________</dd>`}</dl></div>
      <div class="ergebnis"><span>Punkte</span><strong>${zahl(k.score)} / ${zahl(k.total)}</strong><span>${esc(k.percent)} %</span>${k.grade !== "" && k.grade != null ? `<span class="note">Note ${esc(k.grade)}</span>` : ""}</div></div>` +
      (k.kommentar ? `<div class="k-lehrer" style="margin-top:14px"><div class="k-teil" style="margin-top:0"><span>Kommentar deiner Lehrkraft</span><p style="white-space:pre-line;margin:0">${esc(k.kommentar)}</p></div></div>` : "") +
      jeModul(k.aufgaben) +
      `<div id="k-aufgaben" style="margin-top:14px">` + (kurzeAufgaben(k.aufgaben) ? tabelle(k.aufgaben) : k.aufgaben.length ? k.aufgaben.map(a => {
        const punkte = `<span class="k-punkte${a.points >= a.max ? " voll" : a.points === 0 ? " null" : ""}">${zahl(a.points)} / ${zahl(a.max)}</span>`;
        const korrektur = (a.comment ? `<p>${esc(a.comment)}</p>` : "") + (a.loesung ? `<p>${a.beispiel ? "Beispiel für eine richtige Antwort: " : "Richtig ist: "}${esc(a.loesung)}</p>` : "") ||
          (a.points >= a.max ? "<p>Richtig.</p>" : "");
        return `<section class="k-aufgabe"><div class="k-kopf"><b>Aufgabe ${esc(a.nr)}${herkunft(a)}</b>${punkte}</div>` +
          teil("Aufgabe", (a.prompt ? `<p>${esc(a.prompt)}</p>` : "") + (nt8 ? darstellung(a, b || 0) : "")) +
          teil("Deine Antwort", `<div class="k-antwort${a.given ? "" : " leer"}">${a.given ? esc(a.given) : "Keine Antwort."}</div>`) +
          teil("Korrektur", korrektur) + (nt8 ? teil("Dein nächster Lernschritt", lernschritt(a) ? `<p>${lernschritt(a)}</p>` : "") : "") + "</section>";
      }).join("") : `<p class="notice">Für diese Probe gibt es keine Einzelauflistung der Antworten.</p>`) + "</div>" +
      (nt8 ? fazit(k.aufgaben) : "") +
      // Vokabeltest beim Kind (nicht in der Elternansicht der Lehrkraft): Hinweis auf die Merkliste
      (k.modul === "vokabeltest" && !druck && k.aufgaben.some(a => a.points < a.max)
        ? `<p class="notice kein-druck" id="k-merkliste" style="margin-top:14px">📕 Die Wörter, die du falsch hattest, stehen jetzt in deiner <b>Merkliste</b> – zusammen mit denen aus deinen anderen Vokabeltests. <a class="btn klein" href="merkliste.html" style="margin-left:6px">Merkliste üben</a></p>` : "") +
      `<p class="k-fuss" style="margin-top:12px;font-size:.85rem;color:var(--muted)">Die Probe wurde am Tablet geschrieben. Freie Antworten wurden mit KI-Unterstützung bewertet, maßgeblich ist die Bewertung der Lehrkraft.</p>` +
      `<div class="unterschrift"><div>Datum, Unterschrift einer/eines Erziehungsberechtigten</div><div>Das nehme ich mir für das nächste Mal vor:</div></div>`;
  }
  async function zeigen() {
    const k = (await post("ansehen", { code, modul: MODUL, id: ID })).korrektur;
    $("anmelden").hidden = true; $("liste").hidden = true;
    if (nt8Noetig([k])) await nt8Laden();
    $("blatt").innerHTML = blatt(k, 0);
    nt8Fuellen([k]);
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

  // Elternansicht für die Lehrkraft: Die Lehrerseite einer Probe öffnet diese Seite mit „#druck“ und übergibt die
  // Abgaben über window.GrumiDruck (js/probe-rueckgabe-lehrer.js) – nichts davon steht in der Adresse, nichts wird vom
  // Server geholt. Je Kind ein Blatt (mit Namen, wenn die Lehrkraft die Namensliste hat), im Druck je Blatt eine Seite.
  let druck = null;
  if (location.hash === "#druck") { try { druck = window.opener && window.opener.GrumiDruck; } catch (_e) {} }
  if (Array.isArray(druck) && druck.length) {
    $("anmelden").hidden = true; $("liste").hidden = true;
    const zeichneDruck = () => { $("blatt").innerHTML = druck.map(blatt).join('<div style="break-after:page;page-break-after:always;height:0"></div><hr class="kein-druck" style="margin:28px 0;border:0;border-top:2px dashed #d9c9cc">'); nt8Fuellen(druck); };
    zeichneDruck();
    if (nt8Noetig(druck)) nt8Laden().then(zeichneDruck);
    document.querySelectorAll(".druck-leiste a").forEach(a => { a.style.display = "none"; });   // Wege für Kinder
    $("drucken").textContent = druck.length === 1 ? "🖨 Elternansicht drucken" : "🖨 Alle " + druck.length + " Blätter drucken";
    $("korrektur").hidden = false;
    document.title = "Elternansicht: " + druck[0].titel + " | GRUMI";
    return;
  }

  code = gemerkterCode();
  if (code) start(); else $("anmelden").hidden = false;
})();
