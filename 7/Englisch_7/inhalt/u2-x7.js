/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Extra: Hören mit W-Fragen (Kürzel B32)
   Kleine Extra-Übung (Förder-Ziel von „Das ist noch schwer?“ beim Hören in Topic 2 und Listening practice 1):
   erst die W-Wörter zuordnen, dann ein kurzes, langsames Telefonat hören und je W-Frage die Antwort zuordnen,
   zuletzt eine Notiz mit den Antworten ergänzen.
   Buchprinzip (nur Aufbau, nichts übernommen): „leichtere“ Hörvariante – Zuordnen statt Notizen schreiben; Fragen zuerst lesen,
   dann hören. Besser: sofortige Rückmeldung, deutscher Merkkasten (R7), Fragen als Hörauftrag vor dem Hören.
   Differenzierung: R7 mit deutschen Hilfen und kürzerem Text (72 Wörter), M7 englisch mit längerem Text (110 Wörter,
   Gegenvorschlag Saturday/Sunday, zwei Personen bei „Who“).
   LehrplanPLUS E7 1.2 Hörverstehen (Telefonat, Einzelheiten entnehmen), E7 3 (W-Fragen).
   Texte: texte/u2/u2-x7-listen-r.js, u2-x7-listen-m.js (Leo = Junge, Cara = Mädchen). Alle Personen erfunden.
   Kein Förder-Link, kein Abschlussquiz (kleine Extra-Übung).
   BILDER:
   1. Station „W-Wörter“ (Vorentlastung): fünf Sprechblasen mit je einem Fragewort, daneben ein kleines Symbol (Person, Uhr,
      Ortsmarke, Ball, Fragezeichen).
   2. Station „Hören“ (Sprechanlass): ein Junge mit Telefon am Ohr sitzt auf einer Treppe, im Hintergrund ein Schwimmbad. */
const x7 = (r, m) => ({ R: r, M: m });
D7Kit.seite({
  id: "u2-x7",
  titel: "Extra: Hören mit W-Fragen",
  einleitung: "Beim Hören musst du nicht jedes Wort verstehen. Du suchst nur die Antworten auf <b>Who? When? Where? Why? What?</b> Hier übst du das Schritt für Schritt – kurz und langsam.",
  zeit: "etwa 10 Minuten",
  ziele: ["❓ I know what each question word asks for.", "🎧 I find Why, Who, When and Where in a short phone call.", "📝 I write the answers in a short note."],
  thema: "Unit 2 Extra: Hören mit W-Fragen",
  stationen: [
    { kurz: "Question words", ober: "Fragewörter", titel: "What does each word ask for?", teile: [
      { art: "merke", nur: "R", kopf: "MERKE", html: "<p>Jedes Fragewort sucht eine bestimmte Antwort:</p><p><b>Who?</b> = <i>Wer?</i> → eine Person<br><b>When?</b> = <i>Wann?</i> → eine Zeit oder ein Tag<br><b>Where?</b> = <i>Wo?</i> → ein Ort<br><b>What?</b> = <i>Was?</i> → eine Sache oder Aktivität<br><b>Why?</b> = <i>Warum?</i> → ein Grund (oft mit <i>because</i>)</p>" },
      { art: "merke", nur: "M", kopf: "NOTE", html: "<p>Every question word looks for a certain answer:</p><p><b>Who?</b> → a person · <b>When?</b> → a time or a day · <b>Where?</b> → a place · <b>What?</b> → a thing or an activity · <b>Why?</b> → a reason (often with <i>because</i>)</p>" },
      { art: "paare", id: "wwords", nur: "R", titel: "Match", lead: "Which answer does the word look for? <span class=\"de\">Was sucht jedes Fragewort? Verbinde.</span>",
        paare: [["Who?", "a person"], ["When?", "a time or a day"], ["Where?", "a place"], ["What?", "a thing or an activity"], ["Why?", "a reason"]],
        hilfen: ["Denk an die Übersetzung: Wer? Wann? Wo? Was? Warum?", "„Wer“ fragt nach einem Menschen."] },
      { art: "paare", id: "wwords", nur: "M", titel: "Match", lead: "Which answer does the word look for? Match the pairs.",
        paare: [["Who?", "a person"], ["When?", "a time or a day"], ["Where?", "a place"], ["What?", "a thing or an activity"], ["Why?", "a reason"]],
        hilfen: ["Think about the answer: a name, a time, a place …"] }
    ] },
    { kurz: "Listening", ober: "Phone call", titel: "Swimming on Sunday", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a phone call</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-x7-treppe.jpg\" width=\"1280\" height=\"853\" alt=\"A boy with a phone at his ear sits on a staircase; a swimming pool behind him.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is he talking to? Where is he? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Leo phones his friend Cara. <b>Read the questions first, then listen.</b> <span class=\"de\">Lies erst die vier Fragen, dann hör zu: Why? Who? When? Where?</span></p><p>Listen for: <b>Why</b> do they choose this day? <b>Who</b> comes too? <b>When</b> do they meet? <b>Where</b> do they meet?</p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: x7("u2-x7-listen-r", "u2-x7-listen-m"),
        fragen: [
          { art: "mc", id: "hoer-q", nur: "R", titel: "Choose the answers", lead: "Choose the right answer for each question word. <span class=\"de\">Wähle zu jedem Fragewort die richtige Antwort.</span>",
            fragen: [
              { q: "Why Sunday?", o: ["It is going to be hot.", "It is Leo's birthday.", "The pool is cheap."], a: 0, e: "Leo sagt: „Because it is going to be very hot.“" },
              { q: "Who comes too?", o: ["Leo's sister", "Cara's brother", "Leo's teacher"], a: 0, e: "Leos Schwester Jana kommt auch mit." },
              { q: "When do they meet?", o: ["at ten o'clock", "at two o'clock", "at eight o'clock"], a: 0, e: "Sie treffen sich um zehn Uhr." },
              { q: "Where do they meet?", o: ["at the station", "at the pool", "at school"], a: 0, e: "Sie treffen sich am Bahnhof und fahren dann mit dem Bus zum Schwimmbad." }
            ] },
          { art: "mc", id: "hoer-q", nur: "M", titel: "Choose the answers", lead: "Choose the right answer for each question word.",
            fragen: [
              { q: "Why do they go on Sunday?", o: ["Leo has football on Saturday.", "Cara has a party on Saturday.", "The pool is closed on Saturday."], a: 0, e: "Am Samstag hat Leo Fußball, deshalb schlägt er Sonntag vor." },
              { q: "Who comes too?", o: ["Leo's sister and her friend", "Cara's mum and dad", "Leo's friends from football"], a: 0, e: "Leos Schwester Jana und ihre Freundin Mia kommen mit." },
              { q: "When do they meet?", o: ["Sunday, half past ten", "Saturday, half past ten", "Sunday, half past two"], a: 0, e: "Sie treffen sich am Sonntag um halb elf." },
              { q: "Where do they meet?", o: ["at the station, next to the ticket machine", "at the pool, next to the entrance", "at the lake, next to the bus stop"], a: 0, e: "Treffpunkt ist der Bahnhof, neben dem Fahrkartenautomaten." }
            ] }
        ] }
    ] },
    { kurz: "My note", ober: "Short note", titel: "Write the note", teile: [
      { art: "luecke", id: "note", nur: "R", titel: "Fill in the note", lead: "Use your answers and finish the note. <span class=\"de\">Ergänze die Notiz mit den Antworten aus dem Telefonat.</span>",
        absaetze: [["Leo and Cara go swimming on ", { g: "Sunday" }, ". They meet at ", { g: "ten" }, " o'clock at the ", { g: "station" }, "."]],
        extra: ["Saturday", "pool"],
        hilfen: ["Schau in deine Antworten zum Telefonat oben.", "Ein Wochentag, eine Uhrzeit, ein Ort."] },
      { art: "luecke", id: "note", nur: "M", titel: "Fill in the note", lead: "Use your answers and finish the note.",
        absaetze: [["Leo and Cara go swimming on ", { g: "Sunday" }, ". They meet at half past ", { g: "ten" }, " at the ", { g: "station" }, "."]],
        extra: ["Saturday", "pool"],
        hilfen: ["Use the answers from the phone call."] }
    ] }
  ],
  weiter: { text: "Geh jetzt zurück zu deiner Aufgabe und probiere es noch einmal." }
});
