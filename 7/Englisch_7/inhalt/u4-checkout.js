/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Checkout: Fit for the test: Unit 4 (Kürzel D14)
   (Wiederholung der ganzen Unit vor der Probe: sechs Ich-kann-Sätze mit je einer Mini-Aufgabe und einer Selbsteinschätzung,
   Wörter aus allen Abschnitten bis zur Story, die Grammatik der Unit – G10 more/most, less/least, G11 much/many, too many,
   so much – mit Fehlertext, ein kurzer Lesetext, ein kurzer Hörtext und als Unit task ein eigenes USA-Quiz in Gruppen)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „Checkout“, nur Aufbau, nichts übernommen): Checklist mit den sechs Kann-Zielen der
   Unit, je mit typischen Wendungen und einem Balken zum Selbsteinschätzen; Unit task „USA-Quiz“ in Schritten in der Gruppe:
   Ideen und Themen sammeln, Fragen auf Karten schreiben (Antwort hinten), Englisch und Antworten prüfen, das Quiz vorbereiten
   und spielen (nachfragen, wenn man etwas nicht versteht), danach über das Quiz sprechen. Besser: nach jedem Ich-kann-Satz
   sofort eine kleine Aufgabe mit Rückmeldung und danach eine Selbsteinschätzung nach dem Ergebnis (grün/gelb/rot mit dem
   passenden Extra), echte Wiederholung der Grammatik mit Fehlertext, Förder-Links zu den Extra-Seiten, ein kurzer neuer Lese-
   und Hörtext (Radio-Quiz) und beim Quiz: Schritte ordnen, Beispielkarten einer Gruppe prüfen (Ja/Nein-Frage, keine klare
   Antwort), eigene Quizfragen schreiben, Fragen sprachlich verbessern und über das Spiel nachdenken.
   Statt des Buchfilms prüft der sechste Ich-kann-Satz die Story „Fries or chips?“ (britisches und amerikanisches Englisch).
   Differenzierung: Lesen und Hören – R7 und M7 haben eigene Fassungen derselben Situation (Lesetext R7 103 / M7 165 Wörter,
   Hörtext R7 81 / M7 130 Wörter, M7 mit drei Rollen) mit eigenen Zeilenangaben und Fragen; eigene Quizfragen – R7 zwei Fragen
   mit Satzanfängen und Hilfen in Stufen, M7 drei Fragen mit einem Superlativ und how many/how much;
   Plus für M7 (m7): zwei Quizkarten sprachlich verbessern (much/many, Steigerung) und überlegen, was das Team beim nächsten Mal
   besser macht (für R7 freiwillig).
   LehrplanPLUS E7 1.1 Leseverstehen, E7 1.2 Hörverstehen, E7 1.3 Sprechen (Quiz spielen, nachfragen), E7 2.2 Schreiben
   (Quizfragen), E7 Sprachmittlung (Camp-Aushang auf Deutsch), E7 3 (more/most, less/least; much/many, too many, so much),
   E7 5 (USA: Flagge, Küsten, Bundesstaaten, Schulsport, britisches und amerikanisches Englisch).
   Texte: „USA Day at our school“ (texte/u4/u4-co-read-r.js und -m.js) – Selin aus der 7b; „The radio quiz“
   (texte/u4/u4-co-hear-r.js und -m.js) – Ms Fuller, Caleb, Tessa. Dazu Emil, Lina und Tobias (Beispielgruppe „The Eagles“).
   Alle Personen sind erfunden. Sachaussagen nur sicher: fünfzig Bundesstaaten und fünfzig Sterne, dreizehn Streifen, Atlantik im
   Osten, Pazifik im Westen, Weißkopfseeadler als Symbol, Golden Gate Bridge in San Francisco, Punkte im Basketball.
   Förder-Links: more/most → unit4/extra/comparison.html, much/many → unit4/extra/much-many.html, Social-Media-Wörter →
   unit4/extra/social-media.html, BE/AE → unit4/extra/british-american.html.
   Wörter der Unit (Intro bis Film) kommen bewusst vor: state, huge, national park, to share, to post, newspaper, useful, wave,
   leader, president, point, coach, to join, so many, too much.
   BILDER:
   1. Station „I can“ (Vorentlastung): sechs kleine Bilder in einer Reihe – eine US-Flagge, ein Tablet mit Fotos, ein Zelt an
      einem See, ein Lacrosse-Schläger mit Netz, ein Kind erklärt seinen Eltern etwas am Laptop, eine Tüte Kartoffelchips neben
      Pommes frites (ohne Marken, ohne Schrift).
   2. Station „Read & listen“ (Lesetext): ein Schulhof in Bayern mit Fähnchen; Kinder spielen Baseball, ein Mädchen hält einen
      Schläger, im Hintergrund ein Tisch mit Pfannkuchen.
   3. Station „Unit task“ (Sprechanlass): drei Kinder sitzen mit Quizkarten am Gruppentisch, eins liest vor, eins schreibt eine
      Antwort auf, eine kleine selbst gemalte Teamfahne mit einem Adler steht auf dem Tisch. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
D7Kit.seite({
  id: "u4-checkout",
  titel: "Checkout · Fit for the test: Unit 4",
  einleitung: "The test is coming! In this module you check what you can do after <b>Unit 4</b>: you test yourself on six things, revise words and grammar, read and listen to a short text, and then you do the <b>Unit task</b> – your own <b>USA quiz</b> in a group. Du siehst sofort, was schon sitzt und was du noch üben solltest.",
  zeit: "etwa 45 Minuten",
  ziele: ["✅ I check what I can do after Unit 4.", "📚 I know the important words of the unit.", "🧩 I use more/most, less/least and much/many correctly.", "🔎 I read and listen to short texts and find the details.", "❓ I write good quiz questions and play a quiz in English."],
  thema: "Unit 4 USA – here we come!, Checkout: Wiederholung der ganzen Unit und eigenes USA-Quiz in Gruppen",
  quiz: { profi: "Fit pro" },
  glossar: {
    checklist: ["checklist", "Checkliste: eine Liste mit Punkten, die man abhakt, wenn man sie kann."],
    stripe: ["stripe", "Streifen: ein langer, schmaler Strich, zum Beispiel auf einer Flagge."],
    coast: ["coast", "Küste: Dort trifft das Land auf das Meer."],
    eagle: ["bald eagle", "Weißkopfseeadler: ein großer Greifvogel mit weißem Kopf. Er ist ein Symbol der USA."],
    card: ["quiz card", "Quizkarte: Vorne steht die Frage, hinten die Antwort."],
    syrup: ["maple syrup", "Ahornsirup: Das ist ein süßer Sirup aus dem Saft von Ahornbäumen. In Nordamerika isst man ihn gern auf Pfannkuchen."],
    team: ["team", "Mannschaft, Gruppe: Beim Quiz spielen zwei oder mehr Teams gegeneinander."]
  },
  stationen: [
    { kurz: "I can", ober: "Check yourself", titel: "What can I do now?", teile: [
      { art: "text", html: "<p class=\"lead\">At the end of Unit 4 you can do six things. Don't just say \"yes\" – <b>try it</b>! After each sentence there is a small task. <span class=\"de\">Lies die sechs Sätze. Nach jedem Satz kommt eine kleine Aufgabe. So siehst du gleich, ob es klappt.</span></p>" },
      { art: "merke", kopf: "CHECKLIST", html: "<ol><li><b>I can talk about the USA.</b> <i>fifty states · the flag · national parks</i></li><li><b>I can write about how I use social media.</b> <i>I post photos. · … is more interesting than … · the most important …</i></li><li><b>I can talk about a summer camp.</b> <i>a lake and tents · lots of activities · How many …? · How much …?</i></li><li><b>I learned something about sports at an American school.</b> <i>softball · lacrosse · track and field</i></li><li><b>I can tell my family in German what an English text says.</b> <i>only the important things</i></li><li><b>I can understand a story about British and American English.</b> <i>chips or fries? queue or line?</i></li></ol>" },
      { art: "mc", id: "k1", tag: "I can … 1/6", titel: "The USA", lead: "<b>Fact file:</b> The USA has fifty states. The US flag has fifty stars – one for every state – and thirteen stripes. People pay with dollars. <span class=\"de\">Lies den Steckbrief und kreuze an.</span>",
        fragen: [
          { q: "Why are there fifty stars on the US flag?", o: ["There is one star for every state.", "There were fifty presidents.", "The USA has fifty big cities.", "The flag is fifty years old."], a: 0,
            e: "Im Steckbrief steht: fifty stars – one for every state. Jeder Bundesstaat hat einen Stern." }
        ] },
      { art: "mc", id: "k2", tag: "I can … 2/6", titel: "Social media", lead: "<b>Survey in class 7b:</b> Fourteen pupils use a tablet to share photos, six use a laptop, and only two read a newspaper. <span class=\"de\">Eine Umfrage in der 7b. Welcher Satz stimmt?</span>",
        foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" },
        fragen: [
          { q: "Which sentence is correct for class 7b?", o: ["A tablet is more popular than a laptop.", "A newspaper is the most popular.", "A laptop is more popular than a tablet.", "A tablet is the least popular."], a: 0,
            e: "Vierzehn Kinder nutzen ein Tablet, nur sechs einen Laptop – das Tablet ist also beliebter: more popular than." }
        ] },
      { art: "mc", id: "k3", tag: "I can … 3/6", titel: "A summer camp", lead: "<b>A postcard from a camp:</b> \"There are so ____ activities here, but I don't have ____ free time!\" <span class=\"de\">Welche Wörter fehlen?</span>",
        foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" },
        fragen: [
          { q: "Which words are missing?", o: ["many – much", "much – many", "much – much", "many – many"], a: 0,
            e: "Activities kann man zählen: so many activities. Freizeit (time) kann man nicht zählen: not much free time." }
        ] },
      { art: "mc", id: "k4", tag: "I can … 4/6", titel: "Sports at an American school", lead: "<b>School sports:</b> In softball, players hit a ball with a bat. In lacrosse, players carry a small ball in a stick with a net. Track and field is running, jumping and throwing. <span class=\"de\">Lies die drei Sätze und kreuze an.</span>",
        fragen: [
          { q: "In which sport do players use a stick with a net?", o: ["Lacrosse", "Softball", "Track and field", "Basketball"], a: 0,
            e: "Im Text steht: In lacrosse, players carry a small ball in a stick with a net." }
        ] },
      { art: "mc", id: "k5", tag: "I can … 5/6", titel: "Telling your family", lead: "<b>Camp notice:</b> \"Swimming lessons every morning at 9 am. Lessons are free. Please bring a towel.\" Dein kleiner Bruder fragt: <i>„Was muss ich mitnehmen?“</i>",
        fragen: [
          { q: "Was sagst du ihm?", o: ["Ein Handtuch.", "Neun Dollar.", "Nichts, es ist kostenlos.", "Eine Badehose und Geld."], a: 0,
            e: "Dein Bruder fragt nur, was er mitnehmen soll: Please bring a towel – ein Handtuch. Die Uhrzeit und der Preis sind hier nicht gefragt." }
        ] },
      { art: "mc", id: "k6", tag: "I can … 6/6", titel: "British and American English", lead: "An American girl says: <i>\"I'm hungry. Let's get some fries and a bag of chips.\"</i> <span class=\"de\">Was sagt ein britisches Mädchen?</span>",
        foerder: { href: "unit4/extra/british-american.html", text: "Extra: British und American English" },
        fragen: [
          { q: "What does a British girl say?", o: ["Let's get some chips and a bag of crisps.", "Let's get some crisps and a bag of chips.", "Let's get some fries and a bag of fries.", "Let's get some chips and a queue."], a: 0,
            e: "Amerikanische fries sind britische chips, amerikanische chips sind britische crisps." }
        ] },
      { art: "merke", kopf: "MY SELF-CHECK", html: "<p>Look at your six results and colour the six points of the checklist in your exercise book:</p><ul><li>✅ <b>green</b> – right at once: You can do it.</li><li>⚠️ <b>yellow</b> – right at the second try: Read the topic in your book again.</li><li>❗ <b>red</b> – the box \"Das ist noch schwer?\" came up: Do the extra exercise first.</li></ul><p><span class=\"de\">Male die sechs Punkte im Heft grün, gelb oder rot an – je nachdem, wie es geklappt hat. Bei Rot hilft dir die Extra-Übung unter der Aufgabe.</span></p>" }
    ] },
    { kurz: "Words", ober: "Revision", titel: "Words from the whole unit", teile: [
      { art: "text", html: "<p class=\"lead\">Words are the base of everything. Check the words from <b>all parts</b> of Unit 4. <span class=\"de\">Wörter aus allen Abschnitten der Unit: zuordnen und Lückensätze.</span></p>" },
      { art: "paare", id: "woerter-paare", tag: "Match", titel: "Find the pairs", lead: "Match the English words with the German words. <span class=\"de\">Welches deutsche Wort passt?</span>",
        foerder: { href: "unit4/extra/social-media.html", text: "Extra: Social media words" },
        hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "huge kennst du aus dem Intro, wave aus dem Camp. Ein Wort kommt aus dem Sport: coach.", "state = Bundesstaat · huge = riesig · to share = teilen · newspaper = Zeitung · wave = Welle · coach = Trainer"],
        paare: [["state", "Bundesstaat"], ["huge", "riesig"], ["to share", "teilen"], ["newspaper", "Zeitung"], ["wave", "Welle"], ["coach", "Trainer"]] },
      { art: "luecke", id: "woerter-luecke", tag: "Gap text", titel: "The right word", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        hilfen: ["Lies den ganzen Satz und überlege, welches Wort sinnvoll ist.", "Wo sieht man Bären und riesige Bäume? Was macht man mit einem Foto im Internet?", "national park · post · useful · president · points · join"],
        absaetze: [
          ["We saw bears and huge trees in a ", { g: "national park" }, "."],
          ["I ", { g: "post" }, " a photo of my dog every day."],
          ["A map is very ", { g: "useful" }, " when you go hiking."],
          ["The ", { g: "president" }, " of the USA lives in the White House."],
          ["In basketball, you get two or three ", { g: "points" }, " for a basket."],
          ["Can I ", { g: "join" }, " your team? I love basketball."]
        ], extra: ["rock", "dollar"] }
    ] },
    { kurz: "Grammar", ober: "Revision", titel: "Grammar of Unit 4", teile: [
      { art: "merke", kopf: "UNIT 4 IN FIVE LINES", html: "<ul><li><b>Short adjectives:</b> <i>cheap – cheaper – the cheapest</i>. <b>Long adjectives:</b> <i>famous – more famous – the most famous</i>.</li><li><b>less / the least</b> = weniger / am wenigsten: <i>less boring than · the least boring</i>.</li><li>Don't forget <b>than</b> after more and less, and <b>the</b> before most and least.</li><li><b>many</b> + things you can count: <i>many cities, many photos</i>. <b>much</b> + things you can't count: <i>much water, much fun</i>.</li><li><b>too many / too much</b> = zu viele / zu viel · <b>so many / so much</b> = so viele / so viel.</li></ul>" },
      { art: "luecke", id: "g10-luecke", tag: "more / most · less / least", titel: "Compare", lead: "Complete the sentences. ☺ = more/most, ☹ = less/least. <span class=\"de\">Das Gesicht zeigt dir, ob mehr oder weniger gemeint ist. Zwei Formen sind falsch und bleiben übrig.</span>",
        foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" },
        hilfen: ["Steht than im Satz? Dann brauchst du more oder less. Steht the davor? Dann most oder least.", "☺ bedeutet mehr (more/most), ☹ bedeutet weniger (less/least).", "Satz 1: more exciting · Satz 2: most beautiful · Satz 3: less useful · Satz 4: least expensive"],
        absaetze: [
          ["☺ For me, basketball is ", { g: "more exciting" }, " than golf."],
          ["☺ This is the ", { g: "most beautiful" }, " beach in the state."],
          ["☹ For me, newspapers are ", { g: "less useful" }, " than the internet."],
          ["☹ This is the ", { g: "least expensive" }, " hotel in town."]
        ], extra: ["more cheap", "beautifuller"] },
      { art: "luecke", id: "g11-luecke", tag: "much / many", titel: "Much or many?", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wortgruppen sind falsch und bleiben übrig.</span>",
        foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" },
        hilfen: ["Kann man es zählen? Dann many. Wenn nicht, dann much.", "states und people kann man zählen, time nicht. How much …? fragt auch nach dem Preis.", "Satz 1: How many · Satz 2: How much · Satz 3: much · Satz 4: many"],
        absaetze: [
          ["", { g: "How many" }, " states are there in the USA?"],
          ["", { g: "How much" }, " is a ticket for the national park?"],
          ["We haven't got ", { g: "much" }, " time – the bus leaves in five minutes."],
          ["There are so ", { g: "many" }, " people at the beach today!"]
        ], extra: ["much friends", "many money"] },
      { art: "text", html: "<p class=\"lead\">Now find the mistakes. In this postcard there are exactly <b>three mistakes</b> – they are printed in bold. <span class=\"de\">Genau drei Fehler stehen fett gedruckt. Schreibe die drei Sätze richtig auf.</span></p><blockquote>My cousin has got <b>much</b> friends at the camp. Canoeing is <b>more exciting as</b> swimming. It was the <b>most beautifulest</b> day of the summer.</blockquote>" },
      { art: "offen", id: "fehlertext", tag: "Find the mistakes", titel: "Write the three sentences correctly", lead: "Write all three sentences without the mistakes. <span class=\"de\">Schreibe alle drei Sätze richtig auf.</span>",
        foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" },
        fragen: [{ q: "Write the three sentences correctly.", m: "My cousin has got many friends at the camp. Canoeing is more exciting than swimming. It was the most beautiful day of the summer.", k: ["many friends|lots of friends|a lot of friends", "more exciting than", "the most beautiful day"], min: 3 }],
        tipp: "Satz 1: friends kann man zählen. · Satz 2: Nach more kommt than, nicht as. · Satz 3: beautiful ist lang – nur most, keine Endung -est." }
    ] },
    { kurz: "Read & listen", ober: "Mini-check", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">An article from a school magazine and a quiz on the radio – like in a test. <span class=\"de\">Erst ein kurzer Text, dann ein Quiz im Radio.</span></p><p>Before you read, imagine: <b>a USA Day at a school in Bavaria</b>. What could the children eat, play and do?</p>" },
      { art: "lesetext", lesetext: { R: "u4-co-read-r", M: "u4-co-read-m" } },
      { art: "tf", id: "lesen-tf", nur: "R", tag: "Reading", titel: "True or false?", lead: "Tick true or false. <span class=\"de\">Der Text bleibt über der Aufgabe stehen.</span>",
        hilfen: ["Suche zu jeder Aussage die passende Stelle im Text.", "Achte auf Wörter wie sweeter, difficult und much time."],
        aussagen: [
          ["The pancakes were sweeter than Selin's breakfast at home.", true],
          ["Baseball was easy for Selin.", false],
          ["Selin's team had a lot of time for the last question.", false],
          ["The class talked to a class in the USA.", true]
        ] },
      { art: "tf", id: "lesen-tf", nur: "M", tag: "Reading", titel: "True or false?", lead: "Tick true or false.",
        aussagen: [
          ["Selin thinks that USA Day was boring.", false],
          ["Selin missed the ball three times.", true],
          ["Selin's team answered all twenty questions correctly.", false],
          ["The class in the USA wants to visit Selin's school next year.", true]
        ] },
      { art: "beleg", id: "lesen-beleg", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-co-read-r",
        hilfen: ["Suche das Wort baseball.", "Der Grund steht nach because."],
        fragen: [
          { q: "Where does Selin say why baseball was difficult?", zeilen: [5, 6], e: "Selin schreibt: It was more difficult than I thought because the ball is very small.", tipp: "Suche das Wort because." }
        ] },
      { art: "beleg", id: "lesen-beleg", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer.", lesetext: "u4-co-read-m",
        fragen: [
          { q: "Where does Selin explain why baseball was difficult?", zeilen: [7, 9], e: "Selin schreibt: the ball is small and fast, and you have to hit it with a bat.", tipp: "Look for the paragraph about baseball." }
        ] },
      { art: "text", html: "<p class=\"lead\">Now listen. <b>Read the questions first, then listen.</b> <span class=\"de\">Erst die Fragen lesen, dann hören. Das Transkript erscheint, wenn du fertig bist.</span></p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: { R: "u4-co-hear-r", M: "u4-co-hear-m" },
        fragen: [
          { art: "mc", id: "hoer-mc", nur: "R", titel: "The radio quiz", lead: "Listen and tick the correct answer. <span class=\"de\">Hör zu und kreuze an.</span>",
            fragen: [
              { q: "How many points does Caleb get?", o: ["Two", "Three", "One", "Thirteen"], a: 0,
                e: "Caleb weiß die Antworten zur Flagge und zum Vogel, aber nicht zum Ozean. Ms Fuller sagt: That's two points for you." }
            ] },
          { art: "tf", id: "hoer-tf", nur: "R", titel: "Is it true?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
            aussagen: [
              ["Caleb knows the answer about the flag.", true],
              ["The Atlantic Ocean is on the west coast of the USA.", false]
            ] },
          { art: "mc", id: "hoer-mc", nur: "M", titel: "The radio quiz", lead: "Listen and tick the correct answer.",
            fragen: [
              { q: "Who wins the quiz, and why?", o: ["Tessa – she has got two right answers.", "Caleb – he knows the answer about the bird.", "Caleb – he has got three points.", "Nobody – they have both got two points."], a: 0,
                e: "Caleb hat einen Punkt (die Streifen), Tessa zwei (der Ozean und die Zahl der Bundesstaaten)." }
            ] },
          { art: "tf", id: "hoer-tf", nur: "M", titel: "Is it true?", lead: "Tick true or false.",
            aussagen: [
              ["Caleb thinks that the turkey is a symbol of the USA.", true],
              ["Tessa doesn't know how many states there are.", false]
            ] }
        ] }
    ] },
    { kurz: "Unit task", ober: "The USA quiz", titel: "Make your own USA quiz", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a USA quiz in your group</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-co-quiz.jpg\" width=\"1280\" height=\"853\" alt=\"Three children at a group table with quiz cards: one reads a card aloud, one writes an answer, one thinks; a small home-made pennant with an eagle stands on the table.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What are the children doing? Which question about the USA would you ask? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Your group is going to make a <b>USA quiz</b>. Three or four children work together and write eight questions. Then two teams play. <span class=\"de\">Unit task: ein USA-Quiz in der Gruppe. Du ordnest die Schritte, prüfst die Karten einer Beispielgruppe und schreibst eigene Fragen.</span></p><p>First, the group must know the steps. Put them in the right order.</p>" },
      { art: "ordnen", id: "schritte", tag: "Steps", titel: "Six steps for a quiz", lead: "Put the six steps in the right order. <span class=\"de\">Was kommt zuerst, was zuletzt?</span>",
        hilfen: ["Zuerst braucht ihr Ideen, ganz am Schluss sprecht ihr über das Spiel.", "Erst die Fragen schreiben, dann prüfen, dann spielen.", "1 Ideen · 2 Themen wählen · 3 Karten schreiben · 4 prüfen · 5 spielen · 6 darüber sprechen"],
        schritte: ["Collect ideas: people, sport, cities, nature, food, the flag …", "Choose the best topics for your quiz.", "Write each question on a card – the answer goes on the back.", "Check the English and the answers with a partner.", "Play the quiz: one team reads a question, the other team writes the answer.", "Talk about the quiz: What was good? What can we do better?"] },
      { art: "merke", kopf: "GOOD QUIZ QUESTIONS", html: "<ul><li>Start with a <b>question word</b>: <i>What … ? Which … ? How many … ? Where … ? Who … ?</i></li><li><b>No yes/no questions</b> – they are too easy.</li><li>Every question needs <b>one clear answer</b> – a fact, not an opinion. Check it in a book or on the internet.</li></ul><p><b>During the quiz:</b></p><div class=\"phrasen\"><span>Could you repeat the question, please?</span><span>Can you speak a bit louder, please?</span><span>How do you spell that?</span><span>Well done! / Sorry, that's wrong.</span></div>" },
      { art: "text", html: "<p class=\"lead\">Here are six <button class=\"term\" data-t=\"card\">quiz cards</button> from <b>Emil</b>, <b>Lina</b> and <b>Tobias</b> – team \"The Eagles\". <span class=\"de\">Lies die Karten der Beispielgruppe. Nicht alle sind gute Quizfragen.</span></p>" },
      { art: "material", daten: { typ: "tabelle", titel: "Team \"The Eagles\": our quiz cards", kopf: ["Card", "Question (front)", "Answer (back)"], reihen: [["1", "How many states are there in the USA?", "fifty"], ["2", "Is the USA a big country?", "yes"], ["3", "Which ocean is on the east coast of the USA?", "the Atlantic"], ["4", "What colours are on the US flag?", "red, white and blue"], ["5", "In which city is the Golden Gate Bridge?", "San Francisco"], ["6", "What is the best food in the USA?", "burgers"]] } },
      { art: "mc", id: "karten", tag: "Check the cards", titel: "Which cards are not good?", lead: "Tick <b>two</b> answers. <span class=\"de\">Kreuze zwei Karten an. Der Kasten GOOD QUIZ QUESTIONS hilft dir.</span>",
        fragen: [
          { q: "Which two cards are not good quiz questions?", o: ["Card 2", "Card 6", "Card 1", "Card 3", "Card 4"], a: [0, 1],
            e: "Card 2 ist eine Ja/Nein-Frage – zu leicht. Card 6 hat keine klare Antwort: Was das beste Essen ist, ist eine Meinung." }
        ] },
      ...zwei({ art: "offen", id: "eigene-fragen", tag: "Your questions", titel: "Write your own quiz questions" },
        { lead: "Write <b>two quiz questions</b> about the USA with the answers. <span class=\"de\">Schreibe zwei Quizfragen mit Fragewort und die Antworten dazu.</span>",
          fragen: [{ q: "Write two quiz questions about the USA. Write the answers, too.", m: "What colours are on the US flag? Red, white and blue. How many stripes are there on the US flag? Thirteen.", k: ["what|which|how|where|when|who", "usa|america|american|flag|state|ocean|city|sport|president|dollar|food|animal|bird|coast"], min: 2 }],
          hilfen: ["Beginne jede Frage mit einem Fragewort: What …? Which …? How many …?", "Ideen: die Flagge, das Geld, die Ozeane, Sportarten, Städte, Tiere.", "Zum Beispiel: What is the money of the USA called? – The dollar."],
          tipp: "Start like this: What …? / Which …? / How many …? Then write the answer." },
        { lead: "Write <b>three quiz questions</b> about the USA with the answers: one with a <b>superlative</b> (the biggest, the most …) and one with <b>how many</b> or <b>how much</b>.",
          fragen: [{ q: "Write three quiz questions about the USA: one with a superlative and one with how many or how much. Write the answers, too.", m: "Which is the biggest ocean next to the USA? The Pacific. How many stripes are there on the US flag? Thirteen. What is the money of the USA called? The dollar.", k: ["the most|the biggest|the longest|the highest|the smallest|the oldest|the best|biggest|most", "how many|how much", "what|which|where|when|who"], min: 3 }],
          tipp: "Use: Which is the biggest …? · How many … are there …? · What is …?" }),
      { art: "text", html: "<p class=\"lead\"><b>Check the English</b> before you play. <span class=\"de\">Plus-Aufgaben (für M7 Pflicht, für R7 freiwillig).</span></p><blockquote>Card A: How <b>much</b> states are there in the USA?<br>Card B: Which ocean is <b>more big</b>, the Atlantic or the Pacific?</blockquote>" },
      { art: "offen", id: "karten-verbessern", m7: true, tag: "Check the English", titel: "Correct two cards", lead: "Write cards A and B correctly. <span class=\"de\">Zwei Fehler sind fett gedruckt.</span>",
        fragen: [{ q: "Write cards A and B correctly.", m: "How many states are there in the USA? Which ocean is bigger, the Atlantic or the Pacific?", k: ["how many states", "bigger"], min: 2 }],
        tipp: "Card A: states kann man zählen. · Card B: big ist ein kurzes Adjektiv – also -er." },
      { art: "offen", id: "naechstes-mal", m7: true, tag: "Talk about the quiz", titel: "Next time …", lead: "Imagine you have played the quiz. Write <b>two sentences</b>: What was good? What can your team do better next time?",
        fragen: [{ q: "What was good? What can your team do better next time?", m: "Our questions were interesting, and we read them out loud. Next time we should check the answers better because one answer was wrong.", k: ["good|great|fun|interesting|well|liked|loud", "next time|better|should|can|more|less"], min: 2 }],
        tipp: "Use: Our questions were … · We read … · Next time we should … because …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class=\"de\">Was gehört zu Unit 4?</span>",
        aussagen: [
          ["Long adjectives use more and the most: more interesting, the most interesting.", true],
          ["You can say: There are too much people here.", false],
          ["You use many with things you can count: many states.", true],
          ["Good quiz questions are yes/no questions.", false],
          ["An American says fries, a British person says chips.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You have checked what you can do after Unit 4 and revised the important words and the grammar. Look at the tasks you found difficult once more – then you are fit for the test." }
});
