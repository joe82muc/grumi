/* Deutsch 8 (8M und 8R) · Grammatik: Vorgaben für alle Themenseiten (Baukasten js/grammatik.js).
 * Themen nach LehrplanPLUS Mittelschule D8 4.2 (Regel- und M-Klasse): Wortarten sicher (M: Modalformen des Verbs),
 * Konjunktiv I und II, indirekte Rede, Satzreihe/Satzgefüge (M: Schachtelsatz), Finaladverbiale, Attribute und
 * Attributsätze. Plus = M-Zug, für R-Klassen freiwillig. */
Grammatik.vorgaben({
  kurs: "d8", bereich: "Grammatik und Sprache", bnr: 6, prefix: "d8-gr-", fach: "Deutsch 8", kurzPrefix: "G",
  // Freischaltung durch die Lehrkraft je Klasse: Liste der Module in ../themen.js (window.D8); diese Themen sind von sich aus offen
  liste: { name: "D8", src: "../themen.js" },
  fachHref: "../index.html", indexHref: "../index.html#grammatik", indexName: "Alle Grammatik-Themen",
  themen: [
    ["gr_01.html", "Wortarten und Modalverben"], ["gr_02.html", "Konjunktiv I und II"], ["gr_03.html", "Indirekte Rede"],
    ["gr_04.html", "Satzreihe, Satzgefüge, Schachtelsatz"], ["gr_05.html", "Satzglieder und Finaladverbiale"], ["gr_06.html", "Attribute und Attributsätze"]
  ]
});
