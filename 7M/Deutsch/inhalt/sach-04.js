/* Deutsch 7 · Sachtexte und Informationen · Modul 4: Zusammenfassen
   (Stichpunkte, Einleitungssatz, sachlich und im Präsens schreiben, Zusammenfassung mit dem Schreibtrainer)
   LehrplanPLUS D7 3.2 (Texte zusammenfassen; Ergebnisse einer Textuntersuchung als Kurzzusammenfassung darstellen), 2.1, 3.3.
   Text: „Jugendfeuerwehr“ (texte/sachtexte/r7|m7/jugendfeuerwehr.js) – R7 6 Abschnitte · M7 7 Abschnitte. */
D7Kit.seite({
  id: "sach-04",
  titel: "Zusammenfassen",
  einleitung: "Deine Freundin hat den Text nicht gelesen und fragt: „Worum geht es da?“ Jetzt brauchst du eine Zusammenfassung – kurz, sachlich und in deinen eigenen Worten. Heute schreibst du eine, Schritt für Schritt.",
  zeit: "etwa 45 Minuten",
  ziele: ["📝 Ich halte zu jedem Abschnitt einen Stichpunkt fest.", "🚪 Ich schreibe einen Einleitungssatz mit Titel und Thema.", "🧊 Ich schreibe sachlich, im Präsens und ohne eigene Meinung.", "✨ Ich überarbeite meine Zusammenfassung mit einer Rückmeldung."],
  haupttext: { R: "sach-feuerwehr-r", M: "sach-feuerwehr-m" },
  quiz: { profi: "Kurzfasser" },
  glossar: {
    zusammenfassung: ["Zusammenfassung", "Ein kurzer Text, der das Wichtigste eines längeren Textes in eigenen Worten wiedergibt."],
    stichpunkt: ["Stichpunkt", "Wenige Wörter, die eine Information festhalten – kein ganzer Satz."],
    einleitungssatz: ["Einleitungssatz", "Der erste Satz der Zusammenfassung. Er nennt die Textsorte, den Titel und das Thema."],
    sachlich: ["sachlich", "Ohne eigene Meinung, ohne Gefühle und ohne Ausschmückungen – nur das, was im Text steht."],
    praesens: ["Präsens", "Die Gegenwartsform: Der Text informiert … Die Jugendlichen üben …"]
  },
  stationen: [
    { kurz: "Was ist das?", ober: "Verstehen", titel: "Was eine Zusammenfassung ausmacht", teile: [
      { art: "text", html: "<p class=\"lead\">Eine <button class=\"term\" data-t=\"zusammenfassung\">Zusammenfassung</button> ist wie eine Landkarte: Sie zeigt das Wichtigste, aber nicht jeden Baum.</p>" },
      { art: "merke", kopf: "DARAN ERKENNST DU EINE GUTE ZUSAMMENFASSUNG", html: "<ul><li>Sie ist viel kürzer als der Text.</li><li>Sie beginnt mit einem <button class=\"term\" data-t=\"einleitungssatz\">Einleitungssatz</button>: Textsorte, Titel, Thema.</li><li>Sie nennt das Wichtigste aus jedem Abschnitt – in eigenen Worten.</li><li>Sie ist <button class=\"term\" data-t=\"sachlich\">sachlich</button>: keine eigene Meinung, keine Einzelheiten, keine wörtliche Rede.</li><li>Sie steht im <button class=\"term\" data-t=\"praesens\">Präsens</button>.</li></ul>" },
      { art: "sort", id: "geh", tag: "Sortieren", titel: "Was gehört in eine Zusammenfassung?", buckets: ["gehört hinein", "gehört nicht hinein"], cols: 240, items: [
        { t: "der Titel des Textes", b: 0 }, { t: "das Thema", b: 0 }, { t: "die wichtigste Aussage jedes Abschnitts", b: 0 }, { t: "eigene Formulierungen", b: 0 },
        { t: "meine Meinung zum Thema", b: 1 }, { t: "jedes Beispiel aus dem Text", b: 1 }, { t: "abgeschriebene Sätze", b: 1 }, { t: "spannende Ausschmückungen", b: 1 }] },
      { art: "mc", id: "was", tag: "Kurz-Check", fragen: [
        { q: "Wie lang ist eine Zusammenfassung ungefähr?", o: ["deutlich kürzer als der Text – etwa ein Viertel", "ungefähr so lang wie der Text", "immer genau drei Sätze", "länger als der Text, weil man alles erklärt"], a: 0, e: "Kürzen ist die Kunst: Was nicht wichtig ist, fällt weg." },
        { q: "In welcher Zeitform schreibst du eine Zusammenfassung?", o: ["im Präsens", "im Präteritum", "im Futur", "in der Zeitform des Textes"], a: 0, e: "Immer im Präsens – auch wenn der Text von früher erzählt." }] }
    ] },
    { kurz: "Stichpunkte", ober: "Ausprobieren", titel: "Vom Text zu Stichpunkten", teile: [
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lead: "Lies den Text. Überlege bei jedem Abschnitt: Was ist hier das Wichtigste?", lesetext: { R: "sach-feuerwehr-r", M: "sach-feuerwehr-m" } },
      { art: "text", html: "<p>Zu jedem Abschnitt schreibst du <strong>einen</strong> <button class=\"term\" data-t=\"stichpunkt\">Stichpunkt</button>. Stichpunkte sind keine Sätze: wenige Wörter, das Verb am Ende oder ganz weggelassen.</p>" },
      { art: "paare", id: "sp", nur: "R", tag: "Zuordnen", titel: "Welcher Stichpunkt gehört zu welchem Abschnitt?", lead: "Mit <strong>📖 Text</strong> unten links kannst du nachlesen.", paare: [
        ["Abschnitt 1", "meiste Feuerwehrleute: freiwillig"], ["Abschnitt 2", "Jugendfeuerwehr: Eintritt ab zwölf"], ["Abschnitt 3", "Übungen: Schläuche, Knoten, Erste Hilfe"],
        ["Abschnitt 4", "noch keine echten Einsätze"], ["Abschnitt 5", "Gemeinschaft und Zusammenhalt"], ["Abschnitt 6", "viele Aufgaben – Nachwuchs gesucht"]] },
      { art: "paare", id: "sp", nur: "M", tag: "Zuordnen", titel: "Welcher Stichpunkt gehört zu welchem Abschnitt?", lead: "Mit <strong>📖 Text</strong> unten links kannst du nachlesen.", paare: [
        ["Abschnitt 1", "meiste Feuerwehrleute: Freiwillige"], ["Abschnitt 2", "Jugendgruppen sichern Nachwuchs"], ["Abschnitt 3", "Übungen: Technik und Erste Hilfe"],
        ["Abschnitt 4", "Einsätze erst ab 18"], ["Abschnitt 5", "Gemeinschaft als Grund zu bleiben"], ["Abschnitt 6", "neue Aufgaben, zu wenig Einsatzkräfte"], ["Abschnitt 7", "Nutzen für die Jugendlichen selbst"]] },
      { art: "mc", id: "stp", tag: "Stichpunkte prüfen", fragen: [
        { q: "Welcher Stichpunkt ist am besten?", o: ["Ausrüstung kostenlos", "Die Ausrüstung, also Helm, Jacke und Handschuhe, bekommt man gestellt.", "Helm", "Sachen"], a: 0, e: "Kurz, aber verständlich: zwei Wörter, die die Information festhalten." },
        { q: "Warum schreibt man erst Stichpunkte und nicht gleich den ganzen Text?", o: ["Man merkt dabei, was wichtig ist, und schreibt später nicht ab.", "Weil Stichpunkte in der Zusammenfassung stehen müssen.", "Weil es schneller geht, wenn man alles zweimal schreibt."], a: 0, e: "Wer mit eigenen Stichpunkten arbeitet, formuliert danach fast von selbst in eigenen Worten." }] },
      { art: "ordnen", id: "weg", tag: "Reihenfolge", titel: "So entsteht eine Zusammenfassung", schritte: ["Text genau lesen", "Zu jedem Abschnitt einen Stichpunkt notieren", "Einleitungssatz mit Titel und Thema schreiben", "Stichpunkte zu Sätzen ausformulieren", "Prüfen: sachlich, Präsens, eigene Worte?"] }
    ] },
    { kurz: "Erster Satz", ober: "Verstehen", titel: "Der Einleitungssatz", teile: [
      { art: "beispiel", kopf: "Muster", html: "<p><em>Der Sachtext</em> „<em>Titel</em>“ <em>informiert darüber, …</em><br>Oder: <em>In dem Sachtext</em> „<em>Titel</em>“ <em>geht es um …</em></p>" },
      { art: "mc", id: "ein", tag: "Welcher Satz passt?", fragen: [
        { q: "Welcher Einleitungssatz ist gelungen?", o: ["Der Sachtext informiert darüber, was Jugendliche in der Jugendfeuerwehr lernen und warum die Feuerwehr Nachwuchs braucht.", "Ich finde die Feuerwehr super, weil sie Menschen rettet.", "Es war einmal eine Feuerwehr in Bayern.", "In dem Text stehen viele interessante Sachen."], a: 0, e: "Der Satz nennt die Textsorte und das Thema – und zwar genau, nicht nur „viele Sachen“." },
        { q: "Was fehlt in diesem Einleitungssatz? „In dem Text geht es um die Feuerwehr.“", o: ["die Textsorte, der Titel und ein genaueres Thema", "die eigene Meinung", "ein spannender Anfang", "nichts – der Satz ist vollständig"], a: 0, e: "„Um die Feuerwehr“ ist zu ungenau. Besser: um die Jugendfeuerwehr und ihre Aufgaben." }] },
      { art: "luecke", id: "einl", tag: "Lückentext", titel: "Baue den Einleitungssatz", absaetze: [
        ["Der ", { g: "Sachtext" }, " mit dem ", { g: "Titel" }, " „Jugendfeuerwehr“ ", { g: "informiert" }, " darüber,"],
        ["was Jugendliche dort ", { g: "lernen" }, " und warum die Feuerwehr ", { g: "Nachwuchs" }, " braucht."]], extra: ["erzählt", "lernten"] }
    ] },
    { kurz: "Sachlich", ober: "Ausprobieren", titel: "Sachlich und im Präsens", teile: [
      { art: "sort", id: "sach", tag: "Sortieren", titel: "Passt der Satz in eine Zusammenfassung?", buckets: ["sachlich – passt", "passt nicht"], cols: 260, items: [
        { t: "Die Jugendlichen üben den Umgang mit Schläuchen.", b: 0 }, { t: "Mit zwölf Jahren kann man eintreten.", b: 0 }, { t: "Die Feuerwehr hilft auch bei Unfällen.", b: 0 },
        { t: "Ich würde auch gern mal mit dem Feuerwehrauto fahren!", b: 1 }, { t: "Die Jugendlichen übten den Umgang mit Schläuchen.", b: 1 }, { t: "Das Zeltlager ist bestimmt total cool.", b: 1 }] },
      { art: "mc", id: "sa2", tag: "Begründen", fragen: [
        { q: "Warum passt „Die Jugendlichen übten den Umgang mit Schläuchen“ nicht?", o: ["Der Satz steht im Präteritum – eine Zusammenfassung steht im Präsens.", "Der Satz ist zu lang.", "Der Satz enthält eine Meinung.", "Schläuche sind unwichtig."], a: 0, e: "Ein einziger Buchstabe macht den Unterschied: üben (Präsens) – übten (Präteritum)." }] },
      { art: "offen", id: "um", m7: true, tag: "Umformen", fragen: [
        { q: "Mache daraus einen sachlichen Satz im Präsens: „Ich fand es krass, dass die allermeisten Feuerwehrleute das einfach so freiwillig gemacht haben.“", m: "Die meisten Feuerwehrleute arbeiten freiwillig.", k: ["freiwillig", "feuerwehrleute|feuerwehr"] }], tipp: "Streiche „Ich fand es krass“ und „einfach so“. Setze das Verb ins Präsens." }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: Schreibe die Zusammenfassung", teile: [
      { art: "schreiben", id: "zus", nur: "R", tag: "Schreibtrainer", titel: "Zusammenfassung zum Text über die Jugendfeuerwehr", min: 50,
        auftrag: "<p><strong>Schreibe eine Zusammenfassung des Textes</strong> (etwa 60 bis 90 Wörter).</p><p>Nimm deine Stichpunkte zu Hilfe. Beginne mit einem Einleitungssatz. Schreibe sachlich, im Präsens und in eigenen Worten.</p>",
        starter: ["Der Sachtext informiert darüber,", "Zuerst erfährt man,", "Außerdem", "In den Übungsstunden", "Zum Schluss wird erklärt,"],
        kriterien: ["Der Einleitungssatz nennt Textsorte und Thema.", "Das Wichtigste aus den Abschnitten kommt vor.", "Der Text ist sachlich: keine eigene Meinung.", "Der Text steht im Präsens.", "Es sind eigene Worte, keine abgeschriebenen Sätze."] },
      { art: "schreiben", id: "zus", nur: "M", tag: "Schreibtrainer", titel: "Zusammenfassung zum Text über die Jugendfeuerwehr", min: 70,
        auftrag: "<p><strong>Schreibe eine Zusammenfassung des Textes</strong> (etwa 80 bis 120 Wörter).</p><p>Beginne mit einem Einleitungssatz, der Textsorte, Titel und Thema nennt. Gib das Wichtigste aus allen Abschnitten in eigenen Worten wieder – sachlich und im Präsens.</p>",
        starter: ["Der Sachtext „Nachwuchs für den Notfall: die Jugendfeuerwehr“ informiert darüber,", "Zunächst wird erklärt,", "Darüber hinaus", "Abschließend"],
        kriterien: ["Der Einleitungssatz nennt Textsorte, Titel und Thema.", "Aus jedem Abschnitt kommt das Wichtigste vor.", "Einzelheiten und Beispiele sind weggelassen.", "Der Text ist sachlich und steht im Präsens.", "Es sind eigene Worte, keine abgeschriebenen Sätze."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Eine Zusammenfassung enthält meine eigene Meinung.", false],
        ["Der Einleitungssatz nennt Textsorte, Titel und Thema.", true],
        ["Eine Zusammenfassung steht im Präsens.", true],
        ["Wörtliche Rede aus dem Text übernimmt man in die Zusammenfassung.", false],
        ["Stichpunkte helfen, in eigenen Worten zu schreiben.", true],
        ["Beispiele und genaue Zahlen lässt man meistens weg.", true]] }
    ] }
  ],
  weiter: { href: "sach_05.html", titel: "Modul 5: Diagramme, Tabellen, Formulare", text: "Nicht jeder Text besteht aus Sätzen. Im nächsten Modul liest du <strong>Diagramme und Tabellen</strong> und füllst ein Formular aus." }
});
