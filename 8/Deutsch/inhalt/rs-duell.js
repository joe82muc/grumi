/* Deutsch 8 · Rechtschreibung und Sprachtraining · Zusatz: Rechtschreib-Duelle
   (Aufwärmen: Nominalisierung, Getrennt-/Zusammenschreibung, das/dass, Komma; Duell gegen die KI: Nominalisierung, das/dass,
   Fremdwort, Infinitivgruppe, Ergänzungsstrich – M8 zusätzlich: Satzzeichen beim Zitat; Tischduell: zwölf kurze Fragen)
   LehrplanPLUS D8 4.3 (Regelwissen und Strategien anwenden, Fehlerschwerpunkte bearbeiten).
   Alle Beispiele sind eigens für GRUMI geschrieben; Zweifelsfälle mit zwei zulässigen Schreibungen sind ausgelassen.
   Die „KI“ irrt in zwei Runden mit Absicht; die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "rs-duell",
  titel: "Rechtschreib-Duelle",
  einleitung: "Groß oder klein, getrennt oder zusammen, das oder dass, Komma oder nicht? Wärm dich auf, tritt gegen die KI an – sie klingt immer überzeugt, liegt aber nicht immer richtig – und fordere jemanden am Tisch heraus.",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 Ich wende meine Rechtschreibregeln schnell an.", "⚔️ Ich erkenne, wenn eine Begründung gut klingt, aber falsch ist.", "👥 Ich spiele fair zu zweit an einem Gerät."],
  stationen: [
    { kurz: "Aufwärmen", ober: "Aufwärmen", titel: "Vier schnelle Entscheidungen", teile: [
      { art: "mc", id: "warm", tag: "Aufwärmen", fragen: [
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Beim Zeichnen vergesse ich die Zeit.", "Beim zeichnen vergesse ich die Zeit.", "Beim Zeichnen vergesse ich die zeit."], a: 0, e: "„beim“ ist das Signalwort: Das Verb wird zum Nomen – beim Zeichnen." },
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Nach der Schule will ich Skateboard fahren.", "Nach der Schule will ich skateboardfahren.", "Nach der Schule will ich Skateboardfahren."], a: 0, e: "Nomen + Verb: getrennt, das Nomen bleibt groß." },
        { q: "Welcher Satz ist richtig geschrieben?", o: ["Es ist schön, dass das Wetter hält.", "Es ist schön, das das Wetter hält.", "Es ist schön, dass dass Wetter hält.", "Es ist schön, das dass Wetter hält."], a: 0, e: "Erst die Konjunktion (dass), dann der Artikel von „Wetter“ (das)." }] },
      { art: "sort", id: "warm2", tag: "Komma", titel: "Gehört an die Stelle _ ein Komma?", buckets: ["Komma", "kein Komma"], cols: 240, items: [
        { t: "Sie rief an _ weil sie Hilfe brauchte.", b: 0 }, { t: "Wir hoffen _ dass du kommst.", b: 0 }, { t: "Ich spare _ um mir ein Rad zu kaufen.", b: 0 },
        { t: "Wir spielen Fußball _ und Tennis.", b: 1 }, { t: "Sie kaufte Äpfel _ und Birnen.", b: 1 }, { t: "Ich bin müde _ und gehe schlafen.", b: 1 }] },
      { art: "mc", id: "warm3", m7: true, tag: "Aufwärmen (M8)", fragen: [
        { q: "Welcher Satz mit wörtlicher Rede ist richtig?", o: ["„Ich komme gleich“, rief er.", "„Ich komme gleich.“, rief er.", "„Ich komme gleich“ rief er."], a: 0, e: "Am Ende der wörtlichen Rede entfällt der Punkt, das Komma nach dem Anführungszeichen bleibt." }] }
    ] },

    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Wer schreibt richtig?", teile: [
      { art: "duell", id: "regel", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Die KI bekommt dieselben Fragen wie du und begründet jede Antwort – sehr selbstsicher. Aber Vorsicht: Auf manche Begründung fällt sie selbst herein. Prüfe sie mit deinem Regelwissen.",
        runden: [
          { material: "„Beim ___ vergisst sie die Zeit.“ (zeichnen)", q: "Wie schreibt man das Wort in der Lücke?", o: ["Zeichnen", "zeichnen"], a: 0, ki: 0, kiText: "denn nach „beim“ wird das Verb zum Nomen.",
            e: "„beim“ steht für „bei dem“ – ein Signalwort. Das Verb wird zum Nomen und groß geschrieben: beim Zeichnen." },
          { material: "„Er glaubt, ___ das Buch spannend ist.“", q: "Welches Wort gehört in die Lücke?", o: ["dass", "das"], a: 0, ki: 1, kiText: "weil „dass“ nur nach Verben des Sagens steht und „glauben“ keines ist.",
            e: "Falsch: „dass“ steht nach vielen Verben, auch nach glauben, hoffen, wissen. Ersatzprobe: „dieses“ oder „welches“ passt nicht – also dass.",
            begruende: { q: "Wie prüfst du, ob es „das“ oder „dass“ heißt?", m: "Ich setze dieses oder welches ein. Passt es, schreibe ich das, sonst dass.", k: ["dieses|welches|ersatz"] } },
          { material: "„Die ___ dauert zehn Minuten.“", q: "Welche Schreibung ist richtig?", o: ["Präsentation", "Präsentazion", "Präsentatzion"], a: 0, ki: 0, kiText: "weil Fremdwörter auf „-tion“ auch so geschrieben werden, wenn man „tsion“ spricht.",
            e: "Die Endung -tion schreibt man immer so, auch wenn man „tsion“ hört: Präsentation, Information, Station." },
          { material: "„Sie ging nach Hause, ___ sich zu verabschieden.“", q: "Welcher Satz ist richtig geschrieben?", o: ["Sie ging nach Hause, ohne sich zu verabschieden.", "Sie ging nach Hause ohne, sich zu verabschieden.", "Sie ging nach Hause ohne sich zu verabschieden."], a: 0, ki: 2, kiText: "weil bei einer kurzen Gruppe mit „zu“ nie ein Komma steht.",
            e: "Falsch: Vor einer Infinitivgruppe mit „ohne, um, statt, anstatt, außer, als“ steht immer ein Komma – egal, wie kurz sie ist.",
            begruende: { q: "Wann steht vor einer Gruppe mit „zu“ ein Komma?", m: "Bei um, ohne, statt, anstatt, außer, als steht immer ein Komma, auch wenn die Gruppe kurz ist.", k: ["komma", "um|ohne|statt|außer"] } },
          { material: "Wörter mit gleichem Teil: Eingang und Ausgang", q: "Wie schreibt man das zusammen mit „und“?", o: ["Ein- und Ausgang", "Ein und Ausgang", "Ein-und Ausgang"], a: 0, ki: 0, kiText: "denn der Ergänzungsstrich ersetzt „-gang“.",
            e: "Der Ergänzungsstrich steht für den ausgelassenen Wortteil: Ein-(gang) und Ausgang." },
          { nur: "M", material: "Wörtliche Rede mit Begleitsatz vorn", q: "Welcher Satz ist richtig?", o: ["Er fragte: „Kommst du mit?“", "Er fragte „Kommst du mit“?", "Er fragte, „Kommst du mit?“"], a: 0, ki: 0, kiText: "denn vor der wörtlichen Rede steht nach dem Begleitsatz ein Doppelpunkt.",
            e: "Steht der Begleitsatz vor der wörtlichen Rede, folgt ein Doppelpunkt; das Fragezeichen bleibt im Anführungszeichen." }
        ] }
    ] },

    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Rechtschreib-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 7, fragen: [
        { q: "Welche Schreibung ist richtig?", o: ["beim Laufen", "beim laufen"], a: 0, e: "„beim“ macht das Verb zum Nomen." },
        { q: "Welche Schreibung ist richtig?", o: ["etwas Neues", "etwas neues"], a: 0, e: "Nach „etwas“ wird das Adjektiv zum Nomen." },
        { q: "Welche Schreibung ist richtig?", o: ["Rad fahren", "radfahren"], a: 0, e: "Nomen + Verb: getrennt." },
        { q: "Welche Schreibung ist richtig?", o: ["irgendwo", "irgend wo"], a: 0, e: "„irgend-“ schreibt man mit dem nächsten Wort zusammen." },
        { q: "Ich hoffe, ___ du kommst.", o: ["dass", "das"], a: 0, e: "„dieses“ passt nicht – also dass." },
        { q: "Das Heft, ___ dort liegt, gehört mir.", o: ["das", "dass"], a: 0, e: "„welches“ passt – also das." },
        { q: "Das ___ schützt das Auge.", o: ["Lid", "Lied"], a: 0, e: "Lid ohne e – wie Auge." },
        { q: "Welches Wort ist richtig?", o: ["Rhythmus", "Rythmus"], a: 0, e: "Zweimal h: Rh-y-th-mus." },
        { q: "Welches Wort ist richtig?", o: ["Station", "Stazion"], a: 0, e: "Die Endung heißt immer -tion." },
        { q: "Vor einer Gruppe mit „um … zu“ steht …", o: ["immer ein Komma", "nie ein Komma"], a: 0, e: "um, ohne, statt, anstatt: immer Komma." },
        { q: "Ihr ___ herzlich eingeladen.", o: ["seid", "seit"], a: 0, e: "„seid“ ist das Verb „sein“ (ihr seid)." },
        { q: "Welche Schreibung ist richtig?", o: ["heute Abend", "heute abend"], a: 0, e: "Tageszeit nach „heute“: groß." }
      ] }
    ] }
  ],
  weiter: { titel: "Zurück zum Fehlertraining", text: "Wenn eine Runde danebenging: Im Fehlertraining und in den Rechtschreibseiten kannst du jede Regel noch einmal nachlesen." }
});
