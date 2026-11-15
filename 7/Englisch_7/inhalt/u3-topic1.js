/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Topic 1: Getting around by bus and train (Kürzel C11)
   (eine Fahrt mit öffentlichen Verkehrsmitteln planen: einen Chat und den Plan der Fahrt lesen, Wörter zu Verkehr und Zeit
   sortieren, sich mit einem Linienplan den Weg beschreiben, Fundsachen-Aushänge lesen, Ort vor Zeit (G8), eine Einladung am
   Telefon hören – und am Schluss selbst eine Fahrt mit Bus und Bahn planen und beschreiben)
   Buchprinzip (BUCH-UNIT3, Topic 1, nur Aufbau, nichts übernommen): Text zur Fahrt → Reihenfolge und Einzelheiten · Odd one out
   mit Verkehrs- und Zeitwörtern · Wegbeschreibung mit einem Linienplan (Linie, Haltestellen, Umsteigen) · Aushänge zu
   Verlorenem mit Ort und Zeit · Language detectives: Ort vor Zeit (G8) · Einladung am Telefon (Veranstaltung, Ort, Tag,
   Uhrzeit, Zusage oder Absage mit Grund) · Task: eine Fahrt mit öffentlichen Verkehrsmitteln beschreiben (Satzanfänge für
   Abfahrt, Umsteigen, Dauer, Preis, Treffpunkt). Besser: sofortige Rückmeldung, Hilfen in Stufen (R7 mit mehr Tipps), Förder-
   Links an den Stellen, an denen Kinder hängen bleiben, und beim Schreiben die KI-Rückmeldung zu einer Checkliste.
   Differenzierung: Lesen und Hören – eigene Fassungen (R7 197 / M7 359 Wörter Lesetext, R7 126 / M7 216 Wörter Hörtext mit
   drittem Sprecher), eigene Zeilenangaben; Hören – R7 wählt Notizen aus, M7 schreibt sie selbst; Schreiben – R7 mindestens
   40 Wörter mit Satzanfängen, M7 mindestens 60; Plus für M7 (m7): Weg mit dem Linienplan beschreiben, eigener Fundsachen-
   Aushang (für R7 freiwillig).
   LehrplanPLUS E7 1.1 Leseverstehen (Chat, Plan, Aushänge; Einzelheiten und Textstellen), E7 1.2 Hörverstehen (Telefonat,
   Notizen), E7 1.3 Sprechen (einladen, zusagen, absagen), E7 2 Schreiben (Fahrt planen und beschreiben), E7 4 Wortschatz
   öffentliche Verkehrsmittel und Uhrzeit, E7 Grammatik G8 (Ort vor Zeit).
   Texte: „To the match by train and bus“ (texte/u3/u3-t1-plan-r.js und -m.js) – Aoife und Darragh (13, Galway), Fahrt nach
   Limerick; „Notices at the station“ (texte/u3/u3-t1-notices-r.js und -m.js) – drei Aushänge, Brendan und Clodagh;
   „An invitation“ (texte/u3/u3-t1-call-r.js und -m.js) – Ronan und Aoife (M7 zusätzlich Aoifes Vater). Galway und Limerick gibt
   es in Irland; alle Personen, die Buslinien 3, 7 und 12, der Sportplatz „Mill Lane Ground“, Dock Road und die Haltestellen
   sind erfunden.
   Förder-Links: Verkehr und Weg → unit3/extra/transport.html, Ort vor Zeit → unit3/extra/word-order.html.
   Wörter der Unit bis Topic 1 (public transport, timetable, to change, journey, single ticket, return ticket, to get off, stop,
   to take, to leave, to arrive, to cost, notice, key, to call, near, across, on the left/right, until, before, after, at, on,
   in …) kommen bewusst vor.
   BILDER:
   1. Station „Get ready“ (Vorentlastung, Sprechanlass): Ein kleiner Bahnhof am Morgen – zwei Jugendliche mit Rucksäcken stehen
      am Bahnsteig vor einer Anzeigetafel, im Hintergrund ein Zug; keine lesbare Schrift.
   2. Station „Find the way“ (Vorentlastung zum Linienplan): Eine Bushaltestelle mit Fahrplanaushang und Haltestellenschild, ein
      Bus mit der Nummer 3 fährt heran, daneben ein Mädchen mit einem Stadtplan in der Hand.
   3. Station „Notices“ (Sprechanlass): Ein schwarzes Brett in der Bahnhofshalle mit drei Zetteln (unlesbar), darunter ein
      Fundkorb mit einem Handschuhpaar und einer Wasserflasche. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist.
  // Teile mit <span class="de"> im Auftrag und ohne eigenes nur: werden unten in R7 (mit Hilfe) und M7 (ohne) geteilt.
  const OHNE_DE = s => (s || "").replace(/<p><span class="de">.*?<\/span><\/p>/g, "").replace(/ ?<span class="de">.*?<\/span>/g, "");
  function trenne(stationen) {
    stationen.forEach(st => {
      st.teile = st.teile.flatMap(t => {
        const hat = /class="de"/.test((t.lead || "") + (t.auftrag || ""));
        if (t.nur || !hat || t.art === "text" || t.art === "merke") return [t];
        const m = Object.assign({}, t, { nur: "M" });
        if (t.lead) m.lead = OHNE_DE(t.lead);
        if (t.auftrag) m.auftrag = OHNE_DE(t.auftrag);
        return [Object.assign({}, t, { nur: "R" }), m];
      });
    });
    return stationen;
  }
  const TRANSPORT = { href: "unit3/extra/transport.html", text: "Extra: Unterwegs mit Bus und Bahn" };
  const ORTZEIT = { href: "unit3/extra/word-order.html", text: "Extra: Ort vor Zeit Schritt für Schritt" };

  D7Kit.seite({
    id: "u3-topic1",
    titel: "Topic 1: Getting around by bus and train",
    einleitung: "Aoife and Darragh want to see a hurling match in Limerick – but first they have to plan the <b>journey</b>. You read their chat, find your way with a <b>line plan</b>, read notices about lost things and listen to an invitation. Then you plan a journey by bus and train yourself. Du übst, eine Fahrt zu planen und den Weg zu beschreiben – und lernst: <b>Ort vor Zeit</b>.",
    zeit: "etwa 45 Minuten",
    ziele: ["🚆 I understand a chat about a journey and find details in the text.", "🚌 I describe the way with a line plan: take, change, get off.", "📌 I say where and when – place first, then time.", "📞 I understand an invitation on the phone.", "✍️ I plan a journey by public transport and describe it."],
    thema: "Unit 3 Welcome to Ireland, Topic 1: eine Fahrt mit öffentlichen Verkehrsmitteln planen (Ort vor Zeit)",
    quiz: { profi: "Journey pro" },
    glossar: {
      platform: ["platform", "Bahnsteig: Dort steht der Zug und dort steigt man ein und aus."],
      office: ["ticket office", "Fahrkartenschalter: Dort kauft man Fahrkarten und fragt nach Auskünften."],
      ground: ["ground", "Sportplatz oder Stadion: Dort findet ein Spiel statt, zum Beispiel ein Hurling-Spiel."],
      rucksack: ["rucksack", "Rucksack: Das ist eine Tasche, die man auf dem Rücken trägt."],
      reward: ["reward", "Belohnung: Wer etwas Verlorenes zurückbringt, bekommt vielleicht Geld oder ein Geschenk."],
      wall: ["climbing wall", "Kletterwand: Dort klettert man an einer hohen Wand mit Griffen und mit einem Sicherungsgurt."],
      lines: ["line", "Line heißt Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14. Bei einem Bus oder einer Bahn heißt line auch Linie."]
    },
    haupttext: { R: "u3-t1-plan-r", M: "u3-t1-plan-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "Planning a journey", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a journey by train</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-t1-bahnhof.jpg\" width=\"1280\" height=\"853\" alt=\"A girl and a boy with backpacks wait on the platform of a small station; a train is coming.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where are the two? Where could they go? What do they need for the journey? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Aoife and Darragh live in <b>Galway</b>, a city in the west of Ireland. On Saturday they are going to a <b>hurling</b> match in <b>Limerick</b>. They are going without their parents – so they must plan the <b>journey</b> themselves. <span class="de">Die beiden fahren allein zu einem Hurling-Spiel in Limerick. Sie müssen die Fahrt selbst planen. Beide Personen sind erfunden.</span></p><p>How do you get to a big match or a concert in your area? By bus, by train, by car? <span class="de">Überlege kurz für dich: Wie kommst du zu einem Spiel oder Konzert in deiner Nähe?</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", foerder: TRANSPORT,
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du für die Fahrt. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["timetable", "Fahrplan"], ["journey", "Fahrt, Reise"], ["to change", "umsteigen"], ["to get off", "aussteigen"], ["single ticket", "einfache Fahrkarte"], ["return ticket", "Hin- und Rückfahrkarte"], ["platform", "Bahnsteig"]],
          hilfen: ["Fang mit den Wörtern an, die du schon kennst.", "Ein Wort gehört zum Bahnhof, zwei gehören zu Fahrkarten, eines zum Aussteigen.", "Tippe zuerst timetable und suche das Wort, das mit Uhrzeiten zu tun hat."] }
      ] },
      { kurz: "The plan", ober: "Reading", titel: "To the match by train and bus", teile: [
        { art: "text", html: `<p class="lead">Read the chat and the plan. Don't stop at words you don't know. <span class="de">Lies den Chat und den Plan einmal ganz. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u3-t1-plan-r", M: "u3-t1-plan-m" } },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is it about?",
          lead: `Tick the correct answer. <span class="de">Worum geht es im Chat?</span>`,
          fragen: [
            { q: "What are Aoife and Darragh talking about?", o: ["How they get to a match in Limerick", "How they get to school in Galway", "What they want to eat at the match", "Which team will win the match"], a: 0,
              e: "Die beiden planen die Fahrt: Zug, Bus, Preise, Treffpunkt." }
          ] },
        { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happens first?",
          lead: `Put the steps of the journey in the right order. <span class="de">Bring die Schritte der Fahrt in die richtige Reihenfolge.</span>`,
          schritte: ["The two friends meet at Galway station.", "They take the train to Limerick.", "They arrive at Limerick station.", "They change to bus number 3.", "They get off at Mill Lane Ground."],
          hilfen: ["Beginne mit dem Treffpunkt in Galway.", "Zuerst fahren sie mit dem Zug, dann mit dem Bus.", "Der letzte Schritt ist das Aussteigen."] },
        { art: "text", html: `<p class="lead">Now find the details. Tap the lines in the text. <span class="de">Tippe die Zeilen an, in denen die Antwort steht. Der Text bleibt über den Fragen stehen.</span></p>` },
        { art: "beleg", id: "zeilen", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lesetext: "u3-t1-plan-r",
          lead: `Tap the lines with the answer. <span class="de">Dann kannst du die Stelle auch angeben: (ll. 6–7).</span>`,
          hilfen: ["Lies die Frage und suche das passende Wort im Chat: bus, ticket, coat.", "Die Antwort steht oft in der Nachricht von Darragh.", "Zeile für Zeile: Wer spricht? Was sagt er? Passt es zur Frage?"],
          fragen: [
            { q: "How long does the bus ride take?", zeilen: [10, 10], e: "Die Fahrt mit dem Bus dauert etwa zwanzig Minuten.", tipp: "Suche Darragh mit „The bus takes …“." },
            { q: "How much is a single ticket for the bus?", zeilen: [14, 14], e: "Eine einfache Fahrt mit dem Bus kostet zwei Euro.", tipp: "Suche die Antwort auf „What about the tickets?“." },
            { q: "Why does Darragh bring a warm coat?", zeilen: [18, 18], e: "Bei einem Spiel ist es oft kalt.", tipp: "Suche Darraghs Nachricht mit „sandwiches“." }
          ] },
        { art: "beleg", id: "zeilen", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lesetext: "u3-t1-plan-m",
          lead: `Tap the lines with the answer. <span class="de">Dann kannst du die Stelle auch angeben: (ll. 9–10).</span>`,
          fragen: [
            { q: "Why do they choose the all-day ticket for the bus?", zeilen: [20, 21], e: "Die Tageskarte kostet drei Euro. Zwei einfache Fahrten kosten zusammen vier Euro – die Tageskarte ist also billiger.", tipp: "Suche Darraghs Nachricht mit „all-day ticket“." },
            { q: "Why must they not miss the last train?", zeilen: [25, 26], e: "Danach fährt kein Zug mehr nach Galway.", tipp: "Suche „The last train back …“." },
            { q: "Why does Darragh bring a warm coat?", zeilen: [30, 31], e: "Bei einem Spiel ist es oft kalt.", tipp: "Suche Darraghs Nachricht mit „sandwiches“." }
          ] }
      ] },
      { kurz: "Words", ober: "Words and time", titel: "Odd one out", teile: [
        { art: "text", html: `<p class="lead">On a journey you need words for <b>vehicles</b>, <b>tickets</b> and <b>times</b>. In each task one word does not fit with the others. <span class="de">Ein Wort passt nicht zu den anderen drei. Überlege, was die drei gemeinsam haben.</span></p>` },
        { art: "mc", id: "odd", tag: "Odd one out", titel: "Which word does not fit?", foerder: TRANSPORT,
          lead: `Tick the word that does not fit. <span class="de">Welches Wort passt nicht zu den anderen?</span>`,
          hilfen: ["Frage dich: Zu welcher Gruppe gehören drei der vier Wörter?", "Eine Gruppe sind Fahrzeuge, eine Uhrzeiten, eine Arten von Fahrkarten.", "Ein Wort ist keine Fahrkarte, keine Uhrzeit und kein Fahrzeug."],
          fragen: [
            { q: "bus · tram · ticket · train", o: ["ticket", "bus", "tram", "train"], a: 0,
              e: "Bus, tram und train sind Fahrzeuge. Mit einem ticket (Fahrkarte) darf man fahren, es ist selbst kein Fahrzeug." },
            { q: "quarter past · journey · half past · o'clock", o: ["journey", "quarter past", "half past", "o'clock"], a: 0,
              e: "Quarter past, half past und o'clock sagen, wie spät es ist. Journey heißt Fahrt." },
            { q: "single ticket · return ticket · timetable · all-day ticket", o: ["timetable", "single ticket", "return ticket", "all-day ticket"], a: 0,
              e: "Drei Wörter sind Arten von Fahrkarten. Ein timetable (Fahrplan) zeigt, wann ein Bus oder Zug fährt." }
          ] }
      ] },
      { kurz: "Find the way", ober: "Line plan", titel: "Which bus do I take?", teile: [
        { art: "text", html: `<p class="lead">Here are three bus lines in Limerick. Look at the <b>line plan</b>. The stops are in the order the bus drives. <span class="de">Der Linienplan ist erfunden. Die Haltestellen stehen in der Reihenfolge, in der der Bus fährt.</span></p>` },
        { art: "material", daten: { typ: "tabelle", titel: "Limerick city bus – line plan", kopf: ["Line", "Stops in order", "Bus runs"], reihen: [["3", "Station – Market Square – Castle Bridge – Mill Lane Ground", "every 15 minutes"], ["7", "Market Square – Library – Park Road – Hospital", "every 20 minutes"], ["12", "Castle Bridge – Swimming pool – Willow Park – Hill Street", "every 30 minutes"]] } },
        { art: "merke", kopf: "SAY THE WAY", html: `<p>With a line plan you say <b>which line</b>, <b>where</b> to change and <b>where</b> to get off:</p><ul><li><b>Take</b> line … from … / to …</li><li><b>Change</b> to line … at …</li><li><b>Get off</b> at … / at the second stop.</li><li>It is the <b>last</b> stop of the line.</li></ul>` },
        { art: "mc", id: "weg", tag: "Find the way", titel: "From the station to Park Road", foerder: TRANSPORT,
          lead: `Look at the line plan and tick the right way. <span class="de">Du stehst am Bahnhof und willst zur Haltestelle Park Road.</span>`,
          hilfen: ["Auf welcher Linie liegt Park Road? Und wo beginnt diese Linie?", "Die Linie 7 fährt nicht vom Bahnhof ab. Du musst erst zum Market Square.", "Linie 3 bis Market Square, dort umsteigen in die Linie 7."],
          fragen: [
            { q: "How do you get from the station to Park Road?", o: ["Take line 3 to Market Square, change to line 7 and get off at Park Road.", "Take line 7 from the station and get off at Park Road.", "Take line 12 to Castle Bridge and change to line 7.", "Take line 3 to Castle Bridge and get off at Park Road."], a: 0,
              e: "Park Road liegt an der Linie 7. Sie beginnt am Market Square, den die Linie 3 vom Bahnhof aus erreicht." }
          ] },
        { art: "luecke", id: "weg-luecke", tag: "Gap text", titel: "To the library",
          foerder: TRANSPORT,
          lead: `Complete the way from the station to the library. <span class="de">Zwei Wörter bleiben übrig.</span>`,
          hilfen: ["Welche Linie fährt vom Bahnhof ab? Wo hält sie als Erstes?", "Die Bibliothek ist an der Linie 7, gleich nach dem Market Square.", "Ordnung: Take – get off – change – first stop."],
          absaetze: [
            ["Take line ", { g: "3" }, " from the station."],
            ["Get off at Market Square and ", { g: "change" }, " to line 7."],
            ["Get off at the ", { g: "first" }, " stop – the library."]
          ], extra: ["12", "last"] },
        { art: "ordnen", id: "weg-ordnen", tag: "Order", titel: "To the hospital",
          lead: `Put the steps in the right order. <span class="de">Du stehst am Bahnhof und willst zum Krankenhaus (Hospital).</span>`,
          schritte: ["Take line 3 from the station.", "Get off at Market Square.", "Change to line 7.", "Stay on the bus for three stops.", "Get off at the hospital."],
          hilfen: ["Das Krankenhaus ist die letzte Haltestelle der Linie 7.", "Erst Linie 3, dann umsteigen.", "Nach dem Market Square hält die Linie 7 noch dreimal: Library, Park Road, Hospital."] },
        { art: "offen", id: "weg-schreiben", m7: true, tag: "Challenge · Your words", titel: "To Willow Park",
          lead: `Write <b>two or three sentences</b>: how do you get from the station to Willow Park? <span class="de">Schreibe den Weg vom Bahnhof zum Willow Park auf.</span>`,
          fragen: [{ q: "How do you get from the station to Willow Park?", m: "Take line 3 to Castle Bridge. Change to line 12 and get off at the second stop, Willow Park.", k: ["line 3|bus 3|number 3|3 ", "castle", "change", "line 12|bus 12|number 12|12 ", "willow"], min: 4 }],
          tipp: "Start like this: Take line … to … Then change to line … and get off at … Count the stops on line 12." },
        { art: "text", html: `<p><b>With a partner:</b> Choose a stop. Your partner says the way from the station. <span class="de">Mit einer Partnerin oder einem Partner: Wähle eine Haltestelle. Dein Partner beschreibt den Weg vom Bahnhof dorthin.</span></p>` }
      ] },
      { kurz: "Notices", ober: "Lost and found", titel: "Notices at the station", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>lost and found at the station</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-t1-fundkorb.jpg\" width=\"1280\" height=\"853\" alt=\"A notice board with three notes in a station hall; below it a basket with gloves, a bottle, an umbrella and a hat.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see? What do people often lose on a journey? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">At the station there is a board for lost and found things. Read the three <b>notices</b>. Notices often say <b>where</b> and <b>when</b> something happened. <span class="de">Am Bahnhof hängen Zettel für Verlorenes und Gefundenes. Sie sagen oft, wo und wann etwas passiert ist. Alle Personen sind erfunden.</span></p>` },
        { art: "lesetext", lesetext: { R: "u3-t1-notices-r", M: "u3-t1-notices-m" } },
        { art: "tf", id: "aushang-tf", tag: "True or false?", titel: "What do the notices say?",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch? Schau in die Aushänge.</span>`,
          aussagen: [
            ["Brendan lost his rucksack at the bus stop.", false],
            ["The red gloves are at the ticket office.", true],
            ["Clodagh lost her phone on a bus.", false]
          ] },
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<p>Look at the notices: <i>I left it <u>at platform 2</u> <b>on Tuesday afternoon</b>. · I lost it <u>on the train to Limerick</u> <b>on Wednesday evening</b>.</i></p><ul><li>An <u>underlined</u> phrase says <b>where</b> (place).</li><li>A <b>bold</b> phrase says <b>when</b> (time).</li><li>At the end of a sentence the <u>place</u> comes <b>before</b> the <b>time</b>: <i>We met <u>at the cinema</u> <b>on Friday</b>.</i></li></ul><p><span class="de">Im Deutschen steht oft erst die Zeit, im Englischen am Satzende zuerst der Ort.</span></p>` },
        { art: "sort", id: "ort-zeit", tag: "Sort", titel: "Place or time?", foerder: ORTZEIT,
          lead: `Put the phrases into the right box. <span class="de">Sagt die Angabe, wo oder wann?</span>`,
          buckets: ["Place (where?)", "Time (when?)"],
          items: [{ t: "at the ticket office", b: 0 }, { t: "at the bus stop", b: 0 }, { t: "outside the station", b: 0 }, { t: "until Friday", b: 1 }, { t: "on Monday morning", b: 1 }, { t: "at nine o'clock", b: 1 }],
          hilfen: ["Frage: Kann ich mit „Wo?“ oder mit „Wann?“ fragen?", "Tage, Tageszeiten und Uhrzeiten sind Zeitangaben – auch mit at: at nine o'clock.", "Schalter, Haltestelle und Bahnhof sind Orte."] },
        { art: "mc", id: "ort-zeit-mc", tag: "Choose", titel: "Place before time", foerder: ORTZEIT,
          lead: `Tick the sentence with the <b>place before the time</b>. <span class="de">Welcher Satz hat erst den Ort, dann die Zeit?</span>`,
          hilfen: ["Suche in jedem Satz die Ortsangabe (at …, in …) und die Zeitangabe (on …, at … o'clock).", "Der Ort muss vor der Zeit stehen.", "Ort = at the library, Zeit = on Friday."],
          fragen: [
            { q: "Which sentence follows the rule?", o: ["We met at the library on Friday.", "We met on Friday at the library.", "We on Friday met at the library.", "We at the library met on Friday."], a: 0,
              e: "Am Satzende steht der Ort vor der Zeit: at the library, dann on Friday. Das Verb bleibt hinter we." },
            { q: "Which sentence follows the rule?", o: ["They are going to a match in Limerick on Saturday.", "They are going to a match on Saturday in Limerick.", "They are going on Saturday to a match in Limerick.", "On Saturday in Limerick they are going to a match."], a: 0,
              e: "Der Ort in Limerick kommt vor der Zeit on Saturday. Das gilt auch für Zukunftssätze mit are going to." }
          ] },
        { art: "offen", id: "aushang-schreiben", m7: true, tag: "Challenge · Your words", titel: "Your own notice",
          lead: `Write a short notice about something <b>you have lost</b>. Say <b>what</b>, <b>where</b> and <b>when</b>. <span class="de">Schreibe einen kurzen Aushang über etwas Verlorenes. Zuerst der Ort, dann die Zeit.</span>`,
          fragen: [{ q: "Write a short notice about something you lost: what, where, when.", m: "Lost! A black jacket. I left it at the bus stop on Monday morning. Please call me.", k: ["lost|left|forgot|found", "at the|on the|in the|at platform|outside|near", "monday|tuesday|wednesday|thursday|friday|saturday|sunday|morning|afternoon|evening|yesterday|today|o'clock"], min: 3 }],
          tipp: "Start like this: Lost! A … I left it at … on … (place first, then time)." }
      ] },
      { kurz: "Listening", ober: "An invitation", titel: "Aoife gets a phone call", teile: [
        { art: "text", html: `<p class="lead">Ronan phones his friend Aoife. <b>Read the questions first, then listen.</b> <span class="de">Erst die Frage lesen, dann hören. Beim ersten Hören willst du das Thema, beim zweiten die Einzelheiten.</span></p><p>Listen for: <b>What?</b> – <b>Why not?</b> – <b>When?</b> – <b>Where?</b></p>` },
        { art: "mc", id: "hoer-gl", nur: "R", tag: "Before you listen", titel: "What is it about?",
          lead: `Read the question first. Then listen to the phone call below and tick the answer. <span class="de">Erst die Frage lesen, dann hören.</span>`,
          fragen: [
            { q: "Why does Ronan phone Aoife?", o: ["He invites her to his birthday party.", "He asks her for help with homework.", "He wants to say sorry.", "He needs a lift to Limerick."], a: 0,
              e: "Ronan lädt Aoife zu seiner Geburtstagsfeier an der Kletterwand ein." }
          ] },
        { art: "mc", id: "hoer-gl", nur: "M", tag: "Before you listen", titel: "What does Aoife's dad say?",
          lead: `Read the question first. Then listen to the phone call below and tick the answer. <span class="de">Erst die Frage lesen, dann hören.</span>`,
          fragen: [
            { q: "What does Aoife's dad say about the party?", o: ["She can go if she has finished her homework.", "She must stay at home on Sunday.", "She can go without any conditions.", "She has to ask her mum first."], a: 0,
              e: "Aoifes Vater erlaubt es, wenn sie vorher ihre Hausaufgaben erledigt hat. Er bietet auch an, sie zu fahren." }
          ] },
        { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: { R: "u3-t1-call-r", M: "u3-t1-call-m" },
          fragen: [
            { art: "formular", id: "notizen", nur: "R", titel: "Your notes", lead: "Listen again and choose the right answers. <span class=\"de\">Hör noch einmal zu und wähle für jede Frage die richtige Notiz.</span>",
              kopf: "Notes: the invitation",
              felder: [
                { label: "What is the party for?", loesung: ["Ronan's birthday"], wahl: ["Ronan's birthday", "Aoife's birthday", "the end of school"] },
                { label: "Why can't Aoife come on Saturday?", loesung: ["She is going to Limerick."], wahl: ["She is going to Limerick.", "She has to tidy her room.", "She is ill."] },
                { label: "Which day is the party now?", loesung: ["Sunday"], wahl: ["Sunday", "Friday", "Saturday"] },
                { label: "What time does it start?", loesung: ["half past two"], wahl: ["half past two", "a quarter past two", "half past three"] },
                { label: "Where do they meet?", loesung: ["outside the swimming pool"], wahl: ["outside the swimming pool", "at the bus stop", "outside the library"] }
              ] },
            { art: "formular", id: "notizen", nur: "M", titel: "Your notes", lead: "Listen again and write short notes. <span class=\"de\">Hör noch einmal zu und notiere zu jeder Frage ein bis fünf Wörter.</span>",
              kopf: "Notes: the invitation",
              felder: [
                { label: "What is the party for?", platz: "one or two words", loesung: ["birthday", "birthday party", "Ronan's birthday", "his birthday", "a birthday party", "Ronan's birthday party", "it's his birthday", "his birthday party", "birthday at the climbing wall", "for his birthday", "a birthday", "party for Ronan's birthday"] },
                { label: "Why can't Aoife come on Saturday?", platz: "a short reason", loesung: ["going to Limerick", "she is going to Limerick", "she's going to Limerick", "hurling match", "a hurling match", "match in Limerick", "hurling match in Limerick", "she is going to a hurling match", "she's going to a hurling match", "she is going to a match in Limerick", "to Limerick", "Limerick", "going to a match in Limerick", "going to a hurling match", "match", "she goes to Limerick", "she is going to Limerick with Darragh", "she's going to Limerick with Darragh", "going to a hurling match in Limerick", "she has tickets for a match", "she has bought tickets", "she has a hurling match"] },
                { label: "Which day and what time?", platz: "day and time", loesung: ["Sunday, half past two", "Sunday half past two", "Sunday at half past two", "Sunday 2.30", "Sunday, 2.30", "Sunday at 2.30", "Sunday 2:30", "Sunday, 2:30", "Sunday at 2:30", "Sunday 2.30 pm", "Sunday at 2.30 pm", "Sunday, 2.30 pm", "Sunday 14.30", "Sunday at 14.30", "Sunday, 14.30", "Sunday afternoon, half past two", "Sunday at two thirty", "Sunday two thirty", "on Sunday at half past two", "on Sunday, half past two", "on Sunday at 2.30", "on Sunday at 2:30", "Sunday at half past 2", "Sunday 2.30 p.m.", "Sunday at 2.30 p.m."] },
                { label: "Where do they meet?", platz: "name of the place", loesung: ["outside the swimming pool", "outside the pool", "swimming pool", "the swimming pool", "at the swimming pool", "at the pool", "the pool", "pool", "in front of the pool", "in front of the swimming pool", "outside the swimming pool in Dock Road", "outside the pool in Dock Road", "Dock Road", "in Dock Road", "next to the climbing wall", "outside the pool next to the climbing wall", "swimming pool in Dock Road", "the swimming pool in Dock Road", "outside the swimming pool, Dock Road", "outside the pool, Dock Road", "at the swimming pool in Dock Road", "at the pool in Dock Road"] },
                { label: "What does Aoife bring?", platz: "two things", loesung: ["sports shoes and a bottle of water", "sports shoes and water", "sports shoes, water", "sports shoes and a water bottle", "sports shoes and bottle of water", "a bottle of water and sports shoes", "water and sports shoes", "sports shoes, a bottle of water", "sports shoes and a bottle", "trainers and water", "trainers and a bottle of water", "sports shoes + water", "sports shoes & water", "sport shoes and water", "sport shoes and a bottle of water", "shoes and water", "shoes and a bottle of water", "sports shoes and a drink", "sports shoes and a bottle of water", "sports shoes, a bottle of water"] }
              ] }
          ] }
      ] },
      { kurz: "Your task", ober: "Task", titel: "A journey by public transport", teile: [
        { art: "text", html: `<p class="lead">Now it is <b>your</b> turn. A friend wants to meet you in a town near your home. You plan the journey by <b>bus and train</b> and write a message to your friend. <span class="de">Du planst eine Fahrt mit Bus und Bahn zu einem Ort in deiner Nähe und schreibst deinem Freund oder deiner Freundin, wie du hinkommst. Der Ort darf echt sein; die Zeiten kannst du erfinden.</span></p>` },
        { art: "merke", kopf: "USEFUL PHRASES", html: `<p><b>Start</b></p><div class="phrasen"><span>First I take …</span><span>Then I change to …</span></div><p><b>Where and when – place first!</b></p><div class="phrasen"><span>I leave from … at …</span><span>I get off at … at …</span><span>We meet outside … at …</span></div><p><b>How long and how much</b></p><div class="phrasen"><span>The journey takes about …</span><span>A single ticket costs …</span><span>A return ticket costs …</span></div>` },
        ...[40, 60].map((min, i) => ({
          art: "schreiben", id: "reise", nur: i === 0 ? "R" : "M", tag: "Your task", titel: "My journey by bus and train", min,
          auftrag: `<p><b>Write a message to your friend</b> (${min} words or more). Describe your journey by bus and train to a place in your area.${i === 0 ? ` <span class="de">Schreibe mindestens 40 Wörter.</span>` : ""}</p><p>Answer these questions in your message:</p><ul><li>Where do you go?</li><li>Which bus and which train do you take?</li><li>Where do you change?</li><li>When do you leave and when do you arrive?</li><li>How long does it take and how much does it cost?</li><li>Where do you meet your friend?</li></ul><p>Use <b>place before time</b> in at least <b>two sentences</b>.</p>`,
          starter: ["I am going to …", "First I take the bus to …", "Then I change to …", "I leave from … at …", "The journey takes about … and a ticket costs …", "Let's meet outside … at …"],
          kriterien: ["Du sagst, wohin du fährst und mit welchem Bus und welchem Zug.", "Du schreibst, wo du umsteigst.", "Du nennst Abfahrts- und Ankunftszeit.", "Du sagst, wie lange die Fahrt dauert oder was sie kostet.", "Mindestens zwei Sätze haben erst den Ort, dann die Zeit (… outside the station at nine o'clock)."]
        })),
        { art: "text", html: `<p><b>Tell your partner!</b> Say your journey aloud: <i>First I take … Then I change to …</i> Your partner asks: <i>How long does it take?</i> <span class="de">Erzähle deiner Partnerin oder deinem Partner die Fahrt laut. Sie oder er fragt nach der Dauer.</span></p>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["A return ticket is for the way there and back.", true],
            ["In the line plan, line 3 goes from the station to Mill Lane Ground.", true],
            ["In English, the time usually comes before the place at the end of a sentence.", false],
            ["Ronan's party is on Saturday afternoon.", false],
            ["\"Get off\" means to change to another bus.", false],
            ["On line 7 the hospital is the last stop.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can plan a journey, find your way with a line plan, read notices and say where and when. Next: more practice with Unit 3." }
  });
})();
