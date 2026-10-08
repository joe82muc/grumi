/* Deutsch 8 · Lesen, Sachtexte und Medien · Modul 1: Sachtexte erschließen
   (Lesestrategie in Schritten: vermuten, überfliegen, in Sinnabschnitte gliedern, Zwischenüberschriften finden,
   Hauptaussagen herausarbeiten und selbst formulieren, den Textaufbau erkennen; M8: zusammenfassen und beurteilen)
   LehrplanPLUS D8 2.1 (Lesetechniken und -strategien; R8: einfache Superstrukturen erkennen, M8: Inhalt und Intention
   selbstständig erschließen, diagonales Lesen), 2.3 (Informationen aus anspruchsvollen pragmatischen Texten entnehmen).
   Texte: „Grüne Dächer gegen heiße Städte“ (texte/lesen/daecher-r.js und -m.js) – eigener Sachtext,
   R8 8 Abschnitte, 66 Zeilen · M8 8 Abschnitte, 89 Zeilen. */
D7Kit.seite({
  id: "les-01",
  titel: "Sachtexte erschließen",
  einleitung: "Lange Sachtexte wirken auf den ersten Blick wie eine Wand aus Wörtern. Heute lernst du, wie du in Schritten hindurchkommst: erst der Überblick, dann die Abschnitte, dann das Wichtigste. Dein Text handelt von Dächern, auf denen Pflanzen wachsen.",
  zeit: "etwa 45 Minuten",
  ziele: ["👀 Ich verschaffe mir mit Überschrift und Überfliegen einen Überblick.", "🧩 Ich gliedere einen Text in Sinnabschnitte und finde Zwischenüberschriften.", "🎯 Ich arbeite Hauptaussagen heraus und formuliere sie selbst.", "🧱 Ich erkenne, wie ein Sachtext aufgebaut ist."],
  haupttext: { R: "les-daecher-r", M: "les-daecher-m" },
  quiz: { profi: "Text-Profi" },
  glossar: {
    erschliessen: ["einen Text erschließen", "Schritt für Schritt herausfinden, was ein Text sagt und wie er aufgebaut ist."],
    ueberfliegen: ["überfliegen", "Einen Text schnell durchsehen, ohne jeden Satz zu lesen: Überschrift, Abschnittsanfänge, auffällige Wörter. Man sagt auch: diagonal lesen."],
    sinnabschnitt: ["Sinnabschnitt", "Ein Teil des Textes, in dem es um einen Gedanken geht. Meist beginnt er mit einem neuen Absatz."],
    zwischen: ["Zwischenüberschrift", "Eine kurze Überschrift über einem Abschnitt. Sie nennt sein Thema in wenigen Wörtern."],
    schluessel: ["Schlüsselwort", "Ein Wort, ohne das man einen Abschnitt nicht versteht – meist ein Nomen oder ein wichtiges Verb."],
    hauptaussage: ["Hauptaussage", "Das Wichtigste eines Abschnitts oder eines ganzen Textes in einem Satz – ohne Beispiele und genaue Zahlen."],
    aufbau: ["Textaufbau", "Die Reihenfolge der Teile eines Textes, zum Beispiel: Problem – Ursachen – Lösung – Grenzen – Ausblick."],
    signal: ["Signalwort", "Ein Wort, das zeigt, wie zwei Gedanken zusammenhängen: außerdem (Ergänzung), jedoch (Einschränkung), deshalb (Folge)."],
    waermeinsel: ["Wärmeinsel", "Eine Stadt, die deutlich wärmer ist als ihre Umgebung, weil Stein und Asphalt Wärme speichern."],
    verdunsten: ["verdunsten", "Wasser wird nach und nach zu Wasserdampf, ohne zu kochen. Dabei wird der Umgebung Wärme entzogen."],
    substrat: ["Substrat", "Die besondere, leichte Erdmischung, in der die Pflanzen auf einem Gründach wachsen."]
  },
  stationen: [
    { kurz: "Überblick", ober: "Ausprobieren", titel: "Erst der Überblick, dann die Einzelheiten", teile: [
      { art: "text", html: "<p class=\"lead\">Zwei Seiten Text, viele Fachwörter – und in zwanzig Minuten sollst du Fragen dazu beantworten. Wer jetzt oben anfängt und Wort für Wort liest, verliert schnell den Faden.</p><p>Fang anders an: mit der Überschrift. Sie lautet <strong>„Grüne Dächer gegen heiße Städte“</strong>.</p>" },
      { art: "mc", id: "vor", tag: "Vor dem Lesen", fragen: [
        { q: "Was erwartest du von einem Text mit dieser Überschrift?", o: ["eine Erklärung, wie bepflanzte Dächer gegen Hitze helfen", "eine Erzählung über einen heißen Sommertag in der Stadt", "eine Anleitung, wie man ein Dach grün anstreicht", "einen Bericht über Waldbrände in heißen Ländern"], a: 0, e: "„Grün“ steht hier für Pflanzen, und das Wort „gegen“ zeigt: Es geht um ein Mittel gegen ein Problem. Mit so einer Vermutung liest du gezielter." }
      ] },
      { art: "text", html: "<p>Profis <button class=\"term\" data-t=\"erschliessen\">erschließen</button> einen Sachtext in fünf Schritten. Den ersten hast du gerade gemacht.</p>" },
      { art: "karten", karten: [
        { ic: "💭", titel: "1 Vermuten", text: "Überschrift lesen: Worum könnte es gehen? Was weiß ich schon darüber?" },
        { ic: "👀", titel: "2 Überfliegen", text: "Abschnittsanfänge und auffällige Wörter ansehen – höchstens zwei Minuten." },
        { ic: "🧩", titel: "3 Gliedern", text: "Genau lesen, Sinnabschnitte erkennen, Zwischenüberschriften finden." },
        { ic: "🎯", titel: "4 Verdichten", text: "Schlüsselwörter suchen und die Hauptaussage jedes Abschnitts formulieren." },
        { ic: "🧱", titel: "5 Aufbau erkennen", text: "Wie hängen die Abschnitte zusammen? Wo steht was?" }] },
      { art: "lesetext", tag: "Überfliegen", titel: "Dein Text", lead: "<button class=\"term\" data-t=\"ueberfliegen\">Überfliege</button> den Text: Lies von jedem Abschnitt nur den ersten Satz und achte auf Wörter, die auffallen. Genau lesen kommt später. Drei Fachwörter aus dem Text kannst du hier schon antippen: <button class=\"term\" data-t=\"waermeinsel\">Wärmeinsel</button>, <button class=\"term\" data-t=\"verdunsten\">verdunsten</button>, <button class=\"term\" data-t=\"substrat\">Substrat</button>.", lesetext: { R: "les-daecher-r", M: "les-daecher-m" } },
      { art: "mc", id: "ueb", tag: "Nach dem Überfliegen", fragen: [
        { q: "Was ist das Thema des Textes?", o: ["Dachbegrünung als Mittel gegen die Überhitzung von Städten", "die Folgen des Klimawandels für die Landwirtschaft", "die richtige Pflege von Gärten und Parks in der Stadt", "der Einbau von Klimaanlagen in ältere Wohnhäuser"], a: 0, e: "Das verraten schon die Überschrift und die ersten Sätze der Abschnitte: Hitze in der Stadt – und Dächer, die dagegen helfen." },
        { q: "Was will der Text vor allem?", o: ["sachlich informieren und Zusammenhänge erklären", "die Leser zum Kauf eines Gründachs überreden", "mit einer spannenden Geschichte unterhalten", "eine persönliche Meinung durchsetzen"], a: 0, e: "Der Text erklärt Ursachen, Aufbau, Vorteile und Grenzen – ohne Werbung und ohne „ich finde“. Daran erkennst du einen Sachtext." }
      ] }
    ] },
    { kurz: "Abschnitte", ober: "Verstehen", titel: "Sinnabschnitte und Zwischenüberschriften", teile: [
      { art: "paare", id: "abs", nur: "R", tag: "Zuordnen", titel: "Welche Überschrift gehört zu welchem Abschnitt?", lead: "Jetzt liest du genau – Abschnitt für Abschnitt. Der Text hat acht <button class=\"term\" data-t=\"sinnabschnitt\">Sinnabschnitte</button>. Ordne sechs von ihnen ihre <button class=\"term\" data-t=\"zwischen\">Zwischenüberschrift</button> zu. Mit <strong>📖 Text</strong> blendest du den Text ein.", paare: [
        ["Abschnitt 2 (Z. 8–16)", "Warum Städte sich aufheizen"], ["Abschnitt 3 (Z. 17–25)", "So kühlt ein Gründach"], ["Abschnitt 4 (Z. 26–34)", "Der Aufbau in Schichten"],
        ["Abschnitt 5 (Z. 35–44)", "Zwei Arten der Begrünung"], ["Abschnitt 6 (Z. 45–54)", "Weitere Vorteile"], ["Abschnitt 7 (Z. 55–61)", "Kosten und Gewicht als Hindernis"]],
        hilfen: ["Lies von jedem Abschnitt zuerst nur den ersten Satz – er verrät meist das Thema.", "Achte auf Wörter, die sich im Abschnitt wiederholen: In Abschnitt 4 ist es zum Beispiel das Wort „Schicht“."] },
      { art: "paare", id: "abs", nur: "M", tag: "Zuordnen", titel: "Welche Überschrift gehört zu welchem Abschnitt?", lead: "Jetzt liest du genau – Abschnitt für Abschnitt. Der Text hat acht <button class=\"term\" data-t=\"sinnabschnitt\">Sinnabschnitte</button>. Ordne sechs von ihnen ihre <button class=\"term\" data-t=\"zwischen\">Zwischenüberschrift</button> zu. Mit <strong>📖 Text</strong> blendest du den Text ein.", paare: [
        ["Abschnitt 2 (Z. 10–21)", "Ursachen der städtischen Wärmeinsel"], ["Abschnitt 3 (Z. 22–34)", "Kühlung durch Verdunstung"], ["Abschnitt 4 (Z. 35–46)", "Schicht für Schicht: der Aufbau"],
        ["Abschnitt 5 (Z. 47–57)", "Extensiv oder intensiv?"], ["Abschnitt 6 (Z. 58–68)", "Zusätzlicher Nutzen für Stadt und Natur"], ["Abschnitt 7 (Z. 69–79)", "Kein Allheilmittel"]] },
      { art: "merke", kopf: "MERKE: Gute Zwischenüberschriften", html: "<ul><li>Ein Sinnabschnitt behandelt <strong>einen</strong> Gedanken.</li><li>Die Zwischenüberschrift nennt das <strong>Thema</strong> des Abschnitts – kein Beispiel und keine Einzelheit daraus.</li><li>Sie ist kurz: zwei bis sechs Wörter, als Wortgruppe („Der Aufbau in Schichten“) oder als Frage („Wie ist ein Gründach aufgebaut?“).</li></ul>" },
      { art: "mc", id: "ues", nur: "R", tag: "Überschriften prüfen", fragen: [
        { q: "Welche Zwischenüberschrift passt am besten zum letzten Abschnitt (Z. 62–66)?", o: ["Erst viele Dächer helfen", "Geld von der Stadt", "Bäume und Parks", "Ein heißer Sommer"], a: 0, e: "Der Abschnitt sagt: Ein Dach allein hilft wenig, viele zusammen schon. „Geld von der Stadt“ und „Bäume und Parks“ nennen nur Einzelheiten, „Ein heißer Sommer“ trifft das Thema nicht." },
        { q: "Warum ist „Der Mauerpfeffer“ keine gute Überschrift für Abschnitt 5 (Z. 35–44)?", o: ["Sie nennt nur ein Beispiel, nicht das Thema.", "Sie ist für eine Überschrift viel zu lang.", "Das Wort kommt im Abschnitt gar nicht vor.", "Pflanzennamen sind in Überschriften verboten."], a: 0, e: "Thema des Abschnitts sind die zwei Arten der Begrünung. Der Mauerpfeffer ist nur ein Beispiel für eine Pflanze." }
      ] },
      { art: "mc", id: "ues", nur: "M", tag: "Überschriften prüfen", fragen: [
        { q: "Welche Zwischenüberschrift erfasst den letzten Abschnitt (Z. 80–89) am genauesten?", o: ["Wirksam erst im Verbund mit anderen Maßnahmen", "Zuschüsse der Städte für neue Gebäude", "Solaranlagen und Gründach kombinieren", "Das Stadtklima in heißen Sommern"], a: 0, e: "Kern des Abschnitts ist die Folgerung: Gründächer wirken erst zusammen mit Bäumen, Parks und vielen weiteren Dächern. Zuschüsse und Solaranlagen sind Einzelheiten, „Stadtklima“ ist zu allgemein." },
        { q: "Jemand schlägt für Abschnitt 5 (Z. 47–57) die Überschrift „Der Mauerpfeffer“ vor. Was ist daran falsch?", o: ["Sie greift ein Beispiel heraus und verfehlt das Thema.", "Sie ist zu kurz, um eine Überschrift zu sein.", "Fachwörter dürfen in Überschriften nicht stehen.", "Sie enthält eine Wertung, die im Text fehlt."], a: 0, e: "Thema des Abschnitts sind die zwei Formen der Begrünung. Der Mauerpfeffer ist nur ein Beispiel für eine anspruchslose Pflanze." }
      ] },
      { art: "offen", id: "eig", nur: "R", tag: "Eigene Überschrift", titel: "Jetzt du", fragen: [
        { q: "Finde eine eigene Zwischenüberschrift für Abschnitt 1 (Z. 1–7). Sie soll höchstens sechs Wörter haben.", m: "Zum Beispiel: Hitze in der Stadt als Problem. Oder: Wenn die Stadt zu heiß wird.", k: ["hitze|heiß|sommer|stadt|städte|warm|wärme"] }
      ], tipp: "Frage dich: Welches Problem beschreibt der Abschnitt? Nenne es in wenigen Wörtern.", hilfen: ["Schlüsselwörter des Abschnitts: Innenstadt – heiß – Hitze – gefährlich.", "Du kannst auch eine Frage stellen: Warum …?"] },
      { art: "offen", id: "eig", nur: "M", tag: "Eigene Überschrift", titel: "Jetzt du", fragen: [
        { q: "Formuliere für Abschnitt 1 (Z. 1–9) zwei Zwischenüberschriften: eine als Frage und eine als Wortgruppe ohne Verb.", m: "Als Frage: Warum müssen sich Städte an die Hitze anpassen? Als Wortgruppe: Hitze in der Stadt – ein wachsendes Problem.", k: ["?", "hitze|heiß|sommer|stadt|städte|wärme|backofen|backöfen|abkühl"] }
      ], tipp: "Benenne das Problem des Abschnitts – einmal mit Fragezeichen, einmal nur mit Nomen." }
    ] },
    { kurz: "Hauptaussage", ober: "Analysieren", titel: "Hauptaussagen herausarbeiten", teile: [
      { art: "markieren", id: "mk", nur: "R", tag: "Markieren", titel: "Welche Wörter tragen den Abschnitt?", lead: "Zwei Sätze nach Abschnitt 3. Vier <button class=\"term\" data-t=\"schluessel\">Schlüsselwörter</button> genügen, um zu erklären, wie ein Gründach kühlt.", satz: "Wenn die Sonne scheint, [[verdunstet]] das gespeicherte [[Wasser]]. Dabei wird der Umgebung [[Wärme]] entzogen, und die Luft über dem Dach [[kühlt ab]].", finde: "die vier Schlüsselwörter", e: "verdunstet – Wasser – Wärme – kühlt ab: Damit kannst du den Vorgang fast schon erklären." },
      { art: "markieren", id: "mk", nur: "M", tag: "Markieren", titel: "Welche Wörter tragen den Abschnitt?", lead: "Ein Satz nach Abschnitt 2. Vier <button class=\"term\" data-t=\"schluessel\">Schlüsselwörter</button> genügen, um die wichtigste Ursache der Hitze zu erklären.", satz: "Vor allem aber fehlt es an [[Pflanzen]] und offenen [[Böden]]: Wo der Boden [[versiegelt]] ist, kann kein Wasser [[verdunsten]].", finde: "die vier Schlüsselwörter", e: "Pflanzen – Böden – versiegelt – verdunsten: Wo nichts verdunstet, fehlt die Kühlung." },
      { art: "text", html: "<p>Aus den Schlüsselwörtern wird die <button class=\"term\" data-t=\"hauptaussage\">Hauptaussage</button>: ein Satz, der sagt, was der Abschnitt über das Thema mitteilt. Beispiele, Aufzählungen und genaue Zahlen gehören nicht hinein. Mach die Weglassprobe: Versteht man den Abschnitt auch ohne diesen Satz? Dann war es eine Einzelheit.</p>" },
      { art: "sort", id: "hd", tag: "Sortieren", titel: "Hauptaussage oder Einzelheit?", lead: "Du willst jemandem in zwei Minuten erklären, was im Text steht. Was brauchst du dafür, was kannst du weglassen?", buckets: ["Hauptaussage", "Einzelheit oder Beispiel"], cols: 240, items: [
        { t: "Städte heizen sich stärker auf als ihr Umland.", b: 0 },
        { t: "Gründächer kühlen, weil Wasser verdunstet.", b: 0 },
        { t: "Ein Gründach besteht aus mehreren Schichten.", b: 0 },
        { t: "Es gibt eine einfache und eine aufwendige Art der Begrünung.", b: 0 },
        { t: "Auf dem Dach wächst zum Beispiel Mauerpfeffer.", b: 1 },
        { t: "Ein dunkles Flachdach kann über 60 Grad heiß werden.", b: 1 },
        { t: "Wildbienen finden auf begrünten Dächern einen Lebensraum.", b: 1 },
        { t: "Die dünne Erdschicht misst etwa zehn Zentimeter.", b: 1 }
      ] },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Text?", lesetext: "les-daecher-r", fragen: [
        { q: "In welchen Zeilen erklärt der Text, was eine Wärmeinsel ist?", zeilen: [14, 16], e: "Hinter dem Doppelpunkt steht die Erklärung: Die Stadt ist wärmer als ihre Umgebung.", tipp: "Suche das Wort „Wärmeinsel“ und lies den Satz bis zum Punkt." },
        { q: "Wo steht, wodurch die Luft über einem Gründach abkühlt?", zeilen: [19, 22], e: "Das Wasser verdunstet und entzieht der Umgebung Wärme.", tipp: "Suche im dritten Abschnitt das Wort „verdunstet“." },
        { q: "Wo steht, wozu die Folie ganz unten im Gründach dient?", zeilen: [28, 29], e: "Sie hält die Wurzeln vom Dach fern.", tipp: "Suche das Wort „Folie“ und lies den Satz danach." },
        { q: "Wo steht, was ein Gründach bei starkem Regen leistet?", zeilen: [48, 50], e: "Es saugt den Regen auf wie ein Schwamm und gibt ihn langsam wieder ab.", tipp: "Suche im Abschnitt über die weiteren Vorteile das Wort „Schwamm“." }
      ], hilfen: ["Überlege zuerst, in welchem Abschnitt die Antwort stehen muss. Deine Zwischenüberschriften helfen dir dabei.", "Tippe nur die Zeilen an, in denen die Antwort wirklich steht – nicht den ganzen Abschnitt."] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Text?", lesetext: "les-daecher-m", fragen: [
        { q: "Wo nennt der Text den Fachbegriff für die Überhitzung der Städte?", zeilen: [18, 19], e: "Fachleute sprechen von der städtischen Wärmeinsel.", tipp: "Der Begriff steht am Ende des Abschnitts über die Ursachen." },
        { q: "Wo wird erklärt, warum Verdunsten kühlt?", zeilen: [25, 27], e: "Zum Verdunsten wird Energie gebraucht – sie wird der Umgebung als Wärme entzogen.", tipp: "Suche das Wort „Verdunstungskälte“ und lies den Satz von Anfang an." },
        { q: "Wo steht, welche Aufgabe das Filtervlies hat?", zeilen: [41, 43], e: "Es hält feine Erdteilchen zurück, damit die Dränschicht nicht verstopft.", tipp: "Suche im Abschnitt über den Aufbau das Wort „Filtervlies“." },
        { q: "Wo steht, wodurch ein Gründach die Kanalisation entlastet?", zeilen: [59, 61], e: "Es hält bei Starkregen viel Wasser zurück und gibt es verzögert ab.", tipp: "Suche das Wort „Starkregen“." }
      ] }
    ] },
    { kurz: "Aufbau", ober: "Analysieren", titel: "Den Textaufbau erkennen", teile: [
      { art: "ordnen", id: "bau", tag: "Reihenfolge", titel: "Der Bauplan des Textes", lead: "Ein guter Sachtext ist kein Haufen von Informationen – er hat einen <button class=\"term\" data-t=\"aufbau\">Aufbau</button>. Bring die Bausteine in die Reihenfolge, in der sie im Text vorkommen.", schritte: [
        "Problem: Städte werden im Sommer zu heiß",
        "Ursachen: warum sich Städte aufheizen",
        "Lösung: wie ein begrüntes Dach kühlt",
        "Aufbau und Arten des Gründachs",
        "weitere Vorteile",
        "Grenzen und Kosten",
        "Ausblick: Erst viele Maßnahmen zusammen wirken"
      ] },
      { art: "merke", kopf: "MERKE: Der rote Faden", html: "<ul><li>Viele Sachtexte folgen einem Muster: <strong>Problem → Ursachen → Lösung → Vorteile → Grenzen → Ausblick</strong>.</li><li>Wer das Muster erkennt, weiß, wo welche Information steht – und kann den Text leichter zusammenfassen.</li><li><button class=\"term\" data-t=\"signal\">Signalwörter</button> zeigen, wie es weitergeht: <em>außerdem</em> ergänzt, <em>jedoch</em> schränkt ein, <em>deshalb</em> nennt eine Folge.</li></ul>" },
      { art: "mc", id: "fkt", tag: "Aufgabe der Abschnitte", fragen: [
        { q: "Welche Aufgabe hat der erste Abschnitt?", o: ["Er führt zum Thema hin: Er zeigt das Problem und deutet die Lösung an.", "Er fasst alle Vorteile der Dachbegrünung in wenigen Sätzen zusammen.", "Er erklärt, aus welchen Schichten ein Gründach besteht.", "Er vergleicht die Kosten verschiedener Dächer miteinander."], a: 0, e: "Hitze in der Stadt ist das Problem; der letzte Satz lenkt den Blick auf die Dächer. Erst danach folgen die Erklärungen." },
        { q: "Du brauchst nur eine Information: Wie viel Pflege braucht ein Dachgarten? Wie gehst du vor?", o: ["Ich gehe gezielt zum Abschnitt über die zwei Arten der Begrünung.", "Ich lese den ganzen Text noch einmal gründlich von vorn.", "Ich suche im ersten Abschnitt, weil dort das Wichtigste steht.", "Ich sehe im letzten Abschnitt nach, weil dort der Ausblick steht."], a: 0, e: "Wer den Aufbau kennt, muss nicht alles noch einmal lesen. Der Dachgarten gehört zur aufwendigen Art der Begrünung." }
      ] },
      { art: "sort", id: "sig", tag: "Signalwörter", titel: "Was kündigt das Wort an?", lead: "Alle diese Wörter kommen in Sachtexten häufig vor. Sortiere sie nach ihrer Aufgabe.", buckets: ["Ergänzung", "Einschränkung oder Gegensatz", "Folge oder Grund"], cols: 180, items: [
        { t: "außerdem", b: 0 }, { t: "hinzu kommt", b: 0 }, { t: "zudem", b: 0 },
        { t: "trotzdem", b: 1 }, { t: "jedoch", b: 1 }, { t: "allerdings", b: 1 },
        { t: "deshalb", b: 2 }, { t: "dadurch", b: 2 }, { t: "denn", b: 2 }
      ] }
    ] },
    { kurz: "Formulieren", ober: "Selbst antworten", titel: "Hauptaussagen in eigenen Worten", teile: [
      { art: "beispiel", kopf: "So geht es – Abschnitt 2", html: "<p><strong>Schlüsselwörter:</strong> Asphalt und Beton · speichern Wärme · kaum Wind · wenige Pflanzen · Wärmeinsel<br><strong>Hauptaussage:</strong> Städte heizen sich stärker auf als ihr Umland, weil Stein und Asphalt Wärme speichern und kühlende Pflanzen fehlen.</p>" },
      { art: "mc", id: "ha", tag: "Hauptaussage prüfen", fragen: [
        { q: "Welcher Satz gibt die Hauptaussage von Abschnitt 5 am besten wieder?", o: ["Es gibt eine einfache, pflegeleichte Begrünung und eine aufwendige mit dicker Erdschicht.", "Auf Gründächern wachsen Moose, Kräuter und der Mauerpfeffer.", "Dachgärten sind viel zu teuer und lohnen sich deshalb nicht.", "Auf einem Gründach liegt immer eine Schicht aus Erde."], a: 0, e: "„Moose, Kräuter, Mauerpfeffer“ sind nur Beispiele. „Lohnen sich nicht“ ist eine Wertung, die nicht im Text steht. Und dass auf dem Dach Erde liegt, ist zu allgemein." },
        { q: "Welcher Satz gibt die Hauptaussage des ganzen Textes am besten wieder?", o: ["Begrünte Dächer können Städte kühlen und haben weitere Vorteile, sind aber nur ein Teil der Lösung.", "Jedes Haus in der Stadt sollte so schnell wie möglich ein begrüntes Dach bekommen.", "In den Städten ist es im Sommer heißer als auf dem Land.", "Ein Gründach besteht aus einer Folie, einem Vlies und einer Erdschicht."], a: 0, e: "Eine Hauptaussage des ganzen Textes muss zum Anfang, zur Mitte und zum Schluss passen: Problem, Lösung, Grenzen." }
      ] },
      { art: "offen", id: "hs", nur: "R", tag: "Selbst formulieren", titel: "Deine Hauptaussage", fragen: [
        { q: "Schreibe die Hauptaussage von Abschnitt 7 (Z. 55–61) in einem eigenen Satz auf.", m: "Nicht jedes Haus eignet sich für ein Gründach, weil der Bau mehr kostet und das Dach das Gewicht der nassen Erde tragen muss.", k: ["nicht jedes|nicht alle|nicht überall|nicht immer|eignet|geeignet", "kost|teuer|geld", "gewicht|schwer|tragen|last"], min: 2 }
      ], tipp: "Der Abschnitt nennt zwei Hindernisse. Verbinde beide in einem Satz mit „weil“ oder „und“.", hilfen: ["Schlüsselwörter des Abschnitts: nicht jedes Haus – kostet mehr – Gewicht tragen.", "Beginne so: Nicht jedes Haus eignet sich für ein Gründach, weil …", "Lass das Beispiel mit den Garagen und Supermärkten weg – es ist eine Einzelheit."] },
      { art: "offen", id: "hs", nur: "M", tag: "Selbst formulieren", titel: "Deine Hauptaussage", fragen: [
        { q: "Formuliere die Hauptaussage von Abschnitt 7 (Z. 69–79) in einem eigenen Satz.", m: "Die Dachbegrünung hat Grenzen: Sie ist teuer, nicht jedes Gebäude trägt das Gewicht, und ihre kühlende Wirkung lässt bei Trockenheit nach und reicht kaum bis zur Straße.", k: ["grenz|nachteil|einschränk|nicht jedes|kein allheil|nicht überall|schwäche|problem", "teuer|kosten|gewicht|last|tragfähig|schwer|trocken|straße|wirkung|aufwand"] }
      ], tipp: "Der Abschnitt nennt Einschränkungen beim Bau und bei der Wirkung. Fasse beide Gruppen zusammen, ohne jedes Beispiel aufzuzählen." },
      { art: "offen", id: "ges", m7: true, tag: "Der ganze Text", titel: "In drei Sätzen", fragen: [
        { q: "Fasse den ganzen Text in zwei bis drei Sätzen zusammen. Nenne das Problem, die Lösung und eine Einschränkung.", m: "Städte heizen sich im Sommer stark auf, weil Asphalt und Beton Wärme speichern und Pflanzen fehlen. Begrünte Dächer kühlen durch Verdunstung, halten Regen zurück und bieten Tieren Lebensraum. Sie sind aber teuer, eignen sich nicht für jedes Gebäude und wirken nur zusammen mit anderen Maßnahmen.", k: ["stadt|städte|hitze|heiß|wärme", "dach|dächer|begrün", "kühl|verdunst", "aber|jedoch|allerdings|teuer|gewicht|grenz|nicht jedes|nur zusammen|einschränk"], min: 3 }
      ], tipp: "Nutze den Bauplan aus Station 4: ein Satz zum Problem, einer zur Lösung, einer zu den Grenzen." },
      { art: "offen", id: "urt", m7: true, tag: "Beurteilen", titel: "Stimmt das so?", fragen: [
        { q: "Jemand behauptet nach dem Lesen: „Mit Gründächern ist das Hitzeproblem der Städte gelöst.“ Beurteile die Aussage und begründe mit dem Text.", m: "Nein, das ist übertrieben. Laut Text verändert ein einzelnes Gründach das Klima einer Stadt kaum; erst viele Dächer zusammen mit Bäumen und Parks machen die Sommer erträglicher.", k: ["nein|nicht|übertrieben|falsch|zum teil|teilweise|zu einfach", "einzeln|viele|bäume|parks|maßnahmen|zusammen|reicht nicht|allein|straße|trocken|teuer|gewicht"] }
      ], tipp: "Lies noch einmal den Schluss des Textes: Was sagt er über ein einzelnes Dach – und was über viele?" }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Beim Überfliegen liest man vor allem die Überschrift und die Anfänge der Abschnitte.", true],
        ["Eine gute Zwischenüberschrift nennt das Thema des Abschnitts, nicht nur ein Beispiel daraus.", true],
        ["In die Hauptaussage eines Abschnitts gehören möglichst viele genaue Zahlen.", false],
        ["Wörter wie „jedoch“ oder „trotzdem“ kündigen eine Einschränkung an.", true],
        ["Wer den Aufbau eines Textes kennt, findet einzelne Informationen schneller.", true],
        ["Ein Sachtext, der auch Nachteile nennt, ist deshalb unsachlich.", false]
      ] }
    ] }
  ],
  weiter: { href: "les_02.html", titel: "Modul 2: Belegen und zitieren", text: "Du findest jetzt die Hauptaussagen eines Textes. Im nächsten Modul lernst du, deine Aussagen <strong>mit Zeilenangaben und Zitaten abzusichern</strong>." }
});
