/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Duelle: Unit 4 (Kürzel D19)
   Aufwärmen: richtig/falsch (R7 und M7 getrennt), Ankreuzfragen (R7 leichter, M7 schwerer) und Zuordnen Wort – deutsche Bedeutung
   (gemeinsam); Duell gegen die KI (6 Runden je Zug, die „KI“ irrt in zwei Runden mit einleuchtend klingender Begründung, zu einer davon
   ein Begründungssatz); Tischduell zu zweit an einem Gerät (12 kurze Fragen je Zug, Antworten ein bis vier Wörter, 7 Runden).
   Inhalt: Wörter der Unit 4 (Intro, Topic 1, Topic 2, Text, Story), Grammatik G10 Steigerung mit more/the most und less/the least,
   G11 much/many (dazu too much/too many, so much/so many) und British/American English (vacation, movie, center, favorite, fall,
   pants).
   Buchprinzip (nur Aufbau, nichts übernommen): kurze Wiederholungsrunden am Ende der Unit, Steigerung mit than/the als Signal.
   Besser: Gegner „KI“ klingt sicher und irrt manchmal – das Kind prüft mit der Regel; Rückmeldung zu jeder Antwort; Tischduell ohne
   Aufwand.
   Differenzierung: R7 mit deutschen Hilfen und einfacheren Runden (How much/How many, more/less … than, the most + Superlativ,
   amerikanische Wörter); M7 englisch mit so many … that, the most useful statt „usefullest“, too many video games, Begriffspaare
   British – American, the least … of all.
   Eindeutigkeit: In jeder Runde passt nur eine Antwort; Formen, die ebenfalls passen würden (z. B. less statt more vor „than“), stehen
   bewusst nicht unter den Antworten. Duelle sind Zusatz und zählen nicht zum Lernfortschritt.
   Die „KI“ irrt je Zug in zwei Runden mit Absicht – R7: Runde 3 („most beautiful“ ohne the), Runde 5 („many time“, mit
   Begründungssatz); M7: Runde 2 („the usefullest“, mit Begründungssatz), Runde 5 („too much video games“). Die Erklärung stellt es
   richtig.
   LehrplanPLUS E7 2 (Wortschatz, Grammatik: Steigerung, Mengenangaben), E7 5 (USA, British/American English).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen. Keine Hörtexte, keine Personennamen.
   BILDER:
   1. Station „Warm-up“ (Sprechanlass): zwei Kinder auf einer Treppe vor einem amerikanischen Schulbus spielen an einem Tablet ein
      Quiz-Duell; auf dem Tablet ein Sternenbanner-Aufkleber, daneben ein Baseballhandschuh.
   2. Station „Table duel“ (Vorentlastung): zwei Kinder sitzen an einem Tisch, das Tablet liegt in der Mitte, jedes hat eine Hand an
      seiner Antwortseite; auf dem Tisch eine kleine USA-Fahne und eine Tüte Popcorn. */
D7Kit.seite({
  id: "u4-duell",
  titel: "Duels: Unit 4",
  einleitung: "Words and grammar from Unit 4 – mixed: more and the most, less and the least, much and many, British and American English. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I use more, the most, less and the least correctly.", "🔢 I know when to use much and when to use many.", "🇺🇸 I know some American words.", "⚔️ I notice when an answer sounds good but is wrong."],
  thema: "Unit 4 Duelle",
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a quiz duel in front of the school bus</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-duell.jpg\" width=\"1280\" height=\"853\" alt=\"Two children sit on steps in front of a yellow school bus and play a quiz duel on a tablet; a baseball glove lies next to them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who do you think is faster? Get ready – now it is your turn! <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "tf", id: "warm", nur: "R", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["\"Vacation\" is the American word for holiday.", true],
        ["\"How much friends have you got?\" is a correct question.", false],
        ["In \"the most exciting day\" you need the word \"the\".", true],
        ["\"Less\" means \"mehr\".", false],
        ["\"Movie\" is the American word for film.", true]
      ], hilfen: ["friends kann man zählen.", "less ist das Gegenteil von more."] },
      { art: "tf", id: "warm", nur: "M", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false.", aussagen: [
        ["\"Favorite\" is the American spelling of favourite.", true],
        ["\"There isn't many time.\" is a correct sentence.", false],
        ["The comparative of \"expensive\" is \"expensiver\".", false],
        ["\"Too many people\" means \"zu viele Leute\".", true],
        ["\"The least boring\" is the opposite of \"the most boring\".", true]
      ] },
      { art: "mc", id: "warm2", nur: "R", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer. <span class=\"de\">Kreuze die richtige Antwort an.</span>", fragen: [
        { q: "Complete: How ___ time have we got?", o: ["much", "many", "more"], a: 0, e: "time kann man nicht zählen – deshalb How much time …? many steht bei Nomen im Plural." },
        { q: "Complete: This app is ___ useful than that one.", o: ["more", "most", "the most"], a: 0, e: "Vor than vergleichst du zwei Dinge: more useful than. the most steht für den ersten Platz." },
        { q: "Complete: It was ___ exciting day of my life.", o: ["the most", "more", "most"], a: 0, e: "Der erste Platz (of my life) braucht the most: the most exciting day. Ohne the ist es falsch." },
        { q: "Which word is typically American?", o: ["vacation", "holiday", "film"], a: 0, e: "vacation ist typisch amerikanisch. holiday (Urlaub) und film sagt man vor allem in Großbritannien – in den USA sagt man dafür vacation und movie." }
      ] },
      { art: "mc", id: "warm2", nur: "M", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "Choose the correct sentence.", o: ["There were too many people on the bus.", "There were too much people on the bus.", "There was too many people on the bus."], a: 0, e: "People is plural and countable: too many people – and with a plural we say there were." },
        { q: "Complete: For my grandma, social media is ___ important than the newspaper.", o: ["less", "least", "the least"], a: 0, e: "With than we compare two things: less important than. least and the least are for the last place." },
        { q: "Complete: How ___ is a ticket to the museum?", o: ["much", "many", "more"], a: 0, e: "To ask for a price, we say How much is …?" },
        { q: "In American English, \"pants\" are …", o: ["trousers", "underpants", "shorts"], a: 0, e: "In the USA, pants are trousers. In Britain, pants are underpants – so be careful!" }
      ] },
      { art: "paare", id: "woerter", tag: "Warm-up", titel: "Words from Unit 4", lead: "Match the English word with its German meaning. <span class=\"de\">Welches deutsche Wort passt?</span>",
        paare: [["valley", "Tal"], ["huge", "riesig"], ["useful", "nützlich"], ["leader", "Leiter, Leiterin"], ["to share", "teilen"], ["newspaper", "Zeitung"]],
        hilfen: ["Zwei Wörter sind Adjektive: riesig und nützlich.", "Ein Wort ist ein Ort in der Natur zwischen Bergen."] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule. <span class=\"de\">In zwei Runden irrt die KI. Denk an die Regel.</span>",
        runden: [
          { q: "Complete: My tablet is ___ expensive than my phone.", o: ["more", "most", "much"], a: 0, ki: 0, kiText: "\"Expensive\" is a long word, and \"than\" comes after it – so it's \"more expensive than\".",
            e: "Lange Adjektive steigert man mit more: more expensive than. most steht nur mit the für den ersten Platz." },
          { q: "Complete: How ___ bags have you got?", o: ["many", "much", "more"], a: 0, ki: 0, kiText: "You can count bags – one bag, two bags – so it's \"How many bags\".",
            e: "bags kann man zählen (Plural): How many bags? much steht bei Dingen, die man nicht zählen kann." },
          { q: "Complete: It's ___ beautiful lake in the park.", o: ["the most", "most", "more"], a: 0, ki: 1, kiText: "\"Most\" already means \"am meisten\", so you don't need \"the\": \"It's most beautiful lake in the park\".",
            e: "Beim Superlativ gehört the dazu: the most beautiful lake. Ohne the ist der Satz falsch." },
          { q: "Which word is typically American?", o: ["movie", "film", "holiday"], a: 0, ki: 0, kiText: "\"Movie\" is American English. In Britain, people often say \"film\".",
            e: "movie = Film (typisch amerikanisch). film und holiday (Urlaub) sagt man vor allem in Großbritannien." },
          { q: "Complete: Hurry up! We haven't got ___ time.", o: ["much", "many", "lots"], a: 0, ki: 1, kiText: "Time is very important, and \"many\" means a lot – so \"We haven't got many time\".",
            e: "time kann man nicht zählen – deshalb much: We haven't got much time. many steht nur bei Nomen im Plural wie bags oder friends. lots braucht ein of (lots of time).",
            begruende: { q: "Why is \"many time\" wrong? Explain in one sentence.", m: "You cannot count time, so we use much.", k: ["count|zähl|uncountable|not countable|much|plural|singular"] } },
          { q: "Complete: For me, the newspaper is ___ interesting than social media.", o: ["less", "least", "the least"], a: 0, ki: 0, kiText: "With \"than\" we need \"less\" here – \"least\" and \"the least\" are for the last place.",
            e: "Vor than vergleichst du zwei Dinge: less interesting than. the least steht für den letzten Platz." }
        ] },
      { art: "duell", id: "duell", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Complete: There were ___ people at the baseball game that we couldn't find our seats.", o: ["so many", "so much", "too much"], a: 0, ki: 0, kiText: "People can be counted, and \"so … that\" shows the result: \"so many people that …\".",
            e: "people ist Plural und zählbar: so many people. so … that zeigt die Folge: so viele Leute, dass …" },
          { q: "Which sentence is correct?", o: ["This is the most useful of all my apps.", "This is the usefullest of all my apps.", "This is the more useful of all my apps."], a: 0, ki: 1, kiText: "\"Useful\" ends in -ful, like \"full\": full, fuller, the fullest – so \"the usefullest\" is right.",
            e: "useful ist ein langes Adjektiv (use-ful). Es bekommt the most: the most useful of all my apps. „usefullest“ gibt es nicht, und the more useful vergleicht nur zwei Dinge.",
            begruende: { q: "Why is \"the usefullest\" wrong? Explain in one sentence.", m: "Useful is a long adjective, so we say the most useful.", k: ["long|lang|most|syllable|silbe|more"] } },
          { q: "Complete: I don't have ___ money left, so I can't buy the T-shirt.", o: ["much", "many", "a lot"], a: 0, ki: 0, kiText: "Money is not countable, so we use \"much\": \"I don't have much money left\".",
            e: "money kann man nicht zählen: not much money. a lot geht nur mit of (a lot of money)." },
          { q: "Which pair is British – American?", o: ["holiday – vacation", "vacation – holiday", "movie – film"], a: 0, ki: 0, kiText: "First British, then American: holiday (British) – vacation (American).",
            e: "holiday ist britisch, vacation amerikanisch. Bei movie – film ist die Reihenfolge umgekehrt (erst amerikanisch)." },
          { q: "Complete: My brother has ___ video games. His room is full of them!", o: ["too many", "too much", "so much"], a: 0, ki: 1, kiText: "Video games are a big part of his life, and \"much\" is for big amounts – so \"too much video games\".",
            e: "video games kann man zählen (one game, two games) – also too many. much steht nur bei Nomen, die man nicht zählen kann, wie time, money oder water." },
          { q: "Complete: For me, spiders are ___ interesting animals of all.", o: ["the least", "less", "least"], a: 0, ki: 0, kiText: "\"Of all\" shows the last place, so we need \"the least\": \"the least interesting animals of all\".",
            e: "of all zeigt den letzten (oder ersten) Platz: the least interesting. less steht vor than, und least braucht das the." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 4 pros", teile: [
      { art: "tischduell", id: "tisch", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "How ___ water?", o: ["much", "many", "more"], a: 0, e: "water kann man nicht zählen: How much water?" },
        { q: "How ___ friends?", o: ["many", "much", "most"], a: 0, e: "friends kann man zählen: How many friends?" },
        { q: "the ___ exciting day of my life", o: ["most", "more", "much"], a: 0, e: "Erster Platz: the most exciting day." },
        { q: "Opposite of \"more\":", o: ["less", "most", "many"], a: 0, e: "more = mehr, less = weniger." },
        { q: "Opposite of \"the most\":", o: ["the least", "the less", "the many"], a: 0, e: "the most – the least (am meisten – am wenigsten)." },
        { q: "Too ___ people!", o: ["many", "much", "more"], a: 0, e: "people kann man zählen: too many people." },
        { q: "American word for holiday:", o: ["vacation", "movie", "center"], a: 0, e: "holiday (britisch) = vacation (amerikanisch)." },
        { q: "American word for film:", o: ["movie", "vacation", "favorite"], a: 0, e: "film (britisch) = movie (amerikanisch)." },
        { q: "\"riesig\":", o: ["huge", "useful", "deep"], a: 0, e: "huge = riesig." },
        { q: "\"nützlich\":", o: ["useful", "useless", "huge"], a: 0, e: "useful = nützlich, useless = nutzlos." },
        { q: "\"Tal\":", o: ["valley", "state", "tribe"], a: 0, e: "valley = Tal, state = Bundesstaat, tribe = Stamm." },
        { q: "\"Zeitung\":", o: ["newspaper", "website", "tablet"], a: 0, e: "newspaper = Zeitung." }
      ] },
      { art: "tischduell", id: "tisch", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "so ___ snow", o: ["much", "many", "more"], a: 0, e: "Snow is not countable: so much snow." },
        { q: "too ___ cars", o: ["many", "much", "most"], a: 0, e: "Cars are countable: too many cars." },
        { q: "Superlative of useful:", o: ["the most useful", "the usefullest", "the more useful"], a: 0, e: "Long adjective: the most useful." },
        { q: "Less + boring:", o: ["less boring", "least boring than", "less boringer"], a: 0, e: "less + adjective: less boring (than …)." },
        { q: "not much ___", o: ["time", "friends", "apps"], a: 0, e: "much + uncountable noun: not much time." },
        { q: "not many ___", o: ["apps", "money", "water"], a: 0, e: "many + plural noun: not many apps." },
        { q: "American word for autumn:", o: ["fall", "vacation", "movie"], a: 0, e: "autumn (British) = fall (American)." },
        { q: "British word for movie:", o: ["film", "vacation", "center"], a: 0, e: "movie (American) = film (British)." },
        { q: "American spelling:", o: ["center", "centre", "centar"], a: 0, e: "centre (British) – center (American)." },
        { q: "\"Stamm, Volksstamm\":", o: ["tribe", "state", "valley"], a: 0, e: "tribe = Stamm." },
        { q: "\"to settle\" means …", o: ["siedeln", "teilen", "posten"], a: 0, e: "to settle = siedeln, sich niederlassen." },
        { q: "\"Strömung\":", o: ["current", "rapid", "wave"], a: 0, e: "current = Strömung, rapid = Stromschnelle, wave = Welle." }
      ] }
    ] }
  ],
  weiter: { text: "If a round went wrong: read the tip boxes of the Unit 4 grammar modules again, or try the vocabulary trainer." }
});
