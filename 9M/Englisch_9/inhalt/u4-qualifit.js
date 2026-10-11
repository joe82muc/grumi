/* Englisch 9M · Unit 4 News from New Zealand · Quali-Fit: die sechs Prüfungsteile A bis F in klein – prüfungsnah, mit Zeiteinteilung · M-Fassung
   (A Listening: Interview mit Korrektur, Notizen und Schlussfolgerungen; B Language in use: gemischt, Passiv auch selbst bilden (mit by);
   C Reading: Reihenfolge, Belegstellen, Schlussfolgerung; D Mediation: Aushang eines Gemeinschaftsgartens → deutsche Nachricht und Antwort;
   E Text and media: Stellenanzeige → Notizzettel und Anfrage; F Writing: E-Mail-Anfrage zu einem Ferienjob)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Neuseeland: Berufswahl, Praktikum, Vereine und Freizeit, Generationen). Grammatik der Unit: going to, simple past, Passiv (simple present und simple past, auch selbst bilden).
   Texte: „A trainee cook in the school café“ (texte/u4/qualifit-listening-m.js), „My Saturdays at the library“ (texte/u4/qualifit-reading-m.js),
   „Open Day at Pebble Lane Community Garden“ und „Holiday helpers wanted“ (texte/u4/qualifit-mediation-m.js) – Schulradio, Café, Bücherei, Garten, Minigolfanlage und Personen sind erfunden.
   Die Minutenangaben sind ein Übungsvorschlag von GRUMI (QUALI.md nennt keine Prüfungszeit je Teil).
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u4-qualifit",
  titel: "Quali-Fit: Unit 4",
  einleitung: "You know the six parts of the exam. Now you work like in the exam: with a <b>time plan</b> for every part. Set a timer on your phone or watch before you start a part. The topics come from Unit 4: jobs, a work experience, clubs and free time, and different generations. The texts are longer than in the basic version, and you meet corrections, extra information and questions where you have to <b>read between the lines</b>. The grammar is <i>going to</i>, the simple past and the passive – and you make passive sentences yourself.",
  zeit: "etwa 75 Minuten",
  ziele: ["🎧 I can listen to an interview, notice a correction and draw conclusions.", "📝 I can complete a text, build new words and make passive sentences myself.", "📖 I can put events in order, find lines and explain what the end of a text shows.", "🇩🇪 I can pass on the important information in German and leave out the rest.", "✉️ I can turn an advert into notes and write an email with all the points."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    wordbuilding: ["word building", "Wortbildung: Aus einem Grundwort in Klammern bildest du ein neues Wort, zum Beispiel help → helpful."],
    goingto: ["going to", "Mit am, is oder are und going to sprichst du über Pläne und Absichten, zum Beispiel: I am going to apply for the training."],
    passive: ["passive", "Das Passiv besteht aus einer Form von be und der dritten Verbform. Es sagt, was mit etwas gemacht wird, zum Beispiel: The cakes are baked by Ana. Mit by nennst du, wer es tut."],
    trial: ["trial year", "Ein Probejahr ist eine erste Zeit, in der man ausprobiert, ob eine Ausbildung zu einem passt."],
    disappoint: ["to disappoint", "Jemanden enttäuschen heißt: Man tut etwas nicht, was die andere Person gehofft hat."],
    guarantee: ["guarantee", "Eine Garantie ist ein sicheres Versprechen. Wer eine Garantie hat, kann sicher sein, dass etwas klappt."],
    carpenter: ["carpenter", "Ein Tischler baut Möbel und andere Dinge aus Holz."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a trainee cook at work</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u4-trainee-cook.jpg\" alt=\"A young trainee cook arranges food on plates in a kitchen; the head chef watches and smiles.\" loading=\"lazy\" style=\"width:100%;border-radius:14px\"></figure><p>What is she doing? What do you need to be good at this job? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil A hörst du ein Gespräch und löst <b>zwei verschiedene Aufgabenarten</b> hintereinander. Lies die Aufgaben vor dem Hören. Im Gespräch gibt es oft eine <b>Korrektur</b> („No, sorry, that's wrong“) oder zwei Angaben, von denen nur eine gilt – schreibe immer die <b>zweite, richtige</b> auf. Bei Notizen schreibst du nur ein Wort. Bei den Fragen musst du manchmal <b>Schlüsse ziehen</b>: Die Antwort steht dann nicht wörtlich da. Zum Üben: Timer auf etwa 10 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">A student radio host talks to a trainee cook. The school and the people are invented. In the interview you hear the words <button class=\"term\" data-t=\"trial\">trial year</button> and <i>to give up</i>. <span class=\"de\">Hör zu und löse die Aufgaben.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u4-qf-listen-m", fragen: [
        { art: "mc", id: "mc-a", titel: "Draw conclusions", lead: "Tick the correct answer. <span class=\"de\">Die Antwort steht nicht wörtlich da – du musst Schlüsse ziehen.</span>",
          fragen: [
            { q: "Why did Maia feel better after she had burnt the rolls?", o: ["Mr Greene was not angry with her.", "The pupils did not see the rolls.", "She never burnt anything again.", "She decided to work in another café."], a: 0, e: "Der Koch hat gelacht und gesagt, dass jedem einmal etwas anbrennt. Das nimmt Maia die Angst vor Fehlern." },
            { q: "What does Maia think about washing up?", o: ["She would rather not do it.", "She enjoys it more than cooking.", "She thinks it is the most important job.", "She does it only on Mondays."], a: 0, e: "„I could do without it“ heißt: Sie könnte darauf verzichten. Trotzdem sagt sie, dass sie ihre Arbeit nicht tauschen würde." }
          ] },
        { art: "luecke", id: "luecke-a", tag: "Complete", titel: "Notes", lead: "Listen again and complete the notes with one word each. <span class=\"de\">Achte auf Korrekturen. Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["On Tuesdays the work starts at ", { g: "six" }, " o'clock."],
            ["The training takes ", { g: "three" }, " years."],
            ["After the training Maia is going to work on a cruise ", { g: "ship" }, "."]
          ], extra: ["seven", "two"] }
      ] },
      { art: "offen", id: "plus-a", m7: true, tag: "Plus · Your opinion", titel: "Maia's tip", lead: "Maia says: <i>“Be on time and try new food.”</i> Which of the two tips is more important for a trainee? Give a reason. <span class=\"de\">Antworte auf Englisch, mit eigenen Worten.</span>",
        fragen: [{ q: "Which tip is more important, and why?", m: "I think it is more important to be on time, because the other cooks need you early and the bread has to be ready before breakfast.", k: ["on time|late|early|punctual|new food|try", "because|reason|so that|important|need"], min: 2 }],
        tipp: "Use: I think … is more important, because …" }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ist alles gemischt: Du ergänzt Verbformen aus einem <button class=\"term\" data-t=\"wordbox\">Wortkasten</button>, bildest <button class=\"term\" data-t=\"wordbuilding\">neue Wörter</button> aus dem Grundwort und bildest das <button class=\"term\" data-t=\"passive\">Passiv</button> selbst. Lies den ganzen Satz und achte auf Zeitangaben wie <i>next year</i> (Plan: <button class=\"term\" data-t=\"goingto\">going to</button>) oder <i>last week</i> (simple past). <b>Passiv bilden:</b> das Ding, mit dem etwas geschieht, kommt nach vorn; dann <i>is/are</i> (simple present) oder <i>was/were</i> (simple past) und die dritte Verbform; mit <i>by</i> nennst du, wer es tut: <i>The cakes are baked by Ana. The cakes were baked by Ana.</i> Zum Üben: Timer auf etwa 10 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "Small stories", lead: "Complete the sentences with words from the box. <span class=\"de\">Es sind ganze Verbformen. Zwei bleiben übrig.</span>",
        absaetze: [
          ["Next month my cousin ", { g: "is going to" }, " start his training as a baker."],
          ["Last Saturday our whole class ", { g: "cleaned" }, " the beach near the school."],
          ["At our youth club, the table tennis lessons ", { g: "are held" }, " on Wednesdays."]
        ], extra: ["cleans", "hold"] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort aus dem Wort in Klammern.</span>",
        fragen: [
          { q: "Working on a roof without a helmet is very ___. (safe)", o: ["unsafe", "safely", "safety", "safer"], a: 0, e: "Nach „is very“ steht ein Adjektiv, und der Satz sagt, dass es gefährlich ist: un- + safe = unsafe. „Safer“ bräuchte ein „than“." },
          { q: "The new apprentice is very ___: she is never late, and she never forgets a job. (rely)", o: ["reliable", "relying", "relied", "reliably"], a: 0, e: "Nach „is very“ steht ein Adjektiv: rely + -able = reliable (aus y wird i). „Reliably“ ist ein Adverb und passt nur zu einem Verb." },
          { q: "On the first day the chef gave us a clear ___ of the new oven. (explain)", o: ["explanation", "explaining", "explained", "explainer"], a: 0, e: "Nach „a clear“ steht ein Nomen: explain + -ation = explanation. Achtung, das i fällt weg." }
        ] },
      { art: "offen", id: "offen-b", tag: "Make the passive", titel: "Make the passive", lead: "Write the sentence in the passive and use <b>by</b>: <i>A local firefighter teaches the first-aid course.</i> <span class=\"de\">Beginne mit „The first-aid course“.</span>",
        fragen: [{ q: "Write the sentence.", m: "The first-aid course is taught by a local firefighter.", k: ["first-aid|first aid|course", "is taught", "by a local firefighter|by a firefighter|by the local firefighter|by the firefighter"], min: 3 }] },
      { art: "offen", id: "plus-b", m7: true, tag: "Plus · Make the passive", titel: "Now in the past", lead: "Write the sentence in the passive (simple past) and use <b>by</b>: <i>Volunteers planted the trees in the park last year.</i> <span class=\"de\">Beginne mit „The trees“.</span>",
        fragen: [{ q: "Write the sentence.", m: "The trees in the park were planted by volunteers last year.", k: ["trees", "were planted", "by volunteers|by the volunteers"], min: 3 }],
        tipp: "Last year → simple past → was / were + dritte Verbform." }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C liest du einen längeren Text und bringst Aussagen in die richtige Reihenfolge oder suchst die Zeilen, in denen eine Antwort steht. Lies zuerst den ganzen Text einmal, dann gezielt: Welche Stelle gehört zu welcher Frage? Bei manchen Fragen musst du <b>zwischen den Zeilen lesen</b>: Gefühle und Gründe stehen nicht immer wörtlich da. Zum Üben: Timer auf etwa 15 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">Toby wrote this text for his school magazine. The people and the library are invented. The text has the words <button class=\"term\" data-t=\"disappoint\">to disappoint</button> and <button class=\"term\" data-t=\"guarantee\">guarantee</button>. <span class=\"de\">Lies den Text einmal ganz.</span></p>" },
      { art: "lesetext", lesetext: "u4-qf-read-m" },
      { art: "ordnen", id: "ordnen-c", tag: "Put in order", titel: "What happens in the text?", lead: "Put the statements in the order of the text. <span class=\"de\">Welche Aussage kommt zuerst?</span>",
        schritte: ["Toby's mum tells him to try something new.", "Ms Latu gives Toby a blue shirt.", "Toby helps a crying girl to find books about dragons.", "Ms Latu explains the training for library assistants.", "Toby decides to ask for a work experience week."] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap ALL the lines with the answer. <span class=\"de\">Tippe alle Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-qf-read-m",
        fragen: [
          { q: "Why did Toby think about giving up at the library?", zeilen: [13, 14], e: "The work was boring, and after three weeks he nearly gave up." },
          { q: "What does Ms Latu say a library assistant needs?", zeilen: [33, 35], e: "You have to like people and stay calm when many children shout." }
        ] },
      { art: "mc", id: "mc-c", tag: "Tick", titel: "Read between the lines", lead: "Tick the correct answer. <span class=\"de\">Die Antwort steht nicht wörtlich da.</span>",
        fragen: [
          { q: "Why does Toby want to apply for the training, although he might not get a place?", o: ["He has found a goal and wants to try it.", "He is sure that he will get a place.", "He wants to please his dad.", "He is afraid of working with children."], a: 0, e: "Toby sagt, dass er nun einen Plan hat. Dass es nicht sicher klappt, hält ihn nicht ab." }
        ] },
      { art: "offen", id: "plus-c", m7: true, tag: "Plus · Your opinion", titel: "Try something new", lead: "Toby's mum says: <i>“Try something new. Help somebody.”</i> Do you agree? Give <b>two reasons</b>. <span class=\"de\">Antworte auf Englisch.</span>",
        fragen: [{ q: "Do you agree? Why (not)?", m: "I agree because you meet new people when you help. Also, you can find out what you are good at.", k: ["agree|disagree|yes|no|think|true", "because|reason|also|first|second|so"], min: 2 }],
        tipp: "Use: I (don't) agree, because … Also, …" }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D gibst du auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen will. Frage dich: Was ist für <b>diese</b> Person wichtig – und was nicht? Beantworte zuerst die Frage der Person und nimm nur die Angaben aus dem Aushang, die dazu passen. Der Aushang enthält auch <b>Nebeninformationen</b>, die du weglassen kannst. Schreibe ganze Sätze. Du übersetzt nicht Wort für Wort, und ein Wörterbuch darf helfen. Zum Üben: Timer auf etwa 12 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">Deine Oma ist zu Besuch in Neuseeland. Sie möchte mit dir zum Tag der offenen Tür eines Gemeinschaftsgartens gehen, versteht aber kein Englisch. Du hast diesen Aushang gesehen. <span class=\"de\">Der Garten ist erfunden. Das Wort <button class=\"term\" data-t=\"carpenter\">carpenter</button> steht im Glossar.</span></p>" },
      { art: "lesetext", lesetext: "u4-qf-garden-m" },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an Oma", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Liebe Oma, der Tag der offenen Tür im Garten ist am Samstag. Bei starkem Regen wird er auf ", { g: "Sonntag" }, " verschoben."],
          ["Kinder ab acht Jahren können mit einem Tischler einen ", { g: "Nistkasten" }, " bauen."],
          ["Zieh bitte alte ", { g: "Schuhe" }, " an, weil die Wege matschig sein können."]
        ], extra: ["Montag", "Werkzeuge"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Pflanzen und Suppe", lead: "Oma fragt: „Ich möchte Pflanzen für euren Balkon kaufen und danach etwas essen. Was gibt es dort, und was kostet es?“ Antworte ihr in zwei oder drei deutschen Sätzen. Lass weg, was sie nicht braucht.",
        fragen: [{ q: "Was antwortest du Oma?", m: "Man kann Tomaten- und Kräuterpflanzen kaufen, sie kosten zwei Dollar pro Stück. Außerdem gibt es eine Schüssel Gemüsesuppe für drei Dollar.", k: ["pflanze|pflanzen|tomate|tomaten|kräuter", "2|zwei", "suppe", "3|drei"], min: 3 }],
        tipp: "Suche im Aushang die Wörter plants und soup. Die Musik und der Parkplatz sind für Oma nicht wichtig." }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus einem Text eine <b>andere Textsorte</b>. Hier wird aus einer Anzeige zuerst ein <b>Notizzettel</b> (nur die wichtigsten Angaben, keine ganzen Sätze) und dann eine <b>höfliche Anfrage</b> (ganze Sätze, freundlich, mit einer Frage und einem Grund). Jede wichtige Angabe soll genau einmal vorkommen. Zum Üben: Timer auf etwa 10 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">You are looking for a holiday job and you find this advert. The place is invented. <span class=\"de\">Lies die Anzeige.</span></p>" },
      { art: "lesetext", lesetext: "u4-qf-minigolf-m" },
      { art: "luecke", id: "luecke-e", tag: "Complete", titel: "Your note", lead: "Complete your note with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Lunch break: ", { g: "thirty" }, " minutes"],
          ["Extra pay: $2 more on ", { g: "Saturdays" }],
          ["First day: ", { g: "training" }, " and a free T-shirt"]
        ], extra: ["helmet", "bicycle"] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "Your first sentences", lead: "Write two or three sentences for your email. Say that you are sixteen, say <b>why</b> you would like the job, and ask <b>one</b> question about it.",
        fragen: [{ q: "Write two or three sentences.", m: "I am sixteen, and I would like the job because I enjoy working with people outside. Can you tell me what I have to wear?", k: ["sixteen|16", "because|as|since|enjoy|love|like|people|outside|families", "can|could|do|what|when|how|would"], min: 3 }],
        tipp: "Use: I would like the job because …" }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F schreibst du einen eigenen Text von etwa 100 Wörtern. Bei einer <b>Anfrage per E-Mail</b> gehören diese Teile dazu: Betreff, Anrede, der Grund, warum du schreibst, Angaben zu dir, deine Fragen, ein Schluss mit Bitte um Antwort, Gruß und dein Name. Du bekommst Punkte für <b>Inhalt</b> (alle Stichworte, ein klarer Aufbau) und für <b>Sprache</b> (richtige und abwechslungsreiche Sätze, Zeiten). Verbinde Sätze mit <i>because, although, so that</i>. Zum Üben: Timer auf etwa 20 Minuten (Übungsvorschlag von GRUMI, keine Prüfungsangabe).</p>" },
      { art: "text", html: "<p class=\"lead\">You want a holiday job at Bluebell Dog Day Care. The place is invented. On its website you read: <i>We sometimes need holiday helpers. They walk dogs, clean the kennels and play with the dogs in the garden. Please write to us.</i> <span class=\"de\">Das sind deine Stichworte.</span></p>" },
      { art: "karten", karten: [{ ic: "🙋", titel: "About you", text: "Say how old you are and why you like dogs. Say what you have done with animals before." }, { ic: "📅", titel: "When", text: "You are free in the first three weeks of the summer holidays." }, { ic: "❓", titel: "Questions", text: "Ask about the pay and about the clothes." }, { ic: "✉️", titel: "End", text: "Ask for an answer. Add a greeting and your name." }] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write the email", min: 90,
        auftrag: "<p><b>Write an email</b> to Bluebell Dog Day Care and ask for a holiday job (about 100 words).</p><ul><li>Write a subject and begin with a greeting.</li><li>Say why you are writing.</li><li>Tell them about yourself: your age, why you like dogs and what you have done with animals.</li><li>Say when you are free.</li><li>Ask two questions (pay, clothes).</li><li>Ask for an answer and end with a greeting and your name.</li></ul>",
        starter: ["Subject: Holiday job", "Dear Sir or Madam,", "I am writing because …", "I am free …", "Could you tell me …?", "Yours faithfully,"],
        kriterien: ["Die E-Mail hat einen Betreff, eine Anrede, einen Gruß und deinen Namen.", "Der Text sagt, warum du schreibst und wer du bist.", "Du sagst, warum du Hunde magst und was du schon mit Tieren gemacht hast.", "Du nennst, wann du Zeit hast.", "Du stellst zwei Fragen (Bezahlung und Kleidung).", "Du bittest um eine Antwort.", "Die Sätze sind vollständig, höflich und richtig geschrieben, einige sind mit because oder although verbunden.", "Es sind mindestens neunzig Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "mc", id: "sichern", tag: "Tick", titel: "The six parts", lead: "Tick the correct answer.",
        fragen: [
          { q: "In Part D (mediation), what do you do with details that the person does not need?", o: ["I leave them out.", "I translate every word.", "I write them first.", "I copy them in English."], a: 0, e: "Sprachmittlung heißt: nur das Wichtige für diese Person auf Deutsch weitergeben. Nebeninformationen lässt du weg." },
          { q: "What belongs in a polite email of enquiry?", o: ["A greeting, the reason for writing, my questions and an ending with my name.", "Only one short question.", "A long story about my last holiday.", "A list of words without full sentences."], a: 0, e: "Eine Anfrage hat einen klaren Aufbau: Anrede, Grund, Fragen, Gruß und Name. Sie besteht aus ganzen, höflichen Sätzen." }
        ] }
    ] }
  ],
  weiter: { text: "Well done! You worked through all six parts with longer texts and a time plan. Try the parts again with your timer and see if you can finish a little faster." }
});
