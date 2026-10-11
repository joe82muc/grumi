/* Englisch 9M · Unit 1 Around Australia · Listening: Plans for the long weekend · M-Fassung
   (Gespräche verstehen: Thema erfassen, Einzelheiten und Korrekturen heraushören – Uhrzeit, Ort, Preis, Problem und Lösung –,
   Gefühle und Absichten erschließen, Notizen und ein Formular ausfüllen, Sprache im Gespräch – will-future, if-Sätze Typ I,
   simple past, Satzverknüpfungen; Plus: eigene Meinung, Sprachmittlung)
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten entnehmen, Schlüsse ziehen, Notizen machen),
   E9 3 (Hörstrategien), E9 5 (Australien: Alltag und Freizeit).
   Texte: „Plans for the long weekend“ (texte/u1/listening-long-weekend-m.js) und „A phone call to the doctor's“
   (texte/u1/listening-doctors-call-m.js) – Personen, See und Arztpraxis sind erfunden. */
D7Kit.seite({
  id: "u1-listening",
  titel: "Listening: Plans for the long weekend",
  einleitung: "Two friends plan a camping trip – and one of them hurts his ankle. You listen to a conversation and to a phone call. In both talks somebody corrects an answer, and some feelings are only hinted at. Catch the main idea, then the details, then read between the lines.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I understand a conversation, even when somebody corrects an answer.", "🔎 I catch times, prices, places and names – and know which one is right.", "💭 I work out feelings and reasons that nobody says directly.", "🧩 I use the grammar of Unit 1 in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    forecast: ["forecast", "Eine Vorhersage, hier die Wettervorhersage für das Wochenende."],
    appointment: ["appointment", "Ein Termin, zum Beispiel bei der Ärztin oder beim Arzt."],
    timetable: ["timetable", "Im Fahrplan steht, wann ein Bus abfährt."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber? Wie fühlen sich die Sprecher?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten und achtest auf Korrekturen: Welche Angabe gilt am Ende?"]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What can you see? What do you think the two friends are talking about?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u1-camping-plan.jpg\" alt=\"Two teenagers at a garden table plan a camping trip with a map; next to them are a tent bag, backpacks and a cool box.\" style=\"width:100%;border-radius:14px\"></figure><p>Which problems could such a trip have? Think of two.</p>" },
      { art: "text", html: "<p class=\"lead\">It is Wednesday. On Friday the long weekend starts, and two friends in a small Australian town finish their plan. You will hear their conversation – and a phone call a few days later.</p><p>The town, the lake and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["campsite", "Campingplatz"], ["torch", "Taschenlampe"], ["sleeping bag", "Schlafsack"], ["matches", "Streichhölzer"], ["forecast", "Wettervorhersage"], ["timetable", "Fahrplan"], ["crowded", "überfüllt"], ["swollen", "geschwollen"], ["wrap", "einwickeln"], ["appointment", "Termin"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> topic, people, mood.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> details – and watch out for <b>corrections</b>: “No, sorry …”, “Oh, wait …”, “I mean …”. Only the <b>last</b> answer counts.</li></ol><p>You do <b>not</b> need to understand every word. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u1-listen-camping-m", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer.",
          fragen: [
            { q: "What are Nina and Declan planning?", o: ["a camping trip to a lake", "a bike ride to the beach", "a school trip to the city", "a party at Declan's house"], a: 0,
              e: "They finish the plan for a camping trip to Lake Tarrin." },
            { q: "Why do they choose the lake and not the beach?", o: ["Last year there was no space for everybody on the beach.", "The beach is closed for building work.", "The lake is cheaper than the beach.", "Declan's mum does not like the sea."], a: 0,
              e: "Nina says it was so crowded last year that they could not even find a place for their towels. The building work is at the station." },
            { q: "How does Declan's mum feel about the trip?", o: ["She agrees, but she worries about cold nights.", "She is angry and says no.", "She is delighted and wants to come.", "She does not care."], a: 0,
              e: "She said yes, although she was not happy about the lake – she thinks it might be too cold at night." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u1-listen-camping-m", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. Watch out for corrections.",
          aussagen: [
            ["The bus leaves at eight o'clock.", false],
            ["The friends meet at the station.", false],
            ["Without a student card the bus ticket costs eight dollars.", true],
            ["The campsite costs eighteen dollars for the whole weekend.", true],
            ["Declan noticed the problem with his sleeping bag last night.", true],
            ["The sleeping bag from Nina's brother is warm and smells nice.", false],
            ["It will rain on both days of the weekend.", false],
            ["Declan wanted to go to the beach again.", true]
          ] },
        { art: "luecke", id: "notizen", titel: "Declan's notes", lead: "Complete the notes with words from the box. Two words are left over.",
          absaetze: [
            ["Bus leaves at ", { g: "quarter past eight" }, " (changed!)."],
            ["Meet in front of the ", { g: "library" }, " at ten to eight."],
            ["Student ticket: ", { g: "six" }, " dollars."],
            ["Nina brings the tent and two ", { g: "torches" }, "."],
            ["I bring the food and the cooking ", { g: "stove" }, "."],
            ["Problem: my sleeping bag has a ", { g: "hole" }, "."]
          ], extra: ["pocket", "kitchen"] },
        { art: "ordnen", id: "reihenfolge", titel: "What do they talk about?", lead: "Put the topics in the order of the conversation.",
          schritte: ["Declan tells Nina what his mum said.", "Nina corrects the time of the bus.", "They agree where to meet.", "Nina tells Declan the prices.", "They decide who brings what.", "Declan has a problem with his sleeping bag.", "They talk about the weather."] },
        { art: "mc", id: "schluesse", titel: "Between the lines", lead: "Tick the correct answer. The answer is not said directly.",
          fragen: [
            { q: "What does Nina's remark about the old shoes show?", o: ["She is honest: the sleeping bag is not perfect, but usable.", "She does not want to help Declan.", "She thinks the sleeping bag is new.", "She wants to go to the beach instead."], a: 0,
              e: "Nina says the bag is warm enough but smells a bit. She tells the truth and still offers help." },
            { q: "Why does Declan say he will take his student card?", o: ["Without it the ticket is two dollars more.", "The campsite asks for it.", "Nina wants to see it.", "He needs it to enter the library."], a: 0,
              e: "A ticket costs six dollars with the card and eight dollars without it." },
            { q: "Which day will probably be good for swimming?", o: ["Saturday", "Sunday", "Friday", "Monday"], a: 0,
              e: "The forecast says it will be sunny on Saturday and that it might rain on Sunday." }
          ] },
        { art: "mc", id: "wetter", titel: "If it rains …", lead: "Tick the correct answer.",
          fragen: [
            { q: "What will the friends do if it rains on Sunday?", o: ["They will stay in the tent and play cards.", "They will swim in the lake.", "They will go home at once.", "They will cook pasta."], a: 0,
              e: "Nina says: If it rains, we will stay in the tent and play cards. Swimming is the plan for sunshine." }
          ] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to the doctor's", teile: [
      { art: "text", html: "<p class=\"lead\">A few days later Declan makes a phone call. Read the tasks, then listen. Watch out: the receptionist changes the appointment.</p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u1-listen-surgery-m", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Declan call the practice?", o: ["He twisted his ankle and it is swollen.", "He has a bad sunburn.", "He wants to cancel an appointment.", "He needs a letter for school."], a: 0,
              e: "He twisted his ankle on a camping trip and it hurts when he walks." },
            { q: "Why can Declan not come on Monday?", o: ["He has a maths test.", "He is in hospital.", "He is on holiday.", "The practice is closed."], a: 0,
              e: "He says he has a maths test on Monday morning." }
          ] },
        { art: "formular", id: "karte", titel: "Declan's appointment card", lead: "Listen again and complete the card. Only the final information counts.",
          karte: "<p>Fill in the card with the information from the call.</p>",
          kopf: "Greenfield Medical Practice – Appointment card",
          felder: [
            { label: "Surname", loesung: ["Pryor", "PRYOR", "P R Y O R", "P-R-Y-O-R"] },
            { label: "What hurts?", loesung: ["ankle"], wahl: ["wrist", "knee", "ankle"] },
            { label: "Doctor", loesung: ["Singh", "Doctor Singh", "Dr Singh", "Dr. Singh"] },
            { label: "Day", loesung: ["Tuesday"], wahl: ["Monday", "Tuesday", "Wednesday"] },
            { label: "Time", loesung: ["5.20", "5:20", "17.20", "17:20", "5.20 pm", "5:20 pm", "twenty past five", "20 past 5"] },
            { label: "Bring (1)", loesung: ["health card", "my health card", "your health card", "the health card", "list of medicine", "a list of medicine", "list of any medicine", "a list of any medicine", "medicine list", "list of medicines", "a list of medicines"] },
            { label: "Bring (2)", loesung: ["list of medicine", "a list of medicine", "list of any medicine", "a list of any medicine", "medicine list", "list of medicines", "a list of medicines", "health card", "my health card", "your health card", "the health card"] }
          ] },
        { art: "luecke", id: "ratschlag", titel: "The advice", lead: "Complete the advice with words from the box. Two words are left over.",
          absaetze: [
            ["If your ankle hurts a lot, put some ", { g: "ice" }, " on it for ", { g: "twenty" }, " minutes."],
            ["Wrap the ice in a ", { g: "towel" }, " first."],
            ["If the pain gets worse, ", { g: "call" }, " the practice again or go to the ", { g: "hospital" }, "."]
          ], extra: ["hot", "wall"] },
        { art: "mc", id: "schluesse2", titel: "Between the lines", lead: "Tick the correct answer. The answer is not said directly.",
          fragen: [
            { q: "Declan says: “Don't worry, everybody gets that wrong.” What does this show?", o: ["He stays friendly and does not blame the receptionist.", "He is angry about the mistake.", "He does not know how to spell his name.", "He wants to end the call quickly."], a: 0,
              e: "People often spell his surname with an I. Declan knows that, so he stays relaxed and polite." },
            { q: "Why does Declan accept the late appointment?", o: ["His mum finishes work at five and can drive him.", "He likes late appointments.", "The doctor works only in the evening.", "He wants to miss school."], a: 0,
              e: "Declan says that the time is quite late, but his mum can drive him after work." },
            { q: "How does Declan feel after the answer to his last question?", o: ["Disappointed – it is not the answer he hoped for.", "Very happy about the news.", "Angry with the receptionist.", "Bored."], a: 0,
              e: "His short “Oh no. OK.” shows that he is disappointed." }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 1 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The conversation uses things from Unit 1:</p><ul><li><b>will-future</b> – decisions and what you expect: I <u>will ask</u> my brother. It <u>will be</u> quiet.</li><li><b>simple past</b> – what happened: Last year we <u>forgot</u> the matches.</li><li><b>if-sentences (type I)</b> – <u>If</u> it <u>rains</u>, we <u>will stay</u> in the tent. After <i>if</i> there is no <i>will</i>.</li><li><b>linking words</b> – <i>although, because, so that</i>.</li></ul>" },
      { art: "sort", id: "zeiten", tag: "Sort", titel: "Past or future?", lead: "Put the phrases from the conversation into the right box.",
        buckets: ["It happened (simple past)", "It will happen (will-future)"],
        items: [{ t: "forgot the matches", b: 0 }, { t: "had to eat cold sandwiches", b: 0 }, { t: "found the hole last night", b: 0 }, { t: "changed the timetable", b: 0 },
                { t: "will make pasta", b: 1 }, { t: "will ask my brother", b: 1 }, { t: "will take warm clothes", b: 1 }, { t: "will stay in the tent", b: 1 }] },
      { art: "luecke", id: "if-luecke", tag: "Gap text", titel: "What will happen if …?", lead: "Complete the sentences. Careful: no will after if.",
        absaetze: [
          ["If it ", { g: "rains" }, " on Sunday, the friends ", { g: "will play" }, " cards."],
          ["If the sun ", { g: "shines" }, ", they ", { g: "will swim" }, " in the lake."],
          ["If the pain ", { g: "gets" }, " worse, Declan ", { g: "will call" }, " the practice again."]
        ], extra: ["will rain", "swam"] },
      { art: "luecke", id: "verknuepfung", tag: "Gap text", titel: "Link the ideas", lead: "Complete the sentences with a linking word. Two words are left over.",
        absaetze: [
          ["Declan's mum said yes, ", { g: "although" }, " she was a little worried."],
          ["The friends choose the lake ", { g: "because" }, " the beach was too crowded last year."],
          ["Declan packs warm clothes ", { g: "so that" }, " he will not freeze at night."]
        ], extra: ["unless", "until"] },
      { art: "offen", id: "meinung", m7: true, tag: "Your opinion", titel: "Lake or beach?", lead: "Where would you like to spend a long weekend – at a lake or at the beach? Write two sentences and give two reasons.",
        fragen: [{ q: "Lake or beach? Give two reasons.", m: "I would prefer a lake because it is quiet and I can swim there without a crowd. Also, a camping trip at a lake is cheaper than a hotel at the beach.", k: ["lake|beach|sea|river|mountain|mountains", "because|reason|first|second|also|and"], min: 2 }],
        tipp: "Start like this: I would prefer … because … Also, …" },
      { art: "offen", id: "regen", m7: true, tag: "Your words", titel: "What about you?", lead: "What will you do if it rains on your next trip? Write two sentences with if and will.",
        fragen: [{ q: "What will you do if it rains on your next trip?", m: "If it rains, I will read a book in the tent. If it stops, I will go for a walk.", k: ["if", "rain|rains|raining|weather|wet", "will|'ll"], min: 3 }],
        tipp: "Start like this: If it rains, I will … / If it stops, I will …" },
      { art: "offen", id: "letztes-jahr", tag: "Your words", titel: "Last year …", lead: "Write two sentences about a trip or a holiday in the past. Use the simple past and one linking word.",
        fragen: [{ q: "What did you do on a trip or holiday last year?", m: "Last year we went to the mountains, although it rained a lot. We stayed in a small hut because it was cheap.", k: ["although|because|so|but|when|while|after|before", "went|visited|was|had|stayed|played|saw|took|made|did|ate|swam|walked|travelled"], min: 2 }],
        tipp: "Start like this: Last year I went to … because …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two talks in four sentences", lead: "Complete the summary. A summary uses your own words – it is not the same as the talk.",
        absaetze: [
          ["Nina and Declan plan a camping trip to a ", { g: "lake" }, " because the beach was too crowded last year."],
          ["Nina first gives the wrong time for the bus, but then she ", { g: "corrects" }, " herself."],
          ["Later Declan ", { g: "twists" }, " his ankle and phones the doctor's practice."],
          ["He gets an appointment on ", { g: "Tuesday" }, " because he has a maths test on Monday."]
        ], extra: ["Thursday", "earlier"] },
      { art: "offen", id: "fussball", m7: true, tag: "Your words", titel: "Explain it", lead: "The receptionist says: “I wouldn't count on it.” Explain in your own words what she means and why.",
        fragen: [{ q: "What does the receptionist mean?", m: "She thinks that Declan cannot play football on Saturday because his ankle is swollen and hurts.", k: ["ankle|foot|hurt|hurts|swollen|pain|injured", "not|cannot|can't|won't|no|probably|unlikely", "football|play|match|Saturday|game"], min: 3 }],
        tipp: "Start like this: She thinks that Declan … because …" },
      { art: "offen", id: "mediation", m7: true, tag: "Mediation", titel: "Auf Deutsch weitersagen", lead: "Declans Oma versteht kein Englisch. Sag ihr auf Deutsch in zwei bis drei Sätzen, wann der Termin ist und was Declan bis dahin tun soll.",
        fragen: [{ q: "Was sagst du Declans Oma?", m: "Declan hat am Dienstag um zwanzig nach fünf einen Termin bei Doktor Singh. Bis dahin soll er den Fuß hochlegen und nicht viel laufen. Bei Schmerzen kann er Eis in einem Handtuch auf den Knöchel legen.", k: ["dienstag|Dienstag", "fuß|Fuß|fuss|Knöchel|knöchel", "laufen|gehen|hochleg|schonen|Eis|eis|kühlen"], min: 3 }],
        tipp: "Du musst nicht alles übersetzen: Nenne den Tag, die Uhrzeit und die wichtigsten Ratschläge." }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea, the details and the corrections in a conversation and in a phone call – and you can read between the lines." }
});
