/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Listening practice 2: Life at school (Kürzel A20)
   (reines Hörtraining mit drei Hörtexten aus dem Schulleben der erfundenen Greenfield Academy: das Schulradio am Montagmorgen, Mr Harding
   stellt neuen Schülern die AGs vor, ein Telefonat zwischen Nell und Rosie über einen verspäteten Bus und die Hausaufgabe; danach
   simple present (he/she/it, doesn't) und Possessivpronomen im Kontext, ein paar Sätze über den eigenen Schultag und Kurz sichern)
   Buchprinzip (Hörformen der Unit 1, nur Aufbau, nichts übernommen): Sätze mit drei Auswahlmöglichkeiten zum Gehörten (AG, Person,
   Zeitpunkt, Wochentag – Topic 2), Gehörtes Personen zuordnen (Revision: wer kauft was → hier: wer wählt welche AG, wer tut was),
   Aussagen richtig/falsch; vorher die Aufgaben lesen.
   Besser: drei verschiedene Hörsituationen (Radiosendung mit Interview, Gespräch am AG-Stand, Telefonat) mit eigenen Stimmen,
   Uhrzeiten-Fallen (a quarter past/to, half past), sofortige Rückmeldung, Hilfen in Stufen, Förder-Links bei der Grammatik nach zwei
   Fehlversuchen, am Ende eigene Sätze über den Schultag mit KI-Rückmeldung.
   Differenzierung: Texte als zwei eigene Fassungen (R7 120–138 Wörter, zwei Rollen; M7 209–216 Wörter, zwei bis drei Rollen, mit
   Interview, Gründen und Änderungen); Radio – R7 vier, M7 vier schwerere Ankreuzsätze; AGs – R7 drei Paare (AG → Tag und Ort), M7
   Lückentext mit vier AGs und Zahlenfallen; Telefonat – R7 vier, M7 sechs Aussagen Nell oder Rosie zuordnen; simple present – R7
   Formen mit Wortspeicher, M7 sechs Lücken mit Fehlerfallen; Possessivpronomen – R7 mine/his, M7 hers/theirs.
   Plus für M7 (m7, Pflicht in M7): was Wren mit „It isn't mine. Mine is green!“ meint, warum Jude eine AG in der Mittagspause braucht.
   LehrplanPLUS E7 1.2 Hörverstehen (Radiosendung, Gespräch, Telefonat: Zeiten, Orte, Preise, Personen und Gründe entnehmen),
   E7 1.3 Schreiben (über den eigenen Schultag), E7 3 (simple present he/she/it und Verneinung, Possessivpronomen im Kontext),
   E7 5 (England: Schulleben, AGs, Schulradio, Mittagessen).
   Texte: texte/u1/u1-lp2-radio-r.js (Wren = Mädchen, Otis = Junge), u1-lp2-radio-m.js (Wren = Mädchen, Otis = Junge, Mrs Hobbs = Frau),
   u1-lp2-clubs-r.js (Mr Harding = Mann, Mabel = Mädchen), u1-lp2-clubs-m.js (Mr Harding = Mann, Mabel = Mädchen, Jude = Junge),
   u1-lp2-call-r.js und u1-lp2-call-m.js (Nell = Mädchen, Rosie = Mädchen).
   Erfunden: Greenfield Academy, Greenfield Radio, Wren, Otis, Mrs Hobbs, Mr Harding, Mabel, Jude, Nell, Rosie, alle AGs, Zeiten und
   Preise. Allgemein englische Schule: Year 7, PE kit, packed lunch, dining hall, school office, lost property.
   Förder-Links: simple present he/she/it (Lückentext, beide Züge) → unit1/extra/he-she-it.html („Extra: he, she, it – das s muss
   mit“); Possessivpronomen (Ankreuzen, beide Züge) → unit1/extra/possessive-pronouns.html („Extra: mine, yours, his, hers“).
   Wörter der Unit kommen bewusst vor: mine, yours, hers, his, ours, theirs, to take (dauern), here, long, a.m./p.m., to catch (bus),
   drama, to act, I'm afraid, occasionally, to order, to sound, healthy, studio, programme, radio, popular, brilliant, doctor, teacher;
   neue Wörter: lost property, coach, packed lunch, pasta bar, club, first aid, PE kit, worksheet (Vorentlastung und Glossar).
   BILDER:
   1. Station „School radio“ (Sprechanlass): zwei Kinder (ein Mädchen, ein Junge, Schuluniform) sitzen mit Kopfhörern vor zwei Mikrofonen
      in einem kleinen Schulstudio, an der Wand ein Plakat mit einem Radio-Symbol (ohne Namen). Kein Essen, keine Jacke, kein Bus im
      Bild – das sind Antworten der Hörfragen.
   2. Station „Clubs“ (Sprechanlass): ein AG-Markt in einer Schulhalle – Tische mit Schachbrett, Tanzschuhen, einer Filmklappe und einem
      Erste-Hilfe-Koffer; ein Lehrer mit Liste spricht mit einem Mädchen und einem Jungen. Keine Wochentage oder Raumnummern im Bild.
   3. Station „Phone call“ (Sprechanlass): ein Mädchen sitzt abends am Schreibtisch und telefoniert, durch das Fenster sieht man eine
      Straße mit Laternen. (Kein Arbeitsblatt, keine Sporttasche, kein Bus im Bild – das sind Antworten der Hörfragen.) */
(function () {
  const D = s => ` <span class="de">${s}</span>`;
  const HESHE = { href: "unit1/extra/he-she-it.html", text: "Extra: he, she, it – das s muss mit" };
  const POSS = { href: "unit1/extra/possessive-pronouns.html", text: "Extra: mine, yours, his, hers" };

  D7Kit.seite({
    id: "u1-listening2",
    titel: "Listening practice 2 · Life at school",
    einleitung: "Life at an English school: you listen to the <b>school radio</b>, a teacher who talks about <b>clubs</b> and a <b>phone call</b> between two friends. Du übst, beim Hören Tage, Uhrzeiten, Orte, Preise und Gründe zu finden und Gehörtes den richtigen Personen zuzuordnen. Zu jedem Text liest du erst die Aufgaben, hörst dann zu und siehst am Ende den Text.",
    zeit: "etwa 45 Minuten",
    ziele: ["📻 I understand the news on a school radio.", "♟️ I understand when and where school clubs meet.", "📞 I understand a phone call about homework and a late bus.", "✍️ I write about my school day in the simple present."],
    thema: "Unit 1 Out and about in England, Listening practice 2: Hörtraining (Schulradio, AGs, Telefonat)",
    quiz: { profi: "Listening pro" },
    glossar: {
      year7: ["Year 7", "In England ist Year 7 die erste Klasse an der weiterführenden Schule. Die Kinder sind dort elf oder zwölf Jahre alt."],
      lostproperty: ["lost property", "Fundsachen: Dinge, die jemand in der Schule verloren oder liegen gelassen hat."],
      coach: ["coach", "Ein coach ist ein Reisebus für Ausflüge. Ein Stadtbus heißt bus."],
      packedlunch: ["packed lunch", "Ein packed lunch ist ein Lunchpaket: Essen, das du von zu Hause mitbringst."],
      pastabar: ["pasta bar", "An einer pasta bar suchst du dir selbst Nudeln und eine Soße aus."],
      club: ["club", "Ein school club ist eine AG: Nach der Schule oder in der Mittagspause machen Schülerinnen und Schüler dort zusammen etwas, zum Beispiel Sport oder Musik."],
      firstaid: ["first aid", "Erste Hilfe: So hilfst du einem Menschen, der sich verletzt hat, bis ein Arzt kommt."],
      pekit: ["PE kit", "PE ist der Sportunterricht. Das PE kit sind deine Sportsachen: Kleidung und Schuhe für den Sport."],
      worksheet: ["worksheet", "Ein worksheet ist ein Arbeitsblatt mit Aufgaben."]
    },
    stationen: [
      { kurz: "Warm-up", ober: "Before you listen", titel: "Life at school", teile: [
        { art: "text", html: `<p class="lead">Greenfield Academy is a school in England. You are going to hear <b>three texts</b> about life at this school: the school radio, a teacher at a clubs fair and a phone call after school.${D("Die Schule und alle Personen sind erfunden. Du hörst gleich drei Texte.")}</p><p>What are the clubs at your school? What do you like about your school day? ${D("Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner.")}</p>` },
        { art: "merke", nur: "R", kopf: "SO HÖRST DU GUT ZU", html: "<ol><li><b>Lies zuerst die Aufgaben</b> und alle drei Antworten.</li><li><b>Erstes Hören:</b> Wer spricht? Worum geht es?</li><li><b>Zweites Hören:</b> Achte auf Tage, Uhrzeiten und Orte.</li><li><b>Vorsicht, Falle:</b> Oft hörst du zwei Zeiten oder zwei Tage. Welche ist die richtige für die Frage?</li></ol>" },
        { art: "merke", nur: "M", kopf: "LISTENING TIPS", html: "<ol><li><b>Read the tasks</b> and all the answers first.</li><li><b>First time:</b> Who is talking? What is it about?</li><li><b>Second time:</b> Listen for days, times, places and reasons.</li><li><b>Careful:</b> You often hear two times or two days – and one of them changes. Which one answers the question?</li></ol>" },
        { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs." + D("Diese Wörter hörst du gleich."),
          paare: [["lost property", "Fundsachen"], ["coach", "Reisebus"], ["packed lunch", "Lunchpaket"], ["club", "AG"], ["PE kit", "Sportsachen"], ["worksheet", "Arbeitsblatt"]],
          hilfen: ["PE ist der Sportunterricht.", "Ein coach fährt bei einem Ausflug.", "Ein packed lunch bringst du von zu Hause mit."] },
        { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will hear these words.",
          paare: [["lost property", "things that people left or lost at school"], ["coach", "a big bus for a school trip"], ["packed lunch", "food that you bring from home"], ["first aid", "help for a person who is hurt"], ["PE kit", "clothes and shoes for sport"], ["worksheet", "a sheet of paper with tasks on it"]],
          hilfen: ["PE = sport at school."] }
      ] },
      { kurz: "School radio", ober: "Listening 1 · the school radio", titel: "Greenfield Radio", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>the school radio</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-l2-studio.jpg\" width=\"1280\" height=\"853\" alt=\"A girl and a boy with headphones speak into two microphones in a small school radio studio.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who are the two students? What news could they tell the school? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: `<p class="lead">It's Monday morning. <b>Wren</b> and <b>Otis</b> are in <button class="term" data-t="year7">Year 7</button>. They make the school radio: <b>Greenfield Radio</b>.${D("Wren und Otis bringen die Neuigkeiten der Woche. Lies die vier Sätze, dann hör zu.")}</p>` },
        { art: "text", nur: "M", html: `<p class="lead">It's Monday morning. <b>Wren</b> and <b>Otis</b> from <button class="term" data-t="year7">Year 7</button> make the school radio: <b>Greenfield Radio</b>. Today they also talk to the school cook, <b>Mrs Hobbs</b>.</p><p><b>Read the sentences first, then listen.</b> Careful: one date changes.</p>` },
        { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u1-lp2-radio-r", M: "u1-lp2-radio-m" },
          fragen: [
            { art: "mc", id: "r-mc", nur: "R", titel: "The news", lead: "Listen and tick the right ending." + D("Hör zu und wähle das richtige Satzende."),
              fragen: [
                { q: "On Saturday, the Year 7 football team …", o: ["won three goals to one.", "lost three goals to one.", "didn't play."], a: 0, e: "Wren sagt: „they won, three goals to one!“" },
                { q: "Every Wednesday, there is … in the dining hall.", o: ["a pasta bar", "a pizza party", "a salad bar"], a: 0, e: "Otis sagt: „there's a pasta bar in the dining hall every Wednesday“." },
                { q: "Somebody left … in the sports hall.", o: ["a blue jacket", "a red bag", "a black phone"], a: 0, e: "Wren sagt: „Somebody left a blue jacket in the sports hall.“ Sie liegt jetzt im Sekretariat (school office)." },
                { q: "On Thursday, the coach to the zoo leaves at …", o: ["half past eight.", "half past nine.", "a quarter past eight."], a: 0, e: "Otis sagt: „The coach leaves at half past eight“ – also um 8:30." }
              ],
              hilfen: ["Lies jeden Satz und alle drei Enden, bevor du hörst.", "half past eight = 8:30, a quarter past eight = 8:15.", "Die Jacke ist blau."] },
            { art: "mc", id: "r-mc", nur: "M", titel: "The news", lead: "Listen and tick the right answers.",
              fragen: [
                { q: "When is Greenfield Radio on?", o: ["every Monday before the first lesson", "every day at lunchtime", "every Friday after school"], a: 0, e: "Otis sagt: „We're on the radio every Monday morning before the first lesson.“" },
                { q: "What is new in the dining hall?", o: ["On Wednesdays, you can choose your pasta and your sauce.", "On Fridays, there is pizza for everybody.", "The sandwiches are cheaper now."], a: 0, e: "Mrs Hobbs erklärt die neue pasta bar: Jeden Mittwoch wählst du Nudeln und Soße." },
                { q: "How much is the pasta?", o: ["two pounds twenty", "two pounds fifty", "twenty pounds"], a: 0, e: "Mrs Hobbs sagt: „Two pounds twenty. That's the same price as a sandwich and a drink.“" },
                { q: "When must Year 7 be at school for the trip?", o: ["on Thursday by a quarter past eight", "on Friday by half past eight", "on Thursday by a quarter to eight"], a: 0, e: "Der Ausflug ist am Donnerstag, nicht am Freitag. Der Bus fährt um halb neun – die Kinder sollen um Viertel nach acht da sein." }
              ],
              hilfen: ["The trip changes from one day to another. The coach leaves at one time – but you must be at school a bit earlier."] }
          ] },
        { art: "mc", id: "r-m7", nur: "M", m7: true, tag: "Think about it", titel: "Mine is green", lead: "Tick the right answer.",
          fragen: [
            { q: "Wren says: \"It isn't mine. Mine is green!\" What does she mean?", o: ["Her own jacket is green, so the blue jacket isn't hers.", "She lost a green jacket in the sports hall.", "The blue jacket is in her bag."], a: 0,
              e: "mine = meine (Jacke). Wrens eigene Jacke ist grün – die blaue Jacke gehört also nicht ihr." }
          ] }
      ] },
      { kurz: "Clubs", ober: "Listening 2 · at the clubs fair", titel: "Which club is for me?", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>the clubs fair</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-l2-ags.jpg\" width=\"1280\" height=\"853\" alt=\"A clubs fair in a school hall: tables with a chessboard, dance shoes, a film clapperboard and a first-aid bag; a teacher talks to a girl and a boy.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What clubs can you see? Which club would you choose? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: `<p class="lead"><b>Mabel</b> is new at Greenfield Academy. She wants to join a <button class="term" data-t="club">club</button>. <b>Mr Harding</b> is a teacher. He tells her about three clubs.${D("Mr Harding stellt drei AGs vor. Achte auf den Tag und den Ort – und darauf, welche AG Mabel wählt.")}</p><p><b>Read the tasks first, then listen.</b></p>` },
        { art: "text", nur: "M", html: `<p class="lead"><b>Mabel</b> and <b>Jude</b> are new in Year 7. At the clubs fair they talk to <b>Mr Harding</b>, who looks after the <button class="term" data-t="club">clubs</button>. He tells them about four clubs.</p><p><b>Read the notes first, then listen.</b> Listen for days, times and rooms – and for the reasons why Mabel and Jude choose their clubs. You will hear <button class="term" data-t="firstaid">first aid</button>.</p>` },
        { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: { R: "u1-lp2-clubs-r", M: "u1-lp2-clubs-m" },
          fragen: [
            { art: "paare", id: "c-ags", nur: "R", titel: "When and where?", lead: "Match the clubs with the day and the place." + D("Wann und wo trifft sich jede AG?"),
              paare: [["chess club", "Mondays at lunchtime, in the library"], ["dance club", "Tuesdays after school, in the sports hall"], ["film club", "Thursdays after school, in room twelve"]],
              hilfen: ["Die Schach-AG ist in der Bücherei (library).", "Die Tanz-AG ist in der Turnhalle (sports hall).", "Die Film-AG ist am Donnerstag."] },
            { art: "luecke", id: "c-ags", nur: "M", titel: "The clubs at Greenfield", lead: "Listen and complete the notes. Three words are extra.",
              absaetze: [["Chess club: Mondays at lunchtime, in the ", { g: "library" }, "."], ["Dance club: Tuesdays ", { g: "after school" }, ", in the sports hall."], ["Film club: Thursdays after school, in room ", { g: "twelve" }, "."], ["First aid club: ", { g: "Fridays" }, " at lunchtime, in room ", { g: "three" }, "."]],
              extra: ["twenty", "Wednesdays", "before school"],
              hilfen: ["Two clubs meet at lunchtime, two after school.", "twelve = 12, twenty = 20."] }
          ] },
        { art: "mc", id: "c-mc", nur: "R", tag: "Details", titel: "Mabel's club", lead: "Tick the right answers. You can listen to the text again." + D("Du kannst den Text oben noch einmal hören."),
          fragen: [
            { q: "Which club does Mabel choose?", o: ["the dance club", "the chess club", "the film club"], a: 0, e: "Mabel mag Musik und sagt am Ende: „Yes, please!“ zur Tanz-AG." },
            { q: "Why can't Mabel go to the film club?", o: ["She has a piano lesson on Thursdays.", "She doesn't like films.", "The film club is full."], a: 0, e: "Mabel sagt: „I can't go on Thursdays. I have a piano lesson then.“" }
          ],
          hilfen: ["Was mag Mabel – games, music, chess?", "Hör auf den Tag Thursday."] },
        { art: "mc", id: "c-mc", nur: "M", tag: "Details", titel: "Mabel's and Jude's clubs", lead: "Tick the right answers. You can listen to the text again.",
          fragen: [
            { q: "Which clubs do Mabel and Jude choose?", o: ["Mabel: the dance club · Jude: the first aid club", "Mabel: the film club · Jude: the chess club", "Mabel: the first aid club · Jude: the dance club"], a: 0, e: "Mabel nimmt die Tanz-AG (donnerstags hat sie Klavier), Jude die Erste-Hilfe-AG." },
            { q: "What do you learn in the first aid club?", o: ["how to help people who are hurt", "how to play chess", "how to make a film"], a: 0, e: "Mr Harding sagt: „You learn how to help people who are hurt.“" }
          ] },
        { art: "mc", id: "c-m7", nur: "M", m7: true, tag: "Think about it", titel: "A lunchtime club", lead: "Tick the right answer.",
          fragen: [
            { q: "Why does Jude need a club at lunchtime?", o: ["His bus leaves at ten past three, so he can't stay after school.", "He has a piano lesson after school.", "The library is closed after school."], a: 0,
              e: "Jude sagt: „I can't stay after school, because my bus leaves at ten past three.“ Die Klavierstunde hat Mabel." }
          ] }
      ] },
      { kurz: "Phone call", ober: "Listening 3 · a phone call", titel: "Where were you this morning?", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a phone call in the evening</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-l2-telefon.jpg\" width=\"1280\" height=\"853\" alt=\"In the evening a girl sits at her desk in her room and talks on the phone; outside the window there is a street with street lamps.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who could the girl call? What could the problem be? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: `<p class="lead">It's the evening. <b>Nell</b> phones her friend <b>Rosie</b>. Nell wasn't at school this morning.${D("Nell fragt nach der Hausaufgabe. Ein <button class=\"term\" data-t=\"worksheet\">worksheet</button> ist ein Arbeitsblatt, das <button class=\"term\" data-t=\"pekit\">PE kit</button> sind die Sportsachen.")}</p><p><b>Read the tasks first, then listen.</b></p>` },
        { art: "text", nur: "M", html: `<p class="lead">It's the evening. <b>Nell</b> phones her friend <b>Rosie</b>. Nell missed some lessons this morning.</p><p><b>Read the tasks first, then listen.</b> Listen for times, reasons and the homework: who does what?</p>` },
        { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: { R: "u1-lp2-call-r", M: "u1-lp2-call-m" },
          fragen: [
            { art: "tf", id: "t-tf", nur: "R", titel: "True or false?", lead: "Listen and decide." + D("Richtig oder falsch?"),
              aussagen: [["Nell's bus was late this morning.", true], ["Nell was in the Maths lesson.", false], ["The class has PE tomorrow.", true]],
              hilfen: ["Hör auf late, Maths und PE."] },
            { art: "tf", id: "t-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
              aussagen: [["This morning, the bus didn't come because the driver was ill.", true], ["Nell missed the whole English lesson.", false], ["The PE teacher always checks the PE kit.", true]],
              hilfen: ["Nell missed one lesson completely – and she was late for another one."] },
            { art: "sort", id: "t-wer", nur: "R", titel: "Nell or Rosie?", lead: "Who is it? Put the sentences in the right box." + D("Wer macht was – Nell oder Rosie?"),
              buckets: ["Nell", "Rosie"],
              items: [{ t: "missed the first lesson", b: 0 }, { t: "Her mum can drive them to school.", b: 0 }, { t: "tells her friend about the homework", b: 1 }, { t: "sends a photo of the worksheet", b: 1 }],
              hilfen: ["Wer war heute Morgen nicht in der Schule?", "Wer weiß, was die Hausaufgabe ist?"] },
            { art: "sort", id: "t-wer", nur: "M", titel: "Nell or Rosie?", lead: "Who is it? Put the sentences in the right box.",
              buckets: ["Nell", "Rosie"],
              items: [{ t: "usually takes the bus", b: 0 }, { t: "missed the whole Maths lesson", b: 0 }, { t: "goes to her friend's house before school tomorrow", b: 0 }, { t: "lives near the school", b: 1 }, { t: "walks to school", b: 1 }, { t: "sends a photo after dinner", b: 1 }],
              hilfen: ["Rosie doesn't take the bus."] }
          ] },
        { art: "mc", id: "t-mc", nur: "R", tag: "Details", titel: "Times", lead: "Tick the right answer. You can listen to the text again." + D("Achte auf die Uhrzeiten."),
          fragen: [
            { q: "When does Nell's bus usually come?", o: ["at twenty to eight", "at half past eight", "at a quarter to eight"], a: 0, e: "Nell sagt: „It usually comes at twenty to eight“. Heute kam er um halb neun, und um Viertel vor acht holt Nells Mutter morgen Rosie ab." },
            { q: "When does Rosie send the photo of the worksheet?", o: ["after dinner", "before school", "at lunchtime"], a: 0, e: "Rosie sagt: „I'll send it after dinner.“" }
          ],
          hilfen: ["Du hörst drei Uhrzeiten. Welche ist die normale Zeit des Busses (usually)?", "Hör auf das Wort photo – die Zeit kommt gleich danach."] },
        { art: "mc", id: "t-mc", nur: "M", tag: "Details", titel: "Times and days", lead: "Tick the right answers. You can listen to the text again.",
          fragen: [
            { q: "When is the English test?", o: ["on Friday", "on Wednesday", "tomorrow"], a: 0, e: "Rosie sagt: „There's a test on Friday.“ Das Arbeitsblatt ist bis Mittwoch, morgen ist Sport." },
            { q: "How long does Rosie's walk to school take?", o: ["ten minutes", "thirty-five minutes", "twenty minutes"], a: 0, e: "Rosie sagt: „It only takes ten minutes.“ Fünfunddreißig Minuten später kam heute der nächste Bus." }
          ] }
      ] },
      { kurz: "Your turn", ober: "Language and writing", titel: "My school day", teile: [
        { art: "merke", nur: "R", kopf: "SIMPLE PRESENT UND MINE, YOURS …", html: "<p><b>he, she, it – das s muss mit:</b> <i>My sister plays tennis. Our teacher lives in a flat.</i> · watch → <i>watches</i>, do → <i>does</i></p><p><b>Verneinung:</b> <i>Otis doesn't like Maths.</i> (doesn't + Grundform, ohne -s)</p><p><b>Aber:</b> bei <i>I, you, we, they</i> kein -s: <i>My friends live near here.</i></p><p><b>Besitz ohne Nomen:</b> my → <b>mine</b> · your → <b>yours</b> · his → <b>his</b> · her → <b>hers</b> · our → <b>ours</b> · their → <b>theirs</b><br><i>It's my pen. → It's mine.</i></p>" },
        { art: "merke", nur: "M", kopf: "SIMPLE PRESENT AND POSSESSIVE PRONOUNS", html: "<ul><li><b>he, she, it + -s:</b> <i>Wren makes the school radio. Otis plays football.</i></li><li><b>Negative:</b> <i>Jude doesn't play chess.</i> – doesn't + base form (no -s)</li><li><b>Possessive pronouns</b> stand without a noun: mine, yours, his, hers, ours, theirs – <i>Is this Otis's bag? Yes, it's his.</i></li></ul>" },
        { art: "luecke", id: "g2", nur: "R", tag: "Grammar in context", titel: "At Greenfield", lead: "Complete the sentences." + D("he, she, it – das s muss mit. Drei Wörter bleiben übrig."), foerder: HESHE,
          absaetze: [["Nell ", { g: "gets" }, " up at seven o'clock."], ["Her bus usually ", { g: "comes" }, " at twenty to eight, but today it came at half past eight."], ["Mabel ", { g: "goes" }, " to the dance club on Tuesdays, but she ", { g: "doesn't play" }, " chess."], ["Wren and Otis ", { g: "make" }, " the school radio."]],
          extra: ["get", "come", "don't play"],
          hilfen: ["Nell, her bus und Mabel sind he, she oder it – das Verb bekommt ein -s.", "go bekommt -es: goes. Verneinung bei she: doesn't + Verb ohne -s.", "Wren and Otis = they – kein -s!"] },
        { art: "luecke", id: "g2", nur: "M", tag: "Grammar in context", titel: "Life at Greenfield", lead: "Complete the sentences. Three forms are wrong – they never fit.", foerder: HESHE,
          absaetze: [["Nell ", { g: "lives" }, " a long way from the school, so she ", { g: "takes" }, " the bus."], ["Her bus usually ", { g: "comes" }, " at twenty to eight, but this morning it didn't come."], ["Rosie ", { g: "doesn't need" }, " a bus. Her house is near the school."], ["Mr Harding ", { g: "looks" }, " after the clubs, and Mabel ", { g: "goes" }, " to the dance club on Tuesdays."]],
          extra: ["don't need", "doesn't needs", "gos"],
          hilfen: ["he, she, it → -s (go → goes). After doesn't: base form without -s."] },
        { art: "mc", id: "g4", nur: "R", tag: "Grammar in context", titel: "Whose is it?", lead: "Tick the right word." + D("Ohne Nomen danach: mine, yours, his, hers …"), foerder: POSS,
          fragen: [
            { q: "Wren: \"Is this blue jacket yours, Otis?\" – Otis: \"No, it isn't ___. I've got a black one.\"", o: ["mine", "my", "me"], a: 0, e: "Ohne Nomen danach steht mine: It isn't mine. (my braucht ein Nomen: my jacket.)" },
            { q: "Mabel: \"These trainers aren't Mr Harding's. ___ are white.\"", o: ["His", "He", "Him"], a: 0, e: "His (trainers) are white – his steht hier allein, ohne Nomen." }
          ],
          hilfen: ["Steht nach der Lücke ein Nomen? Wenn nicht: mine, yours, his, hers …", "Mr Harding = he → his."] },
        { art: "mc", id: "g4", nur: "M", tag: "Grammar in context", titel: "Whose is it?", lead: "Tick the right word.", foerder: POSS,
          fragen: [
            { q: "\"Is this Rosie's worksheet?\" – \"Yes, it's ___. Her name is on it.\"", o: ["hers", "her", "she's"], a: 0, e: "Ohne Nomen danach: hers. (her braucht ein Nomen: her worksheet.)" },
            { q: "\"Are those Nell's and Rosie's PE bags?\" – \"Yes, they're ___.\"", o: ["theirs", "their", "them"], a: 0, e: "Nell and Rosie = they → theirs (ohne Nomen). their braucht ein Nomen: their bags." }
          ] },
        { art: "offen", id: "schultag", nur: "R", tag: "Your words", titel: "Your school day", lead: "Write about <b>your</b> school day: When do you get up? How do you get to school?" + D("Schreib zwei kurze Sätze im simple present."),
          tipp: "Begin: I get up at … · I go to school by … / I walk to school.",
          fragen: [{ q: "When do you get up? How do you get to school?", m: "I get up at half past six. I go to school by bus.", k: ["get up|wake up|o'clock|half past|quarter|six|seven", "bus|bike|car|walk|foot|train|tram|cycle|drive|drives"], min: 2 }],
          hilfen: ["Fang so an: I get up at …", "Dann: I go to school by bus / by bike … oder: I walk to school.", "Beispiel für den Anfang: I get up at seven o'clock. I go to school …"] },
        { art: "offen", id: "schultag", nur: "M", tag: "Your words", titel: "Your school day", lead: "Write <b>three sentences</b> about your school day: when you get up, how you get to school and one club or activity – with the day.",
          tipp: "Use: I get up at … · I go to school by … because … · On … I go to the … club. / After school I …",
          fragen: [{ q: "Write about your school day: getting up, how you get to school, a club or activity with the day.", m: "I get up at a quarter to seven. My dad drives me to school because it's far. On Wednesdays I go to the football club after school.", k: ["get up|wake up|o'clock|half past|quarter|leave", "bus|bike|car|walk|foot|train|tram|cycle|drive|drives", "club|monday|tuesday|wednesday|thursday|friday|after school|lunchtime|weekend"], min: 3 }] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "Check", titel: "Right or wrong?", lead: "Think about all three texts." + D("Denke an alle drei Texte."),
          aussagen: [["Wren and Otis talk on the school radio.", true], ["Mabel chooses the film club.", false], ["Nell's bus was late, so she missed Maths.", true], ["\"Rosie walk to school.\" is a correct sentence.", false]],
          hilfen: ["Text 1 ist das Schulradio, Text 2 der AG-Stand, Text 3 das Telefonat.", "Rosie = she – das s muss mit."] }
      ] }
    ],
    weiter: { text: "Well done! You can now understand a school radio, a talk about clubs and a phone call – with days, times, places and reasons. Listen to the texts again if something was difficult." }
  });
})();
