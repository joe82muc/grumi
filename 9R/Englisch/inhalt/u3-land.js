/* Englisch 9R · Unit 3 Discover South Africa · Land und Leute: South Africa – the rainbow nation
   (einen Sachtext über Südafrika verstehen und mit Zeilen belegen, einer Sprachnachricht Einzelheiten entnehmen,
   Südafrika und Deutschland vergleichen, respektvoll mit Klischees und schwieriger Geschichte umgehen;
   Grammatik der Unit als Vorschau im Kontext: past progressive mit while/when, present perfect mit for/since)
   LehrplanPLUS E9 2 Interkulturelle Kompetenzen (Südafrika, Vielfalt, Vorurteile), E9 1.1 Leseverstehen,
   E9 1.2 Hörverstehen, E9 5 (Länder: Südafrika, Gesellschaft, Geschichte, Natur).
   Texte: „South Africa at a glance“ (texte/u3/land-south-africa-glance.js) und „A voice message from the coast“
   (texte/u3/land-voice-message.js) – Schule und Personen sind erfunden. */
D7Kit.seite({
  id: "u3-land",
  titel: "South Africa – the rainbow nation",
  einleitung: "South Africa is a country of many languages, landscapes and stories. You read a fact file, listen to a student's voice message from the coast, compare life there with life in Germany and learn how to talk about differences and about difficult history in a respectful way.",
  zeit: "etwa 40 Minuten",
  ziele: ["🌍 I find facts about South Africa in a text and say where they are.", "🎧 I understand a student's voice message about her day.", "🤝 I compare two countries and talk about differences politely.", "✏️ I say what I would like to do and why."],
  quiz: { profi: "South Africa pro" },
  glossar: {
    tip: ["tip", "Spitze: Das ist das äußerste Ende von etwas, zum Beispiel von einem Kontinent."],
    official: ["official language", "Amtssprache: Das ist eine Sprache, in der eine Regierung arbeitet und Gesetze schreibt."],
    rainbow: ["rainbow nation", "Regenbogennation: So nennt man Südafrika, weil dort Menschen aus vielen Kulturen zusammenleben."],
    apartheid: ["apartheid", "Apartheid: So hießen die Gesetze in Südafrika, die Menschen nach der Hautfarbe trennten. Sie waren ungerecht."],
    democracy: ["democracy", "Demokratie: In einer Demokratie wählen die Bürger ihre Regierung."],
    stereotype: ["stereotype", "Klischee: Das ist eine feste Vorstellung, die man auf alle Menschen einer Gruppe überträgt, und oft stimmt sie nicht."]
  },
  haupttext: "u3-land-fact",
  stationen: [
    { kurz: "Words", ober: "Part 1", titel: "Words for the fact file", teile: [
      { art: "text", html: "<p class=\"lead\">South Africa is a country at the end of a continent. Before you read, learn some words from the text. <span class=\"de\">Erst die wichtigen Wörter, dann der Text.</span></p>" },
      { art: "paare", id: "vokabeln", tag: "Match", titel: "New words", lead: "Find the pairs. <span class=\"de\">Links das englische Wort, rechts die deutsche Bedeutung.</span>",
        paare: [["tip", "Spitze (Ende)"], ["ocean", "Ozean"], ["rhino", "Nashorn"], ["official language", "Amtssprache"], ["vote", "wählen (bei einer Wahl)"], ["rainbow", "Regenbogen"]] },
      { art: "merke", kopf: "REMEMBER", html: "<p>A fact file gives <b>short facts</b>. Read it once to get the main idea. Then look for details. Be careful with big words like <i>all</i> and <i>only</i>: a text often says <i>many</i> or <i>some</i> instead.</p>" }
    ] },
    { kurz: "South Africa", ober: "Part 2", titel: "South Africa: land and people", teile: [
      { art: "text", html: "<p class=\"lead\">Read the fact file. Don't stop at words you don't know. <span class=\"de\">Lies den Text einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u3-land-fact" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the text about?", o: ["Facts about South Africa: land, nature, languages, history and sport", "A holiday story about a beach hotel", "How to play rugby", "The history of Europe"], a: 0,
            e: "It is a fact file: it gives short facts about the country." },
          { q: "Why is South Africa called the rainbow nation?", o: ["People from many cultures live together there.", "It rains every day.", "All houses are painted in many colours.", "There is a big rainbow over Cape Town."], a: 0,
            e: "The name is a picture for the many cultures in one country." },
          { q: "What does the last paragraph say about South Africa?", o: ["It has many different places and ways of life.", "It is only a country of animals.", "All people live in the same way.", "It has no big cities."], a: 0,
            e: "The text ends with: South Africa is not only one picture." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-land-fact",
        fragen: [
          { q: "Which two oceans are next to South Africa?", zeilen: [2, 3], e: "The Atlantic Ocean is in the west and the Indian Ocean is in the east.", tipp: "Look at the first paragraph." },
          { q: "Which animals can visitors see in the Kruger National Park?", zeilen: [7, 8], e: "They can see elephants, lions and rhinos.", tipp: "Look at the second paragraph." },
          { q: "What did the apartheid laws do?", zeilen: [21, 22], e: "They separated people by the colour of their skin.", tipp: "Look for the word apartheid." },
          { q: "What happened in 1994?", zeilen: [24, 26], e: "All adults could vote for the first time, and Nelson Mandela became the president.", tipp: "Look for the year." }
        ] },
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Pretoria is one of the three capital cities.", true],
          ["Table Mountain is above Cape Town.", true],
          ["Zulu is the only official language.", false],
          ["It is summer in South Africa when it is winter in Germany.", true],
          ["Apartheid ended in the 1960s.", false]
        ] },
      { art: "luecke", id: "steckbrief", tag: "Fact file", titel: "South Africa: fact file", lead: "Complete the fact file with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Continent: ", { g: "Africa" }],
          ["The ocean in the west: the ", { g: "Atlantic Ocean" }],
          ["Capital cities: Pretoria, Cape Town and ", { g: "Bloemfontein" }],
          ["Big animals in the Kruger National Park: elephants, lions and ", { g: "rhinos" }],
          ["First vote for all adults: ", { g: "1994" }]
        ], extra: ["Johannesburg", "1990"] }
    ] },
    { kurz: "History", ober: "Part 3", titel: "Talking about history", teile: [
      { art: "karten", karten: [
        { ic: "⚖️", titel: "Before", text: "For many years, apartheid laws separated people by the colour of their skin. They were unfair." },
        { ic: "🗳️", titel: "1994", text: "All adults could vote for the first time. Nelson Mandela became the president." },
        { ic: "🌈", titel: "Today", text: "South Africa is a democracy. The country still works on making life fairer for everybody." }
      ] },
      { art: "mc", id: "geschichte", tag: "Think", titel: "Apartheid and respect", lead: "Tick the correct answer.",
        fragen: [
          { q: "What were the apartheid laws?", o: ["Laws that separated people by the colour of their skin", "Laws about sport in schools", "Laws about national parks", "Laws about school uniforms"], a: 0,
            e: "The text says: apartheid laws separated people by the colour of their skin. They were unfair." },
          { q: "How can you talk about difficult history in a respectful way?", o: ["Listen, ask polite questions and say that unfair laws are wrong.", "Make jokes about it.", "Say that it was long ago, so it does not matter.", "Blame the young people who live there today."], a: 0,
            e: "Respectful: show interest, listen, and be clear that unfair treatment is wrong. Young people today did not make those laws." }
        ] }
    ] },
    { kurz: "Listening", ober: "Part 4", titel: "A voice message from the coast", teile: [
      { art: "text", html: "<p class=\"lead\">Thandi is fifteen and lives in a town near the coast of South Africa. Her class sends a voice message to a partner class in Germany. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p><p>The town, the school and the people are invented.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u3-land-voice", fragen: [
        { art: "mc", id: "global2", titel: "What did you hear?", lead: "Listen and tick the correct answer.",
          fragen: [
            { q: "Which language does Thandi's family speak at home?", o: ["Zulu", "German", "Afrikaans", "English"], a: 0,
              e: "Thandi says: We speak Zulu at home. At school she also learns English and Afrikaans." },
            { q: "Who lives with Thandi's family?", o: ["Her grandmother, Gogo", "Her teacher", "Her neighbour", "Her cousin Sipho"], a: 0,
              e: "Gogo is the Zulu word for grandmother. Sipho is Thandi's brother." },
            { q: "What would Thandi like to be?", o: ["A doctor", "A teacher", "A football player", "A cook"], a: 0,
              e: "She says: I would like to be a doctor, because I want to help people in my town." }
          ] },
        { art: "luecke", id: "hoer-notizen", titel: "Thandi's day", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Thandi gets up at ", { g: "six" }, "."],
            ["School begins at ", { g: "eight" }, "."],
            ["She has played in the school team since she was ", { g: "ten" }, "."]
          ], extra: ["seven", "twelve"] }
      ] }
    ] },
    { kurz: "Language", ober: "Part 5", titel: "Language: a preview of Unit 3", teile: [
      { art: "merke", kopf: "PAST PROGRESSIVE", html: "<p><b>was / were + -ing</b> tells us what was happening at a time in the past: Gogo <b>was cooking</b>. Sipho and I <b>were playing</b> football. Use <b>while</b> for two long actions and <b>when</b> for a short action that interrupts: Thandi <b>was walking</b> to school <b>when</b> it <b>started</b> to rain.</p>" },
      { art: "luecke", id: "progressive", tag: "Complete", titel: "Past progressive", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["While Gogo ", { g: "was cooking" }, ", Thandi and Sipho were playing football."],
          ["Thandi and Sipho ", { g: "were playing" }, " football when the neighbour arrived."],
          ["Thandi ", { g: "was walking" }, " to school when it started to rain."],
          ["It ", { g: "started" }, " to rain while Thandi was waiting for the bus."]
        ], extra: ["were cooking", "is walking"] },
      { art: "mc", id: "while-when", tag: "Choose", titel: "While, when, for or since?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Gogo was cooking ___ Sipho was playing football.", o: ["while", "since", "for", "ago"], a: 0,
            e: "Two long actions at the same time: use while." },
          { q: "Which sentence is correct?", o: ["Sipho has played rugby for three years.", "Sipho has played rugby since three years.", "Sipho is playing rugby since three years.", "Sipho plays rugby for three years ago."], a: 0,
            e: "For goes with a period of time (three years). Since goes with a starting point (since 2020)." }
        ] },
      { art: "luecke", id: "perfect", tag: "Complete", titel: "Present perfect with for and since", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Gogo has lived in her house ", { g: "for" }, " more than forty years."],
          ["Thandi has played in the school team ", { g: "since" }, " she was ten."],
          ["Thandi and Sipho ", { g: "have lived" }, " in the same town all their lives."]
        ], extra: ["has lived", "ago"] },
      { art: "sort", id: "zeiten", tag: "Sort", titel: "Which tense?", lead: "Put the sentences into the right box. <span class=\"de\">Achte auf was/were + -ing und has/have + Partizip.</span>",
        buckets: ["past progressive", "present perfect", "simple past"],
        items: [{ t: "Gogo was cooking in the kitchen.", b: 0 }, { t: "Sipho and I were playing football.", b: 0 },
                { t: "Gogo has cooked for us for many years.", b: 1 }, { t: "Thandi has played football since she was ten.", b: 1 },
                { t: "Our neighbour came with a bag of oranges.", b: 2 }, { t: "Thandi got up at six.", b: 2 }] },
      { art: "offen", id: "perfect-eigen", m7: true, tag: "Challenge", titel: "For or since?", lead: "Write one sentence about yourself with <b>for</b> or <b>since</b>. <span class=\"de\">Freiwillig: Wie lange machst du schon etwas?</span>",
        fragen: [{ q: "Write one sentence about yourself with for or since.", m: "I have played football for six years.", k: ["have|has", "for|since"], min: 3 }],
        tipp: "Start like this: I have lived here for … / I have played … since …" }
    ] },
    { kurz: "Compare", ober: "Part 6", titel: "Compare and think", teile: [
      { art: "sort", id: "vergleich", tag: "Sort", titel: "South Africa or Germany – or both?", lead: "Put the statements into the right box. <span class=\"de\">Denk an Bayern.</span>",
        buckets: ["South Africa", "Germany", "both"],
        items: [{ t: "The country has three capital cities.", b: 0 }, { t: "People can see elephants and lions in the wild.", b: 0 },
                { t: "Christmas Day is in winter.", b: 1 }, { t: "The capital city is Berlin.", b: 1 }, { t: "Zulu and Xhosa are official languages.", b: 0 },
                { t: "Students learn English at school.", b: 2 }, { t: "Football is a popular sport.", b: 2 },
                { t: "People vote in elections.", b: 2 }, { t: "The Indian Ocean is on the coast of the country.", b: 0 }] },
      { art: "mc", id: "klischee", tag: "Think", titel: "Stereotypes and polite questions", lead: "Tick the best answer. <span class=\"de\">Wie geht man respektvoll mit Klischees und Unterschieden um?</span>",
        fragen: [
          { q: "A classmate says: \"South Africa is only animals and safari.\" What is the best reaction?", o: ["That is only one picture. There are also big cities, schools, sport, music and many cultures.", "Yes, that is all there is.", "Don't talk about other countries.", "That is silly. You are wrong."], a: 0,
            e: "A stereotype shows only one picture. A friendly answer adds more facts without insulting anybody." },
          { q: "You write to a student from South Africa. What is a polite question?", o: ["What do you like to do at the weekend, and what music do you like?", "Why is your country so strange?", "Do you really live with lions?", "Is everything bad there?"], a: 0,
            e: "Polite: show interest, ask an open question and listen." }
        ] },
      { art: "offen", id: "wuerde-gern", tag: "Your words", titel: "What would you like to do?", lead: "What would you like to see or do in South Africa? Write two sentences with <b>would like to … because …</b>.",
        fragen: [{ q: "What would you like to see or do in South Africa?", m: "I would like to see the Kruger National Park because I love animals. I would like to try South African food because I like new tastes.", k: ["would like|'d like", "because", "see|visit|try|meet|learn|watch|go|take|eat|climb"], min: 3 }],
        tipp: "Start like this: I would like to see … because … / I would like to try … because …" },
      { art: "offen", id: "was-doing", m7: true, tag: "Challenge", titel: "What was happening?", lead: "Write two sentences about yesterday for Thandi. Use <b>while</b> or <b>when</b> and <b>was / were + -ing</b>. <span class=\"de\">Freiwillig: Was hast du gestern gerade gemacht, als etwas passiert ist?</span>",
        fragen: [{ q: "Write two sentences about yesterday with while or when.", m: "I was eating breakfast when my bus came. While I was walking to school, it was raining.", k: ["while|when", "was|were", "ing"], min: 3 }],
        tipp: "Start like this: I was … when … / While I was …, …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The module in five sentences", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["South Africa lies at the southern tip of ", { g: "Africa" }, "."],
          ["The country has many official ", { g: "languages" }, "."],
          ["For many years, ", { g: "apartheid" }, " laws separated people by the colour of their skin."],
          ["In 1994, Nelson ", { g: "Mandela" }, " became the president."],
          ["Saying that all people in a country are the same is a ", { g: "stereotype" }, "."]
        ], extra: ["Pretoria", "summer"] }
    ] }
  ],
  weiter: { text: "Well done! You know facts about South Africa, you have heard a student from the coast and you know how to talk about other cultures and difficult history in a respectful way. Keep going with Unit 3." }
});
