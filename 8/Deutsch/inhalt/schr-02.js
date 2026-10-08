/* Deutsch 8 · Schreiben und Aufsätze · Modul 2: Zusammenfassen
   (Kernaussagen finden und von Beispielen trennen, Einleitungssatz aus Textsorte, Titel und Thema, eigene Worte, Präsens,
   sachlich und ohne Meinung; ein Schaubild in zwei Sätzen zusammenfassen; dann die eigene Zusammenfassung in der
   Schreibwerkstatt: Planen → Schreiben → Überarbeiten → Abgeben)
   LehrplanPLUS D8 3.2 (zusammenfassen: kontinuierliche und diskontinuierliche Texte), 2.1 (Texte erschließen, Textaussagen
   belegen; M8: Inhalt und Intention selbstständig erfassen), 3.3 (Texte überarbeiten).
   Texte: „Wie eine Wettervorhersage entsteht“ (texte/schreiben/wettervorhersage-r.js und -m.js) – eigener Sachtext,
   R8 7 Abschnitte, 57 Zeilen · M8 8 Abschnitte, 91 Zeilen. Das Schaubild (Wetter-Tagebuch der Klasse 8c) ist erfunden. */
D7Kit.seite({
  id: "schr-02",
  titel: "Zusammenfassen",
  einleitung: "Niemand will einen langen Text zweimal hören. Wer zusammenfasst, sagt nur das Wichtigste – kurz, sachlich und in eigenen Worten. Heute übst du das an einem Sachtext über die Wettervorhersage und an einem Schaubild. Am Ende schreibst du deine eigene Zusammenfassung.",
  zeit: "etwa 60 Minuten – gut für eine Doppelstunde",
  ziele: ["🎯 Ich finde die Kernaussagen eines Sachtextes und lasse Beispiele weg.", "🧱 Ich baue einen Einleitungssatz aus Textsorte, Titel und Thema.", "✂️ Ich formuliere knapp, sachlich, im Präsens und in eigenen Worten.", "📊 Ich fasse auch ein Schaubild in zwei Sätzen zusammen."],
  haupttext: { R: "schr-wetter-r", M: "schr-wetter-m" },
  quiz: { profi: "Kurz-und-knapp-Profi" },
  glossar: {
    zusammenfassung: ["Zusammenfassung", "Ein kurzer Text, der das Wichtigste eines längeren Textes sachlich und in eigenen Worten wiedergibt."],
    kernaussage: ["Kernaussage", "Das Wichtigste eines Abschnitts in einem Satz. Ohne sie versteht man den Text nicht mehr."],
    einleitungssatz: ["Einleitungssatz", "Der erste Satz der Zusammenfassung: Er nennt Textsorte, Titel und Thema – und Verfasser und Quelle, wenn sie angegeben sind."],
    eigene: ["in eigenen Worten", "Den Inhalt wiedergeben, ohne Sätze aus dem Text abzuschreiben: andere Wörter wählen, Sätze umbauen, verkürzen."],
    praesens: ["Präsens", "Die Gegenwartsform: Der Text erklärt … Die Stationen messen … In ihr steht jede Zusammenfassung."],
    sachlich: ["sachlich", "Nur das, was im Text steht – ohne eigene Meinung, ohne Gefühle, ohne Ausschmückung."],
    schaubild: ["Schaubild", "Eine Darstellung von Zahlen als Bild, zum Beispiel ein Balkendiagramm. Auch ein Schaubild hat eine Kernaussage."],
    rechenmodell: ["Rechenmodell", "Ein Computerprogramm, das die Lufthülle der Erde in viele kleine Teile zerlegt und berechnet, wie sich das Wetter dort verändert."],
    wahrscheinlichkeit: ["Regenwahrscheinlichkeit", "Sie gibt an, wie sicher mit Regen zu rechnen ist: Bei 70 Prozent regnet es in sieben von zehn Fällen mit einer solchen Wetterlage."],
    meteorologe: ["Meteorologin, Meteorologe", "Fachleute, die das Wetter erforschen und Vorhersagen erstellen."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen und verstehen", titel: "Erst verstehen, dann kürzen", teile: [
      { art: "text", html: "<p class=\"lead\">Finja war drei Tage krank. Am Montag fragt sie dich: „Was stand eigentlich in dem Text über die Wettervorhersage?“ Du hast zwei Minuten bis zum Gong. Vorlesen geht nicht – du brauchst eine <button class=\"term\" data-t=\"zusammenfassung\">Zusammenfassung</button>.</p><p>Zusammenfassen kann aber nur, wer den Text verstanden hat. Lies ihn deshalb zuerst genau.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lead: "Lies den Text ganz. Drei Fachwörter kannst du hier schon antippen: <button class=\"term\" data-t=\"rechenmodell\">Rechenmodell</button>, <button class=\"term\" data-t=\"wahrscheinlichkeit\">Regenwahrscheinlichkeit</button>, <button class=\"term\" data-t=\"meteorologe\">Meteorologin und Meteorologe</button>.", lesetext: { R: "schr-wetter-r", M: "schr-wetter-m" } },
      { art: "mc", id: "erst", tag: "Verstanden?", fragen: [
        { q: "Was ist das Thema des Sachtextes „Wie eine Wettervorhersage entsteht“?", o: ["der Weg von den Messungen über die Berechnung bis zur fertigen Vorhersage", "die Geschichte der Wetterbeobachtung von früher bis heute", "die Folgen des Klimawandels für das Wetter in Europa", "Tipps, wie man das Wetter ohne Geräte selbst vorhersagt"], a: 0, e: "Der Text folgt der Vorhersage Schritt für Schritt: messen, rechnen, prüfen. Von Klimawandel oder Geschichte ist nicht die Rede." },
        { q: "Was will der Sachtext „Wie eine Wettervorhersage entsteht“ vor allem?", o: ["sachlich erklären, wie eine Vorhersage zustande kommt", "davor warnen, sich auf Vorhersagen zu verlassen", "für den Beruf der Meteorologin werben", "mit einer Geschichte über das Wetter unterhalten"], a: 0, e: "Der Text informiert und erklärt. Er nennt zwar Grenzen der Vorhersage, warnt aber nicht vor ihr – und er wirbt für nichts." },
        { q: "Warum wird eine Wettervorhersage unsicherer, je weiter sie in die Zukunft reicht?", o: ["Kleine Ungenauigkeiten am Anfang wachsen beim Weiterrechnen.", "Die Großrechner werden nach einigen Tagen langsamer.", "Für spätere Tage steigen keine Wetterballons mehr auf.", "Die Fachleute prüfen nur die ersten beiden Tage."], a: 0, e: "Niemand kennt den Zustand der Lufthülle ganz genau. Was am Anfang ein kleiner Fehler ist, wird mit jedem Rechenschritt größer." }
      ] },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Text?", lesetext: "schr-wetter-r", fragen: [
        { q: "In welchen Zeilen steht, was die Geräte der Wetterstationen messen?", zeilen: [7, 9], e: "Temperatur, Luftdruck, Luftfeuchtigkeit, Wind und Niederschlag.", tipp: "Suche im zweiten Abschnitt die Aufzählung der Messwerte." },
        { q: "Wo erklärt der Text, wie das Rechenmodell die Lufthülle aufteilt?", zeilen: [25, 26], e: "Der Computer teilt die Lufthülle in ein Gitter aus Millionen von Kästchen.", tipp: "Suche das Wort „Gitter“." },
        { q: "Wo steht, was beim Rechnen mit kleinen Fehlern geschieht?", zeilen: [36, 37], e: "Sie werden mit jedem Rechenschritt größer – deshalb sind spätere Tage unsicherer.", tipp: "Suche im fünften Abschnitt das Wort „Fehler“." },
        { q: "Wo erklärt der Text, was „70 Prozent“ Regenwahrscheinlichkeit bedeutet?", zeilen: [46, 47], e: "Bei zehn Tagen mit einer solchen Wetterlage regnet es an etwa sieben.", tipp: "Suche die Zahl 70 und lies den Satz bis zum Punkt." }
      ], hilfen: ["Überlege zuerst, in welchem Abschnitt die Antwort stehen muss: Messen – Rechnen – Grenzen – Wahrscheinlichkeit.", "Tippe nur die Zeilen an, in denen die Antwort wirklich steht – nicht den ganzen Abschnitt."] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Text?", lesetext: "schr-wetter-m", fragen: [
        { q: "Wo begründet der Text, warum weltweit gemessen werden muss und nicht nur im eigenen Land?", zeilen: [16, 18], e: "Wetter kennt keine Grenzen: Ein Tief über dem Atlantik kann zwei Tage später Mitteleuropa erreichen.", tipp: "Suche im zweiten Abschnitt das Wort „weil“." },
        { q: "Wo steht, warum die Wetterballons überall zur selben Zeit aufsteigen?", zeilen: [22, 23], e: "Nur gleichzeitig gemessene Werte lassen sich miteinander vergleichen.", tipp: "Achte auf das Wort „damit“." },
        { q: "Wo nennt der Text etwas, das ein Rechenmodell nur ungefähr erfassen kann?", zeilen: [52, 54], e: "Was kleiner ist als eine Gitterzelle – etwa ein einzelnes Gewitter –, erfasst das Modell nur näherungsweise.", tipp: "Suche am Ende des Abschnitts über die Rechenmodelle." },
        { q: "Wo stellt der Text klar, was die Angabe „70 Prozent“ NICHT bedeutet?", zeilen: [76, 78], e: "Weder regnet es 70 Prozent des Tages, noch werden 70 Prozent der Fläche nass.", tipp: "Achte auf „weder … noch“." }
      ] }
    ] },
    { kurz: "Kern", ober: "Analysieren", titel: "Kernaussagen finden – Beispiele weglassen", teile: [
      { art: "text", html: "<p class=\"lead\">Der Text ist lang, deine Zusammenfassung soll kurz sein. Also musst du auswählen. Was bleibt, ist die <button class=\"term\" data-t=\"kernaussage\">Kernaussage</button> jedes Abschnitts. Beispiele, Aufzählungen und die meisten Zahlen fallen weg.</p><p>Mach die Probe: Könnte Finja den Text auch ohne diesen Satz verstehen? Dann ist es eine Einzelheit.</p>" },
      { art: "sort", id: "kern", tag: "Sortieren", titel: "Kernaussage oder Einzelheit?", buckets: ["Kernaussage", "Einzelheit oder Beispiel"], cols: 240, items: [
        { t: "Weltweit messen Stationen ständig das Wetter.", b: 0 },
        { t: "Wetterballons und Satelliten liefern Daten aus der Höhe.", b: 0 },
        { t: "Großrechner berechnen mit einem Modell, wie sich das Wetter entwickelt.", b: 0 },
        { t: "Kleine Fehler am Anfang machen die Vorhersage für spätere Tage unsicher.", b: 0 },
        { t: "Fachleute prüfen die Ergebnisse und warnen vor Unwettern.", b: 0 },
        { t: "Der Wetterballon platzt in etwa 30 Kilometern Höhe.", b: 1 },
        { t: "Das Messgerät sinkt an einem Fallschirm zurück.", b: 1 },
        { t: "Auch Bojen im Meer liefern Messwerte.", b: 1 },
        { t: "In manchen Tälern hält sich oft Nebel.", b: 1 }
      ], hilfen: ["Eine Kernaussage gilt für den ganzen Abschnitt. Eine Einzelheit ist nur ein Teil davon – oft ein Beispiel oder eine Zahl.", "Frage dich: Würde ohne diesen Satz ein ganzer Schritt der Vorhersage fehlen?"] },
      { art: "ordnen", id: "faden", tag: "Reihenfolge", titel: "Dein Stichwortzettel", lead: "Eine Zusammenfassung folgt dem Aufbau des Textes. Bring die Stichpunkte in die Reihenfolge, in der der Text sie behandelt.", schritte: [
        "Messen am Boden: Stationen, Schiffe, Flugzeuge",
        "Messen in der Höhe: Wetterballons und Satelliten",
        "Rechnen: Großrechner mit einem Gitter-Modell",
        "Grenze: kleine Fehler am Anfang wachsen",
        "viele Rechnungen ergeben eine Wahrscheinlichkeit",
        "Fachleute prüfen, formulieren und warnen"
      ] },
      { art: "mc", id: "kern2", tag: "Kernaussagen prüfen", fragen: [
        { q: "Welcher Satz gibt die Kernaussage des Abschnitts über die Rechenmodelle am besten wieder?", o: ["Großrechner berechnen mit einem Gitter-Modell Schritt für Schritt, wie sich das Wetter entwickelt.", "Die Lufthülle der Erde besteht in Wirklichkeit aus vielen Millionen kleiner Kästchen.", "Computer sind heute so schnell, dass sie fast jede Aufgabe sofort lösen können.", "Je feiner das Gitter eines Modells ist, desto länger dauert die ganze Berechnung."], a: 0, e: "Nur dieser Satz fasst den ganzen Abschnitt zusammen. Die Rechenzeit ist eine Einzelheit, und die Lufthülle „besteht“ nicht aus Kästchen – das Modell teilt sie nur so ein." },
        { q: "Im Text über die Wettervorhersage steht ein Beispiel dafür, was „70 Prozent Regenwahrscheinlichkeit“ bedeutet. Wie gehst du in der Zusammenfassung damit um?", o: ["Ich nenne nur die Aussage: Die Vorhersage gibt an, wie wahrscheinlich Regen ist.", "Ich schreibe das Beispiel mit allen Zahlen wörtlich aus dem Text ab.", "Ich lasse den ganzen Abschnitt weg, weil er nur ein Beispiel enthält.", "Ich ersetze das Beispiel durch ein eigenes, das mir besser gefällt."], a: 0, e: "Das Beispiel veranschaulicht eine Aussage. In die Zusammenfassung gehört die Aussage – das Beispiel fällt weg, und eigene Beispiele erfindest du nicht." }
      ] }
    ] },
    { kurz: "Formulieren", ober: "Üben", titel: "Einleitungssatz, eigene Worte, Präsens", teile: [
      { art: "text", html: "<p class=\"lead\">Du weißt jetzt, <em>was</em> in die Zusammenfassung gehört. Jetzt geht es darum, <em>wie</em> du es sagst. Der erste Satz hat einen festen Bauplan.</p>" },
      { art: "beispiel", kopf: "Bauplan des Einleitungssatzes", html: "<p><strong>Textsorte + Titel + Thema</strong></p><p><em>Der Sachtext „Warum Zugvögel im Herbst fortziehen“ erklärt, weshalb viele Vogelarten den Winter im Süden verbringen.</em></p><p>Passende Verben: <em>informiert über … · erklärt, wie … · beschreibt, … · In dem Sachtext „…“ geht es um …</em><br>Sind Verfasser und Quelle angegeben, nennst du sie ebenfalls.</p>" },
      { art: "sort", id: "bau", tag: "Bauteile erkennen", titel: "Textsorte, Titel oder Thema?", lead: "Zwei <button class=\"term\" data-t=\"einleitungssatz\">Einleitungssätze</button> sind in ihre Teile zerfallen. Ordne die Teile zu.", buckets: ["Textsorte", "Titel", "Thema"], cols: 200, items: [
        { t: "Der Sachtext", b: 0 },
        { t: "In dem Zeitungsbericht", b: 0 },
        { t: "„Warum Zugvögel im Herbst fortziehen“", b: 1 },
        { t: "„Neue Brücke eröffnet“", b: 1 },
        { t: "weshalb viele Vogelarten den Winter im Süden verbringen", b: 2 },
        { t: "die Einweihung einer Fußgängerbrücke", b: 2 }
      ] },
      { art: "mc", id: "ein", tag: "Einleitungssatz prüfen", fragen: [
        { q: "Im Einleitungssatz nennst du das Thema möglichst genau. Welche Themenangabe passt am besten zum Sachtext „Wie eine Wettervorhersage entsteht“?", o: ["wie aus weltweiten Messungen und Berechnungen eine Vorhersage wird und warum sie unsicher bleibt", "das Wetter und alles, was man darüber unbedingt einmal gelesen und gehört haben sollte", "Wetterballons, die in großer Höhe platzen und danach an einem Fallschirm zur Erde sinken", "warum man sich auf eine Wettervorhersage grundsätzlich nie und nirgends verlassen kann"], a: 0, e: "„Das Wetter“ ist zu allgemein, die Wetterballons sind nur eine Einzelheit, und dass man sich nie auf Vorhersagen verlassen kann, steht nicht im Text." },
        { q: "Ein Einleitungssatz lautet: „Der Text ‚Wie eine Wettervorhersage entsteht‘ ist sehr interessant.“ Was ist daran falsch?", o: ["Er bewertet den Text, nennt aber weder Textsorte noch Thema.", "Er nennt den Titel, obwohl der Titel nicht in die Einleitung gehört.", "Er ist zu kurz – ein Einleitungssatz braucht mindestens drei Zeilen.", "Er steht im Präsens, obwohl die Einleitung im Präteritum steht."], a: 0, e: "„Sehr interessant“ ist eine Meinung. Stattdessen gehören Textsorte (Sachtext) und Thema in den Satz – der Titel ist richtig, und das Präsens auch." }
      ] },
      { art: "merke", kopf: "MERKE: So klingt eine Zusammenfassung", html: "<ul><li><strong><button class=\"term\" data-t=\"eigene\">Eigene Worte:</button></strong> Du schreibst keine Sätze ab. Wähle andere Wörter, baue die Sätze um, fasse mehrere Sätze zu einem zusammen.</li><li><strong><button class=\"term\" data-t=\"praesens\">Präsens:</button></strong> <em>Die Stationen messen …</em> – nicht: <em>Die Stationen maßen …</em></li><li><strong><button class=\"term\" data-t=\"sachlich\">Sachlich:</button></strong> keine eigene Meinung, keine Gefühle, keine Ausschmückung.</li><li><strong>Zusammenhänge zeigen:</strong> Wörter wie <em>weil, deshalb, dadurch</em> verbinden die Aussagen.</li></ul>" },
      { art: "sort", id: "spr", tag: "Sprache prüfen", titel: "Passt der Satz in die Zusammenfassung?", lead: "Drei Sätze passen. Bei den anderen stimmt etwas nicht – aber was?", buckets: ["passt", "eigene Meinung", "falsche Zeitform"], cols: 220, items: [
        { t: "Wetterballons messen in großer Höhe und funken ihre Werte zur Erde.", b: 0 },
        { t: "Großrechner berechnen, wie sich das Wetter entwickelt.", b: 0 },
        { t: "Fachleute prüfen die Ergebnisse und warnen vor Unwettern.", b: 0 },
        { t: "Ich finde es erstaunlich, wie viel Technik in einer Vorhersage steckt.", b: 1 },
        { t: "Die Arbeit der Wetterdienste ist bestimmt total spannend.", b: 1 },
        { t: "Satelliten beobachteten die Wolken aus dem All.", b: 2 },
        { t: "Die Wetterdienste ließen die Vorhersage viele Male berechnen.", b: 2 }
      ] },
      { art: "paare", id: "eigen", nur: "R", tag: "Eigene Worte", titel: "Welche Umschreibung gehört zu welcher Textstelle?", lead: "Links steht der Text, rechts dieselbe Aussage in eigenen Worten.", paare: [
        ["„Am Anfang stehen die Messungen.“", "Zuerst werden Wetterdaten gesammelt."],
        ["„Alle diese Daten laufen bei den Wetterdiensten zusammen.“", "Die Wetterdienste erhalten sämtliche Messwerte."],
        ["„Der Computer kennt den Anfang also nie ganz genau.“", "Die Ausgangslage ist nur ungefähr bekannt."],
        ["„Am Schluss prüfen Menschen, was der Computer errechnet hat.“", "Zuletzt kontrollieren Fachleute die Ergebnisse."],
        ["„Ganz sicher wird sie trotzdem nie sein.“", "Ein Rest an Unsicherheit bleibt immer."]
      ], hilfen: ["Achte auf Wörter mit ähnlicher Bedeutung: am Anfang – zuerst, am Schluss – zuletzt, prüfen – kontrollieren."] },
      { art: "paare", id: "eigen", nur: "M", tag: "Eigene Worte", titel: "Welche Umschreibung gehört zu welcher Textstelle?", lead: "Links steht der Text, rechts dieselbe Aussage in eigenen Worten.", paare: [
        ["„… weil Wetter keine Grenzen kennt“", "Das Wetter hier hängt auch von weit entfernten Gebieten ab."],
        ["„… kann das Modell nur näherungsweise erfassen“", "Sehr kleinräumige Vorgänge bildet die Berechnung nur ungenau ab."],
        ["„… können sich solche winzigen Abweichungen aufschaukeln“", "Geringe Ungenauigkeiten verstärken sich mit der Zeit."],
        ["„Die Wetterdienste machen aus dieser Schwäche eine Stärke.“", "Die Unsicherheit wird genutzt, um Wahrscheinlichkeiten anzugeben."],
        ["„Das letzte Wort hat nicht der Computer.“", "Am Ende entscheiden Fachleute über die Vorhersage."]
      ] },
      { art: "offen", id: "um", nur: "R", tag: "Selbst formulieren", titel: "Sag es mit deinen Worten", fragen: [
        { q: "Gib den Satz in eigenen Worten und im Präsens wieder – ohne abzuschreiben: „Sie lassen dieselbe Vorhersage viele Male berechnen, jedes Mal mit leicht veränderten Anfangswerten.“", m: "Die Wetterdienste rechnen die Vorhersage mehrmals durch und ändern dabei jedes Mal die Startwerte ein wenig.", k: ["mehrmals|mehrfach|wiederhol|immer wieder|mehrere|oft|häufig|vielfach", "änder|verschieden|ander|unterschiedlich|abgewandelt|abweich|variier"] }
      ], tipp: "Ersetze „viele Male“ und „Anfangswerte“ durch andere Wörter und stelle den Satz um.", hilfen: ["Für „viele Male“ kannst du sagen: mehrmals, wiederholt, immer wieder.", "Für „Anfangswerte“ kannst du sagen: Startwerte oder Ausgangsdaten.", "So kann dein Satz anfangen: Die Wetterdienste rechnen …"] },
      { art: "offen", id: "um", nur: "M", tag: "Selbst formulieren", titel: "Verdichten", fragen: [
        { q: "Verdichte diese Textstelle zu einem einzigen Satz in eigenen Worten: „Stimmen die Ergebnisse weitgehend überein, gilt die Vorhersage als sicher; laufen sie auseinander, ist Vorsicht geboten. Aus dem Anteil der Durchläufe, die ein Ereignis zeigen, lässt sich eine Wahrscheinlichkeit ableiten.“", m: "Je ähnlicher die Ergebnisse der vielen Rechnungen sind, desto sicherer ist die Vorhersage, und aus ihrem Anteil ergibt sich die Wahrscheinlichkeit für ein Ereignis.", k: ["ähnlich|übereinstimm|gleich|einig|unterscheid|abweich|auseinander", "sicher|zuverlässig|verlässlich", "wahrscheinlich"], min: 2 }
      ], tipp: "Suche den gemeinsamen Gedanken: Was verraten die vielen Rechnungen? Ein Satzbau mit „je … desto“ hilft beim Verdichten." }
    ] },
    { kurz: "Schaubild", ober: "Anwenden", titel: "Auch ein Schaubild hat eine Kernaussage", teile: [
      { art: "text", html: "<p class=\"lead\">Zusammenfassen kannst du nicht nur Texte. Die Klasse 8c wollte wissen, wie gut Vorhersagen wirklich sind. Vier Wochen lang hat sie an jedem Schultag verglichen: Was war angekündigt – Regen oder kein Regen? Und was ist eingetroffen? Das Ergebnis zeigt ihr <button class=\"term\" data-t=\"schaubild\">Schaubild</button>.</p>" },
      { art: "material", tag: "Schaubild", daten: { typ: "diagramm", titel: "Wie oft stimmte die Vorhersage? – Wetter-Tagebuch der Klasse 8c", einheit: "Schultagen (von 20), an denen die Vorhersage „Regen“ oder „kein Regen“ zutraf", werte: [["Vorhersage für den nächsten Tag", 18], ["Vorhersage 3 Tage im Voraus", 16], ["Vorhersage 7 Tage im Voraus", 12]], hinweis: "Erfundenes Klassenprojekt – zum Üben." } },
      { art: "mc", id: "dia", tag: "Schaubild lesen", fragen: [
        { q: "Wetter-Tagebuch der Klasse 8c: Die Vorhersage für den nächsten Tag stimmte an 18 von 20 Schultagen, die für drei Tage im Voraus an 16, die für sieben Tage im Voraus an 12. Was ist die Kernaussage?", o: ["Je weiter die Vorhersage in die Zukunft reicht, desto seltener trifft sie zu.", "Die Vorhersage für den nächsten Tag stimmte an 18 von 20 Schultagen.", "Wettervorhersagen sind ungenau, deshalb braucht man sie eigentlich nicht.", "An zwölf von zwanzig Schultagen hat es bei der Klasse 8c geregnet."], a: 0, e: "Die Kernaussage vergleicht alle drei Balken. Die 18 Tage sind nur ein einzelner Wert, und eine Wertung („braucht man nicht“) gibt das Schaubild nicht her." },
        { q: "Du fasst ein Schaubild in zwei Sätzen zusammen. Was gehört in den ersten Satz?", o: ["was das Schaubild zeigt: Art der Darstellung, Thema und Herkunft der Zahlen", "alle Zahlen des Schaubilds in der Reihenfolge von oben nach unten", "meine Meinung dazu, ob mich das Ergebnis überrascht hat", "eine Vermutung, warum die Zahlen so ausgefallen sind"], a: 0, e: "Der erste Satz ist der Einleitungssatz des Schaubilds. Die Kernaussage folgt im zweiten Satz – Meinungen und Vermutungen gehören nicht hinein." }
      ] },
      { art: "merke", kopf: "MERKE: Ein Schaubild in zwei Sätzen", html: "<ol><li><strong>Was zeigt es?</strong> Art der Darstellung, Thema, Herkunft der Zahlen: <em>Das Balkendiagramm zeigt, …</em></li><li><strong>Was ist die wichtigste Aussage?</strong> Ein Vergleich oder eine Entwicklung: <em>Je …, desto …</em> – höchstens ein oder zwei Zahlen als Beleg.</li></ol><p>Wie beim Text gilt: Präsens, sachlich, keine eigene Meinung.</p>" },
      { art: "offen", id: "dia2", tag: "Selbst formulieren", titel: "Zwei Sätze zum Schaubild", fragen: [
        { q: "Fasse das Schaubild der Klasse 8c in zwei Sätzen zusammen.", m: "Das Balkendiagramm zeigt, an wie vielen von 20 Schultagen die Vorhersage im Wetter-Tagebuch der Klasse 8c zutraf. Je weiter die Vorhersage in die Zukunft reicht, desto seltener stimmt sie: für den nächsten Tag an 18 Tagen, für sieben Tage im Voraus nur an 12.", k: ["diagramm|schaubild|balken", "vorhersage|prognose", "je weiter|je länger|je später|seltener|weniger|ungenauer|unsicherer|sinkt|nimmt ab|schlechter|abnimmt", "18|12|20|tage"], min: 3 }
      ], tipp: "Erster Satz: Was zeigt das Schaubild? Zweiter Satz: Was fällt beim Vergleich der drei Balken auf?", hilfen: ["So kann der erste Satz anfangen: Das Balkendiagramm zeigt, an wie vielen …", "So kann der zweite Satz anfangen: Je weiter die Vorhersage in die Zukunft reicht, desto …"] },
      { art: "offen", id: "dia3", m7: true, tag: "Text und Schaubild vergleichen", titel: "Passt das zusammen?", fragen: [
        { q: "Passt das Ergebnis der Klasse 8c zu dem, was der Sachtext über die Zuverlässigkeit von Vorhersagen sagt? Begründe in einem Satz mit dem Text.", m: "Ja, denn laut Text ist die Vorhersage für den nächsten Tag sehr verlässlich, während sie für den siebten Tag deutlich unsicherer wird.", k: ["ja|passt|bestätig|stimmt|deckt|entspricht", "siebt|sieben|später|morgen|nächsten tag|weiter|unsicher|verlässlich|zuverlässig"] }
      ], tipp: "Suche im Text die Stelle, an der die Vorhersage für morgen mit der für den siebten Tag verglichen wird." }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Deine Zusammenfassung", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt schreibst du die Zusammenfassung des ganzen Textes. In der Schreibwerkstatt arbeitest du in vier Schritten: <strong>Planen → Schreiben → Überarbeiten → Abgeben</strong>. Den Sachtext kannst du jederzeit als Material einblenden – abschreiben sollst du ihn nicht.</p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Schreibwerkstatt", titel: "Zusammenfassung: Wie eine Wettervorhersage entsteht", form: "zusammenfassung",
        auftrag: {
          R: "<p>Finja war krank und hat den Text nicht gelesen. Schreibe für sie eine <b>Zusammenfassung des Sachtextes „Wie eine Wettervorhersage entsteht“</b> (mindestens 80 Wörter, höchstens etwa 130).</p><ul><li>Beginne mit einem Einleitungssatz: Textsorte, Titel, Thema. Ein Verfasser ist nicht angegeben – du lässt ihn weg.</li><li>Gib aus jedem Abschnitt das Wichtigste wieder, in der Reihenfolge des Textes.</li><li>Schreibe in eigenen Worten, im Präsens und sachlich.</li><li>Lass Beispiele, Einzelheiten und deine eigene Meinung weg.</li></ul>",
          M: "<p>Deine Klasse sammelt für ein Wetter-Projekt kurze Überblickstexte. Verfasse eine <b>Zusammenfassung des Sachtextes „Wie eine Wettervorhersage entsteht“</b> (mindestens 110 Wörter, höchstens etwa 170).</p><ul><li>Nenne im Einleitungssatz Textsorte, Titel und Thema. Ein Verfasser ist nicht angegeben – du lässt ihn weg.</li><li>Gib die Kernaussagen aller Abschnitte in eigenen Worten wieder und mache die <b>Zusammenhänge</b> deutlich (weil, deshalb, dadurch, obwohl).</li><li>Verzichte auf Beispiele, Zahlen und wörtlich übernommene Sätze. Fachbegriffe wie „Rechenmodell“ darfst du verwenden.</li><li>Schreibe sachlich und im Präsens.</li><li>Schließe mit einem Satz zur Absicht des Textes: Was will er erreichen?</li></ul>"
        },
        material: { lesetext: { R: "schr-wetter-r", M: "schr-wetter-m" } },
        min: { R: 80, M: 110 },
        kriterien: {
          R: ["Der Einleitungssatz nennt Textsorte, Titel und Thema.", "Aus jedem Abschnitt steht das Wichtigste da – in der Reihenfolge des Textes.", "Ich schreibe in eigenen Worten und übernehme keine ganzen Sätze.", "Mein Text steht im Präsens.", "Mein Text ist sachlich: keine eigene Meinung, keine Beispiele."],
          M: ["Der Einleitungssatz nennt Textsorte, Titel und Thema.", "Die Kernaussagen aller Abschnitte sind in eigenen Worten wiedergegeben.", "Die Zusammenhänge sind sprachlich verknüpft (weil, deshalb, dadurch, obwohl).", "Beispiele, Zahlen und wörtliche Übernahmen fehlen; der Text steht im Präsens.", "Der Schlusssatz benennt sachlich die Absicht des Textes."]
        },
        starter: ["Der Sachtext „Wie eine Wettervorhersage entsteht“ …", "Zunächst …", "Außerdem …", "Anschließend …", "Allerdings …", "Deshalb …", "Zum Schluss …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Eine Zusammenfassung ist deutlich kürzer als der Text.", true],
        ["Der Einleitungssatz nennt Textsorte, Titel und Thema.", true],
        ["Besonders gelungene Sätze darf ich wörtlich aus dem Text abschreiben.", false],
        ["Eine Zusammenfassung steht im Präteritum, weil ich den Text schon gelesen habe.", false],
        ["Beispiele und die meisten Zahlen lasse ich weg.", true],
        ["Am Ende schreibe ich, wie mir der Text gefallen hat.", false],
        ["Auch ein Schaubild lässt sich zusammenfassen: Was zeigt es, und was ist die wichtigste Aussage?", true]
      ] }
    ] }
  ],
  weiter: { href: "schr_03.html", titel: "Modul 3: Informieren und berichten", text: "Zusammenfassen heißt: sachlich wiedergeben, was in einem Text steht. Im nächsten Modul gibst du sachlich wieder, was <strong>geschehen</strong> ist – du schreibst einen Bericht." }
});
