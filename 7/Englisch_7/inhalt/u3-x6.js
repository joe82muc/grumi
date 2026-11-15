/* Englisch 7 (7R/7M) · Unit 3 · Extra: Hören – einem Weg folgen (Kürzel C30)
   Kleine Extra-Übung (Förder-Ziel von „Das ist noch schwer?“ bei Wegbeschreibungen, Durchsagen und Gesprächen in Unit 3):
   erst die Wege-Wörter verstehen, dann ein kurzes, langsames Gespräch am Bahnhof einer irischen Kleinstadt hören
   (Fragen zuerst lesen), die Schritte des Wegs in Reihenfolge bringen und das Ziel wählen, zuletzt die Wegbeschreibung ergänzen.
   Buchprinzip (nur Aufbau, nichts übernommen): Wörter vorentlasten, dann gezielt hören (Weg nachvollziehen), dann sichern.
   Besser: sofortige Rückmeldung, deutscher Merkkasten (R7), R7 mit einfacher Karte als Text, Fragen als Hörauftrag vor dem Hören.
   Differenzierung: R7 mit deutschen Hilfen, Ziel Bibliothek (79 Wörter); M7 englisch, Ziel Schwimmbad, ohne Karte (109 Wörter).
   LehrplanPLUS E7 1.2 Hörverstehen (Wegbeschreibung, Einzelheiten entnehmen), E7 2 (Wortschatz Weg und Orte).
   Texte: texte/u3/u3-x6-weg-r.js, u3-x6-weg-m.js (Tomas = Junge, Maura = Frau; Kilmoor erfundene Stadt). Alle Personen erfunden.
   Kein Förder-Link, kein Abschlussquiz (kleine Extra-Übung).
   BILDER:
   1. Station „Wege-Wörter“ (Vorentlastung): eine einfache Straßenszene von oben mit Pfeilen links, rechts, geradeaus und einer Straßenüberquerung.
   2. Station „Hören“ (Sprechanlass): ein Junge mit Rucksack steht vor einem kleinen Bahnhof und fragt eine Frau nach dem Weg, im Hintergrund eine Kirche. */
const x6 = (r, m) => ({ R: r, M: m });
D7Kit.seite({
  id: "u3-x6",
  titel: "Extra: Hören – einem Weg folgen",
  einleitung: "Bei einer Wegbeschreibung musst du nicht jedes Wort verstehen. Du hörst auf die <b>Richtungswörter</b> (left, right, straight on) und auf die <b>Orte</b> (church, bank, park). Hier übst du das Schritt für Schritt – kurz und langsam.",
  zeit: "etwa 10 Minuten",
  ziele: ["🧭 I know the words for directions.", "🎧 I follow a short description of the way.", "📝 I finish a route description."],
  thema: "Unit 3 Extra: Hören – einem Weg folgen",
  stationen: [
    { kurz: "Directions", ober: "Wege-Wörter", titel: "Words for the way", teile: [
      { art: "merke", nur: "R", kopf: "MERKE", html: "<p>Hör auf die <b>Richtungswörter</b> und die <b>Orte</b>:</p><p><b>turn left / turn right</b> = <i>links / rechts abbiegen</i><br><b>go straight on</b> = <i>geradeaus weitergehen</i><br><b>cross the road</b> = <i>die Straße überqueren</i><br><b>at the corner</b> = <i>an der Ecke</i><br><b>opposite</b> = <i>gegenüber</i> · <b>next to</b> = <i>neben</i></p><p>Nach jedem Richtungswort kommt oft ein Ort: <i>turn left <u>into Garden Street</u></i>, <i>go straight on <u>to the church</u></i>.</p>" },
      { art: "merke", nur: "M", kopf: "NOTE", html: "<p>Listen for the <b>direction words</b> and the <b>places</b>:</p><p><b>turn left / turn right</b> · <b>go straight on</b> · <b>cross the road</b> · <b>at the corner</b> · <b>opposite</b> (on the other side) · <b>next to</b> (beside) · <b>past</b> (you go by it and walk on)</p><p>A place often comes after the direction: <i>turn left <u>into … Street</u></i>, <i>go straight on <u>to the …</u></i>.</p>" },
      { art: "paare", id: "wege-woerter", nur: "R", titel: "Match", lead: "Match the words. <span class=\"de\">Was bedeutet das? Verbinde.</span>",
        paare: [["turn left", "nach links abbiegen"], ["go straight on", "geradeaus weitergehen"], ["cross the road", "die Straße überqueren"], ["at the corner", "an der Ecke"], ["opposite", "gegenüber"], ["next to", "neben"]],
        hilfen: ["„left“ ist links, „straight“ heißt gerade.", "„cross“ kennst du von „Kreuz“: man geht quer hinüber."] },
      { art: "paare", id: "wege-woerter", nur: "M", titel: "Match", lead: "Match the words with their meanings.",
        paare: [["turn left", "go to the left side"], ["go straight on", "do not turn"], ["cross the road", "go to the other side of the road"], ["at the corner", "where two streets meet"], ["opposite", "on the other side, facing it"], ["next to", "right beside it"]],
        hilfen: ["Think about a picture of a street. Where do you walk?"] }
    ] },
    { kurz: "Listening", ober: "Asking the way", titel: "Follow the way", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-x6-bahnhof.jpg\" width=\"1280\" height=\"853\" alt=\"On a rainy day a boy with a backpack asks a woman with an umbrella the way outside a small station; a church tower in the background.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Think: <b>asking the way</b>. What does a visitor ask at a station? What does the woman say? <span class=\"de\">Überlege für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">Tomas is at the station in <b>Kilmoor</b>, a small town in Ireland. He asks Maura the way. <b>Read the map and the questions first, then listen.</b> <span class=\"de\">Lies erst die Karte und die Fragen, dann hör zu.</span></p><table class=\"tab\" style=\"border-collapse:collapse;width:100%\"><tr><th style=\"text-align:left;padding:4px 8px;border-bottom:1px solid #999\">Street</th><th style=\"text-align:left;padding:4px 8px;border-bottom:1px solid #999\">Places</th></tr><tr><td style=\"padding:4px 8px\">Garden Street</td><td style=\"padding:4px 8px\">the station, a bank, the church (at the end of the street)</td></tr><tr><td style=\"padding:4px 8px\">Church Lane</td><td style=\"padding:4px 8px\">a café, the library, a shop</td></tr><tr><td style=\"padding:4px 8px\">Harbour Road</td><td style=\"padding:4px 8px\">the swimming pool, the harbour</td></tr></table><p>Listen for: <b>Where</b> does Tomas want to go? What are the <b>steps</b>? <b>Where</b> is the place exactly?</p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Tomas is at the station in <b>Kilmoor</b>, a small town in Ireland. He asks Maura the way. <b>Read the questions first, then listen.</b></p><p>Listen for: <b>Where</b> does Tomas want to go? What are the <b>steps</b> of the way? <b>Where</b> is the place exactly?</p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: x6("u3-x6-weg-r", "u3-x6-weg-m"),
        fragen: [
          { art: "ordnen", id: "weg-reihe", nur: "R", titel: "The way", lead: "Put the steps of the way in the order you hear them. <span class=\"de\">In welcher Reihenfolge geht Tomas?</span>",
            schritte: ["Turn left into Garden Street.", "Go straight on to the church.", "Turn right into Church Lane.", "Cross the road."],
            hilfen: ["Zuerst geht er aus dem Bahnhof und biegt ab.", "Die Straße überquert er ganz am Schluss."] },
          { art: "ordnen", id: "weg-reihe", nur: "M", titel: "The way", lead: "Put the steps of the way in the order you hear them.",
            schritte: ["Turn right into Harbour Road.", "Go straight on past the bank.", "Turn left at the corner before the bridge.", "Look for the park."],
            hilfen: ["The bridge comes near the end."] },
          { art: "mc", id: "weg-ziel", nur: "R", titel: "The place", lead: "Choose the right answers. <span class=\"de\">Wähle die richtigen Antworten.</span>",
            fragen: [
              { q: "Where does Tomas want to go?", o: ["to the library", "to the café", "to the swimming pool"], a: 0, e: "Tomas fragt: „Where is the library, please?“" },
              { q: "Where is the library?", o: ["opposite the café", "next to the church", "opposite the bank"], a: 0, e: "Maura sagt: „The library is opposite the café.“" }
            ] },
          { art: "mc", id: "weg-ziel", nur: "M", titel: "The place", lead: "Choose the right answers.",
            fragen: [
              { q: "Where does Tomas want to go?", o: ["to the swimming pool", "to the library", "to the harbour"], a: 0, e: "Tomas sucht das Schwimmbad („the swimming pool“)." },
              { q: "Where is the pool?", o: ["next to the park, opposite the bus stop", "next to the bridge, opposite the bank", "next to the bank, opposite the park"], a: 0, e: "Das Schwimmbad liegt neben dem Park, gegenüber der Bushaltestelle." }
            ] }
        ] }
    ] },
    { kurz: "Route", ober: "Finish the route", titel: "Write the directions", teile: [
      { art: "luecke", id: "weg-text", nur: "R", titel: "Finish the directions", lead: "Use the words and finish the directions. <span class=\"de\">Ergänze die Wegbeschreibung mit den Wörtern aus dem Gespräch.</span>",
        absaetze: [["Go out of the station and turn ", { g: "left" }, " into Garden Street. Go ", { g: "straight" }, " on to the church. Then turn right into Church Lane and ", { g: "cross" }, " the road. The library is ", { g: "opposite" }, " the café."]],
        extra: ["behind", "back"],
        hilfen: ["Schau in deine Reihenfolge oben: Zuerst links, dann geradeaus.", "Die Straße muss man … (überqueren)."] },
      { art: "luecke", id: "weg-text", nur: "M", titel: "Finish the directions", lead: "Use the words and finish the directions.",
        absaetze: [["Go out of the station and turn right into Harbour Road. Go straight on ", { g: "past" }, " the bank. Turn ", { g: "left" }, " at the ", { g: "corner" }, " before the bridge. The pool is ", { g: "next to" }, " the park."]],
        extra: ["behind", "over"],
        hilfen: ["Use the steps from the order task."] }
    ] }
  ],
  weiter: { text: "Geh jetzt zurück zu deiner Aufgabe und probiere es noch einmal." }
});
