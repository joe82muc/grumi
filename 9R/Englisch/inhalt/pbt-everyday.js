/* Englisch 9R · Prüfungstraining · Speaking: Picture talks · Home, school and work
   (Übungsbilder für den ersten Teil der mündlichen Prüfung. Vier gezeichnete Bilder aus dem Alltag: Küche, Klassenzimmer,
   Schulhof, Café. Zu jedem Bild: Wörter, genau hinsehen, Sprache üben – Verlaufsform, Tatsache oder Vermutung, typische Fehler,
   Aufbau eines Vortrags – und Fragen, wie sie die Prüferin stellt: erst zum Bild, dann weiterführend zum eigenen Leben.
   Zuletzt zu zweit: eine Person spricht, die andere prüft. Das Gerät bewertet das Sprechen nicht.)
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend sprechen, an Gesprächen teilnehmen), E9 2 (Redemittel), E9 3.
   Bilder: eigene Zeichnungen in ../../9R/Englisch/images/pbt/ (kitchen, classroom, recycling, cafe; erzeugt mit
   .codex-build/englisch9r-werkzeug/bau-pbt-bilder.js, ohne Schrift, ohne Marken). Was auf jedem Bild zu sehen ist, steht im
   Kopf der Szene (pbt-szenen/<name>.js) – Aussagen in den Aufgaben stimmen damit überein. Personen haben keine Namen. */
var pbtZeichnung = function (datei, alt, hinweis) {
  return "<figure class=\"pbt-bild\" style=\"margin:0 0 14px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/pbt/" + datei + ".svg\" alt=\"" + alt +
    "\" loading=\"lazy\" width=\"1280\" height=\"853\" style=\"display:block;width:100%;max-width:760px;height:auto;border-radius:12px;border:1px solid rgba(0,0,0,.12)\">" +
    "<figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI" + (hinweis ? " · " + hinweis : "") + "</figcaption></figure>";
};
D7Kit.seite({
  id: "pbt-everyday",
  titel: "Speaking: Picture talks · Home, school and work",
  einleitung: "Four new pictures from everyday life: a kitchen, a classroom, a schoolyard and a café. You <b>look closely</b>, you practise the language – and you answer the questions of the <b>examiner</b>.",
  zeit: "etwa 45 Minuten",
  ziele: ["👀 I say who is doing what – with colours and clothes.", "💭 I know the difference between a fact and a guess.", "🧩 I build a talk in the right order.", "🎤 I answer follow-up questions about my own life."],
  quiz: { profi: "Everyday picture pro" },
  glossar: {
    examiner: ["examiner", "Prüferin oder Prüfer. In der mündlichen Prüfung stellt sie oder er dir Fragen."],
    followup: ["follow-up question", "Anschlussfrage. Sie geht vom Bild aus, fragt aber nach dir: Do you help at home? Would you like to …?"],
    fact: ["fact", "Tatsache. Etwas, das du auf dem Bild wirklich siehst: A boy is carrying plates."],
    parttime: ["part-time job", "Nebenjob. Man arbeitet nur einige Stunden in der Woche, zum Beispiel nach der Schule oder am Wochenende."]
  },
  stationen: [
    { kurz: "Kitchen", ober: "At home", titel: "Picture 1: cooking together", teile: [
      { art: "text", html: "<p class=\"lead\">In the speaking test you have <b>30 seconds</b> to look at your picture. Then the <button class=\"term\" data-t=\"examiner\">examiner</button> asks questions. <span class=\"de\">Schau dir das Bild 30 Sekunden lang genau an. Tippe darauf, dann wird es größer.</span></p>" +
        pbtZeichnung("kitchen", "A family kitchen. On the left, a man in a blue apron stirs something in a red pot on the cooker. In the middle, a girl in a pink T-shirt cuts a tomato at a big table with tomatoes, carrots and a bowl of salad. On the right, a woman next to the fridge holds a bottle of milk and laughs. In the foreground on the right, a boy carries a pile of plates. In the foreground on the left, a brown dog looks at the table.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>cooker</b> <span class=\"de\">Herd</span> · <b>pot</b> <span class=\"de\">Topf</span> · <b>to stir</b> <span class=\"de\">umrühren</span> · <b>apron</b> <span class=\"de\">Schürze</span> · <b>fridge</b> <span class=\"de\">Kühlschrank</span> · <b>to cut</b> <span class=\"de\">schneiden</span> · <b>bowl</b> <span class=\"de\">Schüssel</span> · <b>pile of plates</b> <span class=\"de\">Stapel Teller</span> · <b>to lay the table</b> <span class=\"de\">den Tisch decken</span></p><p class=\"de\">Du weißt nicht sicher, ob es der Vater ist? Dann sag, was du siehst: <i>the man in the blue apron</i>.</p>" },
      { art: "mc", id: "kitchen-mc", tag: "Look and tick", titel: "What can you see?", lead: "Tick the correct answer. <span class=\"de\">Schau genau auf das Bild.</span>",
        fragen: [
          { q: "Who is standing at the cooker?", o: ["The man in the blue apron.", "The girl in the pink T-shirt.", "The boy with the plates.", "The woman with the milk."], a: 0,
            e: "The man on the left stands at the cooker. The girl is at the table, and the woman is next to the fridge." },
          { q: "Where is the dog?", o: ["In the foreground, on the left.", "Under the table.", "Next to the fridge.", "In the background, at the window."], a: 0,
            e: "The dog is in front of the table on the left. It is not under the table." },
          { q: "What is on the table?", o: ["Tomatoes, carrots and a bowl of salad.", "A pot, a pan and a kettle.", "Plates, glasses and a cake.", "Bread, cheese and milk."], a: 0,
            e: "The red pot is on the cooker, the plates are in the boy's hands, and the milk is in the woman's hand." }
        ] },
      { art: "luecke", id: "kitchen-luecke", tag: "Present progressive", titel: "Who is doing what?", lead: "Complete the sentences about the picture. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["The man ", { g: "is stirring" }, " something in a red pot."],
          ["The girl in the middle ", { g: "is cutting" }, " a tomato."],
          ["The boy ", { g: "is carrying" }, " a pile of plates."],
          ["The woman next to the fridge ", { g: "is laughing" }, ". She looks happy."],
          ["The dog ", { g: "is looking" }, " at the table."]
        ], extra: ["are cooking", "carry"] },
      { art: "offen", id: "kitchen-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>. <span class=\"de\">Die erste Frage geht um das Bild, die zweite um dich – das ist eine <button class=\"term\" data-t=\"followup\">Anschlussfrage</button>.</span>",
        fragen: [
          { q: "Who are the four people, and what are they going to do next? Make a guess.", m: "I think they are a family because they are cooking together. Maybe they are going to have dinner soon.", k: ["think|maybe|perhaps|might|looks like|look like", "family|parents|children|brother|sister|father|mother|friends", "eat|dinner|lunch|meal|going to|will|soon|table"], min: 2 },
          { q: "How do you help at home? What can you cook?", m: "I often lay the table and I take out the rubbish. I can cook pasta with tomato sauce.", k: ["lay|clean|tidy|wash|take out|shopping|rubbish|dishes|hoover|help|walk the dog", "cook|make|bake|pasta|pizza|eggs|rice|salad|soup|nothing"], min: 2 }
        ],
        tipp: "For a guess: I think … because … / Maybe they are going to … For your own life: I often … / I can cook …" }
    ] },
    { kurz: "Classroom", ober: "Fact or guess?", titel: "Picture 2: a presentation in class", teile: [
      { art: "text", html: "<p class=\"lead\">Some things you can <b>see</b> – that is a <button class=\"term\" data-t=\"fact\">fact</button>. Other things you only <b>think</b> – that is a guess. A good speaker shows the difference. <span class=\"de\">Was siehst du sicher, und was vermutest du nur?</span></p>" +
        pbtZeichnung("classroom", "A classroom during a presentation. In the middle, a poster on a stand shows the Earth, a tree and the sun. On the left of the poster, a girl in a yellow T-shirt points at it with a stick. On the right of the poster, a boy holds cards and speaks. On the far right, a teacher with a clipboard smiles. In the foreground, three pupils sit at their desks, seen from behind; the pupil on the left puts up a hand. In the background there is a green board, a window, a clock and a bookshelf.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>presentation</b> <span class=\"de\">Präsentation, Referat</span> · <b>poster</b> <span class=\"de\">Plakat</span> · <b>stand</b> <span class=\"de\">Ständer</span> · <b>note cards</b> <span class=\"de\">Karteikarten</span> · <b>to put up your hand</b> <span class=\"de\">sich melden</span> · <b>board</b> <span class=\"de\">Tafel</span> · <b>bookshelf</b> <span class=\"de\">Bücherregal</span> · <b>clipboard</b> <span class=\"de\">Klemmbrett</span> · <b>nervous</b> <span class=\"de\">aufgeregt</span></p>" },
      { art: "tf", id: "class-tf", tag: "True or false?", titel: "Check the picture", lead: "True or false? <span class=\"de\">Passt die Aussage zum Bild?</span>",
        aussagen: [
          ["A girl is pointing at the poster.", true],
          ["The poster shows the Earth, a tree and the sun.", true],
          ["The teacher is writing on the board.", false],
          ["One of the pupils in the foreground is putting up a hand.", true],
          ["The boy next to the poster is holding a laptop.", false],
          ["The bookshelf is on the left, next to the window.", false]
        ] },
      { art: "sort", id: "class-sort", tag: "Sort", titel: "Fact or guess?", lead: "Is it something you can see, or is it a guess? <span class=\"de\">Tatsache (siehst du) oder Vermutung (denkst du dir)?</span>",
        buckets: ["Fact: I can see it", "Guess: I think so"],
        items: [{ t: "Three pupils are sitting in the foreground.", b: 0 }, { t: "The teacher is holding a clipboard.", b: 0 }, { t: "There is a clock next to the board.", b: 0 }, { t: "The boy is holding cards in his hand.", b: 0 },
                { t: "I think the presentation is about the environment.", b: 1 }, { t: "Maybe the pupil on the left wants to ask a question.", b: 1 }, { t: "The teacher might give them a good mark.", b: 1 }, { t: "It looks like the boy is a bit nervous.", b: 1 }] },
      { art: "offen", id: "class-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>.",
        fragen: [
          { q: "What is the presentation about? Make a guess and give a reason from the picture.", m: "I think the presentation is about the environment because the poster shows the Earth and a tree. Maybe the pupils are talking about how to protect nature.", k: ["think|maybe|perhaps|might|looks like|look like", "because", "earth|world|tree|sun|poster|environment|nature|planet|climate"], min: 2 },
          { q: "Do you like giving presentations? Why (not)?", m: "No, I do not like giving presentations because I am always nervous. But I like making a poster with a partner.", k: ["yes|no|like|don't|do not|love|hate", "because", "nervous|fun|interesting|difficult|easy|shy|proud|practise|friends|partner|class|speak"], min: 2 }
        ],
        tipp: "Guess with a reason: I think … because the poster shows … For your own life: Yes, I do, because … / No, I do not, because …" }
    ] },
    { kurz: "Schoolyard", ober: "Avoid mistakes", titel: "Picture 3: a green day at school", teile: [
      { art: "text", html: "<p class=\"lead\">Many pupils lose points with the same small mistakes: <i>there is</i> or <i>there are</i>? <i>throw</i> or <i>is throwing</i>? <span class=\"de\">Bei diesem Bild achtest du besonders auf die Form der Verben.</span></p>" +
        pbtZeichnung("recycling", "A schoolyard on a sunny day. In the middle there are three bins: yellow, blue and green. In the foreground on the left, a girl throws a plastic bottle into the yellow bin and laughs. On the right, a boy carries a pile of paper. On the left, a teacher with a clipboard points at the bins. In the background on the right, two pupils plant a small tree; one of them waters it. Behind them there is the school building with two bikes in front of it.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>schoolyard</b> <span class=\"de\">Schulhof</span> · <b>bin</b> <span class=\"de\">Tonne, Mülleimer</span> · <b>rubbish</b> <span class=\"de\">Müll</span> · <b>to throw</b> <span class=\"de\">werfen</span> · <b>plastic bottle</b> <span class=\"de\">Plastikflasche</span> · <b>pile of paper</b> <span class=\"de\">Stapel Papier</span> · <b>to plant a tree</b> <span class=\"de\">einen Baum pflanzen</span> · <b>to water</b> <span class=\"de\">gießen</span> · <b>to recycle</b> <span class=\"de\">wiederverwerten</span></p>" },
      { art: "mc", id: "green-mc", tag: "Look and tick", titel: "What can you see?", lead: "Tick the correct answer. <span class=\"de\">Schau genau auf das Bild.</span>",
        fragen: [
          { q: "How many bins can you see, and what colours are they?", o: ["Three: yellow, blue and green.", "Two: yellow and blue.", "Three: red, blue and green.", "Four: yellow, blue, green and black."], a: 0,
            e: "There are three bins in the middle of the picture. Numbers and colours make your talk exact." },
          { q: "What is the girl in the foreground doing?", o: ["She is throwing a bottle into the yellow bin.", "She is carrying paper to the blue bin.", "She is planting a tree.", "She is riding a bike."], a: 0,
            e: "The girl holds a plastic bottle over the yellow bin. The boy on the right carries the paper." },
          { q: "Where are the two pupils with the small tree?", o: ["In the background, on the right.", "In the foreground, on the left.", "In the middle, next to the bins.", "Behind the school building."], a: 0,
            e: "They are small and far away, so they are in the background. You can see them on the right, behind the boy with the paper." }
        ] },
      { art: "markieren", id: "green-fehler", tag: "Find the mistakes", titel: "A talk with three mistakes", finde: "the three mistakes", toleranz: 0,
        satz: "In the picture there [[is]] three bins. A girl [[throw]] a bottle into the yellow bin, and a boy is [[carry]] a pile of paper.",
        e: "Three bins = there are. For what you see now: A girl is throwing a bottle … and a boy is carrying a pile of paper." },
      { art: "offen", id: "green-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>.",
        fragen: [
          { q: "What are the pupils doing for the environment? Describe two things you can see.", m: "A girl is throwing a plastic bottle into the yellow bin, so the pupils are sorting their rubbish. In the background, two pupils are planting a tree.", k: ["throwing|sorting|recycling|carrying|collecting|putting", "planting|tree|watering", "bin|bottle|paper|rubbish|plastic"], min: 2 },
          { q: "What do you do for the environment at home or at school?", m: "At home we sort our rubbish and I use my bottle again and again. I go to school by bike, not by car.", k: ["sort|recycle|save|use|switch off|turn off|buy|plant|reuse|go|walk|ride", "rubbish|plastic|paper|water|energy|light|bottle|bag|car|bike|bus|tree"], min: 2 }
        ],
        tipp: "About the picture: A girl is …-ing … / Two pupils are …-ing … For your own life: At home we … / I always …" }
    ] },
    { kurz: "Café", ober: "Build a talk", titel: "Picture 4: a job in a café", teile: [
      { art: "text", html: "<p class=\"lead\">Maybe you will have a <button class=\"term\" data-t=\"parttime\">part-time job</button> one day – in a café like this one? Here you put a whole talk in the right order. <span class=\"de\">Überblick, Menschen und Dinge, Handlungen, Vermutung, Stimmung, Meinung.</span></p>" +
        pbtZeichnung("cafe", "Inside a café. In the foreground, a young waiter in a white apron carries a tray with two glasses of orange juice. On the left, two young guests sit at a table: a girl laughs and holds a cup, a boy works on a laptop. On the right, a woman in a green apron pours coffee behind the counter; a man pays with his phone. On the counter there is a coffee machine and a cake under a glass cover. In the background there is a big window, two pictures, three lamps and shelves with cups.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>waiter / waitress</b> <span class=\"de\">Kellner / Kellnerin</span> · <b>tray</b> <span class=\"de\">Tablett</span> · <b>counter</b> <span class=\"de\">Theke</span> · <b>guest</b> <span class=\"de\">Gast</span> · <b>to serve</b> <span class=\"de\">bedienen</span> · <b>to pour</b> <span class=\"de\">eingießen</span> · <b>to pay</b> <span class=\"de\">bezahlen</span> · <b>shelf, shelves</b> <span class=\"de\">Regal, Regale</span> · <b>tip</b> <span class=\"de\">Trinkgeld</span></p>" },
      { art: "tf", id: "cafe-tf", tag: "True or false?", titel: "Check the picture", lead: "True or false? <span class=\"de\">Passt die Aussage zum Bild?</span>",
        aussagen: [
          ["A waiter is carrying two glasses of orange juice on a tray.", true],
          ["The two guests on the left are standing at the counter.", false],
          ["The woman behind the counter is pouring coffee.", true],
          ["A man at the counter is paying with his phone.", true],
          ["There is a cake on the counter.", true],
          ["The window is on the right, behind the counter.", false]
        ] },
      { art: "ordnen", id: "cafe-ordnen", tag: "Order", titel: "A talk about the café", lead: "Put the sentences of the talk in the right order. <span class=\"de\">Denke an die Schritte: Überblick – Menschen und Dinge – Handlungen – Vermutung – Stimmung – Meinung.</span>",
        schritte: ["This picture shows a café with guests and staff.", "I can see five people, a counter and a big window.", "In the foreground, a young waiter is carrying a tray, and on the left two guests are sitting at a table.", "Maybe the waiter is a student and this is his part-time job.", "The café looks friendly, and everybody seems relaxed.", "I would like to work there because I like talking to people."] },
      { art: "offen", id: "cafe-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>.",
        fragen: [
          { q: "How do the two guests on the left feel? Give a reason from the picture.", m: "I think they feel happy and relaxed because the girl is laughing. Maybe they are friends and they are meeting after school.", k: ["think|maybe|perhaps|might|looks like|look", "happy|relaxed|good|fine|fun|glad", "because|laughing|smiling|friends"], min: 2 },
          { q: "Would you like to have a part-time job in a café? Why (not)?", m: "Yes, I would like to work in a café because I like talking to people. But I would not like to work at the weekend.", k: ["yes|no|would|wouldn't|would not", "because|but", "people|money|earn|tired|weekend|stressful|fun|friendly|job|work|early|late"], min: 2 }
        ],
        tipp: "Feelings with a reason: I think they feel … because … For your own life: Yes, I would, because … / No, I would not, because …" }
    ] },
    { kurz: "Your turn", ober: "Now speak!", titel: "Your turn: speaker and examiner", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Work with a partner. Choose <b>one</b> of the four pictures. First you make a speaking note, then you speak – and your partner is the examiner. <span class=\"de\">Wähle ein Bild. Erst Stichpunkte schreiben, dann sprechen. Danach tauscht ihr die Rollen und nehmt ein anderes Bild.</span></p>" +
        "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin-top:10px\">" +
        pbtZeichnung("kitchen", "A: A family cooks together in a kitchen.", "A · Kitchen") +
        pbtZeichnung("classroom", "B: Two pupils give a presentation in a classroom.", "B · Classroom") +
        pbtZeichnung("recycling", "C: Pupils sort rubbish and plant a tree in a schoolyard.", "C · Schoolyard") +
        pbtZeichnung("cafe", "D: A waiter carries drinks in a café.", "D · Café") + "</div>" },
      { art: "schreiben", id: "sprechzettel", tag: "Speaking note", titel: "Write your speaking note", min: 60,
        auftrag: "<p><b>Write your speaking note</b> (60 words or more). Key words or short sentences are OK.</p><ul><li>In your first sentence, say <b>which picture</b> you have chosen (A, B, C or D).</li><li>Follow the steps: overview – people and things – where – actions – guess – mood – opinion.</li><li>Use <i>is / are + -ing</i> for the actions and give <b>one guess with a reason</b>.</li></ul>",
        starter: ["I have chosen picture …", "This picture shows …", "In the foreground, …", "In the background, …", "On the left / On the right, …", "… is / are …-ing.", "I think … because …", "I like the picture because …"],
        kriterien: ["Der erste Satz nennt das gewählte Bild (A, B, C oder D).", "Die Notizen geben einen Überblick und sagen, wo etwas ist (zum Beispiel foreground, background, on the left).", "Mindestens zwei Handlungen stehen im present progressive (is / are + -ing).", "Es gibt eine Vermutung mit Grund (I think … because …) und eine Meinung.", "Die Sätze oder Stichpunkte sind verständlich und richtig geschrieben."] },
      { art: "text", html: "<p class=\"lead\"><b>Speak for one minute</b> – then the examiner asks. <span class=\"de\">Wer spricht, nutzt nur den Sprechzettel. Wer prüft, stellt Fragen und gibt Rückmeldung.</span></p>" +
        "<div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · Speaker</h4><ul><li>Look at your picture for <b>30 seconds</b>.</li><li>Start: <i>This picture shows …</i></li><li>Speak for <b>one minute</b>. Use a timer.</li><li>Answer the questions in whole sentences and give a reason.</li><li>If you forget a word, say it in another way: <i>It is a thing for …</i></li></ul></div>" +
        "<div class=\"sprech-karte b\"><h4>Card B · Examiner</h4><ul><li>Listen first. Do not help.</li><li>Ask two questions about the picture: <i>Who is …? · What is … doing? · How does … feel? Why?</i></li><li>Ask one follow-up question: <i>Do you help at home? · Do you like …? · Would you like to work there?</i></li><li>Feedback: <i>I liked …</i> and <i>Next time, please …</i></li></ul></div></div>" },
      { art: "offen", id: "pruefer-fragen", m7: true, tag: "Challenge · Be the examiner", titel: "Write examiner questions", lead: "Write <b>two questions</b> an examiner could ask about your picture: one about the picture and one follow-up question. <span class=\"de\">Freiwillig: Denke dir Prüfungsfragen aus. Wer gute Fragen stellen kann, ist auf die Antworten vorbereitet.</span>",
        fragen: [
          { q: "Which two questions could an examiner ask about your picture?", m: "What is the girl at the table doing? Do you often cook with your family?", k: ["what|who|where|why|how|which", "do you|would you|can you|have you|are you|is |are |does "], min: 2 }
        ],
        tipp: "Question about the picture: Who is …? / What is … doing? Follow-up question: Do you …? / Would you like to …?" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to do well in the picture talk", lead: "True or false? <span class=\"de\">Aussagen über das Gespräch zum Bild.</span>",
        aussagen: [
          ["I say \"the man in the blue apron\" when I am not sure who a person is.", true],
          ["Colours and clothes help the listener to find a person in the picture.", true],
          ["\"The boy carry plates\" is a correct sentence about a picture.", false],
          ["Follow-up questions are often about my own life and my opinion.", true],
          ["When the examiner asks a question, one word is enough.", false]
        ] },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I do not know who the people are, so I ", { g: "guess" }, ": I think they are a family."],
          ["I say what people are ", { g: "wearing" }, ": the girl in the pink T-shirt."],
          ["There ", { g: "are" }, " three bins, and there is one tree."],
          ["After my talk, the examiner asks ", { g: "questions" }, "."],
          ["I always give a ", { g: "reason" }, " with because."]
        ], extra: ["answers", "be"] }
    ] }
  ],
  weiter: { text: "Well done! You have worked with four pictures from everyday life. Swap roles with your partner and try another picture." }
});
