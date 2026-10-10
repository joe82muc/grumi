/* Englisch 9R · Unit 4 News from New Zealand · Land und Leute: New Zealand – Aotearoa
   (einen Sachtext über Neuseeland verstehen und mit Zeilen belegen, einer Sprachnachricht Einzelheiten entnehmen,
   Neuseeland und Deutschland vergleichen, respektvoll mit einer anderen Kultur umgehen;
   Grammatik der Unit als Vorschau im Kontext: going to-future für Pläne, Passiv nur zum Verstehen)
   LehrplanPLUS E9 2 Interkulturelle Kompetenzen (Neuseeland, Māori-Kultur, Vorurteile), E9 1.1 Leseverstehen,
   E9 1.2 Hörverstehen, E9 5 (Länder: Neuseeland, Natur, Freizeit und Vereine).
   Texte: „New Zealand at a glance“ (texte/u4/land-new-zealand-glance.js) und „A voice message from the North Island“
   (texte/u4/land-voice-message.js) – Schule und Personen sind erfunden. */
D7Kit.seite({
  id: "u4-land",
  titel: "New Zealand – Aotearoa",
  einleitung: "New Zealand is a country of islands, mountains and sport, and the first people there were the Māori. You read a fact file, listen to a student's voice message, compare life there with life in Germany and learn how to talk about another culture in a respectful way.",
  zeit: "etwa 40 Minuten",
  ziele: ["🌍 I find facts about New Zealand in a text and say where they are.", "🎧 I understand a student's voice message about his life and his plans.", "🤝 I compare two countries and talk about another culture politely.", "✏️ I say what I would like to do and why."],
  quiz: { profi: "New Zealand pro" },
  glossar: {
    island: ["island", "Insel: Das ist Land, das ganz vom Wasser umgeben ist."],
    spring: ["hot spring", "Heiße Quelle: Das ist eine Stelle, an der heißes Wasser aus der Erde kommt."],
    official: ["official language", "Amtssprache: Das ist eine Sprache, in der eine Regierung arbeitet und Gesetze schreibt."],
    maori: ["Māori", "Māori: So heißen die ersten Bewohner Neuseelands, und so heißt auch ihre Sprache."],
    haka: ["haka", "Haka: Das ist ein traditioneller Tanz der Māori mit kräftigen Bewegungen und lauten Stimmen."],
    stereotype: ["stereotype", "Klischee: Das ist eine feste Vorstellung, die man auf alle Menschen einer Gruppe überträgt, und oft stimmt sie nicht."]
  },
  haupttext: "u4-land-fact",
  stationen: [
    { kurz: "Words", ober: "Part 1", titel: "Words for the fact file", teile: [
      { art: "text", html: "<p class=\"lead\">New Zealand is a country in the Pacific Ocean. Before you read, learn some words from the text. <span class=\"de\">Erst die wichtigen Wörter, dann der Text.</span></p>" },
      { art: "paare", id: "vokabeln", tag: "Match", titel: "New words", lead: "Find the pairs. <span class=\"de\">Links das englische Wort, rechts die deutsche Bedeutung.</span>",
        paare: [["island", "Insel"], ["volcano", "Vulkan"], ["hot spring", "heiße Quelle"], ["sheep", "Schaf"], ["official language", "Amtssprache"], ["greet", "begrüßen"]] },
      { art: "merke", kopf: "REMEMBER", html: "<p>A fact file gives <b>short facts</b>. Read it once to get the main idea (<i>skimming</i>). Then look for details (<i>scanning</i>). Be careful with big words like <i>all</i> and <i>only</i>: a text often says <i>many</i> or <i>some</i> instead.</p>" }
    ] },
    { kurz: "New Zealand", ober: "Part 2", titel: "New Zealand: land and people", teile: [
      { art: "text", html: "<p class=\"lead\">Read the fact file. Don't stop at words you don't know. <span class=\"de\">Lies den Text einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u4-land-fact" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the text about?", o: ["Facts about New Zealand: land, languages, nature and sport", "A holiday story about a beach hotel", "How to learn to play cricket", "The history of Australia"], a: 0,
            e: "It is a fact file: it gives short facts about the country." },
          { q: "Which people lived in New Zealand first?", o: ["The Māori", "The Kiwis", "The All Blacks", "People from Europe"], a: 0,
            e: "The text says: The Māori were the first people to live in New Zealand." },
          { q: "What does the last paragraph say about New Zealand?", o: ["It is more than one picture, and the people live like young people in Germany in many ways.", "It is only a country of sheep.", "All people live on farms.", "Nobody goes to school there."], a: 0,
            e: "The text ends with a tip: do not think of only one picture, and be polite and curious." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-land-fact",
        fragen: [
          { q: "Where is New Zealand?", zeilen: [1, 2], e: "It lies in the South Pacific Ocean, south-east of Australia.", tipp: "Look at the first paragraph." },
          { q: "Which languages are official languages in New Zealand?", zeilen: [7, 8], e: "English, Māori and New Zealand Sign Language are official languages.", tipp: "Look at the second paragraph." },
          { q: "Why is the kiwi special?", zeilen: [14, 16], e: "The kiwi is a bird that cannot fly, and it is a famous symbol of the country.", tipp: "Look for the word kiwi." },
          { q: "What is the haka?", zeilen: [21, 23], e: "The haka is a traditional Māori dance with strong movements and loud voices.", tipp: "Look for the word haka." }
        ] },
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Auckland is the biggest city in New Zealand.", true],
          ["Kia ora is a way to greet people.", true],
          ["The kiwi is a bird that can fly very high.", false],
          ["Only English is an official language in New Zealand.", false],
          ["It is summer in New Zealand when it is winter in Germany.", true]
        ] },
      { art: "luecke", id: "steckbrief", tag: "Fact file", titel: "New Zealand: fact file", lead: "Complete the fact file with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The ocean around the country: the ", { g: "Pacific Ocean" }],
          ["The capital city: ", { g: "Wellington" }],
          ["The biggest city: ", { g: "Auckland" }],
          ["The Māori name of the country: ", { g: "Aotearoa" }],
          ["The national rugby team: the ", { g: "All Blacks" }]
        ], extra: ["Atlantic Ocean", "Sydney"] }
    ] },
    { kurz: "Culture", ober: "Part 3", titel: "Talking about another culture", teile: [
      { art: "karten", karten: [
        { ic: "👋", titel: "Kia ora", text: "Kia ora is a greeting. People in New Zealand use it in daily life." },
        { ic: "🏉", titel: "The haka", text: "The haka is a traditional Māori dance. The All Blacks perform it before a match." },
        { ic: "🤝", titel: "Respect", text: "Listen, ask polite questions and say new words carefully." }
      ] },
      { art: "mc", id: "kultur", tag: "Think", titel: "Respect for traditions", lead: "Tick the correct answer.",
        fragen: [
          { q: "How can you show respect for a tradition like the haka?", o: ["Watch with interest, ask questions and don't make fun of it.", "Copy it as a joke at a party.", "Say that it is strange.", "Don't listen when somebody explains it."], a: 0,
            e: "Respect means: be interested, listen and never make fun of the traditions of other people." }
        ] }
    ] },
    { kurz: "Listening", ober: "Part 4", titel: "A voice message from the North Island", teile: [
      { art: "text", html: "<p class=\"lead\">Tama is fifteen and lives in a small town on the North Island of New Zealand. His class sends a voice message to a partner class in Germany. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p><p>The town, the school and the people are invented.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u4-land-voice", fragen: [
        { art: "mc", id: "global2", titel: "What did you hear?", lead: "Listen and tick the correct answer.",
          fragen: [
            { q: "What does Tama do on Tuesday and Thursday?", o: ["He trains with his rugby club.", "He plays matches.", "He goes camping.", "He stays at home."], a: 0,
              e: "Tama says: We train on Tuesday and Thursday. The matches are on Saturday." },
            { q: "Where is Tama's family going to camp in the summer holidays?", o: ["By a lake on the South Island", "On a farm with sheep", "At the beach in Germany", "In a hotel in Wellington"], a: 0,
              e: "He says: My family is going to travel to the South Island. We are going to camp by a lake." },
            { q: "What would Tama like to work with later?", o: ["Animals", "Computers", "Cars", "Children"], a: 0,
              e: "He says: I would like to work with animals, because I love being outside." }
          ] },
        { art: "luecke", id: "hoer-notizen", titel: "Tama's week", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Tama's day starts at ", { g: "seven" }, "."],
            ["School ends at ", { g: "three" }, " o'clock."],
            ["The matches of his club are on ", { g: "Saturday" }, "."]
          ], extra: ["eight", "Sunday"] }
      ] }
    ] },
    { kurz: "Language", ober: "Part 5", titel: "Language: a preview of Unit 4", teile: [
      { art: "merke", kopf: "GOING TO-FUTURE", html: "<p>We use <b>am / is / are + going to + verb</b> for plans: Tama's family <b>is going to travel</b> to the South Island. I <b>am going to swim</b> every day. For \"no\", use <b>not</b>: My grandad <b>is not going to come</b>.</p>" },
      { art: "luecke", id: "goingto", tag: "Complete", titel: "Plans for the holidays", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Tama's family ", { g: "is going to travel" }, " to the South Island."],
          ["Tama and his family ", { g: "are going to camp" }, " by a lake."],
          ["Tama ", { g: "is going to swim" }, " in the lake every day."],
          ["His grandad ", { g: "is not going to come" }, ", because he does not like tents."]
        ], extra: ["is going travel", "are going to goes"] },
      { art: "merke", kopf: "PASSIVE · UNDERSTAND IT", html: "<p>In a <b>passive</b> sentence, the important thing comes first. Often we do not say who does it, or we say it with <b>by</b>: <i>The haka <b>is performed</b> before matches.</i> = The players perform the haka before matches. You do not have to write passive sentences yourself in this module. <span class=\"de\">Du musst Passivsätze hier nur verstehen: Wer tut etwas? Was bedeutet der Satz?</span></p>" },
      { art: "mc", id: "passiv", tag: "Understand", titel: "Who does something?", lead: "Tick the correct answer. <span class=\"de\">Nur verstehen, nicht selbst bilden.</span>",
        fragen: [
          { q: "\"The haka is performed before matches.\" Who performs the haka?", o: ["The players", "The fans in the stadium", "The referee", "The sheep"], a: 0,
            e: "Is performed means that somebody does it. In the text, the players perform the haka." },
          { q: "\"English and Māori are spoken in New Zealand.\" What does this sentence say?", o: ["People in New Zealand speak English and Māori.", "Nobody speaks English there.", "English and Māori are two sports.", "People speak these languages only in Germany."], a: 0,
            e: "Are spoken means that people speak these languages." },
          { q: "\"Rugby is played by many young people.\" What does this sentence say?", o: ["Many young people play rugby.", "Rugby plays many young people.", "Young people do not like rugby.", "Rugby is only for older people."], a: 0,
            e: "The word by shows who does it: young people. They play rugby." }
        ] },
      { art: "sort", id: "aktiv-passiv", tag: "Sort", titel: "Active or passive?", lead: "Put the sentences into the right box. <span class=\"de\">Passiv erkennst du an is / are + Partizip, zum Beispiel is played.</span>",
        buckets: ["active", "passive"],
        items: [{ t: "The players perform the haka.", b: 0 }, { t: "The haka is performed before matches.", b: 1 },
                { t: "Rugby is played in many schools and clubs.", b: 1 }, { t: "Many young people play football or cricket.", b: 0 },
                { t: "People say kia ora to greet each other.", b: 0 }, { t: "Māori words are heard in daily life.", b: 1 }] },
      { art: "offen", id: "goingto-eigen", m7: true, tag: "Challenge", titel: "Your plans", lead: "Write two sentences about your plans for the holidays with <b>going to</b>. <span class=\"de\">Freiwillig: Was hast du vor?</span>",
        fragen: [{ q: "Write two sentences about your plans with going to.", m: "I am going to visit my cousins. I am not going to stay at home.", k: ["going to", "am|are|is|'m"], min: 3 }],
        tipp: "Start like this: I am going to … / We are going to … / I am not going to …" }
    ] },
    { kurz: "Compare", ober: "Part 6", titel: "Compare and think", teile: [
      { art: "sort", id: "vergleich", tag: "Sort", titel: "New Zealand or Germany – or both?", lead: "Put the statements into the right box. <span class=\"de\">Denk an Bayern.</span>",
        buckets: ["New Zealand", "Germany", "both"],
        items: [{ t: "The country is in the Pacific Ocean.", b: 0 }, { t: "Christmas Day is in summer.", b: 0 },
                { t: "The capital city is Berlin.", b: 1 }, { t: "Christmas Day is in winter.", b: 1 }, { t: "The national rugby team is called the All Blacks.", b: 0 },
                { t: "Football is a popular sport.", b: 2 }, { t: "Many young people train with a club.", b: 2 },
                { t: "Young people go to school and listen to music.", b: 2 }, { t: "Māori is an official language.", b: 0 }] },
      { art: "mc", id: "klischee", tag: "Think", titel: "Stereotypes and polite questions", lead: "Tick the best answer. <span class=\"de\">Wie geht man respektvoll mit Klischees und Unterschieden um?</span>",
        fragen: [
          { q: "A classmate says: \"New Zealand is only sheep and mountains.\" What is the best reaction?", o: ["That is only one picture. There are also cities, schools, sport, music and different cultures.", "Yes, that is all there is.", "Don't talk about other countries.", "That is silly. You are wrong."], a: 0,
            e: "A stereotype shows only one picture. A friendly answer adds more facts without insulting anybody." },
          { q: "You write to a student from New Zealand. What is a polite question?", o: ["What do you like to do at the weekend, and what sport do you play?", "Why is your country so strange?", "Do you really live with sheep?", "Is everything boring there?"], a: 0,
            e: "Polite: show interest, ask an open question and listen." }
        ] },
      { art: "offen", id: "wuerde-gern", tag: "Your words", titel: "What would you like to do?", lead: "What would you like to see or do in New Zealand? Write two sentences with <b>would like to … because …</b>.",
        fragen: [{ q: "What would you like to see or do in New Zealand?", m: "I would like to see the volcanoes because I think they are exciting. I would like to learn some Māori words because I like new languages.", k: ["would like|'d like", "because", "see|visit|try|meet|learn|watch|go|take|climb|hear"], min: 3 }],
        tipp: "Start like this: I would like to see … because … / I would like to learn … because …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The module in five sentences", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The first people in New Zealand were the ", { g: "Māori" }, "."],
          ["People say ", { g: "kia ora" }, " to greet each other."],
          ["Before a rugby match, the All Blacks perform the ", { g: "haka" }, "."],
          ["The ", { g: "kiwi" }, " is a bird that cannot fly."],
          ["Saying that all people in a country are the same is a ", { g: "stereotype" }, "."]
        ], extra: ["volcano", "Wellington"] }
    ] }
  ],
  weiter: { text: "Well done! You know facts about New Zealand, you have heard a student from the North Island and you know how to talk about another culture in a respectful way. Keep going with Unit 4." }
});
