/* Englisch 9R · Unit 4 News from New Zealand · Revision: Fit for the test: Unit 4
   (gemischte Wiederholung: Wortschatz „Jobs and qualities“ und „Talking about an internship“, going to-future,
   Passiv verstehen (simple present und simple past; selbst bilden nur als Challenge), simple past im Bericht,
   kurzer Lesetext, kurzer Hörtext, Mini-Sprachmittlung, Mini-Schreibauftrag)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten, Passiv),
   E9 5 (Beruf, Praktikum, Pläne).
   Texte: „My week at the hair salon“ (texte/u4/revision-reading-salon.js), „Plans after the exams“
   (texte/u4/revision-listening-plans.js) – Salon, Verein und Personen sind erfunden. */
D7Kit.seite({
  id: "u4-revision",
  titel: "Fit for the test: Unit 4",
  einleitung: "Test day is coming! In this module you revise everything from Unit 4: words about jobs and internships, the going to-future, the passive (you must understand it) and the simple past in a report. You also read, listen, help at a summer party and write about work experience or your plans.",
  zeit: "etwa 40 Minuten",
  ziele: ["📚 I know the important words of Unit 4.", "🧩 I use am / is / are going to for plans, and I understand passive sentences.", "🔎 I read, listen and pick out details.", "✍️ I write a short report or plan and avoid typical mistakes."],
  quiz: { profi: "Test pro" },
  glossar: {
    goingto: ["going to-future", "Mit am, is oder are plus going to und dem Grundverb sagt man, was man vorhat. Man benutzt es auch, wenn man schon sieht, dass etwas gleich passiert. Beispiel: I am going to apply for a job."],
    passive: ["passive", "Im Passiv steht nicht die Person im Vordergrund, die etwas tut, sondern das, was geschieht. Es wird mit einer Form von to be und der dritten Verbform gebildet. Mit by kann man sagen, wer etwas tut. Beispiel: The towels are washed by the apprentice."],
    simplepast: ["simple past", "Die einfache Vergangenheit für abgeschlossene Handlungen, etwa in einem Bericht. Beispiel: I worked in a shop last week."],
    reference: ["reference", "Ein Zeugnis oder Empfehlungsschreiben, in dem ein Betrieb sagt, wie gut jemand gearbeitet hat."],
    forecast: ["forecast", "Die Wettervorhersage, also die Aussage, wie das Wetter wird."],
    plumber: ["plumber", "Ein Klempner oder eine Klempnerin, also eine Person, die Wasserleitungen und Heizungen einbaut und repariert."]
  },
  haupttext: "u4-rev-salon",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 4", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for jobs and for an internship. <span class=\"de\">Zuerst der Wortschatz der beiden Wortlisten dieser Unit.</span></p>" },
      { art: "paare", id: "woerter-jobs", tag: "Jobs and qualities", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["hairdresser", "Friseur / Friseurin"], ["plumber", "Klempner / Klempnerin"], ["electrician", "Elektriker / Elektrikerin"], ["vacancy", "freie Stelle"], ["job interview", "Vorstellungsgespräch"], ["strength", "Stärke"]] },
      { art: "luecke", id: "eigenschaften", tag: "Jobs and qualities", titel: "What a good worker is like", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A good worker is ", { g: "punctual" }, " and never arrives late."],
          ["She always does what she promises, so she is ", { g: "reliable" }, "."],
          ["You have to be ", { g: "patient" }, " when you work with small children."],
          ["A ", { g: "creative" }, " hairdresser has lots of ideas for new styles."]
        ], extra: ["vacancy", "weakness"] },
      { art: "paare", id: "woerter-praktikum", tag: "Talking about an internship", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["colleague", "Kollege / Kollegin"], ["reference", "Zeugnis; Empfehlungsschreiben"], ["apprenticeship", "Ausbildung"], ["tiring", "anstrengend"], ["useful", "nützlich"], ["to answer the phone", "ans Telefon gehen"]] },
      { art: "luecke", id: "praktikum-woerter", tag: "Talking about an internship", titel: "At work", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I did my ", { g: "work experience" }, " in a garage for two weeks."],
          ["We wear a green ", { g: "uniform" }, " in the shop."],
          ["A ", { g: "customer" }, " asked me for help at the till."],
          ["You must be ", { g: "on time" }, " every morning."]
        ], extra: ["department", "shift work"] }
    ] },
    { kurz: "Going to", ober: "Grammar 1", titel: "Plans with going to", teile: [
      { art: "merke", kopf: "GOING TO: PLANS AND THINGS I CAN SEE COMING", html: "<p><b><button class=\"term\" data-t=\"goingto\">Going to-future</button></b> – <u>am / is / are</u> + <u>going to</u> + verb. I <u>am going to</u> apply for a job. She <u>is going to</u> start in May. They <u>are going to</u> move.</p><p>Question: <u>Are</u> you <u>going to</u> apply? Short answer: Yes, I am. / No, I am not.<br>You also use it when you can already see that something will happen: Look at the clouds! It <u>is going to</u> rain.</p>" },
      { art: "luecke", id: "gt-luecke", tag: "Going to", titel: "What are they going to do?", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["I ", { g: "am going to" }, " become a nurse."],
          ["My sister ", { g: "is going to" }, " start an apprenticeship in September."],
          ["Our neighbours ", { g: "are going to" }, " open a bakery."]
        ], extra: ["is going", "am go to"] },
      { art: "sort", id: "gt-sort", tag: "Going to", titel: "Plan or prediction?", lead: "Put the sentences into the right box. <span class=\"de\">Ein Plan oder etwas, das man gerade kommen sieht?</span>",
        buckets: ["plan (I decided it)", "prediction (I can see it)"],
        items: [{ t: "I am going to learn to drive in June.", b: 0 }, { t: "We are going to open a small shop.", b: 0 }, { t: "He is going to apply for an apprenticeship.", b: 0 },
                { t: "Look at the dark clouds! It is going to rain.", b: 1 }, { t: "Careful! The cup is going to fall.", b: 1 }, { t: "The bus is full. We are going to be late.", b: 1 }] },
      { art: "mc", id: "gt-fehler", tag: "Typical mistakes", titel: "Spot the mistake: going to", lead: "Tick the correct sentence. <span class=\"de\">Welcher Satz ist richtig?</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["She is going to become a chef.", "She going to become a chef.", "She is going to becomes a chef.", "She is go to become a chef."], a: 0,
            e: "Du brauchst is vor going to, und danach steht das Verb ohne Endung. Fehlt is oder bekommt das Verb ein -s, ist der Satz falsch." },
          { q: "Which sentence is correct?", o: ["Are you going to apply for the job?", "Do you going to apply for the job?", "Is you going to apply for the job?", "You going to apply for the job are?"], a: 0,
            e: "Die Frage beginnt mit der passenden Form von to be: Zu you gehört are. Do hat in dieser Frage nichts zu suchen." }
        ] }
    ] },
    { kurz: "Passive", ober: "Grammar 2", titel: "Understand the passive", teile: [
      { art: "merke", kopf: "PASSIVE: WHAT HAPPENS TO SOMETHING", html: "<p><b><button class=\"term\" data-t=\"passive\">Passive</button></b> – the thing is first: <u>is / are / was / were</u> + third form of the verb.<br>The towels <u>are washed</u> every day. (simple present)<br>The towels <u>were washed</u> yesterday. (simple past)</p><p>With <u>by</u> you say who does it: The towels are washed <u>by the apprentice</u>.<br>Active: The apprentice washes the towels. – Passive: The towels are washed by the apprentice.<br>In the test you must <b>understand</b> passive sentences. Writing them is a challenge.</p>" },
      { art: "mc", id: "pa-wer", tag: "Who does it?", titel: "Who does something?", lead: "Tick the correct answer. <span class=\"de\">Wer tut etwas? Achte auf das Wort by.</span>",
        fragen: [
          { q: "The old bridge was built by local workers. Who built the bridge?", o: ["local workers", "the old bridge", "the visitors", "nobody knows"], a: 0,
            e: "Nach by steht die Person, die etwas tut: local workers. Die Brücke ist das, was gebaut wurde." },
          { q: "Which sentence is in the past?", o: ["The towels were washed by the apprentice.", "The towels are washed by the apprentice.", "The apprentice washes the towels.", "The apprentice is washing the towels."], a: 0,
            e: "Were washed ist die Vergangenheit im Passiv. Are washed und washes sind Gegenwart." }
        ] },
      { art: "sort", id: "pa-sort", tag: "Active or passive?", titel: "Active or passive?", lead: "Put the sentences into the right box. <span class=\"de\">Wer oder was steht am Satzanfang?</span>",
        buckets: ["active", "passive"],
        items: [{ t: "The chef cooks the soup.", b: 0 }, { t: "A customer opened the door.", b: 0 }, { t: "Mrs Kingi trains the apprentices.", b: 0 }, { t: "We cleaned the workshop.", b: 0 },
                { t: "The soup is cooked by the chef.", b: 1 }, { t: "The door was opened by a customer.", b: 1 }, { t: "The apprentices are trained by Mrs Kingi.", b: 1 }, { t: "The workshop was cleaned by us.", b: 1 }] },
      { art: "offen", id: "pa-bilden", m7: true, tag: "Challenge", titel: "Make a passive sentence", lead: "Write the sentence in the passive. Use <b>by</b>. <span class=\"de\">Aktiv: The mechanic repaired the bike.</span>",
        fragen: [{ q: "The mechanic repaired the bike. Write it in the passive.", m: "The bike was repaired by the mechanic.", k: ["the bike|bike", "was repaired", "by the mechanic|by a mechanic"], min: 3 }],
        tipp: "Start with the thing: The bike … (was or were) + third form + by …" }
    ] },
    { kurz: "Simple past", ober: "Grammar 3", titel: "Simple past in a report", teile: [
      { art: "merke", kopf: "SIMPLE PAST: A REPORT ABOUT LAST WEEK", html: "<p><b><button class=\"term\" data-t=\"simplepast\">Simple past</button></b> – finished actions in a report. Regular verbs: <u>-ed</u> (I work<u>ed</u>). Irregular verbs: learn them (go – <u>went</u>, take – <u>took</u>, write – <u>wrote</u>, have – <u>had</u>, do – <u>did</u>).</p><p>Question and negative with <u>did</u> + the verb without ending: <u>Did</u> you enjoy it? I <u>did not</u> go on Friday.</p>" },
      { art: "luecke", id: "sp-luecke", tag: "Simple past", titel: "My work experience", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["Last week I ", { g: "did" }, " my work experience in a garage."],
          ["I ", { g: "took" }, " the early bus every day."],
          ["My supervisor ", { g: "showed" }, " me how to use the machine."],
          ["We ", { g: "had" }, " lunch in the garden."]
        ], extra: ["taked", "teached"] },
      { art: "mc", id: "sp-fehler", tag: "Typical mistakes", titel: "Spot the mistake: simple past", lead: "Tick the correct sentence. <span class=\"de\">Welcher Satz ist richtig?</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["Yesterday I did not go to work.", "Yesterday I did not went to work.", "Yesterday I not go to work.", "Yesterday I did not going to work."], a: 0,
            e: "Nach did not steht das Verb ohne Endung: go. Die Vergangenheit steckt schon in did." },
          { q: "Which sentence is correct?", o: ["On Monday we wrote a short report.", "On Monday we writed a short report.", "On Monday we were write a short report.", "On Monday we has written a short report."], a: 0,
            e: "Write ist unregelmäßig: wrote. Die Endung -ed gibt es bei diesem Verb nicht." }
        ] }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">A student wrote a report about her work experience. Read it first. Then listen to two friends. <span class=\"de\">Erst ein kurzer Bericht, dann ein Gespräch über Pläne.</span></p>" },
      { art: "lesetext", lesetext: "u4-rev-salon" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The salon opens at nine o'clock.", true],
          ["On Tuesday the writer cut a customer's hair.", false],
          ["The worst part of the week was talking to the customers.", false],
          ["The writer is going to ask for a reference.", true]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-rev-salon",
        fragen: [
          { q: "What did Mrs Kingi show the writer on Tuesday?", zeilen: [6, 7], e: "She showed her how to wash a customer's hair.", tipp: "Look at the second paragraph." },
          { q: "What is the writer going to do next year?", zeilen: [13, 14], e: "She is going to apply for an apprenticeship at the salon.", tipp: "Look at the last paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u4-rev-plans", fragen: [
        { art: "mc", id: "global", titel: "The conversation", lead: "Tick the correct answer.",
          fragen: [
            { q: "What is Lily going to do first after the exams?", o: ["relax for a week", "work in her uncle's café", "go camping at the lake", "start an apprenticeship"], a: 0,
              e: "Lily says: After the exams I am going to relax for a week. The café comes after that." },
            { q: "Why are Ari and his brother going to take a big tent?", o: ["It is going to rain on Saturday.", "Their friends are coming, too.", "The lake is very far away.", "Lily gave the tent to them."], a: 0,
              e: "Ari says that the forecast says it is going to rain on Saturday." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the plans", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["In the café Lily is going to make ", { g: "sandwiches" }, "."],
            ["Her uncle is going to pay her ", { g: "twelve" }, " dollars an hour."],
            ["Ari is going to start an apprenticeship as a ", { g: "plumber" }, " in September."],
            ["Ari and his brother are going to camp at the ", { g: "lake" }, "."]
          ], extra: ["carpenter", "ten"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help at a summer party and write", teile: [
      { art: "text", html: "<p class=\"lead\">Your exchange partner's father, Mr Bennett, is visiting you. He doesn't speak German. He sees this poster at the sports club and asks you what it says. <span class=\"de\">Du vermittelst: Mr Bennett versteht kein Deutsch.</span></p><blockquote>„Sommerfest beim Sportverein Rosenhain e. V.! Am letzten Samstag im Juli ab 14 Uhr auf dem Sportplatz in der Lindenstraße. Bei Regen feiern wir in der Turnhalle. Das erwartet euch: Fußballturnier für Kinder, Kuchenbuffet, Grillstand und eine Hüpfburg. Um 19 Uhr beginnt die Live-Musik. Der Eintritt ist frei. Der Vorsitzende dankt der Bäckerei am Markt für die vielen Kuchenspenden.“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells Mr Bennett the most important thing. <span class=\"de\">Was möchte er zuerst wissen?</span>",
        fragen: [
          { q: "What do you say first to Mr Bennett?", o: ["There is a summer party on Saturday afternoon at the sports field, and it is free.", "The chairman thanks the bakery for the many cakes.", "The club is called Sportverein Rosenhain e. V.", "There is a bouncy castle and a barbecue."], a: 0,
            e: "Zuerst das Wichtigste: Es gibt ein Fest, wann und wo, und es kostet nichts. Der Dank an die Bäckerei und der volle Vereinsname sind für Mr Bennett nicht wichtig, und Hüpfburg und Grillstand können später kommen." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", tag: "Your words", titel: "Tell Mr Bennett", lead: "Tell Mr Bennett in two or three English sentences: When is the party? Where is it? What happens if it rains? Is it free? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell Mr Bennett?", m: "The summer party is on Saturday afternoon, from two o'clock. It is at the sports field in Linden Street. Entry is free, and when it rains, the party is in the gym.", k: ["saturday|july", "sports field|sports ground|field", "free|no entry fee|not pay", "gym|hall|rain"], min: 3 }],
        tipp: "Start like this: The party is on … / It is at … / It is free, and if it rains …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "My day at work – or my plans", min: 40,
        auftrag: "<p>Choose <b>A</b> or <b>B</b> and write five sentences.</p><p><b>A</b> Report on one day of a real or an imagined work experience (simple past): Where were you? What did you do? What was the best part?</p><p><b>B</b> Your plans after school (going to): What are you going to do? Why?</p><p>Write at least 40 words in English.</p>",
        starter: ["Last week I …", "On the first day I …", "The best part was …", "After school I am going to …", "I am going to … because …"],
        kriterien: ["Der Text sagt, wo das Praktikum war oder was du nach der Schule vorhast.", "Er benutzt das simple past (A) oder am / is / are going to (B) richtig.", "Er enthält eine Meinung oder einen Grund (the best part was … / because …).", "Er hat mindestens 40 Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class=\"de\">Was hilft beim Lernen und im Test?</span>",
        aussagen: [
          ["I use going to for plans and for things I can already see coming.", true],
          ["After going to I use the verb with -ing.", false],
          ["In a passive sentence the person after by is the one who does the action.", true],
          ["For a finished action in a report I use going to.", false],
          ["After did I use the verb without a past ending.", true]
        ] },
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 4 in four sentences", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["For plans I use am / is / are ", { g: "going to" }, " + the verb."],
          ["In a passive sentence the person who does it comes after ", { g: "by" }, "."],
          ["A passive sentence about the past has was / were and the third form: The towels ", { g: "were washed" }, "."],
          ["In a report about last week I use the simple past: I ", { g: "worked" }, " in a shop."]
        ], extra: ["working", "tomorrow"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 4 and you know the typical mistakes. Good luck with the test!" }
});
