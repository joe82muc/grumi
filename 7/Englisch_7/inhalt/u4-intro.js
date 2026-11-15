/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Intro: The USA (Kürzel D8)
   (die USA kennenlernen: fünf kurze Bildtexte lesen und Überschriften zuordnen, Einzelheiten ankreuzen und in den Zeilen finden,
   Wörter aus ihren Erklärungen finden, eine Radiosendung mit einem Jungen aus Texas verstehen – Multiple Choice mit drei
   Möglichkeiten, M7 zusätzlich Gefühle –, britische und amerikanische Wörter, sagen, welches Foto einem am besten gefällt)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „Intro“, nur Aufbau, nichts übernommen): fünf Fotos mit kurzen Bildtexten → über die
   Bilder sprechen (Lieblingsfoto mit Begründung, ● weitere Orte in den USA) → Wörter aus Umschreibungen in den Bildtexten finden →
   Interview hören, Lückensätze mit je drei Auswahlwörtern → Hinweis auf amerikanisches Englisch. Besser hier: Zuordnen und
   Ankreuzen mit sofortiger Rückmeldung, Belegstellen in den Zeilen, Wörter finden mit Auswahl (R7) oder selbst schreiben (M7),
   Hören mit Transkript erst nach den Aufgaben, M7 mit Gefühlen und Paaren BE/AE, Meinung mit Hilfen in Stufen und KI-Hinweis.
   Differenzierung: Bildtexte R7 245 / M7 373 Wörter mit eigenen Zeilenangaben, Hörtext R7 168 / M7 283 Wörter; Wörter finden –
   R7 wählt aus drei Wörtern, M7 schreibt das Wort selbst; Plus für M7 (m7): Gefühle im Hörtext, britische und amerikanische
   Wörter verbinden, einen weiteren Ort in den USA nennen (für R7 freiwillig).
   Grammatik: keine (Intro). Wortschatz „Intro“ der Unit (state, huge, national park, trip, US, America, Native American,
   European, favourite (AE favorite), center (AE), football (AE)) und Unit 1/2 (bridge, river, to hit, fan); neu und im Glossar
   oder im Warm-up erklärt: geyser, bison, fog, paddle steamer, parade, bat, fire engine (M7 dazu pitcher, batter, goods).
   LehrplanPLUS E7 1.1 Leseverstehen (Bildtexte, Einzelheiten), E7 1.2 Hörverstehen (Interview, Einzelheiten, Gefühle),
   E7 2 Sprechen/Schreiben (Meinung äußern, begründen), E7 5 (USA: Land und Leute, britisches und amerikanisches Englisch).
   Texte: „Five photos from the USA“ (texte/u4/u4-intro-karten-r.js und -m.js) und „America Calling: a boy from Texas“
   (texte/u4/u4-intro-radio-r.js und -m.js). Personen (Mrs Delgado, Luis) und die Sendung sind erfunden; Fakten (Yellowstone seit
   1872, ältester Nationalpark der USA, größtenteils in Wyoming, Geysire, Old Faithful, Bisons; Golden Gate Bridge 1937, etwa
   2,7 km, rot-orange, Nebel; Mississippi, Name aus einer Sprache der Ureinwohner, Golf von Mexiko, Raddampfer; Baseball mit
   neun Spielern je Team; Paraden in Kleinstädten; Texas grenzt an Mexiko) sind gesichert.
   Förder-Links: keine (Intro, wie im Modulplan).
   Rollen im Hörtext: Mrs Delgado = Frau (Moderatorin, en-GB-SoniaNeural), Luis = Junge (13, aus Texas, en-GB-RyanNeural).
   BILDER:
   - Station „Five photos“ (Sprechanlass, Bildkarten zu den Texten): ein Geysir, der vor blauem Himmel Wasser hochschießt, im
     Vordergrund zwei Bisons auf einer Wiese; die rot-orange Golden Gate Bridge im Morgennebel, nur die Turmspitzen schauen heraus;
     ein weißer Raddampfer mit großem rotem Schaufelrad auf einem breiten Fluss; ein Baseball-Spieler holt mit dem Schläger aus,
     Zuschauer auf den Rängen; eine Schulkapelle zieht durch die Hauptstraße einer Kleinstadt, Kinder mit Fähnchen am Straßenrand.
   - Station „Listening“ (Vorentlastung): ein Radiostudio mit zwei Mikrofonen, eine Moderatorin und ein Junge mit Baseballkappe
     und Kopfhörern.
   - Station „Your turn“: eine einfache Umrisskarte der USA mit fünf Punkten (Yellowstone, San Francisco, Mississippi, Texas,
     eine Kleinstadt) ohne Beschriftung, als Sprechanlass. */
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

  D7Kit.seite({
    id: "u4-intro",
    titel: "Intro · The USA",
    einleitung: "Hot water from the ground, a red bridge in the fog, a boat with a big wheel, a game with a bat and a parade in a small town: Five short texts show you the USA. Then you listen to a radio show with Luis, a boy from Texas, and say which place you like best.",
    zeit: "etwa 40 Minuten",
    ziele: ["📖 I read short texts about the USA and find the right heading.", "🔎 I find details and words in the texts.", "🎧 I understand a radio interview with a boy from Texas.", "💬 I say which place I like best and why."],
    thema: "Unit 4 USA – here we come!, Intro: die USA in fünf Bildern kennenlernen, Radiointerview",
    quiz: { profi: "USA pro" },
    glossar: {
      state: ["state", "Ein state ist ein Bundesstaat. Die USA haben fünfzig states, zum Beispiel Texas, Wyoming und California."],
      geyser: ["geyser", "Ein geyser (Geysir) ist eine heiße Quelle. Immer wieder schießt heißes Wasser hoch aus dem Boden."],
      bison: ["bison", "Ein bison ist ein großes, starkes Wildrind mit dunklem, langem Fell. Die Mehrzahl heißt auch bison."],
      fog: ["fog", "Fog ist Nebel. Bei Nebel sieht man nicht weit."],
      steamer: ["paddle steamer", "Ein paddle steamer ist ein Raddampfer: ein Schiff mit einem großen Schaufelrad, das sich im Wasser dreht."],
      parade: ["parade", "Eine parade ist ein Umzug. Viele Menschen gehen, spielen Musik oder fahren in einer langen Reihe durch die Straßen."],
      bat: ["bat", "Ein bat ist ein Schläger. Beim Baseball schlägt man den Ball mit einem langen, runden Schläger aus Holz oder Metall."],
      engine: ["fire engine", "Eine fire engine ist ein Feuerwehrauto."],
      gulf: ["Gulf of Mexico", "Der Gulf of Mexico (Golf von Mexiko) ist ein großes Meer im Süden der USA."],
      pitcher: ["pitcher", "Der pitcher ist beim Baseball der Werfer. Der batter ist der Schlagmann: Er versucht, den Ball zu treffen."],
      soccer: ["soccer", "In den USA heißt unser Fußball soccer. Mit football meinen Amerikaner meistens American Football."]
    },
    haupttext: { R: "u4-intro-karten-r", M: "u4-intro-karten-m" },
    stationen: trenne([
      { kurz: "Warm-up", ober: "Before you read", titel: "Get ready", teile: [
        { art: "text", html: `<p class="lead">The USA is a huge country in North America. It has fifty <button class="term" data-t="state">states</button>, big cities, high mountains and long rivers. In this module you meet five places and things that are typical for the USA. <span class="de">Die USA sind ein riesiges Land in Nordamerika mit fünfzig Bundesstaaten. Du lernst fünf typische Orte und Dinge kennen.</span></p><p>What do you know about the USA? Think of a city, a sport or a film. <span class="de">Überlege kurz für dich: Was fällt dir zu den USA ein?</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: `Find the pairs. <span class="de">Verbinde das englische Wort mit seiner Bedeutung. Alle Wörter kommen in den Texten vor.</span>`,
          paare: [["state", "Bundesstaat"], ["huge", "riesig"], ["national park", "Nationalpark"], ["fog", "Nebel"], ["parade", "Umzug"], ["to hit", "schlagen, treffen"]],
          hilfen: ["Fang mit den Wörtern an, die du schon kennst.", "Zwei Wörter haben mit Natur und Wetter zu tun, eines mit Sport.", "Tippe zuerst national park – das Wort klingt fast wie im Deutschen."] },
        { art: "merke", kopf: "READING TIP", html: `<p>A <b>heading</b> tells you in a few words what a text is about. Look for the <b>key words</b> in each text: names, places and things you can see in the photo. <span class="de">Eine Überschrift sagt in wenigen Wörtern, worum es geht. Suche in jedem Text die Schlüsselwörter.</span></p>` }
      ] },
      { kurz: "Five photos", ober: "Reading", titel: "Five places, five texts", teile: [
        { art: "karten", karten: [
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-intro-yellowstone.jpg\" width=\"1280\" height=\"853\" alt=\"A geyser shoots hot water high into the blue sky; two bison stand on the grass in front.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 1", text: "What can you see? Would you like to go there?" },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-intro-bruecke.jpg\" width=\"1280\" height=\"853\" alt=\"A red-orange suspension bridge in thick morning fog; only the tops of its two towers rise above the fog.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 2", text: "What colour is the bridge? What is the weather like?" },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-intro-dampfer.jpg\" width=\"1280\" height=\"853\" alt=\"A white paddle steamer with a big red paddle wheel on a wide brown river.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 3", text: "What kind of boat is it? Where is it?" },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-intro-baseball.jpg\" width=\"1280\" height=\"853\" alt=\"A baseball player swings the bat at the ball; a catcher waits behind him and people watch from the stands.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 4", text: "What are the players doing? Do you know this sport?" },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-intro-parade.jpg\" width=\"1280\" height=\"853\" alt=\"A school band marches down the main street of a small town; families and children wave and clap at the side of the street.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Photo 5", text: "What are the people doing? Is there a parade in your town, too?" }
        ] },
        { art: "text", html: `<p class="lead">Read the five short texts. Each text belongs to a photo. Don't stop at words you don't know. <span class="de">Lies die fünf Texte. Du brauchst nicht jedes Wort zu kennen – viele erklärt das Glossar (Wörter antippen).</span></p><p>New words: <button class="term" data-t="geyser">geyser</button> · <button class="term" data-t="bison">bison</button> · <button class="term" data-t="fog">fog</button> · <button class="term" data-t="steamer">paddle steamer</button> · <button class="term" data-t="gulf">Gulf of Mexico</button> · <button class="term" data-t="bat">bat</button> · <button class="term" data-t="parade">parade</button> · <button class="term" data-t="engine">fire engine</button></p>` },
        { art: "lesetext", lesetext: { R: "u4-intro-karten-r", M: "u4-intro-karten-m" } },
        { art: "paare", id: "ueberschriften", tag: "Headings", titel: "Which heading fits?", lead: `Match each photo text with the right heading. <span class="de">Welche Überschrift passt zu welchem Text?</span>`,
          paare: [["Photo 1", "Hot water and big animals"], ["Photo 2", "A bridge in the fog"], ["Photo 3", "Boats with a big wheel"], ["Photo 4", "A game with a ball and a bat"], ["Photo 5", "A big day in a small town"]],
          hilfen: ["Lies von jedem Text nur den ersten und den letzten Satz.", "Suche Schlüsselwörter: geysers, fog, wheel, bat, parade.", "Photo 1 ist Yellowstone: heißes Wasser und Bisons."] },
        { nur: "R", art: "mc", id: "verstehen", tag: "Understanding", titel: "What do the texts say?", lead: `Tick the correct answer. <span class="de">Es gibt drei Möglichkeiten.</span>`,
          hilfen: ["Lies die Frage und suche das wichtigste Wort im Text: Wyoming, colour, Gulf, players, flags.", "Jede Frage gehört zu einem anderen Foto – der Reihe nach von Photo 1 bis Photo 5."],
          fragen: [
            { q: "Which state is most of Yellowstone in?", o: ["Wyoming", "Texas", "California"], a: 0,
              e: "Most of the park is in the state of Wyoming." },
            { q: "What colour is the Golden Gate Bridge?", o: ["red-orange", "white", "blue"], a: 0,
              e: "The bridge is red-orange." },
            { q: "Where does the Mississippi flow to?", o: ["to the Gulf of Mexico", "to the Pacific Ocean", "to Canada"], a: 0,
              e: "The river flows south to the Gulf of Mexico." },
            { q: "How many players are in a baseball team on the field?", o: ["nine", "eleven", "five"], a: 0,
              e: "Two teams of nine players play on a big field." },
            { q: "What do many families eat at baseball games?", o: ["hot dogs", "pizza", "ice cream"], a: 0,
              e: "Many families go to the games and eat hot dogs there." },
            { q: "What do children do at a parade?", o: ["They wave flags.", "They play baseball.", "They go on a boat trip."], a: 0,
              e: "Children wave flags at the parade." }
          ] },
        { nur: "M", art: "mc", id: "verstehen", tag: "Understanding", titel: "What do the texts say?", lead: "Tick the correct answer.",
          fragen: [
            { q: "When did Yellowstone become a national park?", o: ["in 1872", "in 1937", "in 1926"], a: 0,
              e: "Yellowstone became a national park in 1872. The Golden Gate Bridge opened in 1937." },
            { q: "How is Yellowstone different from the national parks in Germany?", o: ["It is much bigger.", "It is much smaller.", "It has no animals."], a: 0,
              e: "The text says: The park is huge – much bigger than any national park in Germany." },
            { q: "Why must visitors stay far away from bison?", o: ["Bison can run very fast.", "Bison are very shy and run away.", "Bison only come out at night."], a: 0,
              e: "Bison look calm, but they can run very fast." },
            { q: "What did paddle steamers carry in the 1800s?", o: ["people and goods", "only tourists", "only fire engines"], a: 0,
              e: "They carried people and goods up and down the river." },
            { q: "What does the pitcher do in baseball?", o: ["He or she throws the ball.", "He or she hits the ball with a bat.", "He or she runs around four bases first."], a: 0,
              e: "The pitcher throws the ball. The batter tries to hit it and then runs." },
            { q: "What do families do after the parade?", o: ["They meet in the park for a picnic or a barbecue.", "They all go to a baseball game.", "They go on a trip on a paddle steamer."], a: 0,
              e: "After the parade, families meet in the park for a picnic or a barbecue." }
          ] }
      ] },
      { kurz: "Details", ober: "Reading for details", titel: "Find the lines and the words", teile: [
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`, lesetext: "u4-intro-karten-r",
          hilfen: ["Lies die Frage und suche ein passendes Wort im Text: bison, fog, wheel.", "Die Fragen gehören zu Photo 1, Photo 2 und Photo 3."],
          fragen: [
            { q: "What must visitors do when they see bison?", zeilen: [5, 6], e: "Visitors must stay far away from them.", tipp: "Look at Photo 1." },
            { q: "What happens at the bridge on many mornings?", zeilen: [9, 10], e: "There is fog, and you can only see the top of the bridge.", tipp: "Look at Photo 2." },
            { q: "What did boats with a big wheel do in the past?", zeilen: [13, 14], e: "They carried people and things on the river.", tipp: "Look at Photo 3." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines with the answer.", lesetext: "u4-intro-karten-m",
          fragen: [
            { q: "Why is one geyser called Old Faithful?", zeilen: [6, 8], e: "It shoots up again and again, many times a day – you can trust it (faithful = treu).", tipp: "Look at Photo 1." },
            { q: "When can you see only the tops of the bridge?", zeilen: [14, 16], e: "In summer, fog often comes in from the Pacific Ocean in the morning.", tipp: "Look at Photo 2." },
            { q: "What do people do during a baseball game?", zeilen: [28, 30], e: "Everybody stands up and sings an old baseball song together.", tipp: "Look at Photo 4." }
          ] },
        { nur: "R", art: "formular", id: "woerter-finden", tag: "Find the words", titel: "What is the word?", lead: `Read the explanation and choose the right word from the texts. <span class="de">Lies die Erklärung und wähle das passende Wort aus den Texten.</span>`,
          kopf: "Words from the texts",
          hilfen: ["Lies jede Erklärung genau: Ist es ein Ding, ein Tier, ein Ort?", "Die Wörter stehen alle in den fünf Texten.", "very, very big = huge"],
          felder: [
            { label: "a part of the USA with its own name, like Wyoming or Texas", loesung: ["state"], wahl: ["state", "city", "river"] },
            { label: "very, very big", loesung: ["huge"], wahl: ["huge", "long", "strong"] },
            { label: "hot water that shoots up out of the ground", loesung: ["geysers"], wahl: ["geysers", "bison", "fog"] },
            { label: "the thing a baseball player uses to hit the ball", loesung: ["bat"], wahl: ["bat", "flag", "wheel"] },
            { label: "a car that brings water to a fire", loesung: ["fire engine"], wahl: ["fire engine", "paddle steamer", "bike"] }
          ] },
        { nur: "M", art: "formular", id: "woerter-finden", tag: "Find the words", titel: "What is the word?", lead: "Read the explanation and find the word in the texts. Write it down.",
          kopf: "Words from the texts",
          felder: [
            { label: "a part of the USA with its own name, like Wyoming", platz: "one word", loesung: ["state", "a state", "the state", "states"] },
            { label: "very, very big", platz: "one word", loesung: ["huge"] },
            { label: "hot water that shoots up out of the ground", platz: "one word", loesung: ["geyser", "geysers", "a geyser", "the geysers"] },
            { label: "the baseball player who tries to hit the ball", platz: "one word", loesung: ["batter", "the batter", "a batter"] },
            { label: "a long line of people who walk or ride down the street on a special day", platz: "one word", loesung: ["parade", "a parade", "the parade"] },
            { label: "things that boats or trains carry from one place to another", platz: "one word", loesung: ["goods", "the goods"] }
          ] }
      ] },
      { kurz: "Listening", ober: "Radio", titel: "America Calling", teile: [
        { art: "text", html: `<p class="lead">On the radio show <b>America Calling</b>, the presenter Mrs Delgado talks to Luis. He is thirteen and lives in <b>Texas</b>, a big state in the USA. <span class="de">Mrs Delgado und Luis sind erfunden.</span></p><p>Read the sentences first. Then listen. You can use “slower”. <span class="de">Lies zuerst die Sätze. Du kannst das Gespräch mehrmals hören. Das Transkript siehst du erst, wenn du fertig bist.</span></p>` },
        { nur: "R", art: "hoertext", id: "radio", tag: "🎧 Radio show", hoertext: "u4-intro-radio-r", fragen: [
          { art: "mc", id: "radio-mc", titel: "Complete the sentences", lead: `Listen and choose the right word. <span class="de">Es gibt drei Möglichkeiten.</span>`,
            fragen: [
              { q: "Luis lives in the ____ of Texas.", o: ["south", "north", "west"], a: 0,
                e: "Luis says: I live in a small town in the south of Texas." },
              { q: "His team plays against other schools on ____.", o: ["Saturdays", "Sundays", "Fridays"], a: 0,
                e: "They train two times a week, and on Saturdays they play against other schools." },
              { q: "Last summer the family drove to Yellowstone for ____.", o: ["two days", "two hours", "two weeks"], a: 0,
                e: "Luis says: We drove there for two days." },
              { q: "Luis goes on a paddle steamer with his ____.", o: ["grandpa", "team", "teacher"], a: 0,
                e: "His grandpa lives near the river. Every summer they go on a paddle steamer together." },
              { q: "In San Francisco, Luis wants to ____.", o: ["ride a bike across the bridge", "watch a baseball game", "go on a boat trip"], a: 0,
                e: "He wants to ride a bike across the Golden Gate Bridge." }
            ] }
        ] },
        { nur: "M", art: "hoertext", id: "radio", tag: "🎧 Radio show", hoertext: "u4-intro-radio-m", fragen: [
          { art: "mc", id: "radio-mc", titel: "Tick the correct answer", lead: "Listen and tick the correct answer.",
            fragen: [
              { q: "Why does Luis speak English and Spanish at home?", o: ["His town is not far from Mexico.", "His mum is a Spanish teacher.", "He wants to live in Spain one day."], a: 0,
                e: "He says: It's not far from the border with Mexico, so at home we speak English and Spanish." },
              { q: "What does Luis do in his baseball team?", o: ["He throws the ball.", "He hits the ball with a bat.", "He helps the coach."], a: 0,
                e: "He is the pitcher, so he throws the ball." },
              { q: "What happened one morning in Yellowstone?", o: ["A bison walked next to their car.", "A geyser shot water on their car.", "They got lost in the fog."], a: 0,
                e: "A bison walked right next to the car, and his dad said: Stay in the car and keep quiet." },
              { q: "What did Luis's grandpa do when he was young?", o: ["He worked on a paddle steamer.", "He played baseball for Texas.", "He built bridges."], a: 0,
                e: "When he was young, he worked on a paddle steamer." }
            ] },
          { art: "mc", id: "radio-gefuehl", m7: true, titel: "How does Luis feel?", lead: "Tick the correct answer.",
            fragen: [
              { q: "How did Luis feel when the bison was next to the car?", o: ["nervous", "happy", "proud"], a: 0,
                e: "He says: I was really nervous. He was proud after an important baseball game." }
            ] }
        ] },
        { art: "merke", kopf: "AMERICAN ENGLISH", html: `<p>Have you noticed? In the USA some words are different from British English: Americans go on <b>vacation</b> (BE: holiday), they watch a <b>movie</b> (BE: film), and for them <b>football</b> is American football – our football is <b>soccer</b>. Some words have a different spelling: <b>favorite</b> (BE: favourite), <b>center</b> (BE: centre).</p><p><span class="de">In den USA heißen manche Wörter anders oder werden anders geschrieben. In deinen eigenen Texten schreibst du britisches Englisch.</span></p>` },
        { art: "paare", id: "be-ae", m7: true, tag: "Challenge · BE and AE", titel: "British or American?", lead: `Match the British word with the American word. <span class="de">Verbinde das britische Wort mit dem amerikanischen.</span>`,
          paare: [["holiday (BE)", "vacation (AE)"], ["film (BE)", "movie (AE)"], ["football (BE)", "soccer (AE)"], ["favourite (BE)", "favorite (AE)"], ["centre (BE)", "center (AE)"]] }
      ] },
      { kurz: "Your turn", ober: "Speaking and writing", titel: "Which place do you like best?", teile: [
        { art: "merke", kopf: "SAY WHAT YOU THINK", html: `<p>Say which photo you like and <b>why</b>:</p><ul><li><b>I like Photo … best</b> because …</li><li><b>In the photo I can see</b> …</li><li><b>I would like to</b> see / visit / try …</li></ul>` },
        { nur: "R", art: "offen", id: "meinung", tag: "Your words", titel: "Which photo do you like best?", lead: `Write two sentences. Say which photo you like best and why. <span class="de">Welches Foto gefällt dir am besten? Sage auch, warum.</span>`,
          fragen: [{ q: "Which photo do you like best? Why?", m: "I like Photo 1 best because I like animals. I would like to see the bison and the geysers.", k: ["i like|i love|my favourite|i think", "photo|picture|park|yellowstone|geyser|bison|bridge|fog|river|boat|steamer|mississippi|baseball|game|parade|band|town", "because|it is|it's|i would like|i'd like|i want|i can"], min: 3 }],
          tipp: "Start like this: I like Photo … best because … / I would like to …",
          hilfen: ["Schau dir die fünf Fotos noch einmal an. Welches findest du spannend?", "Schreibe: I like Photo … best.", "Dann sage, warum: because I like animals / because I like sport / because …"] },
        { nur: "M", art: "offen", id: "meinung", tag: "Your words", titel: "Which photo do you like best?", lead: "Write two or three sentences. Say which photo you like best, what you can see and why you like it.",
          fragen: [{ q: "Which photo do you like best? What can you see? Why do you like it?", m: "I like Photo 2 best. In the photo I can see a red bridge in the fog. I would like to ride a bike across it because it looks exciting.", k: ["i like|i love|my favourite|i think", "photo|picture|park|yellowstone|geyser|bison|bridge|fog|river|boat|steamer|mississippi|baseball|game|parade|band|town", "because|it is|it's|i would like|i'd like|i want|i can|looks"], min: 3 }],
          tipp: "Use: I like Photo … best. In the photo I can see … I would like to … because …" },
        { art: "offen", id: "mehr-orte", m7: true, tag: "Challenge · Your ideas", titel: "More places in the USA", lead: `Name <b>one more place</b> in the USA (a city, a park, a river …) and say what you can do or see there. <span class="de">Nenne einen weiteren Ort in den USA und sage, was man dort machen oder sehen kann.</span>`,
          fragen: [{ q: "Which other place in the USA would you like to visit? What can you do or see there?", m: "I would like to visit Niagara Falls because you can go on a boat close to the big waterfalls.", k: ["visit|see|go to|travel|like|want", "city|park|river|mountain|lake|beach|falls|museum|town|place|canyon|island|coast|desert", "can|because|there|see|do|go|swim|walk|watch|ride"], min: 2 }],
          tipp: "Start like this: I would like to visit … because you can … there." }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "richtigfalsch", tag: "True or false?", titel: "The USA", lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Yellowstone is famous for its geysers.", true],
            ["Most of Yellowstone is in the state of Wyoming.", true],
            ["The Golden Gate Bridge is in Texas.", false],
            ["Paddle steamers are boats with a big wheel.", true],
            ["In baseball, players hit the ball with their feet.", false],
            ["Luis plays in his school's baseball team.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You know five typical places and things in the USA, you understood a radio show and you can say which place you like best." }
  });
})();
