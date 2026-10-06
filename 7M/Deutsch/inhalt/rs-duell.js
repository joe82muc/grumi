/* Deutsch 7 · Rechtschreibung und Sprachtraining · Zusatz: Rechtschreib-Duelle
   (Fehler finden, Duell gegen die KI, Tischduell – für alle, die die Themen der Rechtschreibung bearbeitet haben)
   LehrplanPLUS D7 4.3 (Rechtschreibung und Zeichensetzung überprüfen, Regelwissen anwenden und begründen).
   Die falsch geschriebenen Wörter in Station 1 sind Absicht: Sie sollen gefunden werden. */
D7Kit.seite({
  id: "rs-duell",
  titel: "Rechtschreib-Duelle",
  einleitung: "Du kennst die Regeln? Dann zeig es: Spüre versteckte Fehler auf, tritt gegen die KI an – sie fällt auf ein paar beliebte Irrtümer herein – und fordere jemanden am Tisch heraus.",
  zeit: "etwa 20 Minuten",
  ziele: ["🔍 Ich finde Rechtschreibfehler in einem Satz.", "⚔️ Ich entscheide mich für die richtige Schreibung und kann sie begründen.", "👥 Ich spiele fair zu zweit an einem Gerät."],
  stationen: [
    { kurz: "Fehler finden", ober: "Aufwärmen", titel: "Fehler aufspüren", teile: [
      { art: "text", html: "<p class=\"lead\">In jedem Satz stecken Fehler. Tippe die falsch geschriebenen Wörter an.</p>" },
      { art: "markieren", id: "f1", tag: "Groß oder klein?", satz: "Beim [[schwimmen]] im See hat mein Bruder etwas [[lustiges]] erlebt.", finde: "die zwei Wörter, die großgeschrieben werden müssen", e: "Richtig: beim Schwimmen (bei dem), etwas Lustiges." },
      { art: "markieren", id: "f2", tag: "s-Laute", satz: "Ich [[weis]] genau, dass der [[Fluß]] nach dem Regen viel [[Waser]] führt.", finde: "die drei falsch geschriebenen Wörter", e: "Richtig: weiß (Doppellaut ei), Fluss (kurzes u), Wasser (kurzes a)." },
      { art: "markieren", id: "f3", tag: "Fremdwörter", satz: "Im [[Teater]] spielte das Orchester mit viel [[Rytmus]], und alle fanden es [[interresant]].", finde: "die drei falsch geschriebenen Fremdwörter", e: "Richtig: Theater, Rhythmus, interessant." },
      { art: "mc", id: "komma", tag: "Komma", fragen: [
        { q: "In welchem Satz fehlt ein Komma?", o: ["Ich hoffe dass du morgen Zeit hast.", "Ich hoffe, dass du morgen Zeit hast.", "Hast du morgen Zeit?", "Morgen habe ich Zeit und Lust."], a: 0, e: "Vor „dass“ steht immer ein Komma." },
        { q: "In welchem Satz steht ein Komma zu viel?", o: ["Wir packen Brote, Äpfel, und Saft ein.", "Wir packen Brote, Äpfel und Saft ein.", "Wenn es warm ist, gehen wir baden.", "Sie kommt, obwohl sie müde ist."], a: 0, e: "In der Aufzählung steht vor „und“ kein Komma." }] }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Welche Schreibung stimmt?", teile: [
      { art: "duell", id: "schreibung", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf Runden. Die KI antwortet auch – und sie klingt immer sehr sicher. Aber Vorsicht: Sie hat sich ein paar falsche Regeln gemerkt.",
        runden: [
          { q: "Welcher Satz ist richtig geschrieben?", o: ["Das Warten hat sich gelohnt.", "Das warten hat sich gelohnt.", "Das Warten hat sich Gelohnt."], a: 0, ki: 1, kiText: "weil „warten“ ein Verb ist, und Verben schreibt man immer klein.",
            e: "Nicht immer: Der Artikel „das“ macht das Verb zum Nomen – das Warten.",
            begruende: { q: "Woran erkennst du, dass „Warten“ hier ein Nomen ist?", m: "Am Artikel davor: Der Begleiter „das“ zeigt, dass das Verb zum Nomen geworden ist.", k: ["artikel|begleiter|signalwort|nominalisier|nomen geworden|zum nomen"] } },
          { q: "Was gehört in die Lücke? „Ich glaube, ___ das Spiel heute ausfällt.“", o: ["dass", "das", "daß"], a: 0, ki: 0, kiText: "weil man hier weder „dieses“ noch „welches“ einsetzen kann.",
            e: "Die Ersatzprobe entscheidet. „daß“ gibt es seit der Rechtschreibreform nicht mehr." },
          { q: "Welches Wort ist richtig geschrieben?", o: ["Fußball", "Fussball", "Fusball"], a: 0, ki: 1, kiText: "weil man seit der Rechtschreibreform überall ss statt ß schreibt.",
            e: "Das stimmt nicht: Nach langem Vokal und nach Doppellaut bleibt das ß – Fuß, Straße, heiß. Nur nach kurzem Vokal steht ss.",
            begruende: { q: "Wann schreibt man ß?", m: "Nach einem langen Vokal oder einem Doppellaut, wenn der s-Laut stimmlos ist – zum Beispiel Fuß und heiß.", k: ["lang|doppellaut|zwielaut|gedehnt"] } },
          { q: "Welcher Satz ist richtig?", o: ["Wir bleiben hier, weil es regnet.", "Wir bleiben hier weil es regnet.", "Wir bleiben, hier weil es regnet."], a: 0, ki: 0, kiText: "weil mit „weil“ ein Nebensatz beginnt, und der wird mit Komma abgetrennt.",
            e: "Komma vor weil, dass, wenn, als, obwohl." },
          { q: "Welcher Satz ist richtig geschrieben?", o: ["Morgen wollen wir Rad fahren.", "Morgen wollen wir radfahren.", "Morgen wollen wir Radfahren."], a: 0, ki: 0, kiText: "weil Nomen und Verb hier getrennt bleiben – wie bei „Ski laufen“.",
            e: "Rad fahren, Ski laufen, Schlange stehen: getrennt. Zusammen und groß nur als Nomen: das Radfahren." }] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Rechtschreib-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 8, fragen: [
        { q: "Richtig geschrieben:", o: ["Rhythmus", "Rythmus", "Rhytmus"], a: 0, e: "Rh-y-th-mus." },
        { q: "Nach kurzem Vokal steht …", o: ["ss", "ß", "ein h"], a: 0, e: "Fluss, Wasser, müssen." },
        { q: "Richtig geschrieben:", o: ["beim Essen", "beim essen", "Beim essen"], a: 0, e: "beim = bei dem." },
        { q: "Ich hoffe, ___ du kommst.", o: ["dass", "das", "daß"], a: 0, e: "Kein „dieses/welches“ möglich." },
        { q: "Richtig geschrieben:", o: ["irgendwann", "irgend wann", "Irgend Wann"], a: 0, e: "irgend- immer zusammen." },
        { q: "Richtig geschrieben:", o: ["Straße", "Strasse", "Strase"], a: 0, e: "Langes a." },
        { q: "Richtig geschrieben:", o: ["etwas Neues", "etwas neues", "Etwas neues"], a: 0, e: "Nach „etwas“ groß." },
        { q: "Komma vor …", o: ["weil", "und", "oder"], a: 0, e: "„weil“ leitet einen Nebensatz ein." },
        { q: "Richtig geschrieben:", o: ["Theater", "Teater", "Theather"], a: 0, e: "Ein th am Anfang." },
        { q: "Richtig geschrieben:", o: ["heute Abend", "heute abend", "Heute abend"], a: 0, e: "Tageszeit nach „heute“: groß." },
        { q: "Richtig getrennt:", o: ["Zu-cker", "Zuc-ker", "Zuck-er"], a: 0, e: "ck bleibt zusammen." },
        { q: "Wir wollen …", o: ["Ski laufen", "skilaufen", "Ski Laufen"], a: 0, e: "Nomen + Verb: getrennt, das Verb klein." }] }
    ] }
  ],
  weiter: { href: "index.html#rechtschreibung", titel: "Zurück zur Übersicht", text: "Wenn eine Runde danebenging: In „Mein Fehlertraining“ findest du zu jeder Fehlerart eine Miniübung." }
});
