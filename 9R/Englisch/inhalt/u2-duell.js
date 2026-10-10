/* Englisch 9R · Unit 2 Exploring India · Duels: Unit 2
   (Aufwärmen: richtig/falsch zu simple present und word order, dazu Wortschatz Firma/Arbeit und nachhaltig leben und
   sichere Indien-Fakten; Duell gegen die KI: Grammatik, Wortschatz und Indien gemischt; Tischduell: kurze Fragen
   zu Vokabeln, simple present und Satzstellung)
   LehrplanPLUS E9 2 (Wortschatz, Grammatik: simple present, word order), E9 5 (Indien).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen.
   Die „KI“ irrt in zwei Runden (Runde 2: does-Frage mit -s am Verb; Runde 4: „employee“ = Kunde) mit Absicht;
   die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "u2-duell",
  titel: "Duels: Unit 2",
  einleitung: "Words and grammar from Unit 2 – mixed. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I use the words and grammar of Unit 2 in quick questions.", "⚔️ I notice when an answer sounds good but is wrong.", "👥 I play fair with a partner on one device."],
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "tf", id: "warm", tag: "Warm-up", titel: "Six quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["In the simple present, he, she and it get an -s: She works in a factory.", true],
        ["In questions with \"does\" the verb also gets an -s: Does he works here?", false],
        ["The negative of \"he likes\" is \"he don't like\".", false],
        ["Words like often, usually and never normally stand before the main verb: I often eat rice.", true],
        ["A time word at the beginning does not change the order: Today I go to school. (not: Today go I to school)", true],
        ["A customer is a person who works in a company.", false]
      ] },
      { art: "mc", id: "warm2", tag: "Warm-up", titel: "Five quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "What is the capital of India?", o: ["New Delhi", "Mumbai", "Kolkata", "Chennai"], a: 0, e: "New Delhi is the capital. Mumbai, Kolkata and Chennai are big cities, but they are not the capital." },
        { q: "On which continent is India?", o: ["Asia", "Africa", "Europe", "South America"], a: 0, e: "India is a country in Asia." },
        { q: "\"to recycle\" means …", o: ["wiederverwerten, recyceln", "wegwerfen", "verbrennen", "verschwenden"], a: 0, e: "Recycling heißt: aus altem Material wird wieder etwas Neues. Wegwerfen heißt to throw away." },
        { q: "Which sentence is correct?", o: ["She doesn't like spicy food.", "She don't like spicy food.", "She doesn't likes spicy food."], a: 0, e: "He/she/it: doesn't + Verb ohne -s. Das -s steckt schon in doesn't." },
        { q: "\"employee\" and \"customer\" – which sentence is right?", o: ["An employee works for a company. A customer buys something.", "An employee buys something. A customer works for a company.", "An employee and a customer both work for a company."], a: 0, e: "Employee = Mitarbeiter/in (arbeitet in der Firma). Customer = Kunde/Kundin (kauft etwas)." }
      ] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Which sentence is correct?", o: ["Every Saturday I play football in the park.", "Every Saturday play I football in the park.", "I play every Saturday football in the park."], a: 0, ki: 0, kiText: "After a time word the order stays the same: subject, verb, object. So: Every Saturday I play football.",
            e: "Im Englischen bleibt die Reihenfolge Subjekt – Verb – Objekt, auch wenn vorne eine Zeitangabe steht. Anders als im Deutschen kommt das Verb nicht vor das Subjekt." },
          { q: "Which question is correct?", o: ["Does she work in a bank?", "Does she works in a bank?", "Do she work in a bank?"], a: 0, ki: 1, kiText: "She is he/she/it, so the verb needs an -s: Does she works in a bank?",
            e: "Nach does steht das Verb ohne -s: Does she work? Das -s der dritten Person steckt schon in does. Mit she braucht man does, nicht do.",
            begruende: { q: "Why is \"Does she works\" wrong? Explain in one sentence.", m: "After does we use the verb without -s: Does she work?", k: ["no -s|without -s|ohne -s|kein -s|not -s|infinitive|infinitiv|base form|grundform|stamm|does has the s|does hat|s steckt|-s is already|-s already|already in does"] } },
          { q: "Which sentence is correct?", o: ["My brother usually walks to work.", "My brother walks usually to work.", "Usually walks my brother to work."], a: 0, ki: 0, kiText: "Usually stands before the main verb: usually walks.",
            e: "Häufigkeitswörter wie usually, often, always und never stehen vor dem Vollverb. Nach dem Verb stehen Ort und Zeit, nicht usually." },
          { q: "What does \"employee\" mean?", o: ["Mitarbeiter/in", "Kunde/Kundin", "Kantine", "Werkstatt"], a: 0, ki: 1, kiText: "I'm sure it means \"Kunde\" – an employee is the person who buys things in a shop.",
            e: "Employee = Mitarbeiter/in. Kunde heißt customer. Merke: Der employee arbeitet für die Firma, der customer kauft etwas." },
          { q: "Which is a good way to save energy?", o: ["Turn off the light when you leave the room.", "Leave the TV on all night.", "Keep the windows open when the heating is on."], a: 0, ki: 0, kiText: "Turning off the light means we use less electricity.",
            e: "Energie sparen heißt: nichts laufen lassen, was keiner braucht. Licht aus beim Verlassen des Raums spart Strom." },
          { q: "Which festival is called the Festival of Lights?", o: ["Diwali", "Holi", "Halloween"], a: 0, ki: 0, kiText: "Diwali, the Festival of Lights, is celebrated by many people in India. They light small lamps.",
            e: "Diwali = Lichterfest. Holi ist das Fest der Farben: Die Menschen werfen buntes Farbpulver." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 2 pros", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "\"workshop\" means …", o: ["Werkstatt", "Kantine", "Büro"], a: 0, e: "Workshop = Werkstatt, ein Raum zum Arbeiten oder Herstellen. Kantine heißt canteen." },
        { q: "\"to deliver\" means …", o: ["liefern", "wegwerfen", "bezahlen"], a: 0, e: "To deliver = liefern, zum Beispiel Pakete oder Essen." },
        { q: "\"canteen\" means …", o: ["Kantine", "Fabrik", "Kunde"], a: 0, e: "Canteen = Kantine. Dort essen Mitarbeiter oder Schüler." },
        { q: "\"waste\" means …", o: ["Abfall, Müll", "Energie", "Stoffbeutel"], a: 0, e: "Waste = Abfall. Plastic waste ist Plastikmüll." },
        { q: "\"cloth bag\" means …", o: ["Stoffbeutel", "Plastiktüte", "Rucksack"], a: 0, e: "Cloth bag = Stoffbeutel. Plastiktüte heißt plastic bag." },
        { q: "Which two languages are official languages of India's central government?", o: ["Hindi and English", "German and French", "Spanish and Portuguese"], a: 0, e: "Hindi und Englisch sind die Amtssprachen der Zentralregierung. Daneben gibt es in Indien viele weitere Sprachen." },
        { q: "Holi is the festival of …", o: ["colours", "lights", "snow"], a: 0, e: "Holi = Fest der Farben. Das Lichterfest heißt Diwali." },
        { q: "Choose the correct form: He ___ in a shop every day.", o: ["works", "work", "working"], a: 0, e: "Simple present mit he: Verb + -s, also works." },
        { q: "Choose the correct form: They ___ like fish.", o: ["don't", "doesn't", "isn't"], a: 0, e: "Mit they brauchst du don't (do not). Doesn't gehört zu he/she/it." },
        { q: "Choose the correct form: ___ your mother work here?", o: ["Does", "Do", "Is"], a: 0, e: "Your mother = she, also does: Does your mother work here?" },
        { q: "Which sentence is correct?", o: ["I always do my homework after school.", "I do always my homework after school.", "I do my homework always after school."], a: 0, e: "Always steht vor dem Vollverb: I always do my homework." },
        { q: "Which sentence has the right order (how – where – when)?", o: ["She walks slowly to school every morning.", "She walks every morning to school slowly.", "Every morning slowly to school she walks."], a: 0, e: "Reihenfolge: Art und Weise (slowly), Ort (to school), Zeit (every morning)." }
      ] }
    ] }
  ],
  weiter: { href: "index.html", titel: "Back to the overview", text: "If a round went wrong: read the tip boxes of the other Unit 2 modules again and play once more." }
});
