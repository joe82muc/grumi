/* Deutsch 7 · Argumentieren und diskutieren · Leserbrief-Werkstatt: Ich verbessere meinen Brief selbst
   Auftrag vom 19.10.2026: „erstelle ein modul wo die schüler ihre aufsätze selbständig mit hilfe von ki schrittweise
   korrigieren können“ – zu den vier Arbeitsblättern der Lehrkraft („Vier Arbeitsblätter Leserbrief Deutsch 7“: Handys in
   der Pause, Hausaufgaben am Wochenende, Schulhof am Nachmittag, Klassenzimmer putzen). Zeitungstexte, Fragen und Ideen
   stammen von diesen Arbeitsblättern (Texte der Lehrkraft); die Blätter liegen als PDF in arbeitsblaetter/.
   Baustein „werkstatt“ (d7-werkstatt.js): Das Kind tippt seinen fertigen Leserbrief ab und überarbeitet ihn in fünf
   Schritten selbst. Die KI prüft je Schritt nur dessen Punkte, zeigt die Stelle und gibt einen Denkanstoß; bei der
   Rechtschreibung markiert sie die Stellen mit Fehlerart, die Lösung gibt es nur auf Wunsch. Sie schreibt nichts für das Kind.
   LehrplanPLUS D7 3.2 (argumentierende Texte verfassen), 3.3 (Texte überarbeiten, auch mit digitalen Hilfen), 4.3 (Rechtschreibung).
   Für beide Züge gleich: Die Arbeitsblätter verlangen von allen zwei Argumente. */
(function () {
  // Die drei Bausteine eines Arguments; nr = erstes oder zweites Argument (steht so im Maßstab für die KI)
  const dreiB = (nr) => [
    { name: "Behauptung", was: "Was sagst du?", ki: "im " + nr + " Argument eine klare Aussage für die eigene Seite" },
    { name: "Begründung", was: "Warum ist das so? (weil, denn)", ki: "im " + nr + " Argument ein Grund, warum die Behauptung stimmt – oft mit weil, denn, da, nämlich; er zählt auch ohne diese Wörter" },
    { name: "Beispiel", was: "Wo sieht man das? (zum Beispiel)", ki: "im " + nr + " Argument ein einzelner Fall, eine eigene Erfahrung oder Beobachtung, die das Argument anschaulich macht – auch ohne die Wörter „zum Beispiel“" }
  ];
  const WERK = {
    min: 50,
    themen: [
      { id: "handys", titel: "Handys in der Pause?", quelle: "Stadtblatt", frage: "Sollen Handys in den Pausen erlaubt sein?",
        artikel: "Die Stadtblatt-Redaktion berichtet: An einer Mittelschule wird über eine neue Handyregel gesprochen. Bisher müssen die Handys während der Schulzeit in der Tasche bleiben. Einige Jugendliche möchten in den Pausen Nachrichten schreiben oder Musik hören. Andere finden, dass man in den Pausen lieber miteinander reden und spielen sollte. Die Schulleitung möchte nun die Meinung der Schülerinnen und Schüler hören.",
        dafuer: "Kontakt zu Eltern · Musik hören · kurze Erholung", dagegen: "mehr Gespräche · Streit durch Fotos · Ablenkung", blatt: "arbeitsblaetter/leserbrief-ab1-handys.pdf" },
      { id: "hausaufgaben", titel: "Keine Hausaufgaben am Wochenende?", quelle: "Auwalder Bote", frage: "Soll es am Wochenende keine Hausaufgaben mehr geben?",
        artikel: "Im Auwalder Boten wird über Hausaufgaben diskutiert. Einige Eltern wünschen sich, dass ihre Kinder am Samstag und Sonntag keine Hausaufgaben erledigen müssen. Dann hätten Familien mehr Zeit für gemeinsame Ausflüge und Erholung. Manche Lehrkräfte meinen dagegen, dass regelmäßiges Üben wichtig ist. Der Elternbeirat sammelt jetzt Meinungen.",
        dafuer: "Zeit für Familie · Erholung · Sport und Freunde", dagegen: "Stoff wiederholen · besser üben · Zeit unter der Woche sparen", blatt: "arbeitsblaetter/leserbrief-ab2-hausaufgaben.pdf" },
      { id: "schulhof", titel: "Schulhof auch nachmittags offen?", quelle: "Zeitung", frage: "Soll der Schulhof am Nachmittag geöffnet werden?",
        artikel: "Die Gemeinde überlegt, den Schulhof der Mittelschule nach Unterrichtsschluss bis 19 Uhr zu öffnen. Dort gibt es einen Basketballkorb und Tischtennisplatten. Kinder und Jugendliche könnten sich dort treffen und bewegen. Einige Anwohner befürchten allerdings Lärm und Müll. Im nächsten Monat soll darüber entschieden werden.",
        dafuer: "sicherer Spielplatz · Bewegung · Freunde treffen", dagegen: "Lärm · Müll · mögliche Schäden", blatt: "arbeitsblaetter/leserbrief-ab3-schulhof.pdf" },
      { id: "putzen", titel: "Schüler putzen ihr Klassenzimmer?", quelle: "Zeitung", frage: "Sollen Schülerinnen und Schüler einmal pro Woche ihr Klassenzimmer reinigen?",
        artikel: "In einer Mittelschule gibt es eine neue Idee: Jede Klasse soll einmal in der Woche für 15 Minuten das eigene Klassenzimmer aufräumen und einfache Reinigungsarbeiten übernehmen. Die Schulleitung hofft, dass alle besser auf die Räume achten. Manche Kinder finden das fair. Andere sagen, dass dafür die Reinigungskräfte zuständig sind und Unterrichtszeit verloren geht.",
        dafuer: "Verantwortung lernen · sauberer Raum · Zusammenarbeit", dagegen: "weniger Lernzeit · Aufgaben der Reinigungskräfte · unfaire Verteilung", blatt: "arbeitsblaetter/leserbrief-ab4-putzen.pdf" }
    ],
    schritte: [
      { id: "aufbau", titel: "Aufbau: Anfang und Schluss", kurz: "Aufbau", art: "inhalt",
        was: "<p>Hat dein Brief alle Teile? Die KI prüft jetzt nur <strong>Anrede, Einleitung, Schluss und Gruß</strong>. Um deine Argumente geht es in den nächsten beiden Schritten.</p>",
        punkte: [
          { name: "Anrede", was: "z. B. „Sehr geehrte Redaktion,“", ki: "eine höfliche Anrede an die Zeitung am Anfang (z. B. Sehr geehrte Redaktion, / Sehr geehrte Damen und Herren, / Liebe Redaktion,); Komma und Rechtschreibung zählen hier nicht" },
          { name: "Einleitung: Thema", was: "Worum geht es im Artikel?", ki: "am Anfang wird erkennbar, worum es geht – das Thema wird genannt, auch nebenbei im Satz mit der Meinung (z. B. „Handys in der Pause sollten …“); ein eigener Satz zum Artikel, Titel und Datum sind nicht nötig" },
          { name: "Einleitung: Meinung", was: "Bist du dafür oder dagegen?", ki: "am Anfang wird klar, ob das Kind dafür oder dagegen ist" },
          { name: "Schluss", was: "deine Meinung noch einmal, ein Wunsch oder eine Bitte", ki: "am Ende, vor dem Gruß, ein Satz, der die Meinung noch einmal sagt oder einen Wunsch, eine Bitte oder eine Aufforderung ausdrückt" },
          { name: "Gruß", was: "„Mit freundlichen Grüßen“ – darunter deine Anfangsbuchstaben", ki: "eine Grußformel am Ende (z. B. Mit freundlichen Grüßen / Viele Grüße). Darunter stehen Anfangsbuchstaben oder eine Unterschrift wie „Ein Schüler der 7. Klasse“ – das ist so gewollt; fehlt die Unterschrift, zählt der Gruß trotzdem" }],
        hilfen: ["Lies nur den Anfang und das Ende deines Briefs. Findest du dort Anrede, Thema, Meinung, Schluss und Gruß?",
          "Satzanfänge: „Sehr geehrte Redaktion,“ · „In Ihrem Artikel geht es um …“ · „Ich bin dafür, dass …“ / „Ich bin dagegen, dass …“ · „Deshalb finde ich, dass …“ · „Mit freundlichen Grüßen“",
          "So ist ein Leserbrief gebaut: Anrede → Einleitung (Thema und Meinung) → zwei Argumente → Schluss (Meinung oder Wunsch) → Gruß und Anfangsbuchstaben."] },
      { id: "arg1", titel: "Mein erstes Argument", kurz: "Argument 1", art: "inhalt",
        was: "<p>Jetzt geht es um dein <strong>erstes Argument</strong>. Es überzeugt, wenn es drei Teile hat: <button class=\"term\" data-t=\"behauptung\">Behauptung</button>, <button class=\"term\" data-t=\"begruendung\">Begründung</button> und <button class=\"term\" data-t=\"beispiel\">Beispiel</button>.</p>",
        punkte: dreiB("ersten"),
        hilfen: ["Such dein erstes Argument (oft beginnt es mit „Erstens“). Frag dich: Was behaupte ich? Warum ist das so? Wo sieht man das?",
          "Satzanfänge: „Erstens …“ · „…, weil …“ · „Denn …“ · „Zum Beispiel …“ · „Ich habe selbst erlebt, dass …“",
          "Behauptung: Was sagst du? → Begründung: Warum ist das so? → Beispiel: ein Fall, den du kennst oder dir gut vorstellen kannst."] },
      { id: "arg2", titel: "Mein zweites Argument", kurz: "Argument 2", art: "inhalt",
        was: "<p>Dein <strong>zweites Argument</strong> braucht wieder alle drei Teile – und einen <strong>neuen Grund</strong>, nicht noch einmal denselben wie beim ersten.</p>",
        punkte: dreiB("zweiten").concat([{ name: "ein neuer Grund", was: "nicht dasselbe wie beim ersten Argument", ki: "das zweite Argument nennt einen anderen Grund als das erste und passt zur selben Seite" }]),
        hilfen: ["Such dein zweites Argument (oft beginnt es mit „Zweitens“ oder „Außerdem“). Ist der Grund wirklich ein anderer als beim ersten?",
          "Satzanfänge: „Zweitens …“ · „Außerdem …“ · „Ein weiterer Grund ist, dass …“ · „…, denn …“ · „Das sieht man zum Beispiel …“",
          "Schau noch einmal auf die Ideen zu deinem Thema bei Station 1. Welche Idee hast du noch nicht benutzt?"] },
      { id: "sprache", titel: "Verknüpfen und sachlich bleiben", kurz: "Verknüpfen", art: "inhalt",
        was: "<p>Ein guter Brief ist gut zu lesen: <button class=\"term\" data-t=\"ordnungswort\">Ordnungswörter</button> zeigen, wo ein Argument beginnt, <button class=\"term\" data-t=\"verknuepfung\">Verknüpfungswörter</button> verbinden deine Gedanken. Und der Ton bleibt <button class=\"term\" data-t=\"sachlich\">sachlich</button> und höflich.</p>",
        punkte: [
          { name: "Ordnungswörter", was: "Erstens …, Zweitens … / Außerdem …", ki: "die Argumente sind mit Ordnungs- oder Verknüpfungswörtern eingeleitet (z. B. erstens, zweitens, außerdem, zum einen, zum anderen, ein weiterer Grund ist); es genügt, wenn klar wird, wo das zweite Argument beginnt" },
          { name: "Verknüpfungswörter", was: "weil, denn, zum Beispiel", ki: "Begründungen und Beispiele sind mit Wörtern wie weil, denn, da, nämlich, zum Beispiel, etwa angeschlossen – mindestens zwei solche Wörter im ganzen Brief" },
          { name: "sachlich und höflich", was: "keine Beleidigungen, nichts übertrieben", ki: "der Ton ist sachlich und höflich: keine Beleidigungen, kein Auslachen, keine groben Wörter; einfache Alltagssprache allein ist kein Grund für false" }],
        hilfen: ["Kreise im Kopf alle Wörter ein wie erstens, zweitens, außerdem, weil, denn, zum Beispiel. Wie viele findest du?",
          "Ordnungswörter: erstens · zweitens · außerdem · zum einen · zum anderen · ein weiterer Grund ist · deshalb. Verknüpfungswörter: weil · denn · da · nämlich · zum Beispiel",
          "Sachlich heißt: Du schreibst über das Thema, nicht über Personen. Statt „Das ist voll dumm“ kannst du sagen, was dich stört – und warum."] },
      { id: "rechtschreibung", titel: "Rechtschreibung und Satzzeichen", kurz: "Rechtschreibung", art: "rs",
        was: "<p>Zum Schluss die Rechtschreibung. Die KI <strong>markiert</strong> die Stellen und sagt dir, welche Art Fehler es ist. <strong>Verbessern musst du selbst.</strong> Die Lösung siehst du nur, wenn du auf „👀 Lösung“ tippst – probier es zuerst ohne.</p>",
        hilfen: ["Lies deinen Brief halblaut und Wort für Wort – am besten mit dem Finger unter der Zeile.",
          "Die häufigsten Fehler: Nomen groß · Komma vor weil, dass, denn · Komma nach der Anrede · Punkt am Satzende · das oder dass?",
          "Unsicher? Sprich das Wort in Silben, verlängere es (Hund – Hunde) oder such ein verwandtes Wort (Bälle – Ball)."] }
    ]
  };
  const werk = (teil) => ({ art: "werkstatt", teil, werk: WERK });

  D7Kit.seite({
    id: "arg-09",
    titel: "Leserbrief-Werkstatt: Ich verbessere meinen Brief",
    einleitung: "Dein Leserbrief ist fertig? Dann wird er jetzt noch besser. Du tippst ihn ab und gehst ihn in fünf Schritten durch. Die KI zeigt dir, was noch fehlt – verbessern tust du selbst.",
    zeit: "etwa 45 Minuten",
    ziele: ["📰 Ich wähle mein Thema und tippe meinen Leserbrief ab.", "🧩 Ich prüfe Aufbau, beide Argumente und die Verknüpfungen.", "✏️ Ich finde und verbessere meine Rechtschreibfehler selbst.", "🔁 Ich vergleiche meinen Brief vorher und nachher."],
    glossar: {
      leserbrief: ["Leserbrief", "Ein Brief an eine Zeitung. Darin sagt jemand seine Meinung zu einem Artikel und begründet sie."],
      redaktion: ["Redaktion", "Die Menschen, die eine Zeitung machen. An sie geht dein Leserbrief."],
      ueberarbeiten: ["überarbeiten", "Einen fertigen Text noch einmal durchgehen und besser machen: ergänzen, ändern, Fehler verbessern."],
      argument: ["Argument", "Ein Grund, der zeigt, dass deine Meinung stimmt. Es besteht aus Behauptung, Begründung und Beispiel."],
      behauptung: ["Behauptung", "Eine Aussage, die du für richtig hältst: Handys in der Pause helfen, Kontakt zu den Eltern zu halten."],
      begruendung: ["Begründung", "Sie erklärt, warum die Behauptung stimmt – oft mit weil, denn oder nämlich."],
      beispiel: ["Beispiel", "Ein einzelner Fall, an dem man sieht, dass die Begründung stimmt."],
      ordnungswort: ["Ordnungswort", "Ein Wort, das zeigt, wo ein neuer Gedanke beginnt: erstens, zweitens, außerdem."],
      verknuepfung: ["Verknüpfungswort", "Ein Wort, das zwei Gedanken verbindet: weil, denn, deshalb, zum Beispiel."],
      sachlich: ["sachlich", "Du bleibst beim Thema und nennst Gründe. Du beleidigst niemanden und übertreibst nicht."],
      anfangsbuchstaben: ["Anfangsbuchstaben", "Die ersten Buchstaben von Vor- und Nachname, zum Beispiel „J. M.“ für Jana Maier."]
    },
    stationen: [
      { kurz: "Thema", ober: "Vorbereiten", titel: "Welches Thema hast du bearbeitet?", teile: [
        { art: "text", html: "<p class=\"lead\">Du hast auf einem Arbeitsblatt einen <button class=\"term\" data-t=\"leserbrief\">Leserbrief</button> an die <button class=\"term\" data-t=\"redaktion\">Redaktion</button> geschrieben. Heute <button class=\"term\" data-t=\"ueberarbeiten\">überarbeitest</button> du ihn – Schritt für Schritt, mit der KI als Helferin. Die KI schreibt nichts für dich: Sie zeigt dir, wo etwas fehlt, und gibt dir einen Tipp. Verbessern tust du selbst.</p>" },
        { ...werk("wahl"), id: "werk-wahl", tag: "Thema und Seite", titel: "Wähle dein Arbeitsblatt" }
      ] },
      { kurz: "Abtippen", ober: "Dein Text", titel: "Tippe deinen Leserbrief ab", teile: [
        { art: "text", html: "<p>Tippe deinen Brief aus dem Heft oder vom Blatt <strong>genau so</strong> ab, wie du ihn geschrieben hast – auch mit Fehlern. Nur so siehst du am Ende, was du verbessert hast. Noch keinen Brief geschrieben? Dann schreib ihn hier; das Arbeitsblatt bei Station 1 hilft dir.</p><p><strong>Wichtig:</strong> Schreibe nicht deinen ganzen Namen. Unterschreibe mit deinen <button class=\"term\" data-t=\"anfangsbuchstaben\">Anfangsbuchstaben</button>.</p>" },
        { ...werk("text"), id: "werk-text", tag: "Abtippen", titel: "Dein Leserbrief" }
      ] },
      { kurz: "Überarbeiten", ober: "Schritt für Schritt", titel: "Verbessere deinen Brief in fünf Schritten", teile: [
        { art: "merke", kopf: "So arbeitest du", html: "<ol><li>Lies, was in diesem Schritt geprüft wird.</li><li>Tippe auf <strong>„✨ KI prüft“</strong>.</li><li>Lies die Rückmeldung: ✓ ist da, ○ fehlt noch. 📍 zeigt dir die Stelle.</li><li>Verbessere deinen Text <strong>selbst</strong> im Schreibfeld – und lass noch einmal prüfen.</li><li>Ist alles da, geht es zum nächsten Schritt. Kommst du nicht weiter, helfen die 💡 Hilfen.</li></ol>" },
        { ...werk("schritte"), id: "werk-schritte", tag: "✨ Die KI prüft – du verbesserst", titel: "Deine fünf Schritte" }
      ] },
      { kurz: "Ergebnis", ober: "Vorher – nachher", titel: "Das hast du geschafft", teile: [
        { ...werk("ergebnis"), id: "werk-ergebnis", tag: "Dein Ergebnis", titel: "Dein Brief vorher und nachher" },
        { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
          ["Ein Argument hat drei Teile: Behauptung, Begründung und Beispiel.", true],
          ["In der Werkstatt schreibt die KI meinen Brief neu.", false],
          ["Vor „weil“ und „dass“ steht ein Komma.", true],
          ["Am Schluss steht noch einmal meine Meinung oder ein Wunsch.", true],
          ["Ordnungswörter wie „erstens“ und „zweitens“ zeigen, wo ein neues Argument beginnt.", true],
          ["Beim Überarbeiten verbessere ich nur die Rechtschreibung.", false]] }
      ] }
    ],
    weiter: { href: "index.html#argumentieren", titel: "Zur Übersicht Deutsch 7", text: "Dein Brief ist überarbeitet. In der Übersicht findest du die anderen Module zum Argumentieren." }
  });
})();
