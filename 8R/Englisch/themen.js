/* Englisch 8R: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder (index.html), die Sperre
 * auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung (Klasse → Englisch).
 * Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe der Unit + Nummer – A = Unit 1, B = Unit 2, C = Unit 3, D = Unit 4.
 * Ein vergebenes Kürzel bleibt für immer bei seiner Seite; Neues bekommt die nächste freie Nummer.
 * Alles ist zuerst gesperrt. Die Vokabeltests sind Proben (js/proben-module.js) und stehen beim Freischalten
 * unter den Seiten ihrer Unit.
 */
GrumiKursliste.bauen({
  name: "E8", kurs: "e8", stufe: 8, zuege: ["R"], fach: "Englisch", titel: "Englisch 8R", pfad: "/api/e8", ordner: "8R/Englisch/",
  intro: "Wortschatz passend zu den Units. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt.",
  themen: [
    {
      id: "u1", nr: "01", titel: "Unit 1: Welcome to New York!", kurz: "Unit 1", icon: "🗽",
      text: "Wortschatz rund um New York, Einwanderung und das Leben in einer multikulturellen Stadt.",
      module: [
        { id: "u1-vokabeln", kz: "A1", titel: "Vokabeltrainer Unit 1", href: "unit1/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-u1-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    },
    {
      id: "u2", nr: "02", titel: "Unit 2: One country – different states", kurz: "Unit 2", icon: "🗺️",
      text: "Wortschatz zu den US-Bundesstaaten, Reisen mit Schiff und Flugzeug und dem Wörterbuch.",
      module: [
        { id: "u2-vokabeln", kz: "B1", titel: "Vokabeltrainer Unit 2", href: "unit2/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-u2-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    },
    {
      id: "u3", nr: "03", titel: "Unit 3: Southern life", kurz: "Unit 3", icon: "🌞",
      text: "Wortschatz zum Leben im Süden der USA: Essen und Trinken, Wetter und Klima, phrasal verbs.",
      module: [
        { id: "u3-vokabeln", kz: "C1", titel: "Vokabeltrainer Unit 3", href: "unit3/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-u3-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    },
    {
      id: "u4", nr: "04", titel: "Unit 4: Working in Canada", kurz: "Unit 4", icon: "🍁",
      text: "Wortschatz rund um Kanada, Berufe, Bewerbungen und das Arbeiten im Ausland.",
      module: [
        { id: "u4-vokabeln", kz: "D1", titel: "Vokabeltrainer Unit 4", href: "unit4/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-u4-vokabeln",
          text: "Alle Wörter mit Aussprache, Multiple Choice, Tippen und Karteikarten." }
      ]
    }
  ]
});
