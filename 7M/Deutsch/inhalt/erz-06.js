/* Deutsch 7 · Erzählen und kreativ schreiben · Modul 6: Schreibwerkstatt – überarbeiten
   (Checkliste, Zeitform Präteritum, einen fremden Entwurf prüfen, eigene Erzählung mit dem Schreibtrainer; Tischduell)
   LehrplanPLUS D7 3.3 (Texte anhand von Kriterien überprüfen und überarbeiten, auch im Austausch mit anderen),
   3.2 (Erzähltexte verfassen), 4.2 (Zeitformen sicher verwenden).
   Text: „Die Radtour (Entwurf)“ (erzaehlen/entwurf-fahrradtour.js) – ein erfundener Entwurf mit eingebauten Schwächen. */
D7Kit.seite({
  id: "erz-06",
  titel: "Schreibwerkstatt: überarbeiten",
  einleitung: "Kein guter Text ist beim ersten Mal fertig – das hat dir die Autorin im ersten Modul verraten. Heute bist du zuerst Lektorin oder Lektor für einen fremden Entwurf. Dann schreibst du deine eigene Erzählung und verbesserst sie mit dem Schreibtrainer.",
  zeit: "etwa 45 Minuten",
  ziele: ["📋 Ich prüfe einen Text mit einer Checkliste.", "⏳ Ich bleibe beim Erzählen im Präteritum.", "🔧 Ich finde Schwächen in einem Entwurf und verbessere sie gezielt.", "✍️ Ich schreibe eine eigene Erzählung und überarbeite sie."],
  haupttext: "erz-entwurf",
  quiz: { profi: "Werkstatt-Profi" },
  glossar: {
    entwurf: ["Entwurf", "Die erste Fassung eines Textes. Sie darf Schwächen haben – dafür gibt es das Überarbeiten."],
    ueberarbeiten: ["Überarbeiten", "Einen Text prüfen und gezielt verbessern: Aufbau, Sprache, Zeitform, Rechtschreibung."],
    checkliste: ["Checkliste", "Eine Liste mit Fragen, die man der Reihe nach an den eigenen Text stellt."],
    praeteritum: ["Präteritum", "Die Erzählzeit für schriftliche Erzählungen: ich rannte, sie sah, wir gingen."],
    lektor: ["Lektorin / Lektor", "Jemand, der die Texte anderer genau liest und Verbesserungen vorschlägt."]
  },
  stationen: [
    { kurz: "Checkliste", ober: "Verstehen", titel: "Die Checkliste für Erzählungen", teile: [
      { art: "karten", karten: [
        { ic: "🧱", titel: "Aufbau", text: "Gibt es Einleitung, Hauptteil mit Höhepunkt und Schluss?" },
        { ic: "📈", titel: "Spannung", text: "Ist der Höhepunkt ausgestaltet – oder in einem Satz abgehakt?" },
        { ic: "💬", titel: "Figuren", text: "Erfährt man Gedanken und Gefühle? Gibt es wörtliche Rede?" },
        { ic: "🎨", titel: "Sprache", text: "Wechseln die Satzanfänge? Sind die Verben treffend?" },
        { ic: "⏳", titel: "Zeitform", text: "Bleibt der Text im Präteritum?" }] },
      { art: "paare", id: "check", tag: "Zuordnen", titel: "Welcher Tipp hilft bei welcher Schwäche?", paare: [
        ["Jeder Satz beginnt mit „Dann“.", "Satzanfänge wechseln"], ["Der Höhepunkt steht in einem einzigen Satz.", "in Zeitlupe ausgestalten"], ["„Der Mann war nett.“", "zeigen statt behaupten"], ["Dreimal „sagte“ hintereinander", "treffende Redeverben suchen"], ["Mal „ging“, mal „geht“", "im Präteritum bleiben"]] }
    ] },
    { kurz: "Zeitform", ober: "Ausprobieren", titel: "Im Präteritum bleiben", teile: [
      { art: "text", html: "<p>Schriftlich erzählt man im <button class=\"term\" data-t=\"praeteritum\">Präteritum</button>. Der häufigste Fehler: Mitten im Text – meist an der spannendsten Stelle – rutscht man ins Präsens. Nur in der wörtlichen Rede darf das Präsens stehen.</p>" },
      { art: "paare", id: "formen", tag: "Formen", titel: "Präsens und Präteritum", paare: [
        ["er rennt", "er rannte"], ["sie sieht", "sie sah"], ["wir gehen", "wir gingen"], ["es fällt", "es fiel"], ["ich schreibe", "ich schrieb"], ["er zieht", "er zog"]] },
      { art: "mc", id: "zeit", tag: "Zeitform prüfen", fragen: [
        { q: "In welchem Satz springt die Zeitform?", o: ["Ich öffnete die Tür und sehe einen Karton.", "Ich öffnete die Tür und sah einen Karton.", "„Ich sehe nichts“, flüsterte ich.", "Ich öffnete die Tür. Davor stand ein Karton."], a: 0, e: "„öffnete“ ist Präteritum, „sehe“ Präsens. In der wörtlichen Rede („Ich sehe nichts“) ist das Präsens dagegen richtig." },
        { q: "Welche Form ist das Präteritum von „laufen“?", o: ["er lief", "er laufte", "er ist gelaufen", "er läuft"], a: 0, e: "„Laufen“ ist ein starkes Verb: laufen – lief – gelaufen." }] },
      { art: "markieren", id: "zeit2", tag: "Markieren", titel: "Wo stimmt die Zeitform nicht?", satz: "Wir kletterten über den Zaun. Plötzlich [[bellt]] ein Hund. Ich erschrak und [[renne]] los. Paul folgte mir.", finde: "die zwei Verben, die nicht im Präteritum stehen", e: "Richtig wäre: Plötzlich bellte ein Hund. Ich erschrak und rannte los." }
    ] },
    { kurz: "Entwurf prüfen", ober: "Selbst antworten", titel: "Du bist Lektorin oder Lektor", teile: [
      { art: "text", html: "<p class=\"lead\">Ein Schüler hat diesen <button class=\"term\" data-t=\"entwurf\">Entwurf</button> geschrieben. Die Idee ist gut – eine Radtour mit Panne. Aber der Text hat Schwächen. Finde sie.</p>" },
      { art: "beleg", id: "stellen", tag: "Schwächen finden", titel: "Tippe die Stelle an", lesetext: "erz-entwurf", fragen: [
        { q: "An welcher Stelle springt der Text ins Präsens?", zeilen: [4, 5], e: "„macht“, „eiert“, „bremse“, „steige“ – vier Verben im Präsens, mitten in der Erzählung.", tipp: "Suche die Stelle, an der es knallt. In welcher Zeitform stehen dort die Verben?" },
        { q: "An welcher Stelle sprechen die beiden miteinander, ohne dass wörtliche Rede vorkommt?", zeilen: [6, 8], e: "Dreimal „sagte, dass …“ – hier gehört ein echtes Gespräch hin.", tipp: "Suche das Wort „sagte“." }] },
      { art: "mc", id: "entw", tag: "Beurteilen", fragen: [
        { q: "Was fällt im ersten Absatz (Zeile 1–3) auf?", o: ["Drei Sätze hintereinander beginnen mit „Dann“.", "Es fehlt die Angabe, wohin die Tour geht.", "Der Absatz steht im Futur.", "Es wird zu viel über Gefühle erzählt."], a: 0, e: "Ort, Zeit und Figuren sind da – aber die Satzanfänge sind eintönig." },
        { q: "„Das war schlecht.“ (Zeile 5–6) – Was fehlt an dieser Stelle?", o: ["Gedanken und Gefühle: Wie geht es dem Erzähler, als der Reifen platt ist?", "eine genaue Uhrzeit", "der Name des Fahrradherstellers", "ein Reim"], a: 0, e: "Der platte Reifen ist die spannendste Stelle. Hier müsste man miterleben, wie es dem Erzähler geht." },
        { q: "Wie ist die Hilfe am Bauernhof (Zeile 9–11) erzählt?", o: ["in sechs sehr kurzen Sätzen, die nur aufzählen", "anschaulich und mit wörtlicher Rede", "viel zu ausführlich", "aus der Sicht des Bauern"], a: 0, e: "„Dort war ein Mann. Der Mann war nett.“ – Das ist behauptet, nicht gezeigt. Was sagt der Mann? Was tut er?" }] },
      { art: "offen", id: "rede", tag: "Verbessern", fragen: [
        { q: "Mache aus „Deniz sagte, dass wir schieben müssen. Ich sagte, dass das zu weit ist.“ ein kurzes Gespräch in wörtlicher Rede – ohne das Wort „sagte“.", m: "„Dann müssen wir eben schieben“, meinte Deniz. „Bis zum See? Das sind noch fünf Kilometer!“, stöhnte ich.", k: ["meinte|stöhnte|rief|seufzte|antwortete|fragte|brummte|murmelte|jammerte|schimpfte|erwiderte|maulte|schlug vor|entgegnete|protestierte|überlegte|stellte fest"] }], tipp: "Was sagt Deniz wörtlich? Was antwortest du? Suche für jeden ein Verb, das zeigt, wie er spricht.",
        hilfen: ["So kannst du beginnen: „Dann müssen wir …“, meinte Deniz.", "Muster: „Rede“, Verb + Name. Zum Beispiel: „Das ist viel zu weit!“, stöhnte ich."] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Erzähl-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 8, fragen: [
        { q: "Die Einleitung nennt …", o: ["Zeit, Ort und Figur", "das Ende", "die Lehre"], a: 0, e: "Wer? Wo? Wann?" },
        { q: "Schriftlich erzählt man im …", o: ["Präteritum", "Präsens", "Futur"], a: 0, e: "Ich ging, sie rief, wir sahen." },
        { q: "Präteritum von „laufen“:", o: ["lief", "laufte", "gelaufen"], a: 0, e: "laufen – lief – gelaufen" },
        { q: "Der Höhepunkt steht …", o: ["gegen Ende des Hauptteils", "in der Einleitung", "im Schluss"], a: 0, e: "Danach kommt die Auflösung." },
        { q: "Treffender als „leise gehen“:", o: ["schleichen", "stapfen", "hasten"], a: 0, e: "Stapfen ist schwer, hasten ist eilig." },
        { q: "„Mein Herz raste.“ zeigt …", o: ["Aufregung", "Langeweile", "Müdigkeit"], a: 0, e: "Ein Körperzeichen statt „Ich war aufgeregt“." },
        { q: "Wörtliche Rede steht in …", o: ["Anführungszeichen", "Klammern", "Großbuchstaben"], a: 0, e: "„So.“" },
        { q: "Ein Schreibplan besteht aus …", o: ["Stichpunkten", "ganzen Sätzen", "Reimen"], a: 0, e: "Ausformuliert wird erst beim Schreiben." },
        { q: "Am Höhepunkt erzählt man …", o: ["in Zeitlupe", "in einem Satz", "in Stichpunkten"], a: 0, e: "Ein kurzer Moment bekommt viele Sätze." },
        { q: "Welches Adjektiv ist überflüssig?", o: ["der nasse Regen", "der eisige Regen", "der warme Regen"], a: 0, e: "Regen ist immer nass." },
        { q: "Präteritum von „bringen“:", o: ["brachte", "bringte", "brang"], a: 0, e: "bringen – brachte – gebracht" },
        { q: "Besser als „Dann … Dann …“:", o: ["Kurz darauf …", "Und dann …", "Dann aber …"], a: 0, e: "Satzanfänge abwechseln." }] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: deine Erzählung", teile: [
      { art: "schreiben", id: "erzaehlung", nur: "R", tag: "Schreibtrainer", titel: "Meine Erzählung", min: 100,
        auftrag: "<p><strong>Schreibe eine Erzählung.</strong> Du kannst deinen Schreibplan aus Modul 1 verwenden oder ein Thema neu wählen:</p><ul><li>Der Zettel im Schließfach</li><li>Plötzlich stand ich allein am Bahnsteig</li><li>Ein Tag, an dem alles schiefging</li></ul><p>Hole dir danach die Rückmeldung, verbessere <strong>eine</strong> Sache und schicke den Text noch einmal ab. Deine Lehrkraft kann beide Fassungen sehen.</p>",
        starter: ["An einem …", "Zuerst dachte ich mir nichts dabei. …", "Plötzlich …", "Mein Herz …", "„…“, rief …", "Erleichtert …"],
        kriterien: ["Einleitung, Hauptteil und Schluss sind erkennbar.", "Der Höhepunkt ist ausgestaltet (mehrere Sätze, Spannung).", "Gedanken oder Gefühle werden gezeigt; es gibt wörtliche Rede.", "Die Satzanfänge wechseln, die Verben sind treffend.", "Der Text bleibt im Präteritum."] },
      { art: "schreiben", id: "erzaehlung", nur: "M", tag: "Schreibtrainer", titel: "Meine Erzählung", min: 140,
        auftrag: "<p><strong>Schreibe eine Erzählung.</strong> Du kannst deinen Schreibplan aus Modul 1 verwenden oder ein Thema neu wählen:</p><ul><li>Der Zettel im Schließfach</li><li>Plötzlich stand ich allein am Bahnsteig</li><li>Ein Tag, an dem alles schiefging</li></ul><p>Hole dir danach die Rückmeldung, verbessere gezielt und schicke den Text noch einmal ab. Deine Lehrkraft kann alle Fassungen sehen.</p>",
        starter: ["An einem …", "Im selben Augenblick …", "Mein Herz …", "„…“, rief …", "Erleichtert …"],
        kriterien: ["Einleitung, Hauptteil und Schluss sind erkennbar; die Einleitung verrät das Ende nicht.", "Der Höhepunkt ist in Zeitlupe ausgestaltet (Sinneseindrücke, kurze Sätze).", "Innere Handlung (Gedanken, Gefühle) und wörtliche Rede mit richtigen Zeichen kommen vor.", "Die Satzanfänge wechseln; treffende Verben, passende Adjektive oder ein Vergleich.", "Der Text bleibt im Präteritum."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "ordnen", id: "weg", tag: "Reihenfolge", titel: "Vom Einfall zum fertigen Text", schritte: ["Ideen sammeln und einen Schreibplan anlegen", "Den Entwurf schreiben", "Den Entwurf laut lesen und mit der Checkliste prüfen", "Schwächen gezielt verbessern", "Zum Schluss Rechtschreibung und Satzzeichen prüfen"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Ein guter Text ist schon im ersten Entwurf fertig.", false],
        ["Beim Überarbeiten hilft es, den Text laut zu lesen.", true],
        ["In der wörtlichen Rede darf das Präsens stehen.", true],
        ["Eine Checkliste arbeitet man Punkt für Punkt ab.", true],
        ["„Der Mann war nett“ zeigt genau, wie der Mann ist.", false]] }
    ] }
  ],
  weiter: { href: "index.html#erzaehlen", titel: "Zurück zur Übersicht", text: "Du hast alle sechs Module zum Erzählen geschafft. Wenn deine Lehrkraft die Probe „Erzählen“ freischaltet, findest du sie in der Übersicht." }
});
