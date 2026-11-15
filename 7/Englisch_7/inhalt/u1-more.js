/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · More about: Art and culture in England (Kürzel A16)
   (einen Sachtext in vier Abschnitten lesen – Angel of the North, Paddington, Morris dancing, Pantomime –, Überschriften
   zuordnen, Einzelheiten finden und mit Zeilen belegen, Worterklärungen, ein falscher Freund (Pantomime), dann wie im Buch eine
   Wahlaufgabe: über das Lieblingsthema schreiben und etwas Interessantes aus Deutschland/Bayern vorstellen, Plus: einer Oma auf
   Deutsch erklären, was eine Pantomime ist; zuletzt simple past und simple present im Kontext)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „More about“, nur Aufbau, nichts übernommen): Sachtext in vier nummerierten Abschnitten
   mit Zwischenüberschrift und Foto, Kasten mit Worterklärungen englisch – deutsch, eine Wahlaufgabe: a) zwei, drei Sätze über
   einen interessanten Ort oder ein Ereignis in Deutschland (Transfer) oder b) Lieblingsbild mit Begründung und Zusammenfassung
   auf Deutsch (Mediation); Tipp: unbekannte Schlüsselwörter im Wörterbuch nachschlagen. Andere Inhalte als im Buch: keine
   Museen, Musicals, Trickfilmstudios oder Popmusik – eine Statue, ein Kinderbuch-Bär, ein alter Tanz, Theater im Winter.
   Besser: Überschriften selbst zuordnen (eine zu viel), Sofort-Rückmeldung bei jeder Frage, Textstellen finden, Worterklärungen
   als Zuordnung, der falsche Freund als eigene Aufgabe, beide Teile der Wahlaufgabe mit KI-Hinweis (Lieblingsthema und Transfer
   für alle, die Erklärung auf Deutsch als Plus), Grammatik der Unit im Kontext mit Förder-Links.
   Differenzierung: Text R7 249 Wörter, M7 378 Wörter (mehr Einzelheiten: Jumbojet-Vergleich, Streit um die Statue, Koffer und
   Zettel, Name vom Bahnhof, Männer und Frauen beim Morris dancing, Ausbuhen); R7 mit deutschen Hilfen und Hilfen in Stufen,
   zwei Textstellen, einfache Satzrahmen; M7 ohne deutsche Hilfen, drei Textstellen, Begründungen mit because.
   Plus für M7 (m7): einer Oma auf Deutsch erklären, was eine englische Pantomime ist (Mediation EN → DE, nur das Wichtige), und
   je ein verneinter Satz und eine Frage im simple present (für R7 freiwillig).
   LehrplanPLUS E7 1.1 Leseverstehen (Sachtext in Abschnitten: global und im Detail), E7 2.2 Schreiben (kurze Texte über ein
   Thema, Meinung mit Begründung), E7 Sprachmittlung (das Wichtige auf Deutsch), E7 3 (G1 simple past, G2/G3 simple present),
   E7 5 Landeskunde England (Kunst, Kinderbuch, Volkstanz, Theatertradition) und Vergleich mit Bayern.
   Texte: „Art and culture in England: four special things“ (texte/u1/u1-more-art-r.js und -m.js; je vier Teile „Part 1 – …“
   ohne Überschriften). Sachaussagen nur gesichert: Angel of the North (Antony Gormley, bei Gateshead, 1998, Stahl, 20 m hoch,
   Flügel 54 m, früher ein Kohlebergwerk auf dem Hügel); Paddington (Michael Bond, erstes Buch 1958, Bär aus Peru, Bahnhof
   Paddington in London, blauer Mantel, roter Hut, Orangenmarmelade); Morris dancing (mehr als 500 Jahre alt, Glöckchen, Stöcke,
   Taschentücher, Akkordeon oder Geige, Dorffeste); Pantomime (Weihnachtszeit, Märchen, die „dame“ spielt ein Mann, „He's behind
   you!“). Keine erfundenen Personen; die Mädchen im Grammatikteil haben keinen Namen.
   Förder-Links: simple past → unit1/extra/simple-past.html, he/she/it -s → unit1/extra/he-she-it.html, Fragen und Verneinung mit
   do/does → unit1/extra/do-does-questions.html.
   Wörter der Unit bis „More about“ kommen bewusst vor: culture, if, live, important, British, popular, adult, on TV, north-east,
   coal, mine, statue, artist, near, quiet. Neu und im Glossar erklärt: steel, wing, bell, handkerchief, accordion, dame, fairy
   tale, audience, marmalade, false friend.
   BILDER:
   1. Station „Get ready“ (Sprechanlass, ersetzt die vier Bildkarten): vier Fotos nebeneinander – die rostbraune Engelsfigur mit
      ausgebreiteten geraden Flügeln auf einem grünen Hügel, darunter eine Straße; ein kleiner Bär in blauem Mantel und rotem Hut auf
      einem alten Koffer in einer Bahnhofshalle (gezeichnet, nicht wie die bekannten Filmbilder); Tänzer in Weiß mit Bändern und
      Glöckchen an den Beinen, die Stöcke aneinanderschlagen; eine bunte Bühne mit einem Mann in riesigem rosa Kleid und Perücke,
      Kinder im Publikum zeigen und rufen.
   2. Station „Your turn“ (Schreibanlass Transfer): ein Dorffest in Bayern mit Maibaum, Blasmusik und Menschen in Tracht. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
const SP = { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" };
const HSI = { href: "unit1/extra/he-she-it.html", text: "Extra: he, she, it – das s muss mit" };
const DODOES = { href: "unit1/extra/do-does-questions.html", text: "Extra: Fragen mit do und does" };
D7Kit.seite({
  id: "u1-more",
  titel: "More about: Art and culture in England",
  einleitung: "A giant angel made of steel, a bear with a love of marmalade, dancers with bells and a show where everybody shouts: You read about four special things in English <b>culture</b>, find details in the text and tell others about it – in English and in German.",
  zeit: "etwa 40 Minuten",
  ziele: ["📖 I find the right heading for each part of a text.", "🔎 I find details and the lines that show them.", "💬 I write about my favourite part and about something interesting in Germany.", "✅ I use the simple past and the simple present in sentences about the text."],
  thema: "Unit 1 Out and about in England: More about (Angel of the North, Paddington, Morris dancing, Pantomime)",
  quiz: { profi: "Culture pro" },
  glossar: {
    statue: ["statue", "Eine statue ist ein Standbild: eine große Figur aus Stein oder Metall."],
    steel: ["steel", "Steel heißt Stahl. Das ist ein sehr hartes Metall."],
    marmalade: ["marmalade", "Marmalade ist Marmelade aus Orangen. Andere Marmelade heißt auf Englisch jam."],
    handkerchief: ["handkerchief", "Ein handkerchief ist ein Taschentuch aus Stoff."],
    accordion: ["accordion", "Ein accordion ist ein Akkordeon, also eine Ziehharmonika."],
    dame: ["dame", "Die dame ist eine lustige Figur in einer englischen pantomime: eine ältere Frau, die ein Mann spielt."],
    fairy: ["fairy tale", "Ein fairy tale ist ein Märchen, zum Beispiel Cinderella (Aschenputtel)."],
    audience: ["audience", "Audience heißt Publikum: Das sind die Menschen, die eine Show ansehen."],
    falsefriend: ["false friend", "Ein false friend ist ein Wort, das in zwei Sprachen fast gleich aussieht, aber etwas anderes bedeutet."]
  },
  haupttext: { R: "u1-more-art-r", M: "u1-more-art-m" },
  stationen: [
    { kurz: "Get ready", ober: "Before you read", titel: "Four special things", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-more-vier.jpg\" width=\"1280\" height=\"853\" alt=\"Four pictures: top left a huge steel angel on a hill above a road, top right a girl and her grandad read a picture book together, bottom left dancers in white with sticks in a village street, bottom right a man in a big pink dress on a colourful stage.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">England is famous for its <b>culture</b>: art, books, films, music, dance and theatre. In this text you read about four special things. Look at the four pictures first. <span class=\"de\">England ist bekannt für seine Kultur. Du liest gleich über vier besondere Dinge. Sieh dir zuerst die vier Bilder und die Bildkarten an: Was könnte das sein?</span></p>" },
      { art: "karten", karten: [
        { ic: "🗿", titel: "Picture A: a giant on a hill", text: "A huge brown figure with very long, straight wings stands on a green hill. Cars drive past on a road below it." },
        { ic: "🧸", titel: "Picture B: a bear at a station", text: "A little bear in a blue coat and a red hat sits on an old suitcase at a busy station." },
        { ic: "🔔", titel: "Picture C: dancers in a village", text: "People in white clothes dance in a village street. They hit sticks together. A man plays music." },
        { ic: "🎭", titel: "Picture D: a show at Christmas", text: "On a colourful stage a man in a huge pink dress laughs. Children in the audience point and shout." }
      ] },
      ...zwei({ art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words" },
        { lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du im Text. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>",
          paare: [["steel", "Stahl"], ["wing", "Flügel"], ["bear", "Bär"], ["bell", "Glöckchen"], ["stick", "Stock"], ["audience", "Publikum"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Ein Engel und ein Vogel haben wings. Ein Publikum sieht eine Show an.", "steel = Stahl · wing = Flügel · bear = Bär · bell = Glöckchen · stick = Stock · audience = Publikum"] },
        { lead: "Find the pairs.",
          paare: [["steel", "Stahl"], ["wing", "Flügel"], ["label", "Zettel, Anhänger"], ["bell", "Glöckchen"], ["stick", "Stock"], ["audience", "Publikum"], ["to boo", "ausbuhen"]],
          hilfen: ["A label tells you something – for example where a suitcase must go."] }),
      { art: "merke", kopf: "READING TIP", html: "<p>This text has four <b>parts</b>. To find out what a part is about, <b>skim</b> it: read the first sentence and look for <b>key words</b> (names, things, places).</p><p>Don't stop at every word you don't know. Only look up the key words in a dictionary. <span class=\"de\">Überfliege jeden Teil zuerst. Schlag nur die wichtigen Wörter nach – nicht jedes unbekannte Wort.</span></p>" }
    ] },
    { kurz: "Read", ober: "Reading", titel: "Read the text", teile: [
      { art: "text", html: "<p class=\"lead\">Read the text. It has four parts, but the headings are missing. <span class=\"de\">Lies den Text. Er hat vier Teile, die Überschriften fehlen noch.</span></p>" },
      { art: "lesetext", lesetext: { R: "u1-more-art-r", M: "u1-more-art-m" } },
      ...zwei({ art: "luecke", id: "ueberschriften", tag: "Headings", titel: "Which heading fits which part?",
          absaetze: [
            ["Part 1: ", { g: "Big wings in the north" }],
            ["Part 2: ", { g: "A bear from far away" }],
            ["Part 3: ", { g: "Bells, sticks and music" }],
            ["Part 4: ", { g: "A loud show at Christmas" }]
          ], extra: ["Pictures in a museum"] },
        { lead: "Choose the right heading for each part. One heading is extra. <span class=\"de\">Eine Überschrift bleibt übrig. Tipp: Lies den ersten Satz jedes Teils und such die wichtigen Wörter.</span>",
          hilfen: ["Lies von jedem Teil nur den ersten Satz und die wichtigsten Wörter.", "Teil 1 ist eine Statue mit Flügeln, Teil 3 ein Tanz.", "Kein Teil handelt von einem Museum."] },
        { lead: "Choose the right heading for each part. One heading is extra." }),
      ...zwei({ art: "mc", id: "verstehen", tag: "Understanding", titel: "What does the text say?" },
        { lead: "Tick the correct answer. <span class=\"de\">Es gibt vier Möglichkeiten, eine ist richtig.</span>",
          fragen: [
            { q: "Where is the Angel of the North?", o: ["On a hill near Gateshead", "In the centre of London", "On a big ship", "In a museum"], a: 0, e: "In Part 1 steht: Near the town of Gateshead … there is a huge statue on a hill." },
            { q: "Where does the family find Paddington?", o: ["At a station in London", "In a forest in Peru", "In a toy shop", "On a hill in the north"], a: 0, e: "In Part 2 steht: a family finds him at Paddington station in London." },
            { q: "What do morris dancers often have on their legs?", o: ["Small bells", "Flowers", "Lights", "Sticks"], a: 0, e: "In Part 3 steht: they have small bells on their legs. Die Stöcke halten sie in der Hand." },
            { q: "When do families often go to a pantomime?", o: ["At Christmas time", "In the summer holidays", "On the first day of school", "Every Sunday"], a: 0, e: "In Part 4 steht: Families often go to see one at Christmas time." }
          ],
          hilfen: ["Jede Frage gehört zu einem anderen Teil: Frage 1 zu Part 1, Frage 2 zu Part 2 …", "Tippe auf „📖 Text“, wenn du den Text noch einmal brauchst."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "Why do lots of people see the Angel of the North?", o: ["It is huge and stands on a hill – you can see it from the car or the train.", "It stands in the middle of London.", "It is in a famous museum.", "It travels around England on a ship."], a: 0, e: "In Part 1 steht: If you travel by car or train near … Gateshead, you can't miss a huge statue on a hill." },
            { q: "How did Paddington get his name?", o: ["The family gave him the name of the station where they found him.", "It is a typical name in Peru.", "The writer's son had this name.", "He chose it himself in a shop."], a: 0, e: "In Part 2 steht: he gets the name of the station." },
            { q: "What do morris dancers do in some dances?", o: ["They hit wooden sticks together.", "They sing without music.", "They throw flowers into the audience.", "They dance on a stage in a big dress."], a: 0, e: "In Part 3 steht: In some dances they hit wooden sticks together." },
            { q: "What do the children in the audience do at a pantomime?", o: ["They boo the bad character and shout to help the hero.", "They sit very quietly and don't say a word.", "They dance with bells on their legs.", "They act without words."], a: 0, e: "In Part 4 steht: The children … boo the bad character, and … they shout \"He's behind you!\"" }
          ] })
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "beleg", id: "zeilen", nur: "R", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u1-more-art-r",
        fragen: [
          { q: "What is the angel made of?", zeilen: [4, 4], e: "The angel is made of steel.", tipp: "Look for the words made of in Part 1." },
          { q: "What does Paddington love?", zeilen: [10, 11], e: "Paddington loves marmalade sandwiches.", tipp: "Look at the end of Part 2." }
        ],
        hilfen: ["Such in Part 1 die Wörter made of.", "In Part 2 steht, was Paddington gern isst."] },
      { art: "beleg", id: "zeilen", nur: "M", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text.", lesetext: "u1-more-art-m",
        fragen: [
          { q: "What is the angel made of?", zeilen: [5, 5], e: "The angel is made of steel.", tipp: "Look for the words made of in Part 1." },
          { q: "What does Paddington always keep under his hat?", zeilen: [17, 18], e: "He always keeps a marmalade sandwich under his hat – just in case!", tipp: "Look at the end of Part 2." },
          { q: "When are most pantos?", zeilen: [29, 30], e: "Most pantos are in December and January.", tipp: "Look for the names of two months in Part 4." }
        ] },
      ...zwei({ art: "paare", id: "wortkasten", tag: "Word box", titel: "What do the words mean?" },
        { lead: "Match each word with its explanation. <span class=\"de\">Verbinde das Wort mit der englischen Erklärung.</span>",
          paare: [["statue", "a big figure made of stone or metal"], ["fairy tale", "an old story for children, for example Cinderella"], ["dame", "a funny woman in a pantomime – a man plays her"], ["handkerchief", "a small piece of cloth for your nose"], ["artist", "a person who makes pictures or statues"]],
          hilfen: ["Fang mit dem Wort an, das du schon kennst.", "Cinderella ist ein Märchen. Mit einem Taschentuch putzt man sich die Nase.", "Tippe auf „📖 Text“ und suche das Wort im Text."] },
        { lead: "Match each word with its explanation.",
          paare: [["statue", "a big figure made of stone or metal"], ["symbol", "a thing that stands for a place or an idea"], ["fairy tale", "an old story for children, for example Cinderella"], ["dame", "a funny woman in a pantomime – a man plays her"], ["handkerchief", "a small piece of cloth for your nose"], ["accordion", "a musical instrument that you pull and push"]] }),
      ...zwei({ art: "mc", id: "false-friend", tag: "False friend", titel: "Pantomime or pantomime?" },
        { lead: "Your German friend says: <i>„Bei einer Pantomime sagt man kein Wort.“</i> Is this true for an English pantomime? <span class=\"de\">Pantomime ist ein <button class=\"term\" data-t=\"falsefriend\">false friend</button>: Das Wort sieht gleich aus, bedeutet aber etwas anderes.</span>",
          fragen: [
            { q: "Is an English pantomime a show without words?", o: ["No – an English pantomime is loud, and the audience shouts a lot.", "Yes – nobody speaks in an English pantomime.", "Yes – only the music speaks.", "No – an English pantomime is a dance with bells."], a: 0, e: "Im Deutschen spielt man bei einer Pantomime ohne Worte. Eine englische pantomime ist laut: Das Publikum ruft „He's behind you!“." }
          ] },
        { lead: "Your German friend says: <i>„Bei einer Pantomime sagt man kein Wort.“</i> Is this true for an English pantomime? Pantomime is a <button class=\"term\" data-t=\"falsefriend\">false friend</button>.",
          fragen: [
            { q: "What is the difference?", o: ["In German, Pantomime is acting without words – an English pantomime is loud, with songs and jokes.", "There is no difference: both are shows without words.", "An English pantomime is always a film on TV.", "In German, Pantomime is a Christmas show for families."], a: 0, e: "Im Deutschen spielt man bei einer Pantomime ohne Worte. Eine englische pantomime ist laut, mit Liedern und Witzen." }
          ] })
    ] },
    { kurz: "Your turn", ober: "Writing", titel: "Your favourite part – and something from Germany", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a village festival in Bavaria</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-more-maibaum.jpg\" width=\"1280\" height=\"853\" alt=\"A village festival in Bavaria: a tall blue-and-white maypole, a brass band and people in traditional clothes at long wooden tables.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see? What would you tell an English friend about it? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Now it's your turn. First write about your favourite part of the text. Then tell an English friend about something interesting in <b>Germany</b> or <b>Bavaria</b>. <span class=\"de\">Erst schreibst du über deinen Lieblingsteil, dann über etwas Interessantes aus Deutschland oder Bayern. Die KI gibt dir einen Hinweis.</span></p>" },
      { art: "merke", nur: "R", kopf: "USEFUL SENTENCES", html: "<p>I would like to see … because it is … / it sounds …<br>In … there is a … · People … · You can …</p>" },
      ...zwei({ art: "offen", id: "lieblingsteil", tag: "Your opinion", titel: "My favourite part" },
        { lead: "Which part would you like to see? Write <b>one sentence</b> with <b>because</b>. <span class=\"de\">Was würdest du am liebsten sehen? Schreibe einen Satz mit because.</span>",
          fragen: [{ q: "Which part would you like to see? Why?", m: "I would like to see the Angel of the North because it is huge.", k: ["angel|paddington|bear|morris|dance|dancing|dancers|pantomime|panto|statue|dame", "because"], min: 2 }],
          hilfen: ["Beginne mit „I would like to see …“.", "Nach because kommt der Grund: „… because it is huge / funny / exciting.“"],
          tipp: "I would like to see … because it is … / it sounds …" },
        { lead: "Which of the four things would you like to see most? Write <b>two sentences</b> and give reasons.",
          fragen: [{ q: "Which of the four things would you like to see most? Why?", m: "I would like to see a pantomime because the children can shout and it sounds funny. I would also like to see the Angel of the North because its wings are so wide.", k: ["would like|'d like|want|like", "angel|paddington|bear|morris|dance|dancing|dancers|pantomime|panto|statue|dame", "because"], min: 3 }],
          tipp: "I would like to see … most because … · I would also like to … because …" }),
      ...zwei({ art: "offen", id: "deutschland", tag: "Something from Germany", titel: "Interesting things in Germany" },
        { lead: "Write <b>two sentences</b> about an interesting place, person or tradition in Germany or Bavaria. <span class=\"de\">Zum Beispiel ein Fest, eine Burg, ein Märchen oder eine berühmte Person.</span>",
          fragen: [{ q: "Write two sentences about something interesting in Germany or Bavaria.", m: "In Bavaria there is a big festival in autumn. People wear traditional clothes and listen to music.", k: ["germany|bavaria|munich|nuremberg|town|village|city|festival|castle|statue|museum|lake|mountain|there is|there are|in my|in our", "people|you can|children|families|visit|watch|see|go|wear|dance|eat|famous|old|big|popular|listen"], min: 2 }],
          hilfen: ["Beginne mit „In Bavaria there is …“ oder „In my town there is …“.", "Im zweiten Satz sagst du, was die Leute dort tun: People … / You can …"],
          tipp: "In Bavaria / In my town there is … · People … · You can …" },
        { lead: "Write <b>two or three sentences</b> about something interesting in Germany or Bavaria – a place, a person, a book or a tradition. Say <b>why</b> it is interesting.",
          fragen: [{ q: "Write about something interesting in Germany or Bavaria. Say why it is interesting.", m: "In Munich there is a big festival in autumn. People wear traditional clothes and listen to music. It is interesting because people from all over the world come to it.", k: ["germany|bavaria|munich|nuremberg|town|village|city|festival|castle|statue|museum|lake|mountain|there is|there are|in my|in our", "people|you can|children|families|visit|watch|see|go|wear|dance|eat|famous|old|big|popular|listen", "because|so|that's why"], min: 3 }],
          tipp: "In … there is … · People / You can … · It is interesting because …" }),
      { art: "offen", id: "oma", m7: true, tag: "Mediation", titel: "Explain it to your grandma",
        lead: "Your grandma doesn't speak English. She asks: <i>„Was ist denn eine Pantomime in England?“</i> Explain it to her in <b>German</b> – two or three sentences, only the important things. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig. Übersetze nicht Wort für Wort.</span>",
        fragen: [{ q: "Was ist eine Pantomime in England? (auf Deutsch)", m: "Das ist eine lustige Theatershow für die ganze Familie, meistens an Weihnachten. Es ist ein Märchen, ein Mann spielt eine Frau im Kleid, und die Kinder rufen laut mit.", k: ["theater|show|vorstellung|aufführung|stück", "weihnachten|winter|dezember|januar", "lustig|laut|rufen|schreien|mitmachen|märchen|mann|kleid|kinder|witze|lieder"], min: 2 }],
        tipp: "Sag kurz: Was ist es? Wann? Was ist lustig daran? Zum Beispiel: Das ist ein … für … Es gibt … Die Kinder …" }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "Simple past and simple present", teile: [
      { art: "merke", nur: "R", kopf: "LOOK AT THE LANGUAGE", html: "<ul><li><b>simple past</b> – it happened in the past: <i>The angel <u>was</u> finished in 1998. People <u>danced</u> morris dances more than 500 years ago.</i></li><li><b>simple present</b> – it is always like this: <i>I <u>live</u> in Bavaria. My friend <u>likes</u> English books.</i> Bei he, she, it – das s muss mit!</li></ul>" },
      { art: "merke", nur: "M", kopf: "LOOK AT THE LANGUAGE", html: "<ul><li><b>simple past</b> – finished in the past: <i>Antony Gormley <u>made</u> the angel. It <u>was</u> finished in 1998.</i> Negative: <i>didn't + base form</i>. Questions: <i>Did + person + base form …?</i></li><li><b>simple present</b> – facts and habits: <i>I <u>live</u> in Bavaria. My friend <u>likes</u> English books.</i> Negative: <i>doesn't / don't + base form – The angel doesn't move.</i></li></ul>" },
      ...zwei({ art: "luecke", id: "past-luecke", tag: "Simple past", titel: "A trip to England", foerder: SP },
        { lead: "A girl from Bavaria writes about her trip to England. Complete her sentences with the simple past. <span class=\"de\">Zwei Formen sind falsch und bleiben übrig.</span>",
          absaetze: [
            ["Last summer my family ", { g: "visited" }, " Gateshead."],
            ["From the train we ", { g: "saw" }, " the huge angel on the hill."],
            ["At Christmas my cousins ", { g: "went" }, " to a pantomime."],
            ["The children ", { g: "shouted" }, " \"He's behind you!\""],
            ["I ", { g: "didn't know" }, " that Paddington is from Peru."]
          ], extra: ["goed", "didn't knew"],
          hilfen: ["Lies jeden Satz und überlege, welches Verb passt.", "go, see und know sind unregelmäßig. Nach didn't steht die Grundform.", "Satz 1: visited · Satz 2: saw · Satz 3: went · Satz 4: shouted · Satz 5: didn't know"] },
        { lead: "A girl from Bavaria writes about her trip to England. Complete her sentences with the simple past. Two forms are wrong and are left over.",
          absaetze: [
            ["Last summer my family ", { g: "visited" }, " Gateshead."],
            ["We ", { g: "didn't go" }, " up the hill, but we ", { g: "saw" }, " the angel from the train."],
            ["", { g: "Did" }, " you ", { g: "watch" }, " the morris dancers in the village? – Yes, I did."],
            ["At the pantomime the children ", { g: "booed" }, " the bad character loudly."],
            ["Michael Bond ", { g: "wrote" }, " the first Paddington book in the 1950s."]
          ], extra: ["didn't went", "writed"],
          hilfen: ["After did and didn't you use the base form."] }),
      ...zwei({ art: "mc", id: "present-mc", tag: "Simple present", titel: "he, she, it – the s must go with it", foerder: HSI },
        { lead: "Tick the right form. <span class=\"de\">Bei he, she, it (eine Person, ein Tier, ein Ding) hängt im simple present ein -s am Verb.</span>",
          fragen: [
            { q: "Paddington ____ marmalade sandwiches.", o: ["loves", "love"], a: 0, e: "Paddington = he. Bei he, she, it – das s muss mit: loves." },
            { q: "Morris dancers ____ in groups.", o: ["dance", "dances"], a: 0, e: "Morris dancers = they. Bei they steht kein -s: dance." }
          ],
          hilfen: ["Ist es eine Person oder sind es mehrere?", "Eine Person (he, she, it) → -s. Mehrere (they) → kein -s."] },
        { lead: "Tick the right form.",
          fragen: [
            { q: "The dame ____ a big, colourful dress.", o: ["wears", "wear", "is wear", "wearing"], a: 0, e: "The dame = she: he, she, it – das s muss mit: wears." },
            { q: "Which sentence is correct?", o: ["Paddington doesn't come from London.", "Paddington don't come from London.", "Paddington doesn't comes from London.", "Paddington not comes from London."], a: 0, e: "Verneinung bei he, she, it: doesn't + Grundform (come, ohne -s)." }
          ] }),
      { art: "offen", id: "verneinung-frage", m7: true, tag: "Your words", titel: "A negative sentence and a question",
        lead: "Write <b>one negative sentence</b> and <b>one question</b> about the four things in the simple present. Use <i>doesn't/don't</i> and <i>Does …?/Do …?</i> <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        foerder: DODOES,
        fragen: [{ q: "Write a negative sentence and a question in the simple present.", m: "The Angel of the North doesn't stand in London. Do morris dancers wear bells on their legs?", k: ["doesn't|does not|don't|do not", "does the|does he|does she|does it|does a |does paddington|does pantomime|does morris|do morris|do the|do they|do you|do children|do families|do people|do dancers|do english|do many|do kids"], min: 2 }],
        tipp: "Negative: The angel doesn't … / Morris dancers don't … · Question: Does Paddington …? / Do children …? After doesn't, don't, does and do comes the base form." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      ...zwei({ art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know" },
        { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
          aussagen: [["Paddington wears a blue coat and a red hat.", true], ["Paddington comes from Peru.", true], ["Morris dancing is a new dance.", false], ["The dame in a pantomime is played by a woman.", false], ["There was a coal mine on the angel's hill.", true]] },
        { lead: "Decide: true or false?",
          aussagen: [["The angel's wings are almost as wide as the wings of a jumbo jet.", true], ["Paddington has got a new suitcase.", false], ["In the past, most morris dancers were men.", true], ["A panto is usually based on a fairy tale.", true], ["The dame in a pantomime is played by a woman.", false]] })
    ] }
  ],
  weiter: { text: "Well done! You can read a text in parts, find details and tell others about English culture – and about something from Germany." }
});
