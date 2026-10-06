/* Deutsch 7 · Literatur und Medien · Modul 1: Erzähltexte und Kurzgeschichte
   (Handlung in Schritten, Rückblende, Wendepunkt, Ich-Erzähler und Autor, Ort und Zeit belegen, Merkmale der Kurzgeschichte)
   LehrplanPLUS D7 2.2 (epische Kleinformen erschließen: Handlung, Ort, Zeit, Figuren; Erzähler und Autor unterscheiden;
   M7: sprachliche Bilder und ihre Wirkung, Deutungen mit Zeilenangaben belegen).
   Text: „Der letzte Stapel“ (texte/literatur/der-letzte-stapel.js) – R7 9 Absätze, 35 Zeilen · M7 9 Absätze, 50 Zeilen. */
D7Kit.seite({
  id: "lit-01",
  titel: "Erzähltexte und Kurzgeschichte",
  einleitung: "Manche Geschichten brauchen nur eine Seite – und gehen dir trotzdem nicht aus dem Kopf. Heute liest du eine Kurzgeschichte über einen Jungen, einen Stapel Prospekte und eine Entscheidung im Regen. Du findest heraus, was passiert, wer erzählt und woran man eine Kurzgeschichte erkennt.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧩 Ich gebe die Handlung einer Geschichte in Schritten wieder.", "🗣️ Ich erkenne, wer erzählt, und unterscheide Erzähler und Autor.", "📍 Ich belege Ort und Zeit mit Textstellen.", "🔎 Ich erkenne die Merkmale einer Kurzgeschichte und weise sie am Text nach."],
  haupttext: { R: "lit-stapel-r", M: "lit-stapel-m" },
  quiz: { profi: "Geschichten-Profi" },
  glossar: {
    kurzgeschichte: ["Kurzgeschichte", "Eine kurze Erzählung über ein Ereignis aus dem Alltag: Sie beginnt ohne Einleitung, hat wenige Figuren und oft einen offenen Schluss."],
    handlung: ["Handlung", "Alles, was in einer Geschichte nacheinander geschieht."],
    rueckblende: ["Rückblende", "Eine Stelle, an der der Erzähler zurückblickt und etwas erzählt, das schon früher passiert ist."],
    wendepunkt: ["Wendepunkt", "Die Stelle, an der sich die Lage plötzlich ändert – danach ist nichts mehr wie vorher."],
    autor: ["Autor / Autorin", "Der Mensch, der einen Text geschrieben hat."],
    erzaehler: ["Erzähler", "Die Stimme, die in einer Geschichte erzählt. Der Erzähler ist erfunden – wie die Figuren."],
    icherz: ["Ich-Erzähler", "Ein Erzähler, der „ich“ sagt und selbst an der Handlung beteiligt ist. Man erfährt nur, was er selbst sieht, denkt und fühlt."],
    ererz: ["Er-/Sie-Erzähler", "Ein Erzähler, der über die Figuren erzählt („er“, „sie“) und selbst in der Handlung nicht vorkommt."],
    unvermittelt: ["unvermittelt", "Ohne Vorbereitung, ganz plötzlich. Ein unvermittelter Anfang hat keine Einleitung."],
    offen: ["offener Schluss", "Die Geschichte hört auf, ohne zu verraten, wie es ausgeht. Man muss selbst weiterdenken."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Eine Geschichte, die mittendrin beginnt", teile: [
      { art: "text", html: "<p class=\"lead\">Lies die Geschichte einmal in Ruhe von Anfang bis Ende. Achte besonders darauf, wie sie anfängt – und wie sie aufhört.</p><p>Der Text ist eine <button class=\"term\" data-t=\"kurzgeschichte\">Kurzgeschichte</button>. Was das genau ist, findest du in Station 4 selbst heraus.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lesetext: { R: "lit-stapel-r", M: "lit-stapel-m" } },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Worum geht es in der Geschichte?", o: ["Ein Junge überlegt, ob er die restlichen Prospekte austrägt oder wegwirft.", "Ein Junge hilft einer alten Frau, ihr Altpapier wegzubringen.", "Zwei Freunde streiten darüber, wer die Prospekte austragen muss.", "Ein Junge verliert im Regen seine Tasche mit den Prospekten."], a: 0, e: "Er steht mit dem letzten Stapel an der Papiertonne – und muss sich entscheiden." },
        { q: "Wie hört die Geschichte auf?", o: ["Man erfährt nicht, wofür sich der Junge entscheidet.", "Der Junge wirft die Prospekte in die Tonne.", "Der Junge trägt alle Prospekte aus und bekommt sein Geld.", "Frau Sedlak nimmt ihm den Stapel ab."], a: 0, e: "„Dann mache ich einen Schritt.“ – Wohin, verrät der Text nicht. Darum geht es später noch." }] }
    ] },
    { kurz: "Handlung", ober: "Verstehen", titel: "Was passiert – Schritt für Schritt", teile: [
      { art: "text", html: "<p>Die <button class=\"term\" data-t=\"handlung\">Handlung</button> ist das, was in einer Geschichte nacheinander geschieht. Wenn du sie in wenigen Schritten wiedergeben kannst, hast du die Geschichte verstanden.</p>" },
      { art: "ordnen", id: "schritte", tag: "Reihenfolge", titel: "Bringe die Handlung in die richtige Reihenfolge", lead: "So läuft der Mittwochnachmittag ab. Tippe unten links auf <strong>📖 Text</strong>, wenn du nachlesen willst.", schritte: [
        "Der Erzähler hat noch vierzig Prospekte und ist vom Regen durchnässt.",
        "Er bleibt an der Papiertonne stehen und hebt den Stapel aus der Tasche.",
        "Im Haus Nummer 9 geht die Tür auf.",
        "Frau Sedlak fragt ihn, was er da macht.",
        "Er behauptet, dass er nur sortiert.",
        "Frau Sedlak hält ihm ein Handtuch hin.",
        "Er macht einen Schritt."] },
      { art: "text", html: "<p>Nicht alles wird in der Reihenfolge erzählt, in der es passiert ist. Manchmal blickt der Erzähler zurück und erzählt etwas von früher. So eine Stelle heißt <button class=\"term\" data-t=\"rueckblende\">Rückblende</button>.</p>" },
      { art: "mc", id: "handl", tag: "Genau gelesen", fragen: [
        { q: "Was ist schon am Tag vorher passiert?", o: ["Luca hat geraten, die restlichen Prospekte wegzuwerfen.", "Frau Sedlak hat dem Erzähler ein Handtuch gegeben.", "Der Erzähler hat einen Stapel Prospekte weggeworfen.", "Der Erzähler hat mit dem Austragen angefangen."], a: 0, e: "„Gestern“ in der Pause – das ist eine Rückblende. Die Prospekte trägt er schon seit seinem dreizehnten Geburtstag aus." },
        { q: "Durch welches Ereignis ändert sich die Lage plötzlich?", o: ["Die Haustür von Nummer 9 geht auf.", "Es fängt an zu regnen.", "Luca kommt um die Ecke.", "Der Stapel rutscht in die Tonne."], a: 0, e: "Bis dahin ist der Erzähler mit seiner Entscheidung allein. Jetzt steht jemand vor ihm, der auf die Prospekte wartet. So eine Stelle heißt Wendepunkt." }] }
    ] },
    { kurz: "Erzähler", ober: "Verstehen", titel: "Wer erzählt – und wo und wann?", teile: [
      { art: "merke", html: "<ul><li>Der <button class=\"term\" data-t=\"autor\">Autor</button> oder die Autorin hat die Geschichte geschrieben – das ist ein wirklicher Mensch.</li><li>Der <button class=\"term\" data-t=\"erzaehler\">Erzähler</button> ist die Stimme, die in der Geschichte spricht. Er ist erfunden, genau wie die Figuren.</li><li>Ein <button class=\"term\" data-t=\"icherz\">Ich-Erzähler</button> sagt „ich“ und ist selbst an der Handlung beteiligt. Du erfährst nur, was er selbst sieht, denkt und fühlt.</li><li>Ein <button class=\"term\" data-t=\"ererz\">Er-/Sie-Erzähler</button> erzählt über die Figuren („er“, „sie“) und kommt selbst nicht vor.</li></ul>" },
      { art: "mc", id: "erz", tag: "Wer erzählt?", fragen: [
        { q: "Wer erzählt die Geschichte „Der letzte Stapel“?", o: ["ein Ich-Erzähler: der Junge, der die Prospekte austrägt", "ein Er-Erzähler, der die Figuren von außen beobachtet", "Frau Sedlak", "Luca"], a: 0, e: "Der Erzähler sagt „ich“ und steckt selbst mitten in der Handlung: „Ich hebe den Stapel aus der Tasche.“" },
        { q: "Was kann dieser Erzähler NICHT wissen?", o: ["was Frau Sedlak denkt, als sie ihn an der Tonne stehen sieht", "wie kalt seine eigenen Finger sind", "was Luca gestern zu ihm gesagt hat", "wie schwer sich der Stapel anfühlt"], a: 0, e: "Ein Ich-Erzähler kennt nur seine eigenen Gedanken und Gefühle. In andere Figuren kann er nicht hineinsehen – er sieht nur, was sie tun und sagen." },
        { q: "Der Erzähler heißt Karim. Hat Karim die Geschichte auch geschrieben?", o: ["Nein. Karim ist eine erfundene Figur – geschrieben hat den Text ein Autor oder eine Autorin.", "Ja. Wer in einer Geschichte „ich“ sagt, ist immer der Autor.", "Ja. Sonst könnte er nicht wissen, was an der Tonne passiert ist."], a: 0, e: "Erzähler und Autor sind nicht dasselbe. Ein Autor kann auch ein Kind, eine alte Frau oder sogar ein Tier erzählen lassen." }] },
      { art: "text", html: "<p>Wo und wann eine Geschichte spielt, steht oft nur in einem halben Satz. Finde diese Stelle im Text – und danach noch ein paar andere.</p>" },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstelle finden", titel: "Wo steht das?", lesetext: "lit-stapel-r", fragen: [
        { q: "Wo erfährst du, wann und wo die Geschichte spielt?", zeilen: [3, 4], e: "Mittwoch, kurz nach fünf, in der Siedlung am Birkenweg.", tipp: "Suche nach einem Wochentag und nach einem Straßennamen." },
        { q: "Wo steht, was Luca dem Erzähler geraten hat?", zeilen: [12, 13], e: "Er soll den Rest einfach wegwerfen – das merke niemand.", tipp: "Suche den Namen Luca und lies dort weiter." },
        { q: "Wo steht, warum Frau Sedlak die Prospekte so wichtig sind?", zeilen: [23, 26], e: "Sie liest sie ganz durch, denn bei ihr ist es still geworden. Für sie sind es „meine Zeitungen“.", tipp: "Lies den Absatz, der mit „Sie wartet jeden Mittwoch“ beginnt." },
        { q: "An welcher Stelle merkst du, dass sich der Erzähler ertappt fühlt?", zeilen: [29, 30], e: "Sein Gesicht wird heiß, und er redet sich heraus: „Ich sortiere nur.“", tipp: "Suche die Stelle, an der Frau Sedlak ihn etwas fragt. Was passiert mit seinem Gesicht?" }] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstelle finden", titel: "Wo steht das?", lesetext: "lit-stapel-m", fragen: [
        { q: "Wo erfährst du, wann und wo die Geschichte spielt?", zeilen: [3, 5], e: "Mittwoch, kurz nach fünf, Ende November, in der Siedlung am Birkenweg.", tipp: "Suche nach einem Wochentag und nach einem Straßennamen." },
        { q: "Wo steht, was Luca dem Erzähler geraten hat?", zeilen: [16, 18], e: "Er soll den Rest einfach wegwerfen – das kontrolliere niemand.", tipp: "Suche den Namen Luca und lies dort weiter." },
        { q: "Mit welchem Vergleich zeigt der Erzähler, dass ihn Lucas Satz nicht loslässt?", zeilen: [19, 20], e: "„wie ein Stein im Schuh“ – etwas Kleines, das bei jedem Schritt stört.", tipp: "Einen Vergleich erkennst du am Wort „wie“." },
        { q: "Wo steht, warum Frau Sedlak die Prospekte so wichtig sind?", zeilen: [29, 35], e: "Sie liest sie ganz durch, und sonst kommt bei ihr selten Post. Für sie sind es „meine Zeitungen“.", tipp: "Lies den Absatz, der mit „Sie wartet jeden Mittwoch“ beginnt." },
        { q: "An welcher Stelle merkst du, dass sich der Erzähler ertappt fühlt?", zeilen: [38, 41], e: "Sein Gesicht wird heiß, und er redet sich heraus: „Ich sortiere nur.“", tipp: "Suche die Stelle, an der Frau Sedlak ihn etwas fragt. Was passiert mit seinem Gesicht?" }] }
    ] },
    { kurz: "Merkmale", ober: "Ausprobieren", titel: "Woran erkennst du eine Kurzgeschichte?", teile: [
      { art: "merke", kopf: "MERKE: DIE KURZGESCHICHTE", html: "<ul><li>Sie beginnt <button class=\"term\" data-t=\"unvermittelt\">unvermittelt</button>: ohne Einleitung, mitten im Geschehen.</li><li>Sie erzählt von einem Ereignis aus dem <strong>Alltag</strong>.</li><li>Es gibt nur <strong>wenige Figuren</strong>, und die Handlung dauert nur <strong>kurze Zeit</strong>.</li><li>An einem <button class=\"term\" data-t=\"wendepunkt\">Wendepunkt</button> ändert sich die Lage plötzlich.</li><li>Der <button class=\"term\" data-t=\"offen\">Schluss ist offen</button> oder überraschend. Die Sätze sind meist kurz und einfach.</li></ul>" },
      { art: "sort", id: "merk", tag: "Sortieren", titel: "Passt das zu einer Kurzgeschichte?", buckets: ["passt zur Kurzgeschichte", "passt nicht"], cols: 240, items: [
        { t: "Anfang ohne Einleitung", b: 0 }, { t: "ein Ereignis aus dem Alltag", b: 0 }, { t: "nur wenige Figuren", b: 0 }, { t: "Die Handlung dauert nur kurze Zeit.", b: 0 }, { t: "Der Schluss bleibt offen.", b: 0 },
        { t: "beginnt mit „Es war einmal …“", b: 1 }, { t: "Zauberer und sprechende Tiere", b: 1 }, { t: "erzählt ein ganzes Leben", b: 1 }, { t: "Am Ende steht eine Lehre in einem Satz.", b: 1 }] },
      { art: "paare", id: "nachweis", nur: "R", tag: "Am Text nachweisen", titel: "Welche Textstelle beweist welches Merkmal?", lead: "Tippe unten links auf <strong>📖 Text</strong> und sieh bei den Zeilen nach.", paare: [
        ["Anfang ohne Einleitung", "„Noch vierzig.“ (Z. 1)"],
        ["Ereignis aus dem Alltag", "Ein Junge trägt Prospekte aus (Z. 5–6)."],
        ["kurze Zeit", "ein paar Minuten an einem Mittwoch (Z. 3)"],
        ["Wendepunkt", "Die Tür von Haus Nummer 9 geht auf (Z. 18)."],
        ["offener Schluss", "„Dann mache ich einen Schritt.“ (Z. 34–35)"]],
        hilfen: ["Sieh im Text bei den Zeilen nach, die in Klammern stehen.", "Der Wendepunkt ist die Stelle, an der plötzlich eine zweite Person dazukommt. Der offene Schluss steht ganz am Ende."] },
      { art: "paare", id: "nachweis", nur: "M", tag: "Am Text nachweisen", titel: "Welche Textstelle beweist welches Merkmal?", lead: "Tippe unten links auf <strong>📖 Text</strong> und sieh bei den Zeilen nach.", paare: [
        ["Anfang ohne Einleitung", "„Noch vierzig.“ (Z. 1)"],
        ["Ereignis aus dem Alltag", "Ein Junge trägt Prospekte aus (Z. 6–7)."],
        ["kurze Zeit", "ein paar Minuten an einem Mittwoch (Z. 3–4)"],
        ["Wendepunkt", "Die Tür von Haus Nummer 9 geht auf (Z. 25)."],
        ["offener Schluss", "„Dann mache ich einen Schritt.“ (Z. 50)"]] },
      { art: "mc", id: "wirk", tag: "Wozu das Ganze?", fragen: [
        { q: "Die Geschichte beginnt mit „Noch vierzig.“ Was bewirkt dieser Anfang?", o: ["Man ist sofort mitten im Geschehen und will wissen, was gemeint ist.", "Man erfährt gleich, wer erzählt und wo die Geschichte spielt.", "Man bekommt die wichtigste Nachricht zuerst – wie in einem Zeitungsbericht.", "Man weiß sofort, wie die Geschichte ausgeht."], a: 0, e: "Wer spricht? Vierzig was? Die Antworten kommen erst nach und nach – das macht neugierig." },
        { q: "Warum lässt die Geschichte offen, wohin der Erzähler geht?", o: ["Weil man selbst weiterdenken soll: Wie würde ich mich entscheiden?", "Weil dem Autor kein Schluss eingefallen ist.", "Weil am Ende einer Kurzgeschichte nie etwas passieren darf.", "Weil die Entscheidung für die Geschichte unwichtig ist."], a: 0, e: "Der offene Schluss gibt die Frage an dich weiter. Deshalb bleibt eine gute Kurzgeschichte im Kopf." }] },
      { art: "mc", id: "sprache", m7: true, tag: "Sprache und Wirkung", fragen: [
        { q: "An der Tonne denkt der Erzähler: „Oder zehn Sekunden.“ Warum steht dieser Gedanke als eigener, ganz kurzer Satz da?", o: ["So bekommt der Gedanke Gewicht: Man spürt, wie verlockend das Wegwerfen ist.", "In einer Kurzgeschichte darf kein Satz länger als drei Wörter sein.", "Der Erzähler denkt den Satz nicht zu Ende, weil ihn der Regen ablenkt.", "Der Gedanke ist nebensächlich und steht deshalb nur kurz da."], a: 0, e: "Eine halbe Stunde im Regen – oder zehn Sekunden. Der kurze Satz stellt die beiden Möglichkeiten hart gegeneinander." }] }
    ] },
    { kurz: "Deine Antwort", ober: "Selbst antworten", titel: "Tonne oder Vordach?", teile: [
      { art: "text", html: "<p class=\"lead\">Die Geschichte hört auf – die Entscheidung nicht. Jetzt bist du dran.</p><p>Eine Meinung zu einem Text überzeugt erst, wenn du sie <strong>mit dem Text begründest</strong>: Was steht da, das für deine Antwort spricht?</p>" },
      { art: "offen", id: "ende", nur: "R", tag: "Selbst antworten", fragen: [
        { q: "Wohin macht der Erzähler am Ende wohl den Schritt – zur Tonne oder zum Vordach? Schreibe deine Meinung auf und begründe sie mit etwas, das im Text steht.", m: "Ich glaube, er geht unter das Vordach. Frau Sedlak ist freundlich zu ihm und wartet jeden Mittwoch auf die Prospekte. Deshalb bringt er es nicht fertig, den Stapel wegzuwerfen.", k: ["freundlich|wartet|handtuch|zeitungen|still|allein|luca|merkt|regen|kalt|nass|schwer|heiß|schämt|gewissen|halbe stunde", "weil|deshalb|denn|darum|daher|deswegen"] }], tipp: "Beide Antworten sind möglich. Wichtig ist deine Begründung: Was im Text spricht dafür?",
        hilfen: ["So kannst du beginnen: Ich glaube, er geht …, weil …", "Überlege: Wie verhält sich Frau Sedlak ihm gegenüber? Und was hat er vorher über sie erzählt?", "Für die Tonne spricht: Er ist nass, ihm ist kalt, und Luca sagt, das merkt niemand. Für das Vordach spricht: Frau Sedlak wartet auf ihre Prospekte und ist freundlich zu ihm."] },
      { art: "offen", id: "ende", nur: "M", tag: "Selbst antworten", fragen: [
        { q: "Wohin macht der Erzähler am Ende wohl den Schritt – zur Tonne oder zum Vordach? Begründe deine Meinung mit zwei Textstellen und gib die Zeilen an.", m: "Ich glaube, er geht unter das Vordach. Frau Sedlak wartet jeden Mittwoch auf die Prospekte (Z. 29) und hält ihm sogar ein Handtuch hin (Z. 44). Außerdem schämt er sich schon für seine Lüge (Z. 40–41). Deshalb bringt er es nicht fertig, den Stapel wegzuwerfen.", k: ["wartet|handtuch|freundlich|zeitungen|lüge|schämt|heiß|pappe|niemand würde|luca|kontrolliert|steif|halbe stunde", "z.|zeile", "weil|deshalb|denn|darum|daher|deswegen"], min: 2 }], tipp: "Beide Antworten sind möglich. Wichtig ist die Begründung: Nenne zwei Stellen und setze die Zeilen in Klammern dahinter: (Z. …)." },
      { art: "offen", id: "einsam", m7: true, tag: "Zwischen den Zeilen", fragen: [
        { q: "Der Erzähler erwähnt, dass Frau Sedlaks Mann nicht mehr lebt. Was soll man als Leser dadurch über sie verstehen?", m: "Frau Sedlak ist allein und wohl auch einsam. Die Prospekte bedeuten ihr viel, weil sonst kaum etwas zu ihr kommt.", k: ["allein|einsam|niemand|keiner|besuch|langweil", "bedeuten|wichtig|freut|abwechslung|braucht|beschäftig|unterhalt"], min: 1 }], tipp: "Überlege: Wie sieht ein Tag bei Frau Sedlak wohl aus? Und was ändert der Mittwoch daran?" },
      { art: "mc", id: "pappe", nur: "M", m7: true, tag: "Sprachliches Bild", fragen: [
        { q: "„Die Lüge schmeckt nach Pappe“ (Z. 40–41). Was drückt dieses sprachliche Bild aus?", o: ["Die Ausrede fühlt sich für ihn falsch und unangenehm an.", "Die nassen Prospekte riechen nach altem Papier.", "Er ist stolz darauf, dass ihm so schnell eine Antwort eingefallen ist.", "Frau Sedlak hat seine Ausrede sofort durchschaut."], a: 0, e: "Pappe schmeckt fad und trocken. So fühlt sich die Ausrede für ihn an: Er weiß, dass sie nicht stimmt, und schämt sich." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Eine Kurzgeschichte beginnt ohne ", { g: "Einleitung" }, " – mitten im Geschehen."],
        ["Sie erzählt von einem Ereignis aus dem ", { g: "Alltag" }, " und kommt mit wenigen ", { g: "Figuren" }, " aus."],
        ["An einem ", { g: "Wendepunkt" }, " ändert sich die Lage plötzlich."],
        ["Der ", { g: "Schluss" }, " bleibt oft offen."]], extra: ["Märchen", "Reim"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Der Erzähler einer Geschichte und ihr Autor sind immer dieselbe Person.", false],
        ["Ein Ich-Erzähler ist selbst an der Handlung beteiligt.", true],
        ["Ort und Zeit einer Geschichte lassen sich oft mit einer Textstelle belegen.", true],
        ["In einer Kurzgeschichte werden zuerst alle Figuren ausführlich vorgestellt.", false],
        ["Eine Rückblende erzählt etwas, das schon vorher passiert ist.", true],
        ["Bei einem offenen Schluss muss man sich selbst überlegen, wie es weitergeht.", true]] }
    ] }
  ],
  weiter: { href: "lit_02.html", titel: "Modul 2: Figuren und ihre Beziehungen", text: "Du weißt jetzt, wie eine Kurzgeschichte gebaut ist. Im nächsten Modul siehst du dir die <strong>Figuren</strong> genauer an: Was tun sie, was sagen sie – und was verrät das über ihre Gefühle?" }
});
