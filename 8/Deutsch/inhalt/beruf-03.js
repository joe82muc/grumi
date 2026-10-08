/* Deutsch 8 · Beruf, Kommunikation und Präsentation · Modul 3: Telefonieren und E-Mails schreiben
   (Notizzettel vor dem Anruf; einem Telefongespräch zuhören und mitschreiben; Ablauf eines Anrufs im Betrieb: melden, Anliegen,
   nachfragen, Wichtiges notieren, bedanken, verabschieden; buchstabieren und Termine wiederholen; E-Mail an einen Betrieb:
   Betreff, Anrede, Anliegen, Anhang, Gruß; Chat-Sprache und E-Mail-Sprache unterscheiden; M8: Bewerbungs-E-Mail und
   persönliche E-Mail nach Ton, Form und Wortwahl vergleichen; zum Schluss eine eigene E-Mail mit vorgegebenen Angaben –
   M8: mit der höflichen Bitte, einen Termin zu verlegen)
   LehrplanPLUS D8 1.3 (Gespräche vorbereiten, bei Unklarheiten nachfragen, Sprachebene an Partner und Situation anpassen),
   1.1 (aufmerksam zuhören, Notizen machen), 4.1 (gesprochene und geschriebene Sprache, Sprache in digitalen Formaten;
   M8: Ellipsen und Kontextbindung, Bewerbungs-E-Mail und persönliche E-Mail vergleichen), 3.2 (berufsorientierende Texte).
   Hörtext: „Elias ruft im Betrieb an“ (texte/hoertexte/telefonat-praktikum.js).
   Lesetexte: Notizzettel (texte/beruf/notizzettel-anruf.js), E-Mail A und B (mail-salopp.js, mail-sachlich.js),
   E-Mail C für die M8-Aufgaben (mail-privat.js). Betriebe, Personen, Ort, Telefonnummern und Adressen sind erfunden;
   in der Schreibaufgabe verwendet das Kind die Angaben einer erfundenen Person, nicht die eigenen. */
D7Kit.seite({
  id: "beruf-03",
  titel: "Telefonieren und E-Mails schreiben",
  einleitung: "Ein Praktikumsplatz beginnt fast immer mit einem Anruf oder einer E-Mail. Beides wirkt nur, wenn Ton und Form stimmen. Heute bereitest du einen Anruf vor, hörst bei einem Telefongespräch zu und schreibst eine E-Mail, die ein Betrieb ernst nimmt.",
  zeit: "etwa 45 Minuten",
  ziele: ["📝 Ich bereite einen Anruf mit einem Notizzettel vor.", "📞 Ich kenne den Ablauf eines Anrufs im Betrieb: melden, Anliegen nennen, nachfragen, notieren, bedanken.", "✉️ Ich schreibe eine E-Mail mit Betreff, Anrede, Anliegen und Gruß.", "💬 Ich unterscheide Chat-Sprache und E-Mail-Sprache."],
  quiz: { profi: "Kontakt-Profi" },
  glossar: {
    anliegen: ["Anliegen", "Das, was du von jemandem möchtest – zum Beispiel einen Praktikumsplatz oder einen Termin."],
    zustaendig: ["zuständig", "Wer für eine Aufgabe verantwortlich ist, ist dafür zuständig."],
    buchstabieren: ["buchstabieren", "Ein Wort Buchstabe für Buchstabe nennen, damit der andere es richtig schreiben kann."],
    betreff: ["Betreff", "Die Zeile über einer E-Mail, die in wenigen Wörtern sagt, worum es geht."],
    anrede: ["Anrede", "Die Begrüßung am Anfang eines Briefs oder einer E-Mail, zum Beispiel „Sehr geehrte Frau Pichler,“."],
    anhang: ["Anhang", "Eine Datei, die mit der E-Mail verschickt wird, zum Beispiel der Lebenslauf."],
    standardsprache: ["Standardsprache", "Das Deutsch, das überall verstanden wird und in Schule, Betrieben und Ämtern üblich ist – auch Hochdeutsch genannt."],
    ellipse: ["Ellipse", "Ein unvollständiger Satz, bei dem etwas ausgelassen ist, das man sich dazudenken kann: „Total aufgeregt!“ statt „Ich bin total aufgeregt!“"]
  },
  stationen: [
    { kurz: "Notizzettel", ober: "Vorbereiten", titel: "Erst der Zettel, dann der Anruf", teile: [
      { art: "text", html: "<p class=\"lead\">Elias sucht einen Platz für die Praktikumswoche seiner Klasse. Er will bei der Firma Lindhuber Heizung und Bad anrufen – und ist aufgeregt. Was, wenn ihm mitten im Gespräch nichts mehr einfällt? Deshalb schreibt er sich vorher einen Notizzettel. Lies ihn und beantworte die Fragen.</p>" },
      { art: "beleg", id: "zettel", tag: "Textstellen finden", titel: "Was steht auf dem Zettel?", lesetext: "beruf-notizzettel-anruf", fragen: [
        { q: "Der Betrieb wird wissen wollen, in welcher Woche Elias kommen möchte. In welchen Zeilen hat er sich das notiert?", zeilen: [4, 5], e: "Dort steht sein Anliegen mit dem genauen Zeitraum. Ohne Datum kann kein Betrieb planen.", tipp: "Suche nach einem Datum." },
        { q: "Am Ende eines Telefonats heißt es oft: „Hast du noch Fragen?“ Auf welche Zeilen schaut Elias dann?", zeilen: [10, 11], e: "Wer seine Fragen vorher aufschreibt, vergisst am Telefon keine.", tipp: "Suche die Stelle, an der es um Kleidung und Unterlagen geht." }
      ], hilfen: ["Jede Notiz beginnt mit einem Stichwort. Lies zuerst nur diese Anfänge."] },
      { art: "mc", id: "vorher", tag: "Vor dem Anruf", fragen: [
        { q: "Wozu braucht Elias den Zettel vor allem?", o: ["Damit er am Telefon nichts Wichtiges vergisst.", "Damit er jeden Satz wörtlich ablesen kann.", "Damit er ihn später dem Betrieb schicken kann."], a: 0, e: "Der Zettel ist eine Stütze, kein Drehbuch: Stichwörter genügen. Wer abliest, klingt steif und kann auf Fragen schlecht reagieren." },
        { q: "Wann und von wo ruft Elias am besten an?", o: ["am Vormittag oder frühen Nachmittag, von einem ruhigen Ort", "in der großen Pause, mitten auf dem vollen Schulhof", "abends nach acht Uhr, wenn im Betrieb endlich Ruhe ist"], a: 0, e: "Betriebe erreichst du während der Geschäftszeiten. Und nur an einem ruhigen Ort verstehst du alles – und wirst selbst gut verstanden." }
      ] },
      { art: "merke", kopf: "MERKE: Der Notizzettel für den Anruf", html: "<ul><li><b>Wen</b> rufe ich an – und wer ist dort <button class=\"term\" data-t=\"zustaendig\">zuständig</button>?</li><li><b>Mein <button class=\"term\" data-t=\"anliegen\">Anliegen</button>:</b> Was möchte ich? Für welchen Zeitraum?</li><li><b>Über mich:</b> Name, Klasse, Schule.</li><li><b>Meine Fragen</b> – damit ich keine vergesse.</li><li><b>Bereitlegen:</b> Stift, Kalender, Platz für Notizen.</li></ul><p>Stichwörter reichen – du liest nicht ab. Ruf während der Geschäftszeiten an, von einem ruhigen Ort aus.</p>" }
    ] },
    { kurz: "Anruf", ober: "Zuhören", titel: "Elias ruft an", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt wird es ernst. Lies zuerst die Aufgaben. Achte beim Hören auf den Ablauf: Wie beginnt Elias, wie endet das Gespräch – und was wird vereinbart?</p><p>Tipp: Schreib mit wie Elias. Notiere dir Namen, Termin und was er erledigen soll.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "beruf-telefonat-praktikum", fragen: [
        { art: "mc", id: "hw", titel: "Wie läuft das Gespräch?", fragen: [
          { q: "Was fehlt, als Elias sich am Anfang meldet?", o: ["sein Name", "sein Anliegen", "eine Frage"], a: 0, e: "„Hallo. Ich wollte fragen …“ – Frau Aigner weiß nicht, wer anruft, und muss erst nachfragen. Am Telefon nennst du zuerst deinen Namen." },
          { q: "Warum ist es gut, dass Elias seinen Nachnamen buchstabiert?", o: ["Weil man den Namen auf verschiedene Arten schreiben kann.", "Weil Herr Lindhuber seinen Vornamen vergessen hat.", "Weil die Verbindung gerade unterbrochen war."], a: 0, e: "Maier, Meyer, Mayr – am Telefon hört man den Unterschied nicht. Wer buchstabiert, wird richtig aufgeschrieben." }
        ] },
        { art: "luecke", id: "notiz", titel: "Ergänze Elias’ Notizen", lead: "Das hat sich Elias während des Gesprächs aufgeschrieben.", absaetze: [
          ["<b>Zuständig:</b> Herr ", { g: "Lindhuber" }, " (der Chef selbst)"],
          ["<b>Kennenlernen:</b> am ", { g: "Mittwoch" }, ", 3. März, um ", { g: "halb vier" }],
          ["<b>Vorher schicken:</b> ", { g: "Lebenslauf" }, " per E-Mail, im Betreff das Wort ", { g: "Praktikum" }],
          ["<b>Kleidung:</b> lange Hose; Sicherheitsschuhe werden ", { g: "geliehen" }]
        ], extra: ["Aigner", "Donnerstag", "Zeugnis"] }
      ] },
      { art: "ordnen", id: "ablauf", tag: "Reihenfolge", titel: "So läuft ein Anruf im Betrieb ab", lead: "Bring die Schritte in die richtige Reihenfolge.", schritte: [
        "Grüßen und den eigenen Namen nennen",
        "Kurz sagen, worum es geht, und nach der zuständigen Person fragen",
        "Der zuständigen Person das Anliegen genau schildern: Was? Wann? Warum?",
        "Eigene Fragen stellen und nachfragen, wenn etwas unklar ist",
        "Zum Schluss das Vereinbarte wiederholen und notieren",
        "Sich bedanken und verabschieden"
      ] },
      { art: "merke", kopf: "MERKE: Am Telefon zählt nur deine Stimme", html: "<ul><li><b>Melden:</b> Gruß, Vor- und Nachname, dann das Anliegen in einem Satz.</li><li><b>Deutlich und nicht zu schnell</b> sprechen – niemand sieht dein Gesicht.</li><li><b><button class=\"term\" data-t=\"buchstabieren\">Buchstabieren</button>:</b> Namen Buchstabe für Buchstabe nennen. Klingen zwei Buchstaben ähnlich, hilft ein Wort: „M wie München, N wie Nürnberg“.</li><li><b>Wiederholen und notieren:</b> Termine, Namen und Zahlen noch einmal sagen – „Ich wiederhole: Mittwoch, 3. März, halb vier“ – und aufschreiben.</li><li><b>Nachfragen</b>, wenn du etwas nicht verstanden hast.</li><li><b>Zum Schluss:</b> bedanken und mit „Auf Wiederhören“ verabschieden.</li></ul>" },
      { art: "mc", id: "tel", tag: "Was sagst du?", fragen: [
        { q: "Du rufst in einem Fahrradladen an. Jemand meldet sich: „Zweirad Haas, guten Tag.“ Wie beginnst du?", o: ["„Guten Tag, mein Name ist … Ich rufe wegen eines Praktikumsplatzes an.“", "„Hallo, bin ich da richtig beim Fahrradladen? Ich hätte da mal eine Frage.“", "„Ja, hi, ich wollte nur kurz wissen, ob ihr auch Praktikanten nehmt.“"], a: 0, e: "Gruß, Name, Anliegen: Nach einem Satz weiß dein Gegenüber, wer du bist und was du möchtest." },
        { q: "Die Mitarbeiterin sagt: „Die Chefin ist heute nicht im Haus.“ Was antwortest du?", o: ["„Wann kann ich sie denn am besten erreichen?“", "„Na toll. Dann hat sich das wohl erledigt.“", "„Dann sagen Sie ihr, sie soll mich anrufen.“"], a: 0, e: "Du möchtest etwas vom Betrieb – also fragst du, wann du es noch einmal versuchen kannst, und notierst dir die Zeit." }
      ] },
      { art: "offen", id: "termin", tag: "Selbst formulieren", titel: "Wiederhole den Termin", fragen: [
        { q: "Am Telefon sagt jemand sehr schnell: „Komm am Donnerstag, dem zwölften, um Viertel nach zwei vorbei.“ Schreibe auf, was du antwortest, um sicherzugehen, dass du den Termin richtig verstanden hast.", m: "Ich wiederhole: Donnerstag, der zwölfte, um Viertel nach zwei. Ist das richtig?", k: ["donnerstag", "zwölf|12", "viertel nach zwei|viertel nach 2|14.15|14:15|14 uhr 15|vierzehn uhr fünfzehn"], min: 3 }
      ], tipp: "Nenne noch einmal Wochentag, Datum und Uhrzeit – am besten mit „Ich wiederhole: …“.", hilfen: ["Drei Angaben musst du wiederholen: den Wochentag, das Datum und die Uhrzeit.", "So kannst du anfangen: „Ich wiederhole: Donnerstag, …“"] }
    ] },
    { kurz: "E-Mail", ober: "Untersuchen", titel: "Zwei E-Mails, ein Anliegen", teile: [
      { art: "text", html: "<p class=\"lead\">Sara möchte ihre Praktikumswoche in einem Malerbetrieb verbringen. Sie schreibt der Chefin, Frau Pichler, eine E-Mail – zuerst so, wie sie ihren Freundinnen schreibt. Lies E-Mail A.</p>" },
      { art: "lesetext", lesetext: "beruf-mail-salopp" },
      { art: "mc", id: "maila", tag: "E-Mail A prüfen", fragen: [
        { q: "Was erfährt Frau Pichler aus E-Mail A nicht?", o: ["in welcher Woche das Praktikum sein soll", "dass es um ein Praktikum geht", "wie die Absenderin mit Vornamen heißt"], a: 0, e: "„Irgendwann im März“ hilft keinem Betrieb beim Planen. Auch Nachname, Schule und Klasse fehlen." },
        { q: "Wie wirkt E-Mail A auf einen Betrieb?", o: ["unhöflich und wenig ernsthaft – wie eine Nachricht an Freunde", "locker und modern – genau richtig für junge Leute", "sehr förmlich – fast schon zu steif für eine E-Mail"], a: 0, e: "Kein Betreff, keine Anrede mit Namen, „euch“ statt „Sie“, dazu Druck („pls schnell“): So schreibt man Freunden, nicht einer Chefin." }
      ] },
      { art: "text", html: "<p>Sara merkt selbst: So geht das nicht. Sie fängt noch einmal von vorn an. Lies E-Mail B und suche die Stellen.</p>" },
      { art: "beleg", id: "mailb", tag: "Textstellen finden", titel: "E-Mail B: Wo steht was?", lesetext: "beruf-mail-sachlich", fragen: [
        { q: "In welchen Zeilen nennt Sara ihr Anliegen: Was möchte sie – und in welcher Woche?", zeilen: [6, 9], e: "Erst stellt sie sich vor, dann sagt sie genau, was sie möchte und wann. Damit kann Frau Pichler planen.", tipp: "Suche die Sätze mit dem Datum und mit „möchte ich“." },
        { q: "Wo steht, auf welchen Wegen Frau Pichler Sara erreichen kann?", zeilen: [13, 15], e: "Sara nennt zwei Wege: E-Mail und Telefon. In derselben Stelle weist sie auch auf den Anhang hin.", tipp: "Suche das Wort „erreichen“." }
      ], hilfen: ["Eine E-Mail hat eine feste Reihenfolge: Betreff, Anrede, Anliegen, Schluss, Gruß. Das Anliegen steht gleich nach der Anrede.", "Angaben für eine Antwort stehen meist kurz vor dem Schlusssatz."] },
      { art: "merke", kopf: "MERKE: Bausteine einer E-Mail an einen Betrieb", html: "<ol><li><b><button class=\"term\" data-t=\"betreff\">Betreff</button>:</b> wenige Wörter, die sagen, worum es geht – „Anfrage: Praktikumsplatz vom 15. bis 19. März“.</li><li><b><button class=\"term\" data-t=\"anrede\">Anrede</button>:</b> „Sehr geehrte Frau …,“ oder „Sehr geehrter Herr …,“ – kennst du keinen Namen: „Sehr geehrte Damen und Herren,“. Nach dem Komma schreibst du klein weiter.</li><li><b>Anliegen:</b> Wer bin ich? Was möchte ich? Wann?</li><li><b><button class=\"term\" data-t=\"anhang\">Anhang</button>:</b> Schickst du eine Datei mit, weist du im Text darauf hin.</li><li><b>Schlusssatz und Gruß:</b> „Mit freundlichen Grüßen“ (ohne Komma), darunter Vor- und Nachname.</li></ol><p>Auch die Absenderadresse spricht für dich: Vorname und Nachname wirken ernsthaft, ein Spitzname nicht.</p>" }
    ] },
    { kurz: "Sprache", ober: "Sprache untersuchen", titel: "Chat ist nicht E-Mail", teile: [
      { art: "paare", id: "chat", tag: "Paare finden", titel: "Vom Chat in die E-Mail", lead: "Was im Chat völlig in Ordnung ist, passt nicht in eine E-Mail an einen Betrieb. Finde zu jeder Chat-Wendung die passende Formulierung.", paare: [
        ["hey", "Sehr geehrte Frau Pichler,"],
        ["kann ich bei euch praktikum machen??", "Ist in Ihrem Betrieb ein Praktikumsplatz frei?"],
        ["meldet euch pls schnell", "Über eine baldige Antwort freue ich mich."],
        ["thx schon mal", "Vielen Dank im Voraus."],
        ["lg", "Mit freundlichen Grüßen"]
      ] },
      { art: "text", html: "<p>Im Chat schreibst du fast so, wie du sprichst: schnell, kurz, mit Abkürzungen und Emojis. Das ist kein Fehler – dein Gegenüber kennt dich und kann sofort nachfragen. Eine E-Mail an einen Betrieb liest jemand, der dich nicht kennt. Deshalb gilt dort die <button class=\"term\" data-t=\"standardsprache\">Standardsprache</button>: ganze Sätze, Groß- und Kleinschreibung, Satzzeichen und die Anrede „Sie“. Entscheidend ist immer: <b>Wem schreibe ich – und wozu?</b></p>" },
      { art: "markieren", id: "mark", tag: "Markieren", titel: "Was passt hier nicht?", satz: "[[Hey]] Frau Gruber, ich würde [[mega]] gern bei [[euch]] ein Praktikum machen. [[Geht das klar]]? [[LG]] Oskar", finde: "die fünf Stellen, die nicht in eine E-Mail an einen Betrieb gehören", e: "In der E-Mail heißt es: „Sehr geehrte Frau Gruber, … sehr gern … bei Ihnen … Ist das möglich? … Mit freundlichen Grüßen“." },
      { art: "mc", id: "betr", tag: "Betreff", fragen: [
        { q: "Welcher Betreff hilft einem Betrieb am meisten?", o: ["Anfrage: Praktikumsplatz vom 15. bis 19. März", "Wichtig!!! Bitte unbedingt sofort lesen", "Hallo, ich hätte da mal eine Frage an Sie"], a: 0, e: "Ein guter Betreff sagt in wenigen Wörtern, worum es geht. So landet die E-Mail gleich bei der richtigen Person." }
      ] },
      { art: "text", m7: true, html: "<p class=\"lead\">Am selben Abend schreibt Sara noch eine E-Mail – diesmal an ihre Cousine Lotte. Lies E-Mail C und vergleiche sie mit E-Mail B.</p>" },
      { art: "lesetext", m7: true, lesetext: "beruf-mail-privat" },
      { art: "sort", id: "vergleich", m7: true, tag: "Vergleichen", titel: "E-Mail B, E-Mail C – oder beide?", lead: "Bewerbungs-E-Mail und persönliche E-Mail: Ordne die Merkmale zu.", buckets: ["nur E-Mail B (an den Betrieb)", "nur E-Mail C (an die Cousine)", "beide"], items: [
        { t: "Anrede mit „Sehr geehrte …“", b: 0 },
        { t: "durchgehend „Sie“", b: 0 },
        { t: "nur vollständige, sachliche Sätze", b: 0 },
        { t: "Anrede mit Vornamen und „du“", b: 1 },
        { t: "unvollständige Sätze wie „Total aufgeregt!“", b: 1 },
        { t: "Andeutungen wie „du weißt schon“", b: 1 },
        { t: "Betreff, Anrede und Gruß sind vorhanden", b: 2 },
        { t: "Groß- und Kleinschreibung stimmen", b: 2 }
      ] },
      { art: "text", nur: "M", html: "<p><b>Für M8:</b> In der persönlichen E-Mail darf Sara schreiben, wie sie spricht. <button class=\"term\" data-t=\"ellipse\">Ellipsen</button> („Total aufgeregt!“, „Schon was gefunden?“) und Andeutungen („du weißt schon“) versteht Lotte sofort, weil sie Sara und die Lage kennt. Frau Pichler fehlt dieses Wissen – ihr muss Sara alles ausdrücklich und vollständig sagen. Locker heißt aber nicht nachlässig: Auch E-Mail C hat Betreff, Anrede und Gruß.</p>" },
      { art: "offen", id: "ton", m7: true, tag: "Vergleichen und begründen", titel: "Dieselbe Schreiberin, ein anderer Ton", fragen: [
        { q: "Vergleiche den Ton von E-Mail B und E-Mail C. Zitiere aus jeder E-Mail eine Stelle und erkläre, warum Sara an Frau Pichler anders schreibt als an Lotte.", m: "In E-Mail B schreibt Sara förmlich und höflich, zum Beispiel „Über eine Einladung zu einem Gespräch freue ich mich sehr“, weil sie Frau Pichler nicht kennt und einen guten Eindruck machen will. In E-Mail C klingt sie locker und persönlich („Total aufgeregt!“), denn Lotte ist ihre Cousine und versteht auch unvollständige Sätze.", k: ["förmlich|formell|höflich|sachlich|offiziell|distanziert|standardsprache", "locker|persönlich|vertraut|umgangssprach|lässig|privat|gefühl|wie sie spricht", "kennt|fremd|chefin|betrieb|eindruck|cousine|verwandt|familie|adressat|empfänger"], min: 3 }
      ], tipp: "Drei Schritte: den Ton von B benennen und belegen – den Ton von C benennen und belegen – den Grund nennen (Wer liest die E-Mail?)." }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Deine E-Mail an den Betrieb", teile: [
      { art: "text", html: "<p class=\"lead\">Zurück zu Elias: Nach dem Telefonat wartet Herr Lindhuber auf seinen Lebenslauf. Schreibe die E-Mail für Elias. Der Schreibtrainer gibt dir danach einen Hinweis.</p>" },
      { art: "schreiben", id: "mail", nur: "R", tag: "Schreibtrainer", titel: "E-Mail an Herrn Lindhuber", min: 45,
        auftrag: "<p><b>Die Lage:</b> Elias hat mit Herrn Lindhuber telefoniert. Jetzt schickt er ihm wie besprochen seinen Lebenslauf.</p><p><b>Schreibe diese E-Mail für Elias</b> (mindestens 45 Wörter). Verwende die Angaben von Elias – nicht deine eigenen:</p><ul><li>Absender: Elias Mayr, Klasse 8b, Mittelschule Tannbrück</li><li>Empfänger: Herr Lindhuber, Firma Lindhuber Heizung und Bad</li><li>Telefonat: heute</li><li>Kennenlernen: Mittwoch, 3. März, 15.30 Uhr</li><li>Praktikumswoche: 15. bis 19. März</li><li>Anhang: Lebenslauf</li></ul><p>Das gehört hinein:</p><ul><li>eine Zeile „Betreff: …“ mit dem Wort „Praktikum“</li><li>die Anrede</li><li>ein Satz zum Telefonat und ein Dank</li><li>der Termin zum Kennenlernen – zur Bestätigung</li><li>der Hinweis auf den Anhang</li><li>Gruß und Name</li></ul>",
        starter: ["Betreff: Praktikum – …", "Sehr geehrter Herr Lindhuber,", "vielen Dank für das freundliche Telefongespräch …", "Gern komme ich am …", "Im Anhang finden Sie …", "Mit freundlichen Grüßen"],
        kriterien: ["Der Betreff enthält das Wort „Praktikum“ und sagt, worum es geht.", "Anrede und Gruß passen zu einer E-Mail an einen Betrieb.", "Die E-Mail bezieht sich auf das Telefonat und bestätigt den Termin.", "Sie weist auf den Lebenslauf im Anhang hin.", "Die Sprache ist höflich: „Sie“, ganze Sätze, keine Chat-Wörter."] },
      { art: "schreiben", id: "mail", nur: "M", tag: "Schreibtrainer", titel: "E-Mail an Herrn Lindhuber – mit einer Bitte", min: 70,
        auftrag: "<p><b>Die Lage:</b> Elias hat mit Herrn Lindhuber telefoniert und soll ihm seinen Lebenslauf schicken. Am Abend fällt ihm ein: Am Mittwoch, dem 3. März, hat er nachmittags einen Termin beim Kieferorthopäden, auf den er drei Monate gewartet hat. Zum vereinbarten Kennenlernen kann er nicht kommen.</p><p><b>Verfasse diese E-Mail für Elias</b> (mindestens 70 Wörter). Verwende die Angaben von Elias – nicht deine eigenen:</p><ul><li>Absender: Elias Mayr, Klasse 8b, Mittelschule Tannbrück</li><li>Empfänger: Herr Lindhuber, Firma Lindhuber Heizung und Bad</li><li>Telefonat: heute</li><li>Vereinbart: Mittwoch, 3. März, 15.30 Uhr</li><li>Elias könnte stattdessen: Donnerstag, 4. März, oder Montag, 8. März, jeweils ab 14 Uhr</li><li>Praktikumswoche: 15. bis 19. März</li><li>Anhang: Lebenslauf</li></ul><ul><li>Formuliere einen aussagekräftigen Betreff mit dem Wort „Praktikum“.</li><li>Nimm Bezug auf das Telefonat und bedanke dich.</li><li>Bitte höflich darum, den Termin zu verlegen: Nenne den Grund in einem Satz, entschuldige dich und schlage die beiden anderen Termine vor.</li><li>Weise auf den Lebenslauf im Anhang hin.</li><li>Achte auf den Ton: Du bittest um etwas – Herr Lindhuber soll trotzdem merken, dass Elias der Platz wichtig ist.</li></ul>",
        starter: ["Betreff: Praktikum – …", "Sehr geehrter Herr Lindhuber,", "vielen Dank für das freundliche Telefongespräch …", "Leider habe ich übersehen, dass …", "Wäre es möglich, dass …", "Im Anhang finden Sie …"],
        kriterien: ["Der Betreff ist aussagekräftig und enthält das Wort „Praktikum“.", "Die E-Mail nimmt Bezug auf das Telefonat und dankt dafür.", "Die Bitte um einen neuen Termin ist höflich, begründet und nennt zwei Vorschläge.", "Der Lebenslauf im Anhang wird erwähnt.", "Der Ton passt: „Sie“, ganze Sätze, keine Chat-Wörter – und das Interesse am Platz wird deutlich."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Vor einem Anruf im Betrieb notierst du dir dein Anliegen und deine Fragen.", true],
        ["Am Telefon nennst du zuerst deinen Namen und dann dein Anliegen.", true],
        ["Einen Termin wiederholst du, damit kein Missverständnis entsteht.", true],
        ["Eine E-Mail an einen Betrieb braucht keinen Betreff.", false],
        ["„LG“ ist ein passender Gruß am Ende einer E-Mail an eine Chefin.", false],
        ["Schickst du eine Datei mit, weist du im Text der E-Mail darauf hin.", true],
        ["Im Chat und in einer E-Mail an einen Betrieb schreibt man gleich.", false]
      ] }
    ] }
  ],
  weiter: { href: "beruf_04.html", titel: "Modul 4: Vom Praktikum berichten", text: "Der Platz ist gefunden – und dann? Im nächsten Modul hältst du fest, was du im Praktikum erlebt und gelernt hast: sachlich, geordnet und mit den richtigen Fachwörtern." }
});
