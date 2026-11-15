/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Duelle: Unit 1 (Kürzel A21)
   Aufwärmen: richtig/falsch (R7 und M7 getrennt), Ankreuzfragen (R7 leichter, M7 schwerer) und Zuordnen Wort – deutsche Bedeutung
   (gemeinsam); Duell gegen die KI (6 Runden je Zug, die „KI“ irrt in zwei Runden mit einleuchtend klingender Begründung, zu einer davon
   ein Begründungssatz); Tischduell zu zweit an einem Gerät (12 kurze Fragen je Zug, Antworten ein bis drei Wörter, 7 Runden).
   Inhalt: Wörter der Unit 1 (Topic 1 bis Reading skills: noisy, quiet, coast, factory, healthy, to order, environment, occasionally,
   I'm afraid …) und die Grammatik G1 simple past (unregelmäßige Formen, didn't + Grundform), G2 simple present (he/she/it -s,
   doesn't), G3 Fragen und Kurzantworten mit do/does, G4 Possessivpronomen (mine, yours, his, hers, ours, theirs).
   Buchprinzip (nur Aufbau, nichts übernommen): kurze Wiederholungsrunden am Ende der Unit wie die Revision und die Test-yourself-Teile
   des Grammatikanhangs (Formen einsetzen, Fragen bilden, richtiges Wort wählen) – hier mit eigenen Sätzen.
   Besser: Gegner „KI“ klingt sicher und irrt manchmal – das Kind prüft mit der Regel; Rückmeldung zu jeder Antwort; Tischduell ohne
   Aufwand.
   Differenzierung: R7 mit deutschen Hilfen und einfacheren Runden (went/saw, Do/Does, mine/his, Wortbedeutungen); M7 englisch mit
   Satzvergleichen (doesn't + Grundform, didn't did, My is …/Mine is …), theirs/ours, Kurzantworten und schwereren Wörtern
   (environment, occasionally, I'm afraid).
   Eindeutigkeit: In jeder Runde passt nur eine Antwort; Formen, die ebenfalls passen würden, stehen bewusst nicht unter den Antworten.
   Duelle sind Zusatz und zählen nicht zum Lernfortschritt.
   Die „KI“ irrt je Zug in zwei Runden mit Absicht – R7: Runde 3 („Does you like …“), Runde 5 („didn't liked“, mit Begründungssatz);
   M7: Runde 2 („My is old“, mit Begründungssatz), Runde 5 („works“ statt „worked“ bei „when she was young“). Die Erklärung stellt es
   richtig.
   LehrplanPLUS E7 2 (Wortschatz der Unit 1), E7 3 (simple past, simple present, Fragen und Kurzantworten mit do/does,
   Possessivpronomen).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen. Keine Hörtexte. Namen in den Sätzen: Bea, Frankie (erfunden).
   BILDER:
   1. Station „Warm-up“ (Sprechanlass): zwei Kinder sitzen auf einer Mauer vor einer englischen Häuserreihe mit roten Backsteinhäusern und
      spielen an einem Tablet ein Quiz-Duell; daneben ein roter Briefkasten und ein Schulrucksack.
   2. Station „Table duel“ (Vorentlastung): zwei Kinder in Schuluniform sitzen an einem Tisch, das Tablet liegt in der Mitte, jedes hat eine
      Hand an seiner Antwortseite; auf dem Tisch eine Tasse mit Union-Jack-Muster und ein Stift. */
D7Kit.seite({
  id: "u1-duell",
  titel: "Duels: Unit 1",
  einleitung: "Words and grammar from Unit 1 – mixed: the simple past, the simple present, questions with do and does, and mine, yours, his, hers. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["⏪ I know the simple past of important verbs.", "❓ I ask questions with do and does and give short answers.", "🎒 I use mine, yours, his and hers correctly.", "⚔️ I notice when an answer sounds good but is wrong."],
  thema: "Unit 1 Duelle",
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a quiz duel after school</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-duell.jpg\" width=\"1280\" height=\"853\" alt=\"Two children sit on a low wall in front of red-brick houses and play a quiz duel on a tablet; a red post box and a school rucksack are next to them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who do you think is faster? Get ready – now it is your turn! <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "tf", id: "warm", nur: "R", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["\"Mine\" means \"meins\" or \"meine\".", true],
        ["\"Bea don't like goats.\" is a correct sentence.", false],
        ["The simple past of \"go\" is \"went\".", true],
        ["\"Does Frankie play the guitar?\" is a correct question.", true],
        ["\"Noisy\" means \"leise\".", false]
      ], hilfen: ["Bea = she. Bei she heißt es doesn't.", "noisy ist das Gegenteil von quiet."] },
      { art: "tf", id: "warm", nur: "M", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false.", aussagen: [
        ["\"Bea didn't went to school.\" is a correct sentence.", false],
        ["In \"This book is hers\" there is no noun after \"hers\".", true],
        ["\"Do Frankie live in a village?\" is a correct question.", false],
        ["\"Yes, he does.\" is a short answer to \"Does he walk to school?\"", true],
        ["\"Quiet\" is the opposite of \"noisy\".", true]
      ] },
      { art: "mc", id: "warm2", nur: "R", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer. <span class=\"de\">Kreuze die richtige Antwort an.</span>", fragen: [
        { q: "Complete: Bea ___ to school by bus every day.", o: ["goes", "go", "going"], a: 0, e: "Bea = she. Im simple present bekommt das Verb bei he, she, it ein -s: goes." },
        { q: "Complete: Yesterday Frankie ___ a goat at the farm.", o: ["saw", "see", "sees"], a: 0, e: "yesterday zeigt die Vergangenheit: see – saw (unregelmäßig)." },
        { q: "Complete: Is this your pen? – Yes, it's ___.", o: ["mine", "my", "me"], a: 0, e: "Ohne Nomen danach steht mine. my braucht ein Nomen: my pen." },
        { q: "Complete: ___ Bea like Maths?", o: ["Does", "Do", "Is"], a: 0, e: "Bea = she → Does. Danach die Grundform like." }
      ] },
      { art: "mc", id: "warm2", nur: "M", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "Choose the correct sentence.", o: ["Frankie doesn't live near the school.", "Frankie don't live near the school.", "Frankie doesn't lives near the school."], a: 0, e: "Frankie = he → doesn't, and after doesn't the base form without -s: doesn't live." },
        { q: "Complete: Did you ___ the bus this morning?", o: ["catch", "caught", "catches"], a: 0, e: "After did we use the base form: Did you catch …?" },
        { q: "Complete: That isn't Bea's bag. ___ is red.", o: ["Hers", "Her", "She"], a: 0, e: "There is no noun after the gap, so we need the possessive pronoun: Hers (= her bag) is red." },
        { q: "Complete: Where ___ your cousins live?", o: ["do", "does", "are"], a: 0, e: "your cousins = they → do: Where do your cousins live?" }
      ] },
      { art: "paare", id: "woerter", tag: "Warm-up", titel: "Words from Unit 1", lead: "Match the English word with its German meaning. <span class=\"de\">Welches deutsche Wort passt?</span>",
        paare: [["noisy", "laut"], ["quiet", "leise, ruhig"], ["coast", "Küste"], ["factory", "Fabrik"], ["healthy", "gesund"], ["to order", "bestellen"]],
        hilfen: ["Zwei Wörter sind Gegenteile: laut und leise.", "An der coast ist das Meer.", "Im Café kannst du etwas bestellen."] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule. <span class=\"de\">In zwei Runden irrt die KI. Denk an die Regel.</span>",
        runden: [
          { q: "Complete: Last summer Bea ___ to the coast.", o: ["went", "goes", "goed"], a: 0, ki: 0, kiText: "\"Last summer\" is in the past, and \"go\" is irregular – so it's \"went\".",
            e: "last summer = Vergangenheit. go ist unregelmäßig: go – went. „goed“ gibt es nicht." },
          { q: "Complete: Frankie ___ in a quiet village.", o: ["lives", "live", "living"], a: 0, ki: 0, kiText: "Frankie is one person – he – so the verb gets an -s: \"lives\".",
            e: "Frankie = he. Im simple present bekommt das Verb bei he, she, it ein -s: lives." },
          { q: "Complete: ___ you like your new school?", o: ["Do", "Does", "Are"], a: 0, ki: 1, kiText: "\"School\" is one thing – so we need \"Does\": \"Does you like your new school?\"",
            e: "Die Person ist you – nicht school. Mit you steht Do: Do you like …? Does steht nur bei he, she, it." },
          { q: "Complete: Is this Frankie's ball? – Yes, it's ___.", o: ["his", "he", "him"], a: 0, ki: 0, kiText: "Frankie is a boy and there's no noun after the gap – so \"his\".",
            e: "Frankie = he. Ohne Nomen danach: It's his. (his ist Begleiter und Pronomen zugleich.)" },
          { q: "Complete: We ___ the film yesterday. It was boring.", o: ["didn't like", "didn't liked", "don't liked"], a: 0, ki: 1, kiText: "It was yesterday, so everything must be in the past – \"didn't\" and \"liked\": \"didn't liked\".",
            e: "Nach didn't steht immer die Grundform: didn't like. Die Vergangenheit steckt schon in didn't.",
            begruende: { q: "Why is \"didn't liked\" wrong? Explain in one sentence.", m: "After didn't we use the base form of the verb.", k: ["base|grundform|infinitive|didn't|did|ed|past|vergangenheit"] } },
          { q: "Which word is the opposite of \"noisy\"?", o: ["quiet", "loud", "busy"], a: 0, ki: 0, kiText: "\"Noisy\" means a lot of noise. The opposite is \"quiet\".",
            e: "noisy = laut, quiet = leise, ruhig. loud heißt auch laut." }
        ] },
      { art: "duell", id: "duell", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Complete: When ___ the bus leave in the morning?", o: ["does", "do", "is"], a: 0, ki: 0, kiText: "\"The bus\" is it, and \"leave\" is a full verb – so \"does\".",
            e: "the bus = it → does, dann die Grundform leave: When does the bus leave?" },
          { q: "Which sentence is correct?", o: ["Bea's bike is new. Mine is old.", "Bea's bike is new. My is old.", "Bea's bike is new. Mine bike is old."], a: 0, ki: 1, kiText: "\"My\" and \"mine\" mean the same, and \"my\" is shorter – so \"My is old\" is fine.",
            e: "my braucht ein Nomen (my bike). Ohne Nomen steht mine: Mine is old. „Mine bike“ ist falsch, weil nach mine kein Nomen kommt.",
            begruende: { q: "Why is \"My is old\" wrong? Explain in one sentence.", m: "After my we need a noun, so without a noun we say mine.", k: ["noun|nomen|without|ohne|mine|alone|allein"] } },
          { q: "Complete: Frankie ___ his homework yesterday, so the teacher was angry.", o: ["didn't do", "didn't did", "doesn't do"], a: 0, ki: 0, kiText: "\"Yesterday\" means the past, and after \"didn't\" we use the base form: \"didn't do\".",
            e: "yesterday → simple past. Verneinung: didn't + Grundform: didn't do." },
          { q: "Complete: Does your sister like football? – No, she ___.", o: ["doesn't", "don't", "isn't"], a: 0, ki: 0, kiText: "The question has \"does\", and the answer is no – so \"No, she doesn't\".",
            e: "Die Kurzantwort nimmt das Hilfsverb der Frage: Does …? – No, she doesn't." },
          { q: "Complete: My grandma ___ in a factory when she was young.", o: ["worked", "works", "work"], a: 0, ki: 1, kiText: "My grandma still talks about the factory today, so the present is right: \"works\".",
            e: "when she was young zeigt die Vergangenheit: worked (simple past). Was sie heute erzählt, spielt keine Rolle." },
          { q: "Complete: These aren't our seats. ___ are over there.", o: ["Ours", "Our", "Us"], a: 0, ki: 0, kiText: "There's no noun after the gap – so we need \"Ours\" (= our seats).",
            e: "Ohne Nomen steht ours. our braucht ein Nomen (our seats), us ist ein Objekt (with us)." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 1 pros", teile: [
      { art: "tischduell", id: "tisch", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "go → simple past:", o: ["went", "goed", "gone"], a: 0, e: "go – went." },
        { q: "see → simple past:", o: ["saw", "seed", "sees"], a: 0, e: "see – saw." },
        { q: "___ she like Maths?", o: ["Does", "Do", "Is"], a: 0, e: "she → Does." },
        { q: "___ you live near here?", o: ["Do", "Does", "Are"], a: 0, e: "you → Do." },
        { q: "It's my bag. → It's ___.", o: ["mine", "my", "me"], a: 0, e: "Ohne Nomen: mine." },
        { q: "It's her pen. → It's ___.", o: ["hers", "her", "she"], a: 0, e: "Ohne Nomen: hers." },
        { q: "Bea ___ to school by bike.", o: ["rides", "ride", "riding"], a: 0, e: "Bea = she → rides." },
        { q: "Frankie ___ like chess.", o: ["doesn't", "don't", "isn't"], a: 0, e: "Frankie = he → doesn't." },
        { q: "\"laut\":", o: ["noisy", "quiet", "clean"], a: 0, e: "noisy = laut." },
        { q: "\"Küste\":", o: ["coast", "coat", "cost"], a: 0, e: "coast = Küste, coat = Mantel." },
        { q: "\"Ziege\":", o: ["goat", "cow", "coat"], a: 0, e: "goat = Ziege, cow = Kuh." },
        { q: "\"gesund\":", o: ["healthy", "heavy", "happy"], a: 0, e: "healthy = gesund." }
      ] },
      { art: "tischduell", id: "tisch", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "buy → simple past:", o: ["bought", "buyed", "brought"], a: 0, e: "buy – bought (brought kommt von bring)." },
        { q: "drive → simple past:", o: ["drove", "drived", "driven"], a: 0, e: "drive – drove." },
        { q: "Where ___ Frankie live?", o: ["does", "do", "is"], a: 0, e: "Frankie = he → does." },
        { q: "Did you ___ the film?", o: ["like", "liked", "likes"], a: 0, e: "After did: base form." },
        { q: "Our house is old. ___ is new.", o: ["Theirs", "Their", "Them"], a: 0, e: "No noun after it: Theirs." },
        { q: "Is this your phone? – Yes, it's ___.", o: ["mine", "my", "yours"], a: 0, e: "my phone → mine." },
        { q: "Bea ___ her homework after dinner.", o: ["does", "do", "dos"], a: 0, e: "she → does (with -es)." },
        { q: "Do they walk? – No, ___", o: ["they don't.", "they doesn't.", "they aren't."], a: 0, e: "Do …? – No, they don't." },
        { q: "\"Fabrik\":", o: ["factory", "farm", "fashion"], a: 0, e: "factory = Fabrik." },
        { q: "\"Umgebung\":", o: ["environment", "entrance", "exhibition"], a: 0, e: "environment = Umgebung." },
        { q: "\"leider\":", o: ["I'm afraid", "occasionally", "brilliant"], a: 0, e: "I'm afraid … = leider …" },
        { q: "\"gelegentlich\":", o: ["occasionally", "usually", "never"], a: 0, e: "occasionally = gelegentlich." }
      ] }
    ] }
  ],
  weiter: { text: "If a round went wrong: read the rule boxes of the Unit 1 grammar modules again, or try the vocabulary trainer." }
});
