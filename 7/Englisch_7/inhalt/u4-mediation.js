/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Mediation: A summer camp for you? (Kürzel D12)
   (Sprachmittlung Englisch → Deutsch: Die Webseite eines erfundenen Sommercamps in Vermont lesen, die Fragen der Eltern auf
   Deutsch beantworten – erst die Stelle finden, Wichtiges von Unwichtigem trennen, dann im Gespräch mit Mama und Papa sagen,
   was sie wissen müssen; danach das englische Anmeldeformular ausfüllen; zum Schluss auf Englisch sagen, was man im Camp am
   liebsten machen würde, mit much/many und more/most. Besser als das Buch: Plus für M7 in der Gegenrichtung Deutsch → Englisch
   am Telefon des Camps.)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „Mediation“, nur Aufbau, nichts übernommen): englische Camp-Webseite → deutsche Fragen
   der Eltern auf Deutsch beantworten (Strategie: nicht alles ist nötig – Fragen lesen, gezielt suchen, Stichpunkte) → ein
   Anmeldeformular lesen und Formularwörter verstehen. Besser: Situation und Adressaten werden zuerst geklärt, das gezielte
   Suchen wird geübt (Zeilen antippen), das Auswählen auch (wichtig für die Eltern / nicht nötig), die Antworten an die Eltern
   prüft die KI auf Inhalt und Verständlichkeit (nicht Wort für Wort), Tipps in Stufen, das Formular wird wirklich ausgefüllt
   (mit Mamas deutschem Zettel als Vorlage) und sofort geprüft; eine Station „Your turn“ verbindet das Thema mit G10/G11.
   Andere Situation als im Buch: Die Familie besucht im Juli eine Tante in Vermont; nicht jeder Termin passt (Auswahl nach der
   Lage der Familie), Zelte statt Holzhütten, handyfreies Camp, Bus vom Flughafen und Camp-Laden als Unwichtiges.
   Differenzierung: andere Fassung der Webseite (R7 247 Wörter, M7 378 Wörter mit Einzelheiten, die man weglassen muss) mit
   eigenen Zeilenangaben; R7 mit deutschen Hilfen, Satzanfängen und drei Tipps je Beitrag, Formular nur mit Auswahllisten;
   M7 mit einem vierten Elternbeitrag (Handy-Regel), einem Formular mit freien Feldern (Alter, Essen, Allergien), vier
   Antworten bei much/many und einem Satz mehr bei „Your turn“ (less/least).
   Plus für M7 (m7): Papa möchte wissen, ob die Eltern zu Besuch kommen dürfen – das Kind fragt am Telefon auf Englisch und gibt
   die Antwort auf Deutsch weiter (für R7 freiwillig, mit Satzanfängen).
   LehrplanPLUS E7 Sprachmittlung (Informationen aus einer englischen Webseite sinngemäß auf Deutsch weitergeben, Adressat und
   Situation beachten, Wichtiges auswählen), E7 1.1 Leseverstehen (Webseite, Formular), E7 2.2 Schreiben (Formular ausfüllen),
   E7 1.3 Sprechen (Vorlieben mit Begründung), E7 3 (G10 more/most, less/least; G11 much/many, too much, so many).
   Texte: u4-med-camp-r / u4-med-camp-m (Webseite). Camp, Hund Moose und die Telefonistin Kelsey sind erfunden; Vermont, die
   Green Mountains und Burlington gibt es wirklich (Burlington hat einen Flughafen). Keine echten Firmen.
   Förder-Links: much/many → unit4/extra/much-many.html, more/most → unit4/extra/comparison.html.
   Wörter der Unit bis zum Text (camp, trip, state, national park, beautiful, to share, useful, leader, rock, wave, dollar,
   percent, the most, less, much, many) kommen bewusst vor; neu und im Glossar erklärt: session, canoeing, first aid, nurse,
   lifeguard, phone-free (dazu Formularwörter: form, date of birth, signature).
   BILDER:
   1. Station „Get ready“ (Vorentlastung/Sprechanlass): ein stiller See zwischen bewaldeten Bergen, am Ufer große weiße Zelte
      unter Bäumen, bunte Kanus im Sand, eine Feuerstelle mit Holzbänken – ohne Schrift und ohne Logo.
   2. Station „Tell your parents“ (Situation): eine Familie am Küchentisch; ein Kind (13) zeigt auf einem Tablet eine Camp-Webseite,
      die Mutter schaut neugierig, der Vater runzelt die Stirn und hält einen Kalender mit dem Monat Juli.
   3. Station „Sign up“ (Formular): ein Klemmbrett mit einem halb ausgefüllten Anmeldeformular, daneben ein Schlafsack, eine
      Schwimmbrille und eine Taschenlampe auf einem Holztisch. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
D7Kit.seite({
  id: "u4-mediation",
  titel: "Mediation: A summer camp for you?",
  einleitung: "Your family is going to visit your aunt in <b>Vermont</b> in the USA. She has found a <b>summer camp</b> for you – but your parents don't speak much English. <b>You help them</b>: you read the camp website and answer their questions in German. Du lernst, gezielt zu suchen, das Wichtige auszuwählen und es einfach zu sagen – nicht Wort für Wort.",
  zeit: "etwa 45 Minuten",
  ziele: ["🌉 I help my parents when they don't understand an English website.", "🔎 I read their question first and find the answer quickly.", "✂️ I pick the important information and leave the rest out.", "📝 I fill in an English form.", "🗣️ I say what I would like to do at the camp – with much, many, more and most."],
  thema: "Unit 4 USA – here we come!, Mediation: eine englische Camp-Webseite für die Eltern auf Deutsch erklären, Anmeldeformular",
  quiz: { profi: "Camp helper" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst weiter, was in einem englischen Text steht – auf Deutsch, für jemanden, der kein Englisch versteht. Nicht Wort für Wort, sondern das Wichtige."],
    session: ["session", "Durchgang, Termin: So nennt das Camp die Zeit, in der eine Gruppe von Kindern dort ist."],
    canoeing: ["canoeing", "Kanufahren: Man sitzt in einem schmalen Boot und paddelt."],
    firstaid: ["first aid", "Erste Hilfe: Das ist die schnelle Hilfe bei einem Unfall, bis ein Arzt kommt."],
    nurse: ["nurse", "Krankenschwester oder Krankenpfleger: Diese Person kümmert sich um kranke und verletzte Menschen."],
    lifeguard: ["lifeguard", "Rettungsschwimmer: Diese Person passt am Wasser auf, dass niemandem etwas passiert."],
    phonefree: ["phone-free", "handyfrei: An diesem Ort benutzt man kein Handy."],
    form: ["form", "Formular: Darin trägt man Angaben ein, zum Beispiel für eine Anmeldung."],
    birth: ["date of birth", "Geburtsdatum: Das ist der Tag, an dem du geboren bist."],
    signature: ["signature", "Unterschrift: Man schreibt seinen Namen mit der Hand auf ein Papier."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "A summer camp in Vermont?", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-med-see.jpg\" width=\"1280\" height=\"853\" alt=\"A quiet lake between wooded mountains: big white tents under the trees, colourful canoes on the sand and a fire pit with wooden benches.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a quiet lake in the mountains</b>, big white tents under the trees and canoes on the beach. <span class=\"de\">Sieh dir das Bild an.</span></p><p>What can children do there? Would you like to stay there for a week or two? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Your family is going to visit your aunt in <b>Vermont</b> from <b>1 to 25 July</b>. Your aunt sends a link: <b>Camp Silver Lake</b>, a summer camp one hour from her house. She can drive you there. But your parents don't speak much English. <span class=\"de\">Deine Familie besucht vom 1. bis 25. Juli deine Tante in Vermont im Nordosten der USA. Sie schickt euch den Link zu einem Sommercamp – eine Stunde von ihrem Haus entfernt; sie kann dich mit dem Auto hinbringen. Deine Eltern sprechen nicht viel Englisch. Du liest die Webseite und beantwortest ihre Fragen auf Deutsch. Das heißt <button class=\"term\" data-t=\"mediation\">Mediation</button>.</span></p>" },
      { art: "merke", kopf: "MEDIATION – SO GEHT'S", html: "<ol><li><b>Read the question first.</b> Was genau wollen Mama oder Papa wissen?</li><li><b>Look for the answer.</b> Die Überschriften der Webseite (DATES AND PRICES, SAFETY …) zeigen dir, wo du suchen musst.</li><li><b>Pick the important things.</b> Termine, Preise, Regeln – und was zu eurer Lage passt. Den Rest lässt du weg.</li><li><b>Say it simply – in German.</b> Kurze Sätze, wie du mit deinen Eltern sprichst. Keine Wort-für-Wort-Übersetzung.</li></ol>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du gleich auf der Webseite.</span>",
        paare: [["session", "Termin, Durchgang"], ["canoeing", "Kanufahren"], ["first aid", "Erste Hilfe"], ["nurse", "Krankenschwester"], ["lifeguard", "Rettungsschwimmer"], ["meal", "Mahlzeit"]],
        hilfen: ["Fang mit dem Wort an, das du sicher kennst.", "first aid hilft bei einem Unfall, ein lifeguard passt am Wasser auf.", "Frühstück, Mittagessen und Abendessen sind meals."] },
      { art: "mc", id: "situation", tag: "Think first", titel: "Who do you help – and what do they need?", lead: "Tick the best answer. <span class=\"de\">Erst die Situation klären, dann lesen.</span>",
        fragen: [
          { q: "Who do you help in this situation?", o: ["Your parents, who don't speak much English", "Your aunt, who lives in Vermont", "The camp leaders at the lake", "Your English teacher at school"], a: 0,
            e: "Du vermittelst für deine Eltern: Sie verstehen die englische Webseite nicht gut und wollen entscheiden, ob du ins Camp darfst." },
          { q: "Was wollen deine Eltern wissen, bevor sie dich anmelden?", o: ["Wann es ist, was man dort macht, wo man schläft, was es kostet und wer aufpasst", "Jedes Wort der Webseite auf Deutsch", "Wie der Camp-Hund heißt und was er gern macht", "Welche T-Shirts es im Camp-Laden gibt"], a: 0,
            e: "Deine Eltern wollen entscheiden: Termin, Programm, Unterkunft, Preis und Sicherheit. Eine Wort-für-Wort-Übersetzung hilft ihnen nicht." }
        ] }
    ] },
    { kurz: "Read", ober: "Station 2", titel: "Read the website", teile: [
      { art: "text", html: "<p class=\"lead\">Here is the website of the camp. Read it once. Don't stop at every word you don't know. <span class=\"de\">Lies die Webseite einmal ganz. Bleib nicht an unbekannten Wörtern hängen – manche stehen im Glossar (antippen).</span></p><p>A <button class=\"term\" data-t=\"session\">session</button> is the time when a group of campers is at the camp. A <button class=\"term\" data-t=\"nurse\">nurse</button> and the <button class=\"term\" data-t=\"lifeguard\">lifeguards</button> help when somebody is hurt. At a <button class=\"term\" data-t=\"phonefree\">phone-free</button> camp nobody uses a phone.</p>" },
      { art: "lesetext", lesetext: { R: "u4-med-camp-r", M: "u4-med-camp-m" } },
      { art: "mc", id: "textart", tag: "The main idea", titel: "What is it?", lead: "Tick the correct answer. <span class=\"de\">Was ist das für ein Text?</span>",
        fragen: [
          { q: "What kind of text is this?", o: ["The website of a summer camp", "A letter from your aunt", "A newspaper article about Vermont", "The diary of a camp leader"], a: 0,
            e: "Es ist eine Webseite: Überschriften in Großbuchstaben, Termine, Preise und Regeln. So einen Text liest man gezielt – man sucht, was man braucht." }
        ] },
      { art: "text", html: "<p class=\"lead\">Your parents ask questions. Find the answer in the text first. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht – so findest du Wichtiges schnell. Die Überschriften helfen dir.</span></p>" },
      { art: "beleg", id: "zeilen", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Danach kannst du die Stelle auch angeben, zum Beispiel so: (ll. 9–11) = Zeilen 9 bis 11.</span>", lesetext: "u4-med-camp-r",
        fragen: [
          { q: "Mama fragt: „Wo schlafen die Kinder – und mit wie vielen anderen?“", zeilen: [14, 15], e: "Unter WHERE YOU SLEEP steht: in großen Zelten mit richtigen Betten, vier Kinder im gleichen Alter in einem Zelt.", tipp: "Suche die Überschrift WHERE YOU SLEEP." },
          { q: "Papa fragt: „Darfst du dein Handy im Camp behalten?“", zeilen: [28, 29], e: "Unter PHONES steht: Das Camp ist handyfrei, die Handys bleiben im Büro. Anrufen darf man sonntags.", tipp: "Suche die Überschrift PHONES." }
        ],
        hilfen: ["Suche zuerst die Überschrift, die zur Frage passt (WHERE YOU SLEEP, PHONES …).", "Lies nur diesen Abschnitt, nicht die ganze Webseite.", "Tippe die Zeilen unter der Überschrift an, in denen die Antwort steht, und prüfe dann."] },
      { art: "beleg", id: "zeilen", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer.", lesetext: "u4-med-camp-m",
        fragen: [
          { q: "Mama fragt: „Wo schlafen die Kinder – und mit wie vielen anderen?“", zeilen: [19, 20], e: "Unter WHERE YOU SLEEP steht: in großen Zelten mit Holzboden und richtigen Betten, vier Kinder im gleichen Alter in einem Zelt.", tipp: "Suche die Überschrift WHERE YOU SLEEP." },
          { q: "Papa fragt: „Gibt es dort auch Essen ohne Fleisch?“", zeilen: [30, 30], e: "Unter FOOD steht: There is always a vegetarian dish – es gibt immer ein vegetarisches Gericht.", tipp: "Suche die Überschrift FOOD und das Wort vegetarian." },
          { q: "Papa fragt: „Darfst du dein Handy im Camp behalten?“", zeilen: [40, 41], e: "Unter PHONES steht: Die Handys bleiben im Büro, anrufen darf man sonntags.", tipp: "Suche die Überschrift PHONES." }
        ] },
      { art: "text", html: "<p class=\"lead\">Not everything on the website is important for your parents. <b>Sort the information.</b> <span class=\"de\">Denk an eure Lage: Ihr seid vom 1. bis 25. Juli in Vermont, und deine Tante bringt dich mit dem Auto ins Camp. Was müssen deine Eltern wissen – und was kannst du weglassen?</span></p>" },
      { art: "sort", id: "wichtig", nur: "R", tag: "Important or not?", titel: "What do your parents need?", lead: "Put each piece of information in the right box. <span class=\"de\">Wichtig für die Eltern oder nicht nötig?</span>",
        hilfen: ["Frag dich: Hilft das deinen Eltern bei der Entscheidung – oder ist es nur eine Nebensache?", "Termin, Preis und Sicherheit sind wichtig.", "Den Bus brauchst du nicht, weil deine Tante dich fährt. Hund und T-Shirts sind Nebensachen."],
        buckets: ["Important for my parents", "Not necessary"],
        items: [{ t: "Session 2 is from 5 July to 18 July.", b: 0 }, { t: "Two weeks cost $1,300.", b: 0 }, { t: "A nurse is at the camp day and night.", b: 0 }, { t: "Lifeguards watch every swimmer.", b: 0 },
                { t: "The camp dog is called Moose.", b: 1 }, { t: "You can buy camp T-shirts and caps.", b: 1 }, { t: "A camp bus leaves Burlington Airport.", b: 1 }] },
      { art: "sort", id: "wichtig", nur: "M", tag: "Important or not?", titel: "What do your parents need?", lead: "Put each piece of information in the right box. Think about your family's plans.",
        buckets: ["Important for my parents", "Not necessary"],
        items: [{ t: "Session 2 is from 5 July to 18 July.", b: 0 }, { t: "Two weeks cost $1,300.", b: 0 }, { t: "Four campers share a tent.", b: 0 }, { t: "A nurse is at the camp day and night.", b: 0 }, { t: "Campers leave their phones in the office.", b: 0 },
                { t: "The camp opened in 1971.", b: 1 }, { t: "The camp dog loves the lake.", b: 1 }, { t: "Water bottles are for sale in the shop.", b: 1 }, { t: "A camp bus leaves Burlington Airport at 2 pm.", b: 1 }, { t: "It is one of the most popular camps in the north of Vermont.", b: 1 }] }
    ] },
    { kurz: "Tell your parents", ober: "Station 3", titel: "Say it in German", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a camp for the summer?</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-med-familie.jpg\" width=\"1280\" height=\"853\" alt=\"A family at the kitchen table: a boy shows his parents a camp website on a tablet; the mother looks curious, the father frowns and holds a calendar.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What does the boy show his parents? How do his mother and his father feel? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">First some facts in German. <span class=\"de\">Ergänze die deutschen Sätze mit Informationen von der Webseite. Danach stellen dir Mama und Papa ihre Fragen.</span></p>" },
      { art: "luecke", id: "fakten", tag: "In German", titel: "Facts about the camp", lead: "Fill in the gaps with the information from the website. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Das Camp ist für Mädchen und Jungen von ", { g: "10" }, " bis 15 Jahren."],
          ["Bis zum nächsten Ort fährt man ", { g: "zwanzig Minuten" }, " mit dem Auto."],
          ["Jeden Abend gibt es ein ", { g: "Lagerfeuer" }, " mit Liedern und Geschichten."],
          ["Im Camp gibt es jeden Tag ", { g: "drei" }, " warme Mahlzeiten."],
          ["", { g: "Geschwister" }, " zahlen zehn Prozent weniger."],
          ["Der Camp-Bus fährt am Flughafen in ", { g: "Burlington" }, " ab."]
        ], extra: ["vier", "Schwimmbad"],
        hilfen: ["Suche zu jedem Satz die passende Überschrift auf der Webseite.", "campfire = Lagerfeuer · meals = Mahlzeiten · brothers and sisters = Geschwister", "Die Zahl der Mahlzeiten steht unter FOOD, das Alter ganz oben."] },
      { art: "text", html: "<p class=\"lead\"><b>Now your parents ask you.</b> Answer them in German – short and simple. <span class=\"de\">Nach jeder Sprechblase schreibst du deine Antwort. Wähle aus, was wichtig ist, und lass Unwichtiges weg. Brauchst du Hilfe? Tippe auf „💡 Tipp“. Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist.</span></p>" },
      { art: "kette", id: "eltern", nur: "R", tag: "Mediation · AI check", titel: "Tell your parents about the camp", lead: "Write your part in German. <span class=\"de\">Sag es kurz und einfach. Der Satzanfang und die Tipps helfen dir.</span>",
        thema: "Sprachmittlung in der Familie (Englisch 7, Mittelschule): Das Kind erklärt seinen Eltern auf Deutsch die englische Webseite eines Sommercamps in Vermont (passender Termin, Aktivitäten, Unterkunft in Zelten, Preis, Aufsicht)",
        rollen: { a: { name: "Mama", ic: "👩" }, b: { name: "Papa", ic: "👨" }, du: { name: "You" } },
        schritte: [
          { von: "b", text: "Wir sind vom 1. bis 25. Juli bei deiner Tante. Wann ist das Camp, und welcher Termin passt für uns?" },
          { an: "b", sprache: "de", auftrag: "Tell your dad in German: which session fits and how long it is. <span class=\"de\">Sag Papa, welcher Termin passt, nenne die Daten und wie lange er dauert.</span>", start: "Für uns passt",
            kriterien: ["nennt den passenden Termin: Session 2 vom 5. bis 18. Juli", "sagt, dass er zwei Wochen dauert"],
            m: "Für uns passt der zweite Termin: vom 5. bis 18. Juli. Das sind zwei Wochen.", k: ["5.|5 juli|fünf|zweite|session 2", "18|zwei wochen|14 tage|vierzehn"],
            tipps: ["Ihr seid ab dem 1. Juli da. Welcher Termin beginnt <b>nach</b> dem 1. Juli?", "Schau unter DATES AND PRICES: Session 2 = der zweite Termin · 5 July to 18 July = 5. bis 18. Juli · two weeks = zwei Wochen", "Session 1 beginnt schon am 28. Juni – da seid ihr noch nicht da."] },
          { von: "a", text: "Und was macht man da den ganzen Tag? Und wo schläfst du dann?" },
          { an: "a", sprache: "de", auftrag: "Tell your mum in German: two or three activities and where you sleep. <span class=\"de\">Nenne zwei oder drei Aktivitäten und sag, wo man schläft.</span>", start: "Man kann",
            kriterien: ["nennt mindestens zwei Aktivitäten (zum Beispiel schwimmen, Kanu fahren, segeln, wandern, klettern, Kunst, Musik, Sport)", "sagt, wo man schläft: in großen Zelten, zu viert"],
            m: "Man kann schwimmen, Kanu fahren und im Wald wandern. Abends gibt es ein Lagerfeuer. Ich schlafe mit drei anderen Kindern in einem großen Zelt mit richtigen Betten.", k: ["schwimm|kanu|segel|wander|kletter|kunst|musik|theater|basketball|volleyball|sport", "zelt"],
            tipps: ["Zwei Fragen: <b>Was macht man?</b> (WHAT YOU CAN DO) – <b>Wo schläft man?</b> (WHERE YOU SLEEP)", "swimming = schwimmen · canoeing = Kanu fahren · hiking = wandern · climbing = klettern · tents = Zelte · four campers = vier Kinder", "Du musst nicht alle Aktivitäten nennen – zwei oder drei genügen."] },
          { von: "b", text: "Klingt gut. Aber was kostet das? Und wer passt auf euch auf – vor allem am See?" },
          { an: "b", sprache: "de", auftrag: "Tell your dad in German: the price and who looks after the campers. <span class=\"de\">Nenne den Preis für deinen Termin und sag, wer aufpasst.</span>", start: "Zwei Wochen kosten",
            kriterien: ["Preis: 1300 Dollar für zwei Wochen", "nennt mindestens eine Angabe zur Aufsicht: Betreuer ab 18 mit Erster Hilfe, Krankenschwester Tag und Nacht oder Rettungsschwimmer am See"],
            m: "Zwei Wochen kosten 1300 Dollar. Die Betreuer sind mindestens 18 Jahre alt und können Erste Hilfe. Am See passen Rettungsschwimmer auf, und es gibt Tag und Nacht eine Krankenschwester.", k: ["1300|1.300|1 300|1,300|dollar", "betreuer|erste hilfe|krankenschwester|rettungsschwimmer|18|aufpass|leiter"],
            tipps: ["Zwei Dinge: <b>der Preis</b> für zwei Wochen (DATES AND PRICES) und <b>wer aufpasst</b> (SAFETY).", "$1,300 = 1300 Dollar · camp leaders = Betreuer · first aid = Erste Hilfe · nurse = Krankenschwester · lifeguards = Rettungsschwimmer", "Den Rabatt für Geschwister und den Camp-Bus braucht Papa nicht."] },
          { von: "a", text: "Das klingt sicher. Gut, dann melden wir dich an!" }
        ] },
      { art: "kette", id: "eltern", nur: "M", tag: "Mediation · AI check", titel: "Tell your parents about the camp", lead: "Write your part in German. <span class=\"de\">Wie in einem echten Gespräch: kurz, einfach und nur das Wichtige. Bei Bedarf hilft dir ein Tipp.</span>",
        thema: "Sprachmittlung in der Familie (Englisch 7, Mittelschule): Das Kind erklärt seinen Eltern auf Deutsch die englische Webseite eines Sommercamps in Vermont (passender Termin, Aktivitäten, Unterkunft in Zelten, Preis, Aufsicht, Handy-Regel)",
        rollen: { a: { name: "Mama", ic: "👩" }, b: { name: "Papa", ic: "👨" }, du: { name: "You" } },
        schritte: [
          { von: "b", text: "Wir sind vom 1. bis 25. Juli bei deiner Tante. Wann ist das Camp, und welcher Termin passt für uns?" },
          { an: "b", sprache: "de", auftrag: "Tell your dad in German which session fits – and why the other one doesn't.",
            kriterien: ["nennt den passenden Termin: Session 2 vom 5. bis 18. Juli (zwei Wochen)", "sagt, warum Session 1 nicht passt (beginnt schon am 28. Juni, ihr kommt erst am 1. Juli) oder dass nur der zweite Termin in eure Reisezeit fällt"],
            m: "Für uns passt nur der zweite Termin: zwei Wochen vom 5. bis 18. Juli. Der erste fängt schon am 28. Juni an – da sind wir noch nicht in Vermont.", k: ["5.|5 juli|fünf|zweite|session 2", "18|zwei wochen|14 tage|vierzehn", "28|erste|session 1|noch nicht|zu früh"],
            tipps: ["Vergleiche die Termine unter DATES AND PRICES mit eurer Reise (1. bis 25. Juli). Welcher passt – und warum nicht der andere?"] },
          { von: "a", text: "Und was macht man da den ganzen Tag? Und wo schläfst du dann?" },
          { an: "a", sprache: "de", auftrag: "Tell your mum in German: some activities and where you sleep.",
            kriterien: ["nennt mindestens zwei Aktivitäten (zum Beispiel schwimmen, Kanu fahren, segeln, wandern, klettern, Kunst, Musik, Sport)", "sagt, wo man schläft: in großen Zelten, zu viert, Mädchen und Jungen getrennt"],
            m: "Man kann schwimmen, Kanu fahren, segeln und im Wald klettern. Ich schlafe mit drei anderen Kindern in meinem Alter in einem großen Zelt mit richtigen Betten. Mädchen und Jungen haben getrennte Zelte.", k: ["schwimm|kanu|segel|wander|kletter|kunst|musik|theater|basketball|volleyball|sport", "zelt"],
            tipps: ["Zwei Fragen – zwei Abschnitte: WHAT YOU CAN DO und WHERE YOU SLEEP. Wasserski und die Show am Ende brauchst du nicht."] },
          { von: "b", text: "Klingt gut. Aber was kostet das? Und wer passt auf euch auf – vor allem am See?" },
          { an: "b", sprache: "de", auftrag: "Tell your dad in German: the price and who looks after the campers.",
            kriterien: ["Preis: 1300 Dollar für zwei Wochen", "nennt mindestens eine Angabe zur Aufsicht: Betreuer ab 18 mit Erster Hilfe, Krankenschwester Tag und Nacht, Krankenhaus in der Nähe oder Rettungsschwimmer am See"],
            m: "Zwei Wochen kosten 1300 Dollar. Die Betreuer sind mindestens 18 und können Erste Hilfe. Tag und Nacht ist eine Krankenschwester da, und am See passen Rettungsschwimmer auf.", k: ["1300|1.300|1 300|1,300|dollar", "betreuer|erste hilfe|krankenschwester|rettungsschwimmer|18|aufpass|leiter|krankenhaus"],
            tipps: ["Preis unter DATES AND PRICES, Aufsicht unter SAFETY. Die Rabatte kannst du weglassen."] },
          { von: "a", text: "Das klingt sicher. Aber kannst du uns jeden Abend anrufen? Ich möchte wissen, wie es dir geht." },
          { an: "a", sprache: "de", auftrag: "Tell your mum in German what the camp says about phones.",
            kriterien: ["Das Camp ist handyfrei: Die Handys bleiben im Büro.", "Anrufen darf man nur sonntags."],
            m: "Nein, das Camp ist handyfrei. Wir geben unsere Handys im Büro ab und dürfen nur am Sonntag zu Hause anrufen. Aber ihr könnt jeden Tag neue Fotos auf der Webseite sehen.", k: ["handy|telefon", "sonntag"],
            tipps: ["Schau unter PHONES. Vielleicht tröstet Mama auch der letzte Satz dort."] },
          { von: "b", text: "Nur am Sonntag? Na gut – dafür gibt es ja die Fotos. Dann melden wir dich an!" }
        ] }
    ] },
    { kurz: "Sign up", ober: "Station 4", titel: "The registration form", teile: [
      { art: "text", html: "<p class=\"lead\">Your parents say yes! Now you fill in the <button class=\"term\" data-t=\"form\">form</button> together. Part 1 is about you. <span class=\"de\">Teil 1 des Formulars ist über dich. Deine Eltern fragen, was dort gemeint ist.</span></p>" },
      { art: "material", daten: { typ: "tabelle", titel: "Camp Silver Lake · Registration form · Part 1", kopf: ["About the camper", "Please write here"], reihen: [["First name", "…………"], ["Family name", "…………"], ["Date of birth", "…………"], ["Age", "…………"], ["Signature of parent", "…………"]] } },
      { art: "mc", id: "formwoerter", tag: "Form words", titel: "Where do your parents write?", lead: "Tick the correct line of the form. <span class=\"de\">Welche Zeile ist gemeint?</span>",
        fragen: [
          { q: "Papa fragt: „Wo trage ich deinen Geburtstag ein?“", o: ["Date of birth", "First name", "Signature of parent", "Family name"], a: 0,
            e: "Date of birth heißt Geburtsdatum: Dort steht der Tag, an dem du geboren bist." },
          { q: "Mama fragt: „Und wo muss ich unterschreiben?“", o: ["Signature of parent", "Date of birth", "Age", "Family name"], a: 0,
            e: "Signature ist die Unterschrift, parent ist ein Elternteil – hier unterschreibt Mama oder Papa." }
        ] },
      { art: "text", html: "<p class=\"lead\">Part 2 is about the camp. Your mum has written a note in German. <b>Fill in the form in English.</b> <span class=\"de\">Lies Mamas Zettel und trage die Angaben auf Englisch ins Formular ein.</span></p>" },
      { art: "formular", id: "anmeldung", nur: "R", titel: "Fill in the form", lead: "Choose the right answer for each line. <span class=\"de\">Wähle für jede Zeile die passende Antwort aus. Mamas Zettel hilft dir.</span>",
        karte: "<p><b>Mamas Zettel:</b> „Du gehst zwei Wochen ins Camp – zu dem Termin, der zu unserer Reise passt. Am liebsten bist du auf dem Wasser. Du isst kein Fleisch, und du hast eine Allergie gegen Nüsse. Du schwimmst sehr gut. Deine Tante bringt dich mit dem Auto hin.“</p>",
        kopf: "Camp Silver Lake · Registration form · Part 2",
        felder: [
          { label: "Session", wahl: ["Session 1 (28 June – 4 July)", "Session 2 (5 July – 18 July)"], loesung: ["Session 2 (5 July – 18 July)"] },
          { label: "Favourite place for activities", wahl: ["on the lake", "in the forest", "at the camp (art, music, sport)"], loesung: ["on the lake"] },
          { label: "Meals", wahl: ["normal meals", "vegetarian meals"], loesung: ["vegetarian meals"] },
          { label: "Allergies", wahl: ["no allergies", "nuts", "milk", "eggs"], loesung: ["nuts"] },
          { label: "Swimming", wahl: ["I can't swim yet.", "I can swim a little.", "I am a good swimmer."], loesung: ["I am a good swimmer."] },
          { label: "How do you get to camp?", wahl: ["by camp bus from Burlington Airport", "by car with my family"], loesung: ["by car with my family"] }
        ],
        hilfen: ["Lies Mamas Zettel Satz für Satz und suche die passende Zeile im Formular.", "auf dem Wasser = on the lake · kein Fleisch = vegetarian · Nüsse = nuts", "Deine Tante gehört zur Familie und fährt Auto – also nicht mit dem Camp-Bus."] },
      { art: "formular", id: "anmeldung", nur: "M", titel: "Fill in the form", lead: "Fill in each line in English. Short answers are fine. <span class=\"de\">Mamas Zettel hilft dir. In den freien Feldern genügen ein bis drei Wörter.</span>",
        karte: "<p><b>Mamas Zettel:</b> „Du bist 13. Du gehst zwei Wochen ins Camp – zu dem Termin, der zu unserer Reise passt. Am liebsten bist du auf dem Wasser. Du isst kein Fleisch, und du hast eine Allergie gegen Nüsse. Du schwimmst sehr gut. Deine Tante bringt dich mit dem Auto hin.“</p>",
        kopf: "Camp Silver Lake · Registration form · Part 2",
        felder: [
          { label: "Age", platz: "e.g. 11", loesung: ["13", "thirteen", "13 years", "13 years old", "thirteen years old", "i am 13", "i'm 13", "i am thirteen", "i'm thirteen", "13 y", "13 yrs"] },
          { label: "Session", wahl: ["Session 1 (28 June – 4 July)", "Session 2 (5 July – 18 July)"], loesung: ["Session 2 (5 July – 18 July)"] },
          { label: "Favourite place for activities", wahl: ["on the lake", "in the forest", "at the camp (art, music, sport)"], loesung: ["on the lake"] },
          { label: "Meals: normal or vegetarian?", platz: "e.g. normal", loesung: ["vegetarian", "vegetarian meals", "vegetarian food", "vegetarian, please", "vegetarian please", "veggie", "vegetarian (no meat)", "no meat", "no meat, please", "vegetarian dish", "vegetarian dishes", "i am vegetarian", "i'm vegetarian", "i eat no meat", "i don't eat meat"] },
          { label: "Allergies", platz: "e.g. eggs", loesung: ["nuts", "nut", "nut allergy", "nuts allergy", "a nut allergy", "allergic to nuts", "i am allergic to nuts", "i'm allergic to nuts", "i have a nut allergy", "allergy to nuts", "nuts!", "peanuts", "nuts and peanuts", "peanuts and nuts", "nuts, peanuts", "all nuts", "no nuts", "no nuts, please"] },
          { label: "Swimming", wahl: ["I can't swim yet.", "I can swim a little.", "I am a good swimmer."], loesung: ["I am a good swimmer."] },
          { label: "How do you get to camp?", wahl: ["by camp bus from Burlington Airport", "by car with my family"], loesung: ["by car with my family"] }
        ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Much, many, more and most", teile: [
      { art: "text", html: "<p class=\"lead\">Now you talk about the camp <b>in English</b>. <span class=\"de\">Jetzt sprichst du über dich: Was würdest du im Camp am liebsten machen? Dazu brauchst du much, many, more und most.</span></p>" },
      { art: "merke", kopf: "MUCH OR MANY? MORE OR MOST?", html: "<p><b>many</b> + plural (things you can count): <i>many tents · many leaders · How many canoes are there?</i><br><b>much</b> + things you can't count: <i>much time · much fun · How much is it?</i><br><i>too much / too many</i> = zu viel / zu viele · <i>so much / so many</i> = so viel / so viele</p><p><b>Long adjectives:</b> <i>Sailing is <u>more interesting than</u> hiking. Climbing is <u>the most exciting</u> activity. Art is <u>less exciting than</u> sport for me. Drama is <u>the least interesting</u> thing for me.</i></p><p><span class=\"de\">Bei langen Adjektiven steigerst du mit more/most (mehr) oder less/least (weniger). Vergiss das <b>the</b> vor most und least nicht!</span></p>" },
      ...zwei({ art: "mc", id: "much-many", tag: "Language", titel: "Much or many?", foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" } },
        { lead: "Tick the correct word. <span class=\"de\">Kann man es zählen (many) oder nicht (much)?</span>",
          fragen: [
            { q: "There are so ____ activities at the camp – I can't choose!", o: ["many", "much"], a: 0, e: "Activities kann man zählen (eine Aktivität, zwei Aktivitäten) – also many." },
            { q: "Papa thinks that $1,300 is too ____ money.", o: ["much", "many"], a: 0, e: "Money kann man nicht zählen – also much: too much money." }
          ],
          hilfen: ["Frage dich: Kann ich „eins, zwei, drei …“ davor sagen?", "activities: viele einzelne Dinge → many · money: eine Menge → much"] },
        { lead: "Tick the correct word.",
          fragen: [
            { q: "There are so ____ activities at the camp – I can't choose!", o: ["many", "much", "more", "most"], a: 0, e: "Activities kann man zählen – also so many." },
            { q: "Papa thinks that $1,300 is too ____ money.", o: ["much", "many", "more", "most"], a: 0, e: "Money kann man nicht zählen – also too much money." }
          ],
          hilfen: ["Can you count it? Then use many. If you can't, use much."] }),
      ...zwei({ art: "offen", id: "lieblings", tag: "Speaking", titel: "What would you like to do at the camp?", foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" } },
        { lead: "Write <b>one or two sentences</b>. <span class=\"de\">Schreibe wie beim Sprechen: Möchtest du ins Camp? Welche Aktivität ist für dich am spannendsten – und warum?</span>",
          fragen: [{ q: "Would you like to go to Camp Silver Lake? Which activity is the most exciting for you? Why?", m: "Yes, I would. Canoeing is the most exciting activity for me because I love the water.", k: ["the most|more|the best|better", "because|as |so "], min: 2 }],
          tipp: "Start like this: Yes, I would. / No, I wouldn't. · … is the most exciting activity for me because … · I think … is more interesting than …" },
        { lead: "Write <b>two or three sentences</b>: Would you like to go? Which activity is the most exciting for you – and which is the least interesting? Why?",
          fragen: [{ q: "Would you like to go? Which activity is the most exciting and which is the least interesting for you? Why?", m: "Yes, I would like to go because I love the lake. Sailing is the most exciting activity for me. Drama is the least interesting because I don't like being on a stage.", k: ["the most|more", "the least|less", "because|as |so "], min: 3 }],
          tipp: "Use: … is the most exciting … · … is the least interesting … · … is less … than … · because …" }),
      { art: "text", html: "<p class=\"lead\"><b>Plus:</b> Your dad has one more question – and this time you speak English for him. <span class=\"de\">Plus-Aufgabe (für M7 Pflicht, für R7 freiwillig): Papa möchte etwas wissen, das nicht auf der Webseite steht. Du rufst im Camp an und fragst auf Englisch – dann sagst du Papa auf Deutsch, was du erfahren hast.</span></p>" },
      { art: "kette", id: "anruf", nur: "R", m7: true, tag: "Plus · AI check", titel: "Call the camp office", lead: "Write your part. <span class=\"de\">Die Satzanfänge und Tipps helfen dir.</span>",
        thema: "Sprachmittlung am Telefon eines Sommercamps in Vermont (Englisch 7, Mittelschule): Das Kind fragt für seinen Vater auf Englisch, ob die Eltern zu Besuch kommen dürfen, und gibt die Antwort auf Deutsch weiter",
        rollen: { a: { name: "Papa", ic: "👨" }, b: { name: "Kelsey (camp office)", ic: "☎️" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Frag bitte im Camp, ob Mama und ich dich in den zwei Wochen einmal besuchen dürfen." },
          { an: "b", sprache: "en", auftrag: "Ask Kelsey in English. <span class=\"de\">Frag, ob deine Eltern dich besuchen dürfen.</span>", start: "Hello! Can my parents",
            kriterien: ["fragt, ob die Eltern zu Besuch kommen dürfen", "freundlich (Hello, please oder thank you)"],
            m: "Hello! Can my parents visit me at the camp, please?", k: ["visit|come|see me", "parents|mum|dad|mother|father|family"],
            tipps: ["Zwei Dinge: <b>wer</b> (my parents) – <b>was</b> (visit me).", "besuchen = visit · meine Eltern = my parents · Dürfen sie …? = Can they …?", "Can my parents visit me at the camp, please?"] },
          { von: "b", text: "Hello! Yes, they can. Parents can visit on the twelfth of July, from ten in the morning to four in the afternoon." },
          { an: "a", sprache: "de", auftrag: "Tell your dad in German. <span class=\"de\">Sag Papa, wann ihr kommen dürft – Tag und Uhrzeit.</span>", start: "Ja, ihr dürft",
            kriterien: ["Besuch ist erlaubt: am 12. Juli", "Uhrzeit: von 10 bis 16 Uhr"],
            m: "Ja, ihr dürft mich am 12. Juli besuchen, von 10 bis 16 Uhr.", k: ["12|zwölf", "10|zehn", "16|vier"],
            tipps: ["Zwei Angaben: <b>Tag</b> und <b>Uhrzeit</b>.", "twelfth of July = 12. Juli · ten in the morning = 10 Uhr · four in the afternoon = 16 Uhr"] }
        ] },
      { art: "kette", id: "anruf", nur: "M", m7: true, tag: "Plus · AI check", titel: "Call the camp office", lead: "Write your part. <span class=\"de\">Du sprichst für deinen Vater – ohne Satzanfang, bei Bedarf mit einem Tipp.</span>",
        thema: "Sprachmittlung am Telefon eines Sommercamps in Vermont (Englisch 7, Mittelschule): Das Kind fragt für seinen Vater auf Englisch, ob die Eltern zu Besuch kommen dürfen, und gibt die Antwort auf Deutsch weiter",
        rollen: { a: { name: "Papa", ic: "👨" }, b: { name: "Kelsey (camp office)", ic: "☎️" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Frag bitte im Camp, ob Mama und ich dich in den zwei Wochen einmal besuchen dürfen." },
          { an: "b", sprache: "en", auftrag: "Ask Kelsey in English if your parents can visit you.",
            kriterien: ["fragt, ob die Eltern zu Besuch kommen dürfen", "freundlich (Hello, please oder thank you)"],
            m: "Hello! Can my parents visit me at the camp, please?", k: ["visit|come|see me", "parents|mum|dad|mother|father|family"],
            tipps: ["Two things: who wants to come – and what they want to do."] },
          { von: "b", text: "Hello! Yes, they can. Parents can visit on the twelfth of July, from ten in the morning to four in the afternoon." },
          { an: "a", sprache: "de", auftrag: "Tell your dad in German.",
            kriterien: ["Besuch ist erlaubt: am 12. Juli", "Uhrzeit: von 10 bis 16 Uhr"],
            m: "Ja, ihr dürft mich am 12. Juli besuchen, von 10 bis 16 Uhr.", k: ["12|zwölf", "10|zehn", "16|vier"],
            tipps: ["Tag und Uhrzeit – mehr braucht Papa nicht."] }
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "regeln", tag: "True or false?", titel: "How do you help?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In a mediation you translate every sentence of the text.", false],
          ["You read your parents' question first and then look for the answer.", true],
          ["The headings of a website help you to find information quickly.", true],
          ["You answer your parents in English.", false],
          ["Dates and prices must be correct.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You can find information on an English website, choose what matters for your family, say it simply in German and fill in an English form – and you can even ask questions in English for your parents." }
});
