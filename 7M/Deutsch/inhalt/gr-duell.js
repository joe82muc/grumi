/* Deutsch 7 · Grammatik und Sprache · Zusatz: Grammatik-Duelle
   (Fehler finden, Duell gegen die KI, Tischduell – quer durch die sieben Grammatik-Themen)
   LehrplanPLUS D7 4.2 (Wortarten und Pronomen, Zeitformen, Aktiv und Passiv, Konjunktiv I in der indirekten Rede,
   Satzglieder, Satzreihe und Satzgefüge, Gliedsätze). Die fehlerhaften Sätze in Station 1 sind Absicht. */
D7Kit.seite({
  id: "gr-duell",
  titel: "Grammatik-Duelle",
  einleitung: "Sieben Grammatik-Themen liegen hinter dir. Hier mischst du sie: Spüre Fehler auf, tritt gegen die KI an – sie verwechselt gern ein paar Dinge – und fordere jemanden am Tisch heraus.",
  zeit: "etwa 20 Minuten",
  ziele: ["🔍 Ich finde Grammatikfehler und kann sie erklären.", "⚔️ Ich bestimme Formen und Sätze sicher – auch wenn jemand widerspricht.", "👥 Ich spiele fair zu zweit an einem Gerät."],
  stationen: [
    { kurz: "Fehler finden", ober: "Aufwärmen", titel: "Fehler aufspüren", teile: [
      { art: "mc", id: "fehler", tag: "Fehler finden", titel: "In welchem Satz steckt ein Fehler?", fragen: [
        { q: "Relativpronomen:", o: ["Das Mädchen, die dort steht, ist meine Cousine.", "Der Hund, der dort bellt, gehört unserem Nachbarn.", "Die Tasche, die dort liegt, gehört mir.", "Das Buch, das ich lese, ist spannend."], a: 0, e: "Das Relativpronomen richtet sich nach dem Nomen: das Mädchen, das dort steht." },
        { q: "Zeitformen:", o: ["Nachdem wir gegessen haben, gingen wir spazieren.", "Nachdem wir gegessen hatten, gingen wir spazieren.", "Wir aßen und gingen dann spazieren.", "Wir haben gegessen und sind dann spazieren gegangen."], a: 0, e: "Was vor dem Präteritum (gingen) geschah, steht im Plusquamperfekt: gegessen hatten." },
        { q: "Passiv:", o: ["Die Aufgaben wurde von allen gelöst.", "Die Aufgabe wurde von allen gelöst.", "Die Aufgaben wurden von allen gelöst.", "Alle lösten die Aufgaben."], a: 0, e: "Subjekt im Plural (die Aufgaben) – also auch das Verb im Plural: wurden." },
        { q: "Satzgefüge:", o: ["Ich bleibe daheim, weil ich bin krank.", "Ich bleibe daheim, weil ich krank bin.", "Ich bleibe daheim, denn ich bin krank.", "Weil ich krank bin, bleibe ich daheim."], a: 0, e: "Im Nebensatz mit „weil“ steht das gebeugte Verb am Ende: weil ich krank bin." }] },
      { art: "markieren", id: "konj", tag: "Konjunktiv I", titel: "Indirekte Rede", satz: "Lea sagt, sie [[habe]] keine Zeit, weil sie für die Probe lernen [[müsse]] und danach zum Training [[gehe]].", finde: "die drei Verbformen im Konjunktiv I", e: "habe, müsse, gehe – der Konjunktiv I zeigt: Das hat Lea gesagt, es wird nur wiedergegeben." },
      { art: "markieren", id: "kausal", tag: "Satzglieder", titel: "Adverbiale des Grundes", satz: "[[Wegen]] [[des]] [[Gewitters]] fiel der Ausflug am Freitag aus.", finde: "alle Wörter, die zur Adverbiale des Grundes gehören", e: "Frage: Warum fiel der Ausflug aus? – Wegen des Gewitters. „Am Freitag“ antwortet auf „Wann?“." }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Grammatik bestimmen", teile: [
      { art: "duell", id: "bestimmen", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf Sätze, fünf Fragen. Die KI antwortet auch – sehr überzeugt, aber nicht immer richtig. Lass dich nicht verunsichern.",
        runden: [
          { material: "Der Pokal wird dem Sieger überreicht.", q: "In welcher Form steht das Verb?", o: ["Passiv (Präsens)", "Futur I", "Perfekt"], a: 0, ki: 1, kiText: "weil „wird“ im Satz steht – und „wird“ ist immer Futur.",
            e: "„wird“ + Partizip II (überreicht) ist Passiv. Futur I wäre „wird“ + Infinitiv: Er wird den Pokal überreichen.",
            begruende: { q: "Woran erkennst du hier das Passiv?", m: "An „wird“ zusammen mit dem Partizip II „überreicht“. Außerdem handelt der Pokal nicht selbst, mit ihm geschieht etwas.", k: ["partizip|mittelwort|überreicht|geschieht|nicht selbst|handelt nicht|wird etwas getan"] } },
          { material: "Bis morgen werde ich das Buch gelesen haben.", q: "Welche Zeitform ist das?", o: ["Futur II", "Futur I", "Perfekt"], a: 0, ki: 0, kiText: "denn „werde“ + Partizip II + „haben“ ergibt das Futur II.",
            e: "Futur II: Etwas wird in der Zukunft abgeschlossen sein." },
          { material: "Dass du gekommen bist, freut mich.", q: "Was für ein Gliedsatz ist der dass-Satz?", o: ["Subjektsatz", "Objektsatz", "Relativsatz"], a: 0, ki: 1, kiText: "weil dass-Sätze immer Objektsätze sind.",
            e: "Nicht immer. Frage: Wer oder was freut mich? – Dass du gekommen bist. Der Satz steht an der Stelle des Subjekts.",
            begruende: { q: "Mit welcher Frage findest du einen Subjektsatz?", m: "Mit der Frage „Wer oder was?“ – hier: Wer oder was freut mich?", k: ["wer oder was|wer|was freut"] } },
          { material: "Tom sagt: „Ich komme später.“", q: "Wie lautet die indirekte Rede?", o: ["Tom sagt, er komme später.", "Tom sagt, ich komme später.", "Tom sagt, er kam später."], a: 0, ki: 0, kiText: "aus „ich“ wird „er“, und das Verb steht im Konjunktiv I: er komme.",
            e: "Pronomen anpassen, Verb in den Konjunktiv I setzen." },
          { material: "Wir blieben drinnen, denn es regnete.", q: "Satzreihe oder Satzgefüge?", o: ["Satzreihe: zwei Hauptsätze", "Satzgefüge: Hauptsatz und Nebensatz", "ein einfacher Satz"], a: 0, ki: 1, kiText: "weil „denn“ einen Grund nennt – genau wie „weil“.",
            e: "Der Sinn ist gleich, der Satzbau nicht: Nach „denn“ steht das Verb an zweiter Stelle (es regnete) – ein Hauptsatz. Nach „weil“ stünde es am Ende." }] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Grammatik-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 8, fragen: [
        { q: "„sie war gelaufen“ ist …", o: ["Plusquamperfekt", "Perfekt", "Präteritum"], a: 0, e: "war + Partizip II." },
        { q: "„Das Tor wird geöffnet.“ ist …", o: ["Passiv", "Aktiv", "Futur"], a: 0, e: "wird + Partizip II." },
        { q: "Konjunktiv I von „er hat“:", o: ["er habe", "er hätte", "er hatte"], a: 0, e: "„hätte“ ist Konjunktiv II." },
        { q: "Frage nach dem Subjekt:", o: ["Wer oder was?", "Wen oder was?", "Wem?"], a: 0, e: "Wer oder was tut etwas?" },
        { q: "„weil“ leitet ein …", o: ["einen Nebensatz", "einen Hauptsatz", "eine Frage"], a: 0, e: "Verb am Ende." },
        { q: "„der Mann, der lacht“ – „der“ ist …", o: ["Relativpronomen", "Artikel", "Konjunktion"], a: 0, e: "Es bezieht sich auf „Mann“." },
        { q: "„wegen des Regens“ ist …", o: ["Adverbiale des Grundes", "Adverbiale der Zeit", "Objekt"], a: 0, e: "Warum? – Wegen des Regens." },
        { q: "Zwei Hauptsätze mit „und“:", o: ["Satzreihe", "Satzgefüge", "Gliedsatz"], a: 0, e: "Hauptsatz + Hauptsatz." },
        { q: "„Ich werde kommen.“ ist …", o: ["Futur I", "Futur II", "Passiv"], a: 0, e: "werde + Infinitiv." },
        { q: "„diese“ in „diese Jacke“ ist …", o: ["Demonstrativpronomen", "Relativpronomen", "Adjektiv"], a: 0, e: "Es weist auf etwas hin." },
        { q: "„Ich weiß, dass er kommt.“ – der dass-Satz ist …", o: ["Objektsatz", "Subjektsatz", "Hauptsatz"], a: 0, e: "Wen oder was weiß ich?" },
        { q: "Im Nebensatz steht das gebeugte Verb …", o: ["am Ende", "an zweiter Stelle", "am Anfang"], a: 0, e: "…, weil er müde ist." }] }
    ] }
  ],
  weiter: { href: "index.html#grammatik", titel: "Zurück zur Übersicht", text: "Wenn eine Runde danebenging: In den sieben Grammatik-Themen kannst du jeden Merkkasten noch einmal nachlesen." }
});
