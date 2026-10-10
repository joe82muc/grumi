/* Englisch 9R · Unit 4 News from New Zealand · Listening: What are you going to do?
   (Gespräche und Telefonate verstehen: Thema erfassen, Zahlen, Uhrzeiten und Namen heraushören, wer was plant, Notizen und ein
   Formular ausfüllen, Sprache im Gespräch – going to-future (Revision), Passiv nur verstehen (Revision))
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten entnehmen, Notizen machen), E9 3 (Hörstrategien),
   E9 4 (Berufswahl, Praktikum), E9 5 (Neuseeland: Alltag junger Menschen).
   Texte: „What are you going to do?“ (texte/u4/listening-break-time-plans.js) und „A call to a vet practice“
   (texte/u4/listening-vet-placement-call.js) – Personen, Schule, Hof und Tierarztpraxis sind erfunden. */
D7Kit.seite({
  id: "u4-listening",
  titel: "Listening: What are you going to do?",
  einleitung: "Three friends at a school in New Zealand talk about their plans after the school year, and later a girl phones a vet practice about a work placement. You listen to a conversation and to a phone call. First you get the main idea, then you catch the details: who plans what, times, numbers and names.",
  zeit: "etwa 40 Minuten",
  ziele: ["🎧 I understand who plans what in a conversation I hear.", "🔎 I catch times, dates, numbers and names.", "📝 I fill in notes and a form while I listen.", "🧩 I spot going to for plans and understand simple passive sentences in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    apprenticeship: ["apprenticeship", "Eine Ausbildung ist die Zeit, in der man im Betrieb einen Beruf lernt."],
    placement: ["work placement", "Ein Praktikum ist eine kurze Zeit in einem Betrieb, in der man den Beruf kennenlernt."],
    goingto: ["going to", "Mit going to sagt man, was man plant oder vorhat."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten: Zahlen, Uhrzeiten, Namen, Orte."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">It is break time at a school in New Zealand. Three friends talk about their <button class=\"term\" data-t=\"goingto\">plans</button> after the school year. One wants an <button class=\"term\" data-t=\"apprenticeship\">apprenticeship</button>. Later a girl phones a vet practice and asks for a <button class=\"term\" data-t=\"placement\">work placement</button>.</p><p>The school, the farm, the practice and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["apprenticeship", "Ausbildung"], ["farm", "Bauernhof"], ["to milk", "melken"], ["to apply", "sich bewerben"], ["university", "Universität"], ["work placement", "Praktikum"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> only the topic.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> the details – who plans what, times, numbers, names.</li></ol><p>With three speakers, listen to the <b>name</b> before each plan. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u4-listen-plans", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer. <span class=\"de\">Beim ersten Hören nur das Thema.</span>",
          fragen: [
            { q: "Where are the three friends?", o: ["at their school", "at a hotel", "on a farm", "at a university"], a: 0,
              e: "Sophie says it is break time, and a teacher, Mrs Ngata, asked her something. The talk is at school." },
            { q: "What are the friends talking about?", o: ["their plans after school", "their last holiday", "a football match", "a test they have written"], a: 0,
              e: "Each friend says what he or she is going to do after the school year." },
            { q: "How does Sophie feel at the start?", o: ["She is not sure what to say about her plans.", "She is angry with Mrs Ngata.", "She is sure about her plans.", "She is afraid of the bell."], a: 0,
              e: "Sophie says: I do not know what to say. So she asks her friends." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u4-listen-plans", fragen: [
        { art: "paare", id: "wer-was", tag: "Who plans what?", titel: "Match the person and the plan", lead: "Listen again. Who is going to do what? <span class=\"de\">Hör genau auf die Namen.</span>",
          paare: [["Manaia", "start an apprenticeship"], ["Hemi", "work on the family farm"], ["Sophie", "stay at school for one more year"]] },
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. <span class=\"de\">Hör noch einmal zu und achte auf die Einzelheiten.</span>",
          aussagen: [
            ["Manaia is going to work in a hotel kitchen.", true],
            ["Hemi is going to leave home.", false],
            ["Hemi's brother is going to help on the farm.", false],
            ["Sophie is going to apply to a university.", true],
            ["Mrs Ngata is going to see Sophie on Thursday.", true]
          ] },
        { art: "mc", id: "zeit", titel: "Times and numbers", lead: "Tick the correct answer.",
          fragen: [
            { q: "In which month is Manaia going to start?", o: ["January", "February", "March", "December"], a: 0,
              e: "Manaia says: In January I am going to start an apprenticeship." },
            { q: "How long is Hemi going to work on the farm?", o: ["for one year", "for two years", "for six months", "for four years"], a: 0,
              e: "Hemi says: I am going to work on our farm for one year." },
            { q: "What time are the cows milked?", o: ["at half past five", "at five o'clock", "at seven o'clock", "at half past six"], a: 0,
              e: "Hemi says: The cows are milked at half past five. Seven o'clock is the time for feeding the animals." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the plans", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Manaia is going to start an ", { g: "apprenticeship" }, " in a hotel kitchen."],
            ["Hemi is going to work on his family's ", { g: "farm" }, " for one year."],
            ["Hemi's brother is going to study in ", { g: "Dunedin" }, "."],
            ["Sophie is going to apply to a ", { g: "university" }, " and become a teacher."]
          ], extra: ["holiday", "Nelson"] },
        { art: "ordnen", id: "reihenfolge", titel: "Who talks when?", lead: "Put the parts of the talk in the right order. <span class=\"de\">Bringe die Teile in die richtige Reihenfolge.</span>",
          schritte: ["Sophie says she does not know what to say.", "Manaia talks about the hotel kitchen.", "Hemi talks about his farm.", "Hemi says his brother is going to study.", "Sophie talks about the university."] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to a vet practice", teile: [
      { art: "text", html: "<p class=\"lead\">Sophie phones a vet practice because she wants a work placement. Read the tasks, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u4-listen-vet-call", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Sophie phone?", o: ["She wants to do a work placement.", "Her cat is ill.", "She wants to buy a dog.", "She wants to cancel an appointment."], a: 0,
              e: "Sophie says: I would like to do a work placement at your practice." },
            { q: "What is Sophie going to do at the practice?", o: ["help in the waiting room and feed the animals", "give medicine to the animals", "drive the doctor's car", "cook lunch for everybody"], a: 0,
              e: "Mr Collins says: You are going to help in the waiting room and feed the animals. She is only going to watch when the vet gives medicine." }
          ] },
        { art: "tf", id: "call-tf", titel: "True or false?", lead: "Listen again. <span class=\"de\">Hör noch einmal zu.</span>",
          aussagen: [
            ["Sophie spells her name for Mr Collins.", true],
            ["Sophie is going to stay for three weeks.", false],
            ["Sophie is going to work with the medicine.", false],
            ["The practice gives Sophie a coat.", true]
          ] },
        { art: "formular", id: "karte", titel: "Placement form", lead: "Listen again and complete the form. <span class=\"de\">Hör noch einmal zu und fülle das Formular aus.</span>",
          karte: "<p>Fill in the form with the information from the call.</p>",
          kopf: "Fernbank Vet Practice – Work placement",
          felder: [
            { label: "First name", loesung: ["Sophie", "SOPHIE", "S O P H I E", "S-O-P-H-I-E"] },
            { label: "Start date", loesung: ["12 May", "12th May", "the twelfth of May", "twelfth of May", "May 12"], wahl: ["2 May", "12 May", "12 June"] },
            { label: "How long?", loesung: ["two weeks", "2 weeks"], wahl: ["one week", "two weeks", "three weeks"] },
            { label: "Starting time", loesung: ["8.30", "8:30", "08.30", "half past eight", "8.30 am"], wahl: ["8.15", "8.30", "9.00"] },
            { label: "Finishing time", loesung: ["4.00", "4:00", "16.00", "16:00", "four o'clock", "4 pm", "4.00 pm"], wahl: ["3.00", "4.00", "5.00"] },
            { label: "Shoes", loesung: ["strong boots", "boots"], wahl: ["sandals", "strong boots", "trainers"] },
            { label: "Food", loesung: ["a packed lunch", "packed lunch", "lunch"], wahl: ["money for lunch", "a packed lunch", "nothing"] }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 4 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The two talks use two things from Unit 4:</p><ul><li><b>going to-future</b> – plans and intentions: <b>am / is / are + going to + verb</b>. Statement: I <u>am going to be</u> a cook. Negative: I <u>am not going to</u> leave home. Question: <u>Are</u> you <u>going to</u> leave school? – Yes, I <u>am</u>. / No, he <u>is not</u>.</li><li><b>passive</b> (you only <b>understand</b> it here) – <b>am / is / are</b> or <b>was / were</b> + a verb form: The animals <u>are fed</u> at seven. = Somebody feeds the animals. <b>by</b> tells you who did it: The farm was started <u>by</u> my grandfather.</li></ul>" },
      { art: "sort", id: "tenses", tag: "Sort", titel: "Statement, negative or question?", lead: "Put the sentences from the talks into the right box.",
        buckets: ["statement", "negative", "question"],
        items: [{ t: "I am going to be a cook", b: 0 }, { t: "He is going to study in Dunedin", b: 0 }, { t: "You are going to help in the waiting room", b: 0 },
                { t: "I am not going to leave home", b: 1 }, { t: "You are not going to work with the medicine", b: 1 },
                { t: "Is your brother going to help you", b: 2 }, { t: "What are you going to do", b: 2 }, { t: "When are you going to start", b: 2 }] },
      { art: "luecke", id: "grammar-gaps", tag: "Gap text", titel: "Complete the sentences", lead: "Complete the sentences with am, is, are, not … <span class=\"de\">Achte auf die Person: I – am, he/she – is, you – are.</span>",
        absaetze: [
          ["I ", { g: "am" }, " going to be a cook."],
          ["Hemi's brother ", { g: "is" }, " going to study in Dunedin."],
          ["What ", { g: "are" }, " you going to do, Hemi?"],
          ["I am ", { g: "not" }, " going to leave home."]
        ], extra: ["no", "does"] },
      { art: "mc", id: "passiv", titel: "Understand the passive", lead: "Tick the correct answer. <span class=\"de\">Du musst Passivsätze nur verstehen, nicht selbst bilden.</span>",
        fragen: [
          { q: "“The animals are fed at seven every morning.” Who feeds the animals now?", o: ["Hemi's dad", "Hemi", "Hemi's brother", "Mrs Ngata"], a: 0,
            e: "The sentence does not say who feeds the animals. Hemi explains: My dad does that now. Hemi is only going to learn it." },
          { q: "“The farm was started by my grandfather.” What does this mean?", o: ["Hemi's grandfather started the farm.", "Hemi's grandfather is going to start the farm.", "Hemi started the farm for his grandfather.", "Hemi's grandfather works on the farm every day."], a: 0,
            e: "The small word by tells you who did it. Was started is in the past: the grandfather began the farm a long time ago." }
        ] },
      { art: "offen", id: "plans", tag: "Your words", titel: "What are you going to do?", lead: "Write two sentences about your plans. Use going to. <span class=\"de\">Zum Beispiel: I am going to visit my cousin next week.</span>",
        fragen: [{ q: "What are you going to do next weekend or after school?", m: "Next weekend I am going to visit my cousin. I am not going to stay at home.", k: ["going to", "am|is|are"], min: 2 }],
        tipp: "Start like this: I am going to … / I am not going to … / We are going to …" },
      { art: "offen", id: "ask", m7: true, tag: "Your words", titel: "Ask a friend", lead: "Write two questions with going to for a friend. Ask about a plan. <span class=\"de\">Zum Beispiel: What are you going to do tomorrow?</span>",
        fragen: [{ q: "What two questions are you going to ask your friend?", m: "What are you going to do tomorrow? Are you going to play football with us?", k: ["going to", "are you|is he|is she|are they|what are|where are|when are"], min: 2 }],
        tipp: "Start like this: What are you going to …? / Are you going to …?" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two talks in four sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Gespräch.</span>",
        absaetze: [
          ["Manaia is going to be a ", { g: "cook" }, "."],
          ["Sophie wants to become a ", { g: "teacher" }, " and is going to stay at school for one more year."],
          ["Hemi's ", { g: "grandfather" }, " started the family farm."],
          ["Sophie phones a ", { g: "vet" }, " practice because she wants a work placement."]
        ], extra: ["brother", "dentist"] }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea, the times and who plans what in a conversation and in a phone call. You also know how going to and simple passive sentences sound in real talk." }
});
