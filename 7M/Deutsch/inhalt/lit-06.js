/* Deutsch 7 · Literatur und Medien · Modul 6: Film und Medien vergleichen
   (Einstellungsgrößen: Totale, Halbnah, Nahaufnahme, Detail; Kameraperspektive: Normalsicht, Frosch- und
   Vogelperspektive; Ton: Geräusch, Musik, Stille, Stimme aus dem Off; Schnitt in einem Satz; eine Buchstelle und ihr
   Drehbuch vergleichen; Buch, Hörspiel und Film; erfunden oder wirklich geschehen; Schreibtrainer: drei Einstellungen planen)
   LehrplanPLUS D7 2.2 und 2.4 (Medienangebote untersuchen, filmische Mittel in Grundzügen und ihre Wirkung beschreiben,
   Buch, Hörspiel und Film vergleichen, Wirklichkeit und Erfundenes unterscheiden).
   Texte (texte/literatur/raum-207.js): Erzähltext „Raum 207“ (15 Zeilen) und Drehbuchauszug dazu (22 Zeilen), eine
   Fassung für R7 und M7. Ohne echte Filme und ohne Bilder – alles ist in Worten beschrieben und erfunden. */
D7Kit.seite({
  id: "lit-06",
  titel: "Film und Medien vergleichen",
  einleitung: "Ein Buch erzählt mit Wörtern. Ein Film erzählt mit Bildern und Tönen – und die Kamera entscheidet, was du siehst. Heute lernst du die wichtigsten Mittel kennen und untersuchst, wie aus einer Buchstelle eine Filmszene wird. Am Ende planst du selbst drei Einstellungen.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎥 Ich unterscheide vier Einstellungsgrößen und drei Kameraperspektiven.", "🔊 Ich beschreibe, wie Geräusche, Musik und Stille wirken.", "📚 Ich vergleiche, wie Buch, Hörspiel und Film erzählen.", "❓ Ich unterscheide, was erfunden ist und was wirklich geschehen ist."],
  quiz: { profi: "Film-Profi" },
  glossar: {
    einstellung: ["Einstellung", "Ein Stück Film ohne Unterbrechung – von dem Moment, in dem die Kamera läuft, bis zum nächsten Schnitt."],
    groesse: ["Einstellungsgröße", "Sie gibt an, wie viel im Bild zu sehen ist: der ganze Ort, eine Person oder nur eine Kleinigkeit."],
    totale: ["Totale", "Man sieht den ganzen Ort, Menschen sind klein. Die Totale zeigt: Wo sind wir?"],
    halbnah: ["Halbnah", "Man sieht eine Person etwa von der Hüfte aufwärts – und was sie gerade tut."],
    nah: ["Nahaufnahme", "Kopf und Schultern füllen das Bild. Man erkennt die Gefühle im Gesicht."],
    detail: ["Detail", "Ein kleiner Ausschnitt füllt das ganze Bild, zum Beispiel eine Hand oder ein Zettel. Das Detail zeigt: Das ist wichtig."],
    perspektive: ["Kameraperspektive", "Der Blickwinkel der Kamera: auf Augenhöhe, von unten oder von oben."],
    normal: ["Normalsicht", "Die Kamera ist auf Augenhöhe. Das wirkt natürlich – so, wie wir im Alltag sehen."],
    frosch: ["Froschperspektive", "Die Kamera schaut von unten nach oben. Was sie zeigt, wirkt groß, mächtig oder bedrohlich."],
    vogel: ["Vogelperspektive", "Die Kamera schaut von oben herab. Man hat den Überblick, und Figuren wirken klein oder verloren."],
    off: ["Stimme aus dem Off", "Man hört eine Stimme, sieht aber niemanden sprechen – zum Beispiel einen Erzähler oder die Gedanken einer Figur."],
    schnitt: ["Schnitt", "Der Wechsel von einer Einstellung zur nächsten."],
    drehbuch: ["Drehbuch", "Der Plan für einen Film: Darin steht Szene für Szene, was man sieht und hört. In unserem Auszug sind auch schon die Einstellungen notiert."],
    spielfilm: ["Spielfilm", "Ein Film mit einer erfundenen Handlung. Schauspielerinnen und Schauspieler spielen die Rollen."],
    doku: ["Dokumentarfilm", "Ein Film, der zeigt, was es wirklich gibt oder was wirklich geschehen ist – ohne erfundene Handlung."]
  },
  stationen: [
    { kurz: "Einstellungen", ober: "Ausprobieren", titel: "Wie nah ist die Kamera?", teile: [
      { art: "text", html: "<p class=\"lead\">In einem Buch steht: „Romy stand vor der neuen Schule.“ Ein Film kann das nicht einfach hinschreiben – er muss es zeigen. Aber wie?</p><p>Zeigt die Kamera den ganzen Schulhof? Oder nur Romys Gesicht? Wie viel im Bild zu sehen ist, nennt man <button class=\"term\" data-t=\"groesse\">Einstellungsgröße</button>. Vier davon solltest du kennen: <button class=\"term\" data-t=\"totale\">Totale</button>, <button class=\"term\" data-t=\"halbnah\">Halbnah</button>, <button class=\"term\" data-t=\"nah\">Nahaufnahme</button> und <button class=\"term\" data-t=\"detail\">Detail</button>.</p>" },
      { art: "karten", karten: [
        { ic: "🏫", titel: "Totale", text: "Der ganze Ort ist zu sehen, Menschen sind klein. Du erfährst: Wo sind wir?" },
        { ic: "👥", titel: "Halbnah", text: "Eine Person etwa von der Hüfte aufwärts. Du siehst, was sie tut und mit wem sie spricht." },
        { ic: "😊", titel: "Nahaufnahme", text: "Kopf und Schultern füllen das Bild. Du erkennst, was die Figur fühlt." },
        { ic: "🔍", titel: "Detail", text: "Ein kleiner Ausschnitt ganz groß: eine Hand, ein Auge, ein Zettel. Du merkst: Das ist wichtig!" }] },
      { art: "paare", id: "gross", tag: "Zuordnen", titel: "Welche Einstellung zeigt was?", paare: [
        ["Totale", "der ganze Schulhof mit vielen Kindern"],
        ["Halbnah", "Romy von der Hüfte aufwärts im Türrahmen"],
        ["Nahaufnahme", "Romys Gesicht: Sie schluckt."],
        ["Detail", "nur die Finger mit dem zerknitterten Zettel"]] },
      { art: "mc", id: "wozu", tag: "Wozu dient die Einstellung?", fragen: [
        { q: "Viele Filme beginnen mit einer Totale. Warum?", o: ["Damit man zuerst erfährt, wo die Handlung spielt.", "Damit man die Gesichter genau erkennt.", "Weil eine Totale am wenigsten Arbeit macht.", "Damit ein wichtiger Gegenstand groß zu sehen ist."], a: 0, e: "Die Totale gibt den Überblick: ein Schulhof, eine Stadt, ein Strand. Erst danach geht die Kamera näher heran." },
        { q: "Die Zuschauer sollen in Romys Gesicht lesen, wie sie sich fühlt. Welche Einstellung passt am besten?", o: ["Nahaufnahme", "Totale", "Halbnah"], a: 0, e: "In der Nahaufnahme füllen Kopf und Schultern das Bild. Jede Regung im Gesicht ist zu sehen." },
        { q: "Wozu dient eine Detailaufnahme?", o: ["Sie lenkt den Blick auf etwas Wichtiges, das man sonst übersehen würde.", "Sie zeigt, in welcher Stadt die Handlung spielt.", "Sie zeigt zwei Figuren im Gespräch.", "Sie zeigt eine Landschaft von oben."], a: 0, e: "Ein Schlüssel, ein Zettel, eine zitternde Hand: Was als Detail gezeigt wird, spielt für die Geschichte eine Rolle." }] }
    ] },
    { kurz: "Perspektive", ober: "Verstehen", titel: "Von wo schaut die Kamera?", teile: [
      { art: "text", html: "<p>Die Kamera kann nicht nur nah oder weit weg sein. Sie kann auch aus verschiedenen Richtungen schauen: auf Augenhöhe, von unten oder von oben. Das nennt man <button class=\"term\" data-t=\"perspektive\">Kameraperspektive</button> – und jede wirkt anders.</p>" },
      { art: "merke", kopf: "MERKE: DREI KAMERAPERSPEKTIVEN", html: "<ul><li><button class=\"term\" data-t=\"normal\">Normalsicht</button>: Die Kamera ist auf Augenhöhe. Das wirkt natürlich, wie im Alltag.</li><li><button class=\"term\" data-t=\"frosch\">Froschperspektive</button>: Die Kamera schaut von unten nach oben. Eine Figur oder ein Gebäude wirkt groß, mächtig oder bedrohlich.</li><li><button class=\"term\" data-t=\"vogel\">Vogelperspektive</button>: Die Kamera schaut von oben herab. Man hat den Überblick – und Figuren wirken klein oder verloren.</li></ul>" },
      { art: "sort", id: "persp", tag: "Sortieren", titel: "Welche Perspektive ist das?", buckets: ["Normalsicht", "Froschperspektive", "Vogelperspektive"], cols: 180, items: [
        { t: "Die Kamera ist auf Augenhöhe.", b: 0 }, { t: "wirkt natürlich, wie im Alltag", b: 0 },
        { t: "Die Kamera schaut von unten nach oben.", b: 1 }, { t: "Eine Figur wirkt groß und mächtig.", b: 1 },
        { t: "Die Kamera schaut von oben herab.", b: 2 }, { t: "Eine Figur wirkt klein und verloren.", b: 2 }, { t: "Man überblickt den ganzen Platz.", b: 2 }] },
      { art: "mc", id: "pwirk", tag: "Wirkung", fragen: [
        { q: "Ein strenger Schiedsrichter soll im Film besonders einschüchternd wirken. Welche Perspektive wählst du?", o: ["Froschperspektive", "Vogelperspektive", "Normalsicht"], a: 0, e: "Von unten gefilmt wirkt er riesig – man fühlt sich klein vor ihm." },
        { q: "Eine Läuferin steht ganz allein auf einem riesigen Sportplatz. Die Kamera zeigt sie von weit oben. Was bewirkt das?", o: ["Sie wirkt klein und allein.", "Sie wirkt stark und gefährlich.", "Man erkennt genau, was sie fühlt.", "Man hat das Gefühl, direkt neben ihr zu stehen."], a: 0, e: "Aus der Vogelperspektive schrumpft die Figur. Der große leere Platz um sie herum verstärkt das noch." }] }
    ] },
    { kurz: "Ton", ober: "Verstehen", titel: "Was hörst du?", teile: [
      { art: "text", html: "<p class=\"lead\">Probier es bei Gelegenheit aus: Schalte bei einer spannenden Filmszene den Ton ab. Plötzlich ist sie nur noch halb so spannend.</p><p>Der Ton erzählt mit. Neben dem, was die Figuren sagen, gibt es vier Mittel:</p>" },
      { art: "merke", kopf: "MERKE: DER TON IM FILM", html: "<ul><li><strong>Geräusche</strong> machen das Bild echt: Schritte, eine Tür, Regen.</li><li><strong>Musik</strong> erzeugt Stimmung: spannend, traurig oder fröhlich.</li><li><strong>Stille</strong> lässt aufhorchen: Wenn plötzlich nichts mehr zu hören ist, wartet man gespannt.</li><li>Eine <button class=\"term\" data-t=\"off\">Stimme aus dem Off</button> hört man, ohne dass im Bild jemand spricht – zum Beispiel die Gedanken einer Figur.</li></ul>" },
      { art: "paare", id: "ton", tag: "Zuordnen", titel: "Welcher Ton ist das?", paare: [
        ["Geräusch", "Regen prasselt gegen die Scheibe."],
        ["Musik", "Eine Gitarre spielt eine fröhliche Melodie."],
        ["Stille", "Alle Gespräche brechen ab, nichts ist mehr zu hören."],
        ["Stimme aus dem Off", "Man hört die Gedanken einer Figur, ihr Mund bleibt zu."]] },
      { art: "mc", id: "tonw", tag: "Ton einsetzen", fragen: [
        { q: "In einem Buch steht: „Hoffentlich merkt es keiner, dachte er.“ Wie kann ein Film diesen Gedanken hörbar machen?", o: ["mit einer Stimme aus dem Off", "mit einer Totale", "mit einem lauten Geräusch", "mit Stille"], a: 0, e: "Der Schauspieler bewegt die Lippen nicht, aber man hört seine Stimme. So werden Gedanken hörbar." }] },
      { art: "text", html: "<p>Ein Film besteht aus vielen einzelnen <button class=\"term\" data-t=\"einstellung\">Einstellungen</button>. Der Wechsel von einer zur nächsten heißt <button class=\"term\" data-t=\"schnitt\">Schnitt</button>. Viele schnelle Schnitte wirken hektisch und spannend, wenige Schnitte wirken ruhig.</p>" },
      { art: "mc", id: "schn", tag: "Schnitt", fragen: [
        { q: "Eine Verfolgungsjagd soll besonders rasant wirken. Wie wird sie meistens geschnitten?", o: ["mit vielen kurzen Einstellungen und schnellen Schnitten", "mit einer einzigen langen Einstellung aus der Ferne", "mit langen Pausen zwischen den Bildern", "mit möglichst wenigen Schnitten"], a: 0, e: "Je schneller die Bilder wechseln, desto unruhiger und spannender wirkt die Szene." }] },
      { art: "mc", id: "stille", m7: true, tag: "Wirkung erklären", fragen: [
        { q: "Zwei Freunde albern herum, dazu läuft fröhliche Musik. Plötzlich bricht die Musik ab, und es ist ganz still. Was erwarten die Zuschauer jetzt?", o: ["Gleich geschieht etwas Wichtiges oder Unangenehmes.", "Der Film ist zu Ende.", "Die beiden Freunde sind eingeschlafen.", "Die Szene wird jetzt noch lustiger."], a: 0, e: "Plötzliche Stille ist ein Signal: Achtung, jetzt ändert sich etwas. Die Zuschauer halten den Atem an." }] }
    ] },
    { kurz: "Szene", ober: "Selbst antworten", titel: "Eine Szene – zweimal erzählt", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt wird aus einer Buchstelle ein Film. Lies zuerst, wie die Stelle im Buch steht.</p>" },
      { art: "lesetext", tag: "Text A", lesetext: "lit-raum207-buch" },
      { art: "text", html: "<p>Und so plant das Filmteam dieselbe Stelle. Im <button class=\"term\" data-t=\"drehbuch\">Drehbuch</button> steht für jede Einstellung, was man sieht und hört. Steht keine Perspektive dabei, filmt die Kamera in Normalsicht.</p>" },
      { art: "lesetext", tag: "Text B", lesetext: "lit-raum207-film" },
      { art: "mc", id: "vergl", tag: "Vergleichen", fragen: [
        { q: "Im Buch kommt Romy das Gebäude „riesig“ vor (Text A, Z. 1–2). Wie zeigt das der Film?", o: ["Die Kamera filmt das Schulhaus von unten.", "Romy sagt laut: „Das ist aber riesig!“", "Ein Erzähler erklärt, wie groß die Schule ist.", "Die Kamera zeigt Romys Hand."], a: 0, e: "Froschperspektive (Text B, Z. 5–6): Das Schulhaus „ragt hoch in den Himmel“. Der Film zeigt, was das Buch mit einem Wort sagt." },
        { q: "Im Buch denkt Romy: „Wie schwer kann das sein?“ Woher wissen die Zuschauer im Film, was sie denkt?", o: ["Man hört ihre Stimme aus dem Off.", "Sie sagt den Satz zu einem anderen Kind.", "Der Satz steht auf dem Zettel.", "Das erfährt man im Film gar nicht."], a: 0, e: "Text B, Z. 9–10: Man sieht ihr Gesicht in der Nahaufnahme und hört dazu ihre Gedanken." },
        { q: "Im Buch „verstummten alle Gespräche“ (Text A, Z. 10–11). Mit welchem Mittel macht der Film diesen Moment spürbar?", o: ["Die Musik bricht ab, es ist still.", "Die Schulglocke läutet besonders laut.", "Die Kamera zeigt den Zettel als Detail.", "Eine Stimme aus dem Off zählt die Kinder."], a: 0, e: "Text B, Z. 14–15: Eben lief noch Musik, jetzt ist nichts mehr zu hören. Die Stille ist unangenehm – genau so fühlt sich der Moment für Romy an." }] },
      { art: "offen", id: "wahl", nur: "R", tag: "Deine Entscheidung", fragen: [
        { q: "Stell dir vor, die Szene geht weiter: Romy setzt sich auf den freien Stuhl neben den Jungen. Welche Einstellungsgröße würdest du dafür wählen – und warum?", m: "Ich würde eine Nahaufnahme von Romys Gesicht wählen, weil man dann sieht, wie erleichtert sie ist.", k: ["totale|halbnah|nahaufnahme|detail", "weil|damit|denn|dann sieht|so sieht|um zu zeigen"] }], tipp: "Mehrere Antworten sind möglich. Wichtig ist deine Begründung: Was sollen die Zuschauer in diesem Moment sehen?",
        hilfen: ["So kannst du beginnen: Ich würde … wählen, weil …", "Überlege: Sollen die Zuschauer Romys Gesicht sehen (Nahaufnahme), beide Kinder am Tisch (Halbnah) oder die ganze Klasse (Totale)?"] },
      { art: "offen", id: "wahl", nur: "M", tag: "Deine Entscheidung", fragen: [
        { q: "Stell dir vor, die Szene geht weiter: Romy setzt sich auf den freien Stuhl neben den Jungen. Welche Einstellungsgröße würdest du dafür wählen – und warum?", m: "Ich würde eine Nahaufnahme von Romys Gesicht wählen, weil man dann sieht, wie erleichtert sie ist.", k: ["totale|halbnah|nahaufnahme|detail", "weil|damit|denn|dann sieht|so sieht|um zu zeigen"] }], tipp: "Mehrere Antworten sind möglich. Wichtig ist deine Begründung: Was sollen die Zuschauer in diesem Moment sehen?" },
      { art: "offen", id: "vogel", m7: true, tag: "Wirkung erklären", fragen: [
        { q: "In der ersten Einstellung wird Romy von oben gefilmt (Text B, Z. 1–4). Erkläre die Wirkung: Was sollen die Zuschauer über Romy verstehen?", m: "Von oben wirkt Romy klein und verloren zwischen den vielen Kindern. Die Zuschauer verstehen, dass sie sich allein und unsicher fühlt.", k: ["klein|verloren|winzig|schwach|unwichtig|geht unter", "allein|einsam|unsicher|fremd|angst|niemanden|hilflos|gehört nicht dazu"] }], tipp: "Denke an die Vogelperspektive: Wie wirkt eine Figur, auf die man von weit oben herabschaut? Und wie fühlt sich Romy an diesem Morgen?" },
      { art: "schreiben", id: "plan", tag: "Schreibtrainer", titel: "Dein Drehplan: drei Einstellungen", min: 40,
        auftrag: "<p><strong>Die Szene:</strong> Cem kommt aus der Schule nach Hause. Auf dem Küchentisch liegt ein Brief, auf dem sein Name steht. Er zögert. Dann reißt er den Umschlag auf, liest – und strahlt.</p><p>Plane für diese Szene <strong>drei Einstellungen</strong>. Schreibe zu jeder: <strong>Was sieht man? Welche Einstellungsgröße? Welcher Ton?</strong></p>",
        starter: ["Einstellung 1 (Halbnah): Man sieht, wie …", "Ton: Man hört …", "Einstellung 2 (Detail): …", "Einstellung 3 (Nahaufnahme): …"],
        kriterien: ["Es sind drei Einstellungen geplant.", "Zu jeder Einstellung steht, was man sieht.", "Jede Einstellung hat eine Einstellungsgröße (Totale, Halbnah, Nahaufnahme oder Detail).", "Zu jeder Einstellung ist ein Ton angegeben (Geräusch, Musik, Stille oder Stimme aus dem Off).", "Die Einstellungen passen zu dem, was die Zuschauer gerade sehen und fühlen sollen."] }
    ] },
    { kurz: "Medien", ober: "Vergleichen", titel: "Buch, Hörspiel, Film – und was ist echt?", teile: [
      { art: "text", html: "<p>Dieselbe Geschichte lässt sich als Buch, als Hörspiel und als Film erzählen. Jedes Medium hat seine Stärken – keines ist einfach „besser“.</p>" },
      { art: "sort", id: "medien", tag: "Sortieren", titel: "Was kann welches Medium besonders gut?", buckets: ["Buch", "Hörspiel", "Film"], cols: 180, items: [
        { t: "Du liest in deinem eigenen Tempo und kannst zurückblättern.", b: 0 }, { t: "Gedanken und Gefühle stehen ausführlich in Worten da.", b: 0 },
        { t: "Es gibt kein Bild: Stimmen und Geräusche lassen alles im Kopf entstehen.", b: 1 }, { t: "Du kannst mit geschlossenen Augen folgen.", b: 1 },
        { t: "Die Kamera zeigt dir, wie Figuren und Orte aussehen.", b: 2 }, { t: "Einstellungen und Perspektiven lenken deinen Blick.", b: 2 }] },
      { art: "tf", id: "mtf", tag: "Stimmt das?", aussagen: [
        ["Ein Film kann Gedanken zeigen – zum Beispiel durch ein Gesicht in der Nahaufnahme oder eine Stimme aus dem Off.", true],
        ["Im Hörspiel bestimmt die Einstellungsgröße, wie nah man einer Figur ist.", false],
        ["Beim Lesen stellt sich jeder die Figuren ein wenig anders vor.", true],
        ["Wird ein Buch verfilmt, kommt jeder Satz genau so im Film vor.", false],
        ["Geräusche und Musik gibt es im Hörspiel und im Film.", true]] },
      { art: "text", html: "<p><strong>Echt oder erfunden?</strong> Nicht alles, was über einen Bildschirm läuft, ist wirklich geschehen. Ein <button class=\"term\" data-t=\"spielfilm\">Spielfilm</button> erzählt eine erfundene Geschichte – auch wenn alles täuschend echt aussieht. Ein <button class=\"term\" data-t=\"doku\">Dokumentarfilm</button> oder eine Nachrichtensendung zeigt dagegen, was es wirklich gibt oder was wirklich geschehen ist.</p>" },
      { art: "sort", id: "echt", tag: "Echt oder erfunden?", titel: "Erfunden – oder wirklich geschehen?", buckets: ["erfundene Geschichte", "zeigt, was wirklich geschieht"], cols: 240, items: [
        { t: "Spielfilm über ein Mädchen an einer neuen Schule", b: 0 }, { t: "Hörspiel über einen sprechenden Kater", b: 0 }, { t: "Zeichentrickserie mit Weltraumpiraten", b: 0 }, { t: "Jugendroman über ein altes Funkgerät", b: 0 },
        { t: "Nachrichtensendung am Abend", b: 1 }, { t: "Dokumentarfilm über Zugvögel", b: 1 }, { t: "Fußballspiel in der Live-Übertragung", b: 1 }, { t: "Interview mit einer Bürgermeisterin", b: 1 }] },
      { art: "mc", id: "wahr", m7: true, tag: "Genau hingeschaut", fragen: [
        { q: "Ein Spielfilm beginnt mit dem Satz „Nach einer wahren Begebenheit“. Was bedeutet das?", o: ["Der Kern ist wirklich geschehen, aber vieles wurde für den Film dazuerfunden und von Schauspielern gespielt.", "Alles ist genau so geschehen, wie man es im Film sieht.", "Der Film ist eine Nachrichtensendung.", "Die Geschichte ist vollständig erfunden."], a: 0, e: "Gespräche, einzelne Szenen und manchmal ganze Figuren sind ausgedacht. Auch ein solcher Film bleibt ein Spielfilm – er beweist nicht, wie es wirklich war." }] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Die ", { g: "Totale" }, " zeigt den ganzen Ort, die ", { g: "Nahaufnahme" }, " ein Gesicht mit seinen Gefühlen."],
        ["Aus der ", { g: "Froschperspektive" }, " wirkt eine Figur groß und mächtig, aus der ", { g: "Vogelperspektive" }, " klein und verloren."],
        ["Hört man eine Figur, ohne dass sie im Bild spricht, ist das eine Stimme aus dem ", { g: "Off" }, "."],
        ["Der Wechsel von einer Einstellung zur nächsten heißt ", { g: "Schnitt" }, "."]], extra: ["Normalsicht", "Stille"] }
    ] }
  ],
  weiter: { href: "index.html#literatur", titel: "Zurück zur Übersicht", text: "Du hast alle sechs Module zu Literatur und Medien geschafft. Wenn deine Lehrkraft die Probe zu diesem Bereich freischaltet, findest du sie in der Übersicht." }
});
