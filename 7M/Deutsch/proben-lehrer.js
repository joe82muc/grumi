/* Deutsch 7: Proben korrigieren und zurückgeben (proben-lehrer.html) – Lehrerseite nach dem Muster von ../NT/lehrer.js.
 *
 * Ablauf: Kind gibt ab → KI schlägt vor (Stand „Korrektur zu prüfen“) → Lehrkraft prüft je Aufgabe Punkte, Korrektur
 * und „nächsten Schritt“, ändert, was nicht passt → „Bewertung bestätigen“ → „Korrigierte Probe freigeben“.
 * Erst dann sieht das Kind die Korrektur (korrektur.html). Die Liste zeigt danach, ob das Kind sie geöffnet hat.
 * Jede Änderung in einem Feld wird sofort gespeichert. Die Antwort des Kindes lässt sich hier nicht ändern.
 * Namen stehen nur in diesem Browser (Namensliste der Verwaltung), der Server kennt nur die Codes.
 *
 * Deutsch 8 (der Server meldet bei den Proben „schutz“): Fehlermarkierungen im Text setzen und ändern (Text auswählen,
 * Art antippen, Hinweis schreiben – der Text des Kindes bleibt unverändert), Planung des Kindes ansehen,
 * Bearbeitungszeit, Einstellungen des Probenmodus je Probe, laufende Bearbeitungen mit Zeitverlängerung und
 * „Zwischenstand übernehmen“.
 */
(function () {
  "use strict";
  // Jahrgang: 7 (Vorgabe) oder 8 – Deutsch 8 setzt window.DEUTSCH_NR vor diesem Skript (8/Deutsch/…html)
  // Anderes Fach mit denselben Proben (Englisch 9R): window.PROBEN_FACH = { kurz, stufe, name, api } vor diesem Skript
  const PF = window.PROBEN_FACH || null;
  const DNR = PF ? PF.stufe : window.DEUTSCH_NR || (window.GRUMI_KURS && window.GRUMI_KURS.NR) || 7, DNAME = PF ? PF.name : "Deutsch " + DNR, DAPI = PF ? PF.api : "/api/d" + DNR;
  const params = new URLSearchParams(location.search);
  const API = (params.get("api") || (location.hostname.endsWith("github.io") ? "https://englisch-9.onrender.com" : location.origin)).replace(/\/$/, "");
  const $ = id => document.getElementById(id);
  const esc = D7Lesetext.esc, zahl = D7Korrektur.zahl;
  const NAMEN = (() => { try { return JSON.parse(localStorage.getItem("lf-nt9-namen") || "{}") || {}; } catch (_e) { return {}; } })();
  const wer = r => (NAMEN[r.code] ? NAMEN[r.code] + " (Code " + r.code + ")" : "Code " + r.code);
  const zeit = iso => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleString("de-DE", {day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit"}); };
  const ART = {choice: "Ankreuzen", match: "Zuordnen", order: "Reihenfolge", felder: "Kurze Eingaben", komma: "Kommas setzen", zeile: "Zeilenangabe", offen: "Offene Antwort", schreiben: "Längerer Text"};
  const QUELLE = {ki: "✨ KI-Vorschlag", lehrkraft: "✔ von dir bewertet", schluessel: "Lösungsschlüssel", stichworte: "⚠ vorläufig (Stichwörter) – KI fehlt", offen: "⚠ noch nicht bewertet – KI fehlt", leer: "keine Antwort"};
  let password = "", tests = [], rows = [], offenId = "", proben = {}, takt = null, kette = Promise.resolve();

  async function request(route, body = {}) {
    const response = await fetch(API + DAPI + "/proben/teacher/" + route, {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify({...body, password})});
    if (route === "export" && response.ok) return response.blob();
    const data = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(data.error === "bad_password" ? "Passwort nicht richtig." : data.message || data.error || "Serverfehler");
    return data;
  }
  // Änderungen der Reihe nach senden (ein Feld verlassen und gleich „Bestätigen“ tippen: erst speichern, dann bestätigen)
  const nacheinander = fn => (kette = kette.then(fn, fn));
  const status = (text, art) => { $("teacher-status").textContent = text; $("teacher-status").className = "notice" + (art ? " " + art : ""); };
  const zeile = id => rows.find(r => r.id === id);
  function ersetze(row) { const i = rows.findIndex(r => r.id === row.id); if (i >= 0) rows[i] = row; else rows.push(row); }
  const klasseVon = t => (t.zug === "M" ? "M" : "R") + DNR;
  const gefiltert = () => rows.filter(r => (!$("filter-klasse").value || r.className === $("filter-klasse").value) && (!$("filter-stand").value || r.status === $("filter-stand").value));

  /* ---------- Laden und Liste ---------- */
  async function load(leise) {
    try {
      const nr = Number($("filter-nr").value) || 0;
      const [list, results] = await Promise.all([fetch(API + DAPI + "/proben/list?alle=1").then(r => r.json()), request("results", {nr})]);
      tests = list.tests; rows = results.submissions;
      $("teacher-content").hidden = false; $("login").hidden = true;
      if (!$("filter-nr").options.length) {
        const nummern = [...new Set(tests.map(t => t.nr))].sort((a, b) => a - b);
        $("filter-nr").innerHTML = `<option value="">alle Proben</option>` + nummern.map(n => `<option value="${n}">Probe ${n}: ${esc((tests.find(t => t.nr === n) || {}).kurz || "")}</option>`).join("");
        if (params.get("nr")) { $("filter-nr").value = params.get("nr"); return load(leise); }
      }
      const klassen = [...new Set(rows.map(r => r.className))].sort(), kl = $("filter-klasse").value;
      $("filter-klasse").innerHTML = `<option value="">alle</option>` + klassen.map(k => `<option>${esc(k)}</option>`).join(""); $("filter-klasse").value = klassen.includes(kl) ? kl : "";
      zeichneFreischalten(); zeichneListe(); ladeSitzungen();
      if (offenId && !leise) zeichneAbgabe();
      if (!leise) status(rows.length + (rows.length === 1 ? " Abgabe" : " Abgaben") + " geladen.");
      // Solange die KI noch korrigiert, alle 8 Sekunden nachsehen
      clearTimeout(takt);
      if (rows.some(r => r.status === "eingegangen")) takt = setTimeout(async () => { const vorher = (zeile(offenId) || {}).status; await load(true); if (offenId && vorher === "eingegangen" && (zeile(offenId) || {}).status !== "eingegangen") zeichneAbgabe(); }, 8000);
    } catch (err) { status(err.message, "bad"); }
  }
  function zeichneFreischalten() {
    const nr = Number($("filter-nr").value) || 0;
    const liste = tests.filter(t => !nr || t.nr === nr).sort((a, b) => a.nr - b.nr || a.zug.localeCompare(b.zug) || a.variante.localeCompare(b.variante));
    $("unlock-list").innerHTML = liste.length ? `<table class="l-uebersicht"><thead><tr><th>Probe</th><th>Klasse</th><th>Variante</th><th>Umfang</th><th>Für die Kinder</th><th></th></tr></thead><tbody>${liste.map(t => `<tr style="cursor:default">
      <td><b>${esc(t.title)}</b></td><td>${klasseVon(t)}</td><td>${t.variante}${t.variante === "B" ? " · Nachschreiber" : ""}</td><td>${t.itemCount} Aufgaben · ${t.maxPoints} Punkte · ${t.minutes} min</td>
      <td><label style="display:inline-flex;gap:8px;align-items:center;font-weight:700"><input type="checkbox" data-unlock="${esc(t.id)}" ${t.unlocked ? "checked" : ""}> <span class="stand ${t.unlocked ? "offen" : "zu"}">${t.unlocked ? "offen" : "gesperrt"}</span></label></td>
      <td><button class="btn klein secondary" type="button" data-ansehen="${esc(t.id)}">👁 Probe mit Lösungen</button></td></tr>`).join("")}</tbody></table>
      <div class="l-einfuegen">${[...new Set(liste.map(t => t.nr))].map(n => { const wert = (liste.find(t => t.nr === n) || {}).einfuegen || "sperren";
        return `<label>Probe ${n} – Text einfügen: <select data-einfuegen="${n}"><option value="sperren"${wert === "sperren" ? " selected" : ""}>gesperrt</option><option value="protokollieren"${wert === "protokollieren" ? " selected" : ""}>erlaubt, wird protokolliert</option></select></label>`; }).join("")}
        <span class="l-quelle">Im Probenmodus hält GRUMI fest, wann ein Kind die Seite verlässt und wie lange. Das steht bei jeder Abgabe unter „Probenüberwachung“.</span></div>
      ${schutzZeilen(liste)}
      <p class="l-quelle" style="margin-top:6px">Eine freigeschaltete Probe schließt sich nach drei Stunden von selbst. Variante B sehen die Kinder erst, wenn sie offen ist. Wer Variante A abgegeben hat, kann Variante B nicht mehr beginnen.</p>`
      : `<p class="notice">Für diese Auswahl gibt es noch keine Probe.</p>`;
  }
  function standText(r) {
    // 7 Tage nach der Freigabe verschwindet die Korrektur beim Kind von selbst (r.vorbei) – Abgabe und Note bleiben
    if (r.status === "freigegeben") return `<span class="stand freigegeben">FREIGEGEBEN</span> <small>${r.geoeffnetAm ? "vom Schüler geöffnet (" + zeit(r.geoeffnetAm) + ")" : r.vorbei ? "nicht geöffnet" : "noch nicht geöffnet"}${
      r.vorbei ? " · beim Kind nicht mehr zu sehen (7 Tage um)" : r.sichtbarBis ? " · zu sehen bis " + r.sichtbarBis.slice(8, 10) + "." + r.sichtbarBis.slice(5, 7) + "." : ""}</small>`;
    if (r.status === "bestaetigt") return `<span class="stand bestaetigt">bestätigt</span> <small>noch nicht freigegeben</small>`;
    if (r.status === "eingegangen") return `<span class="stand eingegangen">KI korrigiert gerade …</span>`;
    return `<span class="stand zu-pruefen">KORREKTUR ZU PRÜFEN</span>`;
  }
  function zeichneListe() {
    const liste = gefiltert();
    const frei = liste.filter(r => r.status === "bestaetigt").length;
    $("alle-frei").disabled = !frei; $("alle-frei").textContent = frei ? `📤 ${frei} bestätigte ${frei === 1 ? "Probe" : "Proben"} freigeben` : "📤 Alle bestätigten Proben freigeben";
    $("zaehlung").textContent = liste.length ? `${liste.filter(r => r.status === "zu-pruefen").length} zu prüfen · ${frei} bestätigt · ${liste.filter(r => r.status === "freigegeben").length} freigegeben, davon ${liste.filter(r => r.geoeffnetAm).length} geöffnet` : "";
    $("results").innerHTML = liste.length ? `<table class="l-uebersicht"><thead><tr><th>Kind</th><th>Klasse</th><th>Probe</th><th>Punkte</th><th>Note</th><th>Stand</th></tr></thead><tbody>${liste.map(r => `<tr data-id="${r.id}" class="${r.id === offenId ? "an" : ""}">
      <td><b>${esc(wer(r))}</b>${r.lrs ? ' <span class="pill" title="Notenschutz ist beim Code eingetragen">🛡 LRS</span>' : ""}${r.verlassen ? ` <small>${r.verlassen}× verlassen</small>` : ""}${r.protokoll && (r.protokoll.einfuegen || []).length ? ` <small>· ${r.protokoll.einfuegen.length}× einfügen</small>` : ""}</td>
      <td>${esc(r.className)}</td><td>${esc(r.testTitle)}${r.variante === "B" ? ' <span class="pill b">B</span>' : ""}</td>
      <td>${zahl(r.score)} / ${zahl(r.total)}</td><td>${r.grade === "" ? "–" : r.grade}</td><td>${standText(r)}</td></tr>`).join("")}</tbody></table>` : `<p>Noch keine Abgaben.</p>`;
  }

  /* ---------- Eine Abgabe korrigieren ---------- */
  function punktFeld(wert, max, attr) { return `<input type="number" inputmode="decimal" min="0" max="${max}" step="0.5" value="${wert}" ${attr} aria-label="Punkte (höchstens ${max})"> <span>/ ${zahl(max)}</span>`; }
  const marke = t => (t.rs ? ' <span class="pill" title="zählt als Rechtschreibung">RS</span>' : "") + (t.zs ? ' <span class="pill" title="zählt als Zeichensetzung">ZS</span>' : "");
  function antwortListe(d) {
    if (d.felder) return `<ul class="l-horizont">${d.felder.map((f, i) => `<li><div>${esc(f.label)}: <b>${f.given ? esc(f.given) : "–"}</b>${marke(f)}${f.pruefen ? ' <span class="stand zu-pruefen">fast richtig – bitte ansehen</span>' : ""}<small>Lösung: ${esc(f.expected)}</small></div><div>${punktFeld(f.punkte, f.max, `data-teil="${i}"`)}</div></li>`).join("")}</ul>`;
    return `<ul class="k-zeilen">${d.given.map((g, i) => `<li class="${g === d.expected[i] ? "r" : "f"}"><span>${esc((d.labels || [])[i] || "")}</span><b>${g ? esc(g) : "–"}</b><small>${g === d.expected[i] ? "✓" : "Lösung: " + esc(d.expected[i])}</small></li>`).join("")}</ul>`;
  }
  function aufgabe(d) {
    const offene = d.type === "offen" || d.type === "schreiben", w = d.gewertet || {points: d.points, max: d.maxPoints};
    const kopf = `<div class="k-kopf"><b>Aufgabe ${d.nr} · ${ART[d.type] || d.type}${marke(d)}</b><span><span class="l-quelle" data-quelle>${QUELLE[d.source] || d.source}</span> <span class="k-punkte" data-punkte>${w.max ? zahl(w.points) + " / " + zahl(w.max) : "nicht gewertet"}</span></span></div><p style="white-space:pre-line"><b>${esc(d.prompt)}</b></p>${d.vorgabe ? `<div class="vorgabe">${esc(d.vorgabe)}</div>` : ""}${d.material ? `<div class="material">${esc(d.material)}</div>` : ""}`;
    const texte = `<label class="t">Korrektur (sieht das Kind)</label><textarea data-feld="comment" rows="2">${esc(d.comment || "")}</textarea>
      <label class="t">Nächster Schritt für das Kind</label><textarea data-feld="hinweis" rows="2">${esc(d.hinweis || "")}</textarea>`;
    if (!offene) {
      const inhalt = d.felder || Array.isArray(d.given) ? antwortListe(d) : `<div class="k-antwort${d.given ? "" : " leer"}">${d.given ? esc(d.given) : "Keine Antwort."}</div><p class="l-quelle" style="margin:4px 0 0">Lösung: ${esc(d.expected)}</p>`;
      return `<div class="l-aufgabe${d.needsReview ? " pruefen" : ""}" data-nr="${d.nr}">${kopf}${inhalt}
        <details${d.needsReview || d.source === "lehrkraft" ? " open" : ""}><summary class="l-quelle" style="cursor:pointer;margin-top:8px">Punkte, Korrektur oder Hinweis ändern</summary>
        ${d.felder ? "" : `<p style="margin:8px 0 0">Punkte: ${punktFeld(d.points, d.maxPoints, "data-points")}</p>`}${texte}</details></div>`;
    }
    const lang = d.type === "schreiben";
    return `<div class="l-aufgabe${d.needsReview ? " pruefen" : ""}" data-nr="${d.nr}">${kopf}<div class="l-zwei"><div>
        <label class="t">${lang ? "Originaltext des Kindes" + (d.woerter ? " (" + d.woerter + " Wörter)" : "") : "Antwort des Kindes (Original)"}</label>
        ${markenBox(d)}${planBox(d)}
        ${d.beispiel ? `<p class="l-quelle" style="margin:6px 0 0">Beispiellösung: ${esc(d.beispiel)}</p>` : ""}
        ${d.kategorie || (d.kategorien || []).length ? `<p class="l-quelle" style="margin:6px 0 0">Fehlerschwerpunkt: ${esc(d.kategorie || d.kategorien.join(", "))}</p>` : ""}
      </div><div>
        <label class="t">${lang ? "Bewertungsraster" : "Erwartungshorizont"}</label>
        <ul class="l-horizont">${d.kriterien.map((k, i) => `<li><div><b>${esc(k.text)}</b>${marke(k)}<small>${esc((d.horizont && d.horizont[i] && d.horizont[i].erwartet) || "")}</small>
          ${lang ? `<textarea data-begr="${i}" rows="1" placeholder="kurze Begründung für das Kind">${esc((d.begruendung || [])[i] || "")}</textarea>` : ""}</div><div>${punktFeld(k.punkte, k.max, `data-teil="${i}"`)}</div></li>`).join("")}</ul>
        ${lang ? `<label class="t">Das ist gelungen (je Zeile ein Punkt)</label><textarea data-liste="gelungen" rows="3">${esc((d.gelungen || []).join("\n"))}</textarea>
          <label class="t">Daran arbeiten (höchstens drei, je Zeile ein Punkt)</label><textarea data-liste="arbeiten" rows="3">${esc((d.arbeiten || []).join("\n"))}</textarea>` : ""}
        ${texte}
        <div class="l-knoepfe"><button class="btn klein secondary" type="button" data-neu="${d.nr}">↻ KI neu bewerten</button>${d.lehrer && d.ki ? `<button class="btn klein secondary" type="button" data-zurueck="${d.nr}">KI-Vorschlag wiederherstellen</button>` : ""}<span class="l-quelle" data-gespeichert></span></div>
      </div></div></div>`;
  }
  const uhr = iso => { const d = new Date(iso); return isNaN(d) ? "" : d.toLocaleTimeString("de-DE", {hour: "2-digit", minute: "2-digit", second: "2-digit"}); };
  const dauer = sek => { const m = Math.floor(sek / 60), s = sek % 60; return (m ? m + (m === 1 ? " Minute" : " Minuten") : "") + (m && s ? " " : "") + (s || !m ? s + (s === 1 ? " Sekunde" : " Sekunden") : ""); };
  // Probenmodus: was der Browser des Kindes technisch festgehalten hat (js/probe-schutz.js) – nur Zeiten und Mengen
  function ueberwachung(r) {
    const p = r.protokoll || {}, w = p.wechsel || [], e = p.einfuegen || [], k = p.kopieren || [], s = p.spruenge || [];
    if (!w.length && !e.length && !k.length && !s.length) {
      return `<details class="l-ueberwachung"><summary>🔎 Probenüberwachung: ${r.verlassen ? r.verlassen + "× verlassen (ohne Zeitangaben)" : "nichts protokolliert"}</summary>
        <p class="l-quelle">Während dieser Probe wurde kein Wechsel, kein Einfügen und kein Kopieren festgehalten.</p></details>`;
    }
    const gesamt = w.reduce((n, x) => n + (x.sekunden || 0), 0);
    const kurz = [w.length ? w.length + (w.length === 1 ? " Wechsel" : " Wechsel") + " (" + dauer(gesamt) + ")" : "", e.length ? e.length + (e.length === 1 ? " Einfügeversuch" : " Einfügeversuche") : "",
      k.length ? k.length + "× Kopieren" : "", s.length ? s.length + (s.length === 1 ? " großer Textsprung" : " große Textsprünge") : ""].filter(Boolean).join(" · ");
    return `<details class="l-ueberwachung" open><summary>🔎 Probenüberwachung: ${kurz}</summary>
      ${w.length ? `<h4>Tab/App-Wechsel: ${w.length}</h4><ol>${w.map(x => `<li>${uhr(x.von)} – ${uhr(x.bis)} → <b>${dauer(x.sekunden || 0)}</b>${x.art === "fokus" ? " <small>(Fenster ohne Eingabefokus)</small>" : x.art === "geschlossen" ? " <small>(Seite war geschlossen oder wurde neu geladen)</small>" : ""}</li>`).join("")}</ol>
        <p>Gesamtdauer außerhalb von GRUMI: <b>${dauer(gesamt)}</b></p>` : "<h4>Tab/App-Wechsel: 0</h4>"}
      ${e.length ? `<h4>Einfügeversuche: ${e.length}</h4><ul>${e.map(x => `<li>${uhr(x.zeit)} – ${x.woerter} ${x.woerter === 1 ? "Wort" : "Wörter"} (${x.zeichen} Zeichen) · ${x.erlaubt ? "eingefügt" : "verhindert"}</li>`).join("")}</ul>` : ""}
      ${k.length ? `<h4>Kopieren / Ausschneiden: ${k.length}</h4><ul>${k.map(x => `<li>${uhr(x.zeit)} – ${x.art === "cut" ? "ausschneiden" : "kopieren"}, ${x.zeichen} Zeichen markiert · verhindert</li>`).join("")}</ul>` : ""}
      ${s.length ? `<h4>Auffällig große Texteingaben: ${s.length}</h4><ul>${s.map(x => `<li>${uhr(x.zeit)} – ${x.woerter} neue Wörter in höchstens ${x.sekunden} Sekunden (${x.vorher} → ${x.nachher} Wörter)</li>`).join("")}</ul>` : ""}
      <p class="l-quelle">Festgehalten werden nur technische Ereignisse des Browsers. Welche Seite oder App geöffnet war, lässt sich nicht erkennen; eingefügter Text wird nicht gespeichert. Nichts davon ändert Punkte oder Note – was die Vorgänge bedeuten, entscheidest du.</p></details>`;
  }
  function kopfZahlen(r) {
    return `<strong>${zahl(r.score)} / ${zahl(r.total)}</strong><span>${r.percent} %${r.grade === "" ? "" : " · Note " + r.grade}</span>` + (r.total < r.gesamtOhneSchutz ? `<span style="font-size:.8rem">gewertet: ${zahl(r.total)} von ${zahl(r.gesamtOhneSchutz)} Punkten</span>` : "");
  }
  function zeichneAbgabe() {
    const r = zeile(offenId), box = $("abgabe");
    if (!r) { box.innerHTML = ""; return; }
    const liste = gefiltert(), i = liste.findIndex(x => x.id === r.id), probe = proben[r.testId];
    box.innerHTML = `<section class="l-abgabe" data-id="${r.id}">
      <div class="l-kopf"><div><div class="eyebrow">${esc(r.testTitle)} · Variante ${r.variante}</div><h2 style="margin:2px 0">${esc(wer(r))}</h2>
        <span class="l-quelle">Klasse ${esc(r.className)} · abgegeben ${zeit(r.submittedAt)}${r.verlassen ? " · " + r.verlassen + "× die Probe verlassen" : ""}${r.nachSperre ? " · nach dem Sperren abgegeben" : ""}${zeitText(r)}</span><br><span data-stand>${standText(r)}</span></div>
        <div class="ergebnis" data-ergebnis>${kopfZahlen(r)}</div></div>
      <div class="l-schalter">${r.lrs ? "<span>🛡 <b>Notenschutz (LRS)</b> ist für diesen Code eingetragen: Rechtschreibung wird nicht gewertet.</span>" : ""}
        <label><input type="checkbox" data-ein="rsWerten" ${r.rsWerten ? "checked" : ""}> Rechtschreibung werten</label>
        <label><input type="checkbox" data-ein="zsWerten" ${r.zsWerten ? "checked" : ""}> Zeichensetzung werten</label>
        <label><input type="checkbox" data-ein="ohneNote" ${r.ohneNote ? "checked" : ""}> ohne Note</label></div>
      ${ueberwachung(r)}
      ${r.status === "eingegangen" ? `<p class="notice">Die KI korrigiert diese Abgabe gerade. Die Seite lädt in wenigen Sekunden neu.</p>` : ""}
      ${r.ki && r.ki.stand === "unvollstaendig" ? `<p class="notice bad">Die KI war nicht erreichbar: Offene Antworten sind nur vorläufig oder noch gar nicht bewertet. <button class="btn klein" type="button" data-neu="0">↻ KI für alle offenen Antworten noch einmal versuchen</button></p>` : ""}
      ${probe && probe.texte.length ? `<details><summary class="btn klein secondary" style="display:inline-flex">📖 Texte der Probe</summary><div style="margin-top:10px;max-width:760px" data-texte>${probe.texte.map(D7Lesetext.html).join("")}</div></details>` : ""}
      ${r.details.map(aufgabe).join("")}
      <label class="t" style="display:block;margin-top:16px;color:var(--pri-d);font-size:.74rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase">Kommentar zur ganzen Probe (sieht das Kind oben auf der Korrektur)</label>
      <textarea data-kommentar rows="2" style="width:100%;min-height:58px;padding:8px 10px;border:1.5px solid #cfc2bd;border-radius:10px">${esc(r.lehrerKommentar || "")}</textarea>
      <div class="l-ende">
        <button class="btn" type="button" data-tun="bestaetigen" ${r.status === "zu-pruefen" ? "" : "disabled"}>✓ Bewertung bestätigen</button>
        <button class="btn gruen" type="button" data-tun="freigeben" ${r.status === "bestaetigt" || r.vorbei ? "" : "disabled"} title="${r.vorbei ? "Die 7 Tage sind um – das Kind sieht die Korrektur dann wieder 7 Tage lang" : "Erst prüfen und bestätigen, dann freigeben. Das Kind sieht die Korrektur 7 Tage lang."}">${r.vorbei ? "📤 Noch einmal freigeben (7 Tage)" : "📤 Korrigierte Probe freigeben"}</button>
        ${r.status === "freigegeben" ? `<button class="btn secondary" type="button" data-tun="zurueckziehen">Freigabe zurücknehmen</button>` : ""}
        ${r.status === "bestaetigt" ? `<button class="btn secondary" type="button" data-tun="oeffnen">Wieder bearbeiten</button>` : ""}
        <button class="btn secondary" type="button" data-tun="vorschau">👁 So sieht es das Kind · drucken</button>
        <span style="flex:1"></span>
        <button class="btn klein secondary" type="button" data-tun="vor" ${i > 0 ? "" : "disabled"}>← vorige</button>
        <button class="btn klein secondary" type="button" data-tun="weiter" ${i >= 0 && i < liste.length - 1 ? "" : "disabled"}>nächste →</button>
        <button class="btn klein danger" type="button" data-tun="loeschen">Abgabe löschen (Nachschreiben)</button>
      </div></section>`;
    D7Lesetext.antippen(box);
    const d = box.querySelector("details"); if (d) d.addEventListener("toggle", () => D7Lesetext.einpassen(box));
    if (!probe) request("probe", {testId: r.testId}).then(p => { proben[r.testId] = p.test; if (offenId === r.id && !box.querySelector("[data-texte]") && p.test.texte.length) zeichneAbgabe(); }).catch(() => {});
  }
  // nach dem Speichern: Zahlen und Kennzeichen auffrischen, ohne die Felder neu zu zeichnen (der Cursor bleibt, wo er ist)
  function auffrischen(r, nr, text) {
    const box = $("abgabe").querySelector(".l-abgabe"); if (!box || box.dataset.id !== r.id) return;
    box.querySelector("[data-ergebnis]").innerHTML = kopfZahlen(r);
    box.querySelector("[data-stand]").innerHTML = standText(r);
    r.details.forEach(d => {
      const a = box.querySelector(`.l-aufgabe[data-nr="${d.nr}"]`); if (!a) return;
      const w = d.gewertet || {points: d.points, max: d.maxPoints};
      a.querySelector("[data-punkte]").textContent = w.max ? zahl(w.points) + " / " + zahl(w.max) : "nicht gewertet";
      a.querySelector("[data-quelle]").textContent = QUELLE[d.source] || d.source;
      a.classList.toggle("pruefen", Boolean(d.needsReview));
      if (d.nr === nr) { const g = a.querySelector("[data-gespeichert]"); if (g) { g.textContent = text || "gespeichert ✓"; setTimeout(() => { g.textContent = ""; }, 2500); } }
    });
    zeichneListe();
  }
  function speichereAufgabe(a) {
    const r = zeile(offenId), nr = Number(a.dataset.nr), d = r && r.details.find(x => x.nr === nr);
    if (!d) return;
    const body = {submissionId: r.id, nr, comment: a.querySelector('[data-feld="comment"]').value, hinweis: a.querySelector('[data-feld="hinweis"]').value};
    const teile = [...a.querySelectorAll("[data-teil]")];
    if (teile.length) body.punkte = teile.map(i => Number(String(i.value).replace(",", ".")));
    else if (a.querySelector("[data-points]")) body.points = Number(String(a.querySelector("[data-points]").value).replace(",", "."));
    a.querySelectorAll("[data-liste]").forEach(t => { body[t.dataset.liste] = t.value.split("\n").map(s => s.trim()).filter(Boolean); });
    const begr = [...a.querySelectorAll("[data-begr]")]; if (begr.length) body.begruendung = begr.map(t => t.value.trim());
    const marken = markenLesen(a, d); if (marken) body.marken = marken;
    nacheinander(async () => {
      try { const res = await request("bewerten", body); ersetze(res.submission); auffrischen(res.submission, nr); status(""); $("teacher-status").hidden = true; }
      catch (err) { $("teacher-status").hidden = false; status("Nicht gespeichert: " + (err.message === "invalid_points" ? "Die Punkte passen nicht (0 bis Höchstpunktzahl, halbe Punkte sind möglich)." : err.message), "bad"); }
    });
  }

  /* ---------- Deutsch 8: Fehlermarkierungen setzen, Planung, Zeiten, laufende Bearbeitungen ---------- */
  // Diese Teile erscheinen nur, wenn der Server sie kennt (Proben mit „schutz“ in der Liste = Deutsch 8).
  const MK = D7Korrektur.MARKEN || {};
  const d8 = () => tests.some(t => t.schutz);
  let sitzungen = [], sitzTakt = null, sitzZeit = 0;
  // Markierbarer Text einer offenen Antwort: Text mit der Maus oder dem Finger auswählen, dann eine Art antippen
  function markenBox(d) {
    if (!d8() || typeof d.given !== "string" || !d.given) return `<div class="k-antwort${d.given ? "" : " leer"}">${d.given ? esc(d.given) : "Keine Antwort."}</div>`;
    const marken = D7Korrektur.markenGueltig(d.given, d.marken || []);
    return `<div class="mk" data-mk="${d.nr}">
      <div class="k-antwort mk-text" data-mk-text>${D7Korrektur.markiert(d.given, marken)}</div>
      <div class="mk-leiste kein-druck" role="group" aria-label="Markierung setzen"><span class="mk-auswahl" data-mk-auswahl>Text auswählen, dann die Art antippen:</span>
        ${Object.keys(MK).map(t => `<button type="button" class="mk-art km-${t}" data-mk-art="${t}" title="${esc(MK[t][1])}">${MK[t][0]}<small>${esc(MK[t][1])}</small></button>`).join("")}</div>
      <ul class="mk-liste" data-mk-liste>${marken.map((m, i) => `<li class="km-${m.type}"><b>${i + 1} · ${MK[m.type][0]}</b><span class="mk-stelle">„${esc(d.given.slice(m.start, m.end).replace(/\s+/g, " ").slice(0, 60))}“${m.von === "ki" ? ' <small title="Vorschlag der KI">✨</small>' : ""}</span>
        <input type="text" data-mk-komm="${i}" value="${esc(m.comment || "")}" maxlength="200" placeholder="Hinweis für das Kind" aria-label="Hinweis zur Markierung ${i + 1}">
        <button type="button" class="btn klein secondary" data-mk-weg="${i}" aria-label="Markierung ${i + 1} entfernen">✕</button></li>`).join("")}</ul>
      <p class="l-quelle" style="margin:4px 0 0">Der Text des Kindes bleibt unverändert – Markierungen liegen nur darüber. Das Kind sieht sie mit deinem Hinweis in der Korrektur.</p></div>`;
  }
  function planBox(d) {
    if (!d.plan || !Object.keys(d.plan).length) return "";
    const liste = window.AufsatzEditor ? AufsatzEditor.planListe(d.form, d.planFelder, d.plan) : Object.keys(d.plan).map(k => ({label: k, text: d.plan[k]}));
    return `<details class="l-plan"><summary class="l-quelle" style="cursor:pointer;margin-top:8px">🗂 Planung des Kindes (${liste.length} ${liste.length === 1 ? "Feld" : "Felder"}) – wird nicht bewertet</summary><dl class="k-plan">${liste.map(x => `<dt>${esc(x.label)}</dt><dd>${esc(x.text)}</dd>`).join("")}</dl></details>`;
  }
  function zeitText(r) {
    const z = r.zeit; if (!z) return "";
    return ` · Bearbeitungszeit ${z.minuten} min (erlaubt ${z.erlaubt}${z.verlaengerung ? ", davon " + z.verlaengerung + " verlängert" : ""})${z.ueber ? ` · <b>${z.ueber} min über der Zeit</b>` : ""}${r.vonLehrkraftAbgegeben ? " · aus dem gesicherten Zwischenstand übernommen" : ""}`;
  }
  // Auswahl im Text -> Bereich im Originaltext (über data-ab an den Textstücken)
  function auswahlIn(feld) {
    const sel = window.getSelection ? window.getSelection() : null;
    if (!sel || !sel.rangeCount || sel.isCollapsed) return null;
    const r = sel.getRangeAt(0);
    const stelle = (knoten, versatz) => {
      const el = knoten.nodeType === 3 ? knoten.parentNode : knoten;
      const stueck = el && el.closest ? el.closest("[data-ab]") : null;
      if (!stueck || !feld.contains(stueck)) return null;
      return Number(stueck.dataset.ab) + (knoten.nodeType === 3 ? versatz : versatz ? stueck.textContent.length : 0);
    };
    const a = stelle(r.startContainer, r.startOffset), b = stelle(r.endContainer, r.endOffset);
    return a === null || b === null || b <= a ? null : [a, b];
  }
  let gemerkt = null;                                   // letzte Auswahl: { nr, von, bis }
  document.addEventListener("selectionchange", () => {
    const sel = window.getSelection ? window.getSelection() : null, knoten = sel && sel.anchorNode ? (sel.anchorNode.nodeType === 3 ? sel.anchorNode.parentNode : sel.anchorNode) : null;
    const feld = knoten && knoten.closest ? knoten.closest("[data-mk-text]") : null;
    // Auf dem iPad hebt das Antippen eines Knopfs die Auswahl auf: Sie gilt danach noch kurz weiter (siehe markenKlick)
    if (!feld) { if (gemerkt && !gemerkt.weg) gemerkt.weg = Date.now(); return; }
    const bereich = auswahlIn(feld), box = feld.closest("[data-mk]");
    if (!bereich) { if (gemerkt && !gemerkt.weg) gemerkt.weg = Date.now(); return; }
    gemerkt = {nr: Number(box.dataset.mk), von: bereich[0], bis: bereich[1]};
    const r = zeile(offenId), d = r && r.details.find(x => x.nr === Number(box.dataset.mk));
    box.querySelector("[data-mk-auswahl]").textContent = bereich && d ? "Ausgewählt: „" + d.given.slice(bereich[0], bereich[1]).replace(/\s+/g, " ").slice(0, 40) + "“ – Art antippen:" : "Text auswählen, dann die Art antippen:";
  });
  function markenSpeichern(a, d, marken) {
    d.marken = marken;
    const box = a.querySelector("[data-mk]"); if (box) box.outerHTML = markenBox(d);
    gemerkt = null;
    speichereAufgabe(a);
  }
  function markenKlick(e) {
    const art = e.target.closest("[data-mk-art]"), weg = e.target.closest("[data-mk-weg]");
    if (!art && !weg) return false;
    const a = e.target.closest(".l-aufgabe"), r = zeile(offenId), d = r && r.details.find(x => x.nr === Number(a.dataset.nr));
    if (!d) return true;
    const marken = D7Korrektur.markenGueltig(d.given, d.marken || []).map(m => ({...m}));
    if (weg) { marken.splice(Number(weg.dataset.mkWeg), 1); markenSpeichern(a, d, marken); return true; }
    if (!gemerkt || gemerkt.nr !== d.nr || (gemerkt.weg && Date.now() - gemerkt.weg > 1500)) { status("Wähle zuerst im Text des Kindes die Stelle aus (mit der Maus ziehen oder das Wort antippen und die Griffe ziehen).", "bad"); $("teacher-status").hidden = false; return true; }
    // überschneidet sich die neue Markierung mit einer alten, ersetzt sie diese
    const neu = {start: gemerkt.von, end: gemerkt.bis, type: art.dataset.mkArt, comment: "", von: "lehrer"};
    const rest = marken.filter(m => m.end <= neu.start || m.start >= neu.end);
    markenSpeichern(a, d, rest.concat([neu]).sort((x, y) => x.start - y.start));
    const feld = a.querySelector('[data-mk-komm="' + rest.filter(m => m.start < neu.start).length + '"]'); if (feld) feld.focus();
    return true;
  }
  // Hinweise zu den Markierungen aus den Feldern lesen (beim Speichern der Aufgabe)
  function markenLesen(a, d) {
    if (!a.querySelector("[data-mk]")) return undefined;
    const marken = D7Korrektur.markenGueltig(d.given, d.marken || []).map(m => ({...m}));
    a.querySelectorAll("[data-mk-komm]").forEach(f => { const m = marken[Number(f.dataset.mkKomm)]; if (m) { if (m.comment !== f.value.trim()) m.von = "lehrer"; m.comment = f.value.trim(); } });
    d.marken = marken;
    return marken.map(m => ({start: m.start, end: m.end, type: m.type, comment: m.comment, von: m.von}));
  }

  // Einstellungen des Probenmodus je Probe (was GRUMI sperrt oder festhält, ob die Restzeit zu sehen ist)
  const SCHALTER = [["wechsel", "Verlassen der Seite festhalten"], ["warnen", "Hinweisfenster nach der Rückkehr"], ["kopieren", "Kopieren sperren"], ["ausschneiden", "Ausschneiden sperren"],
    ["kontextmenue", "Kontextmenü sperren"], ["spruenge", "große Texteingaben vermerken"], ["timer", "Restzeit anzeigen"]];
  function schutzZeilen(liste) {
    if (!d8()) return "";
    return [...new Set(liste.map(t => t.nr))].map(n => { const s = (liste.find(t => t.nr === n) || {}).schutz || {};
      return `<div class="l-schutz" data-schutz-nr="${n}"><b>Probe ${n} – Probenmodus:</b> ${SCHALTER.map(([k, name]) => { const an = typeof s[k] === "boolean" ? s[k] : s[k] !== "erlauben";
        return `<label><input type="checkbox" data-schutz="${k}" ${an ? "checked" : ""}> ${name}</label>`; }).join("")}</div>`; }).join("") +
      `<p class="l-quelle" style="margin-top:4px">Die Zeit misst immer der Server (Beginn, Dauer); „Restzeit anzeigen“ blendet nur die Uhr für die Kinder ein oder aus. Läuft die Zeit ab, wird nichts von selbst abgegeben oder bewertet.</p>`;
  }
  async function schutzGeaendert(e) {
    const haken = e.target.closest("[data-schutz]"); if (!haken) return false;
    const nr = Number(haken.closest("[data-schutz-nr]").dataset.schutzNr), k = haken.dataset.schutz;
    const wert = ["kopieren", "ausschneiden", "kontextmenue"].includes(k) ? (haken.checked ? "sperren" : "erlauben") : haken.checked;
    haken.disabled = true;
    try { await request("probe-einstellung", {nr, schutz: {[k]: wert}}); await load(true); status("Gespeichert: Probe " + nr + " – " + (SCHALTER.find(x => x[0] === k) || [])[1] + (haken.checked ? " ist an." : " ist aus.")); }
    catch (err) { haken.checked = !haken.checked; status(err.message, "bad"); }
    finally { haken.disabled = false; }
    return true;
  }

  // Laufende Bearbeitungen: wer schreibt gerade, wann zuletzt gesichert, wie viel Zeit bleibt
  const minuten = ms => { const m = Math.round(ms / 60000); return m > 0 ? "noch " + m + " min" : m === 0 ? "Zeit ist um" : Math.abs(m) + " min über der Zeit"; };
  function zeichneSitzungen() {
    let box = $("sitzungen");
    if (!box) { box = document.createElement("div"); box.id = "sitzungen"; $("results").parentNode.insertBefore(box, $("results").previousElementSibling.previousElementSibling); }
    if (!d8()) { box.innerHTML = ""; return; }
    const jetzt = Date.now() + sitzZeit;
    box.innerHTML = `<h2 style="margin-top:22px">Gerade in Arbeit</h2>` + (sitzungen.length ? `<table class="l-uebersicht"><thead><tr><th>Kind</th><th>Klasse</th><th>Fassung</th><th>begonnen</th><th>zuletzt gesichert</th><th>Wörter</th><th>Zeit</th><th></th></tr></thead><tbody>${sitzungen.map(s => `<tr style="cursor:default" data-sitz="${esc(s.code)}" data-sitz-nr="${(tests.find(t => t.id === s.testId) || {}).nr || 0}">
        <td><b>${esc(wer(s))}</b></td><td>${esc(s.klasse)}</td><td>${esc(s.variante)}</td><td>${uhr(s.begonnenAm).slice(0, 5)}</td><td>${s.gespeichertAm ? uhr(s.gespeichertAm).slice(0, 5) : "noch nichts"}</td><td>${s.woerter}</td>
        <td>${minuten(Date.parse(s.endetAm) - jetzt)}${s.verlaengerung ? ` <small>(+${s.verlaengerung})</small>` : ""}</td>
        <td><button class="btn klein secondary" type="button" data-sitz-zeit="5">+5 min</button> <button class="btn klein secondary" type="button" data-sitz-zeit="10">+10 min</button> <button class="btn klein secondary" type="button" data-sitz-ab ${s.gespeichertAm ? "" : "disabled"} title="Den gesicherten Zwischenstand als Abgabe übernehmen – z. B. wenn das Gerät ausgefallen ist">Zwischenstand übernehmen</button></td></tr>`).join("")}</tbody></table>
      <p class="l-quelle">Die Antworten werden beim Schreiben alle paar Sekunden auf dem Server gesichert. „Zwischenstand übernehmen“ legt daraus eine Abgabe an – nur nötig, wenn ein Kind selbst nicht mehr abgeben kann.</p>` : `<p class="l-quelle">Im Moment schreibt niemand an ${$("filter-nr").value ? "dieser Probe" : "einer Probe"}.</p>`);
  }
  async function ladeSitzungen() {
    clearTimeout(sitzTakt);
    if (!d8()) return;
    try { const res = await request("sitzungen", {nr: Number($("filter-nr").value) || 0}); sitzungen = res.sitzungen || []; sitzZeit = Date.parse(res.serverZeit) - Date.now(); zeichneSitzungen(); } catch (_e) {}
    if (sitzungen.length) sitzTakt = setTimeout(async () => { const vorher = sitzungen.length; await ladeSitzungen(); if (sitzungen.length < vorher) load(true); }, 20000);
  }
  document.addEventListener("click", async e => {
    const zeitKnopf = e.target.closest("[data-sitz-zeit]"), ab = e.target.closest("[data-sitz-ab]");
    if (!zeitKnopf && !ab) return;
    const tr = e.target.closest("[data-sitz]"), code = tr.dataset.sitz, nr = Number(tr.dataset.sitzNr), s = sitzungen.find(x => String(x.code) === code);
    try {
      if (zeitKnopf) { await request("sitzung-zeit", {nr, code, minuten: Math.min(120, (s ? s.verlaengerung : 0) + Number(zeitKnopf.dataset.sitzZeit))}); status("Zeit für " + wer({code}) + " verlängert."); }
      else { if (!confirm("Den gesicherten Zwischenstand von " + wer({code}) + " als Abgabe übernehmen? Das Kind kann danach nicht mehr weiterschreiben.")) return; await request("sitzung-abgeben", {nr, code}); status("Zwischenstand von " + wer({code}) + " als Abgabe übernommen."); await load(true); }
      await ladeSitzungen();
    } catch (err) { status(err.message, "bad"); }
  });

  $("login").addEventListener("submit", e => { e.preventDefault(); password = $("password").value; load(); });
  ["filter-nr", "filter-klasse", "filter-stand"].forEach(id => $(id).addEventListener("change", () => { if (id === "filter-nr") load(); else { zeichneListe(); } }));
  $("neu-laden").addEventListener("click", () => load());
  $("unlock-list").addEventListener("change", async e => {
    if (await schutzGeaendert(e)) return;
    const wahl = e.target.closest("[data-einfuegen]");
    if (wahl) {
      wahl.disabled = true;
      try { await request("probe-einstellung", {nr: Number(wahl.dataset.einfuegen), einfuegen: wahl.value}); await load(true); status("Gespeichert: In Probe " + wahl.dataset.einfuegen + " ist Einfügen " + (wahl.value === "sperren" ? "gesperrt." : "erlaubt und wird protokolliert.")); }
      catch (err) { status(err.message, "bad"); }
      finally { wahl.disabled = false; }
      return;
    }
    const checkbox = e.target.closest("[data-unlock]"); if (!checkbox) return;
    checkbox.disabled = true;
    try { await request("unlock", {testId: checkbox.dataset.unlock, open: checkbox.checked}); await load(true); }
    catch (err) { checkbox.checked = !checkbox.checked; status(err.message, "bad"); }
    finally { checkbox.disabled = false; }
  });
  $("unlock-list").addEventListener("click", async e => {
    const b = e.target.closest("[data-ansehen]"); if (!b) return;
    try { const p = (await request("probe", {testId: b.dataset.ansehen})).test; proben[p.id] = p; zeigeProbe(p); } catch (err) { status(err.message, "bad"); }
  });
  $("results").addEventListener("click", e => { const tr = e.target.closest("tr[data-id]"); if (!tr) return; offenId = tr.dataset.id; zeichneListe(); zeichneAbgabe(); $("abgabe").scrollIntoView({behavior: "smooth", block: "start"}); });
  $("abgabe").addEventListener("change", e => {
    const r = zeile(offenId); if (!r) return;
    const ein = e.target.closest("[data-ein]");
    if (ein) return void nacheinander(async () => { try { const res = await request("einstellung", {submissionId: r.id, [ein.dataset.ein]: ein.checked}); ersetze(res.submission); auffrischen(res.submission); } catch (err) { status(err.message, "bad"); } });
    if (e.target.matches("[data-kommentar]")) return void nacheinander(async () => { try { const res = await request("einstellung", {submissionId: r.id, lehrerKommentar: e.target.value}); ersetze(res.submission); } catch (err) { status(err.message, "bad"); } });
    const a = e.target.closest(".l-aufgabe"); if (a) speichereAufgabe(a);
  });
  // Markierungsknöpfe: Die Auswahl im Text soll beim Antippen stehen bleiben
  $("abgabe").addEventListener("mousedown", e => { if (e.target.closest("[data-mk-art]")) e.preventDefault(); });
  $("abgabe").addEventListener("click", e => {
    const r = zeile(offenId); if (!r) return;
    if (markenKlick(e)) return;
    const neu = e.target.closest("[data-neu]"), zurueck = e.target.closest("[data-zurueck]"), tun = e.target.closest("[data-tun]");
    const lauf = (fn, knopf) => nacheinander(async () => { if (knopf) knopf.disabled = true; try { await fn(); } catch (err) { $("teacher-status").hidden = false; status(err.message, "bad"); $("teacher-status").scrollIntoView({block: "center"}); } finally { if (knopf && knopf.isConnected) knopf.disabled = false; } });
    if (neu) return void lauf(async () => { neu.textContent = "Die KI bewertet …"; const res = await request("neu-bewerten", {submissionId: r.id, nr: Number(neu.dataset.neu) || undefined}); ersetze(res.submission); zeichneListe(); zeichneAbgabe(); if (!res.bewertet) throw new Error("Die KI ist gerade nicht erreichbar. Bitte selbst bewerten oder später noch einmal versuchen."); }, neu);
    if (zurueck) return void lauf(async () => { const res = await request("zuruecksetzen", {submissionId: r.id, nr: Number(zurueck.dataset.zurueck)}); ersetze(res.submission); zeichneListe(); zeichneAbgabe(); }, zurueck);
    if (!tun) return;
    const liste = gefiltert(), i = liste.findIndex(x => x.id === r.id);
    const art = tun.dataset.tun;
    if (art === "vor" || art === "weiter") { const z = liste[i + (art === "vor" ? -1 : 1)]; if (z) { offenId = z.id; zeichneListe(); zeichneAbgabe(); $("abgabe").scrollIntoView({block: "start"}); } return; }
    if (art === "bestaetigen" || art === "oeffnen") return void lauf(async () => { const res = await request("bestaetigen", {submissionId: r.id, bestaetigt: art === "bestaetigen"}); ersetze(res.submission); zeichneListe(); zeichneAbgabe(); }, tun);
    if (art === "freigeben" || art === "zurueckziehen") return void lauf(async () => { const res = await request("freigeben", {submissionId: r.id, frei: art === "freigeben"}); res.submissions.forEach(ersetze); zeichneListe(); zeichneAbgabe(); }, tun);
    if (art === "vorschau") return void lauf(async () => { const res = await request("vorschau", {submissionId: r.id}); zeigeDruck(res.korrektur); }, tun);
    if (art === "loeschen") { if (!confirm("Diese Abgabe wirklich löschen? Danach kann das Kind die Probe noch einmal schreiben (auch Variante B).")) return; lauf(async () => { await request("delete", {submissionId: r.id}); rows = rows.filter(x => x.id !== r.id); offenId = ""; zeichneListe(); zeichneAbgabe(); }, tun); }
  });
  $("alle-frei").addEventListener("click", () => {
    const ids = gefiltert().filter(r => r.status === "bestaetigt").map(r => r.id);
    if (!ids.length || !confirm(ids.length + (ids.length === 1 ? " korrigierte Probe" : " korrigierte Proben") + " an die Kinder zurückgeben?")) return;
    nacheinander(async () => { try { const res = await request("freigeben", {submissionIds: ids}); res.submissions.forEach(ersetze); zeichneListe(); if (offenId) zeichneAbgabe(); } catch (err) { status(err.message, "bad"); } });
  });
  $("export").addEventListener("click", async () => {
    try { const blob = await request("export", {}); const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = (PF ? PF.name.toLowerCase().replace(/[^a-z0-9]+/g, "") : "deutsch" + DNR) + "-proben.csv"; a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 1000); }
    catch (err) { status(err.message, "bad"); }
  });

  /* ---------- Vorschau der Rückgabe und Ausdruck ---------- */
  function zeigeDruck(k) {
    $("druck").innerHTML = `<div class="druck-leiste kein-druck"><button class="btn secondary" type="button" id="druck-zu">← Zurück zur Korrektur</button><button class="btn" type="button" id="druck-los">🖨 Drucken oder als PDF speichern</button></div>
      <p class="notice kein-druck">So sieht das Kind seine korrigierte Probe${k.freigegebenAm ? "" : " – sobald du sie freigibst"}.</p>` + D7Korrektur.html(k);
    $("arbeit").hidden = true; $("druck").hidden = false; window.scrollTo({top: 0});
    $("druck-zu").addEventListener("click", () => { $("druck").hidden = true; $("druck").innerHTML = ""; $("arbeit").hidden = false; $("abgabe").scrollIntoView({block: "start"}); });
    $("druck-los").addEventListener("click", () => window.print());
  }

  /* ---------- Probe mit Lösungen ansehen ---------- */
  function loesung(it) {
    if (it.type === "choice") return `<ul class="k-liste">${it.options.map((o, i) => `<li>${i === it.answer ? "<b>✓ " + esc(o) + "</b>" : esc(o)}</li>`).join("")}</ul>`;
    if (it.type === "match") return `<ul class="k-liste">${it.pairs.map(p => `<li>${esc(p[0])} → <b>${esc(p[1])}</b></li>`).join("")}</ul>`;
    if (it.type === "order") return `<ol class="k-liste">${it.steps.map(s => `<li>${esc(s)}</li>`).join("")}</ol>`;
    if (it.type === "felder") return `<ul class="k-liste">${it.felder.map(f => `<li>${esc(f.label)}: <b>${f.loesungen.map(esc).join(" / ")}</b>${f.genau ? " (genaue Schreibung)" : ""}${marke(f)} · ${f.punkte || 1} P.</li>`).join("")}</ul>`;
    if (it.type === "komma") return `<ul class="k-liste">${it.saetze.map(s => `<li>${esc(s)}</li>`).join("")}</ul>`;
    if (it.type === "zeile") return `<p>Zeilen: <b>${it.bereiche.map(b => b[0] + (b[1] > b[0] ? "–" + b[1] : "")).join(" oder ")}</b></p>`;
    const teile = it.type === "schreiben" ? it.raster.map(k => ({text: k.name, erwartet: k.text, punkte: k.punkte, rs: k.rs, zs: k.zs})) : it.kriterien;
    return (it.material ? `<div class="material">${esc(it.material)}</div>` : "") + `<table class="k-raster"><tbody>${teile.map(k => `<tr><td><b>${esc(k.text)}</b>${marke(k)}<br><small>${esc(k.erwartet || "")}</small></td><td class="p">${k.punkte} P.</td></tr>`).join("")}</tbody></table>` +
      (it.expected ? `<p class="l-quelle" style="margin-top:6px">Beispiellösung: ${esc(it.expected)}</p>` : "") + (it.minWoerter ? `<p class="l-quelle">Mindestens ${it.minWoerter} Wörter.</p>` : "");
  }
  function zeigeProbe(p) {
    const a = p.anteile, pct = n => Math.round(n / p.maxPoints * 100);
    $("probe-ansicht").innerHTML = `<section class="l-abgabe"><div class="l-kopf"><div><div class="eyebrow">Probe mit Lösungen · ${klasseVon(p)} · Variante ${p.variante}</div><h2 style="margin:2px 0">${esc(p.title)}</h2>
      <span class="l-quelle">${p.items.length} Aufgaben · ${p.maxPoints} Punkte · etwa ${p.minutes} Minuten · offen ${a.offen} P. (${pct(a.offen)} %) · halboffen ${a.halboffen} P. (${pct(a.halboffen)} %) · geschlossen ${a.geschlossen} P.</span></div>
      <button class="btn klein secondary" type="button" id="probe-zu">✕ schließen</button></div>
      <div style="max-width:760px;margin-top:12px">${p.texte.map(D7Lesetext.html).join("")}</div>
      ${p.items.map((it, i) => `<div class="l-aufgabe"><div class="k-kopf"><b>Aufgabe ${i + 1} · ${ART[it.type]}${marke(it)}</b><span class="k-punkte">${it.points} P.</span></div><p style="white-space:pre-line"><b>${esc(it.prompt)}</b></p>${it.vorgabe ? `<div class="vorgabe" style="margin:0 0 8px;padding:8px 12px;border-left:4px solid var(--gold);background:#fffaf0;white-space:pre-line">${esc(it.vorgabe)}</div>` : ""}${it.hilfe ? `<p class="l-quelle">Hilfe für das Kind: ${esc(it.hilfe)}</p>` : ""}${loesung(it)}${it.hinweis ? `<p class="l-quelle">Nächster Schritt bei Fehlern: ${esc(it.hinweis)}</p>` : ""}</div>`).join("")}</section>`;
    D7Lesetext.einpassen($("probe-ansicht")); D7Lesetext.antippen($("probe-ansicht"));
    $("probe-zu").addEventListener("click", () => { $("probe-ansicht").innerHTML = ""; });
    $("probe-ansicht").scrollIntoView({behavior: "smooth", block: "start"});
  }
})();
