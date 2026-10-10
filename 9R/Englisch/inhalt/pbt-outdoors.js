/* Englisch 9R · Prüfungstraining · Speaking: Picture talks · Out and about
   (Übungsbilder für den ersten Teil der mündlichen Prüfung. Vier gezeichnete Bilder aus Stadt, Verkehr, Natur und Sport.
   Zu jedem Bild: Wörter, genau hinsehen, Sprache üben – Verlaufsform, Vermutung mit Grund, Ortsangaben, there is / there are –
   und Fragen, wie sie die Prüferin stellt: erst zum Bild, dann weiterführend zum eigenen Leben. Zuletzt zu zweit:
   eine Person spricht, die andere prüft. Das Gerät bewertet das Sprechen nicht.)
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend sprechen, an Gesprächen teilnehmen), E9 2 (Redemittel), E9 3.
   Bilder: eigene Zeichnungen in ../../9R/Englisch/images/pbt/ (market, busstop, hiking, football; erzeugt mit
   .codex-build/englisch9r-werkzeug/bau-pbt-bilder.js, ohne Schrift, ohne Marken). Was auf jedem Bild zu sehen ist, steht im
   Kopf der Szene (pbt-szenen/<name>.js) – Aussagen in den Aufgaben stimmen damit überein. Personen haben keine Namen. */
var pbtZeichnung = function (datei, alt, hinweis) {
  return "<figure class=\"pbt-bild\" style=\"margin:0 0 14px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/pbt/" + datei + ".svg\" alt=\"" + alt +
    "\" loading=\"lazy\" width=\"1280\" height=\"853\" style=\"display:block;width:100%;max-width:760px;height:auto;border-radius:12px;border:1px solid rgba(0,0,0,.12)\">" +
    "<figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI" + (hinweis ? " · " + hinweis : "") + "</figcaption></figure>";
};
D7Kit.seite({
  id: "pbt-outdoors",
  titel: "Speaking: Picture talks · Out and about",
  einleitung: "Four new pictures for your speaking test: a market, a bus stop, a hike and a football match. You <b>look closely</b>, you practise the language – and you answer the questions of the <b>examiner</b>.",
  zeit: "etwa 45 Minuten",
  ziele: ["👀 I look closely and say what I can really see.", "💭 I guess – and I give a reason from the picture.", "📍 I say where people and things are.", "🎤 I answer follow-up questions about my own life."],
  quiz: { profi: "Outdoor picture pro" },
  glossar: {
    examiner: ["examiner", "Prüferin oder Prüfer. In der mündlichen Prüfung stellt sie oder er dir Fragen."],
    followup: ["follow-up question", "Anschlussfrage. Sie geht vom Bild aus, fragt aber nach dir: Do you like …? What do you do when …?"],
    annoyed: ["annoyed", "Genervt, verärgert. She looks annoyed because the bus is leaving."],
    guess: ["to guess", "Vermuten. Du weißt es nicht sicher und sagst deshalb: Maybe … / I think … / It might be …"]
  },
  stationen: [
    { kurz: "Market", ober: "In town", titel: "Picture 1: at the street market", teile: [
      { art: "text", html: "<p class=\"lead\">In the speaking test you have <b>30 seconds</b> to look at your picture. Then the <button class=\"term\" data-t=\"examiner\">examiner</button> asks questions. <span class=\"de\">Schau dir das Bild 30 Sekunden lang genau an. Tippe darauf, dann wird es größer.</span></p>" +
        pbtZeichnung("market", "A street market on a sunny day. On the left, a seller at a fruit stall gives a paper bag to a woman with a basket; a child with a red balloon stands next to her. On the right, a woman at a flower stall holds a bunch of flowers. In the foreground, an older man walks a white dog. In the background, a street musician plays the guitar in front of colourful houses.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>stall</b> <span class=\"de\">Marktstand</span> · <b>seller</b> <span class=\"de\">Verkäufer/in</span> · <b>customer</b> <span class=\"de\">Kunde, Kundin</span> · <b>basket</b> <span class=\"de\">Korb</span> · <b>paper bag</b> <span class=\"de\">Papiertüte</span> · <b>balloon</b> <span class=\"de\">Luftballon</span> · <b>bunch of flowers</b> <span class=\"de\">Blumenstrauß</span> · <b>street musician</b> <span class=\"de\">Straßenmusiker/in</span> · <b>lead</b> <span class=\"de\">Hundeleine</span></p>" },
      { art: "mc", id: "market-mc", tag: "Look and tick", titel: "What can you see?", lead: "Tick the correct answer. <span class=\"de\">Schau genau auf das Bild.</span>",
        fragen: [
          { q: "Where is the fruit stall?", o: ["On the left.", "On the right.", "In the background, in the middle.", "Behind the houses."], a: 0,
            e: "The stall with the red and white roof and the boxes of fruit is on the left. The stall on the right sells flowers." },
          { q: "Who is holding a red balloon?", o: ["The child in the yellow T-shirt.", "The woman with the basket.", "The man with the dog.", "The street musician."], a: 0,
            e: "The child next to the woman holds the string of the balloon. Colours and clothes help the listener to find a person." },
          { q: "What is the man in the foreground on the right doing?", o: ["He is walking his dog.", "He is buying flowers.", "He is playing the guitar.", "He is selling apples."], a: 0,
            e: "He has a white dog on a red lead and he is walking. The musician with the guitar is in the background." }
        ] },
      { art: "luecke", id: "market-luecke", tag: "Present progressive", titel: "What are the people doing?", lead: "Complete the sentences about the picture. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["On the left, a seller ", { g: "is giving" }, " a paper bag to a woman."],
          ["The woman with the basket ", { g: "is laughing" }, ". She looks happy."],
          ["In the background, a street musician ", { g: "is playing" }, " the guitar."],
          ["In the foreground, a man ", { g: "is walking" }, " his dog."],
          ["The sun ", { g: "is shining" }, "."]
        ], extra: ["are buying", "play"] },
      { art: "offen", id: "market-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>. <span class=\"de\">Die erste Frage geht um das Bild, die zweite um dich – das ist eine <button class=\"term\" data-t=\"followup\">Anschlussfrage</button>.</span>",
        fragen: [
          { q: "Look at the woman and the child with the balloon. Who are they? Make a guess.", m: "I think the woman is the mother of the child because they are standing together. Maybe they are shopping for the weekend.", k: ["think|maybe|perhaps|might|looks like|look like", "mother|mum|aunt|sister|family|parent|daughter|son|grandmother", "because|so"], min: 2 },
          { q: "Do you prefer shopping at a market or in a supermarket? Why?", m: "I prefer shopping at a market because the fruit is fresh. But the supermarket is cheaper and it is open longer.", k: ["market|supermarket|shop", "because", "prefer|like|love|fresh|cheap|cheaper|friendly|fast|quick|open"], min: 2 }
        ],
        tipp: "For a guess: I think … / Maybe … Then give a reason with because. For your own life: I prefer … because …" }
    ] },
    { kurz: "Bus stop", ober: "Feelings and guesses", titel: "Picture 2: waiting for the bus", teile: [
      { art: "text", html: "<p class=\"lead\">Not every picture is sunny. Here you need words for <b>bad weather</b> and for <b>feelings</b>. <span class=\"de\">Wie fühlen sich die Menschen – und woran siehst du das?</span></p>" +
        pbtZeichnung("busstop", "A rainy day at a bus stop. In the shelter, a girl sits and looks at her phone, and an older man with a hat reads a newspaper. Next to the shelter, a woman with a red umbrella and a shopping bag looks unhappy. On the right, a boy with an orange backpack runs after a yellow bus with his arm up. There are puddles on the ground and grey clouds in the sky.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>bus stop</b> <span class=\"de\">Bushaltestelle</span> · <b>shelter</b> <span class=\"de\">Wartehäuschen</span> · <b>bench</b> <span class=\"de\">Bank</span> · <b>puddle</b> <span class=\"de\">Pfütze</span> · <b>umbrella</b> <span class=\"de\">Regenschirm</span> · <b>to miss the bus</b> <span class=\"de\">den Bus verpassen</span> · <b>to run after</b> <span class=\"de\">hinterherrennen</span> · <b>annoyed</b> <span class=\"de\">genervt</span> · <b>bored</b> <span class=\"de\">gelangweilt</span> · <b>stressed</b> <span class=\"de\">gestresst</span></p>" },
      { art: "tf", id: "bus-tf", tag: "True or false?", titel: "Check the picture", lead: "True or false? <span class=\"de\">Passt die Aussage zum Bild?</span>",
        aussagen: [
          ["It is raining, and there are puddles on the ground.", true],
          ["Two people are sitting in the shelter.", true],
          ["The woman with the red umbrella is sitting on the bench.", false],
          ["A boy with an orange backpack is running after the bus.", true],
          ["The older man is looking at his phone.", false],
          ["The bus is blue.", false]
        ] },
      { art: "mc", id: "bus-mc", tag: "Guess", titel: "Find the best guess", lead: "A good <button class=\"term\" data-t=\"guess\">guess</button> has a reason you can see in the picture. Tick the best answer.",
        fragen: [
          { q: "How does the boy feel?", o: ["I think he is stressed because he is running after the bus.", "I think he is happy because it is raining.", "I think he is bored because he is sitting on the bench.", "I think he is tired because he is reading."], a: 0,
            e: "You can see the reason: he is running, his arm is up and his mouth is open. He is not sitting and he is not reading." },
          { q: "Why does the woman with the umbrella look annoyed?", o: ["Maybe she has missed the bus too.", "Maybe she has lost her umbrella.", "Maybe it is too hot in the sun.", "Maybe she is waiting for a plane."], a: 0,
            e: "The bus is leaving and she is still standing at the bus stop. She has her umbrella, there is no sun, and a bus stop is not an airport." }
        ] },
      { art: "offen", id: "bus-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>. <span class=\"de\">Wer <button class=\"term\" data-t=\"annoyed\">annoyed</button> ist und warum – das darfst du vermuten.</span>",
        fragen: [
          { q: "What has happened to the boy? Tell his story. Make a guess.", m: "I think the boy got up too late, so he has missed the bus. Now he is running after it, but the bus is not stopping.", k: ["think|maybe|perhaps|might|looks like|look like", "missed|late|running|run|catch|stop|stopping|overslept", "bus"], min: 2 },
          { q: "How do you get to school? What do you do when you miss the bus?", m: "I usually go to school by bus. When I miss the bus, I wait for the next one or I call my mum.", k: ["bus|bike|walk|on foot|car|train|tram|underground|scooter", "when|if|then", "wait|call|walk|run|next|late|phone|ask"], min: 2 }
        ],
        tipp: "Tell the story step by step: I think … so … Now he is … For your own life: I usually go by … When I miss the bus, I …" }
    ] },
    { kurz: "Hike", ober: "Where is it?", titel: "Picture 3: a hike in the mountains", teile: [
      { art: "text", html: "<p class=\"lead\">In a picture of nature there are many things far away. Say clearly <b>where</b> they are. <span class=\"de\">Hinten, vorne, links, zwischen, neben – so findet die Prüferin, was du meinst.</span></p>" +
        pbtZeichnung("hiking", "Three hikers on a path in the mountains on a sunny day. On the left, a man with a hat looks at a map. In the middle, a boy with a blue backpack takes a photo. On the right, a girl with a red cap and a green backpack points at the mountains and laughs. Behind them there is a blue lake, three sheep on the left and a wooden hut between fir trees on the right. In the foreground on the right there is a signpost with two yellow arrows and a grey stone. Three mountains with snow are in the background.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>hike</b> <span class=\"de\">Wanderung</span> · <b>path</b> <span class=\"de\">Weg</span> · <b>map</b> <span class=\"de\">Landkarte</span> · <b>signpost</b> <span class=\"de\">Wegweiser</span> · <b>lake</b> <span class=\"de\">See</span> · <b>sheep</b> <span class=\"de\">Schaf, Schafe</span> · <b>hut</b> <span class=\"de\">Hütte</span> · <b>snow</b> <span class=\"de\">Schnee</span> · <b>to point at</b> <span class=\"de\">zeigen auf</span> · <b>to take a photo</b> <span class=\"de\">ein Foto machen</span></p>" },
      { art: "mc", id: "hike-mc", tag: "Look and tick", titel: "What can you see?", lead: "Tick the correct answer. <span class=\"de\">Schau genau auf das Bild.</span>",
        fragen: [
          { q: "What is the man on the left doing?", o: ["He is looking at a map.", "He is taking a photo.", "He is pointing at the mountains.", "He is feeding the sheep."], a: 0,
            e: "The man with the hat holds a map with both hands. The boy in the middle takes the photo, and the girl points at the mountains." },
          { q: "Where are the sheep?", o: ["On the left, near the lake.", "On the right, next to the hut.", "In the foreground, on the path.", "In the background, on a mountain."], a: 0,
            e: "The three sheep are on the grass on the left, close to the lake." },
          { q: "What can you see in the foreground on the right?", o: ["A signpost with two yellow arrows.", "A lake with a boat.", "A tent.", "Three sheep."], a: 0,
            e: "The signpost stands next to the path. There is no boat and no tent in the picture." }
        ] },
      { art: "luecke", id: "hike-luecke", tag: "Position words", titel: "Where is it?", lead: "Look at the picture and complete the sentences. <span class=\"de\">Jeder Satz muss zum Bild passen. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In the ", { g: "background" }, ", there are three mountains with snow."],
          ["The boy with the camera is standing ", { g: "between" }, " the man and the girl."],
          ["On the ", { g: "left" }, ", there are three sheep."],
          ["There is a grey stone ", { g: "next to" }, " the signpost."],
          ["The lake is ", { g: "behind" }, " the three people."]
        ], extra: ["inside", "above"] },
      { art: "offen", id: "hike-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>.",
        fragen: [
          { q: "Describe the girl with the red cap. What is she doing, and how does she feel?", m: "The girl is wearing a red cap and a green backpack. She is pointing at the mountains and she looks happy because she is laughing.", k: ["cap|backpack|wearing|T-shirt|shorts", "pointing|showing|laughing|smiling|walking", "happy|excited|glad|looks|feels|fun"], min: 2 },
          { q: "Do you like hiking? What do you do outdoors in your free time?", m: "I do not like hiking very much because it is tiring. In my free time I ride my bike or I play football with my friends.", k: ["like|love|hate|enjoy|don't|do not|prefer", "because|but|and", "bike|football|swim|walk|run|play|ride|skate|friends|park|outside|outdoors|dog"], min: 2 }
        ],
        tipp: "Describe a person: She is wearing … She is …-ing … She looks … because … For your own life: I like … / In my free time I …" }
    ] },
    { kurz: "Football", ober: "A lot is going on", titel: "Picture 4: a football match in the park", teile: [
      { art: "text", html: "<p class=\"lead\">In an action picture many people do different things at the same time. Start with the <b>most important action</b>, then go around the picture. <span class=\"de\">Erst das Wichtigste, dann der Reihe nach: Mitte, links, rechts, hinten.</span></p>" +
        pbtZeichnung("football", "A football match in a park on a sunny day. In the foreground, a player in a red shirt, seen from behind, kicks the ball towards the goal. In the background, a goalkeeper in a yellow shirt stands in front of the goal with his arms out. On the left, another player in red is running; on the right, a player in blue runs to the ball. In the background on the left, two people on a bench cheer with their arms up. On the right, a coach with a cap points at the pitch. A sports bag, two bottles and three orange cones are in the foreground.") },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>pitch</b> <span class=\"de\">Spielfeld</span> · <b>goal</b> <span class=\"de\">Tor</span> · <b>goalkeeper</b> <span class=\"de\">Torwart, Torhüterin</span> · <b>to kick</b> <span class=\"de\">schießen, treten</span> · <b>to score a goal</b> <span class=\"de\">ein Tor schießen</span> · <b>teammate</b> <span class=\"de\">Mitspieler/in</span> · <b>coach</b> <span class=\"de\">Trainer/in</span> · <b>to cheer</b> <span class=\"de\">jubeln</span> · <b>cone</b> <span class=\"de\">Hütchen</span></p>" },
      { art: "tf", id: "foot-tf", tag: "True or false?", titel: "Check the picture", lead: "True or false? <span class=\"de\">Passt die Aussage zum Bild?</span>",
        aussagen: [
          ["In the foreground, a player in a red shirt is kicking the ball.", true],
          ["The goalkeeper is wearing a yellow shirt.", true],
          ["Two people are sitting on a bench on the right.", false],
          ["There are three orange cones in the foreground.", true],
          ["The coach is sitting on the bench.", false],
          ["It is a rainy day.", false]
        ] },
      { art: "luecke", id: "foot-luecke", tag: "There is · there are · -ing", titel: "Complete the talk", lead: "Complete the sentences about the picture. <span class=\"de\">Zwei Formen bleiben übrig.</span>",
        absaetze: [
          [{ g: "There is" }, " a goal in the background."],
          [{ g: "There are" }, " two people on the bench."],
          ["The two people on the bench ", { g: "are cheering" }, "."],
          ["The player in the blue shirt ", { g: "is running" }, " fast."],
          ["The coach ", { g: "is pointing" }, " at something with her hand."]
        ], extra: ["There have", "run"] },
      { art: "offen", id: "foot-offen", tag: "The examiner asks", titel: "Answer the examiner", lead: "Answer each question in <b>two sentences</b>.",
        fragen: [
          { q: "What happens next? Make a guess about the ball and the goalkeeper.", m: "I think the ball will fly into the goal because the goalkeeper is too far away. Maybe the red team will win the match.", k: ["think|maybe|perhaps|might|will|going to", "goal|goalkeeper|ball|score|catch|save|win", "because|so|and|but"], min: 2 },
          { q: "Which sports do you do or watch? Why are team sports good for young people?", m: "I play handball in a club and I watch football on TV. Team sports are good because you make friends and you stay fit.", k: ["play|do|watch|go|train|swim|ride|dance", "because", "friends|fit|healthy|team|fun|together|learn|strong"], min: 2 }
        ],
        tipp: "What happens next? I think … will … because … For your own life: I play … / I watch … Team sports are good because …" }
    ] },
    { kurz: "Your turn", ober: "Now speak!", titel: "Your turn: speaker and examiner", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Work with a partner. Choose <b>one</b> of the four pictures. First you make a speaking note, then you speak – and your partner is the examiner. <span class=\"de\">Wähle ein Bild. Erst Stichpunkte schreiben, dann sprechen. Danach tauscht ihr die Rollen und nehmt ein anderes Bild.</span></p>" +
        "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin-top:10px\">" +
        pbtZeichnung("market", "A: A street market with a fruit stall, a flower stall, a street musician and a man with a dog.", "A · Market") +
        pbtZeichnung("busstop", "B: A bus stop in the rain; a boy runs after a yellow bus.", "B · Bus stop") +
        pbtZeichnung("hiking", "C: Three hikers in the mountains near a lake.", "C · Hike") +
        pbtZeichnung("football", "D: A football match in a park; a player kicks the ball towards the goal.", "D · Football") + "</div>" },
      { art: "schreiben", id: "sprechzettel", tag: "Speaking note", titel: "Write your speaking note", min: 60,
        auftrag: "<p><b>Write your speaking note</b> (60 words or more). Key words or short sentences are OK.</p><ul><li>In your first sentence, say <b>which picture</b> you have chosen (A, B, C or D).</li><li>Follow the steps: overview – people and things – where – actions – guess – mood – opinion.</li><li>Use <i>is / are + -ing</i> for the actions and give <b>one guess with a reason</b>.</li></ul>",
        starter: ["I have chosen picture …", "This picture shows …", "In the foreground, …", "In the background, …", "On the left / On the right, …", "… is / are …-ing.", "I think … because …", "I like the picture because …"],
        kriterien: ["Der erste Satz nennt das gewählte Bild (A, B, C oder D).", "Die Notizen geben einen Überblick und sagen, wo etwas ist (zum Beispiel foreground, background, on the left).", "Mindestens zwei Handlungen stehen im present progressive (is / are + -ing).", "Es gibt eine Vermutung mit Grund (I think … because …) und eine Meinung.", "Die Sätze oder Stichpunkte sind verständlich und richtig geschrieben."] },
      { art: "text", html: "<p class=\"lead\"><b>Speak for one minute</b> – then the examiner asks. <span class=\"de\">Wer spricht, nutzt nur den Sprechzettel. Wer prüft, stellt Fragen und gibt Rückmeldung.</span></p>" +
        "<div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · Speaker</h4><ul><li>Look at your picture for <b>30 seconds</b>.</li><li>Start: <i>This picture shows …</i></li><li>Speak for <b>one minute</b>. Use a timer.</li><li>Answer the questions in whole sentences and give a reason.</li><li>If you forget a word, say it in another way: <i>It is a thing for …</i></li></ul></div>" +
        "<div class=\"sprech-karte b\"><h4>Card B · Examiner</h4><ul><li>Listen first. Do not help.</li><li>Ask two questions about the picture: <i>What is … doing? · Where is …? · How does … feel? Why?</i></li><li>Ask one follow-up question: <i>Do you like …? · What do you do when …? · Would you like to be there?</i></li><li>Feedback: <i>I liked …</i> and <i>Next time, please …</i></li></ul></div></div>" },
      { art: "offen", id: "pruefer-fragen", m7: true, tag: "Challenge · Be the examiner", titel: "Write examiner questions", lead: "Write <b>two questions</b> an examiner could ask about your picture: one about the picture and one follow-up question. <span class=\"de\">Freiwillig: Denke dir Prüfungsfragen aus. Wer gute Fragen stellen kann, ist auf die Antworten vorbereitet.</span>",
        fragen: [
          { q: "Which two questions could an examiner ask about your picture?", m: "What is the boy with the backpack doing? Do you often go to school by bus?", k: ["what|who|where|why|how|which", "do you|would you|can you|have you|are you|is |are |does "], min: 2 }
        ],
        tipp: "Question about the picture: What is … doing? / Where is …? Follow-up question: Do you …? / Would you like to …?" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to do well in the picture talk", lead: "True or false? <span class=\"de\">Aussagen über das Gespräch zum Bild.</span>",
        aussagen: [
          ["I look at the whole picture first and start with an overview.", true],
          ["I only describe the people. Things and places are not important.", false],
          ["For feelings I give a reason from the picture: She looks annoyed because …", true],
          ["When the examiner asks about my own life, \"yes\" or \"no\" is enough.", false],
          ["If I do not know a word, I describe it: It is a thing for …", true]
        ] },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A guess needs a ", { g: "reason" }, ": I think he is late because he is running."],
          ["I say where things are: on the left, on the right, in the ", { g: "background" }, "."],
          ["For actions I use the present ", { g: "progressive" }, ": She is pointing at the mountains."],
          ["After the talk the examiner asks ", { g: "follow-up" }, " questions about my own life."],
          ["I answer in whole ", { g: "sentences" }, "."]
        ], extra: ["letters", "yesterday"] }
    ] }
  ],
  weiter: { text: "Well done! You have worked with four pictures. Swap roles with your partner and try another picture – or go on with the pictures about home, school and work." }
});
