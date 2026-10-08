/* Deutsch 8 · Schreiben und Aufsätze · Modul 6: Texte überarbeiten
   (einen fremden Entwurf in vier Durchgängen überarbeiten: Inhalt → Aufbau → Sprache → Rechtschreibung und Zeichensetzung;
   mit einer Checkliste prüfen; Stellen des Entwurfs selbst verbessern; Fehler nach ihrer Art sortieren und den eigenen
   Fehlerschwerpunkt benennen; Feedback geben und nutzen; ein Überarbeitungsziel selbst wählen; zum Schluss einen Abschnitt des
   Entwurfs im Schreibtrainer neu schreiben. M8: Adressatenbezug und stilistische Stimmigkeit, Bandwurmsatz, genaue Angaben
   statt leerer Wörter, eigener Schluss, zwei selbst gewählte Überarbeitungsziele)
   LehrplanPLUS D8 3.3 (Texte mit Checklisten und Kriterienkatalogen prüfen, Überarbeitungsziele selbst wählen – M8: nach Form,
   Inhalt, Sprache, Adressatenbezug, stilistische Stimmigkeit; Feedback nutzen; weitgehend fehlerfrei gestalten,
   Rechtschreibhilfen nutzen; den Schreibprozess reflektieren), 4.3 (Rechtschreibstrategien bei der Überarbeitung,
   Fehlerschwerpunkte selbst ermitteln).
   Texte: „Unser Ausflug ins Technikmuseum“ (texte/schreiben/entwurf-technikmuseum-r.js und -m.js) – erfundener Schülerentwurf
   mit Absicht voller Schwächen, R8 16 Zeilen · M8 26 Zeilen. Alle Zeilenangaben unten nach zeig-text.js.
   Wichtig: Nirgends auf der Seite steht eine vollständig verbesserte Fassung des Entwurfs – verbessert werden einzelne Stellen. */
D7Kit.seite({
  id: "schr-06",
  titel: "Texte überarbeiten",
  einleitung: "Kein guter Text ist beim ersten Versuch fertig – auch nicht bei Profis. Heute hilfst du Nico, seinen Bericht für die Schulhomepage besser zu machen: Schritt für Schritt, mit Checkliste und Rückmeldung. Was du dabei lernst, brauchst du bei jedem eigenen Text.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔁 Ich überarbeite in vier Durchgängen: Inhalt, Aufbau, Sprache, Rechtschreibung.", "✅ Ich prüfe einen Text mit einer Checkliste und wähle ein Überarbeitungsziel.", "💬 Ich gebe eine Rückmeldung, mit der man weiterarbeiten kann.", "🎯 Ich kenne meinen Fehlerschwerpunkt und weiß, was ich dagegen tue."],
  haupttext: { R: "schr-entwurf-r", M: "schr-entwurf-m" },
  quiz: { profi: "Überarbeitungs-Profi" },
  glossar: {
    adressat: ["Adressat", "Die Leserinnen und Leser, für die ein Text gedacht ist. Nach ihnen richten sich Inhalt und Ton."],
    checkliste: ["Checkliste", "Eine Liste mit Punkten, die ein guter Text erfüllen soll. Du prüfst Punkt für Punkt und siehst, was noch fehlt."],
    durchgang: ["Durchgang", "Einmal den ganzen Text lesen und dabei nur auf eine Sache achten – zum Beispiel nur auf den Aufbau."],
    umgang: ["Umgangssprache", "So reden wir im Alltag mit Freunden: voll cool, mega, krass. In einen Bericht gehört sie nicht."],
    zeitform: ["Zeitform", "Präsens, Perfekt, Präteritum … Ein Bericht über etwas Vergangenes steht durchgehend im Präteritum."],
    ziel: ["Überarbeitungsziel", "Was du dir für die Überarbeitung vornimmst: ein Bereich und eine genaue Aufgabe."],
    feedback: ["Feedback", "Eine Rückmeldung zu einem Text: Was ist gelungen, was fällt auf, was könnte man ändern?"],
    schwerpunkt: ["Fehlerschwerpunkt", "Die Art von Fehler, die dir am häufigsten passiert – zum Beispiel das/dass oder fehlende Kommas."],
    ersatzprobe: ["Ersatzprobe", "Probe für das/dass: Lässt sich „dieses“, „jenes“ oder „welches“ einsetzen, schreibt man „das“ – sonst „dass“."]
  },
  stationen: [
    { kurz: "Entwurf", ober: "Lesen", titel: "Nicos Entwurf – und ein Plan", teile: [
      { art: "text", html: "<p class=\"lead\">Nico hat einen Bericht über den Ausflug seiner Klasse geschrieben. Er soll auf der Schulhomepage stehen – dort lesen ihn Eltern, Lehrkräfte und andere Klassen. Bevor er ihn abgibt, bittet er dich: „Schau mal drüber.“</p><p>Lies den Entwurf zuerst nicht mit dem Rotstift, sondern wie jemand, der die Homepage besucht.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Der Entwurf", lesetext: { R: "schr-entwurf-r", M: "schr-entwurf-m" } },
      { art: "mc", id: "eindruck", tag: "Erster Eindruck", fragen: [
        { q: "Was ist an Nicos Entwurf schon gelungen?", o: ["Man erfährt, welche Stationen die Klasse im Museum besucht hat.", "Der Text ist übersichtlich in mehrere Absätze gegliedert.", "Der ganze Text steht durchgehend in derselben Zeitform."], a: 0, e: "Gutes Überarbeiten beginnt mit dem, was schon da ist: Die Stationen des Ausflugs stehen im Text. Absätze und eine einheitliche Zeitform fehlen noch." }
      ] },
      { art: "ordnen", id: "reihe", tag: "Reihenfolge", titel: "Womit fängst du an?", lead: "Wer alles auf einmal verbessern will, übersieht die Hälfte. Profis lesen ihren Entwurf viermal – jedes Mal achten sie auf etwas anderes. Bring die vier <button class=\"term\" data-t=\"durchgang\">Durchgänge</button> in eine sinnvolle Reihenfolge. Tipp: erst das Große, dann das Kleine.", schritte: [
        "Inhalt: Stimmt alles? Fehlt etwas? Ist etwas überflüssig?",
        "Aufbau: Einleitung, Hauptteil, Schluss – und Absätze?",
        "Sprache: Zeitform, Wortwahl, Wiederholungen?",
        "Rechtschreibung und Zeichensetzung: Fehler suchen und berichtigen"
      ] },
      { art: "merke", kopf: "MERKE: In vier Durchgängen überarbeiten", html: "<ol><li><strong>Inhalt</strong> – Erfahren die Leser alles Wichtige? Ist etwas überflüssig?</li><li><strong>Aufbau</strong> – Gibt es Einleitung, Hauptteil und Schluss? Stehen Absätze an den richtigen Stellen?</li><li><strong>Sprache</strong> – Passen Zeitform und Wortwahl? Gibt es Wiederholungen?</li><li><strong>Rechtschreibung und Zeichensetzung</strong> – erst ganz zum Schluss.</li></ol><p>Warum in dieser Reihenfolge? Wer zuerst Kommas setzt und danach den halben Absatz streicht, hat umsonst gearbeitet.</p>" },
      { art: "sort", id: "check", nur: "R", tag: "Checkliste benutzen", titel: "Prüfe Nicos Entwurf mit der Checkliste", lead: "Sieben Punkte, die ein Bericht für die Schulhomepage erfüllen soll – das ist deine <button class=\"term\" data-t=\"checkliste\">Checkliste</button>. Sortiere: Was schafft Nicos Entwurf schon, was noch nicht?", buckets: ["✓ erfüllt", "○ noch nicht erfüllt"], cols: 240, items: [
        { t: "Man erfährt, welche Stationen die Klasse besucht hat.", b: 0 },
        { t: "Man erfährt, was die Klasse selbst ausprobieren durfte.", b: 0 },
        { t: "Die Einleitung sagt, wer wann wohin gefahren ist.", b: 1 },
        { t: "Alles, was im Text steht, ist für die Leser wichtig.", b: 1 },
        { t: "Der Text ist in Absätze gegliedert.", b: 1 },
        { t: "Der Text steht durchgehend im Präteritum.", b: 1 },
        { t: "Die Sprache ist sachlich – ohne Umgangssprache.", b: 1 }
      ], hilfen: ["Lies bei jedem Punkt im Entwurf nach – über den Knopf „📖 Text“ hast du ihn immer zur Hand.", "Nur zwei Punkte sind schon erfüllt. Beide haben mit dem zu tun, was die Klasse im Museum erlebt hat."] },
      { art: "sort", id: "check", nur: "M", tag: "Checkliste benutzen", titel: "Prüfe Nicos Entwurf mit der Checkliste", lead: "Sieben Punkte, die ein Bericht für die Schulhomepage erfüllen soll – das ist deine <button class=\"term\" data-t=\"checkliste\">Checkliste</button>. Sortiere: Was schafft Nicos Entwurf schon, was noch nicht?", buckets: ["✓ erfüllt", "○ noch nicht erfüllt"], cols: 240, items: [
        { t: "Die Einleitung sagt, wer wann wohin gefahren ist – und warum.", b: 0 },
        { t: "Man erfährt, welche Stationen die Klasse besucht hat.", b: 0 },
        { t: "Alles, was im Text steht, ist für die Leser der Homepage wichtig.", b: 1 },
        { t: "Der Text ist in Absätze gegliedert.", b: 1 },
        { t: "Der Text steht durchgehend im Präteritum.", b: 1 },
        { t: "Der Ton ist von Anfang bis Ende einheitlich sachlich.", b: 1 },
        { t: "Der Schluss zieht ein Fazit, das wirklich etwas aussagt.", b: 1 }
      ] }
    ] },
    { kurz: "Inhalt & Aufbau", ober: "Untersuchen", titel: "Erster und zweiter Durchgang: Inhalt und Aufbau", teile: [
      { art: "beleg", id: "stellen", nur: "R", tag: "Textstellen finden", titel: "Wo hakt es?", lead: "Wer überarbeitet, muss die Stelle genau benennen können.", lesetext: "schr-entwurf-r", fragen: [
        { q: "Wo unterbricht Nico den Rundgang mit einer Bemerkung über die Busfahrt, die nicht in den Bericht gehört?", zeilen: [5, 6], e: "Emils vergessene Brotzeit interessiert die Leser der Homepage nicht – und sie steht mitten im Rundgang.", tipp: "Suche das Wort „Bus“. Es kommt zweimal vor – gemeint ist die Stelle mitten im Museumsbesuch." },
        { q: "Wo wechselt Nico ins Präsens, obwohl er von etwas Vergangenem berichtet?", zeilen: [9, 10], e: "„Dort bauen wir …“ steht im Präsens. Im Bericht muss es „bauten“ heißen.", tipp: "Suche im Teil über die Werkstatt ein Verb, das klingt, als geschehe es gerade jetzt." },
        { q: "In welchen Zeilen steht Nicos Schluss?", zeilen: [15, 16], e: "Ein einziger Satz – und der sagt nur, dass es „toll“ war. Ein Schluss sollte verraten, was die Klasse mitgenommen hat.", tipp: "Der Schluss ist der allerletzte Satz des Entwurfs." }
      ], hilfen: ["Lies den Entwurf Satz für Satz. Frage dich bei jedem Satz: Was hat das mit dem Museum zu tun?", "Tippe nur die Zeilen an, in denen der gesuchte Satz steht."] },
      { art: "beleg", id: "stellen", nur: "M", tag: "Textstellen finden", titel: "Wo hakt es?", lead: "Wer überarbeitet, muss die Stelle genau benennen können.", lesetext: "schr-entwurf-m", fragen: [
        { q: "Wo steht eine Bemerkung über die Busfahrt, mit der die Leser der Homepage nichts anfangen können?", zeilen: [3, 4], e: "Wie lang die Fahrt wirkte und wer Musik hörte, ist nur für Mitschüler lustig. Der Adressat des Berichts ist aber ein anderer.", tipp: "Die Stelle folgt gleich auf die Einleitung." },
        { q: "Wo steht ein Bandwurmsatz, der mit viermal „und“ immer weiterläuft?", zeilen: [8, 11], e: "Vier Gedanken in einem Satz: Alter der Maschine, das Zittern, der Lärm, die Führerin. Daraus werden besser drei Sätze.", tipp: "Zähle die „und“ im Satz über die Dampfmaschine." },
        { q: "Wo benutzt Nico eine steife Formel, die nicht zum übrigen Ton passt und nichts aussagt?", zeilen: [25, 26], e: "„Insgesamt kann gesagt werden“ klingt nach Amtsbrief – direkt nach „Der Hammer“ und „irgendwie“. Und „lehrreich“ verrät nicht, was gelernt wurde.", tipp: "Lies den letzten Satz des Entwurfs." }
      ] },
      { art: "mc", id: "inhalt", tag: "Inhalt prüfen", fragen: [
        { q: "Nico überlegt, den Satz über die eingestürzte Brücke von Sinas Gruppe zu streichen. Was spricht dafür?", o: ["Er macht sich über Mitschüler lustig – das gehört nicht auf die Schulhomepage.", "Der Satz ist viel zu lang und enthält mehrere schwierige Fremdwörter.", "In einem Bericht dürfen grundsätzlich keine Namen von Personen stehen."], a: 0, e: "Ein Bericht informiert sachlich. Spott über andere hat darin nichts verloren – erst recht nicht, wenn Eltern und andere Klassen mitlesen." }
      ] },
      { art: "merke", kopf: "MERKE: Inhalt und Aufbau", html: "<ul><li><strong>Für wen schreibe ich?</strong> Der <button class=\"term\" data-t=\"adressat\">Adressat</button> entscheidet, was wichtig ist. Was nur Freunde verstehen oder lustig finden, fliegt raus.</li><li><strong>Einleitung:</strong> Wer? Wann? Wohin? Warum?</li><li><strong>Hauptteil:</strong> eine Station nach der anderen – jede in einem eigenen Absatz.</li><li><strong>Schluss:</strong> Was hat der Ausflug gebracht? Nicht nur: „Es war toll.“</li></ul>" },
      { art: "offen", id: "einl", nur: "R", tag: "Selbst verbessern", titel: "Eine neue Einleitung für Nico", fragen: [
        { q: "Nicos erster Satz verrät nicht, wer wann unterwegs war. Schreibe eine neue Einleitung in ein bis zwei Sätzen. Verwende diese Angaben: Klasse 8b · 10. März · Technikmuseum Wendelau · mit Frau Huber.", m: "Am 10. März besuchte die Klasse 8b mit Frau Huber das Technikmuseum in Wendelau.", k: ["8b", "märz", "technikmuseum|museum", "huber"] }
      ], tipp: "Eine Einleitung beantwortet: Wer? Wann? Wohin? Schreibe im Präteritum.", hilfen: ["Eine Einleitung beantwortet: Wer? Wann? Wohin?", "So kannst du beginnen: Am 10. März besuchte …", "Achte auf die Zeitform: besuchte, fuhr, unternahm."] },
      { art: "offen", id: "einl", nur: "M", tag: "Selbst verbessern", titel: "Ein Schluss, der etwas sagt", fragen: [
        { q: "Nicos letzter Satz ist eine leere Formel. Schreibe einen Schluss in zwei Sätzen, der sagt, was die Klasse von dem Ausflug mitgenommen hat.", m: "Der Ausflug hat gezeigt, dass Technik verständlicher wird, wenn man sie selbst ausprobiert. Besonders beim Brückenbau haben wir gelernt, wie viel die richtige Form ausmacht.", k: ["ausflug|besuch|tag|museum", "gelernt|gezeigt|erfahren|mitgenommen|verstanden|gelohnt|begriffen"] }
      ], tipp: "Ein Schluss wiederholt nicht alles noch einmal. Er sagt, was bleibt: eine Erkenntnis, eine Empfehlung oder ein Ausblick." }
    ] },
    { kurz: "Sprache", ober: "Üben", titel: "Dritter Durchgang: Sprache", teile: [
      { art: "markieren", id: "umgang", nur: "R", tag: "Markieren", titel: "Was passt nicht auf eine Schulhomepage?", lead: "Drei Sätze aus Nicos Entwurf. Vier Ausdrücke stammen aus der <button class=\"term\" data-t=\"umgang\">Umgangssprache</button>.", satz: "Es war [[voll cool]]. Die Maschine war riesig und machte [[mega]] Lärm. Die Brücke von Sinas Gruppe ist gleich [[zusammengekracht]], das war [[echt witzig]].", finde: "die vier Ausdrücke aus der Umgangssprache", toleranz: 1, e: "So redet man in der Pause. In einem Bericht steht dafür zum Beispiel: beeindruckend, großen Lärm, eingestürzt." },
      { art: "markieren", id: "umgang", nur: "M", tag: "Markieren", titel: "Was passt nicht zum sachlichen Ton?", lead: "Vier Sätze nach Nicos Entwurf. Fünf Ausdrücke gehören in die <button class=\"term\" data-t=\"umgang\">Umgangssprache</button> oder sind ein Seitenhieb – in einem Bericht stören sie.", satz: "Die Busfahrt dauerte [[ewig]] und hinten haben wieder alle Musik gehört. Frau Thalmeier musste [[richtig schreien]]. [[Der Hammer]] war aber eindeutig der Workshop. Die Brücke von Sinas Gruppe ist sofort [[zusammengekracht]], [[typisch]].", finde: "die fünf Ausdrücke, die den sachlichen Ton stören", toleranz: 1, e: "„ewig“ und „richtig schreien“ übertreiben, „Der Hammer“ und „zusammengekracht“ sind Umgangssprache, „typisch“ ist ein Seitenhieb gegen Mitschüler." },
      { art: "luecke", id: "ersatz", nur: "R", tag: "Sachlich formulieren", titel: "Vier Stellen – besser gesagt", lead: "Hier sind vier Stellen aus dem Entwurf schon umgebaut. Setze die sachlichen Ausdrücke ein. Drei Wörter im Speicher passen nicht in einen Bericht – sie bleiben übrig.", absaetze: [
        ["Der Besuch im Technikmuseum war ", { g: "sehr beeindruckend" }, "."],
        ["Die Dampfmaschine machte ", { g: "großen" }, " Lärm."],
        ["Die Brücke einer anderen Gruppe ", { g: "stürzte" }, " sofort ein."],
        ["Wir haben auch ", { g: "einiges" }, " über Technik gelernt."]
      ], extra: ["mega", "voll cool", "krachte"] },
      { art: "luecke", id: "ersatz", nur: "M", tag: "Genau und sachlich formulieren", titel: "Fünf Stellen – besser gesagt", lead: "Hier sind fünf Stellen aus dem Entwurf schon umgebaut. Setze die genauen, sachlichen Ausdrücke ein. Drei Ausdrücke im Speicher passen nicht in einen Bericht – sie bleiben übrig.", absaetze: [
        ["Die Busfahrt dauerte ", { g: "fast eine Stunde" }, "."],
        ["Frau Thalmeier musste sehr ", { g: "laut" }, " sprechen."],
        [{ g: "Der Höhepunkt" }, " des Tages war der Workshop."],
        ["Die Brücke einer anderen Gruppe ", { g: "stürzte" }, " sofort ein."],
        ["Zum Schluss probierten wir ein ", { g: "Fahrrad mit Generator" }, " aus."]
      ], extra: ["ewig", "Der Hammer", "Ding"] },
      { art: "mc", id: "wdh", nur: "R", tag: "Wiederholungen", fragen: [
        { q: "Fünf Sätze in Nicos Entwurf beginnen mit „Dann“. Was hilft am besten?", o: ["andere Satzanfänge wählen: anschließend, später, zum Schluss", "vor jedes „Dann“ zusätzlich ein „Und“ setzen", "alle Sätze zu einem einzigen langen Satz verbinden"], a: 0, e: "Verschiedene Satzanfänge zeigen die Reihenfolge genauso gut – und der Text klingt nicht mehr wie eine Aufzählung." }
      ] },
      { art: "mc", id: "wdh", nur: "M", tag: "Wiederholungen", fragen: [
        { q: "Viermal steht in Nicos Entwurf „interessant“. Welche Überarbeitung hilft am meisten?", o: ["jedes Mal genau sagen, was an der Sache bemerkenswert war", "abwechselnd „spannend“, „toll“ und „super“ schreiben", "das Wort überall durch „sehr interessant“ ersetzen"], a: 0, e: "Ein anderes Wort für „interessant“ sagt den Lesern auch nicht mehr. Erst eine genaue Angabe hilft: Was hat überrascht? Was hat man gelernt?" }
      ] },
      { art: "merke", kopf: "MERKE: Sprache prüfen", html: "<ul><li><strong><button class=\"term\" data-t=\"zeitform\">Zeitform</button>:</strong> Ein Bericht steht im Präteritum – von Anfang bis Ende.</li><li><strong>Ton:</strong> sachlich, ohne Umgangssprache und ohne Spott.</li><li><strong>Wiederholungen:</strong> Satzanfänge abwechseln; leere Wörter wie „toll“ oder „interessant“ durch genaue Angaben ersetzen.</li><li><strong>Sätze:</strong> lieber zwei klare Sätze als einen endlosen.</li></ul>" },
      { art: "mc", id: "stil", m7: true, tag: "Stil prüfen", fragen: [
        { q: "In einem Bericht stehen diese beiden Sätze: „Der Hammer war aber eindeutig der Workshop.“ – „Insgesamt kann gesagt werden, dass der Ausflug lehrreich war.“ Was stimmt hier nicht?", o: ["Der Ton schwankt zwischen lässig und steif – der Text braucht einen einheitlichen, sachlichen Stil.", "Beide Sätze sind für einen Bericht zu kurz und müssten mit „und“ verbunden werden.", "In beiden Sätzen fehlt ein Komma, deshalb sind sie schwer zu verstehen."], a: 0, e: "Ein Text wirkt nur dann stimmig, wenn er einen Ton durchhält. Für die Schulhomepage passt weder Pausenhof-Sprache noch Amtsdeutsch, sondern ein klarer, sachlicher Stil." }
      ] },
      { art: "offen", id: "wurm", m7: true, tag: "Satz teilen", titel: "Aus einem Bandwurmsatz werden drei Sätze", fragen: [
        { q: "Teile diesen Satz in drei Sätze, ohne etwas Wichtiges wegzulassen: „Die Maschine ist über hundert Jahre alt und läuft immer noch und wenn sie läuft, dann zittert der ganze Boden und man versteht sein eigenes Wort nicht mehr und Frau Thalmeier musste richtig schreien.“", m: "Die Maschine ist über hundert Jahre alt und läuft immer noch. Wenn sie läuft, zittert der ganze Boden. Man versteht sein eigenes Wort nicht mehr, deshalb musste Frau Thalmeier sehr laut sprechen.", k: ["läuft", "zittert", "thalmeier"] }
      ], tipp: "Suche die Stellen, an denen ein neuer Gedanke beginnt. Dort kann ein Punkt stehen. Ersetze auch „richtig schreien“ durch einen sachlichen Ausdruck." }
    ] },
    { kurz: "Rechtschreibung", ober: "Üben", titel: "Vierter Durchgang: Rechtschreibung und Kommas", teile: [
      { art: "markieren", id: "rs", nur: "R", tag: "Fehler finden", titel: "Drei Wörter stimmen nicht", lead: "Jetzt liest du langsam – Wort für Wort. Drei Sätze aus Nicos Entwurf:", satz: "Ich fand es toll [[das]] wir selbst etwas machen durften. Das [[bauen]] hat mir am meisten Spaß gemacht. Am [[ende]] durften wir noch in den Museumsladen.", finde: "die drei falsch geschriebenen Wörter", toleranz: 0, e: "Richtig heißt es: „toll, dass wir …“ (mit Komma davor) · „das Bauen“ (aus dem Verb ist ein Nomen geworden) · „am Ende“ (Nomen)." },
      { art: "markieren", id: "rs", nur: "M", tag: "Fehler finden", titel: "Drei Wörter stimmen nicht", lead: "Jetzt liest du langsam – Wort für Wort. Drei Sätze nach Nicos Entwurf:", satz: "Die [[Maschiene]] ist über hundert Jahre alt. Ich hätte nie gedacht [[das]] man die Buchstaben spiegelverkehrt legen muss. Beim [[testen]] hielt unsere Brücke drei Kilogramm aus.", finde: "die drei falsch geschriebenen Wörter", toleranz: 0, e: "Richtig heißt es: „Maschine“ (ohne ie) · „gedacht, dass man …“ (mit Komma davor) · „beim Testen“ (nach „beim“ wird das Verb zum Nomen)." },
      { art: "mc", id: "komma", nur: "R", tag: "Komma setzen", fragen: [
        { q: "In diesem Satz aus dem Entwurf fehlt ein Komma: „Unsere Brücke hielt drei Kilo aus weil wir das Papier zu Röhren gerollt hatten.“ Wo gehört es hin?", o: ["vor „weil“", "nach „weil“", "vor „aus“", "nach „Papier“"], a: 0, e: "Mit „weil“ beginnt ein Nebensatz. Er wird durch ein Komma vom Hauptsatz getrennt." }
      ] },
      { art: "mc", id: "komma", nur: "M", tag: "Komma setzen", fragen: [
        { q: "In diesem Satz aus dem Entwurf fehlt ein Komma: „In Vierergruppen sollten wir aus zwanzig Blatt Papier eine Brücke bauen die möglichst viel Gewicht trägt.“ Wo gehört es hin?", o: ["vor „die“", "nach „die“", "vor „eine Brücke“", "nach „Vierergruppen“"], a: 0, e: "Mit „die“ beginnt ein Relativsatz, der die Brücke genauer beschreibt. Er wird durch ein Komma abgetrennt." }
      ] },
      { art: "sort", id: "liste", tag: "Fehler sortieren", titel: "Nicos Fehlerliste", lead: "Nico hat die Fehler aus seinen letzten drei Texten gesammelt. Sortiere sie nach der Fehlerart – dann siehst du, wo er am häufigsten danebenliegt.", buckets: ["das oder dass", "groß oder klein", "Komma fehlt"], cols: 200, fertig: "✅ Richtig sortiert! Zähle jetzt nach: In welchem Fach liegen die meisten Karten?", items: [
        { t: "Ich hoffe, das es klappt.", b: 0 },
        { t: "Er sagte, das er später kommt.", b: 0 },
        { t: "Schade, das der Bus weg war.", b: 0 },
        { t: "Mir ist klar, das ich üben muss.", b: 0 },
        { t: "Das laufen fiel allen schwer.", b: 1 },
        { t: "Am anfang war es still.", b: 1 },
        { t: "Wir blieben drinnen weil es regnete.", b: 2 },
        { t: "Ich freue mich wenn du kommst.", b: 2 }
      ] },
      { art: "mc", id: "schwer", tag: "Fehlerschwerpunkt", fragen: [
        { q: "Wo liegt Nicos Fehlerschwerpunkt – und was sollte er deshalb tun?", o: ["bei „das“ und „dass“ – er prüft künftig jedes „das“ mit der Ersatzprobe", "beim Komma – er setzt künftig vor jedes „und“ ein Komma", "bei der Großschreibung – er schreibt künftig alle Verben groß"], a: 0, e: "Vier von acht Fehlern betreffen „das“ und „dass“. Die Ersatzprobe hilft: Kann man „dieses“, „jenes“ oder „welches“ einsetzen, schreibt man „das“ – sonst „dass“." }
      ] },
      { art: "merke", kopf: "MERKE: Den eigenen Fehlerschwerpunkt kennen", html: "<ul><li>Sammle deine Fehler aus mehreren Texten und sortiere sie nach ihrer Art.</li><li>Die Fehlerart, die am häufigsten vorkommt, ist dein <button class=\"term\" data-t=\"schwerpunkt\">Fehlerschwerpunkt</button>.</li><li>Lies deinen Text im letzten Durchgang einmal nur auf diesen Fehler hin durch – zum Beispiel mit der <button class=\"term\" data-t=\"ersatzprobe\">Ersatzprobe</button>.</li><li>Nutze Hilfen: Wörterbuch und Rechtschreibprüfung. Verlass dich aber nicht blind auf sie – „das“ und „dass“ oder ein fehlendes Komma übersieht die Rechtschreibprüfung oft.</li></ul>" },
      { art: "offen", id: "mein", tag: "Über dich selbst", titel: "Dein eigener Fehlerschwerpunkt", fragen: [
        { q: "Und du? Nenne deinen eigenen Fehlerschwerpunkt und schreibe dazu, was du beim Überarbeiten dagegen tust.", m: "Mein Fehlerschwerpunkt ist die Groß- und Kleinschreibung. Beim Überarbeiten prüfe ich deshalb bei jedem Wort, ob ein Artikel davor passt.", k: ["fehler|schwerpunkt|vergesse|verwechsle|schreibe ich oft|problem", "prüfe|probe|lese|schlage|wörterbuch|kontroll|achte|übe|frage"] }
      ], tipp: "Schau in deine letzte Probe oder in dein Heft: Welche Art von Fehler wurde am häufigsten angestrichen?" }
    ] },
    { kurz: "Feedback", ober: "Anwenden", titel: "Feedback, Ziel – und dann selbst überarbeiten", teile: [
      { art: "beispiel", kopf: "Zwei Rückmeldungen an Nico", html: "<p><strong>Ronja:</strong> „Der Text ist langweilig. Mach ihn halt besser.“</p><p><strong>Tamino:</strong> „Mir gefällt, dass man genau erfährt, was ihr im Museum ausprobiert habt. Mir ist aufgefallen, dass der Text keinen einzigen Absatz hat. Du könntest bei jeder Station einen neuen Absatz anfangen.“</p><p>Mit welcher Rückmeldung kann Nico weiterarbeiten?</p>" },
      { art: "mc", id: "fb", tag: "Feedback prüfen", fragen: [
        { q: "Welche Rückmeldung hilft Nico am meisten?", o: ["„Du schreibst oft dasselbe Wort. Such an zwei Stellen ein genaueres.“", "„Irgendwie gefällt mir der Mittelteil nicht so richtig.“", "„Alles super, an deinem Text würde ich nichts ändern!“", "„Typisch, du kannst einfach keine Berichte schreiben.“"], a: 0, e: "Gutes Feedback benennt genau, was auffällt, und macht einen Vorschlag. Ein bloßes Gefühl, reines Lob oder ein Angriff helfen nicht weiter." }
      ] },
      { art: "merke", kopf: "MERKE: Feedback geben – Feedback nutzen", html: "<p><strong>Geben</strong> – in drei Schritten:</p><ol><li><strong>Gelungen:</strong> „Mir gefällt, dass …“</li><li><strong>Beobachtung:</strong> „Mir ist aufgefallen, dass …“ – genau und mit Textstelle</li><li><strong>Tipp:</strong> „Du könntest …“</li></ol><p><strong>Nutzen:</strong> Hör dir das <button class=\"term\" data-t=\"feedback\">Feedback</button> an, ohne dich zu verteidigen. Frag nach, wenn du etwas nicht verstehst. Prüfe jeden Hinweis am Text – und entscheide dann selbst, was du änderst. Es bleibt dein Text.</p>" },
      { art: "offen", id: "rueck", tag: "Feedback geben", titel: "Deine Rückmeldung an Nico", fragen: [
        { q: "Gib Nico eine Rückmeldung in drei Sätzen: etwas Gelungenes, eine Beobachtung und einen Tipp. Nenne etwas anderes als Tamino.", m: "Mir gefällt, dass du genau erzählst, wie ihr die Brücke gebaut habt. Mir ist aufgefallen, dass du mehrmals die Zeitform wechselst. Du könntest den ganzen Text ins Präteritum setzen.", k: ["gefällt|gelungen|gut |schön|stark|toll|super", "aufgefallen|fehlt|bemerkt|allerdings|aber|jedoch", "könntest|tipp|vorschlag|probier|versuch|würde|solltest"] }
      ], tipp: "Nimm die drei Satzanfänge aus dem Merkkasten.", hilfen: ["Satz 1: Mir gefällt, dass …", "Satz 2: Mir ist aufgefallen, dass …", "Satz 3: Du könntest …"] },
      { art: "text", html: "<p>Niemand verbessert alles auf einmal. Profis nehmen sich ein <button class=\"term\" data-t=\"ziel\">Überarbeitungsziel</button> vor: einen Bereich und eine genaue Aufgabe. Zum Beispiel: <em>Sprache – ich ersetze alle Ausdrücke aus der Umgangssprache durch sachliche.</em> Am Ende lässt sich prüfen, ob das Ziel erreicht ist.</p>" },
      { art: "offen", id: "ziel", tag: "Ziel wählen", titel: "Ein Überarbeitungsziel für Nico", fragen: [
        { q: "Wähle für Nicos Entwurf ein Überarbeitungsziel aus einem Bereich deiner Wahl: Inhalt, Aufbau, Sprache oder Rechtschreibung. Formuliere es so genau, dass Nico weiß, was er tun soll.", m: "Bereich Aufbau: Nico gliedert den Text in Absätze – eine Einleitung, je einen Absatz für jede Station und einen Schluss.", k: ["inhalt|aufbau|sprache|rechtschreibung|zeichensetzung", "nico|er |ich |den text|der text"] }
      ], tipp: "Ein gutes Ziel nennt den Bereich und sagt genau, was getan wird – nicht nur „besser machen“." },
      { art: "schreiben", id: "neu", nur: "R", tag: "Schreibtrainer", titel: "Einen Abschnitt überarbeiten: In der Werkstatt", min: 40,
        auftrag: "<p>Jetzt überarbeitest du selbst. Das ist der Abschnitt über die Werkstatt aus Nicos Entwurf:</p><p><em>Dann waren wir in der Werkstatt. Dort bauen wir in Gruppen eine Brücke aus Papier. Unsere Brücke hielt drei Kilo aus weil wir das Papier zu Röhren gerollt hatten. Das bauen hat mir am meisten Spaß gemacht. Die Brücke von Sinas Gruppe ist gleich zusammengekracht, das war echt witzig.</em></p><p>Schreibe den Abschnitt neu (mindestens 40 Wörter). Das sind deine Ziele:</p><ul><li>Alles steht im Präteritum.</li><li>Die Sprache ist sachlich – ohne Umgangssprache und ohne Spott.</li><li>Der Abschnitt beginnt nicht mit „Dann“.</li><li>Rechtschreibung und Kommas stimmen.</li></ul><p>Du darfst etwas ergänzen, zum Beispiel wie viele Kinder in einer Gruppe waren.</p>",
        kriterien: ["Alle Verben stehen im Präteritum.", "Kein Ausdruck aus der Umgangssprache ist stehen geblieben.", "Über die andere Gruppe schreibe ich sachlich oder gar nicht.", "Vor „weil“ steht ein Komma, „das Bauen“ ist großgeschrieben.", "Mein Abschnitt beginnt mit einem anderen Wort als „Dann“."],
        starter: ["Anschließend …", "In der Werkstatt …", "Unsere Brücke hielt …", "Am meisten Spaß machte mir …"] },
      { art: "schreiben", id: "neu", nur: "M", tag: "Schreibtrainer", titel: "Den zweiten Teil überarbeiten: Workshop und Schluss", min: 80,
        auftrag: "<p>Jetzt überarbeitest du selbst – den zweiten Teil von Nicos Entwurf, vom Workshop bis zum Schluss:</p><p><em>Der Hammer war aber eindeutig der Workshop. In Vierergruppen sollten wir aus zwanzig Blatt Papier eine Brücke bauen die möglichst viel Gewicht trägt. Unsere Gruppe rollte das Papier zu Röhren, weil Röhren stabiler sind als flache Blätter. Beim testen hielt unsere Brücke drei Kilogramm aus. Die Brücke von Sinas Gruppe ist sofort zusammengekracht, typisch. Zum Schluss durften wir noch irgendein Ding ausprobieren, bei dem man auf einem Fahrrad Strom erzeugt, das war auch interessant. Irgendwie war das Ganze schon ziemlich interessant. Insgesamt kann gesagt werden, dass der Ausflug lehrreich war.</em></p><p>Wähle zuerst <b>zwei Überarbeitungsziele</b> und nenne sie in der ersten Zeile, zum Beispiel: „Ziele: einheitlicher Ton, aussagekräftiger Schluss“. Schreibe den Teil dann neu (mindestens 80 Wörter):</p><ul><li>einheitlich sachlicher Ton, passend für die Leser der Schulhomepage</li><li>genaue Angaben statt „irgendein Ding“ und „interessant“</li><li>durchgehend Präteritum, richtige Schreibung und Kommas</li><li>ein Schluss, der sagt, was die Klasse von dem Ausflug mitgenommen hat</li></ul>",
        kriterien: ["In der ersten Zeile stehen meine zwei Überarbeitungsziele.", "Der Ton ist durchgehend sachlich – ohne Umgangssprache, Spott und steife Formeln.", "Ungenaue Stellen sind durch genaue Angaben ersetzt.", "Zeitform, Rechtschreibung und Kommas stimmen.", "Der Schluss zieht ein Fazit, das wirklich etwas aussagt."],
        starter: ["Ziele: …", "Den Höhepunkt des Tages bildete …", "Beim Testen …", "Zum Schluss …", "Der Ausflug hat gezeigt, dass …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Beim Überarbeiten kümmert man sich zuerst um die Kommas und zuletzt um den Inhalt.", false],
        ["Eine Checkliste zeigt, was ein Text schon erfüllt und was noch fehlt.", true],
        ["Ein Bericht über einen Ausflug steht durchgehend im Präteritum.", true],
        ["Gutes Feedback nennt etwas Gelungenes, eine genaue Beobachtung und einen Tipp.", true],
        ["Wer Feedback bekommt, muss jeden Vorschlag übernehmen.", false],
        ["Die Rechtschreibprüfung am Computer findet zuverlässig jeden Fehler.", false]
      ] }
    ] }
  ],
  weiter: { href: "beruf_01.html", titel: "Beruf und Kommunikation · Modul 1: Das Bewerbungsschreiben", text: "Das war das letzte Modul im Bereich „Schreiben und Aufsätze“. Planen, schreiben, überarbeiten – das brauchst du gleich wieder: im Bereich „Beruf, Kommunikation und Präsentation“ schreibst du ein <strong>Anschreiben für einen Praktikumsplatz</strong>." }
});
