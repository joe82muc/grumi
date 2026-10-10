/* Englisch 9R · Unit 1 Around Australia · Land und Leute: English around the world – and Down Under
   (Englisch als Weltsprache und Varianten kennenlernen, einen Sachtext über Australien verstehen und mit Zeilen belegen,
   einer Sprachnachricht Einzelheiten entnehmen, Australien und Deutschland vergleichen, höflich mit Unterschieden und
   Klischees umgehen; Grammatik der Unit nur nebenbei: would like to, simple past, will/if)
   LehrplanPLUS E9 2 Interkulturelle Kompetenzen (Englisch als Weltverkehrssprache, Australien, Vorurteile, tolerant mit
   Vielfalt umgehen), E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 5 (Länder: Australien, Gesellschaft, Kultur, Natur).
   Texte: „Australia in ten minutes“ (texte/u1/land-australia-ten-minutes.js) und „A school day in Western Australia“
   (texte/u1/land-school-voice-message.js) – Stadt, Schule und Personen sind erfunden. */
D7Kit.seite({
  id: "u1-land",
  titel: "English around the world – and Down Under",
  einleitung: "English is spoken in many countries – and Australia is one of them. You learn who speaks English and how it changes from country to country, read a fact file about Australia, listen to an Australian student and compare life there with life in Germany.",
  zeit: "etwa 40 Minuten",
  ziele: ["🌍 I know where and why people speak English.", "📰 I find facts about Australia in a text and say where they are.", "🎧 I understand a student's voice message.", "🤝 I compare two countries and talk about differences politely."],
  quiz: { profi: "Australia pro" },
  glossar: {
    firstlang: ["first language", "Muttersprache: die Sprache, mit der man aufwächst."],
    secondlang: ["second language", "Zweitsprache: eine Sprache, die man zusätzlich im Alltag, in Schule oder Beruf benutzt."],
    common: ["common language", "Gemeinsame Sprache: Menschen mit verschiedenen Muttersprachen verständigen sich darin, zum Beispiel auf Englisch."],
    stereotype: ["stereotype", "Klischee: eine feste Vorstellung, die man auf alle Menschen einer Gruppe überträgt – oft stimmt sie nicht."],
    outback: ["the Outback", "Der trockene, dünn besiedelte Teil im Landesinneren von Australien."],
    continent: ["continent", "Erdteil, zum Beispiel Europa, Asien oder Australien."]
  },
  haupttext: "u1-land-fact",
  stationen: [
    { kurz: "World English", ober: "Part 1", titel: "English as a world language", teile: [
      { art: "text", html: "<p class=\"lead\">More than a billion people speak English as a first or second language. But English is not the same in every country – and not everybody learns it in the same way.</p>" },
      { art: "karten", karten: [
        { ic: "🏠", titel: "First language", text: "English is the language you grow up with, for example in Australia or Ireland." },
        { ic: "📚", titel: "Second language", text: "You learn English in addition to your own language and use it at work or at school, for example in India." },
        { ic: "🤝", titel: "Common language", text: "People with different first languages talk English to each other – on holiday, online or at work." }
      ] },
      { art: "text", html: "<p class=\"lead\">Look at the map: In the blue countries English is an official language or widely used. <span class=\"de\">Tippe die Karte an, um sie zu vergrößern. Unten stehen die Länder nach Erdteilen.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-english-world.jpg\" alt=\"World map: countries where English is an official or widely used language, with lists for Europe, North America and the Caribbean, South America, Africa, Asia and Oceania\" loading=\"lazy\" width=\"1448\" height=\"1086\" style=\"display:block;width:100%;max-width:860px;height:auto;border-radius:12px;border:1px solid rgba(0,0,0,.12)\"><figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI (made with AI) · a simple overview map – small countries and islands are not exact</figcaption></figure>" },
      { art: "sort", id: "laender", tag: "Sort", titel: "Where do people speak English?", lead: "Put the countries into the right box. <span class=\"de\">In welchen Ländern ist Englisch für viele Muttersprache, in welchen wichtige Zweitsprache?</span>",
        buckets: ["English is the first language of most people", "English is an important second language"],
        items: [{ t: "Australia", b: 0 }, { t: "New Zealand", b: 0 }, { t: "Ireland", b: 0 }, { t: "the USA", b: 0 },
                { t: "India", b: 1 }, { t: "South Africa", b: 1 }, { t: "Nigeria", b: 1 }] },
      { art: "mc", id: "weltsprache", tag: "Think", titel: "A common language", lead: "Tick the correct answer.",
        fragen: [
          { q: "A student from Brazil and a student from Japan meet online. Which language do they probably use?", o: ["English as a common language", "Portuguese", "Japanese", "German"], a: 0,
            e: "Many people use English as a common language when they have different first languages." },
          { q: "What does \"common language\" mean?", o: ["People with different first languages use it to talk to each other.", "Everybody in the world speaks it as a first language.", "It is only used in school books.", "It is the oldest language in the world."], a: 0,
            e: "A common language helps people from different countries to understand each other." },
          { q: "Look at the lists under the map. Which continent has the most countries where English is official or widely used?", o: ["Africa", "Europe", "Asia", "South America"], a: 0,
            e: "The list for Africa is the longest: 23 countries. Europe has three, Asia four and South America one." }
        ] },
      { art: "offen", id: "englisch-alltag", tag: "Your words", titel: "English in your life", lead: "Where do you meet English? Write one sentence. <span class=\"de\">Zum Beispiel: Songs, Videos, Spiele, Urlaub, Beruf.</span>",
        fragen: [{ q: "Where do you meet English in your daily life?", m: "I meet English in songs, in videos and in computer games.", k: ["english|songs|music|videos|games|internet|holiday|school|film|films", "i|my"], min: 2 }],
        tipp: "Start like this: I meet English in … / I use English when …" }
    ] },
    { kurz: "Words", ober: "Part 1", titel: "Same thing, different word", teile: [
      { art: "text", html: "<p class=\"lead\">English changes from country to country. People still understand each other, but some words are different.</p>" },
      { art: "paare", id: "britisch-amerikanisch", tag: "Match", titel: "British – American", lead: "Find the pairs. <span class=\"de\">Links das britische Wort, rechts das amerikanische.</span>",
        paare: [["rubbish", "trash"], ["lift", "elevator"], ["biscuit", "cookie"], ["flat", "apartment"], ["holiday", "vacation"], ["football", "soccer"]] },
      { art: "paare", id: "australisch", tag: "Match", titel: "Australian words", lead: "Find the pairs. <span class=\"de\">Australier kürzen viele Wörter ab.</span>",
        paare: [["G'day", "hello"], ["arvo", "afternoon"], ["barbie", "barbecue"], ["brekkie", "breakfast"]] },
      { art: "merke", kopf: "REMEMBER", html: "<p>There is no \"wrong\" English: British, American and Australian English are all <b>correct</b>. Just don't mix them in one text, and ask if you don't understand a word.</p>" }
    ] },
    { kurz: "Australia", ober: "Part 2", titel: "Australia: country and people", teile: [
      { art: "text", html: "<p class=\"lead\">Now a closer look at one country where English is the first language. Read the fact file. Don't stop at words you don't know. <span class=\"de\">Lies den Text einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u1-land-fact" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the text about?", o: ["Facts about Australia: land, animals, people and daily life", "A holiday story about a beach", "How to learn English quickly", "A history of the Outback"], a: 0,
            e: "It is a fact file: it gives short facts about the country." },
          { q: "Why do most Australians live near the coast?", o: ["The middle of the country is very hot and very dry.", "There are no towns in the south.", "The coast is closer to Germany.", "School is only allowed near the sea."], a: 0,
            e: "The Outback in the middle is hot and dry, so most people live near the coast." },
          { q: "What is special about the seasons?", o: ["They are the other way round: summer in Australia is winter in Germany.", "There are only two seasons.", "It is always summer.", "Winter is in December in both countries."], a: 0,
            e: "When it is winter in Germany, it is summer in Australia." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-land-fact",
        fragen: [
          { q: "Why do most people live near the coast?", zeilen: [8, 9], e: "The middle of the country is very hot and very dry.", tipp: "Look at the second paragraph." },
          { q: "What is special about Christmas in Australia?", zeilen: [13, 14], e: "Christmas is in the middle of the summer.", tipp: "Look for the word Christmas." },
          { q: "What is strange about the platypus?", zeilen: [19, 20], e: "It is a mammal, but it lays eggs and has a bill like a duck.", tipp: "Look for the word platypus." },
          { q: "Who were the first people on the continent?", zeilen: [23, 24], e: "The Aboriginal and Torres Strait Islander peoples.", tipp: "Look at the fifth paragraph." }
        ] },
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Sydney is the capital of Australia.", false],
          ["Australia is the sixth largest country in the world.", true],
          ["Koalas eat the leaves of eucalyptus trees.", true],
          ["The Outback is a region on the coast.", false],
          ["English is the main language in Australia.", true]
        ] },
      { art: "luecke", id: "steckbrief", tag: "Fact file", titel: "Australia: fact file", lead: "Complete the fact file with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Capital: ", { g: "Canberra" }],
          ["Size: the ", { g: "sixth" }, " largest country in the world"],
          ["Most people live near the ", { g: "coast" }, "."],
          ["The hot and dry middle of the country: the ", { g: "Outback" }],
          ["Christmas is in ", { g: "summer" }, "."]
        ], extra: ["winter", "Sydney"] }
    ] },
    { kurz: "Listening", ober: "Part 3", titel: "A school day in Western Australia", teile: [
      { art: "text", html: "<p class=\"lead\">Ruby is fourteen and lives in Western Australia. Her class sends a voice message to a partner class in Germany. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p><p>The town, the school and the people are invented.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u1-land-voice", fragen: [
        { art: "mc", id: "global2", titel: "What did you hear?", lead: "Listen and tick the correct answer.",
          fragen: [
            { q: "How does Ruby get to school?", o: ["by school bus", "by bike", "on foot", "by train"], a: 0,
              e: "She lives on a farm and takes the school bus." },
            { q: "What does \"arvo\" mean?", o: ["afternoon", "breakfast", "uniform", "barbecue"], a: 0,
              e: "\"Arvo\" is the short Australian word for afternoon." },
            { q: "Why do the students wear a hat outside?", o: ["The sun is very strong.", "It is a rule in Germany.", "It rains a lot.", "The hat is part of a game."], a: 0,
              e: "Ruby says the sun is very strong there." }
          ] },
        { art: "luecke", id: "hoer-notizen", titel: "Ruby's school day", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The school shirt is ", { g: "green" }, "."],
            ["Ruby's favourite lesson is ", { g: "science" }, "."],
            ["The family has a barbie on ", { g: "Saturday" }, "."]
          ], extra: ["blue", "maths"] }
      ] }
    ] },
    { kurz: "Compare", ober: "Part 4", titel: "Compare and think", teile: [
      { art: "sort", id: "vergleich", tag: "Sort", titel: "Australia or Germany – or both?", lead: "Put the statements into the right box. <span class=\"de\">Denk an Bayern.</span>",
        buckets: ["Australia", "Germany", "both"],
        items: [{ t: "Christmas is in the summer.", b: 0 }, { t: "Christmas is in the winter.", b: 1 },
                { t: "The school year starts at the end of January.", b: 0 }, { t: "The school year starts in September.", b: 1 },
                { t: "Many students wear a school uniform.", b: 0 }, { t: "Students learn maths and science.", b: 2 },
                { t: "Most people live in cities and towns.", b: 2 }, { t: "The main language is German.", b: 1 }] },
      { art: "mc", id: "klischee", tag: "Think", titel: "Stereotypes and polite questions", lead: "Tick the best answer. <span class=\"de\">Wie geht man höflich mit Klischees und Unterschieden um?</span>",
        fragen: [
          { q: "A classmate says: \"All Australians surf and have a kangaroo.\" What is the best reaction?", o: ["That is a stereotype. Many Australians live in cities and don't surf.", "Yes, everybody there surfs.", "Don't talk about other countries.", "That is silly. You are wrong."], a: 0,
            e: "A stereotype puts all people into one box. A friendly answer corrects it without insulting anybody." },
          { q: "Your partner in Australia says: \"We go to school in January.\" What is a polite reaction?", o: ["Interesting! In Germany our school year starts in September. Why is it different?", "That is strange.", "That's wrong. School starts in September.", "I don't want to hear about it."], a: 0,
            e: "Polite: show interest, say how it is at home and ask a question." }
        ] },
      { art: "offen", id: "wuerde-gern", tag: "Your words", titel: "What would you like to do?", lead: "What would you like to see or do in Australia? Write two sentences with <b>would like to … because …</b>.",
        fragen: [{ q: "What would you like to see or do in Australia?", m: "I would like to see a koala because I love animals. I would like to swim in the sea because it is warm there.", k: ["would like|'d like", "because", "see|visit|swim|surf|go|meet|try|learn|walk"], min: 3 }],
        tipp: "Start like this: I would like to see … because … / I would like to visit … because …" },
      { art: "offen", id: "my-country", m7: true, tag: "Challenge", titel: "Your own country", lead: "Write two sentences about your own country for an Australian student. <span class=\"de\">Freiwillig: Was würdest du einem Austauschpartner über Deutschland erzählen?</span>",
        fragen: [{ q: "Write two sentences about your own country for an Australian student.", m: "In Germany we have four seasons. In winter it is cold and it sometimes snows.", k: ["germany|my country|we", "season|seasons|winter|summer|school|cold|snow|food|city|live|speak"], min: 2 }],
        tipp: "Think of seasons, school, food or cities. Start with: In Germany we …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The module in five sentences", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In India, millions of people speak English as a ", { g: "second" }, " language."],
          ["British people say \"rubbish\", Americans say \"", { g: "trash" }, "\"."],
          ["The first people in Australia were the ", { g: "Aboriginal" }, " and Torres Strait Islander peoples."],
          ["Saying that all Australians surf is a ", { g: "stereotype" }, "."],
          ["When we meet a different way of life, we ask questions and stay ", { g: "polite" }, "."]
        ], extra: ["capital", "angry"] }
    ] }
  ],
  weiter: { text: "Well done! You know where English is spoken, how it changes and what is special about Australia. Keep going with Unit 1." }
});


