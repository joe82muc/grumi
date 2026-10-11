/* Englisch 9M · Unit 3 Discover South Africa · Listening: What happened? · M-Fassung
   (Gespräche und Telefonate verstehen: Thema erfassen, Zahlen, Uhrzeiten und Farben heraushören, Korrekturen erkennen,
   erschließen, wie sicher eine Zeugin ist, ein Protokoll und ein Formular ausfüllen, Sprache im Gespräch – past progressive
   mit while/when im Zusammenspiel mit dem simple past, present perfect mit for/since als Revision; Plus: Begründen,
   eigene Sätze, Sprachmittlung)
   LehrplanPLUS E9 1.2 Hörverstehen (Gespräche und Telefonate, Einzelheiten und Korrekturen entnehmen, Schlüsse ziehen,
   Notizen machen), E9 3 (Hörstrategien), E9 5 (Südafrika: Alltag junger Menschen).
   Texte: „At the police station“ (texte/u3/listening-police-statement-m.js) und „A call to a bike shop“
   (texte/u3/listening-bike-repair-call-m.js) – Straße, Bäckerei, Laden und Personen sind erfunden. */
D7Kit.seite({
  id: "u3-listening",
  titel: "Listening: What happened?",
  einleitung: "A girl gives a statement to a police officer about a small bike accident, and later the boy phones a bike shop. In both talks somebody corrects a detail, and the witness is not equally sure about everything. Catch the main idea, then the details, then decide what is certain and what is not.",
  zeit: "etwa 45 Minuten",
  ziele: ["🎧 I understand a statement and a phone call, even when somebody corrects a detail.", "🔎 I catch times, colours, directions, prices and days – and know which one is right.", "💭 I work out how sure a speaker is.", "🧩 I use the past progressive with while and when, and the simple past, in real talk."],
  quiz: { profi: "Listening pro" },
  glossar: {
    witness: ["witness", "Eine Zeugin oder ein Zeuge ist jemand, der gesehen hat, was passiert ist."],
    statement: ["statement", "Eine Aussage ist ein Bericht, den man der Polizei gibt."],
    listen1: ["first listening", "Beim ersten Hören willst du nur das Thema verstehen: Wer spricht? Worüber? Wie fühlt sich die Sprecherin?"],
    listen2: ["second listening", "Beim zweiten Hören suchst du gezielt die Einzelheiten und achtest auf Korrekturen: Welche Angabe gilt am Ende?"],
    certain: ["certain", "Wenn man sich sicher ist, sagt man zum Beispiel: I'm sure. Wenn nicht: I think …, I can't say for certain."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture. Why do you think the young woman is there? What does the police officer need to know?</p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"../../9R/Englisch/images/u3-police-station.jpg\" alt=\"A young woman describes something to a police officer at the front desk of a police station; a bicycle helmet lies on the counter.\" style=\"width:100%;border-radius:14px\"></figure><p>What would you ask a witness? Think of two questions.</p>" },
      { art: "text", html: "<p class=\"lead\">On a street in a small town, a boy on a bike has a little accident. Lerato saw it. She is a <button class=\"term\" data-t=\"witness\">witness</button>, so she goes to the police station and gives a <button class=\"term\" data-t=\"statement\">statement</button>. A few days later the boy phones a bike shop.</p><p>The street, the bakery, the shop and the people are invented.</p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs.",
        paare: [["nervous", "nervös"], ["stripe", "Streifen"], ["number plate", "Nummernschild"], ["bent", "verbogen"], ["cracked", "angebrochen, gerissen"], ["straighten", "gerade biegen"], ["certain", "sicher"], ["shoulder", "Schulter"]] },
      { art: "merke", kopf: "LISTENING TIP", html: "<ol><li><b>Read the tasks first.</b> Then you know what to listen for.</li><li><b><button class=\"term\" data-t=\"listen1\">First listening:</button></b> topic, people, mood.</li><li><b><button class=\"term\" data-t=\"listen2\">Second listening:</button></b> details – and watch out for <b>corrections</b>: “No, sorry …”, “I mean …”, “Oh, wait …”. Only the <b>last</b> answer counts.</li></ol><p>Listen for <b><button class=\"term\" data-t=\"certain\">how sure</button></b> a speaker is: “I'm sure …” or “I think …, but I can't say for certain”. Use “slower” if it is too fast.</p>" }
    ] },
    { kurz: "Main idea", ober: "First listening", titel: "What is it about?", teile: [
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: "u3-listen-accident-m", fragen: [
        { art: "mc", id: "global", titel: "The main idea", lead: "Read the questions. Then listen once and tick the correct answer.",
          fragen: [
            { q: "What does Officer Naidoo want from Lerato?", o: ["Only what she saw, not what she thinks.", "Her opinion about who is guilty.", "A drawing of the road.", "The name of the driver's mother."], a: 0,
              e: "At the start he says he wants to hear what she saw, not what she thinks happened." },
            { q: "How does Lerato feel at the beginning?", o: ["A little nervous, but ready to help.", "Angry with Kagiso.", "Very relaxed and bored.", "Afraid of the officer."], a: 0,
              e: "She says she is a bit nervous, to be honest, but that she will try." }
          ] }
      ] }
    ] },
    { kurz: "Details", ober: "Second listening", titel: "Catch the details", teile: [
      { art: "hoertext", id: "hoer1b", tag: "🎧 Listening 1 – again", hoertext: "u3-listen-accident-m", fragen: [
        { art: "tf", id: "richtigfalsch", titel: "True or false?", lead: "Listen again for the details. Watch out for corrections.",
          aussagen: [
            ["Lerato first says “twenty past four” and then changes the time.", true],
            ["The accident happened on a Wednesday.", false],
            ["The van was turning to the right.", false],
            ["Lerato remembers the whole number plate of the van.", false],
            ["The van driver was looking over his shoulder when Kagiso came down the hill.", true],
            ["Kagiso's mother arrived about an hour after the accident.", false]
          ] },
        { art: "formular", id: "protokoll", titel: "Police report", lead: "Complete the report with the information from the statement. Only the final information counts.",
          karte: "<p>Fill in the report with what Lerato says.</p>",
          kopf: "Protea Road – Witness report",
          felder: [
            { label: "Day", loesung: ["Tuesday"], wahl: ["Monday", "Tuesday", "Wednesday"] },
            { label: "Time", loesung: ["4.15", "4:15", "16.15", "16:15", "4.15 pm", "4:15 pm", "4.15pm", "4:15pm", "4.15 p.m.", "4:15 p.m.", "a quarter past four", "quarter past four", "a quarter past 4", "quarter past 4"] },
            { label: "Colour of the van", loesung: ["cream", "cream with a blue stripe", "cream with blue stripe", "white and cream", "cream, blue stripe"], wahl: ["red", "cream", "green"] },
            { label: "Direction of the van", loesung: ["left", "to the left", "turned left"], wahl: ["left", "right", "straight on"] }
          ] },
        { art: "mc", id: "sicher", titel: "How sure is she?", lead: "Tick the correct answer. The answer is not said directly.",
          fragen: [
            { q: "Which detail does Lerato NOT know for certain?", o: ["the first letter of the number plate", "whether Kagiso wore a helmet", "the road where it happened", "who phoned Kagiso's mother"], a: 0,
              e: "She says she thinks it started with a C, but she cannot say for certain. About the helmet she says: I'm sure." },
            { q: "Why does Lerato change “twenty past four” to “a quarter past four”?", o: ["She remembers that Kagiso had only fifteen minutes before training.", "The officer tells her the right time.", "The bakery closes at a quarter past four.", "Her phone shows a different time."], a: 0,
              e: "Training starts at half past four, and Kagiso said he had only fifteen minutes. That fits a quarter past four." },
            { q: "What does the officer's remark “That's honest, thank you” show?", o: ["He values that she admits what she does not know.", "He thinks she is lying.", "He is angry about the number plate.", "He wants her to guess the plate."], a: 0,
              e: "Lerato says openly that she cannot say for certain. The officer finds it good that she does not guess." }
          ] }
      ] }
    ] },
    { kurz: "Phone call", ober: "Listening 2", titel: "A call to a bike shop", teile: [
      { art: "text", html: "<p class=\"lead\">A few days later Kagiso phones a bike shop. Read the tasks, then listen. Watch out: the assistant corrects herself twice.</p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: "u3-listen-repair-m", fragen: [
        { art: "mc", id: "global2", titel: "What is the call about?", lead: "Tick the correct answer.",
          fragen: [
            { q: "Why does Kagiso call the shop?", o: ["His bike is damaged, and he does not know exactly what is wrong.", "He wants to buy a cheaper bike.", "He wants to complain about a repair.", "He has lost his helmet."], a: 0,
              e: "He had a small accident and says he does not know exactly what is wrong with the bike." }
          ] },
        { art: "formular", id: "karte", titel: "Repair form", lead: "Listen again and complete the form. Only the final information counts.",
          karte: "<p>Fill in the form with the information from the call.</p>",
          kopf: "Blue Gate Cycles – Repair form",
          felder: [
            { label: "What is damaged?", loesung: ["front wheel", "the front wheel", "wheel at the front"], wahl: ["front wheel", "back wheel", "saddle"] },
            { label: "Price for straightening (rand)", loesung: ["70", "seventy", "seventy rand", "70 rand", "R70"], wahl: ["60", "70", "250"] },
            { label: "Day to bring the bike", loesung: ["Saturday"], wahl: ["Friday", "Saturday", "Sunday"] },
            { label: "Time", loesung: ["10", "10.00", "10:00", "10 am", "10.00 am", "10:00 am", "ten", "ten o'clock"], wahl: ["9", "10", "4.45"] }
          ] },
        { art: "mc", id: "bedingung", titel: "What if …?", lead: "Tick the correct answer.",
          fragen: [
            { q: "What happens if the metal of the wheel is cracked?", o: ["Kagiso needs a new wheel, and the shop calls first.", "The shop repairs it for free.", "Kagiso must buy a new bike.", "The shop closes for the day."], a: 0,
              e: "Then a new wheel is needed (about two hundred and fifty rand). The assistant promises: We always ask first." }
          ] }
      ] }
    ] },
    { kurz: "Language", ober: "Grammar in the talk", titel: "The grammar of Unit 3 – in real talk", teile: [
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p>Lerato's story uses three things from Unit 3:</p><ul><li><b>past progressive</b> (was / were + -ing) – what was going on in the background: The van <u>was backing</u> out. Kagiso <u>was cycling</u> down the hill.</li><li><b>while</b> and <b>when</b> – <b>while</b> = two longer things go on at the same time: <u>While</u> the driver <u>was looking</u> back, Kagiso <u>was cycling</u>. <b>when</b> = a short action interrupts the longer one: I <u>was walking</u> home <u>when</u> I <u>saw</u> a van. The short action is in the simple past.</li><li><b>present perfect with for / since</b> (Revision) – from the past until now: I <u>have lived</u> here <u>for</u> six years. He <u>has worked</u> there <u>since</u> last spring.</li></ul>" },
      { art: "luecke", id: "grammar-gaps", tag: "Gap text", titel: "Complete the sentences", lead: "Complete the sentences. Careful: the simple past or the past progressive?",
        absaetze: [
          ["I was walking home ", { g: "when" }, " I saw the van."],
          [{ g: "While" }, " the driver was looking back, Kagiso was cycling down the hill."],
          ["Kagiso was riding fast when his bike ", { g: "hit" }, " the van."]
        ], extra: ["was hitting", "has hit"] },
      { art: "offen", id: "satz-bilden", m7: true, tag: "Your words", titel: "While and when", lead: "Write two sentences about something that happened to you or a friend: one with while and one with when. Use the past progressive and the simple past.",
        fragen: [{ q: "Write one sentence with while and one with when.", m: "While I was waiting for the bus, my friend was reading a book. I was walking to school when it started to rain.", k: ["while", "when", "was|were"], min: 3 }],
        tipp: "Start like this: While I was …, my friend was … / I was … when …" },
      { art: "offen", id: "begruenden", m7: true, tag: "Explain", titel: "Which tense – and why?", lead: "Lerato says: “I was walking home when I saw a van.” Explain in your own words why she uses was walking and saw, and not two verbs of the same kind.",
        fragen: [{ q: "Why was walking and saw?", m: "Walking is a longer action in the background, and saw is a short action that interrupts it. So she uses the past progressive for the long action and the simple past for the short action.", k: ["long|longer|background|going on", "short|interrupt|interrupts|suddenly", "progressive|simple past|was walking"], min: 3 }],
        tipp: "Think: which action takes longer? Which action interrupts the other one?" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "luecke", id: "zusammenfassung", tag: "Summary", titel: "The statement in short", lead: "Complete the summary. A summary uses your own words – it is not the same as the talk.",
        absaetze: [
          ["Lerato says “twenty past four”, but then she ", { g: "corrects" }, " herself."],
          ["She cannot say for certain what was on the number ", { g: "plate" }, " of the van."]
        ], extra: ["forgets", "ticket"] },
      { art: "offen", id: "sicherheit", m7: true, tag: "Your words", titel: "How sure is Lerato?", lead: "Name one detail she is sure about and one she is not sure about. Explain how you can hear it.",
        fragen: [{ q: "What is Lerato sure about, and what is she not sure about?", m: "She is sure that Kagiso wore a helmet, because she says: I'm sure about that. She is not sure about the number plate because she says that she thinks it started with a C, but she cannot say for certain.", k: ["helmet|road|Tuesday|quarter past", "plate|letter|number", "sure|certain|think"], min: 3 }],
        tipp: "Start like this: She is sure about … because she says … / She is not sure about … because …" },
      { art: "offen", id: "mediation", m7: true, tag: "Mediation", titel: "Auf Deutsch weitersagen", lead: "Ein Freund aus Deutschland ist bei Kagiso zu Besuch und hat den Anruf nicht verstanden. Sag ihm auf Deutsch in zwei bis drei Sätzen, wann Kagiso das Rad bringen soll, was das Geradebiegen kostet und was passiert, wenn das Rad gerissen ist.",
        fragen: [{ q: "Was sagst du dem Freund?", m: "Kagiso soll das Fahrrad am Samstag um zehn Uhr bringen. Das Geradebiegen des Vorderrads kostet etwa siebzig Rand. Ist das Metall gerissen, braucht er ein neues Rad für etwa zweihundertfünfzig Rand – aber der Laden ruft vorher an.", k: ["samstag|Samstag", "siebzig|70|Rand|rand", "neues Rad|neue Rad|neuen Rad|anruf|ruft|fragt|gerissen"], min: 3 }],
        tipp: "Du musst nicht alles übersetzen: Nenne Tag, Uhrzeit, Preis und die Bedingung." }
    ] }
  ],
  weiter: { text: "Well done! You can catch the main idea, the details and the corrections in a statement and in a phone call – and you can hear how sure a speaker is. You also know how the past progressive, while and when sound in real talk." }
});
