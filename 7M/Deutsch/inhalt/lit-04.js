/* Deutsch 7 · Literatur und Medien · Modul 4: Zuhören – Hörtexte und Hörspiel
   (einer Erzählung folgen, Reihenfolge und Einzelheiten; Hörspielszene: Wer spricht? Stimmung der Figuren; Mittel des
   Hörspiels und ihre Wirkung; Buchvorstellung: Notizen machen, Meinung mit Begründung wiedergeben)
   LehrplanPLUS D7 1.1 (Hörtexten folgen, Inhalte wiedergeben, Notizen machen, Wirkung von Stimme und Geräuschen
   beschreiben), 2.2 (Hörspiel als Medium).
   Hörtexte (texte/hoertexte/): vertauschte-tasche.js (Erzählung, eine Stimme), hinter-dem-vorhang.js (Hörspielszene,
   drei Stimmen), buchtipp-schulradio.js (Gespräch, zwei Stimmen). Alles erfunden – auch das vorgestellte Buch. */
D7Kit.seite({
  id: "lit-04",
  titel: "Zuhören: Hörtexte und Hörspiel",
  einleitung: "Beim Zuhören kannst du nicht zurückblättern. Deshalb gehst du mit Plan vor: erst die Aufgaben lesen, dann genau hinhören und das Wichtige festhalten. Heute hörst du drei ganz verschiedene Texte – eine Geschichte, eine Hörspielszene und einen Buchtipp aus dem Schulradio.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 Ich folge einer Geschichte und gebe wieder, was der Reihe nach passiert.", "🔎 Ich höre Einzelheiten heraus.", "🎭 Ich erkenne, wie sich Figuren fühlen, und beschreibe, wie Stimme und Geräusche wirken.", "📝 Ich mache mir beim Zuhören Notizen."],
  glossar: {
    hoerauftrag: ["Hörauftrag", "Eine Aufgabe, die du vor dem Zuhören liest. Sie sagt dir, worauf du achten sollst."],
    hoerspiel: ["Hörspiel", "Eine Geschichte nur zum Hören: Schauspielerinnen und Schauspieler sprechen die Rollen, dazu kommen Geräusche und Musik. Ein Bild gibt es nicht."],
    rolle: ["Rolle", "Die Figur, die jemand in einem Hörspiel, Theaterstück oder Film spricht oder spielt."],
    erzaehler: ["Erzähler", "Die Stimme, die durch eine Geschichte führt. Im Hörspiel sagt sie, was man nicht hören kann – zum Beispiel, wo die Szene spielt."],
    stimmung: ["Stimmung", "Wie sich eine Figur gerade fühlt oder wie eine Szene wirkt: zum Beispiel ängstlich, fröhlich oder spannend."],
    stichpunkt: ["Stichpunkt", "Wenige Wörter statt eines ganzen Satzes."],
    buchvorstellung: ["Buchvorstellung", "Jemand stellt ein Buch vor: Titel, Autorin oder Autor, Hauptfigur, Thema – und die eigene Meinung dazu."]
  },
  stationen: [
    { kurz: "Geschichte", ober: "Zuhören", titel: "Eine Geschichte zum Zuhören", teile: [
      { art: "text", html: "<p class=\"lead\">Du hörst eine kurze Geschichte über ein Mädchen und eine Sporttasche.</p><p>Dein <button class=\"term\" data-t=\"hoerauftrag\">Hörauftrag</button>: Achte darauf, <strong>was der Reihe nach passiert</strong> – und auf Einzelheiten wie Uhrzeiten, Farben und Gegenstände. Lies zuerst die Aufgaben, dann höre zu.</p>" },
      { art: "hoertext", id: "h1", tag: "🎧 Hörtext 1", hoertext: "hoer-vertauschte-tasche",
        hilfen: ["Lies zuerst alle Aufgaben. Dann weißt du, worauf du achten musst.", "Höre zweimal: beim ersten Mal auf die Reihenfolge achten, beim zweiten Mal auf die Einzelheiten.", "Mit dem Häkchen „langsamer“ liest die Stimme langsamer vor. Mit dem Pause-Knopf kannst du anhalten."],
        fragen: [
          { art: "ordnen", id: "h1ord", titel: "Was passiert der Reihe nach?", schritte: [
            "Tilda nimmt nach dem Training eine dunkelblaue Tasche mit.",
            "Zu Hause wundert sie sich, wie schwer die Tasche ist.",
            "Sie findet Turnschuhe, ein Springseil und Boxhandschuhe.",
            "Sie entdeckt einen Zettel mit einer Telefonnummer.",
            "Sie ruft an und spricht mit dem Trainer.",
            "Vor der Schwimmhalle tauschen die beiden die Taschen.",
            "Tilda bekommt einen Anhänger geschenkt."] },
          { art: "mc", id: "h1mc", titel: "Einzelheiten heraushören", fragen: [
            { q: "An welchem Tag und um welche Uhrzeit beginnt die Geschichte?", o: ["am Donnerstag, kurz nach halb sechs", "am Dienstag, kurz nach halb sechs", "am Donnerstag, kurz vor sieben", "am Freitag, kurz nach fünf"], a: 0, e: "Um sieben Uhr treffen sich die beiden erst später vor der Schwimmhalle." },
            { q: "Wo klebte der Zettel mit der Telefonnummer?", o: ["unten an der Trinkflasche", "innen am Reißverschluss", "in einem der Turnschuhe", "am Griff der Tasche"], a: 0, e: "Die Trinkflasche steckte in der Seitentasche – und an ihrem Boden klebte der Zettel." },
            { q: "Was schenkte Herr Brandl Tilda zum Abschied?", o: ["einen gelben Fisch aus Filz als Anhänger", "ein rotes Springseil", "eine neue Schwimmbrille", "einen kleinen Boxhandschuh als Anhänger"], a: 0, e: "Rot waren die Boxhandschuhe, das Springseil gehörte dem Trainer, und die Schwimmbrille war Tildas eigene." }] }] }
    ] },
    { kurz: "Hörspiel", ober: "Zuhören", titel: "Eine Hörspielszene", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt hörst du eine Szene aus einem <button class=\"term\" data-t=\"hoerspiel\">Hörspiel</button>. Drei Stimmen sprechen: ein <button class=\"term\" data-t=\"erzaehler\">Erzähler</button> und zwei Figuren, Merve und Kilian.</p><p>Dein Hörauftrag: Achte darauf, <strong>wer was sagt</strong> und <strong>wie sich die beiden fühlen</strong>. Der Erzähler sagt dir auch, welche Geräusche zu hören sind.</p>" },
      { art: "hoertext", id: "h2", tag: "🎧 Hörtext 2", hoertext: "hoer-hinter-dem-vorhang",
        hilfen: ["Über dem Abspielknopf siehst du die drei Namen. Der Name der Stimme, die gerade spricht, leuchtet auf.", "Achte beim zweiten Hören nur auf Merve: Was sagt sie am Anfang, was am Schluss?"],
        fragen: [
          { art: "sort", id: "h2wer", titel: "Wer sagt was?", buckets: ["Merve", "Kilian"], cols: 220, items: [
            { t: "„Mir ist ganz schlecht.“", b: 0 }, { t: "„Wo ist mein Zettel?“", b: 0 }, { t: "„Dann lachen alle.“", b: 0 }, { t: "„Oh nein. Es geht los.“", b: 0 },
            { t: "„Atme erst einmal aus.“", b: 1 }, { t: "„Du brauchst keinen Zettel.“", b: 1 }, { t: "„Ich bin da.“", b: 1 }, { t: "„Hab ich doch gesagt.“", b: 1 }] },
          { art: "mc", id: "h2mc", titel: "Wie fühlen sich die Figuren?", fragen: [
            { q: "Wie fühlt sich Merve vor ihrem Auftritt?", o: ["aufgeregt und ängstlich", "gelangweilt und müde", "wütend auf Kilian", "fröhlich und ausgelassen"], a: 0, e: "Ihr ist schlecht, sie sucht ihren Zettel und fürchtet, ausgelacht zu werden. Diese Aufregung vor einem Auftritt nennt man Lampenfieber." },
            { q: "Woran erkennst du Merves Stimmung? Kreuze alles an, was passt.", o: ["Sie spricht in vielen kurzen Sätzen.", "Sie stellt ängstliche Fragen.", "Sie sagt selbst, dass ihr schlecht ist.", "Sie lacht laut über Kilians Witze."], a: [0, 1, 2], e: "Kurze Sätze, bange Fragen, Ausrufe wie „Oh nein“ – so klingt jemand, der sehr aufgeregt ist. Gelacht wird in dieser Szene nicht." },
            { q: "Wie verhält sich Kilian?", o: ["Er bleibt ruhig und macht Merve Mut.", "Er ist genauso aufgeregt wie Merve.", "Er macht sich über Merve lustig.", "Er drängt Merve, sich zu beeilen."], a: 0, e: "„Ganz ruhig“, „Ich bin da“, „Versprochen“ – Kilian beruhigt Merve und verspricht ihr Hilfe." }] },
          { art: "offen", id: "h2off", m7: true, titel: "M7-Aufgabe (für 7R freiwillig): Merves Stimmung", fragen: [
            { q: "Wie verändert sich Merves Stimmung vom Anfang bis zum Ende der Szene? Erkläre in zwei Sätzen, woran du das merkst.", m: "Am Anfang hat Merve große Angst vor dem Auftritt und sagt, dass ihr schlecht ist. Am Ende wird sie sicherer, denn ihre Stimme wird mit jedem Wort fester.", k: ["angst|aufgeregt|nervös|schlecht|lampenfieber|panik|fürchtet", "sicherer|fester|ruhiger|mutiger|schafft|stolz|erleichtert|traut sich|selbstbewusst"] }], tipp: "Vergleiche: Was sagt Merve ganz zu Beginn? Und was erzählt der Erzähler am Schluss über ihre Stimme?" }] }
    ] },
    { kurz: "Wirkung", ober: "Verstehen", titel: "So wirkt ein Hörspiel", teile: [
      { art: "text", html: "<p>Hast du es gemerkt? In der Szene gab es kein einziges Bild – und trotzdem hast du die dunkle Bühne vor dir gesehen. Ein Hörspiel erzählt nur mit dem, was man <strong>hören</strong> kann.</p><p>Auf deinem Gerät liest eine Computerstimme vor, und der Erzähler <em>sagt</em>, welche Geräusche zu hören sind. In einem echten Hörspiel sprechen Schauspielerinnen und Schauspieler die <button class=\"term\" data-t=\"rolle\">Rollen</button>: Sie flüstern, rufen oder stottern. Und die Geräusche hört man wirklich.</p>" },
      { art: "merke", kopf: "MERKE: VIER MITTEL IM HÖRSPIEL", html: "<ul><li><strong>Stimme:</strong> Wie jemand spricht – laut oder leise, schnell oder stockend –, verrät seine <button class=\"term\" data-t=\"stimmung\">Stimmung</button>.</li><li><strong>Geräusche:</strong> Sie zeigen, wo die Szene spielt und was gerade passiert.</li><li><strong>Musik:</strong> Sie macht eine Szene spannend, traurig oder fröhlich.</li><li><strong>Pause:</strong> Wenn es plötzlich still ist, wartet man gespannt, was jetzt kommt.</li></ul>" },
      { art: "sort", id: "mittel", tag: "Sortieren", titel: "Welches Mittel ist das?", buckets: ["Stimme", "Geräusch", "Musik", "Pause"], cols: 160, items: [
        { t: "Sie stottert vor Aufregung.", b: 0 }, { t: "Er brüllt den Satz heraus.", b: 0 },
        { t: "Eine Tür knarrt.", b: 1 }, { t: "Regen prasselt auf das Dach.", b: 1 },
        { t: "Eine Geige spielt eine traurige Melodie.", b: 2 }, { t: "Trommeln werden immer schneller.", b: 2 },
        { t: "Drei Sekunden lang hört man nichts.", b: 3 }, { t: "Nach der Frage bleibt es still.", b: 3 }] },
      { art: "paare", id: "wirk", tag: "Zuordnen", titel: "Welches Mittel erzeugt welche Wirkung?", paare: [
        ["Eine Figur flüstert und spricht immer schneller.", "Man spürt, dass sie Angst hat."],
        ["Möwen schreien, Wellen rauschen.", "Man weiß, dass die Szene am Meer spielt."],
        ["Dunkle, tiefe Musik wird immer lauter.", "Man ahnt, dass etwas Gefährliches näher kommt."],
        ["Nach einer Frage bleibt es lange still.", "Man merkt, dass jemand mit der Antwort zögert."],
        ["Eine Tür fällt krachend ins Schloss.", "Man versteht, dass jemand wütend hinausgegangen ist."]] },
      { art: "mc", id: "stille", m7: true, tag: "Wirkung erklären", fragen: [
        { q: "Kurz bevor Merve ihren ersten Satz sagt, ist es im Saal „ganz still“. Welche Wirkung hat diese Stille auf die Zuhörer?", o: ["Sie steigert die Spannung: Man wartet darauf, ob Merve es schafft.", "Sie zeigt, dass das Publikum den Saal verlassen hat.", "Sie gibt den Zuhörern Zeit, sich zu erholen.", "Sie bedeutet, dass die Szene zu Ende ist."], a: 0, e: "Eine Pause an der entscheidenden Stelle lässt alle den Atem anhalten. Erst Merves Begrüßung löst die Spannung." }] },
      { art: "offen", id: "ger", nur: "R", tag: "Selbst formulieren", fragen: [
        { q: "Stell dir vor, die Szene geht weiter: Nach der Vorstellung feiern alle hinter der Bühne. Welche zwei Geräusche würdest du einbauen? Schreibe einen Satz.", m: "Aus dem Saal hört man noch lauten Beifall, und hinter der Bühne klirren Gläser und alle lachen durcheinander.", k: ["beifall|applaus|klatsch|jubel|lachen|lacht|gläser|klirr|musik|rufen|ruft|schritte|korken|pfeif|kichern|knall|umarm|singen"] }], tipp: "Was hört man, wenn viele Menschen sich freuen und feiern?",
        hilfen: ["So kannst du beginnen: Man hört, wie …", "Denke an den Saal (Was tut das Publikum am Ende?) und an die Kinder hinter der Bühne (Was hört man, wenn sie sich freuen?)."] },
      { art: "offen", id: "ger", nur: "M", tag: "Selbst formulieren", fragen: [
        { q: "Stell dir vor, die Szene geht weiter: Nach der Vorstellung feiern alle hinter der Bühne. Welche zwei Geräusche würdest du einbauen? Schreibe einen Satz.", m: "Aus dem Saal hört man noch lauten Beifall, und hinter der Bühne klirren Gläser und alle lachen durcheinander.", k: ["beifall|applaus|klatsch|jubel|lachen|lacht|gläser|klirr|musik|rufen|ruft|schritte|korken|pfeif|kichern|knall|umarm|singen"] }], tipp: "Was hört man, wenn viele Menschen sich freuen und feiern?" }
    ] },
    { kurz: "Buchtipp", ober: "Zuhören und notieren", titel: "Ein Buchtipp im Schulradio", teile: [
      { art: "text", html: "<p class=\"lead\">Im Schulradio läuft eine <button class=\"term\" data-t=\"buchvorstellung\">Buchvorstellung</button>: Amelie hat ein Jugendbuch mitgebracht, Rafael stellt die Fragen.</p><p>Dein Hörauftrag: Mach dir beim Zuhören <strong>Notizen</strong> zu vier Punkten: <strong>Titel, Hauptfigur, Thema, Empfehlung</strong>. Schreibe nur <button class=\"term\" data-t=\"stichpunkt\">Stichpunkte</button> – für ganze Sätze ist beim Zuhören keine Zeit.</p>" },
      { art: "beispiel", nur: "R", kopf: "Dein Notizzettel", html: "<p>Titel: …<br>Hauptfigur: …<br>Thema: …<br>Empfehlung (Für wen? Wie viele Sterne?): …</p><p>Schreibe diese vier Zeilen auf einen Zettel oder gleich in das erste Antwortfeld. Fülle sie beim Zuhören aus.</p>" },
      { art: "hoertext", id: "h3", tag: "🎧 Hörtext 3", hoertext: "hoer-buchtipp-schulradio",
        hilfen: ["Zu jedem der vier Punkte stellt Rafael eine eigene Frage. Die Antwort kommt immer gleich danach von Amelie.", "Halte nach jeder Antwort von Amelie kurz an (Pause-Knopf) und schreibe ein bis drei Wörter auf."],
        fragen: [
          { art: "offen", id: "h3not", titel: "Deine Notizen", fragen: [
            { q: "Schreibe deine Notizen zur Buchvorstellung auf: Titel, Hauptfigur, Thema, Empfehlung. Stichpunkte genügen.", m: "Titel: Wasser unterm Bett. Hauptfigur: Lars, dreizehn Jahre. Thema: sich an Neues gewöhnen und Freundschaft. Empfehlung: für alle ab zwölf, vier von fünf Sternen.", k: ["wasser unterm bett", "lars", "gewöhn|freundschaft|freunde|hausboot|neuanfang", "zwölf|12|vier von fünf|4 von 5|sterne|echten leben"], min: 3 }], tipp: "Vier Zeilen genügen: Titel – Hauptfigur – Thema – Empfehlung. Höre den Text ruhig noch einmal an." },
          { art: "mc", id: "h3mc", titel: "Genau zugehört?", fragen: [
            { q: "Wie kommt das Buch zu seinem Titel?", o: ["Lars verbringt den Sommer auf einem Hausboot.", "In seinem Zimmer platzt ein Wasserrohr.", "Er träumt jede Nacht vom Meer.", "Das Haus seiner Tante wird überschwemmt."], a: 0, e: "Wer auf einem Hausboot schläft, hat tatsächlich Wasser unter dem Bett. Den Rohrbruch hat nur Rafael vermutet." },
            { q: "Wodurch wird der Sommer für Lars besser?", o: ["Er lernt Yara kennen.", "Seine Tante zieht mit ihm in ein Haus.", "Er darf früher nach Hause fahren.", "Seine Eltern kommen zu Besuch."], a: 0, e: "Yara wohnt nebenan an der Schleuse. Mit ihr wird der Sommer „plötzlich ganz anders“." }] },
          { art: "tf", id: "h3tf", titel: "Richtig oder falsch?", aussagen: [
            ["Die Autorin heißt Ilka Maarberg.", true],
            ["Lars ist von Anfang an begeistert vom Leben auf dem Boot.", false],
            ["Yaras Vater bedient die Schleuse.", true],
            ["Das Buch hat ungefähr zweihundert Seiten.", true],
            ["Amelie gibt dem Buch fünf von fünf Sternen.", false]] },
          { art: "offen", id: "h3mein", m7: true, titel: "M7-Aufgabe (für 7R freiwillig): Amelies Meinung", fragen: [
            { q: "Gib Amelies Meinung zum Buch wieder: Was gefällt ihr, und was stört sie? Schreibe zwei bis drei Sätze.", m: "Amelie findet das Buch gut und gibt ihm vier von fünf Sternen. Ihr gefällt, dass Lars und Yara so reden wie echte Jugendliche, und sie musste oft lachen. Sie stört nur, dass sich der Anfang zieht.", k: ["reden|sprechen|sprache|lachen|lustig|witzig|echte", "anfang|dreißig|30|ersten seiten|zieht|langsam|durchhalten|beginn"] }], tipp: "Amelie nennt zwei Dinge, die sie gut findet, und eines, das sie stört. Höre den Schluss noch einmal an." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "merke", kopf: "SO HÖRST DU GEZIELT ZU", html: "<ul><li><strong>Vorher:</strong> Aufgaben lesen – worauf soll ich achten?</li><li><strong>Dabei:</strong> genau hinhören und nur Stichpunkte notieren.</li><li><strong>Danach:</strong> Notizen ordnen und, wenn möglich, ein zweites Mal hören.</li></ul>" },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Vor dem Zuhören lese ich die Aufgaben – dann weiß ich, worauf ich achten muss.", true],
        ["Beim Mitschreiben notiere ich am besten jeden Satz vollständig.", false],
        ["Im Hörspiel verraten Geräusche, wo eine Szene spielt.", true],
        ["Wie eine Figur spricht, zeigt, wie sie sich fühlt.", true],
        ["Eine Pause im Hörspiel bedeutet immer, dass etwas schiefgegangen ist.", false],
        ["In einer Buchvorstellung erfährt man meist auch, wem das Buch gefallen könnte.", true]] }
    ] }
  ],
  weiter: { href: "lit_05.html", titel: "Modul 5: Jugendbuch und szenisches Spiel", text: "Du kannst jetzt gezielt zuhören und weißt, wie ein Hörspiel wirkt. Im nächsten Modul nimmst du dir ein <strong>Jugendbuch</strong> vor – und machst aus einer Stelle eine <strong>Spielszene</strong>." }
});
