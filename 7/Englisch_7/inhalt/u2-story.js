/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Story: The secret of the old lighthouse (Kürzel B17)
   (statt eines Films: eine Hörgeschichte in zwei Teilen mit Bildern – erst nach einer Bildbeschreibung vermuten, dann hören und
   die Vermutungen prüfen, richtig oder falsch, die Bilder in die richtige Reihenfolge bringen, den Wendepunkt der Geschichte
   erkennen, über Gefühle und die eigene Meinung sprechen und schreiben, zuletzt present perfect und simple past in Sätzen der
   Geschichte)
   Buchprinzip (Film, nur Aufbau, nichts übernommen): Standbild ansehen und vermuten (wo, welche Jahreszeit, was ist darin) →
   ansehen und die Vermutungen prüfen → richtig oder falsch → „jeder gute Film hat einen Wendepunkt“ – welcher ist es? → Meinung
   mit Begründung (because …, I thought …, I was surprised/worried when …, exciting/boring). Besser: eigene Geschichte, die man
   in zwei Teilen hört (Aufnahme mit drei Stimmen), sofortige Rückmeldung, Hilfen in Stufen, Wendepunkt in zwei Schritten
   (welcher Moment, warum), Satzrahmen zur Meinung und ein Förder-Link bei der Grammatik.
   Differenzierung: Hörtext R7 290 Wörter (zwei Teile mit 160 und 130 Wörtern), M7 401 Wörter (215 und 186 Wörter) mit
   Nebensätzen und mehr Begründungen; R7 mit deutschen Hilfen, Satzrahmen-Lückentext und drei Lücken zur Grammatik, M7 mit
   Fragen ohne deutsche Hilfe, eigener Meinung in drei Sätzen und vier Lücken. Plus (m7): Wendepunkt in eigenen Worten
   erklären und zwei Sätze mit present perfect und simple past schreiben.
   LehrplanPLUS E7 1.2 Hörverstehen (Geschichte, Handlungsverlauf, Einzelheiten), E7 1.3 Sprechen (Vermutungen, Meinung mit
   Begründung), E7 2 (Wortfeld Film und Geschichte), E7 3 (going to, present perfect, Abgrenzung zum simple past).
   Texte: texte/u2/u2-story-1-r.js, u2-story-1-m.js, u2-story-2-r.js, u2-story-2-m.js. Alle Personen sind erfunden: die Cousins
   Owen und Lily, Aunt Bethan, Rhian vom Naturschutz; Pembrokeshire (Südwestwales) als Schauplatz. Sachlich: Fledermäuse
   bewohnen alte Türme, mit einem Gerät werden ihre für Menschen nicht hörbaren Rufe als Klicken hörbar, rotes Licht stört sie
   weniger als weißes.
   Förder-Links: Hören → u2_x7.html, present perfect oder simple past → unit2/extra/signal-words.html.
   Wörter der Unit bis zum Film (ever, just, already, yet, never, to find out, to book, reason, season, prop …) kommen
   bewusst vor; going to („We're going to find out“) und present perfect („Someone has opened the door“) im Dialog.
   BILDER:
   1. Station „Look and guess“ (Sprechanlass/Vorentlastung): ein alter, grauer Leuchtturm auf einer hohen Klippe am Meer, die
      Abendsonne sinkt, im obersten Fenster brennt ein kleines Licht; auf dem Pfad gehen zwei Jugendliche in T-Shirts und kurzen
      Hosen mit Taschenlampen.
   2. Station „Part two“ (Hörhilfe): die offene Tür des Leuchtturms, ein schwacher rötlicher Lichtschein dahinter, eine Leiter
      an der Wand; ein Mädchen und ein Junge stehen davor und flüstern.
   3. Station „Feelings and opinion“ (Sprechanlass): im dunkelblauen Abendhimmel fliegen viele kleine Fledermäuse aus dem Turm,
      ein Junge und ein Mädchen schauen nach oben und zählen mit den Fingern. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
D7Kit.seite({
  id: "u2-story",
  titel: "Story: The secret of the old lighthouse",
  einleitung: "Two cousins, an old lighthouse and a light that should not be there. In this <b>story</b> you guess first, then you listen in two parts, find the <b>turning point</b> and say what you think. Du hörst eine Geschichte statt eines Films: vermuten, hören, prüfen, den Wendepunkt erkennen und deine Meinung sagen.",
  zeit: "etwa 40 Minuten",
  ziele: ["🔍 I guess what a story is about from a picture.", "🎧 I follow a story and say what is true and what is false.", "🔄 I find the turning point of a story.", "💬 I give my opinion with because and I talk about feelings.", "⏳ I use the present perfect and the simple past in sentences from the story."],
  thema: "Unit 2 Fun in Wales and Scotland, Story: Hörgeschichte (vermuten, Wendepunkt, Meinung)",
  quiz: { profi: "Story pro" },
  glossar: {
    lighthouse: ["lighthouse", "Leuchtturm: Das ist ein hoher Turm am Meer. Sein helles Licht zeigt den Schiffen in der Nacht den Weg."],
    cliff: ["cliff", "Klippe: Das ist eine steile, hohe Felswand am Meer."],
    torch: ["torch", "Taschenlampe: So sagt man in Großbritannien."],
    ladder: ["ladder", "Leiter: Man steigt damit hoch hinauf."],
    thieves: ["thief – thieves", "Dieb – Diebe: Das sind Menschen, die etwas stehlen."],
    bats: ["bat", "Fledermaus: Das ist ein kleines Tier, das nachts fliegt und am Tag an dunklen Orten schläft."],
    nature: ["nature group", "Naturschutzgruppe: Das sind Menschen, die Tiere und Pflanzen schützen und zählen."],
    turning: ["turning point", "Wendepunkt: Das ist der Moment, in dem sich in einer Geschichte alles ändert."]
  },
  stationen: [
    { kurz: "Look and guess", ober: "Before you listen", titel: "What is the story about?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>an old lighthouse</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-story-leuchtturm.jpg\" width=\"1280\" height=\"853\" alt=\"An old grey lighthouse on a high cliff at sunset, a small light in the top window, two teenagers with torches on the path.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the place like? How do you think the two teenagers feel? What might happen? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Aunt Bethan lives in <b>Pembrokeshire</b>, in the south-west of Wales. This summer her niece and nephew, <b>Owen</b> and <b>Lily</b>, are staying with her. Look at the description of the picture: <b>where</b> are they, <b>which season</b> is it, and <b>what</b> is going on? <span class=\"de\">Owen und Lily verbringen die Ferien bei ihrer Tante in Südwestwales. Lies die Bildbeschreibung und vermute: Wo sind sie? Welche Jahreszeit ist es? Was passiert?</span></p>" },
      { art: "karten", karten: [
        { ic: "🗼", titel: "The picture: the tower", text: "An old, grey <button class=\"term\" data-t=\"lighthouse\">lighthouse</button> stands on a high <button class=\"term\" data-t=\"cliff\">cliff</button>. Below it there is the sea. In the top window of the tower there is a small light." },
        { ic: "🌅", titel: "The picture: the evening", text: "The sun is going down. The sky is orange and pink. It is still warm." },
        { ic: "🔦", titel: "The picture: the young people", text: "A boy and a girl walk on the cliff path. They wear T-shirts and shorts. Each of them has a <button class=\"term\" data-t=\"torch\">torch</button> in one hand." }
      ] },
      ...zwei({ art: "mc", id: "vermuten", tag: "Guess", titel: "Guess first" },
        { lead: "Use the description and tick the best answer. <span class=\"de\">Nutze die Bildbeschreibung und kreuze die beste Antwort an.</span>",
          fragen: [
            { q: "Where is the lighthouse?", o: ["On a high cliff by the sea", "In the middle of a big city", "On a small island in a lake", "Next to a school"], a: 0, e: "Der Leuchtturm steht auf einer hohen Klippe, darunter ist das Meer." },
            { q: "Which season is it?", o: ["Summer", "Winter", "Autumn", "Spring"], a: 0, e: "Die Kinder tragen T-Shirts und kurze Hosen, und die Abendsonne ist noch warm: Es ist Sommer." },
            { q: "Why do the two young people have torches?", o: ["Because it will soon be dark", "Because they want to catch fish", "Because the lighthouse has no windows", "Because it is very cold"], a: 0, e: "Die Sonne geht unter, bald ist es dunkel – dafür brauchen sie die Taschenlampen." }
          ],
          hilfen: ["Lies die drei Karten noch einmal genau. Die Antworten stehen fast wörtlich dort.", "Die Sonne geht unter. Was braucht man, wenn es dunkel wird?"] },
        { lead: "Use the description and tick the best answer.",
          fragen: [
            { q: "Where does the story take place?", o: ["On the coast, near an old lighthouse", "In a busy town centre", "In a forest far from the sea", "In a school building"], a: 0, e: "Der Leuchtturm steht auf einer Klippe über dem Meer – die Geschichte spielt an der Küste." },
            { q: "Which season is it, and how can you tell?", o: ["Summer – the young people wear T-shirts and shorts, and the evening is warm", "Winter – the young people carry torches", "Autumn – the sun is going down", "Spring – there is a light in the tower"], a: 0, e: "T-Shirts, kurze Hosen und die warme Abendsonne zeigen den Sommer. Taschenlampen und Sonnenuntergang beweisen keine Jahreszeit." },
            { q: "What is the reason for the torches?", o: ["It will soon be dark on the cliff path", "The children want to read in the tower", "The light in the tower is broken", "They are afraid of the sea"], a: 0, e: "Die Sonne geht unter; auf dem Klippenpfad wird es bald dunkel." }
          ],
          hilfen: ["Look at all three cards. Which details tell you the season?"] }),
      { art: "merke", kopf: "WORDS FOR STORIES", html: "<p>A story has <b>characters</b> (the people), a <b>setting</b> (where and when) and a <b>problem</b>. A good story also has a <button class=\"term\" data-t=\"turning\">turning point</button>: the moment when everything changes.</p><p><b>Opinion words:</b> exciting ↔ boring · surprised · worried</p>" }
    ] },
    { kurz: "Part one", ober: "Listening", titel: "A light in the tower", teile: [
      { art: "text", html: "<p class=\"lead\">Listen to <b>part one</b>. Read the questions first. <span class=\"de\">Lies erst die Fragen, dann hör zu. Beim Hören musst du nicht jedes Wort verstehen.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Part one", hoertext: { R: "u2-story-1-r", M: "u2-story-1-m" },
        foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" },
        fragen: [
          ...zwei({ art: "mc", id: "hoer1-q", titel: "Part one: what happens?" },
            { lead: "Listen and tick the answers. <span class=\"de\">Hör zu und kreuze an.</span>",
              fragen: [
                { q: "What does Aunt Bethan say about the lighthouse?", o: ["It is closed, and nobody has been inside for years.", "It is open every day.", "It is her house.", "It is a new building."], a: 0, e: "Aunt Bethan sagt: „It's closed. Nobody has been inside for years.“" },
                { q: "When must Owen and Lily be back?", o: ["At half past nine", "At eight o'clock", "At half past ten", "At midnight"], a: 0, e: "Aunt Bethan sagt: „Be back at half past nine.“" }
              ],
              hilfen: ["Beim zweiten Hören achtest du nur auf die Uhrzeit.", "Es ist nicht „nine o'clock“: Aunt Bethan sagt „half past …“."] },
            { lead: "Listen and tick the answers.",
              fragen: [
                { q: "Why does Aunt Bethan say that the children must be careful?", o: ["It isn't easy to walk on the cliff in the dark.", "There are thieves on the path.", "The sea is very cold.", "The lighthouse is falling down."], a: 0, e: "Aunt Bethan sagt: „Have you ever walked on the cliff in the dark? It isn't easy.“" },
                { q: "What do Owen and Lily notice when they arrive?", o: ["A light in the tower and a clicking noise", "A boat on the sea and a loud song", "A fire on the beach and a barking dog", "A car and a policeman"], a: 0, e: "Zuerst sehen sie das Licht im Turm, dann hören sie „click, click, click“ und eine Leiter." }
              ],
              hilfen: ["Think about the second half of the text, after “Here we are at last”."] })
        ] },
      { art: "offen", id: "vorhersage", tag: "Predict", titel: "What is in the tower?",
        lead: "Lily thinks of thieves. What do <b>you</b> think? Write <b>one sentence</b>. <span class=\"de\">Was meinst du: Wer oder was ist im Turm? Schreibe einen Satz. Rate ruhig – gleich hörst du, wie es weitergeht.</span>",
        fragen: [{ q: "I think there is … in the lighthouse, because …", m: "I think there are some people in the lighthouse, because there is a light and a noise.", k: ["think|guess|maybe|perhaps|probably", "people|man|men|woman|thief|thieves|someone|somebody|animal|ghost|police|light|lamp"], min: 1 }],
        hilfen: ["Beginne mit „I think …“ oder „Maybe …“.", "Du kannst auch einen Grund nennen: „… because there is a light.“"],
        tipp: "Start like this: I think … / Maybe … / Perhaps … Then give a reason with because." }
    ] },
    { kurz: "Part two", ober: "Listening", titel: "The turning point", teile: [
      { art: "text", html: "<p class=\"lead\">Now listen to <b>part two</b>. Is your idea right? <span class=\"de\">Jetzt kommt Teil zwei. Hattest du recht? Danach entscheidest du: richtig oder falsch?</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Part two",  hoertext: { R: "u2-story-2-r", M: "u2-story-2-m" },
        fragen: [
          ...zwei({ art: "tf", id: "richtigfalsch", titel: "True or false?" },
            { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
              aussagen: [["Rhian is a thief.", false], ["Rhian works for a nature group.", true], ["The clicking comes from a little machine.", true], ["White light is good for bats.", false]],
              hilfen: ["Hör noch einmal auf das, was Rhian sagt – nicht auf das, was Lily vermutet.", "Eine Aussage ist falsch, weil Rhian genau das Gegenteil sagt."] },
            { lead: "Decide: true or false?",
              aussagen: [["Owen wants to call Aunt Bethan before they go in.", false], ["Rhian and her team count bats.", true], ["The clicking comes from a machine that helps people to hear the bats.", true], ["Rhian says that bright white light is good for bats.", false]],
              hilfen: ["Who says “We could call Aunt Bethan”, and what does Owen answer?"] })
        ] },
      { art: "merke", kopf: "STORY SKILLS · THE TURNING POINT", html: "<p>Every good story has a <button class=\"term\" data-t=\"turning\">turning point</button>. Before it, the characters believe one thing. After it, they know the truth, and the story goes in a new direction.</p>" },
      ...zwei({ art: "mc", id: "wendepunkt", tag: "Turning point", titel: "Find the turning point" },
        { lead: "Tick the answers. <span class=\"de\">Welcher Moment ändert alles – und warum?</span>",
          fragen: [
            { q: "What is the turning point of the story?", o: ["Owen and Lily learn that the people in the lighthouse are not thieves.", "Aunt Bethan says that the lighthouse is closed.", "Lily sees the light in the tower.", "The children walk home."], a: 0, e: "Als Rhian erklärt, dass sie Fledermäuse zählt, ändert sich alles: Die „Diebe“ sind keine Diebe." },
            { q: "Why is it the turning point?", o: ["Before it the children are afraid, after it they are happy and want to help.", "Before it it is day, after it it is night.", "Before it the children are at school, after it they are at home.", "Before it Rhian is sad, after it she is angry."], a: 0, e: "Vorher haben die Kinder Angst und denken an Diebe, danach freuen sie sich und helfen mit." },
            { q: "Which sentence shows the turning point?", o: ["“Thieves? No, no! I'm Rhian. I work for the nature group.”", "“Here we are at last.”", "“Maybe they are thieves!”", "“Hello, you two! Dinner is ready.”"], a: 0, e: "Mit diesem Satz klärt Rhian alles auf. „Maybe they are thieves!“ ist die Vermutung vor dem Wendepunkt." }
          ],
          hilfen: ["Wann denken Owen und Lily plötzlich etwas anderes als vorher?", "Vorher: Diebe? Nachher: Fledermäuse zählen. Wie fühlen sich die Kinder jeweils?"] },
        { lead: "Tick the answers.",
          fragen: [
            { q: "What is the turning point of the story?", o: ["The children find out that the people in the tower are not thieves but bat counters.", "Aunt Bethan lets the children go for a walk.", "The children see a light in the tower for the first time.", "Owen decides not to call Aunt Bethan."], a: 0, e: "Der Wendepunkt ist der Moment, in dem Rhian ihre Arbeit erklärt." },
            { q: "How does the turning point change the story?", o: ["The mystery becomes a happy ending, and the children can help.", "The children become more afraid.", "The story moves to a new place.", "The children have to leave the lighthouse."], a: 0, e: "Vorher: Geheimnis und Angst. Nachher: Aufklärung und gemeinsames Zählen." },
            { q: "Which sentence shows the turning point?", o: ["“Thieves? No, no! My name is Rhian. I work for the nature group.”", "“Look! Someone has opened the door!”", "“Perhaps they are thieves. What if they are stealing something?”", "“Have you ever walked on the cliff in the dark?”"], a: 0, e: "Mit diesem Satz klärt Rhian alles auf. Die Vermutung „Perhaps they are thieves“ steht davor." }
          ],
          hilfen: ["Compare how Owen and Lily feel at the open door and at the end."] }),
      { art: "offen", id: "wende-erklaeren", m7: true, tag: "Your words", titel: "Explain the turning point",
        lead: "Write <b>two sentences</b>: How do Owen and Lily feel <b>before</b> and <b>after</b> the turning point? Say why. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Before the turning point the children feel …, after it they feel … Why?", m: "Before the turning point the children are worried because they think the people are thieves. After it they are happy and excited, because they can help to count bats.", k: ["worried|afraid|scared|nervous|frightened", "happy|excited|amazed|relieved|surprised|glad", "thieves|bats|because|help|count"], min: 2 }],
        hilfen: ["Vorher: „worried“ oder „afraid“. Nachher: „excited“ oder „happy“.", "Mit „because“ gibst du den Grund an."],
        tipp: "Use: Before …, the children are … because … After …, they are … because …" },
      ...zwei({ art: "ordnen", id: "bildfolge", tag: "Order the events", titel: "Put the story in order" },
        { lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
          schritte: ["Owen and Lily ask Aunt Bethan about a walk to the lighthouse.", "Aunt Bethan says they must be back at half past nine.", "The children see a light in the tower and hear a noise.", "They meet Rhian, who says she counts bats.", "Owen and Lily help to count the bats."],
          hilfen: ["Das erste Bild spielt in Aunt Bethans Haus, das letzte am Turm.", "Erst sehen sie das Licht, dann treffen sie Rhian."] },
        { lead: "Put the events in the right order.",
          schritte: ["Owen and Lily ask Aunt Bethan about a walk to the lighthouse.", "Aunt Bethan says they must be back at half past nine.", "The children see a light in the tower and hear a noise.", "They meet Rhian, who says she counts bats.", "Owen and Lily help to count the bats."],
          hilfen: ["Think about who the children meet last."] })
    ] },
    { kurz: "Feelings and opinion", ober: "Speaking and writing", titel: "What do you think?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>dusk at the lighthouse</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-story-bats.jpg\" width=\"1280\" height=\"853\" alt=\"Many small bats fly out of the lighthouse tower in the evening sky; two teenagers look up and count.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see in the sky? How do the two feel? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">How do the characters feel? And what do <b>you</b> think about the story? <span class=\"de\">Wie fühlen sich die Figuren? Und was denkst du über die Geschichte?</span></p>" },
      ...zwei({ art: "paare", id: "gefuehle", tag: "Feelings", titel: "Who feels what?" },
        { lead: "Find the pairs. <span class=\"de\">Wer fühlt was?</span>",
          paare: [["Lily at the open door", "worried"], ["Lily when she hears about the bats", "surprised"], ["Owen at the end of the story", "excited"]],
          hilfen: ["Lily sagt an der offenen Tür: „I'm a bit worried.“", "Lily fragt: „Bats? In a lighthouse?“ – sie hat das nicht erwartet."] },
        { lead: "Find the pairs.",
          paare: [["Lily: “I'm a bit worried.”", "She is nervous."], ["Lily: “Bats? In a lighthouse?”", "She is surprised."], ["Owen: “This is really exciting!”", "He is thrilled."]],
          hilfen: ["Which feeling fits the words? Think of the situation."] }),
      { art: "merke", nur: "R", kopf: "SAY WHAT YOU THINK", html: "<p>I think the story is <b>exciting / boring</b> <b>because</b> …<br>I thought … <br>I was <b>surprised / worried</b> <b>when</b> …</p><p>Mit <i>because</i> gibst du den Grund an, mit <i>when</i> sagst du, in welchem Moment du so fühltest.</p>" },
      { art: "merke", nur: "M", kopf: "SAY WHAT YOU THINK", html: "<p>I think the story is <b>exciting / boring</b> <b>because</b> …<br>I thought that … but …<br>I was <b>surprised / worried</b> <b>when</b> …</p>" },
      { art: "luecke", id: "meinung-luecke", nur: "R", tag: "Gap text", titel: "My opinion", lead: "Complete the sentences. <span class=\"de\">Ein Wort bleibt übrig.</span>",
        absaetze: [
          ["I was ", { g: "worried" }, " about Owen and Lily when they heard the noise in the dark tower."],
          ["I was ", { g: "surprised" }, " when I learned about the bats."],
          ["I like the story because it is ", { g: "exciting" }, "."]
        ], extra: ["boring"],
        hilfen: ["Beim Geräusch im dunklen Turm hat man eher Angst: worried.", "Bei etwas Neuem und Unerwartetem – den Fledermäusen – ist man überrascht: surprised."] },
      { art: "offen", id: "meinung", nur: "R", tag: "Your words", titel: "What do you think?", lead: "Write <b>one sentence</b> with <b>because</b>. <span class=\"de\">Schreibe einen Satz mit because: Was denkst du über die Geschichte?</span>",
        fragen: [{ q: "What do you think about the story? Use because.", m: "I think the story is exciting because there is a secret in the tower.", k: ["think|like|liked|thought|was|is|were", "because"], min: 2 }],
        hilfen: ["Beginne mit „I think the story is …“.", "Nach „because“ kommt der Grund: „… because there is a secret.“"],
        tipp: "I think the story is exciting / boring because … – you can also write: I was surprised when …" },
      { art: "offen", id: "meinung", nur: "M", tag: "Your words", titel: "What do you think?", lead: "Write <b>three sentences</b>: your opinion with <b>because</b>, a feeling with <b>when</b>, and what you thought before the turning point.",
        fragen: [{ q: "What do you think about the story? Use because, when and I thought …", m: "I think the story is exciting because there is a secret in the tower. I was surprised when Rhian said that she counts bats. I thought that the people were thieves, but I was wrong.", k: ["because", "i thought|i think|i was|i liked|i like", "surprised|worried|excited|exciting|boring|scared|happy|interesting|nervous"], min: 3 }],
        hilfen: ["Use the frames: I think … because … / I was … when … / I thought … but …"],
        tipp: "Three sentences: 1) I think the story is exciting/boring because … 2) I was surprised/worried when … 3) I thought … but …" }
    ] },
    { kurz: "Language", ober: "Kurz sichern", titel: "Tenses in the story", teile: [
      { art: "merke", nur: "R", kopf: "LOOK AT THE LANGUAGE", html: "<p>In the story you hear three kinds of sentences:</p><ul><li><b>going to</b> (Plan): <i>We're going to find out.</i></li><li><b>present perfect</b> (jetzt wichtig): <i>The sun <u>has gone</u> down.</i> – Signalwörter: <b>ever, never, already, yet, just</b></li><li><b>simple past</b> (wann es war): <i>The sea <u>was</u> cold.</i> – Signalwörter: <b>yesterday, last …, … ago</b></li></ul>" },
      { art: "merke", nur: "M", kopf: "LOOK AT THE LANGUAGE", html: "<p>The story uses three tenses:</p><ul><li><b>going to</b> for plans: <i>We're going to find out what is happening.</i></li><li><b>present perfect</b> for what matters now: <i>The sun <u>has</u> already <u>gone</u> down. · Have you ever walked there?</i> (ever, never, already, yet, just)</li><li><b>simple past</b> when you say when: <i>We <u>heard</u> the clicking last night.</i> (yesterday, last …, … ago)</li></ul>" },
      { art: "offen", id: "sprache-schreiben", m7: true, tag: "Your words", titel: "Sentences about the story",
        lead: "Write <b>two sentences</b> about the story: one with the <b>present perfect</b> and one with the <b>simple past</b>. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Write one present perfect sentence and one simple past sentence about the story.", m: "Owen and Lily have found a secret. They saw a light in the tower.", k: ["has|have|'ve|haven't|hasn't", "was|were|thought|saw|heard|went|said|found|came|asked|walked"], min: 2 }],
        hilfen: ["Present perfect: Someone has opened … / The children have found …", "Simple past: The children saw … / Rhian said …"],
        tipp: "Present perfect: have/has + 3rd form (opened, found). Simple past: saw, heard, went, said." },
      { art: "luecke", id: "grammatik-luecke", nur: "R", tag: "Gap text", titel: "Complete the sentences", lead: "Choose the right form. <span class=\"de\">Zwei Formen bleiben übrig. Achte auf die Signalwörter yesterday und never.</span>",
        foerder: { href: "unit2/extra/signal-words.html", text: "Extra: present perfect oder simple past?" },
        absaetze: [
          ["Yesterday Owen and Lily ", { g: "went" }, " to the beach."],
          ["Someone ", { g: "has opened" }, " the door – it is open now!"],
          ["They ", { g: "have never seen" }, " so many bats before."]
        ], extra: ["have go", "has seen"],
        hilfen: ["„Yesterday“ sagt, wann: simple past.", "Mit „never“ und „before“ benutzt du have/has + 3. Form.", "Die Tür ist jetzt offen – das Ergebnis zählt jetzt: present perfect."] },
      { art: "luecke", id: "grammatik-luecke", nur: "M", tag: "Gap text", titel: "Complete the sentences", lead: "Choose the right form. Two forms are left over.",
        foerder: { href: "unit2/extra/signal-words.html", text: "Extra: present perfect oder simple past?" },
        absaetze: [
          ["Two days ago the children ", { g: "saw" }, " a light in the tower."],
          ["Someone ", { g: "has opened" }, " the door, so the children can go in."],
          ["", { g: "Have" }, " you ever ", { g: "counted" }, " bats?"],
          ["Owen and Lily ", { g: "are going to" }, " help Rhian tonight."]
        ], extra: ["went", "did"],
        hilfen: ["“Two days ago” tells you when: simple past.", "A question with “ever” needs have/has + 3rd form.", "For a plan you use am/is/are + going to."] }
    ] }
  ],
  weiter: { text: "Well done! You can guess what a story is about, follow it, find the turning point and say what you think. Next: more practice for the test." }
});
