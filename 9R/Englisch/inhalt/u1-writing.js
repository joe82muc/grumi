/* Englisch 9R · Unit 1 Around Australia · Writing: An email from Down Under
   (persönliche E-Mail schreiben: Aufbau und Wendungen kennen, Grammatik der Unit im Schreiben – simple past, will-future,
   if-Sätze Typ I –, dann planen, schreiben, prüfen, überarbeiten, abgeben: PLAN – WRITE – CHECK – REVISE – SUBMIT)
   LehrplanPLUS E9 2.1 Schreiben (persönliche Korrespondenz mit Anrede, Gruß und Name; etwa 100 Wörter), E9 3 (Texte
   planen und überarbeiten), E9 5 (Australien: Alltag, Schüleraustausch).
   Text: „An email from Tarrawong“ (texte/u1/writing-email-tarrawong.js) – Stadt und Personen sind erfunden. */
D7Kit.seite({
  id: "u1-writing",
  titel: "Writing: An email from Down Under",
  einleitung: "You spend a school year in Australia and write to a friend at home. First you look at a good email and learn useful phrases. Then you plan, write, check and revise your own email – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["✉️ I know the parts of an informal email.", "🗣️ I use greetings and closings.", "⏳ I use the simple past, will and if-sentences in my text.", "📝 I plan, write, check and revise my own email."],
  quiz: { profi: "Writing pro" },
  glossar: {
    greeting: ["greeting", "Die Anrede am Anfang, zum Beispiel „Hi Tom,“ – in einer E-Mail an einen Freund mit Komma."],
    closing: ["closing", "Der Gruß am Schluss, zum Beispiel „See you soon,“ oder „Take care,“. Danach steht dein Name."],
    informal: ["informal", "Persönlich, locker: an Freunde schreibst du informal (Hi, Thanks, I'm). An Behörden schreibst du formal (Dear Sir or Madam)."],
    host: ["exchange student", "Austauschschülerin oder Austauschschüler. Sie oder er wohnt meist in einer Gastfamilie (host family)."],
    revise: ["to revise", "Überarbeiten: den eigenen Text noch einmal lesen und verbessern."]
  },
  haupttext: "u1-write-email",
  stationen: [
    { kurz: "Model", ober: "1 · What makes a good email?", titel: "Look at a good email", teile: [
      { art: "text", html: "<p class=\"lead\">Hana is an <button class=\"term\" data-t=\"host\">exchange</button> student in Australia. She writes to her friend Ben at home. Read her email. <span class=\"de\">Lies die E-Mail einmal ganz durch. Die Stadt Tarrawong und die Personen sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u1-write-email" },
      { art: "mc", id: "wer", tag: "Who and why?", titel: "Who writes to whom?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Who writes to whom?", o: ["Hana writes to her friend Ben.", "Ben writes to his teacher.", "Hana writes to her host family.", "A teacher writes to the class."], a: 0,
            e: "The email starts with \"Hi Ben,\" and ends with \"Hana\"." },
          { q: "Why does Hana write?", o: ["She tells Ben about her week and her plans.", "She wants to buy a bike.", "She asks for a job.", "She complains about the weather."], a: 0,
            e: "She tells about last week and about next week – that is typical for a personal email." },
          { q: "The email is informal. How can you see this?", o: ["Hi Ben, … Take care,", "Dear Sir or Madam, … Yours faithfully,", "long and difficult sentences", "no greeting at the beginning"], a: 0,
            e: "\"Hi\" and \"Take care\" are friendly words between friends." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the email?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-write-email",
        fragen: [
          { q: "Where is the greeting?", zeilen: [1, 1], e: "The greeting is the first line: Hi Ben,", tipp: "Look at the very beginning." },
          { q: "Where does Hana tell what happened on Saturday?", zeilen: [4, 8], e: "The main part tells the story: bike park, picnic, rain.", tipp: "Look for the words On Saturday." },
          { q: "Where does she write about her plans?", zeilen: [9, 11], e: "She uses will and an if-sentence for next week.", tipp: "Look for Next week." }
        ] },
      { art: "ordnen", id: "teile", tag: "Order", titel: "The parts of an email", lead: "Put the parts in the right order. <span class=\"de\">Bringe die Teile einer E-Mail in die richtige Reihenfolge.</span>",
        schritte: ["greeting (Hi Ben,)", "opening sentence (Thanks for your email.)", "main part (what happened)", "plans (Next week I will …)", "closing (Take care,)", "your name (Hana)"] }
    ] },
    { kurz: "Phrases", ober: "2 · Useful phrases", titel: "Words for the start and the end", teile: [
      { art: "merke", kopf: "EMAIL TIP", html: "<p>An email to a friend is <b>informal</b>: short sentences, friendly words, contractions (<i>I'm, didn't</i>). Always write a <button class=\"term\" data-t=\"greeting\">greeting</button> at the beginning and a <button class=\"term\" data-t=\"closing\">closing</button> and your name at the end.</p>" },
      { art: "sort", id: "wendungen", tag: "Sort", titel: "Greeting, opening or closing?", lead: "Put the phrases into the right box.",
        buckets: ["Greeting", "Opening sentence", "Closing"],
        items: [{ t: "Hi Tom,", b: 0 }, { t: "Hello Sara,", b: 0 }, { t: "How are you?", b: 1 }, { t: "Thanks for your email.", b: 1 },
                { t: "Sorry that I didn't write earlier.", b: 1 }, { t: "See you soon,", b: 2 }, { t: "Take care,", b: 2 }, { t: "Write back soon!", b: 2 }] },
      { art: "paare", id: "paare", tag: "Match", titel: "German – English", lead: "Find the pairs. <span class=\"de\">Verbinde die deutsche Wendung mit der englischen.</span>",
        paare: [["Danke für deine E-Mail.", "Thanks for your email."], ["Schreib bald zurück!", "Write back soon!"], ["Bis bald,", "See you soon,"], ["Pass auf dich auf,", "Take care,"], ["Wie geht es dir?", "How are you?"], ["Letzte Woche war viel los.", "Last week was really busy."]] },
      { art: "mc", id: "formell", tag: "Formal or informal?", titel: "Which phrase fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "You write to a friend. Which closing fits?", o: ["Take care,", "Yours faithfully,", "With kind regards, Mr Smith", "Dear Sir or Madam,"], a: 0,
            e: "\"Take care,\" is friendly. The other phrases belong in formal letters." },
          { q: "Which greeting does NOT fit into an email to a friend?", o: ["Dear Sir or Madam,", "Hi Tom,", "Hello Sara,", "Hi Ben,"], a: 0,
            e: "\"Dear Sir or Madam\" is formal – you use it for letters to offices or companies." }
        ] }
    ] },
    { kurz: "Language", ober: "3 · Language check", titel: "Grammar in your email", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>simple past</b> – what you did: I <u>fell</u> off my bike. We <u>went</u> to the beach. (irregular verbs!)</li><li><b>will-future</b> – plans and ideas: I <u>will start</u> a course.</li><li><b>if-sentence</b> – <u>If</u> it <u>is</u> sunny, we <u>will go</u> out. (No <i>will</i> after <i>if</i>.)</li></ul>" },
      { art: "luecke", id: "past", tag: "Gap text", titel: "What happened last week?", lead: "Complete the text with the simple past. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["On Monday we ", { g: "went" }, " to the market."],
          ["I ", { g: "bought" }, " a hat, and my host sister ", { g: "ate" }, " an ice cream."],
          ["Later we ", { g: "saw" }, " a big spider on the wall!"]
        ], extra: ["goed", "buyed"] },
      { art: "luecke", id: "will", tag: "Gap text", titel: "What will you do next?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will.</span>",
        absaetze: [
          ["Next week I ", { g: "will visit" }, " a farm."],
          ["If the weather ", { g: "is" }, " bad, we ", { g: "will stay" }, " at home."],
          ["If I ", { g: "have" }, " time, I ", { g: "will call" }, " you."]
        ], extra: ["will be", "visited"] },
      { art: "markieren", id: "verbindung", tag: "Mark", titel: "Find the linking word", finde: "the linking words", toleranz: 0,
        satz: "[[First]] we visited a zoo, [[then]] we had lunch [[because]] we were hungry, [[but]] it was too hot to eat outside.",
        e: "Linking words (first, then, because, but) make your text easy to read." },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["I saw a kangaroo yesterday.", "I have seen a kangaroo yesterday.", "I see a kangaroo yesterday.", "I seed a kangaroo yesterday."], a: 0,
            e: "With yesterday you use the simple past: saw." },
          { q: "Which sentence is correct?", o: ["If it rains, we will stay at home.", "If it will rain, we will stay at home.", "If it rains, we stay will at home.", "If it rained, we will stay at home."], a: 0,
            e: "After if you use the simple present, not will." },
          { q: "Which sentence is correct?", o: ["My friend and I go to the beach.", "Me and my friend goes to the beach.", "My friend and me goes to the beach.", "I and my friend goes to the beach."], a: 0,
            e: "My friend and I = we, so the verb is go (without s)." }
        ] }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your email from Down Under", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "Your email from Down Under",
        plan: [
          { id: "greeting", label: "Greeting and first sentence", hilfe: "Hi …, / How are you? / Thanks for …", zeilen: 1 },
          { id: "where", label: "Where are you? Who are you with?", hilfe: "Stichpunkte reichen", zeilen: 2 },
          { id: "past", label: "What did you do last week? (simple past)", hilfe: "3 Dinge, mit Zeitangaben", zeilen: 3 },
          { id: "feel", label: "How was it?", hilfe: "Adjektive: amazing, scary, exhausting …", zeilen: 1 },
          { id: "plans", label: "What will you do next? (will, if …)", hilfe: "ein Plan, ein if-Satz", zeilen: 2 },
          { id: "closing", label: "Closing and your name", hilfe: "See you soon, / Take care,", zeilen: 1 }
        ],
        auftrag: { R: "<p>You are an exchange student in an Australian city (invent a name). Write an email to a friend at home (about 80–100 words).</p><ul><li>Tell your friend what you did last week.</li><li>Say how it was.</li><li>Write about one plan for next week and one if-sentence.</li></ul><p><span class=\"de\">Du machst einen Schüleraustausch in Australien (erfinde eine Stadt). Schreibe deiner Freundin oder deinem Freund zu Hause: was du letzte Woche erlebt hast, wie es war, was du nächste Woche vorhast – dazu ein if-Satz.</span></p>" },
        min: { R: 80 },
        kriterien: { R: ["Greeting, closing and name are there.", "I tell what I did – in the simple past.", "I say how it was.", "I write about a plan with will or an if-sentence.", "I use linking words (first, then, because, but)."] },
        starter: ["Hi …,", "Last week I …", "First we … Then …", "It was … because …", "Next week I will …", "If the weather is good, …"] }
    ] },
    { kurz: "Revise", ober: "5 · Check and revise", titel: "Make your text better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check a text", lead: "True or false?",
        aussagen: [
          ["A good way to check: read your text aloud.", true],
          ["You do not need a closing and a name in an email to a friend.", false],
          ["You check the verbs: simple past for things that happened.", true],
          ["After you submit, you must never change your text.", false]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler.</span></p><blockquote>Last Sunday I <b>go</b> to the beach with my host family. It was hot, so we swam a lot. After that we <b>have eaten</b> fish and chips. <b>If it will be</b> sunny next week, we will go again.</blockquote><p class=\"de\">Die drei fett gedruckten Stellen stimmen nicht.</p>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Last Sunday I go to the beach … How do you correct the verb?", o: ["Last Sunday I went to the beach.", "Last Sunday I goed to the beach.", "Last Sunday I have gone to the beach.", "Last Sunday I will go to the beach."], a: 0,
            e: "Last Sunday is past time: went." },
          { q: "If it will be sunny next week … How do you correct it?", o: ["If it is sunny next week, we will go again.", "If it will be sunny next week, we go again.", "If it would be sunny next week, we will go again.", "If it was sunny next week, we will go again."], a: 0,
            e: "After if: simple present (is), in the main part: will go." },
          { q: "After that we have eaten fish and chips. How do you correct it?", o: ["After that we ate fish and chips.", "After that we eat fish and chips.", "After that we have ate fish and chips.", "After that we will eat fish and chips."], a: 0,
            e: "It happened last Sunday – a finished time in the past: ate (simple past)." }
        ] },
      { art: "offen", id: "ps", m7: true, tag: "Challenge", titel: "Write a PS", lead: "Write a PS for your email with one more plan. <span class=\"de\">Schreibe ein PS mit einem weiteren Plan.</span>",
        fragen: [{ q: "PS: …", m: "PS: Next month I will go camping with my host brother. If we see a koala, I will send you a photo!", k: ["will", "PS|next|camping|photo|plan|visit|go"], min: 6 }],
        tipp: "Start like this: PS: Next month I will … " }
    ] },
    { kurz: "Check", ober: "6 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Steps and parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The steps of writing: ", { g: "plan" }, " – write – check – ", { g: "revise" }, " – submit."],
          ["At the beginning of an email you write a ", { g: "greeting" }, ", for example: Hi Ben,"],
          ["At the end you write a ", { g: "closing" }, " and your ", { g: "name" }, "."]
        ], extra: ["address", "price"] }
    ] }
  ],
  weiter: { text: "Well done! You can plan, write and revise a personal email. Next: Quali-Fit – try the six parts of the exam in a small version." }
});