/* Deutsch 8 · Lesen, Sachtexte und Medien · Modul 2: Belegen und zitieren
   (prüfen, ob eine Aussage im Text steht; Textstelle finden und mit Zeilen angeben; wörtlich zitieren, auch mit Auslassung […];
   sinngemäß wiedergeben mit „vgl.“; Dreischritt Aussage – Beleg – Erklärung; M8: Zitat in den eigenen Satz einbauen)
   LehrplanPLUS D8 2.1 (R8: Textaussagen belegen; M8: Inhalt und Intention selbstständig erschließen), 2.3 (Informationen aus
   pragmatischen Texten; M8: Deutung mit Zitaten belegen), 3.1 (Zitate und indirekte Rede formgerecht in eigene Texte
   integrieren – R8 unter Anleitung, M8 weitgehend selbstständig).
   Texte: „Lärm – die unterschätzte Belastung“ (texte/lesen/laerm-r.js und -m.js) – eigener Sachtext,
   R8 7 Abschnitte, 58 Zeilen · M8 8 Abschnitte, 76 Zeilen. Alle Zeilenangaben unten nach zeig-text.js. */
D7Kit.seite({
  id: "les-02",
  titel: "Belegen und zitieren",
  einleitung: "Wer über einen Text spricht, muss zeigen können, worauf er sich stützt – in jeder Probe und später in jedem Referat. Heute sicherst du deine Aussagen ab: mit Zeilenangaben, wörtlichen Zitaten und Wiedergaben in eigenen Worten. Dein Text handelt von etwas, das man nicht sieht und das trotzdem krank machen kann.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔎 Ich prüfe, ob eine Aussage wirklich im Text steht, und finde die Stelle.", "🔢 Ich gebe Zeilen richtig an – auch mit „vgl.“.", "💬 Ich zitiere wörtlich, kurz und genau.", "🧠 Ich erkläre, was eine Textstelle zeigt."],
  haupttext: { R: "les-laerm-r", M: "les-laerm-m" },
  quiz: { profi: "Beleg-Profi" },
  glossar: {
    beleg: ["Textbeleg", "Die Stelle im Text, die eine Aussage stützt. Man gibt sie mit der Zeile an, damit jeder nachprüfen kann."],
    zeile: ["Zeilenangabe", "Sie zeigt, wo etwas steht: (Z. 12) für eine Zeile, (Z. 12–14) für mehrere, (Z. 12 f.) für Zeile 12 und die folgende."],
    zitat: ["wörtliches Zitat", "Eine Stelle, die Wort für Wort aus dem Text übernommen wird. Sie steht in Anführungszeichen."],
    auslassung: ["Auslassung", "Lässt man in einem Zitat Wörter weg, zeigt man das mit drei Punkten in eckigen Klammern: […]."],
    sinngemaess: ["sinngemäße Wiedergabe", "Man gibt eine Textstelle mit eigenen Worten wieder – ohne Anführungszeichen, aber mit Zeilenangabe: (vgl. Z. 12)."],
    vgl: ["vgl.", "Abkürzung für „vergleiche“. Sie steht vor der Zeilenangabe, wenn man nicht wörtlich zitiert."],
    dreischritt: ["Dreischritt", "Aussage – Beleg – Erklärung: erst behaupten, dann mit dem Text belegen, dann erklären, was die Stelle zeigt."],
    einbauen: ["Zitat einbauen", "Das Zitat wird ein Teil des eigenen Satzes. Der Satzbau muss dabei stimmen, der Wortlaut bleibt unverändert."],
    dezibel: ["Dezibel (dB)", "Die Einheit, in der man angibt, wie laut etwas ist."]
  },
  stationen: [
    { kurz: "Belegbar?", ober: "Ausprobieren", titel: "Steht das wirklich im Text?", teile: [
      { art: "text", html: "<p class=\"lead\">In der Pause sagt Mila: „Lärm macht krank, das stand in dem Text.“ Ben winkt ab: „Stand da nicht. Lärm nervt halt, mehr nicht.“ Wer hat recht?</p><p>Das lässt sich nur auf eine Art klären: nachlesen und die Stelle zeigen. Lies den Text einmal ganz. Die Lautstärke wird darin in <button class=\"term\" data-t=\"dezibel\">Dezibel</button> angegeben.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lead: "Achte auf die Zeilennummern am Rand – du brauchst sie heute oft.", lesetext: { R: "les-laerm-r", M: "les-laerm-m" } },
      { art: "sort", id: "pruef", tag: "Prüfen", titel: "Im Text, dagegen – oder gar nicht drin?", lead: "Neun Aussagen. Drei stehen im Text, drei widersprechen ihm, und drei kommen im Text gar nicht vor – auch wenn sie vielleicht stimmen.", buckets: ["steht im Text", "widerspricht dem Text", "steht nicht im Text"], cols: 200, items: [
        { t: "Haarzellen wachsen beim Menschen nicht nach.", b: 0 },
        { t: "Der Körper reagiert auch im Schlaf auf Lärm.", b: 0 },
        { t: "Zehn Dezibel mehr wirken auf uns doppelt so laut.", b: 0 },
        { t: "Lärm schadet ausschließlich den Ohren.", b: 1 },
        { t: "Die wichtigste Lärmquelle in Deutschland ist der Flugverkehr.", b: 1 },
        { t: "Musik, die man mag, kann dem Gehör nicht schaden.", b: 1 },
        { t: "Hunde hören viel besser als Menschen.", b: 2 },
        { t: "In Großstädten ist es heute lauter als vor hundert Jahren.", b: 2 },
        { t: "Ohrstöpsel gibt es in jeder Apotheke zu kaufen.", b: 2 }
      ] },
      { art: "merke", kopf: "MERKE: Belegen heißt, am Text zeigen", html: "<ul><li>Belegen kannst du nur, was der Text selbst sagt.</li><li>Eigenes Wissen, Erfahrungen und Meinungen sind keine <button class=\"term\" data-t=\"beleg\">Textbelege</button> – auch wenn sie stimmen.</li><li>Ein Beleg nennt die Stelle, damit jeder nachprüfen kann.</li></ul>" },
      { art: "mc", id: "bw", tag: "Beleg oder nicht?", fragen: [
        { q: "Ben schreibt in einer Probe: „Lärm ist ungesund. Das weiß doch jeder.“ Warum ist das kein Beleg?", o: ["Er nennt keine Textstelle, an der man es nachprüfen kann.", "Die Aussage ist falsch und steht deshalb nicht im Text.", "Ein Beleg muss immer eine genaue Zahl enthalten.", "In einer Probe darf man keine eigenen Sätze schreiben."], a: 0, e: "Die Aussage stimmt sogar – belegt ist sie aber erst, wenn die Stelle im Text genannt wird." },
        { q: "Hunde hören besser als Menschen – das stimmt. Warum darfst du es trotzdem nicht als Aussage dieses Textes ausgeben?", o: ["Der Text sagt nichts darüber – belegen kann ich nur, was dasteht.", "In diesem Text geht es nur um Menschen, die in Städten leben.", "In einem Sachtext dürfen grundsätzlich keine Tiere vorkommen.", "Unter Fachleuten ist diese Aussage in Wirklichkeit umstritten."], a: 0, e: "Was du aus anderen Quellen weißt, darfst du nicht dem Text zuschreiben. Sonst behauptest du etwas über den Text, das niemand nachprüfen kann." }
      ] }
    ] },
    { kurz: "Stelle finden", ober: "Ausprobieren", titel: "Die Stelle finden und angeben", teile: [
      { art: "beleg", id: "bel", nur: "R", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "les-laerm-r", fragen: [
        { q: "Wo erklärt der Text, was Lärm überhaupt ist?", zeilen: [6, 7], e: "Lärm ist Schall, der stört oder der Gesundheit schadet.", tipp: "Der zweite Abschnitt beginnt mit einer Frage. Die Antwort folgt gleich danach." },
        { q: "Wo steht, warum ein Hörschaden nicht mehr heilt?", zeilen: [19, 21], e: "Verlorene Haarzellen wachsen beim Menschen nicht nach.", tipp: "Das Wort „Haarzellen“ kommt zweimal vor. Welche Stelle erklärt, warum der Schaden bleibt?" },
        { q: "Wo steht, warum der Körper sogar im Schlaf auf Lärm reagiert?", zeilen: [27, 29], e: "Die Ohren lassen sich nicht schließen wie die Augen.", tipp: "Suche das Wort „Schlaf“. Der Grund steht hinter „denn“." },
        { q: "Wo steht, welche Folgen Fluglärm für Grundschulkinder haben kann?", zeilen: [34, 37], e: "Sie lernen langsamer lesen als Kinder in ruhigen Gegenden.", tipp: "Suche im Abschnitt über das Lernen das Wort „Flughäfen“." }
      ], hilfen: ["Überlege zuerst, in welchem Abschnitt die Antwort stehen muss: Ohren, Körper, Lernen oder Schutz?", "Tippe nur die Zeilen an, in denen die Antwort wirklich steht – nicht den ganzen Abschnitt."] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "les-laerm-m", fragen: [
        { q: "Wo begründet der Text, warum sich nur die Lautstärke messen lässt, nicht aber der Lärm selbst?", zeilen: [11, 14], e: "Ob ein Geräusch stört, ist zum Teil subjektiv – dieselbe Musik kann Genuss oder Zumutung sein.", tipp: "Suche das Wort „subjektiv“ und lies bis zum Ende des Beispiels." },
        { q: "Wo steht, warum die Dezibel-Skala leicht in die Irre führt?", zeilen: [17, 19], e: "Sie steigt nicht gleichmäßig an: Zehn Dezibel mehr werden schon als Verdoppelung empfunden.", tipp: "Die Besonderheit wird hinter einem Doppelpunkt erklärt." },
        { q: "Wo zeigt der Text, dass das Gefühl, sich an Lärm gewöhnt zu haben, täuschen kann?", zeilen: [43, 46], e: "Anwohner schlafen weniger tief – auch wenn sie überzeugt sind, sich gewöhnt zu haben.", tipp: "Suche das Wort „gewöhnt“ und lies den ganzen Satz." },
        { q: "Wo nennt der Text einen Grund, warum Lärmschutz in Städten umstritten sein kann?", zeilen: [66, 68], e: "Die Maßnahmen kosten Geld und verlangen zum Beispiel, dass Autofahrer langsamer fahren.", tipp: "Achte im vorletzten Abschnitt auf das Signalwort „allerdings“." }
      ] },
      { art: "merke", kopf: "MERKE: So gibst du die Stelle an", html: "<ul><li><strong>(Z. 21)</strong> – eine Zeile · <strong>(Z. 19–21)</strong> – mehrere Zeilen · <strong>(Z. 19 f.)</strong> – Zeile 19 und die folgende</li><li>Die <button class=\"term\" data-t=\"zeile\">Zeilenangabe</button> steht in Klammern am Ende deines Satzes. Der Punkt kommt erst danach.</li><li>Gib genau die Zeilen an, in denen die Aussage steht – nicht den ganzen Abschnitt.</li></ul>" },
      { art: "mc", id: "za", nur: "R", tag: "Zeilen angeben", fragen: [
        { q: "In welchen Zeilen steht, ab welcher Lautstärke Dauerlärm als gefährlich gilt?", o: ["(Z. 21–22)", "(Z. 8–9)", "(Z. 12–13)", "(Z. 54–55)"], a: 0, e: "Der Satz beginnt am Ende von Zeile 21, die Zahl 85 steht in Zeile 22. An den anderen Stellen stehen andere Zahlen." },
        { q: "Was bedeutet die Angabe (Z. 27 f.)?", o: ["Zeile 27 und die folgende Zeile", "Zeile 27 und alle weiteren Zeilen", "ungefähr in der Nähe von Zeile 27", "Zeile 27 fehlt in diesem Text"], a: 0, e: "„f.“ steht für „folgende“: gemeint sind die Zeilen 27 und 28. Bei längeren Stellen schreibst du genauer: (Z. 27–29)." }
      ] },
      { art: "mc", id: "za", nur: "M", tag: "Zeilen angeben", fragen: [
        { q: "In welchen Zeilen steht, ab welchem Wert am Arbeitsplatz ein Gehörschutz getragen werden muss?", o: ["(Z. 33–35)", "(Z. 22–24)", "(Z. 18–19)", "(Z. 71–73)"], a: 0, e: "Der Satz beginnt in Zeile 33 mit „Als kritisch gilt …“ und endet in Zeile 35. An den anderen Stellen stehen andere Zahlen." },
        { q: "Was bedeutet die Angabe (Z. 41 f.)?", o: ["Zeile 41 und die folgende Zeile", "Zeile 41 und alle weiteren Zeilen", "ungefähr in der Nähe von Zeile 41", "Zeile 41 fehlt in diesem Text"], a: 0, e: "„f.“ steht für „folgende“: gemeint sind die Zeilen 41 und 42. Bei längeren Stellen schreibst du genauer: (Z. 41–43)." }
      ] }
    ] },
    { kurz: "Zitieren", ober: "Verstehen", titel: "Wörtlich zitieren – kurz und genau", teile: [
      { art: "beispiel", nur: "R", kopf: "So sieht ein Zitat aus", html: "<p><strong>Aussage:</strong> Lärm ist gefährlicher, als viele denken.<br><strong>Mit Zitat belegt:</strong> Der Text nennt ihn „eine unterschätzte Belastung“ (Z. 5).</p>" },
      { art: "beispiel", nur: "M", kopf: "So sieht ein Zitat aus", html: "<p><strong>Aussage:</strong> Lärm wird als Gefahr kaum wahrgenommen.<br><strong>Mit Zitat belegt:</strong> Im Text heißt es über den Lärm: „Gerade deshalb wird er unterschätzt“ (Z. 5).</p>" },
      { art: "merke", kopf: "MERKE: Wörtlich zitieren", html: "<ul><li>Ein <button class=\"term\" data-t=\"zitat\">wörtliches Zitat</button> steht in Anführungszeichen: „…“</li><li>Du übernimmst Wort für Wort – kein Wort wird ausgetauscht, keine Endung verändert.</li><li>Zitiere kurz: eine Wortgruppe oder einen Satz, nie einen ganzen Abschnitt.</li><li>Lässt du etwas weg, kennzeichnest du die <button class=\"term\" data-t=\"auslassung\">Auslassung</button> mit […].</li><li>Hinter dem Zitat steht die Zeilenangabe, dann erst der Punkt.</li></ul>" },
      { art: "mc", id: "zi", nur: "R", tag: "Zitate prüfen", fragen: [
        { q: "Im Text steht in Zeile 4: Lärm kann krank machen. Tarek zitiert: „Lärm macht krank“ (Z. 4). Welcher Fehler steckt darin?", o: ["Der Wortlaut wurde verändert.", "Die Zeilenangabe fehlt.", "Die Anführungszeichen fehlen.", "Das Zitat ist viel zu lang."], a: 0, e: "Im Text steht „kann krank machen“. Wer in Anführungszeichen schreibt, muss Wort für Wort abschreiben." },
        { q: "Im Text steht: „Stille ist für den Körper keine verlorene Zeit, sondern Erholung.“ Du willst „für den Körper“ weglassen. Welche Fassung ist richtig?", o: ["„Stille ist […] keine verlorene Zeit, sondern Erholung“ (Z. 57–58)", "„Stille ist keine verlorene Zeit, sondern Erholung“ (Z. 57–58)", "„Stille ist […] keine Zeitverschwendung, sondern Erholung“ (Z. 57–58)", "Stille ist […] keine verlorene Zeit, sondern Erholung (Z. 57–58)"], a: 0, e: "Die Auslassung muss mit […] gekennzeichnet sein, der Rest bleibt wörtlich und steht in Anführungszeichen." },
        { q: "Im Text steht: „Zehn Dezibel mehr empfinden wir schon als doppelt so laut.“ Tarek schreibt: „Zehn Dezibel mehr hören wir schon als zweimal so laut“. Welche Wörter hat er verändert?", o: ["hören", "zweimal", "Dezibel", "schon", "laut"], a: [0, 1], e: "Im Text steht „empfinden“ und „doppelt“. Schon ein ausgetauschtes Wort macht ein wörtliches Zitat falsch." }
      ] },
      { art: "mc", id: "zi", nur: "M", tag: "Zitate prüfen", fragen: [
        { q: "Im Text steht in Zeile 5: Gerade deshalb wird er unterschätzt. Tarek zitiert: „Deshalb wird er unterschätzt“ (Z. 5). Welcher Fehler steckt darin?", o: ["Ein Wort fehlt, ohne dass es gekennzeichnet ist.", "Die Zeilenangabe steht an der falschen Stelle.", "Die Anführungszeichen sind falsch gesetzt.", "Das Zitat ist für einen Beleg viel zu lang."], a: 0, e: "„Gerade“ wurde weggelassen. Richtig wäre: „[…] deshalb wird er unterschätzt“ (Z. 5) – oder man zitiert den ganzen Satz." },
        { q: "Im Text steht: „Diese Reaktion läuft unbewusst ab und lässt sich nicht abstellen“. Du willst den Mittelteil weglassen. Welche Fassung ist richtig?", o: ["„Diese Reaktion […] lässt sich nicht abstellen“ (Z. 41–42)", "„Diese Reaktion lässt sich nicht abstellen“ (Z. 41–42)", "„Diese Reaktion […] kann man nicht abstellen“ (Z. 41–42)", "Diese Reaktion […] lässt sich nicht abstellen (Z. 41–42)"], a: 0, e: "Die Auslassung muss mit […] gekennzeichnet sein, der Rest bleibt wörtlich und steht in Anführungszeichen." },
        { q: "Im Text steht: „Ein Zuwachs von zehn Dezibel wird bereits als Verdoppelung der Lautstärke empfunden.“ Tarek schreibt: „Ein Anstieg von zehn Dezibel wird schon als Verdoppelung der Lautstärke wahrgenommen“. Welche Wörter hat er verändert?", o: ["Anstieg", "schon", "wahrgenommen", "Verdoppelung", "Lautstärke"], a: [0, 1, 2], e: "Im Text steht „Zuwachs“, „bereits“ und „empfunden“. Der Sinn ist gleich geblieben – ein wörtliches Zitat ist es trotzdem nicht mehr." }
      ] }
    ] },
    { kurz: "Sinngemäß", ober: "Üben", titel: "Mit eigenen Worten wiedergeben", teile: [
      { art: "beispiel", nur: "R", kopf: "Zwei Wege, dieselbe Stelle zu belegen", html: "<p><strong>Wörtlich:</strong> Im Text heißt es: „Als gefährlich gilt Dauerlärm ab etwa 85 Dezibel“ (Z. 21–22).<br><strong>Sinngemäß:</strong> Laut Text wird Lärm gefährlich, wenn er dauerhaft etwa 85 Dezibel erreicht (vgl. Z. 21–22).</p>" },
      { art: "beispiel", nur: "M", kopf: "Zwei Wege, dieselbe Stelle zu belegen", html: "<p><strong>Wörtlich:</strong> Im Text heißt es: „Als kritisch gilt eine Dauerbelastung ab etwa 85 Dezibel“ (Z. 33–34).<br><strong>Sinngemäß:</strong> Dem Text zufolge wird Lärm für das Gehör kritisch, wenn er dauerhaft etwa 85 Dezibel erreicht (vgl. Z. 33–34).</p>" },
      { art: "merke", kopf: "MERKE: Sinngemäß wiedergeben", html: "<ul><li>Bei der <button class=\"term\" data-t=\"sinngemaess\">sinngemäßen Wiedergabe</button> benutzt du eigene Worte – ohne Anführungszeichen.</li><li>Leite sie ein: <em>Laut Text … · Dem Text zufolge … · Der Text erklärt, dass …</em></li><li>Der Inhalt bleibt gleich: nichts dazuerfinden, nichts verdrehen.</li><li>Vor der Zeilenangabe steht <button class=\"term\" data-t=\"vgl\">vgl.</button> – zum Beispiel (vgl. Z. 21–22).</li></ul>" },
      { art: "sort", id: "wie", nur: "R", tag: "Sortieren", titel: "Zitat, Wiedergabe – oder gar kein Beleg?", buckets: ["wörtliches Zitat", "sinngemäße Wiedergabe", "kein Beleg"], cols: 220, items: [
        { t: "Der Text sagt: „Lärm kann krank machen“ (Z. 4).", b: 0 },
        { t: "Im Text steht: „Sehr lauter Schall schädigt das Gehör“ (Z. 14).", b: 0 },
        { t: "Laut Text reagiert der Körper sogar im Schlaf auf Lärm (vgl. Z. 27–29).", b: 1 },
        { t: "Der Text erklärt, dass verlorene Haarzellen nicht ersetzt werden (vgl. Z. 19–21).", b: 1 },
        { t: "Lärm ist echt schlimm, das merkt man ja selbst.", b: 2 },
        { t: "Bei uns in der Straße ist es auch immer laut.", b: 2 }
      ] },
      { art: "sort", id: "wie", nur: "M", tag: "Sortieren", titel: "Zitat, Wiedergabe – oder gar kein Beleg?", buckets: ["wörtliches Zitat", "sinngemäße Wiedergabe", "kein Beleg"], cols: 220, items: [
        { t: "Über die Dezibel-Skala heißt es: „Sie steigt nicht gleichmäßig an“ (Z. 17–18).", b: 0 },
        { t: "Ruhe sei „kein Luxus“, betont der Text am Schluss (Z. 75).", b: 0 },
        { t: "Dem Text zufolge reagiert der Körper auch im Schlaf auf Lärm (vgl. Z. 41–43).", b: 1 },
        { t: "Der Text erklärt, dass abgestorbene Haarzellen nicht ersetzt werden (vgl. Z. 30–33).", b: 1 },
        { t: "Lärm ist echt schlimm, das merkt man ja selbst.", b: 2 },
        { t: "Bei uns in der Straße ist es auch immer laut.", b: 2 }
      ] },
      { art: "mc", id: "ind", tag: "Sinngemäß – aber richtig", fragen: [
        { q: "Woran erkennst du eine sinngemäße Wiedergabe?", o: ["eigene Worte, keine Anführungszeichen, Zeilenangabe mit „vgl.“", "genauer Wortlaut des Textes, in Anführungszeichen gesetzt", "ein Satzanfang wie „Ich finde“ oder „Meiner Meinung nach“", "eine Zeilenangabe ganz ohne einen eigenen Satz davor"], a: 0, e: "Sinngemäß heißt: mit eigenen Worten, aber nachprüfbar. Deshalb gehört die Zeilenangabe dazu – mit „vgl.“ davor." },
        { q: "Im Text steht, dass zehn Dezibel mehr als doppelt so laut empfunden werden. Welcher Satz gibt das sinngemäß richtig wieder?", o: ["Laut Text nehmen wir ein Geräusch, das zehn Dezibel lauter ist, als doppelt so laut wahr.", "Laut Text ist ein Geräusch mit zehn Dezibel doppelt so laut wie ein normales Gespräch.", "Laut Text sind schon zehn Dezibel für das menschliche Gehör gefährlich laut.", "Laut Text verdoppelt sich der Lärm in einer großen Stadt etwa alle zehn Jahre."], a: 0, e: "Andere Worte, derselbe Inhalt – darauf kommt es an. Die übrigen Sätze verdrehen die Aussage oder erfinden etwas dazu." }
      ] },
      { art: "offen", id: "sg", nur: "R", tag: "Selbst formulieren", titel: "Jetzt du", fragen: [
        { q: "Gib mit eigenen Worten wieder, was der Text über die Faustregel für Kopfhörer sagt (Z. 54–56). Beginne mit „Laut Text …“ und hänge die Zeilen mit „vgl.“ an.", m: "Laut Text sollte man Kopfhörer höchstens auf 60 Prozent der Lautstärke stellen und nach einer Stunde eine Pause machen (vgl. Z. 54–56).", k: ["laut text|dem text zufolge|der text|im text", "60|sechzig|pause|stunde|lautstärke|leiser", "vgl"] }
      ], tipp: "Drei Dinge gehören dazu: die Einleitung „Laut Text“, der Inhalt in deinen Worten und (vgl. Z. …).", hilfen: ["Die Faustregel hat zwei Teile: eine Angabe zur Lautstärke und eine zur Zeit.", "So kannst du beginnen: Laut Text sollte man Kopfhörer höchstens …", "Vergiss den Schluss nicht: (vgl. Z. 54–56)."] },
      { art: "offen", id: "sg", nur: "M", tag: "Selbst formulieren", titel: "Jetzt du", fragen: [
        { q: "Gib sinngemäß wieder, wie sich der Lärm im Klassenzimmer nach dem Text selbst verstärkt (Z. 55–58). Gib die Stelle mit „vgl.“ an.", m: "Dem Text zufolge sprechen in einem lauten Klassenzimmer alle immer lauter, um verstanden zu werden, und erhöhen dadurch den Lärm noch weiter (vgl. Z. 55–58).", k: ["laut text|dem text zufolge|der text|im text|zufolge", "lauter|pegel|lärm|verstanden|verstehen", "vgl"] }
      ], tipp: "Leite ein (Dem Text zufolge …), gib den Inhalt in eigenen Worten wieder und schließe mit (vgl. Z. …)." }
    ] },
    { kurz: "Erklären", ober: "Selbst antworten", titel: "Aussage – Beleg – Erklärung", teile: [
      { art: "sort", id: "drei", nur: "R", tag: "Sortieren", titel: "Was ist was?", lead: "Zwei kleine Antworten auf die Frage, warum Lärm gefährlich ist – in ihre Teile zerlegt. Sortiere: Was ist die Aussage, was der Beleg, was die Erklärung?", buckets: ["Aussage", "Beleg", "Erklärung"], cols: 220, items: [
        { t: "Lärm belastet den Körper auch nachts.", b: 0 },
        { t: "Im Text heißt es: „Das geschieht sogar im Schlaf“ (Z. 27–28).", b: 1 },
        { t: "Das bedeutet: Auch wer schläft, ist dem Lärm ausgesetzt und erholt sich schlechter.", b: 2 },
        { t: "Ein Hörschaden lässt sich nicht rückgängig machen.", b: 0 },
        { t: "Laut Text wachsen Haarzellen beim Menschen nicht nach (vgl. Z. 20–21).", b: 1 },
        { t: "Daran sieht man, wie wichtig es ist, das Gehör von Anfang an zu schützen.", b: 2 }
      ] },
      { art: "sort", id: "drei", nur: "M", tag: "Sortieren", titel: "Was ist was?", lead: "Zwei kleine Antworten auf die Frage, warum Lärm gefährlich ist – in ihre Teile zerlegt. Sortiere: Was ist die Aussage, was der Beleg, was die Erklärung?", buckets: ["Aussage", "Beleg", "Erklärung"], cols: 220, items: [
        { t: "Lärm belastet den Körper auch nachts.", b: 0 },
        { t: "Im Text heißt es, das Ohr bleibe „immer auf Empfang“ (Z. 43).", b: 1 },
        { t: "Das bedeutet: Auch im Schlaf nimmt der Körper Geräusche wahr und erholt sich schlechter.", b: 2 },
        { t: "Ein Hörschaden lässt sich nicht rückgängig machen.", b: 0 },
        { t: "Dem Text zufolge wachsen Haarzellen beim Menschen nicht nach (vgl. Z. 31–32).", b: 1 },
        { t: "Daran wird deutlich, wie wichtig es ist, das Gehör von Anfang an zu schützen.", b: 2 }
      ] },
      { art: "merke", kopf: "MERKE: Der Dreischritt", html: "<ol><li><strong>Aussage</strong> – Was behauptest du über den Text?</li><li><strong>Beleg</strong> – Wo steht das? Wörtliches Zitat (Z. …) oder sinngemäße Wiedergabe (vgl. Z. …).</li><li><strong>Erklärung</strong> – Was zeigt die Stelle? <em>Das bedeutet, dass … · Daran sieht man, dass … · Damit wird deutlich, dass …</em></li></ol><p>Der <button class=\"term\" data-t=\"dreischritt\">Dreischritt</button> macht aus einer Behauptung eine Antwort, die überzeugt. Ein Zitat ohne Erklärung bleibt ein Fundstück – erst deine Erklärung zeigt, dass du es verstanden hast.</p>" },
      { art: "mc", id: "erk", tag: "Erklärung prüfen", fragen: [
        { q: "Der Text sagt, dass Haarzellen beim Menschen nicht nachwachsen. Welche Erklärung zu dieser Stelle ist gelungen?", o: ["Das bedeutet, dass ein einmal entstandener Hörschaden für immer bleibt.", "Das bedeutet, dass die Haarzellen beim Menschen nicht nachwachsen.", "Das bedeutet, dass man nie wieder laute Musik hören darf.", "Das finde ich ziemlich erschreckend und auch ein bisschen unfair."], a: 0, e: "Eine Erklärung sagt, was aus der Stelle folgt. Sie wiederholt nicht bloß den Beleg, übertreibt nicht und ist keine reine Meinung." }
      ] },
      { art: "offen", id: "zit", nur: "R", tag: "Zitieren und erklären", titel: "Dein Dreischritt", fragen: [
        { q: "Aussage: Laute Musik schadet dem Gehör auch dann, wenn sie uns gefällt. Belege das mit einem wörtlichen Zitat und erkläre das Zitat in einem zweiten Satz.", m: "Im Text heißt es: „Zu laute Musik schadet ihm, auch wenn sie uns gefällt“ (Z. 48–49). Das bedeutet, dass auch die eigene Lieblingsmusik das Gehör schädigen kann, wenn man sie zu laut hört.", k: ["schadet ihm|auch wenn sie uns gefällt|gleichgültig", "z.|zeile", "bedeutet|heißt das|zeigt|daran sieht|also|deutlich"] }
      ], tipp: "Erst das Zitat in „…“ mit (Z. …), dann ein Satz, der mit „Das bedeutet, dass …“ beginnt.", hilfen: ["Die Stelle steht im Abschnitt über die Lärmquellen – suche das Wort „gleichgültig“.", "So kannst du beginnen: Im Text heißt es: „…“ (Z. …).", "Zweiter Satz: Das bedeutet, dass …"] },
      { art: "offen", id: "zit", nur: "M", tag: "Zitieren und erklären", titel: "Dein Dreischritt", fragen: [
        { q: "Zeige mit dem Dreischritt, dass Lärm auch dann schadet, wenn das Gehör gesund bleibt. Schreibe Aussage, Beleg (kurzes Zitat mit Zeile) und Erklärung.", m: "Lärm schadet nicht nur dem Gehör, sondern dem ganzen Körper. Der Text erklärt, dass bei Lärm „Puls und Blutdruck steigen“ (Z. 40–41). Das bedeutet, dass Lärm den Körper in Alarm versetzt und auf Dauer Herz und Kreislauf belastet.", k: ["stress|puls|blutdruck|warnsignal|unversehrt|herz|schlaf", "z.|zeile", "bedeutet|heißt das|zeigt|daran|also|deutlich"] }
      ], tipp: "Die passende Stelle findest du im Abschnitt, der mit „Weniger bekannt ist …“ beginnt." },
      { art: "merke", nur: "M", kopf: "MERKE: Das Zitat in den eigenen Satz einbauen", html: "<p>Geübte Schreiber stellen ein Zitat nicht nur hinter einen Doppelpunkt – sie <button class=\"term\" data-t=\"einbauen\">bauen es ein</button>:</p><p><em>Der Text bezeichnet Ruhe als „eine Voraussetzung dafür, gesund zu bleiben“ (Z. 76).</em></p><ul><li>Kurz zitieren: Oft genügt eine Wortgruppe.</li><li>Laut lesen: Der Satz muss mit dem Zitat grammatisch aufgehen.</li><li>Am Wortlaut ändert sich nichts.</li></ul>" },
      { art: "text", nur: "R", html: "<p>Für Profis: Ein kurzes Zitat lässt sich auch in den eigenen Satz <button class=\"term\" data-t=\"einbauen\">einbauen</button>, zum Beispiel so: <em>Der Text nennt Lärm „eine unterschätzte Belastung“ (Z. 5).</em> Der Satz muss mit dem Zitat grammatisch aufgehen – lies ihn zur Probe laut.</p>" },
      { art: "mc", id: "einb", nur: "M", m7: true, tag: "Zitat einbauen", fragen: [
        { q: "Welcher Satz baut das Zitat richtig ein?", o: ["Der Text stellt fest, dass der Hörverlust „endgültig“ ist (Z. 33).", "Der Text stellt fest, dass „ist dieser Hörverlust endgültig“ (Z. 32–33).", "Der Text stellt fest, der Hörverlust „endgültig“ bleibt für immer.", "Der Text stellt fest, dass der Hörverlust endgültig ist."], a: 0, e: "Der Satz muss mit dem Zitat grammatisch aufgehen, und die Zeilenangabe gehört dazu. Ohne Anführungszeichen und Zeile ist es kein Zitat mehr." },
        { q: "Das eingebaute Zitat steht am Satzende. Wohin gehört der Punkt?", o: ["hinter die Klammer mit der Zeilenangabe", "vor das schließende Anführungszeichen", "zwischen Anführungszeichen und Klammer", "an zwei Stellen: vor und hinter die Klammer"], a: 0, e: "So sieht es aus: Dem Text zufolge bleibt das Ohr „immer auf Empfang“ (Z. 43). Der Punkt aus dem Original entfällt." }
      ] },
      { art: "mc", id: "einb", nur: "R", m7: true, tag: "Zitat einbauen", fragen: [
        { q: "Welcher Satz baut das Zitat richtig ein?", o: ["Der Text erklärt, dass schon leisere Geräusche „den Körper unter Stress“ setzen (Z. 25).", "Der Text erklärt, dass „Geräusche setzen den Körper unter Stress“ (Z. 25).", "Der Text erklärt, leisere Geräusche „den Körper unter Stress“ sind schädlich.", "Der Text erklärt, dass schon leisere Geräusche den Körper unter Stress setzen."], a: 0, e: "Der Satz muss mit dem Zitat grammatisch aufgehen, und die Zeilenangabe gehört dazu. Ohne Anführungszeichen und Zeile ist es kein Zitat mehr." },
        { q: "Das eingebaute Zitat steht am Satzende. Wohin gehört der Punkt?", o: ["hinter die Klammer mit der Zeilenangabe", "vor das schließende Anführungszeichen", "zwischen Anführungszeichen und Klammer", "an zwei Stellen: vor und hinter die Klammer"], a: 0, e: "So sieht es aus: Der Text nennt Lärm „eine unterschätzte Belastung“ (Z. 5). Der Punkt aus dem Original entfällt." }
      ] },
      { art: "offen", id: "bau", nur: "M", m7: true, tag: "Einbauen und erklären", titel: "Zitat im eigenen Satz", fragen: [
        { q: "Gewöhnung schützt nicht vor Lärm. Belege das: Baue ein kurzes Zitat aus den Zeilen 43–46 in einen eigenen Satz ein und erkläre es in einem zweiten Satz.", m: "Der Text betont, dass Anwohner lauter Straßen weniger tief schlafen, selbst wenn sie überzeugt sind, sich „an den Lärm gewöhnt zu haben“ (Z. 46). Das bedeutet, dass der Körper weiter auf den Lärm reagiert, auch wenn man ihn kaum noch bewusst wahrnimmt.", k: ["gewöhnt|weniger tief|nicht aufwacht|überzeugt", "z.|zeile", "bedeutet|heißt das|zeigt|daran|also|deutlich"] }
      ], tipp: "Zitiere nur wenige Wörter und baue deinen Satz um sie herum. Lies ihn zur Probe laut – klingt er wie ein richtiger Satz?" },
      { art: "offen", id: "bau", nur: "R", m7: true, tag: "Einbauen und erklären", titel: "Zitat im eigenen Satz", fragen: [
        { q: "Baue das Zitat „nicht nur den Ohren“ (Z. 24) in einen eigenen Satz ein und erkläre in einem zweiten Satz, was damit gemeint ist.", m: "Der Text betont, dass Lärm „nicht nur den Ohren“ schadet (Z. 24). Damit ist gemeint, dass auch Herz, Kreislauf und Schlaf unter Lärm leiden.", k: ["nicht nur den ohren", "z.|zeile", "bedeutet|heißt das|zeigt|daran|also|deutlich|gemeint"] }
      ], tipp: "So kannst du beginnen: Der Text betont, dass Lärm … Lies den vierten Abschnitt, um zu erklären, wem Lärm noch schadet." }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Belegen kann ich nur, was wirklich im Text steht.", true],
        ["In einem wörtlichen Zitat darf ich ein Wort weglassen, ohne das zu kennzeichnen.", false],
        ["Die Abkürzung „vgl.“ steht vor der Zeilenangabe, wenn ich sinngemäß wiedergebe.", true],
        ["Eine sinngemäße Wiedergabe braucht keine Zeilenangabe.", false],
        ["Nach dem Beleg erkläre ich, was die Textstelle zeigt.", true],
        ["Eine eigene Erfahrung kann die Textstelle als Beleg ersetzen.", false]
      ] }
    ] }
  ],
  weiter: { href: "les_03.html", titel: "Modul 3: Tabellen, Diagramme, Infografiken", text: "Nicht alle Informationen stehen in ganzen Sätzen. Im nächsten Modul liest du <strong>Tabellen und Diagramme</strong>, prüfst Aussagen daran – und füllst ein Formular aus." }
});
