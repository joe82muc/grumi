/* Englisch 8R: Vorgaben für die Grammatik- und Wordbank-Seiten (Baukasten js/grammatik.js, Aussehen wie Deutsch 7/8).
 * Jede Seite ruft zuerst E8Seite(unit, art) auf – art "g" = Grammatik (unitN/grammatik/), "w" = Wordbank (unitN/wordbank/) –
 * und danach Grammatik.seite({ nr, modul, kurz, titel, … }) mit ihren Inhalten.
 * nr = Platz in der Liste unten (für „Thema 2 von 4“ und die Pfeile unten), modul = Kennung im Lernstand (wie ls in themen.js).
 * Welche Grammatik zu welcher Unit gehört, steht hier und in themen.js – beides zusammen ändern.
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
  window.E8Seite = function (unit, art) {
    var g = art === "g";
    window.Grammatik.vorgaben({
      kurs: "e8", bereich: "Unit " + unit + " · " + (g ? "Grammatik" : "Wordbanks"), bnr: unit * 10 + (g ? 1 : 2), prefix: "e8-u" + unit + "-" + art,
      fach: "Englisch 8R", fachHref: "../../index.html", indexHref: "../../index.html#thema-u" + unit, indexName: "Unit " + unit + " · Übersicht",
      themaWort: g ? "Thema" : "Wordbank", kurzPrefix: g ? "G" : "W", themen: UNITS[unit][art],
      basisName: "Üben", basisEyebrow: "Schritt für Schritt", plusName: "Challenge", plusEyebrow: "freiwillig · für Schnelle",
      plusHinweis: "⭐ <b>Freiwillig:</b> Hier wird es etwas kniffliger. Die Aufgaben zählen nicht zu deinem Stand – probier sie aus, wenn du mit dem Üben fertig bist."
    });
  };
  window.E8Seite.UNITS = UNITS;
})();
