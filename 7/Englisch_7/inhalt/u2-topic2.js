/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Topic 2: Let's meet! (Kürzel B14)
   (sich verabreden: ein Telefonat lesen und die Stelle zu jeder Information finden, ein zweites Telefonat hören und Notizen
   zu Why/What/Who/When/Where machen, Hausarbeiten benennen und mit Häufigkeitsadverbien darüber sprechen, present perfect
   Fragen und Kurzantworten, present perfect oder simple past – und am Schluss selbst eine Verabredung führen)
   Buchprinzip (Topic 2, nur Aufbau, nichts übernommen): Telefondialog mit Zeilennummern → Informationen finden und die Zeile
   angeben; Hören eines zweiten Telefonats → Notizen zu W-Fragen; Hausarbeiten: Verben und Wendungen verbinden; mit
   Häufigkeitsadverbien über Hausarbeiten sprechen; Language detectives (present perfect Fragen, Kurzantworten); present
   perfect oder simple past; Task: Verabredung als Rollenspiel – einladen, nach Erledigtem fragen, absagen mit Grund, neuer
   Vorschlag, Treffpunkt vor Uhrzeit. Besser: sofortige Rückmeldung, Hilfen in Stufen (R7 mit Satzanfängen und Tipps, M7
   weniger), Förder-Links an den Stellen, an denen Kinder hängen bleiben, und das Rollenspiel als Gesprächs-Kette, in der die
   KI jeden Beitrag prüft.
   Differenzierung: Hören – R7 wählt aus Antworten aus, M7 schreibt Notizen selbst (Diff-corner-Prinzip); Lesen – andere
   Fassung des Textes (R7 179 Wörter, M7 306 Wörter) mit eigenen Zeilenangaben; Rollenspiel – R7 mit Satzanfängen und
   Tipps, M7 ohne Satzanfänge; Plus für M7 (m7): zwei offene Schreibaufgaben in der Station „Language“.
   LehrplanPLUS E7 1.1 Leseverstehen (Telefondialog, Einzelheiten entnehmen und belegen), E7 1.2 Hörverstehen (Telefonat,
   Notizen), E7 1.3 Sprechen (sich verabreden, einladen, absagen), E7 3 (present perfect: Fragen und Kurzantworten,
   Abgrenzung zum simple past; Häufigkeitsadverbien), E7 5 (Alltag: Verabredungen und Hausarbeiten).
   Texte: „Let's go ice-skating!“ (texte/u2/u2-t2-call-r.js und -m.js) – Ewan und Morag (13, Inverness), Hund Tattie;
   „Bowling for Ross's birthday“ (texte/u2/u2-t2-listen-r.js und -m.js) – Ross, Ailsa (M7 zusätzlich Ailsas Mutter), Eilidh,
   Fraser, Bowlingbahn „Blue Pin“. Alle Personen und Orte außer Inverness sind erfunden.
   Förder-Links: Hausarbeiten → unit2/extra/jobs-around-the-house.html, Hören → u2_x7.html,
   Fragen → unit2/extra/have-has-questions.html, present perfect oder simple past → unit2/extra/signal-words.html.
   Wörter der Unit bis Topic 2 (ever, just, already, yet, never, to find out, line, another, left, over, See you later,
   to book, done, been, tidied …) kommen bewusst vor.
   BILDER:
   1. Station „Warm-up“ (Sprechanlass/Vorentlastung): Ewan sitzt in seinem Zimmer mit dem Telefon am Ohr, im Hintergrund ein
      Poster einer Eisbahn; auf dem Bett liegen ein Paar Schlittschuhe.
   2. Station „Jobs at home“ (Wortschatz Hausarbeiten): Morag in einem unordentlichen Zimmer, ein kleiner Hund vor dem leeren
      Napf schaut sie an, ein Besen lehnt an der Wand.
   3. Station „Task“ (Sprechanlass): zwei Jugendliche stehen vor einem Minigolf-Eingang mit einer großen Uhr, einer deutet auf
      die Uhr. */
D7Kit.seite({
  id: "u2-topic2",
  titel: "Topic 2: Let's meet!",
  einleitung: "Two friends in Scotland plan a Saturday – but first there are jobs to do at home. You read a <b>phone call</b>, you listen to another one, you talk about <b>jobs around the house</b>, and then you arrange to meet a friend yourself. Du übst, dich zu verabreden: einladen, nach Erledigtem fragen, absagen, einen neuen Vorschlag machen.",
  zeit: "etwa 45 Minuten",
  ziele: ["📞 I understand a phone call and find the line for each piece of information.", "🎧 I catch Why, What, Who, When and Where when I listen.", "🧹 I talk about jobs at home and say how often I do them.", "❓ I ask and answer: Have you … yet? Have you ever …?", "🤝 I arrange to meet a friend and make a new plan."],
  thema: "Unit 2 Fun in Wales and Scotland, Topic 2: sich verabreden (Telefonat, Hausarbeiten, present perfect Fragen)",
  quiz: { profi: "Phone pro" },
  glossar: {
    rink: ["ice rink", "Eisbahn: Hier läuft man Schlittschuh (ice-skating)."],
    skates: ["skates", "Skates sind Schlittschuhe. Man bucht oder leiht sie an der Eisbahn."],
    fall: ["to fall over", "hinfallen, umfallen: Beim Eislaufen fällt man am Anfang oft hin."],
    queue: ["queue", "Warteschlange: Viele Leute stehen hintereinander und warten."],
    alley: ["bowling alley", "Bowlingbahn: Dort rollt man schwere Kugeln auf Kegel."],
    training: ["training", "Beim Training übt man einen Sport, zum Beispiel beim Schwimmtraining im Sportverein."],
    lines: ["line", "Line heißt Zeile. „l. 12“ bedeutet Zeile 12, „ll. 12–14“ bedeutet Zeile 12 bis 14."],
    freq: ["adverbs of frequency", "Häufigkeitsadverbien: Sie sagen, wie oft etwas passiert: always, usually, often, sometimes, never."],
    wfragen: ["W-questions", "W-Fragen: Why? What? Who? When? Where? Beim Hören suchst du genau diese Informationen."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a phone call</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-t2-ewan.jpg\" width=\"1280\" height=\"853\" alt=\"A boy sits on his bed with a phone at his ear; ice skates lie on the bed, an ice rink poster on the wall.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is he calling? What do you think they are planning? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">It is Saturday morning in <b>Inverness</b>, a city in the north of Scotland. Ewan has an idea for the afternoon – and he phones his friend Morag. <span class=\"de\">Ewan hat eine Idee für den Nachmittag und ruft seine Freundin Morag an. Die beiden und der Hund sind erfunden.</span></p><p>What do you do when a friend asks you to go out? What must you do first? <span class=\"de\">Überlege kurz für dich: Was musst du zuhause erledigen, bevor du losgehst?</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du in den Telefonaten.</span>",
        paare: [["ice rink", "Eisbahn"], ["skates", "Schlittschuhe"], ["to fall over", "hinfallen"], ["to book", "buchen, reservieren"], ["bowling alley", "Bowlingbahn"], ["training", "Training"]] },
      { art: "merke", kopf: "PHONE CALL TIP", html: "<p>In a phone call you cannot see the other person. So you listen and read for <b>information</b>:</p><ul><li><b>Who</b> calls? <b>What</b> do they want to do?</li><li><b>When</b> and <b>where</b> do they meet?</li><li><b>Why</b> can't somebody come?</li></ul><p>To show <b>where</b> you found something, you give the <button class=\"term\" data-t=\"lines\">line</button> number: <i>(l. 12)</i>.</p>" }
    ] },
    { kurz: "Phone call", ober: "Reading", titel: "Ewan phones Morag", teile: [
      { art: "text", html: "<p class=\"lead\">Read the phone call. Don't stop at words you don't know. <span class=\"de\">Lies das Telefonat einmal ganz. Bleib nicht an unbekannten Wörtern hängen.</span></p>" },
      { art: "lesetext", lesetext: { R: "u2-t2-call-r", M: "u2-t2-call-m" } },
      { art: "mc", id: "global", tag: "The main idea", titel: "What is it about?", lead: "Tick the correct answer. <span class=\"de\">Worum geht es im Telefonat?</span>",
        fragen: [
          { q: "What is the phone call about?", o: ["Two friends make a plan for the afternoon.", "Two friends talk about their school.", "Two friends plan a holiday in Wales.", "Two friends talk about a film."], a: 0,
            e: "Ewan lädt Morag ein, und sie sprechen ab, was vorher noch zu tun ist, wann und wo sie sich treffen." },
          { q: "Which sentence is true at the end of the call?", o: ["Ewan and Morag have agreed on a time and a place.", "Ewan and Morag have not decided anything yet.", "Morag says no and stays at home.", "Ewan has changed his mind."], a: 0,
            e: "Am Ende stehen Uhrzeit und Treffpunkt fest. Morag sagt also nicht ab, sondern kommt später." }
        ] },
      { art: "text", html: "<p class=\"lead\">Now find the information. Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht. Das Telefonat bleibt über den Fragen stehen.</span></p>" },
      { art: "beleg", id: "zeilen", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Dann kannst du die Stelle auch angeben: (ll. 12–13).</span>", lesetext: "u2-t2-call-r",
        hilfen: ["Lies zuerst die Frage und suche das passende Fragewort im Telefonat: Why? Where? Has she …?", "Die Antwort steht oft in der Zeile nach der Frage des anderen Sprechers.", "Zeile für Zeile: Wer spricht? Was sagt er oder sie? Passt das zur Frage?"],
        fragen: [
          { q: "Why can't Morag come now?", zeilen: [12, 13], e: "Ihre Mutter sagt, dass sie zuerst ihr Zimmer aufräumen muss.", tipp: "Suche Morags Antwort mit „But I can't come now“." },
          { q: "Which job for her pet has Morag not done yet?", zeilen: [15, 16], e: "Sie hat ihren Hund Tattie noch nicht gefüttert.", tipp: "Suche den Namen des Hundes." },
          { q: "Where do the friends meet?", zeilen: [21, 22], e: "Sie treffen sich an der großen Uhr im Einkaufszentrum, neben der Eisbahn.", tipp: "Suche die Antwort auf „Where shall we meet?“." }
        ] },
      { art: "beleg", id: "zeilen", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Dann kannst du die Stelle auch angeben: (ll. 16–18).</span>", lesetext: "u2-t2-call-m",
        fragen: [
          { q: "Why can't Morag leave the house yet?", zeilen: [16, 18], e: "Ihre Mutter erlaubt es erst, wenn das Zimmer aufgeräumt ist.", tipp: "Suche Morags Antwort mit „The problem is …“." },
          { q: "What has Morag not done for her dog yet?", zeilen: [20, 22], e: "Sie hat Tattie noch nicht gefüttert; die Hündin schaut schon seit dem Frühstück auf den leeren Napf.", tipp: "Suche den Namen des Hundes." },
          { q: "Where exactly do the friends meet?", zeilen: [30, 31], e: "Sie treffen sich an der großen Uhr im Einkaufszentrum, direkt neben der Eisbahn.", tipp: "Suche die Antwort auf „Where shall we meet?“." }
        ] }
    ] },
    { kurz: "Jobs", ober: "Words", titel: "Jobs around the house", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>jobs at home</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-t2-jobs.jpg\" width=\"1280\" height=\"853\" alt=\"A girl in a messy room, a small dog at an empty bowl, a broom against the wall.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What jobs can you see? Who does these jobs at your home? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Morag must <b>tidy her room</b> and <b>feed the dog</b>. These are jobs around the house. Which verb goes with which phrase? <span class=\"de\">Hausarbeiten: Manche Verben gehören fest zu einer Wendung – man sagt „make the bed“, nicht „do the bed“.</span></p>" },
      { art: "paare", id: "hausarbeit", tag: "Match", titel: "Verb + phrase", lead: "Find the pairs. <span class=\"de\">Welches Verb passt zu welcher Wendung?</span>",
        foerder: { href: "unit2/extra/jobs-around-the-house.html", text: "Extra: Jobs around the house" },
        paare: [["to feed", "the dog"], ["to tidy", "my room"], ["to make", "my bed"], ["to do", "the washing-up"], ["to take out", "the rubbish"], ["to set", "the table"], ["to clean", "the windows"]] },
      { art: "merke", kopf: "HOW OFTEN?", html: "<p>With <button class=\"term\" data-t=\"freq\">adverbs of frequency</button> you say how often you do something:</p><p><b>always</b> (100 %) · <b>usually</b> · <b>often</b> · <b>sometimes</b> · <b>never</b> (0 %)</p><ul><li>Before the verb: <i>She <u>usually</u> sets the table.</i></li><li>After <b>am / is / are</b>: <i>He <u>is</u> never late.</i></li></ul>" },
      { art: "material", daten: { typ: "tabelle", titel: "Morag's job chart", kopf: ["Job", "Days a week"], reihen: [["feed the dog", "7"], ["make the bed", "5"], ["tidy the room", "2"], ["take out the rubbish", "0"]] } },
      { art: "luecke", id: "haeufigkeit", tag: "Gap text", titel: "How often does Morag do it?", lead: "Look at the job chart and complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit2/extra/jobs-around-the-house.html", text: "Extra: Jobs around the house" },
        hilfen: ["Schau in die Tabelle: Wie viele Tage in der Woche macht Morag diese Arbeit? Sieben Tage ist das Gegenteil von null Tagen.", "7 Tage = jeden Tag, 5 Tage = meistens, 2 Tage = manchmal, 0 Tage = nie.", "7 = always · 5 = usually · 2 = sometimes · 0 = never"],
        absaetze: [
          ["Morag ", { g: "always" }, " feeds Tattie."],
          ["She ", { g: "usually" }, " makes her bed."],
          ["She ", { g: "sometimes" }, " tidies her room."],
          ["She ", { g: "never" }, " takes out the rubbish."]
        ], extra: ["ever", "just"] }
    ] },
    { kurz: "Listening", ober: "Second phone call", titel: "Bowling for Ross's birthday", teile: [
      { art: "text", html: "<p class=\"lead\">Ross phones his friend Ailsa. <b>Read the questions first, then listen.</b> <span class=\"de\">Erst die Fragen lesen, dann hören. Beim ersten Hören willst du das Thema, beim zweiten die Einzelheiten.</span></p><p>Listen for the <button class=\"term\" data-t=\"wfragen\">W-questions</button>: <b>Why? What? Who? When? Where?</b></p>" },
      { art: "mc", id: "hoer-gl", nur: "R", foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" }, titel: "Before you listen", lead: "Read the questions first. Then listen to the phone call below and tick the answers. <span class=\"de\">Erst die Fragen lesen, dann hören – beim ersten Hören nur das Wichtigste.</span>",
        fragen: [
          { q: "How does Ailsa feel about Ross's idea?", o: ["She is happy about it.", "She thinks it is boring.", "She is angry with Ross.", "She does not know what to say."], a: 0,
            e: "Ailsa sagt „Yes, please!“ und freut sich auch über die Pizza." },
          { q: "Why can't Ailsa come on Friday?", o: ["She has swimming training.", "She has to tidy her room.", "She is on holiday.", "She has a doctor's appointment."], a: 0,
            e: "Ailsa sagt: „I have swimming training on Friday.“" }
        ] },
      { art: "mc", id: "hoer-gl", nur: "M", foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" }, titel: "Before you listen", lead: "Read the questions first. Then listen to the phone call below and tick the answers. <span class=\"de\">Erst die Fragen lesen, dann hören – beim ersten Hören nur das Wichtigste.</span>",
        fragen: [
          { q: "Why does Friday not work for Ailsa?", o: ["Her swimming training finishes too late.", "She has to help in the kitchen.", "She is visiting her gran.", "She does not like Fridays."], a: 0,
            e: "Das Schwimmtraining ist erst um sechs Uhr zu Ende – zu spät für Ross' Vorschlag." },
          { q: "What does Ailsa's mum say?", o: ["Ailsa can go if she has finished her jobs.", "Ailsa must stay at home.", "Ailsa can go without any jobs.", "Ailsa has to ask her dad."], a: 0,
            e: "Ailsas Mutter erlaubt es, wenn sie vorher ihre Hausarbeiten erledigt hat." }
        ] },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: { R: "u2-t2-listen-r", M: "u2-t2-listen-m" },
        foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" },
        fragen: [
          { art: "formular", id: "notizen", nur: "R", titel: "Your notes", lead: "Listen again and choose the right answers. <span class=\"de\">Hör noch einmal zu und wähle für jede W-Frage die richtige Notiz.</span>",
            kopf: "Notes: the phone call",
            felder: [
              { label: "Why does Ross phone?", loesung: ["It's his birthday."], wahl: ["It's his birthday.", "He needs help with homework.", "He wants to say sorry."] },
              { label: "What do they do?", loesung: ["bowling and pizza"], wahl: ["bowling and pizza", "swimming and pizza", "bowling and a film"] },
              { label: "Who else comes?", loesung: ["Eilidh and Fraser"], wahl: ["Eilidh and Fraser", "Eilidh and Ewan", "Fraser and Morag"] },
              { label: "When?", loesung: ["Saturday, half past three"], wahl: ["Saturday, half past three", "Sunday, half past three", "Saturday, half past four"] },
              { label: "Where?", loesung: ["in front of the Blue Pin"], wahl: ["in front of the Blue Pin", "in front of the harbour", "in front of the pizza place"] }
            ] },
          { art: "formular", id: "notizen", nur: "M", titel: "Your notes", lead: "Listen again and write short notes. <span class=\"de\">Hör noch einmal zu und notiere zu jeder W-Frage ein bis vier Wörter.</span>",
            kopf: "Notes: the phone call",
            felder: [
              { label: "Why does Ross phone?", platz: "one or two words", loesung: ["birthday", "his birthday", "it's his birthday", "Ross's birthday", "a birthday", "birthday party", "his birthday party", "for his birthday", "because of his birthday", "birthday bowling", "it is his birthday", "his birthday on Sunday", "birthday on Sunday", "to invite her", "to invite Ailsa", "invitation", "birthday invitation", "to invite her to his birthday"] },
              { label: "What do they do?", platz: "two things", loesung: ["bowling and pizza", "bowling, pizza", "bowling and eating pizza", "bowling and then pizza", "bowling then pizza", "bowling and have pizza", "bowling + pizza", "bowling & pizza", "bowling and a pizza", "pizza and bowling", "go bowling and eat pizza", "go bowling and have pizza", "bowling and pizza after", "bowling and pizza afterwards", "go bowling, eat pizza", "bowling, then pizza", "bowling and then eat pizza", "play bowling and eat pizza"] },
              { label: "Who else comes?", platz: "two names", loesung: ["Eilidh and Fraser", "Fraser and Eilidh", "Eilidh, Fraser", "Fraser, Eilidh", "Eilidh + Fraser", "Eilidh & Fraser"] },
              { label: "When?", platz: "day and time", loesung: ["Saturday, half past three", "Saturday half past three", "Saturday at half past three", "Saturday 3.30", "Saturday, 3.30", "Saturday at 3.30", "Saturday 3:30", "Saturday, 3:30", "Saturday at 3:30", "Saturday 3.30 pm", "Saturday at 3.30 pm", "Saturday, 3.30 pm", "Saturday 15.30", "Saturday at 15.30", "Saturday, 15.30", "Saturday afternoon, half past three", "Saturday at three thirty", "Saturday three thirty", "on Saturday at half past three", "on Saturday, half past three", "on Saturday at 3.30", "on Saturday at 3:30", "Saturday at half past 3", "Saturday afternoon at half past three", "Saturday 3.30 p.m.", "Saturday at 3.30 p.m."] },
              { label: "Where?", platz: "name of the place", loesung: ["in front of the Blue Pin", "in front of the Blue Pin bowling alley", "in front of the bowling alley", "in front of the entrance", "Blue Pin", "the Blue Pin", "at the Blue Pin", "Blue Pin bowling alley", "the Blue Pin bowling alley", "at the Blue Pin bowling alley", "at the bowling alley", "the bowling alley", "in front of the entrance of the Blue Pin", "Blue Pin entrance", "the Blue Pin entrance", "in front of the Blue Pin entrance", "at the entrance", "entrance of the Blue Pin", "bowling alley Blue Pin", "Blue Pin, next to the harbour", "at the Blue Pin, next to the harbour"] }
            ] }
        ] }
    ] },
    { kurz: "Language", ober: "Grammar in the calls", titel: "Questions, short answers – and the past", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>Both phone calls use <b>present perfect questions</b>:</p><ul><li><b>Have</b> I / you / we / they + 3rd form? → <i>Have you finished?</i></li><li><b>Has</b> he / she / it + 3rd form? → <i>Has Grandpa arrived?</i></li><li>Short answers: <i>Yes, I <u>have</u>. · No, she <u>hasn't</u>.</i> (not: <s>Yes, I did</s>)</li><li>Signal words: <b>ever, yet, already, just</b></li></ul><p>But: if you say <b>when</b> it happened (<i>yesterday, last week, two days ago, on Saturday</i>), you use the <b>simple past</b>: <i>Grandpa arrived two days ago.</i></p>" },
      { art: "luecke", id: "fragen-luecke", tag: "Gap text", titel: "Questions and short answers", lead: "Complete the questions and answers. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit2/extra/have-has-questions.html", text: "Extra: Fragen mit have/has" },
        hilfen: ["Schau auf die Person: I/you/we/they → have, he/she/it → has. Die Kurzantwort wiederholt dasselbe Hilfsverb.", "Fragen nach „schon einmal“ enthalten ever, Fragen nach „schon“ am Satzende enthalten yet.", "Satz 1: Have you ever … – Satz 2: Has Morag … yet?"],
        absaetze: [
          ["", { g: "Have" }, " you ", { g: "ever" }, " been to Inverness? – No, I ", { g: "haven't" }, "."],
          ["", { g: "Has" }, " Morag fed Tattie ", { g: "yet" }, "? – No, she ", { g: "hasn't" }, "."]
        ], extra: ["did", "ago"] },
      { art: "mc", id: "pp-mc", tag: "Choose", titel: "Short answers and forms", lead: "Tick the correct answer. <span class=\"de\">Achte auf das Hilfsverb und die 3. Form.</span>",
        fragen: [
          { q: "Morag's mum asks: \"Has Ewan booked the skates?\" He has. What does Morag say?", o: ["Yes, he has.", "Yes, he is.", "Yes, he does.", "Yes, he have."], a: 0,
            e: "Auf eine Frage mit Has antwortest du mit has: Yes, he has." },
          { q: "Which sentence is correct?", o: ["Ewan has been to the rink twice.", "Ewan has went to the rink twice.", "Ewan have been to the rink twice.", "Ewan has be to the rink twice."], a: 0,
            e: "Nach has steht die 3. Form von be: been. Mit he/she/it heißt es has." }
        ] },
      { art: "sort", id: "pp-sp", tag: "Sort", titel: "Present perfect or simple past?", lead: "Put the sentences into the right box. <span class=\"de\">Wenn gesagt wird, wann etwas war, steht das simple past.</span>",
        foerder: { href: "unit2/extra/signal-words.html", text: "Extra: present perfect oder simple past?" },
        buckets: ["Present perfect", "Simple past"],
        items: [{ t: "Morag has fed the dog.", b: 0 }, { t: "I haven't tidied my room yet.", b: 0 }, { t: "Have you ever been bowling?", b: 0 }, { t: "Ewan has already booked the skates.", b: 0 },
                { t: "Morag fed the dog at nine o'clock.", b: 1 }, { t: "I tidied my room two days ago.", b: 1 }, { t: "Did you go bowling last Saturday?", b: 1 }, { t: "Ewan booked the skates yesterday.", b: 1 }] },
      { art: "offen", id: "ever-fragen", m7: true, tag: "Your words", titel: "Ask a new friend", lead: "Write two questions with <b>Have you ever …?</b> <span class=\"de\">Zum Beispiel über Reisen, Essen oder Sport.</span>",
        fragen: [{ q: "Write two questions for a new friend: Have you ever …?", m: "Have you ever been to Scotland? Have you ever played mini golf?", k: ["have you ever", "been|played|eaten|tried|seen|visited|met|ridden|climbed|swum|flown|done|gone|heard|read|won"], min: 2 }],
        tipp: "Start like this: Have you ever been to …? / Have you ever eaten …? Use the 3rd form: been, eaten, played …" },
      { art: "offen", id: "pp-sp-schreiben", m7: true, tag: "Your words", titel: "Then and now", lead: "Write two sentences: one with the <b>present perfect</b> (already, yet or just) and one with the <b>simple past</b> and a time (yesterday, last …, … ago). <span class=\"de\">Es geht um dich oder um eine Person, die du kennst.</span>",
        fragen: [{ q: "Write one present perfect sentence and one simple past sentence with a time.", m: "I have already done my homework. Yesterday I went to the shops.", k: ["have|'ve|has", "already|yet|just|never|ever", "yesterday|last|ago|on monday|on saturday|on sunday|this morning"], min: 3 }],
        tipp: "Present perfect: I have already … / I haven't … yet. Simple past with a time: Yesterday I … / Two days ago we …" }
    ] },
    { kurz: "Task", ober: "Let's meet!", titel: "Arrange to meet Iona", teile: [
      { art: "text", html: "<p class=\"lead\">Now it is <b>your</b> turn. You want to meet your friend <b>Iona</b> at the weekend. But she still has jobs to do. <span class=\"de\">Du lädst Iona ein. Sie hat noch etwas zu erledigen und schlägt eine andere Zeit vor. Du schreibst deine Beiträge, die KI prüft jeden einzelnen. Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist. Iona ist erfunden.</span></p>" },
      { art: "merke", kopf: "USEFUL PHRASES", html: "<p><b>Invite</b></p><div class=\"phrasen\"><span>Would you like to …?</span><span>Do you want to …?</span><span>How about …?</span></div><p><b>Ask what is done</b></p><div class=\"phrasen\"><span>Have you finished your jobs?</span><span>Have you … yet?</span></div><p><b>Say no / change the plan</b></p><div class=\"phrasen\"><span>I'm afraid I can't …</span><span>Could we meet later?</span><span>That's OK.</span></div><p><b>Meeting point and time – place first!</b></p><div class=\"phrasen\"><span>Let's meet in front of …</span><span>Let's meet at the … at two o'clock.</span></div>" },
      { art: "kette", id: "verabredung", nur: "R", tag: "Role play · AI check", titel: "Invite Iona to play mini golf", lead: "Write your part. <span class=\"de\">Der Satzanfang und die Tipps helfen dir.</span>",
        thema: "Eine Verabredung am Telefon (Englisch 7, Mittelschule): Das Kind lädt eine Freundin zum Minigolf ein, sie hat noch Hausarbeiten und schlägt den Nachmittag vor, Treffpunkt und Uhrzeit",
        rollen: { a: { name: "Iona", ic: "👧" }, du: { name: "You" } },
        schritte: [
          { an: "a", sprache: "en", auftrag: "Invite Iona to play mini golf on Saturday. <span class=\"de\">Lade Iona zum Minigolf am Samstag ein.</span>", start: "Would you like to",
            kriterien: ["lädt Iona ein", "zum Minigolf", "am Samstag"],
            m: "Hi Iona! Would you like to play mini golf with me on Saturday?", k: ["would you like|do you want|how about|let's|why don't|come", "mini|golf", "saturday"],
            tipps: ["Drei Angaben: die <b>Einladung</b>, <b>was</b> ihr macht und <b>wann</b>.", "Would you like to …? · How about …? · Saturday = Samstag"] },
          { von: "a", text: "Hi! Mini golf? That sounds great! But first: have you finished your jobs at home? I always have to do mine before I can go out." },
          { an: "a", sprache: "en", auftrag: "Answer Iona. Say one job you have already done and one you have not done yet. <span class=\"de\">Eine Hausarbeit ist schon erledigt, eine noch nicht.</span>", start: "I have already",
            kriterien: ["nennt eine Hausarbeit, die schon erledigt ist (have already …)", "nennt eine, die noch nicht erledigt ist (haven't … yet)"],
            m: "I have already tidied my room, but I haven't fed the cat yet.", k: ["have|'ve|has", "not|haven't|n't|yet"],
            tipps: ["Zwei Teile: <b>schon erledigt</b> – <b>noch nicht erledigt</b>.", "I have already … · I haven't … yet · tidy my room, feed the cat, do the washing-up"] },
          { von: "a", text: "Oh dear, I haven't finished mine. I still have to clean the kitchen and walk our dog. I can't come in the morning, I'm afraid. Could we meet in the afternoon instead?" },
          { an: "a", sprache: "en", auftrag: "Say that the afternoon is fine. Then ask Iona if she has already asked her mum. <span class=\"de\">Frage mit Have you … yet?</span>", start: "That's OK.",
            kriterien: ["sagt, dass der Nachmittag in Ordnung ist", "fragt, ob sie ihre Mutter schon gefragt hat (Have you … yet?)"],
            m: "That's OK, the afternoon is fine. Have you asked your mum yet?", k: ["ok|fine|no problem|good|great|sure|yes|alright", "have you", "mum|mother|mam|parents|dad"],
            tipps: ["Zwei Dinge: <b>zustimmen</b> – <b>fragen</b>, ob sie schon gefragt hat.", "That's OK. / No problem. · Have you asked your mum yet?"] },
          { von: "a", text: "Yes, I have. She says I can come if I'm quick. Where shall we meet?" },
          { an: "a", sprache: "en", auftrag: "Say where and when you will meet. <span class=\"de\">Zuerst der Ort, dann die Uhrzeit am Nachmittag.</span>", start: "Let's meet",
            kriterien: ["nennt einen Treffpunkt", "nennt eine Uhrzeit am Nachmittag"],
            m: "Let's meet in front of the mini golf entrance at two o'clock.", k: ["meet|let's|in front|outside|near|entrance|gate|at the|by the", "o'clock|two|three|half|quarter| pm|2|3"],
            tipps: ["Zwei Angaben: <b>wo</b> und <b>wann</b>. Der Ort kommt zuerst.", "in front of the … · at the … · at two o'clock · at half past two"] },
          { von: "a", text: "Great, I know the place. See you there on Saturday afternoon!" }
        ] },
      { art: "kette", id: "verabredung", nur: "M", tag: "Role play · AI check", titel: "Invite Iona to play mini golf", lead: "Write your part. <span class=\"de\">Wie im echten Telefonat: ohne Satzanfang, bei Bedarf mit einem Tipp.</span>",
        thema: "Eine Verabredung am Telefon (Englisch 7, Mittelschule): Das Kind lädt eine Freundin zum Minigolf ein, sie hat noch Hausarbeiten und schlägt den Nachmittag vor, Treffpunkt und Uhrzeit",
        rollen: { a: { name: "Iona", ic: "👧" }, du: { name: "You" } },
        schritte: [
          { an: "a", sprache: "en", auftrag: "Invite Iona to play mini golf on Saturday. <span class=\"de\">Lade Iona zum Minigolf am Samstag ein.</span>",
            kriterien: ["lädt Iona ein", "zum Minigolf", "am Samstag"],
            m: "Hi Iona! Would you like to play mini golf with me on Saturday?", k: ["would you like|do you want|how about|let's|why don't|come", "mini|golf", "saturday"],
            tipps: ["Drei Angaben: die <b>Einladung</b>, <b>was</b> ihr macht und <b>wann</b>."] },
          { von: "a", text: "Hi! Mini golf? That sounds great! But first: have you finished your jobs at home? I always have to do mine before I can go out." },
          { an: "a", sprache: "en", auftrag: "Answer Iona. Say one job you have already done and one you have not done yet.",
            kriterien: ["nennt eine Hausarbeit, die schon erledigt ist (have already …)", "nennt eine, die noch nicht erledigt ist (haven't … yet)"],
            m: "I have already tidied my room, but I haven't fed the cat yet.", k: ["have|'ve|has", "not|haven't|n't|yet"],
            tipps: ["Zwei Teile: <b>schon erledigt</b> – <b>noch nicht erledigt</b>."] },
          { von: "a", text: "Oh dear, I haven't finished mine. I still have to clean the kitchen and walk our dog. I can't come in the morning, I'm afraid. Could we meet in the afternoon instead?" },
          { an: "a", sprache: "en", auftrag: "React to Iona's plan. Then ask if she has already asked her mum.",
            kriterien: ["sagt, dass der Nachmittag in Ordnung ist", "fragt, ob sie ihre Mutter schon gefragt hat (Have you … yet?)"],
            m: "That's OK, the afternoon is fine. Have you asked your mum yet?", k: ["ok|fine|no problem|good|great|sure|yes|alright", "have you", "mum|mother|mam|parents|dad"],
            tipps: ["Zwei Dinge: <b>zustimmen</b> – <b>fragen</b>, ob sie schon gefragt hat."] },
          { von: "a", text: "Yes, I have. She says I can come if I'm quick. Where shall we meet?" },
          { an: "a", sprache: "en", auftrag: "Say where and when you will meet. Remember: place first, then time.",
            kriterien: ["nennt einen Treffpunkt", "nennt eine Uhrzeit am Nachmittag"],
            m: "Let's meet in front of the mini golf entrance at two o'clock.", k: ["meet|let's|in front|outside|near|entrance|gate|at the|by the", "o'clock|two|three|half|quarter| pm|2|3"],
            tipps: ["Zwei Angaben: <b>wo</b> und <b>wann</b>. Der Ort kommt zuerst."] },
          { von: "a", text: "Great, I know the place. See you there on Saturday afternoon!" }
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The two phone calls in four sentences", lead: "Complete the summary. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Ewan has already ", { g: "booked" }, " two pairs of skates."],
          ["Morag has to ", { g: "tidy" }, " her room and feed the ", { g: "dog" }, " first."],
          ["Ewan and Morag meet at the big ", { g: "clock" }, " at two o'clock."],
          ["Ross and Ailsa want to go ", { g: "bowling" }, " on Saturday afternoon."]
        ], extra: ["library", "tomorrow"] }
    ] }
  ],
  weiter: { text: "Well done! You can arrange to meet a friend, ask what is done, and say no with a reason. Next: more practice with questions and the past." }
});
