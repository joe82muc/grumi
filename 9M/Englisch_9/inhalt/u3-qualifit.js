/* Englisch 9M · Unit 3 Discover South Africa · Quali-Fit: die sechs Prüfungsteile A bis F in klein · M-Fassung
   (A Listening mit zwei Sprechern, Korrektur und Missverständnis: Kurzantworten und falsche Angabe finden, B Language in use: Wortbildung, past progressive mit while/when
   und present perfect mit for/since, C Reading: Satzhälften verbinden, Belegstellen, true / false / not in the text, Fehler in einer Zusammenfassung finden,
   D Mediation: Krankenhaus, Regeln mit Ausnahme als deutsche Zusammenfassung, E Text and media: Notizen → kurzer Bericht, F Writing: Text über ein Vorbild –
   Prüfungsformate wie in der Abschlussprüfung)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Südafrika: Unfall und Polizei, Vorbilder, Leben junger Menschen, im Krankenhaus). Grammatik der Unit: past progressive mit while/when, present perfect mit for/since (Revision).
   Texte: „A small accident at Oak Corner“ (texte/u3/qualifit-listening-m.js), „My role model“ (texte/u3/qualifit-reading-m.js),
   „Visiting hours on Ward Four“ (texte/u3/qualifit-mediation-m.js) – Radio, Markt, Gruppe, Krankenhaus und Personen sind erfunden.
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u3-qualifit",
  titel: "Quali-Fit: Unit 3",
  einleitung: "You know the six parts of the exam. In Unit 3 the texts are <b>longer</b>, the tasks are <b>mixed</b> and you get <b>fewer hints</b>. You will use short answers, find the wrong detail, join sentence halves, decide “true / false / not in the text”, find a mistake in a summary and summarise in German. The topics come from Unit 3: an accident and the police, role models, young people and the hospital. The grammar in part B is the past progressive (with <i>while</i> and <i>when</i>) and the present perfect with <i>for</i> and <i>since</i>.",
  zeit: "etwa 50 Minuten",
  ziele: ["🎧 I can notice a correction and a mix-up in an interview.", "📝 I can build new words and use the past progressive and the present perfect.", "📖 I can join sentence halves, decide true, false or not in the text and find a mistake in a summary.", "🇩🇪 I can summarise rules from an English e-mail in German.", "✉️ I can turn notes into a report and write about a role model."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    wordbuilding: ["word building", "Wortbildung: Aus einem Grundwort in Klammern bildest du ein neues Wort, zum Beispiel care → careful."],
    pastprog: ["past progressive", "Das past progressive besteht aus was oder were und der -ing-Form. Es beschreibt, was gerade im Gange war, als etwas anderes geschah."],
    perfect: ["present perfect", "Das present perfect besteht aus have oder has und der dritten Verbform. Mit for nennst du, wie lange etwas dauert, mit since, wann es angefangen hat."],
    notintext: ["not in the text", "Bei „true / false / not in the text“ prüfst du: Steht es im Text so da (true), steht das Gegenteil da (false) oder sagt der Text darüber nichts (not in the text)?"],
    stall: ["stall", "Ein Stand: An einem Marktstand verkauft man zum Beispiel Obst."],
    cast: ["cast", "Ein Gips: Wer sich den Arm gebrochen hat, trägt ihn mehrere Wochen."],
    doubtful: ["doubtful", "Skeptisch: Wer doubtful ist, glaubt nicht, dass eine Idee funktioniert."],
    volunteer: ["volunteer", "Ein freiwilliger Helfer: Ein volunteer arbeitet ohne Bezahlung für eine gute Sache."],
    retire: ["retire", "In den Ruhestand gehen: Wer retired ist, arbeitet nicht mehr im Beruf."],
    allergy: ["allergy", "Eine Allergie: Manche Menschen vertragen zum Beispiel Nüsse oder Blumenstaub nicht."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. <b>On air: the school radio</b></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u3-school-radio.jpg\" alt=\"Two students with headphones interview a market seller in a small school radio studio.\" style=\"width:100%;border-radius:14px\"></figure><p>Who is the guest? What would you ask him? Talk to a partner or write two sentences. Then read on.</p>" },
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>Bei einem Interview wird oft eine <b>falsche Angabe</b> gesucht. Lies zuerst alle Aufgaben. Beim Hören merkst du dir die Stelle, die <b>nicht</b> zum Gehörten passt. Vorsicht: Der Sprecher <b>korrigiert</b> sich manchmal („No, sorry, I mean …“), die Interviewerin versteht etwas <b>falsch</b>, oder es gibt <b>zwei Angaben</b>, von denen nur eine zur Frage passt. Bei Kurzantworten schreibst du <b>nur ein Wort oder eine Zahl</b>. Wörter wie <button class=\"term\" data-t=\"stall\">stall</button> und <button class=\"term\" data-t=\"cast\">cast</button> stehen im Glossar.</p>" },
      { art: "text", html: "<p class=\"lead\">Busisiwe, a student reporter from a school radio in an invented South African town, talks to a witness of a small accident. You only hear Busisiwe and her guest. <span class=\"de\">Lies die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u3-qf-listen-m", fragen: [
        { art: "formular", id: "karte-a", titel: "Answer the questions", lead: "Listen and complete the notes. Write <b>one word or one number</b>. <span class=\"de\">Hör zu und ergänze. Nur ein Wort oder eine Zahl.</span>",
          karte: "<p>Complete the notes about the accident.</p>",
          kopf: "Accident at Oak Corner – notes",
          felder: [
            { label: "Time of the accident", loesung: ["7.15", "7:15", "7 15", "quarter past seven", "a quarter past seven", "quarter past 7", "a quarter past 7", "seven fifteen", "seven-fifteen", "7.15 am", "7:15 am", "7.15am", "7:15am", "7.15 a.m.", "7:15 a.m.", "15 past 7"] },
            { label: "The road was still ___ from the night.", loesung: ["wet"] },
            { label: "The rider will stay off work for ___ weeks.", loesung: ["4", "four"] }
          ] },
        { art: "mc", id: "mc-a", titel: "Find the wrong sentence", lead: "Tick the sentence that is wrong. <span class=\"de\">In jeder Aufgabe passt ein Satz nicht zum Interview.</span>",
          fragen: [
            { q: "About the accident:", o: ["The dog was badly hurt.", "The rider fell because the road was wet.", "A woman from the bakery brought a blanket.", "The dog ran into Mr Radebe's stall."], a: 0,
              e: "Busisiwe versteht zuerst falsch. Mr Radebe sagt aber: Der Hund war unverletzt, nur der Fahrer hat sich am Arm verletzt." },
            { q: "About the police:", o: ["The police arrived after about ten minutes.", "Two officers came to the corner.", "They asked Mr Radebe what he was doing.", "Mr Radebe told them that many cars drive too fast there."], a: 0,
              e: "Nach zehn Minuten kam der Krankenwagen. Die Polizei kam erst nach zwanzig Minuten." }
          ] }
      ] },
      { art: "offen", id: "plus-a", m7: true, tag: "Plus · Your opinion", titel: "A speed bump?", lead: "Mr Radebe has asked the town three times for a speed bump. Is that a good idea for Oak Corner? Give <b>two reasons</b>. <span class=\"de\">Antworte auf Englisch, mit eigenen Worten.</span>",
        fragen: [{ q: "Is a speed bump a good idea? Why?", m: "I think it is a good idea because cars must drive more slowly. Also, dogs and people can cross the road more safely.", k: ["speed|bump|slow|slowly|safe|safely|dangerous", "because|reason|also|first|second"], min: 2 }],
        tipp: "Use: I think it is a good idea because … Also, …" }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ergänzt du Wörter und bildest <button class=\"term\" data-t=\"wordbuilding\">neue Wörter</button> aus dem Grundwort in Klammern: Suche zuerst, welche Wortart fehlt (Nomen, Adjektiv, Adverb). Für die Zeiten gilt: Das <button class=\"term\" data-t=\"pastprog\">past progressive</button> (was / were + -ing) beschreibt die Hintergrundhandlung, die kurze Handlung steht im simple past. Nach <b>while</b> steht meist das past progressive, nach <b>when</b> oft die kurze Handlung. Das <button class=\"term\" data-t=\"perfect\">present perfect</button> mit <b>for</b> (Zeitraum) oder <b>since</b> (Startpunkt) beschreibt, was bis heute gilt.</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "Small stories", lead: "Complete the sentences with words from the box. <span class=\"de\">Es sind ganze Verbformen. Zwei bleiben übrig.</span>",
        absaetze: [
          ["The rider ", { g: "was riding" }, " along Oak Street when the dog ran across the road."],
          ["While the nurses ", { g: "were helping" }, " the patient, the doctor phoned his family."],
          ["Mr Radebe ", { g: "has had" }, " his stall on Oak Corner for twelve years."],
          ["We ", { g: "have known" }, " each other since primary school."]
        ], extra: ["was helping", "were riding"] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort aus dem Wort in Klammern.</span>",
        fragen: [
          { q: "Mr Radebe's ___ of the rider helped the police. (describe)", o: ["description", "describing", "describer", "descriptive"], a: 0, e: "Nach „Mr Radebe's“ steht ein Nomen: describe → description." },
          { q: "The ambulance arrived ___ after the call. (quick)", o: ["quickly", "quick", "quickness", "quicker"], a: 0, e: "Das Wort beschreibt, wie der Krankenwagen kam, also ein Adverb: quick + -ly." }
        ] },
      { art: "mc", id: "mc-b2", tag: "Tick", titel: "Tenses", lead: "Tick the correct answer. <span class=\"de\">Achte auf while, when, for und since.</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["I was cleaning my room when the phone rang.", "I cleaned my room when the phone was ringing.", "I was clean my room when the phone rang.", "I cleaning my room when the phone rang."], a: 0, e: "Das Aufräumen dauert länger (was cleaning), das Klingeln ist kurz (rang)." },
          { q: "Mrs Fourie has led the group ___ the first day, and Tumelo has known her ___ ten years.", o: ["since / for", "for / since", "since / since", "for / for"], a: 0, e: "Since nennt den Startpunkt (the first day), for den Zeitraum (ten years)." }
        ] },
      { art: "offen", id: "plus-b", m7: true, tag: "Plus · Join the sentences", titel: "One sentence", lead: "Join the two sentences into one with <b>when</b>. Keep the past progressive in one part: <b>A dog ran across the road. The rider was turning the corner.</b>",
        fragen: [{ q: "Write one sentence with when.", m: "The rider was turning the corner when a dog ran across the road.", k: ["rider", "was turning", "when", "ran"], min: 3 }],
        tipp: "The long action (past progressive) + when + the short action (simple past)." }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C liest du einen längeren Text mit Zeilennummern. Lies zuerst alles <b>einmal schnell</b>, nur für das Thema. Bei <b>Satzhälften</b> prüfst du, was inhaltlich und grammatisch zusammenpasst. Bei <b>„true / false / <button class=\"term\" data-t=\"notintext\">not in the text</button>“</b> suchst du die Stelle: Steht es so da, steht das Gegenteil da – oder sagt der Text nichts darüber? Bei einer Zusammenfassung mit Fehler vergleichst du jeden Satz mit dem Text. Wörter wie <button class=\"term\" data-t=\"doubtful\">doubtful</button>, <button class=\"term\" data-t=\"volunteer\">volunteer</button> und <button class=\"term\" data-t=\"retire\">retire</button> stehen im Glossar.</p>" },
      { art: "text", html: "<p class=\"lead\">Tumelo wrote this text for his school magazine. The people and the group are invented. <span class=\"de\">Lies den Text einmal ganz.</span></p>" },
      { art: "lesetext", lesetext: "u3-qf-read-m" },
      { art: "paare", id: "haelften-c", tag: "Match", titel: "Sentence halves", lead: "Join the sentence halves. <span class=\"de\">Welche Hälfte passt zu welchem Satzanfang?</span>",
        paare: [["Mrs Fourie started to clean the beach alone", "although nobody else was there."], ["At first Tumelo joined the group", "because he wanted the free sandwiches."], ["The volunteers sort the rubbish", "so that a recycling company can collect it."]] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap ALL the lines with the answer. <span class=\"de\">Tippe alle Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-qf-read-m",
        fragen: [
          { q: "How did some neighbours react at first?", zeilen: [15, 16], e: "They were doubtful and laughed; they said the sea would bring the rubbish back.", tipp: "Look at the third paragraph." },
          { q: "What did Mrs Fourie say when a storm brought new rubbish onto the beach?", zeilen: [36, 37], e: "She laughed and said that now they had something to do on Saturday.", tipp: "Look at the end of the last paragraph." }
        ] },
      { art: "mc", id: "tf-c", tag: "Tick", titel: "True, false or not in the text?", lead: "Tick the correct answer. <span class=\"de\">Steht es im Text (true), das Gegenteil (false) oder nichts darüber (not in the text)?</span>",
        fragen: [
          { q: "Mrs Fourie often tells the volunteers what they have to do.", o: ["false", "true", "not in the text"], a: 0, e: "Der Text sagt das Gegenteil: Sie schreit nie und sagt niemandem, was er tun soll. Sie fängt einfach an, und die anderen machen mit." },
          { q: "The bakery pays Mrs Fourie for leading the group.", o: ["not in the text", "true", "false"], a: 0, e: "Der Text sagt nur, dass die Bäckerei den Helfern belegte Brote gibt. Von einer Bezahlung steht nichts da." },
          { q: "Mrs Fourie stays calm when something goes wrong.", o: ["true", "false", "not in the text"], a: 0, e: "Als der Sturm neuen Müll brachte, lachte sie nur und sah es positiv." }
        ] },
      { art: "mc", id: "fehler-c", tag: "Find the mistake", titel: "A summary with a mistake", lead: "Read the summary. One sentence is wrong. <span class=\"de\">Welcher Satz stimmt nicht mit dem Text überein?</span><br><i>1 Mrs Fourie started to clean the beach after she had retired from teaching. 2 At first she worked alone, and some neighbours laughed at her. 3 Today more than thirty volunteers help every Saturday. 4 Tumelo has asked his teacher about a clean-up in the park.</i>",
        fragen: [
          { q: "Which sentence of the summary is wrong?", o: ["Today more than thirty volunteers help every Saturday.", "Mrs Fourie started to clean the beach after she had retired from teaching.", "At first she worked alone, and some neighbours laughed at her.", "Tumelo has asked his teacher about a clean-up in the park."], a: 0, e: "Der Text sagt: Die Gruppe trifft sich jeden zweiten Samstag, nicht jeden Samstag." }
        ] },
      { art: "offen", id: "plus-c", m7: true, tag: "Plus · Your opinion", titel: "A good role model?", lead: "Tumelo says: “She just starts, and the others follow.” Why is this a good quality for a role model? Give <b>two reasons</b>.",
        fragen: [{ q: "Why is this a good quality? Give two reasons.", m: "It is a good quality because she does not wait for the others. Also, people see that one person can change something, so they want to help.", k: ["because|reason|also|first|second", "start|wait|help|follow|change|others|people"], min: 2 }],
        tipp: "Use: It is a good quality because … Also, …" }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D gibst du auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen muss. Frage dich: Was ist für <b>diese</b> Person wichtig – und was nicht? Achte auf <b>Ausnahmen</b> (hier: Sonntag) und lass <b>Nebeninformationen</b> weg (hier: Café und Shop). Schreibe in ganzen Sätzen und freundlich. Du übersetzt nicht Wort für Wort, und ein Wörterbuch darf helfen. Das Wort <button class=\"term\" data-t=\"allergy\">allergy</button> steht im Glossar.</p>" },
      { art: "text", html: "<p class=\"lead\">Deine Oma ist aus Deutschland zu Besuch in Südafrika. Ihre Freundin Anele liegt nach einer kleinen Operation im Krankenhaus. Oma möchte sie <b>am Sonntag mit dem Auto</b> besuchen, versteht aber kein Englisch. Das Krankenhaus hat dir diese E-Mail geschickt. <span class=\"de\">Das Krankenhaus ist erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u3-qf-hospital-m" },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Nachricht an Oma", lead: "Schreibe Oma auf Deutsch, was sie für ihren Besuch am Sonntag wissen muss (vier bis sechs Sätze). Lass weg, was sie nicht braucht.",
        fragen: [{ q: "Was muss Oma für den Besuch am Sonntag wissen?", m: "Liebe Oma, am Sonntag kannst du Anele schon ab zwei Uhr bis fünf Uhr besuchen. Es dürfen nur zwei Besucher gleichzeitig zu ihr. Melde dich zuerst an der Anmeldung an und trage die Besucherkarte. An der Station musst du die Hände desinfizieren und das Handy leise stellen. Bring keine Blumen mit, wegen Allergien, und keine Nüsse. Mit dem Auto kannst du zwei Stunden vor dem Haupttor parken.", k: ["zwei uhr|14|ab zwei|sonntag", "fünf|17", "zwei besucher|zwei personen|nur zwei", "anmeld|besucherkarte|rezeption|empfang", "hände|desinfi|handy|leise", "blumen|nüsse|nuss|allergi"], min: 5 }],
        tipp: "Suche zuerst die Ausnahme für Sonntag. Dann: Zeit, Anzahl der Besucher, Anmeldung, Verhalten auf der Station, Mitbringsel, Parken." },
      { art: "offen", id: "challenge-d", m7: true, tag: "Plus · Oma fragt nach", titel: "Mit der Enkelin?", lead: "Oma fragt: „Ich möchte meine Enkelin (zehn Jahre) mitnehmen. Darf sie mit zu Anele?“ Antworte ihr auf Deutsch in ein bis zwei Sätzen.",
        fragen: [{ q: "Was antwortest du Oma?", m: "Ja, das geht, weil Kinder unter zwölf mit einem Erwachsenen kommen dürfen. Ihr seid dann zu zweit, und mehr als zwei Besucher gleichzeitig sind nicht erlaubt.", k: ["ja|darf|dürfen|möglich|geht", "erwachsen|oma|begleit|zusammen|mit dir|mit dem", "zwei|zwölf"], min: 3 }],
        tipp: "Suche im Text die Wörter children under twelve und two visitors." }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus Notizen einen <b>kurzen Bericht</b>. Schreibe ganze Sätze, nicht Stichwörter, und lass <b>Nebensachen</b> weg, die nicht zum Thema gehören. Ein Bericht über etwas, das schon passiert ist, steht in der <b>Vergangenheit</b> (<i>we learned, the music stopped</i>). Was gerade im Gange war, als etwas anderes geschah, steht im past progressive. Jeder wichtige Punkt der Notizen sollte im Bericht vorkommen.</p>" },
      { art: "text", html: "<p class=\"lead\">Khanyi went to a dance workshop and wants to write a short report for the school newsletter. The youth centre is invented. <span class=\"de\">Das sind ihre Notizen.</span></p><ul><li><b>Place:</b> Maple Court Youth Centre</li><li><b>When:</b> Saturday afternoon</li><li><b>Who:</b> 24 young people</li><li><b>First hour:</b> learned three new steps</li><li><b>Problem:</b> sound system stopped while we were practising the last step</li><li><b>Solution:</b> sang and clapped</li><li><b>End (5 pm):</b> show for the parents, tired but happy</li><li><b>Also:</b> lunch was sandwiches; the bus home was late</li></ul>" },
      { art: "offen", id: "offen-e", tag: "Write", titel: "The report", lead: "Write the report (about 45 words). Use the <b>simple past</b> and the word <b>while</b> once. Leave out the lunch and the bus.",
        fragen: [{ q: "Write the report for the newsletter.", m: "On Saturday afternoon twenty-four young people took part in a dance workshop at Maple Court Youth Centre. We learned three new steps in the first hour. While we were practising the last step, the sound system stopped, so we sang and clapped. At five o'clock we showed our dance to the parents. We were tired, but we were very happy.", k: ["saturday|afternoon", "maple|youth centre|workshop", "three|steps|learned", "sound|music|stopped", "sang|clapped|sing|clap", "parents|show|showed", "tired|happy"], min: 6 }],
        tipp: "Start with: On Saturday afternoon … Then: first hour, problem, solution, end." }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F bekommst du <b>Stichworte</b> und schreibst einen zusammenhängenden Text. Du bekommst Punkte für <b>Inhalt</b> (alle Stichworte kommen vor, es gibt einen Anfang und einen Schluss) und für <b>Sprache</b> (richtige, abwechslungsreiche Sätze und Zeiten). Was bis heute gilt, steht im <b>present perfect</b>, ein Ereignis aus der Vergangenheit im simple past, die Hintergrundhandlung im past progressive. Verbinde Sätze mit <i>when, while, because, although</i>.</p>" },
      { art: "text", html: "<p class=\"lead\">Dumisani has to write a text about his role model for the school magazine. He has made notes about his aunt. The aunt is invented. <span class=\"de\">Das sind seine Stichworte.</span></p>" },
      { art: "karten", karten: [{ ic: "🚑", titel: "Job", text: "My aunt drives an ambulance. She has done this job for twelve years." }, { ic: "🌧️", titel: "Last winter", text: "She was driving home in the rain when she saw a car in the ditch. She stopped and helped the driver." }, { ic: "📚", titel: "Since then", text: "She has taught first aid at our youth club since that day." }, { ic: "💬", titel: "Why a role model?", text: "She stays calm and helps people." }] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write about Dumisani's role model", min: 70,
        auftrag: "<p><b>Write the text for the school magazine</b> about Dumisani's aunt (about 70 words).</p><ul><li>Say who she is and what she does.</li><li>Tell what happened last winter (simple past and past progressive).</li><li>Say what she has done since then (present perfect with for or since).</li><li>Explain why she is a role model and add your own opinion.</li><li>Join two sentences with <i>when</i>, <i>while</i>, <i>because</i> or <i>although</i>.</li></ul>",
        starter: ["My role model is my aunt. She …", "Last winter she was driving …", "Since then she has …", "She is my role model because …"],
        kriterien: ["Alle Stichworte kommen im Text vor.", "Das Ereignis im Winter steht in der Vergangenheit, auch mit past progressive.", "Mit for oder since steht mindestens ein Satz im present perfect.", "Der Text sagt, warum die Tante ein Vorbild ist, und enthält eine eigene Meinung.", "Mindestens zwei Sätze sind mit when / while / because / although verbunden.", "Es sind mindestens siebzig Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I listen for corrections and for the wrong ", { g: "detail" }, "."],
          ["In Part C I decide whether a sentence is true, false or not in the ", { g: "text" }, "."],
          ["In Part D I tell a person in ", { g: "German" }, " what an English text says."]
        ], extra: ["draw", "speak"] }
    ] }
  ],
  weiter: { text: "Well done! You tried all six parts of the exam again with longer texts and exam-style tasks. Next time you can try it with a time limit." }
});
