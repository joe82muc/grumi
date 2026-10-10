/* Englisch 9R · Dolmetschen · Interpreting: At the craft market
   (Dolmetschen in einem Gespräch zwischen einer deutschsprachigen und einer englischsprachigen Person: Sinn statt Wörter, "She says …" oder
   Ich-Form, Wichtiges auswählen, Preise und Zahlen genau, höflich um einen besseren Preis bitten, ein Wort umschreiben; Richtung Deutsch → Englisch
   und Englisch → Deutsch, Rollenspiel zu dritt)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.2 Hörverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Oma sucht ein Geschenk“ (texte/med/med-market-oma.js), „Nokuthula answers“ (texte/med/med-market-seller.js) – Markt, Verkäuferin
   und Oma sind erfunden; die Preise gelten nur für diesen erfundenen Stand. */
D7Kit.seite({
  id: "med-market",
  titel: "Interpreting: At the craft market",
  einleitung: "You are on holiday in Cape Town with your grandma. She wants to buy a present at a craft market. Grandma speaks <b>no English</b>, the seller speaks <b>no German</b> – so <b>you</b> are the interpreter. Interpreting is <b>not</b> translating word for word: you pass on the meaning, and you keep prices and numbers exact.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what an interpreter does.", "🗣️ I pass on a question or a request politely.", "🔢 I keep prices and numbers exact.", "🙋 I describe a word when it is missing."],
  quiz: { profi: "Interpreting pro" },
  glossar: {
    interpret: ["to interpret", "Dolmetschen: Du hilfst zwei Personen, die nicht dieselbe Sprache sprechen, in einem Gespräch. Du gibst weiter, was gesagt wird – nicht Wort für Wort, sondern den Sinn."],
    bead: ["bead", "Eine Perle ist ein kleines Stück Glas oder Holz mit einem Loch in der Mitte. Man fädelt viele davon auf eine Schnur, zum Beispiel für ein Armband."],
    rand: ["rand", "Der Rand ist das Geld in Südafrika. In dieser Aufgabe sind die Preise nur Angaben des erfundenen Stands."],
    describe: ["to describe a word", "Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern. So kommt das Gespräch weiter, und du musst nicht raten."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">You are in Cape Town with your grandma <b>Inge</b>. Today you visit the <b>Old Harbour Craft Market</b>. Inge looks for a present for her neighbour. At one stall the seller is <b>Nokuthula</b>. Inge speaks only German, Nokuthula speaks only English. <b>You</b> stand between them and <button class=\"term\" data-t=\"interpret\">interpret</button>.</p><p>The market, the stall and the people are invented. The prices are only the prices of this stall – they show you how to say numbers exactly in <button class=\"term\" data-t=\"rand\">rand</button>.</p>" },
      { art: "merke", kopf: "INTERPRETING – THE RULES", html: "<ul><li><b>Meaning, not words.</b> Pass on what is important and leave out small talk.</li><li>You can say “<b>She says</b> that … / She would like to know if …” <b>or</b> speak in the <b>I-form</b>: “I am looking for a present.” Both are fine.</li><li>Do not add anything and do not leave out anything important.</li><li><b>Prices, numbers and times must be exact.</b></li><li>Stay polite – also when someone asks for a better price.</li><li>If you don't understand: <b>ask</b>. If you don't know a word: <button class=\"term\" data-t=\"describe\">describe it</button>.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["basket", "Korb"], ["bracelet", "Armband"], ["glass beads", "Glasperlen"], ["grass", "Gras"], ["price", "Preis"], ["together", "zusammen"], ["to pay by card", "mit Karte zahlen"], ["to make", "herstellen"]] },
      { art: "tf", id: "regeln-tf", tag: "True or false?", titel: "What does an interpreter do?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An interpreter can leave out small talk, for example about tired feet.", true],
          ["Prices must be exact.", true],
          ["An interpreter may speak as Inge in the I-form: “I am looking for a present.”", true],
          ["If a word is missing, you stop the conversation.", false],
          ["The interpreter decides for Inge whether she buys something.", false]
        ] }
    ] },
    { kurz: "Useful phrases", ober: "Station 2", titel: "Useful phrases", teile: [
      { art: "sort", id: "phrasen-sort", tag: "Sort", titel: "Which phrase for what?", lead: "Put each phrase into the right box. <span class=\"de\">Weitergeben, nachfragen oder ein Wort umschreiben?</span>",
        buckets: ["Passing it on", "Asking for help", "Describing a word"],
        items: [{ t: "She tells you that …", b: 0 }, { t: "She is asking how long …", b: 0 }, { t: "She wants to know what …", b: 0 },
                { t: "Sorry, I did not catch that.", b: 1 }, { t: "Could you say that once more, please?", b: 1 }, { t: "What do you mean by …?", b: 1 },
                { t: "It is something you use to carry things.", b: 2 }, { t: "It is a thing you wear around your wrist.", b: 2 }, { t: "It is the money you get back after you pay.", b: 2 }] },
      { art: "luecke", id: "phrasen-luecke", tag: "Useful phrases", titel: "Complete the phrases", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She ", { g: "tells" }, " you that she is looking for a present."],
          ["She would like to know how ", { g: "much" }, " the bracelet costs."],
          ["Sorry, I did not ", { g: "catch" }, " that."],
          ["Could you say that ", { g: "once" }, " more, please?"],
          ["What do you ", { g: "mean" }, " by “fits”?"]
        ], extra: ["yesterday", "happy"] },
      { art: "mc", id: "phrasen-mc", tag: "Think", titel: "What do you say?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Nokuthula says a price very fast and you did not catch the number. What do you do?", o: ["Ask: “Sorry, could you say the price again, please?”", "Say a price that sounds right.", "Tell Inge that it is cheap.", "Say nothing and smile."], a: 0,
            e: "A price must be exact. Asking again is part of the job – a guessed number can cost your grandma money." },
          { q: "Inge says: „Könnte sie mir bei zwei Stücken vielleicht einen besseren Preis machen?“ Which sentence passes this on politely?", o: ["She would like to know if you can give her a better price for two things.", "She says everything here is too expensive.", "Make it cheaper now!", "She has no money."], a: 0,
            e: "Asking for a better price is fine when you stay friendly. The other sentences are rude or change what Inge said." }
        ] }
    ] },
    { kurz: "German to English", ober: "Station 3", titel: "German → English", teile: [
      { art: "text", html: "<p class=\"lead\">At the stall Inge talks – a lot. You have to decide what Nokuthula needs to hear. <span class=\"de\">Lies, was Oma sagt. Nicht alles ist für die Verkäuferin wichtig.</span></p>" },
      { art: "lesetext", lesetext: "med-market-oma" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht die Verkäuferin? Was kannst du weglassen?</span>",
        buckets: ["Important for the seller", "I can leave it out"],
        items: [{ t: "Sie sucht ein Geschenk für die Nachbarin", b: 0 }, { t: "Ihr gefallen die Körbe und die Armbänder", b: 0 }, { t: "Sie will wissen, aus welchem Material die Körbe sind", b: 0 },
                { t: "Sie fragt, ob die Frau die Sachen selbst macht", b: 0 }, { t: "Sie fragt, ob es bei zwei Stücken einen besseren Preis gibt", b: 0 }, { t: "Sie möchte mit Karte zahlen", b: 0 },
                { t: "Ihre Füße tun weh", b: 1 }, { t: "Die Möwen sind frech", b: 1 }, { t: "Der Kaffee vorhin war zu teuer", b: 1 }, { t: "Die Nachbarin passt auf die Katze auf", b: 1 }] },
      { art: "mc", id: "beste-saetze", tag: "Choose the best sentence", titel: "What do you say to Nokuthula?", lead: "Tick the sentence that is correct, clear and polite. <span class=\"de\">Es gibt kein Richtig im Wortlaut – aber nur ein Satz stimmt mit allen Angaben überein.</span>",
        fragen: [
          { q: "Oma: „Aus welchem Material sind die Körbe gemacht?“", o: ["She would like to know what the baskets are made of.", "She would like to know who makes the baskets.", "She wants the material from the baskets, yes?", "Tell her the material now!"], a: 0,
            e: "“What … made of” asks for the material. The second sentence asks about something else, the third is word for word, the last is rude." },
          { q: "Oma: „Macht die Frau die Sachen selbst?“", o: ["She would like to know if you make the things yourself.", "She would like to know if you sell the things yourself.", "Do make you the things by yourself the woman?", "She asks you to make something for her."], a: 0,
            e: "Inge says “die Frau” – but you speak to Nokuthula, so you say “you”. Check that the verb is “make”, not “sell”." },
          { q: "Oma: „Und wie lange braucht sie für so einen Korb?“", o: ["She would like to know how long it takes to make a basket.", "She would like to know how long the market is open.", "How long needs she for a basket like this?", "She says it takes too long."], a: 0,
            e: "“How long does it take …?” is the natural question. The second option asks about opening times, the third copies the German word order." }
        ] },
      { art: "offen", id: "suche", tag: "Your words", titel: "What is Inge looking for?", lead: "Tell Nokuthula what Inge is looking for. Write two or three English sentences. <span class=\"de\">Nur das Wichtige: wofür, was ihr gefällt.</span>",
        fragen: [{ q: "What does Inge want?", m: "My grandmother is looking for a present for her neighbour. She likes the baskets and the bracelets made of glass beads.", k: ["present|gift", "neighbour|neighbor", "basket", "bracelet|beads"], min: 3 }],
        tipp: "You can start with “She is looking for …” or use the I-form: “I am looking for …”." },
      { art: "offen", id: "fragen", tag: "Your words", titel: "Pass on the questions", lead: "Inge has two more questions about money. Pass them on in one or two English sentences. <span class=\"de\">Beide Fragen, höflich.</span>",
        fragen: [{ q: "What does Inge want to know?", m: "She would like to know if it is cheaper when she takes a basket and a bracelet together. And can she pay by card?", k: ["cheaper|lower price|better price|discount|less", "basket|bracelet|two|together|both", "card", "if|can|could|would like|wants to know|asks"], min: 3 }],
        tipp: "Start like this: She would like to know if … / Or in the I-form: Could you give me a better price …?" }
    ] },
    { kurz: "English to German", ober: "Station 4", titel: "English → German", teile: [
      { art: "text", html: "<p class=\"lead\">Now Nokuthula answers. Inge waits and wants to know what she says. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Du erklärst Oma danach auf Deutsch, was wichtig ist.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: "med-market-seller", fragen: [
        { art: "luecke", id: "notizen", titel: "Notes for Inge", lead: "Listen and complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The baskets are made of dry ", { g: "grass" }, "."],
            ["One basket takes about ", { g: "three" }, " days."],
            ["A basket and a bracelet together cost ", { g: "five hundred and forty" }, " rand."],
            ["Inge can pay by ", { g: "card" }, "."],
            ["The basket is about ", { g: "thirty" }, " centimetres wide."]
          ], extra: ["ticket", "angry"] },
        { art: "tf", id: "hoer-tf", titel: "True or false?", lead: "Listen again. Tick true or false.",
          aussagen: [
            ["Nokuthula makes the bracelets herself.", false],
            ["The bracelets are made of small glass beads.", true],
            ["A bracelet takes about one afternoon.", true],
            ["A bracelet costs ninety rand.", true],
            ["Nokuthula is sure that the basket is allowed on the plane.", false]
          ] },
        { art: "mc", id: "deutsch-saetze", titel: "Best German sentence", lead: "Tick the best German sentence for Inge. <span class=\"de\">Sinn weitergeben, nichts verändern.</span>",
          fragen: [
            { q: "Nokuthula: “I make the baskets myself, and my sister makes the bracelets.”", o: ["Die Körbe macht sie selbst, die Armbänder macht ihre Schwester.", "Die Armbänder macht sie selbst, die Körbe macht ihre Schwester.", "Beides macht ihre Schwester.", "Sie verkauft die Körbe, und ihre Schwester kauft die Armbänder."], a: 0,
              e: "Watch who makes what: the baskets come from Nokuthula, the bracelets from her sister. Two options swap or change this." },
            { q: "Nokuthula: “If you take one basket and one bracelet, I can do five hundred and forty rand for you.”", o: ["Wenn du einen Korb und ein Armband nimmst, macht sie dir einen Preis von fünfhundertvierzig Rand.", "Wenn du einen Korb und ein Armband nimmst, kostet jedes fünfhundertvierzig Rand.", "Wenn du einen Korb und ein Armband nimmst, kostet es fünfhundert Rand.", "Wenn du einen Korb nimmst, schenkt sie dir das Armband."], a: 0,
              e: "One price for both things, and the number must be exact. The other options change the price or invent a present." },
            { q: "Nokuthula: “I think it fits in a cabin bag, but please check with your airline.”", o: ["Sie glaubt, dass er ins Handgepäck passt. Frag aber bitte bei deiner Fluggesellschaft nach.", "Er passt auf jeden Fall ins Handgepäck.", "Er passt sicher nicht ins Handgepäck.", "Sie glaubt, dass er passt, und du sollst nirgends nachfragen."], a: 0,
              e: "She thinks it fits – she is not sure, so Inge should ask. Do not make her sound more sure than she is." }
          ] },
        { art: "offen", id: "dolmetschen-de", titel: "Tell Inge in German", lead: "Inge asks: „Was hat sie gesagt?“ Erkläre es ihr <b>auf Deutsch</b> in vier bis sechs Sätzen: wer es macht, Material, Dauer, Preis für beides, Bezahlen, Handgepäck. Nicht Wort für Wort.",
          fragen: [{ q: "Was hat Nokuthula gesagt?", m: "Oma, die Verkäuferin macht die Körbe selbst, die Armbänder macht ihre Schwester. Die Körbe sind aus trockenem Gras, die Armbänder aus kleinen Glasperlen. Für einen Korb braucht sie etwa drei Tage. Einen Korb und ein Armband zusammen bekommst du für fünfhundertvierzig Rand. Du kannst mit Karte zahlen. Sie glaubt, dass der Korb ins Handgepäck passt, aber du solltest bei der Fluggesellschaft nachfragen.", k: ["Schwester|schwester", "Gras|gras", "Glasperlen|Perlen|perlen", "drei Tage|3 Tage|drei tage", "540|fünfhundertvierzig|fünfhundert vierzig|fünfhundertundvierzig", "Karte|karte", "Handgepäck|handgepäck|Fluggesellschaft|Airline|airline|nachfragen|nachschauen|nachsehen"], min: 5 }],
          tipp: "Sprich Oma direkt an („du“). Nenne die Zahlen genau." }
      ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your turn: interpret!", teile: [
      { art: "text", html: "<p class=\"lead\">Now play a conversation in a group of three. It is the next day. Inge is back at Nokuthula's stall: the bracelet from yesterday is too tight. She would like to change it or have it made wider. Take turns: everybody plays each role once. <b>Now interpret!</b> <span class=\"de\">Spielt das Gespräch zu dritt. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Oma Inge (speaks only German)</h4><ul><li>Du hast gestern ein Armband gekauft. Es ist leider zu eng.</li><li>Du fragst, ob man es umtauschen oder weiter machen kann.</li><li>Du fragst, wie lange das dauert.</li><li>Du fragst, ob es etwas extra kostet.</li></ul></div><div class=\"sprech-karte b\"><h4>Nokuthula (speaks only English)</h4><ul><li>Ask how you can help.</li><li>Say you can make the bracelet wider, and it takes about one hour.</li><li>Say a bigger bracelet is possible too.</li><li>Say it costs nothing extra, but Inge needs to come back after lunch.</li></ul></div><div class=\"sprech-karte c\"><h4>You (interpreter)</h4><ul><li>Pass on everything in both directions.</li><li>Use “She says …” or the I-form.</li><li>Ask again if you don't understand.</li><li>Describe a word if it is missing.</li></ul></div></div><div class=\"phrasen\"><span>She says that …</span><span>She would like to know if …</span><span>Could you say that once more, please?</span><span>It is something you …</span><span>Is that right?</span></div>" },
      { art: "offen", id: "challenge-wort", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Inge asks: „Sind die Körbe geflochten?“ You don't know the English word for “geflochten”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Nokuthula?", m: "Does she make the baskets by hand? Does she put thin strips of grass over and under each other?", k: ["hand|handmade|herself|yourself|make|made", "strips|grass|thin|threads|lines|stalks|straw|stems", "over|under|cross|together|across|through|between"], min: 3 }],
        tipp: "Don't translate the word. Say how the basket is made: thin strips of grass that go over and under …" },
      { art: "offen", id: "challenge-handgepaeck", m7: true, tag: "Challenge", titel: "Another missing word", lead: "Inge asks: „Passt der Korb ins Handgepäck?“ You don't know the word “Handgepäck”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Nokuthula?", m: "Does the basket fit in the small bag that you take on the plane with you?", k: ["fit|go in|get in|put|enough", "bag|suitcase|luggage|baggage", "plane|airplane|aeroplane|flight|fly|flying|airport|aircraft"], min: 3 }],
        tipp: "Say what it is: a small bag that you take … with you." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of interpreting", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How interpreting works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I pass on the ", { g: "meaning" }, ", not every single word."],
          ["Prices and ", { g: "numbers" }, " must be exact."],
          ["I stay ", { g: "polite" }, " when I pass on a request for a better price."],
          ["If I did not hear something, I ", { g: "ask" }, " again."],
          ["If a word is missing, I ", { g: "describe" }, " it."]
        ], extra: ["shout", "hide"] }
    ] }
  ],
  weiter: { text: "Well done! You can interpret in a conversation – from German into English and from English into German. Remember: meaning first, prices exact, polite, and describe a word if it is missing." }
});
