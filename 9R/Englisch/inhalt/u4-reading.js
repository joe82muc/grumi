/* Englisch 9R · Unit 4 News from New Zealand · Reading: Three generations, one story
   (eine Erzählung verstehen: Thema und Verlauf erfassen, Einzelheiten finden und mit Zeilen belegen, zwischen den Zeilen
   lesen, Sprache im Text – going to (Pläne), simple past (Rückblick), Passiv nur verstehen, die Grammatik der Unit 4)
   LehrplanPLUS E9 1.1 Leseverstehen (längere Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit inhaltlichen und
   sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Neuseeland: Generationen, Berufswahl).
   Text: „Anahera and the apple farm“ (texte/u4/reading-anahera-farm.js) – Personen und Ort sind erfunden. */
D7Kit.seite({
  id: "u4-reading",
  titel: "Reading: Three generations, one story",
  einleitung: "A girl from New Zealand has a plan for her future – and her grandad has a different one. You read what happens at the dinner table and afterwards. First you find out what it is about, then you look for details – and you show <b>where</b> in the text you found them.",
  zeit: "etwa 40 Minuten",
  ziele: ["📖 I understand a story about a family.", "🔎 I find details and name the lines.", "💭 I read between the lines.", "🧩 I spot going to, the simple past and the passive in a real text."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einem Namen oder einer Zahl."],
    apprenticeship: ["apprenticeship", "Eine Ausbildung ist eine Lehre in einem Beruf: Man arbeitet in einem Betrieb und lernt dabei den Beruf."],
    solar: ["solar panel", "Ein Solarmodul wandelt Sonnenlicht in Strom um und wird oft auf ein Dach gebaut."],
    passive: ["passive", "Im Passiv steht die Handlung im Vordergrund und nicht die Person: „The shed was built.“ heißt „Der Schuppen wurde gebaut.“ Mit „by“ kann man sagen, wer es getan hat."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u4-read-anahera",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Who decides what you do after school – you, your parents, or everybody together? In this module you read a story by <b>Anahera</b>, a girl who lives with her family on an apple farm in New Zealand. She has a plan, and her grandad is not happy about it.</p><p>Anahera, her family and the place Kauri Bay are invented. The story could happen in many families.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["orchard", "Obstgarten"], ["apprenticeship", "Ausbildung"], ["electrician", "Elektriker/in"], ["solar panel", "Solarmodul"], ["take over", "übernehmen"], ["electricity bill", "Stromrechnung"], ["shed", "Schuppen"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a name or a number.</p><p>You do <b>not</b> need to know every word.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the story once. Don't stop at words you don't know. <span class=\"de\">Lies die Geschichte einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u4-read-anahera" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the story mainly about?", o: ["A girl and her family disagree about her future.", "A family sells its farm.", "A girl wins a prize at school.", "A grandad learns to use a computer."], a: 0,
            e: "Anahera has a plan for her future, and Grandad hopes for something else. The family talks about it, and in the end they find a good solution." },
          { q: "Where does the family live?", o: ["On an apple farm.", "In a big city flat.", "In a hotel.", "On a sheep farm."], a: 0,
            e: "The first sentence says that they live on an apple farm near Kauri Bay." },
          { q: "How does the story end?", o: ["Everybody is happy with the new plan.", "Anahera leaves home for ever.", "Grandad sells the apple trees.", "Dad is angry with Nana."], a: 0,
            e: "Grandad smiles and accepts the plan. Anahera will work in town and help on the farm at the weekend." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Anahera told her family about her plan.", "Grandad walked out of the room.", "Nana Huia told Anahera about Grandad's past.", "Dad took Anahera to the shed.", "Grandad smiled and agreed."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Suche die Stelle im Text, bevor du antwortest. Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Anahera is sixteen years old.", true],
          ["Grandad shouted angrily at Anahera at dinner.", false],
          ["When Grandad was young, he worked in a town for two years.", true],
          ["Anahera knew Grandad's story before Nana told her.", false],
          ["The lights in the shed worked very well.", false],
          ["Anahera is going to work on the farm every day.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht. In einer Prüfung schreibst du dann zum Beispiel: (ll. 9–10).</span>", lesetext: "u4-read-anahera",
        fragen: [
          { q: "Who built the old wooden shed?", zeilen: [5, 5], e: "The shed was built by Grandad himself when he was young.", tipp: "Look at the first paragraph." },
          { q: "What is Anahera going to do after school?", zeilen: [9, 10], e: "She is going to start an apprenticeship and one day build solar panels.", tipp: "Look for the words she says at dinner." },
          { q: "What did Grandad hope for the farm?", zeilen: [13, 13], e: "He thought that Anahera was going to take over the farm.", tipp: "Look at what Grandad says quietly." },
          { q: "What did Grandad do when he was young?", zeilen: [18, 20], e: "He left the farm, worked in a town for two years and repaired machines.", tipp: "Nana Huia tells the story." },
          { q: "What is Grandad going to teach Anahera?", zeilen: [33, 34], e: "He is going to teach her how to look after the old trees.", tipp: "Look at the last paragraph." }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Notes about the family", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Grandad's first name: ", { g: "Pita" }],
          ["Nana's first name: ", { g: "Huia" }],
          ["Anahera's father: ", { g: "Mikaere" }],
          ["After school Anahera wants to start an ", { g: "apprenticeship" }, "."],
          ["Grandad lived in a town for ", { g: "two" }, " years when he was young."]
        ], extra: ["Anahera", "three"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence. <span class=\"de\">Manchmal musst du aus dem Text schließen.</span>",
        fragen: [
          { q: "Why does Grandad walk out of the room?", o: ["He is hurt because he hoped that she would take over the farm.", "He is tired and wants to sleep.", "He does not like the dinner.", "He wants to call Anahera's teacher."], a: 0,
            e: "He asked who was going to look after the orchard. So he had hoped that Anahera would take over, and her plan made him sad." },
          { q: "Why does Nana Huia tell the story of Grandad's past?", o: ["She wants to show that Grandad understands a wish to try something new.", "She wants Anahera to move to a town.", "She wants to change the subject.", "She is angry with Grandad."], a: 0,
            e: "Grandad left the farm too, and then he came home. Nana wants Anahera to see that he was young once and wanted something different, just like her." },
          { q: "How does Dad's idea help to solve the problem?", o: ["Anahera's new skills can help the farm.", "The farm gets a new shed.", "Anahera does not go to school any more.", "Grandad stops working."], a: 0,
            e: "The farm pays a lot for electricity. With solar panels on the roof it will pay less, and an electrician can build them. So Anahera's plan and the farm fit together." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why does Grandad smile in the end?", m: "Grandad understands that Anahera's plan can help the farm. Solar panels make the electricity cheaper, and she will still help at the weekend.", k: ["solar|panel|electric|power|bill|cheaper|roof", "help|farm|weekend|stay|home|understand"], min: 8 }],
        tipp: "Think about Dad's idea and about what Anahera is going to do at the weekend. Start like this: Grandad smiles because …" },
      { art: "offen", id: "eigene-saetze", m7: true, tag: "Your life", titel: "Your plans", lead: "Write two sentences in English about your own plans. Use <b>going to</b>. <span class=\"de\">Zum Beispiel: After school I am going to … , and my parents are going to …</span>",
        fragen: [{ q: "What are you going to do after school? What is somebody in your family going to do? Write two sentences.", m: "After school I am going to start an apprenticeship. My brother is going to finish his exams next year.", k: ["going to", "am|is|are"], min: 10 }],
        tipp: "Think of one plan for you and one plan for a person in your family. Start with: After school I am going to …" }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 4 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The story uses three things from Unit 4:</p><ul><li><b>going to</b> (<i>am / is / are + going to + verb</i>) – plans and intentions: I <u>am going to</u> be an electrician. He <u>is going to</u> teach me.</li><li><b>simple past</b> – what happened: Nana <u>told</u> me about Grandad. He <u>left</u> the farm and <u>worked</u> in a town.</li><li><b>passive</b> (<i>was / were / is / are + past participle</i>) – the action is important, not the person. You only need to <b>understand</b> it: The shed <u>was built</u> by Grandad = Grandad built the shed. Our apples <u>are sold</u> in shops = People sell our apples.</li></ul>" },
      { art: "sort", id: "saetze", tag: "Sort", titel: "Which form is it?", lead: "Put the sentences into the right box.",
        buckets: ["going to (plan)", "Simple past (what happened)", "Passive (understand it)"],
        items: [{ t: "I am going to start an apprenticeship.", b: 0 }, { t: "Dad is going to put solar panels on the roof.", b: 0 }, { t: "We are going to visit Nana on Sunday.", b: 0 },
                { t: "Grandad walked out without a word.", b: 1 }, { t: "My father took me to the shed.", b: 1 }, { t: "Nana put her hand on my arm.", b: 1 },
                { t: "The first trees were planted a long time ago.", b: 2 }, { t: "The wooden shed was built by Grandad.", b: 2 }, { t: "Our apples are sold in shops.", b: 2 }] },
      { art: "markieren", id: "pass-satz", tag: "Mark", titel: "Find the passive", finde: "the passive form", toleranz: 0,
        satz: "The first trees [[were planted]] by Grandad's father.",
        e: "were planted is were + past participle. It is the passive: the trees are the important thing, and by Grandad's father says who did it." },
      { art: "markieren", id: "gt-satz", tag: "Mark", titel: "Find the plan", finde: "the going to form", toleranz: 0,
        satz: "During the week I [[am going to work]] for an electrician in town.",
        e: "am going to work is am + going to + verb. It says what Anahera has planned." },
      { art: "mc", id: "passiv-verstehen", tag: "Understand the passive", titel: "What does it mean?", lead: "Tick the sentence with the same meaning.",
        fragen: [
          { q: "The old wooden shed was built by Grandad.", o: ["Grandad built the old wooden shed.", "The shed built Grandad.", "Grandad is going to build a shed.", "Somebody sold the shed."], a: 0,
            e: "In a passive sentence with by, the person after by is the one who did the action." },
          { q: "Our apples are sold in shops all over the region.", o: ["People sell our apples in shops all over the region.", "We buy our apples in shops.", "Our apples were sold last year.", "Nobody sells our apples."], a: 0,
            e: "The passive with are sold means that somebody sells the apples. It says what happens, not who does it." }
        ] },
      { art: "luecke", id: "grammatik-luecke", tag: "Gap text", titel: "going to, simple past and passive", lead: "Complete the sentences. <span class=\"de\">Achtung: I = am going to, he / she = is going to. Das Passiv braucht was / were + Partizip.</span>",
        absaetze: [
          ["After school I ", { g: "am going to" }, " start an apprenticeship."],
          ["Anahera ", { g: "is going to" }, " learn how to put solar panels on the roof."],
          ["Grandad ", { g: "worked" }, " in a town for two years."],
          ["The old wooden shed ", { g: "was built" }, " by Grandad."]
        ], extra: ["are going to", "work"] },
      { art: "offen", id: "passiv-bilden", m7: true, tag: "Challenge", titel: "Make a passive sentence", lead: "Change the sentence. <span class=\"de\">Freiwillig: Das Passiv selbst zu bilden ist eine Zusatzaufgabe.</span> Nana makes the apple cake. → The apple cake …",
        fragen: [{ q: "Complete: The apple cake … (use the passive with by).", m: "The apple cake is made by Nana.", k: ["is made", "by nana|by Nana"], min: 10 }],
        tipp: "Passive: is / are + past participle. Who does it? Use by." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The story in five sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Anahera tells her family that she is going to be an ", { g: "electrician" }, "."],
          ["Grandad had hoped that she would take over the ", { g: "farm" }, "."],
          ["Nana says that Grandad ", { g: "left" }, " the farm when he was young, too."],
          ["Dad has an idea: they can put ", { g: "solar" }, " panels on the roof."],
          ["In the end Grandad ", { g: "smiles" }, " and agrees to the plan."]
        ], extra: ["cries", "sells"] }
    ] }
  ],
  weiter: { text: "Well done! You can follow a story, find details and say where they are. Keep reading and keep asking: How do different generations see the future – and how can they listen to each other?" }
});
