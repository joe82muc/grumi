/* Englisch 9R · Prüfungstraining · Mündliche Prüfung: The three parts
   (Überarbeitung der alten Übersichtsseite zu einem Training: Ablauf der drei Prüfungsteile kennenlernen, Redemittel zuordnen,
   den Topic-based talk an einer Mindmap üben, Tipps für den Prüfungstag sichern)
   Grundlage sind allein die Angaben der Lehrkraft zu den drei Teilen (Picture-based talk, Topic-based talk, Interpreting).
   Keine Punktzahlen, keine Gesamtdauer, keine Notenregeln; Zeiten stehen nur mit "about". Die genauen Regeln nennt die Lehrkraft.
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend vortragen), E9 2.3 Sprachmittlung, E9 4 (Kommunikationsstrategien).
   Texte: Mustervortrag "My town" (texte/pruefung/qa-my-town.js) – erfunden, keine echten Orte.
   Das Sprechen selbst kann das Gerät nicht bewerten: Die Kinder sprechen zu zweit oder halblaut für sich. */
D7Kit.seite({
  id: "qa-muendlich",
  titel: "Oral exam: The three parts",
  einleitung: "The oral exam has <b>three parts</b>: a <b>picture-based talk</b>, a <b>topic-based talk</b> and <b>interpreting</b>. In this module you learn what happens in each part, sort useful phrases, practise the topic-based talk with a <b>mind map</b> and collect tips for the exam day. The device cannot judge your speaking: <b>you</b> speak, and your partner listens.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know the three parts of the oral exam.", "🖼️ I describe a picture in a clear order.", "🧠 I choose three subtopics from a mind map and link them.", "🔁 I pass on a message in my own words.", "💪 I know what to do when a word is missing."],
  quiz: { profi: "Exam pro" },
  glossar: {
    mindmap: ["mind map", "Eine Mindmap hat ein Hauptthema in der Mitte. Um das Hauptthema stehen die Unterthemen."],
    subtopic: ["subtopic", "Ein Unterthema ist ein kleiner Teil des Hauptthemas, zum Beispiel „sports“ beim Thema „free time“."],
    foreground: ["foreground / background", "Der Vordergrund ist vorne im Bild, der Hintergrund ist hinten im Bild."],
    interpret: ["to interpret", "Beim Dolmetschen gibst du den Inhalt eines Gesprächs sinngemäß in der anderen Sprache weiter. Du übersetzt nicht Wort für Wort."],
    paraphrase: ["to describe a word", "Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „something you use to open a door“."]
  },
  stationen: [
    { kurz: "Overview", ober: "Station 1", titel: "The three parts", teile: [
      { art: "text", html: "<p class=\"lead\">The oral exam has <b>three parts</b>. In every part you speak English – and in Part 3 you also use German. <span class=\"de\">Hier lernst du den Ablauf kennen. Danach übst du.</span></p><p><b>Your teacher tells you the exact rules for your exam.</b> This module shows you how to prepare. <span class=\"de\">Die genauen Regeln nennt dir deine Lehrerin oder dein Lehrer.</span></p>" },
      { art: "paare", id: "teile", tag: "Match", titel: "Which part is which?", lead: "Find the pairs. <span class=\"de\">Verbinde den Prüfungsteil mit dem, was du tust.</span>",
        paare: [["Part 1: Picture-based talk", "You describe a picture and give your opinion."], ["Part 2: Topic-based talk", "You choose three subtopics from a mind map and talk."], ["Part 3: Interpreting", "You pass on a conversation between English and German."]] },
      { art: "merke", kopf: "THE THREE PARTS", html: "<ul><li><b>Part 1 · Picture-based talk:</b> Du bekommst ein Bild und hast etwa 30 Sekunden Denkzeit. Du sagst, was zu sehen ist, dann Einzelheiten, zum Schluss deine Meinung. Danach können Fragen zum Bild kommen.</li><li><b>Part 2 · Topic-based talk:</b> Du bekommst eine <button class=\"term\" data-t=\"mindmap\">Mindmap</button> und hast etwa 90 Sekunden Vorbereitungszeit. Du darfst Notizen machen. Du wählst drei <button class=\"term\" data-t=\"subtopic\">Unterthemen</button>, verknüpfst sie und sprichst möglichst frei.</li><li><b>Part 3 · Interpreting:</b> Du vermittelst zwischen Englisch und Deutsch in einer Alltagssituation. Du gibst den Inhalt sinngemäß weiter, nicht Wort für Wort.</li></ul>" },
      { art: "tf", id: "ablauf-tf", tag: "True or false?", titel: "What happens in the exam?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In Part 1 you get a picture and about 30 seconds to think.", true],
          ["In Part 2 you can make notes before you talk.", true],
          ["In Part 3 you translate every single word.", false],
          ["In Part 1 you only name things and never say your opinion.", false],
          ["In Part 2 you talk about all the subtopics on the mind map.", false]
        ] }
    ] },
    { kurz: "Part 1", ober: "Station 2", titel: "Part 1: Picture-based talk", teile: [
      { art: "text", html: "<p class=\"lead\">You get a picture and about 30 seconds to think. Then you talk in a <b>clear order</b>: first what you can see, then details, last your opinion. <span class=\"de\">Eine klare Reihenfolge ist besser als alles durcheinander.</span></p>" },
      { art: "ordnen", id: "bild-ablauf", tag: "Order", titel: "Describe a picture", lead: "Put the sentences in the right order. <span class=\"de\">So klingt eine gute Bildbeschreibung von vorne nach hinten (erfundenes Bild).</span>",
        schritte: ["In the picture I can see a family at a lake.", "In the foreground, a girl is feeding some ducks.", "In the background, there are trees, and a man is sitting on a bench on the left.", "In my opinion, they are having a nice day, because the sun is shining."] },
      { art: "sort", id: "bild-redemittel", tag: "Sort", titel: "Describe, guess or opinion?", lead: "Put each sentence into the right box. <span class=\"de\">Wohin gehört der Satz?</span>",
        buckets: ["describe", "guess", "opinion"],
        items: [{ t: "In the picture I can see two boys and a dog.", b: 0 }, { t: "In the foreground there is a bicycle.", b: 0 }, { t: "On the left, a woman is reading a book.", b: 0 },
                { t: "Maybe it is Sunday.", b: 1 }, { t: "They might be good friends.", b: 1 }, { t: "He seems to be tired.", b: 1 },
                { t: "In my opinion, it is a nice picture.", b: 2 }, { t: "I like the picture because everybody looks happy.", b: 2 }, { t: "I would like to be there, because it looks relaxed.", b: 2 }] },
      { art: "merke", kopf: "PARTNER PRACTICE", html: "<p>Practise Part 1 with a partner: <b>show a picture</b>, speak for <b>one minute</b>, then give <b>feedback</b>. Keep the order: <i>what I see – details – opinion</i>. After your talk, your partner can ask a question about the picture.</p><p>There is a training module with six pictures.</p>" }
    ] },
    { kurz: "Part 2", ober: "Station 3", titel: "Part 2: Topic-based talk", teile: [
      { art: "text", html: "<p class=\"lead\">You get a <button class=\"term\" data-t=\"mindmap\">mind map</button>: the main topic is in the middle, the subtopics are around it. You have about 90 seconds to prepare and you may make notes. Then you choose <b>three subtopics</b>, link them and talk as freely as you can. <span class=\"de\">Hier siehst du eine Beispiel-Mindmap.</span></p><div style=\"display:grid;grid-template-columns:repeat(3,1fr);gap:8px;max-width:460px;margin:14px auto;text-align:center;font-weight:600\"><div style=\"padding:12px 4px;border:2px solid #2a6fb0;border-radius:10px;background:rgba(42,111,176,.12);overflow-wrap:anywhere\">sports</div><div style=\"padding:12px 4px;border:2px solid #2a6fb0;border-radius:10px;background:rgba(42,111,176,.12);overflow-wrap:anywhere\">music</div><div style=\"padding:12px 4px;border:2px solid #2a6fb0;border-radius:10px;background:rgba(42,111,176,.12);overflow-wrap:anywhere\">friends</div><div style=\"grid-column:1 / -1;padding:16px 8px;border-radius:12px;background:#2a6fb0;color:#fff;font-size:1.25em\">free time</div><div style=\"padding:12px 4px;border:2px solid #2a6fb0;border-radius:10px;background:rgba(42,111,176,.12);overflow-wrap:anywhere\">clubs</div><div style=\"padding:12px 4px;border:2px solid #2a6fb0;border-radius:10px;background:rgba(42,111,176,.12);overflow-wrap:anywhere\">media</div><div style=\"padding:12px 4px;border:2px solid #2a6fb0;border-radius:10px;background:rgba(42,111,176,.12);overflow-wrap:anywhere\">money</div></div><p class=\"de\" style=\"text-align:center\">Mitte: Hauptthema · außen: sechs Unterthemen</p>" },
      { art: "mc", id: "unterthemen", tag: "Choose", titel: "Which three subtopics fit?", lead: "Look at the mind map. Tick the best answer. <span class=\"de\">Du spielst Fußball in einem Verein mit deinen Freunden. Welche drei Unterthemen kannst du gut verknüpfen?</span>",
        fragen: [
          { q: "You play football in a club with your friends. Which three subtopics fit best?", o: ["sports – clubs – friends", "music – media – money", "sports – music – money", "media – money – clubs"], a: 0,
            e: "Mit sports, clubs und friends kannst du eigene Beispiele aus einer Geschichte verknüpfen: Fußball, Verein, Freunde. Die anderen Gruppen passen nicht zu deiner Geschichte." }
        ] },
      { art: "ordnen", id: "vortrag-aufbau", tag: "Order", titel: "Build the talk", lead: "Put the parts of the talk in the right order. <span class=\"de\">Start – Hauptteil – Ende.</span>",
        schritte: ["Hello. My topic is free time. I will talk about sports, clubs and friends.", "First, sports. I play football twice a week. It keeps me fit.", "Second, clubs. I am in a football club. We train on Tuesdays.", "Third, friends. I meet my friends in the club. We also go to the cinema together.", "To sum up, free time is important to me. In my opinion, everybody needs a hobby."] },
      { art: "merke", kopf: "START – MAIN PART – END", html: "<ul><li><b>Start:</b> Thema nennen und die drei Unterthemen ankündigen.</li><li><b>Main part:</b> Zu jedem Unterthema zwei bis drei klare Aussagen. Gib eigene Beispiele.</li><li><b>End:</b> Fazit und eigene Meinung.</li></ul><p>Verknüpfe die Unterthemen: <i>This is also why …, And that is how I meet …</i></p>" },
      { art: "sort", id: "vortrag-redemittel", tag: "Sort", titel: "Which phrase for what?", lead: "Put each phrase into the right box. <span class=\"de\">Wofür brauchst du den Satz?</span>",
        buckets: ["start", "next point", "example", "ending"],
        items: [{ t: "My topic is …", b: 0 }, { t: "I will talk about three things.", b: 0 }, { t: "Today I want to talk about …", b: 0 },
                { t: "First, …", b: 1 }, { t: "Another point is …", b: 1 }, { t: "Third, let's talk about …", b: 1 },
                { t: "For example, …", b: 2 }, { t: "For instance, …", b: 2 }, { t: "Last week, for example, I …", b: 2 },
                { t: "To sum up, …", b: 3 }, { t: "In my opinion, …", b: 3 }, { t: "Thank you for listening.", b: 3 }] },
      { art: "offen", id: "notizzettel", tag: "Your note card", titel: "Notes for the mind map", lead: "Choose three subtopics from the mind map \"free time\". Write one key word for each. <span class=\"de\">Das ist dein Notizzettel in den etwa 90 Sekunden Vorbereitung – nur Stichwörter.</span>",
        fragen: [{ q: "Write three subtopics and one key word for each.", m: "sports: football. music: guitar. friends: cinema.", k: ["sports|sport|music|friends|friend|clubs|club|media|money", "football|guitar|cinema|play|meet|listen|watch|train|sing|buy|save|phone|film|game|games|team|hobby|app|club|friends|sports|music"], min: 12 }],
        tipp: "Write like this: sports: football. clubs: training on Tuesdays. friends: meet after school. Key words are enough." },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", titel: "A model talk", lead: "Listen to a student. The mind map has the main topic <b>my town</b>; the student chooses <b>three</b> subtopics. <span class=\"de\">Hör zu, wie der Vortrag aufgebaut ist: Start – Hauptteil – Ende.</span>", hoertext: "qa-my-town", fragen: [
        { art: "mc", id: "hoer-fragen", titel: "What do you hear?", fragen: [
          { q: "Which three subtopics does the student choose?", o: ["The park, the market and the buses.", "The park, the school and the cinema.", "The market, the library and the buses.", "The buses, the shops and the river."], a: 0,
            e: "At the start the student says: \"the park, the market and the buses\"." },
          { q: "What is the problem with the buses?", o: ["In the evening there is only one bus every hour.", "They are very expensive.", "They are always full.", "They do not stop in the town."], a: 0,
            e: "\"They are cheap, but they do not come very often.\"" },
          { q: "How does the student end the talk?", o: ["With a summary and an opinion: the town needs more buses.", "With a question for the teacher.", "With a joke about the market.", "With no ending at all."], a: 0,
            e: "\"To sum up … In my opinion, the town needs more buses.\"" }
        ] },
        { art: "luecke", id: "hoer-luecke", titel: "Complete the facts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [["The market is open every ", { g: "Saturday" }, "."], ["The student's aunt sells ", { g: "honey" }, " at the market."]], extra: ["Sunday", "bread"] }
      ] },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Work with a partner. The device cannot listen to you or give you points. <span class=\"de\">Du und dein Partner übt zusammen.</span></p><p class=\"de\"><b>Ablauf:</b> 1) A bekommt die Mindmap „free time“ (oben) und macht etwa 90 Sekunden lang Notizen. 2) A wählt drei Unterthemen und spricht, so frei wie möglich. 3) B hört zu und füllt die Rückmeldekarte aus. 4) Tauscht die Rollen. Kein Partner da? Sprich halblaut für dich.</p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Speaker · checklist</h4><ul><li>I named the topic and announced three subtopics.</li><li>I said two or three clear things about each subtopic.</li><li>I gave my own examples.</li><li>I ended with a summary and my opinion.</li></ul></div><div class=\"sprech-karte b\"><h4>Listener · feedback</h4><ul><li><b>I liked:</b> …</li><li><b>One tip:</b> …</li><li><b>I heard these subtopics:</b> …</li><li><b>Did the speaker link them?</b> yes / a little / not yet</li></ul></div></div>" }
    ] },
    { kurz: "Part 3", ober: "Station 4", titel: "Part 3: Interpreting", teile: [
      { art: "text", html: "<p class=\"lead\">In Part 3 you <button class=\"term\" data-t=\"interpret\">interpret</button> in an everyday situation: two people speak different languages, and <b>you</b> help them. The parts of the conversation are read out one after the other. You pass on the meaning, <b>not word for word</b>.</p><p>There are training modules for interpreting.</p>" },
      { art: "tf", id: "dolmetschen-tf", tag: "True or false?", titel: "Rules for interpreting", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["You listen carefully and write down key words.", true],
          ["You pass on the meaning in your own words.", true],
          ["If a word is missing, you stop and say nothing.", false],
          ["If you are not sure, you ask politely.", true],
          ["You must translate every word.", false]
        ] },
      { art: "luecke", id: "nachfragen", tag: "Gap text", titel: "Ask and describe", lead: "Complete the phrases. <span class=\"de\">Nachfragen und umschreiben. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Sorry, could you say that ", { g: "again" }, ", please?"],
          ["Excuse me, what does that ", { g: "mean" }, "?"],
          ["I don't know the word. It is a place ", { g: "where" }, " trains stop."],
          ["Sorry, I didn't ", { g: "understand" }, " that."]
        ], extra: ["understood", "meaning"] },
      { art: "mc", id: "sinngemaess", tag: "Meaning, not words", titel: "The best sentence", lead: "Tick the best answer. <span class=\"de\">Sinngemäß statt Wort für Wort. Du bist am Fahrkartenschalter.</span>",
        fragen: [
          { q: "The ticket seller says: \"The next train to the airport leaves from platform four in ten minutes, but you have to change trains at the next station.\" What do you tell the German tourist?", o: ["Der nächste Zug zum Flughafen fährt in zehn Minuten von Gleis vier. Unterwegs müssen Sie einmal umsteigen.", "Der nächste Zug zum Flughafen verlässt von Plattform vier in zehn Minuten, aber Sie haben zu ändern Züge an der nächsten Station.", "Es gibt einen Zug.", "Der Zug fährt in zehn Minuten von Gleis vier. Sie müssen nicht umsteigen."], a: 0,
            e: "Gut: Die wichtigen Angaben stimmen (Flughafen, zehn Minuten, Gleis vier, umsteigen) und der Satz klingt natürlich. Wort für Wort klingt falsch, „Es gibt einen Zug“ lässt zu viel weg und die letzte Antwort ist falsch." },
          { q: "The tourist says: \"Ich möchte zwei Fahrkarten für morgen früh, aber nur hin, nicht zurück.\" What do you tell the seller?", o: ["She would like two single tickets for tomorrow morning.", "I want two driving cards for tomorrow early but only there not back.", "She wants two return tickets for tomorrow morning.", "She wants tickets."], a: 0,
            e: "\"Single ticket\" heißt: nur hin. Die richtigen Angaben sind zwei Fahrkarten, morgen früh, nur hin. \"Return\" wäre hin und zurück." }
        ] }
    ] },
    { kurz: "Exam day", ober: "Station 5", titel: "Tips for the exam day", teile: [
      { art: "sort", id: "tipps-sort", tag: "Sort", titel: "Helps or does not help?", lead: "Put each tip into the right box. <span class=\"de\">Was hilft dir in der Prüfung?</span>",
        buckets: ["helps", "does not help"],
        items: [{ t: "Listen carefully.", b: 0 }, { t: "Write down key words.", b: 0 }, { t: "Say it in other words when a word is missing.", b: 0 }, { t: "Ask politely if you do not understand.", b: 0 }, { t: "Practise with a partner.", b: 0 },
                { t: "Learn a long text by heart.", b: 1 }, { t: "Stop talking when a word is missing.", b: 1 }, { t: "Speak very fast so you finish quickly.", b: 1 }, { t: "Give up after a mistake.", b: 1 }] },
      { art: "mc", id: "pruefungstag-mc", tag: "What do you do?", titel: "In the exam", lead: "Tick the best answer.",
        fragen: [
          { q: "A word is missing. What do you do?", o: ["I describe the word with other words and go on.", "I stop and wait.", "I say the word in German and stop.", "I start the talk again."], a: 0,
            e: "Umschreiben hält das Gespräch am Laufen, zum Beispiel \"a thing you use to open a bottle\"." },
          { q: "You do not understand a question. What do you do?", o: ["I ask politely: \"Sorry, could you say that again, please?\"", "I say nothing.", "I answer anything.", "I laugh and look away."], a: 0,
            e: "Höfliches Nachfragen ist erlaubt und zeigt, dass du Englisch einsetzt." },
          { q: "You make a slip of the tongue. What do you do?", o: ["I correct myself quickly and go on.", "I stop talking for the rest of the exam.", "I say sorry five times.", "I start again from the beginning."], a: 0,
            e: "Kurz verbessern, zum Beispiel \"Sorry, I mean …\", und weitersprechen." }
        ] },
      { art: "offen", id: "tipp-satz", m7: true, tag: "Challenge", titel: "Your own exam sentences", lead: "Write two sentences you can say in the exam when you do not understand a question. <span class=\"de\">Freiwillig: Schreibe zwei höfliche Sätze.</span>",
        fragen: [{ q: "Write two polite sentences for the exam.", m: "Sorry, could you say that again, please? I am not sure I understand the question.", k: ["sorry|excuse|pardon|please", "again|repeat|understand|mean|slowly"], min: 12 }],
        tipp: "Start with Sorry, … or Excuse me, … and use please." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "The three parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part 1 you first say what you can ", { g: "see" }, "."],
          ["In Part 2 you get about ", { g: "90" }, " seconds to prepare."],
          ["In Part 2 you choose ", { g: "three" }, " subtopics."],
          ["In Part 3 you pass on the ", { g: "meaning" }, " and not every word."]
        ], extra: ["30", "partner"] }
    ] }
  ],
  weiter: { text: "Well done! You know the three parts of the oral exam. Practise with a partner as often as you can – and remember: your teacher tells you the exact rules." }
});
