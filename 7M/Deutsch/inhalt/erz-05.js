/* Deutsch 7 · Erzählen und kreativ schreiben · Modul 5: Lebendig schreiben
   (Satzanfänge, treffende Verben, Adjektive und Vergleiche, Wiederholungen vermeiden; Duell gegen die KI)
   LehrplanPLUS D7 3.2 (sprachliche Mittel gezielt einsetzen), 3.3 (Texte sprachlich überarbeiten: Satzanfänge,
   Wortwahl), 4.1 (Wortfelder, Wortschatz). Alle Beispiele sind eigens für GRUMI geschrieben. */
D7Kit.seite({
  id: "erz-05",
  titel: "Lebendig schreiben",
  einleitung: "Der Aufbau stimmt, die Figuren fühlen und sprechen – und trotzdem klingt der Text noch brav? Dann fehlt der Feinschliff. Heute geht es um Satzanfänge, treffende Verben und Adjektive, die wirklich etwas sagen.",
  zeit: "etwa 40 Minuten",
  ziele: ["🔀 Ich wechsle meine Satzanfänge ab.", "🏃 Ich ersetze blasse Verben durch treffende.", "🎨 Ich setze Adjektive und Vergleiche gezielt ein.", "⚔️ Ich erkenne, welcher von zwei Sätzen lebendiger ist – und warum."],
  quiz: { profi: "Sprach-Profi" },
  glossar: {
    satzanfang: ["Satzanfang", "Das Satzglied, mit dem ein Satz beginnt. Man kann fast jedes Satzglied nach vorn stellen."],
    verb: ["treffendes Verb", "Ein Verb, das genau sagt, wie etwas geschieht: schleichen statt „leise gehen“."],
    adjektiv: ["Adjektiv", "Eigenschaftswort: Es sagt, wie etwas ist – morsch, eisig, zerknittert."],
    vergleich: ["Vergleich", "Ein sprachliches Bild mit „wie“: bleich wie die Wand, schnell wie der Wind."],
    wortfeld: ["Wortfeld", "Wörter mit ähnlicher Bedeutung, zum Beispiel gehen, laufen, schleichen, stapfen."]
  },
  stationen: [
    { kurz: "Satzanfänge", ober: "Ausprobieren", titel: "Nicht immer „Dann“", teile: [
      { art: "beispiel", kopf: "So klingt es oft", html: "<p>Dann ging ich in die Küche. Dann sah ich den Kuchen. Dann nahm ich ein Stück. Dann kam Papa.</p>" },
      { art: "text", html: "<p>Viermal „Dann“ – das klingt wie eine Einkaufsliste. Dabei kannst du fast jedes Satzglied an den <button class=\"term\" data-t=\"satzanfang\">Satzanfang</button> stellen: eine Zeitangabe, eine Ortsangabe oder die Art und Weise.</p>" },
      { art: "sort", id: "anf", tag: "Sortieren", titel: "Was für ein Satzanfang ist das?", buckets: ["Zeit", "Ort", "Art und Weise"], cols: 180, items: [
        { t: "Kurz darauf", b: 0 }, { t: "Im selben Augenblick", b: 0 }, { t: "Wenig später", b: 0 },
        { t: "Hinter der Tür", b: 1 }, { t: "Auf dem Küchentisch", b: 1 }, { t: "Draußen im Flur", b: 1 },
        { t: "Vorsichtig", b: 2 }, { t: "Ohne zu zögern", b: 2 }, { t: "Auf Zehenspitzen", b: 2 }] },
      { art: "mc", id: "anf2", tag: "Vergleichen", fragen: [
        { q: "Welche Fassung klingt am besten?", o: ["Auf Zehenspitzen schlich ich in die Küche. Auf dem Tisch stand der Kuchen. Gerade als ich ein Stück nahm, kam Papa herein.", "Ich schlich in die Küche. Ich sah den Kuchen. Ich nahm ein Stück. Ich hörte Papa.", "Dann schlich ich in die Küche. Und dann sah ich den Kuchen. Und dann kam Papa.", "Und ich schlich in die Küche und sah den Kuchen und nahm ein Stück und Papa kam."], a: 0, e: "Drei Sätze, drei verschiedene Anfänge: Art und Weise, Ort, Zeit." },
        { q: "Welcher Satzanfang passt? „___ hörte ich Schritte auf der Treppe.“", o: ["Im selben Augenblick", "Und dann und dann", "Weil", "Ich"], a: 0, e: "Eine Zeitangabe am Anfang – und das Verb steht gleich danach an zweiter Stelle." }] },
      { art: "offen", id: "um", tag: "Umstellen", fragen: [
        { q: "Stelle um, sodass der Satz nicht mit „Ich“ beginnt: „Ich schlich nach dem Abendessen leise in die Küche.“", m: "Nach dem Abendessen schlich ich leise in die Küche.", k: ["nach dem abendessen schlich|leise schlich|in die küche schlich"] }], tipp: "Nimm „Nach dem Abendessen“ oder „Leise“ nach vorn. Das Verb „schlich“ bleibt an zweiter Stelle, „ich“ rutscht dahinter.",
        hilfen: ["So kannst du beginnen: Nach dem Abendessen …", "Nach dem ersten Satzglied kommt sofort das Verb: Nach dem Abendessen schlich …"] }
    ] },
    { kurz: "Verben", ober: "Verstehen", titel: "Treffende Verben", teile: [
      { art: "text", html: "<p>„Gehen“ kann jeder. Aber <em>wie</em> geht jemand? Ein <button class=\"term\" data-t=\"verb\">treffendes Verb</button> sagt es in einem Wort – ohne „leise“, „schnell“ oder „langsam“ dahinter.</p>" },
      { art: "paare", id: "gehen", tag: "Wortfeld „gehen“", titel: "Was bedeutet das Verb genau?", paare: [
        ["schleichen", "leise und heimlich gehen"], ["stapfen", "mit schweren Schritten gehen"], ["schlendern", "gemütlich und ohne Eile gehen"], ["hasten", "sehr eilig gehen"], ["humpeln", "mit einem verletzten Fuß gehen"]] },
      { art: "luecke", id: "verb", tag: "Lückentext", titel: "Welches Verb passt am besten?", absaetze: [
        ["Der Dieb ", { g: "schlich" }, " um das dunkle Haus."],
        ["Müde ", { g: "stapfte" }, " er durch den tiefen Schnee."],
        ["Am Sonntag ", { g: "schlenderten" }, " wir über den Flohmarkt."],
        ["Mit dem verstauchten Knöchel ", { g: "humpelte" }, " sie zur Bank."],
        ["Zwei Minuten vor der Abfahrt ", { g: "hastete" }, " er zum Bahnsteig."]], extra: ["kochte", "schwamm"] },
      { art: "mc", id: "genau", tag: "Genau treffen", fragen: [
        { q: "„Durch das Schlüsselloch ___ er ins Zimmer.“ Welches Verb passt am besten?", o: ["spähte", "glotzte", "guckte herum", "bewunderte"], a: 0, e: "„Spähen“ heißt: heimlich und aufmerksam schauen – genau das tut man am Schlüsselloch." },
        { q: "„Der Hund ___ die Wurst in zwei Sekunden hinunter.“ Welches Verb passt am besten?", o: ["schlang", "aß", "knabberte", "kostete"], a: 0, e: "„Schlingen“ heißt: gierig und hastig fressen. „Knabbern“ und „kosten“ wären viel zu langsam." },
        { q: "„Der Hund bellte. Der Hund rannte los. Der Hund sprang über den Zaun.“ Wie vermeidest du die Wiederholung?", o: ["mit Pronomen und anderen Ausdrücken: Er rannte los. Mit einem Satz war das Tier über den Zaun.", "Man lässt das Subjekt einfach weg: Bellte. Rannte los. Sprang.", "Man schreibt „Hund“ jedes Mal groß und fett.", "gar nicht – Wiederholungen sind in Erzählungen erwünscht"], a: 0, e: "Pronomen (er, sie, es) und andere Wörter für dieselbe Sache (das Tier, der Vierbeiner) halten den Text abwechslungsreich." }] }
    ] },
    { kurz: "Adjektive", ober: "Verstehen", titel: "Adjektive und Vergleiche", teile: [
      { art: "merke", html: "<ul><li>Ein <button class=\"term\" data-t=\"adjektiv\">Adjektiv</button> ist nur gut, wenn es etwas Neues sagt. „Der nasse Regen“ sagt nichts – „der eisige Regen“ schon.</li><li>Lieber <strong>ein</strong> treffendes Adjektiv als drei beliebige.</li><li>Ein <button class=\"term\" data-t=\"vergleich\">Vergleich</button> mit „wie“ macht anschaulich: still wie in einer Kirche.</li></ul>" },
      { art: "sort", id: "adj", tag: "Sortieren", titel: "Sagt das Adjektiv etwas Neues?", buckets: ["treffend", "überflüssig"], cols: 240, items: [
        { t: "der morsche Steg", b: 0 }, { t: "ihr zerknitterter Brief", b: 0 }, { t: "die rostige Klinke", b: 0 },
        { t: "der nasse Regen", b: 1 }, { t: "der runde Ball", b: 1 }, { t: "das kalte Eis", b: 1 }, { t: "der alte Greis", b: 1 }] },
      { art: "markieren", id: "mark", tag: "Markieren", titel: "Adjektive antippen", satz: "Ein [[eisiger]] Wind fegte über den [[menschenleeren]] Platz und trieb eine [[zerknüllte]] Zeitung vor sich her.", finde: "die drei Adjektive", e: "Eisig, menschenleer, zerknüllt: Jedes der drei Adjektive fügt dem Bild etwas hinzu." },
      { art: "paare", id: "vgl", tag: "Vergleiche", titel: "Was passt zusammen?", paare: [
        ["Er wurde bleich", "wie die Wand."], ["Sie rannte", "wie der Wind."], ["Im Saal war es still", "wie in einer Kirche."], ["Der Koffer war schwer", "wie Blei."], ["Ihre Finger waren kalt", "wie Eiszapfen."]] },
      { art: "offen", id: "vgl2", m7: true, tag: "Selbst erfinden", fragen: [
        { q: "Erfinde einen eigenen Vergleich: „Der Nebel lag über dem See wie …“", m: "Der Nebel lag über dem See wie eine dicke graue Decke.", k: ["decke|watte|schleier|tuch|vorhang|wand|rauch|mantel|milch|teppich|wolke|gespenst|geist|schnee|laken|suppe|dampf|kissen"] }], tipp: "Woran erinnert dich Nebel? An etwas Weiches, Graues, das alles zudeckt?" }
    ] },
    { kurz: "Duell", ober: "Zusatz", titel: "Duell: Welcher Satz ist lebendiger?", teile: [
      { art: "duell", id: "lebendig", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf Runden, jedes Mal dieselbe Frage: Welche Fassung ist die beste? Die KI antwortet auch – aber Vorsicht: Sie hält manchmal „viel“ für „gut“.",
        runden: [
          { q: "Welcher Satz ist am lebendigsten?", o: ["Der Hund schoss um die Ecke und schlitterte über das Parkett.", "Der Hund ging schnell um die Ecke und rutschte dann.", "Der Hund kam."], a: 0, ki: 0, kiText: "weil „schoss“ und „schlitterte“ genau zeigen, wie sich der Hund bewegt.",
            e: "Zwei treffende Verben ersetzen blasse Verben mit Zusatz („ging schnell“)." },
          { q: "Welcher Satz beschreibt den Regen am besten?", o: ["Der Regen trommelte auf das Blechdach.", "Der nasse, feuchte, sehr starke Regen fiel laut und nass herunter.", "Es regnete."], a: 0, ki: 1, kiText: "weil er die meisten Adjektive hat – und mehr Adjektive machen einen Satz immer anschaulicher.",
            e: "Viele Adjektive sind nicht automatisch besser. „Nass“ und „feucht“ sagen beim Regen nichts Neues. Ein treffendes Verb wie „trommelte“ leistet mehr.",
            begruende: { q: "Warum ist „der nasse Regen“ kein guter Ausdruck?", m: "Weil Regen immer nass ist. Das Adjektiv sagt nichts Neues und ist überflüssig.", k: ["immer nass|sowieso|nichts neues|selbstverständlich|überflüssig|jeder regen|ohnehin|logisch|doppelt|weiß man"] } },
          { q: "Welche Fassung hat die besten Satzanfänge?", o: ["Vorsichtig öffnete ich die Tür. Im Flur brannte kein Licht. Plötzlich knarrte eine Diele.", "Ich öffnete die Tür. Ich sah kein Licht. Ich hörte eine Diele.", "Dann öffnete ich die Tür. Dann war kein Licht. Dann knarrte es."], a: 0, ki: 0, kiText: "weil jeder Satz anders beginnt: mit der Art und Weise, mit dem Ort, mit einer Zeitangabe.",
            e: "Abwechslung am Satzanfang macht einen Text flüssig." },
          { q: "Welcher Vergleich passt zu einem sehr schnellen Läufer?", o: ["Er flitzte los wie ein Pfeil.", "Er flitzte los wie ein Läufer.", "Er flitzte los wie eine Schildkröte."], a: 0, ki: 1, kiText: "weil der Vergleich ganz genau stimmt – ein Läufer läuft ja wirklich.",
            e: "Ein Vergleich muss ein Bild liefern. „Wie ein Läufer“ vergleicht die Sache mit sich selbst und sagt nichts.",
            begruende: { q: "Was muss ein guter Vergleich leisten?", m: "Er muss ein Bild im Kopf erzeugen, das zur Sache passt und sie anschaulicher macht.", k: ["bild|vorstell|anschaulich|im kopf|vor augen|deutlich"] } },
          { q: "Welcher Satz zeigt das Gefühl, statt es nur zu behaupten?", o: ["Ihre Hände wurden feucht, und sie brachte keinen Ton heraus.", "Sie war wirklich sehr, sehr aufgeregt.", "Sie hatte ein starkes Gefühl."], a: 0, ki: 0, kiText: "denn feuchte Hände und eine stumme Kehle kann man sehen und spüren.",
            e: "Zeigen statt behaupten – das kennst du aus Modul 4." }] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: Feinschliff", teile: [
      { art: "schreiben", id: "feinschliff", tag: "Schreibtrainer", titel: "Aus brav wird lebendig", min: 40,
        auftrag: "<p><strong>Dieser Absatz ist richtig, aber brav:</strong></p><p><em>Ich ging in den Garten. Dann sah ich einen Vogel. Der Vogel war klein. Dann ging ich näher hin. Dann flog der Vogel weg. Ich war traurig.</em></p><p>Erzähle dasselbe noch einmal – aber lebendig. Der Inhalt bleibt, die Sprache ändert sich.</p>",
        starter: ["Barfuß …", "Auf dem Zaun …", "Vorsichtig …", "Im selben Augenblick …"],
        kriterien: ["Die Satzanfänge wechseln.", "Statt „ging“ und „sah“ stehen treffende Verben.", "Mindestens ein passendes Adjektiv oder ein Vergleich kommt vor.", "Das Gefühl am Ende wird gezeigt, nicht nur behauptet.", "Der Inhalt ist derselbe geblieben."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Je mehr Adjektive ein Satz hat, desto besser ist er.", false],
        ["„Schleichen“ sagt mehr als „leise gehen“.", true],
        ["Man kann einen Satz mit einer Zeit- oder Ortsangabe beginnen.", true],
        ["„Das kalte Eis“ ist ein treffender Ausdruck.", false],
        ["Ein Vergleich mit „wie“ macht eine Stelle anschaulich.", true],
        ["Pronomen helfen, Wiederholungen zu vermeiden.", true]] }
    ] }
  ],
  weiter: { href: "erz_06.html", titel: "Modul 6: Schreibwerkstatt", text: "Du hast jetzt alle Werkzeuge. Im letzten Modul <strong>überarbeitest du einen Entwurf</strong> und schreibst deine eigene Erzählung." }
});
