/* Englisch 7 · Unit 3 Welcome to Ireland · Intro: Ireland
   (Irland kennenlernen: fünf kurze Bildtexte lesen und Überschriften zuordnen, Fakten in eine Tabelle eintragen, die Karten
   mit eigenen Worten bewerten, eine Radiosendung mit einem Mädchen aus Galway verstehen – Multiple Choice mit drei Möglichkeiten,
   M7 zusätzlich Gefühle –, Irland mit Bayern vergleichen)
   Buchprinzip (BUCH-UNIT3.md, Abschnitt „Intro“): fünf Fotos mit Bildtexten (Staat und Währung, Musik, Hauptstadt, Nationalfeiertag,
   irische Sportarten) → Fotos beschreiben/bewerten → Aussagen zu den Bildtexten prüfen und richtigstellen → Hörtext mit
   Fragen. Besser hier: Zuordnen und Tabelle mit sofortiger Rückmeldung, Belegstellen in den Zeilen, Bewerten mit Hilfen in
   Stufen und KI-Hinweis, Hören mit Transkript nach den Aufgaben, M7 mit Gefühl/Meinung, Vergleich mit dem eigenen Land.
   Grammatik: keine (Intro); Wortschatz „Intro“ der Unit (euro, Irish, celebrate, shamrock, hurling, Gaelic football, Gaelic)
   dazu fiddle, tin whistle, parade, pub, wooden (erklärt im Glossar/Warm-up).
   LehrplanPLUS E7 1.1 Leseverstehen, E7 1.2 Hörverstehen, E7 2 Sprechen/Schreiben (Meinung äußern, vergleichen),
   E7 5 (Irland: Land und Leute).
   Texte: „Five photos from Ireland“ (texte/u3/u3-intro-karten-r.js und -m.js; R7 185 Wörter, M7 292 Wörter) und
   „Teen Radio: a girl from Galway“ (texte/u3/u3-intro-radio-r.js und -m.js; R7 162 Wörter, M7 248 Wörter).
   Personen (Cian, Saoirse) sind erfunden; Fakten (Republik Irland in der EU mit Euro, Nordirland im Vereinigten Königreich mit
   Pfund, Fiddle/Tin Whistle/Bodhrán, Dublin an der Ostküste, St Patrick's Day am 17. März, Hurling/Gaelic football/Camogie,
   Irisch als Schulfach) sind gesichert.
   Förder-Links: keine.
   Rollen im Hörtext: Cian = Mann (Moderator), Saoirse = Mädchen (13, aus Galway).
   BILDER:
   - Station „Five photos“: fünf Fotos (Bildkarten) zu den Bildtexten: ein Euro-Schein neben einer Pfund-Münze auf einem
     Holztisch; Musiker mit Fiddle, Tin Whistle und Bodhrán sitzen im Kreis; Straßenzug in einer Hafenstadt mit Möwen und
     bunten Häusern (allgemein, kein Wahrzeichen); Kinder mit grünen Hüten und Kleeblatt-Fähnchen bei einem Umzug; zwei
     Spieler im Zweikampf um einen kleinen Ball, einer mit Holzschläger.
   - Station „Your turn“: eine Zeichnung der Insel Irland mit der Grenze zwischen Republik und Nordirland (nur Karte,
     zwei Farben, Euro- und Pfund-Zeichen), damit das Kind Fakten zuordnen kann.
   - Station „Listening“ (Vorentlastung): Radiomikrofon in einem kleinen Studio, ein Moderator und ein Mädchen mit
     Kopfhörern. */
D7Kit.seite({
  id: "u3-intro",
  titel: "Intro · Ireland",
  einleitung: "Euros and pounds, a flat drum, a city by the sea, a green party day and two very fast games: Five short texts show you Ireland. Then you give your opinion and listen to a radio show with a girl from Galway.",
  zeit: "etwa 40 Minuten",
  ziele: ["📖 I read short texts and find the right heading.", "🔎 I find facts and fill in a fact file.", "💬 I say which place I like best and why.", "🎧 I understand a radio interview with a girl from Ireland."],
  quiz: { profi: "Ireland pro" },
  glossar: {
    irish: ["Irish", "Irish bedeutet „irisch“. Man nennt so auch die irische Sprache, die alle Kinder in Irland in der Schule lernen."],
    fiddle: ["fiddle", "Eine fiddle ist eine Geige. Man sagt „fiddle“, wenn man irische oder schottische Volksmusik spielt."],
    whistle: ["tin whistle", "Eine tin whistle ist eine kleine, einfache Flöte aus Metall mit sechs Löchern."],
    bodhran: ["bodhrán", "Das Wort spricht man etwa „BAU-rahn“. Es ist eine flache, runde Trommel, die man mit einem Holzstöckchen schlägt."],
    shamrock: ["shamrock", "Ein shamrock ist ein kleines grünes Kleeblatt mit drei Blättern. Es ist ein Symbol für Irland."],
    parade: ["parade", "Eine parade ist ein Umzug: Viele Menschen gehen oder fahren in einer langen Reihe durch die Straßen."],
    pub: ["pub", "Ein pub ist ein Wirtshaus. In Irland spielen dort oft Musiker für die Gäste."],
    camogie: ["camogie", "Camogie ist ein irischer Mannschaftssport für Mädchen und Frauen. Er ist dem Hurling sehr ähnlich."]
  },
  haupttext: { R: "u3-intro-karten-r", M: "u3-intro-karten-m" },
  stationen: [
    { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
      { art: "text", html: "<p class=\"lead\">Ireland is an island in the west of Europe, next to Great Britain. People say that it is very green. In this module you meet five things that are typical for Ireland – and you learn some new words first.</p>" },
      { nur: "R", art: "text", html: "<p><span class=\"de\">Irland ist eine Insel westlich von Großbritannien. Du lernst fünf typische Dinge kennen: Geld, Musik, die Hauptstadt, einen Feiertag und Sport.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Verbinde das englische Wort mit seiner Bedeutung.</span>",
        paare: [["Irish", "irisch; Irisch"], ["fiddle", "Geige"], ["tin whistle", "kleine Metallflöte"], ["pub", "Wirtshaus"], ["parade", "Umzug"], ["wooden", "aus Holz"], ["to celebrate", "feiern"]] },
      { art: "merke", kopf: "READING TIP", html: "<p>A <b>heading</b> tells you in a few words what a text is about. To find the right heading, look for the <b>key words</b> in the text: names, places and things you can see in the photo.</p>" }
    ] },
    { kurz: "Five photos", ober: "Reading", titel: "Five things, five texts", teile: [
      { art: "karten", karten: [
        { ic: "<img class=\"zoomable\" src=\"images/u3/u3-intro-geld.jpg\" width=\"1280\" height=\"853\" alt=\"Coins next to a small purse on a wooden table, a little shamrock plant beside them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 1", text: "What do you pay with in Germany? And in Ireland?" },
        { ic: "<img class=\"zoomable\" src=\"images/u3/u3-intro-musik.jpg\" width=\"1280\" height=\"853\" alt=\"Four musicians sit in a circle in a cosy pub and play a fiddle, a tin whistle, a flat drum and a guitar.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 2", text: "What can you see? Do you play an instrument?" },
        { ic: "<img class=\"zoomable\" src=\"images/u3/u3-intro-stadt.jpg\" width=\"1280\" height=\"853\" alt=\"A harbour city with a river, an old stone bridge, colourful houses and seagulls.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 3", text: "What can you see in a big city by the sea?" },
        { ic: "<img class=\"zoomable\" src=\"images/u3/u3-intro-parade.jpg\" width=\"1280\" height=\"853\" alt=\"Children and families in green clothes and green hats wave small flags at a parade.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 4", text: "What colour are the clothes? What are the people doing?" },
        { ic: "<img class=\"zoomable\" src=\"images/u3/u3-intro-hurling.jpg\" width=\"1280\" height=\"853\" alt=\"Two players with helmets and wooden sticks run for a small ball on a grass pitch.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 5", text: "What are the players doing?" }
      ] },
      { art: "text", html: "<p class=\"lead\">Read the five short texts. Each text belongs to a photo. <span class=\"de\">Lies die fünf Texte. Du brauchst nicht jedes Wort zu kennen.</span></p>" },
      { art: "lesetext", lesetext: { R: "u3-intro-karten-r", M: "u3-intro-karten-m" } },
      { nur: "R", art: "text", html: "<p><span class=\"de\">Tipp: Suche in jedem Text die wichtigsten Wörter, zum Beispiel „music“, „holiday“ oder „sports“.</span></p>" },
      { art: "paare", id: "ueberschriften", tag: "Headings", titel: "Which heading fits?", lead: "Match each photo text with the right heading.",
        paare: [["Photo 1", "Money in Ireland and in the north"], ["Photo 2", "Tunes for everybody to enjoy"], ["Photo 3", "A big city on the coast"], ["Photo 4", "A day in green"], ["Photo 5", "Fast games with a ball"]] },
      { art: "mc", id: "verstehen", tag: "Understanding", titel: "What do the texts say?", lead: "Tick the correct answer. <span class=\"de\">Es gibt drei Möglichkeiten.</span>",
        fragen: [
          { q: "Which two countries are on the island of Ireland?", o: ["the Republic of Ireland and Northern Ireland", "Ireland and Scotland", "Wales and England"], a: 0,
            e: "The island has two parts: the Republic of Ireland and Northern Ireland." },
          { q: "What is a bodhrán?", o: ["a flat drum", "a kind of flute", "a small violin"], a: 0,
            e: "A bodhrán is a flat, round drum." },
          { q: "What does \"national holiday\" mean here?", o: ["a special day for the whole country", "a holiday at the seaside", "a school trip"], a: 0,
            e: "A national holiday is a special day for all the people in the country." },
          { q: "Where is Dublin?", o: ["on the east coast", "on the west coast", "in the mountains"], a: 0,
            e: "Dublin is on the east coast, by the sea." },
          { q: "How many people live in and around Dublin?", o: ["more than a million", "about ten thousand", "about a hundred"], a: 0,
            e: "More than a million people live in and around the city." },
          { q: "Where can you hear Irish music?", o: ["in pubs and on the street", "only in big concert halls", "only on the radio"], a: 0,
            e: "You can hear music in pubs and on the street." }
        ] }
    ] },
    { kurz: "Facts", ober: "Reading for details", titel: "Find the facts", teile: [
      { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-intro-karten-r",
        fragen: [
          { q: "What do people in Northern Ireland pay with?", zeilen: [3, 4], e: "Northern Ireland belongs to the United Kingdom, so people pay with pounds.", tipp: "Look at the first text." },
          { q: "What is the bodhrán?", zeilen: [6, 7], e: "It is a flat drum.", tipp: "Look for the word bodhrán." },
          { q: "What do people wear on St Patrick's Day?", zeilen: [14, 14], e: "People wear green.", tipp: "Look at the fourth text." }
        ] },
      { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer.", lesetext: "u3-intro-karten-m",
        fragen: [
          { q: "Why do people in Northern Ireland pay with pounds?", zeilen: [5, 6], e: "Northern Ireland belongs to the United Kingdom.", tipp: "Look at the first text." },
          { q: "Where do people sit together and play music for fun?", zeilen: [9, 10], e: "In some pubs people sit together and play for fun.", tipp: "Look at the second text." },
          { q: "Do the players of the two sports get money?", zeilen: [26, 27], e: "No, they are amateurs: the players do not get any money.", tipp: "Look at the last text." }
        ] },
      { art: "formular", id: "tabelle", tag: "Fact file", titel: "Ireland: fact file", lead: "Complete the fact file. Use the texts (📖 Text). <span class=\"de\">Kurze Antworten genügen.</span>",
        kopf: "Fact file: Ireland",
        felder: [
          { label: "Money in the Republic of Ireland", loesung: ["euro", "the euro", "euros"] },
          { label: "Money in Northern Ireland", loesung: ["pounds", "pound", "the pound"] },
          { label: "Capital of Ireland", loesung: ["Dublin"] },
          { label: "Date of St Patrick's Day", loesung: ["17 March", "March 17", "17th March", "the 17th of March", "March 17th", "17th of March"], platz: "day + month" },
          { label: "Small green plant, symbol of Ireland", loesung: ["shamrock", "a shamrock", "the shamrock"] },
          { label: "Irish sport with a round ball you can carry", loesung: ["Gaelic football"] }
        ] }
    ] },
    { kurz: "Listening", ober: "Radio", titel: "Teen Radio", teile: [
      { art: "text", html: "<p class=\"lead\">On the radio show <b>Teen Radio</b>, the presenter Cian talks to Saoirse, a girl from <b>Galway</b>. Galway is a city on the west coast of Ireland. Saoirse tells young listeners about her life.</p><p>Read the questions first. Then listen. You can use “slower”.</p>" },
      { nur: "R", art: "text", html: "<p><span class=\"de\">Lies zuerst die Fragen. Du hörst das Gespräch zweimal oder öfter. Das Transkript siehst du erst, wenn du fertig bist.</span></p>" },
      { nur: "R", art: "hoertext", id: "radio", tag: "🎧 Radio show", hoertext: "u3-intro-radio-r", fragen: [
        { art: "mc", id: "radio-mc", titel: "Tick the correct answer", lead: "Listen and tick the correct answer. <span class=\"de\">Es gibt drei Möglichkeiten.</span>",
          fragen: [
            { q: "Where does Saoirse live?", o: ["in a city on the west coast", "in a village in the mountains", "in the capital"], a: 0,
              e: "Saoirse says: I live in Galway, a city on the west coast of Ireland." },
            { q: "What does Saoirse wear at school?", o: ["a school uniform", "sports clothes", "jeans and a T-shirt"], a: 0,
              e: "She wears a blue skirt and a grey jumper – a school uniform." },
            { q: "Which lessons does she have every day?", o: ["Irish lessons", "music lessons", "sport lessons"], a: 0,
              e: "She has Irish lessons every day." },
            { q: "When does her team play a match?", o: ["on Saturday", "on Tuesday", "on Thursday"], a: 0,
              e: "The team trains on Tuesdays and Thursdays and plays a match on Saturday." },
            { q: "Who plays music with Saoirse on Sunday afternoons?", o: ["her uncle and other musicians", "her teacher", "her brother"], a: 0,
              e: "Her uncle and some other musicians play with her in a café." }
          ] }
      ] },
      { nur: "M", art: "hoertext", id: "radio", tag: "🎧 Radio show", hoertext: "u3-intro-radio-m", fragen: [
        { art: "mc", id: "radio-mc", titel: "Tick the correct answer", lead: "Listen and tick the correct answer.",
          fragen: [
            { q: "Why does Cian say sorry at the beginning?", o: ["He did not say her name correctly.", "He was late for the show.", "He forgot her age."], a: 0,
              e: "Saoirse tells him that her name sounds like \"SEER-sha\"." },
            { q: "How often does Saoirse have Irish lessons?", o: ["nearly every day", "once a week", "only in summer"], a: 0,
              e: "She has Irish lessons nearly every day." },
            { q: "How often does her team train?", o: ["twice a week", "every day", "once a month"], a: 0,
              e: "She says: We train twice a week." },
            { q: "What does Saoirse like about the tunes she plays?", o: ["Some of them are hundreds of years old.", "They are very new.", "They are very loud."], a: 0,
              e: "She loves that some of the tunes are hundreds of years old." },
            { q: "What is Saoirse's dream?", o: ["to play for the Galway team", "to work at a radio station", "to move to a big city"], a: 0,
              e: "She would like to play for the Galway team one day." }
          ] },
        { art: "mc", id: "radio-gefuehl", m7: true, titel: "How does she feel?", lead: "Tick the correct answer.",
          fragen: [
            { q: "How did Saoirse feel before her first match?", o: ["nervous", "bored", "angry"], a: 0,
              e: "She says: I was really nervous, my hands were shaking." },
            { q: "How does she feel about speaking Irish now?", o: ["proud", "ashamed", "tired"], a: 0,
              e: "She says: Now I'm proud that I can speak it." }
          ] }
      ] }
    ] },
    { kurz: "Your turn", ober: "Speaking and writing", titel: "Which place do you like – and compare", teile: [
      { art: "merke", kopf: "SAY WHAT YOU THINK", html: "<p>Say which photo you like and <b>why</b>:</p><ul><li><b>I like Photo … best</b> because …</li><li><b>I think</b> … is interesting / great / funny.</li><li><b>I would like to</b> see / hear / try …</li></ul>" },
      { nur: "R", art: "offen", id: "meinung", tag: "Your words", titel: "Which photo do you like best?", lead: "Write two sentences. Say which photo you like best and why. <span class=\"de\">Welches Foto gefällt dir am besten? Sage auch, warum.</span>",
        fragen: [{ q: "Which photo do you like best? Why?", m: "I like Photo 2 best because I like music. I would like to hear a fiddle in a pub.", k: ["i like|i love|my favourite|i think", "photo|picture|music|sport|city|dublin|holiday|green|hurling|football|euro|money|fiddle|drum|parade", "because|it is|it's|i would like|i'd like|i can"], min: 3 }],
        tipp: "Start like this: I like Photo … best because … / I would like to …",
        hilfen: ["Look at the five photos again. Which one do you find interesting?", "Write: I like Photo … best.", "Then say why: because I like music / because sport is fun / because …"] },
      { nur: "M", art: "offen", id: "meinung", tag: "Your words", titel: "Which photo do you like best?", lead: "Write two or three sentences. Say which photo you like best and why. Say what you would like to do in Ireland.",
        fragen: [{ q: "Which photo do you like best? Why? What would you like to do in Ireland?", m: "I like Photo 5 best because I think hurling looks very fast and exciting. I would like to watch a match in Ireland.", k: ["i like|i love|my favourite|i think", "photo|picture|music|sport|city|dublin|holiday|green|hurling|football|euro|money|fiddle|drum|parade|match", "because|it is|it's|i would like|i'd like|i can|looks"], min: 3 }],
        tipp: "Use: I like Photo … best because … / I think … is … / I would like to …" },
      { art: "offen", id: "bayern", m7: true, tag: "Compare", titel: "And in Bavaria?", lead: "Is there something in Bavaria that is similar – or different? Write two sentences. <span class=\"de\">Zum Beispiel: In Bavaria we have … too. But we do not have …</span>",
        fragen: [{ q: "What is similar or different in Bavaria? Write two sentences.", m: "In Bavaria we have traditional music, too. But we do not have hurling, and we pay with the euro like in the Republic of Ireland.", k: ["bavaria|bayern|germany|we have|we don't|we do not|we also|we pay", "music|holiday|sport|football|festival|parade|dance|city|munich|euro|money|oktoberfest|brass|language|school|fiddle|drum", "but|too|also|different|same|similar|not|don't|like"], min: 2 }],
        tipp: "Think of music, holidays, sport or money. Start with: In Bavaria we have … / In Bavaria there is …" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "richtigfalsch", tag: "True or false?", titel: "Ireland", lead: "Decide: true or false?",
        aussagen: [
          ["In Ireland people pay with the euro.", true],
          ["Northern Ireland is part of the United Kingdom.", true],
          ["Dublin is on the west coast of Ireland.", false],
          ["St Patrick's Day is in June.", false],
          ["In hurling, players hit a small ball with a stick.", true],
          ["Irish children do not learn Irish at school.", false]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You know five typical things about Ireland and you can say which one you like best." }
});
