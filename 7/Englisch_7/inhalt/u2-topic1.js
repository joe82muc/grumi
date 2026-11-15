/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Topic 1: My favourite activity
   (einen Chat über eine Freizeitaktivität lesen und verstehen, Adjektive und Gegenteile, Wortbetonung, das present perfect im
   Kontext (have/has + 3. Form, already/never/yet) und am Ende die eigene Lieblingsaktivität vorstellen)
   Buchprinzip (BUCH-UNIT2, Abschnitt Topic 1): Chat mit Zeilennummern -> Sätze vervollständigen · Adjektive: Gegenteile
   zuordnen und einsetzen · Werbetext mit Adjektiv-Lücken · Wortbetonung (Ooo / oOo) · Language detectives zum present
   perfect · To-do-Liste: schon erledigt / noch nicht · Sätze über sich selbst · Task: Lieblingsaktivität vorstellen mit
   Leitfragen. Hier mit eigenem Chat, eigener Liste, eigenem Werbetext; besser: Hilfen in Stufen, Förder-Links, KI-Korrektur
   der Sätze über sich selbst, KI-Rückmeldung (Schreibtrainer) zur Vorstellung.
   LehrplanPLUS E7 Leseverstehen (Chat, Einzelheiten und Textstellen), E7 Wortschatz Freizeit und Sport / Adjektive,
   E7 Aussprache (Wortbetonung), E7 Grammatik: present perfect Aussagen und Verneinung (G6), going to als Ausblick (G5),
   E7 Schreiben (kurze Vorstellung der Lieblingsaktivität).
   Texte: „After a day at Llyn Glas“ (texte/u2/u2-t1-chat-r.js, -m.js) – erfundener See, erfundenes Zentrum, erfundene Personen
   (Rhys und Megan, 13, aus Llandudno; Llandudno gibt es in Nordwales). R7 173 Wörter, M7 289 Wörter.
   Förder-Links: Adjektive und Gegenteile -> unit2/extra/adjectives.html,
   have/has + 3. Form -> unit2/extra/have-has-participle.html.
   Sätze über sich selbst: offen (korrigieren wird vom Prüfer test-e7-modul.js nicht bedient).
   m7: drei Aufgaben (Erklären, Gegensatz-Satz, already/yet erklären); für 7R freiwillig.
   // BILDER:
   // 1. Station 1 (Vorentlastung, Sprechanlass): Llyn Glas an einem Septembertag – ein Bergsee, zwei Kajaks und ein Stand-up-
   //    Paddleboard am Steg, ein Instruktor im Neoprenanzug erklärt einer kleinen Gruppe Jugendlicher mit Helmen etwas.
   // 2. Station 2 (Chat): zwei 13-Jährige (Junge und Mädchen) sitzen abends auf dem Sofa und schauen auf ihre Handys, im
   //    Hintergrund ein Foto vom See an der Wand – Vorentlastung für die Chat-Situation.
   // 3. Station 3 (Werbetext): Plakat des Zentrums – Kajak auf blauem See, Berge, ein Café-Schild mit heißer Schokolade;
   //    ohne lesbaren Text (der Text steht in der Aufgabe). */
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

  D7Kit.seite({
    id: "u2-topic1",
    titel: "Topic 1: My favourite activity",
    einleitung: "Rhys and Megan spent a day at a lake in Wales – kayak, paddleboard, mountain bike. You read their chat, find the right adjectives, say what you <b>have</b> and <b>haven't</b> done – and then you present <b>your</b> favourite activity.",
    zeit: "etwa 45 Minuten",
    ziele: ["💬 I understand a chat and find details.", "🎨 I describe activities with adjectives and their opposites.", "✅ I say what I have already done – and what I haven't done yet.", "🏄 I present my favourite activity."],
    thema: "Unit 2 Fun in Wales and Scotland: Topic 1 (Lieblingsaktivität vorstellen)",
    quiz: { profi: "Chat pro" },
    glossar: {
      kayak: ["kayak", "Ein Kajak ist ein kleines, schmales Boot. Man sitzt darin und paddelt mit einem Paddel, das an beiden Seiten ein Blatt hat."],
      sup: ["stand-up paddling", "Stehpaddeln: Man steht auf einem großen Brett (paddleboard) auf dem Wasser und paddelt."],
      wetsuit: ["wetsuit", "Neoprenanzug: Er hält im kalten Wasser warm."],
      steep: ["steep", "steil: Ein steiler Weg geht stark bergauf oder bergab."],
      muddy: ["muddy", "matschig: Der Weg ist voller Schlamm."],
      instructor: ["instructor", "Trainer oder Trainerin: Diese Person bringt dir etwas bei."],
      afraid: ["afraid", "ängstlich: Man hat ein bisschen Angst."],
      adjective: ["adjective", "Adjektiv (Eigenschaftswort): Es beschreibt, wie etwas oder jemand ist, zum Beispiel easy, cold, friendly."],
      stress: ["word stress", "Wortbetonung: Bei einem Wort mit mehreren Silben klingt eine Silbe lauter und länger als die anderen."],
      participle: ["past participle", "Das ist die 3. Form des Verbs, zum Beispiel done, been, played. Sie steht nach have oder has."],
      llyn: ["Llyn Glas", "Llyn Glas heißt auf Walisisch etwa „blauer See“. Den See und das Zentrum in diesem Modul gibt es nicht wirklich – sie sind erfunden."]
    },
    haupttext: { R: "u2-t1-chat-r", M: "u2-t1-chat-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "A day at the lake", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a lake in the mountains</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-t1-see.jpg\" width=\"1280\" height=\"853\" alt=\"A mountain lake with two kayaks and a paddleboard at a jetty; an instructor talks to young people with helmets.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see? What would you like to try – kayak or paddleboard? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Rhys and Megan are 13 and live in <b>Llandudno</b>, a town by the sea in the north of Wales. Today their class visited a water sports centre at <button class="term" data-t="llyn">Llyn Glas</button>, a lake in the mountains. Now, in the evening, they chat about the day.</p><p>Which activities would you try – and which not? <span class="de">Überlege kurz, was du ausprobieren würdest: Kajak, Stehpaddeln oder Mountainbike? Die Personen und das Zentrum sind erfunden.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du im Chat. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["kayak", "Kajak"], ["stand-up paddling", "Stehpaddeln"], ["wetsuit", "Neoprenanzug"], ["steep", "steil"], ["muddy", "matschig"], ["instructor", "Trainer, Trainerin"], ["afraid", "ängstlich"]],
          hilfen: ["Fang mit den Wörtern an, die du schon erkennst.", "Ein Wort hat mit Wasser zu tun, eines mit Bergen, eines mit Angst.", "Tippe zuerst kayak und suche das Boot."] }
      ] },
      { kurz: "The chat", ober: "Reading", titel: "Read the chat", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a chat in the evening</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-t1-chat.jpg\" width=\"1280\" height=\"853\" alt=\"Two teenagers on a sofa look at their phones; a lake photo hangs on the wall.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who are the two? What could they be writing about? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Read the chat. Don't stop at words you don't know. <span class="de">Lies den Chat einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u2-t1-chat-r", M: "u2-t1-chat-m" } },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is it about?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Where were Rhys and Megan with their class?", o: ["At a water sports centre at a lake", "At their school in Llandudno", "At a swimming pool in a town", "At a beach by the sea"], a: 0,
              e: "They write about Llyn Glas – a lake in the mountains with a water sports centre." },
            { q: "Who writes that it was the first time in a kayak?", o: ["Rhys", "Megan", "Gethin, the instructor", "Rhys's dad"], a: 0,
              e: "Rhys says it was his first time in a kayak." }
          ] },
        { art: "luecke", id: "saetze", tag: "Complete the sentences", titel: "What does the chat say?",
          lead: `Complete the sentences with words from the box. <span class="de">Zwei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["Gethin is the ", { g: "instructor" }, " at the centre."],
            ["Megan fell into the ", { g: "water" }, " three times."],
            ["Her ", { g: "wetsuit" }, " kept Megan warm in the cold lake."],
            ["On the bike tour the path was steep and ", { g: "muddy" }, "."],
            ["Megan wore her ", { g: "helmet" }, " because she wanted to be safe."],
            ["The family weekend at the centre is in ", { g: "October" }, "."]
          ], extra: ["tent", "May"],
          hilfen: ["Lies die Sätze zuerst ganz – manchmal passt nur ein Wort.", "Schau im Chat nach: Welche Nachricht passt zum Satz?", "Tippe 📖 Text und suche die Stelle zu jedem Satz."] },
        ...zwei({ art: "beleg", id: "zeilen", tag: "Evidence from the chat", titel: "Where does the chat say that?" },
          "Tap the lines in the chat.", "Tippe die Zeilen an, in denen die Antwort steht.", { hilfenR: ["Lies die Frage und suche das passende Wort im Chat.", "Die Antwort steht in einer einzigen Nachricht."] }).map((t, i) => Object.assign(t, i === 0
          ? { lesetext: "u2-t1-chat-r", fragen: [
              { q: "What does Rhys say about the kayak?", zeilen: [3, 4], e: "It was his first time in a kayak, and it was easy and fun.", tipp: "Look for the word kayak in Rhys's second message." },
              { q: "What is the family weekend?", zeilen: [14, 15], e: "It is a weekend for families at the centre in October – Rhys's family is going to book it.", tipp: "Rhys talks about his dad and the website." },
              { q: "What does Rhys say about the café?", zeilen: [18, 18], e: "The hot chocolate there is amazing.", tipp: "Look at one of Rhys's last messages." }
            ] }
          : { lesetext: "u2-t1-chat-m", fragen: [
              { q: "What does Rhys say about the kayak?", zeilen: [5, 7], e: "It was his first time in a kayak, and it was much easier than he thought.", tipp: "Look for the word kayak in Rhys's second message." },
              { q: "What is the family weekend?", zeilen: [19, 21], e: "It is a weekend for families at the centre in October – Rhys's family is going to book it.", tipp: "Rhys talks about his dad and the centre's website." },
              { q: "What does Rhys say about the café?", zeilen: [24, 25], e: "The hot chocolate there is amazing.", tipp: "Look at one of Rhys's last messages." }
            ] })),
        { art: "offen", id: "angst", m7: true, tag: "Challenge · Your words", titel: "What helped Megan?",
          lead: `Answer in English. One sentence is enough. <span class="de">Antworte mit eigenen Worten – nicht abschreiben.</span>`,
          fragen: [{ q: "Megan was afraid at first. What helped her on the bike tour?", m: "She wore her helmet and she was careful, so she felt safe.", k: ["helmet", "careful|safe|safely"], min: 2 }],
          tipp: "Read Megan's message about the bike tour again. Start like this: She wore … and she was …" }
      ] },
      { kurz: "Adjectives", ober: "Words and sounds", titel: "Adjectives and word stress", teile: [
        { art: "merke", kopf: "ADJECTIVES", html: `<p><button class="term" data-t="adjective">Adjectives</button> make a text more interesting. They say <b>how</b> something is: <i>a cold lake, a fast kayak, a friendly instructor</i>.</p><p>Many adjectives come in pairs with <b>opposite</b> meanings – learn them together!</p>` },
        { art: "paare", id: "gegenteile", tag: "Opposites", titel: "Find the opposites",
          lead: `Match each adjective with its opposite. <span class="de">Verbinde die Gegenteile.</span>`,
          paare: [["easy", "difficult"], ["safe", "dangerous"], ["exciting", "boring"], ["fast", "slow"], ["warm", "cold"], ["clean", "dirty"]],
          foerder: { href: "unit2/extra/adjectives.html", text: "Extra: Adjektive und Gegenteile" },
          hilfen: ["Fang mit dem Paar an, das du sicher kennst.", "Manche Gegenteile kennst du aus dem Alltag: heiß/kalt, schnell/langsam.", "Ein Paar passt zu „Gefahr“, ein Paar zu „Langeweile“."] },
        { art: "mc", id: "adj", tag: "Choose the adjective", titel: "Which word fits?", foerder: { href: "unit2/extra/adjectives.html", text: "Extra: Adjektive und Gegenteile" },
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "After the long bike tour, Rhys was very ____ and wanted to sleep.", o: ["tired", "boring", "steep", "narrow"], a: 0,
              e: "Tired heißt müde. Steep und narrow beschreiben Wege, boring beschreibt etwas Langweiliges." },
            { q: "A path that goes up a hill very quickly is not flat – it is ____.", o: ["steep", "muddy", "clean", "fast"], a: 0,
              e: "Steep heißt steil. Das Gegenteil ist flat (flach)." }
          ] },
        { art: "luecke", id: "werbetext", tag: "Advert", titel: "An advert for the centre",
          lead: `Complete the advert with adjectives from the box. <span class="de">Ein Werbetext macht neugierig – mit Adjektiven klingt er besser. Ein Wort bleibt übrig.</span>`,
          foerder: { href: "unit2/extra/adjectives.html", text: "Extra: Adjektive und Gegenteile" },
          absaetze: [
            ["Do you want an exciting day at the lake? Come to Llyn Glas Water Sports Centre!"],
            ["Our ", { g: "friendly" }, " instructors show you every step."],
            ["Our ", { g: "fast" }, " kayaks are great for races."],
            ["After the lesson, a ", { g: "warm" }, " shower and a hot chocolate are waiting for you."],
            ["Every helmet is ", { g: "safe" }, ", so you can relax."],
            ["The mountains around the lake look ", { g: "beautiful" }, "."],
            ["And the tickets are ", { g: "cheap" }, " for families."]
          ], extra: ["boring"],
          hilfen: ["Lies jeden Satz und frage: Welches Eigenschaftswort passt zu diesem Nomen?", "Ein Wort passt zu Wasser und Duschen, ein anderes zu Preisen.", "Streiche die Wörter weg, die du schon gesetzt hast."] },
        { art: "offen", id: "gegensatz", m7: true, tag: "Challenge · Your words", titel: "Two opposites in one sentence",
          lead: `Write <b>one sentence</b> with an adjective and its opposite. <span class="de">Zum Beispiel über eine Aktivität, die du kennst: …was …, but … was …</span>`,
          fragen: [{ q: "Describe two things with opposite adjectives.", m: "The kayak was easy, but stand-up paddling was difficult.", k: ["but|while|although|whereas|however", "easy|difficult|safe|dangerous|boring|exciting|fast|slow|warm|cold|dirty|clean|big|small|hot|cool|steep|flat|long|short|old|new"], min: 2 }],
          tipp: "Use but: The lake was cold, but the café was warm." },
        { art: "merke", kopf: "WORD STRESS", html: `<p>In longer words one syllable is <b>stronger</b> – this is the <button class="term" data-t="stress">word stress</button>. A dictionary shows it with ˈ before the strong syllable.</p><p><b>Ooo</b> – the first syllable is strong: <i>WON-der-ful</i><br><b>oOo</b> – the second syllable is strong: <i>im-POR-tant</i></p><p>Say each word aloud and clap on the strong syllable. <span class="de">Sprich die Wörter laut und klatsche bei der starken Silbe.</span></p>` },
        { art: "sort", id: "betonung", tag: "Sounds", titel: "Where is the stress?",
          lead: `Say the words aloud. Then put them into the right box. <span class="de">Welche Silbe ist stark?</span>`,
          buckets: ["Ooo (first syllable strong)", "oOo (second syllable strong)"],
          items: [{ t: "dangerous", b: 0 }, { t: "difficult", b: 0 }, { t: "holiday", b: 0 }, { t: "family", b: 0 },
                  { t: "adventure", b: 1 }, { t: "instructor", b: 1 }, { t: "tomorrow", b: 1 }, { t: "equipment", b: 1 }],
          hilfen: ["Sprich das Wort laut und klatsche dabei die Silben.", "Zähle die Silben: Alle Wörter hier haben drei Silben.", "Welche Silbe klingt lauter und länger? Steht sie vorne oder in der Mitte?"] }
      ] },
      { kurz: "Language", ober: "Present perfect", titel: "What have they done? What haven't they done?", teile: [
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<p>Look at the chat: <i>I <u>have never been</u> so dirty. · Dad <u>has already looked</u> at the website. · I <u>haven't asked</u> my mum <u>yet</u>.</i></p><ul><li><b>have / has + <button class="term" data-t="participle">past participle</button></b> – something has happened, and it still matters now.</li><li><b>I / you / we / they have</b> – <b>he / she / it has</b></li><li><b>already</b> and <b>never</b> stand after have/has. <b>yet</b> stands at the end of a negative sentence: <i>haven't … yet</i>.</li><li>Negative: <i>haven't</i> / <i>hasn't</i> + past participle.</li></ul><p>Plans: <i>We <u>are going to book</u> the weekend tomorrow.</i> <span class="de">going to = ein Plan („wir wollen/werden …“).</span></p>` },
        { art: "markieren", id: "perfekt", tag: "Find it", titel: "Which two words make the present perfect?", foerder: { href: "unit2/extra/have-has-participle.html", text: "Extra: have/has + 3. Form" },
          finde: "have/has and the past participle", toleranz: 0,
          satz: "Megan [[has]] already [[packed]] her wetsuit.",
          e: "has + packed = present perfect. Already stands between the two words.",
          hilfen: ["Das present perfect besteht aus zwei Wörtern.", "Das erste ist have oder has.", "Das zweite ist die 3. Form: hier mit -ed am Ende."] },
        { art: "paare", id: "unregelmaessig", tag: "Irregular verbs", titel: "Verb – past participle", foerder: { href: "unit2/extra/have-has-participle.html", text: "Extra: have/has + 3. Form" },
          lead: `Match the verb with its past participle. <span class="de">Viele Verben bilden die 3. Form unregelmäßig. Verbinde Grundform und 3. Form.</span>`,
          paare: [["do", "done"], ["see", "seen"], ["take", "taken"], ["go", "gone"], ["make", "made"], ["think", "thought"]],
          hilfen: ["Manche 3. Formen sehen fast aus wie die Grundform.", "Bei make und think steht keine Silbe -en am Ende.", "Sprich die Wörter laut: have + done klingt vertraut."] },
        { art: "beispiel", kopf: "RHYS'S LIST BEFORE THE FAMILY WEEKEND", html: `<p>✔ check the weather<br>✔ pack the helmet<br>✔ charge the camera<br>✘ book the weekend<br>✘ ask Gran to come<br>✘ buy new gloves</p><p>✔ = done · ✘ = not done</p>` },
        { art: "luecke", id: "liste", tag: "Done or not done?", titel: "What has Rhys done?", foerder: { href: "unit2/extra/have-has-participle.html", text: "Extra: have/has + 3. Form" },
          lead: `Look at the list. Complete the sentences with the right form. <span class="de">Schau auf die Liste: Was hat Rhys schon erledigt, was noch nicht? Setze die ganze Form ein.</span>`,
          absaetze: [
            ["Rhys ", { g: "has already checked" }, " the weather."],
            ["He ", { g: "has already packed" }, " the helmet."],
            ["He ", { g: "has already charged" }, " the camera."],
            ["He ", { g: "hasn't booked" }, " the weekend yet."],
            ["He ", { g: "hasn't asked" }, " Gran to come yet."],
            ["He ", { g: "hasn't bought" }, " new gloves yet."]
          ], extra: ["have already checked", "hasn't buy"],
          hilfen: ["Hake in der Liste ab: ✔ = schon erledigt, ✘ = noch nicht.", "✔ heißt: has + 3. Form mit already. ✘ heißt: hasn't + 3. Form, am Ende yet.", "Frage dich bei jedem Satz: Ist es ein Häkchen oder ein Kreuz?"] },
        { art: "mc", id: "perfekt-check", tag: "Check", titel: "Which sentence is correct?", foerder: { href: "unit2/extra/have-has-participle.html", text: "Extra: have/has + 3. Form" },
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Which sentence is correct?", o: ["Noah hasn't packed his bag yet.", "Noah hasn't packed yet his bag.", "Noah yet hasn't packed his bag.", "Noah not has packed his bag yet."], a: 0,
              e: "Yet steht am Ende des verneinten Satzes, haven't/hasn't steht vor der 3. Form." },
            { q: "My friends ____ never been to Scotland.", o: ["have", "has", "is", "are"], a: 0,
              e: "Bei they / we / my friends steht have. Has gehört zu he, she, it." }
          ] },
        { art: "offen", id: "already-yet", m7: true, tag: "Challenge · Explain", titel: "already or yet?",
          lead: `Explain in your own words. English or German. <span class="de">Antworte auf Englisch oder Deutsch.</span>`,
          fragen: [{ q: "When do we use \"already\" and when do we use \"yet\"?", m: "Already is used in positive sentences (She has already finished). Yet is used in negative sentences and in questions (She hasn't finished yet. Has she finished yet?).", k: ["positive|bejaht|Aussage|statement|yes", "negative|not|n't|verneint|Verneinung|nicht"], min: 2 }],
          tipp: "Think of the list: ✔ and ✘. Which word goes with ✔, which with ✘?" },
        { art: "offen", id: "ueber-mich", tag: "About you", titel: "Three sentences about you",
          lead: `Write <b>three sentences</b> about yourself: two things you <b>have</b> already done and one thing you <b>haven't</b> done yet. <span class="de">Schreibe zwei Dinge, die du schon getan hast, und eine Sache, die du noch nicht getan hast.</span>`,
          fragen: [{ q: "What have you done – and what haven't you done yet?", m: "I have already been to Austria. I have already made a pizza. I haven't been on a plane yet.", k: ["have|has|'ve|’ve", "already|never|yet", "haven't|hasn't|never|not|n't"], min: 3 }],
          tipp: "Start like this: I have already … / I have never … / I haven't … yet. Use the past participle: played, visited, been, done." }
      ] },
      { kurz: "Your task", ober: "Task", titel: "Present your favourite activity", teile: [
        { art: "text", html: `<p class="lead">Now it's your turn. You make a short <b>presentation</b> of your favourite sport or activity – like a small poster in words. <span class="de">Schreibe deine Vorstellung. Später kannst du sie vortragen oder ein Plakat dazu gestalten.</span></p>` },
        { art: "merke", kopf: "HELP FOR YOUR TEXT", html: `<p><b>Adjectives:</b> exciting, easy, difficult, dangerous, safe, fast, tiring, great<br><b>Words:</b> you need a helmet / a wetsuit / a bike … · you have to be fit / careful / strong<br><b>How often:</b> every week · twice a month · once a year<br><b>Present perfect:</b> I have already … · I have never … · I haven't … yet<br><b>Next:</b> I'm going to try …</p>` },
        ...[40, 60].map((min, i) => ({
          art: "schreiben", id: "vorstellung", nur: i === 0 ? "R" : "M", tag: "Your task", titel: "My favourite activity", min,
          auftrag: `<p><b>Present your favourite activity</b> (${min} words or more). Choose a sport or a hobby you know well.${i === 0 ? ` <span class="de">Schreibe mindestens 40 Wörter.</span>` : ""}</p><p>Answer these questions in your text:</p><ul><li>What is it?</li><li>What do you do?</li><li>What do you need?</li><li>Where have you done it?</li><li>How often do you do it?</li><li>What are you going to try next?</li></ul><p>Use <b>two adjectives</b> and at least <b>one present perfect sentence</b>.</p>`,
          starter: ["My favourite activity is …", "In this activity you …", "You need …", "I have done it in/at …", "I do it … times a week.", "I'm going to try … next."],
          kriterien: ["Du sagst, welche Aktivität es ist, und beschreibst sie mit mindestens zwei Adjektiven.", "Du schreibst, was man tut und was man braucht.", "Mindestens ein Satz steht im present perfect (I have … / I haven't … yet).", "Du sagst, wo du es schon gemacht hast und wie oft.", "Am Ende steht, was du als Nächstes ausprobieren willst (I'm going to …)."]
        })),
        { art: "text", html: `<p><b>Present it!</b> Write key words on small cards. Practise once. Speak slowly and clearly – and ask your listeners: <i>Do you have any questions?</i> <span class="de">Übe vorher einmal laut. Sprich langsam und deutlich.</span></p>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Before the school trip, Rhys often went kayaking.", false],
            ["Megan fell into the water while stand-up paddling.", true],
            ["We use \"yet\" mostly in negative sentences: She hasn't called yet.", true],
            ["The past participle of \"go\" is \"went\".", false],
            ["\"Already\" usually stands after have or has: He has already left.", true],
            ["The family weekend at the centre is in the summer holidays.", false]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can talk about activities, use adjectives and say what you have – and haven't – done. Next: more practice with the grammar of Unit 2." }
  });
})();
