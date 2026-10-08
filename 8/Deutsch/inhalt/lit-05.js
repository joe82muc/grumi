/* Deutsch 8 · Literatur und Textanalyse · Modul 5: Szene, Hörspiel, Film
   (Epik – Lyrik – Dramatik an drei kurzen Beispielen unterscheiden; dieselbe Begebenheit als Erzähltext und als Szene
   vergleichen: Was kann der Erzähler, was muss die Szene zeigen? Regieanweisung, Dialog, Selbstgespräch; Hörspiel: Stimme,
   Geräusch, Pause und ihre Wirkung; Film nur über Beschreibung: Einstellung und Ton; R8: aus einem Erzählabschnitt einen
   kurzen Dialog machen; M8: Szene schreiben und die Formen vergleichen, medienspezifische Besonderheiten benennen und ihre
   Wirkung beurteilen)
   LehrplanPLUS D8 2.2 (epische, lyrische, dramatische Texte unterscheiden; Darstellungsformen vergleichen – Buch, Film,
   Theater; M8: auch Hörtext, medienspezifische Besonderheiten), 1.1 (Hörspielen aufmerksam zuhören; M8: Sende- und
   Darstellungsformen gegenüberstellen), 1.4 (Texte szenisch umsetzen), 3.2 (gestaltendes Interpretieren: Dialog verfassen).
   Texte: „Der Aushang“ als Erzähltext (texte/literatur/aushang-r.js, -m.js) und als Szene (aushang-szene.js), Hörspielszene
   „Der Aushang: Am nächsten Abend“ (texte/hoertexte/hoerspiel-aushang.js) – alles erfunden, auch der „Drehplan“ und die drei
   Kurztexte der ersten Station. Es kommen keine echten Filme, Bücher oder Sendungen vor. */
D7Kit.seite({
  id: "lit-05",
  titel: "Szene, Hörspiel, Film",
  einleitung: "Ein Zettel im Treppenhaus, ein Junge mit Trompetenkoffer, eine Nachbarin mit Einkaufstaschen: Dieselbe Begebenheit kannst du lesen, auf der Bühne sehen, im Hörspiel hören oder im Film anschauen. Heute findest du heraus, was jede Form kann – und was sie anders lösen muss.",
  zeit: "etwa 45 Minuten",
  ziele: ["📚 Ich unterscheide erzählende Texte, Gedichte und Texte für die Bühne.", "🎭 Ich vergleiche einen Erzähltext mit einer Szene.", "🎧 Ich erkenne, wie Stimme, Geräusch und Pause im Hörspiel wirken.", "🎬 Ich beschreibe, wie ein Film mit Kamera und Ton erzählt."],
  haupttext: { R: "lit-aushang-r", M: "lit-aushang-m" },
  quiz: { profi: "Bühnen-Profi" },
  glossar: {
    epik: ["Epik", "Erzählende Texte: Ein Erzähler berichtet, was geschieht – zum Beispiel in Kurzgeschichte, Roman oder Märchen."],
    lyrik: ["Lyrik", "Gedichte: Texte in Versen, oft mit Strophen, Reim und sprachlichen Bildern."],
    dramatik: ["Dramatik", "Texte für die Bühne: Figuren sprechen im Dialog, dazu kommen Regieanweisungen. Einen Erzähler gibt es nicht."],
    erzaehler: ["Erzähler", "Die Stimme, die eine Geschichte erzählt. Sie kann sagen, was eine Figur denkt und fühlt, und sie kann zurückblicken."],
    szene: ["Szene", "Ein kurzer Abschnitt eines Theaterstücks, Hörspiels oder Films an einem Ort und zu einer Zeit."],
    dialog: ["Dialog", "Ein Gespräch zwischen zwei oder mehr Figuren."],
    regie: ["Regieanweisung", "Ein Hinweis im Theatertext, meist in Klammern: Wo spielt die Szene? Was tun die Figuren? Wie sprechen sie?"],
    selbst: ["Selbstgespräch", "Eine Figur spricht laut mit sich selbst. So erfährt das Publikum, was sie denkt."],
    hoerspiel: ["Hörspiel", "Eine Geschichte nur zum Hören: Stimmen, Geräusche, Musik und Pausen – ein Bild gibt es nicht."],
    einstellung: ["Einstellung", "Im Film: ein Stück ohne Schnitt. Die Einstellungsgröße sagt, wie nah die Kamera herangeht."],
    totale: ["Totale", "Die Kamera zeigt den ganzen Ort; die Figuren sind klein. Man bekommt den Überblick."],
    gross: ["Großaufnahme", "Ein Gesicht füllt das Bild. Man sieht genau, was die Figur fühlt."],
    detail: ["Detailaufnahme", "Nur ein kleiner Ausschnitt ist zu sehen: eine Hand, ein Gegenstand, ein Wort auf einem Zettel."]
  },
  stationen: [
    { kurz: "Gattungen", ober: "Ausprobieren", titel: "Dreimal dasselbe – und doch ganz verschieden", teile: [
      { art: "beispiel", kopf: "Der Schlüssel ist weg – in drei Fassungen", html: "<p><b>Text A</b><br>Erst vor der Haustür merkte Bela, dass seine Jackentasche leer war. Er tastete alle Taschen noch einmal ab. Nichts. Im dritten Stock brannte Licht, aber dort wohnte er nicht.</p><p><b>Text B</b><br>Die Tasche leer, die Tür bleibt stumm,<br>ich klopfe – nichts, kein Schritt, kein Licht.<br>Die Nacht geht um das Haus herum<br>und kennt mich nicht.</p><p><b>Text C</b><br>(Vor einer Haustür, Abend. Bela durchwühlt seine Jackentaschen.)<br>BELA: Das gibt’s doch nicht. (Er rüttelt an der Tür.) Hallo?<br>NACHBARIN (öffnet oben ein Fenster): Schon wieder der Schlüssel?<br>BELA (sieht hinauf, verlegen): Schon wieder.</p>" },
      { art: "mc", id: "gattung", tag: "Erster Blick", fragen: [
        { q: "Welcher der drei Texte ist für die Bühne geschrieben?", o: ["Text C", "Text A", "Text B"], a: 0, e: "In Text C stehen Namen vor der Rede, und in Klammern steht, was die Figuren tun. Einen Erzähler gibt es nicht." },
        { q: "Woran erkennst du, dass Text B ein Gedicht ist?", o: ["an den kurzen Versen und am Reim", "an den Namen vor jeder Rede", "an dem Erzähler, der berichtet"], a: 0, e: "stumm – herum, Licht – nicht: Die Verse reimen sich. Außerdem spricht ein „ich“, und die Tür „bleibt stumm“ – ein sprachliches Bild." }
      ] },
      { art: "merke", kopf: "MERKE: Drei Gattungen", html: "<ul><li><b><button class=\"term\" data-t=\"epik\">Epik</button></b> – erzählende Texte. Ein <button class=\"term\" data-t=\"erzaehler\">Erzähler</button> berichtet, meist im Präteritum: Kurzgeschichte, Roman, Märchen.</li><li><b><button class=\"term\" data-t=\"lyrik\">Lyrik</button></b> – Gedichte. Verse, oft Strophen und Reim; häufig spricht ein lyrisches Ich.</li><li><b><button class=\"term\" data-t=\"dramatik\">Dramatik</button></b> – Texte für die Bühne. Figuren sprechen im <button class=\"term\" data-t=\"dialog\">Dialog</button>; <button class=\"term\" data-t=\"regie\">Regieanweisungen</button> sagen, was zu sehen ist.</li></ul>" },
      { art: "sort", id: "merkm", tag: "Sortieren", titel: "Zu welcher Gattung gehört das?", buckets: ["Epik", "Lyrik", "Dramatik"], cols: 200, items: [
        { t: "Ein Erzähler berichtet.", b: 0 },
        { t: "Kurzgeschichte, Roman, Märchen", b: 0 },
        { t: "„…“, sagte sie und ging.", b: 0 },
        { t: "Verse und Strophen", b: 1 },
        { t: "oft mit Reim", b: 1 },
        { t: "Ein lyrisches Ich spricht.", b: 1 },
        { t: "Regieanweisungen in Klammern", b: 2 },
        { t: "Namen vor jeder Rede", b: 2 },
        { t: "für die Aufführung geschrieben", b: 2 }
      ] }
    ] },
    { kurz: "Erzähltext", ober: "Lesen", titel: "Der Aushang – erzählt", teile: [
      { art: "text", html: "<p class=\"lead\">Lies die Geschichte einmal ganz. Achte darauf, was du über Jaros <b>Gedanken</b> erfährst – auch über die, die er nicht ausspricht.</p>" },
      { art: "lesetext", lesetext: { R: "lit-aushang-r", M: "lit-aushang-m" } },
      { art: "mc", id: "erz", tag: "Verstehen", fragen: [
        { q: "Warum fährt Jaro Frau Hellwig so schroff an?", o: ["Er hält sie für die Verfasserin des Zettels.", "Sie hat ihn an der Haustür angerempelt.", "Er hat es eilig und will an ihr vorbei."], a: 0, e: "Für Jaro steht fest, wer hinter „Die Nachbarn“ steckt – noch bevor er ein Wort mit ihr gewechselt hat." },
        { q: "Was erfährt Jaro von Frau Hellwig?", o: ["Sie hört ihm jeden Abend am offenen Fenster zu.", "Sie hat den Zettel für alle Nachbarn geschrieben.", "Sie spielt selbst seit vierzig Jahren Posaune."], a: 0, e: "Posaune hat ihr Mann gespielt. Seit er nicht mehr da ist, fehlt ihr die Musik im Haus – deshalb öffnet sie das Küchenfenster." }
      ] },
      { art: "beleg", id: "erzst", nur: "R", tag: "Textstellen finden", titel: "Was der Erzähler weiß", lesetext: "lit-aushang-r", fragen: [
        { q: "In welchen Zeilen erfährst du, warum Jaro sofort an Frau Hellwig denkt?", zeilen: [14, 16], e: "Sie grüßt nie zuerst, und im Winter hat sie sich über seine Stiefel beschwert. Das erzählt der Erzähler als Rückblick – Jaro spricht es nicht aus.", tipp: "Suche die Stelle mit den Stiefeln." },
        { q: "Frau Hellwig sagt: „Das ist nicht von mir.“ In welcher Zeile steht, was Jaro darüber denkt, ohne es zu sagen?", zeilen: [28, 28], e: "„Er glaubte ihr nicht.“ Diesen Gedanken kennt nur der Erzähler – Frau Hellwig hört ihn nicht.", tipp: "Die Stelle steht direkt nach ihrem Satz." }
      ], hilfen: ["Der Erzähler kann in Jaros Kopf schauen. Suche Sätze, die sagen, was Jaro denkt oder früher erlebt hat.", "Achte auf die Wörter „Im Winter“ und „glaubte“."] },
      { art: "beleg", id: "erzst", nur: "M", tag: "Textstellen finden", titel: "Was der Erzähler weiß", lesetext: "lit-aushang-m", fragen: [
        { q: "In welchen Zeilen malt sich Jaro aus, was Frau Hellwig abends tut – obwohl er es gar nicht wissen kann?", zeilen: [19, 21], e: "„Er sah sie vor sich …“: Der Erzähler zeigt, dass Jaros Verdacht nur ein Bild in seinem Kopf ist.", tipp: "Suche die Stelle mit der Uhr." },
        { q: "Frau Hellwig erzählt vom Küchenfenster. Mit welchen sprachlichen Bildern zeigt der Erzähler gleich danach, dass Jaros Sicherheit ins Wanken gerät?", zeilen: [38, 40], e: "Etwas „geriet aus dem Takt“, die Sätze gehörten „zu einem anderen Gespräch“ – Metaphern, die zu einem Musiker passen. So etwas kann nur ein Erzähler sagen.", tipp: "Achte auf ein Wort aus der Musik." },
        { q: "In welchen Zeilen steht, was Jaro am Ende über sich selbst begriffen hat?", zeilen: [54, 55], e: "Er hat sich „in einem Menschen geirrt“. Wer den Zettel geschrieben hat, bleibt dagegen offen.", tipp: "Lies den letzten Absatz." }
      ] }
    ] },
    { kurz: "Szene", ober: "Vergleichen", titel: "Der Aushang – auf der Bühne", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt dieselbe Begebenheit noch einmal – als <button class=\"term\" data-t=\"szene\">Szene</button> für die Bühne. Achte beim Lesen darauf, was verschwunden ist und was neu dazugekommen ist. Den Erzähltext kannst du jederzeit mit dem Knopf „📖 Text“ einblenden.</p>" },
      { art: "beleg", id: "szst", tag: "Lesen und Textstellen finden", titel: "Gedanken sichtbar machen", lead: "Lies die Szene zuerst ganz. Tippe dann die gesuchten Zeilen an.", lesetext: "lit-aushang-szene", fragen: [
        { q: "Im Erzähltext denkt Jaro nur, wer den Zettel geschrieben haben könnte. In welchen Zeilen spricht er seinen Verdacht hier laut aus – zu sich selbst?", zeilen: [8, 9], e: "„Als ob ich nicht wüsste, wer das war.“ Auf der Bühne gibt es keinen Erzähler. Was eine Figur denkt, muss sie sagen – zum Beispiel in einem Selbstgespräch.", tipp: "Jaro ist noch allein auf der Bühne." },
        { nur: "R", q: "Im Erzähltext steht: „Er glaubte ihr nicht.“ In welcher Zeile zeigt die Szene das ohne ein Wort?", zeilen: [20, 20], e: "Jaro verschränkt die Arme und sieht an ihr vorbei. Die Regieanweisung macht aus dem Gedanken eine Haltung, die jeder im Saal sieht.", tipp: "Suche eine Regieanweisung, in der Jaro etwas mit den Armen tut." },
        { nur: "M", q: "Im Erzähltext weiß Jaro nicht, was er sagen soll, und schweigt. In welchen Zeilen zeigt die Szene das – nur durch das Spiel?", zeilen: [27, 28], e: "Jaro öffnet den Mund und sagt nichts. Aus mehreren Sätzen Innensicht wird eine einzige kleine Bewegung – den Rest muss das Publikum selbst erschließen.", tipp: "Suche die Regieanweisung, während Frau Hellwig die Treppe hinaufsteigt." }
      ], hilfen: ["Regieanweisungen stehen in Klammern. Sie sagen, was die Figuren tun und wie sie sprechen.", "Vergleiche mit dem Erzähltext (Knopf „📖 Text“): Wo dort ein Gedanke steht, steht hier eine Handlung oder ein gesprochener Satz."] },
      { art: "mc", id: "szene", tag: "Regieanweisungen", fragen: [
        { q: "Wozu dienen die Regieanweisungen in Klammern?", o: ["Sie sagen, was die Figuren tun und wie sie sprechen.", "Sie verraten, was der Autor von den Figuren hält.", "Sie fassen zusammen, was vor der Szene geschah."], a: 0, e: "„schroff“, „kleinlaut“, „verschränkt die Arme“: Regieanweisungen sind Hinweise für die Schauspielerinnen und Schauspieler. Das Publikum liest sie nicht – es sieht und hört, was daraus wird." }
      ] },
      { art: "merke", kopf: "MERKE: Erzählen und Zeigen", html: "<ul><li>Der <b>Erzähler</b> kann in den Kopf einer Figur schauen, zurückblicken und Zeit überspringen: <i>„Im Winter hatte sie sich beschwert …“</i></li><li>Die <b>Szene</b> muss alles <b>zeigen</b>: durch den Dialog, durch ein <button class=\"term\" data-t=\"selbst\">Selbstgespräch</button>, durch Haltung, Blick und Stimme – und durch Pausen.</li><li>Dafür ist die Szene <b>gegenwärtig</b>: Man ist dabei, wenn es geschieht.</li></ul>" },
      { art: "sort", id: "kann", tag: "Sortieren", titel: "Wo findest du das?", buckets: ["nur im Erzähltext", "nur in der Szene"], cols: 240, items: [
        { t: "Gedanken, die niemand ausspricht", b: 0 },
        { t: "ein Rückblick auf den Winter", b: 0 },
        { t: "Erzählsätze im Präteritum", b: 0 },
        { t: "Regieanweisungen in Klammern", b: 1 },
        { t: "Namen in Großbuchstaben vor der Rede", b: 1 },
        { t: "die Anweisung „Das Licht geht aus“", b: 1 }
      ] },
      { art: "schreiben", id: "dialog", nur: "R", tag: "Schreibtrainer", titel: "Aus Erzählen wird Sprechen", min: 40,
        auftrag: "<p>So könnte die Geschichte am selben Abend weitergehen:</p><p><i>Beim Abendessen erzählte Jaro seiner Mutter von dem Zettel. Sie wollte wissen, wer ihn geschrieben hatte. Jaro zuckte mit den Schultern. Er gab zu, dass er zuerst Frau Hellwig verdächtigt hatte. Seine Mutter schüttelte den Kopf und meinte, ausgerechnet Frau Hellwig würde sich nie über Musik beschweren. Jaro schob den Teller weg und sagte leise, dass er sich bei ihr entschuldigen müsse.</i></p><p>Mach aus diesem Abschnitt einen <b>kurzen Dialog für die Bühne</b> (mindestens 40 Wörter):</p><ul><li>Beginne mit einer Regieanweisung zu Ort und Zeit.</li><li>Schreibe vor jede Rede den Namen in Großbuchstaben.</li><li>Lass Jaro und die Mutter wörtlich sprechen – ohne „sagte er“.</li><li>Füge mindestens zwei Regieanweisungen in Klammern ein: Was tun die beiden? Wie sprechen sie?</li></ul>",
        starter: ["(Küche, Abend. Jaro und seine Mutter sitzen am Tisch.)", "JARO: Unten im Treppenhaus hängt ein Zettel.", "MUTTER (sieht auf): …", "JARO (zuckt mit den Schultern): …"],
        kriterien: ["Am Anfang steht eine Regieanweisung zu Ort und Zeit.", "Vor jeder Rede steht der Name der Figur.", "Die Figuren sprechen wörtlich – ohne Erzähler und ohne „sagte er“.", "Mindestens zwei Regieanweisungen stehen in Klammern.", "Der Inhalt passt zum Erzählabschnitt."] },
      { art: "schreiben", id: "dialog", nur: "M", tag: "Schreibtrainer", titel: "Aus Erzählen wird Zeigen", min: 70,
        auftrag: "<p>So könnte die Geschichte am selben Abend weitergehen:</p><p><i>Beim Abendessen erzählte Jaro seiner Mutter von dem Zettel. Sie wollte wissen, wer ihn geschrieben hatte. Jaro zuckte mit den Schultern. Er gab zu, dass er zuerst Frau Hellwig verdächtigt hatte. Seine Mutter schüttelte den Kopf und meinte, ausgerechnet Frau Hellwig würde sich nie über Musik beschweren. Jaro schob den Teller weg und sagte leise, dass er sich bei ihr entschuldigen müsse.</i></p><p>Schreibe den Abschnitt in eine <b>Szene für die Bühne</b> um (mindestens 70 Wörter):</p><ul><li>Lege Ort und Zeit in einer Regieanweisung fest und lass beide Figuren wörtlich sprechen.</li><li><b>Zeige</b>, dass Jaro sich schämt – ohne dass er es sagt: durch eine Regieanweisung, eine Pause oder die Art, wie er spricht.</li><li>Schreibe unter die Szene zwei Sätze: Was konnte der Erzählabschnitt, was deine Szene nicht kann – und was kann deine Szene besser?</li></ul>",
        starter: ["(Küche, Abend. …)", "MUTTER (ohne aufzusehen): …", "JARO (nach einer Pause): …", "Der Erzählabschnitt konnte …, während meine Szene …"],
        kriterien: ["Eine Regieanweisung legt Ort und Zeit fest; vor jeder Rede steht der Name.", "Die Figuren sprechen wörtlich – ohne Erzähler.", "Jaros Scham wird gezeigt, nicht behauptet (Regieanweisung, Pause oder Sprechweise).", "Der Inhalt passt zum Erzählabschnitt.", "Zwei Sätze vergleichen, was Erzähltext und Szene jeweils leisten."] }
    ] },
    { kurz: "Hörspiel", ober: "Zuhören", titel: "Am nächsten Abend – ein Hörspiel", teile: [
      { art: "text", html: "<p class=\"lead\">Wer den Zettel geschrieben hat, weiß Jaro immer noch nicht. Die <button class=\"term\" data-t=\"hoerspiel\">Hörspiel</button>szene erzählt, wie es am nächsten Abend weitergeht.</p><p>Du hörst drei Stimmen: Jaro, Herrn Brückner – und die „Regie“. Sie sagt an, was man im fertigen Hörspiel hören würde: Geräusche, Pausen und wie jemand spricht. Lies zuerst die Aufgaben. Achte dann beim Hören auf zwei Dinge: <b>Wer</b> hat den Zettel geschrieben und warum? Und: <b>Welche Geräusche</b> kommen vor?</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "lit-hoer-aushang", fragen: [
        { art: "mc", id: "hw", titel: "Hast du genau zugehört?", fragen: [
          { q: "Wer hat den Zettel geschrieben – und aus welchem Grund?", o: ["Herr Brückner – er muss sehr früh aufstehen.", "Frau Hellwig – sie mag keine Blasmusik.", "Jaros Mutter – er soll mehr für die Schule tun."], a: 0, e: "Herr Brückner hat Frühdienst im Krankenhaus. Sein Wecker klingelt um halb fünf, um acht liegt er im Bett." },
          { q: "Was verspricht Jaro?", o: ["Er hört um sieben auf und übt den Schluss am Samstagvormittag.", "Er übt bis zum Konzert nur noch in der Musikschule.", "Er spielt den Schluss ab jetzt eine Oktave tiefer."], a: 0, e: "Beide kommen einander entgegen: Jaro hält die Zeit ein, und am Samstag hat Herr Brückner frei." }
        ] }
      ], hilfen: ["Über dem Abspielknopf stehen die drei Stimmen. Der Name der Stimme, die gerade spricht, leuchtet auf.", "Höre ein zweites Mal und achte nur auf die „Regie“: Welche Geräusche nennt sie?"] },
      { art: "text", html: "<p>Im fertigen Hörspiel gäbe es die Stimme „Regie“ nicht. Man <b>hörte</b> einfach die Klingel, das Summen des Lichts, die Stille. Ein Hörspiel hat kein Bild – es erzählt mit drei Mitteln: mit der <b>Stimme</b> (flüstern, rufen, zögern), mit <b>Geräuschen</b> (sie zeigen Ort und Handlung) und mit der <b>Pause</b>.</p>" },
      { art: "sort", id: "hmittel", tag: "Mittel des Hörspiels", titel: "Stimme, Geräusch oder Pause?", buckets: ["Stimme", "Geräusch", "Pause"], cols: 200, items: [
        { t: "Jaro flüstert: „Nicht jetzt.“", b: 0 },
        { t: "Herr Brückner ruft von der Treppe herauf.", b: 0 },
        { t: "Jaro spricht leise zu sich selbst.", b: 0 },
        { t: "Es klingelt an der Wohnungstür.", b: 1 },
        { t: "Im Treppenhaus summt das Licht.", b: 1 },
        { t: "Eine Reißzwecke fällt auf den Steinboden.", b: 1 },
        { t: "Nach dem abgebrochenen Ton ist es still.", b: 2 },
        { t: "Beide schweigen.", b: 2 }
      ] },
      { art: "mc", id: "pause", tag: "Wirkung", fragen: [
        { q: "Bevor Herr Brückner sagt: „Der ist von mir“, entsteht eine Pause – man hört nur das Licht summen. Was bewirkt diese Pause?", o: ["Sie macht gespannt: Man spürt, dass ihm der Satz schwerfällt.", "Sie beruhigt: Man merkt, dass längst alles geklärt ist.", "Sie langweilt: Man merkt, dass beide nichts zu sagen haben."], a: 0, e: "Im Hörspiel ist Stille nie leer. Vor einem wichtigen Satz hält sie die Spannung – und sie verrät, dass jemand zögert." }
      ] },
      { art: "offen", id: "fenster", m7: true, tag: "Ein Geräusch erzählt", titel: "Das Fenster", fragen: [
        { q: "Während Jaro und Herr Brückner schweigen, wird „unten im Haus“ ein Fenster geschlossen. Wer den Erzähltext kennt, ahnt, wessen Fenster das ist. Erkläre in zwei Sätzen, was dieses Geräusch erzählt – ohne dass ein Wort fällt.", m: "Wahrscheinlich schließt Frau Hellwig ihr Küchenfenster, weil die Trompete verstummt ist. Das Geräusch zeigt ohne Worte, dass sie auch an diesem Abend zugehört hat.", k: ["hellwig|nachbarin|alte frau|die frau", "zugehört|zuhör|gehört|lausch|hört", "küchenfenster|fenster|trompete|verstummt|still|aufgehört|musik"], min: 2 }
      ], tipp: "Erinnere dich an den Erzähltext: Wer öffnet jeden Abend um halb sieben ein Fenster – und wozu?" }
    ] },
    { kurz: "Film", ober: "Vergleichen", titel: "Und im Film?", teile: [
      { art: "beispiel", kopf: "Aus einem Drehplan (erfunden)", html: "<p>Stell dir vor, „Der Aushang“ wird verfilmt. Einen Erzähler gibt es im Film meist nicht – Kamera und Ton übernehmen seine Arbeit. So könnte der Plan für die ersten Bilder aussehen:</p><ol><li><b>Totale:</b> das Treppenhaus von oben. Unten geht die Haustür auf, Jaro kommt herein, klein, mit dem Koffer. <i>Ton:</i> Die Tür fällt hallend ins Schloss.</li><li><b>Detailaufnahme:</b> die rote Reißzwecke, darunter die Wörter „Es reicht!“. <i>Ton:</i> Stille.</li><li><b>Großaufnahme:</b> Jaros Gesicht. Seine Augen wandern über die Zeilen, die Lippen werden schmal. <i>Ton:</i> Ein einzelner tiefer Ton setzt ein.</li></ol>" },
      { art: "karten", karten: [
        { ic: "🏠", titel: "Totale", text: "Die Kamera zeigt den ganzen Ort, die Figuren sind klein. Man bekommt den Überblick: Wo sind wir? Wer ist da?" },
        { ic: "🙂", titel: "Großaufnahme", text: "Ein Gesicht füllt das Bild. Man sieht jede Regung – und ahnt, was die Figur fühlt." },
        { ic: "🔍", titel: "Detailaufnahme", text: "Nur ein kleiner Ausschnitt: eine Hand, ein Gegenstand, ein Wort. Die Kamera sagt: Das hier ist wichtig." },
        { ic: "🔊", titel: "Ton", text: "Stimmen, Geräusche, Musik – oder Stille. Der Ton lenkt das Gefühl, oft ohne dass man es merkt." }
      ] },
      { art: "sort", id: "einst", tag: "Kamera", titel: "Welche Einstellung ist das?", lead: "So geht der Drehplan weiter. Ordne zu. Die Fachwörter: <button class=\"term\" data-t=\"einstellung\">Einstellung</button>, <button class=\"term\" data-t=\"totale\">Totale</button>, <button class=\"term\" data-t=\"gross\">Großaufnahme</button>, <button class=\"term\" data-t=\"detail\">Detailaufnahme</button>.", buckets: ["Totale", "Großaufnahme", "Detailaufnahme"], cols: 200, items: [
        { t: "Das ganze Treppenhaus: Jaro und Frau Hellwig stehen weit auseinander.", b: 0 },
        { t: "Das Mietshaus von der Straße aus, hinter einem Fenster brennt Licht.", b: 0 },
        { t: "Frau Hellwigs Gesicht, während sie den Zettel liest.", b: 1 },
        { t: "Jaros Gesicht, als er „Zu still“ hört.", b: 1 },
        { t: "Eine Hand klappt eine Brille zusammen.", b: 2 },
        { t: "Die Uhrzeit auf dem Handy: 18:20.", b: 2 }
      ] },
      { art: "mc", id: "film", tag: "Wirkung", fragen: [
        { q: "Als Frau Hellwig „Zu still“ sagt, setzt im Film die Musik aus. Man hört nur noch ihre Schritte auf der Treppe. Welche Wirkung hat das?", o: ["Die Stille im Haus wird für die Zuschauer spürbar.", "Die Zuschauer merken, dass der Film gleich endet.", "Die Stelle wirkt dadurch leicht und komisch."], a: 0, e: "Der Ton tut, was der Satz sagt: Es wird still. So fühlt man, wovon Frau Hellwig spricht – erklären muss es niemand." }
      ] },
      { art: "paare", id: "formen", tag: "Vier Formen", titel: "Wie erfährst du, was in Jaro vorgeht?", paare: [
        ["Erzähltext", "Der Erzähler sagt, was Jaro denkt."],
        ["Szene auf der Bühne", "Jaro spricht es aus oder spielt es."],
        ["Hörspiel", "Man hört es an Stimme und Pause."],
        ["Film", "Die Kamera zeigt sein Gesicht ganz nah."]
      ] },
      { art: "offen", id: "urteil", m7: true, tag: "Beurteilen", titel: "Welche Form wirkt am stärksten?", fragen: [
        { q: "Nimm die Stelle, an der Frau Hellwig vom offenen Küchenfenster erzählt. In welcher Form – Erzähltext, Szene, Hörspiel oder Film – würde sie auf dich am stärksten wirken? Begründe in zwei bis drei Sätzen mit einer Besonderheit dieser Form.", m: "Am stärksten wirkt die Stelle für mich im Film, weil eine Großaufnahme zeigen kann, wie sich Jaros Gesicht verändert, während Frau Hellwig spricht. Die Kamera macht seine Überraschung sichtbar, ohne dass ein Erzähler sie erklären muss.", k: ["film|hörspiel|erzähltext|szene|bühne|theater|buch", "weil|denn|da ", "großaufnahme|kamera|musik|ton|stimme|pause|geräusch|erzähler|gedanken|regieanweisung|gesicht|spiel|vorstell|stille"] }
      ], tipp: "Entscheide dich für eine Form. Nenne dann, was nur sie kann: Gedanken erzählen? Ein Gesicht ganz nah zeigen? Mit Stille arbeiten? Leibhaftig vor dir stehen?" }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Gedichte gehören zur Lyrik, Theaterstücke zur Dramatik.", true],
        ["In einem Erzähltext kann der Erzähler sagen, was eine Figur denkt.", true],
        ["In einer Szene für die Bühne erklärt ein Erzähler die Gefühle der Figuren.", false],
        ["Regieanweisungen sagen, was die Figuren tun und wie sie sprechen.", true],
        ["Im Hörspiel erzählen auch Geräusche und Pausen einen Teil der Geschichte.", true],
        ["Eine Großaufnahme zeigt den ganzen Ort von weit weg.", false]
      ] }
    ] }
  ],
  weiter: { href: "lit_06.html", titel: "Modul 6: Gestaltend weiterschreiben", text: "Du hast gesehen, wie verschieden dieselbe Geschichte erzählt werden kann. Im nächsten Modul schreibst du selbst weiter: Du denkst dich in eine Figur hinein – in einem Brief oder in einem inneren Monolog." }
});
