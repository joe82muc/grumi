/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Duelle: Unit 2 (Kürzel B23)
   Aufwärmen: richtig/falsch (gemeinsam), Ankreuzfragen (R7 leichter, M7 schwerer) und Zuordnen Grundform – 3. Form;
   Duell gegen die KI (6 Runden je Zug, die „KI“ irrt in zwei Runden mit einleuchtender Begründung, eine Runde mit
   Begründungssatz); Tischduell zu zweit an einem Gerät (12 kurze Fragen je Zug).
   Inhalt: Wörter der Unit 2 und Grammatik G5 going to-future, G6/G7 present perfect (Aussage, Verneinung, Frage,
   Kurzantwort), present perfect oder simple past (Signalwörter), have been / have gone.
   Buchprinzip (nur Aufbau, nichts übernommen): kurze Wiederholungsrunden am Ende der Unit. Besser: Gegner „KI“ klingt
   sicher und irrt manchmal – das Kind prüft mit der Regel; Rückmeldung zu jeder Antwort; Tischduell ohne Aufwand.
   Differenzierung: R7 mit deutschen Hilfen und einfacheren Runden (Formen, einfache Signalwörter), M7 englisch mit
   Fragen, Verneinung, been/gone und Zeitangaben. Duelle sind Zusatz und zählen nicht zum Lernfortschritt.
   LehrplanPLUS E7 2 (Wortschatz, Grammatik: going to, present perfect, simple past), E7 5 (Wales und Schottland).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen. Keine Hörtexte, keine Namen.
   Die „KI“ irrt je Zug in zwei Runden mit Absicht – R7: Runde 3 (yesterday mit present perfect), Runde 5 (has went);
   M7: Runde 2 (last summer mit present perfect), Runde 5 (has gone statt has been). Die Erklärung stellt es richtig.
   BILDER:
   1. Station „Warm-up“ (Sprechanlass): zwei Kinder spielen an einem Tablet ein Quiz-Duell im Klassenzimmer, ein drittes
      feuert an; auf dem Tisch liegen ein Stoffschaf und ein Schottenschal. */
D7Kit.seite({
  id: "u2-duell",
  titel: "Duels: Unit 2",
  einleitung: "Words and grammar from Unit 2 – mixed. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I use going to and the present perfect in quick questions.", "⚔️ I notice when an answer sounds good but is wrong.", "👥 I play fair with a partner on one device."],
  thema: "Unit 2 Duelle",
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a quiz duel in class</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-duell.jpg\" width=\"1280\" height=\"853\" alt=\"Two classmates play a quiz duel on one tablet; a third cheers. A toy sheep and a tartan scarf lie on the table.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who do you think is faster? Get ready – now it is your turn! <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "tf", id: "warm", nur: "R", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["We use going to for plans: \"We are going to visit a castle in July.\"", true],
        ["\"We have been to Edinburgh last year\" is a correct sentence.", false],
        ["The past participle of \"go\" is \"went\".", false],
        ["\"Have you ever tried a Welsh cake?\" is a correct question.", true],
        ["\"She have already packed her bag\" is a correct sentence.", false]
      ] },
      { art: "tf", id: "warm", nur: "M", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false.", aussagen: [
        ["We use going to for plans: \"We are going to visit a castle in July.\"", true],
        ["\"We have been to Edinburgh last year\" is a correct sentence.", false],
        ["The past participle of \"go\" is \"went\".", false],
        ["\"Have you ever tried a Welsh cake?\" is a correct question.", true],
        ["\"She have already packed her bag\" is a correct sentence.", false]
      ] },
      { art: "mc", id: "warm2", nur: "R", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer. <span class=\"de\">Kreuze die richtige Antwort an.</span>", fragen: [
        { q: "Complete: Tomorrow I ___ visit my cousin in Inverness.", o: ["am going to", "is going to", "are going to"], a: 0, e: "Zu \"I\" gehört \"am\": I am going to visit … Der Plan liegt in der Zukunft." },
        { q: "Complete: Lowri has ___ her homework.", o: ["done", "did", "do"], a: 0, e: "Nach have/has steht die 3. Form: do - did - done." },
        { q: "Which word often goes with the present perfect?", o: ["already", "yesterday", "last week"], a: 0, e: "Already passt zum present perfect. Yesterday und last week sagen genau, wann etwas war – dann braucht man das simple past." },
        { q: "\"to book a room\" means …", o: ["ein Zimmer buchen", "ein Zimmer aufräumen", "ein Zimmer suchen"], a: 0, e: "to book = buchen, reservieren." }
      ] },
      { art: "mc", id: "warm2", nur: "M", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "Choose the correct sentence.", o: ["We are going to catch the early ferry.", "We going to catch the early ferry.", "We are going catch the early ferry."], a: 0, e: "Going to: am/is/are + going to + verb. The \"are\" and the \"to\" must not be missing." },
        { q: "Choose the correct question.", o: ["Have you ever climbed a mountain?", "Did you ever climbed a mountain?", "Have you ever climb a mountain?"], a: 0, e: "Have + subject + ever + past participle. After \"did\" the verb would stay in the base form." },
        { q: "Complete: Mira ___ her bag two hours ago.", o: ["packed", "has packed", "is packing"], a: 0, e: "\"Two hours ago\" says exactly when it was – we use the simple past." },
        { q: "\"not … yet\" means …", o: ["noch nicht", "nie mehr", "schon immer"], a: 0, e: "I haven't finished yet = Ich bin noch nicht fertig." }
      ] },
      { art: "paare", id: "formen", tag: "Warm-up", titel: "Verb and past participle", lead: "Match the verb with its past participle. <span class=\"de\">Welche 3. Form gehört zu welchem Verb?</span>",
        paare: [["go", "gone"], ["see", "seen"], ["do", "done"], ["take", "taken"], ["be", "been"], ["think", "thought"]],
        hilfen: ["Denk an die Verbliste: go - went - gone, see - saw - seen …", "Bei think, make und have ist die 2. und die 3. Form gleich."] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule. <span class=\"de\">In zwei Runden irrt die KI. Denk an die Regel.</span>",
        runden: [
          { q: "Which sentence is about a plan?", o: ["We are going to visit a castle on Saturday.", "We visited a castle on Saturday.", "We have visited a castle on Saturday."], a: 0, ki: 0, kiText: "A plan for the future uses \"be going to\" + verb: \"We are going to visit\".",
            e: "Pläne sagt man mit be going to: am/is/are + going to + Verb. Die anderen beiden Sätze erzählen von früher." },
          { q: "Complete the sentence: She has ___ a lot of photos.", o: ["taken", "took", "take"], a: 0, ki: 0, kiText: "After \"has\" I need the past participle, and the participle of \"take\" is \"taken\".",
            e: "have/has + 3. Form: take - took - taken. Die 2. Form \"took\" steht nicht nach has." },
          { q: "Which sentence is correct?", o: ["I saw a film yesterday.", "I have seen a film yesterday.", "I see a film yesterday."], a: 0, ki: 1, kiText: "The film is still important for me today, so I choose the present perfect: \"I have seen a film yesterday\".",
            e: "Mit \"yesterday\" sagst du genau, wann es war. Dann steht das simple past: I saw a film yesterday. Das present perfect geht nicht mit yesterday." },
          { q: "Which answer is correct? \"Have you ever eaten a Welsh cake?\"", o: ["Yes, I have.", "Yes, I did.", "Yes, I do."], a: 0, ki: 0, kiText: "A question with \"have you ever\" gets a short answer with \"have\": Yes, I have.",
            e: "Auf eine Frage mit have antwortest du auch mit have: Yes, I have. / No, I haven't." },
          { q: "Complete the sentence: Omar has ___ to the sports centre.", o: ["gone", "went", "goed"], a: 0, ki: 1, kiText: "After \"has\" I use the past form, and the past of \"go\" is \"went\": \"Omar has went\".",
            e: "go - went - gone. Nach has/have steht die 3. Form: Omar has gone. \"Has went\" ist falsch, \"goed\" gibt es nicht.",
            begruende: { q: "Why is \"has went\" wrong? Explain in one sentence.", m: "After has we need the past participle gone, not went.", k: ["gone|participle|partizip|3. form|dritte form|3rd form|third form"] } },
          { q: "Which question is correct?", o: ["Are you going to play rugby tomorrow?", "Do you going to play rugby tomorrow?", "Are you go to play rugby tomorrow?"], a: 0, ki: 0, kiText: "A question with going to starts with am/is/are: \"Are you going to play …?\"",
            e: "Frage mit going to: Are you going to …? Das Wort \"are\" kommt an den Anfang." }
        ] },
      { art: "duell", id: "duell", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Which sentence is correct?", o: ["We are going to book the tickets tonight.", "We going to book the tickets tonight.", "We are going to booking the tickets tonight."], a: 0, ki: 0, kiText: "For a plan we need am/is/are + going to + the base form: \"going to book\".",
            e: "Going to: am/is/are + going to + Grundform. Nach \"to\" steht kein -ing." },
          { q: "Which sentence is correct?", o: ["Last summer we went to a festival in Oban.", "Last summer we have gone to a festival in Oban.", "Last summer we have been to a festival in Oban."], a: 0, ki: 1, kiText: "The festival is still a memory for us today, so I use the present perfect: \"Last summer we have been to a festival\".",
            e: "\"Last summer\" ist eine genaue, abgeschlossene Zeit. Dann steht das simple past: we went. Das present perfect geht nicht mit genauen Zeitangaben." },
          { q: "Which question is correct?", o: ["Has your brother ever tried skiing?", "Did your brother ever tried skiing?", "Have your brother ever tried skiing?"], a: 0, ki: 0, kiText: "\"Brother\" is \"he\", so I need \"has\" at the beginning and the participle \"tried\".",
            e: "Present-perfect-Frage: Has/Have + Person + ever + 3. Form. Zu he/she/it gehört has." },
          { q: "Complete the sentence: We haven't packed our bags ___ .", o: ["yet", "already", "ever"], a: 0, ki: 0, kiText: "In a negative sentence \"yet\" means we expect it soon, so \"not … yet\" is right.",
            e: "In verneinten Sätzen und Fragen steht yet am Ende: not … yet = noch nicht." },
          { q: "Which sentence is correct?", o: ["Rhona has been to Cardiff twice.", "Rhona has gone to Cardiff twice.", "Rhona has be to Cardiff twice."], a: 0, ki: 1, kiText: "Rhona travels to Cardiff, so I need the participle of \"go\": \"has gone\".",
            e: "been = war schon dort (und ist wieder zurück), gone = ist hingefahren und ist noch dort. \"Twice\" heißt zweimal da gewesen: been.",
            begruende: { q: "Why is \"has gone\" wrong here? Explain in one sentence.", m: "Rhona has come back, so we need been, not gone.", k: ["been|still there|noch dort|zurück|come back|came back|back|twice|zweimal"] } },
          { q: "Complete the question: When ___ you last visit your grandparents?", o: ["did", "have", "do"], a: 0, ki: 0, kiText: "\"When\" asks for a time in the past, so I use the simple past with \"did\".",
            e: "Mit When fragst du nach dem Zeitpunkt: simple past, also did." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 2 pros", teile: [
      { art: "tischduell", id: "tisch", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "Past participle of \"see\":", o: ["seen", "saw", "seed"], a: 0, e: "see - saw - seen." },
        { q: "Past participle of \"take\":", o: ["taken", "took", "taked"], a: 0, e: "take - took - taken." },
        { q: "\"yesterday\" goes with the …", o: ["simple past", "present perfect", "going to"], a: 0, e: "Yesterday sagt genau, wann: simple past." },
        { q: "\"already\" means …", o: ["schon; bereits", "noch nicht", "nie"], a: 0, e: "already = schon, bereits. Noch nicht heißt not … yet." },
        { q: "\"to be going to\" is for …", o: ["plans", "finished things", "habits"], a: 0, e: "Going to sagt, was du vorhast: Pläne." },
        { q: "\"to book\" means …", o: ["buchen", "backen", "bleiben"], a: 0, e: "to book = buchen, reservieren." },
        { q: "Complete: I have ___ my homework.", o: ["done", "did", "do"], a: 0, e: "have + 3. Form: do - did - done." },
        { q: "Past participle of \"go\":", o: ["gone", "went", "goed"], a: 0, e: "go - went - gone." },
        { q: "Complete: She ___ going to swim today.", o: ["is", "are", "am"], a: 0, e: "Zu she gehört is: She is going to swim." },
        { q: "Complete: We ___ been to Wales.", o: ["have", "has", "are"], a: 0, e: "Zu we gehört have: We have been to Wales." },
        { q: "\"never\" means …", o: ["nie", "immer", "oft"], a: 0, e: "never = nie, niemals." },
        { q: "\"castle\" means …", o: ["Burg", "Brücke", "Insel"], a: 0, e: "castle = Burg, Schloss." }
      ] },
      { art: "tischduell", id: "tisch", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "Past participle of \"see\":", o: ["seen", "saw", "seed"], a: 0, e: "see - saw - seen." },
        { q: "Past participle of \"take\":", o: ["taken", "took", "taked"], a: 0, e: "take - took - taken." },
        { q: "\"yesterday\" goes with the …", o: ["simple past", "present perfect", "going to"], a: 0, e: "Yesterday says exactly when: simple past." },
        { q: "\"already\" means …", o: ["schon; bereits", "noch nicht", "nie"], a: 0, e: "already = schon, bereits. Noch nicht = not … yet." },
        { q: "\"to be going to\" is for …", o: ["plans", "finished things", "habits"], a: 0, e: "Going to says what you intend to do: plans." },
        { q: "\"to book\" means …", o: ["buchen", "backen", "bleiben"], a: 0, e: "to book = buchen, reservieren." },
        { q: "Complete: Milan ___ his bag yet.", o: ["hasn't packed", "haven't packed", "didn't packed"], a: 0, e: "Milan = he, so hasn't + 3. Form: Milan hasn't packed his bag yet." },
        { q: "Past participle of \"think\":", o: ["thought", "thinked", "thinks"], a: 0, e: "think - thought - thought." },
        { q: "Complete: I ___ to Cardiff last year.", o: ["went", "have gone", "have been"], a: 0, e: "Last year ist abgeschlossen: simple past, also went." },
        { q: "Complete: ___ you ever been skiing?", o: ["Have", "Did", "Are"], a: 0, e: "Present-perfect-Frage mit been: Have you ever been …?" },
        { q: "\"rarely\" means …", o: ["selten", "oft", "gelegentlich"], a: 0, e: "rarely = selten. Occasionally ist gelegentlich." },
        { q: "\"against\" means …", o: ["gegen", "bis", "zwischen"], a: 0, e: "against = gegen. Bis heißt until, zwischen heißt between." }
      ] }
    ] }
  ],
  weiter: { text: "If a round went wrong: read the tip boxes of the Unit 2 grammar modules again, or try the vocabulary trainer." }
});
