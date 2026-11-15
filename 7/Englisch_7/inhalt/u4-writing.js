/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Writing skills: An e-mail to a new friend (Kürzel D16)
   (eine Muster-E-Mail lesen und ihre Fragen finden, den Aufbau einer E-Mail erarbeiten – Betreff, Anrede, Einleitung, Hauptteil
   mit Absätzen, Fragen an den Partner, Schluss, Gruß – und typische Wendungen zuordnen, amerikanische Wörter erkennen, G10/G11
   für die eigene E-Mail üben, dann in Schritten antworten: Notizen → Entwurf → Rückmeldung der KI → überarbeiten → Partnercheck)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „Writing skills“, nur Aufbau, nichts übernommen): Muster-E-Mail einer neuen
   Brieffreundin, am Rand in Teile gegliedert → Beschreibungen den Teilen zuordnen (Tipp: E-Mails haben immer einen ähnlichen
   Aufbau) → Antwort in Schritten: Fragen heraussuchen und Notizen machen, Entwurf in der richtigen Reihenfolge, Entwurf
   überarbeiten, Reinschrift, Rückmeldung eines Partners (Aufbau in Ordnung? Etwas vergessen?). Andere Situation als im Buch:
   Harper aus Ohio (nicht Florida), Brieffreundschaft über ein Schulprojekt ihres Deutschlehrers (keine Brieffreund-Plattform,
   kein Großvater aus Franken), Schulband statt Theater-AG. Besser: Fragen der E-Mail als Textstellen finden (sofortige
   Rückmeldung), Aufbau als Reihenfolge und Wendungen als Zuordnung, Notizen mit KI-Hinweis, Entwurf im Schreibtrainer mit
   Checkliste und Rückmeldung der KI in fünf Teilen (schreibt den Text nicht neu), Fassungen für die Lehrkraft gespeichert;
   Grammatik der Unit (G10/G11) gezielt für die eigene E-Mail.
   Differenzierung: E-Mail R7 188 Wörter, M7 266 Wörter (mehr Einzelheiten und Rückfragen) mit eigenen Zeilenangaben;
   R7 bekommt Satzanfänge (sofort sichtbar), eine Checkliste mit fünf Punkten, deutsche Hilfen und schreibt mindestens 50 Wörter
   mit zwei Fragen; M7 schreibt mindestens 80 Wörter, beantwortet mehr Fragen und stellt mindestens drei eigene Fragen
   (Satzanfänge nur auf Knopfdruck), macht eine Notiz mehr (eigene Fragen) und eine Textstelle mehr.
   Plus für M7 (m7): einen besseren Schluss schreiben und zwei eigene Fragen an Harper mit more/most bzw. much/many (für R7
   freiwillig).
   Schreibtrainer: Baustein „schreiben“ aus 7M/Deutsch/d7-kit.js – Rückmeldung über /api/e7/schreiben/feedback (Server Englisch 7),
   mit Code werden die Fassungen gespeichert. Ohne Server zeigt die Seite die Checkliste zum Selbstprüfen.
   LehrplanPLUS E7 2.2 Schreiben (persönliche E-Mail: Aufbau, Absätze, Rückfragen; Texte planen, schreiben, überarbeiten),
   E7 1.1 Leseverstehen (E-Mail), E7 2 Wortschatz (britisches und amerikanisches Englisch), E7 3 (G10 more/most, -er/-est;
   G11 much/many).
   Texte: u4-wr-mail-r / u4-wr-mail-m („An e-mail from Harper“). Harper (13), ihr Deutschlehrer Mr Novak, Bruder Wyatt und Hund
   Biscuit sind erfunden; Cleveland liegt am Eriesee in Ohio. Harper schreibt mit Absicht einige amerikanische Wörter (pen pal,
   favorite, soccer, movie, vacation) – die Kinder schreiben britisch.
   Förder-Links: more/most und -er/-est → unit4/extra/comparison.html, much/many → unit4/extra/much-many.html, amerikanische
   Wörter → unit4/extra/british-american.html.
   Wörter der Unit (Writing skills: subject, profile, yourself; dazu post, online, favorite (AE), vacation (AE), movie (AE),
   more … than, the most, much, many) kommen bewusst vor. Neu und im Glossar erklärt: pen pal, greeting, sign-off, paragraph,
   trumpet, middle school.
   BILDER:
   1. Station „Get ready“ (Sprechanlass): ein Mädchen (13) sitzt mit einem Laptop auf einem Steg an einem großen See, neben ihr
      ein schläfriger brauner Hund; im Hintergrund weites Wasser bis zum Horizont – ohne Schrift auf dem Bildschirm.
   2. Station „Parts of an e-mail“ (Struktur): ein gezeichneter E-Mail-Bildschirm mit farbigen Blöcken (oben eine schmale Zeile,
      darunter eine kurze Zeile, drei Absätze, unten zwei kurze Zeilen) – ohne lesbaren Text.
   3. Station „Plan and write“ (Schreibanlass): ein Kind am Schreibtisch mit Notizzettel, Bleistift und Tablet, an der Pinnwand
      Fotos von Bergen, einem See und einer Schule. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
D7Kit.seite({
  id: "u4-writing",
  titel: "Writing skills: An e-mail to a new friend",
  einleitung: "Harper from Ohio is your new <b>pen pal</b>. She has written you an e-mail – now you write back! First you look at how an e-mail works: the parts, the paragraphs and useful phrases. Then you plan, write, get feedback and make your e-mail better. Du lernst Schritt für Schritt, eine gute E-Mail an einen neuen Freund oder eine neue Freundin zu schreiben.",
  zeit: "etwa 45 Minuten",
  ziele: ["✉️ I know the parts of an e-mail: subject, greeting, paragraphs, questions, ending, sign-off.", "🔎 I find the questions in an e-mail.", "📝 I make notes and write an e-mail to a new friend.", "✨ I use the feedback to make my e-mail better."],
  thema: "Unit 4 USA – here we come!, Writing skills: eine E-Mail an eine neue Brieffreundin in den USA (Aufbau, Wendungen, Antwort in Schritten)",
  quiz: { profi: "E-mail pro" },
  glossar: {
    penpal: ["pen pal", "Brieffreund, Brieffreundin: jemand, mit dem man sich regelmäßig schreibt. Pen pal sagt man vor allem in Amerika, in Großbritannien oft pen friend."],
    subject: ["subject", "Betreff: die Zeile ganz oben, die sagt, worum es in der E-Mail geht."],
    greeting: ["greeting", "Anrede: der Anfang der E-Mail, zum Beispiel Hi Harper, – mit Komma danach."],
    paragraph: ["paragraph", "Absatz: ein Teil eines Textes zu einem Thema. Für jedes neue Thema beginnt man einen neuen Absatz."],
    signoff: ["sign-off", "Grußformel: die Worte am Schluss vor deinem Namen, zum Beispiel „Best wishes,“ – mit Komma danach."],
    trumpet: ["trumpet", "Trompete: ein Musikinstrument aus Metall, in das man hineinbläst."],
    middle: ["middle school", "Middle School: In den USA gehen die meisten Kinder von etwa elf bis vierzehn Jahren in diese Schule."],
    grade: ["seventh grade", "7. Klasse: So sagt man in den USA. Harper ist also in derselben Klassenstufe wie du."],
    stepdad: ["stepdad", "Stiefvater: Das ist der Mann der Mutter, aber nicht der eigene Vater des Kindes."]
  },
  haupttext: { R: "u4-wr-mail-r", M: "u4-wr-mail-m" },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "A new pen pal", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-wr-see.jpg\" width=\"1280\" height=\"853\" alt=\"A girl sits with a laptop on a wooden dock at a very big lake; a sleepy brown dog lies next to her; the water reaches to the horizon.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a girl with a laptop next to a very big lake</b>, and a sleepy brown dog. <span class=\"de\">Sieh dir das Bild an.</span></p><p>Who could she be? Who is she writing to? Have you ever written to somebody in another country? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Your class has a <button class=\"term\" data-t=\"penpal\">pen pal</button> project with a school in <b>Ohio</b>, USA. Today you get your first e-mail – from <b>Harper</b>. <span class=\"de\">Deine Klasse hat ein Brieffreund-Projekt mit einer Schule in Ohio. Heute bekommst du die erste E-Mail – von Harper. Harper ist Amerikanerin, darum schreibt sie amerikanisches Englisch.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du heute.</span>",
        paare: [["subject", "Betreff"], ["pen pal", "Brieffreundin"], ["to write back", "zurückschreiben"], ["trumpet", "Trompete"], ["science", "Naturwissenschaften"], ["to post photos online", "Fotos ins Internet stellen"]],
        hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Der Betreff (subject) steht ganz oben in einer E-Mail.", "to post kennst du aus der Unit (soziale Medien)."] },
      { art: "mc", id: "situation", tag: "Think first", titel: "Who writes – and why?", lead: "Tick the correct answer. <span class=\"de\">Erst die Situation klären.</span>",
        fragen: [
          { q: "Who is Harper?", o: ["A girl from Ohio who is your new pen pal", "Your new English teacher", "A girl from Bavaria in your class", "A camp leader in the USA"], a: 0,
            e: "Harper wohnt in Ohio und schreibt dir im Brieffreund-Projekt ihrer Schule." },
          { q: "What kind of e-mail do you write to Harper?", o: ["A friendly, personal e-mail", "A formal letter to an office", "A text message with only emojis", "A test for school"], a: 0,
            e: "Harper ist ungefähr so alt wie du und möchte dich kennenlernen – du schreibst freundlich und persönlich." }
        ] }
    ] },
    { kurz: "Read", ober: "Station 2", titel: "Read Harper's e-mail", teile: [
      { art: "text", html: "<p class=\"lead\">Read Harper's e-mail. <span class=\"de\">Lies die E-Mail einmal ganz. Wörter wie <button class=\"term\" data-t=\"trumpet\">trumpet</button> oder <button class=\"term\" data-t=\"middle\">middle school</button> kannst du antippen.</span></p>" },
      { art: "lesetext", lesetext: { R: "u4-wr-mail-r", M: "u4-wr-mail-m" } },
      ...zwei({ art: "mc", id: "verstehen", tag: "Understanding", titel: "What does Harper write?" },
        { lead: "Tick the correct answer. <span class=\"de\">Kreuze die richtige Antwort an.</span>",
          fragen: [
            { q: "Why does Harper write to you?", o: ["Her German teacher has started a pen pal project with your school.", "She wants to visit Bavaria next week.", "She has found your profile in a game.", "Her brother is in your class."], a: 0, e: "Harper schreibt: My German teacher, Mr Novak, has started a pen pal project with your school in Bavaria." },
            { q: "Why doesn't Harper have much free time on Tuesdays?", o: ["She plays the trumpet in the school band.", "She plays soccer.", "She walks her dog.", "She watches a movie."], a: 0, e: "Harper schreibt: I play the trumpet in the school band, so I don't have much free time on Tuesdays." }
          ],
          hilfen: ["Die erste Antwort steht am Anfang der E-Mail.", "Suche das Wort Tuesdays."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Harper write to you?", o: ["Her German teacher has started a pen pal project with your school.", "She wants to visit Bavaria next week.", "She has found your profile in a game.", "Her brother is in your class."], a: 0, e: "Harper schreibt: My German teacher, Mr Novak, has started a pen pal project with your school in Bavaria." },
            { q: "Why doesn't Harper have much free time on Tuesdays and Thursdays?", o: ["She plays the trumpet in the school band.", "She plays soccer with her friends.", "Her school bus comes very early.", "She looks after her little brother."], a: 0, e: "Harper schreibt: I also play the trumpet in the school band, so I don't have much free time on Tuesdays and Thursdays." }
          ] }),
      { art: "text", html: "<p class=\"lead\">A good e-mail asks the reader questions – and a good answer answers them. <b>Find Harper's questions.</b> <span class=\"de\">Tippe die Zeilen an. Diese Fragen beantwortest du später in deiner E-Mail.</span></p>" },
      { art: "beleg", id: "fragen", nur: "R", tag: "Find the lines", titel: "Where are Harper's questions?", lead: "Tap the lines with the answer. <span class=\"de\">Achte auf die Fragezeichen.</span>", lesetext: "u4-wr-mail-r",
        fragen: [
          { q: "Where does Harper ask about your family and pets?", zeilen: [8, 9], e: "Harper fragt: Do you have any brothers or sisters? Do you have a pet?", tipp: "Look at the paragraph about Harper's family." },
          { q: "Where does Harper ask about your free time?", zeilen: [17, 18], e: "Harper fragt: What do you do in your free time?", tipp: "Look at the paragraph about soccer and Biscuit." }
        ],
        hilfen: ["Fragen enden mit einem Fragezeichen (?).", "Jeder Absatz hat ein Thema: Familie, Schule, Freizeit. Am Ende des Absatzes steht die Frage."] },
      { art: "beleg", id: "fragen", nur: "M", tag: "Find the lines", titel: "Where are Harper's questions?", lead: "Tap the lines with the answer.", lesetext: "u4-wr-mail-m",
        fragen: [
          { q: "Where does Harper ask about your family and pets?", zeilen: [12, 13], e: "Do you have any brothers or sisters? Do you have a pet?", tipp: "Look at the end of the paragraph about her family." },
          { q: "Where does Harper ask about your school?", zeilen: [19, 20], e: "What is your school like? Is there a school band, too?", tipp: "Look at the end of the paragraph about her school." },
          { q: "Where does Harper ask about your weekend and your town?", zeilen: [24, 25], e: "What do you do on Saturdays and Sundays? Are there mountains near your town?", tipp: "Look at the end of the paragraph about her free time." }
        ] }
    ] },
    { kurz: "Parts of an e-mail", ober: "Station 3", titel: "How an e-mail works", teile: [
      { art: "text", html: "<p class=\"lead\">E-mails to friends always have a similar <b>structure</b>. <span class=\"de\">E-Mails an Freunde sind immer ähnlich aufgebaut. Bringe die Teile von Harpers E-Mail in die richtige Reihenfolge.</span></p>" },
      { art: "ordnen", id: "aufbau", tag: "Structure", titel: "The parts of an e-mail", lead: "Put the parts in the right order. <span class=\"de\">Was steht oben, was unten?</span>",
        hilfen: ["Ganz oben steht, worum es geht. Ganz unten steht der Name.", "Nach der Anrede kommt der Grund für die E-Mail, dann die Absätze mit den Themen.", "subject · greeting · why I write · about me · school · free time · ending · sign-off and name"],
        schritte: ["subject: Hi from Ohio!", "greeting: Hi there,", "opening: why I'm writing (my teacher's pen pal project)", "paragraph: me and my family + a question", "paragraph: my school + a question", "paragraph: my free time + a question", "ending: Please write back soon.", "sign-off and name: Best wishes, Harper"] },
      { art: "merke", kopf: "AN E-MAIL TO A FRIEND", html: "<ol><li><b><button class=\"term\" data-t=\"subject\">Subject</button></b> – short: <i>Hi from Bavaria! · My first e-mail to you</i></li><li><b><button class=\"term\" data-t=\"greeting\">Greeting</button></b> – <i>Hi Harper, · Hello Harper,</i> (comma!)</li><li><b>Opening</b> – thank you and why you write: <i>Thanks for your e-mail! It was great to hear from you.</i></li><li><b>Main part</b> – one <button class=\"term\" data-t=\"paragraph\">paragraph</button> for each topic (family, school, free time). Answer the questions – and ask your own.</li><li><b>Ending</b> – <i>Please write back soon! · I can't wait to hear from you.</i></li><li><b><button class=\"term\" data-t=\"signoff\">Sign-off</button> and name</b> – <i>Best wishes, · Bye for now,</i> + your name</li></ol><p><span class=\"de\">Für jedes neue Thema beginnst du einen neuen Absatz.</span></p>" },
      ...zwei({ art: "sort", id: "wendungen", tag: "Useful phrases", titel: "Where does it go?", buckets: ["Start of the e-mail", "Questions for your pen pal", "End of the e-mail"] },
        { lead: "Put the phrases in the right box. <span class=\"de\">Wohin gehört die Wendung: an den Anfang, zu den Fragen oder an den Schluss?</span>",
          hilfen: ["Fragen erkennst du am Fragezeichen.", "Am Anfang bedankt man sich, am Ende bittet man um eine Antwort und grüßt.", "Start: Dear Harper, / I was so happy … · Questions: What …? / Do you …? · End: Write again soon! / Take care,"],
          items: [{ t: "Dear Harper,", b: 0 }, { t: "I was so happy to get your e-mail.", b: 0 }, { t: "What's your favourite food?", b: 1 }, { t: "Do you like music?", b: 1 }, { t: "Write again soon!", b: 2 }, { t: "Take care,", b: 2 }] },
        { lead: "Put the phrases in the right box.",
          items: [{ t: "Dear Harper,", b: 0 }, { t: "I was so happy to get your e-mail.", b: 0 }, { t: "Your e-mail made me smile.", b: 0 }, { t: "What's your favourite food?", b: 1 }, { t: "Have you ever been to Europe?", b: 1 }, { t: "How many people live in your town?", b: 1 }, { t: "Write again soon!", b: 2 }, { t: "Say hello to Biscuit!", b: 2 }, { t: "Take care,", b: 2 }] }),
      ...zwei({ art: "paare", id: "amerikanisch", tag: "American English", titel: "Harper's American words", foerder: { href: "unit4/extra/british-american.html", text: "Extra: British und American English" } },
        { lead: "Harper writes American English. Match her words with the British words. <span class=\"de\">Du schreibst britisches Englisch. Welches britische Wort passt?</span>",
          paare: [["favorite (AE)", "favourite (BE)"], ["soccer (AE)", "football (BE)"], ["movie (AE)", "film (BE)"], ["vacation (AE)", "holiday (BE)"]],
          hilfen: ["Zwei Wörter unterscheiden sich nur in der Schreibweise.", "soccer ist das Spiel mit dem runden Ball – auf Britisch …", "favorite → favourite · soccer → football · movie → film · vacation → holiday"] },
        { lead: "Harper writes American English. Match her words with the British words.",
          paare: [["favorite (AE)", "favourite (BE)"], ["soccer (AE)", "football (BE)"], ["movie (AE)", "film (BE)"], ["vacation (AE)", "holiday (BE)"], ["pen pal (AE)", "pen friend (BE)"]],
          hilfen: ["Two of the words only have a different spelling."] }),
      { art: "offen", id: "schluss", m7: true, tag: "Plus · Your words", titel: "A better ending",
        lead: "Lukas ends his e-mail like this: <i>\"ok bye lukas\"</i>. Write a <b>better ending</b>: a closing sentence, a sign-off and the name. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Write a better ending for Lukas's e-mail.", m: "Please write back soon – I can't wait to hear from you! Best wishes, Lukas", k: ["write back|hear from you|soon|can't wait|cannot wait", "best wishes|bye for now|see you|take care|all the best|love|cheers"], min: 2 }],
        tipp: "Closing sentence: Please write back soon! / I can't wait to hear from you. · Sign-off: Best wishes, / Bye for now, · Then the name with a capital letter." }
    ] },
    { kurz: "Language", ober: "Station 4", titel: "Language for your e-mail", teile: [
      { art: "text", html: "<p class=\"lead\">In your e-mail you can compare things and talk about how many or how much. <span class=\"de\">Damit deine E-Mail interessanter wird: vergleichen (more/most, -er/-est) und Mengen (much/many).</span></p>" },
      { art: "merke", kopf: "COMPARE AND COUNT", html: "<ul><li><b>Short adjectives:</b> <i>small – smaller – the smallest · big – bigger – the biggest · bad – worse – the worst</i></li><li><b>Long adjectives:</b> <i>Science is <u>more exciting than</u> history. The lake is <u>the most famous</u> place in our town.</i></li><li><b>many</b> + things you can count: <i>many friends, many pets</i> · <b>much</b> + things you can't count: <i>much money, much fun</i></li></ul><p><span class=\"de\">Kurze Adjektive bekommen -er/-est, lange Adjektive more/most. Vergiss than und the nicht.</span></p>" },
      ...zwei({ art: "mc", id: "sprache-mc", tag: "Language", titel: "Choose the right words", foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" } },
        { lead: "Tick the correct answer. <span class=\"de\">Wähle die richtige Form.</span>",
          fragen: [
            { q: "Harper has got so ____ questions about Bavaria.", o: ["many", "much"], a: 0, e: "Questions kann man zählen – also so many." },
            { q: "Which sentence is correct?", o: ["My town is more beautiful than my cousin's town.", "My town is beautifuller than my cousin's town.", "My town is more beautiful as my cousin's town."], a: 0, e: "beautiful ist ein langes Adjektiv: more beautiful than – mit than." }
          ],
          hilfen: ["Kann man es zählen? Dann many.", "Langes Adjektiv: more … than."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "Harper has got so ____ questions about Bavaria.", o: ["many", "much", "more", "most"], a: 0, e: "Questions kann man zählen – also so many." },
            { q: "Which sentence is correct?", o: ["My town is more beautiful than my cousin's town.", "My town is beautifuller than my cousin's town.", "My town is more beautiful as my cousin's town.", "My town is the most beautiful than my cousin's town."], a: 0, e: "beautiful ist ein langes Adjektiv: more beautiful than – mit than, nicht as." }
          ] }),
      { art: "luecke", id: "sprache-luecke", tag: "Gap text", titel: "Sentences for your e-mail", lead: "Complete the sentences with words from the box. The adjective at the start helps you. <span class=\"de\">Das Adjektiv vor dem Satz zeigt dir, welche Form du brauchst. Zwei Formen sind falsch und bleiben übrig.</span>",
        foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" },
        hilfen: ["small ist kurz (-er), interesting ist lang (more), good ist unregelmäßig.", "time kann man nicht zählen, mountains schon.", "Satz 1: smaller · Satz 2: more interesting · Satz 3: best · Satz 4: much · Satz 5: many"],
        absaetze: [
          ["small: My town is ", { g: "smaller" }, " than Cleveland."],
          ["interesting: For me, English is ", { g: "more interesting" }, " than maths."],
          ["good: Our school band is the ", { g: "best" }, " band in town!"],
          ["I don't have ", { g: "much" }, " free time on Mondays."],
          ["There are ", { g: "many" }, " mountains and lakes in Bavaria."]
        ], extra: ["more small", "goodest"] },
      { art: "offen", id: "eigene-fragen", m7: true, tag: "Plus · Your questions", titel: "Two questions for Harper",
        lead: "Write <b>two questions</b> for Harper: one with a superlative (<i>the most …, the biggest …</i>) and one with <i>how many</i> or <i>how much</i>. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig. Die Fragen kannst du in deine E-Mail übernehmen.</span>",
        fragen: [{ q: "Write two questions for Harper.", m: "What is the most beautiful place in your town? How many people live in your town?", k: ["the most|the biggest|the best|the nicest|the oldest|the smallest|biggest|most|best", "how many|how much"], min: 2 }],
        tipp: "What is the most … in your town? · Which is the biggest …? · How many … are there in your school? · How much time do you …?" }
    ] },
    { kurz: "Plan and write", ober: "Station 5", titel: "Write back to Harper", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>planning an e-mail</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-wr-schreibtisch.jpg\" width=\"1280\" height=\"853\" alt=\"A boy at his desk makes notes with a pencil; a tablet lies next to him; photos of mountains, a lake and a school hang on his pin board.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the boy doing? What would you tell Harper about your town? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\"><b>Step 1: Make notes.</b> Write only key words, not sentences. <span class=\"de\">Schritt 1: Mach Notizen in Stichworten – keine ganzen Sätze. Denk an Harpers Fragen.</span></p>" },
      ...zwei({ art: "offen", id: "notizen", tag: "Step 1 · Notes", titel: "My notes" },
        { lead: "Answer in key words. <span class=\"de\">Stichworte genügen, zum Beispiel: 13 · Dorf bei Regensburg · 1 Schwester.</span>",
          fragen: [
            { q: "Notes 1: you and your family (age, where you live, brothers and sisters, pets)", m: "13 · small village near Regensburg · one sister · no pet", k: ["1|2|3|4|5|6|7|8|9|0|eleven|twelve|thirteen|fourteen|years", "live|village|town|city|near|bavaria|germany|brother|sister|pet|dog|cat|family|mum|dad|only child|no "] , min: 2 },
            { q: "Notes 2: your school (how you get there, favourite subjects, clubs)", m: "Mittelschule · by bike · favourite subjects: PE and English · school choir", k: ["school|class|bus|bike|walk|foot|car|train", "art|music|sport|pe|english|maths|math|german|science|history|geography|ict|subject|favourite|like|band|choir|club"], min: 2 },
            { q: "Notes 3: your free time (hobbies, friends, weekend)", m: "football with friends · playing games online · cinema on Saturdays", k: ["play|football|basketball|swim|ride|read|music|game|dance|draw|friend|horse|bike|cook|watch|hobby|club|go |climb|ski|cinema|film|draw|sing"], min: 1 }
          ],
          hilfen: ["Schau dir Harpers Fragen an: Familie und Haustiere, Schule, Freizeit.", "Nur Stichworte: Alter · Wohnort · Geschwister · Haustier.", "Zum Beispiel: 13 · town near Augsburg · one brother · a cat"] },
        { lead: "Answer in key words.",
          fragen: [
            { q: "Notes 1: you and your family (age, where you live, brothers and sisters, pets)", m: "13 · small village near Regensburg · one sister · no pet", k: ["1|2|3|4|5|6|7|8|9|0|eleven|twelve|thirteen|fourteen|years", "live|village|town|city|near|bavaria|germany|brother|sister|pet|dog|cat|family|mum|dad|only child|no "], min: 2 },
            { q: "Notes 2: your school (what it is like, favourite subjects, clubs)", m: "Mittelschule · by bike · favourite subjects: PE and English · no school band, but a choir", k: ["school|class|bus|bike|walk|foot|car|train", "art|music|sport|pe|english|maths|math|german|science|history|geography|ict|subject|favourite|like|band|choir|club"], min: 2 },
            { q: "Notes 3: your free time and your weekend", m: "football with friends · playing games online · cinema on Saturdays", k: ["play|football|basketball|swim|ride|read|music|game|dance|draw|friend|horse|bike|cook|watch|hobby|club|go |climb|ski|cinema|film|draw|sing"], min: 1 },
            { q: "Notes 4: three questions for Harper", m: "What is the most beautiful place in your town? How many pets do your friends have? Have you ever been to Europe?", k: ["what|which|how|where|when|who|do you|have you|are you|is there|can you|does", "?"], min: 2 }
          ] }),
      { art: "text", html: "<p class=\"lead\"><b>Step 2: Write your draft. Step 3: Get feedback and make it better.</b> <span class=\"de\">Schritt 2: Schreibe deinen Entwurf mit Hilfe deiner Notizen. Schritt 3: Hol dir eine Rückmeldung, verbessere die Stelle, die genannt wird – und hol dir noch einmal eine Rückmeldung.</span></p>" },
      { art: "schreiben", id: "email", nur: "R", tag: "Step 2 and 3 · Writing trainer", titel: "My e-mail to Harper", min: 50,
        auftrag: "<p><b>Write your answer to Harper</b> (50 words or more). <span class=\"de\">Schreibe mindestens 50 Wörter. Nutze deine Notizen und die Satzanfänge.</span></p><ul><li>subject and greeting</li><li>thank Harper for her e-mail</li><li>a paragraph about you and your family, about your school and about your free time – answer Harper's questions</li><li>two questions for Harper</li><li>a closing sentence, a sign-off and your name</li></ul>",
        starter: ["Subject: Hi from Bavaria!", "Hi Harper,", "Thanks for your e-mail!", "I'm … years old, and I live in …", "I have … / I don't have …", "My favourite subjects are …", "In my free time I …", "What …? / Do you …?", "Please write back soon!", "Best wishes,"],
        kriterien: ["Die E-Mail hat einen Betreff, eine Anrede und am Schluss einen Gruß mit deinem Namen.", "Du bedankst dich für Harpers E-Mail.", "Du schreibst über dich und deine Familie, deine Schule und deine Freizeit – in Absätzen.", "Du stellst Harper mindestens zwei Fragen.", "Du schreibst britisches Englisch (favourite, football, holiday)."] },
      { art: "schreiben", id: "email", nur: "M", tag: "Step 2 and 3 · Writing trainer", titel: "My e-mail to Harper", min: 80,
        auftrag: "<p><b>Write your answer to Harper</b> (80 words or more).</p><ul><li>subject, greeting and an opening</li><li>answer Harper's questions about your family, your school and your free time – one paragraph for each topic</li><li>ask at least three questions of your own</li><li>use more/most or much/many at least once</li><li>a closing sentence, a sign-off and your name</li></ul>",
        starter: ["Subject: …", "Hi Harper,", "It was great to get your e-mail!", "Let me tell you about …", "I've got so many … / I don't have much …", "… is more … than …", "What is the most … in your town?", "I can't wait to hear from you.", "Best wishes,"],
        kriterien: ["Die E-Mail hat einen Betreff, eine Anrede, eine Einleitung und einen Schluss mit Gruß und Namen.", "Du beantwortest Harpers Fragen zu Familie, Haustieren, Schule und Freizeit.", "Du schreibst in Absätzen – für jedes Thema einen.", "Du stellst Harper mindestens drei eigene Fragen.", "Du benutzt mindestens einmal more/most oder much/many richtig."] },
      { art: "merke", kopf: "STEP 4 · PARTNER CHECK", html: "<p>Swap e-mails with a partner and check:</p><ul><li>☐ Subject, greeting, ending, sign-off and name – is everything there?</li><li>☐ Are there paragraphs? One topic in each paragraph?</li><li>☐ Does the e-mail answer Harper's questions?</li><li>☐ Are there questions for Harper?</li><li>☐ Spelling: check difficult words in a dictionary.</li></ul><p><span class=\"de\">Tauscht eure E-Mails und prüft sie mit der Liste. Sag deiner Partnerin oder deinem Partner eine Sache, die gut ist, und eine Sache, die noch besser werden kann.</span></p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "sichern", tag: "True or false?", titel: "What makes a good e-mail?", lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An e-mail to a friend starts with a greeting, for example Hi Harper,", true],
          ["An e-mail doesn't need a subject line.", false],
          ["Each new topic gets a new paragraph.", true],
          ["At the end you write a sign-off, for example Best wishes, and your name.", true],
          ["In an e-mail to a new friend you don't ask any questions.", false]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You know the parts of an e-mail, you have planned and written your own e-mail to Harper and made it better with feedback. Send it to your pen pal – or keep it as a model for your next e-mail." }
});
