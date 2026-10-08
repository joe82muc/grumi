/* Deutsch 8 · Schreiben und Aufsätze · Modul 4: Die begründete Stellungnahme
   (Aufbau untersuchen, Argument aus Behauptung – Begründung – Beispiel, steigern und verknüpfen, M8: Einwand aufgreifen und
   entkräften, dann der eigene Aufsatz in der Schreibwerkstatt: Planen → Schreiben → Überarbeiten → Abgeben)
   LehrplanPLUS D8 3.2 (argumentierende Texte: Standpunkt begründen, Argumente gewichten und verknüpfen; M: Gegenargumente
   einbeziehen), 3.1 (Schreibplan), 3.3 (Texte überarbeiten), 2.1 (Aufbau eines Textes erschließen).
   Texte: „Zwei Wochen Praktikum? Ja, bitte!“ (texte/schreiben/stellungnahme-praktikum-r.js und -m.js) – erfunden. */
D7Kit.seite({
  id: "schr-04",
  titel: "Die begründete Stellungnahme",
  einleitung: "Wer mitreden will, braucht mehr als eine Meinung – er muss sie begründen können. Heute schaust du dir an, wie eine überzeugende Stellungnahme gebaut ist, und schreibst dann selbst eine: geplant, geschrieben, überarbeitet.",
  zeit: "etwa 60 Minuten – gut für eine Doppelstunde",
  ziele: ["🧱 Ich erkenne den Aufbau einer Stellungnahme.", "🔗 Ich baue ein Argument aus Behauptung, Begründung und Beispiel.", "📈 Ich ordne Argumente steigernd und verknüpfe sie.", "✍️ Ich plane, schreibe und überarbeite eine eigene Stellungnahme."],
  haupttext: { R: "schr-praktikum-r", M: "schr-praktikum-m" },
  quiz: { profi: "Stellung-Profi" },
  glossar: {
    stellungnahme: ["Stellungnahme", "Ein Text, in dem du zu einer Streitfrage deine Meinung sagst und sie mit Argumenten begründest."],
    streitfrage: ["Streitfrage", "Eine Frage, auf die man mit guten Gründen Ja oder Nein antworten kann."],
    these: ["These", "Dein Standpunkt in einem klaren Satz: Ich bin dafür / dagegen, dass …"],
    behauptung: ["Behauptung", "Der Kern eines Arguments: Du sagst, was aus deiner Sicht stimmt."],
    begruendung: ["Begründung", "Sie erklärt, warum die Behauptung stimmt – oft mit weil, denn oder da."],
    beispiel: ["Beispiel oder Beleg", "Ein Fall, eine Erfahrung oder eine Tatsache, die zeigt: Das Argument trifft zu."],
    steigern: ["steigern", "Die Argumente so ordnen, dass das überzeugendste am Schluss steht."],
    einwand: ["Einwand", "Ein Gegenargument der anderen Seite."],
    entkraeften: ["entkräften", "Zeigen, dass ein Einwand weniger schwer wiegt, als er klingt – sachlich und mit einem Grund."],
    appell: ["Appell", "Eine Aufforderung oder Bitte am Schluss: Was soll jetzt geschehen?"]
  },
  stationen: [
    { kurz: "Bauplan", ober: "Untersuchen", titel: "Wie ist eine Stellungnahme gebaut?", teile: [
      { art: "text", html: "<p class=\"lead\">An Samiras Schule wird gestritten: Soll das Betriebspraktikum zwei Wochen dauern statt einer? Samira hat für die Schülerzeitung eine <button class=\"term\" data-t=\"stellungnahme\">Stellungnahme</button> geschrieben. Lies sie einmal ganz – achte darauf, wie sie anfängt und wie sie aufhört.</p>" },
      { art: "lesetext", lesetext: { R: "schr-praktikum-r", M: "schr-praktikum-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Zu welcher Streitfrage nimmt Samira Stellung?", o: ["Soll das Praktikum zwei Wochen dauern statt einer?", "Soll es in der achten Klasse überhaupt ein Praktikum geben?", "Welcher Betrieb eignet sich am besten für ein Praktikum?"], a: 0, e: "Die Streitfrage steht gleich in der Einleitung: zwei Wochen statt einer." },
        { q: "Welche Meinung vertritt sie?", o: ["Sie ist für die Verlängerung.", "Sie ist gegen die Verlängerung.", "Sie kann sich nicht entscheiden."], a: 0, e: "Ihre Meinung steht am Ende der Einleitung und noch einmal im Schluss." },
        { q: "An wen richtet sich ihre Bitte am Schluss?", o: ["an die Schulleitung", "an die Betriebe", "an ihre Eltern"], a: 0, e: "Sie bittet die Schulleitung, den Vorschlag auszuprobieren. Eine Stellungnahme hat immer einen Adressaten." }
      ] },
      { art: "sort", id: "bau", tag: "Aufbau", titel: "Einleitung, Hauptteil oder Schluss?", lead: "Ordne zu, in welchen Teil der Stellungnahme der Satz gehört.", buckets: ["Einleitung", "Hauptteil", "Schluss"], items: [
        { t: "Die Streitfrage wird genannt.", b: 0 },
        { t: "Die eigene Meinung wird zum ersten Mal gesagt.", b: 0 },
        { t: "Ein Argument wird mit einem Beispiel gestützt.", b: 1 },
        { t: "Das stärkste Argument wird angekündigt: „Am wichtigsten ist …“", b: 1 },
        { t: "Die Meinung wird noch einmal zusammengefasst: „Deshalb bin ich dafür …“", b: 2 },
        { t: "Eine Bitte oder Aufforderung an den Adressaten.", b: 2 }
      ] },
      { art: "beleg", id: "stellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Text?", lesetext: "schr-praktikum-r", fragen: [
        { q: "In welchen Zeilen sagt Samira zum ersten Mal ihre Meinung?", zeilen: [4, 5], e: "Die Meinung steht am Ende der Einleitung.", tipp: "Suche den Satz mit „Meiner Meinung nach“." },
        { q: "Wo steht das Beispiel zum ersten Argument – Samiras eigene Erfahrung?", zeilen: [8, 9], e: "Mit „Bei mir war es genauso“ leitet sie das Beispiel ein.", tipp: "Suche die Stelle mit dem Brett." },
        { q: "Wo bittet Samira die Schulleitung um etwas?", zeilen: [26, 27], e: "Die Bitte (der Appell) steht ganz am Schluss.", tipp: "Lies den letzten Absatz vor dem Namen." }
      ], hilfen: ["Eine Stellungnahme hat drei Teile: Am Anfang steht die Meinung, am Ende die Bitte.", "Die Beispiele stehen immer direkt hinter dem Argument, zu dem sie gehören."] },
      { art: "beleg", id: "stellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Text?", lesetext: "schr-praktikum-m", fragen: [
        { q: "In welchen Zeilen steht Samiras These?", zeilen: [5, 6], e: "Die These schließt die Einleitung ab: Sie ist überzeugt, dass sich die Verlängerung lohnt.", tipp: "Die These steht am Ende des ersten Absatzes." },
        { q: "Wo nennt Samira den Einwand der Gegenseite?", zeilen: [31, 33], e: "„Gegner der Verlängerung wenden ein …“ – so führt sie das Gegenargument ein.", tipp: "Suche das Wort „Gegner“." },
        { q: "Wo entkräftet sie diesen Einwand?", zeilen: [34, 36], e: "Mit „Allerdings“ beginnt die Entkräftung: Der Stoff lässt sich nachholen.", tipp: "Achte auf das Signalwort „Allerdings“." },
        { q: "Wo steht ihr Appell an die Schulleitung?", zeilen: [40, 42], e: "Der Appell steht im Schluss – nach der Abwägung.", tipp: "Lies den letzten Absatz vor dem Namen." }
      ] }
    ] },
    { kurz: "Argument", ober: "Verstehen", titel: "Ein Argument hat drei Bausteine", teile: [
      { art: "merke", kopf: "MERKE: BBB", html: "<p>Ein Argument überzeugt, wenn es vollständig ist:</p><ol><li><b><button class=\"term\" data-t=\"behauptung\">Behauptung</button></b> – Was stimmt aus deiner Sicht?</li><li><b><button class=\"term\" data-t=\"begruendung\">Begründung</button></b> – Warum ist das so? (weil, denn, da)</li><li><b><button class=\"term\" data-t=\"beispiel\">Beispiel oder Beleg</button></b> – Woran sieht man das?</li></ol><p>Fehlt die Begründung, bleibt es eine bloße Behauptung. Fehlt das Beispiel, bleibt das Argument blass.</p>" },
      { art: "ordnen", id: "bbb", tag: "Ordnen", titel: "Bring das Argument in die richtige Reihenfolge", lead: "Streitfrage: Soll unsere Schule einen Schulgarten anlegen?", schritte: [
        "Ein Schulgarten macht den Unterricht anschaulicher.",
        "Denn dort sieht man mit eigenen Augen, wie Pflanzen wachsen.",
        "In Biologie könnte man zum Beispiel Bohnen säen und jede Woche messen.",
        "Deshalb lernt man im Garten mehr als nur aus dem Buch."
      ] },
      { art: "sort", id: "teile", tag: "Bausteine erkennen", titel: "Behauptung, Begründung oder Beispiel?", buckets: ["Behauptung", "Begründung", "Beispiel"], items: [
        { t: "Sport in der Pause tut allen gut.", b: 0 },
        { t: "… weil man sich danach wieder besser konzentrieren kann.", b: 1 },
        { t: "Seit wir in der Pause Tischtennis spielen, ist es in der fünften Stunde viel ruhiger.", b: 2 },
        { t: "Ein Schülercafé stärkt die Gemeinschaft.", b: 0 },
        { t: "… denn dort treffen sich Schüler aus verschiedenen Klassen.", b: 1 },
        { t: "An unserer Nachbarschule organisieren die Neuntklässler das Café selbst.", b: 2 }
      ] },
      { art: "mc", id: "stark", tag: "Stark oder schwach?", fragen: [
        { q: "Welches Argument überzeugt am meisten?", o: ["Ein Schulgarten spart Geld, weil das Gemüse in der Schulküche verwendet werden kann – letztes Jahr reichten die Tomaten für drei Wochen.", "Ein Schulgarten ist einfach schön.", "Ein Schulgarten ist gut, das finden alle."], a: 0, e: "Nur das erste Argument hat Behauptung, Begründung und Beispiel. „Einfach schön“ und „das finden alle“ begründen nichts." },
        { q: "Was fehlt hier? „Die Schule sollte später beginnen. Das wäre viel besser.“", o: ["Begründung und Beispiel", "die Behauptung", "nichts – das Argument ist vollständig"], a: 0, e: "„Das wäre viel besser“ wiederholt nur die Behauptung. Warum es besser wäre, steht nicht da." }
      ] },
      { art: "offen", id: "begr", tag: "Selbst formulieren", titel: "Ergänze die Begründung", fragen: [
        { q: "Schreibe den Satz zu Ende: „Eine längere Mittagspause ist sinnvoll, …“", m: "weil man dann in Ruhe essen kann und am Nachmittag wieder konzentrierter ist.", k: ["weil|denn|da ", "essen|erhol|konzentr|ruhe|ausruh|beweg"], min: 2 }
      ], tipp: "Beginne mit „weil“ und nenne einen Grund, der wirklich etwas erklärt.", hilfen: ["Frage dich: Was hat man von einer längeren Pause?"] }
    ] },
    { kurz: "Steigern", ober: "Üben", titel: "Steigern, verknüpfen, abrunden", teile: [
      { art: "text", html: "<p>Drei gute Argumente reichen – wenn sie in der richtigen Reihenfolge stehen. Am besten <button class=\"term\" data-t=\"steigern\">steigerst</button> du: Das überzeugendste Argument kommt zum Schluss, denn das Letzte bleibt im Kopf. Kleine Wörter zeigen dem Leser den Weg: <i>erstens, außerdem, hinzu kommt, am wichtigsten ist, deshalb</i>.</p>" },
      { art: "luecke", id: "verkn", tag: "Verknüpfen", titel: "Setze die passenden Wörter ein", absaetze: [
        ["Ich bin dafür, dass unsere Schule einen Schulgarten bekommt. ", { g: "Erstens" }, " macht er den Unterricht anschaulicher, ", { g: "weil" }, " man dort sieht, wie Pflanzen wachsen."],
        [{ g: "Außerdem" }, " lernt man im Garten, Verantwortung zu übernehmen. ", { g: "Zum Beispiel" }, " muss jemand in den Ferien gießen."],
        [{ g: "Am wichtigsten" }, " ist aber, dass der Garten ein Ort für alle wird. ", { g: "Deshalb" }, " sollte die Schule den Garten anlegen."]
      ], extra: ["Trotzdem", "Obwohl"] },
      { art: "mc", id: "rahmen", tag: "Anfang und Ende", fragen: [
        { q: "Welche Einleitung passt am besten zu einer Stellungnahme?", o: ["Seit Wochen wird an unserer Schule über einen Schulgarten gesprochen. Ich finde, wir sollten ihn anlegen.", "Ich schreibe jetzt einen Text über den Schulgarten.", "Erstens macht ein Schulgarten den Unterricht anschaulicher."], a: 0, e: "Eine gute Einleitung nennt den Anlass und die eigene Meinung. Argumente kommen erst im Hauptteil." },
        { q: "Welcher Schluss rundet die Stellungnahme am besten ab?", o: ["Aus diesen Gründen bin ich für den Schulgarten. Ich hoffe, dass die Schulleitung im Frühjahr damit beginnt.", "Ein weiteres Argument ist, dass Gemüse gesund ist.", "Das war meine Stellungnahme. Ende."], a: 0, e: "Der Schluss fasst die Meinung zusammen und endet mit einem Wunsch oder Appell – ohne neues Argument." }
      ] },
      { art: "merke", nur: "M", kopf: "MERKE: Den Einwand nicht verschweigen", html: "<p>Wer die Gegenseite ernst nimmt, überzeugt mehr. So greifst du einen <button class=\"term\" data-t=\"einwand\">Einwand</button> auf:</p><ol><li><b>nennen</b> – „Gegner wenden ein, dass …“</li><li><b>ernst nehmen</b> – „Das ist nicht von der Hand zu weisen.“</li><li><b><button class=\"term\" data-t=\"entkraeften\">entkräften</button></b> – „Allerdings …“, „Dennoch …“, „Dem lässt sich entgegenhalten, dass …“</li></ol>" },
      { art: "offen", id: "einwand", m7: true, tag: "Einwand entkräften", titel: "Antworte der Gegenseite", fragen: [
        { q: "Gegner sagen: „Ein Schulgarten macht viel zu viel Arbeit.“ Entkräfte den Einwand in ein bis zwei Sätzen.", m: "Das stimmt zwar, aber die Arbeit lässt sich auf mehrere Klassen verteilen, sodass jede nur wenige Minuten in der Woche gießen und jäten muss.", k: ["zwar|stimmt|allerdings|aber|dennoch|trotzdem|jedoch", "verteil|aufteil|klassen|gemeinsam|abwechsel|wenig|ag "], min: 2 }
      ], tipp: "Gib der Gegenseite kurz recht („Das stimmt zwar …“) und zeige dann, warum der Einwand nicht so schwer wiegt.", hilfen: ["Überlege: Wer könnte sich die Arbeit teilen?"] },
      { art: "tf", id: "regeln", nur: "R", tag: "Stimmt das?", aussagen: [
        ["Das stärkste Argument steht am besten am Schluss des Hauptteils.", true],
        ["Im Schluss bringt man noch schnell ein neues Argument.", false],
        ["Wörter wie „außerdem“ und „deshalb“ helfen dem Leser, den Gedanken zu folgen.", true],
        ["Eine Behauptung ohne Begründung überzeugt genauso gut.", false]
      ] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Deine Stellungnahme", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt bist du dran. In der Schreibwerkstatt arbeitest du in vier Schritten: <b>Planen → Schreiben → Überarbeiten → Abgeben</b>. Dein Text wird beim Schreiben automatisch gespeichert.</p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Schreibwerkstatt", titel: "Stellungnahme: Ein fleischloser Tag in der Mensa?", form: "stellungnahme",
        auftrag: {
          R: "<p>Die Schülervertretung deiner Schule schlägt vor: <b>An einem Tag in der Woche soll es in der Mensa nur fleischlose Gerichte geben.</b> Die Schulleitung möchte wissen, was die Schülerinnen und Schüler davon halten.</p><p>Schreibe eine begründete Stellungnahme an die Schulleitung (mindestens 110 Wörter):</p><ul><li>Nenne in der Einleitung die Streitfrage und deine Meinung.</li><li>Begründe deine Meinung mit <b>drei Argumenten</b>. Jedes Argument braucht eine Begründung und ein Beispiel.</li><li>Stelle dein stärkstes Argument an den Schluss.</li><li>Runde deinen Text mit einem Schluss ab.</li></ul>",
          M: "<p>Die Schülervertretung deiner Schule schlägt vor: <b>An einem Tag in der Woche soll es in der Mensa nur fleischlose Gerichte geben.</b> Die Schulleitung möchte vor ihrer Entscheidung die Meinung der Schülerinnen und Schüler hören.</p><p>Verfasse eine begründete Stellungnahme an die Schulleitung (mindestens 160 Wörter):</p><ul><li>Führe in der Einleitung zum Thema hin und formuliere deine These.</li><li>Stütze deine These mit <b>drei Argumenten</b> in steigernder Reihenfolge – jeweils mit Begründung und Beispiel oder Beleg.</li><li>Greife <b>einen Einwand</b> der Gegenseite auf und entkräfte ihn.</li><li>Wäge im Schluss ab und formuliere einen Appell.</li></ul>"
        },
        material: { html: "<p><b>Stimmen aus der Schülervertretung</b> – Stichpunkte aus der Diskussion. Du darfst sie verwenden, musst sie aber selbst zu Argumenten ausbauen. Eigene Ideen sind genauso gut.</p><ul><li>„Für Fleisch braucht man viel mehr Fläche, Wasser und Futter als für Gemüse und Getreide.“</li><li>„Viele von uns essen fast jeden Tag Fleisch oder Wurst.“</li><li>„An so einem Tag probiert man Gerichte, die man sonst nie nehmen würde.“</li><li>„Ich will selbst entscheiden, was auf meinem Teller liegt.“</li><li>„Wenn es mir nicht schmeckt, gehe ich an dem Tag eben zum Bäcker.“</li><li>„Ein Tag in der Woche ändert doch nichts.“</li></ul>" },
        min: { R: 110, M: 160 },
        kriterien: {
          R: ["Die Einleitung nennt die Streitfrage und meine Meinung.", "Ich habe drei Argumente – jedes mit Begründung und Beispiel.", "Mein stärkstes Argument steht am Schluss des Hauptteils.", "Ich verknüpfe mit Wörtern wie erstens, außerdem, deshalb.", "Der Schluss fasst meine Meinung zusammen, ohne neues Argument."],
          M: ["Die Einleitung führt zum Thema hin und nennt meine These.", "Drei Argumente stehen in steigernder Reihenfolge, jedes mit Begründung und Beispiel oder Beleg.", "Ich greife einen Einwand auf und entkräfte ihn sachlich.", "Die Gedanken sind sprachlich verknüpft (zunächst, hinzu kommt, allerdings, deshalb).", "Der Schluss wägt ab und endet mit einem Appell an die Schulleitung."]
        },
        starter: ["Die Schülervertretung schlägt vor, dass …", "Meiner Meinung nach …", "Erstens …", "Außerdem …", "Am wichtigsten ist für mich, dass …", "Deshalb bin ich dafür / dagegen, dass …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["In der Einleitung einer Stellungnahme stehen die Streitfrage und die eigene Meinung.", true],
        ["Ein vollständiges Argument besteht aus Behauptung, Begründung und Beispiel.", true],
        ["Die Argumente ordnet man so, dass das schwächste am Schluss steht.", false],
        ["Der Schluss darf eine Bitte oder Aufforderung enthalten.", true],
        ["Eine Stellungnahme schreibt man, ohne an den Adressaten zu denken.", false]
      ] }
    ] }
  ],
  weiter: { href: "schr_05.html", titel: "Modul 5: Zitate und indirekte Rede einbauen", text: "Eine Stellungnahme wird noch stärker, wenn du andere zu Wort kommen lässt. Wie du fremde Aussagen richtig in deinen Text einbaust, übst du im nächsten Modul." }
});
