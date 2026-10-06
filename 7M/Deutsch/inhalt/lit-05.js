/* Deutsch 7 · Literatur und Medien · Modul 5: Jugendbuch und szenisches Spiel
   (Klappentext untersuchen, Figur und Situation am Text belegen, Figurenkarte, Lesetagebuch, Brief an eine Figur;
   vom Erzähltext zur Spielszene: Sprechtext, Regieanweisung, Rollenkarte; Schreibtrainer: Spielszene)
   LehrplanPLUS D7 2.2 (Ganzschrift/Jugendbuch erschließen, Leseeindrücke festhalten, Figuren), 1.4 (szenisch spielen:
   Texte in Szenen umsetzen).
   Texte (texte/literatur/rauschen-auf-kanal-neun.js): Klappentext (10 Zeilen) und Romanauszug eines ERFUNDENEN
   Jugendbuchs – R7 8 Absätze, 28 Zeilen · M7 8 Absätze, 39 Zeilen. Kein Text aus einem echten Buch.
   Die Methoden sind so angelegt, dass die Klasse sie danach an ihrem eigenen Klassenbuch anwenden kann. */
D7Kit.seite({
  id: "lit-05",
  titel: "Jugendbuch und szenisches Spiel",
  einleitung: "Ein ganzes Buch liest man nicht in einer Stunde. Damit du unterwegs den Überblick behältst, gibt es Werkzeuge: Klappentext prüfen, Figurenkarte anlegen, Lesetagebuch führen. Heute probierst du sie an einem erfundenen Jugendbuch aus – und machst am Ende aus einer Buchstelle eine Szene zum Vorspielen. Danach kannst du alles bei eurem Klassenbuch anwenden.",
  zeit: "etwa 45 Minuten",
  ziele: ["📖 Ich entnehme einem Klappentext, worum es geht – und was offen bleibt.", "👤 Ich beschreibe eine Figur und belege das mit Textstellen.", "📓 Ich schreibe einen Eintrag in ein Lesetagebuch.", "🎭 Ich mache aus einer Buchstelle eine Spielszene mit Regieanweisungen."],
  haupttext: { R: "lit-kanal-auszug-r", M: "lit-kanal-auszug-m" },
  quiz: { profi: "Bücher-Profi" },
  glossar: {
    klappentext: ["Klappentext", "Der kurze Text auf der Rückseite oder im Umschlag eines Buches. Er macht neugierig, verrät aber nicht, wie es ausgeht."],
    hauptfigur: ["Hauptfigur", "Die Figur, um die es in einem Buch vor allem geht."],
    figurenkarte: ["Figurenkarte", "Ein Steckbrief für eine Figur: Name, Lebensumstände, Eigenschaften und was sie will. Zu jeder Eigenschaft gehört eine Textstelle."],
    lesetagebuch: ["Lesetagebuch", "Ein Heft, das dich durch ein ganzes Buch begleitet. Nach jedem Leseabschnitt schreibst du kurz auf, was passiert ist und was du darüber denkst."],
    szene: ["Spielszene", "Ein kurzer Text zum Vorspielen. Darin steht nur, was die Figuren sagen und tun."],
    sprechtext: ["Sprechtext", "Das, was eine Figur in der Szene sagt. Er steht hinter dem Rollennamen – ohne Anführungszeichen."],
    regie: ["Regieanweisung", "Ein Hinweis in Klammern: Er sagt, was eine Figur tut oder wie sie spricht – zum Beispiel (flüstert) oder (verschränkt die Arme)."],
    rollenkarte: ["Rollenkarte", "Eine Karte für die Person, die eine Rolle spielt: Wer bin ich? Was will ich? Wie spreche und bewege ich mich?"]
  },
  stationen: [
    { kurz: "Klappentext", ober: "Lesen", titel: "Der Klappentext: Was verrät er?", teile: [
      { art: "text", html: "<p class=\"lead\">Stell dir vor, du ziehst dieses Buch aus dem Regal, drehst es um und liest den <button class=\"term\" data-t=\"klappentext\">Klappentext</button>. Würdest du es mitnehmen?</p><p>Das Buch gibt es nicht wirklich – es ist für dieses Modul erfunden. Was du daran übst, klappt aber bei jedem Buch.</p>" },
      { art: "lesetext", tag: "Klappentext", lesetext: "lit-kanal-klappentext" },
      { art: "mc", id: "klap", tag: "Genau gelesen", fragen: [
        { q: "Warum ist der Umzug für Smilla „eine Katastrophe“?", o: ["Im Dorf gibt es kein Netz, kaum Busse und niemanden in ihrem Alter.", "Sie musste ihr Funkgerät in der Stadt zurücklassen.", "Sie hat sich mit dem Nachbarsjungen Theo gestritten.", "In der alten Scheune ist es ihr unheimlich."], a: 0, e: "Das steht gleich im ersten Satz (Z. 1–3). Smilla ist die Hauptfigur – um sie geht es in dem Buch." },
        { q: "Wozu ist ein Klappentext da?", o: ["Er soll neugierig machen, ohne das Ende zu verraten.", "Er fasst das ganze Buch mit Schluss zusammen.", "Er erklärt schwierige Wörter aus dem Buch.", "Er sagt, wie viele Seiten und Kapitel das Buch hat."], a: 0, e: "Wer das Ende schon kennt, liest das Buch nicht mehr. Deshalb hört ein Klappentext an einer spannenden Stelle auf." },
        { q: "Mit welchem Mittel macht dieser Klappentext besonders neugierig?", o: ["Er stellt am Schluss Fragen, die er nicht beantwortet.", "Er verrät, wer hinter dem Namen Polarfuchs steckt.", "Er zählt alle Figuren des Buches auf.", "Er lobt das Buch als das beste des Jahres."], a: 0, e: "„Wer ruft da? Und warum …?“ (Z. 8–9) – die Antworten bekommst du nur, wenn du das Buch liest." }] },
      { art: "sort", id: "verraet", tag: "Sortieren", titel: "Was verrät der Klappentext – und was nicht?", buckets: ["Das verrät der Klappentext", "Das bleibt offen"], cols: 240, items: [
        { t: "wer die Hauptfigur ist", b: 0 }, { t: "wo die Geschichte spielt", b: 0 }, { t: "was Smilla in der Scheune findet", b: 0 }, { t: "wer Smilla bei der Suche hilft", b: 0 },
        { t: "wer hinter dem Namen Polarfuchs steckt", b: 1 }, { t: "wozu die Stimme Hilfe braucht", b: 1 }, { t: "ob Smilla und Theo den Rufer finden", b: 1 }, { t: "wie das Buch ausgeht", b: 1 }] }
    ] },
    { kurz: "Figuren", ober: "Verstehen", titel: "Der Auszug: Smilla und Theo", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt schlägst du das Buch auf. Lies den Auszug in Ruhe.</p><p>Achte auf die beiden Figuren: Was tun sie, was sagen sie – und was verrät das über sie? Die <button class=\"term\" data-t=\"hauptfigur\">Hauptfigur</button> kennst du schon aus dem Klappentext.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Aus dem Buch", lesetext: { R: "lit-kanal-auszug-r", M: "lit-kanal-auszug-m" } },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstelle finden", titel: "Wo steht das?", lesetext: "lit-kanal-auszug-r", fragen: [
        { q: "Wo steht, dass Smilla um diese Zeit eigentlich woanders sein sollte?", zeilen: [5, 6], e: "Sie sollte längst im Bett liegen – die Szene spielt also spät am Abend oder in der Nacht.", tipp: "Suche das Wort „eigentlich“." },
        { q: "Wo tut Theo so, als wüsste er über das Funkgerät genau Bescheid?", zeilen: [13, 14], e: "„Das Ding ist kaputt. Schon seit Jahren. Das weiß hier jeder.“ Dazu verschränkt er die Arme – das wirkt überlegen.", tipp: "Suche die Stelle, an der Theo über das Funkgerät spricht." },
        { q: "An welcher Stelle merkst du, dass auch Theo Angst bekommt?", zeilen: [20, 21], e: "Theo wird blass und flüstert nur noch. Der Text sagt nicht „Theo hatte Angst“ – er zeigt es.", tipp: "Suche die Stelle, an der sich Theos Gesicht verändert." },
        { q: "Wo zeigt sich, dass Smilla aufgeregt ist, als sie das Mikrofon nimmt?", zeilen: [23, 23], e: "„Ihre Hand zitterte.“ Trotzdem drückt sie die Taste – das ist mutig.", tipp: "Suche das Wort „Mikrofon“ und lies den nächsten Satz." }] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstelle finden", titel: "Wo steht das?", lesetext: "lit-kanal-auszug-m", fragen: [
        { q: "Mit welchem Vergleich beschreibt der Text, wie groß das Funkgerät ist?", zeilen: [4, 5], e: "„groß wie ein Schuhkarton“ – so kann man sich das Gerät sofort vorstellen.", tipp: "Einen Vergleich erkennst du am Wort „wie“." },
        { q: "Wo steht, warum Smilla um diese Zeit noch wach ist?", zeilen: [7, 9], e: "Seit dem Umzug schläft sie schlecht, weil es auf dem Dorf so still ist.", tipp: "Suche das Wort „Umzug“." },
        { q: "Wo tut Theo so, als wüsste er über das Funkgerät genau Bescheid?", zeilen: [18, 20], e: "„Das Ding ist kaputt. Seit Jahren schon. … Das weiß hier jeder.“ Dazu verschränkt er die Arme – das wirkt überlegen.", tipp: "Suche die Stelle, an der Theo über das Funkgerät spricht." },
        { q: "An welcher Stelle merkst du, dass auch Theo Angst bekommt?", zeilen: [28, 29], e: "Theo wird blass und flüstert nur noch. Der Text sagt nicht „Theo hatte Angst“ – er zeigt es.", tipp: "Suche die Stelle, an der sich Theos Gesicht verändert." },
        { q: "Wo zeigt sich, dass Smilla aufgeregt ist, als sie das Mikrofon nimmt?", zeilen: [31, 34], e: "Ihre Hand zittert, und ihre Stimme klingt fremd. Trotzdem drückt sie die Taste – das ist mutig.", tipp: "Suche das Wort „Mikrofon“ und lies dort weiter." }] },
      { art: "text", html: "<p>Solche Textstellen sammelst du auf einer <button class=\"term\" data-t=\"figurenkarte\">Figurenkarte</button>. Sie ist ein Steckbrief: Wer ist die Figur, wie ist sie, was will sie? Bei einem dicken Buch ergänzt du die Karte nach jedem Kapitel.</p>" },
      { art: "luecke", id: "karte", tag: "Figurenkarte", titel: "Figurenkarte für Smilla", absaetze: [
        ["Name: Smilla. Sie wohnt seit Kurzem in einem ", { g: "Dorf" }, "."],
        ["Das tut sie: Sie geht nachts in die ", { g: "Scheune" }, " und schaltet ein altes ", { g: "Funkgerät" }, " ein."],
        ["So ist sie: ", { g: "neugierig" }, " – sie will unbedingt wissen, ob das Gerät noch geht."],
        ["Und sie ist ", { g: "mutig" }, ": Sie antwortet der fremden Stimme, obwohl ihre Hand zittert."],
        ["Das will sie herausfinden: Wer ist ", { g: "Polarfuchs" }, "?"]], extra: ["Stadt", "gelangweilt"] },
      { art: "mc", id: "theo", m7: true, tag: "Zwischen den Zeilen", fragen: [
        { q: "Als die Stimme spricht, sagt Theo zu Smilla: „Du hast es eingeschaltet.“ Was verrät dieser Satz über ihn?", o: ["Er traut sich selbst nicht zu antworten und schiebt Smilla vor.", "Er will höflich sein und Smilla den Vortritt lassen.", "Er hat keine Lust mehr und möchte nach Hause.", "Er weiß, dass nur Smilla das Mikrofon bedienen kann."], a: 0, e: "Eben noch wusste Theo alles besser. Jetzt sucht er einen Grund, warum nicht er antworten muss. Das steht nicht da – man erschließt es aus dem, was er sagt." }] }
    ] },
    { kurz: "Lesetagebuch", ober: "Selbst antworten", titel: "Das Lesetagebuch", teile: [
      { art: "text", html: "<p>Bei einem dicken Buch weißt du in Kapitel 9 oft nicht mehr, was in Kapitel 3 passiert ist. Dagegen hilft ein <button class=\"term\" data-t=\"lesetagebuch\">Lesetagebuch</button>: Nach jedem Leseabschnitt schreibst du einen kurzen Eintrag.</p>" },
      { art: "merke", kopf: "MERKE: EIN EINTRAG INS LESETAGEBUCH", html: "<ul><li><strong>Kopf:</strong> Datum und gelesene Seiten oder Kapitel.</li><li><strong>Was ist passiert?</strong> Zwei bis drei Sätze in eigenen Worten – nicht abschreiben.</li><li><strong>Was denke ich?</strong> Deine Meinung, eine Frage an den Text oder eine Vermutung, wie es weitergeht.</li><li><strong>Zur Abwechslung:</strong> eine Figurenkarte, dein Lieblingssatz mit Seitenzahl oder ein Brief an eine Figur.</li></ul>" },
      { art: "mc", id: "eintrag", tag: "Vergleichen", fragen: [
        { q: "Vier Kinder haben zu dem Auszug einen Eintrag geschrieben. Welcher ist am besten gelungen?", o: [
          "Smilla schaltet nachts ein altes Funkgerät ein, und eine Stimme namens Polarfuchs meldet sich. Ich frage mich, warum er so wenig Zeit hat. Vielleicht ist er in Gefahr.",
          "War ganz spannend. Mehr fällt mir dazu nicht ein.",
          "„Das Ding ist kaputt“, sagte Theo und verschränkte die Arme. Theo kam näher. Theo wurde blass.",
          "Ich mag keine Bücher, die auf dem Dorf spielen. Mein Lieblingsbuch handelt von Drachen."], a: 0, e: "Dieser Eintrag fasst kurz zusammen und fügt eine eigene Frage und eine Vermutung hinzu. Die anderen sind zu knapp, nur abgeschrieben oder haben mit dem Auszug nichts zu tun." }] },
      { art: "offen", id: "tage", nur: "R", tag: "Dein Eintrag", fragen: [
        { q: "Schreibe deinen eigenen Eintrag zu dem Auszug: Was ist geschehen (ein bis zwei Sätze)? Und was hältst du davon?", m: "Smilla schaltet nachts in der Scheune ein altes Funkgerät ein. Plötzlich meldet sich eine Stimme, die sich Polarfuchs nennt. Ich finde die Stelle spannend und vermute, dass Polarfuchs in Gefahr ist.", k: ["funkgerät|polarfuchs|scheune|theo|mikrofon|lautsprecher", "ich finde|ich glaube|ich vermute|ich frage mich|vielleicht|spannend|bestimmt|wahrscheinlich|mir gefällt|meiner meinung|unheimlich|gruselig|ich würde|ich denke"] }], tipp: "Zwei Teile: erst kurz erzählen, was geschehen ist – dann deine Meinung, eine Frage oder eine Vermutung.",
        hilfen: ["So kannst du beginnen: Smilla schaltet nachts … ein. Plötzlich …", "Für den zweiten Teil: Ich finde die Stelle …, weil … / Ich frage mich, … / Ich vermute, dass …", "Schreibe nicht aus dem Text ab. Decke ihn zu und erzähle mit eigenen Worten."] },
      { art: "offen", id: "tage", nur: "M", tag: "Dein Eintrag", fragen: [
        { q: "Schreibe deinen eigenen Eintrag zu dem Auszug: Was ist geschehen (ein bis zwei Sätze)? Und was hältst du davon?", m: "Smilla schaltet nachts in der Scheune ein altes Funkgerät ein. Plötzlich meldet sich eine Stimme, die sich Polarfuchs nennt. Ich finde die Stelle spannend und vermute, dass Polarfuchs in Gefahr ist.", k: ["funkgerät|polarfuchs|scheune|theo|mikrofon|lautsprecher", "ich finde|ich glaube|ich vermute|ich frage mich|vielleicht|spannend|bestimmt|wahrscheinlich|mir gefällt|meiner meinung|unheimlich|gruselig|ich würde|ich denke"] }], tipp: "Zwei Teile: erst kurz erzählen, was geschehen ist – dann deine Meinung, eine Frage oder eine Vermutung." },
      { art: "offen", id: "brief", m7: true, tag: "Brief an eine Figur", fragen: [
        { q: "Schreibe Theo einen kurzen Brief (zwei bis drei Sätze): Wie findest du es, wie er sich in der Scheune verhalten hat?", m: "Lieber Theo, erst tust du so, als wüsstest du alles besser, und dann soll Smilla antworten, weil du dich selbst nicht traust. Das finde ich ein bisschen feige. Gut ist aber, dass du bei ihr geblieben bist.", k: ["lieber theo|hallo theo|hi theo|servus theo|hey theo", "traust|feige|angst|mutig|besser|vorgeschoben|geblieben|blass|geholfen|allein|angeber|erschreck"] }], tipp: "Ein Brief beginnt mit einer Anrede: Lieber Theo, … Sage ihm ehrlich, was du gut und was du nicht so gut fandest." },
      { art: "beispiel", kopf: "So geht es bei eurem Klassenbuch", html: "<p>Lege für jedes Kapitel einen Eintrag an: <strong>Datum und Seiten · Was ist passiert? · Was denke ich?</strong></p><p>Einmal pro Woche darf es etwas Besonderes sein: eine Figurenkarte, ein Lieblingssatz mit Seitenzahl oder ein Brief an eine Figur.</p>" }
    ] },
    { kurz: "Szene", ober: "Ausprobieren", titel: "Vom Erzähltext zur Spielszene", teile: [
      { art: "beispiel", kopf: "Dieselbe Stelle – zweimal", html: "<p><strong>Im Buch:</strong> „Das Ding ist kaputt“, sagte Theo und verschränkte die Arme.</p><p><strong>Zum Vorspielen:</strong> THEO (verschränkt die Arme): Das Ding ist kaputt.</p>" },
      { art: "text", html: "<p>Was ist anders? Der Begleitsatz „sagte Theo“ ist verschwunden, dafür steht der Name vorn. Und was Theo tut, steht jetzt in Klammern. So ein Text heißt <button class=\"term\" data-t=\"szene\">Spielszene</button> – ihr könnt ihn in der Klasse vorspielen.</p>" },
      { art: "merke", kopf: "MERKE: SO SIEHT EINE SPIELSZENE AUS", html: "<ul><li>Vorn steht der <strong>Rollenname</strong> und ein Doppelpunkt.</li><li>Dahinter steht der <button class=\"term\" data-t=\"sprechtext\">Sprechtext</button> – ohne Anführungszeichen, ohne „sagte er“.</li><li><button class=\"term\" data-t=\"regie\">Regieanweisungen</button> stehen in Klammern und im Präsens. Sie sagen, was eine Figur tut oder wie sie spricht.</li><li>In der Szene steht nur, was man <strong>sehen und hören</strong> kann. Gedanken und Gefühle musst du zeigen: durch Worte, Stimme, Gesicht und Bewegung.</li></ul>" },
      { art: "sort", id: "sprech", tag: "Sortieren", titel: "Sprechtext oder Regieanweisung?", buckets: ["Sprechtext", "Regieanweisung"], cols: 240, items: [
        { t: "Das Ding ist kaputt.", b: 0 }, { t: "Und warum leuchtet es dann?", b: 0 }, { t: "Antworte doch!", b: 0 }, { t: "Wer sind Sie?", b: 0 },
        { t: "(verschränkt die Arme)", b: 1 }, { t: "(flüstert)", b: 1 }, { t: "(nimmt das Mikrofon, ihre Hand zittert)", b: 1 }, { t: "(Im Lautsprecher knackt es.)", b: 1 }] },
      { art: "mc", id: "umbau", tag: "Umformen", fragen: [
        { q: "Im Buch steht: „Antworte doch!“, flüsterte Theo. Wie sieht das in der Spielszene aus?", o: ["THEO (flüstert): Antworte doch!", "THEO: „Antworte doch!“, flüsterte Theo.", "Theo flüsterte, dass sie antworten soll.", "THEO flüsterte: (Antworte doch!)"], a: 0, e: "Rollenname, Doppelpunkt, Sprechtext. Aus dem Begleitsatz „flüsterte Theo“ wird die Regieanweisung (flüstert) – im Präsens." },
        { q: "Im Buch erfährst du, dass Smillas Herz schneller schlägt, als das Lämpchen aufleuchtet. Wie lässt sich das auf der Bühne zeigen?", o: ["SMILLA (legt die Hand auf die Brust und atmet schneller)", "SMILLA: Mein Herz klopfte schneller, sagte sie.", "Gar nicht – Gefühle kann man nicht spielen.", "Man lässt die Stelle weg, weil sie unwichtig ist."], a: 0, e: "Ein klopfendes Herz sieht niemand. Die Schauspielerin muss die Aufregung zeigen – mit einer Bewegung, mit dem Atem oder mit der Stimme." }] },
      { art: "ordnen", id: "reihe", nur: "R", tag: "Reihenfolge", titel: "Bringe die Zeilen der Spielszene in die richtige Reihenfolge", lead: "So sieht die Stelle aus, an der Theo plötzlich in der Tür steht.", schritte: [
        "(In der Scheune, nachts. SMILLA dreht am Knopf des Funkgeräts. Ein grünes Lämpchen leuchtet auf.)",
        "THEO (steht plötzlich in der Tür): Was machst du da?",
        "SMILLA (fährt herum, zischt): Hast du mich erschreckt! Ich probiere nur etwas aus.",
        "THEO (verschränkt die Arme): Das Ding ist kaputt. Schon seit Jahren.",
        "SMILLA: Und warum leuchtet es dann?",
        "(THEO kommt näher. Im Lautsprecher knackt es.)"],
        hilfen: ["Eine Szene beginnt meist mit einer Regieanweisung: Wo sind wir? Was sieht man?", "Lies im Text nach (📖 Text, Z. 10–17): Wer spricht zuerst, wer antwortet?"] },
      { art: "ordnen", id: "reihe", nur: "M", tag: "Reihenfolge", titel: "Bringe die Zeilen der Spielszene in die richtige Reihenfolge", lead: "So sieht die Stelle aus, an der Theo plötzlich in der Tür steht.", schritte: [
        "(In der Scheune, nachts. SMILLA dreht am Knopf des Funkgeräts. Ein grünes Lämpchen leuchtet auf.)",
        "THEO (steht plötzlich im Türrahmen): Was machst du da?",
        "SMILLA (fährt herum, zischt): Musst du dich so anschleichen? Ich probiere nur etwas aus.",
        "THEO (verschränkt die Arme): Das Ding ist kaputt. Seit Jahren schon.",
        "SMILLA (tritt einen Schritt zur Seite): Ach ja? Und warum leuchtet es dann?",
        "(THEO kommt näher. Im Lautsprecher knackt es.)"] },
      { art: "paare", id: "rolle", tag: "Rollenkarte", titel: "Rollenkarte für Theo: Was gehört zusammen?", lead: "Wer Theo spielt, muss wissen, wie er ist. Dabei hilft eine <button class=\"term\" data-t=\"rollenkarte\">Rollenkarte</button>.", paare: [
        ["Wer bin ich?", "Theo, der Junge vom Hof nebenan"],
        ["Was will ich am Anfang?", "zeigen, dass ich mich hier auskenne"],
        ["Wie spreche ich am Anfang?", "bestimmt und ein wenig von oben herab"],
        ["Wie stehe ich da?", "mit verschränkten Armen"],
        ["Was ändert sich, als die Stimme ertönt?", "Ich werde blass und flüstere nur noch."]] },
      { art: "offen", id: "regie", m7: true, tag: "Selbst formulieren", fragen: [
        { q: "Im Buch steht nur: „Theo wurde blass.“ Das lässt sich auf der Bühne nicht spielen. Schreibe eine Regieanweisung in Klammern: Was soll Theo in diesem Augenblick tun?", m: "(Theo weicht einen Schritt zurück und starrt mit offenem Mund auf den Lautsprecher.)", k: ["starr|weicht|zurück|schritt|mund|augen|reißt|zuckt|schluckt|stolper|klammert|rührt sich nicht|hält die luft|hält den atem|zittert|hand vor|greift|duckt|packt"] }], tipp: "Was macht jemand, der plötzlich sehr erschrickt? Denke an Augen, Mund, Hände und Füße. Schreibe im Präsens." }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: Schreibe eine Spielszene", teile: [
      { art: "schreiben", id: "szene", nur: "R", tag: "Schreibtrainer", titel: "Polarfuchs meldet sich", min: 50,
        auftrag: "<p><strong>Mach aus dem Schluss des Auszugs eine Spielszene.</strong> Nimm die Stelle von „Theo kam näher“ bis zum Ende (Z. 16–28). Tippe unten links auf <strong>📖 Text</strong>, wenn du nachlesen willst.</p><p>Es spielen: THEO, SMILLA und die STIMME aus dem Funkgerät. Schreibe vor jeden Satz den Rollennamen und setze Regieanweisungen in Klammern.</p>",
        starter: ["(In der Scheune, nachts. Im Lautsprecher knackt es.)", "STIMME (leise, weit weg):", "THEO (wird blass, flüstert):", "SMILLA (nimmt das Mikrofon):", "STIMME (aufgeregt):"],
        kriterien: ["Vor jedem Sprechtext steht der Rollenname mit Doppelpunkt.", "Der Sprechtext steht ohne Anführungszeichen und ohne Begleitsatz.", "Es gibt mindestens drei Regieanweisungen in Klammern.", "Die Regieanweisungen stehen im Präsens.", "Alles Wichtige aus der Textstelle kommt vor."] },
      { art: "schreiben", id: "szene", nur: "M", tag: "Schreibtrainer", titel: "Polarfuchs meldet sich", min: 60,
        auftrag: "<p><strong>Mach aus dem Schluss des Auszugs eine Spielszene.</strong> Nimm die Stelle von „Theo kam näher“ bis zum Ende (Z. 23–39). Tippe unten links auf <strong>📖 Text</strong>, wenn du nachlesen willst.</p><p>Es spielen: THEO, SMILLA und die STIMME aus dem Funkgerät. Schreibe vor jeden Satz den Rollennamen und setze Regieanweisungen in Klammern. Zeige auch, was im Buch nur erzählt wird – zum Beispiel, wie sich das Mikrofon für Smilla anfühlt.</p>",
        starter: ["(In der Scheune, nachts. Im Lautsprecher knackt es.)", "STIMME (leise, wie aus weiter Ferne):", "THEO (wird blass, flüstert):", "SMILLA (greift zögernd nach dem Mikrofon):"],
        kriterien: ["Vor jedem Sprechtext steht der Rollenname mit Doppelpunkt.", "Der Sprechtext steht ohne Anführungszeichen und ohne Begleitsatz.", "Es gibt mindestens vier Regieanweisungen in Klammern.", "Die Regieanweisungen stehen im Präsens.", "Mindestens eine Regieanweisung zeigt ein Gefühl, das im Buch nur erzählt wird."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Klappentext verrät, wie das Buch ausgeht.", false],
        ["Auf eine Figurenkarte gehören Eigenschaften – am besten mit Textstelle.", true],
        ["Ins Lesetagebuch schreibe ich den Text Wort für Wort ab.", false],
        ["Zu einem Eintrag im Lesetagebuch gehört auch meine eigene Meinung.", true],
        ["In einer Spielszene stehen Regieanweisungen in Klammern.", true],
        ["Der Sprechtext einer Spielszene steht in Anführungszeichen mit Begleitsatz.", false]] }
    ] }
  ],
  weiter: { href: "lit_06.html", titel: "Modul 6: Film und Medien vergleichen", text: "Aus einer Buchstelle hast du eine Szene für die Bühne gemacht. Im letzten Modul dieses Bereichs wird aus einer Buchstelle ein <strong>Film</strong>: Du lernst, wie Kamera und Ton erzählen." }
});
