/* Englisch 9R · Unit 2 Exploring India · Listening: Welcome to our company
   (Gespräche und Telefonate verstehen: Thema erfassen, Zahlen, Uhrzeiten und Namen heraushören, Notizen und ein Formular
   ausfüllen, Sprache im Gespräch – simple present (Revision), word order (Revision))
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten entnehmen, Notizen machen), E9 3 (Hörstrategien),
   E9 5 (Indien: Arbeit und Alltag).
   Texte: „Welcome to Diya Solar Workshop“ (texte/u2/listening-company-tour.js) und „A call about a work placement“
   (texte/u2/listening-work-placement.js) – Firmen, Stadt und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-listening",
  titel: "Listening: Welcome to our company",
  einleitung: "A group of students visits a small company in India, and later someone phones another company. You listen to a guided tour and to a phone call. First you get the main idea, then you catch the details: numbers, times, places and names.",
  zeit: "etwa 40 Minuten",
  ziele: ["🎧 I understand what a conversation is about.", "🔎 I catch numbers, times, places and names.", "📝 I fill in notes and a form while I listen.", "🧩 I spot the simple present and the word order in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    placement: ["work placement", "Ein Praktikum: Du arbeitest eine Zeit lang in einer Firma und lernst den Beruf kennen."],
    steady: ["steady electricity", "Gleichmäßiger Strom, der nicht immer wieder ausfällt."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten: Zahlen, Uhrzeiten, Namen, Orte."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">In the city of Nilgram, a group of students visits a small company. A guide shows them around and answers their questions. Later you hear a phone call to a cycle workshop.</p><p>The companies, the city and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["workshop", "Werkstatt"], ["canteen", "Kantine"], ["repair", "reparieren"], ["deliver", "liefern"], ["safety glasses", "Schutzbrille"], ["work placement", "Praktikum"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> only the topic.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> the details – numbers, times, names.</li></ol><p>Numbers and times are tricky: <b>thirteen</b> or <b>thirty</b>? Listen to the end of the word. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u2-listen-company", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer. <span class=\"de\">Beim ersten Hören nur das Thema.</span>",
          fragen: [
            { q: "What does the company make?", o: ["small solar lamps", "school uniforms", "bicycles", "mobile phones"], a: 0,
              e: "Mrs Verma says: We make small solar lamps." },
            { q: "Why are the students at the company?", o: ["They visit it and ask questions.", "They look for a job there.", "They repair lamps for a customer.", "They bring new boxes."], a: 0,
              e: "Mrs Verma shows visitors around, and the students ask her questions." },
            { q: "What is special about the company?", o: ["It repairs old lamps for free.", "It has a big canteen.", "It sells lamps in a shop in the city.", "It works seven days a week."], a: 0,
              e: "A worker mends an old lamp on the same day, and the customer does not pay. There is no canteen, and the workshop is closed on Sundays." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u2-listen-company", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. <span class=\"de\">Hör noch einmal zu und achte auf Zahlen und Zeiten.</span>",
          aussagen: [
            ["The lamps shine for ten hours at night.", true],
            ["The working day starts at nine o'clock.", false],
            ["On Saturday the workers stop at noon.", true],
            ["The company has a canteen.", false],
            ["A worker mends an old lamp on the same day.", true]
          ] },
        { art: "mc", id: "anzahl", titel: "How many people?", lead: "Tick the correct answer.",
          fragen: [
            { q: "How many of the workers build the lamps?", o: ["twenty", "six", "ten", "thirty-six"], a: 0,
              e: "Twenty build the lamps. Six work in the office, ten pack and drive, and thirty-six is the whole team." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the company", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Team: ", { g: "thirty-six" }, " people."],
            ["Lunch at half past twelve on the ", { g: "roof" }, "."],
            ["The lamps go to forty villages in the ", { g: "hills" }, "."],
            ["Old lamps: the repair is ", { g: "free" }, "."]
          ], extra: ["canteen", "office"] },
        { art: "ordnen", id: "reihenfolge", titel: "What do they talk about?", lead: "Put the topics in the order of the tour. <span class=\"de\">Bringe die Themen in die richtige Reihenfolge.</span>",
          schritte: ["Mrs Verma says what the company makes.", "She tells who buys the lamps.", "She says how many people work there.", "She explains the working hours.", "She talks about lunch.", "She explains the free repair."] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to a cycle workshop", teile: [
      { art: "text", html: "<p class=\"lead\">Priya is a student. She phones a cycle workshop because she wants to do a work placement. Read the tasks, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u2-listen-visit", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Priya call?", o: ["She asks about a work placement.", "She wants to buy a bike.", "She wants to report a problem.", "She wants to cancel a visit."], a: 0,
              e: "She says: I would like to do a work placement with you." },
            { q: "What does the receptionist say first?", o: ["Priya must visit the workshop first.", "Priya can start on Monday.", "Priya should send an e-mail.", "Priya must call again next month."], a: 0,
              e: "The receptionist says: First you must visit us." }
          ] },
        { art: "formular", id: "karte", titel: "Priya's visit card", lead: "Listen again and complete the card. <span class=\"de\">Hör noch einmal zu und fülle die Karte aus.</span>",
          karte: "<p>Fill in the card with the information from the call.</p>",
          kopf: "Green Wheels Cycle Workshop – Visit card",
          felder: [
            { label: "Surname", loesung: ["Menon", "MENON", "M E N O N", "M-E-N-O-N"] },
            { label: "Ask for", loesung: ["Bhatt", "Mr Bhatt", "Mister Bhatt", "Mr. Bhatt"] },
            { label: "Day", loesung: ["Thursday"], wahl: ["Wednesday", "Thursday", "Friday"] },
            { label: "Time", loesung: ["9.30", "9:30", "09.30", "09:30", "9.30 am", "9:30 am", "half past nine"] },
            { label: "Bring", loesung: ["school card", "my school card", "your school card", "the school card"] },
            { label: "Wear", loesung: ["closed shoes", "shoes", "closed shoes and", "strong shoes"], wahl: ["a hat", "closed shoes", "old gloves"] }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 2 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The tour uses two things from Unit 2:</p><ul><li><b>simple present</b> – facts and routines. With <i>he, she, it</i> the verb gets an <b>-s</b>: She <u>shows</u> visitors around. Questions and “no” use <i>do / does</i>: <u>Does</u> every worker learn that? We <u>do not</u> have a canteen. After <i>does</i> the verb has <b>no -s</b>.</li><li><b>word order</b> – subject – verb – object, then <b>how – where – when</b>: The workers build the lamps <u>carefully</u> <u>in the big hall</u> <u>every morning</u>.</li></ul>" },
      { art: "sort", id: "verb-s", tag: "Sort", titel: "With -s or without?", lead: "Put the phrases from the conversation into the right box.",
        buckets: ["no -s (I, we, you, they)", "with -s (he, she, it)"],
        items: [{ t: "We make small solar lamps", b: 0 }, { t: "Families buy them", b: 0 }, { t: "They work from Monday to Saturday", b: 0 }, { t: "Twenty of them build the lamps", b: 0 },
                { t: "She shows visitors around", b: 1 }, { t: "A garden grows on the roof", b: 1 }, { t: "A worker mends the lamp", b: 1 }, { t: "The lamp shines for ten hours", b: 1 }] },
      { art: "luecke", id: "do-does", tag: "Gap text", titel: "Questions and answers", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach does steht kein -s am Verb.</span>",
        absaetze: [
          ["What ", { g: "does" }, " your company make?"],
          ["How many people ", { g: "work" }, " here?"],
          ["We ", { g: "do not" }, " have a canteen."],
          ["She ", { g: "shows" }, " visitors around."]
        ], extra: ["makes", "doing"] },
      { art: "ordnen", id: "wortstellung", tag: "Word order", titel: "Build the sentence", lead: "Put the parts in the right order: how – where – when. <span class=\"de\">Subjekt, Verb, Objekt, dann: Art und Weise – Ort – Zeit.</span>",
        schritte: ["The workers", "build the lamps", "carefully", "in the big hall", "every morning."] },
      { art: "offen", id: "schultag", tag: "Your words", titel: "Your school day", lead: "Write one sentence about your school day. Use the simple present and a time word. <span class=\"de\">Zum Beispiel: I get up at six.</span>",
        fragen: [{ q: "What do you do on a normal school day?", m: "I get up at six and I walk to school with my friends every day.", k: ["get|go|walk|start|have|eat|take|come|play|read", "every|always|usually|often|never|sometimes|at |on "], min: 2 }],
        tipp: "Start like this: I get up at … / I start school at … / My friend often …" },
      { art: "offen", id: "fragen", m7: true, tag: "Your words", titel: "Your questions", lead: "You visit a company. Write two questions for the guide. Use do or does. <span class=\"de\">Benutze do oder does.</span>",
        fragen: [{ q: "Which questions do you ask the guide?", m: "Does your company make bicycles? How many people work here?", k: ["do|does|how many|what|when|where|who", "you|your|company|workers|people|here|work"], min: 2 }],
        tipp: "Start like this: Does your company …? / How many people …? / When do you …?" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two talks in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Gespräch.</span>",
        absaetze: [
          ["Diya Solar Workshop makes ", { g: "solar" }, " lamps for villages in the hills."],
          ["The workers start at ", { g: "eight" }, " o'clock and eat lunch on the roof."],
          ["If a customer brings back an old lamp, a worker ", { g: "repairs" }, " it for free."],
          ["Priya wants to do a work ", { g: "placement" }, " at a cycle workshop."]
        ], extra: ["canteen", "ticket"] }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea and the details in a tour and in a phone call. You also know how the simple present and the word order sound in real talk." }
});