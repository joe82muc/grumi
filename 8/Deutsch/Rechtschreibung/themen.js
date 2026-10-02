/* Deutsch 8 (8M und 8R) · Rechtschreibung: Vorgaben für alle Themenseiten (Baukasten js/grammatik.js).
 * Themen nach LehrplanPLUS Mittelschule D8 (Richtig schreiben): Groß- und Kleinschreibung (Nominalisierungen,
 * erweiterter nominaler Kern), Getrennt- und Zusammenschreibung, gleich klingende Wörter (Homonyme), Fremdwörter,
 * Kommasetzung (Infinitivgruppen, Appositionen, indirekte Rede, längere Satzfolgen), weitere Satzzeichen
 * (Semikolon, Gedankenstrich, Ergänzungsstrich, Auslassungspunkte). Plus = M-Zug, für R-Klassen freiwillig. */
Grammatik.vorgaben({
  kurs: "d8", bereich: "Rechtschreibung", bnr: 2, prefix: "d8-rs-", fach: "Deutsch 8", kurzPrefix: "R",
  fachHref: "../index.html", indexHref: "../index.html#rechtschreibung", indexName: "Alle Rechtschreib-Themen",
  themen: [
    ["rs_01.html", "Nominalisierungen"], ["rs_02.html", "Getrennt oder zusammen?"], ["rs_03.html", "Gleich klingende Wörter"],
    ["rs_04.html", "Fremdwörter"], ["rs_05.html", "Kommasetzung"], ["rs_06.html", "Weitere Satzzeichen"]
  ]
});
