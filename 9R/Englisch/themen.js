/* Englisch 9R: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder (index.html), die Sperre
 * auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung (Klasse → Englisch).
 * Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe der Unit + Nummer – A = Unit 1 (B, C, D sind für die Units 2 bis 4 vorgesehen).
 * Ein vergebenes Kürzel bleibt für immer bei seiner Seite; Neues bekommt die nächste freie Nummer.
 * Alles ist zuerst gesperrt. Vokabeltests, Kurztests und die Grammatikprobe sind Proben (js/proben-module.js)
 * und stehen beim Freischalten unter den Seiten ihrer Unit.
 *
 * Die 9M-Klassen (9M/Englisch_9/themen.js) nutzen den Vokabeltrainer der Unit 1 und den Blogpost (A6) mit: gleiche
 * Kennungen „u1-vokabeln“ und „u1-blog“, gleicher Speicher auf dem Server (/api/e9, getrennt nach Klasse).
 */
GrumiKursliste.bauen({
  name: "E9R", kurs: "e9", stufe: 9, zuege: ["R"], fach: "Englisch", titel: "Englisch 9R", pfad: "/api/e9", ordner: "9R/Englisch/",
  intro: "Wortschatz und Grammatik passend zu den Units. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt.",
  andere: { zug: "M", titel: "Englisch 9M", href: "9M/Englisch_9/index.html" },
  themen: [
    {
      id: "u1", nr: "01", titel: "Unit 1: Around Australia", kurz: "Unit 1", icon: "🦘",
      text: "Wortschatz der Unit und vier Grammatikthemen.",
      module: [
        { id: "u1-vokabeln", kz: "A1", titel: "Vokabeltrainer Unit 1", href: "unit1/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u1-vokabeln",
          text: "Alle Wörter mit Aussprache, Karteikarten und KI-Beispielsätzen." },
        { id: "u1-g1", kz: "A2", titel: "G1 · Simple past", href: "unit1/grammatik/g1-simple-past.html", art: "Grammatik", ls: "e9u1g1",
          text: "Die einfache Vergangenheit: regelmäßige und unregelmäßige Verben." },
        // Zusatz zu G1 (seit 09.10.2026): Die Seite gehört 9R und 9M gemeinsam – Umfang und Notenschlüssel richten sich nach dem Code
        { id: "u1-blog", kz: "A6", titel: "Schreiben · Blog post: My trip", href: "unit1/schreiben/blog-post.html", art: "Schreiben", ls: "e9-u1-blog",
          text: "Das simple past anwenden: von einer Reise erzählen – die KI korrigiert und gibt Punkte." },
        { id: "u1-g2", kz: "A3", titel: "G2 · Will-future", href: "unit1/grammatik/g2-will-future.html", art: "Grammatik", ls: "e9u1g2",
          text: "Die Zukunft mit will: Vermutungen, Hoffnungen und Pläne, die noch nicht fest sind." },
        { id: "u1-g3", kz: "A4", titel: "G3 · If-clauses Typ I", href: "unit1/grammatik/g3-if-clauses.html", art: "Grammatik", ls: "e9u1g3",
          text: "Bedingungssätze: Was passiert, wenn …?" },
        { id: "u1-g4", kz: "A5", titel: "G4 · Present progressive", href: "unit1/grammatik/g4-present-progressive.html", art: "Grammatik", ls: "e9u1g4",
          text: "Die Verlaufsform der Gegenwart: Was passiert gerade?" }
      ]
    }
  ]
});
