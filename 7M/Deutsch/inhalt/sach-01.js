/* Deutsch 7 · Sachtexte und Informationen · Modul 1: Sachtexte gezielt lesen
   (Lesestrategie, Text überfliegen, Überschrift, Abschnitte, W-Fragen, unbekannte Wörter)
   LehrplanPLUS D7 2.1 Lesetechniken und -strategien anwenden, 2.3 pragmatische Texte verstehen und nutzen.
   Text: „Der Biber“ (texte/sachtexte/r7|m7/biber.js) – R7 5 Abschnitte, 30 Zeilen · M7 7 Abschnitte, 42 Zeilen. */
D7Kit.seite({
  id: "sach-01",
  titel: "Sachtexte gezielt lesen",
  einleitung: "Einen Sachtext liest du nicht wie eine Geschichte. Du willst etwas wissen – und findest es am schnellsten, wenn du in Schritten liest. Heute probierst du das an einem Text über ein Tier aus, das ganze Bäume fällt.",
  zeit: "etwa 40 Minuten",
  ziele: ["👀 Ich verschaffe mir zuerst einen Überblick über einen Text.", "🧩 Ich erkenne Abschnitte und finde passende Überschriften.", "❓ Ich stelle W-Fragen und finde die Antworten im Text.", "🔤 Ich kläre unbekannte Wörter aus dem Zusammenhang."],
  haupttext: { R: "sach-biber-r", M: "sach-biber-m" },
  quiz: { profi: "Lese-Profi" },
  glossar: {
    sachtext: ["Sachtext", "Ein Text, der über ein Thema informiert – zum Beispiel ein Lexikonartikel, ein Zeitungsbericht oder eine Anleitung."],
    ueberfliegen: ["Überfliegen", "Einen Text schnell ansehen, ohne jeden Satz zu lesen: Überschrift, Abschnittsanfänge, auffällige Wörter."],
    abschnitt: ["Abschnitt", "Ein Teil eines Textes, in dem es um einen Gedanken geht. Ein neuer Abschnitt beginnt in einer neuen Zeile."],
    zwischen: ["Zwischenüberschrift", "Eine kurze Überschrift über einem Abschnitt. Sie sagt in wenigen Wörtern, worum es dort geht."],
    wfrage: ["W-Frage", "Eine Frage, die mit einem W-Wort beginnt: Wer? Was? Wo? Wann? Warum? Wie?"],
    zusammenhang: ["Zusammenhang", "Die Sätze vor und nach einer Stelle. Aus ihnen kann man oft erschließen, was ein unbekanntes Wort bedeutet."]
  },
  stationen: [
    { kurz: "Überblick", ober: "Ausprobieren", titel: "Erst überfliegen, dann lesen", teile: [
      { art: "text", html: "<p class=\"lead\">Du sollst etwas über Biber herausfinden und bekommst diesen Text. Wie gehst du vor?</p><p>Ein <button class=\"term\" data-t=\"sachtext\">Sachtext</button> will informieren. Profis lesen ihn nicht einfach von oben nach unten. Sie gehen in Schritten vor – so behalten sie mehr und finden schneller, was sie suchen.</p>" },
      { art: "karten", karten: [
        { ic: "👀", titel: "1 Überfliegen", text: "Überschrift und den ersten Satz jedes Abschnitts lesen. Worum geht es?" },
        { ic: "❓", titel: "2 Fragen stellen", text: "Was will ich wissen? W-Fragen helfen: Wer? Was? Wo? Warum?" },
        { ic: "🔎", titel: "3 Genau lesen", text: "Abschnitt für Abschnitt lesen. Unbekannte Wörter klären." },
        { ic: "✍️", titel: "4 Festhalten", text: "Wichtige Wörter notieren und den Inhalt mit eigenen Worten sagen." }] },
      { art: "lesetext", tag: "Überfliegen", titel: "Dein Text", lead: "<button class=\"term\" data-t=\"ueberfliegen\">Überfliege</button> den Text: Lies nur die Überschrift und von jedem Abschnitt den ersten Satz. Dafür brauchst du höchstens eine Minute.", lesetext: { R: "sach-biber-r", M: "sach-biber-m" } },
      { art: "mc", id: "ueb", tag: "Nach dem Überfliegen", fragen: [
        { q: "Worum geht es in dem Text?", o: ["um ein Tier, seinen Körper, seine Nahrung und seine Bauten", "um die Geschichte eines Jungen, der einen Biber findet", "um den Bau von Staudämmen in Bayern", "um Tiere, die im Wald Bäume beschädigen"], a: 0, e: "Das verraten schon die Überschrift und die ersten Sätze der Abschnitte." },
        { q: "Was liest du beim Überfliegen?", o: ["die Überschrift", "den ersten Satz jedes Abschnitts", "jeden Satz ganz genau", "Wörter, die auffallen (Zahlen, Namen)"], a: [0, 1, 3], e: "Genau lesen kommt erst danach – Abschnitt für Abschnitt." }] },
      { art: "ordnen", id: "schritte", tag: "Reihenfolge", titel: "In welcher Reihenfolge gehst du vor?", schritte: ["Überschrift und Abschnittsanfänge überfliegen", "Fragen an den Text stellen", "Abschnitt für Abschnitt genau lesen", "Wichtige Wörter notieren", "Den Inhalt mit eigenen Worten wiedergeben"] }
    ] },
    { kurz: "Abschnitte", ober: "Verstehen", titel: "Ein Abschnitt – ein Gedanke", teile: [
      { art: "merke", html: "<ul><li>Jeder <button class=\"term\" data-t=\"abschnitt\">Abschnitt</button> hat ein eigenes Thema.</li><li>Eine <button class=\"term\" data-t=\"zwischen\">Zwischenüberschrift</button> sagt in wenigen Wörtern, worum es im Abschnitt geht.</li><li>Wer zu jedem Abschnitt eine Überschrift findet, hat den Text verstanden.</li></ul>" },
      { art: "paare", id: "abs", nur: "R", tag: "Zuordnen", titel: "Welche Überschrift gehört zu welchem Abschnitt?", lead: "Tippe unten links auf <strong>📖 Text</strong>, wenn du nachlesen willst.", paare: [
        ["Abschnitt 1 (Z. 1–5)", "Das größte Nagetier Europas"], ["Abschnitt 2 (Z. 6–12)", "Ein Körper für das Wasser"], ["Abschnitt 3 (Z. 13–18)", "Was Biber fressen"],
        ["Abschnitt 4 (Z. 19–24)", "Burg und Damm"], ["Abschnitt 5 (Z. 25–30)", "Verschwunden und zurückgekehrt"]] },
      { art: "paare", id: "abs", nur: "M", tag: "Zuordnen", titel: "Welche Überschrift gehört zu welchem Abschnitt?", lead: "Tippe unten links auf <strong>📖 Text</strong>, wenn du nachlesen willst.", paare: [
        ["Abschnitt 1 (Z. 1–5)", "Das größte Nagetier Europas"], ["Abschnitt 2 (Z. 6–12)", "Ein Körper für das Wasser"], ["Abschnitt 3 (Z. 13–19)", "Was Biber fressen"],
        ["Abschnitt 4 (Z. 20–24)", "Burg und Damm"], ["Abschnitt 5 (Z. 25–29)", "Verschwunden und zurückgekehrt"], ["Abschnitt 6 (Z. 30–35)", "Ein Teich für viele Tiere"], ["Abschnitt 7 (Z. 36–42)", "Ärger mit dem Rückkehrer"]] },
      { art: "mc", id: "ues", tag: "Überschriften prüfen", fragen: [
        { q: "Welche Überschrift passt NICHT zu Abschnitt 2?", o: ["So jagt der Biber Fische", "Schwimmhäute, Fell und Kelle", "Gebaut für das Leben im Wasser"], a: 0, e: "Abschnitt 2 beschreibt den Körper. Vom Jagen steht dort nichts – und Fische frisst der Biber gar nicht." },
        { q: "Du suchst die Stelle, an der steht, woraus eine Biberburg besteht. In welchem Abschnitt siehst du nach?", o: ["im Abschnitt über Burg und Damm", "im Abschnitt über den Körper", "im Abschnitt über die Nahrung", "im ersten Abschnitt"], a: 0, e: "Die Überschriften im Kopf zeigen dir, wo du suchen musst. So sparst du Zeit." }] },
      { art: "offen", id: "eig", m7: true, tag: "Eigene Überschrift", fragen: [
        { q: "Finde eine eigene Zwischenüberschrift für Abschnitt 6 (Z. 30–35). Sie soll höchstens sechs Wörter haben.", m: "Zum Beispiel: Der Biber schafft neue Lebensräume. Oder: Vom Biberteich profitieren viele Tiere.", k: ["lebensr|tiere|teich|landschaft|natur|nutz|hilft|wasser"] }], tipp: "Frage dich: Was ist in diesem Abschnitt neu? Für wen ist der Biber hier nützlich?" }
    ] },
    { kurz: "Fragen", ober: "Ausprobieren", titel: "Fragen an den Text", teile: [
      { art: "text", html: "<p>Wer genau weiß, was er sucht, findet es schneller. Stelle dem Text <button class=\"term\" data-t=\"wfrage\">W-Fragen</button>: <strong>Wer? Was? Wo? Wann? Warum? Wie?</strong></p><p>Suche dann im Text nach einem Wort aus der Frage. Fragst du „Warum fällt der Biber Bäume?“, suchst du nach <em>Baum</em> oder <em>fällen</em>.</p>" },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstelle finden", titel: "Wo steht die Antwort?", lesetext: "sach-biber-r", fragen: [
        { q: "Wo steht, wie schwer ein Biber wird?", zeilen: [4, 5], e: "Zahlen fallen beim Überfliegen sofort auf.", tipp: "Suche nach einer Zahl mit einer Gewichtsangabe." },
        { q: "Wo steht, wozu der Biber seine Kelle benutzt?", zeilen: [10, 12], e: "Zum Steuern und zum Warnen.", tipp: "Suche das Wort „Kelle“ und lies dort weiter." },
        { q: "Wo steht, warum der Biber Bäume fällt?", zeilen: [14, 16], e: "Er will an die dünnen Zweige in der Krone.", tipp: "Suche nach „fällen“ oder „Baum“." },
        { q: "Wo steht, warum der Eingang der Burg unter Wasser liegt?", zeilen: [20, 21], e: "So kommen Feinde nicht hinein.", tipp: "Suche das Wort „Eingang“." },
        { q: "Wo steht, seit wann es in Bayern wieder Biber gibt?", zeilen: [27, 28], e: "Eine Jahreszahl ist schnell gefunden.", tipp: "Suche nach einer Jahreszahl." }] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstelle finden", titel: "Wo steht die Antwort?", lesetext: "sach-biber-m", fragen: [
        { q: "Wo steht, wie der Biber seine Familie warnt?", zeilen: [10, 12], e: "Er schlägt mit der Kelle auf das Wasser.", tipp: "Suche nach „warnt“ oder „Gefahr“." },
        { q: "Wo steht, warum Biber ganze Bäume fällen?", zeilen: [15, 17], e: "Sie können nicht klettern und wollen an die Zweige der Krone.", tipp: "Suche nach „fällen“ oder „Baum“." },
        { q: "Wo steht, wann der Biber einen Damm baut?", zeilen: [22, 24], e: "Wenn das Gewässer zu flach ist.", tipp: "Suche das Wort „Damm“." },
        { q: "Wo steht, welche Tiere von den Biberteichen profitieren?", zeilen: [31, 33], e: "Frösche, Libellen, Fische und Wasservögel.", tipp: "Suche nach einer Aufzählung von Tieren." },
        { q: "Wo steht, was Biberberater tun?", zeilen: [40, 42], e: "Sie zeigen, wie man Bäume schützt, und vermitteln.", tipp: "Suche das Wort „Biberberater“ und lies dort weiter." }] },
      { art: "offen", id: "wfr", m7: true, tag: "Eigene Frage", fragen: [
        { q: "Schreibe selbst eine W-Frage auf, die der Text beantwortet, und gib die Zeilen an, in denen die Antwort steht.", m: "Zum Beispiel: Warum wurde der Biber früher gejagt? (Z. 25–26)", k: ["wer|was|wo|wann|warum|wie|wozu|weshalb|welche|woraus|womit", "z.|zeile"] }], tipp: "Beginne mit einem W-Wort und setze die Zeilenangabe in Klammern dahinter: (Z. …)." }
    ] },
    { kurz: "Wörter", ober: "Verstehen", titel: "Unbekannte Wörter klären", teile: [
      { art: "text", html: "<p>Ein Wort nicht verstanden? Lies den Satz davor und den Satz danach. Oft erklärt der Text das Wort selbst – man sagt: Die Bedeutung ergibt sich aus dem <button class=\"term\" data-t=\"zusammenhang\">Zusammenhang</button>. Erst wenn das nicht hilft, schlägst du nach.</p>" },
      { art: "mc", id: "wort", nur: "R", tag: "Aus dem Zusammenhang", fragen: [
        { q: "„Man nennt ihn Kelle“ (Z. 9–10). Was ist die Kelle?", o: ["der flache, breite Schwanz des Bibers", "ein Werkzeug zum Bauen", "der Eingang der Biberburg", "ein Nagezahn"], a: 0, e: "Der Satz davor erklärt es: „sein flacher, breiter Schwanz“." },
        { q: "Der Biber „staut den Bach auf“ (Z. 22–23). Was bedeutet das?", o: ["Er hält das Wasser auf, sodass es höher steht.", "Er macht das Wasser sauber.", "Er gräbt dem Bach ein neues Bett.", "Er trinkt den Bach leer."], a: 0, e: "Der Satz danach hilft: „Dadurch steigt das Wasser“." },
        { q: "1966 wurden wieder Biber „ausgesetzt“ (Z. 27–28). Was heißt das?", o: ["Man hat sie in der Natur freigelassen.", "Man hat sie gejagt.", "Man hat sie in einen Zoo gebracht.", "Man hat sie gezählt."], a: 0, e: "Danach gab es wieder Biber in Bayern – also wurden sie freigelassen." }] },
      { art: "mc", id: "wort", nur: "M", tag: "Aus dem Zusammenhang", fragen: [
        { q: "Was ist die „Kelle“ (Z. 9)?", o: ["der flache, breite Schwanz des Bibers", "ein Werkzeug zum Bauen", "der Eingang der Biberburg", "ein Nagezahn"], a: 0, e: "Das Wort steht direkt hinter seiner Erklärung: „der flache, breite Schwanz, die Kelle“." },
        { q: "Vom Biberteich „profitieren viele andere Tiere“ (Z. 31–32). Was bedeutet profitieren?", o: ["einen Vorteil von etwas haben", "vor etwas fliehen", "etwas zerstören", "sich an etwas gewöhnen"], a: 0, e: "Der Satz geht weiter: Die Tiere „finden dort neue Lebensräume“ – das ist ein Vorteil." },
        { q: "Der Biber war „ausgerottet“ (Z. 25). Was heißt das?", o: ["Es gab dort kein einziges Tier mehr.", "Er war sehr selten geworden.", "Er stand unter Schutz.", "Er war in andere Länder gewandert."], a: 0, e: "Erst später wurden „wieder Tiere ausgesetzt“ – vorher gab es also keine mehr." },
        { q: "Biberberater „vermitteln“ zwischen Naturschutz und Betroffenen (Z. 41–42). Was tun sie?", o: ["Sie helfen beiden Seiten, eine Lösung zu finden.", "Sie entscheiden, wer recht hat.", "Sie fangen die Biber ein.", "Sie verkaufen Drahtgitter."], a: 0, e: "Vermitteln heißt: zwischen zwei Seiten stehen und helfen, dass sie sich einigen." }] },
      { art: "luecke", id: "lue", tag: "Wortspeicher", titel: "Setze die Fachwörter ein", absaetze: [
        ["Der Biber ist ein ", { g: "Nagetier" }, " und frisst nur ", { g: "Pflanzen" }, "."],
        ["Sein flacher Schwanz heißt ", { g: "Kelle" }, ". Seine Wohnung ist die ", { g: "Biberburg" }, "."],
        ["Mit einem ", { g: "Damm" }, " staut er das Wasser auf."]], extra: ["Fische", "Höhle"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Beim Überfliegen liest man jeden Satz ganz genau.", false],
        ["Ein neuer Abschnitt beginnt meist mit einem neuen Gedanken.", true],
        ["Eine Zwischenüberschrift fasst einen Abschnitt kurz zusammen.", true],
        ["W-Fragen helfen, gezielt nach Informationen zu suchen.", true],
        ["Unbekannte Wörter lassen sich oft aus den Sätzen davor und danach erklären.", true],
        ["Wer einen Sachtext liest, muss sich am Ende jede Einzelheit merken.", false]] }
    ] }
  ],
  weiter: { href: "sach_02.html", titel: "Modul 2: Das Wichtige finden", text: "Du weißt jetzt, wie du dir einen Überblick verschaffst. Im nächsten Modul lernst du, in einem Text das <strong>Wichtige vom Unwichtigen</strong> zu trennen und die Kernaussage zu finden." }
});
