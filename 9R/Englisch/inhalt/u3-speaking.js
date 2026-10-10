/* Englisch 9R · Unit 3 Discover South Africa · Speaking: Report an accident, talk about a role model
   (Sprechen vorbereiten und anleiten: ein Rollenspiel „einen kleinen Unfall melden“ mit Rollenkarten A/B und ein Kurzvortrag über ein Vorbild;
   Redemittel, Aufbau, typische Fehler, Höflichkeit, Notizzettel; Grammatik: past progressive (while/when), present perfect mit for/since)
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend vortragen, Gespräche führen), E9 2 (Redemittel), E9 3.
   Texte: Mustervortrag „Coach Mbali“ (texte/u3/speaking-coach-mbali.js) – Person, Park und Straßen sind erfunden.
   Das Sprechen selbst kann das Gerät nicht bewerten: Die Kinder sprechen zu zweit oder halblaut für sich. */
D7Kit.seite({
  id: "u3-speaking",
  titel: "Speaking: Report an accident, talk about a role model",
  einleitung: "In this module you prepare <b>two ways of speaking</b>: a short <b>role play</b> (you report a small accident) and a <b>one-minute talk</b> about a role model. You learn phrases, make a note card and listen to a model talk – and then you speak. All people, parks and streets are <b>invented</b>. The device cannot judge your speaking: <b>you</b> speak, and your partner listens.",
  zeit: "etwa 45 Minuten",
  ziele: ["🚑 I report a small accident: what, where, when, who, is anybody hurt?", "⏪ I say what I was doing when it happened (past progressive).", "⭐ I talk about a role model: who, what, why, how long (present perfect with for / since).", "📝 I use a note card with key words.", "🙂 I am polite and ask again when I do not understand."],
  quiz: { profi: "Speaking pro" },
  glossar: {
    witness: ["witness", "Ein Zeuge oder eine Zeugin hat etwas gesehen und kann davon erzählen."],
    injured: ["injured", "Wer verletzt ist, hat sich wehgetan."],
    rolemodel: ["role model", "Ein Vorbild ist ein Mensch, den man bewundert und dem man ähnlich sein möchte."],
    notecard: ["note card", "Ein Notizzettel hat nur Stichpunkte. Du sprichst frei und liest nichts vor."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you speak", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">What do you say when something happens and you must tell another person? And how do you talk about a person you admire? <span class=\"de\">Du übst zwei Sprechanlässe: einen kleinen Unfall melden (Rollenspiel) und über ein Vorbild sprechen (Kurzvortrag, etwa eine Minute).</span></p><p>The people, parks and streets here are <b>invented</b>. <span class=\"de\">Alles ist erfunden – es sind keine echten Orte oder Personen.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung. Du hörst sie später im Mustervortrag.</span>",
        paare: [["role model", "Vorbild"], ["coach", "Trainer(in)"], ["patient", "geduldig"], ["to train", "trainieren"], ["to give up", "aufgeben"], ["finish line", "Ziellinie"], ["honest", "ehrlich"], ["kind", "freundlich"]] },
      { art: "merke", kopf: "SPEAKING TIP", html: "<p>Both tasks have a clear order:</p><div class=\"phrasen\"><span>Accident: 1 Hello + what happened</span><span>2 Where and when</span><span>3 Who is hurt?</span><span>4 What I was doing</span><span>5 Name + thanks</span></div><div class=\"phrasen\"><span>Talk: 1 Start</span><span>2 Who is it?</span><span>3 What has the person done?</span><span>4 Why a role model?</span><span>5 End + questions</span></div><p>Speak slowly and use <b>key words</b> on a note card. <b>Now speak!</b> – the device does not listen. <span class=\"de\">Das Gerät bewertet dein Sprechen nicht, ihr gebt euch gegenseitig Rückmeldung.</span></p>" }
    ] },
    { kurz: "Accident", ober: "Role play 1", titel: "Report a small accident", teile: [
      { art: "merke", kopf: "USEFUL PHRASES", html: "<p><b>Starting the call</b></p><div class=\"phrasen\"><span>Hello, I would like to report an accident.</span><span>Excuse me, can you help me, please?</span></div><p><b>What, where, when</b></p><div class=\"phrasen\"><span>A … fell / hit / tipped over.</span><span>It happened in / near / outside …</span><span>It was about … o'clock.</span><span>It happened a few minutes ago.</span></div><p><b>Who is hurt?</b></p><div class=\"phrasen\"><span>Nobody is hurt.</span><span>His / Her … hurts.</span><span>He can / can't stand up.</span><span>Please send help.</span></div><p><b>What I was doing</b></p><div class=\"phrasen\"><span>I was walking … when …</span><span>While I was waiting, …</span></div><p><b>Ending</b></p><div class=\"phrasen\"><span>My name is … and my number is …</span><span>Thank you for your help.</span></div>" },
      { art: "merke", kopf: "PAST PROGRESSIVE", html: "<p>You say what was <b>happening</b> when something else happened:</p><ul><li><b>was / were + verb-ing</b>: I <u>was walking</u>. They <u>were playing</u>.</li><li><b>when</b> + short action: I was walking home <u>when</u> a ball hit a window.</li><li><b>while</b> + long action: <u>While</u> I was waiting, a girl fell.</li><li>Question: <u>What were you doing</u> when it happened?</li></ul>" },
      { art: "sort", id: "redemittel", tag: "Sort", titel: "What, where or hurt?", lead: "Put each sentence into the right box. <span class=\"de\">Was sagst du zu welcher Frage der Polizistin oder des Helfers?</span>",
        buckets: ["What happened?", "Where and when?", "Is anybody hurt?"],
        items: [{ t: "A ball hit a window.", b: 0 }, { t: "A shopping trolley tipped over.", b: 0 }, { t: "Two bikes touched each other.", b: 0 },
                { t: "It happened near the bus stop.", b: 1 }, { t: "It was about five o'clock.", b: 1 }, { t: "It happened outside the library.", b: 1 },
                { t: "Her knee hurts a little.", b: 2 }, { t: "Nobody is hurt.", b: 2 }, { t: "He can walk, but his arm hurts.", b: 2 }] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "Build a short report", lead: "Put the sentences in the right order. <span class=\"de\">So klingt eine gute Meldung von vorne nach hinten.</span>",
        schritte: ["Hello, I would like to report a small accident.", "A ball hit a shop window on Hillside Road.", "It happened about ten minutes ago.", "Two boys were playing football when it happened.", "Nobody is hurt, but the glass is broken.", "My name is Ayanda. Thank you for your help."] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Be clear and polite", lead: "Tick the best answer. <span class=\"de\">Typische Fehler und Höflichkeit.</span>",
        fragen: [
          { q: "Which start is best for a call?", o: ["Hello, I would like to report an accident.", "Come here now!", "Accident. Quick.", "Hey, you there."], a: 0,
            e: "A friendly greeting and a whole sentence help the other person to understand you." },
          { q: "You do not understand the officer. What do you say?", o: ["Sorry, could you say that again, please?", "What?", "Speak again.", "That is not important."], a: 0,
            e: "Sorry, could you say that again, please? is polite and clear." },
          { q: "Which sentence is correct?", o: ["I was walking my dog when the boy fell.", "I am walking my dog when the boy fell.", "I was walk my dog when the boy fell.", "I walking my dog when the boy fell."], a: 0,
            e: "Past progressive: was / were + verb with -ing. The short action (fell) is in the simple past." }
        ] },
      { art: "luecke", id: "pastprog", tag: "Gap text", titel: "What was happening?", lead: "Complete the sentences. <span class=\"de\">Ganze Formen stehen im Kasten. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["I ", { g: "was walking" }, " to the bus stop when I heard a loud noise."],
          ["My friends ", { g: "were playing" }, " football when the ball hit the window."],
          ["The woman ", { g: "was holding" }, " a phone when the boy fell."],
          [{ g: "What" }, " were you doing when it happened?"],
          ["It ", { g: "was raining" }, " when the accident happened."]
        ], extra: ["were holding", "were walking"] },
      { art: "offen", id: "eigene-saetze", tag: "Your sentences", titel: "Say what was happening", lead: "Use the key words to write 2 or 3 sentences. <span class=\"de\">Benutze was / were + -ing und when oder while.</span>",
        fragen: [{ q: "Key words: yesterday | wait for the bus | rain | a boy – fall off his bike", m: "Yesterday I was waiting for the bus. It was raining when a boy fell off his bike.", k: ["was waiting|were waiting|waiting", "raining|rain", "fell|fall|falling", "when|while"], min: 10 }],
        tipp: "Start like this: Yesterday I was waiting … / It was raining when … Use fell for the short action." }
    ] },
    { kurz: "Role model", ober: "Talk 2", titel: "Talk about a role model", teile: [
      { art: "merke", kopf: "USEFUL PHRASES", html: "<p><b>Start</b></p><div class=\"phrasen\"><span>Hello everyone.</span><span>Today I want to talk about my role model.</span></div><p><b>Who is it, and what has the person done?</b></p><div class=\"phrasen\"><span>… is my … (coach, grandfather, neighbour).</span><span>I have known … for … / since …</span><span>He / She has helped / taught / worked …</span></div><p><b>Why a role model?</b></p><div class=\"phrasen\"><span>I admire … because …</span><span>He / She is patient / kind / honest.</span><span>In my opinion, a good role model …</span></div><p><b>End</b></p><div class=\"phrasen\"><span>Thank you for listening.</span><span>Do you have any questions?</span></div>" },
      { art: "merke", kopf: "PRESENT PERFECT: FOR AND SINCE", html: "<p>The person did something in the past and it is <b>still true now</b>:</p><ul><li><b>have / has + past participle</b>: I <u>have known</u> her. She <u>has helped</u> many people.</li><li><b>for</b> + a period of time: <u>for</u> three years, <u>for</u> ten months, <u>for</u> a long time.</li><li><b>since</b> + the starting point: <u>since</u> 2019, <u>since</u> Monday, <u>since</u> I was seven.</li><li>Question: <u>How long have</u> you known him?</li></ul>" },
      { art: "sort", id: "forsince", tag: "Sort", titel: "For or since?", lead: "Put each time phrase into the right box. <span class=\"de\">for = Zeitraum, since = Anfangspunkt.</span>",
        buckets: ["for", "since"],
        items: [{ t: "three years", b: 0 }, { t: "ten months", b: 0 }, { t: "a long time", b: 0 }, { t: "two weeks", b: 0 },
                { t: "last September", b: 1 }, { t: "Monday", b: 1 }, { t: "2019", b: 1 }, { t: "I was seven", b: 1 }] },
      { art: "mc", id: "vorbild-fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence. <span class=\"de\">Typische Fehler im Vortrag über ein Vorbild.</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["I have known her for three years.", "I know her since three years.", "I am knowing her for three years.", "I have known her since three years."], a: 0,
            e: "Present perfect: have + known. Use for with a period of time (three years)." },
          { q: "Which sentence is correct?", o: ["She has lived here since 2015.", "She has lived here for 2015.", "She lives here since 2015.", "She is living here for 2015."], a: 0,
            e: "2015 is a starting point, so you use since with the present perfect." },
          { q: "Which sentence is a good reason for a role model?", o: ["I admire him because he helps other people.", "I admire him, because yes.", "He is my role model. That's it.", "I do not know why."], a: 0,
            e: "Give a reason with because and a full sentence." }
        ] },
      { art: "luecke", id: "perfect", tag: "Gap text", titel: "Talk about role models", lead: "Complete the sentences. <span class=\"de\">Ganze Formen stehen im Kasten. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["Ayanda ", { g: "has known" }, " Coach Mbali for three years."],
          ["Themba ", { g: "has lived" }, " in the same street as Mr Botha since 2019."],
          ["My grandfather ", { g: "has worked" }, " in his garden for forty years."],
          [{ g: "Have" }, " you ever met a person like that?"],
          ["She ", { g: "hasn't missed" }, " a lesson since January."]
        ], extra: ["have known", "is knowing"] }
    ] },
    { kurz: "Cards", ober: "Now speak!", titel: "Notes and partner cards", teile: [
      { art: "text", html: "<p class=\"lead\">Don't write your whole talk! Write <b>key words</b> on a note card. Then you make the sentences while you speak. <span class=\"de\">Ein Notizzettel hat Stichpunkte. So klingst du frei und natürlich.</span></p>" },
      { art: "text", html: "<div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Note card · example</h4><ul><li><b>Who:</b> my aunt, nurse</li><li><b>Work:</b> night shifts, old people</li><li><b>For / since:</b> since 2018</li><li><b>Why:</b> kind, never tired</li><li><b>End:</b> thanks + questions</li></ul></div><div class=\"sprech-karte b\"><h4>What you say</h4><ul><li>My aunt is a nurse.</li><li>She works at night and helps old people.</li><li>She has been a nurse since 2018.</li><li>I admire her because she is kind.</li></ul></div></div>" },
      { art: "mc", id: "notizen", tag: "Note cards", titel: "A good note card", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which note is a good key-word note?", o: ["Why: kind, helps people", "She is my role model because she is kind and she helps people and I like her very much.", "Everything about her", "I will read it all."], a: 0,
            e: "Key words are short. You make the full sentence when you speak." },
          { q: "Why do you use a note card?", o: ["I can look at it and still speak freely.", "I can read every word aloud.", "I don't need to practise.", "My partner reads it for me."], a: 0,
            e: "The card helps your memory. A talk that you only read aloud is boring." }
        ] },
      { art: "offen", id: "notizen-zu-saetzen", tag: "Your sentences", titel: "From key words to sentences", lead: "Use the key words to write 3 or 4 sentences. <span class=\"de\">Aus Stichpunkten werden ganze Sätze (present perfect mit since).</span>",
        fragen: [{ q: "Key words: my aunt | nurse | work at night | since 2018 | help old people", m: "My aunt is a nurse. She works at night. She has been a nurse since 2018. She helps old people.", k: ["aunt|nurse", "night|works|work", "since|for", "help|helps|old people"], min: 12 }],
        tipp: "Start like this: My aunt is a nurse. / She has been … since … Remember: she works, she helps (with -s)." },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> The device cannot listen to you or give you points. <b>You and your partner</b> do the job. <span class=\"de\">Das Gerät bewertet dein Sprechen nicht. Ihr spielt die Rollen, wer zuhört, gibt freundliche Rückmeldung.</span></p><p class=\"de\"><b>Ablauf Rollenspiel:</b> 1) A und B lesen nur die eigene Karte. 2) Spielt das Telefonat oder Gespräch (etwa zwei Minuten), ohne die Karten vorzulesen. 3) Tauscht die Rollen und nehmt die nächste Karte. Kein Partner da? Sprich halblaut beide Rollen.</p>" },
      { art: "text", html: "<h3>Role play 1 · A fall in the park</h3><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · Themba, witness (phone call)</h4><ul><li><b>Where:</b> Lantern Park (invented), path near the pond</li><li><b>When:</b> about four o'clock, a few minutes ago</li><li><b>What:</b> a boy fell off his skateboard</li><li><b>Hurt?</b> his arm hurts, he can sit up, not much blood</li><li><b>You:</b> you were walking your dog when it happened</li><li><b>End:</b> say your name, thank the officer</li></ul></div><div class=\"sprech-karte b\"><h4>Card B · Officer Pillay (on the phone)</h4><ul><li>Where are you?</li><li>What happened?</li><li>When did it happen?</li><li>Is anybody hurt?</li><li>What were you doing?</li><li>Can I have your name?</li></ul><p class=\"de\">Sag am Ende, dass Hilfe kommt. Frage freundlich nach, wenn du etwas nicht verstanden hast.</p></div></div>" },
      { art: "text", html: "<h3>Role play 2 · A trolley at the shop</h3><div class=\"sprech-karten\"><div class=\"sprech-karte b\"><h4>Card A · Ayanda (a customer)</h4><ul><li><b>Where:</b> car park of a small supermarket (invented)</li><li><b>What:</b> a loaded trolley tipped over and hit your leg</li><li><b>Hurt?</b> small cut on your leg, it hurts a little</li><li><b>You:</b> you were putting bags into your car when it happened</li><li><b>You want:</b> a plaster and a chair</li></ul></div><div class=\"sprech-karte a\"><h4>Card B · Mr Botha (shop worker, first aider)</h4><ul><li>Are you OK?</li><li>What happened?</li><li>Where does it hurt?</li><li>What were you doing?</li><li>Please sit down. I can help you.</li></ul><p class=\"de\">Du bist freundlich und ruhig. Frage, ob die Kundin eine Wasserflasche möchte.</p></div></div>" },
      { art: "offen", id: "eigene-frage", m7: true, tag: "Your question", titel: "Ask your own question", lead: "Write two questions you can ask after a talk about a role model. <span class=\"de\">Nutze How long have you …? oder Why …?</span>",
        fragen: [{ q: "Write two questions to the speaker.", m: "How long have you known her? Why is she your role model?", k: ["how long|why|what|when|who|where", "known|know|role model|she|he|have|has"], min: 6 }],
        tipp: "Start with How long / Why / What / Who … and put a question mark at the end." },
      { art: "text", html: "<h3>Talk cards · two role models</h3><p class=\"de\">Wählt eine Karte und haltet einen Kurzvortrag von etwa einer Minute. Der Partner stellt danach zwei Fragen. Beide Personen sind erfunden.</p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card 1 · my grandfather</h4><ul><li><b>Who:</b> my grandfather</li><li><b>Work:</b> repairs old bikes for children</li><li><b>For / since:</b> for thirty years</li><li><b>Done:</b> has repaired hundreds of bikes for free</li><li><b>Why:</b> generous, never says no</li></ul></div><div class=\"sprech-karte b\"><h4>Card 2 · Mr Botha, my neighbour</h4><ul><li><b>Who:</b> Mr Botha, lives next door</li><li><b>Work:</b> looks after a small street garden</li><li><b>For / since:</b> I have known him since 2020</li><li><b>Done:</b> has planted trees with the children</li><li><b>Why:</b> friendly, helps everybody</li></ul></div></div>" }
    ] },
    { kurz: "Model talk", ober: "A model talk", titel: "Listen, then make your own", teile: [
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", titel: "A model talk", lead: "Listen to Ayanda. She talks about her coach, not about the people on the cards. <span class=\"de\">Hör zu, wie Ayanda ihren Vortrag aufbaut – Anfang, Hauptteil und Schluss.</span>", hoertext: "u3-speak-coach-mbali", fragen: [
        { art: "mc", id: "hoer-fragen", titel: "What do you hear?", fragen: [
          { q: "What does Coach Mbali do?", o: ["She trains a school running team.", "She teaches maths.", "She runs a shop.", "She plays in a band."], a: 0,
            e: "\"Coach Mbali is my running coach.\"" },
          { q: "How long has Ayanda known Coach Mbali?", o: ["For three years.", "For about one year.", "For ten years.", "For one month."], a: 0,
            e: "\"I have known her for three years.\"" },
          { q: "What was Ayanda like at the beginning?", o: ["She often gave up and was late.", "She won every race.", "She never trained.", "She was always the first."], a: 0,
            e: "\"I often gave up after two laps and I was always late.\"" },
          { q: "What was Coach Mbali doing at the end of the race?", o: ["She was waiting at the finish line.", "She was running next to Ayanda.", "She was taking photos.", "She was shouting at the runners."], a: 0,
            e: "\"Coach Mbali was waiting at the finish line.\"" },
          { q: "Why is Coach Mbali a role model for Ayanda?", o: ["She is patient and never shouts.", "She is very rich.", "She is famous on TV.", "She wins every race."], a: 0,
            e: "\"She is patient, and she never shouts.\"" }
        ] }
      ] },
      { art: "offen", id: "eigener-zettel", m7: true, tag: "Your note card", titel: "Make your own note card", lead: "Think of a person you admire (real or invented, not a famous star). Write 4 key words or short sentences. <span class=\"de\">Das ist dein Notizzettel für einen eigenen Vortrag – schreibe Stichpunkte.</span>",
        fragen: [{ q: "Write your note card: who, what the person does, for/since, why a role model.", m: "Who: my cousin. Work: plays football for the town team. Since 2016. Why: works hard and helps younger players.", k: ["who|my|person|name|called", "work|does|plays|helps|teaches|repairs|cook|train", "since|for", "why|because|kind|patient|honest|helps"], min: 8 }],
        tipp: "Use the headings: Who – Work – For/since – Why. Short key words are fine." },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Give your own talk to a partner. Use your note card and the phrases from station 3. Speak for about <b>one minute</b>. <span class=\"de\">Dein Partner stellt danach zwei Fragen. Das Gerät hört nicht zu – ihr beide gebt euch Rückmeldung.</span></p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to speak well", lead: "True or false? <span class=\"de\">Aussagen über gutes Sprechen.</span>",
        aussagen: [
          ["On a note card you write every sentence of your talk.", false],
          ["In a report you say what happened, where and when.", true],
          ["For a period of time you use for, for example for three years.", true],
          ["The device gives you points for your speaking.", false],
          ["If you do not understand, you can say: Sorry, could you say that again, please?", true]
        ] },
      { art: "text", html: "<p class=\"lead\">My checklist after speaking – say <i>yes</i> to yourself:</p><ul><li>☐ I said what happened, where and when (or who the person is).</li><li>☐ I used was / were + -ing, or have / has + for / since.</li><li>☐ I gave a reason with <i>because</i>.</li><li>☐ I was polite and thanked my partner.</li><li>☐ I spoke freely and did not read.</li></ul>" },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In a report you say what, where, ", { g: "when" }, " and who is hurt."],
          ["The past progressive is was or were + the verb with ", { g: "-ing" }, "."],
          ["I have known her ", { g: "for" }, " three years."],
          ["She has lived here ", { g: "since" }, " 2015."],
          ["The device does not ", { g: "judge" }, " your speaking."]
        ], extra: ["ago", "never"] }
    ] }
  ],
  weiter: { text: "Well done! You can report a small accident and give a short talk about a role model. Speak as often as you can – with a partner, in a group or quietly for yourself." }
});
