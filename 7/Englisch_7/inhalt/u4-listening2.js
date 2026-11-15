/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Listening practice 2: Summer in the USA (Kürzel D18)
   (reines Hörtraining mit drei Hörtexten zum Sommer in den USA: Morgendurchsagen in einem Sommercamp, ein Interview mit einer jungen
   Baseballspielerin und ein Radiotipp für den Great-Smoky-Mountains-Nationalpark; danach Steigerung mit more/the most und
   less/the least im Kontext, eine eigene Meinung und Kurz sichern)
   Buchprinzip (Höraufgaben der Unit, nur Aufbau, nichts übernommen): Interview mit Multiple Choice (drei Optionen) und Lückensätzen;
   Radiobericht mit Fragen zu Zahlen und Einzelheiten (Notizen); vorher die Fragen genau lesen (Listening skills); Steigerung mit
   Smileys (☺ mehr, ☹ weniger) und than/the als Signal wie im Test der Unit.
   Besser: drei verschiedene Hörsituationen (Durchsage, Interview, Radiotipp) mit eigenen Stimmen, Tagesplan in die richtige
   Reihenfolge bringen, Notizen zuordnen, Änderungen im Plan heraushören (M7), Fahrenheit und Yards als Landeskunde, sofortige
   Rückmeldung, Hilfen in Stufen, Förder-Links nach zwei Fehlversuchen, eigene Meinung mit KI-Rückmeldung.
   Differenzierung: Texte als zwei eigene Fassungen (R7 136–148 Wörter, ein bis zwei Rollen; M7 216–226 Wörter, zwei bis drei Rollen,
   mit Änderungen und Gründen, Geschichte des Parks, Regeln mit Zahlen); Camp – R7 Reihenfolge und Uhrzeiten mit Wortspeicher, M7
   geänderte Zeiten mit mehr Fallen; Interview – R7 Notizen zuordnen, M7 Notizen ohne Auswahl; Park – R7 richtig/falsch, M7 Notizen
   mit Zahlen; Steigerung – R7 more/less/the most/the least mit Smileys, M7 ganze Formen mit Fehlerfallen (most ohne the, the less).
   Plus für M7 (m7, Pflicht in M7): warum das Lagerfeuer vielleicht ausfällt (Schluss ziehen), Meinung zu Sadie als einzigem Mädchen.
   LehrplanPLUS E7 1.2 Hörverstehen (Durchsage, Interview, Radiosendung: Reihenfolge, Uhrzeiten, Zahlen, Gründe und Regeln entnehmen),
   E7 1.3 Schreiben (Meinung mit Begründung), E7 3 (more/the most, less/the least; too many/not many im Text), E7 5 (USA: Summer camp,
   Sport, Nationalparks, Ureinwohner).
   Texte: texte/u4/u4-lp2-camp-r.js (Mrs Holt = Frau), u4-lp2-camp-m.js (Mrs Holt = Frau, Jake = Mann), u4-lp2-sadie-r.js
   (Mr Pierce = Mann, Sadie = Mädchen), u4-lp2-sadie-m.js (Mr Pierce = Mann, Sadie = Mädchen, Coach Lacey = Frau), u4-lp2-park-r.js und
   u4-lp2-park-m.js (Brandon = Mann, Ms Moreno = Frau).
   Erfunden: Camp Juniper Hill, Mrs Holt, Jake, Sadie, Mr Pierce, Coach Lacey, die Westfield Hawks, die Sendungen „Sports Talk“ und
   „Summer Radio“, Brandon, Ms Moreno. Gesichert: Der Great-Smoky-Mountains-Nationalpark liegt in Tennessee und North Carolina, gehört zu
   den beliebtesten Nationalparks der USA (Millionen Besucher im Jahr), morgens oft blauer Dunst über den Bergen, mehr als 800 Meilen
   Wanderwege, Wasserfälle, die Cherokee lebten dort lange vor den Europäern, Holzhäuser und Kirchen früher Siedler in den Tälern,
   Glühwürmchen, die im Frühsommer gleichzeitig leuchten, viele Schwarzbären (nicht füttern, mindestens 50 Yards Abstand – Regel des
   Parks); in den USA misst man Temperaturen meist in Fahrenheit (90 °F ≈ 32 °C); viele Mädchen spielen Softball, beim Softball ist der
   Ball größer und es wird von unten geworfen; die USA haben eine Baseball-Nationalmannschaft der Frauen.
   Förder-Links: Uhrzeiten im Camp (Lückentext, beide Züge) → u4_x6.html (Extra: Hören – Zahlen und Zeiten); Steigerung (Lückentext,
   beide Züge) → unit4/extra/comparison.html. Die Notizfelder (formular) der M7 haben keinen, weil das Formular keine Fehlversuche meldet.
   Wörter der Unit und der Word bank Summer camp kommen bewusst vor: camp, leader, beautiful, the most …, less, baseball, bat, to hit,
   national park, valley, to settle, huge, camper, dining hall, life jacket, archery, hiking boots, water bottle, sun cream, campfire,
   to toast marshmallows, torch, trail, cabin, schedule, crafts, fishing; neue Wörter: pitcher, softball, ranger, mist, settler, firefly,
   yard, crowded, Fahrenheit (Vorentlastung und Glossar).
   BILDER:
   1. Station „Camp“ (Vorentlastung): ein Sommercamp am See am frühen Morgen, Holzhütten, ein Steg mit Kanus und Schwimmwesten,
      an einem Pfosten ein Lautsprecher; Kinder kommen mit Handtüchern aus den Hütten.
   2. Station „Interview“ (Sprechanlass): ein Mädchen (13) in Baseballkleidung mit Kappe steht auf einem Baseballfeld und wirft
      einen Ball, im Hintergrund lachende Mitspieler; ein Reporter mit Mikrofon am Spielfeldrand.
   3. Station „National park“ (Sprechanlass): eine Küche am Morgen, ein Mädchen und ihr Vater hören beim Frühstück einem kleinen
      Radio zu, auf dem Stuhl daneben Rucksack und Wasserflasche (kein Bild vom Park – es soll keine Antwort der Hörfragen zeigen:
      Dunst, Wanderwege, Holzhäuser, Bären). */
const mitApo2 = liste => liste.concat(liste.filter(s => s.indexOf("'") >= 0).map(s => s.replace(/'/g, "’")));
D7Kit.seite({
  id: "u4-listening2",
  titel: "Listening practice 2 · Summer in the USA",
  einleitung: "Summer in the USA: you listen to <b>announcements at a summer camp</b>, an <b>interview</b> with a young baseball player and a <b>radio tip</b> for a national park. Du übst, beim Hören Uhrzeiten, Änderungen, Zahlen, Gründe und Regeln zu finden. Zu jedem Text liest du erst die Aufgaben, hörst dann zu und siehst am Ende den Text.",
  zeit: "etwa 45 Minuten",
  ziele: ["🏕️ I understand announcements at a summer camp: times and plans.", "⚾ I understand an interview with a young baseball player.", "🐻 I understand a radio tip for a national park and its rules.", "✍️ I compare things with more, the most, less and the least."],
  thema: "Unit 4 USA – here we come!, Listening practice 2: Hörtraining (Sommercamp, Interview, Radiotipp Nationalpark)",
  quiz: { profi: "Listening pro" },
  glossar: {
    camper: ["camper", "Ein camper ist ein Kind oder ein Jugendlicher in einem Feriencamp."],
    dininghall: ["dining hall", "Speisesaal: Dort essen alle im Camp zusammen."],
    lifejacket: ["life jacket", "Schwimmweste: Sie hält dich im Wasser oben. Beim Kanufahren trägt man sie immer."],
    schedule: ["schedule", "Plan, Tagesplan: Er zeigt, was wann passiert."],
    fahrenheit: ["degrees Fahrenheit", "In den USA misst man die Temperatur meist in Grad Fahrenheit (°F). 50 °F sind 10 °C."],
    pitcher: ["pitcher", "Werfer, Werferin beim Baseball: Der pitcher wirft den Ball, und ein Spieler der anderen Mannschaft versucht, ihn mit dem Schläger (bat) zu treffen."],
    softball: ["softball", "Softball ist eine Sportart wie Baseball. In den USA spielen ihn viele Mädchen."],
    ranger: ["ranger", "Ein ranger arbeitet in einem Nationalpark. Er oder sie passt auf Tiere, Wege und Besucher auf."],
    mist: ["mist", "Dunst, leichter Nebel: Man sieht die Berge dann nur unscharf."],
    settler: ["settler", "Siedler, Siedlerin: Ein settler kommt in ein Land und baut dort ein Haus. Das Verb dazu kennst du: to settle."],
    firefly: ["firefly", "Glühwürmchen: Das ist ein kleiner Käfer, der in der Nacht leuchtet. Die Mehrzahl heißt fireflies."],
    yard: ["yard", "Ein yard ist ein Längenmaß in den USA. Ein yard ist knapp ein Meter (etwa 91 Zentimeter)."],
    crowded: ["crowded", "voll, überfüllt: An einem Ort sind sehr viele Menschen."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready for summer", teile: [
      { art: "text", html: "<p class=\"lead\">Summer holidays in the USA are long – often more than two months. Many kids go to a <b>summer camp</b>, play a sport or travel with their families. You are going to hear <b>three texts</b> about summer in the USA. <span class=\"de\">Du hörst gleich drei Texte: Durchsagen in einem Camp, ein Interview und einen Radiotipp.</span></p><p>What do you like to do in the summer holidays? <span class=\"de\">Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>" },
      { art: "merke", kopf: "LISTENING TIPS", html: "<ol><li><b>Read the tasks first.</b> <span class=\"de\">Dann weißt du, worauf du achten musst.</span></li><li><b>First time:</b> Who is talking? Where are they?</li><li><b>Second time:</b> Listen for the details – times, numbers, reasons. Write them down at once.</li><li><b>You do not have to understand every word.</b></li></ol>" },
      { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter hörst du gleich.</span>",
        paare: [["camper", "Kind im Feriencamp"], ["dining hall", "Speisesaal"], ["life jacket", "Schwimmweste"], ["pitcher", "Werfer beim Baseball"], ["ranger", "Mitarbeiterin im Nationalpark"], ["settler", "Siedler"]],
        hilfen: ["Beim Kanufahren trägst du eine life jacket.", "Im dining hall essen alle zusammen.", "to settle = siedeln. Wer siedelt, ist ein settler."] },
      { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will hear these words.",
        paare: [["camper", "a child at a summer camp"], ["schedule", "a plan: what happens when"], ["life jacket", "you wear it in a canoe"], ["pitcher", "the player who throws the ball in baseball"], ["ranger", "a person who works in a national park"], ["firefly", "a small insect that lights up at night"]],
        hilfen: ["Two words are about the camp, one about baseball, two about the national park."] }
    ] },
    { kurz: "Camp", ober: "Listening 1 · at a summer camp", titel: "Good morning, Camp Juniper Hill!", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>morning at a summer camp</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-l2-camp.jpg\" width=\"1280\" height=\"853\" alt=\"A summer camp at a lake early in the morning: wooden cabins, canoes and life jackets at a dock, a loudspeaker on a post; children come out of the cabins with towels.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can the children do at this camp today? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">You are at <b>Camp Juniper Hill</b>, a summer camp at a lake. Every morning, the camp leader, <b>Mrs Holt</b>, makes announcements for all the <button class=\"term\" data-t=\"camper\">campers</button>. <span class=\"de\">Jeden Morgen sagt die Leiterin durch, was heute passiert.</span></p><p><b>Read the tasks first, then listen.</b> <span class=\"de\">Lies erst die Aufgaben, dann hör zu. Achte auf die Uhrzeiten.</span></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">You are at <b>Camp Juniper Hill</b>, a summer camp at a lake. Every morning, the camp leader, <b>Mrs Holt</b>, makes announcements. Today, the counsellor <b>Jake</b> has some changes to the <button class=\"term\" data-t=\"schedule\">schedule</button>.</p><p><b>Read the tasks first, then listen.</b> Listen for the new times and the reasons. You will also hear a temperature in <button class=\"term\" data-t=\"fahrenheit\">degrees Fahrenheit</button>.</p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u4-lp2-camp-r", M: "u4-lp2-camp-m" },
        fragen: [
          { art: "ordnen", id: "c-tag", nur: "R", titel: "The day at camp", lead: "Put the day in the right order. <span class=\"de\">In welcher Reihenfolge passiert das heute?</span>",
            schritte: ["breakfast in the dining hall", "canoeing or archery", "lunch", "hiking on the forest trail", "songs at the campfire"],
            hilfen: ["Der Tag beginnt mit dem Frühstück.", "Nach dem Mittagessen gehen alle wandern.", "Am Abend treffen sich alle am Feuer."] },
          { art: "luecke", id: "c-zeiten", nur: "R", titel: "The times", lead: "Listen again and complete the times. <span class=\"de\">Ergänze die Uhrzeiten. Zwei Wörter bleiben übrig.</span>",
            foerder: { href: "u4_x6.html", text: "Extra: Hören – Zahlen und Zeiten" },
            absaetze: [["Breakfast is at half past ", { g: "seven" }, "."], ["The Blue Group goes canoeing at ", { g: "nine" }, " o'clock."], ["The hike starts at ", { g: "two" }, " o'clock."], ["The campfire is at half past ", { g: "eight" }, "."]],
            extra: ["six", "twelve"],
            hilfen: ["Es sind vier Uhrzeiten: Frühstück, Kanu, Wanderung und Lagerfeuer.", "twelve o'clock ist das Mittagessen – das wird hier nicht gefragt.", "half past seven = halb acht."] },
          { art: "luecke", id: "c-zeiten", nur: "M", titel: "Changes to the schedule", lead: "Listen again and complete the notes. Three words are extra.",
            foerder: { href: "u4_x6.html", text: "Extra: Hören – Zahlen und Zeiten" },
            absaetze: [["Blue Group: canoeing at ", { g: "nine" }, " o'clock."], ["Be at the lake at a quarter ", { g: "to" }, " nine."], ["A storm is coming after ", { g: "three" }, " o'clock."], ["Fishing trip on Saturday: only ", { g: "twelve" }, " places."]],
            extra: ["ten", "past", "twenty"],
            hilfen: ["Canoeing is now at nine – not at ten.", "a quarter to nine = 8:45."] },
          { art: "tf", id: "c-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
            aussagen: [["Campers can keep their phones with them all day.", false], ["You can put your name on the fishing list until Thursday.", true], ["This afternoon, there are crafts in the dining hall.", true]],
            hilfen: ["Listen for the camp rule at the end."] }
        ] },
      { art: "mc", id: "c-mc", nur: "R", tag: "Details", titel: "At the camp", lead: "Tick the right answers. You can listen to the text again. <span class=\"de\">Du kannst den Text oben noch einmal hören.</span>",
        fragen: [
          { q: "What must the Blue Group wear for canoeing?", o: ["their life jackets", "their hiking boots", "sun hats"], a: 0, e: "Mrs Holt sagt zur Blue Group: „Don't forget your life jackets.“ Die hiking boots braucht man erst am Nachmittag." },
          { q: "Where can you get the green torch?", o: ["at the office", "in the dining hall", "at the campfire"], a: 0, e: "Mrs Holt sagt: „You can get it at the office.“" }
        ],
        hilfen: ["Die Fundsache kommt ganz am Ende der Durchsage."] },
      { art: "mc", id: "c-mc", nur: "M", tag: "Details", titel: "At the camp", lead: "Tick the right answers. You can listen to the text again.",
        fragen: [
          { q: "What happens to the hike on the forest trail?", o: ["The campers are going to hike tomorrow morning.", "The hike is in the evening after the campfire.", "There is no hike this week."], a: 0, e: "Jake sagt: „So we're going to hike tomorrow morning instead.“ Der Grund ist das Gewitter am Nachmittag." },
          { q: "How hot is it going to be?", o: ["about 90 °F – that's about 32 °C", "about 90 °C", "about 32 °F"], a: 0, e: "Mrs Holt sagt: „about ninety degrees … that's about thirty-two degrees Celsius“. In den USA misst man meist in Fahrenheit." }
        ] },
      { art: "mc", id: "c-m7", nur: "M", m7: true, tag: "Think about it", titel: "If it isn't raining …", lead: "Tick the right answer.",
        fragen: [
          { q: "Why does Mrs Holt say: \"Tonight we meet at the campfire – if it isn't raining\"?", o: ["A storm is coming, so maybe there is no campfire tonight.", "The campfire is always in the dining hall.", "The campers don't like the campfire."], a: 0,
            e: "Jake hat gesagt, dass am Nachmittag ein Gewitter kommt. Deshalb ist nicht sicher, ob das Lagerfeuer am Abend stattfinden kann." }
        ] }
    ] },
    { kurz: "Interview", ober: "Listening 2 · an interview", titel: "Sadie, the pitcher", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a girl who plays baseball</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-l2-sadie.jpg\" width=\"1280\" height=\"853\" alt=\"A girl in a baseball cap throws a ball on a baseball field; her team mates laugh in the background; a reporter with a microphone stands at the side of the field.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the girl doing? Who is the man with the microphone? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">On the radio show <b>Sports Talk</b>, Mr Pierce talks to <b>Sadie</b>. She is thirteen and plays <b>baseball</b>. <span class=\"de\">Ein <button class=\"term\" data-t=\"pitcher\">pitcher</button> wirft den Ball. Viele Mädchen in den USA spielen <button class=\"term\" data-t=\"softball\">softball</button>, Sadie spielt Baseball.</span></p><p><b>Read the tasks first, then listen.</b></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">On the radio show <b>Sports Talk</b>, Mr Pierce talks to <b>Sadie</b> (13), the <button class=\"term\" data-t=\"pitcher\">pitcher</button> of a baseball team, and to her coach, <b>Coach Lacey</b>.</p><p><b>Read the tasks first, then listen.</b> Listen for numbers, reasons and opinions. Many girls in the USA play <button class=\"term\" data-t=\"softball\">softball</button> – what does Sadie say about it?</p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: { R: "u4-lp2-sadie-r", M: "u4-lp2-sadie-m" },
        fragen: [
          { art: "paare", id: "i-notizen", nur: "R", titel: "Notes about Sadie", lead: "Match the notes. <span class=\"de\">Was gehört zusammen?</span>",
            paare: [["started playing at the age of", "seven"], ["first game with", "her grandma"], ["job on the team", "pitcher"], ["practice days", "Monday, Wednesday and Friday"]],
            hilfen: ["Sadie war sieben, als sie angefangen hat.", "Sie war mit ihrer Oma beim ersten Spiel."] },
          { art: "tf", id: "i-tf", nur: "R", titel: "True or false?", lead: "Listen and decide. <span class=\"de\">Richtig oder falsch?</span>",
            aussagen: [["Sadie's best friends are on her baseball team.", true], ["She is the only girl on her team.", true], ["The boys on her team are not nice to her.", false]],
            hilfen: ["Sadie sagt: „The boys are really nice.“"] },
          { art: "formular", id: "i-notizen", nur: "M", titel: "Your notes", lead: "Listen and write short notes.",
            kopf: "Notes: Sadie and her team",
            felder: [
              { label: "Sadie's age when she started", platz: "age", loesung: ["six", "6", "at six", "at 6", "when she was six", "when she was 6", "six years old", "6 years old", "six years", "6 years", "at the age of six", "at the age of 6", "she was six", "age six", "age 6"] },
              { label: "Games every summer", platz: "number", loesung: ["twenty", "20", "about twenty", "about 20", "around twenty", "around 20", "twenty games", "20 games", "about twenty games", "about 20 games", "around 20 games"] },
              { label: "How often does the team practise?", platz: "how often?", loesung: ["three times a week", "3 times a week", "three times", "3 times", "3x a week", "3 x a week", "3x", "three times per week", "3 times per week", "three times a week.", "3 times a week."] }
            ],
            hilfen: ["Coach Lacey gives two numbers: games and practice."] },
          { art: "tf", id: "i-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
            aussagen: [["Some boys laughed at Sadie at the beginning.", true], ["Coach Lacey says that Sadie is often late.", false]] }
        ] },
      { art: "mc", id: "i-mc", nur: "R", tag: "Details", titel: "Sadie's answers", lead: "Tick the right answers. You can listen to the text again. <span class=\"de\">Du kannst den Text oben noch einmal hören.</span>",
        fragen: [
          { q: "When does Sadie practise?", o: ["from four to six o'clock", "from two to four o'clock", "from six to eight o'clock"], a: 0, e: "Sadie sagt: „from four to six o'clock“." },
          { q: "What is Sadie's dream?", o: ["to play for the USA one day", "to play softball", "to be a coach"], a: 0, e: "Sadie sagt: „I want to play for the USA one day!“" }
        ],
        hilfen: ["Die Uhrzeit kommt direkt nach den Tagen."] },
      { art: "mc", id: "i-mc", nur: "M", tag: "Details", titel: "Sadie's answers", lead: "Tick the right answers. You can listen to the text again.",
        fragen: [
          { q: "What is different in baseball, says Sadie?", o: ["The ball is smaller, and the pitcher throws it from above.", "The ball is bigger, and the pitcher throws it from below.", "There is no pitcher in baseball."], a: 0, e: "Sadie sagt: „In baseball, the ball is smaller, and the pitcher throws it from above, not from below.“" },
          { q: "Why don't the boys laugh at Sadie any more?", o: ["She threw the ball so fast that nobody could hit it.", "The coach told them to stop.", "She is the oldest player on the team."], a: 0, e: "Sadie sagt: „I threw the ball so fast that nobody could hit it.“" }
        ] },
      { art: "offen", id: "i-m7", nur: "M", m7: true, tag: "Your opinion", titel: "The only girl on the team", lead: "Sadie is the only girl on her baseball team. What do you think about that? Write <b>one or two sentences</b> and give a reason.",
        tipp: "Use: I think it's … because … · In my opinion, …",
        fragen: [{ q: "Sadie is the only girl on her team. What do you think about that? Say why.", m: "I think it's great because girls can play baseball, too.", k: ["think|great|good|cool|brave|strong|fine|ok|okay|difficult|hard|nice|important|right|fair|opinion|like|awesome|super", "because|girl|girls|boy|boys|team|play|sport|baseball|anybody|everybody|can|should"], min: 2 }] }
    ] },
    { kurz: "National park", ober: "Listening 3 · a radio tip", titel: "Weekend tip: the Great Smoky Mountains", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a family listens to a radio tip</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-l2-smokies.jpg\" width=\"1280\" height=\"853\" alt=\"A girl and her father sit at a kitchen table in the morning and listen to a small radio; a backpack and a water bottle are on the chair next to them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is listening to the radio? What could they do at the weekend? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">On <b>Summer Radio</b>, Brandon talks to a <button class=\"term\" data-t=\"ranger\">ranger</button>, <b>Ms Moreno</b>. She tells you about a national park in the east of the USA: the <b>Great Smoky Mountains</b>. <span class=\"de\">Ein <button class=\"term\" data-t=\"mist\">mist</button> ist leichter Nebel, ein <button class=\"term\" data-t=\"settler\">settler</button> ein Siedler.</span></p><p><b>Read the tasks first, then listen.</b></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">On <b>Summer Radio</b>, Brandon talks to a <button class=\"term\" data-t=\"ranger\">ranger</button>, <b>Ms Moreno</b>, about the <b>Great Smoky Mountains National Park</b> in the east of the USA.</p><p><b>Read the notes first, then listen.</b> Listen for numbers, the history of the park and the rules. You will hear <button class=\"term\" data-t=\"firefly\">fireflies</button>, <button class=\"term\" data-t=\"yard\">yards</button> and <button class=\"term\" data-t=\"crowded\">crowded</button>.</p>" },
      { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: { R: "u4-lp2-park-r", M: "u4-lp2-park-m" },
        fragen: [
          { art: "tf", id: "p-tf", nur: "R", titel: "True or false?", lead: "Listen and decide. <span class=\"de\">Richtig oder falsch?</span>",
            aussagen: [["The park is in two states.", true], ["There are no trails in the park.", false], ["You can see old wooden houses in the park.", true]],
            hilfen: ["Hör auf states, trails und houses."] },
          { art: "formular", id: "p-notizen", nur: "M", titel: "Your notes", lead: "Listen and write short notes.",
            kopf: "Notes: Great Smoky Mountains National Park",
            felder: [
              { label: "Miles of trails", platz: "number", loesung: ["more than eight hundred", "more than 800", "over 800", "over eight hundred", "800", "eight hundred", "more than 800 miles", "over 800 miles", "800 miles", "eight hundred miles", "more than eight hundred miles", "over eight hundred miles", "800+", "> 800", "more then 800"] },
              { label: "How far must you stay away from a bear?", platz: "distance", loesung: ["fifty yards", "50 yards", "at least fifty yards", "at least 50 yards", "50 yd", "50", "at least 50", "fifty", "about forty-five metres", "about 45 metres", "45 metres", "45 m", "about 45 m", "forty-five metres", "45 meters", "about 45 meters", "forty-five meters", "50 yards (45 metres)", "50 yards, 45 metres", "50 yards / 45 metres", "50 yards or 45 metres", "fifty yards, about forty-five metres"] },
              { label: "When do the fireflies light up at the same time?", platz: "when?", loesung: ["in early summer", "early summer", "in the early summer", "at the beginning of summer", "at the beginning of the summer", "in summer", "summer", "in the summer"] }
            ],
            hilfen: ["Listen for miles, yards and a time of the year."] }
        ] },
      { art: "mc", id: "p-mc", nur: "R", tag: "Details", titel: "The park", lead: "Tick the right answers. You can listen to the text again. <span class=\"de\">Du kannst den Text oben noch einmal hören.</span>",
        fragen: [
          { q: "Why is the park called Smoky?", o: ["In the morning, there is often a blue mist over the mountains.", "There are a lot of campfires in the park.", "There is a lot of smoke from cars."], a: 0, e: "Ms Moreno sagt: „In the morning, there is often a blue mist over the mountains. It looks like smoke.“" },
          { q: "What must you never do?", o: ["feed a bear", "go hiking on a trail", "take photos of a waterfall"], a: 0, e: "Ms Moreno sagt: „Never feed a bear, and keep your food in the car.“" }
        ],
        hilfen: ["smoke = Rauch. Was sieht am Morgen aus wie Rauch?"] },
      { art: "mc", id: "p-mc", nur: "M", tag: "Details", titel: "The park", lead: "Tick the right answers. You can listen to the text again.",
        fragen: [
          { q: "Who lived in these mountains long before the first Europeans came?", o: ["the Cherokee people", "families from Britain", "the first park rangers"], a: 0, e: "Ms Moreno sagt: „The Cherokee people lived in these mountains long before the first Europeans came.“" },
          { q: "What can you still see in the valleys?", o: ["old wooden houses and churches", "big hotels and shops", "a huge lake with boats"], a: 0, e: "Siedlerfamilien lebten in den Tälern. Ihre alten Holzhäuser und Kirchen stehen noch dort." }
        ] }
    ] },
    { kurz: "Your turn", ober: "Language and writing", titel: "Compare and give your opinion", teile: [
      { art: "merke", kopf: "MORE, THE MOST, LESS, THE LEAST", html: "<p>Lange Adjektive (interesting, beautiful, popular …) steigerst du mit <b>more / the most</b> ☺: <i>more interesting than …</i> · <i>the most interesting …</i></p><p>Das Gegenteil heißt <b>less / the least</b> ☹: <i>less interesting than …</i> · <i>the least interesting …</i></p><p>Steht <b>than</b> dahinter → more / less. Geht es um den ersten oder letzten Platz → <b>the</b> most / <b>the</b> least. Vergiss das <b>the</b> nicht!</p>" },
      { art: "luecke", id: "g10", nur: "R", tag: "Grammar in context", titel: "more, less, the most, the least", lead: "☺ = more / the most · ☹ = less / the least. Complete the sentences. <span class=\"de\">Schau auf das Gesicht und auf „than“ oder „one of“. Ein Wort bleibt übrig.</span>",
        foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" },
        absaetze: [["☺ Sadie thinks baseball is ", { g: "more" }, " exciting than softball."], ["☹ For her, softball is ", { g: "less" }, " exciting than baseball."], ["☺ The Great Smoky Mountains are one of ", { g: "the most" }, " popular national parks in the USA."], ["☹ Rain is ", { g: "the least" }, " popular weather at a summer camp."]],
        extra: ["most"],
        hilfen: ["Mit than vergleichst du zwei Dinge: more oder less.", "Ohne than geht es um den ersten (oder letzten) Platz: the most oder the least.", "☺ = mehr, ☹ = weniger."] },
      { art: "luecke", id: "g10", nur: "M", tag: "Grammar in context", titel: "more, less, the most, the least", lead: "Complete the sentences about the three texts. Two forms are wrong – they never fit.",
        foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" },
        absaetze: [["For Sadie, baseball is ", { g: "more exciting" }, " than softball."], ["The Great Smoky Mountains are one of ", { g: "the most popular" }, " national parks in the USA."], ["Early in the morning, the trails are ", { g: "less crowded" }, " than at lunchtime."], ["Rain is ", { g: "the least popular" }, " weather at a summer camp."]],
        extra: ["most exciting", "the less crowded"],
        hilfen: ["than → more … / less …; the first or last place → the most … / the least … (with the!)."] },
      { art: "offen", id: "meinung", nur: "R", tag: "Your words", titel: "What would you like?", lead: "What would you like more: a summer camp like Camp Juniper Hill or a weekend in the Great Smoky Mountains? Write <b>one or two sentences</b> and say why. <span class=\"de\">Schreib, was dir lieber wäre, und nenne einen Grund.</span>",
        tipp: "Begin: I would like … more because …",
        fragen: [{ q: "A summer camp or a weekend in the Great Smoky Mountains? Say what you would like more and why.", m: "I would like the summer camp more because I love canoeing on the lake.", k: ["camp|park|mountains|smoky|juniper", "because|so|exciting|fun|interesting|like|love|want|friends|animals|bears|nature|lake|swim|hike|hiking|canoe|canoeing|fireflies|waterfall|campfire"], min: 2 }],
        hilfen: ["Fang so an: I would like the summer camp more … / I would like the national park more …", "Dann: … because I love …", "Beispiel für den Anfang: I would like the summer camp more because …"] },
      { art: "offen", id: "meinung", nur: "M", tag: "Your words", titel: "What would you like?", lead: "What is more interesting for you: a summer camp, playing on a baseball team or a trip to the Great Smoky Mountains? Write <b>two or three sentences</b>. Use <b>more … than</b> or <b>the most …</b> and give a reason.",
        tipp: "Use: For me, … is more … than … because … · … is the most … thing for me.",
        fragen: [{ q: "Which is more interesting for you: a summer camp, a baseball team or a trip to the Great Smoky Mountains? Compare and say why.", m: "For me, a trip to the Great Smoky Mountains is more interesting than a summer camp because I love animals. The fireflies are the most amazing thing.", k: ["camp|park|mountains|smoky|baseball|team|trip", "more|most|less|least|better|best", "because|so|since"], min: 3 }] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "sichern", tag: "Check", titel: "Right or wrong?", lead: "Think about all three texts. <span class=\"de\">Denke an alle drei Texte.</span>",
        aussagen: [["Mrs Holt is the leader of a summer camp.", true], ["Sadie plays basketball.", false], ["Brandon works as a ranger in the park.", false], ["Ms Moreno works in a national park.", true]],
        hilfen: ["Text 1 ist im Camp, Text 2 ein Interview über Baseball, Text 3 ein Radiotipp mit einer Rangerin."] }
    ] }
  ],
  weiter: { text: "Well done! You can now understand announcements, an interview and a radio tip – with times, numbers, reasons and rules. Listen to the texts again if something was difficult." }
});
