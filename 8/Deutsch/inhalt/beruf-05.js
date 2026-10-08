/* Deutsch 8 · Beruf, Kommunikation und Präsentation · Modul 5: Präsentieren und Rückmeldung geben
   (Kurzvortrag „Mein Wunschberuf in drei Minuten“ planen: Einstieg, Hauptteil in Punkten, Schluss, Zeitplan; Stichwortzettel
   statt ausformuliertem Text; Medien passend wählen – Gegenstand, Plakat, Folie – und beschriften; M8: analoge und digitale
   Medien abwägen, überladene Folie auf Stichpunkte kürzen; Körpersprache und Sprechweise; Feedback nach Kriterien: erst
   Gelungenes, dann ein Tipp, konkret und sachlich; zum Schluss eine schriftliche Rückmeldung zu einem beschriebenen Vortrag)
   LehrplanPLUS D8 1.2 (Vorträge und Präsentationen planen und halten, Medien einsetzen, Körpersprache und Sprechweise bewusst
   einsetzen, Rückmeldung geben und annehmen; M8: Medien abwägen, Rückmeldung nach Kriterien begründen), 1.3 (Rückmeldung geben),
   3.1 (Stichwortzettel, Schreibplan).
   Texte: Stichwortzettel der erfundenen Hanna (texte/beruf/stichwortzettel-baeckerin.js), beschriebener Vortrag des erfundenen
   Timo (vortrag-schreiner-r.js und -m.js). Personen und Betriebe sind erfunden; Angaben zu den Berufen allgemein und vorsichtig. */
D7Kit.seite({
  id: "beruf-05",
  titel: "Präsentieren und Rückmeldung geben",
  einleitung: "Im Berufsleben musst du manchmal vor anderen sprechen – im Praktikum, im Bewerbungsgespräch oder in der Berufsschule. Heute planst du einen Kurzvortrag über einen Wunschberuf, lernst, wie ein Stichwortzettel aussieht, und gibst am Ende einem Vortragenden eine Rückmeldung, die ihm wirklich hilft.",
  zeit: "etwa 50 Minuten",
  ziele: ["🧭 Ich plane einen Kurzvortrag mit Einstieg, Hauptteil und Schluss.", "📝 Ich arbeite mit einem Stichwortzettel statt mit einem ausformulierten Text.", "🖼️ Ich wähle Medien, die zu meinem Vortrag passen.", "🗣️ Ich achte auf Körpersprache und Sprechweise.", "💬 Ich gebe eine Rückmeldung: erst Gelungenes, dann ein Tipp."],
  quiz: { profi: "Präsentations-Profi" },
  glossar: {
    stichwortzettel: ["Stichwortzettel", "Ein Blatt oder Karten mit den wichtigsten Stichwörtern deines Vortrags – keine ausformulierten Sätze."],
    einstieg: ["Einstieg", "Der Anfang eines Vortrags. Er soll die Zuhörer neugierig machen, zum Beispiel mit einer Frage oder einem Gegenstand."],
    medien: ["Medien", "Alles, womit du deinen Vortrag unterstützt: Gegenstände, Plakat, Tafel, Folien oder eine digitale Präsentation."],
    blickkontakt: ["Blickkontakt", "Du schaust beim Sprechen abwechselnd verschiedene Zuhörer an."],
    rueckmeldung: ["Rückmeldung", "Eine Antwort auf einen Vortrag: Was war gut, und was könnte der Vortragende beim nächsten Mal verbessern? Sie wird auch „Feedback“ genannt."],
    kriterium: ["Kriterium", "Ein Merkmal, nach dem man etwas beurteilt, zum Beispiel „Lautstärke“ oder „Aufbau“."]
  },
  stationen: [
    { kurz: "Aufbau", ober: "Planen", titel: "Ein Vortrag in drei Minuten", teile: [
      { art: "text", html: "<p class=\"lead\">In der Berufsorientierung sollen alle ihren Wunschberuf in drei Minuten vorstellen. Hanna hat sich für den Beruf Bäckerin entschieden. Bevor sie den Vortrag hält, schreibt sie einen <button class=\"term\" data-t=\"stichwortzettel\">Stichwortzettel</button>. Lies ihn und beantworte die Fragen.</p>" },
      { art: "lesetext", lesetext: "beruf-stichwortzettel-baeckerin" },
      { art: "beleg", id: "zettel", tag: "Textstellen finden", titel: "Was steht auf dem Zettel?", lesetext: "beruf-stichwortzettel-baeckerin", fragen: [
        { q: "Womit beginnt Hanna ihren Vortrag?", zeilen: [2, 3], e: "Sie gibt Brötchen herum und stellt eine Frage. Der <button class=\"term\" data-t=\"einstieg\">Einstieg</button> macht neugierig und holt die Zuhörer ab.", tipp: "Suche das Wort EINSTIEG." },
        { q: "Wo steht, wie lange die Ausbildung dauert?", zeilen: [7, 8], e: "Das ist Punkt 2 im Hauptteil: drei Jahre, abwechselnd im Betrieb und in der Berufsschule.", tipp: "Suche die zweite Nummer des Hauptteils." },
        { q: "Woran will sich Hanna während des Vortrags erinnern?", zeilen: [14, 15], e: "Die letzte Zeile erinnert sie an Sprechweise, Blickkontakt und eine Pause. Solche Erinnerungen helfen, wenn man aufgeregt ist.", tipp: "Suche die Zeile mit „Nicht vergessen“." }
      ], hilfen: ["Die Teile sind in Großbuchstaben geschrieben: EINSTIEG, HAUPTTEIL, SCHLUSS."] },
      { art: "sort", id: "aufbau", tag: "Zuordnen", titel: "Einstieg, Hauptteil oder Schluss?", lead: "Ordne die Bausteine eines Kurzvortrags zu.", buckets: ["Einstieg", "Hauptteil", "Schluss"], items: [
        { t: "Den Zuhörern eine Frage stellen, um Interesse zu wecken", b: 0 },
        { t: "Einen Gegenstand zeigen oder herumgeben", b: 0 },
        { t: "Die Punkte der Reihe nach erklären", b: 1 },
        { t: "Ein Beispiel aus dem eigenen Erleben nennen", b: 1 },
        { t: "Den eigenen Plan nennen, wie es weitergeht", b: 2 },
        { t: "Sich bedanken und nach Fragen fragen", b: 2 }
      ] },
      { art: "mc", id: "plan", tag: "Vortrag planen", fragen: [
        { q: "Warum steht auf Hannas Zettel, wie lange jeder Teil dauern soll?", o: ["Damit sie die drei Minuten einhalten kann.", "Damit sie jeden Teil ablesen kann.", "Damit die Lehrkraft den Zettel einsammeln kann."], a: 0, e: "Mit einem Zeitplan merkt Hanna beim Sprechen, ob sie zu langsam oder zu schnell ist. Wer die Zeit überschreitet, muss abbrechen – und der Schluss geht verloren." },
        { q: "Welcher Einstieg weckt am ehesten Neugier?", o: ["eine Frage und etwas zum Anfassen", "„Ich halte jetzt meinen Vortrag. Er dauert drei Minuten.“", "„Ich lese zuerst alle Stichpunkte einmal vor.“"], a: 0, e: "Eine Frage und ein Gegenstand beziehen das Publikum ein. Die anderen Anfänge sagen nur, was kommt, und machen nicht neugierig." }
      ] }
    ] },
    { kurz: "Zettel", ober: "Verstehen", titel: "Stichwörter statt Sätze", teile: [
      { art: "merke", kopf: "MERKE: Der Stichwortzettel", html: "<ul><li>Auf den Zettel gehören <b>nur Stichwörter</b>, keine ganzen Sätze. Ganze Sätze verführen zum Ablesen.</li><li><b>Groß und übersichtlich</b> schreiben, damit du mit einem Blick findest, wo du bist.</li><li>Den <b>Aufbau</b> kennzeichnen (Einstieg, Hauptteil, Schluss) und die <b>Zeit</b> notieren.</li><li>Einen Platz für eine <b>Erinnerung</b> lassen: langsam sprechen, Blickkontakt, Pause.</li></ul><p>Wer frei spricht, schaut das Publikum an – und wird besser verstanden.</p>" },
      { art: "sort", id: "zettel-sort", tag: "Sortieren", titel: "Stichwort oder ausformulierter Text?", lead: "Was gehört auf einen Stichwortzettel – und was lädt zum Ablesen ein?", buckets: ["Stichwortzettel", "ausformulierter Text"], items: [
        { t: "Ausbildung: drei Jahre, Betrieb und Berufsschule", b: 0 },
        { t: "Arbeitszeit: früher Beginn", b: 0 },
        { t: "Einstieg: Brötchen herumgeben", b: 0 },
        { t: "Ich möchte euch heute erzählen, dass die Ausbildung drei Jahre dauert und in zwei Orten stattfindet.", b: 1 },
        { t: "Zuerst begrüße ich alle ganz herzlich und sage dann, worum es in meinem Vortrag geht.", b: 1 },
        { t: "Als Nächstes erkläre ich, dass eine Bäckerin oft sehr früh am Morgen mit der Arbeit beginnt.", b: 1 }
      ] },
      { art: "offen", id: "stich", tag: "Selbst formulieren", titel: "Aus einem Satz wird ein Stichwort", fragen: [
        { q: "Timo hat diesen Satz im Kopf: „Als Schreiner arbeitet man mit Holz und benutzt dabei Werkzeuge wie den Hobel und die Säge.“ Schreibe daraus einen Eintrag für seinen Zettel – kurz und in Stichwörtern.", m: "Schreiner: Arbeit mit Holz, Werkzeuge (Hobel, Säge)", k: ["schreiner|holz", "hobel|säge|werkzeug"], min: 2 }
      ], tipp: "Lass Verben und Füllwörter weg. Zwei bis fünf Stichwörter genügen.", hilfen: ["Beginne mit dem Beruf, dann ein Doppelpunkt, dann die wichtigsten Wörter."] },
      { art: "mc", id: "zettel2", tag: "Zettel und Vortrag", fragen: [
        { q: "Was ist der größte Vorteil eines Stichwortzettels gegenüber einem ausformulierten Text?", o: ["Man spricht frei und kann das Publikum anschauen.", "Man muss den Vortrag nicht mehr üben.", "Man muss das Thema nicht genau kennen."], a: 0, e: "Wer nur Stichwörter hat, muss in eigenen Worten sprechen. Das wirkt lebendiger. Üben und Wissen bleiben aber nötig." }
      ] }
    ] },
    { kurz: "Medien", ober: "Wählen", titel: "Welches Medium passt?", teile: [
      { art: "text", html: "<p class=\"lead\"><button class=\"term\" data-t=\"medien\">Medien</button> sollen deinen Vortrag unterstützen, nicht ersetzen. Frage dich immer: Was zeigt dieses Medium besser als meine Worte? Wenn die Antwort „nichts“ lautet, lass es weg.</p>" },
      { art: "paare", id: "medien", tag: "Paare finden", titel: "Medium und Zweck", lead: "Finde zu jedem Medium den passenden Zweck.", paare: [
        ["Gegenstand zum Anfassen", "macht den Einstieg anschaulich"],
        ["Plakat", "bleibt den ganzen Vortrag über sichtbar"],
        ["Foto oder Bild", "zeigt, wie etwas aussieht"],
        ["Tafelanschrieb", "hält ein Fachwort fest, das du erklärst"],
        ["Folie mit Stichpunkten", "zeigt einen Ablauf in wenigen Wörtern"]
      ] },
      { art: "mc", id: "folie", tag: "Folie gestalten", fragen: [
        { q: "Wie sieht eine gute Folie aus?", o: ["wenige Stichpunkte in großer Schrift", "der ganze Vortragstext in kleiner Schrift", "möglichst viele Farben, Bilder und Effekte"], a: 0, e: "Die Zuhörer lesen sonst mit, statt dir zuzuhören. Große Schrift und wenige Wörter lassen sich auch von hinten lesen." }
      ] },
      { art: "text", nur: "M", html: "<p><b>Für M8:</b> Jedes Medium hat Vor- und Nachteile. Ein Plakat braucht keine Technik und ist immer sichtbar – aber man kann es kaum ändern. Eine digitale Präsentation lässt sich leicht überarbeiten und zeigt Bilder und Abläufe – aber sie hängt von Strom, Beamer und Dateiformat ab. Welches Medium passt, hängt von Raum, Zeit und Thema ab.</p>" },
      { art: "offen", id: "abwaegen", nur: "M", m7: true, tag: "Abwägen und entscheiden", titel: "Plakat oder Präsentation?", fragen: [
        { q: "Hanna kann für ihren Dreiminutenvortrag ein Plakat (analog) oder eine digitale Präsentation am Beamer nutzen. Nenne je einen Vor- und einen Nachteil und entscheide dich begründet.", m: "Ein Plakat ist immer sichtbar und braucht keine Technik, lässt sich aber kaum noch ändern. Eine digitale Präsentation ist leicht zu verändern und kann Bilder zeigen, fällt aber aus, wenn die Technik streikt. Für drei Minuten würde ich das Plakat wählen, weil es einfach und zuverlässig ist.", k: ["plakat|analog|papier", "digital|beamer|präsentation|technik", "vorteil|nachteil|aber|dagegen|allerdings|dafür", "entscheid|wähle|würde|deshalb|weil"], min: 3 }
      ], tipp: "Vier Schritte: Vorteil Plakat – Nachteil Plakat – Vorteil und Nachteil Präsentation – deine Entscheidung mit „weil“.", hilfen: ["Denke an Technik, Veränderbarkeit und Zeit."] },
      { art: "offen", id: "kuerzen", nur: "M", m7: true, tag: "Folie überarbeiten", titel: "Aus acht Zeilen werden drei Stichpunkte", fragen: [
        { q: "Auf einer Folie steht: „Die Ausbildung zur Bäckerin dauert drei Jahre. Sie findet abwechselnd im Betrieb und in der Berufsschule statt. Im Betrieb lernt man, Teige herzustellen, Brot und Brötchen zu formen und zu backen. In der Berufsschule lernt man die Grundlagen des Berufs.“ Kürze den Inhalt auf höchstens drei Stichpunkte für eine Folie.", m: "Ausbildung: drei Jahre. Wechsel: Betrieb und Berufsschule. Im Betrieb: Teig, formen, backen.", k: ["drei jahre|3 jahre|3 j", "betrieb", "berufsschule|schule"], min: 2 }
      ], tipp: "Jeder Stichpunkt ist kein ganzer Satz, sondern nur ein paar Wörter.", hilfen: ["Frage dich: Was müssen die Zuhörer unbedingt sehen?"] }
    ] },
    { kurz: "Auftreten", ober: "Üben", titel: "Körpersprache und Sprechweise", teile: [
      { art: "text", html: "<p class=\"lead\">Dein Auftreten entscheidet mit, ob dir die Zuhörer folgen. Du wirkst nicht nur durch das, was du sagst, sondern auch dadurch, <b>wie</b> du stehst und sprichst. Beides lässt sich üben. Besonders wichtig ist der <button class=\"term\" data-t=\"blickkontakt\">Blickkontakt</button>: Wer die Zuhörer anschaut, hält sie bei der Sache.</p>" },
      { art: "sort", id: "auftritt", tag: "Zuordnen", titel: "Körpersprache oder Sprechweise?", buckets: ["Körpersprache", "Sprechweise"], items: [
        { t: "aufrecht und fest stehen", b: 0 },
        { t: "Blickkontakt zu verschiedenen Zuhörern halten", b: 0 },
        { t: "die Hände ruhig halten", b: 0 },
        { t: "nach wichtigen Stellen eine Pause machen", b: 1 },
        { t: "so laut sprechen, dass man in der letzten Reihe alles versteht", b: 1 },
        { t: "langsam und deutlich sprechen", b: 1 },
        { t: "wichtige Wörter betonen", b: 1 }
      ] },
      { art: "mc", id: "auftritt2", tag: "Aufregung", fragen: [
        { q: "Du bist aufgeregt und sprichst zu schnell. Was hilft?", o: ["bewusst atmen und nach jedem Punkt eine kurze Pause machen", "noch schneller sprechen, damit es bald vorbei ist", "nur noch auf den Zettel schauen"], a: 0, e: "Eine Pause beruhigt dich und gibt den Zuhörern Zeit zum Nachdenken. Schnelles Sprechen verstärkt die Aufregung." },
        { q: "Wohin schaust du am besten?", o: ["abwechselnd zu verschiedenen Zuhörern", "an die Decke oder aus dem Fenster", "immer nur zur Lehrkraft"], a: 0, e: "Wer verschiedene Zuhörer anschaut, bindet alle ein. Auf den Zettel schaust du nur kurz." }
      ] }
    ] },
    { kurz: "Rückmeldung", ober: "Beurteilen und schreiben", titel: "Fair und hilfreich rückmelden", teile: [
      { art: "merke", kopf: "MERKE: So gibst du eine Rückmeldung", html: "<ol><li><b>Erst Gelungenes:</b> Nenne mindestens einen Punkt, der gut war, und sage genau, was gut war.</li><li><b>Dann ein Tipp:</b> Sage nicht, was schlecht war, sondern was der andere beim nächsten Mal tun <i>könnte</i>: „Du könntest …“</li><li><b>Sachlich und konkret:</b> Beziehe dich auf <button class=\"term\" data-t=\"kriterium\">Kriterien</button> (Aufbau, Lautstärke, Blickkontakt, Medien) und auf das, was du beobachtet hast.</li><li><b>Von dir aus sprechen:</b> „Mir ist aufgefallen …“, „Ich habe verstanden …“ – nicht über die Person urteilen.</li></ol>" },
      { art: "sort", id: "fb", tag: "Prüfen", titel: "Hilfreich oder nicht hilfreich?", lead: "Welche <button class=\"term\" data-t=\"rueckmeldung\">Rückmeldung</button> hilft dem Vortragenden?", buckets: ["hilfreich", "nicht hilfreich"], items: [
        { t: "Mir hat dein Einstieg gefallen, weil du das Holz herumgegeben hast.", b: 0 },
        { t: "Du könntest beim nächsten Mal öfter in die Klasse schauen.", b: 0 },
        { t: "Ich habe verstanden, was ein Hobel ist, weil du ihn erklärt hast.", b: 0 },
        { t: "Das war voll langweilig.", b: 1 },
        { t: "Du bist einfach nicht gut im Vortragen.", b: 1 },
        { t: "Alles super, alles toll.", b: 1 }
      ] },
      { art: "offen", id: "tipp", tag: "Selbst formulieren", titel: "Aus Kritik wird ein Tipp", fragen: [
        { q: "Eine Mitschülerin sagt nach einem Vortrag: „Du hast viel zu schnell gesprochen.“ Formuliere daraus eine hilfreiche Rückmeldung mit einem Tipp.", m: "Ich habe nicht alles verstanden, weil du schnell gesprochen hast. Du könntest nach jedem Punkt eine kurze Pause machen und etwas langsamer sprechen.", k: ["pause|langsam", "könntest|tipp|versuch|nächsten mal|wäre|probier"], min: 2 }
      ], tipp: "Beginne mit „Du könntest …“ und nenne etwas, das der andere tun kann.", hilfen: ["Was kann man gegen zu schnelles Sprechen tun?"] },
      { art: "text", nur: "R", html: "<p class=\"lead\">Nun zu Timo. Seine Klasse hat sich seinen Vortrag „Mein Wunschberuf: Schreiner“ angeschaut. Lies die Beobachtung und beantworte die Fragen. Danach schreibst du ihm eine Rückmeldung.</p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Nun zu Timo. Seine Klasse hat sich seinen Vortrag „Mein Wunschberuf: Schreiner“ angeschaut. Lies die Beobachtung, gewichte die Punkte und schreibe ihm danach eine Rückmeldung.</p>" },
      { art: "lesetext", lesetext: { R: "beruf-vortrag-schreiner-r", M: "beruf-vortrag-schreiner-m" } },
      { art: "beleg", id: "beob", nur: "R", tag: "Beobachten", titel: "Was fiel in Timos Vortrag auf?", lesetext: "beruf-vortrag-schreiner-r", fragen: [
        { q: "Wo steht ein gelungener Einstieg?", zeilen: [3, 5], e: "Das Holzstück und die Frage holen die Klasse ab. Das gehört in jede Rückmeldung als Erstes.", tipp: "Suche den Gegenstand." },
        { q: "Wo stehen Hinweise zu Sprechweise und Auftreten, die Timo verbessern kann?", zeilen: [8, 10], e: "Er spricht leise und schnell, liest ab und hat die Hände in den Taschen. Daraus lassen sich Tipps ableiten.", tipp: "Suche „leise“." },
        { q: "Wo steht, wie Timo seinen Vortrag beendet?", zeilen: [13, 14], e: "Er fragt nach Fragen und bleibt genau in der Zeit – beides ist gelungen.", tipp: "Lies den letzten Absatz." }
      ] },
      { art: "beleg", id: "beob", nur: "M", tag: "Beobachten", titel: "Was fiel in Timos Vortrag auf?", lesetext: "beruf-vortrag-schreiner-m", fragen: [
        { q: "Wo steht ein gelungener Einstieg?", zeilen: [4, 6], e: "Das Holzstück und die Frage holen die Klasse ab. Sie gehören an den Anfang der Rückmeldung.", tipp: "Suche den Gegenstand." },
        { q: "Wo steht, wie Timos Stimme und Tempo auf die Zuhörer wirken?", zeilen: [9, 10], e: "Er ist leise und schnell, sodass die Hinteren ihn kaum verstehen. Das ist ein wichtiger Punkt für den Tipp.", tipp: "Suche „Hinteren“." },
        { q: "Wo steht, dass Zeit und Schluss nicht gelungen sind?", zeilen: [17, 18], e: "Vier statt drei Minuten, abrupter Abbruch, keine Frage ans Publikum: Der Schluss gehört zu den Punkten für einen Tipp.", tipp: "Lies den letzten Absatz." }
      ] },
      { art: "schreiben", id: "rueck", nur: "R", tag: "Schreibtrainer", titel: "Deine Rückmeldung an Timo", min: 50,
        auftrag: "<p>Timo hat seinen Vortrag gehalten. Schreibe ihm eine Rückmeldung (mindestens 50 Wörter), wie du sie ihm nach dem Vortrag geben würdest. Du schreibst in der Du-Form.</p><ul><li>Nenne zuerst <b>zwei gelungene Punkte</b> und sage genau, was gut war.</li><li>Gib dann <b>zwei Tipps</b> – jeweils mit einem konkreten Vorschlag („Du könntest …“).</li><li>Bleibe sachlich und freundlich.</li></ul>",
        starter: ["Mir hat gefallen, dass …", "Besonders gut fand ich, wie du …", "Du könntest beim nächsten Mal …", "Ein weiterer Tipp: …", "Insgesamt …"],
        kriterien: ["Ich nenne zuerst zwei gelungene Punkte und sage genau, was gut war.", "Ich gebe zwei Tipps mit einem konkreten Vorschlag („Du könntest …“).", "Ich beziehe mich auf das, was in der Beobachtung steht.", "Ich bleibe sachlich und freundlich und urteile nicht über die Person."] },
      { art: "schreiben", id: "rueck", nur: "M", tag: "Schreibtrainer", titel: "Deine Rückmeldung an Timo", min: 70,
        auftrag: "<p>Timo hat seinen Vortrag gehalten. Schreibe ihm eine Rückmeldung (mindestens 70 Wörter) in der Du-Form.</p><ul><li>Beginne mit dem, was gelungen ist, und begründe, warum es wirkt.</li><li>Wähle <b>die zwei wichtigsten Verbesserungen</b> aus und begründe, warum sie dir wichtiger sind als die übrigen. Formuliere jeweils einen konkreten Tipp.</li><li>Gehe auf das Medium ein, das Timo eingesetzt hat.</li><li>Bleibe sachlich und wertschätzend; schließe mit einem Satz, der Timo Mut macht.</li></ul>",
        starter: ["Mir hat gefallen, dass …, weil …", "Besonders wirkungsvoll war …", "Am wichtigsten fände ich, dass du …, denn …", "Zur Folie: …", "Insgesamt …"],
        kriterien: ["Ich beginne mit Gelungenem und begründe, warum es wirkt.", "Ich wähle zwei wichtige Verbesserungen aus und begründe die Auswahl.", "Meine Tipps sind konkret („Du könntest …“) und beziehen sich auf die Beobachtung.", "Ich gehe auf das Medium (die Folie) ein.", "Der Ton ist sachlich und wertschätzend; der Schluss macht Mut."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Kurzvortrag hat Einstieg, Hauptteil und Schluss.", true],
        ["Auf einen Stichwortzettel schreibt man den ganzen Vortrag Wort für Wort.", false],
        ["Eine Folie sollte wenige Stichpunkte in großer Schrift enthalten.", true],
        ["Bei einem Vortrag schaut man am besten ununterbrochen auf den Zettel.", false],
        ["Eine Rückmeldung beginnt mit etwas Gelungenem.", true],
        ["Ein Tipp beginnt gut mit „Du könntest …“.", true],
        ["Zur Rückmeldung gehört ein Urteil über die Person („Du bist einfach schlecht“).", false]
      ] }
    ] }
  ],
  weiter: { text: "Das war das letzte Modul im Bereich „Beruf, Kommunikation und Präsentation“. Du kannst jetzt eine Anzeige auswerten, ein Anschreiben schreiben, telefonieren, dich vorstellen, vom Praktikum berichten und vor anderen sprechen." }
});
