/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Presentation skills: A place in Wales or Scotland
   (ein Muster-Plakat lesen, Stichwortzettel zuordnen, in vier Schritten eine Präsentation aufbauen – Einleitung, Details, weitere
   Fakten mit Fragen an die Zuhörer, Schluss –, Redemittel, going to für die Ankündigung, Tipps zum Vortragen, dann die eigene
   Stichwortkarte, Einleitung und Schluss schreiben und laut üben)
   Buchprinzip (BUCH-UNIT2, Abschnitt Presentation skills): Muster-Plakat einer Stadt mit Überschrift, Einleitung und Stichwortzetteln
   (People, Weather, Culture, Sport, Other facts) -> drei Schritte mit Beispiel und Tipp (1 Einleitung, 2 Details, 3 weitere Fakten und
   Zuhörer einbeziehen) -> Tipps: Klasse ansehen, langsam und deutlich sprechen, Fotos zeigen, schwierige Namen üben, vorher üben.
   Hier mit eigenem Plakat über Conwy (Nordwales); besser: ein vierter Schritt „The ending“ (Zusammenfassung, Danke, Fragen der
   Zuhörer), Redemittel zum Einsetzen, gute und schlechte Einleitung erkennen, Frage im present perfect an die Zuhörer,
   Stichwortkarte, Schreibtrainer mit KI-Rückmeldung für Einleitung und Schluss, Selbst- und Partner-Checkliste, Förder-Link zu going to.
   LehrplanPLUS E7 Sprechen (zusammenhängend vortragen, Präsentation), E7 Schreiben (Stichwortkarte, Einleitung, Schluss),
   E7 Leseverstehen (Plakat mit Stichwortzetteln), E7 Grammatik going to (G5) und present perfect (Frage an die Zuhörer, G7),
   E7 Landeskunde Wales.
   Texte: „Conwy – a small town with a big castle“ (texte/u2/u2-pres-conwy-r.js, -m.js; R7 153 Wörter, M7 271 Wörter). Conwy gibt es
   wirklich (Burg, Stadtmauer, Hafen, Muscheln, kleines Haus am Hafen, drei Brücken); die Vortragende „Cerys“ ist erfunden. Nur sichere
   Fakten, die einzige Zahl ist „more than 700 years“.
   Förder-Link: going to -> unit2/extra/going-to.html.
   Eigene Präsentation: schreiben (R7 40, M7 60 Wörter für Einleitung und Schluss; dazu eine Stichwortkarte). Die KI schreibt nie
   den Text für das Kind.
   m7: zwei Aufgaben (Zahlen und Zuhörer erklären, Tipp begründen); für 7R freiwillig.
   // BILDER:
   // 1. Station 1 (Vorentlastung, Sprechanlass): eine mittelalterliche Burg mit Türmen am Wasser, davor ein kleiner Hafen mit Booten
   //    und eine Stadtmauer, auf der zwei Besucher gehen – Landschaft in Nordwales, ohne lesbaren Text.
   // 2. Station 2 (Plakat): ein Pinnbrett mit fünf kleinen farbigen Zetteln und drei Fotos, ein Mädchen steht davor und zeigt mit
   //    einem Stift auf einen Zettel – Zettel nur mit Strichen statt Text.
   // 3. Station 6 (eigene Präsentation): ein Junge steht vor seiner Klasse und hält Stichwortkarten in der Hand, die Klasse hört
   //    zu, ein Mädchen hebt die Hand für eine Frage. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist
  const D = s => ` <span class="de">${s}</span>`;
  // ein Teil in zwei Fassungen mit derselben Kennung: R7 mit deutscher Hilfe (und mehr Hilfen), M7 knapper
  function zwei(basis, en, de, o) {
    o = o || {};
    const r = Object.assign({}, basis, { nur: "R", lead: en + D(de) });
    const m = Object.assign({}, basis, { nur: "M", lead: en + (o.mDe ? D(o.mDe === true ? de : o.mDe) : "") });
    if (o.hilfenR) r.hilfen = o.hilfenR;
    if (o.hilfenM) m.hilfen = o.hilfenM;
    return [r, m];
  }

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

  const GOING = { href: "unit2/extra/going-to.html", text: "Extra: going to" };

  D7Kit.seite({
    id: "u2-presentation",
    titel: "Presentation skills: A place in Wales or Scotland",
    einleitung: "Cerys made a poster about the town of Conwy in Wales. You read it, learn four steps for a good talk – <b>introduction, details, more facts, ending</b> – and then you prepare a short presentation about <b>your</b> place.",
    zeit: "etwa 45 Minuten",
    ziele: ["📌 I understand a poster with key-word notes.", "🗣️ I build a talk in four steps.", "✍️ I write an introduction and an ending.", "👂 I ask my listeners questions and give my talk with confidence."],
    thema: "Unit 2 Fun in Wales and Scotland: Presentation skills (einen Ort vorstellen)",
    quiz: { profi: "Presentation pro" },
    glossar: {
      castle: ["castle", "Burg: Das ist ein großes, altes Gebäude mit dicken Mauern und Türmen."],
      wall: ["town wall", "Die Stadtmauer: Sie geht rund um die alte Stadt. An manchen Stellen kann man oben darauf gehen."],
      harbour: ["harbour", "Der Hafen: Dort liegen Boote und Schiffe."],
      mussels: ["mussels", "Muscheln: Man kann sie essen. Sie wachsen im Meer."],
      visitors: ["visitors", "Besucher: Das sind Menschen, die eine Stadt anschauen und nicht dort wohnen."],
      keyword: ["key words", "Stichwörter: Das sind wenige wichtige Wörter, an die man sich beim Sprechen erinnert. Man schreibt sie auf eine kleine Karte."],
      introduction: ["introduction", "Die Einleitung: Am Anfang sagst du, worüber du sprichst, und gibst die wichtigsten Informationen."],
      listeners: ["listeners", "Die Zuhörer: Das sind die Menschen, die dir zuhören."],
      conwy: ["Conwy", "Das ist eine Stadt in Nordwales. Sie liegt am Meer und an einem Fluss. Die Vortragende Cerys in diesem Modul ist erfunden."]
    },
    haupttext: { R: "u2-pres-conwy-r", M: "u2-pres-conwy-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "A town with a castle", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a castle by the sea</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-pres-burg.jpg\" width=\"1280\" height=\"853\" alt=\"A medieval castle with towers at the water, a small harbour with boats and a town wall with two visitors.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where is this place? What do you know about it? What would you tell a visitor? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Today you give a short talk about a place. First look at an example: Cerys talks about <button class="term" data-t="conwy">Conwy</button>, a small town by the sea in the north of Wales. <span class="de">Cerys ist erfunden, die Stadt Conwy gibt es wirklich.</span></p><p>Do you know a castle or a harbour? What would you show your classmates there?</p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du für das Plakat. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["castle", "Burg"], ["town wall", "Stadtmauer"], ["harbour", "Hafen"], ["mussels", "Muscheln"], ["bridge", "Brücke"], ["visitor", "Besucher, Besucherin"]],
          hilfen: ["Fang mit den Wörtern an, die du schon kennst.", "Drei Wörter haben mit Wasser und Booten oder Wegen über das Wasser zu tun.", "Tippe zuerst bridge und suche das Wort für den Weg über den Fluss."] }
      ] },
      { kurz: "The poster", ober: "Reading", titel: "Read the poster", teile: [
        { art: "text", html: `<p class="lead">Read Cerys's poster. Each note tells you one kind of information. <span class="de">Lies das Plakat einmal ganz durch. Jeder Zettel gibt eine andere Art von Information.</span></p>` },
        { art: "lesetext", lesetext: { R: "u2-pres-conwy-r", M: "u2-pres-conwy-m" } },
        { art: "sort", id: "zettel", tag: "Key-word notes", titel: "Which note is it?",
          lead: `Put each key-word note into the right box. <span class="de">Auf dem Plakat stehen fünf Zettel. Zu welchem gehört der Stichpunkt?</span>`,
          buckets: ["People", "Weather", "Culture", "Sport", "Other facts"],
          items: [{ t: "friendly, speak Welsh and English", b: 0 }, { t: "wet and windy, mild summer", b: 1 }, { t: "castle, town wall, three bridges", b: 2 },
                  { t: "sailing, fishing, walking", b: 3 }, { t: "famous for mussels", b: 4 }, { t: "a tiny house on the harbour", b: 4 }, { t: "visitors come in summer", b: 0 }, { t: "take a coat", b: 1 }],
          hilfen: ["Lies zuerst die Namen der fünf Kästen.", "Fange mit dem Zettel an, der zum Wetter passt.", "Zwei Stichpunkte gehören zu „Other facts“ – es sind besondere Dinge, die in keinen anderen Kasten passen."] },
        ...zwei({ art: "beleg", id: "zeilen", tag: "Evidence from the poster", titel: "Where does the poster say that?" },
          "Tap the lines on the poster.", "Tippe die Zeilen an, in denen die Antwort steht.", { hilfenR: ["Lies die Frage und suche das passende Wort auf dem Plakat.", "Jede Antwort steht auf einem einzigen Zettel."] }).map((t, i) => Object.assign(t, i === 0
          ? { lesetext: "u2-pres-conwy-r", fragen: [
              { q: "What should you take to Conwy?", zeilen: [7, 8], e: "The weather is often wet and windy, so you should take a coat.", tipp: "Look at the weather note." },
              { q: "What can you do on the town wall?", zeilen: [10, 10], e: "You can walk on the wall.", tipp: "Look for the word wall on the culture note." },
              { q: "What is special about the tiny house?", zeilen: [14, 15], e: "It is one of the smallest houses in Britain.", tipp: "Look at the last note." }
            ] }
          : { lesetext: "u2-pres-conwy-m", fragen: [
              { q: "What should you take to Conwy? Why?", zeilen: [11, 13], e: "The weather can change quickly and it is often wet and windy, so you should take a coat.", tipp: "Look at the weather note." },
              { q: "What can you do on the town wall?", zeilen: [16, 17], e: "You can walk on parts of the wall.", tipp: "Look for the word wall on the culture note." },
              { q: "What is special about the tiny house?", zeilen: [24, 25], e: "It is one of the smallest houses in Britain.", tipp: "Look at the last note." }
            ] }))
      ] },
      { kurz: "Four steps", ober: "How to present", titel: "A talk in four steps", teile: [
        { art: "merke", kopf: "STEP 1 · THE INTRODUCTION", html: `<p>Say <b>what</b> you talk about and give the <b>basic information</b>: where is the place, what is it famous for? Don't use too many <b>numbers</b> and dates.</p><p><i>Hello! Today I'm going to tell you about Cardiff. It is the capital of Wales.</i></p><p>💡 <b>Tip:</b> Look at your class, be friendly and speak slowly and clearly. <span class="de">Schau die Klasse an, sei freundlich und sprich langsam und deutlich.</span></p>` },
        { art: "mc", id: "einleitung", tag: "Good or bad?", titel: "Which introduction is good?",
          lead: `Tick the best introduction. <span class="de">Welche Einleitung ist gut?</span>`,
          fragen: [
            { q: "Which introduction is the best?", o: ["Hello! Today I'm going to tell you about Conwy. It is a small town in the north of Wales, and it has a big castle.", "Conwy has 1,234 people, 17 shops, 9 streets, 5 bridges and 38 windows in 1 castle.", "Um … er … so … Conwy is a town. I think. I don't know much about it.", "(reads very fast from a piece of paper without looking at the class)"], a: 0,
              e: "Eine gute Einleitung nennt das Thema, den Ort und eine wichtige Information – freundlich und ohne Zahlenflut." }
          ] },
        { art: "tf", id: "zahlen", tag: "Facts and numbers", titel: "How many numbers?",
          lead: `True or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["In the introduction you give the basic facts: where the place is and what it is famous for.", true],
            ["A good introduction has as many numbers and dates as possible.", false],
            ["It is fine to say \"a very old castle\" if you don't know the exact year.", true],
            ["At the beginning you only look at your notes and not at the class.", false]
          ] },
        { art: "offen", id: "zahlen-warum", m7: true, tag: "Challenge · Your words", titel: "Why not too many numbers?",
          lead: `Answer in English. One sentence is enough. <span class="de">Antworte mit eigenen Worten.</span>`,
          fragen: [{ q: "Why are too many numbers a problem for your listeners?", m: "The listeners can't remember all the numbers, so it is boring and difficult for them.", k: ["listener|audience|class|people|they", "remember|boring|difficult|hard|too many|too much|forget|confus"], min: 2 }],
          tipp: "Think about a talk with only numbers. Start like this: The listeners can't …" },
        { art: "merke", kopf: "STEP 2 · MORE DETAILS", html: `<p>Say what people can <b>see and do</b> there. Use words that order your talk: <b>First …, Then …, Finally …</b> Show photos and repeat the important facts.</p><p><i>First, I'm going to show you the beach. Then I'm going to talk about the food.</i></p><p>💡 <b>Tip:</b> Practise difficult names before the talk – say them aloud three times. <span class="de">Schwierige Namen vorher üben.</span></p>` },
        { art: "luecke", id: "ablauf", tag: "Useful phrases", titel: "Order your talk",
          lead: `Complete the sentences with words from the box. <span class="de">Diese Wörter ordnen deinen Vortrag. Zwei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["Part 1: Today I'm going to ", { g: "tell" }, " you about Conwy."],
            ["Part 2: ", { g: "First" }, ", I'm going to talk about the castle."],
            ["Part 3: ", { g: "Then" }, " I'm going to talk about the harbour."],
            ["Part 4: ", { g: "Finally" }, ", I'm going to tell you about the tiny house."]
          ], extra: ["Never", "Because"],
          hilfen: ["Lies die Nummer vor jedem Satz: Part 1 kommt zuerst, Part 4 zuletzt.", "Ein Wort heißt „zuerst“, ein Wort „dann“ und ein Wort „zum Schluss“.", "Part 1 braucht ein Verb: Today I'm going to … you about Conwy."] },
        { art: "merke", kopf: "STEP 3 · MORE FACTS AND YOUR LISTENERS", html: `<p>Tell two or three more interesting facts and <b>ask your listeners a question</b>. Then they listen better.</p><p><i>Have you ever climbed a mountain? · Did you know that the sea is very cold there?</i></p><p>💡 <b>Tip:</b> Ask a question to get everybody's attention. <span class="de">Mit einer Frage hören alle besser zu.</span></p>` },
        { art: "mc", id: "zuhoerer", tag: "Ask your listeners", titel: "Which question is correct?",
          lead: `Tick the correct answer. <span class="de">Ein Satz ist richtig, die anderen haben einen Fehler.</span>`,
          fragen: [
            { q: "You want to ask your classmates about a visit to a castle. Which question is correct?", o: ["Have you ever been to a castle?", "Do you has been to a castle?", "Have you ever go to a castle?", "Did you ever been to a castle?"], a: 0,
              e: "Have you ever + 3. Form: Have you ever been …? So fragt man nach einer Erfahrung bis jetzt." },
            { q: "You want to tell a surprising fact. Which sentence is correct?", o: ["Did you know that people can walk on the old town wall?", "Did you knew that people can walk on the old town wall?", "You did know that people can walk on the old town wall?", "Did know you that people can walk on the old town wall?"], a: 0,
              e: "Did you know that …? Nach did steht die Grundform: know, nicht knew." }
          ],
          foerder: { href: "unit2/extra/have-has-questions.html", text: "Extra: have/has – Fragen" } },
        { art: "merke", kopf: "STEP 4 · THE ENDING", html: `<p>A talk needs an ending, too. Do three things:</p><ol><li><b>Sum up</b> in one sentence.</li><li>Say <b>thank you</b>.</li><li>Ask for <b>questions</b>.</li></ol><p><i>To sum up, my town is small, but very lively. Thank you for listening. Have you got any questions?</i></p>` },
        { art: "ordnen", id: "schluss", tag: "The ending", titel: "Put the ending in order",
          lead: `Put the sentences in the right order. <span class="de">So endet ein guter Vortrag: zuerst zusammenfassen, dann danken, dann Fragen zulassen.</span>`,
          schritte: ["To sum up, Conwy is a small town with a big castle and a lovely harbour.", "Thank you for listening.", "Have you got any questions?"],
          hilfen: ["Zuerst sagst du das Wichtigste noch einmal.", "Danach bedankst du dich bei den Zuhörern.", "Zuletzt ist die Klasse dran."] },
        { art: "mc", id: "schluss-mc", tag: "Good ending?", titel: "Which ending is the best?",
          lead: `Tick the best ending. <span class="de">Welcher Schluss ist am besten?</span>`,
          fragen: [
            { q: "Which ending is the best?", o: ["To sum up, Conwy is a lovely town. Thank you for listening. Have you got any questions?", "That's all. Bye.", "Um … I think that's the end.", "(sits down without a word)"], a: 0,
              e: "Ein guter Schluss fasst kurz zusammen, bedankt sich und lädt die Klasse zu Fragen ein." }
          ] }
      ] },
      { kurz: "Language", ober: "going to", titel: "Say what you are going to do", teile: [
        { art: "merke", kopf: "GOING TO", html: `<p>At the start of a talk you say what you <b>are going to do</b>: <i>I'm going to play you a song. We're going to visit the market.</i></p><ul><li><b>am / is / are + going to + verb</b>: <i>I'm going to tell you … · She is going to explain … · We're going to see …</i></li><li>Negative: <i>aren't going to</i>, <i>isn't going to</i>, <i>I'm not going to</i>.</li></ul><span class="de">going to = ein Plan („ich werde gleich …“).</span>` },
        { art: "luecke", id: "going", tag: "Announce your plan", titel: "What are they going to do?", foerder: GOING,
          lead: `Complete the sentences with the right form. <span class="de">Setze die ganze Form ein. Zwei Formen bleiben übrig.</span>`,
          absaetze: [
            [{ g: "I'm going to show" }, " you some photos of the castle."],
            ["Next, ", { g: "we're going to look" }, " at the harbour."],
            ["Cerys ", { g: "is going to talk" }, " about the weather."],
            ["The listeners ", { g: "aren't going to get" }, " bored, because the talk is short."]
          ], extra: ["am going to looks", "is going to showing"],
          hilfen: ["Schau auf das Wort vor der Lücke: I, we, Cerys oder the listeners?", "Nach going to steht immer die Grundform des Verbs, ohne -s und ohne -ing.", "Der letzte Satz ist verneint: aren't going to."] },
        { art: "mc", id: "going-mc", tag: "Check", titel: "Which sentence is correct?", foerder: GOING,
          lead: `Tick the correct answer. <span class="de">Welcher Satz ist richtig?</span>`,
          fragen: [
            { q: "Which sentence announces a plan correctly?", o: ["She is going to show a photo of the castle.", "She going to show a photo of the castle.", "She is going to shows a photo of the castle.", "She are going to show a photo of the castle."], a: 0,
              e: "Bei she steht is: is going to + Grundform (show)." }
          ] }
      ] },
      { kurz: "Tips", ober: "Speaking", titel: "Tips for your talk", teile: [
        { art: "mc", id: "tipps", tag: "Tips", titel: "What helps a good talk?",
          lead: `Tick the correct answers. <span class="de">Welche Tipps helfen? Manchmal sind es zwei.</span>`,
          fragen: [
            { q: "Which two tips help a good presentation?", o: ["Look at your class and speak slowly and clearly.", "Show photos and repeat the important facts.", "Read everything word for word from a paper.", "Speak very fast, then you finish earlier."], a: [0, 1],
              e: "Die Klasse ansehen, langsam und deutlich sprechen, Fotos zeigen und Wichtiges wiederholen helfen den Zuhörern." },
            { q: "Your talk has a place with a difficult name. What can you do?", o: ["Practise the name aloud before the talk.", "Leave the name out and say \"a town\".", "Say it very quietly so nobody hears a mistake.", "Don't practise – it will be fine."], a: 0,
              e: "Schwierige Namen übt man vorher mehrmals laut." }
          ] },
        { art: "ordnen", id: "vorbereiten", tag: "Get ready", titel: "Prepare your talk in the right order",
          lead: `Put the steps in the right order. <span class="de">In welcher Reihenfolge bereitest du deinen Vortrag vor?</span>`,
          schritte: ["Choose a place.", "Write key words on small cards.", "Use your key words to write the introduction and the ending.", "Practise aloud three times.", "Give your talk."],
          hilfen: ["Ohne Ort gibt es kein Thema.", "Die Karten helfen dir beim Sprechen.", "Üben kommt vor dem Vortrag."] },
        { art: "offen", id: "tipp-warum", m7: true, tag: "Challenge · Explain", titel: "Why practise aloud?",
          lead: `Explain in your own words. English or German. <span class="de">Antworte auf Englisch oder Deutsch.</span>`,
          fragen: [{ q: "Why should you practise your talk aloud before you give it?", m: "When you practise aloud you feel more sure, you find difficult words and you can check the time.", k: ["sure|confident|safe|sicher|nervous|nervös", "difficult|word|name|mistake|Wort|Fehler|time|Zeit|Wörter"], min: 2 }],
          tipp: "Think of the day of the talk: How do you feel if you practised? Start like this: When you practise aloud, you …" }
      ] },
      { kurz: "Your talk", ober: "Your task", titel: "Your own presentation", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a talk in class</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-pres-vortrag.jpg\" width=\"1280\" height=\"853\" alt=\"A boy stands in front of his class holding cue cards; a girl raises her hand.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the boy doing? What makes a good talk? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Now it's your turn. First look at Cerys's key-word card. <span class="de">Zuerst ergänzt du die Stichwortkarte von Cerys. Dann machst du eine eigene.</span></p>` },
        ...[{ nur: "R" }, { nur: "M" }].map(v => ({
          art: "formular", id: "karte", nur: v.nur, tag: "Key-word card", titel: "Cerys's key-word card",
          lead: v.nur === "R" ? `Complete the key-word card for Conwy. Write <b>one word or one number</b>. <span class="de">Schau noch einmal auf das Plakat (📖 Text).</span>` : `Complete the key-word card for Conwy. Write <b>one word or one number</b>.`,
          karte: "<p>Use the poster. Key words are short – not whole sentences.</p>",
          kopf: "Conwy – key words",
          felder: [
            { label: "People: they are …", loesung: ["friendly"] },
            { label: "Weather: wet and …", loesung: ["windy"] },
            { label: "Culture: the castle is more than … years old", loesung: ["700", "seven hundred"] },
            { label: "Sport: sailing, fishing and …", loesung: v.nur === "R" ? ["walking", "hiking"] : ["walking", "cycling", "hiking", "climbing"] },
            { label: "Other facts: Conwy is also famous for its …", loesung: ["mussels"] }
          ],
          hilfen: ["Lies auf dem Plakat den Zettel zu jeder Zeile.", "Die Antworten stehen in dem Zettel mit dem gleichen Namen."]
        })),
        { art: "merke", kopf: "CHOOSE YOUR PLACE", html: `<p>Choose a place in <b>Wales</b> or <b>Scotland</b> – for example Cardiff, Edinburgh, Snowdonia or the Isle of Skye – or your <b>own home town</b>. Only write facts you are sure about. Don't use too many numbers.</p>` },
        ...[
          { nur: "R", min: 20 }, { nur: "M", min: 30 }
        ].map(v => ({
          art: "schreiben", id: "stichwortkarte", nur: v.nur, tag: "Your key-word card", titel: "Key words about your place", min: v.min,
          auftrag: `<p><b>Write your key-word card</b> (${v.min} words or more). Write short notes – not whole sentences. Use these five headings:${v.nur === "R" ? ` <span class="de">Schreibe kurze Stichpunkte unter fünf Überschriften.</span>` : ""}</p><ul><li><b>People:</b> …</li><li><b>Weather:</b> …</li><li><b>Culture:</b> …</li><li><b>Sport:</b> …</li><li><b>Other facts:</b> …</li></ul><p>Start with the name of your place.</p>`,
          starter: ["My place: …", "People: …", "Weather: …", "Culture: …", "Sport: …", "Other facts: …"],
          kriterien: ["Du nennst den Ort.", "Es gibt Stichpunkte zu People, Weather, Culture, Sport und Other facts.", "Die Stichpunkte sind kurz, keine langen Sätze.", "Du benutzt keine unsicheren Fakten und nicht zu viele Zahlen."]
        })),
        ...[
          { nur: "R", min: 40 }, { nur: "M", min: 60 }
        ].map(v => ({
          art: "schreiben", id: "einleitung-schluss", nur: v.nur, tag: "Your task", titel: "My introduction and my ending", min: v.min,
          auftrag: `<p><b>Write the introduction and the ending of your talk</b> (${v.min} words or more).${v.nur === "R" ? ` <span class="de">Schreibe mindestens ${v.min} Wörter: eine Einleitung und einen Schluss.</span>` : ""}</p><p><b>Introduction:</b> say what you talk about, where the place is and what it is famous for. Say what you are going to do (<i>I'm going to tell you …</i>). Ask your listeners one question (<i>Have you ever been to …?</i>).</p><p><b>Ending:</b> sum up in one sentence, say thank you and ask for questions.</p>`,
          starter: ["Hello! Today I'm going to tell you about …", "… is a place in … It is famous for …", "First, I'm going to … Then …", "Have you ever been to …?", "To sum up, …", "Thank you for listening. Have you got any questions?"],
          kriterien: ["Die Einleitung nennt das Thema, den Ort und eine wichtige Information.", "Du sagst mit going to, was du zeigen oder erzählen willst.", "Du stellst den Zuhörern eine Frage (zum Beispiel im present perfect).", "Der Schluss fasst zusammen, bedankt sich und fragt nach Fragen.", "Die Sätze sind freundlich und einfach, ohne zu viele Zahlen."]
        })),
        { art: "merke", kopf: "NOW PRACTISE", html: `<p>Read your introduction and your ending <b>aloud three times</b>: once alone, once in front of a mirror or your family, and once with your key-word card. <span class="de">Lies deinen Text dreimal laut: allein, vor dem Spiegel oder der Familie und mit der Stichwortkarte.</span></p><p><b>Self and partner checklist</b> – tick each point:</p><ul><li>☐ I look at my listeners.</li><li>☐ I speak slowly and clearly.</li><li>☐ I show photos or things.</li><li>☐ I practised difficult names.</li><li>☐ I asked my listeners a question.</li><li>☐ I said thank you and asked for questions.</li></ul>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["A good talk needs an introduction, but an ending is not important.", false],
            ["In the ending you say thank you and ask your listeners for questions.", true],
            ["\"Today I'm going to tell you about …\" is a good way to start.", true],
            ["It is better to practise only in your head and not aloud.", false],
            ["On a key-word card you write long sentences.", false]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can build a talk in four steps and say what you are going to do. Now practise it aloud – and give your talk." }
  });
})();
