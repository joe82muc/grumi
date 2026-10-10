/* Englisch 9R · Unit 2 Exploring India · Reading: Small ideas, big change
   (einen Text über eine Idee für die Umwelt verstehen: Thema erfassen, Einzelheiten finden und mit Zeilen belegen, zwischen
   den Zeilen lesen, Sprache im Text – simple present und word order, die Grammatik der Unit)
   LehrplanPLUS E9 1.1 Leseverstehen (längere sachliche Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit
   inhaltlichen und sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Indien:
   Alltag, nachhaltiges Handeln).
   Text: „The Bag Box“ (texte/u2/reading-bag-box.js) – Stadt, Projekt und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-reading",
  titel: "Reading: Small ideas, big change",
  einleitung: "Two students, one blue box and a lot of old shirts: You read an article from an Indian school magazine. First you find out what it is about, then you look for details – and you show <b>where</b> in the text you found them.",
  zeit: "etwa 40 Minuten",
  ziele: ["📰 I understand what an article is about.", "🔎 I find details and name the lines.", "💭 I read between the lines.", "🧩 I spot the grammar of Unit 2 in a real text."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einem Namen oder einer Zahl."],
    tailor: ["tailor", "Ein Schneider oder eine Schneiderin macht und repariert Kleidung."],
    stitch: ["stitch", "Ein Stich mit Nadel und Faden; viele Stiche nähen zum Beispiel einen Beutel zusammen."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u2-read-bagbox",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Many people in the world use a plastic bag for only a few minutes. In this module you read how two students from a town called <b>Sonapet</b> try to change that – with a very small idea.</p><p>Sonapet, the project and the people are invented. The problem is real.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["cloth bag", "Stoffbeutel"], ["tailor", "Schneider"], ["to sew", "nähen"], ["handle", "Henkel"], ["patient", "geduldig"], ["curtain", "Vorhang"], ["to disappear", "verschwinden"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a name or a number.</p><p>You do <b>not</b> need to know every word.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the article once. Don't stop at words you don't know. <span class=\"de\">Lies den Artikel einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: "u2-read-bagbox" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the article about?", o: ["Two students start a project with cloth bags.", "A market closes because of the rain.", "A tailor opens a big new shop.", "Tourists buy plastic bags in a town."], a: 0,
            e: "The whole text is about the Bag Box and the people behind it." },
          { q: "Who had the idea for the Bag Box?", o: ["Meera and Arjun", "Mrs Pillai", "Grandpa Hari", "The sellers at the market"], a: 0,
            e: "The text says it is the idea of two students: Meera and Arjun. The others only help." },
          { q: "Where can you read a text like this?", o: ["in a school magazine", "in a cookery book", "in a bus timetable", "in a letter to a friend"], a: 0,
            e: "It tells about a school project and quotes people – typical for a school magazine." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Meera saw that the sellers give out plastic bags all day.", "Meera and Arjun asked Mrs Pillai for help.", "The students sewed cloth bags from old clothes.", "People took bags from the blue box.", "Almost all of them brought the bags back.", "Meera made a plan for other markets."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. <span class=\"de\">Suche die Stelle im Text, bevor du antwortest. Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The Bag Box stands at the market every Saturday morning.", true],
          ["People pay a small price for a bag.", false],
          ["Grandpa Hari has a big shop.", false],
          ["Meera usually sews the handles.", true],
          ["Almost all the people bring the bags back.", true],
          ["Mrs Pillai says the students wait for the town to act.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht. In einer Prüfung schreibst du dann zum Beispiel: (ll. 6–7).</span>", lesetext: "u2-read-bagbox",
        fragen: [
          { q: "When and where can people find the Bag Box?", zeilen: [1, 2], e: "It stands at the entrance of the vegetable market every Saturday morning.", tipp: "Look at the beginning of the article." },
          { q: "What did Meera notice at the market?", zeilen: [6, 7], e: "The sellers give out plastic bags all day.", tipp: "Look for the name Meera in the second paragraph." },
          { q: "Does Grandpa Hari have a big shop, and where does he work?", zeilen: [13, 14], e: "He does not have a big shop. He works in a small room behind his house.", tipp: "Look for the name Grandpa Hari." },
          { q: "How many people took a bag last month, and did they bring it back?", zeilen: [22, 23], e: "More than fifty people took a bag, and almost all of them brought it back.", tipp: "Scan the text for a number." },
          { q: "What are the problems of the project?", zeilen: [25, 26], e: "Some bags disappear, and the box often needs a repair.", tipp: "Look at the last paragraph." }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Notes for the school website", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Where: at the entrance of the ", { g: "vegetable" }, " market in Sonapet"],
          ["Who: Meera and Arjun, students from ", { g: "Class" }, " 9"],
          ["The bags are made from old ", { g: "shirts" }, " and curtains."],
          ["The students sew the bags on ", { g: "Sundays" }, "."],
          ["Last month more than ", { g: "fifty" }, " people took a bag."]
        ], extra: ["tailor", "doctor"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence. <span class=\"de\">Manchmal musst du aus dem Text schließen.</span>",
        fragen: [
          { q: "Meera says: \"Nobody thinks about them\" (l. 7). What does she mean?", o: ["People use plastic bags without thinking about the problem.", "People do not like the sellers.", "Nobody wants to go to the market.", "The sellers have no plastic bags."], a: 0,
            e: "She says that people use a bag for ten minutes and do not think about what happens next." },
          { q: "What does Arjun's sentence in ll. 26–27 show?", o: ["He is positive about the project.", "He is angry with the people.", "He wants to stop the Bag Box.", "He thinks plastic bags are better."], a: 0,
            e: "He laughs and says that even a lost cloth bag is better than a plastic one. So he does not worry." },
          { q: "Grandpa Hari says: \"A big change always begins with a small stitch\" (ll. 29–30). What does he mean?", o: ["Small actions can lead to big changes.", "You need a needle for every change.", "Meera's plan is too big.", "Sewing is the best job in the world."], a: 0,
            e: "A stitch is a very small thing. He means that a small start can lead to a big change." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why is the Bag Box a good idea for the environment?", m: "People can use a cloth bag again and again, so they need fewer plastic bags.", k: ["again|reuse|many times|every week|bring|back", "plastic|bags|bag|rubbish|street"], min: 8 }],
        tipp: "Think about the cloth bags and the plastic bags. Start like this: The Bag Box is a good idea because …" },
      { art: "offen", id: "eigene-ideen", m7: true, tag: "Your ideas", titel: "A small idea for your town", lead: "Write two sentences in English about a small idea. Use the <b>simple present</b>. <span class=\"de\">Zum Beispiel: Our class makes … We sell … every …</span>",
        fragen: [{ q: "What small idea could help your school or your town? Write two sentences.", m: "Our class makes pencil cases from old bottles. We sell them at school every month.", k: ["make|makes|collect|collects|sell|sells|bring|brings|share|shares|repair|repairs|swap|swaps", "we|our|class|school|students|friends|every"], min: 10 }],
        tipp: "Think of old things you can use again. Start with: Our class … / We …" }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 2 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The article uses two things from Unit 2:</p><ul><li><b>simple present</b> – what happens again and again: Meera <u>sews</u> the handles. He <u>does not have</u> a big shop. <u>Does</u> the idea really <u>work</u>? Signal words: <i>every, usually, often, always, never</i>.</li><li><b>word order</b> – subject, verb, object: Arjun <u>paints</u> the name. Then <b>how – where – when</b>: The students work <u>happily</u> <u>in his room</u> <u>on Sundays</u>.</li></ul><p>Remember: with <i>he, she, it</i> the verb gets an <b>-s</b> (sews). In questions and negatives you use <i>does</i> / <i>does not</i> and the verb has <b>no -s</b>.</p>" },
      { art: "sort", id: "saetze", tag: "Sort", titel: "Statement, negative or question?", lead: "Put the sentences into the right box.",
        buckets: ["Statement", "Negative", "Question"],
        items: [{ t: "Meera usually sews the handles.", b: 0 }, { t: "Arjun prefers to paint the name.", b: 0 }, { t: "Grandpa Hari smiles.", b: 0 },
                { t: "He does not have a big shop.", b: 1 }, { t: "The students don't ask for money.", b: 1 }, { t: "Arjun doesn't mind.", b: 1 },
                { t: "Does the idea really work?", b: 2 }, { t: "Do the students sew the bags?", b: 2 }] },
      { art: "markieren", id: "reihenfolge-satz", tag: "Mark", titel: "How – where – when", finde: "how, where and when – in this order", toleranz: 0,
        satz: "The students work [[happily]] [[in his room]] [[on Sundays]].",
        e: "The usual order is: how (happily) – where (in his room) – when (on Sundays)." },
      { art: "mc", id: "satzbau", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence has the right word order?", o: ["The students work happily in his room on Sundays.", "The students work on Sundays in his room happily.", "On Sundays work the students happily.", "Work the students happily in his room."], a: 0,
            e: "Subject, verb, then how – where – when." },
          { q: "Which sentence is correct?", o: ["Meera usually sews the handles.", "Meera sews usually the handles.", "Meera usually sew the handles.", "Meera is usually sews the handles."], a: 0,
            e: "The adverb of frequency stands before the verb, and with she the verb gets an -s." }
        ] },
      { art: "luecke", id: "praesens-luecke", tag: "Gap text", titel: "Simple present", lead: "Complete the sentences. <span class=\"de\">Achtung: he/she/it bekommt -s; nach does steht das Verb ohne -s.</span>",
        absaetze: [
          ["Arjun ", { g: "paints" }, " the name on each bag."],
          ["Grandpa Hari ", { g: "does not have" }, " a big shop."],
          ["Question: ", { g: "Does" }, " Mrs Pillai think the idea works?"],
          ["The sellers at the market ", { g: "give" }, " out plastic bags all day."]
        ], extra: ["do", "gives"] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The article in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Meera and Arjun put a blue ", { g: "box" }, " with cloth bags at the market."],
          ["The bags are made from old ", { g: "clothes" }, ", and Grandpa Hari helps the students."],
          ["People ", { g: "take" }, " a bag for their shopping and bring it ", { g: "back" }, "."],
          ["Meera hopes that other ", { g: "markets" }, " will have a Bag Box too."]
        ], extra: ["money", "tailor"] }
    ] }
  ],
  weiter: { text: "Well done! You can find information in a longer text and say where it is. Keep reading and keep asking: What small idea could change something?" }
});
