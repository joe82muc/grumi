/* Deutsch 7 · Sachtexte und Informationen · Modul 3: Mit dem Text belegen
   (Textstelle finden, Zeilenangabe, Aussage belegen, kurze Zitate, Zitat erklären; Duell gegen die KI)
   LehrplanPLUS D7 2.1 (M7: Belegen zentraler Aussagen), 2.3, 3.1 (Übernahmen/Zitate kennzeichnen).
   Text: „E-Scooter“ (texte/sachtexte/r7|m7/escooter.js) – R7 7 Abschnitte, 33 Zeilen · M7 8 Abschnitte, 47 Zeilen. */
D7Kit.seite({
  id: "sach-03",
  titel: "Mit dem Text belegen",
  einleitung: "„Das steht da so!“ – aber wo genau? Wer etwas über einen Text behauptet, muss es beweisen können. Heute lernst du, die passende Stelle zu finden, ihre Zeilen anzugeben und kurz zu zitieren. Dein Text handelt von E-Scootern.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔎 Ich finde die Textstelle, die eine Aussage beweist.", "🔢 Ich gebe Zeilen richtig an: (Z. 12–14).", "💬 Ich zitiere kurz und wörtlich.", "🧠 Ich erkläre, was ein Zitat zeigt."],
  haupttext: { R: "sach-escooter-r", M: "sach-escooter-m" },
  quiz: { profi: "Beleg-Profi" },
  glossar: {
    beleg: ["Textbeleg", "Die Stelle im Text, die eine Aussage beweist. Man gibt sie mit der Zeilennummer an."],
    zeile: ["Zeilenangabe", "So zeigt man, wo etwas steht: (Z. 6) für eine Zeile, (Z. 9–10) für mehrere."],
    zitat: ["Zitat", "Eine Stelle, die man wörtlich aus dem Text übernimmt. Sie steht in Anführungszeichen."],
    woertlich: ["wörtlich", "Wort für Wort genau so, wie es im Text steht – nichts verändert, nichts weggelassen."]
  },
  stationen: [
    { kurz: "Beweisen", ober: "Verstehen", titel: "Behaupten kann jeder – belegen muss man können", teile: [
      { art: "text", html: "<p class=\"lead\">Zwei sagen etwas über denselben Text. Wem glaubst du eher?</p>" },
      { art: "karten", karten: [
        { ic: "🤷", titel: "Mia", text: "„E-Scooter sind auf dem Gehweg verboten. Das weiß doch jeder.“" },
        { ic: "☝️", titel: "Yusuf", text: "„E-Scooter sind auf dem Gehweg verboten. Das steht im Text, im Abschnitt über den Radweg.“" }] },
      { art: "text", html: "<p>Yusuf überzeugt mehr: Er sagt, <strong>wo</strong> es steht. Die Stelle, die eine Aussage beweist, heißt <button class=\"term\" data-t=\"beleg\">Textbeleg</button>. In Proben bekommst du Punkte dafür – auch wenn deine Antwort sonst schon stimmt.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lead: "Lies den Text genau. Achte auf die Zeilennummern am Rand.", lesetext: { R: "sach-escooter-r", M: "sach-escooter-m" } },
      { art: "mc", id: "bw", tag: "Steht das im Text?", fragen: [
        { q: "Welche Aussage lässt sich mit dem Text belegen?", o: ["Für E-Scooter braucht man keinen Führerschein.", "E-Scooter sind schneller als Fahrräder.", "Die meisten Jugendlichen besitzen einen E-Scooter.", "E-Scooter sind billiger als Busfahren."], a: 0, e: "Nur das steht im Text. Die anderen Sätze klingen vielleicht richtig – aber der Text sagt es nicht." },
        { q: "Was ist ein Textbeleg?", o: ["die Stelle im Text, die eine Aussage beweist", "die eigene Meinung zum Text", "die Überschrift des Textes", "eine Zusammenfassung des Textes"], a: 0, e: "Ein Beleg ist ein Beweis – er steht im Text, nicht in deinem Kopf." }] }
    ] },
    { kurz: "Stelle finden", ober: "Ausprobieren", titel: "Die passende Stelle finden", teile: [
      { art: "beleg", id: "bel", nur: "R", tag: "Textstelle finden", titel: "Wo steht das?", lesetext: "sach-escooter-r", fragen: [
        { q: "Wo steht, ab welchem Alter man E-Scooter fahren darf?", zeilen: [6, 6], e: "Eine Altersangabe ist schnell gefunden.", tipp: "Suche nach einer Zahl mit „Jahren“." },
        { q: "Wo steht, woran man erkennt, dass ein Roller versichert ist?", zeilen: [9, 10], e: "Am Aufkleber mit der Nummer.", tipp: "Suche das Wort „Versicherung“ und lies dort weiter." },
        { q: "Wo steht, wo man mit dem E-Scooter NICHT fahren darf?", zeilen: [17, 18], e: "Auf dem Gehweg und in der Fußgängerzone.", tipp: "Suche das Wort „verboten“ – es kommt zweimal vor. Welche Stelle passt zur Frage?" },
        { q: "Wo steht, warum es gefährlich ist, zu zweit zu fahren?", zeilen: [23, 24], e: "Der Grund steht hinter dem Wort „denn“.", tipp: "Suche „zu zweit“ und lies bis zum Ende des Satzes: Der Grund steht hinter „denn“." },
        { q: "Wo steht, warum Fachleute zu einem Helm raten?", zeilen: [27, 29], e: "Der Grund steht hinter dem Wort „weil“.", tipp: "Suche das Wort „Helm“. Der Grund steht im Satz danach." }] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstelle finden", titel: "Wo steht das?", lesetext: "sach-escooter-m", fragen: [
        { q: "Wo steht, was droht, wenn man ohne Versicherungsaufkleber fährt?", zeilen: [11, 12], e: "Man macht sich strafbar.", tipp: "Suche das Wort „Aufkleber“ – es kommt zweimal vor." },
        { q: "Wo steht, warum Leihroller teurer werden können, als man denkt?", zeilen: [15, 18], e: "Weil nach Minuten abgerechnet wird.", tipp: "Suche im Abschnitt über das Ausleihen nach dem Bezahlen." },
        { q: "Wo steht, welche Alkoholregel für alle unter 21 Jahren gilt?", zeilen: [25, 26], e: "Kein Tropfen.", tipp: "Suche die Zahl 21." },
        { q: "Wo steht, wer besonders häufig von Unfällen betroffen ist?", zeilen: [35, 36], e: "Junge Fahrerinnen und Fahrer.", tipp: "Suche das Wort „Unfälle“ und lies bis zum Ende des Satzes." },
        { q: "Wo steht, warum E-Scooter der Umwelt oft nicht nützen?", zeilen: [43, 46], e: "Sie ersetzen oft Wege, für die man gar kein Auto gebraucht hätte.", tipp: "Suche im letzten Abschnitt das Wort „jedoch“ – danach steht der Einwand." }] }
    ] },
    { kurz: "Zeilen angeben", ober: "Verstehen", titel: "So gibst du die Stelle an", teile: [
      { art: "merke", html: "<ul><li>Eine Zeile: <strong>(Z. 6)</strong> · mehrere Zeilen: <strong>(Z. 9–10)</strong></li><li>Die <button class=\"term\" data-t=\"zeile\">Zeilenangabe</button> steht in Klammern hinter deinem Satz – der Punkt kommt danach.</li><li>Oder du baust sie ein: <em>In Zeile 6 steht, dass …</em></li></ul>" },
      { art: "mc", id: "za", nur: "R", tag: "Zeilenangaben prüfen", fragen: [
        { q: "Welche Zeilenangabe passt zu der Aussage „E-Scooter dürfen höchstens 20 km/h fahren“?", o: ["(Z. 7–8)", "(Z. 1–2)", "(Z. 16–17)", "(Z. 30)"], a: 0, e: "Sieh im Text nach: Die Zahl 20 steht in Zeile 8, der Satz beginnt in Zeile 7." },
        { q: "Welcher Satz gibt die Stelle richtig an?", o: ["Man darf ab 14 Jahren fahren (Z. 6).", "Man darf ab 14 Jahren fahren Zeile sechs.", "(Z. 6) Man darf ab 14 Jahren fahren", "Man darf ab 14 Jahren fahren, 6."], a: 0, e: "Klammer auf, Z., Punkt, Zahl, Klammer zu – und dann erst der Satzpunkt." }] },
      { art: "mc", id: "za", nur: "M", tag: "Zeilenangaben prüfen", fragen: [
        { q: "Welche Zeilenangabe passt zu der Aussage „E-Scooter dürfen höchstens 20 km/h erreichen“?", o: ["(Z. 8–9)", "(Z. 1–2)", "(Z. 19–20)", "(Z. 37)"], a: 0, e: "Sieh im Text nach: Der Satz beginnt in Zeile 8 und endet in Zeile 9." },
        { q: "Welcher Satz gibt die Stelle richtig an?", o: ["Man darf ab 14 Jahren fahren (Z. 7).", "Man darf ab 14 Jahren fahren Zeile sieben.", "(Z. 7) Man darf ab 14 Jahren fahren", "Man darf ab 14 Jahren fahren, 7."], a: 0, e: "Klammer auf, Z., Punkt, Zahl, Klammer zu – und dann erst der Satzpunkt." }] },
      { art: "luecke", id: "zl", tag: "Lückentext", absaetze: [
        ["Wenn ich etwas über einen Text behaupte, brauche ich einen ", { g: "Beleg" }, "."],
        ["Ich gebe die ", { g: "Zeile" }, " an, in der es steht."],
        ["Die Angabe steht in ", { g: "Klammern" }, " hinter meinem Satz, zum Beispiel (", { g: "Z." }, " 12–14)."]], extra: ["Meinung", "S."] },
      { art: "offen", id: "bs", nur: "R", tag: "Selbst belegen", fragen: [
        { q: "Belege mit dem Text: „Auf dem Gehweg darf man mit dem E-Scooter nicht fahren.“ Schreibe einen ganzen Satz mit Zeilenangabe.", m: "Im Text steht, dass das Fahren auf dem Gehweg und in der Fußgängerzone verboten ist (Z. 17–18).", k: ["gehweg", "verboten|nicht erlaubt|nicht fahren|nur schieben", "z.|zeile"], min: 2 }], tipp: "Nenne zuerst, was im Text steht, und hänge dann die Zeilen in Klammern an.",
        hilfen: ["So kannst du beginnen: Im Text steht, dass …", "Die Stelle findest du im Abschnitt über den Radweg. Tippe auf 📖 Text und lies dort nach.", "Hänge die Zeilenangabe in Klammern an: (Z. …)."] },
      { art: "offen", id: "bs", nur: "M", tag: "Selbst belegen", fragen: [
        { q: "Belege mit dem Text: „E-Scooter sind nicht automatisch gut für die Umwelt.“ Schreibe zwei Sätze mit Zeilenangaben.", m: "Viele Fahrten ersetzen Wege, die man sonst zu Fuß, mit dem Rad oder mit dem Bus zurückgelegt hätte (Z. 43–46). Dann spart der Roller keine Abgase ein, sondern verbraucht zusätzlich Strom und Rohstoffe (Z. 46–47).", k: ["fuß|rad|bus|ersetz", "strom|rohstoff|akku|abgas", "z.|zeile"], min: 2 }], tipp: "Im letzten Abschnitt stehen zwei Gründe. Gib zu jedem die Zeilen an." }
    ] },
    { kurz: "Zitieren", ober: "Selbst antworten", titel: "Kurz und wörtlich zitieren", teile: [
      { art: "merke", kopf: "SO ZITIERST DU", html: "<ul><li>Ein <button class=\"term\" data-t=\"zitat\">Zitat</button> steht in Anführungszeichen: „…“</li><li>Du schreibst <button class=\"term\" data-t=\"woertlich\">wörtlich</button> ab – kein Wort wird verändert.</li><li>Zitiere kurz: ein paar Wörter oder einen Satz, nie einen ganzen Abschnitt.</li><li>Hinter dem Zitat steht die Zeilenangabe.</li></ul>" },
      { art: "beispiel", nur: "R", html: "<p><strong>Aussage:</strong> Ein Helm ist nicht vorgeschrieben.<br><strong>Mit Zitat:</strong> Im Text heißt es: „Eine Helmpflicht gibt es nicht“ (Z. 26).</p>" },
      { art: "beispiel", nur: "M", html: "<p><strong>Aussage:</strong> Ein Helm ist nicht vorgeschrieben.<br><strong>Mit Zitat:</strong> Im Text heißt es: „Eine Helmpflicht besteht nicht“ (Z. 29).<br><strong>Erklärt:</strong> Man darf also ohne Helm fahren – empfohlen wird er trotzdem.</p>" },
      { art: "mc", id: "zi", nur: "R", tag: "Richtig zitiert?", fragen: [
        { q: "Welches Zitat ist richtig?", o: ["„Auf einem E-Scooter darf immer nur eine Person fahren“ (Z. 21)", "„Auf einem E-Scooter darf nur einer fahren“ (Z. 21)", "Auf einem E-Scooter darf immer nur eine Person fahren", "„Auf einem E-Scooter darf immer nur eine Person fahren“"], a: 0, e: "Wörtlich abgeschrieben, in Anführungszeichen, mit Zeilenangabe – alle drei Dinge müssen stimmen." },
        { q: "Wann ist ein wörtliches Zitat besonders sinnvoll?", o: ["wenn es auf den genauen Wortlaut ankommt, zum Beispiel bei einer Regel", "immer – eigene Worte sind beim Belegen nicht erlaubt", "nie – ein Zitat füllt nur die Zeilen"], a: 0, e: "Oft genügt die Zeilenangabe. Das Zitat nimmst du, wenn die genauen Worte wichtig sind." }] },
      { art: "mc", id: "zi", nur: "M", tag: "Richtig zitiert?", fragen: [
        { q: "Welches Zitat ist richtig?", o: ["„Auch zu zweit zu fahren ist verboten“ (Z. 21–22)", "„Zu zweit fahren ist nicht erlaubt“ (Z. 21–22)", "Auch zu zweit zu fahren ist verboten (Z. 21–22)", "„Auch zu zweit zu fahren ist verboten“"], a: 0, e: "Wörtlich abgeschrieben, in Anführungszeichen, mit Zeilenangabe – alle drei Dinge müssen stimmen." },
        { q: "Wann ist ein wörtliches Zitat besonders sinnvoll?", o: ["wenn es auf den genauen Wortlaut ankommt, zum Beispiel bei einer Regel", "immer – eigene Worte sind beim Belegen nicht erlaubt", "nie – ein Zitat füllt nur die Zeilen"], a: 0, e: "Oft genügt die Zeilenangabe. Das Zitat nimmst du, wenn die genauen Worte wichtig sind." },
        { q: "Nach einem Zitat solltest du …", o: ["in einem eigenen Satz erklären, was das Zitat zeigt.", "sofort das nächste Zitat anhängen.", "die Zeilenangabe weglassen, weil das Zitat genügt."], a: 0, e: "Ein Zitat allein beweist wenig. Erst deine Erklärung zeigt, dass du die Stelle verstanden hast." }] },
      { art: "offen", id: "zit", nur: "R", tag: "Selbst zitieren", fragen: [
        { q: "Zitiere wörtlich den Satz, in dem steht, wie schnell E-Scooter sein dürfen. Denke an Anführungszeichen und Zeilenangabe.", m: "Im Text heißt es: „Die Roller dürfen höchstens 20 Kilometer pro Stunde schnell sein“ (Z. 7–8).", k: ["höchstens 20|20 kilometer", "z.|zeile"] }], tipp: "Schreibe den Satz Wort für Wort ab, setze ihn in „…“ und hänge (Z. …) an.",
        hilfen: ["So kannst du beginnen: Im Text heißt es: „…", "Der Satz steht im zweiten Abschnitt und beginnt mit „Die Roller …“."] },
      { art: "offen", id: "zit", nur: "M", tag: "Zitieren und erklären", fragen: [
        { q: "Zitiere wörtlich die Stelle, an der steht, dass der Nutzen für die Umwelt nicht sicher ist. Erkläre das Zitat danach in einem eigenen Satz.", m: "Im Text heißt es: „Ob E-Scooter der Umwelt nützen, ist umstritten“ (Z. 42). Das bedeutet, dass sich Fachleute nicht einig sind, ob die Roller der Umwelt wirklich helfen.", k: ["umstritten", "z.|zeile", "bedeutet|heißt|zeigt|gemeint|also|einig|unsicher|nicht sicher"], min: 2 }], tipp: "Erst das Zitat in „…“ mit (Z. …), dann ein Satz, der mit „Das bedeutet, …“ beginnt." }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Welcher Textbeleg passt?", teile: [
      { art: "duell", id: "belegduell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf kurze Texte, fünf Aussagen. Wer findet die Stelle, die die Aussage wirklich beweist? Die KI sucht mit – und lässt sich manchmal von einem ähnlichen Wort täuschen.",
        runden: [
          { material: "(Z. 1) Lena riss den Umschlag auf.\n(Z. 2) Sie las den Brief zweimal, dann ließ sie die Schultern hängen.\n(Z. 3) „Wieder nichts“, murmelte sie und legte den Brief weg.\n(Z. 4) Draußen fuhr ein Bus vorbei.",
            q: "Aussage: Lena ist enttäuscht. Welche Stelle belegt das?", o: ["Z. 2–3", "Z. 1", "Z. 4", "Z. 1 und Z. 4"], a: 0, ki: 0, kiText: "hängende Schultern und „Wieder nichts“ zeigen die Enttäuschung.",
            e: "Gefühle stehen oft nicht wörtlich da. Man erkennt sie daran, was jemand tut und sagt." },
          { material: "(Z. 1) Wölfe leben in Rudeln.\n(Z. 2) Ein Rudel besteht meist aus den Eltern und ihren Jungen.\n(Z. 3) Gemeinsam ziehen sie durch ein großes Revier.\n(Z. 4) Mit ihrem Heulen halten die Tiere über weite Strecken Kontakt.",
            q: "Aussage: Wölfe verständigen sich über große Entfernungen. Welche Stelle belegt das?", o: ["Z. 4", "Z. 3", "Z. 1", "Z. 2"], a: 0, ki: 1, kiText: "da steht doch „groß“ – genau wie in der Aussage.",
            e: "Dasselbe Wort reicht nicht. In Zeile 3 geht es um das Revier, nicht um das Verständigen. Der Beleg muss zum Sinn der Aussage passen." },
          { material: "(Z. 1) Das Museum öffnet um zehn Uhr.\n(Z. 2) Erwachsene zahlen fünf Euro.\n(Z. 3) Wer jünger als 14 Jahre ist, zahlt nichts.\n(Z. 4) Führungen kosten extra.",
            q: "Aussage: Für Kinder ist der Eintritt frei. Welche Stelle belegt das?", o: ["Z. 3", "Z. 2", "Z. 4", "Z. 1"], a: 0, ki: 0, kiText: "„zahlt nichts“ bedeutet dasselbe wie „frei“.",
            e: "Der Beleg benutzt oft andere Wörter als die Aussage. Hier: „zahlt nichts“ statt „frei“." },
          { material: "(Z. 1) Tim stand vor dem Sprungturm.\n(Z. 2) Seine Knie zitterten, und er klammerte sich ans Geländer.\n(Z. 3) Unten winkte seine Schwester.\n(Z. 4) „Komm schon!“, rief sie.",
            q: "Welcher Satz belegt richtig, dass Tim Angst hat?", o: ["Tim hat Angst: „Seine Knie zitterten“ (Z. 2).", "Tim hat Angst, das merkt man einfach.", "Tim hat Angst (Z. 3).", "Tim hat Angst: Seine Knie haben gewackelt, Zeile zwei."], a: 0, ki: 1, kiText: "das merkt doch jeder, dafür braucht man keine Zeile.",
            e: "„Das merkt man“ ist kein Beleg. Ein Beleg nennt die Stelle – am besten mit wörtlichem Zitat und Zeilenangabe." },
          { material: "(Z. 1) Die Klasse 7b pflanzt Obstbäume auf der Schulwiese.\n(Z. 2) Ihre Blüten liefern im Frühjahr Nahrung für Bienen.\n(Z. 3) Bisher stehen dort sechs Bäume.\n(Z. 4) Im Herbst soll es Apfelsaft für alle geben.",
            q: "Aussage: Die Bäume nützen auch den Insekten. Welche Stelle belegt das?", o: ["Z. 2", "Z. 3", "Z. 1", "Z. 4"], a: 0, ki: 0, kiText: "Bienen sind Insekten, und die Blüten geben ihnen Nahrung.",
            e: "Richtig: Man muss wissen, dass Bienen Insekten sind – dann passt Zeile 2 genau.",
            begruende: { q: "Warum ist Zeile 3 kein Beleg für diese Aussage?", m: "In Zeile 3 steht nur, wie viele Bäume es sind, aber nichts über Insekten.", k: ["wie viele|anzahl|zahl|sechs", "insekt|bienen|nichts über|nicht um"] } }
        ] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Textbeleg zeigt, wo im Text etwas steht.", true],
        ["Die Zeilenangabe für die Zeilen 9 und 10 schreibt man so: (Z. 9–10).", true],
        ["Bei einem wörtlichen Zitat darf man Wörter austauschen, wenn der Sinn bleibt.", false],
        ["Ein Zitat steht in Anführungszeichen.", true],
        ["„Das weiß doch jeder“ ist ein guter Beleg.", false],
        ["Nach einem Zitat erkläre ich, was es zeigt.", true]] }
    ] }
  ],
  weiter: { href: "sach_04.html", titel: "Modul 4: Zusammenfassen", text: "Du kannst jetzt beweisen, was im Text steht. Im nächsten Modul machst du aus einem langen Text einen kurzen: Du schreibst eine <strong>Zusammenfassung</strong>." }
});
