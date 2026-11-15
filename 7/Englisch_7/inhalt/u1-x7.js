/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Extra: Hören – aus zwei wählen (Kürzel A35)
   Kleine Extra-Übung (Förder-Ziel von „Das ist noch schwer?“ bei den Hördetails in Listening practice 1): erst der Trick beim Hören
   mit zwei Antworten (beide Antworten lesen, den Unterschied finden, auf genau dieses Wort hören – Vorsicht, oft kommen beide Wörter
   vor), eine Probe mit einem geschriebenen Satz, dann ein kurzes, langsames Telefonat hören und je Frage aus zwei Antworten wählen,
   zuletzt richtig oder falsch.
   Buchprinzip (nur Aufbau, nichts übernommen): leichtere Hörfassung der Unit 1 (Diff-KV zur Höraufgabe in Topic 2) – dieselbe Art
   Frage, aber nur zwei statt drei Auswahlmöglichkeiten; Fragen zuerst lesen, dann hören.
   Besser: sofortige Rückmeldung, deutscher Merkkasten (R7) mit der typischen Falle („Is your bag red? – No, it isn't. It's blue.“),
   eine Probe vor dem Hören, kurzer langsamer Text, Transkript nach den Aufgaben.
   Differenzierung: R7 mit deutschen Hilfen und kürzerem Text (57 Wörter, Antworten meist direkt), M7 englisch mit längerem Text
   (102 Wörter): zu jeder Frage kommen beide Antworten im Text vor (sunny/windy, seals/dolphins, Saturday/Sunday, Tilly/Ned).
   LehrplanPLUS E7 1.2 Hörverstehen (kurzes Telefonat, Einzelheiten entnehmen).
   Texte: texte/u1/u1-x7-listen-r.js und u1-x7-listen-m.js (Barney = Junge, Hattie = Mädchen; Tilly und Ned werden in M7 nur genannt).
   Alle Personen erfunden; dass man an Englands Küsten Robben sehen kann, stimmt (der Ort bleibt ungenannt).
   Kein Förder-Link, kein Abschlussquiz (kleine Extra-Übung).
   BILDER:
   1. Station „Two answers“ (Vorentlastung): zwei große Sprechblasen nebeneinander, in der einen eine rote Tasche, in der anderen eine
      blaue, dazwischen ein großes Fragezeichen, keine Schrift.
   2. Station „Listening“ (Sprechanlass): ein Junge (12) sitzt zu Hause auf dem Sofa und telefoniert, er lacht; auf dem Tisch ein
      Schulheft. (Kein Strand, kein Wetter, keine Tiere im Bild – das sind Antworten der Hörfragen.) */
(function () {
  const x7 = (r, m) => ({ R: r, M: m });
  D7Kit.seite({
    id: "u1-x7",
    titel: "Extra: Hören – aus zwei wählen",
    einleitung: "Beim Hören musst du nicht jedes Wort verstehen. Wenn du aus <b>zwei Antworten</b> wählst, suchst du nur den Unterschied – und hörst auf genau dieses Wort. Hier übst du das Schritt für Schritt – kurz und langsam.",
    zeit: "etwa 10 Minuten",
    ziele: ["🔍 I read both answers and find the difference.", "🎧 I listen for one word in a short phone call.", "⚠️ I don't fall for the trap when I hear both words."],
    thema: "Unit 1 Extra: Hören – aus zwei wählen",
    glossar: {
      seaside: ["seaside", "Am seaside bist du am Meer, zum Beispiel in einem kleinen Ort an der Küste."],
      seal: ["seal", "Eine seal ist eine Robbe. Robben leben im Meer und liegen oft auf Felsen oder am Strand."]
    },
    stationen: [
      { kurz: "Two answers", ober: "Der Trick", titel: "How to choose from two answers", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>red or blue?</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-x7-taschen.jpg\" width=\"1280\" height=\"853\" alt=\"At a lost property shelf a teacher holds up a red school bag; a boy shakes his head and points at a blue school bag.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Which bag is the boy's? Which word do you listen for? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "merke", nur: "R", kopf: "MERKE", html: "<ol><li><b>Lies beide Antworten.</b></li><li><b>Was ist der Unterschied?</b> Zum Beispiel: <i>red</i> oder <i>blue</i>.</li><li><b>Hör nur auf dieses Wort.</b> Den Rest musst du nicht verstehen.</li><li><b>Vorsicht, Falle:</b> Oft kommen <b>beide</b> Wörter vor! „Is your bag red? – No, it isn't. It's blue.“ Die Antwort ist <b>blue</b> – achte auf <i>No</i> und <i>isn't</i>.</li></ol>" },
        { art: "merke", nur: "M", kopf: "NOTE", html: "<ol><li><b>Read both answers.</b></li><li><b>What is the difference?</b> For example: <i>red</i> or <i>blue</i>.</li><li><b>Listen for this word.</b> You don't have to understand everything.</li><li><b>Careful:</b> you often hear <b>both</b> words! \"Is your bag red? – No, it isn't. It's blue.\" The answer is <b>blue</b>. Listen for <i>no</i>, <i>not</i>, <i>but</i> and <i>didn't</i>.</li></ol>" },
        { art: "mc", id: "probe", nur: "R", titel: "Try it first", lead: "Read the mini-dialogue and choose the answer." + ' <span class="de">Lies den kleinen Dialog und wähle. Achte auf No.</span>',
          fragen: [
            { q: "\"Did you go to the beach?\" – \"No, we didn't. We went to the zoo.\" Where did they go?", o: ["to the zoo", "to the beach"], a: 0, e: "Beide Orte kommen vor. Aber: „No, we didn't“ – also nicht an den Strand, sondern in den Zoo." }
          ],
          hilfen: ["Lies den Satz nach No noch einmal."] },
        { art: "mc", id: "probe", nur: "M", titel: "Try it first", lead: "Read the mini-dialogue and choose the answer.",
          fragen: [
            { q: "\"Is the museum open on Monday?\" – \"No, it isn't. But it's open on Tuesday.\" When is the museum open?", o: ["on Tuesday", "on Monday"], a: 0, e: "Both days are in the dialogue. But \"No, it isn't\" + \"But it's open on Tuesday\" – so the answer is Tuesday." }
          ] }
      ] },
      { kurz: "Listening", ober: "Phone call", titel: "A call from the seaside", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a phone call</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-x7-sofa.jpg\" width=\"1280\" height=\"853\" alt=\"A boy sits on the sofa at home, talks on the phone and laughs; a school exercise book lies on the table.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is the boy talking to? What could they talk about? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", nur: "R", html: "<p class=\"lead\"><b>Barney</b> phones his friend <b>Hattie</b>. She is on holiday at the <button class=\"term\" data-t=\"seaside\">seaside</button>. <b>Read the four questions first, then listen.</b> <span class=\"de\">Lies erst die Fragen und beide Antworten, dann hör zu. Eine <button class=\"term\" data-t=\"seal\">seal</button> ist eine Robbe.</span></p>" },
        { art: "text", nur: "M", html: "<p class=\"lead\"><b>Barney</b> phones his friend <b>Hattie</b>. She is on holiday at the <button class=\"term\" data-t=\"seaside\">seaside</button>. <b>Read the four questions first, then listen.</b> Careful: for every question, you hear <b>both</b> answers. <span class=\"de\">Zu jeder Frage kommen beide Antworten im Text vor.</span></p>" },
        { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: x7("u1-x7-listen-r", "u1-x7-listen-m"),
          fragen: [
            { art: "mc", id: "hoer-q", nur: "R", titel: "Choose the answers", lead: "Choose the right answer. <span class=\"de\">Wähle zu jeder Frage eine von zwei Antworten.</span>",
              fragen: [
                { q: "Where is Hattie?", o: ["at the seaside", "at a farm"], a: 0, e: "Hattie sagt: „I'm at the seaside with my family.“" },
                { q: "What's the weather like?", o: ["It's windy.", "It's sunny."], a: 0, e: "Barney fragt: „Is it sunny?“ – Hattie: „No, it isn't. It's windy.“" },
                { q: "What did Hattie see?", o: ["seals", "ponies"], a: 0, e: "Hattie sagt: „We went on a boat trip. I saw seals!“" },
                { q: "When does Hattie come home?", o: ["on Sunday", "on Monday"], a: 0, e: "Hattie kommt am Sonntag nach Hause. Am Montag sehen sich die beiden in der Schule." }
              ] },
            { art: "mc", id: "hoer-q", nur: "M", titel: "Choose the answers", lead: "Choose the right answer.",
              fragen: [
                { q: "What is the weather like today?", o: ["It's really windy.", "It's sunny."], a: 0, e: "Hattie: „yesterday it was sunny. But today it's really windy.“ Sunny war gestern." },
                { q: "What did they see on the boat trip?", o: ["lots of seals", "some dolphins"], a: 0, e: "„We didn't see any dolphins, but we saw lots of seals.“" },
                { q: "Who went on the boat trip with Hattie?", o: ["her sister Tilly", "Barney's brother Ned"], a: 0, e: "Hattie fuhr mit ihrer Schwester Tilly. Ned ist Barneys Bruder – er lässt nur grüßen." },
                { q: "When does Hattie come home?", o: ["on Saturday", "on Sunday"], a: 0, e: "„On Saturday.“ Der Opa möchte bis Sonntag bleiben, aber Mama sagt nein." }
              ] }
          ] }
      ] },
      { kurz: "Check", ober: "Richtig oder falsch", titel: "True or false?", teile: [
        { art: "tf", id: "check", nur: "R", titel: "Right or wrong?", lead: "Think about the phone call. <span class=\"de\">Denk an das Telefonat. Richtig oder falsch – auch das sind nur zwei Antworten.</span>",
          aussagen: [["Hattie went on a boat trip.", true], ["It's sunny at the seaside.", false], ["Barney and Hattie meet at school on Monday.", true]],
          hilfen: ["Schau in deine Antworten oben."] },
        { art: "tf", id: "check", nur: "M", titel: "Right or wrong?", lead: "Think about the phone call. True or false – that's two answers, too.",
          aussagen: [["Yesterday the weather was nice.", true], ["Hattie's grandad wants to go home on Saturday.", false], ["Ned is Hattie's brother.", false]],
          hilfen: ["Listen for but and wants to stay."] }
      ] }
    ],
    weiter: { text: "Geh jetzt zurück zu deiner Aufgabe und probiere es noch einmal." }
  });
})();
