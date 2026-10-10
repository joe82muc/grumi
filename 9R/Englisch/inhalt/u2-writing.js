/* Englisch 9R · Unit 2 Exploring India · Writing: A story in pictures
   (Geschichte zu Bildern schreiben: Mustergeschichte lesen, Zeit- und Verbindungswörter lernen, Grammatik der Unit –
   word order und simple present/simple past – im Schreiben, dann planen, schreiben, prüfen, überarbeiten, abgeben)
   LehrplanPLUS E9 2.1 Schreiben (Geschichte zu Bildern, etwa 100 Wörter, Anfang – Mitte – Schluss), E9 3 (Texte planen und
   überarbeiten), E9 5 (Indien: Alltag junger Leute).
   Text: „The Ball in the Shop“ (texte/u2/writing-cricket-street.js) – der Ort Kesarwadi und die Personen sind erfunden.
   Bildkarten: eigene Bilder in Worten und Emojis (Schreibauftrag: Zugfahrt; Mustergeschichte: Cricket auf der Straße). */
D7Kit.seite({
  id: "u2-writing",
  titel: "Writing: A story in pictures",
  einleitung: "You see a row of pictures and write a story about them. First you read a model story and learn useful words. Then you check word order and tenses. At the end you plan, write, check and revise your own story – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["🖼️ I tell a story with a beginning, a middle and an end.", "⏳ I use words like first, then, suddenly, after that and in the end.", "🔤 I use the right word order and the right tense.", "📝 I plan, write, check and revise my own story."],
  quiz: { profi: "Story writing pro" },
  glossar: {
    beginning: ["beginning", "Der Anfang der Geschichte: Wer ist da, wo sind sie und wann passiert es?"],
    middle: ["middle", "Der Mittelteil der Geschichte: Hier passiert das Besondere, zum Beispiel ein Problem."],
    ending: ["ending", "Der Schluss der Geschichte: Hier endet das Problem, und du sagst, wie sich die Person fühlt."],
    narrow: ["narrow", "Schmal: Eine narrow street ist eine enge Straße, in die kaum ein Auto passt."],
    revise: ["to revise", "Überarbeiten: den eigenen Text noch einmal lesen und verbessern."]
  },
  haupttext: "u2-write-story",
  stationen: [
    { kurz: "Model", ober: "1 · A model story", titel: "Pictures and story", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the four pictures. Then read the story. <span class=\"de\">Schau dir die vier Bildkarten an und lies dann die Geschichte. Der Ort Kesarwadi und die Personen sind erfunden.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Picture 1 🏏🏘️</h4><p>Vikram and his friends play cricket in a <button class=\"term\" data-t=\"narrow\">narrow</button> street after school.</p></div><div class=\"sprech-karte a\"><h4>Picture 2 🏏💥🍊</h4><p>The ball flies into a shop. A box of oranges falls over.</p></div><div class=\"sprech-karte b\"><h4>Picture 3 😟🙏</h4><p>The boys are quiet. Vikram says sorry to the shop owner.</p></div><div class=\"sprech-karte b\"><h4>Picture 4 🍬😊</h4><p>The boys help with the oranges. Then everybody smiles.</p></div></div>" },
      { art: "lesetext", lesetext: "u2-write-story" },
      { art: "mc", id: "wer", tag: "Understand", titel: "What is the story about?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Where do the boys play cricket?", o: ["In a narrow street.", "In a big stadium.", "In a park.", "On the beach."], a: 0,
            e: "The text says: in a narrow street in Kesarwadi." },
          { q: "What happens to the ball?", o: ["It lands in Mr Lobo's shop.", "It hits a cow.", "It falls into a river.", "It breaks a car window."], a: 0,
            e: "The ball flies over a cow and lands in the shop." },
          { q: "How does Mr Lobo react?", o: ["He smiles and asks the boys to play in the park next time.", "He shouts at the boys.", "He calls the police.", "He keeps the ball."], a: 0,
            e: "He is friendly. He only says that the boys should play in the park next time." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the story?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-write-story",
        fragen: [
          { q: "Where does the ball land?", zeilen: [5, 5], e: "The ball lands in Mr Lobo's shop.", tipp: "Look for the word landed." },
          { q: "In which lines does Vikram say sorry?", zeilen: [8, 9], e: "Vikram speaks in direct speech: I'm very sorry.", tipp: "Look for the speech marks." },
          { q: "How does the story end?", zeilen: [14, 15], e: "The ending: Mr Lobo gives every boy a sweet, and Vikram gets his ball back.", tipp: "Look at the last lines." }
        ] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "Beginning – middle – end", lead: "Put the parts of the story in the right order. <span class=\"de\">Bringe die Teile der Geschichte in die richtige Reihenfolge.</span>",
        schritte: ["Vikram and his friends played cricket in the street.", "The ball landed in the shop and the oranges fell over.", "Vikram said sorry to Mr Lobo.", "The boys picked up the oranges.", "Mr Lobo gave every boy a sweet."] }
    ] },
    { kurz: "Words", ober: "2 · Useful words", titel: "Words for your story", teile: [
      { art: "merke", kopf: "STORY TIP", html: "<p>A good story has three parts: the <button class=\"term\" data-t=\"beginning\">beginning</button> (who, where, when), the <button class=\"term\" data-t=\"middle\">middle</button> (what happens) and the <button class=\"term\" data-t=\"ending\">ending</button> (how it ends). Give your story a <b>title</b>. Use <b>time words</b> and <b>linking words</b> so that the reader can follow. Use direct speech only once or twice.</p>" },
      { art: "sort", id: "zeitwoerter", tag: "Sort", titel: "Where does the word fit best?", lead: "Put the phrases into the right box.",
        buckets: ["Beginning", "Middle", "End"],
        items: [{ t: "One morning, …", b: 0 }, { t: "It was a sunny day.", b: 0 }, { t: "Suddenly, …", b: 1 }, { t: "After that, …", b: 1 }, { t: "Then, …", b: 1 },
                { t: "In the end, …", b: 2 }, { t: "At last, …", b: 2 }, { t: "Finally, …", b: 2 }] },
      { art: "paare", id: "paare", tag: "Match", titel: "German – English", lead: "Find the pairs. <span class=\"de\">Verbinde das deutsche Wort mit dem englischen.</span>",
        paare: [["zuerst", "first"], ["dann", "then"], ["plötzlich", "suddenly"], ["danach", "after that"], ["am Ende", "in the end"], ["eines Tages", "one day"]] },
      { art: "mc", id: "bindewort", tag: "Linking words", titel: "Which word fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Something unexpected happens. Which word shows this?", o: ["Suddenly", "In the end", "Every day", "Because"], a: 0,
            e: "Suddenly means: all at once, without warning. It is perfect for the middle of a story." },
          { q: "Which sentence is a good direct speech sentence?", o: ["\"Stop!\" Tara shouted.", "Tara shouted stop.", "Tara shouted \"Stop!\" she.", "\"Stop!\" shouted Tara she."], a: 0,
            e: "Put the spoken words in speech marks, then write who spoke and how: \"Stop!\" Tara shouted." }
        ] }
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
      { art: "markieren", id: "verben", tag: "Mark", titel: "Find the verbs", finde: "the verbs in the simple past", toleranz: 0,
        satz: "Tara [[ran]] to the station and [[bought]] a ticket, but the train [[left]] at once.",
        e: "ran, bought and left are the simple past of run, buy and leave. All three are irregular." },
      { art: "ordnen", id: "satz1", tag: "Word order", titel: "Build the sentence", lead: "Put the parts in the right order: manner – place – time. <span class=\"de\">Bringe die Satzteile in die richtige Reihenfolge.</span>",
        schritte: ["Tara", "walked", "quickly", "to the station", "in the morning."] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["The boys played happily in the street after school.", "The boys played in the street happily after school.", "The boys played after school in the street happily.", "The boys happily played after school in the street."], a: 0,
            e: "The order is manner (happily), place (in the street), time (after school)." },
          { q: "Which sentence is correct?", o: ["Vikram hit the ball very hard.", "Vikram hit very hard the ball.", "Hit Vikram the ball very hard.", "Vikram the ball hit very hard."], a: 0,
            e: "Keep the order subject – verb – object: Vikram (subject) hit (verb) the ball (object)." },
          { q: "Which sentence is correct for a story that happened yesterday?", o: ["Yesterday Aunt Sunita did not find her keys.", "Yesterday Aunt Sunita does not find her keys.", "Yesterday Aunt Sunita did not found her keys.", "Yesterday Aunt Sunita not found her keys."], a: 0,
            e: "After did not the verb stays in its base form: did not find." }
        ] }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your picture story", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps. Kesarwadi ist ein erfundener Ort.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Picture 1 🌅🚉</h4><p>Early morning at the small station in Kesarwadi. Tara and her Aunt Sunita wait on the platform. Tara has a blue backpack.</p></div><div class=\"sprech-karte a\"><h4>Picture 2 🚆👥</h4><p>The train arrives. It is full of people. Tara and Aunt Sunita find two seats by the window.</p></div><div class=\"sprech-karte b\"><h4>Picture 3 😱🎒</h4><p>The train starts to move. Tara looks at the bench on the platform: her backpack is still there!</p></div><div class=\"sprech-karte b\"><h4>Picture 4 🏃‍♂️🎒</h4><p>A railway worker runs along the train. He has the backpack in his hand.</p></div><div class=\"sprech-karte b\"><h4>Picture 5 🤝😊</h4><p>Tara takes the backpack through the window and says thank you. Aunt Sunita laughs.</p></div></div>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "The backpack on the platform",
        plan: [
          { id: "title", label: "Title", hilfe: "kurz und neugierig machend, z. B. mit backpack oder platform", zeilen: 1 },
          { id: "beginning", label: "Beginning: who, where, when?", hilfe: "Stichpunkte: Tara, Aunt Sunita, station, early morning", zeilen: 2 },
          { id: "pictures", label: "Picture by picture: what happens?", hilfe: "3 bis 4 Dinge, mit first, then, suddenly, after that", zeilen: 4 },
          { id: "ending", label: "Ending: how does it end?", hilfe: "in the end, Dank, Lachen", zeilen: 2 },
          { id: "feeling", label: "Feeling and speech", hilfe: "Wie fühlt sich Tara? Ein Satz mit direkter Rede", zeilen: 1 }
        ],
        auftrag: { R: "<p>Look at the five picture cards above. Write the story (about 80–100 words) in the simple past.</p><ul><li>Give your story a title.</li><li>Say who, where and when at the beginning.</li><li>Use time and linking words (first, then, suddenly, after that, in the end).</li><li>Write one sentence with direct speech and say how Tara feels.</li></ul><p><span class=\"de\">Schreibe die Geschichte zu den fünf Bildkarten in der Vergangenheit: mit Überschrift, Anfang, Mittelteil und Schluss, Zeit- und Verbindungswörtern und einem Satz mit direkter Rede.</span></p>" },
        min: { R: 80 },
        kriterien: { R: ["My story has a title.", "The beginning says who, where and when.", "I tell the story in the simple past.", "I use time and linking words (first, then, suddenly, after that, in the end).", "I check word order: manner – place – time.", "I write one sentence with direct speech."] },
        starter: ["Early one morning, …", "First, Tara and Aunt Sunita …", "Then the train …", "Suddenly Tara saw …", "\"…!\" she shouted.", "In the end, …"] }
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
      { art: "offen", id: "rede", m7: true, tag: "Challenge", titel: "Write direct speech", lead: "Write one sentence with direct speech for your story. <span class=\"de\">Schreibe einen Satz mit direkter Rede für deine Geschichte.</span>",
        fragen: [{ q: "Direct speech: …", m: "\"Stop the train!\" Tara shouted.", k: ["said|shouted|asked|cried|called", "stop|wait|help|thank|sorry|please"], min: 4 }],
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
  weiter: { text: "Well done! You can plan, write and revise a story to pictures. Use the same steps for other writing tasks." }
});
