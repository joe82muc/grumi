/* Englisch 9M · Unit 2 Exploring India · Listening: Welcome to our company · M-Fassung
   (Gespräche und Telefonate verstehen: Thema erfassen, Zahlen und Korrekturen heraushören – Beschäftigte, Uhrzeit, Ziele der
   Lieferung –, Gründe und Gefühle erschließen, Notizen und ein Formular ausfüllen, Sprache im Gespräch – simple present
   (Revision), word order (Revision); Plus: Gründe erklären, Meinung, Sprachmittlung)
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten entnehmen, Schlüsse ziehen, Notizen machen),
   E9 3 (Hörstrategien), E9 5 (Indien: Arbeit und Alltag).
   Texte: „Welcome to Diya Solar Workshop“ (texte/u2/listening-company-tour-m.js) und „A call about a work placement“
   (texte/u2/listening-work-placement-m.js) – Firmen, Stadt und Personen sind erfunden. */
D7Kit.seite({
  id: "u2-listening",
  titel: "Listening: Welcome to our company",
  einleitung: "A group of students visits a small company in India, and later a girl phones a cycle workshop. You listen to a guided tour and to a phone call. In both talks somebody corrects a number or a time, and some reasons and feelings are only hinted at. Catch the main idea, then the details, then read between the lines.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I understand a conversation, even when somebody corrects a number or a time.", "🔎 I catch numbers, times, places and names – and know which one is right.", "💭 I work out reasons and feelings that nobody says directly.", "🧩 I spot the simple present and the word order in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    placement: ["work placement", "Ein Praktikum: Du arbeitest eine Zeit lang in einer Firma und lernst den Beruf kennen."],
    steady: ["steady electricity", "Das ist gleichmäßiger Strom, der nicht immer wieder ausfällt."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber? Wie fühlen sich die Sprecher?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten und achtest auf Korrekturen: Welche Angabe gilt am Ende?"]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: a small company in India. What can you see? What do you think is going on?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u2-solar-workshop.jpg\" alt=\"Workers put together small solar lamps at long tables; a woman shows two visitors a lamp.\" style=\"width:100%;border-radius:14px\"></figure><p>What do the people make here? Who are the two visitors, and what could they ask?</p>" },
      { art: "text", html: "<p class=\"lead\">In the city of Nilgram, a group of students visits a small company. A guide shows them around and answers their questions. Later you hear a phone call to a cycle workshop.</p><p>The companies, the city and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["mend", "reparieren"], ["colleague", "Kollegin / Kollege"], ["deliver", "liefern"], ["canteen", "Kantine"], ["safety glasses", "Schutzbrille"], ["work placement", "Praktikum"], ["shade", "Schatten"], ["proud", "stolz"], ["sign", "unterschreiben"], ["heavy", "schwer"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> topic, people, mood.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> details – and watch out for <b>corrections</b>: “No, sorry …”, “Oh, wait …”, “I mean …”. Only the <b>last</b> number or time counts.</li></ol><p>Numbers are tricky: <b>fourteen</b> or <b>forty</b>? Listen to the end of the word. You do <b>not</b> need to understand every word. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u2-listen-company-m", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer.",
          fragen: [
            { q: "What is the visit mainly about?", o: ["A small company that builds solar lamps and repairs them for free.", "A shop that sells lamps to tourists in the city.", "A school that teaches students how to repair bicycles.", "A big factory that wants to employ more people."], a: 0,
              e: "Mrs Verma talks about the lamps, the people who work there and the free repair. There is no shop in the city, and the company is small." },
            { q: "How did the company start?", o: ["Mrs Verma and her brother started it in a garage.", "A school started it with a group of students.", "A bank gave a lot of money to build it.", "Farmers from the hills started it together."], a: 0,
              e: "She says that her brother and she started the company in his garage nine years ago." },
            { q: "Why do schools buy the lamps?", o: ["So that children can do their homework after dark.", "So that the school can save money on its building.", "Because the students build the lamps themselves.", "Because the lamps are free for schools."], a: 0,
              e: "Mrs Verma says that schools order the lamps so that children can do their homework after dark." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u2-listen-company-m", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. Watch out for corrections.",
          aussagen: [
            ["Forty people work at the company today.", false],
            ["Twenty-four people build the lamps.", true],
            ["On Saturday everybody stops work at noon – without exception.", false],
            ["The workers eat lunch in a canteen.", false],
            ["A farmer helps to bring the boxes to some of the villages.", true]
          ] },
        { art: "mc", id: "anzahl", titel: "How many people?", lead: "Tick the correct answer.",
          fragen: [
            { q: "How many people work in the office?", o: ["eight", "ten", "twenty-four", "forty-two"], a: 0,
              e: "Eight work in the office. Ten pack the boxes and drive the trucks, twenty-four build the lamps, and forty-two is the whole team." }
          ] },
        { art: "luecke", id: "notizen", titel: "Notes about the company", lead: "Complete the notes with words from the box. Two words are left over.",
          absaetze: [
            ["Started ", { g: "nine" }, " years ago in a garage."],
            ["Team: ", { g: "forty-two" }, " people (the first number was wrong!)."],
            ["Lamps go to about ", { g: "fifty" }, " villages in the hills."],
            ["Last part of the way to some villages: a farmer takes the boxes on a ", { g: "cart" }, "."]
          ], extra: ["shop", "canteen"] },
        { art: "ordnen", id: "reihenfolge", titel: "What do they talk about?", lead: "Put the topics in the order of the tour.",
          schritte: ["Mrs Verma says what the company makes and how it started.", "She gives the number of workers and corrects herself.", "She tells who buys the lamps and where they go.", "She explains the working hours.", "She talks about lunch on the roof.", "She explains what she is proud of."] },
        { art: "mc", id: "schluesse", titel: "Between the lines", lead: "Tick the correct answer. The answer is not said directly.",
          fragen: [
            { q: "Why is Mrs Verma proud of the free repair?", o: ["A lamp must last for years because the families do not have much money.", "Repairing lamps is cheaper than building new ones.", "Customers pay extra for a quick repair.", "The government asks every company to repair its products."], a: 0,
              e: "She says that many companies throw broken things away, but the families in the villages do not have much money. So a lamp must last. Nobody mentions prices for the repair or the government." },
            { q: "What does the letter from the girl show?", o: ["The lamps really help people – she could study and passed her exams.", "Girls learn faster in the evening than boys.", "The lamps are the cheapest in the country.", "The girl wants a job at the company."], a: 0,
              e: "The girl wrote that she passed her exams because she could study in the evenings. That shows what the lamps can change in a person's life." }
          ] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to a cycle workshop", teile: [
      { art: "text", html: "<p class=\"lead\">Priya is a student. She phones a cycle workshop because she wants to do a work placement. Read the tasks, then listen. Watch out: a letter and a time are corrected.</p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u2-listen-visit-m", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Priya call?", o: ["She asks about a work placement in October.", "She wants to buy a new bicycle.", "She wants to repair her bike at the workshop.", "She wants to cancel a visit."], a: 0,
              e: "She says that she would like to do a work placement in October." },
            { q: "What must Priya do before she can do the placement?", o: ["Visit the workshop first, because the manager then decides.", "Send her school report by e-mail.", "Pass a test at school.", "Pay a small fee."], a: 0,
              e: "The receptionist says she must visit first. The manager then decides who can join." }
          ] },
        { art: "formular", id: "karte", titel: "Priya's visit card", lead: "Listen again and complete the card. Only the final information counts.",
          karte: "<p>Fill in the card with the information from the call.</p>",
          kopf: "Green Wheels Cycle Workshop – Visit card",
          felder: [
            { label: "Surname", loesung: ["Menon", "MENON", "M E N O N", "M-E-N-O-N"] },
            { label: "Ask for", loesung: ["Bhatt", "Mr Bhatt", "Mister Bhatt", "Mr. Bhatt"] },
            { label: "Day", loesung: ["Thursday"], wahl: ["Wednesday", "Thursday", "Friday"] },
            { label: "Time", loesung: ["10.45", "10:45", "quarter to eleven", "a quarter to eleven", "10.45 am", "10:45 am", "15 to 11", "quarter to 11"] },
            { label: "Bring (1)", loesung: ["student card", "my student card", "your student card", "the student card", "a student card", "school card", "my school card", "your school card", "the school card"] },
            { label: "Bring (2)", loesung: ["letter from parents", "a letter from parents", "letter from my parents", "a letter from my parents", "letter from your parents", "a letter from your parents", "parents' letter", "signed letter", "a signed letter"] },
            { label: "Wear", loesung: ["closed shoes", "shoes", "strong shoes"], wahl: ["a hat", "closed shoes", "old gloves"] }
          ] },
        { art: "mc", id: "schluesse2", titel: "Between the lines", lead: "Tick the correct answer. The answer is not said directly.",
          fragen: [
            { q: "Why does the receptionist tell Priya to wear closed shoes and to tie back long hair?", o: ["So that she does not get hurt in the workshop.", "Because every worker has to wear a uniform.", "Because the manager only likes tidy visitors.", "Because it is very cold in the workshop."], a: 0,
              e: "The receptionist only mentions the heavy tools. Closed shoes protect your feet, and long hair must not get caught – both rules are about safety." },
            { q: "How does Priya feel about the visit?", o: ["A little nervous, but she is looking forward to it.", "Bored, but she says yes to be polite.", "Angry, because she must wait for a day.", "Completely relaxed, because she knows the workshop."], a: 0,
              e: "She has never worked in a real workshop and hopes that she will not do anything wrong – so she is a little nervous. But she loves bicycles and cannot wait to see the workshop." }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 2 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The tour uses two things from Unit 2 (revision):</p><ul><li><b>simple present</b> – facts and routines. With <i>he, she, it</i> the verb gets an <b>-s</b>: Mrs Verma <u>looks</u> after the visitors. Questions and “no” use <i>do / does</i>: <u>Does</u> every worker learn that? We <u>don't</u> (= do not) have a canteen. After <i>does</i> the verb has <b>no -s</b>.</li><li><b>word order</b> – subject – verb – object, then <b>how – where – when</b>: A worker mends the lamp <u>carefully</u> <u>in the workshop</u> <u>on the same day</u>.</li></ul>" },
      { art: "sort", id: "verb-s", tag: "Sort", titel: "With -s or without?", lead: "Put the phrases from the tour into the right box.",
        buckets: ["no -s (I, we, you, they)", "with -s (he, she, it)"],
        items: [{ t: "We make small solar lamps", b: 0 }, { t: "Families order the lamps", b: 0 }, { t: "Many companies throw broken things away", b: 0 }, { t: "Twenty-four of them build the lamps", b: 0 },
                { t: "Mrs Verma looks after the visitors", b: 1 }, { t: "A small garden grows on the roof", b: 1 }, { t: "A worker mends the lamp", b: 1 }, { t: "Every new worker learns it", b: 1 }] },
      { art: "luecke", id: "do-does", tag: "Gap text", titel: "Questions and answers", lead: "Complete the sentences. Careful: after does the verb has no -s.",
        absaetze: [
          ["How many people ", { g: "work" }, " here?"],
          ["Where ", { g: "does" }, " Mrs Verma eat lunch?"],
          ["We ", { g: "do not" }, " have a canteen."],
          ["Every worker ", { g: "brings" }, " lunch from home."]
        ], extra: ["works", "bring"] },
      { art: "ordnen", id: "wortstellung", tag: "Word order", titel: "Build the sentence", lead: "Put the parts in the right order: how – where – when.",
        schritte: ["A worker", "mends the lamp", "carefully", "in the workshop", "on the same day."] },
      { art: "offen", id: "umformen", tag: "Your words", titel: "Negative and question", lead: "Look at the sentence: The workers eat lunch on the roof. Write a negative sentence and a question with do or does.",
        fragen: [{ q: "Make a negative sentence and a question from: The workers eat lunch on the roof.", m: "The workers do not eat lunch on the roof. Where do the workers eat lunch?", k: ["do not|don't", "do the workers|do they|where do|what do|when do"], min: 2 }],
        tipp: "Start like this: The workers do not … / Where do the workers …?" },
      { art: "offen", id: "fragen", m7: true, tag: "Your words", titel: "Your questions", lead: "You visit a company. Write two questions for the guide. Use do or does, and put the time word at the end.",
        fragen: [{ q: "Which questions do you ask the guide?", m: "Does your company deliver the products every week? How many people work here in the morning?", k: ["do|does|how many|what|when|where|who", "you|your|company|workers|people|here|work|deliver"], min: 2 }],
        tipp: "Start like this: Does your company …? / How many people …? / When do you …?" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two talks in four sentences", lead: "Complete the summary. A summary uses your own words – it is not the same as the talk.",
        absaetze: [
          ["Diya Solar Workshop makes ", { g: "solar" }, " lamps for villages in the hills."],
          ["Mrs Verma is proud of the free repair because the lamps must ", { g: "last" }, " for years."],
          ["Priya wants to do a work ", { g: "placement" }, " at a cycle workshop."],
          ["She cannot come on Wednesday because she has a ", { g: "dentist" }, " appointment, so she visits on Thursday."]
        ], extra: ["canteen", "ticket"] },
      { art: "offen", id: "erklaeren", m7: true, tag: "Your words", titel: "Explain it", lead: "Mrs Verma says: “A lamp must last for years.” Explain in your own words what she means and why.",
        fragen: [{ q: "What does Mrs Verma mean?", m: "She means that the lamps must not break quickly because the families in the villages do not have much money. So the company repairs old lamps for free.", k: ["money|poor|expensive|cheap|pay", "long|years|last|break|broken|repair|mend", "family|families|village|villages|people"], min: 3 }],
        tipp: "Start like this: She means that … because …" },
      { art: "offen", id: "meinung", m7: true, tag: "Your opinion", titel: "Would you like to work there?", lead: "Would you like to do a work placement in a small company like Diya Solar Workshop? Write two sentences and give two reasons.",
        fragen: [{ q: "Would you like a placement in a small company? Give two reasons.", m: "Yes, I would, because I could learn how solar lamps work. Also, I would help people in villages, and in a small company everybody knows each other.", k: ["yes|no|would|wouldn't|would not|like|prefer", "because|reason|also|first|second|and"], min: 2 }],
        tipp: "Start like this: I would (not) like it because … Also, …" },
      { art: "offen", id: "mediation", m7: true, tag: "Mediation", titel: "Auf Deutsch weitersagen", lead: "Eine Mitschülerin hat das Telefonat nicht verstanden. Sag ihr auf Deutsch in zwei bis drei Sätzen, wann Priya in die Werkstatt kommen soll und was sie mitbringen und anziehen muss.",
        fragen: [{ q: "Was sagst du deiner Mitschülerin?", m: "Priya soll am Donnerstag um Viertel vor elf in die Werkstatt kommen und nach Herrn Bhatt fragen. Sie muss ihren Schülerausweis und einen Brief mit der Unterschrift ihrer Eltern mitbringen. Außerdem soll sie feste, geschlossene Schuhe anziehen.", k: ["donnerstag|Donnerstag", "viertel vor elf|10.45|10:45|Viertel vor 11", "brief|Brief|Unterschrift|unterschreib", "schuhe|Schuhe"], min: 3 }],
        tipp: "Du musst nicht alles übersetzen: Nenne den Tag, die Uhrzeit und das Wichtigste zum Mitbringen." }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea, the details and the corrections in a tour and in a phone call – and you can read between the lines." }
});
