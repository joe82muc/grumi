/* Englisch 9R · Unit 3 Discover South Africa · Writing: My role model
   (Text über ein Vorbild schreiben: Mustertext lesen, Wendungen und Eigenschaftswörter lernen, Grammatik der Unit –
   present perfect mit for und since gegen simple past, dazu past progressive im kurzen Unfallbericht – im Schreiben,
   dann planen, schreiben, prüfen, überarbeiten, abgeben)
   LehrplanPLUS E9 2.1 Schreiben (Text über ein Vorbild, etwa 100 Wörter), E9 3 (Texte planen und überarbeiten),
   E9 5 (Südafrika: Vorbilder).
   Text: „My Coach, My Role Model“ (texte/u3/writing-coach-dube.js) – Coach Dube, Naledi, Grandpa Elias, Sibusiso und der
   Ortsteil Riverside East sind erfunden. Das Vorbild im Schreibauftrag wählt das Kind selbst. */
D7Kit.seite({
  id: "u3-writing",
  titel: "Writing: My role model",
  einleitung: "You write a short text about a person you admire. First you read a model text and learn useful phrases and adjectives. Then you check for and since and the present perfect. At the end you plan, write, check and revise your own text – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["🌟 I say who my role model is and what the person has done.", "💬 I explain why I admire the person.", "🔤 I use for, since and the present perfect.", "📝 I plan, write, check and revise my own text."],
  quiz: { profi: "Role model writing pro" },
  glossar: {
    rolemodel: ["role model", "Ein Vorbild: eine Person, die du bewunderst und von der du etwas lernst."],
    admire: ["to admire", "Bewundern: Du findest eine Person richtig gut, weil sie etwas Besonderes tut."],
    brave: ["brave", "Mutig: Eine mutige Person hat auch in schwierigen Momenten keine Angst, etwas zu tun."],
    patient: ["patient", "Geduldig: Eine geduldige Person kann gut warten und bleibt freundlich."],
    generous: ["generous", "Großzügig: Eine großzügige Person gibt anderen gern etwas ab, zum Beispiel Zeit oder Geld."],
    revise: ["to revise", "Überarbeiten: den eigenen Text noch einmal lesen und verbessern."]
  },
  haupttext: "u3-write-role-model",
  stationen: [
    { kurz: "Model", ober: "1 · A model text", titel: "A text about a role model", teile: [
      { art: "text", html: "<p class=\"lead\">A <button class=\"term\" data-t=\"rolemodel\">role model</button> is a person you <button class=\"term\" data-t=\"admire\">admire</button>. Read the model text about one. <span class=\"de\">Lies den Mustertext über ein Vorbild. Riverside East ist ein erfundener Ortsteil, Coach Dube eine erfundene Person.</span></p>" },
      { art: "lesetext", lesetext: "u3-write-role-model" },
      { art: "mc", id: "wer", tag: "Understand", titel: "What is the text about?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Who is the writer's role model?", o: ["A football coach.", "A doctor.", "A teacher at school.", "A famous singer."], a: 0,
            e: "The text says: Coach Dube is a football coach for girls." },
          { q: "How many girls came to the first training?", o: ["Five girls.", "Forty girls.", "Six girls.", "Twelve girls."], a: 0,
            e: "At first only five girls came. Today more than forty girls train with her." },
          { q: "How did Coach Dube react when the team lost a match?", o: ["She smiled and talked about learning.", "She was angry with the girls.", "She stopped the training.", "She did not come to the next training."], a: 0,
            e: "She smiled and said: Losing is part of learning." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the text?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-write-role-model",
        fragen: [
          { q: "Where did the team start?", zeilen: [4, 5], e: "The team started on a dusty field behind the bus station.", tipp: "Look at the second paragraph." },
          { q: "What did Coach Dube say after the lost match?", zeilen: [9, 10], e: "She said: Losing is part of learning.", tipp: "Look for the speech marks." },
          { q: "What has the writer learned from her?", zeilen: [14, 15], e: "The writer has learned to work hard, be kind and never give up.", tipp: "Look at the last paragraph." }
        ] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "How the text is built", lead: "Put the parts of the text in the right order. <span class=\"de\">Bringe die Teile des Textes in die richtige Reihenfolge.</span>",
        schritte: ["Who is my role model?", "What did she start?", "What has she done for years?", "Why do I admire her?", "What have I learned from her?"] }
    ] },
    { kurz: "Words", ober: "2 · Useful words", titel: "Phrases and adjectives", teile: [
      { art: "merke", kopf: "PHRASES", html: "<ul><li><b>Who?</b> My role model is … / I would like to tell you about …</li><li><b>What has the person done?</b> She started … / He built … / She has always helped …</li><li><b>Why?</b> I admire her because … / He is a role model for me because …</li><li><b>What have I learned?</b> What I have learned from him is … / Because of her, I …</li></ul><p>Adjectives for people: <button class=\"term\" data-t=\"brave\">brave</button>, <button class=\"term\" data-t=\"patient\">patient</button>, <button class=\"term\" data-t=\"generous\">generous</button>, reliable, hard-working, helpful.</p>" },
      { art: "sort", id: "wendungen", tag: "Sort", titel: "Where does the sentence fit best?", lead: "Put the sentences into the right box.",
        buckets: ["Who is it?", "What did the person do?", "Why a role model?", "What I learned"],
        items: [{ t: "My role model is my neighbour.", b: 0 }, { t: "I would like to tell you about my uncle.", b: 0 },
                { t: "She started a small team.", b: 1 }, { t: "He built a library in his garden.", b: 1 },
                { t: "I admire her because she never gives up.", b: 2 }, { t: "He is a role model for me because he is generous.", b: 2 },
                { t: "What I have learned from her is to be patient.", b: 3 }, { t: "Because of him, I read every day now.", b: 3 }] },
      { art: "paare", id: "adj", tag: "Match", titel: "Adjectives for people", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit dem deutschen.</span>",
        paare: [["brave", "mutig"], ["patient", "geduldig"], ["generous", "großzügig"], ["reliable", "zuverlässig"], ["hard-working", "fleißig"], ["helpful", "hilfsbereit"]] },
      { art: "mc", id: "adjmc", tag: "Adjectives", titel: "Which word fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Naledi can always be trusted. She always comes on time and does what she promises. She is …", o: ["reliable", "generous", "brave", "lazy"], a: 0,
            e: "Reliable means: you can trust the person." },
          { q: "Which sentence explains why you admire a person?", o: ["I admire him because he helps everybody in the street.", "I admire him, but he helps everybody in the street.", "I admire him when he helps everybody in the street.", "I admire him so he helps everybody in the street."], a: 0,
            e: "Because gives the reason: you admire him for a reason." }
        ] }
    ] },
    { kurz: "Language", ober: "3 · Language check", titel: "For, since and the present perfect", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>Present perfect</b> = <i>has / have</i> + past participle. Use it for things that started in the past and are still true today: Coach Dube <u>has coached</u> us <u>for six years</u>. I <u>have known</u> her <u>since 2020</u>.</li><li><b>for</b> + a period of time: for six years, for two weeks. <b>since</b> + a starting point: since 2020, since I was ten, since Monday.</li><li><b>Simple past</b> for something that is finished: Last year our team lost a match. Two years ago he built a library.</li><li>Typical mistakes: <i>since three years</i> (right: <i>for</i> three years) and <i>I know her since 2020</i> (right: <i>I have known her since 2020</i>).</li></ul>" },
      { art: "sort", id: "forsince", tag: "Sort", titel: "for or since?", lead: "Put the time expressions into the right box. <span class=\"de\">for gehört zu einer Zeitspanne, since zu einem Anfangspunkt.</span>",
        buckets: ["for …", "since …"],
        items: [{ t: "six years", b: 0 }, { t: "two weeks", b: 0 }, { t: "a long time", b: 0 }, { t: "three hours", b: 0 },
                { t: "2019", b: 1 }, { t: "last summer", b: 1 }, { t: "I was ten", b: 1 }, { t: "Monday", b: 1 }] },
      { art: "luecke", id: "pp", tag: "Gap text", titel: "Present perfect", lead: "Complete the sentences with the present perfect. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["Coach Dube ", { g: "has trained" }, " our football team for six years."],
          ["I ", { g: "have known" }, " her since I was seven."],
          ["Grandpa Elias ", { g: "has lent" }, " books to the children in the street since 2015."]
        ], extra: ["has teached", "has knew"] },
      { art: "markieren", id: "verben", tag: "Mark", titel: "Find the present perfect", finde: "the verbs in the present perfect", toleranz: 0,
        satz: "Naledi [[has played]] football since 2020. Last summer she won a medal, and she [[has worn]] it every day since then.",
        e: "has played and has worn are the present perfect. Won is the simple past: last summer is a finished time." },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["Coach Dube has coached us for three years.", "Coach Dube has coached us since three years.", "Coach Dube coaches us since three years.", "Coach Dube is coaching us for three years."], a: 0,
            e: "Three years is a period of time, so you use for. And a thing that started in the past and goes on needs the present perfect." },
          { q: "Which sentence is correct?", o: ["I have known Sibusiso since 2020.", "I know Sibusiso since 2020.", "I knew Sibusiso since 2020.", "I am knowing Sibusiso since 2020."], a: 0,
            e: "The friendship started in 2020 and still goes on: I have known him since 2020." },
          { q: "Which sentence is correct?", o: ["Last year Naledi won the final.", "Last year Naledi has won the final.", "Last year Naledi has win the final.", "Last year Naledi is winning the final."], a: 0,
            e: "Last year is a finished time, so you use the simple past: won." }
        ] },
      { art: "mc", id: "unfall", tag: "Warm-up: accident report", titel: "Two sentences from an accident report", lead: "Tick the correct sentence. <span class=\"de\">Kleine Vorübung: Ein Unfallbericht erzählt, was gerade lief (past progressive), und was dann passierte (simple past).</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["While Sibusiso was walking home, a dog ran across the road.", "While Sibusiso walking home, a dog ran across the road.", "While Sibusiso was walking home, a dog was ran across the road.", "While Sibusiso were walking home, a dog ran across the road."], a: 0,
            e: "The longer action in the background uses was walking. The short action that interrupts it uses the simple past: ran." },
          { q: "Which sentence is correct?", o: ["He was carrying a bag when he fell.", "He carried a bag when he was falling.", "He was carry a bag when he fell.", "He was carrying a bag when he was fell."], a: 0,
            e: "Was carrying is the background. Fell is the short event that happened in the middle of it." }
        ] }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your text about a role model", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps. Wähle ein Vorbild, das du wirklich kennst: eine Person aus deiner Familie, dem Verein oder der Nachbarschaft. Du darfst auch eine bekannte Person wählen.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "My role model",
        plan: [
          { id: "who", label: "Who is my role model?", hilfe: "Name, wie du die Person kennst (Familie, Verein, Nachbarschaft), seit wann", zeilen: 2 },
          { id: "did", label: "What did / has the person done?", hilfe: "2 bis 3 Dinge: ein Ereignis im simple past, etwas bis heute im present perfect (for / since)", zeilen: 3 },
          { id: "why", label: "Why is the person a role model?", hilfe: "I admire … because …, zwei Eigenschaften (brave, patient, generous …)", zeilen: 2 },
          { id: "learned", label: "What have I learned?", hilfe: "What I have learned from … is …", zeilen: 2 },
          { id: "ending", label: "Ending", hilfe: "ein Schlusssatz: Dank oder ein Wunsch", zeilen: 1 }
        ],
        auftrag: { R: "<p>Write a text (about 80–100 words) about a person who is your role model.</p><ul><li>Say who the person is and how you know him or her.</li><li>Say what the person did in the past (simple past) and what he or she has done for years (present perfect with <i>for</i> or <i>since</i>).</li><li>Explain why you admire the person.</li><li>Say what you have learned from him or her.</li></ul><p><span class=\"de\">Schreibe einen Text über ein Vorbild: wer die Person ist, was sie getan hat und bis heute tut (mit for oder since), warum du sie bewunderst und was du von ihr gelernt hast.</span></p>" },
        min: { R: 80 },
        kriterien: { R: ["I say who my role model is and how I know the person.", "I write what the person did (simple past) and has done until today (present perfect).", "I use for or since in the right way.", "I explain why I admire the person (because …).", "I use at least two adjectives for people.", "I write what I have learned from the person."] },
        starter: ["My role model is …", "I have known … for / since …", "Years ago, … started …", "He / She has always …", "I admire … because …", "What I have learned from … is …"] }
    ] },
    { kurz: "Revise", ober: "5 · Check and revise", titel: "Make your text better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check your text", lead: "True or false?",
        aussagen: [
          ["Reading your text aloud helps you to find mistakes.", true],
          ["You use for with a starting point, for example for 2019.", false],
          ["You say why you admire the person, with because.", true],
          ["You can use the present perfect for something that finished last year.", false]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler.</span></p><blockquote>Grandpa Elias is a role model for many children in Riverside East. He <b>has live</b> in the same street for forty years. Two years ago he <b>has opened</b> a small library in his garden. The library has been busy <b>since</b> two years now, and every Saturday the children borrow new books.</blockquote><p class=\"de\">Die drei fett gedruckten Stellen stimmen nicht.</p>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "He has live in the same street for forty years. How do you correct it?", o: ["He has lived in the same street for forty years.", "He has live in the same street since forty years.", "He lives in the same street for forty years.", "He is live in the same street for forty years."], a: 0,
            e: "The present perfect needs has + past participle: has lived." },
          { q: "Two years ago he has opened a small library. How do you correct it?", o: ["Two years ago he opened a small library.", "Two years ago he has open a small library.", "Two years ago he is opening a small library.", "Two years ago he did opened a small library."], a: 0,
            e: "Two years ago is a finished time, so you use the simple past: opened." },
          { q: "The library has been busy since two years. How do you correct it?", o: ["The library has been busy for two years.", "The library has been busy since two years ago.", "The library is busy since two years.", "The library has be busy for two years."], a: 0,
            e: "Two years is a period of time, so you use for." }
        ] },
      { art: "offen", id: "satz", m7: true, tag: "Challenge", titel: "Write about a person you admire", lead: "Write one or two sentences about a person you admire. Use <i>for</i> or <i>since</i>. <span class=\"de\">Schreibe ein bis zwei Sätze über eine Person, die du bewunderst. Benutze for oder since.</span>",
        fragen: [{ q: "Your sentences: …", m: "My brother has played football for six years, and I admire him because he is very patient.", k: ["has|have", "for|since"], min: 6 }],
        tipp: "Start like this: My aunt has worked as a nurse for … years. " }
    ] },
    { kurz: "Check", ober: "6 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Rules to remember", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Use ", { g: "for" }, " with a period of time and ", { g: "since" }, " with a starting point."],
          ["The present perfect is has or have + ", { g: "past participle" }, "."],
          ["For a finished event in the past I use the ", { g: "simple past" }, "."]
        ], extra: ["infinitive", "past progressive"] }
    ] }
  ],
  weiter: { text: "Well done! You can plan, write and revise a text about a role model. Use the same steps for other writing tasks." }
});
