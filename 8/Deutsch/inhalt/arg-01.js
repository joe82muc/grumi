/* Deutsch 8 · Argumentieren und Stellung nehmen · Modul 1: These, Argument, Beispiel
   (bloße Meinung und Argument unterscheiden, These erkennen und formulieren, Bauplan: These → Behauptung → Begründung →
   Beispiel oder Beleg → Schlussfolgerung, Scheinbegründung und persönlichen Angriff erkennen, selbst begründen und stützen;
   M8: Beispiel und Beleg unterscheiden, ein vollständiges Argument formulieren)
   LehrplanPLUS D8 3.2 (Argumente formulieren, durch Beispiele stützen, Schlüsse ziehen), 1.2 (logisch argumentieren; M8: sachlogisch,
   mit Beispielen veranschaulichen).
   Texte: Gespräch im Klassenrat zur Streitfrage „Sitzordnung selbst wählen?“ (texte/argumentieren/sitzordnung-r.js und -m.js) – erfunden.
   Nebenthemen der Übungen: Pausenradio, Tablets statt Hefte, Sitzordnung auslosen. */
D7Kit.seite({
  id: "arg-01",
  titel: "These, Argument, Beispiel",
  einleitung: "„Find ich halt besser“ überzeugt niemanden. Heute nimmst du ein Streitgespräch auseinander und findest heraus, wie aus einer bloßen Meinung ein Argument wird, dem man nur schwer widersprechen kann.",
  zeit: "etwa 40 Minuten",
  ziele: ["💬 Ich unterscheide eine bloße Meinung von einem Argument.", "🎯 Ich erkenne eine These und formuliere selbst eine.", "🧱 Ich baue ein Argument aus Behauptung, Begründung und Beispiel oder Beleg.", "➡️ Ich ziehe am Ende eine Schlussfolgerung."],
  haupttext: { R: "arg-sitzordnung-r", M: "arg-sitzordnung-m" },
  quiz: { profi: "Argumente-Profi" },
  glossar: {
    streitfrage: ["Streitfrage", "Eine Frage, bei der es gute Gründe für Ja und für Nein gibt."],
    meinung: ["Meinung", "Was jemand findet oder mag. Ohne Begründung überzeugt sie andere nicht."],
    these: ["These", "Ein klarer Standpunkt zu einer Streitfrage, in einem Satz: Ich bin dafür, dass … / Ich bin dagegen, dass …"],
    argument: ["Argument", "Ein Grund, der die These stützt. Vollständig ist es mit Behauptung, Begründung und Beispiel oder Beleg."],
    behauptung: ["Behauptung", "Der Kern eines Arguments: eine Aussage, die erst noch begründet werden muss."],
    begruendung: ["Begründung", "Sie nennt den Grund für die Behauptung – oft mit weil, denn, da oder nämlich."],
    beispiel: ["Beispiel", "Ein einzelner Fall oder eine eigene Erfahrung. Es macht das Argument anschaulich."],
    beleg: ["Beleg", "Etwas, das sich nachprüfen lässt: eine Zahl, das Ergebnis einer Umfrage, eine Regel oder die Aussage einer Fachperson."],
    schlussfolgerung: ["Schlussfolgerung", "Der Satz, der das Ergebnis zieht und zur These zurückführt – oft mit deshalb, daher oder folglich."],
    schein: ["Scheinbegründung", "Klingt wie eine Begründung, wiederholt aber nur die Behauptung mit anderen Worten."],
    sachlich: ["sachlich", "Bei der Sache bleiben: über das Thema sprechen, nicht über die Person."]
  },
  stationen: [
    { kurz: "Klassenrat", ober: "Lesen und untersuchen", titel: "Meinung oder Argument?", teile: [
      { art: "text", html: '<p class="lead">Wer bestimmt, wer neben wem sitzt? Über diese <button class="term" data-t="streitfrage">Streitfrage</button> diskutiert eine achte Klasse im Klassenrat. Lies das Gespräch. Achte darauf: Wer sagt nur, was er findet – und wer nennt einen Grund?</p>' },
      { art: "lesetext", lesetext: { R: "arg-sitzordnung-r", M: "arg-sitzordnung-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Über welche Streitfrage diskutiert die Klasse?", o: ["Soll die Klasse ihre Sitzplätze künftig selbst wählen dürfen?", "Soll der Klassenrat künftig in jeder Woche stattfinden?", "Soll die Klasse in ein größeres Zimmer umziehen dürfen?"], a: 0, e: "Darum geht es von Anfang an: Wer bestimmt die Sitzordnung – die Klassenleitung oder die Klasse selbst?" },
        { q: "Wer spricht sich dafür aus, dass die Plätze weiterhin festgelegt werden?", o: ["Malia und Timur", "Enno und Frieda", "Enno und Malia"], a: 0, e: "Malia fürchtet, dass jemand übrig bleibt, Timur rechnet mit mehr Ablenkung. Enno und Frieda wollen die freie Wahl – Frieda allerdings mit einer Regel." },
        { q: "Was schlägt Frieda am Ende vor?", o: ["freie Platzwahl auf Probe, verbunden mit einer Regel für Störungen", "eine Sitzordnung, die künftig in jeder Woche neu ausgelost wird", "die bisherige Sitzordnung bis zum Schuljahresende zu behalten"], a: 0, e: "Frieda verbindet beide Seiten: selbst wählen, aber wer stört, wird umgesetzt. Das soll die Klasse erst einmal ausprobieren." }
      ] },
      { art: "mc", id: "schwach", nur: "R", tag: "Genau hinsehen", fragen: [
        { q: "Enno sagt am Anfang: „Alles andere ist doch Kinderkram.“ Warum überzeugt das niemanden?", o: ["Er wertet die andere Lösung nur ab und nennt keinen Grund.", "Er nennt zu viele Gründe auf einmal.", "Er erzählt ein Beispiel, das nicht zum Thema passt."], a: 0, e: "„Kinderkram“ ist nur eine Abwertung. Warum die freie Wahl besser sein soll, erfährt man nicht – deshalb fragt Frieda nach (Z. 7–8)." }
      ] },
      { art: "mc", id: "schwach", nur: "M", tag: "Genau hinsehen", fragen: [
        { q: "Enno begründet zuerst so: Freie Platzwahl sei besser, „weil sie einfach mehr Sinn ergibt“. Was ist daran schwach?", o: ["Die Begründung wiederholt die Behauptung nur mit anderen Worten.", "Die Begründung enthält zu viele Einzelheiten auf einmal.", "Die Begründung passt eher zur Gegenposition als zu seiner."], a: 0, e: "„Besser“ und „mehr Sinn“ sagen dasselbe. Der Satz dreht sich im Kreis – deshalb hakt Frieda nach (Z. 10–11)." }
      ] },
      { art: "sort", id: "meinung", tag: "Sortieren", titel: "Bloße Meinung oder Argument?", lead: "Ein Argument erkennst du daran, dass es einen Grund nennt.", buckets: ["bloße Meinung", "Argument mit Begründung"], cols: 240, items: [
        { t: "Feste Sitzpläne sind total altmodisch.", b: 0 },
        { t: "Ganz hinten sitzt man am besten, das ist halt so.", b: 0 },
        { t: "Ich finde es einfach schöner, wenn jeder sitzt, wo er will.", b: 0 },
        { t: "Wer vorne sitzt, lässt sich seltener ablenken, weil er weniger Mitschüler im Blick hat.", b: 1 },
        { t: "Ein fester Sitzplan ist gerecht, denn niemand muss fürchten, allein übrig zu bleiben.", b: 1 },
        { t: "Mit vertrauten Partnern kommt man schneller ins Arbeiten, da man sich nicht erst aufeinander einstellen muss.", b: 1 }
      ], fertig: "✅ Richtig sortiert! Wörter wie „weil“, „denn“ und „da“ verraten die Begründung." },
      { art: "merke", kopf: "MERKE: Meinung – These – Argument", html: '<ul><li><b><button class="term" data-t="meinung">Meinung</button>:</b> sagt nur, was jemand findet. („Find ich halt besser.“)</li><li><b><button class="term" data-t="these">These</button>:</b> ein klarer Standpunkt zu einer Streitfrage. („Ich bin dafür, dass …“)</li><li><b><button class="term" data-t="argument">Argument</button>:</b> ein Grund, der die These stützt. Erst Argumente überzeugen andere.</li></ul>' }
    ] },
    { kurz: "These", ober: "Verstehen", titel: "Die These: dein Standpunkt in einem Satz", teile: [
      { art: "beispiel", kopf: "Ein Thema, eine Frage, eine These", html: "<p><b>Thema:</b> die Sitzordnung in unserer Klasse<br><b>Streitfrage:</b> Sollen wir unsere Plätze selbst wählen?<br><b>These:</b> Ich bin dafür, dass wir unsere Plätze selbst wählen.</p><p>Das Thema nennt nur die Sache. Die Streitfrage fragt. Erst die These antwortet – und zeigt, wo jemand steht.</p>" },
      { art: "sort", id: "tfs", tag: "Sortieren", titel: "Thema, Streitfrage oder These?", buckets: ["Thema", "Streitfrage", "These"], items: [
        { t: "das Pausenradio an unserer Schule", b: 0 },
        { t: "Tablets im Unterricht", b: 0 },
        { t: "Soll es an unserer Schule ein Pausenradio geben?", b: 1 },
        { t: "Sollen Tablets die Schulhefte ersetzen?", b: 1 },
        { t: "Ich bin dafür, dass unsere Schule ein Pausenradio bekommt.", b: 2 },
        { t: "Meiner Ansicht nach sollten Tablets die Hefte nicht ersetzen.", b: 2 }
      ] },
      { art: "mc", id: "klar", tag: "These erkennen", fragen: [
        { q: "Welcher Satz ist eine klare These?", o: ["Ich bin dagegen, dass die Lehrkraft die Sitzordnung allein festlegt.", "Über die Sitzordnung wird in vielen Klassen gestritten.", "Wie soll unsere Sitzordnung in Zukunft aussehen?"], a: 0, e: "Nur der erste Satz bezieht Stellung. Der zweite stellt bloß etwas fest, der dritte ist eine Frage." }
      ] },
      { art: "merke", kopf: "So formulierst du eine These", html: "<p>Eine These ist <b>ein ganzer Satz</b> und bezieht eindeutig Stellung:</p><ul><li>Ich bin dafür, dass …</li><li>Ich bin dagegen, dass …</li><li>Meiner Ansicht nach sollte …</li></ul><p>Die Gründe kommen erst danach.</p>" },
      { art: "offen", id: "meine", tag: "Selbst formulieren", titel: "Deine These", fragen: [
        { q: "Streitfrage: Soll die Sitzordnung alle vier Wochen ausgelost werden? Formuliere deine These in einem ganzen Satz.", m: "Ich bin dafür, dass die Sitzordnung alle vier Wochen ausgelost wird.", k: ["dafür|dagegen|meiner meinung|meiner ansicht|ich finde|ich meine|sollte|soll ", "los|sitzordnung|plätze|platz"], min: 2 }
      ], tipp: "Eine These sagt klar, ob du dafür oder dagegen bist – und wofür genau.", hilfen: ["Beginne mit „Ich bin dafür, dass …“ oder „Ich bin dagegen, dass …“.", "Wiederhole in deinem Satz, worum es geht: Die Sitzordnung wird ausgelost."] }
    ] },
    { kurz: "Bausteine", ober: "Untersuchen", titel: "So ist ein Argument gebaut", teile: [
      { art: "text", html: "<p>Ennos erster Anlauf überzeugt niemanden – sein zweiter schon. Was ist beim zweiten Mal anders? Suche im Gespräch die Bausteine, aus denen ein gutes Argument besteht.</p>" },
      { art: "beleg", id: "bau", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Gespräch?", lesetext: "arg-sitzordnung-r", fragen: [
        { q: "In welchen Zeilen begründet Enno, warum man neben vertrauten Leuten besser mitarbeitet?", zeilen: [10, 11], e: "Das Wort „nämlich“ kündigt die Begründung an: Man traut sich eher, etwas zu fragen.", tipp: "Suche in Ennos zweitem Beitrag das Wort „nämlich“." },
        { q: "Wo steht das Beispiel, mit dem Malia ihr Argument stützt – ihre eigene Erfahrung?", zeilen: [16, 18], e: "Malia erzählt, wie es ihr als Neue in der Klasse ging. Das ist ein Beispiel aus eigener Erfahrung.", tipp: "Suche die Stelle, an der Malia vom Herbst erzählt." },
        { q: "In welchen Zeilen zieht Frieda ihre Schlussfolgerung?", zeilen: [34, 35], e: "„Deshalb“ zeigt: Jetzt kommt das Ergebnis aus ihrem Argument.", tipp: "Suche das Signalwort „Deshalb“." }
      ], hilfen: ["Eine Begründung erkennst du an Wörtern wie „weil“, „denn“ oder „nämlich“.", "Ein Beispiel erzählt von einem einzelnen Fall – oft aus eigener Erfahrung.", "Die Schlussfolgerung steht am Ende eines Beitrags und beginnt oft mit „deshalb“."] },
      { art: "beleg", id: "bau", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Gespräch?", lesetext: "arg-sitzordnung-m", fragen: [
        { q: "In welchen Zeilen begründet Enno seine Behauptung, dass man sich neben einer vertrauten Person stärker beteiligt?", zeilen: [13, 15], e: "„Das liegt daran, dass …“ leitet die Begründung ein: Man fragt eher nach.", tipp: "Suche die Wendung „Das liegt daran“." },
        { q: "Wo führt Timur einen Beleg an – ein Ergebnis, das sich nachprüfen lässt?", zeilen: [31, 33], e: "Die Abstimmung in der Klasse (16 von 26) gilt für viele und nicht nur für einen Einzelfall.", tipp: "Suche die Stelle mit den Zahlen." },
        { q: "In welchen Zeilen zieht Timur aus diesem Beleg eine Schlussfolgerung?", zeilen: [34, 35], e: "„Folglich“ kündigt die Schlussfolgerung an – wie „deshalb“ oder „daher“.", tipp: "Suche das Signalwort „Folglich“." },
        { q: "Wo begründet Frieda, warum ihre Abmachung wirkt?", zeilen: [38, 40], e: "Mit „weil“ nennt sie den Grund: Regeln, an denen man mitgewirkt hat, hält man eher ein.", tipp: "Suche in Friedas Vorschlag den Nebensatz mit „weil“." }
      ] },
      { art: "merke", kopf: "MERKE: Der Bauplan", html: '<ol><li><b>These</b> – mein Standpunkt: dafür oder dagegen</li><li><b><button class="term" data-t="behauptung">Behauptung</button></b> – der Kern meines Arguments: Was ist so?</li><li><b><button class="term" data-t="begruendung">Begründung</button></b> – der Grund dahinter <i>(weil, denn, da, nämlich)</i></li><li><b><button class="term" data-t="beispiel">Beispiel</button> oder <button class="term" data-t="beleg">Beleg</button></b> – der Nachweis: ein Fall, eine Erfahrung, eine Zahl <i>(zum Beispiel, so, laut …)</i></li><li><b><button class="term" data-t="schlussfolgerung">Schlussfolgerung</button></b> – das Ergebnis, zurück zur These <i>(deshalb, daher, folglich)</i></li></ol><p>Behauptung, Begründung und Beispiel bilden zusammen <b>ein</b> Argument.</p>' },
      { art: "paare", id: "kette", tag: "Zuordnen", titel: "Welcher Satz ist welcher Baustein?", lead: "Auch Jonas ist gegen die freie Wahl. Ordne seine Sätze den Bausteinen zu.", paare: [
        ["Ich bin dagegen, dass wir die Plätze frei wählen.", "These"],
        ["Eine feste Sitzordnung hilft denen, die schlecht sehen oder hören.", "Behauptung"],
        ["Denn die Lehrkraft kann sie gezielt nach vorne setzen.", "Begründung"],
        ["Seit Ole in der ersten Reihe sitzt, kann er die Tafel wieder lesen.", "Beispiel"],
        ["Deshalb sollte die Lehrkraft die Plätze weiter festlegen.", "Schlussfolgerung"]
      ] },
      { art: "markieren", id: "signal", tag: "Signalwörter", titel: "Welche Wörter kündigen einen Baustein an?", satz: "Ein Pausenradio stärkt die Schulgemeinschaft, [[weil]] Schüler aus allen Klassen daran mitarbeiten können. [[Zum Beispiel]] könnte jede Woche eine andere Klasse die Musik aussuchen. [[Deshalb]] sollte unsere Schule ein Pausenradio einrichten.", finde: "die drei Signalwörter für Begründung, Beispiel und Schlussfolgerung", e: "„weil“ leitet die Begründung ein, „zum Beispiel“ das Beispiel und „deshalb“ die Schlussfolgerung." },
      { art: "mc", id: "passt", tag: "Passt das?", fragen: [
        { q: "Welches Beispiel passt zu der Behauptung „Freie Platzwahl stärkt die Zusammenarbeit“?", o: ["In Erdkunde war unsere eingespielte Vierergruppe mit dem Plakat als erste fertig.", "Mein Platz am Fenster ist im Winter so kalt, dass ich die Jacke anbehalte.", "In der Pause stehen wir sowieso immer zusammen und reden über das Wochenende."], a: 0, e: "Ein Beispiel muss genau das zeigen, was behauptet wird: gute Zusammenarbeit im Unterricht. Der Fensterplatz und die Pause haben damit nichts zu tun." },
        { q: "Was leistet die Schlussfolgerung?", o: ["Sie zieht das Ergebnis aus dem Argument und führt zur These zurück.", "Sie bringt zum Schluss noch ein neues Argument für die These ins Spiel.", "Sie stellt die eigene These am Ende noch einmal deutlich in Frage."], a: 0, e: "Mit „deshalb“, „daher“ oder „folglich“ schließt du den Kreis: Aus dem Argument folgt deine These." }
      ] }
    ] },
    { kurz: "Stützen", ober: "Üben und selbst formulieren", titel: "Begründen und stützen – jetzt du", teile: [
      { art: "mc", id: "echt", tag: "Echte Begründung?", fragen: [
        { q: "Welche Begründung erklärt wirklich etwas?", o: ["Losen ist fair, weil jeder dieselbe Chance auf jeden Platz hat.", "Losen ist fair, weil es einfach die gerechteste Lösung ist.", "Losen ist fair, weil das in der Klasse doch alle so sehen."], a: 0, e: "„Fair, weil gerecht“ dreht sich im Kreis – das ist eine Scheinbegründung. Und „alle sehen das so“ ist selbst nur eine Behauptung." },
        { q: "Enno wirft Timur vor, er rede selbst am meisten. Warum ist das kein Argument?", o: ["Er greift die Person an, statt etwas zur Sache zu sagen.", "Er hätte dafür ein Beispiel aus dem Unterricht gebraucht.", "Er wiederholt nur, was Malia schon gesagt hat."], a: 0, e: "Ob Timur viel redet, ändert nichts daran, ob seine Aussage stimmt. Wer überzeugen will, bleibt bei der Sache." }
      ] },
      { art: "text", html: '<p>Wer überzeugen will, bleibt <button class="term" data-t="sachlich">sachlich</button> und prüft die eigene Begründung: Erklärt sie wirklich etwas – oder ist sie nur eine <button class="term" data-t="schein">Scheinbegründung</button>? Danach braucht das Argument noch eine Stütze. Dafür gibt es zwei Möglichkeiten:</p>' },
      { art: "karten", karten: [
        { ic: "🙋", titel: "Beispiel", text: "Ein einzelner Fall oder eine eigene Erfahrung. Es macht das Argument anschaulich: „Bei mir war es so …“, „Zum Beispiel …“" },
        { ic: "📊", titel: "Beleg", text: "Etwas, das sich nachprüfen lässt: eine Zahl, eine Umfrage, eine Regel, die Aussage einer Fachperson. Ein Beleg gilt für viele – und wiegt deshalb oft schwerer." }
      ] },
      { art: "sort", id: "stuetze", m7: true, tag: "Sortieren", titel: "Beispiel oder Beleg?", lead: "Einzelfall oder nachprüfbar? Entscheide bei jeder Stütze.", buckets: ["Beispiel (Einzelfall)", "Beleg (nachprüfbar)"], cols: 240, items: [
        { t: "Meine Schwester saß ein Jahr lang neben ihrer besten Freundin und hat trotzdem gut aufgepasst.", b: 0 },
        { t: "Gestern hat mir mein Banknachbar die Bruchrechnung erklärt.", b: 0 },
        { t: "Als ich neu war, hat mir der zugeteilte Platz sehr geholfen.", b: 0 },
        { t: "Bei der Abstimmung im Klassenrat waren 18 von 25 für einen Probelauf.", b: 1 },
        { t: "Laut Klassenbuch gab es in den vier Wochen mit freier Platzwahl drei Einträge wegen Störungen, davor waren es neun.", b: 1 },
        { t: "Die Hausordnung legt fest, dass die Klassenleitung über die Sitzordnung entscheidet.", b: 1 }
      ] },
      { art: "offen", id: "stuetz", tag: "Selbst formulieren", titel: "Begründen und stützen", fragen: [
        { q: "Verbessere die Scheinbegründung: „Ein Platz in der ersten Reihe ist gut, weil er eben gut ist.“ Schreibe den Satz mit einer echten Begründung neu.", m: "Ein Platz in der ersten Reihe ist gut, weil man dort die Tafel am besten sieht und weniger abgelenkt wird.", k: ["weil|denn|da |nämlich", "tafel|sieht|sehen|hör|abgelenkt|ablenk|konzentr|lehr|aufpass|mitbekomm|versteh"], min: 2 },
        { q: "Stütze dieses Argument mit einem passenden Beispiel: „Neben einem ruhigen Banknachbarn arbeitet man konzentrierter, weil man seltener abgelenkt wird.“", m: "Zum Beispiel sitze ich in Deutsch neben Jule, die sehr ruhig arbeitet, und seitdem werde ich mit meinen Aufgaben fast immer fertig.", k: ["zum beispiel|beispielsweise|bei mir|seit|als ich|letzte|in mathe|in deutsch|in englisch|einmal|neulich", "neben|sitz|platz|nachbar"], min: 2 }
      ], tipp: "Eine echte Begründung nennt einen Grund, den man nachvollziehen kann. Ein Beispiel erzählt einen einzelnen Fall.", hilfen: ["Zu Frage 1: Überlege, was in der ersten Reihe anders ist als hinten. Was sieht oder hört man dort besser?", "Zu Frage 2: Erzähle von einem einzelnen Fall. Beginne mit „Zum Beispiel sitze ich in … neben …“."] },
      { art: "offen", id: "ganz", m7: true, tag: "Selbst formulieren", titel: "Ein vollständiges Argument", fragen: [
        { q: "Streitfrage: Sollen Tablets die Schulhefte ersetzen? Entscheide dich für eine Seite und baue ein vollständiges Argument in drei bis vier Sätzen: Behauptung, Begründung, Beispiel oder Beleg und Schlussfolgerung.", m: "Tablets sollten die Schulhefte nicht ersetzen, weil sich viele etwas besser merken, wenn sie es mit der Hand aufschreiben. Zum Beispiel behalte ich Vokabeln viel leichter, seit ich sie wieder ins Heft schreibe. Deshalb sollten wir weiterhin mit Heften arbeiten.", k: ["weil|denn|da |nämlich", "zum beispiel|beispielsweise|bei mir|bei uns|an unserer|umfrage|laut |seit|als ", "deshalb|daher|also|folglich|darum|deswegen|aus diesem grund"], min: 3 }
      ], tipp: "Prüfe deinen Text am Bauplan: Steht nach der Behauptung ein Grund? Folgt ein Beispiel oder Beleg? Endet er mit einer Schlussfolgerung?", hilfen: ["Sammle zuerst einen Grund für deine Seite, zum Beispiel: Gewicht der Schultasche, Ablenkung, Kosten, Schreiben mit der Hand.", "Verbinde die Sätze mit Signalwörtern: „weil“ – „zum Beispiel“ – „deshalb“."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "sicher", tag: "Lückentext", titel: "Der Bauplan in fünf Sätzen", absaetze: [
        ["Mein Standpunkt in einem Satz heißt ", { g: "These" }, "."],
        ["Ein Argument beginnt mit einer ", { g: "Behauptung" }, ": Sie sagt, was aus meiner Sicht stimmt."],
        ["Die ", { g: "Begründung" }, " nennt mit „weil“ oder „denn“ den Grund dafür."],
        ["Ein ", { g: "Beispiel" }, " zeigt an einem einzelnen Fall, dass das Argument zutrifft."],
        ["Die ", { g: "Schlussfolgerung" }, " zieht am Ende das Ergebnis – oft mit „deshalb“."]
      ], extra: ["Streitfrage", "Thema"] }
    ] }
  ],
  weiter: { href: "arg_02.html", titel: "Modul 2: Argumente gewichten und verknüpfen", text: "Ein Argument steht selten allein. Im nächsten Modul findest du heraus, welches Argument am schwersten wiegt und wie du mehrere so verbindest, dass eins zum anderen führt." }
});
