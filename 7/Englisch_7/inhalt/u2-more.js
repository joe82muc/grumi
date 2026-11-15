/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · More about: The Highland Games
   (einen Sachtext in Abschnitten lesen – hier das Tagebuch einer Austauschschülerin –, Überschriften den Abschnitten zuordnen,
   Einzelheiten und Textstellen finden, Worterklärungen, drei Dinge nennen, mit einem Partner über Fragen sprechen, mit einem
   Fest in Bayern vergleichen, present perfect und simple past im Tagebuch)
   Buchprinzip (BUCH-UNIT2, Abschnitt „More about“): Sachtext in sechs Abschnitten mit Zwischenüberschriften → mit einem Partner
   über sechs Fragen sprechen (Warum/Wie, drei Dinge nennen, Was ist besonders, Wer darf teilnehmen …) → Kasten mit
   Worterklärungen. Im Buch nur diese eine Aufgabe. Hier besser: Lesestrategie (Überschriften, erst überfliegen), Überschriften
   zuordnen (eine zu viel), Sofort-Rückmeldung bei jeder Frage, Textstellen finden, Worterklärungen als Zuordnung, Sprechen mit
   Satzanfängen (R7 sofort sichtbar, M7 als Tipp) und KI-Hinweis, Vergleich mit Bayern (M7), Station „Language“.
   Grammatik: keine neue; present perfect (I have never seen …, I have just eaten …) und simple past im Tagebuch (Language, G6/G1 im
   Kontext). Wortschatz „More about“ (heavy events, caber toss, stone put, hammer throwing, to lift, rarely, way …).
   LehrplanPLUS E7 1.1 Leseverstehen (Abschnitte, Überschriften, Einzelheiten), E7 2 Sprechen (Fragen beantworten, Meinung mit
   Begründung, vergleichen), E7 5 Landeskunde Schottland, E7 Grammatik present perfect / simple past.
   Texte: „A day at the Highland Games“ (texte/u2/u2-more-diary-r.js und -m.js; R7 260 Wörter, M7 373 Wörter, jeweils sechs
   Abschnitte „Part 1 – … Part 6 –“ ohne Überschriften). Lotta (13, aus Bayern), die Familie McLeod, ihr Sohn Hamish und das Dorf
   Glenmor sind erfunden; Sachaussagen sind allgemein und sicher (Highland Games vor allem im Sommer in vielen Orten Schottlands,
   pipe bands, Kilt aus Tartan, caber toss / hammer throwing / stone put, Tauziehen, Highland dancing). Keine Zahlen, Rekorde
   oder Entstehungsgeschichte.
   Förder-Links: present perfect oder simple past im Tagebuch → unit2/extra/signal-words.html.
   Sprechen: offen (Stichwortprüfung, KI gibt einen Hinweis). m7: ein Vergleich mit einem Fest in Bayern; für 7R freiwillig.
   // BILDER:
   // 1. Station 1 (Vorentlastung, Sprechanlass): Festwiese bei Glenmor an einem Sommertag – Zelte, Fahnen, eine Dudelsack-Band
   //    in Kilts zieht über die Wiese, im Hintergrund grüne Hügel.
   // 2. Station 2 (Part 2): ein kräftiger Mann im Kilt hält einen langen Baumstamm (caber) senkrecht und läuft los, am Rand
   //    schauen Zuschauer, Kampfrichter mit Klemmbrett – ohne lesbare Schrift.
   // 3. Station 3 (Sprechen): Highland dancing auf einer kleinen Bühne – ein Mädchen in Tracht springt, ein Dudelsackspieler
   //    steht daneben, drei Kampfrichter am Tisch. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist
  const D = s => ` <span class="de">${s}</span>`;

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

  const SIGNAL = { href: "unit2/extra/signal-words.html", text: "Extra: present perfect oder simple past?" };

  D7Kit.seite({
    id: "u2-more",
    titel: "More about: The Highland Games",
    einleitung: "Pipe bands, kilts, a heavy log and a rope: Lotta, an exchange student from Bavaria, spends a day at the Highland Games in Scotland and writes about it in her diary. You find the right headings, look for details, talk about the Games – and use the present perfect and the simple past.",
    zeit: "etwa 40 Minuten",
    ziele: ["📖 I find the right heading for each part of a text.", "🔎 I find details and the lines that show them.", "🗣️ I talk about an event and give a reason.", "✅ I use the present perfect and the simple past in a diary."],
    thema: "Unit 2 Fun in Wales and Scotland: More about (Highland Games)",
    quiz: { profi: "Games pro" },
    glossar: {
      caber: ["caber", "Ein caber ist ein langer, schwerer Baumstamm. Beim caber toss hebt ihn ein Wettkämpfer hoch und wirft ihn so, dass er sich in der Luft überschlägt."],
      tartan: ["tartan", "Tartan ist ein Stoff mit einem Muster aus farbigen Streifen und Linien. Der Kilt, der Schottenrock, besteht aus Tartan."],
      pipeband: ["pipe band", "Eine pipe band ist eine Gruppe von Musikern. Sie spielen Dudelsack und Trommeln."],
      judge: ["judge", "Ein judge ist ein Kampfrichter. Er sieht zu und entscheidet, wer am besten ist."],
      tug: ["tug of war", "Beim tug of war, dem Tauziehen, ziehen zwei Mannschaften an den Enden eines langen Seils."],
      heavy: ["heavy events", "Die heavy events sind die schweren Wettkämpfe bei den Highland Games, zum Beispiel caber toss, hammer throwing und stone put."],
      scone: ["scone", "Ein scone ist ein kleines, weiches Gebäck. Man isst es oft mit Marmelade."],
      shortbread: ["shortbread", "Shortbread ist ein süßer, trockener Butterkeks aus Schottland."],
      diary: ["diary", "Ein diary ist ein Tagebuch. Man schreibt darin auf, was man erlebt hat."]
    },
    haupttext: { R: "u2-more-diary-r", M: "u2-more-diary-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "Lotta goes to the Games", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a festival in Scotland</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-more-fest.jpg\" width=\"1280\" height=\"853\" alt=\"A festival field with tents and flags; a bagpipe band in kilts marches across the grass.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is going on here? Which music can you hear? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Lotta is 13 and comes from Bavaria. For two weeks she is staying with the McLeod family in Scotland. Last Saturday they all went to the <b>Highland Games</b> in <b>Glenmor</b>, a small village in the hills. In the evening Lotta wrote about the day in her <button class="term" data-t="diary">diary</button>.</p><p>The Highland Games are real: in many places in Scotland there are Games in summer. Glenmor, the McLeods and Lotta are invented. <span class="de">Das Dorf und die Personen sind erfunden – die Highland Games gibt es wirklich.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. ${D("Diese Wörter brauchst du im Text. Tippe auf ein englisches Wort und dann auf seine Bedeutung.")}`,
          paare: [["to lift", "heben"], ["heavy events", "Wettkämpfe mit schweren Gewichten"], ["caber toss", "Baumstammwerfen"], ["stone put", "Steinstoßen"], ["hammer throwing", "Hammerwerfen"], ["rarely", "selten"]],
          hilfen: ["Fang mit den Wörtern an, die du schon erkennst.", "Drei Wörter sind Sportarten mit schweren Dingen: ein Baumstamm, ein Stein und ein Hammer.", "Tippe zuerst rarely: Es heißt das Gegenteil von often."] },
        { art: "merke", kopf: "READING TIP", html: `<p>Many texts are divided into <b>parts</b>. Each part has its own <b>heading</b> – a few words that say what the part is about. To find the right heading, <b>skim</b> the part first: read only the first sentence and look for <b>key words</b> (names, things, places).</p><p>Don't stop at words you don't know. <span class="de">Überfliege einen Abschnitt zuerst. Such die wichtigen Wörter und bleib nicht an unbekannten Wörtern hängen.</span></p>` }
      ] },
      { kurz: "The diary", ober: "Reading", titel: "Read Lotta's diary", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a Highland sport</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-more-caber.jpg\" width=\"1280\" height=\"853\" alt=\"A strong man in a kilt holds a long tree trunk upright and starts to run; spectators watch.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the man doing? Why is it difficult? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Read Lotta's diary. It has six parts, but the headings are missing. <span class="de">Lies das Tagebuch. Es hat sechs Teile, die Überschriften fehlen noch.</span></p>` },
        { art: "lesetext", lesetext: { R: "u2-more-diary-r", M: "u2-more-diary-m" } },
        { art: "luecke", id: "ueberschriften", tag: "Headings", titel: "Which heading fits which part?",
          lead: `Choose the right heading for each part. One heading is extra. ${D("Eine Überschrift bleibt übrig. Tipp: Überfliege jeden Teil und such die wichtigen Wörter.")}`,
          absaetze: [
            ["Part 1: ", { g: "Pipes, kilts and tartan" }],
            ["Part 2: ", { g: "Three heavy events" }],
            ["Part 3: ", { g: "Two teams, one rope" }],
            ["Part 4: ", { g: "Light and fast feet" }],
            ["Part 5: ", { g: "Scones and a race" }],
            ["Part 6: ", { g: "A day to remember" }]
          ], extra: ["A walk in the hills"],
          hilfen: ["Lies von jedem Teil nur den ersten Satz und die wichtigsten Wörter.", "Teil 2 hat mit schweren Dingen zu tun, Teil 3 mit einem Seil, Teil 4 mit Tanz.", "Teil 6 ist der Schluss: Lotta sagt, wie der Tag war. Ein Heading passt zu keinem Teil."] },
        { art: "mc", id: "verstehen", tag: "Understanding", titel: "What does the diary say?",
          lead: `Tick the correct answer. ${D("Es gibt vier Möglichkeiten.")}`,
          fragen: [
            { q: "Who is Lotta?", o: ["An exchange student from Bavaria", "A girl who lives in Glenmor", "A teacher from Scotland", "Hamish's cousin"], a: 0,
              e: "Lotta comes from Bavaria and is staying with the McLeod family for two weeks." },
            { q: "What must the caber do in the caber toss?", o: ["It must turn over in the air.", "It must fly very far.", "It must stand on the grass.", "It must break in two."], a: 0,
              e: "The log must turn over in the air." },
            { q: "What did Hamish get in the children's race?", o: ["A small ribbon.", "A big cup.", "A new kilt.", "Some money."], a: 0,
              e: "In Part 5 Lotta writes that Hamish got a small ribbon." },
            { q: "What is the best title for the whole diary?", o: ["A day with sport, music and traditions", "A boring school day", "How to bake scones", "Lotta's trip to Wales"], a: 0,
              e: "Lotta writes about pipe bands, heavy events, a tug of war, dancing and a race – a day with sport, music and traditions." }
          ] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the diary say that?",
          lead: `Tap the lines in the diary. ${D("Tippe die Zeilen an, in denen die Antwort steht.")}`, lesetext: "u2-more-diary-r",
          fragen: [
            { q: "What is a kilt made of?", zeilen: [5, 5], e: "A kilt is made of tartan.", tipp: "Look for the word kilt in Part 1." },
            { q: "What could Lotta not do?", zeilen: [11, 11], e: "Lotta writes: \"I could not lift one stone!\"", tipp: "Look at Part 2." },
            { q: "What did Hamish say about the scone?", zeilen: [18, 19], e: "Hamish said: \"I have just eaten the best scone ever!\"", tipp: "Look at Part 5." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Evidence from the text", titel: "Where does the diary say that?",
          lead: `Tap the lines in the diary.`, lesetext: "u2-more-diary-m",
          fragen: [
            { q: "What is tartan?", zeilen: [5, 6], e: "Tartan is a cloth with a pattern of coloured lines.", tipp: "Look for the word tartan in Part 1." },
            { q: "What counts in the caber toss?", zeilen: [11, 12], e: "What counts is how well the log turns over – not how far it flies.", tipp: "Look at the middle of Part 2." },
            { q: "How did Hamish's school team do in the tug of war?", zeilen: [19, 20], e: "The team lost, but the boys and girls laughed a lot afterwards.", tipp: "Look at the end of Part 3." }
          ] },
        { art: "paare", id: "wortkasten", tag: "Word box", titel: "What do the words mean?",
          lead: `Match each word with its explanation. ${D("Verbinde das Wort mit der englischen Erklärung.")}`,
          paare: [["caber", "a long, heavy log"], ["tartan", "a cloth with a pattern of coloured lines"], ["pipe band", "a group of musicians who play the bagpipes"], ["ribbon", "a small piece of coloured cloth that you can win as a prize"], ["tug of war", "a game where two teams pull a rope"]],
          hilfen: ["Fang mit dem Wort an, das du aus dem Text kennst.", "Eine Erklärung beschreibt eine Gruppe von Musikern, eine andere einen kleinen Preis.", "Tippe 📖 Text und suche das Wort im Tagebuch."] }
      ] },
      { kurz: "Talk about it", ober: "Speaking", titel: "Talk about the Highland Games", teile: [
        { art: "text", html: `<p class="lead">Now you talk about the Games. First <b>say</b> your answers to a partner. Then <b>write</b> them down – the answers must be in your own words. <span class="de">Sprich erst mit einem Partner, dann schreib deine Antworten auf. Die KI gibt dir einen Hinweis.</span></p>` },
        { nur: "R", art: "merke", kopf: "USEFUL SENTENCES", html: `<p>I would like to watch … because …<br>You can see / hear / eat …<br>Strong men / Girls and boys / Children can …<br>At the Games there are pipe bands, kilts, heavy events and dancing.</p>` },
        { art: "offen", id: "drei-dinge", tag: "Name three things", titel: "What can you see, hear or do?",
          lead: `Name <b>three things</b> you can see, hear or do at the Highland Games. One sentence is enough. ${D("Nenne drei Dinge, die man bei den Highland Games sehen, hören oder tun kann.")}`,
          fragen: [{ q: "What can you see, hear or do at the Highland Games?", m: "You can listen to pipe bands, watch the caber toss and eat a scone.", k: ["pipe|bagpipe|band|kilt|tartan", "caber|stone|hammer|heavy|tug", "dancing|dance|race|scone|shortbread|soup|food|eat"], min: 3 }],
          tipp: "Start like this: You can listen to … , watch … and eat …" },
        { art: "offen", id: "sprechen", tag: "Speaking", titel: "Which event? What is special? Who can take part?",
          lead: `Answer the questions in English. Use the sentence starters. ${D("Antworte mit eigenen Worten und nenne bei der ersten Frage einen Grund.")}`,
          fragen: [
            { q: "Which event would you like to watch? Why?", m: "I would like to watch the caber toss because it looks exciting.", k: ["would like|'d like|want|prefer|like to", "because|as|since"], min: 2 },
            { q: "What is special about the Highland Games?", m: "You can hear pipe bands, see people in kilts and watch heavy events.", k: ["kilt|tartan|pipe|bagpipe|music|dancing|dance", "heavy|caber|stone|hammer|tug|sport|event|race"], min: 2 },
            { q: "Who can take part in the Highland Games?", m: "Strong men, girls and boys, school teams and children can take part.", k: ["men|athletes|strong|adults|people", "girls|boys|children|kids|teams|team|school|dancers"], min: 2 }
          ],
          tipp: "Start like this: I would like to watch … because … · Special is … · … can take part." },
        { art: "offen", id: "vergleich", m7: true, tag: "Challenge · Compare", titel: "Highland Games and a festival in Bavaria",
          lead: `Compare the Highland Games with a festival or a sports day in Bavaria. What is the same? What is different? Write two or three sentences.`,
          fragen: [{ q: "What is the same and what is different?", m: "At the Highland Games there are pipe bands and kilts, but at our village festival there is a brass band and people wear traditional clothes. In both places you can eat, listen to music and watch sport.", k: ["both|same|too|also|similar|like", "but|different|whereas|while|unlike|however", "band|music|food|sport|games|dance|wear|dress|clothes|eat"], min: 2 }],
          tipp: "Use: In both places … · At the Highland Games … but at … · The same is …" }
      ] },
      { kurz: "Language", ober: "Present perfect or simple past?", titel: "Lotta's diary: two tenses", teile: [
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<p>Look at these sentences about Lotta's day:<br><i>Lotta <u>has</u> never <u>had</u> a day like this before.</i> (up to now – <b>present perfect</b>)<br><i>The McLeods <u>took</u> her to the Games last Saturday.</i> (a time in the past – <b>simple past</b>)</p><ul><li><b>present perfect</b> (have/has + past participle): <b>never, just, already, yet, ever</b> – no time is named.</li><li><b>simple past</b>: <b>at ten o'clock, in the afternoon, last Saturday, yesterday</b> – you say <b>when</b>.</li></ul><p><span class="de">Wenn du sagst, wann etwas war (um zehn Uhr, am Nachmittag, gestern), nimmst du das simple past.</span></p>` },
        { art: "markieren", id: "perfekt", tag: "Find it", titel: "Which two words make the present perfect?", foerder: SIGNAL,
          finde: "have and the past participle", toleranz: 0,
          satz: "I [[have]] never [[seen]] so many kilts.",
          e: "have + seen = present perfect. Never stands between the two words.",
          hilfen: ["Das present perfect besteht aus zwei Wörtern.", "Das erste ist have oder has.", "Das zweite ist die 3. Form: seen."] },
        { art: "luecke", id: "tagebuch", tag: "Diary sentences", titel: "Complete Lotta's diary",
          lead: `Complete the sentences with the right form. Two forms are extra. ${D("Achte auf die Signalwörter. Setze die ganze Form ein.")}`,
          foerder: SIGNAL,
          absaetze: [
            ["Lotta ", { g: "arrived" }, " in Glenmor at ten o'clock."],
            ["She ", { g: "has never seen" }, " such a long, heavy log before."],
            ["At lunchtime Hamish ", { g: "ate" }, " a scone."],
            ["Look! Hamish ", { g: "has just finished" }, " the race."],
            ["Last summer the McLeods ", { g: "went" }, " to another village."],
            ["Lotta ", { g: "hasn't tried" }, " the tug of war yet."]
          ], extra: ["has ate", "didn't try"],
          hilfen: ["Lies das Signalwort: never, just, yet gehören zum present perfect.", "At ten o'clock, at lunchtime und last summer sagen, wann etwas war: simple past.", "Fang mit dem Satz an, den du sicher weißt."] },
        { art: "mc", id: "zeit-check", tag: "Check", titel: "Which sentence is correct?", foerder: SIGNAL,
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Which sentence is correct?", o: ["I have never seen a pipe band before.", "I have never saw a pipe band before.", "I have seen never a pipe band before.", "I has never seen a pipe band before."], a: 0,
              e: "Present perfect: have + past participle (seen). Never steht zwischen have und der 3. Form." },
            { q: "Last Saturday Lotta ____ the Highland dancing.", o: ["watched", "has watched", "have watched", "watches"], a: 0,
              e: "Last Saturday sagt, wann es war – also simple past: watched." }
          ] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? ${D("Richtig oder falsch?")}`,
          aussagen: [
            ["Highland Games take place mostly in winter.", false],
            ["In the stone put the athletes throw a heavy stone.", true],
            ["Hamish's school team won the tug of war.", false],
            ["Lotta has never seen so many kilts in one place.", true],
            ["Hamish came second in the children's race.", true],
            ["In Part 1 Lotta writes about pipe bands and kilts.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a text in parts, find details and talk about an event. Next: more about Unit 2." }
  });
})();
