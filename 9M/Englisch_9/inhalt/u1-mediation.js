/* Englisch 9M · Unit 1 Around Australia · Mediation: Help at the chemist's · M-Fassung
   (Sprachmittlung statt Übersetzung: Situation und Adressat erkennen, Wichtiges auswählen, Unwichtiges weglassen, genaue Angaben
   (Zahlen, Zeiten, Warnhinweise) richtig weitergeben, Korrekturen des Sprechers beachten; Richtung Deutsch → Englisch mündlich,
   Englisch → Deutsch schriftlich, auch als Zusammenfassung in eigenen Worten)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, zusammenfassen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Oma braucht Hilfe“ (texte/u1/mediation-oma-m.js), „Sun and skin care“ (texte/u1/mediation-leaflet-m.js) – Ort, Apotheke und
   Personen sind erfunden. */
D7Kit.seite({
  id: "u1-mediation",
  titel: "Mediation: Help at the chemist's",
  einleitung: "You are on holiday with your grandma. She speaks no English, and she has a bad sunburn and itchy mosquito bites. In the chemist's you are her <b>language helper</b>. Mediation is <b>not</b> translating word for word: you decide what is important, you pass on exact facts correctly and you say it simply and politely.",
  zeit: "etwa 45 Minuten",
  ziele: ["🧭 I know what mediation is.", "🔎 I choose the important information and notice corrections.", "💬 I say it simply and politely.", "🔢 I pass on numbers, times and warnings exactly.", "🔄 I help in both directions and I can summarise an English text in German."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter – passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach und höflich."],
    chemist: ["chemist's", "Apotheke (britisches und australisches Englisch; in den USA sagt man „pharmacy“ oder „drugstore“)."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a thick cream for the skin“."],
    ointment: ["ointment", "Salbe: eine dicke Creme, die man auf die Haut aufträgt."],
    allergic: ["allergic", "Allergisch: Der Körper reagiert auf einen Stoff mit Ausschlag oder Schwellung. Beispiel: „She is allergic to perfume.“"],
    sore: ["sore", "Wund oder schmerzhaft: Die Haut ist gereizt und tut weh."]
  },
  haupttext: "u1-med-leaflet-m",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Your grandma is ill and does not speak English. You are in a small town called <b>Pelican Cove</b>. You go to the <button class=\"term\" data-t=\"chemist\">chemist's</button> with her. The town and the people are invented.</p>" },
      { art: "merke", kopf: "MEDIATION", html: "<p><button class=\"term\" data-t=\"mediation\">Mediation</button> is <b>not</b> translation. Before you speak, ask three questions:</p><ol><li><b>Who</b> needs the information?</li><li><b>What</b> is important for this person?</li><li><b>How</b> can I say it simply and politely?</li></ol><p>You may leave out unimportant details. But pass on <b>exact facts</b> (numbers, times, warnings) correctly, and use the <b>last</b> version if the speaker corrects herself. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false.",
        aussagen: [
          ["In mediation you translate every single word.", false],
          ["You think about who needs the information.", true],
          ["You can leave out unimportant details, but not an important warning.", true],
          ["If the speaker corrects herself, you pass on the new information.", true],
          ["If a number is difficult, it is fine to change it a little.", false],
          ["If you don't know a word, you can describe it with simple words.", true]
        ] },
      { art: "mc", id: "mediation-mc", tag: "Think", titel: "What do you do?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Your grandma tells you a long story with many details. What do you say to the chemist?", o: ["Only the facts that matter, in simple English.", "Everything, word for word.", "Nothing – the chemist must guess.", "Only the part about the hotel."], a: 0,
            e: "The chemist needs the facts that matter: What is wrong? What does Grandma want to know? The rest can be left out." }
        ] },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["sunburn", "Sonnenbrand"], ["itchy", "juckend"], ["to apply", "auftragen"], ["ointment", "Salbe"], ["twice a day", "zweimal am Tag"], ["to avoid", "vermeiden"], ["fever", "Fieber"], ["allergic", "allergisch"], ["sore", "wund"], ["midday", "Mittag"]] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Your grandma tells you what is wrong. Read what she says. <span class=\"de\">Nicht alles ist für die Apothekerin wichtig – und manches nimmt Oma später zurück.</span></p>" },
      { art: "lesetext", lesetext: "u1-med-oma-m" },
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-sunburn.jpg\" alt=\"Grandma on the beach with a bad sunburn on her shoulders and back; small pictures show mosquito bites, the hotel, the breakfast and the chemist's\" loading=\"lazy\" width=\"1280\" height=\"960\" style=\"display:block;width:100%;max-width:760px;height:auto;border-radius:12px;border:1px solid rgba(0,0,0,.12)\"><figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI (made with AI) · Grandma's holiday – what is important for the chemist?</figcaption></figure><p class=\"de\">Das Bild zeigt, wovon Oma erzählt. Überlege schon jetzt: Was davon muss die Apothekerin wissen – und was nicht?</p>" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box.",
        buckets: ["Important for the chemist", "I can leave it out"],
        items: [{ t: "Her shoulders, back and neck are red and hot", b: 0 }, { t: "She has mosquito bites on her legs and one arm", b: 0 }, { t: "The bites itch a lot", b: 0 }, { t: "She is allergic to perfume in creams", b: 0 }, { t: "She wants to know how often to use the product", b: 0 },
                { t: "The sun cream was in the other bag", b: 1 }, { t: "The hat was in the hotel", b: 1 }, { t: "The hotel breakfast is too sweet", b: 1 }, { t: "Her neighbour uses a blue ointment at home", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the four key words that tell the chemist about Grandma's allergy", toleranz: 0,
        satz: "Und eins ist wichtig: Ich bin [[allergisch]] gegen [[Duftstoffe]] in [[Cremes]], davon bekomme ich [[Ausschlag]].",
        e: "Key words: allergisch, Duftstoffe, Cremes, Ausschlag – the chemist must choose a product without perfume. The rest of the speech is background." },
      { art: "mc", id: "oma-schluss", tag: "Think", titel: "Read between the lines", lead: "Tick the correct answer.",
        fragen: [
          { q: "Grandma says: „Das muss die Apothekerin unbedingt wissen.“ Why?", o: ["The chemist must choose a product without perfume.", "The chemist is her neighbour.", "Grandma wants to talk about her hotel.", "The chemist has to know the name of the blue ointment."], a: 0,
            e: "She stresses the allergy because a wrong cream could make her skin worse. That is a fact you must pass on." },
          { q: "How many bites do you tell the chemist about?", o: ["Eight – Grandma corrects herself.", "Seven – that is what she says first.", "Seven or eight – nobody knows.", "She does not say a number."], a: 0,
            e: "Grandma says seven, then corrects herself. In mediation you use the last version." },
          { q: "At the end Grandma changes her question about the beach. What does this show?", o: ["She is not sure that the beach is a good idea now.", "She wants to stay at the beach all day.", "She does not like the chemist.", "She has no more questions."], a: 0,
            e: "She asks whether she should rather stay in the shade. So you pass on the new question, not the old one." }
        ] }
    ] },
    { kurz: "Say it simply", ober: "Step 3", titel: "Say it simply", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say to the chemist?", lead: "Tick the sentence that is correct, simple and polite.",
        fragen: [
          { q: "Grandma: „Ich bin allergisch gegen Duftstoffe in Cremes.“", o: ["She is allergic to perfume in creams, so the product must not have any.", "She is allergy to perfume in cream.", "She likes creams with perfume.", "Her perfume is a problem in the shop."], a: 0,
            e: "You name the allergy and say what follows from it. That is the fact the chemist needs." },
          { q: "Grandma: „Es waren sieben Stiche. Nein, warte, acht.“", o: ["She has eight bites.", "She has seven bites.", "She has seven bites and then eight more.", "She has fifteen bites."], a: 0,
            e: "You pass on the corrected number." },
          { q: "Grandma: „Frag, ob ich morgen an den Strand darf – oder nein, besser, ob ich ein paar Tage im Schatten bleiben soll.“", o: ["She would like to know if she should stay in the shade for a few days.", "She would like to know if she can go to the beach tomorrow.", "She wants to go to the shade at the beach.", "Is the beach in the shade tomorrow?"], a: 0,
            e: "„She would like to know …“ is a polite way to pass on a question, and you use her corrected version." },
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "You don't know the English word. Match the German word with a simple description.",
        paare: [["Mückenstich", "A mosquito bit her and now it is red and itchy."], ["Sonnenbrand", "Her skin is red and hurts because of too much sun."], ["Salbe", "A thick cream that you put on the skin."], ["Duftstoffe", "Things with a nice smell that some creams have."], ["Ausschlag", "Small red spots on the skin, for example from a cream that is not good for her."]] },
      { art: "luecke", id: "saetze", tag: "Useful phrases", titel: "Phrases that help you", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She would like to know ", { g: "if" }, " she should stay in the shade."],
          ["Could you ", { g: "say" }, " that again, please?"],
          ["What she ", { g: "means" }, " is that her skin hurts."],
          ["Could you speak more ", { g: "slowly" }, ", please?"],
          ["I don't know the word. It is something you ", { g: "put" }, " on your skin."],
          ["She is ", { g: "allergic" }, " to perfume in creams."]
        ], extra: ["talk", "slow"] },
      { art: "offen", id: "melden", tag: "Your words", titel: "Pass on the allergy", lead: "Grandma says: „Ich bin allergisch gegen Duftstoffe. Frag bitte, ob es eine Creme ohne Duftstoffe gibt.“ Tell the chemist in one or two English sentences.",
        fragen: [{ q: "What do you say to the chemist?", m: "My grandma is allergic to perfume in creams. Is there a cream without perfume, please?", k: ["allergic|allergy", "perfume|scent|smell|fragrance", "without|no|free", "cream|gel|ointment|product"], min: 3 }],
        tipp: "Start like this: My grandma is allergic to … / Do you have something without …?" }
    ] },
    { kurz: "English to German", ober: "Step 4", titel: "From English into German", teile: [
      { art: "text", html: "<p class=\"lead\">The chemist gives you an information sheet. Your grandma wants to know what to do. <span class=\"de\">Du erklärst Oma auf Deutsch, was wichtig ist – nicht alles und nicht Wort für Wort, aber Zahlen und Warnungen genau.</span></p>" },
      { art: "lesetext", lesetext: "u1-med-leaflet-m" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the sheet say that?", lead: "Tap the lines in the text.", lesetext: "u1-med-leaflet-m",
        fragen: [
          { q: "What is the highest number of times Grandma may use the gel in one day?", zeilen: [7, 7], e: "Never more than four times in one day.", tipp: "Look at the paragraph about the gel." },
          { q: "How long can she use the ointment for her bites?", zeilen: [11, 12], e: "Once or twice a day for up to three days.", tipp: "Look for the paragraph about insect bites." },
          { q: "Where must she not put the ointment?", zeilen: [13, 14], e: "Not on sunburnt skin – the gel is for that.", tipp: "Look for the word: Do not." },
          { q: "When is the midday sun strongest?", zeilen: [15, 16], e: "Between eleven and three o'clock.", tipp: "Look for the words: For the next few days." },
          { q: "When must Grandma see a doctor?", zeilen: [19, 20], e: "If she has a fever, feels very ill or the pain gets worse after two days.", tipp: "Look at the last paragraph." }
        ] },
      { art: "tf", id: "blatt-tf", tag: "True or false?", titel: "What does the sheet say?", lead: "Tick true or false.",
        aussagen: [
          ["Grandma should cool her skin for about ten minutes before she puts on the gel.", true],
          ["She may use the gel five times a day.", false],
          ["The ointment is also good for sunburnt skin.", false],
          ["The sun is strongest between eleven and three o'clock.", true],
          ["The chemist's is open on Sundays from nine until half past five.", false],
          ["Feeling a little tired is a reason to see a doctor at once.", false],
          ["She should see a doctor if the pain gets worse after two days.", true]
        ] },
      { art: "sort", id: "wichtig-oma", tag: "Choose", titel: "What does Grandma need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du Oma? Was lässt du weg?</span>",
        buckets: ["Tell Grandma", "Not necessary"],
        items: [{ t: "Use the gel two or three times a day, never more than four", b: 0 }, { t: "Not near the eyes", b: 0 }, { t: "The ointment is not for sunburnt skin", b: 0 }, { t: "Avoid the sun between eleven and three", b: 0 }, { t: "See a doctor if you have a fever", b: 0 },
                { t: "The name of the chemist's", b: 1 }, { t: "Thank you for visiting us", b: 1 }, { t: "We hope this sheet answers your questions", b: 1 }, { t: "Get well soon", b: 1 }] },
      { art: "mc", id: "adressat", tag: "Think", titel: "Who is it for?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which German sentence is the best help for your grandma?", o: ["Das Gel trägst du zwei- bis dreimal am Tag auf, höchstens viermal, und nicht in die Nähe der Augen.", "Das Gel ist für rote und heiße Haut gedacht und wird in einer dünnen Schicht auf die Haut gelegt, die rot ist, wobei man es nicht öfter als nötig benutzen sollte.", "Danke für Ihren Besuch in unserer Apotheke.", "Das Gel kannst du verwenden, wie oft du möchtest."], a: 0,
            e: "Short, clear, useful for Grandma – and the number is exact. The other sentences are too long, not important or wrong." },
          { q: "Which German sentence passes on the warning about the ointment correctly?", o: ["Die Salbe darfst du nicht auf den Sonnenbrand tun, dafür ist das Gel da.", "Die Salbe darfst du auch auf den Sonnenbrand tun.", "Die Salbe hilft gegen alles auf der Haut.", "Das Gel ist für die Mückenstiche."], a: 0,
            e: "A warning must be passed on exactly. Here the sheet says: ointment for bites, gel for sunburn." },
          { q: "Your grandma is 78 and has never learned English. How do you talk to her?", o: ["In simple German, with the most important points.", "In English, slowly and loudly.", "You read the whole sheet aloud in English.", "You give her the sheet and say nothing."], a: 0,
            e: "Mediation means: think about the person. Grandma needs short, simple German." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to Grandma", min: 45,
        auftrag: "<p><strong>Sprachmittlung:</strong> Du bist mit Oma in der Apotheke. Sie versteht kein Englisch. Erkläre ihr <b>auf Deutsch</b> das Wichtige aus dem Hinweisblatt „Sun and skin care“ – für Oma, also einfach und freundlich.</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Sag ihr, wie oft sie das Gel höchstens aufträgt, wofür die Salbe da ist und wofür nicht, was sie in den nächsten Tagen vermeiden soll und wann sie zum Arzt gehen soll.</p>",
        starter: ["Oma, die Apothekerin hat gesagt:", "Das Gel …", "Die Salbe …", "Vermeide …", "Wenn du Fieber hast, …"],
        kriterien: ["Der Text nennt, wie oft das Gel aufgetragen wird (zwei- bis dreimal, höchstens viermal am Tag).", "Der Text sagt, dass die Salbe nicht auf den Sonnenbrand gehört.", "Der Text nennt, was Oma in den nächsten Tagen beachten soll (Mittagssonne meiden, Hut und langärmliges Hemd tragen).", "Der Text sagt, wann sie zum Arzt gehen soll.", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung.", "Unwichtiges (Dank, Wünsche, Name der Apotheke) fehlt."] },
      { art: "schreiben", id: "zusammenfassung", m7: true, tag: "Plus · Summary", titel: "Summarise the sheet in German", min: 45,
        auftrag: "<p><strong>Plus – Zusammenfassung:</strong> Deine Klasse sammelt Reisetipps für eine Infomappe. Fasse das englische Hinweisblatt „Sun and skin care“ <b>auf Deutsch in eigenen Worten</b> zusammen – in vier bis sechs Sätzen für Mitschüler, die den Text nicht gelesen haben.</p><p>Nenne nur das Wichtigste: was bei Sonnenbrand und was bei Mückenstichen hilft, was man vermeiden soll und wann man zum Arzt muss. Schreibe nicht Satz für Satz mit und lass Nebensächliches weg.</p>",
        starter: ["Das Hinweisblatt erklärt, …", "Bei Sonnenbrand …", "Bei Mückenstichen …", "Außerdem sollte man …", "Man muss zum Arzt, wenn …"],
        kriterien: ["Die Zusammenfassung nennt, wofür Gel und Salbe da sind.", "Sie nennt mindestens eine genaue Angabe (Häufigkeit, Dauer oder Zeit der stärksten Sonne).", "Sie nennt, wann man zum Arzt gehen soll.", "Sie ist auf Deutsch, in eigenen Worten – nicht Satz für Satz übersetzt.", "Nebensächliches (Öffnungszeiten, Dank) fehlt."] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: act in the chemist's", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. Change roles.</p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Say hello and say who needs help.</li><li>Tell the chemist what is wrong: sunburn, eight itchy bites.</li><li>Pass on the allergy and ask for something without perfume.</li><li>Ask what helps and how often Grandma can use it.</li><li>Ask politely again if you don't understand.</li></ul></div><div class=\"sprech-karte b\"><h4>The chemist</h4><ul><li>Ask what the problem is.</li><li>Recommend a gel and an ointment.</li><li>Say how often to use them and give one warning.</li><li>Check: Does your grandma understand?</li></ul></div></div><div class=\"phrasen\"><span>Hello, my grandma needs help.</span><span>She would like to know …</span><span>Could you say that again, please?</span><span>What she means is …</span><span>Does that make sense?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Tell the chemist", lead: "Tell the chemist what your grandma needs. Write three or four English sentences: the problem, the places, the allergy and your question.",
        fragen: [{ q: "What does your grandma need? Tell the chemist.", m: "My grandma has a bad sunburn on her shoulders, back and neck. She also has eight mosquito bites, and they are very itchy. She is allergic to perfume in creams. Could you recommend something, please? She would like to know how often she can use it.", k: ["sunburn|sun|red|hot", "mosquito|mosquitos|mosquitoes|bites|bite|itchy", "allergic|allergy|perfume", "help|could|would|please"], min: 3 }],
        tipp: "Name the problem, say the places, pass on the allergy, ask for help. Start like this: My grandma has … / Could you help her, please?" },
      { art: "offen", id: "challenge", m7: true, tag: "Plus · Challenge", titel: "A second situation", lead: "Grandma says: „Frag bitte, ob man auch Pflaster kaufen kann und ob die Apotheke am Montag schon um acht aufmacht, weil wir morgens einen Ausflug machen.“ Tell the chemist in one or two English sentences.",
        fragen: [{ q: "What do you ask the chemist?", m: "My grandma would like to know if she can buy plasters here and if you open at eight o'clock on Monday.", k: ["plaster|plasters|bandage|bandages", "open|opens", "monday|Monday", "eight|8"], min: 3 }],
        tipp: "Start like this: She would like to know if … and if …" },
      { art: "offen", id: "gruende", m7: true, tag: "Plus · In your own words", titel: "Why not word for word?", lead: "Explain in your own words: Why is a word-for-word translation a bad idea in the chemist's? Give two reasons.",
        fragen: [{ q: "Give two reasons.", m: "A word-for-word translation is too long, so the chemist cannot find the important facts quickly. Also, some German words and phrases sound strange in English, so the chemist may not understand them.", k: ["important|facts|information|details|long", "understand|confus|wrong|mistake|sound|strange|different"], min: 2 }],
        tipp: "Think about the chemist: What does she need? What can go wrong? Use because or also." },
      { art: "offen", id: "meinung", m7: true, tag: "Plus · Your opinion", titel: "Should the sheet be in German, too?", lead: "The sheet is only in English. Do you think chemists in holiday towns should also give out sheets in German? Give your opinion with two reasons.",
        fragen: [{ q: "What do you think? Give two reasons.", m: "I think the sheet should be in German, too, because many tourists do not speak English well. Also, a person who is ill may not understand important warnings.", k: ["think|believe|opinion|should|should not|shouldn't", "because|reason|also|first|second", "english|german|tourist|tourists|understand|warning|warnings|ill"], min: 3 }],
        tipp: "Start like this: I think … because … / Another reason is …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I understand the ", { g: "situation" }, " and think about the ", { g: "person" }, " who needs help."],
          ["Then I choose the ", { g: "important" }, " information and leave out the rest."],
          ["I pass on exact facts such as numbers, times and ", { g: "warnings" }, " correctly."],
          ["I say it in ", { g: "simple" }, " words and I am polite."],
          ["If I don't know a word, I ", { g: "describe" }, " it. At the end I ", { g: "check" }, " if the other person has understood."]
        ], extra: ["translate", "copy"] }
    ] }
  ],
  weiter: { text: "Well done! You can find, choose and pass on information in both directions, and you can summarise an English text in German." }
});
