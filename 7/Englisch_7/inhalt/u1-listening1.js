/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Listening practice 1: Holidays in England (Kürzel A19)
   (reines Hörtraining mit drei Hörtexten aus den Ferien in England: Durchsage der Rettungsschwimmer am Strand von Scarborough, ein
   Gespräch in der Touristeninformation von Harrogate und eine Sprachnachricht von Isabel vom Zelten in Devon – je Text Vorentlastung,
   Hörauftrag, Aufgaben, Transkript; am Ende das simple past im Kontext, eine eigene Antwort an Isabel und Kurz sichern)
   Buchprinzip (Hörformen der Unit 1, nur Aufbau, nichts übernommen): Notizen in einer Tabelle (Herkunft, Hobbys, Pläne → hier: Zeiten,
   Orte, Preise), Aussagen richtig/falsch (Intro), Reihenfolge des Gehörten (Topic 1), Multiple Choice mit drei Optionen; vor dem Hören
   die Aufgaben lesen.
   Besser: drei verschiedene Hörsituationen (Durchsage, Gespräch, Sprachnachricht) mit eigenen Stimmen, Listening-Tipps als Merkkasten,
   Zahlenfallen bewusst eingebaut (fifteen/fifty, eighteen/eighty, nine/one), sofortige Rückmeldung, Hilfen in Stufen, Förder-Link
   nach zwei Fehlversuchen, Landeskunde (rot-gelbe Flaggen, Flut, Cream Tea, Dartmoor-Ponys), am Ende eine eigene Antwort mit
   KI-Rückmeldung.
   Differenzierung: Texte als zwei eigene Fassungen (R7 122–153 Wörter, eine bis zwei Rollen; M7 184–235 Wörter, bis drei Rollen, mit
   Gründen, Änderungen und Rechnen); Strand – R7 Lückentext mit Wortspeicher, M7 Notizen ohne Auswahl (Formular); Touristeninfo – R7
   Lückentext mit fünf Angaben, M7 mit Preis für drei Personen, geänderter Öffnungszeit und mehr Zahlenfallen; Sprachnachricht – R7
   Reihenfolge von vier Tagen, M7 Reihenfolge mit Gründen; simple past – R7 Verbformen mit Wortspeicher, M7 mit Verneinung und Frage.
   Plus für M7 (m7, Pflicht in M7): was eine Familie mit einem kleinen Kind am Strand zuerst tun sollte (Schluss ziehen), welcher Tag
   von Isabels Urlaub dir am besten gefallen würde (Meinung mit Grund).
   LehrplanPLUS E7 1.2 Hörverstehen (Durchsage, Gespräch, Sprachnachricht: Uhrzeiten, Zahlen, Preise, Orte, Regeln, Reihenfolge und
   Gründe entnehmen), E7 1.3 Schreiben (kurze Antwort auf eine Nachricht), E7 3 (simple past im Kontext), E7 5 (England: Ferien am
   Meer, eine Stadt im Regen, Zelten in Devon).
   Texte: texte/u1/u1-lp1-beach-r.js und u1-lp1-beach-m.js (Lifeguard = Frau, Durchsage), u1-lp1-info-r.js (Mrs Kaur = Frau, Martha =
   Mädchen), u1-lp1-info-m.js (Mrs Kaur = Frau, Martha = Mädchen, Dad = Mann), u1-lp1-isabel-r.js und u1-lp1-isabel-m.js (Isabel =
   Mädchen, Sprachnachricht).
   Erfunden: Mrs Kaur, Martha, Isabel, die Zeiten der Rettungsschwimmer und der Flut, Kiosk und Armbänder, Kletterwand, Bus, Preise,
   das Spielecafé „The Dice Box“, der Campingplatz. Gesichert: Scarborough ist ein Badeort in North Yorkshire mit der South Bay; die
   Nordsee ist auch im Sommer kalt; an britischen Stränden zeigen rot-gelbe Flaggen den bewachten Badebereich, eine rote Flagge heißt
   Gefahr; Harrogate ist eine Stadt in North Yorkshire, früher kamen viele Besucher, um das Wasser der Quellen zu trinken; die Valley
   Gardens sind ein großer Park mit vielen Blumen; Devon liegt im Südwesten Englands am Meer; im Dartmoor leben Ponys frei; ein Cream
   Tea besteht aus Scones mit Sahne und Marmelade, in Devon kommt meist zuerst die Sahne auf den Scone.
   Förder-Links: Hördetails (Strand-Lückentext R7, Strand richtig/falsch M7, Strand-Details, Touristeninfo-Lückentext, Details der
   Sprachnachricht, beide Züge) → u1_x7.html („Extra: Hören – aus zwei wählen“); simple past (Lückentext, beide Züge) →
   unit1/extra/simple-past.html („Extra: simple past Schritt für Schritt“). Das Notizformular der M7 hat keinen, weil das Formular keine
   Fehlversuche meldet.
   Wörter der Unit kommen bewusst vor: coast, south, north, west, out and about, quiet, near, far, a long way away, centre, healthy,
   adult, popular, if, to sound, brilliant, I'm afraid, a.m./p.m., visit, to drive – drove, tour, to rent, brochure; neue Wörter:
   lifeguard, flag, high tide, hut, wristband, tourist information, climbing wall, board game, spring (Quelle), campsite, voice message,
   rock pool, crab, cream tea, scone (Vorentlastung und Glossar).
   BILDER:
   1. Station „Warm-up“ (Vorentlastung): eine Collage aus drei Bildern – ein breiter Sandstrand mit Badegästen, eine Touristeninformation
      mit Regenschirmen vor der Tür, mehrere Zelte auf einer Wiese über dem Meer. Keine Schrift.
   2. Station „Beach“ (Sprechanlass): eine Rettungsschwimmerin mit Megafon vor einer Holzhütte an einem Strand, hinter ihr Badegäste.
      Keine Flaggen, keine Uhrzeiten, kein Café im Bild – das sind Antworten der Hörfragen.
   3. Station „Voice message“ (Sprechanlass): ein Mädchen (13) spricht in ihr Handy, im Hintergrund Meer und grüne Hügel. Kein Zelt,
      keine Ponys, kein Wetter im Bild – das sind Antworten der Hörfragen. */
(function () {
  const D = s => ` <span class="de">${s}</span>`;
  const HOEREN = { href: "u1_x7.html", text: "Extra: Hören – aus zwei wählen" };
  const PAST = { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" };
  const mitApo = liste => liste.concat(liste.filter(s => s.indexOf("'") >= 0).map(s => s.replace(/'/g, "’")));

  D7Kit.seite({
    id: "u1-listening1",
    titel: "Listening practice 1 · Holidays in England",
    einleitung: "Holidays in England: you listen to <b>three texts</b> – a message from the lifeguards at a beach, a talk at a tourist information and a voice message from a campsite. Du übst, beim Hören Uhrzeiten, Zahlen, Preise, Orte und Regeln sicher herauszuhören und die Reihenfolge zu erkennen. Zu jedem Text liest du erst die Aufgaben, hörst dann zu und siehst am Ende den Text.",
    zeit: "etwa 45 Minuten",
    ziele: ["🏖️ I understand an announcement at a beach: rules and times.", "ℹ️ I understand tips, times and prices at a tourist information.", "📱 I understand a voice message and put the days in order.", "✍️ I write a short answer in the simple past."],
    thema: "Unit 1 Out and about in England, Listening practice 1: Hörtraining (Strand, Touristeninformation, Sprachnachricht)",
    quiz: { profi: "Listening pro" },
    glossar: {
      lifeguard: ["lifeguard", "Rettungsschwimmer, Rettungsschwimmerin: Ein lifeguard passt am Strand oder im Schwimmbad auf, dass niemand im Wasser in Gefahr kommt."],
      flag: ["flag", "Flagge, Fahne. An britischen Stränden zeigen rot-gelbe Flaggen den Teil, auf den die Rettungsschwimmer aufpassen. Eine rote Flagge heißt: Gefahr, nicht ins Wasser!"],
      tide: ["high tide", "Flut, Hochwasser: Das Meer steigt zweimal am Tag und kommt weit an den Strand. Bei low tide (Ebbe) ist das Wasser weit weg."],
      hut: ["hut", "Eine hut ist eine Hütte, ein kleines Haus aus Holz."],
      wristband: ["wristband", "Ein wristband ist ein Armband aus Papier oder Plastik."],
      touristinfo: ["tourist information", "Touristeninformation: Dort bekommen Besucher Stadtpläne und Tipps."],
      climbing: ["climbing wall", "Eine climbing wall ist eine Kletterwand, zum Beispiel in einem Sportzentrum."],
      boardgame: ["board game", "Ein board game ist ein Brettspiel, zum Beispiel Schach oder Mühle."],
      spring: ["spring", "Eine spring ist hier eine Quelle: Dort kommt Wasser aus der Erde. Spring heißt auch Frühling."],
      campsite: ["campsite", "Ein campsite ist ein Campingplatz. Dort schlafen die Leute im Zelt (tent) oder im Wohnwagen."],
      voicemessage: ["voice message", "Eine voice message ist eine Sprachnachricht auf dem Handy."],
      rockpool: ["rock pool", "Ein rock pool ist eine kleine Pfütze mit Meerwasser zwischen Felsen. Darin leben oft kleine Krebse (crabs)."],
      creamtea: ["cream tea", "Ein cream tea ist eine englische Spezialität: Tee mit scones (kleinen, runden Kuchen), dicker Sahne und Marmelade."]
    },
    stationen: [
      { kurz: "Warm-up", ober: "Before you listen", titel: "Holidays in England", teile: [
        { art: "text", html: `<p class="lead">Summer holidays in England! Some people go to the sea, some visit a town, and some go camping. You are going to hear <b>three texts</b>: at a beach, at a tourist information and from a campsite.${D("Du hörst gleich drei Texte: eine Durchsage am Strand, ein Gespräch in der Touristeninformation und eine Sprachnachricht vom Zeltplatz.")}</p><p>Where would you like to go on holiday in England? ${D("Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner.")}</p>` },
        { art: "merke", nur: "R", kopf: "SO HÖRST DU GUT ZU", html: "<ol><li><b>Lies zuerst die Aufgaben.</b> Dann weißt du, worauf du achten musst.</li><li><b>Erstes Hören:</b> Wer spricht? Wo sind die Personen?</li><li><b>Zweites Hören:</b> Achte auf Uhrzeiten, Zahlen und Preise. Schreib sie sofort auf.</li><li><b>Du musst nicht jedes Wort verstehen.</b></li><li><b>Vorsicht, Falle:</b> fif<u>teen</u> (15) – <u>fif</u>ty (50) · a quarter <b>past</b> three (3:15) – a quarter <b>to</b> three (2:45)</li></ol>" },
        { art: "merke", nur: "M", kopf: "LISTENING TIPS", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b>First time:</b> Who is talking? Where are they?</li><li><b>Second time:</b> Listen for times, numbers, prices and reasons. Write them down at once.</li><li><b>You don't have to understand every word.</b></li><li><b>Careful:</b> fif<u>teen</u> (15) – <u>fif</u>ty (50) · eigh<u>teen</u> (18) – <u>eigh</u>ty (80) · a quarter <b>past</b> three (3:15) – a quarter <b>to</b> three (2:45)</li></ol>" },
        { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs." + D("Diese Wörter hörst du gleich."),
          paare: [["lifeguard", "Rettungsschwimmer"], ["flag", "Flagge"], ["high tide", "Flut"], ["tourist information", "Touristeninformation"], ["campsite", "Campingplatz"], ["voice message", "Sprachnachricht"]],
          hilfen: ["Zwei Wörter gehören zum Strand: lifeguard und flag.", "camp steckt im Wort campsite.", "Eine voice message hörst du auf dem Handy."] },
        { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will hear these words.",
          paare: [["lifeguard", "a person who helps swimmers in danger"], ["flag", "red and yellow ones show where you can swim"], ["high tide", "the time when the sea comes up the beach"], ["tourist information", "a place with maps and tips for visitors"], ["campsite", "a place where people sleep in tents"], ["voice message", "a message you listen to on your phone"]],
          hilfen: ["Three words are about the beach, one is about a town, two are about camping and phones."] }
      ] },
      { kurz: "Beach", ober: "Listening 1 · at the beach", titel: "A message from the lifeguards", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a sunny morning at the beach</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-l1-strand.jpg\" width=\"1280\" height=\"853\" alt=\"A sunny beach in an English seaside town: a lifeguard speaks into a megaphone; families sit on the sand.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is the woman? What could she say to the people on the beach? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: `<p class="lead">You are at the <b>South Bay</b> in <b>Scarborough</b>, a town by the sea in the north of England. Suddenly you hear a message from the <button class="term" data-t="lifeguard">lifeguards</button>.${D("Am Strand kommt eine Durchsage der Rettungsschwimmer. Achte auf die Regeln und die Uhrzeiten. <button class=\"term\" data-t=\"tide\">high tide</button> = Flut.")}</p><p><b>Read the tasks first, then listen.</b>${D("Lies erst die Aufgaben, dann hör zu.")}</p>` },
        { art: "text", nur: "M", html: `<p class="lead">You are at the <b>South Bay</b> in <b>Scarborough</b>, a seaside town on the coast of North Yorkshire. You hear a message from the <button class="term" data-t="lifeguard">lifeguards</button>.</p><p><b>Read the notes first, then listen.</b> Listen for times, rules and reasons. You will hear <button class="term" data-t="tide">high tide</button> and <button class="term" data-t="wristband">wristband</button>.</p>` },
        { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u1-lp1-beach-r", M: "u1-lp1-beach-m" },
          fragen: [
            { art: "luecke", id: "b-notizen", nur: "R", titel: "Beach notes", lead: "Listen and complete the notes." + D("Ergänze die Notizen. Zwei Wörter bleiben übrig."), foerder: HOEREN,
              absaetze: [["Swim only between the red and ", { g: "yellow" }, " flags."], ["The lifeguards are on the beach until ", { g: "six" }, " o'clock."], ["High tide is at a quarter past ", { g: "three" }, "."], ["Is your child lost? Go to the lifeguard ", { g: "hut" }, "."]],
              extra: ["green", "two"],
              hilfen: ["Es sind vier Angaben: eine Farbe, eine Uhrzeit, die Flut und ein Ort.", "Die Rettungsschwimmer sind von zehn bis sechs Uhr da.", "a quarter past three = Viertel nach drei."] },
            { art: "formular", id: "b-notizen", nur: "M", titel: "Beach notes", lead: "Listen and write short notes." + D("Schreib die Uhrzeit, die Zahl oder ein paar Wörter."),
              kopf: "Notes: South Bay, Scarborough",
              felder: [
                { label: "Lifeguards on the beach until …", platz: "time", loesung: mitApo(["six", "6", "six o'clock", "6 o'clock", "6 pm", "6 p.m.", "6pm", "18:00", "18.00", "6:00", "6.00", "6:00 pm", "6.00 pm", "6:00 p.m.", "six pm", "six p.m.", "six in the evening", "six o'clock in the evening", "6 o'clock in the evening", "until six", "until 6", "until six o'clock", "until 6 o'clock", "until 6 pm", "until 6 p.m.", "until 18:00", "at six", "at 6", "6.00pm", "6:00pm", "until 6pm", "until 6.00 pm", "until 6:00 pm", "six in the evening.", "until six in the evening", "until 6 in the evening", "6 in the evening"]) },
                { label: "High tide at …", platz: "time", loesung: ["a quarter past three", "quarter past three", "3:15", "3.15", "15:15", "15.15", "3:15 pm", "3.15 pm", "3:15 p.m.", "3.15 p.m.", "3:15pm", "at a quarter past three", "at quarter past three", "at 3:15", "at 3.15", "at 15:15", "at 3:15 pm", "at 3.15 pm", "at 3:15 p.m.", "a quarter past three in the afternoon", "quarter past three in the afternoon", "3:15 in the afternoon", "three fifteen", "at three fifteen", "3.15pm", "at 3.15pm", "at 3:15pm", "quarter past 3", "a quarter past 3", "at quarter past 3", "at a quarter past 3", "3.15 in the afternoon", "at 3.15 p.m.", "at 15.15"] },
                { label: "Free wristband for children under …", platz: "age", loesung: ["eight", "8", "eight years", "8 years", "eight years old", "8 years old", "under eight", "under 8", "children under eight", "children under 8", "8 years and younger", "age eight", "age 8", "under eight years", "under 8 years", "under eight years old", "under 8 years old", "children under eight years", "children under 8 years"] },
                { label: "Where is the lifeguard hut?", platz: "place", loesung: ["next to the ice cream kiosk", "next to the ice-cream kiosk", "next to the icecream kiosk", "next to the kiosk", "near the ice cream kiosk", "near the ice-cream kiosk", "near the kiosk", "by the ice cream kiosk", "beside the ice cream kiosk", "at the ice cream kiosk", "the ice cream kiosk", "ice cream kiosk", "ice-cream kiosk", "kiosk", "next to the ice cream kiosk.", "it's next to the ice cream kiosk", "it is next to the ice cream kiosk", "next to an ice cream kiosk", "next to ice cream kiosk", "beside the kiosk", "by the kiosk", "near the ice cream kiosk.", "the hut is next to the ice cream kiosk", "next to the ice-cream kiosk.", "next to the icecream kiosk.", "beside the ice-cream kiosk", "near an ice cream kiosk"] }
              ],
              hilfen: ["Listen for until, high tide, under and next to – the answers come right after these words."] },
            { art: "tf", id: "b-tf", nur: "R", titel: "True or false?", lead: "Listen and decide." + D("Richtig oder falsch? Hör gut zu."),
              aussagen: [["The sea is warm today.", false], ["At high tide, the water comes in very fast.", true], ["You can swim when there is a red flag.", false]],
              hilfen: ["Lies jede Aussage und hör nur auf diese eine Information.", "Achte auf cold, fast und red flag."] },
            { art: "tf", id: "b-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.", foerder: HOEREN,
              aussagen: [["After six o'clock, there are no lifeguards on the beach.", true], ["You can walk to the rocks at the end of the beach this afternoon.", false], ["Parents write their phone number on the wristband.", true]],
              hilfen: ["Listen for after six, rocks and phone number."] }
          ] },
        { art: "mc", id: "b-mc", nur: "R", tag: "Details", titel: "At the beach", lead: "Tick the right answers. You can listen to the text again." + D("Du kannst den Text oben noch einmal hören."), foerder: HOEREN,
          fragen: [
            { q: "Where is the lifeguard hut?", o: ["next to the café", "next to the car park", "next to the flags"], a: 0, e: "Die Rettungsschwimmerin sagt: „Our hut is next to the café.“" },
            { q: "Why must you not leave your bags near the water?", o: ["The water comes in fast at high tide.", "Dogs play with the bags.", "The lifeguards need the beach."], a: 0, e: "Bei Flut kommt das Wasser schnell, dann gibt es kaum noch Strand – die Taschen würden nass." }
          ],
          hilfen: ["Die Hütte kommt im dritten Teil der Durchsage vor.", "Bei der zweiten Frage hilft das Wort high tide."] },
        { art: "mc", id: "b-mc", nur: "M", tag: "Details", titel: "At the beach", lead: "Tick the right answers. You can listen to the text again.", foerder: HOEREN,
          fragen: [
            { q: "Why must people move their bags and towels before three o'clock?", o: ["At high tide, the water comes right up to the wall.", "The lifeguards close the beach at three.", "It is going to rain in the afternoon."], a: 0, e: "Um Viertel nach drei ist Flut. Dann kommt das Wasser an manchen Stellen bis an die Mauer." },
            { q: "What does a red flag mean?", o: ["Nobody can swim.", "You can only swim between the flags.", "The lifeguards are in their hut."], a: 0, e: "Die Durchsage sagt: „a red flag means danger. When you see one, nobody can swim.“ Zwischen den rot-gelben Flaggen schwimmt man nur, wenn keine rote Flagge weht." }
          ] },
        { art: "mc", id: "b-m7", nur: "M", m7: true, tag: "Think about it", titel: "A family arrives", lead: "Tick the right answer.",
          fragen: [
            { q: "A family with a six-year-old boy arrives at the beach at twelve o'clock. What is a good idea first?", o: ["Get a free wristband at the hut and write a phone number on it.", "Walk to the rocks at the end of the beach.", "Swim outside the red and yellow flags."], a: 0,
              e: "Das Armband gibt es für Kinder unter acht. Geht das Kind verloren, können die Rettungsschwimmer die Eltern sofort anrufen. Zu den Felsen soll man am Nachmittag nicht gehen." }
          ] }
      ] },
      { kurz: "Tourist info", ober: "Listening 2 · in a town", titel: "A rainy day in Harrogate", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a rainy day in town</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-l1-regen.jpg\" width=\"1280\" height=\"853\" alt=\"A girl and her father stand under a big umbrella in a rainy street with old stone houses and look up at the grey sky.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the weather like? What can you do in a town on a rainy day? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: `<p class="lead">Martha is on holiday in <b>Harrogate</b>, a town in the north of England. It's raining. She goes to the <button class="term" data-t="touristinfo">tourist information</button> and talks to <b>Mrs Kaur</b>.${D("Martha fragt, was man bei Regen machen kann. Eine <button class=\"term\" data-t=\"climbing\">climbing wall</button> ist eine Kletterwand.")}</p><p><b>Read the notes first, then listen.</b>${D("Lies erst die Notizen, dann hör zu.")}</p>` },
        { art: "text", nur: "M", html: `<p class="lead">Martha and her dad are on holiday in <b>Harrogate</b>, a town in North Yorkshire. It's raining, so they go to the <button class="term" data-t="touristinfo">tourist information</button> and talk to <b>Mrs Kaur</b>.</p><p><b>Read the notes first, then listen.</b> Careful: one place is closed this afternoon. You will also hear <button class="term" data-t="climbing">climbing wall</button>, <button class="term" data-t="boardgame">board game</button> and <button class="term" data-t="spring">springs</button>.</p>` },
        { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: { R: "u1-lp1-info-r", M: "u1-lp1-info-m" },
          fragen: [
            { art: "luecke", id: "i-notizen", nur: "R", titel: "Notes for a rainy day", lead: "Listen and complete the notes." + D("Ergänze die Notizen. Zwei Wörter bleiben übrig."), foerder: HOEREN,
              absaetze: [["Climbing wall at the sports centre: open until ", { g: "six" }, " o'clock."], ["Price for children: ", { g: "five" }, " pounds."], ["Bus to the sports centre: number ", { g: "seven" }, "."], ["The bus leaves every ", { g: "fifteen" }, " minutes."], ["Valley Gardens: a big park with lots of flowers. It's ", { g: "free" }, "."]],
              extra: ["fifty", "eight"],
              hilfen: ["Es sind fünf Angaben: Uhrzeit, Preis, Busnummer, wie oft der Bus fährt, Eintritt im Park.", "fifteen (15) – Betonung hinten, fifty (50) – Betonung vorne.", "free = kostenlos."] },
            { art: "luecke", id: "i-notizen", nur: "M", titel: "Notes for a rainy day", lead: "Listen and complete the notes. Three words are extra.", foerder: HOEREN,
              absaetze: [["Climbing wall: today closed from ", { g: "one" }, " o'clock."], ["Price for Martha's dad and his two children: ", { g: "eighteen" }, " pounds."], ["Bus number seven: every ", { g: "fifteen" }, " minutes, the ride takes about ", { g: "ten" }, " minutes."], ["Board game café The Dice Box: opens at ", { g: "twelve" }, "."]],
              extra: ["fifty", "eighty", "nine"],
              hilfen: ["The climbing wall opens at nine – but when does it close today?", "Two children and one adult: 5 + 5 + 8."] }
          ] },
        { art: "mc", id: "i-mc", nur: "R", tag: "Details", titel: "In Harrogate", lead: "Tick the right answers. You can listen to the text again." + D("Du kannst den Text oben noch einmal hören."), foerder: HOEREN,
          fragen: [
            { q: "What's the weather like today?", o: ["It's raining.", "It's sunny.", "It's windy."], a: 0, e: "Martha sagt: „it's raining“. Sonnig wird es erst morgen." },
            { q: "What is Harrogate famous for, says Mrs Kaur?", o: ["its water", "its castle", "its beach"], a: 0, e: "Mrs Kaur sagt: „it's famous for its water“. Früher kamen viele Besucher und tranken das Wasser." }
          ],
          hilfen: ["Bei der ersten Frage: Was ist heute – und was ist morgen?", "Hör auf das Wort famous (berühmt)."] },
        { art: "mc", id: "i-mc", nur: "M", tag: "Details", titel: "In Harrogate", lead: "Tick the right answers. You can listen to the text again.", foerder: HOEREN,
          fragen: [
            { q: "Why is the climbing wall closed this afternoon?", o: ["There is a school competition.", "It is too expensive.", "The bus doesn't go there in the afternoon."], a: 0, e: "Mrs Kaur sagt: „there's a school competition this afternoon“. Deshalb müssen Martha und ihr Vater am Vormittag hin." },
            { q: "Why did lots of visitors come to Harrogate a long time ago?", o: ["They drank the water from the springs.", "They climbed in the sports centre.", "They played board games in a café."], a: 0, e: "Früher kamen viele Besucher und tranken das Wasser der Quellen – sie dachten, es sei gut für die Gesundheit." }
          ] }
      ] },
      { kurz: "Voice message", ober: "Listening 3 · a message", titel: "A voice message from Devon", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a voice message from a holiday</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-l1-isabel.jpg\" width=\"1280\" height=\"853\" alt=\"A girl sits on a low stone wall and speaks into her phone; green hills and the sea are far behind her.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the girl doing? Who could the message be for? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: `<p class="lead">Your friend <b>Isabel</b> is on holiday in <b>Devon</b>, in the south-west of England. She sends you a <button class="term" data-t="voicemessage">voice message</button>.${D("Isabel erzählt, was sie an jedem Tag gemacht hat – im simple past. Ein <button class=\"term\" data-t=\"campsite\">campsite</button> ist ein Campingplatz, ein <button class=\"term\" data-t=\"creamtea\">cream tea</button> eine englische Spezialität.")}</p><p><b>Read the tasks first, then listen.</b></p>` },
        { art: "text", nur: "M", html: `<p class="lead">Your friend <b>Isabel</b> is camping in <b>Devon</b>, in the south-west of England. She sends you a <button class="term" data-t="voicemessage">voice message</button>.</p><p><b>Read the tasks first, then listen.</b> Listen for the order of the days and for reasons. You will hear <button class="term" data-t="rockpool">rock pools</button> and a <button class="term" data-t="creamtea">cream tea</button>.</p>` },
        { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: { R: "u1-lp1-isabel-r", M: "u1-lp1-isabel-m" },
          fragen: [
            { art: "ordnen", id: "v-reihe", nur: "R", titel: "Isabel's week", lead: "Put the days in the right order." + D("In welcher Reihenfolge ist das passiert?"),
              schritte: ["Isabel played cards in the tent.", "Isabel swam in the sea.", "Isabel saw wild ponies on Dartmoor.", "Isabel had a cream tea in a café."],
              hilfen: ["Am Montag hat es geregnet.", "Am Dienstag kam die Sonne.", "Gestern war Dartmoor, heute der Cream Tea."] },
            { art: "ordnen", id: "v-reihe", nur: "M", titel: "Isabel's week", lead: "Put the events in the right order.",
              schritte: ["The tent fell down in a storm.", "Isabel and her brother looked for crabs.", "A pony tried to eat Isabel's sandwich.", "The family had a cream tea."],
              hilfen: ["The storm was on the first night."] },
            { art: "tf", id: "v-tf", nur: "R", titel: "True or false?", lead: "Listen and decide." + D("Richtig oder falsch?"),
              aussagen: [["Isabel's tent is very big.", false], ["On Tuesday, the water was very cold.", true], ["Isabel goes home on Sunday.", false]],
              hilfen: ["Hör auf small, cold und Saturday."] },
            { art: "tf", id: "v-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
              aussagen: [["The drive to Devon took six hours.", true], ["After the storm, the family slept in the tent.", false], ["In Devon, people usually put the jam on the scone first.", false]] }
          ] },
        { art: "mc", id: "v-mc", nur: "R", tag: "Details", titel: "Isabel's holiday", lead: "Tick the right answers. You can listen to the text again." + D("Du kannst den Text oben noch einmal hören."), foerder: HOEREN,
          fragen: [
            { q: "Where did Isabel see wild ponies?", o: ["on Dartmoor", "at the campsite", "on the beach"], a: 0, e: "Isabel sagt: „Yesterday we drove to Dartmoor … and we saw wild ponies.“" },
            { q: "What was the weather like on Monday?", o: ["It rained all day.", "It was sunny.", "It was windy."], a: 0, e: "Isabel sagt: „On Monday it rained all day.“ Am Dienstag kam die Sonne." }
          ],
          hilfen: ["Dartmoor ist ein großes Gebiet mit Hügeln und Wiesen in Devon.", "Was haben sie am Montag im Zelt gemacht – und warum?"] },
        { art: "mc", id: "v-mc", nur: "M", tag: "Details", titel: "Isabel's holiday", lead: "Tick the right answers. You can listen to the text again.", foerder: HOEREN,
          fragen: [
            { q: "Why did the drive to Devon take so long?", o: ["There was a lot of traffic.", "Their car broke down.", "They drove to Dartmoor first."], a: 0, e: "Isabel sagt: „because there was so much traffic on the roads“." },
            { q: "Where did the family sleep after the storm?", o: ["in the car", "in a hotel", "in the campsite café"], a: 0, e: "Das Zelt fiel um zwei Uhr nachts um – „We slept in the car.“" }
          ] },
        { art: "offen", id: "v-m7", nur: "M", m7: true, tag: "Your opinion", titel: "The best day", lead: "Which day of Isabel's holiday would you like best? Write <b>one or two sentences</b> and give a reason.",
          tipp: "Use: I would like the day … best because … · The best day for me is …",
          fragen: [{ q: "Which day of Isabel's holiday would you like best? Say why.", m: "I would like the day on Dartmoor best because I love ponies.", k: ["dartmoor|pony|ponies|beach|crab|rock pool|cream tea|scone|storm|tent|car|sea|campsite|cafe|café|tuesday|yesterday|today|first night|drive", "because|so|since"], min: 2 }] }
      ] },
      { kurz: "Your turn", ober: "Language and writing", titel: "Write back to Isabel", teile: [
        { art: "merke", nur: "R", kopf: "SIMPLE PAST", html: "<p><b>Regelmäßige Verben</b> bekommen -ed: walk → <i>walked</i>, watch → <i>watched</i>, visit → <i>visited</i></p><p><b>Unregelmäßige Verben</b> lernst du auswendig: have → <i>had</i> · come → <i>came</i> · drive → <i>drove</i> · eat → <i>ate</i></p><p><b>be:</b> I/he/she/it <i>was</i> · we/you/they <i>were</i></p><p><b>Verneinung:</b> <i>didn't</i> + Grundform: <i>We didn't walk.</i> · <b>Frage:</b> <i>Did</i> you …? + Grundform: <i>Did you have fun?</i></p>" },
        { art: "merke", nur: "M", kopf: "SIMPLE PAST", html: "<ul><li><b>Regular verbs:</b> play → <i>played</i>, walk → <i>walked</i></li><li><b>Irregular verbs:</b> go → <i>went</i>, swim → <i>swam</i>, have → <i>had</i>, drive → <i>drove</i></li><li><b>be:</b> I/he/she/it <i>was / wasn't</i> · we/you/they <i>were / weren't</i></li><li><b>Negative:</b> <i>didn't</i> + base form – <i>We didn't swim in the sea.</i></li><li><b>Question:</b> <i>Did</i> you + base form …? – <i>Did you go to the beach?</i></li></ul>" },
        { art: "luecke", id: "g1", nur: "R", tag: "Grammar in context", titel: "An answer to Isabel", lead: "Complete the message with the simple past." + D("Das Verb in Klammern hilft dir. Drei Wörter bleiben übrig."), foerder: PAST,
          absaetze: [
            ["Hi Isabel! Thanks for your message. My holiday ", { g: "was" }, " (be) great, too."],
            ["We ", { g: "went" }, " (go) to my grandma's house in the country."],
            ["We ", { g: "didn't swim" }, " (not swim) in the sea, but we ", { g: "played" }, " (play) in her big garden."],
            ["On Saturday, we ", { g: "saw" }, " (see) a film at the cinema."],
            ["", { g: "Did" }, " you take lots of photos in Devon? Bye!"]
          ],
          extra: ["were", "goed", "didn't swam"],
          hilfen: ["Zwei Verben sind unregelmäßig: go → went, see → saw.", "Nach didn't steht die Grundform: didn't swim (nicht swam).", "Eine Frage im simple past beginnt mit Did."] },
        { art: "luecke", id: "g1", nur: "M", tag: "Grammar in context", titel: "An answer to Isabel", lead: "Complete the message with the simple past. Three forms are wrong – they never fit.", foerder: PAST,
          absaetze: [
            ["Hi Isabel! What a holiday! Our holiday ", { g: "wasn't" }, " (not be) so exciting."],
            ["We ", { g: "stayed" }, " (stay) at my aunt's flat in the city for a week."],
            ["On the first day, we ", { g: "took" }, " (take) a bus tour, and in the evening we ", { g: "ate" }, " (eat) fish and chips."],
            ["We ", { g: "didn't see" }, " (not see) any wild animals – only some birds in the park!"],
            ["", { g: "Did" }, " you ", { g: "find" }, " (find) more crabs on the beach?"]
          ],
          extra: ["eated", "didn't saw", "taked"],
          hilfen: ["After didn't and Did you … we use the base form: didn't see, Did you find."] },
        { art: "offen", id: "antwort", nur: "R", tag: "Your words", titel: "Your message", lead: "Now write your own short message back to Isabel. Say <b>one thing you did</b> in your last holidays." + D("Schreib ein bis zwei Sätze im simple past."),
          tipp: "Begin: Hi Isabel! In the holidays I … (went, played, saw, visited …)",
          fragen: [{ q: "Write to Isabel: What did you do in your last holidays?", m: "Hi Isabel! In the holidays I went to the lake with my family.", k: ["holiday|holidays|weekend|summer|last|yesterday|ago", "went|was|were|played|saw|visited|had|stayed|swam|ate|made|watched|rode|drove|walked|met|cycled|climbed|bought|took"], min: 2 }],
          hilfen: ["Fang so an: Hi Isabel! In the holidays I …", "Nimm ein Verb im simple past: went, played, visited, saw …", "Beispiel für den Anfang: Hi Isabel! In the holidays I visited …"] },
        { art: "offen", id: "antwort", nur: "M", tag: "Your words", titel: "Your message", lead: "Now write your own message back to Isabel in <b>three sentences</b>: where you were, two things you did (simple past) and one question for her.",
          tipp: "Use: In the holidays we were in … · We … and we … · Did you …?",
          fragen: [{ q: "Write to Isabel: where you were, two things you did and one question.", m: "Hi Isabel! In the summer we were at a lake in Austria. We swam every day and we rented a boat. Did you see the ponies again?", k: ["was|were|went|stayed", "swam|played|saw|visited|had|ate|rented|walked|rode|made|watched|took|climbed|cycled|met|bought|found|tried", "did you|what|where|how|when|was it|were you|do you|are you"], min: 3 }] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "Check", titel: "Right or wrong?", lead: "Think about all three texts." + D("Denke an alle drei Texte."),
          aussagen: [["The lifeguards give the message at a beach in Scarborough.", true], ["You can always swim when you see a red flag.", false], ["Martha asks for things to do on a rainy day.", true], ["Isabel saw the wild ponies at the beach.", false]],
          hilfen: ["Text 1 ist am Strand, Text 2 in der Touristeninformation, Text 3 eine Sprachnachricht vom Zelten."] }
      ] }
    ],
    weiter: { text: "Well done! You can now understand an announcement, a talk at a tourist information and a voice message – with times, numbers, rules and the order of events. Listen to the texts again if something was difficult." }
  });
})();
