/* Deutsch 7: die korrigierte Probe als Seite – für das Kind (korrektur.html), zum Ausdrucken für die Eltern und als
 * Vorschau für die Lehrkraft (proben-lehrer.html). Aussehen: probe.css (auch die Druckansicht).
 *
 *   D7Korrektur.html(k)   k = Korrektur vom Server (/api/d7/proben/korrektur): Kopf, Kommentar der Lehrkraft,
 *                          je Aufgabe: Aufgabe · Deine Antwort · Punkte · Korrektur · Dein nächster Schritt
 * Bei längeren Texten: Originaltext, „Das ist dir gelungen“, „Daran solltest du arbeiten“, Bewertung nach Raster.
 * Die Seite nennt keine Diagnose: Teile, die nicht gewertet wurden, heißen nur „nicht bewertet“.
 */
(function (global) {
  "use strict";
  var esc = global.D7Lesetext.esc;
  function zahl(n) { return String(Math.round(Number(n) * 2) / 2).replace(".", ","); }
  function datum(iso) { var d = new Date(iso); return isNaN(d) ? "" : d.toLocaleDateString("de-DE", { day: "2-digit", month: "2-digit", year: "numeric" }); }
  function teil(titel, inhalt, klasse) { return inhalt ? '<div class="k-teil"><span>' + titel + '</span><div class="' + (klasse || "") + '">' + inhalt + "</div></div>" : ""; }
  function p(text) { return "<p>" + esc(text) + "</p>"; }

  function antwort(a) {
    if (a.felder) {
      return '<ul class="k-zeilen">' + a.felder.map(function (f) {
        var r = f.punkte >= f.max;
        return '<li class="' + (!f.gewertet ? "aus" : r ? "r" : "f") + '"><span>' + esc(f.label) + "</span><b>" + (f.given ? esc(f.given) : "–") + "</b><small>" +
          (!f.gewertet ? "nicht bewertet" : r ? "✓ richtig" : "richtig: " + esc(f.loesung)) + "</small></li>";
      }).join("") + "</ul>";
    }
    if (Array.isArray(a.given)) {
      return '<ul class="k-zeilen">' + a.given.map(function (g, i) {
        var soll = Array.isArray(a.loesung) ? a.loesung[i] : "", r = g === soll;
        return '<li class="' + (a.nichtBewertet ? "aus" : r ? "r" : "f") + '"><span>' + esc((a.labels || [])[i] || "") + "</span><b>" + (g ? esc(g) : "–") + "</b><small>" +
          (r ? "✓ richtig" : "richtig: " + esc(soll)) + "</small></li>";
      }).join("") + "</ul>";
    }
    return '<div class="k-antwort' + (a.given ? "" : " leer") + '">' + (a.given ? esc(a.given) : "Keine Antwort.") + "</div>";
  }
  function raster(a, mitText) {
    return '<table class="k-raster"><thead><tr><th>' + (a.type === "schreiben" ? "Bereich" : "Das wurde erwartet") + '</th><th class="p">Punkte</th></tr></thead><tbody>' + a.kriterien.map(function (k) {
      return '<tr class="' + (k.gewertet ? "" : "aus") + '"><td><b>' + esc(k.text) + "</b>" + (mitText && k.begruendung ? "<br>" + esc(k.begruendung) : "") + '</td><td class="p">' +
        (k.gewertet ? zahl(k.punkte) + " / " + zahl(k.max) : "nicht bewertet") + "</td></tr>";
    }).join("") + "</tbody></table>";
  }
  function punkte(a) {
    if (a.nichtBewertet) return '<span class="k-punkte ohne">nicht bewertet</span>';
    return '<span class="k-punkte' + (a.points >= a.max ? " voll" : a.points === 0 ? " null" : "") + '">' + zahl(a.points) + " / " + zahl(a.max) + "</span>";
  }
  function aufgabe(a, texte) {
    var bezug = a.text ? (texte.filter(function (t) { return t.id === a.text; })[0] || {}) : null;
    var kopf = '<div class="k-kopf"><b>Aufgabe ' + a.nr + "</b>" + punkte(a) + "</div>" +
      teil("Aufgabe", p(a.prompt) + (a.vorgabe ? '<div class="vorgabe">' + esc(a.vorgabe) + "</div>" : "") + (a.material ? '<div class="material">' + esc(a.material) + "</div>" : "") + (bezug && (bezug.titel || bezug.art) ? '<p><small>Zum Text: „' + esc(bezug.titel || bezug.art) + "“</small></p>" : ""));
    if (a.type === "schreiben") {
      return '<section class="k-aufgabe lang">' + kopf +
        teil("Dein Originaltext" + (a.woerter ? " (" + a.woerter + " Wörter)" : ""), antwort(a)) +
        teil("Das ist dir gelungen", a.gelungen && a.gelungen.length ? '<ul class="k-liste">' + a.gelungen.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        teil("Daran solltest du arbeiten", a.arbeiten && a.arbeiten.length ? '<ul class="k-liste">' + a.arbeiten.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>" : "") +
        teil("Bewertung", raster(a, true) + '<p style="margin-top:6px"><b>Gesamt: ' + (a.nichtBewertet ? "nicht bewertet" : zahl(a.points) + " von " + zahl(a.max) + " Punkten") + "</b></p>") +
        teil("Korrektur", a.comment ? p(a.comment) : "") +
        teil("Dein nächster Schritt", a.hinweis ? p(a.hinweis) : "", "k-schritt") + "</section>";
    }
    var korrektur = a.comment ? p(a.comment) : "";
    if (a.type !== "offen" && !a.felder && !Array.isArray(a.given) && a.loesung && a.points < a.max) korrektur += p("Richtig ist: " + a.loesung);
    return '<section class="k-aufgabe">' + kopf +
      teil("Deine Antwort", antwort(a)) +
      (a.type === "offen" && a.kriterien && a.kriterien.length > 1 ? teil("Punkte im Einzelnen", raster(a, false)) : "") +
      teil("Korrektur", korrektur) +
      teil("Dein nächster Schritt", a.hinweis ? p(a.hinweis) : "", "k-schritt") + "</section>";
  }

  function html(k) {
    var klasse = k.zug === "M" ? "M7" : "R7";
    return '<div class="kopfkarte"><div><div class="eyebrow">Korrigierte Probe · ' + esc(k.fach || "Deutsch 7") + "</div><h1>" + esc(k.title) + "</h1>" +
      "<dl><dt>Klasse</dt><dd>" + esc(k.klasse || "") + " (" + klasse + ")</dd><dt>Variante</dt><dd>" + esc(k.variante) + (k.variante === "B" ? " (Nachschreiber)" : "") + "</dd>" +
      "<dt>Geschrieben am</dt><dd>" + datum(k.datum) + "</dd><dt>Schülerkennung</dt><dd>Code " + esc(k.code) + '</dd><dt class="nur-druck">Name</dt><dd class="nur-druck">________________________________</dd></dl></div>' +
      '<div class="ergebnis"><span>Punkte</span><strong>' + zahl(k.score) + " / " + zahl(k.total) + "</strong><span>" + k.percent + " %</span>" + (k.grade ? '<span class="note">Note ' + esc(k.grade) + "</span>" : "") + "</div></div>" +
      (k.lehrerKommentar ? '<div class="k-lehrer" style="margin-top:14px"><div class="k-teil" style="margin-top:0"><span>Kommentar deiner Lehrkraft</span><p style="white-space:pre-line;margin:0">' + esc(k.lehrerKommentar) + "</p></div></div>" : "") +
      '<div id="k-aufgaben" style="margin-top:14px">' + k.aufgaben.map(function (a) { return aufgabe(a, k.texte || []); }).join("") + "</div>" +
      '<div class="unterschrift"><div>Datum, Unterschrift einer/eines Erziehungsberechtigten</div><div>Das nehme ich mir für das nächste Mal vor:</div></div>';
  }

  global.D7Korrektur = { html: html, zahl: zahl, datum: datum };
})(window);
