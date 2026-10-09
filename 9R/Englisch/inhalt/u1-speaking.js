/* Englisch 9R · Unit 1 Around Australia · Speaking: Talk about a picture, talk to the doctor
   (Sprechen vorbereiten und anleiten: Teil A ein Bild beschreiben – Ortsangaben, present progressive (Revision), Vermutungen
   und Meinung; Teil B Rollenspiel in der Arztpraxis – Beschwerden, Rat mit should / Don't / if-Sätzen Typ I, Rollenkarten)
   LehrplanPLUS E9 1.2 Sprechen (zusammenhängend und im Gespräch), E9 2 (Redemittel), E9 3, E9 5 (Alltag, Gesundheit).
   Texte: Musterdialog „At the doctor's: blisters after a hike“ (texte/u1/speaking-blisters.js) – Ort, Praxis und Personen sind
   erfunden. Das Sprechen selbst kann das Gerät nicht bewerten: Die Kinder sprechen zu zweit oder halblaut für sich. */
D7Kit.seite({
  id: "u1-speaking",
  titel: "Speaking: Talk about a picture, talk to the doctor",
  einleitung: "Two speaking tasks, one module: First you describe a busy market scene and say what you think about it. Then you play a role play at the doctor's. Here you <b>learn the phrases, practise them and get ready</b> – and then you speak out loud.",
  zeit: "etwa 40 Minuten",
  ziele: ["🖼️ I describe a picture: where things are and what people are doing.", "💭 I guess and say what I think.", "🩺 I say what is wrong and I give advice.", "🎭 I play a role and use my card for key words only."],
  quiz: { profi: "Speaking pro" },
  glossar: {
    progressive: ["present progressive", "Verlaufsform der Gegenwart: am/is/are + Verb mit -ing. Sie sagt, was gerade passiert: The boy is playing the guitar."],
    foreground: ["foreground / background", "Vordergrund (vorne im Bild) und Hintergrund (hinten im Bild)."],
    cardrole: ["role card", "Rollenkarte. Sie gibt nur Stichpunkte vor. Du sprichst in ganzen Sätzen – du liest nichts vor."],
    sting: ["sting", "Stich (zum Beispiel von einer Biene oder Wespe). Ein Insekt „stings“ – es sticht."],
    sprained: ["sprained", "verstaucht. A sprained wrist = ein verstauchtes Handgelenk."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you speak", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Speaking is different from reading: nobody can see your answers – so you have to <b>say</b> them. This module helps you to get ready. The speaking part is your job!</p><p><b>Now speak!</b> Find a partner or talk to yourself quietly. <span class=\"de\">Such dir eine Partnerin oder einen Partner – oder sprich halblaut für dich. Genau das übst du in den Stationen 2, 3 und 5.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["foreground", "Vordergrund"], ["background", "Hintergrund"], ["on the left", "links"], ["on the right", "rechts"], ["in the middle", "in der Mitte"], ["stall", "Marktstand"], ["shade", "Schatten"], ["It looks like …", "Es sieht so aus, als …"]] },
      { art: "merke", kopf: "SPEAKING TIP", html: "<p>Good speakers do three things:</p><ul><li>They speak in <b>whole sentences</b>, not in single words.</li><li>They use <b>phrases</b> they have practised.</li><li>If they don't know a word, they say it in a different way. They don't stop.</li></ul>" }
    ] },
    { kurz: "Picture", ober: "Part A · Talk about a picture", titel: "Describe a picture", teile: [
      { art: "text", html: "<p class=\"lead\">There is no photo here – you get a <b>picture card in words</b>. Read it and imagine the scene. <span class=\"de\">Stell dir das Bild vor: Ein Samstagsmarkt in einer kleinen Stadt in Australien.</span></p><p><b>Picture:</b> Saturday market in <b>Bellbird Creek</b> (an invented town)</p>" },
      { art: "karten", karten: [
        { ic: "🧺", titel: "In the foreground", text: "A woman is selling fruit. Two girls are buying apples." },
        { ic: "🎸", titel: "On the left", text: "A boy is playing the guitar." },
        { ic: "🐕", titel: "In the middle", text: "A dog is sleeping under a table." },
        { ic: "🍅", titel: "On the right", text: "A man is carrying a box of tomatoes." },
        { ic: "☀️", titel: "In the background", text: "The sun is shining. A big tree gives shade." }
      ] },
      { art: "merke", kopf: "PRESENT PROGRESSIVE", html: "<p>What is happening <b>right now</b>? Use <b>am / is / are + verb-ing</b>:</p><ul><li>A woman <u>is selling</u> fruit.</li><li>Two girls <u>are buying</u> apples.</li><li>The sun <u>is shining</u>.</li></ul><p>Not: <s>The boy plays the guitar now.</s> – Not: <s>The boy playing …</s></p>" },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Spot the right sentence", lead: "Tick the correct sentence. <span class=\"de\">Typische Fehler beim Bildbeschreiben.</span>",
        fragen: [
          { q: "Which sentence describes the picture correctly?", o: ["The boy is playing the guitar.", "The boy play the guitar now.", "The boy is play the guitar.", "The boy playing the guitar."], a: 0,
            e: "Present progressive: is + verb-ing (is playing)." },
          { q: "Which sentence is correct?", o: ["Two girls are buying apples.", "Two girls is buying apples.", "Two girls are buy apples.", "Two girls buying apples."], a: 0,
            e: "Two girls = plural, so you need are, and the verb ends in -ing." },
          { q: "Which sentence tells you WHERE something is?", o: ["In the middle, there is a dog under a table.", "I like the dog because it is cute.", "It looks like the dog is tired.", "The dog is very old."], a: 0,
            e: "\"In the middle\" is a place word. The other sentences give an opinion, a guess or a fact without a place." }
        ] },
      { art: "luecke", id: "progressive", tag: "Gap text", titel: "What are the people doing?", lead: "Complete the sentences about the picture. <span class=\"de\">Zwei Wörter bleiben übrig. Ganze Formen wie „is selling“ stehen im Kasten.</span>",
        absaetze: [
          ["In the foreground, a woman ", { g: "is selling" }, " fruit."],
          ["Two girls ", { g: "are buying" }, " apples."],
          ["On the left, the boy ", { g: "is playing" }, " the guitar."],
          ["The dog under the table ", { g: "is sleeping" }, " – it doesn't move."],
          ["It is a lovely day: the sun ", { g: "is shining" }, "."]
        ], extra: ["sells", "play"] },
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "A good picture description", lead: "Put the sentences in the right order. <span class=\"de\">Erst das ganze Bild, dann vorne nach hinten, am Ende deine Meinung.</span>",
        schritte: ["This picture shows a market in a small Australian town.", "In the foreground, a woman is selling fruit.", "On the left, a boy is playing the guitar.", "In the background, the sun is shining.", "I think it is a Saturday morning.", "I like the picture because everybody looks happy."] }
    ] },
    { kurz: "Opinion", ober: "Part A · Talk about a picture", titel: "Guess and give your opinion", teile: [
      { art: "merke", kopf: "THREE STEPS", html: "<p>A picture talk has <b>three steps</b>:</p><div class=\"phrasen\"><span>1 Describe: This picture shows … / In the foreground … / A boy is …-ing.</span><span>2 Guess: Maybe … / I think … / It looks like …</span><span>3 Opinion: I like the picture because … / In my opinion …</span></div>" },
      { art: "sort", id: "drei-schritte", tag: "Sort", titel: "Describe, guess or opinion?", lead: "Put each sentence into the right box. <span class=\"de\">Beschreiben, vermuten oder Meinung sagen?</span>",
        buckets: ["Describe", "Guess", "Say what you think"],
        items: [{ t: "A woman is selling fruit.", b: 0 }, { t: "On the left, a boy is playing the guitar.", b: 0 }, { t: "In the background, the sun is shining.", b: 0 },
                { t: "Maybe it is Saturday morning.", b: 1 }, { t: "It looks like the girls are friends.", b: 1 }, { t: "I think the dog is tired.", b: 1 },
                { t: "I like the picture because it is colourful.", b: 2 }, { t: "I would like to go to this market.", b: 2 }, { t: "In my opinion, the picture looks very friendly.", b: 2 }] },
      { art: "mc", id: "vermuten", tag: "Guess", titel: "How sure are you?", lead: "Tick the correct answer.",
        fragen: [
          { q: "You are NOT sure about something in the picture. Which sentence fits?", o: ["Maybe the boy is a student.", "There is a boy.", "The boy is playing.", "The boy has a guitar."], a: 0,
            e: "\"Maybe\" shows that you are guessing." }
        ] },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Look at the picture card again and talk for <b>one minute</b>. Find a partner or talk to yourself quietly. <span class=\"de\">Sprich eine Minute – am besten mit Stoppuhr. Beginne mit „This picture shows …“.</span></p>" },
      { art: "offen", id: "eigene-beschreibung", tag: "Your speaking note", titel: "Write your speaking note", lead: "Write 3 or 4 sentences you can say about the picture. <span class=\"de\">Das ist dein Sprechzettel. Schreibe ganze Sätze mit is/are + -ing.</span>",
        fragen: [{ q: "Describe the picture: say what it shows, where something is and what people are doing.", m: "This picture shows a market. In the foreground, a woman is selling fruit. On the left, a boy is playing the guitar. In the middle, a dog is sleeping.", k: ["picture|market|shows", "foreground|background|left|right|middle", "selling|playing|sleeping|buying|shining|carrying"], min: 12 }],
        tipp: "Start like this: This picture shows … / In the foreground … / On the left … Use is or are + verb-ing." },
      { art: "offen", id: "meinung", m7: true, tag: "Your opinion", titel: "Guess and say what you think", lead: "Write two sentences: one guess and one opinion. <span class=\"de\">Eine Vermutung (Maybe / I think / It looks like) und eine Meinung (I like … because …).</span>",
        fragen: [{ q: "What do you think about the picture? Make a guess and give your opinion.", m: "I think the girls are friends because they are laughing. I like the picture because the people look happy.", k: ["think|maybe|looks like|look like", "like|because|opinion"], min: 10 }],
        tipp: "Start with: Maybe … / I think … / It looks like … Then: I like the picture because …" }
    ] },
    { kurz: "Doctor", ober: "Part B · At the doctor's", titel: "At the doctor's: phrases", teile: [
      { art: "text", html: "<p class=\"lead\">In Australia you can also go to a doctor on holiday. The doctor asks what is wrong and then gives <b>advice</b>. Learn who says what. <span class=\"de\">Wer sagt was? Und wie bleibst du höflich?</span></p>" },
      { art: "merke", kopf: "PHRASES", html: "<p><b>Patient</b></p><div class=\"phrasen\"><span>I've got …</span><span>My … hurts.</span><span>It started yesterday.</span><span>How often should I …?</span><span>Can I …?</span></div><p><b>Doctor</b></p><div class=\"phrasen\"><span>What's the problem?</span><span>Let me have a look.</span><span>You should …</span><span>Don't …</span><span>If it doesn't get better, come back.</span></div>" },
      { art: "paare", id: "beschwerden", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Wörter für die Arztpraxis.</span>",
        paare: [["sting", "Stich"], ["sunburn", "Sonnenbrand"], ["sprained wrist", "verstauchtes Handgelenk"], ["cream", "Creme"], ["plaster", "Pflaster"], ["itchy", "juckend"], ["swollen", "geschwollen"]] },
      { art: "sort", id: "wer-sagt", tag: "Sort", titel: "Patient or doctor?", lead: "Who says it? <span class=\"de\">Ordne jeden Satz der Patientin / dem Patienten oder dem Arzt zu.</span>",
        buckets: ["Patient", "Doctor"],
        items: [{ t: "I've got a sore wrist.", b: 0 }, { t: "My arm hurts.", b: 0 }, { t: "It started yesterday.", b: 0 }, { t: "How often should I put cream on it?", b: 0 },
                { t: "What's the problem?", b: 1 }, { t: "Let me have a look.", b: 1 }, { t: "You should rest your wrist.", b: 1 }, { t: "Don't go swimming for two days.", b: 1 }, { t: "If it doesn't get better, come back.", b: 1 }] },
      { art: "mc", id: "hoeflich", tag: "Polite or not?", titel: "Be polite", lead: "Tick the polite answer. <span class=\"de\">Im Gespräch mit einer Ärztin sprichst du höflich.</span>",
        fragen: [
          { q: "You enter the room. What do you say?", o: ["Good morning. I've got a problem with my arm.", "Hey! My arm. Look at it.", "Give me a cream now!", "My arm is bad. Do something."], a: 0,
            e: "Greet first, then say the problem in a whole sentence." },
          { q: "Which sentence is polite advice from a doctor?", o: ["You should rest your wrist for a few days.", "Rest it. Now.", "Why are you so silly?", "That is your problem."], a: 0,
            e: "\"You should …\" is friendly advice. The other sentences sound rude." },
          { q: "You did not understand the doctor. What do you say?", o: ["Sorry, could you say that again, please?", "What? Say it again!", "I don't understand you.", "Speak slower!"], a: 0,
            e: "Say \"Sorry\" and ask politely with \"could you … please?\"" }
        ] },
      { art: "luecke", id: "if-rat", tag: "Gap text", titel: "Advice with if-sentences", lead: "Complete the doctor's advice. <span class=\"de\">Achtung: Nach if steht kein will. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["If your wrist ", { g: "hurts" }, " a lot, you ", { g: "will need" }, " a bandage."],
          ["If you ", { g: "put" }, " cream on the sunburn, it ", { g: "will feel" }, " better."],
          ["If the sting ", { g: "gets" }, " bigger or red, come back tomorrow."]
        ], extra: ["will swell", "needed"] }
    ] },
    { kurz: "Role play", ober: "Part B · At the doctor's", titel: "Listen, then play the role play", teile: [
      { art: "ordnen", id: "dialog", tag: "Order", titel: "Put the dialogue in order", lead: "Put the lines in the right order. <span class=\"de\">Ein Gespräch beim Arzt – vom Gruß bis zum Abschied.</span>",
        schritte: ["Doctor: Good afternoon. What's the problem?", "Patient: My wrist hurts. I fell off my bike yesterday.", "Doctor: Let me have a look. Does it hurt when I touch it here?", "Patient: Yes, a lot.", "Doctor: I think it's sprained. You should wear a bandage and rest it.", "Patient: Can I go to school tomorrow?", "Doctor: Yes, but don't play sport. If it isn't better on Friday, come back.", "Patient: Thank you, doctor. Goodbye."] },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", titel: "A model dialogue", lead: "Listen to a model dialogue. Another patient, another problem. <span class=\"de\">Hör zu, wie die beiden sprechen – und achte auf die Redemittel.</span>", hoertext: "u1-speak-doctor", fragen: [
        { art: "mc", id: "hoer-fragen", titel: "What do you hear?", fragen: [
          { q: "What is Leo's problem?", o: ["He has blisters on his feet.", "He has a sunburn.", "He has a sprained wrist.", "He has a sting on his arm."], a: 0,
            e: "Leo went hiking and got two big blisters." },
          { q: "What does the doctor say about his new boots?", o: ["He shouldn't wear them this week.", "He should wear them every day.", "He should wear them to play football.", "He should throw them away."], a: 0,
            e: "\"Don't wear your new boots this week.\"" },
          { q: "When should Leo come back?", o: ["If the skin gets red or hot.", "On Friday morning.", "Every morning.", "In one month."], a: 0,
            e: "The doctor uses an if-sentence: If the skin gets red or hot, come back." }
        ] }
      ] },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> You need a partner – or talk to yourself quietly and play both roles. <span class=\"de\">Spielt das Rollenspiel in zwei Runden. Lest nicht ab: Die Karte gibt dir nur Stichwörter.</span></p><p class=\"de\">Rolle A und B tauschen. Zuerst Situation 1 (Insektenstich), dann Situation 2 (Sonnenbrand).</p>" },
      { art: "text", html: "<h3>Situation 1 · Insect sting</h3><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · Patient</h4><ul><li>Say hello.</li><li>Say what the problem is: <i>I've got a sting on my arm.</i></li><li>Say when: <i>It started yesterday evening.</i> <span class=\"de\">(gestern Abend)</span></li><li>It is red, swollen and itchy.</li><li>Ask: <i>How often should I put cream on it?</i></li><li>Ask: <i>Can I go swimming?</i> <span class=\"de\">(darf ich schwimmen?)</span></li><li>Say thank you.</li></ul></div><div class=\"sprech-karte b\"><h4>Card B · Doctor</h4><ul><li>Greet the patient: <i>Good morning. What's the problem?</i></li><li>Ask: <i>When did it start?</i></li><li>Look at it: <i>Let me have a look.</i></li><li>Advice: put cream on it three times a day.</li><li>Don't scratch it. <span class=\"de\">(nicht kratzen)</span></li><li>Swimming? <i>Yes, if it doesn't hurt.</i></li><li>Say: <i>If it gets bigger, come back.</i></li></ul></div></div>" },
      { art: "text", html: "<h3>Swap roles · Situation 2 · Sunburn</h3><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Card A · Doctor</h4><ul><li>Greet the patient and ask what is wrong.</li><li>Ask: <i>How long were you in the sun?</i></li><li>Look at the shoulders: <i>Let me have a look.</i></li><li>Advice: <i>You should put cream on your shoulders.</i></li><li>Don't go out in the sun tomorrow.</li><li>Say: <i>If it hurts a lot, come back.</i></li></ul></div><div class=\"sprech-karte b\"><h4>Card B · Patient</h4><ul><li>Say hello. Say the problem: <i>I've got sunburn on my shoulders.</i></li><li>Say: <i>I was on the beach for five hours.</i></li><li>Say that it hurts when you touch it.</li><li>Ask: <i>Should I wear a T-shirt?</i></li><li>Ask: <i>Can I go to school tomorrow?</i></li><li>Say thank you and goodbye.</li></ul></div></div><p class=\"de\">Hilfe: sunburn = Sonnenbrand, shoulders = Schultern, to touch = berühren.</p>" },
      { art: "offen", id: "rat-schreiben", m7: true, tag: "Your advice", titel: "Give advice", lead: "Write three sentences with <b>should</b>, <b>Don't</b> and an <b>if-sentence</b>. <span class=\"de\">Dein Freund hat Sonnenbrand auf den Schultern. Was rätst du?</span>",
        fragen: [{ q: "Give your friend advice for sunburn on his shoulders.", m: "You should put cream on your shoulders. Don't go out in the sun tomorrow. If it hurts a lot, go to the doctor.", k: ["should", "don't|do not", "if"], min: 12 }],
        tipp: "Use: You should … / Don't … / If it …, … (after if: no will)" },
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "How to speak well", lead: "True or false? <span class=\"de\">Aussagen über gutes Sprechen.</span>",
        aussagen: [
          ["In a role play you should read every word from the card.", false],
          ["You can use the card for key words and then speak freely.", true],
          ["If you don't understand, you can ask: Sorry, could you say that again, please?", true],
          ["For a picture description it is good to use is/are + verb-ing for what people are doing.", true],
          ["When you are not sure about a picture, you must never guess.", false]
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "text", html: "<p class=\"lead\">My checklist after the role play – say <i>yes</i> to yourself:</p><ul><li>☐ I said what the problem is.</li><li>☐ I gave or asked for advice.</li><li>☐ I used at least one if-sentence.</li><li>☐ I spoke in whole sentences.</li></ul>" },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First, say what the picture ", { g: "shows" }, " and where things are."],
          ["Use is/are + verb with ", { g: "-ing" }, " to say what people are doing now."],
          ["When you are not sure, say ", { g: "Maybe" }, " or It looks like …"],
          ["At the doctor's the patient says what the ", { g: "problem" }, " is."],
          ["The doctor gives advice: If it doesn't get better, ", { g: "come back" }, "."]
        ], extra: ["reads", "shouting"] }
    ] }
  ],
  weiter: { text: "Well done! You can describe a picture and play a role at the doctor's. Next: Mediation – help someone who does not speak English." }
});
