/* Deutsch 8 · Literatur und Textanalyse · Modul 1: Kurzgeschichten untersuchen
   (äußere und innere Handlung, Rückblende, Merkmale der Kurzgeschichte am Text nachweisen – unvermittelter Anfang, Alltag,
   Wendepunkt, offener Schluss –, Leerstellen deuten, zentrale Aussage; Schreibtrainer: Ergebnis der Untersuchung darstellen)
   LehrplanPLUS D8 2.2 (zentrale Aussagen literarischer Texte herausarbeiten, Deutungen mit Zitaten belegen; M8: Aussagen und
   Intentionen deuten), 3.2 (Ergebnisse einer Textuntersuchung darstellen).
   Texte: „Der Zettel im Spind“ (texte/literatur/zettel-r.js und -m.js) – eigene Kurzgeschichte,
   R8 13 Absätze, 50 Zeilen · M8 13 Absätze, 66 Zeilen. Alle Zeilenangaben unten nach zeig-text.js. */
D7Kit.seite({
  id: "lit-01",
  titel: "Kurzgeschichten untersuchen",
  einleitung: "Ein Schulflur, ein Blatt Papier, ein paar Minuten vor dem Klingeln – mehr braucht eine Kurzgeschichte nicht. Heute untersuchst du, wie so ein Text gebaut ist: was außen geschieht und was innen, wo die Geschichte kippt und warum sie aufhört, bevor du die Antwort kennst.",
  zeit: "etwa 45 Minuten",
  ziele: ["🧩 Ich unterscheide äußere und innere Handlung.", "🔎 Ich weise die Merkmale einer Kurzgeschichte am Text nach.", "💬 Ich deute Leerstellen und belege meine Deutung.", "✍️ Ich stelle das Ergebnis meiner Untersuchung in einem kurzen Text dar."],
  haupttext: { R: "lit-zettel-r", M: "lit-zettel-m" },
  quiz: { profi: "Kurzgeschichten-Profi" },
  glossar: {
    kurzgeschichte: ["Kurzgeschichte", "Eine kurze Erzählung über einen Ausschnitt aus dem Alltag: ohne Einleitung, mit wenigen Figuren, einem Wendepunkt und oft einem offenen Schluss."],
    unvermittelt: ["unvermittelt", "Ohne Vorbereitung. Ein unvermittelter Anfang springt mitten ins Geschehen – wer, wo und wann, erfährt man erst nach und nach."],
    aeussere: ["äußere Handlung", "Alles, was man sehen und hören könnte: was die Figuren tun und sagen."],
    innere: ["innere Handlung", "Was in einer Figur vorgeht: Gedanken, Gefühle, Erinnerungen, Zweifel."],
    rueckblende: ["Rückblende", "Eine Stelle, an der etwas erzählt wird, das schon vor der eigentlichen Handlung geschehen ist."],
    wendepunkt: ["Wendepunkt", "Die Stelle, an der sich die Lage plötzlich ändert – danach ist für die Hauptfigur nichts mehr wie vorher."],
    offen: ["offener Schluss", "Die Geschichte bricht ab, bevor die Entscheidung fällt. Die Leser müssen selbst weiterdenken."],
    leerstelle: ["Leerstelle", "Etwas, das der Text nicht ausspricht. Die Leser füllen die Lücke selbst – mit einer Deutung, die zum Text passt."],
    deutung: ["Deutung", "Eine Erklärung dafür, was eine Textstelle bedeutet. Sie gilt nur, wenn sie sich am Text belegen lässt."],
    aussage: ["zentrale Aussage", "Das, was eine Geschichte über das Erzählte hinaus zeigt: eine Einsicht über Menschen und ihr Verhalten."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Ein Blatt Papier, zweimal gefaltet", teile: [
      { art: "text", html: "<p class=\"lead\">Lies die Geschichte einmal ganz und in Ruhe. Achte dabei auf zwei Dinge: Was geschieht im Flur – und was geht in Adem vor?</p><p>Der Text ist eine <button class=\"term\" data-t=\"kurzgeschichte\">Kurzgeschichte</button>. Woran man das erkennt, weist du in Station 3 selbst nach.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lesetext: { R: "lit-zettel-r", M: "lit-zettel-m" } },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Was steht auf dem Zettel?", o: ["eine Einladung zu Henris Geburtstag", "eine Drohung von Nils und Vincent", "eine Bitte um Hilfe beim Nistkasten", "eine Absage für das Treffen am Samstag"], a: 0, e: "Henri wird vierzehn und lädt Adem für Samstag um drei ein." },
        { q: "Wie hört die Geschichte auf?", o: ["Adem will etwas auf die Rückseite schreiben – was, erfährt man nicht.", "Adem wirft den Zettel in den Papierkorb und geht in den Unterricht.", "Adem läuft Henri nach und entschuldigt sich auf der Treppe bei ihm.", "Adem zeigt Nils und Vincent den Zettel und sagt ihnen für Samstag ab."], a: 0, e: "Der Stift ist schon in seiner Hand – dann bricht der Text ab. Darum geht es später noch." }
      ] }
    ] },
    { kurz: "Handlung", ober: "Verstehen", titel: "Was geschieht – außen und innen", teile: [
      { art: "ordnen", id: "schritte", tag: "Reihenfolge", titel: "Bringe die Handlung in die richtige Reihenfolge", lead: "So laufen die Minuten im Flur ab. Tippe unten links auf <strong>📖 Text</strong>, wenn du nachlesen willst.", schritte: [
        "Aus Adems Spind fällt ein gefalteter Zettel.",
        "Adem erkennt Henris Schrift und liest die Einladung.",
        "Nils und Vincent kommen dazu; Adem versteckt den Zettel.",
        "Henri geht vorbei, und Nils pfeift wie ein Kuckuck.",
        "Adem lacht mit.",
        "Henri sieht Adem an und geht die Treppe hinauf.",
        "Adem streicht den Zettel glatt und nimmt einen Stift."] },
      { art: "text", html: "<p>Was du gerade geordnet hast, ist die <button class=\"term\" data-t=\"aeussere\">äußere Handlung</button>: alles, was eine Kamera im Flur aufnehmen könnte. Sie dauert nur wenige Minuten. Das Wichtigste aber spielt sich in Adems Kopf ab – seine Gedanken, Gefühle und Erinnerungen. Das ist die <button class=\"term\" data-t=\"innere\">innere Handlung</button>.</p>" },
      { art: "sort", id: "innen", tag: "Sortieren", titel: "Außen oder innen?", lead: "Könnte eine Kamera das aufnehmen – oder geschieht es nur in Adem?", buckets: ["äußere Handlung", "innere Handlung"], cols: 240, items: [
        { t: "Der Zettel landet auf Adems Schuh.", b: 0 },
        { t: "Nils pfeift, und Vincent prustet los.", b: 0 },
        { t: "Adem schiebt den Zettel in die Hosentasche.", b: 0 },
        { t: "Es klingelt, und der Flur wird leer.", b: 0 },
        { t: "Adem erinnert sich an den Nistkasten im Birnbaum.", b: 1 },
        { t: "Adem denkt an seine Ausrede vom letzten Jahr.", b: 1 },
        { t: "Adem sagt sich, dass er nie mitgepfiffen hat.", b: 1 },
        { t: "Adem hört sein eigenes Lachen und erschrickt.", b: 1 }],
        hilfen: ["Frage dich bei jeder Karte: Könnte jemand, der danebensteht, das sehen oder hören?", "Erinnern, denken, sich etwas sagen, über sich selbst erschrecken – das sieht niemand von außen."] },
      { art: "mc", id: "handl", tag: "Genau gelesen", fragen: [
        { q: "Die Handlung dauert nur ein paar Minuten. Wodurch erfährst du trotzdem etwas über die Grundschulzeit?", o: ["durch Rückblenden: Adem erinnert sich an früher", "durch ein Gespräch zwischen Adem und Henri", "durch eine Einleitung vor der eigentlichen Handlung", "durch das, was Nils und Vincent über Henri erzählen"], a: 0, e: "Eine Rückblende holt Vergangenes in die Geschichte, ohne dass die Handlung den Flur verlässt. So bleibt der Text kurz und erzählt doch von vier Jahren Freundschaft." },
        { q: "Was hat Adem vor einem Jahr getan?", o: ["Er hat Henris Einladung mit einer Ausrede abgesagt.", "Er hat Henri vor den anderen ausgelacht.", "Er hat den Nistkasten vom Baum genommen.", "Er hat Henri nicht zu seinem Geburtstag eingeladen."], a: 0, e: "Er schrieb, er sei krank – und war es nicht. Die neue Einladung trifft also auf ein schlechtes Gewissen." }
      ] }
    ] },
    { kurz: "Merkmale", ober: "Untersuchen", titel: "Woran erkennst du die Kurzgeschichte?", teile: [
      { art: "mc", id: "wirk", tag: "Anfang, Mitte, Ende", fragen: [
        { q: "Was erfährst du im ersten Absatz NICHT?", o: ["wer Adem ist und wo die Geschichte spielt", "dass ein Zettel aus dem Spind fällt", "dass das Blatt kariert und gefaltet ist", "dass der Zettel auf Adems Schuh landet"], a: 0, e: "Der Text springt mitten ins Geschehen. Wer Adem ist, wo und wann das spielt, musst du dir nach und nach selbst zusammensuchen. Das nennt man einen unvermittelten Anfang – er macht neugierig." },
        { q: "Warum ist der Satz, in dem Adem lacht, der Wendepunkt der Geschichte?", o: ["Bis dahin hat Adem nur geschwiegen – jetzt macht er zum ersten Mal mit.", "Bis dahin wusste Adem nicht, von wem der Zettel überhaupt stammt.", "Von da an wissen Nils und Vincent, was auf dem Zettel steht.", "Von da an steht fest, dass Adem am Samstag zu Henri geht."], a: 0, e: "Vorher konnte Adem sich sagen, er habe ja nichts getan. Nach dem Lachen geht das nicht mehr – und Henri hat es gesehen." },
        { q: "Was bewirkt der offene Schluss?", o: ["Die Entscheidung geht an die Leser weiter: Was würde ich jetzt schreiben?", "Man merkt, dass die Geschichte noch nicht zu Ende geschrieben wurde.", "Man versteht, dass Adems Antwort für die Geschichte unwichtig ist.", "Die Leser sollen erraten, wie es in Wirklichkeit ausgegangen ist."], a: 0, e: "Es gibt kein „wirkliches“ Ende, das man erraten könnte. Der Text hört an der Stelle auf, an der du selbst weiterdenken musst – deshalb bleibt er im Kopf." }
      ] },
      { art: "merke", kopf: "MERKE: MERKMALE DER KURZGESCHICHTE", html: "<ul><li><b><button class=\"term\" data-t=\"unvermittelt\">Unvermittelter</button> Anfang:</b> keine Einleitung, mitten im Geschehen.</li><li><b>Ausschnitt aus dem Alltag:</b> gewöhnliche Menschen, ein gewöhnlicher Ort.</li><li><b>Wenige Figuren, kurze Zeit:</b> Früheres kommt nur als <button class=\"term\" data-t=\"rueckblende\">Rückblende</button> vor.</li><li><b><button class=\"term\" data-t=\"wendepunkt\">Wendepunkt</button>:</b> Ein Augenblick verändert alles.</li><li><b><button class=\"term\" data-t=\"offen\">Offener Schluss</button>:</b> Die Entscheidung bleibt den Lesern überlassen.</li><li><b>Knappe Sprache:</b> kurze Sätze, vieles wird nur angedeutet.</li></ul>" },
      { art: "beleg", id: "merk", nur: "R", tag: "Am Text nachweisen", titel: "Wo zeigt sich das Merkmal?", lesetext: "lit-zettel-r", fragen: [
        { q: "Wo erfährst du zum ersten Mal, an welchem Ort und zu welcher Zeit die Geschichte spielt?", zeilen: [5, 6], e: "Im Flur, kurz vor dem Ende der großen Pause – erst im zweiten Absatz und nur nebenbei. Ein Ausschnitt aus dem Alltag.", tipp: "Suche die Wörter „Flur“ und „Pause“." },
        { q: "Wo steht die Rückblende, die erklärt, was mit den „Meisen“ gemeint ist?", zeilen: [11, 17], e: "Der Nistkasten aus der dritten Klasse: Diese Rückblende zeigt, wie eng die beiden einmal befreundet waren.", tipp: "Suche das Wort „Nistkasten“ und lies den ganzen Absatz." },
        { q: "Wo liegt der Wendepunkt?", zeilen: [39, 40], e: "Drei kurze Sätze – und Adem ist nicht mehr nur Zuschauer.", tipp: "Was tut Adem, gleich nachdem Nils gepfiffen hat?" },
        { q: "An welcher Stelle bricht die Geschichte ab, ohne die Entscheidung zu verraten?", zeilen: [49, 50], e: "Adem hat den Stift in der Hand. Was er schreibt, erfährst du nicht: ein offener Schluss.", tipp: "Lies die beiden letzten Zeilen: Was tut Adem zuletzt?" }],
        hilfen: ["Der Wendepunkt ist die Stelle, an der Adem zum ersten Mal etwas tut, das er vorher nie getan hat.", "Der offene Schluss steht immer ganz am Ende des Textes."] },
      { art: "beleg", id: "merk", nur: "M", tag: "Am Text nachweisen", titel: "Wo zeigt sich das Merkmal?", lesetext: "lit-zettel-m", fragen: [
        { q: "Wo steht die Rückblende, die den Satz mit den Meisen erklärt?", zeilen: [13, 21], e: "Der Nistkasten aus der dritten Klasse – und die Meldungen, die Jahr für Jahr seltener wurden.", tipp: "Die Rückblende beginnt, als Adem den letzten Satz des Zettels zweimal liest." },
        { q: "Der Erzähler lässt offen, wer von beiden die Freundschaft hat einschlafen lassen. In welchen Zeilen?", zeilen: [19, 21], e: "„Oder Adem hatte nicht mehr geantwortet. So genau ließ sich das nicht mehr sagen.“ – Adem weicht der Frage aus, wer schuld ist.", tipp: "Suche die Stelle, an der sich der Erzähler mit „Oder“ selbst verbessert." },
        { q: "Wo liegt der Wendepunkt?", zeilen: [51, 52], e: "Zwei Zeilen – und Adem ist nicht mehr nur Zuschauer.", tipp: "Suche den kürzesten Absatz nach dem Pfiff." },
        { q: "An welcher Stelle bricht die Geschichte ab, ohne die Entscheidung zu verraten?", zeilen: [65, 66], e: "Der Stift ist angesetzt. Was Adem schreibt, erfährst du nicht: ein offener Schluss.", tipp: "Lies die beiden letzten Zeilen: Was tut Adem zuletzt?" }] },
      { art: "mc", id: "sprache", m7: true, tag: "Sprache und Wirkung", fragen: [
        { q: "Der Satz, in dem Adem lacht, eröffnet einen eigenen, sehr kurzen Absatz. Welche Wirkung hat das?", o: ["Der Augenblick bekommt Gewicht: Man bleibt daran hängen wie Adem selbst.", "Der Augenblick wirkt nebensächlich, weil so wenig darüber gesagt wird.", "Der Erzähler spart Platz, weil eine Kurzgeschichte kurz sein muss.", "Man erkennt daran, dass Adem das Lachen sofort wieder vergisst."], a: 0, e: "Ein kurzer Absatz ist wie eine Pause beim Sprechen: Was dort steht, fällt auf. Das Lachen dauert einen Atemzug – der Text gibt ihm trotzdem einen eigenen Absatz." }
      ] }
    ] },
    { kurz: "Deuten", ober: "Deuten und belegen", titel: "Was steht zwischen den Zeilen?", teile: [
      { art: "text", html: "<p>Eine Kurzgeschichte erklärt wenig. Sie lässt Lücken, die du selbst füllen musst – man nennt sie <button class=\"term\" data-t=\"leerstelle\">Leerstellen</button>. Aber Vorsicht: Eine <button class=\"term\" data-t=\"deutung\">Deutung</button> gilt nur, wenn sie zum Text passt. Am Ende steht die Frage nach der <button class=\"term\" data-t=\"aussage\">zentralen Aussage</button>: Was zeigt die Geschichte über Menschen – weit über diesen einen Flur hinaus?</p>" },
      { art: "mc", id: "deut", tag: "Leerstellen füllen", fragen: [
        { q: "Henri schiebt die Einladung in Adems Spind, statt ihn anzusprechen. Welche Deutung passt am besten zum Text?", o: ["Er will Adem nicht vor den anderen in Verlegenheit bringen.", "Er hat Adems Handynummer und seine Adresse nicht mehr.", "Er möchte, dass möglichst viele die Einladung zu sehen bekommen.", "Er traut sich nicht, weil Adem ihn schon oft ausgelacht hat."], a: 0, e: "Henri weiß, bei wem Adem jetzt sitzt. Im Spind sieht niemand die Einladung – Adem kann Ja oder Nein sagen, ohne dass jemand zuschaut. Ausgelacht hat Adem ihn bis zu diesem Tag nie." },
        { q: "„Die Meisen sind wieder im Kasten.“ Warum schreibt Henri diesen Satz auf die Einladung?", o: ["Er erinnert an das, was sie gemeinsam gebaut haben – ganz ohne Vorwurf.", "Er will zeigen, dass er sich mit Vögeln besser auskennt als Adem.", "Er braucht Adems Hilfe, weil der Nistkasten repariert werden muss.", "Er will Adem beweisen, dass er inzwischen neue Freunde gefunden hat."], a: 0, e: "Den Satz versteht nur Adem. Er sagt: Unser Kasten hängt noch, es ist noch etwas da von früher. Mehr muss Henri nicht schreiben." },
        { q: "Welcher Satz trifft die Aussage der Geschichte am besten?", o: ["Auch wer nur schweigt oder mitlacht, trifft eine Entscheidung – und sie trifft einen anderen.", "Alte Freundschaften zerbrechen immer, sobald man auf eine neue Schule kommt.", "Wer sich anders verhält als die anderen, ist an seinem Ärger selbst schuld.", "Einladungen sollte man persönlich aussprechen und niemals aufschreiben."], a: 0, e: "Die zentrale Aussage geht über den Schulflur hinaus: Es gibt kein unbeteiligtes Zuschauen. Die Geschichte zeigt das, ohne es auszusprechen." }
      ] },
      { art: "offen", id: "lachen", nur: "R", tag: "Verhalten erklären", fragen: [
        { q: "Adem mag Henri eigentlich. Warum lacht er trotzdem mit? Erkläre es in ein bis zwei Sätzen.", m: "Adem lacht mit, weil er zu Nils und Vincent dazugehören will. Er hat Angst, dass sie sonst auch über ihn lachen.", k: ["dazugehör|gehören|nils|vincent|freunde|gruppe|anderen", "angst|ausgelacht|auslachen|über ihn|ausgeschlossen|traut|mut|feige|peinlich|allein"], min: 2 }],
        tipp: "Überlege: Bei wem sitzt Adem seit dem Herbst – und was könnte passieren, wenn er als Einziger nicht lacht?",
        hilfen: ["So kannst du beginnen: Adem lacht mit, weil …", "Sieh in Z. 21–22 nach: Bei wem sitzt Adem seit dem Herbst in der Mensa?", "Denke an beide Seiten: Was will Adem behalten – und wovor hat er Angst?"] },
      { art: "offen", id: "lachen", nur: "M", tag: "Deuten und belegen", fragen: [
        { q: "„Er hatte nie mitgepfiffen. Er hatte nur nichts gesagt. Das war ein Unterschied, fand er.“ (Z. 28–29) Ist es ein Unterschied? Nimm Stellung und belege deine Deutung mit einer zweiten Textstelle (Zitat und Zeile).", m: "Für Henri ist es kaum ein Unterschied, denn wer schweigt, lässt die anderen gewähren. Dass Adem sich etwas vormacht, zeigt sich, als er selbst mitlacht: „Aber es kam aus ihm, und er hörte es“ (Z. 52). Vom Schweigen zum Mitmachen war es nur ein kleiner Schritt.", k: ["schweig|nichts sag|zuseh|gewähren|wegschau|duld|mitmach|vormach", "z. |zeile", "lacht|lachen|ausrede|krank|papierkorb|nachgerechnet|hosentasche"], min: 2 }],
        tipp: "Erst deine Stellungnahme (ja, nein oder nur scheinbar), dann der Beleg: Zitat in Anführungszeichen, Zeile in Klammern – und ein Satz, der erklärt, was das Zitat zeigt." },
      { art: "offen", id: "zettel", m7: true, tag: "Ein Gegenstand erzählt mit", fragen: [
        { q: "Adem steckt den Zettel erst in die Hosentasche; am Schluss streicht er ihn an der Spindtür glatt. Was zeigt dieser Umgang mit dem Zettel über das, was in ihm vorgeht?", m: "Zuerst versteckt Adem den Zettel, weil er vor Nils und Vincent nicht zu Henri stehen will. Am Ende streicht er ihn glatt: Jetzt nimmt er die Einladung ernst und will sich der Entscheidung stellen.", k: ["versteck|verbirg|schämt|peinlich|geheim|verheimlich|nicht sehen|nicht zu ruben", "ernst|wichtig|bereut|gewissen|stellt|stellen|entscheid|gutmachen|nachdenk|wertvoll"], min: 2 }],
        tipp: "Vergleiche die beiden Handgriffe: Was macht man mit etwas, das niemand sehen soll – und was mit etwas, das einem wichtig ist?" },
      { art: "mc", id: "blick", nur: "M", m7: true, tag: "Sprachliches Bild", fragen: [
        { q: "Henri sieht Adem an, „als hätte er etwas nachgerechnet, und das Ergebnis stimmte“ (Z. 56–57). Was drückt dieser Vergleich aus?", o: ["Henri hat befürchtet, dass Adem nicht zu ihm hält – jetzt sieht er es bestätigt.", "Henri überlegt, wie viele Gäste am Samstag wohl zu ihm kommen werden.", "Henri ist erleichtert darüber, dass Adem die Einladung gefunden hat.", "Henri hat gar nicht verstanden, dass im Flur über ihn gelacht wird."], a: 0, e: "Wer nachrechnet, prüft eine Vermutung. Henris Vermutung: Adem gehört jetzt zu den anderen. Das Lachen ist für ihn der Beweis – deshalb wirkt er nicht wütend, sondern ernüchtert. Das trifft Adem härter als jeder Vorwurf." }
      ] }
    ] },
    { kurz: "Schreiben", ober: "Selbst schreiben", titel: "Dein Ergebnis – und Adems Antwort", teile: [
      { art: "text", html: "<p class=\"lead\">Du hast die Geschichte untersucht. Jetzt hältst du fest, was du herausgefunden hast – so, dass es auch jemand versteht, der nicht dabei war.</p>" },
      { art: "beispiel", nur: "R", kopf: "So weist du ein Merkmal nach", html: "<p><b>Merkmal nennen – Textstelle angeben – kurz erklären:</b></p><p><i>Die Geschichte zeigt einen Ausschnitt aus dem Alltag. Sie spielt in einer großen Pause im Schulflur (Z. 5–6). So etwas könnte an jeder Schule passieren.</i></p>" },
      { art: "beispiel", nur: "M", kopf: "So weist du ein Merkmal nach", html: "<p><b>Merkmal nennen – mit Zitat belegen – Wirkung erklären:</b></p><p><i>Die Geschichte zeigt einen Ausschnitt aus dem Alltag: Sie spielt im „Gedränge der letzten Pausenminuten“ (Z. 5–6) eines Schulflurs. Weil jeder einen solchen Flur kennt, kann man sich leicht an Adems Stelle versetzen.</i></p>" },
      { art: "schreiben", id: "schreib", nur: "R", tag: "Schreibtrainer", titel: "Ist das eine Kurzgeschichte? Weise es nach", min: 50,
        auftrag: "<p><strong>Woran erkennt man, dass „Der Zettel im Spind“ eine Kurzgeschichte ist?</strong></p><p>Schreibe einen kurzen Text (mindestens 50 Wörter). Weise <strong>drei Merkmale</strong> nach: den unvermittelten Anfang, den Wendepunkt und den offenen Schluss. Gib zu jedem Merkmal die Textstelle mit Zeilen an: (Z. …).</p>",
        starter: ["„Der Zettel im Spind“ ist eine Kurzgeschichte.", "Die Geschichte beginnt unvermittelt, denn …", "Der Wendepunkt ist die Stelle, an der … (Z. …).", "Der Schluss ist offen: Man erfährt nicht, …", "Das sieht man in Z. …"],
        kriterien: ["Mein Text nennt den Titel und sagt, dass es eine Kurzgeschichte ist.", "Ich erkläre den unvermittelten Anfang mit einer Textstelle.", "Ich nenne den Wendepunkt mit Zeilenangabe.", "Ich erkläre, warum der Schluss offen ist.", "Hinter jeder Textstelle steht die Zeile in Klammern: (Z. …)."] },
      { art: "schreiben", id: "schreib", nur: "M", tag: "Schreibtrainer", titel: "Untersuchungsergebnis: Merkmale und ihre Wirkung", min: 90,
        auftrag: "<p><strong>Stelle das Ergebnis deiner Untersuchung zusammenhängend dar.</strong></p><p>Verfasse einen Text von mindestens 90 Wörtern: Beginne mit einem Einleitungssatz (Titel, Textsorte, Thema). Weise dann <strong>drei Merkmale der Kurzgeschichte</strong> am Text nach – jeweils mit einem kurzen wörtlichen Zitat und Zeilenangabe – und erkläre bei mindestens zwei Merkmalen ihre <strong>Wirkung</strong> auf die Leser. Schließe mit einem Satz zur Aussage der Geschichte.</p><p>Schreibe sachlich und im Präsens.</p>",
        starter: ["In der Kurzgeschichte „Der Zettel im Spind“ geht es um …", "Typisch für die Textsorte ist zunächst …", "Das zeigt sich an der Stelle „…“ (Z. …).", "Dadurch wird der Leser …", "Insgesamt macht die Geschichte deutlich, dass …"],
        kriterien: ["Der Einleitungssatz nennt Titel, Textsorte und Thema.", "Drei Merkmale sind benannt und jeweils mit Zitat und Zeilenangabe belegt.", "Bei mindestens zwei Merkmalen ist die Wirkung auf die Leser erklärt.", "Der Schlusssatz formuliert die Aussage der Geschichte.", "Der Text ist sachlich und steht im Präsens."] },
      { art: "offen", id: "ende", tag: "Weiterdenken", titel: "Zusage, Absage – oder etwas anderes?", fragen: [
        { q: "Was schreibt Adem wohl auf die Rückseite? Schreibe deine Vermutung auf und begründe sie mit etwas, das im Text steht.", m: "Ich glaube, Adem schreibt, dass er am Samstag kommt. Er streicht den Zettel glatt, statt ihn wegzuwerfen, und sein eigenes Lachen hat ihn erschreckt. Deshalb will er es wiedergutmachen.", k: ["glatt|lachen|gelacht|lacht|blick|angesehen|ansieht|meisen|nistkasten|papierkorb|krank|ausrede|bolzplatz|nils|freund", "weil|deshalb|denn|darum|daher|deswegen"], min: 2 }],
        tipp: "Vieles ist möglich. Wichtig ist deine Begründung: Was im Text spricht dafür?",
        hilfen: ["So kannst du beginnen: Ich glaube, Adem schreibt, dass …, weil …", "Für eine Zusage spricht: Er streicht den Zettel glatt und wirft ihn nicht weg. Dagegen spricht: Nils und Vincent würden es erfahren."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Eine Kurzgeschichte beginnt ", { g: "unvermittelt" }, ": ohne Einleitung, mitten im Geschehen."],
        ["Sie zeigt einen Ausschnitt aus dem ", { g: "Alltag" }, " und kommt mit wenigen Figuren und kurzer Zeit aus."],
        ["Gedanken, Gefühle und Erinnerungen einer Figur bilden die ", { g: "innere" }, " Handlung."],
        ["Am ", { g: "Wendepunkt" }, " ändert sich die Lage plötzlich."],
        ["Der Schluss bleibt ", { g: "offen" }, ". Was ein Text nicht ausspricht, nennt man eine ", { g: "Leerstelle" }, "."]], extra: ["Strophe", "ausführlich"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Eine Kurzgeschichte stellt zuerst alle Figuren ausführlich vor.", false],
        ["Die innere Handlung zeigt, was eine Figur denkt, fühlt und erinnert.", true],
        ["Eine Rückblende erzählt etwas, das vor der eigentlichen Handlung geschehen ist.", true],
        ["Mit dem Wendepunkt ist eine Kurzgeschichte immer zu Ende.", false],
        ["Bei einem offenen Schluss gibt es ein richtiges Ende, das man erraten muss.", false],
        ["Eine Deutung muss sich mit einer Textstelle belegen lassen.", true]] }
    ] }
  ],
  weiter: { href: "lit_02.html", titel: "Modul 2: Figuren und ihre Beziehungen", text: "Du weißt jetzt, wie eine Kurzgeschichte gebaut ist. Im nächsten Modul siehst du dir die <strong>Figuren</strong> genauer an: Was für Menschen sind das – und wie stehen sie zueinander?" }
});
