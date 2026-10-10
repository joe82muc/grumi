/* Englisch 9R · Prüfungstraining · Writing: E-mails step by step
   (zwei E-Mail-Arten: persönlich und förmlich. Aufbau erkennen, Wendungen unterscheiden, typische Fehler finden,
   dann planen, schreiben, prüfen, überarbeiten: PLAN – WRITE – CHECK – REVISE – SUBMIT. Neufassung der alten Seite
   „Email Writing Coach“ – nichts davon übernommen.)
   LehrplanPLUS E9 2.1 Schreiben (persönliche und förmliche E-Mail mit Betreff, Anrede, Anliegen, Fragen, Gruß und Name),
   E9 3 (Texte planen und überarbeiten).
   Texte: „A first email to Freya“ (texte/pruefung/email-jonas-freya.js) und „An enquiry to a swimming pool“
   (texte/pruefung/email-pool-enquiry.js) – Personen, Schwimmbad und Museum sind erfunden. */
D7Kit.seite({
  id: "u3-email",
  titel: "Writing: E-mails step by step",
  einleitung: "You write two kinds of emails: a personal email to a new friend and a formal email to an office. First you look at two good examples. Then you check typical mistakes, plan, write and revise your own emails.",
  zeit: "etwa 45 Minuten",
  ziele: ["✉️ I know the parts of a personal email.", "🏛️ I can tell formal and informal phrases apart.", "🔍 I find typical mistakes in emails.", "📝 I plan, write and revise my own emails."],
  quiz: { profi: "E-mail pro" },
  glossar: {
    subject: ["subject", "Der Betreff: eine kurze Zeile ganz oben, die sagt, worum es in der E-Mail geht."],
    greeting: ["greeting", "Die Anrede am Anfang. An Freunde schreibst du „Hi Freya,“ – mit Komma danach."],
    closing: ["closing", "Der Gruß am Schluss, danach kommt dein Name. Zum Beispiel „Best wishes,“ oder „Yours faithfully,“."],
    formal: ["formal", "Förmlich und höflich: So schreibst du an Ämter, Firmen und Leute, die du nicht kennst."],
    informal: ["informal", "Persönlich und locker: So schreibst du an Freunde und Familie, oft mit Kurzformen wie I'm oder I'd."],
    enquiry: ["enquiry", "Eine Anfrage: Du fragst nach Informationen, zum Beispiel nach Preisen oder Öffnungszeiten."]
  },
  stationen: [
    { kurz: "Model", ober: "1 · A personal email", titel: "Look at a good personal email", teile: [
      { art: "text", html: "<p class=\"lead\">Jonas lives in Germany. He writes his first email to Freya, a new email friend in Scotland. Read the email. <span class=\"de\">Lies die E-Mail einmal ganz durch. Jonas und Freya sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "email-jonas-freya" },
      { art: "mc", id: "wer", tag: "Understand", titel: "Who writes and why?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Why does Jonas write the email?", o: ["He wants to say hello and tell Freya about himself.", "He wants to ask Freya for a job.", "He wants to change a holiday booking.", "He wants to say sorry to his teacher."], a: 0,
            e: "It is a first email to a new friend: he says hello, tells about himself and asks questions. Words like Hi, I'm and Best wishes show that it is informal." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the email?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "email-jonas-freya",
        fragen: [
          { q: "Where does Jonas say why he writes?", zeilen: [3, 4], e: "He says that his teacher gave him the address and that he wants to say hello.", tipp: "Look at the first paragraph after the greeting." },
          { q: "Where does he write about his hobby?", zeilen: [7, 8], e: "His hobby is table tennis – he plays twice a week.", tipp: "Look for the words favourite hobby." },
          { q: "Where does he ask his questions?", zeilen: [10, 11], e: "Two questions: one about after school, one about pets.", tipp: "Look for the question marks." }
        ] },
      { art: "ordnen", id: "teile", tag: "Order", titel: "The parts of a personal email", lead: "Put the parts in the right order. <span class=\"de\">Bringe die Teile der E-Mail in die richtige Reihenfolge.</span>",
        schritte: ["subject (Your new email friend)", "greeting (Hi Freya,)", "why I am writing (Our teacher gave me your address.)", "about me (family, hobby)", "my questions (What do you do after school?)", "ending and closing (Please write back soon. Best wishes,)", "my name (Jonas)"] }
    ] },
    { kurz: "Formal", ober: "2 · A formal email", titel: "Look at a formal email", teile: [
      { art: "merke", kopf: "TWO KINDS OF EMAILS", html: "<p>To friends you write <button class=\"term\" data-t=\"informal\">informal</button>: Hi, short forms, friendly words. To an office, a company or a person you do not know you write <button class=\"term\" data-t=\"formal\">formal</button>: Dear …, polite questions, no short forms. In both kinds you need a <button class=\"term\" data-t=\"subject\">subject</button>, a <button class=\"term\" data-t=\"greeting\">greeting</button>, a <button class=\"term\" data-t=\"closing\">closing</button> and your name.</p>" },
      { art: "text", html: "<p class=\"lead\">Marie wants to go swimming with her class. She writes an <button class=\"term\" data-t=\"enquiry\">enquiry</button> to a pool. Read it. <span class=\"de\">Marie und das Schwimmbad sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "email-pool-enquiry" },
      { art: "mc", id: "formell", tag: "Formal phrases", titel: "Which phrase fits?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Marie does not know the name of the person. Which greeting fits?", o: ["Dear Sir or Madam,", "Hi there,", "Hey guys,", "Hello my friend,"], a: 0,
            e: "\"Dear Sir or Madam,\" is the formal greeting when you do not know a name." },
          { q: "Which sentence is a good start for a formal email?", o: ["I am writing to ask about a visit with my class.", "Hey, I wanna come with my class.", "What's up? We come in May.", "Listen, we need a price."], a: 0,
            e: "\"I am writing to ask about …\" says politely why you write." },
          { q: "Which question is polite?", o: ["Could you tell me when the pool is open?", "Tell me when the pool is open.", "Wanna say when you open?", "When you open the pool?"], a: 0,
            e: "\"Could you tell me …?\" is a polite question. The other sentences sound rude or are not correct." },
          { q: "Which closing goes with \"Dear Sir or Madam\"?", o: ["Yours faithfully,", "Cheers,", "CU soon,", "Love,"], a: 0,
            e: "After \"Dear Sir or Madam\" you write \"Yours faithfully,\" (or \"Kind regards,\")." }
        ] },
      { art: "sort", id: "sortieren", tag: "Sort", titel: "Formal or informal?", lead: "Put the phrases into the right box.",
        buckets: ["Formal", "Informal"],
        items: [{ t: "Dear Sir or Madam,", b: 0 }, { t: "I am writing to ask about …", b: 0 }, { t: "Could you tell me …?", b: 0 }, { t: "I look forward to hearing from you.", b: 0 },
                { t: "Yours faithfully,", b: 0 }, { t: "Hey!", b: 1 }, { t: "I wanna know …", b: 1 }, { t: "What's up?", b: 1 }, { t: "CU soon!", b: 1 }, { t: "Cheers,", b: 1 }] },
    ] },
    { kurz: "Language", ober: "3 · Language check", titel: "Typical mistakes in emails", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li>Write <b>I</b>, days (<i>Friday</i>) and countries with a capital letter.</li><li>After the greeting comes a comma: <i>Hi Freya,</i></li><li>Questions: <i>Do you have …? Does your school …? Could you tell me …?</i></li><li>After <i>look forward to</i> you use -ing: <i>I look forward to hearing from you.</i></li></ul>" },
      { art: "markieren", id: "gross", tag: "Find the mistakes", titel: "Capital letters", finde: "the four words with a mistake", toleranz: 0,
        satz: "[[hi]] Freya, [[i]] play football on [[saturday]] and [[sunday]].",
        e: "The greeting, I and the days of the week start with a capital letter: Hi, I, Saturday, Sunday." },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["On Friday I play table tennis with my friends.", "On friday I play table tennis with my friends.", "On Friday i play table tennis with my friends.", "On friday i play table tennis with my friends."], a: 0,
            e: "Friday and I always start with a capital letter." },
          { q: "Which question is correct?", o: ["Does your school start at eight?", "Do your school start at eight?", "Your school starts at eight do?", "Is your school starts at eight?"], a: 0,
            e: "School is one thing (it), so you use does." },
          { q: "Which sentence is correct?", o: ["I look forward to hearing from you.", "I look forward to hear from you.", "I look forward hearing from you.", "I look forward to heard from you."], a: 0,
            e: "After \"look forward to\" the verb gets -ing." },
          { q: "Which closing is NOT usual in an email?", o: ["Greetings", "Best wishes,", "All the best,", "Kind regards,"], a: 0,
            e: "\"Greetings\" is no closing. Write Best wishes, All the best or Kind regards, and then your name." },
          { q: "Which greeting is correct?", o: ["Hi Freya,", "Hi Freya.", "Hi Freya and", "Hi Freya:-"], a: 0,
            e: "A comma comes after the name in the greeting." }
        ] },
      { art: "luecke", id: "fragen", tag: "Gap text", titel: "Ask the right question", lead: "Complete the questions. <span class=\"de\">Ein Wort bleibt übrig.</span>",
        absaetze: [
          ["", { g: "Do" }, " you have any pets? – Yes, I do."],
          ["", { g: "Does" }, " your school have a sports hall? – Yes, it does."],
          ["", { g: "Could" }, " you tell me the price for a group, please? – Of course."]
        ], extra: ["Are"] }
    ] },
    { kurz: "Write", ober: "4 · Plan and write", titel: "Your personal email", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Du planst mit Stichpunkten, schreibst, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "Your first email to a new friend",
        plan: [
          { id: "kopf", label: "Subject and greeting", hilfe: "Subject: … / Hi …,", zeilen: 1 },
          { id: "ich", label: "Who are you? Where do you live?", hilfe: "Name, Alter, Ort, Familie – Stichpunkte reichen", zeilen: 2 },
          { id: "freizeit", label: "School and free time", hilfe: "Lieblingsfach, Hobby, Sport, Musik", zeilen: 3 },
          { id: "fragen", label: "Three questions for your friend", hilfe: "Do you …? / Does your …? / Could you tell me …?", zeilen: 3 },
          { id: "schluss", label: "Ending, closing and name", hilfe: "Please write back soon. / Best wishes,", zeilen: 1 }
        ],
        auftrag: { R: "<p>You have a new email friend in an English-speaking country (for example England, Canada or New Zealand). Choose the name of your friend and the country. Write your first email (about 80–100 words).</p><ul><li>Write a subject, a greeting, a closing and your name.</li><li>Say who you are. Tell your friend about your school and your free time.</li><li>Ask three questions.</li></ul><p><span class=\"de\">Du hast eine neue E-Mail-Freundin oder einen neuen E-Mail-Freund. Wähle Namen und Land selbst. Stelle dich vor, erzähle von Schule und Freizeit und stelle drei Fragen.</span></p>" },
        min: { R: 80 },
        kriterien: { R: ["Subject, greeting, closing and my name are there.", "I say who I am and where I live.", "I write about school and free time.", "I ask three questions with do, does or could.", "I write I, days and countries with a capital letter."] },
        starter: ["Subject: …", "Hi …,", "My name is … and I'm … years old.", "I live in …", "In my free time I …", "Do you …?", "Please write back soon.", "Best wishes,"] }
    ] },
    { kurz: "Formal write", ober: "5 · Write formally", titel: "A formal enquiry", teile: [
      { art: "schreiben", id: "formell-schreiben", tag: "Writing trainer", titel: "Write to a museum", min: 50,
        auftrag: "<p>You would like to visit a museum of technology with your class. Write a formal email to the museum (about 50–70 words).</p><ul><li>Ask about guided tours.</li><li>Ask about the prices for groups.</li><li>Ask if there is a room for your lunch break.</li></ul><p><span class=\"de\">Du möchtest mit deiner Klasse ein Technikmuseum besuchen. Schreibe eine förmliche E-Mail: Frage nach Führungen, Preisen für Gruppen und einem Raum für die Pause. Den Namen des Museums musst du nicht nennen.</span></p>",
        kriterien: ["The email has a subject, Dear Sir or Madam, a closing and my name.", "I say why I write: I am writing to ask about …", "I ask about tours, prices and a room, with Could you tell me …? or Is there …?", "I use polite words and no short forms like wanna or I'd.", "I end with I look forward to hearing from you."],
        starter: ["Dear Sir or Madam,", "I am writing to ask about …", "Could you tell me …?", "Is there a room where …?", "I look forward to hearing from you.", "Yours faithfully,"] }
    ] },
    { kurz: "Revise", ober: "6 · Check and revise", titel: "Make your emails better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check an email", lead: "True or false?",
        aussagen: [
          ["Read your email aloud before you send it.", true],
          ["An email needs no subject line.", false],
          ["In a formal email you can start with Hey.", false],
          ["Check I, days and countries: they start with a capital letter.", true],
          ["Check your questions: do, does or Could you …?", true]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a paragraph from another student's email. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler.</span></p><blockquote>Thanks for your email! Our school finishes early on <b>friday</b>, so I often meet my friends in town. <b>Do your school</b> finish early too? I look forward <b>to hear</b> from you.</blockquote><p class=\"de\">Die drei fett gedruckten Stellen stimmen nicht.</p>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Our school finishes early on friday … How do you correct it?", o: ["Our school finishes early on Friday.", "Our school finish early on Friday.", "Our school finishes early on fridays.", "Our school is finishes early on Friday."], a: 0,
            e: "Days of the week start with a capital letter: Friday." },
          { q: "Do your school finish early too? How do you correct it?", o: ["Does your school finish early too?", "Are your school finish early too?", "Do your school finishes early too?", "Does your school finishes early too?"], a: 0,
            e: "Your school is one thing, so you need does. After does the verb has no s: finish." },
          { q: "I look forward to hear from you. How do you correct it?", o: ["I look forward to hearing from you.", "I look forward to heard from you.", "I look forward hearing from you.", "I look forward to hears from you."], a: 0,
            e: "After \"look forward to\" you use the -ing form." }
        ] },
      { art: "offen", id: "formal-umschreiben", m7: true, tag: "Challenge", titel: "Make it formal", lead: "Rewrite the sentence in a formal way. <span class=\"de\">Schreibe den lockeren Satz förmlich und höflich um.</span>",
        fragen: [{ q: "Hey! Wanna tell me the prices for groups?", m: "Dear Sir or Madam, could you tell me the prices for groups, please?", k: ["could|would|can", "tell|send|give", "price|prices|cost|costs"], min: 3 }],
        tipp: "Start like this: Could you tell me …?" },
    ] },
    { kurz: "Check", ober: "7 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Personal or formal?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["To a friend I write ", { g: "Hi" }, " and the name. To an office I write ", { g: "Dear Sir or Madam" }, "."],
          ["The closing for \"Dear Sir or Madam\" is ", { g: "Yours faithfully" }, "."],
          ["In a formal email I ask politely: ", { g: "Could" }, " you tell me …?"],
          ["I end with: I look forward to ", { g: "hearing" }, " from you."]
        ], extra: ["Yours sincerely", "Wanna"] }
    ] }
  ],
  weiter: { text: "Well done! You know the parts of a personal and a formal email, and you can plan, write and revise both." }
});
