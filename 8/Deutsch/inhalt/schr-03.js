/* Deutsch 8 · Schreiben und Aufsätze · Modul 3: Informieren und berichten
   (Beispielbericht untersuchen: W-Fragen finden, Reihenfolge, Präteritum, sachlich bleiben, Unwichtiges weglassen;
   R8: eine Vorgangsbeschreibung (Notruf absetzen) ordnen und formulieren; M8: Merkmale des Protokolls (Kopf, Tagesordnung,
   Ergebnis statt Verlauf); dann die Schreibwerkstatt: aus Notizen zum Projekttag „Erste Hilfe“ einen Bericht schreiben)
   LehrplanPLUS D8 3.2 (über Sachverhalte und Ereignisse informieren; R: Vorgänge beschreiben; M: protokollieren),
   3.1 (Schreibplan, Stoff sammeln und ordnen), 2.1 (Aufbau eines Textes erschließen).
   Texte: „Achte Klassen pflanzen zwölf Obstbäume“ (texte/schreiben/bericht-obstbaeume-r.js und -m.js) – erfundener Beispielbericht
   zu einem ANDEREN Ereignis; „Dilaras Notizen zum Projekttag Erste Hilfe“ (notizen-erste-hilfe-r.js und -m.js) – Stoff für den
   eigenen Bericht. Wichtig: Zum Projekttag steht hier kein fertiger Bericht. Alle Zeilenangaben nach zeig-text.js. */
D7Kit.seite({
  id: "schr-03",
  titel: "Informieren und berichten",
  einleitung: "Ein Bericht erzählt nicht, wie du etwas erlebt hast – er sagt anderen, was geschehen ist. Heute untersuchst du einen Beispielbericht, übst sachliches Schreiben und schreibst dann selbst einen Bericht über einen Projekttag.",
  zeit: "etwa 50 Minuten",
  ziele: ["❓ Ich finde die W-Fragen in einem Bericht.", "🔢 Ich bringe einen Ablauf in die richtige Reihenfolge und schreibe im Präteritum.", "🧹 Ich bleibe sachlich und lasse Unwichtiges weg.", "✍️ Ich schreibe aus Notizen einen eigenen Bericht."],
  haupttext: { R: "schr-baeume-r", M: "schr-baeume-m" },
  quiz: { profi: "Berichte-Profi" },
  glossar: {
    bericht: ["Bericht", "Ein sachlicher Text, der Leser, die nicht dabei waren, über ein Ereignis informiert."],
    wfragen: ["W-Fragen", "Wer? Was? Wann? Wo? Warum? Wie? Mit welcher Folge? Ein guter Bericht beantwortet die wichtigen davon."],
    praeteritum: ["Präteritum", "Die einfache Vergangenheit: pflanzten, zeigte, begann. In einem schriftlichen Bericht steht sie durchgehend."],
    sachlich: ["sachlich", "Nur Tatsachen, keine Wertungen wie „toll“ oder „blöd“ und keine Umgangssprache."],
    vorgang: ["Vorgangsbeschreibung", "Sie erklärt, wie etwas gemacht wird – in der richtigen Reihenfolge, im Präsens, mit genauen Verben."],
    protokoll: ["Protokoll", "Ein Text, der festhält, was bei einer Sitzung oder Veranstaltung besprochen und beschlossen wurde."],
    beschluss: ["Beschluss", "Das, worauf man sich geeinigt hat. Im Protokoll steht der Beschluss, nicht der Streit davor."],
    adressat: ["Adressat", "Die Leserinnen und Leser, für die der Text gedacht ist."]
  },
  stationen: [
    { kurz: "Bericht", ober: "Untersuchen", titel: "Was steht in einem Bericht?", teile: [
      { art: "text", html: "<p class=\"lead\">Du warst nicht dabei, als die Klassen auf der Schulwiese Bäume pflanzten? Dann hilft dir ein <button class=\"term\" data-t=\"bericht\">Bericht</button>. Lies ihn einmal ganz und prüfe danach, ob du alles Wichtige erfahren hast.</p>" },
      { art: "lesetext", lesetext: { R: "schr-baeume-r", M: "schr-baeume-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Worüber informiert der Bericht?", o: ["über eine Pflanzaktion der beiden achten Klassen", "über einen Sturm, der die Schule beschädigte", "über ein Fest, das der Förderverein feierte"], a: 0, e: "Gleich der erste Satz nennt das Ereignis: Die achten Klassen pflanzten zwölf Obstbäume." },
        { q: "Für wen ist ein solcher Bericht gedacht?", o: ["für Leser, die nicht dabei waren", "für die Teilnehmer, die alles selbst erlebt haben", "nur für die Lehrkräfte, die den Tag geplant haben"], a: 0, e: "Ein Bericht informiert. Deshalb muss er alles enthalten, was jemand wissen muss, der nicht dabei war." },
        { q: "Welche Information steht nicht im Bericht?", o: ["was die zwölf Bäume gekostet haben", "wer die Bäume bezahlt hat", "an welchem Tag gepflanzt wurde"], a: 0, e: "Es steht nur, wer die Kosten übernahm – die Summe wird nicht genannt. Der Bericht nennt, was die Leser brauchen, und erfindet nichts." }
      ] },
      { art: "merke", kopf: "MERKE: Die W-Fragen", html: "<p>Ein <button class=\"term\" data-t=\"bericht\">Bericht</button> beantwortet die <button class=\"term\" data-t=\"wfragen\">W-Fragen</button>:</p><ul><li><b>Wer</b> war beteiligt? <b>Was</b> geschah?</li><li><b>Wann</b> und <b>wo</b> geschah es?</li><li><b>Warum</b> geschah es (Anlass)? <b>Wie</b> verlief es?</li><li><b>Mit welcher Folge?</b></li></ul><p>Die wichtigsten Antworten stehen gleich in der Einleitung.</p>" },
      { art: "sort", id: "wf", tag: "W-Fragen zuordnen", titel: "Welche W-Frage beantwortet die Angabe?", lead: "Alle Angaben stammen aus dem Bericht über die Pflanzaktion.", buckets: ["Wer?", "Wann?", "Wo?", "Warum?"], items: [
        { t: "die beiden achten Klassen", b: 0 },
        { t: "ein Mitarbeiter des städtischen Bauhofs", b: 0 },
        { t: "am 16. Oktober", b: 1 },
        { t: "von 9 bis 12 Uhr", b: 1 },
        { t: "auf der Wiese hinter der Turnhalle", b: 2 },
        { t: "weil ein Sturm vier alte Bäume umgeworfen hatte", b: 3 }
      ] },
      { art: "beleg", id: "wstellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "schr-baeume-r", fragen: [
        { q: "In welchen Zeilen steht, wo die Aktion stattfand und wie lange sie dauerte?", zeilen: [2, 3], e: "Der Ort und die Dauer stehen direkt in der Einleitung.", tipp: "Suche „Wiese“ und „Uhr“." },
        { q: "Wo steht, was die Schülerinnen und Schüler nach der Einweisung als Erstes taten?", zeilen: [5, 6], e: "Mit „Danach“ beginnt der erste Arbeitsschritt: Sie hoben die Pflanzlöcher aus.", tipp: "Achte auf das Wort „Danach“." },
        { q: "Wo erfährst du, warum die Aktion stattfand?", zeilen: [10, 11], e: "Der Anlass war ein Sturm im vergangenen Winter, der vier alte Bäume umwarf.", tipp: "Suche das Wort „Anlass“." },
        { q: "Wo steht, wer die Bäume künftig pflegt?", zeilen: [13, 14], e: "Der Schluss nennt die Folge: Die achten Klassen übernehmen die Pflege.", tipp: "Lies den letzten Absatz." }
      ], hilfen: ["Die Einleitung beantwortet die wichtigsten W-Fragen.", "Der Anlass steht oft erst nach dem Ablauf."] },
      { art: "beleg", id: "wstellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "schr-baeume-m", fragen: [
        { q: "In welchen Zeilen steht, wer an der Aktion beteiligt war?", zeilen: [3, 4], e: "48 Schülerinnen und Schüler sowie ein Mitarbeiter des Bauhofs.", tipp: "Suche eine Zahl." },
        { q: "Wo wird gesagt, wer die Kosten übernahm?", zeilen: [7, 8], e: "Der Förderverein übernahm die Kosten – das Semikolon trennt zwei Aussagen voneinander.", tipp: "Suche das Wort „Kosten“." },
        { q: "Wo steht, wann die Arbeit beendet war?", zeilen: [13, 14], e: "„Gegen 12 Uhr“ – danach waren alle Bäume gegossen und die Werkzeuge gereinigt.", tipp: "Suche eine Uhrzeit im zweiten Absatz." },
        { q: "Wo steht, wer sich künftig um die Bäume kümmert?", zeilen: [16, 18], e: "Die Pflege übernehmen künftig die achten Klassen – das ist die Folge der Aktion.", tipp: "Lies die letzten Sätze." }
      ] }
    ] },
    { kurz: "Ablauf", ober: "Üben", titel: "Reihenfolge und Zeitform", teile: [
      { art: "text", html: "<p>Ein Bericht folgt dem Ablauf der Ereignisse: erst das Frühere, dann das Spätere. Weil alles schon vorbei ist, steht er im <button class=\"term\" data-t=\"praeteritum\">Präteritum</button> – von Anfang bis Ende.</p>" },
      { art: "ordnen", id: "reihe", tag: "Reihenfolge", titel: "Das Sommerfest – in der richtigen Reihenfolge", lead: "Aus einem anderen Bericht: Bringe die Sätze in die Reihenfolge, in der die Dinge geschahen.", schritte: [
        "Am Morgen bauten Eltern und Lehrkräfte die Stände auf dem Schulhof auf.",
        "Um 14 Uhr eröffnete die Schulleiterin das Fest.",
        "Danach spielten die Kinder an den Ständen und kauften Kuchen.",
        "Am Abend räumten alle gemeinsam auf."
      ], hilfen: ["Achte auf Uhrzeiten und auf Wörter wie „danach“ und „am Abend“."] },
      { art: "luecke", id: "praet", tag: "Präteritum", titel: "Setze die richtige Zeitform ein", lead: "Noch ein Bericht über das Sommerfest. Setze die Verben ins Präteritum.", absaetze: [
        ["Das Sommerfest ", { g: "begann" }, " um 14 Uhr auf dem Schulhof."],
        ["Die Klassen ", { g: "boten" }, " Spiele und einen Kuchenverkauf an."],
        ["Der Förderverein ", { g: "übernahm" }, " die Kosten für die Getränke."],
        ["Am Ende ", { g: "zählten" }, " die Helfer 380 Euro."]
      ], extra: ["beginnt", "übernimmt", "haben gezählt"] },
      { art: "mc", id: "zeit", tag: "Zeitform prüfen", fragen: [
        { q: "Welche Fassung gehört in einen schriftlichen Bericht?", o: ["Zuerst zeigte ein Mitarbeiter des Bauhofs, wie man einen Baum einsetzt.", "Zuerst zeigt ein Mitarbeiter des Bauhofs, wie man einen Baum einsetzt.", "Zuerst wird ein Mitarbeiter des Bauhofs zeigen, wie man einen Baum einsetzt."], a: 0, e: "Das Ereignis liegt in der Vergangenheit. Ein schriftlicher Bericht verwendet dafür das Präteritum." }
      ] },
      { art: "mc", id: "vor", m7: true, tag: "Vorzeitigkeit", fragen: [
        { q: "Der Sturm lag vor der Pflanzaktion. Welcher Satz zeigt das mit der passenden Zeitform?", o: ["Die Klassen pflanzten neue Bäume, weil ein Sturm vier alte umgeworfen hatte.", "Die Klassen pflanzten neue Bäume, weil ein Sturm vier alte umwerfen wird.", "Die Klassen pflanzen neue Bäume, weil ein Sturm vier alte umwarf."], a: 0, e: "Was noch früher geschah als das Berichtete, steht im Plusquamperfekt: umgeworfen hatte." }
      ] }
    ] },
    { kurz: "Sachlich", ober: "Üben", titel: "Sachlich bleiben – Unwichtiges weglassen", teile: [
      { art: "sort", id: "sach", tag: "Sachlich oder nicht?", titel: "Gehört dieser Satz in einen Bericht?", lead: "<button class=\"term\" data-t=\"sachlich\">Sachlich</button> heißt: Tatsachen statt Meinungen und Umgangssprache.", buckets: ["sachlich", "nicht sachlich"], items: [
        { t: "Die Aktion dauerte von 9 bis 12 Uhr.", b: 0 },
        { t: "Das war mega anstrengend, aber voll cool.", b: 1 },
        { t: "Der Förderverein bezahlte die Bäume.", b: 0 },
        { t: "Die Lehrer haben sich echt zu wenig Mühe gegeben.", b: 1 },
        { t: "Zwölf Obstbäume wurden gepflanzt.", b: 0 },
        { t: "Hoffentlich gießt die sowieso keiner, dann vertrocknen sie.", b: 1 }
      ] },
      { art: "mc", id: "ueber", tag: "Überschrift", fragen: [
        { q: "Welche Überschrift passt zu einem Bericht?", o: ["Achte Klassen pflanzen zwölf Obstbäume", "Mega-Aktion! Wir haben Bäume gepflanzt!!!", "Warum Bäume pflanzen einfach das Beste ist"], a: 0, e: "Eine Berichtsüberschrift nennt das Ereignis knapp und sachlich – ohne Ausrufezeichen und ohne Meinung." }
      ] },
      { art: "mc", id: "meinung", tag: "Meinung im Bericht?", fragen: [
        { q: "Darf man in einem Bericht schreiben, wie toll man alles fand?", o: ["Nein, der Bericht gibt nur Tatsachen wieder; Wertungen lässt man weg.", "Ja, am besten in jedem zweiten Satz.", "Ja, aber nur in der Mitte, nie am Anfang."], a: 0, e: "Wer berichtet, informiert. Die eigene Meinung gehört in einen Kommentar oder in eine Stellungnahme." }
      ] },
      { art: "markieren", id: "unwichtig", tag: "Unwichtiges finden", titel: "Was streichst du?", lead: "Aus einem Bericht über das Sommerfest. Zwei Sätze interessieren die Leser nicht – tippe sie an.", satz: "Das Sommerfest begann um 14 Uhr auf dem Schulhof. [[Mias Mutter trug dabei einen lustigen Hut.]] Die Klassen boten Spiele und einen Kuchenverkauf an. [[Der Kuchen von Tim schmeckte mir am besten.]] Der Erlös von 380 Euro ging an den Förderverein.", finde: "die zwei unwichtigen Sätze", toleranz: 0, e: "Was Mias Mutter trug und was mir am besten schmeckte, sagt den Lesern nichts über das Fest. Wichtig sind Zeit, Ort, Ablauf und Ergebnis." }
    ] },
    { kurz: "Vorgang / Protokoll", ober: "Anwenden", titel: "Andere Texte, die informieren", teile: [
      { art: "text", nur: "R", html: "<p class=\"lead\">Manchmal sagst du nicht, was geschah, sondern <b>wie etwas geht</b>. Das ist eine <button class=\"term\" data-t=\"vorgang\">Vorgangsbeschreibung</button>: Sie steht im Präsens, hat eine feste Reihenfolge und genaue Verben. Auch ein Notruf läuft nach einem festen Plan ab.</p>" },
      { art: "ordnen", id: "notruf", nur: "R", tag: "Vorgang ordnen", titel: "So setzt du einen Notruf ab", lead: "Bringe die Schritte in die richtige Reihenfolge.", schritte: [
        "Zuerst prüfst du, ob die Unfallstelle sicher ist, und bringst dich nicht selbst in Gefahr.",
        "Dann wählst du die Notrufnummer 112.",
        "Du beantwortest die fünf W-Fragen: Wo ist es passiert? Was ist passiert? Wie viele Personen sind verletzt? Welche Verletzungen gibt es?",
        "Schließlich wartest du auf Rückfragen und legst nicht von dir aus auf."
      ], hilfen: ["Überlege: Was musst du tun, bevor du anrufst? Und was kommt ganz zum Schluss?"] },
      { art: "offen", id: "notruf-text", nur: "R", tag: "Selbst formulieren", titel: "Den Ablauf in zwei Sätzen sagen", fragen: [
        { q: "Erkläre einem Kind, wie man einen Notruf absetzt. Schreibe zwei Sätze mit „zuerst“ und „danach“ (Präsens).", m: "Zuerst wählst du die 112 und sagst, wo etwas passiert ist, was passiert ist, wie viele Personen verletzt sind und welche Verletzungen sie haben. Danach wartest du auf die Rückfragen der Leitstelle und legst nicht von dir aus auf.", k: ["112", "zuerst", "danach|anschließend|dann|schließlich", "warte|rückfrage"], min: 3 }
      ], tipp: "Beginne mit: Zuerst wählst du …", hilfen: ["Satz 1: die Nummer und die W-Fragen", "Satz 2: Danach … Rückfragen"] },
      { art: "text", nur: "M", html: "<p class=\"lead\">Bei einer Sitzung schreibt jemand mit. Das ist ein <button class=\"term\" data-t=\"protokoll\">Protokoll</button>. Es hält fest, <b>was herauskam</b> – nicht, wie lange oder wie laut diskutiert wurde. Es steht meist im Präsens und ist streng sachlich.</p>" },
      { art: "merke", nur: "M", kopf: "MERKE: Das Protokoll", html: "<ul><li><b>Kopf:</b> Datum, Ort, Beginn und Ende, Anwesende, wer schreibt</li><li><b>Tagesordnung:</b> die Punkte, die besprochen wurden</li><li><b>Ergebnis:</b> zu jedem Punkt der <button class=\"term\" data-t=\"beschluss\">Beschluss</button> und wer was bis wann erledigt</li><li><b>Sachlich:</b> keine Wertung, keine Zitate aus dem Streit</li></ul>" },
      { art: "sort", id: "proto", nur: "M", tag: "Protokoll aufbauen", titel: "In welchen Teil gehört die Angabe?", buckets: ["Kopf", "Tagesordnung", "Ergebnis"], items: [
        { t: "Datum, Ort, Beginn und Ende der Sitzung", b: 0 },
        { t: "Namen der Anwesenden", b: 0 },
        { t: "TOP 1: Termin für den Spendenlauf", b: 1 },
        { t: "TOP 2: Verteilung der Aufgaben", b: 1 },
        { t: "Beschluss: Der Spendenlauf findet im Mai statt.", b: 2 },
        { t: "Mia entwirft bis zum 15. April das Plakat.", b: 2 }
      ] },
      { art: "offen", id: "proto-ergebnis", nur: "M", tag: "Ergebnis festhalten", titel: "Aus dem Streit wird ein Beschluss", fragen: [
        { q: "In der Sitzung der Schülervertretung wurde lange darüber gestritten, ob der Spendenlauf im Mai oder im Juni stattfinden soll. Mia wies darauf hin, dass im Juni die Prüfungen anstehen; danach waren alle einverstanden. Formuliere die Protokollzeile zum Ergebnis in einem Satz.", m: "Beschluss: Der Spendenlauf findet im Mai statt, weil im Juni die Prüfungen anstehen.", k: ["beschluss|beschlossen|festgelegt|einigte|ergebnis", "mai", "juni|prüfung"], min: 3 }
      ], tipp: "Das Protokoll nennt den Beschluss und höchstens den Grund – nicht den Streit.", hilfen: ["Beginne mit „Beschluss:“ und lass die Diskussion weg."] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Dein Bericht über den Projekttag", teile: [
      { art: "text", html: "<p class=\"lead\">Dilara hat sich beim Projekttag „Erste Hilfe“ Notizen gemacht – kreuz und quer, wie sie kamen. Daraus sollst du einen Bericht schreiben. Dafür musst du auswählen: Was ist wichtig, was nicht?</p>" },
      { art: "beleg", id: "notizen", nur: "R", tag: "Notizen auswerten", titel: "Was gehört nicht in den Bericht?", lesetext: "schr-notizen-r", fragen: [
        { q: "In welcher Zeile steht eine Wertung statt einer Tatsache?", zeilen: [3, 3], e: "„War echt cool“ ist eine Meinung und Umgangssprache – im Bericht fällt sie weg.", tipp: "Suche die Zeile mit „cool“." },
        { q: "Welche Zeile enthält eine Angabe, die für die Leser unwichtig ist?", zeilen: [8, 8], e: "Die Farbe der Jacke sagt nichts über den Projekttag.", tipp: "Es geht um Kleidung." },
        { q: "Welche Zeile gehört nicht in einen Bericht, weil sie einen Mitschüler bloßstellt?", zeilen: [13, 13], e: "Dass Luis gekichert hat, ist für die Leser unwichtig und nicht fair.", tipp: "Suche einen Namen mit „gekichert“." },
        { q: "In welchen Zeilen steht die Folge des Projekttages?", zeilen: [15, 16], e: "Neun Jugendliche melden sich zum Schulsanitätsdienst, und der Tag soll jedes Jahr stattfinden – das gehört in den Schluss.", tipp: "Die letzten Zeilen." }
      ], hilfen: ["Frage bei jeder Zeile: Braucht ein Leser der Homepage das?"] },
      { art: "beleg", id: "notizen", nur: "M", tag: "Notizen auswerten", titel: "Was gehört nicht in den Bericht?", lesetext: "schr-notizen-m", fragen: [
        { q: "In welcher Zeile steht eine Wertung statt einer Tatsache?", zeilen: [4, 4], e: "„War echt cool“ ist eine Meinung – im Bericht fällt sie weg.", tipp: "Suche die Zeile mit „cool“." },
        { q: "Welche Zeile enthält eine Angabe, die für die Leser des Jahresberichts unwichtig ist?", zeilen: [10, 10], e: "Wie Frau Wegner anreiste und was sie trug, sagt nichts über den Projekttag.", tipp: "Es geht um Anreise und Kleidung." },
        { q: "Welche Zeile würdest du streichen, weil sie nur einen Mitschüler bloßstellt?", zeilen: [17, 17], e: "Dass Luis kichert, ist unwichtig und gehört nicht in einen Jahresbericht.", tipp: "Suche einen Namen mit „kichert“." },
        { q: "In welchen Zeilen stehen die Folgen des Projekttages?", zeilen: [19, 20], e: "Neun Anmeldungen zum Schulsanitätsdienst und der Plan, den Tag jährlich zu wiederholen – das trägt den Schluss.", tipp: "Die letzten Zeilen." }
      ] },
      { art: "aufsatz", id: "aufsatz", tag: "Schreibwerkstatt", titel: "Bericht: Der Projekttag Erste Hilfe", form: "bericht",
        auftrag: {
          R: "<p>Auf der Schulhomepage soll ein <b>Bericht über den Projekttag „Erste Hilfe“</b> stehen. Lies dazu Dilaras Notizen (Knopf unter dem Textfenster) und schreibe den Bericht (mindestens 90 Wörter):</p><ul><li>Beantworte in der Einleitung die W-Fragen: Wer? Was? Wann? Wo?</li><li>Erzähle den Ablauf in der richtigen Reihenfolge.</li><li>Schreibe im Präteritum und sachlich.</li><li>Lass Unwichtiges aus den Notizen weg.</li><li>Nenne am Schluss die Folge des Projekttages.</li></ul>",
          M: "<p>Für den <b>Jahresbericht der Schule</b> sollst du den Projekttag „Erste Hilfe“ festhalten. Dilaras Notizen (Knopf unter dem Textfenster) sind dein Material. Verfasse einen Bericht (mindestens 130 Wörter):</p><ul><li>Führe in einer Einleitung knapp zum Anlass hin und beantworte die wichtigsten W-Fragen.</li><li>Gliedere den Hauptteil nach dem Ablauf des Tages und verbinde die Teile mit passenden Übergängen.</li><li>Wähle aus den Notizen nur aus, was Leser des Jahresberichts brauchen; schreibe im Präteritum.</li><li>Schließe sachlich mit der Folge des Projekttages – ohne Wertung.</li></ul>"
        },
        material: { lesetext: { R: "schr-notizen-r", M: "schr-notizen-m" } },
        min: { R: 90, M: 130 },
        kriterien: {
          R: ["Die Einleitung nennt Wer? Was? Wann? Wo?", "Der Ablauf steht in der richtigen Reihenfolge.", "Der ganze Bericht steht im Präteritum.", "Es steht nichts Unwichtiges oder Wertendes im Text.", "Der Schluss nennt die Folge des Projekttages."],
          M: ["Die Einleitung führt zum Anlass hin und nennt die wichtigsten W-Fragen.", "Der Ablauf ist geordnet, die Teile sind verbunden.", "Die Auswahl ist treffend: Unwichtiges und Wertungen fehlen.", "Zeitform und Sprache sind einheitlich sachlich.", "Der sachliche Schluss nennt die Folge, ohne zu werten."]
        },
        starter: ["Am 12. März fand …", "Zuerst …", "Anschließend …", "Nach der Pause …", "Zum Abschluss …", "Als Folge des Projekttages …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Bericht beantwortet die wichtigsten W-Fragen.", true],
        ["Ein schriftlicher Bericht über ein vergangenes Ereignis steht im Präteritum.", true],
        ["In einen Bericht gehört auch, wie toll man alles fand.", false],
        ["Unwichtige Einzelheiten lässt man weg.", true],
        ["Der Ablauf wird in beliebiger Reihenfolge erzählt.", false]
      ] }
    ] }
  ],
  weiter: { href: "schr_04.html", titel: "Modul 4: Die begründete Stellungnahme", text: "Ein Bericht informiert nur. Im nächsten Modul sagst du deine Meinung – und begründest sie so, dass andere sie nachvollziehen können." }
});
