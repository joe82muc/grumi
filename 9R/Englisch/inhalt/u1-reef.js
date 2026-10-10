/* Englisch 9R · Unit 1 Around Australia · Land und Leute: The Great Barrier Reef – a wonder in danger
   (Sachtext verstehen: Thema erfassen, Einzelheiten mit Zeilen belegen, Ursache – Folge – Hilfe erkennen, if-Sätze Typ I
   im Thema anwenden, einen Kurzvortrag von einer Minute vorbereiten und eine eigene Fassung schreiben)
   LehrplanPLUS E9 1.1 Leseverstehen (längere sachliche Texte), E9 1.2 Sprechen (zusammenhängend vortragen, Meinung sagen),
   E9 2 (Redemittel), E9 3, E9 5 (Australien: Natur, Umwelt, nachhaltiges Handeln).
   Text: „The Great Barrier Reef: A wonder in danger“ (texte/u1/reef-wonder-in-danger.js) – Schule, Reporter und Forscherin
   sind erfunden. Der Mustervortrag handelt von einem erfundenen Park, nicht vom Riff. Das Sprechen selbst bewertet das
   Gerät nicht; die KI gibt nur Rückmeldung zur geschriebenen Fassung. */
D7Kit.seite({
  id: "u1-reef",
  titel: "The Great Barrier Reef: A wonder in danger",
  einleitung: "The biggest coral reef in the world is in trouble. You read a magazine report from a school news team, find out what the problems are and what helps – and then you prepare a <b>one-minute presentation</b> and say how you feel.",
  zeit: "etwa 40 Minuten",
  ziele: ["🐠 I understand a text about the Great Barrier Reef.", "🔎 I find details and name the lines.", "🌊 I see cause, result and help.", "🧩 I use if-sentences (type I) about the reef.", "🎤 I prepare a one-minute presentation and say how I feel."],
  quiz: { profi: "Reef expert" },
  glossar: {
    algae: ["algae", "Algen. Winzige Algen leben in den Korallen und geben ihnen Nahrung und Farbe."],
    bleaching: ["bleaching", "Korallenbleiche. Wenn das Wasser zu lange zu warm ist, verlieren die Korallen ihre Algen und werden weiß."],
    cyclone: ["cyclone", "Wirbelsturm. In Australien heißen schwere tropische Stürme cyclones."],
    ranger: ["ranger", "Parkaufseher oder Parkaufseherin. Rangers passen auf einen Nationalpark oder Meerespark auf."],
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, Anfang der Absätze."],
    presentation: ["presentation", "Vortrag. Du sprichst eine Minute frei über ein Thema und liest nichts ab."]
  },
  haupttext: "u1-reef-text",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">The Great Barrier Reef is home to thousands of animals – but it has a lot of problems. In this module you read a report, learn the facts and then give your own short presentation.</p><p>The school, the reporter and the scientist in the text are invented. The reef and its problems are real.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["reef", "Riff"], ["coral", "Koralle"], ["algae", "Algen"], ["bleaching", "Korallenbleiche"], ["cyclone", "Wirbelsturm"], ["to recover", "sich erholen"], ["ranger", "Parkaufseher"]] },
      { art: "merke", kopf: "READING TIP", html: "<p>Before you read, look at the <b>title</b> and the <b>first words of each paragraph</b>. In this text they work like small headings: they tell you what comes next. This is called <b><button class=\"term\" data-t=\"skimming\">skimming</button></b>.</p><p>You do <b>not</b> need to know every word.</p>" },
      { art: "mc", id: "vorwissen", tag: "What do you know?", titel: "Your ideas", lead: "Tick the correct answer.",
        fragen: [
          { q: "Where is the Great Barrier Reef?", o: ["Off the north-east coast of Australia", "Off the coast of New Zealand", "In the Mediterranean Sea", "Near the coast of Brazil"], a: 0,
            e: "The reef lies in the sea off the coast of Queensland in the north-east of Australia. You check this in the text." }
        ] }
    ] },
    { kurz: "Read", ober: "First and second reading", titel: "Read and find the facts", teile: [
      { art: "text", html: "<p class=\"lead\">Read the report once. Don't stop at words you don't know. <span class=\"de\">Lies den Beitrag einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u1-reef-text" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the report mainly about?", o: ["The reef, its problems and what helps", "A school trip to Queensland", "How to become a diver", "A holiday guide for tourists"], a: 0,
            e: "The report talks about the reef, the dangers for the corals and the help they get." },
          { q: "Who is Dr Ivy Hollins?", o: ["A scientist who studies the reef", "A student on the news team", "A ranger who sells tickets", "A teacher at Saltwater High School"], a: 0,
            e: "She studies the reef and visited the school. The reporter is Jarrah Beck." }
        ] },
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Suche die Stelle im Text, bevor du antwortest. Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The reef is about 2,300 kilometres long.", true],
          ["Corals are plants.", false],
          ["Bleached corals can never recover.", false],
          ["Fishing is not allowed in the whole park.", false],
          ["Jarrah Beck is a scientist.", false],
          ["About two million people visit the reef every year.", true]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht. In einer Prüfung schreibst du dann zum Beispiel: (ll. 5–6).</span>", lesetext: "u1-reef-text",
        fragen: [
          { q: "Where does the reef lie?", zeilen: [5, 6], e: "It lies off the coast of Queensland, in the north-east of Australia.", tipp: "Look at the beginning of the second paragraph." },
          { q: "What happens to the corals if the water stays too warm for too long?", zeilen: [16, 18], e: "They lose their algae, turn white and can die.", tipp: "Look for the word algae." },
          { q: "Which animal eats corals?", zeilen: [23, 24], e: "Crown-of-thorns starfish eat corals.", tipp: "Look at the fourth paragraph." },
          { q: "Who has lived with the reef for tens of thousands of years?", zeilen: [31, 33], e: "Aboriginal and Torres Strait Islander peoples.", tipp: "Look at the last paragraph: scan for the word years." }
        ] },
      { art: "luecke", id: "steckbrief", tag: "Fact file", titel: "The Great Barrier Reef: fact file", lead: "Complete the fact file with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Place: off the coast of ", { g: "Queensland" }, ", Australia"],
          ["Length: about ", { g: "2,300" }, " kilometres"],
          ["Single reefs: almost ", { g: "3,000" }, ""],
          ["World Heritage Site since: ", { g: "1981" }, ""],
          ["Animals: more than 1,500 kinds of ", { g: "fish" }, ""]
        ], extra: ["1975", "900"] }
    ] },
    { kurz: "Problems", ober: "Problems and help", titel: "Cause, result, help", teile: [
      { art: "sort", id: "ursache-folge-hilfe", tag: "Sort", titel: "Cause, result or help?", lead: "Put each sentence into the right box. <span class=\"de\">Was ist die Ursache, was die Folge, was hilft?</span>",
        buckets: ["Cause", "Result", "What helps"],
        items: [{ t: "Climate change makes the sea warmer.", b: 0 }, { t: "Dirty water flows from farms into the sea.", b: 0 },
                { t: "The corals lose their algae.", b: 1 }, { t: "The corals turn white.", b: 1 }, { t: "Bleached corals can die.", b: 1 },
                { t: "Rangers and divers take starfish away.", b: 2 }, { t: "Scientists grow young corals.", b: 2 }, { t: "People save energy and use less plastic.", b: 2 }, { t: "Fishing is not allowed in some zones.", b: 2 }] },
      { art: "ordnen", id: "bleichen", tag: "Order", titel: "How coral bleaching happens", lead: "Put the sentences in the right order. <span class=\"de\">So läuft eine Korallenbleiche ab.</span>",
        schritte: ["The sea gets warmer because of climate change.", "The water stays too warm for too long.", "The corals lose their tiny algae.", "The corals turn white. This is called bleaching.", "If the water cools down in time, the corals can recover."] },
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence. <span class=\"de\">Manchmal musst du aus dem Text schließen.</span>",
        fragen: [
          { q: "Dr Hollins says: \"The reef is strong, but it needs time to recover.\" What does she mean?", o: ["The reef can get better, but only if the troubles don't come again and again.", "The reef is dead and cannot get better.", "The reef is so strong that nothing can hurt it.", "People must stay away from the reef for ever."], a: 0,
            e: "Strong does not mean safe. After one trouble the reef can recover, but it needs time." },
          { q: "Why do people call the reef \"a city under the sea\"?", o: ["Because so many animals live together there", "Because people live in houses under water", "Because the reef has streets and cars", "Because a big city is next to it"], a: 0,
            e: "Thousands of animals live on the reef, like the people in a city." }
        ] },
      { art: "mc", id: "schluss-challenge", m7: true, tag: "Challenge", titel: "Why save energy?", lead: "Think about the cause of the warm water. <span class=\"de\">Freiwillig: Denk an die Ursache des warmen Wassers.</span>",
        fragen: [
          { q: "Why does Dr Hollins ask the students to save energy?", o: ["Saving energy helps against climate change, and climate change makes the sea warmer.", "Corals need electric light to grow.", "Rangers have no energy for diving.", "Dirty water has too much energy."], a: 0,
            e: "Climate change is the reason for the warm water. If people use less energy, they help to slow it down." }
        ] }
    ] },
    { kurz: "Language", ober: "Grammar in the topic", titel: "If-sentences about the reef", teile: [
      { art: "merke", kopf: "IF-SENTENCES (TYPE I)", html: "<p>What will happen <b>if</b> something happens? Use <b>simple present</b> after <i>if</i> and <b>will + verb</b> in the other part:</p><ul><li>If the water <u>stays</u> too warm, the corals <u>will die</u>.</li><li>The corals <u>will die</u> if the water <u>stays</u> too warm.</li><li>If you <u>visit</u> the reef, <u>don't touch</u> the corals.</li></ul><p>Not: <s>If the water will stay too warm …</s> – after <i>if</i> there is no <i>will</i>.</p>" },
      { art: "luecke", id: "if-luecke", tag: "Gap text", titel: "What will happen if …?", lead: "Complete the sentences. <span class=\"de\">Achtung: Nach if steht kein will. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["If the water ", { g: "stays" }, " too warm, the corals ", { g: "will die" }, "."],
          ["If we ", { g: "save" }, " energy, we ", { g: "will help" }, " the reef."],
          ["If the water ", { g: "cools down" }, " in time, the corals ", { g: "will recover" }, "."]
        ], extra: ["will stay", "helped"] },
      { art: "mc", id: "if-fehler", tag: "Typical mistakes", titel: "Spot the right sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["If the water gets warmer, the corals will die.", "If the water will get warmer, the corals will die.", "If the water gets warmer, the corals die will.", "If the water got warmer, the corals will die."], a: 0,
            e: "After if we use the simple present (gets), not will." },
          { q: "Which sentence is correct?", o: ["If we use less plastic, the sea will be cleaner.", "If we will use less plastic, the sea will be cleaner.", "If we use less plastic, the sea cleaner will be.", "If we used less plastic, the sea will be cleaner."], a: 0,
            e: "Simple present after if, will + verb in the other part, and the verb comes before the adjective." },
          { q: "Which sentence is correct?", o: ["If you visit the reef, don't touch the corals.", "If you will visit the reef, don't touch the corals.", "If you visited the reef, don't touch the corals.", "If visit you the reef, don't touch the corals."], a: 0,
            e: "In the other part there can also be a request. After if the verb is in the simple present." }
        ] },
      { art: "offen", id: "eigene-if-saetze", tag: "Your sentences", titel: "Write two if-sentences", lead: "Write two if-sentences about the reef. <span class=\"de\">Nach if kein will! Zum Beispiel: If … , … will …</span>",
        fragen: [{ q: "Write two if-sentences about the reef and its problems.", m: "If the sea gets too warm, the corals will turn white. If we save energy, we will help the reef.", k: ["if", "will", "coral|corals|reef|sea|water|energy|plastic|starfish"], min: 12 }],
        tipp: "Think of warm water, plastic or energy. Start with: If the sea … / If we …" }
    ] },
    { kurz: "Presentation", ober: "Your one-minute presentation", titel: "Prepare your talk", teile: [
      { art: "text", html: "<p class=\"lead\">Now it's your turn. You give a <b>one-minute <button class=\"term\" data-t=\"presentation\">presentation</button></b>: You tell your class about the reef, say what is going wrong and what helps – and what you think and <b>feel</b> about it.</p>" },
      { art: "merke", kopf: "YOUR TALK IN FIVE STEPS", html: "<p>A short presentation has five steps:</p><div class=\"phrasen\"><span>1 Start: Hello, everybody. My topic is …</span><span>2 Facts: The reef is … / It lies … / Many animals live …</span><span>3 Problems: One problem is … / Another problem is … / If …, …</span><span>4 My feeling: I feel sad / worried / angry because … / I hope that …</span><span>5 End: Thank you for listening.</span></div>" },
      { art: "text", html: "<h3>Your talk card</h3><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card · The Great Barrier Reef</h4><ul><li><b>Start:</b> Hello – my topic</li><li><b>Facts:</b> Queensland · biggest coral reef system · fish, turtles, dolphins</li><li><b>Problems:</b> warm water – bleaching · starfish · dirty water · cyclones · plastic</li><li><b>Help:</b> rangers, divers, scientists · fishing zones · save energy</li><li><b>My feeling:</b> How do you feel? Why?</li><li><b>End:</b> Thank you</li></ul></div></div><p class=\"de\">Die Karte gibt nur Stichwörter vor. Du sprichst in ganzen Sätzen – du liest nichts ab.</p>" },
      { art: "ordnen", id: "mustervortrag", tag: "Order", titel: "A model presentation", lead: "This talk is about another place. Put the sentences in the right order. <span class=\"de\">Ein Mustervortrag über einen erfundenen Park – vom Gruß bis zum Schluss.</span>",
        schritte: ["Hello, everybody. My topic is Ironbark Hills National Park.", "It is a big park in the south of Australia with old forests and a lake.", "Many birds and kangaroos live there.", "One problem is that visitors leave rubbish in the park.", "If the rubbish stays in the forest, the animals will get sick.", "I feel sad and a bit angry about this, because the park is beautiful.", "Thank you for listening."] },
      { art: "schreiben", id: "vortrag", tag: "Writing trainer", titel: "Write your one-minute presentation", min: 60,
        auftrag: "<p>Write your <b>one-minute talk</b>: What is the Great Barrier Reef? What is going wrong there? What helps? And what do <b>you</b> think and feel about it?</p><p class=\"de\">Schreibe deinen Vortrag in ganzen Sätzen: Start, ein paar Fakten, die Probleme, deine Meinung und ein Schluss. Mit der Karte als Hilfe – nicht aus dem Text abschreiben.</p>",
        starter: ["Hello, everybody. My topic is …", "The Great Barrier Reef is …", "One problem is …", "If the sea …, the corals …", "I feel … because …", "Thank you for listening."],
        kriterien: ["Der Vortrag hat einen Anfang und einen Schluss.", "Er nennt mindestens zwei Fakten über das Riff.", "Er nennt mindestens zwei Probleme.", "Er sagt, wie du dich fühlst, und begründet es.", "Er ist in eigenen Worten geschrieben, nicht aus dem Text abgeschrieben."] },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Give your presentation. Use a stopwatch: <b>one minute</b>. Look at your card, but don't read your text. <span class=\"de\">Sprich frei, am besten vor einer Partnerin oder einem Partner. Wenn du Fotos zeigst, sag, woher sie sind.</span></p>" },
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to present well", lead: "True or false? <span class=\"de\">Aussagen über einen guten Vortrag.</span>",
        aussagen: [
          ["In a presentation you should read your whole text out loud.", false],
          ["You can look at key words on your card.", true],
          ["It is good to say how you feel and why.", true],
          ["If you show photos, you say where they are from.", true],
          ["A short presentation needs no beginning and no end.", false]
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Corals are ", { g: "animals" }, ", and tiny algae live inside them."],
          ["If the water stays too warm, the corals lose their algae and turn ", { g: "white" }, "."],
          ["Besides warm water, crown-of-thorns ", { g: "starfish" }, " and dirty water are dangers."],
          ["Rangers, divers and scientists help, and everybody can save ", { g: "energy" }, "."],
          ["At the end of your presentation, say how you ", { g: "feel" }, " about the problems."]
        ], extra: ["plants", "cool"] }
    ] }
  ],
  weiter: { text: "Well done! You can read a report about a place, find the facts and give a short presentation. Now speak up for the reef!" }
});
