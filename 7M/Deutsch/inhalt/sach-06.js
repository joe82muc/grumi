/* Deutsch 7 · Sachtexte und Informationen · Modul 6: Texte vergleichen
   (Informationstext und Appelltext, Absicht und Adressat, Textvergleich, Hörtext: Radionachricht; Tischduell)
   LehrplanPLUS D7 2.3 (Informations- und Appelltexte unterscheiden, themengleiche Texte vergleichen, Intention und
   Adressatenbezug beurteilen), 1.1 (Inhalten aus Hörmedien folgen, Notizen machen).
   Texte: „Plastik im Meer“ (sachtexte/r7|m7/plastik-info.js), Aufruf (argumentation/aufruf-uferputz.js),
   Hörtext (hoertexte/nachricht-uferputz.js). Schule und Ort sind erfunden. */
D7Kit.seite({
  id: "sach-06",
  titel: "Texte vergleichen",
  einleitung: "Zwei Texte, ein Thema – und doch ganz verschieden. Der eine will dir etwas erklären, der andere will, dass du etwas tust. Heute lernst du, das zu unterscheiden. Am Ende hörst du eine Radionachricht.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎯 Ich erkenne, was ein Text will: informieren oder auffordern.", "🔍 Ich vergleiche zwei Texte zum selben Thema.", "👥 Ich erkenne, an wen sich ein Text richtet.", "🎧 Ich höre eine Nachricht und halte die W-Fragen fest."],
  quiz: { profi: "Text-Detektiv" },
  glossar: {
    absicht: ["Absicht", "Das, was ein Text erreichen will – zum Beispiel informieren, auffordern, anleiten oder unterhalten."],
    appell: ["Appell", "Eine Aufforderung. Ein Appelltext will, dass die Leser etwas tun – zum Beispiel ein Aufruf oder ein Werbeplakat."],
    adressat: ["Adressat", "Die Person oder Gruppe, an die sich ein Text richtet."],
    befehlsform: ["Befehlsform", "Die Verbform für Aufforderungen (Imperativ): Komm! Bring mit! Sag es weiter!"],
    nachricht: ["Nachricht", "Ein kurzer, sachlicher Bericht über ein Ereignis. Er beantwortet die W-Fragen: Wer? Was? Wo? Wann?"]
  },
  stationen: [
    { kurz: "Zwei Texte", ober: "Lesen", titel: "Zwei Texte – ein Thema", teile: [
      { art: "text", html: "<p class=\"lead\">Lies beide Texte. Achte nicht nur darauf, <strong>was</strong> sie sagen, sondern auch darauf, <strong>wie</strong> sie es sagen.</p>" },
      { art: "lesetext", tag: "Text A", lesetext: { R: "sach-plastik-r", M: "sach-plastik-m" } },
      { art: "lesetext", tag: "Text B", lesetext: "arg-aufruf-ufer" },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Was haben beide Texte gemeinsam?", o: ["Beide handeln von Plastikmüll, der ins Wasser gelangt.", "Beide laden zu einer Aktion ein.", "Beide erklären, was Mikroplastik ist.", "Beide sind für Fachleute geschrieben."], a: 0, e: "Das Thema ist dasselbe – aber die Texte gehen ganz verschieden damit um." },
        { q: "Welcher Text spricht dich direkt mit „du“ an?", o: ["Text B", "Text A", "beide", "keiner"], a: 0, e: "„Hast du dich …“, „Komm …“, „Bring …“ – Text B wendet sich direkt an die Leser." }] }
    ] },
    { kurz: "Absicht", ober: "Verstehen", titel: "Was will der Text?", teile: [
      { art: "merke", html: "<ul><li>Ein <strong>Informationstext</strong> will Wissen vermitteln: sachlich, mit Fakten, ohne Aufforderung.</li><li>Ein <button class=\"term\" data-t=\"appell\">Appelltext</button> will, dass du etwas tust: direkte Anrede, <button class=\"term\" data-t=\"befehlsform\">Befehlsform</button>, Ausrufezeichen, oft Ort und Zeit.</li><li>Die <button class=\"term\" data-t=\"absicht\">Absicht</button> erkennst du an der Sprache.</li></ul>" },
      { art: "sort", id: "abs", tag: "Sortieren", titel: "Informiert der Satz – oder fordert er auf?", buckets: ["informiert", "fordert auf"], cols: 240, items: [
        { t: "Plastik verrottet nicht wie Holz oder Papier.", b: 0 }, { t: "Meeresschildkröten verwechseln Plastiktüten mit Quallen.", b: 0 }, { t: "Der größte Teil des Mülls stammt vom Land.", b: 0 }, { t: "Mikroplastik wurde in Fischen gefunden.", b: 0 },
        { t: "Dann tu etwas dagegen!", b: 1 }, { t: "Zieh feste Schuhe an!", b: 1 }, { t: "Bring deine Freunde mit!", b: 1 }, { t: "Sag es weiter!", b: 1 }] },
      { art: "mc", id: "merk", tag: "Merkmale erkennen", fragen: [
        { q: "Woran erkennst du, dass Text B ein Aufruf ist?", o: ["an der direkten Anrede mit „du“", "an den Verben in der Befehlsform", "an den vielen Ausrufezeichen", "an den Fachbegriffen wie Mikroplastik"], a: [0, 1, 2], e: "Fachbegriffe gehören zu Text A. Ein Aufruf spricht an, fordert auf und klingt dringend." },
        { q: "Warum nennt Text B Tag, Uhrzeit und Treffpunkt?", o: ["Weil die Leser sonst nicht wüssten, wie sie mitmachen können.", "Weil jeder Text ein Datum braucht.", "Damit der Text länger wird.", "Weil das im Lexikon so üblich ist."], a: 0, e: "Ein Aufruf will, dass etwas passiert. Dazu müssen die Leser wissen, wann und wo." }] },
      { art: "paare", id: "sorte", tag: "Zuordnen", titel: "Welche Absicht hat welche Textsorte?", paare: [["Lexikonartikel", "informieren"], ["Aufruf", "zum Handeln bewegen"], ["Bastelanleitung", "Schritt für Schritt anleiten"], ["Witz", "unterhalten"]] }
    ] },
    { kurz: "Vergleichen", ober: "Selbst antworten", titel: "Die Texte vergleichen", teile: [
      { art: "sort", id: "wo", tag: "Vergleichen", titel: "Wo steht das?", lead: "Lies noch einmal nach, wenn du unsicher bist.", buckets: ["nur in Text A", "nur in Text B", "in beiden"], cols: 180, items: [
        { t: "was Mikroplastik ist", b: 0 }, { t: "dass sich Tiere in Netzen verfangen", b: 0 },
        { t: "wann und wo man sich trifft", b: 1 }, { t: "was man mitbringen soll", b: 1 },
        { t: "dass Müll über Bäche und Flüsse ins Meer gelangt", b: 2 }, { t: "dass Plastik für Tiere gefährlich ist", b: 2 }] },
      { art: "offen", id: "ref", tag: "Begründen", fragen: [
        { q: "Du sollst ein Kurzreferat über Plastik im Meer halten. Welcher Text hilft dir mehr? Begründe in ein bis zwei Sätzen.", m: "Text A hilft mehr, weil er sachlich informiert und viele Fakten nennt, zum Beispiel über Mikroplastik. Text B will nur zum Mitmachen auffordern.", k: ["text a", "fakten|informier|sachlich|erklärt|wissen|mikroplastik"] }], tipp: "Für ein Referat brauchst du Fakten. Welcher Text liefert sie?",
        hilfen: ["So kannst du beginnen: Text … hilft mir mehr, weil …", "Überlege: Welcher Text erklärt etwas, welcher lädt nur ein?"] },
      { art: "offen", id: "adr", m7: true, tag: "Adressat", fragen: [
        { q: "An wen richtet sich Text B? Nenne die Gruppe und zwei Stellen, an denen du das erkennst.", m: "Text B richtet sich an Schülerinnen und Schüler der Auenschule. Das erkennt man an der Anrede mit „du“ und daran, dass die Schülermitverantwortung einlädt und man Freunde und Eltern mitbringen soll.", k: ["schüler|jugendliche|kinder|mitschüler", "du|anrede|schülermitverantwortung|freunde|eltern|auenschule"] }], tipp: "Wer lädt ein – und wer wird mit „du“ angesprochen? Der Adressat ist die Gruppe, für die der Text geschrieben ist." },
      { art: "mc", id: "wirk", m7: true, tag: "Wirkung", fragen: [
        { q: "Text B endet mit: „Für unseren Bach. Für unsere Zukunft.“ Welche Wirkung haben diese kurzen Sätze?", o: ["Sie klingen eindringlich und bleiben im Kopf.", "Sie geben eine wichtige Sachinformation.", "Sie zeigen, dass der Verfasser nicht gut schreiben kann.", "Sie erklären, wie Plastik zerfällt."], a: 0, e: "Kurze, gleich gebaute Sätze wirken wie ein Schlusspunkt mit Nachdruck – typisch für Aufrufe und Werbung." }] }
    ] },
    { kurz: "Hörtext", ober: "Zuhören", titel: "Im Radio: die Nachricht dazu", teile: [
      { art: "text", html: "<p>Eine <button class=\"term\" data-t=\"nachricht\">Nachricht</button> berichtet kurz und sachlich über ein Ereignis. Lies zuerst die Aufgaben – dann weißt du, worauf du achten musst. Höre danach genau zu.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "hoer-nachricht-ufer", fragen: [
        { art: "mc", id: "hw", titel: "Die W-Fragen", fragen: [
          { q: "Was ist passiert?", o: ["Schülerinnen und Schüler haben am Bachufer Müll gesammelt.", "Am Mühlbach ist ein Auto verunglückt.", "Die Gemeinde hat neue Mülleimer aufgestellt.", "Ein Reporter hat die Auenschule besucht."], a: 0, e: "Das sagt die Sprecherin gleich im ersten Satz – in einer Nachricht steht das Wichtigste am Anfang." },
          { q: "Wann fand die Aktion statt?", o: ["am Samstag", "am Montag", "am Freitag", "in den Ferien"], a: 0, e: "Am Montag wird der Müll nur abgeholt." },
          { q: "Wie viel Müll kam zusammen?", o: ["mehr als vierzig Säcke", "zwei Säcke", "achtzig Säcke", "drei Säcke"], a: 0, e: "Achtzig waren die Helferinnen und Helfer, zwei Säcke hat Aylin allein gefüllt, drei Stunden hat es gedauert." },
          { q: "Wer hat die Aktion organisiert?", o: ["die Schülermitverantwortung", "die Gemeinde", "der Radiosender", "Aylins Klasse"], a: 0, e: "Die Gemeinde hat geholfen: Sie hat Handschuhe und Greifzangen gestellt." }] },
        { art: "tf", id: "htf", titel: "Hast du genau zugehört?", aussagen: [
          ["Die Jugendlichen fanden auch einen Autoreifen.", true],
          ["Aylin war überrascht, wie viel Plastik im Gebüsch hing.", true],
          ["Die Aktion dauerte den ganzen Tag.", false],
          ["Im Frühjahr soll die Aktion wiederholt werden.", true]] },
        { art: "offen", id: "hnot", m7: true, titel: "Notizen", fragen: [
          { q: "Halte die Nachricht in drei Stichpunkten fest: Wer? Was? Wo?", m: "Wer: etwa achtzig Schüler der Auenschule. Was: Müll gesammelt, über vierzig Säcke. Wo: am Ufer des Mühlbachs.", k: ["schüler|auenschule|jugendliche", "müll|säcke|gesammelt|aufgeräumt", "mühlbach|ufer|bach|auenried"], min: 2 }], tipp: "Stichpunkte sind keine Sätze. Schreibe zu jeder W-Frage nur wenige Wörter." }] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Sachtext-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 8, fragen: [
        { q: "„Komm vorbei!“ ist …", o: ["eine Aufforderung", "eine Information", "eine Frage"], a: 0, e: "Befehlsform und Ausrufezeichen." },
        { q: "Ein Lexikonartikel will …", o: ["informieren", "auffordern", "unterhalten"], a: 0, e: "Er vermittelt Wissen." },
        { q: "Die W-Fragen einer Nachricht:", o: ["Wer? Was? Wo? Wann?", "Ja oder nein?", "Warum nicht?"], a: 0, e: "Sie stehen am Anfang jeder Nachricht." },
        { q: "„Sachlich“ bedeutet:", o: ["ohne eigene Meinung", "besonders spannend", "mit vielen Ausrufezeichen"], a: 0, e: "Nur das, was Tatsache ist." },
        { q: "Ein Diagramm zeigt …", o: ["Zahlen als Bild", "eine Geschichte", "eine Meinung"], a: 0, e: "Zum Beispiel als Balken." },
        { q: "Die Kernaussage ist …", o: ["das Wichtigste in einem Satz", "der längste Satz", "der erste Satz"], a: 0, e: "Ohne Beispiele und Einzelheiten." },
        { q: "(Z. 5–7) bedeutet:", o: ["Zeile 5 bis 7", "Seite 5, Zeile 7", "Zitat 5 von 7"], a: 0, e: "Z. steht für Zeile." },
        { q: "Ein wörtliches Zitat steht in …", o: ["Anführungszeichen", "Klammern", "Großbuchstaben"], a: 0, e: "„So“ – und dahinter die Zeile." },
        { q: "Eine Zusammenfassung steht im …", o: ["Präsens", "Präteritum", "Futur"], a: 0, e: "Immer in der Gegenwart." },
        { q: "Ein Schlüsselwort ist …", o: ["ein Wort, das man zum Verstehen braucht", "das erste Wort im Text", "ein Fremdwort"], a: 0, e: "Meist ein Nomen oder Verb." },
        { q: "Der Adressat eines Textes ist …", o: ["die Gruppe, für die er geschrieben ist", "der Verfasser", "die Überschrift"], a: 0, e: "An ihn richtet sich der Text." },
        { q: "Ein Aufruf nennt Ort und Zeit, …", o: ["damit man mitmachen kann", "damit er länger wird", "weil es Vorschrift ist"], a: 0, e: "Er will ja, dass etwas passiert." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Zwei Texte zum selben Thema können ganz verschiedene Absichten haben.", true],
        ["Ein Appelltext will, dass die Leser etwas tun.", true],
        ["Ein Informationstext spricht die Leser meist mit „du“ an und gibt Befehle.", false],
        ["Die Absicht eines Textes erkennt man auch an seiner Sprache.", true],
        ["In einer Nachricht steht das Wichtigste am Ende.", false],
        ["Für ein Referat ist ein Informationstext nützlicher als ein Aufruf.", true]] }
    ] }
  ],
  weiter: { href: "index.html#sachtexte", titel: "Zurück zur Übersicht", text: "Du hast alle sechs Module zu Sachtexten geschafft. Wenn deine Lehrkraft die Proben „Sachtext I“ und „Sachtext II“ freischaltet, findest du sie in der Übersicht." }
});
