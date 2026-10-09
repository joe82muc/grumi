/* Englisch 9R · Unit 1 Around Australia · Listening: Plans for the long weekend
   (Gespräche verstehen: Thema erfassen, Einzelheiten heraushören – Uhrzeit, Ort, Preis, Problem und Lösung –, Notizen und
   ein Formular ausfüllen, Sprache im Gespräch – will-future, if-Sätze Typ I, simple past, die Grammatik der Unit)
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten entnehmen, Notizen machen), E9 3 (Hörstrategien),
   E9 5 (Australien: Alltag und Freizeit).
   Texte: „Plans for the long weekend“ (texte/u1/listening-long-weekend.js) und „A phone call to the doctor's“
   (texte/u1/listening-doctors-call.js) – Personen, See und Arztpraxis sind erfunden. */
D7Kit.seite({
  id: "u1-listening",
  titel: "Listening: Plans for the long weekend",
  einleitung: "Two friends plan a camping trip – and one of them hurts his ankle. You listen to a conversation and to a phone call. First you get the main idea, then you catch the details: times, places, prices and names.",
  zeit: "etwa 40 Minuten",
  ziele: ["🎧 I understand what a conversation is about.", "🔎 I catch times, prices, places and names.", "📝 I fill in notes and a form while I listen.", "🧩 I spot the grammar of Unit 1 in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    forecast: ["forecast", "Vorhersage, hier: Wettervorhersage."],
    appointment: ["appointment", "Termin, zum Beispiel beim Arzt."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten: Zahlen, Uhrzeiten, Namen, Orte."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">It is Wednesday. On Friday the long weekend starts, and two friends in a small Australian town have a plan. You will hear their conversation – and a phone call afterwards.</p><p>The town, the lake and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["campsite", "Campingplatz"], ["torch", "Taschenlampe"], ["sleeping bag", "Schlafsack"], ["matches", "Streichhölzer"], ["forecast", "Wettervorhersage"], ["swollen", "geschwollen"], ["appointment", "Termin"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> only the topic.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> the details – numbers, times, names.</li></ol><p>You do <b>not</b> need to understand every word. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u1-listen-camping", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer. <span class=\"de\">Beim ersten Hören nur das Thema.</span>",
          fragen: [
            { q: "What are Nina and Declan planning?", o: ["a camping trip to a lake", "a bike ride to the beach", "a school trip to the city", "a party at Declan's house"], a: 0,
              e: "They talk about a camping trip to Lake Tarrin." },
            { q: "Why do they not go to the beach this time?", o: ["It was too crowded last year.", "The beach is too far away.", "The water is too cold in autumn.", "The bus does not go there."], a: 0,
              e: "Nina says that the beach was too crowded last year." },
            { q: "What is Declan's problem?", o: ["His sleeping bag has a hole.", "He forgot the matches.", "He has no money for the bus.", "His tent is too small."], a: 0,
              e: "Declan's sleeping bag has a big hole. The matches were last year's problem." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u1-listen-camping", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. <span class=\"de\">Hör noch einmal zu und achte auf Zahlen und Orte.</span>",
          aussagen: [
            ["The bus leaves at eight o'clock.", true],
            ["The friends meet in front of the station.", false],
            ["The bus ticket costs six dollars.", true],
            ["This year they forgot the matches.", false],
            ["Declan will make pasta on the first evening.", true],
            ["Nina's brother has a new sleeping bag.", false]
          ] },
        { art: "luecke", id: "notizen", titel: "Declan's notes", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Campsite: ", { g: "eighteen" }, " dollars for the whole weekend."],
            ["Nina brings the tent and two ", { g: "torches" }, "."],
            ["I bring food and the cooking ", { g: "stove" }, "."],
            ["Problem: my sleeping bag has a ", { g: "hole" }, "."],
            ["Weather: it might rain on ", { g: "Sunday" }, "."]
          ], extra: ["Saturday", "pocket"] },
        { art: "ordnen", id: "reihenfolge", titel: "What do they talk about?", lead: "Put the topics in the order of the conversation. <span class=\"de\">Bringe die Themen in die richtige Reihenfolge.</span>",
          schritte: ["They choose the lake.", "They agree where and when to meet.", "Nina tells Declan the price.", "They decide who brings what.", "Declan tells Nina about his problem.", "They talk about the weather."] },
        { art: "mc", id: "wetter", titel: "If the sun shines …", lead: "Tick the correct answer.",
          fragen: [
            { q: "What will the friends do if the sun shines?", o: ["They will swim in the lake.", "They will play cards in the tent.", "They will cook pasta.", "They will go home."], a: 0,
              e: "Declan says: If the sun shines, we will swim in the lake. Cards are the plan for rain." }
          ] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to the doctor's", teile: [
      { art: "text", html: "<p class=\"lead\">A few days later Declan makes a phone call. Read the tasks, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u1-listen-surgery", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Declan call the practice?", o: ["His ankle hurts and is swollen.", "He has a bad sunburn.", "He wants to cancel an appointment.", "He needs a letter for school."], a: 0,
              e: "He hurt his ankle on the camping trip." },
            { q: "What should Declan do until his appointment?", o: ["Keep his foot up and not walk too much.", "Walk for an hour every day.", "Stay in bed for a week.", "Put a hot bottle on his ankle."], a: 0,
              e: "The receptionist says: keep your foot up and do not walk too much." }
          ] },
        { art: "formular", id: "karte", titel: "Declan's appointment card", lead: "Listen again and complete the card. <span class=\"de\">Hör noch einmal zu und fülle die Karte aus.</span>",
          karte: "<p>Fill in the card with the information from the call.</p>",
          kopf: "Greenfield Medical Practice – Appointment card",
          felder: [
            { label: "Surname", loesung: ["Pryor", "PRYOR", "P R Y O R", "P-R-Y-O-R"] },
            { label: "What hurts?", loesung: ["ankle"], wahl: ["wrist", "knee", "ankle"] },
            { label: "Doctor", loesung: ["Singh", "Doctor Singh", "Dr Singh", "Dr. Singh"] },
            { label: "Day", loesung: ["Tuesday"], wahl: ["Monday", "Tuesday", "Wednesday"] },
            { label: "Time", loesung: ["4.10", "4:10", "16.10", "16:10", "4.10 pm", "4:10 pm", "ten past four", "10 past 4"] },
            { label: "Bring", loesung: ["health card", "my health card", "your health card", "the health card"] }
          ] },
        { art: "luecke", id: "ratschlag", titel: "The doctor's advice", lead: "Complete the advice with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["If your ankle hurts a lot, put some ", { g: "ice" }, " on it."],
            ["Do this for ", { g: "twenty" }, " minutes."],
            ["If the pain gets worse, ", { g: "call" }, " the practice again or go to the hospital."]
          ], extra: ["hot", "ten"] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 1 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The conversation uses three things from Unit 1:</p><ul><li><b>will-future</b> – spontaneous decisions and what you think will happen: I <u>will ask</u> my brother. It <u>will be</u> quiet.</li><li><b>simple past</b> – what happened: Last year we <u>went</u> to the beach.</li><li><b>if-sentences (type I)</b> – what will happen if …: <u>If</u> it <u>rains</u>, we <u>will stay</u> in the tent.</li></ul>" },
      { art: "sort", id: "zeiten", tag: "Sort", titel: "Past or future?", lead: "Put the phrases from the conversation into the right box.",
        buckets: ["It happened (simple past)", "It will happen (will-future)"],
        items: [{ t: "went to the beach", b: 0 }, { t: "forgot the matches", b: 0 }, { t: "had cold sandwiches", b: 0 }, { t: "was too crowded", b: 0 },
                { t: "will bring the tent", b: 1 }, { t: "will ask my brother", b: 1 }, { t: "will be quiet", b: 1 }, { t: "will swim in the lake", b: 1 }] },
      { art: "luecke", id: "if-luecke", tag: "Gap text", titel: "What will happen if …?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will.</span>",
        absaetze: [
          ["If it ", { g: "rains" }, ", the friends ", { g: "will stay" }, " in the tent."],
          ["If the sun ", { g: "shines" }, ", they ", { g: "will swim" }, " in the lake."],
          ["If the pain ", { g: "gets" }, " worse, Declan ", { g: "will call" }, " the practice again."]
        ], extra: ["will rain", "swam"] },
      { art: "offen", id: "regen", m7: true, tag: "Your words", titel: "What about you?", lead: "What will you do if it rains on your trip? Write one sentence. <span class=\"de\">Benutze if und will.</span>",
        fragen: [{ q: "What will you do if it rains on your trip?", m: "If it rains, I will stay in the tent and read a book.", k: ["if", "rain|rains|raining|weather", "will|'ll"], min: 3 }],
        tipp: "Start like this: If it rains, I will … (stay in the tent / play cards / go to a café)." },
      { art: "offen", id: "letztes-jahr", m7: true, tag: "Your words", titel: "Last year …", lead: "Write one sentence about last year's holiday. Use the simple past. <span class=\"de\">Zum Beispiel: Last year I went to …</span>",
        fragen: [{ q: "What did you do last year in the holidays?", m: "Last year I went to my grandmother and we played games.", k: ["last|ago|yesterday", "went|visited|played|stayed|saw|had|was|ate|swam|walked|travelled|took|made|did"], min: 2 }],
        tipp: "Start like this: Last year I went / visited / played …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two talks in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Gespräch.</span>",
        absaetze: [
          ["Nina and Declan want to go ", { g: "camping" }, " at a lake on the long weekend."],
          ["Declan's sleeping bag has a hole, but Nina's ", { g: "brother" }, " has an old one."],
          ["Later Declan hurts his ", { g: "ankle" }, " and makes an ", { g: "appointment" }, " at the doctor's."],
          ["The doctor will see him on ", { g: "Tuesday" }, " afternoon."]
        ], extra: ["Monday", "sister"] }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea and the details in a conversation and in a phone call. Next: speaking." }
});
