/* Englisch 9R · Unit 1 Around Australia · Mediation: Help at the chemist's
   (Sprachmittlung statt Übersetzung: Situation und Adressat erkennen, Wichtiges auswählen, Unwichtiges weglassen, einfach und höflich
   weitergeben, bei fehlendem Wort umschreiben; Richtung Deutsch → Englisch mündlich vorbereitet, Englisch → Deutsch schriftlich)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Oma braucht Hilfe“ (texte/u1/mediation-oma.js), „Sun and skin care“ (texte/u1/mediation-leaflet.js) – Ort, Apotheke und
   Personen sind erfunden. */
D7Kit.seite({
  id: "u1-mediation",
  titel: "Mediation: Help at the chemist's",
  einleitung: "You are on holiday with your grandma. She speaks no English, but she has a bad sunburn and itchy mosquito bites. In the chemist's you are her <b>language helper</b>. Mediation is <b>not</b> translating word for word: you decide what is important and say it simply and politely.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what mediation is.", "🔎 I choose the important information.", "💬 I say it simply and politely.", "🔄 I help in both directions: German to English and English to German."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter – passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach und höflich."],
    chemist: ["chemist's", "Apotheke (britisches und australisches Englisch; in den USA sagt man „pharmacy“ oder „drugstore“)."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a thick cream for the skin“."],
    ointment: ["ointment", "Salbe: eine dicke Creme, die man auf die Haut aufträgt."]
  },
  haupttext: "u1-med-leaflet",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Your grandma is ill and does not speak English. You are in a small town called <b>Pelican Cove</b>. You go to the <button class=\"term\" data-t=\"chemist\">chemist's</button> with her. The town and the people are invented.</p>" },
      { art: "merke", kopf: "MEDIATION", html: "<p><button class=\"term\" data-t=\"mediation\">Mediation</button> is <b>not</b> translation. Before you speak, ask three questions:</p><ol><li><b>Who</b> needs the information?</li><li><b>What</b> is important for this person?</li><li><b>How</b> can I say it simply and politely?</li></ol><p>You may leave out unimportant details. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In mediation you translate every single word.", false],
          ["You think about who needs the information.", true],
          ["You can leave out unimportant details.", true],
          ["If you don't know a word, you can describe it with simple words.", true],
          ["You must never ask the other person to speak more slowly.", false]
        ] },
      { art: "mc", id: "mediation-mc", tag: "Think", titel: "What do you do?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Your grandma tells you a long story. What do you say to the chemist?", o: ["Only the important things, in simple English.", "Everything, word for word.", "Nothing – the chemist must guess.", "Only the story about the hotel."], a: 0,
            e: "The chemist needs the facts that matter: What is wrong? What does Grandma want to know? The rest can be left out." }
        ] },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["sunburn", "Sonnenbrand"], ["itchy", "juckend"], ["to apply", "auftragen"], ["ointment", "Salbe"], ["twice a day", "zweimal am Tag"], ["to avoid", "vermeiden"], ["fever", "Fieber"]] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Your grandma tells you what is wrong. Read what she says. <span class=\"de\">Lies, was Oma sagt. Nicht alles ist für die Apothekerin wichtig.</span></p>" },
      { art: "lesetext", lesetext: "u1-med-oma" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht die Apothekerin? Was kannst du weglassen?</span>",
        buckets: ["Important for the chemist", "I can leave it out"],
        items: [{ t: "Her shoulders and back are red and hot", b: 0 }, { t: "Mosquitos bit her legs and one arm at night", b: 0 }, { t: "The bites itch a lot", b: 0 }, { t: "She wants to know how often to use it", b: 0 }, { t: "She asks if she can go to the beach tomorrow", b: 0 },
                { t: "The hat was in the hotel", b: 1 }, { t: "The sun cream was in the other bag", b: 1 }, { t: "The hotel breakfast is too sweet", b: 1 }, { t: "Her neighbour uses a blue ointment at home", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the four key words that tell the chemist what is wrong", toleranz: 0,
        satz: "Jetzt sind meine [[Schultern]] und mein [[Rücken]] ganz [[rot]] und [[heiß]], aber das Hotel ist trotzdem sehr schön.",
        e: "Key words: Schultern, Rücken, rot, heiß – that is the sunburn. The nice hotel is not important for the chemist." }
    ] },
    { kurz: "Say it simply", ober: "Step 3", titel: "Say it simply", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say to the chemist?", lead: "Tick the sentence that is correct, simple and polite.",
        fragen: [
          { q: "Grandma: „Meine Schultern und mein Rücken sind ganz rot und heiß.“", o: ["She has a bad sunburn. Her shoulders and back are red and hot.", "She is a sunburn on the shoulders and the back.", "Her shoulders are hot in the hotel.", "Give her something for the back, now!"], a: 0,
            e: "Short, correct and polite: you name the problem (sunburn) and the places (shoulders and back)." },
          { q: "Grandma: „Es juckt schrecklich, und ich muss ständig kratzen.“", o: ["The bites are very itchy. She keeps scratching them.", "It jokes terribly and she must always scratch.", "Her bites are in the night and she scratches the mosquitos.", "Tell me what stops the itching!"], a: 0,
            e: "„Itchy“ is the word for „juckend“. „To keep scratching“ says „ständig kratzen“ in a simple way." },
          { q: "Grandma: „Ich möchte wissen, wie oft ich es benutzen soll.“", o: ["She would like to know how often she can use it.", "She wants it how often?", "How often are you using it?", "She uses it often, she says."], a: 0,
            e: "„She would like to know …“ is a polite way to pass on a question." },
          { q: "You did not understand the chemist. What do you say?", o: ["Could you say that again more slowly, please?", "Speak English properly!", "I understand everything.", "What? Again!"], a: 0,
            e: "Asking politely for help is part of mediation." }
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "You don't know the English word. Match the German word with a simple description. <span class=\"de\">Wie kannst du das Wort mit einfachen Wörtern umschreiben?</span>",
        paare: [["Mückenstich", "A mosquito bit her and now it is red and itchy."], ["Sonnenbrand", "Her skin is red and hurts because of too much sun."], ["Salbe", "A thick cream that you put on the skin."], ["Nachbarin", "The woman who lives next to her at home."]] },
      { art: "luecke", id: "saetze", tag: "Useful phrases", titel: "Phrases that help you", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She would like to know ", { g: "if" }, " she can go to the beach tomorrow."],
          ["Could you ", { g: "say" }, " that again, please?"],
          ["What she ", { g: "means" }, " is that her skin hurts."],
          ["Could you speak more ", { g: "slowly" }, ", please?"],
          ["I don't know the word. It is something you ", { g: "put" }, " on your skin."]
        ], extra: ["translate", "loudly"] }
    ] },
    { kurz: "English to German", ober: "Step 4", titel: "From English into German", teile: [
      { art: "text", html: "<p class=\"lead\">The chemist gives you an information sheet. Your grandma wants to know what to do. <span class=\"de\">Du erklärst Oma auf Deutsch, was wichtig ist – nicht alles und nicht Wort für Wort.</span></p>" },
      { art: "lesetext", lesetext: "u1-med-leaflet" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the sheet say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-med-leaflet",
        fragen: [
          { q: "How often can Grandma use the after-sun gel?", zeilen: [6, 6], e: "Two or three times a day.", tipp: "Look at the paragraph about the gel." },
          { q: "How long can she use the ointment for her bites?", zeilen: [9, 10], e: "Once or twice a day for up to three days.", tipp: "Look for the paragraph about insect bites." },
          { q: "What should Grandma wear for the next few days?", zeilen: [12, 13], e: "A hat and a long shirt.", tipp: "Look for the words: For the next few days." },
          { q: "When must Grandma see a doctor?", zeilen: [14, 15], e: "If she has a fever, feels very ill or the pain gets worse after two days.", tipp: "Look at the last paragraph." }
        ] },
      { art: "tf", id: "blatt-tf", tag: "True or false?", titel: "What does the sheet say?", lead: "Tick true or false.",
        aussagen: [
          ["Grandma should cool her skin before she puts on the gel.", true],
          ["She should scratch the bites a lot.", false],
          ["She should wear a hat for the next few days.", true],
          ["She should drink very little water.", false],
          ["She should see a doctor if she has a fever.", true]
        ] },
      { art: "sort", id: "wichtig-oma", tag: "Choose", titel: "What does Grandma need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du Oma? Was lässt du weg?</span>",
        buckets: ["Tell Grandma", "Not necessary"],
        items: [{ t: "Use the gel two or three times a day", b: 0 }, { t: "Not near the eyes", b: 0 }, { t: "Avoid the midday sun", b: 0 }, { t: "See a doctor if you have a fever", b: 0 },
                { t: "The name of the chemist's", b: 1 }, { t: "The opening hours", b: 1 }, { t: "Thank you for visiting us", b: 1 }] },
      { art: "mc", id: "adressat", tag: "Think", titel: "Who is it for?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which German sentence is the best help for your grandma?", o: ["Das Gel trägst du zwei- bis dreimal am Tag auf, aber nicht in die Nähe der Augen.", "Das Gel ist für rote und heiße Haut gedacht und wird in einer dünnen Schicht auf die Haut gelegt, die rot ist.", "Danke für Ihren Besuch in unserer Apotheke.", "Die Apotheke hat von neun bis halb sechs geöffnet."], a: 0,
            e: "Short, clear, useful for Grandma. Opening hours and thanks are not important for her." },
          { q: "Your grandma is 78 and has never learned English. How do you talk to her?", o: ["In simple German, with the most important points.", "In English, slowly and loudly.", "You read the whole sheet aloud in English.", "You give her the sheet and say nothing."], a: 0,
            e: "Mediation means: think about the person. Grandma needs short, simple German." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to Grandma", min: 35,
        auftrag: "<p><strong>Sprachmittlung:</strong> Du bist mit Oma in der Apotheke. Sie versteht kein Englisch. Erkläre ihr <b>auf Deutsch</b> das Wichtige aus dem Hinweisblatt „Sun and skin care“ – für Oma, also einfach und freundlich.</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Sag ihr, wie oft sie das Gel aufträgt, was sie vermeiden soll und wann sie zum Arzt gehen soll.</p>",
        starter: ["Oma, die Apothekerin hat gesagt:", "Das Gel …", "Die Salbe …", "Du sollst vermeiden …", "Wenn du Fieber hast, …"],
        kriterien: ["Der Text nennt, wie oft das Gel aufgetragen wird.", "Der Text nennt, was Oma vermeiden soll.", "Der Text sagt, wann sie zum Arzt gehen soll.", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung.", "Unwichtiges (Öffnungszeiten, Dank) fehlt."] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: act in the chemist's", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. <span class=\"de\">Spielt das Gespräch zu zweit. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Say hello and say who needs help.</li><li>Tell the chemist what is wrong: sunburn, itchy bites.</li><li>Ask what helps and how often Grandma can use it.</li><li>Ask politely again if you don't understand.</li></ul></div><div class=\"sprech-karte b\"><h4>The chemist</h4><ul><li>Ask what the problem is.</li><li>Recommend a gel and an ointment.</li><li>Say how often to use them.</li><li>Check: Does your grandma understand?</li></ul></div></div><div class=\"phrasen\"><span>Hello, my grandma needs help.</span><span>She would like to know …</span><span>Could you say that again, please?</span><span>What she means is …</span><span>Does that make sense?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Tell the chemist", lead: "Tell the chemist what your grandma needs. Write two or three English sentences. <span class=\"de\">Nur das Wichtige, einfach und höflich.</span>",
        fragen: [{ q: "What does your grandma need? Tell the chemist.", m: "My grandma has a bad sunburn on her shoulders and back. A mosquito bit her and the bites are very itchy. Could you help her, please? She would like to know how often she can use it.", k: ["sunburn|sun|red|hot", "mosquito|mosquitos|mosquitoes|bites|bite|itchy", "help|could|would|please", "how often|often|twice"], min: 3 }],
        tipp: "Name the problem, say the places, ask for help. Start like this: My grandma has … / Could you help her, please?" },
      { art: "offen", id: "challenge", m7: true, tag: "Challenge", titel: "A second situation", lead: "Grandma says: „Frag bitte, ob die Apotheke am Sonntag offen ist und ob man dort auch Pflaster kaufen kann.“ Tell the chemist in one or two English sentences.",
        fragen: [{ q: "What do you ask the chemist?", m: "My grandma would like to know if you are open on Sunday and if she can buy plasters here.", k: ["open|opens", "sunday|Sunday", "plaster|plasters|bandage|bandages"], min: 3 }],
        tipp: "Start like this: She would like to know if …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I understand the ", { g: "situation" }, " and think about the ", { g: "person" }, " who needs help."],
          ["Then I choose the ", { g: "important" }, " information and leave out the rest."],
          ["I say it in ", { g: "simple" }, " words and I am polite."],
          ["If I don't know a word, I ", { g: "describe" }, " it. At the end I ", { g: "check" }, " if the other person has understood."]
        ], extra: ["translate", "copy"] }
    ] }
  ],
  weiter: { text: "Well done! You can find, choose and pass on information in both directions. Next: test yourself with exam-style tasks." }
});