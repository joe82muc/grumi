/* Deutsch 8 · Argumentieren und Stellung nehmen · Modul 2: Argumente gewichten und verknüpfen
   (starke und schwache Argumente unterscheiden, Schwächen benennen: nur Geschmack, Übertreibung, am Thema vorbei; gewichten – auch mit
   Blick auf den Adressaten; steigernd ordnen; Verknüpfungswörter nach ihrer Aufgabe; Sätze selbst verbinden;
   M8: Gewichtung begründen, Verknüpfung durch Adverbialsätze mit weil/da, obwohl, sodass, damit)
   LehrplanPLUS D8 3.2 (Argumente formulieren und gewichten, Schlüsse ziehen; M8: Adverbialsätze zur Verknüpfung).
   Texte: Forumsbeiträge zur Streitfrage „Ferienjob mit 14?“ (texte/argumentieren/ferienjob-r.js und -m.js) – erfunden; die rechtliche
   Angabe (leichte Arbeit, höchstens zwei Stunden täglich, Einwilligung der Eltern) folgt dem Jugendarbeitsschutzgesetz § 5 Abs. 3. */
D7Kit.seite({
  id: "arg-02",
  titel: "Argumente gewichten und verknüpfen",
  einleitung: "Fünf Gründe sind nicht automatisch besser als zwei. Heute prüfst du, welche Argumente wirklich Gewicht haben, bringst sie in eine Reihenfolge, die sich steigert, und verbindest sie so, dass ein Gedanke zum nächsten führt.",
  zeit: "etwa 40 Minuten",
  ziele: ["⚖️ Ich unterscheide starke von schwachen Argumenten.", "📈 Ich ordne Argumente so, dass sie sich steigern.", "🔗 Ich verbinde Argumente mit passenden Verknüpfungswörtern.", "✍️ Ich verknüpfe Sätze selbst – mit weil und deshalb, in M8 auch mit obwohl und damit."],
  haupttext: { R: "arg-ferienjob-r", M: "arg-ferienjob-m" },
  quiz: { profi: "Gewichts-Profi" },
  glossar: {
    gewichten: ["gewichten", "Prüfen, wie schwer ein Argument wiegt: Wie gut ist es begründet, wie viele betrifft es, wie wichtig sind die Folgen?"],
    verallg: ["Verallgemeinerung", "Aus einem Einzelfall wird „immer“, „jeder“ oder „nie“. Das stimmt fast nie und schwächt das Argument."],
    adressat: ["Adressat", "Die Person oder Gruppe, die du überzeugen willst."],
    steigern: ["steigernd ordnen", "Argumente so reihen, dass jedes gewichtiger ist als das vorige. Das stärkste steht am Schluss."],
    verknuepfung: ["Verknüpfungswort", "Ein Wort, das Sätze verbindet und zeigt, wie die Gedanken zusammengehören: weil, außerdem, deshalb …"],
    adverbialsatz: ["Adverbialsatz", "Ein Nebensatz, der zum Beispiel den Grund (weil), eine Einräumung (obwohl), die Folge (sodass) oder den Zweck (damit) angibt."]
  },
  stationen: [
    { kurz: "Forum", ober: "Lesen und prüfen", titel: "Welche Gründe zählen wirklich?", teile: [
      { art: "text", html: '<p class="lead">Lorenz ist 14 und möchte in den Sommerferien arbeiten. Im Klassenforum bittet er um Rat – und bekommt viele Antworten. Lies sie. Achte darauf: Welche Beiträge helfen ihm bei der Entscheidung, welche nicht?</p>' },
      { art: "lesetext", lesetext: { R: "arg-ferienjob-r", M: "arg-ferienjob-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Was ist mit 14 Jahren erlaubt?", o: ["leichte Arbeiten, höchstens zwei Stunden am Tag, mit Erlaubnis der Eltern", "jede Arbeit, solange sie in den Ferien liegt und Geld einbringt", "nur Arbeit im Betrieb der Eltern, dafür ohne zeitliche Grenze"], a: 0, e: "So steht es im ersten Absatz. Ferienjobs mit ganzen Arbeitstagen erlaubt das Gesetz erst ab 15 Jahren – und auch dann höchstens vier Wochen im Jahr." },
        { q: "Welche beiden raten Lorenz mit Gründen vom Ferienjob ab?", o: ["Nele und Elif", "Ida und Samuel", "Ben und Mara"], a: 0, e: "Nele nennt die fehlende Erholung, Elif die zerteilten Ferientage. Ben ist zwar auch dagegen, begründet es aber nicht." }
      ] },
      { art: "beleg", id: "pruef", nur: "R", tag: "Beiträge prüfen", titel: "Wo steht das im Forum?", lesetext: "arg-ferienjob-r", fragen: [
        { q: "Welcher Beitrag hat mit der Streitfrage gar nichts zu tun?", zeilen: [26, 27], e: "Maras Onkel und sein Eis sagen nichts darüber, ob ein Ferienjob sinnvoll ist. Der Beitrag geht am Thema vorbei.", tipp: "Suche den Beitrag, in dem es weder ums Arbeiten noch um die Ferien geht." },
        { q: "In welchen Zeilen übertreibt jemand stark, ohne ein Beispiel zu nennen?", zeilen: [19, 20], e: "„Garantiert“ und „immer“ sind Übertreibungen. Jakob stützt seine Behauptung mit nichts.", tipp: "Achte auf Wörter wie „garantiert“ und „immer“." },
        { q: "Wo begründet Samuel, warum Zuverlässigkeit auch später noch wichtig ist?", zeilen: [23, 25], e: "Mit „denn“ nennt Samuel den Grund: Betriebe achten bei Bewerbungen darauf. Sein Argument reicht weit in die Zukunft.", tipp: "Suche in Samuels Beitrag das Wort „Bewerbung“." }
      ], hilfen: ["Lies jeden Beitrag einzeln und frage dich: Geht es hier um den Ferienjob?", "Übertreibungen erkennst du an Wörtern wie „immer“, „nie“, „jeder“ oder „garantiert“."] },
      { art: "beleg", id: "pruef", nur: "M", tag: "Beiträge prüfen", titel: "Wo steht das im Forum?", lesetext: "arg-ferienjob-m", fragen: [
        { q: "In welchen Zeilen räumt Nele ein, dass der Job harmlos wirken kann – und bleibt trotzdem bei ihrer Meinung?", zeilen: [14, 16], e: "Der Nebensatz mit „obwohl“ räumt etwas ein. Der Hauptsatz sagt, was für Nele schwerer wiegt: die fehlende Erholung.", tipp: "Suche in Neles Beitrag den Nebensatz mit „obwohl“." },
        { q: "Wo bringt jemand einen Beleg ins Forum – Zahlen aus einer Umfrage?", zeilen: [35, 38], e: "Tarek liefert einen Beleg: 9 von 52 hatten schon einen Ferienjob, sieben von ihnen würden es wieder tun.", tipp: "Suche die Stelle mit den Zahlen." },
        { q: "In welchen Zeilen begründet Samuel, warum sich Zuverlässigkeit lange auszahlt?", zeilen: [24, 26], e: "Der Nebensatz mit „da“ nennt den Grund: Betriebe achten bei Bewerbungen darauf, ob sie sich auf jemanden verlassen können.", tipp: "Suche in Samuels Beitrag den Nebensatz mit „da“." }
      ] },
      { art: "sort", id: "stark", tag: "Sortieren", titel: "Wiegt das schwer – oder kaum?", lead: "Diese Aussagen stehen nicht im Forum. Prüfe jede: Nennt sie einen Grund, der wirklich zählt?", buckets: ["wiegt schwer", "wiegt kaum"], cols: 240, items: [
        { t: "Wer früh eigenes Geld verdient, lernt zu planen, weil es bis zum Monatsende reichen muss.", b: 0 },
        { t: "In den Ferien ist Zeit für Hobby und Verein wichtig, denn in der Schulzeit bleibt dafür wenig Raum.", b: 0 },
        { t: "Wer erschöpft ins neue Schuljahr startet, lernt schlechter, und das kann sich auf die Noten auswirken.", b: 0 },
        { t: "Bei einer leichten Arbeit merkt man früh, was einem liegt – das hilft später bei der Berufswahl.", b: 0 },
        { t: "Arbeiten nervt halt.", b: 1 },
        { t: "Alle aus der Parallelklasse jobben auch.", b: 1 },
        { t: "Mit dem Geld kann ich mir jeden Tag ein Eis kaufen.", b: 1 },
        { t: "Ferienjobs sind sowieso total sinnlos.", b: 1 }
      ] },
      { art: "merke", kopf: "MERKE: Starke Argumente", html: "<p><b>Ein Argument wiegt schwer, wenn es …</b></p><ul><li>einen Grund nennt, den man nachvollziehen kann,</li><li>mit einem Beispiel oder Beleg gestützt ist,</li><li>viele betrifft – nicht nur dich,</li><li>Folgen hat, die wichtig sind oder lange nachwirken.</li></ul>" }
    ] },
    { kurz: "Gewichten", ober: "Verstehen", titel: "Was wiegt schwer, was kaum?", teile: [
      { art: "mc", id: "warum", tag: "Begründen", fragen: [
        { q: "Ben lehnt den Ferienjob ab, weil er Arbeiten langweilig findet. Warum wiegt das kaum?", o: ["Das ist nur sein Geschmack – für Lorenz muss es nicht gelten.", "Der Beitrag ist viel zu kurz für ein richtiges Argument.", "Arbeiten macht in Wahrheit allen Menschen großen Spaß."], a: 0, e: "Was der eine langweilig findet, macht dem anderen Freude. Geschmack lässt sich nicht begründen – und überzeugt deshalb niemanden." },
        { q: "Warum wiegt Samuels Argument schwer?", o: ["Es nennt eine Folge, die lange nachwirkt: bis zur Bewerbung.", "Es beschreibt, wie viel Spaß das Arbeiten machen kann.", "Es zeigt, dass alle in der Klasse genauso denken wie er."], a: 0, e: "Zuverlässigkeit braucht man nicht nur in den Ferien. Ein Argument mit Folgen für lange Zeit hat viel Gewicht." }
      ] },
      { art: "text", html: '<p>Argumente <button class="term" data-t="gewichten">gewichten</button> heißt: prüfen, wie schwer jedes wiegt. Schwache Argumente haben meist eine von drei Schwächen: Sie sind nur Geschmack. Sie übertreiben – oft mit einer <button class="term" data-t="verallg">Verallgemeinerung</button> wie „immer“ oder „jeder“. Oder sie gehen am Thema vorbei.</p>' },
      { art: "sort", id: "schwaeche", tag: "Sortieren", titel: "Welche Schwäche hat die Aussage?", buckets: ["nur Geschmack", "Übertreibung", "am Thema vorbei"], items: [
        { t: "Prospekte austragen ist einfach uncool.", b: 0 },
        { t: "Ich mag es in den Ferien halt gemütlich.", b: 0 },
        { t: "Wer jobbt, hat überhaupt keine Ferien mehr.", b: 1 },
        { t: "Jeder, der früh arbeitet, wird später Chef.", b: 1 },
        { t: "Im Freibad gibt es dieses Jahr eine neue Rutsche.", b: 2 },
        { t: "Unsere Nachbarn haben seit gestern ein neues Auto.", b: 2 }
      ] },
      { art: "offen", id: "gewicht", m7: true, tag: "Selbst beurteilen", titel: "Deine Gewichtung", fragen: [
        { q: "Welchen Beitrag aus dem Forum hältst du für den stärksten? Nenne den Namen und begründe deine Gewichtung in ein bis zwei Sätzen.", m: "Am stärksten finde ich Samuels Beitrag, weil Zuverlässigkeit nicht nur in den Ferien zählt, sondern noch Jahre später bei der Bewerbung wichtig ist.", k: ["weil|denn|da ", "samuel|ida|nele|elif|tarek", "wichtig|stark|stärk|schwer|überzeug|lange|später|zukunft|viele|betrifft|folge|gesund|beleg|zahl|beispiel"], min: 3 }
      ], tipp: "Nenne den Namen und ein Merkmal starker Argumente: gut begründet, mit Beispiel oder Beleg gestützt, wichtig für viele oder für lange Zeit.", hilfen: ["Vergleiche zwei Beiträge: Welcher nennt die Folge, die länger nachwirkt oder mehr Menschen betrifft?"] }
    ] },
    { kurz: "Steigern", ober: "Ordnen", titel: "Das Stärkste zum Schluss", teile: [
      { art: "ordnen", id: "rang", tag: "Reihenfolge", titel: "Bring die Sätze in eine Reihenfolge, die sich steigert", lead: "Lorenz hat sich entschieden. Jetzt will er seine Eltern überzeugen.", schritte: [
        "Ich möchte in den Sommerferien Prospekte austragen.",
        "Zunächst verdiene ich dabei etwas eigenes Geld.",
        "Hinzu kommt, dass ich lerne, mir dieses Geld einzuteilen.",
        "Am wichtigsten ist aber: Ich übe, zuverlässig zu sein – das brauche ich später im Beruf.",
        "Deshalb bitte ich euch, mir den Job zu erlauben."
      ] },
      { art: "merke", kopf: "MERKE: Steigern", html: '<p><button class="term" data-t="steigern">Steigernd ordnen</button> heißt: wichtig → wichtiger → am wichtigsten. Signale zeigen dem Leser die Stufe:</p><ul><li><b>Einstieg:</b> zunächst, ein erster Grund ist</li><li><b>Steigerung:</b> hinzu kommt, außerdem, wichtiger ist</li><li><b>Höhepunkt:</b> am wichtigsten ist, vor allem, entscheidend ist</li></ul><p>Stünde dein stärkstes Argument gleich am Anfang, würde alles danach wie ein Nachtrag wirken. Welches das stärkste ist, hängt auch vom <button class="term" data-t="adressat">Adressaten</button> ab: Was ist der Person wichtig, die du überzeugen willst?</p>' },
      { art: "mc", id: "steig", tag: "Gewicht und Reihenfolge", fragen: [
        { q: "Lorenz will seine Eltern überzeugen. Welches Argument wiegt für sie vermutlich am schwersten?", o: ["Ich lerne dabei, zuverlässig zu sein und Verantwortung zu tragen.", "Ich kann mir dann in den Ferien öfter etwas Süßes kaufen.", "Mein Freund Paul trägt in den Ferien auch Prospekte aus."], a: 0, e: "Eltern achten vor allem darauf, was ihr Kind dabei lernt. Wie schwer ein Argument wiegt, hängt auch davon ab, wen du überzeugen willst." },
        { q: "Nele will Lorenz vom Job abraten. Mit welchem Satz kündigt sie ihr stärkstes Argument an?", o: ["Vor allem aber braucht man nach dem Schuljahr echte Erholung.", "Zunächst bringt so ein Job nur ziemlich wenig Geld ein.", "Außerdem zerteilt er dir jeden einzelnen Ferientag."], a: 0, e: "„Vor allem“ zeigt den Höhepunkt an. „Zunächst“ eröffnet die Reihe, „außerdem“ fügt einen weiteren Punkt hinzu." }
      ] }
    ] },
    { kurz: "Verknüpfen", ober: "Üben und selbst formulieren", titel: "Kleine Wörter, große Wirkung", teile: [
      { art: "beispiel", kopf: "Zweimal dasselbe – oder?", html: '<p><b>Ohne Verknüpfung:</b> Ein Ferienjob ist sinnvoll. Man verdient eigenes Geld. Man lernt, zuverlässig zu sein. Lorenz sollte es versuchen.</p><p><b>Mit Verknüpfung:</b> Ein Ferienjob ist sinnvoll, <b>weil</b> man eigenes Geld verdient. <b>Außerdem</b> lernt man, zuverlässig zu sein. <b>Deshalb</b> sollte Lorenz es versuchen.</p><p>Erst die <button class="term" data-t="verknuepfung">Verknüpfungswörter</button> zeigen, wie die Gedanken zusammengehören: Grund, weiterer Punkt, Folgerung.</p>' },
      { art: "sort", id: "wort", tag: "Sortieren", titel: "Was leistet das Verknüpfungswort?", buckets: ["reihen und steigern", "begründen", "Beispiel nennen", "Folgerung ziehen"], cols: 170, items: [
        { t: "zunächst", b: 0 }, { t: "hinzu kommt", b: 0 }, { t: "am wichtigsten ist", b: 0 },
        { t: "weil", b: 1 }, { t: "denn", b: 1 }, { t: "nämlich", b: 1 },
        { t: "zum Beispiel", b: 2 }, { t: "beispielsweise", b: 2 }, { t: "ein Beispiel dafür ist", b: 2 },
        { t: "deshalb", b: 3 }, { t: "daher", b: 3 }, { t: "folglich", b: 3 }
      ] },
      { art: "mc", id: "pass", tag: "Verknüpfen", fragen: [
        { q: "Welches Wort passt? „Ida rät zum Job, ___ man dabei lernt, mit Geld umzugehen.“", o: ["weil", "deshalb", "außerdem"], a: 0, e: "Der zweite Teil nennt den Grund für Idas Rat – dazu passt „weil“. „Deshalb“ würde eine Folgerung einleiten, „außerdem“ einen weiteren Punkt." },
        { q: "Welches Wort passt? „Elif musste zwei Ausflüge absagen. ___ rät sie Lorenz vom Job ab.“", o: ["Deshalb", "Nämlich", "Zum Beispiel"], a: 0, e: "Aus Elifs Erfahrung folgt ihr Rat. Eine Folgerung leitest du mit „deshalb“, „daher“ oder „darum“ ein." }
      ] },
      { art: "offen", id: "verbinde", tag: "Selbst formulieren", titel: "Verbinde die Sätze", fragen: [
        { q: "Verbinde mit „weil“ zu einem Satz: Nele ist gegen den Ferienjob. Sie braucht die Ferien zur Erholung.", m: "Nele ist gegen den Ferienjob, weil sie die Ferien zur Erholung braucht.", k: ["weil", "erholung braucht|erholung benötigt|erholen will|erholen muss|erholen möchte"], min: 2 },
        { q: "Verbinde mit „deshalb“: Samuel hält Zuverlässigkeit für wichtig. Er rät Lorenz zum Ferienjob.", m: "Samuel hält Zuverlässigkeit für wichtig, deshalb rät er Lorenz zum Ferienjob.", k: ["deshalb", "rät er|rät samuel"], min: 2 }
      ], tipp: "Achte auf die Stellung des Verbs: Nach „weil“ steht es am Ende, nach „deshalb“ gleich an zweiter Stelle.", hilfen: ["Nach „weil“ wandert das Verb ans Ende: …, weil sie … braucht.", "Nach „deshalb“ folgt sofort das Verb: …, deshalb rät er …"] },
      { art: "merke", nur: "M", kopf: "MERKE (M8): Verknüpfen mit Nebensätzen", html: '<p>Besonders genau verknüpfst du mit einem <button class="term" data-t="adverbialsatz">Adverbialsatz</button>. Die Konjunktion zeigt, wie die Gedanken zusammenhängen:</p><ul><li><b>weil, da</b> – Grund: <i>Lorenz will jobben, weil er auf ein Zelt spart.</i></li><li><b>obwohl</b> – Einräumung: <i>Obwohl der Lohn klein ist, lohnt sich die Erfahrung.</i></li><li><b>sodass</b> – Folge: <i>Elif war jeden Nachmittag unterwegs, sodass keine Zeit für Ausflüge blieb.</i></li><li><b>damit</b> – Zweck: <i>Lorenz stellt sich den Wecker, damit er pünktlich beginnt.</i></li></ul><p>Zwischen Haupt- und Nebensatz steht ein <b>Komma</b>, im Nebensatz steht das gebeugte Verb <b>am Ende</b>.</p>' },
      { art: "sort", id: "adv", m7: true, tag: "Sortieren", titel: "Was gibt der Nebensatz an?", lead: "Achte auf die Konjunktion: weil und da nennen den Grund, obwohl räumt etwas ein, sodass nennt die Folge, damit den Zweck.", buckets: ["Grund", "Einräumung", "Folge", "Zweck"], cols: 200, items: [
        { t: "Viele sparen ihren ersten Lohn, weil sie ein großes Ziel haben.", b: 0 },
        { t: "Da Betriebe auf Zuverlässigkeit achten, zählt jede Erfahrung.", b: 0 },
        { t: "Obwohl der Verdienst gering ist, würden viele wieder jobben.", b: 1 },
        { t: "Nele rät vom Job ab, obwohl sie selbst gern mehr Geld hätte.", b: 1 },
        { t: "Der Cousin arbeitete an jedem Ferientag, sodass ihm die Erholung fehlte.", b: 2 },
        { t: "Es regnete tagelang, sodass die Prospekte nass wurden.", b: 2 },
        { t: "Samuel packt abends seine Tasche, damit er morgens pünktlich startet.", b: 3 },
        { t: "Ida führt ein Haushaltsbuch, damit sie den Überblick behält.", b: 3 }
      ] },
      { art: "offen", id: "gefuege", m7: true, tag: "Selbst formulieren", titel: "Verknüpfe mit einem Nebensatz", fragen: [
        { q: "Verbinde mit „obwohl“ zu einem Satzgefüge: Der Job bringt nur wenig Geld. Lorenz möchte ihn unbedingt machen.", m: "Obwohl der Job nur wenig Geld bringt, möchte Lorenz ihn unbedingt machen.", k: ["obwohl", "geld bringt|geld einbringt", "möchte|will"], min: 3 },
        { q: "Verbinde mit „damit“: Ida legt jede Woche zehn Euro zurück. Sie kann sich im Herbst ein Zelt kaufen.", m: "Ida legt jede Woche zehn Euro zurück, damit sie sich im Herbst ein Zelt kaufen kann.", k: ["damit", "kaufen kann|leisten kann", "zurück"], min: 3 }
      ], tipp: "Im Nebensatz steht das gebeugte Verb am Ende. Vergiss das Komma nicht.", hilfen: ["Der Nebensatz mit „obwohl“ kann vorn stehen: Obwohl …, möchte Lorenz …", "Nach „damit“ rückt „kann“ ans Ende: …, damit sie … kaufen kann."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Argument wiegt schwerer, wenn es gut begründet ist und viele betrifft.", true],
        ["Wörter wie „immer“, „jeder“ und „garantiert“ machen ein Argument stärker.", false],
        ["In einer steigernden Reihenfolge ist jedes Argument gewichtiger als das vorige.", true],
        ["„Deshalb“ leitet eine Begründung ein.", false],
        ["Welches Argument am meisten zählt, hängt auch davon ab, wen ich überzeugen will.", true],
        ["„Hinzu kommt“ und „außerdem“ fügen einen weiteren Punkt an.", true]
      ] }
    ] }
  ],
  weiter: { href: "arg_03.html", titel: "Modul 3: Gegenargumente bedenken und abwägen", text: "Bisher hast du nur deine eigene Seite stark gemacht. Wirklich überzeugend wirst du, wenn du auch die Gründe der anderen kennst. Darum geht es im nächsten Modul." }
});
