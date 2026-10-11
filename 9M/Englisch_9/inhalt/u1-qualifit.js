/* Englisch 9M · Unit 1 Around Australia · Quali-Fit: die sechs Prüfungsteile A bis F in klein · M-Fassung
   (A Listening, B Language in use, C Reading, D Mediation, E Text and media, F Writing – Prüfungsformate wie in der Abschlussprüfung:
   Kurzantworten, true / false / not in the text, Fehler in einer Zusammenfassung finden, Sprachmittlung als deutsche Zusammenfassung)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Australien: Reisen, Gesundheit, Umwelt). Grammatik der Unit: simple past, will-future, if-Sätze Typ I, present progressive (Revision).
   Texte: „A day trip to Mount Wirra“ (texte/u1/qualifit-listening-m.js), „Possum Hill Wildlife Rescue“ (texte/u1/qualifit-reading-m.js),
   „Mulga Creek Campsite – Our rules“ (texte/u1/qualifit-mediation-m.js) – Hostel, Park, Tierstation, Campingplatz und Personen sind erfunden.
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u1-qualifit",
  titel: "Quali-Fit: Unit 1",
  einleitung: "The final exam has six parts, A to F. Here you try all six in a small version – with topics from Unit 1: travelling, animals and the environment. The texts are a little longer, and you meet the formats of the real exam: short answers, “true / false / not in the text”, finding mistakes and summarising in German. In every part you learn <b>what the task wants</b>.",
  zeit: "etwa 50 Minuten",
  ziele: ["🎧 I know the six parts of the exam and what each task word asks me to do.", "🔎 I notice corrections and extra information when I listen.", "📝 I can solve exam-style tasks of every part.", "🇩🇪 I summarise the important points of an English text in German.", "✉️ I can write a polite e-mail with all the points of the task."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    operator: ["task word", "Arbeitsanweisung: Das erste Wort im Auftrag sagt, was du tun sollst. Tick = ankreuzen, Match = zuordnen, Complete = ergänzen, Answer = beantworten, Write = schreiben."],
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen aus einem englischen Text auf Deutsch weiter – für eine bestimmte Person, nur das Wichtige."],
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    heading: ["heading", "Überschrift. Sie sagt in wenigen Wörtern, worum es im Absatz geht."],
    notintext: ["not in the text", "Bei „true / false / not in the text“ prüfst du: Steht es im Text so da (true), steht das Gegenteil da (false) oder sagt der Text darüber nichts (not in the text)?"],
    slippery: ["slippery", "Rutschig: Nasse Steine sind slippery, man kann leicht ausrutschen."],
    donation: ["donation", "Eine Spende: Geld, das man freiwillig für einen guten Zweck gibt."],
    volunteer: ["volunteer", "Freiwillige Helferin oder freiwilliger Helfer: Man arbeitet ohne Bezahlung für eine gute Sache."],
    firebane: ["fire ban", "Feuerverbot: Bei großer Hitze und Trockenheit darf in Australien kein offenes Feuer gemacht werden."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What can you see? Where do you think the two people are, and what are they going to do next?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-daytrip.jpg\" alt=\"Two young hikers with small backpacks, hats and water bottles stand at a lookout and look over a wide valley with red rocks and green eucalyptus forest; one of them points at a rocky mountain in the distance, the other one eats a sandwich.\" style=\"width:100%;border-radius:14px\"></figure><p>Talk to a partner or write two sentences. Then read on.</p>" },
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil A hörst du ein Gespräch. <b>Erst die Aufgaben lesen</b>, dann hören – so weißt du, auf welche Zahl, welchen Ort oder welchen Namen du achten musst. Vorsicht: Im Gespräch gibt es oft eine <b>Korrektur</b> („No, wait …“) oder <b>zwei Angaben</b>, von denen nur eine gilt. Bei Kurzantworten schreibst du <b>nur ein Wort oder eine Zahl</b>. Die Rechtschreibung zählt.</p>" },
      { art: "text", html: "<p class=\"lead\">Two young people are staying in a hostel. Tomorrow they are going on a day trip to a national park. The hostel, the park and the people are invented. <span class=\"de\">Lies die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u1-qf-listen-m", fragen: [
        { art: "formular", id: "karte-a", titel: "Answer the questions", lead: "Listen and complete the notes. Write <b>one word or one number</b>. <span class=\"de\">Hör zu und ergänze. Nur ein Wort oder eine Zahl.</span>",
          karte: "<p>Complete the notes about the day trip.</p>",
          kopf: "Day trip to Mount Wirra – notes",
          felder: [
            { label: "Their minibus leaves at", loesung: ["7.15", "7:15", "7.15 am", "7:15 am", "quarter past seven", "a quarter past seven", "15 past 7"] },
            { label: "Meeting place: in front of the", loesung: ["kitchen", "the kitchen"] },
            { label: "Name of the guide", loesung: ["Bell", "Mr Bell", "Mister Bell", "Mr. Bell"] },
            { label: "Park pass for students (dollars)", loesung: ["9", "nine", "$9", "9 dollars", "nine dollars"] }
          ] },
        { art: "mc", id: "mc-a", titel: "Tick the correct answer", lead: "Tick one answer. <span class=\"de\">Tick = ankreuzen.</span>",
          fragen: [
            { q: "Why does Tess's group leave before the second minibus?", o: ["Their walk is longer.", "Their guide is in a hurry.", "They want to eat breakfast at the park.", "The second minibus is full."], a: 0,
              e: "Hugo says that their group goes at quarter past seven because they have the longer walk." },
            { q: "What does Hugo say about snakes?", o: ["They usually move away when they notice people.", "There are no snakes in the park.", "The guide carries a special stick.", "Snakes come out in the afternoon."], a: 0,
              e: "Mr Bell says that snakes usually move away when they feel people coming." }
          ] }
      ] },
      { art: "offen", id: "plus-a", m7: true, tag: "Plus · Your words", titel: "A tip for Tess", lead: "Tess is a little worried about snakes. Write <b>two tips</b> for her. <span class=\"de\">Antworte auf Englisch, mit eigenen Worten.</span>",
        fragen: [{ q: "What should Tess do on the stony path?", m: "She should wear proper shoes and stay on the path. If she walks normally, the snakes will move away.", k: ["shoe|shoes|boots|trainers|path|walk", "snake|snakes|away|normally|careful"], min: 2 }],
        tipp: "Think of what Mr Bell said about shoes and about walking." }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ergänzt du einen Text mit Wörtern aus dem <button class=\"term\" data-t=\"wordbox\">Wortkasten</button>. <b>Lies den ganzen Satz</b>, bevor du ein Wort einsetzt: Passt die Zeit? Passt das Bindewort (<i>although, because, who</i>)? Es bleiben Wörter übrig. Außerdem prüft Teil B die <b>Wortbildung</b>: aus einem Wort wird ein neues (protect → protection, possible → impossible).</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "A visit to a rescue station", lead: "Complete the text with words from the box. <span class=\"de\">Complete = ergänzen. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Last summer we ", { g: "visited" }, " a small rescue station near Redgum."],
          ["The ranger, ", { g: "who" }, " has worked there for ten years, showed us a koala."],
          ["We enjoyed the day a lot, ", { g: "although" }, " the weather was bad."],
          ["If the weather ", { g: "is" }, " better next month, we ", { g: "will" }, " come back with our friends."]
        ], extra: ["visit", "does"] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort.</span>",
        fragen: [
          { q: "It is ___ to feed wild animals in this park. (legal)", o: ["illegal", "unlegal", "nonlegal", "dislegal"], a: 0, e: "il- + legal = illegal: nicht erlaubt. Vor l steht die Vorsilbe il-." }        ] }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C liest du einen Text mit Zeilennummern. Bei <b>Überschriften zuordnen</b> fragst du dich: Worum geht es im ganzen Absatz? Bei <b>„true / false / <button class=\"term\" data-t=\"notintext\">not in the text</button>“</b> suchst du die Stelle: Steht es so da, steht das Gegenteil da – oder sagt der Text nichts darüber? Bei Fragen zum Text gibst du die <b>Zeilen</b> an, in denen die Antwort steht. Wörter wie <button class=\"term\" data-t=\"donation\">donation</button> und <button class=\"term\" data-t=\"volunteer\">volunteer</button> findest du im Glossar.</p>" },
      { art: "lesetext", lesetext: "u1-qf-read-m" },
      { art: "paare", id: "ueberschriften", tag: "Match", titel: "Headings", lead: "Match each <button class=\"term\" data-t=\"heading\">heading</button> with the paragraph. <span class=\"de\">Welche Überschrift passt zu welchem Absatz?</span>",
        paare: [["Paragraph 1", "From a garden shed to a hospital"], ["Paragraph 2", "Watching without touching"], ["Paragraph 3", "A volunteer's experience"], ["Paragraph 4", "A problem of space and money"], ["Paragraph 5", "Opening times and how to get there"]] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-qf-read-m",
        fragen: [
          { q: "Why must visitors speak quietly?", zeilen: [11, 12], e: "Loud voices frighten the patients.", tipp: "Look at the second paragraph." },
          { q: "How old must young people be to work as volunteers?", zeilen: [17, 18], e: "They must be over fourteen.", tipp: "Look at the third paragraph." },
          { q: "When will the station start building if enough money comes in?", zeilen: [26, 27], e: "In spring.", tipp: "Look for Dr Hale's words." }
        ] },
      { art: "mc", id: "tf-c", tag: "Tick", titel: "True, false or not in the text?", lead: "Tick the correct answer. <span class=\"de\">Steht es im Text (true), das Gegenteil (false) oder nichts darüber (not in the text)?</span>",
        fragen: [
          { q: "Hana found the volunteer work exciting all day.", o: ["false", "true", "not in the text"], a: 0, e: "She says that most of the work is cleaning." },
          { q: "Dr Hale studied at a university in Melbourne.", o: ["not in the text", "true", "false"], a: 0, e: "The text says that she is a retired vet – but not where she studied." },
          { q: "The station will start building in spring, whatever happens.", o: ["false", "true", "not in the text"], a: 0, e: "She says it only depends on the donations: if not, they will have to say no to some animals." }        ] },
      { art: "mc", id: "fehler-c", tag: "Find the mistake", titel: "A summary with a mistake", lead: "Read the summary. One sentence is wrong. <span class=\"de\">Welcher Satz stimmt nicht mit dem Text überein?</span><br><i>1 The station was started by a vet twelve years ago. 2 Visitors may touch the animals after the daily check. 3 Young volunteers clean the cages and prepare food. 4 The team needs money for a second building.</i>",
        fragen: [
          { q: "Which sentence of the summary is wrong?", o: ["Visitors may touch the animals after the daily check.", "The station was started by a vet twelve years ago.", "Young volunteers clean the cages and prepare food.", "The team needs money for a second building."], a: 0, e: "The text says: you cannot touch them, as they must not get used to people." }
        ] },
      { art: "offen", id: "offen-c", tag: "Answer", titel: "Short answer", lead: "Answer in English. Use your own words. <span class=\"de\">Answer = beantworten, ein bis zwei Sätze.</span>",
        fragen: [{ q: "Why does the station need a second building?", m: "More animals arrive every year because of the long dry summers, so the station is almost full.", k: ["more|many|full|animals", "summer|summers|dry|full|space|room"], min: 2 }],
        tipp: "Look at the fourth paragraph." },
      { art: "offen", id: "plus-c", m7: true, tag: "Plus · Your opinion", titel: "Would you volunteer?", lead: "Would you work as a volunteer at Possum Hill? Give <b>two reasons</b>.",
        fragen: [{ q: "Would you work as a volunteer? Why (not)?", m: "I would work there because I love animals. Also, it is a good way to help in the holidays.", k: ["would|wouldn't|would not", "because|reason|also|first|second"], min: 2 }],
        tipp: "Use: I would / I wouldn't … because … Also, …" }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D liest du einen englischen Text und gibst auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen muss. Du übersetzt <b>nicht Wort für Wort</b>. Erst fragen: Für wen? Was ist wichtig? Was kann ich weglassen? Der Aushang enthält auch <b>Nebeninformationen</b>, die deine Mutter nicht braucht. Dann schreibst du kurz und klar. Ein Wörterbuch darf helfen. Das Wort <button class=\"term\" data-t=\"firebane\">fire ban</button> steht im Glossar.</p>" },
      { art: "text", html: "<p class=\"lead\">Du bist mit deiner Familie auf einem Campingplatz in Australien. Deine Mutter spricht kein Englisch. Am Eingang hängt ein Aushang. <span class=\"de\">Der Platz und der Ort sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u1-qf-camp-m" },
      { art: "mc", id: "mc-d", tag: "Ankreuzen", titel: "Was lässt du weg?", lead: "Deine Mutter will nur wissen, was sie auf dem Platz beachten muss. Kreuze an.",
        fragen: [
          { q: "Welche Information aus dem Aushang brauchst du für deine Mutter nicht?", o: ["Man kann Fahrräder für fünfzehn Dollar am Tag mieten.", "Wilde Tiere darf man nicht füttern.", "Flaschen kommen in die grüne Tonne.", "Müll gehört in die Tonnen am Tor."], a: 0,
            e: "Der Fahrradverleih ist eine Nebeninformation. Die anderen drei sind Regeln, die deine Mutter beachten muss." }
        ] },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an die Eltern", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Hallo Mama, hier ist das Wichtigste vom Aushang:"],
          ["Von ", { g: "zehn" }, " Uhr abends bis sieben Uhr morgens ist Ruhe."],
          ["Feuer ist nur in den ", { g: "Feuerstellen" }, " erlaubt. An sehr heißen Tagen darf man nur ", { g: "Gaskocher" }, " benutzen."],
          ["Hunde müssen an der ", { g: "Leine" }, " bleiben. Wir müssen den Platz vor ", { g: "elf" }, " Uhr verlassen."]
        ], extra: ["Zelten", "Mülltonnen"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Was ist verboten und warum?", lead: "Schreibe deiner Mutter in zwei bis drei deutschen Sätzen, was auf dem Platz verboten ist. Nenne auch, <b>warum</b> man die Tiere nicht füttern soll.",
        fragen: [{ q: "Was ist auf dem Platz verboten?", m: "Man darf die wilden Tiere nicht füttern, weil sie krank werden und die Angst vor Menschen verlieren können. Feuer ist nur in den Feuerstellen erlaubt, nie neben den Zelten. Hunde müssen an der Leine bleiben.", k: ["Tiere|Tier|füttern|fütter", "krank|Angst", "Feuer|Zelt|Zelten|Feuerstelle", "Hund|Hunde|Leine"], min: 3 }],
        tipp: "Suche im Aushang die Wörter „do not“, „never“, „only“ und „must“. Schreibe nur das Wichtigste." },
      { art: "offen", id: "challenge-d", m7: true, tag: "Plus · Mama fragt nach", titel: "Mama fragt nach", lead: "Mama fragt: „Wir wollen abends ein Lagerfeuer machen und die Kinder im Bach baden lassen – geht das?“ Antworte ihr auf Deutsch.",
        fragen: [{ q: "Dürfen wir Feuer machen und die Kinder baden lassen?", m: "Feuer ist nur in den Feuerstellen erlaubt, und an sehr heißen Tagen gibt es ein Feuerverbot. Im Bach baden dürfen die Kinder, aber unter zwölf Jahren nur mit einem Erwachsenen.", k: ["Feuerstelle|Feuerstellen|Feuerverbot|heiß", "Bach|baden|schwimmen", "erwachsene|erwachsenen|erwachsener|begleit|dabei", "zwölf|12|unter"], min: 3 }],
        tipp: "Suche im Aushang die Wörter fire und swim." }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus einer Textsorte eine andere, zum Beispiel aus <b>Zeichen und Schildern</b> ganze <b>Regelsätze</b>. Lies die Vorlage genau. Schreibe vollständige Sätze mit <b>must / mustn't / don't have to</b> oder <b>Please don't …</b>. Achte auf den Unterschied: <i>mustn't</i> = verboten, <i>don't have to</i> = nicht nötig. Eine gute Antwort ist richtig und verständlich.</p>" },
      { art: "karten", karten: [{ ic: "🔥", titel: "Fires", text: "forbidden" }, { ic: "🥾", titel: "Path", text: "stay on it" }, { ic: "🐨", titel: "Animals", text: "do not feed or touch" }, { ic: "🗑️", titel: "Rubbish", text: "take it home" }, { ic: "🎟️", titel: "Entrance", text: "free" }] },
      { art: "luecke", id: "luecke-e", tag: "Complete", titel: "Rules at Wirra Reserve", lead: "Complete the rules with words from the box. <span class=\"de\">Zwei Ausdrücke bleiben übrig.</span>",
        absaetze: [
          ["You ", { g: "mustn't" }, " light a fire in the reserve."],
          ["You ", { g: "must" }, " stay on the path, because the plants are easy to damage."],
          ["You ", { g: "don't have to" }, " pay to enter the reserve – it is free."],
          ["Please ", { g: "don't" }, " feed the animals."]
        ], extra: ["doesn't", "could"] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "Write three more rules", lead: "Write three <b>more</b> rules for the reserve as full sentences: one about rubbish, one about touching the animals and one idea of your own. Use <b>You must …</b>, <b>You mustn't …</b> or <b>Please don't …</b>.",
        fragen: [{ q: "Write three more rules for the reserve.", m: "You must take your rubbish home. You mustn't touch the animals. Please don't play loud music.", k: ["must|have to|mustn't|don't", "rubbish|touch|animals|music|noise|quiet|dog|dogs|plants|flowers"], min: 2 }],
        tipp: "Look at the pictures for rubbish and animals. Then add one rule of your own, for example about noise." },
      { art: "offen", id: "challenge-e", m7: true, tag: "Plus · Explain", titel: "A rule with a reason", lead: "Write a rule with <b>if</b> and give a reason with <b>because</b>. <span class=\"de\">Zum Beispiel: If you …, … will …, because …</span>",
        fragen: [{ q: "Write a rule with if and because.", m: "If you leave your rubbish in the reserve, animals will get ill, because they eat it.", k: ["if", "will|'ll|must|can't|mustn't", "because"], min: 3 }],
        tipp: "After if we use the present: If you leave …, … will … (not: will leave)." }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F schreibst du einen Text zu einem Auftrag. Du bekommst Punkte für <b>Inhalt</b> (alle Punkte des Auftrags) und für <b>Sprache</b> (richtige, abwechslungsreiche Sätze). Bei einer E-Mail gehören <b>Anrede, Anliegen, Fragen, Gruß und dein Name</b> dazu. Verbinde Sätze mit <i>because, although, so that</i>. Zähle zum Schluss die Wörter.</p>" },
      { art: "text", html: "<p class=\"lead\">Your class wants to stay three nights at the <b>Banksia Hostel</b> in July. You write an e-mail. The hostel is invented. <span class=\"de\">Zuerst eine kleine Übung.</span></p>" },
      { art: "mc", id: "mc-f", tag: "Tick", titel: "Be polite", lead: "Tick the correct answer. <span class=\"de\">Was ist höflich und richtig?</span>",
        fragen: [
          { q: "How do you end an e-mail that starts with “Dear Sir or Madam”?", o: ["Yours faithfully, Alex Green", "See you, Alex", "Bye bye!", "Alex says thanks."], a: 0, e: "Dear Sir or Madam → Yours faithfully. Dein Name steht unter dem Gruß." }
        ] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write the e-mail", min: 60,
        auftrag: "<p><b>Write an e-mail</b> to the Banksia Hostel (about 60 to 70 words).</p><ul><li>Say that your class would like to stay three nights in July and give the number of students (twenty-two).</li><li>Ask <b>two questions</b> (for example: the price, breakfast, a bus to the hostel).</li><li>Tell the hostel that two students do not eat meat and explain what you need.</li><li>Start and end the e-mail correctly and write your name.</li></ul>",
        starter: ["Dear Sir or Madam,", "I am writing because …", "Could you tell me whether …?", "Two of the students …, so …", "Thank you very much.", "Yours faithfully,"],
        kriterien: ["Die E-Mail beginnt mit einer Anrede (Dear …).", "Sie sagt, dass die Klasse (zweiundzwanzig Schülerinnen und Schüler) drei Nächte im Juli bleiben möchte.", "Sie stellt zwei höfliche Fragen.", "Sie nennt den Wunsch wegen fleischloser Mahlzeiten.", "Sie endet mit Gruß und Name.", "Die Sätze sind vollständig und richtig geschrieben und teilweise mit because / although verbunden."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The six parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I ", { g: "listen" }, " to people talking and watch out for corrections."],
          ["In Part C I ", { g: "read" }, " a text and decide: true, false or not in the text."],
          ["In Part D I tell a person in ", { g: "German" }, " what an English text says."],
          ["In Part F I ", { g: "write" }, " an e-mail or a story myself."]
        ], extra: ["speak", "draw"] }
    ] }
  ],
  weiter: { text: "Well done! You tried all six parts of the exam with longer texts and exam-style tasks. In the next units the tasks get longer – with less help." }
});
