/* Englisch 9R · Dolmetschen · Interpreting: At the restaurant
   (Dolmetschen in einem Gespräch zwischen einer deutschsprachigen und einer englischsprachigen Person: Sinn statt Wörter, "He says …" oder
   Ich-Form, Wichtiges (Allergie!) nie verlieren, Nebensächliches weglassen, Preise und Zahlen genau, nachfragen, ein Wort umschreiben;
   Richtung Deutsch → Englisch und Englisch → Deutsch, Rollenspiel zu dritt)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.2 Hörverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Alltagssituation im englischsprachigen Ausland).
   Texte: „Papa bestellt“ (texte/med/med-restaurant-vater.js), „Lwazi tells you about the menu“ (texte/med/med-restaurant-kellner.js) –
   Restaurant, Kellner, Vater und Gerichte sind erfunden; die Seite gibt keinen medizinischen Rat. */
D7Kit.seite({
  id: "med-restaurant",
  titel: "Interpreting: At the restaurant",
  einleitung: "You are on holiday in Durban with your dad. You eat in a restaurant. Your dad speaks <b>no English</b>, the waiter speaks <b>no German</b> – so <b>you</b> are the interpreter. Dad has a <b>nut allergy</b>, and this is the one thing that must never get lost. Interpreting is <b>not</b> translating word for word: you pass on the meaning, and you keep numbers and prices exact.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know what an interpreter does.", "🗣️ I pass on a message with “He says …” or in the I-form.", "⚠️ I never lose the most important information.", "💶 I keep numbers and prices exact."],
  quiz: { profi: "Interpreting pro" },
  glossar: {
    interpret: ["to interpret", "Dolmetschen: Du hilfst zwei Personen, die nicht dieselbe Sprache sprechen, in einem Gespräch. Du gibst weiter, was gesagt wird – nicht Wort für Wort, sondern den Sinn."],
    allergic: ["allergic", "Wer allergisch gegen etwas ist, verträgt es nicht. Das Wort „allergic“ sagt man im Restaurant immer gleich zu Beginn."],
    mild: ["mild", "Mild bedeutet bei Essen: nicht scharf, nur wenig gewürzt."],
    bill: ["the bill", "Die Rechnung im Restaurant. Man bittet darum mit „Could we have the bill, please?“."],
    housedish: ["house dish", "Das Gericht des Hauses ist ein Essen, das ein Restaurant besonders gern empfiehlt."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">You are in Durban with your dad <b>Thomas</b>. It is evening, and you sit in the restaurant <b>The Blue Pot</b>. The waiter is <b>Lwazi</b>. Your dad speaks only German, Lwazi speaks only English. <b>You</b> sit between them and <button class=\"term\" data-t=\"interpret\">interpret</button>. Durban has many curries, so there is a lot to choose from.</p><p>The restaurant and the people are invented. The page is for practising language – it does not give medical advice.</p>" },
      { art: "merke", kopf: "INTERPRETING – THE RULES", html: "<ul><li><b>Meaning, not words.</b> Pass on what is important.</li><li>You can say “<b>He says</b> that … / He would like to know if …” <b>or</b> speak in the <b>I-form</b>: “I am allergic to nuts.” Both are fine.</li><li><b>Never lose the most important thing</b> – here the <button class=\"term\" data-t=\"allergic\">allergy</button>. Leave out small talk instead.</li><li><b>Numbers and prices must be exact.</b></li><li>If you don't understand: <b>ask</b> politely.</li><li>If you don't know a word: describe it with simple words.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["allergic", "allergisch"], ["nuts", "Nüsse"], ["peanuts", "Erdnüsse"], ["mild", "nicht scharf"], ["to recommend", "empfehlen"], ["the bill", "die Rechnung"], ["house dish", "Gericht des Hauses"], ["to pay by card", "mit Karte zahlen"]] },
      { art: "tf", id: "regeln-tf", tag: "True or false?", titel: "What does an interpreter do?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["An allergy is important, so you always pass it on.", true],
          ["You may leave out a football match on the TV.", true],
          ["If you are not sure about a price, you say a number that sounds right.", false],
          ["You must always speak in the I-form.", false],
          ["If you do not know whether there are nuts in a dish, you ask.", true]
        ] }
    ] },
    { kurz: "Useful phrases", ober: "Station 2", titel: "Useful phrases", teile: [
      { art: "sort", id: "phrasen-sort", tag: "Sort", titel: "Which phrase for what?", lead: "Put each phrase into the right box. <span class=\"de\">Weitergeben, Nachfragen oder höflich sein?</span>",
        buckets: ["Passing it on", "Checking and asking again", "Being polite"],
        items: [{ t: "He says that he is allergic to nuts.", b: 0 }, { t: "He would like to know how long it takes.", b: 0 }, { t: "He asks if you can pay by card.", b: 0 },
                { t: "Sorry, could you say that again, please?", b: 1 }, { t: "Did you say fifteen or fifty?", b: 1 }, { t: "Do you mean the fish or the curry?", b: 1 },
                { t: "Could we have the bill, please?", b: 2 }, { t: "I would like some water, please.", b: 2 }, { t: "Thank you very much.", b: 2 }] },
      { art: "luecke", id: "phrasen-luecke", tag: "Useful phrases", titel: "Complete the phrases", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Please tell him: my dad is ", { g: "allergic" }, " to nuts."],
          ["She ", { g: "would" }, " like to know how long it takes."],
          ["Could you say that ", { g: "again" }, ", please? I want to check the number."],
          ["Did you say fifteen ", { g: "or" }, " fifty?"],
          ["Sorry, I did not ", { g: "understand" }, " the last word."]
        ], extra: ["menu", "since"] },
      { art: "mc", id: "phrasen-mc", tag: "Think", titel: "What do you say?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Your dad wants the bill. Which sentence is the most polite?", o: ["Could we have the bill, please?", "Give us the bill now.", "Bill!", "We want the bill. Quick!"], a: 0,
            e: "“Could we …, please?” is friendly and clear. The other sentences sound rude." },
          { q: "You did not hear the price of the curry. What do you say?", o: ["Sorry, how much was that, please?", "I will say a price that sounds right.", "Please say it in German.", "Nothing – Dad will not mind."], a: 0,
            e: "Prices must be exact. If you are not sure, ask again politely." }
        ] }
    ] },
    { kurz: "German to English", ober: "Station 3", titel: "German → English", teile: [
      { art: "text", html: "<p class=\"lead\">Lwazi comes to the table and asks: “<b>Are you ready to order?</b>” Dad talks – a lot. You have to decide what the waiter needs. <span class=\"de\">Lies, was Papa sagt. Nicht alles ist für den Kellner wichtig.</span></p>" },
      { art: "lesetext", lesetext: "med-restaurant-vater" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht der Kellner? Was kannst du weglassen?</span>",
        buckets: ["Important for the waiter", "I can leave it out"],
        items: [{ t: "Papa hat eine Nussallergie", b: 0 }, { t: "Auch keine Soße mit Erdnüssen", b: 0 }, { t: "Der Kellner soll etwas empfehlen", b: 0 },
                { t: "Etwas Typisches, aber nicht zu scharf", b: 0 }, { t: "Ein Wasser ohne Kohlensäure", b: 0 }, { t: "Wie lange das Essen dauert", b: 0 },
                { t: "Die Rechnung und die Frage nach der Kartenzahlung", b: 0 },
                { t: "Im Fernseher läuft ein Fußballspiel", b: 1 }, { t: "Der Parkplatz war ewig voll", b: 1 }, { t: "Das Hotel hat lange Öffnungszeiten", b: 1 }] },
      { art: "mc", id: "beste-saetze", tag: "Choose the best sentence", titel: "What do you say to Lwazi?", lead: "Tick the sentence that is correct, clear and polite. <span class=\"de\">Es gibt kein Richtig im Wortlaut – aber nur ein Satz stimmt mit allen Angaben überein.</span>",
        fragen: [
          { q: "Papa: „Ich habe eine Nussallergie. In meinem Essen darf nichts mit Nüssen sein.“", o: ["He is allergic to nuts. Please, there must be no nuts in his food.", "He likes nuts, but only a few of them.", "He has a nut allergy, but a little bit is fine.", "He is allergic against nuts. In his meal may be nothing with nuts."], a: 0,
            e: "The allergy and “no nuts at all” must be clear. One option changes the facts, one is word for word." },
          { q: "Papa: „Ich möchte etwas Typisches probieren, aber nicht zu scharf.“", o: ["He would like to try something typical, but not too spicy. What do you recommend?", "He wants something typical and very spicy.", "He would like to become a typical dish, but not too spicy.", "Give him the typical, not scharf."], a: 0,
            e: "“Become” does not mean “bekommen” – that is a false friend. One option even says the opposite (very spicy)." },
          { q: "Papa: „Wie lange müssen wir auf das Essen warten?“", o: ["He would like to know how long we have to wait for the food.", "He would like to know how long the food is.", "Tell him that we are hungry now!", "Wait for the food, how long?"], a: 0,
            e: "The question is about waiting time. It stays polite with “He would like to know …”." },
          { q: "Papa: „Kann man hier mit Karte zahlen?“", o: ["He asks if we can pay by card here.", "He asks if we can pay with a map here.", "Pay by card, yes or no?", "Can I become the bill with card?"], a: 0,
            e: "“Karte” is “card” when you pay. A “map” is a Landkarte." }
        ] },
      { art: "offen", id: "problem", tag: "Your words", titel: "Tell Lwazi", lead: "Tell the waiter the most important things about your dad's order. Write two or three English sentences. <span class=\"de\">Allergie, ein typisches Gericht, nicht zu scharf.</span>",
        fragen: [{ q: "What do you tell Lwazi?", m: "My dad is allergic to nuts, so there must be no nuts in his food. He would like to try something typical, but not too spicy. What can you recommend?", k: ["allergic|allergy", "nut|nuts|peanut|peanuts", "typical|traditional|local|special", "spicy|hot|chilli|mild", "recommend|suggest|advice"], min: 4 }],
        tipp: "You can start with “He is allergic …” or with “My dad is …”. Or use the I-form: “I am allergic to nuts.”" },
      { art: "offen", id: "fragen", tag: "Your words", titel: "Pass on the questions", lead: "At the end Dad has two more wishes. Pass them on to Lwazi in one or two English sentences. <span class=\"de\">Wartezeit, Rechnung und Karte, höflich.</span>",
        fragen: [{ q: "What does your dad want to know?", m: "He would like to know how long we have to wait for the food. At the end we would like the bill, please. Can we pay by card?", k: ["wait|long|time|minutes", "bill|check", "card|pay"], min: 3 }],
        tipp: "Start like this: He would like to know … / Or in the I-form: How long do we have to wait?" }
    ] },
    { kurz: "English to German", ober: "Station 4", titel: "English → German", teile: [
      { art: "text", html: "<p class=\"lead\">Now Lwazi answers. Your dad waits and wants to know what he says. Read the tasks first, then listen. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Du erklärst Papa danach auf Deutsch, was wichtig ist.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: "med-restaurant-kellner", fragen: [
        { art: "luecke", id: "notizen", titel: "Notes for Dad", lead: "Listen and complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["House dish: chicken ", { g: "curry" }, " with rice."],
            ["Dad should not take the ", { g: "fish" }, "."],
            ["The curry costs ", { g: "ninety-five" }, " rand."],
            ["The food takes about ", { g: "fifteen" }, " minutes."],
            ["Dad can pay by ", { g: "card" }, " at the table."]
          ], extra: ["soup", "bottle"] },
        { art: "tf", id: "hoer-tf", titel: "True or false?", lead: "Listen again. Tick true or false.",
          aussagen: [
            ["The curry has nuts in it.", false],
            ["The sweet sauce on the fish has peanuts.", true],
            ["The curry is very hot.", false],
            ["There are almonds in the cake.", true],
            ["A bottle of water costs twenty rand.", true],
            ["Dad has to pay in cash.", false]
          ] },
        { art: "mc", id: "deutsch-saetze", titel: "Best German sentence", lead: "Tick the best German sentence for Dad. <span class=\"de\">Sinn weitergeben, nichts verändern.</span>",
          fragen: [
            { q: "Lwazi: “The curry has no nuts in it. But the sweet sauce on our fish has peanuts.”", o: ["Im Curry sind keine Nüsse, aber die süße Soße zum Fisch enthält Erdnüsse.", "Im Curry sind keine Nüsse, und die Fischsoße ist auch sicher.", "Das Curry enthält Erdnüsse, aber der Fisch nicht.", "In der Soße sind Nüsse, du kannst aber trotzdem alles essen."], a: 0,
              e: "Allergy information must be exact: curry without nuts, fish sauce with peanuts. The other options change one of the two facts." },
            { q: "Lwazi: “The curry is ninety-five rand, and the food will take about fifteen minutes.”", o: ["Das Curry kostet fünfundneunzig Rand, und das Essen dauert etwa eine Viertelstunde.", "Das Curry kostet fünfzehn Rand, und das Essen dauert fünfundneunzig Minuten.", "Das Curry kostet fünfundneunzig Rand, und das Essen dauert etwa eine Stunde.", "Das Curry ist sehr günstig, und das Essen kommt gleich."], a: 0,
              e: "Price and time must both be right. One option swaps the two numbers, one changes the time, and the last one leaves out the numbers." },
            { q: "Lwazi: “You can pay by card at the table. Just call me when you want the bill.”", o: ["Du kannst am Tisch mit Karte zahlen. Ruf ihn einfach, wenn du die Rechnung willst.", "Du musst bar zahlen. Er bringt die Rechnung von allein.", "Du kannst nur an der Kasse mit Karte zahlen.", "Zahle jetzt, dann bringt er die Rechnung."], a: 0,
              e: "Dad can pay by card, and he can pay at the table. The other options say cash, the till, or pay first." }
          ] },
        { art: "offen", id: "dolmetschen-de", titel: "Tell Dad in German", lead: "Dad asks: „Was hat er gesagt?“ Erkläre es ihm <b>auf Deutsch</b> in drei bis fünf Sätzen: Empfehlung, Nüsse, Wartezeit, Bezahlen. Nicht Wort für Wort.",
          fragen: [{ q: "Was hat Lwazi gesagt?", m: "Papa, er empfiehlt das Curry mit Hähnchen und Reis, das ist nicht scharf. Im Curry sind keine Nüsse, aber die süße Soße zum Fisch hat Erdnüsse, den Fisch solltest du nicht nehmen. Der Kuchen enthält Mandeln, also auch lieber keinen Kuchen. Das Essen dauert etwa fünfzehn Minuten, und du kannst am Tisch mit Karte zahlen.", k: ["Curry|curry", "nicht scharf|mild|wenig scharf|kaum scharf", "Nüsse|nüsse|Nuss|Erdnüsse|erdnüsse|Erdnuss", "Fisch|fisch", "fünfzehn|15|Viertelstunde", "Karte|karte"], min: 5 }],
          tipp: "Sprich Papa direkt an („du“). Nenne die Zahlen und die Nüsse genau." }
      ] }
    ] },
    { kurz: "Your turn", ober: "Station 5", titel: "Your turn: interpret!", teile: [
      { art: "text", html: "<p class=\"lead\">Now play a second conversation in a group of three. The meal was good, and Lwazi brings the bill. But there is a mistake: two bottles of water are on the bill, and you only had one. Dad also wants to leave a tip. Take turns: everybody plays each role once. <b>Now interpret!</b> <span class=\"de\">Spielt das Gespräch zu dritt. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>Thomas (speaks only German)</h4><ul><li>Du sagst: Das Essen war gut und das Curry war schön mild.</li><li>Auf der Rechnung steht zweimal Wasser, ihr hattet nur eine Flasche.</li><li>Du möchtest mit Karte zahlen.</li><li>Du fragst, ob das Trinkgeld schon in der Rechnung ist.</li></ul></div><div class=\"sprech-karte b\"><h4>Lwazi (speaks only English)</h4><ul><li>Say sorry and look at the bill again.</li><li>Say that one bottle of water is too much and you will change the bill.</li><li>Say that the tip is not on the bill.</li><li>Say that Thomas can add a tip when he pays by card.</li></ul></div><div class=\"sprech-karte c\"><h4>You (interpreter)</h4><ul><li>Pass on everything in both directions.</li><li>Use “He says …” or the I-form.</li><li>Ask again if you don't understand.</li><li>Describe a word if it is missing.</li></ul></div></div><div class=\"phrasen\"><span>He says that …</span><span>He would like to know if …</span><span>Could you repeat that, please?</span><span>It is extra money for …</span><span>Is that right?</span></div>" },
      { art: "offen", id: "challenge-wort", m7: true, tag: "Challenge", titel: "A word is missing", lead: "Dad says: „Frag bitte, ob das Trinkgeld schon dabei ist.“ You don't know the word for “Trinkgeld”. Describe it in one or two English sentences.",
        fragen: [{ q: "What do you say to Lwazi?", m: "My dad would like to give you some extra money for the good service. Is that already on the bill?", k: ["money|extra|pay", "service|waiter|you|good|nice", "bill|already|included", "would|could|please|can"], min: 3 }],
        tipp: "Don't translate the word. Say what it is: money you give the waiter for good service." },
      { art: "offen", id: "challenge-nachfragen", m7: true, tag: "Challenge", titel: "You are not sure", lead: "Lwazi speaks fast. You think he says eight rand, but it could be eighteen. Write what you say, in one or two English sentences.",
        fragen: [{ q: "What do you say to the waiter?", m: "Sorry, was that eight or eighteen rand? Could you say the number again, please?", k: ["sorry|excuse|pardon", "eight|eighteen|number|price|how much", "again|repeat|say", "please"], min: 3 }],
        tipp: "Be polite: ask for the number again. Do not guess." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of interpreting", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How interpreting works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The most important thing, like an ", { g: "allergy" }, ", must never get lost."],
          ["I pass on the ", { g: "meaning" }, ", not every word."],
          ["I say prices and numbers ", { g: "exactly" }, "."],
          ["If a number is not clear, I ", { g: "check" }, " it politely."],
          ["I can say “He says …” or use the ", { g: "I-form" }, "."]
        ], extra: ["colour", "sleep"] }
    ] }
  ],
  weiter: { text: "Well done! You can interpret in a restaurant – from German into English and from English into German. Remember: the allergy first, prices exact, and ask if you are not sure." }
});
