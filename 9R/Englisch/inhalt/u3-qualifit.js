/* Englisch 9R · Unit 3 Discover South Africa · Quali-Fit: die sechs Prüfungsteile A bis F in klein
   (A Listening: Interview, die falsche Angabe finden; B Language in use: Wortbildung, past progressive und present perfect;
   C Reading: Aussagen ordnen und Belegstellen; D Mediation: Krankenhaus, Regeln in einer deutschen Nachricht erklären;
   E Text and media: Notizen → kurzer Bericht; F Writing: Text über ein Vorbild – kombiniert, weniger Hilfen)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Südafrika: Unfall und Polizei, Vorbilder, Leben junger Menschen, im Krankenhaus). Grammatik der Unit: past progressive mit while/when, present perfect mit for/since.
   Texte: „A small accident at Oak Corner“ (texte/u3/qualifit-listening.js), „My role model“ (texte/u3/qualifit-reading.js),
   „Visiting hours on Ward Four“ (texte/u3/qualifit-mediation.js) – Radio, Markt, Gruppe, Krankenhaus und Personen sind erfunden.
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u3-qualifit",
  titel: "Quali-Fit: Unit 3",
  einleitung: "You know the six parts of the exam. This time the tasks are <b>mixed</b> and you get <b>fewer hints</b>. The topics come from Unit 3: an accident and the police, role models, young people and the hospital. The grammar in part B is the past progressive (with <i>while</i> and <i>when</i>) and the present perfect with <i>for</i> and <i>since</i>.",
  zeit: "etwa 55 Minuten",
  ziele: ["🎧 I can find the wrong detail in an interview.", "📝 I can build new words and use the past progressive and the present perfect.", "📖 I can put statements in order and find lines in a text.", "✉️ I can explain rules in German, turn notes into a report and write about a role model."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    wordbuilding: ["word building", "Wortbildung: Aus einem Grundwort in Klammern bildest du ein neues Wort, zum Beispiel care → careful."],
    pastprog: ["past progressive", "Das past progressive besteht aus was oder were und der -ing-Form. Es beschreibt, was gerade im Gange war, als etwas anderes geschah."],
    perfect: ["present perfect", "Das present perfect besteht aus have oder has und der dritten Verbform. Mit for nennst du, wie lange etwas dauert, mit since, wann es angefangen hat."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>Bei einem Interview wird oft eine <b>falsche Angabe</b> gesucht. Lies zuerst alle Sätze. Beim Hören hakst du ab, was stimmt, und merkst dir die Stelle, die <b>nicht</b> zum Gehörten passt. Achte auf Zahlen, Körperteile und Zeitangaben – sie werden gern geändert.</p>" },
      { art: "text", html: "<p class=\"lead\">A student reporter from a school radio in an invented South African town talks to a witness. <span class=\"de\">Hör zu und löse die Aufgaben.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u3-qf-listen", fragen: [
        { art: "mc", id: "mc-a", titel: "Find the wrong sentence", lead: "Tick the sentence that is wrong. <span class=\"de\">In jeder Aufgabe passt ein Satz nicht zum Interview.</span>",
          fragen: [
            { q: "About the accident:", o: ["A bus hit a dog on the corner.", "Mr Radebe was putting out oranges when he heard a noise.", "The rider of the motorbike fell.", "A dog was crossing the road."], a: 0, e: "Es war ein kleines Motorrad, und der Hund lief über die Straße. Ein Bus war nicht beteiligt." },
            { q: "About the rider:", o: ["He broke his leg.", "He wore a helmet.", "A woman from the bakery brought a blanket.", "Mr Radebe called an ambulance."], a: 0, e: "Der Fahrer verletzte sich am Arm, nicht am Bein." },
            { q: "About the police and the street:", o: ["Mr Radebe has lived on the street for two years.", "The police arrived after about ten minutes.", "The dog has lived with the baker's family since last winter.", "Mr Radebe thinks that cars drive too fast."], a: 0, e: "Mr Radebe wohnt schon zwölf Jahre in der Straße." }
          ] },
        { art: "luecke", id: "luecke-a", tag: "Complete", titel: "Notes", lead: "Listen again and complete the notes. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Time of the accident: about ", { g: "seven" }, " o'clock in the morning."],
            ["The rider hurt his ", { g: "arm" }, "."],
            ["The helper with the blanket came from the ", { g: "bakery" }, "."],
            ["The rider is at home now. His arm is in a ", { g: "cast" }, "."]
          ], extra: ["leg", "school"] }
      ] }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ergänzt du Wörter und bildest <button class=\"term\" data-t=\"wordbuilding\">neue Wörter</button> aus dem Grundwort in Klammern: Suche zuerst, welche Wortart fehlt (Nomen, Adjektiv, Adverb). Für die Zeiten gilt: Das <button class=\"term\" data-t=\"pastprog\">past progressive</button> (was / were + -ing) beschreibt die Hintergrundhandlung, die kurze Handlung steht im simple past. Das <button class=\"term\" data-t=\"perfect\">present perfect</button> mit <b>for</b> (Zeitraum) oder <b>since</b> (Startpunkt) beschreibt, was bis heute gilt.</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "Small stories", lead: "Complete the sentences with words from the box. <span class=\"de\">Es sind ganze Verbformen. Zwei bleiben übrig.</span>",
        absaetze: [
          ["My uncle ", { g: "was cooking" }, " dinner when the lights went out."],
          ["The girls ", { g: "were playing" }, " volleyball in the yard when the school bell rang."],
          ["My neighbour ", { g: "has lived" }, " in the same house for many years."],
          ["We ", { g: "have known" }, " each other since the first day of school."],
          ["It started to rain while I ", { g: "was waiting" }, " at the bus stop."]
        ], extra: ["were cooking", "have lived"] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort aus dem Wort in Klammern.</span>",
        fragen: [
          { q: "Please be ___ when you cross the road. (care)", o: ["careful", "caring", "carefully", "careless"], a: 0, e: "Nach „be“ steht ein Adjektiv. „Careless“ wäre das Gegenteil und passt nicht zu „Please“." },
          { q: "Wearing a helmet is a good idea. It is ___ to ride without one. (danger)", o: ["dangerous", "dangerously", "dangers", "endangered"], a: 0, e: "Nach „is“ folgt ein Adjektiv: danger + -ous = dangerous." },
          { q: "The baby was asleep, so he closed the door ___. (quiet)", o: ["quietly", "quiet", "quietness", "quieter"], a: 0, e: "Das Wort beschreibt, wie er die Tür schloss, also ein Adverb: quiet + -ly." }
        ] },
      { art: "mc", id: "mc-b2", tag: "Tick", titel: "Tenses", lead: "Tick the correct sentence or word. <span class=\"de\">Achte auf while, when, for und since.</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["I was walking home when I saw the accident.", "I walked home when I was seeing the accident.", "I was walk home when I saw the accident.", "I walking home when I saw the accident."], a: 0, e: "Das Gehen dauert länger (was walking), das Sehen ist kurz (saw)." },
          { q: "My aunt has worked at the clinic ___ last spring.", o: ["since", "for", "ago", "during"], a: 0, e: "Last spring ist ein Startpunkt, deshalb since." },
        ] }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>Bei <b>Aussagen ordnen</b> suchst du zuerst die Aussage, die am Anfang des Textes steht, und danach die, die als Nächstes passiert. Achte auf Zeitangaben und auf Wörter wie <i>soon, then, at first, now</i>. Bei Fragen zum Text merkst du dir <b>Stichwörter</b> der Frage und suchst sie im Text – oft stehen sie in anderen Worten dort.</p>" },
      { art: "text", html: "<p class=\"lead\">Tumelo wrote this text for his school magazine. The people and the group are invented. <span class=\"de\">Lies den Text einmal ganz.</span></p>" },
      { art: "lesetext", lesetext: "u3-qf-read" },
      { art: "ordnen", id: "ordnen-c", tag: "Put in order", titel: "What happens in the text?", lead: "Put the statements in the order of the text. <span class=\"de\">Welche Aussage kommt zuerst?</span>",
        schritte: ["Tumelo says who his role model is and where she lives.", "Mrs Fourie sees rubbish on the beach and cleans it alone.", "More people join her and she leads the group.", "Tumelo learns that one person can start something big.", "Tumelo wants to start a clean-up in his park."] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap ALL the lines with the answer. <span class=\"de\">Tippe alle Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-qf-read",
        fragen: [
          { q: "What was Mrs Fourie doing when she saw the rubbish?", zeilen: [8, 9], e: "She was walking along the beach with her dog." },
          { q: "Why did Tumelo first join the group?", zeilen: [18, 19], e: "He was interested in the free sandwiches after the work." },
          { q: "What goes into different boxes?", zeilen: [14, 15], e: "Glass, plastic and metal." },
          { q: "How long has Tumelo known Mrs Fourie?", zeilen: [24, 25], e: "He has known her for ten years." }
        ] },
      { art: "tf", id: "tf-c", tag: "Tick", titel: "True or false?", lead: "Tick true or false.",
        aussagen: [
          ["At first Mrs Fourie cleaned the beach alone.", true],
          ["The group meets every Saturday.", false],
        ] },
      { art: "mc", id: "mc-c", tag: "Tick", titel: "Between the lines", lead: "Tick the correct answer.",
        fragen: [
          { q: "Why is Mrs Fourie a role model for Tumelo?", o: ["She starts things and does not wait for the others.", "She was a famous teacher.", "She pays the volunteers.", "She shouts and people follow."], a: 0, e: "Tumelo schreibt, dass sie einfach anfängt und die Leute folgen. Sie schreit nie jemanden an." }
        ] },
      { art: "offen", id: "challenge-c", m7: true, tag: "Challenge · freiwillig", titel: "Your turn", lead: "Write one sentence about a person you have known for a long time. Use <b>for</b> or <b>since</b>.",
        fragen: [{ q: "Write one sentence.", m: "I have known my best friend since primary school.", k: ["have|has", "for|since"], min: 2 }] }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D gibst du auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen muss. Frage dich: Was ist für <b>diese</b> Person wichtig – und was nicht? Gib nur die Regeln weiter, die sie betreffen, und schreibe in ganzen Sätzen und freundlich. Du übersetzt nicht Wort für Wort, und ein Wörterbuch darf helfen.</p>" },
      { art: "text", html: "<p class=\"lead\">Deine Oma ist aus Deutschland zu Besuch in Südafrika. Ihre Freundin Anele liegt nach einer kleinen Operation im Krankenhaus. Oma möchte sie besuchen, versteht aber kein Englisch. Das Krankenhaus hat dir diese E-Mail geschickt. <span class=\"de\">Das Krankenhaus ist erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u3-qf-hospital" },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an Oma", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Liebe Oma,"],
          ["Anele darf Besuch bekommen. Du kannst jeden Tag von ", { g: "drei" }, " bis ", { g: "fünf" }, " Uhr am Nachmittag kommen."],
          ["Es dürfen aber nur ", { g: "zwei" }, " Besucher gleichzeitig zu ihr."],
          ["Melde dich zuerst an der ", { g: "Anmeldung" }, " an. Dort bekommst du eine ", { g: "Besucherkarte" }, "."],
          ["An der Tür der Station musst du dir die ", { g: "Hände" }, " desinfizieren. Dein Handy stellst du bitte ", { g: "leise" }, "."],
          ["Anele verträgt keine ", { g: "Nüsse" }, ". Ein Buch oder eine Zeitschrift ist dagegen in Ordnung."]
        ], extra: ["gestern", "vorsichtig"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Blumen und Geschenke", lead: "Oma fragt: „Kann ich Blumen mitbringen? Und was kann ich Anele mitbringen?“ Antworte ihr in zwei deutschen Sätzen.",
        fragen: [{ q: "Was antwortest du Oma?", m: "Blumen darfst du nicht mitbringen, weil manche Patienten Allergien haben. Du kannst ein Buch, eine Zeitschrift oder einen kleinen Snack mitbringen, aber ohne Nüsse.", k: ["blumen", "nicht|keine|verboten|darfst nicht", "allergi", "buch|bücher|zeitschrift|snack"], min: 3 }] },
      { art: "offen", id: "challenge-d", m7: true, tag: "Challenge · freiwillig", titel: "Mit dem Auto", lead: "Oma fragt: „Wenn ich mit dem Auto komme – wo und wie lange kann ich parken?“ Antworte ihr auf Deutsch.",
        fragen: [{ q: "Was antwortest du Oma?", m: "Du kannst zwei Stunden vor dem Haupttor parken.", k: ["zwei", "parken|park|auto|stunden", "haupttor|tor|eingang"], min: 2 }] }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus Notizen einen <b>kurzen Bericht</b>. Schreibe ganze Sätze, nicht Stichwörter. Ein Bericht über etwas, das schon passiert ist, steht in der <b>Vergangenheit</b> (<i>we learned, the music stopped</i>). Was gerade im Gange war, als etwas anderes geschah, steht im past progressive. Jeder Punkt der Notizen sollte im Bericht vorkommen.</p>" },
      { art: "text", html: "<p class=\"lead\">Khanyi went to a dance workshop and wants to write a short report for the school newsletter. The youth centre is invented. <span class=\"de\">Das sind ihre Notizen.</span></p><ul><li><b>Place:</b> Maple Court Youth Centre</li><li><b>When:</b> Saturday afternoon</li><li><b>Who:</b> 24 young people</li><li><b>First hour:</b> learned three new steps</li><li><b>Problem:</b> sound system stopped while we were practising the last step</li><li><b>Solution:</b> sang and clapped</li><li><b>End (5 pm):</b> show for the parents, tired but happy</li></ul>" },
      { art: "luecke", id: "luecke-e", tag: "Complete", titel: "The report", lead: "Complete the report with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["On Saturday afternoon twenty-four young people ", { g: "took" }, " part in a dance workshop at Maple Court Youth Centre."],
          ["We ", { g: "learned" }, " three new steps in the first hour."],
          ["While we ", { g: "were practising" }, " the last step, the sound system ", { g: "stopped" }, "."],
          ["So the group sang and ", { g: "clapped" }, " to keep the rhythm."]
        ], extra: ["take", "learn"] },
      { art: "mc", id: "mc-e", tag: "Tick", titel: "Report style", lead: "Tick the best sentence for the report. <span class=\"de\">Welcher Satz passt in einen Bericht?</span>",
        fragen: [
          { q: "Which sentence is best?", o: ["The sound system stopped after one hour, so the group sang and clapped.", "sound broke lol we sang", "The sound system breaks and we sing.", "The sound system is a problem for me."], a: 0, e: "Ein Bericht steht in der Vergangenheit und besteht aus vollständigen Sätzen ohne Umgangssprache." }
        ] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "The end of the workshop", lead: "Write two sentences about the <b>end</b> of the workshop (5 pm).",
        fragen: [{ q: "Write two sentences.", m: "At five o'clock we showed our dance to the parents. We were tired, but we were very happy.", k: ["parents|mums|dads|family|families|show|showed|dance", "five|5|end|finally|last", "tired|happy|fun|proud"], min: 2 }] }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F bekommst du <b>Stichworte</b> und schreibst einen zusammenhängenden Text. Du bekommst Punkte für <b>Inhalt</b> (alle Stichworte kommen vor, es gibt einen Anfang und einen Schluss) und für <b>Sprache</b> (richtige Sätze und Zeiten). Was bis heute gilt, steht im <b>present perfect</b>, ein Ereignis aus der Vergangenheit im simple past.</p>" },
      { art: "text", html: "<p class=\"lead\">Dumisani has to write a text about his role model for the school magazine. He has made notes about his aunt. The aunt is invented. <span class=\"de\">Das sind seine Stichworte.</span></p>" },
      { art: "karten", karten: [{ ic: "🚑", titel: "Job", text: "My aunt drives an ambulance. She has done this job for twelve years." }, { ic: "🌧️", titel: "Last winter", text: "She was driving home in the rain when she saw a car in the ditch. She stopped and helped the driver." }, { ic: "📚", titel: "Since then", text: "She has taught first aid at our youth club since that day." }, { ic: "💬", titel: "Why a role model?", text: "She stays calm and helps people." }] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write about Dumisani's role model", min: 60,
        auftrag: "<p><b>Write the text for the school magazine</b> about Dumisani's aunt (about 60 words).</p><ul><li>Say who she is and what she does.</li><li>Tell what happened last winter (simple past and past progressive).</li><li>Say what she has done since then (present perfect with for or since).</li><li>Explain why she is a role model.</li></ul>",
        starter: ["My role model is my aunt. She …", "Last winter she was driving …", "Since then she has …", "She is my role model because …"],
        kriterien: ["Alle vier Stichworte kommen im Text vor.", "Das Ereignis im Winter steht in der Vergangenheit, auch mit past progressive.", "Mit for oder since steht mindestens ein Satz im present perfect.", "Der Text sagt, warum die Tante ein Vorbild ist.", "Die Sätze sind vollständig und richtig geschrieben.", "Es sind mindestens sechzig Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The six parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I listen and find the ", { g: "wrong" }, " detail."],
          ["In Part B I build new ", { g: "words" }, " and use the right tenses."],
          ["In Part C I put statements in ", { g: "order" }, " and find lines in a text."],
          ["In Part D I explain the rules to a person in ", { g: "German" }, "."],
          ["In Part E I turn ", { g: "notes" }, " into a short report."],
          ["In Part F I write a text about a role ", { g: "model" }, " myself."]
        ], extra: ["draw", "speak"] }
    ] }
  ],
  weiter: { text: "Well done! You tried all six parts again, with mixed tasks and fewer hints. Next time you can try it with a time limit." }
});

