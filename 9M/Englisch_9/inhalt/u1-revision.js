/* Englisch 9M · Unit 1 Around Australia · Revision: Fit for the test: Unit 1 · M-Fassung
   (gemischte Wiederholung: Wortschatz Erlebnisse und Krankheit, die vier Grammatikthemen der Unit – simple past, will-future,
   if-Sätze Typ I, present progressive – mit Fehlersuche und ganzen Sätzen, längerer Lesetext, Hörtext mit Korrekturen,
   Sprachmittlung mit Nebeninformationen, Schreibauftrag, vier Plus-Aufgaben)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten,
   Satzgefüge), E9 5 (Australien: Alltag, Freizeit, Gesundheit).
   Texte: „A day on the river“ (texte/u1/revision-reading-river-m.js), „A call to a sick friend“ (texte/u1/revision-listening-sick-call-m.js)
   – Orte und Personen sind erfunden. Bild: 9R/Englisch/images/u1-kayak.jpg. */
D7Kit.seite({
  id: "u1-revision",
  titel: "Fit for the test: Unit 1",
  einleitung: "Test day is coming! In this module you revise everything from Unit 1: words about trips and about being ill, the simple past, the will-future, if-sentences and the present progressive. You find and correct mistakes, build whole sentences, read a longer blog post, listen to a phone call with a few surprises, help a friend and write your own text.",
  zeit: "etwa 45 Minuten",
  ziele: ["📚 I know the important words of Unit 1.", "🧩 I mix simple past, will, if-sentences and present progressive correctly.", "🔎 I read and listen between the lines.", "✍️ I correct typical mistakes and write a text of my own."],
  quiz: { profi: "Test pro" },
  glossar: {
    simplepast: ["simple past", "Die einfache Vergangenheit: Man erzählt, was früher passiert ist und vorbei ist. Beispiel: We went to the lake yesterday."],
    willfuture: ["will-future", "Mit will + Verb sagt man, was man vorhersagt oder spontan beschließt. Beispiel: I think it will rain tomorrow."],
    ifclause: ["if-sentence (type I)", "Ein Satz mit if beschreibt eine mögliche Bedingung. Nach if steht die einfache Gegenwart, im Hauptsatz steht will. Beispiel: If I have time, I will help you."],
    progressive: ["present progressive", "Die Verlaufsform der Gegenwart: is, am oder are plus Verb mit -ing. Man sagt damit, was gerade passiert. Beispiel: Tom is reading a book."],
    kayak: ["kayak", "Ein kleines, schmales Boot für eine oder zwei Personen, das man mit einem Paddel mit zwei Blättern bewegt."],
    surgery: ["surgery", "Eine Arztpraxis. Im britischen Englisch sagt man „the doctor's surgery“."],
    current: ["current", "Die Strömung eines Flusses: das Wasser, das sich in eine Richtung bewegt."],
    prescription: ["prescription", "Ein Zettel vom Arzt, mit dem man in der Apotheke ein Medikament bekommt."]
  },
  haupttext: "u1-rev-river-m",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 1", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for trips and for being ill.</p>" },
      { art: "paare", id: "woerter", tag: "Talking about experiences", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["exhausting", "anstrengend"], ["peaceful", "friedlich"], ["luckily", "zum Glück"], ["in the end", "am Ende"], ["to recommend", "empfehlen"], ["although", "obwohl"]] },
      { art: "luecke", id: "krank-woerter", tag: "Talking about being ill", titel: "At the doctor's and at the chemist's", lead: "Complete the sentences with words from the box. Two words are left over.",
        absaetze: [
          ["I can't speak well because I have a sore ", { g: "throat" }, "."],
          ["Put this ", { g: "ointment" }, " on the insect bite twice a day."],
          ["The doctor gave me a ", { g: "prescription" }, " for the tablets."],
          ["She feels hot. Her ", { g: "temperature" }, " is thirty-nine degrees."]
        ], extra: ["crowded", "boring"] }
    ] },
    { kurz: "Past & will", ober: "Grammar 1 and 2", titel: "Simple past and will-future", teile: [
      { art: "merke", kopf: "SIMPLE PAST AND WILL-FUTURE", html: "<p><b><button class=\"term\" data-t=\"simplepast\">Simple past</button></b> – it happened and it is over: regular verbs get <u>-ed</u> (stay – stayed), many verbs are irregular (go – went). Question and negative: <u>did</u> / <u>didn't</u> + <b>base form</b>: Where <u>did</u> you <u>stay</u>? I <u>didn't see</u> it.</p><p><b><button class=\"term\" data-t=\"willfuture\">Will-future</button></b> – predictions and quick decisions: <u>will</u> + base form, negative <u>won't</u>: I <u>will open</u> the window. It <u>won't</u> rain.</p>" },
      { art: "sort", id: "past-sort", tag: "Simple past", titel: "Regular or irregular?", lead: "Put the past forms into the right box.",
        buckets: ["regular (-ed)", "irregular"],
        items: [{ t: "stayed", b: 0 }, { t: "booked", b: 0 }, { t: "tried", b: 0 }, { t: "realised", b: 0 },
                { t: "went", b: 1 }, { t: "took", b: 1 }, { t: "met", b: 1 }, { t: "fell", b: 1 }] },
      { art: "offen", id: "past-fehler", tag: "Typical mistakes", titel: "Find the mistake: simple past", lead: "Each sentence has one mistake. Write the correct sentence.",
        fragen: [
          { q: "Last weekend we didn't went to the beach.", m: "Last weekend we didn't go to the beach.", k: ["didn't go to|did not go to"], min: 1 },
          { q: "Where you stayed in Melbourne?", m: "Where did you stay in Melbourne?", k: ["did you stay"], min: 1 }
        ],
        tipp: "After did / didn't the verb has no ending and is not in the past." },
      { art: "luecke", id: "will-luecke", tag: "Will-future", titel: "Offers, plans and predictions", lead: "Complete the sentences with a whole verb form from the box. Two forms are left over.",
        absaetze: [
          ["Don't worry, I ", { g: "will help" }, " you with your bag."],
          ["The shop is closed on Sunday, so we ", { g: "won't buy" }, " any bread."]
        ], extra: ["helps", "will to go"] },
      { art: "offen", id: "will-bauen", tag: "Will-future", titel: "Build your own sentence", lead: "Write one sentence with will for this situation.",
        fragen: [
          { q: "Your friend has a heavy box. You want to help. (carry)", m: "I will carry it for you.", k: ["will carry|'ll carry"], min: 1 }
        ],
        tipp: "will + base form: I will help. / I'll help." }
    ] },
    { kurz: "If & now", ober: "Grammar 3 and 4", titel: "If-sentences and present progressive", teile: [
      { art: "merke", kopf: "IF-SENTENCES AND PRESENT PROGRESSIVE", html: "<p><b><button class=\"term\" data-t=\"ifclause\">If-sentence (type I)</button></b> – a real possibility. <u>If</u> + simple present, then <u>will</u> + verb, or <u>can</u> + verb, or an order: If I <u>have</u> time, I <u>will help</u> you. If you are tired, <u>go</u> to bed.<br><b>Never will after if!</b></p><p><b><button class=\"term\" data-t=\"progressive\">Present progressive</button></b> – what is happening now (for example in a picture): <u>is / are</u> + verb with -ing: A man <u>is reading</u> a newspaper. Two children <u>are building</u> a sandcastle.</p>" },
      { art: "luecke", id: "if-luecke", tag: "If-sentences", titel: "What will happen if …?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["If it ", { g: "rains" }, " on Saturday, we ", { g: "will stay" }, " at home."],
          ["If you ", { g: "feel" }, " dizzy, ", { g: "sit" }, " down and drink some water."],
          ["If the pain ", { g: "gets" }, " worse, you ", { g: "can call" }, " the doctor."]
        ], extra: ["will rain", "stays"] },
      { art: "offen", id: "if-bauen", tag: "If-sentences", titel: "Join the ideas", lead: "Make one if-sentence from the two ideas. Start with If.",
        fragen: [
          { q: "it / be sunny tomorrow – we / go to the lake", m: "If it is sunny tomorrow, we will go to the lake.", k: ["if it is sunny|if it's sunny", "will go|'ll go"], min: 2 },
          { q: "you / not take your medicine – you / not feel better", m: "If you don't take your medicine, you won't feel better.", k: ["if you don't take|if you do not take", "won't feel|will not feel"], min: 2 }
        ],
        tipp: "If + simple present, then will + base form. Not: If you will …" },
      { art: "text", html: "<p class=\"lead\">Look at the picture in words: <span style=\"font-size:1.4em\">🏖️ 🪁 🍦 🏊 🐕</span><br>A sunny beach – a boy with a kite – two girls with ice cream – a dog at the water – some people in the sea.</p>" },
      { art: "mc", id: "gemischt", tag: "Mixed tenses", titel: "Spot the mistake: mixed tenses", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["At the moment a dog is running along the water.", "At the moment a dog running along the water.", "At the moment a dog is run along the water.", "At the moment a dog are running along the water."], a: 0,
            e: "Du brauchst beides: is (bei einem Tier oder einer Person) und das Verb mit -ing. Fehlt eines davon, ist der Satz falsch." },
          { q: "Which sentence is correct?", o: ["Yesterday I met Jo, and she told me that it will rain on Sunday.", "Yesterday I meet Jo, and she told me that it will rain on Sunday.", "Yesterday I met Jo, and she tells me that it will to rain on Sunday.", "Yesterday I met Jo, and she told me that it rains on Sunday."], a: 0,
            e: "Erzählt wird in der Vergangenheit (met, told); die Vorhersage steht mit will + Grundform, ohne to." },
          { q: "Which if-sentence is correct?", o: ["If my cousin misses the train, she will be late for work.", "If my cousin will miss the train, she will be late for work.", "If my cousin miss the train, she will be late for work.", "If my cousin misses the train, she will late for work."], a: 0,
            e: "Im if-Teil steht kein will, sondern nur das Verb – bei he, she, it mit -s: misses. Will gehört in den Hauptsatz, und danach folgt die Grundform: will be." },
          { q: "Which sentence in the simple past is correct?", o: ["Last year my uncle flew to Australia and saw a lot of kangaroos.", "Last year my uncle flied to Australia and saw a lot of kangaroos.", "Last year my uncle flew to Australia and seen a lot of kangaroos.", "Last year my uncle flown to Australia and saw a lot of kangaroos."], a: 0,
            e: "Fly und see sind unregelmäßig: Im simple past heißt es flew und saw. Flown und seen sind dritte Formen, sie können nicht allein für die Vergangenheit stehen." }
        ] },
      { art: "offen", id: "bild", m7: true, tag: "Challenge", titel: "Describe the picture", lead: "Describe the beach picture in three or four sentences. Use the present progressive and add one if-sentence about what you think will happen.",
        fragen: [{ q: "What are the people and the dog doing? What will happen if the sun goes away?", m: "A boy is flying a kite. Two girls are eating ice cream and a dog is running along the water. If it starts to rain, everybody will run home.", k: ["is flying|flying|kite", "are eating|eating|ice cream", "is running|running|dog", "if "], min: 3 }],
        tipp: "Start like this: In the picture a boy is … / Some people are … / If …, they will …" }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What can you see? What do you think will happen?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-kayak.jpg\" alt=\"Two brothers paddle in two kayaks on a calm river on a sunny day. Both wear life jackets, and ducks swim near the green river bank.\" style=\"width:100%;border-radius:14px\"></figure><p>Now read a blog post about a day like this. Then listen to a phone call.</p>" },
      { art: "lesetext", lesetext: "u1-rev-river-m" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Finn booked the trip as a present for his brother.", true],
          ["The writer loves doing sport.", false],
          ["Finn fell into the water three times.", false],
          ["Ms Clarke thought that the rain would probably stay away.", true]
        ] },
      { art: "mc", id: "schliessen", tag: "Between the lines", titel: "What does the text show?", lead: "Tick the best answer.",
        fragen: [
          { q: "What does \"everything changed\" mean here?", o: ["The hard work turned into a calm, enjoyable trip.", "The weather became bad.", "Finn stopped falling into the water.", "The river became faster."], a: 0,
            e: "Nach den Enten ist der Fluss ruhig, niemand spricht, und der Erzähler denkt nicht mehr an Handy, Hausaufgaben und Test. Vom Wetter oder von Finn steht an dieser Stelle nichts." }        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-rev-river-m",
        fragen: [
          { q: "Why did Finn book the trip?", zeilen: [2, 3], e: "He booked it as a surprise for the writer's birthday.", tipp: "Look at the first paragraph." },
          { q: "Why could they stay on the river after lunch?", zeilen: [22, 24], e: "Ms Clarke thought the wind would push the rain away, and the sun stayed out.", tipp: "Look at the fourth paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u1-rev-call-m", fragen: [
        { art: "mc", id: "global", titel: "The phone call", lead: "Tick the correct answer. Listen for corrections!",
          fragen: [
            { q: "When did Zoe see the doctor yesterday?", o: ["at half past four", "at four o'clock", "at five o'clock", "at half past five"], a: 0,
              e: "Zoe sagt erst four o'clock und verbessert sich dann." },
            { q: "On which day will Nick bring the homework?", o: ["on Wednesday", "on Thursday", "on Friday", "on Monday"], a: 0,
              e: "Zoe sagt erst Thursday und korrigiert dann: Wednesday." },
            { q: "Why does Zoe want her homework early?", o: ["She wants to practise for a maths test.", "She is bored in bed.", "Her teacher asked for it.", "She wants to send it to Nick."], a: 0,
              e: "Am Freitag schreibt die Klasse einen Mathetest." }
          ] },
        { art: "luecke", id: "notizen", titel: "Nick's notes", lead: "Complete the notes with words from the box. Two words are left over.",
          absaetze: [
            ["Zoe has a sore throat and a ", { g: "temperature" }, "."],
            ["Her dad is looking for the throat ", { g: "tablets" }, "."],
            ["The waiting room at the surgery was ", { g: "crowded" }, "."]
          ], extra: ["bridge", "pencil"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help a friend and write", teile: [
      { art: "text", html: "<p class=\"lead\">You are on holiday in Australia with your family. Your little sister Mara is ill. Your mum doesn't speak much English, so she asks you to talk to Mrs Hale, the owner of your guest house. <span class=\"de\">Du vermittelst: Mrs Hale spricht kein Deutsch.</span></p><blockquote>„Sag Mrs Hale bitte, dass Mara seit gestern Fieber und Husten hat. Wir waren gestern Abend noch kurz beim Abendessen im Garten, das war wohl keine gute Idee, es war sehr kühl. Mara darf heute nicht ins Schwimmbad. Wenn das Fieber morgen noch da ist, gehen wir zum Arzt. Kann sie vielleicht heute Nachmittag Tee und Zwieback haben? Ach ja, und danke für das leckere Frühstück mit dem Honig!“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells Mrs Hale the most important thing. <span class=\"de\">Was muss Mrs Hale zuerst erfahren?</span>",
        fragen: [
          { q: "What do you say first to Mrs Hale?", o: ["Mara is ill. She has a fever and a cough.", "Mara loved the breakfast with honey.", "Mara wants to go to the swimming pool today.", "We had dinner in the garden yesterday."], a: 0,
            e: "Zuerst das Wichtigste: Mara ist krank, sie hat Fieber und Husten. Der Dank für das Frühstück kann am Schluss kommen. Das Abendessen im Garten ist nur eine Nebeninformation, und ins Schwimmbad darf Mara heute gerade nicht." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", m7: true, tag: "Plus · Your words", titel: "Tell Mrs Hale", lead: "Tell Mrs Hale in three or four English sentences: What is wrong? What can't Mara do today? What does she need? What happens tomorrow? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell Mrs Hale?", m: "Mara has a fever and a cough. She can't go swimming today. Could she have some tea this afternoon? If the fever is still there tomorrow, we will go to the doctor.", k: ["fever|temperature", "cough", "swim|swimming|pool", "tea", "doctor"], min: 4 }],
        tipp: "Start like this: Mara has … / She can't … / Could she …? / If the fever …, we will …" },
      { art: "offen", id: "deutsch-fassen", m7: true, tag: "Plus · Mediation", titel: "Tell your dad in German", lead: "Your dad did not read the blog post. In two or three German sentences: What did the brothers do, what went wrong, and what is their plan for next month? <span class=\"de\">Auf Deutsch, nur die wichtigen Punkte.</span>",
        fragen: [{ q: "Was hat der Blog erzählt?", m: "Zwei Brüder haben eine Kajaktour auf dem Merrin River gemacht. Finn ist zweimal ins Wasser gefallen, aber später war es ruhig und schön. Nächsten Monat wollen sie wieder fahren und bei gutem Wetter bis zur alten Brücke paddeln.", k: ["Kajak|Boot", "Wasser|gefallen", "Brücke|nächsten Monat|wieder"], min: 3 }],
        tipp: "Fang so an: Die beiden Brüder … / Finn … / Nächsten Monat …" },
      { art: "offen", id: "meinung", m7: true, tag: "Plus · Opinion", titel: "Would you go?", lead: "Would you like to go on a trip like this? Give your opinion and two reasons. Use because or although at least once.",
        fragen: [{ q: "Would you like to go kayaking? Why / why not?", m: "I would like to go kayaking because I love being outside, and I think paddling with friends is fun. Although it is exhausting, I would try it.", k: ["I would|I'd|I wouldn't|I would not", "because|although|so that"], min: 2 }],
        tipp: "I would (not) like to … because … Also, … Although …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "An email to a friend", min: 50,
        auftrag: "<p>Write an email to your friend Chris. Tell him about <b>a trip or a day out last weekend</b> (simple past, at least one thing that went wrong), say what you <b>will</b> do next weekend and write <b>two if-sentences</b> (one about the weather or a plan, one with advice for Chris).</p><p>Write at least 50 words in English.</p>",
        starter: ["Hi Chris,", "Last weekend I … Unfortunately, …", "Next weekend I will …", "If the weather is good, …", "If you …, you will …"],
        kriterien: ["Der Text erzählt vom letzten Wochenende im simple past und nennt etwas, das schiefging.", "Der Text sagt mit will, was du nächstes Wochenende tust.", "Er enthält zwei richtige if-Sätze (nach if kein will).", "Er hat mindestens 50 Wörter und eine Anrede und einen Gruß."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 1 in three sentences", lead: "Complete the sentences. Two words are left over.",
        absaetze: [
          ["For predictions and quick decisions I use ", { g: "will" }, " + verb."],
          ["After if I use the simple ", { g: "present" }, ", not will."],
          ["For things that are happening now I use is / are + verb with ", { g: "-ing" }, "."]
        ], extra: ["never", "-ed"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 1, you can find typical mistakes and you are ready for the test. Good luck!" }
});
