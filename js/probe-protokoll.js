/* Probenmodus: Anzeige des Protokolls einer Abgabe für die Lehrkraft – für alle Fächer.
 * Der Browser des Kindes hält während einer Probe fest (js/probe-schutz.js): Wechsel in einen anderen Tab oder eine
 * andere App mit Uhrzeit und Dauer, Einfügeversuche, Kopieren und auffällig große Texteingaben – Zeiten und Mengen, bei
 * Deutsch und Englisch auch der Text der Kopierversuche.
 * Der Server speichert das bei der Abgabe (probe-kind.js: protokollSauber).
 *
 *   ProbeProtokoll.html(abgabe)   Block zum Aufklappen (abgabe.protokoll, abgabe.verlassen)
 *   ProbeProtokoll.kurz(abgabe)   eine Zeile: „2 Wechsel (1 Minute 5 Sekunden) · 1 Einfügeversuch“ oder ""
 *   ProbeProtokoll.uebersicht(abgabe)   Kasten „Probensicherheit“ mit allen Zahlen und den Ereignissen der Reihe nach (NT 8)
 *   ProbeProtokoll.kopierZahl(abgabe)   Zahl der Kopier- und Einfügeversuche (abgabe.kopierversuche bzw. das Protokoll)
 *   ProbeProtokoll.kopierListe(abgabe)  die Versuche der Zeit nach: [{ zeit, art, text?, feld?, zeichen, erlaubt? }] – aus dem
 *                                       Protokoll einer Abgabe oder aus abgabe.kopiert (Notenübersicht der Verwaltung)
 *   ProbeProtokoll.kopierHtml(abgabe)   auffälliger Kasten „⚠️ 2 Kopierversuche“ mit „10:14 Uhr – kopiert: „…“ (Aufgabe 3)“ oder ""
 *   ProbeProtokoll.kopierZeile(eintrag) eine Zeile davon als Text
 * Seit 24.11.2026 (Deutsch und Englisch, Wunsch der Lehrkraft: „vermerke kopierversuche deutlich und auch was kopiert wurde“)
 * steht bei jedem Kopier-, Ausschneide- und Einfügeversuch auch der Text (höchstens 300 Zeichen) und die Aufgabe dabei.
 *
 * Welche Seite oder App offen war, kann ein Browser nicht erkennen – das steht nirgends. Nichts davon ändert Punkte
 * oder Note: Was die Vorgänge bedeuten, entscheidet die Lehrkraft. (Deutsch 7 zeigt dasselbe in proben-lehrer.js.)
 */
(function (global) {
  "use strict";
  var doc = global.document;
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", "\"": "&quot;", "'": "&#39;" }[c];
    });
  }
  function uhr(iso) { var d = new Date(iso); return isNaN(d) ? "" : d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit", second: "2-digit" }) + " Uhr"; }
  function dauer(sek) {
    var m = Math.floor(sek / 60), s = sek % 60;
    return (m ? m + (m === 1 ? " Minute" : " Minuten") : "") + (m && s ? " " : "") + (s || !m ? s + (s === 1 ? " Sekunde" : " Sekunden") : "");
  }
  function stil() {
    if (doc.getElementById("pp-stil")) return;
    var s = doc.createElement("style"); s.id = "pp-stil";
    s.textContent = ".pp-box{margin:10px 0 0;padding:10px 14px;border:1.5px solid #e5d7b0;border-radius:12px;background:#fffdf6;color:#1e293b;font-size:.92rem;text-align:left}" +
      ".pp-box summary{cursor:pointer;font-weight:800}.pp-box h4{margin:10px 0 2px;font-size:.95rem}.pp-box ol,.pp-box ul{margin:2px 0 6px;padding-left:22px}" +
      ".pp-box p{margin:4px 0}.pp-box .pp-quelle{color:#64748b;font-size:.82rem}.pp-box small{color:#64748b}" +
      ".pp-kopier{margin:8px 0;padding:8px 12px;border:2px solid #dc2626;border-radius:10px;background:#fef2f2;color:#7f1d1d}.pp-kopier b{font-size:1rem}" +
      ".pp-kopier ul{margin:4px 0 0;padding-left:20px}.pp-kopier li{margin:2px 0;overflow-wrap:anywhere}.pp-kopier small{color:#991b1b;font-weight:600}.pp-kopier p{margin:4px 0 0}" +
      "@media print{.pp-box,.pp-kopier{display:none}}";
    doc.head.appendChild(s);
  }
  function teile(r) {
    var p = (r && r.protokoll) || {};
    return { w: p.wechsel || [], e: p.einfuegen || [], k: p.kopieren || [], s: p.spruenge || [], v: p.verbindung || [] };
  }
  var abbrueche = function (v) { return v.filter(function (x) { return x.art === "weg"; }).length; };
  /* ---------- Kopierversuche (seit 24.11.2026 mit Text) ---------- */
  var ART = { copy: "kopiert", cut: "ausgeschnitten", paste: "einfügen versucht", drop: "hineingezogen" };
  function kopierListe(r) {
    if (r && Array.isArray(r.kopiert)) return r.kopiert.slice();
    var t = teile(r);
    return t.k.map(function (x) { return { zeit: x.zeit, art: x.art === "cut" ? "cut" : "copy", zeichen: x.zeichen || 0, text: x.text, feld: x.feld }; })
      .concat(t.e.map(function (x) { return { zeit: x.zeit, art: x.art === "drop" ? "drop" : "paste", zeichen: x.zeichen || 0, text: x.text, feld: x.feld, erlaubt: x.erlaubt === true }; }))
      .sort(function (a, b) { return String(a.zeit).localeCompare(String(b.zeit)); });
  }
  // verhinderte Versuche, bei denen etwas markiert bzw. in der Zwischenablage war (wie die Zählung der Testregeln)
  function kopierZahl(r) {
    var n = kopierListe(r).filter(function (e) { return !e.erlaubt && (e.zeichen > 0 || e.text); }).length;
    return Math.max(Number(r && r.kopierversuche) || 0, n);
  }
  function kurzUhr(iso) { var d = new Date(iso); return isNaN(d) ? "" : d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }) + " Uhr"; }
  // „10:14 Uhr – kopiert: „Das Buch wird gelesen.“ (Aufgabe 3)“
  function kopierZeile(e) {
    var was = e.erlaubt ? "eingefügt (erlaubt)" : ART[e.art] || "kopiert";
    var inhalt = e.text ? ": „" + String(e.text).replace(/\s+/g, " ").trim() + "“" : e.zeichen ? " (" + e.zeichen + " Zeichen, Text nicht bekannt)" : " (nichts markiert)";
    return kurzUhr(e.zeit) + " – " + was + inhalt + (e.feld ? " (" + e.feld + ")" : "");
  }
  function kopierText(n) { return n + (n === 1 ? " Kopierversuch" : " Kopierversuche"); }
  function kopierHtml(r) {
    stil();
    var n = kopierZahl(r), liste = kopierListe(r);
    if (!n && !liste.length) return "";
    return '<div class="pp-kopier" role="note"><b>⚠️ ' + esc(kopierText(n)) + "</b>" + (n ? " <small>– gesperrt, das Kind wurde jedes Mal gewarnt</small>" : "") +
      (liste.length ? "<ul>" + liste.map(function (e) { return "<li>" + esc(kopierZeile(e)) + "</li>"; }).join("") + "</ul>" : "<p>Einzelheiten hat nur die Seite des Kindes gezählt (ältere Abgabe).</p>") + "</div>";
  }
  function kurz(r) {
    var t = teile(r), gesamt = t.w.reduce(function (n, x) { return n + (x.sekunden || 0); }, 0), ab = abbrueche(t.v), kz = kopierZahl(r);
    var erlaubt = t.e.filter(function (x) { return x.erlaubt; }).length;
    return [kz ? "⚠️ " + kopierText(kz) : "", t.w.length ? t.w.length + " Wechsel (" + dauer(gesamt) + ")" : "", erlaubt ? erlaubt + "× eingefügt (erlaubt)" : "",
      t.s.length ? t.s.length + (t.s.length === 1 ? " großer Textsprung" : " große Textsprünge") : "",
      ab ? ab + (ab === 1 ? " Verbindungsabbruch" : " Verbindungsabbrüche") : ""].filter(Boolean).join(" · ");
  }
  /* Übersicht „Probensicherheit“ (NT 8): alle Zahlen auf einen Blick, darunter die Ereignisse der Reihe nach.
     Bearbeitungszeit und „neu geladen“ kommen von der Sitzung auf dem Server (dauerSek, fortgesetzt). */
  function uebersicht(r) {
    stil();
    var t = teile(r), draussen = t.w.reduce(function (n, x) { return n + (x.sekunden || 0); }, 0), ab = abbrueche(t.v);
    var zeit = function (sek) { var m = Math.floor(sek / 60), s = sek % 60; return m + ":" + (s < 10 ? "0" : "") + s; };
    var ereignisse = []
      .concat(t.w.map(function (x) { return [x.von, "GRUMI verlassen – wieder geöffnet " + uhr(x.bis) + ", Dauer: " + dauer(x.sekunden || 0) + (x.art === "fokus" ? " (Fenster ohne Eingabefokus)" : x.art === "geschlossen" ? " (Seite geschlossen oder neu geladen)" : "")]; }))
      .concat(t.e.map(function (x) { return [x.zeit, (x.art === "drop" ? "Hineinziehen" : "Einfügeversuch") + " (" + (x.woerter || 0) + " Wörter) – " + (x.erlaubt ? "eingefügt" : "verhindert") + mitText(x)]; }))
      .concat(t.k.map(function (x) { return [x.zeit, (x.art === "cut" ? "Ausschneiden" : "Kopieren") + " versucht – verhindert" + mitText(x)]; }))
      .concat(t.s.map(function (x) { return [x.zeit, "ungewöhnlich große Texteingabe: " + (x.woerter || 0) + " neue Wörter in höchstens " + (x.sekunden || 0) + " Sekunden"]; }))
      .concat(t.v.map(function (x) { return [x.zeit, x.art === "weg" ? "Verbindung verloren" : "Verbindung wieder da"]; }))
      .sort(function (a, b) { return String(a[0]).localeCompare(String(b[0])); });
    var zeile = function (name, wert) { return "<tr><td>" + name + "</td><td><b>" + esc(wert) + "</b></td></tr>"; };
    return '<div class="pp-box pp-ueber"><b>🔎 PROBENSICHERHEIT</b><table style="border-collapse:collapse;margin:6px 0">' +
      (r && r.dauerSek != null ? zeile("Bearbeitungszeit:", zeit(r.dauerSek)) : "") +
      zeile("GRUMI verlassen:", t.w.length + "×") + zeile("Gesamtdauer außerhalb:", dauer(draussen)) +
      zeile("Einfügeversuche:", t.e.length) + zeile("Kopierversuche:", t.k.length) + zeile("Verbindungsabbrüche:", ab) +
      zeile("ungewöhnliche Texteingaben:", t.s.length) + (r && r.fortgesetzt ? zeile("Seite neu geladen:", r.fortgesetzt + "×") : "") +
      (r && r.nachSperre ? zeile("Abgabe:", "nach dem Sperren der Probe") : "") + (r && r.vonLehrkraft ? zeile("Abgabe:", "Zwischenstand von der Lehrkraft übernommen") : "") + "</table>" +
      (ereignisse.length ? "<details><summary>Details anzeigen</summary><ol>" + ereignisse.map(function (e) { return "<li>" + esc(uhr(e[0])) + " – " + esc(e[1]) + "</li>"; }).join("") + "</ol></details>" : "") +
      '<p class="pp-quelle">Festgehalten werden nur technische Ereignisse des Browsers – nicht, welche Seite oder App geöffnet war. Nichts davon ändert Punkte oder Note; was die Vorgänge bedeuten, entscheidest du.</p></div>';
  }
  // Text eines Kopierversuchs für die Ereignisliste: „: „…“ (Aufgabe 3)“
  function mitText(x) { return (x.text ? ": „" + String(x.text).replace(/\s+/g, " ").trim() + "“" : "") + (x.feld ? " (" + x.feld + ")" : ""); }
  function html(r) {
    stil();
    var t = teile(r), w = t.w, e = t.e, k = t.k, s = t.s;
    if (!w.length && !e.length && !k.length && !s.length) {
      return '<details class="pp-box"><summary>🔎 Probenüberwachung: ' + (r && r.verlassen ? esc(r.verlassen) + "× verlassen (ohne Zeitangaben)" : "nichts protokolliert") + "</summary>" +
        '<p class="pp-quelle">' + (r && r.verlassen ? "Diese Abgabe stammt aus der Zeit, bevor Uhrzeit und Dauer mitgeschickt wurden – bekannt ist nur die Anzahl."
          : "Während dieser Probe wurde kein Wechsel, kein Einfügen und kein Kopieren festgehalten.") + "</p></details>";
    }
    var gesamt = w.reduce(function (n, x) { return n + (x.sekunden || 0); }, 0);
    return '<details class="pp-box" open><summary>🔎 Probenüberwachung: ' + esc(kurz(r)) + "</summary>" + kopierHtml(r) +
      (w.length ? "<h4>Tab/App-Wechsel: " + w.length + "</h4><ol>" + w.map(function (x) {
        return "<li>" + esc(uhr(x.von)) + " – " + esc(uhr(x.bis)) + " → <b>" + esc(dauer(x.sekunden || 0)) + "</b>" +
          (x.art === "fokus" ? " <small>(Fenster ohne Eingabefokus)</small>" : x.art === "geschlossen" ? " <small>(Seite war geschlossen oder wurde neu geladen)</small>" : "") + "</li>";
      }).join("") + "</ol><p>Gesamtdauer außerhalb von GRUMI: <b>" + esc(dauer(gesamt)) + "</b></p>" : "<h4>Tab/App-Wechsel: 0</h4>") +
      (e.length ? "<h4>Einfügeversuche: " + e.length + "</h4><ul>" + e.map(function (x) {
        return "<li>" + esc(uhr(x.zeit)) + " – " + (x.art === "drop" ? "hineingezogen, " : "") + esc(x.woerter) + (x.woerter === 1 ? " Wort" : " Wörter") + " (" + esc(x.zeichen) + " Zeichen) · " + (x.erlaubt ? "eingefügt" : "verhindert") + esc(mitText(x)) + "</li>";
      }).join("") + "</ul>" : "") +
      (k.length ? "<h4>Kopieren / Ausschneiden: " + k.length + "</h4><ul>" + k.map(function (x) {
        return "<li>" + esc(uhr(x.zeit)) + " – " + (x.art === "cut" ? "ausschneiden" : "kopieren") + ", " + esc(x.zeichen) + " Zeichen markiert · verhindert" + esc(mitText(x)) + "</li>";
      }).join("") + "</ul>" : "") +
      (s.length ? "<h4>Auffällig große Texteingaben: " + s.length + "</h4><ul>" + s.map(function (x) {
        return "<li>" + esc(uhr(x.zeit)) + " – " + esc(x.woerter) + " neue Wörter in höchstens " + esc(x.sekunden) + " Sekunden (" + esc(x.vorher) + " → " + esc(x.nachher) + " Wörter)</li>";
      }).join("") + "</ul>" : "") +
      '<p class="pp-quelle">Festgehalten werden nur technische Ereignisse des Browsers. Welche Seite oder App geöffnet war, lässt sich nicht erkennen. Bei Deutsch- und Englisch-Proben steht seit 24.11.2026 auch der Text da, der kopiert oder eingefügt werden sollte (höchstens 300 Zeichen). ' +
      "Nichts davon ändert Punkte oder Note – was die Vorgänge bedeuten, entscheidest du.</p></details>";
  }
  global.ProbeProtokoll = { html: html, kurz: kurz, uebersicht: uebersicht, kopierZahl: kopierZahl, kopierListe: kopierListe, kopierHtml: kopierHtml, kopierZeile: kopierZeile };
})(window);
