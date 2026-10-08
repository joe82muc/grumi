/* Deutsch 8 · Literatur und Textanalyse · Modul 4: Gedichte – Bilder und Wirkung
   (sprachliche Bilder im Alltag und im Gedicht: Vergleich, Personifikation, Metapher, Symbol erkennen und ihre Wirkung
   erklären; Textstellen mit dem Vers angeben; M8: Hyperbel an eigenen Beispielsätzen, Wirkung einer Wiederholung deuten,
   zusammenhängende Deutung mit eingebautem Zitat; R8: ein Bild in drei bis vier Sätzen erklären)
   LehrplanPLUS D8 2.2 (lyrische Texte erschließen, zentrale Aussagen herausarbeiten, Deutungen mit Zitaten belegen,
   Zusammenhang von Werk und Entstehungszeit; Fachbegriffe M8: Metapher, Symbolik, Hyperbel), 3.2 (Ergebnisse einer
   Textuntersuchung darstellen).
   Gedichte (texte/literatur/gedicht-….js), alle gemeinfrei, Wortlaut am 07.10.2026 Zeichen für Zeichen mit Wikisource
   verglichen: Eichendorff „Mondnacht“ (12 Verse) · Storm „Die Stadt“ (15) · Rilke „Herbst“ (9). Keines davon kommt in
   Deutsch 7 vor. Bei Gedichten ist die Zeilennummer die Versnummer. Alle Beispielsätze außerhalb der Gedichte sind erfunden. */
D7Kit.seite({
  id: "lit-04",
  titel: "Gedichte: Bilder und Wirkung",
  einleitung: "Ein Himmel, der die Erde küsst. Ein Nebel, der auf die Dächer drückt. Blätter, die fallen, als welkten Gärten im Himmel: Gedichte malen mit Wörtern. Heute findest du heraus, wie solche Bilder gemacht sind – und was sie beim Lesen auslösen.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔎 Ich erkenne Vergleich, Personifikation und Metapher.", "🕊️ Ich erkläre, wofür ein Symbol steht.", "💬 Ich beschreibe, wie ein sprachliches Bild wirkt.", "✍️ Ich deute ein Bild in eigenen Sätzen – mit Zitat und Versangabe."],
  quiz: { profi: "Bilder-Profi" },
  quellen: "Alle Gedichte sind gemeinfrei; die Fundstellen stehen unter den Texten",
  glossar: {
    vers: ["Vers", "Eine Zeile in einem Gedicht. Stellen gibst du mit dem Vers an: (V. 3)."],
    strophe: ["Strophe", "Ein Absatz in einem Gedicht. Eine Strophe besteht aus mehreren Versen."],
    ich: ["lyrisches Ich", "Die Stimme, die in einem Gedicht „ich“ sagt. Sie ist nicht einfach die Dichterin oder der Dichter selbst."],
    bild: ["sprachliches Bild", "Ein Ausdruck, der etwas nicht direkt sagt, sondern anschaulich macht – zum Beispiel durch einen Vergleich oder eine Metapher."],
    vergleich: ["Vergleich", "Zwei Dinge werden mit „wie“, „als“ oder „als ob“ nebeneinandergestellt: still wie ein leeres Schulhaus."],
    personifikation: ["Personifikation", "Etwas, das kein Mensch ist, handelt, fühlt oder spricht wie ein Mensch: Der Nebel drückt die Dächer."],
    metapher: ["Metapher", "Ein Bild ohne Vergleichswort: Ein Wort wird in einen fremden Zusammenhang übertragen. „Mein Herz hängt an dir.“"],
    symbol: ["Symbol", "Etwas Sichtbares, das für etwas Unsichtbares steht: die Taube für den Frieden, fallende Blätter für die Vergänglichkeit."],
    hyperbel: ["Hyperbel", "Eine starke Übertreibung, die niemand wörtlich nimmt: „Das habe ich dir schon tausendmal gesagt.“"],
    wirkung: ["Wirkung", "Was ein Bild oder ein Text beim Lesen auslöst: eine Vorstellung, ein Gefühl, eine Stimmung."],
    stimmung: ["Stimmung", "Das Gefühl, das über einem Gedicht liegt: ruhig, bedrückt, sehnsüchtig, getröstet …"],
    vergaenglichkeit: ["Vergänglichkeit", "Dass nichts für immer bleibt: Alles Lebendige wird älter und vergeht."],
    zitat: ["Zitat", "Eine Stelle, die du wörtlich aus dem Text übernimmst – in Anführungszeichen und mit Versangabe."]
  },
  stationen: [
    { kurz: "Bilder", ober: "Ausprobieren", titel: "Sprache malt Bilder", teile: [
      { art: "text", html: "<p class=\"lead\">Sprachliche Bilder stecken nicht nur in Gedichten. Du benutzt sie jeden Tag – meistens, ohne es zu merken. Probiere es aus.</p>" },
      { art: "mc", id: "alltag", tag: "Einstieg", fragen: [
        { q: "Nach der Mathe-Probe sagt jemand: „Mir ist ein Stein vom Herzen gefallen.“ Was ist gemeint?", o: ["Die Person ist sehr erleichtert.", "Die Person hat sich an der Brust verletzt.", "Die Person hat etwas Schweres verloren."], a: 0, e: "Einen Stein gibt es hier nicht. Das Bild macht spürbar, wie schwer die Sorge war – und wie leicht man sich danach fühlt." },
        { q: "„Der Wecker brüllt mich jeden Morgen an.“ Was ist an diesem Satz besonders?", o: ["Ein Gegenstand verhält sich wie ein Mensch.", "Zwei Dinge werden mit „wie“ verglichen.", "Der Satz ist ganz wörtlich gemeint."], a: 0, e: "Ein Wecker kann nicht brüllen. Der Satz macht aus ihm jemanden, der schimpft – so hört man fast, wie unangenehm das Klingeln ist." }
      ] },
      { art: "merke", kopf: "MERKE: Drei sprachliche Bilder", html: "<p>Ein <button class=\"term\" data-t=\"bild\">sprachliches Bild</button> sagt etwas nicht direkt, sondern anschaulich. Drei Arten solltest du sicher erkennen:</p><ul><li><b><button class=\"term\" data-t=\"vergleich\">Vergleich</button></b> – zwei Dinge werden nebeneinandergestellt, mit <b>wie</b>, <b>als</b> oder <b>als ob</b>: <i>still wie ein leeres Schulhaus</i> · <i>Es war, als ob die Zeit stehen bliebe.</i></li><li><b><button class=\"term\" data-t=\"personifikation\">Personifikation</button></b> – etwas, das kein Mensch ist, handelt, fühlt oder spricht wie ein Mensch: <i>Der Wind flüstert.</i></li><li><b><button class=\"term\" data-t=\"metapher\">Metapher</button></b> – ein Bild <b>ohne</b> Vergleichswort. Ein Wort wird in einen fremden Zusammenhang übertragen: <i>eine Flut von Nachrichten</i> (= sehr viele Nachrichten auf einmal).</li></ul><p>Bei jedem Bild lohnen sich zwei Fragen: <b>Was ist gemeint?</b> Und: <b>Wie wirkt es</b> – was sehe, höre oder fühle ich dabei?</p>" },
      { art: "sort", id: "arten", tag: "Sortieren", titel: "Vergleich, Personifikation oder Metapher?", buckets: ["Vergleich", "Personifikation", "Metapher"], cols: 200, items: [
        { t: "Die Nachricht schlug ein wie ein Blitz.", b: 0 },
        { t: "Er stand da, als wäre er festgewachsen.", b: 0 },
        { t: "Ihre Stimme klang wie ein rostiges Tor.", b: 0 },
        { t: "Die Sonne versteckt sich hinter den Wolken.", b: 1 },
        { t: "Der Regen trommelt ungeduldig ans Fenster.", b: 1 },
        { t: "Die alte Treppe ächzt und klagt.", b: 1 },
        { t: "Ihr Zimmer ist ein Dschungel.", b: 2 },
        { t: "Ein Teppich aus Blättern bedeckte den Weg.", b: 2 },
        { t: "In seinem Kopf tobte ein Sturm.", b: 2 }
      ], hilfen: ["Suche zuerst die Sätze mit „wie“ oder „als“ – das sind die Vergleiche.", "Personifikation: Etwas tut, was sonst nur Menschen tun (sich verstecken, ungeduldig sein, klagen). Metapher: Etwas wird einfach so genannt, als wäre es etwas anderes."] }
    ] },
    { kurz: "Mondnacht", ober: "Lesen und untersuchen", titel: "Eichendorff: Mondnacht", teile: [
      { art: "text", html: "<p class=\"lead\">Joseph von Eichendorff schrieb dieses Gedicht um 1835. Es beschreibt eine einzige Nacht. Lies es zuerst leise. Lies es dann noch einmal halblaut und achte darauf, welche Bilder vor deinen Augen entstehen und welche <button class=\"term\" data-t=\"stimmung\">Stimmung</button> über der Nacht liegt.</p><p>Bei Gedichten heißt eine Zeile <button class=\"term\" data-t=\"vers\">Vers</button>, ein Absatz heißt <button class=\"term\" data-t=\"strophe\">Strophe</button>. Die Zahlen am Rand zählen die Verse. Die Stimme, die im Gedicht „ich“ sagt, nennt man das <button class=\"term\" data-t=\"ich\">lyrische Ich</button>.</p>" },
      { art: "lesetext", tag: "Erstes Gedicht", lesetext: "lit-mondnacht" },
      { art: "markieren", id: "leise", tag: "Genau lesen", titel: "Wie klingt diese Nacht?", satz: "Die Luft ging durch die Felder, / Die Aehren wogten [[sacht]], / Es rauschten [[leis]] die Wälder, / So sternklar war die Nacht.", finde: "die zwei Wörter, die zeigen, wie leise sich alles bewegt", e: "„sacht“ und „leis“: Nichts ist laut, nichts ist heftig. So entsteht die ruhige Stimmung der zweiten Strophe." },
      { art: "mc", id: "mond", tag: "Bilder untersuchen", fragen: [
        { q: "„Es war, als hätt’ der Himmel / Die Erde still geküßt“ (V. 1–2). Woran erkennst du, dass der Kuss nur ein Bild ist?", o: ["an „als hätt’“: Es wirkt nur so, als wäre es geschehen.", "an „still“: Ein wirklicher Kuss wäre viel lauter gewesen.", "an „Es war“: Was vergangen ist, kann nicht wahr sein."], a: 0, e: "„Als hätt’“ leitet einen Vergleich ein: So sah es aus, so fühlte es sich an. Zugleich verhalten sich Himmel und Erde wie zwei Menschen – das ist eine Personifikation." },
        { q: "Was sagt das Bild vom Kuss über Himmel und Erde in dieser Nacht?", o: ["Sie wirken einander ganz nah und verbunden.", "Sie wirken einander fremd und weit entfernt.", "Sie wirken unruhig wie kurz vor einem Gewitter."], a: 0, e: "Ein Kuss bedeutet Nähe und Zuneigung. In dieser hellen Nacht scheint die Grenze zwischen Himmel und Erde zu verschwinden." }
      ] },
      { art: "beleg", id: "mondst", tag: "Textstellen finden", titel: "In welchem Vers steht das?", lead: "Tippe im Gedicht die Verse an, in denen die Antwort steht.", lesetext: "lit-mondnacht", fragen: [
        { q: "In welchen Versen steht, was die Erde nach dem Kuss tun muss – wie ein Mensch?", zeilen: [3, 4], e: "Die Erde „träumt“ vom Himmel. Träumen kann die Erde in Wirklichkeit nicht – eine Personifikation.", tipp: "Suche in der ersten Strophe ein Verb, das sonst zu Menschen passt." },
        { q: "In welchen Versen bekommt die Seele Flügel wie ein Vogel?", zeilen: [9, 10], e: "„Und meine Seele spannte / Weit ihre Flügel aus“ – eine Metapher, denn es steht kein „wie“ da.", tipp: "Lies die dritte Strophe. Welches Wort gehört eigentlich zu einem Vogel?" },
        { nur: "M", q: "In welchem Vers steht ein Vergleich, der zeigt, wohin sich das lyrische Ich sehnt?", zeilen: [12, 12], e: "„Als flöge sie nach Haus“: Die Form „flöge“ zeigt, dass es ein Vergleich ist – die Seele fliegt nicht wirklich heim. „Nach Haus“ steht für einen Ort, an dem man geborgen ist.", tipp: "Der Vergleich beginnt mit „Als“." }
      ], hilfen: ["Strophe 1 handelt von Himmel und Erde, Strophe 2 von Feldern und Wäldern, Strophe 3 vom lyrischen Ich.", "Du darfst einen Vers mehr oder weniger antippen. Wichtig ist, dass du die richtige Stelle triffst."] },
      { art: "offen", id: "fluegel", tag: "In eigenen Worten", titel: "Was sagt das Bild?", fragen: [
        { q: "„Und meine Seele spannte / Weit ihre Flügel aus“ (V. 9–10). Erkläre in ein bis zwei Sätzen: Was erlebt das lyrische Ich in diesem Augenblick?", m: "Das lyrische Ich fühlt sich in dieser Nacht frei und leicht, so als könnte es fliegen. Seine Gedanken und Gefühle lösen sich von allem, was es sonst festhält.", k: ["frei|leicht|flieg|schweb|gelöst|befreit|weit|glücklich", "fühl|gedanken|inner|sehnsucht|stimmung|empfind|herz"], min: 2 }
      ], tipp: "Überlege: Wie fühlt sich jemand, der Flügel ausbreitet? Und was ist mit „Seele“ gemeint – der Körper oder das Innere eines Menschen?", hilfen: ["So kannst du beginnen: Das lyrische Ich fühlt sich …", "Die Seele steht für das Innere eines Menschen: seine Gedanken und Gefühle. Flügel stehen für Freiheit und Leichtigkeit."] }
    ] },
    { kurz: "Die Stadt", ober: "Untersuchen", titel: "Storm: Die Stadt", teile: [
      { art: "text", html: "<p class=\"lead\">Theodor Storm wurde 1817 in Husum geboren, einer kleinen Hafenstadt an der Nordsee. Um 1852 schrieb er ein Gedicht über diese Stadt. Achte beim Lesen auf zwei Dinge: Wie sieht die Stadt aus – und was empfindet das lyrische Ich für sie?</p>" },
      { art: "lesetext", tag: "Zweites Gedicht", lesetext: "lit-stadt" },
      { art: "mc", id: "stadt", tag: "Stimmung und Bild", fragen: [
        { q: "Wie wirkt die Stadt in den ersten beiden Strophen?", o: ["grau, still und eintönig", "bunt, laut und lebendig", "dunkel, wild und gefährlich"], a: 0, e: "Grauer Strand, graues Meer, Nebel – und manches fehlt ganz. Storm zeichnet die Stadt trüb und karg." },
        { q: "„Der Nebel drückt die Dächer schwer“ (V. 3). Wie wirkt diese Personifikation?", o: ["bedrückend – als läge eine Last auf der Stadt", "gemütlich – als würde die Stadt warm zugedeckt", "fröhlich – als spielte der Nebel mit den Dächern"], a: 0, e: "Nebel wiegt fast nichts. Weil er hier „drückt“ wie jemand mit schweren Händen, spürt man eine Last über der ganzen Stadt." }
      ] },
      { art: "beleg", id: "stadtst", tag: "Textstellen finden", titel: "Wo steht das in „Die Stadt“?", lead: "Tippe die gesuchten Verse an.", lesetext: "lit-stadt", fragen: [
        { q: "In welchen Versen erfährst du, was es in dieser Stadt nicht gibt?", zeilen: [6, 7], e: "Kein Wald rauscht, kein Vogel singt den Mai hindurch. Storm beschreibt die Stadt auch durch das, was ihr fehlt.", tipp: "Suche das Wort „kein“." },
        { q: "In welchem Vers sagt das lyrische Ich zum ersten Mal, was es für die Stadt empfindet?", zeilen: [11, 11], e: "„Doch hängt mein ganzes Herz an dir“ – eine Metapher: Ein Herz kann nirgends hängen. Gemeint ist, dass sich das Ich der Stadt tief verbunden fühlt. Mit dem Wort „Doch“ wendet sich das Gedicht.", tipp: "Die Wende beginnt mit einem kleinen Wort am Anfang der dritten Strophe." }
      ], hilfen: ["Die Strophen 1 und 2 beschreiben die Stadt. Erst in Strophe 3 spricht das Ich über sein Gefühl.", "Achte auf das Wort „mein“: Dort redet das lyrische Ich von sich selbst."] },
      { art: "offen", id: "grau", m7: true, tag: "Wirkung deuten", titel: "Warum immer noch „grau“?", fragen: [
        { q: "Viermal nennt das Gedicht die Farbe Grau – zweimal noch in der letzten Strophe (V. 12 und 15), obwohl das Ich die Stadt liebt. Erkläre in zwei Sätzen, wie das zusammenpasst. Beziehe „Der Jugend Zauber“ (V. 13) ein.", m: "Das lyrische Ich beschönigt nichts: Die Stadt bleibt grau und eintönig. Trotzdem hängt es an ihr, weil es dort seine Jugend verbracht hat und die Erinnerungen daran die Stadt für das Ich verzaubern.", k: ["grau|eintönig|trist|trüb|karg|beschönig|nicht schön", "trotzdem|dennoch|obwohl|aber|doch", "jugend|kindheit|erinner|heimat|aufgewachsen|zauber"], min: 2 }
      ], tipp: "Zwei Gedanken: 1. Verschweigt das Ich, wie die Stadt aussieht? 2. Woher kommt seine Zuneigung – was hat es an diesem Ort erlebt?", hilfen: ["„Der Jugend Zauber“ heißt: der Zauber der eigenen Jugendzeit. Was verbindet man mit dem Ort, an dem man aufgewachsen ist?"] }
    ] },
    { kurz: "Herbst", ober: "Deuten", titel: "Rilke: Herbst – wenn ein Bild für mehr steht", teile: [
      { art: "paare", id: "symbole", tag: "Einstieg", titel: "Wofür steht das?", lead: "Manche Dinge bedeuten mehr, als man sieht. Verbinde.", paare: [
        ["weiße Taube", "Frieden"],
        ["rotes Herz", "Liebe"],
        ["Waage", "Gerechtigkeit"],
        ["vierblättriges Kleeblatt", "Glück"],
        ["Sanduhr", "Zeit, die vergeht"]
      ] },
      { art: "merke", kopf: "MERKE: Das Symbol", html: "<p>Ein <button class=\"term\" data-t=\"symbol\">Symbol</button> ist etwas Sichtbares – ein Ding, ein Tier, eine Farbe, ein Vorgang –, das für etwas Unsichtbares steht: für einen Gedanken, ein Gefühl, eine Erfahrung.</p><ul><li>In Gedichten kommen Symbole oft aus der Natur: der <i>Frühling</i> für einen Neuanfang, der <i>Weg</i> für das Leben, der <i>Abend</i> für ein Ende.</li><li>Der Unterschied zur Metapher: Bei der Metapher ist das Bild nur gedacht (in einer „Flut von Nachrichten“ wird niemand nass). Beim Symbol ist das Ding im Text wirklich da – und bedeutet zugleich mehr.</li><li>So kommst du einem Symbol auf die Spur: Was kommt auffällig oft vor? Was wird wichtiger, als es im Alltag wäre?</li></ul>" },
      { art: "beleg", id: "herbstst", tag: "Drittes Gedicht · Lesen und Textstellen finden", titel: "Was fällt hier alles?", lead: "Rainer Maria Rilke schrieb dieses Gedicht im September 1902 in Paris. Lies es zuerst ganz – am besten zweimal. Achte darauf, was hier alles fällt. Tippe dann die gesuchten Verse an.", lesetext: "lit-herbst", fragen: [
        { nur: "R", q: "In welchem Vers steht ein Vergleich mit „wie“?", zeilen: [1, 1], e: "„fallen wie von weit“ – die Blätter scheinen aus großer Ferne zu kommen, nicht nur vom nächsten Baum.", tipp: "Suche das Wort „wie“." },
        { nur: "M", q: "In welchem Vers bewegen sich die Blätter wie jemand, der Nein sagt?", zeilen: [3, 3], e: "„mit verneinender Gebärde“ – eine Personifikation: Die Blätter schaukeln hin und her wie ein Kopf, der sich schüttelt. Es wirkt, als wehrten sie sich gegen das Fallen.", tipp: "Eine Gebärde ist eine Bewegung, mit der Menschen etwas ausdrücken." },
        { q: "In welchem Vers steht, dass nicht nur Blätter fallen, sondern auch die Menschen?", zeilen: [6, 6], e: "„Wir alle fallen.“ Spätestens hier geht es nicht mehr nur um den Herbst.", tipp: "Suche ein Wort, das alle Menschen einschließt." },
        { q: "In welchen Versen wird das Fallen aufgefangen?", zeilen: [8, 9], e: "„Und doch ist Einer …“: Jemand hält das Fallen „unendlich sanft in seinen Händen“.", tipp: "Achte auf die Wörter „Und doch“." }
      ], hilfen: ["Das Gedicht wird von Strophe zu Strophe größer: erst die Blätter, dann die Erde, dann wir Menschen – und zum Schluss die Hände.", "Die Worterklärungen unter dem Gedicht helfen dir bei „Gebärde“ und „Einer“."] },
      { art: "mc", id: "herbst", tag: "Symbol und Wirkung", fragen: [
        { q: "Die fallenden Blätter sind in diesem Gedicht ein Symbol. Wofür stehen sie?", o: ["dafür, dass alles Lebendige einmal vergeht", "dafür, dass nach den Ferien die Schule beginnt", "dafür, dass der Wind stärker ist als die Bäume"], a: 0, e: "Blätter fallen jeden Herbst wirklich. Hier bedeutet ihr Fallen mehr: Nichts bleibt für immer – auch der Mensch nicht. Das nennt man Vergänglichkeit." },
        { q: "Wie verändern die letzten beiden Verse die Stimmung des Gedichts?", o: ["Sie trösten: Das Fallen endet in Händen, die halten.", "Sie erschrecken: Das Fallen wird immer schneller.", "Sie ändern nichts: Alles bleibt ohne Hoffnung."], a: 0, e: "Bis Vers 7 fällt alles – Blätter, Erde, Menschen. Dann kommt das „Und doch“: Aus dem Fallen ins Leere wird ein Gehaltenwerden. Die Stimmung wechselt von bang zu geborgen." }
      ] },
      { art: "merke", m7: true, kopf: "M8: Die Hyperbel", html: "<p>Eine <button class=\"term\" data-t=\"hyperbel\">Hyperbel</button> ist eine starke Übertreibung. Niemand soll sie wörtlich nehmen – sie macht ein Gefühl groß und deutlich:</p><ul><li><i>Das habe ich dir schon tausendmal gesagt.</i> (Ärger)</li><li><i>Mein Rucksack wiegt eine Tonne.</i> (Anstrengung)</li><li><i>Wir haben eine Ewigkeit auf den Zug gewartet.</i> (Ungeduld)</li></ul><p>Auch in Gedichten, Liedern und in der Werbung wird übertrieben. Frage wie bei jedem Bild: Was ist wirklich gemeint – und welches Gefühl soll bei mir ankommen?</p>" },
      { art: "sort", id: "hyper", m7: true, tag: "Hyperbel erkennen", titel: "Übertrieben oder wörtlich gemeint?", buckets: ["Hyperbel", "wörtlich gemeint"], cols: 240, items: [
        { t: "Ich sterbe vor Hunger.", b: 0 },
        { t: "Der Koffer wiegt eine Tonne.", b: 0 },
        { t: "Sie hat ein Meer von Tränen geweint.", b: 0 },
        { t: "Das dauert ja hundert Jahre!", b: 0 },
        { t: "Ich habe seit dem Frühstück nichts gegessen.", b: 1 },
        { t: "Der Koffer wiegt dreiundzwanzig Kilo.", b: 1 },
        { t: "Sie hat bei dem Film geweint.", b: 1 },
        { t: "Das dauert noch etwa zehn Minuten.", b: 1 }
      ] },
      { art: "beispiel", kopf: "So baust du ein Zitat ein", html: "<p>Eichendorff zeigt die Nähe von Himmel und Erde mit einer Personifikation: Der Himmel scheint die Erde „still geküßt“ (V. 2) zu haben. Das Bild wirkt zärtlich, weil ein Kuss Zuneigung ausdrückt.</p><p>Drei Schritte: <b>Bild benennen</b> → <b>wörtlich <button class=\"term\" data-t=\"zitat\">zitieren</button></b>, in Anführungszeichen und mit Vers → <b><button class=\"term\" data-t=\"wirkung\">Wirkung</button> erklären</b>.</p>" },
      { art: "schreiben", id: "deutung", nur: "R", tag: "Schreibtrainer", titel: "Ein Bild erklären", min: 30,
        auftrag: "<p>Wähle aus „Die Stadt“ oder „Herbst“ <b>ein sprachliches Bild</b>, das dir gefällt oder das dich beschäftigt. Erkläre es in drei bis vier Sätzen (mindestens 30 Wörter):</p><ul><li>Nenne das Gedicht und zitiere das Bild wörtlich – in Anführungszeichen und mit Vers (V. …).</li><li>Sage, was für ein Bild es ist: Vergleich, Personifikation, Metapher oder Symbol.</li><li>Erkläre, was damit gemeint ist.</li><li>Beschreibe, wie das Bild auf dich wirkt.</li></ul>",
        starter: ["In dem Gedicht „…“ steht das Bild „…“ (V. …).", "Das ist ein Vergleich / eine Personifikation / eine Metapher / ein Symbol, denn …", "Gemeint ist, dass …", "Auf mich wirkt das Bild …, weil …"],
        kriterien: ["Das Gedicht ist genannt und das Bild wörtlich zitiert – in Anführungszeichen.", "Der Vers ist angegeben (V. …).", "Die Art des Bildes ist benannt.", "Der Text erklärt, was mit dem Bild gemeint ist.", "Der Text beschreibt, wie das Bild wirkt."] },
      { art: "schreiben", id: "deutung", nur: "M", tag: "Schreibtrainer", titel: "Eine Deutung mit Zitat", min: 70,
        auftrag: "<p>Deute Rilkes Gedicht „Herbst“ in einem <b>zusammenhängenden Text</b> (mindestens 70 Wörter):</p><ul><li>Beginne mit einem Satz, der Gedicht, Dichter und Thema nennt.</li><li>Zeige an <b>zwei sprachlichen Bildern</b>, wie das Fallen dargestellt wird. Benenne jedes Bild mit dem Fachbegriff und baue es als Zitat mit Versangabe in deinen eigenen Satz ein.</li><li>Erkläre, wofür das Fallen als Symbol steht.</li><li>Beurteile zum Schluss, wie die letzte Strophe die Wirkung des ganzen Gedichts verändert.</li></ul>",
        starter: ["In Rilkes Gedicht „Herbst“ geht es um …", "Zuerst beschreibt ein Vergleich das Fallen: Die Blätter fallen „…“ (V. …).", "Dieses Bild wirkt …, weil …", "Das Fallen ist ein Symbol für …", "Die letzte Strophe verändert die Wirkung, denn …"],
        kriterien: ["Der erste Satz nennt Gedicht, Dichter und Thema.", "Zwei sprachliche Bilder sind mit dem Fachbegriff benannt.", "Beide Bilder sind wörtlich zitiert, in den eigenen Satz eingebaut und mit Vers angegeben.", "Der Text erklärt, wofür das Fallen als Symbol steht.", "Der Schluss beurteilt, wie die letzte Strophe wirkt."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", titel: "Setze die Fachbegriffe ein", absaetze: [
        ["Ein ", { g: "Vergleich" }, " stellt zwei Dinge mit „wie“ oder „als“ nebeneinander."],
        ["Bei der ", { g: "Personifikation" }, " handelt oder fühlt etwas wie ein Mensch."],
        ["Die ", { g: "Metapher" }, " ist ein Bild ohne Vergleichswort."],
        ["Ein ", { g: "Symbol" }, " ist im Text wirklich da und steht zugleich für etwas Unsichtbares."],
        ["Wer ein Bild deutet, zitiert es, gibt in Klammern den ", { g: "Vers" }, " an und beschreibt, welche ", { g: "Wirkung" }, " es hat."]
      ], extra: ["Reim", "Überschrift"], hilfen: ["Achte auf den Begleiter: „Bei der …“ und „Die …“ verlangen ein Wort, zu dem „die“ passt.", "Zwei Wörter bleiben übrig."] }
    ] }
  ],
  weiter: { href: "lit_05.html", titel: "Modul 5: Szene, Hörspiel, Film", text: "Du kannst jetzt sprachliche Bilder erkennen und ihre Wirkung erklären. Im nächsten Modul geht es darum, wie dieselbe Geschichte als Erzähltext, auf der Bühne, im Hörspiel und im Film ganz verschieden wirkt." }
});
