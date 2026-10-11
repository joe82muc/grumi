/* Englisch 9M · Unit 2 Exploring India · Mediation: Which job is right for you? · M-Fassung
   (Sprachmittlung statt Übersetzung: Situation und Adressat mit einem bestimmten Anliegen erkennen, nur das Passende auswählen, Unwichtiges weglassen,
   genaue Angaben (Dauer, Arbeitszeit, Voraussetzung, Frist) richtig weitergeben; Richtung Deutsch → Englisch mündlich,
   Englisch → Deutsch schriftlich, auch als Zusammenfassung in eigenen Worten;
   Grammatik der Unit im Kontext: Revision simple present, Revision word order)
   LehrplanPLUS E9 2.3 Sprachmittlung (Informationen auswählen, vereinfachen, zusammenfassen, adressatengerecht weitergeben), E9 1.1 Leseverstehen,
   E9 4 (Kommunikationsstrategien: nachfragen, umschreiben), E9 5 (Berufe und Arbeitswelt).
   Texte: „Berufsinfotag an unserer Schule“ (texte/u2/mediation-infotag-m.js), „Jobs at Brightway Services“ (texte/u2/mediation-jobs-flyer-m.js)
   – Betriebe und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-mediation",
  titel: "Mediation: Which job is right for you?",
  einleitung: "It is the careers day at your school. <b>Rohan</b>, an exchange student from India, is your guest today. He speaks English, but not German, and he knows exactly <b>what he is looking for</b>. You are his <b>language helper</b>. Mediation is <b>not</b> translating word for word: you decide what fits the person, you pass on exact facts correctly and you say it simply.",
  zeit: "etwa 45 Minuten",
  ziele: ["🧭 I know what mediation is and think of the person's wish.", "🔎 I choose only the information that fits the person.", "🔢 I pass on lengths, times and conditions exactly.", "💬 I say it simply in English.", "🔄 I help in both directions and I can summarise an English text in German."],
  quiz: { profi: "Mediation pro" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst Informationen in einer anderen Sprache weiter – passend für die Person, die sie braucht. Nicht Wort für Wort, sondern das Passende, einfach gesagt."],
    training: ["training", "Hier: die Ausbildung. In Deutschland lernt man viele Berufe in einer Ausbildung, meist drei oder dreieinhalb Jahre lang."],
    exchange: ["exchange student", "Ein Austauschschüler oder eine Austauschschülerin: Er oder sie besucht für einige Zeit eine Schule in einem anderen Land."],
    paraphrase: ["to describe a word", "Ein Wort umschreiben: Wenn dir ein Wort fehlt, erklärst du es mit einfachen Wörtern, zum Beispiel „a small vehicle that lifts boxes“."],
    shift: ["shift work", "Schichtdienst: Die Arbeitszeiten wechseln, zum Beispiel früh in dieser Woche und spät in der nächsten."],
    placement: ["work placement", "Betriebspraktikum: Schüler arbeiten ein oder zwei Wochen in einem Betrieb und lernen einen Beruf kennen."]
  },
  haupttext: "u2-med-flyer-m",
  stationen: [
    { kurz: "What is it?", ober: "Station 1", titel: "What is mediation?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What can you see? Which jobs can you see?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-jobfair.jpg\" alt=\"A careers day in a school hall: a mechanic, a nurse and a chef show their jobs to students.\" loading=\"lazy\" style=\"display:block;width:100%;max-width:760px;height:auto;border-radius:14px\"><figcaption style=\"font-size:.78rem;opacity:.7;margin-top:4px\">Picture: GRUMI (made with AI) · a careers day at school</figcaption></figure><p>Which stand would you go to first, and why?</p>" },
      { art: "text", html: "<p class=\"lead\">Today is the careers day at your school. <b>Rohan</b> is visiting from India, and his teacher <b>Ms Kapoor</b> is with him. Your teacher <b>Frau Lindner</b> has put up a poster about <button class=\"term\" data-t=\"training\">training</button> for three jobs. Rohan cannot read German, so he asks you for help. The people and the companies are invented.</p>" },
      { art: "merke", kopf: "MEDIATION", html: "<p><button class=\"term\" data-t=\"mediation\">Mediation</button> is <b>not</b> translation. Before you speak, ask three questions:</p><ol><li><b>Who</b> needs the information, and what is his or her wish?</li><li><b>What</b> fits this person? Leave out the rest.</li><li><b>How</b> can I say it simply?</li></ol><p>Pass on <b>exact facts</b> (length, times, conditions, deadlines) correctly. If you don't know a word, <button class=\"term\" data-t=\"paraphrase\">describe it</button>.</p>" },
      { art: "tf", id: "mediation-tf", tag: "True or false?", titel: "What do you know about mediation?", lead: "Tick true or false.",
        aussagen: [
          ["In mediation you translate every single word.", false],
          ["You think about who needs the information and what the person wants.", true],
          ["You can leave out unimportant details, but not a number or a condition that matters.", true],
          ["If a time is difficult, it is fine to change it a little.", false],
          ["You always have to keep the order of the text.", false],
          ["If you don't know a word, you can describe it with simple words.", true]
        ] }
    ] },
    { kurz: "Find & choose", ober: "Steps 1 and 2", titel: "Find the information and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Rohan says: „I like <b>technology</b>, and I do not want to work <b>at weekends</b>.“ So he does not want everything on the poster – only what fits. <span class=\"de\">Lies den Aushang. Was passt zu Rohans Wunsch, was nicht?</span></p>" },
      { art: "lesetext", lesetext: "u2-med-infotag-m" },
      { art: "sort", id: "wichtig", tag: "Choose", titel: "Important or not?", lead: "Put each piece of information into the right box. <span class=\"de\">Was braucht Rohan für seinen Wunsch? Was kannst du weglassen?</span>",
        buckets: ["Important for Rohan", "I can leave it out"],
        items: [{ t: "Car mechanics repair cars and look for faults on the computer", b: 0 }, { t: "The training for a car mechanic takes three and a half years", b: 0 }, { t: "Car mechanics work from Monday to Friday", b: 0 }, { t: "Warehouse workers do not work at weekends", b: 0 }, { t: "For the car mechanic job you need an interest in technology", b: 0 },
                { t: "There are coffee, juice and pretzels", b: 1 }, { t: "The bus stop is in front of the main entrance", b: 1 }, { t: "The boss drives a red vintage car", b: 1 }, { t: "Every visitor gets a pen at the warehouse stand", b: 1 }, { t: "The hotel has forty rooms and a big garden", b: 1 }] },
      { art: "markieren", id: "schluessel", tag: "Key words", titel: "Find the key words", finde: "the three key words about the length of the training and the working days of a car mechanic", toleranz: 0,
        satz: "Die Ausbildung dauert [[dreieinhalb]] Jahre, gearbeitet wird von [[Montag]] bis [[Freitag]], aber der Chef fährt am liebsten seinen roten Oldtimer.",
        e: "Key words: dreieinhalb, Montag, Freitag – Rohan wants exact facts about the training and does not want to work at weekends. The boss and his vintage car do not matter." },
      { art: "mc", id: "auswahl", tag: "Think", titel: "Which job fits Rohan?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Rohan likes technology and does not want to work at weekends. Which job fits him best?", o: ["The car mechanic: it is a job with technology, and the work is from Monday to Friday.", "The hotel worker: he can use his English, and the hotel is big.", "The warehouse worker: the work starts early, so he finishes early.", "All three jobs fit him equally well."], a: 0,
            e: "The warehouse job has no weekend work either, but it has less technology. The hotel job does not fit because of the weekends." },
          { q: "Rohan asks: „When does a car mechanic work?“ What do you say?", o: ["From Monday to Friday, mostly from half past seven until half past four.", "From Monday to Saturday, mostly from half past seven until half past four.", "From Monday to Friday, mostly from half past eight until half past four.", "From Monday to Friday, mostly from half past seven until half past five."], a: 0,
            e: "Times and days must be passed on exactly. The other answers change one detail." }
        ] }
    ] },
    { kurz: "Say it simply", ober: "Step 3", titel: "Say it simply in English", teile: [
      { art: "mc", id: "einfach", tag: "Choose the best sentence", titel: "What do you say to Rohan?", lead: "Tick the sentence that is correct, simple and clear.",
        fragen: [
          { q: "Poster: „Willkommen sind Bewerber mit dem Mittelschulabschluss oder der mittleren Reife.“", o: ["You can apply with the school-leaving certificate of a Mittelschule or with the Mittlere Reife.", "Welcome are applicants with the middle ripeness.", "You must have both certificates to apply.", "Everybody can apply without any certificate."], a: 0,
            e: "German names of school certificates are kept or explained – a word-for-word version sounds strange. Do not change the condition." },
          { q: "Poster: „Bewerbungen sind bis Ende November möglich.“", o: ["You can apply until the end of November.", "You must apply at the end of November.", "You can apply from the end of November.", "You can apply in November, when you want."], a: 0,
            e: "A deadline is an exact fact: until the end of November means that the end of November is the last day." }
        ] },
      { art: "paare", id: "umschreiben", tag: "Describe it", titel: "A word is missing", lead: "You don't know the English word. Match the German word with a simple description. <span class=\"de\">Wie kannst du das Wort mit einfachen Wörtern umschreiben?</span>",
        paare: [["Rezeption", "The desk where guests arrive and get their key."], ["Gabelstapler", "A small vehicle with two arms that lifts heavy boxes."], ["Versand", "Sending parcels to customers."], ["Auszubildende", "A young person who learns a job in a company."], ["Schichtdienst", "You work early in one week and late in the next week."], ["Bewerbung", "A letter or an e-mail in which you ask for a place in a company."]] },
      { art: "luecke", id: "saetze", tag: "Useful phrases", titel: "Phrases that help you", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["The training ", { g: "takes" }, " three years."],
          ["You should be good ", { g: "with" }, " your hands."],
          ["The poster ", { g: "says" }, " that you need some English."],
          ["Let me ", { g: "explain" }, ": a hotel worker welcomes guests."],
          ["The work starts at six o'clock, ", { g: "but" }, " the day ends in the early afternoon."],
          ["A car mechanic works ", { g: "from" }, " Monday to Friday."]
        ], extra: ["shout", "loudly"] },
      { art: "offen", id: "lager", tag: "Your words", titel: "The warehouse job", lead: "Rohan asks: „What does a warehouse worker do? When does the work start? Does he work at weekends?“ Answer him in two or three English sentences. <span class=\"de\">Nur die gefragten Angaben.</span>",
        fragen: [{ q: "What do you tell Rohan?", m: "A warehouse worker receives goods, stores them and packs parcels. The work often starts at six o'clock, but he does not work at weekends.", k: ["goods|parcels|packs|packages|boxes|stores|store", "six|6", "weekend|weekends|saturday|sunday"], min: 3 }],
        tipp: "Say what the person does, then the time, then the weekends. Start like this: A warehouse worker … / The work starts at …" }
    ] },
    { kurz: "Language", ober: "Language", titel: "Language: simple present at work", teile: [
      { art: "text", html: "<p class=\"lead\">When you talk about jobs, you use the <b>simple present</b> and a clear <b>word order</b>. This is a revision. <span class=\"de\">Das kennst du schon – hier wendest du es an.</span></p>" },
      { art: "merke", kopf: "REVISION · SIMPLE PRESENT AND WORD ORDER", html: "<ul><li>He/she/it gets an <b>-s</b>: A mechanic repair<b>s</b> cars.</li><li>Negative: <b>do not / does not</b> + verb: A driver <b>does not</b> work in an office.</li><li>Question: <b>Do / Does</b> + subject + verb: <b>Does</b> a cook work at weekends?</li><li>Adverbs of frequency stand before the verb: She <b>always</b> smiles. They <b>sometimes</b> work late.</li><li>Word order: <b>how</b> – <b>where</b> – <b>when</b>: She works carefully in the garage every day.</li></ul>" },
      { art: "luecke", id: "present", tag: "Language", titel: "Fill in the gaps", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["A car mechanic ", { g: "repairs" }, " cars every day."],
          ["Two trainees ", { g: "welcome" }, " the guests at the door."],
          ["A warehouse worker ", { g: "does not" }, " work at weekends."],
          ["Question: ", { g: "Does" }, " a hotel worker work at weekends?"],
          ["A good receptionist ", { g: "always" }, " smiles at the guests."],
          ["The mechanic works ", { g: "carefully" }, " in the garage every day."]
        ], extra: ["goes", "are"] },
      { art: "mc", id: "fehler", tag: "Typical mistakes", titel: "Which sentence is correct?", lead: "Tick the correct sentence.",
        fragen: [
          { q: "Ask Rohan about his family.", o: ["Does your uncle work in a bank?", "Do your uncle works in a bank?", "Does your uncle works in a bank?", "Is your uncle work in a bank?"], a: 0,
            e: "After does the verb has no -s: Does your uncle work …?" },
          { q: "Which sentence has the right word order?", o: ["A hotel worker lays the tables quickly in the restaurant every morning.", "A hotel worker lays quickly the tables in the restaurant every morning.", "A hotel worker lays the tables every morning in the restaurant quickly.", "A hotel worker every morning lays the tables quickly in the restaurant."], a: 0,
            e: "The order is: subject – verb – object, then how (quickly) – where (in the restaurant) – when (every morning)." }
        ] }
    ] },
    { kurz: "English to German", ober: "Step 4", titel: "From English into German", teile: [
      { art: "text", html: "<p class=\"lead\">A company called <b>Brightway Services</b> gave Rohan a flyer in English. Your classmate <b>Ella</b> is looking for a <button class=\"term\" data-t=\"placement\">work placement</button> and asks you in German what the flyer says. She likes to talk to people, she does not want to start very early, and she has no driving licence. <span class=\"de\">Du erklärst Ella auf Deutsch, was für sie wichtig ist – nicht alles und nicht Wort für Wort, aber Zeiten und Bedingungen genau.</span></p>" },
      { art: "lesetext", lesetext: "u2-med-flyer-m" },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the flyer say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-med-flyer-m",
        fragen: [
          { q: "When does a customer adviser usually work?", zeilen: [7, 8], e: "From Monday to Friday, usually from eight to four.", tipp: "Look at the paragraph about the customer adviser." },
          { q: "When does the IT assistant get a free afternoon?", zeilen: [12, 13], e: "After working in the evening, for example when the systems are updated.", tipp: "Look for the words: in the evening." },
          { q: "How early must Ella apply for a placement?", zeilen: [20, 21], e: "At least six weeks before she wants to start.", tipp: "Look for the word: apply." }
        ] },
      { art: "tf", id: "blatt-tf", tag: "True or false?", titel: "What does the flyer say?", lead: "Tick true or false.",
        aussagen: [
          ["School students can do a two-week placement in customer service.", true],
          ["School students can do a placement in the delivery team.", false],
          ["The customer adviser usually finishes work at four o'clock.", true],
          ["The IT assistant sometimes works in the evening and then gets a free afternoon.", true],
          ["Ella must apply two weeks before she wants to start.", false],
          ["You need a driving licence to be an IT assistant.", false]
        ] },
      { art: "sort", id: "wichtig-ella", tag: "Choose", titel: "What does Ella need to know?", lead: "Sort the information. <span class=\"de\">Was erzählst du Ella? Was lässt du weg?</span>",
        buckets: ["Tell Ella", "Not necessary"],
        items: [{ t: "A placement in customer service takes two weeks", b: 0 }, { t: "Customer advisers work from eight to four", b: 0 }, { t: "She must apply at least six weeks before the start", b: 0 }, { t: "She should send an e-mail with her name, age and job", b: 0 }, { t: "Customer advisers must be patient and polite", b: 0 },
                { t: "The office has a roof garden", b: 1 }, { t: "Visitors can park behind the building", b: 1 }, { t: "New colleagues get a free lunch on the first day", b: 1 }, { t: "The company has about sixty employees", b: 1 }] },
      { art: "mc", id: "adressat", tag: "Think", titel: "Who is it for?", lead: "Tick the correct answer.",
        fragen: [
          { q: "Which German sentence is the best help for Ella?", o: ["Für dein Praktikum passt der Kundendienst am besten: Du beantwortest Fragen von Kunden, arbeitest von acht bis vier und musst geduldig und höflich sein.", "Kundenberater: Sie beantworten Fragen von Kunden mit Telefon und E-Mail. Sie müssen sein geduldig.", "Die Firma hat einen Dachgarten und kostenloses Mittagessen für neue Kollegen.", "Im Lieferdienst kannst du ein Praktikum machen, wenn du einen Führerschein hast."], a: 0,
            e: "It fits Ella's wish: talking to people, no very early start. The roof garden does not help her, and the delivery job has no placements." },
          { q: "Ella asks in German: „Kann ich mein Praktikum auch im Lieferdienst machen?“ What do you say?", o: ["Nein, dort gibt es keine Praktikumsplätze für Schüler.", "Ja, wenn du früh aufstehst.", "Ja, aber nur mit Führerschein.", "Das steht nicht auf dem Blatt."], a: 0,
            e: "The flyer says that placements in the delivery team are not possible. The driving licence does not matter then." }
        ] },
      { art: "schreiben", id: "mediation-schreiben", tag: "Writing trainer", titel: "Explain it to Ella", min: 45,
        auftrag: "<p><strong>Sprachmittlung:</strong> Deine Mitschülerin Ella sucht einen Platz für ihr Betriebspraktikum. Sie redet gern mit Menschen, will nicht sehr früh anfangen und hat keinen Führerschein. Rohan hat von der Firma Brightway Services ein englisches Blatt bekommen. Erkläre Ella <b>auf Deutsch</b>, was für sie wichtig ist: Welcher Job passt, was macht man dort, wann arbeitet man, wie lange dauert das Praktikum und wie meldet sie sich?</p><p>Schreibe nicht alles auf und übersetze nicht Wort für Wort. Zeiten und Fristen musst du genau weitergeben.</p>",
        starter: ["Ella, für dein Praktikum passt …", "Dort …", "Die Arbeitszeit ist …", "Das Praktikum dauert …", "Du musst dich … bewerben."],
        kriterien: ["Der Text empfiehlt den Job im Kundendienst (oder erklärt gut, warum er zu Ella passt).", "Der Text sagt, was man dort macht und was man können muss (geduldig und höflich sein).", "Der Text nennt die Arbeitszeit genau (Montag bis Freitag, meistens acht bis vier).", "Er nennt die Dauer des Praktikums (zwei Wochen) und die Frist (mindestens sechs Wochen vorher bewerben).", "Er sagt, wie sie sich melden kann (kurze E-Mail mit Name, Alter und Job).", "Er ist auf Deutsch, in eigenen einfachen Worten – keine Wort-für-Wort-Übersetzung. Unwichtiges (Dachgarten, Parkplatz, Mittagessen, Zahl der Mitarbeiter) fehlt."] },
      { art: "schreiben", id: "zusammenfassung", m7: true, tag: "Plus · Summary", titel: "Summarise the flyer in German", min: 45,
        auftrag: "<p><strong>Plus – Zusammenfassung:</strong> Deine Klasse sammelt Betriebe für eine Infomappe zur Berufsorientierung. Fasse das englische Blatt „Jobs at Brightway Services“ <b>auf Deutsch in eigenen Worten</b> zusammen – in vier bis sechs Sätzen für Mitschüler, die den Text nicht gelesen haben.</p><p>Nenne nur das Wichtigste: die drei Jobs, was man dort macht, was man mitbringen muss und was für ein Praktikum gilt. Schreibe nicht Satz für Satz mit und lass Nebensächliches weg.</p>",
        starter: ["Das Blatt stellt drei Jobs vor: …", "Im Kundendienst …", "Die IT-Assistenten …", "Der Lieferfahrer …", "Für ein Praktikum gilt: …"],
        kriterien: ["Die Zusammenfassung nennt die drei Jobs und kurz, was man dort macht.", "Sie nennt mindestens eine Voraussetzung oder genaue Angabe (z. B. Führerschein, Arbeitszeit, Frist).", "Sie nennt, wo ein Praktikum möglich ist und wo nicht.", "Sie ist auf Deutsch, in eigenen Worten – nicht Satz für Satz übersetzt.", "Nebensächliches (Dachgarten, Parkplatz, Mittagessen) fehlt."] }
    ] },
    { kurz: "Your turn", ober: "Step 5", titel: "Your turn: help Rohan", teile: [
      { art: "text", html: "<p class=\"lead\">Now you act on your own. Practise the conversation with a partner. Change roles. <span class=\"de\">Spielt das Gespräch zu zweit.</span></p><div class=\"sprech-karten\"><div class=\"sprech-karte a\"><h4>You (language helper)</h4><ul><li>Ask Rohan what he is looking for.</li><li>Tell him only the jobs that fit.</li><li>Say what you do, how long the training is and when you work.</li><li>Ask Rohan which job he likes and why.</li></ul></div><div class=\"sprech-karte b\"><h4>Rohan</h4><ul><li>Say: I like technology. I do not want to work at weekends.</li><li>Ask: What does a car mechanic do?</li><li>Ask: What do I need for the training?</li><li>Say which job you like and why.</li></ul></div></div><div class=\"phrasen\"><span>The poster says …</span><span>You must be … / You need …</span><span>The training takes …</span><span>Could you say that again, please?</span><span>What I mean is …</span></div>" },
      { art: "offen", id: "dein-satz", tag: "Your words", titel: "Which job is right for you?", lead: "Rohan asks: „Which of the three jobs is right for you?“ Answer in two or three English sentences and give a reason. <span class=\"de\">Sag, welcher Beruf zu dir passt, und warum.</span>",
        fragen: [{ q: "Which job is right for you? Tell Rohan.", m: "I would like to be a car mechanic because I like technology and I am good with my hands. The training takes three and a half years.", k: ["would like|want|like|prefer|interested", "because|since", "mechanic|hotel|warehouse|logistics|car|job", "technology|cars|people|guests|team|hands|computers|english"], min: 3 }],
        tipp: "Start like this: I would like to be … because …" },
      { art: "offen", id: "challenge", m7: true, tag: "Plus · Challenge", titel: "A message for Rohan", lead: "Frau Lindner sagt: „Sag Rohan bitte, dass er sich bis Freitag bei mir für einen Besuch im Autohaus anmelden kann – nein, warte, bis Donnerstag – und dass der Bus um acht Uhr vor der Schule abfährt.“ Tell Rohan in one or two English sentences.",
        fragen: [{ q: "What do you tell Rohan?", m: "Frau Lindner says you can sign up with her until Thursday for a visit to the car dealership. The bus leaves from the school at eight o'clock.", k: ["thursday", "bus", "eight|8"], min: 3 }],
        tipp: "Frau Lindner corrects herself – use the last version. Start like this: Frau Lindner says you can … until …" },
      { art: "offen", id: "gruende", m7: true, tag: "Plus · In your own words", titel: "Why not everything?", lead: "Explain in your own words: Why do you not tell Rohan everything on the poster? Give two reasons.",
        fragen: [{ q: "Give two reasons.", m: "Rohan only wants jobs with technology and no weekend work, so other details do not help him. Also, if I tell him too much, the important facts get lost and he may not understand them.", k: ["important|facts|information|wants|needs|helps|help|fit|fits", "too much|too long|lost|confus|understand|simple|short|wish"], min: 2 }],
        tipp: "Think about Rohan: What does he want? What can go wrong if you tell too much? Use because or also." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "The steps of mediation", teile: [
      { art: "luecke", id: "schritte", tag: "Summary", titel: "How mediation works", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["First I think of the ", { g: "person" }, " and what he or she wants."],
          ["Then I ", { g: "choose" }, " the information that fits and ", { g: "leave out" }, " the rest."],
          ["I pass on exact facts such as lengths, times and ", { g: "deadlines" }, " correctly."],
          ["I say it in ", { g: "simple" }, " words and I do not translate ", { g: "word for word" }, "."],
          ["At the end I ", { g: "check" }, " that the person has understood."]
        ], extra: ["copy", "guess"] }
    ] }
  ],
  weiter: { text: "Well done! You can choose what fits a person, pass on exact facts and help in both directions – and you can summarise an English text in German." }
});
