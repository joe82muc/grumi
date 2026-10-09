/* Englisch 9R · Unit 1 Around Australia · Reading: A beach day with a plan
   (einen Text über ein Umweltproblem verstehen: Thema erfassen, Einzelheiten finden und mit Zeilen belegen, zwischen den
   Zeilen lesen, Sprache im Text – simple past, will-future und if-Sätze Typ I, die Grammatik der Unit)
   LehrplanPLUS E9 1.1 Leseverstehen (längere sachliche Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit
   inhaltlichen und sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Australien:
   Natur, Umwelt, nachhaltiges Handeln).
   Text: „A beach day with a plan“ (texte/u1/reading-clean-up-day.js) – Ort, Schule und Personen sind erfunden. */
D7Kit.seite({
  id: "u1-reading",
  titel: "Reading: A beach day with a plan",
  einleitung: "Forty students, one beach and 186 kilograms of rubbish: You read an article from an Australian school magazine. First you find out what it is about, then you look for details – and you show <b>where</b> in the text you found them.",
  zeit: "etwa 40 Minuten",
  ziele: ["📰 I understand what an article is about.", "🔎 I find details and name the lines.", "💭 I read between the lines.", "🧩 I spot the grammar of Unit 1 in a real text."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einer Zahl oder einem Namen."],
    rubbish: ["rubbish", "Müll, Abfall (britisches und australisches Englisch; in den USA sagt man eher „trash“ oder „garbage“)."],
    cleanup: ["clean-up day", "Ein Tag, an dem viele Leute zusammen aufräumen und Müll sammeln."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u1-read-cleanup",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Australia has more than 10,000 beaches – and many of them have the same problem: <button class=\"term\" data-t=\"rubbish\">rubbish</button>. In this module you read how students in a small town did something about it.</p><p>The town <b>Wattle Bay</b>, the school and the people are invented. The problem is real.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["rubbish", "Müll"], ["bin", "Mülleimer"], ["gloves", "Handschuhe"], ["to weigh", "wiegen"], ["tiny", "winzig"], ["jellyfish", "Qualle"], ["to pick up", "aufheben"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a number or a name.</p><p>You do <b>not</b> need to know every word.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the article once. Don't stop at words you don't know. <span class=\"de\">Lies den Artikel einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u1-read-cleanup" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the article about?", o: ["Students clean a beach and plan what to do next.", "A school wins a surfing competition.", "Tourists complain about a dirty town.", "A teacher finds a rare seabird."], a: 0,
            e: "The whole text is about the clean-up day and the students' next steps." },
          { q: "Who had the idea?", o: ["Mia, a Year 9 student", "Mr Okafor, the science teacher", "Jack and his surfing friends", "The owner of a local café"], a: 0,
            e: "The idea came from Mia. Her teacher helped her to plan the day." },
          { q: "Where can you read a text like this?", o: ["in a school magazine", "in a science book", "in a travel guide", "in a letter to a friend"], a: 0,
            e: "It reports on a school event and quotes students – typical for a school magazine." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Mia found a dead seabird near the rocks.", "Mia asked her science teacher for help.", "Forty students met at the beach on Saturday morning.", "The teams picked up bottles, bags and fishing lines.", "The students weighed the rubbish.", "Mia talked about the next clean-up day."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Suche die Stelle im Text, bevor du antwortest. Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The students started at eight o'clock in the morning.", true],
          ["Mia found the seabird in November.", false],
          ["The students worked in teams of four.", true],
          ["They collected more than 200 kilograms of rubbish.", false],
          ["A café gave the students free food and drinks.", true],
          ["Jack knew everybody in his team before the clean-up day.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht. In einer Prüfung schreibst du dann zum Beispiel: (ll. 6–8).</span>", lesetext: "u1-read-cleanup",
        fragen: [
          { q: "What did the students bring to the beach?", zeilen: [2, 4], e: "They brought gloves, buckets and big bags.", tipp: "Look at the beginning of the article." },
          { q: "What gave Mia the idea for the clean-up day?", zeilen: [6, 8], e: "She found a dead seabird with plastic in its stomach.", tipp: "Look for the name Mia." },
          { q: "How much rubbish did the students collect?", zeilen: [15, 16], e: "They weighed 186 kilograms.", tipp: "Scan the text for a number with kilograms." },
          { q: "Why do sea turtles eat plastic bags?", zeilen: [19, 21], e: "In the water the bags look like jellyfish.", tipp: "Look for the word turtles." },
          { q: "What will the students ask the town for?", zeilen: [28, 29], e: "They will ask for more bins near the car park.", tipp: "Look at the last paragraph: what are the plans?" }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Mia's notes for the school website", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Clean-up day at Wattle Bay: ", { g: "forty" }, " students, ", { g: "three" }, " hours of work."],
          ["We found bottles, bags, fishing lines and even an old car ", { g: "tyre" }, "."],
          ["Result: 186 ", { g: "kilograms" }, " of rubbish. Next clean-up day: in ", { g: "November" }, "."]
        ], extra: ["March", "metres"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence. <span class=\"de\">Manchmal musst du aus dem Text schließen.</span>",
        fragen: [
          { q: "The article begins: The students \"did not go surfing\". What does this tell you?", o: ["On a normal Saturday many of them go surfing.", "Surfing is not allowed at Wattle Bay.", "The students cannot surf.", "The weather was bad on Saturday."], a: 0,
            e: "The sentence shows that the students gave up their free time for the clean-up day." },
          { q: "\"… break it into tiny pieces\" (l. 18). What does \"tiny\" mean?", o: ["very small", "very dirty", "very dangerous", "very old"], a: 0,
            e: "Animals think the pieces are food, so they must be very small." },
          { q: "What does Jack's statement at the end of paragraph 5 show?", o: ["The clean-up day helped students to make new friends.", "Jack did not enjoy the hard work.", "Jack wants to stop the next clean-up day.", "The teams were too big."], a: 0,
            e: "Before the day he did not know his team – now they plan to go surfing together." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why is plastic dangerous for sea animals?", m: "Plastic breaks into very small pieces. Animals think the pieces are food and eat them.", k: ["food|eat|eats|eating", "piece|pieces|small|tiny|bag|bags"], min: 8 }],
        tipp: "Read lines 17 to 21 again. Start like this: Plastic is dangerous because …" },
      { art: "offen", id: "eigene-ideen", m7: true, tag: "Your ideas", titel: "What about your school?", lead: "Write two ideas in English. Use <b>will</b> or an <b>if-sentence</b>. <span class=\"de\">Zum Beispiel: If we …, … will …</span>",
        fragen: [{ q: "What could your school do against rubbish? Write two ideas.", m: "We will put more bins in the schoolyard. If every class cleans up once a month, our school will look better.", k: ["will|if", "bin|bins|rubbish|clean|plastic|bottle|bottles|poster|posters"], min: 12 }],
        tipp: "Think of bins, posters, a clean-up day or plastic bottles. Start with: We will … / If we …, …" }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 1 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The article uses three things from Unit 1:</p><ul><li><b>simple past</b> – what happened: They <u>met</u> at the beach. Mia <u>found</u> a seabird.</li><li><b>will-future</b> – plans and what people think will happen: We <u>will make</u> posters.</li><li><b>if-sentences (type I)</b> – what will happen if …: <u>If</u> the weather <u>is</u> good, the students <u>will invite</u> their families.</li></ul>" },
      { art: "sort", id: "zeiten", tag: "Sort", titel: "Past or future?", lead: "Put the phrases from the text into the right box.",
        buckets: ["It happened (simple past)", "It will happen (will-future)"],
        items: [{ t: "met at the beach", b: 0 }, { t: "found a dead seabird", b: 0 }, { t: "worked in teams", b: 0 }, { t: "weighed everything", b: 0 },
                { t: "will ask the town", b: 1 }, { t: "will make posters", b: 1 }, { t: "will come back", b: 1 }, { t: "will invite their families", b: 1 }] },
      { art: "markieren", id: "if-satz", tag: "Mark", titel: "Find the verbs", finde: "the verb in the if-part and the verb form in the main part", toleranz: 0,
        satz: "If the weather [[is]] good, the students [[will invite]] their families too.",
        e: "if-part: simple present (is) – main part: will + verb (will invite)." },
      { art: "luecke", id: "if-luecke", tag: "Gap text", titel: "What will happen if …?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will.</span>",
        absaetze: [
          ["If people ", { g: "leave" }, " their rubbish on the beach, the wind ", { g: "will blow" }, " it into the sea."],
          ["If a turtle ", { g: "eats" }, " a plastic bag, it ", { g: "will get" }, " sick."],
          ["If the town ", { g: "puts" }, " more bins near the car park, the beach ", { g: "will stay" }, " cleaner."]
        ], extra: ["will leave", "ate"] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The article in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Students from an Australian school spent a Saturday morning on the ", { g: "beach" }, "."],
          ["They collected a lot of ", { g: "plastic" }, " and other rubbish, because it is dangerous for ", { g: "animals" }, "."],
          ["The day was hard, but the students also had ", { g: "fun" }, " and made new friends."],
          ["They want to go on: They plan another day and will ask for more ", { g: "bins" }, "."]
        ], extra: ["tourists", "money"] }
    ] }
  ],
  weiter: { text: "Well done! You can find information in a longer text and say where it is. Next: listen to people talking about Australia." }
});
