/* Englisch 9R · Dolmetschen · Interpreting: At the nature reserve
   (Dolmetschen in einem Gespräch zwischen einer deutschsprachigen und einer englischsprachigen Person: Sinn statt Wörter, "He says …" oder
   Ich-Form, Wichtiges auswählen, Zahlen, Uhrzeiten und Preise genau, nachfragen, ein Wort umschreiben; Richtung Deutsch → Englisch und
   Englisch → Deutsch, Rollenspiel zu dritt)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.2 Hörverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Onkel Stefan möchte eine Wanderung buchen“ (texte/med/med-park-onkel.js), „Sizakele tells you about the bird walks“
   (texte/med/med-park-ranger.js) – Park, Rangerin und Onkel sind erfunden; die Preise gelten nur in dieser Geschichte. */
D7Kit.seite({
  id: "med-park",
  titel: "Interpreting: At the nature reserve",
  einleitung: "You are on holiday in South Africa with your uncle. In the visitor centre of a nature reserve he wants to book a bird walk. Uncle Stefan speaks <b>no English</b>, the ranger speaks <b>no German</b> – so <b>you</b> are the interpreter. Interpreting is <b>not</b> translating word for word: you pass on the meaning, and you keep numbers, times and prices exact.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what an interpreter does.", "🗣️ I pass on a message with “He says …” or in the I-form.", "🔢 I keep times and prices exact.", "🙋 I ask again or describe a word when I am stuck."],
  quiz: { profi: "Interpreting pro" },
  glossar: {
    interpret: ["to interpret", "Dolmetschen: Du hilfst zwei Personen, die nicht dieselbe Sprache sprechen, in einem Gespräch. Du gibst weiter, was gesagt wird – nicht Wort für Wort, sondern den Sinn."],
    ranger: ["ranger", "Eine Rangerin oder ein Ranger arbeitet in einem Naturpark. Sie kennen das Gebiet und führen Besucher."],
    steep: ["steep", "Ein steiler Weg geht sehr schnell bergauf oder bergab."],
    describe: ["to describe a word", "Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a box for things that people forget“ für eine Fundkiste."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">You are in South Africa with your uncle <b>Stefan</b>. Today you are in the visitor centre of the <b>Marula Plains Nature Reserve</b>. Stefan would like to join a bird walk tomorrow. The <button class=\"term\" data-t=\"ranger\">ranger</button> at the desk is <b>Sizakele</b>. Stefan speaks only German, Sizakele speaks only English. <b>You</b> sit between them and <button class=\"term\" data-t=\"interpret\">interpret</button>.</p><p>The reserve and the people are invented. The prices are only for this story.</p>" },
      { art: "merke", kopf: "INTERPRETING – THE RULES", html: "<ul><li><b>Meaning, not words.</b> Pass on what is important and leave out small talk.</li><li>You can say “<b>She says</b> that … / He would like to know if …” <b>or</b> speak in the <b>I-form</b>: “I would like to book a walk.” Both are fine.</li><li>Do not add anything and do not leave out anything important.</li><li><b>Times, days and prices must be exact.</b></li><li>If you don't understand: <b>ask</b> politely.</li><li>If you don't know a word: <button class=\"term\" data-t=\"describe\">describe it</button>.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["ranger", "Rangerin im Naturpark"], ["bird walk", "Vogelwanderung"], ["flat", "eben, ohne Steigung"], ["steep", "steil"], ["meeting point", "Treffpunkt"], ["adult", "Erwachsene(r)"], ["young person", "Jugendliche(r)"], ["strong shoes", "feste Schuhe"]] },
      { art: "tf", id: "regeln-tf", tag: "True or false?", titel: "What does an interpreter do?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An interpreter repeats the exact words of the speaker.", false],
          ["You may use “She says that …” or the I-form.", true],
          ["You can leave out small details that nobody needs.", true],
          ["If a price is hard to hear, you say a price that sounds similar.", false],
          ["If you did not understand, you ask politely.", true]
        ] }
    ] },
    { kurz: "Useful phrases", ober: "Station 2", titel: "Useful phrases", teile: [
      { art: "sort", id: "phrasen-sort", tag: "Sort", titel: "Which phrase for what?", lead: "Put each phrase into the right box. <span class=\"de\">Weitergeben, nachfragen oder ein Wort umschreiben?</span>",
        buckets: ["Passing it on", "Asking for help", "Describing a word"],
        items: [{ t: "She says that …", b: 0 }, { t: "He would like to book …", b: 0 }, { t: "He asks how long …", b: 0 },
                { t: "Sorry, could you say that again?", b: 1 }, { t: "Could you spell that, please?", b: 1 }, { t: "What does “ranger” mean?", b: 1 },
                { t: "It is a path with no hills.", b: 2 }, { t: "It is a box for things that people forget.", b: 2 }] },
      { art: "luecke", id: "phrasen-luecke", tag: "Useful phrases", titel: "Complete the phrases", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She says ", { g: "that" }, " the walk starts early."],
          ["He would like to know ", { g: "how" }, " much a ticket costs."],
          ["Sorry, could you ", { g: "say" }, " that again, please?"],
          ["I do not know that word, so I will ", { g: "describe" }, " it."],
          ["What does the word “steep” ", { g: "mean" }, "?"]
        ], extra: ["because", "bridge"] },
      { art: "mc", id: "phrasen-mc", tag: "Think", titel: "What do you say?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Sizakele speaks fast and you are not sure about a price. What do you do?", o: ["I ask politely: “Sorry, could you say the price again?”", "I say a price that sounds right.", "I leave the price out.", "I tell my uncle to ask in English."], a: 0,
            e: "A price must be exact. A short, polite question is much better than a guess." },
          { q: "Onkel Stefan asks: „Wie lange dauert das?“ Which sentence passes on his question?", o: ["He would like to know how long it takes.", "He is long, please.", "How long is he taking it?", "He lasts how long, please?"], a: 0,
            e: "This sentence is correct and polite. In the I-form you could also say: “How long does it take?” – both ways are fine." }
        ] }
    ] },
    { kurz: "German to English", ober: "Station 3", titel: "German → English", teile: [
      { art: "text", html: "<p class=\"lead\">Sizakele asks: “<b>How can I help you?</b>” Stefan talks – and not everything is important for her. <span class=\"de\">Lies, was Onkel Stefan sagt. Entscheide, was Sizakele wirklich wissen muss.</span></p>" },
      { art: "lesetext", lesetext: "med-park-onkel" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht die Rangerin? Was kannst du weglassen?</span>",
        buckets: ["Important for the ranger", "I can leave it out"],
        items: [{ t: "Er möchte morgen eine geführte Vogelwanderung zu Fuß machen", b: 0 }, { t: "Er fragt nach Uhrzeit und Dauer", b: 0 }, { t: "Er fragt, wo man sich trifft", b: 0 },
                { t: "Sie sind zu zweit: ein Erwachsener und ein Jugendlicher, was kostet es?", b: 0 }, { t: "Er fragt, was man mitbringen soll", b: 0 }, { t: "Er kann mit seinem Knie nicht steil bergab gehen", b: 0 },
                { t: "Das Fernglas ist neu, ein Geburtstagsgeschenk", b: 1 }, { t: "Der Mietwagen ist inzwischen staubig", b: 1 }, { t: "Im Hotel gab es kein warmes Wasser", b: 1 }] },
      { art: "mc", id: "beste-saetze", tag: "Choose the best sentence", titel: "What do you say to the ranger?", lead: "Tick the sentence that is correct, clear and polite. <span class=\"de\">Es gibt kein Richtig im Wortlaut – aber nur ein Satz stimmt mit allen Angaben überein.</span>",
        fragen: [
          { q: "Stefan: „Frag bitte, um wie viel Uhr sie anfängt und wie lange sie dauert.“", o: ["He would like to know what time the walk starts and how long it takes.", "He would like to know what time the walk ends and how far it is.", "When start walk and how long is it taking?", "Tell me the time and the hours now!"], a: 0,
            e: "Both questions are in the first sentence: the start time and the length. The other options change the question, copy the German or are rude." },
          { q: "Stefan: „Wir sind zu zweit, ein Erwachsener und ein Jugendlicher. Was kostet das?“", o: ["There are two of us, one adult and one young person. How much is it?", "There are two adults. How much is it?", "We are two. What is the price for the whole park?", "We are zu zweit, one Erwachsener and one Jugendlicher. What costs it?"], a: 0,
            e: "The number and the ages matter for the price. Two options change the facts, the last one mixes German and English." },
          { q: "Stefan: „Steil bergab kann ich mit meinem Knie nicht gehen.“", o: ["He cannot walk down steep paths because of his knee.", "He cannot walk uphill because of his knee.", "His knee is steep and goes downhill.", "He does not like walking because it is boring."], a: 0,
            e: "This fact decides which walk is right for him. “Bergab” is downhill, not uphill." },
          { q: "Stefan: „Was müssen wir mitbringen?“", o: ["What do we need to bring?", "What do we want to buy?", "What must we becoming?", "Is there something to eat in the park?"], a: 0,
            e: "Short and polite. The other options change the meaning or are not English." }
        ] },
      { art: "offen", id: "problem", tag: "Your words", titel: "Book the walk", lead: "Tell Sizakele what your uncle would like. Write two or three English sentences. <span class=\"de\">Nur das Wichtige: Was, wann, was er wissen möchte.</span>",
        fragen: [{ q: "How can I help you?", m: "My uncle would like to book a guided bird walk for tomorrow. He would like to know what time it starts, how long it takes and where we meet.", k: ["bird|Bird", "tomorrow|Tomorrow", "time|o'clock|start|begin|when", "long|hours|takes|duration", "meet|meeting|where"], min: 4 }],
        tipp: "You can start with “He would like …” or with “My uncle would like …”. Or use the I-form: “I would like …”." },
      { art: "offen", id: "kosten", tag: "Your words", titel: "Prices and things to bring", lead: "Now ask about the price and about what to bring. Write one or two English sentences. <span class=\"de\">Preis für einen Erwachsenen und einen Jugendlichen, und was man mitbringt.</span>",
        fragen: [{ q: "What do you ask Sizakele?", m: "How much is it for one adult and one young person? And what should we bring?", k: ["how much|price|cost|costs", "adult|adults|grown", "young|youth|teenager|teen", "bring|take|need|pack|wear"], min: 4 }],
        tipp: "Don't forget: there are two people, and they pay different prices." },
      { art: "offen", id: "fragen", tag: "Your words", titel: "The knee", lead: "Your uncle has a problem with his knee. Pass this on to Sizakele in one or two English sentences. <span class=\"de\">Das ist wichtig: Es entscheidet, welche Wanderung passt.</span>",
        fragen: [{ q: "What do you tell Sizakele about the knee?", m: "My uncle has a problem with his knee. He cannot walk down steep paths. Is there an easier walk for him, please?", k: ["knee|Knee", "steep|downhill|down hill|down the hill|going down", "easy|easier|flat|short|problem|suitable|possible", "walk|hike|path|trail"], min: 3 }],
        tipp: "Say what he cannot do, and then ask your question." }
    ] },
    { kurz: "English to German", ober: "Station 4", titel: "English → German", teile: [
      { art: "text", html: "<p class=\"lead\">Now Sizakele answers. Your uncle waits and wants to know what she says. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Du erklärst Onkel Stefan danach auf Deutsch, was wichtig ist.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: "med-park-ranger", fragen: [
        { art: "luecke", id: "notizen", titel: "Notes for Stefan", lead: "Listen and complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["The Lake Walk is short and ", { g: "flat" }, "."],
            ["The Ridge Walk takes ", { g: "four" }, " hours."],
            ["Both walks start at the wooden ", { g: "bridge" }, "."],
            ["A young person pays ", { g: "seventy" }, " rand."],
            ["Please pay before ", { g: "five" }, " o'clock this afternoon."]
          ], extra: ["three", "gate"] },
        { art: "tf", id: "hoer-tf", titel: "True or false?", lead: "Listen again. Tick true or false.",
          aussagen: [
            ["Both walks are flat.", false],
            ["The Ridge Walk starts earlier than the Lake Walk.", true],
            ["Both walks start at the same place.", true],
            ["A young person pays the same as an adult.", false],
            ["Sizakele thinks a jacket is a good idea in the morning.", true],
            ["You can pay when the walk starts.", false]
          ] },
        { art: "mc", id: "deutsch-saetze", titel: "Best German sentence", lead: "Tick the best German sentence for Stefan. <span class=\"de\">Sinn weitergeben, nichts verändern.</span>",
          fragen: [
            { q: "Sizakele: “At the end of the Ridge Walk, there is a steep path down the hill.”", o: ["Bei der langen Wanderung geht es am Ende steil bergab.", "Die lange Wanderung beginnt mit einem steilen Anstieg.", "Beide Wanderungen sind am Ende steil.", "Bei der kurzen Wanderung geht es am Ende steil bergab."], a: 0,
              e: "The steep part belongs to the long walk, and it is at the end. Because of the knee, this detail is important." },
            { q: "Sizakele: “To book, please pay at this desk before five o'clock this afternoon.”", o: ["Zum Buchen bezahlt bitte heute Nachmittag bis fünf Uhr hier am Schalter.", "Zum Buchen bezahlt bitte ab fünf Uhr heute Nachmittag hier am Schalter.", "Ihr bezahlt morgen früh an der Brücke.", "Das Buchen ist heute Nachmittag kostenlos."], a: 0,
              e: "“Before five o'clock” means: until five at the latest. The time and the place must both be right." },
            { q: "Sizakele: “Please bring water, a hat and strong shoes.”", o: ["Bringt bitte Wasser, einen Hut und feste Schuhe mit.", "Bringt bitte Wasser, einen Regenschirm und feste Schuhe mit.", "Bringt bitte nur Wasser mit, alles andere gibt es hier.", "Bringt bitte einen Hut und feste Schuhe, Wasser gibt es kostenlos."], a: 0,
              e: "Three things to bring: water, a hat and strong shoes. Don't change one of them." }
          ] },
        { art: "offen", id: "dolmetschen-de", titel: "Tell Stefan in German", lead: "Stefan asks: „Was hat sie gesagt?“ Erkläre es ihm <b>auf Deutsch</b> in vier bis sechs Sätzen: welche Wanderung passt zu seinem Knie, Uhrzeit, Treffpunkt, Preis, was man mitbringt, bis wann man bezahlt. Nicht Wort für Wort.",
          fragen: [{ q: "Was hat Sizakele gesagt?", m: "Onkel Stefan, es gibt zwei Wanderungen. Für dein Knie passt der Lake Walk besser: Er ist kurz und flach und fängt um halb sieben an. Der lange Ridge Walk hat am Ende einen steilen Weg bergab. Treffpunkt ist die Holzbrücke hinter dem Besucherzentrum. Eine Wanderung kostet für dich hundertzwanzig Rand und für mich siebzig. Wir sollen Wasser, einen Hut und feste Schuhe mitbringen und müssen bis fünf Uhr heute Nachmittag hier bezahlen.", k: ["Lake|lake|kurz|flach|flache|eben|leichter", "Knie|knie|steil|bergab", "halb sieben|halb 7|6.30|6:30|sechs Uhr dreißig|6 Uhr 30", "Brücke|brücke|bruecke|Holzbrücke", "120|hundertzwanzig|hundert zwanzig|hundertundzwanzig", "70|siebzig", "Wasser|wasser|Hut|hut|Schuhe|schuhe", "fünf|5 Uhr|17"], min: 6 }],
          tipp: "Sprich Onkel Stefan direkt an („du“). Nenne Uhrzeit und Preis genau." }
      ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your turn: interpret!", teile: [
      { art: "text", html: "<p class=\"lead\">Now play a conversation in a group of three. It is the next day, after the bird walk. Stefan is back in the visitor centre: he left his <b>cap</b> there yesterday, and he would also like to buy <b>postcards</b>. Take turns: everybody plays each role once. <b>Now interpret!</b> <span class=\"de\">Spielt das Gespräch zu dritt. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Onkel Stefan (speaks only German)</h4><ul><li>Du sagst: Du hast gestern deine Mütze im Besucherzentrum liegen lassen.</li><li>Du fragst, ob jemand sie in der Fundkiste abgegeben hat.</li><li>Du möchtest fünf Postkarten kaufen und fragst nach dem Preis.</li><li>Du fragst, wo man Briefmarken bekommt.</li></ul></div><div class=\"sprech-karte b\"><h4>Sizakele (speaks only English)</h4><ul><li>Ask what the cap looks like.</li><li>Say you can look in the lost property box behind the desk.</li><li>Say a postcard costs twelve rand.</li><li>Say stamps are not sold here: the post office in town has them.</li></ul></div><div class=\"sprech-karte c\"><h4>You (interpreter)</h4><ul><li>Pass on everything in both directions.</li><li>Use “He says …” or the I-form.</li><li>Ask again if you don't understand.</li><li>Describe a word if it is missing.</li></ul></div></div><div class=\"phrasen\"><span>She says that …</span><span>He would like to know if …</span><span>Could you say that again, please?</span><span>It is a box for …</span><span>Is that right?</span></div>" },
      { art: "offen", id: "challenge-wort", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Stefan says: „Frag bitte, ob jemand meine Mütze in der Fundkiste abgegeben hat.“ You don't know the word for “Fundkiste”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Sizakele?", m: "My uncle left his cap here yesterday. Is there a box for things that people forget? Did somebody put it there?", k: ["cap|hat", "box|place|desk|office", "forget|forgot|lost|left|find|found", "yesterday|Yesterday"], min: 3 }],
        tipp: "Don't translate the word. Say what it is: a box for things that people have left behind." },
      { art: "offen", id: "challenge-nachfragen", m7: true, tag: "Challenge", titel: "You are not sure", lead: "Sizakele tells you the price of a postcard. It sounds like “thirteen” or “thirty”, and you are not sure. Write what you say, in one or two English sentences.",
        fragen: [{ q: "What do you say to Sizakele?", m: "Sorry, did you say thirteen or thirty rand? Could you say the price again, please?", k: ["sorry|excuse|pardon", "thirteen|thirty|price|number|rand|how much", "again|repeat|once more", "please|could|can"], min: 3 }],
        tipp: "Be polite and ask for the number again. Do not guess a price." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of interpreting", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How interpreting works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I ", { g: "listen" }, " carefully to the whole message."],
          ["I keep only what the other person ", { g: "needs" }, " to know."],
          ["I pass on the ", { g: "meaning" }, ", not every word."],
          ["Times, days and prices must be ", { g: "exact" }, "."],
          ["If I am not sure, I ", { g: "ask" }, " politely."]
        ], extra: ["guess", "hurry"] }
    ] }
  ],
  weiter: { text: "Well done! You can interpret in a conversation – from German into English and from English into German. Remember: meaning first, times and prices exact, ask if you are not sure." }
});
