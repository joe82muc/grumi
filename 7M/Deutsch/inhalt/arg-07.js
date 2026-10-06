/* Deutsch 7 · Argumentieren und diskutieren · Modul 7: Stellungnahme und Leserbrief
   (Bausteine eines Arguments – R7: Meinung, Begründung, Beispiel; M7: These, Argument, Begründung, Beispiel oder Beleg,
   Schlussfolgerung –, starke und schwache Argumente, Einwand entkräften, Aufbau eines Leserbriefs, Schreibtrainer)
   LehrplanPLUS D7 3.2 (argumentierende Texte verfassen: Standpunkt begründen, auf Gegenargumente eingehen;
   appellative und argumentative Schreibformen wie Leserbrief), 1.2 (eigene Meinung begründet vertreten).
   Text: „Ein Hund für unsere Schule?“ (argumentation/leserbrief-schulhund.js) – erfundener Leserbrief. */
D7Kit.seite({
  id: "arg-07",
  titel: "Stellungnahme und Leserbrief",
  einleitung: "In einer Diskussion sagst du deine Meinung – in einer Stellungnahme schreibst du sie auf. Damit sie überzeugt, braucht sie einen klaren Aufbau. Heute nimmst du einen Leserbrief auseinander und schreibst dann selbst einen.",
  zeit: "etwa 45 Minuten",
  ziele: ["🧩 Ich erkenne die Bausteine eines Arguments.", "💪 Ich unterscheide überzeugende und schwache Argumente.", "🔁 Ich gehe auf einen Einwand ein und entkräfte ihn.", "✉️ Ich schreibe eine Stellungnahme oder einen Leserbrief."],
  haupttext: "arg-leserbrief-hund",
  quiz: { profi: "Argumentations-Profi" },
  glossar: {
    stellungnahme: ["Stellungnahme", "Ein Text, in dem du deine Meinung zu einer Streitfrage sagst und begründest."],
    leserbrief: ["Leserbrief", "Eine Stellungnahme in Briefform an eine Zeitung: mit Anrede, Bezug, Meinung, Argumenten und Gruß."],
    these: ["These", "Der Standpunkt, den jemand vertritt: Ich bin dafür, dass … / Ich bin dagegen, dass …"],
    argument: ["Argument", "Ein Grund, der die These stützt."],
    begruendung: ["Begründung", "Sie erklärt das Argument genauer – oft mit weil, denn oder nämlich."],
    beleg: ["Beispiel oder Beleg", "Ein einzelner Fall, eine Erfahrung oder eine Tatsache, die zeigt, dass das Argument stimmt."],
    schlussfolgerung: ["Schlussfolgerung", "Der Satz, der am Ende das Ergebnis zieht – oft mit deshalb, darum oder also."],
    einwand: ["Einwand", "Ein Gegenargument der anderen Seite."],
    entkraeften: ["entkräften", "Zeigen, dass ein Einwand weniger schwer wiegt, als er klingt – sachlich und mit einem Grund."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Ein Leserbrief", teile: [
      { art: "text", html: "<p class=\"lead\">Die Schülerzeitung einer Schule hat gefragt: Soll die Schule einen Schulhund bekommen? Ein Schüler hat geantwortet.</p>" },
      { art: "lesetext", lesetext: "arg-leserbrief-hund" },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Welche Meinung vertritt der Schreiber?", o: ["Er ist für einen Schulhund.", "Er ist gegen einen Schulhund.", "Er hat keine eigene Meinung.", "Er findet, die Lehrkräfte sollen entscheiden."], a: 0, e: "Das sagt er gleich am Anfang: „Ich bin dafür.“ (Z. 3)" },
        { q: "Wie viele eigene Argumente nennt er?", o: ["zwei: Ruhe in der Klasse und Hilfe bei Aufregung", "eines: Hunde sind beliebt", "drei: Ruhe, Sauberkeit und bessere Noten", "keines"], a: 0, e: "Das zweite Argument beginnt mit „Außerdem“ (Z. 9)." },
        { q: "Was tut der Schreiber in Zeile 13–17?", o: ["Er greift ein Gegenargument auf und antwortet darauf.", "Er wiederholt seine Meinung.", "Er beschwert sich über die Redaktion.", "Er erzählt von seinem eigenen Hund."], a: 0, e: "Er nennt den Einwand der anderen Seite (Angst, Allergie) und entkräftet ihn." }] }
    ] },
    { kurz: "Bausteine", ober: "Verstehen", titel: "Die Bausteine eines Arguments", teile: [
      { art: "merke", nur: "R", html: "<ul><li><strong>Meinung:</strong> Was denke ich? – Ich bin dafür, dass …</li><li><strong>Begründung:</strong> Warum? – …, weil … / denn …</li><li><strong>Beispiel:</strong> Woran sieht man das? – Zum Beispiel …</li></ul><p>Am Ende einer <button class=\"term\" data-t=\"stellungnahme\">Stellungnahme</button> steht ein Schlusssatz, der das Ergebnis zieht: Deshalb …</p>" },
      { art: "merke", nur: "M", html: "<ul><li><button class=\"term\" data-t=\"these\">These</button>: mein Standpunkt – Ich bin dafür, dass …</li><li><button class=\"term\" data-t=\"argument\">Argument</button>: ein Grund, der die These stützt.</li><li><button class=\"term\" data-t=\"begruendung\">Begründung</button>: erklärt das Argument genauer – weil, denn, nämlich.</li><li><button class=\"term\" data-t=\"beleg\">Beispiel oder Beleg</button>: ein einzelner Fall oder eine Tatsache.</li><li><button class=\"term\" data-t=\"schlussfolgerung\">Schlussfolgerung</button>: zieht das Ergebnis – deshalb, darum, also.</li></ul>" },
      { art: "sort", id: "bau", nur: "R", tag: "Sortieren", titel: "Meinung, Begründung oder Beispiel?", lead: "Die Sätze stammen aus dem Leserbrief.", buckets: ["Meinung", "Begründung", "Beispiel"], cols: 200, items: [
        { t: "Ich bin dafür.", b: 0 }, { t: "Unsere Schule sollte es ausprobieren.", b: 0 },
        { t: "Wer weiß, dass ein Tier im Raum ist, schreit nicht herum.", b: 1 }, { t: "Beim Streicheln wird man ruhiger, weil man an etwas anderes denkt.", b: 1 },
        { t: "In der Grundschule meiner Schwester gibt es seit zwei Jahren eine Schulhündin.", b: 2 }, { t: "Vor einem Referat würde mir das selbst guttun.", b: 2 }] },
      { art: "paare", id: "bau", nur: "M", tag: "Zuordnen", titel: "Welcher Satz ist welcher Baustein?", lead: "Die Sätze stammen aus dem Leserbrief.", paare: [
        ["Ich bin dafür.", "These"], ["Ein Hund im Klassenzimmer sorgt für Ruhe.", "Argument"], ["Wer weiß, dass ein Tier im Raum ist, schreit nicht herum.", "Begründung"], ["In der Grundschule meiner Schwester gibt es eine Schulhündin.", "Beispiel oder Beleg"], ["Deshalb sollte unsere Schule es ausprobieren.", "Schlussfolgerung"]] },
      { art: "mc", id: "signal", tag: "Signalwörter", fragen: [
        { q: "An welchem Wort erkennst du oft eine Begründung?", o: ["weil", "deshalb", "zum Beispiel", "außerdem"], a: 0, e: "„weil“, „denn“ und „nämlich“ leiten eine Begründung ein. „Deshalb“ zieht dagegen den Schluss." },
        { q: "Welcher Satz zieht am Ende das Ergebnis aus den Argumenten?", o: ["Deshalb sollte unsere Schule es ein halbes Jahr lang ausprobieren.", "Außerdem hilft ein Hund Kindern, die aufgeregt sind.", "Manche wenden ein, dass einige Kinder Angst haben.", "In der letzten Ausgabe habt ihr gefragt."], a: 0, e: "„Deshalb“ zeigt: Jetzt kommt die Folgerung aus allem, was vorher gesagt wurde." }] }
    ] },
    { kurz: "Stark oder schwach", ober: "Ausprobieren", titel: "Überzeugt das?", teile: [
      { art: "text", html: "<p>Ein Argument überzeugt, wenn es einen <strong>Grund</strong> nennt, <strong>sachlich</strong> bleibt und zur Frage passt. Es überzeugt nicht, wenn es nur behauptet, andere abwertet oder am Thema vorbeigeht.</p>" },
      { art: "sort", id: "stark", tag: "Sortieren", titel: "Schulhund – überzeugt die Aussage?", buckets: ["überzeugt", "überzeugt nicht"], cols: 240, items: [
        { t: "Ein Hund muss auch in den Ferien versorgt werden – dafür braucht es einen festen Plan.", b: 0 },
        { t: "Schüchterne Kinder lesen einem Hund leichter vor, weil er nicht lacht und nicht bewertet.", b: 0 },
        { t: "Wer für ein Tier mitsorgt, lernt Verantwortung, denn der Hund braucht jeden Tag Wasser und Auslauf.", b: 0 },
        { t: "Hunde sind einfach toll, das weiß doch jeder.", b: 1 },
        { t: "Wer dagegen ist, hat keine Ahnung von Tieren.", b: 1 },
        { t: "Mein Onkel hat auch einen Hund, und der heißt Bruno.", b: 1 }] },
      { art: "mc", id: "schwach", tag: "Begründen", fragen: [
        { q: "Warum überzeugt „Hunde sind einfach toll, das weiß doch jeder“ nicht?", o: ["Es wird nur behauptet – ein Grund fehlt.", "Der Satz ist zu kurz.", "Hunde sind gar nicht beliebt.", "Der Satz enthält ein Fremdwort."], a: 0, e: "„Das weiß doch jeder“ ersetzt keine Begründung." },
        { q: "Was ist an „Wer dagegen ist, hat keine Ahnung von Tieren“ falsch?", o: ["Der Satz wertet andere ab, statt einen Grund zu nennen.", "Der Satz ist zu höflich.", "Der Satz nennt zu viele Beispiele.", "Nichts – so überzeugt man andere."], a: 0, e: "Wer andere angreift, bleibt nicht sachlich – und überzeugt niemanden." }] }
    ] },
    { kurz: "Einwand", ober: "Verstehen", titel: "Einen Einwand entkräften", teile: [
      { art: "beleg", id: "einw", tag: "Am Text zeigen", titel: "Wo steht das?", lesetext: "arg-leserbrief-hund", fragen: [
        { q: "An welcher Stelle nennt der Schreiber einen Einwand der anderen Seite?", zeilen: [13, 14], e: "„Manche wenden ein, dass …“ – so greift man ein Gegenargument auf.", tipp: "Suche das Wort „einwenden“ in einer gebeugten Form." },
        { q: "An welcher Stelle entkräftet er diesen Einwand?", zeilen: [15, 17], e: "Mit „Aber …“ beginnt seine Antwort: ausgebildeter Hund, nur mit Zustimmung aller.", tipp: "Suche das Wort „Aber“ am Satzanfang." }] },
      { art: "merke", kopf: "Zwar – aber", html: "<ol class=\"schritte-liste\"><li><strong>Auf den <button class=\"term\" data-t=\"einwand\">Einwand</button> eingehen:</strong> Es stimmt zwar, dass … / Ich verstehe, dass …</li><li><strong><button class=\"term\" data-t=\"entkraeften\">Entkräften</button>:</strong> Aber … / Trotzdem …, denn …</li></ol><p>Wer den Einwand zuerst ernst nimmt, wirkt fair – und überzeugt mehr.</p>" },
      { art: "luecke", id: "zwar", tag: "Lückentext", absaetze: [
        ["Es stimmt ", { g: "zwar" }, ", dass ein Hund Arbeit macht, ", { g: "aber" }, " eine Klasse kann einen Pflegeplan aufstellen."],
        ["Ich verstehe den ", { g: "Einwand" }, ". ", { g: "Trotzdem" }, " überwiegen für mich die Vorteile."]], extra: ["weil", "Beispiel"] },
      { art: "offen", id: "entk", m7: true, tag: "Selbst formulieren", fragen: [
        { q: "Entkräfte den Einwand „Ein Schulhund lenkt nur vom Lernen ab“ in zwei Sätzen: Geh zuerst darauf ein, antworte dann mit einem Gegenargument.", m: "Es stimmt zwar, dass ein Hund am Anfang alle neugierig macht. Aber nach ein paar Tagen gewöhnt man sich an ihn, und dann wird es in der Klasse sogar ruhiger.", k: ["zwar|stimmt|versteh|natürlich|mag sein|sicher", "aber|doch|trotzdem|jedoch|allerdings|dennoch"] }], tipp: "Erster Satz: Es stimmt zwar, dass … Zweiter Satz: Aber …, denn …" }
    ] },
    { kurz: "Leserbrief", ober: "Schreiben", titel: "Jetzt du: Stellung nehmen", teile: [
      { art: "ordnen", id: "aufbau", tag: "Reihenfolge", titel: "So ist ein Leserbrief aufgebaut", schritte: ["Anrede", "Bezug: Worum geht es?", "Die eigene Meinung", "Argumente mit Begründung und Beispiel", "Einen Einwand aufgreifen und entkräften", "Schlusssatz mit Folgerung oder Aufforderung", "Gruß und Unterschrift"] },
      { art: "schreiben", id: "brief", nur: "R", tag: "Schreibtrainer", titel: "Meine Stellungnahme", min: 60,
        auftrag: "<p><strong>Die Streitfrage:</strong> Soll jede Klasse einmal in der Woche ihr Klassenzimmer selbst putzen?</p><p>Schreibe eine kurze Stellungnahme für die Schülerzeitung. Sag deine Meinung, begründe sie mit <strong>zwei Gründen</strong>, gib <strong>ein Beispiel</strong> und ende mit einem Schlusssatz.</p>",
        starter: ["Ich bin dafür / dagegen, dass …", "Ein wichtiger Grund ist, dass …", "Zum Beispiel …", "Außerdem …", "Deshalb finde ich, dass …"],
        kriterien: ["Die eigene Meinung steht klar am Anfang.", "Zwei Gründe stützen die Meinung.", "Mindestens ein Grund wird mit einem Beispiel erklärt.", "Der Text bleibt sachlich.", "Am Ende steht ein Schlusssatz."] },
      { art: "schreiben", id: "brief", nur: "M", tag: "Schreibtrainer", titel: "Mein Leserbrief", min: 100,
        auftrag: "<p><strong>Die Streitfrage:</strong> Soll jede Klasse einmal in der Woche ihr Klassenzimmer selbst putzen?</p><p>Schreibe einen Leserbrief an die Schülerzeitung. Nenne deine <strong>These</strong>, stütze sie mit <strong>zwei Argumenten</strong> samt Begründung und Beispiel oder Beleg, greife <strong>einen Einwand</strong> auf und entkräfte ihn. Schließe mit einer <strong>Schlussfolgerung</strong>. Unterschreibe mit „Eine Schülerin der 7. Klasse“ oder „Ein Schüler der 7. Klasse“ – nicht mit deinem Namen.</p>",
        starter: ["Liebe Redaktion, …", "Ich bin der Meinung, dass …", "Es stimmt zwar, dass …, aber …", "Deshalb …"],
        kriterien: ["Anrede, Bezug zur Streitfrage und Gruß sind vorhanden.", "Die These steht klar am Anfang.", "Zwei Argumente sind begründet und mit Beispiel oder Beleg gestützt.", "Ein Einwand wird aufgegriffen und sachlich entkräftet.", "Am Ende steht eine Schlussfolgerung."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Eine Meinung überzeugt erst, wenn sie begründet wird.", true],
        ["„Das ist einfach so“ ist eine gute Begründung.", false],
        ["Ein Beispiel zeigt an einem einzelnen Fall, dass das Argument stimmt.", true],
        ["Auf Einwände geht man in einer Stellungnahme am besten gar nicht ein.", false],
        ["Die Schlussfolgerung steht am Ende und beginnt oft mit „deshalb“.", true],
        ["In einem Leserbrief darf man Andersdenkende ruhig beleidigen.", false]] }
    ] }
  ],
  weiter: { href: "index.html#argumentieren", titel: "Zurück zur Übersicht", text: "Wenn deine Lehrkraft die Probe „Argumentieren“ freischaltet, findest du sie in der Übersicht." }
});
