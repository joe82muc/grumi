/* Deutsch 7 · Rechtschreibung und Sprachtraining · Mein Fehlertraining
   (Fehler-Check in sechs Fehlerarten, danach Miniübungen genau zu den eigenen Fehlerschwerpunkten)
   LehrplanPLUS D7 4.3 (eigene Fehlerschwerpunkte erkennen und mit Strategien und Regelwissen gezielt daran arbeiten;
   Groß- und Kleinschreibung, Getrennt- und Zusammenschreibung, s-Laute, das/dass, Fremdwörter, Kommasetzung).
   Baustein „fehlercheck“: d7-fehler.js. Alle Beispielsätze sind eigens für GRUMI geschrieben. */
D7Kit.seite({
  id: "rs-fehler",
  titel: "Mein Fehlertraining",
  einleitung: "Niemand macht überall Fehler – die meisten Fehler passieren immer wieder an denselben Stellen. Finde heraus, wo deine liegen, und übe dann genau das.",
  zeit: "Check etwa 5 Minuten · je Miniübung etwa 5 Minuten",
  ziele: ["🎯 Ich finde heraus, bei welcher Fehlerart ich unsicher bin.", "🧭 Ich übe gezielt an meinen Fehlerschwerpunkten.", "🔁 Ich prüfe später noch einmal, ob es besser geworden ist."],
  glossar: {
    signalwort: ["Signalwort", "Ein Wort, das anzeigt: Jetzt kommt ein Nomen – zum Beispiel das, beim, zum, etwas, nichts, viel, alles."],
    ersatzprobe: ["Ersatzprobe", "Setze „dieses“ oder „welches“ ein. Passt es, schreibst du „das“. Passt es nicht, schreibst du „dass“."],
    fremdwort: ["Fremdwort", "Ein Wort aus einer anderen Sprache. Viele behalten ihre besondere Schreibung: th, ph, rh, -ieren, -tion."],
    nebensatz: ["Nebensatz", "Ein Satz, der nicht allein stehen kann. Das gebeugte Verb steht am Ende. Er wird mit Komma abgetrennt."]
  },
  stationen: [
    { kurz: "Fehler-Check", ober: "Herausfinden", titel: "Wo passieren deine Fehler?", teile: [
      { art: "fehlercheck", id: "check", tag: "Fehler-Check", proRunde: 2, bereiche: [
        { id: "gk", titel: "Groß- und Kleinschreibung", station: 2, modul: { href: "Rechtschreibung/rs_02.html", titel: "Groß- und Kleinschreibung" }, fragen: [
          { q: "Welche Schreibung ist richtig?", o: ["Beim Laufen höre ich Musik.", "Beim laufen höre ich Musik."], a: 0, e: "„beim“ steht für „bei dem“ – das Verb wird zum Nomen: beim Laufen." },
          { q: "Welche Schreibung ist richtig?", o: ["Sie hat etwas Schönes erlebt.", "Sie hat etwas schönes erlebt."], a: 0, e: "Nach „etwas“ wird das Adjektiv zum Nomen: etwas Schönes." },
          { q: "Welche Schreibung ist richtig?", o: ["Wir treffen uns heute Abend.", "Wir treffen uns heute abend."], a: 0, e: "Tageszeiten nach „heute“, „gestern“, „morgen“ schreibt man groß: heute Abend." },
          { q: "Welche Schreibung ist richtig?", o: ["Ich habe dienstags Training.", "Ich habe Dienstags Training."], a: 0, e: "Mit -s am Ende ist es ein Adverb (wann?) und wird kleingeschrieben: dienstags, abends." },
          { q: "Welche Schreibung ist richtig?", o: ["Das Schreiben fällt ihm leicht.", "Das schreiben fällt ihm leicht."], a: 0, e: "Der Artikel „das“ macht das Verb zum Nomen: das Schreiben." },
          { q: "Welche Schreibung ist richtig?", o: ["Er wünscht ihr alles Gute.", "Er wünscht ihr alles gute."], a: 0, e: "Nach „alles“ wird das Adjektiv zum Nomen: alles Gute." }] },
        { id: "gz", titel: "Getrennt oder zusammen", station: 3, modul: { href: "Rechtschreibung/rs_03.html", titel: "Getrennt oder zusammen?" }, fragen: [
          { q: "Welche Schreibung ist richtig?", o: ["Wir wollen morgen Rad fahren.", "Wir wollen morgen radfahren."], a: 0, e: "Nomen + Verb schreibt man meist getrennt: Rad fahren, Ski laufen." },
          { q: "Welche Schreibung ist richtig?", o: ["Kannst du das Buch mitbringen?", "Kannst du das Buch mit bringen?"], a: 0, e: "Verben mit mit-, an-, auf-, zurück- schreibt man zusammen: mitbringen." },
          { q: "Welche Schreibung ist richtig?", o: ["Irgendwo liegt mein Schlüssel.", "Irgend wo liegt mein Schlüssel."], a: 0, e: "Verbindungen mit „irgend“ schreibt man zusammen: irgendwo, irgendwann, irgendjemand." },
          { q: "Welche Schreibung ist richtig?", o: ["Das Wasser war eiskalt.", "Das Wasser war eis kalt."], a: 0, e: "Nomen + Adjektiv ergeben ein neues Adjektiv – zusammen und klein: eiskalt, bildschön." },
          { q: "Welche Schreibung ist richtig?", o: ["Wir mussten lange Schlange stehen.", "Wir mussten lange schlangestehen."], a: 0, e: "Nomen + Verb: getrennt – Schlange stehen." },
          { q: "Welche Schreibung ist richtig?", o: ["Er will heute zurückkommen.", "Er will heute zurück kommen."], a: 0, e: "„zurück“ + Verb schreibt man zusammen: zurückkommen, zurückgeben." }] },
        { id: "s", titel: "s, ss oder ß", station: 4, modul: { href: "Rechtschreibung/rs_04.html", titel: "s-Laute und das/dass" }, fragen: [
          { q: "Welches Wort ist richtig geschrieben?", o: ["die Straße", "die Strasse", "die Strase"], a: 0, e: "Langes a, danach ein stimmloser s-Laut: ß." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["der Fluss", "der Fluß", "der Flus"], a: 0, e: "Kurzes u – danach ss." },
          { q: "Welche Schreibung ist richtig?", o: ["Er weiß es nicht.", "Er weiss es nicht.", "Er weis es nicht."], a: 0, e: "Nach einem Doppellaut (ei, au, eu) steht nie ss." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["das Gras", "das Graß", "das Grass"], a: 0, e: "Verlängern hilft: Gräser – man hört ein weiches (stimmhaftes) s, also einfaches s." },
          { q: "Welche Schreibung ist richtig?", o: ["Sie aß einen Apfel.", "Sie ass einen Apfel.", "Sie as einen Apfel."], a: 0, e: "Das a ist lang: aß. (Aber: Sie isst – kurzes i, deshalb ss.)" },
          { q: "Welches Wort ist richtig geschrieben?", o: ["der Schlüssel", "der Schlüßel", "der Schlüsel"], a: 0, e: "Kurzes ü – danach ss." }] },
        { id: "dd", titel: "das oder dass", station: 5, modul: { href: "Rechtschreibung/rs_04.html", titel: "s-Laute und das/dass" }, fragen: [
          { q: "Ich hoffe, ___ du kommst.", o: ["dass", "das"], a: 0, e: "Ersatzprobe: „dieses“ oder „welches“ passt nicht – also dass." },
          { q: "Das Buch, ___ ich gerade lese, ist spannend.", o: ["das", "dass"], a: 0, e: "„welches“ passt: das Buch, welches ich lese – also das." },
          { q: "___ Wetter wird morgen besser.", o: ["Das", "Dass"], a: 0, e: "Hier ist „das“ der Artikel von „Wetter“." },
          { q: "Sie sagt, ___ sie müde ist.", o: ["dass", "das"], a: 0, e: "Kein Ersatz möglich – der Nebensatz beginnt mit der Konjunktion dass." },
          { q: "Ich weiß, ___ Spiel schwer wird.", o: ["dass das", "das dass", "das das"], a: 0, e: "Erst die Konjunktion (dass), dann der Artikel (das Spiel)." },
          { q: "___ glaube ich dir nicht.", o: ["Das", "Dass"], a: 0, e: "„Dieses glaube ich dir nicht“ passt – also das." }] },
        { id: "fw", titel: "Fremdwörter", station: 6, modul: { href: "Rechtschreibung/rs_05.html", titel: "Fremdwörter und Merkwörter" }, fragen: [
          { q: "Welches Wort ist richtig geschrieben?", o: ["Rhythmus", "Rythmus", "Rhytmus"], a: 0, e: "Zweimal h: Rh-y-th-mus." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["Theater", "Teater", "Theather"], a: 0, e: "Ein th – am Anfang." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["interessant", "interresant", "interesant"], a: 0, e: "Ein r, zwei s: inter-es-sant." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["Physik", "Fysik", "Phüsik"], a: 0, e: "Der f-Laut wird hier ph geschrieben, der ü-Laut y." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["Maschine", "Maschiene", "Machine"], a: 0, e: "Langes i ohne e – wie bei vielen Fremdwörtern: Maschine, Benzin, Kino." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["Bibliothek", "Bibliotek", "Biblothek"], a: 0, e: "Bi-bli-o-thek: mit io und th." }] },
        { id: "ko", titel: "Kommasetzung", station: 7, modul: { href: "Rechtschreibung/rs_06.html", titel: "Kommasetzung" }, fragen: [
          { q: "Welcher Satz ist richtig?", o: ["Ich bleibe zu Hause, weil es regnet.", "Ich bleibe zu Hause weil es regnet.", "Ich bleibe, zu Hause weil es regnet."], a: 0, e: "Vor „weil“ beginnt ein Nebensatz – davor steht ein Komma." },
          { q: "Welcher Satz ist richtig?", o: ["Wir kaufen Äpfel, Birnen und Trauben.", "Wir kaufen Äpfel, Birnen, und Trauben.", "Wir kaufen Äpfel Birnen und Trauben."], a: 0, e: "In der Aufzählung steht ein Komma – aber nicht vor „und“." },
          { q: "Welcher Satz ist richtig?", o: ["Als es klingelte, rannten alle hinaus.", "Als es klingelte rannten alle hinaus.", "Als, es klingelte rannten alle hinaus."], a: 0, e: "Der Nebensatz steht vorn. Das Komma steht dort, wo er endet." },
          { q: "Welcher Satz ist richtig?", o: ["Der Hund, der dort bellt, gehört Oma.", "Der Hund der dort bellt, gehört Oma.", "Der Hund, der dort bellt gehört Oma."], a: 0, e: "Ein eingeschobener Relativsatz bekommt vorn und hinten ein Komma." },
          { q: "Welcher Satz ist richtig?", o: ["Ich glaube, dass er recht hat.", "Ich glaube dass er recht hat.", "Ich glaube dass, er recht hat."], a: 0, e: "Vor der Konjunktion „dass“ steht immer ein Komma." },
          { q: "Welcher Satz ist richtig?", o: ["Sie lachte, aber er blieb ernst.", "Sie lachte aber er blieb ernst.", "Sie lachte aber, er blieb ernst."], a: 0, e: "Vor „aber“ steht ein Komma." }] }
      ] }
    ] },
    { kurz: "Groß/klein", ober: "Miniübung", titel: "Groß- und Kleinschreibung", teile: [
      { art: "merke", html: "<ul><li>Verben und Adjektive werden zu Nomen, wenn ein <button class=\"term\" data-t=\"signalwort\">Signalwort</button> davorsteht: <strong>das</strong> Lachen, <strong>beim</strong> Essen, <strong>etwas</strong> Neues, <strong>alles</strong> Gute.</li><li>Tageszeiten nach heute, gestern, morgen: groß (heute <strong>A</strong>bend). Mit -s am Ende: klein (<strong>a</strong>bends).</li></ul>" },
      { art: "sort", id: "gk", tag: "Sortieren", titel: "Groß oder klein?", lead: "Der fehlende Anfangsbuchstabe steht in Klammern.", buckets: ["groß", "klein"], cols: 240, items: [
        { t: "das _auchen im See (t)", b: 0 }, { t: "etwas _üßes (s)", b: 0 }, { t: "heute _ittag (m)", b: 0 }, { t: "beim _ufräumen (a)", b: 0 },
        { t: "Sie will _auchen. (t)", b: 1 }, { t: "ein _üßer Kuchen (s)", b: 1 }, { t: "_ittags um zwölf (m)", b: 1 }, { t: "Wir müssen _ufräumen. (a)", b: 1 }] },
      { art: "mc", id: "gk2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Zum Lernen brauche ich nichts Besonderes.", "Zum lernen brauche ich nichts Besonderes.", "Zum Lernen brauche ich nichts besonderes.", "Zum lernen brauche ich nichts besonderes."], a: 0, e: "Zwei Signalwörter: „zum“ (zu dem) und „nichts“ – beide machen das folgende Wort zum Nomen." },
        { q: "Welches Wort ist hier das Signalwort für die Großschreibung? „Vom Warten bekam er schlechte Laune.“", o: ["Vom", "bekam", "er", "schlechte"], a: 0, e: "„vom“ steht für „von dem“ – darin steckt der Artikel." }] }
    ] },
    { kurz: "Getrennt", ober: "Miniübung", titel: "Getrennt oder zusammen?", teile: [
      { art: "merke", html: "<ul><li><strong>Nomen + Verb:</strong> meist getrennt – Rad fahren, Ski laufen, Schlange stehen, Angst haben.</li><li><strong>Vorsilbe + Verb:</strong> zusammen – mitnehmen, aufstehen, zurückgeben.</li><li><strong>irgend-</strong>: immer zusammen – irgendwann, irgendwo.</li><li><strong>Nomen + Adjektiv:</strong> zusammen und klein – eiskalt, federleicht.</li></ul>" },
      { art: "sort", id: "gz", tag: "Sortieren", titel: "Wie schreibt man die Verbindung?", buckets: ["getrennt", "zusammen"], cols: 240, items: [
        { t: "Ski + laufen", b: 0 }, { t: "Angst + haben", b: 0 }, { t: "Klavier + spielen", b: 0 }, { t: "Auto + fahren", b: 0 },
        { t: "mit + nehmen", b: 1 }, { t: "zurück + geben", b: 1 }, { t: "irgend + wann", b: 1 }, { t: "feder + leicht", b: 1 }] },
      { art: "mc", id: "gz2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Im Winter wollen wir Ski laufen und Schlitten fahren.", "Im Winter wollen wir skilaufen und schlittenfahren.", "Im Winter wollen wir Skilaufen und Schlittenfahren.", "Im Winter wollen wir Ski laufen und schlittenfahren."], a: 0, e: "Nomen + Verb bleiben getrennt, das Nomen bleibt groß." },
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Irgendjemand hat mein Heft mitgenommen.", "Irgend jemand hat mein Heft mit genommen.", "Irgendjemand hat mein Heft mit genommen.", "Irgend jemand hat mein Heft mitgenommen."], a: 0, e: "„irgend“ + Wort: zusammen. Vorsilbe „mit“ + Verb: zusammen." }] }
    ] },
    { kurz: "s-Laute", ober: "Miniübung", titel: "s, ss oder ß?", teile: [
      { art: "merke", html: "<ul><li><strong>ss</strong> nach kurzem Vokal: Fluss, Wasser, küssen.</li><li><strong>ß</strong> nach langem Vokal oder Doppellaut (stimmloser s-Laut): Straße, Fuß, heiß.</li><li><strong>s</strong>, wenn man beim Verlängern ein weiches s hört: Gras – Gräser, Haus – Häuser.</li></ul>" },
      { art: "sort", id: "s3", tag: "Sortieren", titel: "Was fehlt in der Lücke?", buckets: ["s", "ss", "ß"], cols: 160, items: [
        { t: "das Hau_", b: 0 }, { t: "der Prei_", b: 0 }, { t: "die Mau_", b: 0 },
        { t: "das Schlo_", b: 1 }, { t: "die Ta_e", b: 1 }, { t: "me_en", b: 1 },
        { t: "der Fu_ball", b: 2 }, { t: "hei_", b: 2 }, { t: "der Gru_", b: 2 }] },
      { art: "mc", id: "s2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Nach dem Fußballspiel aßen wir heiße Würstchen.", "Nach dem Fussballspiel aßen wir heisse Würstchen.", "Nach dem Fußballspiel assen wir heiße Würstchen.", "Nach dem Fusballspiel aßen wir heiße Würstchen."], a: 0, e: "Langes u in Fuß, langes a in aßen, Doppellaut ei in heiß – dreimal ß." },
        { q: "Warum schreibt man „Fluss“ mit ss, aber „Fuß“ mit ß?", o: ["Das u in „Fluss“ ist kurz, das u in „Fuß“ ist lang.", "„Fluss“ ist ein Nomen, „Fuß“ nicht.", "„Fuß“ ist ein Fremdwort.", "Das ist Zufall und muss man auswendig lernen."], a: 0, e: "Sprich die Wörter deutlich: Fluss (kurz) – Fuß (lang). Die Länge des Vokals entscheidet." }] }
    ] },
    { kurz: "das/dass", ober: "Miniübung", titel: "das oder dass?", teile: [
      { art: "merke", html: "<p>Mach die <button class=\"term\" data-t=\"ersatzprobe\">Ersatzprobe</button>: Passt <strong>dieses</strong> oder <strong>welches</strong>? Dann schreibst du <strong>das</strong>. Passt keines von beiden, schreibst du <strong>dass</strong>.</p>" },
      { art: "sort", id: "dd", tag: "Sortieren", titel: "Was gehört in die Lücke?", buckets: ["das", "dass"], cols: 240, items: [
        { t: "Ich glaube, ___ es bald schneit.", b: 1 }, { t: "Schön, ___ du da bist!", b: 1 }, { t: "Er merkte, ___ etwas fehlte.", b: 1 },
        { t: "___ Fahrrad dort gehört mir.", b: 0 }, { t: "Das Lied, ___ sie singt, kenne ich.", b: 0 }, { t: "___ habe ich nicht gewusst.", b: 0 }] },
      { art: "mc", id: "dd2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Ich finde, dass das Spiel, das wir gestern gesehen haben, spannend war.", "Ich finde, das dass Spiel, das wir gestern gesehen haben, spannend war.", "Ich finde, dass das Spiel, dass wir gestern gesehen haben, spannend war.", "Ich finde, das das Spiel, das wir gestern gesehen haben, spannend war."], a: 0, e: "dass (Konjunktion) – das (Artikel) – das (= welches)." },
        { q: "Welche Probe hilft dir bei das/dass?", o: ["„dieses“ oder „welches“ einsetzen", "das Wort verlängern", "das Wort in Silben klatschen", "den Satz ins Präteritum setzen"], a: 0, e: "Passt „dieses“ oder „welches“, ist es „das“ mit einem s." }] }
    ] },
    { kurz: "Fremdwörter", ober: "Miniübung", titel: "Fremdwörter", teile: [
      { art: "merke", html: "<ul><li>Viele <button class=\"term\" data-t=\"fremdwort\">Fremdwörter</button> behalten ihre Schreibung: <strong>th</strong> (Theater, Thema), <strong>ph</strong> (Physik, Strophe), <strong>rh</strong> (Rhythmus).</li><li>Langes i meist ohne e: Maschine, Benzin, Klima.</li><li>Typische Endungen: -ieren (trainieren), -tion (Station), -iv (aktiv).</li><li>Unsicher? Nachschlagen ist eine Strategie, kein Zeichen von Schwäche.</li></ul>" },
      { art: "sort", id: "fw", tag: "Sortieren", titel: "Richtig oder falsch geschrieben?", buckets: ["richtig", "falsch"], cols: 200, items: [
        { t: "Thema", b: 0 }, { t: "Strophe", b: 0 }, { t: "Adresse", b: 0 }, { t: "trainieren", b: 0 }, { t: "Station", b: 0 },
        { t: "Apoteke", b: 1 }, { t: "Simpatie", b: 1 }, { t: "Maschiene", b: 1 }, { t: "Katastrofe", b: 1 }] },
      { art: "paare", id: "fw2", tag: "Bedeutung", titel: "Was bedeutet das Fremdwort?", paare: [
        ["Bibliothek", "Bücherei"], ["Rhythmus", "gleichmäßiger Takt"], ["Apotheke", "Geschäft für Arzneien"], ["Katastrophe", "großes Unglück"], ["Sympathie", "Zuneigung"]] }
    ] },
    { kurz: "Komma", ober: "Miniübung", titel: "Kommasetzung", teile: [
      { art: "merke", html: "<ul><li><strong>Aufzählung:</strong> Komma zwischen den Gliedern, aber nicht vor „und“ / „oder“.</li><li><strong>Nebensatz:</strong> Komma vor dass, weil, wenn, als, obwohl, damit. Steht der <button class=\"term\" data-t=\"nebensatz\">Nebensatz</button> vorn, steht das Komma an seinem Ende.</li><li><strong>Eingeschobener Relativsatz:</strong> Komma vorn und hinten.</li><li>Komma vor „aber“, „sondern“, „doch“.</li></ul>" },
      { art: "sort", id: "ko", tag: "Sortieren", titel: "Fehlt ein Komma – oder ist alles richtig?", buckets: ["Komma fehlt", "alles richtig"], cols: 240, items: [
        { t: "Ich komme später weil ich noch übe.", b: 0 }, { t: "Er sagt dass er Hunger hat.", b: 0 }, { t: "Wir brauchen Mehl Eier und Zucker.", b: 0 }, { t: "Wenn es schneit bleiben wir hier.", b: 0 },
        { t: "Sie lacht, obwohl sie müde ist.", b: 1 }, { t: "Ich mag Kirschen, Pflaumen und Beeren.", b: 1 }, { t: "Das Rad, das dort steht, gehört mir.", b: 1 }] },
      { art: "mc", id: "ko2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig?", o: ["Obwohl es regnete, gingen wir hinaus, weil der Hund musste.", "Obwohl es regnete gingen wir hinaus, weil der Hund musste.", "Obwohl es regnete, gingen wir hinaus weil der Hund musste.", "Obwohl, es regnete gingen wir hinaus weil, der Hund musste."], a: 0, e: "Zwei Nebensätze (obwohl …, weil …) – jeder wird vom Hauptsatz abgetrennt." },
        { q: "Welcher Satz ist richtig?", o: ["Die Jacke, die im Flur hängt, ist nicht teuer, aber warm.", "Die Jacke die im Flur hängt, ist nicht teuer aber warm.", "Die Jacke, die im Flur hängt ist nicht teuer, aber warm.", "Die Jacke die im Flur hängt ist nicht teuer aber warm."], a: 0, e: "Der Relativsatz ist eingeschoben (zwei Kommas), und vor „aber“ steht ebenfalls ein Komma." }] }
    ] }
  ],
  weiter: { href: "index.html#rechtschreibung", titel: "Zurück zur Übersicht", text: "Mach den Fehler-Check in ein paar Tagen noch einmal – mit neuen Fragen. Dann siehst du, ob dein Training gewirkt hat." }
});
