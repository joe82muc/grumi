/* Englisch 9R · Unit 4 News from New Zealand · Speaking: A job interview
   (Sprechen vorbereiten und anleiten: Vorstellungsgespräch für einen Ferien- oder Samstagsjob mit Rollenkarten A/B;
   Redemittel, Aufbau, Höflichkeit, Sprechzettel; Grammatik: simple past (Erfahrung), going to (Pläne))
   LehrplanPLUS E9 1.2 Sprechen (Gespräche führen), E9 2 (Redemittel), E9 3.
   Texte: Musterdialog „Jordan im Ferienpark-Kiosk“ (texte/u4/speaking-holiday-park.js) – Personen und Orte sind erfunden.
   Die Rollenkarten (kleines Kino, Ms Parata) sind ein anderes Gespräch als der Musterdialog.
   Das Sprechen selbst kann das Gerät nicht bewerten: Die Kinder sprechen zu zweit oder halblaut für sich. */
D7Kit.seite({
  id: "u4-speaking",
  titel: "Speaking: A job interview",
  einleitung: "In this module you prepare a <b>job interview</b> for a holiday or Saturday job. You learn phrases, hear a model interview, make a note card and play the roles of the <b>applicant</b> and the <b>boss</b>. All people and places are <b>invented</b>. The device cannot judge your speaking: <b>you</b> speak, and your partner listens.",
  zeit: "etwa 45 Minuten",
  ziele: ["👋 I introduce myself politely and use Mr or Ms.", "📋 I talk about my experience (simple past).", "💪 I name a strength and give an example.", "🗓️ I say what I am going to do (going to).", "❓ I ask my own question and say thank you."],
  quiz: { profi: "Interview pro" },
  glossar: {
    interview: ["interview", "Ein Vorstellungsgespräch ist ein Gespräch, in dem eine Firma einen Bewerber oder eine Bewerberin kennenlernt."],
    applicant: ["applicant", "Ein Bewerber oder eine Bewerberin möchte eine Stelle bekommen."],
    reliable: ["reliable", "Wer zuverlässig ist, kommt pünktlich und macht, was er versprochen hat."],
    shift: ["shift", "Eine Schicht ist die Arbeitszeit an einem Tag, zum Beispiel fünf Stunden am Samstag."],
    notecard: ["note card", "Ein Sprechzettel hat nur Stichpunkte. Du sprichst frei und liest nichts vor."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you speak", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">You want a Saturday job or a holiday job. First there is an interview. What do you say? <span class=\"de\">Du übst ein Vorstellungsgespräch für einen Ferien- oder Samstagsjob: höflich vorstellen, von Erfahrung erzählen, Stärken nennen, selbst nachfragen.</span></p><p>The people and places here are <b>invented</b>. <span class=\"de\">Alles ist erfunden – es sind keine echten Personen oder Firmen.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung. Du hörst die Wörter später im Musterinterview.</span>",
        paare: [["interview", "Vorstellungsgespräch"], ["kiosk", "kleiner Verkaufsstand"], ["campsite", "Zeltplatz"], ["stall", "Marktstand"], ["customer", "Kunde / Kundin"], ["reliable", "zuverlässig"], ["shift", "Schicht"], ["to save", "sparen"]] },
      { art: "merke", kopf: "SPEAKING TIP", html: "<p>A job interview has a clear order:</p><div class=\"phrasen\"><span>1 Greet + sit down</span><span>2 Introduce yourself</span><span>3 Experience</span><span>4 Strength + example</span><span>5 Plans</span><span>6 Your question</span><span>7 Thank you + goodbye</span></div><p>Say <b>Mr</b> or <b>Ms</b> and the family name. Speak slowly and clearly. <b>Now speak!</b> comes at the end – the device does not listen. <span class=\"de\">Das Gerät bewertet dein Sprechen nicht, ihr gebt euch gegenseitig Rückmeldung.</span></p>" }
    ] },
    { kurz: "Phrases", ober: "Useful phrases", titel: "What do you say?", teile: [
      { art: "merke", kopf: "USEFUL PHRASES", html: "<p><b>Introducing yourself</b></p><div class=\"phrasen\"><span>Good morning, Mr / Ms … Nice to meet you.</span><span>Thank you for seeing me.</span><span>My name is … and I'm … years old.</span></div><p><b>Experience</b></p><div class=\"phrasen\"><span>Last summer I helped / worked …</span><span>I did an internship at …</span><span>I sold / cleaned / carried …</span></div><p><b>Strengths with an example</b></p><div class=\"phrasen\"><span>I am reliable / friendly / helpful.</span><span>For example, I was never late.</span></div><p><b>Plans</b></p><div class=\"phrasen\"><span>I'm going to save the money for …</span><span>I'm going to work every Saturday.</span></div><p><b>Asking politely</b></p><div class=\"phrasen\"><span>Sorry, could you say that again, please?</span><span>May I ask a question?</span></div><p><b>Ending</b></p><div class=\"phrasen\"><span>Thank you very much for the interview.</span><span>Goodbye, Mr / Ms …</span></div>" },
      { art: "sort", id: "redemittel", tag: "Sort", titel: "Which part of the interview?", lead: "Put each sentence into the right box. <span class=\"de\">Zu welchem Teil des Gesprächs gehört der Satz?</span>",
        buckets: ["Introducing myself", "Experience and strengths", "Asking and thanking"],
        items: [{ t: "Nice to meet you.", b: 0 }, { t: "My name is … and I'm fifteen.", b: 0 }, { t: "Good morning, Ms …", b: 0 },
                { t: "Last year I did an internship at …", b: 1 }, { t: "I sold tickets at a school show.", b: 1 }, { t: "I am reliable and friendly.", b: 1 }, { t: "For example, I was never late.", b: 1 },
                { t: "May I ask a question?", b: 2 }, { t: "Could you say that again, please?", b: 2 }, { t: "Thank you very much for the interview.", b: 2 }] },
      { art: "mc", id: "hoeflich", tag: "Be polite", titel: "Good manners in an interview", lead: "Tick the best answer. <span class=\"de\">Typische Fehler und Höflichkeit.</span>",
        fragen: [
          { q: "How do you greet the boss, Ms Parata?", o: ["Good morning, Ms Parata. Nice to meet you.", "Hi Parata, what's up?", "Hey, boss!", "Hello, you."], a: 0,
            e: "Use Ms or Mr and the family name. A friendly, polite greeting makes a good first impression." },
          { q: "The interview is at ten o'clock. When do you arrive?", o: ["A few minutes before ten.", "At ten past ten.", "At half past ten.", "At eleven."], a: 0,
            e: "Be on time, or better a little early. Then you are calm and the boss sees that you are reliable." },
          { q: "Where is your phone during the interview?", o: ["Switched off, in my bag.", "On the table, in case a friend writes.", "In my hand, so I can check the time.", "On my knee, I watch it."], a: 0,
            e: "A phone is a distraction. Switch it off and put it away, so you can look at the boss." },
          { q: "The boss asks something quickly and you do not understand. What do you say?", o: ["Sorry, could you say that again, please?", "I think yes.", "What?", "Nothing, I wait."], a: 0,
            e: "Ask politely if you do not understand. Guessing can give a wrong answer, silence looks unsure." }
        ] }
    ] },
    { kurz: "Model", ober: "A model interview", titel: "Listen and learn", teile: [
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "Build an interview", lead: "Put the sentences in the right order. <span class=\"de\">So klingt ein gutes Gespräch von vorne nach hinten.</span>",
        schritte: ["Good morning, Ms Parata. Nice to meet you.", "My name is Kaia and I'm fifteen.", "Last summer I helped at a school fair. I sold cakes.", "I am friendly. For example, I helped a lost child to find her mother.", "I'm going to save the money for a camera.", "May I ask when I would start?", "Thank you very much for the interview. Goodbye, Ms Parata."] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", titel: "A model interview", lead: "Listen to Jordan and Mr Fraser. Jordan wants a job at a holiday park. <span class=\"de\">Hör zu, wie Jordan sich vorstellt, von Erfahrung erzählt und nachfragt. Das ist ein anderes Gespräch als auf deinen Rollenkarten.</span>", hoertext: "u4-speak-holiday-park", fragen: [
        { art: "mc", id: "hoer-fragen", titel: "What do you hear?", fragen: [
          { q: "Where does Jordan want to work?", o: ["At the campsite kiosk.", "At a cinema.", "At a school canteen.", "At a fruit stall."], a: 0,
            e: "\"You would like to work at the campsite kiosk.\"" },
          { q: "What did Jordan do last summer?", o: ["Jordan helped an uncle at a fruit stall.", "Jordan worked at a campsite.", "Jordan was on holiday.", "Jordan did not work."], a: 0,
            e: "\"Last summer I helped my uncle at his fruit stall.\"" },
          { q: "Which strength does Jordan name?", o: ["Jordan is reliable.", "Jordan is very fast.", "Jordan is very strong.", "Jordan is funny."], a: 0,
            e: "\"I am reliable. For example, I was never late.\"" },
          { q: "How long is a shift at the kiosk?", o: ["Five hours.", "Three hours.", "Eight hours.", "Ten hours."], a: 0,
            e: "\"It is five hours.\"" },
          { q: "What does Jordan ask about at the end?", o: ["What to wear.", "How much money Jordan gets.", "When the holidays start.", "Who the other workers are."], a: 0,
            e: "\"May I ask one question? What do I wear?\"" }
        ] }
      ] }
    ] },
    { kurz: "Language", ober: "Language", titel: "Past and plans", teile: [
      { art: "merke", kopf: "SIMPLE PAST AND GOING TO", html: "<p><b>Experience = simple past.</b> It is finished, and you often say when.</p><ul><li>Regular: work<u>ed</u>, help<u>ed</u>, carry – <u>carried</u>: Last summer I <u>helped</u> my aunt.</li><li>Irregular: do – <u>did</u>, sell – <u>sold</u>: I <u>did</u> an internship. I <u>sold</u> tickets.</li><li>Not <i>have</i> with <i>last summer</i>: <u>Last summer I worked</u> in a shop.</li></ul><p><b>Plans = going to.</b></p><ul><li><b>am / is / are + going to + verb</b>: I <u>am going to</u> save money. She <u>is going to</u> start on Monday. We <u>are going to</u> work together.</li></ul>" },
      { art: "luecke", id: "past", tag: "Gap text", titel: "What did you do?", lead: "Complete the sentences. <span class=\"de\">Ganze Formen stehen im Kasten. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["Last summer I ", { g: "did" }, " an internship at a bakery."],
          ["In July I ", { g: "helped" }, " my neighbour in her garden."],
          ["On Saturdays I ", { g: "sold" }, " tickets at the school fair."],
          ["Before the party we ", { g: "cleaned" }, " the hall."]
        ], extra: ["have helped", "sell"] },
      { art: "luecke", id: "goingto", tag: "Gap text", titel: "What are your plans?", lead: "Complete the sentences. <span class=\"de\">Wähle die Form passend zum Subjekt. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["I ", { g: "am going to" }, " save the money for a trip."],
          ["My sister ", { g: "is going to" }, " start work on Monday."],
          ["We ", { g: "are going to" }, " clean the hall after the film."]
        ], extra: ["going to", "will going to"] },
      { art: "mc", id: "sprache", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence. <span class=\"de\">Typische Fehler beim Erzählen von Erfahrung und Plänen.</span>",
        fragen: [
          { q: "You tell Ms Parata about last summer. Which sentence is correct?", o: ["Last summer I worked in a shop.", "Last summer I work in a shop.", "Last summer I have worked in a shop.", "Last summer I am working in a shop."], a: 0,
            e: "Last summer is finished, so you use the simple past: worked." },
          { q: "You say what you plan. Which sentence is correct?", o: ["I'm going to start in July.", "I going to start in July.", "I'm go to start in July.", "I'm going start in July."], a: 0,
            e: "Plans: am / is / are + going to + the verb. Do not forget am and to." }
        ] }
    ] },
    { kurz: "Note card", ober: "Prepare", titel: "Your note card", teile: [
      { art: "text", html: "<p class=\"lead\">Don't write your whole interview! Write <b>key words</b> on a note card. Then you make the sentences while you speak. <span class=\"de\">Ein Sprechzettel hat Stichpunkte. So klingst du frei und natürlich. Jetzt schreibst du einzelne Sätze, die du im Gespräch brauchst.</span></p>" },
      { art: "offen", id: "erfahrung", tag: "Experience", titel: "Say what you did", lead: "Use the key words to write 2 sentences. <span class=\"de\">Erfahrung steht im simple past.</span>",
        fragen: [{ q: "Key words: in May | help | at a sports day | sell drinks", m: "In May I helped at a sports day. I sold drinks.", k: ["May|last", "helped|worked|help", "sold|sell|drinks"], min: 12 }],
        tipp: "Start like this: In May I helped … Use sold for sell." },
      { art: "offen", id: "staerke", tag: "Strength", titel: "Name a strength with an example", lead: "Write 2 sentences. <span class=\"de\">Eine Stärke wird mit einem Beispiel überzeugend.</span>",
        fragen: [{ q: "Key words: strength – reliable | example – never late", m: "I am reliable. For example, I was never late for school last year.", k: ["reliable|friendly|helpful|honest", "for example|because", "never|always|every"], min: 12 }],
        tipp: "Start like this: I am … For example, I … (simple past)." },
      { art: "offen", id: "plan", tag: "Plan", titel: "Say what you are going to do", lead: "Write 1 or 2 sentences. <span class=\"de\">Benutze am going to.</span>",
        fragen: [{ q: "Key words: summer job | money | save | holiday", m: "I'm going to save the money for a holiday.", k: ["going to", "save|spend|buy", "money"], min: 10 }],
        tipp: "Start like this: I'm going to … the money for …" },
      { art: "offen", id: "eigene-frage", m7: true, tag: "Your question", titel: "Ask your own questions", lead: "Write two polite questions you can ask Ms Parata at the end. <span class=\"de\">Frage zum Beispiel nach Arbeitszeit, Kleidung oder erstem Tag.</span>",
        fragen: [{ q: "Write two questions to the boss.", m: "What time does the first film start? Do I need to wear a uniform?", k: ["what|when|do|could|may|how", "uniform|wear|time|hours|start|first day|break"], min: 12 }],
        tipp: "Start with What / When / How / Do I … and put a question mark at the end." }
    ] },
    { kurz: "Now speak!", ober: "Role play", titel: "Now speak!", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> The device cannot listen to you or give you points. <b>You and your partner</b> do the job. <span class=\"de\">Das Gerät bewertet dein Sprechen nicht. Ihr spielt die Rollen, wer zuhört, gibt freundliche Rückmeldung.</span></p><p class=\"de\"><b>Ablauf:</b> 1) A und B lesen nur die eigene Karte. 2) Spielt das Vorstellungsgespräch (etwa drei Minuten), ohne die Karten vorzulesen. A bleibt höflich und nennt Mr/Ms. 3) Tauscht die Rollen: Wer vorher B war, ist jetzt A. Kein Partner da? Sprich halblaut beide Rollen.</p>" },
      { art: "text", html: "<h3>Role play · A Saturday job at the cinema</h3><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · You, the applicant</h4><ul><li><b>Job:</b> helper at the small Moonbeam Cinema (invented), Saturdays and holidays</li><li><b>Greet:</b> Ms Parata, say your name and age</li><li><b>Experience:</b> tell one thing you did (simple past) – real or invented</li><li><b>Strength:</b> one strength + an example</li><li><b>Plan:</b> what you are going to do with the money (going to)</li><li><b>Question:</b> ask one question about the job</li><li><b>End:</b> thank her, say goodbye</li></ul><p class=\"de\">Sprich in ganzen Sätzen. Du darfst auf deinen Sprechzettel schauen, aber nicht ablesen.</p></div><div class=\"sprech-karte b\"><h4>Card B · Ms Parata, the boss</h4><ul><li>Welcome the applicant. Please sit down.</li><li>Tell me about yourself.</li><li>Have you worked before? What did you do?</li><li>What are you good at? Can you give an example?</li><li>The job: sell tickets and popcorn, clean the hall after the film.</li><li>Can you work on Saturday evenings?</li><li>What are you going to do with the money?</li><li>Do you have any questions?</li><li>End: say you will call next Wednesday.</li></ul><p class=\"de\">Du bist freundlich und stellst die Fragen nacheinander. Frage nach, wenn die Antwort sehr kurz ist: Why? Can you give an example?</p></div></div>" },
      { art: "text", html: "<h3>Feedback for your partner</h3><ul><li>☐ Greeted with Mr / Ms and the family name.</li><li>☐ Told one thing in the simple past.</li><li>☐ Named a strength with an example.</li><li>☐ Said a plan with going to.</li><li>☐ Asked a question and said thank you.</li></ul><p class=\"de\">Sagt euch zuerst, was gut war, und dann einen Tipp für das nächste Mal.</p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to speak well", lead: "True or false? <span class=\"de\">Aussagen über ein gutes Vorstellungsgespräch.</span>",
        aussagen: [
          ["You say Mr or Ms and the family name to the boss.", true],
          ["If you do not understand a question, you guess.", false],
          ["A strength is better with an example.", true],
          ["The device gives you points for your speaking.", false],
          ["You switch off your phone before the interview.", true],
          ["At the end you ask a question and say thank you.", true]
        ] },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A strength is better with an ", { g: "example" }, "."],
          ["You say Mr or Ms and the family ", { g: "name" }, "."],
          ["For a plan I say: I am ", { g: "going" }, " to save money."],
          ["For things that are finished I use the simple ", { g: "past" }, "."],
          [{ g: "Thank" }, " you very much for the interview."]
        ], extra: ["present", "boss"] }
    ] }
  ],
  weiter: { text: "Well done! You can introduce yourself, talk about your experience and plans and ask your own question. Speak as often as you can – with a partner, in a group or quietly for yourself." }
});
