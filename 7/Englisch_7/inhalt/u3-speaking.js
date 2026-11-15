/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Speaking skills: Talking about a picture (Kürzel C18)
   (das Prüfungsformat „picture-based interview“ in sechs Schritten trainieren: Überblick geben, sagen, wo etwas ist, sagen, was
   gerade passiert, vermuten und eine Meinung sagen, auf die Fragen der Prüferin antworten – dann selbst ein zweites Bild
   beschreiben)
   Buchprinzip (BUCH-UNIT3.md, Abschnitt Speaking skills, nur Aufbau, nichts übernommen): zwei gezeichnete Bilder A und B, Bild A
   mit Ortsangaben-Schildchen, Bild B als Transferbild → fünf Aufgaben mit Tippkästen: 1 allgemein sagen, was und wen man sieht,
   2 im Detail beschreiben (Vorder-/Mittel-/Hintergrund, links/rechts/neben), 3 über die Tätigkeiten sprechen (present progressive),
   4 „What about you?“ (Gefällt dir der Ort? Gründe nennen), 5 Partner interviewen zu Bild B. Besser: die Schritte werden einzeln
   geübt (Lückensatz, Zuordnen, Ankreuzen, Vermutung erkennen), ein kurzes Muster-Interview zum Anhören (Prüferin und
   Schülerin, anderes Bild) zeigt, wie ein gutes Interview klingt, das Interview mit Bild A läuft als Sprechblasen-Kette mit
   KI-Rückmeldung (R7 mit Satzanfängen und Tipps in Stufen, M7 ohne Satzanfänge) – mit dem Schritt „Ich habe die Frage nicht
   verstanden → höflich nachfragen“ –, danach beschreibt das Kind das zweite Bild (Bild B) schriftlich im Schreibtrainer.
   Differenzierung: Hörtext in zwei Fassungen (R7 197 Wörter, M7 278 Wörter mit mehr Einzelheiten); Kette – R7 mit Satzanfängen und
   Tipps in zwei Stufen, M7 ohne Satzanfang; Schreiben – R7 40, M7 60 Wörter; Plus für M7 (m7): zwei offene Aufgaben (Vermutung zu
   Bild A, Wendungen des Musterinterviews), für R7 freiwillig.
   LehrplanPLUS E7 Sprechen (ein Bild beschreiben, Fragen zum Bild beantworten, Vermutungen und Meinung äußern, bei Nichtverstehen
   nachfragen), E7 Schreiben (Bild beschreiben), E7 Grammatik (present progressive, there is/are, Ortsangaben und Präpositionen
   des Ortes), E7 Hörverstehen (Interview).
   Texte: „A picture of a harbour“ (texte/u3/u3-sp-model-r.js, -m.js; R7 197 Wörter, M7 278 Wörter): Prüferin Ms Hartigan und
   Neve – alle Personen erfunden. Die Bilder A (Bauernmarkt) und B (Strandtag) sind eigene Szenen; bis die Bilder da sind, stehen sie
   als „Picture A/B in words“ in Karten (deutsche Beschreibung mit englischen Fachwörtern in Klammern, damit keine englische
   Lösung verraten wird).
   Förder-Link: Ortsangaben und Präpositionen -> unit3/extra/prepositions.html (an den Teilen „Where is what?“).
   Wortschatz: Wordbank „Picture description“ (in the foreground/background, on the left/right, next to, between, behind, in front
   of, Maybe …, I think …, It looks like …), Unit 3 Speaking skills (foreground, background, middle), Unit 1/2. Neu und erklärt:
   fiddle, seagull, surfer, blanket, quay, examiner.
   Keine Buchmotive (Campingbilder, Grill, Kartenspiel, Postkarten, Katze, Freizeitpark), keine Buchnamen.
   // BILDER:
   // 1. Station 1 (Bild A, Sprechanlass): Bauernmarkt auf dem Platz einer irischen Kleinstadt. Vorne links ein Obststand (Frau in grüner
   //    Schürze, Äpfel und Erdbeeren), vorne rechts ein Junge und ein Mädchen mit Eis, neben dem Jungen ein kleiner brauner Hund. In der
   //    Mitte ein Mann mit Fiddle zwischen einem Käsestand (links, Verkäufer schneidet Käse) und einem Blumenstand (rechts, Frau
   //    stellt Tulpen in einen Eimer). Hinten kleine Häuser mit bunten Türen, darüber graue Regenwolken, ein Mann spannt einen
   //    Regenschirm auf. Keine lesbaren Schriften.
   // 2. Station 5 (Bild B, Schreibaufgabe): Strandtag an der irischen Westküste. Vorne auf einer Decke eine Familie beim Picknick
   //    (Mutter, Vater, kleines Mädchen, Korb), eine Möwe fliegt mit einem Sandwich im Schnabel davon, das Mädchen zeigt auf sie, der
   //    Vater lacht. Vorne links ein Junge mit einem Drachen. In der Mitte ein Surfer, der sein Brett ins Wasser trägt. Hinten rechts
   //    ein rot-weißer Leuchtturm auf einem Felsen, davor ein kleines Segelboot; blauer Himmel mit wenigen weißen Wolken.
   // 3. Station 4 (Hörtext, nur Vorentlastung): ein kleiner Hafen in einem Fischerdorf – vorne ein alter Mann auf einer Bank neben
   //    einer Holzkiste, links zwei Jungen auf dem Kai mit Angeln und einem Eimer (einer lacht), rechts eine Frau mit Korb, in der
   //    Mitte bunte Boote (rot, blau, gelb), hinten Häuser an einem Hügel und eine große Fähre. */
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

  const PREP = { href: "unit3/extra/prepositions.html", text: "Extra: Ortsangaben und Präpositionen" };

  // Hörtext mit Fragen – gleiche Fragen, eigene Fassung des Textes je Zug
  const hoer = zug => ({
    nur: zug, art: "hoertext", id: "model", tag: "🎧 Model interview", hoertext: zug === "R" ? "u3-sp-model-r" : "u3-sp-model-m",
    fragen: [
      { art: "mc", id: "model-mc", titel: "Tick the correct answer",
        lead: zug === "R" ? `Listen and tick the correct answer. <span class="de">Zu jeder Frage gibt es vier Möglichkeiten.</span>` : `Listen and tick the correct answer.`,
        fragen: [
          { q: "What are the two boys doing?", o: ["They are fishing.", "They are swimming.", "They are playing football.", "They are sailing a boat."], a: 0,
            e: "Neve sagt: They are fishing. Mit dem present progressive sagt man, was gerade passiert." },
          { q: "What does Neve do when she doesn't understand a question?", o: ["She asks the examiner to say it again.", "She stays quiet and waits.", "She gives a wrong answer.", "She says goodbye and leaves."], a: 0,
            e: "Neve fragt höflich: Could you say that again, please? Das ist erlaubt und klingt gut." }
        ] },
      { art: "offen", id: "model-offen", m7: true, tag: "Challenge · Your words", titel: "How does Neve guess?",
        lead: zug === "R" ? `Listen again. Write two phrases Neve uses when she is <b>not sure</b>. <span class="de">Wie sagt Neve, dass sie etwas vermutet? Schreibe zwei Wendungen.</span>` : `Listen again. Write two phrases Neve uses when she is <b>not sure</b>.`,
        fragen: [{ q: "Which two phrases does Neve use to guess?", m: "She says: I think he is happy. And: Maybe he likes watching the boys.", k: ["i think|think", "maybe|perhaps"], min: 2 }],
        tipp: "Neve talks about the old man. Look for two short beginnings of a sentence: one with I, one with a single word." }
    ]
  });

  // Kette: Interview zu Bild A – R7 mit Satzanfängen und Tipps in Stufen, M7 ohne Satzanfang
  const KETTE_THEMA = "Ein Bild im Interview beschreiben (Englisch 7, Mittelschule): Bild A ist ein Bauernmarkt auf dem Platz einer irischen Kleinstadt. Vorne links ein Obststand mit einer Frau in grüner Schürze, vorne rechts ein Junge und ein Mädchen mit Eis, neben dem Jungen ein kleiner brauner Hund. In der Mitte ein Mann mit Fiddle zwischen einem Käsestand (links) und einem Blumenstand (rechts). Hinten kleine Häuser mit bunten Türen, graue Regenwolken, ein Mann spannt einen Regenschirm auf. Die Prüferin stellt Fragen vom Allgemeinen zum Persönlichen";
  const kette = zug => {
    const R = zug === "R";
    const s = (r, m) => (R ? r : m);
    return {
      art: "kette", id: "interview", nur: zug, tag: "Interview · AI check", titel: "Picture A: the interview",
      lead: R ? `Look at picture A for half a minute (scroll up). Then answer Ms Hartigan. <span class="de">Du schreibst deine Antworten, die KI prüft jede einzelne. Satzanfänge und Tipps helfen dir. Die Prüferin ist erfunden.</span>`
              : `Look at picture A for half a minute (scroll up). Then answer Ms Hartigan. <span class="de">Wie in der echten Prüfung: ohne Satzanfang, bei Bedarf mit einem Tipp.</span>`,
      thema: KETTE_THEMA,
      rollen: { a: { name: "Ms Hartigan", ic: "👩‍🏫" }, du: { name: "You" } },
      schritte: [
        { von: "a", text: "Hello! Here is a picture of a market. Please look at it for half a minute. … Right. What can you see in the picture?" },
        { an: "a", sprache: "en", auftrag: s("Start your description. Say what the place is and name two or three things you can see. <span class=\"de\">Zuerst ein Überblick, in ganzen Sätzen.</span>", "Start your description: what is the place, and what can you see?"),
          start: s("In the picture I can see", undefined),
          kriterien: ["sagt, was für ein Ort es ist (ein Markt in einer Kleinstadt oder Marktstände)", "nennt zwei oder drei Dinge oder Personen im Bild (zum Beispiel Obst, Käse, Blumen, Musiker, Hund, Kinder)", "spricht in ganzen Sätzen"],
          m: "In the picture I can see a market in a small town. There are stalls with fruit, cheese and flowers, and there is a man with a fiddle.", k: ["see|there is|there are|shows|picture", "market|stall|town|square", "fruit|cheese|flower|fiddle|musician|dog|children|ice cream|apples|man|woman"],
          tipps: s(["Zwei Teile: <b>was</b> für ein Ort – und <b>zwei oder drei</b> Dinge.", "In the picture I can see … · There is … · There are … · stalls = Stände"], ["Ort und zwei oder drei Dinge – in ganzen Sätzen."]) },
        { von: "a", text: "Thank you. Can you tell me more? Where are the people and the stalls?" },
        { an: "a", sprache: "en", auftrag: s("Say where things are. Use at least two place words and next to, between, behind or in front of once. <span class=\"de\">Sag, wo etwas ist.</span>", "Say where things are. Use place words and at least one preposition."),
          start: s("In the foreground", undefined),
          kriterien: ["sagt, wo mindestens zwei Dinge sind (in the foreground / in the middle / in the background, on the left / on the right)", "benutzt eine Präposition wie next to, between, behind oder in front of"],
          m: "In the foreground on the left there is a fruit stall. The man with the fiddle is in the middle, between the cheese stall and the flower stall.", k: ["foreground|background|middle|left|right|centre", "between|next to|behind|in front of|opposite|near|beside|above", "stall|fiddle|man|children|dog|clouds|houses|boy|girl"],
          tipps: s(["Zwei Dinge: <b>Bildteil</b> (vorne, Mitte, hinten, links, rechts) und eine <b>Präposition</b>.", "in the foreground · in the middle · in the background · on the left · on the right · next to · between · behind"], ["Bildteil und mindestens eine Präposition."]) },
        { von: "a", text: "OK. And what are the children doing?" },
        { an: "a", sprache: "en", auftrag: s("Say what the children are doing and what the dog is doing. Use the present progressive. <span class=\"de\">Was tun die Kinder, was tut der Hund?</span>", "Say what the children and the dog are doing."),
          start: s("The children", undefined),
          kriterien: ["sagt, was die Kinder tun (present progressive, zum Beispiel are eating ice cream)", "sagt, was der Hund tut (present progressive, zum Beispiel is sitting)"],
          m: "The children are eating ice cream. The dog is sitting next to the boy, and I think it is waiting for some ice cream.", k: ["eating|having|licking", "dog", "sitting|waiting|looking|lying|watching|sits"],
          tipps: s(["Zwei Teile: die <b>Kinder</b> und der <b>Hund</b>. Beide mit <b>is/are + -ing</b>.", "The children are … · The dog is … · eating ice cream · sitting · waiting"], ["Kinder und Hund – present progressive."]) },
        { von: "a", text: "Do you think the people at the market are enjoying themselves, despite the grey clouds?" },
        { an: "a", sprache: "en", auftrag: s("You don't understand the question. Ask the examiner politely to say it again. <span class=\"de\">Du hast die Frage nicht verstanden. Bitte höflich um eine Wiederholung.</span>", "You don't understand the question. Ask the examiner politely."),
          start: s("Sorry,", undefined),
          kriterien: ["bittet höflich darum, die Frage zu wiederholen oder zu erklären (zum Beispiel Sorry, could you say that again, please?)"],
          m: "Sorry, I don't understand. Could you say that again, please?", k: ["sorry|excuse me|pardon|please", "again|repeat|explain|mean|understand"],
          tipps: s(["<b>Sorry</b> sagen, dann bitten: noch einmal sagen.", "Sorry, could you say that again, please? · Could you repeat the question, please? · What does … mean?"], ["Höflich um Wiederholung bitten."]) },
        { von: "a", text: "Of course. Do you think the people are happy?" },
        { an: "a", sprache: "en", auftrag: s("Make a guess and give a reason. <span class=\"de\">Eine Vermutung mit I think, Maybe oder It looks like – und ein Grund aus dem Bild.</span>", "Make a guess and give a reason."),
          start: s("I think", undefined),
          kriterien: ["gibt eine Vermutung ab (I think … / Maybe … / It looks like …)", "nennt einen Grund oder einen Hinweis aus dem Bild (zum Beispiel mit because)"],
          m: "I think they are happy, because they are smiling and there is music. Maybe they don't mind the clouds.", k: ["think|maybe|perhaps|looks like|guess|seems|might", "because|since|smil|laugh|music|ice cream|sunny|fun|so|but|don't mind|enjoy"],
          tipps: s(["Zwei Teile: eine <b>Vermutung</b> – und ein <b>Grund</b>.", "I think … because … · Maybe … · It looks like … · They are smiling."], ["Vermutung und Grund aus dem Bild."]) },
        { von: "a", text: "Last question. Would you like to be at this market? Why, or why not?" },
        { an: "a", sprache: "en", auftrag: s("Say if you would like to be there. Give a reason with because and say what you would like to do. <span class=\"de\">Ja oder nein, ein Grund und was du dort machen möchtest.</span>", "Say if you would like to be there, and why. Say what you would like to do."),
          start: s("Yes, I would. I'd like to", undefined),
          kriterien: ["sagt, ob man dort sein möchte (Yes, I would. / No, I wouldn't.)", "nennt einen Grund (zum Beispiel mit because)", "sagt, was man dort gern tun würde (I'd like to …)"],
          m: "Yes, I would. I'd like to buy some strawberries, because I love them, and I'd like to listen to the fiddle.", k: ["yes|no|would|wouldn't|not really", "because|i love|i like|i hate|i don't|too|so", "like to|'d like|would like|buy|eat|listen|see|try|taste|walk|talk"],
          tipps: s(["Drei Teile: <b>Ja/Nein</b> – <b>Grund</b> – <b>was ich tun möchte</b>.", "Yes, I would. · No, I wouldn't. · because … · I'd like to buy / eat / listen to …"], ["Ja/Nein, Grund, I'd like to …"]) },
        { von: "a", text: "Thank you. That was a good description." }
      ]
    };
  };

  D7Kit.seite({
    id: "u3-speaking",
    titel: "Speaking skills: Talking about a picture",
    einleitung: "In a <b>picture-based interview</b> you look at a picture for a short time, and then the examiner asks you questions – first easy ones (<i>What can you see?</i>), then more personal ones (<i>Would you like to be there?</i>). You practise it in small steps: <b>overview, where, what, guess, answer</b>. Du übst, ein Bild im Gespräch zu beschreiben.",
    zeit: "etwa 45 Minuten",
    ziele: ["👀 I give an overview of a picture: In the picture I can see …", "📍 I say where things are: in the foreground, on the left, next to, between.", "🏃 I say what is happening: The man is playing …", "💭 I guess and give my opinion: Maybe …, I think …, I'd like to …", "🗣️ I answer the examiner's questions – and ask when I don't understand."],
    thema: "Unit 3 Welcome to Ireland, Speaking skills: ein Bild beschreiben (picture-based interview), present progressive, there is/are, Ortsangaben",
    quiz: { profi: "Picture pro" },
    glossar: {
      fiddle: ["fiddle", "Fiddle: So nennt man die Geige in der irischen Volksmusik. Man spielt darauf schnelle, lustige Lieder zum Tanzen."],
      stall: ["stall", "Marktstand: Dort verkauft jemand zum Beispiel Obst oder Käse. Der Stand steht draußen."],
      seagull: ["seagull", "Möwe: Das ist ein Vogel, der am Meer lebt. Möwen stehlen manchmal Essen."],
      surfer: ["surfer", "Surfer, Surferin: Das ist ein Mensch, der auf einem Brett auf den Wellen steht."],
      blanket: ["blanket", "Decke: Man legt sie auf den Sand oder auf das Gras und sitzt darauf."],
      quay: ["quay", "Kai: So heißt die Mauer am Hafen, an der Boote anlegen. Man kann darauf gehen."],
      examiner: ["examiner", "Prüferin, Prüfer: Diese Person stellt dir in der Sprechprüfung Fragen."],
      foreground: ["foreground", "Vordergrund: Das ist der Teil eines Bildes, der dir am nächsten ist. Der Hintergrund ist weit weg."],
      progressive: ["present progressive", "Verlaufsform der Gegenwart: Du sagst damit, was gerade passiert. Sie besteht aus am, is oder are und dem Verb mit -ing, zum Beispiel: The boy is running."]
    },
    stationen: trenne([
      { kurz: "Get ready", ober: "Overview", titel: "Look and give an overview", teile: [
        { art: "text", html: `<p class="lead">Many speaking tests have a <b>picture-based interview</b>. You look at a picture for about <b>half a minute</b>. Then the <button class="term" data-t="examiner">examiner</button> asks questions – from easy to personal. <span class="de">Viele Sprechprüfungen haben ein Bildgespräch. Du siehst dir ein Bild etwa eine halbe Minute an. Dann stellt die Prüferin Fragen, erst leichte, dann persönliche.</span></p>` },
        { art: "text", html: `<p class="lead">This is <b>picture A</b>: a farmers' market. <span class="de">Die Karten darunter sagen dir noch einmal, was wo ist.</span></p>` },
        { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-sp-markt.jpg\" width=\"1280\" height=\"853\" alt=\"Picture A: a farmers' market on a town square – fruit stall front left, two children with ice cream and a dog front right, a fiddler between a cheese stall and a flower stall, houses with colourful doors and rain clouds at the back.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
        { art: "karten", karten: [
          { ic: "🍎", titel: "Vorne links", text: "Ein Obststand (<i>fruit stall</i>). Eine Frau mit grüner Schürze verkauft Äpfel und Erdbeeren." },
          { ic: "🍦", titel: "Vorne rechts", text: "Ein Junge und ein Mädchen essen ein Eis. Neben dem Jungen sitzt ein kleiner brauner Hund." },
          { ic: "🎻", titel: "In der Mitte", text: "Ein Mann spielt Geige (<i>fiddle</i>). Links von ihm ist ein Käsestand, rechts von ihm ein Blumenstand." },
          { ic: "🧀", titel: "Käsestand", text: "Ein Verkäufer schneidet ein großes Stück Käse für eine Kundin ab." },
          { ic: "💐", titel: "Blumenstand", text: "Eine Frau stellt Tulpen in einen Eimer." },
          { ic: "☁️", titel: "Hinten", text: "Kleine Häuser mit bunten Türen. Darüber hängen graue Regenwolken. Ein Mann spannt seinen Regenschirm auf." }
        ] },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du für die Bilder. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["stall", "Marktstand"], ["fiddle", "Geige (irische Volksmusik)"], ["seagull", "Möwe"], ["surfer", "Surfer, Surferin"], ["blanket", "Decke"]],
          hilfen: ["Fang mit dem Wort an, das du schon kennst.", "Drei Wörter haben mit dem Meer oder Strand zu tun, eines mit Musik.", "Ein Vogel am Meer: seagull."] },
        { art: "mc", id: "ueberblick", tag: "First sentence", titel: "How do you start?",
          lead: `Tick the best answer. <span class="de">Wie fängst du an? Ein Satz oder ein Wort?</span>`,
          fragen: [
            { q: "The examiner asks: What can you see in the picture? Which answer is the best start?", o: ["In the picture I can see a market in a small town. There are a lot of people.", "Market.", "I think it is nice.", "The picture is a picture."], a: 0,
              e: "Du beginnst mit einem ganzen Satz und gibst einen Überblick: In the picture I can see … Ein einzelnes Wort ist zu wenig." },
            { q: "What kind of place is shown in picture A?", o: ["A farmers' market on a town square", "A beach", "A school playground", "A railway station"], a: 0,
              e: "Auf Bild A sieht man Stände mit Obst, Käse und Blumen, einen Musiker und Häuser – also einen Markt auf dem Platz einer Kleinstadt." }
          ] }
      ] },
      { kurz: "Where?", ober: "Where is what?", titel: "Say where things are", teile: [
        { art: "merke", kopf: "WHERE IS WHAT?", html: `<p>Split the picture into parts and say where things are:</p><div class="phrasen"><span>in the <button class="term" data-t="foreground">foreground</button></span><span>in the middle</span><span>in the background</span><span>on the left</span><span>on the right</span></div><p>Then say exactly where with a <b>preposition</b>: <i>next to · between … and … · behind · in front of · opposite</i>.</p><p><i>There is a bench in the foreground. There are two bikes behind the bench.</i></p><p>💡 <b>Tip:</b> Take your time. Go through the picture in a clear order: <b>from the front to the back</b> or from left to right. <span class="de">Geh das Bild der Reihe nach durch, zum Beispiel von vorne nach hinten.</span></p>` },
        { art: "luecke", id: "wo", tag: "Prepositions", titel: "Where are they?", foerder: PREP,
          lead: `Complete the sentences about picture A. Use the words from the box. <span class="de">Lies noch einmal die Karten zu Bild A. Zwei Wörter bleiben übrig.</span>`,
          absaetze: [
            ["The children are in the foreground, ", { g: "on" }, " the right."],
            ["The man with the fiddle is ", { g: "between" }, " the cheese stall and the flower stall."],
            ["The brown dog is sitting ", { g: "next to" }, " the boy."],
            ["The grey clouds are in the ", { g: "background" }, "."]
          ], extra: ["under", "behind"],
          hilfen: ["Lies zuerst die Karten zu Bild A noch einmal.", "Ein Wort heißt „zwischen“, eines „neben“ und eines „hinten“ (Hintergrund).", "Bei the right passt das kleine Wort on: on the right."] },
        { art: "paare", id: "ort-paare", tag: "Match", titel: "Where is it in picture A?", foerder: PREP,
          lead: `Match each thing with its place. <span class="de">Welche Ortsangabe passt zu welchem Teil von Bild A?</span>`,
          paare: [["the fruit stall", "in the foreground, on the left"], ["the cheese stall", "in the middle, on the left"], ["the flower stall", "in the middle, on the right"], ["the colourful houses", "behind the stalls, in the background"]],
          hilfen: ["Das Bild hat vorne, in der Mitte und hinten – schau auf die Karten.", "Der Obststand ist der einzige Stand vorne.", "Zwischen Käsestand und Blumenstand steht der Musiker – der Käsestand ist links."] },
        { art: "mc", id: "ort-mc", tag: "Check", titel: "Which sentence is correct?", foerder: PREP,
          lead: `Tick the correct answer. <span class="de">Welcher Satz ist richtig?</span>`,
          fragen: [
            { q: "Which sentence about a different picture is correct?", o: ["There is a tree in the background and a red car in front of it.", "There is a tree at the background and a red car in front of it.", "There is a tree on the background and a red car in front of it.", "There are a tree in the background and a red car in front of it."], a: 0,
              e: "Es heißt in the background, nicht at oder on. Und There is gehört zu einem Baum (eine Sache)." }
          ] }
      ] },
      { kurz: "What & guess", ober: "What is happening?", titel: "Say what is happening – and what you think", teile: [
        { art: "merke", kopf: "WHAT IS HAPPENING?", html: `<p>Say what people are doing <b>now</b>. Use the <button class="term" data-t="progressive">present progressive</button>:</p><p><b>am / is / are + verb + -ing</b></p><p><i>The girl is reading a book. · Two men are talking. · I'm looking at the picture.</i></p><ul><li>You can also say what people <b>wear</b> or <b>hold</b>: <i>She is wearing a red coat. · He is holding a map.</i></li><li>Writing: <i>run → running · sit → sitting · make → making</i></li></ul>` },
        { art: "luecke", id: "was", tag: "Present progressive", titel: "What are they doing?",
          lead: `Complete the sentences about picture A with the right form. <span class="de">Setze die ganze Form ein: is/are + Verb mit -ing. Zwei Formen bleiben übrig.</span>`,
          absaetze: [
            ["The man with the fiddle ", { g: "is playing" }, " Irish music."],
            ["The man at the cheese stall ", { g: "is cutting" }, " a big piece of cheese."],
            ["A man in the background ", { g: "is opening" }, " his umbrella."],
            ["Two children ", { g: "are eating" }, " ice cream."]
          ], extra: ["is eat", "are cut"],
          hilfen: ["Schau auf die Person vor der Lücke: ein Mann oder zwei Kinder?", "Bei einer Person steht is, bei zwei Personen are – danach das Verb mit -ing.", "Die Kinder haben ein Eis: eat → eating."] },
        { art: "mc", id: "was-mc", tag: "Check", titel: "Which sentence is correct?",
          lead: `Tick the correct answer. <span class="de">Ein Satz zum Blumenstand ist richtig.</span>`,
          fragen: [
            { q: "Which sentence about the flower stall is correct?", o: ["A woman is putting tulips into a bucket.", "A woman putting tulips into a bucket.", "A woman is put tulips into a bucket.", "A woman are putting tulips into a bucket."], a: 0,
              e: "Present progressive: is + Verb mit -ing (is putting). Bei put verdoppelt sich das t." }
          ] },
        { art: "merke", kopf: "GUESS AND SAY WHAT YOU THINK", html: `<p>When you are not sure, <b>guess</b>. When the examiner asks for your opinion, say it with a <b>reason</b>.</p><div class="phrasen"><span>Maybe …</span><span>Perhaps …</span><span>I think …</span><span>It looks like …</span><span>I'd like to … because …</span></div><p><i>Maybe it is Saturday. · I think the boy is cold, because he is wearing a hat.</i></p><span class="de">Du musst nicht alles wissen. Eine Vermutung mit „Maybe“ oder „I think“ ist in Ordnung.</span>` },
        { art: "mc", id: "vermuten", tag: "Guess", titel: "Which sentence is a good guess?",
          lead: `Tick the best answer. <span class="de">Du siehst graue Wolken im Hintergrund. Welcher Satz ist eine gute Vermutung?</span>`,
          fragen: [
            { q: "You can see dark clouds behind the houses. Which sentence is a good guess?", o: ["Maybe it is going to rain soon, because the clouds are dark.", "It is raining now. I know it.", "The clouds are green.", "I don't know. Next question."], a: 0,
              e: "Eine gute Vermutung beginnt mit Maybe, I think oder It looks like und nennt einen Grund aus dem Bild." }
          ] },
        { art: "offen", id: "vermuten-offen", m7: true, tag: "Challenge · Your words", titel: "Why do some people open umbrellas?",
          lead: `Write one sentence with a guess about picture A. <span class="de">Warum spannt ein Mann seinen Schirm auf? Schreibe eine Vermutung.</span>`,
          fragen: [{ q: "In picture A a man is opening his umbrella. Why do you think he does that?", m: "I think he is opening his umbrella because the clouds are dark and it is going to rain.", k: ["maybe|perhaps|i think|it looks|i guess|might|because", "rain|cloud|wet|weather|dark|storm"], min: 2 }],
          tipp: "Look at the sky in the background. Start like this: I think he …" }
      ] },
      { kurz: "Interview", ober: "The interview", titel: "Listen – then answer the examiner", teile: [
        { art: "text", html: `<p class="lead">First listen to <b>Neve</b> in a picture-based interview. Her picture shows <b>a harbour</b> in a small fishing village (you can't see it – listen to how she talks about it). <span class="de">Zuerst hörst du Neve in einem Bildgespräch. Ihr Bild zeigt einen Hafen. Neve und die Prüferin sind erfunden.</span></p>` },
        hoer("R"), hoer("M"),
        { art: "merke", kopf: "TIPS FOR THE INTERVIEW", html: `<ol><li><b>Take your time.</b> Look at the whole picture first. <span class="de">Lass dir Zeit.</span></li><li><b>Speak in whole sentences,</b> not only words: <i>In the picture I can see …</i></li><li><b>Go from general to detail:</b> first the overview, then where, then what is happening.</li><li><b>Guess</b> if you are not sure: <i>Maybe … · I think …</i></li><li><b>Ask</b> if you don't understand: <i>Sorry, could you say that again, please? · What does … mean?</i></li><li><b>Give reasons</b> with <i>because</i>.</li></ol>` },
        { art: "mc", id: "fragenfolge", tag: "The questions", titel: "Which question comes last?",
          lead: `Tick the best answer. <span class="de">Ein Bildgespräch geht vom Allgemeinen zum Persönlichen.</span>`,
          fragen: [
            { q: "In a typical picture-based interview, which question comes last?", o: ["Would you like to be there? Why?", "What can you see in the picture?", "Where are the people?", "What are the people doing?"], a: 0,
              e: "Zuerst geht es um das ganze Bild, dann um Orte und Tätigkeiten. Die persönliche Frage nach deiner Meinung kommt zuletzt." }
          ] },
        { art: "text", html: `<p class="lead">Now it is <b>your</b> turn. Look at picture A (scroll up to the cards of station 1). Then answer <b>Ms Hartigan</b>. <span class="de">Jetzt bist du dran. Die Prüferin stellt sechs Fragen zu Bild A. Die KI prüft jede Antwort. Die nächste Frage kommt, wenn deine Antwort geprüft ist.</span></p>` },
        kette("R"), kette("M")
      ] },
      { kurz: "Your turn", ober: "Picture B", titel: "Describe a new picture", teile: [
        { art: "text", html: `<p class="lead">Now you describe <b>picture B</b>: a day at the beach on the west coast of Ireland. <span class="de">Die Karten darunter sagen dir noch einmal, was wo ist.</span></p>` },
        { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-sp-strand.jpg\" width=\"1280\" height=\"853\" alt=\"Picture B: a family picnic on a blanket, a seagull flies off with a sandwich, a boy with a kite on the left, a surfer in the middle, a red and white lighthouse with a sailing boat at the back on the right.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
        { art: "karten", karten: [
          { ic: "🏖️", titel: "Vorne", text: "Auf einer Decke (<i>blanket</i>) sitzt eine Familie beim Picknick: Mutter, Vater und ein kleines Mädchen. Neben der Decke steht ein Korb." },
          { ic: "🐦", titel: "Über der Decke", text: "Eine Möwe (<i>seagull</i>) stiehlt ein Sandwich und fliegt damit davon. Das Mädchen zeigt auf sie, der Vater lacht." },
          { ic: "🧒", titel: "Vorne links", text: "Ein Junge lässt einen Drachen steigen." },
          { ic: "🏄", titel: "In der Mitte", text: "Ein Surfer (<i>surfer</i>) trägt sein Brett ins Wasser. Die Wellen sind hoch." },
          { ic: "⛵", titel: "Hinten rechts", text: "Ein rot-weißer Leuchtturm steht auf einem Felsen. Davor fährt ein kleines Segelboot." },
          { ic: "☀️", titel: "Himmel", text: "Blauer Himmel mit ein paar weißen Wolken." }
        ] },
        { art: "merke", kopf: "YOUR CHECKLIST", html: `<ol><li><b>Overview:</b> <i>In the picture I can see …</i></li><li><b>Where:</b> <i>in the foreground · on the left · next to · between</i></li><li><b>What is happening:</b> <i>The man is … · The girl is …</i></li><li><b>Guess and opinion:</b> <i>Maybe … · I think … · I'd like to … because …</i></li></ol>` },
        ...[{ nur: "R", min: 40 }, { nur: "M", min: 60 }].map(v => ({
          art: "schreiben", id: "bild-b", nur: v.nur, tag: "Your task", titel: "Describe picture B", min: v.min,
          auftrag: `<p><b>Describe picture B</b> (${v.min} words or more) – as if you answered the examiner.${v.nur === "R" ? ` <span class="de">Schreibe mindestens ${v.min} Wörter. Gehe die Checkliste durch.</span>` : ""}</p><p>Say what you can see, where things are, what is happening, and what you think.</p>`,
          starter: ["In the picture I can see …", "In the foreground there is … / On the left …", "In the middle a man is …", "In the background there is …", "Maybe … / I think …", "I'd like to … because …"],
          kriterien: ["Du gibst am Anfang einen Überblick (In the picture I can see …).", "Du sagst mindestens zweimal, wo etwas ist (zum Beispiel in the foreground, on the left, next to, behind).", "Du sagst mindestens zweimal, was gerade passiert (present progressive: … is …ing).", "Du gibst eine Vermutung oder deine Meinung (Maybe …, I think …, I'd like to … because …).", "Du schreibst ganze Sätze."]
        }))
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["In a picture-based interview you should answer with single words only.", false],
            ["If you don't understand a question, you can ask the examiner to say it again.", true],
            ["You use the present progressive to say what is happening in the picture.", true],
            ["When the examiner asks \"Would you like to be there?\", it is enough to say only \"yes\".", false],
            ["Words like \"in the foreground\" and \"between\" help you say where things are.", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can describe a picture in steps, guess, give your opinion and ask when you don't understand. Now practise it aloud with a partner and a new picture." }
  });
})();
