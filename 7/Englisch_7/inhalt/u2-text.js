/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Text: A comic – The loyal dog of Edinburgh
   (eine Bildergeschichte aus Schottland in acht Bildfeldern lesen: aus Bildern vermuten, lesen, Reihenfolge, Textstellen finden,
   Meinung mit Begründung sagen, Fragen beantworten, simple past im Comic und present perfect in den Sprechblasen erkennen,
   zum Schluss eine kleine Wahlaufgabe schreiben)
   Buchprinzip (BUCH-UNIT2, Abschnitt Text): Bilder ansehen und vermuten, worum es geht → Comic lesen → Meinung mit Begründung →
   Fragen zum Text beantworten → Wahlaufgabe (kurze Biografie ODER Poster). Hier mit eigener, wahrer Geschichte (Greyfriars Bobby,
   Edinburgh – nur gesicherte Fakten, die vierzehn Jahre am Grab ausdrücklich als Legende); besser: Vorhersage mit Feldkarten,
   Reihenfolge der Felder mit sofortiger Rückmeldung, Textstellen finden (R7 mit Feldnummer), Meinungswörter sortieren und
   Satzrahmen (R7), Hilfen in Stufen, Förder-Link zum present perfect, KI-Rückmeldung zur Wahlaufgabe.
   LehrplanPLUS E7 1.1 Leseverstehen (Bildergeschichte, Einzelheiten und Reihenfolge), E7 2 Schreiben (Steckbrief, kurze Biografie,
   Postertext), E7 5 (Schottland: Land und Leute), E7 Grammatik simple past (Erzählerzeilen) und present perfect (Sprechblasen, G6).
   Texte: „The loyal dog of Edinburgh“ (texte/u2/u2-text-comic-r.js und -m.js; R7 220 Wörter, M7 346 Wörter). Greyfriars Bobby gab
   es wirklich (Skye Terrier, Herrchen John Gray starb 1858, Greyfriars Kirkyard, Bobby starb 1872, kleine Statue in Edinburgh,
   Besucher legen Stöcke ab); die vierzehn Jahre beim Grab sind die Legende.
   Förder-Link: present perfect -> unit2/extra/have-has-participle.html.
   m7: zwei Aufgaben (Warum haben die Leute geholfen? · Sprechblase für Bobby im present perfect); für 7R freiwillig.
   Wahlaufgabe: R7 Steckbrief-Karte über Bobby (fünf Sätze), M7 kurze Biografie ODER Postertext (Wahl im Auftrag).
   // BILDER: (Bildergeschichte in acht Feldern, ohne lesbaren Text im Bild – Erzählerzeile und Sprechblase stehen im Text)
   // 1. Feld 1 (Station 1, Vorentlastung): Edinburgh um 1850 – ein älterer Mann im langen Mantel geht mit einem kleinen, struppigen
   //    grauen Skye Terrier durch eine enge Altstadtgasse mit Kopfsteinpflaster, im Hintergrund Häuser und eine Burg auf dem Felsen.
   // 2. Feld 2: Der Mann und der Terrier gehen nebeneinander durch eine belebte Straße; zwei Nachbarinnen mit Körben bleiben stehen
   //    und lächeln ihnen nach.
   // 3. Feld 3: Auf einem alten Friedhof mit Steinen und hohen Bäumen steht eine kleine Trauergruppe in dunkler Kleidung an einem
   //    frischen Grab; der kleine Terrier sitzt traurig am Rand, eine Frau beugt sich zu ihm.
   // 4. Feld 4 (Station 1, Vorentlastung): Früher Morgen, Nebel zwischen den Grabsteinen – der Terrier liegt eingerollt neben dem
   //    Grab, ein Friedhofsarbeiter mit Schaufel schaut erstaunt.
   // 5. Feld 5: Ein Junge und ein Mann versuchen, den Terrier an einer Leine vom Friedhofstor wegzuziehen; der Hund stemmt die
   //    Pfoten in den Boden und schaut zurück zum Grab.
   // 6. Feld 6 (Station 1): Ein Mädchen stellt eine Schale mit Wasser und einen Napf mit Futter neben das Grab, zwei weitere
   //    Nachbarn sehen zu; der Terrier schnuppert.
   // 7. Feld 7: Winter – Schnee auf den Grabsteinen, der kleine Terrier sitzt am Grab, die Schneeflocken fallen, ein alter Mann
   //    mit Schal bleibt stehen und schaut ihn an.
   // 8. Feld 8 (Station 1): Heute – eine kleine Bronzestatue eines Terriers auf einem Sockel an einer Straßenecke; Besucher
   //    fotografieren sie, ein Kind legt einen Stock vor ein Grab im Hintergrund. */
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

  const FOERDER_PP = { href: "unit2/extra/have-has-participle.html", text: "Extra: have/has + 3. Form" };

  D7Kit.seite({
    id: "u2-text",
    titel: "Text: A comic – The loyal dog of Edinburgh",
    einleitung: "A small dog, a graveyard and a very long wait: you read a comic in eight pictures about <b>Bobby</b> from Edinburgh. You say what you think, answer questions, find verbs in the <b>simple past</b> and the <b>present perfect</b> – and then you write about Bobby.",
    zeit: "etwa 45 Minuten",
    ziele: ["🖼️ I look at pictures and say what the story could be about.", "📖 I read a comic and find the important facts.", "💬 I say what I think and give a reason.", "✍️ I write a short text about Bobby."],
    thema: "Unit 2 Fun in Wales and Scotland: Text (Comic aus Schottland, Meinung, Wahlaufgabe)",
    quiz: { profi: "Comic pro" },
    glossar: {
      loyal: ["loyal", "treu: Ein treuer Freund bleibt bei dir, auch wenn es schwer ist."],
      grave: ["grave", "Grab: Dort liegt ein Mensch, der gestorben ist."],
      graveyard: ["graveyard", "Friedhof: Ein Ort mit vielen Gräbern. In Schottland sagt man für einen alten Friedhof bei einer Kirche auch kirkyard."],
      legend: ["legend", "Legende, Sage: Eine Geschichte, die man sich seit langer Zeit erzählt. Man weiß nicht, ob jedes Detail wirklich stimmt."],
      statue: ["statue", "Statue: eine Figur aus Stein oder Metall, die zum Beispiel einen Menschen oder ein Tier zeigt."],
      terrier: ["Skye terrier", "Ein Skye Terrier ist ein kleiner Hund mit langem Fell. Die Hunderasse kommt ursprünglich von der Isle of Skye in Schottland."],
      narrator: ["narrator", "Erzähler oder Erzählerin: Die Person, die in einer Geschichte sagt, was passiert."],
      opinion: ["opinion", "Meinung: Das denkst du über etwas. Du sagst dazu auch, warum."],
      simplepast: ["simple past", "Die einfache Vergangenheit: Man erzählt damit, was früher passiert ist, zum Beispiel lived, went, died."],
      participle: ["past participle", "Die 3. Form des Verbs, zum Beispiel lost, been, left. Sie steht nach have oder has."]
    },
    haupttext: { R: "u2-text-comic-r", M: "u2-text-comic-m" },
    stationen: trenne([
      { kurz: "Look first", ober: "Before you read", titel: "What is the story about?", teile: [
        { art: "text", html: `<p class="lead">A comic tells a story in pictures. Each picture has a line from the <button class="term" data-t="narrator">narrator</button> and a speech bubble. The title of this comic is <b>The loyal dog of Edinburgh</b>. <span class="de">Ein Comic erzählt mit Bildern. Zu jedem Bild gehört eine Zeile vom Erzähler und eine Sprechblase. Der Titel heißt „Der treue Hund von Edinburgh“.</span></p>` },
        { art: "karten", karten: [
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-1.jpg\" width=\"722\" height=\"466\" alt=\"An old man in a long coat walks with a small grey terrier through an old-town lane.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 1", text: "A man and a small dog walk through the old streets of a city." },
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-4.jpg\" width=\"724\" height=\"468\" alt=\"Early morning mist: the terrier lies next to the grave; a graveyard worker looks surprised.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 4", text: "Early in the morning. A small dog lies next to a grave in a graveyard." },
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-6.jpg\" width=\"722\" height=\"470\" alt=\"A girl puts a bowl of water and food next to the grave; the terrier sniffs at it.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 6", text: "People put a bowl of food and a bowl of water next to the dog." },
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-8.jpg\" width=\"722\" height=\"470\" alt=\"Visitors take photos of a small bronze statue of a terrier on a street corner.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 8", text: "Today. Visitors stand around a small statue of a dog." }
        ] },
        { art: "offen", id: "vorhersage", tag: "Predict", titel: "What could the story be about?",
          lead: `Look at the four pictures. Write <b>one or two sentences</b>. <span class="de">Was meinst du: Worum geht es in der Geschichte? Rate ruhig – später siehst du, ob du recht hattest.</span>`,
          fragen: [{ q: "What do you think happens in the story?", m: "I think the story is about a dog that stays at a grave because he is sad and misses his friend.", k: ["dog|Bobby|terrier", "grave|graveyard|friend|owner|master|man", "stay|wait|sad|miss|alone|lie|lies|stays"], min: 2 }],
          tipp: "Start like this: I think the story is about … / I think the dog …" },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du im Comic. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["loyal", "treu"], ["grave", "Grab"], ["graveyard", "Friedhof"], ["legend", "Legende, Sage"], ["statue", "Statue"], ["stick", "Stock"]],
          hilfen: ["Fang mit dem Wort an, das du sicher kennst.", "Zwei Wörter gehören zu einem Ort, an dem ein Mensch begraben ist.", "Tippe zuerst statue – das Wort klingt wie im Deutschen."] }
      ] },
      { kurz: "The comic", ober: "Reading", titel: "Read the comic", teile: [
        { art: "text", html: `<p class="lead">Read the comic once. Look at the pictures in your head. <span class="de">Lies den Comic einmal ganz durch. Bleib nicht an unbekannten Wörtern hängen. Hinweis: Die Geschichte von Bobby ist wahr – nur die vierzehn Jahre am Grab erzählt man als Legende.</span></p>` },
        { art: "lesetext", lesetext: { R: "u2-text-comic-r", M: "u2-text-comic-m" } },
        { art: "karten", karten: [
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-2.jpg\" width=\"724\" height=\"466\" alt=\"The man and the terrier walk through a busy street; two neighbours smile.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 2", text: "What is happening? Say it in one sentence." },
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-3.jpg\" width=\"722\" height=\"468\" alt=\"A small group stands at a grave in a graveyard; the terrier sits at the edge.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 3", text: "What is happening? Say it in one sentence." },
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-5.jpg\" width=\"724\" height=\"470\" alt=\"A boy and a man try to pull the terrier away from the graveyard gate.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 5", text: "What is happening? Say it in one sentence." },
          { ic: "<img class=\"zoomable\" src=\"images/u2/u2-comic-7.jpg\" width=\"724\" height=\"470\" alt=\"Winter: snow on the gravestones, the terrier sits at the grave; an old man stops.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Picture 7", text: "What is happening? Say it in one sentence." }
        ] },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is the comic about?",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "What is the comic about?", o: ["A small dog that stays at his friend's grave", "A dog that gets lost in a big city", "A man who builds a statue of his dog", "A dog that goes to school"], a: 0,
              e: "Bobby goes to John Gray's grave and stays there." },
            { q: "What does the comic say about the fourteen years?", o: ["It is what the legend says – nobody can be sure about every detail", "Everybody has proved them", "Bobby stayed there for fourteen days", "John Gray told the story himself"], a: 0,
              e: "The narrator says \"the legend says\" and \"nobody can be sure about every detail\"." }
          ] },
        { art: "ordnen", id: "reihenfolge", tag: "Order the pictures", titel: "What happens first?",
          lead: `Put the events in the right order. <span class="de">Bringe die Bildfelder in die richtige Reihenfolge.</span>`,
          schritte: [
            "John Gray and Bobby walk through the old town.",
            "John Gray dies and his friends bury him.",
            "Bobby comes to the grave the next morning.",
            "People try to send Bobby home, but he comes back.",
            "People nearby bring Bobby food and water.",
            "Bobby dies, and today there is a statue of him."
          ],
          hilfen: ["Lies die Aussagen und frage dich: Was passiert vor dem Tod von John Gray, was danach?", "Das Ende steht heute, nicht in der Vergangenheit.", "Lies im Comic nach: Die Bilder sind schon in der richtigen Reihenfolge."] },
        ...zwei({ art: "beleg", id: "zeilen", tag: "Find the line", titel: "Where does the comic say that?" },
          "Tap the lines in the comic.", "Tippe die Zeilen an, in denen die Antwort steht.", { hilfenR: ["Lies die Frage und suche ein passendes Wort im Comic.", "Die Antwort steht im Satz des Erzählers (Narrator)."] }).map((t, i) => Object.assign(t, i === 0
          ? { lesetext: "u2-text-comic-r", fragen: [
              { q: "When did John Gray die?", zeilen: [7, 7], e: "In 1858 John Gray died.", tipp: "Look at Picture 3." },
              { q: "What did people nearby give Bobby?", zeilen: [16, 17], e: "People nearby gave Bobby food and water.", tipp: "Look at Picture 6." },
              { q: "What do visitors put near Bobby's grave?", zeilen: [23, 24], e: "Visitors put sticks near the grave.", tipp: "Look at Picture 8." }
            ] }
          : { lesetext: "u2-text-comic-m", fragen: [
              { q: "When did John Gray die, and where did his friends bury him?", zeilen: [9, 11], e: "He died in 1858 and was buried in Greyfriars Kirkyard.", tipp: "Look at the narrator's line in Picture 3." },
              { q: "Who began to look after Bobby?", zeilen: [21, 23], e: "The people who lived and worked nearby gave him water and food.", tipp: "Look at the narrator's line in Picture 6." },
              { q: "Why do visitors put sticks next to Bobby's grave?", zeilen: [32, 33], e: "They want to remember the loyal dog.", tipp: "Look at the end of Picture 8." }
            ] }))
      ] },
      { kurz: "Your opinion", ober: "Speaking", titel: "Did you like the story?", teile: [
        { art: "merke", kopf: "SAYING WHAT YOU THINK", html: `<p>Say what you think – and <b>always</b> say why:<br><i>I liked the story <b>because</b> …</i><br><i>I didn't like … <b>because</b> …</i></p><p>Good words: <i>great, lovely, exciting, interesting, boring, silly, confusing</i>. <span class="de">Mit „because“ gibst du einen Grund an.</span></p>` },
        { art: "sort", id: "meinung-woerter", nur: "R", tag: "Opinion words", titel: "Good or not so good?",
          lead: `Put the words into the right box. <span class="de">Welche Wörter sagen „gut“, welche „nicht so gut“?</span>`,
          buckets: ["I liked it", "I didn't like it"],
          items: [{ t: "great", b: 0 }, { t: "lovely", b: 0 }, { t: "exciting", b: 0 }, { t: "interesting", b: 0 },
                  { t: "boring", b: 1 }, { t: "silly", b: 1 }, { t: "confusing", b: 1 }, { t: "too long", b: 1 }],
          hilfen: ["Lies jedes Wort laut und frage: Ist das ein Lob?", "boring und silly kennst du aus Unit 1.", "Vier Wörter gehören in jeden Kasten."] },
        { art: "offen", id: "meinung", nur: "R", tag: "Your opinion", titel: "I liked it because …",
          lead: `Write <b>one sentence</b>. Say if you liked the story and why. <span class="de">Schreibe einen Satz: Hat dir die Geschichte gefallen? Warum (nicht)?</span>`,
          fragen: [{ q: "Did you like the story about Bobby? Why (not)?", m: "I liked the story because it was lovely and sad.", k: ["liked|like|love|loved|didn't like|did not like|don't like|enjoyed", "because", "story|dog|Bobby|comic|picture|pictures|sad|lovely|great|exciting|interesting|boring|silly|confusing|long"], min: 3 }],
          tipp: "Use the frame: I liked the story because … or I didn't like the story because …",
          hilfen: ["Fang an mit: I liked the story …", "Nimm ein Wort aus dem Kasten: lovely, sad, exciting, boring …", "Beispiel für den Aufbau: I liked the story because it was …"] },
        { art: "offen", id: "meinung", nur: "M", tag: "Your opinion", titel: "Do you like the story?",
          lead: `Say what you think about the story. Give <b>two reasons</b>.`,
          fragen: [{ q: "Did you like the story about Bobby? Give two reasons.", m: "I liked the story because it shows how loyal a dog can be. I also liked it because the pictures are easy to follow.", k: ["liked|like|love|loved|didn't like|did not like|don't like|enjoyed", "because|since|reason", "story|dog|Bobby|comic|picture|pictures|loyal|sad|friend|legend|interesting|boring"], min: 3 }],
          tipp: "Use because twice, or because and also: I liked … because … I also liked … because …" }
      ] },
      { kurz: "Questions", ober: "Understanding", titel: "Answer the questions", teile: [
        ...zwei({ art: "mc", id: "fragen", tag: "Questions", titel: "Answer the questions" },
          "Tick the correct answer. The picture number helps you.", "Das Bild in Klammern hilft dir: Dort steht die Antwort.", { hilfenR: ["Schau dir im Comic das Bild an, dessen Nummer in Klammern steht.", "Lies nur die Zeile des Erzählers (Narrator)."] }).map((t, i) => Object.assign(t, i === 0
          ? { fragen: [
              { q: "Who was Bobby? (Picture 1)", o: ["A small Skye terrier", "A big police horse", "A cat from Edinburgh", "A boy from Edinburgh"], a: 0, e: "Bobby was a Skye terrier, a small dog." },
              { q: "Where did Bobby lie down the next morning? (Picture 4)", o: ["Next to the grave", "In a park near the castle", "At school", "In his old house"], a: 0, e: "He came to the grave and lay down next to it." },
              { q: "Who helped Bobby? (Picture 6)", o: ["People nearby", "A doctor", "Nobody", "A teacher"], a: 0, e: "People nearby gave him food and water." }
            ] }
          : { fragen: [
              { q: "What did Bobby do on the morning after John Gray's friends buried him?", o: ["He went to the grave and lay down next to it", "He ran away from Edinburgh", "He looked for a new owner", "He waited at the front door of the house"], a: 0, e: "Bobby went to the grave and lay down next to it." },
              { q: "What happened when people tried to take Bobby home?", o: ["He always found his way back to the graveyard", "He stayed at home from then on", "He found a new friend there", "He went to live with a neighbour"], a: 0, e: "He always found his way back to the graveyard." },
              { q: "How long does the legend say Bobby stayed at the grave?", o: ["For fourteen years", "For fourteen days", "For four years", "For one winter"], a: 0, e: "According to the legend, Bobby stayed for fourteen years." }
            ] })),
        { art: "offen", id: "warum", m7: true, tag: "Challenge · Your words", titel: "Why did people help Bobby?",
          lead: `Answer in English. One or two sentences are enough. <span class="de">Antworte mit eigenen Worten – nicht abschreiben.</span>`,
          fragen: [{ q: "Why do you think the people nearby helped Bobby?", m: "I think they helped him because he was alone and sad, and they felt sorry for him.", k: ["because|since|so", "alone|sad|sorry|loyal|friend|hungry|dog|stay|stayed|wait|waited"], min: 2 }],
          tipp: "Think about Bobby: What was he doing every day? Start like this: I think they helped him because …" },
        { art: "offen", id: "sprechblase", m7: true, tag: "Challenge · Speech bubble", titel: "What would Bobby say?",
          lead: `Write <b>one sentence</b> for a speech bubble. Bobby talks about now. Use the <b>present perfect</b>. <span class="de">Was würde Bobby sagen? Schreibe einen Satz mit have/has + 3. Form.</span>`,
          fragen: [{ q: "What would Bobby say in Picture 5? Use the present perfect.", m: "I have lost my best friend, and I have stayed here all day.", k: ["have|'ve|’ve|has", "lost|stayed|waited|been|seen|had|eaten|missed|lain|slept|left|loved|done"], min: 2 }],
          tipp: "Start like this: I have … (lost / stayed / waited / been …).", foerder: FOERDER_PP }
      ] },
      { kurz: "Language", ober: "Simple past and present perfect", titel: "Find the verbs in the comic", teile: [
        { art: "merke", kopf: "NARRATOR AND SPEECH BUBBLES", html: `<p>In the comic the <b>narrator</b> tells what happened long ago – in the <button class="term" data-t="simplepast">simple past</button>: <i>lived, went, died, came, lay, gave</i>. Many verbs are irregular: <i>go – went, give – gave, lie – lay, come – came</i>.</p><p>The people in the <b>speech bubbles</b> talk about now – with the <b>present perfect</b>: <i>have / has + <button class="term" data-t="participle">past participle</button></i>.</p><p><span class="de">Der Erzähler sagt, was damals geschah (simple past). Die Leute in den Sprechblasen reden von jetzt (present perfect).</span></p>` },
        { art: "luecke", id: "simple-past", tag: "Simple past", titel: "Complete the story of Bobby",
          lead: `Complete the sentences with verbs from the box. <span class="de">Setze die Verben in der Vergangenheit ein. Ein Wort bleibt übrig.</span>`,
          absaetze: [
            ["More than a hundred and fifty years ago, a small Scottish dog ", { g: "lived" }, " in a big city."],
            ["Every day the dog and his friend ", { g: "went" }, " out together."],
            ["One cold night the dog ", { g: "lay" }, " down in the grass and fell asleep."],
            ["A woman ", { g: "gave" }, " him a bowl of milk."],
            ["In the morning he ", { g: "found" }, " his way back to the same place."],
            ["The dog ", { g: "died" }, " when he was very old."]
          ], extra: ["go"],
          hilfen: ["Lies zuerst alle Sätze – jedes Verb passt nur zu einem Satz.", "Vier Verben sind unregelmäßig: go – went, lie – lay, give – gave, find – found.", "Der letzte Satz ist traurig: Welches Verb heißt „sterben“?"] },
        { art: "sort", id: "past-oder-perfect", tag: "Narrator or bubble?", titel: "Sort the sentences",
          lead: `Put each sentence into the right box. <span class="de">Erzähler (damals) oder Sprechblase (jetzt)?</span>`,
          buckets: ["Narrator · simple past", "Speech bubble · present perfect"],
          items: [{ t: "The terrier walked through the old town.", b: 0 }, { t: "The people helped the dog.", b: 0 }, { t: "He found his way back.", b: 0 },
                  { t: "The dog has waited all day.", b: 1 }, { t: "Someone has brought a bowl of water.", b: 1 }, { t: "We have never seen such a loyal dog.", b: 1 }],
          foerder: FOERDER_PP,
          hilfen: ["Suche have oder has in jedem Satz.", "Ein Satz mit „have/has + 3. Form“ gehört in die Sprechblase.", "Sätze ohne have/has erzählen, was früher war."] },
        { art: "markieren", id: "perfekt", tag: "Find it", titel: "Which two words make the present perfect?", foerder: FOERDER_PP,
          finde: "have/has and the past participle", toleranz: 0,
          satz: "The old man [[has]] [[seen]] the little dog again.",
          e: "has + seen = present perfect. Seen is the past participle of see.",
          hilfen: ["Das present perfect besteht aus zwei Wörtern.", "Das erste ist have oder has.", "Das zweite ist die 3. Form von see – sie klingt anders als saw."] },
        { art: "mc", id: "perfekt-check", tag: "Check", titel: "Which sentence is correct?", foerder: FOERDER_PP,
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "Which sentence is correct?", o: ["The dog has eaten all his food.", "The dog have eaten all his food.", "The dog has ate all his food.", "The dog eaten all his food."], a: 0,
              e: "Bei he, she, it steht has, danach die 3. Form: eaten." },
            { q: "The visitors ____ already left some sticks.", o: ["have", "has", "did", "are"], a: 0,
              e: "Bei they, we und the visitors steht have. Has gehört zu he, she, it." }
          ] }
      ] },
      { kurz: "Your choice", ober: "Writing", titel: "Choose your writing task", teile: [
        { art: "text", html: `<p class="lead">Now you write about Bobby. <span class="de">Jetzt schreibst du selbst über Bobby. Die Fakten stehen im Comic.</span></p>` },
        { art: "merke", kopf: "HELP FOR YOUR TEXT", html: `<p><b>Facts:</b> a small dog · a Skye terrier · lived in Edinburgh · his friend John Gray died in 1858 · stayed at the grave · people gave him food and water · died in 1872 · there is a small statue today<br><b>Legend:</b> The legend says … · Nobody can be sure about every detail.<br><b>Linking words:</b> first · then · after that · but · because · today<br><b>Verbs in the simple past:</b> lived, went, died, came, stayed, gave</p>` },
        { art: "schreiben", id: "wahl", nur: "R", tag: "Your task", titel: "Fact file: Bobby", min: 30,
          auftrag: `<p><b>Write a fact file about Bobby</b> – five sentences. <span class="de">Schreibe eine Steckbrief-Karte über Bobby: fünf Sätze, mindestens 30 Wörter.</span></p><ul><li>Name and kind of dog</li><li>City</li><li>His friend</li><li>What he did</li><li>Today</li></ul>`,
          starter: ["Bobby was a small …", "He lived in …", "His friend was …", "After John Gray died, Bobby …", "Today there is …"],
          kriterien: ["Du nennst Bobbys Namen und sagst, was für ein Hund er war.", "Du sagst, in welcher Stadt er lebte.", "Du nennst John Gray und sagst, dass er starb.", "Du schreibst, was Bobby danach tat.", "Du sagst, was es heute in Edinburgh gibt. Die Verben in der Vergangenheit sind richtig (lived, died, stayed)."] },
        { art: "schreiben", id: "wahl", nur: "M", tag: "Your task", titel: "Choose A or B", min: 60,
          auftrag: `<p><b>Choose one task</b> (60 words or more):</p><p><b>A) A short biography of Bobby.</b> Tell his story in the simple past: who he was, what happened, and what you can see in Edinburgh today.</p><p><b>B) A poster text about Bobby.</b> Write a title, a short text for visitors and one sentence about the legend.</p><p>Write the letter of your task (A or B) at the start.</p>`,
          starter: ["A) Bobby was a small …", "He lived in Edinburgh with …", "After John Gray died in 1858, Bobby …", "The legend says that …", "Today visitors can see …", "B) Come and meet Bobby, the loyal dog of Edinburgh!"],
          kriterien: ["Du sagst am Anfang, ob du Aufgabe A oder B gewählt hast.", "Du nennst wahre Fakten: Bobby, John Gray, Edinburgh, Greyfriars Kirkyard, 1858 oder 1872.", "Du schreibst über die Vergangenheit im simple past (lived, died, stayed, gave) – ein Satz darf im present perfect stehen.", "Du kennzeichnest die Legende als Legende (The legend says … / Nobody can be sure …).", "Du sagst, was es heute in Edinburgh gibt (Statue, Besucher, Stöcke) und der Text hat mindestens 60 Wörter."] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Bobby stayed at the grave for only one night.", false],
            ["There is a small statue of Bobby in Edinburgh today.", true],
            ["The narrator tells the story in the simple past.", true],
            ["The people in the speech bubbles use the present perfect: \"He has lost his friend.\"", true],
            ["Nobody has any doubt about the fourteen years.", false]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a comic, say what you think, find the simple past and the present perfect, and write about a true story from Scotland." }
  });
})();
