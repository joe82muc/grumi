/* Englisch 9M · Unit 2 Exploring India · Writing: A story in pictures · M-Fassung
   (Geschichte zu Bildern schreiben: Mustergeschichte lesen, Zeit- und Verbindungswörter lernen, Grammatik der Unit –
   word order und simple present/simple past – im Schreiben, dann planen, schreiben, prüfen, überarbeiten, abgeben)
   LehrplanPLUS E9 2.1 Schreiben (Geschichte zu Bildern, M-Zug: etwa 130–150 Wörter, Gefühle, wörtliche Rede, Spannung), E9 3 (Texte
   planen und überarbeiten), E9 5 (Indien: Alltag junger Leute).
   Text: „The Ball in the Shop“ (texte/u2/writing-cricket-street-m.js) – der Ort Kesarwadi und die Personen sind erfunden.
   Bilder: u2-story-cricket (Mustergeschichte, vier Bilder), u2-story-train (Schreibauftrag, fünf Bilder). */
D7Kit.seite({
  id: "u2-writing",
  titel: "Writing: A story in pictures",
  einleitung: "You see a row of pictures and write a story about them. First you read a rich model story and learn how to build tension, show feelings and link your sentences. Then you check word order and tenses. At the end you plan, write, check and revise a longer story of your own – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["🖼️ I tell a story with a beginning, a middle and an end.", "😟 I show feelings and use direct speech to make my story exciting.", "⏳ I link my sentences with suddenly, although, while, as soon as and in the end.", "📝 I plan, write, check and revise my own story."],
  quiz: { profi: "Story writing pro" },
  glossar: {
    beginning: ["beginning", "Der Anfang der Geschichte: Wer ist da, wo sind sie und wann passiert es?"],
    middle: ["middle", "Der Mittelteil der Geschichte: Hier passiert das Besondere, zum Beispiel ein Problem, das Spannung erzeugt."],
    ending: ["ending", "Der Schluss der Geschichte: Hier endet das Problem, und du sagst, wie sich die Person fühlt."],
    narrow: ["narrow", "Schmal: Eine narrow street ist eine enge Straße, in die kaum ein Auto passt."],
    tension: ["tension", "Spannung: Der Leser möchte wissen, wie es weitergeht, zum Beispiel nach einem lauten Knall."],
    revise: ["to revise", "Überarbeiten: den eigenen Text noch einmal lesen und verbessern."]
  },
  haupttext: "u2-write-story-m",
  stationen: [
    { kurz: "Model", ober: "1 · A model story", titel: "Pictures and story", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture story. What happens in each picture? Tell the story in four sentences before you read.</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-story-cricket.jpg\" alt=\"A picture story in four panels: boys play cricket in a street, the ball flies into a fruit shop, a boy says sorry, the shop owner gives the boys sweets.\" style=\"width:100%;border-radius:14px\"></figure><p>How do you think the boy in the red T-shirt feels in picture three? Why?</p>" },
      { art: "text", html: "<p class=\"lead\">Now read the story to the four pictures. Think about <i>how</i> the writer builds <button class=\"term\" data-t=\"tension\">tension</button>. Kesarwadi and the people are invented.</p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Picture 1 🏏🏘️</h4><p>cricket · narrow street · cow</p></div><div class=\"sprech-karte a\"><h4>Picture 2 🏏💥🍊</h4><p>ball · shop · oranges</p></div><div class=\"sprech-karte b\"><h4>Picture 3 😟🙏</h4><p>sorry · shop owner</p></div><div class=\"sprech-karte b\"><h4>Picture 4 🍬😊</h4><p>oranges · sweets · ball back</p></div></div>" },
      { art: "lesetext", lesetext: "u2-write-story-m" },
      { art: "mc", id: "wer", tag: "Understand", titel: "Understand the story", lead: "Tick the correct answer.",
        fragen: [
          { q: "Why does Vikram hit the ball so hard?", o: ["He wants to impress his friends.", "He wants to break something.", "He is angry with Mr Lobo.", "He wants to wake the cow."], a: 0,
            e: "The text says that Vikram wanted to impress his friends." },
          { q: "What does \"Nobody dared to speak\" show?", o: ["The boys were shocked and afraid.", "The boys did not know English.", "The boys were bored.", "The boys wanted to run away and laugh."], a: 0,
            e: "When nobody dares to speak, they are frightened of what will happen next." },
          { q: "How does Mr Lobo react to Vikram's apology?", o: ["He stays friendly and only asks the boys to play in the park next time.", "He makes Vikram pay for the oranges.", "He calls the boys' parents.", "He is angry, but he hides it."], a: 0,
            e: "He smiles and says that nobody is hurt – he only gives a piece of advice." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the story?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-write-story-m",
        fragen: [
          { q: "Where does the ball land?", zeilen: [7, 7], e: "The ball lands in Mr Lobo's fruit shop.", tipp: "Look for the word landed." },
          { q: "Where does Vikram say sorry in direct speech?", zeilen: [12, 14], e: "Vikram speaks in direct speech and offers to pay: I'm so sorry, Mr Lobo.", tipp: "Look for the speech marks." },
          { q: "Where do you find the ending of the story?", zeilen: [19, 20], e: "The ending: Mr Lobo gives every boy a sweet, and Vikram gets his ball back.", tipp: "Look at the last lines." }
        ] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "Beginning – middle – end", lead: "Put the parts of the story in the right order. <span class=\"de\">Bringe die Teile der Geschichte in die richtige Reihenfolge.</span>",
        schritte: ["The boys played cricket in a narrow street.", "Vikram hit the ball into the fruit shop and a box of oranges tipped over.", "Vikram was afraid, but he said sorry to Mr Lobo.", "The boys collected all the oranges.", "Mr Lobo gave every boy a sweet and Vikram got his ball back."] }
    ] },
    { kurz: "Words", ober: "2 · Useful words", titel: "Words for your story", teile: [
      { art: "merke", kopf: "STORY TIP", html: "<p>A good story has three parts: the <button class=\"term\" data-t=\"beginning\">beginning</button> (who, where, when), the <button class=\"term\" data-t=\"middle\">middle</button> (what happens) and the <button class=\"term\" data-t=\"ending\">ending</button> (how it ends). Give your story a <b>title</b>. Use <b>time words</b> and <b>linking words</b> so that the reader can follow. Show <b>feelings</b> (<i>terrified, relieved</i>), use <b>adverbs</b> (<i>quietly, slowly</i>) and use direct speech once or twice.</p>" },
      { art: "sort", id: "zeitwoerter", tag: "Sort", titel: "Where does the phrase fit best?", lead: "Put the phrases into the right box.",
        buckets: ["Beginning", "Middle", "End"],
        items: [{ t: "One hot afternoon, …", b: 0 }, { t: "It was a sunny day.", b: 0 }, { t: "Suddenly, …", b: 1 }, { t: "Just then, …", b: 1 }, { t: "A moment later, …", b: 1 },
                { t: "In the end, …", b: 2 }, { t: "At last, …", b: 2 }, { t: "Finally, …", b: 2 }] },
      { art: "paare", id: "paare", tag: "Match", titel: "German – English", lead: "Find the pairs. <span class=\"de\">Verbinde das deutsche Wort mit dem englischen.</span>",
        paare: [["plötzlich", "suddenly"], ["obwohl", "although"], ["während", "while"], ["sobald", "as soon as"], ["am Ende", "in the end"], ["erleichtert", "relieved"], ["leise", "quietly"], ["eines Nachmittags", "one afternoon"]] },
      { art: "mc", id: "bindewort", tag: "Linking words", titel: "Which word fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Something unexpected happens. Which word shows this?", o: ["Suddenly", "In the end", "Every day", "Because"], a: 0,
            e: "Suddenly means: all at once, without warning. It is perfect for the middle of a story." },
          { q: "___ it was raining, the boys played cricket in the street.", o: ["Although", "Because", "So", "Then"], a: 0,
            e: "Rain would normally stop the game – that is a contrast, so you need although." },
          { q: "Which sentence is a good direct speech sentence?", o: ["\"Stop!\" Tara shouted.", "Tara shouted stop.", "Tara shouted \"Stop!\" she.", "\"Stop!\" shouted Tara she."], a: 0,
            e: "Put the spoken words in speech marks, then write who spoke and how: \"Stop!\" Tara shouted." }
        ] },
      { art: "offen", id: "gefuehl", m7: true, tag: "Explain", titel: "Show, don't tell", lead: "Instead of \"He was afraid\", a writer can show the feeling. Write one sentence that shows that a character is afraid, for example with his heart, his hands or his voice.",
        fragen: [{ q: "A sentence that shows fear: …", m: "His hands were shaking and his heart was beating fast.", k: ["hand|heart|voice|knee|legs|breath|eyes", "shak|beat|trembl|fast|quiet|cold|wide"], min: 2 }],
        tipp: "Describe what the body does, not the word afraid." }
    ] },
    { kurz: "Language", ober: "3 · Language check", titel: "Word order and tenses", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>Word order:</b> subject – verb – object: <u>Tara</u> <u>bought</u> <u>a ticket</u>. With extra information the order is <b>manner – place – time</b>: Tara walked <u>quickly</u> <u>to the station</u> <u>in the morning</u>.</li><li><b>Simple past</b> for the story: Tara <u>ran</u>, she <u>said</u>, they <u>went</u> (irregular verbs!). Questions and negatives with <i>did</i>: Did she run? She did not run.</li><li><b>Simple present</b> for things that are always true or happen every day: Tara <u>walks</u> to school every day. (he/she/it + <i>s</i>)</li></ul>" },
      { art: "sort", id: "tempus", tag: "Sort", titel: "Present or past?", lead: "Put the sentences into the right box. <span class=\"de\">Ein Satz im simple past erzählt, was damals passierte. Ein Satz im simple present beschreibt, was oft oder immer so ist.</span>",
        buckets: ["Simple present", "Simple past"],
        items: [{ t: "Tara walks to school every day.", b: 0 }, { t: "Vikram often plays cricket in the street.", b: 0 }, { t: "Mr Lobo never closes his shop early.", b: 0 }, { t: "Does Aunt Sunita work in a shop?", b: 0 },
                { t: "Yesterday Tara missed the train.", b: 1 }, { t: "Suddenly the ball broke a box.", b: 1 }, { t: "Last week Vikram did not play cricket.", b: 1 }, { t: "Did the boys help Mr Lobo?", b: 1 }] },
      { art: "luecke", id: "past", tag: "Gap text", titel: "Tell it in the past", lead: "Complete the text with the simple past. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["One day Tara ", { g: "got up" }, " very early."],
          ["She ", { g: "took" }, " her bag and ", { g: "ran" }, " to the bus stop."],
          ["Her uncle ", { g: "said" }, " goodbye, and she ", { g: "felt" }, " a bit nervous."]
        ], extra: ["runned", "taked"] },
      { art: "ordnen", id: "satz1", tag: "Word order", titel: "Build the sentence", lead: "Put the parts in the right order: manner – place – time. <span class=\"de\">Bringe die Satzteile in die richtige Reihenfolge.</span>",
        schritte: ["Tara", "walked", "quickly", "to the station", "in the morning."] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["The boys played happily in the street after school.", "The boys played in the street happily after school.", "The boys played after school in the street happily.", "The boys happily played after school in the street."], a: 0,
            e: "The order is manner (happily), place (in the street), time (after school)." },
          { q: "Which sentence is correct for a story that happened yesterday?", o: ["Yesterday Aunt Sunita did not find her keys.", "Yesterday Aunt Sunita does not find her keys.", "Yesterday Aunt Sunita did not found her keys.", "Yesterday Aunt Sunita not found her keys."], a: 0,
            e: "After did not the verb stays in its base form: did not find." }
        ] },
      { art: "offen", id: "verbinden", tag: "Write", titel: "Join the sentences", lead: "Join the two sentences into one with <i>although</i>: <b>Vikram was afraid. He walked into the shop.</b>",
        fragen: [{ q: "One sentence: …", m: "Although Vikram was afraid, he walked into the shop.", k: ["although", "afraid", "walked|went"], min: 3 }],
        tipp: "Start with Although and use a comma in the middle." },
      { art: "offen", id: "deutsch", m7: true, tag: "Mediation", titel: "Auf Deutsch zusammenfassen", lead: "Eine Freundin versteht kein Englisch. Fasse die Geschichte „The Ball in the Shop“ auf Deutsch in zwei bis drei Sätzen zusammen: Was passiert, und wie geht es aus?",
        fragen: [{ q: "Zusammenfassung auf Deutsch:", m: "Vikram spielt mit Freunden Cricket auf der Straße. Der Ball fliegt in einen Obstladen und eine Kiste Orangen kippt um. Vikram entschuldigt sich beim Besitzer, alle sammeln die Orangen auf, und am Ende bekommt Vikram seinen Ball zurück.", k: ["Cricket|Ball", "Orange|Obstladen|Laden", "entschuldig|Entschuldigung|leid"], min: 3 }],
        tipp: "Du musst nicht jeden Satz übersetzen – wichtig sind die Hauptinformationen." }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your picture story", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the pictures in order. Who are the people? What is the problem – and how does the story end?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-story-train.jpg\" alt=\"A picture story in five panels: a girl with a blue backpack and her aunt at a station, the full train, the backpack left on the bench, a railway worker runs with it, the girl gets it back.\" style=\"width:100%;border-radius:14px\"></figure><p>How does Tara feel in each picture?</p>" },
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps. Kesarwadi ist ein erfundener Ort.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Picture 1 🌅🚉</h4><p>early morning · small station · Tara, Aunt Sunita · blue backpack</p></div><div class=\"sprech-karte a\"><h4>Picture 2 🚆👥</h4><p>train arrives · full of people · two seats by the window</p></div><div class=\"sprech-karte b\"><h4>Picture 3 😱🎒</h4><p>train starts to move · backpack on the bench</p></div><div class=\"sprech-karte b\"><h4>Picture 4 🏃‍♂️🎒</h4><p>railway worker runs · backpack in his hand</p></div><div class=\"sprech-karte b\"><h4>Picture 5 🤝😊</h4><p>window · thank you · Aunt Sunita laughs</p></div></div>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "The backpack on the platform",
        plan: [
          { id: "title", label: "Title", hilfe: "kurz und neugierig machend, z. B. mit backpack oder platform", zeilen: 1 },
          { id: "beginning", label: "Beginning: who, where, when?", hilfe: "Stichpunkte: Tara, Aunt Sunita, station, early morning", zeilen: 2 },
          { id: "pictures", label: "Picture by picture: what happens? (tension!)", hilfe: "4 bis 5 Dinge, mit suddenly, while, as soon as, although", zeilen: 4 },
          { id: "ending", label: "Ending: how does it end?", hilfe: "in the end, Dank, Lachen", zeilen: 2 },
          { id: "feeling", label: "Feelings and speech", hilfe: "Wie fühlt sich Tara am Anfang, in der Mitte, am Ende? Ein bis zwei Sätze mit direkter Rede", zeilen: 2 }
        ],
        auftrag: {
          R: "<p>Look at the five picture cards above. Write the story (about 80–100 words) in the simple past.</p><ul><li>Give your story a title.</li><li>Say who, where and when at the beginning.</li><li>Use time and linking words (first, then, suddenly, after that, in the end).</li><li>Write one sentence with direct speech and say how Tara feels.</li></ul><p><span class=\"de\">Schreibe die Geschichte zu den fünf Bildern in der Vergangenheit: mit Überschrift, Anfang, Mittelteil und Schluss, Zeit- und Verbindungswörtern und einem Satz mit direkter Rede.</span></p>",
          M: "<p>Look at the five pictures above. Write the story (about 130–150 words) in the simple past. Make it exciting and include these points:</p><ul><li>a title</li><li>a beginning with <b>place and time</b> (who, where, when)</li><li>tension in the middle: what is the problem, and what does Tara think or feel?</li><li>direct speech (at least two sentences)</li><li>an ending that shows how Tara feels</li><li>at least four different linking words (suddenly, although, while, as soon as, then, in the end …)</li></ul><p><span class=\"de\">Schreibe die Geschichte zu den fünf Bildern in der Vergangenheit, spannend und mit Gefühlen. Erfinde Einzelheiten dazu, aber bleibe bei der Bildfolge.</span></p>"
        },
        min: { R: 80, M: 130 },
        kriterien: {
          R: ["My story has a title.", "The beginning says who, where and when.", "I tell the story in the simple past.", "I use time and linking words (first, then, suddenly, after that, in the end).", "I check word order: manner – place – time.", "I write one sentence with direct speech."],
          M: ["My story has a title, and the beginning says who, where and when.", "I tell the story in the simple past.", "I build tension in the middle and show how Tara feels.", "I use direct speech (at least two sentences).", "I use at least four different linking words (suddenly, although, while, as soon as, then, in the end …).", "The ending shows how Tara feels.", "I check word order: manner – place – time."]
        },
        starter: ["Early one morning, …", "While Tara was …", "Suddenly Tara saw …", "\"…!\" she shouted.", "As soon as …", "In the end, …"] }
    ] },
    { kurz: "Revise", ober: "5 · Check and revise", titel: "Make your text better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check a story", lead: "True or false?",
        aussagen: [
          ["A good way to check: read your story aloud.", true],
          ["A story needs a title, a beginning, a middle and an ending.", true],
          ["You use the simple present for the events of a story in the past.", false],
          ["You should put every sentence into direct speech.", false]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler.</span></p><blockquote>Last Saturday Tara <b>goes</b> to the market with Aunt Sunita. First they bought some mangoes at a small stall. <b>Then carried Tara</b> the heavy bag home. Suddenly it <b>start</b> to rain, so they ran into a shop. In the end they ate the mangoes there.</blockquote><p class=\"de\">Die drei fett gedruckten Stellen stimmen nicht.</p>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Last Saturday Tara goes to the market … How do you correct the verb?", o: ["Last Saturday Tara went to the market with Aunt Sunita.", "Last Saturday Tara goed to the market with Aunt Sunita.", "Last Saturday Tara going to the market with Aunt Sunita.", "Last Saturday Tara go to the market with Aunt Sunita."], a: 0,
            e: "Last Saturday is past time, so you need the simple past: went." },
          { q: "Then carried Tara the heavy bag home. How do you correct the word order?", o: ["Then Tara carried the heavy bag home.", "Then Tara the heavy bag carried home.", "Then carried the heavy bag Tara home.", "Tara then home the heavy bag carried."], a: 0,
            e: "In English the subject comes before the verb – also after then: Then Tara (subject) carried (verb) the heavy bag (object). Im Deutschen ist das anders: Dann trug Tara …" },
          { q: "Suddenly it start to rain. How do you correct it?", o: ["Suddenly it started to rain.", "Suddenly it starts to rain.", "Suddenly it did started to rain.", "Suddenly it starting to rain."], a: 0,
            e: "The story is in the past: started (regular verb with -ed)." }
        ] },
      { art: "offen", id: "rede", m7: true, tag: "Challenge", titel: "Write direct speech", lead: "Write one sentence with direct speech for your story and say how the person speaks. <span class=\"de\">Schreibe einen Satz mit direkter Rede für deine Geschichte.</span>",
        fragen: [{ q: "Direct speech: …", m: "\"Stop the train!\" Tara shouted nervously.", k: ["said|shouted|asked|cried|called|whispered", "stop|wait|help|thank|sorry|please"], min: 2 }],
        tipp: "Start like this: \"Wait!\" Tara shouted. " }
    ] },
    { kurz: "Check", ober: "6 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Steps and parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The steps of writing: ", { g: "plan" }, " – write – check – ", { g: "revise" }, " – submit."],
          ["A story has a ", { g: "beginning" }, ", a middle and an ending."],
          ["Word order: manner – ", { g: "place" }, " – time."]
        ], extra: ["price", "address"] }
    ] }
  ],
  weiter: { text: "Well done! You can plan, write and revise an exciting story to pictures. Use the same steps for other writing tasks." }
});
