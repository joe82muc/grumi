/* Englisch 9R · Unit 3 Discover South Africa · Listening: What happened?
   (Gespräche und Telefonate verstehen: Thema erfassen, Zahlen, Uhrzeiten und Namen heraushören, Reihenfolge von Ereignissen,
   Notizen und ein Formular ausfüllen, Sprache im Gespräch – past progressive mit while/when, present perfect mit for/since)
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten entnehmen, Notizen machen), E9 3 (Hörstrategien),
   E9 5 (Südafrika: Alltag junger Menschen).
   Texte: „At the police station“ (texte/u3/listening-police-statement.js) und „A call to a bike shop“
   (texte/u3/listening-bike-repair-call.js) – Straße, Bäckerei, Laden und Personen sind erfunden. */
D7Kit.seite({
  id: "u3-listening",
  titel: "Listening: What happened?",
  einleitung: "A girl tells a police officer what she saw at a small bike accident, and later a boy phones a bike shop. You listen to a statement and to a phone call. First you get the main idea, then you catch the details: times, places, numbers and the order of events.",
  zeit: "etwa 40 Minuten",
  ziele: ["🎧 I understand what happened in a short story I hear.", "🔎 I catch times, places, numbers and names.", "📝 I fill in notes and a form while I listen.", "🧩 I spot the past progressive (was / were + -ing), while and when in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    witness: ["witness", "Eine Zeugin oder ein Zeuge ist jemand, der gesehen hat, was passiert ist."],
    statement: ["statement", "Eine Aussage ist ein Bericht, den man der Polizei gibt."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten: Zahlen, Uhrzeiten, Namen, Orte."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">On a street in a small town, a boy on a bike has a little accident. Lerato saw it. She is a <button class=\"term\" data-t=\"witness\">witness</button>, so she goes to the police station and gives a <button class=\"term\" data-t=\"statement\">statement</button>. Later the boy phones a bike shop.</p><p>The street, the bakery, the shop and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["bakery", "Bäckerei"], ["helmet", "Helm"], ["bent", "verbogen"], ["brake", "bremsen"], ["bleeding", "blutend"], ["statement", "Aussage"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> only the topic.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> the details – times, numbers, names, the order of events.</li></ol><p>Times are tricky: <b>a quarter past</b> or <b>a quarter to</b>? Listen to the small word. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u3-listen-accident", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer. <span class=\"de\">Beim ersten Hören nur das Thema.</span>",
          fragen: [
            { q: "Where does the conversation take place?", o: ["at a police station", "at a school", "in a bakery", "in a hospital"], a: 0,
              e: "Officer Naidoo thanks Lerato for coming in and asks her to sign her statement." },
            { q: "What happened on the road?", o: ["A bike hit the back of a van.", "Two cars crashed.", "A dog ran across the road.", "A bus stopped suddenly."], a: 0,
              e: "Kagiso braked hard, but his bike hit the back of the white van." },
            { q: "How is Kagiso after the accident?", o: ["He is not badly hurt.", "He is badly hurt.", "He is not hurt at all.", "He is in hospital."], a: 0,
              e: "His knee was bleeding, but he stood up at once. So he is hurt a little, not badly." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u3-listen-accident", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. <span class=\"de\">Hör noch einmal zu und achte auf Tage und Zeiten.</span>",
          aussagen: [
            ["Lerato was walking home when she saw the van.", true],
            ["The accident happened on a Wednesday.", false],
            ["Kagiso was riding slowly.", false],
            ["Kagiso was wearing a helmet.", true],
            ["The driver ran to help Kagiso.", true]
          ] },
        { art: "mc", id: "zeit", titel: "Times and numbers", lead: "Tick the correct answer.",
          fragen: [
            { q: "What time was the accident?", o: ["a quarter past four", "a quarter to four", "half past four", "four o'clock"], a: 0,
              e: "Lerato says: It was Tuesday, at a quarter past four." },
            { q: "How long has Lerato lived near the road?", o: ["six years", "ten years", "two years", "sixteen years"], a: 0,
              e: "She says: I have lived near there for six years. The number ten is about something else." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the accident", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The van was backing out of the ", { g: "bakery" }, " yard."],
            ["Kagiso was late for ", { g: "football" }, " training."],
            ["He wore a ", { g: "helmet" }, ", so his head was fine."],
            ["The front ", { g: "wheel" }, " of his bike is bent."]
          ], extra: ["school", "knee"] },
        { art: "ordnen", id: "reihenfolge", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
          schritte: ["Lerato sees a white van.", "Kagiso rides round the corner.", "Kagiso brakes, but the bike hits the van.", "The driver runs to help.", "Kagiso's mother arrives."] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to a bike shop", teile: [
      { art: "text", html: "<p class=\"lead\">Kagiso phones a bike shop because his bike is damaged. Read the tasks, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u3-listen-repair", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Kagiso call?", o: ["His bike needs a repair.", "He wants to buy a new bike.", "He wants to sell his bike.", "He lost his helmet."], a: 0,
              e: "He says: I had a small accident on my bike, and I need a repair." },
            { q: "How is Kagiso?", o: ["He says he is fine.", "He says he is in pain.", "He says he cannot walk.", "He does not say anything."], a: 0,
              e: "He says: I am fine, thank you." }
          ] },
        { art: "formular", id: "karte", titel: "Repair form", lead: "Listen again and complete the form. <span class=\"de\">Hör noch einmal zu und fülle das Formular aus.</span>",
          karte: "<p>Fill in the form with the information from the call.</p>",
          kopf: "Blue Gate Cycles – Repair form",
          felder: [
            { label: "First name", loesung: ["Kagiso", "KAGISO", "K A G I S O", "K-A-G-I-S-O"] },
            { label: "Road of the accident", loesung: ["Protea Road", "Protea", "Protea Rd"] },
            { label: "Day of the accident", loesung: ["Tuesday"], wahl: ["Monday", "Tuesday", "Wednesday"] },
            { label: "What is damaged?", loesung: ["front wheel", "the front wheel", "wheel at the front"], wahl: ["front wheel", "back wheel", "saddle"] },
            { label: "Day to bring the bike", loesung: ["Friday"], wahl: ["Thursday", "Friday", "Saturday"] },
            { label: "Time", loesung: ["4.45", "4:45", "16.45", "16:45", "4.45 pm", "4:45 pm", "a quarter to five", "quarter to five"] }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 3 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>Lerato's story uses three things from Unit 3:</p><ul><li><b>past progressive</b> (was / were + -ing) – what was going on in the background: The van <u>was backing</u> out. Kagiso <u>was cycling</u> down the hill.</li><li><b>when</b> and <b>while</b> – <b>while</b> = two things go on at the same time: <u>While</u> the driver <u>was looking</u> back, Kagiso <u>was cycling</u>. <b>when</b> = a short action interrupts: I <u>was walking</u> home <u>when</u> I saw a van. The short action is in the simple past.</li><li><b>present perfect with for / since</b> (Revision) – from the past until now: I <u>have lived</u> here <u>for</u> six years. He <u>has worked</u> there <u>since</u> last spring.</li></ul>" },
      { art: "sort", id: "tenses", tag: "Sort", titel: "Background or short action?", lead: "Put the phrases from the talk into the right box.",
        buckets: ["background (was / were + -ing)", "short action (simple past)"],
        items: [{ t: "A van was backing out", b: 0 }, { t: "The driver was looking over his shoulder", b: 0 }, { t: "Kagiso was cycling down the hill", b: 0 }, { t: "His knee was bleeding", b: 0 },
                { t: "He braked hard", b: 1 }, { t: "The bike hit the van", b: 1 }, { t: "He stood up", b: 1 }, { t: "He phoned Kagiso's mother", b: 1 }] },
      { art: "luecke", id: "grammar-gaps", tag: "Gap text", titel: "Complete the sentences", lead: "Complete the sentences. <span class=\"de\">Gleichzeitig = while, kurze Handlung dazwischen = when.</span>",
        absaetze: [
          ["I was walking home ", { g: "when" }, " I saw the van."],
          [{ g: "While" }, " the driver was looking back, Kagiso was cycling down the hill."],
          ["His knee ", { g: "was bleeding" }, ", but he stood up at once."],
          ["I ", { g: "have lived" }, " near the bakery for six years."],
          ["Mr van Wyk ", { g: "has worked" }, " at the bakery since last spring."]
        ], extra: ["were bleeding", "am living"] },
      { art: "offen", id: "gestern", tag: "Your words", titel: "What were you doing?", lead: "Write two sentences about yesterday at four o'clock. Use was or were + -ing. <span class=\"de\">Zum Beispiel: I was playing football.</span>",
        fragen: [{ q: "What were you and your friends doing yesterday at four o'clock?", m: "At four o'clock I was playing football with my friends. My sister was doing her homework.", k: ["was|were", "ing"], min: 2 }],
        tipp: "Start like this: At four o'clock I was … / My friend was … / We were …" },
      { art: "offen", id: "while", m7: true, tag: "Your words", titel: "A sentence with while", lead: "Write one sentence with while. Say what two people were doing at the same time. <span class=\"de\">Zwei Handlungen gleichzeitig.</span>",
        fragen: [{ q: "What were two people doing at the same time?", m: "While my mum was cooking dinner, my brother was watching television.", k: ["while", "was|were"], min: 2 }],
        tipp: "Start like this: While I was …, my friend was …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two talks in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Gespräch.</span>",
        absaetze: [
          ["Lerato is a ", { g: "witness" }, " of a small accident on Protea Road."],
          ["Kagiso's bike hit the back of a ", { g: "van" }, "."],
          ["Kagiso was not badly ", { g: "hurt" }, ", but his front wheel was bent."],
          ["He phones a bike shop and asks for a ", { g: "repair" }, "."]
        ], extra: ["tourist", "ticket"] }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea, the times and the order of events in a statement and in a phone call. You also know how the past progressive, while and when sound in real talk." }
});
