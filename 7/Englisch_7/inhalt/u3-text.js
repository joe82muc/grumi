/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Text: A new start
   (eine Ich-Erzählung über einen Umzug in ein anderes Land lesen: aus Titel und Bildmotiven vermuten, in sechs Abschnitten lesen,
   Überschriften den Abschnitten zuordnen (eine ist zu viel), Textstellen finden, Gefühle im Verlauf erkennen und begründen,
   eigene Meinung sagen, some/any/no und „Ort vor Zeit“ im Text erkennen, zum Schluss eine Wahlaufgabe schreiben)
   Buchprinzip (BUCH-UNIT3, Abschnitt Text): Vorentlastung über das eigene Leben → Geschichte lesen (sechs Abschnitte) →
   Überschriften zuordnen, eine zu viel → über Gefühle sprechen („zwischen den Zeilen lesen“) → Wahlaufgabe (Tagebucheintrag
   ODER eine zweite Aufgabe). Hier mit eigener Geschichte: Ciara (13) zieht von Galway nach Lindbach (erfundene Kleinstadt in
   Bayern), weil ihre Mutter dort Arbeit hat. Für bayerische Kinder: Was ist für Ciara neu? (Grüß Gott, keine Schuluniform,
   Schulschluss um eins, Brezen in der Pause, Schulband). Besser: Vorhersage und Wörter vorweg, Überschriften-Zuordnung mit
   sofortiger Rückmeldung (R7 und M7 dieselben sieben Überschriften, eine zu viel), Textstellen finden mit Hilfen, Gefühle-Paare,
   Satzrahmen (R7), Hilfen in Stufen, Förder-Links, KI-Rückmeldung zur Wahlaufgabe (Tagebucheintrag ODER Nachricht an die Freundin).
   LehrplanPLUS E7 1.1 Leseverstehen (Erzählung, Abschnitte, Gefühle zwischen den Zeilen), E7 2 Schreiben (Tagebucheintrag,
   Nachricht), E7 Wortschatz Gefühle, E7 Grammatik some/any/no (G9) und Ort vor Zeit (G8) im Kontext.
   Texte: „A new start“ (texte/u3/u3-text-start-r.js und -m.js; R7 261 Wörter, M7 379 Wörter). Alle Personen und Lindbach sind erfunden.
   Förder-Links: some/any/no -> unit3/extra/some-any.html, Ort vor Zeit -> unit3/extra/word-order.html.
   m7: zwei Aufgaben (Wie können Mitschüler helfen? · Wie ändern sich Ciaras Gefühle?); für 7R freiwillig.
   Wahlaufgabe: A) Tagebucheintrag am ersten Schultag ODER B) Nachricht an Aisling (R7 40 Wörter mit Satzanfängen, M7 60 Wörter).
   // BILDER: (Bilder ohne lesbaren Text; die Kärtchen in Station 1 haben vorläufig Symbole)
   // 1. Station 1 (Vorentlastung/Vorhersage): vier Szenen als Bildkarten nebeneinander – Strand in Galway im grauen Licht, Mädchen
   //    mit Geigenkasten vor einer bayerischen Schule mit Fachwerkhaus-Dächern, Musikzimmer mit Trommel und Geige, Herbstmarkt
   //    mit Brezen und Lichterketten.
   // 2. Station 2 (Lesen, Abschnitt 4): Ciara spielt allein im leeren Musikzimmer Geige, ein Mädchen steht staunend in der Tür.
   // 3. Station 5 (Schreiben): Tagebuch auf einem Schreibtisch mit Geigenkasten und Umzugskartons im Hintergrund. */
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

  const FOERDER_SA = { href: "unit3/extra/some-any.html", text: "Extra: some oder any?" };
  const FOERDER_WO = { href: "unit3/extra/word-order.html", text: "Extra: Ort vor Zeit" };

  D7Kit.seite({
    id: "u3-text",
    titel: "Text: A new start",
    einleitung: "Ciara is thirteen. She moves from <b>Galway</b> in Ireland to a small town in <b>Bavaria</b>. What is new for her – and what helps her to feel at home? You read her story, say how she feels, find <b>some, any, no</b> and <b>place before time</b> in the text – and then you write a diary entry or a message yourself.",
    zeit: "etwa 45 Minuten",
    ziele: ["🖼️ I say what a story could be about.", "📖 I read a story about moving to another country.", "💬 I say how a person feels and why.", "✍️ I write a diary entry or a message."],
    thema: "Unit 3 Welcome to Ireland: Text (Ich-Erzählung über einen Umzug, Gefühle, Wahlaufgabe)",
    quiz: { profi: "Story pro" },
    glossar: {
      fiddle: ["fiddle", "Geige: Die Fiddle ist eine Geige. In der irischen Musik spielt man darauf schnelle Tänze."],
      tune: ["tune", "Melodie: Eine Tune ist ein kurzes Musikstück, das man leicht mitsummen kann."],
      uniform: ["school uniform", "Schuluniform: Alle Kinder tragen dieselbe Kleidung in der Schule. In Irland ist das normal, in Bayern nicht."],
      homesick: ["homesick", "Heimweh haben: Du vermisst dein Zuhause und die Menschen dort sehr."],
      nervous: ["nervous", "nervös: Du bist aufgeregt und ein bisschen ängstlich, zum Beispiel vor einem Auftritt."],
      clap: ["to clap", "klatschen: Man schlägt die Hände zusammen, wenn einem etwas gefällt."],
      drum: ["drum", "Trommel: Das ist ein Instrument, auf das man mit zwei Stöcken schlägt."],
      pretzel: ["pretzel", "Brezel, in Bayern Brezn: Das ist ein Salzgebäck in Schleifenform."],
      tinwhistle: ["tin whistle", "Tin Whistle: Das ist eine kleine Blechflöte mit sechs Löchern. Sie gehört zur irischen Musik."],
      diary: ["diary", "Tagebuch: Dort schreibst du auf, was du am Tag erlebt und gefühlt hast."],
      narrator: ["narrator", "Erzähler oder Erzählerin: Das ist die Person, die in einer Geschichte sagt, was passiert."]
    },
    haupttext: { R: "u3-text-start-r", M: "u3-text-start-m" },
    stationen: trenne([
      { kurz: "Look first", ober: "Before you read", titel: "What is the story about?", teile: [
        { art: "text", html: `<p class="lead">The title of the story is <b>A new start</b>. Ciara tells the story herself – she is the <button class="term" data-t="narrator">narrator</button>. <span class="de">Der Titel heißt „Ein Neuanfang“. Ciara erzählt selbst: Sie sagt „ich“.</span></p>` },
        { art: "karten", karten: [
          { ic: "<img class=\"zoomable\" src=\"images/u3/u3-text-strand.jpg\" width=\"1280\" height=\"853\" alt=\"Two girls hug each other on a grey beach in Ireland.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 1", text: "A grey beach in Ireland. Two friends say goodbye." },
          { ic: "<img class=\"zoomable\" src=\"images/u3/u3-text-schule.jpg\" width=\"1280\" height=\"853\" alt=\"Children in everyday clothes walk into a school in a small Bavarian town; a girl with a fiddle case stands a little apart.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 2", text: "A school in a small town in Germany. Nobody wears a uniform." },
          { ic: "<img class=\"zoomable\" src=\"images/u3/u3-text-geige.jpg\" width=\"1280\" height=\"853\" alt=\"A girl plays the fiddle alone in a school music room; another girl stops at the door and listens.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 3", text: "A girl with a fiddle in a music room." },
          { ic: "<img class=\"zoomable\" src=\"images/u3/u3-text-markt.jpg\" width=\"1280\" height=\"853\" alt=\"A school band plays at an evening autumn market with pretzels and fairy lights.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 4", text: "An autumn market with music and pretzels." }
        ] },
        { art: "offen", id: "vorhersage", tag: "Predict", titel: "What could the story be about?",
          lead: `Look at the title and the four pictures. Write <b>one or two sentences</b>. <span class="de">Was meinst du: Worum geht es? Rate ruhig – später siehst du, ob du recht hattest.</span>`,
          fragen: [{ q: "What do you think happens in the story?", m: "I think a girl moves from Ireland to Germany. She is sad at first, but then she finds new friends because she plays music.", k: ["girl|Ciara|she", "move|moves|new|country|Germany|Bavaria|school|leaves|moved", "sad|friend|friends|music|fiddle|band|lonely|happy|home"], min: 2 }],
          tipp: "Start like this: I think the story is about … / I think Ciara …" },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du in der Geschichte. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["fiddle", "Geige"], ["uniform", "Uniform"], ["tune", "Melodie"], ["clap", "klatschen"], ["nervous", "nervös, aufgeregt"], ["drum", "Trommel"]],
          hilfen: ["Fang mit dem Wort an, das du sicher kennst.", "Zwei Wörter hast du bei Musik gehört: fiddle und drum.", "Tippe zuerst uniform – das Wort klingt fast wie im Deutschen."] }
      ] },
      { kurz: "The story", ober: "Reading", titel: "Read the story", teile: [
        { art: "text", html: `<p class="lead">Read the story once. The six parts are numbered. <span class="de">Lies die Geschichte einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen. Ciara und Lindbach sind erfunden; Galway und Bayern gibt es wirklich.</span></p>` },
        { art: "lesetext", lesetext: { R: "u3-text-start-r", M: "u3-text-start-m" } },
        { art: "luecke", id: "ueberschriften", tag: "Headlines", titel: "Which headline fits which part?",
          lead: `Choose a headline for each part. <b>One headline is too many.</b> <span class="de">Welche Überschrift passt zu welchem Teil? Eine Überschrift bleibt übrig.</span>`,
          absaetze: [
            ["Part 1 (“On our last evening in Galway …”): ", { g: "Saying goodbye" }],
            ["Part 2 (“We arrived in Lindbach …”): ", { g: "A strange first day" }],
            ["Part 3 (“School finished at one o'clock …”): ", { g: "Alone in my room" }],
            ["Part 4 (“On Thursday I took my fiddle …”): ", { g: "An invitation" }],
            ["Part 5 (“At the practice on Friday …”): ", { g: "Playing together" }],
            ["Part 6 (“Two weeks later …”): ", { g: "Two homes" }]
          ], extra: ["Mum's first day at work"],
          hilfen: ["Lies von jedem Teil nur die erste und die letzte Zeile.", "Frage dich bei jedem Teil: Was ist das große Thema – Abschied, Heimweh, Musik …?", "Mum's first day at work kommt in keinem Teil vor – diese Überschrift bleibt übrig."] },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is the story about?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "What is the story about?", o: ["A girl who moves to Germany and finds a new friend through music", "A girl who wins a music prize in Ireland", "A girl who gets lost in a big city", "A girl who learns to ride a horse"], a: 0,
              e: "Ciara moves to Bavaria, feels alone and then finds friends in the school band." },
            { q: "How does Ciara feel at the end of the story?", o: ["She misses Galway, but she is happy in Lindbach, too", "She is still very lonely", "She is angry with her mum", "She wants to go back to Galway at once"], a: 0,
              e: "Ciara says she misses Galway, but she is happy here, too." }
          ] },
        ...zwei({ art: "beleg", id: "zeilen", tag: "Find the line", titel: "Where does the story say that?" },
          "Tap the lines in the story.", "Tippe die Zeilen an, in denen die Antwort steht.", { hilfenR: ["Lies die Frage und suche ein passendes Wort in der Geschichte.", "Die Antwort steht jeweils in einem Teil (Part). Die Frage verrät dir, in welchem."] }).map((t, i) => Object.assign(t, i === 0
          ? { lesetext: "u3-text-start-r", fragen: [
              { q: "What did Ciara not see at her new school?", zeilen: [8, 9], e: "There was no school uniform at the school in Lindbach.", tipp: "Look at Part 2." },
              { q: "What did Leonie ask Ciara?", zeilen: [16, 17], e: "Leonie asked Ciara to join the school band.", tipp: "Look at Part 4." },
              { q: "What did Ciara answer when Leonie asked about Galway?", zeilen: [24, 25], e: "Ciara said she missed Galway, but she was happy in Lindbach, too.", tipp: "Look at Part 6." }
            ] }
          : { lesetext: "u3-text-start-m", fragen: [
              { q: "What did Ciara say when the whole class looked at her?", zeilen: [11, 12], e: "She could only say \"Hallo\".", tipp: "Look at Part 2." },
              { q: "What did Ciara's mum say to make her feel better?", zeilen: [18, 19], e: "Mum said it takes some time and nothing is easy at the beginning.", tipp: "Look at Part 3." },
              { q: "Who did Ciara see in the crowd after the band had finished?", zeilen: [33, 33], e: "She saw her mum in the crowd.", tipp: "Look at Part 6." }
            ] })),
        ...zwei({ art: "mc", id: "fragen", tag: "Questions", titel: "Answer the questions" },
          "Tick the correct answer.", "Lies die Frage genau. Die Antworten stehen in der Geschichte.", { hilfenR: ["Suche in der Geschichte ein Wort aus der Frage.", "Lies nur den Teil (Part), in dem das Wort steht."] }).map((t, i) => Object.assign(t, i === 0
          ? { fragen: [
              { q: "Why did Ciara's family move to Bavaria?", o: ["Her mum got a new job there", "Her dad wanted a bigger house", "Ciara wanted to learn German", "They wanted to see the mountains"], a: 0, e: "Ciara's mum got a new job in Bavaria." },
              { q: "What did Ciara take to school on Thursday?", o: ["A fiddle", "A drum", "A guitar", "A flute"], a: 0, e: "Ciara took her fiddle to school and played in the music room." },
              { q: "Who is Moritz?", o: ["A boy in the school band", "Ciara's brother", "A teacher", "A friend from Galway"], a: 0, e: "Moritz is a boy with a big drum in the school band." }
            ] }
          : { fragen: [
              { q: "Why did Ciara's family move to Bavaria?", o: ["Her mother started a job at a hospital there", "Her father lost his job", "Ciara got a place at a music school", "They wanted to live near her grandparents"], a: 0, e: "Ciara's mum had got a new job at a hospital in Bavaria." },
              { q: "Why didn't Ciara want any dinner on the first day?", o: ["She was homesick", "She was ill", "She didn't like German food", "She had eaten a sandwich"], a: 0, e: "Ciara was so homesick that she didn't want any dinner." },
              { q: "What did the band do when Ciara showed them her tune?", o: ["They laughed together and played with her", "They said it was too fast", "They asked her to play alone", "They went home"], a: 0, e: "They played with her, and they were laughing so much that Moritz dropped his sticks." }
            ] }))
      ] },
      { kurz: "Feelings", ober: "Between the lines", titel: "How does Ciara feel?", teile: [
        { art: "merke", kopf: "READING BETWEEN THE LINES", html: `<p>Stories often don't say the feeling. You see it when you look at <b>what a person does</b>: <i>She looked at the floor and didn't say a word</i> – so she is <b>sad</b> or <b>shy</b>. <i>He jumped up and down</i> – so he is <b>happy</b>.</p><p><span class="de">Oft steht das Gefühl nicht da. Du erkennst es an dem, was die Person tut oder sagt.</span></p>` },
        { art: "paare", id: "gefuehle", tag: "Feelings", titel: "Match the part and the feeling",
          lead: `Which feeling fits which part? <span class="de">Welches Gefühl passt zu welchem Teil der Geschichte?</span>`,
          paare: [["Part 1 – the beach with Aisling", "sad: she has to say goodbye to her best friend"], ["Part 3 – in her new room", "homesick: she misses her old home"], ["Part 4 – Leonie's question", "surprised: a girl suddenly speaks English to her"], ["Part 5 – the first practice", "happy: she laughs for the first time in Germany"], ["Part 6 – at the autumn market", "nervous: she plays in front of lots of people"]],
          hilfen: ["Lies bei jedem Gefühl auch den Grund dahinter und suche den Teil, in dem das passiert.", "Teil 3: Ciara vermisst ihr Zuhause. Welches Wort heißt „Heimweh“?", "Teil 4: Leonie spricht plötzlich Englisch mit ihr. Wie fühlt man sich dann?"] },
        { art: "offen", id: "gefuehl-teil2", nur: "R", tag: "Your words", titel: "How does Ciara feel in Part 2?",
          lead: `Write <b>one sentence</b>. Say how she feels and why. <span class="de">Schreibe einen Satz: Wie fühlt sich Ciara in Teil 2, und warum?</span>`,
          fragen: [{ q: "How does Ciara feel on her first day at school? Why?", m: "In Part 2 Ciara feels lonely because she doesn't understand anything.", k: ["lonely|lost|sad|nervous|unhappy|shy|strange|alone", "because|as|since", "understand|German|school|children|uniform|language|new|look|looked"], min: 2 }],
          tipp: "Use the frame: In Part 2 Ciara feels … because …",
          hilfen: ["Fang an mit: In Part 2 Ciara feels …", "Nimm ein Wort aus der Aufgabe oben, zum Beispiel lonely.", "Beispiel für den Aufbau: … because she doesn't understand …"] },
        { art: "offen", id: "meinung", nur: "R", tag: "Your opinion", titel: "Would you like it?",
          lead: `Write <b>one sentence</b>. Would you like to go to school in another country? Say why. <span class="de">Schreibe einen Satz: Würdest du gern in einem anderen Land zur Schule gehen? Warum (nicht)?</span>`,
          fragen: [{ q: "Would you like to go to school in another country? Why (not)?", m: "I would like to go to school in another country because it is exciting and I can learn a new language.", k: ["would|wouldn't|would not|like|don't|do not", "because|since", "country|school|exciting|new|friends|language|different|scary|afraid|home|family|miss"], min: 3 }],
          tipp: "Use the frame: I would like to … because … or I wouldn't like to … because …",
          hilfen: ["Fang an mit: I would like … oder I wouldn't like …", "Nimm ein Wort: exciting, scary, new, different, language.", "Beispiel für den Aufbau: I wouldn't like to … because I would miss …"] },
        { art: "offen", id: "meinung", nur: "M", tag: "Your opinion", titel: "In Ciara's place",
          lead: `What would be the hardest thing for you in Ciara's place? Give a reason.`,
          fragen: [{ q: "What would be the hardest thing for you if you moved to another country? Why?", m: "I think the hardest thing would be the language, because I wouldn't understand my teachers or my classmates.", k: ["hard|hardest|difficult|worst|bad|biggest", "because|since|reason", "language|German|friends|school|home|family|miss|teacher|classmates"], min: 3 }],
          tipp: "Start like this: I think the hardest thing would be … because …" },
        { art: "offen", id: "wandel", m7: true, tag: "Challenge · Your words", titel: "How do her feelings change?",
          lead: `Say how Ciara's feelings change from Part 2 to Part 6. Give <b>one reason</b>. <span class="de">Wie verändern sich Ciaras Gefühle? Nenne einen Grund.</span>`,
          fragen: [{ q: "How do Ciara's feelings change from the first day to the autumn market? Why?", m: "At first Ciara feels lonely and sad. Later she feels happy because she has found friends in the band.", k: ["lonely|sad|unhappy|homesick|alone|nervous", "later|then|but|end|now|after|happy|excited|better", "because|since|so|friends|band|music|Leonie|fiddle|tune"], min: 3 }],
          tipp: "Start like this: At first Ciara feels … Later she feels … because …" },
        { art: "offen", id: "helfen", m7: true, tag: "Challenge · Your ideas", titel: "How can classmates help?",
          lead: `A new child comes to your class. Write <b>two ideas</b>: how can you help? <span class="de">Ein neues Kind kommt in deine Klasse. Wie kannst du helfen?</span>`,
          fragen: [{ q: "How can you help a new child in your class?", m: "I can ask the new child to sit with me at the break, and I can show him or her the school.", k: ["can|could|should|ask|invite|help|show|talk|say|sit|play", "new|child|him|her|friend|break|school|class|join|lunch|classmates"], min: 2 }],
          tipp: "Use: I can … / We could … / Why don't we …?" }
      ] },
      { kurz: "Language", ober: "some, any, no and place before time", titel: "Find it in the story", teile: [
        { art: "merke", kopf: "SOME, ANY, NO AND PLACE BEFORE TIME", html: `<p><b>some</b> in positive sentences: <i>There were some apples on the table.</i><br><b>any</b> in negative sentences and questions: <i>I didn't want any dinner. Have you got any pens?</i><br><b>no</b> = not any: <i>There was no time.</i></p><p>With <b>something, anything, nothing, anybody, nobody</b> it is the same.</p><p><b>Place before time:</b> <i>We arrived <u>in Lindbach</u> <u>on a Saturday</u>.</i> – First <b>where</b>, then <b>when</b>.</p><p><span class="de">some in Aussagen, any in Verneinungen und Fragen, no = „kein“. Am Satzende steht erst der Ort, dann die Zeit.</span></p>` },
        { art: "markieren", id: "sa-finden", tag: "Find it", titel: "Which two words tell us how many?", foerder: FOERDER_SA,
          finde: "the two words that tell you how many", toleranz: 0,
          satz: "In Ciara's new room there were [[some]] boxes and [[no]] posters.",
          e: "some = ein paar, no = kein. Both words stand before the nouns boxes and posters.",
          hilfen: ["Suche zwei kleine Wörter vor boxes und posters.", "Das eine heißt „ein paar“, das andere „kein“.", "Es sind some und no."] },
        { art: "luecke", id: "sa-luecke", nur: "R", tag: "Language", titel: "Complete the sentences", foerder: FOERDER_SA,
          lead: `Complete the sentences with <b>some</b>, <b>any</b> or <b>no</b>. <span class="de">Setze some, any oder no ein.</span>`,
          absaetze: [
            ["Ciara hasn't got ", { g: "any" }, " friends in Lindbach yet."],
            ["At her school there is ", { g: "no" }, " uniform."],
            ["Mum put ", { g: "some" }, " photos on the wall."]
          ],
          hilfen: ["Lies zuerst alle Sätze.", "Satz 1 ist verneint (hasn't): Da steht any.", "Satz 2 heißt „keine Uniform“: Da steht no."] },
        { art: "luecke", id: "sa-luecke", nur: "M", tag: "Language", titel: "Complete the sentences", foerder: FOERDER_SA,
          lead: `Complete the sentences with <b>some, any, no, nobody</b> or <b>anything</b>.`,
          absaetze: [
            ["Ciara hasn't got ", { g: "any" }, " friends in Lindbach yet."],
            ["At her school there is ", { g: "no" }, " uniform."],
            ["Mum put ", { g: "some" }, " photos on the wall."],
            ["On the first day ", { g: "nobody" }, " spoke English to her."],
            ["She didn't understand ", { g: "anything" }, " in the first lesson."]
          ],
          hilfen: ["Lies zuerst alle Sätze.", "Verneinung mit not: any oder anything. Ganz ohne not: no oder nobody.", "Aussage mit „ein paar“: some."] },
        { art: "markieren", id: "ort-zeit", tag: "Find it", titel: "Which words tell place and time?", foerder: FOERDER_WO,
          finde: "the place and the time", toleranz: 0,
          satz: "Ciara played her fiddle at [[school]] on [[Thursday]].",
          e: "First the place (at school), then the time (on Thursday).",
          hilfen: ["Der Satz hat einen Ort und eine Zeit.", "Frage: Wo? – school. Wann? – Thursday.", "Zuerst kommt der Ort, dann die Zeit."] },
        { art: "ordnen", id: "ort-zeit-ordnen", nur: "R", tag: "Word order", titel: "Put the parts in order", foerder: FOERDER_WO,
          lead: `Put the sentence parts in the right order. Say <b>where</b> first, then <b>when</b>. <span class="de">Erst der Ort, dann die Zeit.</span>`,
          schritte: ["The band played", "at the market", "on Saturday"],
          hilfen: ["Der Satz beginnt mit dem Subjekt: The band …", "Frage dich: Wo? Wann?", "Erst „at the market“ (Ort), dann „on Saturday“ (Zeit)."] },
        { art: "ordnen", id: "ort-zeit-ordnen", nur: "M", tag: "Word order", titel: "Put the parts in order", foerder: FOERDER_WO,
          lead: `Put the sentence parts in the right order: place first, then time.`,
          schritte: ["Leonie and Ciara met", "in the music room", "in the break on Thursday"],
          hilfen: ["Erst der Ort, dann die Zeit.", "Wo? in the music room. Wann? in the break on Thursday."] },
        { art: "mc", id: "sa-check", tag: "Check", titel: "Which word fits?", foerder: FOERDER_SA,
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "There weren't ____ pretzels left at the market.", o: ["any", "some", "no", "nothing"], a: 0,
              e: "Nach not (weren't) steht any: not … any = kein." },
            { q: "Would you like ____ tea, Ciara?", o: ["some", "any", "no", "nobody"], a: 0,
              e: "Bei einem Angebot steht some, auch in einer Frage." }
          ] }
      ] },
      { kurz: "Your choice", ober: "Writing", titel: "Choose your writing task", teile: [
        { art: "text", html: `<p class="lead">Now you write as Ciara. <span class="de">Jetzt schreibst du in der Rolle von Ciara. Die Fakten stehen in der Geschichte. Wähle A oder B.</span></p>` },
        { art: "merke", kopf: "HELP FOR YOUR TEXT", html: `<p><b>Diary entry:</b> the date at the top · <i>Dear Diary,</i> · what happened and how you felt · what you hope · your name<br><b>Message to a friend:</b> <i>Hi Aisling,</i> · what happened · how you feel · a question · <i>Love, Ciara</i><br><b>Linking words:</b> first · then · after that · but · because<br><b>Feelings:</b> sad · lonely · homesick · nervous · surprised · happy<br><b>Verbs in the simple past:</b> went, felt, said, played, met, laughed</p>` },
        { art: "schreiben", id: "wahl", nur: "R", tag: "Your task", titel: "Choose A or B", min: 40,
          auftrag: `<p><b>Choose one task</b> (40 words or more). <span class="de">Wähle eine Aufgabe, mindestens 40 Wörter.</span></p><p><b>A) A diary entry by Ciara</b> about her first day at school in Lindbach.</p><p><b>B) A message by Ciara to Aisling</b> in Galway: Tell her about your first day.</p><p>Write the letter (A or B) at the start. <span class="de">Schreibe den Buchstaben A oder B an den Anfang.</span></p>`,
          starter: ["A) Dear Diary, today was my first day …", "The teacher said … and I …", "I felt …", "I hope that …", "B) Hi Aisling, I miss you!", "Today I went to …"],
          kriterien: ["Du schreibst am Anfang A oder B (Dear Diary oder Hi Aisling).", "Du erzählst von Ciaras erstem Schultag in der Vergangenheit (went, said, felt).", "Du sagst, wie Ciara sich fühlt (zum Beispiel sad, lonely, nervous).", "Du nennst mindestens eine Sache, die in Bayern neu ist (zum Beispiel keine Uniform, andere Sprache, Brezeln).", "Der Text hat mindestens 40 Wörter."] },
        { art: "schreiben", id: "wahl", nur: "M", tag: "Your task", titel: "Choose A or B", min: 60,
          auftrag: `<p><b>Choose one task</b> (60 words or more):</p><p><b>A) A diary entry by Ciara</b> about her first day at school in Lindbach: what happened, how she felt and what she hopes.</p><p><b>B) A message by Ciara to a friend in Galway:</b> Tell Aisling about your new school and ask her a question.</p><p>Write the letter of your task (A or B) at the start.</p>`,
          starter: ["A) Dear Diary, today was my first day …", "In the morning the teacher …", "I felt … because …", "I hope that …", "B) Hi Aisling, how are you?", "Here everything is different: …"],
          kriterien: ["Du sagst am Anfang, ob du Aufgabe A oder B gewählt hast (Dear Diary oder Hi Aisling).", "Du erzählst in der Vergangenheit, was am ersten Schultag passierte (zum Beispiel went, said, didn't understand).", "Du sagst, wie Ciara sich fühlt, und gibst einen Grund an (because).", "Du nennst mindestens zwei Dinge, die in Bayern anders sind als in Galway.", "Du bringst eine Hoffnung (I hope that …) oder bei B eine Frage an Aisling, und der Text hat mindestens 60 Wörter."] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Ciara is from Galway in Ireland.", true],
            ["Ciara spoke a lot of German on her first day.", false],
            ["Leonie is a girl from Ciara's class.", true],
            ["Ciara was never happy in Lindbach.", false],
            ["In Lindbach the children wear a school uniform.", false]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a story about moving to another country, say how a person feels, find some, any, no and place before time – and write a diary entry or a message." }
  });
})();
