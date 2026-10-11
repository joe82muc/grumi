/* Englisch 9M · Unit 4 News from New Zealand · Reading: Three generations, one story · M-Fassung
   (eine Erzählung verstehen: Thema und Verlauf erfassen, Einzelheiten finden und mit Zeilen belegen, Gefühle und Gründe aller drei
   Generationen erschließen, einen Gegenstand mit zweiter Bedeutung begründet deuten, auf Deutsch zusammenfassen, Sprache im Text –
   going to (Pläne), simple past (Rückblick), Passiv verstehen und selbst bilden (auch mit by), die Grammatik der Unit 4)
   LehrplanPLUS E9 1.1 Leseverstehen (längere Texte, Details entnehmen, Schlüsse ziehen), E9 3 (Texte mit inhaltlichen und
   sprachlichen Merkmalen erschließen), E9 4 (Lesetechniken global, selektiv, genau), E9 5 (Neuseeland: Generationen, Berufswahl),
   Sprachmittlung (Zusammenfassung auf Deutsch).
   Text: „Anahera and the apple farm“ (texte/u4/reading-anahera-farm-m.js) – Personen und Ort sind erfunden. */
D7Kit.seite({
  id: "u4-reading",
  titel: "Reading: Three generations, one story",
  einleitung: "A girl from New Zealand has a plan for her future – and her grandad has a different one. You read what happens at the dinner table and afterwards, and you see the story through the eyes of three generations. You find out what it is about, look for details and show <b>where</b> in the text you found them – and you work out what the characters feel, although nobody says it directly.",
  zeit: "etwa 45 Minuten",
  ziele: ["📖 I understand a longer story about a family.", "🔎 I find details and name the lines.", "💭 I read between the lines and explain an object with evidence.", "✍️ I give my opinion and explain the text in my own words.", "🧩 I spot going to, the simple past and the passive – and I make passive sentences myself."],
  quiz: { profi: "Reading pro" },
  glossar: {
    skimming: ["skimming", "Den Text schnell überfliegen, um das Thema zu erfassen: Überschrift, erster Satz, letzter Absatz."],
    scanning: ["scanning", "Den Text gezielt nach einer Information absuchen, zum Beispiel nach einem Namen oder einer Zahl."],
    inference: ["reading between the lines", "Etwas verstehen, das nicht wörtlich im Text steht, zum Beispiel ein Gefühl oder einen Grund, den man aus dem erschließt, was jemand sagt und tut."],
    apprenticeship: ["apprenticeship", "Eine Ausbildung ist eine Lehre in einem Beruf: Man arbeitet in einem Betrieb und lernt dabei den Beruf."],
    solar: ["solar panel", "Ein Solarmodul wandelt Sonnenlicht in Strom um und wird oft auf ein Dach gebaut."],
    spanner: ["spanner", "Ein Spanner ist im britischen Englisch ein Schraubenschlüssel, also ein Werkzeug, mit dem man Schrauben und Muttern festdreht oder löst."],
    passive: ["passive", "Im Passiv steht die Handlung im Vordergrund und nicht die Person: „The shed was built.“ heißt „Der Schuppen wurde gebaut.“ Mit „by“ kann man sagen, wer es getan hat."],
    lines: ["line", "Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."]
  },
  haupttext: "u4-read-anahera-m",
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a family farm in New Zealand</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u4-apple-farm.jpg\" alt=\"Three generations pick apples in an orchard: a grandmother, her son with a crate and his daughter on a ladder.\" loading=\"lazy\" style=\"width:100%;border-radius:14px\"></figure><p>Who can you see? What are they doing together? Who do you think decides what happens on the farm? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Who decides what you do after school – you, your parents, or everybody together? In this module you read a story by <b>Anahera</b>, a girl who lives with her family on an apple farm in New Zealand. She has a plan, and her grandad is not happy about it.</p><p>You read the story through the eyes of three generations: what does Anahera want, what does her father see, and what does her grandad keep to himself? Anahera, her family and the place Kauri Bay are invented. The story could happen in many families.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["orchard", "Obstgarten"], ["apprenticeship", "Ausbildung"], ["solar panel", "Solarmodul"], ["take over", "übernehmen"], ["electricity bill", "Stromrechnung"], ["spanner", "Schraubenschlüssel"], ["to flicker", "flackern"], ["rusty", "rostig"], ["hardly", "kaum"], ["to pretend", "so tun, als ob"]] },
      { art: "merke", kopf: "READING TIP", html: "<p><b><button class=\"term\" data-t=\"skimming\">Skimming</button></b> – read fast to get the main idea: title, first sentence, last paragraph.<br><b><button class=\"term\" data-t=\"scanning\">Scanning</button></b> – look for one piece of information, for example a name or a number.<br><b><button class=\"term\" data-t=\"inference\">Reading between the lines</button></b> – ask: What does the person feel? Why does he or she do or say this?</p><p>In a story, feelings are often <b>not</b> written down. You see them in what people do – and in the things they keep.</p>" }
    ] },
    { kurz: "Main idea", ober: "First reading", titel: "What is the text about?", teile: [
      { art: "text", html: "<p class=\"lead\">Read the story once. Don't stop at words you don't know. <span class=\"de\">Lies die Geschichte einmal ganz durch.</span></p>" },
      { art: "lesetext", lesetext: "u4-read-anahera-m" },
      { art: "mc", id: "global", tag: "Skimming", titel: "The main idea", lead: "Tick the correct answer.",
        fragen: [
          { q: "What is the main problem in the story?", o: ["Anahera's plan for her future is different from what her grandad hoped for.", "The family has no money to pay the workers.", "Anahera is afraid of working on the farm.", "Grandad wants to sell the farm to an electrician."], a: 0,
            e: "Anahera wants to become an electrician, but Grandad had hoped that she would take over the farm. The family finds a solution in the end." },
          { q: "Who has the idea to put solar panels on the roof?", o: ["Dad", "Grandad", "Nana Huia", "Anahera's teacher"], a: 0,
            e: "Dad says it in the shed: Anahera is going to learn how to put solar panels on the roof, so that the farm makes some of its own power." },
          { q: "How does the story end?", o: ["The family has a plan that works for everybody.", "Anahera gives up her wish to become an electrician.", "Grandad leaves the farm for the town.", "Dad and Grandad stop talking to each other."], a: 0,
            e: "Anahera will work for an electrician in the week and help on the farm at the weekend. Grandad will teach her about the old trees." }
        ] },
      { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?", lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
        schritte: ["Anahera told her family about her plan.", "Grandad walked out into the dark.", "Nana Huia told Anahera about Grandad's past.", "Dad talked about the electricity bill in the shed.", "Anahera tried Grandad's spanner on the old fuse box."] }
    ] },
    { kurz: "Details", ober: "Second reading", titel: "Find the details", teile: [
      { art: "tf", id: "richtigfalsch", tag: "Scanning", titel: "True or false?", lead: "Look for the information in the text. Some sentences are almost right! <span class=\"de\">Den Text holst du mit „📖 Text“.</span>",
        aussagen: [
          ["The apples are picked by hand at harvest time.", true],
          ["Grandad slammed the door when he left the room.", false],
          ["Nana Huia knew about Grandad's years in a town.", true],
          ["Grandad has used the spanner every winter for forty years.", false],
          ["Anahera is going to work for the electrician at the weekend.", false]
        ] },
      { art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">In einer Prüfung schreibst du dann zum Beispiel: (ll. 4–6).</span>", lesetext: "u4-read-anahera-m",
        fragen: [
          { q: "What is Anahera going to do after school?", zeilen: [11, 13], e: "She says that she is going to start an apprenticeship and one day build solar panels.", tipp: "Look at what she says at dinner." },
          { q: "What did Grandad hope for the farm?", zeilen: [16, 16], e: "He thought that Anahera was going to take over the farm.", tipp: "Look at what Grandad says quietly." },
          { q: "Which sentence shows that Grandad has looked after the spanner carefully?", zeilen: [41, 43], e: "He has not used it for forty years, but he has oiled it every winter.", tipp: "Look at what Grandad says about the spanner." }
        ] },
      { art: "luecke", id: "notizen", tag: "Notes", titel: "Notes about the family", lead: "Complete the notes with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Grandad's first name: ", { g: "Pita" }],
          ["Anahera's father: ", { g: "Mikaere" }],
          ["Grandad lived in a town for ", { g: "two" }, " years when he was young."],
          ["Anahera was ", { g: "six" }, " when Grandad first took her up the ladder at harvest time."]
        ], extra: ["Huia", "forty"] }
    ] },
    { kurz: "Think", ober: "Read between the lines", titel: "What does the text really tell you?", teile: [
      { art: "mc", id: "schluss", tag: "Thinking", titel: "Read between the lines", lead: "The answer is not always in one sentence. <span class=\"de\">Manchmal musst du aus dem Text schließen.</span>",
        fragen: [
          { q: "Grandad does not slam the door. It \"closed very softly, which was somehow worse\". What does this show?", o: ["He is deeply hurt, not just angry.", "He is tired and wants to sleep.", "He does not want to wake Nana Huia.", "He is already planning to say sorry."], a: 0,
            e: "A loud, angry noise would be easier to understand. The soft door shows that his feelings go deeper: he is hurt and sad." },
          { q: "After Grandad's words, Dad \"let out a long breath\" (l. 49). What does this show?", o: ["He is relieved that the argument is over.", "He is tired after the long morning.", "He is annoyed that Grandad took so long.", "He does not like the new plan."], a: 0,
            e: "People let out a long breath when a difficult moment is over. Dad was worried about the argument, and now he sees that Grandad accepts Anahera's plan." },
          { q: "At the end Grandad \"pretends not to look\" when Anahera takes out the spanner. What does this show?", o: ["He is glad and proud, but he does not want to show it.", "He is still angry about her decision.", "He wants the spanner back.", "He has lost interest in the spanner."], a: 0,
            e: "Grandad does not talk about his feelings. He is glad that Anahera uses his spanner, but he hides it." }
        ] },
      { art: "offen", id: "erklaeren", tag: "Your words", titel: "Explain it", lead: "Answer in English. One or two sentences are enough. <span class=\"de\">Schreibe mit eigenen Worten – nicht abschreiben.</span>",
        fragen: [{ q: "Why does Grandad change his mind in the end? Give two reasons from the text.", m: "Grandad sees that Anahera's plan can help the farm, because solar panels make the electricity cheaper. He also remembers that he left the farm when he was young, and he came home.", k: ["solar|panel|electric|power|bill|cheaper|roof|help|farm", "young|left|town|himself|remember|past|came home|spanner|two years"], min: 2 }],
        tipp: "Think about Dad's idea and about what Nana Huia tells Anahera. Start like this: First, … Second, …" },
      { art: "offen", id: "spanner", tag: "Two meanings", titel: "What does the spanner mean?", lead: "Grandad gives Anahera the spanner and says: \"It has waited long enough.\" At first it is just a tool. <b>Decide</b>: What does it also mean for Grandad? Give <b>one piece of evidence</b> from ll. 38–50.",
        fragen: [{ q: "What does the spanner mean for Grandad? Explain with evidence from the text.", m: "I think the spanner shows that Grandad has never forgotten the years in the town. He has oiled it every winter, so it was important to him. By giving it to Anahera he shows that she may go her own way, too.", k: ["remember|forgotten|forget|permission|allow|may go|own way|accept|blessing|trust|proud|dream|past|young|wish|memory|sorry", "oiled|oil|forty|winter|fitted|fit|exactly|kept|keep|waited|scratched|letter|handle|always"], min: 2 }],
        tipp: "There is no single right answer, but your idea needs proof. Start like this: I think the spanner shows … because …" },
      { art: "offen", id: "meinung", m7: true, tag: "Your opinion", titel: "Was Grandad right?", lead: "Grandad hoped that Anahera would take over the farm. Give your opinion with <b>two reasons</b>.",
        fragen: [{ q: "Is it fair to hope that a child will take over the family business? Why (not)?", m: "I think it is understandable, because the family has worked on the farm for generations. However, it is not fair to force a child, because everybody should choose their own job. Anahera has to follow her own dream.", k: ["think|opinion|fair|understand", "because|reason|also|however|first|second"], min: 2 }],
        tipp: "Use: I think … because … Also, … Think about Grandad, Dad and Anahera." },
      { art: "offen", id: "eigene-saetze", m7: true, tag: "Your life", titel: "Your plans", lead: "Write two sentences in English about your own plans. Use <b>going to</b>. <span class=\"de\">Zum Beispiel: After school I am going to … , and my parents are going to …</span>",
        fragen: [{ q: "What are you going to do after school? What is somebody in your family going to do? Write two sentences.", m: "After school I am going to start an apprenticeship. My brother is going to finish his exams next year.", k: ["going to", "am|is|are"], min: 2 }],
        tipp: "Think of one plan for you and one plan for a person in your family. Start with: After school I am going to …" },
      { art: "offen", id: "deutsch", m7: true, tag: "In German", titel: "Tell it in German", lead: "Your cousin does not speak English. Tell her in <b>German</b> (2 or 3 sentences): What is the problem in the story, and how does it end?",
        fragen: [{ q: "Fasse die Geschichte auf Deutsch zusammen.", m: "Anahera möchte Elektrikerin werden, aber ihr Großvater hatte gehofft, dass sie den Apfelhof übernimmt. Am Ende finden sie eine Lösung: Sie baut Solaranlagen für den Hof, arbeitet in der Woche in der Stadt und hilft am Wochenende auf dem Hof.", k: ["Elektriker|Elektrikerin|Ausbildung|Beruf", "Großvater|Opa|Hof|Apfelhof|übernehmen|Familie", "Lösung|Solar|Wochenende|Woche|hilft"], min: 3 }],
        tipp: "Nenne das Wichtigste: Wer? Was ist der Streit? Wie geht es aus? Übersetze nicht Satz für Satz." }
    ] },
    { kurz: "Language", ober: "Grammar in the text", titel: "The grammar of Unit 4 – in a real text", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>The story uses three things from Unit 4:</p><ul><li><b>going to</b> (<i>am / is / are + going to + verb</i>) – plans and intentions: I <u>am going to</u> be an electrician. He <u>is going to</u> teach me.</li><li><b>simple past</b> – what happened: Nana <u>told</u> me about Grandad. He <u>left</u> the farm and <u>repaired</u> machines.</li><li><b>passive</b> (<i>am / is / are / was / were + past participle</i>) – the action is important, not the person. The object of the active sentence becomes the subject. With <b>by</b> you say who did it: Grandad built the shed. → The shed <u>was built</u> <b>by</b> Grandad. We use the old shed every day. → The old shed <u>is used</u> every day. The present passive uses <i>is / are</i>, the past passive uses <i>was / were</i>.</li></ul>" },
      { art: "sort", id: "saetze", tag: "Sort", titel: "Which form is it?", lead: "Put the sentences into the right box.",
        buckets: ["going to (plan)", "Simple past (what happened)", "Passive"],
        items: [{ t: "One day I am going to build solar panels.", b: 0 }, { t: "Who is going to look after the orchard?", b: 0 }, { t: "Grandad is going to teach me about the old trees.", b: 0 },
                { t: "Grandad walked out without a word.", b: 1 }, { t: "My father took me to the shed.", b: 1 }, { t: "Nana put her hand on my arm.", b: 1 },
                { t: "The first trees were planted a long time ago.", b: 2 }, { t: "The apples are picked by hand.", b: 2 }, { t: "The cover of the fuse box is held shut by two bolts.", b: 2 }] },
      { art: "markieren", id: "pass-satz", tag: "Mark", titel: "Find the passive", finde: "the passive form", toleranz: 0,
        satz: "The first trees [[were planted]] by Grandad's father.",
        e: "were planted is were + past participle. It is the passive: the trees are the important thing, and by Grandad's father says who did it." },
      { art: "markieren", id: "gt-satz", tag: "Mark", titel: "Find the plan", finde: "the going to form", toleranz: 0,
        satz: "During the week I [[am going to work]] for an electrician in town.",
        e: "am going to work is am + going to + verb. It says what Anahera has planned." },
      { art: "luecke", id: "grammatik-luecke", tag: "Gap text", titel: "going to, simple past and passive", lead: "Complete the sentences. Two forms are left over. <span class=\"de\">Achtung: Das Passiv braucht is / are oder was / were + Partizip.</span>",
        absaetze: [
          ["After school I ", { g: "am going to" }, " start an apprenticeship."],
          ["Grandad ", { g: "worked" }, " in a town for two years."],
          ["The spanner ", { g: "was brought" }, " home from the town."],
          ["Our apples ", { g: "are sold" }, " in shops all over the region."]
        ], extra: ["are going to", "sells"] },
      { art: "offen", id: "passiv-bilden", tag: "Make the passive", titel: "Active to passive", lead: "Change each sentence into the passive. Keep <b>by</b> where it is useful. <span class=\"de\">Aus dem Aktivsatz wird ein Passivsatz: Das Objekt wird zum Subjekt.</span>",
        fragen: [
          { q: "Grandad oiled the spanner every winter. → The spanner …", m: "The spanner was oiled by Grandad every winter.", k: ["was oiled", "by grandad|by Grandad"], min: 2 },
          { q: "Workers sort the apples in the packing room. → The apples …", m: "The apples are sorted in the packing room.", k: ["are sorted", "packing room"], min: 2 },
          { q: "Grandad teaches the young pickers. → The young pickers …", m: "The young pickers are taught by Grandad.", k: ["are taught", "by grandad|by Grandad"], min: 2 }
        ], tipp: "Present: is / are + past participle. Past: was / were + past participle. Who did it? Use by." },
      { art: "offen", id: "passiv-frei", m7: true, tag: "Plus", titel: "Your own passive sentences", lead: "Think of a product that is made in your region (bread, cheese, cars, toys …). Write <b>two passive sentences</b> about it – one in the simple present and one in the simple past.",
        fragen: [{ q: "Write two passive sentences: one in the simple present, one in the simple past.", m: "Bread is baked in our village every morning. The old bakery was built by my great-grandfather.", k: ["is|are", "was|were", "baked|made|built|sold|produced|delivered|grown|planted|picked|sorted"], min: 3 }],
        tipp: "Present: The bread is baked … Past: The bakery was built … You can add by + the person." }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The story in three sentences", lead: "Complete the summary. <span class=\"de\">Eine Zusammenfassung benutzt eigene Worte – sie steht so nicht im Text.</span>",
        absaetze: [
          ["Anahera tells her family that she is going to be an ", { g: "electrician" }, "."],
          ["Nana says that Grandad ", { g: "left" }, " the farm when he was young, too."],
          ["In the end Grandad gives Anahera his old ", { g: "spanner" }, " and agrees to the plan."]
        ], extra: ["cries", "ladder"] }
    ] }
  ],
  weiter: { text: "Well done! You can follow a longer story, find details and say where they are, read between the lines and explain an object with evidence. Keep reading and keep asking: How do different generations see the future – and how can they listen to each other?" }
});
