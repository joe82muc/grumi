/* Deutsch 7 (7M und 7R) · Grammatik: Vorgaben für alle Themenseiten (Baukasten js/grammatik.js).
 * Themen nach LehrplanPLUS Mittelschule D7 4.2 (Regel- und M-Klasse): Relativ-, Demonstrativ- (M: Reflexiv-)pronomen,
 * Zeitformen bis Futur II, Aktiv und Passiv, Konjunktiv I (M: auch II), Satzglieder und Kausaladverbiale,
 * Satzreihe und Satzgefüge, Subjekt- und Objektsatz (Gliedsätze). Plus = M-Zug, für R-Klassen freiwillig. */
Grammatik.vorgaben({
  kurs: "d7", bereich: "Grammatik", bnr: 2, prefix: "d7-gr-", fach: "Deutsch 7", kurzPrefix: "G",
  // Freischaltung durch die Lehrkraft je Klasse: Liste der Module in ../themen.js (window.D7)
  liste: { name: "D7", src: "../themen.js" },
  fachHref: "../index.html", indexHref: "../index.html#grammatik", indexName: "Alle Grammatik-Themen",
  themen: [
    ["gr_01.html", "Wortarten und Pronomen"], ["gr_02.html", "Zeitformen bis Futur II"], ["gr_03.html", "Aktiv und Passiv"],
    ["gr_04.html", "Konjunktiv"], ["gr_05.html", "Satzglieder und Kausaladverbiale"], ["gr_06.html", "Satzreihe und Satzgefüge"],
    ["gr_07.html", "Gliedsätze"]
  ]
});
