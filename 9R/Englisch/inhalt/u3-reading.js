/* Englisch 9R · Unit 3 Discover South Africa · Reading: A day in a young life
   (einen Tagebucheintrag verstehen: Thema erfassen, Einzelheiten finden und mit Zeilen belegen, zwischen den Zeilen lesen,
   Sprache im Text – past progressive mit while/when und present perfect mit for/since, die Grammatik der Unit)
   LehrplanPLUS E9 1.1 Leseverstehen (längere Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit inhaltlichen und
   sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Südafrika: Leben junger Menschen).
   Text: „Zanele's Thursday“ (texte/u3/reading-zanele-day.js) – Person, Familie und Lehrer sind erfunden. */
D7Kit.seite({
  id: "u3-reading",
  titel: "Reading: A day in a young life",
  einleitung: "A school day, a neighbour who needs help and a big dream: You read the diary entry of a girl from South Africa. First you find out what it is about, then you look for details – and you show <b>where</b> in the text you found them.",
  zeit: "etwa 40 Minuten",
  ziele: ["📖 I understand a diary entry.", "🔎 I find details and name the lines.", "💭 I read between the lines.", "🧩 I spot the grammar of Unit 3 in a real text."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einem Namen oder einer Zahl."],
    diary: ["diary", "In einem Tagebuch schreibt man abends auf, was am Tag passiert ist und was man dabei denkt."],
    engineer: ["engineer", "Ein Ingenieur oder eine Ingenieurin plant und baut zum Beispiel Brücken, Maschinen oder Straßen."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u3-read-zanele",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">What does a normal day look like for a young person? In this module you read a <button class=\"term\" data-t=\"diary\">diary</button> entry by <b>Zanele</b>, a girl who lives in a city in South Africa. She writes about school, her family and her neighbour – and about a dream.</p><p>Zanele, her brother and her teacher are invented. Her day could be the day of many young people.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["bridge", "Brücke"], ["engineer", "Ingenieur"], ["gate", "Tor"], ["timetable", "Fahrplan"], ["medicine", "Medikament"], ["grown up", "erwachsen"], ["shopping list", "Einkaufszettel"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a name or a number.</p><p>You do <b>not</b> need to know every word.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the diary entry once. Don't stop at words you don't know. <span class=\"de\">Lies den Eintrag einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u3-read-zanele" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What kind of text is this?", o: ["A diary entry about one day", "A news report about an accident", "An advert for a school", "A letter from a teacher"], a: 0,
            e: "The text starts with \"Thursday evening\" and tells in the first person what the writer did that day. That is typical for a diary." },
          { q: "What does Zanele do after school?", o: ["She helps her neighbour.", "She plays football with friends.", "She works in a shop.", "She goes to a doctor."], a: 0,
            e: "After school she goes to Aunt Nomsa's house and helps her with reading and shopping." },
          { q: "How does Zanele feel at the end of the day?", o: ["She is happy.", "She is angry.", "She is bored.", "She is afraid."], a: 0,
            e: "The last words are \"tonight I am happy\". She is tired, but she is happy." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Zanele and Bongani walked to school together.", "Zanele drew a small picture in maths.", "Zanele ate her sandwich at break.", "Zanele read the newspaper to Aunt Nomsa.", "Zanele did her homework at the kitchen table."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Suche die Stelle im Text, bevor du antwortest. Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Bongani is older than Zanele.", false],
          ["Zanele and Bongani walk to school together.", true],
          ["Mr Khumalo has taught at the school for twelve years.", true],
          ["Zanele eats her sandwich alone at break.", false],
          ["Aunt Nomsa can read small letters easily.", false],
          ["Zanele goes to the shop for Aunt Nomsa every Thursday.", true]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht. In einer Prüfung schreibst du dann zum Beispiel: (ll. 6–7).</span>", lesetext: "u3-read-zanele",
        fragen: [
          { q: "Where was Bongani sitting when Zanele came out?", zeilen: [3, 4], e: "He was already sitting on the step.", tipp: "Look at the beginning of the entry." },
          { q: "How long has Mr Khumalo taught at the school?", zeilen: [8, 9], e: "He has taught maths there for twelve years.", tipp: "Look for the name Mr Khumalo in the second paragraph." },
          { q: "What did Mr Khumalo say to Zanele in maths?", zeilen: [13, 14], e: "He said, \"Good thinking, Zanele.\"", tipp: "Look for the quotation marks." },
          { q: "What can Aunt Nomsa not read any more?", zeilen: [18, 19], e: "She cannot read the small letters on the bus timetable or on her medicine boxes.", tipp: "Look for the name Aunt Nomsa in the fourth paragraph." },
          { q: "What does Zanele want to become?", zeilen: [23, 24], e: "She wants to become an engineer and build bridges.", tipp: "Look at the last paragraph." }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Notes about Zanele's day", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Alarm: half past ", { g: "five" }],
          ["Her brother is in Grade ", { g: "4" }, "."],
          ["Mr Khumalo has taught for ", { g: "twelve" }, " years."],
          ["Aunt Nomsa has lived next door for ", { g: "twenty" }, " years."],
          ["Every ", { g: "Thursday" }, " Zanele goes to the shop for Aunt Nomsa."]
        ], extra: ["nurse", "bakery"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence. <span class=\"de\">Manchmal musst du aus dem Text schließen.</span>",
        fragen: [
          { q: "Why does Aunt Nomsa need Zanele's help?", o: ["Her eyes are tired, so reading is difficult for her.", "She does not like the shop.", "She wants to learn maths.", "She has no newspaper."], a: 0,
            e: "The text says that her eyes are tired and that she cannot read small letters. So Zanele reads and writes for her." },
          { q: "What do we learn about Mr Khumalo?", o: ["He believes that Zanele can reach her goal.", "He wants Zanele to leave school.", "He does not like maths.", "He is often angry."], a: 0,
            e: "He says Zanele can do it if she keeps learning, and he praises her idea in maths. That shows that he believes in her." },
          { q: "Zanele says: \"It is a long way\" (l. 26). What does she mean?", o: ["Becoming an engineer takes many years of learning.", "Her school is far from her home.", "The shop is a long walk away.", "She does not want to be an engineer."], a: 0,
            e: "She talks about her dream. A long way means that she needs a lot of time and work to reach it." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why does Zanele help Aunt Nomsa?", m: "Aunt Nomsa's eyes are tired, so she cannot read small letters. Zanele helps her with the shopping and the newspaper.", k: ["eyes|read|reading|see|tired|old|neighbour|neighbor|help", "shopping|newspaper|list|shop|timetable|medicine|next door"], min: 8 }],
        tipp: "Think about Aunt Nomsa's eyes and what Zanele does for her. Start like this: Zanele helps Aunt Nomsa because …" },
      { art: "offen", id: "eigene-saetze", m7: true, tag: "Your life", titel: "Yesterday at your place", lead: "Write two sentences in English about yesterday. Use <b>while</b> and <b>was / were + -ing</b>. <span class=\"de\">Zum Beispiel: While I was … , my brother was …</span>",
        fragen: [{ q: "What were you and your family or friends doing at the same time yesterday? Write two sentences.", m: "Yesterday, while I was doing my homework, my brother was playing outside. While we were eating, the phone rang.", k: ["while", "was|were"], min: 10 }],
        tipp: "Think of two things that happened at the same time. Start with: While I was …" }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 3 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The diary entry uses two things from Unit 3:</p><ul><li><b>past progressive</b> (<i>was / were + -ing</i>) – what was going on at a certain time in the past: Bongani <u>was sitting</u> on the step <b>when</b> I came out. <b>While</b> we <u>were walking</u>, the owner waved. The long action uses the past progressive, the short action (or the new one) uses the simple past.</li><li><b>present perfect</b> (<i>have / has + past participle</i>) – something began in the past and is still true now: She <u>has lived</u> there <b>for</b> twenty years (how long). He <u>has been</u> in Grade 4 <b>since</b> January (starting point).</li></ul><p>Remember: <i>for</i> + a length of time, <i>since</i> + a starting point.</p>" },
      { art: "sort", id: "saetze", tag: "Sort", titel: "Which tense is it?", lead: "Put the sentences into the right box.",
        buckets: ["Past progressive", "Simple past", "Present perfect"],
        items: [{ t: "Bongani was sitting on the step.", b: 0 }, { t: "The others were still counting.", b: 0 }, { t: "Aunt Nomsa was making tea.", b: 0 },
                { t: "I drew a small picture.", b: 1 }, { t: "My alarm rang at half past five.", b: 1 }, { t: "I wrote her shopping list.", b: 1 },
                { t: "She has lived there for twenty years.", b: 2 }, { t: "He has taught maths for twelve years.", b: 2 }, { t: "He has been in Grade 4 since January.", b: 2 }] },
      { art: "markieren", id: "pp-satz", tag: "Mark", titel: "Find the past progressive", finde: "the past progressive form", toleranz: 0,
        satz: "While we [[were walking]] past the corner shop, the owner waved at us.",
        e: "were walking is was/were + -ing. The owner waved is the simple past: a short action in the middle of a longer one." },
      { art: "markieren", id: "pf-satz", tag: "Mark", titel: "Find the length of time", finde: "the words that say how long", toleranz: 0,
        satz: "Mr Khumalo has taught maths at our school [[for twelve years]].",
        e: "For twelve years says how long. For goes with a length of time; since goes with a starting point." },
      { art: "mc", id: "satzbau", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["While Zanele was walking to school, the owner waved.", "While Zanele walking to school, the owner waved.", "While Zanele were walking to school, the owner waved.", "While Zanele walked was to school, the owner waved."], a: 0,
            e: "With Zanele (one person) you need was + -ing." },
          { q: "Which sentence is correct?", o: ["He has taught here for twelve years.", "He has taught here since twelve years.", "He teach here for twelve years.", "He is teaching here for twelve years."], a: 0,
            e: "For goes with a length of time, and with he you need has + past participle." }
        ] },
      { art: "luecke", id: "grammatik-luecke", tag: "Gap text", titel: "Past progressive, for and since", lead: "Complete the sentences. <span class=\"de\">Achtung: Singular = was, Plural = were. Dauer = for, Anfangspunkt = since.</span>",
        absaetze: [
          ["While Bongani ", { g: "was eating" }, " his bread, Zanele packed the bags."],
          ["The neighbours ", { g: "were talking" }, " at the gate when the bus arrived."],
          ["Mr Khumalo ", { g: "has taught" }, " at the school ", { g: "for" }, " twelve years."],
          ["Bongani has been in Grade 4 ", { g: "since" }, " January."]
        ], extra: ["were eating", "have taught"] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The diary entry in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Zanele walks to school with her little ", { g: "brother" }, "."],
          ["Her teacher is Mr ", { g: "Khumalo" }, ", and he teaches ", { g: "maths" }, "."],
          ["After school she helps her neighbour Aunt ", { g: "Nomsa" }, " because her ", { g: "eyes" }, " are tired."],
          ["Zanele wants to become an ", { g: "engineer" }, " and build bridges."]
        ], extra: ["cook", "teacher"] }
    ] }
  ],
  weiter: { text: "Well done! You can find information in a longer text and say where it is. Keep reading and keep asking: What does a day in a young life look like – and what are the dreams behind it?" }
});
