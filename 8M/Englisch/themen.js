/* Englisch 8M: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder (index.html), die Sperre
 * auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung (Klasse → Englisch).
 * Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe der Unit + Nummer – A = Unit 1, B = Unit 2, C = Unit 3, D = Unit 4, V = unregelmäßige Verben.
 * Ein vergebenes Kürzel bleibt für immer bei seiner Seite; Neues bekommt die nächste freie Nummer.
 * Alles ist zuerst gesperrt. Vokabeltests und Grammatikproben sind Proben (js/proben-module.js) und stehen beim
 * Freischalten unter den Seiten ihrer Unit: je Unit zwei Vokabeltests (e8m-u<N>-test1/-test2) und zwei kleine
 * Grammatikproben (e8m-u<N>-gp1/-gp2, Zuordnung zu den Grammatik-Seiten in probeInhalt).
 *
 * Je Unit: Vokabeltrainer (trainer: true – zu ihm gehören die Vokabeltests), zwei Lernlisten zum Abfragen (zu jedem
 * Vokabeltest eine, zum Drucken und als Word-Datei), die Grammatik der Unit (G1 bis G13, je mit Regelheft-Eintrag) und
 * je Wordbank zwei Seiten: der Trainer mit Bildern (unitN/vokabular/wordbank-….html) und die Übungen (unitN/wordbank/).
 * Trainer und Lernlisten baut .codex-build/englisch8m-werkzeug aus den Wortlisten der Lehrkraft; Grammatik und
 * Wordbank-Übungen nutzen den Baukasten js/grammatik.js (Reihenfolge auch in seiten.js).
 *
 * Kennungen im Lernstand (ls): e8-m-… – Englisch 8R nutzt denselben Kurs „e8“ mit e8-u…; die Seiten sind verschieden.
 * reset: true – Kinder und Lehrkraft können jedes Modul neu beginnen; die Verwaltung zeigt dann weiter den besten Stand.
 */
GrumiKursliste.bauen({
  name: "E8M", kurs: "e8", stufe: 8, zuege: ["M"], fach: "Englisch", titel: "Englisch 8M", pfad: "/api/e8", ordner: "8M/Englisch/",
  reset: true,
  // Ein Kind der 8R (R-Klasse), das diese Übersicht öffnet, kommt zu seiner eigenen
  andere: { zug: "R", titel: "Englisch 8R", href: "8R/Englisch/index.html" },
  intro: "Wortschatz, Grammatik, Wordbanks und unregelmäßige Verben passend zu den Units. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt.",
  probeInhalt: {
    "e8m-u1-gp1": ["u1-g1", "u1-g2"], "e8m-u1-gp2": ["u1-g3", "u1-g4"],
    "e8m-u2-gp1": ["u2-g5"], "e8m-u2-gp2": ["u2-g6", "u2-g7"],
    "e8m-u3-gp1": ["u3-g8", "u3-g9"], "e8m-u3-gp2": ["u3-g10"],
    "e8m-u4-gp1": ["u4-g11"], "e8m-u4-gp2": ["u4-g12", "u4-g13"]
  },
  themen: [
    {
      id: "u1", nr: "01", titel: "Unit 1: Welcome to New York!", kurz: "Unit 1", icon: "🗽",
      text: "New York, Einwanderung und das Leben in einer bunten Großstadt – mit Wortschatz, Grammatik und Wordbanks.",
      module: [
        { id: "u1-vokabeln", kz: "A1", titel: "Vokabeltrainer Unit 1", href: "unit1/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-m-u1-vokabeln",
          text: "Alle Wörter mit Lautschrift und Aussprache: Multiple Choice, Tippen und Karteikarten." },
        { id: "u1-liste1", kz: "A2", titel: "Lernliste 1 zum Abfragen: Intro bis city words", href: "unit1/test/lernliste-1.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 1 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u1-liste2", kz: "A3", titel: "Lernliste 2 zum Abfragen: Text bis water transport", href: "unit1/test/lernliste-2.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 2 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u1-g1", kz: "A4", titel: "G1 · Present perfect mit for und since", href: "unit1/grammatik/g1-present-perfect.html", art: "Grammatik", ls: "e8-m-u1-g1",
          text: "Sagen, wie lange etwas schon so ist: have/has + 3. Form, for und since." },
        { id: "u1-g2", kz: "A5", titel: "G2 · Simple past", href: "unit1/grammatik/g2-simple-past.html", art: "Grammatik", ls: "e8-m-u1-g2",
          text: "Wiederholung: von Vergangenem erzählen, fragen und verneinen." },
        { id: "u1-g3", kz: "A6", titel: "G3 · Adverbien", href: "unit1/grammatik/g3-adverbs.html", art: "Grammatik", ls: "e8-m-u1-g3",
          text: "Sagen, wie jemand etwas tut: quickly, carefully, well – und der Unterschied zum Adjektiv." },
        { id: "u1-g4", kz: "A7", titel: "G4 · Simple present", href: "unit1/grammatik/g4-simple-present.html", art: "Grammatik", ls: "e8-m-u1-g4",
          text: "Wiederholung: Gewohnheiten und Tatsachen, das s bei he/she/it, Fragen mit do und does." },
        { id: "u1-wb1", kz: "A8", titel: "Wordbank · Interviewing a new arrival: Trainer", href: "unit1/vokabular/wordbank-interviewing-a-new-arrival.html", art: "Wortschatz", ls: "e8-m-u1-wb1",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u1-w1", kz: "A9", titel: "Wordbank · Interviewing a new arrival: Übungen", href: "unit1/wordbank/interviewing-a-new-arrival.html", art: "Übung", ls: "e8-m-u1-w1",
          text: "Jemanden befragen, der neu im Land ist: Fragen stellen, antworten, nachfragen." },
        { id: "u1-wb2", kz: "A10", titel: "Wordbank · Talking about culture: Trainer", href: "unit1/vokabular/wordbank-talking-about-culture.html", art: "Wortschatz", ls: "e8-m-u1-wb2",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u1-w2", kz: "A11", titel: "Wordbank · Talking about culture: Übungen", href: "unit1/wordbank/talking-about-culture.html", art: "Übung", ls: "e8-m-u1-w2",
          text: "Über Sprachen, Essen, Musik und Herkunft sprechen – auch über die eigene." }
      ]
    },
    {
      id: "u2", nr: "02", titel: "Unit 2: One country – different states", kurz: "Unit 2", icon: "🗺️",
      text: "Die Bundesstaaten der USA, Natur und Reisen mit dem Flugzeug – mit Wortschatz, Grammatik und Wordbanks.",
      module: [
        { id: "u2-vokabeln", kz: "B1", titel: "Vokabeltrainer Unit 2", href: "unit2/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-m-u2-vokabeln",
          text: "Alle Wörter mit Lautschrift und Aussprache: Multiple Choice, Tippen und Karteikarten." },
        { id: "u2-liste1", kz: "B2", titel: "Lernliste 1 zum Abfragen: Intro bis air travel", href: "unit2/test/lernliste-1.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 1 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u2-liste2", kz: "B3", titel: "Lernliste 2 zum Abfragen: Text bis phrases with -ing", href: "unit2/test/lernliste-2.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 2 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u2-g5", kz: "B4", titel: "G5 · Reflexivpronomen", href: "unit2/grammatik/g5-reflexive-pronouns.html", art: "Grammatik", ls: "e8-m-u2-g5",
          text: "myself, yourself, themselves: wenn jemand etwas für sich oder ganz allein tut." },
        { id: "u2-g6", kz: "B5", titel: "G6 · Satzstellung: Ort, Zeit, Art und Weise", href: "unit2/grammatik/g6-word-order.html", art: "Grammatik", ls: "e8-m-u2-g6",
          text: "Wiederholung: In welcher Reihenfolge stehen wie, wo und wann im Satz?" },
        { id: "u2-g7", kz: "B6", titel: "G7 · Simple present für Zukünftiges", href: "unit2/grammatik/g7-simple-present-future.html", art: "Grammatik", ls: "e8-m-u2-g7",
          text: "Fahrpläne, Stundenpläne, Programme: feste Termine in der Zukunft." },
        { id: "u2-wb1", kz: "B7", titel: "Wordbank · A trip to the country: Trainer", href: "unit2/vokabular/wordbank-a-trip-to-the-country.html", art: "Wortschatz", ls: "e8-m-u2-wb1",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u2-w1", kz: "B8", titel: "Wordbank · A trip to the country: Übungen", href: "unit2/wordbank/a-trip-to-the-country.html", art: "Übung", ls: "e8-m-u2-w1",
          text: "Landschaft, Tiere und Unternehmungen bei einem Ausflug aufs Land." },
        { id: "u2-wb2", kz: "B9", titel: "Wordbank · At the airport: Trainer", href: "unit2/vokabular/wordbank-at-the-airport.html", art: "Wortschatz", ls: "e8-m-u2-wb2",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u2-w2", kz: "B10", titel: "Wordbank · At the airport: Übungen", href: "unit2/wordbank/at-the-airport.html", art: "Übung", ls: "e8-m-u2-w2",
          text: "Vom Check-in bis zum Gate: Wörter und Sätze für den Flughafen." }
      ]
    },
    {
      id: "u3", nr: "03", titel: "Unit 3: Southern life", kurz: "Unit 3", icon: "🌞",
      text: "Das Leben im Süden der USA und in der Karibik: Essen, Berufswünsche, Abenteuer – mit Wortschatz, Grammatik und Wordbanks.",
      module: [
        { id: "u3-vokabeln", kz: "C1", titel: "Vokabeltrainer Unit 3", href: "unit3/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-m-u3-vokabeln",
          text: "Alle Wörter mit Lautschrift und Aussprache: Multiple Choice, Tippen und Karteikarten." },
        { id: "u3-liste1", kz: "C2", titel: "Lernliste 1 zum Abfragen: Intro bis Topic 2", href: "unit3/test/lernliste-1.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 1 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u3-liste2", kz: "C3", titel: "Lernliste 2 zum Abfragen: phrasal verbs bis Vocabulary skills", href: "unit3/test/lernliste-2.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 2 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u3-g8", kz: "C4", titel: "G8 · much, many, (a) few, (a) little", href: "unit3/grammatik/g8-much-many-few-little.html", art: "Grammatik", ls: "e8-m-u3-g8",
          text: "Mengen angeben: Was kann man zählen, was nicht?" },
        { id: "u3-g9", kz: "C5", titel: "G9 · going to-future", href: "unit3/grammatik/g9-going-to-future.html", art: "Grammatik", ls: "e8-m-u3-g9",
          text: "Wiederholung: über Pläne und Absichten sprechen." },
        { id: "u3-g10", kz: "C6", titel: "G10 · Adjektive steigern", href: "unit3/grammatik/g10-comparison.html", art: "Grammatik", ls: "e8-m-u3-g10",
          text: "Wiederholung: bigger, more interesting, the best – Dinge und Personen vergleichen." },
        { id: "u3-wb1", kz: "C7", titel: "Wordbank · Ideas and suggestions: Trainer", href: "unit3/vokabular/wordbank-ideas-and-suggestions.html", art: "Wortschatz", ls: "e8-m-u3-wb1",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u3-w1", kz: "C8", titel: "Wordbank · Ideas and suggestions: Übungen", href: "unit3/wordbank/ideas-and-suggestions.html", art: "Übung", ls: "e8-m-u3-w1",
          text: "Vorschläge machen, zustimmen, höflich ablehnen und einen Rat geben." },
        { id: "u3-wb2", kz: "C9", titel: "Wordbank · Jobs: Trainer", href: "unit3/vokabular/wordbank-jobs.html", art: "Wortschatz", ls: "e8-m-u3-wb2",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u3-w2", kz: "C10", titel: "Wordbank · Jobs: Übungen", href: "unit3/wordbank/jobs.html", art: "Übung", ls: "e8-m-u3-w2",
          text: "Berufe, Arbeitsorte, Tätigkeiten und Wege in den Beruf." }
      ]
    },
    {
      id: "u4", nr: "04", titel: "Unit 4: Working in Canada", kurz: "Unit 4", icon: "🍁",
      text: "Kanada, soziale Medien, Bewerbung und Praktikum – mit Wortschatz, Grammatik und Wordbanks.",
      module: [
        { id: "u4-vokabeln", kz: "D1", titel: "Vokabeltrainer Unit 4", href: "unit4/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e8-m-u4-vokabeln",
          text: "Alle Wörter mit Lautschrift und Aussprache: Multiple Choice, Tippen und Karteikarten." },
        { id: "u4-liste1", kz: "D2", titel: "Lernliste 1 zum Abfragen: Intro bis Topic 2", href: "unit4/test/lernliste-1.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 1 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u4-liste2", kz: "D3", titel: "Lernliste 2 zum Abfragen: Text bis Speaking skills", href: "unit4/test/lernliste-2.html", art: "Wortschatz",
          text: "Die Wörter für den Vokabeltest 2 – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." },
        { id: "u4-g11", kz: "D4", titel: "G11 · Das Passiv", href: "unit4/grammatik/g11-passive.html", art: "Grammatik", ls: "e8-m-u4-g11",
          text: "Sagen, was getan wird oder wurde: is made, was built." },
        { id: "u4-g12", kz: "D5", titel: "G12 · Relativsätze mit who, which, that", href: "unit4/grammatik/g12-relative-clauses.html", art: "Grammatik", ls: "e8-m-u4-g12",
          text: "Personen und Dinge genauer beschreiben und zwei Sätze verbinden." },
        { id: "u4-g13", kz: "D6", titel: "G13 · Vergleiche mit (not) as … as", href: "unit4/grammatik/g13-as-as.html", art: "Grammatik", ls: "e8-m-u4-g13",
          text: "Sagen, dass etwas genauso oder nicht so ist wie etwas anderes." },
        { id: "u4-wb1", kz: "D7", titel: "Wordbank · Social media and technology: Trainer", href: "unit4/vokabular/wordbank-social-media-and-technology.html", art: "Wortschatz", ls: "e8-m-u4-wb1",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u4-w1", kz: "D8", titel: "Wordbank · Social media and technology: Übungen", href: "unit4/wordbank/social-media-and-technology.html", art: "Übung", ls: "e8-m-u4-w1",
          text: "Geräte, soziale Medien, Informationen finden und sicher im Netz bleiben." },
        { id: "u4-wb2", kz: "D9", titel: "Wordbank · Sports and activities: Trainer", href: "unit4/vokabular/wordbank-sports-and-activities.html", art: "Wortschatz", ls: "e8-m-u4-wb2",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u4-w2", kz: "D10", titel: "Wordbank · Sports and activities: Übungen", href: "unit4/wordbank/sports-and-activities.html", art: "Übung", ls: "e8-m-u4-w2",
          text: "Sportarten mit go, play und do, Ausrüstung und Freizeit." },
        { id: "u4-wb3", kz: "D11", titel: "Wordbank · Job applications: Trainer", href: "unit4/vokabular/wordbank-job-applications.html", art: "Wortschatz", ls: "e8-m-u4-wb3",
          text: "Wörter und Sätze der Wordbank lernen – mit Bildern, Aussprache, Multiple Choice, Tippen und Karteikarten." },
        { id: "u4-w3", kz: "D12", titel: "Wordbank · Job applications: Übungen", href: "unit4/wordbank/job-applications.html", art: "Übung", ls: "e8-m-u4-w3",
          text: "Sich bewerben: Unterlagen, Stärken und die festen Sätze im Anschreiben." }
      ]
    },
    {
      id: "verben", nr: "05", titel: "Unregelmäßige Verben", kurz: "Verben", icon: "🔁",
      text: "go – went – gone: die 66 unregelmäßigen Verben lernen, einsetzen und sicher anwenden.",
      module: [
        { id: "v-trainer", kz: "V1", titel: "Verben-Trainer: drei Formen", href: "verben/trainer.html", art: "Wortschatz", ls: "e8-m-v-trainer",
          text: "Grundform, simple past und 3. Form – in vier Stufen von leicht bis schwer, mit Aussprache." },
        { id: "v-ueben1", kz: "V2", titel: "Verben einsetzen: simple past", href: "verben/simple-past.html", art: "Übung", ls: "e8-m-v1",
          text: "Die 2. Form in Sätzen und kleinen Geschichten – die KI hilft, wenn du nicht weiterkommst." },
        { id: "v-ueben2", kz: "V3", titel: "Verben einsetzen: 3. Form", href: "verben/past-participle.html", art: "Übung", ls: "e8-m-v2",
          text: "Die 3. Form im present perfect und im Passiv – die KI hilft, wenn du nicht weiterkommst." },
        { id: "v-liste", kz: "V4", titel: "Verbenliste zum Abfragen", href: "verben/lernliste.html", art: "Wortschatz",
          text: "Alle 66 Verben mit drei Formen – zum Ausdrucken, als Word-Datei und zum Abfragen zu Hause." }
      ]
    }
  ]
});
