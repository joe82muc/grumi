/* Englisch 7 (7M und 7R): alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder (index.html),
 * die Sperre auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung (Klasse → Englisch).
 * Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe der Unit + Nummer – A = Unit 1, B = Unit 2, C = Unit 3, D = Unit 4, X = Extras.
 * Ein vergebenes Kürzel bleibt für immer bei seiner Seite; Neues bekommt die nächste freie Nummer.
 * Alles ist zuerst gesperrt. Vokabel- und Grammatiktests sind Proben (js/proben-module.js) und stehen beim
 * Freischalten unter den Seiten ihrer Unit.
 */
GrumiKursliste.bauen({
  name: "E7", kurs: "e7", stufe: 7, zuege: ["M", "R"], fach: "Englisch", titel: "Englisch 7", pfad: "/api/e7", ordner: "7/Englisch_7/",
  intro: "Wortschatz und Grammatik passend zu den Units. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt.",
  themen: [
    {
      id: "u1", nr: "01", titel: "Unit 1: Out and about in England", kurz: "Unit 1", icon: "🏰",
      text: "Wortschatz der Unit, vier Grammatikthemen und eine Lernliste zum Abfragen.",
      module: [
        { id: "u1-vokabeln", kz: "A1", titel: "Vokabeltrainer Unit 1", href: "unit1/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e7-u1-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u1-g1", kz: "A2", titel: "G1 · Simple past", href: "unit1/grammatik/g1-simple-past.html", art: "Grammatik", ls: "e7-u1-g1",
          text: "Die einfache Vergangenheit: regelmäßige und unregelmäßige Verben." },
        { id: "u1-g2", kz: "A3", titel: "G2 · Simple present: Aussagen und Verneinung", href: "unit1/grammatik/g2-simple-present.html", art: "Grammatik", ls: "e7-u1-g2",
          text: "Die einfache Gegenwart: sagen, was jemand regelmäßig tut – und verneinen." },
        { id: "u1-g3", kz: "A4", titel: "G3 · Simple present: Fragen und Kurzantworten", href: "unit1/grammatik/g3-questions.html", art: "Grammatik", ls: "e7-u1-g3",
          text: "Fragen mit do und does bilden und kurz antworten." },
        { id: "u1-g4", kz: "A5", titel: "G4 · Possessivpronomen", href: "unit1/grammatik/g4-possessivpronomen.html", art: "Grammatik", ls: "e7-u1-g4",
          text: "mine, yours, his, hers, ours, theirs – wem gehört was?" },
        { id: "u1-lernliste", kz: "A6", titel: "Lernliste zum Abfragen: Zoom in bis Numbers", href: "unit1/test/lernliste-zoom-in-bis-numbers.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest – zum Ausdrucken und Abfragen zu Hause." }
      ]
    },
    {
      id: "u2", nr: "02", titel: "Unit 2: Fun in Wales and Scotland", kurz: "Unit 2", icon: "🏔️",
      text: "Wortschatz der Unit.",
      module: [
        { id: "u2-vokabeln", kz: "B1", titel: "Vokabeltrainer Unit 2", href: "unit2/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e7-u2-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    },
    {
      id: "u3", nr: "03", titel: "Unit 3: Welcome to Ireland", kurz: "Unit 3", icon: "☘️",
      text: "Wortschatz der Unit.",
      module: [
        { id: "u3-vokabeln", kz: "C1", titel: "Vokabeltrainer Unit 3", href: "unit3/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e7-u3-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    },
    {
      id: "u4", nr: "04", titel: "Unit 4: USA – here we come!", kurz: "Unit 4", icon: "🗽",
      text: "Wortschatz der Unit.",
      module: [
        { id: "u4-vokabeln", kz: "D1", titel: "Vokabeltrainer Unit 4", href: "unit4/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e7-u4-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    },
    {
      id: "extras", nr: "05", titel: "Selbst testen", kurz: "Selbst testen", icon: "🎯",
      text: "Stelle dir einen eigenen Vokabeltest aus den Units zusammen.",
      module: [
        { id: "testgenerator", kz: "X1", titel: "Vokabeltest selbst zusammenstellen", href: "testgenerator.html", art: "Wortschatz",
          text: "Units und Kategorien wählen, Richtung und Anzahl festlegen – und los." }
      ]
    }
  ]
});
