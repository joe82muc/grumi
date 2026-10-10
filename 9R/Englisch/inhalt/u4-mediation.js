/* Englisch 9R · Unit 4 News from New Zealand · Mediation: Join the club!
   (Sprachmittlung statt Übersetzung in fünf Stufen: finden, auswählen, vereinfachen, adressatengerecht weitergeben, selbst handeln;
   Richtung Englisch → Deutsch: Infoblatt eines Wandervereins in Neuseeland für die Mutter, Deutsch → Englisch: Aushang eines Musikvereins für eine Gastmutter;
   Grammatik der Unit im Kontext: going to-future (Pläne), Passiv erkennen und verstehen ("The walk is cancelled."))
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Freizeit, Vereine).
   Texte: „Tui Valley Tramping Club“ (texte/u4/mediation-tramping.js), „Musikverein Auenbach“ (texte/u4/mediation-aushang.js)
   – beide Vereine und alle Personen sind erfunden. */
D7Kit.seite({
  id: "u4-mediation",
  titel: "Mediation: Join the club!",
  einleitung: "Clubs are a big part of free time. In this module you help people who want to join a club but do not speak the language. First you are <b>Mats</b>, an exchange student in <b>New Zealand</b>: you tell your mother in German about a walking club. Then you help a guest from New Zealand who wants to join a music club in Germany. Mediation is <b>not</b> translating word for word: you decide what is important for the person and say it simply.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know the five steps of mediation.", "🔎 I find and choose the important information about a club.", "💬 I say it simply for the person who needs it.", "🔄 I help in both directions: English to German and German to English.", "🗓️ I talk about plans (going to) and understand rules in the passive: The walk is cancelled."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter, passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach gesagt."],
    tramping: ["tramping", "So sagt man in Neuseeland zu einer langen Wanderung in der Natur. Bei uns würde man Wandern oder Trekking sagen."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a small stand that holds the music“."],
    passiv: ["passive", "Das Passiv sagt, was mit etwas gemacht wird. Wer es macht, ist nicht so wichtig. „The walk is cancelled“ heißt: Die Wanderung wird abgesagt."],
    goingto: ["going to", "Mit „going to“ sagst du, was du vorhast oder was ganz sicher geplant ist: „I am going to ask the leader.“"]
  },
  haupttext: "u4-med-tramping",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">You are <b>Mats</b>, an exchange student in New Zealand. Your host family takes you to an information evening of the <b>Tui Valley Tramping Club</b> (an invented club). You get an English sheet, and you want to join. Back home in Germany, your mother, <b>Frau Seidl</b>, calls you and asks in German: <b>What kind of club is that? What do you do there?</b> She does not read English well. You are her language helper.</p>" },
      { art: "merke", kopf: "MEDIATION – FIVE STEPS", html: "<ol><li><b>Find</b> the information.</li><li><b>Choose</b> what is important for this person.</li><li><b>Simplify</b> it: short sentences, easy words.</li><li><b>Pass it on</b> and think of the person.</li><li><b>Act</b> in a real situation.</li></ol><p>It is <b>not</b> translation. You may leave out unimportant details. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "ordnen", id: "stufen", tag: "Order", titel: "The five steps", lead: "Put the steps of mediation in the right order. <span class=\"de\">Bringe die fünf Stufen in die richtige Reihenfolge.</span>",
        schritte: ["Find the information.", "Choose what is important for the person.", "Make it simple.", "Say it for the person.", "Act in a real situation."] },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["A good helper thinks about who needs the information.", true],
          ["You must say every sentence of the text again.", false],
          ["It is fine to leave out details that nobody needs.", true],
          ["If a word is missing, you can describe it in simple words.", true],
          ["You help in one direction only: from English into German.", false]
        ] },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["tramping", "Wandern (in Neuseeland)"], ["clubhouse", "Vereinsheim"], ["hut", "Hütte"], ["path", "Weg, Pfad"], ["cancelled", "abgesagt"], ["member", "Mitglied"]] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Frau Seidl wants to know: <b>Wann trefft ihr euch? Was muss man mitbringen? Und was ist, wenn das Wetter schlecht ist?</b> <span class=\"de\">Lies das Infoblatt. Nicht alles ist für deine Mutter wichtig.</span></p>" },
      { art: "lesetext", lesetext: "u4-med-tramping" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the sheet say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-med-tramping",
        fragen: [
          { q: "When and where do the members meet?", zeilen: [5, 6], e: "Every second Saturday at eight o'clock, in front of the clubhouse.", tipp: "Look at the paragraph called Meeting point." },
          { q: "What must the members bring?", zeilen: [9, 10], e: "Strong shoes, a rain jacket, water and their own lunch.", tipp: "Look for the words bring and lunch." },
          { q: "How do the members find out that a walk is cancelled?", zeilen: [12, 13], e: "The leader sends a message by seven o'clock that morning.", tipp: "Look at the paragraph about bad weather." },
          { q: "What jobs do the members do for the club?", zeilen: [15, 17], e: "They clear fallen branches from the paths and clean the kitchen in the hut.", tipp: "Look at the paragraph called Helping out." }
        ] },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "What does Frau Seidl need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du deiner Mutter? Was lässt du weg?</span>",
        buckets: ["Tell your mother", "I can leave it out"],
        items: [{ t: "Tramping is the New Zealand word for a long walk", b: 0 }, { t: "They meet every second Saturday at eight", b: 0 }, { t: "You must bring strong shoes, a rain jacket, water and lunch", b: 0 }, { t: "Young people can join from twelve; under sixteen an adult comes along", b: 0 }, { t: "In heavy rain or strong wind the walk is cancelled", b: 0 }, { t: "Members help with the paths and with cleaning the hut", b: 0 },
                { t: "The club shop sells green T-shirts", b: 1 }, { t: "After a cancelled walk there is a hot drink in the clubhouse", b: 1 }, { t: "The list of jobs is on the door", b: 1 }] }
    ] },
    { kurz: "Pass it on", ober: "Steps 3 and 4", titel: "Say it for your mother", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say in German?", lead: "Tick the German sentence that is correct, simple and useful.",
        fragen: [
          { q: "Sheet: „We meet every second Saturday at eight o'clock in front of the clubhouse.“", o: ["Wir treffen uns jeden zweiten Samstag um acht Uhr vor dem Vereinshaus.", "Wir treffen uns jede zweite Samstag acht Uhr vor das Clubhaus.", "Wir treffen uns jeden Samstag um acht Uhr abends.", "Vor dem Vereinshaus gibt es einen Laden mit grünen T-Shirts."], a: 0,
            e: "Short and clear: when and where. Every second Saturday is not every Saturday, and the T-shirt shop does not help your mother." },
          { q: "Sheet: „If there is heavy rain or strong wind, the walk is cancelled.“", o: ["Bei starkem Regen oder Wind fällt die Wanderung aus.", "Bei Regen gehen wir trotzdem, aber langsamer.", "Wenn da ist schwerer Regen, die Wanderung ist gecancelt.", "Die Wanderung fällt immer aus, wenn es kalt ist."], a: 0,
            e: "The passive „is cancelled“ means the walk does not take place. The other sentences change the meaning or are not good German." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to your mother", min: 35,
        auftrag: "<p><strong>Sprachmittlung:</strong> Deine Mutter, Frau Seidl, versteht das englische Infoblatt des Tui Valley Tramping Club nicht. Erkläre ihr <b>auf Deutsch</b> das Wichtige: Was heißt „tramping“? Wann und wo trefft ihr euch? Was musst du mitbringen? Wer darf mitgehen? Was gilt bei schlechtem Wetter? Wobei hilft man im Verein?</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Unwichtiges kannst du weglassen.</p>",
        starter: ["Mama, auf dem Blatt steht:", "Tramping heißt …", "Wir treffen uns …", "Ich muss … mitbringen.", "Wenn das Wetter schlecht ist, …", "Alle Mitglieder helfen …"],
        kriterien: ["Der Text erklärt, dass „tramping“ Wandern bedeutet.", "Er nennt Zeit und Ort des Treffens (jeden zweiten Samstag, acht Uhr, vor dem Vereinsheim).", "Er sagt, was man mitbringen muss (feste Schuhe, Regenjacke, Wasser, Mittagessen).", "Er erklärt das Wetter: Bei starkem Regen oder Wind fällt die Wanderung aus, der Leiter schreibt eine Nachricht.", "Er nennt die Mithilfe (Wege frei machen, Küche in der Hütte putzen).", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung.", "Unwichtiges (grüne T-Shirts, Tee im Vereinsheim, Liste an der Tür) fehlt."] }
    ] },
    { kurz: "German to English", ober: "Steps 1 to 4", titel: "From German into English", teile: [
      { art: "text", html: "<p class=\"lead\">Now the other way round. <b>Riley</b> from New Zealand is staying with your family in Germany. Riley plays the trumpet at home and would like to join the <b>Musikverein Auenbach</b> (an invented music club). Riley's mother, <b>Mrs Harawira</b>, writes to you in English: <b>What is this club? How does it work for Riley?</b> You read the German notice and tell her only what she needs. <span class=\"de\">Du schreibst Mrs Harawira auf Englisch das Wichtige: Was ist der Verein? Wann ist Probe? Muss man sich anmelden? Was braucht Riley?</span></p>" },
      { art: "lesetext", lesetext: "u4-med-aushang" },
      { art: "sort", id: "wichtig-riley", tag: "Choose", titel: "What does Mrs Harawira need?", lead: "Sort the information. <span class=\"de\">Was sagst du Mrs Harawira? Was lässt du weg?</span>",
        buckets: ["Tell Mrs Harawira", "I can leave it out"],
        items: [{ t: "Probe ist jeden Donnerstag um neunzehn Uhr", b: 0 }, { t: "Man kann einfach vorbeikommen, eine Anmeldung ist nicht nötig", b: 0 }, { t: "Der Verein leiht am Anfang ein Instrument aus", b: 0 }, { t: "Einen Notenständer muss man selbst mitbringen", b: 0 }, { t: "Kinder und Jugendliche sind auch ohne Vorkenntnisse willkommen", b: 0 }, { t: "Im Sommer spielt die Kapelle auf dem Dorffest", b: 0 },
                { t: "Der Vorsitzende war früher Schreiner", b: 1 }, { t: "Der Probenraum wurde im Frühjahr neu gestrichen", b: 1 }, { t: "Die Mitglieder verkaufen selbst gebackenen Kuchen", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the two words that tell Riley when to come", toleranz: 0,
        satz: "Probe ist jeden [[Donnerstag]] um [[neunzehn]] Uhr, und der Probenraum wurde im Frühjahr neu gestrichen.",
        e: "Key words: Donnerstag, neunzehn (Uhr) – Riley needs to know the day and the time. The painted room is not important." },
      { art: "mc", id: "riley", tag: "Choose the best sentence", titel: "What do you write to Mrs Harawira?", lead: "Tick the sentence that is correct, simple and clear.",
        fragen: [
          { q: "Notice: „Wer mitmachen möchte, kommt einfach vorbei. Eine Anmeldung vorher ist nicht nötig.“", o: ["Riley can just come along. He does not have to sign up first.", "Riley comes simply by and has no registration before.", "Riley must sign up first, then he can come.", "Everybody can come along, but only on Sundays."], a: 0,
            e: "Simple and true: just come along, no sign-up. The other sentences are not good English or change the meaning." },
          { q: "Notice: „Ein Instrument kann der Verein am Anfang ausleihen.“", o: ["The club can lend Riley an instrument at the beginning.", "The club can borrow an instrument at the start.", "The club gives Riley an instrument for ever.", "The club lends instruments to everybody who pays."], a: 0,
            e: "The club lends it (gives it for a short time). The club does not borrow it. And the notice says nothing about paying." },
          { q: "Notice: „Probe ist jeden Donnerstag um neunzehn Uhr.“", o: ["Practice is every Thursday at seven in the evening.", "The sample is every Thursday at nineteen o'clock.", "Practice is every Thursday at nine in the evening.", "Samples are given on Thursday."], a: 0,
            e: "Probe here means practice or rehearsal, not sample. And neunzehn Uhr is seven in the evening." }
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "You do not know the English word, and Riley's mother may not know it either. Match the German word with a simple description. <span class=\"de\">Wie kannst du das Wort mit einfachen Wörtern umschreiben?</span>",
        paare: [["Blaskapelle", "A band with people who play trumpets and other instruments you blow."], ["Probe", "A meeting where a band plays together to get better."], ["Notenständer", "A small stand that holds the music while you play."], ["ausleihen", "Take something for a short time and then give it back."]] },
      { art: "offen", id: "riley-frage", tag: "Your words", titel: "Write to Mrs Harawira", lead: "Mrs Harawira asks: „What is this Musikverein? When is it, and what does Riley need?“ Answer in three or four English sentences. <span class=\"de\">Nur das Wichtige. Benutze deine Notizen.</span>",
        fragen: [{ q: "What do you tell Mrs Harawira?", m: "The Musikverein is a music club with a brass band. Practice is every Thursday at seven in the evening. Riley can just come along and does not have to sign up. The club can lend him an instrument, but he must bring his own music stand.", k: ["band|brass|music|club", "Thursday", "seven|7|evening", "lend|borrow|instrument|trumpet", "stand|sign up|register|come along|just come"], min: 3 }],
        tipp: "Start like this: The Musikverein is a … Practice is every … Riley can …" }
    ] },
    { kurz: "Language", ober: "Language", titel: "Language: plans and rules", teile: [
      { art: "text", html: "<p class=\"lead\">When you talk about a club, you often say what you <b>are going to do</b>, and you read rules like <b>“The walk is cancelled.”</b> <span class=\"de\">Pläne sagst du mit „going to“. Regeln im Passiv musst du vor allem verstehen.</span></p>" },
      { art: "merke", kopf: "GOING TO AND THE PASSIVE", html: "<ul><li><b>going to</b> = plan: <b>am / is / are + going to + verb</b>. Riley <b>is going to</b> visit the band. I <b>am going to</b> ask the leader.</li><li><button class=\"term\" data-t=\"passiv\">Passive</button> = what happens to something: <b>is / are + verb 3 (cancelled, cleared)</b>. The walk <b>is cancelled</b>. The paths <b>are cleared</b> by the members.</li><li>Past: <b>was / were + verb 3</b>. The room <b>was painted</b> in spring.</li><li><b>by</b> names who does it, but often you leave it out.</li><li>You mostly need to <b>understand</b> the passive. In German it often means <b>wird</b> or <b>man</b>.</li></ul>" },
      { art: "sort", id: "lang-sort", tag: "Language", titel: "A plan or a rule?", lead: "Put each sentence in the right box. <span class=\"de\">Ist es ein Plan oder eine Regel / Tatsache im Passiv?</span>",
        buckets: ["A plan (going to)", "A rule or a fact (passive)"],
        items: [{ t: "Riley is going to play the trumpet.", b: 0 }, { t: "We are going to meet at eight.", b: 0 }, { t: "I am going to ask the leader.", b: 0 }, { t: "The walk is cancelled.", b: 1 }, { t: "Instruments are lent by the club.", b: 1 }, { t: "The room was painted last spring.", b: 1 }] },
      { art: "luecke", id: "lang-luecke", tag: "Language", titel: "Fill in the gaps", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Riley ", { g: "is going to" }, " visit the band on Thursday."],
          ["We ", { g: "are going to" }, " walk to the hut tomorrow."],
          ["If it rains hard, the walk ", { g: "is cancelled" }, "."],
          ["The paths ", { g: "are cleared" }, " by the members."]
        ], extra: ["are going", "was cleared"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Tell Mrs Harawira: Ich werde Riley eine Nachricht schicken.", o: ["I am going to send Riley a message.", "I going to send Riley a message.", "I am going send Riley a message.", "I am go to send Riley a message."], a: 0,
            e: "going to needs am / is / are before it and the basic verb after it." },
          { q: "Which German sentence fits? „The message is sent by the leader.“", o: ["Die Nachricht wird vom Leiter geschickt.", "Die Nachricht schickt den Leiter.", "Der Leiter bekommt die Nachricht.", "Die Nachricht ist für den Leiter."], a: 0,
            e: "is sent by … = wird … geschickt von …. The leader is the one who sends it." }
        ] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: help at the club", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. <span class=\"de\">Spielt das Gespräch zu zweit. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Read the German notice.</li><li>Tell Mrs Harawira: Practice is on Thursday at seven.</li><li>Say: Riley can just come along.</li><li>Say what Riley is going to need (music stand).</li></ul></div><div class=\"sprech-karte b\"><h4>Mrs Harawira</h4><ul><li>Ask: When is the practice?</li><li>Ask: Does Riley have to sign up?</li><li>Ask: What does he need to bring?</li><li>Ask: What does the band do in summer?</li></ul></div></div><div class=\"phrasen\"><span>Practice is on …</span><span>He can just …</span><span>The club can lend …</span><span>He is going to need …</span><span>Could you say that again, please?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Answer Mrs Harawira", lead: "Your host mother says in German: „Sag Mrs Harawira bitte, dass Riley bei der ersten Probe nur zuhören darf und dass wir ihn mit dem Auto hinbringen.“ Say it to Mrs Harawira in one or two English sentences. <span class=\"de\">Sag es freundlich und einfach.</span>",
        fragen: [{ q: "What do you tell Mrs Harawira?", m: "Riley can just listen at the first practice. We are going to take him there by car.", k: ["listen|watch|hear", "first|beginning|start", "car|drive|take", "Riley|he|him"], min: 3 }],
        tipp: "Start like this: Riley can … at the first practice. We are going to …" },
      { art: "offen", id: "challenge", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Your host mother says: „Sag ihr, dass die Dirigentin sehr nett ist und dass Riley eine Trompete ausprobieren darf.“ You do not know the English word for Dirigentin. Describe it and tell Mrs Harawira in one or two English sentences.",
        fragen: [{ q: "What do you tell Mrs Harawira?", m: "The woman who leads the band is very nice. Riley can try a trumpet.", k: ["lead|leader|conductor|teacher|person|woman", "nice|kind|friendly", "trumpet|try|play", "Riley|he|him"], min: 3 }],
        tipp: "Start like this: The woman who … the band is … Riley can …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I think of the ", { g: "person" }, " and what he or she wants to know."],
          ["Then I ", { g: "choose" }, " the important points and ", { g: "leave out" }, " the rest."],
          ["I say it in ", { g: "simple" }, " words and I do not translate ", { g: "word for word" }, "."],
          ["If a word is missing, I ", { g: "describe" }, " it."]
        ], extra: ["copy", "guess"] }
    ] }
  ],
  weiter: { text: "Well done! You can find, choose and pass on information about a club, in both directions. You are ready for the next task." }
});
