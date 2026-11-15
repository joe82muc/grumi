/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · More about: Northern Ireland today (Kürzel C17)
   (einen Sachtext in Abschnitten lesen, Überschriften den Abschnitten zuordnen, Einzelheiten und Textstellen finden, Zahlen und
   Jahre im Text erklären, Worterklärungen, Meinung und Wünsche sagen, Grenzen und Frieden in Europa vergleichen, some/any/no
   im Kontext)
   Buchprinzip (BUCH-UNIT3, Abschnitt „More about“): Sachtext in Abschnitten mit Zwischenüberschriften → Fragen zu jedem Abschnitt
   besprechen (Wo liegt es? Was ist besonders? Warum eine schwere Zeit? Was ist heute positiv?) → Kasten mit Worterklärungen.
   Im Buch nur diese eine Aufgabe, kein Niveausymbol. Hier besser: Lesestrategie (überfliegen, Zahlen und Jahre lesen),
   Überschriften zuordnen (eine zu viel), Sofort-Rückmeldung bei jeder Frage, Textstellen finden (beleg), Zahlen und Jahre
   erklären (paare), Worterklärungen als Zuordnung, Sprechen mit Satzanfängen (R7 sofort sichtbar, M7 als Tipp) und
   KI-Hinweis, Vergleich mit Europa (M7), Station „Language“ mit Förder-Link.
   Grammatik: keine neue; some/any/no im Kontext (G9, Topic 2 – Wiederholung); der Text steht im simple present und simple past.
   Wortschatz „More about“ (island, Catholic, Protestant, religion, to die, since, then, sign, type, trouble) und peace,
   agreement, tourist.
   LehrplanPLUS E7 1.1 Leseverstehen (Abschnitte, Überschriften, Einzelheiten), E7 2 Sprechen (Meinung mit Begründung, vergleichen),
   E7 5 Landeskunde Nordirland, E7 Grammatik some/any/no.
   Texte: „Northern Ireland today“ (texte/u3/u3-more-ni-r.js und -m.js; R7 244 Wörter, M7 354 Wörter, jeweils fünf Abschnitte
   „Part 1 – … Part 5 –“ ohne Überschriften). Eigener Sachtext ohne erfundene Personen. Sachaussagen allgemein und sicher
   (Nordirland gehört zum Vereinigten Königreich, Hauptstadt Belfast; Giant's Causeway mit Tausenden Steinsäulen; Titanic in
   Belfast gebaut, 1912 gesunken; die Troubles ab den späten 1960er-Jahren bis 1998 ohne Einzelheiten; Good Friday Agreement 1998;
   peace walls teils noch da; gemeinsamer Sport; viele Touristen). Keine Schuldzuweisung.
   Förder-Links: some/any/no → unit3/extra/some-any.html.
   Sprechen: offen (Stichwortprüfung, KI gibt einen Hinweis). m7: Vergleich Grenzen/Frieden in Europa und „mostly peaceful“
   erklären; für 7R freiwillig.
   // BILDER:
   // 1. Station 1 (Vorentlastung, Sprechanlass): die Nordküste von Nordirland – viele dicht stehende sechseckige Steinsäulen
   //    wie Treppenstufen am Meer, Wellen, ein paar Besucher in Regenjacken – ohne lesbare Schrift.
   // 2. Station 2 (Part 2): eine Werft mit einem großen Schiffsrumpf auf dem Gerüst, Kräne, Arbeiter in Helmen, Anfang des
   //    20. Jahrhunderts, Schwarz-Weiß-Look – ohne lesbare Schrift, kein Logo.
   // 3. Station 3 (Sprechen): zwei Kinder in verschiedenen Vereinstrikots passen sich auf einem Sportplatz den Ball zu; im
   //    Hintergrund eine lange Wand mit bunten Wandbildern zwischen zwei Straßen. */
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
        return [Object.assign({}, t, { nur: "R" }), m];
      });
    });
    return stationen;
  }

  const SOMEANY = { href: "unit3/extra/some-any.html", text: "Extra: some, any oder no?" };

  D7Kit.seite({
    id: "u3-more",
    titel: "More about: Northern Ireland today",
    einleitung: "Stone columns by the sea, a famous ship, a sad time and a new start: you read a text about Northern Ireland in five parts. You find the right headings, explain years and numbers, say what you think – and use some, any and no.",
    zeit: "etwa 40 Minuten",
    ziele: ["📖 I find the right heading for each part of a text.", "🔎 I find details, years and the lines that show them.", "🗣️ I say why peace is important and what I would like to see.", "✅ I use some, any and no."],
    thema: "Unit 3 Welcome to Ireland: More about (Northern Ireland)",
    quiz: { profi: "Ireland pro" },
    glossar: {
      peace: ["peace", "Peace heißt Frieden. Wenn Frieden ist, kämpfen die Menschen nicht gegeneinander."],
      agreement: ["agreement", "Ein agreement ist eine Vereinbarung. Zwei Seiten entscheiden etwas gemeinsam."],
      religion: ["religion", "Religion ist der Glaube der Menschen, zum Beispiel das Christentum. Catholic und Protestant sind zwei Gruppen von Christen."],
      troubles: ["the Troubles", "The Troubles ist der Name für eine lange, traurige Zeit in Nordirland, mit Streit und Gewalt."],
      tourist: ["tourist", "Ein tourist ist eine Person, die einen Ort im Urlaub besucht."],
      causeway: ["Giant's Causeway", "Der Giant's Causeway ist ein berühmter Küstenstreifen in Nordirland mit Tausenden Steinsäulen."],
      island: ["island", "Eine island ist eine Insel. Sie ist von Wasser umgeben."]
    },
    haupttext: { R: "u3-more-ni-r", M: "u3-more-ni-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "A trip to Northern Ireland", teile: [
        { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-more-kueste.jpg\" width=\"1280\" height=\"853\" alt=\"Thousands of stone columns form steps down into the sea; visitors in rain jackets walk on them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>the north coast of Northern Ireland</b>, with thousands of stone columns by the sea. <span class=\"de\">Sieh dir die Küste an: Tausende Steinsäulen am Meer.</span></p><p>What can you see? What is special about the stones? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Northern Ireland is a small country with a beautiful coast, a big city and a long, hard history. Today you read a text about it. <span class="de">Nordirland ist ein kleines Land mit einer schönen Küste, einer großen Stadt und einer langen, schweren Geschichte. Du liest einen Sachtext darüber.</span></p><p>The text is true. You can find <button class="term" data-t="causeway">the Giant's Causeway</button> and the city of Belfast on a map. <span class="de">Der Sachtext ist wahr. Du findest den Giant's Causeway und Belfast auf einer Karte.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. ${D("Diese Wörter brauchst du im Text. Tippe auf ein englisches Wort und dann auf seine Bedeutung.")}`,
          paare: [["island", "Insel"], ["Catholic", "katholisch"], ["Protestant", "protestantisch"], ["religion", "Religion"], ["to die", "sterben"], ["since", "seit"]],
          hilfen: ["Fang mit den Wörtern an, die du schon erkennst.", "Catholic und Protestant sind zwei Gruppen, die zu einer Religion gehören.", "Tippe zuerst since: Es sagt, ab wann etwas so ist."] },
        { art: "merke", kopf: "READING TIP", html: `<p>A text about a country is often divided into <b>parts</b>. Each part has its own <b>heading</b>. To find the right heading, <b>skim</b> the part first: read the first sentence and look for <b>key words</b> and <b>years</b>.</p><p>Years and numbers often tell you <b>when</b> something happened or <b>how many</b>. <span class="de">Überfliege einen Abschnitt zuerst. Jahreszahlen und Zahlen sagen dir, wann etwas war oder wie viele es sind.</span></p>` }
      ] },
      { kurz: "The text", ober: "Reading", titel: "Read about Northern Ireland", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a shipyard long ago</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-more-werft.jpg\" width=\"1280\" height=\"853\" alt=\"An old black-and-white picture: a huge ship hull in a steel frame in a shipyard, cranes and many small workers.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What are the workers building? How big is it? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Read the text. It has five parts, but the headings are missing. <span class="de">Lies den Text. Er hat fünf Teile, die Überschriften fehlen noch.</span></p>` },
        { art: "lesetext", lesetext: { R: "u3-more-ni-r", M: "u3-more-ni-m" } },
        { art: "luecke", id: "ueberschriften", tag: "Headings", titel: "Which heading fits which part?",
          lead: `Choose the right heading for each part. One heading is extra. ${D("Eine Überschrift bleibt übrig. Tipp: Überfliege jeden Teil und such die wichtigen Wörter.")}`,
          absaetze: [
            ["Part 1: ", { g: "A small country on an island" }],
            ["Part 2: ", { g: "Stones and a famous ship" }],
            ["Part 3: ", { g: "Years of trouble" }],
            ["Part 4: ", { g: "A promise of peace" }],
            ["Part 5: ", { g: "Walls, clubs and visitors" }]
          ], extra: ["Food and farms"],
          hilfen: ["Lies von jedem Teil nur den ersten Satz und die wichtigsten Wörter.", "Teil 3 spricht von einer traurigen Zeit, Teil 4 von einem Jahr, in dem etwas unterschrieben wird.", "Teil 5 spricht von heute. Eine Überschrift passt zu keinem Teil: Es geht nicht um Essen oder Bauernhöfe."] },
        { nur: "R", art: "mc", id: "verstehen", tag: "Understanding", titel: "What does the text say?",
          lead: `Tick the correct answer. ${D("Es gibt vier Möglichkeiten.")}`,
          fragen: [
            { q: "Where is Northern Ireland?", o: ["In the north of the island of Ireland", "In the south of England", "On an island near Spain", "In the middle of Scotland"], a: 0,
              e: "Northern Ireland is a small country in the north of the island of Ireland." },
            { q: "What do the words \"the Troubles\" mean in the text?", o: ["A sad time with a lot of fighting", "A famous football team", "A new school", "A walk by the sea"], a: 0,
              e: "\"The Troubles\" is the name for the sad years of fighting in Northern Ireland." },
            { q: "Why did people fight?", o: ["They had different wishes for the country.", "They wanted the same things.", "They could not find the sea.", "They did not like ships."], a: 0,
              e: "Some people wanted to stay in the United Kingdom, other people wanted to be part of Ireland." },
            { q: "Why do tourists come to Northern Ireland today?", o: ["To see the coast, the stones and the Titanic museum", "To go skiing in the mountains", "To visit a big castle in London", "To watch a big football match"], a: 0,
              e: "Tourists come to see the sea, the stones and the museum about the Titanic." },
            { q: "What is the best title for the whole text?", o: ["Northern Ireland: yesterday and today", "A day at the beach", "How to build a ship", "My school in Belfast"], a: 0,
              e: "The text tells you about Northern Ireland: the landscape, the sad past and the peaceful present." }
          ] },
        { nur: "M", art: "mc", id: "verstehen", tag: "Understanding", titel: "What does the text say?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "What is the Republic of Ireland?", o: ["A different country on the same island", "A part of Northern Ireland", "A city in the north", "A ship from Belfast"], a: 0,
              e: "The rest of the island is a different country, the Republic of Ireland." },
            { q: "What does the text say about the Troubles?", o: ["They were a long, sad time, but not only about religion.", "They were only about two football teams.", "They lasted one year.", "They were a happy time."], a: 0,
              e: "The Troubles lasted many years, and the conflict was not only about religion." },
            { q: "What did the two groups want?", o: ["One group wanted to stay in the United Kingdom, the other wanted to join Ireland.", "Both groups wanted to leave Europe.", "Both groups wanted a new capital.", "One group wanted a new language."], a: 0,
              e: "Some people wanted Northern Ireland to stay in the United Kingdom, but other people wanted it to join Ireland." },
            { q: "Why were the peace walls built?", o: ["To keep people apart", "To stop the sea", "To show pictures to tourists", "To build ships behind them"], a: 0,
              e: "The text says that the peace walls were built to keep people apart." },
            { q: "What is the best title for the whole text?", o: ["Northern Ireland: a hard past and a peaceful present", "How to sail across the sea", "A holiday in the sun", "Famous football players"], a: 0,
              e: "The text looks at the landscape, the sad years and the peaceful present." }
          ] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?",
          lead: `Tap the lines in the text. ${D("Tippe die Zeilen an, in denen die Antwort steht.")}`, lesetext: "u3-more-ni-r",
          fragen: [
            { q: "What do the columns at the Giant's Causeway look like?", zeilen: [5, 6], e: "Thousands of stone columns stand by the sea, and many have six sides.", tipp: "Look at Part 2." },
            { q: "Why was it a sad time?", zeilen: [15, 16], e: "Many people were hurt or died.", tipp: "Look at the end of Part 3." },
            { q: "What do many children do together today?", zeilen: [21, 22], e: "Many children go to clubs and play sport together.", tipp: "Look at Part 5." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?",
          lead: `Tap the lines in the text.`, lesetext: "u3-more-ni-m",
          fragen: [
            { q: "What is the Giant's Causeway today?", zeilen: [10, 11], e: "Today it is a World Heritage Site.", tipp: "Look at the middle of Part 2." },
            { q: "What did the leaders promise in the peace agreement?", zeilen: [25, 26], e: "They promised to solve their problems with talking instead of violence.", tipp: "Look at Part 4." },
            { q: "Who are often friends today?", zeilen: [33, 34], e: "Catholic and Protestant children are often friends.", tipp: "Look at the middle of Part 5." }
          ] },
        { nur: "R", art: "paare", id: "zahlen", tag: "Years and numbers", titel: "What do the numbers mean?",
          lead: `Match the year or number with what it tells you. ${D("Verbinde die Zahl oder das Jahr mit der Bedeutung im Text.")}`,
          paare: [["1912", "the year when the Titanic sank"], ["the late 1960s", "the time when the Troubles began"], ["1998", "the year of the Good Friday Agreement"], ["thousands", "a very big number of stone columns"], ["six", "the number of sides of many columns"]],
          hilfen: ["Fang mit der Zahl an, die du sicher weißt.", "Zwei Jahreszahlen gehören zu einem Schiff und zu einem Friedensabkommen.", "Tippe 📖 Text und such die Jahreszahl im Text."] },
        { nur: "M", art: "paare", id: "zahlen", tag: "Years and numbers", titel: "What do the numbers mean?",
          lead: `Match the year or number with what it tells you.`,
          paare: [["1912", "the year when the Titanic sank"], ["the late 1960s", "the time when the Troubles began"], ["about thirty years", "how long the Troubles lasted"], ["1998", "the year of the Good Friday Agreement"], ["thousands", "a very big number of stone columns"]],
          hilfen: ["Fang mit der Zahl an, die du sicher weißt.", "Zwei Angaben beschreiben die Troubles: wann sie begannen und wie lange sie dauerten.", "Tippe 📖 Text und such die Jahreszahl im Text."] },
        { art: "paare", id: "wortkasten", tag: "Word box", titel: "What do the words mean?",
          lead: `Match each word with its explanation. ${D("Verbinde das Wort mit der englischen Erklärung.")}`,
          paare: [["peace", "a time without war or fighting"], ["agreement", "a decision that two sides make together"], ["religion", "what people believe in"], ["tourist", "a person who visits a place on holiday"], ["to sign", "to write your name on a piece of paper"]],
          hilfen: ["Fang mit dem Wort an, das du schon kennst.", "Eine Erklärung sagt, dass man seinen Namen auf ein Papier schreibt.", "Tippe 📖 Text und suche das Wort im Text."] }
      ] },
      { kurz: "Talk about it", ober: "Speaking", titel: "Talk about Northern Ireland", teile: [
        { art: "text", html: `<p class="lead">Now you say what you think. First <b>say</b> your answers to a partner. Then <b>write</b> them down – in your own words. <span class="de">Sprich erst mit einem Partner, dann schreib deine Antworten auf. Die KI gibt dir einen Hinweis.</span></p>` },
        { nur: "R", art: "merke", kopf: "USEFUL SENTENCES", html: `<p>Peace is important because …<br>I would like to visit … because …<br>In a peaceful country, children can …<br>I think … is interesting.</p>` },
        { art: "offen", id: "frieden", tag: "Your opinion", titel: "Why is peace important?",
          lead: `Say why peace is important. Give a reason. ${D("Sage, warum Frieden wichtig ist. Nenne einen Grund.")}`,
          fragen: [{ q: "Why is peace important?", m: "Peace is important because people can be safe and children can play together.", k: ["safe|friend|together|happy|fight|war|hurt|die|afraid|scared|free|live|school|play", "because|so|as|that's why|when|if|can"], min: 2 }],
          tipp: "Start like this: Peace is important because …" },
        { art: "offen", id: "besuchen", tag: "Speaking", titel: "What would you like to visit?",
          lead: `Which place in Northern Ireland would you like to visit? Say why. ${D("Welchen Ort in Nordirland möchtest du besuchen? Sage, warum.")}`,
          fragen: [{ q: "What would you like to visit in Northern Ireland? Why?", m: "I would like to visit the Giant's Causeway because I want to see the stone columns by the sea.", k: ["would like|'d like|want|prefer|like to|visit|go to|see", "Causeway|stones|columns|Belfast|Titanic|museum|coast|sea|city", "because|as|since|so"], min: 3 }],
          tipp: "Start like this: I would like to visit … because …" },
        { art: "offen", id: "frieden-heute", m7: true, tag: "Challenge · Compare", titel: "Borders and peace in Europe",
          lead: `In Europe you can travel from many countries to their neighbours without a border check. Compare this with the peace walls in Belfast. What is the same? What is different? Write two or three sentences.`,
          fragen: [{ q: "How are borders in Europe today and peace walls different or the same?", m: "Both borders and peace walls separate places, but today you can often cross a border in Europe without a problem, while a wall keeps people apart. Both can show that people once had problems.", k: ["wall|border|line|separate|keep apart|divide|between", "open|cross|travel|without|can go|friends|together|today|but|different|whereas|while|both|same"], min: 2 }],
          tipp: "Use: Both … · … but … · The difference is … · In Europe you can …" },
        { art: "offen", id: "fast-friedlich", m7: true, tag: "Challenge · Explain", titel: "Why \"mostly\" peaceful?",
          lead: `The text says that the country has been \"mostly peaceful\". Why does the writer say \"mostly\" and not just \"peaceful\"? Answer in one or two sentences.`,
          fragen: [{ q: "Why does the writer say \"mostly peaceful\"?", m: "Because life is not perfect and some old worries have not disappeared.", k: ["not perfect|problem|worr|still|some|not everything|not all|not everyone|trouble|disappear|not completely"], min: 1 }],
          tipp: "Look at Part 4 and Part 5 again: Is everything perfect today? What is still there?" }
      ] },
      { kurz: "Language", ober: "some, any or no?", titel: "Some, any and no in Northern Ireland", teile: [
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<p>Look at these sentences about Northern Ireland:<br><i>There are <u>some</u> stones by the sea.</i> (a few – in positive sentences)<br><i>Are there <u>any</u> tourists in the museum?</i> (questions)<br><i>There are <u>no</u> trains in the park.</i> (= not any)</p><ul><li><b>some</b>: positive sentences and offers (<i>Would you like some tea?</i>).</li><li><b>any</b>: questions and negative sentences (<i>There aren't any …</i>).</li><li><b>no</b> = <b>not any</b>. <b>something / anybody / nobody</b> follow the same rules.</li></ul><p><span class="de">Im positiven Satz steht some, in Fragen und verneinten Sätzen steht any. No heißt „kein“ und ersetzt not … any.</span></p>` },
        { art: "markieren", id: "any", tag: "Find it", titel: "Which word goes with n't?", foerder: SOMEANY,
          finde: "the word for negative sentences", toleranz: 0,
          satz: "There aren't [[any]] free seats on the bus.",
          e: "In a negative sentence we use any: There aren't any free seats.",
          hilfen: ["Das Wort steht nach aren't und vor dem Nomen.", "Es ist das Wort für negative Sätze und Fragen.", "Die Lösung hat drei Buchstaben: any."] },
        { art: "luecke", id: "some-any", tag: "Sentences", titel: "Complete the sentences",
          lead: `Complete the sentences with the right word. One word is extra. ${D("Achte auf positiv, Frage oder negativ. Ein Wort bleibt übrig.")}`,
          foerder: SOMEANY,
          absaetze: [
            ["There are ", { g: "some" }, " stone columns by the sea."],
            ["Are there ", { g: "any" }, " tourists in Belfast today?"],
            ["There are ", { g: "no" }, " walls in my street. It is open and friendly."],
            ["I can't see ", { g: "anything" }, " in the fog."],
            ["", { g: "Somebody" }, " is waiting for you at the museum. It's your aunt."]
          ], extra: ["nobody"],
          hilfen: ["Lies zuerst, ob der Satz positiv, eine Frage oder negativ ist.", "In Fragen und nach can't steht any (oder anything).", "In einem positiven Satz steht some (oder somebody)."] },
        { art: "mc", id: "some-check", tag: "Check", titel: "Which sentence is correct?", foerder: SOMEANY,
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Which sentence is correct?", o: ["There aren't any peace walls in our town.", "There aren't some peace walls in our town.", "There isn't no peace wall in our town.", "There are any peace walls in our town."], a: 0,
              e: "In a negative sentence we use any: There aren't any … (oder: There are no …)." },
            { q: "Mum has made ____ biscuits. Would you like one?", o: ["some", "any", "no", "anything"], a: 0,
              e: "In a positive sentence we use some: Mum has made some biscuits." }
          ] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { nur: "R", art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? ${D("Richtig oder falsch?")}`,
          aussagen: [
            ["The capital of Northern Ireland is Belfast.", true],
            ["The Titanic was built in Belfast.", true],
            ["The Troubles were a happy time.", false],
            ["The peace agreement was signed in the 1960s.", false],
            ["There are no peace walls in Belfast today.", false],
            ["Children often go to clubs together.", true]
          ] },
        { nur: "M", art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false?`,
          aussagen: [
            ["Northern Ireland belongs to the United Kingdom.", true],
            ["The Republic of Ireland is on a different island.", false],
            ["The Troubles lasted about thirty years.", true],
            ["The conflict was only about religion.", false],
            ["All the peace walls have already gone.", false],
            ["Tourists visit the Giant's Causeway and the Titanic museum.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a text in parts, explain years and numbers and say what you think. Next: more about Unit 3." }
  });
})();
