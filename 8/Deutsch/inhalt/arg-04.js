/* Deutsch 8 · Argumentieren und Stellung nehmen · Modul 4: Leserbrief und Kommentar
   (einem Zeitungsbericht die Argumente beider Seiten entnehmen, Aufbau des Leserbriefs: Anrede – Bezug – Meinung – Argumente –
   Bitte – Gruß, adressatengerechter Ton, Bericht/Leserbrief/Kommentar unterscheiden, M8: Zahlen prüfen, Wirkung von
   Formulierungen, Kritik; dann der eigene Leserbrief (M8: Leserbrief oder Kommentar mit Einwand und Abwägung) in der
   Schreibwerkstatt: Planen → Schreiben → Überarbeiten → Abgeben)
   LehrplanPLUS D8 3.2 (begründete Stellungnahme; R8: z. B. Leserbrief, Kommentar; M8: Stellungnahmen, Kommentare, Kritiken),
   2.3 (journalistische Textsorten unterscheiden, Information und Wertung, Intention erkennen), 3.3 (Texte überarbeiten).
   Wie ein Argument gebaut ist und wie man steigert, steht in arg-01 bis arg-03 und schr-04 – hier geht es um Form, Bezug,
   Ton und Wirkung.
   Texte (alle erfunden): Zeitungsbericht „Stadt will den Jugendtreff schließen“ (texte/argumentieren/jugendtreff-r.js und -m.js),
   Beispiel-Leserbrief zu einem anderen Bericht „Ohne Abendbus sitzen wir fest“ (texte/argumentieren/leserbrief-bus-r.js und -m.js).
   Zum Schreibauftrag (Jugendtreff) steht mit Absicht kein Musterbrief im Modul. */
D7Kit.seite({
  id: "arg-04",
  titel: "Leserbrief und Kommentar",
  einleitung: "In der Zeitung steht etwas, das dich nicht kaltlässt – und jetzt? Mit einem Leserbrief mischst du dich öffentlich ein. Heute untersuchst du, wie Leserbrief und Kommentar gebaut sind und welcher Ton überzeugt. Dann schreibst du der Zeitung selbst.",
  zeit: "etwa 60 Minuten – gut für eine Doppelstunde",
  ziele: ["📰 Ich entnehme einem Zeitungsbericht die Gründe beider Seiten.", "✉️ Ich kenne den Bauplan eines Leserbriefs – von der Anrede bis zum Gruß.", "🎯 Ich treffe den Ton: deutlich, aber sachlich.", "✍️ Ich schreibe und überarbeite einen eigenen Leserbrief."],
  haupttext: { R: "arg-jugendtreff-r", M: "arg-jugendtreff-m" },
  quiz: { profi: "Leserbrief-Profi" },
  glossar: {
    bericht: ["Bericht", "Ein Zeitungstext, der sachlich über ein Ereignis informiert. Die Meinung der Verfasserin oder des Verfassers steht nicht darin."],
    leserbrief: ["Leserbrief", "Eine Stellungnahme in Briefform an eine Zeitung. Sie antwortet auf einen Artikel und kann abgedruckt werden."],
    bezug: ["Bezug", "Der Hinweis, worauf du antwortest: Titel und Datum des Artikels."],
    sachlich: ["sachlich", "Bei der Sache bleiben: begründen, statt zu beschimpfen oder zu übertreiben."],
    adressat: ["adressatengerecht", "So geschrieben, dass Ton und Wortwahl zu den Menschen passen, die den Text lesen sollen."],
    kommentar: ["Kommentar", "Ein Meinungstext in der Zeitung: Eine Journalistin oder ein Journalist bewertet ein aktuelles Ereignis und begründet die Wertung."],
    rhetorisch: ["rhetorische Frage", "Eine Frage, auf die niemand antworten soll, weil die Antwort schon klar ist. Sie soll die Leser zum Zustimmen bringen."],
    kritik: ["Kritik", "Ein Text, der zum Beispiel einen Film, ein Buch oder eine Aufführung vorstellt und begründet bewertet."],
    einwand: ["Einwand", "Ein Gegenargument der anderen Seite."],
    abwaegen: ["abwägen", "Beide Seiten gegeneinanderhalten und begründet entscheiden, was schwerer wiegt."]
  },
  stationen: [
    { kurz: "Bericht", ober: "Lesen", titel: "Was steht in der Zeitung?", teile: [
      { art: "text", html: "<p class=\"lead\">Im „Lerchenfurter Anzeiger“ steht ein <button class=\"term\" data-t=\"bericht\">Bericht</button>, über den die ganze Stadt redet. Lies ihn genau: Wer will was – und mit welchen Gründen? Am Ende dieses Moduls antwortest du der Zeitung.</p>" },
      { art: "lesetext", lesetext: { R: "arg-jugendtreff-r", M: "arg-jugendtreff-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Was hat die Stadtverwaltung für den Jugendtreff „Alte Wache“ vorgeschlagen?", o: ["ihn zum Jahresende zu schließen", "ihn sofort abzureißen und neu zu bauen", "ihn künftig an fünf Tagen zu öffnen"], a: 0, e: "Das steht gleich im ersten Absatz – dort findest du in einem Bericht immer das Wichtigste." },
        { q: "Wer entscheidet endgültig über die Schließung des Jugendtreffs „Alte Wache“?", o: ["der Stadtrat in seiner Sitzung am 28. April", "die Bürgermeisterin ganz allein im Rathaus", "der Treff-Rat der Jugendlichen im Treff"], a: 0, e: "Die Verwaltung schlägt nur vor, der Stadtrat entscheidet. Wer etwas erreichen will, muss also die Stadträtinnen und Stadträte überzeugen." }
      ] },
      { art: "sort", id: "seiten", tag: "Beide Seiten", titel: "Für oder gegen die Schließung?", lead: "Ein guter Leserbrief kennt auch die Gründe der anderen Seite. Ordne die Aussagen aus dem Bericht.", buckets: ["spricht für die Schließung", "spricht gegen die Schließung"], cols: 240, items: [
        { t: "Die Sanierung würde rund 480.000 Euro kosten.", b: 0 },
        { t: "In der Woche werden weniger Besuche gezählt als vor fünf Jahren.", b: 0 },
        { t: "Einige Anwohner klagen über Lärm am Abend.", b: 0 },
        { t: "Im Treff kann man sich treffen, ohne etwas kaufen zu müssen.", b: 1 },
        { t: "Manchen Jugendlichen fehlt zu Hause ein ruhiger Platz zum Lernen.", b: 1 },
        { t: "Ohne Treff stehen die Jugendlichen vielleicht wieder am Bahnhof herum.", b: 1 }
      ] },
      { art: "beleg", id: "stellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "arg-jugendtreff-r", fragen: [
        { q: "In welchen Zeilen steht, was die Sanierung des Gebäudes kosten würde?", zeilen: [8, 10], e: "Diese Zahl ist das wichtigste Argument der Stadt. Wer ihr widersprechen will, muss darauf eingehen.", tipp: "Suche das Wort „Sanierung“ und eine Zahl mit „Euro“." },
        { q: "Wo erklärt Malik, warum heute weniger Besuche gezählt werden?", zeilen: [17, 21], e: "Früher war an fünf Tagen geöffnet, heute an drei – mit dieser Angabe lässt sich das Argument der Stadt entkräften.", tipp: "Suche die Stelle, an der Malik zum ersten Mal spricht." },
        { q: "Wo steht, was die Jugendlichen selbst zur Sanierung beitragen wollen?", zeilen: [41, 44], e: "Ein eigener Vorschlag macht einen Leserbrief stärker als bloßer Protest.", tipp: "Suche das Wort „Vorschlag“ gegen Ende des Berichts." }
      ], hilfen: ["Der Bericht ist nach Absätzen geordnet: erst die Stadt, dann die Jugendlichen, dann die Nachbarschaft.", "Zahlen findest du schnell, wenn du den Text nur nach Ziffern absuchst."] },
      { art: "beleg", id: "stellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "arg-jugendtreff-m", fragen: [
        { q: "In welchen Zeilen stehen die Zahlen, mit denen die Verwaltung den Rückgang der Besuche belegt?", zeilen: [18, 20], e: "220 Besuche pro Woche vor fünf Jahren, zuletzt etwa 120 – so steht es in der Vorlage der Verwaltung.", tipp: "Suche das Wort „Statistik“." },
        { q: "Wo begründet der Treffleiter, warum der Raum im Bürgerhaus kein gleichwertiger Ersatz wäre?", zeilen: [46, 48], e: "Er arbeitet mit einem Gegensatz: Der Treff „gehört“ den Jugendlichen, im Bürgerhaus wären sie „nur zu Gast“.", tipp: "Suche das Verb „bezweifelt“." },
        { q: "Wo steht, wie die Bürgermeisterin auf den Gegenvorschlag des Treff-Rats reagiert?", zeilen: [61, 63], e: "Sie sagt eine Prüfung zu, schränkt aber sofort ein. Ein Leserbrief kann genau hier ansetzen.", tipp: "Lies den vorletzten Absatz bis zum Ende." }
      ] },
      { art: "offen", id: "zahlen", m7: true, tag: "Zahlen prüfen", titel: "Hält das Argument mit den Besucherzahlen?", fragen: [
        { q: "Die Stadt sagt: Früher wurden rund 220 Besuche pro Woche gezählt, zuletzt nur noch etwa 120. Erkläre in ein bis zwei Sätzen, warum diese Zahlen allein nicht beweisen, dass der Treff weniger beliebt ist. Rechne nach.", m: "Der Treff hat nur noch an drei statt an fünf Tagen geöffnet. Früher kamen also etwa 44 Besuche auf einen Öffnungstag, zuletzt 40 – an einem offenen Tag ist der Treff fast so voll wie früher.", k: ["drei|3 tage|öffnungstag|geöffnet|offen|öffnungszeit", "40|44|pro tag|am tag|je tag|fast so|kaum|ähnlich|genauso|so voll"], min: 2 }
      ], tipp: "Teile die Besuche pro Woche durch die Zahl der Öffnungstage – einmal für früher, einmal für heute.", hilfen: ["Lies nach, was Malik über die Öffnungstage sagt.", "220 Besuche an fünf Tagen – wie viele sind das an einem Tag? Und 120 Besuche an drei Tagen?"] }
    ] },
    { kurz: "Leserbrief", ober: "Untersuchen", titel: "So antwortet man einer Zeitung", teile: [
      { art: "text", html: "<p class=\"lead\">Wer einer Zeitung seine Meinung schreibt, verfasst einen <button class=\"term\" data-t=\"leserbrief\">Leserbrief</button>. Ronja aus dem Ortsteil Oberfeld hat das getan – zu einem anderen Bericht derselben Zeitung. Lies ihren Brief einmal ganz und achte darauf, wie er anfängt und wie er aufhört.</p>" },
      { art: "beleg", id: "brief", nur: "R", tag: "Aufbau untersuchen", titel: "Wo steht das in Ronjas Leserbrief?", lesetext: "arg-leserbrief-bus-r", fragen: [
        { q: "In welchen Zeilen nennt Ronja den Bericht, auf den sie antwortet – mit Titel und Datum?", zeilen: [2, 3], e: "Das ist der Bezug: Alle Leser wissen sofort, worum es geht.", tipp: "Suche einen Titel in Anführungszeichen." },
        { q: "In welcher Zeile sagt Ronja zum ersten Mal ihre Meinung?", zeilen: [5, 5], e: "Die Meinung steht gleich nach dem Bezug – noch vor den Argumenten.", tipp: "Suche die Wörter „Meiner Meinung nach“." },
        { q: "Wo steht, worum Ronja die Stadtwerke bittet?", zeilen: [15, 16], e: "Ein Leserbrief sagt am Schluss, was geschehen soll. Erst danach kommen Gruß und Name.", tipp: "Lies den Absatz direkt vor dem Gruß." }
      ], hilfen: ["Ein Leserbrief ist wie ein Brief gebaut: oben die Anrede, unten Gruß und Name.", "Der Bezug steht direkt nach der Anrede, die Bitte direkt vor dem Gruß."] },
      { art: "beleg", id: "brief", nur: "M", tag: "Aufbau untersuchen", titel: "Wo steht das in Ronjas Leserbrief?", lesetext: "arg-leserbrief-bus-m", fragen: [
        { q: "In welchen Zeilen kündigt Ronja an, dass jetzt ihr gewichtigeres Argument kommt?", zeilen: [14, 15], e: "„Schwerer wiegt für mich …“ – so zeigt sie, dass sie ihre Argumente steigert.", tipp: "Suche ein Verb, das mit Gewicht zu tun hat." },
        { q: "Wo greift Ronja den Einwand der Gegenseite auf?", zeilen: [19, 21], e: "Sie nennt den Einwand der Stadtwerke und nimmt ihn ernst: „Natürlich verstehe ich …“", tipp: "Suche das Wort „Einwand“." },
        { q: "Wo beschreibt Ronja eine Lösung, die weniger kostet und die Jugendlichen trotzdem nach Hause bringt?", zeilen: [22, 24], e: "Der Kleinbus auf Bestellung kommt beiden Seiten entgegen – ein Kompromiss. Erst danach folgt ihre Bitte an die Stadtwerke.", tipp: "Die Stelle folgt unmittelbar auf den Einwand." }
      ] },
      { art: "ordnen", id: "aufbau", tag: "Reihenfolge", titel: "Der Bauplan eines Leserbriefs", lead: "Bring die Teile in die Reihenfolge, in der sie im Brief stehen.", schritte: [
        "Anrede: „Sehr geehrte Redaktion, …“",
        "Bezug: Titel und Datum des Artikels",
        "die eigene Meinung in einem klaren Satz",
        "Argumente mit Begründung und Beispiel",
        "Bitte, Forderung oder Vorschlag: Wer soll was tun?",
        "Gruß, Name und Wohnort"
      ] },
      { art: "merke", kopf: "MERKE: Der Leserbrief", html: "<p>Ein Leserbrief ist eine Stellungnahme in Briefform. Du schreibst an die Redaktion – lesen sollen ihn aber alle, auch die, die entscheiden.</p><ol><li><b>Anrede</b> – „Sehr geehrte Redaktion,“ oder „Sehr geehrte Damen und Herren,“</li><li><b><button class=\"term\" data-t=\"bezug\">Bezug</button></b> – Titel und Datum des Artikels, auf den du antwortest</li><li><b>Meinung</b> – klar und in einem Satz</li><li><b>Argumente</b> – wenige, aber begründet und mit Beispiel</li><li><b>Schluss</b> – Bitte, Forderung oder Vorschlag</li><li><b>Gruß</b> – „Mit freundlichen Grüßen“, Name und Wohnort</li></ol><p>Fasse dich kurz: Redaktionen drucken lieber kurze Briefe, lange werden gekürzt.</p>" },
      { art: "text", nur: "M", html: "<p>In Ronjas Brief steckt noch ein siebter Baustein: Vor dem Schluss greift sie den <button class=\"term\" data-t=\"einwand\">Einwand</button> der Stadtwerke auf und <button class=\"term\" data-t=\"abwaegen\">wägt ab</button>. Erst dadurch wird ihr Vorschlag glaubwürdig – und genau das gehört später auch in deinen Text.</p>" }
    ] },
    { kurz: "Ton", ober: "Üben", titel: "Der Ton macht den Leserbrief", teile: [
      { art: "sort", id: "ton", tag: "Ton", titel: "Würde die Redaktion das drucken?", lead: "Zum Jugendtreff sind schon erste Zuschriften eingegangen. Welche Sätze passen in einen Leserbrief, der überzeugen will?", buckets: ["passt", "passt nicht"], cols: 240, items: [
        { t: "Ihren Bericht vom 14. März habe ich mit großem Interesse gelesen.", b: 0 },
        { t: "Ich halte den Vorschlag der Stadtverwaltung für falsch und möchte das begründen.", b: 0 },
        { t: "Ich bitte den Stadtrat, die Entscheidung noch einmal zu überdenken.", b: 0 },
        { t: "Die im Rathaus haben doch keine Ahnung, was Jugendliche brauchen!", b: 1 },
        { t: "Hey Leute, euer Artikel war echt krass.", b: 1 },
        { t: "Wer so etwas beschließt, sollte sich schämen.", b: 1 }
      ] },
      { art: "merke", kopf: "MERKE: Deutlich, aber sachlich", html: "<ul><li><b>Sie-Form und Standardsprache</b> – du schreibst an Erwachsene, die du nicht kennst.</li><li><b>Meinung klar sagen</b> – „Ich halte … für falsch“ ist erlaubt und erwünscht.</li><li><b>Begründen statt beschimpfen</b> – wer beleidigt oder übertreibt, liefert der Gegenseite einen Grund, nicht mehr zuzuhören.</li><li><b>Bitten und vorschlagen</b> statt befehlen – „Ich bitte den Stadtrat, …“</li></ul><p>So bleibt dein Brief <button class=\"term\" data-t=\"sachlich\">sachlich</button> und <button class=\"term\" data-t=\"adressat\">adressatengerecht</button>: Der Ton passt zu denen, die ihn lesen.</p>" },
      { art: "mc", id: "form", tag: "Form", fragen: [
        { q: "Welche Anrede passt zu einem Leserbrief an eine Tageszeitung?", o: ["Sehr geehrte Redaktion,", "Hallo liebe Zeitung,", "An alle, die es angeht:"], a: 0, e: "Du kennst die Menschen in der Redaktion nicht persönlich – deshalb die höfliche Anrede mit „Sehr geehrte …“." },
        { q: "Warum nennst du im ersten Satz eines Leserbriefs Titel und Datum des Artikels?", o: ["Damit alle Leser wissen, worauf sich der Brief bezieht.", "Damit der Brief länger und wichtiger wirkt.", "Weil die Redaktion ihren Artikel sonst vergisst."], a: 0, e: "Dein Brief erscheint erst Tage später. Ohne Bezug wüsste niemand, wovon du sprichst." }
      ] },
      { art: "luecke", id: "rahmen", tag: "Lückentext", titel: "Der Rahmen eines Leserbriefs", absaetze: [
        ["Sehr geehrte ", { g: "Redaktion" }, ","],
        ["in Ihrem ", { g: "Bericht" }, " „Stadt will den Jugendtreff schließen“ vom 14. ", { g: "März" }, " schreiben Sie, dass die „Alte Wache“ geschlossen werden soll. Dazu möchte ich ", { g: "Stellung" }, " nehmen."],
        ["<i>(Hier stehen später deine Meinung und deine Argumente.)</i>"],
        ["Aus diesen Gründen ", { g: "bitte" }, " ich den Stadtrat, den Vorschlag noch einmal zu prüfen."],
        ["Mit freundlichen ", { g: "Grüßen" }]
      ], extra: ["Leute", "Tschüss"], hilfen: ["Fang mit den Lücken an, bei denen du sicher bist – zum Beispiel beim Gruß.", "Zwei Wörter bleiben übrig: Sie passen nicht zum Ton eines Leserbriefs."] },
      { art: "offen", id: "sachlich", tag: "Selbst formulieren", titel: "Aus Ärger wird ein Argument", fragen: [
        { q: "Dieser Satz würde nie gedruckt: „Die im Rathaus haben doch keine Ahnung, was Jugendliche brauchen!“ Formuliere ihn so um, dass er sachlich ist und in einen Leserbrief passt.", m: "Ich habe den Eindruck, dass die Stadtverwaltung zu wenig darüber weiß, was Jugendliche in ihrer Freizeit brauchen.", k: ["eindruck|meiner meinung|ich finde|ich denke|ich glaube|aus meiner sicht|meines erachtens|ich meine|offenbar|vielleicht|scheint|wirkt", "stadt|rathaus|verwaltung|bürgermeister"], min: 2 }
      ], tipp: "Behalte den Kern (die Stadt weiß zu wenig über die Jugendlichen), aber streiche das Abfällige und das Ausrufezeichen. Beginne zum Beispiel mit „Ich habe den Eindruck, dass …“.", hilfen: ["Welche Wörter klingen abfällig? Ersetze sie.", "So kannst du anfangen: „Meiner Meinung nach weiß die Stadtverwaltung …“"] },
      { art: "mc", id: "wirkung", m7: true, tag: "Wirkung", titel: "Welche Formulierung erreicht mehr?", fragen: [
        { q: "Zwei Schlusssätze: (A) „Der Stadtrat muss diesen Unsinn sofort stoppen!“ – (B) „Ich bitte den Stadtrat, den Vorschlag der Jugendlichen ernsthaft zu prüfen.“ Welcher erreicht bei den Stadträtinnen und Stadträten vermutlich mehr – und warum?", o: ["B, weil er die Leser als Entscheider ernst nimmt und einen gangbaren Schritt nennt.", "A, weil ein Befehl mit Ausrufezeichen mehr Druck macht und deshalb befolgt wird.", "Beide gleich, weil es im Leserbrief nur auf die Argumente im Hauptteil ankommt."], a: 0, e: "Wer überzeugt werden soll, will nicht beschimpft werden. Satz B sagt außerdem genau, was geschehen soll – das macht es leicht, zuzustimmen." }
      ] }
    ] },
    { kurz: "Kommentar", ober: "Verstehen", titel: "Der Kommentar: Die Zeitung bezieht Stellung", teile: [
      { art: "text", html: "<p class=\"lead\">Auch die Zeitung hat eine Meinung zum Abendbus. Sie steht aber nicht im Bericht, sondern daneben – in einem eigenen Text. Lies ihn und vergleiche ihn im Kopf mit Ronjas Leserbrief.</p>" },
      { art: "beispiel", kopf: "Aus dem Lerchenfurter Anzeiger (erfunden)", html: "<p><b>Mut zum kleinen Bus</b><br><i>Ein Kommentar von Valentin Brettschneider</i></p><p>Fünf Fahrgäste in einem Bus mit fünfzig Sitzen – das ist teuer und wenig sinnvoll. Dass die Stadtwerke hier den Rotstift ansetzen, ist verständlich. Doch wer deshalb gleich die ganze Verbindung kappt, macht es sich zu leicht. Sollen Jugendliche aus Oberfeld etwa um sieben Uhr abends zu Hause sitzen? Die Lösung liegt auf der Hand: ein Rufbus, der nur fährt, wenn ihn jemand bestellt. Die Stadtwerke sollten ihn wenigstens ein Jahr lang ausprobieren, statt einen ganzen Ortsteil abzuhängen.</p>" },
      { art: "mc", id: "komm", tag: "Kommentar untersuchen", fragen: [
        { q: "Woran erkennst du einen Kommentar auf den ersten Blick – im Unterschied zum Leserbrief?", o: ["an Überschrift und Verfassername – Anrede und Gruß fehlen", "daran, dass er eine Meinung enthält – der Leserbrief nicht", "daran, dass er kürzer ist als jeder andere Zeitungstext"], a: 0, e: "Eine Meinung enthalten beide. Den Kommentar schreibt aber jemand aus der Redaktion – ohne Briefform." },
        { q: "Im Kommentar steht: „Sollen Jugendliche aus Oberfeld etwa um sieben Uhr abends zu Hause sitzen?“ Was bewirkt diese Frage?", o: ["Sie ist rhetorisch gemeint: Die Antwort ist klar, die Leser sollen zustimmen.", "Sie ist eine echte Frage: Der Journalist bittet die Stadtwerke um Auskunft.", "Sie ist eine Umfrage: Die Leser sollen der Zeitung ihre Antwort schicken."], a: 0, e: "Solche Fragen spitzen zu. In einem Bericht hätten sie nichts verloren – im Kommentar sind sie ein beliebtes Mittel." }
      ] },
      { art: "merke", kopf: "MERKE: Der Kommentar", html: "<ul><li><b>Wer schreibt?</b> Eine Journalistin oder ein Journalist der Zeitung – mit Namen.</li><li><b>Wozu?</b> Der <button class=\"term\" data-t=\"kommentar\">Kommentar</button> bewertet ein aktuelles Ereignis. Die Nachricht dazu steht im Bericht.</li><li><b>Wie gebaut?</b> Zugespitzte Überschrift – Einstieg: Worum geht es? – Wertung mit Argumenten – Schluss mit Forderung oder Ausblick.</li><li><b>Welche Sprache?</b> Wertende Wörter, anschauliche Bilder („den Rotstift ansetzen“), <button class=\"term\" data-t=\"rhetorisch\">rhetorische Fragen</button> – aber keine Beleidigungen.</li><li><b>Was fehlt?</b> Anrede, Bezugssatz und Gruß: Ein Kommentar ist kein Brief.</li></ul>" },
      { art: "sort", id: "sorte", tag: "Textsorten", titel: "Bericht, Leserbrief oder Kommentar?", buckets: ["Bericht", "Leserbrief", "Kommentar"], cols: 200, items: [
        { t: "informiert sachlich über ein Ereignis und lässt beide Seiten zu Wort kommen", b: 0 },
        { t: "Die Verfasserin oder der Verfasser sagt die eigene Meinung nicht.", b: 0 },
        { t: "beginnt mit einer Anrede und endet mit Gruß, Name und Wohnort", b: 1 },
        { t: "Eine Leserin oder ein Leser antwortet auf einen Artikel.", b: 1 },
        { t: "Ein Mitglied der Redaktion bewertet ein Ereignis.", b: 2 },
        { t: "hat eine zugespitzte Überschrift, aber keine Anrede", b: 2 }
      ] },
      { art: "merke", m7: true, kopf: "MERKE: Die Kritik", html: "<p>Mit dem Kommentar verwandt ist die <button class=\"term\" data-t=\"kritik\">Kritik</button>. Sie stellt etwas vor, das man sehen, hören oder lesen kann – einen Film, ein Buch, ein Konzert, eine Theateraufführung – und bewertet es.</p><ol><li><b>Informieren:</b> Was ist es, worum geht es? (ohne das Ende zu verraten)</li><li><b>Bewerten:</b> Was ist gelungen, was nicht – bei Handlung, Darstellern, Spannung, Sprache?</li><li><b>Begründen:</b> Jede Wertung braucht ein Beispiel.</li><li><b>Empfehlen:</b> Für wen lohnt es sich?</li></ol>" },
      { art: "sort", id: "kritik", m7: true, tag: "Kritik", titel: "Informiert der Satz – oder wertet er?", lead: "Die Sätze stammen aus einer Kritik in einer Schülerzeitung. Besprochen wird „Acht Tage Kerzenlicht“, ein Stück der Theater-AG (alles erfunden).", buckets: ["informiert", "wertet"], cols: 240, items: [
        { t: "Die Theater-AG zeigte das Stück am Freitagabend in der Aula.", b: 0 },
        { t: "Es handelt von einer Familie, die eine Woche ohne Strom auskommen muss.", b: 0 },
        { t: "Die Aufführung dauert etwa siebzig Minuten.", b: 0 },
        { t: "Am stärksten spielt die Darstellerin der Großmutter: Bei ihr sitzt jede Pointe.", b: 1 },
        { t: "Leider zieht sich der zweite Teil in die Länge.", b: 1 },
        { t: "Ein Abend, der sich lohnt – nicht nur für Eltern.", b: 1 }
      ] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Dein Text für den Anzeiger", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt antwortest du der Zeitung. In der Schreibwerkstatt arbeitest du in vier Schritten: <b>Planen → Schreiben → Überarbeiten → Abgeben</b>. Dein Text wird beim Schreiben automatisch gespeichert.</p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Schreibwerkstatt", titel: "Stellung nehmen: Soll der Jugendtreff schließen?", form: "brief",
        // eigene Planungsfelder (Brief + Argumente; „einwand“ nur für M8) – die Kennungen sind so gewählt, dass die Lehrkraft sie versteht
        plan: [
          { id: "adressat", label: "An wen schreibe ich?", hilfe: "Anrede und Ton – und wer soll sich am Ende angesprochen fühlen?" },
          { id: "bezug", label: "Worauf antworte ich?", hilfe: "Titel und Datum des Berichts – das gehört an den Anfang." },
          { id: "meinung", label: "Meine Meinung", hilfe: "Ein klarer Satz: Ich bin dafür / dagegen, dass …" },
          { id: "argument-1", label: "Argument 1", hilfe: "Behauptung – Begründung (weil …) – Beispiel oder Angabe aus dem Bericht", zeilen: 3 },
          { id: "argument-2", label: "Argument 2 – mein stärkeres", hilfe: "Das überzeugendere Argument steht weiter hinten.", zeilen: 3 },
          { id: "einwand", label: "Was die Gegenseite sagt", hilfe: "Ein Einwand – und was du darauf antwortest.", zeilen: 3, nur: "M" },
          { id: "schluss", label: "Schluss", hilfe: "Bitte, Forderung oder Vorschlag an den Stadtrat – beim Leserbrief danach der Gruß." }
        ],
        auftrag: {
          R: "<p>Im „Lerchenfurter Anzeiger“ vom 14. März steht der Bericht <b>„Stadt will den Jugendtreff schließen“</b>. Die Redaktion bittet ihre Leserinnen und Leser um Zuschriften. Stell dir vor, du wohnst in Lerchenfurt.</p><p>Schreibe einen <b>Leserbrief</b> an die Redaktion (mindestens 110 Wörter):</p><ul><li>Beginne mit der Anrede und nenne Titel und Datum des Berichts.</li><li>Sag klar, ob du für oder gegen die Schließung bist.</li><li>Begründe deine Meinung mit <b>zwei Argumenten</b>. Jedes braucht eine Begründung und ein Beispiel – du darfst Angaben aus dem Bericht verwenden.</li><li>Schließe mit einer Bitte oder einem Vorschlag an den Stadtrat.</li><li>Ende mit dem Gruß. Unterschreibe nicht mit deinem echten Namen, sondern mit „Eine Schülerin aus Lerchenfurt“ oder „Ein Schüler aus Lerchenfurt“.</li></ul><p>Den Bericht kannst du jederzeit über den Knopf „Material“ einblenden.</p>",
          M: "<p>Im „Lerchenfurter Anzeiger“ vom 14. März steht der Bericht <b>„Stadt will den Jugendtreff schließen“</b>. Bis zur Entscheidung des Stadtrats veröffentlicht die Zeitung Zuschriften; auf ihrer Jugendseite dürfen Jugendliche außerdem einen Gastkommentar schreiben. Stell dir vor, du wohnst in Lerchenfurt.</p><p>Verfasse <b>einen Leserbrief oder einen Kommentar</b> (mindestens 160 Wörter). Entscheide dich für eine Form und halte sie durch:</p><ul><li><b>Leserbrief:</b> Anrede, Bezug auf den Bericht (Titel und Datum), Gruß. <b>Kommentar:</b> treffende Überschrift und Einstieg ins Thema – keine Anrede, kein Gruß.</li><li>Formuliere deine These und stütze sie mit <b>zwei bis drei Argumenten</b> in steigernder Reihenfolge. Belege mindestens ein Argument mit einer Zahl oder Aussage aus dem Bericht.</li><li>Greife <b>einen Einwand</b> der Gegenseite auf und wäge ab.</li><li>Schließe mit einer Forderung oder einem Kompromissvorschlag an den Stadtrat.</li><li>Triff den Ton: deutlich, aber sachlich. Unterschreibe nicht mit deinem echten Namen, sondern mit „Eine Schülerin aus Lerchenfurt“ oder „Ein Schüler aus Lerchenfurt“.</li></ul><p>Den Bericht kannst du jederzeit über den Knopf „Material“ einblenden.</p>"
        },
        material: { lesetext: { R: "arg-jugendtreff-r", M: "arg-jugendtreff-m" } },
        min: { R: 110, M: 160 },
        kriterien: {
          R: ["Mein Brief beginnt mit einer Anrede und nennt Titel und Datum des Berichts.", "Meine Meinung zur Schließung steht klar am Anfang.", "Ich habe zwei Argumente – jedes mit Begründung und Beispiel.", "Der Ton ist sachlich und höflich: Sie-Form, keine Beleidigungen.", "Am Schluss stehen eine Bitte oder ein Vorschlag an den Stadtrat und der Gruß."],
          M: ["Die Form stimmt: Leserbrief mit Anrede, Bezug und Gruß – oder Kommentar mit treffender Überschrift und ohne Anrede.", "Meine These ist eindeutig, und die Argumente stehen in steigernder Reihenfolge.", "Mindestens ein Argument stütze ich mit einer Zahl oder Aussage aus dem Bericht.", "Ich greife einen Einwand der Gegenseite auf und wäge ab.", "Der Ton ist deutlich, aber sachlich; der Schluss nennt eine Forderung oder einen Kompromissvorschlag."]
        },
        starter: {
          R: ["Sehr geehrte Redaktion,", "in Ihrem Bericht „Stadt will den Jugendtreff schließen“ vom 14. März …", "Meiner Meinung nach …", "Ein wichtiger Grund ist, dass …", "Hinzu kommt, dass …", "Deshalb bitte ich den Stadtrat, …", "Mit freundlichen Grüßen"],
          M: ["Sehr geehrte Damen und Herren,", "Ihr Bericht „Stadt will den Jugendtreff schließen“ vom 14. März …", "Zunächst …", "Noch wichtiger ist, dass …", "Zwar wendet die Stadt ein, dass …, doch …", "Ich bitte den Stadtrat deshalb, …"]
        } }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Leserbrief nennt am Anfang den Artikel, auf den er antwortet.", true],
        ["Solange die Meinung klar ist, darf ein Leserbrief die Gegenseite auch beschimpfen.", false],
        ["Einen Kommentar schreibt eine Journalistin oder ein Journalist; er bewertet ein Ereignis.", true],
        ["Ein Kommentar beginnt mit „Sehr geehrte Redaktion“ und endet mit einem Gruß.", false],
        ["Ein Bericht informiert sachlich – die Meinung der Verfasserin oder des Verfassers steht nicht darin.", true],
        ["Am Ende eines Leserbriefs steht, was geschehen soll: eine Bitte, eine Forderung oder ein Vorschlag.", true]
      ] }
    ] }
  ],
  weiter: { href: "arg_05.html", titel: "Modul 5: Diskutieren und moderieren", text: "Schriftlich hast du Stellung genommen. Im nächsten Modul geht es um das Gespräch: zuhören, nachfragen, zusammenfassen – und eine Diskussion leiten." }
});
