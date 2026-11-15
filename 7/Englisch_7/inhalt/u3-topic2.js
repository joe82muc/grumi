/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Topic 2: Good advice (Kürzel C12)
   (zwei E-Mails lesen – ein Problem und die Antwort mit Ratschlägen –, Gefühle benennen und nach Gut/Schlecht sortieren, eine
   Meinung mit Begründung sagen, ein Gespräch über ein Problem und einen Rat hören, some/any/no und something/anybody/nobody im
   Kontext, Ratschläge formulieren, die Sätze einer Antwort-E-Mail ordnen – und am Ende selbst eine Antwort-E-Mail mit
   Ratschlägen schreiben)
   Buchprinzip (Topic 2, nur Aufbau, nichts übernommen): zwei E-Mails lesen → Inhaltsfragen (Gefällt es ihr? Probleme? Ratschläge?) ·
   Meinung mit Begründung (I think … because …) · Hören eines Gesprächs mit Multiple Choice · Gefühls-Adjektive nach positiv/negativ
   sortieren · Language detectives zu some/any/no und den Zusammensetzungen · Lückensätze some/any/no · Äußerungen und Reaktionen
   verbinden · Sätze einer Antwort-E-Mail ordnen (Anrede, Dank, Verständnis, Rat, Vorschlag, Gruß) · Task: E-Mail mit Ratschlägen.
   Diff corner: neue Wörter markiert, Substitutionstabelle für die Meinung, Anfangsbuchstaben bei den Gefühls-Adjektiven,
   some/any mit nur zwei Möglichkeiten. Besser: sofortige Rückmeldung, Hilfen in Stufen, Förder-Links, KI-Rückmeldung
   (Schreibtrainer) zur eigenen E-Mail.
   Differenzierung: Lesen – andere Fassung (R7 217 Wörter, M7 326 Wörter) mit eigenen Zeilenangaben; Hören – R7 wählt aus
   Antworten aus, M7 schreibt Notizen selbst; Gefühls-Lücken – R7 mit Anfangsbuchstaben; some/any – R7 zwei Möglichkeiten,
   M7 vier; Schreiben – R7 mindestens 40 Wörter mit Satzanfängen sofort, M7 mindestens 60 Wörter; Plus für M7 (m7): zwei offene
   Aufgaben (beste Idee mit Grund, no oder any erklären).
   LehrplanPLUS E7 1.1 Leseverstehen (E-Mails, Einzelheiten entnehmen und belegen), E7 1.2 Hörverstehen (Gespräch, Notizen),
   E7 1.3 Sprechen (Meinung äußern, Ratschläge geben), E7 2 Wortschatz (Gefühle), E7 3 (some, any, no und Zusammensetzungen,
   should, Why don't you …?, Try to …), E7 4 Schreiben (E-Mail mit Ratschlägen).
   Texte: „Conor needs help“ (texte/u3/u3-t2-mails-r.js und -m.js) – Conor (13, Galway) schreibt seiner Cousine Orla, sie
   antwortet; „Maths trouble“ (texte/u3/u3-t2-listen-r.js und -m.js) – Roisin und Cillian. Aufgaben-E-Mail von Tadhg (Task) und
   Dara/Lorcan (Ordnen) stehen im Inhalt. Alle Personen, die Mannschaft und die Lehrerin sind erfunden (Galway gibt es in Irland).
   Förder-Links: some/any/no → unit3/extra/some-any.html („Extra: some oder any?“), Ratschläge → unit3/extra/advice.html
   („Extra: Ratschläge geben“).
   Wörter der Unit bis Topic 2 (advice, should, to be fed up, to tell sb to do sth, to try, guest, list, bad, unhappy, happy,
   sad, tired, angry, worried, excited, awful, amazing, anybody, not … any, workshop, to call, until, after, before …)
   kommen bewusst vor. Neue Wörter, erklärt in der Vorentlastung oder im Glossar: lonely, nervous, upset, proud, left out,
   coach, to give up (+ strict, fraction, cheer-Wörter nur im Hörtext erklärt).
   Hinweis: Das Aufgabenformat „korrigieren“ wird vom Prüfer nicht bedient und deshalb nicht verwendet.
   // BILDER:
   // 1. Station 1 (Vorentlastung, Sprechanlass): Conor (13) sitzt allein auf einer Bank am Rand eines Fußballplatzes in Galway,
   //    die anderen Jungen stehen lachend in einer Gruppe, ein Trainer im Hintergrund pfeift – leicht bedrückte Stimmung.
   // 2. Station 2 (E-Mails): ein Mädchen (Orla) sitzt zu Hause am Laptop und schreibt, neben ihr eine Tasse und ein Foto eines Jungen
   //    im Fußballtrikot an der Wand – Vorentlastung für die Antwort-E-Mail.
   // 3. Station 4 (Hören): zwei Jugendliche (Mädchen, Junge) sitzen im Schulflur vor einem Klassenzimmer, sie hält ein Heft mit
   //    Zahlen, er zeigt ermutigend auf die Tür. */
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

  const FOERDER_SA = { href: "unit3/extra/some-any.html", text: "Extra: some oder any?" };
  const FOERDER_AD = { href: "unit3/extra/advice.html", text: "Extra: Ratschläge geben" };

  // Gefühls-Lücken: R7 mit Anfangsbuchstaben, M7 ohne
  const gefuehle = (nur, hinweis) => ({
    art: "luecke", id: "gefuehle", nur, tag: "Feelings", titel: "How do they feel?",
    lead: nur === "R"
      ? `Complete the sentences with words from the box. <span class="de">Der Anfangsbuchstabe steht in Klammern. Zwei Wörter bleiben übrig.</span>`
      : `Complete the sentences with words from the box.`,
    absaetze: [
      ["Nobody in the team talks to Conor, so he feels ", { g: "lonely" }, hinweis("l"), "."],
      ["Before every training his hands shake: he is ", { g: "nervous" }, hinweis("n"), "."],
      ["The boys didn't invite him for pizza. Now he is ", { g: "upset" }, hinweis("u"), " about it."],
      ["Orla says he is a good player and she is ", { g: "proud" }, hinweis("p"), " of him."],
      ["After Orla's e-mail Conor has a plan. He can't wait for the next training: he is ", { g: "excited" }, hinweis("e"), "."]
    ], extra: ["hungry", "tired"],
    hilfen: ["Lies den ganzen Satz und frage: Ist das Gefühl gut oder schlecht?", "Ein Wort heißt „stolz“, eines „allein“, eines „nervös“ und eines „bedrückt“.", "Hake die Wörter ab, die du schon gesetzt hast. Sie passen nur an eine Stelle."]
  });

  D7Kit.seite({
    id: "u3-topic2",
    titel: "Topic 2: Good advice",
    einleitung: "Conor feels lonely in his new football team, so he writes to his cousin Orla. She answers with <b>good advice</b>. You read the two e-mails, talk about feelings, hear a friend's problem – and then you write an <b>advice e-mail</b> yourself. Du übst auch some, any und no.",
    zeit: "etwa 45 Minuten",
    ziele: ["📧 I understand e-mails and find the right lines.", "😟 I name feelings and say my opinion with <i>because</i>.", "🧩 I use some, any and no – and something, anybody, nobody.", "💡 I give advice: <i>You should … / Why don't you …? / Try to …</i>", "✍️ I write an e-mail with advice."],
    thema: "Unit 3 Welcome to Ireland, Topic 2: Ratschläge geben (E-Mails, Gefühle, some/any/no)",
    quiz: { profi: "Advice pro" },
    glossar: {
      lonely: ["lonely", "Allein und traurig: Man hat niemanden zum Reden und fühlt sich einsam."],
      nervous: ["nervous", "Nervös: Man hat ein flaues Gefühl im Bauch, zum Beispiel vor einem Test oder einem Spiel."],
      upset: ["upset", "Bedrückt, traurig: Man ist wegen etwas Schlimmem durcheinander."],
      proud: ["proud", "Stolz: Man freut sich sehr über etwas, das man selbst oder jemand anderes geschafft hat."],
      leftout: ["left out", "Ausgeschlossen: Die anderen machen etwas zusammen, aber man darf nicht mitmachen."],
      coach: ["coach", "Trainer oder Trainerin: Diese Person leitet das Training einer Mannschaft."],
      giveup: ["to give up", "Aufgeben: Man hört auf, weil man nicht mehr weitermachen will."],
      strict: ["strict", "Streng: Eine strenge Lehrerin achtet genau auf die Regeln."],
      fraction: ["fraction", "Bruch in der Mathematik: Das ist zum Beispiel ein Halb oder drei Viertel."],
      opinion: ["opinion", "Meinung: Das ist, was du über etwas denkst. Du sagst zum Beispiel: I think …"],
      advice: ["advice", "Rat, Ratschlag: Das ist ein Tipp, wie man ein Problem lösen kann. Das Wort hat keine Mehrzahl: some advice."],
      galway: ["Galway", "Galway ist eine Stadt an der Westküste von Irland. Conor, Orla und die Mannschaft sind erfunden."]
    },
    haupttext: { R: "u3-t2-mails-r", M: "u3-t2-mails-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "Feeling left out", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>football training</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-t2-conor.jpg\" width=\"1280\" height=\"853\" alt=\"A boy sits alone on a bench at a football pitch; the other boys laugh together; a coach blows a whistle.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>How does the boy on the bench feel? Why do you think he sits alone? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Conor is 13 and lives in <button class="term" data-t="galway">Galway</button>, a city in the west of Ireland. He plays in a new football team, but he doesn't feel good there. So he writes an e-mail to his cousin Orla.</p><p>Do you know the feeling: you are new and the others already know each other? What helps? <span class="de">Überlege kurz für dich oder sprich mit einer Partnerin oder einem Partner. Conor, Orla und die Mannschaft sind erfunden.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du in den E-Mails. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["lonely", "allein, einsam"], ["nervous", "nervös, aufgeregt"], ["upset", "bedrückt, traurig"], ["proud", "stolz"], ["left out", "ausgeschlossen"], ["coach", "Trainer, Trainerin"]],
          hilfen: ["Fang mit dem Wort an, das du schon erkennst.", "Ein Wort hat mit Sport zu tun, zwei Wörter mit Traurigkeit, ein Wort mit Freude.", "Tippe zuerst coach und suche die Person beim Training."] }
      ] },
      { kurz: "The e-mails", ober: "Reading", titel: "Conor writes to Orla", teile: [
        { art: "text", html: `<p class="lead">Read the two e-mails. Don't stop at words you don't know. <span class="de">Lies beide E-Mails einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u3-t2-mails-r", M: "u3-t2-mails-m" } },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is it about?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "What is Conor's problem?", o: ["He feels lonely in his new football team.", "He can't play football well.", "He has to move to a new school.", "He has had a fight with Orla."], a: 0,
              e: "Conor schreibt, dass die anderen nicht mit ihm reden und ihn nicht fragen – er fühlt sich ausgeschlossen." }
          ] },
        ...[
          { nur: "R", lesetext: "u3-t2-mails-r", fragen: [
            { q: "What happened last Friday?", zeilen: [8, 9], e: "The boys went for pizza, but they didn't ask Conor.", tipp: "Look for the word pizza in Conor's e-mail." },
            { q: "What job can Conor ask the coach for?", zeilen: [18, 20], e: "He can ask the coach if he can carry the balls.", tipp: "Orla talks about Mr Brennan." }
          ] },
          { nur: "M", lesetext: "u3-t2-mails-m", fragen: [
            { q: "What happened last Friday – and when did Conor hear about it?", zeilen: [11, 12], e: "The whole team went for pizza and nobody asked Conor. He only heard about it on Monday.", tipp: "Look for the word pizza in Conor's e-mail." },
            { q: "Why does Orla understand Conor so well?", zeilen: [20, 21], e: "She felt the same when she joined a swimming club.", tipp: "Orla talks about last year." }
          ] }
        ].map(o => Object.assign({ art: "beleg", id: "zeilen", tag: "Evidence from the e-mails", titel: "Where do the e-mails say that?", lead: o.nur === "R" ? `Tap the lines in the e-mails. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>` : `Tap the lines in the e-mails.` }, o)),
        { art: "offen", id: "ratschlaege", tag: "Find the answers", titel: "Orla's advice",
          lead: `Name <b>two ideas</b> from Orla's e-mail. <span class="de">Schreibe zwei Ratschläge von Orla in eigenen Worten.</span>`,
          fragen: [{ q: "What does Orla tell Conor to do?", m: "She says he should talk to his coach. He can also invite two boys to his house.", k: ["talk|ask|speak|coach|Mr Brennan|job|carry|hello|say", "invite|house|pizza|play|home|boys"], min: 2 }],
          tipp: "Start like this: She says he should … / She tells him to …" }
      ] },
      { kurz: "Feelings", ober: "Words and opinions", titel: "How do you feel? What do you think?", teile: [
        { art: "merke", kopf: "FEELINGS", html: `<p>Adjectives tell us how people <b>feel</b>. Some feelings are good, some are not.</p><p><b>Feelings:</b> angry · excited · fantastic · happy · lonely · nervous · proud · sad · tired · upset · worried</p><p>Feelings with <b>to feel</b>: <i>Conor <b>feels</b> lonely.</i> · <i>He <b>is</b> nervous.</i></p>` },
        { art: "sort", id: "gefuehle-sort", tag: "Sort", titel: "Good or bad feeling?",
          lead: `Put each word into the right box. <span class="de">Ist es ein gutes oder ein schlechtes Gefühl?</span>`,
          buckets: ["😀 good feeling", "😞 bad feeling"],
          items: [{ t: "excited", b: 0 }, { t: "proud", b: 0 }, { t: "happy", b: 0 }, { t: "fantastic", b: 0 },
                  { t: "lonely", b: 1 }, { t: "upset", b: 1 }, { t: "worried", b: 1 }, { t: "angry", b: 1 }],
          hilfen: ["Fang mit den Wörtern an, die du schon aus Unit 1 oder 2 kennst.", "Gute Gefühle machen dich froh, schlechte machen dich traurig oder ängstlich.", "Fang mit happy an. Frage dann bei jedem Wort: Fühlt man sich damit froh oder traurig?"] },
        gefuehle("R", h => ` (${h}…)`),
        gefuehle("M", () => ""),
        { art: "merke", kopf: "SAY WHAT YOU THINK", html: `<p>Give your opinion – and always say <b>why</b>:</p><table style="border-collapse:collapse;margin:6px 0"><tr><td style="padding:4px 10px;border:1px solid #bbb"><b>I think …</b><br><b>I don't think …</b></td><td style="padding:4px 10px;border:1px solid #bbb">it is a good idea<br>she is right<br>he is a good friend</td><td style="padding:4px 10px;border:1px solid #bbb"><b>because</b> …</td></tr></table><p><i>I think the idea is good <u>because</u> Conor can meet the boys at home.</i> <span class="de">Nach <b>because</b> kommt ein ganzer Satz.</span></p>` },
        { art: "offen", id: "meinung", tag: "Your opinion", titel: "What do you think?",
          lead: `Answer with <b>I think … because …</b> <span class="de">Schreibe jeweils einen Satz mit Meinung und Begründung.</span>`,
          fragen: [
            { q: "Can you understand how Conor feels?", m: "I think I can understand him because it is hard to be new in a team.", k: ["think|believe|opinion|understand|yes", "because|as|so"], min: 2 }
          ],
          tipp: "Start like this: I think … because … · I don't think … because …" },
        { art: "offen", id: "beste-idee", m7: true, tag: "Challenge · Your words", titel: "The best idea",
          lead: `Which of Orla's ideas is best for Conor? Give a reason. <span class="de">Schreibe einen Satz mit Meinung und Begründung.</span>`,
          fragen: [{ q: "Which idea is best – and why?", m: "I think the best idea is to invite two boys because then Conor can get to know them better.", k: ["think|opinion|believe|best", "because|so|as"], min: 2 }],
          tipp: "Start like this: I think the best idea is … because …" }
      ] },
      { kurz: "Listening", ober: "A problem and some advice", titel: "Maths trouble", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a problem at school</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-t2-flur.jpg\" width=\"1280\" height=\"853\" alt=\"A girl with an exercise book sits nervously in a school corridor; a boy next to her points to a classroom door.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>How does the girl feel? What could the boy say to her? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Roisin is very <b>nervous</b>. A friend, Cillian, talks to her and gives her advice. Two words you may not know: <button class=\"term\" data-t=\"fraction\">fractions</button> and <button class=\"term\" data-t=\"strict\">strict</button>. Read the questions first, then listen. <span class="de">Lies zuerst die Aufgaben. Dann hörst du das Gespräch. Roisin und Cillian sind erfunden.</span></p>` },
        { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: { R: "u3-t2-listen-r", M: "u3-t2-listen-m" },
          fragen: [
            { art: "formular", id: "notizen", nur: "R", titel: "Your notes", lead: `Listen again and choose the right answers. <span class="de">Hör noch einmal zu und wähle für jede Frage die richtige Notiz.</span>`,
              kopf: "Notes: the talk",
              felder: [
                { label: "What is Roisin's problem?", loesung: ["a maths test on Friday"], wahl: ["a maths test on Friday", "a football match on Friday", "a lost school bag"] },
                { label: "Which part is difficult?", loesung: ["fractions"], wahl: ["fractions", "homework", "reading"] },
                { label: "Who can help her?", loesung: ["Mrs Walsh"], wahl: ["Mrs Walsh", "her mum", "the coach"] },
                { label: "When do they go to her?", loesung: ["Wednesday at four"], wahl: ["Wednesday at four", "Thursday at four", "Wednesday at two"] },
                { label: "What is Cillian's tip for home?", loesung: ["learn ten minutes every day"], wahl: ["learn ten minutes every day", "learn two hours on Thursday", "ask her mum to help"] }
              ] },
            { art: "formular", id: "notizen", nur: "M", titel: "Your notes", lead: `Listen again and write short notes. <span class="de">Hör noch einmal zu und notiere zu jeder Frage ein bis fünf Wörter.</span>`,
              kopf: "Notes: the talk",
              felder: [
                { label: "What is Roisin's problem?", platz: "two or three words", loesung: ["maths test", "a maths test", "maths test on Friday", "a maths test on Friday", "test on Friday", "the maths test", "a test on Friday", "she has a maths test", "she has a test", "a test in maths", "test in maths"] },
                { label: "Which part is difficult?", platz: "one word", loesung: ["fractions", "the fractions", "fraction", "maths fractions"] },
                { label: "Who can help her?", platz: "a name", loesung: ["Mrs Walsh", "Walsh", "the teacher Mrs Walsh", "her teacher Mrs Walsh", "teacher Mrs Walsh", "Mrs Walsh, the teacher", "Mrs. Walsh", "mrs walsh"] },
                { label: "When do they go to her?", platz: "day and time", loesung: ["Wednesday at four", "Wednesday, four o'clock", "Wednesday at four o'clock", "Wednesday four o'clock", "Wednesday at 4", "Wednesday 4 o'clock", "Wednesday at 4 o'clock", "Wednesday 4.00", "Wednesday at 4.00", "Wednesday 4 pm", "Wednesday at 4 pm", "Wednesday at 4pm", "Wednesday 4pm", "on Wednesday at four", "on Wednesday at four o'clock", "on Wednesday at 4", "on Wednesday four o'clock", "Wednesday at 16.00", "Wednesday 16.00", "Wednesday, 4 pm", "Wednesday at four pm", "Wednesday four", "Wednesday, four", "Wednesday at 4:00", "Wednesday 4:00"] },
                { label: "What is Cillian's tip for home?", platz: "a few words", loesung: ["learn ten minutes every day", "learn for ten minutes every day", "learn 10 minutes every day", "learn for 10 minutes every day", "ten minutes every day", "10 minutes every day", "ten minutes a day", "10 minutes a day", "learn ten minutes a day", "learn for ten minutes a day", "learn 10 minutes a day", "learn for 10 minutes a day", "to learn ten minutes every day", "to learn for ten minutes every day", "try to learn ten minutes every day", "study ten minutes every day", "practise ten minutes every day", "practise for ten minutes every day", "learn every day", "learn a little every day", "learn every day for ten minutes", "every day ten minutes", "learn ten minutes daily", "ten minutes daily", "ten minutes each day", "learn ten minutes each day"] },
                { label: "What went wrong last time before a test?", platz: "a few words", loesung: ["stayed up until midnight", "she stayed up until midnight", "stayed up late", "she stayed up late", "stayed up until twelve", "learned late at night", "learned until midnight", "learnt until midnight", "learned too late", "learnt too late", "learnt late at night", "went to bed late", "she went to bed late", "she learned too late", "she learnt too late", "she stayed up late learning", "she stayed up too late", "stayed up too late", "stay up until midnight", "stayed awake until midnight", "learning until midnight", "learned until twelve", "learnt until twelve", "she didn't sleep", "didn't sleep", "didn't sleep enough", "she learned until midnight", "she learnt until midnight", "she learned at night", "empty head", "her head was empty", "head was empty"] }
              ] }
          ] }
      ] },
      { kurz: "Language", ober: "some, any, no", titel: "Some, any, no – in Conor's e-mails", teile: [
        { art: "merke", kopf: "LANGUAGE DETECTIVES", html: `<p>Look at the e-mails and the talk:</p><ul><li>But I have <u>some</u> ideas. – You can make <u>some</u> pizza.</li><li>I haven't got <u>any</u> friends in the team.</li><li>Roisin: I get <u>no</u> answers right.</li><li><u>Nobody</u> talks to me. – They laugh about <u>something</u>.</li></ul><p><b>some</b> – in positive sentences: <i>I have some ideas.</i> Also in offers: <i>Would you like some tea?</i><br><b>any</b> – in negative sentences and in questions: <i>I haven't got any friends. · Have you got any ideas?</i><br><b>no</b> – before a noun, the sentence is positive: <i>He has no friends.</i> (not: <s>He hasn't got no friends</s>)</p><p>For things: <b>something – anything – nothing</b>. For people: <b>somebody – anybody – nobody</b> (the same rules).</p>` },
        ...[
          { nur: "R", o: [["some", "any"], ["any", "some"], ["some", "any"], ["any", "some"]], lead: `Tick the correct answer. <span class="de">Zwei Wörter zur Wahl. Denke an die Regel: bejahter Satz oder verneinter Satz oder Frage?</span>` },
          { nur: "M", o: [["some", "any", "no", "none"], ["any", "some", "no", "nothing"], ["no", "any", "some", "nobody"], ["any", "some", "no", "nobody"]], lead: `Tick the correct answer.` }
        ].map(v => ({
          art: "mc", id: "some-any", nur: v.nur, tag: "Choose", titel: "Some, any or no?", foerder: FOERDER_SA, lead: v.lead,
          fragen: [
            { q: "Would you like ____ pizza, Conor?", o: v.o[0], a: 0, e: "Bei einem Angebot steht some: Would you like some pizza?" },
            { q: "Orla hasn't got ____ brothers or sisters.", o: v.o[1], a: 0, e: "Nach hasn't got (Verneinung) steht any. Zwei Verneinungen wie hasn't got no gibt es im Englischen nicht." },
            { q: v.nur === "R" ? "There are ____ boys in the team who laugh a lot." : "There is ____ pizza left. The boys ate everything.", o: v.nur === "R" ? ["some", "any"] : v.o[2], a: 0,
              e: v.nur === "R" ? "Im bejahten Satz steht some: There are some boys." : "Der Satz ist bejaht und meint „kein“: no pizza left. Mit no steht kein not." }
          ]
        })),
        { art: "luecke", id: "zusammen", tag: "Gap text", titel: "Something, anybody, nobody …", foerder: FOERDER_SA,
          lead: `Complete the sentences with words from the box. <span class="de">Für Sachen: something, anything, nothing. Für Personen: somebody, anybody, nobody. Ein Wort bleibt übrig.</span>`,
          absaetze: [
            ["Conor has got ", { g: "something" }, " to tell Orla: he feels lonely."],
            ["He doesn't talk to ", { g: "anybody" }, " in the team."],
            [{ g: "Nobody" }, " passes the ball to him. He never gets it."],
            ["He asks Orla: \"Is there ", { g: "anything" }, " I can do?\""],
            ["The cupboard is empty. There is ", { g: "nothing" }, " to eat."]
          ], extra: ["somebody"],
          hilfen: ["Frage dich: Geht es um eine Sache oder um eine Person?", "Nach doesn't steht any-: anything oder anybody. Am Satzanfang steht oft nobody.", "Ein Satz ist eine Frage – dort steht meistens any-."] },
        { art: "offen", id: "no-oder-any", m7: true, tag: "Challenge · Explain", titel: "No or not … any?",
          lead: `Explain in your own words. English or German. <span class="de">Antworte auf Englisch oder Deutsch.</span>`,
          fragen: [{ q: "Why do we say \"He has no friends\" but \"He hasn't got any friends\"?", m: "Both mean the same. After n't we use any, and no is used in a positive sentence. We never use not and no together.", k: ["any", "no", "not|n't|negative|verneint|Verneinung"], min: 3 }],
          tipp: "Think: one negative word in a sentence is enough. Which one is it in each sentence?" }
      ] },
      { kurz: "Your task", ober: "Task", titel: "Write an e-mail with advice", teile: [
        { art: "text", html: `<p class="lead">Now you give advice yourself. First learn the phrases, then put an answer e-mail in order – and then write your own. <span class="de">Zuerst die Redemittel, dann eine Übung, danach schreibst du selbst.</span></p>` },
        { art: "merke", kopf: "GIVING ADVICE", html: `<p><b>Show that you understand:</b> <i>I'm sorry that … · I understand you. · That sounds hard.</i></p><p><b>Give advice:</b> <i>You should … · You shouldn't … · Why don't you …? · Try to … · What about …?</i></p><p><b>Encourage:</b> <i>Don't give up. · I'm sure it will be OK.</i></p><p><b>Close:</b> <i>Good luck! · Write to me soon. · Tell me what happened.</i></p><p>After <b>should</b> and <b>Why don't you</b> comes the verb without <b>to</b>. After <b>Try</b> we use <b>to</b>.</p>` },
        { art: "mc", id: "ratschlag-form", tag: "Choose", titel: "Which form is correct?", foerder: FOERDER_AD,
          lead: `Tick the correct answer. <span class="de">Achte darauf, ob zu oder kein zu vor dem Verb steht.</span>`,
          fragen: [
            { q: "You should ____ to your teacher.", o: ["talk", "to talk", "talking", "talks"], a: 0, e: "Nach should steht das Verb ohne to: You should talk." },
            { q: "Try ____ to bed earlier.", o: ["to go", "go", "going", "goes"], a: 0, e: "Nach Try steht to und das Verb: Try to go." }
          ] },
        { art: "text", html: `<p><b>Dara's e-mail:</b> <i>"Hi Lorcan, I have a swimming race on Saturday and I'm so nervous that I can't sleep. Any advice? Dara"</i></p>` },
        { art: "ordnen", id: "mail-reihe", tag: "Order", titel: "Lorcan's answer", foerder: FOERDER_AD,
          lead: `Put the sentences of Lorcan's e-mail in the right order. <span class="de">Anrede, Dank, Verständnis, Meinung, Rat, Vorschlag, Gruß.</span>`,
          schritte: ["Hi Dara,", "Thanks for your e-mail.", "I'm sorry that you feel so nervous. I understand you.", "I think it is normal before a race.", "You should go to bed early on Friday and try to think of something nice.", "And why don't we go to the pool together on Sunday, after the race?", "Good luck! Your friend, Lorcan"],
          hilfen: ["Eine E-Mail beginnt mit einer Anrede und endet mit einem Gruß.", "Zuerst bedankst du dich, dann zeigst du Verständnis.", "Der Rat steht vor dem Vorschlag."] },
        { art: "beispiel", kopf: "TADHG'S E-MAIL", html: `<p>Hi,</p><p>It's Tadhg. I have a problem. I borrowed Seamus's new football boots for the match on Saturday. After the game I lost one boot on the bus. Seamus doesn't know yet. I'm so upset and I don't know what to tell him. What should I do?</p><p>Tadhg</p>` },
        { art: "mc", id: "tadhg", tag: "Understand the problem", titel: "What is Tadhg's problem?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "What is Tadhg's problem?", o: ["He has lost one of his friend's boots.", "He has lost his own boots.", "He has missed the bus to the match.", "He has had a fight with Seamus."], a: 0,
              e: "Tadhg hat sich die neuen Fußballschuhe von Seamus geliehen und einen davon im Bus verloren." },
            { q: "Does Seamus know about the lost boot?", o: ["No, he doesn't know yet.", "Yes, Tadhg told him after the game.", "Yes, the coach told him.", "Yes, the whole team knows."], a: 0,
              e: "Seamus weiß noch nichts davon (Seamus doesn't know yet)." }
          ] },
        ...[40, 60].map((min, i) => ({
          art: "schreiben", id: "antwort-mail", nur: i === 0 ? "R" : "M", tag: "Your task", titel: "Write back to Tadhg", min,
          auftrag: `<p><b>Write an e-mail to Tadhg with advice</b> (${min} words or more).${i === 0 ? ` <span class="de">Schreibe mindestens 40 Wörter.</span>` : ""}</p><p>Your e-mail has these parts:</p><ul><li>Hi Tadhg, + thank him for his e-mail</li><li>show that you understand him</li><li>give <b>two pieces of advice</b> (You should … / Why don't you …? / Try to …)</li><li>use one word like <b>some, any, no, something, anybody, nobody</b></li><li>end in a friendly way and write your name</li></ul>`,
          foerder: FOERDER_AD,
          starter: ["Hi Tadhg,", "Thanks for your e-mail.", "I'm sorry that you …", "I understand you, because …", "You should …", "Why don't you …?", "Try to …", "Good luck! / Write to me soon."],
          kriterien: ["Du beginnst mit einer Anrede und bedankst dich für die E-Mail.", "Du zeigst, dass du Tadhg verstehst (I'm sorry … / I understand you).", "Du gibst mindestens zwei Ratschläge mit verschiedenen Formen (You should … / Why don't you …? / Try to …).", "Mindestens ein Satz enthält some, any, no oder eine Zusammensetzung wie something oder nobody.", "Du schließt freundlich ab (Good luck! …) und schreibst deinen Namen."]
        }))
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Conor plays football in a new team in Galway.", true],
            ["Orla tells Conor to stop going to training.", false],
            ["Roisin is nervous because of a maths test.", true],
            ["Cillian thinks Roisin should learn for two hours on the night before the test.", false],
            ["\"He hasn't got no friends\" is correct English.", false],
            ["In \"Nobody talks to me\" the verb is positive.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read e-mails with a problem, name feelings, say your opinion and give good advice. Next: more practice with the words of this unit." }
  });
})();
