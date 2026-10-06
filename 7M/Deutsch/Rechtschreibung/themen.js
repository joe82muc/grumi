/* Deutsch 7 (7M und 7R) · Rechtschreibung: Vorgaben für alle Themenseiten (Baukasten js/grammatik.js).
 * Themen nach LehrplanPLUS Mittelschule D7 (Richtig schreiben): Strategien, Groß- und Kleinschreibung,
 * Getrennt- und Zusammenschreibung (Betonungsprobe), s-Laute und das/dass, Fremdwörter und Merkwörter,
 * Zeichensetzung (M: auch Einschübe und Infinitivgruppen), Worttrennung. Plus = M-Zug, für R-Klassen freiwillig. */
Grammatik.vorgaben({
  kurs: "d7", bereich: "Rechtschreibung und Sprachtraining", bnr: 6, prefix: "d7-rs-", fach: "Deutsch 7", kurzPrefix: "R",
  // Freischaltung durch die Lehrkraft je Klasse: Liste der Module in ../themen.js (window.D7)
  liste: { name: "D7", src: "../themen.js" },
  fachHref: "../index.html", indexHref: "../index.html#rechtschreibung", indexName: "Alle Rechtschreib-Themen",
  themen: [
    ["rs_01.html", "Rechtschreibstrategien"], ["rs_02.html", "Groß- und Kleinschreibung"], ["rs_03.html", "Getrennt oder zusammen?"],
    ["rs_04.html", "s-Laute und das/dass"], ["rs_05.html", "Fremdwörter und Merkwörter"], ["rs_06.html", "Kommasetzung"],
    ["rs_07.html", "Worttrennung"]
  ]
});
