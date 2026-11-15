/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Listening practice 1: Out and about in Ireland (Kürzel C20)
   (reines Hörtraining mit drei Hörtexten: Durchsagen am Bahnhof Dunmore, Fundbüro, Radiosendung zu St Patrick's Day – erst die
   Hörstrategie, dann je Text Vorentlastung, Hörauftrag, Aufgaben, Transkript; am Ende „Your turn“ und Kurz sichern)
   Buchprinzip (Höraufgaben der Unit, nur Aufbau, nichts übernommen): Multiple Choice mit drei Optionen; Lückensätze mit Zahlen und
   Uhrzeiten; einem Weg auf dem Plan folgen und das Ziel nennen; Angaben zu Ort und Zeit heraushören (Ort vor Zeit); Gesprächsnotizen.
   Besser: Fragen vor dem Hören, drei verschiedene Hörsituationen mit eigenen Stimmen (Frau, Mann + Mädchen, Frau + Junge), Hilfen in
   Stufen, Zahlen-Merkkasten (-teen/-ty), Förder-Link zum Weg-Hören, am Ende selbst einen Ausflug planen (offene Aufgabe).
   Differenzierung: Texte als zwei eigene Fassungen (R7 92–109 Wörter, M7 167–212 Wörter, mit mehr Einzelheiten und Gründen);
   Durchsage – R7 Lückensätze mit Wortspeicher und einfachem Plan als Text, M7 Notizfelder ohne Wortspeicher und ein Weg mit Abbiegen
   ohne Plan; Fundbüro – R7 wählt im Formular aus (Diff-corner-Prinzip), M7 schreibt selbst (mit Varianten); Radiosendung –
   M7 mit Gründen und Wetter; Plus für M7 (m7, für R7 freiwillig): eine Meinungsfrage zur Parade.
   LehrplanPLUS E7 1.2 Hörverstehen (Durchsage, Gespräch, Interview; Zahlen, Zeiten und Orte entnehmen, einem Weg folgen),
   E7 1.3 Sprechen/Schreiben (Ausflug planen, Meinung äußern), E7 3 (Ort vor Zeit, going to im Kontext), E7 5 (Alltag: Reisen, Feste).
   Texte: texte/u3/u3-lp1-announce-r.js, u3-lp1-announce-m.js (Announcer = Frau), u3-lp1-lost-r.js, u3-lp1-lost-m.js
   (Mr Hennessy = Mann, Keelin = Mädchen), u3-lp1-radio-r.js, u3-lp1-radio-m.js (Ms Fallon = Frau, Donal = Junge).
   Alle Personen, der Bahnhof Dunmore und die Sachangaben (Zeiten, Gleise) sind erfunden; Galway, Limerick und Kilkenny sind echte Orte.
   Förder-Link: Durchsagen mit Weg (Hörtext 1) → u3_x6.html (Extra: Hören – einem Weg folgen); das Fundbüro-Formular hat
   keinen, weil die Extra-Seite das Notieren von Einzelheiten nicht übt.
   Wörter der Unit bis Topic 2 (timetable, to change, journey, ticket, to leave, to arrive, stop, near, across, on the left/right,
   to take, map, to cost, key, to call, notice, to celebrate, shamrock, to be going to) kommen bewusst vor; neue Wörter: platform,
   delayed, replacement bus, lost property office, badge, parade (erklärt in der Vorentlastung und im Glossar).
   BILDER:
   1. Station „Dunmore“ (Vorentlastung/Hörauftrag): kleiner irischer Bahnhof am Morgen, Anzeigetafel mit „delayed“, Menschen mit
      Koffern auf dem Bahnsteig, vor dem Ausgang ein Ersatzbus neben einem Park.
   2. Station „Lost property“ (Hörauftrag): ein Mann hinter dem Tresen eines Fundbüros mit Regalen voller Taschen, ein Mädchen mit
      Handy in der Hand beschreibt etwas mit den Händen.
   3. Station „Parade“ (Sprechanlass): Straße voller Menschen in grünen Hüten, eine Schulband mit Trommeln, ein Mädchen mit Trommel
      lacht, am Rand schaut ein Junge mit grünem Hut zu. */
D7Kit.seite({
  id: "u3-listening1",
  titel: "Listening practice 1: Out and about in Ireland",
  einleitung: "You are in Ireland and you listen to <b>three texts</b>: announcements at a station, a talk at the lost property office and a radio interview about St Patrick's Day. Du übst, beim Hören das Wichtige zu finden: Zahlen, Zeiten, Orte, einen Weg und Gründe. Zu jedem Text liest du erst die Aufgaben, hörst dann zu und siehst am Ende den Text.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I know what to do before, during and after listening.", "🚆 I understand announcements at a station: numbers, times and a way.", "🧳 I fill in a form at the lost property office: what, where, when.", "📻 I understand a radio interview and plan a day out."],
  thema: "Unit 3 Welcome to Ireland, Listening practice 1: Hörtraining (Durchsagen, Fundbüro, Radiosendung)",
  quiz: { profi: "Listening pro" },
  glossar: {
    platform: ["platform", "Bahnsteig, Gleis: Das ist der Teil am Bahnhof, an dem der Zug hält und die Leute einsteigen."],
    delayed: ["delayed", "verspätet: Ein Zug ist delayed, wenn er später kommt als im Fahrplan (timetable). Das Hauptwort ist delay, die Verspätung."],
    replacement: ["replacement bus", "Ersatzbus: Das ist ein Bus, der fährt, wenn der Zug nicht fahren kann."],
    lostproperty: ["lost property office", "Fundbüro: Dort geben Leute Sachen ab, die sie gefunden haben, und fragen nach Sachen, die sie verloren haben."],
    badge: ["badge", "Anstecker: Das ist ein kleines rundes Schild, das man an einer Tasche oder Jacke trägt."],
    parade: ["parade", "Umzug: Viele Menschen gehen oder fahren in einem langen Zug durch die Straßen, oft mit Musik."],
    wfragen: ["W-questions", "W-Fragen: Why? What? Who? When? Where? Beim Hören suchst du genau diese Informationen."],
    notes: ["notes", "Notizen: Das sind kurze Stichwörter, keine ganzen Sätze. Du schreibst sie beim Hören auf."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready for Ireland", teile: [
      { art: "text", html: "<p class=\"lead\">Imagine you are in <b>Ireland</b> with your family. You are going to hear three texts: announcements at a <b>station</b>, a man at the <b>lost property office</b> and a <b>radio show</b>. <span class=\"de\">Du bist mit deiner Familie in Irland und hörst gleich drei Texte. Zuerst die neuen Wörter.</span></p><p>When you travel by train, which questions do you ask? <span class=\"de\">Überlege kurz: Was willst du am Bahnhof wissen – wann, welches Gleis, wo?</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du für die Texte.</span>",
        paare: [["platform", "Bahnsteig, Gleis"], ["delayed", "verspätet"], ["replacement bus", "Ersatzbus"], ["lost property office", "Fundbüro"]],
        hilfen: ["Am Bahnhof steht der Zug an einem platform.", "Ein Zug, der später kommt als im timetable, ist delayed."] }
    ] },
    { kurz: "Strategy", ober: "Listening skills", titel: "How do I listen well?", teile: [
      { art: "merke", nur: "R", kopf: "LISTENING SKILLS", html: "<p><b>1.</b> Lies zuerst die Fragen. Dann weißt du, worauf du achten musst.</p><p><b>2.</b> Beim <b>ersten Hören</b> hörst du den ganzen Text und fragst dich: Worum geht es?</p><p><b>3.</b> Beim <b>zweiten Hören</b> achtest du auf die Einzelheiten: <button class=\"term\" data-t=\"wfragen\">Why? What? Who? When? Where?</button> und schreibst <button class=\"term\" data-t=\"notes\">notes</button>.</p><p><b>4.</b> <b>Zahlen:</b> thir<u>teen</u>, four<u>teen</u>, fif<u>teen</u> (13–19) haben die Betonung hinten. <u>Thir</u>ty, <u>for</u>ty, <u>fif</u>ty (30–50) haben sie vorne. Hör genau hin!</p>" },
      { art: "merke", nur: "M", kopf: "LISTENING SKILLS", html: "<ul><li>Read the questions first. <span class=\"de\">Du weißt dann, worauf du achten musst.</span></li><li><b>First listening:</b> listen to the whole text and find the topic.</li><li><b>Second listening:</b> listen for the details (<button class=\"term\" data-t=\"wfragen\">Why? What? Who? When? Where?</button>) and write <button class=\"term\" data-t=\"notes\">notes</button>.</li><li><b>Numbers:</b> thir<u>teen</u>, four<u>teen</u>, fif<u>teen</u> are stressed at the end; <u>thir</u>ty, <u>for</u>ty, <u>fif</u>ty at the beginning. Write down times and numbers at once.</li></ul>" },
      { art: "mc", id: "strategie-mc", tag: "Choose", titel: "What helps?", lead: "Tick the best answer. <span class=\"de\">Wähle die beste Idee.</span>",
        fragen: [
          { q: "You hear a time or a number in an announcement. What is the best idea?", o: ["Write it down at once.", "Try to remember it until the end.", "Do not listen to it."], a: 0,
            e: "Zahlen und Uhrzeiten vergisst man schnell. Schreib sie sofort als Stichwort auf." },
          { q: "You want to answer the question “Where?”. What do you listen for?", o: ["a place", "a time", "a price"], a: 0,
            e: "Auf „Where?“ antwortet man mit einem Ort, zum Beispiel „on the bus“ oder „in front of the library“." }
        ] }
    ] },
    { kurz: "Listening 1", ober: "At the station", titel: "Delays at Dunmore", teile: [
      { art: "text", html: "<p class=\"lead\">You are at the small station of <b>Dunmore</b> in Ireland. You want to go to <b>Galway</b>. Then you hear announcements. <span class=\"de\">Du bist am kleinen Bahnhof von Dunmore und willst nach Galway. Dann kommen Durchsagen.</span></p><p>What could the announcements be about? <span class=\"de\">Überlege für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>" },
      { art: "text", html: "<p class=\"lead\"><b>Read the questions first, then listen.</b> Listen once for the topic, then again for the details. <span class=\"de\">Erst die Fragen lesen, dann hören. Beim ersten Hören willst du das Thema, beim zweiten die Zahlen. Das Wort <button class=\"term\" data-t=\"platform\">platform</button> bedeutet Gleis, <button class=\"term\" data-t=\"delayed\">delayed</button> verspätet und <button class=\"term\" data-t=\"replacement\">replacement bus</button> Ersatzbus.</span></p>" },
      { art: "mc", id: "t1-gist", tag: "The topic", titel: "Before you listen", lead: "Read the question. Then listen to the announcements below and tick the answer. <span class=\"de\">Beim ersten Hören nur das Wichtigste.</span>",
        fragen: [
          { q: "What are the announcements mostly about?", o: ["delays and changes at a station", "a school trip to the sea", "a new shop in the town"], a: 0,
            e: "Es geht um einen verspäteten Zug, ein Umsteigen und einen Ersatzbus – also um Verspätungen und Änderungen am Bahnhof." }
        ] },
      { art: "text", nur: "R", html: "<p class=\"lead\">This is the plan outside the main exit. <span class=\"de\">So sieht es vor dem Hauptausgang aus. Du brauchst den Plan für die letzte Aufgabe.</span></p><table class=\"tab\" style=\"border-collapse:collapse;width:100%\"><tr><th style=\"text-align:left;padding:4px 8px;border-bottom:1px solid #999\">Bus stop</th><th style=\"text-align:left;padding:4px 8px;border-bottom:1px solid #999\">Where is it? (from the main exit)</th></tr><tr><td style=\"padding:4px 8px\">Stop A</td><td style=\"padding:4px 8px\">on the left, next to the taxi stop</td></tr><tr><td style=\"padding:4px 8px\">Stop B</td><td style=\"padding:4px 8px\">straight on, past the café, near the park</td></tr><tr><td style=\"padding:4px 8px\">Stop C</td><td style=\"padding:4px 8px\">on the right, in front of the car park</td></tr></table>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u3-lp1-announce-r", M: "u3-lp1-announce-m" },
        foerder: { href: "u3_x6.html", text: "Extra: Hören – einem Weg folgen" },
        fragen: [
          { art: "luecke", id: "a-luecke", nur: "R", titel: "Numbers", lead: "Listen again and complete the sentences. <span class=\"de\">Hör noch einmal zu und ergänze die Zahlen. Zwei Wörter bleiben übrig.</span>",
            absaetze: [["The train to Galway is ", { g: "fifteen" }, " minutes late."], ["It leaves from platform ", { g: "four" }, "."], ["The train to Limerick leaves from platform ", { g: "two" }, "."]],
            extra: ["fifty", "forty"],
            hilfen: ["Es sind drei Zahlen: eine Verspätung in Minuten und zwei Gleise.", "Achte auf fifteen und fifty: Sie klingen ähnlich. Bei fifteen hörst du am Ende „teen“."] },
          { art: "formular", id: "a-luecke", nur: "M", titel: "Notes", lead: "Listen again and write short notes. <span class=\"de\">Schreibe die Zahl oder die Uhrzeit.</span>",
            kopf: "Notes: the announcements",
            felder: [
              { label: "How late is the Galway train? (minutes)", platz: "number", loesung: ["twenty", "20", "twenty minutes", "20 minutes", "about twenty", "about 20"] },
              { label: "Which platform does the Galway train leave from?", platz: "number", loesung: ["five", "5", "platform five", "platform 5"] },
              { label: "When does the replacement bus leave?", platz: "time", loesung: ["a quarter past ten", "quarter past ten", "at a quarter past ten", "at quarter past ten", "10.15", "10:15", "at 10.15", "at 10:15", "ten fifteen", "at ten fifteen", "quarter past 10", "a quarter past 10", "fifteen past ten", "10.15 am", "10:15 am", "at 10.15 am"] }
            ],
            hilfen: ["Hör auf die Zahlen: twenty, five und eine Uhrzeit mit „quarter“.", "Achte auf die Endung: twenty (20) endet auf „-ty“. Zahlen auf „-teen“ wie thirteen oder fifteen liegen zwischen 13 und 19."] },
          { art: "tf", id: "a-tf", nur: "R", titel: "True or false?", lead: "Listen and decide. <span class=\"de\">Richtig oder falsch? Hör gut zu.</span>",
            aussagen: [["There are no trains to Kilkenny today.", true], ["The train to Galway leaves on time.", false], ["Passengers for Limerick change trains here.", true]],
            hilfen: ["Lies jede Aussage und hör nur auf diese eine Information.", "Achte auf Wörter wie no, late und change."] },
          { art: "tf", id: "a-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
            aussagen: [["The train to Limerick is on time.", true], ["You need a new ticket for the replacement bus.", false]],
            hilfen: ["Achte auf valid und on time: Was sagt die Durchsage wirklich?"] },
          { art: "mc", id: "a-weg", nur: "R", titel: "The way", lead: "Look at the plan again and listen. Tick the right answer. <span class=\"de\">Folge dem Weg auf dem Plan.</span>",
            fragen: [{ q: "Which stop is for the replacement bus?", o: ["Stop B", "Stop A", "Stop C"], a: 0, e: "Die Durchsage sagt: „Go straight on. Walk past the café. The bus waits next to the park.“ Das passt zu Stop B." }],
            hilfen: ["Zuerst geradeaus, dann am Café vorbei, am Ende ist der Park.", "Schau auf die Wörter straight on, past und near the park im Plan."] },
          { art: "mc", id: "a-weg", nur: "M", titel: "The way", lead: "Follow the way in your head and tick the right answer.",
            fragen: [{ q: "Where does the replacement bus wait?", o: ["opposite the bike shop, after turning right at the park", "next to the taxi stop, on the left", "in front of the car park, behind the café"], a: 0, e: "Man geht aus dem Hauptausgang, biegt links ab, geht am Café vorbei und biegt am Park rechts ab. Der Bus wartet gegenüber vom Fahrradladen." }],
            hilfen: ["Sammle die Schritte: erst links, dann am Café vorbei, am Park rechts.", "Der Bus steht am Ende des Wegs, gegenüber (opposite) von einem Laden."] }
        ] }
    ] },
    { kurz: "Listening 2", ober: "Lost property", titel: "A lost rucksack", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at the lost property office</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-l1-fundbuero.jpg\" width=\"1280\" height=\"853\" alt=\"A man behind the counter of a lost property office with full shelves; a girl with a phone explains something with her hands.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where are the two? What can you see on the shelves? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Keelin goes to the <button class=\"term\" data-t=\"lostproperty\">lost property office</button> at Dunmore station. She has lost her <b>rucksack</b>. Mr Hennessy fills in a form. <span class=\"de\">Keelin hat ihren Rucksack verloren. Herr Hennessy füllt ein Formular aus.</span></p><p><b>Listen and fill in the form.</b> In the answers you often hear <b>where</b> first and <b>when</b> after that. <span class=\"de\">Hör zu und fülle das Formular aus. Erst kommt oft der Ort, dann die Zeit. Ein <button class=\"term\" data-t=\"badge\">badge</button> ist ein Anstecker.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: { R: "u3-lp1-lost-r", M: "u3-lp1-lost-m" },
        fragen: [
          { art: "formular", id: "l-form", nur: "R", titel: "The form", lead: "Listen and choose the right answers for the form. <span class=\"de\">Hör zu und wähle für jedes Feld die richtige Angabe.</span>",
            kopf: "Lost property form",
            felder: [
              { label: "What did she lose?", loesung: ["a blue rucksack"], wahl: ["a blue rucksack", "a blue jacket", "a yellow rucksack"] },
              { label: "Where did she lose it?", loesung: ["on the bus from Limerick"], wahl: ["on the bus from Limerick", "on the train from Limerick", "on the bus from Galway"] },
              { label: "When?", loesung: ["yesterday at four o'clock"], wahl: ["yesterday at four o'clock", "today at four o'clock", "yesterday at two o'clock"] },
              { label: "Phone number?", loesung: ["087 614 229"], wahl: ["087 614 229", "087 641 229", "087 614 292"] }
            ],
            hilfen: ["Hör auf vier Dinge: was, wo, wann und die Telefonnummer.", "Die Nummer wird Zahl für Zahl gesagt: zero eight seven, six one four, two two nine."] },
          { art: "formular", id: "l-form", nur: "M", titel: "The form", lead: "Listen and fill in the form with short notes. <span class=\"de\">Notiere zu jedem Feld ein bis fünf Wörter.</span>",
            kopf: "Lost property form",
            felder: [
              { label: "What did she lose?", platz: "colour and thing", loesung: ["dark blue rucksack", "a dark blue rucksack", "blue rucksack", "a blue rucksack", "rucksack", "a rucksack", "her rucksack", "her dark blue rucksack", "her blue rucksack", "dark blue backpack", "blue backpack", "a backpack", "backpack"] },
              { label: "Where did she lose it?", platz: "place", loesung: ["on the bus from Limerick", "bus from Limerick", "on the bus", "the bus from Limerick", "in the bus from Limerick", "on the Limerick bus", "on a bus from Limerick", "on the bus from limerick", "bus"] },
              { label: "When did she lose it?", platz: "day and time", loesung: ["yesterday at four o'clock", "yesterday, at four o'clock", "yesterday at four", "yesterday at about four o'clock", "yesterday, at about four o'clock", "yesterday at about 4 o'clock", "yesterday at 4 o'clock", "yesterday 4 o'clock", "yesterday at 4", "yesterday, four o'clock", "yesterday at four o'clock in the afternoon", "yesterday, at about four o'clock in the afternoon", "yesterday, at four o'clock in the afternoon", "yesterday afternoon at four o'clock", "yesterday four o'clock", "yesterday at 4 pm", "yesterday at four pm", "yesterday 4 pm", "yesterday at 4.00", "yesterday at 4:00", "yesterday afternoon"] },
              { label: "Phone number?", platz: "number", loesung: ["087 614 229", "087614229", "087-614-229", "0876 14229", "zero eight seven six one four two two nine", "zero eight seven, six one four, two two nine", "0 8 7 6 1 4 2 2 9", "087 6142 29", "087 61 42 29"] }
            ],
            hilfen: ["Eine Frage nach dem Ort kommt vor der Frage nach der Zeit. Das Mädchen sagt auch zuerst den Ort.", "Die Trinkflasche und der Anstecker gehören nicht ins Formular. Notiere bei der ersten Frage nur Farbe und Sache."] }
        ] }
    ] },
    { kurz: "Listening 3", ober: "St Patrick's Day", titel: "Donal on the radio", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a radio interview</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-l1-radio.jpg\" width=\"1280\" height=\"853\" alt=\"A woman and a boy with headphones talk at microphones in a small radio studio; green decorations on the street outside.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who are the two? What do you think they are talking about? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">On the radio, <b>Ms Fallon</b> talks to a boy called <b>Donal</b>. Tomorrow is <b>St Patrick's Day</b> in Ireland. <span class=\"de\">Im Radio spricht Frau Fallon mit Donal. Morgen ist in Irland St Patrick's Day, der Nationalfeiertag.</span></p><p>Listen for the <button class=\"term\" data-t=\"wfragen\">W-questions</button>: <b>Who? Why? What after the <button class=\"term\" data-t=\"parade\">parade</button>?</b> <span class=\"de\">Ein parade ist ein Umzug mit Musik. Lies die Fragen, bevor du hörst.</span></p>" },
      { art: "mc", id: "r-mc", nur: "R", titel: "The interview", lead: "Read the questions. Then listen to the interview below and tick the right answers. <span class=\"de\">Wer? Warum? Was danach?</span>",
        fragen: [
          { q: "Who plays the drum in the school band?", o: ["Donal's sister", "Donal", "Donal's grandad"], a: 0, e: "Donal sagt: „My sister plays the drum in the school band.“" },
          { q: "Why do many people wear green?", o: ["Green is the colour of Ireland and of the shamrock.", "Green is the colour of the school band.", "There is a rule in the town."], a: 0, e: "Donal sagt: Grün ist die Farbe von Irland und vom Kleeblatt (shamrock)." },
          { q: "What does Donal's family do after the parade?", o: ["They have lunch at home.", "They go to a café.", "They go to the cinema."], a: 0, e: "Die Familie geht nach Hause und isst zusammen zu Mittag; Opa kocht Suppe." }
        ],
        hilfen: ["Achte auf Wörter wie sister, green und after the parade.", "Nach der Parade geht die Familie an einen Ort – wohin?"] },
      { art: "mc", id: "r-mc", nur: "M", titel: "The interview", lead: "Read the questions. Then listen to the interview below and tick the right answers.",
        fragen: [
          { q: "Why is this year special for Donal?", o: ["His sister is going to play in the parade for the first time.", "He is going to play the drum himself.", "The parade is in a new town."], a: 0, e: "Donal sagt: „My sister is going to play the drum in the parade for the first time.“" },
          { q: "What will the weather be like?", o: ["It is going to rain in the afternoon, but the family has raincoats.", "It will be sunny all day.", "It is going to snow in the morning."], a: 0, e: "Die Wetter-App meldet Regen am Nachmittag; die Familie zieht Regenmäntel über die grüne Kleidung." },
          { q: "What does the family do after the parade?", o: ["They go to an aunt's house and sing.", "They go home and watch TV.", "They have a picnic in the park."], a: 0, e: "Die Familie geht zum Haus der Tante, es gibt Kuchen, der Opa spielt Geige, und alle singen." }
        ],
        hilfen: ["Achte auf going to: Was ist geplant? Was sagt die Wetter-App?"] },
      { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: { R: "u3-lp1-radio-r", M: "u3-lp1-radio-m" } },
      { art: "offen", id: "meinung", m7: true, tag: "Your words", titel: "What do you think?", lead: "Would you like to go to a parade like Donal's? Write <b>two sentences</b> and give a reason. <span class=\"de\">Sag, ob du gern zu so einem Umzug gehen würdest, und nenne einen Grund.</span>",
        tipp: "Use: Yes, I would. / No, I wouldn't. · I like … / I don't like … · because …",
        fragen: [{ q: "Would you like to go to a parade like Donal's? Say why.", m: "Yes, I would. I love music and dancing, so a parade is fun.", k: ["yes|no|would|wouldn't|would not|i'd|i like|i love|i don't|i do not|i hate|i think", "because|so|music|dancing|fun|boring|loud|crowd|friends|family|people|green|band|drum|rain|cold|like|love"], min: 2 }] }
    ] },
    { kurz: "Your turn", ober: "Plan a day out", titel: "Your message", teile: [
      { art: "merke", kopf: "PLAN A DAY OUT", html: "<p><b>Where first, then when:</b> <i>I am going to go to the park on Saturday at two o'clock.</i></p><p><b>Ask a friend:</b> <i>Do you want to come?</i> · <i>Would you like to come with me?</i></p>" },
      { art: "offen", id: "dein-ausflug", nur: "R", tag: "Your words", titel: "Your message", lead: "Write a short message to a friend. Say where you are going to go and when. <span class=\"de\">Schreib einer Freundin oder einem Freund, wohin du gehst und wann. Erst der Ort, dann die Zeit. Ein bis zwei Sätze genügen.</span>",
        tipp: "Begin: Hi! I am going to go to … on … at … o'clock.",
        fragen: [{ q: "Write a short message: say where you are going to go and when.", m: "Hi! I am going to go to the park on Saturday at two o'clock.", k: ["going to|'m going", "park|cinema|beach|town|lake|museum|pool|zoo|castle|city|cafe|café|football|match|shop|market|library|forest|mountain|river|sea|parade|station|swimming|bowling|skate", "saturday|sunday|friday|monday|tuesday|wednesday|thursday|tomorrow|tonight|today|afternoon|morning|evening|o'clock| pm| am|at 1|at 2|at 3|at 4|at 5|at 6|at 7|at 8|at 9|at 10|at 11|at 12"], min: 3 }],
        hilfen: ["Fang an mit: Hi! I am going to go to …", "Dann: … on Saturday at … o'clock.", "Beispiel für den Anfang: Hi! I am going to go to the park on …"] },
      { art: "offen", id: "dein-ausflug", nur: "M", tag: "Your words", titel: "Your message", lead: "Write a short message to a friend in two or three sentences. Say where you are going to go, when, and why. Ask your friend to come. <span class=\"de\">Sag, wohin du gehst, wann und warum, und lade jemanden ein. Erst der Ort, dann die Zeit.</span>",
        tipp: "Use: I am going to go to … on … at … o'clock because … · Do you want to come?",
        fragen: [{ q: "Write a short message: where you are going to go, when and why. Ask your friend to come.", m: "Hi! I am going to go to the lake on Saturday at ten o'clock because the weather will be nice. Do you want to come with me?", k: ["going to|'m going", "park|cinema|beach|town|lake|museum|pool|zoo|castle|city|cafe|café|football|match|shop|market|library|forest|mountain|river|sea|parade|station|swimming|bowling|skate", "saturday|sunday|friday|monday|tuesday|wednesday|thursday|tomorrow|tonight|today|afternoon|morning|evening|o'clock| pm| am|at 1|at 2|at 3|at 4|at 5|at 6|at 7|at 8|at 9|at 10|at 11|at 12", "do you want|would you like|can you come|come with|join|want to come|coming", "because|weather|fun|nice|great|good|love|like|sunny|friends"], min: 5 }] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Gap text", titel: "Place before time", lead: "Complete the sentence. <span class=\"de\">Ort vor Zeit: Zuerst sagst du, wo, dann, wann. Ein Wort bleibt übrig.</span>",
        absaetze: [["We are going to meet ", { g: "at the station" }, " ", { g: "at nine o'clock" }, "."]], extra: ["last night"] }
    ] }
  ],
  weiter: { text: "Well done! You know how to listen for the topic, for numbers and times, for a way and for Why, What, Who, When and Where. Keep practising with other listening texts." }
});
