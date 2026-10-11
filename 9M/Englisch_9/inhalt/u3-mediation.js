/* Englisch 9M · Unit 3 Discover South Africa · Mediation: At the hospital · M-Fassung
   (Sprachmittlung statt Übersetzung: Situation und Adressat erkennen, Wichtiges auswählen, Unwichtiges weglassen, einfach sagen,
   genaue Angaben (Uhrzeit, Allergie, Besuchszeiten, Sonderregel, Korrektur der Sprecherin) richtig weitergeben;
   Richtung Deutsch → Englisch mündlich für die Ärztin, Englisch → Deutsch schriftlich, auch als Zusammenfassung in eigenen Worten;
   Grammatik der Unit im Kontext: past progressive mit when/while, present perfect mit for/since)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, zusammenfassen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Gesundheit, Reisen).
   Texte: „Seaview Clinic“ (texte/u3/mediation-notice-m.js), „Was mit Lukas passiert ist“ (texte/u3/mediation-mutter-m.js)
   – Klinik und Personen sind erfunden. */
D7Kit.seite({
  id: "u3-mediation",
  titel: "Mediation: At the hospital",
  einleitung: "You are on holiday in South Africa with your family. Your little brother <b>Lukas</b> has hurt his arm, and your family is at the <b>Seaview Clinic</b> (an invented clinic). Your parents do not speak English well, and the doctor does not speak German. You are the <b>language helper</b>. Mediation is <b>not</b> translating word for word: you decide what the person needs, you pass on exact facts correctly and you say it simply.",
  zeit: "etwa 45 Minuten",
  ziele: ["🧭 I know what mediation is and think of the person who needs the information.", "🔎 I choose the important points and leave out the rest.", "🔢 I pass on times, rules and allergies exactly.", "🔄 I help in both directions and I can summarise an English text in German.", "🕑 I use the past progressive with when/while and the present perfect with for/since."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter, passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach gesagt."],
    ward: ["ward", "Eine Station im Krankenhaus. Dort liegen Patienten, die über Nacht oder länger bleiben."],
    insurance: ["insurance card", "Die Versichertenkarte. Sie zeigt, bei welcher Krankenkasse jemand versichert ist."],
    emergency: ["emergency", "Ein Notfall: Jemand braucht sofort Hilfe, zum Beispiel nach einem schweren Unfall."],
    wrist: ["wrist", "Das Handgelenk: die Stelle, an der der Arm an die Hand grenzt."],
    swollen: ["swollen", "Geschwollen: Eine Stelle am Körper ist dicker als normal, zum Beispiel nach einem Stoß."],
    allergic: ["allergic", "Allergisch gegen etwas sein heißt: Der Körper reagiert schlecht darauf, zum Beispiel auf eine bestimmte Speise."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „the part of the arm next to the hand“."]
  },
  haupttext: "u3-med-notice-m",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What is wrong with the boy? Who is helping the family to understand the nurse?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u3-hospital.jpg\" alt=\"A nurse explains something to a family at a clinic reception; a boy has his arm in a sling and his older sister translates.\" loading=\"lazy\" style=\"display:block;width:100%;max-width:760px;height:auto;border-radius:14px\"><figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI (made with AI) · at the reception of a clinic</figcaption></figure><p>What would you say to the nurse in this situation?</p>" },
      { art: "text", html: "<p class=\"lead\">Your little brother <b>Lukas</b> was playing and hurt his arm. It is not very serious, but your family goes to the <b>Seaview Clinic</b>. The clinic and the people are invented. In the clinic there is an English sheet, and the doctor, <b>Dr Mokoena</b>, speaks English. Your parents need your help, but not every word: they need the <b>right</b> information.</p>" },
      { art: "merke", kopf: "MEDIATION", html: "<p><button class=\"term\" data-t=\"mediation\">Mediation</button> is <b>not</b> translation. Before you speak, ask three questions:</p><ol><li><b>Who</b> needs the information, and what does the person want to know?</li><li><b>What</b> is important for this person? Leave out the rest.</li><li><b>How</b> can I say it simply?</li></ol><p>Pass on <b>exact facts</b> (times, rules, allergies) correctly. If a speaker corrects herself, use the <b>last</b> version. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false.",
        aussagen: [
          ["In mediation you say every word of the text again.", false],
          ["You can leave out unimportant details, but not a time or an allergy.", true],
          ["If the speaker corrects herself, you pass on both versions.", false],
          ["If you don't know a word, you can describe it with simple words.", true]
        ] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">At the Seaview Clinic your parents see an English sheet on the wall. They ask you: <b>What do we have to do? What are the rules?</b> Lukas will stay on a <button class=\"term\" data-t=\"ward\">ward</button> for one night. <span class=\"de\">Lies das Blatt. Nicht alles ist für deine Eltern wichtig.</span></p>" },
      { art: "lesetext", lesetext: "u3-med-notice-m" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the sheet say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-med-notice-m",
        fragen: [
          { q: "Where must you go first?", zeilen: [6, 6], e: "To the reception desk.", tipp: "Look at the paragraph called Arrival." },
          { q: "What can you do if you have forgotten the insurance card?", zeilen: [9, 10], e: "You can bring it later, but you must tell the nurse.", tipp: "Look for the word forgotten." },
          { q: "When is the visiting time on a Wednesday?", zeilen: [18, 19], e: "From three to five. On the other days it is from two to four.", tipp: "Look for the word Wednesdays." },
          { q: "Where can you use your phone?", zeilen: [23, 24], e: "In the garden. Calls are not allowed in the waiting area or on the wards.", tipp: "Look at the paragraph about mobile phones." }
        ] },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "What do your parents need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du deinen Eltern? Was lässt du weg?</span>",
        buckets: ["Tell your parents", "I can leave it out"],
        items: [{ t: "Go to the reception desk first", b: 0 }, { t: "Bring the insurance card or tell the nurse that it is missing", b: 0 }, { t: "Patients are not called in the order of arrival, and emergencies come first", b: 0 }, { t: "Visiting hours are two to four, but on Wednesdays three to five", b: 0 }, { t: "Phone on silent, calls only in the garden", b: 0 },
                { t: "The cafeteria has a special offer on fruit juice", b: 1 }, { t: "The car park is free for two hours", b: 1 }, { t: "The gift shop is closed on Sundays", b: 1 }, { t: "The chapel is open until six", b: 1 }] },
      { art: "mc", id: "auswahl", tag: "Think", titel: "What do your parents ask?", lead: "Tick the German answer that is correct and helpful.",
        fragen: [
          { q: "Your father asks: „When can we visit Lukas on Wednesday?“", o: ["Mittwochs ist Besuchszeit von drei bis fünf Uhr nachmittags.", "Jeden Tag von zwei bis vier Uhr, auch mittwochs.", "Mittwochs von zwei bis fünf Uhr nachmittags.", "Am Mittwoch darf niemand zu den Patienten."], a: 0,
            e: "Wednesday is the exception. A time must be passed on exactly: the other answers change the rule." },
          { q: "Your mother asks: „We left the insurance card in the holiday flat. Is that a problem?“", o: ["Nicht schlimm: Wir können die Karte später bringen, müssen es aber der Schwester sagen.", "Doch: Ohne die Karte nimmt die Klinik Lukas nicht auf.", "Wir müssen die Karte gar nicht mitbringen.", "Wir dürfen die Karte nur am Empfang abgeben."], a: 0,
            e: "The sheet gives a way out, but with a condition: tell the nurse." }
        ] }
    ] },
    { kurz: "Pass it on", ober: "Steps 3 and 4", titel: "Say it for your parents", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say in German?", lead: "Tick the German sentence that is correct, simple and useful.",
        fragen: [
          { q: "Sheet: „A nurse calls the patients by name, not in the order of arrival. Emergencies are always seen first, so the waiting time can change.“", o: ["Die Schwester ruft die Patienten mit Namen auf, aber nicht der Reihe nach; Notfälle kommen immer zuerst, deshalb kann das Warten unterschiedlich lang dauern.", "Die Schwester ruft die Patienten der Reihe nach auf; wer zuerst kommt, ist zuerst dran.", "Notfälle werden nicht untersucht, deshalb wartet man sehr lange.", "Die Wartezeit ist immer gleich, weil die Schwester alle aufruft."], a: 0,
            e: "Short and clear, and the two rules are both there: names, and emergencies first." },
          { q: "Sheet: „Only two visitors can come at the same time. Children under twelve may visit only if a nurse agrees.“", o: ["Es dürfen nur zwei Besucher gleichzeitig kommen, und Kinder unter zwölf nur, wenn eine Schwester es erlaubt.", "Es dürfen zwei Besucher kommen, und Kinder unter zwölf dürfen nie zu Besuch kommen.", "Kinder unter zwölf dürfen immer kommen, aber nur zu zweit.", "Es dürfen höchstens zwölf Besucher gleichzeitig kommen."], a: 0,
            e: "The condition (only if a nurse agrees) is an exact fact. Do not make it stronger or weaker." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to your parents", min: 45,
        auftrag: "<p><strong>Sprachmittlung:</strong> Deine Eltern verstehen das englische Hinweisblatt der Seaview Clinic nicht. Erkläre ihnen <b>auf Deutsch</b> das Wichtige: Wohin müssen sie zuerst und was müssen sie mitbringen? Wie läuft das Warten? Wann sind Besuchszeiten (auch am Mittwoch)? Was gilt für das Handy?</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Unwichtiges kannst du weglassen, Uhrzeiten und Regeln musst du genau weitergeben.</p>",
        starter: ["Mama, Papa, auf dem Blatt steht:", "Zuerst müssen wir …", "Wir sollen … mitbringen. Wenn wir …", "Beim Warten …", "Besuchszeiten sind …", "Das Handy …"],
        kriterien: ["Der Text sagt, dass man zuerst zum Empfang geht.", "Der Text nennt, was man mitbringen muss (Versichertenkarte oder Papiere) und was gilt, wenn man sie vergessen hat.", "Er erklärt das Warten: Patienten werden mit Namen aufgerufen, Notfälle kommen zuerst.", "Er nennt die Besuchszeiten genau (zwei bis vier Uhr, mittwochs drei bis fünf; nur zwei Besucher).", "Er nennt die Handyregel (lautlos, Telefonieren nur im Garten).", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung. Unwichtiges (Saft in der Cafeteria, Parkplatz, Geschenkladen, Kapelle) fehlt."] },
      { art: "schreiben", id: "zusammenfassung", m7: true, tag: "Plus · Summary", titel: "Summarise the sheet in German", min: 45,
        auftrag: "<p><strong>Plus – Zusammenfassung:</strong> Deine Klasse sammelt Hinweise für eine Mappe „Hilfe im Ausland“. Fasse das englische Blatt der Seaview Clinic <b>auf Deutsch in eigenen Worten</b> zusammen – in vier bis sechs Sätzen für Mitschüler, die das Blatt nicht gelesen haben.</p><p>Nenne nur das Wichtigste: Anmeldung, Warten, Besuchszeiten mit der Sonderregel und die Handyregel. Schreibe nicht Satz für Satz mit und lass Nebensächliches weg.</p>",
        starter: ["Das Blatt der Klinik erklärt: …", "Zuerst muss man …", "Beim Warten …", "Besucher dürfen …", "Das Handy …"],
        kriterien: ["Die Zusammenfassung nennt die Anmeldung am Empfang und was man mitbringen soll.", "Sie erklärt kurz das Warten (Aufruf mit Namen, Notfälle zuerst).", "Sie nennt die Besuchszeiten mit der Sonderregel für Mittwoch (drei bis fünf).", "Sie nennt die Handyregel.", "Sie ist auf Deutsch, in eigenen Worten – nicht Satz für Satz übersetzt. Nebensächliches (Saft, Parkplatz, Geschenkladen, Kapelle) fehlt."] }
    ] },
    { kurz: "German to English", ober: "Steps 1 to 4", titel: "From German into English", teile: [
      { art: "text", html: "<p class=\"lead\">Now the doctor wants to know what happened. Your mother, <b>Frau Brandl</b>, is upset and tells you the story in German. She says everything that comes into her head, and she corrects herself once. You tell the doctor only what she needs, and you pass on the <b>exact</b> facts. <span class=\"de\">Du sagst der Ärztin auf Englisch das Wichtige: Was ist passiert? Wann genau? Wo tut es weh? Gibt es eine Allergie?</span></p>" },
      { art: "lesetext", lesetext: "u3-med-mutter-m" },
      { art: "sort", id: "wichtig-arzt", tag: "Choose", titel: "What does Dr Mokoena need?", lead: "Sort the information. <span class=\"de\">Was sagst du der Ärztin? Was lässt du weg?</span>",
        buckets: ["Tell the doctor", "I can leave it out"],
        items: [{ t: "Lukas ist vom Baum gefallen und auf dem linken Arm gelandet", b: 0 }, { t: "Es war kurz vor zehn Uhr", b: 0 }, { t: "Das linke Handgelenk tut weh, wenn er es bewegt, und ist ein bisschen dick", b: 0 }, { t: "Seit dem Frühstück hat er nichts gegessen und getrunken", b: 0 }, { t: "Er ist allergisch gegen Nüsse", b: 0 },
                { t: "Es gab Toast mit Marmelade und Orangensaft", b: 1 }, { t: "Der Vater hat Fotos von den Vögeln gemacht", b: 1 }, { t: "Die Vermieterin wollte die Schlüssel bringen", b: 1 }, { t: "Der Taxifahrer war nett", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the three words for the exact time and the one word that tells the doctor what Lukas is allergic to", toleranz: 0,
        satz: "Es war [[kurz]] [[vor]] [[zehn]], und Lukas hat eine Allergie gegen [[Nüsse]], aber der Taxifahrer war übrigens sehr nett.",
        e: "Key words: kurz vor zehn (the last version of the time) and Nüsse (the allergy). The taxi driver is not important." },
      { art: "mc", id: "arzt", tag: "Choose the best sentence", titel: "What do you say to Dr Mokoena?", lead: "Tick the sentence that is correct, simple and exact.",
        fragen: [
          { q: "Mother: „Gegen zehn Uhr – nein, Moment, es war kurz vor zehn.“", o: ["It happened just before ten o'clock.", "It happened at about ten o'clock.", "It happened just after ten o'clock.", "It happened at ten past nine."], a: 0,
            e: "The mother corrects herself: the last version counts. Do not say both." },
          { q: "Mother: „Lukas hat eine Allergie gegen Nüsse. Das muss die Ärztin unbedingt wissen.“", o: ["Lukas is allergic to nuts. This is very important.", "Lukas has an allergy nuts.", "Lukas is allergic to everything.", "Lukas does not like nuts."], a: 0,
            e: "Allergic to + noun. Do not change an allergy into a taste (does not like)." },
          { q: "Mother: „Während wir den Tisch abgeräumt haben, ist er plötzlich abgerutscht und auf seinen linken Arm gefallen.“", o: ["While we were clearing the table, he slipped and fell on his left arm.", "While we cleared the table, he was slipping and fall on his left arm.", "We were clearing the table while he is slipping.", "While we were clearing the table, he was fell on his arm left."], a: 0,
            e: "Long action: were clearing. The quick actions slipped and fell are in the simple past." }
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "Your mother does not know the English word, and you do not know it either. Match the German word with a simple description. <span class=\"de\">Wie kannst du das Wort mit einfachen Wörtern umschreiben?</span>",
        paare: [["Handgelenk", "The part of your arm next to your hand."], ["abgerutscht", "His foot or hand did not hold, and he fell down."], ["Allergie", "Your body reacts badly to something, for example a food."], ["geschwollen", "Bigger than normal after a knock."]] },
      { art: "offen", id: "arzt-frage", tag: "Your words", titel: "Tell Dr Mokoena", lead: "Dr Mokoena asks: „What happened to your brother? When exactly was it? Where does it hurt? Does he have an allergy?“ Answer in four or five English sentences. <span class=\"de\">Nur das Wichtige, Uhrzeit und Allergie genau.</span>",
        fragen: [{ q: "What do you tell Dr Mokoena?", m: "My brother Lukas was climbing a tree in the garden when he slipped and fell on his left arm. It happened just before ten o'clock this morning. His left wrist hurts when he moves it, and it is a bit swollen. He is allergic to nuts. He has not eaten anything since breakfast.", k: ["climb|climbing|climbed|tree|fell|fall|fallen|slipped", "before|ten to|nine fifty|9.50|nearly ten|almost ten", "wrist|arm|left|hurts|hurt|pain", "allerg", "nut|nuts"], min: 4 }],
        tipp: "Start like this: My brother was climbing … when he fell. / It happened just before … / He is allergic to …" }
    ] },
    { kurz: "Language", ober: "Language", titel: "Language: past progressive and present perfect", teile: [
      { art: "text", html: "<p class=\"lead\">To tell the doctor what was happening when the accident happened, you use the <b>past progressive</b> and the <b>simple past</b>. To say how long something has lasted, you use the <b>present perfect</b>. <span class=\"de\">Was lief gerade, als etwas passierte? Und wie lange dauert etwas schon?</span></p>" },
      { art: "merke", kopf: "PAST PROGRESSIVE · PRESENT PERFECT", html: "<ul><li><b>was / were + verb-ing</b> is the long action (the background): Lukas <b>was climbing</b> a tree. We <b>were clearing</b> the table.</li><li>The short action that interrupts it is in the <b>simple past</b>: He was climbing a tree <b>when</b> he fell. <b>While</b> we were clearing the table, he slipped.</li><li><b>when</b> often goes with the short action, <b>while</b> with the long action.</li><li><b>have / has + past participle</b> with <b>for</b> and <b>since</b>: We <b>have been</b> here <b>for</b> two hours (how long). We <b>have been</b> here <b>since</b> ten o'clock (when it started).</li><li>Question: <b>How long have</b> you been at the clinic?</li></ul>" },
      { art: "sort", id: "lang-kurz", tag: "Language", titel: "Long action or short action?", lead: "Put each action in the right box. <span class=\"de\">Was lief gerade? Was ist plötzlich passiert?</span>",
        buckets: ["Long action (was / were + -ing)", "Short action (simple past)"],
        items: [{ t: "was climbing a tree", b: 0 }, { t: "were clearing the table", b: 0 }, { t: "was shining", b: 0 }, { t: "slipped", b: 1 }, { t: "fell", b: 1 }, { t: "heard a cry", b: 1 }] },
      { art: "luecke", id: "present", tag: "Language", titel: "Fill in the gaps", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["He ", { g: "was climbing" }, " a tree when he fell."],
          ["While we ", { g: "were clearing" }, " the table, Lukas slipped."],
          ["What ", { g: "were" }, " you doing when your brother fell?"],
          ["Lukas ", { g: "has had" }, " a pain in his wrist since ten o'clock."],
          ["We ", { g: "have been" }, " at the clinic for two hours now."],
          ["Lukas has not eaten anything ", { g: "since" }, " this morning."]
        ], extra: ["is climbing", "have had"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Tell the doctor: Er ist auf einen Baum geklettert, als er fiel.", o: ["He was climbing a tree when he fell.", "He climbing a tree when he fell.", "He was climb a tree when he was fall.", "He is climbing a tree when he fell."], a: 0,
            e: "Long action: was + climbing. Short action: fell (simple past)." },
          { q: "Tell the nurse: Wir sind seit zwei Stunden hier.", o: ["We have been here for two hours.", "We are here since two hours.", "We have been here since two hours.", "We were here for two hours now."], a: 0,
            e: "A length of time (two hours) goes with for. Since needs a starting point, for example since ten o'clock." }
        ] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: help at the clinic", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. Change roles. <span class=\"de\">Spielt das Gespräch zu zweit.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Listen to your mother (German).</li><li>Tell Dr Mokoena what happened and when exactly.</li><li>Say where it hurts and mention the allergy.</li><li>Ask Dr Mokoena what happens next.</li></ul></div><div class=\"sprech-karte b\"><h4>Dr Mokoena</h4><ul><li>Ask: What happened?</li><li>Ask: When exactly was it?</li><li>Ask: Where does it hurt?</li><li>Ask: Does he have any allergies?</li></ul></div></div><div class=\"phrasen\"><span>He was … when he fell.</span><span>It happened just before …</span><span>He is allergic to …</span><span>He has not eaten since …</span><span>Could you say that again, please?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Tell the nurse", lead: "Nurse Zodwa asks you: „Is there anything else I should know?“ Your mother says in German that Lukas is very afraid of injections and that he has not eaten anything since breakfast. Say it to the nurse in two English sentences. <span class=\"de\">Sag es freundlich und einfach.</span>",
        fragen: [{ q: "What do you tell Nurse Zodwa?", m: "My brother is very afraid of injections. He has not eaten anything since breakfast.", k: ["afraid|scared|frightened|worried|nervous", "injection|injections|needle|needles", "eaten|eat|food|breakfast", "since"], min: 3 }],
        tipp: "Start like this: My brother is afraid of … / He has not … since …" },
      { art: "offen", id: "challenge", m7: true, tag: "Plus · Challenge", titel: "A message for Nurse Zodwa", lead: "Frau Brandl sagt: „Sag Nurse Zodwa bitte, dass mein Mann die Versichertenkarte morgen früh bringt – nein, warte, schon heute Abend um sieben Uhr – und dass er dann auch Lukas' Pyjama mitbringt.“ Tell Nurse Zodwa in one or two English sentences.",
        fragen: [{ q: "What do you tell Nurse Zodwa?", m: "My father will bring the insurance card this evening at seven o'clock. He will also bring Lukas's pyjamas.", k: ["father|dad|husband", "insurance|card", "evening|tonight|today", "seven|7"], min: 3 }],
        tipp: "Frau Brandl corrects herself – use the last version. Start like this: My father will bring … this evening at …" },
      { art: "offen", id: "gruende", m7: true, tag: "Plus · Your opinion", titel: "Everything or only the important points?", lead: "Should a language helper tell the doctor everything the mother says? Give your opinion and two reasons in your own words.",
        fragen: [{ q: "Give your opinion and two reasons.", m: "I think the helper should tell the doctor only the important points, because the doctor has little time. Also, if I say too much, the important facts like the time and the allergy can get lost.", k: ["think|opinion|should|better|believe", "because|reason|also|so", "important|time|facts|information|allergy|simple|short|understand|lost|confus"], min: 3 }],
        tipp: "Think about the doctor: What does she need? What can go wrong if you tell too much? Use because and also." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I think of the ", { g: "person" }, " and what he or she wants to know."],
          ["Then I ", { g: "choose" }, " the important points and ", { g: "leave out" }, " the rest."],
          ["I pass on exact facts such as times and ", { g: "allergies" }, " correctly."],
          ["I say it in ", { g: "simple" }, " words and I do not translate ", { g: "word for word" }, "."],
          ["At the end I ", { g: "check" }, " that the person has understood."]
        ], extra: ["copy", "guess"] }
    ] }
  ],
  weiter: { text: "Well done! You can choose what a person needs, pass on exact facts and help in both directions – and you can summarise an English text in German." }
});
