/* Deutsch 7 · Erzählen und kreativ schreiben · Modul 2: Einleitung, Hauptteil, Schluss
   (Aufbau einer Erzählung am Mustertext erkennen, Erzählschritte ordnen, Einleitung und Schluss schreiben)
   LehrplanPLUS D7 3.2 (Erzähltexte strukturiert und adressatenbezogen verfassen; Aufbau planen), 2.2 (Handlung erschließen).
   Text: „Die falsche Linie“ (erzaehlen/r7|m7/falsche-linie.js). */
D7Kit.seite({
  id: "erz-02",
  titel: "Einleitung, Hauptteil, Schluss",
  einleitung: "Eine gute Erzählung ist gebaut wie eine Bergtour: Man bricht auf, steigt Schritt für Schritt zum Gipfel und kommt wieder unten an. Heute schaust du dir an einer fertigen Geschichte an, wie das geht – und schreibst selbst einen Anfang und ein Ende.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧱 Ich erkenne Einleitung, Hauptteil und Schluss einer Erzählung.", "👣 Ich ordne Erzählschritte und finde den Höhepunkt.", "🚪 Ich weiß, was eine gute Einleitung und ein guter Schluss leisten.", "✍️ Ich schreibe selbst eine Einleitung und einen Schluss."],
  haupttext: { R: "erz-linie-r", M: "erz-linie-m" },
  quiz: { profi: "Aufbau-Profi" },
  glossar: {
    einleitung: ["Einleitung", "Der Anfang einer Erzählung. Er nennt Zeit, Ort und Hauptfigur und führt zum Geschehen hin."],
    hauptteil: ["Hauptteil", "Der längste Teil. Hier wird Schritt für Schritt erzählt, was passiert – bis zum Höhepunkt."],
    hoehepunkt: ["Höhepunkt", "Die spannendste Stelle. Sie steht gegen Ende des Hauptteils."],
    schluss: ["Schluss", "Das Ende der Erzählung. Die Spannung löst sich, die Geschichte wird kurz abgerundet."],
    erzaehler: ["Ich-Erzähler", "Die Figur, die die Geschichte selbst erlebt hat und sie mit „ich“ erzählt."],
    praeteritum: ["Präteritum", "Die Zeitform, in der man schriftlich erzählt: ich ging, sie rief, wir sahen."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Eine Geschichte lesen", teile: [
      { art: "text", html: "<p class=\"lead\">Lies die Erzählung in Ruhe. Achte darauf, wo sie anfängt, spannend zu werden – und wo die Spannung wieder nachlässt.</p>" },
      { art: "lesetext", lesetext: { R: "erz-linie-r", M: "erz-linie-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Worum geht es in der Erzählung?", o: ["Ein Kind steigt in den falschen Bus und findet mit Hilfe des Fahrers nach Hause.", "Ein Kind verliert beim Training sein Handy.", "Ein Busfahrer verfährt sich in der Stadt.", "Ein Kind kommt zu spät zum Training."], a: 0, e: "Das ist die ganze Handlung in einem Satz." },
        { q: "Wer erzählt die Geschichte?", o: ["das Kind selbst – es sagt „ich“", "der Busfahrer", "die Mutter", "jemand, der nicht dabei war"], a: 0, e: "Das nennt man Ich-Erzähler: Man erfährt alles aus der Sicht der Hauptfigur." },
        { q: "In welcher Zeitform steht die Erzählung?", o: ["im Präteritum: wollte, stieg, saß", "im Präsens: will, steigt, sitzt", "im Futur: wird wollen, wird steigen", "Die Zeitform wechselt ständig."], a: 0, e: "Schriftlich erzählt man im Präteritum. Nur in der wörtlichen Rede steht das Präsens." }] }
    ] },
    { kurz: "Drei Teile", ober: "Verstehen", titel: "Die drei Teile", teile: [
      { art: "merke", html: "<ul><li>Die <button class=\"term\" data-t=\"einleitung\">Einleitung</button> ist kurz: Wer? Wo? Wann? Sie macht neugierig und verrät das Ende nicht.</li><li>Der <button class=\"term\" data-t=\"hauptteil\">Hauptteil</button> ist der längste Teil: Schritt für Schritt bis zum <button class=\"term\" data-t=\"hoehepunkt\">Höhepunkt</button>.</li><li>Der <button class=\"term\" data-t=\"schluss\">Schluss</button> ist kurz: Die Spannung löst sich, die Geschichte wird abgerundet.</li></ul>" },
      { art: "beleg", id: "teile", nur: "R", tag: "Am Text zeigen", titel: "Wo sind die Teile?", lesetext: "erz-linie-r", fragen: [
        { q: "Tippe die Einleitung an: Wo erfährst du Zeit, Ort und Lage?", zeilen: [1, 4], e: "Donnerstag im November, Haltestelle am Sportplatz, nach dem Training.", tipp: "Die Einleitung ist der erste Absatz. Sie endet, bevor der Bus kommt." },
        { q: "An welcher Stelle merkt das Kind, dass es im falschen Bus sitzt?", zeilen: [12, 13], e: "Mit diesem Satz beginnt das eigentliche Problem.", tipp: "Suche das Wort „Anzeige“ und lies von dort weiter." },
        { q: "Tippe den Schluss an: Wo ist das Kind wieder in Sicherheit?", zeilen: [31, 34], e: "Der Schluss ist kurz – nur drei Sätze.", tipp: "Der Schluss ist der letzte Absatz." }] },
      { art: "beleg", id: "teile", nur: "M", tag: "Am Text zeigen", titel: "Wo sind die Teile?", lesetext: "erz-linie-m", fragen: [
        { q: "Tippe die Einleitung an: Wo erfährst du Zeit, Ort und Lage?", zeilen: [1, 6], e: "Donnerstag im November, Haltestelle am Sportplatz, nach dem Training.", tipp: "Die Einleitung endet, bevor der Bus hält." },
        { q: "An welcher Stelle merkt das Kind, dass es im falschen Bus sitzt?", zeilen: [16, 18], e: "Mit diesem Satz beginnt das eigentliche Problem.", tipp: "Suche das Wort „Anzeige“ und lies von dort weiter." },
        { q: "Tippe den Schluss an: Wo ist das Kind wieder in Sicherheit?", zeilen: [44, 47], e: "Der Schluss ist kurz – nur drei Sätze.", tipp: "Der Schluss ist der letzte Absatz." }] },
      { art: "sort", id: "teil", tag: "Sortieren", titel: "Einleitung, Hauptteil oder Schluss?", lead: "Die Sätze stammen aus einer anderen Geschichte: Ein Turnbeutel ist verschwunden.", buckets: ["Einleitung", "Hauptteil", "Schluss"], cols: 200, items: [
        { t: "An einem Montag im März hatte unsere Klasse in der dritten Stunde Sport.", b: 0 }, { t: "In der Umkleide war es wie immer laut und eng.", b: 0 },
        { t: "Plötzlich merkte ich, dass mein Turnbeutel nicht mehr am Haken hing.", b: 1 }, { t: "Ich suchte unter jeder Bank und hinter jeder Tür.", b: 1 }, { t: "Da entdeckte ich einen blauen Zipfel hinter dem Heizkörper.", b: 1 },
        { t: "Seit diesem Tag schreibe ich meinen Namen groß auf alle meine Sachen.", b: 2 }] }
    ] },
    { kurz: "Erzählschritte", ober: "Ausprobieren", titel: "Schritt für Schritt zum Höhepunkt", teile: [
      { art: "ordnen", id: "schritte", tag: "Reihenfolge", titel: "Ordne die Erzählschritte von „Die falsche Linie“", schritte: ["Warten an der Haltestelle nach dem Training", "Einsteigen, ohne auf die Anzeige zu schauen", "Fremde Häuser: Das ist der falsche Bus!", "Das Handy geht aus, der Bus wird immer leerer", "Endstation: das Gespräch mit dem Fahrer", "Rückfahrt und Ankunft zu Hause"] },
      { art: "mc", id: "hp", tag: "Höhepunkt", fragen: [
        { q: "Welche Stelle ist der Höhepunkt der Erzählung?", o: ["An der Endstation muss das Kind dem Fahrer sagen, dass es falsch eingestiegen ist.", "Das Kind wartet an der Haltestelle.", "Das Kind hört im Bus Musik.", "Die Mutter umarmt das Kind."], a: 0, e: "Hier ist die Spannung am größten: allein, im Dunkeln, ohne Handy – und wie wird der Fahrer reagieren?" },
        { q: "Warum ist der Hauptteil viel länger als Einleitung und Schluss?", o: ["Weil hier Schritt für Schritt erzählt wird und die Spannung wachsen muss.", "Weil der Hauptteil in der Mitte steht.", "Weil Einleitung und Schluss unwichtig sind.", "Weil im Hauptteil die meisten Figuren vorkommen."], a: 0, e: "Spannung braucht Platz. Einleitung und Schluss bilden nur den Rahmen." }] },
      { art: "offen", id: "rahmen", m7: true, tag: "Genau hinsehen", fragen: [
        { q: "Der letzte Satz der Erzählung greift etwas vom Anfang wieder auf. Was ist das – und was zeigt es über das Kind?", m: "Am Anfang starrt das Kind nur auf sein Handy, am Ende schaut es zuerst auf die Anzeige. Das zeigt, dass es aus dem Erlebnis etwas gelernt hat.", k: ["handy", "gelernt|lehre|aufmerksam|aufpass|achtet|vorsichtig|ändert|anders"] }], tipp: "Was tut das Kind an der Haltestelle – und worauf schaut es im letzten Satz zuerst?" }
    ] },
    { kurz: "Anfang und Ende", ober: "Verstehen", titel: "Gute Anfänge, gute Schlüsse", teile: [
      { art: "mc", id: "einl", tag: "Vergleichen", lead: "Eine Geschichte handelt von einem verlorenen Hausschlüssel.", fragen: [
        { q: "Welche Einleitung passt am besten?", o: ["Am letzten Freitag vor den Ferien kam ich allein von der Schule nach Hause. Vor der Haustür griff ich wie immer in die Jackentasche.", "Ich habe einmal meinen Schlüssel verloren, aber die Nachbarin hatte einen Ersatzschlüssel, und alles ging gut aus.", "Schlüssel und Schlösser gibt es schon seit mehreren tausend Jahren.", "Hallo, ich erzähle euch jetzt eine Geschichte."], a: 0, e: "Zeit, Ort und Figur sind da, und man will wissen, wie es weitergeht. Die zweite Einleitung verrät schon das Ende, die dritte klingt wie ein Sachtext, die vierte sagt nichts." },
        { q: "Was darf eine Einleitung auf keinen Fall?", o: ["verraten, wie die Geschichte ausgeht", "die Hauptfigur nennen", "sagen, wo die Geschichte spielt", "kurz sein"], a: 0, e: "Wer das Ende kennt, liest nicht mehr gespannt weiter." },
        { q: "Welcher Schluss rundet die Schlüssel-Geschichte gut ab?", o: ["Erleichtert schloss ich die Tür auf. Seitdem hängt mein Schlüssel an einem Band in meinem Rucksack.", "Dann war die Geschichte aus.", "Am nächsten Tag hatten wir Mathe, und am Wochenende fuhren wir zu meiner Tante, wo es regnete.", "Und wenn sie nicht gestorben sind, dann leben sie noch heute."], a: 0, e: "Ein guter Schluss löst die Spannung und endet kurz – zum Beispiel mit einem Gefühl oder einer Lehre. Er erzählt nichts Neues mehr." }] },
      { art: "offen", id: "schl", tag: "Selbst formulieren", fragen: [
        { q: "Erfinde einen anderen Schluss für „Die falsche Linie“ (ein bis zwei Sätze).", m: "Zu Hause wartete schon ein Teller heiße Suppe auf mich. Den Busfahrer mit dem grauen Bart grüße ich seitdem jedes Mal.", k: ["zu hause|daheim|haustür|mutter|mama|eltern|busfahrer|fahrer|seitdem|seit diesem|nie wieder|immer|erleichtert|froh|endlich|bett"] }], tipp: "Ein Schluss kann mit einem Gefühl enden (erleichtert, froh), mit einer Lehre (seitdem …) oder mit einem Blick auf später.",
        hilfen: ["So kannst du beginnen: Erleichtert … / Seit diesem Abend … / Zu Hause …", "Der Schluss erzählt nichts Neues mehr. Er sagt nur, wie es dem Kind jetzt geht oder was es sich vornimmt."] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt du: Anfang und Ende", teile: [
      { art: "schreiben", id: "rahmen-schreiben", tag: "Schreibtrainer", titel: "Einleitung und Schluss zu einer Geschichte", min: 40,
        auftrag: "<p><strong>Der Hauptteil steht schon fest:</strong></p><ul><li>Beim Schulfest hilfst du am Kuchenstand.</li><li>Die Kasse – eine Blechdose – steht neben dir.</li><li>Du bedienst drei Kinder gleichzeitig. Als du dich umdrehst, ist die Dose weg.</li><li>Du suchst überall. Höhepunkt: Der Hausmeister kommt mit der Dose in der Hand auf dich zu.</li></ul><p>Schreibe die <strong>Einleitung</strong> (drei bis vier Sätze) und den <strong>Schluss</strong> (zwei bis drei Sätze). Lass dazwischen eine Zeile frei. Den Hauptteil musst du nicht schreiben.</p>",
        starter: ["Am Tag des Schulfests …", "Ich stand hinter dem Kuchenstand, als …", "Erleichtert …", "Seit diesem Tag …"],
        kriterien: ["Die Einleitung nennt Zeit, Ort und Hauptfigur.", "Die Einleitung verrät das Ende nicht.", "Der Schluss löst die Spannung auf.", "Der Schluss ist kurz und rundet die Geschichte ab.", "Der Text steht im Präteritum."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Die ", { g: "Einleitung" }, " nennt Zeit, Ort und Hauptfigur."],
        ["Im ", { g: "Hauptteil" }, " wächst die Spannung bis zum ", { g: "Höhepunkt" }, "."],
        ["Der ", { g: "Schluss" }, " löst die Spannung auf und rundet ab."],
        ["Schriftlich erzähle ich im ", { g: "Präteritum" }, "."]], extra: ["Präsens", "Titel"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Die Einleitung ist der längste Teil einer Erzählung.", false],
        ["Der Höhepunkt steht gegen Ende des Hauptteils.", true],
        ["Eine gute Einleitung verrät schon, wie alles ausgeht.", false],
        ["Im Schluss wird nichts Neues mehr erzählt.", true],
        ["Ein Ich-Erzähler erzählt aus seiner eigenen Sicht.", true]] }
    ] }
  ],
  weiter: { href: "erz_03.html", titel: "Modul 3: Spannung und Höhepunkt", text: "Du kennst jetzt das Gerüst. Im nächsten Modul lernst du, wie man den Hauptteil <strong>richtig spannend</strong> macht." }
});
