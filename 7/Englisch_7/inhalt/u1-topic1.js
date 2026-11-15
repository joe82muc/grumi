/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Topic 1: My home town (Kürzel A11)
   (zwei Ich-Texte über den Wohnort lesen – Großstadt und Dorf –, Notizen in einer Tabelle, Wörter für Orte gruppieren, einen
   Schulpodcast hören (Gutes und Schlechtes am Wohnort), das simple past im Kontext üben – eine Geschichte ergänzen, falsche Sätze
   verneinen, Fragen bilden – und mit Archie über Stadt oder Land sprechen; zum Schluss der Weg zum eigenen Kurzvortrag)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Topic 1“, nur Aufbau, nichts übernommen): zwei Ich-Texte mit Zeilennummern → Notiz-
   tabelle (Ort, Stadt/Dorf, Lage, Gutes, Schlechtes) → Wörter in Gruppen (Orte, Lage, Größe) und Umschreibungen → Hören: drei
   Jugendliche über ihren Ort, mag/mag nicht → Stadt oder Land (Sprechen) → Language detectives simple past → eine kleine
   Geschichte ergänzen → falsche Sätze zu Bildern verneinen → Wochenend-Fragen mit did → Task „Where I live“ (in GRUMI das
   vorhandene Modul A7, hier verlinkt). Eigene Personen und Situationen (Amara in Birmingham, Archie auf dem Schafhof bei Thornby,
   „the day the snow came“, Amaras Samstag mit dem kleinen Bruder) – keine Buchmotive.
   Besser: sofortige Rückmeldung, Textstellen antippen, Hilfen in Stufen (R7: Satzanfänge, Beispiel je Spalte, Wortspeicher mit
   den fertigen Formen – Diff-corner-Prinzip; M7: mehr falsche Formen im Wortspeicher, Umschreibungen selbst finden), Förder-Links
   an den Stellen, an denen Kinder hängen bleiben, und das Gespräch über Stadt und Land als Kette, in der die KI jeden Beitrag prüft.
   Differenzierung: Lesen und Hören in zwei Fassungen (R7 218/177 Wörter, M7 317/269 Wörter; R7 hört zwei, M7 drei Personen);
   Plus für M7 (m7): Umschreibungen (Wörter im Text finden) und zwei wahre Sätze über Amaras Samstag.
   LehrplanPLUS E7 1.1 Leseverstehen (Ich-Texte, Einzelheiten, Belegstellen), E7 1.2 Hörverstehen (Podcast, Einzelheiten),
   E7 1.3 Sprechen (über den Wohnort sprechen, Vorlieben begründen), E7 3 Grammatik G1 simple past (Wiederholung: -ed,
   unregelmäßige Verben, didn't, Did …?, was/were), E7 4 Wortschatz Orte und Lage, E7 5 (England: Stadt und Land).
   Texte: „Amara and Archie: Where we live“ (texte/u1/u1-t1-towns-r.js und -m.js) und „Year 8 Voices: our home towns“
   (texte/u1/u1-t1-voices-r.js und -m.js). Personen und Thornby erfunden; Birmingham und die Yorkshire Dales gibt es.
   Förder-Links: Ortswörter -> unit1/extra/places.html („Extra: Wörter für Orte“), simple past -> unit1/extra/simple-past.html
   („Extra: simple past Schritt für Schritt“).
   Rollen im Hörtext: Grace = Mädchen, Jayden = Junge, Kian = Junge (nur M7). Noch keine Aufnahme. Gesprächspartner der Kette:
   Archie (Junge, kein Hörtext).
   // BILDER:
   // 1. Station „Get ready“ (Vorentlastung, Sprechanlass): zwei Bilder nebeneinander – links ein Hochhaus am Stadtrand von
   //    Birmingham mit einem Kanal und schmalen bunten Booten davor, Verkehr auf einer Brücke; rechts ein Schafhof in grünen
   //    Hügeln mit Steinmauern, ein Junge mit Gummistiefeln am Gatter.
   // 2. Station „Language“ (Vorentlastung der Geschichte): Archie und seine Schwester bauen im tiefen Schnee einen großen
   //    Schneemann, im Hintergrund trägt der Vater Heu zu den Schafen.
   // 3. Station „Language“ (Amaras Samstag, ersetzt die Notizliste): sechs kleine Bilder – Schwimmbad, Mittagessen bei der Oma,
   //    hungriger kleiner Bruder, Enten am Kanal, Uhr mit drei Uhr am Kanal, Kuchenbacken mit der Mutter (ohne lesbaren Text). */
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
  const FOERDER_ORTE = { href: "unit1/extra/places.html", text: "Extra: Wörter für Orte" };
  const FOERDER_SP = { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" };

  // Gespräch mit Archie über Stadt und Land – R7 mit Satzanfängen und Tipps in Stufen, M7 ohne Satzanfänge
  const KETTE_THEMA = "Gespräch über den Wohnort (Englisch 7, Mittelschule): Das Kind sagt Archie, wo es wohnt und wie es dort ist, ob es gern in einer Großstadt leben würde (mit Grund), und nennt etwas Gutes und etwas Schlechtes am Leben auf dem Land";
  function kette(r) {
    const s = (start, tipps) => r ? { start, tipps } : { tipps: tipps.slice(0, 1) };
    return {
      art: "kette", id: "stadt-land", nur: r ? "R" : "M", tag: "Speaking · AI check", titel: "City or country? Talk to Archie",
      lead: r ? `Write your part. <span class="de">Der Satzanfang und die Tipps helfen dir. Die KI prüft jeden Beitrag, dann antwortet Archie.</span>` : "Write your part. The AI checks each message – then Archie answers.",
      thema: KETTE_THEMA,
      rollen: { a: { name: "Archie", ic: "👦" }, du: { name: "You" } },
      schritte: [
        { von: "a", text: "Hi! I'm Archie. I live on a sheep farm in the Yorkshire Dales. And you? Where do you live – in a city, in a town or in a village? What is it like there?" },
        Object.assign({ an: "a", sprache: "en", auftrag: "Tell Archie where you live and what it is like there." + (r ? ` <span class="de">Sag, wo du wohnst und wie es dort ist.</span>` : ""),
          kriterien: ["sagt, wo er oder sie wohnt (Stadt, Kleinstadt, Dorf …)", "beschreibt den Ort mit einem Adjektiv oder einem Satz mit there is / there are"],
          m: "I live in a small town in Bavaria. It's quiet, and there is a big park.", k: ["live|from|i'm in|my home", "city|town|village|farm|country", "big|small|quiet|noisy|nice|boring|exciting|beautiful|clean|busy|great|old|new|friendly|there is|there are|there's|it's|it is"] },
          s("I live in", ["Zwei Angaben: <b>wo</b> du wohnst und <b>wie</b> es dort ist.", "I live in a small town / a village / a city … · It's quiet / noisy / nice … · There is / There are …"])),
        { von: "a", text: "Nice! My friend Amara lives in Birmingham. She says big cities are exciting. Would you like to live in a big city? Why or why not?" },
        Object.assign({ an: "a", sprache: "en", auftrag: "Say if you would like to live in a big city. Give a reason." + (r ? ` <span class="de">Würdest du gern in einer Großstadt wohnen? Warum (nicht)?</span>` : ""),
          kriterien: ["sagt, ob er oder sie gern in einer Großstadt leben würde (I'd like to / I wouldn't like to …)", "gibt einen Grund an (because …)"],
          m: "I'd like to live in a big city because there are lots of shops and cinemas.", k: ["would|'d|’d|wouldn't|like|love|don't want|want", "city", "because"] },
          s("I'd like to", ["Zwei Teile: <b>ja oder nein</b> – und <b>warum</b> (because …).", "I'd like to live in a big city because … · I wouldn't like to live in a big city because it's too noisy / there is too much traffic."])),
        { von: "a", text: "OK! And what about the country? Could you live on a farm like me?" },
        Object.assign({ an: "a", sprache: "en", auftrag: "Tell Archie one good thing and one bad thing about life in the country." + (r ? ` <span class="de">Etwas Gutes und etwas Schlechtes am Leben auf dem Land.</span>` : ""),
          kriterien: ["nennt etwas Gutes am Leben auf dem Land", "nennt etwas Schlechtes am Leben auf dem Land"],
          m: "The good thing is the clean air, but there is no cinema and the next town is a long way away.", k: ["quiet|clean|fresh|air|animals|sheep|nature|beautiful|hills|space|safe|good", "but|bad|boring|no cinema|no shops|far|long way|bus|buses|nothing to do|not"] },
          s("The good thing is", ["Zwei Teile: etwas <b>Gutes</b> – <b>but</b> – etwas <b>Schlechtes</b>.", "The good thing is the clean air / the quiet … but there is no cinema / the next town is a long way away."])),
        { von: "a", text: "I think so, too! I love the quiet hills – but sometimes I'd like a cinema next door. Thanks for the chat!" }
      ]
    };
  }

  D7Kit.seite({
    id: "u1-topic1",
    titel: "Topic 1 · My home town",
    einleitung: "Amara lives in a flat in a big city, Archie lives on a sheep farm in the hills. You read about their homes, you listen to a school podcast, you use the <b>simple past</b> – and then you talk about life in the city and in the country.",
    zeit: "etwa 45 Minuten",
    ziele: ["🏙️ I understand two teenagers who write about their home.", "🗂️ I sort words for places: what, where, how big.", "🎧 I understand what teenagers like and don't like about their town.", "⏪ I use the simple past: -ed, irregular verbs, didn't, Did …?, was / were.", "💬 I talk about life in the city and in the country."],
    thema: "Unit 1 Out and about in England: Topic 1 (über den Wohnort sprechen, Stadt und Land, simple past)",
    quiz: { profi: "Home town pro" },
    glossar: {
      flat: ["flat", "Ein flat ist eine Wohnung, zum Beispiel in einem großen Haus mit vielen Stockwerken (floors)."],
      traffic: ["traffic", "Traffic ist der Verkehr: viele Autos, Busse und Lastwagen auf den Straßen."],
      canal: ["canal", "Ein canal ist ein Kanal, also ein Wasserweg für Boote, den Menschen gebaut haben. Früher brachten Boote auf den Kanälen Kohle in die Städte."],
      factory: ["factory", "Eine factory ist eine Fabrik: Dort stellen Menschen mit Maschinen Dinge her."],
      dales: ["Yorkshire Dales", "Die Yorkshire Dales sind eine Gegend mit grünen Hügeln und Tälern (dales) im Norden Englands. Dort gibt es viele Schafe und alte Steinmauern."],
      thornby: ["Thornby", "Das Dorf Thornby in diesem Modul gibt es nicht wirklich – es ist erfunden. Birmingham und die Yorkshire Dales gibt es."],
      hay: ["hay", "Hay ist Heu, also getrocknetes Gras. Im Winter fressen die Schafe Heu."],
      simplepast: ["simple past", "Das simple past ist die einfache Vergangenheit. Damit erzählst du, was früher oder gestern passiert ist: walked, went, didn't take."]
    },
    haupttext: { R: "u1-t1-towns-r", M: "u1-t1-towns-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "City or country?", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>two homes in England</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-t1-stadtland.jpg\" width=\"1280\" height=\"853\" alt=\"Two pictures: a girl on a footbridge over a city canal with long, colourful narrow boats and tall buildings, and a boy at the gate of a sheep farm in green hills.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where does the girl live? Where does the boy live? What is different? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Amara and Archie are both thirteen. Amara lives in <b>Birmingham</b>, a big city in the middle of England. Archie lives on a sheep farm near <button class="term" data-t="thornby">Thornby</button>, a village in the <button class="term" data-t="dales">Yorkshire Dales</button>. <span class="de">Amara wohnt in einer Großstadt, Archie auf dem Land. Die beiden sind erfunden.</span></p><p>Where would you like to live – in a big city or in the country? <span class="de">Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du in den Texten. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["flat", "Wohnung"], ["floor", "Stockwerk"], ["traffic", "Verkehr"], ["canal", "Kanal"], ["sheep", "Schafe"], ["stone wall", "Steinmauer"], ["a long way away", "weit weg"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Drei Wörter gehören zur Stadt, zwei zum Land.", "Ein Wort klingt fast wie im Deutschen: canal."] }
      ] },
      { kurz: "Two homes", ober: "Reading", titel: "Amara and Archie: Where we live", teile: [
        { art: "text", html: `<p class="lead">Read the two texts. Don't stop at words you don't know. <span class="de">Lies beide Texte einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u1-t1-towns-r", M: "u1-t1-towns-m" } },
        { art: "mc", id: "global", tag: "Main idea", titel: "What are the texts about?", lead: `Tick the correct answer. <span class="de">Kreuze die richtige Antwort an.</span>`,
          fragen: [
            { q: "What are the two texts about?", o: ["Two teenagers describe the place where they live.", "Two teenagers describe their school.", "Two teenagers plan a holiday in England.", "Two teenagers write about a football match."], a: 0,
              e: "Amara and Archie write about their home: a flat in a city and a farm near a village." },
            { q: "Who can see a big station from the window?", o: ["Amara", "Archie", "both Amara and Archie", "Archie's dad"], a: 0,
              e: "Amara's flat is near the city centre. From her window she can see the big station." },
            { q: "How did Archie feel when the school bus didn't come?", o: ["He wasn't sad about it.", "He was very sad.", "He was angry with the bus driver.", "He was ill."], a: 0,
              e: "Archie asks: Was I sad? – and the answer is no." }
          ] },
        { art: "formular", id: "notizen", tag: "Take notes", titel: "Notes: Amara and Archie",
          lead: `Complete the notes. Use the texts (📖 Text). <span class="de">Wähle in jeder Zeile die richtige Notiz.</span>`,
          kopf: "Notes: Amara and Archie",
          felder: [
            { label: "Amara: city, town or village?", loesung: ["a city"], wahl: ["a city", "a town", "a village"] },
            { label: "Amara: where in England?", loesung: ["in the middle of England"], wahl: ["in the north of England", "in the middle of England", "in the south of England"] },
            { label: "Amara: a good thing", loesung: ["lots of shops and cinemas"], wahl: ["clean air", "lots of shops and cinemas", "only a few buses"] },
            { label: "Amara: a bad thing", loesung: ["traffic and noise"], wahl: ["no cinema", "a long way to the next town", "traffic and noise"] },
            { label: "Archie: city, town or village?", loesung: ["a village"], wahl: ["a city", "a town", "a village"] },
            { label: "Archie: where in England?", loesung: ["in the north of England"], wahl: ["in the north of England", "in the middle of England", "in the south of England"] },
            { label: "Archie: a good thing", loesung: ["clean air and quiet"], wahl: ["clean air and quiet", "lots of shops", "a big station"] },
            { label: "Archie: a bad thing", loesung: ["no cinema, and the next town is far away"], wahl: ["too much traffic", "noisy streets", "no cinema, and the next town is far away"] }
          ],
          hilfen: ["Lies zuerst den Text von Amara, dann den von Archie.", "Gutes und Schlechtes: Suche bei Amara „But I love it“ und bei Archie „But there's no …“.", "Amara wohnt in der Mitte, Archie im Norden Englands."] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`, lesetext: "u1-t1-towns-r",
          hilfen: ["Frage 1 gehört zu Amara, Frage 2 zu Archie.", "Suche die Wörter boats und bus."],
          fragen: [
            { q: "What did boats carry on the canals in the past?", zeilen: [7, 8], e: "In the past, boats carried coal on the canals.", tipp: "Look at Amara's second paragraph." },
            { q: "When does Archie's school bus come?", zeilen: [18, 18], e: "The school bus comes at 7:10 every morning.", tipp: "Look at Archie's second paragraph." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer.", lesetext: "u1-t1-towns-m",
          fragen: [
            { q: "What did people use the canals for in the past?", zeilen: [10, 11], e: "Boats carried coal on the canals.", tipp: "Look at Amara's second paragraph." },
            { q: "Who lived on the farm when he was a boy?", zeilen: [25, 25], e: "Archie's grandad lived on the farm when he was a boy.", tipp: "Look at Archie's second paragraph." }
          ] },
        { art: "sort", id: "ortswoerter", tag: "Words for places", titel: "Put the words into groups", foerder: FOERDER_ORTE,
          lead: `Put the words from the texts into the right group. <span class="de">Welche Wörter sagen, was für ein Ort es ist, wo er liegt und wie groß er ist?</span>`,
          buckets: ["Kinds of places", "Where is it?", "How big is it?"],
          items: [{ t: "city", b: 0 }, { t: "village", b: 0 }, { t: "farm", b: 0 }, { t: "town", b: 0 },
                  { t: "in the middle of", b: 1 }, { t: "in the north of", b: 1 }, { t: "near", b: 1 }, { t: "a long way away", b: 1 },
                  { t: "big", b: 2 }, { t: "small", b: 2 }, { t: "more than a million people", b: 2 }, { t: "about 300 people", b: 2 }],
          hilfen: ["Ein Beispiel für jedes Fach: city → Kinds of places · near → Where is it? · small → How big is it?", "In „Where is it?“ gehören Wörter wie in, near, far.", "Zahlen von Menschen sagen, wie groß ein Ort ist."] },
        { art: "formular", id: "umschreibung", m7: true, tag: "Challenge · Words", titel: "Find the word in the texts",
          lead: `What's the word? Find it in the texts and write it. <span class="de">Finde zu jeder Erklärung das passende Wort in den Texten und schreibe es auf.</span>`,
          kopf: "Find the word",
          felder: [
            { label: "a building where people make things", loesung: ["factory", "factories", "a factory"], platz: "one word" },
            { label: "full of loud sounds", loesung: ["noisy"], platz: "one word" },
            { label: "calm, without loud sounds", loesung: ["quiet"], platz: "one word" },
            { label: "a very small town in the country", loesung: ["village", "a village"], platz: "one word" },
            { label: "a building where trains stop", loesung: ["station", "a station", "the station"], platz: "one word" },
            { label: "a place where you watch films", loesung: ["cinema", "cinemas", "a cinema"], platz: "one word" }
          ] }
      ] },
      { kurz: "Listening", ober: "Listening", titel: "Year 8 Voices: our home towns", teile: [
        { art: "text", html: `<p class="lead">In the school podcast <b>Year 8 Voices</b>, Grace talks to teenagers about their home towns: What do they like? What don't they like? <b>Read the tasks first, then listen.</b> You can use “slower”. <span class="de">Erst die Aufgaben lesen, dann hören. Das Transkript siehst du erst, wenn du fertig bist.</span></p>` },
        { nur: "R", art: "hoertext", id: "podcast", tag: "🎧 Podcast", hoertext: "u1-t1-voices-r", fragen: [
          { art: "formular", id: "wo", titel: "Where do they live?", lead: `Listen and choose the right answers. <span class="de">Wähle in jeder Zeile die richtige Antwort.</span>`,
            kopf: "Notes: the podcast",
            felder: [
              { label: "Jayden lives …", loesung: ["in a small town by the sea"], wahl: ["in a big city", "in a small town by the sea", "on a farm"] },
              { label: "Grace lives …", loesung: ["in a big city in the south"], wahl: ["in a big city in the south", "in a small town by the sea", "in a village in the north"] },
              { label: "In summer Jayden goes swimming …", loesung: ["every day"], wahl: ["every weekend", "once a month", "every day"] },
              { label: "At the market you can …", loesung: ["eat food from all over the world"], wahl: ["buy old books", "eat food from all over the world", "see farm animals"] }
            ] },
          { art: "sort", id: "mag", titel: "Likes and dislikes", lead: `Listen again. What do they like – and what don't they like? <span class="de">Sortiere: mag es 🙂 oder mag es nicht 🙁.</span>`,
            buckets: ["🙂 likes", "🙁 doesn't like"],
            items: [{ t: "Jayden: the beach", b: 0 }, { t: "Jayden: the old lighthouse", b: 0 }, { t: "Grace: the market", b: 0 },
                    { t: "Jayden: his town in winter", b: 1 }, { t: "Grace: the trains in the morning", b: 1 }] }
        ] },
        { nur: "M", art: "hoertext", id: "podcast", tag: "🎧 Podcast", hoertext: "u1-t1-voices-m", fragen: [
          { art: "formular", id: "wo", titel: "Where do they live?", lead: "Listen and choose the right answers.",
            kopf: "Notes: the podcast",
            felder: [
              { label: "Jayden lives …", loesung: ["in a small town on the east coast"], wahl: ["in a small market town in the middle of England", "in a small town on the east coast", "in a big city in the south"] },
              { label: "Kian lives …", loesung: ["in a small market town in the middle of England"], wahl: ["in a small market town in the middle of England", "in a small town on the east coast", "in a big city in the south"] },
              { label: "Grace lives …", loesung: ["in a big city in the south"], wahl: ["in a small town on the east coast", "in a small market town in the middle of England", "in a big city in the south"] },
              { label: "From the top of the lighthouse you can …", loesung: ["see the whole town"], wahl: ["see Scotland", "see the whole town", "watch the trains"] },
              { label: "Kian goes fishing with …", loesung: ["his grandad"], wahl: ["his dad", "Jayden", "his grandad"] }
            ] },
          { art: "sort", id: "mag", titel: "Likes and dislikes", lead: "Listen again. What do they like – and what don't they like?",
            buckets: ["🙂 likes", "🙁 doesn't like"],
            items: [{ t: "Jayden: the beach", b: 0 }, { t: "Jayden: the old lighthouse", b: 0 }, { t: "Kian: fishing on the river", b: 0 }, { t: "Grace: the market", b: 0 },
                    { t: "Jayden: his town in winter", b: 1 }, { t: "Kian: the buses in the evening", b: 1 }, { t: "Grace: the trains in the morning", b: 1 }] }
        ] }
      ] },
      { kurz: "Language", ober: "Simple past", titel: "What happened?", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>the day the snow came</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-t1-schnee.jpg\" width=\"1280\" height=\"853\" alt=\"Deep snow on a sheep farm: a boy and his sister build a big snowman; behind them their father carries hay to the sheep.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the weather like? What are the children doing? What is their dad doing? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<p>Look at the texts: <i>Boats <u>carried</u> coal on the canals. · There <u>were</u> lots of factories. · We <u>didn't take</u> the bus home. · <u>Did</u> we <u>go</u> to school? – No, we <u>didn't</u>. · <u>Was</u> I sad? – No, I <u>wasn't</u>.</i></p><ul><li>Regular verbs: <b>-ed</b> (walk → walked, carry → carried).</li><li>Irregular verbs have their own form – learn them: <i>go – went, see – saw, come – came</i>.</li><li>Negative: <b>didn't + base form</b>: <i>We didn't take the bus.</i> (not: <s>didn't took</s>)</li><li>Questions: <b>Did + person + base form</b>? – <i>Yes, I did. / No, I didn't.</i></li><li><b>be</b>: I / he / she / it <b>was</b> – you / we / they <b>were</b>; negative <b>wasn't / weren't</b>.</li></ul><p><span class="de">Signalwörter: yesterday, last Sunday, last winter, two days ago, in the past.</span></p>` },
        { nur: "R", art: "luecke", id: "schnee", tag: "A story", titel: "The day the snow came", foerder: FOERDER_SP,
          lead: `Archie tells a story. Complete it with the simple past of the verbs in brackets. <span class="de">Setze die Verben in die Vergangenheit. Alle Formen stehen im Wortspeicher, eine bleibt übrig.</span>`,
          absaetze: [
            ["One cold morning in January, I ", { g: "woke" }, " (wake) up very early."],
            ["Everything outside ", { g: "was" }, " (be) white."],
            ["Dad ", { g: "said" }, " (say): \"The school bus can't come today.\""],
            ["So we ", { g: "didn't go" }, " (not go) to school."],
            ["Dad and I ", { g: "took" }, " (take) hay to the sheep."],
            ["The sheep ", { g: "were" }, " (be) very hungry."],
            ["In the afternoon, my sister and I ", { g: "built" }, " (build) a big snowman."],
            ["We ", { g: "didn't want" }, " (not want) to go inside again!"]
          ], extra: ["waked"],
          hilfen: ["Schau auf das Verb in Klammern und suche im Wortspeicher seine Vergangenheitsform.", "was oder were? I, he, she, it → was · we, you, they (und the sheep) → were.", "(not go) wird zu didn't go, (not want) zu didn't want."] },
        { nur: "M", art: "luecke", id: "schnee", tag: "A story", titel: "The day the snow came", foerder: FOERDER_SP,
          lead: "Archie tells a story. Complete it with the simple past of the verbs in brackets. Three words in the box are wrong.",
          absaetze: [
            ["One cold morning in January, I ", { g: "woke" }, " (wake) up very early."],
            ["Everything outside ", { g: "was" }, " (be) white."],
            ["Dad ", { g: "said" }, " (say): \"The school bus can't come today.\""],
            ["So we ", { g: "didn't go" }, " (not go) to school."],
            ["Dad and I ", { g: "took" }, " (take) hay to the sheep."],
            ["The sheep ", { g: "were" }, " (be) very hungry."],
            ["In the afternoon, my sister and I ", { g: "built" }, " (build) a big snowman."],
            ["We ", { g: "didn't want" }, " (not want) to go inside again!"]
          ], extra: ["waked", "builded", "didn't went"] },
        { art: "beispiel", kopf: "AMARA'S SATURDAY – HER NOTES", html: `<p>📷 1 morning: swimming pool with my little brother<br>📷 2 lunch at Grandma's flat<br>📷 3 my brother after swimming: sooo hungry!<br>📷 4 afternoon: feeding the ducks on the canal<br>📷 5 three o'clock: still at the canal<br>📷 6 evening: baking a cake with Mum</p>` },
        { nur: "R", art: "luecke", id: "samstag", tag: "Wrong sentences", titel: "That's not what happened!", foerder: FOERDER_SP,
          lead: `These sentences about Amara's Saturday are wrong. Look at her notes and make the sentences negative. <span class="de">Die Sätze stimmen nicht. Setze die Verneinung ein: didn't + Grundform, wasn't oder weren't.</span>`,
          absaetze: [
            ["Amara and her brother ", { g: "didn't go" }, " (not go) to the cinema."],
            ["They ", { g: "didn't have" }, " (not have) lunch at a café."],
            ["Her brother ", { g: "wasn't" }, " (not be) tired after swimming."],
            ["They ", { g: "didn't play" }, " (not play) football in the park."],
            ["At three o'clock they ", { g: "weren't" }, " (not be) at home."],
            ["In the evening they ", { g: "didn't watch" }, " (not watch) TV."]
          ], extra: ["didn't went"],
          hilfen: ["Vergleiche jeden Satz mit Amaras Notizen: Er stimmt nicht – also verneinst du ihn.", "Bei Verben: didn't + Grundform (didn't go, didn't have). Bei be: wasn't (he) oder weren't (they).", "Satz 3 handelt vom Bruder (he → wasn't), Satz 5 von beiden (they → weren't)."] },
        { nur: "M", art: "luecke", id: "samstag", tag: "Wrong sentences", titel: "That's not what happened!", foerder: FOERDER_SP,
          lead: "These sentences about Amara's Saturday are wrong. Look at her notes and make the sentences negative. Three words in the box are wrong.",
          absaetze: [
            ["Amara and her brother ", { g: "didn't go" }, " (not go) to the cinema."],
            ["They ", { g: "didn't have" }, " (not have) lunch at a café."],
            ["Her brother ", { g: "wasn't" }, " (not be) tired after swimming."],
            ["They ", { g: "didn't play" }, " (not play) football in the park."],
            ["At three o'clock they ", { g: "weren't" }, " (not be) at home."],
            ["In the evening they ", { g: "didn't watch" }, " (not watch) TV."]
          ], extra: ["didn't went", "not played", "don't watch"] },
        { art: "offen", id: "wirklich", m7: true, tag: "Challenge · Your words", titel: "What did they really do?",
          lead: `Write <b>two true sentences</b> about Amara's Saturday in the simple past. Use her notes. <span class="de">Was haben Amara und ihr Bruder wirklich gemacht? Schreibe zwei Sätze in der Vergangenheit.</span>`,
          fragen: [{ q: "What did Amara and her brother really do on Saturday?", m: "They went to the swimming pool in the morning. In the evening they baked a cake with their mum.", k: ["went|had|was|were|fed|baked|swam|ate|made|visited", "swimming|pool|grandma|lunch|hungry|ducks|canal|cake"], min: 2 }],
          tipp: "Use the notes: go → went, have → had, feed → fed, bake → baked. Start like this: In the morning they went …" },
        { art: "mc", id: "fragen", tag: "Questions", titel: "Talk about the weekend", foerder: FOERDER_SP,
          lead: `Which question or form is correct? Tick it. <span class="de">Mit diesen Fragen sprichst du über das Wochenende.</span>`,
          fragen: [
            { q: "Which question is correct?", o: ["Did you go out at the weekend?", "Did you went out at the weekend?", "Do you went out at the weekend?", "Went you out at the weekend?"], a: 0,
              e: "Fragen im simple past: Did + Person + Grundform (go, nicht went)." },
            { q: "What ____ you do last Saturday?", o: ["did", "do", "were", "was"], a: 0,
              e: "Last Saturday ist vorbei – also simple past: What did you do?" },
            { q: "____ you at home on Sunday? – No, I wasn't.", o: ["Were", "Did", "Was", "Do"], a: 0,
              e: "Mit be fragst du ohne did: Were you …? (bei you immer were). Die Kurzantwort: No, I wasn't." }
          ] }
      ] },
      { kurz: "Speaking", ober: "City or country?", titel: "Where would you like to live?", teile: [
        { art: "text", html: `<p class="lead">Amara loves the city. Archie loves the country. What about you? Now you chat with Archie. <span class="de">Du schreibst deine Beiträge, die KI prüft jeden einzelnen. Archies nächste Sprechblase kommt, wenn dein Beitrag geprüft ist.</span></p>` },
        { art: "merke", kopf: "CITY OR COUNTRY? USEFUL WORDS", html: `<p><b>City:</b> noisy · busy · exciting · lots of shops · lots of traffic · a big station<br><b>Country:</b> quiet · clean air · beautiful · boring · far from … · a long way away</p><div class="phrasen"><span>I live in a small town / a village / a city.</span><span>It's quiet / noisy / nice.</span><span>There is … / There are …</span><span>I'd like to live … because …</span><span>I wouldn't like to live … because …</span><span>The good thing is … but …</span></div>` },
        kette(true),
        kette(false),
        { art: "text", html: `<p class="lead"><b>Your task: Where I live.</b> Now you can give a short talk about <b>your</b> home town – one minute, with notes. <span class="de">Dafür gibt es ein eigenes Modul: Dort schreibst du deinen Vortrag, die KI gibt dir eine Rückmeldung, und du druckst ein Blatt für den Vortrag. Es geht auf, wenn deine Lehrkraft es freigeschaltet hat.</span></p><p><a class="btn" href="unit1/schreiben/where-i-live.html">🎤 Short talk: Where I live →</a></p>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know", lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Amara's flat is on the ninth floor.", true],
            ["Amara, her mum and her brother took the bus home last Sunday.", false],
            ["Around Archie's farm there are green hills and old stone walls.", true],
            ["Thornby is in the Yorkshire Dales.", true],
            ["\"We didn't went home.\" is a correct sentence.", false],
            ["Many questions in the simple past use did: Did you go out? What did you do?", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can talk about your home town, sort words for places and tell what happened in the simple past." }
  });
})();
