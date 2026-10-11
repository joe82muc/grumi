/* Englisch 9M · Unit 2 Exploring India · Revision: Fit for the test: Unit 2 · M-Fassung
   (gemischte Wiederholung: Wortschatz „Presenting a company“ und „Sustainable living“, die beiden Grammatikthemen der Unit –
   simple present und word order – mit ganzen Sätzen und Fehlersuche, längerer Blogeintrag zum Erschließen, Interview mit Korrektur,
   Sprachmittlung mit Nebeninformationen, Schreibauftrag, vier Plus-Aufgaben)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten, Satzbau),
   E9 5 (Indien: Arbeit und Nachhaltigkeit).
   Texte: „A visit to Lotus Lane Candles“ (texte/u2/revision-reading-candles-m.js), „An interview in a repair shop“ (texte/u2/revision-listening-phone-shop-m.js)
   – Firmen, Orte und Personen sind erfunden. Bild: 9R/Englisch/images/u2-repair-shop.jpg. */
D7Kit.seite({
  id: "u2-revision",
  titel: "Fit for the test: Unit 2",
  einleitung: "Test day is coming! In this module you revise everything from Unit 2: words about companies and about sustainable living, the simple present and word order. You find and correct mistakes, build whole sentences, read a longer blog post, listen to an interview with a correction or two, help a friend and present a company in writing.",
  zeit: "etwa 45 Minuten",
  ziele: ["📚 I know the important words of Unit 2.", "🧩 I build correct sentences in the simple present with the right word order.", "🔎 I read and listen between the lines.", "✍️ I correct typical mistakes and write a text of my own."],
  quiz: { profi: "Test pro" },
  glossar: {
    simplepresent: ["simple present", "Die einfache Gegenwart: Man sagt damit, was jemand regelmäßig tut oder was immer gilt. Bei he, she und it bekommt das Verb ein -s. Beispiel: My uncle works in a factory."],
    wordorder: ["word order", "Die Wortstellung: Im englischen Aussagesatz steht zuerst das Subjekt, dann das Verb, dann das Objekt. Danach folgen meist Art und Weise, Ort und Zeit. Beispiel: The team works carefully in the workshop every day."],
    frequency: ["adverb of frequency", "Ein Häufigkeitswort sagt, wie oft etwas passiert, zum Beispiel always, usually, often, sometimes, hardly ever oder never. Es steht meist vor dem Verb. Beispiel: She often visits her aunt."],
    wax: ["wax", "Wachs ist der weiche Stoff, aus dem man Kerzen macht. Wenn man es erwärmt, wird es flüssig."],
    supplier: ["supplier", "Ein Lieferant ist eine Firma oder eine Person, die einem Betrieb Waren oder Teile bringt, die er für die Arbeit braucht."],
    spill: ["to spill", "Verschütten bedeutet, dass etwas Flüssiges aus Versehen aus einem Gefäß läuft."],
    hardly: ["hardly ever", "Fast nie: Etwas passiert sehr selten. Beispiel: He hardly ever eats meat."]
  },
  haupttext: "u2-rev-candles-m",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 2", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with words about companies and about sustainable living.</p>" },
      { art: "paare", id: "woerter", tag: "Presenting a company", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["supplier", "Lieferant(in)"], ["to employ", "beschäftigen"], ["to melt", "schmelzen"], ["to spill", "verschütten"], ["hardly ever", "fast nie"], ["to advertise", "Werbung machen"]] },
      { art: "luecke", id: "woerter-luecke", tag: "Sustainable living", titel: "Companies and the environment", lead: "Complete the sentences with words from the box. Two words are left over.",
        absaetze: [
          ["The shop cannot repair the phone because the ", { g: "supplier" }, " has not delivered the new screen."],
          ["My cousin is an ", { g: "apprentice" }, " and learns to be an electrician in a workshop."],
          ["She ", { g: "commutes" }, " to the city by bus every day, and the journey takes an hour."],
          ["To make less waste, many shops now use paper ", { g: "packaging" }, " instead of plastic."]
        ], extra: ["salary", "shift"] }
    ] },
    { kurz: "Simple present", ober: "Grammar 1", titel: "Simple present", teile: [
      { art: "merke", kopf: "SIMPLE PRESENT", html: "<p><b><button class=\"term\" data-t=\"simplepresent\">Simple present</button></b> – what people do again and again: with <u>he, she, it</u> the verb gets <u>-s</u>. Negative and questions use <u>do / does</u> and the <b>base form</b>: She <u>doesn't like</u> early shifts. <u>Does</u> the shop <u>open</u> on Sundays? <button class=\"term\" data-t=\"frequency\">Adverbs of frequency</button> stand <b>before</b> the main verb: She <u>often visits</u> her aunt.</p>" },
      { art: "offen", id: "sp-fehler", tag: "Typical mistakes", titel: "Find the mistakes: simple present", lead: "Find the mistakes and write the correct sentence. Sentence 1 has two mistakes, sentence 2 has one.",
        fragen: [
          { q: "My sister work in a bank and she don't like early shifts.", m: "My sister works in a bank and she doesn't like early shifts.", k: ["works", "doesn't like|does not like"], min: 2 },
          { q: "Does your uncle works on Saturdays?", m: "Does your uncle work on Saturdays?", k: ["uncle work on"], min: 1 }
        ],
        tipp: "Look at he / she / it. After does or doesn't the verb has no -s." },
      { art: "luecke", id: "sp-luecke", tag: "Simple present", titel: "Fill in the verb form", lead: "Complete the sentences with a whole verb form from the box. Two forms are left over.",
        absaetze: [
          ["The apprentice ", { g: "doesn't enjoy" }, " getting up early for the first shift."],
          ["Question: ", { g: "Does" }, " your cousin deliver parcels at the weekend?"],
          ["The managers ", { g: "usually leave" }, " at six o'clock in the evening."]
        ], extra: ["usually leaves", "don't enjoy"] },
      { art: "mc", id: "sp-wahl", tag: "Simple present", titel: "Choose the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which negative sentence is correct?", o: ["My grandparents don't use their car for short trips.", "My grandparents doesn't use their car for short trips.", "My grandparents don't uses their car for short trips.", "My grandparents not use their car for short trips."], a: 0,
            e: "My grandparents sind mehrere Personen (they), also heißt die Verneinung don't. Doesn't gehört nur zu he, she und it. Das Verb danach bekommt keine Endung." },
          { q: "Which question is correct?", o: ["Where does your aunt buy her vegetables?", "Where does your aunt buys her vegetables?", "Where do your aunt buy her vegetables?", "Where buys your aunt her vegetables?"], a: 0,
            e: "Fragewort – does – Subjekt – Verb: Zu your aunt (she) gehört does. Weil das -s schon in does steckt, bleibt buy ohne -s. Ohne do oder does lässt sich die Frage nicht bilden." },
          { q: "Which sentence with \"never\" is correct?", o: ["Our neighbour never buys water in plastic bottles.", "Our neighbour buys never water in plastic bottles.", "Our neighbour never buy water in plastic bottles.", "Our neighbour doesn't never buy water in plastic bottles."], a: 0,
            e: "Never steht zwischen Subjekt und Verb. Auch mit never bekommt das Verb bei he, she, it ein -s: buys. Weil never schon verneint, kommt kein doesn't dazu." }
        ] },
      { art: "offen", id: "fragen-stellen", m7: true, tag: "Plus · Writing", titel: "Questions for a shop owner", lead: "You visit a small shop for a school project. Write two questions for the owner (one with do, one with does) and one sentence about something the shop doesn't sell. <span class=\"de\">Zwei Fragen und eine Verneinung.</span>",
        fragen: [{ q: "What do you ask the owner? What doesn't the shop sell?", m: "Does the shop open on Sundays? Do you employ many people? The shop doesn't sell new phones.", k: ["does the|does your|does he|does she|does it", "do you|do your|do the|do they|do many|do customers", "doesn't|does not|don't|do not"], min: 3 }],
        tipp: "Does the shop …? / Do you …? / The shop doesn't …" }
    ] },
    { kurz: "Word order", ober: "Grammar 2", titel: "Word order", teile: [
      { art: "merke", kopf: "WORD ORDER", html: "<p><b><button class=\"term\" data-t=\"wordorder\">Word order</button></b> – subject – verb – object, then <b>how – where – when</b>: The team packs the candles <u>carefully</u> <u>in the workshop</u> <u>every morning</u>. If a time phrase comes first, the subject still stands <b>before</b> the verb: <u>Every morning</u> the team <u>meets</u> in the office.</p>" },
      { art: "ordnen", id: "wo-ordnen", tag: "Word order", titel: "Build the sentence", lead: "Put the parts in the right order. <span class=\"de\">Bringe die Satzteile in die richtige Reihenfolge.</span>",
        schritte: ["The apprentice", "cleans the jars", "very carefully", "in the back room", "every afternoon"] },
      { art: "offen", id: "wo-fehler", tag: "Typical mistakes", titel: "Find the mistakes: word order", lead: "Put the words in the right order. Write the correct sentence.",
        fragen: [
          { q: "Every morning drives the supplier to the workshop.", m: "Every morning the supplier drives to the workshop.", k: ["morning the supplier drives"], min: 1 },
          { q: "The team packs in the workshop carefully the candles.", m: "The team packs the candles carefully in the workshop.", k: ["packs the candles carefully in the workshop"], min: 1 }
        ],
        tipp: "Subject – verb – object, then how – where – when." },
      { art: "mc", id: "wo-wahl", tag: "Word order", titel: "Choose the correct word order", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence has the correct word order?", o: ["Two students repair old bikes carefully at school every Friday.", "Two students repair carefully old bikes at school every Friday.", "Two students repair every Friday old bikes carefully at school.", "Two students repair at school old bikes carefully every Friday."], a: 0,
            e: "Verb und Objekt bleiben zusammen: repair old bikes. Erst danach kommen Art und Weise (carefully), Ort (at school) und Zeit (every Friday)." },
          { q: "Which sentence with \"always\" has the correct word order?", o: ["My brother always does his homework in the kitchen after dinner.", "My brother does always his homework in the kitchen after dinner.", "My brother always does in the kitchen his homework after dinner.", "My brother always does after dinner his homework in the kitchen."], a: 0,
            e: "Always steht zwischen Subjekt und Verb: my brother always does. Das Objekt folgt gleich auf das Verb (does his homework), dann kommen Ort und Zeit." }
        ] },
      { art: "offen", id: "wo-erklaeren", m7: true, tag: "Plus · Explain", titel: "Explain the mistake", lead: "A friend writes: “Every morning goes Mr Pereira to the shop.” Explain in one or two sentences (English or German) what is wrong. <span class=\"de\">Erkläre in eigenen Worten, was nicht stimmt.</span>",
        fragen: [{ q: "What is wrong with the sentence?", m: "The verb must not stand before the subject. The correct sentence is: Every morning Mr Pereira goes to the shop.", k: ["subject|Subjekt|Mr Pereira goes|before the verb|vor dem Verb|Verb"], min: 1 }],
        tipp: "After a time phrase, what comes first: the subject or the verb?" }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. Later you will listen to an interview like this one.</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-repair-shop.jpg\" alt=\"A man repairs a mobile phone at a workbench; a student with a notepad asks him questions.\" style=\"width:100%;border-radius:14px\"></figure><p>What is the man repairing? What could the student ask him about his job?</p>" },
      { art: "text", html: "<p class=\"lead\">First read a blog post about a visit to a small company. <span class=\"de\">Danach hörst du das Interview.</span></p>" },
      { art: "lesetext", lesetext: "u2-rev-candles-m" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Anika was excited about the visit from the beginning.", false],
          ["Mrs Chatterjee started her company because she wanted candles without plastic packaging.", true],
          ["The worker was angry when Anika spilled the wax.", false],
          ["Customers often order ten jars at a time.", true]
        ] },
      { art: "mc", id: "schliessen", tag: "Between the lines", titel: "What does the text show?", lead: "Tick the best answer.",
        fragen: [
          { q: "Why does Mrs Chatterjee give everybody a day off after the festivals?", o: ["She knows that the team has worked more than usual.", "She wants to sell more candles in the shops.", "The farmers' market is closed after the festivals.", "Customers order fewer candles then."], a: 0,
            e: "Vor den Festen arbeitet das Team lange, und manche sehen kaum ihre Familien. Der freie Tag danach ist ein Ausgleich. Von Verkauf oder Markt steht dazu nichts im Text." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-rev-candles-m",
        fragen: [
          { q: "Why was Anika not excited about the visit at first?", zeilen: [3, 4], e: "She thought that a candle workshop would be boring.", tipp: "Look at the first paragraph." },
          { q: "How did the worker react when Anika spilled the wax?", zeilen: [19, 20], e: "She cleaned it up quietly, was not angry and gave Anika a tip.", tipp: "Look at the third paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u2-rev-phone-m", fragen: [
        { art: "mc", id: "global", titel: "The interview", lead: "Tick the correct answer. Listen for corrections!",
          fragen: [
            { q: "How many people work in the shop at the moment?", o: ["four", "six", "two", "five"], a: 0,
              e: "Sameer fragt, ob es sechs sind. Mr Pereira verbessert ihn: Im Moment sind es vier. Sechs waren es im letzten Jahr." },
            { q: "When does the shop open on a weekday?", o: ["at half past eight", "at nine o'clock", "at six o'clock", "at one o'clock"], a: 0,
              e: "Sameer vermutet neun Uhr, aber Mr Pereira verbessert: halb neun. Um sechs Uhr schließt der Laden, und um ein Uhr schließt er samstags." }
          ] },
        { art: "luecke", id: "notizen", titel: "Sameer's notes", lead: "Complete the notes with words from the box. Two words are left over.",
          absaetze: [
            ["Usually the team fixes broken ", { g: "screens" }, "."],
            ["When the phone is ready, the shop calls a ", { g: "second" }, " number."],
            ["Sometimes a ", { g: "part" }, " arrives late, so the customer has to come back."]
          ], extra: ["tea", "sister"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help a friend and write", teile: [
      { art: "text", html: "<p class=\"lead\">An English friend is staying with you. She wants to take old glass, old paper and a half-empty tin of paint to the recycling centre on Saturday afternoon. She can't read German, so she asks you about this notice. <span class=\"de\">Du vermittelst: Deine Freundin versteht den Aushang nicht.</span></p><blockquote>„Wertstoffhof Grüne Insel (erfunden). Öffnungszeiten: Montag bis Freitag von 8 bis 16 Uhr, samstags von 8 bis 12 Uhr, sonntags geschlossen. Glas und Papier bitte getrennt in die Container geben; Glas bitte nicht zwischen 12 und 14 Uhr einwerfen (Lärm). Altöl und Farben nehmen wir nicht an. Der Eintritt ist frei. Neu: Jeden ersten Samstag im Monat gibt es einen Tauschmarkt für gebrauchte Bücher.“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells your friend the most important thing. <span class=\"de\">Was muss deine Freundin zuerst erfahren?</span>",
        fragen: [
          { q: "What do you tell your friend first?", o: ["On Saturday the centre closes at twelve o'clock, and they don't take paint.", "There is a book market on the first Saturday of the month.", "The centre is open until four o'clock every day.", "You can put glass into the containers at any time."], a: 0,
            e: "Für euren Plan zählt zuerst: samstags nur bis 12 Uhr, und Farbe wird nicht angenommen. Der Tauschmarkt ist nur eine Nebeninformation. Bis 16 Uhr ist nur von Montag bis Freitag geöffnet." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", tag: "Your words", titel: "Tell your friend", lead: "Tell your friend in three English sentences: When is the centre open on Saturday? What can't she bring? What do you do with glass and paper? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell your friend?", m: "On Saturday the centre is only open until twelve o'clock, so we must go in the morning. They don't take paint. We put glass and paper in different containers.", k: ["twelve|12|noon|morning", "paint", "separate|different|apart|two containers|not together"], min: 3 }],
        tipp: "Start like this: On Saturday the centre … / They don't take … / We put …" },
      { art: "offen", id: "deutsch-fassen", m7: true, tag: "Plus · Mediation", titel: "Tell your mum in German", lead: "Your mum did not read the blog post. In two or three German sentences: What kind of company did Anika visit, and what did she think of it at the end? <span class=\"de\">Auf Deutsch, nur die wichtigen Punkte.</span>",
        fragen: [{ q: "Was hat der Blog erzählt?", m: "Anika hat eine kleine Firma besucht, die Kerzen in alten Gläsern macht. Die Kunden bringen ihre leeren Gläser mit, und altes Wachs wird wiederverwendet, sodass fast kein Abfall entsteht. Zuerst erwartete Anika einen langweiligen Besuch, am Ende war sie begeistert.", k: ["Kerze", "Glas|Gläser|Wachs|wiederverwend|Abfall", "begeistert|gut|toll|gefiel|Meinung|langweilig"], min: 3 }],
        tipp: "Fang so an: Anika hat … besucht. / Die Firma … / Am Ende …" },
      { art: "offen", id: "meinung", m7: true, tag: "Plus · Opinion", titel: "Would you work there?", lead: "Would you like to work in a small company like Lotus Lane Candles? Give your opinion and two reasons. Use because or although at least once.",
        fragen: [{ q: "Would you like to work in a small company? Why / why not?", m: "I would like to work in a small company because everybody knows each other, and I think the work is varied. Although the team sometimes works late, I would try it.", k: ["I would|I'd|I wouldn't|I would not|I prefer", "because|although|so that"], min: 2 }],
        tipp: "I would (not) like to … because … Also, … Although …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "Present a company or a project", min: 50,
        auftrag: "<p>Present a company or a project in <b>six sentences</b>. It can be a real company, a school project or an idea of your own. Say what it is, who works there, what it makes or does, when it is open or active, and why you like it.</p><p>Use the <b>simple present</b>, at least one <b>adverb of frequency</b> (always, usually, never …) and one sentence with the <b>word order</b> manner – place – time. Use <b>because</b> or <b>although</b> once. Write at least 50 words in English.</p>",
        starter: ["I would like to tell you about …", "The company is based in …", "The workers usually …", "They never …", "I like it because …"],
        kriterien: ["Der Text stellt eine Firma oder ein Projekt vor.", "Die Sätze stehen im simple present, bei he, she, it mit -s, Verneinung mit do/does.", "Ein Häufigkeitswort steht vor dem Verb, und ein Satz hat die Reihenfolge Art und Weise – Ort – Zeit.", "Der Text hat etwa sechs Sätze, mindestens 50 Wörter und nennt einen Grund (because oder although)."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 2 in three sentences", lead: "Complete the sentences. Two words are left over.",
        absaetze: [
          ["After does or doesn't the verb stays in the ", { g: "base form" }, "."],
          ["Words like always and never stand ", { g: "before" }, " the main verb."],
          ["The usual order after verb and object is manner, ", { g: "place" }, " and then time."]
        ], extra: ["wants", "table"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 2, you can find typical mistakes and you are ready for the test. Good luck!" }
});
