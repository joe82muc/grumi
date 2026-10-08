/* Deutsch 8 · Argumentieren und Stellung nehmen · Modul 5: Diskutieren und moderieren
   (einer Diskussion zuhören und das Gesprächsverhalten beurteilen, Gesprächsregeln und nonverbales Verhalten, nachfragen,
   zusammenfassen, anknüpfen, eine Diskussion leiten; M8: Gesprächsleitung beurteilen, Beitrag spiegeln, Zwischenergebnis
   formulieren, Kompromiss herbeiführen; zum Schluss ein eigener Diskussionsbeitrag – M8: als Moderation)
   LehrplanPLUS D8 1.3 (Gespräche vorbereiten, nachfragen, zusammenfassen, ergänzen, Angemessenheit von Beiträgen reflektieren,
   nonverbal angemessen verhalten, Diskussionsrunden planen und leiten; M8: Techniken des Nachfragens, moderieren,
   Zwischenergebnisse zusammenfassen, Kompromisse herbeiführen), 1.1 (längeren Diskussionen aufmerksam zuhören, Notizen
   machen; M8: Gehörtes zusammenfassen und kommentieren).
   Hörtext: „Klassenfahrt: Berghütte oder Großstadt?“ (texte/hoertexte/diskussion-klassenfahrt.js) – erfunden.
   Übungsbeispiele: Klassenkasse (Kletterwald oder Sitzecke), für M8 zusätzlich eine freie Seite in der Schülerzeitung. */
D7Kit.seite({
  id: "arg-05",
  titel: "Diskutieren und moderieren",
  einleitung: "Gute Argumente allein reichen nicht – man muss sie auch so vorbringen, dass die anderen zuhören. Heute hörst du einer Klasse beim Diskutieren zu, übst das Nachfragen und Zusammenfassen und lernst, wie man eine Diskussion leitet.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 Ich höre einer Diskussion zu und erkenne, was sie voranbringt und was sie bremst.", "❓ Ich frage sachlich nach und fasse Beiträge zusammen.", "🧭 Ich weiß, was eine Diskussionsleitung tut.", "🗣️ Ich formuliere einen eigenen Beitrag, der an andere anknüpft."],
  quiz: { profi: "Gesprächs-Profi" },
  glossar: {
    ichbotschaft: ["Ich-Botschaft", "Du sprichst von dir statt über den anderen: „Ich sehe das anders, weil …“ statt „Du redest Unsinn.“"],
    nonverbal: ["nonverbal", "Ohne Worte: Blick, Mimik, Gestik und Körperhaltung."],
    nachfrage: ["Nachfrage", "Eine Frage, mit der du Genaueres erfährst: Was meinst du mit …? Kannst du ein Beispiel nennen?"],
    zusammenfassen: ["zusammenfassen", "Das Wichtigste eines Beitrags knapp und mit eigenen Worten wiedergeben."],
    offenefrage: ["offene Frage", "Eine Frage, auf die man nicht nur mit Ja oder Nein antworten kann – meist eine W-Frage."],
    moderation: ["Moderation", "Die Leitung eines Gesprächs: das Wort erteilen, auf die Regeln achten, zusammenfassen – ohne Partei zu ergreifen."],
    neutral: ["neutral", "Unparteiisch: Wer leitet, bevorzugt keine Seite."],
    zwischenergebnis: ["Zwischenergebnis", "Eine kurze Bilanz mitten im Gespräch: Worin sind wir uns einig, was ist noch offen?"],
    kompromiss: ["Kompromiss", "Eine Lösung, bei der jede Seite etwas nachgibt und etwas bekommt."]
  },
  stationen: [
    { kurz: "Zuhören", ober: "Zuhören", titel: "Wohin geht die Klassenfahrt?", teile: [
      { art: "text", html: "<p class=\"lead\">Die Klasse 8c plant ihre Klassenfahrt – und ist sich nicht einig. Derya leitet das Gespräch, Moritz und Pia vertreten die beiden Vorschläge. Lies zuerst die Aufgaben. Achte dann beim Hören auf zwei Dinge: <b>Was</b> wollen Moritz und Pia – und <b>wie</b> gehen die drei miteinander um?</p><p>Tipp: Leg dir einen Zettel bereit und notiere Stichwörter, zum Beispiel die Preise und wer wen ermahnt.</p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Hörtext", hoertext: "arg-diskussion-klassenfahrt", fragen: [
        { art: "mc", id: "hw", titel: "Worum geht es?", fragen: [
          { q: "Welche Gründe nennt Moritz für die Berghütte?", o: ["die Gemeinschaft und den niedrigeren Preis", "das gute Wetter und die kurze Anfahrt", "das große Programm und warme Duschen"], a: 0, e: "Drei Tage wirklich zusammen – und hundertvierzig statt zweihundertzehn Euro." },
          { q: "Worauf einigen sich Moritz und Pia am Ende?", o: ["auf eine Hütte mit Busanschluss und einen Halt im Planetarium", "auf drei Tage Großstadt mit einer kurzen Wanderung", "auf gar nichts – die Lehrerin soll allein entscheiden"], a: 0, e: "Beide geben etwas nach. Abgestimmt wird erst, wenn die Kosten bekannt sind." }
        ] },
        { art: "tf", id: "htf", titel: "Hast du genau zugehört?", aussagen: [
          ["Die Fahrt in die Stadt kostet mehr als die Hütte.", true],
          ["Derya bittet Moritz einmal, beim Thema zu bleiben.", true],
          ["Pia lässt Moritz jedes Mal ausreden.", false],
          ["Derya verrät, welchen Vorschlag sie selbst besser findet.", false],
          ["Am Ende steht endgültig fest, wohin die Klasse fährt.", false]
        ] },
        { art: "mc", id: "hv", titel: "Wie gehen die drei miteinander um?", fragen: [
          { q: "Was läuft an Pias erstem Beitrag schief?", o: ["Sie wird persönlich, statt einen Grund zu nennen.", "Sie spricht zu leise und viel zu langsam.", "Sie nennt zu viele Argumente auf einmal."], a: 0, e: "„Nur weil du jedes Wochenende …“ zielt auf Moritz, nicht auf seinen Vorschlag." },
          { q: "Was tut Derya, bevor sie nach einer gemeinsamen Lösung fragt?", o: ["Sie fasst zusammen, was beiden Seiten wichtig ist.", "Sie lässt die Klasse sofort abstimmen.", "Sie erklärt, was sie selbst am liebsten hätte."], a: 0, e: "Erst die Zusammenfassung, dann die Suche nach der Lösung – so wissen alle, worüber noch zu reden ist." }
        ] }
      ] },
      { art: "offen", id: "leitung", m7: true, tag: "Beurteilen", titel: "Wie leitet Derya das Gespräch?", fragen: [
        { q: "Beurteile Deryas Gesprächsleitung in zwei Sätzen: Nenne zwei Dinge, die sie gut macht.", m: "Derya bleibt neutral und greift ein, wenn jemand persönlich wird, unterbricht oder vom Thema abkommt. Außerdem fasst sie beide Standpunkte zusammen und fragt nach einer Lösung für beide Seiten.", k: ["neutral|unparteiisch|eigene meinung|greift ein|ermahnt|ausreden|beim thema|persönlich|regeln", "zusammen|kompromiss|lösung|hält fest|festhalten|ergebnis|fragt nach"], min: 2 }
      ], tipp: "Denk an zwei verschiedene Aufgaben der Leitung: für Ordnung sorgen – und das Gespräch zu einem Ergebnis führen.", hilfen: ["Wann greift Derya ein? Und was tut sie kurz vor dem Schluss?"] }
    ] },
    { kurz: "Regeln", ober: "Verstehen", titel: "Was ein Gespräch voranbringt", teile: [
      { art: "sort", id: "voran", tag: "Beiträge prüfen", titel: "Bringt das die Diskussion voran – oder bremst es sie?", lead: "Neue Runde, andere Klasse: Die 8d hat beim Kuchenverkauf 240 Euro eingenommen. Soll das Geld in einen Ausflug in den Kletterwald fließen oder in eine Sitzecke fürs Klassenzimmer? Hier sind sechs Beiträge.", buckets: ["bringt voran", "bremst"], cols: 240, items: [
        { t: "„Du findest den Kletterwald zu teuer. Was dürfte ein Ausflug denn höchstens kosten?“", b: 0 },
        { t: "„Ich sehe das anders, weil wir eine Sitzecke das ganze Jahr nutzen könnten.“", b: 0 },
        { t: "„Das mit der Höhenangst finde ich wichtig. Dazu kommt, dass es regnen kann.“", b: 0 },
        { t: "„Das ist doch Blödsinn.“", b: 1 },
        { t: "„Typisch, du willst ja immer nur herumsitzen.“", b: 1 },
        { t: "„Mir egal, was ihr sagt – ich bleibe dabei.“", b: 1 }
      ] },
      { art: "merke", kopf: "MERKE: So bleibt ein Gespräch fair", html: "<ul><li><b>Zur Sache, nicht zur Person</b> – am besten als <button class=\"term\" data-t=\"ichbotschaft\">Ich-Botschaft</button>: „Ich sehe das anders, weil …“</li><li><b>Ausreden lassen</b> – auch wenn du es kaum erwarten kannst.</li><li><b>Anknüpfen</b> – „Du hast gesagt, …“ zeigt: Ich habe zugehört.</li><li><b>Beim Thema bleiben</b> – Geschichten von früher gehören in die Pause.</li><li><b>Zugewandt bleiben</b> – anschauen, nicht tuscheln, nicht mit den Augen rollen. Auch <button class=\"term\" data-t=\"nonverbal\">nonverbal</button> sagst du etwas.</li></ul><p>In der Klassendiskussion sprichst du anders als auf dem Pausenhof: ganze Sätze, keine Kraftausdrücke.</p>" },
      { art: "mc", id: "regeln", tag: "Regeln anwenden", fragen: [
        { q: "Während Aylin spricht, rollt Lukas mit den Augen und tuschelt mit seinem Nachbarn. Was stimmt?", o: ["Auch ohne Worte zeigt er: Dein Beitrag ist mir egal.", "Solange er nichts laut sagt, stört er das Gespräch nicht.", "Das ist höflich, denn so unterbricht er Aylin nicht."], a: 0, e: "Blick, Haltung und Mimik gehören zum Gespräch. Wer sich abwendet, wertet den anderen ab – ganz ohne Worte." },
        { q: "Welcher Diskussionsbeitrag knüpft an den Vorredner an?", o: ["„Du sagst, die Sitzecke nützt uns jeden Tag. Aber wer darf dort sitzen?“", "„Ich habe mir vorhin etwas ganz anderes überlegt, das sage ich jetzt.“", "„Können wir bitte endlich abstimmen? Es ist doch alles gesagt.“"], a: 0, e: "Wer anknüpft, greift auf, was gesagt wurde – und führt den Gedanken weiter oder widerspricht mit einem Grund." }
      ] }
    ] },
    { kurz: "Nachfragen", ober: "Üben", titel: "Nachfragen und zusammenfassen", teile: [
      { art: "mc", id: "reakt", tag: "Reagieren", fragen: [
        { q: "Tessa sagt: „Der Kletterwald ist einfach besser.“ Welche Antwort bringt das Gespräch am ehesten weiter?", o: ["„Was meinst du mit besser – besser für die Gemeinschaft?“", "„Nein, die Sitzecke ist viel besser als der Kletterwald!“", "„Darüber brauchen wir gar nicht erst zu reden.“"], a: 0, e: "Nach einer Nachfrage kann Tessa ihren Grund nennen – und erst über Gründe lässt sich reden. Die zweite Antwort wiederholt nur die Gegenmeinung." }
      ] },
      { art: "merke", kopf: "MERKE: Drei Werkzeuge fürs Gespräch", html: "<ul><li><b><button class=\"term\" data-t=\"nachfrage\">Nachfragen</button></b>, wenn etwas unklar oder ungenau ist: „Was meinst du mit …?“ – „Kannst du ein Beispiel nennen?“ – „Warum ist dir das wichtig?“</li><li><b><button class=\"term\" data-t=\"zusammenfassen\">Zusammenfassen</button></b>, um zu zeigen, was bei dir angekommen ist: „Wenn ich dich richtig verstehe, …“ – „Dir geht es also vor allem um …“</li><li><b>Anknüpfen und ergänzen:</b> „Du hast gesagt, … Dazu möchte ich ergänzen, …“</li></ul><p>Eine echte Nachfrage will etwas wissen. Eine Frage wie „Glaubst du das etwa selbst?“ ist ein versteckter Angriff.</p>" },
      { art: "text", nur: "M", html: "<p><b>Für M8 – die Fragetechnik:</b> Mit einer <button class=\"term\" data-t=\"offenefrage\">offenen Frage</button> („Wie stellst du dir den Ausflug vor?“) erfährst du viel. Eine geschlossene Frage („Bist du für den Ausflug?“) lässt nur Ja oder Nein zu – sie passt, wenn etwas festgehalten oder abgestimmt werden soll. Wer klären will, fragt offen; wer entscheiden will, fragt geschlossen.</p>" },
      { art: "sort", id: "frage", tag: "Fragen prüfen", titel: "Echte Nachfrage oder versteckter Angriff?", buckets: ["echte Nachfrage", "versteckter Angriff"], cols: 240, items: [
        { t: "„Was genau meinst du mit ‚zu teuer‘?“", b: 0 },
        { t: "„Kannst du ein Beispiel nennen?“", b: 0 },
        { t: "„Wie viele von uns haben denn Höhenangst?“", b: 0 },
        { t: "„Glaubst du das etwa selbst?“", b: 1 },
        { t: "„Hast du überhaupt zugehört?“", b: 1 },
        { t: "„Wie kommst du nur auf so einen Unsinn?“", b: 1 }
      ] },
      { art: "luecke", id: "werkzeug", tag: "Lückentext", titel: "Setze die passenden Wörter ein", absaetze: [
        ["<b>Zusammenfassen:</b> „Wenn ich dich richtig ", { g: "verstehe" }, ", ist dir vor allem der ", { g: "Preis" }, " wichtig.“"],
        ["<b>Nachfragen:</b> „Was ", { g: "genau" }, " meinst du mit ‚mehr Spaß‘? Kannst du ein ", { g: "Beispiel" }, " nennen?“"],
        ["<b>Anknüpfen:</b> „Du hast ", { g: "gesagt" }, ", dass nicht alle klettern wollen. Dazu möchte ich etwas ", { g: "ergänzen" }, ".“"]
      ], extra: ["Blödsinn", "egal"], hilfen: ["Lies jeden Satz halblaut – dann hörst du, welches Wort passt.", "Zwei Wörter bleiben übrig. Sie gehören in kein faires Gespräch."] },
      { art: "offen", id: "nachfr", tag: "Selbst formulieren", titel: "Deine Nachfrage", fragen: [
        { q: "Emre sagt: „Eine Sitzecke gibt nur Streit.“ Formuliere eine sachliche Nachfrage, mit der du Genaueres erfährst.", m: "Was genau befürchtest du – worüber würde es denn Streit geben?", k: ["was |wie |wor|warum|weshalb|wieso|welche|wer |kannst du|meinst du|inwiefern", "streit|genau|beispiel|befürcht|meinst|konkret"], min: 2 }
      ], tipp: "Frag nach dem, was unklar ist: Worüber Streit? Zwischen wem? Beginne mit einem Fragewort.", hilfen: ["So kannst du anfangen: „Was genau meinst du mit …?“", "Achte auf den Ton: Du willst etwas wissen, nicht recht behalten."] },
      { art: "offen", id: "spiegeln", m7: true, tag: "Zusammenfassen", titel: "Einen Beitrag auf den Punkt bringen", fragen: [
        { q: "Greta sagt: „Also ich weiß nicht, Kletterwald ist ja schön und gut, aber ich hab’s nicht so mit Höhe, und der Tim auch nicht, und dann stehen wir zwei den ganzen Tag unten und schauen zu.“ Fasse Gretas Beitrag in einem Satz zusammen. Beginne mit „Wenn ich dich richtig verstehe, …“.", m: "Wenn ich dich richtig verstehe, befürchtest du, dass im Kletterwald nicht alle mitmachen können, weil manche Höhenangst haben.", k: ["wenn ich dich richtig|du meinst|du befürchtest|dir ist wichtig|du findest|du sagst|dir geht es", "nicht alle|höhe|mitmachen|zuschauen|unten|ausgeschlossen|dabei"], min: 2 }
      ], tipp: "Lass Füllwörter und Namen weg. Was ist der Kern? Wer hat im Kletterwald ein Problem – und welches?" }
    ] },
    { kurz: "Leiten", ober: "Anwenden", titel: "Eine Diskussion leiten", teile: [
      { art: "ordnen", id: "ablauf", tag: "Reihenfolge", titel: "Du leitest die Diskussion über die Klassenkasse", lead: "In welcher Reihenfolge gehst du vor?", schritte: [
        "Begrüßen, Thema nennen und an die Regeln erinnern",
        "Die beiden Vorschläge kurz vorstellen lassen",
        "Wortmeldungen der Reihe nach aufrufen",
        "Zwischendurch zusammenfassen, was bisher gesagt wurde",
        "Nach einer Lösung fragen und das Ergebnis festhalten",
        "Sich bedanken und die Diskussion schließen"
      ] },
      { art: "merke", kopf: "MERKE: Wer leitet, …", html: "<ul><li><b>eröffnet:</b> nennt das Thema und erinnert an die Regeln,</li><li><b>erteilt das Wort</b> – der Reihe nach, auch den Stillen,</li><li><b>greift ein</b>, wenn jemand persönlich wird, unterbricht oder abschweift,</li><li><b>fasst zusammen</b> und hält das Ergebnis fest,</li><li><b>bleibt <button class=\"term\" data-t=\"neutral\">neutral</button>:</b> Die eigene Meinung behält die <button class=\"term\" data-t=\"moderation\">Moderation</button> für sich.</li></ul>" },
      { art: "mc", id: "leit", tag: "Was tust du?", fragen: [
        { q: "Du leitest eine Diskussion. Zwei reden gleichzeitig los. Was sagst du?", o: ["„Einer nach dem anderen: erst Tessa, dann Emre.“", "„Seid endlich still, ihr nervt hier alle!“", "„Dann sage eben ich, was ich davon halte.“"], a: 0, e: "Die Leitung erteilt das Wort – ruhig und ohne jemanden abzuwerten." },
        { q: "Du leitest eine Diskussion. Emre erzählt lang und breit von einem Ausflug mit seinem Cousin. Was tust du?", o: ["Ich bedanke mich kurz und führe zur Frage zurück.", "Ich lasse ihn reden, bis ihm nichts mehr einfällt.", "Ich rufe ihn in dieser Stunde nicht mehr auf."], a: 0, e: "Zurück zum Thema – freundlich, aber deutlich. Bestrafen ist nicht Aufgabe der Leitung." },
        { q: "Du leitest eine Diskussion. Nach zehn Minuten haben erst vier aus der Klasse etwas gesagt. Was hilft?", o: ["Stille freundlich einladen: „Greta, wie siehst du das?“", "Die vier weiterreden lassen – sie wissen am meisten.", "Die Diskussion abbrechen und selbst entscheiden."], a: 0, e: "Eine gute Leitung sorgt dafür, dass möglichst viele zu Wort kommen." }
      ] },
      { art: "merke", m7: true, kopf: "MERKE: Zwischenergebnis und Kompromiss", html: "<p>Steckt eine Diskussion fest, hilft die Moderation mit zwei Schritten weiter:</p><ol><li><b><button class=\"term\" data-t=\"zwischenergebnis\">Zwischenergebnis</button>:</b> „Einig seid ihr euch darin, dass … Offen ist noch, ob …“</li><li><b><button class=\"term\" data-t=\"kompromiss\">Kompromiss</button> herbeiführen:</b> fragen, was jeder Seite am wichtigsten ist – Vorschläge sammeln, die beiden etwas bringen – prüfen: „Könnt ihr alle damit leben?“</li></ol><p>Ein Kompromiss ist kein fauler Mittelweg: Jede Seite gibt etwas nach und bekommt etwas.</p>" },
      { art: "offen", id: "zwischen", m7: true, tag: "Zwischenergebnis", titel: "Die Schülerzeitung hat nur noch eine freie Seite", fragen: [
        { q: "Du moderierst die Redaktionssitzung. Die Sportgruppe will auf die letzte freie Seite den Bericht vom Turnier setzen, weil er aktuell ist. Die Kulturgruppe will das Interview mit der Schulband, weil es seit Wochen versprochen ist. Beide wollen, dass die Ausgabe pünktlich vor den Ferien erscheint. Formuliere ein Zwischenergebnis in zwei Sätzen: Worin sind sich beide einig, was ist noch offen?", m: "Einig seid ihr euch darin, dass die Ausgabe pünktlich vor den Ferien erscheinen soll. Offen ist noch, ob der Turnierbericht oder das Interview die freie Seite bekommt.", k: ["einig|beide wollen|gemeinsam|übereinstimm|alle wollen", "offen|strittig|unklar|noch nicht|uneinig|klären|entscheiden"], min: 2 }
      ], tipp: "Zwei Sätze, zwei Anfänge: „Einig seid ihr euch darin, dass …“ – „Offen ist noch, ob …“. Bewerte keinen der beiden Wünsche." },
      { art: "mc", id: "komp", m7: true, tag: "Kompromiss", fragen: [
        { q: "Zwei Gruppen der Schülerzeitung streiten um die letzte freie Seite. Welcher Vorschlag ist ein Kompromiss?", o: ["Beide Beiträge werden gekürzt und teilen sich die Seite.", "Das Los entscheidet, wer die ganze Seite bekommt.", "Der Sport bekommt die Seite, weil er mehr Leser hat."], a: 0, e: "Beim Kompromiss gibt jede Seite etwas nach und bekommt etwas. Beim Losen oder Durchsetzen geht eine Seite leer aus." }
      ] }
    ] },
    { kurz: "Beitrag", ober: "Schreiben", titel: "Dein Beitrag zur Diskussion", teile: [
      { art: "text", html: "<p class=\"lead\">Wer sich vorbereitet, redet besser mit. Schreibe deinen Beitrag so auf, wie du ihn in der Klasse sagen würdest – der Schreibtrainer gibt dir danach einen Hinweis.</p>" },
      { art: "schreiben", id: "beitrag", nur: "R", tag: "Schreibtrainer", titel: "Mein Diskussionsbeitrag", min: 50,
        auftrag: "<p><b>Die Lage:</b> Die 8d diskutiert, wofür die 240 Euro aus dem Kuchenverkauf ausgegeben werden: für einen Ausflug in den Kletterwald oder für eine Sitzecke im Klassenzimmer. Gerade hat Emre gesagt: „Die Sitzecke haben wir jeden Tag. Der Ausflug ist nach ein paar Stunden vorbei.“</p><p>Jetzt bist du dran. Schreibe deinen <b>Diskussionsbeitrag</b> (mindestens 50 Wörter):</p><ul><li>Knüpfe an Emre an: „Du hast gesagt, …“</li><li>Sag deine Meinung und begründe sie.</li><li>Nenne ein Beispiel.</li><li>Ende mit einer Frage oder einem Vorschlag an die Klasse.</li></ul>",
        starter: ["Emre, du hast gesagt, dass …", "Ich sehe das genauso, weil …", "Ich sehe das anders, weil …", "Zum Beispiel …", "Deshalb schlage ich vor, dass …", "Wie seht ihr das?"],
        kriterien: ["Der Beitrag knüpft an Emres Aussage an.", "Die eigene Meinung ist klar und begründet.", "Ein Beispiel stützt die Begründung.", "Der Beitrag bleibt sachlich und beim Thema.", "Am Ende steht eine Frage oder ein Vorschlag an die Klasse."] },
      { art: "schreiben", id: "beitrag", nur: "M", tag: "Schreibtrainer", titel: "Mein Beitrag als Moderation", min: 80,
        auftrag: "<p><b>Die Lage:</b> Die 8d diskutiert, wofür die 240 Euro aus dem Kuchenverkauf ausgegeben werden. Die Diskussion steckt fest. Tessa beharrt auf dem Ausflug in den Kletterwald: „Ein gemeinsames Erlebnis schweißt uns zusammen.“ Emre beharrt auf der Sitzecke fürs Klassenzimmer: „Die haben wir jeden Tag.“ Greta hat eingewandt, dass nicht alle klettern mögen. Du leitest die Diskussion.</p><p>Schreibe deinen <b>Beitrag als Moderatorin oder Moderator</b> so auf, wie du ihn sagen würdest (mindestens 80 Wörter):</p><ul><li>Fasse das Zwischenergebnis zusammen: Was ist Tessa wichtig, was Emre – und worin sind sich beide einig?</li><li>Bleib neutral: Bewerte keinen der beiden Vorschläge.</li><li>Schlage einen Kompromiss vor, bei dem beide Seiten etwas gewinnen, und begründe ihn kurz.</li><li>Frage zum Schluss, ob alle damit leben können.</li></ul>",
        starter: ["Ich fasse einmal zusammen: …", "Einig seid ihr euch darin, dass …", "Offen ist noch, ob …", "Mein Vorschlag wäre, dass …", "Könnt ihr alle damit leben?"],
        kriterien: ["Der Beitrag fasst beide Standpunkte richtig und knapp zusammen.", "Er nennt, worin sich beide Seiten einig sind.", "Er bleibt neutral: Kein Vorschlag wird abgewertet.", "Der Kompromiss bringt beiden Seiten etwas und ist kurz begründet.", "Am Ende steht eine Frage an die Runde."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Wer nachfragt, erfährt die Gründe des anderen – und zeigt, dass er zuhört.", true],
        ["„Wenn ich dich richtig verstehe, …“ ist ein guter Anfang, um einen Beitrag zusammenzufassen.", true],
        ["Die Diskussionsleitung sagt zuerst, welchen Vorschlag sie selbst am besten findet.", false],
        ["Augenrollen und Tuscheln stören ein Gespräch, auch wenn kein Wort fällt.", true],
        ["Bei einem Kompromiss setzt sich eine Seite vollständig durch.", false],
        ["Wer vom Thema abkommt, wird von der Leitung freundlich zurückgeführt.", true]
      ] }
    ] }
  ],
  weiter: { href: "index.html#argumentieren", titel: "Zurück zur Übersicht", text: "Du hast alle fünf Module zum Argumentieren geschafft. In der Übersicht warten als Zusatz die Argumente-Duelle – und die Probe, sobald deine Lehrkraft sie freischaltet." }
});
