/* Englisch 9R · Unit 1 Around Australia · Duels: Unit 1
   (Aufwärmen: richtig/falsch zu simple past, will-future, if-Sätzen Typ I und present progressive, dazu Wortschatz der beiden
   Wordbanks und Australien-Wissen; Duell gegen die KI: Wortschatz und Grammatik gemischt; Tischduell: kurze Fragen
   zu Vokabeln, Verbformen und if-Sätzen)
   LehrplanPLUS E9 2 (Wortschatz, Grammatik: simple past, will-future, if-Sätze Typ I, present progressive), E9 5 (Australien).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen.
   Die „KI“ irrt in zwei Runden (Runde 3: „to arrive“ = abfahren; Runde 5: if-Satz mit will im if-Teil) mit Absicht;
   die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "u1-duell",
  titel: "Duels: Unit 1",
  einleitung: "Words and grammar from Unit 1 – mixed. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I use the words and grammar of Unit 1 in quick questions.", "⚔️ I notice when an answer sounds good but is wrong.", "👥 I play fair with a partner on one device."],
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "tf", id: "warm", tag: "Warm-up", titel: "Six quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["After if we use will in the if-clause: If it will rain, we stay at home.", false],
        ["We use the simple past for things that happened and are finished: Yesterday we visited the zoo.", true],
        ["The present progressive is: be + verb + -ing, for example \"They are swimming.\"", true],
        ["The past form of \"go\" is \"goed\".", false],
        ["\"I think it will be hot tomorrow\" is a sentence about the future.", true],
        ["\"Sore throat\" means Kopfschmerzen.", false]
      ] },
      { art: "mc", id: "warm2", tag: "Warm-up", titel: "Five quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "What is the capital of Australia?", o: ["Canberra", "Sydney", "Melbourne", "Perth"], a: 0, e: "Canberra is the capital. Sydney and Melbourne are bigger cities, but they are not the capital." },
        { q: "It is December. Which season is it in Australia?", o: ["summer", "winter", "spring", "autumn"], a: 0, e: "Australia is in the southern half of the world, so the seasons are the other way round: Christmas is in summer." },
        { q: "Which language do most people in Australia speak?", o: ["English", "German", "French", "Spanish"], a: 0, e: "English is the main language in Australia." },
        { q: "\"amazing\" means …", o: ["fantastisch", "langweilig", "schrecklich", "überfüllt"], a: 0, e: "amazing = fantastisch, großartig. Langweilig heißt boring." },
        { q: "You say: \"I've got a headache.\" What do you mean?", o: ["Mein Kopf tut weh.", "Ich habe Husten.", "Ich habe Fieber.", "Mir ist schwindlig."], a: 0, e: "Headache = Kopfschmerzen. Husten heißt cough, Fieber heißt temperature." }
      ] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Which sentence is correct?", o: ["Last weekend we went to the beach.", "Last weekend we goed to the beach.", "Last weekend we go to the beach."], a: 0, ki: 0, kiText: "\"Last weekend\" shows it is finished, and the past of \"go\" is \"went\".",
            e: "\"Last weekend\" needs the simple past. \"Go\" is irregular: go - went. \"Goed\" does not exist." },
          { q: "Complete the sentence: If the weather is good tomorrow, we ___ a picnic.", o: ["will have", "had", "would had"], a: 0, ki: 0, kiText: "It is an if-clause type I, so the main clause has \"will\".",
            e: "If-Satz Typ I: if + simple present, dann will + Verb im Hauptsatz: If the weather is good, we will have a picnic." },
          { q: "What does \"to arrive\" mean?", o: ["ankommen", "abfahren", "buchen", "sich verlaufen"], a: 0, ki: 1, kiText: "I'm sure it means \"abfahren\" – you arrive when a train leaves the station.",
            e: "To arrive = ankommen. Abfahren oder verlassen heißt to leave. Merke: Wer ankommt, ist da (arrive) – wer abfährt, ist weg (leave)." },
          { q: "Which sentence describes what is happening right now?", o: ["Look! A kangaroo is jumping over the road.", "Look! A kangaroo jumped over the road.", "Look! A kangaroo will jump over the road."], a: 0, ki: 0, kiText: "\"Look!\" means it happens now, so I need the present progressive: is jumping.",
            e: "Was gerade passiert, steht im present progressive: is/are + -ing. Das passt zu \"Look!\"." },
          { q: "Which if-sentence is correct?", o: ["If it rains, we will stay inside.", "If it will rain, we will stay inside.", "If it rained, we will stay inside."], a: 0, ki: 1, kiText: "Both parts are about the future, so \"will\" belongs in both parts.",
            e: "Im if-Teil steht das simple present, auch wenn es um die Zukunft geht. Das will steht nur im Hauptsatz: If it rains, we will stay inside.",
            begruende: { q: "Why is \"If it will rain\" wrong? Explain in one sentence.", m: "After if we use the simple present, not will. Will is only in the main clause.", k: ["simple present|present|nicht will|no will|not will|kein will|ohne will|without will|only in the main|nur im hauptsatz|main clause|hauptsatz|gegenwart"] } },
          { q: "You have a sore throat. What does the doctor say?", o: ["You should drink warm tea.", "You should to drink warm tea.", "You should drinking warm tea."], a: 0, ki: 0, kiText: "After \"should\" the verb comes without \"to\" and without -ing.",
            e: "Nach should steht der Infinitiv ohne \"to\": You should drink warm tea. Sore throat = Halsschmerzen." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 1 pros", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "\"boring\" means …", o: ["langweilig", "aufregend", "unheimlich"], a: 0, e: "boring = langweilig. Aufregend heißt exciting." },
        { q: "\"unforgettable\" means …", o: ["unvergesslich", "unfreundlich", "unmöglich"], a: 0, e: "unforgettable = unvergesslich." },
        { q: "\"to get lost\" means …", o: ["sich verlaufen", "etwas verlieren", "gewinnen"], a: 0, e: "Wenn du den Weg nicht mehr kennst: to get lost." },
        { q: "\"temperature\" means …", o: ["Fieber; Temperatur", "Husten", "Ausschlag", "Termin"], a: 0, e: "Temperature = Temperatur, beim Arzt oft Fieber." },
        { q: "\"insect bite\" means …", o: ["Insektenstich", "Sonnenbrand", "Halsschmerzen"], a: 0, e: "Insect bite = Insektenstich. Sonnenbrand heißt sunburn." },
        { q: "Past of \"see\":", o: ["saw", "seed", "seen", "sees"], a: 0, e: "see - saw - seen." },
        { q: "Past of \"take\":", o: ["took", "taked", "taken"], a: 0, e: "take - took - taken." },
        { q: "Choose the correct form: She ___ a photo yesterday.", o: ["took", "takes", "is taking"], a: 0, e: "Yesterday braucht das simple past." },
        { q: "Choose the correct form: Look! They ___ .", o: ["are swimming", "swam", "will swim"], a: 0, e: "Look! = jetzt gerade, also present progressive." },
        { q: "Which if-sentence is correct?", o: ["If you hurry, you will catch the bus.", "If you will hurry, you catch the bus.", "If you hurried, you will catch the bus."], a: 0, e: "if + simple present, dann will im Hauptsatz." },
        { q: "Which if-sentence is correct?", o: ["If it is sunny, we will go hiking.", "If it will be sunny, we go hiking.", "If it was sunny, we will go hiking."], a: 0, e: "Nach if kein will: If it is sunny, we will go hiking." },
        { q: "\"I'll never forget it.\" means …", o: ["Das werde ich nie vergessen.", "Das habe ich vergessen.", "Das ist nichts für mich."], a: 0, e: "I'll = I will: Das werde ich nie vergessen." }
      ] }
    ] }
  ],
  weiter: { href: "index.html", titel: "Back to the overview", text: "If a round went wrong: read the tip boxes of the other Unit 1 modules again, or try the vocabulary trainer." }
});
