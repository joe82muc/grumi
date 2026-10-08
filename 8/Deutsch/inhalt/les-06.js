/* Deutsch 8 · Lesen, Sachtexte und Medien · Modul 6: Medien prüfen: Wem kann ich trauen?
   (fünf Prüffragen: Wer schreibt? Welche Quelle? Von wann? Welche Belege? Welche Absicht?; seriöse und unseriöse Quellen
   unterscheiden; sachliche und reißerische Schlagzeilen; Wirkungsabsichten informieren – unterhalten – beeinflussen
   (M8: Manipulation, Infotainment); Wirklichkeit und Erfindung; Zusatz: Duell gegen die KI)
   LehrplanPLUS D8 2.4 (Wirkungsabsichten und Gestaltungsmittel – M8: Unterhaltung, Information, Manipulation; Vermischung von
   Realität und Fiktion beurteilen – M8: z. B. Infotainment; digitale Medien und soziale Netzwerke verantwortungsbewusst nutzen),
   2.1 (Textaussagen belegen), 2.3 (Intention erkennen).
   Texte: Kettennachricht „Schule bleibt geschlossen“ (texte/lesen/kettennachricht-schule.js), Bericht „Die Nachricht, die nicht
   stimmte“ (texte/lesen/falschnachricht-r.js/-m.js). Alle Beispiele – Schule, Ort, Personen, Internetseiten, Schlagzeilen – sind
   erfunden; die Adressen enden auf „.example“ (diese Endung gibt es im Netz nicht). Keine politischen Streitthemen. */
D7Kit.seite({
  id: "les-06",
  titel: "Medien prüfen: Wem kann ich trauen?",
  einleitung: "„Morgen schulfrei – sofort weiterleiten!“ Klingt gut. Aber stimmt es auch? Heute lernst du fünf Prüffragen kennen, mit denen du Nachrichten, Schlagzeilen und Internetseiten einschätzt. Zum Schluss kannst du gegen die KI antreten.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔎 Ich prüfe eine Nachricht mit fünf Fragen: Wer? Quelle? Datum? Belege? Absicht?", "📰 Ich unterscheide seriöse und unseriöse Quellen.", "🎯 Ich erkenne, ob etwas informieren, unterhalten oder beeinflussen will.", "🎭 Ich halte Wirklichkeit und Erfindung auseinander."],
  quiz: { profi: "Medien-Profi" },
  glossar: {
    kettennachricht: ["Kettennachricht", "Eine Nachricht, die dazu auffordert, sie an möglichst viele weiterzuschicken – oft mit Druck oder mit einem Versprechen."],
    quelle: ["Quelle", "Die Stelle, von der eine Information stammt: eine Person, eine Behörde, ein Dokument. Eine gute Quelle lässt sich nachprüfen."],
    beleg: ["Beleg", "Etwas, das eine Behauptung stützt: ein Foto, ein Dokument, eine Zahl mit Quelle oder eine zweite, unabhängige Quelle."],
    impressum: ["Impressum", "Die Angabe, wer für eine Internetseite oder eine Zeitung verantwortlich ist – mit Name und Anschrift."],
    serioes: ["seriös", "Vertrauenswürdig: Verfasser, Quellen und Datum sind angegeben, Fehler werden berichtigt."],
    reisserisch: ["reißerisch", "Auf Aufsehen angelegt: Großbuchstaben, Ausrufezeichen und Übertreibungen statt genauer Angaben."],
    satire: ["Satire", "Ein absichtlich übertriebener oder erfundener Beitrag, der zum Lachen und zum Nachdenken bringen soll."],
    infotainment: ["Infotainment", "Mischung aus Information und Unterhaltung, zum Beispiel eine Wissenssendung mit Spielszenen und Musik."],
    manipulation: ["Manipulation", "Jemand beeinflusst andere gezielt, ohne dass sie es merken sollen – zum Beispiel durch Druck, durch Weglassen oder durch Übertreiben."]
  },
  stationen: [
    { kurz: "Kettennachricht", ober: "Ausprobieren", titel: "Schulfrei – oder doch nicht?", teile: [
      { art: "text", html: "<p class=\"lead\">Sonntagabend. In deinem Klassenchat taucht diese Nachricht auf. Sie ist für dieses Modul erfunden – aber solche <button class=\"term\" data-t=\"kettennachricht\">Kettennachrichten</button> gibt es wirklich. Lies sie genau. Würdest du sie weiterleiten?</p>" },
      { art: "lesetext", lesetext: "les-kette-schule" },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Was soll man nach dem Lesen der Nachricht vor allem tun?", o: ["sie sofort an andere weiterleiten", "bei der Schule nachfragen", "die Eltern informieren"], a: 0, e: "„BITTE SOFORT WEITERLEITEN“, „Schick das JETZT …“ – darum geht es der Nachricht vor allem." },
        { q: "Welche Angabe fehlt in der Nachricht?", o: ["wer sie geschrieben hat", "warum die Schule geschlossen sein soll", "an wen man sie schicken soll"], a: 0, e: "Ein Grund (Wasserrohr) und ein Auftrag (an alle aus deiner Klasse) stehen da. Ein Name fehlt – und übrigens auch ein Datum." }
      ] }
    ] },
    { kurz: "Prüffragen", ober: "Lesen und verstehen", titel: "Fünf Fragen an jede Nachricht", teile: [
      { art: "text", html: "<p>An der Mittelschule Erlenbrück hat genau diese Nachricht die Runde gemacht. Schule, Ort und Personen sind erfunden. Die Schülerzeitung berichtet, wie Jule aus der 8b der Nachricht auf die Spur kam.</p>" },
      { art: "lesetext", lesetext: { R: "les-falsch-r", M: "les-falsch-m" } },
      { art: "beleg", id: "pruef", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "les-falsch-r", fragen: [
        { q: "In welchen Zeilen erfährst du, woran Jule merkt, dass ihr Mitschüler die Nachricht nicht selbst geschrieben hat?", zeilen: [9, 10], e: "Über dem Text steht „Weitergeleitet“. Wer geschickt hat, ist also nicht der Verfasser.", tipp: "Lies den Abschnitt „Wer schreibt?“." },
        { q: "In welchen Zeilen steht, was Jule auf der Internetseite der Schule findet?", zeilen: [16, 18], e: "Nichts von einem Wasserschaden, und der Vertretungsplan ist normal. Die Schule selbst ist die verlässlichste Quelle.", tipp: "Suche das Wort „Vertretungsplan“." },
        { q: "In welchen Zeilen sagt die Rektorin, woher wichtige Mitteilungen wirklich kommen?", zeilen: [40, 41], e: "Von der Schule selbst – nie über eine Kettennachricht.", tipp: "Lies den letzten Abschnitt und suche die Anführungszeichen." }
      ], hilfen: ["Die Zwischenüberschriften helfen dir. Überlege zuerst: Unter welcher steht die Antwort?", "Wörtliche Rede erkennst du an den Anführungszeichen."] },
      { art: "beleg", id: "pruef", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "les-falsch-m", fragen: [
        { q: "In welchen Zeilen erklärt der Text, warum sich Nachrichten ohne Datum immer wieder verbreiten lassen?", zeilen: [25, 27], e: "„Morgen“ stimmt an jedem Tag, an dem jemand die Nachricht liest. Ohne Datum veraltet sie nie.", tipp: "Suche das Wort „Datum“." },
        { q: "In welchen Zeilen deutet der Text, wozu die Beteuerung „KEIN Scherz“ dienen soll?", zeilen: [32, 34], e: "Sie soll „einen Beweis ersetzen …, statt ihn zu liefern“: Wer laut versichert, hat oft nichts in der Hand.", tipp: "Suche die Großbuchstaben." },
        { q: "In welchen Zeilen begründet der Text, warum gerade eine erfreuliche Falschnachricht schwer zu durchschauen ist?", zeilen: [41, 43], e: "„Was man sich wünscht, glaubt man leichter.“ Deshalb lohnt sich das Prüfen gerade dann, wenn eine Nachricht zu schön klingt.", tipp: "Lies den Absatz zur fünften Frage bis zum Ende." }
      ] },
      { art: "paare", id: "fragen", tag: "Zuordnen", titel: "Was hat Jule herausgefunden?", lead: "Tippe links eine Prüffrage an und rechts das, was Jule dazu festgestellt hat.", paare: [
        ["Wer schreibt?", "kein Name, nur „Weitergeleitet“"],
        ["Welche Quelle?", "ein Onkel, den niemand kennt"],
        ["Von wann?", "nur „morgen“, kein Datum"],
        ["Welche Belege?", "kein Foto, kein Schreiben"],
        ["Welche Absicht?", "Druck: schnell weiterleiten"]
      ] },
      { art: "merke", kopf: "MERKE: Fünf Prüffragen", html: "<ol><li><b>Wer schreibt?</b> Gibt es einen Namen, eine Redaktion, ein <button class=\"term\" data-t=\"impressum\">Impressum</button>?</li><li><b>Welche <button class=\"term\" data-t=\"quelle\">Quelle</button>?</b> Woher stammt die Information – und lässt sich das nachprüfen?</li><li><b>Von wann?</b> Steht ein Datum dabei? Ist die Nachricht noch aktuell?</li><li><b>Welche <button class=\"term\" data-t=\"beleg\">Belege</button>?</b> Fotos, Dokumente, Zahlen mit Quelle – oder eine zweite Stelle, die dasselbe berichtet?</li><li><b>Welche Absicht?</b> Will der Text informieren, unterhalten – oder dich zu etwas bringen?</li></ol><p>Im Zweifel gilt: <b>erst prüfen, dann weiterleiten</b> – oder gar nicht.</p>" },
      { art: "beleg", id: "kette", tag: "Prüffragen anwenden", titel: "Jetzt du: Wo stecken die Warnzeichen?", lesetext: "les-kette-schule", fragen: [
        { q: "In welcher Zeile setzt dich die Nachricht gleich am Anfang mit Großbuchstaben unter Zeitdruck?", zeilen: [1, 1], nur: "R", e: "„SOFORT“ – wer es eilig hat, prüft nicht. Genau das soll erreicht werden.", tipp: "Sieh dir die erste Zeile an." },
        { q: "In welchen Zeilen nennt die Nachricht eine Quelle, die niemand überprüfen kann?", zeilen: [5, 6], e: "Eine Freundin, deren Onkel beim Schulamt arbeitet: keine Namen, keine Möglichkeit nachzufragen.", tipp: "Suche die Stelle, an der steht, woher der Verfasser die Neuigkeit haben will." },
        { q: "In welchen Zeilen erklärt die Nachricht vorsorglich, warum man von der Schule selbst noch nichts gehört hat?", zeilen: [6, 7], nur: "M", e: "Die Schule wolle es angeblich erst morgen bekannt geben. So soll der naheliegende Einwand – „Davon steht nirgends etwas“ – schon im Voraus entkräftet werden.", tipp: "Welcher Satz macht es unnötig, bei der Schule nachzusehen?" },
        { q: "In welchen Zeilen macht dir die Nachricht ein schlechtes Gewissen, falls du sie nicht weiterleitest?", zeilen: [8, 10], e: "Wer nicht weiterleitet, sei „schuld“ – das ist Druck, keine Information.", tipp: "Lies den letzten Absatz." }
      ] }
    ] },
    { kurz: "Quellen", ober: "Anwenden", titel: "Seriös oder unseriös?", teile: [
      { art: "text", html: "<p>Angenommen, in Erlenbrück wäre wirklich ein Wasserrohr geplatzt. Zwei Internetseiten berichten darüber. Welche ist <button class=\"term\" data-t=\"serioes\">seriös</button>? Vergleiche die beiden Steckbriefe.</p>" },
      { art: "material", tag: "Steckbriefe", daten: { typ: "tabelle", titel: "Zwei Internetseiten im Vergleich", kopf: ["Prüfpunkt", "Seite A", "Seite B"], reihen: [
        ["Adresse", "erlenbruecker-bote.example", "mega-news-24.example"],
        ["Wer steckt dahinter?", "Impressum mit Redaktion, Anschrift und Namen", "kein Impressum, nur ein Kontaktformular"],
        ["Wer hat den Beitrag geschrieben?", "Name der Autorin steht über dem Text", "kein Name"],
        ["Datum", "Tag und Uhrzeit, dazu der Hinweis „aktualisiert“", "kein Datum"],
        ["Quellen", "Polizei und Stadtverwaltung werden genannt", "„Insider berichten“"],
        ["Überschrift", "Wasserrohrbruch: Turnhalle zwei Tage gesperrt", "SCHOCK!!! Schule versinkt im Wasser – das verschweigt man dir"],
        ["Werbung", "als „Anzeige“ gekennzeichnet", "Gewinnspiele mitten im Text, nicht gekennzeichnet"],
        ["Fehler", "Berichtigungen stehen unter dem Text", "keine Angabe"]
      ], hinweis: "Beide Seiten und ihre Adressen sind erfunden." } },
      { art: "mc", id: "seite", tag: "Steckbriefe auswerten", fragen: [
        { q: "Welche Angabe zeigt am deutlichsten, wer für Seite A verantwortlich ist?", o: ["das Impressum mit Redaktion und Anschrift", "die Überschrift über dem Beitrag", "die gekennzeichnete Werbung"], a: 0, e: "Im Impressum steht, wer hinter einer Seite steht. Fehlt es, kann sich niemand an jemanden wenden, wenn etwas nicht stimmt." },
        { q: "Seite B beruft sich auf „Insider“. Was ist daran das Problem?", o: ["Niemand kann nachprüfen, wer das ist und ob es stimmt.", "Insider wissen immer mehr als Polizei und Stadt.", "Das Wort stammt aus dem Englischen und ist ungenau."], a: 0, e: "Eine Quelle ohne Namen ist wie der „Onkel beim Schulamt“: Sie klingt wichtig, lässt sich aber nicht prüfen." },
        { q: "Seite A berichtigt Fehler und schreibt das dazu. Was zeigt das?", o: ["Der Seite ist wichtig, dass ihre Angaben stimmen.", "Die Seite macht besonders viele Fehler.", "Die Seite will von ihrer Werbung ablenken."], a: 0, e: "Fehler passieren überall. Seriös ist, wer sie offen berichtigt, statt sie stillschweigend stehen zu lassen." }
      ] },
      { art: "mc", id: "seiteabs", m7: true, tag: "Absicht beurteilen", fragen: [
        { q: "Seite B verzichtet auf Impressum, Datum und Quellen, füllt den Text aber mit Gewinnspielen. Welche Absicht ist am wahrscheinlichsten?", o: ["Sie will Klicks und Teilnehmer gewinnen – die Meldung ist nur der Köder.", "Sie will so genau wie möglich über den Rohrbruch informieren.", "Sie will ihre Leser mit einer erfundenen Geschichte unterhalten."], a: 0, e: "Reißerische Überschrift, keine Quellen, versteckte Werbung: Hier steht nicht die Information im Mittelpunkt. Wer die Absicht erkennt, weiß, wie viel er dem Text glauben darf." }
      ] },
      { art: "text", html: "<p>Oft verrät schon die Überschrift, womit du es zu tun hast. Eine sachliche Schlagzeile sagt, was geschehen ist. Eine <button class=\"term\" data-t=\"reisserisch\">reißerische</button> will vor allem, dass du klickst.</p>" },
      { art: "sort", id: "schlag", tag: "Sortieren", titel: "Sachlich oder reißerisch?", lead: "Alle Schlagzeilen sind erfunden.", buckets: ["sachlich", "reißerisch"], cols: 240, items: [
        { t: "Wasserrohrbruch: Turnhalle bleibt zwei Tage gesperrt", b: 0 },
        { t: "Neue Buslinie fährt ab Montag jede halbe Stunde", b: 0 },
        { t: "Kino am Marktplatz zeigt ab Freitag Jugendfilme", b: 0 },
        { t: "Polizei warnt vor gefälschten Gewinnspielen im Netz", b: 0 },
        { t: "SCHOCK!!! Schule versinkt im Wasser – das verschweigt man dir", b: 1 },
        { t: "Unfassbar! Dieser geheime Trick macht dich über Nacht zum Mathe-Genie", b: 1 },
        { t: "Alle reden darüber: Wundergetränk lässt Pickel in drei Stunden verschwinden", b: 1 },
        { t: "Skandal im Tierpark? Was Besucher dort sahen, macht sprachlos", b: 1 }
      ] },
      { art: "markieren", id: "reiss", tag: "Genau hinsehen", titel: "Welche Wörter machen die Schlagzeile reißerisch?", satz: "[[Unfassbar]]! Dieser [[geheime]] Trick hilft [[garantiert]] jedem Schüler bei den Vokabeln.", finde: "die drei Wörter, die Aufsehen erregen sollen, aber nichts belegen", e: "„Unfassbar“, „geheim“ und „garantiert“ versprechen viel. Welcher Trick das ist und woher man weiß, dass er hilft, erfährst du nicht." }
    ] },
    { kurz: "Wirkung", ober: "Beurteilen", titel: "Informieren, unterhalten – oder beeinflussen?", teile: [
      { art: "karten", tag: "Drei Absichten", titel: "Was Medien bei dir erreichen wollen", karten: [
        { ic: "📰", titel: "informieren", text: "Tatsachen, Quellen, Datum – du sollst etwas <b>wissen</b>." },
        { ic: "🎭", titel: "unterhalten", text: "Witz, Spannung, Erfundenes – du sollst <b>Spaß haben</b>." },
        { ic: "🎯", titel: "beeinflussen", text: "Du sollst etwas <b>tun oder glauben</b>: kaufen, klicken, weiterleiten." }
      ] },
      { art: "sort", id: "absicht", tag: "Sortieren", titel: "Was will der Beitrag vor allem?", lead: "Alle Beispiele sind erfunden.", buckets: ["informieren", "unterhalten", "beeinflussen"], cols: 200, items: [
        { t: "Vertretungsplan auf der Internetseite der Schule", b: 0 },
        { t: "Meldung der Polizei mit Datum und Ansprechpartner", b: 0 },
        { t: "Witzige Bildergeschichte in der Schülerzeitung", b: 1 },
        { t: "Scherzmeldung „Rektorin verbietet Montage“, als Satire gekennzeichnet", b: 1 },
        { t: "Kettennachricht: „Leite das weiter, sonst bist du schuld!“", b: 2 },
        { t: "Video, in dem jemand ein Getränk lobt und dafür bezahlt wird", b: 2 }
      ] },
      { art: "merke", kopf: "MERKE: Wenn sich die Absichten mischen", html: "<ul><li><button class=\"term\" data-t=\"satire\">Satire</button> erfindet mit Absicht – und sagt das meist dazu. Wer nur die Überschrift weiterleitet, macht daraus eine Falschmeldung.</li><li>Bezahlte Beiträge müssen als „Anzeige“ oder „Werbung“ gekennzeichnet sein.</li><li><button class=\"term\" data-t=\"infotainment\">Infotainment</button> verpackt Wissen unterhaltsam: mit Musik, Spielszenen und schnellen Schnitten. Frage dich: Was ist belegt, was ist nur in Szene gesetzt?</li><li>Wird die Absicht versteckt oder Druck gemacht, spricht man von <button class=\"term\" data-t=\"manipulation\">Manipulation</button>.</li></ul>" },
      { art: "mc", id: "echt", tag: "Wirklichkeit oder Erfindung?", fragen: [
        { q: "Jemand schickt dir nur die Überschrift „Rektorin verbietet Montage“. Auf der Seite, von der sie stammt, steht darunter „Satire“. Was ist hier passiert?", o: ["Aus einem erkennbaren Scherz ist eine scheinbare Nachricht geworden.", "Die Rektorin hat ihre Entscheidung wieder zurückgenommen.", "Die Seite hat den Beitrag als bezahlte Werbung gekennzeichnet."], a: 0, e: "Ohne den Hinweis „Satire“ fehlt das Wichtigste: dass die Meldung erfunden ist. Deshalb lohnt es sich, den ganzen Beitrag und seine Herkunft anzusehen." },
        { q: "Zu einer Nachricht gehört ein Foto einer überfluteten Turnhalle. Wie prüfst du am besten, ob es wirklich dazu passt?", o: ["Ich suche, ob das Bild schon früher woanders erschienen ist.", "Ich zähle, wie viele Leute das Bild schon geteilt haben.", "Ich achte darauf, ob das Bild scharf und farbig ist."], a: 0, e: "Viele Bilder sind echt, stammen aber von einem anderen Ort oder aus einem anderen Jahr. Eine Bildersuche im Netz zeigt, wo ein Foto schon früher erschienen ist. Wie oft etwas geteilt wurde, sagt nichts über die Wahrheit." }
      ] },
      { art: "mc", id: "infot", m7: true, tag: "Gestaltungsmittel", fragen: [
        { q: "Eine Wissenssendung zeigt eine nachgestellte Szene mit Schauspielern und dramatischer Musik. Worauf solltest du beim Zuschauen achten?", o: ["ob die Szene als nachgestellt gekennzeichnet ist und was davon belegt ist", "ob die Schauspieler bekannt sind und überzeugend spielen", "ob die Musik gut zur Stimmung der Szene passt"], a: 0, e: "Infotainment mischt Information und Unterhaltung. Musik und Spielszenen erzeugen Gefühle – belegt ist damit noch nichts." }
      ] },
      { art: "offen", id: "rat", tag: "Selbst formulieren", titel: "Dein Rat", fragen: [
        { q: "Ein Freund will die Kettennachricht gleich an die Parallelklasse schicken. Was rätst du ihm? Nenne zwei Dinge, die er vorher prüfen soll.", m: "Leite sie noch nicht weiter. Schau zuerst auf der Internetseite der Schule nach, ob dort etwas steht. Prüfe außerdem, wer die Nachricht geschrieben hat und ob es ein Datum oder einen Beleg gibt.", k: ["schule|internetseite|schulseite|sekretariat|vertretungsplan|lehrer|lehrkraft", "verfasser|geschrieben|absender|quelle|datum|beleg|foto|beweis", "nicht weiter|noch nicht|warte|erst prüfen|vorher|zuerst"], min: 2 }
      ], tipp: "Denke an die fünf Prüffragen: Wer? Quelle? Datum? Belege? Absicht?", hilfen: ["Wo informiert die Schule wirklich, wenn der Unterricht ausfällt?", "So kannst du beginnen: „Leite sie noch nicht weiter. Prüfe zuerst, …“"] },
      { art: "offen", id: "manip", m7: true, tag: "Mit Zitaten belegen", titel: "Wie arbeitet die Kettennachricht?", fragen: [
        { q: "Erkläre an zwei Stellen der Kettennachricht, mit welchen Mitteln sie Druck macht oder Vertrauen erschleicht. Zitiere jeweils kurz und gib die Zeile an.", m: "Die Nachricht erzeugt Zeitdruck: „BITTE SOFORT WEITERLEITEN“ (Z. 1). Außerdem droht sie mit Schuld: „Wer es nicht weiterleitet, ist schuld“ (Z. 8–9). So soll man handeln, bevor man nachdenkt.", k: ["druck|zeitdruck|droht|schuld|eile|sofort|vertrauen|onkel|schulamt|großbuchstaben|schlechtes gewissen", "zeile|z."], min: 2 }
      ], tipp: "Ein Zitat steht in Anführungszeichen, die Zeile in Klammern dahinter: „…“ (Z. 5)." }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Wem kann man trauen?", teile: [
      { art: "duell", id: "pruefduell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf Fälle, fünf Entscheidungen. Die KI antwortet auch – sehr überzeugt, aber nicht immer richtig. Lass dich nicht verunsichern: Prüfe selbst.",
        runden: [
          { material: "„Morgen schulfrei! Hab ich von einem, der einen kennt. Schnell weiterleiten!“", q: "Was ist hier das größte Warnzeichen?", o: ["Die Quelle lässt sich nicht nachprüfen.", "Die Nachricht ist sehr kurz.", "Es fehlt eine Anrede."], a: 0, ki: 0, kiText: "denn „einer, der einen kennt“ hat keinen Namen – nachfragen kann man dort nicht.",
            e: "Ohne überprüfbare Quelle bleibt es ein Gerücht." },
          { material: "Ein Beitrag wurde 48 000-mal geteilt. Eine Quelle nennt er nicht.", q: "Wie glaubwürdig ist der Beitrag?", o: ["Das zeigt die Zahl nicht – oft geteilt heißt nicht wahr.", "Sehr glaubwürdig – so viele können sich nicht irren.", "Unglaubwürdig – was oft geteilt wird, ist immer falsch."], a: 0, ki: 1, kiText: "weil sich 48 000 Menschen kaum alle täuschen können.",
            e: "Doch, das können sie. Geteilt wird, was aufregt oder gefällt – nicht, was geprüft ist. Entscheidend bleiben Quelle und Belege.",
            begruende: { q: "Warum sagt die Zahl der Weiterleitungen nichts über die Wahrheit?", m: "Weil viele Leute etwas weiterleiten, ohne es zu prüfen – geteilt wird, was aufregt, nicht was stimmt.", k: ["prüfen|geprüft|ungeprüft|aufregt|gefällt|nachdenken|quelle|beleg|stimmt"] } },
          { material: "Eine Seite sieht aus wie eine Zeitung: Logo, Fotos, ordentliche Schrift. Ein Impressum und Namen von Autoren fehlen.", q: "Was folgt daraus?", o: ["Vorsicht – das Aussehen sagt nicht, wer dahintersteht.", "Die Seite ist seriös, denn sie sieht professionell aus.", "Die Seite stammt sicher von einer Behörde."], a: 0, ki: 1, kiText: "denn wer sich so viel Mühe mit der Gestaltung gibt, arbeitet bestimmt auch sorgfältig.",
            e: "Ein ordentliches Aussehen lässt sich leicht nachbauen. Wer verantwortlich ist, zeigt nur das Impressum." },
          { material: "Meldung: „Hochwasser in Erlenbrück“. Das Foto dazu zeigt eine überflutete Straße mit Palmen.", q: "Welche Prüffrage hilft hier am meisten?", o: ["Woher stammt das Bild – und von wann?", "Wie viele Wörter hat die Meldung?", "Ist die Überschrift fett gedruckt?"], a: 0, ki: 0, kiText: "denn Palmen passen nicht zum Ort – das Foto könnte von woanders stammen.",
            e: "Echte Fotos werden oft in einen falschen Zusammenhang gestellt. Eine Bildersuche zeigt, wo ein Bild schon früher erschienen ist." },
          { material: "Unter einem begeisterten Beitrag über ein neues Getränk steht ganz klein: „Anzeige“.", q: "Was bedeutet das für dich?", o: ["Der Beitrag ist bezahlte Werbung.", "Der Beitrag wurde amtlich geprüft.", "Der Beitrag ist eine Warnung der Polizei."], a: 0, ki: 0, kiText: "„Anzeige“ heißt: Jemand hat für diesen Platz bezahlt.",
            e: "Werbung muss gekennzeichnet sein. Sie darf aussehen wie ein Artikel – deshalb genau hinsehen.",
            begruende: { q: "Warum solltest du einem bezahlten Beitrag nicht einfach glauben?", m: "Weil der Beitrag verkaufen will und deshalb nur die Vorteile nennt, nicht die Nachteile.", k: ["verkaufen|werbung|wirbt|vorteile|nachteile|bezahlt|geld|verdien|einseitig|absicht"] } }
        ] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Eine Nachricht ohne Verfasser und ohne Datum sollte man erst prüfen.", true],
        ["Was sehr oft geteilt wurde, ist deshalb wahr.", false],
        ["Ein Impressum zeigt, wer für eine Internetseite verantwortlich ist.", true],
        ["Eine seriöse Seite nennt ihre Quellen und berichtigt Fehler.", true],
        ["Großbuchstaben und viele Ausrufezeichen zeigen, dass eine Nachricht geprüft wurde.", false],
        ["Im Zweifel gilt: erst prüfen, dann weiterleiten – oder gar nicht.", true]
      ] }
    ] }
  ],
  weiter: { href: "index.html#lesen", titel: "Zurück zur Übersicht", text: "Du hast alle sechs Module zu Lesen, Sachtexten und Medien geschafft. Wenn deine Lehrkraft die Probe dazu freischaltet, findest du sie in der Übersicht." }
});
