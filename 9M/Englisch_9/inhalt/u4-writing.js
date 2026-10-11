/* Englisch 9M · Unit 4 News from New Zealand · Writing: My application · M-Fassung
   (Bewerbung als formelle E-Mail auf eine Anzeige schreiben: reichen Mustertext lesen, Praktikumsbericht im simple past als
   Vorübung, formelle Wendungen, Grammatik der Unit – simple past für Erfahrung, going to für Pläne, Passiv im simple present
   und simple past, auch selbst bilden mit by –, dann planen, schreiben, prüfen, überarbeiten, abgeben)
   LehrplanPLUS E9 2.1 Schreiben (Bewerbung; M-Zug: etwa 130–150 Wörter), E9 3 (Texte planen und überarbeiten), E9 5 (Neuseeland: Arbeit).
   Texte: „An e-mail to a farm shop“ (texte/u4/writing-farm-shop-m.js, Mustertext zu einem anderen Auftrag) und die
   Anzeige „Kitchen helpers wanted“ (texte/u4/writing-camp-advert-m.js, Material zum Schreibauftrag). Tessa,
   Mr Sutherland, Ms Rangi, der Hofladen und Kereru Hill Camp sind erfunden. */
D7Kit.seite({
  id: "u4-writing",
  titel: "Writing: My application",
  einleitung: "You write a formal e-mail to apply for a job. First you read a rich model e-mail and practise the simple past in a short work experience report. Then you learn formal phrases and check going to, the simple past and the passive. At the end you plan, write, check and revise your own application – step by step.",
  zeit: "etwa 45 Minuten",
  ziele: ["📧 I know the parts of an application e-mail and give reasons.", "💬 I use formal phrases like Dear Ms … and I would be glad to …", "🔤 I use the simple past, going to and the passive (with by).", "📝 I plan, write, check and revise my own application."],
  quiz: { profi: "Application writing pro" },
  glossar: {
    apply: ["to apply", "Sich bewerben: Du schreibst, dass du eine Stelle haben möchtest, und erklärst, warum du gut passt."],
    advert: ["advert", "Eine Anzeige: Darin steht, welche Stelle frei ist und wen man sucht."],
    formal: ["formal", "Förmlich und höflich, so wie man an Erwachsene schreibt, die man nicht gut kennt."],
    experience: ["experience", "Erfahrung: Das sind Dinge, die du schon gemacht hast und aus denen du etwas gelernt hast."],
    strengths: ["strengths", "Stärken: Das sind Dinge, die du gut kannst, oder gute Eigenschaften von dir."],
    reliable: ["reliable", "Zuverlässig: Man kann sich auf die Person verlassen."],
    farmshop: ["farm shop", "Ein Hofladen: ein kleiner Laden auf einem Bauernhof, in dem zum Beispiel Eier und Honig verkauft werden."],
    schoolcamp: ["school camp", "Ein Schullandheim: ein Haus, in dem Schulklassen ein paar Tage wohnen und gemeinsam kochen und spielen."],
    notice: ["notice", "Ein Aushang: ein Zettel an einer Wand oder einem Brett, auf dem eine Information steht."],
    available: ["available", "Verfügbar: Du hast Zeit und kannst an diesem Tag arbeiten."],
    interview: ["interview", "Ein Vorstellungsgespräch: Du sprichst mit der Chefin oder dem Chef, damit sie dich kennenlernen."],
    passive: ["passive", "Das Passiv: Es sagt, was mit einer Sache geschieht, und nicht, wer etwas tut. Mit by nennst du die Person doch noch."]
  },
  haupttext: "u4-write-farm-shop-m",
  stationen: [
    { kurz: "Model", ober: "1 · A model e-mail", titel: "An application e-mail", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a Saturday job in a farm shop</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u4-shop.jpg\" alt=\"A young helper puts crates of fruit and vegetables on a shelf in a farm shop; the owner shows her what to do.\" loading=\"lazy\" style=\"width:100%;border-radius:14px\"></figure><p>What does the young woman do there? Would you like this job? Why (not)? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">You <button class=\"term\" data-t=\"apply\">apply</button> for a job with a <button class=\"term\" data-t=\"formal\">formal</button> e-mail. Read this model. Tessa saw a <button class=\"term\" data-t=\"notice\">notice</button> for a job in a <button class=\"term\" data-t=\"farmshop\">farm shop</button>. Think about <i>why</i> she writes each part. Tessa, Mr Sutherland and the shop are invented.</p>" },
      { art: "lesetext", lesetext: "u4-write-farm-shop-m" },
      { art: "mc", id: "wer", tag: "Understand", titel: "Read between the lines", lead: "Tick the correct answer.",
        fragen: [
          { q: "What does the story about the dropped box show?", o: ["Tessa can learn from a mistake and does not give up.", "Tessa is careless and often breaks things.", "Tessa's aunt was angry with her.", "Tessa does not like working at a stall."], a: 0,
            e: "Her aunt only laughed, and Tessa learned to work more carefully. So the mistake helped her to get better." },
          { q: "Why does Tessa say that her parents are going to drive her?", o: ["She wants to show that she will be on time.", "She cannot ride a bike.", "Her parents want to work in the shop, too.", "The shop is very far away."], a: 0,
            e: "Tessa gives the reason herself: she will always be on time. Being on time is important for an employer." },
          { q: "Why does Tessa write about the vegetables and the shelves?", o: ["She shows that she knows the shop and wants to help.", "She wants to buy vegetables at a good price.", "She complains about the work in the shop.", "She would like to change the opening time."], a: 0,
            e: "She knows how the shop works and offers to help with exactly that work." }
        ] },
      { art: "tf", id: "wahr", tag: "True or false?", titel: "Careful reading", lead: "Some statements are almost right – read carefully.",
        aussagen: [
          ["Tessa was allowed to prepare an order alone after two weeks.", true],
          ["Tessa lives far from the shop and needs a lift every day.", false],
          ["Tessa will be free every day until the end of the year.", false]
        ] },
      { art: "beleg", id: "stellen", tag: "Evidence from the text", titel: "Where in the e-mail?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-write-farm-shop-m",
        fragen: [
          { q: "Where does Tessa say why she is writing and where she saw the notice?", zeilen: [3, 4], e: "I am writing to apply for the Saturday job … I saw your notice at the bus stop.", tipp: "Look at the first part after the greeting." },
          { q: "Where does she describe how she felt at the beginning and how she got better?", zeilen: [11, 12], e: "At first I was nervous, but after two weeks a regular customer asked me to prepare her order on my own.", tipp: "Look for at first … but." },
          { q: "Where does she say when she is free and how she will get to the shop?", zeilen: [20, 22], e: "She is going to be free every Saturday, and her parents are going to drive her.", tipp: "Look for going to." }
        ] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "How the e-mail is built", lead: "Put the parts of the e-mail in the right order. <span class=\"de\">Bringe die Teile der E-Mail in die richtige Reihenfolge.</span>",
        schritte: ["Subject line", "Greeting with a name", "Why I am writing", "My experience (and what I learned)", "My strengths", "When I am free", "Ending: I look forward to hearing from you", "Yours sincerely and my name"] }
    ] },
    { kurz: "Report", ober: "2 · Warm-up", titel: "A work experience report", teile: [
      { art: "text", html: "<p class=\"lead\">In an application you often write about <button class=\"term\" data-t=\"experience\">experience</button>, and that needs the <b>simple past</b>. Practise it with a short report from a <button class=\"term\" data-t=\"schoolcamp\">school camp</button> kitchen. <span class=\"de\">Der Bericht ist erfunden. Drei Verben sind unregelmäßig – nimm die richtige Form.</span></p>" },
      { art: "luecke", id: "bericht", tag: "Gap text", titel: "My week in the kitchen", lead: "Complete the report with the simple past. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["On Monday I started my work experience in the kitchen of a school camp. First I ", { g: "washed" }, " my hands with soap and put on an apron."],
          ["Then the cook ", { g: "taught" }, " me how to hold a knife safely, and I ", { g: "cut" }, " the carrots into small pieces."],
          ["On Friday I ", { g: "broke" }, " a big plate, but the cook only laughed. At the end of the week I knew it: I like working in a kitchen."]
        ], extra: ["teached", "breaked"] }
    ] },
    { kurz: "Phrases", ober: "3 · Formal phrases", titel: "Words for an application", teile: [
      { art: "merke", kopf: "PHRASES", html: "<ul><li><b>Greeting:</b> Dear Ms Rangi, / Dear Mr Sutherland, / Dear Sir or Madam, (not: Hi, Hey)</li><li><b>Why I write:</b> I am writing to apply for … / I would like to apply for …</li><li><b>Experience:</b> Last year I … (simple past) / I have experience in … / I learned to …</li><li><b>Strengths:</b> I am friendly, <button class=\"term\" data-t=\"reliable\">reliable</button> and hard-working. / I am good at …</li><li><b>Time:</b> I am <button class=\"term\" data-t=\"available\">available</button> on … / I am going to be free …</li><li><b>Ending:</b> I would be glad to come for an <button class=\"term\" data-t=\"interview\">interview</button>. / I look forward to hearing from you.</li><li><b>Closing:</b> Yours sincerely, / Kind regards, (not: Bye, Cheers)</li></ul>" },
      { art: "sort", id: "formell", tag: "Sort", titel: "Formal or informal?", lead: "Put the sentences into the right box. <span class=\"de\">Formell = höflich und für Erwachsene, informell = für Freunde.</span>",
        buckets: ["Formal (application)", "Informal (friends)"],
        items: [{ t: "I would be glad to come for an interview.", b: 0 }, { t: "Thank you for considering my application.", b: 0 }, { t: "I am available on Saturdays.", b: 0 }, { t: "Yours faithfully,", b: 0 }, { t: "Please find my details below.", b: 0 },
                { t: "Hey Mr Sutherland!", b: 1 }, { t: "I can come whenever, no problem.", b: 1 }, { t: "Thanks a lot, you're great!", b: 1 }, { t: "Cheers, Kim", b: 1 }, { t: "I'd love to work there, it sounds cool.", b: 1 }] },
      { art: "mc", id: "formmc", tag: "Choose", titel: "Which phrase is best?", lead: "Tick the best answer.",
        fragen: [
          { q: "Which sentence tells the reader about your experience in the best way?", o: ["Last summer I helped in a bakery, and I learned to work fast.", "Last summer I help in a bakery, and I learn to work fast.", "I was working very good in a bakery, you know.", "I did a lot of stuff in a bakery once."], a: 0,
            e: "Finished time (last summer) needs the simple past, and a short result (I learned …) makes the sentence stronger. The other sentences have mistakes or are too vague." }
        ] },
      { art: "offen", id: "hoeflich", m7: true, tag: "Explain", titel: "What makes it polite?", lead: "Mr Sutherland does not know Tessa. Name two phrases from her e-mail that make it polite, and explain why they are better than <i>Hi</i> and <i>Bye</i>.",
        fragen: [{ q: "Two phrases and why: …", m: "Dear Mr Sutherland and Yours sincerely are polite. They are better than Hi and Bye because they show respect to an adult and make a formal impression.", k: ["Dear|sincerely|look forward|would be glad|writing to apply", "polite|formal|respect|adult|friend|impression", "because|so|better"], min: 2 }],
        tipp: "Think about who reads your text and what he expects." }
    ] },
    { kurz: "Language", ober: "4 · Language check", titel: "Going to, simple past and the passive", teile: [
      { art: "merke", kopf: "LANGUAGE", html: "<ul><li><b>Simple past</b> for experience that is finished: Last summer I <u>helped</u> my aunt. Irregular verbs: sell – sold, teach – taught, write – wrote.</li><li><b>going to</b> for plans: I <u>am going to</u> be free on Saturdays. = <i>am / is / are + going to + verb</i></li><li><b><button class=\"term\" data-t=\"passive\">Passive</button></b> – the thing is important, not the person: <i>be + past participle</i>. Simple present: The honey <u>is sold</u> at the stall. The eggs <u>are packed</u> every day. Simple past: The shop <u>was opened</u> in spring. The boxes <u>were carried</u> inside. With <b>by</b> you name the person: The tables <u>are laid</u> <b>by</b> the helpers.</li><li>Active → passive: <i>Local farmers deliver the vegetables.</i> → <i>The vegetables are delivered by local farmers.</i> (The object becomes the subject.)</li></ul>" },
      { art: "luecke", id: "goingto", tag: "Gap text", titel: "Plans for the holidays", lead: "Complete the sentences with going to. <span class=\"de\">Eine Form bleibt übrig.</span>",
        absaetze: [
          ["Next summer my brother ", { g: "is going to" }, " start an apprenticeship as a baker."],
          ["My friends and I ", { g: "are going to" }, " visit the camp on Sunday."],
          ["I ", { g: "am going to" }, " ask Ms Rangi about the working hours."]
        ], extra: ["is go to"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["Eggs are sold at the stall every Saturday.", "Eggs is sold at the stall every Saturday.", "Eggs are sell at the stall every Saturday.", "Eggs sold at the stall every Saturday."], a: 0,
            e: "The passive needs a form of be and the past participle. Eggs is plural, so you need are." },
          { q: "Which sentence is correct?", o: ["The room was cleaned by the students yesterday.", "The room is cleaned by the students yesterday.", "The room was clean by the students yesterday.", "The room were cleaned by the students yesterday."], a: 0,
            e: "Yesterday is past time, so you need was + past participle. The room is singular." }
        ] },
      { art: "offen", id: "passiv", tag: "Write", titel: "Make it passive", lead: "Write the sentence in the passive. Name the person with <i>by</i>: <b>The cook prepares the soup every day.</b>",
        fragen: [{ q: "Passive: …", m: "The soup is prepared by the cook every day.", k: ["soup", "is prepared", "by the cook"], min: 3 }],
        tipp: "The object (the soup) comes first. Then is + past participle." },
      { art: "offen", id: "passiv-past", m7: true, tag: "Plus", titel: "Two sentences in the past", lead: "Write both sentences in the passive (simple past) with <i>by</i>: <b>1 The children painted the dining room last year. 2 A volunteer repaired the roof.</b>",
        fragen: [{ q: "Passive: 1 … 2 …", m: "1 The dining room was painted by the children last year. 2 The roof was repaired by a volunteer.", k: ["dining room", "was painted", "by the children", "roof", "was repaired", "by a volunteer"], min: 4 }],
        tipp: "Past passive: was / were + past participle. Dining room and roof are singular." }
    ] },
    { kurz: "Write", ober: "5 · Plan and write", titel: "Your application", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is your turn. Follow the steps: <b>PLAN – WRITE – CHECK – REVISE – SUBMIT</b>. <span class=\"de\">Lies die Anzeige. Du planst mit Stichpunkten, schreibst die E-Mail, prüfst mit der Checkliste, überarbeitest und gibst ab. Den Text schreibst du selbst – der Schreibcoach gibt nur Tipps. Hast du noch keine Erfahrung, darfst du etwas erfinden, das gut zur Anzeige passt.</span></p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Writing workshop", titel: "My application",
        material: { lesetext: "u4-write-camp-advert-m" },
        plan: [
          { id: "anrede", label: "Subject and greeting", hilfe: "Betreff (z. B. Kitchen helper) und die Anrede: Dear Ms …,", zeilen: 1 },
          { id: "anliegen", label: "Why am I writing?", hilfe: "I am writing to apply for … Wo hast du die Anzeige gesehen? Wie alt bist du?", zeilen: 2 },
          { id: "erfahrung", label: "My experience and what I learned", hilfe: "Zwei oder drei Dinge, die du schon gemacht hast (simple past), und was du daraus gelernt hast: Last year I … so I learned to …", zeilen: 3 },
          { id: "staerken", label: "My strengths and the camp", hilfe: "Zwei Eigenschaften, ein Satz mit I am good at …, ein Satz über das Camp im Passiv (aus der Anzeige), z. B. The bread is baked …", zeilen: 3 },
          { id: "zeit", label: "When am I free?", hilfe: "I am going to be free … und wie du zum Camp kommst", zeilen: 2 },
          { id: "schluss", label: "Ending and greeting", hilfe: "I would be glad to … / I look forward to hearing from you. Yours sincerely, und dein Vorname", zeilen: 2 }
        ],
        auftrag: {
          R: "<p>Read the advert. Write a formal e-mail (about 80–100 words) to Ms Rangi and apply for the job.</p><ul><li>Start with a subject line and <i>Dear Ms Rangi,</i>.</li><li>Say why you are writing and where you saw the advert.</li><li>Write about your experience (simple past).</li><li>Write about your strengths and when you are free (going to).</li><li>End with a polite sentence and <i>Yours sincerely</i> or <i>Kind regards</i>.</li></ul><p><span class=\"de\">Lies die Anzeige und schreibe eine formelle E-Mail an Ms Rangi: Betreff und Anrede, warum du schreibst, deine Erfahrung, deine Stärken und ein höflicher Schluss.</span></p>",
          M: "<p>Read the advert. Write a formal e-mail of about 130–150 words to Ms Rangi and apply for the job. Use paragraphs and include these points:</p><ol><li>a subject line, the greeting <i>Dear Ms Rangi,</i> and your reason for writing</li><li>two or three things you did before (simple past) and what you learned from them</li><li>two strengths, with a reason why you are good at something (<i>because</i>)</li><li>one sentence about the camp in the <b>passive</b> (for example about the food), so that Ms Rangi sees that you read the advert</li><li>when you are free and how you will get there (<i>going to</i>)</li><li>a polite ending, <i>Yours sincerely</i> or <i>Kind regards</i>, and your name</li></ol><p><span class=\"de\">Lies die Anzeige und schreibe in Absätzen eine formelle E-Mail an Ms Rangi. Wenn du noch keine Erfahrung hast, darfst du etwas erfinden, das gut zur Anzeige passt.</span></p>"
        },
        min: { R: 80, M: 130 },
        kriterien: {
          R: ["I write a subject line and start with Dear Ms Rangi.", "I say why I am writing (I am writing to apply for …).", "I write about my experience in the simple past.", "I name two strengths and use going to for a plan or for the time I am free.", "I use no informal words like Hi, wanna or Bye.", "I end with a polite sentence, Yours sincerely or Kind regards, and my name."],
          M: ["I write a subject line, start with Dear Ms Rangi and use paragraphs.", "I say why I am writing (I am writing to apply for …).", "I write about my experience in the simple past and say what I learned.", "I name two strengths and give a reason (because).", "I write one correct sentence about the camp in the passive.", "I use going to for my time or my plans.", "I use no informal words like Hi, wanna or Bye.", "I end with a polite sentence, Yours sincerely or Kind regards, and my name."]
        },
        starter: ["Dear Ms Rangi,", "I am writing to apply for …", "Last year I …, so I learned to …", "I am … because …", "I read that the meals are …", "I am going to be …", "I would be glad to …", "Yours sincerely,"] }
    ] },
    { kurz: "Revise", ober: "6 · Check and revise", titel: "Make your text better", teile: [
      { art: "text", html: "<p class=\"lead\">Here is a short paragraph from another student. It has three mistakes. <span class=\"de\">Lies den Absatz. Er hat drei Fehler, sie sind fett gedruckt.</span></p><blockquote>Dear Sir or Madam, I am writing to apply for the job at your riding stable. Last summer I <b>help</b> my neighbour with her two horses. The stable <b>cleaned</b> by me every day, and I fed the horses twice a day. I am good with animals, and I <b>am going help</b> every weekend if you need me.</blockquote>" },
      { art: "mc", id: "verbessern", tag: "Revise", titel: "Improve the paragraph", lead: "Tick the correct sentence.",
        fragen: [
          { q: "“Last summer I help my neighbour.” How do you correct it?", o: ["Last summer I helped my neighbour.", "Last summer I have help my neighbour.", "Last summer I helping my neighbour.", "Last summer I did helped my neighbour."], a: 0,
            e: "Last summer is a finished time, so you use the simple past: helped." },
          { q: "“The stable cleaned by me every day.” How do you correct it?", o: ["The stable was cleaned by me every day.", "The stable is cleaning by me every day.", "The stable cleaned me every day.", "The stable has clean by me every day."], a: 0,
            e: "The stable does not clean itself: it is the object, so you need the passive with a form of be and the past participle. The story is in the past, so was cleaned." },
          { q: "“I am going help every weekend.” How do you correct it?", o: ["I am going to help every weekend.", "I going to help every weekend.", "I am go to help every weekend.", "I am going to helping every weekend."], a: 0,
            e: "For a plan you need going to and then the basic verb." }
        ] },
      { art: "offen", id: "deutsch", m7: true, tag: "Mediation", titel: "Auf Deutsch zusammenfassen", lead: "Deine Mutter sieht Tessas E-Mail auf deinem Bildschirm. Sie versteht kein Englisch und möchte wissen, worum es geht. Fasse Tessas E-Mail für sie auf Deutsch in zwei bis drei Sätzen zusammen: Wofür bewirbt sich Tessa, was hat sie bei ihrer Tante gelernt, und wann hat sie Zeit?",
        fragen: [{ q: "Zusammenfassung auf Deutsch:", m: "Tessa bewirbt sich um einen Samstagsjob in einem Hofladen. Sie hat bei ihrer Tante auf dem Markt Eier verpackt, Geld gezählt und Kunden bedient und dabei gelernt, sorgfältiger zu arbeiten. Sie hat bis zum Jahresende jeden Samstag Zeit, und ihre Eltern fahren sie zum Laden.", k: ["Samstagsjob|Hofladen|Laden|bewirbt", "Eier|Markt|Kunden|Geld", "Samstag|Zeit|frei"], min: 3 }],
        tipp: "Du musst nicht jeden Satz übersetzen – wichtig sind die Hauptinformationen." }
    ] },
    { kurz: "Check", ober: "7 · Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Summary", titel: "Rules to remember", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["For my experience in the past I use the ", { g: "simple past" }, "."],
          ["For my plans I use am, is or are + ", { g: "going to" }, " + the basic verb."],
          ["The passive is formed with a form of ", { g: "be" }, " and the past participle, and the word ", { g: "by" }, " names the person."]
        ], extra: ["have", "with"] }
    ] }
  ],
  weiter: { text: "Well done! You can plan, write and revise an application and you can form the passive yourself. Use the same steps for other formal e-mails." }
});
