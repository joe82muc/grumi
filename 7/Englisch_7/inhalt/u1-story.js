/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Story: Cricket on the green (Kürzel A14)
   (statt eines Films: eine Hörgeschichte in zwei Teilen mit Bildimpulsen – erst nach drei Bildbeschreibungen vermuten, dann
   hören, die richtige Zusammenfassung wählen, den Wendepunkt finden, Zitate den Personen zuordnen, die Ereignisse ordnen,
   als Rafi eine E-Mail über den Samstag schreiben, zuletzt das simple past in Sätzen der Geschichte)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Film“, nur Aufbau, nichts übernommen): Standbild ansehen und vermuten, was im Film
   passiert (Viewing skills: Bild und Titel nutzen) → ansehen und die Vermutungen prüfen → von drei Zusammenfassungen die richtige
   wählen → „Who says it?“ – Zitate den Personen zuordnen → eine E-Mail einer Figur an einen Freund über das Erlebnis schreiben
   (E-Mail-Rahmen mit Satzanfängen und Grußformel). Andere Situation als im Buch: kein Surfen, kein Filmdreh, keine Schule aus
   London – ein Cricketspiel auf einer Dorfwiese; der Wendepunkt ist ein altes Foto im Vereinshaus.
   Besser: eine eigene Geschichte in zwei Teilen (Vermutung dazwischen), sofortige Rückmeldung, Hilfen in Stufen, der Wendepunkt
   in zwei Schritten (welcher Moment, welcher Satz; M7: warum er Rafis Meinung ändert), die E-Mail im Schreibtrainer mit
   Checkliste und KI-Rückmeldung (schreibt den Text nicht neu, Fassungen für die Lehrkraft), simple past mit Förder-Link.
   Differenzierung: Hörtext R7 251 Wörter (120 und 131 Wörter), M7 370 Wörter (183 und 187 Wörter) mit Nebensätzen, einer
   Rückfrage und einem Versprechen am Schluss; R7 mit deutschen Hilfen und Hilfen in Stufen, E-Mail ab 40 Wörtern mit
   sichtbaren Satzanfängen; M7 ohne deutsche Hilfen, E-Mail ab 60 Wörtern mit Reihenfolge, Begründung und einer Frage,
   Satzanfänge auf Knopfdruck, sechs Ereignisse statt fünf. Plus (m7): den Wendepunkt erklären (vorher – nachher – warum) und
   zwei Fragen im simple past an Granny Joan schreiben (für R7 freiwillig).
   LehrplanPLUS E7 1.2 Hörverstehen (Geschichte: Handlungsverlauf, Einzelheiten, Sprecher), E7 1.3 Sprechen (Vermutungen,
   Meinung), E7 2.2 Schreiben (persönliche E-Mail über ein Erlebnis), E7 3 (G1 simple past: regelmäßig, unregelmäßig,
   Verneinung, Fragen), E7 5 (England: Cricket auf der Dorfwiese, Vereinsleben im Dorf).
   Texte: texte/u1/u1-story-1-r.js, u1-story-1-m.js, u1-story-2-r.js, u1-story-2-m.js („Cricket on the green“, part one/two).
   Alle Personen und das Dorf sind erfunden: die Cousins Rafi und Millie, Granny Joan, Ashcombe mit dem Ashcombe Cricket Club.
   Sachlich: Eine Cricketmannschaft hat elf Spieler; der bowler wirft mit gestrecktem Arm; trifft der Ball das wicket (drei
   Holzstäbe mit zwei Hölzchen darauf), ist der batter „out“; in England spielt man Cricket oft auf der Dorfwiese.
   Förder-Links: simple past → unit1/extra/simple-past.html.
   Wörter der Unit bis zum Film kommen bewusst vor: quiet, near, village, I'm afraid, occasionally, to take (dauern), how to …,
   what a …, brilliant, to be right/wrong, Bye for now. Neu und im Glossar erklärt: bat, to bowl, batter, wicket, clubhouse.
   Grammatik der Unit im Dialog: simple past (went, hit, won, didn't know, Why didn't you …?), simple present (plays, starts),
   Fragen mit do (Do you play cricket?).
   BILDER:
   1. Station „Look and guess“ (Sprechanlass/Vorentlastung, ersetzt die drei Bildkarten): eine grüne Dorfwiese mit alten Häusern
      und einer Kirche, ein kleines Vereinshaus aus Holz; Kinder in weißer Kleidung, ein Junge in Jeans hält unsicher einen roten
      Ball, am Rand auf einer Bank eine ältere Frau mit Teetasse, die lächelt.
   2. Station „Part two“ (Hörhilfe): der Ball trifft die drei Holzstäbe, die Hölzchen fliegen hoch; der Junge reißt die Arme hoch,
      ein Mädchen jubelt.
   3. Station „Who says it?“ (Sprechanlass Wendepunkt): ein altes Schwarz-Weiß-Foto an der Holzwand eines Vereinshauses, darauf
      eine Frauenmannschaft in Weiß mit einem Pokal; davor zeigen ein Junge und ein Mädchen staunend darauf (ohne lesbare Schrift). */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
D7Kit.seite({
  id: "u1-story",
  titel: "Story: Cricket on the green",
  einleitung: "A village green, a cricket match and a boy who thinks that cricket is boring. In this <b>story</b> you guess first, then you listen in two parts, find the <b>turning point</b> and write an e-mail. Du hörst eine Geschichte statt eines Films: vermuten, hören, den Wendepunkt erkennen und als Rafi eine E-Mail schreiben.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔍 I guess what a story is about from pictures.", "🎧 I follow a story and choose the right summary.", "🔄 I find the turning point of a story.", "🗣️ I say who says what.", "✉️ I write an e-mail about what happened – in the simple past."],
  thema: "Unit 1 Out and about in England, Story: Hörgeschichte (vermuten, Zusammenfassung, Wendepunkt, wer sagt was, E-Mail)",
  quiz: { profi: "Story pro" },
  glossar: {
    cricket: ["cricket", "Cricket ist ein Mannschaftsspiel mit Schläger und Ball. In England spielt man es besonders im Sommer."],
    bat: ["bat", "Das ist der Schläger. Beim Cricket ist er flach und aus Holz. Ein bat ist aber auch eine Fledermaus."],
    bowl: ["to bowl – bowler", "Beim Cricket wirft der bowler den Ball mit gestrecktem Arm zum batter. Dieses Werfen heißt to bowl."],
    batter: ["batter", "Der batter steht vor dem wicket und versucht, den Ball mit dem Schläger zu treffen."],
    wicket: ["wicket", "Das wicket sind drei kleine Holzstäbe im Boden mit zwei kleinen Hölzchen darauf. Trifft der Ball das wicket, ist der batter „out“ und muss vom Feld."],
    green: ["village green", "Eine village green ist eine Wiese mitten im Dorf. In England spielt man dort oft Cricket."],
    clubhouse: ["clubhouse", "Das ist das Vereinshaus eines Sportvereins."],
    junior: ["junior team", "Ein junior team ist eine Jugendmannschaft."],
    turning: ["turning point", "Der turning point (Wendepunkt) ist der Moment, in dem sich in einer Geschichte alles ändert."]
  },
  stationen: [
    { kurz: "Look and guess", ober: "Before you listen", titel: "What is the story about?", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-story-green.jpg\" width=\"1280\" height=\"853\" alt=\"A village green in England: children in white play cricket, a girl holds a flat bat, a boy in jeans holds a red ball and looks worried; an old woman with a cup of tea sits on a bench and smiles.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">The story is called <b>Cricket on the green</b>. Rafi is staying with his cousin Millie and their Granny Joan in <b>Ashcombe</b>, a small village in England. It's the summer holidays. <span class=\"de\">Rafi verbringt die Sommerferien bei seiner Cousine Millie und ihrer Oma Joan in einem kleinen Dorf in England. Sieh dir das Bild an, lies die drei Bildkarten und vermute: Wo sind die Kinder? Was spielen sie? Wie geht es dem Jungen?</span></p>" },
      { art: "karten", karten: [
        { ic: "🌳", titel: "Picture 1: the village", text: "A big green field in the middle of a small, quiet village. There are old houses and a church near it, and a little wooden <button class=\"term\" data-t=\"clubhouse\">clubhouse</button>." },
        { ic: "🏏", titel: "Picture 2: the players", text: "Boys and girls in white clothes stand on the grass. A girl holds a flat wooden <button class=\"term\" data-t=\"bat\">bat</button>. A boy in jeans and a T-shirt holds a hard red ball. He looks worried." },
        { ic: "☕", titel: "Picture 3: the bench", text: "An old woman sits on a bench at the side of the field. She has a cup of tea and a box of sandwiches. She is smiling." }
      ] },
      ...zwei({ art: "paare", id: "woerter", tag: "Words you need", titel: "Cricket words" },
        { lead: "Find the pairs. <span class=\"de\">Diese Wörter hörst du in der Geschichte. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>",
          paare: [["bat", "Schläger"], ["to bowl", "den Ball werfen (beim Cricket)"], ["batter", "Schlagmann, Schlagfrau"], ["village green", "Dorfwiese"], ["clubhouse", "Vereinshaus"], ["cup", "Pokal"]],
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst: village und house.", "Der bowler wirft, der batter schlägt. Womit schlägt er? Mit dem bat.", "bat = Schläger · to bowl = werfen · batter = Schlagmann · village green = Dorfwiese · clubhouse = Vereinshaus · cup = Pokal"] },
        { lead: "Find the pairs.",
          paare: [["bat", "Schläger"], ["to bowl", "den Ball werfen (beim Cricket)"], ["batter", "Schlagmann, Schlagfrau"], ["wicket", "drei Holzstäbe hinter dem Schlagmann"], ["village green", "Dorfwiese"], ["clubhouse", "Vereinshaus"], ["cup", "Pokal"]],
          hilfen: ["Tap a word in the cards above, for example clubhouse: it is explained in the word box."] }),
      ...zwei({ art: "mc", id: "vermuten", tag: "Guess", titel: "Guess first" },
        { lead: "Use the three pictures and tick the best answer. <span class=\"de\">Nutze die drei Bildkarten und kreuze die beste Antwort an.</span>",
          fragen: [
            { q: "Where are the children?", o: ["On a village green", "In the centre of a big city", "On a beach by the sea", "In a school sports hall"], a: 0, e: "Ein großes grünes Feld mitten in einem kleinen, ruhigen Dorf – das ist eine Dorfwiese, eine village green." },
            { q: "Which sport do they play?", o: ["Cricket", "Football", "Tennis", "Basketball"], a: 0, e: "Ein flacher Holzschläger und ein harter roter Ball gehören zum Cricket." },
            { q: "How does the boy in jeans feel?", o: ["He is worried.", "He is very happy.", "He is angry.", "He is tired."], a: 0, e: "Auf Bild 2 steht: He looks worried. Er macht sich Sorgen." }
          ],
          hilfen: ["Lies die drei Karten noch einmal genau. Die Antworten stehen fast wörtlich dort.", "Flacher Holzschläger und harter roter Ball: Welcher Sport ist das?"] },
        { lead: "Use the three pictures and tick the best answer.",
          fragen: [
            { q: "Where does the story take place?", o: ["On a field in a small village, near a church", "In the centre of a big city", "At a sports centre by the sea", "In a school in London"], a: 0, e: "Das Feld liegt mitten in einem kleinen, ruhigen Dorf, in der Nähe stehen alte Häuser und eine Kirche." },
            { q: "Why is the boy in jeans different from the other players?", o: ["He doesn't wear white clothes – maybe he isn't really a member of the team.", "He is much older than the other players.", "He is the only player with a bat.", "He is the only boy on the field."], a: 0, e: "Alle anderen tragen Weiß, er trägt Jeans – vielleicht spielt er sonst nicht mit. Der Schläger gehört einem Mädchen, und es spielen Jungen und Mädchen." },
            { q: "Who could the old woman on the bench be?", o: ["Someone who watches the game – maybe the grandmother of a player", "The captain of the team", "A teacher who checks the rules", "A tourist who is lost"], a: 0, e: "Sie sitzt am Rand mit Tee und Sandwiches und lächelt: Sie schaut zu. Vielleicht ist sie die Oma eines Kindes." }
          ] }),
      { art: "merke", kopf: "LISTENING SKILLS · BEFORE YOU LISTEN", html: "<p>Before you listen to a story, use the <b>title</b> and the <b>pictures</b>: Where are the people? Who are they? What could happen? Then you understand more when you listen.</p><p>A story has <b>characters</b> (the people), a <b>setting</b> (where and when) and a <button class=\"term\" data-t=\"turning\">turning point</button>: the moment when everything changes.</p>" }
    ] },
    { kurz: "Part one", ober: "Listening", titel: "One player is missing", teile: [
      { art: "text", html: "<p class=\"lead\">Listen to <b>part one</b>. Read the questions first. <span class=\"de\">Lies erst die Fragen, dann hör zu. Beim Hören musst du nicht jedes Wort verstehen.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Part one", hoertext: { R: "u1-story-1-r", M: "u1-story-1-m" },
        fragen: [
          ...zwei({ art: "mc", id: "hoer1-q", titel: "Part one: what happens?" },
            { lead: "Listen and tick the answers. <span class=\"de\">Hör zu und kreuze an.</span>",
              fragen: [
                { q: "Why does Millie need Rafi?", o: ["One of the players is ill.", "Rafi is the best player in the village.", "Granny Joan can't come.", "The match is in the city."], a: 0, e: "Millie sagt: One of our players is ill, and we need eleven players." },
                { q: "When does the match start?", o: ["At two o'clock", "At ten o'clock", "At half past two", "At twelve o'clock"], a: 0, e: "Granny Joan sagt: The match starts at two o'clock." }
              ],
              hilfen: ["Beim zweiten Hören achtest du bei der zweiten Frage nur auf die Uhrzeit am Ende.", "Millie sagt, dass ein Spieler krank ist: ill."] },
            { lead: "Listen and tick the answers.",
              fragen: [
                { q: "What does Rafi think about cricket at first?", o: ["The matches take hours, and it's a game for old men.", "It's dangerous because the ball is hard.", "It's too easy for him.", "It's his favourite sport."], a: 0, e: "Rafi sagt: The matches take hours, and it's a game for old men." },
                { q: "Which tips does Granny Joan give Rafi?", o: ["Keep your arm straight and watch the wicket.", "Hit the ball hard and run fast.", "Watch the batter and throw the ball high.", "Bowl with both hands."], a: 0, e: "Granny Joan sagt: keep your arm straight. Don't look at the batter – watch the wicket." }
              ],
              hilfen: ["Listen to Granny Joan's long sentence in the middle."] })
        ] },
      ...zwei({ art: "offen", id: "vorhersage", tag: "Predict", titel: "What happens at the match?" },
        { lead: "What do <b>you</b> think? Write <b>one sentence</b>. <span class=\"de\">Was passiert wohl beim Spiel? Schreibe einen Satz. Rate ruhig – gleich hörst du, wie es weitergeht.</span>",
          fragen: [{ q: "I think Rafi …", m: "I think Rafi bowls well because Granny Joan helps him.", k: ["think|maybe|perhaps|probably|guess", "rafi|he|ball|wicket|bowl|match|team|win|lose|out|hit|play|granny"], min: 1 }],
          hilfen: ["Beginne mit „I think …“ oder „Maybe …“.", "Du kannst auch einen Grund nennen: „… because Granny Joan helps him.“"],
          tipp: "Start like this: I think Rafi … / Maybe the team … You can add a reason with because." },
        { lead: "What do <b>you</b> think happens at the match – and why? Write <b>one or two sentences</b>.",
          fragen: [{ q: "I think Rafi … because …", m: "I think Rafi bowls well because Granny Joan knows a lot about cricket.", k: ["think|maybe|perhaps|probably|guess", "rafi|he|ball|wicket|bowl|match|team|win|lose|out|hit|play|granny"], min: 2 }],
          tipp: "Start like this: I think Rafi … because … / Maybe Granny Joan …" })
    ] },
    { kurz: "Part two", ober: "Listening", titel: "The turning point", teile: [
      { art: "text", html: "<p class=\"lead\">Now listen to <b>part two</b>. Is your idea right? <span class=\"de\">Jetzt kommt Teil zwei. Hattest du recht? Danach entscheidest du: richtig oder falsch?</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Part two", hoertext: { R: "u1-story-2-r", M: "u1-story-2-m" },
        fragen: [
          ...zwei({ art: "tf", id: "richtigfalsch", titel: "True or false?" },
            { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
              aussagen: [["Rafi's first ball hits the wicket.", false], ["Granny Joan shouts a tip to Rafi.", true], ["The old photo is from 1975.", true], ["Millie knew Granny Joan's secret.", false]],
              hilfen: ["Was passiert mit dem ersten Ball? Millie sagt: „Oh no …“", "Millie sagt am Ende: „I didn't know that!“"] },
            { lead: "Decide: true or false?",
              aussagen: [["Rafi is nervous because everybody from the village is watching.", true], ["Rafi's first ball goes much too far.", true], ["Granny Joan is the captain of the junior team.", false], ["Granny Joan told the children about her cricket years before the match.", false]],
              hilfen: ["What does Millie ask Granny at the end? What does Granny answer?"] })
        ] },
      ...zwei({ art: "mc", id: "zusammenfassung", tag: "Summary", titel: "Which summary is correct?" },
        { lead: "Read the three summaries. Only one is correct. <span class=\"de\">Lies die drei Zusammenfassungen. Nur eine stimmt mit der ganzen Geschichte überein.</span>",
          fragen: [
            { q: "Which summary of the whole story is correct?", o: ["Rafi thinks that cricket is boring, but he helps Millie's team. Granny Joan gives him tips, and his ball hits the wicket. Then he learns that Granny was the best bowler in the club.", "Rafi loves cricket and is the best player in the team. Granny Joan doesn't like cricket, so she stays at home. Millie gets a cup.", "Millie is ill, so Rafi and Granny Joan play for the team. Rafi's balls all go too far, and he never wants to play cricket again."], a: 0,
              e: "Rafi findet Cricket zuerst langweilig, spielt aber mit. Mit Grannys Tipp trifft er das wicket, und im Vereinshaus erfährt er, dass Granny die beste Werferin war." }
          ],
          hilfen: ["Prüfe jede Zusammenfassung Satz für Satz: Was stimmt nicht?", "Mag Rafi Cricket am Anfang? Wer ist krank – Millie oder ein anderer Spieler?"] },
        { lead: "Read the three summaries. Only one is correct.",
          fragen: [
            { q: "Which summary of the whole story is correct?", o: ["Rafi doesn't want to play at first, but he helps the team. After a bad first ball he follows Granny Joan's tips and gets a batter out. In the clubhouse an old photo shows that Granny was the club's best bowler.", "Rafi doesn't want to play at first, but he helps the team. His first ball hits the wicket. In the clubhouse Granny Joan shows the children a photo of Millie's first match.", "Rafi is happy to play because he knows the rules. Granny Joan is the captain of the junior team, and the team wins a cup."], a: 0,
              e: "Die zweite Zusammenfassung beginnt richtig, aber der erste Ball geht daneben, und das Foto zeigt Granny Joan, nicht Millie. In der dritten stimmt fast nichts." }
          ] }),
      { art: "merke", kopf: "STORY SKILLS · THE TURNING POINT", html: "<p>Every good story has a <button class=\"term\" data-t=\"turning\">turning point</button>. Before it, the characters believe one thing. After it, they know something new – and they see things in a different way.</p>" },
      ...zwei({ art: "mc", id: "wendepunkt", tag: "Turning point", titel: "Find the turning point" },
        { lead: "Tick the answers. <span class=\"de\">Welcher Moment ändert alles?</span>",
          fragen: [
            { q: "What is the turning point of the story?", o: ["Rafi and Millie see the old photo and learn that Granny Joan was the best bowler.", "Millie asks Rafi to play for the team.", "Rafi's first ball goes too far.", "Granny Joan says that the match starts at two o'clock."], a: 0, e: "Erst beim Foto erfahren die Kinder Grannys Geheimnis – danach sieht Rafi Cricket ganz anders." },
            { q: "Which sentence shows the turning point?", o: ["“Yes, it is. I was the best bowler in the club.”", "“Rafi, it's your turn. Bowl the ball!”", "“I'm afraid I can't play, Millie.”", "“Now eat your toast.”"], a: 0, e: "Mit diesem Satz verrät Granny Joan ihr Geheimnis." }
          ],
          hilfen: ["Wann erfahren Rafi und Millie etwas, das sie vorher nicht wussten?", "Denk an das alte Foto im Vereinshaus."] },
        { lead: "Tick the answers.",
          fragen: [
            { q: "What is the turning point of the story?", o: ["An old photo in the clubhouse shows that Granny Joan was the club's best bowler.", "Millie asks Rafi to help the team.", "Rafi's first ball goes much too far.", "Granny Joan explains how to bowl."], a: 0, e: "Erst beim Foto erfahren die Kinder Grannys Geheimnis." },
            { q: "How does the turning point change things for Rafi?", o: ["He doesn't think that cricket is a game for old men any more.", "He wants to go home at once.", "He thinks that cricket is even more boring now.", "He is angry with Millie."], a: 0, e: "Rafi sagt: I was wrong. Und er will lernen, einen schnellen Ball zu werfen." }
          ] }),
      { art: "offen", id: "wende-erklaeren", m7: true, tag: "Your words", titel: "Explain the turning point",
        lead: "Write <b>two sentences</b>: What did Rafi think about cricket <b>before</b> the match? What does he think <b>now</b> – and why? <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Before the match Rafi thought … Now he thinks … because …", m: "Before the match Rafi thought that cricket was boring and a game for old men. Now he likes it because he bowled well and his granny was the best bowler in the club.", k: ["boring|old men|old man|didn't like|did not like", "now|likes|like|exciting|fun|isn't boring|is not boring|wrong|great|cool", "granny|joan|bowler|photo|wicket|bowled"], min: 2 }],
        hilfen: ["Vorher: „boring“, „a game for old men“. Nachher: „I was wrong“.", "Mit „because“ gibst du den Grund an: das Foto, der gute Ball."],
        tipp: "Use: Before the match Rafi thought that … Now he … because …" }
    ] },
    { kurz: "Who says it?", ober: "After listening", titel: "Who says what – and what happens when?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>an old photo in the clubhouse</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-story-foto.jpg\" width=\"1280\" height=\"853\" alt=\"In the clubhouse a boy and a girl point amazed at an old black-and-white photo of a women's cricket team with a big cup; their granny smiles behind them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who is in the old photo? How do Rafi and Millie feel now? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Three people talk in the story: <b>Rafi</b>, <b>Millie</b> and <b>Granny Joan</b>. <span class=\"de\">Wer sagt was? Du kannst die Geschichte noch einmal hören – oben bei Part one und Part two.</span></p>" },
      ...zwei({ art: "sort", id: "wer-sagt", tag: "Who says it?", titel: "Rafi, Millie or Granny Joan?", buckets: ["Rafi", "Millie", "Granny Joan"] },
        { lead: "Put the sentences into the right box. <span class=\"de\">Ordne jeden Satz der Person zu, die ihn sagt.</span>",
          items: [{ t: "It's a game for old men.", b: 0 }, { t: "I'm so nervous.", b: 0 }, { t: "We need eleven players.", b: 1 }, { t: "What a ball!", b: 1 }, { t: "Keep your arm straight.", b: 2 }, { t: "I played for Ashcombe for twenty years.", b: 2 }],
          hilfen: ["Wer findet Cricket zuerst langweilig? Wer hat im Spiel Angst?", "Millie spielt im Team und freut sich über Rafis Ball.", "Granny Joan gibt Tipps – und hat früher selbst gespielt."] },
        { lead: "Put the sentences into the right box.",
          items: [{ t: "The matches take hours.", b: 0 }, { t: "Can you show me how to bowl a really fast ball?", b: 0 }, { t: "We can't play with only ten.", b: 1 }, { t: "Granny! Why didn't you tell us?", b: 1 }, { t: "Don't look at the batter – watch the wicket.", b: 2 }, { t: "You didn't ask!", b: 2 }],
          hilfen: ["Who asks Granny a question at the end – and who answers it?"] }),
      ...zwei({ art: "ordnen", id: "reihenfolge", tag: "Order the events", titel: "Put the story in order" },
        { lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
          schritte: ["Millie asks Rafi to play for her team.", "Granny Joan gives Rafi two tips.", "Rafi's first ball goes too far.", "Rafi's ball hits the wicket.", "The children see an old photo in the clubhouse."],
          hilfen: ["Teil eins spielt beim Frühstück, Teil zwei beim Spiel und im Vereinshaus.", "Zuerst geht ein Ball daneben, dann trifft einer."] },
        { lead: "Put the events in the right order.",
          schritte: ["Rafi says that cricket is a game for old men.", "Millie asks Rafi to help the team.", "Granny Joan gives Rafi two tips for bowling.", "Rafi's first ball goes much too far.", "Rafi's ball hits the wicket.", "In the clubhouse the children find out Granny Joan's secret."],
          hilfen: ["Think about breakfast first, then the match, then the clubhouse."] })
    ] },
    { kurz: "Write an e-mail", ober: "Writing", titel: "Rafi writes to a friend", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>Rafi writes an e-mail</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-story-mail.jpg\" width=\"1280\" height=\"853\" alt=\"In the evening a boy sits at a desk in a cosy cottage room and types on a laptop; a red cricket ball lies next to it.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is Rafi doing? What can he tell his friend about Saturday? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">In the evening Rafi writes an e-mail to a friend at home. What happened on Saturday? <span class=\"de\">Am Abend schreibt Rafi einer Freundin oder einem Freund zu Hause. Du schreibst diese E-Mail – als Rafi.</span></p>" },
      { art: "merke", nur: "R", kopf: "AN E-MAIL TO A FRIEND", html: "<ul><li><b>Greeting:</b> <i>Hi</i> or <i>Hello</i> + the name of your friend, with a comma</li><li><b>What happened:</b> in the <b>simple past</b> – <i>played, watched, hit, was …</i></li><li><b>How you felt:</b> <i>I was nervous / surprised / happy.</i></li><li><b>Ending:</b> <i>Bye for now, · See you soon,</i> + your name</li></ul><p><span class=\"de\">Was passiert ist, erzählst du im simple past. Die Satzanfänge unter dem Auftrag helfen dir.</span></p>" },
      { art: "merke", nur: "M", kopf: "AN E-MAIL TO A FRIEND", html: "<ul><li><b>Greeting</b> (<i>Hi</i> + name, with a comma) and a first sentence: <i>You won't believe what happened!</i></li><li><b>What happened</b> – in the <b>simple past</b> and in the right order: <i>first · then · after the match · in the end</i></li><li><b>Feelings and opinion</b> with <i>because</i>: <i>I was nervous because …</i></li><li><b>A question</b> for your friend: <i>Do you …? Have you got …?</i></li><li><b>Ending:</b> <i>Bye for now, · See you soon,</i> + your name</li></ul>" },
      { art: "schreiben", id: "email", nur: "R", tag: "Writing trainer", titel: "Rafi's e-mail", min: 40,
        auftrag: "<p><b>You are Rafi.</b> Write an e-mail to a friend at home about your Saturday in Ashcombe (40 words or more). <span class=\"de\">Du bist Rafi. Schreibe mindestens 40 Wörter. Die Satzanfänge helfen dir.</span></p><ul><li>a greeting</li><li>what happened at the match</li><li>the surprise in the clubhouse</li><li>what you think about cricket now</li><li>an ending and your name</li></ul>",
        starter: ["Hi …,", "Guess what! Today I …", "At first I thought cricket was …", "My first ball …", "Then Granny Joan …", "After the match we …", "I was so surprised because …", "Now I think cricket is …", "Bye for now,", "Rafi"],
        kriterien: ["Die E-Mail hat eine Anrede und am Schluss einen Gruß mit Namen.", "Du erzählst, was beim Spiel passiert ist – im simple past (played, hit, was …).", "Du erzählst von der Überraschung im Vereinshaus.", "Du schreibst, wie Rafi Cricket jetzt findet."] },
      { art: "schreiben", id: "email", nur: "M", tag: "Writing trainer", titel: "Rafi's e-mail", min: 60,
        auftrag: "<p><b>You are Rafi.</b> Write an e-mail to a friend at home about your Saturday in Ashcombe (60 words or more).</p><ul><li>a greeting and a first sentence</li><li>what happened at the match – in the right order</li><li>the turning point in the clubhouse</li><li>how you felt and what you think about cricket now – with <i>because</i></li><li>a question for your friend</li><li>an ending and your name</li></ul>",
        starter: ["Hi …,", "You won't believe what happened today!", "First … Then …", "I was really nervous because …", "After the match …", "Now I know that …", "Do you …?", "Bye for now,"],
        kriterien: ["Die E-Mail hat eine Anrede, einen Schluss und einen Gruß mit Namen.", "Du erzählst die Ereignisse in der richtigen Reihenfolge im simple past (first, then, after the match).", "Du erzählst vom Wendepunkt: dem alten Foto von Granny Joan.", "Du schreibst mit because, was Rafi jetzt über Cricket denkt.", "Du stellst deinem Freund oder deiner Freundin eine Frage."] }
    ] },
    { kurz: "Language", ober: "Kurz sichern", titel: "The simple past in the story", teile: [
      { art: "merke", nur: "R", kopf: "LOOK AT THE LANGUAGE · SIMPLE PAST", html: "<p>The story happened on Saturday – so you tell it in the <b>simple past</b>:</p><ul><li>regular verbs: <b>-ed</b> – <i>play → played · watch → watched</i></li><li>irregular verbs: <i>hit → hit · be → was/were · say → said</i></li><li>negative: <b>didn't + Grundform</b> – <i>Granny didn't tell the children.</i></li><li>questions: <b>Did + Person + Grundform</b> – <i>Did you play, Granny? – Yes, I did.</i></li></ul><p><span class=\"de\">Nach didn't steht immer die Grundform: didn't tell, nicht didn't told.</span></p>" },
      { art: "merke", nur: "M", kopf: "LOOK AT THE LANGUAGE · SIMPLE PAST", html: "<ul><li>regular verbs: <b>-ed</b> – <i>watch → watched · ask → asked</i></li><li>irregular verbs: <i>think → thought · be → was/were · say → said · tell → told</i></li><li>negative: <b>didn't + base form</b> – <i>Granny didn't say a word about the photo.</i></li><li>questions: <b>Did + person + base form …?</b> – short answers: <i>Yes, … did. / No, … didn't.</i> With a question word: <i>Why didn't you …? · When did you …?</i></li></ul>" },
      ...zwei({ art: "luecke", id: "past-luecke", tag: "Simple past", titel: "Complete the sentences", foerder: { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" } },
        { lead: "Complete the sentences with the simple past. <span class=\"de\">Zwei Formen sind falsch und bleiben übrig.</span>",
          absaetze: [
            ["At first Rafi ", { g: "thought" }, " that cricket was a game for old men."],
            ["His first ball ", { g: "went" }, " too far."],
            ["Millie ", { g: "didn't know" }, " about Granny's cricket years."],
            ["After the match the children ", { g: "saw" }, " an old photo."],
            ["In 1975 Granny's team ", { g: "won" }, " the cup, and she was the best bowler."]
          ], extra: ["goed", "didn't knew"],
          hilfen: ["Lies jeden Satz und überlege, welches Verb passt. Dann bilde das simple past.", "Viele Verben hier sind unregelmäßig. Nach didn't steht die Grundform.", "Satz 1: thought · Satz 2: went · Satz 3: didn't know · Satz 4: saw · Satz 5: won"] },
        { lead: "Complete the sentences with the simple past. Two forms are wrong and are left over.",
          absaetze: [
            ["At first Rafi ", { g: "didn't want" }, " to play."],
            ["His first ball ", { g: "went" }, " much too far."],
            ["Then he ", { g: "kept" }, " his arm straight, and the ball ", { g: "hit" }, " the wicket."],
            ["After the match the children ", { g: "saw" }, " an old photo in the clubhouse."],
            ["", { g: "Did" }, " Granny Joan tell the children about her cricket years? – No, she ", { g: "didn't" }, "."]
          ], extra: ["didn't wanted", "keeped"],
          hilfen: ["After didn't you use the base form.", "keep, go, see and hit are irregular verbs."] }),
      { art: "offen", id: "fragen-granny", m7: true, tag: "Your words", titel: "Questions for Granny Joan",
        lead: "Rafi wants to know more about Granny Joan's cricket years. Write <b>two questions</b> in the simple past. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig. Zum Beispiel mit Did you …? oder When did you …?</span>",
        foerder: { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" },
        fragen: [{ q: "Write two questions for Granny Joan.", m: "When did you start to play cricket? Did you win many matches with your team?", k: ["did you|when did you|where did you|why did you|how did you|what did you|how long did you|how many", "play|win|won|start|bowl|practise|train|stop|learn|like|feel|meet|team|match|cup"], min: 2 }],
        tipp: "Start like this: Did you …? / When did you …? / Why did you …? After did comes the base form: Did you win …?" },
      ...zwei({ art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know" },
        { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
          aussagen: [["A turning point is the moment when everything in a story changes.", true], ["In the story Granny Joan was the best bowler in the club.", true], ["The batter bowls the ball.", false], ["At the end of an e-mail to a friend you can write: Bye for now,", true], ["The simple past of win is winned.", false]] },
        { lead: "Decide: true or false?",
          aussagen: [["A turning point is the moment when everything in a story changes.", true], ["In the story Granny Joan was the best bowler in the club.", true], ["The batter bowls the ball to the bowler.", false], ["After didn't you use the base form: didn't tell.", true], ["A good summary tells every little detail of a story.", false]] })
    ] }
  ],
  weiter: { text: "Well done! You can guess what a story is about, follow it, find the turning point and write an e-mail about what happened. Now you know: cricket is a game for everybody!" }
});
