/* Englisch 9M · Unit 2 Exploring India · Reading: Small ideas, big change · M-Fassung
   (einen längeren Text über eine Idee für die Umwelt verstehen: Thema erfassen, Einzelheiten finden und mit Zeilen belegen, Schlüsse
   ziehen – auch aus einer Gegenstimme –, eigene Meinung begründen, auf Deutsch zusammenfassen, Sprache im Text – Revision simple
   present und word order, die Grammatik der Unit)
   LehrplanPLUS E9 1.1 Leseverstehen (längere sachliche Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit
   inhaltlichen und sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Indien:
   Alltag, nachhaltiges Handeln), Sprachmittlung (Zusammenfassung auf Deutsch).
   Text: „The Bag Box“ (texte/u2/reading-bag-box-m.js) – Stadt, Projekt und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-reading",
  titel: "Reading: Small ideas, big change",
  einleitung: "Two students, one blue box and a market seller who is not convinced: you read a longer article from an Indian school magazine. You find out what it is about, look for details and show <b>where</b> in the text you found them – and you work out what people think, although the text does not say it directly.",
  zeit: "etwa 45 Minuten",
  ziele: ["📰 I understand a longer article and its message.", "🔎 I find details and name the lines.", "💭 I read between the lines – also when somebody disagrees.", "✍️ I give my opinion and explain the text in my own words.", "🧩 I use simple present and word order correctly."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einem Namen oder einer Zahl."],
    inference: ["reading between the lines", "Etwas verstehen, das nicht wörtlich im Text steht, zum Beispiel ein Gefühl oder einen Grund, den man aus den Aussagen der Personen erschließt."],
    tailor: ["tailor", "Ein Schneider oder eine Schneiderin macht und repariert Kleidung."],
    stitch: ["stitch", "Ein Stich mit Nadel und Faden; viele Stiche nähen zum Beispiel einen Beutel zusammen."],
    stall: ["stall", "Ein Marktstand ist ein kleiner Verkaufstisch, oft mit einem Dach, auf dem ein Händler Obst oder Gemüse verkauft."],
    ban: ["to ban", "Etwas zu verbieten bedeutet, dass es nicht mehr erlaubt ist, zum Beispiel dünne Plastiktüten."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u2-read-bagbox-m",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: a busy morning in an Indian town. What is in the box? Why could that be a good idea?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-bag-box.jpg\" alt=\"A wooden box full of colourful cloth bags stands at the entrance of a vegetable shop; a customer takes a bag.\" style=\"width:100%;border-radius:14px\"></figure><p>Talk to a partner or write two sentences. Then read on.</p>" },
      { art: "text", html: "<p class=\"lead\">Many people in the world use a plastic bag for only a few minutes. In this module you read how two students from a town called <b>Sonapet</b> try to change that – with a very small idea. Not everybody in town likes it.</p><p>Sonapet, the project and the people are invented. The problem is real.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["to ban", "verbieten"], ["habit", "Gewohnheit"], ["stall", "Marktstand"], ["customer", "Kundin, Kunde"], ["crooked", "schief"], ["to admit", "zugeben"], ["to repair", "reparieren"], ["curtain", "Vorhang"], ["patient", "geduldig"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a name or a number.<br><b><button class=\"term\" data-t=\"inference\">Reading between the lines</button></b> – ask: What does the person think or feel? Why does he or she say or do this?</p><p>You do <b>not</b> need to know every word.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the article once. Don't stop at words you don't know. <span class=\"de\">Lies den Artikel einmal ganz durch.</span></p>" },
      { art: "lesetext", lesetext: "u2-read-bagbox-m" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the article about?", o: ["Two students start a cloth bag project and have to deal with doubts and problems.", "A market closes because plastic bags are banned.", "A tailor opens a big new shop in Sonapet.", "A teacher punishes students who use plastic bags."], a: 0,
            e: "The text reports on the Bag Box, a market seller's doubts, some problems and the plans for the future." },
          { q: "What is the last paragraph mainly about?", o: ["Problems of the project and Meera's plans for more helpers and markets.", "The cloth bags that Grandpa Hari sews on Sundays.", "A customer who asks for plastic bags.", "Mr Kulkarni's new stall."], a: 0,
            e: "The paragraph begins with the problems and ends with Meera's bigger plan." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Meera noticed the plastic bags at the market.", "Mrs Pillai asked the students a difficult question.", "The students sewed bags in Grandpa Hari's room.", "Mr Kulkarni did not want to tell his customers about the Bag Box.", "More than fifty people took a bag in one month.", "Meera started to write a letter to the town office."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. Some sentences are almost right! <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["Sonapet has no plastic bags any more because thin bags are banned.", false],
          ["Mrs Pillai was sure from the start that the idea would work.", false],
          ["Meera asked Mr Kulkarni to try the box at his stall for a month.", true],
          ["Mr Kulkarni is now completely sure that the Bag Box is a good idea.", false],
          ["Mr Kulkarni says that some customers will always want plastic.", true]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">In einer Prüfung schreibst du dann zum Beispiel: (ll. 14–16).</span>", lesetext: "u2-read-bagbox-m",
        fragen: [
          { q: "What question did Mrs Pillai ask the students?", zeilen: [14, 16], e: "She asked who would wash and repair the bags.", tipp: "Look at the second paragraph." },
          { q: "Who washes the bags that people bring back?", zeilen: [25, 27], e: "Arjun's mother washes them on Friday evenings.", tipp: "Look at the paragraph about Grandpa Hari's room." },
          { q: "What does Mr Kulkarni fear?", zeilen: [30, 32], e: "He fears that his customers will buy their tomatoes from the next stall.", tipp: "Look for the paragraph that begins with \"Not everybody ...\"." },
          { q: "How many people took a bag last month, and did they bring it back?", zeilen: [39, 40], e: "More than fifty people took a bag, and almost all of them brought it back.", tipp: "Scan the text for a number." },
          { q: "Why is Meera worried about the future?", zeilen: [48, 49], e: "She thinks that the Bag Box will stay small if only her class does it.", tipp: "Look at the last paragraph for \"If only ...\"." }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Notes for the school website", lead: "Complete the notes with words from the box. Two words are left over.",
        absaetze: [
          ["How it works: people ", { g: "take" }, " a cloth bag and bring it back next week."],
          ["Sewing: the students sew the bags on ", { g: "Sundays" }, "."],
          ["Washing: Arjun's ", { g: "mother" }, " washes the bags on Friday evenings."],
          ["Result: more than ", { g: "fifty" }, " people took a bag last month."]
        ], extra: ["tailor", "bus"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence.",
        fragen: [
          { q: "Mrs Pillai says: \"An idea is easy, but a habit is hard.\" What does she worry about?", o: ["People may not keep using the bags for a long time.", "The students have no good ideas.", "The bags are too expensive for the students.", "Nobody at school likes the project."], a: 0,
            e: "A habit means doing something again and again. She doubts that people will keep it up, so she asks who will wash and repair the bags." },
          { q: "The students do not argue with Mr Kulkarni. Why does Meera ask him to try the box for a month?", o: ["She hopes that he will see for himself that the idea works.", "She wants him to sell the bags.", "She is angry and wants him to leave the market.", "She wants him to pay for the bags."], a: 0,
            e: "Meera listens and does not argue. A month in front of his stall is a test: he can find out for himself." },
          { q: "Mr Kulkarni says: \"That surprised me.\" What does this show?", o: ["He is starting to think differently, but he is not completely convinced.", "He has decided to stop selling vegetables.", "He is angry about the old woman.", "He thinks the students have told a lie."], a: 0,
            e: "He still says that some customers will always want plastic, but the old woman's question shows him that people are interested." },
          { q: "Meera says: \"If only our class does this, the Bag Box will stay a small project.\" What does this show?", o: ["She knows that one class cannot change a lot alone.", "She wants to stop the project.", "She thinks her class is too lazy.", "She is not interested in other markets."], a: 0,
            e: "She wants more helpers and more markets because she understands that a bigger change needs more people." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why is the Bag Box a good idea for the environment?", m: "People can use a cloth bag again and again, so they need fewer plastic bags. That means there is less rubbish in the street.", k: ["again|reuse|many times|every week|bring|back", "plastic|bags|bag|rubbish|street"], min: 2 }],
        tipp: "Think about the cloth bags and the plastic bags. Start like this: The Bag Box is a good idea because …" },
      { art: "offen", id: "eigene-ideen", m7: true, tag: "Your ideas", titel: "A small idea for your town", lead: "Write two sentences in English about a small idea. Use the <b>simple present</b>.",
        fragen: [{ q: "What small idea could help your school or your town? Write two sentences.", m: "Our class collects old bottles every month. We bring them to the recycling centre on Fridays.", k: ["make|makes|collect|collects|sell|sells|bring|brings|share|shares|repair|repairs|swap|swaps|clean|cleans", "we|our|class|school|students|friends|every"], min: 2 }],
        tipp: "Think of old things you can use again. Start with: Our class … / We …" },
      { art: "offen", id: "meinung", m7: true, tag: "Your opinion", titel: "Habit or idea?", lead: "Mrs Pillai says: \"An idea is easy, but a habit is hard.\" Do you agree? Give <b>two reasons</b>.",
        fragen: [{ q: "Do you agree with Mrs Pillai? Why (not)?", m: "I agree with Mrs Pillai because many people forget to take the bag with them. Also, it takes time to change what we do every day.", k: ["agree|disagree|think|opinion", "because|reason|also|first|second"], min: 2 }],
        tipp: "Use: I agree / I don't agree because … Also, …" },
      { art: "offen", id: "deutsch", m7: true, tag: "In German", titel: "Tell it in German", lead: "Your cousin does not speak English. Tell her in <b>German</b> (2 or 3 sentences): What is the Bag Box, and what are the problems?",
        fragen: [{ q: "Fasse den Artikel auf Deutsch zusammen.", m: "Zwei Schüler in Indien stellen auf dem Markt eine Kiste mit Stoffbeuteln auf. Die Leute nehmen einen Beutel mit und bringen ihn wieder zurück. Ein Händler ist skeptisch und manche Beutel gehen verloren, aber die Schülerin möchte das Projekt auf weitere Märkte ausweiten.", k: ["Beutel|Stofftasche|Tasche|Tüte", "Markt"], min: 2 }],
        tipp: "Nenne das Wichtigste: Wer? Was? Welche Schwierigkeiten? Wie geht es weiter? Übersetze nicht Satz für Satz." }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 2 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The article uses two things from Unit 2 (revision):</p><ul><li><b>simple present</b> – what happens again and again: Meera <u>sews</u> the handles. He <u>does not have</u> a big shop. <u>Does</u> the idea really <u>work</u>? Signal words: <i>every, usually, often, always, never</i>.</li><li><b>word order</b> – subject, verb, object: Arjun <u>paints</u> the name. Then <b>how – where – when</b>: The students work <u>happily</u> <u>in his room</u> <u>on Sundays</u>.</li></ul><p>With <i>he, she, it</i> the verb gets an <b>-s</b> (sews). In questions and negatives you use <i>does</i> / <i>does not</i> and the verb has <b>no -s</b>.</p>" },
      { art: "sort", id: "saetze", tag: "Sort", titel: "Statement, negative or question?", lead: "Put the sentences into the right box.",
        buckets: ["Statement", "Negative", "Question"],
        items: [{ t: "Meera usually sews the handles.", b: 0 }, { t: "Arjun prefers to paint the name.", b: 0 }, { t: "Mr Kulkarni runs a vegetable stall.", b: 0 },
                { t: "He does not have a big shop.", b: 1 }, { t: "The students don't ask for money.", b: 1 }, { t: "Arjun doesn't mind.", b: 1 },
                { t: "Does the idea really work?", b: 2 }, { t: "Do the students sew the bags?", b: 2 }, { t: "Where does Grandpa Hari work?", b: 2 }] },
      { art: "markieren", id: "reihenfolge-satz", tag: "Mark", titel: "How – where – when", finde: "how, where and when – in this order", toleranz: 0,
        satz: "Arjun paints the name [[carefully]] [[on each bag]] [[every Sunday]].",
        e: "The usual order is: how (carefully) – where (on each bag) – when (every Sunday)." },
      { art: "mc", id: "satzbau", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence has the right word order?", o: ["Meera sews the bags carefully in his room on Sundays.", "Meera sews carefully the bags in his room on Sundays.", "Meera sews on Sundays the bags carefully in his room.", "Meera carefully in his room on Sundays sews the bags."], a: 0,
            e: "Subject, verb, object, then how – where – when." },
          { q: "Which question is correct?", o: ["Does Mr Kulkarni sell vegetables at the market?", "Does Mr Kulkarni sells vegetables at the market?", "Do Mr Kulkarni sell vegetables at the market?", "Is Mr Kulkarni sell vegetables at the market?"], a: 0,
            e: "With he, she, it you use does, and the verb has no -s after does." }
        ] },
      { art: "offen", id: "satzbau-offen", tag: "Rewrite", titel: "Build and correct sentences", lead: "Write one sentence for each task.",
        fragen: [
          { q: "Put the words in the right order: on Sundays / the bags / in his room / sew / happily / the students", m: "The students sew the bags happily in his room on Sundays.", k: ["students sew", "happily in his room on sundays"], min: 2 },
          { q: "Find the mistake and write the sentence correctly: Does Grandpa Hari has a machine in his room?", m: "Does Grandpa Hari have a machine in his room?", k: ["does grandpa hari have", "machine"], min: 2 }
        ], tipp: "Subject – verb – object, then how – where – when. After does the verb has no -s." },
      { art: "offen", id: "meine-woche", m7: true, tag: "Your week", titel: "What do you do every week?", lead: "Write <b>three sentences</b> about your week. Use <i>how – where – when</i> in one sentence and a negative sentence (<i>don't / doesn't</i>) in another.",
        fragen: [{ q: "Write three sentences about your week.", m: "I usually play football with my friends in the park on Saturdays. My sister doesn't play with us. We often meet at the sports centre.", k: ["every|often|usually|always|sometimes|on |never", "don't|doesn't|do not|does not"], min: 2 }],
        tipp: "Start with: I usually … / My brother doesn't … / We often …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The article in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Meera and Arjun put a blue ", { g: "box" }, " with cloth bags at the market."],
          ["The bags are made from old ", { g: "clothes" }, ", but the project needs more ", { g: "helpers" }, " to grow."],
          ["Mr Kulkarni is ", { g: "doubtful" }, " at first, but he is starting to change his mind."],
          ["Meera hopes that other ", { g: "markets" }, " will have a Bag Box too."]
        ], extra: ["street", "sell"] }
    ] }
  ],
  weiter: { text: "Well done! You can find information in a longer text, say where it is and read between the lines – also when somebody disagrees. Keep asking: What small idea could change something?" }
});
