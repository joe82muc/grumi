/* Deutsch 8 · Beruf, Kommunikation und Präsentation · Modul 1: Das Bewerbungsschreiben
   (Praktikumsanzeige auswerten; Aufbau eines Anschreibens: Absender, Empfänger, Ort und Datum, Betreff, Anrede, Einleitung,
   Hauptteil, Schluss, Grußformel; förmlicher Ton mit „Sie“; was nicht hineingehört; Fehler in einem schwachen Anschreiben
   finden und einzelne Stellen verbessern; M8: Stärken mit Beispiel belegen, Schlagwörter vermeiden; zum Schluss in der
   Schreibwerkstatt ein Anschreiben an eine erfundene Gärtnerei – mit den Angaben einer erfundenen Person, nicht mit den
   eigenen; M8: zusätzlich Bezug auf die Anzeige und eine eigene Stärke mit Beispiel)
   LehrplanPLUS D8 3.2 (einfache formale Schreiben: Bewerbungsschreiben, Anschreiben verfassen; berufsorientierende Texte),
   2.3 (Informationen aus einer Anzeige entnehmen), 3.1 (Schreibplan, Texte überarbeiten), 4.1 (Sprachebene, Standardsprache).
   Texte: Anzeige „Praktikum in der Gärtnerei“ (texte/beruf/anzeige-gaertnerei.js), Entwürfe mit Fehlern
   (anschreiben-schwach-r.js und -m.js). Betrieb, Ort, Personen, Straßen und Adressen sind erfunden; in der Schreibaufgabe
   verwendet das Kind die Angaben der erfundenen Mia Kerschbaum, keine eigenen persönlichen Daten. */
D7Kit.seite({
  id: "beruf-01",
  titel: "Das Bewerbungsschreiben",
  einleitung: "Für ein Praktikum schreibst du ein Anschreiben. Es ist das Erste, was ein Betrieb von dir liest. Heute lernst du, wie es aufgebaut ist, welchen Ton es braucht und was nicht hineingehört – und schreibst dann selbst eines an eine Gärtnerei.",
  zeit: "etwa 60 Minuten",
  ziele: ["📋 Ich entnehme einer Anzeige, was der Betrieb erwartet.", "🧱 Ich kenne den Aufbau eines Anschreibens.", "🎩 Ich schreibe höflich und förmlich: mit „Sie“ und in ganzen Sätzen.", "🔍 Ich finde Fehler in einem Anschreiben und verbessere sie.", "✍️ Ich schreibe ein vollständiges Anschreiben."],
  quiz: { profi: "Anschreiben-Profi" },
  glossar: {
    anschreiben: ["Anschreiben", "Der Brief, der deinen Lebenslauf begleitet. Er sagt, worum du dich bewirbst und warum du dafür geeignet bist."],
    absender: ["Absender", "Wer den Brief schreibt. Name und Anschrift stehen oben links."],
    empfaenger: ["Empfänger", "Wer den Brief bekommt. Name und Anschrift des Betriebs stehen unter dem Absender."],
    betreff: ["Betreff", "Die fett oder deutlich gesetzte Zeile über der Anrede. Sie sagt in wenigen Wörtern, worum es geht."],
    anrede: ["Anrede", "Die Begrüßung am Anfang, zum Beispiel „Sehr geehrte Frau Hollerbusch,“."],
    grussformel: ["Grußformel", "Der höfliche Abschluss vor deinem Namen: „Mit freundlichen Grüßen“ – ohne Komma dahinter."],
    anlage: ["Anlage", "Etwas, das du dem Brief beilegst, zum Beispiel den Lebenslauf. Im Brief steht dann „Anlage: Lebenslauf“."],
    foermlich: ["förmlich", "Höflich und sachlich, wie man es gegenüber Fremden und in Briefen an Betriebe tut: mit „Sie“ und ohne Umgangssprache."],
    floskel: ["Floskel", "Eine Wendung, die jeder benutzt und die wenig sagt, zum Beispiel „Ich bin teamfähig und motiviert“ ohne ein Beispiel."]
  },
  stationen: [
    { kurz: "Anzeige", ober: "Lesen", titel: "Was sucht die Gärtnerei?", teile: [
      { art: "text", html: "<p class=\"lead\">Die Gärtnerei Hollerbusch in Wiesenfeld sucht Praktikantinnen und Praktikanten. Bevor du ein Anschreiben schreibst, liest du die Anzeige genau. Denn dein Brief soll genau auf diesen Betrieb passen.</p>" },
      { art: "lesetext", lesetext: "beruf-anzeige-gaertnerei" },
      { art: "beleg", id: "anz", tag: "Textstellen finden", titel: "Was steht in der Anzeige?", lesetext: "beruf-anzeige-gaertnerei", fragen: [
        { q: "Für welche Zeit werden Praktikumsplätze angeboten?", zeilen: [4, 5], e: "Das Datum musst du später im Anschreiben nennen, damit der Betrieb weiß, auf welche Woche du dich bewirbst.", tipp: "Suche zwei Daten mit Monat." },
        { q: "Was soll man laut Anzeige mitbringen?", zeilen: [9, 11], e: "Diese Eigenschaften will der Betrieb sehen. Im Anschreiben zeigst du, dass du sie hast.", tipp: "Suche die Stelle, die mit „Das bringst du mit“ beginnt." },
        { q: "An wen schickst du dein Anschreiben?", zeilen: [17, 19], e: "Die Anzeige nennt eine Ansprechpartnerin mit Namen und Anschrift. Du schreibst sie persönlich an.", tipp: "Suche einen Namen mit „Frau“." }
      ], hilfen: ["Die Anzeige ist in Abschnitte gegliedert. Jeder beginnt mit einem Stichwort: Das erwartet dich, das bringst du mit, das bieten wir.", "Die Adresse steht ganz unten."] },
      { art: "mc", id: "anz2", tag: "Anzeige auswerten", fragen: [
        { q: "Wie sprichst du die Person im Anschreiben an?", o: ["„Sehr geehrte Frau Hollerbusch,“", "„Liebe Gärtnerei Hollerbusch,“", "„Hallo Frau Hollerbusch,“"], a: 0, e: "Du kennst den Namen der Ansprechpartnerin, also benutzt du ihn. „Sehr geehrte Frau …“ ist die förmliche Anrede." },
        { q: "Welche Eigenschaft nennt die Anzeige ausdrücklich?", o: ["Pünktlichkeit und Zuverlässigkeit", "gute Noten in Mathematik", "Erfahrung in einer anderen Gärtnerei"], a: 0, e: "Arbeitsbeginn ist früh, deshalb ist Pünktlichkeit wichtig. Gute Noten oder Erfahrung verlangt die Anzeige nicht." }
      ] }
    ] },
    { kurz: "Aufbau", ober: "Verstehen", titel: "So ist ein Anschreiben gebaut", teile: [
      { art: "text", html: "<p class=\"lead\">Ein <button class=\"term\" data-t=\"anschreiben\">Anschreiben</button> ist ein förmlicher Brief. Er hat feste Bausteine in fester Reihenfolge. So findet die Leserin sofort, was sie sucht. Bring die Bausteine in die richtige Reihenfolge.</p>" },
      { art: "ordnen", id: "aufbau", tag: "Reihenfolge", titel: "Von oben nach unten", lead: "Der Brief wird auf Papier geschrieben. Welcher Baustein steht wo?", schritte: [
        "Absender: Name und Anschrift (oben links)",
        "Empfänger: Betrieb und Ansprechpartnerin mit Anschrift",
        "Ort und Datum",
        "Betreff",
        "Anrede",
        "Einleitung: woher ich von der Stelle weiß und worum ich mich bewerbe",
        "Hauptteil: wer ich bin und warum ich passe",
        "Schluss: Hinweis auf die Anlage und der Wunsch nach einem Gespräch",
        "Grußformel",
        "Unterschrift mit Vor- und Nachname"
      ] },
      { art: "merke", kopf: "MERKE: Der Aufbau eines Anschreibens", html: "<ul><li><b><button class=\"term\" data-t=\"absender\">Absender</button> und <button class=\"term\" data-t=\"empfaenger\">Empfänger</button></b> stehen oben, danach <b>Ort und Datum</b>.</li><li>Der <b><button class=\"term\" data-t=\"betreff\">Betreff</button></b> sagt in einer Zeile, worum es geht: „Bewerbung um einen Praktikumsplatz vom 9. bis 13. Februar“.</li><li>Die <b><button class=\"term\" data-t=\"anrede\">Anrede</button></b> nennt die Person mit Namen. Danach schreibst du klein weiter.</li><li><b>Einleitung, Hauptteil, Schluss:</b> kurz und genau – nicht länger als eine Seite.</li><li>Zum Schluss die <b><button class=\"term\" data-t=\"grussformel\">Grußformel</button></b> („Mit freundlichen Grüßen“) und deine Unterschrift. Auf die <b><button class=\"term\" data-t=\"anlage\">Anlage</button></b> (Lebenslauf) weist du im Schluss hin.</li></ul>" },
      { art: "sort", id: "teile", tag: "Zuordnen", titel: "Einleitung, Hauptteil oder Schluss?", lead: "Zu Mias Anschreiben: In welchen Teil gehört der Satz?", buckets: ["Einleitung", "Hauptteil", "Schluss"], items: [
        { t: "Ich habe Ihre Anzeige am Schwarzen Brett meiner Schule gelesen.", b: 0 },
        { t: "Gern möchte ich vom 9. bis 13. Februar ein Praktikum bei Ihnen machen.", b: 0 },
        { t: "Ich besuche die Klasse 8a der Mittelschule Wiesenfeld.", b: 1 },
        { t: "Ich arbeite gern draußen: Seit zwei Jahren pflege ich mit meiner Oma ein Gemüsebeet.", b: 1 },
        { t: "Meinen Lebenslauf finden Sie in der Anlage.", b: 2 },
        { t: "Über eine Einladung zu einem Gespräch freue ich mich sehr.", b: 2 }
      ] },
      { art: "mc", id: "form", tag: "Form", fragen: [
        { q: "Welcher Betreff ist am besten?", o: ["Bewerbung um einen Praktikumsplatz vom 9. bis 13. Februar", "Bewerbung", "Hallo, ich möchte gern ein Praktikum bei Ihnen machen"], a: 0, e: "Ein guter Betreff nennt, worum es geht (Praktikumsplatz) und für wann. „Bewerbung“ allein sagt zu wenig." },
        { q: "Wie geht es nach der Anrede „Sehr geehrte Frau Hollerbusch,“ weiter?", o: ["Klein: „ich habe Ihre Anzeige gelesen …“", "Groß: „Ich habe Ihre Anzeige gelesen …“", "Mit einem Doppelpunkt: „Ich habe Ihre Anzeige gelesen …“"], a: 0, e: "Nach dem Komma in der Anrede schreibst du klein weiter, außer das Wort wird ohnehin großgeschrieben (zum Beispiel „Sie“ oder ein Nomen)." }
      ] }
    ] },
    { kurz: "Ton", ober: "Sprache", titel: "Höflich, genau, ohne Floskeln", teile: [
      { art: "text", html: "<p class=\"lead\">Ein Anschreiben ist <button class=\"term\" data-t=\"foermlich\">förmlich</button>: Du schreibst Frau Hollerbusch mit „Sie“ an (groß geschrieben: Sie, Ihre, Ihnen), in ganzen Sätzen und ohne Umgangssprache. Und du sagst nur, was für diese Stelle wichtig ist.</p>" },
      { art: "paare", id: "ton", tag: "Paare finden", titel: "Locker oder förmlich?", lead: "Finde zu jeder lockeren Wendung die passende förmliche.", paare: [
        ["Hallo Gärtnerei,", "Sehr geehrte Frau Hollerbusch,"],
        ["ich hab eure Anzeige gesehen", "ich habe Ihre Anzeige gelesen"],
        ["Meldet euch schnell", "Über eine baldige Antwort freue ich mich"],
        ["Das wär echt cool", "Es wäre mir eine Freude"],
        ["Tschüss", "Mit freundlichen Grüßen"]
      ] },
      { art: "sort", id: "inhalt", tag: "Auswählen", titel: "Gehört das ins Anschreiben?", lead: "Entscheide: Gehört die Angabe hinein oder besser nicht?", buckets: ["gehört hinein", "gehört nicht hinein"], items: [
        { t: "Wo ich die Anzeige gelesen habe", b: 0 },
        { t: "Warum ich zu dieser Stelle passe – mit einem Beispiel", b: 0 },
        { t: "Der Hinweis auf meinen Lebenslauf in der Anlage", b: 0 },
        { t: "Meine Lieblingsserie und meine Spielkonsole", b: 1 },
        { t: "Die Frage, wie viel Geld ich bekomme", b: 1 },
        { t: "„Ich muss ein Praktikum machen, egal wo.“", b: 1 },
        { t: "Meine schlechteste Note", b: 1 },
        { t: "Mein Wunschzeitraum, passend zur Anzeige", b: 0 }
      ] },
      { art: "markieren", id: "mark", tag: "Markieren", titel: "Was klingt hier nicht förmlich?", satz: "Sehr geehrte Frau Hollerbusch, [[ich hab]] [[eure]] Anzeige gelesen und finde Pflanzen [[mega]]. [[Meldet euch bis morgen!]]", finde: "die vier Stellen, die in einem Anschreiben nicht passen", e: "Förmlich heißt es: „ich habe Ihre Anzeige gelesen und interessiere mich sehr für Pflanzen. Über eine baldige Antwort freue ich mich.“" },
      { art: "mc", id: "satz", tag: "Der überzeugende Satz", fragen: [
        { q: "Welcher Satz überzeugt einen Betrieb am meisten?", o: ["Ich arbeite gern draußen, denn seit zwei Jahren pflege ich mit meiner Oma ein Gemüsebeet.", "Ich bin zuverlässig, belastbar, flexibel und sehr motiviert.", "Ich finde Pflanzen irgendwie ganz nett."], a: 0, e: "Der erste Satz nennt eine Eigenschaft und ein Beispiel dazu. Aufzählungen von Eigenschaften ohne Beispiel sind Floskeln, und „irgendwie ganz nett“ zeigt kein Interesse." }
      ] }
    ] },
    { kurz: "Fehler", ober: "Untersuchen", titel: "Fehler finden und verbessern", teile: [
      { art: "text", nur: "R", html: "<p class=\"lead\">Luca will sich auch bei der Gärtnerei Hollerbusch bewerben. Sein erster Entwurf hat viele Schwächen. Lies ihn und finde sie.</p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Amelie hat sich ebenfalls bei der Gärtnerei Hollerbusch beworben. Ihr Entwurf sieht ordentlich aus, hat aber Schwächen, die ein Betrieb sofort bemerkt. Lies ihn und finde sie.</p>" },
      { art: "lesetext", lesetext: { R: "beruf-anschreiben-schwach-r", M: "beruf-anschreiben-schwach-m" } },
      { art: "beleg", id: "fehler", nur: "R", tag: "Fehler finden", titel: "Wo liegen Lucas Fehler?", lesetext: "beruf-anschreiben-schwach-r", fragen: [
        { q: "Betreff und Anrede sind zu locker. Wo stehen sie?", zeilen: [1, 2], e: "Besser: „Bewerbung um einen Praktikumsplatz vom 9. bis 13. Februar“ und „Sehr geehrte Frau Hollerbusch,“.", tipp: "Sie stehen ganz oben im Brief." },
        { q: "Luca sagt nicht, warum er zur Gärtnerei passt – im Gegenteil. Welche Zeilen zeigen, dass ihm der Betrieb gleichgültig ist?", zeilen: [5, 8], e: "„Irgendein Praktikum“ und „weil die Schule das verlangt“ zeigen kein Interesse. Besser: ein Grund, der zu dieser Gärtnerei passt.", tipp: "Suche die Sätze mit „irgendein“." },
        { q: "Der Schluss ist unhöflich. Wo?", zeilen: [11, 12], e: "„Meldet euch schnell“ ist ein Befehl, „Tschüss“ ein Abschied unter Freunden. Förmlich: „Über eine baldige Antwort freue ich mich. Mit freundlichen Grüßen“.", tipp: "Achte auf die vorletzte und die drittletzte Zeile." }
      ], hilfen: ["Lies zuerst die Zeile mit dem Betreff und die Anrede.", "Gute Anschreiben zeigen Interesse an genau diesem Betrieb."] },
      { art: "beleg", id: "fehler", nur: "M", tag: "Fehler finden", titel: "Wo liegen Amelies Fehler?", lesetext: "beruf-anschreiben-schwach-m", fragen: [
        { q: "Betreff und Anrede sind zu allgemein, obwohl die Anzeige eine Ansprechpartnerin nennt. Wo stehen sie?", zeilen: [3, 4], e: "Der Betreff „Bewerbung“ sagt nicht, um was. Und die Anrede sollte „Sehr geehrte Frau Hollerbusch,“ lauten.", tipp: "Sie stehen zwischen der Adresse und dem ersten Absatz." },
        { q: "Hier steht eine Aufzählung von Eigenschaften, aber kein einziges Beispiel. Wo?", zeilen: [7, 8], e: "Eigenschaften wie „teamfähig“ oder „flexibel“ kann jeder behaupten. Erst ein Beispiel macht sie glaubhaft.", tipp: "Suche die Aufzählung mit mehreren Eigenschaftswörtern." },
        { q: "Wo wirkt Amelie, als wäre ihr der Platz nicht wichtig?", zeilen: [12, 13], e: "Wer schreibt „suche ich mir eben einen anderen Betrieb“, zeigt, dass diese Stelle austauschbar ist.", tipp: "Lies den letzten Absatz vor dem Gruß." }
      ] },
      { art: "mc", id: "fehlerart", tag: "Fehlerarten", fragen: [
        { q: "Was fehlt in beiden Entwürfen?", o: ["das Datum und der Hinweis auf den Lebenslauf", "der Betreff", "die Grußformel"], a: 0, e: "Ein Betreff und ein Gruß sind vorhanden (wenn auch nicht gut). Datum und Hinweis auf die Anlage fehlen." },
        { q: "Woran merkt ein Betrieb am ehesten, dass du dich wirklich für ihn interessierst?", o: ["Du nennst einen Grund, der zu genau dieser Stelle passt.", "Du schreibst möglichst viele Eigenschaftswörter.", "Du schreibst, dass du den Platz dringend brauchst."], a: 0, e: "Ein Grund, der zur Anzeige passt, zeigt: Du hast sie gelesen und dir Gedanken gemacht." }
      ] },
      { art: "offen", id: "betreff", tag: "Selbst verbessern", titel: "Ein besserer Betreff", fragen: [
        { q: "Der Betreff soll in einer Zeile sagen, worum es geht und für wann. Schreibe einen besseren Betreff für die Bewerbung bei der Gärtnerei Hollerbusch.", m: "Bewerbung um einen Praktikumsplatz vom 9. bis 13. Februar", k: ["bewerbung|anfrage", "praktikum", "9|neun|februar"], min: 3 }
      ], tipp: "Drei Angaben genügen: Bewerbung – Praktikumsplatz – Zeitraum.", hilfen: ["Schau in die Anzeige: Wann findet das Praktikum statt?"] },
      { art: "offen", id: "luca", nur: "R", tag: "Selbst verbessern", titel: "Lucas Einleitung neu", fragen: [
        { q: "Luca schreibt: „ich hab eure Anzeige gesehen und will bei euch ein Praktikum machen.“ Schreibe diesen Satz förmlich und mit allen wichtigen Angaben neu: Wo hat er die Anzeige gelesen, worum bewirbt er sich, für wann?", m: "Ich habe Ihre Anzeige am Schwarzen Brett meiner Schule gelesen. Gern möchte ich vom 9. bis 13. Februar ein Praktikum in Ihrer Gärtnerei machen.", k: ["ihre|ihrer|ihnen|ihr ", "anzeige", "praktikum", "9|neun|februar"], min: 3 }
      ], tipp: "Schreibe „Sie“ groß und nenne den Zeitraum aus der Anzeige.", hilfen: ["Beginne so: „Ich habe Ihre Anzeige …“", "Die Wochen stehen in der Anzeige."] },
      { art: "offen", id: "amelie1", nur: "M", m7: true, tag: "Selbst verbessern", titel: "Aus der Floskel ein Beispiel machen", fragen: [
        { q: "Amelie schreibt: „Ich bin zuverlässig.“ Sie versorgt jeden Morgen vor der Schule ihre zwei Meerschweinchen, auch am Wochenende. Formuliere ein bis zwei Sätze, in denen die Stärke mit diesem Beispiel belegt wird.", m: "Ich bin zuverlässig: Seit zwei Jahren versorge ich jeden Morgen vor der Schule meine Meerschweinchen, auch am Wochenende.", k: ["zuverlässig", "jeden morgen|täglich|immer|seit zwei jahren|morgens|jeden tag", "meerschwein|tiere"], min: 3 }
      ], tipp: "Erst die Stärke nennen, dann das Beispiel, an dem man sie sieht.", hilfen: ["Beginne mit „Ich bin zuverlässig:“ und fahre mit einer Gewohnheit fort."] },
      { art: "offen", id: "amelie2", nur: "M", m7: true, tag: "Selbst verbessern", titel: "Den Schluss retten", fragen: [
        { q: "Amelies Schluss ist missglückt. Schreibe einen neuen Schluss in zwei Sätzen: Weise auf die Anlage hin und äußere den Wunsch nach einem Gespräch – ohne Ausweichdrohung.", m: "Meinen Lebenslauf finden Sie in der Anlage. Über eine Einladung zu einem Vorstellungsgespräch freue ich mich sehr.", k: ["lebenslauf|anlage|anhang", "einladung|gespräch|vorstellen", "freue|hoffe|würde mich"], min: 3 }
      ], tipp: "Zwei Dinge gehören in den Schluss: der Hinweis auf die Anlage und der Wunsch nach einem Gespräch.", hilfen: ["Beginne mit „Meinen Lebenslauf …“."] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Dein Anschreiben an die Gärtnerei", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt schreibst du ein vollständiges Anschreiben. Du schreibst es aber nicht über dich: Du schreibst für <b>Mia Kerschbaum</b>, eine erfundene Schülerin. Ihre Angaben stehen im Auftrag. Benutze nur diese – <b>keine eigene Adresse, keinen eigenen Namen</b>. In der Schreibwerkstatt arbeitest du in vier Schritten: <b>Planen → Schreiben → Überarbeiten → Abgeben</b>.</p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Schreibwerkstatt", titel: "Anschreiben für Mia an die Gärtnerei Hollerbusch", form: "brief",
        auftrag: {
          R: "<p>Mia Kerschbaum möchte ein Praktikum in der Gärtnerei Hollerbusch machen. <b>Verwende die Angaben von Mia – nicht deine eigene Adresse und deinen eigenen Namen.</b> Schreibe ihr Anschreiben (mindestens 90 Wörter).</p><p><b>Angaben:</b></p><ul><li>Absender: Mia Kerschbaum, Birkenweg 7, 99123 Wiesenfeld</li><li>Empfänger: Frau Karin Hollerbusch, Gärtnerei Hollerbusch, Feldweg 3, 99123 Wiesenfeld</li><li>Ort und Datum: Wiesenfeld, 14. Januar</li><li>Mia besucht die Klasse 8a der Mittelschule Wiesenfeld.</li><li>Sie hat die Anzeige am Schwarzen Brett ihrer Schule gelesen.</li><li>Sie möchte vom 9. bis 13. Februar ein Praktikum machen.</li><li>Mia arbeitet gern draußen: Seit zwei Jahren pflegt sie mit ihrer Oma ein Gemüsebeet. Biologie ist ihr Lieblingsfach.</li><li>Anlage: Lebenslauf</li></ul><p><b>Das gehört hinein:</b> Absender, Empfänger, Ort und Datum, Betreff, Anrede, Einleitung, Hauptteil, Schluss, Grußformel und Name. Schreibe förmlich mit „Sie“.</p>",
          M: "<p>Mia Kerschbaum möchte ein Praktikum in der Gärtnerei Hollerbusch machen. <b>Verwende die Angaben von Mia – nicht deine eigene Adresse und deinen eigenen Namen.</b> Schreibe ihr Anschreiben (mindestens 130 Wörter) und beziehe dich auf die Anzeige.</p><p><b>Angaben</b> (nicht alles gehört ins Anschreiben – wähle aus!):</p><ul><li>Absender: Mia Kerschbaum, Birkenweg 7, 99123 Wiesenfeld, Klasse 8a der Mittelschule Wiesenfeld</li><li>Empfänger: Frau Karin Hollerbusch, Gärtnerei Hollerbusch, Feldweg 3, 99123 Wiesenfeld</li><li>Ort und Datum: Wiesenfeld, 14. Januar</li><li>Anzeige am Schwarzen Brett der Schule gelesen; Praktikum vom 9. bis 13. Februar</li><li>Seit zwei Jahren pflegt Mia mit ihrer Oma ein Gemüsebeet. Als die Oma im Sommer zwei Wochen verreist war, hat Mia jeden Morgen vor der Schule allein gegossen und geerntet.</li><li>Biologie ist ihr Lieblingsfach (Note 2); in Mathematik hat sie eine 4.</li><li>Mia ist Torfrau in der Mannschaft ihres Sportvereins.</li><li>Sie spielt gern am Computer und schaut Serien.</li><li>Anlage: Lebenslauf</li></ul><p><b>Aufgabe:</b> Nimm Bezug auf mindestens zwei Erwartungen der Anzeige. Wähle <b>eine Stärke</b> von Mia und begründe sie mit einem Beispiel aus ihren Angaben. Lass Unpassendes weg.</p>"
        },
        material: { lesetext: "beruf-anzeige-gaertnerei" },
        min: { R: 90, M: 130 },
        kriterien: {
          R: ["Ich habe die Angaben von Mia verwendet – nicht meine eigene Adresse und meinen eigenen Namen.", "Absender, Empfänger, Ort und Datum, Betreff, Anrede, Grußformel und Name sind vorhanden.", "Die Einleitung sagt, woher Mia von der Stelle weiß und worum sie sich bewirbt.", "Der Hauptteil sagt, wer Mia ist und warum sie passt.", "Der Schluss weist auf die Anlage hin; ich schreibe förmlich mit „Sie“."],
          M: ["Ich habe die Angaben von Mia verwendet – nicht meine eigene Adresse und meinen eigenen Namen.", "Der Aufbau stimmt: Absender, Empfänger, Datum, aussagekräftiger Betreff, Anrede mit Namen, Einleitung, Hauptteil, Schluss, Gruß.", "Ich beziehe mich auf mindestens zwei Erwartungen der Anzeige.", "Eine Stärke wird mit einem Beispiel begründet, nicht nur behauptet; Unpassendes habe ich weggelassen.", "Die Sprache ist förmlich und ohne Floskeln; der Schluss weist auf die Anlage hin und wünscht ein Gespräch."]
        },
        starter: ["Betreff: Bewerbung um einen Praktikumsplatz …", "Sehr geehrte Frau Hollerbusch,", "ich habe Ihre Anzeige … gelesen.", "Gern möchte ich …", "Ich bin zuverlässig: …", "Meinen Lebenslauf finden Sie in der Anlage.", "Mit freundlichen Grüßen"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Anschreiben hat feste Bausteine: Absender, Empfänger, Datum, Betreff, Anrede, Text, Gruß.", true],
        ["Im Betreff steht möglichst nur das Wort „Bewerbung“.", false],
        ["Kennst du den Namen der Ansprechpartnerin, sprichst du sie mit Namen an.", true],
        ["Im Anschreiben schreibst du den Betrieb mit „Sie“ an.", true],
        ["Eine Stärke wird überzeugend, wenn du sie mit einem Beispiel belegst.", true],
        ["Die Frage nach der Bezahlung gehört in den Schluss des Anschreibens.", false],
        ["Auf den Lebenslauf in der Anlage weist du im Schluss hin.", true]
      ] }
    ] }
  ],
  weiter: { href: "beruf_02.html", titel: "Modul 2: Das Bewerbungsgespräch", text: "Dein Anschreiben hat überzeugt – du wirst eingeladen. Im nächsten Modul bereitest du dich auf das Gespräch vor und übst typische Fragen." }
});
