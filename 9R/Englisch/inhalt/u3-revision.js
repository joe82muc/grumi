/* Englisch 9R · Unit 3 Discover South Africa · Revision: Fit for the test: Unit 3
   (gemischte Wiederholung: Wortschatz „Talking about an accident“ und „Describing a role model“, past progressive mit when und while,
   present perfect mit for und since gegen das simple past, kurzer Lesetext, kurzer Hörtext, Mini-Sprachmittlung, Mini-Schreibauftrag)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten),
   E9 5 (Alltag, Vorbilder).
   Texte: „Crash on the training field“ (texte/u3/revision-reading-training.js), „My role model: the bus driver“
   (texte/u3/revision-listening-bus-driver.js) – Schule, Orte und Personen sind erfunden. */
D7Kit.seite({
  id: "u3-revision",
  titel: "Fit for the test: Unit 3",
  einleitung: "Test day is coming! In this module you revise everything from Unit 3: words about accidents and role models, the past progressive with when and while, and the present perfect with for and since. You also read, listen, help in a shop and write about a role model.",
  zeit: "etwa 40 Minuten",
  ziele: ["📚 I know the important words of Unit 3.", "🧩 I use was / were + -ing with when and while, and have / has with for and since.", "🔎 I read, listen and pick out details.", "✍️ I write about a role model and avoid typical mistakes."],
  quiz: { profi: "Test pro" },
  glossar: {
    pastprog: ["past progressive", "Die Verlaufsform der Vergangenheit: was oder were plus Verb mit -ing. Man sagt damit, was zu einem Zeitpunkt in der Vergangenheit gerade lief. Beispiel: I was waiting at the shop."],
    perfect: ["present perfect", "Mit have oder has plus der dritten Verbform sagt man, was bis heute gilt oder noch Folgen hat. Beispiel: She has played the guitar since she was nine."],
    collision: ["collision", "Ein Zusammenstoß, bei dem zwei Menschen oder zwei Fahrzeuge gegeneinander prallen."],
    goalkeeper: ["goalkeeper", "Der Torwart oder die Torwartin, also die Person, die im Fußball das Tor verteidigt."],
    aisle: ["aisle", "Ein Gang zwischen den Regalen in einem Supermarkt."]
  },
  haupttext: "u3-rev-training",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 3", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for accidents and for role models. <span class=\"de\">Zuerst der Wortschatz der beiden Wortlisten dieser Unit.</span></p>" },
      { art: "paare", id: "woerter-unfall", tag: "Talking about an accident", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["to crash into", "zusammenstoßen mit"], ["bruise", "blauer Fleck"], ["to bleed", "bluten"], ["plaster", "Pflaster"], ["first aid", "Erste Hilfe"], ["to be hurt", "verletzt sein"]] },
      { art: "luecke", id: "unfall-woerter", tag: "Talking about an accident", titel: "On the road", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The road was wet and ", { g: "slippery" }, ", so the bus could not stop quickly."],
          ["A ", { g: "witness" }, " told the police officer what she saw."],
          ["Someone called an ", { g: "ambulance" }, " because the cyclist could not stand up."],
          ["Be careful at the ", { g: "junction" }, ": cars come from three directions."]
        ], extra: ["career", "modest"] },
      { art: "paare", id: "woerter-vorbild", tag: "Describing a role model", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["patient", "geduldig"], ["reliable", "zuverlässig"], ["to admire", "bewundern"], ["to respect", "respektieren"], ["proud of", "stolz auf"], ["since then", "seitdem"]] },
      { art: "luecke", id: "vorbild-woerter", tag: "Describing a role model", titel: "What role models are like", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["He ran into the smoke to save the dog. He is very ", { g: "brave" }, "."],
          ["She always tells the truth, even when it is difficult. She is ", { g: "honest" }, "."],
          ["He starts work early and finishes late. He is ", { g: "hard-working" }, "."],
          ["Her story will ", { g: "inspire" }, " many young people."]
        ], extra: ["slippery", "junction"] }
    ] },
    { kurz: "Past progressive", ober: "Grammar 1", titel: "Past progressive with when and while", teile: [
      { art: "merke", kopf: "PAST PROGRESSIVE: WAS / WERE + -ING", html: "<p><b><button class=\"term\" data-t=\"pastprog\">Past progressive</button></b> – what was going on at that time: <u>was / were</u> + verb with <u>-ing</u>. I <u>was waiting</u> in the queue. We <u>were standing</u> at the lights.</p><p><u>When</u> + a short action in the simple past: I was waiting in the queue <u>when</u> a shelf <u>fell</u> down.<br><u>While</u> + a long action: <u>While</u> I <u>was waiting</u>, a shelf fell down.</p>" },
      { art: "luecke", id: "pp-luecke", tag: "Past progressive", titel: "What was happening?", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["A shelf fell down while I ", { g: "was standing" }, " in the queue."],
          ["We ", { g: "were waiting" }, " for the bus when the rain started."],
          ["The cyclist was riding home when a dog ", { g: "ran" }, " across the road."]
        ], extra: ["was walk", "were run"] },
      { art: "sort", id: "pp-sort", tag: "Past progressive", titel: "Long action or short action?", lead: "Put the verb forms into the right box. <span class=\"de\">Was dauert länger, was passiert plötzlich?</span>",
        buckets: ["long action (was / were + -ing)", "short action (simple past)"],
        items: [{ t: "was cooking", b: 0 }, { t: "were chatting", b: 0 }, { t: "was walking", b: 0 },
                { t: "fell", b: 1 }, { t: "rang", b: 1 }, { t: "arrived", b: 1 }] },
      { art: "mc", id: "pp-fehler", tag: "Typical mistakes", titel: "Spot the mistake: past progressive", lead: "Tick the correct sentence. <span class=\"de\">Welcher Satz ist richtig?</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["Dad was cooking when the phone rang.", "Dad was cook when the phone rang.", "Dad were cooking when the phone rang.", "Dad cooking when the phone rang."], a: 0,
            e: "Du brauchst was (zu Dad passt was, nicht were) und das Verb mit -ing. Fehlt eines davon, ist der Satz falsch." },
          { q: "Which sentence is correct?", o: ["While the pedestrians were waiting at the lights, a car skidded.", "While the pedestrians was waiting at the lights, a car skidded.", "While the pedestrians were wait at the lights, a car skidded.", "While the pedestrians waiting at the lights, a car skidded."], a: 0,
            e: "Mehrere Personen: were + Verb mit -ing. Ohne were oder ohne -ing fehlt dem Satz die Verlaufsform." }
        ] },
      { art: "text", html: "<p class=\"lead\">Look at the supermarket in words: <span style=\"font-size:1.4em\">🛒 🍎 👴 🥫</span><br>A girl is choosing apples. An old man is reading a label. Suddenly a shelf falls down in the aisle.</p>" },
      { art: "offen", id: "regal", m7: true, tag: "Challenge", titel: "What was happening?", lead: "Write two sentences with <b>when</b> or <b>while</b>: What were the girl and the old man doing when the shelf fell down? <span class=\"de\">Benutze was / were + -ing.</span>",
        fragen: [{ q: "What was happening when the shelf fell down?", m: "While a girl was choosing apples, a shelf fell down. An old man was reading a label when it happened.", k: ["was choosing|choosing|apples", "was reading|reading|label", "fell|shelf"], min: 2 }],
        tipp: "Start like this: While a girl was … / An old man was … when …" }
    ] },
    { kurz: "Present perfect", ober: "Grammar 2", titel: "Present perfect with for and since", teile: [
      { art: "merke", kopf: "PRESENT PERFECT: FOR AND SINCE", html: "<p><b><button class=\"term\" data-t=\"perfect\">Present perfect</button></b> – it began in the past and is still true now: <u>have / has</u> + third form. She <u>has lived</u> here <u>for</u> ten years. He <u>has played</u> football <u>since</u> he was eight.</p><p><u>For</u> + how long (two years, a long time). <u>Since</u> + starting point (Monday, 2019, I was five).<br>With a finished time (<u>last year</u>, <u>two days ago</u>, <u>yesterday</u>) you use the <b>simple past</b>: I broke my arm two days ago.</p>" },
      { art: "luecke", id: "pf-luecke", tag: "Present perfect", titel: "How long?", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["My sister ", { g: "has played" }, " the guitar since she was nine."],
          ["The lifeguard ", { g: "has worked" }, " at our pool for many years."],
          ["We ", { g: "have known" }, " each other since we were little."]
        ], extra: ["have knew", "has play"] },
      { art: "sort", id: "pf-sort", tag: "For or since?", titel: "For or since?", lead: "Put the time expressions into the right box. <span class=\"de\">Zeitraum oder Anfangspunkt?</span>",
        buckets: ["for", "since"],
        items: [{ t: "two years", b: 0 }, { t: "a long time", b: 0 }, { t: "three weeks", b: 0 }, { t: "ten minutes", b: 0 },
                { t: "Monday", b: 1 }, { t: "2019", b: 1 }, { t: "last summer", b: 1 }, { t: "I was five", b: 1 }] },
      { art: "mc", id: "pf-fehler", tag: "Typical mistakes", titel: "Spot the mistake: present perfect", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["I have known her since primary school.", "I know her since primary school.", "I have knew her since primary school.", "I have known her since three years."], a: 0,
            e: "Wenn etwas bis heute dauert, brauchst du have + dritte Verbform (known). Das Deutsche „ich kenne sie seit“ geht im Englischen mit der einfachen Gegenwart nicht. Und since passt nicht zu einem Zeitraum wie three years." },
          { q: "Which sentence is correct?", o: ["Last year he won the school race.", "Last year he has won the school race.", "Last year he has win the school race.", "Last year he winned the school race."], a: 0,
            e: "Last year ist eine abgeschlossene Zeit. Dann steht das simple past, und won ist die unregelmäßige Form." },
          { q: "Which sentence is correct?", o: ["I broke my arm two days ago.", "I have broken my arm two days ago.", "I have break my arm two days ago.", "I breaked my arm two days ago."], a: 0,
            e: "Two days ago nennt einen festen Zeitpunkt in der Vergangenheit, deshalb das simple past: broke. Break ist unregelmäßig, breaked gibt es nicht." }
        ] }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Mandla wrote a report for the school magazine. Read it first. Then listen to a radio talk. <span class=\"de\">Erst ein kurzer Bericht, dann ein Gespräch im Radio.</span></p>" },
      { art: "lesetext", lesetext: "u3-rev-training" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Mr Daniels was explaining a game when the rain started.", true],
          ["The two boys saw each other before they crashed.", false],
          ["The goalkeeper's nose was bleeding.", false],
          ["The team has had no new collision for two months.", true]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-rev-training",
        fragen: [
          { q: "What was the coach doing when it started to rain?", zeilen: [2, 3], e: "He was explaining a new passing game.", tipp: "Look at the first paragraph." },
          { q: "How long has the team had no new collision?", zeilen: [13, 14], e: "Our team has not had another collision for two months.", tipp: "Look at the last paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u3-rev-bus", fragen: [
        { art: "mc", id: "global", titel: "The radio talk", lead: "Tick the correct answer.",
          fragen: [
            { q: "Who is Zinhle's role model?", o: ["her bus driver", "her teacher", "her older sister", "her football coach"], a: 0,
              e: "Zinhle says: My bus driver." },
            { q: "What did the driver do when the little boy was crying?", o: ["She stopped the bus and helped him find his glove.", "She told the children to be quiet.", "She called the boy's mother.", "She drove on to the next stop."], a: 0,
              e: "While the other children were laughing, she stopped the bus and helped the boy. She found his glove." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the role model", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Zinhle has known the driver since she was ", { g: "six" }, "."],
            ["The driver is patient and ", { g: "reliable" }, "."],
            ["The little boy was looking for his ", { g: "glove" }, "."]
          ], extra: ["tired", "umbrella"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help in a shop and write", teile: [
      { art: "text", html: "<p class=\"lead\">You are shopping with your mum in an English-speaking country. A shelf has fallen down, and your mum doesn't speak much English. She asks you to talk to the shop manager. <span class=\"de\">Du vermittelst: Der Manager spricht kein Deutsch.</span></p><blockquote>„Sag dem Marktleiter bitte: In Gang drei ist ein Regal umgefallen, während ich gerade Joghurt geholt habe. Niemand sonst ist verletzt, aber mein Fuß tut weh. Ich brauche ein Pflaster, und jemand muss die Dosen aufräumen. Und sag ihm, dass das Obst hier sehr schön aussieht.“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells the manager the most important thing. <span class=\"de\">Was muss der Manager zuerst erfahren?</span>",
        fragen: [
          { q: "What do you say first to the manager?", o: ["A shelf fell down in aisle three, and my mum's foot hurts.", "My mum says the fruit looks very nice.", "My mum was buying yoghurt for breakfast.", "The shop has many different aisles."], a: 0,
            e: "Zuerst das Wichtigste: Ein Regal ist umgefallen, und die Mutter hat Schmerzen. Das Lob für das Obst kann später kommen, und was sie holen wollte, ist für den Manager nicht wichtig." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", tag: "Your words", titel: "Tell the manager", lead: "Tell the manager in two or three English sentences: What happened? Who is hurt? What does your mum need? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell the manager?", m: "A shelf fell down in aisle three. My mum's foot hurts, but nobody else is hurt. Can we have a plaster, please?", k: ["shelf", "foot|hurt|hurts|pain", "plaster|first aid|help"], min: 2 }],
        tipp: "Start like this: A shelf … / My mum's foot … / Can we have …?" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "My role model", min: 40,
        auftrag: "<p>Write five sentences about a role model, for example an older sister, a lifeguard or a bus driver. Say who the person is, what he or she does and why you admire him or her.</p><p>Use <b>one sentence in the present perfect</b> (for or since). Write at least 40 words in English.</p>",
        starter: ["My role model is …", "He / She is very …", "He / She has … for / since …", "I admire him / her because …", "Her / His story shows that …"],
        kriterien: ["Der Text sagt, wer das Vorbild ist und was die Person tut.", "Er nennt mit because einen Grund, warum du die Person bewunderst.", "Er enthält einen richtigen Satz im present perfect mit for oder since.", "Er hat mindestens 40 Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class=\"de\">Was hilft beim Lernen und im Test?</span>",
        aussagen: [
          ["With while I often name the longer action in the background.", true],
          ["I use the present perfect with last year.", false],
          ["For a period of time I use for, for a starting point I use since.", true],
          ["In mediation I write about every detail of the German text.", false],
          ["At the end I check my text for was / were and have / has.", true]
        ] },
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The grammar of Unit 3 in four sentences", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I use was / were + -ing for a ", { g: "long" }, " action in the past."],
          ["A short action in the simple past often comes after ", { g: "when" }, "."],
          ["For a period of time I use ", { g: "for" }, ", for a starting point I use since."],
          ["The present perfect is made with have / has + the ", { g: "third" }, " form of the verb."]
        ], extra: ["never", "tomorrow"] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 3 and you know the typical mistakes. Good luck with the test!" }
});
