/* Meine Merkliste (merkliste.html im Hauptordner): alle Wörter, die ein Kind in einem Vokabeltest falsch hatte – aus
 * allen Units und allen Tests. Die Liste entsteht auf dem Server aus den Abgaben, sobald die Lehrkraft einen Test
 * zurückgegeben hat (vorher sieht das Kind seine Fehler nicht). Hier übt das Kind die Wörter: zweimal hintereinander
 * richtig geschrieben = gelernt; ein Fehler setzt die Reihe zurück. Der Übungsstand liegt beim Code auf dem Server
 * und ist deshalb auf jedem Gerät da.
 * Zugang nur mit dem Code des Kindes; ist es in diesem Tab schon angemeldet, muss es ihn nicht noch einmal eintippen.
 * Server: /api/vokabeltest/merkliste | …/pruefen | …/zurueck (vokabeltest.js). Aussehen: 7M/Deutsch/probe.css.
 */
(function () {
  "use strict";
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  let code = "", klasse = "", AB = 2, W = [];
  // Üben: Reihe der Wörter dieser Runde, das aktuelle Wort, die letzte Rückmeldung
  let runde = null;

  const datum = iso => { const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(String(iso || "")); return m ? m[3] + "." + m[2] + "." + m[1] : ""; };
  // „Süden; Süd-“ zeigt die Testseite als „Süden / Süd-“
  const frage = w => String(w.frage || "").replace(/\s*;\s*/g, " / ");
  const ziel = w => (w.richtung === "en-de" ? "auf Deutsch" : "auf Englisch");
  function gemerkterCode() {
    try { const t = JSON.parse(sessionStorage.getItem("grumi-code-tab") || "null"); if (t && /^\d{3}$/.test(t.code) && Date.now() - t.zeit < 600000) return t.code; } catch (_e) {}
    return "";
  }
  function status(text, art) { const s = $("status"); s.textContent = text; s.className = "notice" + (art ? " " + art : ""); s.hidden = !text; }
  async function post(route, body) {
    const ctl = new AbortController(), frist = setTimeout(() => ctl.abort(), 75000);
    try {
      const res = await fetch(API + "/api/vokabeltest/merkliste" + route, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(Object.assign({ code }, body)), signal: ctl.signal });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw Object.assign(new Error(data.message || (res.status === 404 && !data.error ? "Der Server kennt die Merkliste noch nicht. Versuche es später noch einmal." : "Das hat nicht geklappt.")), { code: data.error, status: res.status });
      return data;
    } catch (e) {
      if (e.name === "AbortError" || e instanceof TypeError) throw new Error("Der Server antwortet gerade nicht. Versuche es in einer Minute noch einmal.");
      throw e;
    } finally { clearTimeout(frist); }
  }
  const punkte = w => `<span class="m-punkte" title="${w.richtig} von ${AB}-mal richtig">${Array.from({ length: AB }, (_x, i) => `<i class="${i < w.richtig ? "an" : ""}"></i>`).join("")}</span>`;

  function zeile(w, gelernt) {
    return `<tr><td>${esc(frage(w))}${w.hinweis ? `<small>${esc(w.hinweis)}</small>` : ""}</td>` +
      `<td class="en">${esc(w.loesung)}${w.auch.length ? `<small>auch: ${esc(w.auch.join(" · "))}</small>` : ""}</td>` +
      `<td class="falsch">${w.gegeben ? esc(w.gegeben) : "<i>nichts</i>"}</td><td class="wo">${esc(w.test)}<small>${esc(datum(w.datum))}</small></td>` +
      `<td class="m-stand">${gelernt ? `<button class="btn klein secondary kein-druck" type="button" data-zurueck="${esc(w.id)}">wieder üben</button>` : punkte(w)}</td></tr>`;
  }
  function tabelle(liste, gelernt) {
    return `<table class="m-tab"><thead><tr><th>Gefragt</th><th>Richtig ist</th><th>Im Test geschrieben</th><th class="wo">Test</th><th></th></tr></thead><tbody>${liste.map(w => zeile(w, gelernt)).join("")}</tbody></table>`;
  }

  function zeichnen() {
    const offen = W.filter(w => !w.gelernt), fertig = W.filter(w => w.gelernt), anteil = W.length ? Math.round(fertig.length / W.length * 100) : 0;
    let h = `<div class="eyebrow">Klasse ${esc(klasse)} · Englisch</div><h1>Meine Merkliste</h1>`;
    if (!W.length) {
      h += `<p class="notice gut">🎉 Deine Merkliste ist leer.</p><p>Hier sammeln sich alle Wörter, die du in einem Vokabeltest falsch hattest – aus allen Units. Sobald deine Lehrkraft einen Test zurückgibt, stehen die Wörter hier und du kannst sie üben.</p>` +
        `<div class="m-leiste"><a class="btn secondary" href="korrektur.html">Zurückbekommene Proben</a><a class="btn secondary" href="index.html">Zur Startseite</a></div>`;
      $("merk").innerHTML = h; return;
    }
    h += `<p class="intro kein-druck">Hier stehen alle Wörter, die du in einem Vokabeltest falsch hattest – aus allen Units. Übe sie: Schreibst du ein Wort <b>${AB}-mal hintereinander richtig</b>, ist es gelernt.</p>` +
      `<div class="m-zahlen"><div class="m-zahl offen"><b>${offen.length}</b><span>noch üben</span></div><div class="m-zahl gut"><b>${fertig.length}</b><span>gelernt</span></div><div class="m-zahl"><b>${W.length}</b><span>Wörter insgesamt</span></div></div>` +
      `<div class="m-balken" role="img" aria-label="${anteil} Prozent gelernt"><i style="width:${anteil}%"></i></div>`;
    if (runde) h += karte();
    h += `<div class="m-leiste kein-druck">` +
      (runde ? `<button class="btn secondary" type="button" id="m-ende">Üben beenden</button>`
        : offen.length ? `<button class="btn" type="button" id="m-start">✏️ Üben (${offen.length} ${offen.length === 1 ? "Wort" : "Wörter"})</button>`
          : `<span class="notice gut" style="margin:0">🎉 Alle Wörter gelernt!</span>`) +
      `<button class="btn secondary" type="button" id="m-druck">🖨 Liste drucken</button><a class="btn secondary" href="korrektur.html">Zurückbekommene Proben</a><a class="btn secondary" href="index.html">Zur Startseite</a></div>`;
    // Während des Übens steht die Liste (mit den Lösungen) nicht auf dem Bildschirm
    if (!runde) {
      if (offen.length) h += `<h2 class="m-h2">Noch üben (${offen.length})</h2>` + tabelle(offen, false);
      if (fertig.length) h += `<details class="m-gelernt"${offen.length ? "" : " open"}><summary>✓ Gelernt (${fertig.length})</summary>${tabelle(fertig, true)}</details>`;
    }
    $("merk").innerHTML = h;
    verdrahten();
  }

  function karte() {
    const w = runde.wort, r = runde.rueck;
    if (!w) {
      return `<div class="m-karte"><div class="m-nr">Runde geschafft</div><div class="m-frage">${runde.gelernt ? "🎉 " + runde.gelernt + (runde.gelernt === 1 ? " Wort gelernt" : " Wörter gelernt") : "Weiter so!"}</div>` +
        `<p class="m-hinweis">${W.some(x => !x.gelernt) ? "Die übrigen Wörter kommen in der nächsten Runde noch einmal." : "Deine Merkliste ist abgearbeitet."}</p>` +
        (W.some(x => !x.gelernt) ? `<button class="btn" type="button" id="m-nochmal">Noch eine Runde</button>` : "") + `</div>`;
    }
    return `<div class="m-karte"><div class="m-nr">Wort ${runde.nr} von ${runde.anzahl} · ${ziel(w)} ${punkte(w)}</div>` +
      `<div class="m-frage">${esc(frage(w))}</div>${w.hinweis ? `<p class="m-hinweis">${esc(w.hinweis)}</p>` : `<p class="m-hinweis">Schreib das Wort ${ziel(w)}.</p>`}` +
      `<form class="m-eingabe" id="m-form"><input id="m-antwort" type="text" autocomplete="off" autocapitalize="none" autocorrect="off" spellcheck="false" aria-label="Deine Antwort" value="${r ? esc(r.antwort) : ""}"${r ? " readonly" : ""}>` +
      (r ? `<button class="btn" type="submit" id="m-weiter">Weiter</button>` : `<button class="btn" type="submit">Prüfen</button>`) + `</form>` +
      (r ? (r.richtig
        ? `<div class="m-rueck gut">✓ Richtig!${r.tippfehler ? `<small>Fast – genau geschrieben heißt es: ${esc(w.loesung)}</small>` : ""}<small>${w.gelernt ? "Gelernt – das Wort wandert zu deinen gelernten Wörtern." : "Noch " + (AB - w.richtig) + "-mal richtig, dann ist es gelernt."}</small></div>`
        : `<div class="m-rueck nein">✗ Noch nicht. Richtig ist:<span class="m-loesung">${esc(w.loesung)}</span>${w.auch.length ? `<small>auch richtig: ${esc(w.auch.join(" · "))}</small>` : ""}${r.hinweis ? `<small>${esc(r.hinweis)}</small>` : ""}<small>Das Wort kommt in dieser Runde noch einmal.</small></div>`) : "") +
      `<p id="m-meldung" class="m-hinweis" role="status" style="margin:8px 0 0"></p></div>`;
  }

  function naechstes() {
    runde.rueck = null;
    runde.wort = runde.reihe.shift() || null;
    if (runde.wort) runde.nr++;
    zeichnen();
    const f = $("m-antwort"); if (f) f.focus();
  }
  function starten() {
    const offen = W.filter(w => !w.gelernt);
    runde = { reihe: offen.slice(), anzahl: offen.length, nr: 0, gelernt: 0, wort: null, rueck: null };
    naechstes();
  }
  async function pruefen(antwort) {
    const w = runde.wort, knopf = document.querySelector("#m-form button");
    if (knopf) knopf.disabled = true;
    try {
      const d = await post("/pruefen", { id: w.id, antwort });
      Object.assign(w, d.wort);
      runde.rueck = { antwort, richtig: d.richtig, tippfehler: d.tippfehler, hinweis: d.hinweis };
      if (w.gelernt) runde.gelernt++;
      // falsch: Das Wort kommt am Ende der Runde noch einmal
      if (!d.richtig) { runde.reihe.push(w); runde.anzahl++; }
      zeichnen();
      const weiter = $("m-weiter"); if (weiter) weiter.focus();
    } catch (e) {
      if (knopf) knopf.disabled = false;
      const m = $("m-meldung"); if (m) m.textContent = e.message;
    }
  }
  function verdrahten() {
    const an = (id, was, fn) => { const el = $(id); if (el) el.addEventListener(was, fn); };
    an("m-start", "click", starten);
    an("m-nochmal", "click", starten);
    an("m-ende", "click", () => { runde = null; zeichnen(); });
    an("m-druck", "click", () => { if (runde) { runde = null; zeichnen(); } const d = document.querySelector("details.m-gelernt"); if (d) d.open = true; window.print(); });
    an("m-form", "submit", e => {
      e.preventDefault();
      if (runde.rueck) return naechstes();
      const antwort = $("m-antwort").value.trim();
      if (!antwort) { $("m-meldung").textContent = "Schreib erst eine Antwort – auch ein Versuch hilft."; return; }
      pruefen(antwort);
    });
    document.querySelectorAll("[data-zurueck]").forEach(b => b.addEventListener("click", async () => {
      b.disabled = true;
      try { const d = await post("/zurueck", { id: b.getAttribute("data-zurueck") }); const w = W.find(x => x.id === d.wort.id); if (w) Object.assign(w, d.wort); zeichnen(); }
      catch (e) { b.disabled = false; status(e.message, "bad"); }
    }));
  }

  async function start() {
    status("Einen Moment …");
    try {
      const d = await post("", {});
      klasse = d.klasse || ""; AB = d.gelerntAb || 2; W = d.woerter || [];
      $("anmelden").hidden = true; $("merk").hidden = false;
      zeichnen(); status("");
    } catch (e) { $("anmelden").hidden = false; $("merk").hidden = true; status(e.message, "bad"); }
  }

  $("code-form").addEventListener("submit", e => { e.preventDefault(); code = $("code").value.trim(); start(); });
  code = gemerkterCode();
  if (code) start(); else $("anmelden").hidden = false;
})();
