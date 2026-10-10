/* Englisch 9R · Unit 2 Exploring India · Speaking: Present a company
   (Sprechen vorbereiten und anleiten: einen Kurzvortrag über eine Firma oder ein Projekt – Anfang, Hauptteil, Schluss, Rückfragen;
   Notizzettel mit Stichpunkten; Vortragskarten A/B zu zwei erfundenen Firmen; Grammatik: simple present (Revision) und word order
   (Revision: Art und Weise – Ort – Zeit))
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend vortragen, Fragen beantworten), E9 2 (Redemittel), E9 3, E9 5 (Arbeitswelt).
   Texte: Mustervortrag „Paper Wings“ (texte/u2/speaking-paper-wings.js) – Projekt, Ort Velapur und Personen sind erfunden.
   Das Sprechen selbst kann das Gerät nicht bewerten: Die Kinder sprechen zu zweit oder halblaut für sich. */
D7Kit.seite({
  id: "u2-speaking",
  titel: "Speaking: Present a company",
  einleitung: "In this module you prepare a <b>short talk about a company or a school project</b>. You learn the phrases, make a note card with key words, listen to a model talk – and then you speak. Two cards give you two <b>invented</b> companies from <b>Velapur</b> (an invented town). The device cannot judge your speaking: <b>you</b> speak, and your partner listens.",
  zeit: "etwa 40 Minuten",
  ziele: ["🏭 I present a company: name, place, work, people, something special.", "📝 I use a note card with key words, not whole sentences.", "🗣️ I use phrases for the start, the main part and the end.", "❓ I ask and answer questions about a company.", "✅ I use the simple present and a good word order."],
  quiz: { profi: "Speaking pro" },
  glossar: {
    firm: ["company / firm", "Eine Firma ist ein Betrieb, der etwas herstellt oder verkauft."],
    employee: ["employee", "Eine Mitarbeiterin oder ein Mitarbeiter arbeitet in einer Firma und bekommt Geld dafür."],
    notecard: ["note card", "Ein Notizzettel hat nur Stichpunkte. Du sprichst frei und liest nichts vor."],
    loom: ["loom", "Ein Webstuhl ist eine Maschine, auf der man Stoff webt."]  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you speak", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Many people work in a company. Today <b>you</b> are the speaker: you tell your class about a company or a school project. <span class=\"de\">Du hältst einen Kurzvortrag von etwa einer Minute. Zuerst lernst du die Wörter und Wendungen.</span></p><p>The companies here are <b>invented</b>, and so is the town <b>Velapur</b>. <span class=\"de\">Alles ist erfunden – es gibt diese Firmen nicht wirklich.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["company", "Firma"], ["employee", "Mitarbeiter(in)"], ["customer", "Kunde / Kundin"], ["product", "Produkt"], ["manager", "Leiter(in)"], ["to sell", "verkaufen"], ["to deliver", "liefern"], ["special", "besonders"]] },
      { art: "merke", kopf: "SPEAKING TIP", html: "<p>A short talk has <b>three parts</b>:</p><div class=\"phrasen\"><span>1 Start: say hello, say what you talk about</span><span>2 Main part: name, place, work, people, special</span><span>3 End: your opinion, thank you, questions</span></div><p>Speak slowly, look at your partner and use <b>key words</b> on a note card.</p>" }
    ] },
    { kurz: "Phrases", ober: "Phrases for your talk", titel: "Start, main part, end", teile: [
      { art: "merke", kopf: "USEFUL PHRASES", html: "<p><b>Start</b></p><div class=\"phrasen\"><span>Hello everyone.</span><span>Today I want to tell you about …</span><span>My talk has three parts.</span></div><p><b>Main part</b></p><div class=\"phrasen\"><span>… is a company in …</span><span>It makes / sells …</span><span>… people work there.</span><span>What is special? …</span></div><p><b>End</b></p><div class=\"phrasen\"><span>In my opinion, …</span><span>That's all from me.</span><span>Thank you for listening.</span><span>Do you have any questions?</span></div>" },
      { art: "sort", id: "redemittel", tag: "Sort", titel: "Start, main part or end?", lead: "Put each sentence into the right box. <span class=\"de\">Wohin gehört der Satz in deinem Vortrag?</span>",
        buckets: ["Start", "Main part", "End"],
        items: [{ t: "Hello everyone. Today I want to tell you about a small company.", b: 0 }, { t: "My talk has three parts.", b: 0 }, { t: "Good morning, class.", b: 0 },
                { t: "The company makes toys from wood.", b: 1 }, { t: "Ten people work there.", b: 1 }, { t: "What is special? The workers use old wood.", b: 1 },
                { t: "In my opinion, it is a great idea.", b: 2 }, { t: "Thank you for listening.", b: 2 }, { t: "Do you have any questions?", b: 2 }] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "Build a short talk", lead: "Put the sentences in the right order. <span class=\"de\">So klingt ein guter Vortrag von vorne nach hinten.</span>",
        schritte: ["Hello everyone. Today I want to tell you about Sunrise Bakery.", "It is a small bakery in a town near the sea.", "It makes bread and sells it to cafés every morning.", "Five people work there, and they start at four o'clock.", "What is special? The bakery gives old bread to a food bank.", "In my opinion, this is a very good idea.", "Thank you for listening. Do you have any questions?"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Spot the better start", lead: "Tick the best answer. <span class=\"de\">Typische Fehler im Vortrag.</span>",
        fragen: [
          { q: "Which start is best for a short talk?", o: ["Hello everyone. Today I want to tell you about Blue Sky Tea.", "Um … so … Blue Sky Tea.", "I don't know what to say.", "Listen. Blue Sky Tea. Yes."], a: 0,
            e: "A good start greets the class and says what the talk is about. Use a whole sentence." },
          { q: "You forget a word in the middle of your talk. What do you do?", o: ["I say it in a different way and go on.", "I stop and say nothing.", "I look at the floor and wait.", "I start the whole talk again."], a: 0,
            e: "Good speakers don't stop. They use other words, for example \"a machine for making paper\"." },
          { q: "Which sentence is a polite end?", o: ["Thank you for listening. Do you have any questions?", "That's it. Bye.", "I'm finished. Ask me later.", "No questions, please."], a: 0,
            e: "Thank your listeners and invite their questions in a friendly way." }
        ] },
      { art: "luecke", id: "ende", tag: "Gap text", titel: "Finish the talk", lead: "Complete the phrases for the end of a talk. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In my ", { g: "opinion" }, ", it is a great company."],
          ["That's all from ", { g: "me" }, "."],
          ["Thank you for ", { g: "listening" }, "."],
          ["Do you have any ", { g: "questions" }, "?"]
        ], extra: ["opinions", "listen"] }
    ] },
    { kurz: "Notes", ober: "Your note card", titel: "Key words, not whole sentences", teile: [
      { art: "text", html: "<p class=\"lead\">Don't write your whole talk! Write <b>key words</b> on a note card. Then you make the sentences while you speak. <span class=\"de\">Ein Notizzettel hat Stichpunkte. So klingst du frei und natürlich – und liest nicht ab.</span></p>" },
      { art: "text", html: "<div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Note card · example</h4><ul><li><b>Name:</b> Sunrise Bakery</li><li><b>Place:</b> small town, near the sea</li><li><b>Work:</b> bread, cafés, every morning</li><li><b>People:</b> 5, start 4 o'clock</li><li><b>Special:</b> old bread → food bank</li><li><b>Opinion:</b> good idea</li></ul></div><div class=\"sprech-karte b\"><h4>What you say</h4><ul><li>The company is called Sunrise Bakery.</li><li>It is in a small town near the sea.</li><li>It makes bread for cafés every morning.</li><li>Five people work there. They start at four o'clock.</li><li>It gives old bread to a food bank.</li></ul></div></div>" },
      { art: "mc", id: "notizen", tag: "Note cards", titel: "A good note card", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which note is a good key-word note?", o: ["Place: small town, sea", "The bakery is in a small town and the town is near the sea and it is very nice.", "Everything about the bakery", "I will read it all."], a: 0,
            e: "Key words are short. You make the full sentence when you speak." },
          { q: "Why do you use a note card?", o: ["I can look at it and still speak freely.", "I can read every word aloud.", "I don't need to practise.", "My partner reads it for me."], a: 0,
            e: "The card helps your memory. A talk that you only read aloud is boring." }
        ] },
      { art: "offen", id: "notizen-zu-saetzen", tag: "Your sentences", titel: "From key words to sentences", lead: "Use the key words to write 3 or 4 sentences. <span class=\"de\">Aus Stichpunkten werden ganze Sätze mit he/she/it + -s.</span>",
        fragen: [{ q: "Key words: Blue Loom | weave scarves | 12 people | sell to shops. Write sentences about the company.", m: "Blue Loom is a company in Velapur. It weaves scarves. Twelve people work there. The company sells the scarves to shops.", k: ["blue loom|company|firm", "weave|weaves|make|makes", "work|works|people|twelve|12", "sell|sells|shops"], min: 12 }],
        tipp: "Start like this: Blue Loom is a company in … / It weaves … / Twelve people work there. Remember: it weaves, she works (with -s)." }
    ] },
    { kurz: "Language", ober: "Language", titel: "Simple present and word order", teile: [
      { art: "merke", kopf: "SIMPLE PRESENT", html: "<p>You talk about <b>facts and habits</b>, so you use the <b>simple present</b>:</p><ul><li>I / you / we / they: <u>work</u>, <u>make</u>, <u>sell</u></li><li>he / she / it: <u>works</u>, <u>makes</u>, <u>sells</u> (with <b>-s</b>)</li><li>No: <u>doesn't</u> + verb (she <u>doesn't</u> use machines) – <u>don't</u> + verb (they <u>don't</u> use plastic)</li><li>Question: <u>Do</u> they …? – <u>Does</u> she …? (no -s after does)</li></ul><p>Words like <b>every day, usually, often, sometimes, never</b> show a habit.</p>" },
      { art: "luecke", id: "present", tag: "Gap text", titel: "Talk about Blue Loom", lead: "Complete the sentences about the company. <span class=\"de\">Zwei Wörter bleiben übrig. Ganze Formen stehen im Kasten.</span>",
        absaetze: [
          ["Farah is the manager. She ", { g: "works" }, " in the office."],
          ["The weavers ", { g: "start" }, " at eight o'clock."],
          ["The company ", { g: "doesn't" }, " use plastic."],
          [{ g: "Does" }, " the company sell its scarves online?"],
          ["The weavers ", { g: "usually" }, " have lunch together."]
        ], extra: ["starts", "do"] },
      { art: "merke", kopf: "WORD ORDER", html: "<p>Normal order: <b>subject – verb – object</b>. Then: <b>how? – where? – when?</b></p><div class=\"phrasen\"><span>They work · carefully · in the workshop · every day.</span><span>She sells scarves · happily · at the market · on Saturdays.</span></div><p><span class=\"de\">Reihenfolge: Art und Weise (how) – Ort (where) – Zeit (when).</span></p>" },
      { art: "mc", id: "wortstellung", tag: "Word order", titel: "Which sentence is right?", lead: "Tick the correct sentence. <span class=\"de\">Satzstellung im Vortrag.</span>",
        fragen: [
          { q: "Which sentence has the right word order?", o: ["The workers weave scarves carefully in the workshop every day.", "The workers weave every day scarves carefully in the workshop.", "The workers every day weave scarves in the workshop carefully.", "Weave the workers scarves in the workshop carefully every day."], a: 0,
            e: "Subject – verb – object, then how (carefully), where (in the workshop) and when (every day)." },
          { q: "Which question is correct?", o: ["Does your company sell juice?", "Does your company sells juice?", "Do your company sell juice?", "Your company does sell juice?"], a: 0,
            e: "After does the verb has no -s: Does it sell …?" },
          { q: "Which sentence is correct?", o: ["Mr Das owns a small company.", "Mr Das own a small company.", "Mr Das are owns a small company.", "Mr Das does owns a small company."], a: 0,
            e: "He, she, it: the verb ends in -s." }
        ] }
    ] },
    { kurz: "Cards", ober: "Now speak!", titel: "Partner cards A and B", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> The device cannot listen to you or give you points. <b>You and your partner</b> do the job. <span class=\"de\">Das Gerät bewertet dein Sprechen nicht. Du trägst deiner Partnerin oder deinem Partner vor, sie oder er hört zu und stellt Fragen.</span></p><p class=\"de\"><b>Ablauf:</b> 1) A trägt die Firma auf Karte A vor (etwa eine Minute, nur mit den Stichpunkten). 2) B stellt zwei Fragen, A antwortet. 3) Tauscht: B trägt die Firma auf Karte B vor. Kein Partner da? Sprich halblaut für dich und stelle dir die Fragen selbst.</p>" },
      { art: "text", html: "<h3>Card A · Blue Loom Textiles</h3><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Speaker A · key words</h4><ul><li><b>Name:</b> Blue Loom Textiles</li><li><b>Place:</b> Velapur (invented town)</li><li><b>Work:</b> cotton scarves, wooden looms</li><li><b>People:</b> 12, manager = Farah</li><li><b>Day:</b> start 8 o'clock, shops + online</li><li><b>Special:</b> colours from plants</li><li><b>Opinion:</b> beautiful, but slow work</li></ul></div><div class=\"sprech-karte b\"><h4>Listener B · ask 2 questions</h4><ul><li>Where is the company?</li><li>How many people work there?</li><li>Who is the manager?</li><li>Does the company sell scarves online?</li><li>What is special about it?</li></ul><p class=\"de\">Wähle zwei Fragen. Frage freundlich nach, wenn du etwas nicht verstanden hast.</p></div></div>" },
      { art: "text", html: "<h3>Card B · Mango Tree Juice</h3><div class=\"sprech-karten\"><div class=\"sprech-karte b\"><h4>Speaker B · key words</h4><ul><li><b>Name:</b> Mango Tree Juice</li><li><b>Place:</b> Velapur (invented town)</li><li><b>Work:</b> fruit juice from local fruit</li><li><b>People:</b> 8, owner = Mr Das, Tom drives the van</li><li><b>Day:</b> make juice in the morning, deliver to cafés + schools</li><li><b>Special:</b> bottles come back, used again</li><li><b>Opinion:</b> good for the environment</li></ul></div><div class=\"sprech-karte a\"><h4>Listener A · ask 2 questions</h4><ul><li>What does the company make?</li><li>Who owns it?</li><li>When do they make the juice?</li><li>Do they use plastic bottles?</li><li>Why is it good for the environment?</li></ul><p class=\"de\">Wähle zwei Fragen. Du darfst auch eine eigene Frage stellen.</p></div></div>" },
      { art: "merke", kopf: "ASKING QUESTIONS", html: "<p>Questions for the speaker:</p><div class=\"phrasen\"><span>Where is …?</span><span>How many people work there?</span><span>What does the company make?</span><span>Does it sell …?</span><span>Why is it special?</span></div><p>If you don't understand:</p><div class=\"phrasen\"><span>Sorry, could you say that again, please?</span><span>What does … mean?</span></div>" },
      { art: "offen", id: "eigene-frage", m7: true, tag: "Your question", titel: "Ask your own question", lead: "Write two questions you can ask after a talk about Mango Tree Juice. <span class=\"de\">Nutze do / does und achte auf kein -s nach does.</span>",
        fragen: [{ q: "Write two questions about Mango Tree Juice.", m: "Where does the company sell its juice? How many people work there?", k: ["where|what|how|when|why|who|does|do", "company|juice|people|work|sell|bottles"], min: 8 }],
        tipp: "Start with Where / What / How many / When / Why / Does / Do … and put a question mark at the end." }
    ] },
    { kurz: "Model talk", ober: "A model talk", titel: "Listen and then make your own", teile: [
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", titel: "A model talk", lead: "Listen to Kiran. He talks about a school project, not about the companies on the cards. <span class=\"de\">Hör zu, wie Kiran seinen Vortrag aufbaut – Anfang, Hauptteil und Schluss.</span>", hoertext: "u2-speak-paper-wings", fragen: [
        { art: "mc", id: "hoer-fragen", titel: "What do you hear?", fragen: [
          { q: "What does Paper Wings make?", o: ["Notebooks from old paper.", "Scarves from cotton.", "Juice from fruit.", "Toys from wood."], a: 0,
            e: "\"It makes notebooks from old paper.\"" },
          { q: "What is special about Paper Wings?", o: ["The students never use new paper.", "The students work at night.", "The notebooks are very big.", "A famous artist draws all the covers."], a: 0,
            e: "\"The students never use new paper.\"" },
          { q: "What do the students do with the money?", o: ["They give it to the school library.", "They buy new paper.", "They keep it for a trip.", "They give it to the teacher."], a: 0,
            e: "They give the money to the school library." },
          { q: "How does Kiran end his talk?", o: ["He thanks the class and asks for questions.", "He says goodbye and leaves.", "He tells a joke.", "He reads the talk again."], a: 0,
            e: "\"Thank you for listening. Do you have any questions?\"" }
        ] }
      ] },
      { art: "offen", id: "eigener-zettel", m7: true, tag: "Your note card", titel: "Make your own note card", lead: "Think of a company or a school project (real or invented). Write 4 key words or short sentences. <span class=\"de\">Das ist dein Notizzettel für einen eigenen Vortrag – kein Mustertext, schreibe Stichpunkte.</span>",
        fragen: [{ q: "Write your note card: name, place, work, one special thing.", m: "Name: Fresh Start Café. Place: our town. Work: sells sandwiches and juice. Special: students work there.", k: ["name|called|company|project|café|cafe", "place|town|city|in", "work|sells|makes|sell|make|bake|repair|grow", "special|students|people"], min: 8 }],
        tipp: "Use the four headings: Name – Place – Work – Special. Short key words are fine." },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Give your own talk to a partner. Use your note card and the phrases from station 2. Speak for about <b>one minute</b>. <span class=\"de\">Dein Partner stellt danach zwei Fragen. Das Gerät hört nicht zu – ihr beide gebt euch Rückmeldung.</span></p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to give a good talk", lead: "True or false? <span class=\"de\">Aussagen über gutes Sprechen.</span>",
        aussagen: [
          ["On a note card you write every sentence of your talk.", false],
          ["You can start with Hello everyone and say what the talk is about.", true],
          ["When you talk about a company, you often use the simple present.", true],
          ["The device gives you points for your speaking.", false],
          ["After your talk you ask: Do you have any questions?", true]
        ] },
      { art: "text", html: "<p class=\"lead\">My checklist after the talk – say <i>yes</i> to yourself:</p><ul><li>☐ I said the name and the place.</li><li>☐ I said what the company makes or sells.</li><li>☐ I said something special and my opinion.</li><li>☐ I used he / she / it + -s.</li><li>☐ I spoke freely and did not read.</li></ul>" },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["On a note card you write only key ", { g: "words" }, "."],
          ["For he, she and it the verb ends in ", { g: "-s" }, "."],
          ["In a question with does the verb has no ", { g: "ending" }, "."],
          ["The word order is: how, where and ", { g: "when" }, "."],
          ["At the end of a talk you ask for ", { g: "questions" }, "."]
        ], extra: ["numbers", "sentences"] }
    ] }
  ],
  weiter: { text: "Well done! You can prepare and give a short talk about a company. Speak as often as you can – with a partner, in a group or quietly for yourself." }
});
