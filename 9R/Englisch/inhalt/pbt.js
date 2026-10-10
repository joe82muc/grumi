/* Englisch 9R · Prüfungstraining · Speaking: Picture-based talk
   (Vorbereitung auf den ersten Teil der mündlichen Prüfung: ein Bild beschreiben und darüber sprechen. Erst die Schritte und
   Redemittel lernen, dann an Bildern üben – Ortsangaben, present progressive, Vermutungen, Stimmung, Meinung –, typische Fehler,
   zuletzt Sprechzettel schreiben, eine Minute frei sprechen und mit der Partnerin / dem Partner nach Kärtchen rückmelden.
   Das Gerät bewertet das Sprechen nicht.)
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend sprechen, Bilder beschreiben), E9 2 (Redemittel), E9 3.
   Bilder: sechs eigene Bilder der Lehrkraft in ../../9R/Englisch/images/pbt/ (picnic, airport, camping, safari, stadium, interview) und eine
   eigene Zeichnung (beach.svg, passt zum Vortrag in Station 1; erzeugt mit .codex-build/englisch9r-werkzeug/bau-pbt-bilder.js); sie werden
   unter der Bildzeile „Picture: GRUMI“ gezeigt und lassen sich antippen und vergrößern. Personen haben keine Namen.
   Text: Mustervortrag zum Bild „camping“ (texte/pruefung/pbt-camping.js). */
var pbtBild = function (datei, alt, hinweis) {
  return "<figure class=\"pbt-bild\" style=\"margin:0 0 14px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/pbt/" + datei + (datei.indexOf(".") < 0 ? ".jpg" : "") + "\" alt=\"" + alt +
    "\" loading=\"lazy\" style=\"display:block;width:100%;max-width:760px;height:auto;border-radius:12px\">" +
    "<figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI" + (hinweis ? " · " + hinweis : "") + "</figcaption></figure>";
};
D7Kit.seite({
  id: "pbt",
  titel: "Speaking: Picture-based talk",
  einleitung: "In the speaking test you get a picture and you talk about it. Here you <b>learn the steps and the phrases</b>, practise with pictures – and then you speak out loud. The device does not listen: <b>you speak, your partner helps.</b>",
  zeit: "etwa 45 Minuten",
  ziele: ["🪜 I know the steps of a good picture talk.", "📍 I say where things are and what people are doing (present progressive).", "💭 I guess (maybe, I think, it might be) and I say what I think.", "🎤 I speak about a picture for one minute."],
  quiz: { profi: "Picture talk pro" },
  glossar: {
    foreground: ["foreground / background", "Vordergrund (vorne im Bild) und Hintergrund (hinten im Bild)."],
    progressive: ["present progressive", "Verlaufsform der Gegenwart: am / is / are + Verb mit -ing. Sie sagt, was gerade passiert: A man is waving."],
    guess: ["to guess", "Vermuten. Du weißt es nicht sicher und sagst deshalb: Maybe … / I think … / It might be …"],
    mood: ["mood", "Stimmung. Wie fühlen sich die Menschen? Sie sind zum Beispiel happy, excited, tired oder bored."],
    opinion: ["opinion", "Meinung. Du sagst, was du selbst denkst: In my opinion … / I like the picture because …"],
    marshmallow: ["marshmallow", "Marshmallow – eine weiche, weiße Süßigkeit. Man hält sie an einem Stock über das Feuer."]
  },
  stationen: [
    { kurz: "Steps", ober: "How a good talk works", titel: "The steps of a picture talk", teile: [
      { art: "text", html: "<p class=\"lead\">In the first part of the speaking test you get <b>one picture</b>. You describe it and you say what you think. A good talk has <b>steps</b> – like a path. <span class=\"de\">Wenn du die Schritte kennst, weißt du immer, was als Nächstes kommt.</span></p><p><b>Look at the steps:</b> You can use the words <button class=\"term\" data-t=\"foreground\">foreground</button>, <button class=\"term\" data-t=\"guess\">guess</button> and <button class=\"term\" data-t=\"opinion\">opinion</button> – tap them to see what they mean.</p>" },
      { art: "text", html: "<p><b>Look at this picture of a beach.</b> A pupil talks about it – but the sentences are mixed up. <span class=\"de\">Schau dir das Bild an. Darunter bringst du den Vortrag in die richtige Reihenfolge.</span></p>" +
        pbtBild("beach.svg", "A beach on a sunny day. In the foreground, two children build a sandcastle. In the middle, a dog runs with a ball. On the right, a woman reads and a man drinks under a big red and white umbrella. In the background, two young people play with a ball, a boy carries a surfboard, and there is a sailing boat on the sea.") },
      { art: "ordnen", id: "schritte", tag: "Order", titel: "A talk about the beach picture", lead: "Put the sentences of the talk in the right order. <span class=\"de\">Welcher Satz kommt wann?</span>",
        schritte: ["This picture shows a beach on a sunny day.", "I can see two children, a dog and a big umbrella.", "The children are in the foreground, and the umbrella is on the right.", "The children are building a sandcastle, and the dog is running.", "Maybe it is Saturday because many people are at the beach.", "Everybody looks relaxed and happy.", "I like the picture because I love the sea."] },
      { art: "merke", kopf: "THE 7 STEPS", html: "<ol><li><b>Overview:</b> This picture shows …</li><li><b>People and things:</b> I can see … / There are …</li><li><b>Where:</b> In the foreground … / In the background … / On the left … / On the right … / In the middle …</li><li><b>Actions:</b> A man <u>is waving</u>. Two girls <u>are laughing</u>. <span class=\"de\">(present progressive)</span></li><li><b>Guess:</b> Maybe … / I think … / It might be …</li><li><b>Mood:</b> They look happy. / It looks like a friendly place.</li><li><b>My opinion:</b> I like the picture because … / In my opinion …</li></ol><p class=\"de\">Du musst nicht alles sagen – aber sprich in ganzen Sätzen und bleib bei der Reihenfolge, dann verlierst du den Faden nicht.</p>" },
      { art: "tf", id: "schritte-tf", tag: "True or false?", titel: "Check the steps", lead: "True or false? <span class=\"de\">Stimmt die Aussage über einen guten Bildvortrag?</span>",
        aussagen: [
          ["A good picture talk starts with an overview: This picture shows …", true],
          ["You should say your opinion first and describe the picture later.", false],
          ["In the step \"where\" you say what is in the foreground and in the background.", true],
          ["For a guess you can say: Maybe … / I think … / It might be …", true],
          ["You should read the whole talk from a piece of paper.", false]
        ] }
    ] },
    { kurz: "Phrases", ober: "Words you need", titel: "Phrases for every step", teile: [
      { art: "sort", id: "redemittel", tag: "Sort", titel: "Which step?", lead: "Put each phrase into the right box. <span class=\"de\">Zu welchem Schritt passt der Satz?</span>",
        buckets: ["Overview", "Where", "Guess", "Opinion"],
        items: [{ t: "This picture shows …", b: 0 }, { t: "In this picture, I can see …", b: 0 }, { t: "The picture is about …", b: 0 },
                { t: "In the foreground, there is …", b: 1 }, { t: "On the left, a man is …", b: 1 }, { t: "Behind the table, …", b: 1 },
                { t: "Maybe they are friends.", b: 2 }, { t: "It looks like it is summer.", b: 2 }, { t: "I think they are on holiday.", b: 2 },
                { t: "I like the picture because …", b: 3 }, { t: "In my opinion, it is a great place.", b: 3 }, { t: "I would like to be there because …", b: 3 }] },
      { art: "paare", id: "ort", tag: "Position words", titel: "Where is it?", lead: "Find the pairs. <span class=\"de\">Verbinde den englischen Ausdruck mit seiner Bedeutung.</span>",
        paare: [["foreground", "Vordergrund"], ["background", "Hintergrund"], ["on the left", "links"], ["on the right", "rechts"], ["in the middle", "in der Mitte"], ["next to", "neben"], ["behind", "hinter"], ["in front of", "vor"]] },
      { art: "luecke", id: "phrasen-luecke", tag: "Gap text", titel: "Complete the phrases", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["This picture ", { g: "shows" }, " four friends in a park."],
          ["In the ", { g: "background" }, ", two people are playing basketball."],
          ["On the ", { g: "left" }, ", there is a big tree."],
          ["It ", { g: "looks like" }, " they are on holiday."],
          ["I like the picture ", { g: "because" }, " it looks friendly."]
        ], extra: ["shown", "behind"] }
    ] },
    { kurz: "Picture 1", ober: "Practise with a picture", titel: "Picture 1: a picnic", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture for <b>20 seconds</b>. Then do the tasks. <span class=\"de\">Schau dir das Bild genau an. Tippe darauf, dann wird es größer.</span></p>" +
        pbtBild("picnic", "Four friends are sitting on a checked blanket in a sunny park and laughing. There is food and drink on the blanket. In the background, two men play basketball and two more people walk under the trees.") },
      { art: "mc", id: "picnic-mc", tag: "Look and tick", titel: "What can you see?", lead: "Tick the correct answer. <span class=\"de\">Schau genau auf das Bild.</span>",
        fragen: [
          { q: "Where are the two men with the basketball?", o: ["In the background, on the left.", "In the foreground, on the right.", "In the foreground, on the left.", "In the middle, on the blanket."], a: 0,
            e: "The basketball players are far away from the camera, so they are in the background. You can see the basket behind them on the left." },
          { q: "Who is holding a slice of watermelon?", o: ["The woman in the striped top.", "The man on the left.", "The woman in the orange top.", "The man on the right."], a: 0,
            e: "The woman with long fair hair and a striped top holds the watermelon. The man on the left holds a glass of orange juice and the man on the right holds a sandwich." },
          { q: "How do the friends look? Choose the best sentence with a reason.", o: ["They look happy because they are laughing.", "They look angry because they are eating.", "They look bored because the sun is shining.", "They look tired because they are sitting."], a: 0,
            e: "The reason must come from the picture: the friends are laughing, so they look happy." }
        ] },
      { art: "tf", id: "picnic-tf", tag: "True or false?", titel: "Check the picture", lead: "True or false? <span class=\"de\">Passt die Aussage zum Bild?</span>",
        aussagen: [
          ["In the foreground, four people are sitting on a blanket.", true],
          ["There are bananas and a bottle of orange juice on the blanket.", true],
          ["In the background, three men are playing basketball.", false],
          ["It looks like a rainy day.", false],
          ["There are more than six people in the picture.", true]
        ] },
      { art: "luecke", id: "picnic-luecke", tag: "Present progressive", titel: "What are the people doing?", lead: "Complete the sentences about the picture. <span class=\"de\">Ganze Formen wie „is holding“ stehen im Kasten. Zwei Formen bleiben übrig.</span>",
        absaetze: [
          ["In the foreground, four friends ", { g: "are sitting" }, " on a blanket."],
          ["The woman in the striped top ", { g: "is holding" }, " a slice of watermelon."],
          ["In the background, two men ", { g: "are playing" }, " basketball."],
          ["The friends ", { g: "are laughing" }, " together."],
          ["The sun ", { g: "is shining" }, "."]
        ], extra: ["sit", "plays"] },
      { art: "offen", id: "picnic-offen", tag: "Write", titel: "Describe the foreground", lead: "Write <b>two sentences</b>. <span class=\"de\">Was siehst du im Vordergrund? Schreibe ganze Sätze mit is / are + -ing.</span>",
        fragen: [{ q: "What can you see in the foreground?", m: "In the foreground, four friends are sitting on a blanket. They are eating fruit and drinking orange juice.", k: ["foreground", "friends|people|four", "sitting|eating|drinking|laughing|holding"], min: 3 }],
        tipp: "Start with: In the foreground, … Use is or are + verb-ing: are sitting, are eating, are laughing." }
    ] },
    { kurz: "Picture 2", ober: "Guess and mood", titel: "Picture 2: at the airport", teile: [
      { art: "text", html: "<p class=\"lead\">You can only <b>see</b> some things in a picture. Other things you <b>guess</b>. A good speaker says the difference. <span class=\"de\">Was siehst du sicher – und was vermutest du nur?</span></p>" +
        pbtBild("airport", "In a busy airport hall, a young woman and a young man hug and laugh in the middle of the picture. On the left, an older man and woman wave and smile. Suitcases stand around them, and a large departure board hangs above the crowd.") },
      { art: "sort", id: "tatsache-vermutung", tag: "Sort", titel: "Fact or guess?", lead: "Is it something you can see, or is it a guess? <span class=\"de\">Tatsache (siehst du) oder Vermutung (denkst du dir)?</span>",
        buckets: ["Fact: I can see it", "Guess: I think so"],
        items: [{ t: "Two young people are hugging in the middle of the picture.", b: 0 }, { t: "On the left, a man and a woman are waving.", b: 0 }, { t: "There are suitcases in the foreground.", b: 0 }, { t: "Behind the people, there is a big information board.", b: 0 },
                { t: "Maybe the young people have not seen each other for a long time.", b: 1 }, { t: "I think the two older people are his parents.", b: 1 }, { t: "It looks like the young man is arriving from a long trip.", b: 1 }, { t: "They might be a family.", b: 1 }] },
      { art: "mc", id: "airport-mc", tag: "Guess", titel: "Find the best guess", lead: "Tick the correct answer.",
        fragen: [
          { q: "How do the people on the left feel? Choose the best guess with a reason from the picture.", o: ["I think they are happy because they are smiling and waving.", "I think they are afraid because they have big suitcases.", "I think they are angry because they are standing.", "I think they are tired because it is dark."], a: 0,
            e: "A good guess uses \"I think\" and a reason you can see: they are smiling and waving." }
        ] },
      { art: "offen", id: "airport-offen", tag: "Write", titel: "Guess and give a reason", lead: "Write <b>two sentences</b>. <span class=\"de\">Wer sind die zwei Menschen links, und warum winken sie? Vermute – und gib einen Grund aus dem Bild.</span>",
        fragen: [{ q: "Who are the two people on the left, and why are they waving? Make a guess.", m: "I think they are the parents of the young woman because they are older and they are smiling. Maybe they are waving because they are happy to see her.", k: ["think|maybe|perhaps|might|looks like|look like", "because|so", "waving|smiling|happy|older|parents|family"], min: 3 }],
        tipp: "Use: I think … / Maybe … Then give a reason with because: … because they are smiling." },
      { art: "text", html: "<h3>A model talk</h3><p>Now listen to a <b>model talk</b> about a different picture: friends at a campsite. Look at the picture. Then listen and answer. <span class=\"de\">Achte darauf, welche Schritte die Sprecherin nacheinander macht.</span></p>" +
        pbtBild("camping", "Four friends sit close together around a small campfire in the evening and laugh. Each of them holds a stick with a white marshmallow. There is a kettle by the fire, a lantern and a plate of corn on the left, and two tents with string lights in the background.") },
      { art: "hoertext", id: "model-camping", tag: "🎧 Listening", titel: "A model talk", lead: "Listen to the talk. <span class=\"de\">Hör zu und löse die Aufgaben. Danach siehst du den Text.</span>", hoertext: "pbt-camping", fragen: [
        { art: "mc", id: "model-fragen", titel: "What does the speaker say?", fragen: [
          { q: "What are the people in the foreground doing?", o: ["They are sitting around a fire and holding sticks.", "They are cooking in a tent.", "They are playing a game.", "They are walking to the car."], a: 0,
            e: "\"Four people are sitting around a small fire. They are holding long sticks …\"" },
          { q: "Why does the speaker think the people are happy?", o: ["Because everybody is laughing.", "Because they are on holiday.", "Because they have food.", "Because it is warm."], a: 0,
            e: "\"Everybody is laughing, so I think they are happy.\" – a guess with a reason from the picture." }
        ] }
      ] }
    ] },
    { kurz: "Mistakes", ober: "Avoid mistakes", titel: "Typical mistakes", teile: [
      { art: "merke", kopf: "WATCH OUT", html: "<ul><li><b>In the picture</b> (not <s>on the picture</s>): In the picture, I can see …</li><li><b>There is</b> + one thing, <b>there are</b> + more things.</li><li>Say what you see <b>now</b> with the present progressive: A girl <u>is reading</u>. <span class=\"de\">(nicht: A girl reads)</span></li><li>After <b>I think</b> the word order stays normal: I think the man <u>is</u> happy.</li></ul>" },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Find the correct sentence", lead: "Tick the correct sentence. <span class=\"de\">Typische Fehler beim Bildvortrag.</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["In the picture, there are two girls.", "On the picture, there are two girls.", "In the picture, there is two girls.", "In the picture, are two girls."], a: 0,
            e: "We say \"in the picture\". And two girls = more than one, so we need \"there are\"." },
          { q: "Which sentence describes what you see right now?", o: ["A girl is reading a book.", "A girl reads a book.", "A girl read a book.", "A girl reading a book."], a: 0,
            e: "For a picture we use the present progressive: is / are + verb-ing. \"A girl reads\" would mean she does it every day." },
          { q: "Which sentence has the right word order?", o: ["I think the man is happy.", "I think the man happy is.", "I think is the man happy.", "I think that the man happy is."], a: 0,
            e: "After \"I think\" the sentence stays normal: subject – verb – rest. The verb does not go to the end, as in German (… glücklich ist)." }
        ] },
      { art: "markieren", id: "fehler-finden", tag: "Find the mistakes", titel: "A talk with three mistakes", finde: "the three mistakes", toleranz: 0,
        satz: "[[On]] the picture there [[is]] three boys. They [[play]] football now and they look happy.",
        e: "In the picture (not on). Three boys = there are. For what you see now: They are playing football." }
    ] },
    { kurz: "Your turn", ober: "Now speak!", titel: "Your turn: Now speak!", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Choose <b>one</b> of the three pictures. First you make a speaking note, then you speak for one minute. <span class=\"de\">Wähle ein Bild. Erst schreibst du Stichpunkte (Sprechzettel), dann sprichst du eine Minute.</span></p>" +
        "<div style=\"display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin-top:10px\">" +
        pbtBild("safari", "A: A guide in a hat points at animals from an open jeep. Four tourists with cameras stand behind the windscreen and smile. In the background an elephant with a baby, a giraffe, trees and a mountain are visible.", "A · Safari") +
        pbtBild("stadium", "B: A group of young fans with painted faces and colourful scarves cheer in a crowded stadium. One of them takes a selfie. They are holding snacks and a drink.", "B · Stadium") +
        pbtBild("interview", "C: Two interviewers, a woman and a man, sit at a table and listen to a young woman who sits with her back to the camera. There is a laptop, a glass of water and a flipchart.", "C · Interview") + "</div>" },
      { art: "merke", kopf: "WORDS YOU MAY NEED", html: "<p><b>A · Safari:</b> jeep, guide, binoculars, camera, elephant, giraffe, to point at</p><p><b>B · Stadium:</b> fans, scarf, crowd, to cheer, to take a selfie, snacks</p><p><b>C · Interview:</b> interviewer, flipchart, laptop, notes, to listen, to be nervous</p><p><b>If you do not know a word:</b> It is a thing for … / It looks like … / Sorry, I mean …<span class=\"de\"> Sag es anders – aber hör nicht auf zu sprechen.</span></p>" },
      { art: "schreiben", id: "sprechzettel", tag: "Speaking note", titel: "Write your speaking note", min: 60,
        auftrag: "<p><b>Write your speaking note</b> (60 words or more). Key words or short sentences are OK.</p><ul><li>In your first sentence, say <b>which picture</b> you have chosen (A, B or C).</li><li>Follow the steps: overview – people and things – where – actions – guess – mood – opinion.</li><li>Use <i>is / are + -ing</i> for the actions.</li></ul>",
        starter: ["I have chosen picture …", "This picture shows …", "In the foreground, …", "In the background, …", "… is / are …-ing.", "Maybe … / I think …", "I like the picture because …"],
        kriterien: ["Der erste Satz nennt das gewählte Bild (A, B oder C).", "Die Notizen geben einen Überblick und sagen, wo etwas ist (zum Beispiel foreground, background, on the left).", "Mindestens zwei Handlungen stehen im present progressive (is / are + -ing).", "Es gibt eine Vermutung (maybe, I think, it might be) und eine Meinung mit because.", "Die Sätze oder Stichpunkte sind verständlich und richtig geschrieben."] },
      { art: "text", html: "<p class=\"lead\"><b>Speak for one minute.</b> Your partner listens and ticks the steps. Then swap roles. <span class=\"de\">Arbeitet zu zweit. Wer spricht, nutzt nur den Sprechzettel. Wer zuhört, hakt ab und gibt Rückmeldung.</span></p>" +
        "<div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · Speaker</h4><ul><li>Take your speaking note – look at key words only.</li><li>Start: <i>This picture shows …</i></li><li>Speak for <b>one minute</b>. Use a timer.</li><li>Use the steps: overview, where, actions, guess, opinion.</li><li>Do not stop. If you forget a word, say it in another way.</li></ul></div>" +
        "<div class=\"sprech-karte b\"><h4>Card B · Partner · Feedback card</h4><ul><li>☐ Overview: <i>This picture shows …</i></li><li>☐ Where: foreground, background, left, right</li><li>☐ At least two actions with <i>is / are + -ing</i></li><li>☐ A guess: <i>maybe / I think</i></li><li>☐ An opinion with <i>because</i></li></ul><p>Say one good thing: <i>I liked …</i><br>Say one tip: <i>Next time, please …</i></p></div></div>" },
      { art: "offen", id: "anschlussfragen", m7: true, tag: "Challenge · Follow-up questions", titel: "Answer the examiner", lead: "After your talk the examiner asks a follow-up question. Write your answer (two sentences). <span class=\"de\">Freiwillig: Nach dem Vortrag stellt die Prüferin Anschlussfragen. Übe die Antwort.</span>",
        fragen: [
          { q: "Would you like to be there? Why (not)?", m: "Yes, I would like to be there because it looks exciting. I like new places and I would like to meet the people.", k: ["yes|no|would|wouldn't|would not", "because", "like|love|exciting|fun|boring|interesting|nice"], min: 3 }
        ],
        tipp: "Answer in whole sentences and always give a reason: Yes, I would, because … / No, I wouldn't, because …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to speak well", lead: "True or false? <span class=\"de\">Aussagen über einen guten Bildvortrag.</span>",
        aussagen: [
          ["A good talk uses whole sentences, not only single words.", true],
          ["I say what people are doing with the present progressive.", true],
          ["\"On the picture\" is the correct way to start.", false],
          ["A guess is a fact, so I can say it without \"maybe\" or \"I think\".", false],
          ["If I forget a word, I stop talking.", false]
        ] },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I give an ", { g: "overview" }, ": This picture shows …"],
          ["Then I say ", { g: "where" }, " things are: in the foreground, in the background …"],
          ["For actions I use am / is / are + verb with ", { g: "-ing" }, "."],
          ["For a guess I say maybe or ", { g: "I think" }, "."],
          ["At the end I say my ", { g: "opinion" }, " and give a reason with because."]
        ], extra: ["fact", "past"] }
    ] }
  ],
  weiter: { text: "Well done! You know the steps of a picture talk and you have spoken about a picture. Practise with other pictures – at home you can record yourself and listen to your talk." }
});
