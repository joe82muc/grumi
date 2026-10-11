/* Englisch 9M · Unit 4 News from New Zealand · Listening: What are you going to do? · M-Fassung
   (Gespräche und Telefonate verstehen: Pläne mit Gründen und Bedenken, eine Planänderung heraushören, genaue Angaben notieren und ein
   Formular ausfüllen, Schlüsse ziehen, Sprache im Gespräch – going to-future und simple past (Revision), Passiv (simple present,
   simple past, mit by) verstehen und selbst bilden; Plus: Passiv mit by, eigene Worte, Sprachmittlung)
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten und Korrekturen entnehmen, Schlüsse ziehen, Notizen machen),
   E9 3 (Hörstrategien), E9 4 (Berufswahl, Praktikum), E9 5 (Neuseeland: Alltag junger Menschen).
   Texte: „What are you going to do?“ (texte/u4/listening-break-time-plans-m.js) und „A call to a vet practice“
   (texte/u4/listening-vet-placement-call-m.js) – Personen, Schule, Hof und Tierarztpraxis sind erfunden. */
D7Kit.seite({
  id: "u4-listening",
  titel: "Listening: What are you going to do?",
  einleitung: "Three friends at a school in New Zealand talk about their plans after the school year – and one plan has just changed. Later a girl phones a vet practice about a work placement. In the call somebody corrects a date, and you must note exact times and dates. Catch the main idea, then the details, then read between the lines.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I understand who plans what – with reasons, worries and changes.", "🔎 I catch dates and times and know which one is right when somebody corrects it.", "📝 I fill in a form while I listen.", "🧩 I use going to and the passive (present and past) in real talk – and I form passive sentences myself."],
  quiz: { profi: "Listening pro" },
  glossar: {
    apprenticeship: ["apprenticeship", "Eine Ausbildung ist die Zeit, in der man im Betrieb einen Beruf lernt."],
    placement: ["work placement", "Ein Praktikum ist eine kurze Zeit in einem Betrieb, in der man den Beruf kennenlernt."],
    goingto: ["going to", "Mit going to sagt man, was man plant oder vorhat."],
    passive: ["passive", "Im Passiv steht die Handlung im Vordergrund, nicht die Person, die sie ausführt: Apprentices are taught by the head cook."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber? Wie fühlen sich die Sprecher?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten und achtest auf Änderungen und Korrekturen: Welche Angabe gilt am Ende?"]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">It is break time at a school in New Zealand. Three friends talk about their <button class=\"term\" data-t=\"goingto\">plans</button> after the school year. One wants an <button class=\"term\" data-t=\"apprenticeship\">apprenticeship</button>, but something changes. Later a girl phones a vet practice and asks for a <button class=\"term\" data-t=\"placement\">work placement</button>.</p><p>The school, the farm, the practice and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["apprenticeship", "Ausbildung"], ["strict", "streng"], ["to rebuild", "umbauen"], ["disappointed", "enttäuscht"], ["to milk", "melken"], ["sheep", "Schafe"], ["to apply", "sich bewerben"], ["university", "Universität"], ["nurse", "Tierarzthelferin"], ["packed lunch", "Verpflegung von zu Hause"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> topic, people, mood.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> the details – and watch out for <b>changes</b> and <b>corrections</b>: “that was the plan”, “I mean …”, “sorry, …”. Only the <b>last</b> answer counts.</li></ol><p>You do <b>not</b> need to understand every word. At first two friends talk, then a third one joins. Listen to the <b>name</b> before each plan. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u4-listen-plans-m", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer.",
          fragen: [
            { q: "What is the conversation mainly about?", o: ["how three friends plan their time after school", "how to pass a test at school", "which job pays the most money", "what the friends did last summer"], a: 0,
              e: "Each friend says what he or she is going to do after the school year, and gives reasons or worries." },
            { q: "How does Manaia feel about the change to her plan?", o: ["A little disappointed, but she sees something good in it.", "Very angry with the hotel.", "Happy, because she does not want to start.", "She does not care at all."], a: 0,
              e: "She was a bit disappointed, but now she has time to save money before she starts." },
            { q: "What do Sophie and Hemi have in common?", o: ["Both have doubts about their plans.", "Both are going to work in a kitchen.", "Both are going to start in February.", "Both are going to leave home."], a: 0,
              e: "Hemi says he might change his mind. Sophie is afraid that she is not good enough." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u4-listen-plans-m", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. Watch out for the change of plan.",
          aussagen: [
            ["Manaia is going to start her apprenticeship in January.", false],
            ["The hotel is rebuilding its kitchen.", true],
            ["Hemi's brother is going to help on the farm.", false],
            ["Mrs Ngata is going to see Sophie on Thursday.", true]
          ] },
        { art: "mc", id: "zeit", titel: "Times and numbers", lead: "Tick the correct answer.",
          fragen: [
            { q: "At what time are the cows milked?", o: ["at half past five", "at five o'clock", "at seven o'clock", "at half past six"], a: 0,
              e: "Hemi says: The cows are milked at half past five. Seven o'clock is the time for feeding the animals." },
            { q: "How many sheep does Hemi's family have?", o: ["four hundred", "forty", "four thousand", "fourteen"], a: 0,
              e: "Hemi says they have got four hundred sheep and some cows." }
          ] },
        { art: "mc", id: "schluesse", titel: "Between the lines", lead: "Tick the correct answer. The answer is not said directly.",
          fragen: [
            { q: "What does Mrs Ngata probably think about Sophie's plan?", o: ["She believes that Sophie can do it.", "She thinks that Sophie should look for a job instead.", "She thinks that Sophie is not good enough.", "She is too busy to help Sophie."], a: 0,
              e: "Mrs Ngata says that Sophie should try anyway, and she is going to look at the application forms with her. So she believes in Sophie." }
          ] },
        { art: "ordnen", id: "reihenfolge", titel: "What do they talk about?", lead: "Put the parts of the talk in the order of the conversation.",
          schritte: ["Sophie says she did not know what to tell Mrs Ngata.", "Manaia explains why her start date has changed.", "Manaia talks about the strict head cook.", "Hemi joins in and tells them about his farm.", "Hemi talks about his brother.", "Sophie tells Hemi what she is going to do."] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to a vet practice", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at a vet practice</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u4-vet.jpg\" alt=\"A vet examines a sheepdog on a table; a young intern holds the dog and the owner watches.\" loading=\"lazy\" style=\"width:100%;border-radius:14px\"></figure><p>What are the people doing? Would you like to work with animals? Why (not)? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Sophie phones a vet practice because she wants a work placement. Read the tasks, then listen. Watch out: she corrects one date, and there are two different starting times.</p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u4-listen-vet-call-m", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "How does Sophie feel about the placement?", o: ["She is interested, but a little nervous.", "She is bored.", "She is angry.", "She is completely sure of herself."], a: 0,
              e: "She says she is a little nervous because she has never worked with animals, only with her cat." },
            { q: "Why is the first day \"a bit special\"?", o: ["The nurse is going to show Sophie around.", "The practice is closed in the morning.", "Sophie has to go to school first.", "The vet has an operation."], a: 0,
              e: "On the first day Sophie is shown around the practice by the nurse." }
          ] },
        { art: "formular", id: "karte", titel: "Placement form", lead: "Listen again and complete the form. Only the final information counts.",
          karte: "<p>Fill in the form with the information from the call.</p>",
          kopf: "Fernbank Vet Practice – Work placement",
          felder: [
            { label: "Surname", loesung: ["Harding", "HARDING", "H A R D I N G", "H-A-R-D-I-N-G"] },
            { label: "Start date", loesung: ["12 May", "12th May", "the twelfth of May", "twelfth of May", "May 12"], wahl: ["2 May", "12 May", "12 June"] },
            { label: "First day: starting time", loesung: ["9.00", "9:00", "09.00", "nine o'clock", "9 am", "9.00 am"], wahl: ["8.30", "9.00", "9.30"] },
            { label: "Bring (1)", loesung: ["strong boots", "boots", "a packed lunch", "packed lunch", "lunch"] },
            { label: "Bring (2)", loesung: ["a packed lunch", "packed lunch", "lunch", "strong boots", "boots"] },
            { label: "School form back by", loesung: ["20 April", "20th April", "the twentieth of April", "twentieth of April", "April 20"], wahl: ["2 April", "12 April", "20 April"] }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 4 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The two talks use things from Unit 4:</p><ul><li><b>going to-future</b> – plans and intentions: I <u>am going to be</u> a cook. I <u>am not going to</u> leave home. <u>Are</u> you <u>going to</u> stay?</li><li><b>simple past</b> (revision) – what happened: The hotel <u>phoned</u> me yesterday. Mrs Ngata <u>asked</u> me.</li><li><b>passive</b> – you can understand it <i>and</i> form it: <b>am / is / are</b> (simple present) or <b>was / were</b> (simple past) + <b>past participle</b>. <i>by</i> names the person who does it.<br>Active: Hemi's dad <u>milks</u> the cows. → Passive: The cows <u>are milked</u> (by Hemi's dad).<br>Active: Mrs Ngata <u>asked</u> Sophie. → Passive: Sophie <u>was asked</u> by Mrs Ngata.</li></ul><p><b>How to change it:</b> 1. The object of the active sentence becomes the subject. 2. Use <i>is/are</i> or <i>was/were</i> + past participle. 3. The subject of the active sentence becomes <i>by …</i> – or you leave it out.</p>" },
      { art: "luecke", id: "grammar-gaps", tag: "Gap text", titel: "Going to or passive?", lead: "Complete the sentences with words from the box. Two words are left over.",
        absaetze: [
          ["Manaia ", { g: "is not" }, " going to start in January any more."],
          ["At the vet practice the cages ", { g: "are cleaned" }, " every morning."],
          ["The farm ", { g: "was started" }, " by Hemi's grandfather a long time ago."]
        ], extra: ["is started", "clean"] },
      { art: "offen", id: "passiv-praesens", tag: "Your words", titel: "Make it passive", lead: "Change the sentence into the passive. The nurse feeds the cats twice a day.",
        fragen: [{ q: "Write the sentence in the passive: The nurse feeds the cats twice a day.", m: "The cats are fed twice a day by the nurse.", k: ["cats", "are fed|are being fed", "twice"], min: 3 }],
        tipp: "Start like this: The cats … (is/are + past participle of feed: fed)." },
      { art: "offen", id: "passiv-by", m7: true, tag: "Your words", titel: "Passive with by", lead: "Change the sentence into the passive. Use by. The vet examined the dog yesterday.",
        fragen: [{ q: "Write the sentence in the passive with by: The vet examined the dog yesterday.", m: "The dog was examined by the vet yesterday.", k: ["dog", "was examined", "by"], min: 3 }],
        tipp: "Start like this: The dog was … by …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "offen", id: "erklaeren", m7: true, tag: "Your words", titel: "Explain it", lead: "Manaia says: “I'd rather learn from the best.” Explain in your own words what she means and why.",
        fragen: [{ q: "What does Manaia mean?", m: "She means that she wants to learn from a very good cook, even though the head cook is strict. She thinks she will become better because of that.", k: ["learn|best|good|better", "strict|hard|difficult|although|even though", "because|so|think|thinks"], min: 3 }],
        tipp: "Start like this: She means that she wants to … because …" },
      { art: "offen", id: "mediation", m7: true, tag: "Mediation", titel: "Auf Deutsch weitersagen", lead: "Deine Oma hört das Telefonat mit, versteht aber kein Englisch. Sag ihr auf Deutsch in zwei bis drei Sätzen, wann Sophies Praktikum beginnt, wie lange es dauert und was Sophie mitbringen muss.",
        fragen: [{ q: "Was sagst du deiner Oma?", m: "Sophie beginnt ihr Praktikum in der Tierarztpraxis am 12. Mai und bleibt zwei Wochen. Sie muss feste Stiefel und ein Mittagessen von zu Hause mitbringen. Einen Kittel bekommt sie von der Praxis.", k: ["Mai|mai", "Stiefel|stiefel|Schuhe", "zwei Wochen|2 Wochen|Wochen"], min: 3 }],
        tipp: "Du musst nicht alles übersetzen: Nenne das Datum, die Dauer und die wichtigsten Dinge zum Mitbringen." }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea, the changes and corrections in a conversation and in a phone call – and you can use going to and the passive in your own sentences." }
});
