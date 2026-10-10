/* Englisch 9R · Unit 4 News from New Zealand · Duelle: Unit 4
   (Aufwärmen: richtig/falsch zu going to, Passiv verstehen und simple past, dazu Wortschatz Berufe, Eigenschaften
   und Praktikum; Duell gegen die KI: Wortschatz und Grammatik gemischt; Tischduell: kurze Fragen zu Vokabeln,
   going to, Passiv verstehen und unregelmäßigen Vergangenheitsformen)
   LehrplanPLUS E9 2 (Wortschatz, Grammatik: going to-future, Passiv verstehen, simple past), E9 3 (Beruf, Praktikum).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen.
   Die „KI“ irrt in zwei Runden (Runde 1: make an internship statt do; Runde 3: Passiv mit Aktiv verwechselt) mit
   Absicht; die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "u4-duell",
  titel: "Duels: Unit 4",
  einleitung: "Words and grammar from Unit 4 – mixed. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I use the words and grammar of Unit 4 in quick questions.", "⚔️ I notice when an answer sounds good but is wrong.", "👥 I play fair with a partner on one device."],
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "tf", id: "warm", tag: "Warm-up", titel: "Six quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["We use \"going to\" for plans and intentions: I am going to apply for an apprenticeship.", true],
        ["\"Hine going to be a nurse\" is correct English.", false],
        ["In the sentence \"The shelves are filled by the shop assistants every morning\", the shop assistants do the work.", true],
        ["In the sentence \"The workshop was cleaned by the apprentices\", the workshop cleaned the apprentices.", false],
        ["\"I goed to the workshop on Monday\" is correct English.", false],
        ["A punctual worker always arrives on time.", true]
      ] },
      { art: "mc", id: "warm2", tag: "Warm-up", titel: "Five quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "\"reliable\" means …", o: ["zuverlässig", "mutig", "großzügig", "ängstlich"], a: 0, e: "Reliable = zuverlässig: Auf eine reliable Person kann man sich verlassen. Mutig heißt brave, großzügig generous." },
        { q: "Which sentence is correct?", o: ["Wiremu is going to start his internship on Monday.", "Wiremu going to start his internship on Monday.", "Wiremu is going start his internship on Monday."], a: 0, e: "going to braucht die richtige Form von be (am/is/are) davor und to vor dem Verb: is going to start." },
        { q: "\"The letters are sorted by the interns every day.\" Who sorts the letters?", o: ["The interns", "The letters", "The customers"], a: 0, e: "Im Passiv nennt by die Person, die etwas tut: by the interns = die Praktikanten sortieren. Die Briefe werden sortiert, sie sortieren nichts." },
        { q: "Which sentence is correct?", o: ["On my first day I met the manager.", "On my first day I meeted the manager.", "On my first day I meet the manager."], a: 0, e: "Meet ist unregelmäßig: meet – met. Die Form meeted gibt es nicht. Mit On my first day steht das simple past." },
        { q: "What is a \"supervisor\" at work?", o: ["A person who shows you the work and helps you", "A person who buys things in the shop", "A person who delivers the post"], a: 0, e: "Supervisor = Betreuer oder Betreuerin. Im Praktikum zeigt er oder sie dir die Arbeit. Die Person, die einkauft, ist der customer." }
      ] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Fill the gap: Ana wants to ___ an internship in a hotel.", o: ["do", "make", "play", "go"], a: 0, ki: 1, kiText: "The right word is make: Ana wants to make an internship in a hotel. We make a plan and we make a mistake, so we make an internship.",
            e: "Ein Praktikum macht man mit do: do an internship. Make steht in festen Wendungen wie make a mistake oder make a plan, aber nicht bei internship." },
          { q: "Which sentence is correct?", o: ["Jayden is going to become a mechanic.", "Jayden going to become a mechanic.", "Jayden is going become a mechanic."], a: 0, ki: 0, kiText: "Going to needs a form of be: Jayden is going to become a mechanic. After to comes the base form of the verb.",
            e: "going to = be (am/is/are) + going to + Grundform. Bei Jayden (he) heißt es is. Ohne is oder ohne to ist der Satz falsch." },
          { q: "\"The cakes are baked by the bakers early in the morning.\" Who bakes the cakes?", o: ["The bakers", "The cakes", "The customers", "The manager"], a: 0, ki: 1, kiText: "The cakes are the subject of the sentence, so the cakes do the action. The cakes bake themselves.",
            e: "Im Passiv ist das Subjekt (the cakes) nicht der Täter. Wer etwas tut, steht hinter by: by the bakers. Die Bäcker backen die Kuchen.",
            begruende: { q: "Which word shows who does the action in the sentence? Explain in one sentence.", m: "The word by shows who does the action: the bakers bake the cakes.", k: ["by|von|durch|bakers|Bäcker"] } },
          { q: "A person who is \"punctual\" …", o: ["arrives at the right time", "is very friendly to customers", "is good at maths", "works very slowly"], a: 0, ki: 0, kiText: "Punctual means pünktlich. A punctual worker is never late.",
            e: "Punctual = pünktlich. Wer punctual ist, kommt zur richtigen Zeit (on time). Freundlich heißt friendly." },
          { q: "Fill the gap: Yesterday the manager ___ me a good reference.", o: ["gave", "gived", "give", "given"], a: 0, ki: 0, kiText: "Give is irregular: give – gave – given. With yesterday we need the simple past, so gave.",
            e: "Give ist unregelmäßig: give – gave – given. Yesterday zeigt das simple past, also gave. Die Form gived gibt es nicht, given braucht ein have." },
          { q: "\"The old machine was repaired by a mechanic last year.\" What does the sentence mean?", o: ["A mechanic repaired the machine.", "The machine repaired a mechanic.", "A mechanic will repair the machine.", "The mechanic is repairing the machine now."], a: 0, ki: 0, kiText: "Was repaired is the passive in the simple past. Last year shows it is finished. The mechanic did the repair.",
            e: "was repaired = Passiv im simple past. By a mechanic nennt den Täter, last year zeigt die Vergangenheit: Ein Mechaniker hat die Maschine repariert." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 4 pros", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "\"carpenter\" means …", o: ["Zimmermann, Schreiner", "Bäcker", "Klempner"], a: 0, e: "Carpenter = Zimmermann oder Schreiner, jemand der mit Holz arbeitet. Bäcker heißt baker, Klempner plumber." },
        { q: "\"hard-working\" means …", o: ["fleißig", "pünktlich", "höflich"], a: 0, e: "Hard-working = fleißig. Pünktlich heißt punctual, höflich polite." },
        { q: "\"colleague\" means …", o: ["Kollege, Kollegin", "Kunde, Kundin", "Betreuer, Betreuerin"], a: 0, e: "Colleague = Kollege oder Kollegin, also jemand, der im selben Betrieb arbeitet. Der Kunde heißt customer, der Betreuer supervisor." },
        { q: "\"to apply for\" means …", o: ["sich bewerben um", "aufräumen", "anrufen"], a: 0, e: "To apply for a job = sich um eine Stelle bewerben. Aufräumen heißt to tidy up." },
        { q: "Choose the correct form: I ___ going to visit a workshop next week.", o: ["am", "is", "are"], a: 0, e: "Mit I steht am: I am going to visit. Is gehört zu he/she/it, are zu we/you/they." },
        { q: "We use \"going to\" for …", o: ["plans and intentions", "things that happened yesterday", "things that happen every day"], a: 0, e: "Going to sagt, was man vorhat (Pläne und Absichten): I am going to ask for a reference. Für gestern nimmt man das simple past." },
        { q: "Look at the dark clouds! It ___ rain.", o: ["is going to", "are going to", "go to"], a: 0, e: "Man sieht schon Anzeichen (dunkle Wolken), deshalb going to. It braucht is: it is going to rain." },
        { q: "\"The parcels are delivered by the postman.\" Who delivers the parcels?", o: ["The postman", "The parcels", "The customer"], a: 0, e: "Hinter by steht, wer etwas tut: by the postman. Die Pakete werden geliefert, sie liefern nichts." },
        { q: "\"The shop was closed by the manager at six.\" What does the sentence mean?", o: ["Der Chef hat den Laden um sechs geschlossen.", "Der Laden hat den Chef um sechs geschlossen.", "Der Chef wird den Laden um sechs schließen."], a: 0, e: "Was closed ist Passiv im simple past, by the manager nennt den Täter: Der Chef hat geschlossen. Es ist schon passiert, nicht erst geplant." },
        { q: "Choose the correct form: The rooms ___ cleaned every morning.", o: ["are", "is", "does"], a: 0, e: "Passiv im simple present: am/is/are + dritte Form. Rooms ist Mehrzahl, also are cleaned." },
        { q: "What is the simple past of \"go\"?", o: ["went", "goed", "gone"], a: 0, e: "Go ist unregelmäßig: go – went – gone. Went ist die Form für das simple past, gone braucht ein have." },
        { q: "Choose the correct form: Last night Jayden ___ his CV.", o: ["wrote", "writed", "written"], a: 0, e: "Write ist unregelmäßig: write – wrote – written. Last night zeigt das simple past, also wrote." }
      ] }
    ] }
  ],
  weiter: { href: "index.html", titel: "Back to the overview", text: "If a round went wrong: read the tip boxes of the other Unit 4 modules again and play once more." }
});
