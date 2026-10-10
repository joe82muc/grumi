/* Englisch 9R: Vorgaben für die Wordbank-Übungen und die Grammatik-Seiten der Units 2 bis 4 (Baukasten js/grammatik.js,
 * Aussehen wie Englisch 8R). Jede Seite ruft zuerst E9Seite(unit, art) auf – art "g" = Grammatik (unitN/grammatik/),
 * "w" = Wordbank (unitN/wordbank/) – und danach Grammatik.seite({ nr, lsNr, modul, kurz, titel, … }) mit ihren Inhalten.
 * nr = Platz in der Liste unten (für „Wordbank 2 von 2“ und die Pfeile unten), modul = Kennung im Lernstand (wie ls in themen.js).
 * Die Grammatik von Unit 1 (G1 bis G4) hat eigene, ältere Seiten und steht hier nicht.
 * Alle Wortlisten und Übungen sind eigene – die Units geben nur das Thema vor.
 */
(function () {
  "use strict";
  var UNITS = {
    1: {
      g: [],
      w: [["talking-about-experiences.html", "Talking about experiences"], ["talking-about-being-ill.html", "Talking about being ill"]]
    },
    2: {
      g: [["g5-simple-present.html", "Simple present"], ["g6-word-order.html", "Word order"]],
      w: [["presenting-a-company.html", "Presenting a company"], ["sustainable-living.html", "Sustainable living"]]
    },
    3: {
      g: [["g7-past-progressive.html", "Past progressive"], ["g8-present-perfect.html", "Present perfect with for and since"]],
      w: [["talking-about-an-accident.html", "Talking about an accident"], ["describing-a-role-model.html", "Describing a role model"]]
    },
    4: {
      g: [["g9-going-to-future.html", "Going to-future"], ["g10-passive.html", "Passive"]],
      w: [["jobs-and-qualities.html", "Jobs and qualities"], ["talking-about-an-internship.html", "Talking about an internship"]]
    }
  };
  window.E9Seite = function (unit, art) {
    var g = art === "g";
    window.Grammatik.vorgaben({
      kurs: "e9", bereich: "Unit " + unit + " · " + (g ? "Grammatik" : "Wordbanks"), bnr: unit * 10 + (g ? 1 : 2), prefix: "e9-u" + unit + "-" + art,
      fach: "Englisch 9R", fachHref: "../../index.html", indexHref: "../../index.html#thema-u" + unit, indexName: "Unit " + unit + " · Übersicht",
      themaWort: g ? "Thema" : "Wordbank", kurzPrefix: g ? "G" : "W", themen: UNITS[unit][art],
      basisName: "Üben", basisEyebrow: "Schritt für Schritt", plusName: "Challenge", plusEyebrow: "freiwillig · für Schnelle",
      plusHinweis: "⭐ <b>Freiwillig:</b> Hier wird es etwas kniffliger. Die Aufgaben zählen nicht zu deinem Stand – probier sie aus, wenn du mit dem Üben fertig bist."
    });
  };
  window.E9Seite.UNITS = UNITS;
})();
