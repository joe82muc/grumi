/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Topic 2: Life at school (Kürzel A12)
   (einen Dialog über den ersten Schultag lesen, Satzenden wählen und Textstellen finden, Kofis Schultag mit Uhrzeiten
   (a.m./p.m.), Reimwörter, ein Gespräch über AGs hören, simple present mit he/she/it -s und Verneinung, Fragen und Kurzantworten
   mit do/does, Kofi interviewen, Possessivpronomen – wem gehört was?)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Topic 2“, nur Aufbau, nichts übernommen): Dialog mit Zeilennummern → Satzhälften
   zuordnen → Schultag mit Bildimpulsen, Frage und Antwortsatz mit Lücke (a.m./p.m.) → Hören: Sätze mit drei Auswahlmöglichkeiten
   (AG, Person, Zeit, Wochentag) → Reimpaare → simple present mit Verbkasten (bejaht und verneint) → Partnerinterview mit
   do/does und Kurzantworten → Fragen zu Antworten → Language detectives Possessivpronomen → „Whose is it?“ → Umfrage.
   Eigene Personen und Situationen: Kofi ist neu an der Elmfield Academy, Hamza zeigt ihm alles (Robotik-AG, Schulgarten-AG,
   Lieblingsfach Food Technology bei Ms Bennett, Lunchbox statt Cafeteria); Hörtext Esme und Yasmin über Chor und Kletter-AG;
   eigene Reimpaare. Keine Buchmotive (kein vergessener Taschenrechner, keine Theater-AG, kein Cafeteria-Burger).
   Besser: Satzenden mit sofortiger Rückmeldung, Textstellen antippen, Uhrzeiten mit Hilfen in Stufen, Hören wie im Buch als
   Auswahl im Satz (R7 aus zwei, M7 aus drei – Prinzip der leichteren Kopiervorlage), Interview als Kette mit KI-Prüfung,
   Förder-Links an allen vier Grammatik- und Uhrzeit-Stellen.
   Differenzierung: Lesen in zwei Fassungen (R7 223, M7 326 Wörter), Hören in zwei Fassungen (R7 134, M7 216 Wörter);
   Plus für M7 (m7): Yasmins Grund mit eigenen Worten · zwei Fragen für eine Klassenumfrage (Task des Buchs).
   LehrplanPLUS E7 1.1 Leseverstehen (Dialog, Einzelheiten, Belegstellen), E7 1.2 Hörverstehen (Tag, Uhrzeit, Ort),
   E7 1.3 Sprechen (jemanden interviewen, Kurzantworten), E7 3 Grammatik G2 simple present (Aussagen, Verneinung, he/she/it -s),
   G3 Fragen und Kurzantworten mit do/does, G4 Possessivpronomen, E7 4 Aussprache (Reime) und Uhrzeiten, E7 5 (Schule in England).
   Texte: „Kofi's first day“ (texte/u1/u1-t2-firstday-r.js und -m.js) und „Choir or climbing?“ (texte/u1/u1-t2-clubs-r.js und
   -m.js). Personen und Schule erfunden.
   Förder-Links: he/she/it -s -> unit1/extra/he-she-it.html, Fragen mit do/does -> unit1/extra/do-does-questions.html,
   Possessivpronomen -> unit1/extra/possessive-pronouns.html, Uhrzeiten/Schultag -> unit1/extra/school-day-times.html.
   Rollen im Hörtext: Esme = Mädchen, Yasmin = Mädchen. Noch keine Aufnahme. Gesprächspartner der Kette: Kofi (Junge).
   // BILDER:
   // 1. Station „Get ready“ (Vorentlastung, Sprechanlass): Schulhof einer englischen Schule am Morgen – ein Junge mit neuer
   //    Schuluniform und Rucksack steht etwas unsicher am Eingang, ein Mitschüler mit Fahrradhelm in der Hand winkt ihm zu.
   // 2. Station „School day“ (ersetzt den Tagesplan): sechs kleine Bilder mit Uhren – Wecker, Bus an der Haltestelle,
   //    Schultor, Lunchbox auf dem Tisch in der Halle, Schulglocke, kleiner Roboter auf einem Tisch (Uhrzeiten ohne Text).
   // 3. Station „Listening“ (Vorentlastung): zwei Mädchen auf dem Schulflur vor einem Aushang mit einer Note (Chor) und einem
   //    Kletterseil (Kletter-AG), ohne lesbaren Text. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist
  const OHNE_DE = s => (s || "").replace(/<p><span class="de">.*?<\/span><\/p>/g, "").replace(/ ?<span class="de">.*?<\/span>/g, "");
  // Teile ohne eigene Fassung, die im Auftrag eine deutsche Hilfe haben: R7 behält sie und die Hilfen, M7 bekommt nur den
  // englischen Auftrag und keine Hilfen in Stufen
  function trenne(stationen) {
    stationen.forEach(st => {
      st.teile = st.teile.flatMap(t => {
        const hat = /class="de"/.test((t.lead || "") + (t.auftrag || ""));
        if (t.nur || !hat || t.art === "text" || t.art === "merke") return [t];
        const m = Object.assign({}, t, { nur: "M" });
        if (t.lead) m.lead = OHNE_DE(t.lead);
        if (t.auftrag) m.auftrag = OHNE_DE(t.auftrag);
        delete m.hilfen;
        return [Object.assign({}, t, { nur: "R" }), m];
      });
    });
    return stationen;
  }
  const FOERDER_S = { href: "unit1/extra/he-she-it.html", text: "Extra: he, she, it – das s muss mit" };
  const FOERDER_DO = { href: "unit1/extra/do-does-questions.html", text: "Extra: Fragen mit do und does" };
  const FOERDER_POSS = { href: "unit1/extra/possessive-pronouns.html", text: "Extra: mine, yours, his, hers" };
  const FOERDER_ZEIT = { href: "unit1/extra/school-day-times.html", text: "Extra: Uhrzeiten und Schultag" };

  // Interview mit Kofi – R7 mit Satzanfängen und Tipps in Stufen, M7 ohne Satzanfänge
  const KETTE_THEMA = "Interview mit dem neuen Mitschüler Kofi (Englisch 7, Mittelschule, simple present): Das Kind beantwortet eine Frage mit einer Kurzantwort und sagt, wie es zur Schule kommt; es fragt Kofi mit Do you …?, ob er Food Technology mag, und mit Does …?, ob sein Vater jeden Tag kocht";
  function kette(r) {
    const s = (start, tipps) => Object.assign(r && start ? { start } : {}, { tipps: r ? tipps : tipps.slice(0, 1) });
    return {
      art: "kette", id: "interview", nur: r ? "R" : "M", tag: "Interview · AI check", titel: "Interview the new student",
      lead: r ? `Write your part. <span class="de">Kofi fragt dich – dann fragst du ihn. Die Tipps helfen dir, die KI prüft jeden Beitrag.</span>` : "Write your part. Kofi asks you – then you ask him. The AI checks each message.",
      thema: KETTE_THEMA,
      rollen: { a: { name: "Kofi", ic: "👦" }, du: { name: "You" } },
      schritte: [
        { von: "a", text: "Hi! I'm Kofi, the new student in 8B. Can I ask you something? Do you come to school by bus?" },
        Object.assign({ an: "a", sprache: "en", auftrag: "Answer Kofi with a short answer. Then say how you get to school." + (r ? ` <span class="de">Kurzantwort (Yes, I do. / No, I don't.) und dann, wie du zur Schule kommst.</span>` : ""),
          kriterien: ["antwortet mit einer Kurzantwort (Yes, I do. / No, I don't.)", "sagt, wie er oder sie zur Schule kommt"],
          m: "No, I don't. I walk to school with my friend.", k: ["yes, i do|yes i do|no, i don't|no i don't|no, i do not|no i do not|no, i dont|no i dont", "bus|bike|walk|foot|car|train|tram|scooter"] },
          s("", ["Zwei Teile: die <b>Kurzantwort</b> – und <b>wie</b> du zur Schule kommst.", "Yes, I do. / No, I don't. · I walk / I ride my bike / My mum drives me / I catch the bus …"])),
        { von: "a", text: "Cool! I catch the bus at ten to eight. Here at Elmfield we have Food Technology every Tuesday." },
        Object.assign({ an: "a", sprache: "en", auftrag: "Ask Kofi if he likes Food Technology. Use Do you …?" + (r ? ` <span class="de">Frage mit Do you …?</span>` : ""),
          kriterien: ["fragt mit Do you …?", "fragt, ob Kofi Food Technology mag"],
          m: "Do you like Food Technology?", k: ["do you", "like|love|enjoy", "food|technology|cooking|cook"] },
          s("Do you", ["Eine Frage: <b>Do you</b> + like + das Fach + <b>?</b>", "Do you like Food Technology?"])),
        { von: "a", text: "Yes, I do! I love cooking. At home my dad and I often cook together." },
        Object.assign({ an: "a", sprache: "en", auftrag: "Ask Kofi if his dad cooks every day. Use Does …?" + (r ? ` <span class="de">Frage mit Does …? – nach does steht die Grundform: cook.</span>` : ""),
          kriterien: ["fragt mit Does …?", "fragt, ob Kofis Vater jeden Tag kocht"],
          m: "Does your dad cook every day?", k: ["does", "your dad|he|your father|your daddy", "cook|cooks|cooking"] },
          s("Does your dad", ["Eine Frage: <b>Does</b> + your dad + <b>cook</b> (ohne s!) + every day?", "Does your dad cook every day?"])),
        { von: "a", text: "No, he doesn't. He only cooks at the weekend. On Saturdays we make pizza together – come and try it one day!" }
      ]
    };
  }

  D7Kit.seite({
    id: "u1-topic2",
    titel: "Topic 2 · Life at school",
    einleitung: "Kofi is new at Elmfield Academy, and Hamza shows him around: the bus, the clubs, the lunch, a lunchbox that isn't theirs. You read their dialogue, find out about Kofi's school day, listen to two girls who talk about their clubs – and then you interview Kofi.",
    zeit: "etwa 45 Minuten",
    ziele: ["🏫 I understand a dialogue about a first day at school.", "🕗 I talk about a school day with times (a.m. / p.m.).", "🎧 I understand two girls who talk about their clubs.", "❓ I ask and answer questions with do and does.", "🎒 I say whose things are: mine, yours, hers …"],
    thema: "Unit 1 Out and about in England: Topic 2 (Schulleben in England, simple present, do/does, Possessivpronomen)",
    quiz: { profi: "School pro" },
    glossar: {
      robotics: ["robotics club", "In einem robotics club baut und steuert man kleine Roboter. Club heißt hier AG."],
      foodtech: ["Food Technology", "Food Technology ist ein Schulfach in England: Man lernt kochen und gesund essen."],
      lunchbox: ["lunchbox", "Eine lunchbox ist eine Brotdose für das Mittagessen in der Schule."],
      hall: ["hall", "Die hall ist ein großer Saal in der Schule. Dort essen viele Schulen zu Mittag."],
      ampm: ["a.m. / p.m.", "a.m. steht für die Zeit vor 12 Uhr mittags (morgens), p.m. für die Zeit nach 12 Uhr (nachmittags und abends): 7.50 a.m. = 7:50 Uhr, 3.15 p.m. = 15:15 Uhr."],
      choir: ["choir", "Ein choir ist ein Chor. Man spricht das Wort ungefähr „KWAI-er“."],
      rhyme: ["rhyme", "Zwei Wörter reimen sich (rhyme), wenn sie am Ende gleich klingen – auch wenn man sie anders schreibt: eight – late."],
      possessive: ["possessive pronoun", "Ein Possessivpronomen sagt, wem etwas gehört, und steht ohne Nomen: mine, yours, his, hers, ours, theirs."]
    },
    haupttext: { R: "u1-t2-firstday-r", M: "u1-t2-firstday-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "A new school", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>the first day at a new school</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-t2-tor.jpg\" width=\"1280\" height=\"853\" alt=\"In front of an English school in the morning: a boy in a new school uniform stands a bit unsure at the entrance; another boy smiles and waves to him.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is the new student? How does he feel? What do you want to know about the new school? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Kofi and his family lived in London. Now Kofi is new at <b>Elmfield Academy</b>, a school in a smaller town. On his first day, Hamza shows him around. <span class="de">Kofi ist neu an der Schule, Hamza zeigt ihm alles. Die beiden und die Schule sind erfunden.</span></p><p>What do you want to know on your first day at a new school? <span class="de">Überlege kurz: Was würdest du am ersten Tag fragen?</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du im Dialog.</span>`,
          paare: [["to catch the bus", "den Bus nehmen"], ["It takes twenty minutes.", "Es dauert zwanzig Minuten."], ["subject", "Schulfach"], ["club", "AG"], ["to grow vegetables", "Gemüse anbauen"], ["healthy", "gesund"], ["lunchbox", "Brotdose"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Zwei Wendungen haben mit dem Schulweg zu tun.", "„to take“ heißt hier nicht „nehmen“, sondern „dauern“."] }
      ] },
      { kurz: "First day", ober: "Reading", titel: "Kofi's first day", teile: [
        { art: "text", html: `<p class="lead">Read the dialogue. Don't stop at words you don't know. <span class="de">Lies den Dialog einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u1-t2-firstday-r", M: "u1-t2-firstday-m" } },
        { art: "mc", id: "enden", tag: "Sentence endings", titel: "Choose the right ending", lead: `Choose the right ending for each sentence. <span class="de">Welches Satzende passt zum Dialog?</span>`,
          fragen: [
            { q: "Kofi comes to school …", o: ["by bus.", "by bike.", "on foot.", "by car."], a: 0,
              e: "Kofi catches the bus at 7.50. Hamza rides his bike, and his sister walks." },
            { q: "Hamza's favourite subject is …", o: ["Food Technology.", "Maths.", "Art.", "PE."], a: 0,
              e: "Hamza loves Food Technology – they cook something every Tuesday." },
            { q: "The school garden club …", o: ["grows vegetables for the school kitchen.", "builds small robots.", "cooks soup every Tuesday.", "meets on Thursdays after school."], a: 0,
              e: "The garden club grows vegetables. The robotics club builds robots and meets on Thursdays." }
          ] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the dialogue say that?", lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`, lesetext: "u1-t2-firstday-r",
          hilfen: ["Lies die Frage und suche ein passendes Wort im Dialog: job, lunch.", "Frage 1: Kofi spricht über seine Mutter. Frage 2: Hamza antwortet auf „Where do we have lunch?“"],
          fragen: [
            { q: "Why did Kofi's family come to the town?", zeilen: [5, 6], e: "Kofi's mum has a new job here.", tipp: "Look at Kofi's first answer." },
            { q: "Where do the students have lunch?", zeilen: [23, 24], e: "They have lunch in the hall.", tipp: "Look for the word hall." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the dialogue say that?", lead: "Tap the lines with the answer.", lesetext: "u1-t2-firstday-m",
          fragen: [
            { q: "Why did Kofi's family move?", zeilen: [5, 6], e: "Kofi's mum got a new job here.", tipp: "Look at Kofi's first answer." },
            { q: "Who makes Kofi's lunchbox?", zeilen: [29, 29], e: "Kofi makes it himself – his mum doesn't.", tipp: "Look at Kofi's answer to Hamza's question about lunchboxes." }
          ] }
      ] },
      { kurz: "School day", ober: "Times and sounds", titel: "Kofi's school day", teile: [
        { art: "beispiel", kopf: "KOFI'S SCHOOL DAY", html: `<p>⏰ 6.45 a.m. – get up<br>🚌 7.50 a.m. – catch the bus<br>🏫 8.40 a.m. – school starts<br>🥪 12.30 p.m. – lunch in the hall<br>🔔 3.15 p.m. – school finishes<br>🤖 Thursdays: robotics club until 4.30 p.m.</p>` },
        { art: "merke", kopf: "TELLING THE TIME", html: `<p>7.10 = ten <b>past</b> seven · 7.15 = quarter <b>past</b> seven · 7.30 = <b>half past</b> seven<br>7.40 = twenty <b>to</b> eight · 7.45 = quarter <b>to</b> eight</p><p><b>a.m.</b> = in the morning (before twelve o'clock) · <b>p.m.</b> = in the afternoon and in the evening</p><p><span class="de">past = nach · to = vor · half past seven = halb acht!</span></p>` },
        { art: "luecke", id: "zeiten", tag: "School day", titel: "When does Kofi …?", foerder: FOERDER_ZEIT,
          lead: `Look at Kofi's school day. Complete the answers with the times in words. <span class="de">Schreibe die Uhrzeiten so, wie man sie sagt. Drei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["When does Kofi get up? – At ", { g: "quarter to seven" }, " in the morning."],
            ["When does he catch the bus? – At ", { g: "ten to eight" }, "."],
            ["How long does the bus take? – It takes about ", { g: "twenty minutes" }, "."],
            ["When does school start? – At ", { g: "twenty to nine" }, "."],
            ["When do the students have lunch? – At ", { g: "half past twelve" }, "."],
            ["When does school finish? – At ", { g: "quarter past three" }, "."],
            ["Is 3.15 p.m. in the morning or in the afternoon? – It's in the ", { g: "afternoon" }, "."]
          ], extra: ["quarter past seven", "half past one", "morning"],
          hilfen: ["Schau zuerst auf die Minuten: 15 = quarter, 30 = half, 45 = quarter to …", "6.45 = quarter to seven (Viertel vor sieben), 12.30 = half past twelve.", "Die Busfahrt steht nicht im Plan, aber im Dialog: It takes about …"] },
        { art: "merke", kopf: "SOUNDS", html: `<p>In English, words can <b>rhyme</b> even when you write them differently: <i>blue – two</i>, <i>wait – great</i>, <i>key – tree</i>. Say the words aloud – listen, don't look!</p>` },
        { art: "paare", id: "reime", tag: "Sounds", titel: "Which words rhyme?",
          lead: `Say the words aloud. Find the pairs that rhyme. <span class="de">Sprich die Wörter laut. Welche zwei Wörter reimen sich? Die Schreibung hilft dir nicht immer.</span>`,
          paare: [["eight", "late"], ["two", "shoe"], ["said", "red"], ["break", "make"], ["where", "chair"], ["son", "fun"]],
          hilfen: ["Sprich jedes Wort laut – achte nur auf den Klang am Ende.", "eight klingt wie „äit“, said klingt wie „sed“, son klingt wie „san“.", "Fang mit two an: Welches Wort klingt am Ende wie „tu“?"] }
      ] },
      { kurz: "Listening", ober: "Listening", titel: "Choir or climbing?", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>two clubs at school</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-t2-aushang.jpg\" width=\"1280\" height=\"853\" alt=\"Two girls stand in a school corridor in front of a notice board with two posters: one shows a big music note, the other a climbing wall with a rope.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What are the two clubs? Which club would you like to try? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Esme and Yasmin are in Kofi's class. Esme is in the school choir, Yasmin goes to a climbing club. <b>Read the sentences first, then listen.</b> You can use “slower”. <span class="de">Erst die Sätze lesen, dann hören. In jedem Satz wählst du die richtige Möglichkeit. Das Transkript kommt, wenn du fertig bist.</span></p>` },
        { nur: "R", art: "hoertext", id: "ags", tag: "🎧 Listening", hoertext: "u1-t2-clubs-r", fragen: [
          { art: "formular", id: "ags-wahl", titel: "Choose the right words", lead: `Listen and choose the right words. <span class="de">Es gibt zwei Möglichkeiten.</span>`,
            kopf: "Esme and Yasmin",
            felder: [
              { label: "The choir sings in the …", loesung: ["music room"], wahl: ["music room", "school hall"] },
              { label: "The choir meets on …", loesung: ["Mondays"], wahl: ["Fridays", "Mondays"] },
              { label: "Yasmin goes to the climbing club on …", loesung: ["Wednesdays"], wahl: ["Wednesdays", "Thursdays"] },
              { label: "The climbing club finishes at …", loesung: ["five o'clock"], wahl: ["half past four", "five o'clock"] },
              { label: "At the end, Esme wants to …", loesung: ["try climbing"], wahl: ["try climbing", "stop singing"] }
            ] }
        ] },
        { nur: "M", art: "hoertext", id: "ags", tag: "🎧 Listening", hoertext: "u1-t2-clubs-m", fragen: [
          { art: "formular", id: "ags-wahl", titel: "Choose the right words", lead: "Listen and choose the right words. There are three options.",
            kopf: "Esme and Yasmin",
            felder: [
              { label: "The choir practises …", loesung: ["on Mondays at lunchtime"], wahl: ["on Mondays after school", "on Mondays at lunchtime", "on Fridays at lunchtime"] },
              { label: "In December the choir …", loesung: ["sings at the school concert"], wahl: ["goes to London", "makes a film", "sings at the school concert"] },
              { label: "The climbing club meets …", loesung: ["at the sports centre on Wednesdays"], wahl: ["at the sports centre on Wednesdays", "at school on Wednesdays", "at the sports centre on Thursdays"] },
              { label: "At the sports centre you can borrow …", loesung: ["special shoes"], wahl: ["sports clothes", "special shoes", "a bottle of water"] },
              { label: "At the end, Esme decides to …", loesung: ["try climbing on Wednesday"], wahl: ["leave the choir", "try climbing on Wednesday", "buy special shoes"] }
            ] },
          { art: "offen", id: "grund", m7: true, tag: "Challenge · Your words", titel: "Why not the choir?", lead: "Answer in English. One sentence is enough.",
            fragen: [{ q: "Why doesn't Yasmin want to join the choir? Answer in your own words.", m: "She thinks she can't sing well – she says she sounds like a cat.", k: ["sing|singing|sound|sounds|voice", "can't|cannot|not good|bad|cat|terrible|badly|not well"], min: 2 }],
            tipp: "What does Yasmin say about her singing? Start like this: She thinks she …" }
        ] }
      ] },
      { kurz: "Language", ober: "Simple present · do/does · mine, yours", titel: "Grammar in the dialogue", teile: [
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<ul><li><b>he / she / it – the -s must go on:</b> <i>Kofi <u>catches</u> the bus. Hamza <u>likes</u> robots.</i> Negative: <b>doesn't + base form</b>: <i>He <u>doesn't ride</u> a bike.</i> (I / you / we / they: <i>don't</i>)</li><li><b>Questions with do / does:</b> <i><u>Do</u> you come by bus? – No, I <u>don't</u>.</i> · <i><u>Does</u> Kofi like cooking? – Yes, he <u>does</u>.</i> · <i>What <u>do</u> you do after school?</i> After does: <b>no -s</b> (<i>Does he cook?</i> – not <s>Does he cooks?</s>).</li><li><b>Possessive pronouns</b> stand <b>without a noun</b>: <i>Is it <u>yours</u>? – No, it isn't <u>mine</u>.</i><br>my → <b>mine</b> · your → <b>yours</b> · his → <b>his</b> · her → <b>hers</b> · our → <b>ours</b> · their → <b>theirs</b></li></ul>` },
        { art: "luecke", id: "verben", tag: "Simple present", titel: "School life at Elmfield", foerder: FOERDER_S,
          lead: `Complete the sentences with verbs from the box. <span class="de">he, she, it – das s muss mit! Zwei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["Hamza ", { g: "rides" }, " his bike to school."],
            ["His sister ", { g: "walks" }, " to her school – she doesn't ride a bike."],
            ["Ms Bennett ", { g: "teaches" }, " Food Technology."],
            ["She ", { g: "doesn't give" }, " much homework."],
            ["The robotics club ", { g: "meets" }, " on Thursdays after school."],
            ["The garden club ", { g: "grows" }, " vegetables for the school kitchen."],
            ["Kofi ", { g: "doesn't buy" }, " a hot lunch – he brings a lunchbox."]
          ], extra: ["ride", "don't give"],
          hilfen: ["In jedem Satz geht es um he, she oder it – das Verb bekommt ein -s.", "Zwei Sätze sind verneint: doesn't + Grundform (doesn't give, doesn't buy).", "teach bekommt -es: teaches."] },
        { art: "luecke", id: "fragen", tag: "Questions and short answers", titel: "Questions for the answers", foerder: FOERDER_DO,
          lead: `Complete the questions and short answers. <span class="de">Do oder does? Die Antwort hilft dir. Drei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["", { g: "Does Hamza" }, " ride his bike to school? – Yes, he does."],
            ["Do you like Food Technology? – ", { g: "Yes, I do" }, "."],
            ["", { g: "When does" }, " the robotics club finish? – At half past four."],
            ["Does Ms Bennett give much homework? – ", { g: "No, she doesn't" }, "."],
            ["", { g: "Where do" }, " the students have lunch? – In the hall."],
            ["Do Kofi and Hamza bring lunchboxes? – ", { g: "Yes, they do" }, "."]
          ], extra: ["Do Hamza", "Yes, I does", "When do"],
          hilfen: ["he, she, it (Hamza, Ms Bennett, the club) → does · I, you, we, they → do.", "Die Kurzantwort wiederholt do oder does: Yes, I do. / No, she doesn't.", "Ist die Antwort eine Uhrzeit, fragst du mit When, ist sie ein Ort, mit Where."] },
        kette(true),
        kette(false),
        { art: "mc", id: "wem", tag: "Whose is it?", titel: "mine, yours, hers …", foerder: FOERDER_POSS,
          lead: `Tick the right word. <span class="de">Das Possessivpronomen steht ohne Nomen.</span>`,
          fragen: [
            { q: "Kofi finds a pencil case under Hamza's chair: \"Hamza, is this pencil case ____?\"", o: ["yours", "your", "you", "you're"], a: 0,
              e: "Nach dem Wort steht kein Nomen mehr – also yours (deins). Your braucht ein Nomen: your pencil case." },
            { q: "Esme's songbook is pink. Yasmin holds a green songbook: \"This isn't Esme's songbook. It isn't ____.\"", o: ["hers", "her", "his", "she"], a: 0,
              e: "Esme ist ein Mädchen, und danach steht kein Nomen: hers (ihres)." },
            { q: "The helmets belong to the climbing club, not to Yasmin and Esme. Yasmin says: \"These helmets aren't ____.\"", o: ["ours", "our", "us", "we"], a: 0,
              e: "Yasmin spricht für sich und Esme (wir), und danach steht kein Nomen: ours (unsere)." }
          ] },
        { art: "offen", id: "umfrage", m7: true, tag: "Challenge · Survey", titel: "A survey about school life",
          lead: `Write <b>two questions</b> for a class survey: one with <b>Do you …?</b> and one with a question word (When / How / What … do you …?). <span class="de">Zwei Fragen für eine Umfrage in deiner Klasse.</span>`,
          fragen: [{ q: "Write two questions for a survey about school life.", m: "Do you bring a lunchbox to school? When do you get up on school days?", k: ["do you", "when|how|what|where|which|who|why"], min: 2 }],
          tipp: "Start like this: Do you … to school? / How do you get to school? / What time do you …?" }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know", lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Hamza's sister goes to a school next to Elmfield Academy.", true],
            ["In Food Technology, the class cooks something every Friday.", false],
            ["The lunchbox on the table belongs to Ms Bennett.", true],
            ["With he, she and it, the verb in the simple present gets an -s: Hamza rides his bike.", true],
            ["The short answer to \"Does Kofi like Food Technology?\" is \"Yes, he likes.\"", false],
            ["Mine, yours and hers stand without a noun: The book is mine.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can talk about a school day, ask and answer questions with do and does, and say whose things are." }
  });
})();
