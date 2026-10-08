/* Deutsch 8 · Rechtschreibung und Sprachtraining · Mein Fehlertraining
   (Fehler-Check in sechs Bereichen der Klasse 8, danach Miniübungen genau zu den eigenen Fehlerschwerpunkten,
   zum Schluss Strategien beim Überarbeiten eigener Texte; M8 zusätzlich: Verb + Verb, Partizip + Verb, englische Verben,
   Infinitivgruppen im Einschub, Satzzeichen beim Zitat)
   LehrplanPLUS D8 4.3 (eigene Fehlerschwerpunkte erkennen und mit Strategien und Regelwissen gezielt daran arbeiten),
   3.3 (Texte überarbeiten und auf Rechtschreibung und Zeichensetzung prüfen).
   Baustein „fehlercheck“: d7-fehler.js. Alle Beispielsätze sind eigens für GRUMI geschrieben; Zweifelsfälle mit zwei
   zulässigen Schreibungen wurden bewusst nicht aufgenommen. */
D7Kit.seite({
  id: "rs-fehler",
  titel: "Mein Fehlertraining",
  einleitung: "Niemand macht überall Fehler – die meisten Fehler passieren immer wieder an denselben Stellen. Finde heraus, wo deine liegen, und übe dann genau das.",
  zeit: "Check etwa 5 Minuten · je Miniübung etwa 5 Minuten",
  ziele: ["🎯 Ich finde heraus, bei welchem Rechtschreibthema ich unsicher bin.", "🧭 Ich übe gezielt an meinen Fehlerschwerpunkten.", "🔍 Ich überarbeite eigene Texte mit festen Strategien."],
  glossar: {
    signalwort: ["Signalwort", "Ein Wort, das anzeigt: Jetzt kommt ein Nomen – zum Beispiel das, beim, zum, etwas, nichts, viel, alles."],
    nominalisierung: ["Nominalisierung", "Ein Verb, Adjektiv oder anderes Wort wird zum Nomen gebraucht und deshalb großgeschrieben: das Lachen, etwas Neues."],
    bedeutungsprobe: ["Bedeutungsprobe", "Ergibt die Verbindung eine neue, übertragene Bedeutung, schreibst du zusammen: schwergefallen (= war schwierig)."],
    fremdwort: ["Fremdwort", "Ein Wort aus einer anderen Sprache, das oft seine besondere Schreibung behält, zum Beispiel -tion, -iv, -ell, -ieren."],
    infinitivgruppe: ["Infinitivgruppe", "Eine Wortgruppe mit „zu“ und Grundform des Verbs: um besser zu werden, ohne ein Wort zu sagen."],
    apposition: ["Apposition", "Eine nachgestellte Erläuterung zu einem Nomen: Herr Brandl, unser Hausmeister, hilft uns."],
    indirekte: ["indirekte Rede", "Wiedergabe dessen, was jemand gesagt hat, meist im Konjunktiv: Er sagt, er sei müde."]
  },
  stationen: [
    { kurz: "Fehler-Check", ober: "Herausfinden", titel: "Wo passieren deine Fehler?", teile: [
      { art: "fehlercheck", id: "check", tag: "Fehler-Check", proRunde: 2, bereiche: [
        { id: "nom", titel: "Nominalisierungen", station: 2, modul: { href: "Rechtschreibung/rs_01.html", titel: "Nominalisierungen" }, fragen: [
          { q: "Welche Schreibung ist richtig?", o: ["Beim lauten Lachen musste sie husten.", "Beim lauten lachen musste sie husten.", "Beim Lauten Lachen musste sie husten."], a: 0, e: "„Lachen“ ist nominalisiert (Signalwort „beim“). Das Adjektiv „lauten“ steht dazwischen und bleibt klein." },
          { q: "Welche Schreibung ist richtig?", o: ["Sie erzählte uns etwas Spannendes.", "Sie erzählte uns etwas spannendes.", "Sie erzählte uns Etwas spannendes."], a: 0, e: "Nach „etwas“ wird das Adjektiv zum Nomen: etwas Spannendes." },
          { q: "Welche Schreibung ist richtig?", o: ["Im Dunkeln hat er sich gefürchtet.", "Im dunkeln hat er sich gefürchtet.", "Im Dunkeln hat er sich Gefürchtet."], a: 0, e: "„im“ steht für „in dem“ – ein Signalwort. Also: im Dunkeln." },
          { q: "Welche Schreibung ist richtig?", o: ["Von allen läuft sie am schnellsten.", "Von allen läuft sie am Schnellsten.", "Von allen läuft sie Am schnellsten."], a: 0, e: "„am schnellsten“ antwortet auf „wie?“ – das ist ein Superlativ vor einem Verb und bleibt klein." },
          { q: "Welche Schreibung ist richtig?", o: ["Als Zweiter erreichte er das Ziel.", "Als zweiter erreichte er das Ziel.", "Als Zweiter erreichte er das ziel."], a: 0, e: "Ordnungszahlen, die als Nomen gebraucht werden, schreibt man groß: als Zweiter." }] },
        { id: "gz", titel: "Getrennt oder zusammen", station: 3, modul: { href: "Rechtschreibung/rs_02.html", titel: "Getrennt oder zusammen?" }, fragen: [
          { q: "Welche Schreibung ist richtig?", o: ["Mathe ist mir nie schwergefallen.", "Mathe ist mir nie schwer gefallen."], a: 0, e: "Die Verbindung hat die übertragene Bedeutung „war schwierig“ – dann schreibt man zusammen. Wörtlich („heftig stürzen“) wäre es getrennt." },
          { q: "Welche Schreibung ist richtig?", o: ["Er wurde beim Schwarzfahren erwischt.", "Er wurde beim Schwarz fahren erwischt.", "Er wurde beim schwarz Fahren erwischt."], a: 0, e: "schwarzfahren (ohne Fahrschein fahren) hat eine neue Bedeutung – zusammen. Nach „beim“ wird es zum Nomen: das Schwarzfahren." },
          { q: "Welche Schreibung ist richtig?", o: ["Ich möchte heute Klavier spielen.", "Ich möchte heute klavierspielen.", "Ich möchte heute Klavierspielen."], a: 0, e: "Nomen + Verb schreibt man meist getrennt: Klavier spielen, Rad fahren." },
          { q: "Welche Schreibung ist richtig?", o: ["Der Koffer war federleicht.", "Der Koffer war feder leicht.", "Der Koffer war Federleicht."], a: 0, e: "Nomen + Adjektiv ergeben ein neues Adjektiv – zusammen und klein: federleicht, blitzschnell." },
          { q: "Welche Schreibung ist richtig?", o: ["Wir treffen uns irgendwann.", "Wir treffen uns irgend wann.", "Wir treffen uns Irgendwann."], a: 0, e: "Verbindungen mit „irgend“ schreibt man zusammen: irgendwann, irgendwo, irgendein." }] },
        { id: "gk", titel: "Gleich klingende Wörter", station: 4, modul: { href: "Rechtschreibung/rs_03.html", titel: "Gleich klingende Wörter" }, fragen: [
          { q: "Ich glaube, ___ du recht hast.", o: ["dass", "das"], a: 0, e: "Ersatzprobe: „dieses“ oder „welches“ passt nicht – also dass." },
          { q: "Sie wohnt ___ drei Jahren hier.", o: ["seit", "seid"], a: 0, e: "„seit“ gibt einen Zeitpunkt oder eine Dauer an. „seid“ ist das Verb „sein“ (ihr seid)." },
          { q: "Beim Spielen riss eine ___ an der Gitarre.", o: ["Saite", "Seite"], a: 0, e: "Die Saite ist der gespannte Faden am Instrument, die Seite gehört zum Buch." },
          { q: "Etwas flog ihm ins Auge – er rieb sich das ___.", o: ["Lid", "Lied"], a: 0, e: "Das Lid gehört zum Auge, ein Lied singt man. Merkhilfe: Lid ohne e wie Auge ohne ie." },
          { q: "Welche Schreibung ist richtig?", o: ["Sie wollte ihm nicht widersprechen.", "Sie wollte ihm nicht wiedersprechen."], a: 0, e: "„wider“ heißt „gegen“: widersprechen, Widerstand. „wieder“ heißt „noch einmal“: wiederholen." }] },
        { id: "fw", titel: "Fremdwörter", station: 5, modul: { href: "Rechtschreibung/rs_04.html", titel: "Fremdwörter" }, fragen: [
          { q: "Welches Wort ist richtig geschrieben?", o: ["Information", "Informazion", "Informatsion"], a: 0, e: "Die Endung -tion wird auch dann so geschrieben, wenn man „tsion“ spricht." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["kreativ", "kreatief", "kreatif"], a: 0, e: "Adjektive auf -iv schreibt man mit v, obwohl man f hört: kreativ, aktiv." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["aktuell", "aktuel", "aktuäll"], a: 0, e: "Adjektive auf -ell haben zwei l: aktuell, originell, kriminell." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["reparieren", "reparihren", "repariren"], a: 0, e: "Verben auf -ieren: das lange i wird ie geschrieben – reparieren, diskutieren, trainieren." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["Vitamin", "Witamin", "Fitamin"], a: 0, e: "In manchen Fremdwörtern spricht man v wie w, schreibt es aber mit v: Vitamin, Vulkan, Virus." }] },
        { id: "ko", titel: "Kommasetzung", station: 6, modul: { href: "Rechtschreibung/rs_05.html", titel: "Kommasetzung" }, fragen: [
          { q: "Welcher Satz ist richtig?", o: ["Er spart, um sich ein Fahrrad zu kaufen.", "Er spart um sich ein Fahrrad zu kaufen.", "Er spart um, sich ein Fahrrad zu kaufen."], a: 0, e: "Eine Infinitivgruppe, die mit „um“ beginnt, wird immer mit Komma abgetrennt." },
          { q: "Welcher Satz ist richtig?", o: ["Sie ging, ohne ein Wort zu sagen.", "Sie ging ohne ein Wort zu sagen.", "Sie ging ohne, ein Wort zu sagen."], a: 0, e: "Auch vor „ohne … zu“ steht immer ein Komma." },
          { q: "Welcher Satz ist richtig?", o: ["Herr Brandl, unser Hausmeister, repariert die Tür.", "Herr Brandl unser Hausmeister, repariert die Tür.", "Herr Brandl, unser Hausmeister repariert die Tür."], a: 0, e: "Eine nachgestellte Erläuterung (Apposition) steht zwischen zwei Kommas." },
          { q: "Welcher Satz ist richtig?", o: ["Der Torwart erklärt, er habe den Ball nicht gesehen.", "Der Torwart erklärt er habe den Ball nicht gesehen.", "Der Torwart erklärt er, habe den Ball nicht gesehen."], a: 0, e: "Zwischen Redeverb und indirekter Rede steht ein Komma – auch ohne „dass“." },
          { q: "Welcher Satz ist richtig?", o: ["Wir merkten, dass das Tor, das wir suchten, verschlossen war.", "Wir merkten dass das Tor das wir suchten verschlossen war.", "Wir merkten, dass das Tor das wir suchten, verschlossen war."], a: 0, e: "Jeder Nebensatz wird abgetrennt, ein eingeschobener vorn und hinten." }] },
        { id: "sz", titel: "Weitere Satzzeichen", station: 7, modul: { href: "Rechtschreibung/rs_06.html", titel: "Weitere Satzzeichen" }, fragen: [
          { q: "Welche Schreibung ist richtig?", o: ["Ein- und Ausgang", "Ein und Ausgang", "Ein-und Ausgang"], a: 0, e: "Der Ergänzungsstrich steht für den ausgelassenen Wortteil „-gang“: Ein-(gang) und Ausgang." },
          { q: "Wofür stehen drei Punkte (…) in einem Satz?", o: ["für einen abgebrochenen Gedanken", "für eine Frage", "für das Ende einer Aufzählung"], a: 0, e: "Auslassungspunkte zeigen, dass etwas abbricht oder ausgelassen wird: „Das ist doch …“." },
          { q: "Welcher Satz ist richtig?", o: ["Die einen spielten Fußball; die anderen lagen in der Sonne.", "Die einen spielten Fußball: die anderen lagen in der Sonne.", "Die einen spielten Fußball; Die anderen lagen in der Sonne."], a: 0, e: "Das Semikolon verbindet eng zusammengehörende Hauptsätze – danach geht es klein weiter." },
          { q: "Welcher Satz ist richtig?", o: ["Sie öffnete die Tür – und erstarrte.", "Sie öffnete die Tür; und erstarrte.", "Sie öffnete die Tür: und erstarrte."], a: 0, e: "Der Gedankenstrich zeigt eine Pause vor etwas Überraschendem." },
          { q: "Welcher Satz ist richtig?", o: ["Für den Kuchen brauchen wir Folgendes: Mehl, Eier und Zucker.", "Für den Kuchen brauchen wir Folgendes; Mehl, Eier und Zucker.", "Für den Kuchen brauchen wir Folgendes, Mehl, Eier und Zucker."], a: 0, e: "Der Doppelpunkt kündigt eine Aufzählung an." }] }
      ] }
    ] },

    { kurz: "Nominalisierung", ober: "Miniübung", titel: "Nominalisierungen", teile: [
      { art: "merke", html: "<ul><li>Ein <button class=\"term\" data-t=\"signalwort\">Signalwort</button> zeigt eine <button class=\"term\" data-t=\"nominalisierung\">Nominalisierung</button> an: <strong>das</strong> Lachen, <strong>beim</strong> Laufen, <strong>etwas</strong> Neues, <strong>das</strong> Beste.</li><li>Steht ein Adjektiv dazwischen, bleibt es klein: beim <strong>lauten</strong> Lachen.</li><li>Superlative auf die Frage „wie?“ bleiben klein: am schnellsten.</li></ul>" },
      { art: "sort", id: "nom", tag: "Sortieren", titel: "Groß oder klein?", lead: "Der fehlende Anfangsbuchstabe steht in Klammern.", buckets: ["groß", "klein"], cols: 240, items: [
        { t: "beim _ernen (l)", b: 0 }, { t: "nichts _utes (g)", b: 0 }, { t: "das _este (b)", b: 0 }, { t: "im _unkeln (d)", b: 0 },
        { t: "Wir wollen _ernen. (l)", b: 1 }, { t: "ein _utes Buch (g)", b: 1 }, { t: "am _chnellsten (s)", b: 1 }, { t: "die _rei Kinder (d)", b: 1 }] },
      { art: "mc", id: "nom2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Beim schnellen Lesen übersieht man leicht etwas Wichtiges.", "Beim schnellen lesen übersieht man leicht etwas Wichtiges.", "Beim Schnellen Lesen übersieht man leicht etwas Wichtiges.", "Beim schnellen Lesen übersieht man leicht etwas wichtiges."], a: 0, e: "Zwei Nominalisierungen: „Lesen“ (nach „beim“) und „Wichtiges“ (nach „etwas“). Das Adjektiv „schnellen“ bleibt klein." }] },
      { art: "mc", id: "nom3", m7: true, tag: "Anwenden (M8)", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Beim Aufräumen fand er nichts Brauchbares, nur das Alte und Kaputte.", "Beim Aufräumen fand er nichts brauchbares, nur das Alte und Kaputte.", "Beim aufräumen fand er nichts Brauchbares, nur das alte und kaputte.", "Beim Aufräumen fand er nichts Brauchbares, nur das Alte und kaputte."], a: 0, e: "Alle Signalwörter prüfen: „beim“, „nichts“, „das“. Auch das zweite Adjektiv (Kaputte) gehört zur Nominalisierung." }] }
    ] },

    { kurz: "Getrennt", ober: "Miniübung", titel: "Getrennt oder zusammen?", teile: [
      { art: "merke", html: "<ul><li><strong>Nomen + Verb:</strong> meist getrennt – Rad fahren, Klavier spielen.</li><li><strong>Nomen + Adjektiv:</strong> zusammen und klein – federleicht, blitzschnell.</li><li><strong>irgend-</strong>: immer zusammen – irgendwo, irgendwann.</li><li><strong><button class=\"term\" data-t=\"bedeutungsprobe\">Bedeutungsprobe</button>:</strong> Neue, übertragene Bedeutung heißt zusammen – <em>schwergefallen</em> (= war schwierig), <em>schwarzfahren</em>.</li></ul>" },
      { art: "sort", id: "gz", tag: "Sortieren", titel: "Wie schreibt man die Verbindung?", buckets: ["getrennt", "zusammen"], cols: 240, items: [
        { t: "Eis + essen", b: 0 }, { t: "Rad + fahren", b: 0 }, { t: "Auto + waschen", b: 0 }, { t: "Fußball + spielen", b: 0 },
        { t: "blitz + schnell", b: 1 }, { t: "mit + bringen", b: 1 }, { t: "irgend + einer", b: 1 }, { t: "schwarz + fahren (ohne Fahrschein)", b: 1 }] },
      { art: "mc", id: "gz2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Am Samstag wollen wir Rad fahren und anschließend Eis essen.", "Am Samstag wollen wir radfahren und anschließend Eis essen.", "Am Samstag wollen wir Rad fahren und anschließend eisessen.", "Am Samstag wollen wir Radfahren und anschließend Eis essen."], a: 0, e: "Nomen + Verb bleiben getrennt, das Nomen bleibt groß." },
        { q: "In welchem Satz heißt „schwergefallen“: „war schwierig für mich“?", o: ["Die Aufgabe ist mir schwergefallen.", "Die Aufgabe ist mir schwer gefallen."], a: 0, e: "Übertragene Bedeutung: zusammen. Getrennt hieße es wörtlich, dass jemand heftig gestürzt ist." }] },
      { art: "mc", id: "gz3", m7: true, tag: "Anwenden (M8)", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Er will bald schwimmen lernen.", "Er will bald schwimmenlernen.", "Er will bald Schwimmen lernen."], a: 0, e: "Verb + Verb schreibt man getrennt: schwimmen lernen, laufen lernen." },
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Das Rad habe ich geschenkt bekommen.", "Das Rad habe ich geschenktbekommen.", "Das Rad habe ich Geschenkt bekommen."], a: 0, e: "Partizip + Verb schreibt man getrennt: geschenkt bekommen." }] }
    ] },

    { kurz: "Gleich klingend", ober: "Miniübung", titel: "Gleich klingende Wörter", teile: [
      { art: "merke", html: "<ul><li><strong>das</strong> (Ersatzprobe „dieses/welches“ passt) – <strong>dass</strong> (Konjunktion, passt nicht).</li><li><strong>seit</strong> = Zeit (seit Montag) – <strong>seid</strong> = Verb „sein“ (ihr seid).</li><li><strong>wieder</strong> = noch einmal (wiederholen) – <strong>wider</strong> = gegen (widersprechen).</li><li>Lid (am Auge) – Lied (zum Singen); Saite (Gitarre) – Seite (Buch); malen (Bild) – mahlen (Mehl).</li></ul>" },
      { art: "sort", id: "gk", tag: "Sortieren", titel: "seit oder seid?", buckets: ["seit", "seid"], cols: 240, items: [
        { t: "Sie wohnt ___ März hier.", b: 0 }, { t: "___ dem Umzug fährt er Bus.", b: 0 }, { t: "Es regnet ___ Stunden.", b: 0 },
        { t: "Ihr ___ herzlich eingeladen.", b: 1 }, { t: "___ bitte leise!", b: 1 }, { t: "Wo ___ ihr gestern gewesen?", b: 1 }] },
      { art: "paare", id: "gk2", tag: "Bedeutung", titel: "Welche Bedeutung gehört zum Wort?", paare: [
        ["Lid", "Hautfalte am Auge"], ["Lied", "Gesang mit Text"], ["Saite", "gespannter Faden am Instrument"], ["Wahl", "Abstimmung"], ["Leere", "Zustand, in dem nichts darin ist"]] },
      { art: "mc", id: "gk3", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Seit ihr hier seid, ist es lauter.", "Seid ihr hier seit, ist es lauter.", "Seit ihr hier seit, ist es lauter.", "Seid ihr hier seid, ist es lauter."], a: 0, e: "Erstes Wort: Zeitangabe („ab dem Zeitpunkt“) – seit. Zweites: Verb „sein“ (ihr seid)." },
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Im Kunstkurs malen wir, in der Mühle mahlen sie Korn.", "Im Kunstkurs mahlen wir, in der Mühle malen sie Korn.", "Im Kunstkurs malen wir, in der Mühle malen sie Korn.", "Im Kunstkurs mahlen wir, in der Mühle mahlen sie Korn."], a: 0, e: "malen = ein Bild machen; mahlen = Getreide fein zerkleinern (Mehl)." }] },
      { art: "mc", id: "gk4", m7: true, tag: "Anwenden (M8)", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Der Dichter beschrieb den Tod als Freund, doch die Rose war längst tot.", "Der Dichter beschrieb den tot als Freund, doch die Rose war längst tot.", "Der Dichter beschrieb den Tod als Freund, doch die Rose war längst Tod.", "Der Dichter beschrieb den Tod als Freund, doch die Rose war längst Tot."], a: 0, e: "„der Tod“ ist ein Nomen (Artikel davor). „tot“ ist ein Adjektiv (wie „lebendig“)." }] }
    ] },

    { kurz: "Fremdwörter", ober: "Miniübung", titel: "Fremdwörter", teile: [
      { art: "merke", html: "<ul><li><button class=\"term\" data-t=\"fremdwort\">Fremdwörter</button> haben oft feste Endungen: <strong>-tion</strong> (Information), <strong>-iv</strong> (kreativ), <strong>-ell</strong> (aktuell), <strong>-ieren</strong> (diskutieren).</li><li>v wird manchmal wie w gesprochen: Vitamin, Vulkan, Virus.</li><li>Englische Verben werden wie deutsche gebeugt: chatten – ich chatte – gechattet.</li><li>Unsicher? Nachschlagen ist eine Strategie, kein Zeichen von Schwäche.</li></ul>" },
      { art: "sort", id: "fw", tag: "Sortieren", titel: "Richtig oder falsch geschrieben?", buckets: ["richtig", "falsch"], cols: 200, items: [
        { t: "Information", b: 0 }, { t: "aktuell", b: 0 }, { t: "kreativ", b: 0 }, { t: "diskutieren", b: 0 }, { t: "Vulkan", b: 0 },
        { t: "Informazion", b: 1 }, { t: "aktuel", b: 1 }, { t: "kreatief", b: 1 }, { t: "diskutiren", b: 1 }, { t: "Wulkan", b: 1 }] },
      { art: "luecke", id: "fw2", tag: "Ergänzen", titel: "Welches Wort passt?", absaetze: [
        ["Ihre Idee für das Plakat war ", { g: "originell" }, "."],
        ["Wir müssen den Text noch ", { g: "korrigieren" }, "."],
        ["Die ", { g: "Präsentation" }, " dauert zehn Minuten."],
        ["Obst enthält viele ", { g: "Vitamine" }, "."]], extra: ["originel", "korrigiren", "Präsentazion"] },
      { art: "mc", id: "fw3", m7: true, tag: "Anwenden (M8)", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Gestern hat sie lange mit Freunden gechattet.", "Gestern hat sie lange mit Freunden gechatet.", "Gestern hat sie lange mit Freunden getschattet.", "Gestern hat sie lange mit Freunden chattet."], a: 0, e: "Englische Verben bekommen die deutschen Endungen: chatten – gechattet (wie gerettet)." }] }
    ] },

    { kurz: "Komma", ober: "Miniübung", titel: "Kommasetzung", teile: [
      { art: "merke", html: "<ul><li><button class=\"term\" data-t=\"infinitivgruppe\">Infinitivgruppe</button> mit <strong>um, ohne, statt, anstatt, außer, als</strong> oder mit Hinweiswort: Komma. (Ich freue mich <em>darauf</em>, dich zu sehen.)</li><li><button class=\"term\" data-t=\"apposition\">Apposition</button>: zwischen zwei Kommas – Frau Lang, unsere Schulleiterin, begrüßt uns.</li><li><button class=\"term\" data-t=\"indirekte\">Indirekte Rede</button>: Komma nach dem Redeverb – Er sagt, er sei müde.</li><li>Jeder Nebensatz wird abgetrennt; ein eingeschobener bekommt zwei Kommas.</li></ul>" },
      { art: "sort", id: "ko", tag: "Sortieren", titel: "Fehlt ein Komma – oder ist alles richtig?", buckets: ["Komma fehlt", "alles richtig"], cols: 240, items: [
        { t: "Sie übt jeden Tag um besser zu werden.", b: 0 }, { t: "Frau Lang unsere Nachbarin gießt die Blumen.", b: 0 }, { t: "Er sagt er sei krank.", b: 0 }, { t: "Ich esse gern Obst vor allem Äpfel.", b: 0 },
        { t: "Er verließ den Raum, ohne ein Wort zu sagen.", b: 1 }, { t: "Ich freue mich darauf, dich zu sehen.", b: 1 }, { t: "Sie sagte, sie sei müde.", b: 1 }, { t: "Wir fahren, wenn es nicht regnet, an den See.", b: 1 }] },
      { art: "mc", id: "ko2", tag: "Anwenden", fragen: [
        { q: "Welcher Satz ist richtig?", o: ["Statt zu lernen, spielte er Gitarre.", "Statt, zu lernen spielte er Gitarre.", "Statt zu lernen spielte er Gitarre.", "Statt zu lernen spielte, er Gitarre."], a: 0, e: "Die Infinitivgruppe mit „statt“ wird durch ein Komma vom Rest getrennt – hier steht sie vorn, das Komma an ihrem Ende." },
        { q: "Welcher Satz ist richtig?", o: ["Meine Cousine, die in Hof wohnt, sagt, sie komme am Freitag.", "Meine Cousine die in Hof wohnt, sagt sie komme am Freitag.", "Meine Cousine, die in Hof wohnt sagt, sie komme am Freitag.", "Meine Cousine, die in Hof wohnt, sagt sie komme am Freitag."], a: 0, e: "Der Relativsatz steht zwischen zwei Kommas, und vor der indirekten Rede steht ebenfalls eines." }] },
      { art: "mc", id: "ko3", m7: true, tag: "Anwenden (M8)", fragen: [
        { q: "Welcher Satz ist richtig?", o: ["Mia, die Klassensprecherin, erzählte, sie habe, um die Wahl zu gewinnen, viel geübt.", "Mia, die Klassensprecherin erzählte, sie habe um die Wahl zu gewinnen viel geübt.", "Mia die Klassensprecherin, erzählte sie habe, um die Wahl zu gewinnen, viel geübt.", "Mia, die Klassensprecherin, erzählte, sie habe um die Wahl zu gewinnen, viel geübt."], a: 0, e: "Drei Dinge treffen zusammen: die Apposition (zwei Kommas), die indirekte Rede (ein Komma) und die eingeschobene um-Gruppe (zwei Kommas)." }] }
    ] },

    { kurz: "Satzzeichen", ober: "Miniübung", titel: "Weitere Satzzeichen", teile: [
      { art: "merke", html: "<ul><li><strong>Ergänzungsstrich:</strong> ersetzt einen gleich bleibenden Wortteil – Ein- und Ausgang.</li><li><strong>Auslassungspunkte …</strong> zeigen Abbruch oder Auslassung.</li><li><strong>Semikolon ;</strong> verbindet zwei eng zusammengehörende Hauptsätze – danach klein.</li><li><strong>Gedankenstrich –</strong> steht vor einer Überraschung oder bei einem Einschub.</li><li><strong>Doppelpunkt :</strong> kündigt Aufzählung, Zusammenfassung oder wörtliche Rede an.</li></ul>" },
      { art: "sort", id: "sz", tag: "Sortieren", titel: "Welches Zeichen steht an der Stelle _ ?", buckets: ["Doppelpunkt", "Semikolon", "Gedankenstrich"], cols: 220, items: [
        { t: "Das Ergebnis _ Wir haben gewonnen.", b: 0 }, { t: "Zutaten _ Mehl, Eier, Zucker", b: 0 }, { t: "Merk dir Folgendes _ Pünktlichkeit zählt.", b: 0 },
        { t: "Der eine las _ der andere schlief.", b: 1 }, { t: "Die einen sangen _ die anderen tanzten.", b: 1 }, { t: "Manche liefen _ manche gingen.", b: 1 },
        { t: "Er öffnete den Brief _ und erstarrte.", b: 2 }, { t: "Plötzlich _ ein lauter Knall!", b: 2 }, { t: "Sie zögerte kurz _ und sprang.", b: 2 }] },
      { art: "tf", id: "sz2", tag: "Richtig oder falsch?", titel: "Stimmt das?", aussagen: [
        ["Der Ergänzungsstrich steht, wenn ein gleicher Wortteil nicht wiederholt wird.", true],
        ["Nach einem Doppelpunkt, dem ein ganzer Satz folgt, schreibt man groß weiter.", true],
        ["Auslassungspunkte stehen immer nach einem vollständig abgeschlossenen Gedanken.", false],
        ["Mit einem Gedankenstrich kann man eine Pause vor etwas Überraschendem anzeigen.", true]] },
      { art: "mc", id: "sz3", m7: true, tag: "Anwenden (M8)", fragen: [
        { q: "Welcher Satz mit wörtlicher Rede ist richtig?", o: ["Sie sagte: „Ich komme später.“", "Sie sagte „Ich komme später“.", "Sie sagte, „Ich komme später“."], a: 0, e: "Steht der Begleitsatz vor der wörtlichen Rede, folgt ein Doppelpunkt." },
        { q: "Welcher Satz mit wörtlicher Rede ist richtig?", o: ["„Kommst du später?“, fragte er.", "„Kommst du später“?, fragte er.", "„Kommst du später?“ fragte er.", "„Kommst du später“, fragte er."], a: 0, e: "Nach der Frage bleibt das Fragezeichen im Anführungszeichen, danach folgt trotzdem das Komma." }] }
    ] },

    { kurz: "Überarbeiten", ober: "Strategien", titel: "Eigene Texte überarbeiten", teile: [
      { art: "merke", kopf: "So überarbeitest du deinen Text", html: "<ol><li><strong>Ein Durchgang – eine Fehlerart.</strong> Erst nur Kommas, dann nur Groß und Klein, dann nur gleich klingende Wörter.</li><li><strong>Laut oder leise lesen, Satz für Satz</strong> – am besten von hinten nach vorn, dann siehst du die Wörter und nicht den Inhalt.</li><li><strong>Deine Schwerpunkte zuerst:</strong> Schau in den Trainingsplan oben und prüfe zuerst dort.</li><li><strong>Unsicher? Nachschlagen</strong> im Wörterbuch oder in einer Fehlerliste, die du selbst führst.</li></ol>" },
      { art: "markieren", id: "ue", tag: "Fehler finden", titel: "Tippe die vier Wörter an, die falsch geschrieben sind.", satz: "Ich habe gehört, [[das]] die Bibliothek [[seid]] Montag geschlossen ist. Auch die [[Apoteke]] hat deshalb [[Abends]] zu.", finde: "die vier Fehler", e: "Richtig wäre: dass (Konjunktion) · seit (Zeit) · Apotheke (th, Fremdwort) · abends (mit -s: klein)." },
      { art: "offen", id: "ue2", tag: "Selbst formulieren", fragen: [
        { q: "Nenne zwei Strategien, mit denen du einen eigenen Text auf Rechtschreibfehler prüfst.", m: "Ich lese den Text laut Satz für Satz, prüfe in jedem Durchgang nur eine Fehlerart und schlage unsichere Wörter im Wörterbuch nach.", k: ["laut|satz für satz|rückwärts|hinten", "fehlerart|durchgang|schwerpunkt", "wörterbuch|nachschlag|fehlerliste"], min: 2 }],
        tipp: "Denke an: Wie liest du? Was prüfst du in einem Durchgang? Was tust du, wenn du unsicher bist?" },
      { art: "tf", id: "kurz", tag: "Kurz sichern", titel: "Richtig oder falsch?", aussagen: [
        ["Nach dem Signalwort „beim“ schreibt man das Verb groß: beim Laufen.", true],
        ["Alle Verbindungen aus Nomen und Verb schreibt man zusammen.", false],
        ["„seit“ und „seid“ schreibt man gleich, weil man sie gleich spricht.", false],
        ["Vor „ohne … zu“ steht immer ein Komma.", true],
        ["Ein Semikolon kann zwei Hauptsätze verbinden, die inhaltlich eng zusammenpassen.", true],
        ["Beim Überarbeiten prüft man am besten alle Fehlerarten auf einmal.", false]] }
    ] }
  ],
  weiter: { titel: "Rechtschreib-Duelle", text: "Mach den Fehler-Check in ein paar Tagen noch einmal – mit neuen Fragen. Dann siehst du, ob dein Training gewirkt hat. Danach wartet ein Duell." }
});
