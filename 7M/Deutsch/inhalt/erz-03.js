/* Deutsch 7 · Erzählen und kreativ schreiben · Modul 3: Spannung und Höhepunkt
   (Spannungskurve, Mittel der Spannung, den Höhepunkt ausgestalten)
   LehrplanPLUS D7 3.2 (Erzähltexte verfassen und dabei erzählerische Mittel einsetzen: Spannung, äußere und innere Handlung),
   2.2 (Wirkung sprachlicher Gestaltungsmittel beschreiben).
   Text: „Auf dem Dachboden“ (erzaehlen/r7|m7/dachboden.js). */
D7Kit.seite({
  id: "erz-03",
  titel: "Spannung und Höhepunkt",
  einleitung: "Zwei Leute erzählen dasselbe Erlebnis. Bei der einen hören alle gebannt zu, beim anderen gähnt man nach zwei Sätzen. Woran liegt das? Heute findest du heraus, wie Spannung gemacht wird – und baust selbst einen Höhepunkt.",
  zeit: "etwa 40 Minuten",
  ziele: ["📈 Ich beschreibe, wie die Spannung in einer Erzählung steigt und fällt.", "🔦 Ich erkenne Mittel, die Spannung erzeugen.", "🐢 Ich gestalte einen Höhepunkt aus, statt ihn in einem Satz abzuhaken.", "✍️ Ich schreibe selbst eine spannende Stelle."],
  haupttext: { R: "erz-dach-r", M: "erz-dach-m" },
  quiz: { profi: "Spannungs-Profi" },
  glossar: {
    spannung: ["Spannung", "Das Gefühl, unbedingt wissen zu wollen, wie es weitergeht."],
    hoehepunkt: ["Höhepunkt", "Die Stelle, an der die Spannung am größten ist. Gleich danach kommt die Auflösung."],
    aufloesung: ["Auflösung", "Der Moment, in dem man erfährt, was wirklich los war."],
    hinauszoegern: ["Hinauszögern", "Die Auflösung noch nicht verraten: erst ein Geräusch, dann ein Schritt, dann ein Zögern …"],
    sinne: ["Sinneseindruck", "Das, was eine Figur sieht, hört, riecht oder fühlt."],
    zeitlupe: ["Zeitlupe", "Ein kurzer Moment wird ganz ausführlich erzählt – wie im Film, wenn das Bild langsamer läuft."]
  },
  stationen: [
    { kurz: "Vergleich", ober: "Ausprobieren", titel: "Zweimal dieselbe Geschichte", teile: [
      { art: "beispiel", kopf: "Fassung A", html: "<p>Ich ging auf den Dachboden. Dort raschelte etwas unter einem Laken. Es war eine Taube. Ich holte die Lichterketten und ging wieder hinunter.</p>" },
      { art: "text", html: "<p>Alles Wichtige steht da – und trotzdem ist es langweilig. Lies jetzt <strong>Fassung B</strong>.</p>" },
      { art: "lesetext", tag: "Fassung B", lesetext: { R: "erz-dach-r", M: "erz-dach-m" } },
      { art: "mc", id: "vgl", tag: "Vergleichen", fragen: [
        { q: "Beide Fassungen erzählen dasselbe Erlebnis. Warum ist Fassung B spannender?", o: ["Weil man lange nicht erfährt, was unter dem Laken steckt.", "Weil sie einfach länger ist.", "Weil mehr Figuren vorkommen.", "Weil am Ende etwas Schlimmes passiert."], a: 0, e: "Länge allein macht nichts spannend. Entscheidend ist: Die Auflösung wird hinausgezögert, und man fiebert mit." },
        { q: "Was erfährst du in Fassung A über die Gefühle der Hauptfigur?", o: ["nichts", "dass sie Angst hat", "dass sie neugierig ist", "dass sie wütend ist"], a: 0, e: "Fassung A zählt nur auf, was passiert. Erst Gedanken und Gefühle lassen dich miterleben." }] }
    ] },
    { kurz: "Spannungskurve", ober: "Verstehen", titel: "Die Spannungskurve", teile: [
      { art: "text", html: "<p>Die <button class=\"term\" data-t=\"spannung\">Spannung</button> einer Erzählung kann man sich wie einen Berg vorstellen: Sie beginnt im Tal, steigt in Stufen an, erreicht am <button class=\"term\" data-t=\"hoehepunkt\">Höhepunkt</button> den Gipfel und fällt mit der <button class=\"term\" data-t=\"aufloesung\">Auflösung</button> schnell wieder ab.</p>" },
      { art: "paare", id: "kurve", tag: "Zuordnen", titel: "Welche Stelle gehört zu welchem Abschnitt der Kurve?", paare: [
        ["Oma bittet um die Lichterketten.", "ruhiger Anfang"], ["Die Glühbirne geht aus.", "erstes Anzeichen: Etwas stimmt nicht"], ["In der Ecke raschelt es.", "die Spannung steigt"], ["Das Laken wird weggerissen.", "Höhepunkt"], ["Es war nur eine Taube.", "Auflösung"]] },
      { art: "beleg", id: "stellen", nur: "R", tag: "Am Text zeigen", titel: "Wo steigt die Spannung?", lesetext: "erz-dach-r", fragen: [
        { q: "Wo hört die Hauptfigur zum ersten Mal das Geräusch?", zeilen: [10, 10], e: "„Da hörte ich es. Ein Rascheln.“ – ab hier ist nichts mehr harmlos.", tipp: "Suche das Wort „Rascheln“." },
        { q: "Wo würde die Hauptfigur am liebsten umkehren?", zeilen: [15, 17], e: "Sie zögert – und die Leser müssen noch länger warten.", tipp: "Suche das Wort „Treppe“ – es kommt mehrmals vor. Welche Stelle passt?" },
        { q: "Wo zieht die Hauptfigur das Laken weg?", zeilen: [21, 22], e: "Das ist der Gipfel der Spannungskurve.", tipp: "Suche die Stelle, an der sie bis drei zählt." }] },
      { art: "beleg", id: "stellen", nur: "M", tag: "Am Text zeigen", titel: "Wo steigt die Spannung?", lesetext: "erz-dach-m", fragen: [
        { q: "Wo hört die Hauptfigur zum ersten Mal das Geräusch?", zeilen: [12, 13], e: "„Da hörte ich es. Ein Rascheln, ganz leise.“ – ab hier ist nichts mehr harmlos.", tipp: "Suche das Wort „Rascheln“." },
        { q: "Wo würde die Hauptfigur am liebsten umkehren?", zeilen: [19, 21], e: "Sie zögert – und die Leser müssen noch länger warten.", tipp: "Suche das Wort „Treppe“ – es kommt mehrmals vor. Welche Stelle passt?" },
        { q: "Wo zieht die Hauptfigur das Laken weg?", zeilen: [27, 28], e: "Das ist der Gipfel der Spannungskurve.", tipp: "Suche die Stelle, an der sie bis drei zählt." }] }
    ] },
    { kurz: "Spannungsmittel", ober: "Verstehen", titel: "So wird Spannung gemacht", teile: [
      { art: "merke", html: "<ul><li><button class=\"term\" data-t=\"hinauszoegern\">Hinauszögern</button>: nicht sofort verraten, was los ist.</li><li><button class=\"term\" data-t=\"sinne\">Sinneseindrücke</button>: Was sieht, hört, riecht, fühlt die Figur?</li><li><strong>Gedanken und Fragen:</strong> „Hatte ich mich getäuscht?“</li><li><strong>Körperzeichen</strong> statt „Ich hatte Angst“: trockener Mund, zitternde Hand.</li><li><strong>Kurze Sätze</strong> an der spannendsten Stelle: „Noch drei Schritte. Noch zwei.“</li></ul>" },
      { art: "sort", id: "mittel", tag: "Sortieren", titel: "Welches Mittel steckt in dem Satz?", lead: "Die Sätze stammen aus der Geschichte (zum Teil gekürzt).", buckets: ["Sinneseindruck", "Gedanke oder Frage", "Körperzeichen der Angst"], cols: 200, items: [
        { t: "Oben roch es nach Staub.", b: 0 }, { t: "Die Holztreppe knarrte.", b: 0 }, { t: "Flügel schlugen über meinem Kopf.", b: 0 },
        { t: "Hatte ich mich getäuscht?", b: 1 }, { t: "Was sollte schon dabei sein?", b: 1 },
        { t: "Mein Mund wurde trocken.", b: 2 }, { t: "Meine Hand zitterte.", b: 2 }, { t: "Meine Knie waren weich.", b: 2 }] },
      { art: "mc", id: "wirk", tag: "Wirkung", fragen: [
        { q: "„Noch drei Schritte. Noch zwei.“ – Welche Wirkung haben so kurze Sätze?", o: ["Man liest abgehackt und atemlos – so, wie sich die Figur fühlt.", "Der Text wirkt ruhig und gemütlich.", "Man merkt, dass der Verfasser wenig Zeit hatte.", "Sie erklären, wie groß der Dachboden ist."], a: 0, e: "Kurze Sätze treiben an. Deshalb stehen sie gern direkt vor dem Höhepunkt." },
        { q: "Warum steht im Text nicht einfach: „Ich hatte große Angst“?", o: ["Weil man die Angst besser miterlebt, wenn man sie am Körper der Figur sieht.", "Weil das Wort „Angst“ in Erzählungen verboten ist.", "Weil die Figur gar keine Angst hat.", "Weil der Satz zu kurz wäre."], a: 0, e: "Zeigen wirkt stärker als behaupten: trockener Mund, zitternde Hand, weiche Knie." }] },
      { art: "offen", id: "andeut", nur: "M", tag: "Genau hinsehen", fragen: [
        { q: "In Zeile 3–4 steht: „Später habe ich mir diese Frage noch einige Male gestellt.“ Welche Wirkung hat dieser Satz so früh in der Geschichte?", m: "Der Satz deutet an, dass auf dem Dachboden noch etwas Unangenehmes passieren wird. Dadurch wird man neugierig und liest gespannt weiter.", k: ["deutet|andeut|ahnt|ahnen|verrät|hinweis|ankündig|kündigt", "neugier|gespannt|spannung|spannend|wissen will|weiterlesen"] }], tipp: "Was vermutest du nach diesem Satz? Und was macht das mit dir als Leserin oder Leser?" }
    ] },
    { kurz: "Zeitlupe", ober: "Ausprobieren", titel: "Den Höhepunkt ausgestalten", teile: [
      { art: "text", html: "<p>Am Höhepunkt schaltest du auf <button class=\"term\" data-t=\"zeitlupe\">Zeitlupe</button>: Ein Augenblick, der in Wirklichkeit zwei Sekunden dauert, bekommt drei, vier Sätze.</p>" },
      { art: "beispiel", kopf: "Aus eins mach vier", html: "<p><strong>Knapp:</strong> Die Tür ging auf.</p><p><strong>Ausgestaltet:</strong> Die Klinke bewegte sich. Ganz langsam. Ich starrte auf den Spalt, der immer breiter wurde. Mein Herz setzte einen Schlag aus.</p>" },
      { art: "mc", id: "dehn", tag: "Genau hinsehen", fragen: [
        { q: "Was ist in der ausgestalteten Fassung dazugekommen?", o: ["was die Figur sieht", "was die Figur fühlt", "kurze Sätze, die den Moment dehnen", "eine zweite Figur"], a: [0, 1, 2], e: "Sehen, fühlen, kurze Sätze – aber keine neue Handlung. Der Moment wird nur langsamer erzählt." }] },
      { art: "sort", id: "killer", tag: "Sortieren", titel: "Macht der Satz Spannung – oder macht er sie kaputt?", buckets: ["macht Spannung", "macht Spannung kaputt"], cols: 240, items: [
        { t: "Da war es wieder, dieses Kratzen.", b: 0 }, { t: "Ich wagte kaum zu atmen.", b: 0 }, { t: "Etwas Kaltes berührte meinen Arm.", b: 0 },
        { t: "Es war übrigens nur der Hund, wie sich gleich herausstellte.", b: 1 }, { t: "Dann passierte etwas sehr Spannendes.", b: 1 }, { t: "Ich hatte Angst, aber es war nicht so schlimm.", b: 1 }] },
      { art: "offen", id: "dehn2", tag: "Selbst formulieren", fragen: [
        { q: "Aus einem Satz werden drei: Gestalte den Satz „Die Tür fiel ins Schloss.“ aus. Was hört die Figur? Was tut oder fühlt sie?", m: "Hinter mir krachte es, und der Knall hallte durch den ganzen Flur. Ich fuhr herum und rüttelte an der Klinke, doch sie bewegte sich nicht. Mir wurde eiskalt.", k: ["knall|krach|schlag|laut|hallte|hörte|klick|rumms|dröhn|geräusch", "herz|kalt|zitter|schreck|erschrak|fuhr herum|zuckte|atem|angst|klinke|rüttel|starr|drehte"] }], tipp: "Erst das Geräusch, dann die Reaktion: Was hört man? Dreht sich die Figur um? Was spürt sie im Körper?",
        hilfen: ["So kannst du beginnen: Hinter mir … / Ich fuhr herum und … / Mein Herz …", "Schreibe einen Satz zum Hören, einen zum Tun und einen zum Fühlen."] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: ein Höhepunkt", teile: [
      { art: "schreiben", id: "hoehepunkt", tag: "Schreibtrainer", titel: "Im Kaufhaus", min: 60,
        auftrag: "<p><strong>Die Lage:</strong> Im Kaufhaus sollst du kurz auf deinen kleinen Bruder aufpassen. Du siehst dir ein Regal an – und als du dich umdrehst, ist er weg.</p><p>Schreibe <strong>nur die spannendste Stelle</strong>: deine Suche bis zu dem Augenblick, in dem du ihn entdeckst. Einleitung und Schluss brauchst du nicht.</p>",
        starter: ["Ich drehte mich um – …", "Wo war er nur?", "Mein Herz …", "Zwischen den Regalen …", "Da, endlich: …"],
        kriterien: ["Die Auflösung kommt erst ganz am Ende.", "Man erfährt, was die Figur sieht und hört.", "Gedanken oder Fragen der Figur kommen vor.", "Die Angst wird gezeigt (Körperzeichen), nicht nur behauptet.", "An der spannendsten Stelle stehen kurze Sätze."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Die Spannung steigt bis zum ", { g: "Höhepunkt" }, " und fällt mit der ", { g: "Auflösung" }, " schnell ab."],
        ["Ich zögere die Auflösung ", { g: "hinaus" }, "."],
        ["Am Höhepunkt erzähle ich in ", { g: "Zeitlupe" }, " und verwende ", { g: "kurze" }, " Sätze."]], extra: ["lange", "Einleitung"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Text wird spannend, wenn man gleich am Anfang verrät, wie er ausgeht.", false],
        ["Gedanken und Fragen der Figur steigern die Spannung.", true],
        ["Der Höhepunkt darf ruhig in einem einzigen Satz erzählt werden.", false],
        ["„Mein Mund wurde trocken“ zeigt Angst, ohne das Wort Angst zu benutzen.", true],
        ["Nach dem Höhepunkt kommt die Auflösung.", true]] }
    ] }
  ],
  weiter: { href: "erz_04.html", titel: "Modul 4: Gefühle, Gedanken, wörtliche Rede", text: "Spannung lebt davon, dass man mit der Figur mitfühlt. Im nächsten Modul geht es um <strong>Gefühle, Gedanken und Gespräche</strong>." }
});
