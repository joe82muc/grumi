/* Englisch 9R · Dolmetschen · Interpreting: At the hostel
   (Dolmetschen in einem Gespräch zwischen einer deutschsprachigen und einer englischsprachigen Person: Sinn statt Wörter, "She says …" oder
   Ich-Form, Wichtiges auswählen, Zahlen, Zeiten und Preise genau, höflich bleiben, nachfragen, ein Wort umschreiben; Richtung Deutsch → Englisch
   und Englisch → Deutsch, Rollenspiel zu dritt)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.2 Hörverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Mama erzählt, was sie braucht“ (texte/med/med-hostel-mutter.js), „Tebogo answers“ (texte/med/med-hostel-rezeption.js) –
   Hostel, Rezeptionist und Mutter sind erfunden; Preise und Zeiten gelten nur für dieses erfundene Hostel. */
D7Kit.seite({
  id: "med-hostel",
  titel: "Interpreting: At the hostel",
  einleitung: "You arrive late in the evening at the <b>Jacaranda Backpackers</b> hostel in Johannesburg with your mother. She speaks <b>no English</b>, the receptionist speaks <b>no German</b> – so <b>you</b> are the interpreter. Interpreting is <b>not</b> translating word for word: you pass on the meaning, you leave out side details, and you keep numbers, times and prices exact.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what an interpreter does.", "🗣️ I pass on a message with “She says …” or in the I-form.", "✂️ I leave out small side details.", "🙋 I stay polite, ask again or describe a word when I am stuck."],
  quiz: { profi: "Interpreting pro" },
  glossar: {
    interpret: ["to interpret", "Dolmetschen heißt: Du hilfst zwei Personen, die nicht dieselbe Sprache sprechen, in einem Gespräch. Du gibst weiter, was gesagt wird, und zwar den Sinn und nicht jedes Wort."],
    locker: ["locker", "Ein Schließfach ist ein kleiner abschließbarer Schrank, in dem man Pass, Geld und andere Wertsachen aufbewahrt."],
    lounge: ["lounge", "Die Lounge ist ein Aufenthaltsraum mit Sofas, in dem Gäste warten oder sich ausruhen können."],
    rand: ["rand", "Der Rand ist das Geld in Südafrika. Die Preise im Gespräch gelten nur für dieses erfundene Hostel."],
    describe: ["to describe a word", "Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a small cupboard with a key“ für ein Schließfach."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">It is late in the evening. You and your mother <b>Sabine</b> have just arrived at the <b>Jacaranda Backpackers</b> hostel in Johannesburg. You booked a room with two beds. The receptionist is <b>Tebogo</b>. Sabine speaks only German, Tebogo speaks only English. <b>You</b> stand between them and <button class=\"term\" data-t=\"interpret\">interpret</button>.</p><p>The hostel and the people are invented. The prices and times are only true for this hostel.</p>" },
      { art: "merke", kopf: "INTERPRETING – THE RULES", html: "<ul><li><b>Meaning, not words.</b> Pass on what the other person needs to know.</li><li>You can say “<b>She says</b> that … / She would like to know if …” <b>or</b> speak in the <b>I-form</b>: “Is our room ready yet?” Both are fine.</li><li>Do not add anything. Leave out small side details, but never something important.</li><li><b>Times, prices and numbers must be exact.</b></li><li>Stay polite, even when something goes wrong.</li><li>If you don't understand: <b>ask</b>. If you don't know a word: <button class=\"term\" data-t=\"describe\">describe it</button>.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["locker", "Schließfach"], ["lounge", "Aufenthaltsraum"], ["laundry room", "Waschraum"], ["washing machine", "Waschmaschine"], ["cleaner", "Reinigungskraft"], ["main entrance", "Haupteingang"], ["guest", "Gast"], ["to leave (a bus)", "abfahren"]] },
      { art: "tf", id: "regeln-tf", tag: "True or false?", titel: "What does an interpreter do?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An interpreter must repeat every German word in English.", false],
          ["An interpreter may leave out a side detail like a nice picture on the wall.", true],
          ["Prices and times have to be exact.", true],
          ["You may use the I-form instead of “She says …”.", true],
          ["If you don't know a word, you stop talking.", false]
        ] }
    ] },
    { kurz: "Useful phrases", ober: "Station 2", titel: "Useful phrases", teile: [
      { art: "sort", id: "phrasen-sort", tag: "Sort", titel: "Which phrase for what?", lead: "Put each phrase into the right box. <span class=\"de\">Weitergeben, um Hilfe bitten oder ein Wort umschreiben?</span>",
        buckets: ["Passing it on", "Asking for help", "Describing a word"],
        items: [{ t: "She says that …", b: 0 }, { t: "She would like to know when …", b: 0 }, { t: "He tells us that …", b: 0 },
                { t: "Excuse me, could you say that again?", b: 1 }, { t: "What does “deposit” mean?", b: 1 }, { t: "Sorry, I did not understand the number.", b: 1 },
                { t: "It is a small cupboard with a key.", b: 2 }, { t: "It is a room where you can wait and relax.", b: 2 }] },
      { art: "luecke", id: "phrasen-luecke", tag: "Useful phrases", titel: "Complete the phrases", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She says ", { g: "that" }, " she is very tired."],
          ["She would like to know ", { g: "when" }, " the bus leaves."],
          ["Could you ", { g: "say" }, " the number again, please?"],
          ["Sorry, I did not ", { g: "understand" }, " that."],
          ["It is a small cupboard ", { g: "with" }, " a key."]
        ], extra: ["tomorrow", "cheap"] },
      { art: "mc", id: "phrasen-mc", tag: "Think", titel: "What do you say?", lead: "Tick the best answer.",
        fragen: [
          { q: "Tebogo speaks fast and you did not catch a number. What do you say?", o: ["Excuse me, could you say the number again, please?", "I think it was fourteen. I will tell her fourteen.", "Please speak German.", "Yes, yes, okay."], a: 0,
            e: "A short, polite question is better than a guess. A wrong number can cause real trouble." },
          { q: "Your mother is annoyed: „Das ist ja unmöglich! Wir sind seit Stunden unterwegs, und jetzt gibt es kein Zimmer!“ What do you say to Tebogo?", o: ["My mother is not happy, because we have travelled for hours. Could you tell us when the room will be ready, please?", "Everything is fine. We are happy to wait.", "You have to hurry up now.", "Your hostel is not good."], a: 0,
            e: "You pass on what she means – she is not happy, and she wants to know when the room is ready – but in a polite way. You do not hide her problem, and you do not add anything rude." }
        ] }
    ] },
    { kurz: "German to English", ober: "Station 3", titel: "German → English", teile: [
      { art: "text", html: "<p class=\"lead\">Tebogo asks: “<b>How can I help you?</b>” Your mother talks – a lot. You have to decide what Tebogo needs. <span class=\"de\">Lies, was Mama sagt. Nicht alles ist für den Rezeptionisten wichtig.</span></p>" },
      { art: "lesetext", lesetext: "med-hostel-mutter" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht Tebogo? Was kannst du weglassen?</span>",
        buckets: ["Important for Tebogo", "I can leave it out"],
        items: [{ t: "Der Flug hatte zwei Stunden Verspätung", b: 1 }, { t: "Sie haben ein Zweibettzimmer für zwei Nächte gebucht", b: 0 }, { t: "Der Koffer ist sehr schwer", b: 1 },
                { t: "Sie möchte wissen, ob das Zimmer schon fertig ist", b: 0 }, { t: "Das Bild an der Wand ist schön", b: 1 }, { t: "Sie möchte wissen, wo man Pass und Geld einschließen kann", b: 0 },
                { t: "Sie ist heute zu müde für Kaffee", b: 1 }, { t: "Sie fragt nach einer Waschmaschine und dem Preis", b: 0 }, { t: "Sie fragt, wann und wo übermorgen früh der Bus zum Flughafen fährt", b: 0 }] },
      { art: "mc", id: "beste-saetze", tag: "Choose the best sentence", titel: "What do you say to Tebogo?", lead: "Tick the sentence that is correct, clear and polite. <span class=\"de\">Es gibt kein Richtig im Wortlaut – aber nur ein Satz stimmt mit allen Angaben überein.</span>",
        fragen: [
          { q: "Mama: „Wir haben ein Zweibettzimmer für zwei Nächte gebucht.“", o: ["We have booked a room with two beds for two nights.", "We have booked a room with two beds for three nights.", "We have a Zweibettzimmer, and we want it now!", "We booked a room of two beds since two nights."], a: 0,
            e: "The room type and the number of nights are both right here. With “She says …” or in the I-form, the facts must stay the same." },
          { q: "Mama: „Frag den Herrn bitte, ob es schon fertig ist.“", o: ["She would like to know if our room is ready yet.", "She would like to know if our room is ready tomorrow.", "Is the gentleman ready already?", "Tell her quickly if it is ready, please!"], a: 0,
            e: "Polite and correct. One option changes the time, one asks about the wrong thing, and one sounds rude." },
          { q: "Mama: „Ich möchte wissen, wo ich meinen Pass und mein Geld einschließen kann.“", o: ["She would like to know where she can lock away her passport and her money.", "She would like to know where the bank is for her money.", "Where can she close her pass and her gift?", "Give her a safe place for her passport now!"], a: 0,
            e: "The question is about a safe place for passport and money. The other options change the question, copy the German word for word or are rude." },
          { q: "Mama: „Frag ihn, wann der Bus fährt und wo er abfährt.“", o: ["She would like to know when the bus leaves and where it leaves from.", "She would like to know when the bus leaves tomorrow morning.", "Where does the bus go, and when do I pay?", "She asks that the bus comes when and where."], a: 0,
            e: "There are two questions: when and where. Remember, Mama wants to know about the day after tomorrow, not tomorrow." }
        ] },
      { art: "offen", id: "buchung", tag: "Your words", titel: "Tell Tebogo", lead: "Tell Tebogo about the booking and ask if the room is ready. Write two or three English sentences. <span class=\"de\">Nur das Wichtige: Zimmer, Nächte, ist es fertig?</span>",
        fragen: [{ q: "How can I help you?", m: "We have booked a room with two beds for two nights. Is our room ready yet? If not, how long do we have to wait?", k: ["book|booked|reservation|reserved", "two beds|twin|two-bed|room with two", "two nights|2 nights", "ready|finished|done", "wait|long|when"], min: 4 }],
        tipp: "You can start with “We have booked …” (I-form) or with “My mother has booked …”." },
      { art: "offen", id: "fragen", tag: "Your words", titel: "Pass on the questions", lead: "Mama has three more questions: valuables, washing machine, bus. Pass them on to Tebogo in two or three English sentences. <span class=\"de\">Alle drei Fragen, höflich.</span>",
        fragen: [{ q: "What does your mother want to know?", m: "She would like to know where she can lock away her passport and her money. Is there a washing machine, and how much does it cost? When does the bus to the airport leave the day after tomorrow, and where does it leave from?", k: ["passport|money|valuables|lock|safe|locker", "washing|laundry|machine", "cost|much|price|pay", "bus|airport", "when|time|what time", "where|from"], min: 5 }],
        tipp: "Start like this: She would like to know … / Or in the I-form: Where can I …? Is there …?" }
    ] },
    { kurz: "English to German", ober: "Station 4", titel: "English → German", teile: [
      { art: "text", html: "<p class=\"lead\">Now Tebogo answers. Your mother waits and wants to know what he says. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Du erklärst Mama danach auf Deutsch, was wichtig ist.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: "med-hostel-rezeption", fragen: [
        { art: "luecke", id: "notizen", titel: "Notes for Mama", lead: "Listen and complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The room will be ready at ", { g: "half past ten" }, "."],
            ["Until then, wait in the ", { g: "lounge" }, "."],
            ["The locker is number ", { g: "twenty-three" }, "."],
            ["One wash costs ", { g: "forty" }, " rand."],
            ["The airport bus leaves at ", { g: "a quarter past six" }, " in the morning."]
          ], extra: ["garden", "twenty"] },
        { art: "tf", id: "hoer-tf", titel: "True or false?", lead: "Listen again. Tick true or false.",
          aussagen: [
            ["The room is not ready because a guest left late and the cleaner is still working.", true],
            ["Tebogo offers a cup of tea while the guests wait.", true],
            ["The lockers are in the guests' rooms.", false],
            ["The washing machine is free.", false],
            ["The laundry room is on the first floor.", true],
            ["The airport bus leaves from the main entrance.", true]
          ] },
        { art: "mc", id: "deutsch-saetze", titel: "Best German sentence", lead: "Tick the best German sentence for your mother. <span class=\"de\">Sinn weitergeben, nichts verändern.</span>",
          fragen: [
            { q: "Tebogo: “The room will be ready at half past ten. Until then, you can wait in our lounge.”", o: ["Das Zimmer ist um halb elf fertig. Bis dahin können wir im Aufenthaltsraum warten.", "Das Zimmer ist um halb zehn fertig. Bis dahin können wir im Aufenthaltsraum warten.", "Das Zimmer ist schon fertig, wir können jetzt hinein.", "Das Zimmer ist um halb elf fertig. Bis dahin müssen wir draußen warten."], a: 0,
              e: "Two things must be right: the time (half past ten is „halb elf“) and the place to wait." },
            { q: "Tebogo: “The laundry room is on the first floor. One wash costs forty rand.”", o: ["Der Waschraum ist im ersten Stock. Einmal waschen kostet vierzig Rand.", "Der Waschraum ist im ersten Stock. Einmal waschen kostet vierzehn Rand.", "Der Waschraum ist im Keller. Einmal waschen kostet vierzig Rand.", "Der Waschraum ist im ersten Stock, und das Waschen ist umsonst."], a: 0,
              e: "Place and price both count. One option has the wrong price, one the wrong place, and one says the opposite about the cost." },
            { q: "Tebogo: “The bus to the airport leaves the day after tomorrow, at a quarter past six in the morning. It leaves from the main entrance.”", o: ["Der Bus zum Flughafen fährt übermorgen um Viertel nach sechs am Haupteingang ab.", "Der Bus zum Flughafen fährt morgen um Viertel nach sechs am Haupteingang ab.", "Der Bus zum Flughafen fährt übermorgen um Viertel vor sechs am Haupteingang ab.", "Der Bus zum Flughafen fährt übermorgen um Viertel nach sechs hinten am Hintereingang ab."], a: 0,
              e: "Day, time and place are all important. Each of the other sentences changes one of them." }
          ] },
        { art: "offen", id: "dolmetschen-de", titel: "Tell Mama in German", lead: "Mama asks: „Was hat er gesagt?“ Erkläre es ihr <b>auf Deutsch</b> in vier bis sechs Sätzen: Zimmer, Schließfach, Waschmaschine, Bus. Nicht Wort für Wort.",
          fragen: [{ q: "Was hat Tebogo gesagt?", m: "Mama, Tebogo sagt, es tut ihm leid: Unser Zimmer ist noch nicht fertig, es wird um halb elf fertig sein. Bis dahin können wir im Aufenthaltsraum warten, und er bringt uns einen Tee. Für Pass und Geld gibt es ein Schließfach, unseres hat die Nummer dreiundzwanzig. Eine Waschmaschine gibt es auch, einmal waschen kostet vierzig Rand. Und der Bus zum Flughafen fährt übermorgen um Viertel nach sechs am Haupteingang ab.", k: ["halb elf|halb 11|10.30|10:30|zehn Uhr dreißig", "Schließfach|schließfach|Spind|spind", "dreiundzwanzig|23", "Waschmaschine|waschmaschine|waschen|Wäsche|wäsche", "vierzig|40", "Viertel nach sechs|viertel nach sechs|6.15|6:15|sechs Uhr fünfzehn", "Haupteingang|haupteingang|Eingang|eingang"], min: 5 }],
          tipp: "Sprich Mama direkt an. Nenne die Uhrzeiten, die Zahl und den Preis genau." }
      ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your turn: interpret!", teile: [
      { art: "text", html: "<p class=\"lead\">Now play a conversation in a group of three. It is the next morning. In the bathroom of your room the <b>light does not work</b>. Sabine also wants to know if somebody can <b>wake you up</b> tomorrow before the early bus, and she would like a <b>second blanket</b>. Take turns: everybody plays each role once. <b>Now interpret!</b> <span class=\"de\">Spielt das Gespräch zu dritt. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Sabine (speaks only German)</h4><ul><li>Du sagst: Das Licht im Bad geht nicht an.</li><li>Du fragst, ob jemand das heute reparieren kann.</li><li>Du fragst, ob euch morgen jemand um halb sechs wecken kann.</li><li>Du hättest gern eine zweite Decke.</li></ul></div><div class=\"sprech-karte b\"><h4>Tebogo (speaks only English)</h4><ul><li>Say sorry about the light.</li><li>Say a repairman comes before lunch. If he can't fix it, the guests can use the shower room on the first floor.</li><li>Say yes: you will knock on the door at half past five.</li><li>Say you will bring a second blanket in ten minutes.</li></ul></div><div class=\"sprech-karte c\"><h4>You (interpreter)</h4><ul><li>Pass on everything in both directions.</li><li>Use “She says …” or the I-form.</li><li>Stay polite and ask again if you don't understand.</li><li>Describe a word if it is missing.</li></ul></div></div><div class=\"phrasen\"><span>She says that …</span><span>She would like to know if …</span><span>Could you say that again, please?</span><span>It is something that …</span><span>Is that right?</span></div>" },
      { art: "offen", id: "challenge-wort", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Sabine says: „Vielleicht ist nur die Glühbirne kaputt.“ You don't know the word for “Glühbirne”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Tebogo?", m: "Maybe the small thing in the lamp that gives light is broken. Could you change it, please?", k: ["light|lamp", "broken|not work|doesn't work|does not work|not working", "small|glass|round|thing|part", "please|could|can"], min: 3 }],
        tipp: "Don't translate the word. Say what it is and what it does." },
      { art: "offen", id: "challenge-nachfragen", m7: true, tag: "Challenge", titel: "You don't know a word", lead: "Tebogo says: “You get a refund for the key when you leave.” You do not know the word “refund”. Write what you say, in one or two English sentences.",
        fragen: [{ q: "What do you say to Tebogo?", m: "Excuse me, what does the word refund mean, please?", k: ["excuse|sorry|pardon", "what does|what is|mean|meaning", "refund|word", "please|could"], min: 3 }],
        tipp: "Be polite and ask about the word. Do not guess what it means." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of interpreting", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How interpreting works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I ", { g: "listen" }, " carefully to what the person says."],
          ["Then I decide what is ", { g: "important" }, " and what I can leave out."],
          ["I pass on the ", { g: "meaning" }, ", and I may use “She says that …” or the I-form."],
          ["I keep times, prices and ", { g: "numbers" }, " exact."],
          ["If I am not sure, I ", { g: "ask" }, " politely."]
        ], extra: ["guess", "copy"] }
    ] }
  ],
  weiter: { text: "Well done! You can interpret in a conversation – from German into English and from English into German. Remember: meaning first, details out, numbers exact, stay polite and ask if you are not sure." }
});
