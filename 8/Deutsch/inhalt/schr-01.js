/* Deutsch 8 · Schreiben und Aufsätze · Modul 1: Schreiben planen
   (Schreibauftrag lesen: Thema, Adressat, Form, Umfang – Ideen in Stichpunkten sammeln und auswählen – mit Mindmap und
   Gliederung ordnen, M8: numerische Gliederung 1 / 2.1 / 2.2 – vom Stichpunkt zum ersten Satz – eigener Schreibplan)
   LehrplanPLUS D8 3.2 (Texte planen: Informationen ordnen; M8: Planungsübersichten, Mindmap, numerische Gliederung),
   3.1 (Sachverhalte als kontinuierliche und diskontinuierliche Texte gestalten), 2.1 (Textaussagen belegen).
   Texte: „Betreff: Beitrag über das Sportfest“ (texte/schreiben/auftrag-sportfest-r.js und -m.js) – erfundene Nachricht
   eines Homepage-Teams, R8 15 Zeilen · M8 25 Zeilen. Alle Angaben zum Sportfest sind erfunden. */
D7Kit.seite({
  id: "schr-01",
  titel: "Schreiben planen",
  einleitung: "Gute Texte entstehen nicht erst beim Tippen, sondern davor. Heute lernst du, wie du einen Schreibauftrag genau liest, Ideen sammelst und ordnest – und wie aus deinem Plan der erste Satz wird. Dein Beispiel: ein Beitrag für die Schulhomepage über das Sportfest.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔎 Ich lese einen Schreibauftrag genau: Thema, Adressat, Form, Umfang.", "💡 Ich sammle Ideen in Stichpunkten und wähle aus, was zum Auftrag passt.", "🗂 Ich ordne meine Ideen mit Mindmap und Gliederung.", "✍️ Ich mache aus meinem Plan den ersten Satz."],
  haupttext: { R: "schr-sportfest-r", M: "schr-sportfest-m" },
  quiz: { profi: "Plan-Profi" },
  glossar: {
    auftrag: ["Schreibauftrag", "Die Aufgabe, die dir sagt, was du schreiben sollst: worüber, für wen, in welcher Form und wie lang."],
    adressat: ["Adressat", "Die Person oder Gruppe, für die du schreibst. Nach ihr richten sich Inhalt und Wortwahl."],
    form: ["Form (Textsorte)", "Die Art des Textes, zum Beispiel Bericht, Einladung, Brief oder Stellungnahme. Jede Form hat eigene Regeln."],
    zweck: ["Zweck", "Was der Text bei den Lesern erreichen soll: informieren, überzeugen, einladen, unterhalten."],
    stichpunkt: ["Stichpunkt", "Wenige Wörter, die eine Information festhalten – kein ganzer Satz. Artikel und Füllwörter fallen weg."],
    mindmap: ["Mindmap", "Eine Gedankenlandkarte: Das Thema steht in der Mitte, davon gehen Äste mit Oberbegriffen ab, an denen die Stichpunkte hängen."],
    oberbegriff: ["Oberbegriff", "Ein Wort, das mehrere Stichpunkte zusammenfasst: Sprint, Weitsprung und Ballwurf sind „Wettbewerbe“."],
    gliederung: ["Gliederung", "Der Bauplan deines Textes: Sie legt fest, was in Einleitung, Hauptteil und Schluss steht – und in welcher Reihenfolge."],
    numerisch: ["numerische Gliederung", "Eine Gliederung mit Zahlen: Hauptpunkte heißen 1, 2, 3, ihre Unterpunkte 2.1, 2.2 und so weiter."],
    schreibplan: ["Schreibplan", "Alles, was du vor dem Schreiben festlegst: Auftrag, geordnete Stichpunkte und der erste Satz."]
  },
  stationen: [
    { kurz: "Auftrag", ober: "Ausprobieren", titel: "Erst lesen, dann schreiben: der Schreibauftrag", teile: [
      { art: "text", html: "<p class=\"lead\">Das Sportfest ist vorbei, und das Homepage-Team der Schule braucht einen Beitrag. Milan aus der 8b setzt sich sofort an den Computer: „Unser Sportfest war super. Es gab viele Spiele. Dann …“ – nach drei Sätzen weiß er nicht mehr weiter.</p>" },
      { art: "mc", id: "vor", tag: "Was ist schiefgelaufen?", fragen: [
        { q: "Milan soll einen Beitrag für die Schulhomepage schreiben und tippt sofort los. Nach drei Sätzen weiß er nicht weiter. Was hätte ihm am meisten geholfen?", o: ["ein Plan: Auftrag klären, Ideen sammeln und ordnen", "eine längere Pause vor dem Weiterschreiben", "eine größere Schrift und ein schöneres Layout", "ein fertiger Text aus dem Internet als Vorlage"], a: 0, e: "Wer vorher weiß, was verlangt ist und was in welcher Reihenfolge kommt, bleibt beim Schreiben nicht stecken. Genau das übst du heute." }
      ] },
      { art: "beleg", id: "auf", nur: "R", tag: "Genau lesen", titel: "Was verlangt der Auftrag?", lead: "Profis lesen zuerst den <button class=\"term\" data-t=\"auftrag\">Schreibauftrag</button> – Wort für Wort. Hier ist die Nachricht des Homepage-Teams. Lies sie einmal ganz. Tippe dann die Zeilen an, in denen die Antwort steht.", lesetext: "schr-sportfest-r", fragen: [
        { q: "In welchen Zeilen steht, wer den Beitrag lesen wird?", zeilen: [4, 5], e: "Eltern und Kinder aus den vierten Klassen – das sind deine Adressaten.", tipp: "Suche den Satz, der mit „Lesen werden den Beitrag …“ beginnt." },
        { q: "Wo steht, welche Form der Text haben und wie lang er sein soll?", zeilen: [8, 9], e: "Ein Bericht mit Überschrift, etwa 150 Wörter: Form und Umfang stehen direkt hintereinander.", tipp: "Suche das Wort „Bericht“ und die Zahl." },
        { q: "Wo steht, was du weglassen sollst?", zeilen: [11, 12], e: "Keine Ergebnisliste und nichts, was nur die eigene Klasse interessiert.", tipp: "Suche die Wörter „brauchen wir nicht“ und „weg“." }
      ], hilfen: ["Ein Schreibauftrag beantwortet immer dieselben Fragen: Worüber? Für wen? In welcher Form? Wie lang?", "Tippe nur die Zeilen an, in denen die Antwort wirklich steht – nicht den ganzen Absatz."] },
      { art: "beleg", id: "auf", nur: "M", tag: "Genau lesen", titel: "Was verlangt der Auftrag?", lead: "Profis lesen zuerst den <button class=\"term\" data-t=\"auftrag\">Schreibauftrag</button> – Wort für Wort. Hier ist die Nachricht des Homepage-Teams. Lies sie einmal ganz. Tippe dann die Zeilen an, in denen die Antwort steht.", lesetext: "schr-sportfest-m", fragen: [
        { q: "In welchen Zeilen nennt der Auftrag die beiden Lesergruppen?", zeilen: [5, 8], e: "Eltern und Kinder aus den vierten Klassen – zwei Gruppen mit unterschiedlichen Interessen.", tipp: "Achte auf „zum einen … zum anderen“." },
        { q: "Wo steht, was der Beitrag bei den Lesern erreichen soll?", zeilen: [11, 12], e: "Er soll sachlich informieren und zugleich zeigen, dass Gemeinschaft zählt – das ist der Zweck des Textes.", tipp: "Suche den Satz, der mit „Der Beitrag soll …“ beginnt." },
        { q: "Wo stehen Textsorte, Länge und die Vorgabe für die Überschrift?", zeilen: [15, 17], e: "Bericht, 180 bis 220 Wörter, eine Überschrift, die neugierig macht, ohne zu viel zu versprechen.", tipp: "Der Absatz beginnt mit „Zur Form“." },
        { q: "Wo steht, wie Schülerinnen und Schüler im Text genannt werden?", zeilen: [19, 20], e: "Nur mit Vornamen und Klasse – auch solche Vorgaben gehören zum Auftrag.", tipp: "Suche das Wort „Vornamen“." }
      ] },
      { art: "karten", tag: "Vier Fragen an jeden Schreibauftrag", karten: [
        { ic: "🎯", titel: "Thema", text: "Worüber schreibe ich? Was gehört dazu – und was nicht?" },
        { ic: "👥", titel: "Adressat", text: "Wer liest meinen Text? Was wissen diese Leser schon, was nicht?" },
        { ic: "📄", titel: "Form", text: "Welche Textsorte wird erwartet: Bericht, Einladung, Steckbrief …?" },
        { ic: "📏", titel: "Umfang", text: "Wie lang soll der Text sein? Bis wann muss er fertig sein?" }] },
      { art: "text", nur: "M", html: "<p>Der Auftrag an die 8b verrät noch etwas Fünftes: den <button class=\"term\" data-t=\"zweck\">Zweck</button>. Der Beitrag soll informieren – und zugleich ein gutes Bild der Schule zeichnen. Wer den Zweck kennt, weiß, worauf es beim Auswählen ankommt.</p>" },
      { art: "beispiel", kopf: "Zwei andere Aufträge", html: "<p><strong>A</strong> „Schreibt für den Elternbrief eine Einladung zum Tag der offenen Tür – höchstens eine halbe Seite.“</p><p><strong>B</strong> „Verfasst für die Schülerzeitung einen Steckbrief über die neue Schulsozialarbeiterin, etwa 80 Wörter.“</p>" },
      { art: "sort", id: "vier", tag: "Zuordnen", titel: "Thema, Adressat, Form oder Umfang?", lead: "Zerlege die beiden Aufträge A und B: Was ist das Thema, wer ist der <button class=\"term\" data-t=\"adressat\">Adressat</button>, welche <button class=\"term\" data-t=\"form\">Form</button> ist verlangt und welcher Umfang?", buckets: ["Thema", "Adressat", "Form", "Umfang"], cols: 170, items: [
        { t: "der Tag der offenen Tür", b: 0 },
        { t: "die neue Schulsozialarbeiterin", b: 0 },
        { t: "die Eltern", b: 1 },
        { t: "Leserinnen und Leser der Schülerzeitung", b: 1 },
        { t: "eine Einladung", b: 2 },
        { t: "ein Steckbrief", b: 2 },
        { t: "höchstens eine halbe Seite", b: 3 },
        { t: "etwa 80 Wörter", b: 3 }
      ] },
      { art: "mc", id: "adr", tag: "Für wen schreibe ich?", fragen: [
        { q: "Einen Homepage-Beitrag über das Sportfest lesen Eltern und Viertklässler, die nicht dabei waren. Was folgt daraus für den Text?", o: ["Ich erkläre kurz, was Außenstehende nicht wissen können.", "Ich schreibe so, wie ich mit Freunden im Chat rede.", "Ich lasse Ort und Datum weg, weil sie jeder kennt.", "Ich zähle möglichst viele Namen aus meiner Klasse auf."], a: 0, e: "Wer nicht dabei war, kennt weder den Ablauf noch die Abkürzungen der Schule. Der Adressat bestimmt, was du erklären musst." },
        { q: "Welcher Satz passt im Ton zu einem Beitrag auf der Schulhomepage?", o: ["Beim Tauziehen traten die Lehrkräfte gegen eine Schülerauswahl an.", "Beim Tauziehen haben wir die Lehrer so richtig plattgemacht, haha.", "Tauziehen war halt auch noch, keine Ahnung, wer da gewonnen hat.", "Das Tauziehen war mit Abstand das Allergeilste am ganzen Tag."], a: 0, e: "Die Homepage ist öffentlich und wird auch von Erwachsenen gelesen: sachlich, vollständig, ohne Umgangssprache." }
      ] }
    ] },
    { kurz: "Ideen", ober: "Sammeln", titel: "Ideen sammeln – und auswählen", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt weißt du, was verlangt ist. Der zweite Schritt: Ideen sammeln. Schreib alles auf, was dir einfällt – in <button class=\"term\" data-t=\"stichpunkt\">Stichpunkten</button> und noch ohne Ordnung. Aussortiert wird erst danach.</p>" },
      { art: "beispiel", kopf: "Paulinas Notizzettel", html: "<ul><li>Klassenstaffel: 8b knapp vor 8a</li><li>mein neues Trikot: 40 Euro</li><li>Dreikampf: Sprint, Weitsprung, Ballwurf</li><li>Montag: Mathe-Probe!</li><li>alle Klassen von 5 bis 9 dabei</li><li>Hausmeister mäht am Donnerstag den Rasen</li><li>Neuntklässler helfen an den Stationen</li><li>Yusuf hat sein Pausenbrot vergessen</li><li>Wanderpokal geht an die 7a</li><li>Weitsprung: alle 300 Ergebnisse</li></ul>" },
      { art: "sort", id: "brauch", tag: "Auswählen", titel: "Was passt zum Auftrag?", lead: "Denk an die Leser: Eltern und Viertklässler, die sich für die Schule interessieren. Was brauchen sie, was nicht?", buckets: ["passt zum Auftrag", "lieber weglassen"], cols: 240, items: [
        { t: "Klassenstaffel: 8b knapp vor 8a", b: 0 },
        { t: "Dreikampf: Sprint, Weitsprung, Ballwurf", b: 0 },
        { t: "alle Klassen von 5 bis 9 dabei", b: 0 },
        { t: "Neuntklässler helfen an den Stationen", b: 0 },
        { t: "Wanderpokal geht an die 7a", b: 0 },
        { t: "mein neues Trikot: 40 Euro", b: 1 },
        { t: "Montag: Mathe-Probe!", b: 1 },
        { t: "Hausmeister mäht am Donnerstag den Rasen", b: 1 },
        { t: "Yusuf hat sein Pausenbrot vergessen", b: 1 },
        { t: "Weitsprung: alle 300 Ergebnisse", b: 1 }
      ], hilfen: ["Frage dich bei jedem Zettel: Hilft das jemandem, der nicht dabei war, sich das Sportfest vorzustellen?", "Der Auftrag sagt ausdrücklich: Eine Liste mit allen Ergebnissen wird nicht gebraucht."] },
      { art: "text", html: "<p>Ein Stichpunkt ist kein Satz. Er hält nur fest, was du später brauchst: Nomen, Zahlen, höchstens ein wichtiges Verb. Artikel und Füllwörter fallen weg.</p>" },
      { art: "markieren", id: "stich", tag: "Markieren", titel: "Welche Wörter kommen in den Stichpunkt?", lead: "Aus diesem Satz soll ein Stichpunkt werden.", satz: "Zum Abschluss liefen alle Klassen eine [[Staffel]], und die [[8b]] kam ganz [[knapp]] vor der [[8a]] ins Ziel.", finde: "die vier Wörter, die du für den Stichpunkt brauchst", e: "Staffel: 8b knapp vor 8a – so kurz kann ein Stichpunkt sein." },
      { art: "mc", id: "stp", tag: "Stichpunkte prüfen", fragen: [
        { q: "Aus dem Satz „Der Elternbeirat hat den ganzen Vormittag kostenlos Obst und Getränke verteilt“ soll ein Stichpunkt werden. Welcher ist am besten?", o: ["Elternbeirat: Obst und Getränke", "Der Elternbeirat hat den ganzen Vormittag kostenlos Obst und Getränke verteilt.", "Obst", "Sachen, die es vom Elternbeirat gab"], a: 0, e: "Kurz, aber verständlich: Wer hat was gemacht? Ein einzelnes Wort ist zu wenig, der ganze Satz zu viel, „Sachen“ zu ungenau." }
      ] },
      { art: "offen", id: "kurz", m7: true, tag: "Selbst kürzen", titel: "Vom Satz zum Stichpunkt", fragen: [
        { q: "Mache aus dem Satz einen Stichpunkt mit höchstens sieben Wörtern: „Die Schülerinnen und Schüler der neunten Klassen haben an allen Stationen die Weiten gemessen und die Zeiten gestoppt.“", m: "Neuntklässler: an allen Stationen messen und stoppen", k: ["neunt|9. klass|9.-klässler", "mess|stopp|helf|station"] }
      ], tipp: "Wer? Was? Mehr braucht der Stichpunkt nicht. Streiche Artikel und das Hilfsverb „haben“." }
    ] },
    { kurz: "Ordnen", ober: "Ordnen", titel: "Mindmap und Gliederung", teile: [
      { art: "text", html: "<p class=\"lead\">Auf Paulinas Zettel steht noch alles durcheinander. Eine <button class=\"term\" data-t=\"mindmap\">Mindmap</button> bringt Ordnung hinein: In der Mitte steht das Thema – hier <strong>„Sportfest“</strong>. Davon gehen Äste ab. Jeder Ast trägt einen <button class=\"term\" data-t=\"oberbegriff\">Oberbegriff</button>, an seinen Zweigen hängen die Stichpunkte.</p>" },
      { art: "karten", tag: "Die vier Äste der Mindmap „Sportfest“", karten: [
        { ic: "📅", titel: "Ast 1: Rahmen", text: "Wann? Wo? Wer war dabei?" },
        { ic: "🏃", titel: "Ast 2: Wettbewerbe", text: "Was wurde gelaufen, geworfen, gespielt?" },
        { ic: "🤝", titel: "Ast 3: Helfer", text: "Wer hat mit angepackt?" },
        { ic: "🏆", titel: "Ast 4: Ergebnis", text: "Wer hat gewonnen? Was bleibt in Erinnerung?" }] },
      { art: "sort", id: "mind", tag: "Mindmap füllen", titel: "An welchen Ast gehört der Stichpunkt?", buckets: ["Rahmen", "Wettbewerbe", "Helfer", "Ergebnis"], cols: 170, items: [
        { t: "10. Juli, 8 bis 13 Uhr", b: 0 },
        { t: "Sportplatz hinter der Schule", b: 0 },
        { t: "alle Klassen von 5 bis 9", b: 0 },
        { t: "Dreikampf: Sprint, Weitsprung, Ballwurf", b: 1 },
        { t: "Fußballturnier der Klassen 7 bis 9", b: 1 },
        { t: "Tauziehen: Lehrkräfte gegen Schüler", b: 1 },
        { t: "Neuntklässler messen und stoppen", b: 2 },
        { t: "Elternbeirat: Obst und Getränke", b: 2 },
        { t: "Schulsanitäter am Spielfeldrand", b: 2 },
        { t: "Sieger der Staffel: Klasse 8b", b: 3 },
        { t: "Wanderpokal geht an die 7a", b: 3 }
      ] },
      { art: "mc", id: "ueber", tag: "Oberbegriffe", fragen: [
        { q: "Mindmap zum Sportfest: Welcher Stichpunkt gehört NICHT an den Ast „Wettbewerbe“?", o: ["Elternbeirat: Obst und Getränke", "Dreikampf am Vormittag", "Fußballturnier der Klassen 7 bis 9", "Klassenstaffel zum Abschluss"], a: 0, e: "Obst und Getränke sind kein Wettbewerb – der Stichpunkt gehört an den Ast „Helfer“. An einem Ast hängt nur, was zum Oberbegriff passt." }
      ] },
      { art: "merke", kopf: "MERKE: Von der Mindmap zur Gliederung", html: "<ul><li>Die Mindmap zeigt, <strong>was zusammengehört</strong>. Die <button class=\"term\" data-t=\"gliederung\">Gliederung</button> legt fest, <strong>in welcher Reihenfolge</strong> du schreibst.</li><li>Jeder Text hat drei Teile: <strong>Einleitung</strong> (Worum geht es?), <strong>Hauptteil</strong> (die Einzelheiten in sinnvoller Reihenfolge), <strong>Schluss</strong> (Ergebnis, Dank oder Ausblick).</li><li>Bei einem Bericht über einen Tag ordnest du den Hauptteil nach der Zeit.</li></ul>" },
      { art: "ordnen", id: "glied", tag: "Reihenfolge", titel: "Baue die Gliederung für den Beitrag", lead: "Bring die Punkte in die Reihenfolge, in der sie im Beitrag stehen sollen.", schritte: [
        "Einleitung: Sportfest am 10. Juli auf dem Sportplatz – alle Klassen dabei",
        "Eröffnung durch die Schulleiterin",
        "Vormittag: Dreikampf aus Sprint, Weitsprung und Ballwurf",
        "Danach: Fußballturnier und Tauziehen",
        "Höhepunkt zum Abschluss: die Klassenstaffel",
        "Siegerehrung: Wanderpokal für die 7a",
        "Schluss: Dank an die Helfer, Ausblick auf das nächste Jahr"
      ], hilfen: ["Einleitung zuerst, Schluss zuletzt. Dazwischen: Was geschah am Morgen, was danach?", "Die Siegerehrung kann erst stattfinden, wenn alle Wettbewerbe vorbei sind."] },
      { art: "mc", id: "gl", nur: "R", tag: "Reihenfolge begründen", fragen: [
        { q: "Du planst einen Bericht über einen Tag, zum Beispiel ein Sportfest. Wie ordnest du die Punkte im Hauptteil am besten?", o: ["in der Reihenfolge, in der alles geschehen ist", "nach dem Alphabet der Stichpunkte", "das Spannendste zuerst, der Rest irgendwie", "so, wie sie mir gerade einfallen"], a: 0, e: "Leser, die nicht dabei waren, können dem Tag am leichtesten folgen, wenn du ihn der Reihe nach schilderst." }
      ] },
      { art: "merke", nur: "M", kopf: "MERKE: Die numerische Gliederung", html: "<p>Längere Texte planst du mit einer <button class=\"term\" data-t=\"numerisch\">numerischen Gliederung</button>:</p><ul><li>Hauptpunkte bekommen <strong>1, 2, 3 …</strong>, ihre Unterpunkte <strong>2.1, 2.2, 2.3 …</strong></li><li>Wer <strong>2.1</strong> schreibt, braucht auch <strong>2.2</strong> – ein einzelner Unterpunkt ist kein Unterpunkt.</li><li>Punkte auf derselben Ebene sind gleich wichtig und gleich gebaut, am besten in Stichworten: „Dreikampf am Vormittag“, nicht „Am Vormittag war dann der Dreikampf“.</li></ul>" },
      { art: "luecke", id: "num", nur: "M", tag: "Nummerieren", titel: "Setze die fehlenden Nummern ein", lead: "Die Gliederung für den Beitrag ist fast fertig – nur sechs Nummern fehlen.", absaetze: [
        ["<strong>1</strong> Einleitung: Sportfest am 10. Juli, alle Klassen dabei"],
        [{ g: "2" }, " Die Wettbewerbe"],
        ["&emsp;", { g: "2.1" }, " Dreikampf am Vormittag"],
        ["&emsp;<strong>2.2</strong> Fußballturnier und Tauziehen"],
        ["&emsp;", { g: "2.3" }, " Klassenstaffel als Höhepunkt"],
        [{ g: "3" }, " Die Helfer"],
        ["&emsp;<strong>3.1</strong> Neuntklässler an den Stationen"],
        ["&emsp;", { g: "3.2" }, " Elternbeirat: Obst und Getränke"],
        [{ g: "4" }, " Schluss: Siegerehrung, Dank, Ausblick"]
      ], extra: ["1.1", "2.4", "5"] },
      { art: "mc", id: "gl", nur: "M", tag: "Gliederung prüfen", fragen: [
        { q: "Welche numerische Gliederung ist formal richtig?", o: ["1 Einleitung – 2 Hauptteil – 2.1 Wettbewerbe – 2.2 Helfer – 3 Schluss", "1 Einleitung – 2 Hauptteil – 2.1 Wettbewerbe – 3 Schluss", "1 Einleitung – 1.2 Hauptteil – 1.3 Wettbewerbe – 2 Schluss", "1 Einleitung – a) Hauptteil – II Wettbewerbe – 3. Schluss"], a: 0, e: "Unterpunkte gibt es nur zu zweit oder mehr (2.1 und 2.2), sie beginnen bei .1, und die Zählweise wird nicht gemischt." }
      ] }
    ] },
    { kurz: "Erster Satz", ober: "Üben", titel: "Vom Plan zum ersten Satz", teile: [
      { art: "text", html: "<p class=\"lead\">Der Plan steht. Jetzt wird aus Stichpunkten Text – Satz für Satz. Besonders wichtig ist der erste Satz: Er sagt den Lesern sofort, worum es geht.</p>" },
      { art: "beispiel", kopf: "Vom Stichpunkt zum Satz", html: "<p><strong>Stichpunkt:</strong> Staffel: 8b knapp vor 8a<br><strong>Satz:</strong> Im abschließenden Staffellauf setzte sich die Klasse 8b knapp gegen die 8a durch.</p><p>Was ist dazugekommen? Ein Verb in der Vergangenheit, die Artikel – und Wörter, die den Zusammenhang zeigen (<em>im abschließenden</em>).</p>" },
      { art: "paare", id: "satz", tag: "Zuordnen", titel: "Welcher Satz ist aus welchem Stichpunkt entstanden?", paare: [
        ["Eröffnung: Schulleiterin", "Um acht Uhr eröffnete die Schulleiterin das Sportfest."],
        ["Dreikampf: alle Klassen", "Am Vormittag sammelten alle Klassen im Dreikampf Punkte."],
        ["Tauziehen: Lehrkräfte – Schüler", "Beim Tauziehen traten die Lehrkräfte gegen eine Schülerauswahl an."],
        ["Elternbeirat: Verpflegung", "Für Obst und Getränke sorgte der Elternbeirat."],
        ["Wanderpokal: 7a", "Den Wanderpokal für die sportlichste Klasse gewann die 7a."]
      ] },
      { art: "mc", id: "anf", tag: "Anfang und Überschrift", fragen: [
        { q: "Welcher erste Satz eignet sich am besten für einen Homepage-Beitrag über das Sportfest?", o: ["Am 10. Juli traten alle Klassen unserer Schule beim Sportfest auf dem Sportplatz gegeneinander an.", "Ich möchte euch jetzt einmal etwas über unser Sportfest auf dem Sportplatz erzählen.", "Das Sportfest war echt der Hammer, das könnt ihr mir wirklich alle glauben!", "Den Wanderpokal für die sportlichste Klasse gewann in diesem Jahr die Klasse 7a."], a: 0, e: "Der erste Satz beantwortet: Wer? Was? Wann? Wo? Ankündigungen („Ich möchte erzählen“) und Umgangssprache passen nicht, und das Ergebnis gehört an den Schluss." },
        { q: "Welche Überschrift passt zu einem Homepage-Beitrag, der über das Sportfest informieren soll?", o: ["Sportfest: Knappe Entscheidung in der Staffel", "Ein Text über einen Tag im Juli", "Krasse Action auf unserem Sportplatz!!!", "Mein allerschönster Schultag überhaupt"], a: 0, e: "Eine gute Überschrift nennt das Thema und macht neugierig – ohne Umgangssprache, ohne Ausrufezeichen-Ketten und ohne „ich“." }
      ] },
      { art: "offen", id: "aus", nur: "R", tag: "Selbst formulieren", titel: "Dein Satz", fragen: [
        { q: "Mache aus dem Stichpunkt einen ganzen Satz für den Beitrag: „Neuntklässler: messen und stoppen an allen Stationen“.", m: "Die Neuntklässler halfen an allen Stationen: Sie maßen die Weiten und stoppten die Zeiten.", k: ["neunt|9. klass", "maßen|mess|stopp|half|unterstütz|station"] }
      ], tipp: "Ergänze Artikel und setze die Verben in die Vergangenheit: Wer tat was – und wo?", hilfen: ["So kann dein Satz anfangen: An allen Stationen …", "Die Vergangenheit von „messen“ heißt „maßen“, die von „stoppen“ heißt „stoppten“."] },
      { art: "offen", id: "aus", nur: "M", tag: "Selbst formulieren", titel: "Der Ton muss zum Leser passen", fragen: [
        { q: "Schreibe den Satz so um, dass er zur Schulhomepage passt: „Die Staffel am Schluss war mega spannend, die 8b hat die 8a gerade so abgezogen.“", m: "Die Staffel zum Abschluss war besonders spannend: Die Klasse 8b gewann knapp vor der 8a.", k: ["staffel", "8b", "gewann|siegte|setzte sich|knapp|besiegte|schlug|vor der 8a"] }
      ], tipp: "Ersetze die Umgangssprache („mega“, „abgezogen“) durch sachliche Wörter. Die Information bleibt dieselbe." }
    ] },
    { kurz: "Dein Plan", ober: "Selbst planen", titel: "Jetzt du: dein eigener Schreibplan", teile: [
      { art: "text", html: "<p class=\"lead\">Du kennst jetzt alle Schritte: Auftrag klären, Ideen sammeln, ordnen, den ersten Satz finden. Wende sie auf ein eigenes Thema an. Wichtig: Du schreibst <strong>nur den <button class=\"term\" data-t=\"schreibplan\">Schreibplan</button></strong> – nicht den fertigen Beitrag.</p>" },
      { art: "schreiben", id: "plan", nur: "R", tag: "Schreibtrainer", titel: "Mein Schreibplan für einen Homepage-Beitrag", min: 50,
        auftrag: "<p><strong>Plane einen Beitrag für die Schulhomepage.</strong> Wähle ein Ereignis, das du selbst miterlebt hast – zum Beispiel ein Turnier, eine Aktion deiner Klasse oder einen Besuch von außerhalb.</p><p>Schreibe deinen Plan auf (mindestens 50 Wörter):</p><ol><li><strong>Auftrag:</strong> Thema – Adressat – Form (je eine Zeile)</li><li><strong>Gliederung in Stichpunkten:</strong> Einleitung – Hauptteil mit mindestens drei Punkten in sinnvoller Reihenfolge – Schluss</li><li><strong>Mein erster Satz</strong> – ausformuliert</li></ol>",
        starter: ["Thema:", "Adressat:", "Form:", "Einleitung:", "Hauptteil:", "Schluss:", "Mein erster Satz:"],
        kriterien: ["Der Plan nennt Thema, Adressat und Form.", "Die Gliederung hat Einleitung, Hauptteil und Schluss.", "Der Hauptteil hat mindestens drei Stichpunkte in sinnvoller Reihenfolge.", "Die Stichpunkte sind kurz – keine ganzen Sätze.", "Der erste Satz ist ausformuliert und sagt, worum es geht."] },
      { art: "schreiben", id: "plan", nur: "M", tag: "Schreibtrainer", titel: "Mein Schreibplan für einen Homepage-Beitrag", min: 70,
        auftrag: "<p><strong>Plane einen Beitrag für die Schulhomepage.</strong> Wähle ein Ereignis, das du selbst miterlebt hast – zum Beispiel ein Turnier, eine Aktion deiner Klasse oder einen Besuch von außerhalb.</p><p>Schreibe deinen Plan auf (mindestens 70 Wörter):</p><ol><li><strong>Auftrag:</strong> Thema – Adressat – Form – Zweck</li><li><strong>Numerische Gliederung in Stichworten:</strong> mindestens drei Hauptpunkte; der Hauptteil hat mindestens zwei Unterpunkte (2.1, 2.2 …)</li><li><strong>Mein erster Satz</strong> – ausformuliert und passend für deine Leser</li><li><strong>Begründung:</strong> Erkläre in einem Satz, warum du die Punkte in dieser Reihenfolge anordnest.</li></ol>",
        starter: ["Thema:", "Adressat:", "Form:", "Zweck:", "1", "2", "2.1", "2.2", "3", "Mein erster Satz:", "Ich ordne die Punkte so, weil"],
        kriterien: ["Der Plan nennt Thema, Adressat, Form und Zweck.", "Die Gliederung ist numerisch (1, 2, 2.1, 2.2 …) und formal richtig.", "Die Punkte stehen in Stichworten und in einer sinnvollen Reihenfolge.", "Der erste Satz ist ausformuliert und passt zu den Lesern.", "Ein Satz begründet die Reihenfolge der Punkte."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Bevor ich schreibe, kläre ich Thema, Adressat, Form und Umfang.", true],
        ["Beim Ideensammeln streiche ich sofort alles, was mir unwichtig vorkommt.", false],
        ["Ein Stichpunkt ist ein vollständiger Satz mit Punkt am Ende.", false],
        ["In einer Mindmap steht das Thema in der Mitte.", true],
        ["Die Gliederung legt fest, in welcher Reihenfolge ich schreibe.", true],
        ["Für wen ich schreibe, spielt für die Wortwahl keine Rolle.", false]
      ] }
    ] }
  ],
  weiter: { href: "schr_02.html", titel: "Modul 2: Zusammenfassen", text: "Planen heißt auswählen: Was ist wichtig, was kann weg? Genau das brauchst du im nächsten Modul – dort fasst du einen Sachtext <strong>knapp und in eigenen Worten</strong> zusammen." }
});
