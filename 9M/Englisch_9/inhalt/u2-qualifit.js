/* Englisch 9M · Unit 2 Exploring India · Quali-Fit: die sechs Prüfungsteile A bis F in klein · M-Fassung
   (A Listening mit zwei Sprechern und einer Korrektur, B Language in use: Wortkasten, Wortbildung, Wortstellung (Revision simple present, word order),
   C Reading: Überschriften, Belegstellen, true / false / not in the text, Fehler in einer Zusammenfassung finden, D Mediation als deutsche Zusammenfassung,
   E Text and media: Chat → höfliche E-Mail, F Writing: Bildergeschichte mit offenem Schluss – Prüfungsformate wie in der Abschlussprüfung)
   LehrplanPLUS E9 1.1 Leseverstehen, E9 1.2 Hörverstehen, E9 2.3 Sprachmittlung, E9 2.2 Schreiben, E9 3 (Arbeitstechniken, Prüfungsformate),
   E9 5 (Indien: Arbeitswelt, Firma vorstellen, nachhaltig leben, Berufe). Grammatik der Unit: simple present, word order (Revision).
   Texte: „First day at Silver Leaf Tea“ (texte/u2/qualifit-listening-m.js), „The Green Roof Club“ (texte/u2/qualifit-reading-m.js),
   „Meet a nurse“ (texte/u2/qualifit-mediation-m.js) – Firma, Schule, Klinik, Orte und Personen sind erfunden.
   Nur Format-Anlehnung an die Abschlussprüfung, keine Aufgabe und kein Text daraus. */
D7Kit.seite({
  id: "u2-qualifit",
  titel: "Quali-Fit: Unit 2",
  einleitung: "You know the six parts of the exam from Unit 1. Now the texts are <b>longer</b> and the tasks are closer to the real exam: short answers, “true / false / not in the text”, finding a mistake in a summary and summarising in German. The topics come from Unit 2: working in a company, living in a sustainable way and different jobs. The grammar in part B is the simple present and the word order.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I can notice a correction and a mix-up when I listen.", "📝 I can use the simple present and the right word order.", "📖 I can decide: true, false or not in the text, and find a mistake in a summary.", "🇩🇪 I can summarise the important points of an English text in German.", "✉️ I can turn a chat into a polite e-mail and write a story with an open end."],
  quiz: { profi: "Quali-Fit" },
  glossar: {
    wordbox: ["word box", "Wortkasten: Die Wörter im Kasten brauchst du für die Lücken. Meistens bleiben Wörter übrig."],
    heading: ["heading", "Überschrift. Sie sagt in wenigen Wörtern, worum es im Absatz geht."],
    adverb: ["adverb of frequency", "Häufigkeitsadverb: Wörter wie always, usually, often, sometimes und never sagen, wie oft etwas passiert. Sie stehen vor dem Verb."],
    wordorder: ["word order", "Wortstellung: Nach Subjekt, Verb und Objekt kommt zuerst die Art und Weise, dann der Ort, dann die Zeit."],
    notintext: ["not in the text", "Bei „true / false / not in the text“ prüfst du: Steht es im Text so da (true), steht das Gegenteil da (false) oder sagt der Text darüber nichts (not in the text)?"],
    barrel: ["barrel", "Eine Tonne oder ein Fass: In einer rain barrel sammelt man Regenwasser."],
    compost: ["compost", "Kompost: Aus Obstschalen und Gemüseresten wird nach einiger Zeit gute Erde."],
    fence: ["fence", "Ein Zaun: Ein niedriger Zaun schützt die Beete vor dem Wind."],
    doubtful: ["doubtful", "Skeptisch: Wer doubtful ist, glaubt nicht, dass eine Idee funktioniert."],
    bandage: ["bandage", "Ein Verband: Eine Pflegerin oder ein Pfleger wechselt ihn zum Beispiel bei einer Wunde."],
    experience: ["work experience", "Ein Praktikum: Man arbeitet einige Tage oder Wochen in einem Beruf, um ihn kennenzulernen."]
  },
  stationen: [
    { kurz: "A Listening", ober: "Part A", titel: "A · Listening", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil A hörst du ein Gespräch. <b>Erst die Aufgaben lesen</b>, dann hören. Vorsicht: Im Gespräch gibt es oft eine <b>Korrektur</b> („No, sorry, I mean …“), ein <b>Missverständnis</b> oder <b>zwei Angaben</b>, von denen nur eine gilt. Bei Kurzantworten schreibst du <b>nur ein Wort oder eine Zahl</b>. Die Rechtschreibung zählt. Beim zweiten Hören prüfst du nur noch die Einzelheiten.</p>" },
      { art: "text", html: "<p class=\"lead\">It is Oskar's first day at a small tea company. He talks to the manager, Mr Fernandes, who tells him about the team: Nisha, Leela and Imran. The company, the town and the people are invented. <span class=\"de\">Lies die Aufgaben, dann hör zu.</span></p>" },
      { art: "hoertext", id: "hoer-a", tag: "🎧 Listening", hoertext: "u2-qf-listen-m", fragen: [
        { art: "formular", id: "karte-a", titel: "Answer the questions", lead: "Listen and complete the notes. Write <b>one word or one number</b>. <span class=\"de\">Hör zu und ergänze. Nur ein Wort oder eine Zahl.</span>",
          karte: "<p>Complete the notes about Oskar's first days.</p>",
          kopf: "Silver Leaf Tea – notes",
          felder: [
            { label: "Oskar starts work tomorrow at (o'clock)", loesung: ["8", "eight", "8 o'clock", "eight o'clock", "8.00", "8:00", "8 am", "8am", "8.00 am", "8:00 am", "eight am", "eight o clock"] },
            { label: "Lunch is in the", loesung: ["garden", "the garden"] },
            { label: "The person who tastes the new teas", loesung: ["Leela"] }
          ] },
        { art: "mc", id: "mc-a", titel: "Tick the correct answer", lead: "Tick one answer. <span class=\"de\">Tick = ankreuzen. Beim zweiten Hören nur die Einzelheiten.</span>",
          fragen: [
            { q: "Why should Oskar not disturb Mr Fernandes on Monday mornings?", o: ["He usually has a video call with customers.", "He visits shops in other towns.", "He tastes the new teas then.", "The office is closed on Mondays."], a: 0,
              e: "Mr Fernandes says that he has a video call with customers abroad every Monday and is busy until eleven." },
            { q: "What does Mr Fernandes say about Imran?", o: ["He is often away because he visits shops.", "He works in the lab next to the office.", "He starts work at seven o'clock.", "He packs the tea into small boxes."], a: 0,
              e: "Imran travels to other towns and visits the shops that sell the tea. The other jobs belong to Leela and Nisha." },
            { q: "Why does the company not give plastic cups to visitors?", o: ["It wants to produce less rubbish.", "Plastic cups are too expensive.", "The tea tastes bad in plastic cups.", "Visitors only drink tea in the garden."], a: 0,
              e: "Mr Fernandes says: we want to produce less rubbish. Leela started the rule last year." }
          ] }
      ] },
      { art: "offen", id: "plus-a", m7: true, tag: "Plus · Your words", titel: "Which job?", lead: "Would you prefer to work in Nisha's packing room or in Leela's lab? Give <b>two reasons</b>. <span class=\"de\">Antworte auf Englisch, mit eigenen Worten.</span>",
        fragen: [{ q: "Which job would you prefer? Why?", m: "I would prefer the lab because I like trying new things. Also, I would not have to stand all day.", k: ["packing|lab|nisha|leela|prefer|would", "because|reason|also|first|second"], min: 2 }],
        tipp: "Use: I would prefer … because … Also, …" }
    ] },
    { kurz: "B Language", ober: "Part B", titel: "B · Language in use", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil B ergänzt du einen Text mit Wörtern aus dem <button class=\"term\" data-t=\"wordbox\">Wortkasten</button>. <b>Lies den ganzen Satz</b>: Passt das Subjekt? <b>he / she / it</b> bekommt ein -s, bei Fragen und Verneinung steht <b>do / does / doesn't</b> vor dem Verb ohne -s. <button class=\"term\" data-t=\"adverb\">Häufigkeitsadverbien</button> stehen vor dem Verb. Dazu kommen Wortbildung (use → useful, slow → slowly) und die <button class=\"term\" data-t=\"wordorder\">Wortstellung</button>.</p>" },
      { art: "luecke", id: "luecke-b", tag: "Complete", titel: "Living green", lead: "Complete the text with words from the box. <span class=\"de\">Complete = ergänzen. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Our school ", { g: "collects" }, " old clothes every autumn and gives them to families in the town."],
          ["Imran doesn't buy new toys for his little sister. He ", { g: "usually" }, " repairs the old ones."],
          ["My sister ", { g: "never" }, " forgets her water bottle, because she takes it to school every day."],
          [{ g: "Does" }, " your school have a compost box? Ours has one behind the canteen."]
        ], extra: ["collect", "don't"] },
      { art: "mc", id: "mc-b", tag: "Tick", titel: "Words and sentences", lead: "Tick the correct answer. <span class=\"de\">Bilde das passende Wort und wähle den richtigen Satz.</span>",
        fragen: [
          { q: "Nisha packs the boxes very ___. (care)", o: ["carefully", "careful", "carefulness", "caring"], a: 0, e: "Das Wort beschreibt, wie sie packt, also ein Adverb: care + -ful + -ly = carefully." }
        ] },
      { art: "ordnen", id: "ordnen-b", tag: "Put in order", titel: "Build the sentence", lead: "Put the parts in the correct order: how – where – when. <span class=\"de\">Subjekt, Verb, Objekt, dann Art und Weise – Ort – Zeit.</span>",
        schritte: ["Leela", "tastes", "every new tea", "slowly", "in the small lab", "before lunch"] }
    ] },
    { kurz: "C Reading", ober: "Part C", titel: "C · Reading", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. What are the students doing? What does a garden like this need?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-roof-garden.jpg\" alt=\"Students work in raised beds on a flat school roof; one of them fills a watering can from a rainwater barrel.\" style=\"width:100%;border-radius:14px\"></figure><p>Talk to a partner or write two sentences. Then read on.</p>" },
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil C liest du einen längeren Text mit Zeilennummern. Lies zuerst alles <b>einmal schnell</b>, nur für das Thema. Bei <b>Überschriften</b> zählt der ganze Absatz. Bei <b>„true / false / <button class=\"term\" data-t=\"notintext\">not in the text</button>“</b> suchst du die Stelle: Steht es so da, steht das Gegenteil da – oder sagt der Text nichts darüber? Bei einer Zusammenfassung mit Fehler vergleichst du jeden Satz mit dem Text. Wörter wie <button class=\"term\" data-t=\"barrel\">barrel</button>, <button class=\"term\" data-t=\"compost\">compost</button>, <button class=\"term\" data-t=\"fence\">fence</button> und <button class=\"term\" data-t=\"doubtful\">doubtful</button> stehen im Glossar.</p>" },
      { art: "lesetext", lesetext: "u2-qf-read-m" },
      { art: "paare", id: "ueberschriften", tag: "Match", titel: "Headings", lead: "Match each <button class=\"term\" data-t=\"heading\">heading</button> with the paragraph. <span class=\"de\">Welche Überschrift passt zu welchem Absatz?</span>",
        paare: [["Paragraph 1", "From a small yard to a big idea"], ["Paragraph 2", "Saving every drop"], ["Paragraph 3", "From waste to soil"], ["Paragraph 4", "Setbacks and small joys"]] },
      { art: "beleg", id: "zeilen-c", tag: "Find the lines", titel: "Where does the text say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-qf-read-m",
        fragen: [
          { q: "How did the school make sure that the roof was safe for a garden?", zeilen: [6, 7], e: "An engineer checked that the roof was strong enough.", tipp: "Look at the first paragraph." },
          { q: "Why do the students grow only a few herbs in the dry months?", zeilen: [16, 18], e: "These plants need less water than pumpkins or beans.", tipp: "Look at the end of the second paragraph." },
          { q: "What did the club do after the wind destroyed the young bean plants?", zeilen: [29, 30], e: "They started again and put up a low fence.", tipp: "Look at the fourth paragraph." }
        ] },
      { art: "mc", id: "tf-c", tag: "Tick", titel: "True, false or not in the text?", lead: "Tick the correct answer. <span class=\"de\">Steht es im Text (true), das Gegenteil (false) oder nichts darüber (not in the text)?</span>",
        fragen: [
          { q: "The club started because the school yard was too small for a garden.", o: ["true", "false", "not in the text"], a: 0, e: "The text says that the yard was too small, so the students used the roof." },
          { q: "Mrs Rao changed her mind because the club's tomatoes made the soup taste better.", o: ["not in the text", "true", "false"], a: 0, e: "The text only says that she was not convinced at first and now keeps the peel for the club – it does not say why she changed her mind." },
          { q: "Kabir loves the soup that is made with the club's tomatoes.", o: ["false", "true", "not in the text"], a: 0, e: "Kabir says that he does not like soup, but he loves his own tomatoes." }
        ] },
      { art: "mc", id: "fehler-c", tag: "Find the mistake", titel: "A summary with a mistake", lead: "Read the summary. One sentence is wrong. <span class=\"de\">Welcher Satz stimmt nicht mit dem Text überein?</span><br><i>1 The club began after an engineer had checked the roof. 2 The students collect rain in barrels and never use tap water. 3 Compost from the canteen waste helps the plants to grow. 4 After the wind destroyed the beans, the club gave up the roof garden.</i>",
        fragen: [
          { q: "Which sentence of the summary is wrong?", o: ["After the wind destroyed the beans, the club gave up the roof garden.", "The club began after an engineer had checked the roof.", "The students collect rain in barrels and never use tap water.", "Compost from the canteen waste helps the plants to grow."], a: 0, e: "The text says: the club had to start again, and now a low fence protects the beds." }
        ] },
      { art: "offen", id: "plus-c", m7: true, tag: "Plus · Your opinion", titel: "Good advice?", lead: "Divya says: “Start small, ask for help and don't give up.” Why is this good advice for a school project? Give <b>two reasons</b>.",
        fragen: [{ q: "Why is this good advice? Give two reasons.", m: "It is good advice because a small project is easier to manage. Also, other people can help you, so you do not have to do everything alone.", k: ["because|reason|also|first|second", "small|help|easier|alone|together|give up|fail"], min: 2 }],
        tipp: "Use: It is good advice because … Also, …" }
    ] },
    { kurz: "D Mediation", ober: "Part D", titel: "D · Mediation", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil D gibst du auf <b>Deutsch</b> weiter, was eine bestimmte Person wissen will. Lies zuerst, <b>was sie wissen will</b>, und suche nur diese Angaben im englischen Text. Du übersetzt nicht Wort für Wort. Das Porträt enthält auch <b>Nebeninformationen</b>, die Jana nicht braucht. Ein Wörterbuch darf helfen. Wörter wie <button class=\"term\" data-t=\"bandage\">bandage</button> und <button class=\"term\" data-t=\"experience\">work experience</button> stehen im Glossar.</p>" },
      { art: "text", html: "<p class=\"lead\">Deine Mitschülerin Jana überlegt, ob der Beruf Krankenpfleger etwas für sie ist. Sie versteht kaum Englisch. Du hast ein Porträt gefunden. <span class=\"de\">Klinik und Person sind erfunden.</span></p>" },
      { art: "lesetext", lesetext: "u2-qf-job-m" },
      { art: "mc", id: "mc-d", tag: "Ankreuzen", titel: "Was lässt du weg?", lead: "Jana will wissen, wie der Arbeitstag aussieht und was man für den Beruf braucht. Kreuze an.",
        fragen: [
          { q: "Welche Information aus dem Porträt brauchst du für Jana nicht?", o: ["das Hobby von Herrn Pinto (Gitarre in einer Band)", "die Dauer der Ausbildung", "den Beginn des Frühdienstes", "die Eigenschaften, die man mitbringen sollte"], a: 0,
            e: "Das Hobby ist eine Nebeninformation. Die anderen drei Angaben helfen Jana bei ihrer Frage." }
        ] },
      { art: "luecke", id: "luecke-d", tag: "Ergänzen", titel: "Nachricht an Jana", lead: "Ergänze die Nachricht mit Wörtern aus dem Kasten. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Hallo Jana, hier ist, was ich über den Beruf Krankenpfleger herausgefunden habe:"],
          ["Herr Pinto arbeitet in einer kleinen Klinik. Sein Frühdienst beginnt um ", { g: "sechs" }, " Uhr morgens."],
          ["Er misst die Temperatur der Patienten, wechselt ", { g: "Verbände" }, " und spricht mit besorgten Familien."],
          ["Die Ausbildung dauert etwa ", { g: "drei" }, " Jahre. Vorher ist ein ", { g: "Praktikum" }, " von ein paar Wochen sinnvoll."]
        ], extra: ["Hunde", "Schuhe"] },
      { art: "offen", id: "offen-d", tag: "Schreiben", titel: "Ist der Beruf schwierig?", lead: "Jana fragt: „Ist der Beruf auch schwierig? Was muss man mitbringen?“ Antworte ihr in zwei bis drei deutschen Sätzen.",
        fragen: [{ q: "Was ist an dem Beruf anstrengend und was muss man mitbringen?", m: "Der Beruf kann anstrengend sein, denn Herr Pinto arbeitet manchmal nachts und am Wochenende und muss viel stehen. Man muss Menschen mögen und ruhig bleiben können.", k: ["anstrengend|müde|schwer|schwierig", "nacht|nachts|wochenende|wochenenden|stehen", "mögen|ruhig|gelassen|ruhe"], min: 3 }],
        tipp: "Suche im Text die Wörter tiring, night, weekends, like people und calm. Schreibe nur das Wichtigste." },
      { art: "offen", id: "challenge-d", m7: true, tag: "Plus · Jana fragt nach", titel: "Jana fragt nach", lead: "Jana fragt: „Was soll ich tun, bevor ich mich für die Ausbildung entscheide?“ Antworte ihr auf Deutsch in ein bis zwei Sätzen und sag, was Herr Pinto selbst gemacht hat.",
        fragen: [{ q: "Was soll Jana vorher tun und was hat Herr Pinto getan?", m: "Du solltest vorher ein Praktikum machen, zum Beispiel erst einmal eine Woche in einer Klinik. Herr Pinto selbst hat mit siebzehn zwei Wochen in einem Krankenhaus gearbeitet.", k: ["praktikum|probe|ausprobier|erfahrung|woche", "klinik|krankenhaus", "siebzehn|17|zwei wochen|selbst"], min: 3 }],
        tipp: "Suche im Text die Wörter work experience, try one week und seventeen." }
    ] },
    { kurz: "E Text and media", ober: "Part E", titel: "E · Text and media", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil E machst du aus einer Textsorte eine andere, hier aus einem <b>lockeren Chat</b> eine <b>höfliche E-Mail</b>. Suche im Chat, was die Firma wissen muss (wer, was, wann, was kostet es) und lass Nebensachen weg. Schreibe vollständige Sätze mit <b>Could you …? / We would like …</b>, keine Abkürzungen und keine Smileys. Eine E-Mail an eine Firma beginnt mit <b>Dear Sir or Madam</b> und endet mit <b>Yours faithfully</b>.</p>" },
      { art: "text", html: "<p class=\"lead\">Oskar and Kabir plan a class visit to a print shop that makes posters. Oskar wants to write to the shop. The shop is invented. <span class=\"de\">Lies den Chat.</span></p><p><b>Oskar:</b> hey, can we visit the print shop?</p><p><b>Kabir:</b> yes!! ask them for wednesday. tuesday is ok too, but we have a test on thursday lol</p><p><b>Oskar:</b> how many people?</p><p><b>Kabir:</b> 22 students + 2 teachers. and we need to know the price</p><p><b>Oskar:</b> and the bus?</p><p><b>Kabir:</b> idk, the school pays for it, don't ask about that. but ask if we can see how they print the posters, that's the cool part. btw the shop is on Mill Street next to the bakery</p>" },
      { art: "mc", id: "mc-e", tag: "Tick", titel: "Polite or not?", lead: "Tick the best sentence for the e-mail. <span class=\"de\">Welcher Satz passt in eine höfliche E-Mail?</span>",
        fragen: [
          { q: "How do you ask to see the printing?", o: ["Could you tell us whether we can see how the posters are printed?", "we wanna see how you print stuff", "Show us your machines!", "Is it ok if we look at the machines lol?"], a: 0, e: "“Could you tell us whether …?” ist höflich, vollständig und ohne Umgangssprache." }
        ] },
      { art: "offen", id: "offen-e", tag: "Write", titel: "Write the e-mail", lead: "Write the e-mail to the print shop (about 40 words). Mention the <b>date</b>, the <b>number of people</b>, the <b>price</b> and the <b>printing</b>. Leave out the bus and the bakery.",
        fragen: [{ q: "Write a polite e-mail to the print shop.", m: "Dear Sir or Madam, I am writing because our class would like to visit your print shop. We are twenty-two students and two teachers. Could you tell us whether a visit on Wednesday is possible? We would also like to know how much the tour costs and whether we can see how the posters are printed. Yours faithfully, Oskar", k: ["could|would|please", "wednesday|tuesday|visit|date|day", "cost|costs|price|much", "students|teachers|class|twenty", "poster|posters|print|printed|printing|machines"], min: 4 }],
        tipp: "Start with: Dear Sir or Madam, I am writing because … End with: Yours faithfully, Oskar" },
      { art: "offen", id: "challenge-e", m7: true, tag: "Plus · Explain", titel: "A second choice", lead: "Wednesday may not be possible. Write one polite sentence with <b>if</b> that asks for another day. <span class=\"de\">Zum Beispiel: Falls Mittwoch nicht geht, wäre dann Dienstag möglich?</span>",
        fragen: [{ q: "Write a polite sentence with if.", m: "If Wednesday is not possible, would Tuesday be possible instead?", k: ["if", "wednesday|tuesday|day", "could|would|possible"], min: 3 }],
        tipp: "After if we use the present: If Wednesday is not possible, …" }
    ] },
    { kurz: "F Writing", ober: "Part F", titel: "F · Writing", teile: [
      { art: "merke", kopf: "SO GEHT DIESER PRÜFUNGSTEIL", html: "<p>In Teil F schreibst du eine Geschichte zu Bildern. Du bekommst Punkte für <b>Inhalt</b> (alle Bilder kommen vor, die Geschichte hat einen Schluss) und für <b>Sprache</b> (richtige, abwechslungsreiche Sätze). Bei einem <b>offenen Schluss</b> hört die Geschichte spannend auf. Erzähle in der Vergangenheit, verbinde Sätze mit <i>when, because, although</i> und zähle am Ende die Wörter.</p>" },
      { art: "text", html: "<p class=\"lead\">Look at the four pictures. They tell a story that has no end. <span class=\"de\">Die Bilder sind in Worten beschrieben.</span></p>" },
      { art: "karten", karten: [{ ic: "🌱", titel: "Picture 1", text: "Divya sees a small plant between two stones in the school yard." }, { ic: "🪴", titel: "Picture 2", text: "She and Oskar put it into a pot." }, { ic: "💧", titel: "Picture 3", text: "Next morning the soil is wet, but nobody gave it water." }, { ic: "❓", titel: "Picture 4", text: "There is a small note next to the pot." }] },
      { art: "schreiben", id: "schreiben-f", tag: "Writing trainer", titel: "Write the story", min: 70,
        auftrag: "<p><b>Write a story</b> about the four pictures (about 70 words).</p><ul><li>Tell what happens in every picture and add one feeling (for example: surprised, worried).</li><li>Use the simple past (for example: saw, put, was).</li><li>Join two sentences with <i>when</i>, <i>because</i> or <i>although</i>.</li><li>End with an open end: do not say what is on the note.</li></ul>",
        starter: ["One morning Divya saw …", "She and Oskar …", "The next day …", "Although nobody …", "Next to the pot there was …", "Divya opened the note and …"],
        kriterien: ["Alle vier Bilder kommen in der Geschichte vor.", "Die Geschichte erzählt in der Vergangenheit und nennt mindestens ein Gefühl.", "Mindestens zwei Sätze sind mit when / because / although verbunden.", "Das Ende bleibt offen: Der Inhalt des Zettels wird nicht verraten.", "Die Sätze sind vollständig und richtig geschrieben.", "Es sind mindestens siebzig Wörter."] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Which part tests what?", teile: [
      { art: "luecke", id: "sichern", tag: "Complete", titel: "The six parts", lead: "Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["In Part A I ", { g: "listen" }, " for corrections and for facts of which only one is true."],
          ["In Part C I decide whether a sentence is true, false or not in the ", { g: "text" }, "."],
          ["In Part D I tell a person in ", { g: "German" }, " what an English text says."],
          ["In Part E I turn a ", { g: "chat" }, " into a polite e-mail."]
        ], extra: ["speak", "draw"] }
    ] }
  ],
  weiter: { text: "Well done! You tried all six parts of the exam again with longer texts and exam-style tasks. In the next units the tasks get longer – with less help." }
});
