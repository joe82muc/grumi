/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Listening practice 2: Out and about in Wales (Kürzel B21)
   (reines Hörtraining mit drei Hörtexten über Alltag und Freizeit in Nordwales: ein Radiointerview mit einem jungen
   Dudelsackspieler, ein Gespräch im Fahrradverleih und ein Radiotipp fürs Wochenende; am Schluss „Your turn“ mit going to)
   Buchprinzip (Unit 2, nur Aufbau, nichts übernommen): Hörformen der Unit – Radiointerview mit Multiple Choice (drei Optionen),
   Notizen zu W-Fragen, richtig/falsch, Lückensätze; vor jedem Hören erst die Aufgaben lesen (Hörauftrag). Besser: zusätzlich
   neue Formen – Aussagen den Sprechern zuordnen (wer sagt was?), Bild und Aussage zuordnen, Reihenfolge des Gehörten,
   Veranstaltungen Tag/Zeit/Ort zuordnen, „welche Veranstaltung passt zu wem“; Vorentlastung vor jedem Text, sofortige Rückmeldung,
   Hilfen in Stufen, Förder-Links an den Notizen.
   Differenzierung: Jeder Hörtext hat zwei Fassungen derselben Situation – R7 kürzer, zwei Sprecher bzw. ein Sprecher,
   Auswahl statt Notizen, deutsche Hilfen; M7 länger, mehr Einzelheiten (Bargeld, Streckentipp, Ausweichort bei Regen),
   beim Fahrradverleih ist der Vater dabei (spricht nicht), Notizen frei schreiben. Plus für M7 (m7): Gefühle und Folgerungen
   (Gareth: Stolz; Konzert bei Regen).
   Grammatik rezeptiv im Kontext: present perfect mit for/since (How long have you played? – For five years.), Have you ever …?,
   going to (Pläne, Wetter); am Schluss eine Lückenübung dazu.
   LehrplanPLUS E7 1.2 Hörverstehen (Interview, Dialog, Durchsage: Einzelheiten, Reihenfolge und Gefühle entnehmen, Notizen machen),
   E7 1.3 Sprechen/Schreiben (Pläne nennen), E7 3 (going to, present perfect), E7 5 (Wales: Alltag und Freizeit).
   Texte: texte/u2/u2-l2-gareth-r.js/-m.js (Bronwen = Frau, Gareth = Junge, 14), u2-l2-bikes-r.js/-m.js (Mrs Owens = Frau,
   Rhodri = Junge; in M7 ist sein Vater dabei, spricht aber nicht), u2-l2-weekend-r.js/-m.js (Huw = Mann). Alle Personen, Geschäfte, Sender und Orte außer
   Betws-y-Coed erfunden (Pontmawr, Traeth Glas, Caer Mawr, Green Door).
   Förder-Links: Hören mit W-Fragen → u2_x7.html (an den Notizen im Fahrradverleih und beim Radiotipp), going to →
   unit2/extra/going-to.html (an der Lückenübung).
   BILDER:
   1. Station „Warm-up“ (Vorentlastung): ein Junge in Karojacke spielt Dudelsack auf einer grünen Wiese, ein Mikrofon
      steht davor, im Hintergrund Berge.
   2. Station „Bike hire“ (Sprechanlass): Laden mit Fahrrädern, Helmen an der Wand; eine Frau mit Brille zeigt einem Jungen
      eine Karte, draußen ein Waldweg.
   3. Station „Weekend Tips“ (Sprechanlass): Dreiteiliges Bild – Marktstände, Konzert am Strand bei Abendlicht, Burg mit
      Kindern in Ritterkostümen. */
const L2 = (r, m) => ({ R: r, M: m });
D7Kit.seite({
  id: "u2-listening2",
  titel: "Listening practice 2 · Out and about in Wales",
  einleitung: "Three listening texts from North Wales: a <b>radio interview</b> with a young bagpipe player, a talk in a <b>bike shop</b> and a <b>weekend radio tip</b>. You listen, choose, sort, order and write notes – and at the end you decide what <b>you</b> are going to do. Du übst, beim Hören Einzelheiten zu finden: Zahlen, Tage, Orte und Gefühle.",
  zeit: "etwa 50 Minuten",
  ziele: ["🎧 I understand a radio interview and find who says what.", "🚲 I note prices, times and rules from a dialogue.", "📻 I match events to days, times and people.", "🗓️ I say what I am going to do at the weekend."],
  thema: "Unit 2 Fun in Wales and Scotland, Listening practice 2: Hörverstehen (Interview, Fahrradverleih, Radiotipp)",
  quiz: { profi: "Listening pro" },
  glossar: {
    bagpipes: ["bagpipes", "Dudelsack: Das ist ein lautes Musikinstrument, das man besonders aus Schottland kennt. Man bläst Luft in einen Sack."],
    hire: ["to hire", "mieten, ausleihen: Man bezahlt Geld und bekommt zum Beispiel ein Fahrrad für einige Stunden."],
    helmet: ["helmet", "Helm: Er schützt den Kopf beim Radfahren."],
    waterfall: ["waterfall", "Wasserfall: Ein Fluss fällt dort von einer hohen Stelle nach unten."],
    stall: ["stall", "Marktstand: An einem Stand verkauft jemand Obst, Kuchen oder andere Sachen."],
    knight: ["knight", "Ritter: Im Mittelalter lebten Ritter oft in Burgen."],
    crowd: ["crowd", "Menschenmenge: Das sind sehr viele Leute an einem Ort."],
    muddy: ["muddy", "matschig: Der Weg ist nass und voll Schlamm."],
    forsince: ["for / since", "for und since: Mit for sagst du, wie lange etwas dauert (for five years). Mit since sagst du, ab wann es so ist (since Monday). Hier musst du das nur verstehen, nicht selbst bilden."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready for North Wales", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a young musician</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-l2-dudelsack.jpg\" width=\"1280\" height=\"853\" alt=\"A boy in a check jacket plays the bagpipes on a green meadow, a microphone in front, mountains behind.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the boy doing? Do you like this music? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">You are going to hear <b>three</b> short texts. They all take place in <b>North Wales</b>: a radio show, a bike shop and a weekend tip. <span class=\"de\">Du hörst drei kurze Texte aus Nordwales. Du darfst jeden Text zweimal anhören.</span></p>" },
      { art: "merke", kopf: "LISTENING TIPS", html: "<ol><li><b>Read the tasks first.</b> <span class=\"de\">Erst lesen, was du finden musst.</span></li><li><b>First time:</b> What is the text about?</li><li><b>Second time:</b> Listen for the details – numbers, days, times, places.</li></ol><p>You do not have to understand every word. Zahlen und Wochentage sind oft die Lösung.</p>" },
      { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter hörst du gleich.</span>",
        paare: [["bagpipes", "Dudelsack"], ["to hire a bike", "ein Fahrrad mieten"], ["helmet", "Helm"], ["waterfall", "Wasserfall"], ["knight", "Ritter"], ["honey", "Honig"]],
        hilfen: ["Bei ein paar Wörtern hilft ein Bild im Kopf: Ein Ritter hat eine Rüstung.", "Ein Wasserfall hat mit Wasser zu tun."] },
      { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will hear these words.",
        paare: [["bagpipes", "Dudelsack"], ["to hire a bike", "ein Fahrrad mieten"], ["helmet", "Helm"], ["stall", "Marktstand"], ["crowd", "Menschenmenge"], ["muddy", "matschig"], ["knight", "Ritter"]],
        hilfen: ["Think of a market: What does a seller stand behind?"] }
    ] },
    { kurz: "Interview", ober: "Listening 1 · radio", titel: "Young Voices: a boy with bagpipes", teile: [
      { art: "text", html: "<p class=\"lead\">On the radio show <b>Young Voices</b>, the presenter <b>Bronwen</b> talks to <b>Gareth</b>. Gareth is fourteen and plays the <button class=\"term\" data-t=\"bagpipes\">bagpipes</button>. <b>Read the tasks below first, then listen.</b> <span class=\"de\">Erst die Aufgaben lesen, dann hören. Achte auf Zahlen und darauf, wer spricht: Bronwen oder Gareth.</span></p><p>Listen for: <b>How long? Who? What next?</b> – and for <button class=\"term\" data-t=\"forsince\">for / since</button>.</p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: L2("u2-l2-gareth-r", "u2-l2-gareth-m"),
        fragen: [
          { art: "sort", id: "gar-wer", nur: "R", tag: "Who says it?", titel: "Bronwen or Gareth?", lead: "Who says it? Put each sentence in the right box. <span class=\"de\">Wer sagt das – die Moderatorin oder Gareth?</span>",
            buckets: ["Bronwen (presenter)", "Gareth"],
            items: [{ t: "Welcome to Young Voices.", b: 0 }, { t: "How long have you played?", b: 0 }, { t: "Good luck, Gareth!", b: 0 }, { t: "Hello, Bronwen.", b: 1 }, { t: "Not yet.", b: 1 }, { t: "Thank you!", b: 1 }],
            hilfen: ["Die Moderatorin stellt Fragen. Gareth antwortet."] },
          { art: "sort", id: "gar-wer", nur: "M", tag: "Who says it?", titel: "Bronwen or Gareth?", lead: "Who says it? Put each sentence in the right box.",
            buckets: ["Bronwen (presenter)", "Gareth"],
            items: [{ t: "Why did you choose such a loud instrument?", b: 0 }, { t: "Was it easy?", b: 0 }, { t: "That sounds fantastic.", b: 0 }, { t: "I have played almost every day since then.", b: 1 }, { t: "I can't wait!", b: 1 }, { t: "I was really nervous.", b: 1 }],
            hilfen: ["The presenter asks questions and gives comments. The guest tells his story."] },
          { art: "tf", id: "gar-tf", nur: "R", titel: "Right or wrong?", lead: "Is it right or wrong? <span class=\"de\">Stimmt das? Hör genau zu.</span>",
            aussagen: [["At first, Gareth wanted to stop.", true], ["Gareth is fifteen years old.", false], ["Gareth has never played for a lot of people.", false], ["Gareth loves the bagpipes now.", true]] },
          { art: "tf", id: "gar-tf", nur: "M", titel: "Right or wrong?", lead: "Is it right or wrong?",
            aussagen: [["It took Gareth three months to play one tune.", true], ["Gareth's teacher told him to stop.", false], ["About one hundred people listened at his cousin's wedding.", true], ["Gareth has already played in Scotland.", false]] }
        ] },
          { art: "mc", id: "gar-mc", nur: "R", titel: "Choose the answers", lead: "Choose the right answer. <span class=\"de\">Wähle die richtige Antwort.</span>",
            fragen: [
              { q: "How long has Gareth played the bagpipes?", o: ["For five years.", "For nine years.", "For one year."], a: 0, e: "Gareth sagt: „For five years.“ Die Zahl nine nennt er, weil er mit neun Jahren angefangen hat." },
              { q: "Who showed Gareth the bagpipes?", o: ["His grandad.", "His teacher.", "His cousin."], a: 0, e: "Gareth sagt: „My grandad plays them. He showed me his pipes.“" },
              { q: "What is Gareth going to do in August?", o: ["Travel to Scotland and play with a band.", "Play at a school party.", "Stop playing the bagpipes."], a: 0, e: "Im August reist Gareth nach Schottland und spielt mit der Band seines Opas." }
            ] },
          { art: "mc", id: "gar-mc", nur: "M", titel: "Choose the answers", lead: "Choose the right answer.",
            fragen: [
              { q: "What did Gareth get for his ninth birthday?", o: ["His first practice pipes.", "A new school bag.", "A ticket to Scotland."], a: 0, e: "Zum neunten Geburtstag bekam Gareth seine ersten Übungs-Pfeifen (practice pipes)." },
              { q: "Why did Gareth want to try the bagpipes?", o: ["His grandad showed him his bagpipes.", "His teacher told him to.", "He heard a band on the radio."], a: 0, e: "Als der Opa ihm seinen Dudelsack zeigte, wollte Gareth ihn sofort ausprobieren." },
              { q: "What is Gareth going to do in August?", o: ["Play in a small village in Scotland with his grandad.", "Play at a wedding in Wales.", "Give lessons to young children."], a: 0, e: "Im August fährt Gareth mit seinem Opa nach Schottland und sie spielen in einem kleinen Dorf." }
            ] },
          { art: "mc", id: "gar-gefuehl", m7: true, nur: "R", tag: "Feelings", titel: "How does Gareth feel?", lead: "Choose the right answer. <span class=\"de\">Wie fühlt sich Gareth?</span>",
            fragen: [{ q: "How did Gareth feel at the school party?", o: ["Nervous, but also happy.", "Bored.", "Angry."], a: 0, e: "Gareth sagt: „I was nervous, but I was also happy.“" }] },
          { art: "mc", id: "gar-gefuehl", m7: true, nur: "M", tag: "Feelings", titel: "How does Gareth feel?", lead: "Choose the right answer.",
            fragen: [
              { q: "How did Gareth feel after he played at the wedding?", o: ["Proud.", "Sad.", "Bored."], a: 0, e: "Nach dem Auftritt fühlte er sich stolz: „Afterwards I felt proud.“" }
            ] }
    ] },
    { kurz: "Bike hire", ober: "Listening 2 · dialogue", titel: "Hiring bikes in Betws-y-Coed", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at a bike shop</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-l2-bike.jpg\" width=\"1280\" height=\"853\" alt=\"A shop with bikes and helmets; a woman with glasses shows a boy a map; a forest path outside.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What does the shop sell or hire out? What could the boy ask? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">In <b>Betws-y-Coed</b>, a small town in North Wales with forests and rivers, <b>Rhodri</b> wants to <button class=\"term\" data-t=\"hire\">hire</button> bikes. <b>Mrs Owens</b> works in the bike shop. <b>Read the tasks first, then listen.</b> <span class=\"de\">Rhodri möchte Fahrräder mieten. Du notierst Zahlen, Zeiten und den Streckentipp.</span></p><p>Listen for: <b>How many bikes? How much? When back? Which path?</b></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">In <b>Betws-y-Coed</b>, a small town in North Wales with forests and rivers, <b>Rhodri</b> and his <b>dad</b> want to <button class=\"term\" data-t=\"hire\">hire</button> bikes. <b>Mrs Owens</b> works in the bike shop. <b>Read the tasks first, then listen.</b></p><p>Listen for: <b>the bikes, the price, the return time, the route</b> – and for what you must not do.</p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: L2("u2-l2-bikes-r", "u2-l2-bikes-m"),
        fragen: [
          { art: "formular", id: "rad-notizen", nur: "R", foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" }, titel: "Your notes", lead: "Choose the right notes. <span class=\"de\">Wähle zu jeder Zeile die richtige Notiz.</span>",
            kopf: "Notes: bike hire",
            felder: [
              { label: "How many bikes?", loesung: ["two bikes"], wahl: ["two bikes", "three bikes", "one bike"] },
              { label: "How much for one bike for a day?", loesung: ["twelve pounds"], wahl: ["twelve pounds", "fifteen pounds", "two pounds"] },
              { label: "Bring the bikes back by …", loesung: ["five o'clock"], wahl: ["five o'clock", "half past five", "four o'clock"] },
              { label: "Which path?", loesung: ["along the river to a waterfall"], wahl: ["along the river to a waterfall", "up the hill to a castle", "through the town to the beach"] }
            ],
            hilfen: ["Zahlen hörst du am besten beim zweiten Mal.", "Der Laden schließt um halb sechs – aber die Räder müssen früher zurück."] },
          { art: "formular", id: "rad-notizen", nur: "M", foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" }, titel: "Your notes", lead: "Listen and write short notes. <span class=\"de\">Schreibe zu jeder Zeile eine kurze Notiz.</span>",
            kopf: "Notes: bike hire",
            felder: [
              { label: "Which bikes?", platz: "two words each", loesung: ["one adult bike and one child's bike", "one adult and one child's bike", "an adult bike and a child's bike", "one adult bike, one child's bike", "adult bike and child's bike", "one adult bike and one small bike", "an adult bike and a smaller bike", "one adult bike and one smaller bike", "adult and child", "one adult and one child", "a big bike and a small bike", "one adult bike and one child bike", "adult bike, child's bike"] },
              { label: "Price altogether", platz: "number + pounds", loesung: ["twenty-three pounds", "23 pounds", "£23", "23", "twenty three pounds", "23 pound", "twenty-three", "twenty three", "23 gbp", "23 £"] },
              { label: "Bring the bikes back by …", platz: "time", loesung: ["half past four", "4.30", "4:30", "4.30 pm", "4:30 pm", "16.30", "16:30", "half past 4", "four thirty", "4.30 o'clock", "half four", "at half past four", "by half past four"] },
              { label: "Route (where to?)", platz: "a place", loesung: ["the old railway bridge", "old railway bridge", "railway bridge", "to the old railway bridge", "the railway bridge", "to the railway bridge", "the forest path to the old railway bridge", "forest path to the old railway bridge", "the old bridge", "old bridge"] },
              { label: "Which path must you not take?", platz: "left or right", loesung: ["the left one", "left", "the path on the left", "path on the left", "the left path", "the one on the left", "on the left", "left path", "the left"] }
            ],
            hilfen: ["Listen for numbers and times. At the red gate you turn right."] },
          { art: "ordnen", id: "rad-reihe", nur: "R", tag: "Order", titel: "What does Mrs Owens say first?", lead: "Put the things in the order you hear them. <span class=\"de\">In welcher Reihenfolge erzählt Mrs Owens das?</span>",
            schritte: ["She says the price.", "She talks about helmets and the map.", "She gives a tip for a path.", "She says when to bring the bikes back.", "She tells Rhodri the rules."],
            hilfen: ["Zuerst geht es ums Geld.", "Die Regeln kommen ganz zum Schluss."] },
          { art: "ordnen", id: "rad-reihe", nur: "M", tag: "Order", titel: "What does Mrs Owens say first?", lead: "Put the things in the order you hear them.",
            schritte: ["She says the price of the bikes.", "She says that only cash is possible.", "She talks about helmets and the map.", "She recommends a path.", "She says when to bring the bikes back.", "She tells them the rules."],
            hilfen: ["The price comes first. The rules come last."] },
          { art: "tf", id: "rad-tf", nur: "R", titel: "Right or wrong?", lead: "Is it right or wrong? <span class=\"de\">Stimmt das?</span>",
            aussagen: [["Rhodri wants to hire bikes for one hour.", false], ["The path along the river is flat and easy.", true], ["The path takes about three hours.", false], ["Rhodri may ride in the river.", false]] },
          { art: "tf", id: "rad-tf", nur: "M", titel: "Right or wrong?", lead: "Is it right or wrong?",
            aussagen: [["Rhodri's dad can pay by card.", false], ["The map is free.", false], ["On Sundays the shop closes at five o'clock.", true], ["Walkers must give way to cyclists.", false], ["The ride takes about two hours with a picnic.", true]] },
          { art: "paare", id: "rad-bild", nur: "R", tag: "Picture and sentence", titel: "Which sentence fits?", lead: "Match the picture and the sentence you hear. <span class=\"de\">Welche Aussage passt zum Bild?</span>",
            paare: [["⛑️", "You must wear it. It is free."], ["🗺️", "Mrs Owens gives it to Rhodri."], ["🔒", "Use it when you stop."], ["🌊", "Do not ride your bike in it."]] },
          { art: "paare", id: "rad-bild", nur: "M", tag: "Picture and sentence", titel: "Which sentence fits?", lead: "Match the picture and the sentence you hear.",
            paare: [["⛑️", "Everybody has to wear it."], ["🗺️", "It costs one pound fifty."], ["🚪", "Close it behind you."], ["🗑️", "Take it home with you."]] }
        ] }
    ] },
    { kurz: "Weekend tips", ober: "Listening 3 · radio", titel: "Weekend Tips on Valley Radio", teile: [
      { art: "text", html: "<p class=\"lead\">On <b>Valley Radio</b>, the presenter <b>Huw</b> gives three tips for the weekend. <b>Read the tasks first, then listen.</b> <span class=\"de\">Huw nennt drei Veranstaltungen. Du suchst Tag, Zeit und Einzelheiten. Es spricht nur eine Person.</span></p><p>Listen for: <b>What? When? Where?</b> – and for the weather.</p>" },
      { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: L2("u2-l2-weekend-r", "u2-l2-weekend-m"),
        foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" },
        fragen: [
          { art: "paare", id: "wo-wann", nur: "R", titel: "When is it?", lead: "Match the event and the day and time. <span class=\"de\">Wann findet jede Veranstaltung statt?</span>",
            paare: [["The market in Pontmawr", "Saturday morning, nine o'clock"], ["The concert at Traeth Glas", "Saturday evening, seven o'clock"], ["Castle day at Caer Mawr", "Sunday, ten o'clock"]],
            hilfen: ["Zwei Veranstaltungen sind am Samstag, eine am Sonntag."] },
          { art: "paare", id: "wo-wann", nur: "M", titel: "When is it?", lead: "Match the event and the day and time.",
            paare: [["The market in Pontmawr", "Saturday morning, nine to one"], ["The concert at Traeth Glas", "Saturday evening, seven o'clock"], ["Castle day at Caer Mawr", "Sunday, ten to four"]] },
          { art: "sort", id: "wo-details", nur: "R", tag: "Details", titel: "Which event?", lead: "Put the details in the right box. <span class=\"de\">Zu welcher Veranstaltung gehört das?</span>",
            buckets: ["Market", "Concert", "Castle day"],
            items: [{ t: "honey", b: 0 }, { t: "cakes", b: 0 }, { t: "a young band", b: 1 }, { t: "on the beach", b: 1 }, { t: "bring a warm jacket", b: 1 }, { t: "dress up as knights", b: 2 }, { t: "adults pay six pounds", b: 2 }] },
          { art: "sort", id: "wo-details", nur: "M", tag: "Details", titel: "Which event?", lead: "Put the details in the right box.",
            buckets: ["Market", "Concert", "Castle day"],
            items: [{ t: "fruit and cakes", b: 0 }, { t: "about forty stalls", b: 0 }, { t: "a band called Green Door", b: 1 }, { t: "on the beach", b: 1 }, { t: "workshops at eleven and two", b: 2 }, { t: "last visitors at three o'clock", b: 2 }, { t: "children under twelve are free", b: 2 }] }
        ] },
          { art: "mc", id: "wo-wer", nur: "R", tag: "Which event for whom?", titel: "Who goes where?", lead: "Choose the best event for each person. <span class=\"de\">Welche Veranstaltung passt zu wem?</span>",
            fragen: [
              { q: "Ava loves music and likes to be outside in the evening.", o: ["The concert", "The market", "Castle day"], a: 0, e: "Das Konzert ist am Samstagabend am Strand, also draußen und mit Musik." },
              { q: "Leon is nine. He likes history and dressing up.", o: ["Castle day", "The market", "The concert"], a: 0, e: "Am Burgtag dürfen sich Kinder als Ritter verkleiden. Für Kinder ist der Eintritt frei." },
              { q: "Mrs Pugh wants to buy fruit.", o: ["The market", "The concert", "Castle day"], a: 0, e: "Auf dem Markt gibt es Obst, Kuchen und Honig." }
            ] },
          { art: "mc", id: "wo-wer", nur: "M", tag: "Which event for whom?", titel: "Who goes where?", lead: "Choose the best answer for each person.",
            fragen: [
              { q: "Iris plays the guitar and wants to hear a local band on Saturday evening. She does not want to pay.", o: ["The concert at Traeth Glas", "The market in Pontmawr", "Castle day at Caer Mawr"], a: 0, e: "Das Konzert ist am Samstagabend und kostet nichts. Dort spielt eine Band aus der Gegend." },
              { q: "Tegan is eleven and likes history. Her mum wants to go on Sunday morning.", o: ["Castle day at Caer Mawr", "The market in Pontmawr", "The concert at Traeth Glas"], a: 0, e: "Der Burgtag ist am Sonntag ab zehn Uhr. Tegan ist unter zwölf, deshalb zahlt sie nichts." },
              { q: "Mr Ellis wants to buy cheese and honey on Saturday morning. What must he remember?", o: ["He must bring his own bag.", "He must buy a ticket.", "He must book a workshop."], a: 0, e: "Auf dem Markt gibt es keine Plastiktüten. Man bringt eine eigene Tasche mit." }
            ] },
          { art: "mc", id: "wo-regen", m7: true, nur: "M", tag: "Think about it", titel: "What if it rains?", lead: "Choose the right answer.",
            fragen: [{ q: "It is Saturday evening, and it is raining. What is going to happen to the concert?", o: ["It is going to move to the sports hall.", "It is going to be cancelled.", "It is going to start later."], a: 0, e: "Bei Regen verlegen sie das Konzert in die Sporthalle neben dem Strand." }] }
    ] },
    { kurz: "Your turn", ober: "Speaking and writing", titel: "What are you going to do?", teile: [
      { art: "merke", kopf: "GOING TO", html: "<p>Du sagst, was du vorhast: <b>I am going to + Verb</b>.</p><p><i>I am going to visit the castle. – We are going to play music.</i></p><p>Fragen über Erlebtes beginnen oft mit <b>Have you ever …?</b></p>" },
      { art: "offen", id: "dein-plan", nur: "R", tag: "Your words", titel: "Which event would you visit?", lead: "Which event are you going to visit? Write <b>two sentences</b> with <b>going to</b>. <span class=\"de\">Wähle das Konzert, den Markt oder den Burgtag und schreibe zwei Sätze.</span>",
        fragen: [{ q: "Which event are you going to visit? Write two sentences.", m: "I am going to visit the castle on Sunday. I am going to dress up as a knight.", k: ["going to", "market|concert|castle|beach|band|knight|honey|cakes|fruit", "saturday|sunday|morning|evening|afternoon"], min: 2 }],
        tipp: "Start like this: I am going to visit … on Saturday / on Sunday. I am going to …",
        hilfen: ["Wähle eine Veranstaltung.", "I am going to visit the … on …", "I am going to visit the market on Saturday. I am going to buy honey."] },
      { art: "offen", id: "dein-plan", nur: "M", tag: "Your words", titel: "Which event would you visit?", lead: "Which event are you going to visit, and why? Write <b>two or three sentences</b> with <b>going to</b> and <b>because</b>.",
        fragen: [{ q: "Which event are you going to visit, and why? Write two or three sentences.", m: "I am going to go to the concert on Saturday evening because I love music. I am going to take a warm jacket.", k: ["going to", "market|concert|castle|beach|band|knight|honey|cakes|fruit", "because", "saturday|sunday|morning|evening|afternoon"], min: 3 }],
        tipp: "Say which event, when it is and why: I am going to … because I like … / I love …" }
    ] },
    { kurz: "Kurz sichern", ober: "Check", titel: "Quick check", teile: [
      { art: "luecke", id: "sichern-luecke", tag: "Grammar in context", titel: "going to and have you ever", lead: "Complete the sentences about the three texts. <span class=\"de\">Setze die richtige Form ein. Zwei Formen bleiben übrig.</span>",
        foerder: { href: "unit2/extra/going-to.html", text: "Extra: going to" },
        absaetze: [
          ["Gareth ", { g: "is going to travel" }, " to Scotland in August."],
          ["", { g: "Have" }, " you ever played the bagpipes in Scotland, Gareth? – No, I ", { g: "haven't" }, "."],
          ["On Sunday it ", { g: "is going to rain" }, " in the afternoon."]
        ], extra: ["are going to travel", "hasn't"] },
      { art: "tf", id: "sichern-tf", tag: "Check", titel: "Right or wrong?", lead: "Think about all three texts. <span class=\"de\">Denke an alle drei Texte.</span>",
        aussagen: [["The bike shop is in Betws-y-Coed.", true], ["Huw talks about three events.", true], ["Gareth has played the bagpipes for nine years.", false], ["All three texts are about Scotland.", false]] }
    ] }
  ],
  weiter: { text: "Du kannst jetzt Hörtexte mit Zahlen, Zeiten und Gefühlen verstehen. Hör dir die Texte bei Bedarf noch einmal an." }
});
