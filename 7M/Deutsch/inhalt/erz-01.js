/* Deutsch 7 · Erzählen und kreativ schreiben · Modul 1: Ideen finden und planen
   (Ideen sammeln, W-Fragen, Schreibplan; Hörtext: Interview)
   LehrplanPLUS D7 3.2 (Methoden zur Sammlung und Ordnung von Schreibideen, z. B. Cluster; Schreibpläne entwickeln –
   M7: Informationen mit unterschiedlichen Strategien ordnen), 1.1 (Inhalten aus Hörmedien folgen).
   Hörtext: texte/hoertexte/interview-autorin.js (erfundenes Interview). */
D7Kit.seite({
  id: "erz-01",
  titel: "Ideen finden und planen",
  einleitung: "„Mir fällt nichts ein!“ – diesen Satz kennst du bestimmt. Gute Ideen fallen aber nicht vom Himmel. Man kann sie sammeln, ordnen und planen. Wie das geht, verrät dir zuerst eine Autorin im Interview.",
  zeit: "etwa 40 Minuten",
  ziele: ["💡 Ich sammle Einfälle zu einem Thema.", "❓ Ich ordne meine Ideen mit W-Fragen.", "🗺️ Ich lege einen Schreibplan mit Einleitung, Hauptteil und Schluss an.", "🎧 Ich entnehme einem Interview die wichtigsten Tipps."],
  quiz: { profi: "Ideen-Profi" },
  glossar: {
    ideenstern: ["Ideenstern", "In die Mitte schreibst du das Thema, rundherum alle Einfälle dazu. Man nennt das auch Cluster."],
    schreibplan: ["Schreibplan", "Stichpunkte in der richtigen Reihenfolge: Einleitung, Hauptteil mit Höhepunkt, Schluss. Er entsteht vor dem Schreiben."],
    hoehepunkt: ["Höhepunkt", "Die spannendste Stelle einer Erzählung. Auf sie läuft alles zu."],
    hauptfigur: ["Hauptfigur", "Die Person, um die es in der Geschichte vor allem geht."],
    stichpunkt: ["Stichpunkt", "Wenige Wörter statt eines ganzen Satzes."]
  },
  stationen: [
    { kurz: "Interview", ober: "Zuhören", titel: "Woher kommen die Ideen?", teile: [
      { art: "text", html: "<p class=\"lead\">Jette von Radio Pausenhof hat eine Jugendbuchautorin eingeladen. Lies zuerst die Fragen, dann höre zu.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "hoer-interview-autorin", fragen: [
        { art: "mc", id: "hi", titel: "Was sagt die Autorin?", fragen: [
          { q: "Woher bekommt Frau Berger ihre Ideen?", o: ["Sie beobachtet ihre Umgebung und stellt sich Fragen dazu.", "Sie wartet, bis ihr im Traum etwas einfällt.", "Sie übernimmt Ideen aus anderen Büchern.", "Sie fragt ihre Leser."], a: 0, e: "Der Junge mit dem Karton im Bus: Aus einer Beobachtung wurde eine Frage – und daraus eine Geschichte." },
          { q: "Warum macht sie heute zuerst einen Plan?", o: ["Weil sie früher nach wenigen Seiten nicht mehr weiterwusste.", "Weil ihr Verlag das verlangt.", "Weil sie dann weniger schreiben muss.", "Weil ein Plan schneller geht als Schreiben."], a: 0, e: "Erst wenn sie das Ende kennt, schreibt sie den ersten Satz." },
          { q: "Mit welcher Frage beginnt nach ihrer Meinung fast jede gute Geschichte?", o: ["Was wäre, wenn …?", "Wie lang muss der Text sein?", "Wer liest das später?", "Wann ist Abgabe?"], a: 0, e: "„Was wäre, wenn die Tür plötzlich zu wäre?“ – so entsteht eine Idee." }] },
        { art: "tf", id: "htf", titel: "Hast du genau zugehört?", aussagen: [
          ["Frau Berger schreibt ihre Einfälle in ein Notizbuch.", true],
          ["Ihr erster Entwurf ist sofort fertig.", false],
          ["Sie liest ihren Text laut und streicht, was langweilt.", true],
          ["Sie beginnt zu schreiben, bevor sie das Ende kennt.", false]] }] }
    ] },
    { kurz: "Sammeln", ober: "Ausprobieren", titel: "Ideen sammeln", teile: [
      { art: "text", html: "<p>Der <button class=\"term\" data-t=\"ideenstern\">Ideenstern</button> ist das Notizbuch für eine einzelne Geschichte: In die Mitte kommt das Thema, rundherum schreibst du <strong>alles</strong>, was dir einfällt – ohne zu überlegen, ob es gut ist. Aussortiert wird später.</p>" },
      { art: "beispiel", kopf: "Ideenstern zum Thema „Verlaufen im Wald“", html: "<p>Wandertag · Abkürzung · Nebel · Handy ohne Empfang · knackende Äste · ein Hochsitz · Angst · eine Kirchenglocke in der Ferne · der Rucksack mit dem letzten Müsliriegel</p>" },
      { art: "sort", id: "pas", tag: "Aussortieren", titel: "Welche Einfälle helfen der Geschichte „Verlaufen im Wald“?", buckets: ["passt zur Geschichte", "führt vom Thema weg"], cols: 240, items: [
        { t: "Es wird langsam dunkel.", b: 0 }, { t: "Der Weg gabelt sich.", b: 0 }, { t: "In der Ferne bellt ein Hund.", b: 0 }, { t: "Das Handy hat keinen Empfang.", b: 0 },
        { t: "Mein Lieblingsessen ist Pizza.", b: 1 }, { t: "Letztes Jahr waren wir am Meer.", b: 1 }, { t: "Mein Bruder sammelt Fußballbilder.", b: 1 }] },
      { art: "mc", id: "wwf", tag: "Was wäre, wenn …?", fragen: [
        { q: "Welche Frage bringt eine Geschichte am besten in Gang?", o: ["Was wäre, wenn der Bus ohne mich abfährt?", "Wie viele Zeilen soll ich schreiben?", "Welche Farbe hat der Bus?", "Wann fährt der Bus normalerweise?"], a: 0, e: "Eine „Was wäre, wenn“-Frage bringt ein Problem ins Spiel – und ohne Problem gibt es keine spannende Geschichte." },
        { q: "Du hast zwölf Einfälle gesammelt. Was tust du als Nächstes?", o: ["Ich wähle die aus, die zusammenpassen, und streiche den Rest.", "Ich baue alle zwölf in die Geschichte ein.", "Ich fange sofort an zu schreiben.", "Ich sammle zwölf weitere."], a: 0, e: "Sammeln und Auswählen sind zwei Schritte. Eine Geschichte braucht einen roten Faden, nicht möglichst viele Einfälle." }] },
      { art: "offen", id: "ein", tag: "Selbst sammeln", fragen: [
        { q: "Sammle mindestens fünf Einfälle zum Thema „Die verschlossene Tür“. Stichwörter genügen.", m: "Schlüssel fehlt · Hausmeister schon weg · Licht geht aus · Geräusch hinter der Tür · Fenster klemmt · Handy liegt im Klassenzimmer", k: ["schlüssel|tür|eingesperrt|eingeschlossen|klopf|licht|dunkel|fenster|hausmeister|geräusch|angst|hilfe|handy"] }], tipp: "Frage dich: Wo ist die Tür? Wer steht davor oder dahinter? Was fehlt? Was hört man?" }
    ] },
    { kurz: "W-Fragen", ober: "Verstehen", titel: "Mit W-Fragen ordnen", teile: [
      { art: "text", html: "<p>Aus losen Einfällen wird eine Geschichte, wenn du sie ordnest. Sechs Fragen genügen: <strong>Wer? Wo? Wann? Was passiert? Warum? Wie endet es?</strong></p>" },
      { art: "paare", id: "wf", tag: "Zuordnen", titel: "Welche Antwort gehört zu welcher Frage?", lead: "Die Geschichte: Zwei Kinder verlaufen sich am Wandertag.", paare: [
        ["Wer?", "Kerem und seine Cousine Yasmin"], ["Wo?", "im Wald hinter dem Aussichtsturm"], ["Wann?", "am Wandertag, am späten Nachmittag"],
        ["Was passiert?", "Sie nehmen eine Abkürzung und finden nicht zurück."], ["Warum?", "Sie wollen als Erste am Bus sein."], ["Wie endet es?", "Eine Kirchenglocke weist ihnen den Weg ins Dorf."]] },
      { art: "mc", id: "wf2", tag: "Kurz-Check", fragen: [
        { q: "Welche W-Frage klärt, wer die Hauptfigur ist?", o: ["Wer?", "Wo?", "Wann?", "Warum?"], a: 0, e: "Die Hauptfigur ist die Person, um die es geht." },
        { q: "Warum solltest du schon beim Planen wissen, wie die Geschichte endet?", o: ["Damit alles auf dieses Ende zuläuft und nichts Überflüssiges erzählt wird.", "Damit die Geschichte kürzer wird.", "Weil der Schluss zuerst geschrieben wird.", "Das muss man nicht wissen."], a: 0, e: "Wer das Ziel kennt, verläuft sich beim Schreiben nicht – wie die Autorin im Interview." }] }
    ] },
    { kurz: "Schreibplan", ober: "Verstehen", titel: "Der Schreibplan", teile: [
      { art: "merke", html: "<ul><li>Der <button class=\"term\" data-t=\"schreibplan\">Schreibplan</button> entsteht <strong>vor</strong> dem Schreiben.</li><li><strong>Einleitung:</strong> Wer? Wo? Wann? – kurz.</li><li><strong>Hauptteil:</strong> Was passiert Schritt für Schritt? Wo ist der <button class=\"term\" data-t=\"hoehepunkt\">Höhepunkt</button>?</li><li><strong>Schluss:</strong> Wie geht es aus? – kurz.</li><li>Du schreibst <button class=\"term\" data-t=\"stichpunkt\">Stichpunkte</button>, keine ganzen Sätze.</li></ul>" },
      { art: "ordnen", id: "plan", tag: "Reihenfolge", titel: "Bringe den Schreibplan in die richtige Reihenfolge", schritte: ["Wandertag, Kerem und Yasmin trödeln hinter der Klasse", "Abkürzung durch den Wald, um aufzuholen", "Weg gabelt sich, es wird dämmrig, kein Empfang", "Höhepunkt: Es knackt im Gebüsch – ein Reh springt davon", "Kirchenglocke läutet, sie folgen dem Klang", "Am Bus: Die Lehrerin zählt gerade durch"] },
      { art: "mc", id: "pl2", tag: "Schreibplan prüfen", fragen: [
        { q: "Welcher Eintrag passt in einen Schreibplan?", o: ["Höhepunkt: Geräusch im Gebüsch", "Plötzlich hörten wir ein lautes Knacken, und mein Herz blieb fast stehen.", "Ich schreibe über einen Wald.", "Sehr spannend!"], a: 0, e: "Ein Stichpunkt hält fest, was passiert. Der ausformulierte Satz kommt erst beim Schreiben." },
        { q: "Welcher Teil einer Erzählung ist im Schreibplan am ausführlichsten?", o: ["der Hauptteil", "die Einleitung", "der Schluss", "die Überschrift"], a: 0, e: "Im Hauptteil passiert die eigentliche Geschichte. Einleitung und Schluss sind kurz." }] }
    ] },
    { kurz: "Dein Plan", ober: "Schreiben", titel: "Jetzt du: Lege einen Schreibplan an", teile: [
      { art: "schreiben", id: "meinplan", tag: "Schreibtrainer", titel: "Mein Schreibplan", min: 30,
        auftrag: "<p><strong>Wähle ein Thema und lege einen Schreibplan in Stichpunkten an:</strong></p><ul><li>Der Zettel im Schließfach</li><li>Plötzlich stand ich allein am Bahnsteig</li><li>Ein Tag, an dem alles schiefging</li></ul><p>Gliedere in Einleitung, Hauptteil (mindestens drei Schritte, einer davon ist der Höhepunkt) und Schluss.</p>",
        starter: ["Thema:", "Einleitung (wer, wo, wann):", "Hauptteil 1:", "Hauptteil 2:", "Höhepunkt:", "Schluss:"],
        kriterien: ["Die Einleitung nennt Hauptfigur, Ort und Zeit.", "Der Hauptteil hat mindestens drei Schritte.", "Ein Höhepunkt ist erkennbar.", "Es gibt einen Schluss.", "Es sind Stichpunkte, keine ausformulierten Sätze."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Zuerst sammle ich Einfälle in einem ", { g: "Ideenstern" }, "."],
        ["Dann ordne ich sie mit ", { g: "W-Fragen" }, "."],
        ["Zum Schluss lege ich einen ", { g: "Schreibplan" }, " an: Einleitung, Hauptteil mit ", { g: "Höhepunkt" }, " und Schluss."]], extra: ["Aufsatz", "Reim"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Beim Sammeln schreibe ich alles auf, was mir einfällt.", true],
        ["Alle gesammelten Einfälle müssen in die Geschichte.", false],
        ["Ein Schreibplan besteht aus Stichpunkten.", true],
        ["Den Schluss überlege ich mir erst, wenn ich am Ende angekommen bin.", false],
        ["Eine „Was wäre, wenn“-Frage bringt ein Problem in die Geschichte.", true]] }
    ] }
  ],
  weiter: { href: "erz_02.html", titel: "Modul 2: Einleitung, Hauptteil, Schluss", text: "Dein Plan steht. Im nächsten Modul lernst du, wie aus den drei Teilen eine <strong>Erzählung mit rotem Faden</strong> wird." }
});
