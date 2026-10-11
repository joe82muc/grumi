/* Englisch 9M · Unit 4 News from New Zealand · Revision: Fit for the test: Unit 4 · M-Fassung
   (gemischte Wiederholung: Wortschatz „Jobs and qualities“ und „Talking about an internship“, going to-future, Passiv verstehen
   und selbst bilden (simple present und simple past, mit by), simple past im Bericht, längerer Lesetext, Hörtext mit Korrekturen,
   Sprachmittlung mit Nebeninformationen, Schreibauftrag, drei Plus-Aufgaben)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten, Passiv),
   E9 5 (Beruf, Praktikum, Pläne).
   Texte: „My week at the hair salon“ (texte/u4/revision-reading-salon-m.js), „Plans after the exams“
   (texte/u4/revision-listening-plans-m.js) – Salon, Verein und Personen sind erfunden. Bild: 9R/Englisch/images/u4-hair-salon.jpg. */
D7Kit.seite({
  id: "u4-revision",
  titel: "Fit for the test: Unit 4",
  einleitung: "Test day is coming! In this module you revise everything from Unit 4: words about jobs and internships, the going to-future, the passive (you also build it yourself) and the simple past in a report. You read a longer report, listen to a phone call with a few surprises, help at a summer party and write about work experience or your plans.",
  zeit: "etwa 45 Minuten",
  ziele: ["📚 I know the important words of Unit 4.", "🧩 I use going to, the simple past and the passive correctly – and I build passive sentences with by.", "🔎 I read and listen between the lines.", "✍️ I explain and write a text of my own."],
  quiz: { profi: "Test pro" },
  glossar: {
    goingto: ["going to-future", "Mit am, is oder are plus going to und dem Grundverb sagt man, was man vorhat. Man benutzt es auch, wenn man schon sieht, dass etwas gleich passiert. Beispiel: I am going to apply for a job."],
    passive: ["passive", "Im Passiv steht nicht die Person im Vordergrund, die etwas tut, sondern das, was geschieht. Es wird mit einer Form von to be und der dritten Verbform gebildet. Mit by kann man sagen, wer etwas tut. Beispiel: The letters are written by the secretary."],
    simplepast: ["simple past", "Die einfache Vergangenheit für abgeschlossene Handlungen, etwa in einem Bericht. Beispiel: I worked in a shop last week."],
    reference: ["reference", "Ein Zeugnis oder Empfehlungsschreiben, in dem ein Betrieb sagt, wie gut jemand gearbeitet hat."],
    apprentice: ["apprentice", "Eine Auszubildende oder ein Auszubildender, also jemand, der einen Beruf im Betrieb lernt."],
    fringe: ["fringe", "Der Pony: die Haare, die über der Stirn liegen."],
    appointment: ["appointment", "Ein Termin, den man für einen bestimmten Tag und eine Uhrzeit ausgemacht hat."],
    forecast: ["forecast", "Die Wettervorhersage, also die Aussage, wie das Wetter wird."],
    plumber: ["plumber", "Ein Klempner oder eine Klempnerin, also eine Person, die Wasserleitungen und Heizungen einbaut und repariert."]
  },
  haupttext: "u4-rev-salon-m",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 4", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for jobs and for an internship.</p>" },
      { art: "paare", id: "woerter-jobs", tag: "Jobs and an internship", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["hairdresser", "Friseur / Friseurin"], ["vacancy", "freie Stelle"], ["apprenticeship", "Ausbildung"], ["reference", "Zeugnis; Empfehlungsschreiben"], ["colleague", "Kollege / Kollegin"], ["supervisor", "Vorgesetzte(r), Betreuer(in)"], ["strength", "Stärke"], ["to apply for", "sich bewerben um"]] },
      { art: "luecke", id: "eigenschaften", tag: "Jobs and qualities", titel: "At work", lead: "Complete the sentences with words from the box. Two words are left over.",
        absaetze: [
          ["She always arrives five minutes early. She is very ", { g: "punctual" }, "."],
          ["If he promises something, he does it. You can ask him anything because he is ", { g: "reliable" }, "."],
          ["There is a ", { g: "vacancy" }, " for a cook in the café on Mill Street."]
        ], extra: ["strength", "colleague"] }
    ] },
    { kurz: "Going to", ober: "Grammar 1", titel: "Plans with going to", teile: [
      { art: "merke", kopf: "GOING TO: PLANS AND THINGS I CAN SEE COMING", html: "<p><b><button class=\"term\" data-t=\"goingto\">Going to-future</button></b> – <u>am / is / are</u> + <u>going to</u> + base form. We <u>are going to</u> move in May. He <u>is going to</u> study in Berlin.</p><p>Negative: I <u>am not going to</u> stay. Question: <u>Are</u> you <u>going to</u> apply?<br>You also use it when you can already see that something will happen: Look at the clouds! It <u>is going to</u> snow.</p>" },
      { art: "luecke", id: "gt-luecke", tag: "Going to", titel: "What are they going to do?", lead: "Complete the sentences with a whole verb form from the box. Two forms are left over.",
        absaetze: [
          ["I ", { g: "am going to" }, " visit my grandma on Sunday."],
          ["My parents ", { g: "are going to" }, " buy a new car next month."],
          ["Careful! That glass ", { g: "is going to" }, " fall."]
        ], extra: ["is going", "will to"] },
      { art: "mc", id: "gt-fehler", tag: "Typical mistakes", titel: "Spot the mistake: going to", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["Is your brother going to apply for the apprenticeship?", "Does your brother going to apply for the apprenticeship?", "Is your brother going to applies for the apprenticeship?", "Your brother is going apply for the apprenticeship?"], a: 0,
            e: "Die Frage beginnt mit der passenden Form von to be, danach folgen going to und das Verb ohne Endung. Do hat in dieser Frage nichts zu suchen." },
          { q: "Which sentence is correct?", o: ["We are not going to work on Sunday.", "We do not going to work on Sunday.", "We are not going work on Sunday.", "We not are going to work on Sunday."], a: 0,
            e: "Die Verneinung steht nach der Form von to be: are not going to. Danach folgt das Verb ohne Endung. Do gehört nicht dazu." }
        ] }
    ] },
    { kurz: "Passive", ober: "Grammar 2 and 3", titel: "The passive – and the simple past", teile: [
      { art: "merke", kopf: "PASSIVE: BUILD IT YOURSELF", html: "<p><b><button class=\"term\" data-t=\"passive\">Passive</button></b> – the thing that is important comes first: <u>is / are / was / were</u> + third form of the verb.<br>The letters <u>are written</u> every day. (simple present)<br>The letters <u>were written</u> yesterday. (simple past)</p><p>With <u>by</u> you say who does it. To change an active sentence: the object becomes the subject, the verb becomes <i>to be + third form</i>, the subject follows after <i>by</i>.<br>Active: The secretary writes the letters. – Passive: The letters are written <u>by the secretary</u>.</p><p><b><button class=\"term\" data-t=\"simplepast\">Simple past</button></b> – finished actions in a report: regular verbs <u>-ed</u>, irregular verbs learn them (go – went, take – took). Question and negative with <u>did</u> + the verb without ending.</p>" },
      { art: "mc", id: "pa-fehler", tag: "Typical mistakes", titel: "Spot the mistake: passive", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["The shelves were filled by the new apprentice yesterday.", "The shelves was filled by the new apprentice yesterday.", "The shelves were fill by the new apprentice yesterday.", "The shelves filled by the new apprentice yesterday."], a: 0,
            e: "Zu shelves (Mehrzahl) gehört were, danach die dritte Verbform: filled. Ohne eine Form von to be ist es kein Passiv." },
          { q: "Which sentence is correct?", o: ["Fresh bread is delivered to the café every morning.", "Fresh bread are delivered to the café every morning.", "Fresh bread is deliver to the café every morning.", "Fresh bread delivers to the café every morning."], a: 0,
            e: "Bread ist Einzahl, also is, danach die dritte Verbform: delivered. Every morning zeigt: Es geschieht regelmäßig, also simple present." }
        ] },
      { art: "offen", id: "pa-bilden", tag: "Make the passive", titel: "Active to passive", lead: "Change each sentence into the passive. Keep <b>by</b>. <span class=\"de\">Das Objekt wird zum Subjekt.</span>",
        fragen: [
          { q: "A mechanic repairs the cars every morning.", m: "The cars are repaired by a mechanic every morning.", k: ["the cars|cars", "are repaired", "by a mechanic|by the mechanic"], min: 3 },
          { q: "The apprentice cleaned the workshop yesterday.", m: "The workshop was cleaned by the apprentice yesterday.", k: ["the workshop|workshop", "was cleaned", "by the apprentice"], min: 3 }
        ],
        tipp: "Start with the thing: The cars … (is / are / was / were) + third form + by …" },
      { art: "offen", id: "pa-frei", m7: true, tag: "Plus · Your own sentences", titel: "Your own passive sentences", lead: "Think of a shop, a school or a workshop. Write <b>two passive sentences</b> about it: one in the simple present and one in the simple past. Use <b>by</b> at least once.",
        fragen: [{ q: "Write two passive sentences: one in the simple present, one in the simple past.", m: "In our school the classrooms are cleaned every afternoon. Last week the playground was painted by some parents.", k: ["is|are", "was|were", "by"], min: 3 }],
        tipp: "The classrooms are … / The bread was … by …" }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>work experience in a hair salon</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u4-hair-salon.jpg\" alt=\"A work-experience student sweeps the floor in a hair salon and watches the hairdresser cut a customer's hair.\" loading=\"lazy\" style=\"width:100%;border-radius:14px\"></figure><p>What does the student do? What can he or she learn in a week like this? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">A student wrote a report about her work experience. Read it first. Then listen to a phone call between two friends.</p>" },
      { art: "lesetext", lesetext: "u4-rev-salon-m" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["At first, the writer was not happy about working in a salon.", true],
          ["Mrs Kingi was angry when two customers came at the same time.", false],
          ["The customer on Tuesday said \"Good job!\" because the writer did everything perfectly.", false]
        ] },
      { art: "mc", id: "schliessen", tag: "Between the lines", titel: "What does the text show?", lead: "Tick the best answer.",
        fragen: [
          { q: "What does the writer learn about the job of a hairdresser?", o: ["Good ideas are not enough – you also have to deal well with people.", "Cutting hair is much easier than it looks.", "The work is not tiring if you like the customers.", "You only need to be creative to be successful."], a: 0,
            e: "Am Ende steht: Eine Friseurin braucht mehr als gute Ideen – sie muss zuhören, freundlich bleiben und bei Problemen ruhig bleiben. Dass die Arbeit leicht oder nicht anstrengend ist, steht nirgends." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-rev-salon-m",
        fragen: [
          { q: "Why did two customers arrive at the same time?", zeilen: [23, 25], e: "A haircut had been booked, but nobody had written it in the appointment book.", tipp: "Look at the paragraph about Wednesday." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u4-rev-plans-m", fragen: [
        { art: "mc", id: "global", titel: "The phone call", lead: "Tick the correct answer. Listen for corrections!",
          fragen: [
            { q: "How much will Lily earn per hour?", o: ["twenty dollars", "twenty-two dollars", "eighteen dollars", "twelve dollars"], a: 0,
              e: "Lily sagt erst twenty-two und verbessert sich dann: twenty. Zweiundzwanzig gibt es nur für die Abendschicht, und sie arbeitet morgens." },
            { q: "Why are Ari and his brother going to camp for only three nights?", o: ["The campsite is full for the rest of the week.", "It is going to rain all week.", "Ari starts his apprenticeship on Tuesday.", "Their tent is too small."], a: 0,
              e: "Ari sagt, dass sie eine Woche bleiben wollten, aber der Campingplatz ist voll. Regen gibt es nur am Samstag." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the call", lead: "Complete the notes with words from the box. Two words are left over.",
          absaetze: [
            ["The big tent was lent to Ari and his brother by their ", { g: "neighbour" }, "."],
            ["Lily tells Ari to take a ", { g: "torch" }, " because the campsite lights go out early."]
          ], extra: ["weekend", "Tuesday"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help at a summer party and write", teile: [
      { art: "text", html: "<p class=\"lead\">Your exchange partner's father, Mr Bennett, is visiting you. He doesn't speak German. He sees this poster at the sports club and asks you what it says. <span class=\"de\">Du vermittelst: Mr Bennett versteht kein Deutsch.</span></p><blockquote>„Sommerfest beim Sportverein Rosenhain e. V.! Am letzten Samstag im Juli ab 14 Uhr auf dem Sportplatz in der Lindenstraße. Bei Regen feiern wir in der Turnhalle. Das erwartet euch: Fußballturnier für Kinder, Kuchenbuffet, Grillstand, Tombola und eine Hüpfburg. Um 19 Uhr beginnt die Live-Musik. Der Eintritt ist frei, aber die Parkplätze sind knapp, bitte kommt, wenn möglich, mit dem Fahrrad. Wir freuen uns über Kuchenspenden: Bitte meldet euch bis Mittwoch bei Frau Weber an. Der Vorsitzende dankt der Bäckerei am Markt für die Spenden im letzten Jahr.“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells Mr Bennett the most important thing. <span class=\"de\">Was möchte er zuerst wissen?</span>",
        fragen: [
          { q: "What do you say first to Mr Bennett?", o: ["There is a summer party on Saturday afternoon at the sports field, and it is free.", "The chairman thanks the bakery for the cakes from last year.", "The club is called Sportverein Rosenhain e. V.", "There is a raffle, a bouncy castle and a barbecue."], a: 0,
            e: "Zuerst das Wichtigste: Es gibt ein Fest, wann und wo, und es kostet nichts. Der Dank an die Bäckerei und der volle Vereinsname sind für Mr Bennett nicht wichtig, und die einzelnen Angebote können später kommen." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", m7: true, tag: "Plus · Your words", titel: "Tell Mr Bennett", lead: "Tell Mr Bennett in three or four English sentences: When and where is the party? What happens if it rains? What can he do to help? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell Mr Bennett?", m: "The summer party is on the last Saturday in July, from two o'clock at the sports field. If it rains, the party will be in the gym. You can help if you bring a cake. Please sign up with Mrs Weber by Wednesday.", k: ["saturday|july", "sports field|sports ground|field", "gym|hall", "cake|sign up|bring"], min: 3 }],
        tipp: "Start like this: The party is on … / It is at … / If it rains, … / You can bring …" },
      { art: "offen", id: "deutsch-fassen", m7: true, tag: "Plus · Mediation", titel: "Tell your brother in German", lead: "Your brother did not read the report about the week at the hair salon. In two or three German sentences: What did the writer do, what went wrong on Wednesday, and what is she going to do next year? <span class=\"de\">Auf Deutsch, nur die wichtigen Punkte.</span>",
        fragen: [{ q: "Was steht im Bericht?", m: "Die Schülerin hat eine Woche Praktikum in einem Friseursalon gemacht. Am Mittwoch kamen zwei Kunden zur gleichen Zeit, weil ein Termin nicht eingetragen war. Nächstes Jahr will sie sich dort um eine Ausbildung bewerben.", k: ["Friseur|Salon|Praktikum", "Termin|Kunden|gleichzeitig|gleichen Zeit", "Ausbildung|bewerben|Zeugnis"], min: 3 }],
        tipp: "Fang so an: Die Schülerin … / Am Mittwoch … / Nächstes Jahr …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "My day at work – and my plans", min: 50,
        auftrag: "<p>Write a short text for your English class. Report on one day of a real or an imagined work experience (simple past): Where were you? What did you do? What went wrong or what was the best part?</p><p>Then write what you <b>are going to</b> do after school and why. Use <b>one passive sentence</b>, for example about something that is done in your workplace every day.</p><p>Write at least 50 words in English.</p>",
        starter: ["Last week I …", "On the first day I …", "Unfortunately, …", "In the workshop / shop … is / are … every day.", "After school I am going to … because …"],
        kriterien: ["Der Text berichtet im simple past von einem Arbeitstag und nennt etwas, das schiefging oder besonders gut war.", "Er sagt mit am / is / are going to, was du nach der Schule vorhast, und nennt einen Grund.", "Er enthält einen richtigen Passivsatz (is / are / was / were + dritte Verbform).", "Er hat mindestens 50 Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 4 in three sentences", lead: "Complete the sentences with a whole verb form from the box. Two forms are left over.",
        absaetze: [
          ["Yesterday I ", { g: "wrote" }, " my application letter and posted it."],
          ["The workshop door ", { g: "is opened" }, " at eight o'clock every morning."],
          ["Next month our class ", { g: "is going to" }, " visit a bakery."]
        ], extra: ["were opened", "writes"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 4, you can build passive sentences and you know the typical mistakes. Good luck with the test!" }
});
