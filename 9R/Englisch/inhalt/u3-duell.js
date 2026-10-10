/* Englisch 9R · Unit 3 Discover South Africa · Duels: Unit 3
   (Aufwärmen: richtig/falsch zu past progressive, while/when und for/since, dazu Wortschatz Unfall und Hilfe,
   Vorbilder und sichere Südafrika-Fakten; Duell gegen die KI: Grammatik, Wortschatz und Südafrika gemischt;
   Tischduell: kurze Fragen zu Vokabeln, past progressive, while/when, present perfect mit for und since)
   LehrplanPLUS E9 2 (Wortschatz, Grammatik: past progressive, while/when, present perfect), E9 5 (Südafrika).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen.
   Die „KI“ irrt in zwei Runden (Runde 2: they + wasn't; Runde 4: simple past mit since) mit Absicht;
   die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "u3-duell",
  titel: "Duels: Unit 3",
  einleitung: "Words and grammar from Unit 3 – mixed. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I use the words and grammar of Unit 3 in quick questions.", "⚔️ I notice when an answer sounds good but is wrong.", "👥 I play fair with a partner on one device."],
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "tf", id: "warm", tag: "Warm-up", titel: "Six quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["The past progressive is made with was or were and a verb with -ing: We were waiting for the bus.", true],
        ["\"They was playing outside\" is correct.", false],
        ["We often use the past progressive for a long action and the simple past for a short action: I was reading when the lights went out.", true],
        ["\"I know her since 2019\" is correct English.", false],
        ["We use \"since\" with a point in time (since 2019, since Monday) and \"for\" with a period of time (for two weeks).", true],
        ["South Africa is at the northern tip of Africa.", false]
      ] },
      { art: "mc", id: "warm2", tag: "Warm-up", titel: "Five quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "Which city is one of the three capital cities of South Africa?", o: ["Pretoria", "Johannesburg", "Durban", "Stellenbosch"], a: 0, e: "South Africa has three capitals: Pretoria, Cape Town and Bloemfontein. Johannesburg and Durban are big cities, but they are not capitals. Stellenbosch is a small town." },
        { q: "\"ambulance\" means …", o: ["Krankenwagen", "Feuerwehr", "Polizeiauto", "Pflaster"], a: 0, e: "Ambulance = Krankenwagen. Es bringt verletzte oder kranke Menschen ins Krankenhaus." },
        { q: "Which sentence is correct?", o: ["We were walking home when it started to rain.", "We was walking home when it started to rain.", "We were walk home when it started to rain."], a: 0, e: "Past progressive: was/were + Verb mit -ing. Mit we braucht man were: we were walking." },
        { q: "Which sentence is correct?", o: ["My uncle has lived in Cape Town for three years.", "My uncle has lived in Cape Town since three years.", "My uncle lives in Cape Town since three years."], a: 0, e: "Für einen Zeitraum (three years) steht for. Since braucht einen Zeitpunkt, zum Beispiel since 2022. Und weil es bis heute dauert, steht das present perfect." },
        { q: "South Africa is called the \"rainbow nation\" because …", o: ["many different people and cultures live together there", "it rains every day there", "the flag has only one colour", "there are no mountains there"], a: 0, e: "Rainbow nation: In Südafrika leben Menschen mit vielen Kulturen und Sprachen zusammen – wie die vielen Farben eines Regenbogens." }
      ] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "What is a witness?", o: ["A person who sees what happens, for example at an accident", "A person who drives the ambulance", "A person who is injured in an accident", "A person who sells bandages"], a: 0, ki: 0, kiText: "A witness is someone who saw the accident and can tell the police what happened.",
            e: "Witness = Zeuge/Zeugin. Wer einen Unfall gesehen hat, kann der Polizei erzählen, was passiert ist. Injured heißt verletzt." },
          { q: "Which sentence is correct?", o: ["They weren't watching the match when the lights went out.", "They wasn't watching the match when the lights went out.", "They didn't watching the match when the lights went out."], a: 0, ki: 1, kiText: "The negative of the past progressive is wasn't + -ing, so: They wasn't watching.",
            e: "Verneinung im past progressive: was not (wasn't) bei I/he/she/it, were not (weren't) bei we/you/they. Mit they heißt es also weren't watching. Didn't passt nicht zu einer -ing-Form." },
          { q: "Which sentence is correct?", o: ["A girl was crossing the road when a car stopped suddenly.", "A girl were crossing the road when a car stopped suddenly.", "A girl was cross the road when a car stopped suddenly."], a: 0, ki: 0, kiText: "A girl is one person, so was. The long action (crossing the road) is in the past progressive, the short action (stopped) in the simple past.",
            e: "Die lange Handlung steht im past progressive (was crossing), die kurze, plötzliche im simple past (stopped). A girl = she, also was – nicht were." },
          { q: "Fill the gap: My aunt ___ in Durban since 2018.", o: ["has lived", "lived", "was living", "lives"], a: 0, ki: 1, kiText: "Since only tells us when it started, so the simple past is right: My aunt lived in Durban since 2018.",
            e: "Mit since oder for und einer Handlung, die bis heute dauert, braucht man das present perfect: has lived. Das simple past (lived) wäre vorbei und abgeschlossen.",
            begruende: { q: "Why is \"My aunt lived in Durban since 2018\" wrong? Explain in one sentence.", m: "She still lives there, so we need the present perfect: has lived.", k: ["present perfect|has lived|have lived|bis heute|noch immer|still|until now|up to now|today|heute|jetzt|now|not finished|nicht vorbei|nicht abgeschlossen|dauert"] } },
          { q: "What is a role model?", o: ["A person you admire and want to be like", "A person who models clothes", "A person who works in a hospital", "A person who tells lies"], a: 0, ki: 0, kiText: "A role model is someone you look up to, for example because he or she is brave or generous.",
            e: "Role model = Vorbild. Wenn du jemanden bewunderst (to admire), weil er mutig (brave), zuverlässig (reliable) oder großzügig (generous) ist, ist er dein Vorbild." },
          { q: "The famous Table Mountain stands above which city?", o: ["Cape Town", "Pretoria", "Bloemfontein", "Durban"], a: 0, ki: 0, kiText: "Table Mountain has a flat top like a table. It stands above Cape Town.",
            e: "Der Tafelberg (Table Mountain) hat eine flache Spitze wie ein Tisch und steht über Kapstadt (Cape Town), einer der drei Hauptstädte Südafrikas." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 3 pros", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "\"to slip\" means …", o: ["ausrutschen", "anrufen", "retten"], a: 0, e: "To slip = ausrutschen, zum Beispiel auf nassem Boden." },
        { q: "\"bandage\" means …", o: ["Verband", "Pflaster", "Spritze"], a: 0, e: "Bandage = Verband, mit dem man eine Wunde einwickelt. Ein kleines Pflaster heißt plaster." },
        { q: "\"reliable\" means …", o: ["zuverlässig", "mutig", "großzügig"], a: 0, e: "Reliable = zuverlässig: Auf eine reliable Person kann man sich verlassen. Mutig heißt brave, großzügig generous." },
        { q: "\"generous\" means …", o: ["großzügig", "ängstlich", "geduldig"], a: 0, e: "Generous = großzügig: Ein generous Mensch gibt gern etwas ab. Geduldig heißt patient." },
        { q: "\"to admire\" means …", o: ["bewundern", "verletzen", "vergessen"], a: 0, e: "To admire = bewundern. Wen man bewundert, der kann ein Vorbild (role model) sein." },
        { q: "\"to crash into\" means …", o: ["gegen etwas prallen, zusammenstoßen", "an etwas vorbeifahren", "etwas reparieren"], a: 0, e: "To crash into = gegen etwas prallen. A car crashed into a wall: Ein Auto ist gegen eine Mauer geprallt." },
        { q: "Choose the correct form: We ___ having lunch when the phone rang.", o: ["were", "was", "did"], a: 0, e: "Past progressive mit we: were + -ing, also were having." },
        { q: "Choose the correct form: I ___ a photo when the dog jumped into the lake.", o: ["was taking", "am taking", "have taking"], a: 0, e: "Die lange Handlung steht im past progressive: was taking. Die kurze Handlung (jumped) steht im simple past." },
        { q: "Choose the correct word: She has lived here ___ 2019.", o: ["since", "for", "ago"], a: 0, e: "2019 ist ein Zeitpunkt, also since. Für einen Zeitraum (for five years) nimmt man for." },
        { q: "Choose the correct word: He has played football ___ five years.", o: ["for", "since", "yesterday"], a: 0, e: "Five years ist ein Zeitraum, also for. Since braucht einen Zeitpunkt wie since 2020." },
        { q: "South Africa is at the … of Africa.", o: ["southern tip", "northern tip", "western tip"], a: 0, e: "Südafrika liegt ganz im Süden des Kontinents, an der Südspitze Afrikas." },
        { q: "In 1994 South Africa had its first free elections for all people. What happened then?", o: ["Nelson Mandela became president.", "The country got a king.", "The apartheid laws started."], a: 0, e: "1994 durften zum ersten Mal alle Menschen in Südafrika wählen. Nelson Mandela wurde Präsident." }
      ] }
    ] }
  ],
  weiter: { href: "index.html", titel: "Back to the overview", text: "If a round went wrong: read the tip boxes of the other Unit 3 modules again and play once more." }
});
