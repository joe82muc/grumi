/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Reading skills: A walking tour of Durham (Kürzel A17)
   (einen Werbetext für eine Stadtführung lesen und dabei drei Lesestrategien üben: die Textsorte am Aufbau erkennen und
   begründen, skimming – worum geht es in Teil A und B, Schlüsselwörter notieren –, scanning – W-Fragen zu Teil C, Textstellen in
   Teil D, Preise, Tage und Treffpunkt für den eigenen Besuch heraussuchen; dazu simple present und Fragen mit do/does aus dem Text)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Reading skills“, nur Aufbau, nichts übernommen): Werbetext in vier Teilen A–D mit
   Fotos (A Eckdaten: Dauer, Preise, Tage, Uhrzeit, Treffpunkt) → Ex. 1 skim: a) Textsorte aus vier Möglichkeiten wählen und mit
   „It's a … because …“ begründen (Tipp: der Aufbau verrät die Textsorte), b) worum geht es in Teil A, c) Teil B überfliegen und
   Schlüsselwörter notieren → Ex. 2 scan: a) drei W-Fragen zu Teil C (Fragewörter fett, Tipp: gezielt Einzelheiten suchen),
   b) W-Fragen zu Teil D (Stellen selbst suchen); rechts jeweils ein Tippkasten. Andere Situation als im Buch: keine Radtour,
   keine Großstadt mit Museen und Stadion – eine Führung zu Fuß durch Durham mit Bootsfahrt, eigene Zeiten und Preise.
   Besser: Tippkästen als Merkkästen vor der Aufgabe, sofortige Rückmeldung, die Begründung zur Textsorte mit KI-Hinweis,
   Schlüsselwörter als Notizzettel, Textstellen antippen, dazu eine Station „Plan your visit“ (Preis ausrechnen, passenden Tag
   finden, Notizen) und die Grammatik der Unit (G2/G3) im Werbetext mit Förder-Links.
   Differenzierung: Text R7 239 Wörter, M7 341 Wörter (Familienkarte, drei Fragen mit Antworten, Bischöfe, mehr Einzelheiten);
   R7 mit deutschen Tipps und Hilfen in Stufen, zwei Textstellen in Teil D, einfache Rechnung (zwei Preise); M7 mit englischen
   Tipps, drei Textstellen, Familienkarte gegen Einzelkarten, Tag mit Abreisezeit. Plus für M7 (m7): je eine Frage mit do und
   does an Gemma und eine kurze Nachricht an die Familie mit Zeit, Treffpunkt und Preis (für R7 freiwillig).
   LehrplanPLUS E7 1.1 Leseverstehen (Sachtexte und Werbetexte: global, selektiv, im Detail), E7 4 Lern- und Arbeitstechniken
   (Lesestrategien skimming und scanning, Textsorten erkennen), E7 3 (G2 simple present, G3 Fragen und Kurzantworten mit do/does),
   E7 5 Landeskunde England (Durham: Kathedrale, Burg, Fluss, Markt).
   Texte: „Walk with Gemma – the best of Durham“ (texte/u1/u1-read-durham-r.js und -m.js; je vier Teile „A – … D –“ ohne
   Überschriften). Gemma, die Führung, die Zeiten und Preise sind erfunden. Sachaussagen zu Durham nur gesichert: Kathedrale über
   900 Jahre alt, Burg von den Normannen vor fast 1000 Jahren gebaut, lange Sitz der Bischöfe, beide zusammen Welterbe, in der Burg
   wohnen heute Studierende der Universität, der River Wear fließt in einer Schleife um die Altstadt, Reiterstatue und alte
   Markthalle am Market Place.
   Förder-Links: Fragen und Kurzantworten mit do/does → unit1/extra/do-does-questions.html, he/she/it -s →
   unit1/extra/he-she-it.html.
   Wörter der Unit bis „Reading skills“ kommen bewusst vor: advert, tour, brochure, quiet, near, centre, the past, to take
   (dauern), a.m., culture, popular; neu und im Glossar erklärt: guide, meeting point, cathedral, monk, Normans, World Heritage
   Site, loop, key word (M7 zusätzlich bishop, steep).
   BILDER:
   1. Station „Get ready“ (Vorentlastung, ersetzt die vier Fotokarten): vier Fotos wie in einer Broschüre – ein alter Marktplatz
      mit Reiterstatue und Markthalle; eine riesige Steinkirche mit drei Türmen hoch über einem Fluss; eine Burg und darunter eine
      alte Steinbrücke; ein kleines weißes Ausflugsboot auf einem ruhigen Fluss zwischen Bäumen (ohne lesbare Schrift, ohne Logos).
   2. Station „Plan your visit“ (Sprechanlass): eine Führerin mit Schirm und Namensschild ohne Schrift erzählt vor der Kathedrale
      einer kleinen Gruppe mit Kindern etwas, eine Familie schaut auf einen Faltprospekt. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
const DODOES = { href: "unit1/extra/do-does-questions.html", text: "Extra: Fragen mit do und does" };
const HSI = { href: "unit1/extra/he-she-it.html", text: "Extra: he, she, it – das s muss mit" };
D7Kit.seite({
  id: "u1-reading",
  titel: "Reading skills: A walking tour of Durham",
  einleitung: "A cathedral on a hill, a castle full of students and a boat on the river: You read an <b>advert</b> for a walking tour of Durham. You find out what kind of text it is, you <b>skim</b> it for the main ideas and you <b>scan</b> it for times, prices and places – and then you plan your own visit.",
  zeit: "etwa 40 Minuten",
  ziele: ["📰 I know what kind of text it is – and I can say why.", "👀 I skim a text: I find out quickly what a part is about.", "🔎 I scan a text: I find times, prices and places fast.", "🗺️ I use the information to plan a visit.", "❓ I ask and answer questions with do and does."],
  thema: "Unit 1 Out and about in England: Reading skills (Werbetext einer Stadtführung durch Durham: Textsorte, skimming, scanning)",
  quiz: { profi: "Reading pro" },
  glossar: {
    advert: ["advert", "Ein advert (kurz: ad) ist eine Werbung oder Anzeige."],
    brochure: ["brochure", "Eine brochure ist eine Broschüre: ein kleines Heft mit Informationen, zum Beispiel über eine Stadt."],
    skimming: ["skimming", "Beim skimming überfliegst du einen Text schnell, um zu wissen, worum es geht: Überschrift, Bilder, erste Sätze und Schlüsselwörter."],
    scanning: ["scanning", "Beim scanning suchst du gezielt nach einer Information, zum Beispiel nach einer Uhrzeit, einem Preis oder einem Namen."],
    keyword: ["key word", "Key words sind Schlüsselwörter: die wichtigsten Wörter eines Textes."],
    guide: ["guide", "Ein guide ist eine Führerin oder ein Führer. Sie zeigt Besuchern eine Stadt und erzählt etwas darüber."],
    cathedral: ["cathedral", "Eine cathedral ist eine große, wichtige Kirche, ein Dom."],
    monk: ["monk", "Ein monk ist ein Mönch. Mönche leben zusammen in einem Kloster und beten viel."],
    normans: ["the Normans", "Die Normannen kamen 1066 aus Frankreich nach England und eroberten das Land. Sie bauten viele Burgen."],
    heritage: ["World Heritage Site", "Eine World Heritage Site ist ein Welterbe: ein Ort, der für die ganze Welt besonders wertvoll ist und geschützt wird."],
    loop: ["loop", "Eine loop ist eine Schleife. Der Fluss fließt in Durham in einem großen Bogen fast ganz um die Altstadt herum."],
    bishop: ["bishop", "Ein bishop ist ein Bischof, ein hoher Geistlicher der Kirche."]
  },
  haupttext: { R: "u1-read-durham-r", M: "u1-read-durham-m" },
  stationen: [
    { kurz: "Get ready", ober: "Before you read", titel: "A day out in Durham", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-read-fotos.jpg\" width=\"1280\" height=\"853\" alt=\"Four photos of Durham: top left an old market square with a market hall, top right a huge cathedral with three towers above a river, bottom left an old castle on a green hill, bottom right a small white boat on a quiet river between trees.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\"><b>Durham</b> is a small, old city in the north-east of England. You are going to read an <button class=\"term\" data-t=\"advert\">advert</button> from a <button class=\"term\" data-t=\"brochure\">brochure</button> for visitors. First look at its four photos. <span class=\"de\">Durham ist eine kleine, alte Stadt im Nordosten Englands. Du liest gleich eine Werbung aus einem Prospekt für Besucher. Sieh dir zuerst die vier Fotos und die Fotokarten an: Was kann man dort sehen und tun?</span></p>" },
      { art: "karten", karten: [
        { ic: "🐴", titel: "Photo A: the Market Place", text: "An old square with small shops, an old market hall and the statue of a man on a horse." },
        { ic: "⛪", titel: "Photo B: the cathedral", text: "A huge stone church with three tall towers stands on a hill above a river." },
        { ic: "🏰", titel: "Photo C: the castle and the bridge", text: "An old castle on the hill. Below it, an old stone bridge goes over the river." },
        { ic: "🚤", titel: "Photo D: the river", text: "A small white boat on a quiet river. Trees grow on both sides." }
      ] },
      ...zwei({ art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words" },
        { lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du im Text. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>",
          paare: [["tour", "Führung, Rundgang"], ["guide", "Führerin, Führer"], ["meeting point", "Treffpunkt"], ["cathedral", "Dom, Kathedrale"], ["castle", "Burg"], ["bridge", "Brücke"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst: castle und bridge.", "Eine cathedral ist eine große Kirche. Am meeting point trifft man sich.", "tour = Führung · guide = Führerin · meeting point = Treffpunkt · cathedral = Dom · castle = Burg · bridge = Brücke"] },
        { lead: "Find the pairs.",
          paare: [["tour", "Führung, Rundgang"], ["guide", "Führerin, Führer"], ["meeting point", "Treffpunkt"], ["cathedral", "Dom, Kathedrale"], ["monk", "Mönch"], ["bridge", "Brücke"], ["steep", "steil"]],
          hilfen: ["A monk lives in a monastery. A steep street goes up a hill."] }),
      { art: "merke", nur: "R", kopf: "THREE WAYS TO READ", html: "<ol><li><b>Welche Textsorte?</b> Sieh dir den Aufbau an: Teile, Preise, Zeiten, Fotos, Werbesätze. Der Aufbau verrät die Textsorte.</li><li><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – überfliegen: Lies schnell die ersten Sätze und achte auf <button class=\"term\" data-t=\"keyword\">key words</button>. Worum geht es?</li><li><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – gezielt suchen: Du suchst <b>eine</b> Information, zum Beispiel eine Uhrzeit, einen Preis oder einen Ort. Den Rest liest du nicht.</li></ol>" },
      { art: "merke", nur: "M", kopf: "THREE WAYS TO READ", html: "<ol><li><b>What kind of text?</b> Look at the layout: parts, prices, times, photos, sentences like <i>Come on our tour!</i> The layout tells you the kind of text.</li><li><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast: the first sentences and the <button class=\"term\" data-t=\"keyword\">key words</button>. What is it about?</li><li><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for <b>one</b> piece of information: a time, a price, a place. Don't read the rest.</li></ol><p><span class=\"de\">Überfliegen (skimming) oder gezielt suchen (scanning) – je nachdem, was du wissen willst.</span></p>" }
    ] },
    { kurz: "Skim", ober: "First reading", titel: "What kind of text? What is it about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the text quickly. Don't stop at words you don't know. <span class=\"de\">Lies den Text schnell einmal durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: { R: "u1-read-durham-r", M: "u1-read-durham-m" } },
      ...zwei({ art: "mc", id: "textsorte", tag: "Kind of text", titel: "What kind of text is it?" },
        { lead: "Tick the correct answer. <span class=\"de\">Was für ein Text ist das? Achte auf den Aufbau.</span>",
          fragen: [
            { q: "What kind of text is it?", o: ["An advert for a tour", "A story", "A song", "An e-mail"], a: 0, e: "Preise, Zeiten, ein Treffpunkt und „Come on a walking tour!“ – so wirbt man für eine Führung. Das ist ein advert, zum Beispiel in einer Broschüre." }
          ],
          hilfen: ["Gibt es im Text Preise und Uhrzeiten?", "Eine Geschichte erzählt, was passiert ist. Dieser Text lädt dich zu etwas ein."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "What kind of text is it?", o: ["An advert for a tour, for example in a brochure", "A story about a girl called Gemma", "A diary entry about a trip", "An e-mail to a friend"], a: 0, e: "Preise, Zeiten, ein Treffpunkt, Fragen und Antworten und „Join a walking tour!“ – das ist ein advert." }
          ] }),
      ...zwei({ art: "offen", id: "begruenden", tag: "Say why", titel: "It's an advert because …" },
        { lead: "Why is it an advert? Complete the sentence. <span class=\"de\">Begründe mit einem Satz: Woran erkennst du die Textsorte?</span>",
          fragen: [{ q: "It's an advert because …", m: "It's an advert because it has prices and times, and it says: Come on a walking tour!", k: ["advert|ad|brochure", "because", "price|prices|£|time|times|meeting point|tour|come|join|book|ticket|photo|photos|parts"], min: 3 }],
          hilfen: ["Beginne mit „It's an advert because …“.", "Nenne etwas, das du im Text siehst: Preise (prices), Uhrzeiten (times), einen Treffpunkt (meeting point)."],
          tipp: "It's an advert because it has … and it says: Come on …" },
        { lead: "Why is it an advert? Give <b>two</b> reasons.",
          fragen: [{ q: "It's an advert because …", m: "It's an advert because it has prices, times and a meeting point, and it wants you to join the tour.", k: ["advert|ad|brochure", "because", "price|prices|£|time|times|meeting point|tour|come|join|book|ticket|photo|photos|parts|questions"], min: 3 }],
          tipp: "It's an advert because it has … and … It wants you to …" }),
      ...zwei({ art: "mc", id: "teil-a", tag: "Skimming", titel: "What is Part A about?" },
        { lead: "Skim Part A again. Tick the best answer. <span class=\"de\">Überfliege Teil A noch einmal.</span>",
          fragen: [
            { q: "What is Part A about?", o: ["When and where the tour starts and what it costs", "The history of the castle", "A boat trip on the river", "Gemma's family"], a: 0, e: "In Teil A stehen die Tage, die Uhrzeit, der Treffpunkt und die Preise." }
          ] },
        { lead: "Skim Part A again. Tick the best answer.",
          fragen: [
            { q: "What is Part A about?", o: ["Important facts: days, time, meeting point, prices and answers to questions", "Why so many visitors come to the cathedral", "What students do at the university", "How the river makes a loop"], a: 0, e: "Teil A nennt die wichtigsten Fakten zur Führung und beantwortet drei Fragen." }
          ] }),
      ...zwei({ art: "luecke", id: "teil-b", tag: "Key words", titel: "Key words for Part B" },
        { lead: "Skim Part B. Complete the notes with key words. <span class=\"de\">Ergänze die Stichpunkte zu Teil B. Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["What: Durham ", { g: "Cathedral" }, ", a huge church"],
            ["How old: more than ", { g: "900" }, " years"],
            ["Special: a World Heritage Site · ", { g: "monks" }, " lived and worked here long ago"]
          ], extra: ["1,000", "students"],
          hilfen: ["Lies nur Teil B – er beginnt mit „B –“.", "Achtung: 1,000 Jahre steht in Teil C, bei der Burg."] },
        { lead: "Skim Part B. Complete the notes with key words. Two words are extra.",
          absaetze: [
            ["What: Durham ", { g: "Cathedral" }, ", a huge stone church"],
            ["How old: more than ", { g: "900" }, " years"],
            ["Special: a World Heritage Site, together with the ", { g: "castle" }],
            ["Gemma shows you: the rooms of the ", { g: "monks" }],
            ["Gemma tells you: why so many ", { g: "visitors" }, " come here"]
          ], extra: ["1,000", "bishops"] })
    ] },
    { kurz: "Scan", ober: "Second reading", titel: "Find the details", teile: [
      { art: "merke", nur: "R", kopf: "SCANNING TIP", html: "<p>Schau zuerst auf das <b>Fragewort</b>. Es sagt dir, wonach du suchst:</p><p><b>Who?</b> → eine Person · <b>When?</b> → ein Tag, eine Uhrzeit · <b>Where?</b> → ein Ort · <b>How much?</b> → ein Preis · <b>How long?</b> → eine Dauer (Minuten, Stunden)</p><p>Dann suchst du im Text nur danach – zum Beispiel nach einer Zahl.</p>" },
      { art: "merke", nur: "M", kopf: "SCANNING TIP", html: "<p>First look at the <b>question word</b>. It tells you what to look for:</p><p><b>Who?</b> → a person · <b>When?</b> → a day or a time · <b>Where?</b> → a place · <b>How much?</b> → a price · <b>How long?</b> → minutes or hours · <b>How old?</b> → years</p><p>Then look only for that – for example for a number or a name.</p>" },
      ...zwei({ art: "offen", id: "teil-c", tag: "Scanning · Part C", titel: "Three questions about Part C" },
        { lead: "Scan Part C and answer the questions. Short answers are OK. <span class=\"de\">Suche die Antworten in Teil C. Kurze Antworten genügen.</span>",
          fragen: [
            { q: "Who built the castle?", m: "The Normans built the castle.", k: ["norman|normans"], min: 1 },
            { q: "Who lives in the castle today?", m: "Students of the university live in it.", k: ["student|students"], min: 1 },
            { q: "Where do you walk after the castle?", m: "We walk down to an old stone bridge over the River Wear.", k: ["bridge"], min: 1 }
          ],
          hilfen: ["Who fragt nach Personen. Suche in Teil C nach Menschen.", "Where fragt nach einem Ort. Teil C endet mit dem Weg nach der Burg."],
          tipp: "Look for the answer in Part C. One or two words are enough, for example: The Normans." },
        { lead: "Scan Part C and answer the questions. Short answers are OK.",
          fragen: [
            { q: "How old is the castle?", m: "It is almost 1,000 years old.", k: ["1,000|1000|thousand"], min: 1 },
            { q: "Who lived in the castle for hundreds of years, and who lives there today?", m: "The bishops of Durham lived in it. Today students live there.", k: ["bishop|bishops", "student|students"], min: 2 },
            { q: "Where does the walk go after the castle?", m: "It goes down to an old stone bridge over the River Wear.", k: ["bridge"], min: 1 }
          ],
          tipp: "Look for the answers in Part C. Short answers are enough." }),
      { art: "beleg", id: "teil-d", nur: "R", tag: "Scanning · Part D", titel: "Find the lines in Part D", lead: "Tap the lines with the answer. <span class=\"de\">Suche die Stelle in Teil D und tippe die Zeilen an.</span>", lesetext: "u1-read-durham-r",
        fragen: [
          { q: "How long does the boat trip take?", zeilen: [17, 18], e: "The boat trip takes 30 minutes.", tipp: "How long? Look for a number with minutes." },
          { q: "Where can you buy a snack after the trip?", zeilen: [21, 22], e: "After the trip you can buy a snack at the old market hall.", tipp: "Look for the word snack." }
        ],
        hilfen: ["Teil D beginnt mit „D –“.", "Such nach einer Zahl mit minutes und nach dem Wort snack."] },
      { art: "beleg", id: "teil-d", nur: "M", tag: "Scanning · Part D", titel: "Find the lines in Part D", lead: "Tap the lines with the answer.", lesetext: "u1-read-durham-m",
        fragen: [
          { q: "How long does the boat trip take?", zeilen: [24, 25], e: "The trip takes 40 minutes.", tipp: "How long? Look for a number with minutes." },
          { q: "What can you see from the water?", zeilen: [27, 28], e: "From the water you have a great view of the cathedral high above the trees.", tipp: "Look for the word view." },
          { q: "What can you find in the old market hall?", zeilen: [30, 31], e: "There are lots of small shops, and you can buy a snack there.", tipp: "Look at the end of Part D." }
        ] }
    ] },
    { kurz: "Plan your visit", ober: "Use the information", titel: "Let's go on the tour!", teile: [
      { art: "text", html: "<p class=\"lead\">Your family is on holiday in Durham, and you want to go on Gemma's tour. Scan the advert for the information you need. <span class=\"de\">Deine Familie macht Urlaub in Durham. Such im Werbetext, was ihr wissen müsst: Tag, Uhrzeit, Treffpunkt, Preis.</span></p>" },
      ...zwei({ art: "mc", id: "planen", tag: "Scanning", titel: "Days and prices" },
        { lead: "Tick the correct answer. <span class=\"de\">Die Preise und Tage stehen in Teil A.</span>",
          fragen: [
            { q: "You are 12. You go on the tour with your mum and your little sister (4). How much do you pay together?", o: ["£15", "£20", "£25", "£10"], a: 0, e: "Deine Mutter zahlt £10, du (12) zahlst £5, deine Schwester (4) ist unter 5 und zahlt nichts: £10 + £5 = £15." },
            { q: "Your family is in Durham from Monday to Thursday. On which day can you go on the tour?", o: ["On Wednesday", "On Monday", "On Tuesday", "On Thursday"], a: 0, e: "Die Führung gibt es mittwochs, samstags und sonntags. Von Montag bis Donnerstag passt nur der Mittwoch." }
          ],
          hilfen: ["Such in Teil A das Wort Price und die Tage nach When.", "Kinder unter 5 zahlen nichts. Kinder von 5 bis 15 zahlen £5."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "You are 13. You go with your mum, your dad and your brother (10). Which tickets are the cheapest?", o: ["A family ticket for £25", "Four single tickets for £36", "Two adult tickets for £24 – children are free", "A family ticket for £36"], a: 0, e: "Einzeln: 2 × £12 + 2 × £6 = £36. Die Familienkarte für zwei Erwachsene und zwei Kinder kostet nur £25." },
            { q: "Your family arrives in Durham on Thursday morning and leaves on Saturday at 9 am. Can you go on the tour?", o: ["No – there is no tour on Thursday or Friday, and on Saturday you leave before 10.30 am.", "Yes – on Friday at 10.30 am.", "Yes – on Thursday at 10.30 am.", "Yes – on Saturday at 10.30 am."], a: 0, e: "Führungen gibt es nur mittwochs, samstags und sonntags um 10.30 Uhr. Am Samstag fahrt ihr schon um 9 Uhr ab." }
          ] }),
      ...zwei({ art: "luecke", id: "notizen", tag: "Notes", titel: "My notes for the tour" },
        { lead: "Complete your notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Meeting point: next to the ", { g: "statue" }, " in the Market Place"],
            ["Start: at ", { g: "10.30 am" }],
            ["If it rains: bring an ", { g: "umbrella" }],
            ["Boat trip: it is ", { g: "in the price" }]
          ], extra: ["9.30 am", "cathedral"],
          hilfen: ["Alle Antworten stehen in Teil A und am Ende von Teil D.", "Der Treffpunkt ist neben einer Figur aus Stein oder Metall."] },
        { lead: "Complete your notes with words from the box. Two words are extra.",
          absaetze: [
            ["Meeting point: next to the ", { g: "statue" }, " in the Market Place"],
            ["How long: ", { g: "two and a half hours" }],
            ["What to wear: good ", { g: "shoes" }],
            ["Dogs: yes, but not on the ", { g: "boat" }],
            ["Boat trip: it is ", { g: "in the price" }]
          ], extra: ["two hours", "umbrella"] }),
      // R7 und M7 getrennt (Gegenlesen 15.11.): Der R7-Text hat keine Familienkarte – für R7 kostet die Führung 2 × £10 + 2 × £5 = £30.
      { art: "offen", id: "nachricht", nur: "R", m7: true, tag: "Plus · Your words", titel: "A message to your family",
        lead: "Your family wants to go on the tour on Sunday. Write a short <b>message</b> (two or three sentences): when and where you meet, and what the tour costs for you, your mum, your dad and your brother (10). <span class=\"de\">Für R7 freiwillig. Schreib, wann und wo ihr euch trefft und was die Führung für euch vier zusammen kostet.</span>",
        fragen: [{ q: "Write a message to your family about the tour.", m: "The tour starts at 10.30 am on Sunday. We meet in the Market Place, next to the statue. It costs £30 for the four of us.", k: ["10.30|half past ten|ten thirty", "market place|statue", "£30|30 pounds|thirty|£ 30"], min: 2 }],
        hilfen: ["Uhrzeit und Treffpunkt stehen in Teil A.", "Erwachsene zahlen £10, Kinder von 5 bis 15 zahlen £5 – du und dein Bruder seid Kinder.", "£10 + £10 + £5 + £5 = £30"],
        tipp: "The tour starts at … · We meet … · It costs … for the four of us." },
      { art: "offen", id: "nachricht", nur: "M", m7: true, tag: "Plus · Your words", titel: "A message to your family",
        lead: "Your family wants to go on the tour on Sunday. Write a short <b>message</b> (two or three sentences): when and where you meet, and what the tour costs for you, your mum, your dad and your brother (10). <span class=\"de\">Für M7 Pflicht.</span>",
        fragen: [{ q: "Write a message to your family about the tour.", m: "The tour starts at 10.30 am on Sunday. We meet in the Market Place, next to the statue. A family ticket costs £25.", k: ["10.30|half past ten|ten thirty", "market place|statue", "£25|25|twenty-five|family ticket"], min: 2 }],
        tipp: "The tour starts at … · We meet … · A family ticket costs … · Please bring …" }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "Questions about the tour", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a walking tour with a guide</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-read-gemma.jpg\" width=\"1280\" height=\"853\" alt=\"A young guide tells a small group a story in an old cobbled lane; two children raise their hands to ask a question.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is the woman? What could the children ask her? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "merke", nur: "R", kopf: "LANGUAGE IN ADVERTS", html: "<p>Adverts use the <b>simple present</b>: facts and timetables.</p><ul><li>he, she, it – das s muss mit: <i>The tour <u>takes</u> two hours. Gemma <u>meets</u> the group in the Market Place.</i></li><li>Fragen mit <b>do</b> (I, you, we, they) oder <b>does</b> (he, she, it) + Grundform: <i>Does the tour …? · Do we …?</i></li><li>Kurzantworten: <i>Yes, it does. / No, it doesn't. · Yes, we do. / No, we don't.</i></li></ul>" },
      { art: "merke", nur: "M", kopf: "LANGUAGE IN ADVERTS", html: "<p>Adverts use the <b>simple present</b> for facts and timetables: <i>Gemma <u>meets</u> the group in the Market Place. She <u>shows</u> you the cathedral.</i></p><ul><li>Questions: <b>do</b> (I, you, we, they) or <b>does</b> (he, she, it) + base form – <i>Does the tour …? · Do we …?</i></li><li>Short answers: <i>Yes, it does. / No, it doesn't. · Yes, we do. / No, we don't.</i></li><li>Negative: <b>doesn't / don't</b> + base form.</li></ul>" },
      ...zwei({ art: "luecke", id: "fragen-luecke", tag: "Questions with do/does", titel: "Questions about the tour", foerder: DODOES },
        { lead: "Complete the questions and answers. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["", { g: "Does" }, " the tour start at 10.30 am? – Yes, it does."],
            ["", { g: "Do" }, " children under 5 pay? – No, they ", { g: "don't" }, "."],
            ["The boat trip ", { g: "doesn't" }, " cost extra."],
            ["Gemma ", { g: "knows" }, " lots of stories about Durham."]
          ], extra: ["Is", "know"],
          hilfen: ["the tour = it → Does. children = they → Do.", "Bei he, she, it hängt im simple present ein -s am Verb: Gemma knows.", "Does · Do – don't · doesn't · knows"] },
        { lead: "Complete the questions and answers. Two words are extra.",
          absaetze: [
            ["", { g: "Does" }, " Gemma speak German? – Yes, she speaks English and German."],
            ["", { g: "Do" }, " dogs go on the boat? – No, they ", { g: "don't" }, "."],
            ["The boat trip ", { g: "doesn't" }, " cost extra."],
            ["Students ", { g: "live" }, " in the castle today, and Gemma ", { g: "knows" }, " all its stories."]
          ], extra: ["Is", "lives"] }),
      ...zwei({ art: "mc", id: "present-mc", tag: "Simple present", titel: "Which is correct?", foerder: HSI },
        { lead: "Tick the right form. <span class=\"de\">Bei he, she, it hängt ein -s am Verb.</span>",
          fragen: [
            { q: "The boat ____ around the old town.", o: ["goes", "go"], a: 0, e: "The boat = it. Bei he, she, it – das s muss mit: goes." },
            { q: "Gemma ____ you the rooms of the monks.", o: ["shows", "show"], a: 0, e: "Gemma = she. Bei he, she, it – das s muss mit: shows." }
          ],
          hilfen: ["Wer oder was ist es: he, she, it?", "the boat = it, Gemma = she → das Verb bekommt ein -s."] },
        { lead: "Tick the correct sentence.",
          fragen: [
            { q: "Which sentence is correct?", o: ["The tour starts in the Market Place.", "The tour start in the Market Place.", "The tour is start in the Market Place.", "The tour starting in the Market Place."], a: 0, e: "The tour = it: he, she, it – das s muss mit: starts." },
            { q: "Which question is correct?", o: ["Does the cathedral stand on a hill?", "Do the cathedral stand on a hill?", "Does the cathedral stands on a hill?", "Is the cathedral stand on a hill?"], a: 0, e: "The cathedral = it → Does. Nach does steht die Grundform: stand, ohne -s." }
          ] }),
      { art: "offen", id: "fragen-gemma", m7: true, tag: "Plus · Your questions", titel: "Two questions for Gemma",
        lead: "Write <b>two questions</b> for Gemma: one with <b>do</b> and one with <b>does</b>. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        foerder: DODOES,
        fragen: [{ q: "Write one question with do and one question with does.", m: "Do you show us the castle, too? Does the boat go under the old bridge?", k: ["do you|do we|do i|do children|do dogs|do the|do students|do people", "does the|does it|does she|does gemma|does your|does he"], min: 2 }],
        tipp: "Do you …? / Do we …? · Does the boat …? / Does the tour …? After do and does comes the base form." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      ...zwei({ art: "tf", id: "sichern", tag: "True or false?", titel: "Reading skills" },
        { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
          aussagen: [["You skim a text to find out quickly what it is about.", true], ["Scanning means reading every word slowly.", false], ["When you scan, you look for one detail, for example a time or a price.", true], ["An advert never has prices or times.", false], ["After does you use the base form: Does the boat go …?", true]] },
        { lead: "Decide: true or false?",
          aussagen: [["Skimming helps you to find out quickly what a text is about.", true], ["When you scan a text, you read every word very slowly.", false], ["Headings, photos and key words help you when you skim.", true], ["An advert never has prices or times.", false], ["In questions with he, she or it you use does: Does the boat leave at twelve?", true]] })
    ] }
  ],
  weiter: { text: "Well done! You know what kind of text an advert is, and you can skim and scan a text to find what you need. Use these skills for every text you read." }
});
