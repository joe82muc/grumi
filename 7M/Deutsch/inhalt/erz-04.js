/* Deutsch 7 · Erzählen und kreativ schreiben · Modul 4: Gefühle, Gedanken, wörtliche Rede
   (zeigen statt behaupten, äußere und innere Handlung, Zeichen der wörtlichen Rede, Wortfeld „sagen“)
   LehrplanPLUS D7 3.2 (erzählerische Mittel: innere und äußere Handlung, wörtliche Rede), 4.3 (Zeichensetzung bei
   wörtlicher Rede), 4.1 (Wortschatz erweitern, Wortfelder). Alle Beispiele sind eigens für GRUMI geschrieben. */
D7Kit.seite({
  id: "erz-04",
  titel: "Gefühle, Gedanken, wörtliche Rede",
  einleitung: "„Lina war wütend.“ – Das glaubt man, aber man spürt es nicht. Figuren werden erst lebendig, wenn man sieht, was in ihnen vorgeht, und hört, was sie sagen. Genau das übst du heute.",
  zeit: "etwa 40 Minuten",
  ziele: ["💓 Ich zeige Gefühle, statt sie nur zu behaupten.", "💭 Ich unterscheide äußere und innere Handlung.", "💬 Ich setze die Zeichen der wörtlichen Rede richtig.", "🗣️ Ich finde treffende Verben für „sagen“."],
  quiz: { profi: "Figuren-Profi" },
  glossar: {
    aeussere: ["äußere Handlung", "Alles, was man von außen sehen und hören kann: Jemand rennt, öffnet eine Tür, ruft."],
    innere: ["innere Handlung", "Alles, was in einer Figur vorgeht: Gedanken, Gefühle, Wünsche, Befürchtungen."],
    rede: ["wörtliche Rede", "Das, was eine Figur wörtlich sagt. Es steht in Anführungszeichen: „Komm mit!“"],
    begleitsatz: ["Begleitsatz", "Der Satz, der angibt, wer spricht und wie: rief sie, flüsterte er."],
    wortfeld: ["Wortfeld", "Wörter mit ähnlicher Bedeutung, zum Beispiel sagen, rufen, flüstern, murmeln."]
  },
  stationen: [
    { kurz: "Zeigen", ober: "Ausprobieren", titel: "Zeigen statt behaupten", teile: [
      { art: "beispiel", kopf: "Zweimal Wut", html: "<p><strong>Behauptet:</strong> Lina war wütend.</p><p><strong>Gezeigt:</strong> Lina knallte die Tür zu. Ihre Fäuste waren geballt, und ihr Gesicht glühte.</p>" },
      { art: "text", html: "<p>Im zweiten Satz kommt das Wort „wütend“ gar nicht vor – und trotzdem weiß es jeder. Gefühle zeigen sich am Körper und im Verhalten.</p>" },
      { art: "paare", id: "koerper", tag: "Zuordnen", titel: "Welches Gefühl zeigt sich so?", paare: [
        ["Angst", "Die Knie zittern, der Mund wird trocken."], ["Wut", "Die Fäuste ballen sich, das Gesicht wird rot."], ["Freude", "Man strahlt und könnte die ganze Welt umarmen."], ["Scham", "Man starrt auf den Boden und bekommt heiße Ohren."], ["Trauer", "Der Hals wird eng, die Augen brennen."]] },
      { art: "mc", id: "zeig", tag: "Vergleichen", fragen: [
        { q: "Welcher Satz ZEIGT, dass Mats nervös ist?", o: ["Mats trommelte mit den Fingern auf den Tisch und sah alle paar Sekunden zur Uhr.", "Mats war sehr nervös.", "Mats war schon immer ein nervöser Mensch.", "Mats fühlte sich irgendwie nervös."], a: 0, e: "Trommelnde Finger und der Blick zur Uhr – das sieht man vor sich. Die anderen Sätze behaupten es nur." }] },
      { art: "offen", id: "freude", tag: "Selbst formulieren", fragen: [
        { q: "Zeige, statt zu behaupten: Schreibe den Satz „Ella freute sich.“ so um, dass man die Freude sieht.", m: "Ella riss die Arme hoch, strahlte über das ganze Gesicht und hüpfte durch das Zimmer.", k: ["strahl|lacht|lachen|grins|hüpf|sprang|jubel|arme|tanz|umarm|quiet|leucht|klatsch|juchz|fiel ihr um den hals"] }], tipp: "Was tut jemand, der sich riesig freut? Denk an Gesicht, Arme, Beine und Stimme.",
        hilfen: ["So kannst du beginnen: Ella riss … / Ellas Augen … / Ella hüpfte …", "Das Wort „freute“ soll in deinem Satz nicht mehr vorkommen."] }
    ] },
    { kurz: "Innen und außen", ober: "Verstehen", titel: "Äußere und innere Handlung", teile: [
      { art: "merke", html: "<ul><li><button class=\"term\" data-t=\"aeussere\">Äußere Handlung</button>: Was kann man sehen und hören?</li><li><button class=\"term\" data-t=\"innere\">Innere Handlung</button>: Was denkt, fühlt, hofft oder fürchtet die Figur?</li><li>Eine gute Erzählung braucht beides – besonders an der spannendsten Stelle.</li></ul>" },
      { art: "sort", id: "innen", tag: "Sortieren", titel: "Außen oder innen?", buckets: ["äußere Handlung", "innere Handlung"], cols: 240, items: [
        { t: "Sie öffnete den Umschlag.", b: 0 }, { t: "Er rannte zur Tür.", b: 0 }, { t: "Die Lehrerin teilte die Hefte aus.", b: 0 },
        { t: "Hoffentlich hat es niemand gesehen, dachte er.", b: 1 }, { t: "Am liebsten wäre sie im Boden versunken.", b: 1 }, { t: "Was, wenn alles umsonst war?", b: 1 }, { t: "Ein warmes Gefühl breitete sich in ihr aus.", b: 1 }] },
      { art: "mc", id: "ged", tag: "Gedanken wiedergeben", fragen: [
        { q: "Wie kannst du die Gedanken einer Figur in eine Erzählung einbauen?", o: ["als Frage: Was sollte ich jetzt nur tun?", "mit einem Begleitsatz: Das schaffe ich nie, dachte ich.", "als Wunsch: Wenn doch bloß jemand käme!", "gar nicht – Gedanken gehören nicht in eine Erzählung"], a: [0, 1, 2], e: "Fragen, Wünsche und „dachte ich“ – alle drei Wege lassen die Leser in den Kopf der Figur schauen." },
        { q: "„Die Lehrerin legte mir das Heft auf den Tisch. ___ Langsam schlug ich die letzte Seite auf.“ Welcher Satz der inneren Handlung passt in die Lücke?", o: ["Mein Magen zog sich zusammen.", "Das Heft war blau.", "Die Lehrerin ging zum nächsten Tisch.", "Es war die dritte Stunde."], a: 0, e: "Nur dieser Satz verrät, wie es der Figur geht. Die anderen beschreiben die Außenwelt." }] }
    ] },
    { kurz: "Wörtliche Rede", ober: "Verstehen", titel: "Wörtliche Rede – mit den richtigen Zeichen", teile: [
      { art: "merke", kopf: "Drei Muster", html: "<ul><li><strong>Begleitsatz vorn:</strong> Mama rief: „Das Essen ist fertig!“</li><li><strong>Begleitsatz hinten:</strong> „Ich komme gleich“, antwortete ich. – Der Punkt der Rede fällt weg, Fragezeichen und Ausrufezeichen bleiben: „Kommst du?“, fragte sie.</li><li><strong>Begleitsatz in der Mitte:</strong> „Wenn du nicht kommst“, sagte Mama, „wird alles kalt.“</li></ul>" },
      { art: "sort", id: "stell", tag: "Sortieren", titel: "Wo steht der Begleitsatz?", buckets: ["vorn", "hinten", "in der Mitte"], cols: 200, items: [
        { t: "Der Trainer brüllte: „Lauft!“", b: 0 }, { t: "Leise fragte sie: „Bist du noch wach?“", b: 0 },
        { t: "„Das glaube ich nicht“, murmelte er.", b: 1 }, { t: "„Wer war das?“, wollte Papa wissen.", b: 1 },
        { t: "„Morgen“, versprach sie, „bringe ich es zurück.“", b: 2 }, { t: "„Wenn das stimmt“, überlegte ich laut, „haben wir ein Problem.“", b: 2 }] },
      { art: "mc", id: "zeichen", tag: "Zeichen setzen", titel: "Welche Schreibung ist richtig?", fragen: [
        { q: "Begleitsatz vorn:", o: ["Ben fragte: „Kommst du mit?“", "Ben fragte „Kommst du mit?“", "Ben fragte: „Kommst du mit“?", "Ben fragte, „Kommst du mit?“"], a: 0, e: "Nach dem Begleitsatz steht ein Doppelpunkt. Das Fragezeichen gehört zur Rede und steht vor dem Schlusszeichen." },
        { q: "Begleitsatz hinten, Aussagesatz:", o: ["„Ich habe keine Zeit“, antwortete sie.", "„Ich habe keine Zeit.“, antwortete sie.", "„Ich habe keine Zeit“ antwortete sie.", "„Ich habe keine Zeit,“ antwortete sie."], a: 0, e: "Der Punkt der Rede fällt weg. Das Komma steht nach dem Schlusszeichen." },
        { q: "Begleitsatz hinten, Ausruf:", o: ["„Pass auf!“, schrie der Trainer.", "„Pass auf“!, schrie der Trainer.", "„Pass auf!“ schrie der Trainer.", "„Pass auf!,“ schrie der Trainer."], a: 0, e: "Das Ausrufezeichen bleibt in der Rede – und danach steht trotzdem ein Komma." },
        { q: "Begleitsatz in der Mitte:", o: ["„Wenn es regnet“, meinte Opa, „bleiben wir hier.“", "„Wenn es regnet“, meinte Opa, „Bleiben wir hier.“", "„Wenn es regnet“ meinte Opa „bleiben wir hier.“", "„Wenn es regnet,“ meinte Opa, „bleiben wir hier“."], a: 0, e: "Der eingeschobene Begleitsatz steht zwischen zwei Kommas. Der Satz geht danach klein weiter." }] }
    ] },
    { kurz: "Statt „sagen“", ober: "Ausprobieren", titel: "Wie sagt sie es?", teile: [
      { art: "text", html: "<p>„Sagte“ ist nie falsch – aber dreimal hintereinander ist es langweilig. Das <button class=\"term\" data-t=\"wortfeld\">Wortfeld</button> „sagen“ ist riesig. Ein treffendes Verb verrät gleich mit, <strong>wie</strong> jemand spricht.</p>" },
      { art: "sort", id: "feld", tag: "Wortfeld", titel: "Leise, laut oder fragend?", buckets: ["leise", "laut", "fragend"], cols: 180, items: [
        { t: "flüstern", b: 0 }, { t: "murmeln", b: 0 }, { t: "wispern", b: 0 },
        { t: "brüllen", b: 1 }, { t: "schreien", b: 1 }, { t: "rufen", b: 1 },
        { t: "sich erkundigen", b: 2 }, { t: "nachhaken", b: 2 }, { t: "wissen wollen", b: 2 }] },
      { art: "luecke", id: "verben", tag: "Lückentext", titel: "Welches Verb passt?", absaetze: [
        ["„Psst, sie schläft schon“, ", { g: "flüsterte" }, " Mama."],
        ["„Tooor!“, ", { g: "jubelte" }, " die ganze Kurve."],
        ["„Das … das war ich nicht“, ", { g: "stammelte" }, " er mit rotem Kopf."],
        ["„Nie darf ich mit!“, ", { g: "maulte" }, " meine kleine Schwester."],
        ["„Wann fährt der nächste Zug?“, ", { g: "erkundigte" }, " sich der Mann."]], extra: ["sang", "buchstabierte"] },
      { art: "mc", id: "wie", m7: true, tag: "Begründen", fragen: [
        { q: "Warum ist „stammelte“ im dritten Satz treffender als „sagte“?", o: ["Weil man zugleich erfährt, wie er spricht: stockend und verlegen.", "Weil „stammelte“ länger ist.", "Weil „sagte“ ein Fehler wäre.", "Weil „stammelte“ besser zur Zeitform passt."], a: 0, e: "Ein treffendes Verb ersetzt eine ganze Beschreibung. „Sagte“ wäre richtig, aber blass." }] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: eine kleine Szene", teile: [
      { art: "schreiben", id: "szene", tag: "Schreibtrainer", titel: "Vor dem Kino", min: 60,
        auftrag: "<p><strong>Die Lage:</strong> Zwei Freunde stehen vor dem Kino. Der Film beginnt in zehn Minuten. Da merkt einer von beiden: Die Karten liegen zu Hause auf dem Küchentisch.</p><p>Schreibe das Gespräch als kleine Szene. Baue mindestens <strong>sechs Redesätze</strong> ein und zeige, was die beiden fühlen.</p>",
        starter: ["„Hast du die Karten?“, fragte …", "Mir wurde heiß. …", "„Das ist nicht dein Ernst!“, …", "Kleinlaut …"],
        kriterien: ["Die wörtliche Rede steht in Anführungszeichen.", "Die Begleitsätze stehen an verschiedenen Stellen (vorn, hinten, in der Mitte).", "Statt „sagte“ kommen treffende Verben vor.", "Gefühle werden gezeigt (Körper, Gedanken), nicht nur behauptet.", "Der Text steht im Präteritum."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["„Er hatte Angst“ zeigt das Gefühl besser als „Seine Hände zitterten“.", false],
        ["Gedanken und Gefühle gehören zur inneren Handlung.", true],
        ["Steht der Begleitsatz vorn, folgt ein Doppelpunkt.", true],
        ["„Ich komme.“, sagte er. – Hier ist alles richtig gesetzt.", false],
        ["Fragezeichen und Ausrufezeichen der wörtlichen Rede bleiben stehen.", true],
        ["Ein treffendes Verb verrät, wie jemand spricht.", true]] }
    ] }
  ],
  weiter: { href: "erz_05.html", titel: "Modul 5: Lebendig schreiben", text: "Deine Figuren fühlen und sprechen. Jetzt fehlt noch der Feinschliff: <strong>Satzanfänge, Verben, Adjektive</strong> – und ein Duell gegen die KI." }
});
