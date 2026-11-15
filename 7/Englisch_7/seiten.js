/* Englisch 7: Vorgaben für die Grammatik-, Wordbank- und Extra-Seiten der Units 2–4 (Baukasten js/grammatik.js, Aussehen wie
 * Englisch 8M). Jede Seite ruft zuerst E7Seite(unit, art) auf – art "g" = Grammatik (unitN/grammatik/), "w" = Wordbank-Übungen
 * (unitN/wordbank/), "x" = Extra-Übung zum Fördern (unitN/extra/, erreichbar über die Förder-Links „Das ist noch schwer?“) –
 * und danach Grammatik.seite({ nr, modul, kurz, titel, … }) mit ihren Inhalten.
 * nr = Platz in der Liste unten (für „Thema 2 von 4“ und die Pfeile unten), modul = Kennung im Lernstand (wie ls in themen.js).
 * Welche Seite zu welcher Unit gehört, steht hier und in themen.js – beides zusammen ändern.
 * „Üben“ (basis) gilt für 7R und 7M, „Sicher werden“ (plus) ist für 7M Pflicht und für 7R freiwillig.
 * Unit 1 hat noch die älteren Einzelseiten (unit1/grammatik/), die diese Datei nicht nutzen.
 */
(function () {
  "use strict";
  var UNITS = {
    2: {
      g: [["g5-going-to-future.html", "G5 · going to-future"], ["g6-present-perfect.html", "G6 · Present perfect: Aussagen und Verneinung"],
          ["g7-present-perfect-questions.html", "G7 · Present perfect: Fragen und Kurzantworten"],
          ["present-perfect-or-simple-past.html", "Present perfect oder simple past?"]],
      w: [["sports-and-activities.html", "Sports and activities"], ["what-time-is-it.html", "What time is it?"],
          ["have-you-ever.html", "Have you ever …?"]],
      x: [["going-to.html", "Extra: going to Schritt für Schritt"], ["have-has-participle.html", "Extra: have/has + 3. Form"],
          ["have-has-questions.html", "Extra: Fragen mit Have/Has"], ["signal-words.html", "Extra: Signalwörter erkennen"],
          ["adjectives.html", "Extra: Adjektive und Gegenteile"], ["jobs-around-the-house.html", "Extra: Jobs around the house"]]
    },
    3: {
      g: [["g8-word-order.html", "G8 · Ort vor Zeit: die Satzstellung"], ["g9-some-any-no.html", "G9 · some, any, no"]],
      w: [["public-transport.html", "Public transport"], ["giving-advice.html", "Giving advice"], ["picture-description.html", "Picture description"]],
      x: [["word-order.html", "Extra: Ort vor Zeit Schritt für Schritt"], ["some-any.html", "Extra: some oder any?"], ["transport.html", "Extra: Unterwegs mit Bus und Bahn"],
          ["advice.html", "Extra: Ratschläge geben"], ["prepositions.html", "Extra: Wo ist was? Präpositionen"]]
    },
    4: {
      g: [["g10-more-most.html", "G10 · Steigerung mit more/most und less/least"], ["g11-much-many.html", "G11 · much und many"]],
      w: [["social-media.html", "Social media and technology"], ["summer-camp.html", "Summer camp"]],
      x: [["comparison.html", "Extra: Steigern Schritt für Schritt"], ["much-many.html", "Extra: much oder many?"], ["social-media.html", "Extra: Social media words"],
          ["ordinal-numbers.html", "Extra: Ordnungszahlen"], ["british-american.html", "Extra: British und American English"]]
    }
  };
  var ARTEN = {
    g: { name: "Grammatik", bnr: 1, kurz: "G", wort: "Thema" },
    w: { name: "Wordbanks", bnr: 2, kurz: "W", wort: "Wordbank" },
    x: { name: "Extra-Übungen", bnr: 3, kurz: "X", wort: "Extra-Übung" }
  };
  var GEMEINSAM = {
    kurs: "e7", fach: "Englisch 7", kiHilfe: true,
    basisName: "Üben", basisEyebrow: "Schritt für Schritt", plusName: "Sicher werden", plusEyebrow: "7M: gehört dazu · 7R: freiwillig",
    plusHinweis: "🎯 <b>Jetzt wird es etwas kniffliger.</b> Für 7M gehören diese Aufgaben dazu, für 7R sind sie freiwillig. Lies bei Bedarf oben noch einmal nach."
  };
  function setzen(v) { Object.keys(GEMEINSAM).forEach(function (k) { if (!(k in v)) v[k] = GEMEINSAM[k]; }); window.Grammatik.vorgaben(v); }
  window.E7Seite = function (unit, art) {
    var a = ARTEN[art] || ARTEN.g;
    var v = { bereich: "Unit " + unit + " · " + a.name, bnr: unit * 10 + a.bnr, prefix: "e7-u" + unit + "-" + art, bildBasis: "../../images/",
      fachHref: "../../index.html", indexHref: "../../index.html#thema-u" + unit, indexName: "Unit " + unit + " · Übersicht",
      themaWort: a.wort, kurzPrefix: a.kurz, themen: UNITS[unit][art] };
    // Extra-Übungen: freiwillig, ohne „Sicher werden“-Pflicht; der Kopf führt zurück zur Aufgabe, von der das Kind kam
    if (art === "x") { v.plusName = "Noch mehr üben"; v.plusEyebrow = "freiwillig"; v.plusHinweis = "Wenn du magst: noch ein paar Aufgaben. Danach geh zurück zu deiner Aufgabe."; v.basisHinweis = '<a class="knopf zweit" href="javascript:history.back()">← zurück zur Aufgabe</a>'; }
    setzen(v);
  };
  // Bildwörter für das Merkwissen einer Wordbank-Seite: E7Seite.bilder([["climbing", "climbing", "Klettern"], …])
  // -> HTML mit Bild (images/wb/<name>.jpg), englischem Wort und deutscher Bedeutung
  window.E7Seite.bilder = function (liste) {
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    return '<div class="wb-bilder">' + liste.map(function (b) {
      return '<figure><img src="../../images/wb/' + esc(b[0]) + '.jpg" alt="" loading="lazy"><figcaption><b>' + esc(b[1]) + "</b><span>" + esc(b[2] || "") + "</span></figcaption></figure>";
    }).join("") + "</div>";
  };
  window.E7Seite.UNITS = UNITS;
})();
