/* Englisch 9R · Unit 1 Around Australia · Mediation: At the pharmacy
   (Sprachmittlung im Gespräch: zwischen zwei Personen vermitteln, die einander nicht verstehen – beide Richtungen, Beitrag für
   Beitrag. Die Gespräche laufen als Sprechblasen-Kette (Baustein „kette“ aus e9-kit.js); die KI prüft je Beitrag, ob die wichtigen
   Angaben ankommen – nicht, ob Wort für Wort übersetzt wurde.)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen sinngemäß und adressatengerecht weitergeben), E9 4 (Kommunikationsstrategien:
   umschreiben, nachfragen), E9 3 (if-Sätze Typ I im Rat).
   Keine Texte in texte/: Die Gespräche stehen in den Ketten. Apotheke, Apothekerin und Touristen sind erfunden. */
D7Kit.seite({
  id: "u1-pharmacy",
  titel: "Mediation: At the pharmacy",
  einleitung: "A tourist from Australia is in a pharmacy in your town. He does not speak German, and the pharmacist does not speak much English. <b>You help both of them.</b> You pass on what is important – in German and in English, one speech bubble after the other. The AI checks if your message arrives.",
  zeit: "etwa 40 Minuten",
  ziele: ["🌉 I help two people who don't understand each other.", "🔎 I pass on the important information, not every word.", "🔢 I get numbers and times right.", "💬 I can describe a word that I don't know."],
  quiz: { profi: "Language helper" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst weiter, was jemand gesagt hat – in der anderen Sprache und so, dass die andere Person es gut versteht. Nicht Wort für Wort, sondern das Wichtige."],
    pharmacy: ["pharmacy", "Apotheke. In Großbritannien und Australien sagt man dazu auch „chemist's“."],
    pharmacist: ["pharmacist", "Apothekerin oder Apotheker: Diese Person arbeitet in der Apotheke und erklärt die Medikamente."],
    lozenge: ["lozenge", "Lutschtablette: eine kleine Tablette für den Hals, die man langsam lutscht."],
    syrup: ["cough syrup", "Hustensaft: ein dicker, süßer Saft gegen Husten."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Fehlt dir ein Wort, erklärst du es mit einfachen Wörtern – was es ist und was man damit macht."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "You are the bridge", teile: [
      { art: "text", html: "<p class=\"lead\">It is Saturday morning. You are in a <button class=\"term\" data-t=\"pharmacy\">pharmacy</button> in your town. A man in front of you looks ill. He speaks English, but the <button class=\"term\" data-t=\"pharmacist\">pharmacist</button> does not understand him. <span class=\"de\">Du kannst beide Sprachen – also hilfst du. Die Personen in diesem Modul sind erfunden.</span></p>" },
      { art: "merke", kopf: "MEDIATION IN A CONVERSATION", html: "<p>In a conversation <button class=\"term\" data-t=\"mediation\">mediation</button> is fast. Four rules help you:</p><ul><li>Pass on the <b>message</b>, not every word.</li><li>Talk <b>about</b> the other person: <i>He has … / She says …</i> – <i>Er hat … / Sie sagt, …</i></li><li><b>Numbers and times</b> must be right: how often, how long, how much.</li><li>You don't know a word? <button class=\"term\" data-t=\"paraphrase\">Describe it</button> with simple words.</li></ul>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du gleich im Gespräch.</span>",
        paare: [["cough", "Husten"], ["sore throat", "Halsschmerzen"], ["to swallow", "schlucken"], ["cough syrup", "Hustensaft"], ["lozenge", "Lutschtablette"], ["after meals", "nach dem Essen"], ["hay fever", "Heuschnupfen"], ["to recommend", "empfehlen"]] },
      { art: "tf", id: "regeln", tag: "True or false?", titel: "How do you help?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In a conversation you pass on every single word.", false],
          ["You can talk about the other person: He has … / Sie sagt, …", true],
          ["Numbers like „three times a day“ must be right.", true],
          ["If you don't know a word, you say nothing.", false],
          ["You can ask: Sorry, could you say that again, please?", true]
        ] }
    ] },
    { kurz: "Say it well", ober: "Station 2", titel: "Choose, then say it simply", teile: [
      { art: "text", html: "<p class=\"lead\">People often say more than the other person needs. First choose – then say it simply. <span class=\"de\">Der Tourist erzählt viel. Was braucht die Apothekerin?</span></p><p><b>The tourist says:</b> „Hi there. We arrived from Australia on Monday, and the flight was really long. My hotel is next to the station. Anyway, I've had a cough for two days, and my throat hurts. I don't have a fever. Oh, and I love your town!“</p>" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was muss die Apothekerin wissen? Was kannst du weglassen?</span>",
        buckets: ["Important for the pharmacist", "I can leave it out"],
        items: [{ t: "He has had a cough for two days", b: 0 }, { t: "His throat hurts", b: 0 }, { t: "He has no fever", b: 0 },
                { t: "He arrived from Australia on Monday", b: 1 }, { t: "The flight was very long", b: 1 }, { t: "His hotel is next to the station", b: 1 }, { t: "He loves the town", b: 1 }] },
      { art: "mc", id: "bester-satz", tag: "Choose the best sentence", titel: "What do you say?", lead: "Tick the best sentence. <span class=\"de\">Richtig, einfach und höflich.</span>",
        fragen: [
          { q: "The tourist says: „I've had a headache since yesterday.“ What do you tell the pharmacist?", o: ["Er hat seit gestern Kopfschmerzen.", "Ich habe seit gestern Kopfschmerzen.", "Er hatte gestern einen Kopf.", "Er sagt etwas über gestern."], a: 0,
            e: "Du sprichst über ihn: „Er hat …“. Und die wichtige Angabe bleibt drin: seit gestern." },
          { q: "The pharmacist says: „Nehmen Sie zwei Tabletten vor dem Schlafengehen.“ What do you tell the tourist?", o: ["Take two tablets before you go to bed.", "Take two tablets after you get up.", "She takes two tablets in the evening.", "You should sleep two times."], a: 0,
            e: "Zwei Angaben müssen stimmen: die Zahl (two) und die Zeit (before you go to bed)." },
          { q: "You don't know the English word for „Lutschtablette“. What do you say?", o: ["It's a small sweet for your throat. You suck it slowly.", "It's a Lutschtablette.", "I don't know. Sorry, goodbye.", "It's a tablet that you drink."], a: 0,
            e: "Umschreibe das Wort: was es ist und was man damit macht. Das genaue Wort heißt „lozenge“." }
        ] },
      { art: "merke", kopf: "USEFUL PHRASES", html: "<p><b>To the pharmacist (German)</b></p><div class=\"phrasen\"><span>Er hat …</span><span>Sie sagt, dass …</span><span>Er möchte wissen, ob …</span><span>Sie fragt, wie oft …</span></div><p><b>To the tourist (English)</b></p><div class=\"phrasen\"><span>She says …</span><span>She wants to know if …</span><span>She recommends …</span><span>You should …</span><span>It costs …</span></div>" },
      { art: "luecke", id: "phrasen", tag: "Useful phrases", titel: "Phrases that help you", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["She wants to ", { g: "know" }, " if you have a fever."],
          ["She ", { g: "recommends" }, " this cough syrup."],
          ["Take it three ", { g: "times" }, " a day."],
          ["Er möchte ", { g: "wissen" }, ", wie viel das kostet."],
          ["Er ", { g: "sagt" }, ", dass sein Hals wehtut."]
        ], extra: ["means", "kostet"] }
    ] },
    { kurz: "Conversation 1", ober: "Station 3", titel: "A cough and a sore throat", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now it's your turn.</b> Mr Reid is the tourist. Frau Lindner is the pharmacist. Read each speech bubble and write what <b>you</b> say. <span class=\"de\">Nach Mr Reid schreibst du auf Deutsch für Frau Lindner, nach Frau Lindner auf Englisch für Mr Reid. Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist.</span></p>" },
      { art: "kette", id: "husten", tag: "Mediation · AI check", titel: "Help Mr Reid and Frau Lindner", lead: "Write your part. <span class=\"de\">Gib das Wichtige weiter – nicht Wort für Wort. Der Satzanfang hilft dir.</span>",
        thema: "Sprachmittlung in der Apotheke (Englisch 9, Regelklasse): Husten und Halsschmerzen",
        rollen: { a: { name: "Mr Reid", ic: "🧳" }, b: { name: "Frau Lindner", ic: "⚕️" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Hello. I'm sorry, I don't speak German. I've had a bad cough for two days, and my throat hurts when I swallow." },
          { an: "b", sprache: "de", auftrag: "Tell Frau Lindner in German what is wrong.", start: "Er hat",
            kriterien: ["Er hat Husten", "seit zwei Tagen", "Der Hals tut weh (beim Schlucken)"],
            m: "Er hat seit zwei Tagen starken Husten, und sein Hals tut beim Schlucken weh.", k: ["husten", "zwei|2", "hals"] },
          { von: "b", text: "Hat er auch Fieber? Und nimmt er schon andere Medikamente?" },
          { an: "a", sprache: "en", auftrag: "Ask Mr Reid the two questions in English.", start: "She wants to know if",
            kriterien: ["fragt, ob er Fieber hat", "fragt, ob er andere Medikamente nimmt"],
            m: "She wants to know if you have a fever and if you are taking any other medicine.", k: ["fever|temperature", "medicine|medication|tablets|pills"] },
          { von: "a", text: "No, no fever. I only take one tablet for my hay fever every morning." },
          { an: "b", sprache: "de", auftrag: "Pass on his answer in German.", start: "Nein,",
            kriterien: ["Er hat kein Fieber", "Er nimmt (jeden Morgen) eine Tablette gegen Heuschnupfen"],
            m: "Nein, er hat kein Fieber. Er nimmt nur jeden Morgen eine Tablette gegen Heuschnupfen.", k: ["kein fieber|nicht fieber|ohne fieber|kein fiber", "heuschnupfen|allergie"] },
          { von: "b", text: "Gut. Dann empfehle ich diesen Hustensaft: dreimal am Tag einen Löffel, immer nach dem Essen. Für den Hals gibt es diese Lutschtabletten – höchstens sechs am Tag." },
          { an: "a", sprache: "en", auftrag: "Tell Mr Reid in English what she recommends and how to take it.", start: "She recommends",
            kriterien: ["Hustensaft: dreimal am Tag einen Löffel", "nach dem Essen", "Lutschtabletten für den Hals (auch umschrieben)", "höchstens sechs am Tag"],
            m: "She recommends this cough syrup: one spoon three times a day, after meals. And these lozenges are for your throat – not more than six a day.", k: ["three times|3 times", "after meals|after a meal|after eating|after you eat|after food", "throat", "six|6"] },
          { von: "a", text: "Great, thank you. How much is that together?" },
          { an: "b", sprache: "de", auftrag: "Pass on his question in German.", start: "Er möchte wissen,",
            kriterien: ["Er fragt nach dem Preis für beides zusammen"],
            m: "Er möchte wissen, wie viel beides zusammen kostet.", k: ["kostet|kosten|preis|wie viel|wieviel"] },
          { von: "b", text: "Das macht zusammen 14,40 Euro. Und sagen Sie ihm bitte: Wenn der Husten nach fünf Tagen nicht besser ist oder wenn er Fieber bekommt, soll er zum Arzt gehen." },
          { an: "a", sprache: "en", auftrag: "Tell Mr Reid the price and the advice in English.", start: "It costs",
            kriterien: ["Preis: 14,40 Euro", "wenn der Husten nach fünf Tagen nicht besser ist", "oder wenn er Fieber bekommt", "zum Arzt gehen"],
            m: "It costs 14 euros 40 together. If your cough isn't better after five days or if you get a fever, you should see a doctor.", k: ["14", "five days|5 days", "fever|temperature", "doctor"] },
          { von: "a", text: "OK, I'll do that. Thank you both very much. Goodbye!" },
          { an: "b", sprache: "de", auftrag: "Pass it on in German – short and friendly.", start: "Er bedankt sich",
            kriterien: ["Er bedankt sich", "Er verabschiedet sich"],
            m: "Er bedankt sich bei Ihnen und sagt auf Wiedersehen.", k: ["dank", "wiedersehen|tschüs|tschüss|verabschied|wiederschauen|servus"] },
          { von: "b", text: "Gern geschehen. Gute Besserung!" },
          { an: "a", sprache: "en", auftrag: "Pass on her good wishes in English.", start: "She says",
            kriterien: ["Sie wünscht gute Besserung"],
            m: "She says you're welcome. Get well soon!", k: ["get well|feel better|get better"] }
        ] }
    ] },
    { kurz: "Language", ober: "Station 4", titel: "Advice with if-sentences", teile: [
      { art: "merke", kopf: "IF-SENTENCES IN ADVICE", html: "<p>A pharmacist often says what to do <b>if</b> something happens:</p><ul><li><u>If</u> your cough <u>isn't</u> better after five days, <u>see</u> a doctor.</li><li><u>If</u> you <u>drink</u> a lot, the cough <u>will go</u> away faster.</li></ul><p>After <b>if</b>: simple present. <b>No will after if!</b> <span class=\"de\">Im Deutschen heißt das „wenn“ oder „falls“.</span></p>" },
      { art: "luecke", id: "if-rat", tag: "Gap text", titel: "Complete the advice", lead: "Complete the sentences. <span class=\"de\">Ganze Formen wie „will help“ stehen im Kasten. Zwei bleiben übrig.</span>",
        absaetze: [
          ["If your throat ", { g: "hurts" }, ", these lozenges ", { g: "will help" }, "."],
          ["If you ", { g: "get" }, " a fever, you should see a doctor."],
          ["If you ", { g: "rest" }, " for a day or two, you ", { g: "will feel" }, " better soon."]
        ], extra: ["will get", "helped"] },
      { art: "mc", id: "if-fehler", tag: "Typical mistakes", titel: "Spot the right sentence", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Which sentence is correct?", o: ["If the cough gets worse, you should see a doctor.", "If the cough will get worse, you should see a doctor.", "If the cough gets worse, you saw a doctor.", "If the cough getting worse, you should see a doctor."], a: 0,
            e: "Nach if steht das simple present – kein will." },
          { q: "The pharmacist says: „Wenn Sie viel trinken, geht der Husten schneller weg.“ What do you say?", o: ["If you drink a lot, the cough will go away faster.", "If you will drink a lot, the cough goes away faster.", "If you drank a lot, the cough goes away faster.", "Drink a lot or the cough is fast."], a: 0,
            e: "If + simple present, im zweiten Teil will: If you drink a lot, the cough will go away faster." }
        ] }
    ] },
    { kurz: "Conversation 2", ober: "Station 5", titel: "A fall from a bike", teile: [
      { art: "text", html: "<p class=\"lead\">A new customer comes in: Ms Harper with her son Toby. This time there are <b>no sentence starters</b>. <span class=\"de\">Jetzt ohne Satzanfänge. Denk an die vier Regeln: das Wichtige, über die Person sprechen, Zahlen genau, Wörter umschreiben.</span></p>" },
      { art: "kette", id: "knie", tag: "Mediation · AI check", titel: "Help Ms Harper and Frau Lindner", lead: "Write your part. <span class=\"de\">Deutsch für Frau Lindner, Englisch für Ms Harper.</span>",
        thema: "Sprachmittlung in der Apotheke (Englisch 9, Regelklasse): aufgeschürftes Knie nach einem Sturz",
        rollen: { a: { name: "Ms Harper", ic: "🚲" }, b: { name: "Frau Lindner", ic: "⚕️" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Excuse me, can you help me? My son fell off his bike an hour ago. His knee is bleeding a little, and it is very dirty." },
          { an: "b", sprache: "de", auftrag: "Tell Frau Lindner in German what happened.",
            kriterien: ["Der Sohn ist vom Fahrrad gefallen", "Das Knie blutet (ein wenig)", "Das Knie ist schmutzig"],
            m: "Ihr Sohn ist vor einer Stunde vom Fahrrad gefallen. Sein Knie blutet ein bisschen und ist sehr schmutzig.", k: ["fahrrad|rad", "blut", "schmutz|dreck"] },
          { von: "b", text: "Oh je. Zuerst muss das Knie sauber werden: bitte mit klarem Wasser abspülen. Danach dieses Spray daraufsprühen und ein Pflaster daraufkleben." },
          { an: "a", sprache: "en", auftrag: "Tell Ms Harper in English what to do. There are three steps.",
            kriterien: ["zuerst mit (klarem) Wasser abspülen oder waschen", "dann das Spray daraufsprühen", "ein Pflaster daraufkleben"],
            m: "First wash the knee with clean water. Then put this spray on it and put a plaster on.", k: ["water", "spray", "plaster"] },
          { von: "a", text: "OK. How often do we have to change the plaster? And can he go swimming tomorrow?" },
          { an: "b", sprache: "de", auftrag: "Pass on her two questions in German.",
            kriterien: ["fragt, wie oft das Pflaster gewechselt werden muss", "fragt, ob er morgen schwimmen gehen darf"],
            m: "Sie möchte wissen, wie oft sie das Pflaster wechseln müssen und ob er morgen schwimmen gehen darf.", k: ["pflaster", "schwimm"] },
          { von: "b", text: "Das Pflaster bitte jeden Tag wechseln. Schwimmen soll er erst wieder, wenn das Knie trocken ist – also in drei oder vier Tagen." },
          { an: "a", sprache: "en", auftrag: "Pass on her answers in English.",
            kriterien: ["Pflaster jeden Tag wechseln", "noch nicht schwimmen – erst wenn das Knie trocken ist", "in drei oder vier Tagen"],
            m: "Change the plaster every day. He shouldn't go swimming until his knee is dry – in three or four days.", k: ["every day|each day|daily|once a day", "swim", "three|3|four|4"] },
          { von: "a", text: "I see. Thank you. What do the spray and the plasters cost?" },
          { an: "b", sprache: "de", auftrag: "Pass on her question in German.",
            kriterien: ["Sie fragt nach dem Preis für Spray und Pflaster"],
            m: "Sie fragt, was das Spray und die Pflaster kosten.", k: ["kostet|kosten|preis|wie viel|wieviel"] },
          { von: "b", text: "Zusammen 9,80 Euro. Und wenn das Knie rot und heiß wird, soll sie mit dem Jungen zum Arzt gehen." },
          { an: "a", sprache: "en", auftrag: "Tell Ms Harper the price and the advice in English.",
            kriterien: ["Preis: 9,80 Euro", "wenn das Knie rot und heiß wird", "mit ihm zum Arzt gehen"],
            m: "It's 9 euros 80 together. If the knee gets red and hot, you should take him to a doctor.", k: ["9", "red|hot", "doctor"] }
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "mc", id: "strategie", tag: "Think", titel: "What do you do?", lead: "Tick the correct answer.",
        fragen: [
          { q: "The tourist speaks very fast, and you don't understand him. What do you do?", o: ["I say: Sorry, could you say that again more slowly, please?", "I guess and tell the pharmacist something.", "I say nothing and smile.", "I pass on only the last word."], a: 0,
            e: "Nachfragen ist erlaubt und höflich. Raten kann in der Apotheke gefährlich sein." }
        ] },
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "How mediation in a conversation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In a conversation I pass on the ", { g: "message" }, ", not every word."],
          ["I talk about the other person: He has … / Sie ", { g: "sagt" }, ", …"],
          ["Numbers and times must be ", { g: "right" }, "."],
          ["If I don't know a word, I ", { g: "describe" }, " it."],
          ["If I don't understand, I ", { g: "ask" }, " again politely."]
        ], extra: ["quickly", "nothing"] }
    ] }
  ],
  weiter: { text: "Well done! You can help two people who don't understand each other – in German and in English." }
});
