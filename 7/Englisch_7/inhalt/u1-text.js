/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Text: A birthday invitation from Roman times (Kürzel A13)
   (eine Bildergeschichte in acht Bildern über ein historisches Ereignis lesen: vorher vermuten, Wörter klären, lesen,
   Textstellen finden, Reihenfolge, falsche Sätze berichtigen („That's wrong. …“), simple past der Erzählerin und
   Possessivpronomen der Sprechblasen, zum Schluss eine Wahlaufgabe schreiben)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Text“, nur Aufbau, nichts übernommen): Bildergeschichte in acht Bildern mit
   Erzählsätzen und Sprechblasen über ein historisches Ereignis → falsche Aussagen berichtigen mit „That's wrong. …“ →
   Culture-Kasten (Leben damals, Vergleich) → Wahlaufgabe (Bildunterschriften ODER Standbild). Hier mit einer eigenen, wahren
   Geschichte: Claudia Severas Geburtstagseinladung an Sulpicia Lepidina aus dem Römerkastell Vindolanda (um das Jahr 100),
   erzählt von der erfundenen Aelia – kein Theater, kein Feuer, keine Buchmotive. Das Standbild ersetzt die Wahl „Bildunterschriften
   ODER Antwortbrief Lepidinas“ (M7); R7 schreibt Bildunterschriften zu vier Bildern.
   Besser: Vermuten mit KI-Hinweis, Textstellen antippen, Reihenfolge mit sofortiger Rückmeldung, Berichtigen in R7 mit
   Wortspeicher, in M7 frei mit KI-Hinweis, Hilfen in Stufen, Förder-Links an der Grammatik, KI-Rückmeldung zur Wahlaufgabe.
   Nur gesicherte Fakten (siehe Kopf der Textdateien); was niemand weiß (ob Lepidina zur Feier fuhr), steht als offen da.
   Erzählerin, ihre Mutter und die Sprechblasen sind erfunden – das sagt die Seite den Kindern. Das Jahr, in dem gerade die
   Einladung gefunden wurde, nennt der Text bewusst nicht (die ersten Täfelchen 1973, die Einladung 1985 laut Roman Inscriptions of Britain,
   Tab. Vindol. 291; im Text nur „over the years … one of them“). Gegengelesen 15.11.2026 (Platz 1).
   LehrplanPLUS E7 1.1 Leseverstehen (Bildergeschichte, Einzelheiten, Reihenfolge, Belegstellen), E7 2 Schreiben
   (Bildunterschriften, kurzer Brief), E7 3 Grammatik G1 simple past und G4 Possessivpronomen im Kontext, E7 5 (England:
   Geschichte – die Römer in Britannien).
   Texte: „A birthday invitation from Roman times“ (texte/u1/u1-text-letter-r.js und -m.js; R7 263 Wörter, M7 387 Wörter).
   Förder-Links (zusätzlich zum Auftrag, an der Station „Language“ nach der Regel der Bauanleitung): simple past ->
   unit1/extra/simple-past.html, Possessivpronomen -> unit1/extra/possessive-pronouns.html.
   m7: zwei Aufgaben (Warum sind Claudias Zeilen für Historiker besonders? · Sprechblase mit mine/ours); für 7R freiwillig.
   Wahlaufgabe: R7 Bildunterschriften zu Bild 1, 3, 5 und 8 (40 Wörter), M7 A) acht Bildunterschriften ODER B) Lepidinas Antwort.
   // BILDER: (Bildergeschichte in acht Feldern, ohne lesbaren Text im Bild – Erzähltext und Sprechblasen stehen im Text)
   // 1. Station „Look first“ (Vorentlastung, Sprechanlass) = Bild 3: In einem Steinhaus eines Römerkastells hält eine Frau in
   //    römischer Kleidung ein dünnes, postkartengroßes Holztäfelchen mit dunkler Schrift, ein zwölfjähriges Mädchen mit einem
   //    Brotkorb schaut neugierig zu.
   // 2. Station „The story“ = Bild 7: Römische Bauarbeiter setzen große Steine zu einer langen Mauer über grüne Hügel,
   //    im Vordergrund liegt nasser, dunkler Boden.
   // 3. Station „Your choice“ = Bild 8: Heute – Besucherinnen und Besucher in einem Museum beugen sich über eine Glasvitrine
   //    mit einem dunklen Holztäfelchen, ein Mädchen hält ihr Handy daneben. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist
  const OHNE_DE = s => (s || "").replace(/<p><span class="de">.*?<\/span><\/p>/g, "").replace(/ ?<span class="de">.*?<\/span>/g, "");
  // Teile ohne eigene Fassung, die im Auftrag eine deutsche Hilfe haben: R7 behält sie und die Hilfen, M7 bekommt nur den
  // englischen Auftrag und keine Hilfen in Stufen
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
  const FOERDER_POSS = { href: "unit1/extra/possessive-pronouns.html", text: "Extra: mine, yours, his, hers" };

  D7Kit.seite({
    id: "u1-text",
    titel: "Text · A birthday invitation from Roman times",
    einleitung: "Almost 2,000 years ago, a Roman woman in the north of Britain sent her friend an invitation to her birthday party – on a thin piece of wood. You read the true story in eight pictures, you correct wrong sentences, you look at the <b>simple past</b> and at <b>mine, yours, hers</b> – and then you write about it.",
    zeit: "etwa 45 Minuten",
    ziele: ["🖼️ I look at pictures and say what the story could be about.", "📜 I read a story about a real letter from Roman times.", "❌ I correct wrong sentences: That's wrong. …", "✍️ I write captions – or a letter from Roman times."],
    thema: "Unit 1 Out and about in England: Text (Bildergeschichte über die Geburtstagseinladung von Vindolanda, Römer in Britannien)",
    quiz: { profi: "History pro" },
    glossar: {
      fort: ["fort", "Ein fort ist ein Kastell: ein befestigtes Lager, in dem römische Soldaten wohnten. Der Kommandant lebte dort mit seiner Familie."],
      vindolanda: ["Vindolanda", "Vindolanda war ein römisches Kastell im Norden Englands. Es liegt nahe beim Hadrianswall und ist heute ein Ausgrabungsort mit Museum."],
      ink: ["ink", "Ink ist Tinte. Die Römer schrieben mit einer Feder und Tinte auf dünne Holzblättchen."],
      writer: ["writer", "In der Geschichte schreibt ein writer (ein Schreiber) den Brief für Claudia. Viele reiche Römer ließen ihre Briefe von einem Schreiber schreiben."],
      archaeologist: ["archaeologist", "Ein archaeologist (Archäologe, Archäologin) sucht und untersucht Dinge aus sehr alter Zeit, die im Boden liegen."],
      wall: ["Hadrian's Wall", "Der Hadrianswall ist eine lange Mauer quer durch Nordengland. Die Römer begannen im Jahr 122, sie zu bauen."],
      latin: ["Latin", "Latein war die Sprache der Römer. Auch Claudias Brief ist auf Latein geschrieben – in der Geschichte liest du ihn auf Englisch."],
      sister: ["sister", "Claudia nennt Lepidina „sister“ (Schwester). Die beiden waren wohl keine echten Schwestern: Die Römer nannten manchmal auch eine gute Freundin so."],
      aelia: ["Aelia", "Aelia, ihre Mutter und die Sprechblasen sind erfunden. Claudia Severa, Sulpicia Lepidina, Flavius Cerialis, Vindolanda und der Brief sind echt."]
    },
    haupttext: { R: "u1-text-letter-r", M: "u1-text-letter-m" },
    stationen: trenne([
      { kurz: "Look first", ober: "Before you read", titel: "What could the story be about?", teile: [
        { art: "text", html: `<p class="lead">Almost 2,000 years ago, the Romans lived in Britain. Their soldiers lived in big forts. This story in eight pictures is about a real letter from one of these forts. <span class="de">Die Geschichte ist wahr. Nur die Erzählerin <button class="term" data-t="aelia">Aelia</button> und die Sprechblasen sind erfunden.</span></p>` },
        { art: "karten", karten: [
          { ic: "<img class=\"zoomable\" src=\"images/u1/u1-text-kueche.jpg\" width=\"1280\" height=\"853\" alt=\"Roman times: a girl carries a basket of bread through the kitchen of a big stone house in a fort.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 1", text: "A girl in the kitchen of a big stone house in a Roman fort." },
          { ic: "<img class=\"zoomable\" src=\"images/u1/u1-text-taefelchen.jpg\" width=\"1280\" height=\"853\" alt=\"A Roman woman holds a thin piece of wood with dark lines of writing and smiles; a girl with a bread basket watches her.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 3", text: "A woman holds a thin piece of wood with writing on it." },
          { ic: "🎂", titel: "Picture 4", text: "The woman smiles and reads the words to the girl." },
          { ic: "<img class=\"zoomable\" src=\"images/u1/u1-text-museum.jpg\" width=\"1280\" height=\"853\" alt=\"Today: visitors in a museum lean over a glass case with an old, dark piece of wood; a girl points at it.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 8", text: "Today: visitors in a museum look at an old piece of wood." }
        ] },
        { art: "offen", id: "vermutung", tag: "Predict", titel: "What do you think?",
          lead: `Look at the four pictures and the title. Write <b>one or two sentences</b>. <span class="de">Was meinst du: Worum geht es? Rate ruhig – später siehst du, ob du recht hattest.</span>`,
          fragen: [{ q: "What do you think the story is about?", m: "I think the story is about a Roman woman who gets a letter from a friend.", k: ["letter|wood|invitation|writing|message", "woman|friend|girl|roman|romans|fort|party|birthday|museum"], min: 2 }],
          tipp: "Start like this: I think the story is about … / I think the woman …" },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du in der Geschichte.</span>`,
          paare: [["fort", "Kastell (römisches Lager)"], ["letter", "Brief"], ["wood", "Holz"], ["ink", "Tinte"], ["invitation", "Einladung"], ["handwriting", "Handschrift"], ["archaeologist", "Archäologe, Archäologin"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Zwei Wörter haben mit dem Schreiben zu tun.", "Ein Wort klingt fast wie im Deutschen: archaeologist."] }
      ] },
      { kurz: "The story", ober: "Reading", titel: "A birthday invitation from Roman times", teile: [
        { art: "text", html: `<p class="lead">Read the story. Imagine the pictures in your head. <span class="de">Lies die Geschichte einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u1-text-letter-r", M: "u1-text-letter-m" } },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is the story about?", lead: `Tick the correct answer. <span class="de">Kreuze die richtige Antwort an.</span>`,
          fragen: [
            { q: "What is the story about?", o: ["a birthday invitation that a Roman woman sent to her friend", "a Roman soldier who builds a wall", "a girl who finds an old letter today", "a party for all the soldiers in a fort"], a: 0,
              e: "Claudia Severa invited her friend Lepidina to her birthday party – on a wooden letter." },
            { q: "Who was Sulpicia Lepidina?", o: ["the commander's wife", "Claudia's real sister", "Aelia's mother", "a cook in the fort"], a: 0,
              e: "Her husband Flavius Cerialis was the commander of the fort." },
            { q: "How did Lepidina know that the last words came from Claudia?", o: ["She knew Claudia's handwriting.", "Aelia told her.", "The writer wrote Claudia's name.", "Claudia's husband said so."], a: 0,
              e: "Lepidina says: I know her handwriting!" }
          ] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the story say that?", lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`, lesetext: "u1-text-letter-r",
          hilfen: ["Die Bildnummer im Tipp sagt dir, wo du suchen musst.", "Die Antworten stehen in den Sätzen von Aelia, nicht in den Sprechblasen."],
          fragen: [
            { q: "Where did Claudia live?", zeilen: [12, 12], e: "She lived at another fort with her husband.", tipp: "Look at Picture 4." },
            { q: "What did the Romans begin to build in 122?", zeilen: [25, 26], e: "They began to build Hadrian's Wall near the fort.", tipp: "Look at Picture 7." },
            { q: "When did archaeologists find the first wooden letters?", zeilen: [29, 29], e: "In 1973.", tipp: "Look at Picture 8." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the story say that?", lead: "Tap the lines with the answer.", lesetext: "u1-text-letter-m",
          fragen: [
            { q: "Where did many of the soldiers of Flavius Cerialis come from?", zeilen: [6, 7], e: "Many of them came from an area that is part of the Netherlands today.", tipp: "Look at Picture 2." },
            { q: "Who sent greetings to Lepidina's husband?", zeilen: [17, 18], e: "Claudia sent greetings from her husband and her little son.", tipp: "Look at Picture 4." },
            { q: "Why didn't the wood rot in the ground?", zeilen: [34, 35], e: "There was almost no air in the wet ground.", tipp: "Look at Picture 7." }
          ] },
        { art: "ordnen", id: "reihenfolge", tag: "Order", titel: "What happened first?",
          lead: `Put the events in the right order. <span class="de">Bringe die Ereignisse in die richtige Reihenfolge.</span>`,
          schritte: [
            "A letter comes for Lepidina.",
            "Lepidina reads Claudia's invitation.",
            "Lepidina sees Claudia's own handwriting.",
            "The Romans begin to build Hadrian's Wall.",
            "Archaeologists find wooden letters at Vindolanda.",
            "Visitors look at the invitation in a museum."
          ],
          hilfen: ["Frage dich bei jedem Satz: Ist das vor fast 2000 Jahren passiert oder in unserer Zeit?", "Zuerst kommt der Brief, dann liest Lepidina ihn, am Ende sieht sie Claudias eigene Worte.", "Die Bilder der Geschichte stehen schon in der richtigen Reihenfolge – lies Bild für Bild nach."] }
      ] },
      { kurz: "That's wrong!", ober: "Understanding", titel: "Correct the sentences", teile: [
        { art: "merke", kopf: "CORRECT A SENTENCE", html: `<p>Say <b>That's wrong.</b> – and then give the right information:</p><p><i>Aelia lived in London. – <b>That's wrong.</b> She lived at Vindolanda.</i></p><p><span class="de">So berichtigst du eine falsche Aussage: „That's wrong.“ und dann der richtige Satz.</span></p>` },
        { nur: "R", art: "luecke", id: "berichtigen", tag: "That's wrong!", titel: "What is right?",
          lead: `These sentences are wrong. Complete the right answers. <span class="de">Die Sätze sind falsch. Setze das richtige Wort ein. Drei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["Aelia's mother was a soldier. – That's wrong. She was a ", { g: "cook" }, "."],
            ["The letter was on paper. – That's wrong. It was on thin ", { g: "wood" }, "."],
            ["Claudia invited Lepidina to a wedding. – That's wrong. She invited her to her ", { g: "birthday" }, " party."],
            ["Lepidina and Claudia were real sisters. – That's wrong. They were good ", { g: "friends" }, "."],
            ["Claudia wrote the whole letter herself. – That's wrong. A ", { g: "writer" }, " wrote most of it."],
            ["We know that Lepidina went to the party. – That's wrong. ", { g: "Nobody" }, " knows."]
          ], extra: ["teacher", "stone", "brothers"],
          hilfen: ["Lies den falschen Satz und suche die Stelle in der Geschichte (📖 Text).", "Aelia erzählt in Bild 1 von ihrer Mutter, in Bild 3 vom Brief, in Bild 5 vom Schreiber.", "Ob Lepidina zur Feier ging, steht in Bild 6."] },
        { nur: "M", art: "offen", id: "berichtigen", tag: "That's wrong!", titel: "Correct the sentences",
          lead: "These sentences are wrong. Correct them. Start with <b>That's wrong.</b>",
          fragen: [
            { q: "Aelia's mother was a soldier at Vindolanda.", m: "That's wrong. She was a cook in the commander's house.", k: ["wrong|not true|no", "cook|kitchen"], min: 2 },
            { q: "Claudia wrote the whole letter herself.", m: "That's wrong. A writer wrote most of the letter. Claudia only wrote a few lines at the end.", k: ["wrong|not true|no", "writer|somebody|someone|scribe|another person|secretary", "end|few|lines|words|last"], min: 2 },
            { q: "Lepidina and Claudia were real sisters.", m: "That's wrong. They were probably not real sisters – they were good friends.", k: ["wrong|not true|no", "friend|friends|not real|not sisters"], min: 2 }
          ],
          tipp: "Start with That's wrong. – then write the right information in one sentence." },
        { art: "merke", kopf: "CULTURE", html: `<p><b>Die Römer in Britannien:</b> Fast 400 Jahre lang gehörte ein großer Teil Britanniens zum Römischen Reich. Die Soldaten lebten in Kastellen (forts), geschrieben wurde auf Latein. In Vindolanda fand man mehr als tausend dünne Holztäfelchen mit Briefen und Listen – sie zeigen, wie die Menschen damals lebten.</p><p>Auch in Bayern gab es römische Kastelle, zum Beispiel am Limes. Weißt du, wo bei dir in der Nähe die Römer waren?</p>` },
        { art: "offen", id: "besonders", m7: true, tag: "Challenge · Your words", titel: "Why are these lines special?",
          lead: `Answer in English. One or two sentences are enough. <span class="de">Warum freuen sich Historiker so über Claudias eigene Zeilen?</span>`,
          fragen: [{ q: "Why are Claudia's few lines so special for historians today?", m: "Because they are one of the oldest known examples of a woman's handwriting in Latin – Claudia wrote them herself almost 2,000 years ago.", k: ["old|oldest|2,000|2000|years", "woman|herself|own|handwriting|wrote"], min: 2 }],
          tipp: "Think about two things: How old are the lines? Who wrote them? Start like this: Because they are …" }
      ] },
      { kurz: "Language", ober: "Simple past · mine, yours, hers", titel: "Grammar in the story", teile: [
        { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: `<p><b>Aelia tells the story in the simple past:</b> <i>I <u>lived</u> at Vindolanda. Claudia <u>invited</u> Lepidina.</i> Many verbs are irregular: <i>come – came, write – wrote, lie – lay, begin – began</i>.</p><p><b>The speech bubbles</b> use possessive pronouns – without a noun: <i>This letter is <u>mine</u>! These last words are <u>hers</u>.</i></p><p><span class="de">Die Erzählerin spricht über damals (simple past). In den Sprechblasen sagen die Personen, wem etwas gehört: mine, yours, his, hers, ours, theirs.</span></p>` },
        { nur: "R", art: "luecke", id: "vergangenheit", tag: "Simple past", titel: "Life at the fort", foerder: FOERDER_SP,
          lead: `Complete the sentences with the simple past of the verbs in brackets. <span class="de">Alle Formen stehen im Wortspeicher, eine bleibt übrig.</span>`,
          absaetze: [
            ["Every morning Aelia ", { g: "got" }, " (get) up very early."],
            ["She ", { g: "helped" }, " (help) her mother in the kitchen."],
            ["Aelia ", { g: "didn't have" }, " (not have) much free time."],
            ["In the evening, Aelia and her mother ", { g: "sat" }, " (sit) by the fire."],
            ["Lepidina ", { g: "was" }, " (be) very happy about the invitation."],
            ["The winters at the fort ", { g: "were" }, " (be) cold and wet."],
            ["Aelia ", { g: "carried" }, " (carry) the bread to the table."]
          ], extra: ["sitted"],
          hilfen: ["Suche zu jedem Verb in Klammern die Vergangenheitsform im Wortspeicher.", "help und carry sind regelmäßig (-ed; carry → carried). get und sit sind unregelmäßig.", "was oder were? Lepidina → was · the winters → were. (not have) → didn't have."] },
        { nur: "M", art: "luecke", id: "vergangenheit", tag: "Simple past", titel: "Life at the fort", foerder: FOERDER_SP,
          lead: "Complete the sentences with the simple past of the verbs in brackets. Three words in the box are wrong.",
          absaetze: [
            ["Every morning Aelia ", { g: "got" }, " (get) up very early."],
            ["She ", { g: "helped" }, " (help) her mother in the kitchen."],
            ["Aelia ", { g: "didn't have" }, " (not have) much free time."],
            ["In the evening, Aelia and her mother ", { g: "sat" }, " (sit) by the fire."],
            ["Lepidina ", { g: "was" }, " (be) very happy about the invitation."],
            ["The winters at the fort ", { g: "were" }, " (be) cold and wet."],
            ["Aelia ", { g: "carried" }, " (carry) the bread to the table."]
          ], extra: ["sitted", "getted", "didn't had"] },
        { art: "mc", id: "wem", tag: "Whose is it?", titel: "mine, yours, hers …", foerder: FOERDER_POSS,
          lead: `Tick the right word. <span class="de">Nach dem Wort steht kein Nomen mehr.</span>`,
          fragen: [
            { q: "Lepidina holds the letter. Aelia asks: \"Is that letter ____, Lepidina?\"", o: ["yours", "your", "you", "you're"], a: 0,
              e: "Ohne Nomen danach steht yours (deiner, deins). Your braucht ein Nomen: your letter." },
            { q: "The last lines are in Claudia's handwriting. They are ____.", o: ["hers", "her", "his", "she"], a: 0,
              e: "Claudia ist eine Frau, und danach steht kein Nomen: hers." },
            { q: "Aelia and her mother sleep in a small room in the commander's house. The room is ____.", o: ["theirs", "their", "them", "they"], a: 0,
              e: "Der Raum gehört den beiden (sie, Mehrzahl), und danach steht kein Nomen: theirs." }
          ] },
        { art: "offen", id: "sprechblase", m7: true, tag: "Challenge · Speech bubble", titel: "A speech bubble for Picture 8",
          lead: `Write <b>one speech bubble</b> for a visitor in Picture 8. The visitor talks about her or his own birthday invitation. Use <b>mine</b> or <b>ours</b>. <span class="de">Was sagt ein Kind im Museum über seine eigene Einladung?</span>`,
          fragen: [{ q: "What does the visitor say? Use mine or ours.", m: "Wow, this invitation is so old! Mine was a message on my phone.", k: ["mine|ours|yours|hers|his|theirs", "invitation|party|birthday|letter|phone|message|card"], min: 2 }],
          tipp: "Start like this: This invitation is so old! Mine was …" }
      ] },
      { kurz: "Your choice", ober: "Writing", titel: "Write about the story", teile: [
        { art: "text", html: `<p class="lead">Now you write about the story. <span class="de">Jetzt schreibst du selbst. Die Fakten stehen in der Geschichte (📖 Text).</span></p>` },
        { art: "merke", kopf: "HELP FOR YOUR TEXT", html: `<p><b>Facts:</b> Vindolanda · a Roman fort · the commander Flavius Cerialis · his wife Sulpicia Lepidina · Claudia Severa · a birthday party on 11 September · a thin piece of wood · ink · a writer · her own handwriting · 1973 · a museum<br><b>Verbs in the simple past:</b> lived, was, came, invited, wrote, began, found<br><b>Linking words:</b> first · then · after that · but · today</p>` },
        { art: "schreiben", id: "wahl", nur: "R", tag: "Your task", titel: "Captions for the pictures", min: 40,
          auftrag: `<p><b>Write captions</b> for Pictures 1, 3, 5 and 8 – one or two sentences for each picture. Use the simple past. <span class="de">Schreibe zu vier Bildern je ein bis zwei Sätze (Bildunterschriften), zusammen mindestens 40 Wörter.</span></p>`,
          starter: ["Picture 1: Aelia lived …", "Picture 3: The letter was …", "Picture 5: At the end, Claudia …", "Picture 8: In 1973, …"],
          kriterien: ["Zu jedem der vier Bilder steht mindestens ein Satz.", "Die Sätze passen zur Geschichte (Aelia in Vindolanda, der Brief aus Holz, Claudias eigene Worte, die Funde ab 1973).", "Die Verben stehen im simple past (lived, was, wrote, began).", "Die Bildunterschriften nennen die Personen mit ihrem Namen."] },
        { art: "schreiben", id: "wahl", nur: "M", tag: "Your task", titel: "Choose A or B", min: 60,
          auftrag: `<p><b>Choose one task</b> (60 words or more):</p><p><b>A) Captions.</b> Write a caption for each of the eight pictures – one sentence each, in the simple past.</p><p><b>B) Lepidina's answer.</b> Nobody knows what Lepidina wrote back. Write her short letter to Claudia: say thank you, say if she can come to the party, ask a question and say goodbye.</p><p>Write the letter of your task (A or B) at the start.</p>`,
          starter: ["A) Picture 1: Aelia lived …", "B) Dear Claudia, thank you for …", "I can come / I can't come because …", "Can I bring …?", "Goodbye, sister!"],
          kriterien: ["Du sagst am Anfang, ob du Aufgabe A oder B gewählt hast.", "A: Zu jedem der acht Bilder steht ein Satz. B: Der Brief bedankt sich, sagt zu oder ab und stellt eine Frage.", "Die Sätze passen zur Geschichte (Claudia, Lepidina, Vindolanda, die Feier am 11. September).", "A: Die Verben stehen im simple past. B: Der Brief hat eine Anrede und einen Gruß am Schluss.", "Der Text hat mindestens 60 Wörter."] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know", lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Vindolanda was a Roman fort in the north of Britain.", true],
            ["Claudia's birthday party was on 11 September.", true],
            ["Aelia is a real person from Roman times.", false],
            ["The letter was about as big as a postcard.", true],
            ["Lepidina wrote the invitation to Claudia.", false],
            ["Today the invitation is in a museum.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a story about a real letter from Roman times, correct wrong sentences and write about history in the simple past." }
  });
})();
