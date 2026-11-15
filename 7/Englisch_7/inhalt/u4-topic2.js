/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Topic 2: At a summer camp (Kürzel D10)
   (einen Brief aus einem Sommercamp an einem See lesen, richtig/falsch, Textstellen und Bezugswörter finden, Ordnungszahlen,
   gleich klingende Wörter (Homophone), much/many, too much/too many und so much/so many (G11) im Kontext, ein Gespräch über
   einen Camp-Wunsch hören – und am Ende selbst die Eltern in einer Nachricht von einem Sommercamp überzeugen)
   Buchprinzip (BUCH-UNIT4.md, Topic 2, nur Aufbau, nichts übernommen): Vorentlastung zum Camp → Text lesen (much/many und
   Steigerung eingebaut) → Culture-Kasten Summer camps → Right or wrong (4 Aussagen) → Who or what is it? (Bezugswörter) →
   Ordnungszahlen über 31 → gleich klingende Wörter auswählen (●: mit den anderen Wörtern eigene Sätze) → Language detective
   much/many → much/many einsetzen, How much/How many → too much/too many → Task: Eltern von einem Feriencamp überzeugen
   (Ideen, Satzanfänge, Szene). Anders als im Buch: ein Brief statt der Rafting-Traumgeschichte, eigene Homophone, Ordnungszahlen
   aus dem Brief (Datum, 33. Sommer, 100. Geburtstag) statt Präsidenten; dazu ein Hörtext, in dem eine Freundin ihre Mutter
   überzeugen will (Modell für den Task). Besser: sofortige Rückmeldung, Hilfen in Stufen, Förder-Links, KI-Rückmeldung
   (Schreibtrainer) zur eigenen Nachricht.
   Differenzierung: Lesen – eigene Fassungen (R7 206 / M7 303 Wörter) mit eigenen Zeilenangaben und eigenen Bezugswörtern;
   Hören – R7 165 Wörter, Notizen zum Auswählen; M7 225 Wörter mit drittem Sprecher, Notizen selbst schreiben; much/many – R7
   sortiert leichte Nomen, M7 auch homework und information; too/so – R7 zwei Möglichkeiten, M7 vier; Schreiben – R7 mindestens
   40 Wörter mit Satzanfängen sofort, M7 mindestens 60; Plus für M7 (m7): Sätze mit den nicht gewählten Homophonen, eigene Sätze
   mit too much/too many (diese auch für R7, dort freiwillig).
   Sachlich: New Hampshire liegt im Nordosten der USA, hat viele Seen und Wälder und viele Sommercamps; auf den Seen leben im Sommer
   Seetaucher (loons), deren Rufe man nachts hört; in vielen Camps sind Handys verboten, am ersten Tag gibt es oft einen
   Schwimmtest. Der 14. Juli 2026 ist ein Dienstag. Camp Birch Lake, Jada, Priyanka, Ms Ortiz, Imani, Ravi sind erfunden.
   LehrplanPLUS E7 1.1 Leseverstehen (Brief, Einzelheiten, Bezugswörter), E7 1.2 Hörverstehen (Gespräch, Notizen),
   E7 2 Schreiben (Nachricht mit Gründen), E7 4 Wortschatz Sommercamp, Ordnungszahlen, Aussprache (Homophone), E7 Grammatik G11
   (much/many, How much/How many, too much/too many, so much/so many).
   Texte: „A letter from Camp Birch Lake“ (texte/u4/u4-t2-letter-r.js und -m.js) – Jada an Priyanka; „Can I go to camp?“
   (texte/u4/u4-t2-listen-r.js und -m.js) – Priyanka und ihre Mutter (M7 dazu ihr Bruder Ravi).
   Förder-Links: much/many → unit4/extra/much-many.html („Extra: much oder many?“: zählbar oder nicht, much/many wählen, How
   much/How many), Ordnungszahlen → unit4/extra/ordinal-numbers.html („Extra: Ordnungszahlen“: Endungen st/nd/rd/th, Wort zur
   Zahl, Datum).
   Wortschatz der Unit bis Topic 2 (camp, leader, wave, rock, deep, to wake up, dollar, Ordnungszahlen thirty-second bis
   hundredth, much time, many friends, many activities, many people …) und der Wordbank „Summer camp“ (cabin, lake, campfire,
   canoeing, archery, crafts, hiking, dining hall, I'd love to …) kommt bewusst vor. Neu und im Glossar: counsellor, loon,
   homesick, mosquito, bracelet, homophone, weak.
   Rollen im Hörtext: Priyanka = Mädchen (en-GB-LibbyNeural), Mum = Frau (en-GB-SoniaNeural), Ravi = Junge (nur M7,
   en-GB-RyanNeural).
   BILDER:
   1. Station „Get ready“ (Vorentlastung, Sprechanlass): Ein Sommercamp an einem See im Wald – kleine Holzhütten am Ufer, bunte
      Kanus am Steg, ein Lagerfeuerplatz mit Baumstämmen; Abendstimmung.
   2. Station „Jada's letter“ (Lesetext): Ein Mädchen sitzt auf dem oberen Stockbett einer Holzhütte und schreibt mit einer
      Taschenlampe einen Brief; neben ihr ein Freundschaftsband, durchs Fenster ein See mit einem schwarz-weißen Wasservogel.
   3. Station „Listening“ (Vorentlastung): Ein Mädchen zeigt seiner Mutter am Küchentisch einen Brief und ein Freundschaftsband,
      ein kleiner Junge schaut neugierig über den Tisch. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist.
  // Teile mit <span class="de"> im Auftrag (auch Texte) und ohne eigenes nur: werden unten in R7 (mit Hilfe) und M7 (ohne) geteilt.
  const OHNE_DE = s => (s || "").replace(/<p><span class="de">.*?<\/span><\/p>/g, "").replace(/ ?<span class="de">.*?<\/span>/g, "");
  function trenne(stationen) {
    stationen.forEach(st => {
      st.teile = st.teile.flatMap(t => {
        const hat = /class="de"/.test((t.lead || "") + (t.auftrag || ""));
        if (t.art === "text" && !t.nur && /class="de"/.test(t.html || "")) return [Object.assign({}, t, { nur: "R" }), Object.assign({}, t, { nur: "M", html: OHNE_DE(t.html) })];
        if (t.nur || !hat || t.art === "text" || t.art === "merke") return [t];
        const m = Object.assign({}, t, { nur: "M" });
        if (t.lead) m.lead = OHNE_DE(t.lead);
        if (t.auftrag) m.auftrag = OHNE_DE(t.auftrag);
        return [Object.assign({}, t, { nur: "R" }), m];
      });
    });
    return stationen;
  }
  const MENGE = { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" };
  const ZAHLEN = { href: "unit4/extra/ordinal-numbers.html", text: "Extra: Ordnungszahlen" };

  D7Kit.seite({
    id: "u4-topic2",
    titel: "Topic 2: At a summer camp",
    einleitung: "Jada spends the summer at a camp on a lake in New Hampshire. She writes a letter to her friend Priyanka – and Priyanka wants to go there, too! You read the letter, practise numbers like <b>twenty-first</b> and words that sound the same, use <b>much</b> and <b>many</b> – and then you write a message to your parents about a summer camp.",
    zeit: "etwa 45 Minuten",
    ziele: ["📖 I understand a letter from a summer camp and find details.", "🔢 I read and say ordinal numbers like twenty-first and fiftieth.", "👂 I choose the right word when two words sound the same.", "🧺 I use much, many, too much, too many, so much and so many.", "✍️ I write a message to my parents about a summer camp."],
    thema: "Unit 4 USA – here we come!, Topic 2: Sommercamp (Brief, Ordnungszahlen, Homophone, much/many)",
    quiz: { profi: "Camp pro" },
    glossar: {
      counsellor: ["counsellor", "Ein counsellor (amerikanisch: counselor) ist im Sommercamp ein Betreuer oder eine Betreuerin. Er oder sie kümmert sich um eine Gruppe von Kindern."],
      cabin: ["cabin", "Eine cabin ist eine kleine Holzhütte. Im Camp schlafen dort mehrere Kinder."],
      loon: ["loon", "Ein loon (Seetaucher) ist ein schwarz-weißer Wasservogel. Auf den Seen im Norden der USA hört man nachts seine lauten Rufe."],
      homesick: ["homesick", "Homesick heißt: Man hat Heimweh. Man vermisst sein Zuhause und seine Familie."],
      mosquito: ["mosquito", "Ein mosquito ist eine Stechmücke. Die Mehrzahl heißt mosquitoes."],
      bracelet: ["bracelet", "Ein bracelet ist ein Armband. Ein friendship bracelet ist ein selbst geknüpftes Freundschaftsband."],
      archery: ["archery", "Archery ist Bogenschießen."],
      homophone: ["homophone", "Homophones sind Wörter, die gleich klingen, aber anders geschrieben werden und etwas anderes bedeuten, zum Beispiel hear und here."],
      ordinal: ["ordinal number", "Eine ordinal number ist eine Ordnungszahl: first, second, third … Man braucht sie zum Beispiel für ein Datum."],
      weak: ["weak", "Weak heißt schwach. Das Gegenteil ist strong."]
    },
    haupttext: { R: "u4-t2-letter-r", M: "u4-t2-letter-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "Summer camps", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a summer camp in New Hampshire</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-t2-camp.jpg\" width=\"1280\" height=\"853\" alt=\"A summer camp by a lake in the forest in the evening: small wooden cabins, colourful canoes at a dock, and children who sing with a young counsellor at the campfire.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see? What can children do at this camp? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">In the USA, many children go to a <b>summer camp</b> in the summer holidays – for one week or more. They sleep in <button class="term" data-t="cabin">cabins</button> or tents, do sports, sing at the campfire and make new friends. <b>New Hampshire</b>, a state in the north-east of the USA, has lots of lakes and forests – and many summer camps. <span class="de">In den USA fahren viele Kinder in den Sommerferien in ein Sommercamp. New Hampshire liegt im Nordosten der USA und hat viele Seen, Wälder und Camps.</span></p><p>Would you like to go to a summer camp? What would you like to do there? <span class="de">Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du im Brief. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["cabin", "Hütte"], ["canoeing", "Kanufahren"], ["counsellor", "Betreuer, Betreuerin"], ["campfire", "Lagerfeuer"], ["homesick", "Heimweh haben"], ["mosquito", "Stechmücke"]],
          hilfen: ["Fang mit den Wörtern an, die du schon kennst.", "Zwei Wörter sind Dinge im Camp, eines ist ein Tier, eines eine Person.", "Tippe zuerst campfire: camp + fire."] }
      ] },
      { kurz: "Jada's letter", ober: "Reading", titel: "A letter from Camp Birch Lake", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a letter from camp</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-t2-brief.jpg\" width=\"1280\" height=\"853\" alt=\"A girl sits on the top bunk in a wooden cabin and writes a letter by torchlight; a friendship bracelet lies next to her; through the window you can see a lake with a black-and-white water bird.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who could the girl write to? How does she feel at the camp? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Jada is twelve and spends the summer at Camp Birch Lake. She writes a letter to her friend Priyanka. Read the letter. Don't stop at words you don't know. <span class="de">Jada, Priyanka und das Camp sind erfunden. Lies den Brief einmal ganz durch.</span></p>` },
        { art: "lesetext", lesetext: { R: "u4-t2-letter-r", M: "u4-t2-letter-m" } },
        { art: "tf", id: "richtig-falsch", tag: "Right or wrong?", titel: "What does Jada write?",
          lead: `Decide: right or wrong? <span class="de">Richtig oder falsch? Schau in den Brief.</span>`,
          hilfen: ["Lies jede Aussage und suche das Schlüsselwort im Brief: cabin, summer, party, first night.", "Achte auf kleine Wörter: first, Sunday."],
          aussagen: [
            ["Jada sleeps in a cabin with other girls.", true],
            ["This is Ms Ortiz's first summer at the camp.", false],
            ["The big party at the camp is on Sunday.", false],
            ["Jada was homesick on her first night.", true]
          ] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Find the lines", titel: "Where does Jada write that?", lesetext: "u4-t2-letter-r",
          lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`,
          hilfen: ["Lies die Frage und suche ein passendes Wort im Brief: phones, first night.", "Die erste Antwort steht am Anfang des Briefs."],
          fragen: [
            { q: "Why does Jada write a real letter?", zeilen: [3, 4], e: "At camp they can't use their phones.", tipp: "Look for the word phones." },
            { q: "What did Ms Ortiz do on Jada's first night?", zeilen: [13, 14], e: "She sat with Jada and told her funny stories.", tipp: "Look for first night." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Find the lines", titel: "Where does Jada write that?", lesetext: "u4-t2-letter-m",
          lead: `Tap the lines with the answer.`,
          fragen: [
            { q: "Why can Jada take a canoe out now?", zeilen: [8, 9], e: "She passed the swimming test on the first day.", tipp: "Look for the swimming test." },
            { q: "How did Ms Ortiz help Jada on her first night?", zeilen: [17, 19], e: "She sat with her on the steps of the cabin and told her funny stories.", tipp: "Look for first night." }
          ] },
        { art: "merke", kopf: "WHO OR WHAT IS IT?", html: `<p>Texts often use small words instead of names: <b>she, he, it, they, its, these, one, there</b>. To understand them, look at the sentence <b>before</b>. <span class="de">Kleine Wörter wie she, it oder there stehen für ein Wort, das vorher genannt wurde. Schau im Satz davor nach.</span></p>` },
        { nur: "R", art: "mc", id: "bezug", tag: "Who or what is it?", titel: "What do the words stand for?",
          lead: `Tick the correct answer. <span class="de">Wofür steht das unterstrichene Wort?</span>`,
          hilfen: ["Lies im Brief den Satz davor.", "Line 9 nennt Tiere auf dem See. Line 19 und 20 nennen einen Raum im Camp."],
          fragen: [
            { q: "Line 10: \"These birds sound a bit like wolves!\" – What are \"these birds\"?", o: ["the loons", "the mosquitoes", "the wolves"], a: 0,
              e: "In line 9 Jada writes about the loons on the lake. These birds = the loons." },
            { q: "Line 20: \"It was warm and dry there.\" – Where is \"there\"?", o: ["in the dining hall", "on the lake", "in the cabin"], a: 0,
              e: "They made bracelets in the dining hall – it was warm and dry there." }
          ] },
        { nur: "M", art: "mc", id: "bezug", tag: "Who or what is it?", titel: "What do the words stand for?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Line 21: \"a big party for its hundredth birthday\" – What does \"its\" stand for?", o: ["the camp's", "Ms Ortiz's", "the lake's"], a: 0,
              e: "The camp is a hundred years old – it is the camp's hundredth birthday." },
            { q: "Line 25: \"I made one for you!\" – What is \"one\"?", o: ["a friendship bracelet", "a cake", "a canoe"], a: 0,
              e: "They made friendship bracelets in the dining hall, and Jada made one for Priyanka." }
          ] }
      ] },
      { kurz: "Numbers and sounds", ober: "Words", titel: "Ordinal numbers and words that sound the same", teile: [
        { art: "merke", kopf: "ORDINAL NUMBERS", html: `<p>Look at Jada's letter: the date, Ms Ortiz's summers at the camp and the camp's birthday – they all use <button class="term" data-t="ordinal">ordinal numbers</button>.</p><ul><li>Numbers that end in 1, 2, 3 get <b>-st, -nd, -rd</b>: 21st twenty-first · 22nd twenty-second · 23rd twenty-third</li><li>But: 11th, 12th, 13th – and all other numbers get <b>-th</b>.</li><li>Numbers with <b>-ty</b> get <b>-tieth</b>: 30th thirtieth · 50th fiftieth</li><li>Dates: you write <i>17th July</i> and say <i>the seventeenth of July</i>.</li></ul>` },
        { art: "paare", id: "ordnungszahlen", tag: "Ordinal numbers", titel: "Number and word", foerder: ZAHLEN,
          lead: `Match the number and the word. <span class="de">Verbinde die Zahl mit dem Wort.</span>`,
          paare: [["14th", "fourteenth"], ["32nd", "thirty-second"], ["33rd", "thirty-third"], ["45th", "forty-fifth"], ["68th", "sixty-eighth"], ["100th", "hundredth"]],
          hilfen: ["Schau zuerst auf die letzte Ziffer: 2 → second, 3 → third, 5 → fifth, 8 → eighth.", "Die Zehner stehen vorn: thirty-, forty-, sixty-.", "100th heißt hundredth."] },
        { art: "merke", kopf: "SOUNDS THE SAME", html: `<p>Some words sound the same, but they have a different spelling and a different meaning. They are called <button class="term" data-t="homophone">homophones</button>.</p><p><b>hear</b> (hören) – <b>here</b> (hier) · <b>write</b> (schreiben) – <b>right</b> (richtig; rechts) · <b>see</b> (sehen) – <b>sea</b> (Meer)<br><b>week</b> (Woche) – <b>weak</b> (schwach) · <b>wear</b> (tragen) – <b>where</b> (wo) · <b>know</b> (wissen) – <b>no</b> (nein; kein)</p>` },
        { nur: "R", art: "mc", id: "homophone", tag: "Sounds the same", titel: "Which word is right?",
          lead: `Tick the right word. <span class="de">Beide Wörter klingen gleich. Welches passt in den Satz?</span>`,
          hilfen: ["Lies den ganzen Satz. Was bedeutet er?", "Schau im Kasten oben nach, was jedes Wort heißt."],
          fragen: [
            { q: "At night I can ____ the loons on the lake.", o: ["hear", "here"], a: 0, e: "hear = hören. Man hört die Vögel." },
            { q: "Please ____ back soon!", o: ["write", "right"], a: 0, e: "write = schreiben. Jada bittet um einen Brief." },
            { q: "From the top of the hill we could ____ so many lakes.", o: ["see", "sea"], a: 0, e: "see = sehen. Sea ist das Meer." }
          ] },
        { nur: "M", art: "mc", id: "homophone", tag: "Sounds the same", titel: "Which word is right?",
          lead: `Tick the right word.`,
          fragen: [
            { q: "We go canoeing three times a ____.", o: ["week", "weak"], a: 0, e: "week = Woche. Weak heißt schwach." },
            { q: "What should I ____ for the hike? – Your boots and a jacket!", o: ["wear", "where"], a: 0, e: "wear = tragen. Where heißt wo." },
            { q: "I don't ____ the names of all the girls yet.", o: ["know", "no"], a: 0, e: "know = wissen, kennen. No heißt nein oder kein." }
          ] },
        { nur: "M", art: "offen", id: "homophone-saetze", m7: true, tag: "Challenge · Your words", titel: "The other words",
          lead: `Write <b>two sentences</b>: one with <b>where</b> and one with <b>weak</b>.`,
          fragen: [{ q: "Write one sentence with \"where\" and one sentence with \"weak\".", m: "Where is the dining hall? After the long hike my legs were weak.", k: ["where", "weak"], min: 2 }],
          tipp: "where = wo (often in a question) · weak = schwach (the opposite of strong)" }
      ] },
      { kurz: "Language", ober: "much and many", titel: "Much or many?", teile: [
        { nur: "R", art: "merke", kopf: "LANGUAGE DETECTIVE", html: `<p>Look at Jada's letter:</p><ul><li>There are <u>so many</u> activities here.</li><li>I don't have <u>much</u> time to write.</li><li>There are <u>too many</u> mosquitoes.</li><li>There was <u>too much</u> rain for canoeing.</li></ul><p><b>many</b> + things you can count (plural): <i>many activities, many lakes</i><br><b>much</b> + things you can't count: <i>much time, much rain</i><br>Questions: <b>How many …?</b> (wie viele) · <b>How much …?</b> (wie viel)<br><b>too many / too much</b> = zu viele / zu viel · <b>so many / so much</b> = so viele / so viel</p><p><span class="de">Kannst du es zählen (one, two, three …)? Dann many. Sonst much. In bejahten Sätzen sagt man meistens a lot of statt much.</span></p>` },
        { nur: "M", art: "merke", kopf: "LANGUAGE DETECTIVE", html: `<p>Look at Jada's letter:</p><ul><li>There are <u>so many</u> activities that I can't choose.</li><li>There are only two bad things: <u>too many</u> mosquitoes and <u>not much</u> sun.</li><li>Yesterday there was <u>too much</u> rain for canoeing.</li><li><u>How many</u> days until your family's vacation?</li></ul><p><b>many</b> + countable nouns (plural) · <b>much</b> + uncountable nouns<br>Questions: <b>How many …? · How much …?</b><br><b>too many / too much</b> = more than is good · <b>so many / so much</b> = a very big number or amount<br>In positive sentences people usually say <b>a lot of</b>, not <s>much</s>: <i>We have a lot of fun.</i></p><p><span class="de">Achtung: Manche Nomen kann man im Englischen nicht zählen, obwohl es im Deutschen geht – zum Beispiel advice (Rat, Ratschläge): much advice.</span></p>` },
        { nur: "R", art: "sort", id: "zaehlbar", tag: "Sort", titel: "many or much?", foerder: MENGE,
          lead: `Put the nouns into the right box. <span class="de">Kannst du es zählen? Dann many. Sonst much.</span>`,
          buckets: ["many", "much"],
          items: [{ t: "canoes", b: 0 }, { t: "cabins", b: 0 }, { t: "songs", b: 0 }, { t: "girls", b: 0 }, { t: "water", b: 1 }, { t: "food", b: 1 }, { t: "sun cream", b: 1 }, { t: "money", b: 1 }],
          hilfen: ["Kannst du one, two, three davorsetzen? two canoes – ja!", "Wörter mit -s am Ende (Mehrzahl) gehören meistens zu many.", "water, food, sun cream und money kann man nicht einzeln zählen."] },
        { nur: "M", art: "sort", id: "zaehlbar", tag: "Sort", titel: "many or much?", foerder: MENGE,
          lead: `Put the nouns into the right box. Careful: some words are different in German.`,
          buckets: ["many", "much"],
          items: [{ t: "canoes", b: 0 }, { t: "cabins", b: 0 }, { t: "songs", b: 0 }, { t: "girls", b: 0 }, { t: "water", b: 1 }, { t: "sun cream", b: 1 }, { t: "homework", b: 1 }, { t: "information", b: 1 }],
          hilfen: ["Kannst du one, two, three davorsetzen?", "homework und information haben im Englischen keine Mehrzahl – also much."] },
        { art: "luecke", id: "much-many", tag: "Gap text", titel: "Questions and answers at camp", foerder: MENGE,
          lead: `Complete the sentences with words from the box. <span class="de">Zählbar → many / How many. Nicht zählbar → much / How much. Zwei Wörter bleiben übrig.</span>`,
          hilfen: ["Schau auf das Nomen nach der Lücke: girls, sun cream, milk, canoes.", "girls und canoes kann man zählen.", "sun cream und milk kann man nicht zählen."],
          absaetze: [
            ["", { g: "How many" }, " girls sleep in your cabin? – Seven."],
            ["", { g: "How much" }, " sun cream do I need for the hike?"],
            ["We haven't got ", { g: "much" }, " milk for breakfast."],
            ["There aren't ", { g: "many" }, " canoes on the lake today."]
          ], extra: ["How long", "too"] },
        { nur: "R", art: "mc", id: "too-so", tag: "Choose", titel: "too or so?", foerder: MENGE,
          lead: `Tick the correct answer. <span class="de">too many / too much = zu viele / zu viel (ein Problem). so many / so much = so viele / so viel.</span>`,
          hilfen: ["Kann man das Nomen zählen? T-shirts – ja, noise – nein.", "Ist es ein Problem? Dann too."],
          fragen: [
            { q: "Imani packed ____ T-shirts. Her bag doesn't close!", o: ["too many", "too much"], a: 0, e: "T-shirts kann man zählen, und es ist ein Problem: too many." },
            { q: "There is ____ noise in the dining hall. I can't hear my friends.", o: ["too much", "too many"], a: 0, e: "noise (Lärm) kann man nicht zählen: too much." },
            { q: "Wow! There are ____ stars in the sky tonight. It's beautiful!", o: ["so many", "too many"], a: 0, e: "Es ist etwas Schönes, kein Problem: so many (so viele)." }
          ] },
        { nur: "M", art: "mc", id: "too-so", tag: "Choose", titel: "too or so?", foerder: MENGE,
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Wow! There are ____ birds on the lake this morning. It's beautiful!", o: ["so many", "so much", "too much", "much"], a: 0, e: "birds kann man zählen, und es ist etwas Schönes: so many." },
            { q: "There's ____ food in my backpack. I can't carry it!", o: ["too much", "too many", "so many", "many"], a: 0, e: "food kann man nicht zählen, und es ist ein Problem: too much." }
          ] },
        { art: "offen", id: "zu-viel", m7: true, tag: "Challenge · Your words", titel: "Too much, too many",
          lead: `Write <b>two sentences</b> about your school or your town: one with <b>too many</b> and one with <b>too much</b>. <span class="de">Schreibe zwei Sätze über deine Schule oder deinen Ort: einen mit too many, einen mit too much.</span>`,
          fragen: [{ q: "Write two sentences about your school or your town: one with \"too many\" and one with \"too much\".", m: "There are too many cars in front of our school in the morning. And we have too much homework on Fridays.", k: ["too many", "too much"], min: 2 }],
          tipp: "too many + plural (cars, people, tests) · too much + uncountable (homework, noise, traffic)" }
      ] },
      { kurz: "Listening", ober: "Can I go?", titel: "Priyanka asks her mum", teile: [
        { art: "text", html: `<p class="lead">Priyanka has just read Jada's letter. Now she wants to go to the camp next summer, too. She talks to her mum. <b>Read the notes first, then listen.</b> <span class="de">Lies zuerst die Fragen. Achte darauf, welche Sorgen die Mutter hat und was Priyanka antwortet.</span></p>` },
        { art: "hoertext", id: "gespraech", tag: "🎧 Listening", hoertext: { R: "u4-t2-listen-r", M: "u4-t2-listen-m" },
          fragen: [
            { art: "formular", id: "notizen", nur: "R", titel: "Your notes", lead: `Listen and choose the right answers. <span class="de">Hör zu und wähle für jede Frage die richtige Notiz.</span>`,
              kopf: "Notes: Can I go to camp?",
              felder: [
                { label: "How long does Priyanka want to stay at camp?", loesung: ["two weeks"], wahl: ["two weeks", "three weeks", "two days"] },
                { label: "What happened at Grandma's house when Priyanka was eight?", loesung: ["She was homesick."], wahl: ["She was homesick.", "She was ill.", "She lost her phone."] },
                { label: "How can Priyanka help to pay?", loesung: ["walk the neighbour's dog"], wahl: ["walk the neighbour's dog", "wash cars", "sell her bike"] },
                { label: "What happens on the first day at camp?", loesung: ["a swimming test"], wahl: ["a swimming test", "a big party", "a long hike"] },
                { label: "Who do they want to talk to tonight?", loesung: ["Dad"], wahl: ["Dad", "Grandma", "Jada"] }
              ] },
            { art: "formular", id: "notizen", nur: "M", titel: "Your notes", lead: `Listen and write short notes. <span class="de">Notiere zu jeder Frage ein bis sechs Wörter.</span>`,
              kopf: "Notes: Can I go to camp?",
              felder: [
                { label: "How long would Priyanka stay at camp?", platz: "a few words", loesung: ["two weeks", "2 weeks", "for two weeks", "for 2 weeks", "two weeks long"] },
                { label: "Where was Priyanka homesick when she was eight?", platz: "a few words", loesung: ["at Grandma's", "at Grandma's house", "at her grandma's", "at her grandma's house", "at grandma's", "at grandma's house", "Grandma's house", "grandma's house", "with Grandma", "with her grandma", "at her grandmother's", "at her grandmother's house", "at the grandmother's house", "at Grandmas house", "at grandmas house", "Grandma", "grandma", "at Grandma"] },
                { label: "Why can't Ravi go to camp?", platz: "a few words", loesung: ["he is too young", "he's too young", "too young", "because he is too young", "because he's too young", "he is too small", "he's too small", "too small", "he is not old enough", "he isn't old enough", "not old enough"] },
                { label: "How does Priyanka want to help to pay?", platz: "a few words", loesung: ["walk the neighbour's dog", "walk our neighbour's dog", "walk the neighbor's dog", "walk her neighbour's dog", "walk the neighbours' dog", "walk a dog", "walk the dog", "walking the dog", "walking the neighbour's dog", "walking a dog", "walk the dog every day", "walk the neighbour's dog every day", "she walks the neighbour's dog", "she can walk the neighbour's dog", "she can walk the dog", "dog walking", "walk the neighbours dog", "walk the neighbors dog", "walk the neighbour's dog and save the money", "walk the dog and save money", "save money", "save the money"] },
                { label: "Why is Priyanka sure that she can pass the swimming test?", platz: "a few words", loesung: ["she swims twice a week", "she swims twice a week at the pool", "she swims two times a week", "she swims at the pool twice a week", "swims twice a week", "twice a week", "two times a week", "swims twice a week at the pool", "she goes swimming twice a week", "she swims a lot", "she swims every week", "because she swims twice a week", "she swims two times a week at the pool", "she practises twice a week", "she trains twice a week"] }
              ] }
          ] }
      ] },
      { kurz: "Your task", ober: "Task", titel: "Can I go to a summer camp?", teile: [
        { art: "text", html: `<p class="lead">Now it is <b>your</b> turn. You have found a summer camp – Camp Birch Lake or a camp in Bavaria. You want to go there with your best friend. Write a message to your parents and tell them why. <span class="de">Du willst mit deiner besten Freundin oder deinem besten Freund in ein Sommercamp. Schreibe deinen Eltern eine Nachricht und überzeuge sie.</span></p>` },
        { art: "merke", kopf: "USEFUL PHRASES", html: `<p><b>Say what you want</b></p><div class="phrasen"><span>I'd love to go to …</span><span>It's for … weeks.</span></div><p><b>Give reasons</b></p><div class="phrasen"><span>There are so many activities, for example …</span><span>I'm interested in …</span><span>I can learn how to …</span><span>I can make new friends.</span></div><p><b>Answer a worry</b></p><div class="phrasen"><span>Don't worry: …</span><span>It isn't too …</span><span>I can help to pay: I can …</span></div><p><b>End</b></p><div class="phrasen"><span>Please say yes!</span><span>Love, …</span></div>` },
        { art: "schreiben", id: "nachricht", nur: "R", tag: "Your task", titel: "A message to my parents", min: 40,
          auftrag: `<p><b>Write a message to your parents</b> (40 words or more). <span class="de">Schreibe mindestens 40 Wörter.</span></p><ul><li>Which camp? How long?</li><li>Name <b>two activities</b>.</li><li>Why is the camp good for you?</li><li>Answer one worry of your parents (Don't worry: …).</li><li>Use <b>much</b> or <b>many</b> once (so many, not much, too many …).</li></ul>`,
          foerder: MENGE,
          starter: ["Hi Mum and Dad,", "I'd love to go to …", "There are so many activities, for example …", "I can learn how to …", "Don't worry: …", "Please say yes!"],
          kriterien: ["Du nennst das Camp und wie lange du bleiben willst.", "Du nennst mindestens zwei Aktivitäten.", "Du sagst, warum das Camp gut für dich ist.", "Du gehst auf eine Sorge der Eltern ein (Don't worry: …).", "Du benutzt mindestens einmal much oder many richtig (so many, not much, too many …)."] },
        { art: "schreiben", id: "nachricht", nur: "M", tag: "Your task", titel: "A message to my parents", min: 60,
          auftrag: `<p><b>Write a message to your parents</b> (60 words or more).</p><ul><li>Which camp? How long? Who goes with you?</li><li>Name at least <b>two activities</b> and say what you can learn.</li><li>Give <b>two reasons</b> why the camp is good for you.</li><li>Answer one or two worries of your parents.</li><li>Use <b>much</b> or <b>many</b> at least twice (so many, not much, How many …?, too much …).</li></ul>`,
          foerder: MENGE,
          starter: ["Hi Mum and Dad,", "I'd love to go to … with …", "There are so many …", "I'm interested in … and I can learn …", "Don't worry: …", "It isn't too …", "Please say yes!"],
          kriterien: ["Du nennst das Camp, wie lange du bleiben willst und mit wem du fährst.", "Du nennst mindestens zwei Aktivitäten und sagst, was du dort lernen kannst.", "Du gibst zwei Gründe, warum das Camp gut für dich ist.", "Du gehst auf mindestens eine Sorge der Eltern ein und schließt freundlich (Please say yes!).", "Du benutzt mindestens zweimal much oder many richtig (so many, not much, How many …?, too much …)."] },
        { art: "text", html: `<p><b>With a partner:</b> Act it out. One of you is the child, the other is the mum or dad. The parent asks: <i>How long is it? How much does it cost? What about …?</i> <span class="de">Spielt die Szene zu zweit: Ein Kind will ins Camp, Mutter oder Vater hat Fragen.</span></p>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Many children in the USA go to a summer camp in the holidays.", true],
            ["We use \"many\" with words like water and time.", false],
            ["\"Too many people\" means \"zu viele Leute\".", true],
            ["\"Hear\" and \"here\" sound the same.", true],
            ["40th is \"fortieth\".", true],
            ["Priyanka's mum says yes at once.", false]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a letter from a summer camp, use ordinal numbers, choose words that sound the same and use much and many – and you can tell your parents why you want to go to a camp." }
  });
})();
