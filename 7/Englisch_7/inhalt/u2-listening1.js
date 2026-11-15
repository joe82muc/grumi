/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Listening practice 1: Out and about in Scotland (Kürzel B20)
   (reines Hörtraining mit drei Hörtexten: Auskunft in der Touristeninformation in Fort William, Durchsage auf der Fähre nach Mull,
   Sprachnachricht einer Freundin – erst die Hörstrategien, dann je Text Vorentlastung, Hörauftrag, Aufgaben, Transkript)
   Buchprinzip (Hörformen der Unit, nur Aufbau, nichts übernommen): Multiple Choice mit drei Optionen; Notizen zu Why/What/Who/
   When/Where mit dem Kasten „Listening skills“ (erst ganz hören und das Thema erfassen, beim zweiten Hören Notizen ergänzen);
   richtig/falsch; Lückensätze mit Zahlen und Uhrzeiten. Besser: Fragen vor dem Hören, drei verschiedene Hörsituationen mit
   eigenen Stimmen (Mann, Mädchen, Frau), Hilfen in Stufen (R7 mit Auswahl statt Freitext, M7 mit Notizen in eigenen Worten und
   Varianten), Förder-Link zum Hören mit W-Fragen, am Ende selbst antworten (Antwort-Nachricht).
   Differenzierung: Texte als zwei eigene Fassungen (R7 93–124 Wörter, M7 164–219 Wörter, mit zusätzlichen Einzelheiten und
   Gründen); Notizen – R7 wählt aus (Diff-corner-Prinzip), M7 schreibt selbst; Durchsage – R7 Lückensätze mit Wortspeicher, M7
   Lücken ohne Wortspeicher zum Selbstschreiben; Plus für M7 (m7, für R7 freiwillig): eine eigene Frage an Mr Grant, ein neuer
   Plan für Abbie.
   LehrplanPLUS E7 1.2 Hörverstehen (Auskunft, Durchsage, Sprachnachricht; Einzelheiten und Zahlen entnehmen, Notizen machen),
   E7 1.3 Sprechen/Schreiben (auf eine Nachricht antworten), E7 3 (present perfect: already/yet, going to im Kontext),
   E7 5 (Alltag: Ausflug, Reisen, Verabredung).
   Texte: texte/u2/u2-lp1-info-r.js, u2-lp1-info-m.js (Zara = Mädchen, Mr Grant = Mann), u2-lp1-ferry-r.js, u2-lp1-ferry-m.js
   (Captain Brodie = Frau), u2-lp1-abbie-r.js, u2-lp1-abbie-m.js (Abbie = Mädchen; Mairi und Lewis werden nur genannt).
   Alle Personen, das Schiff „Island Star“ und die Sachangaben (Zeiten, Preise) sind erfunden.
   Förder-Links: Hören mit W-Fragen → u2_x7.html (Text 1: Fragen und Hörtext, Text 3: Notizen).
   Wörter der Unit bis Topic 2 (already, yet, never, ever, just, been, to book, to pack, adventure, tired, great, to decide,
   to be going to, See you later, to find out, another, left, over) kommen bewusst vor; neue Wörter: ferry, pier, deck, seal,
   dolphin, loch (erklärt in der Vorentlastung und im Glossar).
   BILDER:
   1. Station „Fort William“ (Vorentlastung/Hörauftrag): Mr Grant steht hinter dem Tresen einer kleinen Touristeninformation,
      an der Wand eine Karte mit einem See und Bergen, auf dem Tresen Prospekte; ein Mädchen mit Rucksack fragt ihn etwas.
   2. Station „Ferry“ (Hörauftrag): Blick über die Reling einer kleinen Fähre auf blaues Wasser, in der Ferne eine Insel; im
      Wasser schauen zwei Robbenköpfe heraus, an der Reling stehen Kinder mit Fernglas.
   3. Station „Abbie“ (Sprechanlass): ein Mädchen sitzt auf einer Mauer, spricht in ihr Handy, neben ihr lehnt ein Fahrrad mit
      einem Picknickkorb am Gepäckträger. */
D7Kit.seite({
  id: "u2-listening1",
  titel: "Listening practice 1: Out and about in Scotland",
  einleitung: "You are on holiday in Scotland and you listen to <b>three short texts</b>: a talk at the tourist information centre, an announcement on a ferry and a voice message from a friend. Du übst, beim Hören das Wichtige zu finden: das Thema, Zeiten, Preise, Orte und Gründe. Zu jedem Text liest du erst die Aufgaben, hörst dann zu und siehst am Ende den Text.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I know what to do before, during and after listening.", "🎫 I understand a talk at the tourist information centre: times, prices, things to take.", "🚢 I understand an announcement and catch numbers and times.", "📝 I make notes about Why, What, Who, When and Where and answer a message."],
  thema: "Unit 2 Fun in Wales and Scotland, Listening practice 1: Hörtraining (Auskunft, Durchsage, Sprachnachricht)",
  quiz: { profi: "Listening pro" },
  glossar: {
    ferry: ["ferry", "Fähre: Das ist ein Schiff, das Menschen und Autos über das Wasser bringt."],
    pier: ["pier", "Anleger: Das ist eine Brücke ins Wasser, an der Boote anlegen und abfahren."],
    deck: ["deck", "Deck: Das ist eine Etage auf einem Schiff, zum Beispiel das Autodeck oder das Deck mit dem Café."],
    seal: ["seal", "Robbe: Das ist ein Tier, das im Meer schwimmt und oft auf Steinen in der Sonne liegt."],
    dolphin: ["dolphin", "Delfin: Das ist ein kluges Tier, das im Meer lebt und gern aus dem Wasser springt."],
    loch: ["loch", "Loch: So heißt in Schottland ein See oder ein langer Meeresarm. Das ch spricht man wie in „Bach“."],
    wfragen: ["W-questions", "W-Fragen: Why? What? Who? When? Where? Beim Hören suchst du genau diese Informationen."],
    notes: ["notes", "Notizen: Das sind kurze Stichwörter, keine ganzen Sätze. Du schreibst sie beim Hören auf."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready for Scotland", teile: [
      { art: "text", html: "<p class=\"lead\">Imagine you are in <b>Scotland</b> with your school group. You are going to hear three texts: a woman who works on a <button class=\"term\" data-t=\"ferry\">ferry</button>, a man at a tourist information centre and a girl on the phone. <span class=\"de\">Du bist mit deiner Klasse in Schottland und hörst gleich drei Texte. Zuerst die neuen Wörter.</span></p><p>When you travel, which questions do you ask? <span class=\"de\">Überlege kurz: Was willst du auf einer Reise wissen – wann, wo, wie viel?</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du für die Texte.</span>",
        paare: [["ferry", "Fähre"], ["pier", "Anleger"], ["deck", "Deck (Etage auf dem Schiff)"], ["seal", "Robbe"], ["dolphin", "Delfin"], ["loch", "See (in Schottland)"]],
        hilfen: ["Ein Tier im Meer hat graues Fell und liegt gern auf Steinen.", "Ein ferry fährt mit Autos über das Wasser."] }
    ] },
    { kurz: "Strategy", ober: "Listening skills", titel: "How do I listen well?", teile: [
      { art: "merke", nur: "R", kopf: "LISTENING SKILLS", html: "<p><b>1.</b> Lies zuerst die Fragen. Dann weißt du, worauf du achten musst.</p><p><b>2.</b> Beim <b>ersten Hören</b> hörst du den ganzen Text und fragst dich: Worum geht es?</p><p><b>3.</b> Beim <b>zweiten Hören</b> machst du <button class=\"term\" data-t=\"notes\">notes</button> zu <button class=\"term\" data-t=\"wfragen\">Why? What? Who? When? Where?</button> und ergänzt die Einzelheiten.</p><p><b>4.</b> Vergleiche am Schluss mit einem Partner oder lies den Text zum Nachlesen.</p>" },
      { art: "merke", nur: "M", kopf: "LISTENING SKILLS", html: "<ul><li>Read the questions first. <span class=\"de\">Du weißt dann, worauf du achten musst.</span></li><li><b>First listening:</b> listen to the whole text and find the topic.</li><li><b>Second listening:</b> make <button class=\"term\" data-t=\"notes\">notes</button> about <button class=\"term\" data-t=\"wfragen\">Why? What? Who? When? Where?</button> and add the details.</li><li>Compare your notes with a partner or read the text at the end.</li></ul>" },
      { art: "tf", id: "strategie-tf", tag: "True or false?", titel: "Good listeners …", lead: "True or false? <span class=\"de\">Richtig oder falsch? Was machen gute Zuhörer?</span>",
        aussagen: [["You have to understand every single word.", false], ["Write down numbers and times while you listen.", true], ["Only the last sentence of a text is important.", false], ["Short notes are better than whole sentences.", true], ["In an announcement you often hear numbers and times.", true]],
        hilfen: ["Denk an die Merkbox: Du suchst bestimmte Informationen, nicht jedes Wort.", "Notizen sind kurz: Stichwörter, Zahlen, Uhrzeiten."] },
      { art: "mc", id: "strategie-mc", tag: "Choose", titel: "What helps?", lead: "Tick the best answer. <span class=\"de\">Wähle die beste Idee.</span>",
        fragen: [
          { q: "You do not know one word in the text. What is the best idea?", o: ["Keep listening and look for the main idea.", "Stop the recording and wait.", "Give up and do not answer the questions."], a: 0,
            e: "Ein unbekanntes Wort ist kein Problem. Du brauchst nur die Antworten auf die Fragen, nicht jedes Wort." },
          { q: "You want to answer the question “When?”. What do you listen for?", o: ["a time or a day", "a name", "a colour"], a: 0,
            e: "Auf „When?“ antwortet man mit einer Zeit oder einem Tag, zum Beispiel „on Saturday“ oder „at ten o'clock“." }
        ] }
    ] },
    { kurz: "Listening 1", ober: "Tourist information", titel: "A trip from Fort William", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at a tourist information</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-l1-info.jpg\" width=\"1280\" height=\"853\" alt=\"A man behind the counter of a small tourist information; a map with a lake and mountains; a girl with a backpack asks him something.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where are these people? What could the girl ask? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Zara is on a school trip in <b>Fort William</b>, a town in the Scottish Highlands. She talks to <b>Mr Grant</b> at the tourist information centre. <span class=\"de\">Zara ist mit ihrer Klasse in Fort William. Sie spricht mit Herrn Grant in der Touristeninformation.</span></p><p><b>Read the questions first, then listen.</b> Listen once for the topic, then again for the details. <span class=\"de\">Erst die Fragen lesen, dann hören. Beim ersten Hören willst du das Thema, beim zweiten die Einzelheiten. Das Wort <button class=\"term\" data-t=\"loch\">loch</button> bedeutet See.</span></p>" },
      { art: "mc", id: "t1-gist", foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" }, tag: "The topic", titel: "Before you listen", lead: "Read the questions. Then listen to the talk below and tick the answers. <span class=\"de\">Beim ersten Hören nur das Wichtigste.</span>",
        fragen: [
          { q: "What does Zara want to find out?", o: ["what her group can do tomorrow", "where she can buy a rain jacket", "how to get to the station"], a: 0,
            e: "Zara fragt, ob es für ihre Gruppe morgen einen Ausflug gibt." },
          { q: "How does the talk end?", o: ["Zara is happy and says thank you.", "Zara is angry and leaves.", "Mr Grant can't help Zara."], a: 0,
            e: "Am Ende bedankt sich Zara bei Mr Grant – der Ausflug passt für ihre Gruppe." }
        ] },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u2-lp1-info-r", M: "u2-lp1-info-m" },
        foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" },
        fragen: [
          { art: "mc", id: "t1-details", nur: "R", titel: "The details", lead: "Listen again and tick the right answers. <span class=\"de\">Hör noch einmal zu: Zeit, Preis, Kleidung, Wetter.</span>",
            fragen: [
              { q: "When does the boat leave?", o: ["at half past ten", "at ten o'clock", "at half past eleven"], a: 0, e: "Mr Grant sagt: „At half past ten.“" },
              { q: "How much is a ticket for students?", o: ["eight pounds", "eighteen pounds", "eighty pounds"], a: 0, e: "Ein Schülerticket kostet eight pounds, also 8 Pfund. Achte auf eight, eighteen und eighty." },
              { q: "What should the group take?", o: ["warm clothes and a rain jacket", "sandwiches and a map", "swimming clothes and a towel"], a: 0, e: "Mr Grant sagt: „Take warm clothes and a rain jacket.“ Auf dem Wasser kann es kalt sein." },
              { q: "What will the weather be like tomorrow?", o: ["cloudy, but dry", "sunny and hot", "rainy and windy"], a: 0, e: "Das Wetter wird bewölkt, aber trocken: „cloudy, but dry“." }
            ],
            hilfen: ["Höre auf die Uhrzeit, die Zahl, die Kleidung und das Wetter.", "Hör genau auf die Zahlen: eight, eighteen und eighty klingen ähnlich."] },
          { art: "mc", id: "t1-details", nur: "M", titel: "The details", lead: "Listen again and tick the right answers. <span class=\"de\">Hör noch einmal zu: Grund, Abfahrtsort, Mittagessen.</span>",
            fragen: [
              { q: "Why does Zara choose the boat trip and not the walk?", o: ["Her group is tired after the long journey.", "The walk costs too much.", "Her group does not like waterfalls."], a: 0, e: "Zara sagt: „My group is a bit tired after the long journey.“ Die Wanderung dauert etwa vier Stunden." },
              { q: "Where does the boat leave from?", o: ["from the pier next to the station", "from the harbour near the school", "from the castle"], a: 0, e: "Das Boot fährt am Anleger neben dem Bahnhof ab." },
              { q: "What does Mr Grant say about lunch?", o: ["You can buy it on the boat.", "You must bring your own sandwiches.", "There is no lunch on the trip."], a: 0, e: "Mr Grant sagt: Man kann auf dem Boot Mittagessen kaufen, deshalb muss man keine Sandwiches einpacken." }
            ],
            hilfen: ["Achte auf die Gründe: Wer ist müde? Wie lang dauert die Wanderung?"] },
          { art: "formular", id: "t1-notizen", nur: "M", titel: "Your notes", lead: "Listen again and write short notes. <span class=\"de\">Notiere zu jeder Frage ein bis vier Wörter.</span>",
            kopf: "Notes: the tourist information",
            felder: [
              { label: "What kind of trip?", platz: "two words", loesung: ["boat trip", "a boat trip", "boat", "trip on the loch", "boat trip on the loch", "a boat trip on the loch", "boat tour", "boat ride"] },
              { label: "When does it leave?", platz: "time", loesung: ["quarter past ten", "a quarter past ten", "at a quarter past ten", "at quarter past ten", "10.15", "10:15", "at 10.15", "at 10:15", "ten fifteen", "at ten fifteen", "quarter past 10", "a quarter past 10", "10.15 am", "10:15 am", "at 10.15 am", "fifteen past ten"] },
              { label: "Price for students?", platz: "number", loesung: ["seven pounds fifty", "7.50", "£7.50", "7,50", "7 pounds 50", "seven fifty", "seven pounds and fifty pence", "7.50 pounds", "£7,50", "seven pound fifty", "7 pound 50", "seven pounds 50", "7.50 £"] },
              { label: "What should they bring? (one thing)", platz: "one thing", loesung: ["waterproof jacket", "a waterproof jacket", "jacket", "a jacket", "hat", "a hat", "waterproof jacket and hat", "a waterproof jacket and a hat", "waterproof jacket and a hat", "a waterproof jacket and hat", "jacket and hat", "hat and jacket", "hat and waterproof jacket", "a hat and a waterproof jacket", "waterproof jacket, hat", "hat, waterproof jacket"] },
              { label: "Weather in the afternoon?", platz: "one or two words", loesung: ["rain", "rainy", "it will rain", "raining", "it is going to rain", "it's going to rain", "wet", "rain in the afternoon", "it will be rainy", "it is going to be rainy", "it's going to be rainy", "it will be wet"] }
            ] }
        ] },
      { art: "offen", id: "frage-plus", m7: true, tag: "Your words", titel: "One more question", lead: "Write <b>one more question</b> that Zara could ask Mr Grant. <span class=\"de\">Zum Beispiel über die Dauer, die Kosten oder das Essen.</span>",
        tipp: "Begin with a question word: How …? What …? Where …? When …? Or with Is there …? / Can we …?",
        fragen: [{ q: "Write one more question for Mr Grant.", m: "How long does the boat trip take?", k: ["how|what|where|when|can|could|is there|do you|does|are there|will", "trip|boat|walk|take|long|cost|toilet|lunch|food|time|leave|ticket|group|price|pier|dog|safe|seat|café|cafe|bring|wear"], min: 2 }] }
    ] },
    { kurz: "Listening 2", ober: "On the ferry", titel: "Welcome on board", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>on a ferry</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-l1-faehre.jpg\" width=\"1280\" height=\"853\" alt=\"View over the rail of a small ferry onto blue water, an island far away, two seals in the water, children with binoculars.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see from the ferry? What are the children doing? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">You are on the <b>ferry</b> to the island of <b>Mull</b>. The <b>captain</b> makes an announcement. <span class=\"de\">Du bist auf der Fähre zur Insel Mull. Die Kapitänin macht eine Durchsage. Lies zuerst die Aussagen, dann hör zu.</span></p><p>In an announcement you hear many <b>numbers and times</b>. Write them down quickly. <span class=\"de\">Zahlen und Uhrzeiten schreibst du am besten sofort auf.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2",  hoertext: { R: "u2-lp1-ferry-r", M: "u2-lp1-ferry-m" },
        fragen: [
          { art: "tf", id: "f-tf", nur: "R", titel: "True or false?", lead: "Listen and decide. <span class=\"de\">Richtig oder falsch? Hör gut zu.</span>",
            aussagen: [["You can buy hot drinks in the café.", true], ["You can sometimes see seals and dolphins on the left side.", true], ["Drivers can go to the car deck during the trip.", false], ["Children can walk around alone.", false], ["The life jackets are under the seats.", true]],
            hilfen: ["Lies jede Aussage und hör nur auf diese eine Information.", "Achte auf Wörter wie sometimes, do not und must."] },
          { art: "tf", id: "f-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
            aussagen: [["The café sells cold drinks as well as hot drinks.", true], ["You will always see dolphins from the ferry.", false], ["Drivers can stay on the car deck during the trip.", false], ["Passengers without a car leave the ferry by the stairs at the front.", true], ["Children can go near the railings alone.", false], ["Passengers put on life jackets when they hear the alarm.", true]],
            hilfen: ["Achte auf always, often, with luck: Was verspricht die Kapitänin wirklich?"] },
          { art: "luecke", id: "f-luecke", nur: "R", titel: "Numbers and times", lead: "Listen again and complete the sentences. <span class=\"de\">Hör noch einmal zu und ergänze die Zahlen. Zwei Wörter bleiben übrig.</span>",
            absaetze: [["The ferry to Mull takes about ", { g: "fifty" }, " minutes."], ["It arrives at ", { g: "twelve" }, " o'clock."], ["The café is on deck ", { g: "two" }, "."], ["Drivers go to their cars ", { g: "ten" }, " minutes before arrival."]],
            extra: ["fifteen", "five"],
            hilfen: ["Es sind vier Zahlen: eine Dauer, eine Uhrzeit, ein Deck, eine Zeit vor der Ankunft.", "Achte auf fifty und fifteen: Sie klingen ähnlich."] },
          { art: "formular", id: "f-luecke", nur: "M", titel: "Numbers and times", lead: "Listen again and complete the sentences. <span class=\"de\">Schreibe die Zahl oder die Uhrzeit.</span>",
            kopf: "Complete the sentences",
            felder: [
              { label: "The ferry arrives at …", platz: "time", loesung: ["ten past twelve", "12.10", "12:10", "at ten past twelve", "twelve ten", "10 past 12", "ten past 12", "12.10 pm", "12:10 pm", "at 12.10", "at 12:10", "twelve ten pm", "10 past twelve", "12.10pm", "ten minutes past twelve"] },
              { label: "The café is on deck …", platz: "number", loesung: ["three", "3", "deck three", "deck 3", "3rd", "third", "on deck three"] },
              { label: "The trip takes about … minutes.", platz: "number", loesung: ["fifty", "50", "about fifty", "about 50", "fifty minutes", "50 minutes"] },
              { label: "Drivers return to their cars … minutes before arrival.", platz: "number", loesung: ["fifteen", "15", "fifteen minutes", "15 minutes"] },
              { label: "To see dolphins, look at the … side.", platz: "left or right", loesung: ["right", "right side", "the right", "right-hand", "right hand", "the right side"] }
            ] }
        ] }
    ] },
    { kurz: "Listening 3", ober: "A voice message", titel: "A message from Abbie", teile: [
      { art: "text", html: "<p class=\"lead\">Abbie sends a <b>voice message</b> to her friend Mairi. <span class=\"de\">Abbie schickt ihrer Freundin Mairi eine Sprachnachricht.</span></p><p>Listen for the <button class=\"term\" data-t=\"wfragen\">W-questions</button>: <b>Why? What? Who? When? Where?</b> Abbie also says what she has <b>already</b> done and what she is <b>going to</b> do. <span class=\"de\">Achte auch auf present perfect (already, yet) und going to.</span></p>" },
      { art: "mc", id: "t3-gist", tag: "The topic", titel: "Before you listen", lead: "Read the questions. Then listen to the message below and tick the answers. <span class=\"de\">Beim ersten Hören nur das Wichtigste.</span>",
        fragen: [
          { q: "What is Abbie's message about?", o: ["a plan for Saturday", "a problem at school", "a birthday present"], a: 0, e: "Abbie fragt, ob Mairi am Samstag etwas mit ihr machen möchte." },
          { q: "What does Abbie ask Mairi to do at the end of the message?", o: ["to call her back", "to help her with her homework", "to come to her house tonight"], a: 0, e: "Zum Schluss bittet Abbie Mairi, sie zurückzurufen: „call me back“." }
        ] },
      { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: { R: "u2-lp1-abbie-r", M: "u2-lp1-abbie-m" },
        foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" },
        fragen: [
          { art: "formular", id: "t3-notizen", nur: "R", titel: "Your notes", lead: "Listen again and choose the right notes. <span class=\"de\">Hör noch einmal zu und wähle für jede W-Frage die richtige Notiz.</span>",
            kopf: "Notes: Abbie's message",
            felder: [
              { label: "Why does Abbie call?", loesung: ["She wants to plan the weekend."], wahl: ["She wants to plan the weekend.", "She needs help with homework.", "She wants to say sorry."] },
              { label: "What are they going to do?", loesung: ["a bike ride and a picnic"], wahl: ["a bike ride and a picnic", "a swim and a film", "a football match"] },
              { label: "Who is coming too?", loesung: ["her cousin Lewis"], wahl: ["her cousin Lewis", "her brother Lewis", "her friend Lewis"] },
              { label: "When?", loesung: ["Saturday, ten o'clock"], wahl: ["Saturday, ten o'clock", "Sunday, ten o'clock", "Saturday, two o'clock"] },
              { label: "Where do they meet?", loesung: ["in front of the library"], wahl: ["in front of the library", "in front of the school", "at the loch"] }
            ] },
          { art: "formular", id: "t3-notizen", nur: "M", titel: "Your notes", lead: "Listen again and write short notes. <span class=\"de\">Notiere zu jeder W-Frage ein bis vier Wörter.</span>",
            kopf: "Notes: Abbie's message",
            felder: [
              { label: "Why Saturday?", platz: "one reason", loesung: ["good weather", "lovely weather", "nice weather", "the weather is lovely", "the weather is going to be lovely", "the weather is going to be nice", "the weather is going to be good", "because of the weather", "the weather", "sunny", "nice", "good weather on Saturday", "lovely weather on Saturday", "weather", "the weather will be lovely", "because the weather is going to be lovely", "because the weather is lovely", "it will be lovely", "beautiful weather", "fine weather", "nice weather on Saturday", "the good weather", "because of the good weather", "because of the lovely weather"] },
              { label: "What is Abbie going to do?", platz: "two things", loesung: ["cycle to the loch", "cycle to the loch and have a picnic", "bike ride and picnic", "bike ride to the loch", "a bike ride and a picnic", "cycling and a picnic", "go cycling", "go for a bike ride", "cycle along the railway path", "cycle along the old railway path to the loch", "bike ride to the loch and picnic", "a picnic at the loch", "have a picnic", "bike ride", "a bike ride", "cycling", "cycle", "ride bikes", "cycle ride and picnic", "bike ride and a picnic", "cycle and picnic", "cycling and picnic", "picnic and bike ride"] },
              { label: "Who is coming too?", platz: "name", loesung: ["Lewis", "her cousin Lewis", "her cousin", "cousin Lewis", "Abbie's cousin Lewis", "Abbie's cousin", "Lewis, her cousin", "her cousin, Lewis", "her cousin lewis"] },
              { label: "When do they meet?", platz: "day and time", loesung: ["Saturday, ten o'clock", "Saturday at ten o'clock", "Saturday 10 o'clock", "Saturday at 10 o'clock", "Saturday 10.00", "Saturday at 10.00", "Saturday at 10", "Saturday, 10 am", "Saturday 10 am", "Saturday at 10 am", "Saturday, 10.00", "Saturday at ten", "Saturday ten o'clock", "Saturday, ten", "Saturday morning, ten o'clock", "Saturday morning at ten o'clock", "Saturday 10:00", "Saturday at 10:00", "Saturday, 10:00", "Saturday 10", "Saturday, 10", "Saturday, 10 o'clock", "Saturday at 10 a.m."] },
              { label: "Where do they meet?", platz: "place", loesung: ["in front of the library", "at the library", "the library", "outside the library", "in front of the library entrance", "library", "in front of the library."] }
            ] },
          { art: "mc", id: "t3-mc", nur: "R", titel: "Done or not yet?", lead: "Tick the right answer. <span class=\"de\">Was hat Abbie schon erledigt, was noch nicht?</span>",
            fragen: [{ q: "Which job has Abbie not done yet?", o: ["feeding the rabbits", "cleaning her room", "doing her homework"], a: 0, e: "Abbie sagt: „I haven't fed the rabbits yet.“ Ihr Zimmer und die Hausaufgaben sind schon erledigt (already)." }],
            hilfen: ["Achte auf yet: Das Wort zeigt, was noch nicht erledigt ist."] },
          { art: "mc", id: "t3-mc", nur: "M", titel: "Who brings what?", lead: "Tick the right answer. <span class=\"de\">Wer bringt was mit?</span>",
            fragen: [{ q: "What is Abbie going to bring?", o: ["a cake", "the sandwiches", "something to drink"], a: 0, e: "Abbie backt einen Kuchen (I'm going to make a cake). Lewis bringt die Sandwiches, Mairi soll etwas zu trinken mitbringen." }],
            hilfen: ["Es kommen drei Dinge vor: Kuchen, Sandwiches, ein Getränk. Wer bringt welches?"] }
        ] },
      { art: "merke", kopf: "ANSWER A MESSAGE", html: "<p><b>Say yes:</b> <i>Hi Abbie! Yes, I would like to come.</i> · <i>That sounds great!</i></p><p><b>Say what you bring:</b> <i>I am going to bring …</i></p><p><b>Say what you have done:</b> <i>I have already … · I haven't … yet.</i></p>" },
      { art: "offen", id: "antwort", nur: "R", tag: "Your words", titel: "Answer Abbie", lead: "Write a short answer. <span class=\"de\">Sag ja und schreib, was du mitbringst. Ein bis zwei Sätze genügen.</span>",
        tipp: "Begin: Hi Abbie! Yes, I would like to come. I am going to bring …",
        fragen: [{ q: "Write a short answer to Abbie: say yes and say what you are going to bring.", m: "Hi Abbie! Yes, I would like to come. I am going to bring some sandwiches.", k: ["yes|would like|love to|sounds|can come|i'd like|great", "going to|'m going|will|bring", "sandwich|cake|drink|fruit|apple|juice|water|snack|biscuit|sweets|crisps|food|lunch|something|chocolate|cookie|banana"], min: 3 }],
        hilfen: ["Fang an mit: Hi Abbie! Yes, …", "Dann: I am going to bring …", "Beispiel für den Anfang: Hi Abbie! Yes, I would like to come. I am going to bring …"] },
      { art: "offen", id: "antwort", nur: "M", tag: "Your words", titel: "Answer Abbie", lead: "Write a short answer in two or three sentences. <span class=\"de\">Sag ja, nenne eine Hausarbeit, die du schon erledigt hast, und sag, was du mitbringst.</span>",
        tipp: "Use: Yes, I would like to come. · I have already … · I am going to bring …",
        fragen: [{ q: "Write a short answer to Abbie. Say yes, say one job you have already done and say what you are going to bring.", m: "Hi Abbie! Yes, I would love to come. I have already done my maths homework. I am going to bring a drink and some fruit.", k: ["yes|would like|love to|sounds|can come|i'd like|great", "have|'ve", "already|yet|just", "going to|'m going|bring", "homework|room|job|dishes|washing|bed|cleaned|tidied|finished|done|made|fed|walked|helped|packed", "drink|fruit|sandwich|cake|juice|water|snack|biscuit|sweets|crisps|food|something|chocolate|cookie|banana|apple"], min: 5 }] },
      { art: "offen", id: "plan-b", m7: true, tag: "Your words", titel: "Plan B", lead: "The weather app says: <b>rain on Saturday</b>. Write <b>two sentences</b> to Abbie: suggest a new plan and a time. <span class=\"de\">Der Wetterbericht meldet Regen am Samstag. Schlage Abbie etwas anderes vor und nenne eine Uhrzeit.</span>",
        tipp: "Use: How about …? · Let's meet at … o'clock. · Why don't we …?",
        fragen: [{ q: "Suggest a new plan and a time.", m: "How about Sunday? Let's meet at eleven o'clock in front of the library.", k: ["how about|let's|why don't|could we|shall we|what about", "sunday|friday|monday|tomorrow|today|evening|afternoon|inside|cinema|home|museum|library", "o'clock|half|quarter|morning|afternoon|evening| pm| am|at 1|at 2|at 3|at 4|at 5|at 6|at 7|at 8|at 9|at 10|at 11|at 12"], min: 3 }] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "sichern", tag: "Gap text", titel: "Plans and things done", lead: "Complete the sentences. <span class=\"de\">Present perfect und going to aus den Texten. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Zara and her group are ", { g: "going to" }, " go on a boat trip."],
          ["Abbie has ", { g: "already" }, " cleaned her room."],
          ["She has not fed the rabbits ", { g: "yet" }, "."],
          [{ g: "Have" }, " you finished your homework? – No, I ", { g: "haven't" }, "."]
        ], extra: ["ago", "yesterday"] }
    ] }
  ],
  weiter: { text: "Well done! You know how to listen for the topic, for numbers and times and for Why, What, Who, When and Where. Keep practising with other listening texts." }
});
