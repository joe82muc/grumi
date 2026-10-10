/* Englisch 9R · Unit 4 News from New Zealand · Writing: My application
   (Bewerbung als formelle E-Mail auf eine Anzeige schreiben: Mustertext lesen, Praktikumsbericht im simple past als
   Vorübung, formelle Wendungen, Grammatik der Unit – going to für Pläne, simple past für Erfahrung –, dann planen,
   schreiben, prüfen, überarbeiten, abgeben)
   LehrplanPLUS E9 2.1 Schreiben (Bewerbung), E9 3 (Texte planen und überarbeiten), E9 5 (Neuseeland: Arbeit).
   Texte: „An e-mail to a farm shop“ (texte/u4/writing-farm-shop.js, Mustertext zu einem anderen Auftrag) und die
   Anzeige „Kitchen helper wanted“ (texte/u4/writing-camp-advert.js, Material zum Schreibauftrag). Tessa,
   Mr Sutherland, Ms Rangi, der Hofladen und Kereru Hill Camp sind erfunden. */
D7Kit.seite({
  id: "u4-writing",
  titel: "Writing: My application",
  einleitung: "You write a formal e-mail to apply for a job. First you read a model e-mail and practise the simple past in a short work experience report. Then you learn formal phrases and check going to and the simple past. At the end you plan, write, check and revise your own application – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["📧 I know the parts of an application e-mail.", "💬 I use formal phrases like Dear Ms … and I look forward to hearing from you.", "🔤 I use the simple past for my experience and going to for my plans.", "📝 I plan, write, check and revise my own application."],
  quiz: { profi: "Application writing pro" },
  glossar: {
    apply: ["to apply", "Sich bewerben: Du schreibst, dass du eine Stelle haben möchtest, und erklärst, warum du gut passt."],
    advert: ["advert", "Eine Anzeige: Darin steht, welche Stelle frei ist und wen man sucht."],
    formal: ["formal", "Förmlich und höflich, so wie man an Erwachsene schreibt, die man nicht gut kennt."],
    experience: ["experience", "Erfahrung: Das sind Dinge, die du schon gemacht hast und aus denen du etwas gelernt hast."],
    strengths: ["strengths", "Stärken: Das sind Dinge, die du gut kannst, oder gute Eigenschaften von dir."],
    reliable: ["reliable", "Zuverlässig: Man kann sich auf die Person verlassen."],
    farmshop: ["farm shop", "Ein Hofladen: ein kleiner Laden auf einem Bauernhof, in dem zum Beispiel Eier und Honig verkauft werden."],
    schoolcamp: ["school camp", "Ein Schullandheim: ein Haus, in dem Schulklassen ein paar Tage wohnen und gemeinsam kochen und spielen."]
  },
  haupttext: "u4-write-farm-shop",
  stationen: [
    { kurz: "Model", ober: "1 · A model e-mail", titel: "An application e-mail", teile: [
      { art: "text", html: "<p class=\"lead\">You <button class=\"term\" data-t=\"apply\">apply</button> for a job with a <button class=\"term\" data-t=\"formal\">formal</button> e-mail. Read this model. It is about a job in a <button class=\"term\" data-t=\"farmshop\">farm shop</button>. <span class=\"de\">Lies den Mustertext. Tessa, Mr Sutherland und der Hofladen sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u4-write-farm-shop" },
      { art: "mc", id: "wer", tag: "Understand", titel: "What is the e-mail about?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Why does Tessa write to Mr Sutherland?", o: ["She wants a Saturday job at his farm shop.", "She wants to buy eggs and honey.", "She wants to ask for a day off school.", "She wants to sell him a new cash register."], a: 0,
            e: "The first part says: I am writing to apply for the Saturday job at your farm shop." },
          { q: "What did Tessa do at her aunt's stall?", o: ["She packed eggs, counted money and talked to customers.", "She cooked lunch for the market.", "She painted the stall.", "She drove the aunt to the market."], a: 0,
            e: "These jobs are her experience: packed eggs, counted the money, talked to the customers." }
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the e-mail?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-write-farm-shop",
        fragen: [
          { q: "Where does Tessa say why she is writing?", zeilen: [3, 4], e: "I am writing to apply for the Saturday job at your farm shop.", tipp: "Look at the first part after the greeting." },
          { q: "Where does she write about her experience?", zeilen: [7, 8], e: "She packed eggs, counted the money and talked to the customers.", tipp: "Look for verbs in the simple past." },
          { q: "Where does she say that she is free on Saturdays?", zeilen: [11, 12], e: "She is going to be free every Saturday until the end of the year.", tipp: "Look for going to." }
        ] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "How the e-mail is built", lead: "Put the parts of the e-mail in the right order. <span class=\"de\">Bringe die Teile der E-Mail in die richtige Reihenfolge.</span>",
        schritte: ["Subject line", "Greeting with a name", "Why I am writing", "My experience", "My strengths", "Ending: I look forward to hearing from you", "Yours sincerely and my name"] }
    ] },
    { kurz: "Report", ober: "2 · Warm-up", titel: "A work experience report", teile: [
      { art: "text", html: "<p class=\"lead\">In an application you often write about <button class=\"term\" data-t=\"experience\">experience</button>, and that needs the <b>simple past</b>. Practise it with a short report from a <button class=\"term\" data-t=\"schoolcamp\">school camp</button> kitchen. <span class=\"de\">Der Bericht ist erfunden. Übe das simple past.</span></p>" },
      { art: "luecke", id: "bericht", tag: "Gap text", titel: "My week in the kitchen", lead: "Complete the report with the simple past. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["On Monday I started my work experience in the kitchen of a school camp. First I ", { g: "washed" }, " my hands with soap and put on an apron."],
          ["Then I ", { g: "cut" }, " the carrots into small pieces. At lunch I ", { g: "ate" }, " soup with the cook."],
          ["On Friday I ", { g: "broke" }, " a big plate, but the cook only laughed. At the end of the week I knew it: I like working in a kitchen."]
        ], extra: ["breaked", "cutted"] },
      { art: "ordnen", id: "bericht-ordnen", tag: "Order", titel: "What happened in which order?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["I washed my hands.", "I cut the carrots.", "I ate soup with the cook.", "I broke a plate.", "I knew that I like working in a kitchen."] }
    ] },
    { kurz: "Phrases", ober: "3 · Formal phrases", titel: "Words for an application", teile: [
      { art: "merke", kopf: "PHRASES", html: "<ul><li><b>Greeting:</b> Dear Ms Rangi, / Dear Mr Sutherland, (not: Hi, Hey)</li><li><b>Why I write:</b> I am writing to apply for … / I would like to apply for …</li><li><b>Experience:</b> Last year I … (simple past) / I have experience in …</li><li><b>Strengths:</b> I am friendly, <button class=\"term\" data-t=\"reliable\">reliable</button> and hard-working. / I am good at …</li><li><b>Ending:</b> I look forward to hearing from you. / Thank you for your time.</li><li><b>Closing:</b> Yours sincerely, / Kind regards, (not: Bye, Cheers)</li></ul>" },
      { art: "sort", id: "formell", tag: "Sort", titel: "Formal or informal?", lead: "Put the sentences into the right box. <span class=\"de\">Formell = höflich und für Erwachsene, informell = für Freunde.</span>",
        buckets: ["Formal (application)", "Informal (friends)"],
        items: [{ t: "Dear Ms Rangi,", b: 0 }, { t: "I am writing to apply for the job.", b: 0 }, { t: "I look forward to hearing from you.", b: 0 }, { t: "Yours sincerely,", b: 0 }, { t: "Thank you for your time.", b: 0 },
                { t: "Hi there!", b: 1 }, { t: "I wanna help in your kitchen.", b: 1 }, { t: "Write back soon, OK?", b: 1 }, { t: "Bye for now!", b: 1 }, { t: "Can I have the job?", b: 1 }] },
      { art: "paare", id: "wendungen", tag: "Match", titel: "What do the phrases mean?", lead: "Find the pairs. <span class=\"de\">Verbinde die englische Wendung mit der deutschen.</span>",
        paare: [["I am writing to apply for …", "Ich schreibe, um mich auf … zu bewerben"], ["I look forward to hearing from you.", "Ich freue mich auf Ihre Antwort."], ["I have experience in …", "Ich habe Erfahrung in …"], ["I am good at …", "Ich kann gut …"], ["I am available on …", "Ich habe Zeit am …"], ["Yours sincerely,", "Mit freundlichen Grüßen"]] },
      { art: "mc", id: "formmc", tag: "Choose", titel: "Which phrase is best?", lead: "Tick the best answer.",
        fragen: [
          { q: "Which sentence tells the reader why you are writing?", o: ["I am writing to apply for the job in your kitchen.", "I am writing for apply the job in your kitchen.", "I wanna have the job in your kitchen.", "I write you because job kitchen."], a: 0,
            e: "I am writing to apply for … is polite and correct. The other sentences are informal or have mistakes." },
          { q: "Which ending is best for an application?", o: ["I look forward to hearing from you. Kind regards, Kim", "Write back soon! Bye, Kim", "That's all. See you, Kim", "Hope you say yes!!! Cheers, Kim"], a: 0,
            e: "A formal e-mail ends with a polite sentence and Kind regards or Yours sincerely." }
        ] }
    ] },
    { kurz: "Language", ober: "4 · Language check", titel: "Going to and the simple past", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>Simple past</b> for experience that is finished: Last summer I <u>helped</u> my aunt. I <u>sold</u> eggs. Irregular verbs: sell – sold, give – gave, write – wrote.</li><li><b>going to</b> for plans: I <u>am going to</u> be free on Saturdays. My parents <u>are going to</u> drive me. = <i>am / is / are + going to + verb</i></li><li>Typical mistakes: <i>Last summer I help …</i> (right: <i>helped</i>) and <i>I am going help …</i> (right: <i>I am going to help</i>).</li></ul>" },
      { art: "luecke", id: "goingto", tag: "Gap text", titel: "Plans for the holidays", lead: "Complete the sentences with going to. <span class=\"de\">Eine Form bleibt übrig.</span>",
        absaetze: [
          ["I ", { g: "am going to" }, " be free on Saturdays until the end of the year."],
          ["My parents ", { g: "are going to" }, " drive me to the shop in the morning."],
          ["My sister ", { g: "is going to" }, " look after the stall with me."]
        ], extra: ["is go to"] },
      { art: "markieren", id: "verben", tag: "Mark", titel: "Find the simple past", finde: "the verbs in the simple past", toleranz: 0,
        satz: "Last winter I [[looked]] after my neighbour's dog. I [[walked]] him every morning, and I [[fed]] him twice a day. This summer I am going to look for a job.",
        e: "Looked, walked and fed are the simple past: last winter is a finished time. Am going to look is a plan, so it is not the simple past." },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["Last summer I worked in a bookshop.", "Last summer I work in a bookshop.", "Last summer I working in a bookshop.", "Last summer I did worked in a bookshop."], a: 0,
            e: "Last summer is a finished time, so you use the simple past: worked." },
          { q: "Which sentence is correct?", o: ["I am going to send my e-mail next week.", "I going to send my e-mail next week.", "I am going to sending my e-mail next week.", "I am go to send my e-mail next week."], a: 0,
            e: "For a plan you need am / is / are + going to + the basic verb." },
          { q: "Which sentence is correct?", o: ["I wrote to the camp manager on Monday.", "I writed to the camp manager on Monday.", "I write to the camp manager on Monday.", "I was write to the camp manager on Monday."], a: 0,
            e: "Write is an irregular verb. Its simple past is wrote." }
        ] }
    ] },
    { kurz: "Write", ober: "5 · Plan and write", titel: "Your application", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Lies die Anzeige. Du planst mit Stichpunkten, schreibst die E-Mail, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps. Hast du noch keine Erfahrung, darfst du etwas erfinden, das gut zur Anzeige passt.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "My application",
        material: { lesetext: "u4-write-camp-advert" },
        plan: [
          { id: "anrede", label: "Subject and greeting", hilfe: "Betreff (z. B. Kitchen helper) und die Anrede: Dear Ms …,", zeilen: 1 },
          { id: "anliegen", label: "Why am I writing?", hilfe: "I am writing to apply for … Wo hast du die Anzeige gesehen? Wie alt bist du?", zeilen: 2 },
          { id: "erfahrung", label: "My experience", hilfe: "Zwei oder drei Dinge, die du schon gemacht hast (simple past): Last year I … Familie, Schule, Verein", zeilen: 3 },
          { id: "staerken", label: "My strengths", hilfe: "Zwei Eigenschaften (friendly, reliable …), ein Satz mit I am good at …, wann du Zeit hast (am going to be free …)", zeilen: 3 },
          { id: "schluss", label: "Ending and greeting", hilfe: "I look forward to hearing from you. Yours sincerely, und dein Vorname", zeilen: 2 }
        ],
        auftrag: { R: "<p>Read the advert. Write a formal e-mail (about 80–100 words) to Ms Rangi and apply for the job.</p><ul><li>Start with a subject line and <i>Dear Ms Rangi,</i>.</li><li>Say why you are writing and where you saw the advert.</li><li>Write about your experience (simple past).</li><li>Write about your strengths and when you are free (going to).</li><li>End with a polite sentence and <i>Yours sincerely</i> or <i>Kind regards</i>.</li></ul><p><span class=\"de\">Lies die Anzeige und schreibe eine formelle E-Mail an Ms Rangi: Betreff und Anrede, warum du schreibst, deine Erfahrung, deine Stärken und ein höflicher Schluss.</span></p>" },
        min: { R: 80 },
        kriterien: { R: ["I write a subject line and start with Dear Ms Rangi.", "I say why I am writing (I am writing to apply for …).", "I write about my experience in the simple past.", "I name two strengths and use going to for a plan or for the time I am free.", "I use no informal words like Hi, wanna or Bye.", "I end with a polite sentence, Yours sincerely or Kind regards, and my name."] },
        starter: ["Dear Ms Rangi,", "I am writing to apply for …", "Last year I …", "I am … and …", "I am going to be …", "I look forward to hearing from you.", "Yours sincerely,"] }
    ] },
    { kurz: "Revise", ober: "6 · Check and revise", titel: "Make your text better", teile: [
      { art: "tf", id: "tipps", tag: "Check", titel: "How to check your application", lead: "True or false?",
        aussagen: [
          ["A formal e-mail starts with Dear and a name.", true],
          ["You say why you are writing in the first part of the e-mail.", true],
          ["For finished experience in the past you use the simple past.", true],
          ["In an application you can write wanna and gonna.", false],
          ["You end an application with Bye and a smiley.", false]
        ] },
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler, sie sind fett gedruckt.</span></p><blockquote><b>Hi there,</b> I am writing to apply for the job at your riding stable. Last summer I <b>help</b> my neighbour with her two horses. I fed them and cleaned the stable every day. I am good with animals, and I <b>am going help</b> every weekend if you need me.</blockquote>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "The e-mail starts with “Hi there,”. How do you correct it?", o: ["Dear Sir or Madam,", "Hello my friend,", "Hey you,", "Dear friend!!!"], a: 0,
            e: "A formal e-mail starts with Dear. If you do not know the name, Dear Sir or Madam is correct." },
          { q: "“Last summer I help my neighbour.” How do you correct it?", o: ["Last summer I helped my neighbour.", "Last summer I have help my neighbour.", "Last summer I helping my neighbour.", "Last summer I did helped my neighbour."], a: 0,
            e: "Last summer is a finished time, so you use the simple past: helped." },
          { q: "“I am going help every weekend.” How do you correct it?", o: ["I am going to help every weekend.", "I going to help every weekend.", "I am go to help every weekend.", "I am going to helping every weekend."], a: 0,
            e: "For a plan you need going to and then the basic verb: I am going to help." }
        ] },
      { art: "offen", id: "satz", m7: true, tag: "Challenge", titel: "Your strengths", lead: "Write two sentences for the strengths part of an application. Say what you are like and what you are going to do. <span class=\"de\">Schreibe zwei Sätze: wie du bist und was du vorhast. Benutze going to.</span>",
        fragen: [{ q: "Your sentences: …", m: "I am friendly and reliable. I am going to work hard every Saturday.", k: ["friendly|reliable|hard-working|helpful|patient|polite|kind|good at", "going to"], min: 2 }],
        tipp: "Start like this: I am … and … I am going to …" }
    ] },
    { kurz: "Check", ober: "7 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Rules to remember", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A formal e-mail begins with ", { g: "Dear" }, " and a name."],
          ["For my experience in the past I use the ", { g: "simple past" }, "."],
          ["For my plans I use am, is or are + ", { g: "going to" }, " + the basic verb."],
          ["At the end I write ", { g: "Yours sincerely" }, " or Kind regards and my name."]
        ], extra: ["Hi", "Bye"] }
    ] }
  ],
  weiter: { text: "Well done! You can plan, write and revise an application. Use the same steps for other formal e-mails." }
});
