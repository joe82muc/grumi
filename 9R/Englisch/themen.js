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
  // Skill-Module (Listening, Reading, Speaking, Writing, Mediation, Quali-Fit …) nutzen die Bausteine von Deutsch 7/8
  // (7M/Deutsch/d7-kit.js). Diese Angaben schalten dort das Fach um: Name, Adresse auf dem Server, Speicher, Sprache
  // der Hörtexte. Englisch 9R hat nur einen Zug – freiwillige Zusatzaufgaben heißen „Challenge“.
  bausteine: { name: "Englisch 9R", api: "/api/e9", speicher: "grumi-e9-", klasse: "Englisch · Klasse 9R", anker: "thema-", sprache: "en", zug: "R", plusTag: "Challenge · freiwillig" },
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
          text: "Die Verlaufsform der Gegenwart: Was passiert gerade?" },
        // Wordbanks (seit 10.10.2026): je ein Trainer (gebaut mit .codex-build/englisch9r-werkzeug/bau-e9-wordbanks.js aus eigenen
        // Wortlisten) und eine Seite mit Übungen (Baukasten js/grammatik.js, Vorgaben in seiten.js). Kein trainer: true –
        // sonst zählten die Vokabeltests der Unit sie zu ihrem Inhalt.
        { id: "u1-wb1", kz: "A7", titel: "Wordbank · Talking about experiences: Trainer", href: "unit1/vokabular/wordbank-talking-about-experiences.html", art: "Wortschatz", ls: "e9-u1-wb1",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u1-w1", kz: "A8", titel: "Wordbank · Talking about experiences: Übungen", href: "unit1/wordbank/talking-about-experiences.html", art: "Übung", ls: "e9-u1-w1",
          text: "Von Erlebnissen erzählen: wie es war, was du gemacht hast, was du darüber denkst." },
        { id: "u1-wb2", kz: "A9", titel: "Wordbank · Talking about being ill: Trainer", href: "unit1/vokabular/wordbank-talking-about-being-ill.html", art: "Wortschatz", ls: "e9-u1-wb2",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u1-w2", kz: "A10", titel: "Wordbank · Talking about being ill: Übungen", href: "unit1/wordbank/talking-about-being-ill.html", art: "Übung", ls: "e9-u1-w2",
          text: "Sagen, was fehlt – beim Arzt, in der Apotheke; guten Rat geben, auch mit if-Sätzen." },
        // Skill-Module (seit 10.10.2026): Seiten u1_….html im Ordner der Liste, Inhalt in inhalt/, Texte in texte/u1/
        { id: "u1-land", kz: "A11", titel: "Land und Leute · English around the world – and Down Under", href: "u1_land.html", art: "Land und Leute", ls: "e9-u1-land",
          text: "Englisch als Weltsprache und Australien: Land, Städte, Tiere, Alltag – lesen, hören, vergleichen." },
        { id: "u1-listening", kz: "A12", titel: "Listening · Plans for the long weekend", href: "u1_listening.html", art: "Listening", ls: "e9-u1-listening",
          text: "Gespräche verstehen: ein Ausflug wird geplant, ein Anruf in der Arztpraxis – Thema, Einzelheiten, Notizen." },
        { id: "u1-reading", kz: "A13", titel: "Reading · A beach day with a plan", href: "u1_reading.html", art: "Reading", ls: "e9-u1-reading",
          text: "Einen Artikel über ein Umweltproblem verstehen: Thema, Einzelheiten mit Zeilenangabe, zwischen den Zeilen lesen." },
        { id: "u1-speaking", kz: "A14", titel: "Speaking · Talk about a picture, talk to the doctor", href: "u1_speaking.html", art: "Speaking", ls: "e9-u1-speaking",
          text: "Ein Bild beschreiben und darüber sprechen; beim Arzt sagen, was fehlt – mit Rollenkarten und Redemitteln." },
        { id: "u1-mediation", kz: "A15", titel: "Mediation · Help at the chemist's", href: "u1_mediation.html", art: "Mediation", ls: "e9-u1-mediation",
          text: "Sprachmittlung: in der Apotheke für jemanden vermitteln – das Wichtige auswählen, einfach und höflich weitergeben." },
        { id: "u1-writing", kz: "A16", titel: "Writing · An email from Down Under", href: "u1_writing.html", art: "Writing", ls: "e9-u1-writing",
          text: "Schreibwerkstatt: eine E-Mail von der Reise planen, schreiben, prüfen und überarbeiten – mit Schreibcoach." },
        { id: "u1-qualifit", kz: "A17", titel: "Quali-Fit · Unit 1", href: "u1_qualifit.html", art: "Quali-Fit", ls: "e9-u1-qualifit",
          text: "Prüfungsformate in klein: Hören, Sprachgebrauch, Lesen, Sprachmittlung, Text und Medien, Schreiben – mit viel Rückmeldung." },
        { id: "u1-revision", kz: "A18", titel: "Wiederholung · Fit for the test: Unit 1", href: "u1_revision.html", art: "Wiederholung", ls: "e9-u1-revision",
          text: "Gemischte Wiederholung vor der Probe: Wortschatz, die Grammatik der Unit, Lesen, Hören, Sprachmittlung, Schreiben." },
        { id: "u1-duell", kz: "A19", titel: "Duelle · Unit 1", href: "u1_duell.html", art: "Duell", ls: "e9-u1-duell",
          text: "Zusatz: Duell gegen die KI und Tischduell zu zweit – Wortschatz und Grammatik der Unit." }
      ]
    },
    {
      id: "u2", nr: "02", titel: "Unit 2: Exploring India", kurz: "Unit 2", icon: "🐘",
      text: "Indien, Arbeiten in einer vernetzten Welt, nachhaltig leben, Berufe – mit Wortschatz, Grammatik und allen Fertigkeiten.",
      module: [
        { id: "u2-land", kz: "B8", titel: "Land und Leute · India – one country, many worlds", href: "u2_land.html", art: "Land und Leute", ls: "e9-u2-land",
          text: "Indien: Land, Sprachen, Feste, Alltag – lesen, hören, vergleichen." },
        { id: "u2-listening", kz: "B9", titel: "Listening · Welcome to our company", href: "u2_listening.html", art: "Listening", ls: "e9-u2-listening",
          text: "Gespräche aus der Arbeitswelt verstehen: eine Firma stellt sich vor – Thema, Einzelheiten, Notizen." }
      ]
    }
  ]
});
