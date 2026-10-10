/* Englisch 9R · Dolmetschen · Interpreting: At the doctor's
   (Dolmetschen in einem Gespräch zwischen einer deutschsprachigen und einer englischsprachigen Person: Sinn statt Wörter, "He says …" oder
   Ich-Form, Wichtiges auswählen, Zahlen und Zeiten genau, nachfragen, ein Wort umschreiben; Richtung Deutsch → Englisch und Englisch → Deutsch,
   Rollenspiel zu dritt)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.2 Hörverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Opa erzählt, was los ist“ (texte/med/med-doctor-opa.js), „Dr Abrahams answers“ (texte/med/med-doctor-aerztin.js) – Praxis,
   Ärztin und Opa sind erfunden; die Seite gibt keinen medizinischen Rat. */
D7Kit.seite({
  id: "med-doctor",
  titel: "Interpreting: At the doctor's",
  einleitung: "You are on holiday in Cape Town with your grandpa. He has stomach trouble, and you go to see a doctor. Grandpa speaks <b>no English</b>, the doctor speaks <b>no German</b> – so <b>you</b> are the interpreter. Interpreting is <b>not</b> translating word for word: you pass on the meaning, and you keep numbers and times exact.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what an interpreter does.", "🗣️ I pass on a message with “He says …” or in the I-form.", "🔢 I keep numbers and times exact.", "🙋 I ask again or describe a word when I am stuck."],
  quiz: { profi: "Interpreting pro" },
  glossar: {
    interpret: ["to interpret", "Dolmetschen: Du hilfst zwei Personen, die nicht dieselbe Sprache sprechen, in einem Gespräch. Du gibst weiter, was gesagt wird – nicht Wort für Wort, sondern den Sinn."],
    upset: ["upset stomach", "Ein verstimmter Magen: Der Bauch tut weh oder macht Beschwerden, aber es ist nichts Schlimmes."],
    spicy: ["spicy", "Scharf gewürzt, zum Beispiel mit Chilli."],
    appetite: ["appetite", "Der Appetit ist die Lust zu essen. Wenn man keinen Appetit hat, mag man nichts essen."],
    describe: ["to describe a word", "Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „something you swallow with water“ für eine Tablette."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">You are in Cape Town with your grandpa <b>Helmut</b>. Since Tuesday evening he has had stomach ache, and today, on Wednesday, you go to the <b>Harbour View Practice</b>. The doctor is <b>Dr Abrahams</b>. Helmut speaks only German, Dr Abrahams speaks only English. <b>You</b> sit between them and <button class=\"term\" data-t=\"interpret\">interpret</button>.</p><p>The practice and the people are invented. The page is for practising language – it does not give medical advice.</p>" },
      { art: "merke", kopf: "INTERPRETING – THE RULES", html: "<ul><li><b>Meaning, not words.</b> Pass on what is important.</li><li>You can say “<b>He says</b> that … / He would like to know if …” <b>or</b> speak in the <b>I-form</b>: “I have stomach ache.” Both are fine.</li><li>Do not add anything and do not leave out anything important.</li><li><b>Numbers, times and days must be exact.</b></li><li>If you don't understand: <b>ask</b> politely.</li><li>If you don't know a word: <button class=\"term\" data-t=\"describe\">describe it</button>.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["stomach ache", "Bauchschmerzen"], ["to feel sick", "sich übel fühlen"], ["appetite", "Lust zu essen"], ["upset stomach", "verstimmter Magen"], ["allergic", "allergisch"], ["spicy", "scharf gewürzt"], ["tablet", "Tablette"], ["fever", "Fieber"]] },
      { art: "tf", id: "regeln-tf", tag: "True or false?", titel: "What does an interpreter do?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An interpreter translates every single word.", false],
          ["An interpreter may say “He says that …” or speak in the I-form.", true],
          ["Times and numbers must be exact.", true],
          ["If you don't understand something, you guess.", false],
          ["An interpreter adds his or her own ideas.", false]
        ] }
    ] },
    { kurz: "Useful phrases", ober: "Station 2", titel: "Useful phrases", teile: [
      { art: "sort", id: "phrasen-sort", tag: "Sort", titel: "Which phrase for what?", lead: "Put each phrase into the right box. <span class=\"de\">Weitergeben, nachfragen oder ein Wort umschreiben?</span>",
        buckets: ["Passing it on", "Asking for help", "Describing a word"],
        items: [{ t: "He says that …", b: 0 }, { t: "She would like to know if …", b: 0 }, { t: "He asks when …", b: 0 },
                { t: "Could you repeat that, please?", b: 1 }, { t: "What does “upset” mean?", b: 1 }, { t: "Could you speak more slowly, please?", b: 1 },
                { t: "It is something you drink when you feel ill.", b: 2 }, { t: "It is a small thing you swallow with water.", b: 2 }] },
      { art: "luecke", id: "phrasen-luecke", tag: "Useful phrases", titel: "Complete the phrases", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["He ", { g: "says" }, " that his stomach hurts."],
          ["She would like to know ", { g: "if" }, " he can fly on Saturday."],
          ["Sorry, could you ", { g: "repeat" }, " that, please?"],
          ["What does the word “spicy” ", { g: "mean" }, "?"],
          ["Could you speak more ", { g: "slowly" }, ", please?"]
        ], extra: ["yesterday", "tablet"] },
      { art: "mc", id: "phrasen-mc", tag: "Think", titel: "What do you say?", lead: "Tick the correct answer.",
        fragen: [
          { q: "You did not understand the doctor. What do you say?", o: ["Sorry, could you repeat that, please?", "Speak German, please!", "I will just guess.", "Nothing – Grandpa will understand."], a: 0,
            e: "Asking politely is part of interpreting. A wrong answer is worse than a short question." },
          { q: "Opa wants to know if he can drink coffee. Which sentence passes on his question politely?", o: ["He would like to know if he can drink coffee.", "He wants coffee, yes or no?", "Coffee drink can he?", "Tell him about coffee now."], a: 0,
            e: "“He would like to know if …” is polite and correct. You could also use the I-form: “Can I drink coffee?” – both ways are fine." }
        ] }
    ] },
    { kurz: "German to English", ober: "Station 3", titel: "German → English", teile: [
      { art: "text", html: "<p class=\"lead\">Dr Abrahams asks: “<b>What seems to be the problem?</b>” Grandpa talks – a lot. You have to decide what the doctor needs. <span class=\"de\">Lies, was Opa sagt. Nicht alles ist für die Ärztin wichtig.</span></p>" },
      { art: "lesetext", lesetext: "med-doctor-opa" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht die Ärztin? Was kannst du weglassen?</span>",
        buckets: ["Important for the doctor", "I can leave it out"],
        items: [{ t: "Bauchweh seit Dienstagabend, vor allem nach dem Essen", b: 0 }, { t: "Ihm ist übel und er hat keinen Appetit", b: 0 }, { t: "Er hat kein Fieber", b: 0 },
                { t: "Er nimmt sonst keine Tabletten und ist nicht allergisch", b: 0 }, { t: "Er möchte wissen, ob er am Samstag fliegen kann", b: 0 }, { t: "Der Nudelsalat am Dienstag schmeckte komisch", b: 0 },
                { t: "Die Aussicht auf den Tafelberg ist herrlich", b: 1 }, { t: "Die Oma ruft jeden Abend an", b: 1 }, { t: "Das Taxi war viel zu teuer", b: 1 }, { t: "Die Lesebrille liegt noch im Hotel", b: 1 }] },
      { art: "mc", id: "beste-saetze", tag: "Choose the best sentence", titel: "What do you say to the doctor?", lead: "Tick the sentence that is correct, clear and polite. <span class=\"de\">Es gibt kein Richtig im Wortlaut – aber nur ein Satz stimmt mit allen Angaben überein.</span>",
        fragen: [
          { q: "Opa: „Seit Dienstagabend tut mir der Bauch weh, vor allem nach dem Essen.“", o: ["I have had stomach ache since Tuesday evening, especially after meals.", "I have had stomach ache since Tuesday morning, mostly before meals.", "I am stomach ache since Tuesday evening after the eating.", "My stomach is bad since the evening. Do something now!"], a: 0,
            e: "The day, the time and “after meals” are all correct here. In the I-form or with “He says …” – both are fine, but the facts must be right." },
          { q: "Opa: „Fieber habe ich nicht, das habe ich heute früh gemessen.“", o: ["He has no fever. He checked his temperature this morning.", "He has no fever. He checked his temperature yesterday morning.", "He has a high fever. He checked it this morning.", "Fever he has not, that he has measured today early."], a: 0,
            e: "“Heute früh” is “this morning”, not “yesterday”. The last option is German word order with English words." },
          { q: "Opa: „Ich nehme sonst keine Tabletten und bin gegen nichts allergisch.“", o: ["He does not take any other tablets, and he is not allergic to anything.", "He takes some tablets every day, but he is not allergic to anything.", "Tablets he takes not, allergic against nothing is he.", "He is allergic to all tablets."], a: 0,
            e: "Two facts for the doctor: no other tablets and no allergy. The other options change the facts or copy the German." },
          { q: "Opa: „Frag die Ärztin bitte, ob ich am Samstag nach Hause fliegen kann.“", o: ["He would like to know if he can fly home on Saturday.", "He would like to know if he can fly home on Sunday.", "Tell me now if he flies home on Saturday!", "He asks if he is able to go in the Saturday to the house."], a: 0,
            e: "Polite, short and with the right day. The third option is rude, the last one is word for word." }
        ] },
      { art: "offen", id: "problem", tag: "Your words", titel: "Tell Dr Abrahams", lead: "Tell the doctor what is wrong with your grandpa. Write two or three English sentences. <span class=\"de\">Nur das Wichtige: Beschwerden, seit wann, Fieber.</span>",
        fragen: [{ q: "What seems to be the problem?", m: "My grandfather has had stomach ache since Tuesday evening, especially after meals. He feels a bit sick and he has no appetite. He has no fever. On Tuesday he ate a pasta salad that tasted strange.", k: ["stomach|belly|tummy", "Tuesday|tuesday", "sick|nausea|nauseous|ill", "appetite|hungry|hunger|eat|eating", "fever|temperature"], min: 4 }],
        tipp: "You can start with “He has …” or with “My grandpa has …”. Or use the I-form: “I have …”." },
      { art: "offen", id: "fragen", tag: "Your words", titel: "Pass on the questions", lead: "At the end Opa has three questions. Pass them on to the doctor in one or two English sentences. <span class=\"de\">Alle drei Fragen, höflich.</span>",
        fragen: [{ q: "What does Opa want to know?", m: "He would like to know what he can eat, if he can drink his coffee and if he can fly home on Saturday.", k: ["eat|food|eating", "coffee", "fly|flight|flying|plane|travel", "Saturday|saturday", "would like|wants to know|want to know|asks|ask|can I|may I|could I|if"], min: 4 }],
        tipp: "Start like this: He would like to know … / Or in the I-form: Can I …?" }
    ] },
    { kurz: "English to German", ober: "Station 4", titel: "English → German", teile: [
      { art: "text", html: "<p class=\"lead\">Now Dr Abrahams answers. Your grandpa waits and wants to know what she says. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Du erklärst Opa danach auf Deutsch, was wichtig ist.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: "med-doctor-aerztin", fragen: [
        { art: "luecke", id: "notizen", titel: "Notes for Opa", lead: "Listen and complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Eat only ", { g: "light" }, " food."],
            ["Drink a lot of water and ", { g: "tea" }, "."],
            ["Take one tablet after each ", { g: "meal" }, "."],
            ["Take the tablets for ", { g: "three" }, " days."],
            ["Come back on ", { g: "Friday" }, " at half past nine."]
          ], extra: ["pain", "ticket"] },
        { art: "tf", id: "hoer-tf", titel: "True or false?", lead: "Listen again. Tick true or false.",
          aussagen: [
            ["The doctor thinks the problem is serious.", false],
            ["Opa should eat only light food at first.", true],
            ["Spicy food is fine for Opa.", false],
            ["Coffee is a good idea at the moment.", false],
            ["The doctor wants to see Opa again on Friday.", true],
            ["Opa can fly on Saturday if he feels better.", true]
          ] },
        { art: "mc", id: "deutsch-saetze", titel: "Best German sentence", lead: "Tick the best German sentence for Opa. <span class=\"de\">Sinn weitergeben, nichts verändern.</span>",
          fragen: [
            { q: "Doctor: “Coffee is not a good idea at the moment.”", o: ["Kaffee solltest du im Moment lieber nicht trinken.", "Kaffee ist im Moment sehr gesund.", "Kaffee darfst du nur nach dem Essen trinken.", "Kaffee ist nicht eine gute Idee in dem Moment."], a: 0,
              e: "The doctor says “no coffee for now”. Two options say the opposite or add a rule, the last one is word for word." },
            { q: "Doctor: “About the flight on Saturday: if he feels better by then, he can fly.”", o: ["Wenn es dir bis Samstag besser geht, kannst du fliegen.", "Du kannst auf jeden Fall am Samstag fliegen.", "Wenn es dir am Samstag schlechter geht, kannst du fliegen.", "Du darfst am Samstag nicht fliegen, sagt sie."], a: 0,
              e: "The flight is possible, but only if Opa feels better. Don't drop the “if”." },
            { q: "Doctor: “Please come back sooner if he gets a fever or if the pain gets worse.”", o: ["Wenn du Fieber bekommst oder die Schmerzen schlimmer werden, sollst du früher wiederkommen.", "Du sollst auf jeden Fall früher wiederkommen.", "Wenn du Fieber bekommst, sollst du ins Hotel gehen und schlafen.", "Wenn die Schmerzen besser werden, sollst du wiederkommen."], a: 0,
              e: "Both reasons are important: fever and worse pain." }
          ] },
        { art: "offen", id: "dolmetschen-de", titel: "Tell Opa in German", lead: "Opa asks: „Was hat sie gesagt?“ Erkläre es ihm <b>auf Deutsch</b> in drei bis fünf Sätzen: Essen und Trinken, Tabletten, Flug, nächster Termin. Nicht Wort für Wort.",
          fragen: [{ q: "Was hat Dr Abrahams gesagt?", m: "Opa, die Ärztin sagt: Dein Magen ist nur verstimmt, es ist nichts Schlimmes. Du sollst zwei Tage nur leichtes Essen essen, zum Beispiel Reis, Banane und Toast, und viel Wasser und Tee trinken. Dazu bekommst du Tabletten: eine nach jeder Mahlzeit, drei Tage lang. Wenn es dir bis Samstag besser geht, darfst du fliegen. Am Freitag um halb zehn sollst du noch einmal kommen.", k: ["leicht|Reis|reis|Toast|toast|Banane|banane", "Wasser|wasser|Tee|tee", "Tablette|tablette|Tabletten|tabletten", "drei", "Freitag|freitag", "halb zehn|halb 10|9.30|9:30|neun Uhr dreißig|9 Uhr 30", "fliegen|Flug|flug|Samstag|samstag"], min: 5 }],
          tipp: "Sprich Opa direkt an („du“). Nenne die Zahlen und die Zeit genau." }
      ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your turn: interpret!", teile: [
      { art: "text", html: "<p class=\"lead\">Now play a conversation in a group of three. It is Friday. Helmut feels much better, but on Thursday he could not go on the cable car up Table Mountain – he had paid for the ticket. Now he needs a <b>note for the travel insurance</b>. Take turns: everybody plays each role once. <b>Now interpret!</b> <span class=\"de\">Spielt das Gespräch zu dritt. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Opa Helmut (speaks only German)</h4><ul><li>Du sagst: Du hattest gestern Magenbeschwerden und konntest nicht auf den Tafelberg.</li><li>Die Seilbahnkarte war schon bezahlt.</li><li>Du brauchst eine Bescheinigung für die Reiseversicherung.</li><li>Du fragst, wie lange es dauert.</li></ul></div><div class=\"sprech-karte b\"><h4>Dr Abrahams (speaks only English)</h4><ul><li>Ask how Mr Helmut feels today.</li><li>Say you can write a short note for the insurance.</li><li>Say it takes about ten minutes.</li><li>Ask him to wait in the waiting room.</li></ul></div><div class=\"sprech-karte c\"><h4>You (interpreter)</h4><ul><li>Pass on everything in both directions.</li><li>Use “He says …” or the I-form.</li><li>Ask again if you don't understand.</li><li>Describe a word if it is missing.</li></ul></div></div><div class=\"phrasen\"><span>He says that …</span><span>He would like to know if …</span><span>Could you repeat that, please?</span><span>It is a paper that says …</span><span>Is that right?</span></div>" },
      { art: "offen", id: "challenge-wort", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Opa says: „Frag bitte, ob sie mir eine Bescheinigung für die Reiseversicherung schreiben kann.“ You don't know the word for “Bescheinigung”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Dr Abrahams?", m: "My grandfather needs a paper from you for the travel insurance. It says that he was ill. Could you write it, please?", k: ["paper|letter|note|certificate|document|form", "insurance", "ill|sick|doctor|was", "could|can|please|would"], min: 3 }],
        tipp: "Don't translate the word. Say what it is: a paper from the doctor that says …" },
      { art: "offen", id: "challenge-nachfragen", m7: true, tag: "Challenge", titel: "You are not sure", lead: "Dr Abrahams speaks fast, and you do not understand an important word. Write what you say, in one or two English sentences.",
        fragen: [{ q: "What do you say to the doctor?", m: "Sorry, I did not understand. Could you say that again more slowly, please?", k: ["sorry|excuse|pardon", "again|repeat", "slowly|slow", "please"], min: 3 }],
        tipp: "Be polite: ask for the sentence again. Do not guess." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of interpreting", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How interpreting works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["I listen carefully and find the ", { g: "important" }, " information."],
          ["I pass on the meaning, not every ", { g: "word" }, "."],
          ["Numbers and times must be ", { g: "exact" }, "."],
          ["If I do not understand, I ", { g: "ask" }, " politely."],
          ["If I do not know a word, I ", { g: "describe" }, " it with simple words."]
        ], extra: ["forget", "break"] }
    ] }
  ],
  weiter: { text: "Well done! You can interpret in a conversation – from German into English and from English into German. Remember: meaning first, numbers exact, ask if you are not sure." }
});
