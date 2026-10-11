/* Englisch 9M · Unit 1 Around Australia · Reading: A beach day with a plan · M-Fassung
   (einen längeren Text über ein Umweltproblem verstehen: Thema erfassen, Einzelheiten finden und mit Zeilen belegen, Schlüsse
   ziehen, eigene Meinung begründen, auf Deutsch zusammenfassen, Sprache im Text – simple past, will-future und if-Sätze Typ I)
   LehrplanPLUS E9 1.1 Leseverstehen (längere sachliche Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit
   inhaltlichen und sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Australien:
   Natur, Umwelt, nachhaltiges Handeln), Sprachmittlung (Zusammenfassung auf Deutsch).
   Text: „A beach day with a plan“ (texte/u1/reading-clean-up-day-m.js) – Ort, Schule und Personen sind erfunden. */
D7Kit.seite({
  id: "u1-reading",
  titel: "Reading: A beach day with a plan",
  einleitung: "Forty students, one beach and 186 kilograms of rubbish: You read a longer article from an Australian school magazine. You find out what it is about, look for details and show <b>where</b> in the text you found them – and you work out what the people feel and want, although the text does not say it directly.",
  zeit: "etwa 45 Minuten",
  ziele: ["📰 I understand a longer article and its message.", "🔎 I find details and name the lines.", "💭 I draw conclusions from what people say and do.", "✍️ I give my opinion and explain the text in my own words.", "🧩 I spot the grammar of Unit 1 in a real text."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einer Zahl oder einem Namen."],
    inference: ["reading between the lines", "Etwas verstehen, das nicht wörtlich im Text steht, zum Beispiel ein Gefühl oder einen Grund, den man aus den Aussagen der Personen erschließt."],
    rubbish: ["rubbish", "Müll, Abfall (britisches und australisches Englisch; in den USA sagt man eher „trash“ oder „garbage“)."],
    council: ["town council", "Der Stadtrat entscheidet, was in einer Stadt erlaubt ist und wofür Geld ausgegeben wird."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u1-read-cleanup-m",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What can you see? What do you think the people are doing, and why?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-beach-cleanup.jpg\" alt=\"Volunteers with gloves collect plastic bottles and old fishing nets on a sunny beach and put them into big bags; two young people carry a full bag together and laugh.\" style=\"width:100%;border-radius:14px\"></figure><p>Talk to a partner or write two sentences. Then read on.</p>" },
      { art: "text", html: "<p class=\"lead\">Australia has more than 10,000 beaches – and many of them have the same problem: <button class=\"term\" data-t=\"rubbish\">rubbish</button>. In this module you read how students in a small town did something about it.</p><p>The town <b>Wattle Bay</b>, the school and the people are invented. The problem is real.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["permission", "Erlaubnis"], ["scale", "Waage"], ["shallow", "flach (Wasser)"], ["to digest", "verdauen"], ["elderly", "älter, betagt"], ["to sign up", "sich anmelden"], ["long-term", "langfristig"], ["certain", "sicher, überzeugt"], ["to borrow", "ausleihen"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a number or a name.<br><b><button class=\"term\" data-t=\"inference\">Reading between the lines</button></b> – ask: What does the person feel? Why does he or she say or do this?</p><p>You do <b>not</b> need to know every word.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the article once. Don't stop at words you don't know. <span class=\"de\">Lies den Artikel einmal ganz durch.</span></p>" },
      { art: "lesetext", lesetext: "u1-read-cleanup-m" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the article about?", o: ["Students clean a beach and realise that they need a long-term plan.", "A school wins a surfing competition.", "Tourists complain about a dirty town.", "A teacher finds a rare seabird."], a: 0,
            e: "The text reports on the clean-up day and ends with the students' plans for the future." },
          { q: "Who had the idea for the clean-up day?", o: ["Mia, a Year 9 student", "Mr Okafor, the science teacher", "Jack and his friends", "The owner of the café"], a: 0,
            e: "The idea came from Mia. Her teacher only helped her to plan the day." },
          { q: "Where would you read a text like this?", o: ["in a school magazine", "in a science book", "in a travel guide", "in a letter to a friend"], a: 0,
            e: "It reports on a school event and quotes students – typical for a school magazine." },
          { q: "What is the main message of the last paragraph?", o: ["One clean-up day is not enough; people must keep working on the problem.", "The beach is clean now, so the work is finished.", "Tourists should not come to Wattle Bay.", "The town will pay for a new car park."], a: 0,
            e: "Mia says that the rubbish will come back if the students only clean the beach once." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Mia found a dead seabird near the rocks.", "Mia asked her science teacher for help.", "The date of the clean-up day was changed.", "Forty students met at the beach on Saturday morning.", "The students weighed the rubbish.", "Mia started to plan the next clean-up day."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. Some sentences are almost right! <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The waves were bad on the day of the clean-up.", false],
          ["Mia found the seabird in March.", true],
          ["Mr Okafor was surprised by Mia's idea.", false],
          ["The clean-up day was first planned for a Sunday.", true],
          ["The students collected more than 200 kilograms of rubbish.", false],
          ["Jack joined a team of people he knew well.", false],
          ["The owner of the café said that she would help again.", true],
          ["The town council paid for the scale.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">In einer Prüfung schreibst du dann zum Beispiel: (ll. 6–8).</span>", lesetext: "u1-read-cleanup-m",
        fragen: [
          { q: "What did the students bring to the beach?", zeilen: [3, 4], e: "They brought gloves, buckets and big bags.", tipp: "Look at the beginning of the article." },
          { q: "Why did the students have to change the date?", zeilen: [16, 17], e: "Many students had football matches on the first date.", tipp: "Look at the paragraph about the planning." },
          { q: "How much rubbish did the students collect?", zeilen: [23, 24], e: "They weighed 186 kilograms.", tipp: "Scan the text for a number with kilograms." },
          { q: "Why do sea turtles eat plastic bags?", zeilen: [27, 28], e: "In the water the bags look like jellyfish.", tipp: "Look for the word turtles." },
          { q: "What did the elderly man say about his work on the beach?", zeilen: [38, 39], e: "He had picked up rubbish for years, but nobody ever noticed.", tipp: "Look at the paragraph that begins with \"Not everybody ...\"." },
          { q: "What will the students ask the town for?", zeilen: [44, 44], e: "They will ask for more bins near the car park.", tipp: "Look at the last paragraph: what are the plans?" }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Mia's notes for the school website", lead: "Complete the notes with words from the box. Two words are left over.",
        absaetze: [
          ["Clean-up day at Wattle Bay: ", { g: "forty" }, " students, ", { g: "three" }, " hours of work."],
          ["We found bottles, bags, hundreds of bottle ", { g: "tops" }, " and an old car ", { g: "tyre" }, "."],
          ["Mr Okafor borrowed a ", { g: "scale" }, " from the school. Result: 186 ", { g: "kilograms" }, " of rubbish."],
          ["Turtles eat plastic bags because they look like ", { g: "jellyfish" }, ". Next clean-up day: in ", { g: "November" }, "."]
        ], extra: ["Sunday", "metres"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence.",
        fragen: [
          { q: "The students \"did not go surfing, although the waves were perfect\". What does this show?", o: ["The students gave up something they love for the clean-up day.", "Surfing is not allowed at Wattle Bay.", "The students cannot surf.", "The weather was too dangerous for the sea."], a: 0,
            e: "The word \"although\" shows a contrast: they like surfing, but the beach was more important to them that day." },
          { q: "Mr Okafor \"was not surprised\" by Mia's request. Why not?", o: ["Mia had often talked to him about plastic in the sea.", "He had found the seabird himself.", "He had planned the day before Mia came.", "He does not like her idea."], a: 0,
            e: "He says that she had asked him about plastic for weeks, so he knew how much the problem mattered to her." },
          { q: "Jack says: \"At first I was only there because my friends had signed up.\" What does this show?", o: ["His opinion about the day changed during the day.", "He did not enjoy the day at all.", "He organised the clean-up day with his friends.", "He still wants to stay away from the other students."], a: 0,
            e: "\"At first\" and \"Now\" show a change: he went because of his friends, but he found new friends in his team." },
          { q: "Why does Mia say about the elderly man: \"He is right\"?", o: ["His work had never been noticed, and one single day does not solve the problem.", "He is a member of the town council.", "He thinks that the students should stop.", "He has lost his dog on the beach."], a: 0,
            e: "Mia understands that cleaning once is not enough and that people like the man need support all year." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why is plastic dangerous for sea animals?", m: "Plastic breaks into very small pieces and animals think the pieces are food. They cannot digest plastic, so they may get sick or die.", k: ["food|eat|eats|eating", "digest|sick|ill|die|stomach"], min: 2 }],
        tipp: "Read lines 25 to 30 again. Start like this: Plastic is dangerous because …" },
      { art: "offen", id: "eigene-ideen", m7: true, tag: "Your ideas", titel: "What about your school?", lead: "Write two ideas in English. Use <b>will</b> or an <b>if-sentence</b>.",
        fragen: [{ q: "What could your school do against rubbish? Write two ideas.", m: "We will put more bins in the playground. If every class cleans up once a month, our school will look better.", k: ["will|if", "bin|bins|rubbish|clean|plastic|bottle|bottles|poster|posters"], min: 2 }],
        tipp: "Think of bins, posters, a clean-up day or plastic bottles." },
      { art: "offen", id: "meinung", m7: true, tag: "Your opinion", titel: "Is one day enough?", lead: "Mia says: \"One day is not enough.\" Do you agree? Give <b>two reasons</b>.",
        fragen: [{ q: "Do you agree with Mia? Why (not)?", m: "I agree with Mia because the rubbish comes back when nobody cleans the beach again. Also, people need to learn that plastic is dangerous.", k: ["agree|disagree|think|opinion", "because|reason|also|first|second"], min: 2 }],
        tipp: "Use: I agree / I don't agree because … Also, …" },
      { art: "offen", id: "einladung", m7: true, tag: "Write", titel: "An invitation", lead: "Write 2 or 3 sentences to the elderly man. Invite him to the next clean-up day in November and tell him what the students <b>will</b> do.",
        fragen: [{ q: "Write your invitation.", m: "Dear Sir, we will have another clean-up day in November. We will meet at the beach and we will bring gloves and bags. Please join us!", k: ["will", "november|clean-up|beach|join|invite|come|meet"], min: 2 }],
        tipp: "Start with: Dear Sir, … Use will for the plans." },
      { art: "offen", id: "deutsch", m7: true, tag: "In German", titel: "Tell it in German", lead: "Your cousin does not speak English. Tell her in <b>German</b> (2 or 3 sentences): What did the students do, and why?",
        fragen: [{ q: "Fasse den Artikel auf Deutsch zusammen.", m: "Vierzig Schülerinnen und Schüler einer australischen Schule haben an einem Samstag den Strand von Müll gesäubert, weil Plastik für Meerestiere gefährlich ist. Sie haben 186 Kilogramm Abfall gesammelt und wollen im November einen weiteren Aufräumtag machen.", k: ["Strand|Küste", "Müll|Plastik|Abfall"], min: 2 }],
        tipp: "Nenne das Wichtigste: Wer? Was? Warum? Wie geht es weiter? Übersetze nicht Satz für Satz." }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 1 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The article uses three things from Unit 1:</p><ul><li><b>simple past</b> – what happened: They <u>met</u> at the beach. Mr Okafor <u>borrowed</u> a scale.</li><li><b>will-future</b> – plans and what people expect: We <u>will make</u> posters.</li><li><b>if-sentences (type I)</b> – what will happen if …: <u>If</u> the weather <u>is</u> good, the students <u>will invite</u> their families.</li></ul>" },
      { art: "sort", id: "zeiten", tag: "Sort", titel: "Past or future?", lead: "Put the phrases from the text into the right box.",
        buckets: ["It happened (simple past)", "It will happen (will-future)"],
        items: [{ t: "met at the beach", b: 0 }, { t: "borrowed a scale", b: 0 }, { t: "found an old car tyre", b: 0 }, { t: "weighed everything", b: 0 },
                { t: "will ask the town", b: 1 }, { t: "will make posters", b: 1 }, { t: "will come back", b: 1 }, { t: "will join", b: 1 }] },
      { art: "markieren", id: "if-satz", tag: "Mark", titel: "Find the verbs", finde: "the verb in the if-part and the verb form in the main part", toleranz: 0,
        satz: "If we [[clean]] the beach again, the turtles [[will have]] a safer home.",
        e: "if-part: simple present (clean) – main part: will + verb (will have)." },
      { art: "luecke", id: "if-luecke", tag: "Gap text", titel: "What will happen if …?", lead: "Complete the sentences. Careful: there is no will after if.",
        absaetze: [
          ["If people ", { g: "leave" }, " their rubbish on the beach, the wind ", { g: "will blow" }, " it into the sea."],
          ["If a turtle ", { g: "eats" }, " a plastic bag, it ", { g: "will get" }, " sick."],
          ["If the town ", { g: "puts" }, " more bins near the car park, more people ", { g: "will use" }, " them."]
        ], extra: ["will leave", "ate"] },
      { art: "offen", id: "satzbau", tag: "Rewrite", titel: "Build if-sentences", lead: "Write one sentence for each task.",
        fragen: [
          { q: "Join the ideas with if: tourists / read the posters – they / take their rubbish home", m: "If tourists read the posters, they will take their rubbish home.", k: ["if", "will take|'ll take"], min: 2 },
          { q: "Start with If: More families will come when the students make good posters.", m: "If the students make good posters, more families will come.", k: ["if", "will come|'ll come"], min: 2 }
        ], tipp: "if + simple present, … will + verb." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The article in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Students from an Australian school spent a Saturday morning on the ", { g: "beach" }, "."],
          ["They collected a lot of rubbish, because plastic is dangerous for sea ", { g: "animals" }, "."],
          ["Although the work was hard, the students also had ", { g: "fun" }, " and made new friends."],
          ["Mia knows that one day is not ", { g: "enough" }, ", so they will ask for more ", { g: "bins" }, "."]
        ], extra: ["tents", "Sunday"] }
    ] }
  ],
  weiter: { text: "Well done! You can find information in a longer text, say where it is and read between the lines." }
});
