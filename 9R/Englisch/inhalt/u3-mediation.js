/* Englisch 9R · Unit 3 Discover South Africa · Mediation: At the hospital
   (Sprachmittlung statt Übersetzung in fünf Stufen: finden, auswählen, vereinfachen, adressatengerecht weitergeben, selbst handeln;
   Richtung Englisch → Deutsch: Hinweisblatt einer Klinik für die Eltern, Deutsch → Englisch: Bericht der Mutter für die Ärztin;
   Grammatik der Unit im Kontext: past progressive mit when/while ("He was climbing a tree when he fell."))
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Gesundheit, Reisen).
   Texte: „Seaview Clinic“ (texte/u3/mediation-notice.js), „Was mit Lukas passiert ist“ (texte/u3/mediation-mutter.js)
   – Klinik und Personen sind erfunden. */
D7Kit.seite({
  id: "u3-mediation",
  titel: "Mediation: At the hospital",
  einleitung: "You are on holiday in South Africa with your family. Your little brother <b>Lukas</b> has hurt his arm, and your family is at the <b>Seaview Clinic</b> (an invented clinic). Your parents do not speak English well, and the doctor does not speak German. You are the <b>language helper</b>. Mediation is <b>not</b> translating word for word: you decide what is important for the person and say it simply.",
  zeit: "etwa 40 Minuten",
  ziele: ["🧭 I know the five steps of mediation.", "🔎 I find and choose the important information.", "💬 I say it simply for the person who needs it.", "🔄 I help in both directions: English to German and German to English.", "🕑 I use the past progressive: He was climbing a tree when he fell."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter, passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Wichtige, einfach gesagt."],
    ward: ["ward", "Eine Station im Krankenhaus. Dort liegen Patienten, die über Nacht oder länger bleiben."],
    insurance: ["insurance card", "Die Versichertenkarte. Sie zeigt, bei welcher Krankenkasse jemand versichert ist."],
    wrist: ["wrist", "Das Handgelenk: die Stelle, an der der Arm an die Hand grenzt."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „the part of the arm next to the hand“."]
  },
  haupttext: "u3-med-notice",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Your family is on holiday in South Africa. Your little brother <b>Lukas</b> was playing and hurt his arm. It is not very serious, but your family goes to the <b>Seaview Clinic</b>. The clinic and the people are invented. In the clinic there is an English sheet, and the doctor speaks English. Your parents need your help.</p>" },
      { art: "merke", kopf: "MEDIATION – FIVE STEPS", html: "<ol><li><b>Find</b> the information.</li><li><b>Choose</b> what is important for this person.</li><li><b>Simplify</b> it: short sentences, easy words.</li><li><b>Pass it on</b> and think of the person.</li><li><b>Act</b> in a real situation.</li></ol><p>It is <b>not</b> translation. You may leave out unimportant details. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "ordnen", id: "stufen", tag: "Order", titel: "The five steps", lead: "Put the steps of mediation in the right order. <span class=\"de\">Bringe die fünf Stufen in die richtige Reihenfolge.</span>",
        schritte: ["Find the information.", "Choose what is important for the person.", "Make it simple.", "Say it for the person.", "Act in a real situation."] },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In mediation you say every word of the text again.", false],
          ["You think about who needs the information.", true],
          ["You can leave out details that the person does not need.", true],
          ["If you don't know a word, you can describe it with simple words.", true],
          ["A good helper says the sentences in the same order and with the same words as the text.", false]
        ] },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["reception", "Empfang"], ["insurance card", "Versichertenkarte"], ["waiting area", "Wartebereich"], ["visiting hours", "Besuchszeiten"], ["ward", "Station im Krankenhaus"], ["on silent", "lautlos gestellt"]] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">At the Seaview Clinic your parents see an English sheet on the wall. They ask you: <b>What do we have to do? What are the rules?</b> <span class=\"de\">Lies das Blatt. Nicht alles ist für deine Eltern wichtig.</span></p>" },
      { art: "lesetext", lesetext: "u3-med-notice" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the sheet say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-med-notice",
        fragen: [
          { q: "Where must you go first?", zeilen: [5, 5], e: "To the reception desk.", tipp: "Look at the paragraph called Arrival." },
          { q: "What must you bring for the patient?", zeilen: [7, 7], e: "The insurance card or papers.", tipp: "Look for the word bring." },
          { q: "When can patients on the wards have visitors?", zeilen: [12, 13], e: "Every day from two to four in the afternoon.", tipp: "Look at the paragraph about visiting hours." },
          { q: "Where can you use your phone?", zeilen: [16, 17], e: "In the garden. In the waiting area and on the wards calls are not allowed.", tipp: "Look at the paragraph about mobile phones." }
        ] },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "What do your parents need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du deinen Eltern? Was lässt du weg?</span>",
        buckets: ["Tell your parents", "I can leave it out"],
        items: [{ t: "Go to the reception desk first", b: 0 }, { t: "Bring the insurance card or papers", b: 0 }, { t: "A child must come with an adult", b: 0 }, { t: "Emergencies are seen first, so you may have to wait", b: 0 }, { t: "Visitors can come from two to four in the afternoon", b: 0 }, { t: "Phone on silent, calls only in the garden", b: 0 },
                { t: "The cafeteria has a special offer on fruit juice", b: 1 }, { t: "The gift shop is closed on Sundays", b: 1 }, { t: "The waiting area is blue", b: 1 }] }
    ] },
    { kurz: "Pass it on", ober: "Steps 3 and 4", titel: "Say it for your parents", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say in German?", lead: "Tick the German sentence that is correct, simple and useful.",
        fragen: [
          { q: "Sheet: „Please go to the reception desk first. A nurse writes down the patient's name and the reason for the visit.“", o: ["Zuerst müssen wir zum Empfang; dort schreibt eine Schwester Lukas' Namen und den Grund auf.", "Bitte geht zu dem Empfangstisch zuerst. Eine Schwester schreibt hinunter den Namen vom Patienten und den Grund von dem Besuch.", "In der Cafeteria gibt es Saft im Angebot.", "Wir sollen etwas aufschreiben."], a: 0,
            e: "Short and clear: where to go and what happens there. The juice offer does not help your parents." },
          { q: "Sheet: „Emergencies are always seen first, so the waiting time can change.“", o: ["Notfälle kommen immer zuerst dran, deshalb kann das Warten unterschiedlich lang dauern.", "Notfälle werden immer erst gesehen, deswegen die Wartezeit kann ändern.", "Wir warten nicht, weil Lukas ein Notfall ist.", "Es gibt keine Wartezeit."], a: 0,
            e: "The meaning is clear and the sentence sounds like normal German. Do not say more than the sheet says: the sheet does not say that Lukas is an emergency." },
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to your parents", min: 35,
        auftrag: "<p><strong>Sprachmittlung:</strong> Deine Eltern verstehen das englische Hinweisblatt der Seaview Clinic nicht. Erkläre ihnen <b>auf Deutsch</b> das Wichtige: Wohin müssen sie zuerst und was müssen sie mitbringen? Wo und wie warten sie? Wann sind Besuchszeiten? Was gilt für das Handy?</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Unwichtiges kannst du weglassen.</p>",
        starter: ["Mama, Papa, auf dem Blatt steht:", "Zuerst müssen wir …", "Wir sollen … mitbringen.", "Im Wartebereich …", "Besuchszeiten sind …", "Das Handy …"],
        kriterien: ["Der Text sagt, dass man zuerst zum Empfang geht.", "Der Text nennt, was man mitbringen muss (Versichertenkarte oder Papiere).", "Er erklärt das Warten: Wartebereich, Notfälle kommen zuerst.", "Er nennt die Besuchszeiten (zwei bis vier Uhr nachmittags, nur zwei Besucher).", "Er nennt die Handyregel (lautlos, Telefonieren nur im Garten).", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung.", "Unwichtiges (Saft in der Cafeteria, Geschenkladen) fehlt."] }
    ] },
    { kurz: "German to English", ober: "Steps 1 to 4", titel: "From German into English", teile: [
      { art: "text", html: "<p class=\"lead\">Now the doctor, <b>Dr Mokoena</b>, wants to know what happened. Your mother, <b>Frau Brandl</b>, is upset and tells you the story in German. She says everything that comes to her mind. You tell the doctor only what she needs. <span class=\"de\">Du sagst der Ärztin auf Englisch das Wichtige: Was ist passiert? Wann? Wo tut es weh? Gibt es eine Allergie?</span></p>" },
      { art: "lesetext", lesetext: "u3-med-mutter" },
      { art: "sort", id: "wichtig-arzt", tag: "Choose", titel: "What does Dr Mokoena need?", lead: "Sort the information. <span class=\"de\">Was sagst du der Ärztin? Was lässt du weg?</span>",
        buckets: ["Tell the doctor", "I can leave it out"],
        items: [{ t: "Lukas ist vom Baum gefallen", b: 0 }, { t: "Es war kurz nach zehn Uhr", b: 0 }, { t: "Das linke Handgelenk tut weh, wenn er es bewegt", b: 0 }, { t: "Es ist ein bisschen dick", b: 0 }, { t: "Lukas ist sieben Jahre alt", b: 0 }, { t: "Er hat keine Allergien", b: 0 },
                { t: "Es gab Toast mit Marmelade", b: 1 }, { t: "Die Sonne hat geschienen", b: 1 }, { t: "Der Taxifahrer war nett", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the two words that tell the doctor where it hurts", toleranz: 0,
        satz: "Jetzt tut ihm das [[linke]] [[Handgelenk]] weh, und der Taxifahrer war übrigens sehr nett.",
        e: "Key words: linke Handgelenk – the doctor needs to know the place. The taxi driver is not important." },
      { art: "mc", id: "arzt", tag: "Choose the best sentence", titel: "What do you say to Dr Mokoena?", lead: "Tick the sentence that is correct, simple and clear.",
        fragen: [
          { q: "Mother: „Er ist abgerutscht und auf seinen linken Arm gefallen.“", o: ["He slipped and fell on his left arm.", "He is slipping and falling at his arm left.", "He slid off and fallen on the arm.", "The tree fell on his arm."], a: 0,
            e: "Simple past for the two quick actions. The word order is the same as in a normal English sentence." },
          { q: "Mother: „Allergien hat er keine.“", o: ["He has no allergies.", "He has not allergies.", "Allergies he has no.", "He is allergic nothing."], a: 0,
            e: "With the word allergies use has no. Do not copy the German word order." },
          { q: "Mother: „Es war kurz nach zehn Uhr, im Garten der Ferienwohnung.“", o: ["It happened just after ten o'clock, in the garden of our holiday flat.", "It happens after ten clocks in the garden.", "It was happening at morning ten in the garden holiday.", "It was ten in the garden."], a: 0,
            e: "Time and place in a short sentence: just after ten o'clock, in the garden." }
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "Your mother does not know the English word, and you do not know it either. Match the German word with a simple description. <span class=\"de\">Wie kannst du das Wort mit einfachen Wörtern umschreiben?</span>",
        paare: [["Handgelenk", "The part of your arm next to your hand."], ["abgerutscht", "His foot or hand did not hold, and he fell down."], ["dick", "Bigger than normal after a knock."], ["Versichertenkarte", "A card that shows who pays for the doctor."]] },
      { art: "offen", id: "arzt-frage", tag: "Your words", titel: "Tell Dr Mokoena", lead: "Dr Mokoena asks: „What happened to your brother? When was it? Where does it hurt? Does he have an allergy?“ Answer in three or four English sentences. <span class=\"de\">Nur das Wichtige. Benutze die Notizen von Station 4.</span>",
        fragen: [{ q: "What do you tell Dr Mokoena?", m: "My brother Lukas was climbing a tree in the garden when he fell. It was just after ten o'clock this morning. His left wrist hurts when he moves it. He has no allergies.", k: ["climb|climbing|climbed|tree|fell|fall|fallen|slipped", "ten|10", "wrist|arm|left|hurts|hurt|pain", "allerg"], min: 3 }],
        tipp: "Start like this: My brother was climbing … when he fell. / His … hurts." }
    ] },
    { kurz: "Language", ober: "Language", titel: "Language: the past progressive", teile: [
      { art: "text", html: "<p class=\"lead\">To tell the doctor what was happening when the accident happened, you use the <b>past progressive</b> and the <b>simple past</b>. <span class=\"de\">Was gerade lief, als etwas passierte? Dafür brauchst du die Verlaufsform der Vergangenheit.</span></p>" },
      { art: "merke", kopf: "PAST PROGRESSIVE", html: "<ul><li><b>was / were + verb-ing</b>: Lukas <b>was climbing</b> a tree. We <b>were having</b> breakfast.</li><li>The long action (the background) is in the past progressive. The short action that interrupts it is in the <b>simple past</b>: He was climbing a tree <b>when</b> he fell.</li><li><b>when</b> is often used with the short action: <b>When</b> he fell, we were sitting in the garden.</li><li><b>while</b> is often used with the long action: <b>While</b> we were having breakfast, Lukas was climbing.</li><li>Question: <b>What were you doing</b> when he fell?</li></ul>" },
      { art: "sort", id: "lang-kurz", tag: "Language", titel: "Long action or short action?", lead: "Put each action in the right box. <span class=\"de\">Was lief gerade? Was ist plötzlich passiert?</span>",
        buckets: ["Long action (was / were + -ing)", "Short action (simple past)"],
        items: [{ t: "was climbing a tree", b: 0 }, { t: "were having breakfast", b: 0 }, { t: "was shining", b: 0 }, { t: "fell", b: 1 }, { t: "heard a cry", b: 1 }, { t: "ran to the garden", b: 1 }] },
      { art: "luecke", id: "present", tag: "Language", titel: "Fill in the gaps", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["He ", { g: "was climbing" }, " a tree when he fell."],
          ["We ", { g: "were having" }, " breakfast when we heard a cry."],
          ["The sun ", { g: "was shining" }, " when it happened."],
          ["What ", { g: "were" }, " you doing when your brother fell?"]
        ], extra: ["were climbing", "is shining"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Tell the doctor: Er ist auf einen Baum geklettert, als er fiel.", o: ["He was climbing a tree when he fell.", "He climbing a tree when he fell.", "He was climb a tree when he was fall.", "He is climbing a tree when he fell."], a: 0,
            e: "Long action: was + climbing. Short action: fell (simple past)." },
          { q: "Tell the nurse: Meine Mutter hat gerade das Frühstück gemacht, als es passierte.", o: ["My mother was making breakfast when it happened.", "My mother were making breakfast when it happened.", "My mother was make breakfast when it happened.", "My mother made breakfast when it was happening."], a: 0,
            e: "My mother is one person: was. After was you need a verb with -ing." }
        ] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: help at the clinic", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. <span class=\"de\">Spielt das Gespräch zu zweit. Wechselt die Rollen.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Listen to your mother (German).</li><li>Tell Dr Mokoena what happened and when.</li><li>Say where it hurts.</li><li>Say: no allergies. Ask Dr Mokoena what happens next.</li></ul></div><div class=\"sprech-karte b\"><h4>Dr Mokoena</h4><ul><li>Ask: What happened?</li><li>Ask: When was it?</li><li>Ask: Where does it hurt?</li><li>Ask: Does he have any allergies?</li></ul></div></div><div class=\"phrasen\"><span>He was … when he fell.</span><span>It happened at about …</span><span>His … hurts.</span><span>He has no allergies.</span><span>Could you say that again, please?</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Ask the nurse", lead: "Nurse Zodwa asks you: „Is there anything else I should know?“ Your mother says in German that Lukas is very afraid of injections. Say it to the nurse in one or two English sentences. <span class=\"de\">Sag es freundlich und einfach.</span>",
        fragen: [{ q: "What do you tell Nurse Zodwa?", m: "My brother is very afraid of injections. Could you please be gentle with him?", k: ["afraid|scared|frightened|worried|nervous", "injection|injections|needle|needles", "brother|Lukas|he", "please|could|can|help"], min: 3 }],
        tipp: "Start like this: My brother is afraid of … / Could you please …?" },
      { art: "offen", id: "challenge", m7: true, tag: "Challenge", titel: "A message for Nurse Zodwa", lead: "Frau Brandl sagt: „Sag Nurse Zodwa bitte, dass ich die Versichertenkarte morgen früh mitbringe und dass mein Mann um vier Uhr kommt.“ Tell Nurse Zodwa in one or two English sentences.",
        fragen: [{ q: "What do you tell Nurse Zodwa?", m: "My mother will bring the insurance card tomorrow morning. My father is coming at four o'clock.", k: ["insurance|card|papers", "tomorrow", "father|dad|husband", "four|4"], min: 3 }],
        tipp: "Start like this: My mother will bring … tomorrow. My father …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I think of the ", { g: "person" }, " and what he or she wants to know."],
          ["Then I ", { g: "choose" }, " the important points and ", { g: "leave out" }, " the rest."],
          ["I say it in ", { g: "simple" }, " words and I do not translate ", { g: "word for word" }, "."],
          ["At the end I ", { g: "check" }, " that the person has understood."]
        ], extra: ["copy", "guess"] }
    ] }
  ],
  weiter: { text: "Well done! You can find, choose and pass on information in a hospital, in both directions. You are ready for the next task." }
});
