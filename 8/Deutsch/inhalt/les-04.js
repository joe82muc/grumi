/* Deutsch 8 · Lesen, Sachtexte und Medien · Modul 4: Nachricht, Kommentar, Reportage
   (ein Ereignis, drei journalistische Textsorten: informieren – werten – anschaulich erzählen; Merkmale am Text nachweisen;
   Tatsache und Wertung trennen; M8 zusätzlich: Leserbrief; Hörtext: Radionachricht zum selben Ereignis)
   LehrplanPLUS D8 2.3 (journalistische Textsorten unterscheiden: Nachricht, Kommentar, Reportage; M8 zusätzlich Leserbrief,
   Funktionen Information und Wertung, Deutung mit Zitaten belegen), 1.1 (verstehend zuhören; M8: Sende- und Darstellungsformen
   gegenüberstellen), 2.1 (Textaussagen belegen).
   Texte: „Jugendliche bauen ihren Skatepark mit“ als Nachricht, Kommentar und Reportage (texte/lesen/skatepark-nachricht-r.js/-m.js,
   skatepark-kommentar-r.js/-m.js, skatepark-reportage-r.js/-m.js), Leserbrief nur M8 (skatepark-leserbrief.js), Hörtext
   (texte/hoertexte/radionachricht-skatepark.js). Stadt, Zeitung, Sender und Personen sind erfunden. */
D7Kit.seite({
  id: "les-04",
  titel: "Nachricht, Kommentar, Reportage",
  einleitung: "Ein neuer Skatepark wird eröffnet – und die Zeitung schreibt gleich dreimal darüber. Heute findest du heraus, warum: Eine Nachricht informiert, ein Kommentar wertet, eine Reportage lässt dich miterleben. Am Ende hörst du, wie dieselbe Nachricht im Radio klingt.",
  zeit: "etwa 45 Minuten",
  ziele: ["📰 Ich unterscheide Nachricht, Kommentar und Reportage.", "🔎 Ich weise die Merkmale am Text nach – mit Zeilenangabe.", "⚖️ Ich trenne Information und Wertung.", "🎧 Ich verstehe eine Radionachricht und vergleiche sie mit der Zeitung."],
  quiz: { profi: "Zeitungs-Profi" },
  glossar: {
    nachricht: ["Nachricht", "Ein kurzer, sachlicher Zeitungstext über ein Ereignis. Er beantwortet die W-Fragen; das Wichtigste steht am Anfang."],
    kommentar: ["Kommentar", "Ein Text, in dem eine Journalistin oder ein Journalist ein Ereignis bewertet und die Meinung begründet."],
    reportage: ["Reportage", "Ein anschaulicher Bericht von vor Ort: Er verbindet Eindrücke, Zitate und Informationen und lässt die Leser miterleben."],
    wfragen: ["W-Fragen", "Wer? Was? Wann? Wo? – und wenn möglich auch Wie? und Warum? Eine Nachricht beantwortet sie."],
    vorspann: ["Vorspann", "Der erste Absatz einer Nachricht. Er fasst das Wichtigste zusammen."],
    sachlich: ["sachlich", "Ohne eigene Meinung und ohne Gefühle – nur das, was sich nachprüfen lässt."],
    wertung: ["Wertung", "Ein Urteil: Jemand sagt, ob er etwas gut oder schlecht, richtig oder falsch findet."],
    zitat: ["Zitat", "Die Worte einer Person, genau so wiedergegeben, wie sie gesagt wurden – in Anführungszeichen."],
    leserbrief: ["Leserbrief", "Ein kurzer wertender Text, mit dem eine Leserin oder ein Leser auf einen Zeitungsbeitrag antwortet."],
    oton: ["O-Ton", "Kurz für Originalton: Im Radio hört man eine Person selbst sprechen, nicht nur die Sprecherin oder den Sprecher."]
  },
  stationen: [
    { kurz: "Drei Texte", ober: "Lesen", titel: "Ein Ereignis – drei Texte", teile: [
      { art: "text", html: "<p class=\"lead\">In Hasellohe ist am Samstag ein neuer Skatepark eröffnet worden. Stadt, Zeitung und Personen sind erfunden – so etwas könnte aber überall geschehen. Das „Haselloher Tagblatt“ hat drei Texte dazu gedruckt. Lies sie nacheinander und achte darauf, <strong>wie</strong> jeder Text über das Ereignis schreibt.</p>" },
      { art: "lesetext", lesetext: { R: "les-skate-nachricht-r", M: "les-skate-nachricht-m" } },
      { art: "lesetext", lesetext: { R: "les-skate-kommentar-r", M: "les-skate-kommentar-m" } },
      { art: "lesetext", lesetext: { R: "les-skate-reportage-r", M: "les-skate-reportage-m" } },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Was haben alle drei Texte gemeinsam?", o: ["Sie handeln vom neuen Skatepark, an dem Jugendliche mitgebaut haben.", "Sie fordern die Stadt auf, mehr Geld für Jugendliche auszugeben.", "Sie erzählen den Tag der Eröffnung aus der Sicht von Mila."], a: 0, e: "Das Ereignis ist dasselbe – aber jeder Text geht anders damit um." },
        { q: "In welchem Text sagt die Verfasserin deutlich, was sie von der Sache hält?", o: ["in Text B", "in Text A", "in Text C"], a: 0, e: "Text B lobt und kritisiert. Hier steht eine Meinung im Mittelpunkt, nicht das Ereignis selbst." },
        { q: "Welcher Text lässt dich die Baustelle miterleben, als stündest du daneben?", o: ["Text C", "Text A", "Text B"], a: 0, e: "Text C beschreibt, was man auf der Baustelle sieht, hört und riecht." }
      ] },
      { art: "karten", tag: "Drei Textsorten", titel: "So heißen die drei Texte", karten: [
        { ic: "📰", titel: "Text A: Nachricht", text: "Sie <b>informiert</b> kurz und sachlich: Was ist geschehen?" },
        { ic: "💬", titel: "Text B: Kommentar", text: "Er <b>wertet</b>: Was ist davon zu halten – und warum?" },
        { ic: "👀", titel: "Text C: Reportage", text: "Sie <b>lässt miterleben</b>: Wie war es vor Ort?" }
      ] }
    ] },
    { kurz: "Nachricht", ober: "Untersuchen", titel: "Die Nachricht: kurz, sachlich, das Wichtigste zuerst", teile: [
      { art: "text", html: "<p>Text A ist eine <button class=\"term\" data-t=\"nachricht\">Nachricht</button>. Sie will nur eines: schnell und zuverlässig informieren. Prüfe am Text, wie sie das macht.</p>" },
      { art: "beleg", id: "nstellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das in der Nachricht?", lesetext: "les-skate-nachricht-r", fragen: [
        { q: "In welchen Zeilen erfährst du gleich am Anfang, wer was wann und wo getan hat?", zeilen: [1, 4], e: "Der erste Absatz beantwortet die wichtigsten W-Fragen: Jugendliche (wer) haben den Skatepark mitgebaut (was), am Samstag wurde er eröffnet (wann), am Festplatz in Hasellohe (wo).", tipp: "Lies den ersten Absatz." },
        { q: "In welchen Zeilen gibt die Nachricht wörtlich wieder, was die Bürgermeisterin gesagt hat?", zeilen: [14, 16], e: "Die Meinung stammt von der Bürgermeisterin, nicht von der Zeitung. Deshalb steht sie als Zitat in Anführungszeichen – mit Namen.", tipp: "Suche die Anführungszeichen." },
        { q: "Der Platz in der Zeitung reicht nicht. Welche Zeilen kann die Redaktion am ehesten streichen, ohne dass etwas Wichtiges fehlt?", zeilen: [17, 18], e: "Öffnungszeiten und Helm-Empfehlung sind nützlich, aber am wenigsten wichtig. Deshalb stehen sie ganz am Schluss.", tipp: "In einer Nachricht wird es nach hinten immer weniger wichtig." }
      ], hilfen: ["Die W-Fragen heißen: Wer? Was? Wann? Wo?", "Eine Nachricht ist so gebaut: zuerst das Wichtigste, dann Einzelheiten, am Schluss Zusätze."] },
      { art: "beleg", id: "nstellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das in der Nachricht?", lesetext: "les-skate-nachricht-m", fragen: [
        { q: "Eine Nachricht nennt ihre Quellen. In welchen Zeilen macht der Text deutlich, von wem die Angabe zu den Kosten stammt?", zeilen: [12, 13], e: "„nach Angaben der Stadt“ – die Zeitung gibt an, woher sie die Zahl hat. So bleibt sie überprüfbar.", tipp: "Suche die Stelle mit den 180 000 Euro." },
        { q: "In welchen Zeilen gibt die Nachricht eine Äußerung in indirekter Rede wieder?", zeilen: [17, 20], e: "„gäbe“ und „wolle“ stehen im Konjunktiv: Die Zeitung gibt nur wieder, was die Bürgermeisterin gesagt hat – ohne selbst zu urteilen.", tipp: "Achte auf Verbformen im Konjunktiv." }
      ] },
      { art: "merke", kopf: "MERKE: Die Nachricht", html: "<ul><li>Sie beantwortet die <button class=\"term\" data-t=\"wfragen\">W-Fragen</button>: Wer? Was? Wann? Wo? – und wenn möglich auch Wie? und Warum?</li><li><b>Das Wichtigste steht am Anfang</b>, im <button class=\"term\" data-t=\"vorspann\">Vorspann</button>. Danach folgen Einzelheiten – nach hinten wird es immer weniger wichtig.</li><li>Die Sprache ist <button class=\"term\" data-t=\"sachlich\">sachlich</button>: Zahlen, Namen, Tatsachen. Die Redaktion sagt nicht, was sie davon hält.</li><li>Meinungen kommen nur als Äußerung anderer vor – und es steht dabei, von wem sie stammen.</li></ul>" },
      { art: "mc", id: "nachr", tag: "Verstehen", fragen: [
        { q: "Warum steht in einer Nachricht das Wichtigste am Anfang?", o: ["Wer nur den Anfang liest, weiß trotzdem schon das Entscheidende.", "Weil der Anfang einer Nachricht immer besonders spannend sein soll.", "Damit die Meinung der Redaktion sofort deutlich wird."], a: 0, e: "Viele lesen nur die Überschrift und den ersten Absatz. Außerdem lässt sich eine Nachricht so von hinten kürzen." },
        { q: "Welcher Satz passt nicht in eine Nachricht?", o: ["Endlich hat die Stadt einmal etwas richtig gemacht.", "Die Stadt zahlte 150 000 Euro für den neuen Park.", "Zur Feier am Festplatz kamen etwa 300 Besucher."], a: 0, e: "„Endlich“ und „richtig gemacht“ bewerten. Eine Nachricht berichtet, ohne zu urteilen." }
      ] }
    ] },
    { kurz: "Kommentar", ober: "Untersuchen", titel: "Der Kommentar: eine Meinung mit Begründung", teile: [
      { art: "text", html: "<p>Text B ist ein <button class=\"term\" data-t=\"kommentar\">Kommentar</button>. Hier sagt eine Journalistin mit ihrem Namen, was sie von dem Ereignis hält. Die Tatsachen kennst du schon aus der Nachricht – jetzt geht es um die <button class=\"term\" data-t=\"wertung\">Wertung</button>.</p>" },
      { art: "markieren", id: "wert", nur: "R", tag: "Wertende Wörter", titel: "Woran erkennst du die Meinung?", satz: "Der neue Skatepark ist ein [[Glücksfall]] für Hasellohe, und [[endlich]] hat die Stadt einmal [[klug]] entschieden.", finde: "die drei Wörter, die eine Wertung ausdrücken", e: "„Glücksfall“, „endlich“ und „klug“ sagen nichts darüber, was geschehen ist – sie sagen, wie die Verfasserin es findet." },
      { art: "markieren", id: "wert", nur: "M", tag: "Wertende Wörter", titel: "Woran erkennst du die Meinung?", satz: "Zwei Jahre Wartezeit sind [[beschämend]] lang für ein Anliegen, das von Anfang an [[vernünftig]] war, und trotzdem gehört der Park zum [[Besten]], was die Stadt seit Jahren zustande gebracht hat.", finde: "die drei Wörter, die eine Wertung ausdrücken", e: "„beschämend“, „vernünftig“ und „zum Besten“ sind Urteile. Die Zahl „zwei Jahre“ ist dagegen eine Tatsache." },
      { art: "beleg", id: "kstellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Kommentar?", lesetext: "les-skate-kommentar-r", fragen: [
        { q: "In welchen Zeilen sagt Hanna Seidl gleich zu Beginn, wie sie den Skatepark und die Entscheidung der Stadt findet?", zeilen: [2, 5], e: "„Glücksfall“, „endlich“, „klug“ – die Meinung steht am Anfang.", tipp: "Lies den ersten Absatz nach dem Namen." },
        { q: "Wo begründet sie, warum es gut ist, wenn Jugendliche selbst mitbauen?", zeilen: [6, 9], e: "Mit „Denn“ beginnt die Begründung: Wer mitbaut, passt später besser auf.", tipp: "Suche das Wort „Denn“." }
      ], hilfen: ["Ein Kommentar hat oft diesen Aufbau: Meinung – Begründung – Forderung.", "Achte auf Signalwörter: „Denn“ leitet eine Begründung ein, „sollte“ eine Forderung."] },
      { art: "beleg", id: "kstellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Kommentar?", lesetext: "les-skate-kommentar-m", fragen: [
        { q: "In welchen Zeilen fällt die Verfasserin ihr Gesamturteil über das Projekt?", zeilen: [4, 6], e: "Es „gehört zum Besten, was Hasellohe seit Jahren zustande gebracht hat“ – ein klares Urteil, das sie danach begründet.", tipp: "Das Urteil steht am Ende des ersten Absatzes." },
        { q: "Die Verfasserin lobt nicht nur. In welchen Zeilen schränkt sie ihr Lob ein und übt Kritik?", zeilen: [14, 18], e: "Mit „Ungetrübt ist die Freude trotzdem nicht“ leitet sie die Kritik ein: Zwei Jahre Wartezeit seien „beschämend“ lang.", tipp: "Achte auf das Signalwort „trotzdem“." }
      ] },
      { art: "merke", kopf: "MERKE: Der Kommentar", html: "<ul><li>Er enthält eine <b>Meinung</b> – und <b>begründet</b> sie mit Argumenten.</li><li>Wertende Wörter zeigen das Urteil: <i>endlich, leider, klug, ärgerlich, beschämend, vorbildlich</i>.</li><li>Er trägt den Namen der Verfasserin oder des Verfassers und steht in der Zeitung getrennt von den Nachrichten.</li><li>Am Schluss steht oft eine Forderung oder ein Ausblick.</li></ul>" },
      { art: "sort", id: "tatmein", nur: "R", tag: "Sortieren", titel: "Tatsache oder Wertung?", lead: "Eine Tatsache lässt sich nachprüfen. Eine Wertung ist ein Urteil – man kann anderer Meinung sein.", buckets: ["Tatsache", "Wertung"], cols: 240, items: [
        { t: "Der Park hat 180 000 Euro gekostet.", b: 0 },
        { t: "Rund 30 Jugendliche haben mitgebaut.", b: 0 },
        { t: "Die Jugendlichen sammelten 412 Unterschriften.", b: 0 },
        { t: "Der Skatepark ist ein Glücksfall für die Stadt.", b: 1 },
        { t: "Es hat viel zu lange gedauert.", b: 1 },
        { t: "Die Stadt hat klug entschieden.", b: 1 }
      ] },
      { art: "text", nur: "M", html: "<p>Auf einen Kommentar antworten manchmal Leserinnen und Leser – mit einem <button class=\"term\" data-t=\"leserbrief\">Leserbrief</button>. Auch er ist ein wertender Text. Einige Tage später druckt das „Haselloher Tagblatt“ diesen Brief:</p>" },
      { art: "lesetext", nur: "M", lesetext: "les-skate-leserbrief" },
      { art: "mc", id: "leser", nur: "M", m7: true, tag: "Leserbrief", fragen: [
        { q: "Worin unterscheidet sich der Leserbrief (Text D) vom Kommentar (Text B)?", o: ["Ihn schreibt ein Leser, der auf einen Beitrag der Zeitung antwortet.", "Er verzichtet auf jede Wertung und nennt nur Tatsachen.", "Er schildert die Eröffnung so, dass man sie miterlebt."], a: 0, e: "Beide Texte werten. Den Kommentar schreibt die Redaktion, den Leserbrief jemand aus der Leserschaft – er nennt den Beitrag, auf den er sich bezieht, und am Ende Namen und Wohnort." }
      ] },
      { art: "offen", id: "lesero", nur: "M", m7: true, tag: "Mit Zitat belegen", titel: "Was hält der Leser dagegen?", fragen: [
        { q: "Herr Lohmeier widerspricht der Kommentatorin in einem Punkt: Warum ist die alte Anlage verfallen? Gib seine Sicht in einem Satz wieder und belege sie mit einem kurzen Zitat samt Zeilenangabe.", m: "Er meint, die alte Anlage sei nicht verfallen, weil sie den Jugendlichen egal war, sondern weil die Stadt „jahrelang keinen Cent in die Pflege gesteckt hat“ (Z. 10–11).", k: ["pflege|unterhalt|geld|cent|gekümmert|vernachlässigt", "zeile|z."], min: 2 }
      ], tipp: "Vergleiche: Was schreibt Frau Seidl über die alte Anlage – und was der Leser? Das Zitat steht in Anführungszeichen, die Zeile in Klammern dahinter." }
    ] },
    { kurz: "Reportage", ober: "Untersuchen", titel: "Die Reportage: mittendrin statt nur informiert", teile: [
      { art: "text", html: "<p>Text C ist eine <button class=\"term\" data-t=\"reportage\">Reportage</button>. Die Reporterin war selbst auf der Baustelle. Sie teilt nicht nur mit, was geschehen ist – sie nimmt dich mit dorthin.</p>" },
      { art: "beleg", id: "rstellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das in der Reportage?", lesetext: "les-skate-reportage-r", fragen: [
        { q: "In welchen Zeilen beschreibt die Reporterin, was man auf der Baustelle hört und riecht?", zeilen: [6, 7], e: "Die Säge „kreischt“, es „riecht nach frischem Holz und nach Zement“ – solche Eindrücke stehen in keiner Nachricht.", tipp: "Suche die Wörter „kreischt“ und „riecht“." },
        { q: "Auch eine Reportage enthält Informationen. In welchen Zeilen steht, wie viel Geld die Jugendlichen gesammelt haben?", zeilen: [17, 18], e: "Die Zahl kennst du aus der Nachricht. In der Reportage ist sie in die Geschichte eingebaut.", tipp: "Suche die Zahl 12 000." }
      ], hilfen: ["Eine Reportage spricht die Sinne an: sehen, hören, riechen, fühlen.", "Zahlen findest du schnell, wenn du den Text nach Ziffern absuchst."] },
      { art: "beleg", id: "rstellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das in der Reportage?", lesetext: "les-skate-reportage-m", fragen: [
        { q: "Die Reportage beginnt mitten in einer Szene. In welchen Zeilen erklärt sie zum ersten Mal, worum es überhaupt geht?", zeilen: [7, 8], e: "Erst im zweiten Absatz erfährt man: Jugendliche bauen an sechs Samstagen ihren Skatepark mit. Eine Nachricht hätte damit begonnen.", tipp: "Suche die Stelle, an der der Ort genannt wird." },
        { q: "Am Schluss greift die Reportage ein Bild vom Anfang wieder auf. In welchen Zeilen?", zeilen: [31, 33], e: "Die Kelle aus dem ersten Absatz kehrt wieder: Im Beton sind noch ihre Spuren zu sehen. So schließt sich der Kreis.", tipp: "Womit arbeitet Mila im ersten Absatz? Suche dieses Wort am Ende." }
      ] },
      { art: "merke", kopf: "MERKE: Die Reportage", html: "<ul><li>Sie beginnt oft <b>mitten in einer Szene</b> – nicht mit den W-Fragen.</li><li>Sie schildert <b>anschaulich</b>, was man vor Ort sieht, hört, riecht und spürt.</li><li>Menschen kommen in wörtlichen <button class=\"term\" data-t=\"zitat\">Zitaten</button> zu Wort.</li><li>Sie steht meist im <b>Präsens</b> und verbindet Eindrücke mit Informationen (Zahlen, Hintergründe).</li></ul>" },
      { art: "mc", id: "rep", tag: "Wirkung", fragen: [
        { q: "Text C steht fast ganz im Präsens („… zieht die Kelle …“). Was bewirkt das?", o: ["Man hat das Gefühl, im selben Augenblick dabei zu sein.", "Man erkennt, dass alles schon lange vergangen ist.", "Der Text klingt dadurch besonders knapp und sachlich."], a: 0, e: "Das Präsens holt das Geschehen in die Gegenwart – typisch für die Reportage. Die Nachricht steht dagegen in einer Zeitform der Vergangenheit." }
      ] },
      { art: "sort", id: "sorte", tag: "Überblick", titel: "Welches Merkmal gehört zu welcher Textsorte?", buckets: ["Nachricht", "Kommentar", "Reportage"], cols: 200, items: [
        { t: "beantwortet knapp die W-Fragen", b: 0 },
        { t: "nennt das Wichtigste im ersten Absatz", b: 0 },
        { t: "verzichtet auf die Meinung der Redaktion", b: 0 },
        { t: "sagt, was die Verfasserin für richtig hält", b: 1 },
        { t: "begründet ein Urteil mit Argumenten", b: 1 },
        { t: "endet oft mit einer Forderung", b: 1 },
        { t: "beginnt mitten in einer Szene", b: 2 },
        { t: "beschreibt, was man sieht, hört und riecht", b: 2 },
        { t: "erzählt im Präsens, als wäre man dabei", b: 2 }
      ] },
      { art: "offen", id: "umf", tag: "Selbst formulieren", titel: "Aus der Nachricht wird eine Reportage", fragen: [
        { q: "In der Nachricht steht nur: „Rund 30 Jugendliche haben mitgebaut.“ Schreibe dazu einen Satz, wie er in einer Reportage stehen könnte – so, dass man die Baustelle vor sich sieht.", m: "Mit staubigen Händen schleppt Deniz das nächste Brett über den Platz, während neben ihm die Säge kreischt.", k: ["staub|beton|brett|säge|kelle|schaufel|eimer|schubkarre|hammer|schweiß|hände|zement|holz|rampe|akkuschrauber"] }
      ], tipp: "Nenne eine Person und sage genau, was sie gerade tut – im Präsens. Was sieht, hört oder riecht man dabei?", hilfen: ["Stell dir die Baustelle vor: Welche Werkzeuge und welches Material gibt es dort?", "So kannst du beginnen: „Mit beiden Händen …“ oder „Neben dem Betonmischer …“"] }
    ] },
    { kurz: "Hörtext", ober: "Zuhören", titel: "Im Radio: die Nachricht zum Hören", teile: [
      { art: "text", html: "<p>Auch das Radio berichtet über den Skatepark. Dort kann niemand zurückblättern – deshalb sind die Sätze kurz, und Zahlen werden einfach gehalten. Oft hört man einen <button class=\"term\" data-t=\"oton\">O-Ton</button>. Lies zuerst die Aufgaben, dann weißt du, worauf du achten musst. Höre danach genau zu.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "les-hoer-skatepark", fragen: [
        { art: "mc", id: "hw", titel: "Was hast du gehört?", fragen: [
          { q: "Wann wurde der Skatepark laut der Radionachricht eröffnet?", o: ["heute Vormittag", "gestern Abend", "am kommenden Samstag"], a: 0, e: "Das sagt der Sprecher gleich im ersten Satz. Am kommenden Samstag findet der Kurs für Anfänger statt." },
          { q: "Was war für Mila das Schwierigste?", o: ["das lange Warten", "das anstrengende Bauen", "die Fahrt über die Rampe"], a: 0, e: "Nach der Unterschriftenaktion ist „lange nichts passiert“. Das Bauen fand sie anstrengend, aber es hat ihr Spaß gemacht." }] },
        { art: "tf", id: "htf", titel: "Hast du genau zugehört?", aussagen: [
          ["Zur Eröffnung sind etwa dreihundert Menschen gekommen.", true],
          ["Mila hat nur an zwei Samstagen auf der Baustelle mitgearbeitet.", false],
          ["Die Jugendlichen haben zwölftausend Euro selbst gesammelt.", true],
          ["Der Kurs für Anfänger am kommenden Samstag kostet zehn Euro.", false]] },
        { art: "offen", id: "hnot", m7: true, titel: "Radio und Zeitung vergleichen", fragen: [
          { q: "Vergleiche die Radionachricht mit der Zeitungsnachricht (Text A): Nenne zwei Unterschiede in der Darstellung.", m: "Im Radio sind die Sätze kürzer, und man hört Mila selbst sprechen. In der Zeitung stehen mehr Zahlen, zum Beispiel wer wie viel bezahlt hat, und man kann alles nachlesen.", k: ["kürzer|kurz|einfach", "hört|stimme|o-ton|selbst sprechen|interview|reporterin", "zahlen|nachlesen|genauer|einzelheiten|mehr informationen"], min: 2 }], tipp: "Denke an die Sätze, an die Stimmen und an die Menge der Zahlen." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Eine Nachricht beantwortet die W-Fragen und nennt das Wichtigste zuerst.", true],
        ["In einer Nachricht schreibt die Redaktion deutlich, was sie von dem Ereignis hält.", false],
        ["Ein Kommentar enthält eine Meinung, die begründet wird.", true],
        ["Wörter wie „endlich“, „leider“ oder „ärgerlich“ zeigen eine Wertung.", true],
        ["Eine Reportage verzichtet auf Zitate und auf Eindrücke vom Ort des Geschehens.", false],
        ["Über dasselbe Ereignis kann man in verschiedenen Textsorten schreiben.", true]
      ] }
    ] }
  ],
  weiter: { href: "les_05.html", titel: "Modul 5: Texte vergleichen, Absichten erkennen", text: "Nachricht, Kommentar und Reportage stammen aus derselben Redaktion. Was aber, wenn zwei Texte zum selben Thema von ganz verschiedenen Absendern kommen? Im nächsten Modul vergleichst du einen Werbetext mit einem Zeitungsbericht." }
});
