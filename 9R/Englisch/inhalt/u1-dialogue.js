/* Englisch 9R · Unit 1 Around Australia · Speaking: Feeling ill – a dialogue
   (Ein Gespräch führen, wenn jemand krank ist: begrüßen, nachfragen, sagen, was fehlt, Rat geben mit should und if-Satz, mitfühlend
   reagieren, verabschieden. Zwei Gespräche als Sprechblasen-Kette (Baustein „kette“ aus e9-kit.js): Die Zeilen der Partnerin / des
   Partners sind vorgegeben, die KI prüft jeden eigenen Beitrag. Danach ein eigener Dialog im Schreibtrainer und das Sprechen zu zweit.)
   LehrplanPLUS E9 1.3 Sprechen (an Gesprächen teilnehmen, Befinden ausdrücken, Rat geben), E9 3 (if-Sätze Typ I, will-future),
   E9 4 (Redemittel einüben und frei verwenden).
   Keine Texte in texte/. Ella und Oscar sind erfunden. */
D7Kit.seite({
  id: "u1-dialogue",
  titel: "Speaking: Feeling ill – a dialogue",
  einleitung: "A friend doesn't feel well. What do you say? In this module you practise a short dialogue: one person feels ill, the other person asks and gives advice. In two conversations the <b>AI checks every line</b> you write – then you speak with a partner.",
  zeit: "etwa 35 Minuten",
  ziele: ["🤒 I can say that I feel ill and what hurts.", "❓ I can ask what the matter is.", "💡 I can give advice with should and with an if-sentence.", "💬 I can react in a friendly way."],
  quiz: { profi: "Dialogue pro" },
  glossar: {
    advice: ["advice", "Rat, Ratschlag: Du sagst jemandem, was er oder sie tun soll. Achtung: „advice“ hat keine Mehrzahl – „good advice“."],
    matter: ["What's the matter?", "Was ist los? Was fehlt dir? So fragst du, wenn jemand krank oder traurig aussieht."],
    temperature: ["a temperature", "Fieber. „I've got a temperature“ heißt: Ich habe Fieber."],
    react: ["to react", "Reagieren: Du zeigst mit einem kurzen Satz, dass du zugehört hast, zum Beispiel „Oh dear!“ oder „Poor you!“."]
  },
  stationen: [
    { kurz: "Phrases", ober: "Station 1", titel: "Words and phrases", teile: [
      { art: "text", html: "<p class=\"lead\">It is Monday morning. Your friend looks pale and tired. A good friend asks – and gives <button class=\"term\" data-t=\"advice\">advice</button>. <span class=\"de\">Zuerst holst du dir die Wörter und Sätze, die du für so ein Gespräch brauchst.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["a headache", "Kopfschmerzen"], ["a sore throat", "Halsschmerzen"], ["a stomach ache", "Bauchschmerzen"], ["a temperature", "Fieber"], ["a cold", "eine Erkältung"], ["dizzy", "schwindelig"], ["to lie down", "sich hinlegen"]] },
      { art: "merke", kopf: "PHRASES FOR YOUR DIALOGUE", html: "<p><b>Ask</b></p><div class=\"phrasen\"><span>How are you today?</span><span>What's the matter?</span><span>What's wrong?</span></div><p><b>Say what's wrong</b></p><div class=\"phrasen\"><span>I don't feel very well.</span><span>I feel awful.</span><span>I've got a …</span><span>My … hurts.</span></div><p><b>Give advice</b></p><div class=\"phrasen\"><span>You should …</span><span>Maybe you should …</span><span>Why don't you …?</span><span>If you …, you'll …</span></div><p><b>React</b></p><div class=\"phrasen\"><span>Oh dear!</span><span>Poor you!</span><span>OK, I'll do that.</span><span>Thanks, that's good advice.</span><span>Get well soon!</span></div>" },
      { art: "sort", id: "funktion", tag: "Sort", titel: "What is the sentence for?", lead: "Put each sentence into the right box. <span class=\"de\">Fragen, sagen, was fehlt, Rat geben oder reagieren?</span>",
        buckets: ["Ask", "Say what's wrong", "Give advice", "React"],
        items: [{ t: "What's the matter?", b: 0 }, { t: "How are you today?", b: 0 },
                { t: "I've got a sore throat.", b: 1 }, { t: "My stomach hurts.", b: 1 }, { t: "I feel dizzy.", b: 1 },
                { t: "Maybe you should lie down.", b: 2 }, { t: "Why don't you drink some tea?", b: 2 }, { t: "If you rest, you'll feel better.", b: 2 },
                { t: "Poor you!", b: 3 }, { t: "Thanks, that's good advice.", b: 3 }] },
      { art: "mc", id: "passt", tag: "What fits?", titel: "Choose the right answer", lead: "Tick the answer that fits. <span class=\"de\">Was passt im Gespräch?</span>",
        fragen: [
          { q: "Your friend says: „I feel really ill.“ What do you say first?", o: ["Oh dear, I'm sorry. What's the matter?", "That's your problem.", "Good. See you later!", "I'm fine, thanks."], a: 0,
            e: "Erst zeigst du Mitgefühl, dann fragst du nach: What's the matter?" },
          { q: "Your friend says: „I've got a temperature.“ What is good advice?", o: ["You should stay in bed and drink a lot.", "You should play football in the sun.", "You should eat three pizzas.", "You should go swimming."], a: 0,
            e: "Bei Fieber braucht der Körper Ruhe und viel zu trinken." },
          { q: "Your friend says: „Thanks, that's good advice.“ What do you say at the end?", o: ["Get well soon!", "What's the matter?", "I've got a headache.", "How much is it?"], a: 0,
            e: "Am Ende wünschst du gute Besserung: Get well soon!" }
        ] }
    ] },
    { kurz: "Build it", ober: "Station 2", titel: "Build a dialogue", teile: [
      { art: "ordnen", id: "aufbau", tag: "Order", titel: "Put the dialogue in order", lead: "Put the lines in the right order. <span class=\"de\">Vom Gruß bis zum Dank.</span>",
        schritte: ["A: Hi! How are you today?", "B: Hi. Not so good. I don't feel very well.", "A: Oh dear. What's the matter?", "B: I've got a cold, and I feel dizzy.", "A: Maybe you should go to the school nurse.", "B: OK, I'll do that.", "A: And if you drink some water, you'll feel a bit better.", "B: Thanks. That's good advice!"] },
      { art: "merke", kopf: "ADVICE WITH IF", html: "<p>With an if-sentence you say what <b>will</b> happen:</p><ul><li><u>If</u> you <u>drink</u> some tea, you<u>'ll feel</u> better.</li><li><u>If</u> you <u>go</u> to bed early, you <u>won't have</u> a headache tomorrow.</li></ul><p>After <b>if</b>: simple present. In the other part: <b>will / won't</b> + verb. <b>you'll</b> = you will. <span class=\"de\">Nach if steht nie will.</span></p>" },
      { art: "luecke", id: "if-rat", tag: "Gap text", titel: "Advice with if-sentences", lead: "Complete the advice. <span class=\"de\">Ganze Formen wie „will feel“ stehen im Kasten. Zwei bleiben übrig.</span>",
        absaetze: [
          ["If you ", { g: "drink" }, " hot tea, your throat ", { g: "will feel" }, " better."],
          ["If you ", { g: "go" }, " to bed early, you ", { g: "won't have" }, " a headache tomorrow."],
          ["If your head still ", { g: "hurts" }, " tomorrow, I ", { g: "will call" }, " the doctor."]
        ], extra: ["will drink", "went"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Spot the right sentence", lead: "Tick the correct sentence. <span class=\"de\">Typische Fehler im Gespräch.</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["I've got a headache.", "I've got headache.", "I have a head hurt.", "My head hurt me."], a: 0,
            e: "Bei Beschwerden steht „a“: a headache, a cold, a sore throat." },
          { q: "Which sentence is correct?", o: ["You should see a doctor.", "You should to see a doctor.", "You should seeing a doctor.", "You shoulds see a doctor."], a: 0,
            e: "Nach should steht das Verb in der Grundform – ohne to." },
          { q: "Which sentence is correct?", o: ["If you rest today, you'll feel better tomorrow.", "If you will rest today, you feel better tomorrow.", "If you rest today, you felt better tomorrow.", "If you resting today, you'll feel better tomorrow."], a: 0,
            e: "If + simple present, im anderen Teil will. Nach if steht kein will." }
        ] }
    ] },
    { kurz: "Dialogue 1", ober: "Station 3", titel: "You feel ill", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Dialogue 1.</b> Your friend Ella talks to you. Read her line and write <b>your</b> answer. The AI checks every line. <span class=\"de\">Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist. Schreibe ganze Sätze.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte b\"><h4>Your role card</h4><ul><li>You don't feel well today.</li><li>You have a <b>headache</b> and a <b>sore throat</b>.</li><li>You did <b>not drink much</b> today.</li><li>Be friendly and say thank you.</li></ul></div></div>" },
      { art: "kette", id: "krank", tag: "Dialogue · AI check", titel: "Talk to Ella", lead: "Write your part. <span class=\"de\">Halte dich an deine Rollenkarte. Der Satzanfang hilft dir.</span>",
        thema: "Gespräch unter Freunden auf Englisch (Englisch 9, Regelklasse): sagen, was einem fehlt",
        rollen: { a: { name: "Ella", ic: "🧑" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Hi! You look tired. How are you today?" },
          { an: "a", sprache: "en", auftrag: "Say hello and say that you don't feel well.", start: "Hi Ella. I",
            kriterien: ["begrüßt Ella", "sagt, dass es ihm oder ihr nicht gut geht"],
            m: "Hi Ella. I don't feel very well today.", k: ["hi|hello|hey", "don't feel|do not feel|feel ill|feel awful|feel bad|feel sick|not well|not so good|not very good"] },
          { von: "a", text: "Oh dear. What's the matter?" },
          { an: "a", sprache: "en", auftrag: "Say what is wrong. Name both problems from your role card.", start: "I've got",
            kriterien: ["nennt Kopfschmerzen", "nennt Halsschmerzen"],
            m: "I've got a headache, and my throat hurts.", k: ["headache|head", "throat"] },
          { von: "a", text: "Poor you! Maybe you should go home and lie down. Have you had anything to drink today?" },
          { an: "a", sprache: "en", auftrag: "Answer her question. Then say what you will do now.", start: "No,",
            kriterien: ["beantwortet die Frage: nicht viel getrunken", "sagt, was er oder sie jetzt tun wird (z. B. I'll go home)"],
            m: "No, not much. OK, I'll go home and lie down.", k: ["no|not|only|just", "i'll|i will|i am going|i'm going"] },
          { von: "a", text: "Good idea. If you drink some hot tea with honey, your throat will feel better." },
          { an: "a", sprache: "en", auftrag: "Say thank you for the advice and say goodbye.", start: "Thanks,",
            kriterien: ["bedankt sich", "verabschiedet sich"],
            m: "Thanks, that's good advice. See you tomorrow!", k: ["thank", "bye|see you|goodbye|later|tomorrow"] }
        ] }
    ] },
    { kurz: "Dialogue 2", ober: "Station 4", titel: "You give advice", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Dialogue 2 – change roles.</b> Now Oscar feels ill, and <b>you</b> help. You start the conversation. <span class=\"de\">Jetzt fragst du nach und gibst Rat – einmal mit should, einmal mit einem if-Satz.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Your role card</h4><ul><li>Start: say hello and ask how Oscar is.</li><li>React in a friendly way.</li><li>Give advice with <b>should</b>.</li><li>Give advice with an <b>if-sentence</b>.</li><li>Say: <i>Get well soon!</i></li></ul></div></div>" },
      { art: "kette", id: "helfen", tag: "Dialogue · AI check", titel: "Help Oscar", lead: "Write your part. <span class=\"de\">Du beginnst das Gespräch.</span>",
        thema: "Gespräch unter Freunden auf Englisch (Englisch 9, Regelklasse): nachfragen und Rat geben",
        rollen: { a: { name: "Oscar", ic: "🧑" }, du: { name: "You" } },
        schritte: [
          { an: "a", sprache: "en", auftrag: "Start the conversation: say hello and ask Oscar how he is.", start: "Hi Oscar!",
            kriterien: ["begrüßt Oscar", "fragt, wie es ihm geht"],
            m: "Hi Oscar! How are you today?", k: ["hi|hello|hey", "how are you|how do you feel|are you ok|are you okay|are you all right|what's up"] },
          { von: "a", text: "Hi. Not so good. I feel really ill." },
          { an: "a", sprache: "en", auftrag: "React in a friendly way and ask what is wrong.", start: "Oh dear.",
            kriterien: ["reagiert mitfühlend (z. B. Oh dear, Poor you, I'm sorry)", "fragt, was los ist"],
            m: "Oh dear, I'm sorry. What's the matter?", k: ["oh dear|oh no|poor you|sorry", "the matter|wrong|the problem|what hurts|what happened"] },
          { von: "a", text: "My stomach hurts, and I've got a temperature. I think I ate too much pizza last night." },
          { an: "a", sprache: "en", auftrag: "Give Oscar advice with should.", start: "Maybe you should",
            kriterien: ["gibt einen passenden Rat (z. B. hinlegen, Tee trinken, nichts Schweres essen, nach Hause gehen)", "benutzt should"],
            m: "Maybe you should lie down and drink some tea.", k: ["should"] },
          { von: "a", text: "OK, I'll do that. But I have football training this afternoon." },
          { an: "a", sprache: "en", auftrag: "Give more advice with an if-sentence.", start: "If you",
            kriterien: ["sagt, was beim Training passiert oder was besser ist (z. B. zu Hause bleiben)", "benutzt einen if-Satz mit simple present nach if"],
            m: "If you go to training today, you will feel worse. Stay at home and rest.", k: ["if", "will|won't|'ll|can|should"] },
          { von: "a", text: "You're right. Thanks. That's good advice!" },
          { an: "a", sprache: "en", auftrag: "Wish him well and say goodbye.", start: "Get well",
            kriterien: ["wünscht gute Besserung", "verabschiedet sich"],
            m: "Get well soon, Oscar! See you.", k: ["get well|feel better|get better", "bye|see you|goodbye|later"] }
        ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your own dialogue – and now speak!", teile: [
      { art: "schreiben", id: "eigener-dialog", tag: "Writing trainer", titel: "Write your own dialogue", min: 50,
        auftrag: "<p>Write a dialogue between <b>A</b> and <b>B</b> with at least eight lines. B doesn't feel well, A asks and gives advice. Choose a <b>new</b> problem, for example a toothache, a cold or a bad cough.</p><p>Schreibe jede Zeile so: „A: …“ und „B: …“. Benutze <b>should</b> und einen <b>if-Satz</b>. Die KI gibt dir danach eine Rückmeldung.</p>",
        starter: ["A: Hi! How are you today?", "B: I don't feel", "A: What's the matter?", "A: Maybe you should", "A: If you", "B: Thanks,"],
        kriterien: ["B sagt, was fehlt.", "A fragt nach und reagiert freundlich.", "A gibt mindestens zwei Ratschläge (zum Beispiel mit should).", "Es gibt einen if-Satz: nach if das simple present, im anderen Teil will.", "Das Gespräch hat einen Gruß und ein Ende."] },
      { art: "text", html: "<p class=\"lead\"><b>Now speak!</b> Find a partner. Read your dialogue with two voices – then put the paper away and play it again. Change roles. <span class=\"de\">Erst mit Blatt, dann ohne. Tauscht die Rollen. Wer keinen Partner hat, spricht beide Rollen halblaut.</span></p>" },
      { art: "tf", id: "selbstcheck", tag: "Check yourself", titel: "A good dialogue", lead: "True or false? <span class=\"de\">Aussagen über ein gutes Gespräch.</span>",
        aussagen: [
          ["In a dialogue you listen to your partner and react to what he or she says.", true],
          ["Short answers like „Oh dear!“ show that you are listening.", true],
          ["Good advice is always an order: Go home! Now!", false],
          ["After if you use will: If you will rest, …", false],
          ["At the end it is friendly to say: Get well soon!", true]
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "What did you learn?", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First you ask: What's the ", { g: "matter" }, "?"],
          ["The ill person says: I've ", { g: "got" }, " a headache."],
          ["You give advice with ", { g: "should" }, ": You should lie down."],
          ["With an if-sentence: If you rest, ", { g: "you'll" }, " feel better."],
          ["At the end you say: Get ", { g: "well" }, " soon!"]
        ], extra: ["hurt", "bad"] }
    ] }
  ],
  weiter: { text: "Well done! You can talk to someone who feels ill: ask, say what is wrong, give advice and react in a friendly way." }
});
