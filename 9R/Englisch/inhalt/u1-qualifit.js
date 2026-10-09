/* Englisch 9R · Unit 1 Around Australia · Quali-Fit: die sechs Prüfungsteile A bis F in klein
   (A Listening, B Language in use, C Reading, D Mediation, E Text and media, F Writing – kurz, viel Rückmeldung, Operatoren erklärt)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Australien: Reisen, Gesundheit, Umwelt). Grammatik der Unit: simple past, will-future, if-Sätze Typ I, present progressive (Revision).
   Texte: „A day trip to Mount Wirra“ (texte/u1/qualifit-listening.js), „Possum Hill Wildlife Rescue“ (texte/u1/qualifit-reading.js),
   „Mulga Creek Campsite – Our rules“ (texte/u1/qualifit-mediation.js) – Hostel, Park, Tierstation, Campingplatz und Personen sind erfunden.
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u1-qualifit",
  titel: "Quali-Fit: Unit 1",
  einleitung: "The final exam has six parts, A to F. Here you try all six in a small version – with topics from Unit 1: travelling, being ill, animals and the environment. In every part you learn <b>what the task wants</b> and you get help after each answer.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I know the six parts of the exam.", "🔎 I understand what words like “tick”, “match” and “complete” ask me to do.", "📝 I can solve small tasks of every part.", "✉️ I can write a short, polite e-mail."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    operator: ["task word", "Arbeitsanweisung: Das erste Wort im Auftrag sagt, was du tun sollst. Tick = ankreuzen, Match = zuordnen, Complete = ergänzen, Answer = beantworten, Write = schreiben."],
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen aus einem englischen Text auf Deutsch weiter – für eine bestimmte Person, nur das Wichtige."],
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    heading: ["heading", "Überschrift. Sie sagt in wenigen Wörtern, worum es im Absatz geht."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil A hörst du ein Gespräch. <b>Erst die Aufgaben lesen</b>, dann hören – so weißt du, auf welche Zahl, welchen Ort oder welchen Namen du achten musst. Bei Kurzantworten schreibst du <b>nur ein Wort oder eine Zahl</b>. Die Rechtschreibung zählt.</p>" },
      { art: "text", html: "<p class=\"lead\">Two young people stay in a hostel. Tomorrow they go on a day trip to a national park. The hostel, the park and the people are invented. <span class=\"de\">Lies die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u1-qf-listen", fragen: [
        { art: "formular", id: "karte-a", titel: "Answer the questions", lead: "Listen and complete the notes. Write <b>one word or one number</b>. <span class=\"de\">Hör zu und ergänze. Nur ein Wort oder eine Zahl.</span>",
          karte: "<p>Complete the notes about the day trip.</p>",
          kopf: "Day trip to Mount Wirra – notes",
          felder: [
            { label: "Minibus leaves at", loesung: ["7.15", "7:15", "7.15 am", "7:15 am", "quarter past seven", "a quarter past seven", "15 past 7"] },
            { label: "Meeting place: in front of the", loesung: ["kitchen", "the kitchen"] },
            { label: "Name of the guide", loesung: ["Bell", "Mr Bell", "Mister Bell", "Mr. Bell"] },
            { label: "Park pass costs (dollars)", loesung: ["12", "twelve", "$12", "12 dollars", "twelve dollars"] },
            { label: "Bring water and a", loesung: ["hat", "a hat"], wahl: ["hat", "camera", "torch"] }
          ] },
        { art: "mc", id: "mc-a", titel: "Tick the correct answer", lead: "Tick one answer. <span class=\"de\">Tick = ankreuzen.</span>",
          fragen: [
            { q: "What will the two friends do if it rains?", o: ["They will go to the visitor centre.", "They will stay at the hostel.", "They will swim in the waterfall.", "They will go home early."], a: 0,
              e: "Hugo says: If it rains, we will go to the visitor centre instead." },
            { q: "Why can they not swim at the waterfall?", o: ["It is not allowed because the rocks are slippery.", "The water is too warm.", "The waterfall is too far away.", "They have no time."], a: 0,
              e: "Hugo says it is not allowed – the rocks are slippery." }
          ] }
      ] }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ergänzt du einen Text mit Wörtern aus dem <button class=\"term\" data-t=\"wordbox\">Wortkasten</button>. <b>Lies den ganzen Satz</b>, bevor du ein Wort einsetzt: Passt die Zeit (Gegenwart, Vergangenheit, Zukunft)? Es bleiben Wörter übrig. Außerdem prüft Teil B die <b>Wortbildung</b>: aus einem Wort wird ein neues (sun → sunny).</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "A wildlife park", lead: "Complete the text with words from the box. <span class=\"de\">Complete = ergänzen. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Last summer we ", { g: "visited" }, " a small wildlife park. We ", { g: "went" }, " there by bus."],
          ["The ranger showed us a baby koala ", { g: "and" }, " a sleepy wombat."],
          ["We stayed all day ", { g: "because" }, " the park was so interesting."],
          ["Tomorrow we ", { g: "will" }, " come back with our friends. We will have a picnic ", { g: "in" }, " the garden if it is sunny."]
        ], extra: ["visit", "goes"] },
      { art: "paare", id: "wortbildung", tag: "Match", titel: "Word building", lead: "Match the words. <span class=\"de\">Match = zuordnen. Aus welchem Wort entsteht welches?</span>",
        paare: [["sun", "sunny"], ["danger", "dangerous"], ["to visit", "visitor"], ["care", "careful"]] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort.</span>",
        fragen: [
          { q: "The path is very ___. (danger)", o: ["dangerous", "dangerful", "dangering", "dangerly"], a: 0, e: "danger + -ous = dangerous. Das Wort ist ein Adjektiv und beschreibt den Weg." },
          { q: "Many ___ come to the park every year. (visit)", o: ["visitors", "visiting", "visited", "visits"], a: 0, e: "A person who visits is a visitor. Viele Personen: visitors." }
        ] }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C liest du einen Text mit Zeilennummern. Bei <b>Überschriften zuordnen</b> fragst du dich: Worum geht es im ganzen Absatz? Nicht ein einzelnes Wort entscheidet. Bei Fragen zum Text gibst du die <b>Zeilen</b> an, in denen die Antwort steht.</p>" },
      { art: "lesetext", lesetext: "u1-qf-read" },
      { art: "paare", id: "ueberschriften", tag: "Match", titel: "Headings", lead: "Match each <button class=\"term\" data-t=\"heading\">heading</button> with the paragraph. <span class=\"de\">Welche Überschrift passt zu welchem Absatz?</span>",
        paare: [["Paragraph 1", "A hospital for wild animals"], ["Paragraph 2", "Watch the vet at work"], ["Paragraph 3", "Ways to support the team"], ["Paragraph 4", "Plan your visit"]] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-qf-read",
        fragen: [
          { q: "At what time does the vet check the animals?", zeilen: [6, 7], e: "Every day at eleven o'clock.", tipp: "Look at the second paragraph." },
          { q: "Who can work as a volunteer in the holidays?", zeilen: [11, 12], e: "Young people over fourteen.", tipp: "Look for the word volunteers." },
          { q: "Which animals may not come to the station?", zeilen: [17, 18], e: "Dogs are not allowed.", tipp: "Look at the last sentence." }
        ] },
      { art: "tf", id: "tf-c", tag: "Tick", titel: "True or false?", lead: "Tick true or false.",
        aussagen: [
          ["Some animals come to the station because of a bush fire.", true],
          ["Visitors can feed the animals.", false],
          ["The entrance to the station is free.", true]
        ] }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D liest du einen englischen Text und gibst auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen muss. Du übersetzt <b>nicht Wort für Wort</b>. Erst fragen: Für wen? Was ist wichtig? Dann schreibst du kurz und klar. Ein Wörterbuch darf helfen.</p>" },
      { art: "text", html: "<p class=\"lead\">Du bist mit deiner Familie auf einem Campingplatz in Australien. Deine Mutter spricht kein Englisch. Am Eingang hängt ein Aushang. <span class=\"de\">Der Platz und der Ort sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u1-qf-camp" },
      { art: "mc", id: "mc-d", tag: "Ankreuzen", titel: "Was braucht deine Mutter?", lead: "Kreuze die richtige Antwort an.",
        fragen: [
          { q: "Was sagst du deiner Mutter?", o: ["Nur die Regeln, die für sie wichtig sind, kurz und auf Deutsch.", "Den ganzen Aushang Wort für Wort.", "Nur den Namen des Campingplatzes.", "Nichts, sie muss selbst lesen."], a: 0,
            e: "Sprachmittlung heißt: das Wichtige auswählen und für die Person verständlich weitergeben." }
        ] },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an die Eltern", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Hallo Mama, hier sind die wichtigsten Regeln auf dem Platz:"],
          ["Ab ", { g: "zehn" }, " Uhr abends ist Nachtruhe."],
          ["Feuer darf man nur in den ", { g: "Feuerstellen" }, " machen, nie neben den Zelten."],
          ["Müll gehört in die ", { g: "Mülltonnen" }, " am Tor."],
          ["Wilde Tiere darf man nicht ", { g: "füttern" }, ". Hunde müssen an der ", { g: "Leine" }, " bleiben."],
          ["Am Abreisetag müssen wir vor ", { g: "elf" }, " Uhr den Platz verlassen."]
        ], extra: ["Autos", "Taschen"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Was ist verboten?", lead: "Schreibe deiner Mutter in ein bis zwei deutschen Sätzen, was auf dem Platz verboten ist.",
        fragen: [{ q: "Was ist auf dem Platz verboten?", m: "Man darf die wilden Tiere nicht füttern und kein Feuer neben den Zelten machen. Hunde dürfen nicht frei herumlaufen, sie müssen an die Leine.", k: ["Tiere|Tier|füttern|fütter", "Feuer|Zelt|Zelten|Feuerstelle", "Hund|Hunde|Leine"], min: 2 }],
        tipp: "Suche im Aushang die Wörter „do not“, „never“ und „must“. Schreibe nur das Wichtigste." },
      { art: "offen", id: "challenge-d", m7: true, tag: "Challenge · freiwillig", titel: "Mama fragt nach", lead: "Mama fragt: „Dürfen die Kinder im Bach baden?“ Antworte ihr auf Deutsch in einem Satz.",
        fragen: [{ q: "Dürfen die Kinder im Bach baden?", m: "Ja, aber Kinder unter zwölf Jahren dürfen nur mit einem Erwachsenen baden.", k: ["ja|erlaubt|dürfen", "erwachsene|erwachsenen|erwachsener|begleit|dabei", "zwölf|12|unter"], min: 3 }],
        tipp: "Suche im Aushang das Wort swim." }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus einer Textsorte eine andere, zum Beispiel aus <b>Zeichen und Schildern</b> ganze <b>Regelsätze</b>. Lies die Vorlage genau. Schreibe vollständige Sätze mit <b>must / mustn't</b> oder <b>Please don't …</b>. Eine gute Antwort ist richtig und verständlich.</p>" },
      { art: "karten", karten: [{ ic: "🏃", titel: "Running", text: "forbidden" }, { ic: "🚿", titel: "Shower", text: "before swimming" }, { ic: "🍔", titel: "Food", text: "not in the pool area" }, { ic: "👶", titel: "Small children", text: "with an adult" }] },
      { art: "ordnen", id: "ordnen-e", tag: "Put in order", titel: "Build the rule", lead: "Put the words in the correct order. <span class=\"de\">Bilde einen Satz zum Bild 🏃.</span>",
        schritte: ["Please", "don't", "run", "near", "the", "water"] },
      { art: "luecke", id: "luecke-e", tag: "Complete", titel: "Rules at Gum Tree Pool", lead: "Complete the rules with words from the box. <span class=\"de\">Zwei Ausdrücke bleiben übrig.</span>",
        absaetze: [
          ["You ", { g: "must" }, " shower before you swim."],
          ["You ", { g: "mustn't" }, " eat in the pool area."],
          ["Please ", { g: "don't" }, " run near the water."],
          ["Children under eight ", { g: "have to" }, " be with an adult."]
        ], extra: ["can", "doesn't"] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "Write two rules", lead: "Write two rules as full sentences: <b>You must …</b> / <b>Please don't …</b>. Use the pictures.",
        fragen: [{ q: "Write two rules for the pool.", m: "You must shower before you swim. Please don't run near the water.", k: ["must|have to|mustn't", "please|don't|mustn't", "shower|swim|run|eat|food|adult|water"], min: 2 }],
        tipp: "Pick two pictures. Start like this: You must … / Please don't …" },
      { art: "offen", id: "challenge-e", m7: true, tag: "Challenge · freiwillig", titel: "A third rule", lead: "Write a third rule for the pool with <b>if</b>. <span class=\"de\">Zum Beispiel: If you …, you will …</span>",
        fragen: [{ q: "Write a rule with if.", m: "If you run near the water, you will fall down.", k: ["if", "will|'ll|must|can't|mustn't"], min: 2 }],
        tipp: "After if we use the present: If you run, you will … (not: will run)." }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F schreibst du einen Text zu einem Auftrag. Du bekommst Punkte für <b>Inhalt</b> (alle Punkte des Auftrags) und für <b>Sprache</b> (richtige Sätze). Bei einer E-Mail gehören <b>Anrede, Anliegen, Fragen, Gruß und dein Name</b> dazu. Zähle zum Schluss die Wörter.</p>" },
      { art: "text", html: "<p class=\"lead\">Your class wants to stay three nights at the <b>Banksia Hostel</b> in July. You write an e-mail. The hostel is invented. <span class=\"de\">Zuerst zwei kleine Übungen.</span></p>" },
      { art: "ordnen", id: "ordnen-f", tag: "Put in order", titel: "Parts of an e-mail", lead: "Put the parts of the e-mail in order. <span class=\"de\">Wie baust du eine E-Mail auf?</span>",
        schritte: ["Dear Sir or Madam,", "I am writing because we would like to stay three nights in July.", "Could you tell me how much a bed costs?", "Is breakfast included?", "Thank you very much.", "Yours faithfully, Alex Green"] },
      { art: "mc", id: "mc-f", tag: "Tick", titel: "Be polite", lead: "Tick the polite sentence. <span class=\"de\">Welcher Satz ist höflich?</span>",
        fragen: [
          { q: "Which question is polite?", o: ["Could you tell me how much a bed costs?", "Tell me the price now!", "How much, hostel?", "I want to know the price."], a: 0, e: "“Could you tell me …?” is polite and correct." },
          { q: "How do you end an e-mail that starts with “Dear Sir or Madam”?", o: ["Yours faithfully, Alex Green", "See you, Alex", "Bye bye!", "Alex says thanks."], a: 0, e: "Dear Sir or Madam → Yours faithfully. Dein Name steht unter dem Gruß." }
        ] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write the e-mail", min: 50,
        auftrag: "<p><b>Write an e-mail</b> to the Banksia Hostel (about 50 words).</p><ul><li>Say that your class would like to stay three nights in July.</li><li>Ask two questions (for example: the price, breakfast, a bus to the hostel).</li><li>Start and end the e-mail correctly and write your name.</li></ul>",
        starter: ["Dear Sir or Madam,", "I am writing because …", "Could you tell me …?", "Is … included?", "Thank you very much.", "Yours faithfully,"],
        kriterien: ["Die E-Mail beginnt mit einer Anrede (Dear …).", "Sie sagt, dass die Klasse drei Nächte im Juli bleiben möchte.", "Sie stellt zwei höfliche Fragen.", "Sie endet mit Gruß und Name.", "Die Sätze sind vollständig und richtig geschrieben."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The six parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I ", { g: "listen" }, " to people talking."],
          ["In Part B I complete a text with the right ", { g: "words" }, "."],
          ["In Part C I ", { g: "read" }, " a text and match headings to the paragraphs."],
          ["In Part D I tell a person in ", { g: "German" }, " what an English text says."],
          ["In Part E I turn one kind of text into another, for example signs into ", { g: "rules" }, "."],
          ["In Part F I ", { g: "write" }, " an e-mail or a story myself."]
        ], extra: ["speak", "draw"] }
    ] }
  ],
  weiter: { text: "Well done! You tried all six parts of the exam. In the next units the tasks get longer – with less help." }
});
