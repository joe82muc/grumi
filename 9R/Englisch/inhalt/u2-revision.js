/* Englisch 9R · Unit 2 Exploring India · Revision: Fit for the test: Unit 2
   (gemischte Wiederholung: Wortschatz der Wordbanks „Presenting a company“ und „Sustainable living“, die beiden Grammatikthemen der Unit –
   simple present und word order – mit Fehlertraining, kurzer Lesetext, kurzer Hörtext, Mini-Sprachmittlung, Mini-Schreibauftrag)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten, Satzbau),
   E9 5 (Indien: Arbeit und Nachhaltigkeit).
   Texte: „A visit to Lotus Lane Candles“ (texte/u2/revision-reading-candles.js), „An interview in a repair shop“ (texte/u2/revision-listening-phone-shop.js)
   – Firmen, Orte und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-revision",
  titel: "Fit for the test: Unit 2",
  einleitung: "Test day is coming! In this module you revise everything from Unit 2: words about companies and about sustainable living, the simple present and word order. You also read, listen, help a friend and present a company in writing.",
  zeit: "etwa 40 Minuten",
  ziele: ["📚 I know the important words of Unit 2.", "🧩 I use the simple present and the right word order.", "🔎 I read, listen and pick out details.", "✍️ I write about a company and avoid typical mistakes."],
  quiz: { profi: "Test pro" },
  glossar: {
    simplepresent: ["simple present", "Die einfache Gegenwart: Man sagt damit, was jemand regelmäßig tut oder was immer gilt. Bei he, she und it bekommt das Verb ein -s. Beispiel: My uncle works in a factory."],
    wordorder: ["word order", "Die Wortstellung: Im englischen Aussagesatz steht zuerst das Subjekt, dann das Verb, dann das Objekt. Danach folgen meist Art und Weise, Ort und Zeit. Beispiel: The team works carefully in the workshop every day."],
    frequency: ["adverb of frequency", "Ein Häufigkeitswort sagt, wie oft etwas passiert, zum Beispiel always, usually, often, sometimes oder never. Es steht meist vor dem Verb. Beispiel: She often visits her aunt."],
    wax: ["wax", "Wachs ist der weiche Stoff, aus dem man Kerzen macht. Wenn man es erwärmt, wird es flüssig."],
    shift: ["shift", "Eine Schicht ist die Zeit, in der eine Gruppe von Menschen arbeitet, zum Beispiel am Morgen oder in der Nacht."]
  },
  haupttext: "u2-rev-candles",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 2", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for companies and for sustainable living. <span class=\"de\">Zuerst der Wortschatz der beiden Wortlisten dieser Unit.</span></p>" },
      { art: "paare", id: "woerter-firma", tag: "Presenting a company", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["employee", "Mitarbeiter(in)"], ["customer", "Kunde; Kundin"], ["to deliver", "liefern"], ["department", "Abteilung"], ["full-time", "Vollzeit"], ["Thank you for listening.", "Danke fürs Zuhören."]] },
      { art: "paare", id: "woerter-nachhaltig", tag: "Sustainable living", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["to reuse", "wiederverwenden"], ["packaging", "Verpackung"], ["to commute", "pendeln"], ["organic", "Bio-; ökologisch"], ["leftovers", "Essensreste"], ["I agree.", "Ich stimme zu."]] },
      { art: "luecke", id: "firma-woerter", tag: "Presenting a company", titel: "At the workshop", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A ", { g: "customer" }, " is waiting at the door and wants to buy a bike."],
          ["He works the night ", { g: "shift" }, " in the factory, from ten to six."],
          ["The driver ", { g: "delivers" }, " the boxes to the shop every morning."],
          ["An ", { g: "apprentice" }, " learns a job in a workshop for three years."]
        ], extra: ["salary", "branch"] },
      { art: "luecke", id: "nachhaltig-woerter", tag: "Sustainable living", titel: "Living green", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Please ", { g: "switch" }, " off the light when you leave the room."],
          ["Fruit from the farmers' market is often ", { g: "local" }, " and does not travel far."],
          ["My aunt ", { g: "commutes" }, " to the city by train every day."],
          ["I think it is important to ", { g: "save" }, " water."]
        ], extra: ["throw", "waste"] }
    ] },
    { kurz: "Simple present", ober: "Grammar 1", titel: "Simple present", teile: [
      { art: "merke", kopf: "SIMPLE PRESENT", html: "<p><b><button class=\"term\" data-t=\"simplepresent\">Simple present</button></b> – what people do again and again: with <u>he, she, it</u> the verb gets <u>-s</u>: My uncle <u>works</u> in a factory.</p><p>Negative and questions use <u>do / does</u> and the <b>base form</b>: She <u>doesn't like</u> early shifts. <u>Does</u> the shop <u>open</u> on Sundays? We <u>don't sell</u> phones.</p><p><b><button class=\"term\" data-t=\"frequency\">Adverbs of frequency</button></b> (always, usually, often, sometimes, never) stand <b>before</b> the main verb: She <u>often visits</u> her aunt.</p>" },
      { art: "sort", id: "sp-sort", tag: "Simple present", titel: "-s or no -s?", lead: "Which verb form fits? Put each subject into the right box. <span class=\"de\">Welche Verbform passt zu dem Subjekt?</span>",
        buckets: ["verb with -s (does)", "base form (do)"],
        items: [{ t: "The company", b: 0 }, { t: "My sister", b: 0 }, { t: "A worker", b: 0 }, { t: "The shop", b: 0 },
                { t: "The workers", b: 1 }, { t: "My parents", b: 1 }, { t: "Customers", b: 1 }, { t: "You", b: 1 }] },
      { art: "luecke", id: "sp-luecke", tag: "Simple present", titel: "Fill in the verb form", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["My uncle ", { g: "works" }, " in a small factory."],
          ["The workers ", { g: "don't start" }, " before seven o'clock."],
          ["Question: ", { g: "Does" }, " your sister work in an office?"],
          ["She ", { g: "always" }, " arrives early, every single day."]
        ], extra: ["does start", "do"] },
      { art: "mc", id: "sp-fehler", tag: "Typical mistakes", titel: "Spot the mistake: simple present", lead: "Tick the correct sentence. <span class=\"de\">Welcher Satz ist richtig?</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["My brother works in a bakery.", "My brother work in a bakery.", "My brother workes in a bakery.", "My brother is work in a bakery."], a: 0,
            e: "Bei he, she, it hängst du -s an das Verb: works. Das Verb ist works, nicht workes." },
          { q: "Which negative sentence is correct?", o: ["She doesn't like early shifts.", "She doesn't likes early shifts.", "She don't like early shifts.", "She not like early shifts."], a: 0,
            e: "Die Verneinung mit she heißt doesn't, danach steht die Grundform: doesn't like. Das -s steckt schon in does." },
          { q: "Which question is correct?", o: ["Does the shop open on Sundays?", "Does the shop opens on Sundays?", "Do the shop open on Sundays?", "Opens the shop on Sundays?"], a: 0,
            e: "Zur Firma passt it, also does. Danach steht die Grundform: open. Im Englischen stellt man das Verb nicht einfach nach vorn." },
          { q: "Which sentence is correct?", o: ["She often visits her aunt.", "She visits often her aunt.", "She often visit her aunt.", "She visits her often aunt."], a: 0,
            e: "Das Häufigkeitswort steht vor dem Verb: often visits. Zwischen Verb und Objekt steht es nicht, und visits behält sein -s." }
        ] },
      { art: "offen", id: "fragen-stellen", m7: true, tag: "Challenge", titel: "Interview questions", lead: "You visit a bakery for a school project. Write two questions for the baker. Use do and does. <span class=\"de\">Schreibe zwei Fragen an die Bäckerin oder den Bäcker.</span>",
        fragen: [{ q: "What do you ask the baker?", m: "When does the bakery open? Do you work on Sundays?", k: ["does the|does your|does he|does she", "do you|do your|do the|do they"], min: 2 }],
        tipp: "Start like this: When does the bakery …? / Do you …?" }
    ] },
    { kurz: "Word order", ober: "Grammar 2", titel: "Word order", teile: [
      { art: "merke", kopf: "WORD ORDER", html: "<p><b><button class=\"term\" data-t=\"wordorder\">Word order</button></b> – the normal order is <u>subject – verb – object</u>. After that we usually put <b>how – where – when</b> (manner – place – time): The team packs the candles <u>carefully</u> <u>in the workshop</u> <u>every morning</u>.</p><p>If a time phrase comes first, the subject still stands <b>before</b> the verb: <u>Every morning</u> the team <u>meets</u> in the office. (Not: Every morning meets the team …)</p>" },
      { art: "ordnen", id: "wo-ordnen", tag: "Word order", titel: "Build the sentence", lead: "Put the parts in the right order. <span class=\"de\">Bringe die Satzteile in die richtige Reihenfolge.</span>",
        schritte: ["The team", "packs the candles", "carefully", "in the workshop", "every morning"] },
      { art: "mc", id: "wo-fehler", tag: "Typical mistakes", titel: "Spot the mistake: word order", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["The workers clean the jars carefully in the workshop.", "The workers clean carefully the jars in the workshop.", "The workers the jars clean carefully in the workshop.", "Clean the workers the jars carefully in the workshop."], a: 0,
            e: "Erst Subjekt, Verb und Objekt (The workers clean the jars), dann Art und Weise (carefully) und Ort (in the workshop). Das Verb steht nicht am Ende wie im deutschen Nebensatz." },
          { q: "Which sentence is correct?", o: ["Every morning the team meets in the office.", "Every morning meets the team in the office.", "Every morning the team in the office meets.", "In the office every morning meets the team."], a: 0,
            e: "Auch nach einer Zeitangabe bleibt es bei Subjekt und Verb: the team meets. Das Verb springt im Englischen nicht vor das Subjekt." },
          { q: "Which sentence is correct?", o: ["I meet my friends at the market on Saturdays.", "I meet at the market my friends on Saturdays.", "I meet on Saturdays my friends at the market.", "I at the market meet my friends on Saturdays."], a: 0,
            e: "Das Objekt (my friends) folgt direkt auf das Verb. Danach kommen erst der Ort und dann die Zeit." }
        ] }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Read the blog post first. Then listen to an interview. <span class=\"de\">Erst ein kurzer Blogeintrag, dann ein Interview.</span></p>" },
      { art: "lesetext", lesetext: "u2-rev-candles" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Mrs Chatterjee employs eight people.", true],
          ["The workers start at nine o'clock.", false],
          ["The team throws away the old wax.", false],
          ["Customers often order ten jars at a time.", true],
          ["Anika thinks that the company makes a lot of waste.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-rev-candles",
        fragen: [
          { q: "Who brings the empty jars, and what does the team do with them?", zeilen: [4, 5], e: "Customers bring their empty jars, and the team cleans them.", tipp: "Look at the second paragraph." },
          { q: "Where does Mrs Chatterjee sell her candles?", zeilen: [9, 10], e: "She sells her candles at the farmers' market and on the internet.", tipp: "Look at the fourth paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u2-rev-phone", fragen: [
        { art: "mc", id: "global", titel: "The interview", lead: "Tick the correct answer.",
          fragen: [
            { q: "How many people work in the shop?", o: ["four", "eight", "ten", "one"], a: 0,
              e: "Mr Pereira says four people work there: his sister, two young employees and himself." },
            { q: "What does the shop do?", o: ["It repairs phones.", "It sells new phones.", "It delivers pizza.", "It teaches English."], a: 0,
              e: "Mr Pereira says: We repair phones. New phones are not sold there." }
          ] },
        { art: "luecke", id: "notizen", titel: "Sameer's notes", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Usually the team fixes broken ", { g: "screens" }, "."],
            ["Customers go for a ", { g: "walk" }, " and come back after an hour."],
            ["A good phone does not end up in the ", { g: "rubbish" }, "."]
          ], extra: ["hour", "stamp"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help a friend and write", teile: [
      { art: "text", html: "<p class=\"lead\">An English friend is staying with you. She wants to bring a bag of old glass and paper to the recycling centre on Saturday afternoon. She can't read German, so she asks you about this notice. <span class=\"de\">Du vermittelst: Deine Freundin versteht den Aushang nicht.</span></p><blockquote>„Wertstoffhof Grüne Insel (erfunden). Öffnungszeiten: Montag bis Freitag von 8 bis 16 Uhr, samstags von 8 bis 12 Uhr, sonntags geschlossen. Glas und Papier bitte getrennt in die Container geben. Altöl nehmen wir nicht an. Der Eintritt ist frei.“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells your friend the most important thing. <span class=\"de\">Was muss deine Freundin zuerst erfahren?</span>",
        fragen: [
          { q: "What do you say to your friend about Saturday?", o: ["On Saturday the centre closes at twelve o'clock, so we go in the morning.", "On Saturday the centre is open until four o'clock.", "On Saturday the centre is closed all day.", "On Saturday and on Sunday the centre is open."], a: 0,
            e: "Wichtig für euch ist: samstags nur bis 12 Uhr geöffnet, also nicht am Nachmittag. Bis 16 Uhr ist nur von Montag bis Freitag offen, und sonntags ist geschlossen." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", tag: "Your words", titel: "Tell your friend", lead: "Tell your friend in two or three English sentences: When is the centre open on Saturday? What do you do with glass and paper? What does it cost? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell your friend?", m: "On Saturday the centre is open until twelve o'clock. We put glass and paper in different containers. It is free.", k: ["twelve|12|noon|morning", "separate|different|apart|two containers|not together", "free|nothing|no money|doesn't cost|does not cost|not pay"], min: 3 }],
        tipp: "Start like this: On Saturday the centre … / We put … / It is …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "Present a company or a project", min: 40,
        auftrag: "<p>Present a company or a project in <b>five sentences</b>. It can be a real company, a school project or an idea of your own. Say what it is, who works there, what it makes or does, when it is open or active, and why you like it.</p><p>Use the <b>simple present</b> and the right <b>word order</b>. Write at least 40 words in English.</p>",
        starter: ["I would like to tell you about …", "The company is based in …", "The workers make …", "They usually work …", "I like it because …"],
        kriterien: ["Der Text stellt eine Firma oder ein Projekt vor.", "Die Sätze stehen im simple present, bei he, she, it mit -s.", "Die Wortstellung stimmt: Subjekt – Verb – Objekt, dann Art und Weise, Ort, Zeit.", "Der Text hat etwa fünf Sätze, mindestens 40 Wörter und nennt einen Grund (because)."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class=\"de\">Was hilft beim Lernen und im Test?</span>",
        aussagen: [
          ["With he, she and it I add -s to the verb.", true],
          ["After doesn't I use the verb with -s.", false],
          ["After a time phrase like “every morning” the verb comes before the subject.", false],
          ["In mediation I only tell my partner the important things.", true],
          ["I learn new words best when I use them in my own sentences.", true]
        ] },
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 2 in four sentences", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["With he, she and it the verb gets an ", { g: "-s" }, "."],
          ["For a negative sentence with she I use ", { g: "doesn't" }, " + base form."],
          ["Words like always and never stand ", { g: "before" }, " the main verb."],
          ["The usual order is manner, ", { g: "place" }, " and then time."]
        ], extra: ["after", "wants"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 2 and you know the typical mistakes. Good luck with the test!" }
});
