/* Deutsch 8 · Schreiben und Aufsätze · Modul 5: Zitate und indirekte Rede einbauen
   (wörtliche Rede: Redeeinleitung vorn, hinten, eingeschoben – Doppelpunkt, Komma, Anführungszeichen; indirekte Rede im eigenen
   Text: Komma, Wechsel der Pronomen, Konjunktiv I, Ersatz durch Konjunktiv II oder würde-Form; entscheiden, was wörtlich und was
   indirekt wiedergegeben wird; M8: Teilzitat in den eigenen Satz einbauen, Auslassung […], Satzzeichen am Zitatende; zum Schluss
   ein kurzer Bericht über das Interview im Schreibtrainer – zweimal wörtlich, zweimal indirekt)
   LehrplanPLUS D8 3.1 (Zitate und indirekte Rede formgerecht in eigene Texte integrieren – R8 unter Anleitung, M8 weitgehend
   selbstständig), 4.2 (Konjunktiv I und II, indirekte Rede), 4.3 (Komma bei indirekter Rede; M8: Zitate durch Zeichensetzung
   kennzeichnen, Auslassungspunkte).
   Abgrenzung: Zeilenangabe, „vgl.“ und der Dreischritt Aussage – Beleg – Erklärung stehen in les-02 (Belegen beim Lesen); die
   Formen des Konjunktivs üben die Grammatikseiten gr_02 und gr_03. Hier werden sie im eigenen Text angewendet.
   Texte: „Ein Teig lässt sich nicht hetzen“ (texte/schreiben/interview-baeckerei-r.js und -m.js) – erfundenes Interview,
   R8 53 Zeilen · M8 74 Zeilen. Alle Zeilenangaben unten nach zeig-text.js. Die Übungssätze mit Yusuf, Leonie und Ardit stehen
   nicht im Interview – so bleibt für den Bericht am Schluss genug Eigenes zu tun. */
D7Kit.seite({
  id: "schr-05",
  titel: "Zitate und indirekte Rede einbauen",
  einleitung: "Wer über ein Gespräch berichtet, lässt andere zu Wort kommen – und muss zeigen, was von wem stammt. Heute baust du fremde Aussagen in deinen eigenen Text ein: wörtlich mit Anführungszeichen und indirekt mit dem Konjunktiv. Dein Material ist ein Interview aus einer Backstube.",
  zeit: "etwa 45 Minuten",
  ziele: ["💬 Ich setze bei der wörtlichen Rede alle Zeichen richtig.", "🔁 Ich gebe Aussagen in der indirekten Rede wieder – mit Konjunktiv I und passenden Pronomen.", "🎯 Ich entscheide, was ich wörtlich und was ich indirekt wiedergebe.", "✍️ Ich schreibe einen Bericht, in dem beide Formen vorkommen."],
  haupttext: { R: "schr-interview-r", M: "schr-interview-m" },
  quiz: { profi: "Rede-Profi" },
  glossar: {
    woertlich: ["wörtliche Rede", "Du gibst Wort für Wort wieder, was jemand gesagt hat. Sie steht in Anführungszeichen."],
    redeeinleitung: ["Redeeinleitung", "Der Begleitsatz zur Rede. Er sagt, wer spricht und wie: Sie betont: … / …, fragt er."],
    redeverb: ["Redeverb", "Ein Verb des Sagens in der Redeeinleitung: sagen, erklären, betonen, fragen, raten, zugeben."],
    indirekt: ["indirekte Rede", "Du berichtest, was jemand gesagt hat – ohne Anführungszeichen, mit angepassten Pronomen und mit dem Konjunktiv."],
    konj1: ["Konjunktiv I", "Die Verbform der indirekten Rede: er habe, sie sei, er komme. Sie zeigt: Das hat jemand anderes gesagt."],
    ersatz: ["Ersatzform", "Sieht der Konjunktiv I aus wie die normale Form, nimmt man den Konjunktiv II (sie hätten) oder die würde-Form (sie würden backen)."],
    teilzitat: ["Teilzitat", "Wenige wörtlich übernommene Wörter, die in einen eigenen Satz eingebaut werden."],
    auslassung: ["Auslassung", "Lässt man in einem Zitat Wörter weg, zeigt man das mit drei Punkten in eckigen Klammern: […]."]
  },
  stationen: [
    { kurz: "Interview", ober: "Lesen", titel: "Ein Gespräch – und was daraus wird", teile: [
      { art: "text", html: "<p class=\"lead\">Leonie und Ardit haben für die Schülerzeitung „Klartext“ eine Bäckermeisterin interviewt. Für die Schulhomepage soll daraus ein kurzer Bericht werden. Das ganze Gespräch abschreiben können sie nicht – sie müssen auswählen: Was hat Frau Wiesinger gesagt, und wie bringt man es in den eigenen Text?</p><p>Lies zuerst das Interview. Achte darauf, welche Sätze dir im Kopf bleiben.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Das Interview", lesetext: { R: "schr-interview-r", M: "schr-interview-m" } },
      { art: "mc", id: "ueber", tag: "Erster Überblick", fragen: [
        { q: "Worauf achtet Frau Wiesinger bei einer Bewerbung am meisten?", o: ["darauf, ob jemand zuverlässig ist und mit anpackt", "auf sehr gute Noten in allen wichtigen Fächern", "auf Erfahrung aus einer anderen Bäckerei"], a: 0, e: "Noten sind ihr weniger wichtig. Sie will sehen, dass jemand pünktlich kommt und mitarbeitet." },
        { q: "Was kann nach Frau Wiesinger keine Maschine?", o: ["spüren, ob ein Teig so weit ist", "einen schweren Teig durchkneten", "nachts ohne Pause arbeiten"], a: 0, e: "Das Kneten übernimmt die Maschine. Ob der Teig fertig ist, erkennt aber nur ein Mensch mit seinen Händen." }
      ] },
      { art: "beleg", id: "stellen", nur: "R", tag: "Textstellen finden", titel: "Wo sagt sie das?", lead: "Wer eine Aussage wiedergeben will, muss sie erst finden.", lesetext: "schr-interview-r", fragen: [
        { q: "In welchen Zeilen erklärt Frau Wiesinger, was eine Maschine nicht kann?", zeilen: [29, 30], e: "Ob ein Teig fertig ist, spürt man nur mit den Händen.", tipp: "Suche die Antwort auf die Frage nach den Maschinen. Die Stelle beginnt mit „Aber“." },
        { q: "Wo sagt sie, worauf sie bei einer Bewerbung achtet?", zeilen: [33, 35], e: "Pünktlichkeit und Zupacken zählen für sie mehr als Noten.", tipp: "Suche das Wort „Pünktlichkeit“ und lies den Satz davor mit." },
        { q: "Wo gibt sie den Achtklässlern Ratschläge für das Praktikum?", zeilen: [49, 51], e: "Drei Ratschläge hintereinander: ausprobieren, ausgeschlafen kommen und fragen, keine Angst vor Fehlern.", tipp: "Die Ratschläge stehen in ihrer letzten Antwort. Sie beginnen mit „Probiert“, „Kommt“ und „habt“." }
      ], hilfen: ["Lies zuerst nur die Fragen von „Klartext“. So findest du schnell die passende Antwort.", "Tippe nur die Zeilen an, in denen die Aussage wirklich steht – nicht die ganze Antwort."] },
      { art: "beleg", id: "stellen", nur: "M", tag: "Textstellen finden", titel: "Wo sagt sie das?", lead: "Wer eine Aussage wiedergeben will, muss sie erst finden.", lesetext: "schr-interview-m", fragen: [
        { q: "Wo begründet Frau Wiesinger mit einem Beispiel, warum gute Noten allein sie nicht überzeugen?", zeilen: [34, 36], e: "Ein Zeugnis voller Einser nützt nichts, wenn jemand ständig zu spät kommt.", tipp: "Suche das Wort „Zeugnis“ und lies den ganzen Satz." },
        { q: "Wo sagt sie, in welchem Fall sie sich über einen Fehler ärgert?", zeilen: [56, 57], e: "Nicht der Fehler ärgert sie, sondern das Vertuschen.", tipp: "Achte auf das Wort „nur“ – es schränkt ein." },
        { q: "Wo erklärt sie, was ein Praktikum für die Berufswahl leisten kann?", zeilen: [70, 72], e: "Im Praktikum bemerkt man einen Irrtum – oder eine Begabung, von der man nichts ahnte.", tipp: "Die Stelle steht in ihrer letzten Antwort, gleich nach dem ersten Ratschlag." }
      ] },
      { art: "beispiel", kopf: "Zwei Wege, dieselbe Aussage wiederzugeben", html: "<p><strong>Wörtlich:</strong> Frau Wiesinger sagt: „Ein Teig lässt sich nicht hetzen.“<br><strong>Indirekt:</strong> Frau Wiesinger sagt, ein Teig lasse sich nicht hetzen.</p><p>Im ersten Satz hörst du ihre eigenen Worte – das ist <button class=\"term\" data-t=\"woertlich\">wörtliche Rede</button>. Im zweiten berichtest du, was sie gesagt hat – das ist <button class=\"term\" data-t=\"indirekt\">indirekte Rede</button>. In den nächsten Stationen übst du beide Wege.</p>" }
    ] },
    { kurz: "Wörtlich", ober: "Verstehen", titel: "Wörtliche Rede: Wohin gehören die Zeichen?", teile: [
      { art: "text", html: "<p class=\"lead\">Nach dem Interview bleiben Leonie und Ardit noch in der Backstube. Dort treffen sie Yusuf, der im zweiten Lehrjahr ist. Es wird gefragt, gerufen und gelacht – und Leonie schreibt alles mit. Aber wohin gehören Doppelpunkt, Komma und Anführungszeichen?</p>" },
      { art: "beispiel", kopf: "Dreimal derselbe Satz", html: "<p><strong>Redeeinleitung vorn:</strong> Frau Wiesinger sagt: „Ein Teig lässt sich nicht hetzen.“<br><strong>Redeeinleitung hinten:</strong> „Ein Teig lässt sich nicht hetzen“, sagt Frau Wiesinger.<br><strong>Redeeinleitung in der Mitte:</strong> „Ein Teig“, sagt Frau Wiesinger, „lässt sich nicht hetzen.“</p>" },
      { art: "merke", kopf: "MERKE: Zeichen bei der wörtlichen Rede", html: "<ul><li>Was jemand wörtlich sagt, steht in Anführungszeichen: vorn unten „ und hinten oben “.</li><li>Die <button class=\"term\" data-t=\"redeeinleitung\">Redeeinleitung</button> sagt, wer spricht. Steht sie <strong>vorn</strong>, folgt ein Doppelpunkt.</li><li>Steht sie <strong>hinten</strong>, kommt nach dem schließenden Anführungszeichen ein Komma. Der Punkt der Aussage entfällt – Fragezeichen und Ausrufezeichen bleiben: „Greift zu!“, ruft sie.</li><li>Steht sie <strong>in der Mitte</strong>, wird sie von zwei Kommas eingerahmt.</li><li>Wörtlich heißt Wort für Wort: Du änderst nichts.</li></ul>" },
      { art: "mc", id: "zeichen", tag: "Zeichen prüfen", fragen: [
        { q: "Die Redeeinleitung steht hinten. Welcher Satz ist richtig geschrieben?", o: ["„Ein Teig lässt sich nicht hetzen“, erklärt Frau Wiesinger.", "„Ein Teig lässt sich nicht hetzen.“, erklärt Frau Wiesinger.", "„Ein Teig lässt sich nicht hetzen“ erklärt Frau Wiesinger.", "„Ein Teig lässt sich nicht hetzen, erklärt Frau Wiesinger.“"], a: 0, e: "Steht die Redeeinleitung hinten, entfällt der Punkt der Aussage. Nach dem schließenden Anführungszeichen steht ein Komma." },
        { q: "Leonie stellt eine Frage. Welche Schreibung stimmt?", o: ["„Dürfen wir eine Breze probieren?“, fragt Leonie.", "„Dürfen wir eine Breze probieren“?, fragt Leonie.", "„Dürfen wir eine Breze probieren“, fragt Leonie?", "„Dürfen wir eine Breze probieren?“ fragt Leonie."], a: 0, e: "Das Fragezeichen gehört zur Frage und steht vor dem schließenden Anführungszeichen. Danach folgt trotzdem das Komma." },
        { q: "Die Redeeinleitung steht in der Mitte. Welcher Satz ist richtig geschrieben?", o: ["„Am ersten Tag“, erzählt Yusuf, „sah keine meiner Brezen aus wie eine Breze.“", "„Am ersten Tag“ erzählt Yusuf „sah keine meiner Brezen aus wie eine Breze.“", "„Am ersten Tag, erzählt Yusuf, sah keine meiner Brezen aus wie eine Breze.“", "„Am ersten Tag“, erzählt Yusuf: „sah keine meiner Brezen aus wie eine Breze.“"], a: 0, e: "Die eingeschobene Redeeinleitung wird von zwei Kommas eingerahmt. Beide Teile der Rede bekommen eigene Anführungszeichen." }
      ] },
      { art: "luecke", id: "satzz", tag: "Zeichen setzen", titel: "Was fehlt hier?", lead: "Tippe eine Lücke an und dann das passende Zeichen. Zwei Zeichen im Speicher bleiben übrig.", absaetze: [
        ["Frau Wiesinger ruft", { g: ":" }, " „Greift zu!“"],
        ["„So frisch habe ich noch nie eine Breze gegessen", { g: "“," }, " meint Ardit."],
        ["„Wie lange dauert die Ausbildung", { g: "?“," }, " will Leonie wissen."],
        ["„Drei Jahre“", { g: "," }, " antwortet Yusuf, „und ich bin schon im zweiten", { g: ".“" }]
      ], extra: ["“.", ";"], hilfen: ["Frage dich bei jeder Lücke: Steht die Redeeinleitung vorn, hinten oder in der Mitte?", "Nach einer Redeeinleitung vorn steht ein Doppelpunkt. Vor einer Redeeinleitung hinten wird die Rede geschlossen – und dann kommt ein Komma.", "Am Ende des letzten Satzes gehört der Punkt noch zur Rede: Er steht vor dem Anführungszeichen."] },
      { art: "sort", id: "verben", tag: "Redeverben", titel: "Nicht immer nur „sagen“", lead: "Die Redeeinleitung kann zeigen, <em>wie</em> jemand etwas sagt. Sortiere die <button class=\"term\" data-t=\"redeverb\">Redeverben</button>.", buckets: ["einfach mitteilen", "mit Nachdruck sagen", "etwas zugeben"], cols: 200, fertig: "✅ Richtig sortiert! Dazu kommen Verben wie fragen, antworten, raten, warnen und versprechen. Nimm immer das Verb, das am genauesten passt.", items: [
        { t: "Sie berichtet, …", b: 0 },
        { t: "Sie erzählt, …", b: 0 },
        { t: "Sie erklärt, …", b: 0 },
        { t: "Sie betont, …", b: 1 },
        { t: "Sie versichert, …", b: 1 },
        { t: "Sie hebt hervor, …", b: 1 },
        { t: "Sie räumt ein, …", b: 2 },
        { t: "Sie gibt zu, …", b: 2 },
        { t: "Sie gesteht, …", b: 2 }
      ] }
    ] },
    { kurz: "Indirekt", ober: "Üben", titel: "Indirekte Rede: berichten, was jemand gesagt hat", teile: [
      { art: "text", html: "<p class=\"lead\">Yusuf erzählt gern von seiner Ausbildung. Würde Leonie alles wörtlich abdrucken, bestünde ihr Bericht nur noch aus Anführungszeichen. Das meiste gibt sie deshalb in der indirekten Rede wieder.</p>" },
      { art: "beispiel", kopf: "Von der wörtlichen zur indirekten Rede", html: "<p><strong>Wörtlich:</strong> Yusuf sagt: „Ich habe meinen Beruf gefunden.“<br><strong>Indirekt:</strong> Yusuf sagt, er habe seinen Beruf gefunden.</p><ol><li>Aus dem Doppelpunkt wird ein <strong>Komma</strong>, die Anführungszeichen fallen weg.</li><li>Die <strong>Pronomen</strong> wechseln: ich → er, meinen → seinen.</li><li>Das Verb steht im <button class=\"term\" data-t=\"konj1\">Konjunktiv I</button>: er <strong>habe</strong>.</li></ol>" },
      { art: "merke", kopf: "MERKE: Indirekte Rede", html: "<ul><li><strong>Komma</strong> nach der Redeeinleitung – kein Doppelpunkt, keine Anführungszeichen.</li><li><strong>Pronomen anpassen:</strong> ich → er/sie · mein → sein/ihr · wir → sie · unser → ihr</li><li><strong>Konjunktiv I:</strong> er habe · sie sei · er komme · sie könne · er dürfe · sie werde</li><li>Auch mit <em>dass</em> möglich: Yusuf sagt, dass er seinen Beruf gefunden habe.</li><li>Einen Rat oder eine Aufforderung gibst du mit <em>sollen</em> wieder: Die Chefin sagt, er solle Geduld haben.</li></ul><p>Der Konjunktiv zeigt deinen Lesern: Das behaupte nicht ich – das hat jemand anderes gesagt.</p>" },
      { art: "luecke", id: "konj", tag: "Konjunktiv I einsetzen", titel: "Was Yusuf erzählt", lead: "Setze die Verben im Konjunktiv I ein. Drei Formen im Wortspeicher stehen im Indikativ – sie bleiben übrig.", absaetze: [
        ["Yusuf erzählt, er ", { g: "sei" }, " jetzt im zweiten Lehrjahr. Am Anfang ", { g: "habe" }, " er vor allem zugeschaut."],
        ["Inzwischen ", { g: "dürfe" }, " er die Brezen ganz allein formen. Jeden Morgen ", { g: "komme" }, " er als Erster in der Backstube an."],
        ["Besonders gut ", { g: "gefalle" }, " ihm der Duft von frischem Brot."]
      ], extra: ["ist", "hat", "darf"], hilfen: ["Den Konjunktiv I erkennst du oft am -e: er habe, er komme, er dürfe.", "Die Form von „sein“ heißt im Konjunktiv I: er sei."] },
      { art: "mc", id: "pron", tag: "Pronomen anpassen", fragen: [
        { q: "Yusuf sagt: „Meine Chefin erklärt mir alles zweimal.“ Welche Wiedergabe ist richtig?", o: ["Yusuf sagt, seine Chefin erkläre ihm alles zweimal.", "Yusuf sagt, meine Chefin erkläre mir alles zweimal.", "Yusuf sagt, seine Chefin erklärt mir alles zweimal.", "Yusuf sagt: seine Chefin erkläre ihm alles zweimal."], a: 0, e: "Aus „meine“ wird „seine“ und aus „mir“ wird „ihm“ – sonst wäre plötzlich von dir selbst die Rede. Nach der Redeeinleitung steht ein Komma, das Verb steht im Konjunktiv I: erkläre." }
      ] },
      { art: "merke", kopf: "MERKE: Wenn man den Konjunktiv I nicht erkennt", html: "<p>Manchmal sieht der Konjunktiv I genauso aus wie die normale Form: <em>sie haben, sie kommen, sie lernen</em>. Dann merkt niemand, dass du nur wiedergibst. Nimm eine <button class=\"term\" data-t=\"ersatz\">Ersatzform</button>:</p><ul><li><strong>Konjunktiv II:</strong> „Wir haben frei.“ → Sie sagen, sie <strong>hätten</strong> frei. · „Wir kommen um fünf.“ → Sie sagen, sie <strong>kämen</strong> um fünf.</li><li><strong>würde-Form</strong>, wenn auch der Konjunktiv II nicht auffällt: „Wir lernen jeden Tag dazu.“ → Sie sagen, sie <strong>würden</strong> jeden Tag <strong>dazulernen</strong>.</li></ul>" },
      { art: "mc", id: "ersatz", tag: "Ersatzform wählen", fragen: [
        { q: "Die Auszubildenden sagen: „Wir haben schon viel gelernt.“ Welche Wiedergabe ist am besten?", o: ["Die Auszubildenden sagen, sie hätten schon viel gelernt.", "Die Auszubildenden sagen, sie haben schon viel gelernt.", "Die Auszubildenden sagen, wir hätten schon viel gelernt.", "Die Auszubildenden sagen, sie habe schon viel gelernt."], a: 0, e: "Der Konjunktiv I „sie haben“ sieht aus wie die normale Form. Deshalb steht der Konjunktiv II: sie hätten. Und aus „wir“ wird „sie“." },
        { q: "Yusuf und sein Kollege sagen: „Wir backen jede Nacht 800 Semmeln.“ Welche Wiedergabe ist am besten?", o: ["Sie sagen, sie würden jede Nacht 800 Semmeln backen.", "Sie sagen, sie backen jede Nacht 800 Semmeln.", "Sie sagen, wir würden jede Nacht 800 Semmeln backen.", "Sie sagen, sie backe jede Nacht 800 Semmeln."], a: 0, e: "„sie backen“ sieht aus wie die normale Form, und auch der Konjunktiv II „sie backten“ fällt nicht auf – er gleicht dem Präteritum. Dann hilft die würde-Form." }
      ] },
      { art: "offen", id: "umf", nur: "R", tag: "Selbst umformen", titel: "Jetzt du", fragen: [
        { q: "Gib in der indirekten Rede wieder: Yusuf sagt: „Ich bin gern in der Backstube.“", m: "Yusuf sagt, er sei gern in der Backstube.", k: ["yusuf|er ", "sei", "backstube"] },
        { q: "Gib in der indirekten Rede wieder: Yusuf sagt: „Meine Arbeit macht mir Spaß.“", m: "Yusuf sagt, seine Arbeit mache ihm Spaß.", k: ["seine arbeit", "mache", "ihm"] }
      ], tipp: "Drei Schritte: Komma statt Doppelpunkt, Pronomen anpassen, Verb in den Konjunktiv I.", hilfen: ["Beginne so: Yusuf sagt, er …", "Aus „bin“ wird „sei“, aus „macht“ wird „mache“.", "Im zweiten Satz wechseln zwei Pronomen: meine → seine, mir → ihm."] },
      { art: "offen", id: "umf", nur: "M", tag: "Selbst umformen", titel: "Jetzt du", fragen: [
        { q: "Gib in der indirekten Rede wieder: Yusuf erzählt: „Ich habe in meiner ersten Woche mehr gelernt als in einem Monat Schule.“", m: "Yusuf erzählt, er habe in seiner ersten Woche mehr gelernt als in einem Monat Schule.", k: ["er ", "habe", "seiner ersten"] },
        { q: "Gib in der indirekten Rede wieder und achte auf die Ersatzform: Yusuf und sein Kollege sagen: „Wir gehen nach der Arbeit oft zusammen schwimmen.“", m: "Yusuf und sein Kollege sagen, sie gingen nach der Arbeit oft zusammen schwimmen.", k: ["sie ", "gingen|würden", "schwimmen"] }
      ], tipp: "Prüfe am Schluss: Stehen noch „ich“, „mein“ oder „wir“ da? Und erkennt man am Verb, dass du nur wiedergibst?" }
    ] },
    { kurz: "Einbauen", ober: "Anwenden", titel: "Wörtlich oder indirekt? Beides gehört in deinen Text", teile: [
      { art: "mc", id: "wahl", tag: "Auswählen", fragen: [
        { q: "Welche Aussage von Frau Wiesinger eignet sich am besten für ein wörtliches Zitat?", o: ["der Vergleich ihres ersten Brotes mit einem Ziegelstein", "die Uhrzeit, zu der ihre Auszubildenden kommen", "die Zahl der Jahre, die sie schon ausbildet"], a: 0, e: "Was anschaulich, persönlich oder besonders treffend gesagt ist, zitierst du wörtlich. Bloße Informationen wie Uhrzeiten und Zahlen gibst du indirekt oder mit eigenen Worten wieder." }
      ] },
      { art: "merke", kopf: "MERKE: Wörtlich oder indirekt?", html: "<ul><li><strong>Wörtlich</strong> zitierst du, was besonders treffend, anschaulich oder persönlich gesagt ist – aber sparsam.</li><li><strong>Indirekt</strong> gibst du wieder, was vor allem Information ist.</li><li>Wechsle ab – und wechsle auch die Redeverben.</li><li>Zitierst du aus einem gedruckten Text, gehört die Zeilenangabe dazu. Das kennst du aus dem Modul „Belegen und zitieren“.</li></ul>" },
      { art: "offen", id: "zitat", nur: "R", tag: "Selbst zitieren", titel: "Dein erstes Zitat", fragen: [
        { q: "Suche im Interview einen Satz von Frau Wiesinger, der dir gefällt. Schreibe ihn als wörtliche Rede auf – mit Redeeinleitung und allen Zeichen.", m: "Frau Wiesinger betont: „Gute Arbeit braucht Ruhe.“", k: ["„|\"|“|»", "wiesinger|sie |bäckermeisterin|bäckerin", "sagt|betont|erklärt|meint|rät|erzählt|berichtet|antwortet|gibt|ruft|findet|warnt"] }
      ], tipp: "Redeeinleitung, Doppelpunkt, Anführungszeichen unten, der Satz Wort für Wort, Anführungszeichen oben.", hilfen: ["Schreibe zuerst, wer spricht: Frau Wiesinger sagt …", "Nach der Redeeinleitung kommt ein Doppelpunkt, dann das Anführungszeichen unten.", "Schreibe den Satz Wort für Wort ab. Der Punkt steht vor dem Anführungszeichen oben."] },
      { art: "merke", nur: "M", kopf: "MERKE: Das Zitat in den eigenen Satz einbauen", html: "<p>Geübte Schreiber zitieren oft nur wenige Wörter und bauen sie in ihren eigenen Satz ein – ein <button class=\"term\" data-t=\"teilzitat\">Teilzitat</button>:</p><p><em>Frau Wiesinger ist überzeugt, dass sich ein Teig „nicht hetzen“ lasse.</em></p><ul><li>Das Teilzitat steht in Anführungszeichen, am Wortlaut ändert sich nichts.</li><li>Dein Satz muss mit dem Zitat grammatisch aufgehen – lies ihn zur Probe laut.</li><li>Lässt du mitten im Zitat etwas weg, kennzeichnest du die <button class=\"term\" data-t=\"auslassung\">Auslassung</button> mit […].</li><li><strong>Satzzeichen am Ende:</strong> Schließt dein Satz mit einem Teilzitat, steht dein Punkt <em>nach</em> dem Anführungszeichen. Zitierst du einen ganzen Satz nach einem Doppelpunkt, steht sein Punkt <em>vor</em> dem Anführungszeichen.</li></ul>" },
      { art: "text", nur: "R", html: "<p>Für Profis: Du kannst auch nur wenige Wörter zitieren und in deinen eigenen Satz einbauen – ein <button class=\"term\" data-t=\"teilzitat\">Teilzitat</button>: <em>Frau Wiesinger ist überzeugt, dass sich ein Teig „nicht hetzen“ lasse.</em> Lässt du mitten im Zitat etwas weg, zeigst du die <button class=\"term\" data-t=\"auslassung\">Auslassung</button> mit […]. Die nächsten Aufgaben dazu sind für dich freiwillig.</p>" },
      { art: "mc", id: "einbau", m7: true, tag: "Zitat einbauen", fragen: [
        { q: "Frau Wiesinger sagt: „Mein erstes Brot war hart wie ein Ziegelstein.“ Welcher Satz baut ein Teilzitat richtig ein?", o: ["Frau Wiesinger erinnert sich, ihr erstes Brot sei „hart wie ein Ziegelstein“ gewesen.", "Frau Wiesinger erinnert sich, „mein erstes Brot war hart wie ein Ziegelstein“ gewesen.", "Frau Wiesinger erinnert sich, ihr erstes Brot sei „hart wie Stein“ gewesen.", "Frau Wiesinger erinnert sich, ihr erstes Brot sei, „hart wie ein Ziegelstein“, gewesen."], a: 0, e: "Das Teilzitat fügt sich ohne zusätzliche Kommas in den Satz ein, und der Wortlaut bleibt unverändert. Der eigene Satz steht im Konjunktiv I (sei), weil er wiedergibt, was sie gesagt hat." },
        { q: "Im Interview steht: „Wer im Praktikum Fragen stellt und mitdenkt, hat bei mir gute Chancen.“ Du willst die Wörter „Fragen stellt und“ weglassen. Welche Fassung ist richtig?", o: ["„Wer im Praktikum […] mitdenkt, hat bei mir gute Chancen.“", "„Wer im Praktikum mitdenkt, hat bei mir gute Chancen.“", "„Wer im Praktikum mitdenkt […], hat bei mir gute Chancen.“", "„Wer im Praktikum […] mitdenkt, hat bei ihr gute Chancen.“"], a: 0, e: "Die Auslassung wird mit […] gekennzeichnet – genau an der Stelle, an der Wörter fehlen. Alles andere bleibt Wort für Wort, auch das „mir“." },
        { q: "Dein Satz endet mit einem eingebauten Teilzitat. Wo steht der Punkt?", o: ["Sie nennt ihr erstes Brot „hart wie ein Ziegelstein“.", "Sie nennt ihr erstes Brot „hart wie ein Ziegelstein.“", "Sie nennt ihr erstes Brot „hart wie ein Ziegelstein.“.", "Sie nennt ihr erstes Brot „hart wie ein Ziegelstein“"], a: 0, e: "Das Teilzitat ist nur ein Stück deines Satzes. Der Punkt gehört deshalb zu deinem Satz und steht nach dem schließenden Anführungszeichen." }
      ] },
      { art: "offen", id: "teil", m7: true, tag: "Selbst einbauen", titel: "Teilzitat im eigenen Satz", fragen: [
        { q: "Im Interview steht: „Wer im Praktikum Fragen stellt und mitdenkt, hat bei mir gute Chancen.“ Baue ein Teilzitat daraus in einen eigenen Satz ein.", m: "Wer im Praktikum „Fragen stellt und mitdenkt“, hat bei Frau Wiesinger gute Chancen.", k: ["„|\"|“|»", "wiesinger|bäckermeisterin|ihr |sie ", "chancen|praktikum|fragen|mitdenk"] }
      ], tipp: "Zitiere nur wenige Wörter und baue deinen Satz um sie herum. Lies ihn zur Probe laut – klingt er wie ein richtiger Satz?" }
    ] },
    { kurz: "Bericht", ober: "Schreiben", titel: "Dein Bericht über das Interview", teile: [
      { art: "text", html: "<p class=\"lead\">Jetzt schreibst du selbst. Das Interview kannst du jederzeit über den Knopf „📖 Text“ einblenden.</p>" },
      { art: "schreiben", id: "bericht", nur: "R", tag: "Schreibtrainer", titel: "Bericht für die Schulhomepage: Besuch in der Backstube", min: 70,
        auftrag: "<p>Die Schülerzeitung druckt das ganze Interview. Für die <b>Schulhomepage</b> brauchst du etwas Kürzeres: einen Bericht über das Gespräch mit Frau Wiesinger.</p><p>Schreibe einen kurzen Bericht (mindestens 70 Wörter):</p><ul><li>Beginne mit einem Satz, der sagt, wer wen befragt hat.</li><li>Gib <b>zwei Aussagen wörtlich</b> wieder – mit Redeeinleitung und Anführungszeichen.</li><li>Gib <b>zwei Aussagen in der indirekten Rede</b> wieder – mit Komma und Konjunktiv I.</li><li>Nimm dafür Aussagen aus dem Interview, die du in den Übungen noch nicht umgeformt hast.</li></ul>",
        kriterien: ["Der erste Satz nennt, wer wen befragt hat.", "Zwei Aussagen stehen wörtlich da – mit Anführungszeichen und richtigen Satzzeichen.", "Zwei Aussagen stehen in der indirekten Rede – mit Komma und Konjunktiv I.", "Die Pronomen sind angepasst (ich → sie, mein → ihr).", "Ich wechsle die Redeverben ab (erklären, betonen, raten, zugeben …)."],
        starter: ["Für die Schülerzeitung „Klartext“ haben Leonie und Ardit …", "Frau Wiesinger erzählt, sie …", "Sie betont: „", "Außerdem erklärt sie, …", "Zum Schluss rät sie den Achtklässlern: „"] },
      { art: "schreiben", id: "bericht", nur: "M", tag: "Schreibtrainer", titel: "Bericht für die Schulhomepage: Besuch in der Backstube", min: 110,
        auftrag: "<p>Die Schülerzeitung druckt das ganze Interview. Für die <b>Schulhomepage</b> wird ein Bericht gebraucht, der das Gespräch mit Frau Wiesinger zusammenfasst und sie trotzdem selbst zu Wort kommen lässt.</p><p>Verfasse diesen Bericht (mindestens 110 Wörter):</p><ul><li>Führe kurz ein: Wer hat wen befragt – und worum ging es?</li><li>Gib <b>zwei Aussagen wörtlich</b> wieder. Stelle die Redeeinleitung dabei an verschiedene Stellen.</li><li>Gib <b>zwei Aussagen in der indirekten Rede</b> wieder. Nimm eine Ersatzform, wo man den Konjunktiv I nicht erkennt.</li><li>Baue zusätzlich <b>ein Teilzitat</b> in einen eigenen Satz ein.</li><li>Entscheide selbst: Was ist so treffend gesagt, dass es wörtlich dastehen muss – und was genügt als Information?</li></ul>",
        kriterien: ["Die Einleitung nennt, wer wen befragt hat und worum es ging.", "Zwei wörtliche Zitate sind richtig gesetzt, die Redeeinleitung steht an verschiedenen Stellen.", "Zwei Aussagen stehen in der indirekten Rede – mit Konjunktiv I oder Ersatzform und angepassten Pronomen.", "Ein Teilzitat ist grammatisch richtig in einen eigenen Satz eingebaut.", "Die Redeverben wechseln und treffen, wie etwas gesagt wurde."],
        starter: ["Für die Schülerzeitung „Klartext“ haben Leonie und Ardit …", "Auf die Frage nach … antwortet sie, …", "„…“, betont die Bäckermeisterin.", "Nach ihren Worten …", "Den Achtklässlern rät sie, …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Steht die Redeeinleitung vor der wörtlichen Rede, folgt ein Doppelpunkt.", true],
        ["Steht die Redeeinleitung hinter der wörtlichen Rede, braucht man kein Komma.", false],
        ["In der indirekten Rede fallen die Anführungszeichen weg.", true],
        ["In der indirekten Rede wird aus „ich“ meistens „er“ oder „sie“.", true],
        ["Der Konjunktiv I von „er hat“ heißt „er hätte“.", false],
        ["Erkennt man den Konjunktiv I nicht, nimmt man den Konjunktiv II oder die würde-Form.", true]
      ] }
    ] }
  ],
  weiter: { href: "schr_06.html", titel: "Modul 6: Texte überarbeiten", text: "Dein Bericht steht – aber ist er schon gut? Im nächsten Modul lernst du, einen Entwurf <strong>in vier Durchgängen zu überarbeiten</strong>: Inhalt, Aufbau, Sprache, Rechtschreibung." }
});
