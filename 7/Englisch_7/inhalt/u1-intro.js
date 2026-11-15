/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Intro: Holidays in England (Kürzel A10)
   (Ferienorte in England kennenlernen: fünf Postkarten von der Klassenwand lesen, Orte benennen, Einzelheiten und Textstellen
   finden, die Verben der Postkarten im simple past erkennen, ein Gespräch über das letzte Ferienwochenende hören – richtig oder
   falsch –, sagen, was man (nicht) gern machen würde und warum)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Intro“, nur Aufbau, nichts übernommen): Bildtexte über Ferien in England lesen → Bilder
   beschreiben, der Partner rät (Sprechanlass) → welche Aktivitäten würdest du (nicht) gern machen, mit because → „Name the
   place“: Aussagen dem passenden Ort zuordnen → Hören eines Gesprächs über ein Wochenende mit sechs Aussagen richtig/falsch.
   Hier anders als im Buch: fünf verschiedene Kinder einer Klasse schreiben je eine Postkarte (nicht ein Mädchen alles), andere
   Orte (Whitby, Cambridge, Bath, Keswick, Lindisfarne), Hörtext ohne Freizeitpark (Sandburgen-Wettbewerb, Drachenfest).
   Besser: Zuordnen mit sofortiger Rückmeldung, Textstellen antippen, Hilfen in Stufen (R7 mehr), Transkript erst nach den
   Hörfragen, KI-Hinweis bei den eigenen Sätzen, Förder-Link zu den unregelmäßigen Verben.
   Grammatik: keine neue (Intro); die Postkarten stehen im simple past (G1 wird in Topic 1 geübt) – hier nur die Verbformen
   erkennen. Wortschatz der Unit bis „Intro“ (coast, south, to drive/drove, visit, out and about) und Zoom in.
   LehrplanPLUS E7 1.1 Leseverstehen (kurze Texte, Einzelheiten), E7 1.2 Hörverstehen (Gespräch, richtig/falsch), E7 2 Sprechen/
   Schreiben (Vorlieben mit Begründung), E7 5 (England: Land und Leute, Ferienorte).
   Texte: „Postcards from England“ (texte/u1/u1-intro-karten-r.js und -m.js; R7 238 Wörter, M7 378 Wörter) und „The last weekend
   of the holidays“ (texte/u1/u1-intro-weekend-r.js und -m.js; R7 195 Wörter, M7 273 Wörter). Personen erfunden; Orte und Fakten
   gesichert (siehe Kopf der Textdateien).
   Förder-Link: unregelmäßige Verben im simple past -> unit1/extra/simple-past.html (zusätzlich zum Auftrag: G1-Teil im Intro).
   m7: zwei Aufgaben (Hören: „a typical English weekend“ erklären · Postkartensätze über einen Ausflug in Bayern); für 7R freiwillig.
   Rollen im Hörtext: Evie = Mädchen, Zainab = Mädchen. Noch keine Aufnahme (aufnahme: true erst mit MP3).
   // BILDER:
   // 1. Station „Postcards“ (Vorentlastung, Sprechanlass): fünf Postkarten an einer Klassenwand mit Fotos – eine Treppe zu
   //    Ruinen auf einer Klippe über dem Meer, ein flaches Boot mit Stange auf einem Fluss vor alten Steinhäusern, ein dampfendes
   //    römisches Becken mit Säulen, ein See zwischen grünen Hügeln mit einem kleinen Boot, eine überflutete Straße zu einer Insel
   //    mit einer kleinen Burg (ohne lesbaren Text).
   // 2. Station „Listening“ (Vorentlastung): ein Strand mit einer großen Sandburg mit vier Türmen, im Hintergrund kommt die Flut;
   //    daneben ein Hügel mit vielen bunten Drachen am Himmel, einer hängt in einem Baum.
   // 3. Station „Your turn“ (Sprechanlass): Karte von England mit fünf Punkten für die Orte (Norden, Osten, Südwesten). */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist
  const D = s => ` <span class="de">${s}</span>`;
  // Teile ohne eigene Fassung, die im Auftrag eine deutsche Hilfe haben: R7 behält sie, M7 bekommt nur den englischen Auftrag
  const OHNE_DE = s => (s || "").replace(/<p><span class="de">.*?<\/span><\/p>/g, "").replace(/ ?<span class="de">.*?<\/span>/g, "");
  function trenne(stationen) {
    stationen.forEach(st => {
      st.teile = st.teile.flatMap(t => {
        const hat = /class="de"/.test((t.lead || "") + (t.auftrag || ""));
        if (t.nur || !hat || t.art === "text" || t.art === "merke") return [t];
        const m = Object.assign({}, t, { nur: "M" });
        if (t.lead) m.lead = OHNE_DE(t.lead);
        if (t.auftrag) m.auftrag = OHNE_DE(t.auftrag);
        delete m.hilfen;
        return [Object.assign({}, t, { nur: "R" }), m];
      });
    });
    return stationen;
  }
  const FOERDER_SP = { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" };

  D7Kit.seite({
    id: "u1-intro",
    titel: "Intro · Holidays in England",
    einleitung: "Steps up to a cliff, a flat boat on a river, hot water from Roman times, a lake in the hills and an island that you can only reach at low tide: five students write postcards from their summer holidays in England. Then you listen to two friends – and you say where <b>you</b> would like to go.",
    zeit: "etwa 40 Minuten",
    ziele: ["📮 I read five short postcards and name the place.", "🔎 I find details and the lines in the text.", "🎧 I understand two friends who talk about their weekend.", "💬 I say what I would (not) like to do – and why."],
    thema: "Unit 1 Out and about in England: Intro (Ferienorte in England, Postkarten, Wochenende)",
    quiz: { profi: "Holiday pro" },
    glossar: {
      cliff: ["cliff", "Eine cliff ist eine Klippe, also eine hohe, steile Felswand am Meer."],
      ruins: ["ruins", "Ruins sind Ruinen: die Reste von sehr alten Gebäuden, die zum Teil kaputt sind."],
      punt: ["punt", "Ein punt ist ein langes, flaches Boot. Man stößt es mit einer langen Stange (pole) vom Flussboden ab. Das nennt man punting."],
      tide: ["low tide", "Low tide ist die Ebbe: Das Meer ist weit weg vom Strand. Zweimal am Tag kommt das Wasser wieder (high tide, Flut)."],
      bath: ["Roman baths", "Die Römer bauten in Bath vor fast 2000 Jahren Bäder, weil dort heißes Wasser aus dem Boden kommt."],
      abbey: ["abbey", "Eine abbey ist eine Abtei: ein Kloster mit einer großen Kirche. In Whitby stehen die Ruinen einer alten Abtei auf der Klippe."],
      kite: ["kite", "Ein kite ist ein Drachen, den man bei Wind am Himmel fliegen lässt."],
      lakes: ["Lake District", "Der Lake District ist eine Gegend mit vielen Seen und Hügeln im Nordwesten Englands."]
    },
    haupttext: { R: "u1-intro-karten-r", M: "u1-intro-karten-m" },
    stationen: trenne([
      { kurz: "Warm-up", ober: "Before you read", titel: "Holidays in England", teile: [
        { art: "text", html: `<p class="lead">England is the biggest country in the United Kingdom. In the summer holidays, lots of families are <b>out and about</b>: at the coast, in old cities, at lakes and in the hills. <span class="de">Du liest fünf Ferien-Postkarten von Kindern einer Klasse in England und hörst ein Gespräch über ein Wochenende. Die Kinder sind erfunden, die Orte gibt es wirklich.</span></p><p>Where do you like to go in the holidays – to the sea, to the mountains or to a city? <span class="de">Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>` },
        { art: "merke", kopf: "NORTH, SOUTH, EAST, WEST", html: `<p><b>north</b> · <b>south</b> · <b>east</b> · <b>west</b> – and in between: <b>north-east</b>, <b>south-west</b> …</p><ul><li>Whitby is <b>in the north-east of</b> England.</li><li>The town is <b>on the coast</b>. It is <b>a long way from</b> London.</li></ul><p><span class="de">„in the north of England“ = im Norden Englands · „on the coast“ = an der Küste</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du in den Postkarten. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["coast", "Küste"], ["cliff", "Klippe"], ["ruins", "Ruinen"], ["island", "Insel"], ["low tide", "Ebbe"], ["pole", "Stange"], ["south-west", "Südwesten"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Vier Wörter haben mit dem Meer zu tun, eines mit sehr alten Gebäuden.", "south = Süden, west = Westen – was ist dann south-west?"] }
      ] },
      { kurz: "Postcards", ober: "Reading", titel: "Five postcards from England", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>postcards on the class wall</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-intro-karten.jpg\" width=\"1280\" height=\"853\" alt=\"Five photo postcards on a cork board in a classroom: steps up to ruins on a cliff, a flat boat on a river, an old Roman pool with stone columns, a lake between green hills and a road through the sea to a small island with a castle.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see on the postcards? Which place would you like to visit? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Read the five postcards. Don't stop at words you don't know. <span class="de">Lies die Postkarten einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen – manche erklärt der Wortspeicher unten.</span></p>` },
        { art: "lesetext", lesetext: { R: "u1-intro-karten-r", M: "u1-intro-karten-m" } },
        { art: "paare", id: "orte", tag: "Name the place", titel: "Which place is it?",
          lead: `Read the sentences. Match each sentence with the right place. <span class="de">Welcher Satz passt zu welchem Ort? Lies in den Postkarten nach.</span>`,
          paare: [["You can climb 199 steps to the ruins on a cliff here.", "Whitby"], ["You can go punting on the river in this city.", "Cambridge"], ["The Romans built something here.", "Bath"], ["This small town is in the Lake District.", "Keswick"], ["You can visit a little castle on this small island.", "Lindisfarne"]],
          hilfen: ["Lies zuerst nur die Überschriften der Postkarten und die Ortsnamen.", "Suche in jeder Postkarte ein Schlüsselwort: steps, punting, Romans, Lake District, castle.", "Ein Ort ist eine Insel, einer liegt im Lake District, einer hat römische Bäder."] },
        { art: "mc", id: "verstehen", tag: "Understanding", titel: "What do the postcards say?", lead: `Tick the correct answer. <span class="de">Es gibt drei Möglichkeiten.</span>`,
          fragen: [
            { q: "What is a punt?", o: ["a flat boat", "a long hill", "a kind of fish"], a: 0,
              e: "Rohan explains it: a punt is a flat boat, and you move it with a long pole." },
            { q: "Why is the water in Bath special?", o: ["It is hot, and it comes out of the ground.", "It is very cold and comes from the sea.", "It is green because of the Romans."], a: 0,
              e: "Hot water comes out of the ground in Bath – that's why the Romans built baths there." },
            { q: "What did Phoebe eat on the beach?", o: ["fish and chips", "ice cream", "sandwiches"], a: 0,
              e: "After the 199 steps, Phoebe and her family ate fish and chips on the beach." },
            { q: "What did Zac's family do on the hill?", o: ["They had a picnic at the top.", "They went punting.", "They visited a castle."], a: 0,
              e: "Zac writes: we walked up a hill and had a picnic at the top." }
          ] }
      ] },
      { kurz: "Details", ober: "Reading for details", titel: "Find the lines – and the verbs", teile: [
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`, lesetext: "u1-intro-karten-r",
          hilfen: ["Lies die Frage und suche den Namen oder den Ort in den Postkarten.", "Die Antwort steht immer in der Postkarte dieses Kindes oder Ortes.", "Rohan → Postkarte 2 · Bath → Postkarte 3 · Lindisfarne → Postkarte 5"],
          fragen: [
            { q: "What happened to Rohan on the river?", zeilen: [11, 11], e: "Rohan fell into the water.", tipp: "Look at Rohan's postcard." },
            { q: "What can visitors do at the old Roman bath?", zeilen: [14, 15], e: "You can't swim in it, but you can walk around it.", tipp: "Look at Zainab's postcard." },
            { q: "When can you drive to Lindisfarne?", zeilen: [21, 21], e: "You can only drive there at low tide.", tipp: "Look at Evie's postcard." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer.", lesetext: "u1-intro-karten-m",
          fragen: [
            { q: "Why did everybody laugh at Rohan?", zeilen: [14, 15], e: "Punting looks easy, but it isn't – Rohan fell into the water.", tipp: "Look at the end of Rohan's postcard." },
            { q: "What did Zainab's little sister want to do?", zeilen: [20, 21], e: "She wanted to put her feet in the water – but that isn't allowed.", tipp: "Look at the end of Zainab's postcard." },
            { q: "Why must you check the times before you go to Lindisfarne?", zeilen: [31, 33], e: "Twice a day, the sea covers the road to the island.", tipp: "Look at Evie's postcard." }
          ] },
        { art: "merke", kopf: "POSTCARDS IN THE SIMPLE PAST", html: `<p>The postcards tell you what happened in the holidays. So the verbs are in the <b>simple past</b>.</p><ul><li>Regular verbs get <b>-ed</b>: walk → <i>walked</i>, stay → <i>stayed</i>, visit → <i>visited</i></li><li>Many verbs are <b>irregular</b> – you must learn them. Find them in the postcards!</li></ul><p><span class="de">Regelmäßige Verben bekommen -ed, unregelmäßige haben eine eigene Form.</span></p>` },
        { art: "paare", id: "verben", tag: "Irregular verbs", titel: "Verb – simple past", foerder: FOERDER_SP,
          lead: `Match the verb with its simple past form. All the forms are in the postcards. <span class="de">Verbinde die Grundform mit der Vergangenheitsform. Alle Formen stehen in den Postkarten.</span>`,
          paare: [["go", "went"], ["eat", "ate"], ["take", "took"], ["fall", "fell"], ["drive", "drove"], ["build", "built"]],
          hilfen: ["Fang mit go an – die Form kennst du bestimmt.", "Lies Postkarte 4 von Zac: Dort stehen zwei der Formen.", "Rohan fiel ins Wasser (fall), die Römer bauten Bäder (build)."] }
      ] },
      { kurz: "Listening", ober: "Listening", titel: "The last weekend of the holidays", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>the first day back at school</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-intro-schule.jpg\" width=\"1280\" height=\"853\" alt=\"Two girls talk and laugh in a school corridor on the first day after the holidays; one tells a story with big hand movements.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who are the girls? What do you think – what did they do at the weekend? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">It's the first day back at school. Evie and Zainab talk about the last weekend of the summer holidays. <b>Read the questions first, then listen.</b> You can use “slower”. <span class="de">Erst die Fragen lesen, dann hören. Das Transkript siehst du erst, wenn du fertig bist.</span></p>` },
        { art: "mc", id: "vorher", tag: "Before you listen", titel: "Read first – then listen", lead: `Read the questions. Then listen to the conversation below and tick the answers. <span class="de">Es gibt drei Möglichkeiten.</span>`,
          fragen: [
            { q: "What happened to Evie's sandcastle in the evening?", o: ["The sea came in, and it was gone.", "A dog ran over it.", "Evie's cousin took it home."], a: 0,
              e: "In the evening the sea came in – and the castle was gone." },
            { q: "Who helped Zainab's family with the kite?", o: ["a man with a long ladder", "a police officer", "Evie's cousin"], a: 0,
              e: "The kite was in a tree, and a man with a long ladder helped them." }
          ] },
        { nur: "R", art: "hoertext", id: "wochenende", tag: "🎧 Listening", hoertext: "u1-intro-weekend-r", fragen: [
          { art: "tf", id: "wochenende-tf", titel: "True or false?", lead: `Listen and decide: true or false? <span class="de">Richtig oder falsch? Hör so oft zu, wie du willst.</span>`,
            hilfen: ["Lies die Sätze zuerst und unterstreiche im Kopf: Wer? Was? Wann?", "Evie spricht über Samstag, Zainab über Sonntag.", "Achte auf Zahlen und Wochentage: second, Sunday."],
            aussagen: [
              ["Evie and her cousin built a sandcastle with four towers.", true],
              ["Evie and her cousin won first prize.", false],
              ["The prize was two big ice creams.", true],
              ["Zainab went to the kite festival on Saturday.", false],
              ["Zainab's dad bought a kite.", true],
              ["It was sunny all afternoon at the festival.", false]
            ] }
        ] },
        { nur: "M", art: "hoertext", id: "wochenende", tag: "🎧 Listening", hoertext: "u1-intro-weekend-m", fragen: [
          { art: "tf", id: "wochenende-tf", titel: "True or false?", lead: "Listen and decide: true or false?",
            aussagen: [
              ["More than thirty teams took part in the competition.", true],
              ["Evie and her cousin won first prize.", false],
              ["The winners made a sea monster out of sand.", true],
              ["Zainab's family brought their own kite from home.", false],
              ["The kite flew into a tree after ten minutes.", true],
              ["Zainab's family stayed at the festival until the evening.", false]
            ] },
          { art: "offen", id: "typisch", m7: true, tag: "Challenge · Your words", titel: "A typical English weekend?", lead: "Answer in English. One sentence is enough.",
            fragen: [{ q: "Evie says it was \"a typical English weekend\". What does she mean?", m: "She means that in England there is often wind and rain – even in the summer holidays.", k: ["weather|rain|wind|sun|wet|change|changes", "england|english|typical|often|always|a lot|one weekend"], min: 2 }],
            tipp: "Think about the weather on Saturday and on Sunday. Start like this: She means that the weather …" }
        ] }
      ] },
      { kurz: "Your turn", ober: "Speaking and writing", titel: "Would you like to go there?", teile: [
        { art: "text", html: `<p class="lead"><b>Partner game:</b> Choose one of the five places. Describe it in two sentences – but don't say the name. Your partner guesses the place. <span class="de">Beschreibe einen Ort in zwei Sätzen, ohne den Namen zu sagen. Deine Partnerin oder dein Partner rät.</span></p><p><i>Example: There is an island. You can only drive there at low tide. – Is it Lindisfarne?</i></p>` },
        { art: "merke", kopf: "SAY WHAT YOU WOULD (NOT) LIKE", html: `<p><b>I'd like to</b> go punting <b>because</b> it sounds fun.<br><b>I wouldn't like to</b> walk up 199 steps <b>because</b> it's too hard.</p><p>Good words: <i>fun, exciting, interesting, beautiful, boring, scary, too hard, too cold</i>. <span class="de">I'd like to = ich würde gern · I wouldn't like to = ich würde nicht gern · because = weil</span></p>` },
        { nur: "R", art: "offen", id: "vorlieben", tag: "Your words", titel: "What would you like to do?",
          lead: `Write <b>two sentences</b>: one thing from the postcards you would like to do and one thing you wouldn't like to do. Say why. <span class="de">Ein Satz mit I'd like to … because …, ein Satz mit I wouldn't like to … because …</span>`,
          fragen: [{ q: "What would you like to do – and what wouldn't you like to do? Why?", m: "I'd like to go punting because it sounds fun. I wouldn't like to walk up 199 steps because it is too hard.", k: ["would like|'d like|’d like|want to|love to|like to", "wouldn't|would not|don't want|do not want|not", "because"], min: 3 }],
          tipp: "Start like this: I'd like to … because … I wouldn't like to … because …",
          hilfen: ["Such dir zwei Aktivitäten aus: punting, a picnic on a hill, a boat trip, fish and chips, the 199 steps, the castle.", "Satz 1: I'd like to + Aktivität + because + Grund.", "Satz 2: I wouldn't like to + Aktivität + because + Grund (boring, too hard, scary …)."] },
        { nur: "M", art: "offen", id: "vorlieben", tag: "Your words", titel: "What would you like to do?",
          lead: "Write <b>two or three sentences</b>: what would you like to do on these holidays – and what wouldn't you like to do? Give reasons.",
          fragen: [{ q: "What would you like to do – and what wouldn't you like to do? Why?", m: "I'd like to visit Lindisfarne because I love islands and castles. I wouldn't like to go punting because I don't want to fall into the water.", k: ["would like|'d like|’d like|want to|love to|like to", "wouldn't|would not|don't want|do not want|not", "because"], min: 3 }],
          tipp: "Use I'd like to … because … and I wouldn't like to … because …" },
          { art: "text", html: "<p class=\"lead\">Look at the picture: <b>postcards from Bavaria</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-intro-bayern.jpg\" width=\"1280\" height=\"853\" alt=\"A postcard stand at a kiosk in a Bavarian village: picture postcards of a castle in the forest, a lake with a little church, snowy mountains and an old town square; a girl takes out a postcard.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Which postcard would you choose for the class wall? What could you write on it? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "offen", id: "postkarte", m7: true, tag: "Challenge · Your words", titel: "A postcard from Bavaria",
          lead: `Imagine a day out in Bavaria. Write <b>two sentences</b> for the class wall – in the <b>simple past</b>. <span class="de">Stell dir einen Ausflug in Bayern vor und schreibe zwei Sätze in der Vergangenheit, zum Beispiel: Yesterday we went …</span>`,
          fragen: [{ q: "Write two sentences about a day out in Bavaria. Use the simple past.", m: "Yesterday we went to a lake in the mountains. We swam in the cold water and ate a big ice cream.", k: ["went|walked|visited|saw|ate|swam|climbed|played|had|took|stayed|drove|was|were|bought|watched|made", "yesterday|last|we|i|my|in the morning|in the afternoon|on saturday|on sunday"], min: 2 }],
          tipp: "Use verbs in the simple past: went, visited, swam, ate, walked … Start like this: Yesterday we went …" }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Five places in England", lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Cambridge is in the west of England.", false],
            ["Zac's family took a boat across a lake.", true],
            ["Lindisfarne is a big island in the south of England.", false],
            ["Three of the five places are in the north of England.", true],
            ["Rohan went punting with his mum.", false],
            ["All five students wrote about their summer holidays.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You know five holiday places in England, you understand a conversation about a weekend, and you can say what you would like to do – and why." }
  });
})();
