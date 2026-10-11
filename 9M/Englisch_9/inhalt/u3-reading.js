/* Englisch 9M · Unit 3 Discover South Africa · Reading: A day in a young life · M-Fassung
   (einen Tagebucheintrag verstehen: Thema erfassen, Einzelheiten finden und mit Zeilen belegen, Gefühle und einen inneren Konflikt
   erschließen, eine Stelle mit zwei Deutungen begründet entscheiden, auf Deutsch zusammenfassen, Sprache im Text – past progressive
   mit while/when und present perfect mit for/since, die Grammatik der Unit)
   LehrplanPLUS E9 1.1 Leseverstehen (längere Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit inhaltlichen und
   sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Südafrika: Leben junger Menschen),
   Sprachmittlung (Zusammenfassung auf Deutsch).
   Text: „Zanele's Thursday“ (texte/u3/reading-zanele-day-m.js) – Person, Familie, Nachbarin und Lehrer sind erfunden. */
D7Kit.seite({
  id: "u3-reading",
  titel: "Reading: A day in a young life",
  einleitung: "A school day, a neighbour who needs help, a workshop that could change everything – and a family that needs her too: you read the diary entry of a girl from South Africa. You find out what it is about, look for details and show <b>where</b> in the text you found them – and you work out what Zanele feels, although she never says it directly.",
  zeit: "etwa 45 Minuten",
  ziele: ["📖 I understand a longer diary entry.", "🔎 I find details and name the lines.", "💭 I read between the lines and decide with evidence.", "✍️ I give advice and explain the text in my own words.", "🧩 I spot the grammar of Unit 3 in a real text."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einem Namen oder einer Zahl."],
    inference: ["reading between the lines", "Etwas verstehen, das nicht wörtlich im Text steht, zum Beispiel ein Gefühl oder einen Grund, den man aus dem erschließt, was jemand sagt und tut."],
    diary: ["diary", "In einem Tagebuch schreibt man abends auf, was am Tag passiert ist und was man dabei denkt und fühlt."],
    gogo: ["Gogo", "In mehreren Sprachen im südlichen Afrika, zum Beispiel isiZulu, ist „Gogo“ ein liebevolles Wort für Großmutter."],
    workshop: ["workshop", "Ein Workshop ist ein Kurs, bei dem man selbst etwas ausprobiert und baut, statt nur zuzuhören."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u3-read-zanele-m",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. Who can you see? What is the girl doing? What does your evening look like?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u3-zanele.jpg\" alt=\"In a warm kitchen in the evening, a schoolgirl does her homework at the table while her grandmother cooks at the stove and her little brother lays the table.\" style=\"width:100%;border-radius:14px\"></figure><p>Talk to a partner or write two sentences about the picture. Then read on.</p>" },
      { art: "text", html: "<p class=\"lead\">What does a normal day look like for a young person – and what happens when a big chance comes along? In this module you read a <button class=\"term\" data-t=\"diary\">diary</button> entry by <b>Zanele</b>, a girl who lives in a city in South Africa. Her grandmother, <button class=\"term\" data-t=\"gogo\">Gogo</button>, lives with the family.</p><p>Zanele, her family, her neighbour and her teacher are invented. Her day could be the day of many young people.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["workshop", "Kurs zum Ausprobieren"], ["application", "Bewerbung"], ["to hand in", "abgeben"], ["to look after", "sich kümmern um"], ["to stay behind", "hierbleiben"], ["calm", "ruhig"], ["to shake", "zittern"], ["extra", "zusätzlich"], ["fridge", "Kühlschrank"], ["honestly", "ehrlich gesagt"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a name or a number.<br><b><button class=\"term\" data-t=\"inference\">Reading between the lines</button></b> – ask: What does the writer feel? Why does she do or say this?</p><p>In a diary, feelings are often <b>not</b> written down. You see them in what the writer does.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the diary entry once. Don't stop at words you don't know. <span class=\"de\">Lies den Eintrag einmal ganz durch.</span></p>" },
      { art: "lesetext", lesetext: "u3-read-zanele-m" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the main problem in the diary entry?", o: ["Zanele has a big chance, but she is not sure how to find the time for it.", "Zanele has lost her homework.", "Zanele argues with her teacher about maths.", "Zanele's neighbour wants to move away."], a: 0,
            e: "The workshop is a chance for her, but she also looks after her brother and helps at home and next door. The end of the text shows that she cannot decide." },
          { q: "Who suggests the workshop to Zanele?", o: ["Her teacher, Mr Khumalo", "Her grandmother", "Aunt Nomsa", "Her little brother"], a: 0,
            e: "Mr Khumalo tells her about the workshop and says that she should try." },
          { q: "How does Zanele feel at the end of the day?", o: ["She is torn: she wants to go, but she is worried about her duties.", "She is bored and sleepy.", "She is angry with everybody at home.", "She has already made her decision and feels sure."], a: 0,
            e: "She writes \"I still do not know what I feel\" and \"Or perhaps I will not\". She is torn between her dream and her duties." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Bongani carried Zanele's bag to school.", "Zanele drew a small picture in maths.", "Zanele ate her sandwich alone.", "Zanele read the newspaper to Aunt Nomsa.", "Zanele told her family about the workshop."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. Some sentences are almost right! <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Bongani is older than Zanele.", false],
          ["Mr Khumalo has taught maths at the school for twelve years.", true],
          ["The workshop takes place on Saturday afternoons.", false],
          ["Aunt Nomsa has lived next door for twelve years.", false],
          ["Aunt Nomsa asked Zanele what was wrong.", true],
          ["Zanele has already decided to take part in the workshop.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">In einer Prüfung schreibst du dann zum Beispiel: (ll. 6–8).</span>", lesetext: "u3-read-zanele-m",
        fragen: [
          { q: "How did Bongani show that he cares about his sister?", zeilen: [7, 8], e: "He carried her bag as well as his own and told her what Gogo had said.", tipp: "Look at the end of the first paragraph." },
          { q: "What must every student hand in for the workshop?", zeilen: [19, 20], e: "Every student has to hand in a model of a small bridge before applications close.", tipp: "Look for the words hand in." },
          { q: "Why did Zanele eat her sandwich alone?", zeilen: [23, 24], e: "She did not feel like talking.", tipp: "Look at the end of the third paragraph." },
          { q: "What shows that Gogo has kept Zanele's old drawing for a long time?", zeilen: [41, 44], e: "The picture of the bridge has hung on the fridge since Zanele was seven, and Gogo has never taken it down.", tipp: "Look for the word fridge." }
        ] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence.",
        fragen: [
          { q: "Bongani says: \"Gogo says you look tired.\" He does not look at Zanele. What does this show?", o: ["He has noticed that something is wrong and is worried, but he is too shy to say so himself.", "He is angry because he has to carry two bags.", "He wants to leave for school faster.", "He is bored of walking with his sister."], a: 0,
            e: "He carries her bag, repeats what Gogo said and looks away. That shows care and shyness, not anger." },
          { q: "Zanele ate her sandwich alone \"because I did not feel like talking\". What does this show?", o: ["Mr Khumalo's news has made her thoughtful and a little nervous.", "She does not like her friends any more.", "She forgot to bring a sandwich.", "She was angry with the maths problem."], a: 0,
            e: "The talk with Mr Khumalo comes just before this. Her shaking hands and her silence show that the news is on her mind." },
          { q: "Zanele writes about her list: \"I looked at it for ten minutes.\" What does this show?", o: ["She cannot see how to fit the workshop into her week.", "She is happy because the list is finished.", "She wants to throw the list away.", "The list is too long to read."], a: 0,
            e: "The list shows all her duties. Looking at it for ten minutes means that she is searching for a solution and does not find one." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why is it difficult for Zanele to go to the workshop? Give two reasons from the text.", m: "On Saturdays she looks after her brother while her mum is at work. She would also have to build the model in the evenings, when she reads with Bongani and helps in the kitchen.", k: ["Saturday|Saturdays|brother|Bongani|look after|looks after", "evening|evenings|model|kitchen|homework|time"], min: 2 }],
        tipp: "Look at the last paragraph. Start like this: First, … Second, …" },
      { art: "offen", id: "gogo", tag: "Two readings", titel: "What does Gogo mean?", lead: "Gogo says: \"A bridge is a fine thing, but somebody has to cook for the people who cross it.\" Zanele writes: \"I do not know whether she was joking.\" <b>Decide</b>: Is Gogo joking, warning Zanele – or both? Give <b>one piece of evidence</b> from ll. 36–44.",
        fragen: [{ q: "What do you think Gogo means? Explain with evidence from the text.", m: "I think Gogo is joking, but she is also a little worried. She laughed and put an extra spoon of sugar in Zanele's tea, and she has kept the picture of the bridge on the fridge for years. Mum looked at Gogo, so the family may have the same worry.", k: ["joke|joking|warn|warning|worried|worry|both|proud|support", "fridge|sugar|laughed|laugh|picture|drawing|Mum|looked"], min: 2 }],
        tipp: "There is no single right answer, but your idea needs proof. Start like this: I think Gogo … because …" },
      { art: "offen", id: "rat", m7: true, tag: "Your opinion", titel: "Advice for Zanele", lead: "What should Zanele do? Give her advice with <b>two reasons</b>.",
        fragen: [{ q: "What should Zanele do about the workshop? Why?", m: "I think Zanele should talk to her mum and apply for the workshop, because it is a big chance. Also, her family may find a way to help her with Bongani on Saturdays.", k: ["should|could|advice|think|would", "because|reason|also|first|second"], min: 2 }],
        tipp: "Use: I think she should … because … Also, … Think about Mum, Gogo and Bongani." },
      { art: "offen", id: "eigene-saetze", m7: true, tag: "Your life", titel: "Yesterday at your place", lead: "Write two sentences in English about yesterday. Use <b>while</b> or <b>when</b> and <b>was / were + -ing</b>.",
        fragen: [{ q: "What were you and your family or friends doing at the same time yesterday? Write two sentences.", m: "Yesterday, while I was doing my homework, my brother was playing outside. When the phone rang, we were eating.", k: ["while|when", "was|were"], min: 2 }],
        tipp: "Think of two things that happened at the same time." },
      { art: "offen", id: "mit-mama", m7: true, tag: "Write", titel: "Zanele talks to Mum", lead: "Tomorrow Zanele talks to her mum. Write <b>three sentences</b> of what she could say. Use the present perfect with <b>for</b> or <b>since</b> once.",
        fragen: [{ q: "Write what Zanele says to her mum.", m: "Mum, I have wanted to become an engineer since I was small. Mr Khumalo thinks that I should try the workshop. Can we talk about Saturdays?", k: ["have|has", "since|for", "workshop|engineer|Saturday|Saturdays|model|bridge"], min: 3 }],
        tipp: "Start with: Mum, I have … since / for … Then say what you need." },
      { art: "offen", id: "deutsch", m7: true, tag: "In German", titel: "Tell it in German", lead: "Your cousin does not speak English. Tell her in <b>German</b> (2 or 3 sentences): What is Zanele's problem?",
        fragen: [{ q: "Fasse den Tagebucheintrag auf Deutsch zusammen.", m: "Zanele könnte sich für einen Bau-Workshop an einer technischen Schule bewerben. Aber an den Samstagen muss sie auf ihren kleinen Bruder aufpassen, und abends hilft sie zu Hause. Sie weiß noch nicht, was sie tun soll.", k: ["Kurs|Workshop|Bewerbung|bewerben", "Bruder|Samstag|Samstage|abends|zu Hause|Familie"], min: 2 }],
        tipp: "Nenne das Wichtigste: Wer? Was ist die Chance? Was spricht dagegen? Übersetze nicht Satz für Satz." }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 3 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The diary entry uses two things from Unit 3:</p><ul><li><b>past progressive</b> (<i>was / were + -ing</i>) – what was going on at a certain time in the past: <u>While</u> we <u>were walking</u> past the shop, the owner waved. <u>When</u> I came in, she <u>was making</u> tea. The long action uses the past progressive, the short action (or the new one) uses the simple past.</li><li><b>present perfect</b> (<i>have / has + past participle</i>) – something began in the past and is still true now: She <u>has lived</u> there <b>for</b> twenty years (how long). He <u>has been</u> in Grade 4 <b>since</b> January (starting point).</li></ul><p>Remember: <i>for</i> + a length of time, <i>since</i> + a starting point.</p>" },
      { art: "sort", id: "saetze", tag: "Sort", titel: "Which tense is it?", lead: "Put the sentences into the right box.",
        buckets: ["Past progressive", "Simple past", "Present perfect"],
        items: [{ t: "Gogo was cooking.", b: 0 }, { t: "Bongani was laying the table.", b: 0 }, { t: "My hands were shaking.", b: 0 },
                { t: "Mr Khumalo asked me to stay behind.", b: 1 }, { t: "I wrote her shopping list.", b: 1 }, { t: "Gogo put sugar in my tea.", b: 1 },
                { t: "He has taught maths for twelve years.", b: 2 }, { t: "The picture has hung there since then.", b: 2 }, { t: "I have wanted to be an engineer since I was small.", b: 2 }] },
      { art: "markieren", id: "pp-satz", tag: "Mark", titel: "Find the two actions", finde: "the short action (simple past) and the longer action (past progressive)", toleranz: 0,
        satz: "When I [[came in]], Aunt Nomsa [[was making]] tea.",
        e: "was making is was + -ing: the longer action that was already going on. came in is the simple past: the short action that happened in the middle." },
      { art: "markieren", id: "pf-satz", tag: "Mark", titel: "Find the starting point", finde: "the words that say when it began", toleranz: 0,
        satz: "Bongani has been in Grade 4 [[since January]].",
        e: "Since January names a starting point. For goes with a length of time: for three months." },
      { art: "luecke", id: "grammatik-luecke", tag: "Gap text", titel: "Past progressive, for and since", lead: "Complete the sentences. Two forms are left over.",
        absaetze: [
          ["When Zanele came in, Aunt Nomsa ", { g: "was making" }, " tea."],
          ["While the others ", { g: "were counting" }, ", Zanele drew a picture."],
          ["Zanele ", { g: "has wanted" }, " to be an engineer ", { g: "since" }, " she was small."]
        ], extra: ["were making", "have wanted"] },
      { art: "offen", id: "satzbau", tag: "Rewrite", titel: "Build the sentences", lead: "Write one sentence for each task.",
        fragen: [
          { q: "Join the two sentences with while: Zanele packed her bag. – Her hands shook.", m: "While Zanele was packing her bag, her hands were shaking.", k: ["while", "was packing", "were shaking"], min: 3 },
          { q: "Write two sentences with the present perfect: Aunt Nomsa / live next door / twenty years – Bongani / be in Grade 4 / January. Then explain in German why you chose for or since.", m: "Aunt Nomsa has lived next door for twenty years. Bongani has been in Grade 4 since January. Bei for steht eine Zeitspanne, bei since ein Anfangszeitpunkt.", k: ["has lived|have lived", "has been|have been", "for", "since"], min: 3 }
        ], tipp: "while + was / were + -ing. for + length of time, since + starting point." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The diary entry in three sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Zanele's maths teacher tells her about a building ", { g: "workshop" }, " at a technical college."],
          ["She would like to go, but on Saturdays she looks after her little ", { g: "brother" }, "."],
          ["Her family does not say clearly what they think, so she is not ", { g: "sure" }, " what to do."]
        ], extra: ["holiday", "shop"] }
    ] }
  ],
  weiter: { text: "Well done! You can find information in a longer text, say where it is, read between the lines and decide with evidence. Keep reading and keep asking: What does a day in a young life look like – and what are the dreams and duties behind it?" }
});
