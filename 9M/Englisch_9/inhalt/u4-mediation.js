/* Englisch 9M · Unit 4 News from New Zealand · Mediation: Join the club! · M-Fassung
   (Sprachmittlung statt Übersetzung: Situation und Adressat erkennen, Wichtiges auswählen, Unwichtiges weglassen, einfach sagen,
   genaue Angaben (Zeit, Leihgebühr, Bestellfrist, Wetterregel mit Ausnahme) richtig weitergeben;
   Richtung Englisch → Deutsch schriftlich, auch als Zusammenfassung in eigenen Worten; Deutsch → Englisch für die Gastmutter eines Gastes;
   Grammatik der Unit im Kontext: going to-future und simple past (Revision), Passiv (simple present, simple past) verstehen und selbst bilden, auch mit by)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, zusammenfassen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Freizeit, Vereine).
   Texte: „Tui Valley Tramping Club“ (texte/u4/mediation-tramping-m.js), „Musikverein Auenbach“ (texte/u4/mediation-aushang-m.js)
   – beide Vereine und alle Personen sind erfunden. */
D7Kit.seite({
  id: "u4-mediation",
  titel: "Mediation: Join the club!",
  einleitung: "Clubs are a big part of free time. In this module you help people who want to join a club but do not speak the language. First you are <b>Mats</b>, an exchange student in <b>New Zealand</b>: you tell your mother in German about a walking club and pass on prices, times and rules <b>exactly</b>. Then you help a guest from New Zealand who wants to join a music club in Germany. Mediation is <b>not</b> translating word for word: you decide what the person needs, you say it simply and you keep the exact facts.",
  zeit: "etwa 45 Minuten",
  ziele: ["🧭 I know the steps of mediation and think of the person who needs the information.", "🔎 I choose the important points and leave out the rest.", "🔢 I pass on times, fees and rules with an exception exactly.", "🔄 I help in both directions and I can summarise an English text in German.", "🗓️ I use going to and the simple past, and I can form the passive myself (is / are or was / were + verb 3, by)."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter, passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach gesagt."],
    tramping: ["tramping", "So sagt man in Neuseeland zu einer langen Wanderung in der Natur. Bei uns würde man Wandern oder Trekking sagen."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a small stand that holds the music“."],
    lend: ["to lend / to borrow", "Der Verein verleiht etwas (to lend), und du leihst es dir aus (to borrow). Beides bedeutet: nur für kurze Zeit, danach gibt man es zurück."],
    passiv: ["passive", "Das Passiv sagt, was mit etwas gemacht wird. Wer es macht, ist nicht so wichtig. „The club was started“ heißt: Der Verein wurde gegründet. Mit „by“ kannst du sagen, wer es macht."],
    goingto: ["going to", "Mit „going to“ sagst du, was du vorhast oder was ganz sicher geplant ist: „I am going to ask the leader.“"]
  },
  haupttext: "u4-med-tramping-m",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a walking club before a tour</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u4-tramping-club.jpg\" alt=\"Members of a walking club get ready at a car park; the leader checks the backpack of a new member.\" loading=\"lazy\" style=\"width:100%;border-radius:14px\"></figure><p>What are the people doing? What do you need for a long walk in the mountains? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">You are <b>Mats</b>, an exchange student in New Zealand. Your host family takes you to an information evening of the <b>Tui Valley Tramping Club</b> (an invented club). You get an English sheet, and you want to join. But you have <b>no strong shoes</b>, and you are free on Saturdays only. Back home in Germany, your mother, <b>Frau Seidl</b>, calls you and asks in German about the club, about the <b>costs</b> and about the <b>weather rules</b>. She does not read English well. You are her language helper.</p>" },
      { art: "merke", kopf: "MEDIATION – THE STEPS", html: "<ol><li><b>Find</b> the information.</li><li><b>Choose</b> what is important for this person.</li><li><b>Simplify</b> it: short sentences, easy words.</li><li><b>Pass it on</b> and think of the person. Keep <b>exact facts</b> (times, prices, deadlines, exceptions) correct.</li><li><b>Act</b> in a real situation.</li></ol><p>It is <b>not</b> translation. You may leave out unimportant details, but never an exact fact the person needs. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "ordnen", id: "stufen", tag: "Order", titel: "The steps of mediation", lead: "Put the steps of mediation in the right order. <span class=\"de\">Bringe die Stufen in die richtige Reihenfolge.</span>",
        schritte: ["Find the information.", "Choose what is important for the person.", "Make it simple.", "Say it for the person and keep the exact facts.", "Act in a real situation."] },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false.",
        aussagen: [
          ["A good helper passes on exact facts like times and prices correctly.", true],
          ["If a rule has an exception, you can leave the exception out.", false],
          ["You must say every sentence of the text again.", false],
          ["If a word is missing, you can describe it in simple words.", true]
        ] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Frau Seidl wants to know: <b>Wann trefft ihr euch? Was brauchst du, und was kostet das? Und was ist, wenn das Wetter schlecht ist?</b> <span class=\"de\">Lies das Infoblatt. Nicht alles ist für deine Mutter wichtig.</span></p>" },
      { art: "lesetext", lesetext: "u4-med-tramping-m" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the sheet say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-med-tramping-m",
        fragen: [
          { q: "Why do the members start an hour later in July and August?", zeilen: [7, 9], e: "Because the mornings are so dark at that time of the year.", tipp: "Look at the paragraph called Meeting point." },
          { q: "What must a member do to get boots from the club?", zeilen: [15, 18], e: "He pays five dollars per walk and tells the club his shoe size by Thursday evening.", tipp: "Look for the words boots and shoe size." },
          { q: "What may a visitor do before he decides to join?", zeilen: [27, 28], e: "He may try two walks.", tipp: "Look at the end of the sheet." }
        ] },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "What does Frau Seidl need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du deiner Mutter? Was lässt du weg?</span>",
        buckets: ["Tell your mother", "I can leave it out"],
        items: [{ t: "Tramping is the New Zealand word for a long walk", b: 0 }, { t: "They meet every second Saturday at eight, in July and August an hour later", b: 0 }, { t: "You must bring a rain jacket, water and lunch", b: 0 }, { t: "Boots can be borrowed for five dollars per walk if you order the size by Thursday", b: 0 }, { t: "In heavy rain or strong wind the walk is cancelled, but not in fog", b: 0 }, { t: "The leader sends a message by seven o'clock on the morning of the walk", b: 0 },
                { t: "The club shop sells green T-shirts and postcards", b: 1 }, { t: "The club was started by a group of neighbours", b: 1 }, { t: "After a cancelled walk there is a hot drink in the clubhouse", b: 1 }, { t: "The list of jobs is on the door", b: 1 }] },
      { art: "mc", id: "auswahl", tag: "Think", titel: "What does your mother ask?", lead: "Tick the German answer that is correct and helpful.",
        fragen: [
          { q: "Your mother asks: „Mats, du hast keine festen Schuhe. Wie kommst du an welche, und was kostet das?“", o: ["Der Verein verleiht Schuhe für fünf Dollar pro Wanderung; ich muss bis Donnerstagabend meine Schuhgröße sagen.", "Der Verein verleiht Schuhe für fünf Dollar im Monat; ich sage meine Größe am Samstag früh.", "Ich muss feste Schuhe kaufen; der Verein verkauft sie in seinem Laden.", "Der Verein verleiht Schuhe umsonst; ich sage meine Größe, wenn ich ankomme."], a: 0,
            e: "A price and a deadline are exact facts: five dollars per walk, shoe size by Thursday evening. The other answers change one of them." }
        ] }
    ] },
    { kurz: "Pass it on", ober: "Steps 3 and 4", titel: "Say it for your mother", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say in German?", lead: "Tick the German sentence that is correct, simple and useful.",
        fragen: [
          { q: "Sheet: „We meet every second Saturday at eight o'clock in front of the clubhouse, although in July and August we start an hour later.“", o: ["Wir treffen uns jeden zweiten Samstag um acht Uhr vor dem Vereinsheim, im Juli und August erst um neun.", "Wir treffen uns jeden Samstag um acht Uhr vor dem Vereinsheim, im Juli und August erst um neun.", "Wir treffen uns jeden zweiten Samstag um acht Uhr vor dem Vereinsheim, im Juli und August schon um sieben.", "Wir treffen uns am zweiten Samstag im Monat um acht Uhr vor dem Vereinsheim, im Sommer eine Stunde später."], a: 0,
            e: "Every second Saturday means every two weeks – not every Saturday and not the second Saturday of the month. An hour later than eight is nine o'clock. And be careful: July and August are winter months in New Zealand." },
          { q: "Sheet: „If there is heavy rain or strong wind, the walk is cancelled. Fog is no problem, but then the group stays on the wide forest track.“", o: ["Bei starkem Regen oder starkem Wind fällt die Wanderung aus; bei Nebel geht man trotzdem, bleibt aber auf dem breiten Waldweg.", "Bei starkem Regen oder Nebel fällt die Wanderung aus; bei Wind bleibt man auf dem Waldweg.", "Bei jedem Wetter wird gewandert, nur bei Nebel geht man auf den breiten Waldweg.", "Bei Regen, Wind und Nebel fällt die Wanderung immer aus."], a: 0,
            e: "The rule has an exception: fog does not cancel the walk. The passive „is cancelled“ means the walk does not take place. Do not make the rule stronger or weaker." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to your mother", min: 45,
        auftrag: "<p><strong>Sprachmittlung:</strong> Deine Mutter, Frau Seidl, versteht das englische Infoblatt des Tui Valley Tramping Club nicht. Erkläre ihr <b>auf Deutsch</b>, was sie wissen will: Was heißt „tramping“? Wann und wo trefft ihr euch? Was brauchst du, und wie kommst du ohne eigene feste Schuhe an Wanderschuhe (was kostet das, bis wann musst du etwas tun)? Was gilt bei schlechtem Wetter?</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Unwichtiges kannst du weglassen, Zeiten, Preise und die Wetterregel mit der Ausnahme musst du genau weitergeben.</p>",
        starter: ["Mama, auf dem Blatt steht:", "Tramping heißt …", "Wir treffen uns …", "Schuhe kann ich …", "Wenn das Wetter schlecht ist, …"],
        kriterien: ["Der Text erklärt, dass „tramping“ Wandern bedeutet.", "Er nennt Zeit und Ort des Treffens (jeden zweiten Samstag, acht Uhr, vor dem Vereinsheim; im Juli und August eine Stunde später).", "Er sagt, was man mitbringen muss (Regenjacke, Wasser, Mittagessen, feste Schuhe).", "Er nennt die Leihschuhe genau: fünf Dollar pro Wanderung, Schuhgröße bis Donnerstagabend melden.", "Er erklärt das Wetter: Bei starkem Regen oder Wind fällt die Wanderung aus, bei Nebel nicht (breiter Waldweg); der Leiter schreibt bis sieben Uhr eine Nachricht.", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung. Unwichtiges (T-Shirts, Postkarten, heißes Getränk im Vereinsheim, Liste an der Tür) fehlt."] },
      { art: "schreiben", id: "zusammenfassung", m7: true, tag: "Plus · Summary", titel: "Summarise the sheet in German", min: 45,
        auftrag: "<p><strong>Plus – Zusammenfassung:</strong> Deine Klasse sammelt Infoblätter für eine Mappe „Vereine in aller Welt“. Fasse das englische Blatt des Tui Valley Tramping Club <b>auf Deutsch in eigenen Worten</b> zusammen – in vier bis sechs Sätzen für Mitschüler, die das Blatt nicht gelesen haben.</p><p>Nenne nur das Wichtigste: was der Verein macht, wann man sich trifft, was man mitbringt oder leihen kann, die Wetterregel und die Mithilfe. Schreibe nicht Satz für Satz mit und lass Nebensächliches weg.</p>",
        starter: ["Der Tui Valley Tramping Club ist …", "Die Mitglieder treffen sich …", "Mitbringen muss man …", "Bei schlechtem Wetter …", "Außerdem helfen alle …"],
        kriterien: ["Die Zusammenfassung sagt, was der Verein macht (Wandern in der Natur) und wann man sich trifft.", "Sie nennt, was man mitbringt und dass man Schuhe leihen kann.", "Sie erklärt die Wetterregel kurz (Absage bei starkem Regen oder Wind).", "Sie nennt die Mithilfe der Mitglieder (Wege frei machen, Küche in der Hütte).", "Sie ist auf Deutsch, in eigenen Worten – nicht Satz für Satz übersetzt. Nebensächliches (T-Shirts, Postkarten, Nachbarn als Gründer, Liste an der Tür) fehlt."] }
    ] },
    { kurz: "German to English", ober: "Steps 1 to 4", titel: "From German into English", teile: [
      { art: "text", html: "<p class=\"lead\">Now the other way round. <b>Riley</b> (fifteen) from New Zealand is staying with your family in Germany. Riley plays the trumpet, but did not bring it to Germany, and is free on <b>Thursday evenings</b> only. Riley would like to join the <b>Musikverein Auenbach</b> (an invented music club). Riley's mother, <b>Mrs Harawira</b>, writes to you in English: <b>What is this club? What does it cost? Can Riley play without an instrument, and does he have to bring anything?</b> You read the German notice and tell her only what she needs. <span class=\"de\">Du schreibst Mrs Harawira auf Englisch das Wichtige und gibst Zeiten und Preise genau weiter. Ein Instrument kann der Verein <button class=\"term\" data-t=\"lend\">verleihen</button>.</span></p>" },
      { art: "lesetext", lesetext: "u4-med-aushang-m" },
      { art: "sort", id: "wichtig-riley", tag: "Choose", titel: "What does Mrs Harawira need?", lead: "Sort the information. <span class=\"de\">Was sagst du Mrs Harawira? Was lässt du weg?</span>",
        buckets: ["Tell Mrs Harawira", "I can leave it out"],
        items: [{ t: "Probe ist jeden Donnerstag um neunzehn Uhr, in den Schulferien nicht", b: 0 }, { t: "Man kann einfach vorbeikommen, eine Anmeldung ist nicht nötig", b: 0 }, { t: "Ein Instrument kann der Verein am Anfang für fünf Euro im Monat ausleihen", b: 0 }, { t: "Einen Notenständer muss man selbst mitbringen", b: 0 }, { t: "Der Jahresbeitrag beträgt zwanzig Euro, unter achtzehn Jahren ist er frei", b: 0 },
                { t: "Der Vorsitzende war früher Schreiner", b: 1 }, { t: "Der Probenraum wurde im Frühjahr neu gestrichen", b: 1 }, { t: "Die Parkplätze vor dem Probenraum wurden vergrößert", b: 1 }, { t: "Die Mitglieder verkaufen selbst gebackenen Kuchen", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the three words that tell Riley when practice is on and when it is not", toleranz: 0,
        satz: "Probe ist jeden [[Donnerstag]] um [[neunzehn]] Uhr, in den [[Schulferien]] allerdings nicht, und der Probenraum wurde im Frühjahr neu gestrichen.",
        e: "Key words: Donnerstag, neunzehn (Uhr) and Schulferien (no practice then). The painted room is not important." },
      { art: "mc", id: "riley", tag: "Choose the best sentence", titel: "What do you write to Mrs Harawira?", lead: "Tick the sentence that is correct, simple and exact.",
        fragen: [
          { q: "Notice: „Probe ist jeden Donnerstag um neunzehn Uhr, in den Schulferien allerdings nicht.“", o: ["Practice is every Thursday at seven in the evening, but not in the school holidays.", "Practice is every Thursday at nine in the evening, but not in the school holidays.", "Practice is every Thursday at seven in the evening, and also in the school holidays.", "The sample is every Thursday at nineteen o'clock, but not in school."], a: 0,
            e: "Neunzehn Uhr is seven in the evening, and the exception (not in the holidays) must stay. Probe here means practice, not sample." },
          { q: "Notice: „Ein Instrument kann der Verein am Anfang ausleihen. Die Leihgebühr beträgt fünf Euro im Monat.“", o: ["The club can lend Riley an instrument at the beginning. It costs five euros a month.", "The club can borrow an instrument at the start. It costs five euros a month.", "The club gives Riley an instrument for free at the beginning.", "Riley can lend an instrument from the club for five euros a year."], a: 0,
            e: "The club lends it (for a short time) and Riley pays five euros a month. A price is an exact fact: do not change it." }
        ] },
      { art: "offen", id: "riley-frage", tag: "Your words", titel: "Write to Mrs Harawira", lead: "Mrs Harawira asks: „What is this Musikverein? When is it, and what does it cost? Can Riley play without his own instrument?“ Answer in four or five English sentences. <span class=\"de\">Nur das Wichtige, Zeiten und Preise genau. Wenn dir ein Wort fehlt: umschreiben.</span>",
        fragen: [{ q: "What do you tell Mrs Harawira?", m: "The Musikverein is a music club with a brass band. Practice is every Thursday at seven in the evening, but not in the school holidays. Riley can just come along and does not have to sign up. The club can lend him an instrument for five euros a month, and he does not have to pay the yearly fee because he is under eighteen.", k: ["band|brass|music|club", "Thursday", "seven|7|evening", "holiday", "lend|borrow|instrument", "five|5|euro", "under|eighteen|free|not have to pay|fee"], min: 6 }],
        tipp: "Start like this: The Musikverein is a … Practice is every … but not … The club can lend Riley … for …" }
    ] },
    { kurz: "Language", ober: "Language", titel: "Language: plans and the passive", teile: [
      { art: "text", html: "<p class=\"lead\">When you talk about a club, you say what you <b>are going to do</b>, what happened (<b>simple past</b>) and what is done or was done: <b>“T-shirts are sold in the club shop.” “The club was started by a group of neighbours.”</b> <span class=\"de\">Im M-Zug bildest du das Passiv auch selbst.</span></p>" },
      { art: "merke", kopf: "GOING TO · SIMPLE PAST · PASSIVE", html: "<ul><li><b>going to</b> = plan: <b>am / is / are + going to + verb</b>. Mats <b>is going to</b> join the club. I <b>am going to</b> ask the leader.</li><li><b>simple past</b> = finished: We <b>met</b> at eight last Saturday. The room <b>was</b> dirty.</li><li><button class=\"term\" data-t=\"passiv\">Passive</button> (present): <b>am / is / are + verb 3</b>. T-shirts <b>are sold</b> in the club shop. The hut <b>is used</b> at weekends.</li><li>Passive (past): <b>was / were + verb 3</b>. The practice room <b>was painted</b> in spring.</li><li><b>Active → passive:</b> the object becomes the subject. A group of neighbours started the club. → The club <b>was started</b> <b>by</b> a group of neighbours. (<b>by</b> names who does it; you often leave it out.)</li></ul>" },
      { art: "luecke", id: "lang-luecke", tag: "Language", titel: "Fill in the gaps", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Riley ", { g: "is going to" }, " visit the band on Thursday."],
          ["If it rains hard, the walk ", { g: "is cancelled" }, "."],
          ["Last weekend the paths ", { g: "were cleared" }, " by two members."],
          ["The boots ", { g: "are brought" }, " to the clubhouse only on request."]
        ], extra: ["was cleared", "are going"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct passive sentence.",
        fragen: [
          { q: "Active: The leader sends a message to all members. Which passive sentence is correct?", o: ["A message is sent to all members by the leader.", "A message sends to all members by the leader.", "A message is send to all members from the leader.", "A message is been sent to all members by the leader."], a: 0,
            e: "Present passive: is / are + verb 3 (sent). The verb sends is in the simple present, so the passive stays in the present, too. A form like is been does not exist." }
        ] },
      { art: "offen", id: "passiv-bilden", m7: true, tag: "Plus · Passive", titel: "Make passive sentences", lead: "Write both sentences in the passive. Use <b>by</b> in the second sentence. <span class=\"de\">Bilde zwei Passivsätze.</span><br>1 Two members cleaned the kitchen last weekend.<br>2 The club lends boots to new members.",
        fragen: [{ q: "Write the two passive sentences.", m: "The kitchen was cleaned by two members last weekend. Boots are lent to new members by the club.", k: ["kitchen was cleaned", "boots are lent|members are lent|boots are borrowed", "by two members|by the club|by"], min: 3 }],
        tipp: "Sentence 1 is in the past: was / were + verb 3. Sentence 2 is in the present: is / are + verb 3 (lend – lent)." }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: help at the club", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. <span class=\"de\">Spielt das Gespräch zu zweit. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Read the German notice.</li><li>Tell Mrs Harawira: Practice is on Thursday at seven, not in the school holidays.</li><li>Say: Riley can just come along.</li><li>Say what the club can lend and what it costs.</li></ul></div><div class=\"sprech-karte b\"><h4>Mrs Harawira</h4><ul><li>Ask: When is the practice?</li><li>Ask: Does Riley have to sign up?</li><li>Ask: Does Riley have to bring an instrument?</li><li>Ask: How much does it cost?</li></ul></div></div><div class=\"phrasen\"><span>Practice is on …</span><span>He can just …</span><span>The club can lend …</span><span>It costs …</span><span>Could you say that again, please?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Answer Mrs Harawira", lead: "Your mother says in German: „Sag Mrs Harawira bitte, dass Riley bei der ersten Probe nur zuhören darf und dass wir ihn mit dem Auto hinbringen.“ Say it to Mrs Harawira in one or two English sentences. <span class=\"de\">Sag es freundlich und einfach.</span>",
        fragen: [{ q: "What do you tell Mrs Harawira?", m: "Riley can just listen at the first practice. We are going to take him there by car.", k: ["listen|watch|hear", "first|beginning|start", "car|drive|take", "Riley|he|him"], min: 3 }],
        tipp: "Start like this: Riley can … at the first practice. We are going to …" },
      { art: "offen", id: "challenge", m7: true, tag: "Plus · Challenge", titel: "A word is missing", lead: "Your mother says: „Sag ihr, dass die Dirigentin sehr nett ist, dass Riley zuerst eine Trompete ausprobieren darf und sie dann für fünf Euro im Monat leihen kann.“ You do not know the English word for Dirigentin. Describe it and tell Mrs Harawira in two English sentences.",
        fragen: [{ q: "What do you tell Mrs Harawira?", m: "The woman who leads the band is very nice. Riley can try a trumpet first, and then he can borrow it for five euros a month.", k: ["lead|leader|conductor|teacher|person|woman", "nice|kind|friendly", "trumpet|try", "five|5|euro"], min: 3 }],
        tipp: "Start like this: The woman who … the band is … Riley can try … and then …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I think of the ", { g: "person" }, " and what he or she needs."],
          ["Then I ", { g: "choose" }, " the important points, but I pass on exact facts such as times and ", { g: "fees" }, " correctly."],
          ["I say it in simple words and I do not translate ", { g: "word for word" }, "."]
        ], extra: ["copy", "guess"] }
    ] }
  ],
  weiter: { text: "Well done! You can choose what a person needs, pass on exact facts and help in both directions – and you can summarise an English text in German." }
});
