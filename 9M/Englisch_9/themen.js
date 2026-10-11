/* Englisch 9M: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder (index.html), die Sperre
 * auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung (Klasse → Englisch).
 * Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe des Bereichs + Nummer – A = Unit 1, B = Unit 2, C = Unit 3, D = Unit 4,
 * Z = Zeiten wiederholen, M = Mediation, P = Prüfung (mündlich). Ein vergebenes Kürzel bleibt für immer bei seiner
 * Seite; Neues bekommt die nächste freie Nummer. Alles ist zuerst gesperrt. Vokabeltests, Kurztests und die
 * Grammatikprobe sind Proben (js/proben-module.js) und stehen beim Freischalten unter den Seiten ihrer Unit.
 *
 * Vollausbau seit 10.10.2026 (Auftrag „Englisch 9M“): vier Units wie im Schulbuch (M-Ausgabe: gleiche Units, Themen und
 * Grammatik wie die R-Ausgabe) mit denselben Modulen und Kennungen wie 9R/Englisch/themen.js – ein Lernstand je Modul
 * und Kind, auf dem Server getrennt nach Klasse (/api/e9). Die Kürzel der Units 1 und 2 sind dieselben wie bei 9R; in
 * den Units 3 und 4 waren C2–C6 und D2–D3 schon vergeben, dort zählt 9M weiter.
 *   - Skill-Module (Seiten u1_….html, med_….html, pbt….html, qa_muendlich.html im Ordner der Liste): erzeugt von
 *     .codex-build/englisch9m-werkzeug/bau-9m-seiten.js. Inhalt ist die M-Fassung in inhalt/<id>.js mit Texten in
 *     texte/ – solange es sie nicht gibt, der gemeinsame Inhalt aus 9R/Englisch/inhalt/. Im M-Zug sind die
 *     Plus-Aufgaben Pflicht.
 *   - Vokabeltrainer, Grammatik, Wordbanks, Arbeitsblätter: Die Seiten liegen bei 9R (../../9R/Englisch/…) und gehören
 *     beiden Zügen. Eigene Seiten der 9M: G1–G4 (unit1/grammatik/), die älteren Seiten der Units 3 und 4, Zeiten.
 * Tense Trainer und Zeiten-Überblick gibt es unter zwei Adressen (zeiten_wiederholen/ und unit3/tense/) – „auch“.
 * „At the hospital“ (M7) ist die Mediation der Unit 3 und steht weiter im Bereich Mediation. Die früheren Seiten
 * (Chat-Mediation, E-Mail-Coach, Prüfungsübersicht) leiten auf die neuen weiter.
 */
GrumiKursliste.bauen({
  name: "E9M", kurs: "e9", stufe: 9, zuege: ["M"], fach: "Englisch", titel: "Englisch 9M", pfad: "/api/e9", ordner: "9M/Englisch_9/",
  intro: "Vier Units mit Wortschatz, Grammatik und allen Fertigkeiten, dazu Mediation und Training für die Prüfung. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt.",
  andere: { zug: "R", titel: "Englisch 9R", href: "9R/Englisch/index.html" },
  // Die Skill-Module nutzen die Bausteine von Deutsch 7/8 (7M/Deutsch/d7-kit.js) – wie Englisch 9R. Im M-Zug
  // sind die Zusatzaufgaben Pflicht.
  bausteine: { name: "Englisch 9M", api: "/api/e9", speicher: "grumi-e9-", klasse: "Englisch · Klasse 9M", anker: "thema-", sprache: "en", zug: "M", plusTag: "Plus · im M-Zug Pflicht", proben: true },
  // Große Proben für die Mittlere-Reife-Klasse (js/proben-module.js: e9proben, Kennungen e9-p<nr>-m-a / -b): eine je
  // Unit, Variante A und Nachschreiber B. Die Verwaltung stellt jede Probe beim Freischalten unter ihre Unit.
  proben: { "e9-p1-m-a": "u1", "e9-p1-m-b": "u1", "e9-p2-m-a": "u2", "e9-p2-m-b": "u2", "e9-p3-m-a": "u3", "e9-p3-m-b": "u3", "e9-p4-m-a": "u4", "e9-p4-m-b": "u4" },
  themen: [
    {
      id: "u1", nr: "01", titel: "Unit 1: Around Australia", kurz: "Unit 1", icon: "🦘",
      text: "Wortschatz der Unit und vier Grammatikthemen.",
      module: [
        { id: "u1-vokabeln", kz: "A1", titel: "Vokabeltrainer Unit 1", href: "../../9R/Englisch/unit1/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u1-vokabeln",
          text: "Alle Wörter mit Aussprache, Karteikarten und KI-Beispielsätzen." },
        { id: "u1-g1", kz: "A2", titel: "G1 · Simple past", href: "unit1/grammatik/g1-simple-past.html", art: "Grammatik", ls: "e9u1g1",
          text: "Die einfache Vergangenheit: regelmäßige und unregelmäßige Verben." },
        { id: "u1-blog", kz: "A6", titel: "Schreiben · Blog post: My trip", href: "../../9R/Englisch/unit1/schreiben/blog-post.html", art: "Schreiben", ls: "e9-u1-blog",
          text: "Das simple past anwenden: von einer Reise erzählen – die KI korrigiert und gibt Punkte." },
        { id: "u1-g2", kz: "A3", titel: "G2 · Will-future", href: "unit1/grammatik/g2-will-future.html", art: "Grammatik", ls: "e9u1g2",
          text: "Die Zukunft mit will: Vermutungen, Hoffnungen und Pläne, die noch nicht fest sind." },
        { id: "u1-g3", kz: "A4", titel: "G3 · If-clauses Typ I", href: "unit1/grammatik/g3-if-clauses.html", art: "Grammatik", ls: "e9u1g3",
          text: "Bedingungssätze: Was passiert, wenn …?" },
        { id: "u1-g4", kz: "A5", titel: "G4 · Present progressive", href: "unit1/grammatik/g4-present-progressive.html", art: "Grammatik", ls: "e9u1g4",
          text: "Die Verlaufsform der Gegenwart: Was passiert gerade?" },
        { id: "u1-wb1", kz: "A7", titel: "Wordbank · Talking about experiences: Trainer", href: "../../9R/Englisch/unit1/vokabular/wordbank-talking-about-experiences.html", art: "Wortschatz", ls: "e9-u1-wb1",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u1-w1", kz: "A8", titel: "Wordbank · Talking about experiences: Übungen", href: "../../9R/Englisch/unit1/wordbank/talking-about-experiences.html", art: "Übung", ls: "e9-u1-w1",
          text: "Von Erlebnissen erzählen: wie es war, was du gemacht hast, was du darüber denkst." },
        { id: "u1-wb2", kz: "A9", titel: "Wordbank · Talking about being ill: Trainer", href: "../../9R/Englisch/unit1/vokabular/wordbank-talking-about-being-ill.html", art: "Wortschatz", ls: "e9-u1-wb2",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u1-w2", kz: "A10", titel: "Wordbank · Talking about being ill: Übungen", href: "../../9R/Englisch/unit1/wordbank/talking-about-being-ill.html", art: "Übung", ls: "e9-u1-w2",
          text: "Sagen, was fehlt – beim Arzt, in der Apotheke; guten Rat geben, auch mit if-Sätzen." },
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
          text: "Zusatz: Duell gegen die KI und Tischduell zu zweit – Wortschatz und Grammatik der Unit." },
        { id: "u1-reef", kz: "A21", titel: "Land und Leute · The Great Barrier Reef", href: "u1_reef.html", art: "Land und Leute", ls: "e9-u1-reef",
          text: "Das größte Korallenriff der Welt und seine Probleme: lesen, Ursachen und Folgen ordnen, einen Kurzvortrag vorbereiten – mit KI-Rückmeldung." },
        { id: "u1-dialogue", kz: "A22", titel: "Speaking · Feeling ill: a dialogue", href: "u1_dialogue.html", art: "Speaking", ls: "e9-u1-dialogue",
          text: "Ein Gespräch führen, wenn jemand krank ist: sagen, was fehlt, nachfragen, Rat geben – die KI prüft jeden Beitrag." },
        { id: "u1-pharmacy", kz: "A23", titel: "Mediation · At the pharmacy", href: "u1_pharmacy.html", art: "Mediation", ls: "e9-u1-pharmacy",
          text: "Sprachmittlung im Gespräch: zwischen einem Touristen und der Apothekerin vermitteln, Deutsch und Englisch – die KI prüft jeden Beitrag." },
        { id: "u1-blaetter", kz: "A20", titel: "Arbeitsblätter · Unit 1", href: "../../9R/Englisch/u1_blaetter.html", art: "Arbeitsblatt",
          text: "Sieben Blätter zum Drucken: Vocabulary, Grammar, Reading, Listening, Writing, Mediation, Mixed revision – aus den Aufgaben der Module." }
      ]
    },
    {
      id: "u2", nr: "02", titel: "Unit 2: Exploring India", kurz: "Unit 2", icon: "🐘",
      text: "Indien, Arbeiten in einer vernetzten Welt, nachhaltig leben, Berufe – mit Wortschatz, Grammatik und allen Fertigkeiten.",
      module: [
        { id: "u2-vokabeln", kz: "B1", titel: "Vokabeltrainer Unit 2", href: "../../9R/Englisch/unit2/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u2-vokabeln",
          text: "Alle Wörter der Unit mit Aussprache, Karteikarten und Beispielsätzen." },
        { id: "u2-g5", kz: "B2", titel: "G5 · Simple present", href: "../../9R/Englisch/unit2/grammatik/g5-simple-present.html", art: "Grammatik", ls: "e9-u2-g5",
          text: "Die einfache Gegenwart: Gewohnheiten und Tatsachen, he/she/it mit -s, Fragen und Verneinung mit do und does." },
        { id: "u2-g6", kz: "B3", titel: "G6 · Word order", href: "../../9R/Englisch/unit2/grammatik/g6-word-order.html", art: "Grammatik", ls: "e9-u2-g6",
          text: "Satzstellung: Subjekt – Verb – Objekt, danach Art und Weise, Ort, Zeit." },
        { id: "u2-wb1", kz: "B4", titel: "Wordbank · Presenting a company: Trainer", href: "../../9R/Englisch/unit2/vokabular/wordbank-presenting-a-company.html", art: "Wortschatz", ls: "e9-u2-wb1",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u2-w1", kz: "B5", titel: "Wordbank · Presenting a company: Übungen", href: "../../9R/Englisch/unit2/wordbank/presenting-a-company.html", art: "Übung", ls: "e9-u2-w1",
          text: "Eine Firma vorstellen: was sie macht, wer dort arbeitet, was besonders ist." },
        { id: "u2-wb2", kz: "B6", titel: "Wordbank · Sustainable living: Trainer", href: "../../9R/Englisch/unit2/vokabular/wordbank-sustainable-living.html", art: "Wortschatz", ls: "e9-u2-wb2",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u2-w2", kz: "B7", titel: "Wordbank · Sustainable living: Übungen", href: "../../9R/Englisch/unit2/wordbank/sustainable-living.html", art: "Übung", ls: "e9-u2-w2",
          text: "Nachhaltig leben: Müll vermeiden, Energie sparen, wiederverwenden – darüber sprechen und schreiben." },
        { id: "u2-land", kz: "B8", titel: "Land und Leute · India – one country, many worlds", href: "u2_land.html", art: "Land und Leute", ls: "e9-u2-land",
          text: "Indien: Land, Sprachen, Feste, Alltag – lesen, hören, vergleichen." },
        { id: "u2-listening", kz: "B9", titel: "Listening · Welcome to our company", href: "u2_listening.html", art: "Listening", ls: "e9-u2-listening",
          text: "Gespräche aus der Arbeitswelt verstehen: eine Firma stellt sich vor – Thema, Einzelheiten, Notizen." },
        { id: "u2-reading", kz: "B10", titel: "Reading · Small ideas, big change", href: "u2_reading.html", art: "Reading", ls: "e9-u2-reading",
          text: "Einen Artikel über eine Idee für die Umwelt verstehen: Thema, Einzelheiten mit Zeilenangabe, zwischen den Zeilen lesen." },
        { id: "u2-speaking", kz: "B11", titel: "Speaking · Present a company", href: "u2_speaking.html", art: "Speaking", ls: "e9-u2-speaking",
          text: "Eine Firma oder ein Projekt vorstellen: Redemittel, Notizzettel, Vortragskarten – und Fragen dazu beantworten." },
        { id: "u2-mediation", kz: "B12", titel: "Mediation · Which job is right for you?", href: "u2_mediation.html", art: "Mediation", ls: "e9-u2-mediation",
          text: "Sprachmittlung: Informationen über Berufe weitergeben – das Wichtige auswählen, einfach sagen, an die Person denken." },
        { id: "u2-writing", kz: "B13", titel: "Writing · A story in pictures", href: "u2_writing.html", art: "Writing", ls: "e9-u2-writing",
          text: "Schreibwerkstatt: eine Geschichte zu Bildern planen, schreiben, prüfen und überarbeiten – mit Schreibcoach." },
        { id: "u2-qualifit", kz: "B14", titel: "Quali-Fit · Unit 2", href: "u2_qualifit.html", art: "Quali-Fit", ls: "e9-u2-qualifit",
          text: "Prüfungsformate in klein: Hören, Sprachgebrauch, Lesen, Sprachmittlung, Text und Medien, Schreiben – mit mehr Auswahl und längeren Texten." },
        { id: "u2-revision", kz: "B15", titel: "Wiederholung · Fit for the test: Unit 2", href: "u2_revision.html", art: "Wiederholung", ls: "e9-u2-revision",
          text: "Gemischte Wiederholung vor der Probe: Wortschatz, die Grammatik der Unit, Lesen, Hören, Sprachmittlung, Schreiben." },
        { id: "u2-duell", kz: "B16", titel: "Duelle · Unit 2", href: "u2_duell.html", art: "Duell", ls: "e9-u2-duell",
          text: "Zusatz: Duell gegen die KI und Tischduell zu zweit – Wortschatz und Grammatik der Unit." },
        { id: "u2-blaetter", kz: "B17", titel: "Arbeitsblätter · Unit 2", href: "../../9R/Englisch/u2_blaetter.html", art: "Arbeitsblatt",
          text: "Sieben Blätter zum Drucken: Vocabulary, Grammar, Reading, Listening, Writing, Mediation, Mixed revision – aus den Aufgaben der Module." }
      ]
    },
    {
      id: "u3", nr: "03", titel: "Unit 3: Discover South Africa", kurz: "Unit 3", icon: "🦁",
      text: "Südafrika, ein Unfall und die Polizei, Vorbilder, im Krankenhaus – mit Wortschatz, Grammatik und allen Fertigkeiten.",
      module: [
        { id: "u3-vokabeln", kz: "C1", titel: "Vokabeltrainer Unit 3", href: "unit3/vokabulary/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u3-vokabeln",
          text: "Mit Beispielsätzen und Aussprache zum Anhören." },
        { id: "u3-irregular", kz: "C2", titel: "Irregular Verbs", href: "unit3/vokabulary/irregular_verbs.html", art: "Wortschatz", ls: "e9-u3-irregular",
          text: "Unregelmäßige Verben in allen drei Formen lernen." },
        { id: "u3-accident", kz: "C3", titel: "Accident Talk Studio", href: "unit3/vokabulary/accident_wordbank2.html", art: "Sprechen", ls: "e9-u3-accident",
          text: "Einen Unfall genau und verständlich beschreiben." },
        { id: "u3-rolemodel", kz: "C4", titel: "Role Model Studio", href: "unit3/vokabulary/role_model2.html", art: "Sprechen", ls: "e9-u3-rolemodel",
          text: "Über Vorbilder sprechen und schreiben." },
        { id: "u3-email", kz: "C5", titel: "Writing · E-mails step by step", href: "u3_email.html", auch: ["unit3/email/email.html"], art: "Schreiben", ls: "e9-u3-email",
          text: "E-Mails schreiben: persönlich und förmlich, Aufbau, Wendungen, eigene E-Mail mit Schreibcoach." },
        { id: "u3-holidays", kz: "C6", titel: "Holidays Mr. Mößner", href: "unit3/holidays_moessner.html", art: "Bilder",
          text: "Fotos aus Südafrika – zum Ansehen und Beschreiben." },
        { id: "u3-g7", kz: "C7", titel: "G7 · Past progressive", href: "../../9R/Englisch/unit3/grammatik/g7-past-progressive.html", art: "Grammatik", ls: "e9-u3-g7",
          text: "Die Verlaufsform der Vergangenheit: Was lief gerade, als etwas passierte? Mit while und when." },
        { id: "u3-g8", kz: "C8", titel: "G8 · Present perfect with for and since", href: "../../9R/Englisch/unit3/grammatik/g8-present-perfect.html", art: "Grammatik", ls: "e9-u3-g8",
          text: "Was bis heute gilt: have/has + Partizip, mit for (Zeitraum) und since (Zeitpunkt)." },
        { id: "u3-wb1", kz: "C9", titel: "Wordbank · Talking about an accident: Trainer", href: "../../9R/Englisch/unit3/vokabular/wordbank-talking-about-an-accident.html", art: "Wortschatz", ls: "e9-u3-wb1",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u3-w1", kz: "C10", titel: "Wordbank · Talking about an accident: Übungen", href: "../../9R/Englisch/unit3/wordbank/talking-about-an-accident.html", art: "Übung", ls: "e9-u3-w1",
          text: "Von einem Unfall berichten: was, wo, wann, wer ist verletzt – und Hilfe holen." },
        { id: "u3-wb2", kz: "C11", titel: "Wordbank · Describing a role model: Trainer", href: "../../9R/Englisch/unit3/vokabular/wordbank-describing-a-role-model.html", art: "Wortschatz", ls: "e9-u3-wb2",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u3-w2", kz: "C12", titel: "Wordbank · Describing a role model: Übungen", href: "../../9R/Englisch/unit3/wordbank/describing-a-role-model.html", art: "Übung", ls: "e9-u3-w2",
          text: "Ein Vorbild beschreiben: Eigenschaften, was die Person getan hat, warum du sie bewunderst." },
        { id: "u3-land", kz: "C13", titel: "Land und Leute · South Africa – the rainbow nation", href: "u3_land.html", art: "Land und Leute", ls: "e9-u3-land",
          text: "Südafrika: Land, Sprachen, Geschichte in Grundzügen, Natur, Alltag – lesen, hören, vergleichen." },
        { id: "u3-listening", kz: "C14", titel: "Listening · What happened?", href: "u3_listening.html", art: "Listening", ls: "e9-u3-listening",
          text: "Gespräche verstehen: ein Unfall wird gemeldet, eine Aussage bei der Polizei – Thema, Einzelheiten, Notizen." },
        { id: "u3-reading", kz: "C15", titel: "Reading · A day in a young life", href: "u3_reading.html", art: "Reading", ls: "e9-u3-reading",
          text: "Einen Text über den Alltag eines Jugendlichen verstehen: Thema, Einzelheiten mit Zeilenangabe, zwischen den Zeilen lesen." },
        { id: "u3-speaking", kz: "C16", titel: "Speaking · Report an accident, talk about a role model", href: "u3_speaking.html", art: "Speaking", ls: "e9-u3-speaking",
          text: "Von einem Unfall berichten (Rollenspiel) und über ein Vorbild sprechen – mit Redemitteln, Rollenkarten und Notizzettel." },
        { id: "u3-writing", kz: "C17", titel: "Writing · My role model", href: "u3_writing.html", art: "Writing", ls: "e9-u3-writing",
          text: "Schreibwerkstatt: einen Text über ein Vorbild planen, schreiben, prüfen und überarbeiten – mit Schreibcoach." },
        { id: "u3-qualifit", kz: "C18", titel: "Quali-Fit · Unit 3", href: "u3_qualifit.html", art: "Quali-Fit", ls: "e9-u3-qualifit",
          text: "Prüfungsformate in klein: Hören, Sprachgebrauch, Lesen, Sprachmittlung, Text und Medien, Schreiben – kombiniert und mit weniger Hilfen." },
        { id: "u3-revision", kz: "C19", titel: "Wiederholung · Fit for the test: Unit 3", href: "u3_revision.html", art: "Wiederholung", ls: "e9-u3-revision",
          text: "Gemischte Wiederholung vor der Probe: Wortschatz, die Grammatik der Unit, Lesen, Hören, Sprachmittlung, Schreiben." },
        { id: "u3-duell", kz: "C20", titel: "Duelle · Unit 3", href: "u3_duell.html", art: "Duell", ls: "e9-u3-duell",
          text: "Zusatz: Duell gegen die KI und Tischduell zu zweit – Wortschatz und Grammatik der Unit." },
        { id: "u3-blaetter", kz: "C21", titel: "Arbeitsblätter · Unit 3", href: "../../9R/Englisch/u3_blaetter.html", art: "Arbeitsblatt",
          text: "Sieben Blätter zum Drucken: Vocabulary, Grammar, Reading, Listening, Writing, Mediation, Mixed revision – aus den Aufgaben der Module." }
      ]
    },
    {
      id: "u4", nr: "04", titel: "Unit 4: News from New Zealand", kurz: "Unit 4", icon: "🥝",
      text: "Neuseeland, Berufsberatung und Praktikum, Generationen, Verein, Bewerbung – mit Wortschatz, Grammatik und allen Fertigkeiten.",
      module: [
        { id: "u4-vokabeln", kz: "D1", titel: "Vokabeltrainer Unit 4", href: "unit4/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u4-vokabeln",
          text: "Mit Beispielsätzen und Aussprache zum Anhören." },
        { id: "u4-goingto", kz: "D2", titel: "Going-to future", href: "unit4/grammatik/going_to_future.html", art: "Grammatik", ls: "e9-u4-goingto",
          text: "Erklärung und Übungen zur Zukunft mit going to." },
        { id: "u4-passive", kz: "D3", titel: "The passive voice", href: "unit4/grammatik/the_passive_voice_sp_simple_past.html", art: "Grammatik", ls: "e9-u4-passive",
          text: "Das Passiv im simple present und simple past bilden und anwenden." },
        { id: "u4-g9", kz: "D4", titel: "G9 · Going to-future", href: "../../9R/Englisch/unit4/grammatik/g9-going-to-future.html", art: "Grammatik", ls: "e9-u4-g9",
          text: "Pläne und Absichten: am/is/are going to – Aussage, Verneinung, Frage." },
        { id: "u4-g10", kz: "D5", titel: "G10 · Passive", href: "../../9R/Englisch/unit4/grammatik/g10-passive.html", art: "Grammatik", ls: "e9-u4-g10",
          text: "Das Passiv verstehen: Was wird gemacht – und von wem? (is made, was built, by …)" },
        { id: "u4-wb1", kz: "D6", titel: "Wordbank · Jobs and qualities: Trainer", href: "../../9R/Englisch/unit4/vokabular/wordbank-jobs-and-qualities.html", art: "Wortschatz", ls: "e9-u4-wb1",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u4-w1", kz: "D7", titel: "Wordbank · Jobs and qualities: Übungen", href: "../../9R/Englisch/unit4/wordbank/jobs-and-qualities.html", art: "Übung", ls: "e9-u4-w1",
          text: "Berufe und Eigenschaften: was man in einem Beruf macht und was man dafür können muss." },
        { id: "u4-wb2", kz: "D8", titel: "Wordbank · Talking about an internship: Trainer", href: "../../9R/Englisch/unit4/vokabular/wordbank-talking-about-an-internship.html", art: "Wortschatz", ls: "e9-u4-wb2",
          text: "Wörter und Sätze der Wordbank lernen: Aussprache, Multiple Choice, Tippen, Karteikarten." },
        { id: "u4-w2", kz: "D9", titel: "Wordbank · Talking about an internship: Übungen", href: "../../9R/Englisch/unit4/wordbank/talking-about-an-internship.html", art: "Übung", ls: "e9-u4-w2",
          text: "Über ein Praktikum sprechen: Aufgaben, Arbeitszeiten, was du gelernt hast." },
        { id: "u4-land", kz: "D10", titel: "Land und Leute · New Zealand – Aotearoa", href: "u4_land.html", art: "Land und Leute", ls: "e9-u4-land",
          text: "Neuseeland: Land, Natur, Māori-Kultur in Grundzügen, Freizeit und Vereine – lesen, hören, vergleichen." },
        { id: "u4-listening", kz: "D11", titel: "Listening · What are you going to do?", href: "u4_listening.html", art: "Listening", ls: "e9-u4-listening",
          text: "Gespräche verstehen: Pläne nach der Schule, ein Anruf wegen eines Praktikums – Thema, Einzelheiten, Notizen." },
        { id: "u4-reading", kz: "D12", titel: "Reading · Three generations, one story", href: "u4_reading.html", art: "Reading", ls: "e9-u4-reading",
          text: "Einen Text über Jung und Alt verstehen: Thema, Einzelheiten mit Zeilenangabe, zwischen den Zeilen lesen." },
        { id: "u4-speaking", kz: "D13", titel: "Speaking · A job interview", href: "u4_speaking.html", art: "Speaking", ls: "e9-u4-speaking",
          text: "Ein Vorstellungsgespräch führen: sich vorstellen, Stärken nennen, Fragen beantworten und stellen – mit Rollenkarten." },
        { id: "u4-mediation", kz: "D14", titel: "Mediation · Join the club!", href: "u4_mediation.html", art: "Mediation", ls: "e9-u4-mediation",
          text: "Sprachmittlung: Informationen über einen Verein weitergeben – das Wichtige auswählen, einfach sagen, an die Person denken." },
        { id: "u4-writing", kz: "D15", titel: "Writing · My application", href: "u4_writing.html", art: "Writing", ls: "e9-u4-writing",
          text: "Schreibwerkstatt: eine Bewerbung auf eine Anzeige planen, schreiben, prüfen und überarbeiten – mit Schreibcoach." },
        { id: "u4-qualifit", kz: "D16", titel: "Quali-Fit · Unit 4", href: "u4_qualifit.html", art: "Quali-Fit", ls: "e9-u4-qualifit",
          text: "Prüfungsformate in klein: Hören, Sprachgebrauch, Lesen, Sprachmittlung, Text und Medien, Schreiben – prüfungsnah, mit Zeitangabe je Teil." },
        { id: "u4-revision", kz: "D17", titel: "Wiederholung · Fit for the test: Unit 4", href: "u4_revision.html", art: "Wiederholung", ls: "e9-u4-revision",
          text: "Gemischte Wiederholung vor der Probe: Wortschatz, die Grammatik der Unit, Lesen, Hören, Sprachmittlung, Schreiben." },
        { id: "u4-duell", kz: "D18", titel: "Duelle · Unit 4", href: "u4_duell.html", art: "Duell", ls: "e9-u4-duell",
          text: "Zusatz: Duell gegen die KI und Tischduell zu zweit – Wortschatz und Grammatik der Unit." },
        { id: "u4-blaetter", kz: "D19", titel: "Arbeitsblätter · Unit 4", href: "../../9R/Englisch/u4_blaetter.html", art: "Arbeitsblatt",
          text: "Sieben Blätter zum Drucken: Vocabulary, Grammar, Reading, Listening, Writing, Mediation, Mixed revision – aus den Aufgaben der Module." }
      ]
    },
    {
      id: "zeiten", nr: "05", titel: "Zeiten wiederholen", kurz: "Zeiten", icon: "⏳",
      text: "Alle Zeitformen im Überblick und gemischt üben.",
      module: [
        { id: "zeiten-ueberblick", kz: "Z1", titel: "Alle Zeitformen im Überblick", href: "zeiten_wiederholen/tense_overview_a2.html", auch: ["unit3/tense/tense_overview_a2.html"], art: "Grammatik",
          text: "Überblick und Vergleich aller Zeitformen auf einen Blick." },
        { id: "zeiten-trainer", kz: "Z2", titel: "Tense Trainer", href: "zeiten_wiederholen/tense_trainer_a2.html", auch: ["unit3/tense/tense_trainer_a2.html"], art: "Grammatik", ls: "e9-zeiten-",
          text: "Alle Zeiten gemischt üben – mit Rückmeldung zu jeder Antwort." }
      ]
    },
    {
      id: "mediation", nr: "06", titel: "Mediation und Dolmetschen", kurz: "Mediation", icon: "🗣️",
      text: "Für die mündliche Prüfung: in einem Gespräch zwischen Deutsch und Englisch vermitteln – sinngemäß, höflich, in beide Richtungen.",
      module: [
        { id: "med-park", kz: "M1", titel: "Interpreting · At the nature reserve", href: "med_park.html", auch: ["mediation/mediation_park_improved.html"], art: "Mediation", ls: "e9-med-park",
          text: "Im Besucherzentrum eines Naturparks dolmetschen: eine Führung buchen, Zeiten, Preise und Hinweise weitergeben." },
        { id: "med-restaurant", kz: "M2", titel: "Interpreting · At the restaurant", href: "med_restaurant.html", auch: ["mediation/mediation_restaurant.html"], art: "Mediation", ls: "e9-med-restaurant",
          text: "Im Restaurant dolmetschen: bestellen, nachfragen, eine Unverträglichkeit erklären, bezahlen." },
        { id: "med-accident", kz: "M3", titel: "Interpreting · Reporting an accident", href: "med_accident.html", auch: ["mediation/mediation_accident.html"], art: "Mediation", ls: "e9-med-accident",
          text: "Als Zeuge dolmetschen: der Polizei genau sagen, was passiert ist – Ort, Zeit, Farbe, Kennzeichen." },
        { id: "med-doctor", kz: "M4", titel: "Interpreting · At the doctor's", href: "med_doctor.html", auch: ["mediation/mediation_doctor.html"], art: "Mediation", ls: "e9-med-doctor",
          text: "Beim Arzt dolmetschen: Beschwerden weitergeben, Rückfragen und Anweisungen verstehen und auf Deutsch erklären." },
        { id: "med-hostel", kz: "M5", titel: "Interpreting · At the hostel", href: "med_hostel.html", auch: ["mediation/mediation_hostel.html"], art: "Mediation", ls: "e9-med-hostel",
          text: "An der Rezeption dolmetschen: einchecken, ein Problem mit dem Zimmer klären, Zeiten und Regeln weitergeben." },
        { id: "med-market", kz: "M6", titel: "Interpreting · At the craft market", href: "med_market.html", auch: ["mediation/mediation_market.html"], art: "Mediation", ls: "e9-med-market",
          text: "Auf dem Markt dolmetschen: nach Preis, Material und Herstellung fragen, höflich handeln, bezahlen." },
        { id: "u3-mediation", kz: "M7", titel: "Mediation · At the hospital", href: "u3_mediation.html", auch: ["mediation/mediation hospital.html"], art: "Mediation", ls: "e9-u3-mediation",
          text: "Sprachmittlung im Krankenhaus: Regeln, Besuchszeiten, Anmeldung – das Wichtige auswählen und einfach weitergeben." }
      ]
    },
    {
      id: "pruefung", nr: "07", titel: "Mündliche Prüfung", kurz: "Prüfung", icon: "🎤",
      text: "Fragen, Antworten und Bildbeschreibung für die mündliche Prüfung trainieren.",
      module: [
        { id: "qa-muendlich", kz: "P1", titel: "Mündliche Prüfung · The three parts", href: "qa_muendlich.html", auch: ["mündlich_prüfung/QA_muendlich.html"], art: "Sprechen", ls: "e9-qa-muendlich",
          text: "So läuft die mündliche Prüfung: Picture-based talk, Topic-based talk, Interpreting – Ablauf, Redemittel, Tipps." },
        { id: "pbt", kz: "P2", titel: "Speaking · Picture-based talk", href: "pbt.html", auch: ["mündlich_prüfung/picture_based_talk/picture-description.html"], art: "Sprechen", ls: "e9-pbt",
          text: "Ein Bild Schritt für Schritt beschreiben: Überblick, Einzelheiten, Vermutungen, Meinung – mit sieben Bildern zum Üben." },
        { id: "pbt-outdoors", kz: "P3", titel: "Speaking · Picture talks: Out and about", href: "pbt_outdoors.html", art: "Sprechen", ls: "e9-pbt-outdoors",
          text: "Vier Bilder zum Üben: Markt, Bushaltestelle im Regen, Wanderung, Fußballspiel – genau hinsehen, vermuten, Prüferfragen beantworten." },
        { id: "pbt-everyday", kz: "P4", titel: "Speaking · Picture talks: Home, school and work", href: "pbt_everyday.html", art: "Sprechen", ls: "e9-pbt-everyday",
          text: "Vier Bilder aus dem Alltag: Küche, Referat im Klassenzimmer, Schulhof, Café – Tatsache oder Vermutung, Vortrag aufbauen, Prüferfragen." }
      ]
    }
  ]
});
