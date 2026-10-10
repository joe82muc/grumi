/* Englisch 9R · Unit 1 Around Australia · Revision: Fit for the test: Unit 1
   (gemischte Wiederholung: Wortschatz Erlebnisse und Krankheit, die vier Grammatikthemen der Unit – simple past, will-future,
   if-Sätze Typ I, present progressive – mit Fehlertraining, kurzer Lesetext, kurzer Hörtext, Mini-Sprachmittlung, Mini-Schreibauftrag)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten,
   Satzgefüge), E9 5 (Australien: Alltag, Freizeit, Gesundheit).
   Texte: „A day on the river“ (texte/u1/revision-reading-river.js), „A call to a sick friend“ (texte/u1/revision-listening-sick-call.js)
   – Orte und Personen sind erfunden. */
D7Kit.seite({
  id: "u1-revision",
  titel: "Fit for the test: Unit 1",
  einleitung: "Test day is coming! In this module you revise everything from Unit 1: words about trips and about being ill, the simple past, the will-future, if-sentences and the present progressive. You also read, listen, help a friend and write a short text.",
  zeit: "etwa 40 Minuten",
  ziele: ["📚 I know the important words of Unit 1.", "🧩 I use simple past, will, if-sentences and present progressive correctly.", "🔎 I read, listen and pick out details.", "✍️ I write a short text and avoid typical mistakes."],
  quiz: { profi: "Test pro" },
  glossar: {
    simplepast: ["simple past", "Die einfache Vergangenheit: Man erzählt, was früher passiert ist und vorbei ist. Beispiel: We went to the lake yesterday."],
    willfuture: ["will-future", "Mit will + Verb sagt man, was man vorhersagt oder spontan beschließt. Beispiel: I think it will rain tomorrow."],
    ifclause: ["if-sentence (type I)", "Ein Satz mit if beschreibt eine mögliche Bedingung. Nach if steht die einfache Gegenwart, im Hauptsatz steht will. Beispiel: If it rains, we will stay at home."],
    progressive: ["present progressive", "Die Verlaufsform der Gegenwart: is, am oder are plus Verb mit -ing. Man sagt damit, was gerade passiert. Beispiel: Tom is reading a book."],
    kayak: ["kayak", "Ein kleines, schmales Boot für eine oder zwei Personen, das man mit einem Paddel mit zwei Blättern bewegt."],
    surgery: ["surgery", "Eine Arztpraxis. Im britischen Englisch sagt man „the doctor's surgery“."]
  },
  haupttext: "u1-rev-river",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 1", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for trips and for being ill. <span class=\"de\">Zuerst der Wortschatz der beiden Wortlisten dieser Unit.</span></p>" },
      { art: "paare", id: "woerter", tag: "Talking about experiences", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["exhausting", "anstrengend"], ["peaceful", "friedlich"], ["luckily", "zum Glück"], ["in the end", "am Ende"], ["to arrive", "ankommen"], ["I would recommend it.", "Ich würde es empfehlen."]] },
      { art: "luecke", id: "krank-woerter", tag: "Talking about being ill", titel: "At the doctor's and at the chemist's", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I can't speak well because I have a sore ", { g: "throat" }, "."],
          ["Put this ", { g: "ointment" }, " on the insect bite twice a day."],
          ["The doctor gave me a ", { g: "prescription" }, " for the tablets."],
          ["She feels hot. Her ", { g: "temperature" }, " is thirty-nine degrees."]
        ], extra: ["crowded", "boring"] }
    ] },
    { kurz: "Past & will", ober: "Grammar 1 and 2", titel: "Simple past and will-future", teile: [
      { art: "merke", kopf: "SIMPLE PAST AND WILL-FUTURE", html: "<p><b><button class=\"term\" data-t=\"simplepast\">Simple past</button></b> – it happened and it is over: regular verbs get <u>-ed</u> (stay – stayed), many verbs are irregular (go – went). Question and negative: <u>did</u> / <u>didn't</u> + <b>base form</b>: Where <u>did</u> you <u>stay</u>? I <u>didn't see</u> it.</p><p><b><button class=\"term\" data-t=\"willfuture\">Will-future</button></b> – predictions and quick decisions: <u>will</u> + base form, negative <u>won't</u>: I <u>will carry</u> your bag. It <u>won't</u> rain.</p>" },
      { art: "sort", id: "past-sort", tag: "Simple past", titel: "Regular or irregular?", lead: "Put the past forms into the right box.",
        buckets: ["regular (-ed)", "irregular"],
        items: [{ t: "stayed", b: 0 }, { t: "arrived", b: 0 }, { t: "booked", b: 0 }, { t: "tried", b: 0 },
                { t: "went", b: 1 }, { t: "took", b: 1 }, { t: "met", b: 1 }, { t: "got", b: 1 }, { t: "left", b: 1 }] },
      { art: "mc", id: "past-fehler", tag: "Typical mistakes", titel: "Spot the mistake: simple past", lead: "Tick the correct sentence. <span class=\"de\">Welcher Satz ist richtig?</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["Last weekend I didn't see any animals.", "Last weekend I didn't saw any animals.", "Last weekend I not saw any animals.", "Last weekend I don't saw any animals."], a: 0,
            e: "Nach didn't steht immer die Grundform: didn't see. Die Vergangenheit steckt schon in did." },
          { q: "Which question is correct?", o: ["Where did you stay in Sydney?", "Where did you stayed in Sydney?", "Where you stayed in Sydney?", "Where stayed you in Sydney?"], a: 0,
            e: "In der Frage steht did am Anfang, danach die Grundform: did you stay. Im Deutschen sagt man „Wo bliebst du“, im Englischen geht das nicht." }
        ] },
      { art: "luecke", id: "will-luecke", tag: "Will-future", titel: "Offers, plans and predictions", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["Don't worry, I ", { g: "will help" }, " you with your bag."],
          ["Next summer we ", { g: "will travel" }, " to the coast by train."],
          ["The shop is closed on Sunday, so we ", { g: "won't buy" }, " any bread."]
        ], extra: ["helps", "will to go"] },
      { art: "mc", id: "will-fehler", tag: "Typical mistakes", titel: "Spot the mistake: will", lead: "Tick the correct answer.",
        fragen: [
          { q: "Your mum has a heavy bag. You offer help. What do you say?", o: ["Wait, I will carry it for you.", "Wait, I carry it for you.", "Wait, I will carrying it for you.", "Wait, I wills carry it for you."], a: 0,
            e: "Für ein spontanes Angebot nimmst du will + Grundform. Das Verb nach will bekommt nie -s und nie -ing." }
        ] }
    ] },
    { kurz: "If & now", ober: "Grammar 3 and 4", titel: "If-sentences and present progressive", teile: [
      { art: "merke", kopf: "IF-SENTENCES AND PRESENT PROGRESSIVE", html: "<p><b><button class=\"term\" data-t=\"ifclause\">If-sentence (type I)</button></b> – a real possibility. <u>If</u> + simple present, then <u>will</u> + verb, or <u>can</u> + verb, or an order: If it <u>rains</u>, we <u>will stay</u> at home. If you feel dizzy, <u>sit</u> down.<br><b>Never will after if!</b></p><p><b><button class=\"term\" data-t=\"progressive\">Present progressive</button></b> – what is happening now (for example in a picture): <u>is / are</u> + verb with -ing: A boy <u>is flying</u> a kite. Two girls <u>are eating</u> ice cream.</p>" },
      { art: "luecke", id: "if-luecke", tag: "If-sentences", titel: "What will happen if …?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["If it ", { g: "rains" }, " on Saturday, we ", { g: "will stay" }, " at home."],
          ["If you ", { g: "feel" }, " dizzy, ", { g: "sit" }, " down and drink some water."],
          ["If the pain ", { g: "gets" }, " worse, you ", { g: "can call" }, " the doctor."]
        ], extra: ["will rain", "stays"] },
      { art: "mc", id: "if-fehler", tag: "Typical mistakes", titel: "Spot the mistake: if-sentences", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["If it rains tomorrow, we will stay at home.", "If it will rain tomorrow, we will stay at home.", "If it rained tomorrow, we will stay at home.", "If it rains tomorrow, we staying at home."], a: 0,
            e: "Im if-Teil steht die einfache Gegenwart (rains), im Hauptsatz will + Grundform. Im Deutschen sagt man „wenn es regnen wird“ – im Englischen nicht." },
          { q: "Which sentence is correct?", o: ["If you are ill, you can stay at home.", "If you will be ill, you can stay at home.", "If you are ill, you can to stay at home.", "If you be ill, you can stay at home."], a: 0,
            e: "Nach if bleibt es bei are. Nach can steht die Grundform ohne to: can stay." }
        ] },
      { art: "text", html: "<p class=\"lead\">Look at the picture in words: <span style=\"font-size:1.4em\">🏖️ 🪁 🍦 🏊 🐕</span><br>A sunny beach. A boy is flying a kite. Two girls are eating ice cream. A dog is running along the water. Some people are swimming.</p>" },
      { art: "markieren", id: "prog-markieren", tag: "Present progressive", titel: "Find the verb forms", finde: "the two verb forms that say what is happening now", toleranz: 0,
        satz: "In the picture a boy [[is flying]] a kite and two girls [[are eating]] ice cream.",
        e: "Beide Formen haben is/are + Verb mit -ing: is flying, are eating. Sie beschreiben, was im Bild gerade passiert." },
      { art: "mc", id: "prog-fehler", tag: "Typical mistakes", titel: "Spot the mistake: present progressive", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence about the picture is correct?", o: ["At the moment a dog is running along the water.", "At the moment a dog running along the water.", "At the moment a dog is run along the water.", "At the moment a dog are running along the water."], a: 0,
            e: "Du brauchst beides: is (bei einem Tier oder einer Person) und das Verb mit -ing. Fehlt eines davon, ist der Satz falsch." }
        ] },
      { art: "offen", id: "bild", m7: true, tag: "Challenge", titel: "Describe the picture", lead: "Describe the beach picture in two or three sentences. Use the present progressive. <span class=\"de\">Beschreibe, was die Leute und der Hund gerade tun.</span>",
        fragen: [{ q: "What are the people and the dog doing?", m: "A boy is flying a kite. Two girls are eating ice cream and a dog is running along the water.", k: ["is flying|flying|kite", "are eating|eating|ice cream", "is running|running|dog"], min: 2 }],
        tipp: "Start like this: In the picture a boy is … / Some people are …" }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Read the blog post first. Then listen to a phone call. <span class=\"de\">Erst ein kurzer Blogeintrag, dann ein Telefonat.</span></p>" },
      { art: "lesetext", lesetext: "u1-rev-river" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The writer's brother is called Finn.", true],
          ["It was not their first time in a kayak.", false],
          ["Finn fell into the water twice.", true],
          ["Ms Clarke wanted to go back early because of the sun.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-rev-river",
        fragen: [
          { q: "What did Ms Clarke give the kayakers at the start?", zeilen: [3, 4], e: "She gave them life jackets and a short lesson.", tipp: "Look at the first paragraph." },
          { q: "Where will the two paddle next month if the weather is good?", zeilen: [13, 15], e: "If the weather is good, they will paddle to the old bridge.", tipp: "Look at the last paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u1-rev-call", fragen: [
        { art: "mc", id: "global", titel: "The phone call", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Zoe stay at home?", o: ["She is ill.", "She has no money.", "She must help her dad.", "She has to do her homework."], a: 0,
              e: "She says she has a sore throat and a temperature." },
            { q: "How long should Zoe stay in bed?", o: ["for two days", "for a week", "for one night", "until Thursday"], a: 0,
              e: "The doctor said she should stay in bed for two days." }
          ] },
        { art: "luecke", id: "notizen", titel: "Nick's notes", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Zoe has a sore ", { g: "throat" }, " and a temperature."],
            ["Her dad is looking for the ", { g: "medicine" }, "."],
            ["Her brother is making hot ", { g: "tea" }, " for her."]
          ], extra: ["bridge", "pencil"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help a friend and write", teile: [
      { art: "text", html: "<p class=\"lead\">You are on holiday in Australia with your family. Your little sister Mara is ill. Your mum doesn't speak much English, so she asks you to talk to Mrs Hale, the owner of your guest house. <span class=\"de\">Du vermittelst: Mrs Hale spricht kein Deutsch.</span></p><blockquote>„Sag Mrs Hale bitte, dass Mara seit gestern Fieber und Husten hat. Sie darf heute nicht ins Schwimmbad. Wenn das Fieber morgen noch da ist, gehen wir zum Arzt. Ach ja, und danke für das leckere Frühstück mit dem Honig!“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells Mrs Hale the most important thing. <span class=\"de\">Was muss Mrs Hale zuerst erfahren?</span>",
        fragen: [
          { q: "What do you say first to Mrs Hale?", o: ["Mara is ill. She has a fever and a cough.", "Mara loved the breakfast with honey.", "Mara wants to go to the swimming pool today.", "My mum says thank you for the nice room."], a: 0,
            e: "Zuerst das Wichtigste: Mara ist krank, sie hat Fieber und Husten. Der Dank für das Frühstück kann am Schluss kommen. Vom Zimmer steht nichts in der Nachricht, und ins Schwimmbad darf Mara heute gerade nicht." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", tag: "Your words", titel: "Tell Mrs Hale", lead: "Tell Mrs Hale in two or three English sentences: What is wrong? What can't Mara do today? What happens tomorrow? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell Mrs Hale?", m: "Mara has a fever and a cough. She can't go swimming today. If the fever is still there tomorrow, we will go to the doctor.", k: ["fever|temperature", "cough", "swim|swimming|pool", "doctor"], min: 3 }],
        tipp: "Start like this: Mara has … / She can't … / If the fever …, we will …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "An email to a friend", min: 40,
        auftrag: "<p>Write a short email to your friend Chris. Write about <b>last weekend</b> (simple past), say what you <b>will</b> do next weekend and write one <b>if-sentence</b>.</p><p>Write at least 40 words in English.</p>",
        starter: ["Hi Chris,", "Last weekend I …", "On Saturday we …", "Next weekend I will …", "If the weather is good, …"],
        kriterien: ["Der Text erzählt vom letzten Wochenende im simple past.", "Der Text sagt mit will, was du nächstes Wochenende tust.", "Er enthält einen richtigen if-Satz (nach if kein will).", "Er hat mindestens 40 Wörter und eine Anrede und einen Gruß."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class=\"de\">Was hilft beim Lernen und im Test?</span>",
        aussagen: [
          ["I read the task twice before I write my answer.", true],
          ["After if I always use will.", false],
          ["I check my text for typical mistakes at the end.", true],
          ["In mediation I translate every single word.", false],
          ["If I don't know a word, I describe it with simple words.", true]
        ] },
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 1 in four sentences", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["For things that happened yesterday I use the simple ", { g: "past" }, "."],
          ["For predictions and quick decisions I use ", { g: "will" }, " + verb."],
          ["After if I use the simple ", { g: "present" }, ", not will."],
          ["For things that are happening now I use is / are + verb with ", { g: "-ing" }, "."]
        ], extra: ["never", "-ed"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 1 and you know the typical mistakes. Good luck with the test!" }
});
