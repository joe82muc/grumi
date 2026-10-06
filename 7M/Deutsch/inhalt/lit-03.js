/* Deutsch 7 · Literatur und Medien · Modul 3: Gedichte
   (Strophe, Vers, Reim; Reimschema: Paarreim, Kreuzreim, umarmender Reim; sprachliche Bilder: Vergleich, Personifikation,
   M7: Metapher und Wirkung; Stimmung, Vortragen; Schreibtrainer: weiterdichten oder umschreiben; Tischduell)
   LehrplanPLUS D7 2.2 (lyrische Texte erschließen: äußere Form, Reim, sprachliche Bilder; M7: Wirkung sprachlicher Mittel),
   2.1 (Texte sinnentsprechend vortragen), 3.2 (kreative Schreibformen: Gedichte umschreiben).
   Gedichte (texte/literatur/gedichte.js), alle gemeinfrei, Wortlaut am 06.10.2026 mit Wikisource verglichen:
   Morgenstern „Die drei Spatzen“ (10 Verse) · Ringelnatz „Die Ameisen“ (6) · Fontane „Mittag“ (8) · Mörike „Er ist’s“ (9)
   · nur M7: Rilke „Der Panther“ (12). Bei Gedichten ist die Zeilennummer die Versnummer. */
D7Kit.seite({
  id: "lit-03",
  titel: "Gedichte",
  einleitung: "Drei Spatzen im Schnee, zwei Ameisen auf Weltreise und ein Frühling, der sein blaues Band flattern lässt: Gedichte sagen mit wenigen Wörtern viel. Heute findest du heraus, wie sie gebaut sind, wie sie klingen – und du dichtest selbst weiter.",
  zeit: "etwa 45 Minuten",
  ziele: ["📏 Ich unterscheide Vers und Strophe.", "🔔 Ich bestimme das Reimschema: Paarreim, Kreuzreim, umarmender Reim.", "🎨 Ich erkenne Vergleich und Personifikation und erkläre sie mit eigenen Worten.", "🎤 Ich trage ein Gedicht passend zu seiner Stimmung vor und schreibe selbst Verse."],
  quiz: { profi: "Gedicht-Profi" },
  quellen: "Alle Gedichte sind gemeinfrei; die Fundstellen stehen unter den Texten",
  glossar: {
    vers: ["Vers", "Eine Zeile in einem Gedicht. Man zählt die Verse und gibt sie so an: (V. 3)."],
    strophe: ["Strophe", "Ein Absatz in einem Gedicht. Eine Strophe besteht aus mehreren Versen."],
    reim: ["Reim", "Zwei Wörter klingen vom letzten betonten Vokal an gleich: Haus – Maus, singen – klingen."],
    reimschema: ["Reimschema", "Die Reihenfolge der Reime in einem Gedicht. Verse, die sich reimen, bekommen denselben Buchstaben: a a b b."],
    paarreim: ["Paarreim", "Zwei Verse hintereinander reimen sich: a a b b."],
    kreuzreim: ["Kreuzreim", "Die Reime wechseln sich ab: a b a b."],
    umarmend: ["umarmender Reim", "Der erste und der vierte Vers reimen sich und „umarmen“ die beiden mittleren: a b b a."],
    bild: ["sprachliches Bild", "Ein Ausdruck, der etwas anschaulich macht, indem er es mit etwas anderem vergleicht oder gleichsetzt."],
    vergleich: ["Vergleich", "Zwei Dinge werden mit „wie“ (oder „als“) verglichen: stark wie ein Bär."],
    personifikation: ["Personifikation", "Eine Sache, eine Pflanze oder ein Tier handelt oder fühlt wie ein Mensch: Die Sonne lacht."],
    metapher: ["Metapher", "Ein sprachliches Bild ohne „wie“: Ein Wort steht für etwas anderes, das ihm ähnlich ist. „Wüstenschiff“ für das Kamel."],
    stimmung: ["Stimmung", "Das Gefühl, das ein Gedicht auslöst: fröhlich, ruhig, traurig, unheimlich …"]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen und hören", titel: "Ein Gedicht ist zum Hören da", teile: [
      { art: "text", html: "<p class=\"lead\">Gedichte sind kurz – aber jedes Wort zählt. Lies das Gedicht zuerst leise. Lies es dann noch einmal halblaut, so als würdest du es jemandem vorlesen.</p>" },
      { art: "lesetext", tag: "Erstes Gedicht", lesetext: "lit-spatzen" },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Was geschieht in dem Gedicht?", o: ["Drei Spatzen sitzen im Schnee eng beieinander und wärmen sich.", "Drei Spatzen streiten um den besten Platz im Strauch.", "Drei Spatzen fliegen vor dem Winter in den Süden.", "Drei Spatzen suchen im Haselstrauch nach Nüssen."], a: 0, e: "Es passiert fast nichts – und gerade das macht das Bild so gemütlich." },
        { q: "Welche Stimmung hat das Gedicht?", o: ["gemütlich und ein bisschen lustig", "traurig und hoffnungslos", "unheimlich und bedrohlich", "aufgeregt und hektisch"], a: 0, e: "Es schneit zwar, aber die drei haben es warm. Wörter wie „hu!“ und „der freche Hans“ lassen einen schmunzeln." }] }
    ] },
    { kurz: "Vers und Reim", ober: "Verstehen", titel: "Strophe, Vers und Reim", teile: [
      { art: "merke", html: "<ul><li>Eine Zeile im Gedicht heißt <button class=\"term\" data-t=\"vers\">Vers</button>. Ein Absatz heißt <button class=\"term\" data-t=\"strophe\">Strophe</button>.</li><li>Ein <button class=\"term\" data-t=\"reim\">Reim</button> entsteht, wenn zwei Wörter am Ende gleich klingen: <em>Haus – Maus</em>, <em>singen – klingen</em>.</li><li>Für das <button class=\"term\" data-t=\"reimschema\">Reimschema</button> bekommt jeder Vers einen Buchstaben. Verse, die sich reimen, bekommen denselben.</li><li>Stellen im Gedicht gibst du mit dem Vers an: <strong>(V. 3)</strong>. Die Zahlen am Rand zählen hier die Verse.</li></ul>" },
      { art: "mc", id: "form", tag: "Die drei Spatzen", fragen: [
        { q: "Wie ist „Die drei Spatzen“ gebaut?", o: ["fünf Strophen mit je zwei Versen", "zwei Strophen mit je fünf Versen", "zehn Strophen mit je einem Vers", "eine Strophe mit zehn Versen"], a: 0, e: "Zwischen den Strophen ist eine Lücke. Zusammen sind es zehn Verse." },
        { q: "Welches Wort reimt sich auf „Haselstrauch“ (V. 1)?", o: ["Bauch", "Spatzen", "Franz", "noch"], a: 0, e: "Die Reimwörter stehen am Ende von Vers 1 und Vers 2: Haselstrauch – Bauch." }] },
      { art: "text", html: "<p>Die Reime können verschieden angeordnet sein. Drei Muster kommen besonders oft vor: der <button class=\"term\" data-t=\"paarreim\">Paarreim</button>, der <button class=\"term\" data-t=\"kreuzreim\">Kreuzreim</button> und der <button class=\"term\" data-t=\"umarmend\">umarmende Reim</button>.</p>" },
      { art: "karten", karten: [
        { ic: "👫", titel: "Paarreim · a a b b", text: "Zwei Verse hintereinander reimen sich: Strauch – Bauch · zu – hu." },
        { ic: "🔀", titel: "Kreuzreim · a b a b", text: "Die Reime wechseln sich ab: Vers 1 reimt sich auf Vers 3, Vers 2 auf Vers 4." },
        { ic: "🤗", titel: "Umarmender Reim · a b b a", text: "Vers 1 und Vers 4 reimen sich. Sie „umarmen“ die beiden Verse in der Mitte." }] },
      { art: "lesetext", tag: "Zweites Gedicht", lesetext: "lit-ameisen" },
      { art: "mc", id: "schema1", tag: "Reimschema bestimmen", fragen: [
        { q: "Welches Reimschema hat „Die Ameisen“?", o: ["Paarreim (a a b b c c)", "Kreuzreim (a b a b)", "umarmender Reim (a b b a)", "gar keines – die Verse reimen sich nicht"], a: 0, e: "Ameisen – reisen, Chaussee – weh, weise – Reise: Immer zwei Verse hintereinander reimen sich." }] },
      { art: "beleg", id: "reim", tag: "Reimwörter finden", titel: "Drittes Gedicht: Welcher Vers reimt sich?", lead: "Lies das Gedicht zuerst ganz. Tippe dann den gesuchten Vers an.", lesetext: "lit-mittag", fragen: [
        { q: "Welcher Vers reimt sich auf Vers 1 („Föhre“)?", zeilen: [3, 3], e: "Föhre – höre. Dazwischen steht ein Vers mit einem anderen Reim.", tipp: "Lies die letzten Wörter der Verse laut. Welches klingt wie „Föhre“?" },
        { q: "Welcher Vers reimt sich auf Vers 6 („wach“)?", zeilen: [8, 8], e: "wach – Blätterdach.", tipp: "Suche in der zweiten Strophe ein Wort, das auf „-ach“ endet." }] },
      { art: "mc", id: "schema2", tag: "Reimschema bestimmen", fragen: [
        { q: "Welches Reimschema hat „Mittag“?", o: ["Kreuzreim (a b a b)", "Paarreim (a a b b)", "umarmender Reim (a b b a)", "gar keines – die Verse reimen sich nicht"], a: 0, e: "Föhre – nur – höre – Natur: Die Reime wechseln sich ab. In der zweiten Strophe ist es genauso." }] },
      { art: "paare", id: "schema3", tag: "Zuordnen", titel: "Vier Versenden – welches Reimschema?", paare: [
        ["Haus – Maus – Wald – kalt", "Paarreim"],
        ["Haus – Wald – Maus – kalt", "Kreuzreim"],
        ["Haus – Wald – kalt – Maus", "umarmender Reim"],
        ["Haus – Wald – Baum – See", "kein Reim"]],
        hilfen: ["Gib dem ersten Wort ein a. Jedes Wort, das sich darauf reimt, bekommt auch ein a. Das nächste neue Reimwort bekommt ein b.", "a a b b = Paarreim · a b a b = Kreuzreim · a b b a = umarmender Reim"] }
    ] },
    { kurz: "Bilder", ober: "Verstehen", titel: "Sprachliche Bilder: mit Wörtern malen", teile: [
      { art: "text", html: "<p>Dichterinnen und Dichter sagen vieles nicht direkt. Sie benutzen <button class=\"term\" data-t=\"bild\">sprachliche Bilder</button>: Sie vergleichen etwas – oder sie lassen Dinge handeln wie Menschen.</p>" },
      { art: "merke", html: "<ul><li><button class=\"term\" data-t=\"vergleich\">Vergleich</button>: Zwei Dinge werden mit <strong>wie</strong> verglichen. <em>„So warm wie der Hans …“</em> (Die drei Spatzen, V. 8) · <em>stark wie ein Bär</em></li><li><button class=\"term\" data-t=\"personifikation\">Personifikation</button>: Etwas, das kein Mensch ist, handelt oder fühlt wie ein Mensch. <em>Die Sonne lacht.</em></li></ul>" },
      { art: "lesetext", tag: "Viertes Gedicht", lead: "In diesem Gedicht wird jemand begrüßt. Achte darauf, was der Frühling und die Veilchen hier alles tun.", lesetext: "lit-erists" },
      { art: "mc", id: "erists", tag: "Er ist’s", fragen: [
        { q: "Sieh dir die Versenden der ersten vier Verse an: Band – Lüfte – Düfte – Land. Welches Reimschema ist das?", o: ["umarmender Reim (a b b a)", "Paarreim (a a b b)", "Kreuzreim (a b a b)", "gar keines"], a: 0, e: "Band und Land umarmen Lüfte und Düfte." },
        { q: "„Veilchen träumen schon“ (V. 5). Warum ist das eine Personifikation?", o: ["Eine Blume tut hier etwas, das sonst Menschen tun: Sie träumt.", "Zwei Dinge werden mit „wie“ verglichen.", "Das Wort „schon“ reimt sich auf „Harfenton“.", "Veilchen blühen in Wirklichkeit erst im Sommer."], a: 0, e: "Blumen können nicht träumen und auch nichts „wollen“ (V. 6). Der Dichter behandelt sie wie kleine Menschen." }] },
      { art: "sort", id: "bilder", tag: "Sortieren", titel: "Vergleich oder Personifikation?", buckets: ["Vergleich", "Personifikation"], cols: 240, items: [
        { t: "so warm wie der Hans", b: 0 }, { t: "Ihre Hände sind kalt wie Eis.", b: 0 }, { t: "Sie rennt wie der Blitz.", b: 0 }, { t: "Der See glänzt wie ein Spiegel.", b: 0 },
        { t: "Veilchen träumen schon.", b: 1 }, { t: "Die Föhre träumt am Waldrand.", b: 1 }, { t: "Der Wind heult ums Haus.", b: 1 }, { t: "Der Mond schaut zum Fenster herein.", b: 1 }, { t: "Der Frühling lässt ein Band flattern.", b: 1 }] },
      { art: "offen", id: "erkl", tag: "In eigenen Worten", fragen: [
        { q: "„Veilchen träumen schon, / Wollen balde kommen.“ Erkläre in eigenen Worten, was damit gemeint ist.", m: "Die Veilchen blühen noch nicht, aber es dauert nicht mehr lange. Sie warten noch unter der Erde, bis es wärmer wird.", k: ["noch nicht|warten|unter der erde|knospe|schlaf|schläf|dauert|versteckt", "blüh|wachs|heraus|aufgehen|wärmer|sprieß"] }], tipp: "Überlege zuerst: Sieht man die Veilchen schon? Und was heißt das, wenn jemand noch „träumt“?",
        hilfen: ["Wer träumt, schläft noch. Was bedeutet das für eine Blume am Ende des Winters?", "So kannst du beginnen: Die Veilchen sind noch nicht …, aber bald …"] },
      { art: "merke", m7: true, kopf: "M7: DIE METAPHER", html: "<p>Eine <button class=\"term\" data-t=\"metapher\">Metapher</button> ist ein sprachliches Bild <strong>ohne „wie“</strong>. Ein Wort steht für etwas anderes, das ihm ähnlich ist. Vergleich: <em>Er kämpft wie ein Löwe.</em> Metapher: <em>Er ist ein Löwe.</em></p><p>Frage dich bei jedem Bild: <strong>Wofür steht es – und wie wirkt es?</strong> Was sehe oder fühle ich dabei?</p>" },
      { art: "mc", id: "band", m7: true, tag: "Metapher", fragen: [
        { q: "„Frühling läßt sein blaues Band / Wieder flattern durch die Lüfte“ (V. 1–2). Was könnte mit dem „blauen Band“ gemeint sein?", o: ["der blaue Himmel und die milde Luft im Frühling", "ein Stoffband, das an einem Maibaum hängt", "ein Fluss, der nach dem Winter über die Ufer tritt", "ein Geschenkband für den Dichter"], a: 0, e: "Ein wirkliches Band gibt es nicht. Das Bild lässt den Frühlingshimmel leicht und beweglich wirken – wie etwas, das im Wind weht." }] },
      { art: "lesetext", nur: "M", tag: "M7 · Fünftes Gedicht", lead: "Dieses Gedicht beschreibt ein Raubtier hinter Gittern in einem Pariser Zoo. Es ist das schwierigste Gedicht in diesem Modul – lies es zweimal.", lesetext: "lit-panther" },
      { art: "mc", id: "panther", nur: "M", m7: true, tag: "Der Panther", fragen: [
        { q: "„ist wie ein Tanz von Kraft um eine Mitte“ (V. 7). Welches sprachliche Bild ist das?", o: ["ein Vergleich – man erkennt ihn an „wie“", "eine Personifikation – ein Ding handelt wie ein Mensch", "eine Metapher – ein Bild ohne „wie“", "gar kein Bild – der Panther tanzt wirklich"], a: 0, e: "Das Im-Kreis-Gehen wird mit einem Tanz verglichen. So spürt man die Kraft, die der Panther im Käfig nicht gebrauchen kann." },
        { q: "„der Vorhang der Pupille“ (V. 9) ist eine Metapher. Was geschieht hier?", o: ["Das Auge öffnet sich für einen Moment – wie ein Vorhang, der aufgeht.", "Vor dem Käfig wird ein Vorhang zur Seite gezogen.", "Der Panther schließt die Augen und schläft ein.", "Die Besucher halten sich die Augen zu."], a: 0, e: "Nur manchmal nimmt der Panther noch etwas von draußen wahr. Doch das Bild „hört im Herzen auf zu sein“ (V. 12) – es erreicht ihn nicht mehr." }] },
      { art: "offen", id: "wirkung", nur: "M", m7: true, tag: "Wirkung begründen", fragen: [
        { q: "„Ihm ist, als ob es tausend Stäbe gäbe / und hinter tausend Stäben keine Welt“ (V. 3–4). Wie wirkt dieses Bild auf dich? Erkläre, was es über das Leben des Panthers zeigt.", m: "Das Bild wirkt bedrückend. Der Panther ist schon so lange eingesperrt, dass er nur noch Gitter wahrnimmt. Für ihn gibt es draußen nichts mehr – er hat seine Freiheit und jede Hoffnung verloren.", k: ["eingesperrt|gefangen|käfig|gitter|zoo", "bedrückend|traurig|hoffnung|trostlos|freiheit|eng|leid|verzweifel|einsam|schlimm"] }], tipp: "Zwei Schritte: 1. Wie wirkt das Bild (zum Beispiel bedrückend, traurig, eng)? 2. Was sagt es darüber, wie der Panther lebt?" }
    ] },
    { kurz: "Vortragen", ober: "Ausprobieren und schreiben", titel: "Vortragen und selbst dichten", teile: [
      { art: "text", html: "<p>Ein Gedicht wirkt erst richtig, wenn man es hört. Beim Vortragen entscheidest du, wie es klingt – passend zu seiner <button class=\"term\" data-t=\"stimmung\">Stimmung</button>.</p>" },
      { art: "karten", karten: [
        { ic: "⏸️", titel: "Pausen", text: "Nach jeder Strophe eine längere Pause, bei Satzzeichen eine kurze." },
        { ic: "🔊", titel: "Betonung", text: "In jedem Vers ein oder zwei wichtige Wörter hervorheben." },
        { ic: "🐢", titel: "Tempo", text: "Langsamer, als du denkst. Wer hetzt, verschluckt die Bilder." },
        { ic: "🎭", titel: "Stimmung", text: "Die Stimme passt zum Gedicht: gemütlich, geheimnisvoll, fröhlich oder traurig." }] },
      { art: "mc", id: "vortrag", tag: "Wie klingt das?", fragen: [
        { q: "„– Horch, von fern ein leiser Harfenton!“ (Er ist’s, V. 7). Wie sprichst du diesen Vers?", o: ["leiser und langsamer, mit einer kleinen Pause nach „Horch“", "so laut und schnell wie möglich", "genauso wie alle anderen Verse", "mit tiefer, drohender Stimme"], a: 0, e: "Wer „Horch“ sagt, lauscht. Der Gedankenstrich davor zeigt: Hier hält das Gedicht kurz den Atem an." },
        { q: "Du trägst „Die drei Spatzen“ vor. Welcher Ton passt am besten?", o: ["ruhig und schmunzelnd", "feierlich und ernst wie bei einer Rede", "laut und wütend", "eintönig, ohne jede Betonung"], a: 0, e: "Das Gedicht ist gemütlich und ein bisschen lustig. Das „hu!“ darfst du ruhig frösteln lassen." }] },
      { art: "text", html: "<p><strong>Probiere es aus:</strong> Lies „Die drei Spatzen“ oder „Er ist’s“ deiner Nachbarin oder deinem Nachbarn halblaut vor. Tauscht danach: Wo war eine Pause gut? Welches Wort hast du betont?</p>" },
      { art: "schreiben", id: "dichten", tag: "Schreibtrainer", titel: "Jetzt dichtest du", min: 15,
        auftrag: "<p><strong>Wähle eine der beiden Aufgaben:</strong></p><ul><li><strong>Weiterdichten:</strong> Der Schnee schmilzt, es wird Frühling. Schreibe zu „Die drei Spatzen“ zwei neue Strophen (vier Verse) mit Paarreim: Was machen Erich, Franz und Hans jetzt?</li><li><strong>Umschreiben:</strong> Erzähle „Die Ameisen“ als kurze Geschichte in vier bis fünf Sätzen – ohne Reime. Warum wollten die beiden nach Australien? Was sagen sie auf der Chaussee zueinander?</li></ul>",
        starter: ["Der Schnee ist weg, die Sonne lacht,", "Der Erich fliegt", "In Hamburg lebten einmal zwei Ameisen, die", "„Meine Beine tun weh“, sagte"],
        kriterien: ["Mein Text passt zu dem Gedicht, das ich gewählt habe.", "Beim Weiterdichten: Je zwei Verse hintereinander reimen sich (Paarreim).", "Beim Umschreiben: Ich erzähle in ganzen Sätzen und ohne Reime.", "Ich habe meinen Text halblaut gelesen und geprüft, ob er gut klingt."] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Reim-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 8, fragen: [
        { q: "Eine Zeile im Gedicht heißt …", o: ["Vers", "Strophe", "Satz"], a: 0, e: "Verse zählt man: V. 1, V. 2 …" },
        { q: "Ein Absatz im Gedicht heißt …", o: ["Strophe", "Vers", "Kapitel"], a: 0, e: "Eine Strophe hat mehrere Verse." },
        { q: "a a b b ist ein …", o: ["Paarreim", "Kreuzreim", "umarmender Reim"], a: 0, e: "Zwei Verse hintereinander reimen sich." },
        { q: "a b a b ist ein …", o: ["Kreuzreim", "Paarreim", "umarmender Reim"], a: 0, e: "Die Reime wechseln sich ab." },
        { q: "a b b a ist ein …", o: ["umarmender Reim", "Kreuzreim", "Paarreim"], a: 0, e: "Vers 1 und 4 umarmen die Mitte." },
        { q: "Was reimt sich auf „Strauch“?", o: ["Bauch", "Strich", "Busch"], a: 0, e: "Strauch – Bauch." },
        { q: "Was reimt sich auf „Reise“?", o: ["weise", "Reis", "Riese"], a: 0, e: "Reise – weise." },
        { q: "Was reimt sich auf „Land“?", o: ["Band", "Wald", "Lied"], a: 0, e: "Land – Band." },
        { q: "„schnell wie der Blitz“ ist …", o: ["ein Vergleich", "eine Personifikation", "ein Reim"], a: 0, e: "Man erkennt ihn an „wie“." },
        { q: "„Die Sonne lacht“ ist …", o: ["eine Personifikation", "ein Vergleich", "ein Reimschema"], a: 0, e: "Die Sonne handelt wie ein Mensch." },
        { q: "Einen Vergleich erkennst du oft an …", o: ["dem Wort „wie“", "dem Reim", "der Überschrift"], a: 0, e: "stark wie ein Bär." },
        { q: "Wo stehen die Reimwörter meistens?", o: ["am Ende der Verse", "am Anfang der Verse", "in der Überschrift"], a: 0, e: "Deshalb heißt es Endreim." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Eine Zeile im Gedicht heißt ", { g: "Vers" }, ", ein Absatz heißt ", { g: "Strophe" }, "."],
        ["Beim ", { g: "Paarreim" }, " reimen sich zwei Verse hintereinander (a a b b)."],
        ["Beim ", { g: "Kreuzreim" }, " wechseln sich die Reime ab (a b a b)."],
        ["Wenn eine Sache handelt wie ein Mensch, ist das eine ", { g: "Personifikation" }, "."]], extra: ["Kapitel", "Überschrift"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Gedicht besteht aus Versen und Strophen.", true],
        ["Beim Kreuzreim reimen sich immer zwei Verse direkt hintereinander.", false],
        ["Beim umarmenden Reim reimt sich der erste Vers auf den vierten.", true],
        ["Einen Vergleich erkennt man oft am Wort „wie“.", true],
        ["Bei einer Personifikation wird ein Mensch mit einem Tier verglichen.", false],
        ["Beim Vortragen helfen Pausen und Betonung, die Stimmung hörbar zu machen.", true]] }
    ] }
  ],
  weiter: { href: "lit_04.html", titel: "Modul 4: Zuhören – Hörtexte und Hörspiel", text: "Du hast Gedichte gelesen, untersucht und selbst gedichtet. Im nächsten Modul geht es ums <strong>genaue Zuhören</strong>: ein Gespräch, eine kurze Geschichte und eine Hörspielszene." }
});
