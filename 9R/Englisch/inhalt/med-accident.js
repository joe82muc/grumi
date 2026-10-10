/* Englisch 9R · Dolmetschen · Interpreting: Reporting an accident
   (Dolmetschen in einem Gespräch zwischen einer deutschsprachigen und einer englischsprachigen Person: Sinn statt Wörter, "She says …" oder
   Ich-Form, Gesehenes und Vermutetes unterscheiden, Zeiten, Kennzeichen und Nummern genau, nachfragen, ein Wort umschreiben;
   Richtung Deutsch → Englisch und Englisch → Deutsch, Rollenspiel zu dritt)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.2 Hörverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Tante Karin erzählt, was sie gesehen hat“ (texte/med/med-accident-tante.js), „Constable Hendricks answers“ (texte/med/med-accident-police.js) –
   Straße, Polizistin und Tante sind erfunden; die Seite behauptet keine echten Abläufe oder Gesetze. */
D7Kit.seite({
  id: "med-accident",
  titel: "Interpreting: Reporting an accident",
  einleitung: "You are on holiday in Cape Town with your aunt Karin. You have seen a hit-and-run accident, and the police want to talk to you both. Aunt Karin speaks <b>no English</b>, the police officer speaks <b>no German</b> – so <b>you</b> are the interpreter. Interpreting is <b>not</b> translating word for word: you pass on the meaning, you keep times, numbers and letters exact, and you show what is <b>sure</b> and what is only a <b>guess</b>.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what an interpreter does.", "🗣️ I pass on a message with “She says …” or in the I-form.", "🔢 I keep times, numbers and letters exact.", "👀 I show what a person saw and what she only thinks."],
  quiz: { profi: "Interpreting pro" },
  glossar: {
    interpret: ["to interpret", "Dolmetschen: Du hilfst zwei Personen, die nicht dieselbe Sprache sprechen, in einem Gespräch. Du gibst den Sinn weiter, nicht jedes Wort."],
    witness: ["witness", "Ein Zeuge oder eine Zeugin ist eine Person, die gesehen hat, was passiert ist, und der Polizei davon erzählen kann."],
    statement: ["witness statement", "Eine Zeugenaussage ist ein Text, in dem steht, was ein Zeuge gesehen hat. Man liest ihn durch und unterschreibt ihn."],
    reverse: ["to reverse", "Ein Auto fährt rückwärts, wenn es nach hinten rollt, zum Beispiel beim Ausparken."],
    describe: ["to describe a word", "Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „the light that blinks when a car turns“."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">You are in Cape Town with your aunt <b>Karin</b>. Yesterday afternoon you were both in <b>Bree Lane</b> when a car drove away after an accident. Today you go to the police. <b>Constable Hendricks</b> speaks only English, Aunt Karin speaks only German. You sit between them and <button class=\"term\" data-t=\"interpret\">interpret</button> – you are a <button class=\"term\" data-t=\"witness\">witness</button>, too.</p><p>The street and the people are invented. The page is for practising language – it does not describe real police rules.</p>" },
      { art: "merke", kopf: "INTERPRETING – THE RULES", html: "<ul><li><b>Meaning, not words.</b> Pass on what is important, and leave out small things.</li><li>You can say “<b>She says</b> that … / She would like to know if …” <b>or</b> speak in the <b>I-form</b>: “I saw a red car.” Both are fine.</li><li>Do not add anything and do not change anything.</li><li><b>Times, numbers and letters must be exact</b> – for example on a number plate.</li><li>Show what was <b>seen</b> and what is only <b>thought</b>: “She saw …” / “She thinks … but she is not sure.”</li><li>If you don't understand: <b>ask</b> politely. If you don't know a word: <button class=\"term\" data-t=\"describe\">describe it</button>.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["witness", "Zeuge, Zeugin"], ["witness statement", "Zeugenaussage"], ["number plate", "Autokennzeichen"], ["to reverse", "rückwärtsfahren"], ["to knock over", "umstoßen"], ["parked", "geparkt"], ["to drive away", "wegfahren"], ["to sign", "unterschreiben"]] },
      { art: "tf", id: "regeln-tf", tag: "True or false?", titel: "What does an interpreter do?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An interpreter tells the police what he or she thinks about the accident.", false],
          ["An interpreter says what the person saw and what the person only thinks.", true],
          ["A letter or a number on a number plate may be a little different.", false],
          ["You can say “She says …” or speak in the I-form.", true],
          ["Shopping and weather are usually not important for the police.", true]
        ] }
    ] },
    { kurz: "Useful phrases", ober: "Station 2", titel: "Useful phrases", teile: [
      { art: "sort", id: "phrasen-sort", tag: "Sort", titel: "Sure, not sure, or help?", lead: "Put each phrase into the right box. <span class=\"de\">Sicher, nicht sicher oder um Hilfe bitten?</span>",
        buckets: ["She is sure", "She is not sure", "Asking for help"],
        items: [{ t: "She saw that …", b: 0 }, { t: "She says for sure that …", b: 0 }, { t: "She is certain that …", b: 0 },
                { t: "She thinks that …", b: 1 }, { t: "Maybe …", b: 1 }, { t: "She is not sure, but …", b: 1 },
                { t: "Could you repeat that, please?", b: 2 }, { t: "What does “witness” mean?", b: 2 }, { t: "Could you speak more slowly, please?", b: 2 }] },
      { art: "luecke", id: "phrasen-luecke", tag: "Useful phrases", titel: "Complete the phrases", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She says ", { g: "that" }, " the car was red."],
          ["She would like to know ", { g: "if" }, " she must come back."],
          ["She ", { g: "thinks" }, " that the driver was a man, but she is not sure."],
          ["Could you ", { g: "spell" }, " the name of the street, please?"],
          ["Sorry, I did not ", { g: "understand" }, " the last number."]
        ], extra: ["yesterday", "police"] },
      { art: "mc", id: "phrasen-mc", tag: "Think", titel: "What do you say?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Tante Karin: „Das Kennzeichen war C A vier acht zwei.“ You are not sure you heard the numbers right. What do you do?", o: ["Du fragst Tante Karin noch einmal nach den Zahlen.", "Du schreibst irgendwelche Zahlen auf.", "Du sagst der Polizistin, dass die Zahlen nicht wichtig sind.", "Du lässt die Zahlen weg."], a: 0,
            e: "Numbers and letters on a plate must be exact. A short question is better than a wrong plate." },
          { q: "Which phrase shows that Aunt Karin is NOT sure?", o: ["She thinks that the driver was a man.", "She saw that the driver was a man.", "She says for sure that the driver was a man.", "She knows that the driver was a man."], a: 0,
            e: "“She thinks that …” tells the police it is only an idea. The other phrases sound like facts." }
        ] }
    ] },
    { kurz: "German to English", ober: "Station 3", titel: "German → English", teile: [
      { art: "text", html: "<p class=\"lead\">Constable Hendricks asks: “<b>Can she tell me what happened?</b>” Aunt Karin talks – and she tells you a lot. You have to decide what the police need. <span class=\"de\">Lies, was Tante Karin sagt. Nicht alles ist für die Polizei wichtig. Achte darauf, was sie gesehen hat und was sie nur glaubt.</span></p>" },
      { art: "lesetext", lesetext: "med-accident-tante" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Seen, thought or not important?", lead: "Put each piece of information into the right box. <span class=\"de\">Was hat sie gesehen? Was vermutet sie nur? Was kannst du weglassen?</span>",
        buckets: ["Important – she saw it", "Important – she only thinks so", "I can leave it out"],
        items: [{ t: "Gestern um zehn nach vier in der Bree Lane", b: 0 }, { t: "Ein kleiner roter Wagen fuhr rückwärts", b: 0 }, { t: "Das geparkte Motorrad wurde umgestoßen", b: 0 },
                { t: "Der Wagen fuhr in Richtung Meer weg", b: 0 }, { t: "Das Kennzeichen beginnt mit C A, dann vier, acht, zwei", b: 0 }, { t: "Niemand wurde verletzt", b: 0 },
                { t: "Der Fahrer war wohl ein Mann", b: 1 }, { t: "Der Fahrer hat das Motorrad vielleicht nicht gesehen", b: 1 },
                { t: "Zwei Tüten mit Obst vom Markt", b: 2 }, { t: "Es war sehr heiß", b: 2 }, { t: "Das Café ist wunderschön", b: 2 }, { t: "Der Wind hat nichts gebracht", b: 2 }] },
      { art: "mc", id: "beste-saetze", tag: "Choose the best sentence", titel: "What do you say to the police?", lead: "Tick the sentence that is correct, clear and polite. <span class=\"de\">Es gibt kein Richtig im Wortlaut – aber nur ein Satz stimmt mit allen Angaben überein.</span>",
        fragen: [
          { q: "Tante Karin: „Gestern um zehn nach vier waren wir in der Bree Lane.“", o: ["Yesterday at ten past four we were in Bree Lane.", "Yesterday at ten to four we were in Bree Lane.", "This morning at ten past four we were in Bree Lane.", "Yesterday was ten past four we in the Bree Lane."], a: 0,
            e: "Time and day are exact here: “ten past four” is 4.10, and it was yesterday. The last option copies the German word order." },
          { q: "Tante Karin: „Das Kennzeichen habe ich nur zum Teil gesehen: erst C und A, dann vier, acht, zwei.“", o: ["She saw only a part of the number plate: C, A, then four, eight, two.", "She saw the whole number plate: C, A, then four, eight, two.", "She saw only a part of the number plate: C, A, then four, two, eight.", "She saw only a part of the number plate: S, A, then four, eight, two."], a: 0,
            e: "Letters and numbers must be exact, and the police must know that it is only a part of the plate." },
          { q: "Tante Karin: „Der Fahrer war ein Mann, glaube ich, aber sicher bin ich nicht.“", o: ["She thinks the driver was a man, but she is not sure.", "The driver was a man. She is sure.", "She thinks the driver was a woman, but she is not sure.", "The driver, a man, I believe it, but sure I am not."], a: 0,
            e: "The police must hear that this is only an idea. The second option makes a guess into a fact, the last one is word for word." },
          { q: "Tante Karin: „Dann ist der Wagen einfach weitergefahren, in Richtung Meer.“", o: ["Then the car just drove away towards the sea.", "Then the car just drove away from the sea.", "Then the car stopped near the sea.", "Then the car went further in direction sea."], a: 0,
            e: "The direction is important for the police. “Towards the sea” is the way the car went." }
        ] },
      { art: "offen", id: "unfall", tag: "Your words", titel: "Tell Constable Hendricks", lead: "Tell the police what happened. Write two or three English sentences. <span class=\"de\">Nur das Wichtige: wann, wo, welches Auto, was passiert ist.</span>",
        fragen: [{ q: "What did your aunt see?", m: "Yesterday at ten past four, a small red car reversed out of a parking space in Bree Lane. It knocked over a parked motorbike and drove away towards the sea. Nobody was hurt.", k: ["ten past four|4.10|4:10|16:10|four ten|ten minutes past four", "Bree Lane|bree lane|Bree|bree", "red", "car", "motorbike|motorcycle|bike", "knocked|hit|fell|over|down", "away|left|sea"], min: 5 }],
        tipp: "You can start with “She says that …” or with “Yesterday a red car …”. Or use the I-form: “I saw …”." },
      { art: "offen", id: "kennzeichen", tag: "Your words", titel: "Sure or not sure?", lead: "The police ask about the number plate and the driver. Pass on both in two or three English sentences. <span class=\"de\">Zeige, was sicher ist und was nicht.</span>",
        fragen: [{ q: "What does your aunt know about the plate and the driver?", m: "She saw only the first part of the number plate: C, A, four, eight, two. The rest was dirty. She thinks the driver was a man, but she is not sure.", k: ["plate|number", "four|4", "eight|8", "two|2", "dirty|rest|other|not see|could not|cannot|can't|not all|part", "think|thinks|believe|not sure|not certain|maybe|perhaps"], min: 5 }],
        tipp: "Say the letters and numbers one by one. Use “She thinks …” for a guess." }
    ] },
    { kurz: "English to German", ober: "Station 4", titel: "English → German", teile: [
      { art: "text", html: "<p class=\"lead\">Now Constable Hendricks answers. Aunt Karin waits and wants to know what she says. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Du erklärst Tante Karin danach auf Deutsch, was wichtig ist.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: "med-accident-police", fragen: [
        { art: "luecke", id: "notizen", titel: "Notes for Aunt Karin", lead: "Listen and complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The car drove away towards the ", { g: "sea" }, "."],
            ["Nobody was ", { g: "hurt" }, "."],
            ["Sign the statement at the main police ", { g: "station" }, "."],
            ["Sign it by ", { g: "Friday" }, " at twelve o'clock."],
            ["The reference number is ", { g: "9047" }, "."]
          ], extra: ["Monday", "9074"] },
        { art: "tf", id: "hoer-tf", titel: "True or false?", lead: "Listen again. Tick true or false.",
          aussagen: [
            ["Somebody was hurt in the accident.", false],
            ["The owner of the motorbike needs a report for his insurance.", true],
            ["The police officer wants to know if Aunt Karin is sure about the driver.", true],
            ["A witness is a person who saw what happened.", true],
            ["Aunt Karin can sign the statement at home.", false],
            ["The reference number is nine, zero, four, seven.", true]
          ] },
        { art: "mc", id: "deutsch-saetze", titel: "Best German sentence", lead: "Tick the best German sentence for Aunt Karin. <span class=\"de\">Sinn weitergeben, nichts verändern.</span>",
          fragen: [
            { q: "Constable Hendricks: “A witness is a person who saw what happened.”", o: ["Ein Zeuge ist eine Person, die gesehen hat, was passiert ist.", "Ein Zeuge ist ein Polizist, der den Unfall untersucht.", "Ein Zeuge ist die Person, die den Unfall verursacht hat.", "Ein Zeuge ist eine Person, die nicht dabei war."], a: 0,
              e: "A witness only saw the accident. The other options give the word a different meaning." },
            { q: "Constable Hendricks: “She has to sign the statement at the main police station by Friday at twelve o'clock.”", o: ["Du musst die Aussage bis Freitag um zwölf Uhr im Hauptrevier unterschreiben.", "Du musst die Aussage bis Freitag um zehn Uhr im Hauptrevier unterschreiben.", "Du musst die Aussage bis Mittwoch um zwölf Uhr im Hauptrevier unterschreiben.", "Du musst die Aussage ab Freitag um zwölf Uhr im Hotel unterschreiben."], a: 0,
              e: "Place, day and time must be exact. Each other option changes one of them." },
            { q: "Constable Hendricks: “It helps me to know what she saw and what she only thinks.”", o: ["Es hilft mir, wenn du sagst, was du sicher gesehen hast und was du nur vermutest.", "Du sollst alles erzählen, als ob du es sicher gesehen hättest.", "Du sollst nur das erzählen, was du vermutest.", "Es ist egal, ob du etwas gesehen hast oder nicht."], a: 0,
              e: "The police want to know what is sure and what is a guess. Never make a guess sound like a fact." }
          ] },
        { art: "offen", id: "dolmetschen-de", titel: "Tell Aunt Karin in German", lead: "Tante Karin fragt: „Was hat sie gesagt?“ Erkläre es ihr <b>auf Deutsch</b> in drei bis fünf Sätzen: Verletzte, Versicherung, Zeugenaussage, wo und bis wann unterschreiben. Nicht Wort für Wort.",
          fragen: [{ q: "Was hat Constable Hendricks gesagt?", m: "Tante Karin, die Polizistin sagt: Zum Glück wurde niemand verletzt, aber der Besitzer des Motorrads braucht einen Bericht für seine Versicherung. Sie schreibt auf, was du gesehen hast. Das nennt man Zeugenaussage. Du musst sie bis Freitag um zwölf Uhr im Hauptrevier in der Innenstadt unterschreiben. Die Nummer des Falls ist neun, null, vier, sieben.", k: ["Zeugenaussage|zeugenaussage|Aussage|aussage|aufschreiben|aufschreibt|aufnehmen|Bericht|bericht", "unterschreib|Unterschrift|unterschrift", "Revier|revier|Polizeistation|Wache|wache|Innenstadt|Stadtmitte|Zentrum", "Freitag|freitag", "zwölf|12|Mittag|mittag", "Nummer|nummer|9047|neun, null, vier, sieben", "Versicherung|versicherung", "verletzt|verletzt"], min: 5 }],
          tipp: "Sprich Tante Karin direkt an („du“). Nenne den Tag, die Uhrzeit und die Nummer genau." }
      ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your turn: interpret!", teile: [
      { art: "text", html: "<p class=\"lead\">Now play a conversation in a group of three. It is Thursday. Aunt Karin and you are back at the police station. Aunt Karin has come to read and sign her statement. On the day of the accident she also took a <b>photo of the fallen motorbike</b> with her phone, and she wants to give it to the police. Take turns: everybody plays each role once. <b>Now interpret!</b> <span class=\"de\">Spielt das Gespräch zu dritt. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Tante Karin (speaks only German)</h4><ul><li>Du sagst: Du bist gekommen, um deine Aussage zu lesen und zu unterschreiben.</li><li>Du hast ein Foto vom umgestürzten Motorrad gemacht.</li><li>Du fragst, ob du es per E-Mail schicken kannst.</li><li>Du fragst, ob du eine Kopie der Aussage bekommst.</li></ul></div><div class=\"sprech-karte b\"><h4>Constable Hendricks (speaks only English)</h4><ul><li>Ask her to read the statement and to check the number plate.</li><li>Ask if she has a photo on her phone.</li><li>Say she can send it by e-mail today.</li><li>Say she gets a copy of the statement at the desk.</li></ul></div><div class=\"sprech-karte c\"><h4>You (interpreter)</h4><ul><li>Pass on everything in both directions.</li><li>Use “She says …” or the I-form.</li><li>Ask again if you don't understand.</li><li>Describe a word if it is missing.</li></ul></div></div><div class=\"phrasen\"><span>She says that …</span><span>She would like to know if …</span><span>Could you repeat that, please?</span><span>She is not sure, but …</span><span>Is that right?</span></div>" },
      { art: "offen", id: "challenge-wort", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Aunt Karin looks at her photo and says: „Auf dem Foto sieht man, dass der Blinker kaputt ist.“ You don't know the word for “Blinker”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Constable Hendricks?", m: "In the photo you can see that the light for turning left or right is broken. It is the small orange light that blinks when you turn.", k: ["light|lamp|orange|flash|blink", "turn|turning|left|right", "broken|damaged|not work|does not work|doesn't work", "photo|picture"], min: 3 }],
        tipp: "Don't translate the word. Say what it is: a light that …" },
      { art: "offen", id: "challenge-sicher", m7: true, tag: "Challenge", titel: "Sure or not sure?", lead: "Aunt Karin says: „Mir ist noch etwas eingefallen: Hinten am Fenster klebte ein Aufkleber, ich glaube, mit einem Hund drauf, aber sicher bin ich nicht.“ Pass it on in two English sentences. <span class=\"de\">Zeige klar, was sie gesehen hat und was sie nur glaubt.</span>",
        fragen: [{ q: "What do you say to Constable Hendricks?", m: "She has remembered something else. There was a sticker on the back window of the car. She thinks there was a dog on it, but she is not sure.", k: ["sticker|label|picture", "back|rear", "window", "dog", "think|thinks|believe|not sure|maybe|perhaps"], min: 4 }],
        tipp: "Use “She thinks …” or “She is not sure, but …” for the dog." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of interpreting", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How interpreting works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I do not translate word for word, I pass on the ", { g: "meaning" }, "."],
          ["I say clearly what a person has ", { g: "seen" }, " and what she only thinks."],
          ["Times, numbers and letters must be ", { g: "correct" }, "."],
          ["Small things like the weather I can leave ", { g: "out" }, "."],
          ["If I miss a number, I ask the person to say it ", { g: "again" }, "."]
        ], extra: ["add", "wrong"] }
    ] }
  ],
  weiter: { text: "Well done! You can interpret in a conversation – from German into English and from English into German. Remember: meaning first, numbers and letters exact, and always show what is sure and what is only a guess." }
});
