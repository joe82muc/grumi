/* Englisch 9R · Unit 2 Exploring India · Mediation: Which job is right for you?
   (Sprachmittlung statt Übersetzung in fünf Stufen: finden, auswählen, vereinfachen, adressatengerecht weitergeben, selbst handeln;
   Richtung Deutsch → Englisch: Aushang zum Berufsinfotag für einen Gast aus Indien, Englisch → Deutsch: Firmenblatt für eine Mitschülerin;
   Grammatik der Unit im Kontext: simple present mit Häufigkeitsadverbien, Satzstellung Art und Weise – Ort – Zeit)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Berufe und Arbeitswelt).
   Texte: „Berufsinfotag an unserer Schule“ (texte/u2/mediation-infotag.js), „Jobs at Brightway Services“ (texte/u2/mediation-jobs-flyer.js)
   – Betriebe und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-mediation",
  titel: "Mediation: Which job is right for you?",
  einleitung: "It is the careers day at your school. <b>Rohan</b>, an exchange student from India, is your guest today. He speaks English, but not German. You are his <b>language helper</b>. Mediation is <b>not</b> translating word for word: you decide what is important for the person and say it simply.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know the five steps of mediation.", "🔎 I find and choose the important information about jobs.", "💬 I say it simply for the person who needs it.", "🔄 I help in both directions: German to English and English to German."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter – passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach gesagt."],
    training: ["training", "Hier: die Ausbildung. In Deutschland lernt man viele Berufe in einer Ausbildung, meist drei oder dreieinhalb Jahre lang."],
    exchange: ["exchange student", "Ein Austauschschüler oder eine Austauschschülerin: Er oder sie besucht für einige Zeit eine Schule in einem anderen Land."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a small vehicle that lifts boxes“."]
  },
  haupttext: "u2-med-flyer",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Today is the careers day at your school. <b>Rohan</b> is visiting from India, and his teacher <b>Ms Kapoor</b> is with him. Your teacher <b>Frau Lindner</b> has put up a poster about three jobs. Rohan cannot read German, so he asks you for help. The people and the companies are invented.</p>" },
      { art: "merke", kopf: "MEDIATION – FIVE STEPS", html: "<ol><li><b>Find</b> the information.</li><li><b>Choose</b> what is important for this person.</li><li><b>Simplify</b> it: short sentences, easy words.</li><li><b>Pass it on</b> and think of the person.</li><li><b>Act</b> in a real situation.</li></ol><p>It is <b>not</b> translation. You may leave out unimportant details. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "ordnen", id: "stufen", tag: "Order", titel: "The five steps", lead: "Put the steps of mediation in the right order. <span class=\"de\">Bringe die fünf Stufen in die richtige Reihenfolge.</span>",
        schritte: ["Find the information.", "Choose what is important for the person.", "Make it simple.", "Say it for the person.", "Act in a real situation."] },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In mediation you translate every single word.", false],
          ["You think about who needs the information.", true],
          ["You can leave out unimportant details.", true],
          ["If you don't know a word, you can describe it with simple words.", true],
          ["You always use the same words as in the text.", false]
        ] },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["reception", "Rezeption"], ["training", "Ausbildung"], ["to repair", "reparieren"], ["parcel", "Paket"], ["guest", "Gast"], ["driving licence", "Führerschein"], ["patient", "geduldig"]] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Here is the German poster. Rohan wants to know three things about each job: <b>What do you do? What must you be good at? How long is the training?</b> <span class=\"de\">Lies den Aushang. Nicht alles ist für Rohan wichtig.</span></p>" },
      { art: "lesetext", lesetext: "u2-med-infotag" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was will Rohan wissen? Was kannst du weglassen?</span>",
        buckets: ["Important for Rohan", "I can leave it out"],
        items: [{ t: "Car mechanics repair cars and look for faults on the computer", b: 0 }, { t: "A hotel worker welcomes guests at the reception", b: 0 }, { t: "You need to be tidy and like working in a team", b: 0 }, { t: "The training for a car mechanic takes three and a half years", b: 0 }, { t: "Hotel workers need some English and also work at weekends", b: 0 },
                { t: "There are coffee, juice and pretzels", b: 1 }, { t: "Bikes must stand at the bike stand", b: 1 }, { t: "The boss drives a red vintage car", b: 1 }, { t: "The company has an anniversary this year", b: 1 }, { t: "The hotel has forty rooms and a big garden", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the three verbs that tell Rohan what a car mechanic does", toleranz: 0,
        satz: "Sie [[prüfen]] und [[reparieren]] Autos und [[suchen]] Fehler am Computer, aber der Chef fährt am liebsten seinen roten Oldtimer.",
        e: "Key words: prüfen, reparieren, suchen – that is the work of a car mechanic. The boss and his vintage car are not important for Rohan." },
      { art: "mc", id: "auswahl", tag: "Think", titel: "What do you tell Rohan?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Rohan asks: „Can you tell me everything on the poster?“ What do you do?", o: ["I tell him the important points about each job, in simple English.", "I read the whole poster aloud, word for word.", "I tell him only about the hotel.", "I say that it is too difficult."], a: 0,
            e: "Mediation means choosing: Rohan asked for the work, the skills and the length of the training. The rest can be left out." }
        ] }
    ] },
    { kurz: "Say it simply", ober: "Step 3", titel: "Say it simply in English", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say to Rohan?", lead: "Tick the sentence that is correct, simple and clear.",
        fragen: [
          { q: "Poster: „Sie nehmen Waren an, lagern sie ein und packen Pakete für den Versand.“", o: ["A warehouse worker receives goods, stores them and packs parcels.", "They take goods, put them in and pack parcels for the shipping.", "She is a warehouse and packs the parcels.", "The company has an anniversary this year."], a: 0,
            e: "Short and correct: three clear actions. The anniversary is not important for Rohan." },
          { q: "Poster: „Die Ausbildung dauert dreieinhalb Jahre.“ (car mechanic)", o: ["The training takes three and a half years.", "The training is three and a half years old.", "You are three and a half years in the garage.", "It takes dreieinhalb years."], a: 0,
            e: "„To take“ is the simple verb for how long something lasts. Do not mix German and English." },
          { q: "Poster: „Wichtig sind Freundlichkeit und etwas Englisch, denn viele Gäste kommen aus dem Ausland.“", o: ["You must be friendly and speak some English, because many guests come from other countries.", "Important are friendliness and some English, because many guests come from the foreign country.", "Many guests are important and from abroad.", "You must be a guest and speak English."], a: 0,
            e: "Say it the English way, with a normal sentence. A word-for-word version sounds strange." },
          { q: "Rohan speaks very fast and you do not understand a word. What do you say?", o: ["Could you say that again more slowly, please?", "Speak English properly!", "I understand everything.", "What? Again!"], a: 0,
            e: "Asking politely is part of mediation." }
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "You don't know the English word. Match the German word with a simple description. <span class=\"de\">Wie kannst du das Wort mit einfachen Wörtern umschreiben?</span>",
        paare: [["Rezeption", "The desk where guests arrive and get their key."], ["Gabelstapler", "A small vehicle with two arms that lifts heavy boxes."], ["Versand", "Sending parcels to customers."], ["Auszubildende", "A young person who learns a job in a company."]] },
      { art: "luecke", id: "saetze", tag: "Useful phrases", titel: "Phrases that help you", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The training ", { g: "takes" }, " three years."],
          ["You should be good ", { g: "with" }, " your hands."],
          ["The poster ", { g: "says" }, " that you need some English."],
          ["Let me ", { g: "explain" }, ": a hotel worker welcomes guests."],
          ["I don't know the word. It is a desk ", { g: "where" }, " guests arrive."]
        ], extra: ["shout", "loudly"] },
      { art: "offen", id: "hotel", tag: "Your words", titel: "The hotel job", lead: "Rohan asks: „What does a hotel worker do? How long is the training?“ Answer him in two or three English sentences. <span class=\"de\">Nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell Rohan?", m: "A hotel worker welcomes guests at the reception and helps in the restaurant and in the kitchen. The training takes three years.", k: ["guest|guests", "reception|desk|tables|table|kitchen|service|restaurant", "three|3", "training|apprenticeship"], min: 3 }],
        tipp: "Say what the person does, then the length of the training. Start like this: A hotel worker … / The training takes …" }
    ] },
    { kurz: "Language", ober: "Language", titel: "Language: simple present at work", teile: [
      { art: "text", html: "<p class=\"lead\">When you talk about jobs, you often use the <b>simple present</b>. <span class=\"de\">Wenn du über Berufe sprichst, brauchst du oft das simple present.</span></p>" },
      { art: "merke", kopf: "SIMPLE PRESENT", html: "<ul><li>He/she/it gets an <b>-s</b>: A mechanic repair<b>s</b> cars.</li><li>Negative: <b>do not / does not</b> + verb: A driver <b>does not</b> work in an office.</li><li>Question: <b>Do / Does</b> + subject + verb: <b>Does</b> a cook work at weekends?</li><li>Adverbs of frequency stand before the verb: She <b>always</b> smiles. They <b>sometimes</b> work late.</li><li>Word order: <b>how</b> – <b>where</b> – <b>when</b>: She works carefully in the garage every day.</li></ul>" },
      { art: "luecke", id: "present", tag: "Language", titel: "Fill in the gaps", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A car mechanic ", { g: "repairs" }, " cars every day."],
          ["Two trainees ", { g: "welcome" }, " the guests at the door."],
          ["A warehouse worker ", { g: "does not" }, " work in an office."],
          ["Question: ", { g: "Does" }, " a hotel worker work at weekends?"],
          ["A good receptionist ", { g: "always" }, " smiles at the guests."]
        ], extra: ["goes", "are"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Tell Rohan about the delivery driver.", o: ["A delivery driver starts work early.", "A delivery driver start work early.", "A delivery driver starting work early.", "A delivery driver is start work early."], a: 0,
            e: "He, she and it need the verb with -s: starts." },
          { q: "Ask Rohan about his family.", o: ["Does your uncle work in a bank?", "Do your uncle works in a bank?", "Does your uncle works in a bank?", "Is your uncle work in a bank?"], a: 0,
            e: "After does the verb has no -s: Does your uncle work …?" },
          { q: "Which sentence has the right word order?", o: ["A mechanic works carefully in the garage every day.", "A mechanic works every day in the garage carefully.", "A mechanic works in the garage carefully every day.", "A mechanic carefully works every day in the garage."], a: 0,
            e: "The order is: how (carefully) – where (in the garage) – when (every day)." }
        ] }
    ] },
    { kurz: "English to German", ober: "Step 4", titel: "From English into German", teile: [
      { art: "text", html: "<p class=\"lead\">A company called <b>Brightway Services</b> gave Rohan a flyer in English. Your classmate <b>Ella</b> is looking for a work placement and asks you in German what the flyer says. <span class=\"de\">Du erklärst Ella auf Deutsch, was wichtig ist – nicht alles und nicht Wort für Wort.</span></p>" },
      { art: "lesetext", lesetext: "u2-med-flyer" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the flyer say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-med-flyer",
        fragen: [
          { q: "When does a customer adviser usually work?", zeilen: [6, 6], e: "From Monday to Friday, usually from eight to four.", tipp: "Look at the paragraph about the customer adviser." },
          { q: "When does the IT assistant get a free afternoon?", zeilen: [10, 10], e: "After working in the evening.", tipp: "Look for the words: in the evening." },
          { q: "What does a delivery driver need?", zeilen: [12, 12], e: "A driving licence.", tipp: "Look at the paragraph about the delivery driver." },
          { q: "What should Ella send if she is interested?", zeilen: [14, 14], e: "A short e-mail with her name and age.", tipp: "Look at the last paragraph." }
        ] },
      { art: "tf", id: "blatt-tf", tag: "True or false?", titel: "What does the flyer say?", lead: "Tick true or false.",
        aussagen: [
          ["A customer adviser must be patient and polite.", true],
          ["The IT assistant repairs cars.", false],
          ["A delivery driver starts work at six o'clock.", true],
          ["Brightway Services is a company with sixty employees.", true],
          ["You need a driving licence to be a customer adviser.", false]
        ] },
      { art: "sort", id: "wichtig-ella", tag: "Choose", titel: "What does Ella need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du Ella? Was lässt du weg?</span>",
        buckets: ["Tell Ella", "Not necessary"],
        items: [{ t: "Customer advisers answer questions by phone and e-mail", b: 0 }, { t: "IT assistants help when a computer does not work", b: 0 }, { t: "A delivery driver needs a driving licence", b: 0 }, { t: "She should send a short e-mail with her name and age", b: 0 },
                { t: "The company has sixty employees", b: 1 }, { t: "The office has a roof garden", b: 1 }, { t: "New colleagues get a free lunch", b: 1 }] },
      { art: "mc", id: "adressat", tag: "Think", titel: "Who is it for?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which German sentence is the best help for Ella?", o: ["Im Kundendienst beantwortest du Fragen von Kunden am Telefon und per E-Mail; du solltest geduldig und höflich sein.", "Kundenberater: Sie beantworten Fragen von Kunden mit Telefon und E-Mail. Sie müssen sein geduldig.", "Die Firma hat einen Dachgarten und eine Kaffeeecke.", "Es gibt dort Arbeit."], a: 0,
            e: "Short, clear, useful for Ella: the task and what you need. The roof garden does not help her." },
          { q: "How do you talk to Ella?", o: ["In normal German, short and clear, with the points she asked for.", "In English, because the flyer is in English.", "You read the flyer aloud in English.", "You give her the flyer and say nothing."], a: 0,
            e: "Mediation means: think about the person. Ella wants to know about jobs in her own language." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to Ella", min: 35,
        auftrag: "<p><strong>Sprachmittlung:</strong> Deine Mitschülerin Ella sucht einen Platz für ihr Betriebspraktikum. Rohan hat von der Firma Brightway Services ein englisches Blatt bekommen. Erkläre Ella <b>auf Deutsch</b> das Wichtige: Welche Jobs gibt es, was macht man dort und was muss man können oder haben?</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Sag ihr auch, wie sie sich melden kann.</p>",
        starter: ["Ella, die Firma hat drei Jobs:", "Im Kundendienst …", "Die IT-Assistenten …", "Der Lieferfahrer braucht …", "Wenn du Interesse hast, …"],
        kriterien: ["Der Text nennt die drei Jobs.", "Der Text sagt, was man in jedem Job macht.", "Der Text nennt, was man können oder haben muss (zum Beispiel geduldig sein, Führerschein).", "Er sagt, wie sich Ella melden kann (kurze E-Mail mit Name und Alter).", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung.", "Unwichtiges (Zahl der Mitarbeiter, Dachgarten, Mittagessen) fehlt."] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: help Rohan", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. <span class=\"de\">Spielt das Gespräch zu zweit. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Read the German poster.</li><li>Tell Rohan what the three jobs are.</li><li>Say what you do and how long the training is.</li><li>Ask Rohan which job is right for him.</li></ul></div><div class=\"sprech-karte b\"><h4>Rohan</h4><ul><li>Ask: What does a car mechanic do?</li><li>Ask: Which job needs good English?</li><li>Ask: How long is the training?</li><li>Say which job you like and why.</li></ul></div></div><div class=\"phrasen\"><span>The poster says …</span><span>You must be … / You need …</span><span>The training takes …</span><span>Could you say that again, please?</span><span>Which job do you like?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Which job is right for you?", lead: "Rohan asks: „Which of the three jobs is right for you?“ Answer in two or three English sentences. <span class=\"de\">Sag, welcher Beruf zu dir passt, und warum.</span>",
        fragen: [{ q: "Which job is right for you? Tell Rohan.", m: "I would like to be a car mechanic because I like technology and I am good with my hands. The training takes three and a half years.", k: ["would like|want|like|prefer|interested", "because|as", "mechanic|hotel|warehouse|logistics|car|job", "technology|cars|people|guests|team|hands|computers|english"], min: 3 }],
        tipp: "Start like this: I would like to be … because …" },
      { art: "offen", id: "challenge", m7: true, tag: "Challenge", titel: "A message for Rohan", lead: "Frau Lindner sagt: „Sag Rohan bitte, dass er sich bis Freitag bei mir für einen Besuch im Autohaus anmelden kann und dass der Bus um acht Uhr vor der Schule abfährt.“ Tell Rohan in one or two English sentences.",
        fragen: [{ q: "What do you tell Rohan?", m: "Frau Lindner says you can sign up with her until Friday for a visit to the car dealership. The bus leaves at eight o'clock in front of the school.", k: ["friday|Friday", "sign up|register|name|tell|ask", "bus", "eight|8"], min: 3 }],
        tipp: "Start like this: Frau Lindner says you can … until Friday." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I think of the ", { g: "person" }, " and what he or she wants to know."],
          ["Then I ", { g: "choose" }, " the important points and ", { g: "leave out" }, " the rest."],
          ["I say it in ", { g: "simple" }, " words and I do not translate ", { g: "word for word" }, "."],
          ["At the end I ", { g: "check" }, " that the person has understood."]
        ], extra: ["copy", "guess"] }
    ] }
  ],
  weiter: { text: "Well done! You can find, choose and pass on information about jobs in both directions. You are ready for the next task." }
});
