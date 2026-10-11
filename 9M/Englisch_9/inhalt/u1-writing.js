/* Englisch 9M · Unit 1 Around Australia · Writing: An email from Down Under · M-Fassung
   (persönliche E-Mail schreiben: Aufbau und Wendungen kennen, Satzverknüpfungen und Grammatik der Unit im Schreiben – simple past,
   will-future, if-Sätze Typ I –, dann planen, schreiben, prüfen, überarbeiten, abgeben: PLAN – WRITE – CHECK – REVISE – SUBMIT)
   LehrplanPLUS E9 2.1 Schreiben (persönliche Korrespondenz mit Anrede, Gruß und Name; M-Zug: etwa 130–150 Wörter), E9 3 (Texte
   planen und überarbeiten), E9 5 (Australien: Alltag, Schüleraustausch).
   Text: „An email from Tarrawong“ (texte/u1/writing-email-tarrawong-m.js) – Stadt und Personen sind erfunden. */
D7Kit.seite({
  id: "u1-writing",
  titel: "Writing: An email from Down Under",
  einleitung: "You spend a school year in Australia and write to a friend at home. First you look at a rich email and learn useful phrases and linking words. Then you plan, write, check and revise a longer email of your own – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["✉️ I know the parts of an informal email.", "🔗 I connect my sentences with because, although, so and while.", "⏳ I use the simple past, will and if-sentences in my text.", "📝 I plan, write, check and revise a longer email."],
  quiz: { profi: "Writing pro" },
  glossar: {
    greeting: ["greeting", "Die Anrede am Anfang, zum Beispiel „Hi Tom,“ – in einer E-Mail an einen Freund mit Komma."],
    closing: ["closing", "Der Gruß am Schluss, zum Beispiel „See you soon,“ oder „Take care,“. Danach steht dein Name."],
    informal: ["informal", "Persönlich, locker: an Freunde schreibst du informal (Hi, Thanks, I'm). An Behörden schreibst du formal (Dear Sir or Madam)."],
    host: ["exchange student", "Austauschschülerin oder Austauschschüler. Sie oder er wohnt meist in einer Gastfamilie (host family)."],
    revise: ["to revise", "Überarbeiten: den eigenen Text noch einmal lesen und verbessern."],
    linking: ["linking word", "Ein Verbindungswort wie because, although, so oder while. Es verbindet Sätze und macht den Text flüssig."]
  },
  haupttext: "u1-write-email-m",
  stationen: [
    { kurz: "Model", ober: "1 · What makes a good email?", titel: "Look at a good email", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What can you see? What do you think the student writes about?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-exchange-email.jpg\" alt=\"An exchange student writes an email on a laptop on the veranda of a host family's house in a small Australian town.\" style=\"width:100%;border-radius:14px\"></figure><p>Where is the student? Why do you think he is smiling?</p>" },
      { art: "text", html: "<p class=\"lead\">Hana is an <button class=\"term\" data-t=\"host\">exchange</button> student in Australia. She writes to her friend Ben at home. Read her email and think about <i>why</i> things happen. The town of Tarrawong and the people are invented.</p>" },
      { art: "lesetext", lesetext: "u1-write-email-m" },
      { art: "mc", id: "wer", tag: "Understanding", titel: "Read between the lines", lead: "Tick the correct answer.",
        fragen: [
          { q: "Why does Hana say sorry at the beginning?", o: ["She answered Ben's email late.", "She lost Ben's photos.", "She did not like Ben's photos.", "She forgot Ben's birthday."], a: 0,
            e: "She says she didn't write earlier because last week was so busy." },
          { q: "What does \"It was scary but absolutely amazing!\" show?", o: ["Hana was a little afraid, but she enjoyed it a lot.", "Hana did not enjoy the bike park.", "Hana was bored and wanted to go home.", "Hana was angry with her host family."], a: 0,
            e: "\"But\" connects two feelings: fear and joy. The second one is stronger." },
          { q: "Why did the family go home early?", o: ["It started to rain and everybody was wet.", "Hana hurt herself when she fell.", "The picnic was over.", "Hana's host brother laughed at her."], a: 0,
            e: "The text says: Suddenly it started to rain, so we all got very wet and went home early." }
        ] },
      { art: "tf", id: "wahr", tag: "True or false?", titel: "Careful reading", lead: "Some statements are almost right – read carefully.",
        aussagen: [
          ["Hana answered Ben's email immediately.", false],
          ["Hana found the bike park both frightening and great.", true],
          ["Hana is sure that the swimming course will be easy.", false]
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the email?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-write-email-m",
        fragen: [
          { q: "Where is the greeting?", zeilen: [1, 1], e: "The greeting is the first line: Hi Ben,", tipp: "Look at the very beginning." },
          { q: "Where does Hana give the reason for not writing earlier?", zeilen: [3, 4], e: "She says that last week was so busy that she fell into bed every night.", tipp: "Look for sorry." },
          { q: "Where does Hana tell the story of Saturday?", zeilen: [5, 12], e: "The main part tells the story: bike park, picnic, rain.", tipp: "Look for the words On Saturday." },
          { q: "Where does she write about her plans?", zeilen: [13, 16], e: "She uses will and an if-sentence for next week.", tipp: "Look for Next week." }
        ] },
      { art: "ordnen", id: "teile", tag: "Order", titel: "The parts of an email", lead: "Put the parts in the right order. <span class=\"de\">Bringe die Teile einer E-Mail in die richtige Reihenfolge.</span>",
        schritte: ["greeting (Hi Ben,)", "thanks and excuse (Thanks for your email. Sorry that …)", "main part (what happened)", "plans (Next week I will …)", "request (Write back soon …)", "closing (Take care,)", "your name (Hana)"] }
    ] },
    { kurz: "Phrases", ober: "2 · Useful phrases", titel: "Words for the start and the end", teile: [
      { art: "merke", kopf: "EMAIL TIP", html: "<p>An email to a friend is <b>informal</b>: friendly words and contractions (<i>I'm, didn't</i>). Always write a <button class=\"term\" data-t=\"greeting\">greeting</button> at the beginning and a <button class=\"term\" data-t=\"closing\">closing</button> and your name at the end. Use <b>paragraphs</b>: one for the opening, one for each topic, one for the end.</p>" },
      { art: "sort", id: "wendungen", tag: "Sort", titel: "Greeting, opening or closing?", lead: "Put the phrases into the right box.",
        buckets: ["Greeting", "Opening sentence", "Closing"],
        items: [{ t: "Hi Tom,", b: 0 }, { t: "Hello Sara,", b: 0 }, { t: "Hi Jo,", b: 0 }, { t: "I hope you're well.", b: 1 }, { t: "Thanks for your email – it made my day!", b: 1 },
                { t: "Sorry that I didn't write earlier.", b: 1 }, { t: "See you soon,", b: 2 }, { t: "All the best,", b: 2 }, { t: "Write back soon!", b: 2 }] },
      { art: "paare", id: "paare", tag: "Match", titel: "German – English", lead: "Find the pairs. <span class=\"de\">Verbinde die deutsche Wendung mit der englischen.</span>",
        paare: [["Danke für deine E-Mail.", "Thanks for your email."], ["Entschuldige, dass ich nicht früher geschrieben habe.", "Sorry that I didn't write earlier."], ["Schreib bald zurück!", "Write back soon!"], ["Bis bald,", "See you soon,"], ["Pass auf dich auf,", "Take care,"], ["Ich hoffe, es geht dir gut.", "I hope you're well."], ["Erzähl mir von deiner Woche!", "Tell me about your week!"], ["Alles Gute,", "All the best,"]] },
      { art: "mc", id: "formell", tag: "Formal or informal?", titel: "Which phrase fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which sentence is too formal for an email to a friend?", o: ["I am writing to inform you of my arrival.", "I can't wait to see you!", "Thanks for the photos!", "Sorry I'm late with my answer."], a: 0,
            e: "Between friends you do not write like an office. Short, friendly sentences are better." },
        ] },
      { art: "offen", id: "formal", m7: true, tag: "Explain", titel: "Friendly or formal?", lead: "Explain in your own words: Why do you write \"Hi Ben\" and \"Take care\" to a friend, but \"Dear Sir or Madam\" and \"Yours faithfully\" to an office? Use a <i>because</i>-sentence.",
        fragen: [{ q: "I write … because …", m: "I write Hi and Take care to a friend because it is friendly and informal. Dear Sir or Madam is formal, so I use it for an office.", k: ["friend", "formal|informal|polite|friendly"], min: 2 }],
        tipp: "Think about who reads your text." }
    ] },
    { kurz: "Language", ober: "3 · Language check", titel: "Grammar and linking words", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>simple past</b> – what you did: I <u>fell</u> off my bike. We <u>went</u> to the beach. (irregular verbs!)</li><li><b>will-future</b> – plans and ideas: I <u>will start</u> a course.</li><li><b>if-sentence</b> – <u>If</u> it <u>is</u> sunny, we <u>will go</u> out. (No <i>will</i> after <i>if</i>.)</li><li><b><button class=\"term\" data-t=\"linking\">linking words</button></b> – <i>because</i> (Grund), <i>so</i> (Folge), <i>although</i> (Gegensatz), <i>while</i> (gleichzeitig).</li></ul>" },
      { art: "luecke", id: "past", tag: "Gap text", titel: "What happened last week?", lead: "Complete the text with the simple past. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["On Monday our host dad ", { g: "took" }, " us to a market."],
          ["I ", { g: "bought" }, " a hat because the sun ", { g: "was" }, " very strong."],
          ["My host sister ", { g: "ate" }, " an ice cream, and later we ", { g: "saw" }, " a big spider on the wall, so I ", { g: "ran" }, " out of the room!"]
        ], extra: ["goed", "buyed"] },
      { art: "luecke", id: "will", tag: "Gap text", titel: "What will you do next?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will.</span>",
        absaetze: [
          ["Next week I ", { g: "will visit" }, " a farm."],
          ["If the weather ", { g: "is" }, " bad, we ", { g: "will watch" }, " a film at home."],
          ["If I ", { g: "have" }, " time, I ", { g: "will write" }, " you a long email."]
        ], extra: ["will be", "visited"] },
      { art: "markieren", id: "verbindung", tag: "Mark", titel: "Find the linking words", finde: "the five linking words", toleranz: 0,
        satz: "[[Although]] it was cold, we went swimming [[because]] our host dad said the water was warm. [[Afterwards]] we had hot chocolate, [[so]] we felt better [[while]] we watched the sunset.",
        e: "Linking words (although, because, afterwards, so, while) connect sentences and make your text easy to read." },
      { art: "mc", id: "link", tag: "Linking words", titel: "Which word fits?", lead: "Tick the best linking word.",
        fragen: [
          { q: "I was tired, ___ I went to bed early.", o: ["so", "although", "while", "because"], a: 0, e: "The second part is the result of the first part, so you need a word for a result." },
          { q: "We stayed at home ___ it was raining heavily.", o: ["because", "so", "although", "but"], a: 0, e: "The rain is the reason for staying at home." },
          { q: "___ the film was very long, I enjoyed every minute.", o: ["Although", "Because", "So", "Then"], a: 0, e: "A very long film could be boring, but the writer enjoyed it – that is a contrast, so you need although." }
        ] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["Although it was raining, we went to the beach.", "Although it was raining, but we went to the beach.", "Although it was raining, so we went to the beach.", "Because it was raining, although we went to the beach."], a: 0,
            e: "Although already shows the contrast, so you do not add but or so." },
          { q: "Which sentence is correct?", o: ["If I see a koala, I will take a photo.", "If I will see a koala, I take a photo.", "If I saw a koala, I will take a photo.", "If I see a koala, I would take a photo."], a: 0,
            e: "After if: simple present. In the main part: will + verb." }
        ] },
      { art: "offen", id: "verbinden", tag: "Write", titel: "Join the sentences", lead: "Join the two sentences into one with <i>because</i> or <i>so</i>: <b>It was raining. We stayed inside.</b>",
        fragen: [{ q: "One sentence: …", m: "It was raining, so we stayed inside.", k: ["so|because", "rain", "inside|home|stayed"], min: 3 }],
        tipp: "Write one sentence with a comma." },
      { art: "offen", id: "deutsch", m7: true, tag: "Mediation", titel: "Auf Deutsch zusammenfassen", lead: "Bens Oma versteht kein Englisch. Fasse Hanas E-Mail für sie auf Deutsch in zwei bis drei Sätzen zusammen: Was hat Hana letzte Woche erlebt, und was plant sie?",
        fragen: [{ q: "Zusammenfassung auf Deutsch:", m: "Hana war am Samstag mit ihrer Gastfamilie in einem Fahrradpark. Sie ist zweimal gestürzt, fand es aber toll – nur beim Picknick fing es an zu regnen. Nächste Woche beginnt sie einen Schwimmkurs, und wenn es am Sonntag sonnig ist, fährt die Familie an den Strand.", k: ["Fahrradpark|Fahrrad|Bike", "Regen|regnen|nass", "Schwimm|Strand"], min: 3 }],
        tipp: "Du musst nicht jeden Satz übersetzen – wichtig sind die Hauptinformationen." }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your email from Down Under", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "Your email from Down Under",
        plan: [
          { id: "greeting", label: "Greeting, thanks and a reason why you didn't write earlier", hilfe: "Stichpunkte reichen", zeilen: 2 },
          { id: "where", label: "Where are you? Who are you with?", hilfe: "Stichpunkte reichen", zeilen: 2 },
          { id: "past", label: "What did you do last week? (simple past, time words)", hilfe: "2–3 Dinge", zeilen: 3 },
          { id: "feel", label: "How was it – and why? (because, although)", hilfe: "Gefühl und Grund", zeilen: 2 },
          { id: "plans", label: "What will you do next? (will, one if-sentence)", hilfe: "ein Plan, ein if-Satz", zeilen: 2 },
          { id: "closing", label: "A question to your friend, closing and your name", hilfe: "Stichpunkte reichen", zeilen: 1 }
        ],
        auftrag: {
          R: "<p>You are an exchange student in an Australian city (invent a name). Write an email to a friend at home (about 80–100 words).</p><ul><li>Tell your friend what you did last week.</li><li>Say how it was.</li><li>Write about one plan for next week and one if-sentence.</li></ul><p><span class=\"de\">Du machst einen Schüleraustausch in Australien (erfinde eine Stadt). Schreibe deiner Freundin oder deinem Freund zu Hause: was du letzte Woche erlebt hast, wie es war, was du nächste Woche vorhast – dazu ein if-Satz.</span></p>",
          M: "<p>You are an exchange student in an Australian town (invent a name). Write an email of about 130–150 words to a friend at home. Use paragraphs and include these six points:</p><ol><li>greeting, thanks and a reason why you didn't write earlier</li><li>where you are and who you live with</li><li>two or three things you did last week (simple past, with time words)</li><li>how it was – and why (use <i>because</i> or <i>although</i>)</li><li>one plan with <i>will</i> and one if-sentence</li><li>a question to your friend, a closing and your name</li></ol><p><span class=\"de\">Du machst einen Schüleraustausch in Australien. Schreibe in Absätzen und verwende mindestens vier verschiedene Verbindungswörter.</span></p>"
        },
        min: { R: 80, M: 130 },
        kriterien: {
          R: ["Greeting, closing and name are there.", "I tell what I did – in the simple past.", "I say how it was.", "I write about a plan with will or an if-sentence.", "I use linking words (first, then, because, but)."],
          M: ["Greeting, closing and name are there, and my email has paragraphs.", "I give a reason why I didn't write earlier.", "I tell what I did – in the simple past, with time words.", "I say how it was and why, using because or although.", "I use at least four different linking words (because, although, so, while, then …).", "I write about a plan with will and one correct if-sentence.", "I ask my friend a question."]
        },
        starter: ["Hi …,", "Last week I …", "Although …,", "It was … because …", "If the weather is good, …"] }
    ] },
    { kurz: "Revise", ober: "5 · Check and revise", titel: "Make your text better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check a text", lead: "True or false?",
        aussagen: [
          ["A good way to check: read your text aloud.", true],
          ["Linking words like although and because make a text easier to read.", true],
          ["After if in a type I sentence you use will.", false]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler.</span></p><blockquote>Last Sunday we <b>go</b> to a lake with our neighbours. It was cold, <b>although</b> we didn't swim. Then we had sandwiches and played volleyball. <b>If it will be</b> warm next week, we will go again.</blockquote><p class=\"de\">Die drei fett gedruckten Stellen stimmen nicht.</p>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Last Sunday we go to a lake … How do you correct the verb?", o: ["Last Sunday we went to a lake with our neighbours.", "Last Sunday we goed to a lake with our neighbours.", "Last Sunday we have gone to a lake with our neighbours.", "Last Sunday we will go to a lake with our neighbours."], a: 0,
            e: "Last Sunday is past time: went." },
          { q: "It was cold, although we didn't swim. How do you correct it?", o: ["It was cold, so we didn't swim.", "It was cold, although we swam.", "It was cold, while we didn't swim.", "It was cold, because we didn't swim."], a: 0,
            e: "The cold weather is the reason, and not swimming is the result – so fits." },
          { q: "If it will be warm next week … How do you correct it?", o: ["If it is warm next week, we will go again.", "If it will be warm next week, we go again.", "If it would be warm next week, we will go again.", "If it was warm next week, we will go again."], a: 0,
            e: "After if: simple present (is), in the main part: will go." }
        ] },
      { art: "offen", id: "ps", m7: true, tag: "Challenge", titel: "Write a PS", lead: "Write a PS for your email with one more plan and a reason. <span class=\"de\">Schreibe ein PS mit einem weiteren Plan und einem Grund.</span>",
        fragen: [{ q: "PS: …", m: "PS: Next month I will go camping with my host brother because we both love nature. If we see a koala, I will send you a photo!", k: ["will", "PS|next|camping|photo|plan|visit|go"], min: 2 }],
        tipp: "Start like this: PS: Next month I will … " },
      { art: "offen", id: "meinung", m7: true, tag: "Opinion", titel: "Email or phone call?", lead: "Do you prefer to write an email or to call a friend from abroad? Give two reasons.",
        fragen: [{ q: "I prefer … because …", m: "I prefer writing an email because I can think about my words. Also, I can add photos, and my friend can read it when he has time.", k: ["because|as|since|also|and", "email|call|phone|write|talk"], min: 2 }],
        tipp: "Use because and also (or and) to give two reasons." }
    ] },
    { kurz: "Check", ober: "6 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Steps and parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The steps of writing: ", { g: "plan" }, " – write – check – ", { g: "revise" }, " – submit."],
          ["At the beginning of an email you write a ", { g: "greeting" }, ", for example: Hi Ben,"],
          ["At the end you write a ", { g: "closing" }, " and your ", { g: "name" }, "."],
          ["Words like because, so and although are ", { g: "linking" }, " words."]
        ], extra: ["stamp", "price"] }
    ] }
  ],
  weiter: { text: "Well done! You can plan, write and revise a longer personal email with linking words, plans and if-sentences." }
});
