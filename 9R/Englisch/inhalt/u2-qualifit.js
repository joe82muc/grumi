/* Englisch 9R · Unit 2 Exploring India · Quali-Fit: die sechs Prüfungsteile A bis F in klein
   (A Listening mit vier Sprechern, B Language in use mit Wortkasten und Wortstellung, C Reading mit Überschriften und Sätzen in Lücken,
   D Mediation halboffen, E Text and media: Chat → höfliche E-Mail, F Writing: Bildergeschichte mit offenem Schluss – mehr Auswahl, erste längere Texte)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Indien: Arbeitswelt, Firma vorstellen, nachhaltig leben, Berufe). Grammatik der Unit: simple present, word order (Revision).
   Texte: „First day at Silver Leaf Tea“ (texte/u2/qualifit-listening.js), „The Green Roof Club“ (texte/u2/qualifit-reading.js),
   „Meet a nurse“ (texte/u2/qualifit-mediation.js) – Firma, Schule, Klinik, Orte und Personen sind erfunden.
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u2-qualifit",
  titel: "Quali-Fit: Unit 2",
  einleitung: "You know the six parts of the exam from Unit 1. Now the tasks have <b>more choices</b> and the texts get <b>longer</b>. The topics come from Unit 2: working in a company, living in a sustainable way and different jobs. The grammar in part B is the simple present and the word order.",
  zeit: "etwa 50 Minuten",
  ziele: ["🎧 I can match statements to four speakers.", "📝 I can use the simple present and the right word order.", "📖 I can put sentences into gaps and find lines in a longer text.", "✉️ I can turn a chat into a polite e-mail and write a story with an open end."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    heading: ["heading", "Überschrift. Sie sagt in wenigen Wörtern, worum es im Absatz geht."],
    adverb: ["adverb of frequency", "Häufigkeitsadverb: Wörter wie always, usually, often, sometimes und never sagen, wie oft etwas passiert. Sie stehen vor dem Verb."],
    wordorder: ["word order", "Wortstellung: Nach Subjekt, Verb und Objekt kommt zuerst die Art und Weise, dann der Ort, dann die Zeit."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil A sprechen oft <b>mehrere Personen</b>. Lies zuerst die Aufgaben und achte beim Hören darauf, <b>wer</b> etwas sagt – am besten notierst du dir die Namen. Beim zweiten Hören prüfst du nur noch die Einzelheiten. Zahlen und Uhrzeiten werden meist nur einmal genannt.</p>" },
      { art: "text", html: "<p class=\"lead\">It is Oskar's first day at a small tea company. Four people speak. The company, the town and the people are invented. <span class=\"de\">Lies die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u2-qf-listen", fragen: [
        { art: "mc", id: "mc-a", titel: "Who says it?", lead: "Tick the correct person. <span class=\"de\">Tick = ankreuzen. Wer sagt oder tut das?</span>",
          fragen: [
            { q: "Who has a video call with customers every Monday?", o: ["Mr Fernandes", "Nisha", "Imran", "Leela"], a: 0, e: "Mr Fernandes says it in the first part: Every Monday I have a video call." },
            { q: "Who visits shops in other towns?", o: ["Imran", "Nisha", "Leela", "Mr Fernandes"], a: 0, e: "Imran travels and visits shops. He usually comes back on Friday." },
            { q: "Who tastes every new tea?", o: ["Leela", "Imran", "Mr Fernandes", "Nisha"], a: 0, e: "Leela works in the lab and tastes every new tea before the company sells it." }
          ] },
        { art: "mc", id: "mc-a2", titel: "Details", lead: "Listen again and tick the correct answer. <span class=\"de\">Beim zweiten Hören nur die Einzelheiten.</span>",
          fragen: [
            { q: "What time does Oskar start work tomorrow?", o: ["At eight o'clock.", "At half past twelve.", "At six o'clock.", "At ten o'clock."], a: 0, e: "Mr Fernandes says: Please come at eight o'clock." },
            { q: "Why must Oskar bring his own cup?", o: ["The company does not give plastic cups to visitors.", "The cups are too expensive.", "There are no cups in the garden.", "Nisha does not like tea."], a: 0, e: "Leela says that visitors do not get plastic cups." }
          ] }
      ] }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ergänzt du einen Text mit Wörtern aus dem <button class=\"term\" data-t=\"wordbox\">Wortkasten</button>. Achte auf das Subjekt: <b>he / she / it</b> bekommt ein -s, bei Fragen und Verneinung steht <b>do / does / doesn't</b> vor dem Verb ohne -s. <button class=\"term\" data-t=\"adverb\">Häufigkeitsadverbien</button> stehen vor dem Verb. Dazu kommen Wortbildung und die <button class=\"term\" data-t=\"wordorder\">Wortstellung</button>.</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "Living green", lead: "Complete the text with words from the box. <span class=\"de\">Complete = ergänzen. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Our school ", { g: "collects" }, " old clothes every autumn. Then we give them to families in the town."],
          ["Imran ", { g: "doesn't" }, " buy new toys for his little sister. He ", { g: "usually" }, " repairs the old ones."],
          ["My sister ", { g: "never" }, " forgets her water bottle, because she takes it to school every day."],
          [{ g: "Does" }, " your school have a compost box? Ours has one behind the canteen."]
        ], extra: ["collect", "don't"] },
      { art: "paare", id: "wortbildung", tag: "Match", titel: "Word building", lead: "Match the words. <span class=\"de\">Match = zuordnen. Aus welchem Wort entsteht welches?</span>",
        paare: [["work", "worker"], ["success", "successful"], ["recycle", "recycling"], ["pack", "packaging"]] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Make a new word", lead: "Tick the correct word. <span class=\"de\">Bilde das passende Wort.</span>",
        fragen: [
          { q: "Many tea ___ work on the farms. (work)", o: ["workers", "working", "worked", "works"], a: 0, e: "A person who works is a worker. Viele Personen: workers." },
          { q: "Nisha packs the boxes very ___. (care)", o: ["carefully", "careful", "carefulness", "caring"], a: 0, e: "Das Wort beschreibt, wie sie packt, also ein Adverb: care + -ful + -ly = carefully." }
        ] },
      { art: "mc", id: "mc-b2", tag: "Tick", titel: "Simple present", lead: "Tick the correct sentence. <span class=\"de\">Welcher Satz ist richtig?</span>",
        fragen: [
          { q: "Which question is correct?", o: ["Does Imran travel to other towns?", "Do Imran travels to other towns?", "Does Imran travels to other towns?", "Is Imran travel to other towns?"], a: 0, e: "Bei he / she / it steht Does am Anfang, das Verb bleibt ohne -s: Does Imran travel …?" },
          { q: "Which sentence has the correct word order?", o: ["Leela works carefully in the lab every day.", "Leela works every day carefully in the lab.", "Leela works in the lab carefully every day.", "Every day works Leela in the lab carefully."], a: 0, e: "Nach dem Verb kommt zuerst die Art und Weise (carefully), dann der Ort (in the lab), dann die Zeit (every day)." }
        ] },
      { art: "ordnen", id: "ordnen-b", tag: "Put in order", titel: "Build the sentence", lead: "Put the parts in the correct order: how – where – when. <span class=\"de\">Subjekt, Verb, Objekt, dann Art und Weise – Ort – Zeit.</span>",
        schritte: ["Nisha", "packs", "the boxes", "carefully", "in the packing room", "every morning"] }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C sind die Texte länger. Lies zuerst alles <b>einmal schnell</b>, nur für das Thema. Bei <b>Überschriften</b> zählt der ganze Absatz. Bei <b>Sätzen in Lücken</b> passt nur der Satz, dessen Inhalt zu dem Satz davor und danach passt – achte auf Wörter wie <i>he, she, then, so</i>.</p>" },
      { art: "lesetext", lesetext: "u2-qf-read" },
      { art: "paare", id: "ueberschriften", tag: "Match", titel: "Headings", lead: "Match each <button class=\"term\" data-t=\"heading\">heading</button> with the paragraph. <span class=\"de\">Welche Überschrift passt zu welchem Absatz?</span>",
        paare: [["Paragraph 1", "A garden above the classrooms"], ["Paragraph 2", "Saving water"], ["Paragraph 3", "From waste to soil"], ["Paragraph 4", "Hard work, good results"]] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-qf-read",
        fragen: [
          { q: "How many students meet in the club?", zeilen: [3, 4], e: "About twenty students meet twice a week.", tipp: "Look at the first paragraph." },
          { q: "Why do they never use tap water?", zeilen: [9, 11], e: "The roof has big barrels that collect the rain.", tipp: "Look for the word never." },
          { q: "What do the students collect in the canteen?", zeilen: [14, 15], e: "Fruit peel and vegetable waste.", tipp: "Look at the paragraph about the compost box." },
          { q: "When do the students often work on hot days?", zeilen: [19, 20], e: "Early in the morning, because the roof is very warm in the afternoon.", tipp: "Look at the last paragraph." }
        ] },
      { art: "tf", id: "tf-c", tag: "Tick", titel: "True or false?", lead: "Tick true or false.",
        aussagen: [
          ["The club meets on the school roof.", true],
          ["The students use tap water for the plants.", false],
          ["The tomatoes go into the canteen soup on Fridays.", true],
        ] },
      { art: "luecke", id: "saetze-c", tag: "Complete", titel: "A message from the club", lead: "Put the sentences into the gaps. <span class=\"de\">Setze die Sätze in die Lücken. Zwei Sätze bleiben übrig.</span>",
        absaetze: [
          ["Dear club members,"],
          ["Next week is our big planting day. ", { g: "Please bring an old plastic bottle from home." }, " Then we can make small pots for the bean seeds."],
          ["The weather is often hot at noon. ", { g: "So we start early in the morning." }, " We will work from eight o'clock until ten."],
          ["Kabir will bring the seeds. ", { g: "Divya knows all about the right soil." }, " Please ask her if you need help."]
        ], extra: ["The canteen sells good soup on Fridays.", "Beans like the cold very much."] }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D gibst du auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen will. Lies zuerst, <b>was sie wissen will</b>, und suche nur diese Angaben im englischen Text. Du übersetzt nicht Wort für Wort. Ein Wörterbuch darf helfen.</p>" },
      { art: "text", html: "<p class=\"lead\">Deine Mitschülerin Jana überlegt, ob der Beruf Krankenpfleger etwas für sie ist. Sie versteht kaum Englisch. Du hast ein kurzes Porträt gefunden. <span class=\"de\">Klinik und Person sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u2-qf-job" },
      { art: "mc", id: "mc-d", tag: "Ankreuzen", titel: "Was braucht Jana?", lead: "Kreuze die richtige Antwort an.",
        fragen: [
          { q: "Jana fragt: „Wie sieht der Arbeitstag aus und was muss man können?“ Was sagst du ihr?", o: ["Nur Arbeitszeit, Aufgaben und Voraussetzungen, kurz und auf Deutsch.", "Den ganzen Text Wort für Wort.", "Nur den Namen der Klinik.", "Nichts, sie soll selbst nachschlagen."], a: 0,
            e: "Sprachmittlung heißt: das auswählen, was die Person wissen will, und es verständlich weitergeben." }
        ] },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an Jana", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Hallo Jana, hier ist, was ich über den Beruf herausgefunden habe:"],
          ["Herr Pinto arbeitet in einer kleinen ", { g: "Klinik" }, "."],
          ["Der Frühdienst beginnt um ", { g: "sechs" }, " Uhr morgens, um ", { g: "zwei" }, " Uhr nachmittags hat er Feierabend."],
          ["Er wechselt ", { g: "Verbände" }, " und spricht mit den Familien der Patienten."],
          ["Man muss Menschen mögen und ", { g: "ruhig" }, " bleiben können."],
          ["Die Ausbildung dauert etwa ", { g: "drei" }, " Jahre."]
        ], extra: ["Hunde", "Schuhe"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Was ist anstrengend?", lead: "Jana fragt: „Ist der Beruf auch schwierig?“ Antworte ihr in ein bis zwei deutschen Sätzen.",
        fragen: [{ q: "Was ist an dem Beruf anstrengend?", m: "Es kann anstrengend sein, denn manchmal muss er nachts und am Wochenende arbeiten. Er rät, vorher eine Woche in einer Klinik auszuprobieren.", k: ["anstrengend|müde|schwer|schwierig", "nacht|nachts|wochenende|wochenenden", "woche|probieren|ausprobieren|praktikum"], min: 2 }],
        tipp: "Suche im Text die Wörter tiring, night und weekends. Schreibe nur das Wichtigste." },
      { art: "offen", id: "challenge-d", m7: true, tag: "Challenge · freiwillig", titel: "Jana fragt nach", lead: "Jana fragt: „Brauche ich vorher etwas?“ Antworte ihr auf Deutsch in einem Satz.",
        fragen: [{ q: "Was braucht man vor der Ausbildung?", m: "Es hilft, vorher ein paar Wochen Praktikum zu machen.", k: ["hilft|hilfreich|gut|sinnvoll", "wochen|woche", "praktikum|probe|ausprobier|erfahrung"], min: 3 }],
        tipp: "Suche im Text das Wort experience." }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus einer Textsorte eine andere, hier aus einem <b>lockeren Chat</b> eine <b>höfliche E-Mail</b>. Suche im Chat, was die Firma wissen muss (wer, was, wann, was kostet es). Schreibe vollständige Sätze mit <b>Could you …? / We would like …</b>, keine Abkürzungen und keine Smileys.</p>" },
      { art: "text", html: "<p class=\"lead\">Oskar and Kabir plan a class visit to a print shop that makes posters. Oskar wants to write to the shop. The shop is invented. <span class=\"de\">Lies den Chat.</span></p><p><b>Oskar:</b> hey, can we visit the print shop?</p><p><b>Kabir:</b> yes!! ask them for tuesday or wednesday</p><p><b>Oskar:</b> how many people?</p><p><b>Kabir:</b> 22 students. and we need to know the price lol</p>" },
      { art: "mc", id: "mc-e", tag: "Tick", titel: "Polite or not?", lead: "Tick the polite sentence for the e-mail. <span class=\"de\">Welcher Satz passt in eine E-Mail?</span>",
        fragen: [
          { q: "How do you ask for the price?", o: ["Could you tell us how much the tour costs?", "need to know the price lol", "Price? Tell me now!", "How much, print shop?"], a: 0, e: "“Could you tell us …?” ist höflich und vollständig." },
        ] },
      { art: "luecke", id: "luecke-e", tag: "Complete", titel: "The e-mail", lead: "Complete the e-mail with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Dear Sir or Madam,"],
          ["I am ", { g: "writing" }, " to ask about a visit for our class."],
          ["We are twenty-two students and we ", { g: "would" }, " like to see your print shop."],
          ["Could you ", { g: "tell" }, " me if a visit on Tuesday or Wednesday is possible?"],
          ["We also want to know how ", { g: "much" }, " the tour costs."],
          ["Thank you for your help. Yours ", { g: "faithfully" }, ", Oskar"]
        ], extra: ["sincerely", "wrote"] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "Write two sentences", lead: "Write two polite sentences for the e-mail: one about the <b>date</b> and one about the <b>price</b>.",
        fragen: [{ q: "Write two polite sentences.", m: "Could you tell me if a visit on Tuesday is possible? Could you also tell me how much the tour costs?", k: ["could|would|please", "visit|tuesday|wednesday|date|day", "cost|costs|price|much"], min: 3 }],
        tipp: "Start like this: Could you tell me …? / Would a visit on … be possible?" },
      { art: "offen", id: "challenge-e", m7: true, tag: "Challenge · freiwillig", titel: "One more question", lead: "Write one more polite question for the shop. <span class=\"de\">Zum Beispiel: Wie viele Schüler dürfen kommen?</span>",
        fragen: [{ q: "Write one more polite question.", m: "Could you tell me how many students can come?", k: ["could|would|please", "how many|how long|what time|where", "students|visit|tour|class|shop"], min: 2 }],
        tipp: "Use: Could you tell me …?" }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F schreibst du eine Geschichte zu Bildern. Du bekommst Punkte für <b>Inhalt</b> (alle Bilder kommen vor, die Geschichte hat einen Schluss) und für <b>Sprache</b> (richtige Sätze). Bei einem <b>offenen Schluss</b> hört die Geschichte spannend auf. Erzähle in der Vergangenheit und zähle am Ende die Wörter.</p>" },
      { art: "text", html: "<p class=\"lead\">Look at the four pictures. They tell a story that has no end. <span class=\"de\">Die Bilder sind in Worten beschrieben.</span></p>" },
      { art: "karten", karten: [{ ic: "🌱", titel: "Picture 1", text: "Divya sees a small plant between two stones in the school yard." }, { ic: "🪴", titel: "Picture 2", text: "She and Oskar put it into a pot." }, { ic: "💧", titel: "Picture 3", text: "Next morning the soil is wet, but nobody gave it water." }, { ic: "❓", titel: "Picture 4", text: "There is a small note next to the pot." }] },
      { art: "mc", id: "mc-f", tag: "Tick", titel: "An open end", lead: "Tick the best sentence for an open end. <span class=\"de\">Welcher Satz lässt die Geschichte offen?</span>",
        fragen: [
          { q: "Which sentence is a good open end?", o: ["Divya opened the note and could not believe her eyes.", "So the story ended and everybody went home.", "The plant died and that was all.", "Divya watered the plant every day."], a: 0, e: "Hier erfährt der Leser nicht, was auf dem Zettel steht – das Ende bleibt offen." }
        ] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write the story", min: 50,
        auftrag: "<p><b>Write a story</b> about the four pictures (about 50 words).</p><ul><li>Tell what happens in every picture.</li><li>Use the simple past (for example: saw, put, was).</li><li>End with an open end: do not say what is on the note.</li></ul>",
        starter: ["One morning Divya saw …", "She and Oskar …", "The next day …", "Next to the pot there was …", "Divya opened the note and …"],
        kriterien: ["Alle vier Bilder kommen in der Geschichte vor.", "Die Geschichte erzählt in der Vergangenheit.", "Das Ende bleibt offen: Der Inhalt des Zettels wird nicht verraten.", "Die Sätze sind vollständig und richtig geschrieben.", "Es sind mindestens fünfzig Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The six parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I ", { g: "listen" }, " to several people and say who says what."],
          ["In Part B I complete a text with the right ", { g: "words" }, "."],
          ["In Part C I put ", { g: "sentences" }, " into the gaps of a longer text."],
          ["In Part D I tell a person in ", { g: "German" }, " what an English text says."],
          ["In Part E I turn a ", { g: "chat" }, " into a polite e-mail."],
          ["In Part F I ", { g: "write" }, " a story to pictures myself."]
        ], extra: ["speak", "draw"] }
    ] }
  ],
  weiter: { text: "Well done! You tried all six parts again, with more choices and longer texts. Next time you can do it with less help." }
});


