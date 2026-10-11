/* Englisch 9M · Unit 3 Discover South Africa · Revision: Fit for the test: Unit 3 · M-Fassung
   (gemischte Wiederholung: Wortschatz „Talking about an accident“ und „Describing a role model“, die Grammatik der Unit –
   past progressive mit when und while, present perfect mit for und since gegen das simple past – mit Sätze bilden, Entscheiden und Fehlersuche,
   längerer Bericht zum Erschließen, Radiogespräch mit Korrektur und Missverständnis, Sprachmittlung mit Nebeninformationen, Schreibauftrag, drei Plus-Aufgaben)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.2 Schreiben, E9 2.3 Sprachmittlung, E9 3 (Sprachbewusstsein: Zeiten),
   E9 5 (Alltag, Vorbilder).
   Texte: „Crash on the training field“ (texte/u3/revision-reading-training-m.js), „My role model: the bus driver“
   (texte/u3/revision-listening-bus-driver-m.js) – Schule, Orte und Personen sind erfunden. Bild: 9R/Englisch/images/u3-football.jpg. */
D7Kit.seite({
  id: "u3-revision",
  titel: "Fit for the test: Unit 3",
  einleitung: "Test day is coming! In this module you revise everything from Unit 3: words about accidents and role models, the past progressive with when and while, and the present perfect with for and since. You build sentences of your own, find and correct mistakes, read a report, listen to a radio talk with a correction, help in a shop and write about a role model.",
  zeit: "etwa 45 Minuten",
  ziele: ["📚 I know the important words of Unit 3.", "🧩 I build sentences with when and while, and with for and since, and choose the right tense.", "🔎 I read and listen between the lines.", "✍️ I correct typical mistakes and write a text of my own."],
  quiz: { profi: "Test pro" },
  glossar: {
    pastprog: ["past progressive", "Die Verlaufsform der Vergangenheit: was oder were plus Verb mit -ing. Man sagt damit, was zu einem Zeitpunkt in der Vergangenheit gerade lief. Beispiel: I was waiting at the shop."],
    perfect: ["present perfect", "Mit have oder has plus der dritten Verbform sagt man, was bis heute gilt oder noch Folgen hat. Beispiel: She has played the guitar since she was nine."],
    collision: ["collision", "Ein Zusammenstoß, bei dem zwei Menschen oder zwei Fahrzeuge gegeneinander prallen."],
    goalkeeper: ["goalkeeper", "Der Torwart oder die Torwartin, also die Person, die im Fußball das Tor verteidigt."],
    limp: ["to limp", "Hinken bedeutet, dass man wegen einer Verletzung am Fuß oder am Bein nicht richtig gehen kann."],
    aisle: ["aisle", "Ein Gang zwischen den Regalen in einem Supermarkt oder zwischen den Sitzen in einem Bus."]
  },
  haupttext: "u3-rev-training-m",
  stationen: [
    { kurz: "Words", ober: "Warm-up", titel: "Words from Unit 3", teile: [
      { art: "text", html: "<p class=\"lead\">Revision time! Start with the words you need for accidents and for role models.</p>" },
      { art: "luecke", id: "woerter-luecke", tag: "Accident and role model", titel: "Accidents and role models", lead: "Complete the sentences with words from the box. Two words are left over.",
        absaetze: [
          ["The road was wet and ", { g: "slippery" }, ", so the bus could not stop quickly."],
          ["A ", { g: "witness" }, " told the police officer exactly what she saw."],
          ["He ran into the smoke to save the dog. He is very ", { g: "brave" }, "."],
          ["Her story will ", { g: "inspire" }, " many young people to try new things."]
        ], extra: ["career", "modest"] }
    ] },
    { kurz: "Past progressive", ober: "Grammar 1", titel: "Past progressive with when and while", teile: [
      { art: "merke", kopf: "PAST PROGRESSIVE: WAS / WERE + -ING", html: "<p><b><button class=\"term\" data-t=\"pastprog\">Past progressive</button></b> – what was going on at that time: <u>was / were</u> + verb with <u>-ing</u>. I <u>was waiting</u> in the queue. We <u>were standing</u> at the lights.</p><p><u>When</u> + a short action in the simple past: I was waiting in the queue <u>when</u> a shelf <u>fell</u> down.<br><u>While</u> + a long action: <u>While</u> I <u>was waiting</u>, a shelf fell down.</p>" },
      { art: "mc", id: "pp-wahl", tag: "Which tense?", titel: "Choose the right tense", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["I was doing my homework when the lights went out.", "I did my homework when the lights were going out.", "I was doing my homework when the lights were going out.", "I did my homework when the lights have gone out."], a: 0,
            e: "Die Hausaufgaben liefen gerade (was doing), das Licht ging plötzlich aus (went out). Eine Verlaufsform für die kurze, plötzliche Handlung passt nicht." },
          { q: "Which sentence is correct?", o: ["While Dad was cooking, the dog stole a sausage.", "While Dad cooked, the dog was stealing a sausage.", "While Dad was cooking, the dog was stole a sausage.", "While Dad cooking, the dog stole a sausage."], a: 0,
            e: "Das Kochen ist die längere Handlung im Hintergrund (was cooking), das Stehlen ist die kurze Handlung (stole). Ohne was fehlt dem Satz die Verlaufsform, und was stole gibt es nicht." }
        ] },
      { art: "offen", id: "pp-bilden", tag: "Build sentences", titel: "Join the ideas", lead: "Write one sentence for each pair. Use the past progressive and the simple past. <span class=\"de\">Verbinde mit when oder while.</span>",
        fragen: [
          { q: "We / play cards – the lights / go out (use when)", m: "We were playing cards when the lights went out.", k: ["were playing", "went out", "when"], min: 3 },
          { q: "Sipho / run out of his goal – I / run after the ball (use while)", m: "While I was running after the ball, Sipho was running out of his goal.", k: ["while", "was running after", "was running out|was coming out"], min: 3 }
        ],
        tipp: "A long action: was / were + -ing. A short action: simple past." },
      { art: "text", html: "<p class=\"lead\">Look at the bus stop in words: <span style=\"font-size:1.4em\">🌧️ 🚌 📱 ☂️</span><br>A boy is checking his phone. Two girls are sharing an umbrella. Suddenly the bus arrives and splashes water on everybody.</p>" },
      { art: "offen", id: "haltestelle", m7: true, tag: "Plus · Writing", titel: "At the bus stop", lead: "Write two or three sentences with <b>when</b> or <b>while</b>: What were the people doing when the bus arrived?",
        fragen: [{ q: "What was happening when the bus arrived?", m: "A boy was checking his phone when the bus arrived. While two girls were sharing an umbrella, the bus splashed water on everybody.", k: ["was checking|checking|phone", "were sharing|sharing|umbrella", "arrived|splashed|when|while"], min: 3 }],
        tipp: "A boy was … when … / While two girls were …, the bus …" }
    ] },
    { kurz: "Present perfect", ober: "Grammar 2", titel: "Present perfect with for and since", teile: [
      { art: "merke", kopf: "PRESENT PERFECT: FOR AND SINCE", html: "<p><b><button class=\"term\" data-t=\"perfect\">Present perfect</button></b> – it began in the past and is still true now: <u>have / has</u> + third form. She <u>has lived</u> here <u>for</u> ten years. He <u>has played</u> football <u>since</u> he was eight.</p><p><u>For</u> + how long (two years, a long time). <u>Since</u> + starting point (Monday, 2019, I was five).<br>With a finished time (<u>last year</u>, <u>two days ago</u>, <u>yesterday</u>) you use the <b>simple past</b>: I broke my arm two days ago.</p>" },
      { art: "mc", id: "pf-wahl", tag: "Which tense?", titel: "For, since or simple past?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["Thabo has known his best friend since he was six.", "Thabo has known his best friend for he was six.", "Thabo knows his best friend since he was six.", "Thabo has known his best friend since six years."], a: 0,
            e: "Etwas dauert bis heute: have / has + dritte Verbform. Since leitet hier den Anfangspunkt ein (he was six). Für einen Zeitraum wie six years müsste for stehen." },
          { q: "Which sentence about last month is correct?", o: ["My cousin won two swimming medals last month.", "My cousin has won two swimming medals last month.", "My cousin wins two swimming medals last month.", "My cousin did won two swimming medals last month."], a: 0,
            e: "Last month ist vorbei, also eine abgeschlossene Zeit. Dazu passt nur das simple past: won. Have / has + dritte Verbform steht, wenn etwas bis heute andauert." }
        ] },
      { art: "offen", id: "pf-bilden", tag: "Build sentences", titel: "How long?", lead: "Write one sentence for each note. Use the present perfect. <span class=\"de\">Wähle for oder since.</span>",
        fragen: [
          { q: "Mr Daniels / be our coach / September (use since)", m: "Mr Daniels has been our coach since September.", k: ["has been|has coached", "since"], min: 2 },
          { q: "the team / not have / a collision / two months (use for)", m: "The team has not had a collision for two months.", k: ["has not had|hasn't had|has had no", "for"], min: 2 }
        ],
        tipp: "have / has + third form. For = how long, since = starting point." },
      { art: "offen", id: "fehler", tag: "Typical mistakes", titel: "Find the mistakes", lead: "The first sentence has one mistake, the second has two. Write the correct sentences. <span class=\"de\">Achte auf was / were, auf die Zeitform und auf for / since.</span>",
        fragen: [
          { q: "While we was waiting for the bus, it started to rain.", m: "While we were waiting for the bus, it started to rain.", k: ["we were waiting"], min: 1 },
          { q: "I am a member of the choir since three years.", m: "I have been a member of the choir for three years.", k: ["have been", "for three years"], min: 2 }
        ],
        tipp: "Look at the subject (we = were). Is it still true today? Then you need have / has + third form. And ask: period of time or starting point?" },
      { art: "offen", id: "forsince-erklaeren", m7: true, tag: "Plus · Explain", titel: "Explain the mistake", lead: "A friend writes: “I have lived here since ten years.” Explain in one or two sentences (English or German) what is wrong. <span class=\"de\">Erkläre in eigenen Worten.</span>",
        fragen: [{ q: "What is wrong with the sentence?", m: "Ten years is a period of time, so you need for, not since. The correct sentence is: I have lived here for ten years.", k: ["for", "period|Zeitraum|how long|wie lange|Dauer|starting point|Anfangspunkt"], min: 2 }],
        tipp: "Is ten years a period or a starting point?" }
    ] },
    { kurz: "Read & listen", ober: "Skills", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. Then read a report about an accident like this one.</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u3-football.jpg\" alt=\"Two young players run for the same ball and are about to bump into each other; the coach blows a whistle.\" style=\"width:100%;border-radius:14px\"></figure><p>What do you think will happen next? Has something like this ever happened to you?</p>" },
      { art: "text", html: "<p class=\"lead\">Mandla wrote a report for the school magazine. Read it first. Then listen to a radio talk. <span class=\"de\">Erst ein Bericht, dann ein Gespräch im Radio.</span></p>" },
      { art: "lesetext", lesetext: "u3-rev-training-m" },
      { art: "tf", id: "richtigfalsch", tag: "Reading", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The goalkeeper left his goal because he wanted to stop the ball.", true],
          ["The school secretary came only after somebody had called her.", false],
          ["The writer has played football since he was six years old.", false]
        ] },
      { art: "mc", id: "schliessen", tag: "Between the lines", titel: "What does the text show?", lead: "Tick the best answer.",
        fragen: [
          { q: "What does the report show about Mr Daniels?", o: ["He stayed calm and looked after the two players first.", "He was angry with the two players for not looking up.", "He ended training because of the rain.", "He asked the secretary to phone the parents."], a: 0,
            e: "Er schrie nicht, kniete sich neben die Spieler und fragte leise, wo es wehtat. Wütend wird er nicht beschrieben, und die Eltern rief er selbst an." }
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-rev-training-m",
        fragen: [
          { q: "When did the other players stop laughing?", zeilen: [13, 14], e: "They stopped when they saw that neither player got up.", tipp: "Look at the second paragraph." },
          { q: "How did Mr Daniels react at first?", zeilen: [15, 16], e: "He did not shout. He knelt next to the players and asked quietly where it hurt.", tipp: "Look at the third paragraph." }
        ] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: "u3-rev-bus-m", fragen: [
        { art: "mc", id: "global", titel: "The radio talk", lead: "Tick the correct answer. Listen for corrections!",
          fragen: [
            { q: "How long has Mrs Mokoena driven the school bus?", o: ["for eleven years", "for twelve years", "for six years", "for fifteen years"], a: 0,
              e: "Zinhle sagt zuerst zwölf Jahre und verbessert sich dann auf elf. Die beiden anderen Zahlen im Gespräch sind Altersangaben, keine Dienstjahre." },
            { q: "Where was the little boy's glove?", o: ["in his own bag", "under his seat", "on the floor of the bus", "at home"], a: 0,
              e: "Unter dem Sitz hat die Fahrerin zuerst nachgesehen, aber dort war der Handschuh nicht. Er war die ganze Zeit in der Tasche des Jungen." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the role model", lead: "Complete the notes with words from the box. Two words are left over.",
          absaetze: [
            ["Zinhle has known the driver since she was ", { g: "six" }, "."],
            ["Mrs Mokoena is never late, even in bad ", { g: "weather" }, "."]
          ], extra: ["eleven", "traffic"] }
      ] }
    ] },
    { kurz: "Help & write", ober: "Skills", titel: "Help in a shop and write", teile: [
      { art: "text", html: "<p class=\"lead\">You are shopping with your mum in an English-speaking country. A shelf has fallen down, and your mum doesn't speak much English. She asks you to talk to the shop manager. <span class=\"de\">Du vermittelst: Der Manager spricht kein Deutsch.</span></p><blockquote>„Sag dem Marktleiter bitte: Wir sind schon eine Stunde im Laden, weil wir für den Geburtstag meiner Schwester einkaufen. In Gang drei ist ein Regal umgefallen, während ich gerade Joghurt geholt habe. Zum Glück ist niemand sonst verletzt, aber mein Fuß tut weh, und ich glaube, er wird blau. Ich brauche ein Pflaster, und jemand muss die Dosen aufräumen, bevor jemand darüber stolpert. Und sag ihm, dass das Obst hier sehr schön aussieht – aber das hat Zeit.“</blockquote>" },
      { art: "mc", id: "sprachmittlung-mc", tag: "Mediation", titel: "Choose the best sentence", lead: "Tick the sentence that tells the manager the most important thing. <span class=\"de\">Was muss der Manager zuerst erfahren?</span>",
        fragen: [
          { q: "What do you say first to the manager?", o: ["A shelf fell down in aisle three, and my mum's foot hurts.", "We have been in the shop for an hour.", "My mum was buying yoghurt for my sister's birthday.", "My mum says the fruit looks very nice."], a: 0,
            e: "Zuerst das Wichtigste: Ein Regal ist umgefallen, und die Mutter hat Schmerzen. Wie lange ihr schon im Laden seid, wofür ihr einkauft und das Lob für das Obst sind Nebensachen, die der Manager jetzt nicht braucht." }
        ] },
      { art: "offen", id: "sprachmittlung-offen", tag: "Your words", titel: "Tell the manager", lead: "Tell the manager in three English sentences: What happened? Who is hurt? What does your mum need? <span class=\"de\">Nicht Wort für Wort übersetzen – nur das Wichtige.</span>",
        fragen: [{ q: "What do you tell the manager?", m: "A shelf fell down in aisle three. My mum's foot hurts, but nobody else is hurt. Can we have a plaster, please, and could somebody tidy up the tins?", k: ["shelf", "foot|hurt|hurts|pain", "plaster|first aid|help", "tidy|clean|tins|cans"], min: 3 }],
        tipp: "Start like this: A shelf … / My mum's foot … / Can we have …?" },
      { art: "offen", id: "deutsch-fassen", m7: true, tag: "Plus · Mediation", titel: "Tell your mum in German", lead: "Your mum did not read the report from the school magazine. In two or three German sentences: What happened at training, and what has the team changed since then? <span class=\"de\">Auf Deutsch, nur die wichtigen Punkte.</span>",
        fragen: [{ q: "Was hat der Bericht erzählt?", m: "Beim Fußballtraining sind der Torwart und der Verfasser beim Ballholen zusammengestoßen, weil beide nicht aufgeschaut haben. Der Torwart hatte einen blauen Fleck am Knie, der Verfasser blutete an der Nase. Seitdem schauen sie auf, bevor sie dem Ball nachlaufen, und rufen im Spiel laut, damit es keinen Zusammenstoß mehr gibt.", k: ["zusammen|Zusammenstoß|gestoßen|Unfall", "aufschau|hochschau|schauen auf|rufen|laut|Regel", "Torwart|Knie|Nase|Fleck|Ball"], min: 3 }],
        tipp: "Fang so an: Beim Training … / Seitdem …" },
      { art: "schreiben", id: "mini-schreiben", tag: "Writing trainer", titel: "My role model", min: 50,
        auftrag: "<p>Write about a role model, for example an older sister, a lifeguard, a coach or a bus driver, in about <b>six sentences</b>. Say who the person is, what he or she does and why you admire him or her. Tell a short story that shows what the person is like.</p><p>Use <b>one sentence in the present perfect</b> (for or since) and <b>one sentence with when or while</b> in the past. Use <b>because</b> or <b>although</b> once. Write at least 50 words in English.</p>",
        starter: ["My role model is …", "He / She is very …", "He / She has … for / since …", "Once, while …, he / she …", "I admire him / her because …"],
        kriterien: ["Der Text sagt, wer das Vorbild ist und was die Person tut.", "Er erzählt eine kurze Geschichte mit when oder while und past progressive.", "Er enthält einen richtigen Satz im present perfect mit for oder since.", "Er nennt mit because oder although einen Grund und hat mindestens 50 Wörter."] }
    ] }
  ],
  weiter: { text: "Well done! You have revised the words and grammar of Unit 3, you can build and correct sentences and you are ready for the test. Good luck!" }
});
