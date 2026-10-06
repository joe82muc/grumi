/* Probenmodus: Anzeige des Protokolls einer Abgabe für die Lehrkraft – für alle Fächer.
 * Der Browser des Kindes hält während einer Probe fest (js/probe-schutz.js): Wechsel in einen anderen Tab oder eine
 * andere App mit Uhrzeit und Dauer, Einfügeversuche, Kopieren und auffällig große Texteingaben – nur Zeiten und Mengen.
 * Der Server speichert das bei der Abgabe (probe-kind.js: protokollSauber).
 *
 *   ProbeProtokoll.html(abgabe)   Block zum Aufklappen (abgabe.protokoll, abgabe.verlassen)
 *   ProbeProtokoll.kurz(abgabe)   eine Zeile: „2 Wechsel (1 Minute 5 Sekunden) · 1 Einfügeversuch“ oder ""
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
      "@media print{.pp-box{display:none}}";
    doc.head.appendChild(s);
  }
  function teile(r) {
    var p = (r && r.protokoll) || {};
    return { w: p.wechsel || [], e: p.einfuegen || [], k: p.kopieren || [], s: p.spruenge || [] };
  }
  function kurz(r) {
    var t = teile(r), gesamt = t.w.reduce(function (n, x) { return n + (x.sekunden || 0); }, 0);
    return [t.w.length ? t.w.length + " Wechsel (" + dauer(gesamt) + ")" : "", t.e.length ? t.e.length + (t.e.length === 1 ? " Einfügeversuch" : " Einfügeversuche") : "",
      t.k.length ? t.k.length + "× Kopieren" : "", t.s.length ? t.s.length + (t.s.length === 1 ? " großer Textsprung" : " große Textsprünge") : ""].filter(Boolean).join(" · ");
  }
  function html(r) {
    stil();
    var t = teile(r), w = t.w, e = t.e, k = t.k, s = t.s;
    if (!w.length && !e.length && !k.length && !s.length) {
      return '<details class="pp-box"><summary>🔎 Probenüberwachung: ' + (r && r.verlassen ? esc(r.verlassen) + "× verlassen (ohne Zeitangaben)" : "nichts protokolliert") + "</summary>" +
        '<p class="pp-quelle">' + (r && r.verlassen ? "Diese Abgabe stammt aus der Zeit, bevor Uhrzeit und Dauer mitgeschickt wurden – bekannt ist nur die Anzahl."
          : "Während dieser Probe wurde kein Wechsel, kein Einfügen und kein Kopieren festgehalten.") + "</p></details>";
    }
    var gesamt = w.reduce(function (n, x) { return n + (x.sekunden || 0); }, 0);
    return '<details class="pp-box" open><summary>🔎 Probenüberwachung: ' + esc(kurz(r)) + "</summary>" +
      (w.length ? "<h4>Tab/App-Wechsel: " + w.length + "</h4><ol>" + w.map(function (x) {
        return "<li>" + esc(uhr(x.von)) + " – " + esc(uhr(x.bis)) + " → <b>" + esc(dauer(x.sekunden || 0)) + "</b>" +
          (x.art === "fokus" ? " <small>(Fenster ohne Eingabefokus)</small>" : x.art === "geschlossen" ? " <small>(Seite war geschlossen oder wurde neu geladen)</small>" : "") + "</li>";
      }).join("") + "</ol><p>Gesamtdauer außerhalb von GRUMI: <b>" + esc(dauer(gesamt)) + "</b></p>" : "<h4>Tab/App-Wechsel: 0</h4>") +
      (e.length ? "<h4>Einfügeversuche: " + e.length + "</h4><ul>" + e.map(function (x) {
        return "<li>" + esc(uhr(x.zeit)) + " – " + esc(x.woerter) + (x.woerter === 1 ? " Wort" : " Wörter") + " (" + esc(x.zeichen) + " Zeichen) · " + (x.erlaubt ? "eingefügt" : "verhindert") + "</li>";
      }).join("") + "</ul>" : "") +
      (k.length ? "<h4>Kopieren / Ausschneiden: " + k.length + "</h4><ul>" + k.map(function (x) {
        return "<li>" + esc(uhr(x.zeit)) + " – " + (x.art === "cut" ? "ausschneiden" : "kopieren") + ", " + esc(x.zeichen) + " Zeichen markiert · verhindert</li>";
      }).join("") + "</ul>" : "") +
      (s.length ? "<h4>Auffällig große Texteingaben: " + s.length + "</h4><ul>" + s.map(function (x) {
        return "<li>" + esc(uhr(x.zeit)) + " – " + esc(x.woerter) + " neue Wörter in höchstens " + esc(x.sekunden) + " Sekunden (" + esc(x.vorher) + " → " + esc(x.nachher) + " Wörter)</li>";
      }).join("") + "</ul>" : "") +
      '<p class="pp-quelle">Festgehalten werden nur technische Ereignisse des Browsers. Welche Seite oder App geöffnet war, lässt sich nicht erkennen; eingefügter Text wird nicht gespeichert. ' +
      "Nichts davon ändert Punkte oder Note – was die Vorgänge bedeuten, entscheidest du.</p></details>";
  }
  global.ProbeProtokoll = { html: html, kurz: kurz };
})(window);
