/* Englisch 9R · Unit 4 News from New Zealand · Quali-Fit: die sechs Prüfungsteile A bis F in klein – prüfungsnah, mit Zeiteinteilung
   (A Listening: Interview, zwei Formate hintereinander; B Language in use: gemischt, mit Passiv zum Erkennen; C Reading: Überschriften und Reihenfolge;
   D Mediation: Aushang eines Gemeinschaftsgartens → deutsche Nachricht; E Text and media: Stellenanzeige → Notizzettel und Anfrage; F Writing: E-Mail-Anfrage zu einem Ferienjob)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Neuseeland: Berufswahl, Praktikum, Vereine und Freizeit, Generationen). Grammatik der Unit: going to, simple past, Passiv zum Verstehen.
   Texte: „A trainee cook in the school café“ (texte/u4/qualifit-listening.js), „My Saturdays at the library“ (texte/u4/qualifit-reading.js),
   „Open Day at Pebble Lane Community Garden“ und „Holiday helpers wanted“ (texte/u4/qualifit-mediation.js) – Schulradio, Café, Bücherei, Garten, Minigolfanlage und Personen sind erfunden.
   Die Minutenangaben sind ein Übungsvorschlag von GRUMI (QUALI.md nennt keine Prüfungszeit je Teil).
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u4-qualifit",
  titel: "Quali-Fit: Unit 4",
  einleitung: "You know the six parts of the exam. Now you work like in the exam: with a <b>time plan</b> for every part. Set a timer on your phone or watch before you start a part. The topics come from Unit 4: jobs, a work experience, clubs and free time, and different generations. The grammar is <i>going to</i>, the simple past and the passive (to understand).",
  zeit: "etwa 70 Minuten",
  ziele: ["🎧 I can listen to an interview and use two different task types.", "📝 I can complete a text, build new words and understand the passive.", "📖 I can match headings, put statements in order and find lines.", "✉️ I can pass on information in German, turn an advert into notes and write an email."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    wordbuilding: ["word building", "Wortbildung: Aus einem Grundwort in Klammern bildest du ein neues Wort, zum Beispiel help → helpful."],
    goingto: ["going to", "Mit am, is oder are und going to sprichst du über Pläne und Absichten, zum Beispiel: I am going to apply for the training."],
    passive: ["passive", "Das Passiv besteht aus einer Form von be und der dritten Verbform. Es sagt, was mit etwas gemacht wird, zum Beispiel: The soup is made in the café."],
    heading: ["heading", "Eine Überschrift sagt in wenigen Wörtern, worum es in einem Absatz geht."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil A hörst du ein Gespräch und löst <b>zwei verschiedene Aufgabenarten</b> hintereinander. Lies die Aufgaben vor dem Hören. Bei der ersten Aufgabe suchst du den Satz, der <b>nicht</b> zum Gehörten passt. Bei der zweiten ergänzt du Notizen mit einem Wort. In der Prüfung teilst du dir die Zeit selbst ein. Zum Üben: Stelle dir einen Timer auf etwa 8 Minuten (das ist ein Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">A student radio host talks to a trainee cook. The school and the people are invented. <span class=\"de\">Hör zu und löse die Aufgaben.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u4-qf-listen", fragen: [
        { art: "mc", id: "mc-a", titel: "Find the wrong sentence", lead: "Tick the sentence that is wrong. <span class=\"de\">In jeder Aufgabe passt ein Satz nicht zum Interview.</span>",
          fragen: [
            { q: "About how Maia got the job:", o: ["She found the job in a newspaper.", "She did a work experience week in the café last year.", "The chef told her that she was good with food.", "She started her training in September."], a: 0, e: "Maia hat erst eine Woche im Café geschnuppert und sich dann um einen Ausbildungsplatz beworben. Eine Zeitung kommt nicht vor." },
            { q: "About Maia's week:", o: ["She works in the café on Mondays and Fridays.", "She starts work at seven o'clock.", "She helps to prepare lunch for about two hundred pupils.", "She makes the salads."], a: 0, e: "Montags und freitags geht Maia zum College. Im Café arbeitet sie an den anderen Tagen." },
            { q: "About Maia's opinion:", o: ["Maia likes washing up.", "She is happy when pupils say that the soup is good.", "She says that young people should be on time.", "She says that young people should try new food."], a: 0, e: "Maia sagt klar, dass sie das Spülen nicht mag. Die anderen drei Sätze stimmen." }
          ] },
        { art: "luecke", id: "luecke-a", tag: "Complete", titel: "Notes", lead: "Listen again and complete the notes with one word each. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The training takes ", { g: "three" }, " years."],
            ["After the training Maia is going to work in a ", { g: "hotel" }, " kitchen."],
            ["One day she wants to open her own small ", { g: "café" }, "."],
            ["The pizzas are made on ", { g: "Thursdays" }, "."]
          ], extra: ["Wednesdays", "office"] }
      ] }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ist alles gemischt: Du ergänzt Verbformen aus einem <button class=\"term\" data-t=\"wordbox\">Wortkasten</button>, bildest <button class=\"term\" data-t=\"wordbuilding\">neue Wörter</button> aus dem Grundwort und erkennst das <button class=\"term\" data-t=\"passive\">Passiv</button>. Lies den ganzen Satz und achte auf Zeitangaben wie <i>next year</i> (Plan: <button class=\"term\" data-t=\"goingto\">going to</button>) oder <i>last week</i> (simple past). Das Passiv musst du hier nur erkennen und verstehen. Zum Üben: Timer auf etwa 8 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "Small stories", lead: "Complete the sentences with words from the box. <span class=\"de\">Es sind ganze Verbformen. Zwei bleiben übrig.</span>",
        absaetze: [
          ["Next year my sister ", { g: "is going to" }, " study to become a nurse."],
          ["Last week our youth club ", { g: "organised" }, " a tidy-up day in the park."],
          ["In our football club, a new kit ", { g: "is bought" }, " every two years."],
          ["The old sports hall ", { g: "was painted" }, " by volunteers last summer."],
          ["My grandad ", { g: "worked" }, " in a factory when he was young."]
        ], extra: ["paints", "buy"] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort aus dem Wort in Klammern.</span>",
        fragen: [
          { q: "Thank you for carrying my bag. You are very ___. (help)", o: ["helpful", "helping", "helpless", "helpfully"], a: 0, e: "Nach „are very“ steht ein Adjektiv: help + -ful = helpful. „Helpless“ bedeutet hilflos und passt nicht zum Dank." },
          { q: "My uncle lost his job, so he is ___ at the moment. (employ)", o: ["unemployed", "employed", "employment", "employer"], a: 0, e: "Er hat seine Arbeit verloren, also ist er arbeitslos: un- + employed. „Employed“ hieße, dass er eine Stelle hat." },
          { q: "The staff in the shop were very ___ to me. (friend)", o: ["friendly", "friendship", "friends", "friendlier"], a: 0, e: "Nach „were very“ steht ein Adjektiv: friend + -ly = friendly. „Friendlier“ wäre eine Steigerung und braucht ein „than“." }
        ] },
      { art: "mc", id: "mc-b2", tag: "Tick", titel: "Understand the passive", lead: "Tick the correct answer. <span class=\"de\">Das Passiv musst du nur verstehen.</span>",
        fragen: [
          { q: "Neighbours water the plants every week. Which sentence means the same?", o: ["The plants are watered by neighbours every week.", "The plants water the neighbours every week.", "The plants were watered by neighbours last week.", "The neighbours are watered by the plants every week."], a: 0, e: "Im Passiv steht das, was gewässert wird (the plants), vorne. Die Nachbarn folgen mit „by“. Die Zeit bleibt das simple present." },
          { q: "„The parcels were sorted by the postman.“ Was bedeutet das?", o: ["Der Postbote hat die Pakete sortiert.", "Der Postbote sortiert die Pakete gerade.", "Die Pakete haben den Postboten sortiert.", "Die Pakete werden vom Postboten sortiert werden."], a: 0, e: "„Were sorted“ ist die Vergangenheit im Passiv. „By the postman“ sagt, wer es getan hat." }
        ] },
      { art: "offen", id: "challenge-b", m7: true, tag: "Challenge · freiwillig", titel: "Make the passive", lead: "Write the sentence in the passive: <i>Volunteers grow the vegetables.</i> <span class=\"de\">Beginne mit „The vegetables“.</span>",
        fragen: [{ q: "Write the sentence.", m: "The vegetables are grown by volunteers.", k: ["vegetables", "are grown|are being grown", "by volunteers|by the volunteers"], min: 3 }] }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C liest du einen längeren Text und ordnest <button class=\"term\" data-t=\"heading\">Überschriften</button> zu oder bringst Aussagen in die richtige Reihenfolge. Lies zuerst den ganzen Text einmal, dann jeden Absatz einzeln: Was ist die Hauptsache? Eine passende Überschrift deckt den <b>ganzen</b> Absatz ab, nicht nur ein Wort daraus. Zum Üben: Timer auf etwa 12 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">Toby wrote this text for his school magazine. The people and the library are invented. <span class=\"de\">Lies den Text einmal ganz.</span></p>" },
      { art: "lesetext", lesetext: "u4-qf-read" },
      { art: "mc", id: "mc-c", tag: "Match", titel: "Find the heading", lead: "Tick the best heading for each paragraph. <span class=\"de\">Die Absätze sind im Text durch eine Leerzeile getrennt: Absatz 1 beginnt in Zeile 1, Absatz 2 in Zeile 5, Absatz 3 in Zeile 10, Absatz 4 in Zeile 15, Absatz 5 in Zeile 21.</span>",
        fragen: [
          { q: "Paragraph 1 (lines 1–4):", o: ["No idea what to do", "A famous football club", "My favourite computer game", "The best day of my life"], a: 0, e: "Toby weiß nicht, was er nach der Schule machen soll. Fußball und Computer kommen nur als Interessen seiner Freunde vor." },
          { q: "Paragraph 2 (lines 5–9):", o: ["A quiet start at the library", "A new school uniform", "The history of the town", "A noisy day in the park"], a: 0, e: "Toby fängt in der Bücherei an und räumt zunächst nur Bücher ein. Das findet er ruhig und etwas langweilig." },
          { q: "Paragraph 3 (lines 10–14):", o: ["Helping a little girl", "Losing a book", "A story about a school trip", "Meeting an old friend"], a: 0, e: "Toby hilft einem weinenden Mädchen, Drachenbücher zu finden. Danach ist er stolz." },
          { q: "Paragraph 4 (lines 15–20):", o: ["Learning more about the job", "Buying a new computer", "Looking for a flat", "Leaving the library"], a: 0, e: "Toby hilft jetzt bei der Vorlesestunde und erfährt, wie die Ausbildung zum Bibliotheksassistenten abläuft." },
          { q: "Paragraph 5 (lines 21–25):", o: ["Plans for the future", "A bad exam result", "A holiday in the mountains", "Why books are expensive"], a: 0, e: "Toby plant ein Praktikum und eine Bewerbung. Er benutzt zweimal „going to“." }
        ] },
      { art: "ordnen", id: "ordnen-c", tag: "Put in order", titel: "What happens in the text?", lead: "Put the statements in the order of the text. <span class=\"de\">Welche Aussage kommt zuerst?</span>",
        schritte: ["Toby has no idea what to do after school.", "Toby starts at the library and puts books back on the shelves.", "Toby helps a crying girl to find books about dragons.", "Ms Latu tells Toby about the training for library assistants.", "Toby wants to ask for a work experience week."] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap ALL the lines with the answer. <span class=\"de\">Tippe alle Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-qf-read",
        fragen: [
          { q: "What did Toby's mum tell him to do?", zeilen: [3, 4], e: "She said: Try something new and help somebody." },
          { q: "What did Toby do at the library at first?", zeilen: [7, 8], e: "He only put books back on the shelves." },
          { q: "Why was the little girl crying?", zeilen: [10, 11], e: "She could not find a story about dragons." },
          { q: "How long does the training for library assistants take?", zeilen: [18, 19], e: "It takes three years." }
        ] },
      { art: "offen", id: "challenge-c", m7: true, tag: "Challenge · freiwillig", titel: "Your plan", lead: "Write one sentence about what you are going to do after school. Use <b>going to</b>.",
        fragen: [{ q: "Write one sentence.", m: "I am going to train as a mechanic after school.", k: ["going to", "train|apprentic|job|school|study|work|college"], min: 2 }] }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D gibst du auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen will. Frage dich: Was ist für <b>diese</b> Person wichtig – und was nicht? Beantworte zuerst die Frage der Person und nimm nur die Angaben aus dem Aushang, die dazu passen. Schreibe ganze Sätze. Du übersetzt nicht Wort für Wort, und ein Wörterbuch darf helfen. Zum Üben: Timer auf etwa 10 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">Deine Oma ist zu Besuch in Neuseeland. Sie möchte mit dir zum Tag der offenen Tür eines Gemeinschaftsgartens gehen, versteht aber kein Englisch. Du hast diesen Aushang gesehen. <span class=\"de\">Der Garten ist erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u4-qf-garden" },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an Oma", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Liebe Oma, der Tag der offenen Tür im Gemeinschaftsgarten ist am Samstag von ", { g: "zehn" }, " Uhr bis drei Uhr nachmittags. Der Eintritt ist ", { g: "kostenlos" }, "."],
          ["Du kannst dir den Garten ansehen und Tomaten- oder Kräuter", { g: "pflanzen" }, " kaufen. Das Geld wird für neue ", { g: "Werkzeuge" }, " gebraucht."],
          ["Kinder ab acht Jahren können mit einem Tischler einen ", { g: "Nistkasten" }, " bauen. Eine Schüssel ", { g: "Suppe" }, " aus Gemüse vom Garten kostet 3 Dollar."],
          ["Zieh bitte alte ", { g: "Schuhe" }, " an, weil die Wege matschig sein können. Hunde sind im Garten nicht ", { g: "erlaubt" }, "."]
        ], extra: ["Sonntag", "Montag"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Mitmachen im Garten", lead: "Oma fragt: „Kann ich dort auch mithelfen? Was kostet das, und wann kann man arbeiten?“ Antworte ihr in zwei oder drei deutschen Sätzen.",
        fragen: [{ q: "Was antwortest du Oma?", m: "Neue Mitglieder sind willkommen. Es kostet 10 Dollar im Jahr, und man kann jeden Mittwochnachmittag im Garten arbeiten.", k: ["mitglied|mithelfen|mitmachen|mitarbeiten|willkommen", "10|zehn", "jahr", "mittwoch"], min: 3 }] }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus einem Text eine <b>andere Textsorte</b>. Hier wird aus einer Anzeige zuerst ein <b>Notizzettel</b> (nur die wichtigsten Angaben, keine ganzen Sätze) und dann eine <b>höfliche Anfrage</b> (ganze Sätze, freundlich, mit einer Frage). Jede wichtige Angabe soll genau einmal vorkommen. Zum Üben: Timer auf etwa 8 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">You are looking for a holiday job and you find this advert. The place is invented. <span class=\"de\">Lies die Anzeige.</span></p>" },
      { art: "lesetext", lesetext: "u4-qf-minigolf" },
      { art: "luecke", id: "luecke-e", tag: "Complete", titel: "Your note", lead: "Complete your note with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Place: Puttwell Mini ", { g: "Golf" }],
          ["Minimum age: ", { g: "sixteen" }],
          ["Working days: Tuesday to ", { g: "Saturday" }],
          ["Work: give out clubs and balls, clean the course, help at the ", { g: "kiosk" }],
          ["Pay: ", { g: "$15" }, " an hour"]
        ], extra: ["helmet", "bicycle"] },
      { art: "mc", id: "mc-e", tag: "Tick", titel: "A polite enquiry", lead: "Tick the best sentence for your email. <span class=\"de\">Welcher Satz ist höflich und passt in eine Anfrage?</span>",
        fragen: [
          { q: "Which sentence is best?", o: ["I am sixteen, and I would like to work at Puttwell Mini Golf in the holidays.", "Give me the job now.", "i want job holidays", "You have to answer me today."], a: 0, e: "Eine Anfrage nennt kurz, wer du bist und was du möchtest. Sie ist freundlich und besteht aus ganzen Sätzen." }
        ] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "Your first two sentences", lead: "Write two sentences for your email. Say that you are sixteen and ask <b>one</b> question about the job.",
        fragen: [{ q: "Write two sentences.", m: "I am sixteen, and I am interested in the job. Can you tell me what I have to wear?", k: ["sixteen|16", "interested|would like|want|like|apply", "can|could|do|what|when|how|would"], min: 3 }] }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F schreibst du einen eigenen Text von etwa 80 Wörtern. Bei einer <b>Anfrage per E-Mail</b> gehören diese Teile dazu: Betreff, Anrede, der Grund, warum du schreibst, Angaben zu dir, deine Fragen, ein Schluss mit Bitte um Antwort, Gruß und dein Name. Du bekommst Punkte für <b>Inhalt</b> (alle Stichworte, ein klarer Aufbau) und für <b>Sprache</b> (richtige Sätze und Zeiten). Zum Üben: Timer auf etwa 20 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">You want a holiday job at Bluebell Dog Day Care. The place is invented. On its website you read: <i>We sometimes need holiday helpers. They walk dogs, clean the kennels and play with the dogs in the garden. Please write to us.</i> <span class=\"de\">Das sind deine Stichworte.</span></p>" },
      { art: "karten", karten: [{ ic: "🙋", titel: "About you", text: "Say how old you are and why you like dogs." }, { ic: "📅", titel: "When", text: "You are free in the first three weeks of the summer holidays." }, { ic: "❓", titel: "Questions", text: "Ask about the pay and about the clothes." }, { ic: "✉️", titel: "End", text: "Ask for an answer. Add a greeting and your name." }] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write the email", min: 80,
        auftrag: "<p><b>Write an email</b> to Bluebell Dog Day Care and ask for a holiday job (about 80 words).</p><ul><li>Write a subject and begin with a greeting.</li><li>Say why you are writing.</li><li>Tell them about yourself and when you are free.</li><li>Ask two questions (pay, clothes).</li><li>Ask for an answer and end with a greeting and your name.</li></ul>",
        starter: ["Subject: Holiday job", "Dear Sir or Madam,", "I am writing because I would like to …", "I am free …", "Could you tell me …?", "Yours faithfully,"],
        kriterien: ["Die E-Mail hat einen Betreff, eine Anrede, einen Gruß und deinen Namen.", "Der Text sagt, warum du schreibst und wer du bist.", "Du nennst, wann du Zeit hast.", "Du stellst zwei Fragen (Bezahlung und Kleidung).", "Du bittest um eine Antwort.", "Die Sätze sind vollständig, höflich und richtig geschrieben.", "Es sind mindestens achtzig Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The six parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I listen and use two different ", { g: "tasks" }, "."],
          ["In Part B I complete a text and build new ", { g: "words" }, "."],
          ["In Part C I match headings and put statements in ", { g: "order" }, "."],
          ["In Part D I pass on information in ", { g: "German" }, "."],
          ["In Part E I turn an advert into a ", { g: "note" }, " and an enquiry."],
          ["In Part F I write an ", { g: "email" }, " myself."]
        ], extra: ["draw", "song"] }
    ] }
  ],
  weiter: { text: "Well done! You worked through all six parts with a time plan. Try the parts again with your timer and see if you can finish a little faster." }
});
