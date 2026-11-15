/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Story: The argument (Kürzel C15)
   (statt eines Films: eine Hörgeschichte in zwei Teilen – erst eine Szene beschreiben und vermuten, dann hören und die
   Vermutungen prüfen, richtig oder falsch, den Wendepunkt erkennen, die Ereignisse ordnen, Gefühle benennen und die eigene
   Meinung sagen und schreiben, zuletzt some, any und no in Sätzen der Geschichte)
   Buchprinzip (Film, nur Aufbau, nichts übernommen): Standbilder ansehen und vermuten, was passiert → ansehen und die
   Vermutungen prüfen, Aussagen mit zwei Möglichkeiten auswählen → Gefühle den Figuren zuordnen und sagen (angry, sorry …).
   Besser: eigene Geschichte, die man in zwei Teilen hört (Aufnahme mit drei Stimmen), sofortige Rückmeldung, Hilfen in Stufen,
   Wendepunkt in zwei Schritten (welcher Moment, warum), Gefühle in Sätzen mit because und when, ein Förder-Link bei
   some/any/no.
   Differenzierung: Hörtext R7 316 Wörter (zwei Teile mit 155 und 161 Wörtern), M7 459 Wörter (230 und 229 Wörter) mit
   Nebensätzen (because, that, until) und mehr Begründungen; R7 mit deutschen Hilfen, Lückentext zur Meinung und zwei Möglichkeiten
   bei some/any, M7 mit Fragen ohne deutsche Hilfe, einer Meinung in drei Sätzen und vier Möglichkeiten bei some/any/no.
   Plus (m7): Wendepunkt in eigenen Worten erklären und zwei eigene Sätze mit some und any oder no schreiben.
   LehrplanPLUS E7 1.2 Hörverstehen (Geschichte, Handlungsverlauf, Einzelheiten), E7 1.3 Sprechen (Vermutungen, Gefühle,
   Meinung mit Begründung), E7 2 (Gefühls-Adjektive, Wortfeld Streit und Entschuldigung), E7 3 (some, any, no; Ort vor Zeit).
   Texte: texte/u3/u3-story-1-r.js, u3-story-1-m.js, u3-story-2-r.js, u3-story-2-m.js. Alle Personen sind erfunden: die
   Geschwister Eoin (14) und Sinéad (12), ihre Mum, der Hund Bailey; eine kleine Stadt in Irland ohne Namen.
   Förder-Link: some/any/no → unit3/extra/some-any.html (der Link zu u3_x6 „einem Weg folgen“ beim Hören passte nicht
   zur Geschichte – entfernt nach dem Gegenlesen 14.11.2026).
   Wörter der Unit bis zum Film (angry, upset, proud, worried, sad, happy, excited, tired, awful, silly, special, during,
   sorry, should, secret, to share, to try, until, before, after, at, on, in) kommen bewusst vor; Ort vor Zeit („take Bailey
   to the park at ten o'clock“) und some/any/no („some photos“, „no idea“, „any questions“) im Dialog.
   Neue Wörter, erklärt im Glossar: argument, selfish, secret, lead, surprise, deal, to share.
   BILDER:
   1. Station „Look and guess“ (Sprechanlass/Vorentlastung): eine Küche an einem Samstagmorgen; ein Junge (14) und ein
      Mädchen (12) stehen sich am Tisch gegenüber, der Junge mit verschränkten Armen, das Mädchen hält ein Tablet an die Brust;
      an der Tür sitzt ein brauner Hund und hält die Leine im Maul.
   2. Station „Part two“ (Hörhilfe): ein Mädchen sitzt im Garten auf einer Bank, ein Junge setzt sich neben sie, auf ihren
      Knien liegt ein Tablet, auf dem Bildschirm sind Fotos von einer Fußballmannschaft zu sehen; ein nasser Hund liegt im Gras.
   3. Station „Feelings and opinion“ (Sprechanlass): Geschwister im Park, beide lachen, der Junge hält die Hundeleine, das
      Mädchen trägt das Tablet unter dem Arm; der Hund springt vor ihnen her. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
const FOERDER_SA = { href: "unit3/extra/some-any.html", text: "Extra: some oder any?" };
D7Kit.seite({
  id: "u3-story",
  titel: "Story: The argument",
  einleitung: "Eoin and Sinéad have an <b>argument</b>: Who walks the dog? Who can use the tablet? In this <b>story</b> you guess first, then you listen in two parts, find the <b>turning point</b> and say what you think. Du hörst eine Geschichte statt eines Films: vermuten, hören, prüfen, den Wendepunkt erkennen und deine Meinung sagen.",
  zeit: "etwa 40 Minuten",
  ziele: ["🔍 I guess what a story is about from a scene.", "🎧 I follow a story and say what is true and what is false.", "🔄 I find the turning point of a story.", "💬 I talk about feelings and give my opinion with because and when.", "🔤 I use some, any and no in sentences from the story."],
  thema: "Unit 3 Welcome to Ireland, Story: Hörgeschichte (vermuten, Wendepunkt, Gefühle, Meinung)",
  quiz: { profi: "Story pro" },
  glossar: {
    argument: ["argument", "Streit: Das ist ein lautes Gespräch, in dem zwei Menschen böse aufeinander sind. Man sagt: have an argument."],
    selfish: ["selfish", "egoistisch: So ist ein Mensch, der nur an sich denkt und nichts teilen will."],
    secret: ["secret", "Geheimnis: Das ist etwas, das andere Menschen nicht wissen dürfen."],
    dogLead: ["lead", "Leine: Daran führt man einen Hund beim Spaziergang."],
    surprise: ["surprise", "Überraschung: Das ist etwas Schönes, von dem man vorher nichts weiß."],
    deal: ["Deal.", "Abgemacht: Damit sagt man, dass man mit einem Vorschlag einverstanden ist."],
    share: ["to share", "teilen: Zwei Menschen benutzen etwas gemeinsam, zum Beispiel ein Tablet."],
    turning: ["turning point", "Wendepunkt: Das ist der Moment, in dem sich in einer Geschichte alles ändert."]
  },
  stationen: [
    { kurz: "Look and guess", ober: "Before you listen", titel: "What is the story about?", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-story-kueche.jpg\" width=\"1280\" height=\"853\" alt=\"A boy with crossed arms and a girl with her hand on a tablet stand at the kitchen table; a brown dog with a lead in its mouth sits by the door.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a family kitchen on Saturday morning</b>. <span class=\"de\">Lies die drei Karten. Sie beschreiben eine Szene aus der Geschichte.</span></p><p>Who are the people? What is the problem? How do they feel? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">The story is about <b>Eoin</b> (14) and his sister <b>Sinéad</b> (12). They live in a small town in Ireland with their mum and their dog, Bailey. <span class=\"de\">Eoin und Sinéad sind Geschwister und leben in einer kleinen Stadt in Irland. Lies die Szene und vermute: Was ist hier los?</span></p>" },
      { art: "karten", karten: [
        { ic: "🍳", titel: "The scene: the kitchen", text: "It is Saturday morning. A boy and a girl stand in the kitchen. On the table there is a tablet. Both of them look at it." },
        { ic: "🐕", titel: "The scene: the dog", text: "A brown dog sits by the door. In its mouth there is a <button class=\"term\" data-t=\"dogLead\">lead</button>. It wants to go out." },
        { ic: "😠", titel: "The scene: the two young people", text: "The boy has his arms crossed. The girl has her hand on the tablet. Nobody smiles." }
      ] },
      ...zwei({ art: "mc", id: "vermuten", tag: "Guess", titel: "Guess first" },
        { lead: "Use the description and tick the best answer. <span class=\"de\">Nutze die Karten und kreuze die beste Antwort an.</span>",
          fragen: [
            { q: "Where are the two young people?", o: ["In a kitchen", "In a school", "On a bus", "At a football match"], a: 0, e: "Die erste Karte sagt: Sie stehen in der Küche." },
            { q: "Why does the dog have a lead in its mouth?", o: ["It wants to go for a walk", "It wants to eat", "It is tired", "It wants to play with the tablet"], a: 0, e: "Der Hund sitzt an der Tür und möchte hinaus – er will Gassi gehen." },
            { q: "How do the two young people feel?", o: ["Angry", "Happy", "Tired", "Excited"], a: 0, e: "Der Junge hat die Arme verschränkt und niemand lächelt: Beide sind wütend." }
          ],
          hilfen: ["Lies die drei Karten noch einmal genau. Die Antworten stehen fast wörtlich dort.", "Niemand lächelt, und der Junge verschränkt die Arme. Welches Gefühl passt?"] },
        { lead: "Use the description and tick the best answer.",
          fragen: [
            { q: "Where does the story begin?", o: ["In a family kitchen, at home", "In a classroom", "On a football pitch", "In the park"], a: 0, e: "Die Szene spielt in der Küche; auf dem Tisch liegt ein Tablet." },
            { q: "What does the dog want?", o: ["To go out for a walk", "To get some food", "To play with the tablet", "To sleep in the kitchen"], a: 0, e: "Der Hund sitzt mit der Leine im Maul an der Tür – er will hinaus." },
            { q: "What might the problem be?", o: ["The two argue about the tablet and the dog", "They are very happy about a present", "They are lost in a town", "They are late for school"], a: 0, e: "Alle Zeichen deuten auf einen Streit hin: verschränkte Arme, ein Tablet auf dem Tisch, ein Hund, der hinaus will." }
          ],
          hilfen: ["Look at the boy's arms and at the faces. Is it a happy scene?"] }),
      { art: "merke", kopf: "WORDS FOR STORIES", html: "<p>A story has <b>characters</b> (the people), a <b>setting</b> (where and when) and a <b>problem</b>. Here the problem is an <button class=\"term\" data-t=\"argument\">argument</button>. A good story also has a <button class=\"term\" data-t=\"turning\">turning point</button>: the moment when everything changes.</p><p><b>Feelings:</b> angry · upset · sorry · proud · worried · happy</p>" }
    ] },
    { kurz: "Part one", ober: "Listening", titel: "The argument", teile: [
      { art: "text", html: "<p class=\"lead\">Listen to <b>part one</b>. Read the questions first. <span class=\"de\">Lies erst die Fragen, dann hör zu. Beim Hören musst du nicht jedes Wort verstehen.</span></p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Part one", hoertext: { R: "u3-story-1-r", M: "u3-story-1-m" },
        fragen: [
          ...zwei({ art: "mc", id: "hoer1-q", titel: "Part one: what happens?" },
            { lead: "Listen and tick the answers. <span class=\"de\">Hör zu und kreuze an.</span>",
              fragen: [
                { q: "Who has to take Bailey to the park at the end?", o: ["Eoin", "Sinéad", "Mum", "Nobody"], a: 0, e: "Mum sagt: „Eoin, please take Bailey to the park at ten o'clock.“" },
                { q: "Why does Eoin want the tablet?", o: ["To watch a football video", "To play a game with his friends", "To call his friend", "To read a book"], a: 0, e: "Eoin sagt: „There is a football video, and I want to watch it before lunch.“" }
              ],
              hilfen: ["Beim zweiten Hören achtest du auf die Stelle am Ende, wo Mum spricht.", "Eoin sagt zuerst, es sei Sinéads Tag – aber Mum entscheidet am Ende."] },
            { lead: "Listen and tick the answers.",
              fragen: [
                { q: "Why is Eoin so angry with Sinéad?", o: ["She has the tablet every evening and has no time for him.", "She walked Bailey for only ten minutes.", "She ate the pasta from the fridge.", "She told Mum a secret about him."], a: 0, e: "Eoin sagt: „You had it every evening this week, and when I ask you something, you have no time for me.“" },
                { q: "What does Mum decide?", o: ["Eoin must take Bailey to the park at ten o'clock, and they will talk in the evening.", "Sinéad must walk Bailey, and Eoin can have the tablet.", "Both children must stay at home until the evening.", "Eoin and Sinéad must walk Bailey together."], a: 0, e: "Mum sagt: „Eoin, please take Bailey to the park at ten o'clock. We'll talk this evening.“" }
              ],
              hilfen: ["Think about the end of the text, when Mum says “Stop it, both of you!”."] })
        ] },
      { art: "offen", id: "vorhersage", tag: "Predict", titel: "What is the secret?",
        lead: "Sinéad has a <button class=\"term\" data-t=\"secret\">secret</button>. What do <b>you</b> think it is? Write <b>one sentence</b>. <span class=\"de\">Was meinst du: Was ist Sinéads Geheimnis? Schreibe einen Satz. Rate ruhig – gleich hörst du, wie es weitergeht.</span>",
        fragen: [{ q: "I think Sinéad has a secret. Maybe she …, because …", m: "I think Sinéad is making a present for her brother, because she has the tablet every evening.", k: ["think|guess|maybe|perhaps|probably", "present|gift|surprise|film|video|photo|game|party|birthday|message|friend|homework|school"], min: 1 }],
        hilfen: ["Beginne mit „I think …“ oder „Maybe …“.", "Du kannst auch einen Grund nennen: „… because she uses the tablet every evening.“"],
        tipp: "Start like this: I think … / Maybe … / Perhaps … Then give a reason with because." }
    ] },
    { kurz: "Part two", ober: "Listening", titel: "The turning point", teile: [
      { art: "text", html: "<p class=\"lead\">Now listen to <b>part two</b>. Is your idea right? <span class=\"de\">Jetzt kommt Teil zwei. Hattest du recht? Danach entscheidest du: richtig oder falsch?</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Part two", hoertext: { R: "u3-story-2-r", M: "u3-story-2-m" },
        fragen: [
          ...zwei({ art: "tf", id: "richtigfalsch", titel: "True or false?" },
            { lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
              aussagen: [["Bailey is tired and wet.", true], ["Sinéad is in the kitchen.", false], ["The film is a surprise for Eoin's birthday.", true], ["Eoin says sorry, but Sinéad says nothing.", false]],
              hilfen: ["Hör noch einmal auf den Anfang: Wo ist Sinéad, und wie geht es Bailey?", "Eine Aussage ist falsch, weil beide sich entschuldigen."] },
            { lead: "Decide: true or false?",
              aussagen: [["Bailey jumped into the river.", true], ["Eoin was angry because he thought that Sinéad didn't care about him.", true], ["Sinéad made the film in the mornings.", false], ["Sinéad wants Eoin to watch the film on Sunday morning.", false]],
              hilfen: ["When did Sinéad make the film? Listen for “in the evenings”."] })
        ] },
      { art: "merke", kopf: "STORY SKILLS · THE TURNING POINT", html: "<p>Every good story has a <button class=\"term\" data-t=\"turning\">turning point</button>. Before it, the characters believe one thing. After it, they know the truth, and the story goes in a new direction.</p>" },
      ...zwei({ art: "mc", id: "wendepunkt", tag: "Turning point", titel: "Find the turning point" },
        { lead: "Tick the answers. <span class=\"de\">Welcher Moment ändert alles – und warum?</span>",
          fragen: [
            { q: "What is the turning point of the story?", o: ["Eoin sees the birthday film that Sinéad has made.", "Mum says that Eoin must take Bailey out.", "Eoin goes to the park with Bailey.", "Sinéad says that she is angry."], a: 0, e: "Als Eoin den Film sieht, begreift er, warum Sinéad das Tablet brauchte – ab da ändert sich alles." },
            { q: "Why is it the turning point?", o: ["Before it the two argue, after it they say sorry and make a plan.", "Before it it is morning, after it it is evening.", "Before it Bailey is dry, after it he is wet.", "Before it Mum is at home, after it she is at work."], a: 0, e: "Vorher streiten Eoin und Sinéad, danach entschuldigen sie sich und planen gemeinsam." }
          ],
          hilfen: ["Wann denkt Eoin plötzlich etwas anderes über Sinéad als vorher?", "Vorher: Streit. Nachher: Entschuldigung. Was ist der Moment dazwischen?"] },
        { lead: "Tick the answers.",
          fragen: [
            { q: "What is the turning point of the story?", o: ["Eoin finds out that Sinéad has made a film for his birthday.", "Eoin decides to walk Bailey alone.", "Mum tells the two children to stop.", "Sinéad refuses to speak to her brother."], a: 0, e: "Der Wendepunkt ist der Moment, in dem Eoin das Geheimnis erfährt." },
            { q: "Which sentence shows the turning point?", o: ["“Is that me? It's a film!”", "“It's a secret. I can't tell you, and I won't.”", "“Stop it, both of you!”", "“Go away.”"], a: 0, e: "Mit „Is that me? It's a film!“ begreift Eoin das Geheimnis. Die anderen Sätze stehen vor dem Wendepunkt." }
          ],
          hilfen: ["Compare how Eoin speaks at the beginning and at the end."] }),
      { art: "offen", id: "wende-erklaeren", m7: true, tag: "Your words", titel: "Explain the turning point",
        lead: "Write <b>two sentences</b>: How do Eoin and Sinéad feel <b>before</b> and <b>after</b> the turning point? Say why. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Before the turning point the two feel …, after it they feel … Why?", m: "Before the turning point Eoin is angry and Sinéad is upset, because they have an argument. After it they are happy and sorry, because Eoin sees the film.", k: ["angry|upset|cross|annoyed|sad", "sorry|happy|proud|glad|surprised|excited", "argument|film|surprise|secret|because|birthday"], min: 2 }],
        hilfen: ["Vorher: „angry“ oder „upset“. Nachher: „sorry“ oder „happy“.", "Mit „because“ gibst du den Grund an."],
        tipp: "Use: Before …, Eoin is … and Sinéad is … because … After …, they are … because …" },
      ...zwei({ art: "ordnen", id: "bildfolge", tag: "Order the events", titel: "Put the story in order" },
        { lead: "Put the events in the right order. <span class=\"de\">Bringe die Ereignisse in die richtige Reihenfolge.</span>",
          schritte: ["Mum goes to work and asks the children to be nice.", "Eoin and Sinéad argue about Bailey and the tablet.", "Eoin calls Sinéad selfish, and she says that he is horrible.", "Sinéad shows Eoin the film for his birthday.", "The two say sorry and make a plan."],
          hilfen: ["Das erste Bild spielt in der Küche, das letzte im Garten.", "Erst der Streit, dann der Film, dann die Entschuldigung."] },
        { lead: "Put the events in the right order.",
          schritte: ["Mum goes to work and asks the children to be nice.", "Eoin and Sinéad argue about Bailey and the tablet.", "Eoin calls Sinéad selfish, and she says that he is horrible.", "Sinéad shows Eoin the film for his birthday.", "The two say sorry and make a plan."],
          hilfen: ["Think about what happens after the turning point."] })
    ] },
    { kurz: "Feelings and opinion", ober: "Speaking and writing", titel: "What do you think?", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-story-park.jpg\" width=\"1280\" height=\"853\" alt=\"A brother and a sister walk laughing through a park; he holds the dog lead, she carries a tablet; the dog runs ahead.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the last scene: <b>the park, in the afternoon</b>. <span class=\"de\">So endet die Geschichte.</span></p><p>Eoin holds the lead, Sinéad carries the tablet, and Bailey runs in front of them. Both are laughing. How do they feel now? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">How do the characters feel? And what do <b>you</b> think about the story? <span class=\"de\">Wie fühlen sich die Figuren? Und was denkst du über die Geschichte?</span></p>" },
      ...zwei({ art: "paare", id: "gefuehle", tag: "Feelings", titel: "Who feels what?" },
        { lead: "Find the pairs. <span class=\"de\">Wer fühlt was?</span>",
          paare: [["Eoin: “You are selfish, Sinéad!”", "angry"], ["Eoin: “Is that me? It's a film!”", "surprised"], ["Sinéad: “I'm sorry too.”", "sorry"]],
          hilfen: ["Eoin sagt: „You are selfish!“ – er ist sauer.", "Eoin sieht plötzlich sich selbst im Film. Damit hat er nicht gerechnet.", "Sinéad entschuldigt sich auch: „I'm sorry too.“"] },
        { lead: "Find the pairs.",
          paare: [["Eoin: “You are selfish, Sinéad!”", "He is angry."], ["Eoin: “Is that me? It's a film!”", "He is surprised."], ["Sinéad: “I'm sorry too. I said you were horrible.”", "She is sorry."], ["Eoin: “I'm proud of you.”", "He is proud."]],
          hilfen: ["Which feeling fits the words? Think of the situation."] }),
      { art: "merke", nur: "R", kopf: "SAY WHAT YOU THINK", html: "<p>I think Eoin / Sinéad was <b>right / wrong</b> <b>because</b> …<br>I was <b>surprised / happy</b> <b>when</b> …<br>I think the story is <b>good</b> because …</p><p>Mit <i>because</i> gibst du den Grund an, mit <i>when</i> sagst du, in welchem Moment du so fühltest.</p>" },
      { art: "merke", nur: "M", kopf: "SAY WHAT YOU THINK", html: "<p>I think Eoin / Sinéad was <b>right / wrong</b> <b>because</b> …<br>I was <b>surprised / happy</b> <b>when</b> …<br>I think they <b>should</b> … next time.</p>" },
      { art: "luecke", id: "meinung-luecke", nur: "R", tag: "Gap text", titel: "My opinion", lead: "Complete the sentences. <span class=\"de\">Ein Wort bleibt übrig.</span>",
        absaetze: [
          ["I think Eoin was ", { g: "wrong" }, " when he called his sister selfish."],
          ["I was ", { g: "surprised" }, " when Sinéad showed the film."],
          ["A film from the whole team is a very ", { g: "special" }, " birthday present."]
        ], extra: ["surprise"],
        hilfen: ["Eoin hat Sinéad zu Unrecht egoistisch genannt: wrong.", "Bei etwas Neuem und Unerwartetem ist man überrascht: surprised."] },
      { art: "offen", id: "meinung", nur: "R", tag: "Your words", titel: "What do you think?", lead: "Write <b>one sentence</b> with <b>because</b>. <span class=\"de\">Schreibe einen Satz mit because: Wer hatte im Streit recht, Eoin oder Sinéad?</span>",
        fragen: [{ q: "Who was right in the argument, Eoin or Sinéad? Use because.", m: "I think Sinéad was right because she only wanted to make a nice surprise.", k: ["think|was|were|is|both|right|wrong", "because"], min: 2 }],
        hilfen: ["Beginne mit „I think …“.", "Nach „because“ kommt der Grund: „… because Eoin was selfish.“"],
        tipp: "I think Eoin / Sinéad was right / wrong because …" },
      { art: "offen", id: "meinung", nur: "M", tag: "Your words", titel: "What do you think?", lead: "Write <b>three sentences</b>: your opinion with <b>because</b>, a feeling with <b>when</b>, and a piece of advice with <b>should</b>.",
        fragen: [{ q: "What do you think about the argument? Use because, when and should.", m: "I think Eoin was wrong because he didn't ask Sinéad about her secret. I was surprised when Sinéad showed the film. They should talk to each other before they get angry.", k: ["because", "i was|i felt|i am|i'm|when", "should|can|could|why don't|try|talk|share"], min: 3 }],
        hilfen: ["Use the frames: I think … because … / I was … when … / They should …"],
        tipp: "Three sentences: 1) I think Eoin / Sinéad was right / wrong because … 2) I was surprised / happy when … 3) They should …" }
    ] },
    { kurz: "Language", ober: "Kurz sichern", titel: "Some, any or no?", teile: [
      { art: "merke", nur: "R", kopf: "LOOK AT THE LANGUAGE", html: "<p>In the story you hear <b>some</b>, <b>any</b> and <b>no</b>. The rules:</p><ul><li><b>some</b> in positive sentences: <i>There are <u>some</u> apples on the table.</i></li><li><b>any</b> in negative sentences and questions: <i>We haven't got <u>any</u> milk. · Are there <u>any</u> biscuits?</i></li><li><b>no</b> = not any: <i>We have <u>no</u> bread.</i></li></ul><p>Und noch etwas: <b>Ort vor Zeit</b>: <i>Eoin takes Bailey <u>to the park</u> <u>at ten o'clock</u>.</i></p>" },
      { art: "merke", nur: "M", kopf: "LOOK AT THE LANGUAGE", html: "<p>The story uses <b>some</b>, <b>any</b> and <b>no</b>. The rules:</p><ul><li><b>some</b> in positive sentences: <i>There are <u>some</u> apples on the table.</i></li><li><b>any</b> in negative sentences and questions: <i>We haven't got <u>any</u> milk. · Are there <u>any</u> biscuits?</i></li><li><b>no</b> = not any, with a positive verb: <i>We have <u>no</u> bread.</i></li></ul><p>Place comes before time: <i>Eoin takes Bailey <u>to the park</u> <u>at ten o'clock</u>.</i></p>" },
      ...zwei({ art: "mc", id: "some-any", tag: "Choose", titel: "Some, any or no?", foerder: FOERDER_SA },
        { lead: "Tick the correct word. <span class=\"de\">Zwei Wörter zur Wahl. Denke an die Regel: bejahter Satz oder verneinter Satz oder Frage?</span>",
          fragen: [
            { q: "At the party there are ____ friends from the team.", o: ["some", "any"], a: 0, e: "Ein bejahter Satz: some." },
            { q: "Eoin hasn't got ____ idea about the film.", o: ["any", "some"], a: 0, e: "Verneinter Satz mit hasn't: any." },
            { q: "Has Sinéad got ____ more photos?", o: ["any", "some"], a: 0, e: "Eine Frage: any." },
            { q: "Mum says: “Would you like ____ pasta?”", o: ["some", "any"], a: 0, e: "In einem Angebot (Would you like …?) steht some." }
          ],
          hilfen: ["Bejahter Satz: some. Verneinter Satz oder Frage: any.", "Bei „Would you like …?“ bietest du etwas an: some."] },
        { lead: "Tick the correct word.",
          fragen: [
            { q: "At the party there are ____ friends from the team.", o: ["some", "any", "no", "none"], a: 0, e: "Ein bejahter Satz: some." },
            { q: "Eoin has ____ idea about the surprise. He doesn't know anything.", o: ["no", "any", "some", "none"], a: 0, e: "Bejahtes Verb, aber „kein“: no (= not any)." },
            { q: "Have you got ____ questions about the film?", o: ["any", "some", "no", "nobody"], a: 0, e: "Eine Frage: any." },
            { q: "Sinéad asks: “Would you like ____ cake?”", o: ["some", "any", "no", "nothing"], a: 0, e: "Ein Angebot: some." }
          ],
          hilfen: ["Look at the verb: positive or negative? Is it a question or an offer?"] }),
      { art: "offen", id: "sprache-schreiben", m7: true, tag: "Your words", titel: "Sentences about the story",
        lead: "Write <b>two sentences</b> about the story or about your own home: one with <b>some</b> and one with <b>any</b> or <b>no</b>. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        fragen: [{ q: "Write one sentence with some and one with any or no.", m: "There are some photos of the team in the film. Eoin hasn't got any idea about the surprise.", k: ["some", "any|no"], min: 2 }],
        hilfen: ["Zum Beispiel: There are some … in the film.", "Zum Beispiel: Eoin has no idea. / Eoin hasn't got any idea."],
        tipp: "some = positive sentence · any = negative sentence or question · no = not any." }
    ] }
  ],
  weiter: { text: "Well done! You can guess what a story is about, follow it, find the turning point and say what you think. Next: more practice for the test." }
});
