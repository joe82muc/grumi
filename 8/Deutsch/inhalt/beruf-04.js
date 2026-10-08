/* Deutsch 8 · Beruf, Kommunikation und Präsentation · Modul 4: Vom Praktikum berichten
   (Notizen eines Praktikumstags lesen und in die richtige Reihenfolge bringen; Aufbau eines Tagesberichts: Kopf, Tätigkeiten
   nacheinander, kurzer Eindruck; Präteritum; Fachwörter erklären; sachlich schreiben statt umgangssprachlich und wertend;
   ein Formular der Praktikumsmappe ausfüllen; eigener Tagesbericht; M8: ungeordnete Notizen selbst ordnen und zusätzlich
   Reflexion „Passt der Beruf zu mir?“ mit Begründung)
   LehrplanPLUS D8 3.2 (Berichte schreiben, Informationen sachlich und geordnet darstellen), 3.1 (Formulare ausfüllen, Schreibplan),
   4.1 (Zeitform Präteritum, Fachsprache und Standardsprache; sachlicher Ton), 2.3 (Informationen entnehmen).
   Texte: Notizen aus der Zahnarztpraxis (texte/beruf/notizen-zahnarzt-r.js und -m.js, Mittwoch), Beispiel-Tagesbericht
   (bericht-zahnarzt.js, Dienstag – also kein Muster für die Schreibaufgabe). Praxis, Ort, Personen sind erfunden;
   nur allgemeine Tätigkeiten (Empfang, Termine, Instrumente aufbereiten, Hygiene), keine medizinischen Einzelheiten.
   Datum: 15. bis 19. März 2027 (Mittwoch = 17. März). */
D7Kit.seite({
  id: "beruf-04",
  titel: "Vom Praktikum berichten",
  einleitung: "Nach dem Praktikum verlangt die Schule einen Bericht. Wie macht man aus Notizen einen Text, den andere gern lesen? Heute ordnest du die Notizen von Paul, untersuchst einen Tagesbericht, füllst ein Formular für die Praktikumsmappe aus und schreibst selbst einen Bericht.",
  zeit: "etwa 50 Minuten",
  ziele: ["📝 Ich mache aus Notizen einen Bericht in der richtigen Reihenfolge.", "🕰️ Ich schreibe Berichte im Präteritum.", "🦷 Ich verwende Fachwörter und erkläre sie.", "📋 Ich fülle ein Formular der Praktikumsmappe richtig aus."],
  haupttext: { R: "beruf-notizen-zahnarzt-r", M: "beruf-notizen-zahnarzt-m" },
  quiz: { profi: "Bericht-Profi" },
  glossar: {
    tagesbericht: ["Tagesbericht", "Ein Text, der festhält, was du an einem Tag im Praktikum getan hast – sachlich, in der richtigen Reihenfolge und in ganzen Sätzen."],
    praeteritum: ["Präteritum", "Die einfache Vergangenheit: ich kam, ich zog an, ich desinfizierte. Sie wird in Berichten benutzt."],
    fachwort: ["Fachwort", "Ein Wort, das in einem Beruf gebraucht wird, zum Beispiel „Sterilisator“. Wer es benutzt, sollte es erklären können."],
    sachlich: ["sachlich", "Nüchtern und genau: Du sagst, was geschah, ohne Übertreibung, Umgangssprache und Gefühlsausbrüche."],
    sterilisator: ["Sterilisator", "Ein Gerät, in dem Instrumente keimfrei gemacht werden."],
    hygieneplan: ["Hygieneplan", "Eine Liste mit Regeln für Sauberkeit in einer Praxis, zum Beispiel wie man Hände und Flächen desinfiziert."],
    reflexion: ["Reflexion", "Nachdenken über das, was man erlebt hat, und eine begründete Einschätzung daraus ableiten."]
  },
  stationen: [
    { kurz: "Notizen", ober: "Lesen", titel: "Pauls Notizen", teile: [
      { art: "text", html: "<p class=\"lead\">Paul macht ein Praktikum in einer Zahnarztpraxis. Am Mittwoch hat er sich Notizen gemacht. Daraus soll ein <button class=\"term\" data-t=\"tagesbericht\">Tagesbericht</button> für seine Praktikumsmappe werden. Lies zuerst die Notizen genau.</p>" },
      { art: "lesetext", lesetext: { R: "beruf-notizen-zahnarzt-r", M: "beruf-notizen-zahnarzt-m" } },
      { art: "beleg", id: "notiz", nur: "R", tag: "Textstellen finden", titel: "Was steht in den Notizen?", lesetext: "beruf-notizen-zahnarzt-r", fragen: [
        { q: "Was machte Paul am Empfang?", zeilen: [6, 7], e: "Er nahm das Telefon ab und trug Termine ein. Das sind zwei Tätigkeiten, die in den Bericht gehören.", tipp: "Suche die Uhrzeit 8.15 Uhr." },
        { q: "Welche Rückmeldung bekam Paul von Frau Roth?", zeilen: [14, 15], e: "Frau Roth lobte, dass Paul gut nachgefragt hatte.", tipp: "Suche das Gespräch am Nachmittag." },
        { q: "Wo erklärt Paul neue Wörter?", zeilen: [17, 19], e: "Am Ende der Notizen steht, was Sterilisator und Hygieneplan bedeuten.", tipp: "Suche die letzte Notiz." }
      ], hilfen: ["Jede Notiz beginnt mit einer Uhrzeit. Suche zuerst die passende Zeit."] },
      { art: "beleg", id: "notiz", nur: "M", tag: "Textstellen finden", titel: "Was steht in den Notizen?", lesetext: "beruf-notizen-zahnarzt-m", fragen: [
        { q: "Wie wurden die Instrumente aufbereitet? Wo stehen die Schritte?", zeilen: [19, 22], e: "Reinigen und desinfizieren, im Sterilisator keimfrei machen, verpacken – drei Schritte in fester Reihenfolge.", tipp: "Suche das Wort „aufbereitet“." },
        { q: "Welche Rückmeldung bekam Paul – und welchen Tipp?", zeilen: [7, 10], e: "Frau Roth lobte das Nachfragen und riet ihm, am Telefon langsamer zu sprechen. Beides ist für die Reflexion wichtig.", tipp: "Suche das Gespräch ganz zum Schluss." },
        { q: "Wo schreibt Paul, wie ihm der Tag gefallen hat?", zeilen: [26, 30], e: "Hier hält er seinen persönlichen Eindruck fest. Im Bericht wird daraus ein sachlicher Schlusssatz.", tipp: "Suche die Notiz, die mit „Mein Eindruck“ beginnt." }
      ] },
      { art: "mc", id: "notiz2", tag: "Notizen verstehen", fragen: [
        { q: "Was unterscheidet einen Bericht von Notizen?", o: ["Der Bericht besteht aus ganzen Sätzen in geordneter Reihenfolge.", "Der Bericht ist immer länger als zwei Seiten.", "Der Bericht enthält vor allem die Gefühle des Schreibenden."], a: 0, e: "Notizen dürfen aus Stichwörtern bestehen. Ein Bericht muss für andere verständlich sein: ganze Sätze, geordnet, sachlich." },
        { q: "Wozu dient ein Sterilisator?", o: ["Er macht Instrumente keimfrei.", "Er speichert die Termine der Patienten.", "Er misst die Temperatur im Wartezimmer."], a: 0, e: "In den Notizen steht es: ein Gerät, in dem Instrumente keimfrei werden. Das Wort ist ein Fachwort der Praxis." }
      ] }
    ] },
    { kurz: "Reihenfolge", ober: "Ordnen", titel: "Was geschah wann?", teile: [
      { art: "text", nur: "R", html: "<p class=\"lead\">In einem Bericht stehen die Tätigkeiten so, wie sie nacheinander geschahen. Bring Pauls Tag in die richtige Reihenfolge. Die Uhrzeiten in den Notizen helfen dir.</p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Pauls Notizen sind nicht der Reihe nach geschrieben. Bring seinen Tag in die richtige Reihenfolge. Achte auf Hinweise wie „als Erstes“, „nach der Mittagspause“ und „ganz zum Schluss“.</p>" },
      { art: "ordnen", id: "ordnung", nur: "R", tag: "Reihenfolge", titel: "Pauls Mittwoch", schritte: [
        "Ankunft, Praxiskleidung anziehen, Hände desinfizieren",
        "Teambesprechung zum Tagesablauf",
        "Am Empfang: Telefon und Termine",
        "Instrumente aufbereiten",
        "Mittagspause",
        "Wartezimmer aufräumen",
        "Behandlungszimmer vorbereiten",
        "Gespräch mit Frau Roth"
      ], hilfen: ["Beginne mit der frühesten Uhrzeit. Die Mittagspause teilt den Tag in zwei Hälften."] },
      { art: "ordnen", id: "ordnung", nur: "M", tag: "Reihenfolge", titel: "Pauls Mittwoch", schritte: [
        "Ankunft, Praxiskleidung anziehen, Hände desinfizieren",
        "Teambesprechung zum Tagesablauf",
        "Am Empfang: Telefon und Termine",
        "Instrumente aufbereiten",
        "Mittagspause",
        "Wartezimmer aufräumen",
        "Behandlungszimmer vorbereiten",
        "Gespräch mit Frau Roth"
      ] },
      { art: "mc", id: "folge", tag: "Zeitangaben", fragen: [
        { q: "Welche Wörter machen die Reihenfolge in einem Bericht deutlich?", o: ["zuerst, danach, anschließend, zum Schluss", "vielleicht, eventuell, wohl, möglicherweise", "deshalb, trotzdem, obwohl, sondern"], a: 0, e: "Zeitwörter wie „zuerst“ und „danach“ zeigen, was auf was folgt. Die anderen Wörter drücken Vermutung oder Gegensatz aus." }
      ] },
      { art: "merke", kopf: "MERKE: So ist ein Tagesbericht gebaut", html: "<ol><li><b>Kopf:</b> Datum, Name, Praktikumsbetrieb.</li><li><b>Hauptteil:</b> die Tätigkeiten <b>in der Reihenfolge</b>, wie sie geschahen – mit Uhrzeit oder Zeitwörtern (<i>zuerst, danach, anschließend, am Nachmittag, zum Schluss</i>).</li><li><b>Schluss:</b> ein sachlicher Satz zu dem, was dir aufgefallen ist oder was du gelernt hast.</li></ol><p>Geschrieben wird im <button class=\"term\" data-t=\"praeteritum\">Präteritum</button> (<i>ich kam, ich desinfizierte</i>), in ganzen Sätzen und <button class=\"term\" data-t=\"sachlich\">sachlich</button>.</p>" }
    ] },
    { kurz: "Bericht", ober: "Untersuchen", titel: "So sieht ein Tagesbericht aus", teile: [
      { art: "text", html: "<p class=\"lead\">Von einem anderen Tag in der Praxis hat Paul schon einen Bericht geschrieben: vom Dienstag. Lies ihn und achte auf Aufbau, Zeitform und Wortwahl.</p>" },
      { art: "lesetext", lesetext: "beruf-bericht-zahnarzt" },
      { art: "beleg", id: "bericht", tag: "Textstellen finden", titel: "Wo steht was?", lesetext: "beruf-bericht-zahnarzt", fragen: [
        { q: "Wo steht der Kopf des Berichts mit Datum, Betrieb und Namen?", zeilen: [1, 3], e: "Der Kopf sagt, wer wann wo gearbeitet hat – bevor der Bericht beginnt.", tipp: "Er steht ganz oben." },
        { q: "Was machte Paul um 10 Uhr?", zeilen: [12, 14], e: "Er begleitete Patienten zum Behandlungszimmer und begrüßte sie.", tipp: "Suche die Uhrzeit." },
        { q: "Wo steht der sachliche Schlusssatz?", zeilen: [18, 19], e: "Statt „Ich fand es mega beeindruckend“ steht dort: Mir fiel auf, dass alle sehr genau auf Sauberkeit achteten.", tipp: "Es ist der letzte Satz." }
      ], hilfen: ["Der Bericht hat drei Teile: Kopf, Tätigkeiten, Schluss."] },
      { art: "mc", id: "kopf", tag: "Aufbau und Zeitform", fragen: [
        { q: "Was gehört in den Kopf eines Tagesberichts?", o: ["Datum, Name und Praktikumsbetrieb", "der schönste Moment des Tages", "eine Note für den Betrieb"], a: 0, e: "Der Kopf nennt die wichtigsten Angaben, damit jeder den Bericht zuordnen kann." },
        { q: "In welcher Zeitform ist der Bericht geschrieben?", o: ["im Präteritum: „ich kam“, „ich zog an“", "im Präsens: „ich komme“, „ich ziehe an“", "im Futur: „ich werde kommen“"], a: 0, e: "Weil der Tag vorbei ist, steht der Bericht im Präteritum. Die Notizen im Präsens („Ich helfe am Empfang“) werden also umgeschrieben." }
      ] }
    ] },
    { kurz: "Sprache", ober: "Üben", titel: "Fachwörter, Sachlichkeit, Präteritum", teile: [
      { art: "paare", id: "fach", tag: "Paare finden", titel: "Fachwörter erklären", lead: "Wer ein <button class=\"term\" data-t=\"fachwort\">Fachwort</button> benutzt, sollte es erklären können. Finde zu jedem Wort die Erklärung.", paare: [
        ["Sterilisator", "Gerät, in dem Instrumente keimfrei werden"],
        ["Hygieneplan", "Regeln für Sauberkeit in der Praxis"],
        ["desinfizieren", "Keime auf Händen oder Flächen abtöten"],
        ["Behandlungszimmer", "Raum, in dem die Zahnärztin die Patienten behandelt"],
        ["Zahnmedizinische Fachangestellte", "Ausbildungsberuf in einer Zahnarztpraxis"]
      ] },
      { art: "sort", id: "sach", tag: "Sortieren", titel: "Sachlich oder nicht sachlich?", lead: "Entscheide, ob der Satz in einen Bericht passt.", buckets: ["sachlich", "nicht sachlich"], items: [
        { t: "Um 8 Uhr besprach das Team den Tagesablauf.", b: 0 },
        { t: "Ich trug die Termine in den Computer ein.", b: 0 },
        { t: "Frau Roth erklärte mir den Sterilisator.", b: 0 },
        { t: "Ich bereitete das Behandlungszimmer vor.", b: 0 },
        { t: "Der Vormittag war mega anstrengend und total nervig.", b: 1 },
        { t: "Die Instrumente waren echt eklig.", b: 1 },
        { t: "Frau Roth ist die netteste Chefin der Welt.", b: 1 },
        { t: "Im Wartezimmer herrschte das totale Chaos.", b: 1 }
      ] },
      { art: "markieren", id: "mark", tag: "Markieren", titel: "Was gehört nicht in einen Bericht?", satz: "Um 10 Uhr [[hab]] ich die Instrumente [[voll krass lange]] geschrubbt. Frau Roth ist [[echt der Hammer]].", finde: "die drei Stellen, die nicht in einen sachlichen Bericht passen", e: "Sachlich: „Um 10 Uhr reinigte ich die Instrumente. Frau Roth erklärte mir jeden Schritt.“" },
      { art: "luecke", id: "praet", tag: "Präteritum", titel: "Aus Notizen wird Bericht", lead: "Setze die Verben im Präteritum ein: ankommen, anziehen, desinfizieren, zeigen, helfen, einsortieren.", absaetze: [
        ["Ich ", { g: "kam" }, " um 7.45 Uhr an und ", { g: "zog" }, " die Praxiskleidung an."],
        ["Danach ", { g: "desinfizierte" }, " ich meine Hände."],
        ["Frau Roth ", { g: "zeigte" }, " mir die Instrumente, und ich ", { g: "half" }, " beim Bereitlegen."],
        ["Am Nachmittag ", { g: "sortierte" }, " ich Handschuhe in das Lager ein."]
      ], extra: ["komme", "gezeigt"] },
      { art: "mc", id: "satz", tag: "Der passende Satz", fragen: [
        { q: "Welcher Satz gehört in einen sachlichen Tagesbericht?", o: ["Um 14 Uhr bereitete ich ein Behandlungszimmer vor.", "Um 14 Uhr musste ich leider schon wieder putzen.", "Um 14 Uhr gammelte ich im Wartezimmer rum."], a: 0, e: "Der erste Satz nennt Zeit und Tätigkeit im Präteritum. Die anderen beiden werten oder benutzen Umgangssprache." }
      ] }
    ] },
    { kurz: "Mappe", ober: "Schreiben", titel: "Formular und eigener Bericht", teile: [
      { art: "text", html: "<p class=\"lead\">In die Praktikumsmappe gehört ein Formular zum Arbeitstag. Danach schreibst du Pauls Tagesbericht.</p>" },
      { art: "formular", id: "mappe", nur: "R", tag: "Formular", titel: "Paul füllt das Blatt für den Mittwoch aus",
        karte: "<p><strong>Paul Gruber</strong> besucht die Klasse 8a der Mittelschule Hirschbach. Er macht vom 15. bis 19. März 2027 ein Praktikum in der Zahnarztpraxis Dr. Kastner in Hirschbach und lernt dort den Beruf Zahnmedizinische Fachangestellte kennen.</p><p>Am Mittwoch, dem 17. März 2027, kam er um 7.45 Uhr in die Praxis. Sein Arbeitstag endete um 16.00 Uhr. Seine Betreuerin war Frau Roth.</p>",
        kopf: "Praktikumsmappe: Blatt zum Arbeitstag",
        felder: [
          { label: "Familienname", loesung: ["Gruber"] }, { label: "Vorname", loesung: ["Paul"] },
          { label: "Klasse", loesung: ["8a", "8 a"] },
          { label: "Schule", loesung: ["Mittelschule Hirschbach", "MS Hirschbach"] },
          { label: "Praktikumsbetrieb", loesung: ["Zahnarztpraxis Dr. Kastner", "Zahnarztpraxis Kastner", "Praxis Dr. Kastner"] },
          { label: "Ort des Betriebs", loesung: ["Hirschbach"] },
          { label: "Datum des Arbeitstags (TT.MM.JJJJ)", loesung: ["17.03.2027"], platz: "TT.MM.JJJJ" },
          { label: "Arbeitsbeginn (Uhr)", loesung: ["7.45", "7:45", "07:45", "7.45 Uhr", "7:45 Uhr", "07.45", "07.45 Uhr"] },
          { label: "Arbeitsende (Uhr)", loesung: ["16.00", "16:00", "16.00 Uhr", "16:00 Uhr", "16 Uhr", "16"] },
          { label: "Betreuerin", loesung: ["Frau Roth", "Roth"] },
          { label: "Beruf, den ich kennenlerne", loesung: ["Zahnmedizinische Fachangestellte"], wahl: ["Medizinische Fachangestellte", "Tiermedizinische Fachangestellte", "Zahnmedizinische Fachangestellte"] }],
        hilfen: ["Der Familienname steht im Formular vor dem Vornamen.", "Beim Datum bekommen Tag und Monat zwei Ziffern: der 17. März wird 17.03.2027."] },
      { art: "formular", id: "mappe", nur: "M", tag: "Formular", titel: "Paul füllt das Blatt für den Mittwoch aus",
        karte: "<p>Paul klebt diese Notiz in seine Mappe: <em>„Praktikum bei Dr. Kastner in Hirschbach, 15. bis 19. März 2027. Mittwoch, 17. März: Ankunft 7.45 Uhr, Feierabend um 16 Uhr. Mittagspause von 12 bis 12.45 Uhr. Betreuerin: Frau Roth.“</em></p><p>Er heißt Paul Gruber, geht in die Klasse 8a der Mittelschule Hirschbach und lernt den Beruf Zahnmedizinische Fachangestellte kennen.</p><p>Die Arbeitszeit rechnest du selbst aus: vom Arbeitsbeginn bis zum Arbeitsende, ohne die Pause.</p>",
        kopf: "Praktikumsmappe: Blatt zum Arbeitstag",
        felder: [
          { label: "Familienname", loesung: ["Gruber"] }, { label: "Vorname", loesung: ["Paul"] },
          { label: "Klasse", loesung: ["8a", "8 a"] },
          { label: "Praktikumsbetrieb", loesung: ["Zahnarztpraxis Dr. Kastner", "Zahnarztpraxis Kastner", "Praxis Dr. Kastner"] },
          { label: "Datum des Arbeitstags (TT.MM.JJJJ)", loesung: ["17.03.2027"], platz: "TT.MM.JJJJ" },
          { label: "Wochentag", loesung: ["Mittwoch"], wahl: ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"] },
          { label: "Arbeitsbeginn (Uhr)", loesung: ["7.45", "7:45", "07:45", "7.45 Uhr", "7:45 Uhr", "07.45", "07.45 Uhr"] },
          { label: "Arbeitsende (Uhr)", loesung: ["16.00", "16:00", "16.00 Uhr", "16:00 Uhr", "16 Uhr", "16"] },
          { label: "Pause (Minuten)", loesung: ["45", "45 Minuten", "45 min"] },
          { label: "Arbeitszeit ohne Pause (Stunden und Minuten)", loesung: ["7 Stunden 30 Minuten", "7 Std. 30 Min.", "7:30", "7.30", "7 h 30 min", "7 Stunden und 30 Minuten", "7,5 Stunden", "7,5"] },
          { label: "Betreuerin", loesung: ["Frau Roth", "Roth"] }],
        hilfen: ["Von 7.45 Uhr bis 16.00 Uhr sind es 8 Stunden und 15 Minuten.", "Ziehe die Pause von 45 Minuten ab."] },
      { art: "schreiben", id: "bericht-schreiben", nur: "R", tag: "Schreibtrainer", titel: "Tagesbericht für Mittwoch", min: 60,
        auftrag: "<p><b>Die Lage:</b> Paul schreibt für seine Praktikumsmappe den Tagesbericht über den Mittwoch. Schreibe diesen Bericht (mindestens 60 Wörter). Die Notizen findest du unter „📖 Text“.</p><ul><li>Schreibe einen Kopf mit Datum, Name und Praktikumsbetrieb.</li><li>Beschreibe die Tätigkeiten <b>in der richtigen Reihenfolge</b> – mit Zeitwörtern wie zuerst, danach, am Nachmittag.</li><li>Schreibe im <b>Präteritum</b> und in ganzen Sätzen.</li><li>Verwende mindestens zwei Fachwörter (zum Beispiel Sterilisator, Hygieneplan, desinfizieren).</li><li>Beende deinen Bericht mit einem sachlichen Schlusssatz.</li></ul>",
        starter: ["Tagesbericht Mittwoch, 17. März", "Ich kam um 7.45 Uhr in der Praxis an …", "Danach …", "Am Nachmittag …", "Zum Schluss …", "Mir fiel auf, dass …"],
        kriterien: ["Der Kopf nennt Datum, Namen und Betrieb.", "Die Tätigkeiten stehen in der richtigen Reihenfolge.", "Ich habe im Präteritum geschrieben.", "Ich habe mindestens zwei Fachwörter benutzt.", "Der Text ist sachlich; der Schluss nennt einen Eindruck ohne Übertreibung."] },
      { art: "schreiben", id: "bericht-schreiben", nur: "M", tag: "Schreibtrainer", titel: "Tagesbericht für Mittwoch", min: 90,
        auftrag: "<p><b>Die Lage:</b> Paul schreibt für seine Praktikumsmappe den Tagesbericht über den Mittwoch. Seine Notizen (unter „📖 Text“) sind nicht der Reihe nach. Verfasse den Bericht (mindestens 90 Wörter).</p><ul><li>Gib einen Kopf mit Datum, Name und Betrieb an.</li><li>Bringe die Tätigkeiten selbst in die richtige Reihenfolge und verbinde sie mit passenden Zeitwörtern.</li><li>Schreibe im Präteritum und sachlich – Wertungen und Umgangssprache aus den Notizen werden umformuliert.</li><li>Verwende Fachwörter und erkläre mindestens eines kurz in einem Nebensatz oder einer Klammer.</li><li>Schließe mit einem Satz, der Pauls Eindruck sachlich zusammenfasst.</li></ul>",
        starter: ["Tagesbericht Mittwoch, 17. März", "Als Erstes …", "Anschließend …", "Nach der Mittagspause …", "Zum Abschluss führte ich ein Gespräch mit …", "Besonders deutlich wurde mir, dass …"],
        kriterien: ["Der Kopf nennt Datum, Namen und Betrieb.", "Ich habe die Tätigkeiten selbst richtig geordnet und verknüpft.", "Ich habe konsequent im Präteritum geschrieben.", "Ich habe Fachwörter benutzt und mindestens eines erklärt.", "Ich habe sachlich formuliert; der Schluss fasst den Eindruck zusammen, ohne zu übertreiben."] },
      { art: "offen", id: "passt", nur: "M", m7: true, tag: "Reflexion", titel: "Passt der Beruf zu Paul?", fragen: [
        { q: "Paul notiert: „Der Empfang gefiel mir. … Ob ich den ganzen Tag am Schreibtisch sitzen möchte, weiß ich noch nicht.“ Beurteile nach seinen Notizen in drei bis vier Sätzen, ob der Beruf zu Paul passen könnte. Nenne einen Grund dafür, einen Grund dagegen und deine begründete Einschätzung.", m: "Eher ja: Paul arbeitet gern mit Menschen, denn der Empfang gefiel ihm. Dagegen spricht, dass er nicht weiß, ob er den ganzen Tag am Schreibtisch sitzen möchte. Insgesamt könnte der Beruf passen, weil er auch Instrumente vorbereitet und Räume herrichtet und der Tag deshalb abwechslungsreich ist.", k: ["empfang|menschen|kontakt|genau|organisation|abwechslung|gefiel", "schreibtisch|sitzen|dagegen|aber|jedoch|nicht", "weil|denn|insgesamt|eher|einschätzung|deshalb|darum|passt"], min: 3 }
      ], tipp: "Drei Schritte: ein Grund dafür – ein Grund dagegen – deine Einschätzung mit „weil“.", hilfen: ["Beginne so: „Der Beruf könnte zu Paul passen, weil …“"] },
      { art: "offen", id: "selbst", nur: "M", m7: true, tag: "Reflexion", titel: "Wie findest du es heraus?", fragen: [
        { q: "Nach einem Praktikumstag fragt man sich, ob der Beruf passt. Nenne zwei Fragen, die du dir nach so einem Tag stellen kannst, und erkläre bei einer, warum sie hilft.", m: "Ich frage mich: Hat mir die Arbeit Spaß gemacht? Und: War ich am Ende des Tages eher müde oder zufrieden? Die erste Frage hilft, weil man einen Beruf viele Jahre ausübt und Freude an den Tätigkeiten haben sollte.", k: ["spaß|freude|gefallen|gern|interesse", "tätigkeit|aufgabe|arbeit|zufrieden|müde|stärken|fähigkeit", "weil|denn|da |hilft"], min: 3 }
      ], tipp: "Überlege, woran du merkst, dass dir eine Arbeit liegt.", hilfen: ["Denke an Freude, Anstrengung und deine Stärken."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Tagesbericht steht im Präteritum.", true],
        ["In den Kopf gehören Datum, Name und Praktikumsbetrieb.", true],
        ["Die Tätigkeiten stehen in der Reihenfolge, in der sie geschahen.", true],
        ["Im Bericht schreibt man so, wie man mit Freunden spricht.", false],
        ["Wer ein Fachwort benutzt, sollte es erklären können.", true],
        ["Wertungen wie „war mega langweilig“ gehören in einen sachlichen Bericht.", false],
        ["Ein Formular füllt man vollständig aus – kein Feld bleibt leer.", true]
      ] }
    ] }
  ],
  weiter: { href: "beruf_05.html", titel: "Modul 5: Präsentieren und Rückmeldung geben", text: "Über das Praktikum berichtest du bald auch mündlich. Im nächsten Modul lernst du, einen Kurzvortrag zu planen – und anderen eine faire Rückmeldung zu geben." }
});
