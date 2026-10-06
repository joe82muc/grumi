/* Deutsch 7 · Sachtexte und Informationen · Modul 2: Das Wichtige finden
   (Schlüsselwörter, wichtige und unwichtige Informationen, Kernaussage; Duell gegen die KI)
   LehrplanPLUS D7 2.1 (R7: Informationen ordnen, Inhalte abschnittsweise wiedergeben · M7: Kernaussagen zusammenfassen), 2.3.
   Text: „Gewitter“ (texte/sachtexte/r7|m7/gewitter.js) – R7 5 Abschnitte, 31 Zeilen · M7 6 Abschnitte, 41 Zeilen. */
D7Kit.seite({
  id: "sach-02",
  titel: "Das Wichtige finden",
  einleitung: "In jedem Sachtext stecken viele Informationen – aber nicht alle sind gleich wichtig. Heute lernst du, die entscheidenden Wörter zu finden und in einem Satz zu sagen, worum es geht. Dein Text handelt von Blitz und Donner.",
  zeit: "etwa 40 Minuten",
  ziele: ["🔑 Ich finde in einem Abschnitt die Schlüsselwörter.", "⚖️ Ich unterscheide wichtige Informationen von Einzelheiten.", "🎯 Ich formuliere die Kernaussage eines Abschnitts in einem Satz.", "🤖 Ich prüfe, ob eine Kernaussage wirklich zum ganzen Text passt."],
  haupttext: { R: "sach-gewitter-r", M: "sach-gewitter-m" },
  quiz: { profi: "Kern-Finder" },
  glossar: {
    schluessel: ["Schlüsselwort", "Ein Wort, das man braucht, um einen Abschnitt zu verstehen. Meist ein Nomen oder ein wichtiges Verb."],
    kern: ["Kernaussage", "Das Wichtigste eines Abschnitts oder Textes, in einem Satz gesagt."],
    einzelheit: ["Einzelheit", "Eine genaue Angabe, ein Beispiel oder eine Ausschmückung. Sie macht den Text anschaulich, gehört aber nicht zum Kern."],
    entladen: ["sich entladen", "Elektrische Spannung gleicht sich plötzlich aus – beim Gewitter sieht man das als Blitz."]
  },
  stationen: [
    { kurz: "Schlüsselwörter", ober: "Ausprobieren", titel: "Wörter, die den Text aufschließen", teile: [
      { art: "text", html: "<p class=\"lead\">Stell dir vor, du darfst von einem Abschnitt nur drei Wörter behalten. Welche nimmst du?</p><p>Genau das sind <button class=\"term\" data-t=\"schluessel\">Schlüsselwörter</button>: Wörter, ohne die man den Abschnitt nicht mehr versteht. Meist sind es Nomen, manchmal ein wichtiges Verb. Pro Abschnitt reichen zwei bis vier.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lead: "Lies den Text einmal ganz – erst überfliegen, dann genau.", lesetext: { R: "sach-gewitter-r", M: "sach-gewitter-m" } },
      { art: "markieren", id: "mk1", tag: "Markieren", titel: "Schlüsselwörter antippen", satz: "Ein [[Gewitter]] entsteht, wenn warme, feuchte [[Luft]] schnell nach oben [[steigt]].", finde: "die drei Schlüsselwörter", e: "Mit Gewitter – Luft – steigt kannst du den Satz fast wieder zusammensetzen." },
      { art: "markieren", id: "mk2", satz: "Der [[Blitz]] erhitzt die Luft in seiner Bahn. Die heiße Luft [[dehnt sich]] schlagartig [[aus]]. Das hören wir als [[Donner]].", finde: "die vier wichtigsten Stellen", e: "Blitz – dehnt sich aus – Donner: Das ist die Erklärung in Kurzform." },
      { art: "mc", id: "sw", tag: "Schlüsselwörter prüfen", fragen: [
        { q: "Welche Wörter sind KEINE guten Schlüsselwörter?", o: ["und, sehr, dabei", "Blitz, Donner", "Wolke, Spannung", "Entfernung, Sekunden"], a: 0, e: "Kleine Wörter wie „und“ oder „sehr“ kommen in jedem Text vor. Sie sagen nichts über das Thema." },
        { q: "Du hast in einem kurzen Abschnitt zwölf Wörter markiert. Was ist passiert?", o: ["Ich habe zu viel markiert – das Wichtige sticht nicht mehr heraus.", "Alles richtig: Je mehr markiert ist, desto besser.", "Der Abschnitt hat eben zwölf Schlüsselwörter."], a: 0, e: "Wer alles markiert, hat nichts hervorgehoben. Zwei bis vier Wörter je Abschnitt genügen." }] }
    ] },
    { kurz: "Wichtig?", ober: "Verstehen", titel: "Wichtig oder Einzelheit?", teile: [
      { art: "merke", html: "<ul><li><strong>Wichtig</strong> ist, was du brauchst, um das Thema zu erklären.</li><li>Eine <button class=\"term\" data-t=\"einzelheit\">Einzelheit</button> ist ein Beispiel, eine genaue Zahl oder eine Ausschmückung.</li><li>Probe: Lass den Satz weg. Versteht man den Abschnitt trotzdem? Dann war es eine Einzelheit.</li></ul>" },
      { art: "sort", id: "wu", tag: "Sortieren", titel: "Was gehört zum Kern, was ist eine Einzelheit?", lead: "Du willst jemandem erklären, wie ein Gewitter entsteht und wie man sich schützt.", buckets: ["wichtig", "Einzelheit"], cols: 240, items: [
        { t: "Warme, feuchte Luft steigt auf.", b: 0 }, { t: "In der Wolke entsteht elektrische Spannung.", b: 0 }, { t: "Der Blitz ist eine elektrische Entladung.", b: 0 }, { t: "Im Haus oder im Auto ist man sicher.", b: 0 },
        { t: "Manche Menschen finden Gewitter spannend.", b: 1 }, { t: "In der Ferne grollt es.", b: 1 }, { t: "Bei neun Sekunden sind es drei Kilometer.", b: 1 }, { t: "Es gibt einen alten Spruch über Buchen.", b: 1 }] },
      { art: "mc", id: "wu2", tag: "Begründen", fragen: [
        { q: "Warum ist „Bei neun Sekunden sind es drei Kilometer“ nur eine Einzelheit?", o: ["Es ist ein Rechenbeispiel zu der Regel, die davor erklärt wird.", "Weil Zahlen in Sachtexten nie wichtig sind.", "Weil der Satz am Ende des Abschnitts steht."], a: 0, e: "Wichtig ist die Regel (Sekunden zählen, durch drei teilen). Das Beispiel macht sie nur anschaulich." }] }
    ] },
    { kurz: "Kernaussage", ober: "Selbst antworten", titel: "Die Kernaussage – ein Satz genügt", teile: [
      { art: "text", html: "<p>Die <button class=\"term\" data-t=\"kern\">Kernaussage</button> sagt in <strong>einem</strong> Satz, worum es in einem Abschnitt geht. So findest du sie:</p><ol class=\"schritte-liste\"><li>Schlüsselwörter des Abschnitts suchen.</li><li>Fragen: Was erfahre ich hier über das Thema?</li><li>Die Antwort in einem eigenen Satz sagen – ohne Beispiele und ohne genaue Zahlen.</li></ol>" },
      { art: "beispiel", html: "<p><strong>Abschnitt 1:</strong> Schlüsselwörter <em>Gewitter – Sommer</em>.<br><strong>Kernaussage:</strong> Im Sommer ziehen bei uns häufig Gewitter auf.</p>" },
      { art: "mc", id: "ka2", tag: "Kernaussage prüfen", fragen: [
        { q: "Was gehört NICHT in eine Kernaussage?", o: ["Beispiele und genaue Zahlen", "das Thema des Abschnitts", "die wichtigste Information des Abschnitts"], a: 0, e: "Beispiele und genaue Zahlen sind Einzelheiten. Die Kernaussage bleibt allgemein – aber beim Thema." },
        { q: "Im Abschnitt über die Entfernung steht ein Rechenbeispiel mit neun Sekunden. Welcher Satz ist die Kernaussage dieses Abschnitts?", o: ["Aus der Zeit zwischen Blitz und Donner lässt sich berechnen, wie weit ein Gewitter entfernt ist.", "Bei neun Sekunden ist das Gewitter drei Kilometer weit weg.", "Licht und Schall sind verschieden.", "Man muss gut zählen können."], a: 0, e: "Das Rechenbeispiel ist nur eine Einzelheit. „Licht und Schall sind verschieden“ ist zu allgemein." },
        { q: "Eine Kernaussage ist gelungen, wenn …", o: ["jemand, der den Abschnitt nicht kennt, danach weiß, worum es geht.", "sie möglichst viele Wörter aus dem Text enthält.", "sie länger ist als der Abschnitt.", "sie eine eigene Meinung enthält."], a: 0, e: "Das ist die beste Probe: Erzähle deine Kernaussage jemandem – versteht er, worum es geht?" }] },
      { art: "paare", id: "ka", nur: "R", tag: "Zuordnen", titel: "Welche Kernaussage gehört zu welchem Abschnitt?", paare: [
        ["Abschnitt 2 (Z. 6–11)", "In einer hohen Wolke entsteht elektrische Spannung."], ["Abschnitt 3 (Z. 12–17)", "Der Blitz ist ein Funke, der Donner sein Knall."],
        ["Abschnitt 4 (Z. 18–24)", "Aus der Zeit zwischen Blitz und Donner ergibt sich die Entfernung."], ["Abschnitt 5 (Z. 25–31)", "Wer sich richtig verhält, ist bei Gewitter geschützt."]] },
      { art: "paare", id: "ka", nur: "M", tag: "Zuordnen", titel: "Welche Kernaussage gehört zu welchem Abschnitt?", paare: [
        ["Abschnitt 2 (Z. 6–12)", "In einer hohen Wolke entsteht elektrische Spannung."], ["Abschnitt 3 (Z. 13–19)", "Der Blitz ist ein Funke, der Donner seine Druckwelle."],
        ["Abschnitt 4 (Z. 20–26)", "Aus der Zeit zwischen Blitz und Donner ergibt sich die Entfernung."], ["Abschnitt 5 (Z. 27–33)", "Metall leitet den Blitz um Menschen und Gebäude herum."], ["Abschnitt 6 (Z. 34–41)", "Im Freien schützt das richtige Verhalten."]] },
      { art: "offen", id: "ks", nur: "R", tag: "Selbst formulieren", fragen: [
        { q: "Schreibe die Kernaussage von Abschnitt 3 (Z. 12–17) in einem eigenen Satz auf.", m: "Bei einem Blitz entlädt sich die Spannung, und die heiße Luft dehnt sich so schnell aus, dass es donnert.", k: ["blitz", "donner|knall|kracht", "entl|funke|spannung|heiß|erhitz|luft"], min: 2 }], tipp: "Benutze die Schlüsselwörter Blitz und Donner und sage, wie sie zusammenhängen.",
        hilfen: ["Beginne so: Ein Blitz ist …", "Der Abschnitt erklärt zwei Dinge: was ein Blitz ist und warum es donnert.", "Verbinde beides mit „und deshalb“ oder „dadurch“."] },
      { art: "offen", id: "ks", nur: "M", tag: "Selbst formulieren", fragen: [
        { q: "Schreibe die Kernaussage von Abschnitt 5 (Z. 27–33) in einem eigenen Satz auf.", m: "Im Auto und in Gebäuden mit Blitzableiter ist man sicher, weil Metall den Strom außen herum in die Erde leitet.", k: ["auto|gebäude|haus|blitzableiter", "leitet|metall|strom|käfig|schütz|sicher"] }], tipp: "Welche zwei Schutzmöglichkeiten nennt der Abschnitt – und was haben sie gemeinsam?" },
      { art: "offen", id: "kg", m7: true, tag: "Der ganze Text", fragen: [
        { q: "Fasse die Kernaussage des ganzen Textes in ein bis zwei Sätzen zusammen.", m: "Ein Gewitter entsteht durch aufsteigende warme Luft, in der Wolke baut sich Spannung auf, die sich als Blitz entlädt. Wer weiß, wie er sich verhalten muss, kann sich schützen.", k: ["gewitter", "entsteh|luft|wolke|spannung", "schütz|verhalten|sicher|gefahr"], min: 2 }], tipp: "Dein Satz muss zum Anfang und zum Ende des Textes passen: Entstehung und Schutz." }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Wer findet die Kernaussage?", teile: [
      { art: "duell", id: "kernduell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf kurze Texte, fünfmal die Frage: Welcher Satz ist die Kernaussage? Die KI antwortet auch – aber Vorsicht, sie fällt manchmal auf eine Einzelheit herein.",
        runden: [
          { material: "Igel halten Winterschlaf. Von November bis März verkriechen sie sich in einem Nest aus Laub. Ihr Herz schlägt dann nur noch wenige Male in der Minute, und die Körpertemperatur sinkt stark ab. So sparen sie Energie, denn im Winter finden sie kaum Futter.",
            q: "Welcher Satz ist die Kernaussage?", o: ["Igel überstehen den Winter, indem sie im Winterschlaf Energie sparen.", "Igel bauen Nester aus Laub.", "Im Winter ist es kalt.", "Igel fressen im Winter besonders viel."], a: 0, ki: 0, kiText: "denn der Satz verbindet Winterschlaf und den Grund dafür.",
            e: "Die Kernaussage nennt das Thema (Winterschlaf) und das Wichtigste dazu (Energie sparen).",
            begruende: { q: "Warum ist „Igel bauen Nester aus Laub“ keine Kernaussage?", m: "Das ist nur eine Einzelheit aus dem Text und sagt nicht, worum es insgesamt geht.", k: ["einzelheit|detail|nur ein|nicht das wichtigste|nebensache|beispiel|nicht alles|nicht insgesamt"] } },
          { material: "Altglas kann man immer wieder einschmelzen und zu neuen Flaschen formen. Dabei geht nichts von dem Material verloren. Außerdem braucht man zum Einschmelzen von Scherben weniger Energie als zur Herstellung von neuem Glas. Deshalb lohnt es sich, leere Gläser zum Container zu bringen.",
            q: "Welcher Satz ist die Kernaussage?", o: ["Glas zu sammeln lohnt sich, weil es sich ohne Verlust und mit weniger Energie wiederverwerten lässt.", "Leere Gläser bringt man zum Container.", "Glas besteht aus Scherben.", "Neue Flaschen sind teuer."], a: 0, ki: 1, kiText: "das steht ja im letzten Satz, und der letzte Satz ist immer der wichtigste.",
            e: "Der letzte Satz ist nicht automatisch der Kern. „Zum Container bringen“ ist nur die Folgerung – warum es sich lohnt, steht in der richtigen Antwort." },
          { material: "Hat eine Honigbiene eine gute Futterquelle gefunden, fliegt sie zurück in den Stock. Dort führt sie auf der Wabe einen Tanz auf. Aus der Richtung und der Dauer des Tanzes erkennen die anderen Bienen, wo die Blüten zu finden sind. Kurz darauf fliegen sie selbst dorthin.",
            q: "Welcher Satz ist die Kernaussage?", o: ["Bienen zeigen einander mit einem Tanz, wo es Futter gibt.", "Bienen fliegen zurück in den Stock.", "Bienen tanzen gern.", "Blüten sind für Bienen wichtig."], a: 0, ki: 0, kiText: "weil er sagt, wozu der Tanz dient.",
            e: "„Bienen tanzen gern“ klingt ähnlich, lässt aber das Wichtigste weg: Der Tanz ist eine Mitteilung." },
          { material: "Der Fennek lebt in der Sahara. Seine riesigen Ohren geben Körperwärme ab und kühlen ihn so. Tagsüber bleibt er in seinem Bau unter dem Sand, erst in der kühlen Nacht geht er auf die Jagd. Wasser braucht er kaum, denn es steckt in seiner Nahrung.",
            q: "Welcher Satz ist die Kernaussage?", o: ["Der Fennek ist auf viele Arten an das Leben in der heißen Wüste angepasst.", "In der Wüste ist es heiß.", "Der Fennek hat riesige Ohren.", "Der Fennek jagt nachts."], a: 0, ki: 1, kiText: "denn um die Hitze geht es doch in jedem Satz.",
            e: "„In der Wüste ist es heiß“ ist zu allgemein: Der Fennek kommt darin gar nicht vor. Eine Kernaussage muss zum Thema des Textes passen." },
          { material: "Wer einen Unfall beobachtet, muss helfen – das schreibt das Gesetz vor. Niemand verlangt, dass man sich dabei selbst in Gefahr bringt. Aber den Notruf 112 wählen und bei der verletzten Person bleiben, das kann jeder. Schon das kann Leben retten.",
            q: "Welcher Satz ist die Kernaussage?", o: ["Bei einem Unfall muss und kann jeder helfen – mindestens mit einem Notruf.", "Der Notruf hat die Nummer 112.", "Unfälle sind gefährlich.", "Man soll sich bei einem Unfall in Gefahr bringen."], a: 0, ki: 0, kiText: "weil er die Pflicht und die Möglichkeit zu helfen zusammenfasst.",
            e: "Die Nummer 112 ist wichtig zu wissen – im Text ist sie aber eine Einzelheit.",
            begruende: { q: "Woran erkennst du, dass „Unfälle sind gefährlich“ zu allgemein ist?", m: "Der Satz sagt nichts über das Helfen, um das es im Text geht – er würde zu jedem Text über Unfälle passen.", k: ["helfen|hilfe|notruf", "allgemein|jedem text|nichts über|thema|passt"] } }
        ] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", titel: "In drei Schritten zur Kernaussage", absaetze: [
        ["Zuerst suche ich in jedem Abschnitt die ", { g: "Schlüsselwörter" }, "."],
        ["Dann trenne ich das Wichtige von den ", { g: "Einzelheiten" }, "."],
        ["Zum Schluss sage ich die ", { g: "Kernaussage" }, " in einem eigenen ", { g: "Satz" }, "."]], extra: ["Überschriften", "Absatz"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Schlüsselwörter sind meist Nomen oder wichtige Verben.", true],
        ["Je mehr Wörter man markiert, desto besser versteht man den Text.", false],
        ["Ein Beispiel im Text ist meistens eine Einzelheit.", true],
        ["Die Kernaussage steht immer im letzten Satz eines Abschnitts.", false],
        ["Eine Kernaussage darf nicht so allgemein sein, dass sie zu jedem Text passt.", true],
        ["Für die Kernaussage eines Abschnitts genügt ein Satz.", true]] }
    ] }
  ],
  weiter: { href: "sach_03.html", titel: "Modul 3: Mit dem Text belegen", text: "Du findest jetzt das Wichtige. Im nächsten Modul lernst du, deine Aussagen <strong>mit Textstellen und Zeilenangaben zu beweisen</strong>." }
});
