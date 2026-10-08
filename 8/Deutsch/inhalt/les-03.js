/* Deutsch 8 · Lesen, Sachtexte und Medien · Modul 3: Tabellen, Diagramme, Infografiken
   (diskontinuierliche Texte: Werte ablesen, Anzahl und Anteil unterscheiden, Klassen vergleichen, Durchschnitt verstehen,
   Aussagen prüfen – stimmt / stimmt nicht / lässt sich nicht ablesen –, einen Zeitungsartikel an den Zahlen prüfen,
   ein Schaubild in Worte fassen, Infografik auswerten, Formular ausfüllen; M8: Zusammentreffen ist keine Ursache)
   LehrplanPLUS D8 2.1 (kontinuierliche und diskontinuierliche Texte erschließen, Textaussagen belegen), 2.3 (lebensrelevante
   und berufsbezogene Informationen aus diskontinuierlichen Texten; M8: Inhalt, Form und Intention kritisch beurteilen),
   3.1 (Formulare ausfüllen, auch digital), 3.2 (diskontinuierliche Texte zusammenfassen).
   Alle Zahlen stammen aus einer ERFUNDENEN Umfrage an einer ERFUNDENEN Schule (Mittelschule Sonnbach); auch der Schnuppertag
   im „Bildungszentrum Sonnbach“ ist erfunden. Diagramm: 28 + 20 + 16 + 8 + 4 + 4 = 80. Tabelle: 20 + 18 + 20 + 22 = 80 Befragte,
   12 + 9 + 8 + 11 = 40 im Verein. Der 12.11.2026 ist ein Donnerstag.
   Texte: Artikel der Schülerzeitung mit absichtlichen Fehlern (texte/lesen/freizeit-artikel-r.js und -m.js),
   R8 18 Zeilen · M8 26 Zeilen. Diagramm und Tabelle stehen in Station 3 absichtlich noch einmal (zum Vergleichen). */
D7Kit.seite({
  id: "les-03",
  titel: "Tabellen, Diagramme, Infografiken",
  einleitung: "Wer hat recht – der Artikel oder die Zahlen? Heute liest du ein Diagramm, eine Tabelle und eine Infografik so genau, dass du Behauptungen daran überprüfen kannst. Zum Schluss meldest du jemanden mit einem Formular zum Schnuppertag an.",
  zeit: "etwa 45 Minuten",
  ziele: ["📊 Ich lese Werte aus Diagramm und Tabelle ab und vergleiche sie – auch als Anteile.", "🔍 Ich prüfe, ob Aussagen zu den Zahlen passen.", "✍️ Ich fasse ein Schaubild in eigenen Sätzen zusammen.", "🧾 Ich fülle ein Formular vollständig und genau aus."],
  quiz: { profi: "Zahlen-Profi" },
  glossar: {
    diskont: ["diskontinuierlicher Text", "Ein „Text“, der nicht aus fortlaufenden Sätzen besteht: Tabelle, Diagramm, Infografik, Formular, Fahrplan."],
    diagramm: ["Balkendiagramm", "Ein Schaubild, das Zahlen als Balken zeigt. Je länger der Balken, desto größer der Wert."],
    legende: ["Anmerkung", "Die kleine Erklärung unter einem Schaubild: Wer wurde befragt? Wie viele? Was bedeuten Abkürzungen und Einheiten?"],
    anteil: ["Anteil", "Der Teil eines Ganzen, als Bruch oder in Prozent: 20 von 80 sind ein Viertel, also 25 %."],
    mehrheit: ["Mehrheit", "Mehr als die Hälfte. Der häufigste Wert ist nicht automatisch die Mehrheit."],
    tabelle: ["Tabelle", "Informationen in Zeilen (waagrecht) und Spalten (senkrecht). Der gesuchte Wert steht dort, wo sich Zeile und Spalte kreuzen."],
    durchschnitt: ["Durchschnitt", "Ein Mittelwert: Alle Einzelwerte werden zusammengezählt und durch ihre Anzahl geteilt. Einzelne können stark davon abweichen."],
    infografik: ["Infografik", "Eine Darstellung, die kurze Texte, Zahlen und Bilder verbindet, damit man das Wichtigste auf einen Blick erfasst."],
    formular: ["Formular", "Ein Vordruck mit Feldern für bestimmte Angaben – auf Papier oder am Bildschirm."],
    pflichtfeld: ["Pflichtfeld", "Ein Feld, das ausgefüllt werden muss. In digitalen Formularen ist es oft mit einem Sternchen (*) markiert."]
  },
  stationen: [
    { kurz: "Diagramm", ober: "Ausprobieren", titel: "Ein Diagramm lesen und beschreiben", teile: [
      { art: "text", html: "<p class=\"lead\">Die Schülerzeitung der Mittelschule Sonnbach wollte wissen: Womit verbringen die Achtklässler ihre Freizeit? 80 Jugendliche haben geantwortet. Das Ergebnis steht in einem <button class=\"term\" data-t=\"diagramm\">Balkendiagramm</button>.</p><p>Diagramme, Tabellen, Infografiken und Formulare nennt man <button class=\"term\" data-t=\"diskont\">diskontinuierliche Texte</button>: Du liest sie nicht Satz für Satz, sondern springst – zum Titel, zur <button class=\"term\" data-t=\"legende\">Anmerkung</button>, zu den Werten. Stell dem Diagramm drei Fragen: <strong>Was wurde gefragt? Wer und wie viele haben geantwortet? Was fällt auf?</strong></p>" },
      { art: "material", tag: "Diagramm", daten: { typ: "diagramm", titel: "Womit verbringst du die meiste Freizeit? – 8. Klassen der Mittelschule Sonnbach", einheit: "Schülerinnen und Schülern (80 Befragte, nur eine Antwort möglich)", werte: [["Handy, Konsole, Streaming", 28], ["Sport", 20], ["Freunde treffen", 16], ["Musik und Kreatives", 8], ["Lesen", 4], ["Sonstiges", 4]], hinweis: "Erfundene Umfrage an einer erfundenen Schule – zum Üben." } },
      { art: "mc", id: "dia", tag: "Ablesen und vergleichen", fragen: [
        { q: "Was genau wurde in der Umfrage gefragt?", o: ["womit die Befragten die meiste Freizeit verbringen", "wie viele Stunden Freizeit die Befragten haben", "was die Befragten in der Freizeit gern tun würden", "welche Hobbys an der Schule angeboten werden"], a: 0, e: "Das steht im Titel. Jede und jeder durfte nur eine Antwort geben – deshalb ergeben alle Balken zusammen genau 80." },
        { q: "Welcher Anteil der Befragten nennt Sport?", o: ["ein Viertel", "ein Fünftel", "die Hälfte", "20 Prozent"], a: 0, e: "20 von 80 sind ein Viertel, also 25 %. Vorsicht: Die Zahl am Balken ist eine Anzahl, kein Prozentwert." },
        { q: "Welche Aussage passt zum Diagramm?", o: ["Sport und Freunde zusammen werden häufiger genannt als Bildschirmmedien.", "Mehr als die Hälfte der Befragten nennt die Bildschirmmedien.", "Lesen wird häufiger genannt als Musik und Kreatives.", "Sport wird doppelt so oft genannt wie Freunde treffen."], a: 0, e: "20 + 16 = 36, das ist mehr als 28. Für „mehr als die Hälfte“ müssten es über 40 Nennungen sein." }
      ] },
      { art: "merke", kopf: "MERKE: Anzahl ist nicht Anteil", html: "<ul><li>Lies zuerst Titel und Anmerkung: Wer wurde gefragt? Wie viele? Eine Antwort oder mehrere?</li><li><strong>Anzahl:</strong> 28 Befragte. <strong><button class=\"term\" data-t=\"anteil\">Anteil</button>:</strong> 28 von 80 – das ist gut ein Drittel (35 %).</li><li>Der längste Balken bedeutet „am häufigsten“. Eine <button class=\"term\" data-t=\"mehrheit\">Mehrheit</button> ist erst mehr als die Hälfte.</li></ul>" },
      { art: "luecke", id: "satz", tag: "In Worte fassen", titel: "Vom Diagramm zum Text", lead: "So fasst man ein Diagramm in Worte: Thema – Befragte – Auffälliges. Setze die passenden Angaben ein.", absaetze: [
        ["Das Balkendiagramm zeigt, womit die Achtklässler der Mittelschule Sonnbach die meiste Freizeit verbringen. Befragt wurden ", { g: "80" }, " Jugendliche."],
        ["Am häufigsten nennen sie Handy, Konsole und Streaming, nämlich ", { g: "28" }, "-mal. Das ist gut ein ", { g: "Drittel" }, " der Befragten."],
        ["An zweiter Stelle steht der Sport: Ihn nennt genau ein ", { g: "Viertel" }, "."],
        ["Am seltensten werden Lesen und Sonstiges genannt, jeweils nur ", { g: "viermal" }, "."]
      ], extra: ["Fünftel", "40"] }
    ] },
    { kurz: "Tabelle", ober: "Ausprobieren", titel: "Eine Tabelle auswerten", teile: [
      { art: "text", html: "<p class=\"lead\">Die Redaktion hat die Antworten auch nach Klassen ausgewertet – und noch mehr gefragt: Wer ist in einem Verein? Wie lange läuft an einem Schultag der Bildschirm? Wie viel Sport kommt in einer Woche zusammen?</p><p>So liest du eine <button class=\"term\" data-t=\"tabelle\">Tabelle</button>: erst die Kopfzeile (Was steht in den Spalten?), dann die Anmerkung darunter (Was bedeuten die Abkürzungen?), dann die Zeile, die dich interessiert. Zwei Spalten nennen hier einen <button class=\"term\" data-t=\"durchschnitt\">Durchschnitt</button>.</p>" },
      { art: "material", tag: "Tabelle", daten: { typ: "tabelle", titel: "Freizeit der 8. Klassen – nach Klassen", kopf: ["Klasse", "Befragte", "im Verein", "Bildschirm", "Sport"],
        reihen: [["8a", "20", "12", "2,5", "4,0"], ["8b", "18", "9", "3,0", "3,0"], ["8c", "20", "8", "3,5", "2,5"], ["8M", "22", "11", "3,0", "3,5"]],
        hinweis: "im Verein = Zahl der Befragten, die in einem Verein aktiv sind · Bildschirm = durchschnittliche Bildschirmzeit an einem Schultag in Stunden · Sport = durchschnittliche Sportzeit in einer Woche in Stunden · Erfundene Umfrage an einer erfundenen Schule." } },
      { art: "mc", id: "tab", tag: "Genau hinsehen", fragen: [
        { q: "In welcher Klasse ist der Anteil der Vereinsmitglieder am höchsten?", o: ["in der 8a – 12 von 20", "in der 8M – 11 von 22", "in der 8b – 9 von 18", "in der 8c – 8 von 20"], a: 0, e: "12 von 20 sind 60 %. In der 8M und der 8b ist es jeweils genau die Hälfte, in der 8c sind es 40 %. Für einen fairen Vergleich brauchst du immer auch die Zahl der Befragten." },
        { q: "Die 8c kommt auf durchschnittlich 3,5 Stunden Bildschirmzeit. Was bedeutet das?", o: ["Manche sitzen länger davor, andere kürzer – im Mittel sind es 3,5 Stunden.", "Jede und jeder in der 8c sitzt täglich genau 3,5 Stunden davor.", "Niemand in der 8c sitzt länger als 3,5 Stunden am Bildschirm.", "Die ganze Klasse kommt zusammen auf 3,5 Stunden am Tag."], a: 0, e: "Ein Durchschnitt sagt nichts über Einzelne: In der 8c kann jemand eine Stunde am Bildschirm verbringen und jemand anderes sechs." },
        { q: "Wie viele der 80 Befragten sind insgesamt in einem Verein aktiv?", o: ["40 – genau die Hälfte", "30 – weniger als die Hälfte", "44 – mehr als die Hälfte", "50 – fast zwei Drittel"], a: 0, e: "12 + 9 + 8 + 11 = 40. Manche Informationen stehen nicht fertig in der Tabelle – man muss sie berechnen." }
      ] },
      { art: "sort", id: "prue", tag: "Aussagen prüfen", titel: "Stimmt das – oder lässt es sich gar nicht ablesen?", lead: "Prüfe jede Aussage an der Tabelle. Vorsicht: Manches klingt einleuchtend, steht aber nirgends.", buckets: ["stimmt", "stimmt nicht", "lässt sich nicht ablesen"], cols: 200, items: [
        { t: "Die 8a treibt im Durchschnitt am meisten Sport.", b: 0 },
        { t: "In der 8b und in der 8M ist jeweils die Hälfte im Verein.", b: 0 },
        { t: "Die 8c sitzt an Schultagen im Schnitt eine Stunde länger am Bildschirm als die 8a.", b: 0 },
        { t: "In der 8M wurden die wenigsten Jugendlichen befragt.", b: 1 },
        { t: "Die 8c treibt im Durchschnitt mehr Sport als die 8b.", b: 1 },
        { t: "In jeder Klasse ist mehr als die Hälfte im Verein.", b: 1 },
        { t: "Die 8c treibt wenig Sport, weil sie so viel am Bildschirm sitzt.", b: 2 },
        { t: "Die meisten Vereinsmitglieder spielen Fußball.", b: 2 },
        { t: "Am Wochenende ist die Bildschirmzeit höher als an Schultagen.", b: 2 }
      ] },
      { art: "offen", id: "zus", nur: "R", tag: "In Worte fassen", titel: "Zwei Sätze zur Tabelle", fragen: [
        { q: "Schreibe zwei Sätze zur Tabelle. Vergleiche in jedem Satz zwei Klassen und nenne die Zahlen.", m: "Die 8a treibt mit 4 Stunden pro Woche mehr Sport als die 8c mit 2,5 Stunden. In der 8a sind 12 Jugendliche im Verein, in der 8c nur 8.", k: ["8a|8b|8c|8m", "stunde|verein|befragte|bildschirm|sport", "mehr|weniger|länger|kürzer|nur|am meisten|am wenigsten|doppelt|gleich"] }
      ], tipp: "Nimm eine Spalte, zum Beispiel „Sport“, und vergleiche zwei Zeilen. Wörter wie „mehr als“, „weniger als“ oder „nur“ helfen.", hilfen: ["Wähle zuerst eine Spalte aus und suche den größten und den kleinsten Wert.", "So kannst du beginnen: Die 8a treibt mit … Stunden pro Woche mehr Sport als …", "Zweiter Satz: In der … sind … Jugendliche im Verein, in der … nur …"] },
      { art: "offen", id: "zus", nur: "M", tag: "In Worte fassen", titel: "Die Tabelle in drei Sätzen", fragen: [
        { q: "Fasse die Tabelle in drei Sätzen zusammen: Was zeigt sie? Vergleiche zwei Klassen mit Zahlen. Nenne eine Auffälligkeit.", m: "Die Tabelle zeigt für die vier 8. Klassen, wie viele Jugendliche im Verein sind und wie viel Zeit sie am Bildschirm und mit Sport verbringen. In der 8a sind 12 von 20 Befragten im Verein, in der 8c nur 8 von 20. Auffällig ist, dass die 8c die längste Bildschirmzeit und zugleich die kürzeste Sportzeit hat.", k: ["tabelle|zeigt|übersicht", "8a|8b|8c|8m", "auffällig|fällt auf|am meisten|am wenigsten|höchste|niedrigste|längste|kürzeste|besonders", "verein|bildschirm|sport"], min: 3 }
      ], tipp: "Ein Satz zum Thema, ein Vergleich mit Zahlen, ein Satz, der mit „Auffällig ist, dass …“ beginnt." },
      { art: "offen", id: "kaus", m7: true, tag: "Kritisch prüfen", titel: "Zusammentreffen ist keine Ursache", fragen: [
        { q: "Jemand folgert aus der Tabelle: „Die 8c treibt wenig Sport, weil sie so viel am Bildschirm sitzt.“ Erkläre, warum die Tabelle das nicht beweist.", m: "Die Tabelle zeigt nur, dass in der 8c viel Bildschirmzeit und wenig Sport zusammentreffen. Warum das so ist, steht nicht darin – der Grund könnte auch ein anderer sein, zum Beispiel ein langer Schulweg oder fehlende Sportangebote.", k: ["zeigt nur|nur|zusammen|gleichzeitig|durchschnitt|beides", "grund|ursache|warum|beweis|andere|steht nicht|nicht ablesen|zufall"] }
      ], tipp: "Was zeigt die Tabelle wirklich – und was denkt man sich nur dazu? Überlege dir einen anderen möglichen Grund." }
    ] },
    { kurz: "Faktencheck", ober: "Analysieren", titel: "Faktencheck: Stimmt, was im Artikel steht?", teile: [
      { art: "text", html: "<p class=\"lead\">In der Schülerzeitung erscheint ein Artikel über die Umfrage. Er klingt überzeugend – aber stimmt auch alles? Prüfe ihn Satz für Satz an den Zahlen. Diagramm und Tabelle stehen hier noch einmal, damit du nicht zurückblättern musst.</p>" },
      { art: "material", tag: "Diagramm", daten: { typ: "diagramm", titel: "Womit verbringst du die meiste Freizeit? – 8. Klassen der Mittelschule Sonnbach", einheit: "Schülerinnen und Schülern (80 Befragte, nur eine Antwort möglich)", werte: [["Handy, Konsole, Streaming", 28], ["Sport", 20], ["Freunde treffen", 16], ["Musik und Kreatives", 8], ["Lesen", 4], ["Sonstiges", 4]], hinweis: "Erfundene Umfrage an einer erfundenen Schule – zum Üben." } },
      { art: "material", tag: "Tabelle", daten: { typ: "tabelle", titel: "Freizeit der 8. Klassen – nach Klassen", kopf: ["Klasse", "Befragte", "im Verein", "Bildschirm", "Sport"],
        reihen: [["8a", "20", "12", "2,5", "4,0"], ["8b", "18", "9", "3,0", "3,0"], ["8c", "20", "8", "3,5", "2,5"], ["8M", "22", "11", "3,0", "3,5"]],
        hinweis: "Bildschirm = durchschnittliche Stunden an einem Schultag · Sport = durchschnittliche Stunden in einer Woche · Erfundene Umfrage." } },
      { art: "beleg", id: "check", nur: "R", tag: "Fehler finden", titel: "Drei Fehler und eine Meinung", lesetext: "les-freizeit-r", fragen: [
        { q: "Der Artikel gibt den Anteil der Bildschirm-Fans falsch an. In welcher Zeile?", zeilen: [7, 7], e: "28 von 80 sind gut ein Drittel – für „mehr als die Hälfte“ müssten es über 40 sein.", tipp: "Vergleiche die Zahl 28 mit der Zahl der Befragten. Welcher Satz danach stimmt nicht?" },
        { q: "Bei einer Freizeitbeschäftigung nennt der Artikel eine falsche Zahl. Wo?", zeilen: [9, 10], e: "Im Diagramm steht bei Musik und Kreatives eine 8, nicht zwölf.", tipp: "Vergleiche jede Zahl im zweiten Abschnitt mit dem passenden Balken." },
        { q: "Bei der Bildschirmzeit nennt der Artikel die falsche Klasse. Wo?", zeilen: [15, 16], e: "Dreieinhalb Stunden hat laut Tabelle die 8c, nicht die 8b.", tipp: "Sieh in der Tabelle in der Spalte „Bildschirm“ nach: Welche Klasse hat 3,5?" },
        { q: "Wo steht keine Zahl aus der Umfrage, sondern eine Meinung der Redaktion?", zeilen: [17, 18], e: "„Die Redaktion meint“ – hier wird gewertet, nicht berichtet. Eine Meinung lässt sich nicht am Diagramm nachprüfen.", tipp: "Achte auf ein Verb, das eine Meinung ankündigt." }
      ], hilfen: ["Lies den Artikel Satz für Satz und hake jede Zahl am Diagramm oder an der Tabelle ab.", "Die Fehler stecken im zweiten und im dritten Abschnitt."] },
      { art: "beleg", id: "check", nur: "M", tag: "Schwächen finden", titel: "Vier Stellen, die nicht halten", lesetext: "les-freizeit-m", fragen: [
        { q: "Wo behauptet der Artikel eine Mehrheit, die es nach dem Diagramm nicht gibt?", zeilen: [8, 10], e: "28 von 80 sind gut ein Drittel. Der häufigste Wert ist noch keine Mehrheit.", tipp: "Mehrheit heißt: mehr als die Hälfte. Rechne nach." },
        { q: "Wo zieht der Artikel aus einer kleinen Zahl einen Schluss, den die Umfrage nicht hergibt?", zeilen: [14, 15], e: "Gefragt war nur, womit man die meiste Zeit verbringt. Wer Sport nennt, kann trotzdem lesen.", tipp: "Achte auf das Wort „offenbar“ – es kündigt eine Vermutung an." },
        { q: "Wo verwechselt der Artikel Anzahl und Anteil?", zeilen: [18, 19], e: "11 von 22 und 9 von 18 sind beides genau die Hälfte – der Anteil ist gleich.", tipp: "Suche die Stelle mit „elf“ und „neun“ und sieh in der Spalte „Befragte“ nach." },
        { q: "Wo nennt der Artikel eine Ursache, die sich aus der Tabelle nicht ablesen lässt?", zeilen: [22, 23], e: "Die Tabelle zeigt, dass beides zusammentrifft – nicht, dass das eine am anderen liegt.", tipp: "Suche einen Satz, der mit „Weil“ beginnt." }
      ] },
      { art: "offen", id: "ber", m7: true, tag: "Berichtigen", titel: "Mach es richtig", fragen: [
        { q: "Der Artikel behauptet, für mehr als die Hälfte der Befragten seien Bildschirmmedien das Wichtigste. Berichtige das in einem Satz mit den richtigen Zahlen.", m: "Bildschirmmedien werden zwar am häufigsten genannt, aber nur von 28 der 80 Befragten – das ist gut ein Drittel und damit keine Mehrheit.", k: ["28", "80|drittel|35|keine mehrheit|nicht die mehrheit|weniger als die hälfte|nicht die hälfte"] }
      ], tipp: "Nenne die Anzahl, die Zahl der Befragten und den Anteil: „… von … Befragten, das ist …“." }
    ] },
    { kurz: "Infografik", ober: "Verstehen", titel: "Infografik: Text, Zahl und Bild zusammen", teile: [
      { art: "karten", tag: "Infografik", titel: "Schnuppertag der Berufe im Bildungszentrum Sonnbach", lead: "Dieser Aushang hängt am Schwarzen Brett der achten Klassen (erfunden). Lies ihn wie ein Diagramm: erst die Überschrift, dann Feld für Feld.", karten: [
        { ic: "📅", titel: "12. November 2026", text: "Donnerstag – ein Vormittag in der Werkstatt statt im Klassenzimmer" },
        { ic: "⏰", titel: "8:30 bis 13:00 Uhr", text: "Treffpunkt: 8:00 Uhr am Bus vor der Schule" },
        { ic: "🛠️", titel: "6 Werkstätten", text: "Holz · Metall · Elektro · Küche · Pflege · Friseur" },
        { ic: "👥", titel: "12 Plätze je Werkstatt", text: "Deshalb auf dem Formular Erst- und Zweitwunsch angeben" },
        { ic: "✍️", titel: "Anmeldung bis 23. Oktober", text: "Formular vollständig ausgefüllt im Sekretariat abgeben" },
        { ic: "🍽️", titel: "Mittagessen inklusive", text: "mit Fleisch oder vegetarisch – bitte auswählen" }] },
      { art: "text", html: "<p>Eine <button class=\"term\" data-t=\"infografik\">Infografik</button> verbindet kurze Texte, Zahlen und Bilder. Sie zeigt das Wichtigste auf einen Blick – Einzelheiten und Begründungen fehlen. Manche Antwort bekommst du erst, wenn du zwei Felder miteinander verbindest.</p>" },
      { art: "mc", id: "inf", tag: "Felder verbinden", fragen: [
        { q: "Wie viele Jugendliche können am Schnuppertag höchstens teilnehmen?", o: ["72", "12", "18", "80"], a: 0, e: "6 Werkstätten mit je 12 Plätzen: 6 · 12 = 72. Die Infografik nennt die Gesamtzahl nicht – du musst zwei Angaben verbinden." },
        { q: "Alle 80 Achtklässler der Mittelschule Sonnbach wollen teilnehmen. Reichen die Plätze?", o: ["Nein, es fehlen acht Plätze.", "Ja, es bleiben acht Plätze frei.", "Ja, die Plätze reichen genau aus.", "Das lässt sich nicht berechnen."], a: 0, e: "80 − 72 = 8. Wer mitmachen will, gibt sein Formular also besser früh ab." },
        { q: "Welche Information steht NICHT in der Infografik?", o: ["was man in den Werkstätten genau herstellt", "bis wann man sich anmelden muss", "wo und wann man sich morgens trifft", "wie viele Plätze es je Werkstatt gibt"], a: 0, e: "Eine Infografik zeigt nur das Wichtigste. Für Einzelheiten braucht man einen Text – oder man fragt nach." }
      ] },
      { art: "paare", id: "form", tag: "Zuordnen", titel: "Welche Darstellung kann was am besten?", lead: "Balken, Kreis, Linie, Tabelle, Infografik: Jede Darstellung hat ihre Stärke. Ordne zu.", paare: [
        ["Anteile an einem Ganzen zeigen (zusammen 100 %)", "Kreisdiagramm"],
        ["eine Entwicklung über mehrere Jahre zeigen", "Liniendiagramm"],
        ["wenige Werte auf einen Blick vergleichen", "Balkendiagramm"],
        ["viele genaue Einzelwerte zum Nachschlagen ordnen", "Tabelle"],
        ["Termin, Ort und Zahlen mit Bildern verbinden", "Infografik"]],
        hilfen: ["Ein Kreis ist ein Ganzes – seine Stücke sind die Anteile.", "Eine Linie zeigt, wie etwas über die Zeit steigt oder fällt."] }
    ] },
    { kurz: "Formular", ober: "Selbst antworten", titel: "Ein Formular ausfüllen", teile: [
      { art: "text", html: "<p class=\"lead\">Der Aushang hat gewirkt: Jetzt muss das Anmeldeformular ausgefüllt werden – vollständig, sonst wird es nicht angenommen.</p><p>Ein <button class=\"term\" data-t=\"formular\">Formular</button> ist auch ein diskontinuierlicher Text. Vier Regeln helfen, auf Papier und am Bildschirm:</p><ol class=\"schritte-liste\"><li><strong>Erst alles lesen</strong> und die Unterlagen bereitlegen: Welche Angaben werden verlangt?</li><li><strong>Genau übertragen:</strong> Namen buchstabengetreu, das Datum im verlangten Muster (TT.MM.JJJJ heißt zum Beispiel 03.09.2026).</li><li><strong>Nichts auslassen:</strong> <button class=\"term\" data-t=\"pflichtfeld\">Pflichtfelder</button> müssen ausgefüllt sein, bei Auswahlfeldern gilt genau eine Möglichkeit.</li><li><strong>Vor dem Abgeben prüfen:</strong> Stimmt jede Angabe mit den Unterlagen überein?</li></ol>" },
      { art: "formular", id: "anm", nur: "R", tag: "Formular", titel: "Mira meldet sich zum Schnuppertag an",
        karte: "<p><strong>Mira Demir</strong> geht in die Klasse 8b der Mittelschule Sonnbach. Sie ist am 9. Mai 2012 geboren und wohnt in der Gartenstraße 14 in 98765 Sonnbach.</p><p>Am liebsten möchte Mira in die Holzwerkstatt. Falls dort kein Platz mehr frei ist, nimmt sie die Küche. Mira isst kein Fleisch.</p><p>Das Datum des Schnuppertags steht in der Infografik in Station 4.</p>",
        kopf: "Anmeldung zum Schnuppertag der Berufe",
        felder: [
          { label: "Familienname", loesung: ["Demir"] }, { label: "Vorname", loesung: ["Mira"] },
          { label: "Geburtsdatum (TT.MM.JJJJ)", loesung: ["09.05.2012"], platz: "TT.MM.JJJJ" },
          { label: "Straße und Hausnummer", loesung: ["Gartenstraße 14", "Gartenstr. 14"] },
          { label: "Postleitzahl und Ort", loesung: ["98765 Sonnbach"] },
          { label: "Schule", loesung: ["Mittelschule Sonnbach", "MS Sonnbach"] },
          { label: "Klasse", loesung: ["8b", "8 b"] },
          { label: "Datum des Schnuppertags (TT.MM.JJJJ)", loesung: ["12.11.2026"], platz: "TT.MM.JJJJ" },
          { label: "Erstwunsch", loesung: ["Holz"], wahl: ["Elektro", "Friseur", "Holz", "Küche", "Metall", "Pflege"] },
          { label: "Zweitwunsch", loesung: ["Küche"], wahl: ["Elektro", "Friseur", "Holz", "Küche", "Metall", "Pflege"] },
          { label: "Mittagessen", loesung: ["vegetarisch"], wahl: ["mit Fleisch", "vegetarisch"] }],
        hilfen: ["Familienname ist der Nachname. Er steht im Formular vor dem Vornamen.", "Beim Datum bekommen Tag und Monat immer zwei Ziffern: Der 9. Mai wird zu 09.05.", "Das Jahr des Schnuppertags steht in der Infografik im ersten Feld."] },
      { art: "formular", id: "anm", nur: "M", tag: "Formular", titel: "Jonas meldet sich zum Schnuppertag an",
        karte: "<p>Jonas schreibt seinem Trainer: <em>„Am 12. November kann ich nicht ins Training, da ist der Schnuppertag im Bildungszentrum. Ich hoffe auf die Metallwerkstatt. Elektro wäre auch in Ordnung – aber nur, wenn Metall schon voll ist.“</em></p><p>Auf seinem Schülerausweis steht: <strong>Weidner, Jonas</strong> · geboren am 3. Februar 2013 · Mittelschule Sonnbach · Klasse 8M.</p><p>Seit dem Umzug im Sommer wohnt Jonas nicht mehr in der Bachgasse 3, sondern im Lerchenweg 27 in 98765 Sonnbach. Er verträgt keine Nüsse, isst aber sonst alles – auch Fleisch.</p><p>Was hier fehlt, findest du in der Infografik in Station 4.</p>",
        kopf: "Anmeldung zum Schnuppertag der Berufe",
        felder: [
          { label: "Familienname", loesung: ["Weidner"] }, { label: "Vorname", loesung: ["Jonas"] },
          { label: "Geburtsdatum (TT.MM.JJJJ)", loesung: ["03.02.2013"], platz: "TT.MM.JJJJ" },
          { label: "Alter am Tag des Schnuppertags", loesung: ["13", "13 Jahre"] },
          { label: "Straße und Hausnummer", loesung: ["Lerchenweg 27"] },
          { label: "Postleitzahl und Ort", loesung: ["98765 Sonnbach"] },
          { label: "Schule", loesung: ["Mittelschule Sonnbach", "MS Sonnbach"] },
          { label: "Klasse", loesung: ["8M", "8 M"] },
          { label: "Datum des Schnuppertags (TT.MM.JJJJ)", loesung: ["12.11.2026"], platz: "TT.MM.JJJJ" },
          { label: "Erstwunsch", loesung: ["Metall"], wahl: ["Elektro", "Friseur", "Holz", "Küche", "Metall", "Pflege"] },
          { label: "Zweitwunsch", loesung: ["Elektro"], wahl: ["Elektro", "Friseur", "Holz", "Küche", "Metall", "Pflege"] },
          { label: "Mittagessen", loesung: ["mit Fleisch"], wahl: ["mit Fleisch", "vegetarisch"] },
          { label: "Allergien oder Unverträglichkeiten", loesung: ["Nüsse"], wahl: ["keine", "Gluten", "Milch", "Nüsse"] }] },
      { art: "mc", id: "fo", tag: "Formular-Wissen", fragen: [
        { q: "Warum fragt das Formular nach einem Erst- und einem Zweitwunsch?", o: ["Jede Werkstatt hat nur 12 Plätze – der Erstwunsch kann schon voll sein.", "Jede und jeder besucht am Schnuppertag zwei Werkstätten nacheinander.", "Der Zweitwunsch gilt für den Schnuppertag im nächsten Schuljahr.", "Das Formular wäre sonst zu kurz und sähe unvollständig aus."], a: 0, e: "Das steht in der Infografik: 12 Plätze je Werkstatt. Wer weiß, wozu ein Feld da ist, füllt es auch sinnvoll aus." },
        { q: "In einem Online-Formular steht hinter manchen Feldern ein Sternchen (*). Was bedeutet das?", o: ["Pflichtfeld: Ohne diese Angabe lässt sich das Formular nicht absenden.", "Freiwillig: Dieses Feld darf man jederzeit einfach leer lassen.", "Achtung: In dieses Feld gehört nur die Unterschrift der Eltern.", "Hinweis: Diese Angabe wird später im Internet veröffentlicht."], a: 0, e: "Das Sternchen markiert Pflichtfelder. Fehlt dort eine Angabe, meldet das Formular einen Fehler und wird nicht abgeschickt." }
      ] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Die Zahl am Balken eines Diagramms ist immer ein Prozentwert.", false],
        ["Der häufigste Wert ist nicht automatisch die Mehrheit.", true],
        ["Für einen fairen Vergleich zwischen Klassen braucht man auch die Zahl der Befragten.", true],
        ["Ein Durchschnittswert gilt genau so für jede einzelne Person.", false],
        ["Eine Tabelle zeigt, was zusammentrifft – aber nicht immer, warum.", true],
        ["In ein Formular trage ich jede Angabe genau im verlangten Muster ein.", true]
      ] }
    ] }
  ],
  weiter: { href: "les_04.html", titel: "Modul 4: Nachricht, Kommentar, Reportage", text: "Du hast heute einen Artikel an den Zahlen geprüft. Im nächsten Modul geht es um die Zeitung selbst: <strong>Was informiert, was wertet, was erzählt anschaulich?</strong>" }
});
