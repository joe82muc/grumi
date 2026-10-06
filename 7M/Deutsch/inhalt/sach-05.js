/* Deutsch 7 · Sachtexte und Informationen · Modul 5: Diagramme, Tabellen, Formulare
   (diskontinuierliche Texte auswerten, Aussagen dazu formulieren, Darstellung wählen, Formular ausfüllen)
   LehrplanPLUS D7 2.3 (Diagramme, Formulare; M7: Tabellen auswerten), 3.1 (Formulare des Alltags ausfüllen), 3.2 (einfache
   diskontinuierliche Texte). Alle Zahlen stammen aus einer erfundenen Umfrage an einer erfundenen Schule. */
D7Kit.seite({
  id: "sach-05",
  titel: "Diagramme, Tabellen, Formulare",
  einleitung: "Fahrplan, Stundenplan, Umfrage, Anmeldung: Viele Informationen stehen gar nicht in ganzen Sätzen. Heute liest du ein Diagramm und eine Tabelle wie ein Profi – und füllst ein Formular so aus, dass niemand nachfragen muss.",
  zeit: "etwa 40 Minuten",
  ziele: ["📊 Ich lese aus einem Diagramm Werte ab und vergleiche sie.", "📋 Ich finde in einer Tabelle die passende Zeile und Spalte.", "✍️ Ich formuliere Aussagen zu einem Diagramm in ganzen Sätzen.", "🧾 Ich fülle ein Formular vollständig und richtig aus."],
  quiz: { profi: "Daten-Profi" },
  glossar: {
    diagramm: ["Diagramm", "Ein Schaubild, das Zahlen zeigt – zum Beispiel als Balken. Man sieht auf einen Blick, was viel und was wenig ist."],
    tabelle: ["Tabelle", "Informationen, geordnet in Zeilen (waagrecht) und Spalten (senkrecht)."],
    spalte: ["Spalte", "Die senkrechten Fächer einer Tabelle. Über jeder Spalte steht, was darin eingetragen ist."],
    zeile: ["Zeile", "Die waagrechten Reihen einer Tabelle. Alles in einer Zeile gehört zusammen."],
    formular: ["Formular", "Ein Vordruck mit Feldern, in die man bestimmte Angaben einträgt – zum Beispiel eine Anmeldung."],
    umfrage: ["Umfrage", "Viele Menschen bekommen dieselbe Frage gestellt. Die Antworten werden gezählt."]
  },
  stationen: [
    { kurz: "Diagramm", ober: "Ausprobieren", titel: "Ein Diagramm lesen", teile: [
      { art: "text", html: "<p class=\"lead\">Die siebten Klassen der Auenschule haben eine <button class=\"term\" data-t=\"umfrage\">Umfrage</button> gemacht: Wie kommst du morgens zur Schule?</p><p>Das Ergebnis steht in einem <button class=\"term\" data-t=\"diagramm\">Diagramm</button>. Stelle ihm drei Fragen: <strong>Worum geht es?</strong> (Titel) · <strong>Wer oder was wurde gezählt?</strong> (Angabe darunter) · <strong>Was fällt auf?</strong> (längster und kürzester Balken)</p>" },
      { art: "material", tag: "Diagramm", daten: { typ: "diagramm", titel: "So kommen die Siebtklässler der Auenschule zur Schule", einheit: "Schülerinnen und Schülern (120 Befragte)", werte: [["Bus", 48], ["Fahrrad", 30], ["zu Fuß", 24], ["Auto der Eltern", 12], ["Roller oder anderes", 6]], hinweis: "Erfundene Umfrage zum Üben." } },
      { art: "mc", id: "dia", tag: "Ablesen und vergleichen", fragen: [
        { q: "Was zeigt das Diagramm?", o: ["wie die befragten Kinder zur Schule kommen", "wie lange der Schulweg dauert", "wie viele Busse zur Schule fahren", "wie viele Kinder die Auenschule hat"], a: 0, e: "Das steht im Titel. Das Diagramm sagt nichts über die Dauer und nichts über die ganze Schule – befragt wurden nur die siebten Klassen." },
        { q: "Welches Verkehrsmittel wird am häufigsten genutzt?", o: ["der Bus", "das Fahrrad", "das Auto der Eltern", "die eigenen Füße"], a: 0, e: "Der längste Balken gehört zum Bus: 48 Kinder." },
        { q: "Wie viele Kinder mehr fahren mit dem Bus als mit dem Fahrrad?", o: ["18", "30", "48", "78"], a: 0, e: "48 − 30 = 18. Zum Vergleichen muss man rechnen." },
        { q: "Welche Aussage stimmt NICHT?", o: ["Die Hälfte der Kinder kommt mit dem Bus.", "Doppelt so viele Kinder gehen zu Fuß, wie mit dem Auto gebracht werden.", "Mit Bus und Fahrrad zusammen kommen mehr als die Hälfte.", "Am wenigsten nutzen einen Roller oder etwas anderes."], a: 0, e: "Die Hälfte von 120 wären 60. Mit dem Bus kommen aber nur 48 – das ist weniger als die Hälfte." }] },
      { art: "offen", id: "aus", tag: "Selbst formulieren", fragen: [
        { q: "Schreibe zwei Aussagen zum Diagramm in ganzen Sätzen. Verwende in jedem Satz eine Zahl.", m: "Die meisten Kinder kommen mit dem Bus, nämlich 48. Nur 12 Kinder werden mit dem Auto gebracht.", k: ["bus|fahrrad|rad|fuß|auto|roller", "48|30|24|12|6|18|120"] }], tipp: "Nenne ein Verkehrsmittel und die Zahl dazu. Wörter wie „die meisten“, „mehr als“ oder „nur“ helfen.",
        hilfen: ["So kannst du beginnen: Die meisten Kinder …", "Zweiter Satz: Nur … Kinder …", "Lies die Zahl am Ende des Balkens ab und setze sie in deinen Satz."] }
    ] },
    { kurz: "Tabelle", ober: "Ausprobieren", titel: "Eine Tabelle lesen", teile: [
      { art: "text", html: "<p>Eine <button class=\"term\" data-t=\"tabelle\">Tabelle</button> ordnet Informationen in <button class=\"term\" data-t=\"zeile\">Zeilen</button> und <button class=\"term\" data-t=\"spalte\">Spalten</button>. So liest du sie: Erst die Spaltenköpfe ansehen – was steht hier? Dann die Zeile suchen, die dich interessiert, und mit dem Finger zur richtigen Spalte gehen.</p>" },
      { art: "material", tag: "Tabelle", daten: { typ: "tabelle", titel: "Arbeitsgemeinschaften der Auenschule im ersten Halbjahr", kopf: ["AG", "Tag", "Uhrzeit", "Raum", "Freie Plätze"],
        reihen: [["Schulgarten", "Montag", "13:30–15:00", "Garten", "4"], ["Schach", "Dienstag", "13:30–14:15", "Raum 104", "0"], ["Theater", "Mittwoch", "14:00–15:30", "Aula", "7"], ["Robotik", "Donnerstag", "13:30–15:00", "Werkraum", "2"], ["Chor", "Donnerstag", "14:00–14:45", "Musiksaal", "12"]], hinweis: "Erfundener Plan zum Üben." } },
      { art: "mc", id: "tab", tag: "Zeile und Spalte finden", fragen: [
        { q: "An welchem Tag findet die Theater-AG statt?", o: ["am Mittwoch", "am Montag", "am Dienstag", "am Donnerstag"], a: 0, e: "Zeile „Theater“, Spalte „Tag“." },
        { q: "In welcher AG ist kein Platz mehr frei?", o: ["Schach", "Robotik", "Schulgarten", "Chor"], a: 0, e: "Spalte „Freie Plätze“: Nur bei Schach steht eine 0." },
        { q: "Welche zwei AGs kann man NICHT beide besuchen?", o: ["Robotik und Chor", "Schulgarten und Theater", "Schach und Chor", "Theater und Robotik"], a: 0, e: "Beide sind am Donnerstag, und die Zeiten überschneiden sich: Robotik dauert bis 15:00 Uhr, der Chor beginnt um 14:00 Uhr." },
        { q: "Welche AG dauert am längsten?", o: ["Schulgarten, Theater und Robotik – jeweils 90 Minuten", "Schach", "Chor", "Alle dauern gleich lang."], a: 0, e: "Von 13:30 bis 15:00 Uhr und von 14:00 bis 15:30 Uhr sind es jeweils anderthalb Stunden." }] },
      { art: "tf", id: "tabtf", tag: "Stimmt das?", aussagen: [
        ["Die Schach-AG findet in Raum 104 statt.", true],
        ["Im Chor sind noch die meisten Plätze frei.", true],
        ["Am Freitag gibt es zwei AGs.", false],
        ["Die Robotik-AG trifft sich im Werkraum.", true],
        ["Die Theater-AG beginnt früher als die Schulgarten-AG.", false]] },
      { art: "offen", id: "lina", m7: true, tag: "Entscheiden und begründen", fragen: [
        { q: "Lina möchte zwei AGs besuchen. Dienstags hat sie Training. Schlage ihr zwei AGs vor und begründe deine Wahl mit der Tabelle.", m: "Lina kann den Schulgarten am Montag und das Theater am Mittwoch besuchen. Beide haben noch freie Plätze und finden an verschiedenen Tagen statt. Schach geht nicht, weil es am Dienstag ist und kein Platz mehr frei ist.", k: ["schulgarten|theater|robotik|chor", "montag|mittwoch|donnerstag|dienstag|frei|plätze|platz|überschneid"] }], tipp: "Prüfe drei Dinge: der Tag, die Uhrzeit, die freien Plätze." }
    ] },
    { kurz: "Darstellung", ober: "Verstehen", titel: "Text, Tabelle oder Diagramm?", teile: [
      { art: "merke", html: "<ul><li><strong>Diagramm:</strong> wenn man Zahlen auf einen Blick vergleichen will.</li><li><strong>Tabelle:</strong> wenn viele genaue Angaben geordnet nebeneinanderstehen sollen.</li><li><strong>Text:</strong> wenn etwas erklärt, begründet oder erzählt wird.</li></ul>" },
      { art: "sort", id: "form", tag: "Sortieren", titel: "Welche Darstellung passt am besten?", buckets: ["Diagramm", "Tabelle", "Text"], cols: 180, items: [
        { t: "Ergebnis der Klassensprecherwahl", b: 0 }, { t: "Temperaturen von Januar bis Dezember im Vergleich", b: 0 },
        { t: "Stundenplan", b: 1 }, { t: "Abfahrtszeiten der Buslinie", b: 1 },
        { t: "Bericht über den Wandertag", b: 2 }, { t: "Begründung, warum die Pause länger sein soll", b: 2 }] },
      { art: "mc", id: "krit", m7: true, tag: "Genau hinsehen", fragen: [
        { q: "In der Schülerzeitung steht zur Umfrage: „Fast alle Siebtklässler kommen mit dem Bus.“ Passt das zum Diagramm?", o: ["Nein. 48 von 120 sind weniger als die Hälfte – „fast alle“ ist übertrieben.", "Ja, denn der Bus hat den längsten Balken.", "Ja, denn 48 ist eine große Zahl.", "Das lässt sich mit dem Diagramm nicht prüfen."], a: 0, e: "Der längste Balken bedeutet nur „am häufigsten“ – nicht „fast alle“. Aussagen zu Zahlen kann man am Diagramm nachprüfen." },
        { q: "Was kann man aus dem Diagramm NICHT ablesen?", o: ["warum so wenige Kinder mit dem Auto gebracht werden", "wie viele Kinder mit dem Fahrrad kommen", "wie viele Kinder insgesamt befragt wurden", "welches Verkehrsmittel am seltensten genutzt wird"], a: 0, e: "Ein Diagramm zeigt, was gezählt wurde – Gründe stehen nicht darin." }] }
    ] },
    { kurz: "Formular", ober: "Selbst antworten", titel: "Ein Formular ausfüllen", teile: [
      { art: "text", html: "<p>Ein <button class=\"term\" data-t=\"formular\">Formular</button> hat für jede Angabe ein eigenes Feld. Drei Regeln:</p><ol class=\"schritte-liste\"><li><strong>Genau lesen</strong>, was in das Feld gehört – Familienname und Vorname stehen oft getrennt.</li><li><strong>Das Muster beachten:</strong> TT.MM.JJJJ heißt Tag, Monat, Jahr – zum Beispiel 03.09.2026.</li><li><strong>Nichts auslassen</strong> – und nichts eintragen, was eine andere Person ausfüllen muss (Unterschrift der Eltern).</li></ol>" },
      { art: "formular", id: "anm", tag: "Formular", titel: "Emil meldet sich für eine AG an",
        karte: "<p>Emil Brandner geht in die Klasse 7b. Er ist am 14. März 2014 geboren und wohnt in der Lindenstraße 8 in 12345 Auenried. Er möchte in die Robotik-AG.</p>",
        kopf: "Anmeldung zu einer Arbeitsgemeinschaft",
        felder: [
          { label: "Familienname", loesung: ["Brandner"] }, { label: "Vorname", loesung: ["Emil"] },
          { label: "Geburtsdatum (TT.MM.JJJJ)", loesung: ["14.03.2014"], platz: "TT.MM.JJJJ" },
          { label: "Straße und Hausnummer", loesung: ["Lindenstraße 8", "Lindenstr. 8"] },
          { label: "Postleitzahl", loesung: ["12345"] }, { label: "Wohnort", loesung: ["Auenried"] },
          { label: "Klasse", loesung: ["7b", "7 b"] },
          { label: "Gewünschte AG", loesung: ["Robotik"], wahl: ["Chor", "Robotik", "Schach", "Schulgarten", "Theater"] }] },
      { art: "mc", id: "fo", tag: "Formular-Wissen", fragen: [
        { q: "Unter Emils Anmeldung steht das Feld „Unterschrift eines Erziehungsberechtigten“. Was trägt Emil dort ein?", o: ["nichts – dort unterschreibt seine Mutter oder sein Vater", "seinen eigenen Namen", "den Namen seiner Lehrerin", "das Datum von heute"], a: 0, e: "Erziehungsberechtigte sind meist die Eltern. Dieses Feld füllt Emil nicht selbst aus." },
        { q: "In einem Formular steht „Geburtsdatum (TT.MM.JJJJ)“. Welche Eintragung ist richtig?", o: ["07.11.2013", "7. November 13", "2013-11-07", "11/07/13"], a: 0, e: "Zwei Ziffern für den Tag, zwei für den Monat, vier für das Jahr – mit Punkten dazwischen." },
        { q: "Schach ist in der Tabelle schon voll. Was sollte Emil tun, wenn er eigentlich Schach wählen wollte?", o: ["eine andere AG wählen oder im Sekretariat nach einer Warteliste fragen", "trotzdem Schach eintragen – irgendwie geht das schon", "das Feld leer lassen", "zwei AGs in ein Feld schreiben"], a: 0, e: "Ein Formular muss zu den Tatsachen passen. Bei Fragen hilft immer: nachfragen." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Ein ", { g: "Diagramm" }, " zeigt Zahlen als Bild. Der längste ", { g: "Balken" }, " steht für den größten Wert."],
        ["In einer Tabelle stehen die Angaben in Zeilen und ", { g: "Spalten" }, "."],
        ["In ein ", { g: "Formular" }, " trage ich jede Angabe in das passende ", { g: "Feld" }, " ein."]], extra: ["Absatz", "Satz"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Der Titel eines Diagramms sagt, worum es geht.", true],
        ["Der längste Balken bedeutet immer „mehr als die Hälfte“.", false],
        ["In einer Tabelle gehört alles in einer Zeile zusammen.", true],
        ["Aus einem Diagramm kann man auch Gründe ablesen.", false],
        ["Ein Formular füllt man vollständig aus.", true]] }
    ] }
  ],
  weiter: { href: "sach_06.html", titel: "Modul 6: Texte vergleichen", text: "Im letzten Modul dieses Bereichs vergleichst du zwei Texte zum selben Thema und hörst eine Radionachricht." }
});
