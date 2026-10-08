/* Deutsch 8 · Argumentieren und Stellung nehmen · Zusatz: Argumente-Duelle
   (Aufwärmen: Bausteine erkennen, stark oder schwach, Verknüpfungswörter; Duell gegen die KI: fehlender Baustein, stärkstes
   Argument, passender Beleg, Verknüpfung, Einwand entkräften – M8 zusätzlich: Einwand im Nebensatz einräumen; Tischduell:
   Begriffe aus den Modulen 1 bis 5)
   LehrplanPLUS D8 3.2 (Argumente formulieren und gewichten, durch Beispiele stützen, Schlüsse ziehen; M8: Adverbialsätze zur
   Verknüpfung), 1.3 (auf Gegenargumente eingehen).
   Eigene Beispielthemen (nicht die der Module 1 bis 5): Lesezeit am Morgen, dritte Sportstunde, Schließfächer – alles erfunden.
   Die „KI“ irrt in zwei Runden mit Absicht; die Erklärung stellt es richtig. */
D7Kit.seite({
  id: "arg-duell",
  titel: "Argumente-Duelle",
  einleitung: "Fünf Module Argumentieren liegen hinter dir. Hier mischst du alles: Wärm dich auf, tritt gegen die KI an – sie klingt immer überzeugt, liegt aber nicht immer richtig – und fordere jemanden am Tisch heraus.",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 Ich erkenne die Bausteine eines Arguments auf einen Blick.", "⚔️ Ich entscheide, welches Argument stärker ist und welcher Beleg passt – auch wenn jemand widerspricht.", "👥 Ich spiele fair zu zweit an einem Gerät."],
  stationen: [
    { kurz: "Aufwärmen", ober: "Aufwärmen", titel: "Bausteine, Stärke, Verknüpfung", teile: [
      { art: "sort", id: "bau", tag: "Bausteine", titel: "These, Begründung oder Beispiel?", lead: "Streitfrage: Soll jeder Schultag mit einer Viertelstunde Lesezeit beginnen?", buckets: ["These", "Begründung", "Beispiel oder Beleg"], cols: 200, items: [
        { t: "Jeder Schultag sollte mit einer Viertelstunde Lesezeit beginnen.", b: 0 },
        { t: "Ich bin dagegen, dass die Lesezeit für alle Pflicht wird.", b: 0 },
        { t: "… weil man nach ruhigem Lesen leichter in den Unterricht findet.", b: 1 },
        { t: "… denn nicht jeder kann sich frühmorgens schon auf ein Buch einlassen.", b: 1 },
        { t: "In der Parallelklasse beginnt die erste Stunde seit dem Versuch im Herbst ruhiger.", b: 2 },
        { t: "Mein Bruder hat in seiner Lesezeit in einem halben Jahr vier Bücher geschafft.", b: 2 }
      ] },
      { art: "mc", id: "stark", tag: "Stark oder schwach?", fragen: [
        { q: "Welches Argument für eine Lesezeit am Morgen ist am stärksten?", o: ["Sie hilft beim Ankommen: In der 8c beginnt die erste Stunde seither ruhiger.", "Lesezeit ist einfach super, das sagen bei uns wirklich alle.", "Wer die Lesezeit ablehnt, ist doch bloß zu faul zum Lesen."], a: 0, e: "Nur das erste Argument nennt einen Grund und einen Beleg. „Das sagen alle“ belegt nichts, und der dritte Satz greift Personen an." },
        { q: "Was ist an dem Satz „Sport ist wichtig, weil Sport eben wichtig ist“ schwach?", o: ["Die Begründung wiederholt nur die Behauptung.", "Der Satz ist zu kurz für ein Argument.", "Im Satz fehlt ein Verknüpfungswort."], a: 0, e: "Das „weil“ führt keinen neuen Grund ein – der Satz dreht sich im Kreis." },
        { q: "Du ordnest deine Argumente steigernd. Wohin gehört das stärkste?", o: ["an den Schluss des Hauptteils", "gleich in den ersten Satz", "in die Mitte, gut versteckt"], a: 0, e: "Was zuletzt kommt, bleibt am besten im Gedächtnis." }
      ] },
      { art: "markieren", id: "verkn", tag: "Verknüpfen", titel: "Welche Wörter halten den Gedankengang zusammen?", satz: "[[Zunächst]] sitzen wir in der Schule viele Stunden still. [[Außerdem]] tut Bewegung allen gut, [[weil]] man danach wacher ist. [[Deshalb]] sollte unsere Schule eine dritte Sportstunde ausprobieren.", finde: "die vier Verknüpfungswörter", e: "Zunächst und außerdem reihen die Argumente, weil begründet, deshalb zieht die Folgerung." },
      { art: "mc", id: "einw", m7: true, tag: "Einwand", fragen: [
        { q: "Welcher Satz greift einen Einwand auf und wägt ab?", o: ["Zwar kostet die Lesezeit eine Viertelstunde Unterricht, doch danach arbeiten alle ruhiger.", "Die Lesezeit ist gut, und außerdem ist sie auch noch besonders sinnvoll für alle.", "Wer gegen die Lesezeit ist, hat einfach nicht verstanden, worum es dabei geht."], a: 0, e: "„Zwar … doch“ nennt erst den Nachteil und setzt dann den Vorteil dagegen, der schwerer wiegt." }
      ] }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Welches Argument überzeugt?", teile: [
      { art: "duell", id: "argument", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Die KI bekommt dieselben Fragen wie du und begründet jede Antwort – sehr selbstsicher. Aber Vorsicht: Auf ein paar schwache Begründungen fällt sie herein. Lass dich nicht verunsichern.",
        runden: [
          { material: "„Eine dritte Sportstunde wäre sinnvoll, weil Bewegung wach macht.“", q: "Welcher Baustein fehlt diesem Argument noch?", o: ["ein Beispiel oder Beleg", "die Begründung", "die Behauptung"], a: 0, ki: 0, kiText: "denn Behauptung und Begründung stehen schon da.",
            e: "„weil Bewegung wach macht“ ist die Begründung. Es fehlt etwas, woran man das sehen kann – etwa: „Nach der Bewegungspause sind bei uns alle wieder bei der Sache.“" },
          { q: "Welches Argument gegen eine Pflicht-Lesezeit am Morgen ist am stärksten?", o: ["Wer lesen muss, verliert leichter die Lust daran – freiwillig lesen bei uns mehr.", "Lesen am Morgen ist langweilig, das weiß doch nun wirklich jeder.", "Die Lesezeit hat sich bestimmt jemand ausgedacht, der keine Ahnung hat."], a: 0, ki: 1, kiText: "weil es kurz und klar ist – und was jeder weiß, muss man nicht mehr begründen.",
            e: "Gerade das stimmt nicht: „Das weiß doch jeder“ ersetzt keine Begründung. Stark ist nur das Argument mit Grund und Beleg.",
            begruende: { q: "Warum ist „Das weiß doch jeder“ kein Argument?", m: "Weil der Satz nur behauptet und keinen Grund nennt, den man prüfen könnte.", k: ["grund|begründ|behaupt|beleg|beweis|prüfen"] } },
          { material: "Behauptung: Schließfächer sorgen für Ordnung im Klassenzimmer.", q: "Welcher Beleg passt zu dieser Behauptung?", o: ["Seit die 9a Schließfächer hat, liegen dort keine Jacken und Turnbeutel mehr herum.", "Schließfächer gibt es in vielen Farben, sogar in Rot und in leuchtendem Gelb.", "Für ein Schließfach zahlt man an manchen Schulen im Jahr eine kleine Miete."], a: 0, ki: 0, kiText: "denn nur dieser Satz zeigt, dass es mit Schließfächern ordentlicher wird.",
            e: "Ein Beleg muss genau das stützen, was behauptet wird. Farben und Miete haben mit Ordnung nichts zu tun." },
          { material: "„Schließfächer kosten Miete. ___ lohnen sie sich, weil niemand mehr alles hin- und hertragen muss.“", q: "Welches Wort passt in die Lücke?", o: ["Trotzdem", "Deshalb", "Zum Beispiel"], a: 0, ki: 1, kiText: "weil „deshalb“ immer passt, wenn danach etwas Gutes kommt.",
            e: "„Deshalb“ nennt eine Folge – aber aus der Miete folgt nicht, dass sich Schließfächer lohnen. Zwischen Nachteil und Vorteil steht ein Gegensatz: trotzdem.",
            begruende: { q: "Was zeigt das Wort „trotzdem“ an?", m: "Einen Gegensatz: Der Nachteil wird zugegeben, aber die Aussage gilt dennoch.", k: ["gegensatz|gegenteil|obwohl|dennoch|einschränk|zugegeben|nachteil|aber"] } },
          { q: "Einwand: „Für eine dritte Sportstunde muss eine andere Stunde wegfallen.“ Welche Antwort entkräftet ihn am besten?", o: ["Das stimmt zwar, aber wer sich bewegt hat, arbeitet danach konzentrierter.", "Das ist mir egal, Sport macht einfach viel mehr Spaß als Mathe.", "Wer so etwas sagt, ist doch bloß selbst total unsportlich."], a: 0, ki: 0, kiText: "weil diese Antwort den Einwand erst ernst nimmt und ihm dann einen Grund entgegensetzt.",
            e: "Zugeben, dann entkräften: „Das stimmt zwar, aber …“ Die zweite Antwort weicht aus, die dritte greift die Person an." },
          { nur: "M", material: "„___ eine dritte Sportstunde eine andere Stunde kostet, überwiegt für mich der Nutzen.“", q: "Welche Konjunktion räumt den Einwand in einem Nebensatz ein?", o: ["Obwohl", "Weil", "Damit"], a: 0, ki: 0, kiText: "denn „obwohl“ gibt den Nachteil zu, ohne ihm recht zu geben.",
            e: "Der Nebensatz mit „obwohl“ räumt den Einwand ein – der Hauptsatz behält das letzte Wort. „Weil“ würde den Nachteil zum Grund machen, „damit“ zum Zweck." }
        ] }
    ] },
    { kurz: "Tischduell", ober: "Zusatz", titel: "Tischduell: Argumentations-Profis", teile: [
      { art: "tischduell", id: "tisch", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Zu zweit an einem Gerät", runden: 7, fragen: [
        { q: "Dein Standpunkt in einem Satz heißt …", o: ["These", "Beleg", "Einwand"], a: 0, e: "Ich bin dafür, dass …" },
        { q: "„weil“ leitet meistens ein …", o: ["eine Begründung", "ein Beispiel", "eine Folgerung"], a: 0, e: "weil, denn, da nennen den Grund." },
        { q: "„Deshalb“ kündigt an …", o: ["die Schlussfolgerung", "einen Einwand", "ein Beispiel"], a: 0, e: "deshalb, also, darum." },
        { q: "„Das weiß doch jeder“ ist …", o: ["keine Begründung", "ein starker Beleg", "eine Folgerung"], a: 0, e: "Behaupten ist nicht begründen." },
        { q: "Das stärkste Argument steht …", o: ["am Schluss", "am Anfang", "in der Mitte"], a: 0, e: "Das Letzte bleibt im Kopf." },
        { q: "Ein Gegenargument heißt auch …", o: ["Einwand", "These", "Appell"], a: 0, e: "Wer ihn aufgreift, wirkt fair." },
        { q: "„Zwar …, aber …“ braucht man zum …", o: ["Abwägen", "Zitieren", "Begrüßen"], a: 0, e: "Erst zugeben, dann entgegnen." },
        { q: "Ein Leserbrief beginnt mit …", o: ["einer Anrede", "einem Gruß", "einem Zitat"], a: 0, e: "Sehr geehrte Redaktion, …" },
        { q: "Einen Kommentar schreibt …", o: ["eine Journalistin", "eine Leserin", "die Bürgermeisterin"], a: 0, e: "Leser schreiben Leserbriefe." },
        { q: "Wer eine Diskussion leitet, bleibt …", o: ["neutral", "stumm", "parteiisch"], a: 0, e: "Die eigene Meinung bleibt draußen." },
        { q: "„Wenn ich dich richtig verstehe …“ ist …", o: ["eine Zusammenfassung", "ein Angriff", "eine These"], a: 0, e: "So zeigst du, was angekommen ist." },
        { q: "Bei einem Kompromiss …", o: ["geben beide nach", "gewinnt einer alles", "entscheidet das Los"], a: 0, e: "Jede Seite bekommt etwas." }
      ] }
    ] }
  ],
  weiter: { href: "index.html#argumentieren", titel: "Zurück zur Übersicht", text: "Wenn eine Runde danebenging: In den Modulen 1 bis 5 kannst du jeden Merkkasten noch einmal nachlesen." }
});
