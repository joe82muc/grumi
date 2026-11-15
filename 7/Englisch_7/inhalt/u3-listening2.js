/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Listening practice 2: Good advice (Kürzel C21)
   (reines Hörtraining mit drei Hörtexten zum Thema Rat und Hilfe: eine Ratgeber-Sendung für Jugendliche, ein Gespräch zweier
   Mädchen über Gefühle und eine Wegbeschreibung in Kilkenny; am Schluss „Your turn“ mit einer Rat-Nachricht an einen Freund)
   Buchprinzip (Unit 3, nur Aufbau, nichts übernommen): Hörformen der Unit – Telefonat/Gespräch mit Multiple Choice (drei Optionen),
   Lückensätze, einem Weg auf dem Plan folgen und das Ziel nennen; vor jedem Hören erst die Aufgaben lesen (Hörauftrag).
   Besser: zusätzlich neue Formen – Ratschläge den Wendungen zuordnen (You should / Why don't you / Try to), Gefühle der
   Sprecherinnen erkennen und zuordnen, Reihenfolge des Gehörten, Notizen zum Auswählen bzw. Mitschreiben; Vorentlastung vor jedem
   Text, sofortige Rückmeldung, Hilfen in Stufen, Förder-Links an den schwierigen Stellen.
   Differenzierung: Jeder Hörtext hat zwei Fassungen derselben Situation – R7 kürzer (Ratgeber 135, Gefühle 132, Weg 98 Wörter),
   zwei Sprecher, deutsche Hilfen, beim Weg eine Text-Karte (Tabelle); M7 länger (209, 186, 178 Wörter), mehr Einzelheiten,
   Weg ohne Karte und mit einer Warnung (nicht die erste Straße links). Plus für M7 (m7): eigene Meinung zu den Ratschlägen,
   Schlussfolgerung zu Meg, Schlussfolgerung zu „Do not hurry“ und das Gefühl von Shane.
   Grammatik rezeptiv und im Kontext: Ratschläge (should, Why don't you …?, Try to …), some/any/no und something/anybody/nobody/nothing
   (G9); am Schluss eine Lückenübung dazu. Orts- und Richtungswörter beim Weg.
   LehrplanPLUS E7 1.2 Hörverstehen (Gespräch, Sendung, Wegbeschreibung: Einzelheiten, Reihenfolge und Gefühle entnehmen, Notizen machen),
   E7 1.3 Sprechen/Schreiben (Rat geben), E7 3 (some, any, no), E7 5 (Irland: Alltag).
   Texte: texte/u3/u3-lp2-advice-r.js/-m.js (Erin = Frau, Shane = Junge, 13), u3-lp2-feelings-r.js/-m.js (Meg = Mädchen,
   Cora = Mädchen), u3-lp2-way-r.js/-m.js (Mrs Doyle = Frau, Jonah = Junge). Alle Personen und Straßen erfunden (Mill Row,
   Queen Street, Rose Lane, Station Road); Kilkenny ist ein echter Ort in Irland.
   Förder-Links: Ratschläge → unit3/extra/advice.html (an den Ratschlag-Aufgaben), some/any/no → unit3/extra/some-any.html (an der
   Lückenübung), Weg → u3_x6.html (am Hörtext zum Weg).
   BILDER:
   1. Station „Warm-up“ (Vorentlastung): ein Junge mit Fußballtasche sitzt im Bus über einem Heft, neben ihm ein Mikrofon-Symbol
      als Sprechblase „Ask Erin“.
   2. Station „A new girl“ (Sprechanlass): ein Mädchen mit Schultasche steht allein im Schulhof, ein anderes Mädchen mit einer
      Brotdose winkt unter einem großen Baum.
   3. Station „The way“ (Sprechanlass): ein Junge mit Rucksack steht vor einem kleinen Bahnhof, eine Frau zeigt die Straße hinunter,
      im Hintergrund eine Burg mit Park. */
const L2 = (r, m) => ({ R: r, M: m });
D7Kit.seite({
  id: "u3-listening2",
  titel: "Listening practice 2 · Good advice",
  einleitung: "Three listening texts about <b>good advice</b>: a <b>radio show</b> for teenagers, a talk between two girls about <b>feelings</b> and a woman who explains the <b>way</b> in Kilkenny. You listen, choose, match, order and note – and at the end you give a friend <b>advice</b> yourself.",
  zeit: "etwa 50 Minuten",
  ziele: ["🎧 I understand a problem and the advice that people give.", "😊 I find out how people feel.", "🧭 I follow a way on a map or in my head.", "✍️ I give a friend advice with should, Why don't you …? and Try to …."],
  thema: "Unit 3 Welcome to Ireland, Listening practice 2: Hörverstehen (Ratgeber-Sendung, Gefühle, Wegbeschreibung)",
  quiz: { profi: "Listening pro" },
  glossar: {
    tip: ["tip", "Tipp: Ein Tipp ist ein kurzer Rat, der dir bei einem Problem hilft."],
    caller: ["caller", "Anrufer oder Anruferin: Das ist eine Person, die in einer Radiosendung anruft."],
    lonely: ["lonely", "einsam: Man fühlt sich allein und hat niemanden zum Reden."],
    nervous: ["nervous", "nervös: Man ist aufgeregt und hat ein bisschen Angst, zum Beispiel am ersten Schultag."],
    bakery: ["bakery", "Bäckerei: Dort kauft man Brot und Brötchen."],
    stressed: ["stressed", "gestresst: Man hat zu viel zu tun und fühlt sich unter Druck."],
    embarrassed: ["embarrassed", "verlegen oder peinlich berührt: Man schämt sich ein bisschen vor anderen."],
    trafficlights: ["traffic lights", "Ampel: Bei Rot bleibst du stehen, bei Grün darfst du gehen."],
    fountain: ["fountain", "Springbrunnen: Dort spritzt Wasser nach oben, oft in einem Park oder auf einem Platz."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready for good advice", teile: [
      { art: "text", html: "<p class=\"lead\">Think: Have you ever had a problem and a friend gave you <b>advice</b>? What was it? <span class=\"de\">Überlege für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>" },
      { art: "text", html: "<p class=\"lead\">You are going to hear <b>three</b> short texts: a radio show, a talk at school and a woman who shows the way. You can listen to each text <b>more than once</b>. <span class=\"de\">Du hörst drei kurze Texte. Du darfst jeden Text mehrmals anhören.</span></p>" },
      { art: "merke", kopf: "LISTENING TIPS", html: "<ol><li><b>Read the tasks first.</b> <span class=\"de\">Erst lesen, was du finden musst.</span></li><li><b>First time:</b> Who talks? What is it about?</li><li><b>Second time:</b> Listen for the details – numbers, places, feelings.</li><li><b>You do not have to understand every word.</b></li></ol>" },
      { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter hörst du gleich.</span>",
        paare: [["tip", "Tipp, Ratschlag"], ["caller", "Anrufer, Anruferin"], ["lonely", "einsam"], ["nervous", "nervös, aufgeregt"], ["bakery", "Bäckerei"], ["teenager", "Jugendlicher, Jugendliche"]],
        hilfen: ["Wer in einer Radiosendung anruft, ist der caller.", "Bei „bakery“ denk an „baker“, den Bäcker."] },
      { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will hear these words.",
        paare: [["caller", "Anrufer, Anruferin"], ["stressed", "gestresst"], ["lonely", "einsam"], ["embarrassed", "verlegen, peinlich berührt"], ["traffic lights", "Ampel"], ["fountain", "Springbrunnen"]],
        hilfen: ["Think about a park: Where does water jump up into the air?"] }
    ] },
    { kurz: "Ask Erin", ober: "Listening 1 · radio", titel: "A problem and three tips", teile: [
      { art: "text", html: "<p class=\"lead\">On the radio show <b>Ask Erin</b>, the presenter <b>Erin</b> talks to a <button class=\"term\" data-t=\"caller\">caller</button> called <b>Shane</b>. Shane has a problem. Erin gives him some <button class=\"term\" data-t=\"tip\">tips</button>. <b>Read the tasks below first, then listen.</b> <span class=\"de\">Erin gibt Shane Ratschläge. Lies erst die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: L2("u3-lp2-advice-r", "u3-lp2-advice-m"),
        fragen: [
          { art: "formular", id: "rat-notizen", nur: "R", titel: "Your notes", lead: "Choose the right notes. <span class=\"de\">Wähle zu jeder Zeile die richtige Notiz.</span>",
            kopf: "Notes: Shane's problem",
            felder: [
              { label: "How often does Shane train?", loesung: ["three times a week"], wahl: ["three times a week", "two times a week", "every day"] },
              { label: "When does he get home?", loesung: ["at seven o'clock"], wahl: ["at seven o'clock", "at six o'clock", "at eight o'clock"] },
              { label: "What is the problem?", loesung: ["no time for homework"], wahl: ["no time for homework", "no friends in the team", "a broken football"] }
            ],
            hilfen: ["Zahlen hörst du am besten beim zweiten Mal.", "Shane kommt am Abend nach Hause und ist müde."] },
          { art: "formular", id: "rat-notizen", nur: "M", titel: "Your notes", lead: "Choose the right notes.",
            kopf: "Notes: Shane's problem",
            felder: [
              { label: "Training days", loesung: ["Tuesday, Thursday and Saturday"], wahl: ["Tuesday, Thursday and Saturday", "Monday, Wednesday and Friday", "Tuesday, Friday and Sunday"] },
              { label: "Time he gets home on training days", loesung: ["seven o'clock"], wahl: ["seven o'clock", "half past seven", "six o'clock"] },
              { label: "What does his mum say?", loesung: ["He should stop football."], wahl: ["He should stop football.", "He should go to bed earlier.", "He should talk to the coach."] },
            ],
            hilfen: ["Listen for days of the week and for numbers."] },
          { art: "tf", id: "rat-tf", nur: "R", titel: "Right or wrong?", lead: "Is it right or wrong? <span class=\"de\">Stimmt das? Hör genau zu.</span>",
            aussagen: [["Shane is thirteen years old.", true], ["Shane has a lot of time for his homework.", false], ["Erin gives Shane three tips.", true]] },
          { art: "tf", id: "rat-tf", nur: "M", titel: "Right or wrong?", lead: "Is it right or wrong?",
            aussagen: [["Erin thinks that Shane has to stop football.", false], ["Erin says: Make a plan with a time for homework every day.", true]] },
        ] },
          { art: "paare", id: "rat-wendung", foerder: { href: "unit3/extra/advice.html", text: "Extra: Ratschläge geben" }, tag: "Giving advice", titel: "Which words does Erin use?", lead: "Match the beginning and the tip you hear. <span class=\"de\">Wie fängt Erin den Rat an, und was rät sie?</span>",
            paare: [["You should …", "talk to your teacher"], ["Why don't you …?", "do your homework on the bus"], ["Try to …", "make a plan for the week"]],
            hilfen: ["Der erste Tipp ist: mit dem Lehrer sprechen.", "Eine Frage mit „Why don't you“ ist auch ein Tipp."] },
          { art: "mc", id: "rat-mc", nur: "R", titel: "Choose the answers", lead: "Choose the right answer. <span class=\"de\">Wähle die richtige Antwort.</span>",
            fragen: [
              { q: "What does Shane not want to do?", o: ["Stop playing football.", "Talk to his teacher.", "Make a plan."], a: 0, e: "Shane sagt: „No! I love football.“ Er will also nicht aufhören." },
              { q: "What is Shane going to do on Monday?", o: ["Talk to his teacher.", "Play a match.", "Call Erin again."], a: 0, e: "Shane sagt: „I am going to talk to my teacher on Monday.“" }
            ] },
          { art: "mc", id: "rat-mc", nur: "M", titel: "Choose the answers", lead: "Choose the right answer.",
            fragen: [
              { q: "Why does Shane not want to stop football?", o: ["He loves it, and his friends are in the team.", "His mum wants him to play.", "He is the best player."], a: 0, e: "Shane sagt: „I love it, and my friends are in the team.“" },
            ] },
          { art: "mc", id: "rat-gefuehl", m7: true, nur: "R", tag: "Feelings", titel: "How does Shane feel?", lead: "Choose the right answer. <span class=\"de\">Wie fühlt sich Shane am Ende?</span>",
            fragen: [{ q: "How does Shane feel at the end?", o: ["Better – he has good ideas now.", "Angry with Erin.", "Bored."], a: 0, e: "Shane sagt: „Good ideas!“ Die Tipps helfen ihm, er fühlt sich besser." }] },
          { art: "mc", id: "rat-gefuehl", m7: true, nur: "M", tag: "Feelings", titel: "How does Shane feel?", lead: "Choose the right answer.",
            fragen: [{ q: "How does Shane feel at the beginning?", o: ["Tired and stressed.", "Proud and excited.", "Bored and lonely."], a: 0, e: "Am Anfang ist Shane müde, und er hat Stress mit den Hausaufgaben und den Noten." }] },
      { art: "offen", id: "rat-meinung", m7: true, tag: "Your opinion", titel: "Which tip is best?", lead: "Which tip is the best for Shane? Write <b>one or two sentences</b>. <span class=\"de\">Welcher Tipp ist am besten? Begründe kurz.</span>",
        fragen: [{ q: "Which tip is the best for Shane, and why?", m: "I think the plan is the best tip because Shane can see his time every day.", k: ["tip|advice|plan|teacher|bus|homework|talk", "because|good|best|think|help"], min: 2 }],
        tipp: "Say: I think … is the best tip because …",
        hilfen: ["Wähle einen der drei Tipps.", "I think the … is the best tip because …"] }
    ] },
    { kurz: "A new girl", ober: "Listening 2 · feelings", titel: "How do they feel?", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-l2-schulhof.jpg\" width=\"1280\" height=\"853\" alt=\"A girl with a school bag stands alone in the schoolyard; under a big tree another girl with a lunch box waves to her.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the picture: a girl who is <b>new</b> at school. <b>Cora</b> feels <button class=\"term\" data-t=\"nervous\">nervous</button> and <button class=\"term\" data-t=\"lonely\">lonely</button>. A classmate, <b>Meg</b>, talks to her at break. Listen: <b>How do they feel?</b> <span class=\"de\">Lies erst die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: L2("u3-lp2-feelings-r", "u3-lp2-feelings-m"),
        fragen: [
          { art: "paare", id: "gef-wer", nur: "R", tag: "Feelings", titel: "Who feels how?", lead: "Match the person and the feeling. <span class=\"de\">Wer fühlt sich wie?</span>",
            paare: [["Cora at the start", "nervous and lonely"], ["Meg now", "happy"], ["Cora at the end", "better and excited"]],
            hilfen: ["Cora sagt es gleich am Anfang: „a bit nervous, and a bit lonely“.", "Meg sagt: „Now I am!“ – sie ist jetzt glücklich."] },
          { art: "paare", id: "gef-wer", nur: "M", tag: "Feelings", titel: "Who feels how?", lead: "Match the person and the feeling.",
            paare: [["Cora at the start", "nervous and lonely"], ["Meg in her first week (her own word)", "shy"], ["Cora about eating in the yard", "embarrassed"], ["Cora at the end", "better and a little excited"]],
            hilfen: ["Listen to the words after „I felt“ and „it feels“."] },
          { art: "tf", id: "gef-tf", nur: "R", titel: "Right or wrong?", lead: "Is it right or wrong? <span class=\"de\">Stimmt das?</span>",
            aussagen: [["It is Cora's second day at the school.", false], ["Meg had the same feeling in her first week.", true], ["Cora has many plans for break.", false]] },
          { art: "tf", id: "gef-tf", nur: "M", titel: "Right or wrong?", lead: "Is it right or wrong?",
            aussagen: [["Meg said nothing for three days in her first week.", true], ["Meg's favourite lesson is art.", true]] },
        ] },
          { art: "mc", id: "gef-mc", nur: "R", titel: "Choose the answers", lead: "Choose the right answer. <span class=\"de\">Wähle die richtige Antwort.</span>",
            fragen: [
              { q: "What does Meg give Cora?", o: ["Some pizza and a place under the tree.", "A book about art.", "Her phone number."], a: 0, e: "Meg sagt: „I have some pizza in my bag, and you can have some.“ Dazu lädt sie Cora unter den großen Baum ein." },
              { q: "Which lesson does Cora look forward to?", o: ["Art.", "Maths.", "Sport."], a: 0, e: "Cora sagt: „I am excited about art this afternoon.“" }
            ] },
          { art: "mc", id: "gef-mc", nur: "M", titel: "Choose the answers", lead: "Choose the right answer.",
            fragen: [
              { q: "Why does Cora want to sit alone in the library?", o: ["She feels embarrassed to eat alone in the yard.", "She has a lot of homework.", "She wants to read a book."], a: 0, e: "Cora sagt: „it feels embarrassing to eat alone in the yard“." },
              { q: "What does Meg offer Cora besides some pizza?", o: ["A free seat at her table.", "A ride home.", "Her art book."], a: 0, e: "Meg sagt: „there is something else for you, too: a free seat at our table“." },
            ] },
          { art: "mc", id: "gef-schluss", m7: true, nur: "R", tag: "Think about it", titel: "Why does Meg understand Cora?", lead: "Choose the right answer. <span class=\"de\">Warum versteht Meg Cora so gut?</span>",
            fragen: [{ q: "Why does Meg understand Cora so well?", o: ["She felt the same in her first week.", "She is Cora's cousin.", "She is the teacher."], a: 0, e: "Meg war selbst einmal neu. Sie sagt: „I felt the same in my first week.“" }] },
          { art: "mc", id: "gef-schluss", m7: true, nur: "M", tag: "Think about it", titel: "Why does Meg tell her story?", lead: "Choose the right answer.",
            fragen: [{ q: "Why does Meg tell Cora about her first week?", o: ["To show Cora that she is not alone with this feeling.", "To make Cora laugh about her.", "To say that Cora should be quiet."], a: 0, e: "Meg war am Anfang auch schüchtern. Mit ihrer Geschichte zeigt sie Cora, dass sie nicht allein ist." }] }
    ] },
    { kurz: "The way", ober: "Listening 3 · asking the way", titel: "The way in Kilkenny", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-l2-weg.jpg\" width=\"1280\" height=\"853\" alt=\"In front of a small station a woman shows a boy with a backpack the way; a castle and park trees are far away at the end of the street.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Think: <b>asking the way</b>. What does a visitor ask? What does a person say? <span class=\"de\">Überlege für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">Jonah is at the station in <b>Kilkenny</b>, a town in Ireland. He asks <b>Mrs Doyle</b> the way. <b>Read the map and the questions first, then listen.</b> <span class=\"de\">Lies erst die Karte und die Fragen, dann hör zu.</span></p><table class=\"tab\" style=\"border-collapse:collapse;width:100%\"><tr><th style=\"text-align:left;padding:4px 8px;border-bottom:1px solid #999\">Street</th><th style=\"text-align:left;padding:4px 8px;border-bottom:1px solid #999\">Places</th></tr><tr><td style=\"padding:4px 8px\">Queen Street</td><td style=\"padding:4px 8px\">a church, the post office</td></tr><tr><td style=\"padding:4px 8px\">Rose Lane</td><td style=\"padding:4px 8px\">the castle, the park</td></tr><tr><td style=\"padding:4px 8px\">Mill Row</td><td style=\"padding:4px 8px\">the station, the <button class=\"term\" data-t=\"bakery\">bakery</button>, a bike shop</td></tr></table><p>Listen for: <b>Where</b> does Jonah want to go? What are the <b>steps</b>? How long does it take?</p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Jonah is at the station in <b>Kilkenny</b>, a town in Ireland. He is meeting his cousin. <b>Mrs Doyle</b> explains the way. <b>Read the questions first, then listen.</b></p><p>There is <b>no map</b> this time. Listen for: <b>Where</b> does Jonah want to go? What are the <b>steps</b> (left, right, past, cross)? What <b>must he not do</b>?</p>" },
      { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: L2("u3-lp2-way-r", "u3-lp2-way-m"),
        foerder: { href: "u3_x6.html", text: "Extra: Hören – einem Weg folgen" },
        fragen: [
          { art: "ordnen", id: "weg-reihe", nur: "R", titel: "The way", lead: "Put the steps of the way in the order you hear them. <span class=\"de\">In welcher Reihenfolge geht Jonah?</span>",
            schritte: ["Turn right into Mill Row.", "Go past the bakery.", "Turn left into Queen Street.", "Turn right into Rose Lane."],
            hilfen: ["Zuerst geht er aus dem Bahnhof und biegt ab.", "Die Straße mit der Burg kommt ganz zum Schluss."] },
          { art: "ordnen", id: "weg-reihe", nur: "M", titel: "The way", lead: "Put the steps of the way in the order you hear them.",
            schritte: ["Turn left into Station Road.", "Turn right at the traffic lights.", "Cross the river on the old stone bridge.", "Go past the bank.", "Take the second street on the left."],
            hilfen: ["The river comes after the traffic lights.", "Rose Lane is the last street."] },
        ] },
          { art: "mc", id: "weg-ziel", nur: "R", titel: "The place", lead: "Choose the right answers. <span class=\"de\">Wähle die richtigen Antworten.</span>",
            fragen: [
              { q: "Where does Jonah want to go?", o: ["To the castle.", "To the bakery.", "To the post office."], a: 0, e: "Jonah fragt: „Where is the castle?“" },
              { q: "Where is the castle?", o: ["At the end of Rose Lane, opposite the park.", "Next to the bakery, in Mill Row.", "Opposite the station."], a: 0, e: "Mrs Doyle sagt: „The castle is at the end of Rose Lane, opposite the park.“" },
              { q: "How long does it take?", o: ["About ten minutes.", "About twenty minutes.", "About two minutes."], a: 0, e: "Mrs Doyle sagt: „It takes about ten minutes.“" }
            ] },
          { art: "mc", id: "weg-ziel", nur: "M", titel: "The place", lead: "Choose the right answers.",
            fragen: [
              { q: "Where does Jonah want to go?", o: ["To the café in the castle park.", "To the castle museum.", "To the bank."], a: 0, e: "Jonah trifft seinen Cousin im Café im Burgpark." },
              { q: "Where is the café?", o: ["Behind the big fountain, next to the playground.", "Next to the castle gate, opposite the bank.", "In front of the old bridge."], a: 0, e: "Mrs Doyle sagt: „The café is behind the big fountain, next to the playground.“" },
              { q: "Which street must Jonah not take?", o: ["The first street on the left.", "Queen Street.", "Rose Lane."], a: 0, e: "Mrs Doyle sagt: „Do not take the first street on the left. It only goes to the car park.“" }
            ] },
          { art: "mc", id: "weg-schluss", m7: true, nur: "M", tag: "Think about it", titel: "Why 'Do not hurry'?", lead: "Choose the right answer.",
            fragen: [{ q: "Why does Mrs Doyle say: \"Do not hurry\"?", o: ["The café opens at ten o'clock.", "The way is dangerous.", "The bus is late."], a: 0, e: "Das Café öffnet erst um zehn Uhr, deshalb hat Jonah Zeit." }] }
    ] },
    { kurz: "Your turn", ober: "Language and writing", titel: "Give your friend advice", teile: [
      { art: "merke", kopf: "SOME · ANY · NO", html: "<p><b>some</b> in positive sentences: <i>There is some juice.</i></p><p><b>any</b> in negative sentences and questions: <i>I haven't got any plans. Have you got any plans?</i></p><p><b>no</b> = <i>not any</i>: <i>I have no time.</i></p><p>Mit <b>some, any, no</b> kannst du auch <b>something / anything / nothing</b> und <b>somebody / anybody / nobody</b> bilden.</p>" },
      { art: "merke", kopf: "GIVING ADVICE", html: "<p>Ein Rat klingt so: <b>You should …</b> · <b>Why don't you …?</b> · <b>Try to …</b></p><p><i>You should drink more water. – Why don't you ask a friend? – Try to relax.</i></p>" },
      { art: "offen", id: "dein-rat", nur: "R", tag: "Your words", titel: "Write a message", lead: "Your friend writes: <i>“I am nervous. On Monday I have to give a talk in front of the class. What can I do?”</i> Write <b>two pieces of advice</b>. <span class=\"de\">Schreibe zwei Ratschläge. Benutze „You should“ oder „Why don't you“ oder „Try to“.</span>",
        fragen: [{ q: "Give your friend two pieces of advice.", m: "You should practise at home. Why don't you ask your family to listen?", k: ["should|why don|try to|why not", "practise|practice|family|friend|mum|dad|slowly|plan|notes|read|sleep|breathe|listen|mirror|help|teacher|talk"], min: 2 }],
        tipp: "Start like this: You should … / Why don't you …? / Try to …",
        hilfen: ["Denke an: üben, mit jemandem reden, ruhig atmen.", "You should practise …", "You should practise at home. Why don't you ask your family to listen?"] },
      { art: "offen", id: "dein-rat", nur: "M", tag: "Your words", titel: "Write a message", lead: "Your friend writes: <i>“I am nervous. On Monday I have to give a talk in front of the class. What can I do?”</i> Write <b>three pieces of advice</b> and use <b>should</b>, <b>Why don't you …?</b> and <b>Try to …</b>.",
        fragen: [{ q: "Give your friend three pieces of advice.", m: "You should practise at home. Why don't you ask your family to listen? Try to breathe slowly before you start.", k: ["should", "why don|why not", "try to", "practise|practice|family|friend|mum|dad|slowly|plan|notes|read|sleep|breathe|listen|mirror|help|teacher|talk"], min: 3 }],
        tipp: "Use all three beginnings: You should … / Why don't you …? / Try to …" }
    ] },
    { kurz: "Kurz sichern", ober: "Check", titel: "Quick check", teile: [
      { art: "luecke", id: "sichern-luecke", nur: "R", tag: "Grammar in context", titel: "some, any and no", lead: "Complete the sentences about the three texts. <span class=\"de\">Setze das richtige Wort ein. Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit3/extra/some-any.html", text: "Extra: some, any, no" },
        absaetze: [
          ["On training days, Shane has ", { g: "no" }, " time for his homework."],
          ["Shane needs ", { g: "some" }, " help."],
          ["Cora hasn't got ", { g: "any" }, " plans for break."],
          ["At first, ", { g: "nobody" }, " talks to Cora."]
        ], extra: ["anybody", "nothing"] },
      { art: "luecke", id: "sichern-luecke", nur: "M", tag: "Grammar in context", titel: "some, any and no", lead: "Complete the sentences about the three texts. Two words are extra.",
        foerder: { href: "unit3/extra/some-any.html", text: "Extra: some, any, no" },
        absaetze: [
          ["On training days, Shane has ", { g: "no" }, " time for his homework."],
          ["Meg has ", { g: "some" }, " pizza in her bag."],
          ["Cora hasn't got ", { g: "any" }, " plans for break."],
          ["At first, ", { g: "nobody" }, " talks to Cora."],
          ["In her first week, Meg said ", { g: "nothing" }, " for three days."]
        ], extra: ["anybody", "anything"] },
      { art: "tf", id: "sichern-tf", tag: "Check", titel: "Right or wrong?", lead: "Think about all three texts. <span class=\"de\">Denke an alle drei Texte.</span>",
        aussagen: [["Erin helps Shane on a radio show.", true], ["Meg and Cora are old friends.", false], ["Jonah asks the way at a station.", true], ["All three texts are about a football match.", false]] }
    ] }
  ],
  weiter: { text: "Du kannst jetzt Hörtexte mit Ratschlägen, Gefühlen und Wegen verstehen. Hör dir die Texte bei Bedarf noch einmal an." }
});
