/* Englisch 8M: Vorgaben für die Grammatik-, Wordbank- und Verben-Seiten (Baukasten js/grammatik.js, Aussehen wie Deutsch 7/8).
 * Jede Seite ruft zuerst E8MSeite(unit, art) auf – art "g" = Grammatik (unitN/grammatik/), "w" = Wordbank (unitN/wordbank/),
 * E8MSeite("v") = unregelmäßige Verben (verben/) – und danach Grammatik.seite({ nr, modul, kurz, titel, … }) mit ihren Inhalten.
 * nr = Platz in der Liste unten (für „Thema 2 von 4“ und die Pfeile unten), modul = Kennung im Lernstand (wie ls in themen.js).
 * Welche Grammatik zu welcher Unit gehört, steht hier und in themen.js – beides zusammen ändern.
 * Im M-Zug gehören beide Abschnitte dazu: „Üben“ und „Sicher werden“. reset: true = Knopf „Modul neu beginnen“.
 */
(function () {
  "use strict";
  var UNITS = {
    1: {
      g: [["g1-present-perfect.html", "G1 · Present perfect mit for und since"], ["g2-simple-past.html", "G2 · Simple past"],
          ["g3-adverbs.html", "G3 · Adverbien"], ["g4-simple-present.html", "G4 · Simple present"]],
      w: [["interviewing-a-new-arrival.html", "Interviewing a new arrival"], ["talking-about-culture.html", "Talking about culture"]]
    },
    2: {
      g: [["g5-reflexive-pronouns.html", "G5 · Reflexivpronomen"], ["g6-word-order.html", "G6 · Satzstellung: Ort, Zeit, Art und Weise"],
          ["g7-simple-present-future.html", "G7 · Simple present für Zukünftiges"]],
      w: [["a-trip-to-the-country.html", "A trip to the country"], ["at-the-airport.html", "At the airport"]]
    },
    3: {
      g: [["g8-much-many-few-little.html", "G8 · much, many, (a) few, (a) little"], ["g9-going-to-future.html", "G9 · going to-future"],
          ["g10-comparison.html", "G10 · Adjektive steigern"]],
      w: [["ideas-and-suggestions.html", "Ideas and suggestions"], ["jobs.html", "Jobs"]]
    },
    4: {
      g: [["g11-passive.html", "G11 · Das Passiv"], ["g12-relative-clauses.html", "G12 · Relativsätze mit who, which, that"],
          ["g13-as-as.html", "G13 · Vergleiche mit (not) as … as"]],
      w: [["social-media-and-technology.html", "Social media and technology"], ["sports-and-activities.html", "Sports and activities"],
          ["job-applications.html", "Job applications"]]
    }
  };
  var VERBEN = [["simple-past.html", "Verben einsetzen: simple past"], ["past-participle.html", "Verben einsetzen: 3. Form"]];
  var GEMEINSAM = {
    kurs: "e8", fach: "Englisch 8M", reset: true, kiHilfe: true,
    basisName: "Üben", basisEyebrow: "Schritt für Schritt", plusName: "Sicher werden", plusEyebrow: "gehört dazu · etwas kniffliger",
    plusHinweis: "🎯 <b>Jetzt wird es etwas kniffliger.</b> Auch diese Aufgaben gehören zu deinem Stand. Lies bei Bedarf oben noch einmal nach."
  };
  function setzen(v) { Object.keys(GEMEINSAM).forEach(function (k) { if (!(k in v)) v[k] = GEMEINSAM[k]; }); window.Grammatik.vorgaben(v); }
  window.E8MSeite = function (unit, art) {
    if (unit === "v") {
      setzen({ bereich: "Unregelmäßige Verben", bnr: 50, prefix: "e8-m-v", bildBasis: "../images/", fachHref: "../index.html", indexHref: "../index.html#thema-verben",
        indexName: "Unregelmäßige Verben · Übersicht", themaWort: "Übung", kurzPrefix: "V", themen: VERBEN });
      return;
    }
    var g = art === "g";
    setzen({ bereich: "Unit " + unit + " · " + (g ? "Grammatik" : "Wordbanks"), bnr: unit * 10 + (g ? 1 : 2), prefix: "e8-m-u" + unit + "-" + art, bildBasis: "../../images/",
      fachHref: "../../index.html", indexHref: "../../index.html#thema-u" + unit, indexName: "Unit " + unit + " · Übersicht",
      themaWort: g ? "Thema" : "Wordbank", kurzPrefix: g ? "G" : "W", themen: UNITS[unit][art] });
  };
  // Bildwörter für das Merkwissen einer Wordbank-Seite: E8MSeite.bilder([["nurse", "nurse", "Krankenpfleger, Krankenschwester"], …])
  // -> HTML mit Bild (images/wb/<name>.jpg), englischem Wort und deutscher Bedeutung
  window.E8MSeite.bilder = function (liste) {
    var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); };
    return '<div class="wb-bilder">' + liste.map(function (b) {
      return '<figure><img src="../../images/wb/' + esc(b[0]) + '.jpg" alt="" loading="lazy"><figcaption><b>' + esc(b[1]) + "</b><span>" + esc(b[2] || "") + "</span></figcaption></figure>";
    }).join("") + "</div>";
  };
  window.E8MSeite.UNITS = UNITS;
  window.E8MSeite.VERBEN = VERBEN;
})();
