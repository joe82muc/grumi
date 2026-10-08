/* Deutsch 8 · Grammatik und Sprache · Modul 7: Sprache passt sich an
   (Leitfrage: Was passt zu wem und zu welcher Situation? Dieselbe Mitteilung als Chat, E-Mail und Telefongespräch;
   Jugendsprache (Soziolekt) und Regiolekt ohne Abwertung – M8 zusätzlich Dialekt und Abgrenzung der Begriffe;
   Fachsprache (Herkunft und Bedeutung von Fachbegriffen; M8: aus der Arbeitswelt); gesprochene und geschriebene Sprache
   (M8: Ellipsen, Kontextbindung); Sprache in E-Mail, Chat und sozialen Netzwerken; Schluss: eine Mitteilung für zwei
   Adressaten umformulieren)
   LehrplanPLUS D8 4.1 (Sprachvarietäten, Fachsprache, gesprochene und geschriebene Sprache, Sprache in digitalen Medien), 1.3.
   Texte: „Eine Absage – drei Fassungen“ (texte/sprache/absage-r.js und -m.js), „Wer spricht wie?“ / „Aylas Sprachtagebuch“
   (gruppen-r.js und -m.js), „In der Küche spricht man anders“ (kueche-r.js und -m.js) – alles erfunden.
   Die Dialektzeilen im M8-Text sind bairisch und allgemein bekannt; Mundart hat keine genormte Schreibweise. */
D7Kit.seite({
  id: "spr-01",
  titel: "Sprache passt sich an",
  einleitung: "Mit deinem besten Freund redest du anders als mit der Chefin im Betrieb. Das ist kein Zufall und kein Fehler. Heute untersuchst du, wie sich Sprache an Menschen, Orte und Situationen anpasst – und was jeweils passt.",
  zeit: "etwa 40 Minuten",
  ziele: ["👥 Ich erkenne, wie Gruppen und Regionen sprechen, ohne sie abzuwerten.", "🔧 Ich erkläre Fachwörter und ihre Herkunft.", "🗣️ Ich unterscheide gesprochene und geschriebene Sprache.", "📱 Ich wähle Ton und Wörter passend zu Adressat und Medium."],
  haupttext: { R: "spr-absage-r", M: "spr-absage-m" },
  quiz: { profi: "Sprach-Profi" },
  glossar: {
    adressat: ["Adressat", "Die Person, für die eine Nachricht gedacht ist. Nach ihr richtest du Wörter und Ton."],
    varietaet: ["Sprachvarietät", "Eine Form, in der eine Sprache gesprochen wird, zum Beispiel Jugendsprache, Regiolekt, Dialekt oder Standardsprache."],
    jugendsprache: ["Jugendsprache", "Die Sprache von Jugendlichen untereinander, mit eigenen Wörtern. Sie verändert sich schnell."],
    soziolekt: ["Soziolekt", "Die Sprache einer sozialen Gruppe, zum Beispiel von Jugendlichen oder einer Berufsgruppe."],
    regiolekt: ["Regiolekt", "Alltagssprache, die zwischen Dialekt und Standardsprache liegt und eine Region erkennen lässt (zum Beispiel an Wörtern wie „Semmel“)."],
    dialekt: ["Dialekt", "Die Mundart eines Ortes oder einer Landschaft. Aussprache, Wörter und Grammatik weichen deutlich von der Standardsprache ab."],
    standard: ["Standardsprache", "Die überall verständliche Sprache für Schule, Ämter, Beruf und Medien, mit ganzen Sätzen und den Regeln der Rechtschreibung."],
    fachsprache: ["Fachsprache", "Die genauen Wörter eines Berufs oder Fachgebiets, zum Beispiel „blanchieren“ in der Küche."],
    ellipse: ["Ellipse", "Ein Satz, in dem Teile fehlen, die man aus der Situation ergänzen kann: „Familienfeier.“ statt „Es ist eine Familienfeier.“"],
    kontext: ["Kontext", "Alles, was um eine Äußerung herum bekannt ist: die Situation, die Personen, das, was vorher gesagt wurde."]
  },
  stationen: [
    { kurz: "Absage", ober: "Lesen und untersuchen", titel: "Dieselbe Nachricht – dreimal anders", teile: [
      { art: "text", html: '<p class="lead">Jannis muss einen Kochkurs absagen. Er tut es im Chat, in einer E-Mail und am Telefon. Der Inhalt ist immer derselbe – aber an wen er sich wendet, ist es nicht. Lies die drei Fassungen und achte auf <button class="term" data-t="adressat">Adressat</button>, Wörter und Ton.</p>' },
      { art: "lesetext", lesetext: { R: "spr-absage-r", M: "spr-absage-m" } },
      { art: "mc", id: "ueber", tag: "Erster Überblick", fragen: [
        { q: "Was haben alle drei Fassungen gemeinsam?", o: ["Jannis sagt den Kochkurs ab und fragt nach einem Ersatztermin.", "Jannis meldet sich neu für den Kochkurs an.", "Jannis beschwert sich über die Kosten des Kochkurses."], a: 0, e: "Der Inhalt bleibt gleich: Absage wegen des Geburtstags der Großmutter und die Frage nach dem Dezember. Nur die Sprache ändert sich." },
        { q: "Warum klingt der Chat ganz anders als die E-Mail?", o: ["Jannis schreibt an einen Freund und an eine Gasthausleiterin und wählt die Sprache passend dazu.", "Jannis kann sich im Chat nicht in ganzen Sätzen ausdrücken.", "Im Chat ist es verboten, Wörter vollständig zu schreiben."], a: 0, e: "Es gibt keine Regel, die ganze Sätze im Chat verbietet. Jannis wählt für den Freund einen lockeren, für Frau Haslbeck einen höflichen Ton." },
      ] },
      { art: "sort", id: "ton", tag: "Sortieren", titel: "Chat mit dem Freund oder E-Mail an den Betrieb?", lead: "Welche Merkmale gehören zu welcher Fassung?", buckets: ["Chat mit dem Freund", "E-Mail an den Betrieb"], cols: 240, items: [
        { t: "alles kleingeschrieben und mit Emojis", b: 0 },
        { t: "„hä wieso??“ als Zwischenruf", b: 0 },
        { t: "Abkürzungen wie „vllt“ oder „dez“", b: 0 },
        { t: "Anrede „Sehr geehrte Frau Haslbeck,“", b: 1 },
        { t: "„Mit freundlichen Grüßen“ am Ende", b: 1 },
        { t: "höfliche Bitte: „Ich würde den Kurs gern nachholen.“", b: 1 }
      ], fertig: "✅ Richtig! Jede Fassung ist in ihrer Situation passend – das ist die Leitfrage dieses Moduls." },
      { art: "merke", kopf: "MERKE: Die Leitfrage", html: "<p><b>Was passt zu wem – und zu welcher Situation?</b></p><ul><li>Wer ist mein <b>Adressat</b>? Freund, Lehrkraft, Chefin, Fremde?</li><li>Wo spreche oder schreibe ich? Chat, E-Mail, Telefon, Schulhof, Betrieb?</li><li>Eine Sprechweise ist nicht gut oder schlecht, sondern <b>passend oder unpassend</b>.</li></ul>" }
    ] },
    { kurz: "Gruppen", ober: "Verstehen und sortieren", titel: "Jugendsprache, Regiolekt und mehr – ohne Abwertung", teile: [
      { art: "text", nur: "R", html: '<p class="lead">Ben spricht an einem Vormittag mit drei Menschen. Jedes Mal klingt er anders. Du lernst gleich drei Sprechweisen kennen: <button class="term" data-t="jugendsprache">Jugendsprache</button>, <button class="term" data-t="regiolekt">Regiolekt</button> und <button class="term" data-t="standard">Standardsprache</button>.</p>' },
      { art: "text", nur: "M", html: '<p class="lead">Ayla beobachtet einen Tag lang, wer wie spricht. Ihre Beobachtungen unterscheiden vier <button class="term" data-t="varietaet">Sprachvarietäten</button>: den <button class="term" data-t="soziolekt">Soziolekt</button> einer Gruppe (hier die <button class="term" data-t="jugendsprache">Jugendsprache</button>), den <button class="term" data-t="regiolekt">Regiolekt</button>, den <button class="term" data-t="dialekt">Dialekt</button> und die <button class="term" data-t="standard">Standardsprache</button>. Prüfe, ob du sie auseinanderhältst.</p>' },
      { art: "lesetext", lesetext: { R: "spr-gruppen-r", M: "spr-gruppen-m" } },
      { art: "beleg", id: "gruppen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-gruppen-r", fragen: [
        { q: "Wo benutzt Ben Wörter der Jugendsprache?", zeilen: [5, 5], e: "„Mega“, „gechillt“ und „gezockt“ sind Wörter, die Jugendliche untereinander benutzen.", tipp: "Suche die Szene an der Bushaltestelle." },
        { q: "Welcher Satz zeigt Wörter, die für die Gegend typisch sind?", zeilen: [11, 11], e: "„Semmeln“ und „Breze“ sind Wörter, die man in Bayern kennt. In anderen Gegenden sagt man etwa „Brötchen“.", tipp: "Achte auf die Bestellung in der Bäckerei." },
        { q: "Wo wird Ben besonders höflich?", zeilen: [14, 15], e: "„Dürfte ich …?“ ist eine höfliche Bitte. Ben spricht in ganzen Sätzen und siezt den Lehrer.", tipp: "Suche die Szene im Schulhaus." }
      ], hilfen: ["Jugendsprache steht in einem Gespräch unter Gleichaltrigen.", "Die Szene in der Bäckerei zeigt die Sprache der Gegend.", "Höflich ist, wer eine Bitte mit „Dürfte ich …?“ äußert."] },
      { art: "beleg", id: "gruppen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-gruppen-m", fragen: [
        { q: "Welche Zeilen grenzen den Regiolekt vom Dialekt und von der Standardsprache ab?", zeilen: [13, 14], e: "Der Regiolekt liegt „zwischen Dialekt und Standardsprache“ – er verrät die Region, ist aber weithin verständlich.", tipp: "Suche die Wendung „zwischen“." },
        { q: "Woran erkennt man laut Ayla den Dialekt?", zeilen: [24, 25], e: "Beim Dialekt weichen Aussprache, Wörter und sogar die Grammatik deutlich von der Standardsprache ab.", tipp: "Suche die Stelle über die Großmutter." },
        { q: "In welchen Zeilen beurteilt Ayla die Sprechweisen?", zeilen: [29, 31], e: "Ihr Urteil: Keine ist besser oder schlechter, entscheidend ist die Passung zu Zuhörern und Situation.", tipp: "Suche im Fazit." }
      ] },
      { art: "sort", id: "varietaet", nur: "R", tag: "Sortieren", titel: "Welche Sprechweise ist das?", buckets: ["Jugendsprache", "Regiolekt", "Standardsprache"], cols: 220, items: [
        { t: "Das Spiel gestern war echt krass.", b: 0 },
        { t: "Wir haben am Wochenende nur gechillt.", b: 0 },
        { t: "Ich hole uns noch Semmeln vom Bäcker.", b: 1 },
        { t: "Grüß Gott, Frau Maier!", b: 1 },
        { t: "Ich möchte gern einen Termin vereinbaren.", b: 2 },
        { t: "Entschuldigen Sie bitte die Verspätung.", b: 2 }
      ], fertig: "✅ Richtig sortiert!" },
      { art: "sort", id: "varietaet", nur: "M", tag: "Sortieren", titel: "Welche Sprechweise ist das?", buckets: ["Jugendsprache (Soziolekt)", "Regiolekt", "Dialekt", "Standardsprache"], cols: 200, items: [
        { t: "Das Spiel gestern war echt krass.", b: 0 },
        { t: "Wir haben am Wochenende nur gechillt.", b: 0 },
        { t: "Ich hole uns noch Semmeln vom Bäcker.", b: 1 },
        { t: "Grüß Gott, Frau Maier!", b: 1 },
        { t: "Des passt scho.", b: 2 },
        { t: "I woaß des ned.", b: 2 },
        { t: "Ich möchte gern einen Termin vereinbaren.", b: 3 },
        { t: "Entschuldigen Sie bitte die Verspätung.", b: 3 }
      ], fertig: "✅ Richtig! Der Regiolekt versteht fast jeder, der Dialekt ist stärker an einen Ort gebunden." },
      { art: "mc", id: "wert", tag: "Beurteilen", fragen: [
        { q: "Ein Mitschüler sagt: „Jugendsprache ist falsches Deutsch.“ Was stimmt?", o: ["Sie ist nicht falsch, sondern eine Sprache für Gleichaltrige und passt nur nicht überall.", "Sie ist falsch und sollte in der Schule verboten werden.", "Sie ist besser als die Standardsprache, weil sie moderner ist."], a: 0, e: "Jugendsprache ist eine eigene Varietät. Im Gespräch unter Freunden passt sie, in einer Bewerbung nicht." }
      ] },
      { art: "mc", id: "wert2", m7: true, tag: "Beurteilen", fragen: [
        { q: "Warum wirkt „Mega, Frau Aigner!“ im Sekretariat unpassend, obwohl es nicht falsch ist?", o: ["Das Wort gehört zur Gruppensprache der Jugendlichen; im Gespräch mit Erwachsenen im Amt erwartet man Standardsprache.", "Das Wort „mega“ ist grammatisch falsch und kann deshalb nirgends verwendet werden.", "Frau Aigner versteht kein Deutsch, weil sie aus einer anderen Region kommt."], a: 0, e: "Unpassend heißt nicht fehlerhaft: Die Varietät passt nicht zu Adressatin und Ort. Wer die Wahl kennt, kann bewusst wechseln." }
      ] }
    ] },
    { kurz: "Fachsprache", ober: "Untersuchen", titel: "Fachsprache: genau, kurz – und manchmal geliehen", teile: [
      { art: "text", html: '<p class="lead">In vielen Berufen redet man in einer eigenen <button class="term" data-t="fachsprache">Fachsprache</button>. Jannis steht zum ersten Mal in der Küche des Gasthauses – und versteht kaum ein Wort. Lies, was die Fachwörter bedeuten und woher manche kommen.</p>' },
      { art: "lesetext", lesetext: { R: "spr-kueche-r", M: "spr-kueche-m" } },
      { art: "beleg", id: "fach", nur: "R", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-kueche-r", fragen: [
        { q: "Wo wird erklärt, aus welcher Sprache „blanchieren“ stammt?", zeilen: [7, 8], e: "Das Wort kommt aus dem Französischen: „blanchir“ heißt „weiß machen“.", tipp: "Suche das Wort „Französischen“." },
        { q: "Wo steht, dass „abschrecken“ in der Küche etwas anderes bedeutet als im Alltag?", zeilen: [10, 12], e: "Im Alltag heißt es „jemanden abhalten“, in der Küche: heißes Gemüse mit eiskaltem Wasser übergießen.", tipp: "Suche die Frage „Und abschrecken?“." },
        { q: "In welchen Zeilen erklärt Frau Haslbeck, warum es Fachwörter gibt?", zeilen: [19, 21], e: "Ein Fachwort ersetzt einen ganzen Satz – und jeder Koch weiß, was gemeint ist.", tipp: "Suche die Antwort auf die Frage „Warum sagt ihr das nicht …“." }
      ], hilfen: ["Eine Herkunftsangabe erkennst du an „kommt aus“ oder „stammt aus“.", "Die Erklärung steht gleich nach Jannis’ Rückfrage.", "Der Grund steht nach dem Wort „Weil“."] },
      { art: "beleg", id: "fach", nur: "M", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-kueche-m", fragen: [
        { q: "Wo wird ein Alltagswort beschrieben, das in der Küche eine neue Bedeutung bekommen hat?", zeilen: [20, 22], e: "„Abschrecken“ heißt im Alltag „jemanden abhalten“, in der Küche „mit kaltem Wasser übergießen“.", tipp: "Suche das Wort „abschreckt“." },
        { q: "In welchen Zeilen begründet Dario den Nutzen der Fachsprache?", zeilen: [29, 31], e: "Ein Fachwort ersetzt einen ganzen Satz und lässt keinen Zweifel daran, was zu tun ist.", tipp: "Suche Darios Antwort auf Jannis’ Frage." }
      ] },
      { art: "paare", id: "wort", nur: "R", tag: "Zuordnen", titel: "Fachwort und Bedeutung", paare: [
        ["blanchieren", "kurz in kochendes Wasser geben"],
        ["abschrecken", "heißes Gemüse mit eiskaltem Wasser übergießen"],
        ["anschwitzen", "in wenig Fett erhitzen, ohne dass es braun wird"],
        ["binden", "mit Mehl oder Stärke dicker machen"],
        ["Kerntemperatur", "Temperatur in der Mitte eines Bratens"]
      ] },
      { art: "paare", id: "wort", nur: "M", tag: "Zuordnen", titel: "Fachwort, Herkunft und Bedeutung", paare: [
        ["Mise en place", "französisch, etwa „an den Platz gestellt“: alles bereitstellen"],
        ["blanchieren", "französisch „blanchir“ (weiß machen): kurz überbrühen"],
        ["reduzieren", "lateinisch „zurückführen“: Sauce einkochen"],
        ["ablöschen", "Flüssigkeit zu Angebratenem gießen"],
        ["abschrecken", "Alltagswort mit neuer Bedeutung: kalt übergießen"]
      ] },
      { art: "mc", id: "warum", tag: "Beurteilen", fragen: [
        { q: "Warum ist Fachsprache im Betrieb nützlich?", o: ["Ein Fachwort sagt kurz und genau, was zu tun ist.", "Fachwörter klingen vornehmer als normale Wörter.", "Die Gäste sollen nicht verstehen, was in der Küche passiert."], a: 0, e: "Fachsprache spart Zeit und verhindert Missverständnisse – aber nur unter Kollegen. Für Gäste übersetzt man." }
      ] },
      { art: "offen", id: "gast", nur: "M", m7: true, tag: "Selbst formulieren", titel: "Für Gäste übersetzt", fragen: [
        { q: "Eine Gästin fragt, was „reduzieren“ bedeutet. Erkläre es ihr in ein bis zwei Sätzen in Alltagssprache, ohne das Fachwort zu benutzen.", m: "Man kocht die Sauce so lange ohne Deckel, bis ein Teil des Wassers verdampft ist. Dann wird sie dicker und schmeckt kräftiger.", k: ["koch|einkoch|erhitz|köchel", "verdampf|dicker|kräftig|weniger|wasser|flüssigkeit|einge"], min: 2 }
      ], tipp: "Erkläre, was mit der Sauce passiert und warum sie danach anders schmeckt.", hilfen: ["Denke an das Wasser in der Sauce: Wohin geht es beim Kochen?", "Beginne mit „Man kocht die Sauce so lange, bis …“."] },
      { art: "merke", kopf: "MERKE: Fachsprache", html: '<ul><li><button class="term" data-t="fachsprache">Fachwörter</button> sind <b>genau und kurz</b> – unter Fachleuten.</li><li>Manche sind <b>geliehen</b> (zum Beispiel aus dem Französischen), andere sind <b>Alltagswörter mit neuer Bedeutung</b> (abschrecken).</li><li>Für Außenstehende gilt: <b>erklären oder übersetzen.</b></li></ul>' }
    ] },
    { kurz: "Gesprochen", ober: "Vergleichen", titel: "Gesprochen und geschrieben", teile: [
      { art: "text", html: "<p>Zurück zu Jannis’ Absage. Am Telefon wirkt seine Sprache anders als in der E-Mail, obwohl er höflich bleibt. Gesprochene Sprache entsteht beim Sprechen, man kann nachfragen und sich verbessern. Geschriebene Sprache kann man vor dem Absenden überarbeiten.</p>" },
      { art: "sort", id: "gesch", tag: "Sortieren", titel: "Gesprochen oder geschrieben?", buckets: ["typisch gesprochen", "typisch geschrieben"], cols: 240, items: [
        { t: "Zögern und Füllwörter wie „äh“ und „also“", b: 0 },
        { t: "Nachfragen und Antworten im Wechsel", b: 0 },
        { t: "unvollständige Sätze, die man aus dem Gespräch versteht", b: 0 },
        { t: "ein Betreff, der den Inhalt zusammenfasst", b: 1 },
        { t: "sorgfältig geordnete Sätze, die man vor dem Absenden überarbeitet", b: 1 },
        { t: "Absätze und eine feste Schlussformel", b: 1 }
      ] },
      { art: "beleg", id: "gespr", nur: "R", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-absage-r", fragen: [
        { q: "Wo zögert Jannis, wie man es nur im Gespräch tut?", zeilen: [22, 23], e: "„Äh“ ist ein Zögern. In einer E-Mail würde man es streichen.", tipp: "Suche die erste Antwort von Jannis am Telefon." },
        { q: "Welche Stelle ist ein typischer Gesprächsabschluss am Telefon?", zeilen: [32, 32], e: "„Auf Wiederhören!“ sagt man nur am Telefon, in der E-Mail steht „Mit freundlichen Grüßen“.", tipp: "Achte auf den letzten Satz." },
      ], hilfen: ["Zögern steht oft am Satzanfang.", "Ein Abschied am Telefon ist kurz."] },
      { art: "beleg", id: "gespr", nur: "M", tag: "Textstellen finden", titel: "Wo steht das?", lesetext: "spr-absage-m", fragen: [
        { q: "Wo benutzt Jannis einen Satz ohne Subjekt und Verb, den man nur im Gespräch versteht?", zeilen: [30, 31], e: "„Familienfeier.“ ist eine Ellipse: Gemeint ist „Es ist eine Familienfeier.“ Die Situation liefert den Rest.", tipp: "Suche die Antwort aus nur einem Wort." },
        { q: "Welche Äußerung versteht nur, wer das vorige Gespräch kennt?", zeilen: [34, 34], e: "„Ja, genau den meinte ich.“ bezieht sich auf „der im Dezember“ – ohne diesen Kontext bleibt unklar, was „den“ ist.", tipp: "Frage dich: Worauf bezieht sich „den“?" },
      ] },
      { art: "mc", id: "tel", nur: "R", tag: "Genau hinsehen", fragen: [
        { q: "Was ist am Telefon leichter als in einer E-Mail?", o: ["Man kann sofort nachfragen und sich verbessern.", "Man kann den Text mehrmals überarbeiten.", "Man kann einen Betreff schreiben."], a: 0, e: "Im Gespräch klärt man Missverständnisse sofort. Beim Schreiben muss der Text für sich allein verständlich sein." }
      ] },
      { art: "offen", id: "ellipse", nur: "M", m7: true, tag: "Selbst formulieren", titel: "Ellipse und Kontext", fragen: [
        { q: "Jannis sagt am Telefon: „Um den Kochkurs. Da kann ich leider nicht. Familienfeier.“ Ergänze, was fehlt, und erkläre, warum man das im Gespräch trotzdem versteht.", m: "Es fehlt zum Beispiel: Es ist eine Familienfeier. Man versteht es, weil die Situation und das Gespräch davor klar machen, worum es geht, und weil man nachfragen kann.", k: ["fehlt|fehlen|weggelassen|ausgelassen|ergänz|unvollständig|ellips", "situation|kontext|zusammenhang|nachfrag|versteh|vorher|klar"], min: 2 }
      ], tipp: "Überlege, welche Wörter in jedem der drei Sätze ausgelassen sind – und was beide Gesprächspartner schon wissen.", hilfen: ["Zu „Familienfeier.“: Welche Wörter fehlen für einen vollständigen Satz?", "Warum muss Frau Haslbeck nicht nachfragen, was gemeint ist?"] }
    ] },
    { kurz: "Medien", ober: "Üben und selbst formulieren", titel: "Chat, E-Mail und soziale Netzwerke", teile: [
      { art: "text", html: "<p>Jedes Medium hat andere Leser. Ein <b>Chat</b> unter Freunden ist privat und schnell. Eine <b>E-Mail</b> braucht Anrede, Betreff und Gruß. In <b>sozialen Netzwerken</b> lesen oft auch Fremde mit – und ein Beitrag kann lange sichtbar bleiben. Deshalb überlegst du vor dem Absenden: Wer liest das?</p>" },
      { art: "mc", id: "medium", tag: "Passt das?", fragen: [
        { q: "Welche Anrede passt in eine E-Mail an einen Praktikumsbetrieb?", o: ["Sehr geehrte Frau Berger,", "Hi Frau Berger,", "Hallo ihr da,"], a: 0, e: "Gegenüber einem Betrieb ist eine förmliche Anrede üblich. „Hi“ passt zu Freunden." },
        { q: "Du willst in einem öffentlichen Beitrag in einem sozialen Netzwerk schreiben, dass der Kochkurs toll war. Was bedenkst du?", o: ["Auch Fremde können den Beitrag lesen, und er bleibt oft lange sichtbar.", "Es lesen nur meine Freunde mit, und der Beitrag verschwindet nach einem Tag.", "In öffentlichen Beiträgen gelten keine Regeln für die Wortwahl."], a: 0, e: "Öffentliche Beiträge erreichen viele Menschen. Ton und Wortwahl sollten auch zu Fremden passen." }
      ] },
      { art: "markieren", id: "mail", tag: "Markieren", titel: "Was passt nicht in diese E-Mail?", lead: "Tim schreibt an seinen Praktikumsbetrieb. Tippe die vier Stellen an, die dort nicht passen.", satz: "[[Hi Frau Berger]], ich bin am Montag [[voll krank]] und [[kann nich kommen]]. Ich melde mich am Dienstag wieder bei Ihnen. [[LG]] Tim", finde: "die vier unpassenden Stellen", e: "Anrede, Umgangswort, Abkürzung und der Schluss „LG“ sind Chat-Ton. Förmlich wären: „Sehr geehrte Frau Berger“, „erkrankt“, „kann ich leider nicht kommen“, „Mit freundlichen Grüßen“." },
      { art: "schreiben", id: "umformulieren", nur: "R", tag: "Schreibtrainer", titel: "Eine Mitteilung für zwei Adressaten", min: 40,
        auftrag: "<p><b>Mitteilung:</b> Der Wandertag beginnt wegen angekündigten Regens nicht um 8 Uhr, sondern erst um 9 Uhr. Treffpunkt bleibt der Haupteingang der Schule.</p><p>Schreibe diese Mitteilung <b>zweimal</b>: (1) als kurze Chat-Nachricht an einen Mitschüler und (2) als E-Mail an die Eltern.</p>",
        kriterien: ["Beide Fassungen nennen die neue Uhrzeit und den Treffpunkt.", "Die Chat-Nachricht ist kurz und locker.", "Die E-Mail hat Anrede und Gruß.", "Die E-Mail ist höflich und besteht aus ganzen Sätzen."],
        starter: ["Chat: Hi, der Wandertag …", "E-Mail: Sehr geehrte Eltern, …"], hilfen: ["Notiere zuerst: Was muss jeder wissen? (Uhrzeit, Treffpunkt)", "Schreibe erst den Chat, dann die E-Mail – und ändere Anrede, Satzbau und Wörter."] },
      { art: "schreiben", id: "umformulieren", nur: "M", tag: "Schreibtrainer", titel: "Eine Mitteilung für zwei Adressaten", min: 70,
        auftrag: "<p><b>Mitteilung:</b> Der Wandertag beginnt wegen angekündigten Regens nicht um 8 Uhr, sondern erst um 9 Uhr. Das Busunternehmen muss den Abholtermin ändern, der Treffpunkt bleibt der Haupteingang der Schule.</p><p>Schreibe diese Mitteilung <b>zweimal</b>: (1) als Nachricht im Klassenchat und (2) als E-Mail an das Busunternehmen mit der Bitte um Bestätigung. Erkläre danach in ein bis zwei Sätzen, welche sprachlichen Mittel (Anrede, Satzbau, Wortwahl) du verändert hast und warum.</p>",
        kriterien: ["Beide Fassungen enthalten die Änderung, den neuen Termin und den Treffpunkt.", "Die Nachricht im Klassenchat ist knapp und passt zu Gleichaltrigen.", "Die E-Mail ist förmlich: Betreff, Anrede, Bitte um Bestätigung, Gruß.", "Die Erklärung benennt mindestens zwei sprachliche Unterschiede."],
        starter: ["Klassenchat: Wichtig, der Wandertag …", "E-Mail: Sehr geehrte Damen und Herren, …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", titel: "Kurz gesichert", aussagen: [
        ["Eine Sprechweise ist nicht gut oder schlecht, sondern passend oder unpassend.", true],
        ["Jugendsprache ist falsches Deutsch.", false],
        ["Ein Regiolekt lässt die Region erkennen, ist aber weithin verständlich.", true],
        ["Fachwörter sind unter Fachleuten genau und kurz.", true],
        ["In einer E-Mail an einen Betrieb passt die Anrede „Hi“.", false],
        ["Wer in einem öffentlichen Beitrag schreibt, sollte bedenken, dass auch Fremde mitlesen.", true]
      ] }
    ] }
  ],
  weiter: { href: "spr_02.html", titel: "Wörter und ihre Wirkung", text: "Du weißt jetzt, wie Sprache zu Menschen und Situationen passt. Im nächsten Modul geht es um die einzelnen Wörter: Wie sie sich verwandeln, was sie bedeuten – und wie sie wirken." }
});
