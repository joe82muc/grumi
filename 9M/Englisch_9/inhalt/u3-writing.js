/* Englisch 9M · Unit 3 Discover South Africa · Writing: My role model · M-Fassung
   (Text über ein Vorbild schreiben: Mustertext lesen und sehen, wie Eigenschaften mit Belegen gestützt werden; Grammatik der Unit –
   past progressive mit while/when im Zusammenspiel mit dem simple past, Revision present perfect mit for und since – im Schreiben,
   dann planen, schreiben, prüfen, überarbeiten, abgeben)
   LehrplanPLUS E9 2.1 Schreiben (Text über ein Vorbild mit Erlebnis und Begründung; M-Zug: etwa 130–150 Wörter), E9 3 (Texte
   planen und überarbeiten), E9 5 (Südafrika: Vorbilder).
   Text: „My Coach, My Role Model“ (texte/u3/writing-coach-dube-m.js) – Coach Dube und der Ortsteil Riverside East sind erfunden.
   Das Vorbild im Schreibauftrag wählt das Kind selbst. */
D7Kit.seite({
  id: "u3-writing",
  titel: "Writing: My role model",
  einleitung: "You write a longer text about a person you admire. First you read a rich model text and see how a good writer proves a quality with an example. Then you check the past progressive with while and when, and for and since with the present perfect. At the end you plan, write, check and revise your own text – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["🌟 I say who my role model is and prove my opinion with an example.", "📖 I tell a short story with the past progressive and the simple past.", "🔤 I use for, since and the present perfect.", "📝 I plan, write, check and revise a text of 130–150 words."],
  quiz: { profi: "Role model writing pro" },
  glossar: {
    rolemodel: ["role model", "Ein Vorbild: eine Person, die du bewunderst und von der du etwas lernst."],
    admire: ["to admire", "Bewundern: Du findest eine Person richtig gut, weil sie etwas Besonderes tut."],
    evidence: ["evidence", "Ein Beleg: ein Beispiel oder eine Tatsache, die zeigt, dass deine Aussage stimmt."],
    patient: ["patient", "Geduldig: Eine geduldige Person kann gut warten und bleibt freundlich."],
    generous: ["generous", "Großzügig: Eine großzügige Person gibt anderen gern etwas ab, zum Beispiel Zeit oder Geld."],
    confident: ["confident", "Selbstbewusst: Du traust dir etwas zu und hast keine große Angst, Fehler zu machen."],
    revise: ["to revise", "Überarbeiten: den eigenen Text noch einmal lesen und verbessern."]
  },
  haupttext: "u3-write-role-model-m",
  stationen: [
    { kurz: "Model", ober: "1 · A model text", titel: "A text about a role model", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What is the coach doing? What makes a good coach – or a good role model?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u3-coach.jpg\" alt=\"A football coach kneels on the grass and explains a move to her young team with small cones.\" style=\"width:100%;border-radius:14px\"></figure><p>What would you like to know about this coach? Think of two questions.</p>" },
      { art: "text", html: "<p class=\"lead\">A <button class=\"term\" data-t=\"rolemodel\">role model</button> is a person you <button class=\"term\" data-t=\"admire\">admire</button>. Read the model text and look for the <button class=\"term\" data-t=\"evidence\">evidence</button>: How does the writer show that her coach is special? Riverside East is an invented district, Coach Dube an invented person. <span class=\"de\">Lies den Mustertext.</span></p>" },
      { art: "lesetext", lesetext: "u3-write-role-model-m" },
      { art: "mc", id: "wer", tag: "Read between the lines", titel: "What does the text show?", lead: "Tick the correct answer.",
        fragen: [
          { q: "What does \"Although she works full-time at the clinic, she is never in a hurry\" show?", o: ["She finds time for the team in spite of her job.", "She only works a few hours at the clinic.", "She does not like her job at the clinic.", "She is often late for training."], a: 0,
            e: "Although shows a contrast: she is busy, but she is still relaxed and has time for the girls." },
          { q: "How did Coach Dube react when it started to pour?", o: ["She laughed and told the girls to carry on.", "She sent everybody home at once.", "She stopped training until the rain was over.", "She got angry with the girls who wanted to leave."], a: 0,
            e: "The text says she was laughing when she told them to carry on." },
          { q: "Why do you think the writer tells the story of the rainy afternoon?", o: ["It shows that the coach stays calm and kind when something goes wrong.", "It shows that the team never trains in the rain.", "It explains why the writer is a bad player.", "It explains why the coach does not like rain."], a: 0,
            e: "The story is the evidence for the coach's patience: she does not shout when the writer makes a mistake." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the text?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-write-role-model-m",
        fragen: [
          { q: "Where did the team start?", zeilen: [5, 6], e: "The team started on a dusty field behind the bus station.", tipp: "Look at the second paragraph." },
          { q: "What did Coach Dube say after the writer lost the ball?", zeilen: [13, 14], e: "She said: Losing is part of learning.", tipp: "Look for the speech marks." },
          { q: "What has the writer learned from her?", zeilen: [20, 21], e: "The writer has learned to work hard, be kind and never give up.", tipp: "Look at the last paragraph." }
        ] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "How the text is built", lead: "Put the parts of the text in the right order. <span class=\"de\">Bringe die Teile des Textes in die richtige Reihenfolge.</span>",
        schritte: ["Who is my role model, and what does she do?", "How did the team start?", "A story that shows what she is like", "What she has done for years – and what that shows", "What I have learned and what I plan"] }
    ] },
    { kurz: "Words", ober: "2 · Useful words", titel: "Qualities and evidence", teile: [
      { art: "merke", kopf: "CLAIM + EVIDENCE", html: "<p>A good text does not only say <i>She is patient.</i> It proves it: <i>She is <button class=\"term\" data-t=\"patient\">patient</button>: she explains a move five times without getting angry.</i></p><ul><li><b>Claim:</b> He is <button class=\"term\" data-t=\"generous\">generous</button> / reliable / determined / modest / supportive.</li><li><b>Evidence:</b> … because / for example / That shows … / Once, …</li><li><b>Growth:</b> Since I joined her team, I have become more <button class=\"term\" data-t=\"confident\">confident</button>.</li></ul>" },
      { art: "sort", id: "belege", tag: "Sort", titel: "Claim or evidence?", lead: "Put the sentences into the right box. <span class=\"de\">Eine Behauptung nennt eine Eigenschaft, der Beleg zeigt sie an einem Beispiel.</span>",
        buckets: ["Claim (a quality)", "Evidence (an example)"],
        items: [{ t: "My uncle is very reliable.", b: 0 }, { t: "She is generous.", b: 0 }, { t: "My aunt is brave.", b: 0 }, { t: "My coach is patient.", b: 0 },
                { t: "He has never been late for training.", b: 1 }, { t: "She jumped into the river to save a dog.", b: 1 }, { t: "She has given away her old boots to girls in the street.", b: 1 }, { t: "She explains a move five times without getting angry.", b: 1 }] },
      { art: "paare", id: "adj", tag: "Match", titel: "Adjectives for people", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit dem deutschen.</span>",
        paare: [["determined", "entschlossen"], ["modest", "bescheiden"], ["supportive", "unterstützend"], ["confident", "selbstbewusst"], ["reliable", "zuverlässig"], ["inspiring", "inspirierend"], ["generous", "großzügig"], ["hard-working", "fleißig"]] },
      { art: "mc", id: "adjmc", tag: "Adjectives", titel: "Which word fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Even when the exercise was very hard, Thandi never gave up. She was …", o: ["determined", "modest", "generous", "impatient"], a: 0,
            e: "Determined means: you keep going and do not give up." }
        ] },
      { art: "offen", id: "beweis", m7: true, tag: "Prove it", titel: "Quality + evidence", lead: "Choose one adjective for a person you know and prove it with an example. Use <i>because</i> or <i>for example</i>. <span class=\"de\">Wähle eine Eigenschaft und belege sie mit einem Beispiel.</span>",
        fragen: [{ q: "My … is … because …", m: "My grandpa is generous because he always shares his lunch with the children from next door.", k: ["because|for example|for instance|that shows"], min: 1 }],
        tipp: "Start like this: My aunt is patient. For example, she … " }
    ] },
    { kurz: "Language", ober: "3 · Language check", titel: "While, when – and for, since", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>Past progressive</b> = <i>was / were</i> + <i>-ing</i>: a longer action in the background. <b>Simple past</b>: a short action that interrupts it. While we <u>were practising</u>, it <u>started</u> to rain. Coach Dube <u>was laughing</u> when she <u>told</u> us to carry on.</li><li><b>while</b> + longer action (<i>while I was waiting</i>); <b>when</b> often + the short event (<i>when the phone rang</i>).</li><li><b>Present perfect</b> (revision) = <i>has / have</i> + past participle, with <b>for</b> + period of time and <b>since</b> + starting point: She <u>has coached</u> us <u>for six years</u>. I <u>have known</u> her <u>since</u> I was ten.</li></ul>" },
      { art: "sort", id: "forsince", tag: "Sort", titel: "for or since?", lead: "Put the time expressions into the right box. <span class=\"de\">for gehört zu einer Zeitspanne, since zu einem Anfangspunkt.</span>",
        buckets: ["for …", "since …"],
        items: [{ t: "six years", b: 0 }, { t: "a few weeks", b: 0 }, { t: "a long time", b: 0 }, { t: "three hours", b: 0 },
                { t: "last summer", b: 1 }, { t: "I was ten", b: 1 }, { t: "Monday", b: 1 }, { t: "the team began", b: 1 }] },
      { art: "luecke", id: "pastprog", tag: "Gap text", titel: "A rainy afternoon", lead: "Complete the sentences. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["While we ", { g: "were practising" }, " passes, it ", { g: "began" }, " to rain."],
          ["Coach Dube ", { g: "was laughing" }, " when she ", { g: "told" }, " us to carry on."],
          ["Then I ", { g: "slipped" }, " on the wet grass and ", { g: "lost" }, " the ball."]
        ], extra: ["were practice", "was laugh"] },
      { art: "luecke", id: "pp", tag: "Gap text", titel: "Present perfect with for and since", lead: "Complete the sentences. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["Coach Dube ", { g: "has coached" }, " the team ", { g: "for" }, " six years."],
          ["I ", { g: "have played" }, " in her team ", { g: "since" }, " I was twelve."]
        ], extra: ["have play", "is coaching"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["I was reading a book when the phone rang.", "I was reading a book when the phone was rang.", "I were reading a book when the phone rang.", "I reading a book when the phone rang."], a: 0,
            e: "The long action uses was reading, the short interruption uses the simple past: rang." },
          { q: "Which sentence is correct?", o: ["She has been our coach for six years.", "She has been our coach since six years.", "She is our coach for six years.", "She was our coach since six years."], a: 0,
            e: "Six years is a period of time, so you use for. The coaching still goes on, so you use the present perfect." },
          { q: "Which sentence is correct?", o: ["While I was waiting for the bus, I met an old friend.", "While I waited for the bus, I was meeting an old friend.", "While I was waiting for the bus, I was meeting an old friend.", "While I wait for the bus, I met an old friend."], a: 0,
            e: "The waiting is the long action in the background. Meeting is the short event, so it uses the simple past." }
        ] },
      { art: "offen", id: "verbinden", tag: "Write", titel: "Join the sentences", lead: "Join the two sentences into one with <i>while</i> or <i>when</i>: <b>Naledi was waiting at the bus stop. Her phone fell out of her bag.</b>",
        fragen: [{ q: "One sentence: …", m: "While Naledi was waiting at the bus stop, her phone fell out of her bag.", k: ["while|when", "was waiting", "fell"], min: 3 }],
        tipp: "The long action uses was waiting, the short event uses the simple past." },
      { art: "offen", id: "deutsch", m7: true, tag: "Mediation", titel: "Auf Deutsch zusammenfassen", lead: "Deine Großmutter fragt, was du gerade in Englisch liest. Sie versteht kein Englisch. Fasse für sie auf Deutsch in zwei bis drei Sätzen zusammen: Wer ist das Vorbild, und warum bewundert die Schreiberin sie?",
        fragen: [{ q: "Zusammenfassung auf Deutsch:", m: "Das Vorbild der Schreiberin ist Coach Dube, die Trainerin eines Mädchen-Fußballteams. Sie hat die Mannschaft vor sechs Jahren gegründet und kümmert sich geduldig und großzügig um die Mädchen. Bei Regen und nach Fehlern bleibt sie freundlich und sagt, dass Verlieren zum Lernen gehört.", k: ["Trainerin|Coach|Mannschaft|Team", "geduldig|großzügig|freundlich|ruhig", "Fehler|Verlieren|Lernen|Regen"], min: 3 }],
        tipp: "Du musst nicht jeden Satz übersetzen – wichtig sind die Hauptinformationen." }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your text about a role model", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps. Wähle ein Vorbild, das du wirklich kennst: eine Person aus deiner Familie, dem Verein oder der Nachbarschaft. Du darfst auch eine bekannte Person wählen.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "My role model",
        plan: [
          { id: "who", label: "Who is my role model?", hilfe: "Name, Beruf oder Rolle", zeilen: 1 },
          { id: "know", label: "How do I know the person?", hilfe: "Familie, Verein, Nachbarschaft – und seit wann (for / since)", zeilen: 2 },
          { id: "does", label: "What does the person do?", hilfe: "Stichpunkte, present perfect mit for / since", zeilen: 2 },
          { id: "story", label: "One experience", hilfe: "Was lief gerade (past progressive), was passierte dann (simple past)? while / when", zeilen: 3 },
          { id: "learned", label: "What have I learned?", hilfe: "Eigenschaft mit Beleg (because)", zeilen: 2 },
          { id: "plan", label: "What do I want to do?", hilfe: "ein Vorsatz oder ein Wunsch", zeilen: 1 }
        ],
        auftrag: {
          R: "<p>Write a text (about 80–100 words) about a person who is your role model.</p><ul><li>Say who the person is and how you know him or her.</li><li>Say what the person did in the past (simple past) and what he or she has done for years (present perfect with <i>for</i> or <i>since</i>).</li><li>Explain why you admire the person.</li><li>Say what you have learned from him or her.</li></ul><p><span class=\"de\">Schreibe einen Text über ein Vorbild: wer die Person ist, was sie getan hat und bis heute tut (mit for oder since), warum du sie bewunderst und was du von ihr gelernt hast.</span></p>",
          M: "<p>Write a text of about 130–150 words about a person who is your role model. Use paragraphs and include these six points:</p><ol><li>who the person is</li><li>how you know the person (use <i>for</i> or <i>since</i>)</li><li>what the person does or has done for years (present perfect)</li><li>one experience you remember: what was going on and what happened (past progressive with <i>while</i> or <i>when</i>, simple past)</li><li>what you have learned from the person – explain a quality with an example (<i>because</i>)</li><li>what you want to do now</li></ol><p><span class=\"de\">Schreibe über ein Vorbild in Absätzen. Belege eine Eigenschaft mit einem Beispiel und verwende mindestens drei verschiedene Verbindungswörter.</span></p>"
        },
        min: { R: 80, M: 130 },
        kriterien: {
          R: ["I say who my role model is and how I know the person.", "I write what the person did (simple past) and has done until today (present perfect).", "I use for or since in the right way.", "I explain why I admire the person (because …).", "I use at least two adjectives for people.", "I write what I have learned from the person."],
          M: ["I say who my role model is and how I know the person, and my text has paragraphs.", "I use for or since with the present perfect in the right way.", "I tell one experience with the past progressive and the simple past (while / when).", "I prove a quality with an example (because, for example).", "I use at least three different linking words (because, although, so, while, when …).", "I write what I have learned and what I want to do now.", "I read my text aloud and correct my mistakes."]
        },
        starter: ["My role model is …", "I have known … for / since …", "While we were …, …", "What I have learned from … is …"] }
    ] },
    { kurz: "Revise", ober: "5 · Check and revise", titel: "Make your text better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check your text", lead: "True or false?",
        aussagen: [
          ["A quality like patient gets stronger if you add an example.", true],
          ["After while you often use the past progressive for the longer action.", true],
          ["You write since six years.", false]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler.</span></p><blockquote>My aunt Lindiwe is a nurse and my role model. She <b>works</b> at the town clinic <b>since</b> ten years. Last winter, while she <b>helped</b> a patient, the power went out. She calmly finished her work with a torch, and nobody was afraid.</blockquote><p class=\"de\">Die drei fett gedruckten Stellen stimmen nicht.</p>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "She works at the town clinic. How do you correct the verb (the nursing job started in the past and goes on)?", o: ["She has worked at the town clinic.", "She worked at the town clinic.", "She is working at the town clinic.", "She does work at the town clinic."], a: 0,
            e: "The job started in the past and still goes on, so you use the present perfect: has worked." },
          { q: "… since ten years. How do you correct it?", o: ["… for ten years.", "… since ten years ago.", "… from ten years.", "… during ten years."], a: 0,
            e: "Ten years is a period of time, so you use for." },
          { q: "While she helped a patient, the power went out. How do you correct it?", o: ["While she was helping a patient, the power went out.", "While she helped a patient, the power was going out.", "While she was helping a patient, the power was going out.", "While she is helping a patient, the power went out."], a: 0,
            e: "Helping is the longer action in the background. The power cut is the short event, so it stays in the simple past." }
        ] },
      { art: "offen", id: "satz", m7: true, tag: "Challenge", titel: "Add a moment", lead: "Write one sentence about a moment with a person you admire. Use <i>while</i> or <i>when</i> with the past progressive and the simple past. <span class=\"de\">Schreibe einen Satz über einen Moment mit einer Person, die du bewunderst.</span>",
        fragen: [{ q: "Your sentence: …", m: "While my aunt was cooking dinner, she heard our neighbour calling for help and ran out of the house.", k: ["while|when", "was|were", "ed|ran|heard|saw|fell|came|went|called|said"], min: 3 }],
        tipp: "Start like this: While my coach was … , … " },
      { art: "offen", id: "meinung", m7: true, tag: "Opinion", titel: "Why do we need role models?", lead: "Do you think role models are important for young people? Give two reasons. <span class=\"de\">Nenne zwei Gründe.</span>",
        fragen: [{ q: "I think … because …", m: "I think role models are important because they show us what we can achieve. Also, they help us when we are not sure what to do.", k: ["because|as|since|also|and", "role model|model|admire|learn|help|show"], min: 2 }],
        tipp: "Use because and also (or and) to give two reasons." }
    ] },
    { kurz: "Check", ober: "6 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Rules to remember", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Use ", { g: "for" }, " with a period of time and ", { g: "since" }, " with a starting point."],
          ["The longer action in the background uses the ", { g: "past progressive" }, "."],
          ["The short event that interrupts it uses the ", { g: "simple past" }, "."]
        ], extra: ["infinitive", "future"] }
    ] }
  ],
  weiter: { text: "Well done! You can write a longer text about a role model, prove a quality with an example, and use the past progressive, for and since in your text." }
});
