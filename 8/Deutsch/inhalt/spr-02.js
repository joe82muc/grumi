/* Deutsch 8 · Grammatik und Sprache · Modul 8: Wörter und ihre Wirkung
   (Wortfelder, Ober- und Unterbegriffe, Synonyme, Antonyme, Homonyme – M8: Mehrdeutigkeit; Wortbildung: Ableitung mit
   Umlaut, Zusammensetzung, Nominalisierung, Neuschöpfung – M8: Kurzwörter, Änderung des Stammvokals; Fremdwörter und
   Internationalismen – M8: lateinische und französische Herkunft; Sprachwandel an drei Beispielwörtern; Euphemismus –
   M8 zusätzlich Hyperbel)
   LehrplanPLUS D8 4.1 (Wortschatz, Sprachwandel, Fremdwörter), 4.2 (Wortbildung, Wirkung von Wörtern).
   Texte: „Wörter von früher und heute“ / „Sprache steht nie still“ (texte/sprache/wandel-r.js und -m.js),
   „Gut verpackt?“ / „Verhüllen oder übertreiben“ (wirkung-r.js und -m.js) – alles erfunden; die Sachangaben zu „Fräulein“,
   „Hochzeit“, „toll“ und „Handy“ stehen im Kopf der Textdateien.
   Fremdwort-Herkunft nur sicher belegt: Information, Projekt, Student (lateinisch); Etage, Garage, Chance (französisch). */
D7Kit.seite({
  id: "spr-02",
  titel: "Wörter und ihre Wirkung",
  einleitung: "Mit Wörtern kannst du genau sagen, was du meinst – oder etwas verpacken. Du sortierst Wörter nach Bedeutung, siehst ihnen beim Wachsen zu, fragst nach ihrer Herkunft und prüfst, wie sie auf andere wirken.",
  zeit: "etwa 40 Minuten",
  ziele: ["🔤 Ich ordne Wörter nach Wortfeldern, Ober- und Unterbegriffen.", "🧱 Ich erkenne, wie Wörter gebildet werden.", "🌍 Ich erkläre Fremdwörter und den Wandel von Wörtern.", "🎭 Ich durchschaue Euphemismen und beurteile ihre Wirkung."],
  haupttext: { R: "spr-wandel-r", M: "spr-wandel-m" },
  quiz: { profi: "Wörter-Profi" },
  glossar: {
    wortfeld: ["Wortfeld", "Wörter mit ähnlicher Bedeutung, die zum selben Bereich gehören, zum Beispiel schlendern, rennen und schleichen im Wortfeld „gehen“."],
    oberbegriff: ["Oberbegriff", "Ein Wort, das mehrere Unterbegriffe zusammenfasst: „Möbel“ ist Oberbegriff zu Tisch, Regal und Sessel."],
    synonym: ["Synonym", "Ein Wort mit (fast) gleicher Bedeutung wie ein anderes, zum Beispiel „Auto“ und „Wagen“."],
    antonym: ["Antonym", "Ein Wort mit gegensätzlicher Bedeutung, zum Beispiel „mutig“ und „ängstlich“."],
    homonym: ["Homonym", "Ein Wort, das gleich geschrieben und gesprochen wird, aber mehrere Bedeutungen hat, zum Beispiel „Ball“ (Spielgerät und Tanzfest)."],
    ableitung: ["Ableitung", "Aus einem Wort entsteht ein neues, indem man eine Vor- oder Nachsilbe anfügt, manchmal mit Umlaut: Kraft – kräftig."],
    zusammensetzung: ["Zusammensetzung", "Zwei Wörter werden zu einem neuen: Handy + Hülle = Handyhülle. Das letzte Wort ist das Grundwort."],
    nominalisierung: ["Nominalisierung", "Ein Verb oder Adjektiv wird als Nomen gebraucht und großgeschrieben: lesen – das Lesen."],
    kurzwort: ["Kurzwort", "Ein verkürztes Wort, zum Beispiel „Azubi“ für Auszubildende."],
    fremdwort: ["Fremdwort", "Ein Wort aus einer anderen Sprache, das man an Schreibung oder Aussprache noch als fremd erkennt, zum Beispiel „Information“."],
    internationalismus: ["Internationalismus", "Ein Wort, das in vielen Sprachen gleich oder ähnlich vorkommt, zum Beispiel „Hotel“ oder „Taxi“."],
    sprachwandel: ["Sprachwandel", "Wörter und ihre Bedeutungen verändern sich im Lauf der Zeit: Manche verschwinden, manche ändern den Sinn, manche entstehen neu."],
    euphemismus: ["Euphemismus", "Ein beschönigendes Wort für etwas Unangenehmes, zum Beispiel „Preisanpassung“ statt „Preiserhöhung“."],
    hyperbel: ["Hyperbel", "Eine starke Übertreibung, zum Beispiel „Ich habe dir das tausendmal gesagt.“"]
  },
  stationen: [
    { kurz: "Wortfelder", ober: "Ausprobieren", titel: "Wörter ordnen: Wortfeld, Gegensatz, Mehrdeutigkeit", teile: [
      { art: "text", html: '<p class="lead">Es gibt viele Wörter für „gehen“. Sie sagen nicht dasselbe, sondern etwas Feines mehr. Zusammen bilden sie ein <button class="term" data-t="wortfeld">Wortfeld</button>. Sortiere sie zuerst und entscheide dann, welches Wort am besten passt.</p>' },
      { art: "sort", id: "gehen", tag: "Sortieren", titel: "Langsam oder schnell?", buckets: ["langsam gehen", "schnell gehen"], cols: 240, items: [
        { t: "schlendern", b: 0 },
        { t: "bummeln", b: 0 },
        { t: "schleichen", b: 0 },
        { t: "rennen", b: 1 },
        { t: "hasten", b: 1 },
        { t: "sprinten", b: 1 }
      ], fertig: "✅ Richtig sortiert!" },
      { art: "mc", id: "syn", tag: "Das passende Wort", fragen: [
        { q: "Welches Wort passt am besten? „Der Dieb ___ leise durch den dunklen Flur.“", o: ["schlich", "rannte", "marschierte"], a: 0, e: "„Schleichen“ sagt, dass jemand leise und vorsichtig geht. Rennen und marschieren passen nicht zu einem Dieb, der nicht gehört werden will." }
      ] },
      { art: "mc", id: "ober", nur: "R", tag: "Oberbegriff", fragen: [
        { q: "Welches Wort ist der Oberbegriff zu Tisch, Regal und Sessel?", o: ["Möbel", "Holz", "Zimmer"], a: 0, e: "Tisch, Regal und Sessel sind alle Möbel. Holz ist ein Stoff, Zimmer ist ein Raum." }
      ] },
      { art: "paare", id: "anto", tag: "Zuordnen", titel: "Gegensätze finden", lead: "Wörter mit gegensätzlicher Bedeutung heißen <button class=\"term\" data-t=\"antonym\">Antonyme</button>. Wörter mit fast gleicher Bedeutung heißen <button class=\"term\" data-t=\"synonym\">Synonyme</button>.", paare: [
        ["großzügig", "geizig"],
        ["mutig", "ängstlich"],
        ["vorsichtig", "leichtsinnig"],
        ["sparsam", "verschwenderisch"],
        ["fleißig", "faul"]
      ] },
      { art: "paare", id: "homo", tag: "Zuordnen", titel: "Ein Wort, zwei Bedeutungen", lead: "Manche Wörter schreibt und spricht man gleich, obwohl sie verschiedene Dinge meinen. Das sind <button class=\"term\" data-t=\"homonym\">Homonyme</button>. Ordne die Sätze zu.", paare: [
        ["Der Schlüssel steckt im Schloss.", "Vorrichtung zum Abschließen"],
        ["Das Schloss auf dem Berg ist ein Museum.", "Gebäude für Fürsten und Adelige"],
        ["Der Ball rollt ins Tor.", "Spielgerät"],
        ["Auf dem Abschlussball tanzen alle.", "Tanzfest"]
      ] },
      { art: "mc", id: "mehr", m7: true, tag: "Mehrdeutigkeit", fragen: [
        { q: "Welcher Satz ist mehrdeutig, obwohl kein einzelnes Wort mehrere Bedeutungen hat?", o: ["Sie beobachtete den Jungen mit dem Fernglas.", "Sie beobachtete den Jungen im Park.", "Sie beobachtete den Jungen lange."], a: 0, e: "Hier ist unklar, wer das Fernglas hat: Sie oder der Junge? Die Mehrdeutigkeit liegt im Satzbau, nicht in einem einzelnen Wort." }
      ] },
      { art: "merke", kopf: "MERKE: Wörter ordnen", html: '<ul><li><b>Wortfeld:</b> Wörter zu einem Bereich, mit feinen Unterschieden (schlendern, rennen).</li><li><b>Oberbegriff – Unterbegriff:</b> Möbel – Tisch.</li><li><b>Synonym / Antonym:</b> fast gleich / gegensätzlich.</li><li><b>Homonym:</b> gleiche Form, verschiedene Bedeutungen (Schloss, Ball).</li></ul>' }
    ] },
    { kurz: "Wortbildung", ober: "Untersuchen", titel: "Wie Wörter entstehen", teile: [
      { art: "text", html: '<p class="lead">Neue Wörter fallen nicht vom Himmel. Man baut sie aus Teilen, die es schon gibt – durch <button class="term" data-t="ableitung">Ableitung</button>, <button class="term" data-t="zusammensetzung">Zusammensetzung</button> oder <button class="term" data-t="nominalisierung">Nominalisierung</button>. Untersuche, wie das geht.</p>' },
      { art: "sort", id: "bildung", nur: "R", tag: "Sortieren", titel: "Wie ist das Wort gebildet?", buckets: ["Ableitung", "Zusammensetzung", "Nominalisierung"], cols: 220, items: [
        { t: "Freundschaft", b: 0 },
        { t: "unfreundlich", b: 0 },
        { t: "Handyhülle", b: 1 },
        { t: "Schulhof", b: 1 },
        { t: "das Lesen", b: 2 },
        { t: "das Schöne", b: 2 }
      ], fertig: "✅ Richtig! Nominalisierte Wörter schreibt man groß." },
      { art: "sort", id: "bildung", nur: "M", tag: "Sortieren", titel: "Wie ist das Wort gebildet?", buckets: ["Ableitung", "Zusammensetzung", "Nominalisierung", "Kurzwort"], cols: 200, items: [
        { t: "Freundschaft", b: 0 },
        { t: "unfreundlich", b: 0 },
        { t: "Handyhülle", b: 1 },
        { t: "Schulhof", b: 1 },
        { t: "das Lesen", b: 2 },
        { t: "das Schöne", b: 2 },
        { t: "Azubi", b: 3 },
        { t: "Akku", b: 3 }
      ], fertig: "✅ Richtig! Ein Kurzwort verkürzt ein längeres Wort, zum Beispiel „Azubi“ für Auszubildende." },
      { art: "mc", id: "grund", tag: "Grundwort", fragen: [
        { q: "Welches Wort ist das Grundwort in „Handyhülle“?", o: ["Hülle", "Handy", "Handyhülle"], a: 0, e: "Das Grundwort steht am Ende und bestimmt Wortart und Artikel: die Hülle – die Handyhülle. „Handy“ ist das Bestimmungswort, es sagt genauer, um welche Hülle es geht." }
      ] },
      { art: "paare", id: "umlaut", tag: "Zuordnen", titel: "Ableitung mit Umlaut", lead: "Bei manchen Ableitungen wird aus a, o oder u ein ä, ö oder ü. Ordne zu.", paare: [
        ["Kraft", "kräftig"],
        ["Land", "ländlich"],
        ["Glas", "gläsern"],
        ["Wut", "wütend"]
      ] },
      { art: "paare", id: "vokal", nur: "M", m7: true, tag: "Zuordnen", titel: "Wenn sich der Stammvokal ändert", lead: "Manche Nomen entstehen aus einem Verb, wobei sich der Stammvokal ändert. Ordne zu.", paare: [
        ["fliegen", "der Flug"],
        ["binden", "der Bund"],
        ["geben", "die Gabe"],
        ["gießen", "der Guss"],
        ["sprechen", "der Spruch"]
      ] },
      { art: "offen", id: "neu", tag: "Selbst formulieren", titel: "Ein neues Wort bilden", fragen: [
        { q: "Für einen Raum in der Schule, in dem man sich in der Pause ausruhen kann, braucht ihr ein neues Wort. Bilde eine Zusammensetzung und nenne Grundwort und Bestimmungswort.", m: "Ruheraum: Das Grundwort ist Raum, das Bestimmungswort ist Ruhe.", k: ["raum|ecke|zimmer|oase|insel|platz|hof", "grundwort", "bestimmungswort"], min: 2 }
      ], tipp: "Das Grundwort steht am Ende. Das Bestimmungswort davor sagt, welche Art von Raum es ist.", hilfen: ["Überlege: Was tut man in diesem Raum? Daraus wird das Bestimmungswort.", "Das Grundwort könnte „Raum“ oder „Ecke“ sein. Sag laut, welches Wort davor steht."] }
    ] },
    { kurz: "Fremdwörter", ober: "Verstehen", titel: "Fremdwörter und Internationalismen", teile: [
      { art: "text", html: '<p class="lead">„Information“, „Interview“, „Konflikt“: Solche <button class="term" data-t="fremdwort">Fremdwörter</button> hören wir täglich. Manche sind in vielen Sprachen fast gleich (<button class="term" data-t="internationalismus">Internationalismen</button>), etwa „Hotel“ oder „Taxi“. Prüfe, ob du sie erklären kannst.</p>' },
      { art: "paare", id: "fremd", tag: "Zuordnen", titel: "Fremdwort und deutsches Wort", paare: [
        ["Information", "Auskunft"],
        ["Konflikt", "Streit"],
        ["Projekt", "Vorhaben"],
        ["Interview", "Befragung"],
        ["Kommunikation", "Verständigung"]
      ] },
      { art: "mc", id: "inter", tag: "Genau hinsehen", fragen: [
        { q: "Was ist ein Internationalismus?", o: ["ein Wort, das in vielen Sprachen gleich oder sehr ähnlich vorkommt, zum Beispiel „Hotel“", "ein Wort, das nur in einem Dialekt vorkommt", "ein Wort, das ausschließlich Fachleute benutzen"], a: 0, e: "Internationalismen erleichtern die Verständigung: Ein Wort wie „Taxi“ versteht man fast überall." }
      ] },
      { art: "mc", id: "wann", nur: "R", tag: "Beurteilen", fragen: [
        { q: "Wann passt ein Fremdwort gut?", o: ["wenn die Leser es kennen und es etwas genauer ausdrückt als ein deutsches Wort", "immer, weil Fremdwörter gebildeter klingen", "nie, denn Fremdwörter sind falsches Deutsch"], a: 0, e: "Ein Fremdwort ist nicht besser oder schlechter. Es soll verstanden werden – dann passt es." }
      ] },
      { art: "sort", id: "herkunft", nur: "M", m7: true, tag: "Sortieren", titel: "Woher kommt das Wort?", lead: "Viele Fremdwörter stammen aus dem Lateinischen oder dem Französischen. Sortiere diese sicher belegten Beispiele.", buckets: ["aus dem Lateinischen", "aus dem Französischen"], cols: 240, items: [
        { t: "Information", b: 0 },
        { t: "Projekt", b: 0 },
        { t: "Student", b: 0 },
        { t: "Etage", b: 1 },
        { t: "Garage", b: 1 },
        { t: "Chance", b: 1 }
      ], fertig: "✅ Richtig! Das Lateinische war lange die Sprache der Wissenschaft, das Französische die des Hofes und der Mode." }
    ] },
    { kurz: "Sprachwandel", ober: "Lesen und untersuchen", titel: "Wörter verändern sich", teile: [
      { art: "text", html: '<p class="lead">Dein Wortschatz ist nicht derselbe wie der deiner Großeltern. Dass sich Wörter verändern, nennt man <button class="term" data-t="sprachwandel">Sprachwandel</button>. Lies, was mit drei Wörtern geschehen ist.</p>' },
      { art: "lesetext", lesetext: { R: "spr-wandel-r", M: "spr-wandel-m" } },
      { art: "beleg", id: "wandel", nur: "R", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-wandel-r", fragen: [
        { q: "Wo erklärt Oma, was sich bei „Hochzeit“ verändert hat?", zeilen: [8, 10], e: "Früher war es jedes hohe Fest, heute meint man nur noch die Heirat.", tipp: "Suche das alte Wort „hôchzît“." },
        { q: "In welchen Zeilen steht, dass „handy“ im Englischen etwas anderes bedeutet?", zeilen: [18, 21], e: "Im Englischen heißt das Telefon „mobile phone“, „handy“ bedeutet dort „praktisch“.", tipp: "Suche das Wort „England“." }
      ], hilfen: ["Die Antwort steht in Omas Erklärung.", "Gesucht ist die Stelle über das neue Wort „Handy“."] },
      { art: "beleg", id: "wandel", nur: "M", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-wandel-m", fragen: [
        { q: "In welchen Zeilen wird die Bedeutungsverengung bei „Hochzeit“ beschrieben?", zeilen: [8, 11], e: "Aus „jedes hohe Fest“ wurde „nur noch das Fest einer Heirat“ – die Bedeutung hat sich verengt.", tipp: "Suche das Wort „verengt“." },
        { q: "Wo wird erklärt, warum „Handy“ eine Scheinentlehnung ist?", zeilen: [18, 20], e: "Das Wort klingt nach einer fremden Sprache, existiert dort aber nicht mit dieser Bedeutung.", tipp: "Suche das Wort „Scheinentlehnung“." }
      ] },
      { art: "mc", id: "hoch", nur: "R", tag: "Genau hinsehen", fragen: [
        { q: "Was ist mit dem Wort „Hochzeit“ passiert?", o: ["Früher meinte es jedes hohe Fest, heute nur noch eine Heirat.", "Früher meinte es eine Heirat, heute jedes Fest.", "Es hat sich nie verändert."], a: 0, e: "Die Bedeutung ist enger geworden: Aus „großes Fest“ wurde „Fest einer Heirat“." }
      ] },
      { art: "mc", id: "toll", nur: "M", tag: "Genau hinsehen", fragen: [
        { q: "Welche Art von Wandel zeigt das Wort „toll“?", o: ["Die Bedeutung hat sich von „verrückt“ zu „großartig“ gewandelt.", "Das Wort ist ganz aus dem Gebrauch verschwunden.", "Das Wort wurde aus dem Englischen übernommen."], a: 0, e: "„Toll“ gibt es noch, aber mit gewandeltem Sinn: Früher meinte es „verrückt“ oder „wild“ (siehe „Tollwut“), heute ist es ein Lob." }
      ] },
      { art: "paare", id: "wandel2", nur: "R", tag: "Zuordnen", titel: "Drei Wege des Wandels", paare: [
        ["Fräulein", "kaum noch gebräuchlich"],
        ["Hochzeit", "früher jedes hohe Fest"],
        ["toll", "früher „verrückt“, heute „großartig“"],
        ["Handy", "im Deutschen gebildet, klingt englisch"]
      ] }
    ] },
    { kurz: "Wirkung", ober: "Beurteilen", titel: "Euphemismus – schön verpackt", teile: [
      { art: "text", html: '<p class="lead">Ein <button class="term" data-t="euphemismus">Euphemismus</button> klingt freundlicher, als die Sache ist. Wer ihn benutzt, will etwas Unangenehmes mildern oder verhüllen. Lies, wie das in drei Mitteilungen aussieht.</p>' },
      { art: "lesetext", lesetext: { R: "spr-wirkung-r", M: "spr-wirkung-m" } },
      { art: "beleg", id: "wirkung", nur: "R", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-wirkung-r", fragen: [
        { q: "Wo steht ein Wort, das eine Preiserhöhung freundlicher klingen lässt?", zeilen: [3, 5], e: "„Preisanpassung“ klingt neutral, gemeint ist: Es wird teurer.", tipp: "Suche den Brief des Möbelhauses." },
        { q: "Welche Zeilen verpacken, dass das Essen nicht geschmeckt hat?", zeilen: [8, 9], e: "„Nicht jedermanns Geschmack“ – gemeint ist, dass es vielen nicht geschmeckt hat.", tipp: "Suche den Aushang an der Mensa." }
      ], hilfen: ["Der Brief steht am Anfang.", "Der Aushang steht am Ende."] },
      { art: "beleg", id: "wirkung", nur: "M", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-wirkung-m", fragen: [
        { q: "In welchen Zeilen stehen Euphemismen?", zeilen: [3, 6], e: "„Preisanpassung“ verhüllt die Preiserhöhung, „freigesetzt“ den Verlust der Stellen.", tipp: "Suche die Mitteilung des Möbelhauses." },
        { q: "Wo findest du eine Hyperbel?", zeilen: [9, 10], e: "„Bis zum Mond“ ist eine offensichtliche Übertreibung – niemand versteht das wörtlich.", tipp: "Suche den Prospekt des Schnäppchenmarkts." }
      ] },
      { art: "paare", id: "euph", tag: "Zuordnen", titel: "Was ist wirklich gemeint?", paare: [
        ["entschlafen", "gestorben"],
        ["Preisanpassung", "Preiserhöhung"],
        ["Mitarbeiter freisetzen", "Mitarbeiter entlassen"],
        ["nicht jedermanns Geschmack", "schmeckt vielen nicht"]
      ] },
      { art: "mc", id: "wirk", tag: "Wirkung", fragen: [
        { q: "Warum schreibt das Möbelhaus „Preisanpassung“ statt „Preiserhöhung“?", o: ["Das Wort klingt harmloser, die Kundschaft soll sich weniger ärgern.", "„Preisanpassung“ ist das genauere Fachwort.", "Die Preise werden damit niedriger."], a: 0, e: "Gemeint ist dasselbe: Es wird teurer. Das Wort mildert nur die Wirkung auf die Leser." }
      ] },
      { art: "sort", id: "hyper", nur: "M", m7: true, tag: "Sortieren", titel: "Euphemismus oder Hyperbel?", lead: "Ein Euphemismus verhüllt, eine <button class=\"term\" data-t=\"hyperbel\">Hyperbel</button> übertreibt.", buckets: ["Euphemismus", "Hyperbel"], cols: 240, items: [
        { t: "Opa ist entschlafen.", b: 0 },
        { t: "Die Preise wurden angepasst.", b: 0 },
        { t: "Wir setzen leider Personal frei.", b: 0 },
        { t: "Ich habe dir das schon tausendmal gesagt.", b: 1 },
        { t: "Ich sterbe vor Hunger!", b: 1 },
        { t: "Das dauert ja eine halbe Ewigkeit!", b: 1 }
      ], fertig: "✅ Richtig! Beide Mittel wirken auf die Leser, aber auf verschiedene Weise." },
      { art: "offen", id: "wirk2", nur: "R", tag: "Beurteilen", titel: "Warum ist das ein Problem?", fragen: [
        { q: "Warum kann ein Euphemismus für die Leser ein Problem sein? Antworte in einem Satz.", m: "Weil er die Wahrheit verdeckt: Die Leser merken vielleicht nicht gleich, dass es für sie schlechter oder teurer wird.", k: ["verdeck|verschleier|versteck|verhüll|beschönig|nicht klar|nicht gleich|täusch|nicht merk|irre", "teurer|schlecht|unangenehm|wahrheit|tatsache|nachteil|preis|kunden|leser"], min: 2 }
      ], tipp: "Überlege: Was erfährt der Leser nicht, wenn die Mitteilung so freundlich klingt?", hilfen: ["Denke an „Preisanpassung“: Was bedeutet das für die Kundschaft?", "Beginne mit „Weil er …“."] },
      { art: "offen", id: "wirk2", nur: "M", tag: "Beurteilen", titel: "Zwei Mittel, zwei Wirkungen", fragen: [
        { q: "Beschreibe in zwei Sätzen, wie Euphemismus und Hyperbel jeweils auf die Leser wirken sollen.", m: "Ein Euphemismus soll die Leser beruhigen, weil er Unangenehmes verhüllt. Eine Hyperbel soll Aufmerksamkeit wecken, weil sie auffällig übertreibt.", k: ["beruhig|verhüll|beschönig|verdeck|harmlos|mildert|ärger|weniger", "aufmerksam|übertreib|auffall|neugier|begeister|bemerk|auffällig"], min: 2 }
      ], tipp: "Frage dich bei jedem Mittel: Was soll der Leser fühlen oder tun?" }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "sicher", tag: "Lückentext", titel: "Wörter in fünf Sätzen", absaetze: [
        ["Ein ", { g: "Oberbegriff" }, " fasst mehrere Unterbegriffe zusammen, zum Beispiel „Möbel“."],
        ["Wörter mit fast gleicher Bedeutung heißen ", { g: "Synonyme" }, ", Wörter mit gegensätzlicher Bedeutung heißen ", { g: "Antonyme" }, "."],
        ["Bei einer ", { g: "Zusammensetzung" }, " bestimmt das Grundwort den Artikel."],
        ["Ein ", { g: "Euphemismus" }, " beschönigt etwas Unangenehmes."],
        ["Wenn sich Wörter und ihre Bedeutungen verändern, spricht man von ", { g: "Sprachwandel" }, "."]
      ], extra: ["Homonym", "Ableitung"] }
    ] }
  ],
  weiter: { titel: "Zur Übersicht", text: "Du hast das Ende der Sprachmodule erreicht. Wenn du gegen die KI oder am Tisch gegen eine Mitschülerin antreten möchtest: Im Zusatzmodul „Grammatik-Duelle“ wartet der nächste Wettkampf." }
});
