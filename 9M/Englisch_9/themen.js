/* Englisch 9M: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder (index.html), die Sperre
 * auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung (Klasse → Englisch).
 * Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe des Bereichs + Nummer – A = Unit 1, B = Unit 2 (noch leer), C = Unit 3, D = Unit 4,
 * Z = Zeiten wiederholen, M = Mediation, P = Prüfung (mündlich). Ein vergebenes Kürzel bleibt für immer bei seiner
 * Seite; Neues bekommt die nächste freie Nummer. Alles ist zuerst gesperrt. Vokabeltests, Kurztests und die
 * Grammatikprobe sind Proben (js/proben-module.js) und stehen beim Freischalten unter den Seiten ihrer Unit.
 *
 * Der Vokabeltrainer der Unit 1 liegt bei 9R (../../9R/Englisch/…) und wird von beiden Zügen genutzt: gleiche
 * Kennung „u1-vokabeln“, gleicher Speicher auf dem Server (/api/e9, getrennt nach Klasse).
 * Tense Trainer und Zeiten-Überblick gibt es unter zwei Adressen (zeiten_wiederholen/ und unit3/tense/) – „auch“.
 *
 * Seit 10.10.2026 überarbeitet und mit 9R geteilt: Dolmetschen (M1–M6), „At the hospital“ (M7 = Mediation der Unit 3),
 * E-Mails (C5), mündliche Prüfung (P1 bis P4). Der Inhalt liegt einmal bei 9R/Englisch/inhalt/; die Seiten hier
 * (med_….html, u3_….html, qa_muendlich.html, pbt.html, pbt_….html) erzeugt .codex-build/englisch9r-werkzeug/bau-9m-seiten.js.
 * Die früheren Seiten leiten dorthin weiter. Gleiche Kennungen wie in 9R/Englisch/themen.js.
 */
GrumiKursliste.bauen({
  name: "E9M", kurs: "e9", stufe: 9, zuege: ["M"], fach: "Englisch", titel: "Englisch 9M", pfad: "/api/e9", ordner: "9M/Englisch_9/",
  intro: "Wortschatz, Grammatik, Mediation und Training für die Prüfung. Deine Lehrkraft schaltet frei, was ihr gerade im Unterricht behandelt.",
  andere: { zug: "R", titel: "Englisch 9R", href: "9R/Englisch/index.html" },
  // Die überarbeiteten Module nutzen die Bausteine von Deutsch 7/8 (7M/Deutsch/d7-kit.js) – wie Englisch 9R. Im M-Zug
  // sind die Zusatzaufgaben Pflicht.
  bausteine: { name: "Englisch 9M", api: "/api/e9", speicher: "grumi-e9-", klasse: "Englisch · Klasse 9M", anker: "thema-", sprache: "en", zug: "M", plusTag: "Plus · im M-Zug Pflicht" },
  themen: [
    {
      id: "u1", nr: "01", titel: "Unit 1: Around Australia", kurz: "Unit 1", icon: "🦘",
      text: "Wortschatz der Unit und vier Grammatikthemen.",
      module: [
        { id: "u1-vokabeln", kz: "A1", titel: "Vokabeltrainer Unit 1", href: "../../9R/Englisch/unit1/vokabular/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u1-vokabeln",
          text: "Alle Wörter mit Aussprache, Karteikarten und KI-Beispielsätzen." },
        { id: "u1-g1", kz: "A2", titel: "G1 · Simple past", href: "unit1/grammatik/g1-simple-past.html", art: "Grammatik", ls: "e9u1g1",
          text: "Die einfache Vergangenheit: regelmäßige und unregelmäßige Verben." },
        // Zusatz zu G1 (seit 09.10.2026): Die Seite liegt bei 9R und gehört beiden Zügen (wie der Vokabeltrainer der Unit 1)
        { id: "u1-blog", kz: "A6", titel: "Schreiben · Blog post: My trip", href: "../../9R/Englisch/unit1/schreiben/blog-post.html", art: "Schreiben", ls: "e9-u1-blog",
          text: "Das simple past anwenden: von einer Reise erzählen – die KI korrigiert und gibt Punkte." },
        { id: "u1-g2", kz: "A3", titel: "G2 · Will-future", href: "unit1/grammatik/g2-will-future.html", art: "Grammatik", ls: "e9u1g2",
          text: "Die Zukunft mit will: Vermutungen, Hoffnungen und Pläne, die noch nicht fest sind." },
        { id: "u1-g3", kz: "A4", titel: "G3 · If-clauses Typ I", href: "unit1/grammatik/g3-if-clauses.html", art: "Grammatik", ls: "e9u1g3",
          text: "Bedingungssätze: Was passiert, wenn …?" },
        { id: "u1-g4", kz: "A5", titel: "G4 · Present progressive", href: "unit1/grammatik/g4-present-progressive.html", art: "Grammatik", ls: "e9u1g4",
          text: "Die Verlaufsform der Gegenwart: Was passiert gerade?" }
      ]
    },
    {
      id: "u3", nr: "03", titel: "Unit 3: South Africa", kurz: "Unit 3", icon: "🦁",
      text: "Wortschatz aufbauen, über Unfälle und Vorbilder sprechen, E-Mails schreiben.",
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
          text: "Fotos aus Südafrika – zum Ansehen und Beschreiben." }
      ]
    },
    {
      id: "u4", nr: "04", titel: "Unit 4: New Zealand", kurz: "Unit 4", icon: "🥝",
      text: "Passiv, Zukunftsformen und Wortschatz rund um Neuseeland.",
      module: [
        { id: "u4-vokabeln", kz: "D1", titel: "Vokabeltrainer Unit 4", href: "unit4/vokabeltrainer.html", art: "Wortschatz", trainer: true, ls: "e9-u4-vokabeln",
          text: "Mit Beispielsätzen und Aussprache zum Anhören." },
        { id: "u4-goingto", kz: "D2", titel: "Going-to future", href: "unit4/grammatik/going_to_future.html", art: "Grammatik", ls: "e9-u4-goingto",
          text: "Erklärung und Übungen zur Zukunft mit going to." },
        { id: "u4-passive", kz: "D3", titel: "The passive voice", href: "unit4/grammatik/the_passive_voice_sp_simple_past.html", art: "Grammatik", ls: "e9-u4-passive",
          text: "Das Passiv im simple present und simple past bilden und anwenden." }
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
        // M7 hieß bis 10.10.2026 „med-hospital“ (Broschüre aus einem Arbeitsblatt); jetzt die Mediation der Unit 3 von 9R
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
