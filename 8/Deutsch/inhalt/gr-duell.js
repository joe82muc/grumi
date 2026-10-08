/* Deutsch 8 · Grammatik und Sprache · Zusatz: Grammatik-Duelle
   (Aufwärmen: richtig/falsch zu Konjunktiv, indirekter Rede, Satzreihe, Finaladverbiale, Attribut, Modalverben; Duell gegen die KI:
   indirekte Rede, Ersatzform im Konjunktiv II, Zweck (M8: „um … zu“), Satzreihe oder Satzgefüge, Attribut (M8: Attributsatz),
   Modalverb „nicht müssen“; Tischduell: kurze Fragen zu den Merkkästen der Grammatikseiten 1 bis 6)
   LehrplanPLUS D8 4.2 (Satzbau, Konjunktiv, Satzglieder, Attribute, Modalverben; M8: Attributsätze, Adverbialsätze).
   Eigene Sätze; Begriffe und Schreibweisen wie in den Merkkästen von Grammatik/gr_02.html bis gr_06.html.
   Die „KI“ irrt in zwei Runden (Ersatzform im Konjunktiv II, „denn“ als Satzreihe) mit Absicht; die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "gr-duell",
  titel: "Grammatik-Duelle",
  einleitung: "Konjunktiv, indirekte Rede, Satzbau, Zweck, Attribute und Modalverben: Hier mischst du alles. Wärm dich auf, tritt gegen die KI an – sie klingt immer sicher, liegt aber nicht immer richtig – und fordere jemanden am Tisch heraus.",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 Ich wende die Regeln der Grammatikseiten in kurzen Fragen an.", "⚔️ Ich erkenne, wenn eine Begründung gut klingt, aber nicht stimmt.", "👥 Ich spiele fair zu zweit an einem Gerät."],
  stationen: [
    { kurz: "Aufwärmen", ober: "Aufwärmen", titel: "Richtig oder falsch?", teile: [
      { art: "tf", id: "warm", tag: "Aufwärmen", titel: "Sechs schnelle Aussagen", aussagen: [
        ["Den Konjunktiv I bildet man aus dem Infinitivstamm plus „e“: er komme.", true],
        ["In der indirekten Rede setzt man Anführungszeichen.", false],
        ["Nach „denn“ steht das Verb am Satzende.", false],
        ["„Damit“ nennt einen Zweck, „weil“ nennt einen Grund.", true],
        ["Ein Attribut ist ein eigenes Satzglied.", false],
        ["„Du musst nicht kommen“ bedeutet: Es ist nicht nötig, dass du kommst.", true]
      ] },
      { art: "mc", id: "warm2", tag: "Aufwärmen", fragen: [
        { q: "Welcher Satz ist eine Satzreihe?", o: ["Ich lernte lange, aber die Aufgabe blieb schwer.", "Ich lernte lange, weil die Aufgabe schwer war.", "Ich lernte lange, obwohl die Aufgabe schwer war."], a: 0, e: "In einer Satzreihe stehen zwei Hauptsätze nebeneinander, hier mit „aber“. „Weil“ und „obwohl“ leiten Nebensätze ein." },
        { q: "Welcher Satz drückt einen Wunsch aus?", o: ["Wäre ich doch schon in den Ferien!", "Ich bin schon in den Ferien.", "Ich war schon in den Ferien."], a: 0, e: "Wünsche stehen im Konjunktiv II: Wäre ich doch … Die anderen beiden Sätze stellen etwas fest." },
        { q: "Welcher Satz nennt einen Zweck?", o: ["Ich lerne für die Probe.", "Ich lerne wegen des Lärms im Keller.", "Ich lerne jeden Abend."], a: 0, e: "„Für die Probe“ antwortet auf „Wozu?“. „Wegen des Lärms“ nennt einen Grund, „jeden Abend“ eine Zeit." },
        { q: "In welchem Satz steht ein Attribut zu „Fahrrad“?", o: ["Das Fahrrad meiner Schwester ist neu.", "Meine Schwester fährt schnell Fahrrad.", "Wir fahren mit dem Fahrrad zum Strand."], a: 0, e: "„meiner Schwester“ beschreibt das Nomen „Fahrrad“ genauer: ein Genitivattribut. In den anderen Sätzen hängen die Angaben am Verb." }
      ] }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Wer kennt die Regel?", teile: [
      { art: "duell", id: "grammatik", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Die KI bekommt dieselben Fragen wie du und begründet jede Antwort – sehr selbstsicher. Aber Vorsicht: In ein, zwei Runden irrt sie sich. Lass dich nicht verunsichern, sondern denk an die Regel.",
        runden: [
          { material: "Er sagt: „Ich habe keine Zeit.“", q: "Welche indirekte Rede ist richtig?", o: ["Er sagt, er habe keine Zeit.", "Er sagt, ich habe keine Zeit.", "Er sagt, dass er hatte keine Zeit."], a: 0, ki: 0, kiText: "denn das Pronomen „ich“ wird zu „er“ und das Verb steht im Konjunktiv I.",
            e: "In der indirekten Rede ändert sich das Pronomen („ich“ wird „er“), das Verb steht im Konjunktiv I: er habe. Nach „dass“ stünde das Verb am Satzende." },
          { material: "Die Kinder sagen: „Wir haben Hunger.“", q: "Welche Form verlangt die Regel für die indirekte Rede?", o: ["Die Kinder sagen, sie hätten Hunger.", "Die Kinder sagen, sie haben Hunger.", "Die Kinder sagen, sie hatten Hunger."], a: 0, ki: 1, kiText: "weil „haben“ ohne Umstellung am natürlichsten klingt – das sagt im Alltag jeder so.",
            e: "Der Konjunktiv I lautet hier „sie haben“ und sieht genauso aus wie der Indikativ. Dann nimmt man als Ersatz den Konjunktiv II: sie hätten.",
            begruende: { q: "Warum nimmt man hier „hätten“ statt „haben“?", m: "Weil „sie haben“ im Konjunktiv I genauso aussieht wie die normale Form, deshalb nimmt man den Konjunktiv II als Ersatz.", k: ["gleich|genauso|dieselbe|wie der indikativ|wie die normale|nicht zu unterscheiden|identisch|verwechsel|ähnlich", "konjunktiv ii|ersatz|hätten"] } },
          { nur: "R", material: "Ich spare jeden Monat Geld, ___ ich mir ein Fahrrad kaufen kann.", q: "Welches Wort nennt den Zweck?", o: ["damit", "weil", "obwohl"], a: 0, ki: 0, kiText: "denn „damit“ antwortet auf die Frage „Wozu?“.",
            e: "„Damit“ leitet einen Finalsatz ein und nennt den Zweck: Wozu spare ich? „Weil“ nennt einen Grund, „obwohl“ einen Gegensatz." },
          { nur: "M", material: "Lena nimmt den Schlüssel mit, ___ die Tür aufzuschließen.", q: "Welches Wort ergänzt den Satz richtig?", o: ["um", "damit", "weil"], a: 0, ki: 0, kiText: "denn der Infinitiv mit „zu“ verlangt „um“, und Lena ist das Subjekt von beiden Teilen.",
            e: "„Um … zu“ steht bei gleichem Subjekt in beiden Teilen (Lena nimmt mit, Lena schließt auf). „Damit“ verlangt einen vollständigen Nebensatz: …, damit sie die Tür aufschließt." },
          { material: "Ich blieb zu Hause, denn ich war krank.", q: "Was für ein Satz ist das?", o: ["eine Satzreihe", "ein Satzgefüge", "ein Satz mit zwei Nebensätzen"], a: 0, ki: 1, kiText: "weil „denn“ wie „weil“ einen Nebensatz einleitet.",
            e: "Nach „denn“ steht das Verb an zweiter Stelle („ich war krank“) – es ist ein Hauptsatz. Zwei Hauptsätze bilden eine Satzreihe. Anders als bei „weil“ steht das Verb nicht am Ende.",
            begruende: { q: "Woran erkennst du, dass nach „denn“ ein Hauptsatz folgt?", m: "Das Verb steht an zweiter Stelle und nicht am Ende des Satzes.", k: ["zweit", "verb|prädikat|konjugiert"] } },
          { nur: "R", material: "Das Haus am See ist alt.", q: "Was ist „am See“ in diesem Satz?", o: ["ein Attribut zu „Haus“", "eine Adverbiale des Ortes", "das Subjekt"], a: 0, ki: 0, kiText: "denn „am See“ beschreibt das Nomen „Haus“ genauer und bleibt beim Umstellen daran hängen.",
            e: "Frage: Welches Haus? – das Haus am See. Es beschreibt das Nomen, ist also ein Attribut und kein eigenes Satzglied." },
          { nur: "M", material: "Das Buch, das ich gerade lese, ist spannend.", q: "Wie nennt man den Nebensatz „das ich gerade lese“?", o: ["Attributsatz (Relativsatz)", "Finalsatz", "indirekter Fragesatz"], a: 0, ki: 0, kiText: "denn er beginnt mit einem Relativpronomen und beschreibt das Nomen „Buch“.",
            e: "Der Satz beschreibt „Buch“ genauer und beginnt mit „das“ als Relativpronomen: ein Attributsatz. Ein Finalsatz nennt einen Zweck, ein indirekter Fragesatz beginnt mit „ob“ oder einem Fragewort." },
          { material: "Du musst nicht kommen.", q: "Was bedeutet der Satz?", o: ["Es ist nicht nötig, dass du kommst.", "Es ist dir verboten zu kommen.", "Du bist nicht in der Lage zu kommen."], a: 0, ki: 0, kiText: "denn „nicht müssen“ heißt „nicht nötig“.",
            e: "„Nicht müssen“ heißt „nicht nötig“. Verboten wäre: Du darfst nicht kommen." }
        ] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Grammatik-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 7, fragen: [
        { q: "„Er sei“ ist …", o: ["Konjunktiv I", "Konjunktiv II", "Indikativ"], a: 0, e: "sein – er sei." },
        { q: "„Sie wäre“ ist …", o: ["Konjunktiv II", "Konjunktiv I", "Imperativ"], a: 0, e: "war – wäre." },
        { q: "Die indirekte Rede hat keine …", o: ["Anführungszeichen", "Verben", "Subjekte"], a: 0, e: "Statt Doppelpunkt steht ein Komma." },
        { q: "Aus „Kommst du?“ wird: Sie fragt, …", o: ["ob er komme", "dass er komme", "wenn er komme"], a: 0, e: "Ja/Nein-Fragen werden mit „ob“ wiedergegeben." },
        { q: "Eine Satzreihe besteht aus Hauptsatz und …", o: ["Hauptsatz", "Nebensatz", "Attribut"], a: 0, e: "Zwei Hauptsätze, oft mit „und“, „aber“, „denn“." },
        { q: "Im Nebensatz steht das Verb …", o: ["am Ende", "an zweiter Stelle", "am Anfang"], a: 0, e: "Ich lerne, weil ich die Probe bestehen will." },
        { q: "Den Zweck erfragt man mit …", o: ["Wozu?", "Warum?", "Wann?"], a: 0, e: "Final: Wozu? Mit welchem Ziel?" },
        { q: "„um … zu“ braucht …", o: ["dasselbe Subjekt", "zwei Hauptsätze", "einen Relativsatz"], a: 0, e: "Sonst nimmt man „damit“." },
        { q: "In „das rote Fahrrad“ ist „rote“ …", o: ["ein Attribut", "das Prädikat", "ein Objekt"], a: 0, e: "Es beschreibt das Nomen genauer." },
        { q: "Ein Attributsatz ist oft ein …", o: ["Relativsatz", "Finalsatz", "Hauptsatz"], a: 0, e: "das Buch, das ich lese" },
        { q: "„Du darfst nicht kommen“ heißt …", o: ["verboten", "nicht nötig", "unmöglich"], a: 0, e: "Nicht dürfen = verboten." },
        { q: "„Du musst nicht kommen“ heißt …", o: ["nicht nötig", "verboten", "erlaubt"], a: 0, e: "Nicht müssen = nicht nötig." }
      ] }
    ] }
  ],
  weiter: { href: "index.html", titel: "Zurück zur Übersicht", text: "Wenn eine Runde danebenging: Auf den Grammatikseiten 1 bis 6 kannst du jeden Merkkasten noch einmal nachlesen." }
});
