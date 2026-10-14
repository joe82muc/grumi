/* Deutsch 7 · Argumentieren und diskutieren · Der Leserbrief – Schritt für Schritt (steht vor „Stellungnahme und Leserbrief“)
   Auftrag vom 12.10.2026: kurzer Regelheft-Eintrag „Was ist ein Leserbrief?“ zum Abschreiben, dann ein Beispiel, an dem
   die Kinder arbeiten – Anrede, Argumente für eine Seite, Schluss –, die KI korrigiert die Texte auf Knopfdruck
   (Baustein „korrigieren“ in d7-kit.js). Wichtig sind Behauptung, Begründung und Beispiel; die KI ist nicht streng.
   LehrplanPLUS D7 3.2 (argumentierende Texte verfassen, appellative Schreibformen wie der Leserbrief), 1.2 (Meinung begründen).
   Text: „Leserbrief: Tempo 30 vor der Schule“ (argumentation/leserbrief-tempo30.js) – erfundener Leserbrief, erfundener Ort.
   Die beiden Zeitungsmeldungen (Tempo 30, Schulhof am Nachmittag) sind erfunden und stehen in keinem anderen Modul und in keiner Probe.
   Für beide Züge gleich; das zweite Argument ist M7-Aufgabe (für 7R freiwillig). */
(function () {
  // Die drei Bausteine eines Arguments: name und was sieht das Kind, ki bekommt die KI als Maßstab
  const DREI_B = [
    { name: "Behauptung", was: "Was sagst du?", ki: "eine klare Aussage für die eigene Seite" },
    { name: "Begründung", was: "Warum ist das so? (weil, denn, nämlich)", ki: "ein Grund, warum die Behauptung stimmt – oft mit weil, denn, da, nämlich; sie zählt aber auch ohne diese Wörter" },
    { name: "Beispiel", was: "Wo sieht man das? Ein Fall, den du kennst oder dir gut vorstellen kannst.", ki: "ein einzelner Fall, eine eigene Erfahrung oder eine Beobachtung, die das Argument anschaulich macht – auch ohne die Wörter „zum Beispiel“" }
  ];
  D7Kit.seite({
    id: "arg-08",
    titel: "Der Leserbrief – Schritt für Schritt",
    einleitung: "Du ärgerst dich über etwas in deiner Stadt – oder du findest eine Idee richtig gut? Dann schreib es der Zeitung. Heute lernst du, wie ein Leserbrief aufgebaut ist, und schreibst deinen ersten in kleinen Schritten.",
    zeit: "etwa 45 Minuten",
    ziele: ["📓 Ich weiß, was ein Leserbrief ist und wie er aufgebaut ist.", "🧩 Ich erkenne Behauptung, Begründung und Beispiel.", "✉️ Ich schreibe Anrede, Einleitung, Argumente und Schluss für meine Seite.", "✨ Ich verbessere meinen Text mit der KI-Korrektur."],
    haupttext: "arg-leserbrief-tempo",
    glossar: {
      leserbrief: ["Leserbrief", "Ein Brief an eine Zeitung. Darin sagt jemand seine Meinung zu einem Artikel oder Thema und begründet sie."],
      redaktion: ["Redaktion", "Die Menschen, die eine Zeitung machen. Sie schreiben die Artikel und wählen aus, was gedruckt wird."],
      artikel: ["Artikel", "Ein Text in der Zeitung, zum Beispiel ein Bericht."],
      bezug: ["Bezug", "Du sagst, worauf du antwortest – zum Beispiel auf einen Artikel mit Titel und Datum."],
      argument: ["Argument", "Ein Grund, der zeigt, dass deine Meinung stimmt. Es besteht aus Behauptung, Begründung und Beispiel."],
      behauptung: ["Behauptung", "Eine Aussage, die du für richtig hältst: Tempo 30 macht den Schulweg sicherer."],
      begruendung: ["Begründung", "Sie erklärt, warum die Behauptung stimmt – oft mit weil, denn oder nämlich."],
      beispiel: ["Beispiel", "Ein einzelner Fall, an dem man sieht, dass die Begründung stimmt."],
      sachlich: ["sachlich", "Du bleibst beim Thema und nennst Gründe. Du beleidigst niemanden und übertreibst nicht."],
      ueberzeugen: ["überzeugen", "Jemanden mit guten Gründen dazu bringen, dass er dir zustimmt."],
      stadtrat: ["Stadtrat", "Gewählte Frauen und Männer, die für eine Stadt entscheiden – zum Beispiel über Straßen, Schulen und Spielplätze."],
      anwohner: ["Anwohner", "Menschen, die direkt nebenan wohnen."],
      aufforderung: ["Aufforderung", "Ein Satz, der sagt, was jemand tun soll: Öffnen Sie den Schulhof!"]
    },
    stationen: [
      { kurz: "Regelheft", ober: "Verstehen", titel: "Was ist ein Leserbrief?", teile: [
        { art: "text", html: "<p class=\"lead\">In der Zeitung steht ein <button class=\"term\" data-t=\"artikel\">Artikel</button> – und du denkst: „Das sehe ich ganz anders!“ Dann kannst du der <button class=\"term\" data-t=\"redaktion\">Redaktion</button> schreiben. So ein Brief heißt <button class=\"term\" data-t=\"leserbrief\">Leserbrief</button>. Die Zeitung druckt viele davon ab, damit auch andere deine Meinung lesen.</p>" },
        { art: "regelheft", id: "heft", tag: "Regelheft", titel: "Schreibe den Eintrag in dein Regelheft", lead: "Schreibe sauber ab. Die Überschrift unterstreichst du mit dem Lineal, die roten Wörter schreibst du farbig.", kopf: "Der Leserbrief",
          html: "<p>Ein Leserbrief ist ein Brief an eine Zeitung. Ich sage darin meine Meinung zu einem Artikel oder zu einem Thema und begründe sie. Ich will die Leser überzeugen.</p>" +
            "<p><u>So ist er aufgebaut:</u></p>" +
            "<ol><li><span class=\"rot\">Anrede:</span> Sehr geehrte Redaktion,</li>" +
            "<li><span class=\"rot\">Einleitung:</span> Worum geht es? Was ist meine Meinung?</li>" +
            "<li><span class=\"rot\">Hauptteil:</span> Argumente für meine Seite. Jedes Argument hat drei Teile: Behauptung – Begründung (weil, denn) – Beispiel</li>" +
            "<li><span class=\"rot\">Schluss:</span> ein Wunsch oder eine Aufforderung</li>" +
            "<li><span class=\"rot\">Gruß und Name:</span> Mit freundlichen Grüßen</li></ol>" +
            "<p><u>Sprache:</u> sachlich und höflich</p>" },
        { art: "mc", id: "heft-check", tag: "Hast du es verstanden?", fragen: [
          { q: "An wen schreibst du einen Leserbrief?", o: ["an die Redaktion einer Zeitung", "an deine beste Freundin", "an deine Lehrkraft", "an dich selbst – wie in ein Tagebuch"], a: 0, e: "Ein Leserbrief geht an die Zeitung. Druckt die Redaktion ihn ab, lesen ihn viele Menschen." },
          { q: "Was willst du mit einem Leserbrief erreichen?", o: ["Ich will die Leser von meiner Meinung überzeugen.", "Ich will eine spannende Geschichte erzählen.", "Ich will nur berichten, was passiert ist.", "Ich will einen Artikel Wort für Wort abschreiben."], a: 0, e: "Du sagst deine Meinung und begründest sie – damit andere dir zustimmen." }] }
      ] },
      { kurz: "Beispiel", ober: "Lesen und untersuchen", titel: "Ein Leserbrief als Beispiel", teile: [
        { art: "beispiel", kopf: "Aus der Zeitung · Auwalder Bote, 9. Oktober", html: "<p><strong>Tempo 30 vor der Schule?</strong></p><p>Auwald. Vor der Mittelschule an der Lindenstraße dürfen Autos 50 km/h fahren. Viele Eltern fordern Tempo 30. Manche Autofahrer sind dagegen: Sie befürchten Staus am Morgen. Der <button class=\"term\" data-t=\"stadtrat\">Stadtrat</button> entscheidet im November. Was meinen Sie? Schreiben Sie uns!</p>" },
        { art: "text", html: "<p>Eine Schülerin hat der Zeitung geantwortet. Lies ihren Leserbrief genau – er ist dein Muster für später.</p>" },
        { art: "lesetext", lesetext: "arg-leserbrief-tempo" },
        { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
          { q: "Worauf antwortet die Schülerin?", o: ["auf den Artikel „Tempo 30 vor der Schule?“ vom 9. Oktober", "auf ein Gespräch mit ihrer Lehrerin", "auf einen Brief des Stadtrats", "auf eine Sendung im Radio"], a: 0, e: "Das steht gleich in der Einleitung (Z. 2). So weiß die Redaktion sofort, worum es geht." },
          { q: "Auf welcher Seite steht sie?", o: ["Sie ist für Tempo 30.", "Sie ist gegen Tempo 30.", "Sie kann sich nicht entscheiden.", "Sie nennt Gründe für beide Seiten."], a: 0, e: "„… und bin für Tempo 30“ (Z. 4). In einem Leserbrief vertrittst du eine Seite – und nennst dafür deine Argumente." },
          { q: "Was steht im Schluss des Briefs?", o: ["eine Aufforderung an den Stadtrat", "ein drittes Argument", "eine Entschuldigung", "eine Frage an die Leser"], a: 0, e: "„Führen Sie Tempo 30 vor unserer Schule ein!“ (Z. 13–14) – der Schluss sagt, was geschehen soll." }] },
        { art: "paare", id: "teile", tag: "Zuordnen", titel: "Welcher Teil des Briefs ist das?", paare: [
          ["Sehr geehrte Redaktion,", "Anrede"],
          ["In Ihrem Artikel … fragen Sie nach der Meinung der Leser. Ich bin für Tempo 30.", "Einleitung"],
          ["Tempo 30 macht unseren Schulweg sicherer. Ein Auto, das langsam fährt, …", "Hauptteil"],
          ["Deshalb bitte ich den Stadtrat: Führen Sie Tempo 30 ein!", "Schluss"],
          ["Mit freundlichen Grüßen", "Gruß"]] },
        { art: "merke", kopf: "Die drei B", html: "<p>Ein <button class=\"term\" data-t=\"argument\">Argument</button> überzeugt, wenn es drei Teile hat:</p><ul><li><button class=\"term\" data-t=\"behauptung\">Behauptung</button>: Was sage ich? – Tempo 30 macht den Schulweg sicherer.</li><li><button class=\"term\" data-t=\"begruendung\">Begründung</button>: Warum ist das so? – …, weil … / denn … / nämlich …</li><li><button class=\"term\" data-t=\"beispiel\">Beispiel</button>: Wo sieht man das? – Zum Beispiel … / Letzte Woche …</li></ul>" },
        { art: "sort", id: "dreib", tag: "Sortieren", titel: "Behauptung, Begründung oder Beispiel?", lead: "Die Sätze stammen aus dem Leserbrief.", buckets: ["Behauptung", "Begründung", "Beispiel"], cols: 200, items: [
          { t: "Tempo 30 macht unseren Schulweg sicherer.", b: 0 }, { t: "Außerdem wird es im Unterricht leiser.", b: 0 },
          { t: "Ein Auto, das langsam fährt, kommt nämlich viel früher zum Stehen.", b: 1 }, { t: "…, weil langsame Autos weniger Lärm machen.", b: 1 },
          { t: "Letzte Woche lief ein Fünftklässler plötzlich auf die Straße, und ein Auto konnte gerade noch bremsen.", b: 2 }, { t: "In unserem Klassenzimmer müssen wir zum Beispiel oft die Fenster schließen.", b: 2 }] }
      ] },
      { kurz: "Dein Brief", ober: "Schreiben", titel: "Jetzt du: Schritt für Schritt zum Leserbrief", teile: [
        { art: "beispiel", kopf: "Aus der Zeitung · Auwalder Bote, 14. Oktober", html: "<p><strong>Schulhof am Nachmittag offen?</strong></p><p>Auwald. Die Stadt überlegt, den Schulhof der Mittelschule nachmittags bis 19 Uhr und am Wochenende zu öffnen. Kinder und Jugendliche könnten dort Tischtennis und Basketball spielen. Einige <button class=\"term\" data-t=\"anwohner\">Anwohner</button> sind dagegen: Sie befürchten Lärm und Müll. Der Stadtrat entscheidet im November. Was meinen Sie? Schreiben Sie uns!</p>" },
        { art: "karten", titel: "Für welche Seite schreibst du?", lead: "Entscheide dich für <strong>eine</strong> Seite. Die Stichwörter helfen dir – eigene Ideen sind genauso gut.", karten: [
          { ic: "👍", titel: "Dafür: Der Schulhof soll offen sein", text: "Platz zum Spielen · mehr Bewegung · Freunde treffen · sicher, weil dort keine Autos fahren" },
          { ic: "👎", titel: "Dagegen: Der Schulhof soll zu bleiben", text: "Lärm für die Nachbarn · Müll am Montag · etwas geht kaputt · niemand passt auf" }] },
        { art: "text", html: "<p>Du schreibst deinen Leserbrief in kleinen Schritten. Nach jedem Schritt tippst du auf <strong>„✨ KI korrigiert meinen Text“</strong>: Rechtschreibfehler bessert die KI gleich aus. Was nicht passt, streicht sie durch und schreibt daneben, wie es besser ist. Fehlt ein Teil, ergänzt du ihn selbst.</p><p><strong>Wichtig:</strong> Schreibe nirgends deinen Namen. Am Ende unterschreibst du mit „Eine Schülerin der 7. Klasse“ oder „Ein Schüler der 7. Klasse“.</p>" },
        { art: "korrigieren", id: "anrede", tag: "Schritt 1 · ✨ KI korrigiert", titel: "Anrede und Einleitung", min: 15, zeilen: 4,
          auftrag: "<p>Schreibe die <strong>Anrede</strong> und die <strong>Einleitung</strong>. In der Einleitung steht der <button class=\"term\" data-t=\"bezug\">Bezug</button> (Auf welchen Artikel antwortest du?) und deine Meinung.</p>",
          bausteine: [
            { name: "Anrede", was: "höflich, an die Redaktion", ki: "eine höfliche Anrede, die zu einem Brief an eine Zeitung passt (z. B. Sehr geehrte Redaktion, / Liebe Redaktion, / Sehr geehrte Damen und Herren,)" },
            { name: "Bezug", was: "Worum geht es? Auf welchen Artikel antwortest du?", ki: "es wird klar, worum es geht – der Artikel oder das Thema (Schulhof am Nachmittag öffnen) wird genannt; Titel und Datum dürfen fehlen" },
            { name: "Meinung", was: "Bist du dafür oder dagegen?", ki: "es wird klar, ob das Kind dafür oder dagegen ist" }],
          starter: ["Sehr geehrte Redaktion,", "in Ihrem Artikel „Schulhof am Nachmittag offen?“ vom 14. Oktober …", "Ich bin dafür, dass …", "Ich bin dagegen, dass …"],
          muster: "Sehr geehrte Redaktion,\n\nin Ihrem Artikel „Schulhof am Nachmittag offen?“ vom 14. Oktober fragen Sie nach der Meinung der Leser. Ich gehe selbst auf die Mittelschule und bin dafür, dass der Schulhof am Nachmittag offen ist." },
        { art: "korrigieren", id: "arg1", tag: "Schritt 2 · ✨ KI korrigiert", titel: "Mein erstes Argument", min: 20, zeilen: 5,
          auftrag: "<p>Schreibe dein <strong>erstes Argument</strong> für deine Seite. Es braucht alle drei Teile: <strong>Behauptung, Begründung und Beispiel</strong>.</p>",
          bausteine: DREI_B,
          starter: ["Ein offener Schulhof …", "Ein Grund ist, dass …", "…, weil …", "Denn …", "Zum Beispiel …"],
          muster: "Ein offener Schulhof gibt uns endlich einen Platz zum Spielen. In Auwald gibt es nämlich nur einen kleinen Spielplatz für die Kleinen. Meine Freunde und ich stehen zum Beispiel nachmittags oft vor dem Supermarkt, weil wir nicht wissen, wohin." },
        { art: "korrigieren", id: "arg2", m7: true, tag: "Schritt 3 · ✨ KI korrigiert", titel: "Mein zweites Argument", min: 20, zeilen: 5,
          auftrag: "<p>Ein Argument allein reicht selten. Schreibe ein <strong>zweites Argument</strong> für deine Seite – wieder mit Behauptung, Begründung und Beispiel. Knüpfe an: <em>Außerdem …</em>, <em>Hinzu kommt, dass …</em>, <em>Ein weiterer Grund ist …</em></p>",
          bausteine: DREI_B,
          starter: ["Außerdem …", "Hinzu kommt, dass …", "…, denn …", "Das sieht man zum Beispiel …"],
          muster: "Außerdem bewegen wir uns dann mehr, denn auf dem Schulhof stehen Tischtennisplatten und ein Basketballkorb. In den Pausen sind die Platten zum Beispiel immer besetzt. Am Nachmittag hätten wir endlich Zeit für ein ganzes Spiel." },
        { art: "korrigieren", id: "schluss", tag: "Schritt 4 · ✨ KI korrigiert", titel: "Schluss und Gruß", min: 10, zeilen: 4,
          auftrag: "<p>Schreibe den <strong>Schluss</strong>: Sag kurz, was geschehen soll – als Wunsch oder als <button class=\"term\" data-t=\"aufforderung\">Aufforderung</button> an den Stadtrat. Darunter stehen der <strong>Gruß</strong> und die Unterschrift (ohne deinen Namen).</p>",
          bausteine: [
            { name: "Schlusssatz", was: "ein Wunsch oder eine Aufforderung: Was soll geschehen?", ki: "ein Satz, der das Ergebnis zieht: die Meinung noch einmal, ein Wunsch, eine Bitte oder eine Aufforderung (z. B. an den Stadtrat)" },
            { name: "Gruß", was: "Mit freundlichen Grüßen / Viele Grüße – und die Unterschrift", ki: "eine Grußformel am Ende (z. B. Mit freundlichen Grüßen / Viele Grüße). Unterschrieben wird ohne Namen, etwa mit „Ein Schüler der 7. Klasse“ – das ist so gewollt. An der Unterschrift besserst du nur die Rechtschreibung aus; ob dort Schüler oder Schülerin steht, bleibt, wie das Kind es geschrieben hat. Fehlt die Unterschrift, zählt der Gruß trotzdem." }],
          starter: ["Deshalb bitte ich den Stadtrat: …", "Ich hoffe, dass …", "Mit freundlichen Grüßen", "Eine Schülerin der 7. Klasse", "Ein Schüler der 7. Klasse"],
          muster: "Deshalb bitte ich den Stadtrat: Öffnen Sie den Schulhof am Nachmittag!\n\nMit freundlichen Grüßen\nEine Schülerin der 7. Klasse" },
        { art: "zusammen", tag: "Dein Ergebnis", titel: "Dein Leserbrief am Stück", lead: "Hier setzt die Seite deine Schritte zusammen. Lies deinen Brief einmal halblaut: Klingt er <button class=\"term\" data-t=\"sachlich\">sachlich</button> und höflich? Würde er dich <button class=\"term\" data-t=\"ueberzeugen\">überzeugen</button>?",
          aus: ["anrede", "arg1", "arg2", "schluss"], leer: "Hier erscheint dein Leserbrief, sobald du oben geschrieben hast." },
        // Zwei Musterlösungen (Text der Lehrkraft, 14.10.2026) – erst sichtbar, wenn die Lehrkraft „arg-08-loesung“ freischaltet
        { art: "loesungen", id: "loesungen", tag: "Musterlösungen", titel: "Zwei Musterlösungen: Dafür und Dagegen", freigabe: "arg-08-loesung",
          lead: "Tippe auf eine Lösung und vergleiche sie mit deinem Brief: Hat jedes Argument Behauptung, Begründung und Beispiel?",
          loesungen: [
            { knopf: "👍 Musterlösung: Dafür", kopf: "Musterlösung · Dafür",
              html: "<p><strong>Sehr geehrte Redaktion,</strong></p>" +
                "<p>in Ihrem Artikel „Schulhof am Nachmittag offen?“ geht es darum, ob der Schulhof nachmittags geöffnet werden soll.</p>" +
                "<p>Ich bin <strong>dafür</strong>. Dafür habe ich zwei Gründe.</p>" +
                "<p><strong>Zum einen</strong> haben Kinder mehr Platz zum Spielen. Das ist wichtig, weil sie sich bewegen sollen. Zum Beispiel können sie auf dem Schulhof Basketball spielen.</p>" +
                "<p><strong>Zum anderen</strong> können Kinder dort sicher spielen. Denn auf dem Schulhof fahren keine Autos. Zum Beispiel können sie dort mit ihren Freunden Tischtennis spielen, ohne auf Autos achten zu müssen.</p>" +
                "<p><strong>Deshalb</strong> finde ich, dass der Schulhof geöffnet werden sollte.</p>" +
                "<p>Mit freundlichen Grüßen<br>JM</p>" },
            { knopf: "👎 Musterlösung: Dagegen", kopf: "Musterlösung · Dagegen",
              html: "<p><strong>Sehr geehrte Redaktion,</strong></p>" +
                "<p>in Ihrem Artikel „Schulhof am Nachmittag offen?“ geht es darum, ob der Schulhof nachmittags geöffnet werden soll.</p>" +
                "<p>Ich bin <strong>dagegen</strong>. Dafür habe ich zwei Gründe.</p>" +
                "<p><strong>Zum einen</strong> könnte es auf dem Schulhof sehr laut werden. Das würde die Nachbarn stören, weil sie sich nicht mehr ausruhen können. Zum Beispiel könnten Jugendliche bis zum Abend laut Basketball spielen.</p>" +
                "<p><strong>Zum anderen</strong> könnte viel Müll entstehen. Denn manche Jugendliche werfen ihren Abfall auf den Boden. Zum Beispiel könnten am Montag leere Flaschen und Verpackungen auf dem Schulhof liegen.</p>" +
                "<p><strong>Deshalb</strong> finde ich, dass der Schulhof geschlossen bleiben sollte.</p>" +
                "<p>Mit freundlichen Grüßen<br>JM</p>" }] }
      ] },
      { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
        { art: "luecke", id: "merk", tag: "Lückentext", absaetze: [
          ["Ein Leserbrief ist ein Brief an eine ", { g: "Zeitung" }, ". Ich sage darin meine ", { g: "Meinung" }, " und begründe sie."],
          ["Jedes Argument hat drei Teile: Behauptung, ", { g: "Begründung" }, " und ", { g: "Beispiel" }, "."],
          ["Am Schluss steht ein Wunsch oder eine ", { g: "Aufforderung" }, ". Der Ton bleibt ", { g: "sachlich" }, " und höflich."]], extra: ["Geschichte", "lustig"] },
        { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
          ["Ein Leserbrief beginnt mit einer Anrede und endet mit einem Gruß.", true],
          ["In der Einleitung sage ich, worum es geht und was ich meine.", true],
          ["Eine Behauptung überzeugt auch ohne Begründung.", false],
          ["Ein Beispiel zeigt an einem einzelnen Fall, dass mein Argument stimmt.", true],
          ["In einem Leserbrief darf ich Leute beschimpfen, die anderer Meinung sind.", false],
          ["In einem Leserbrief nenne ich Argumente für meine Seite.", true]] }
      ] }
    ],
    weiter: { href: "arg_07.html", titel: "Stellungnahme und Leserbrief", text: "Im nächsten Modul nimmst du einen Leserbrief genau auseinander, entkräftest einen Einwand und schreibst einen ganzen Brief am Stück." }
  });
})();
