/* Englisch 7 · Unit 2 Fun in Wales and Scotland · Intro: Wales and Scotland
   (Land und Leute kennenlernen: fünf kurze Bildtexte lesen und Überschriften zuordnen, Fakten in eine Tabelle eintragen,
   ein Bild beschreiben mit there is/there are und Ortsangaben, ein Podcast-Interview verstehen – Multiple Choice mit drei
   Möglichkeiten –, Wales/Schottland mit Bayern vergleichen)
   Buchprinzip (BUCH-UNIT2.md, Abschnitt „Intro“): fünf Fotos mit Bildtexten → Foto beschreiben mit Satzanfängen → Tabelle mit Fakten
   füllen → Überschriften zuordnen → Radiointerview mit Multiple Choice (drei Optionen). Besser hier: Zuordnen und Tabelle mit
   sofortiger Rückmeldung, Belegstellen in den Zeilen, Beschreiben mit Hilfen in Stufen und KI-Hinweis, Hören mit Transkript nach
   den Aufgaben, Vergleich mit dem eigenen Land.
   Grammatik: keine neue (Intro); there is/there are und Ortsangaben (on the left, in front of, behind, in the background)
   werden im Kontext wiederholt. Wortschatz der Unit „Intro“ (Welsh, Scottish, castle, tradition, kilt, mile, history …).
   LehrplanPLUS E7 1.1 Leseverstehen, E7 1.2 Hörverstehen, E7 2 Sprechen/Schreiben (Bilder beschreiben, vergleichen),
   E7 5 (Wales und Schottland: Land und Leute).
   Texte: „Five photos from Wales and Scotland“ (texte/u2/u2-intro-karten-r.js und -m.js; R7 176 Wörter, M7 260 Wörter) und
   „Young travellers: visiting the Isle of Skye“ (texte/u2/u2-intro-podcast-r.js und -m.js; R7 169 Wörter, M7 291 Wörter).
   Personen (Dan Hughes, Isla Murray) sind erfunden; Fakten (zweisprachige Schilder, Conwy Castle, Isle of Skye, Loch Ness,
   Ceilidh) sind gesichert.
   Förder-Links: keine.
   Rollen im Hörtext: Dan Hughes = Mann (Moderator), Isla Murray = Frau (Guide).
   BILDER:
   - Station „Five photos“: fünf Fotos (Bildkarten) zu den Bildtexten: Ortsschild mit Walisisch und Englisch an einer Landstraße;
     Conwy Castle mit Stadtmauer und Hafen; Berglandschaft der Isle of Skye mit Schafen; Loch Ness unter Wolken; Tanzgruppe
     in einem Saal beim Ceilidh (Band im Hintergrund).
   - Station „Describe a picture“: ein Bild der Isle of Skye, das die Liste ersetzt: weißes Haus links, drei Schafe davor,
     Berge im Hintergrund, graue Wolke darüber, Straße rechts.
   - Station „Listening“ (Vorentlastung): Zeichnung einer kleinen Fähre und einer Brücke vor Bergen. */
D7Kit.seite({
  id: "u2-intro",
  titel: "Intro · Wales and Scotland",
  einleitung: "Road signs in two languages, a castle by the sea, an island with sheep, a lake with a monster story and a dance evening: Five short texts show you Wales and Scotland. Then you describe a picture and listen to a podcast with a guide from the Isle of Skye.",
  zeit: "etwa 40 Minuten",
  ziele: ["📖 I read short texts and find the right heading.", "🔎 I find facts and fill in a fact file.", "🖼️ I describe a picture with there is / there are.", "🎧 I understand a podcast interview about the Isle of Skye."],
  quiz: { profi: "Wales and Scotland pro" },
  glossar: {
    welsh: ["Welsh", "Walisisch ist eine alte keltische Sprache in Wales; sie klingt ganz anders als Englisch."],
    legend: ["legend", "Eine legend ist eine Sage, also eine alte Geschichte, von der man nicht weiß, ob sie wahr ist."],
    ferry: ["ferry", "Eine ferry ist eine Fähre, also ein Schiff, das Menschen und Autos über das Wasser bringt."],
    ceilidh: ["ceilidh", "Das Wort spricht man etwa „KAY-li“. Es ist ein schottischer Tanzabend mit Live-Musik."],
    loch: ["loch", "Loch ist das schottische Wort für einen See oder einen langen Meeresarm; Loch Ness ist ein See."],
    caller: ["caller", "Beim Ceilidh sagt der „Caller“ den Tänzern, welche Schritte als Nächstes kommen."],
    tradition: ["tradition", "Eine Tradition ist ein Brauch, den Menschen schon sehr lange pflegen."]
  },
  haupttext: { R: "u2-intro-karten-r", M: "u2-intro-karten-m" },
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Wales and Scotland are two countries in the United Kingdom, next to England. Both have mountains, old castles and their own traditions. In this module you meet five places and people – and you learn some new words first.</p>" },
      { nur: "R", art: "text", html: "<p><span class=\"de\">Wales (Walisisch: Cymru) liegt im Westen von England, Schottland im Norden. Du lernst fünf Orte und Bräuche kennen.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["Welsh", "walisisch; Walisisch"], ["castle", "Burg"], ["kilt", "Schottenrock"], ["mile", "Meile"], ["legend", "Sage"], ["ferry", "Fähre"], ["tradition", "Brauch"]] },
      { art: "merke", kopf: "READING TIP", html: "<p>A <b>heading</b> tells you in a few words what a text is about. To find the right heading, look for the <b>key words</b> in the text: names, places and things you can see.</p>" }
    ] },
    { kurz: "Five photos", ober: "Reading", titel: "Five places, five texts", teile: [
      { art: "karten", karten: [
        { ic: "<img class=\"zoomable\" src=\"images/u2/u2-intro-schild.jpg\" width=\"1280\" height=\"853\" alt=\"A road sign in Wales with two rows of marks and a red dragon, three sheep and green hills.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 1", text: "What is special about this sign?" },
        { ic: "<img class=\"zoomable\" src=\"images/u2/u2-intro-conwy.jpg\" width=\"1280\" height=\"853\" alt=\"A medieval castle with round towers by a harbour and an old town wall.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 2", text: "What can you see? Would you like to walk on the wall?" },
        { ic: "<img class=\"zoomable\" src=\"images/u2/u2-intro-skye.jpg\" width=\"1280\" height=\"853\" alt=\"Rocky mountains on a Scottish island with sheep on the grass in front.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 3", text: "What is the weather like? What animals can you see?" },
        { ic: "<img class=\"zoomable\" src=\"images/u2/u2-intro-loch.jpg\" width=\"1280\" height=\"853\" alt=\"A long dark lake between forested hills under heavy clouds.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 4", text: "What could live in this lake?" },
        { ic: "<img class=\"zoomable\" src=\"images/u2/u2-intro-ceilidh.jpg\" width=\"1280\" height=\"853\" alt=\"People dance in two long lines in a hall while a small band plays.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 5", text: "What are the people doing?" }
      ] },
      { art: "text", html: "<p class=\"lead\">Read the five short texts. Each text belongs to a photo. <span class=\"de\">Lies die fünf Texte. Du brauchst nicht jedes Wort zu kennen.</span></p>" },
      { art: "lesetext", lesetext: { R: "u2-intro-karten-r", M: "u2-intro-karten-m" } },
      { nur: "R", art: "text", html: "<p><span class=\"de\">Tipp: Suche in jedem Text die wichtigsten Wörter, zum Beispiel „castle“, „lake“ oder „dance“.</span></p>" },
      { art: "paare", id: "ueberschriften", tag: "Headings", titel: "Which heading fits?", lead: "Match each photo text with the right heading.",
        paare: [["Photo 1", "Two languages on one sign"], ["Photo 2", "A castle by the sea"], ["Photo 3", "Mountains, sheep and changing weather"], ["Photo 4", "A lake with a legend"], ["Photo 5", "A dance evening for everybody"]] },
      { art: "mc", id: "verstehen", tag: "Understanding", titel: "What do the texts say?", lead: "Tick the correct answer. <span class=\"de\">Es gibt drei Möglichkeiten.</span>",
        fragen: [
          { q: "What are the five texts about?", o: ["places and traditions in Wales and Scotland", "famous football teams", "school life in England"], a: 0,
            e: "All five texts show a place or a tradition in Wales or Scotland." },
          { q: "Why are there road signs in two languages in Wales?", o: ["Because many people in Wales speak Welsh.", "Because tourists cannot read English.", "Because Wales belongs to Scotland."], a: 0,
            e: "Welsh is an old language, and a lot of people still speak it – so signs use both languages." },
          { q: "How old is Conwy Castle?", o: ["more than 700 years", "about 70 years", "more than 7,000 years"], a: 0,
            e: "The castle is more than seven hundred years old." },
          { q: "\"The weather can change.\" What does \"change\" mean here?", o: ["become different", "stay the same", "go away for ever"], a: 0,
            e: "On the Isle of Skye the weather does not stay the same: sun, clouds and rain follow each other." },
          { q: "What does \"deep\" mean in \"a long, deep lake\"?", o: ["It goes far down to the bottom.", "It is very wide.", "It is very warm."], a: 0,
            e: "A deep lake has a lot of water from the top to the bottom." },
          { q: "What happens at a ceilidh?", o: ["A band plays and people dance.", "People play football.", "Children sing in a choir."], a: 0,
            e: "At a ceilidh a band plays live music and people dance together." }
        ] }
    ] },
    { kurz: "Facts", ober: "Reading for details", titel: "Find the facts", teile: [
      { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-intro-karten-r",
        fragen: [
          { q: "How many towers does the castle have?", zeilen: [6, 6], e: "Conwy Castle has eight big towers.", tipp: "Look for the word towers." },
          { q: "What do people call the monster in the lake?", zeilen: [12, 13], e: "They call it Nessie – but nobody has proof.", tipp: "Look at the text about the lake." },
          { q: "Who shows the steps at a ceilidh?", zeilen: [16, 16], e: "A caller shows the steps.", tipp: "Look for the word caller." }
        ] },
      { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer.", lesetext: "u2-intro-karten-m",
        fragen: [
          { q: "What can visitors do at the castle?", zeilen: [8, 9], e: "They can climb the towers and walk along the old town walls.", tipp: "Look at the second text." },
          { q: "Why do many tourists go to the lake?", zeilen: [19, 20], e: "They want to look for the monster Nessie.", tipp: "Look at the fourth text." },
          { q: "What does the caller do at a ceilidh?", zeilen: [23, 24], e: "He or she explains the steps before every dance.", tipp: "Look at the fifth text." }
        ] },
      { art: "formular", id: "tabelle", tag: "Fact file", titel: "Wales and Scotland: fact file", lead: "Complete the fact file. Use the texts (📖 Text). <span class=\"de\">Kurze Antworten genügen.</span>",
        kopf: "Fact file: Wales and Scotland",
        felder: [
          { label: "Languages on road signs in Wales", loesung: ["Welsh and English", "English and Welsh"], platz: "… and …" },
          { label: "\"Welcome to Wales\" in Welsh", loesung: ["Croeso i Gymru"] },
          { label: "Castle in the north of Wales", loesung: ["Conwy Castle", "Conwy"] },
          { label: "Island in the west of Scotland", loesung: ["Isle of Skye", "the Isle of Skye", "Skye"] },
          { label: "Lake with a monster legend", loesung: ["Loch Ness"] },
          { label: "Scottish dance evening", loesung: ["ceilidh", "a ceilidh"] }
        ] }
    ] },
    { kurz: "Listening", ober: "Podcast", titel: "Young travellers", teile: [
      { art: "text", html: "<p class=\"lead\">In the podcast <b>Young Travellers</b>, Dan Hughes talks to Isla Murray about the <b>Isle of Skye</b> – an island in the west of Scotland. Today Isla tells young listeners what to expect on the island.</p><p>Read the questions first. Then listen. You can use “slower”.</p>" },
      { nur: "R", art: "text", html: "<p><span class=\"de\">Lies zuerst die Fragen. Du hörst das Gespräch zweimal oder öfter. Das Transkript siehst du erst, wenn du fertig bist.</span></p>" },
      { nur: "R", art: "hoertext", id: "podcast", tag: "🎧 Podcast", hoertext: "u2-intro-podcast-r", fragen: [
        { art: "mc", id: "podcast-mc", titel: "Tick the correct answer", lead: "Listen and tick the correct answer. <span class=\"de\">Es gibt drei Möglichkeiten.</span>",
          fragen: [
            { q: "What is Isla's job?", o: ["She is a guide on the island.", "She is a ferry captain.", "She is a radio presenter."], a: 0,
              e: "Dan says that Isla is a guide on the Isle of Skye." },
            { q: "How do most visitors get to Skye?", o: ["They drive over the bridge.", "They take a ferry.", "They fly to the island."], a: 0,
              e: "Isla says that most visitors take the bridge, but the ferry is more fun." },
            { q: "What should visitors bring?", o: ["a rain jacket", "a swimsuit", "an umbrella and a hat"], a: 0,
              e: "Isla says: bring a rain jacket, even in summer." },
            { q: "Where can you see dolphins?", o: ["from a boat", "from the bridge", "in the mountains"], a: 0,
              e: "If you are lucky, you can see dolphins from a boat." },
            { q: "When is the ceilidh in the village hall?", o: ["on Friday evenings", "on Saturday mornings", "on Sunday afternoons"], a: 0,
              e: "There is a ceilidh on Friday evenings." }
          ] }
      ] },
      { nur: "M", art: "hoertext", id: "podcast", tag: "🎧 Podcast", hoertext: "u2-intro-podcast-m", fragen: [
        { art: "mc", id: "podcast-mc", titel: "Tick the correct answer", lead: "Listen and tick the correct answer.",
          fragen: [
            { q: "Why does Isla tell teenagers to take the ferry?", o: ["Because the journey is an experience.", "Because the bridge is closed.", "Because the ferry is faster."], a: 0,
              e: "On the ferry you stand on deck, feel the wind and see seabirds." },
            { q: "What is Isla's advice about clothes?", o: ["Wear several thin layers and keep a rain jacket.", "Wear one thick winter coat.", "Wear shorts and a T-shirt."], a: 0,
              e: "She says: wear several thin layers and keep a rain jacket in your bag." },
            { q: "What did the group of students see from a small boat?", o: ["dolphins", "seals", "a sea eagle"], a: 0,
              e: "The students saw dolphins – seals and a sea eagle are other animals on the island." },
            { q: "Why do groups walk in the mountains with a guide?", o: ["Because the mountains can be dangerous in bad weather.", "Because the paths are very long.", "Because the mountains belong to a farm."], a: 0,
              e: "Isla explains that bad weather makes the mountains dangerous." },
            { q: "Who dances at the ceilidh in the village hall?", o: ["everybody, even the shy ones", "only the children", "only the band"], a: 0,
              e: "Isla says that everybody dances, even the shy ones." },
          ] },
        { art: "mc", id: "podcast-gefuehl", m7: true, titel: "How does she feel?", lead: "Tick the correct answer.",
          fragen: [
            { q: "How did Isla feel on the hill before sunrise?", o: ["small, but very happy", "bored and cold", "afraid and alone"], a: 0,
              e: "She says: I felt very small, but also very happy." }
          ] }
      ] }
    ] },
    { kurz: "Your turn", ober: "Speaking and writing", titel: "Describe a picture – and compare", teile: [
      { art: "merke", kopf: "DESCRIBE A PICTURE", html: "<p>Use <b>there is</b> (one thing) and <b>there are</b> (more things). Say <b>where</b> things are:</p><ul><li><b>on the left / on the right</b></li><li><b>in front of</b> the castle · <b>behind</b> the castle · <b>next to</b> the castle</li><li><b>in the background</b> (far away)</li></ul>" },
      { art: "luecke", id: "there", tag: "Language", titel: "There is or there are?", lead: "A tourist describes a photo of a castle. Complete the sentences. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["On the top tower ", { g: "there is" }, " a red flag. At the bottom ", { g: "there are" }, " two big doors."],
          ["The sea is ", { g: "behind" }, " the castle, in the background."],
          ["The sheep are ", { g: "in front of" }, " the old walls."]
        ], extra: ["under", "it is"] },
      { art: "text", html: "<p class=\"lead\">Look at the picture of an island in Scotland. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-intro-insel.jpg\" width=\"1280\" height=\"853\" alt=\"A Scottish island: a white house on the left, three sheep in front of it, mountains behind, a grey cloud above and a road on the right.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure>" },
      { art: "beispiel", kopf: "THE PICTURE", html: "<p>Look at the picture. You see:</p><ul><li>a small white house (<b>on the left</b>)</li><li>three sheep (<b>in front of</b> the house)</li><li>high mountains (<b>in the background</b>)</li><li>a grey cloud (<b>above</b> the mountains)</li><li>a road (<b>on the right</b>)</li></ul>" },
      { nur: "R", art: "offen", id: "beschreiben", tag: "Your words", titel: "Describe the photo", lead: "Write three sentences about the photo of the Isle of Skye. <span class=\"de\">Benutze there is / there are und sage, wo etwas ist.</span>",
        fragen: [{ q: "Describe the photo of the Isle of Skye.", m: "There is a small white house on the left. There are three sheep in front of the house. There are high mountains in the background.", k: ["there is|there are", "house|sheep|mountains|road|cloud", "left|right|front|behind|background|above|next to", "white|three|high|grey|small"], min: 3 }],
        tipp: "Start like this: There is a … on the left. There are … in front of … There are … in the background.",
        hilfen: ["Look at the list: what is on the left, what is in front of the house, what is in the background?", "Write: There is a small white house on the left.", "Then write about the sheep (there are …) and the mountains (in the background)."] },
      { nur: "M", art: "offen", id: "beschreiben", tag: "Your words", titel: "Describe the photo", lead: "Describe the photo of the Isle of Skye in three or four sentences. Use there is / there are and say where things are.",
        fragen: [{ q: "Describe the photo of the Isle of Skye.", m: "There is a small white house on the left. There are three sheep in front of the house. There are high mountains in the background and there is a road on the right.", k: ["there is|there are", "house|sheep|mountains|road|cloud", "left|right|front|behind|background|above|next to", "white|three|high|grey|small"], min: 3 }],
        tipp: "Use: on the left, on the right, in front of, behind, in the background." },
      { art: "offen", id: "bayern", m7: true, tag: "Compare", titel: "And in Bavaria?", lead: "Is there something in Bavaria that is similar – or different? Write two sentences. <span class=\"de\">Zum Beispiel: In Bavaria we have … too. But we do not have …</span>",
        fragen: [{ q: "What is similar or different in Bavaria? Write two sentences.", m: "In Bavaria we have mountains and lakes, too. But we do not have a monster in our lakes, and we do not have two languages on our road signs.", k: ["bavaria|bayern|germany|we have|we don't|we do not|we also", "mountain|lake|castle|dance|language|sign|monster|island|sea|sheep|weather|rain|kilt|dirndl|lederhosen|music|festival|tradition|alps", "but|too|also|different|same|similar|not|don't"], min: 2 }],
        tipp: "Think of mountains, lakes, castles, dances or languages. Start with: In Bavaria we have … / In Bavaria there is …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "richtigfalsch", tag: "True or false?", titel: "Wales and Scotland", lead: "Decide: true or false?",
        aussagen: [
          ["In Wales many road signs have two languages.", true],
          ["Conwy Castle is in the south of Wales.", false],
          ["The Isle of Skye is an island in the west of Scotland.", true],
          ["Loch Ness is about 23 miles long.", true],
          ["Scientists have shown that Nessie is real.", false],
          ["At a ceilidh a caller helps with the steps.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You know five places in Wales and Scotland and you can describe a picture." }
});
