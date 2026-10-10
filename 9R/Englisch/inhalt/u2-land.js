/* Englisch 9R · Unit 2 Exploring India · Land und Leute: India – one country, many worlds
   (einen Sachtext über Indien verstehen und mit Zeilen belegen, Englisch als Zweitsprache in Indien kennenlernen,
   einer Sprachnachricht Einzelheiten entnehmen, Indien und Deutschland vergleichen, respektvoll mit Festen, Unterschieden
   und Klischees umgehen; Grammatik der Unit im Kontext: simple present, Häufigkeitsadverbien, Wortstellung)
   LehrplanPLUS E9 2 Interkulturelle Kompetenzen (Indien, Feste, Vorurteile, tolerant mit Vielfalt umgehen),
   E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 5 (Länder: Indien, Gesellschaft, Kultur, Natur).
   Texte: „India in ten minutes“ (texte/u2/land-india-ten-minutes.js) und „The day before Diwali“
   (texte/u2/land-voice-message.js) – Stadt, Schule und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-land",
  titel: "India – one country, many worlds",
  einleitung: "India is a huge country with many languages, landscapes and festivals. You read a fact file, listen to a student's voice message from India, compare life there with life in Germany and learn how to talk about differences in a friendly way.",
  zeit: "etwa 40 Minuten",
  ziele: ["🌏 I find facts about India in a text and say where they are.", "🎧 I understand a student's voice message about a festival.", "🤝 I compare two countries and talk about differences politely.", "✍️ I use the simple present and say what I would like to do."],
  quiz: { profi: "India pro" },
  glossar: {
    monsoon: ["monsoon", "Monsun: der Wind, der in Südasien im Sommer sehr viel Regen bringt."],
    official: ["official language", "Amtssprache: die Sprache, in der eine Regierung arbeitet und Gesetze schreibt."],
    festival: ["festival", "Fest: ein besonderer Tag oder mehrere Tage, an denen Menschen mit Traditionen feiern."],
    diwali: ["Diwali", "Diwali ist das Lichterfest. Viele Familien in Indien zünden dabei kleine Lampen an."],
    holi: ["Holi", "Holi ist das Fest der Farben. Die Menschen werfen dabei buntes Pulver und feiern zusammen."],
    rangoli: ["rangoli", "Rangoli ist ein buntes Muster aus Pulver, das man vor die Haustür auf den Boden legt."],
    stereotype: ["stereotype", "Klischee: eine feste Vorstellung, die man auf alle Menschen einer Gruppe überträgt – oft stimmt sie nicht."]
  },
  haupttext: "u2-land-fact",
  stationen: [
    { kurz: "Words", ober: "Part 1", titel: "Words for the fact file", teile: [
      { art: "text", html: "<p class=\"lead\">India is a big country in Asia. Before you read, learn some words from the text. <span class=\"de\">Erst die wichtigen Wörter, dann der Text.</span></p>" },
      { art: "paare", id: "vokabeln", tag: "Match", titel: "New words", lead: "Find the pairs. <span class=\"de\">Links das englische Wort, rechts die deutsche Bedeutung.</span>",
        paare: [["monsoon", "Monsun (Regenzeit)"], ["official language", "Amtssprache"], ["powder", "Pulver"], ["marble", "Marmor"], ["railway", "Eisenbahn"], ["lamp", "Lampe"]] },
      { art: "merke", kopf: "REMEMBER", html: "<p>A fact file gives <b>short facts</b>. Read it once to get the main idea. Then look for details. Facts are not the same as opinions: \"India is big\" is a fact, \"India is the best\" is an opinion.</p>" }
    ] },
    { kurz: "India", ober: "Part 2", titel: "India: country and people", teile: [
      { art: "text", html: "<p class=\"lead\">Read the fact file. Don't stop at words you don't know. <span class=\"de\">Lies den Text einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u2-land-fact" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the text about?", o: ["Facts about India: land, languages, festivals and daily life", "A holiday story about a beach", "How to play cricket", "The history of the railway"], a: 0,
            e: "It is a fact file: it gives short facts about the country." },
          { q: "Why do two people from different parts of India often speak English to each other?", o: ["They have different regional languages and English is a common language.", "Hindi is forbidden in schools.", "Nobody in India speaks Hindi.", "English is easier than all other languages."], a: 0,
            e: "India has many regional languages. English works as a common language between people from different regions." },
          { q: "What does the last paragraph say about India?", o: ["India has many different places and ways of life.", "India is only a country of big cities.", "All people in India live the same way.", "India has no mountains."], a: 0,
            e: "The text ends with: India is not only one picture." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-land-fact",
        fragen: [
          { q: "When does the monsoon bring heavy rain?", zeilen: [9, 10], e: "In summer, from about June to September.", tipp: "Look at the second paragraph." },
          { q: "Why is English an important second language in India?", zeilen: [14, 16], e: "People from different parts of the country use English to talk to each other.", tipp: "Look at the third paragraph." },
          { q: "What do families do at Diwali?", zeilen: [20, 22], e: "They light small lamps and share sweets.", tipp: "Look for the word Diwali." },
          { q: "What is the Taj Mahal made of?", zeilen: [30, 31], e: "It is made of white marble.", tipp: "Look at the last paragraph." }
        ] },
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["New Delhi is the capital of India.", true],
          ["Hindi is the only language in India.", false],
          ["The Himalayas are in the south of India.", false],
          ["Cricket is a very popular sport in India.", true],
          ["Holi is the festival of lights.", false]
        ] },
      { art: "luecke", id: "steckbrief", tag: "Fact file", titel: "India: fact file", lead: "Complete the fact file with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Continent: ", { g: "Asia" }],
          ["Capital: ", { g: "New Delhi" }],
          ["The highest mountains in the north: the ", { g: "Himalayas" }],
          ["Official languages of the national government: English and ", { g: "Hindi" }],
          ["The rain in summer: the ", { g: "monsoon" }]
        ], extra: ["Europe", "Diwali"] }
    ] },
    { kurz: "English", ober: "Part 3", titel: "English in India", teile: [
      { art: "karten", karten: [
        { ic: "🏫", titel: "At school", text: "Many students learn Hindi, English and a regional language." },
        { ic: "🎓", titel: "At university", text: "Many courses are in English, so students from all regions can study together." },
        { ic: "💼", titel: "At work", text: "Many companies use English with customers and with colleagues from other regions." }
      ] },
      { art: "mc", id: "englisch-indien", tag: "Think", titel: "A second language", lead: "Tick the correct answer.",
        fragen: [
          { q: "What does \"second language\" mean?", o: ["You learn it in addition to your first language and use it at school or at work.", "It is the language you speak first in the morning.", "It is a language that nobody uses.", "It is only for tourists."], a: 0,
            e: "A second language is a language you use in addition to the language you grow up with." },
          { q: "A student from Germany visits India and does not know any Hindi. Which language can help?", o: ["English, because many people there speak it.", "French, because it is a world language.", "Latin, because it is old.", "None, there is no help."], a: 0,
            e: "English is an important second language in India, so tourists often get help in English." }
        ] },
      { art: "offen", id: "englisch-alltag", tag: "Your words", titel: "Why English?", lead: "Why is English useful for you? Write one sentence. <span class=\"de\">Zum Beispiel: Reisen, Musik, Videos, Beruf.</span>",
        fragen: [{ q: "Why is English useful for you?", m: "English is useful for me because I can talk to people on holiday and I understand songs and videos.", k: ["english", "because|so|when", "holiday|travel|job|work|songs|music|videos|internet|games|people|school|friends"], min: 3 }],
        tipp: "Start like this: English is useful for me because … / I use English when …" }
    ] },
    { kurz: "Listening", ober: "Part 4", titel: "The day before Diwali", teile: [
      { art: "text", html: "<p class=\"lead\">Anaya is fifteen and lives in a town in the south of India. Her class sends a voice message to a partner class in Germany. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p><p>The town, the school and the people are invented.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u2-land-voice", fragen: [
        { art: "mc", id: "global2", titel: "What did you hear?", lead: "Listen and tick the correct answer.",
          fragen: [
            { q: "Which language does Anaya speak at home?", o: ["Kannada", "German", "Hindi", "English"], a: 0,
              e: "At home Anaya's family speaks Kannada. At school she learns Hindi and English." },
            { q: "What is a rangoli?", o: ["a pattern of coloured powder on the floor", "a kind of sweet", "a school uniform", "a lamp made of paper"], a: 0,
              e: "Anaya says: a rangoli is a pattern of coloured powder on the floor." },
            { q: "Why do the family light lamps?", o: ["Diwali is the festival of lights.", "It is dark in the classroom.", "The lessons start early.", "Holi is tomorrow."], a: 0,
              e: "At Diwali people light lamps, because it is the festival of lights." }
          ] },
        { art: "luecke", id: "hoer-notizen", titel: "Anaya's day", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The lessons finish at half past ", { g: "twelve" }, "."],
            ["Anaya's favourite lesson is ", { g: "English" }, "."],
            ["Her brother Dev puts small ", { g: "lamps" }, " next to the rangoli."]
          ], extra: ["three", "maths"] }
      ] }
    ] },
    { kurz: "Language", ober: "Part 5", titel: "Language: simple present and word order", teile: [
      { art: "merke", kopf: "SIMPLE PRESENT", html: "<p>He / she / it gets an <b>-s</b>: Anaya <b>speaks</b> Kannada. Negative and questions with <b>do / does</b>: Her cousins <b>do not</b> live in her town. <b>Does</b> Anaya wear a uniform? Word order: who – what – <b>how</b> – <b>where</b> – <b>when</b>. Adverbs like <i>often</i> and <i>always</i> stand before the verb: Dev <b>often</b> plays cricket.</p>" },
      { art: "luecke", id: "present", tag: "Complete", titel: "Simple present", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Anaya ", { g: "speaks" }, " Kannada at home."],
          ["Her cousins ", { g: "do not" }, " live in her town."],
          [{ g: "Does" }, " Anaya wear a uniform at school? – Yes, she does."],
          ["Her brother ", { g: "plays" }, " cricket in the street."]
        ], extra: ["speak", "do"] },
      { art: "mc", id: "wortstellung", tag: "Word order", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence has the correct word order?", o: ["Anaya often helps her grandmother.", "Anaya helps often her grandmother.", "Often Anaya her grandmother helps.", "Anaya her grandmother helps often."], a: 0,
            e: "The adverb of frequency (often) stands before the verb: subject – adverb – verb – object." },
          { q: "Which sentence has the correct word order?", o: ["The family eats happily in the garden in the evening.", "The family eats in the evening in the garden happily.", "The family in the evening eats happily in the garden.", "The family eats in the garden in the evening happily."], a: 0,
            e: "The order is: how – where – when." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Put in order", titel: "Build the sentence", lead: "Put the parts in the correct order. <span class=\"de\">Wie – wo – wann.</span>",
        schritte: ["Anaya makes the pattern", "carefully", "in front of the door", "before Diwali."] }
    ] },
    { kurz: "Compare", ober: "Part 6", titel: "Compare and think", teile: [
      { art: "sort", id: "vergleich", tag: "Sort", titel: "India or Germany – or both?", lead: "Put the statements into the right box. <span class=\"de\">Denk an Bayern.</span>",
        buckets: ["India", "Germany", "both"],
        items: [{ t: "Diwali is the festival of lights.", b: 0 }, { t: "The monsoon brings heavy rain in summer.", b: 0 },
                { t: "The main language is German.", b: 1 }, { t: "Many towns have a Christmas market in December.", b: 1 }, { t: "Hindi and English are official languages of the national government.", b: 0 },
                { t: "Many students wear a school uniform.", b: 0 }, { t: "Students learn maths and science.", b: 2 },
                { t: "Football is a popular sport.", b: 2 }, { t: "People travel by train.", b: 2 }] },
      { art: "mc", id: "klischee", tag: "Think", titel: "Stereotypes and polite questions", lead: "Tick the best answer. <span class=\"de\">Wie geht man respektvoll mit Klischees und Unterschieden um?</span>",
        fragen: [
          { q: "A classmate says: \"All people in India are the same.\" What is the best reaction?", o: ["That is a stereotype. India has many languages, religions and ways of life.", "Yes, everybody there is the same.", "Don't talk about other countries.", "That is silly. You are wrong."], a: 0,
            e: "A stereotype puts all people into one box. A friendly answer corrects it without insulting anybody." },
          { q: "You want to learn about a festival from your partner class. What is a polite question?", o: ["Can you tell me more about Diwali? What do you do in your family?", "Why do you celebrate such a strange festival?", "Is that festival really necessary?", "I don't want to hear about it."], a: 0,
            e: "Polite: show interest, ask an open question and listen." }
        ] },
      { art: "offen", id: "wuerde-gern", tag: "Your words", titel: "What would you like to do?", lead: "What would you like to see or do in India? Write two sentences with <b>would like to … because …</b>.",
        fragen: [{ q: "What would you like to see or do in India?", m: "I would like to see the Taj Mahal because it is very famous. I would like to try Indian food because I love new tastes.", k: ["would like|'d like", "because", "see|visit|try|meet|learn|watch|go|take|eat"], min: 3 }],
        tipp: "Start like this: I would like to see … because … / I would like to try … because …" },
      { art: "offen", id: "my-festival", m7: true, tag: "Challenge", titel: "A festival at home", lead: "Write two sentences about a festival in your family or your region for a student in India. <span class=\"de\">Freiwillig: Was feiert ihr, und was macht ihr dabei?</span>",
        fragen: [{ q: "Write two sentences about a festival in your family or your region.", m: "In my family we celebrate Christmas. We eat together and give presents.", k: ["we|my family|in germany|our", "celebrate|eat|visit|give|sing|have|go|decorate|play|cook"], min: 2 }],
        tipp: "Think of Christmas, Easter, a birthday or a local festival. Start with: In my family we …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The module in five sentences", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Diwali is the festival of ", { g: "lights" }, "."],
          ["At Holi, people throw coloured ", { g: "powder" }, "."],
          ["The ", { g: "Taj Mahal" }, " in Agra is made of white marble."],
          ["English is an important ", { g: "second" }, " language in India."],
          ["Saying that all people in a country are the same is a ", { g: "stereotype" }, "."]
        ], extra: ["first", "polite"] }
    ] }
  ],
  weiter: { text: "Well done! You know facts about India, how English is used there and how to talk about other cultures in a friendly way. Keep going with Unit 2." }
});
