/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Story: Fries or chips? (Kürzel D13)
   (statt des Buchfilms: eine Hörgeschichte in zwei Teilen – erst eine Szene beschreiben und vermuten, dann hören und die
   Vermutungen prüfen, vorhersagen, richtig oder falsch, den Wendepunkt erkennen, die Ereignisse ordnen, britische und
   amerikanische Wörter zuordnen und anwenden, Gefühle benennen und die eigene Meinung schreiben; zum Schluss much/many und
   more/most in Sätzen der Geschichte)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „Film“, nur Aufbau, nichts übernommen): Bild ansehen und Vorwissen sammeln → ansehen
   und Aussagen mit zwei Möglichkeiten auswählen, richtig/falsch → Gedanken und Gefühle den Figuren zuordnen → über den Film
   sprechen (gefallen? Lieblingsszene + because); Thema des Films: ein Missverständnis zwischen britischem und amerikanischem
   Englisch. Andere Situation als im Buch (kein Football-Training, keine Gästeführerin): eine britische Austauschschülerin in
   einer amerikanischen Schulkantine. Besser: eigene Geschichte zum Hören in zwei Teilen (Aufnahme mit drei Stimmen), eine
   Vorhersage zwischen den Teilen, sofortige Rückmeldung, Hilfen in Stufen, der Wendepunkt in zwei Schritten (welcher Moment,
   warum), eine eigene Station zu den Wörtern BE/AE mit Anwendung in neuen Sätzen, Förder-Link beim Hören und bei den Wörtern.
   Differenzierung: Hörtext R7 322 Wörter (zwei Teile mit 153 und 169 Wörtern), M7 457 Wörter (239 und 218 Wörter) mit
   Nebensätzen (that, why, when) und mehr Begründungen; R7 mit deutschen Hilfen und Hilfen in Stufen, deutschen Antworten bei
   „What does she mean?“ und einem Satz Meinung; M7 mit Fragen ohne deutsche Hilfe, Zitaten bei den Gefühlen und drei Sätzen
   Meinung. Plus (m7): Wendepunkt in eigenen Worten erklären und zwei Sätze für das Klassenplakat schreiben.
   LehrplanPLUS E7 1.2 Hörverstehen (Geschichte, Handlungsverlauf, Einzelheiten), E7 1.3 Sprechen (Vermutungen, Gefühle, Meinung
   mit Begründung), E7 2 (Wortschatz britisches und amerikanisches Englisch), E7 5 Interkulturelles Lernen, E7 3 (G10 more/most,
   G11 much/many, too much, so many im Kontext).
   Texte: texte/u4/u4-story-1-r.js, u4-story-1-m.js, u4-story-2-r.js, u4-story-2-m.js. Alle Personen sind erfunden: Poppy (13,
   Austauschschülerin aus Norwich in England), ihr Mitschüler Mason, Mrs Hayes in der Kantine; eine Schule in den USA ohne Namen.
   Förder-Links: Hören und Wörter BE/AE → unit4/extra/british-american.html, much/many → unit4/extra/much-many.html.
   Wörter der Unit bis zum Film (huge, America, US, to join, never, to surprise, pal nicht, so many, too much, more … than,
   the most …) kommen bewusst vor. Neue Wörter, erklärt im Glossar: cafeteria, queue/line, crisps, trousers/pants, underwear,
   embarrassed/embarrassing, misunderstanding, Deal.
   BILDER:
   1. Station „Look and guess“ (Sprechanlass/Vorentlastung): eine große Schulkantine in den USA; ein Mädchen (13) mit Tablett
      und Burger, roter Ketchupfleck auf der hellen Hose, rotes Gesicht; daneben ein Junge, der lacht; andere Kinder schauen her –
      ohne Schrift und ohne Logos.
   2. Station „Part two“ (Hörhilfe): ein Mädchen sitzt draußen allein auf einer Bank vor der Schule, ein Junge setzt sich gerade
      neben sie und entschuldigt sich mit erhobenen Händen.
   3. Station „British or American?“ (Sprechanlass): zwei Kinder hängen im Klassenzimmer ein selbst gemaltes Plakat mit zwei
      Spalten auf – links eine kleine britische Flagge, rechts eine kleine US-Flagge, dazwischen gezeichnet eine Tüte Kartoffelchips,
      Pommes frites, eine Hose und eine Warteschlange (ohne lesbare Wörter). */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
const FOERDER_BEAE = { href: "unit4/extra/british-american.html", text: "Extra: British und American English" };
D7Kit.seite({
  id: "u4-story",
  titel: "Story: Fries or chips?",
  einleitung: "Poppy is from England. Now she is at a school in the USA – and on her first day in the <b>cafeteria</b> nothing goes right. In this <b>story</b> you guess first, then you listen in two parts, find the <b>turning point</b> and learn some British and American words. Du hörst eine Geschichte statt eines Films: vermuten, hören, prüfen, den Wendepunkt erkennen und deine Meinung sagen.",
  zeit: "etwa 40 Minuten",
  ziele: ["🔍 I guess what a story is about from a scene.", "🎧 I follow a story and say what is true and what is false.", "🔄 I find the turning point of a story.", "🇬🇧 I know some words that are different in British and American English.", "💬 I talk about feelings and give my opinion."],
  thema: "Unit 4 USA – here we come!, Story: Hörgeschichte über ein Missverständnis zwischen britischem und amerikanischem Englisch (vermuten, Wendepunkt, Wörter, Meinung)",
  quiz: { profi: "Story pro" },
  glossar: {
    cafeteria: ["cafeteria", "Kantine, Mensa: Dort essen die Schülerinnen und Schüler mittags."],
    queue: ["queue", "Warteschlange (britisch): Menschen stehen hintereinander und warten. Amerikaner sagen line."],
    crisps: ["crisps", "Kartoffelchips (britisch): dünne, trockene Scheiben aus der Tüte. Amerikaner sagen chips."],
    trousers: ["trousers", "Hose (britisch): Kleidungsstück für die Beine. Amerikaner sagen pants."],
    underwear: ["underwear", "Unterwäsche: Das trägt man unter der Kleidung. In England sagt man dazu auch pants."],
    embarrassed: ["embarrassed", "verlegen, peinlich berührt: So fühlt man sich, wenn einem etwas vor anderen sehr unangenehm ist. Etwas ist embarrassing, wenn es peinlich ist."],
    misunderstanding: ["misunderstanding", "Missverständnis: Zwei Menschen meinen mit demselben Wort etwas anderes."],
    deal: ["Deal!", "Abgemacht: Damit sagt man, dass man mit einem Vorschlag einverstanden ist."],
    turning: ["turning point", "Wendepunkt: Das ist der Moment, in dem sich in einer Geschichte alles ändert."]
  },
  stationen: [
    { kurz: "Look and guess", ober: "Before you listen", titel: "What is the story about?", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-story-kantine.jpg\" width=\"1280\" height=\"853\" alt=\"A girl in a busy school cafeteria holds a tray with a burger and fries; there is a red ketchup stain on her light trousers and her face is red. A boy next to her laughs; other students look at her.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a school cafeteria in the USA, at lunch time</b>. <span class=\"de\">Sieh dir das Bild an und lies die drei Karten. Sie beschreiben eine Szene aus der Geschichte.</span></p><p>Who are the people? What has happened? How do they feel? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { nur: "R", art: "text", html: "<p class=\"lead\">The story is about <b>Poppy</b> (13). She is from England, but now she is at a school in the USA. <b>Mason</b> is in her class. <span class=\"de\">Poppy kommt aus England und geht jetzt in den USA zur Schule. Mason ist in ihrer Klasse. Lies die Szene und vermute: Was ist hier los?</span></p>" },
      { nur: "M", art: "text", html: "<p class=\"lead\">The story is about <b>Poppy</b> (13) from Norwich in England. She is going to spend three months at a school in the USA. <b>Mason</b> is in her class and shows her around on her first day. Read the scene and guess what is going on.</p>" },
      { art: "karten", karten: [
        { ic: "🍔", titel: "The scene: the cafeteria", text: "It is lunch time. The <button class=\"term\" data-t=\"cafeteria\">cafeteria</button> is full. Lots of students are waiting for their food." },
        { ic: "👧", titel: "The scene: the girl", text: "A girl holds a burger. There is red ketchup on her <button class=\"term\" data-t=\"trousers\">trousers</button>. Her face is red, too." },
        { ic: "😂", titel: "The scene: the boy", text: "A boy is next to her. He is laughing. Other students are looking at the girl." }
      ] },
      ...zwei({ art: "mc", id: "vermuten", tag: "Guess", titel: "Guess first" },
        { lead: "Use the description and tick the best answer. <span class=\"de\">Nutze die Karten und kreuze die beste Antwort an.</span>",
          fragen: [
            { q: "Where are the people?", o: ["In a school cafeteria", "In a classroom", "At a football match", "In a park"], a: 0, e: "Die erste Karte sagt: Es ist Mittagszeit in der Kantine (cafeteria)." },
            { q: "What has happened to the girl?", o: ["She has got ketchup on her trousers.", "She has lost her bag.", "She has got a new phone.", "She has hurt her leg."], a: 0, e: "Die zweite Karte sagt: Auf ihrer Hose ist roter Ketchup." },
            { q: "Why is the girl's face red?", o: ["Everybody is looking at her, and she feels bad.", "She has run very fast.", "It is very hot in the sun.", "She has eaten a very hot pizza."], a: 0, e: "Alle schauen sie an, und der Junge lacht – das ist ihr peinlich. Im Englischen sagt man: She is embarrassed." }
          ],
          hilfen: ["Lies die drei Karten noch einmal genau. Die Antworten stehen fast wörtlich dort.", "Bei Frage 3: Was machen die anderen Kinder? Wie fühlt man sich dann?"] },
        { lead: "Use the description and tick the best answer.",
          fragen: [
            { q: "Where does the scene take place?", o: ["In the cafeteria of an American school", "In a restaurant in England", "In a classroom", "At a summer camp"], a: 0, e: "Poppy ist an einer Schule in den USA, und die Karte beschreibt die Kantine zur Mittagszeit." },
            { q: "What might the problem be?", o: ["Something embarrassing has happened to the girl.", "The boy has lost his money.", "There is no food in the cafeteria.", "The girl is late for a lesson."], a: 0, e: "Ketchup auf der Hose, alle schauen her, der Junge lacht: Der Moment ist dem Mädchen peinlich (embarrassing)." },
            { q: "Why might the boy be laughing?", o: ["He thinks that the situation is funny.", "He has won a prize.", "He is watching a video on his phone.", "He has heard a joke on the radio."], a: 0, e: "Er steht direkt neben dem Mädchen und lacht, während alle sie ansehen – er findet die Situation wohl lustig." }
          ],
          hilfen: ["Look at the cards again: What can you see on the trousers? Who is looking at the girl?"] }),
      { art: "merke", kopf: "WORDS FOR STORIES", html: "<p>A story has <b>characters</b> (the people), a <b>setting</b> (where and when) and a <b>problem</b>. Here the problem is a <button class=\"term\" data-t=\"misunderstanding\">misunderstanding</button>: British and American English are not always the same. A good story also has a <button class=\"term\" data-t=\"turning\">turning point</button>: the moment when everything changes.</p><p><b>Feelings:</b> nervous · <button class=\"term\" data-t=\"embarrassed\">embarrassed</button> · angry · sorry · happy</p>" }
    ] },
    { kurz: "Part one", ober: "Listening", titel: "Lunch time", teile: [
      { art: "text", html: "<p class=\"lead\">Listen to <b>part one</b>. Read the questions first. <span class=\"de\">Lies erst die Fragen, dann hör zu. Beim Hören musst du nicht jedes Wort verstehen.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Part one", hoertext: { R: "u4-story-1-r", M: "u4-story-1-m" }, foerder: FOERDER_BEAE,
        fragen: [
          ...zwei({ art: "mc", id: "hoer1-q", titel: "Part one: what happens?" },
            { lead: "Listen and tick the answers. <span class=\"de\">Hör zu und kreuze an.</span>",
              fragen: [
                { q: "What does Mrs Hayes give Poppy first?", o: ["A burger and a bag of crisps", "A burger and fries", "A pizza and fries", "Only a burger"], a: 0, e: "Mrs Hayes sagt „a bag of chips“ – das sind für Poppy crisps, also Kartoffelchips aus der Tüte. Sie wollte aber Pommes." },
                { q: "What does Mason call Poppy's hot, long chips?", o: ["Fries", "Crisps", "Burgers", "Pizza"], a: 0, e: "Mason lacht und sagt: „You mean fries!“ – Pommes heißen in den USA fries." },
                { q: "Why is Poppy angry at the end of part one?", o: ["Mason talks about her pants, and everybody is looking at her.", "Mrs Hayes has no more burgers.", "Mason eats her fries.", "The queue is too long."], a: 0, e: "Poppy hat Ketchup auf der Hose, Mason sagt „pants“, und alle schauen her. Warum sie so böse wird, erfährst du in Teil zwei." }
              ],
              hilfen: ["Beim zweiten Hören achtest du auf das, was Mrs Hayes über die Tüte (bag) sagt.", "Am Ende spricht Poppy über ihre Hose – und Mason antwortet mit einem anderen Wort."] },
            { lead: "Listen and tick the answers.",
              fragen: [
                { q: "Why is Poppy nervous?", o: ["It's her first day at an American school.", "She has lost her school bag.", "She doesn't like burgers.", "Mason isn't friendly to her."], a: 0, e: "Poppy sagt: „It's my first day at an American school.“" },
                { q: "Why does Mason say \"It's crazy\"?", o: ["The same word means different food in England and in America.", "There are too many people in the cafeteria.", "Poppy takes too much ketchup.", "The fries are very expensive."], a: 0, e: "Chips sind in England Pommes, in den USA Kartoffelchips – das findet Mason verrückt." },
                { q: "What happens at the end of part one?", o: ["Poppy gets ketchup on her new trousers, and Mason's words make her angry.", "Poppy drops her burger on the floor.", "Mrs Hayes is angry with Mason.", "Mason gets ketchup on his pants."], a: 0, e: "Es ist zu viel Ketchup, er landet auf Poppys neuer Hose – und als Mason „pants“ sagt, wird sie wütend." }
              ],
              hilfen: ["Listen to the end again: What happens with the ketchup? What does Mason say?"] })
        ] },
      { art: "offen", id: "vorhersage", tag: "Predict", titel: "Why is Poppy so angry?",
        lead: "Mason only says <b>pants</b> – and Poppy is very angry. Why? What do <b>you</b> think? Write <b>one sentence</b>. <span class=\"de\">Was meinst du: Warum regt sich Poppy über das Wort pants so auf? Rate ruhig – gleich hörst du, wie es weitergeht.</span>",
        fragen: [{ q: "I think Poppy is angry because …", m: "I think the word pants means something different in England, maybe underwear.", k: ["think|guess|maybe|perhaps|probably|because", "mean|different|other|underwear|rude|british|england|embarrass|funny|look"], min: 1 }],
        hilfen: ["Beginne mit „I think …“ oder „Maybe …“.", "Denk an die Geschichte: Vielleicht bedeutet pants in England etwas anderes als in Amerika."],
        tipp: "Start like this: I think … / Maybe in England the word pants means …" }
    ] },
    { kurz: "Part two", ober: "Listening", titel: "The turning point", teile: [
      { art: "text", html: "<p class=\"lead\">Now listen to <b>part two</b>. Is your idea right? <span class=\"de\">Jetzt kommt Teil zwei. Hattest du recht? Danach entscheidest du: richtig oder falsch?</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Part two", hoertext: { R: "u4-story-2-r", M: "u4-story-2-m" },
        fragen: [
          ...zwei({ art: "tf", id: "richtigfalsch", titel: "True or false?" },
            { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
              aussagen: [["Mason says sorry to Poppy.", true], ["Poppy explains what pants are in England.", true], ["Poppy is still angry at the end.", false], ["Mason and Poppy want to make a poster for their class.", true]],
              hilfen: ["Hör noch einmal auf das Ende: Lachen die beiden?", "Eine Aussage ist falsch, weil Poppy die Sache am Ende lustig findet."] },
            { lead: "Decide: true or false?",
              aussagen: [["Mason looked for Poppy everywhere.", true], ["Poppy feels bad because everybody laughed at her.", true], ["Mason thinks that Poppy's British words are wrong.", false], ["Poppy wants to ask Mrs Hayes for crisps tomorrow.", false]],
              hilfen: ["Who is going to ask for crisps tomorrow? Listen to the end again."] })
        ] },
      { art: "merke", kopf: "STORY SKILLS · THE TURNING POINT", html: "<p>Every good story has a <button class=\"term\" data-t=\"turning\">turning point</button>. Before it, the characters believe one thing. After it, they know the truth, and the story goes in a new direction.</p>" },
      ...zwei({ art: "mc", id: "wendepunkt", tag: "Turning point", titel: "Find the turning point" },
        { lead: "Tick the answers. <span class=\"de\">Welcher Moment ändert alles – und warum?</span>",
          fragen: [
            { q: "What is the turning point of the story?", o: ["Mason finds out what pants means in England.", "Poppy gets ketchup on her trousers.", "Mrs Hayes gives Poppy her fries.", "Poppy and Mason get in line."], a: 0, e: "Als Mason versteht, was pants in England bedeutet, begreift er, warum Poppy so böse war – ab da ändert sich alles." },
            { q: "Why is it the turning point?", o: ["Before it Poppy is upset and alone, after it the two laugh and make a plan.", "Before it they eat burgers, after it they eat pizza.", "Before it Poppy is in England, after it she is in America.", "Before it Mason is at home, after it he is at school."], a: 0, e: "Vorher ist Poppy gekränkt und allein, danach lachen beide und planen ein Plakat." }
          ],
          hilfen: ["Wann versteht Mason plötzlich, was los war?", "Vorher: Poppy ist böse. Nachher: Beide lachen. Was ist der Moment dazwischen?"] },
        { lead: "Tick the answers.",
          fragen: [
            { q: "What is the turning point of the story?", o: ["Mason understands why Poppy was so angry about the word pants.", "Poppy asks for chips and gets crisps.", "Mason takes Poppy to the cafeteria.", "Poppy decides to go back to England."], a: 0, e: "Der Wendepunkt ist der Moment, in dem Mason das Missverständnis versteht." },
            { q: "Which sentence shows the turning point?", o: ["“Underwear? Oh no!”", "“Wait, Poppy! What did I say?”", "“The queue? I've never heard that word.”", "“Hi there, you must be new.”"], a: 0, e: "Mit „Underwear? Oh no!“ begreift Mason das Missverständnis. Die anderen Sätze stehen vor dem Wendepunkt." }
          ],
          hilfen: ["Compare how Poppy feels at the beginning of part two and at the end."] }),
      { art: "offen", id: "wende-erklaeren", m7: true, tag: "Your words", titel: "Explain the turning point",
        lead: "Write <b>two sentences</b>: How does Poppy feel <b>before</b> and <b>after</b> the turning point? Say why. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Before the turning point Poppy feels …, after it she feels … Why?", m: "Before the turning point Poppy is angry and embarrassed because she thinks that Mason is talking about her underwear. After it she is happy because Mason understands the problem and says sorry.", k: ["angry|upset|embarrassed|sad|cross", "happy|better|ok|fine|glad|laugh|funny", "because|underwear|pants|sorry|understand"], min: 2 }],
        hilfen: ["Vorher: „angry“ oder „embarrassed“. Nachher: „happy“ oder „it's funny“.", "Mit „because“ gibst du den Grund an."],
        tipp: "Use: Before the turning point, Poppy is … because … After it, she is … because …" },
      ...zwei({ art: "ordnen", id: "reihenfolge", tag: "Order the events", titel: "Put the story in order" },
        { lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
          schritte: ["Mason takes Poppy to the cafeteria.", "Poppy asks for chips and gets a bag of crisps.", "Poppy gets ketchup on her trousers, and Mason talks about her pants.", "Poppy explains what pants are in England.", "Poppy and Mason plan a poster with British and American words."],
          hilfen: ["Die ersten drei Ereignisse sind in Teil eins, die letzten zwei in Teil zwei.", "Erst das Essen, dann der Ketchup, dann die Erklärung."] },
        { lead: "Put the events in the right order.",
          schritte: ["Mason takes Poppy to the cafeteria.", "Poppy asks for chips and gets a bag of crisps.", "Poppy gets ketchup on her trousers, and Mason talks about her pants.", "Poppy explains what pants are in England.", "Poppy and Mason plan a poster with British and American words."],
          hilfen: ["Think about what happens before and after the turning point."] })
    ] },
    { kurz: "British or American?", ober: "Words", titel: "Two kinds of English", teile: [
      { art: "text", html: "<p class=\"lead\">Poppy speaks <b>British English</b>, Mason speaks <b>American English</b>. Most words are the same – but not all! <span class=\"de\">Die meisten Wörter sind gleich, aber nicht alle. Jetzt ordnest du die Wörter aus der Geschichte zu – und noch ein paar, die du schon kennst.</span></p>" },
      ...zwei({ art: "paare", id: "wortpaare", tag: "Match", titel: "British word – American word", foerder: FOERDER_BEAE },
        { lead: "Find the pairs: BE = British English, AE = American English. <span class=\"de\">Welches amerikanische Wort passt zum britischen Wort?</span>",
          paare: [["BE: queue", "AE: line"], ["BE: crisps", "AE: chips"], ["BE: chips", "AE: fries"], ["BE: trousers", "AE: pants"], ["BE: holiday", "AE: vacation"]],
          hilfen: ["Denk an die Geschichte: Was sagt Mason zu Poppys Wörtern?", "Achtung: chips gibt es zweimal! In England sind chips heiße Pommes, in Amerika Kartoffelchips aus der Tüte.", "holiday (Urlaub) kennst du aus der Unit: Amerikaner sagen vacation."] },
        { lead: "Find the pairs: BE = British English, AE = American English.",
          paare: [["BE: queue", "AE: line"], ["BE: crisps", "AE: chips"], ["BE: chips", "AE: fries"], ["BE: trousers", "AE: pants"], ["BE: holiday", "AE: vacation"], ["BE: film", "AE: movie"]],
          hilfen: ["Careful: chips is on both sides – it means different food in Britain and in America."] }),
      ...zwei({ art: "mc", id: "gemeint", tag: "What do they mean?", titel: "What do they mean?" },
        { lead: "Tick the correct answer. <span class=\"de\">Was ist gemeint?</span>",
          fragen: [
            { q: "Mason says: \"Let's buy a bag of chips for the bus trip.\" What does he want?", o: ["Kartoffelchips aus der Tüte", "Heiße Pommes frites", "Schokolade", "Brötchen"], a: 0, e: "Mason ist Amerikaner: Für ihn sind chips Kartoffelchips aus der Tüte (britisch: crisps)." },
            { q: "Poppy tells her mum in England: \"I got ketchup on my trousers.\" What does an American say?", o: ["I got ketchup on my pants.", "I got ketchup on my underwear.", "I got ketchup on my fries.", "I got ketchup on my line."], a: 0, e: "Was Briten trousers nennen, heißt in Amerika pants. Für Poppy sind pants aber Unterwäsche." }
          ],
          hilfen: ["Wer spricht? Mason ist Amerikaner, Poppy ist Britin.", "Amerikanisch: chips = Kartoffelchips, pants = Hose."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "Mason says: \"Let's buy a bag of chips for the bus trip.\" In British English, he wants …", o: ["a bag of crisps.", "some hot chips.", "a bag of fries.", "a queue of chips."], a: 0, e: "Mason ist Amerikaner: Seine chips sind für Briten crisps." },
            { q: "Poppy tells her mum in England: \"I got ketchup on my trousers.\" What does an American say?", o: ["I got ketchup on my pants.", "I got ketchup on my underwear.", "I got ketchup on my fries.", "I got ketchup on my line."], a: 0, e: "Was Briten trousers nennen, heißt in Amerika pants. Für Poppy sind pants aber Unterwäsche." }
          ],
          hilfen: ["Who is speaking – an American or a British person?"] }),
      { art: "offen", id: "plakat", m7: true, tag: "Your words", titel: "Two sentences for the poster",
        lead: "Help Poppy and Mason with their poster. Write <b>two sentences</b>: one about food and one about clothes. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig. Nutze: In Britain you say …, but in America you say …</span>",
        fragen: [{ q: "Write two sentences for the poster: one about food, one about clothes.", m: "In Britain you say crisps, but in America you say chips. In Britain you say trousers, but in America you say pants.", k: ["crisps|chips|fries", "trousers|pants", "britain|england|british|america|american|usa"], min: 3 }],
        tipp: "In Britain you say …, but in America you say … · British people say …, Americans say …" }
    ] },
    { kurz: "Feelings and opinion", ober: "Speaking and writing", titel: "What do you think?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>Poppy and Mason after lunch</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-story-bank.jpg\" width=\"1280\" height=\"853\" alt=\"A girl and a boy sit together on a bench in front of a school and laugh; the boy holds up his hands as if he says sorry.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>How do Poppy and Mason feel now? Can they be friends? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">How do the characters feel? And what do <b>you</b> think about the story? <span class=\"de\">Wie fühlen sich die Figuren? Und was denkst du über die Geschichte?</span></p>" },
      ...zwei({ art: "paare", id: "gefuehle", tag: "Feelings", titel: "Who feels what?" },
        { lead: "Find the pairs. <span class=\"de\">Wer fühlt was?</span>",
          paare: [["Poppy, when everybody looks at her", "embarrassed"], ["Mason, when he understands the problem", "sorry"], ["Poppy and Mason at the end", "happy"]],
          hilfen: ["Alle schauen Poppy an – das ist ihr peinlich.", "Mason sagt: „I'm really sorry.“", "Am Ende lachen beide und haben eine Idee."] },
        { lead: "Find the pairs.",
          paare: [["Poppy: “I'm a bit nervous.”", "She is worried about her first day."], ["Poppy: “Now the whole cafeteria is looking at me.”", "She is embarrassed."], ["Mason: “No wonder you were angry.”", "He is sorry."], ["Poppy: “When I think about it now, it's quite funny.”", "She is happy again."]],
          hilfen: ["Which feeling fits the words? Think of the situation."] }),
      { art: "offen", id: "meinung", nur: "R", tag: "Your words", titel: "What do you think?", lead: "Write <b>one sentence</b> with <b>because</b>. <span class=\"de\">Schreibe einen Satz mit because: Findest du Mason nett – oder nicht?</span>",
        fragen: [{ q: "Do you think Mason is nice? Use because.", m: "I think Mason is nice because he says sorry and has a good idea.", k: ["think|is|isn't|nice|kind|friendly|funny|not", "because"], min: 2 }],
        hilfen: ["Beginne mit „I think Mason is …“.", "Nach „because“ kommt der Grund: „… because he says sorry.“"],
        tipp: "I think Mason is nice / not nice because …" },
      { art: "offen", id: "meinung", nur: "M", tag: "Your words", titel: "What do you think?", lead: "Write <b>three sentences</b>: your opinion of Mason with <b>because</b>, how <b>you</b> would feel in Poppy's place, and what you <b>should</b> do when you don't understand a word.",
        fragen: [{ q: "What do you think about Mason? How would you feel in Poppy's place? What should you do when you don't understand a word?", m: "I think Mason is nice because he says sorry and has a good idea. I would feel embarrassed in Poppy's place. You should ask what the word means.", k: ["because", "feel|would be|embarrass|angry|sad|upset|nervous|happy|funny", "should|ask|can|could"], min: 3 }],
        hilfen: ["Use the frames: I think Mason is … because … / I would feel … / You should …"],
        tipp: "Three sentences: 1) I think Mason is … because … 2) In Poppy's place I would feel … 3) You should …" }
    ] },
    { kurz: "Language", ober: "Kurz sichern", titel: "Much, many, more and most", teile: [
      { art: "merke", nur: "R", kopf: "LOOK AT THE LANGUAGE", html: "<p>In the story you hear <b>much</b>, <b>many</b>, <b>more</b> and <b>most</b>:</p><ul><li><b>many</b> + things you can count: <i>many students · many burgers</i></li><li><b>much</b> + things you can't count: <i>much water · much time</i></li><li><b>more … than</b> and <b>the most …</b> with long adjectives: <i>more exciting than · the most famous</i></li></ul><p><span class=\"de\">many = viele, much = viel. Bei langen Adjektiven: more = mehr, the most = am meisten.</span></p>" },
      { art: "merke", nur: "M", kopf: "LOOK AT THE LANGUAGE", html: "<p>The story uses <b>much</b>, <b>many</b>, <b>more</b> and <b>most</b>:</p><ul><li><b>many</b> with plural nouns you can count: <i>many students · How many burgers?</i></li><li><b>much</b> with nouns you can't count: <i>much water · How much time?</i> – also <b>too much</b> / <b>so many</b>.</li><li>Long adjectives: <b>more … than</b> and <b>the most …</b>: <i>more exciting than · the most famous</i>.</li></ul>" },
      ...zwei({ art: "luecke", id: "sprache", tag: "Gap text", titel: "Sentences from the story", foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" }, extra: ["less", "a lot"] },
        { lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["There are so ", { g: "many" }, " people in the cafeteria."],
            ["Mason says: \"There isn't ", { g: "much" }, " ketchup on your pants.\""],
            ["For Mason, the word game is ", { g: "more difficult" }, " than he thought."],
            ["But it's the ", { g: "most interesting" }, " lesson of the day."]
          ],
          hilfen: ["people kann man zählen, ketchup nicht.", "than zeigt einen Vergleich (more), the zeigt den Superlativ (most).", "Satz 1: many · Satz 2: much · Satz 3: more difficult · Satz 4: most interesting"] },
        { lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["There are so ", { g: "many" }, " people in the cafeteria."],
            ["Careful! That's too ", { g: "much" }, " ketchup!"],
            ["For Poppy, English in America is ", { g: "more difficult" }, " than she thought."],
            ["It's the ", { g: "most embarrassing" }, " day of her life."]
          ],
          hilfen: ["Can you count it? Then many. Is there than or the in the sentence?"] })
    ] }
  ],
  weiter: { text: "Well done! You can guess what a story is about, follow it, find the turning point and talk about feelings – and you know some words that are different in British and American English." }
});
