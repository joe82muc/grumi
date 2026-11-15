/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Checkout: Fit for the test: Unit 1 (Kürzel A15)
   (Wiederholung der ganzen Unit vor der Probe: sechs Ich-kann-Sätze mit je einer Mini-Aufgabe und einer Selbsteinschätzung,
   Wörter aus allen Abschnitten, die Grammatik der Unit – G1 simple past, G2 simple present Aussagen/Verneinung, G3 Fragen und
   Kurzantworten, G4 Possessivpronomen – mit Fehlertext, und als Unit task eine Broschüre über eine Stadt in England in sechs
   Schritten, der eigene Teil im Schreibtrainer)
   Buchprinzip (BUCH-UNIT1.md, Abschnitt „Checkout“, nur Aufbau, nichts übernommen): Checklist mit den sechs Kann-Zielen der Unit,
   je mit typischen Wendungen und einem Balken zum Selbsteinschätzen; Unit task „Broschüre“ in der Gruppe in sechs Schritten: einen
   Ort wählen, Informationen suchen (Study skills: Internet-Infos prüfen), die Informationen ordnen (Texte, Bilder, Karte; Notizzettel
   der Beispielgruppe), den eigenen Teil schreiben und zusammenfügen, prüfen (Englisch, Wörterbuch; Writing skills: Bindewörter),
   vorstellen (Gallery walk: sagen, welche Stadt man besuchen möchte und warum). Andere Stadt als im Buch: Canterbury statt einer
   Südküstenstadt mit Pavillon und Pier; eigene Schritte und Wendungen.
   Besser: nach jedem Ich-kann-Satz sofort eine kleine Aufgabe mit Rückmeldung und eine Selbsteinschätzung nach dem Ergebnis
   (grün/gelb/rot mit dem passenden Extra), echte Wiederholung von G1–G4 mit Förder-Links an jedem Grammatikteil und Fehlertext,
   bei der Broschüre: Schritte ordnen, eine falsche Internet-Info prüfen, die Notizen der Beispielgruppe auf Seiten verteilen,
   Bindewörter üben, dann der eigene Teil im Schreibtrainer mit Checkliste und KI-Rückmeldung (schreibt den Text nicht neu, Fassungen
   für die Lehrkraft) und Sätze aus dem Entwurf verbessern.
   Differenzierung: R7 mit deutschen Hilfen, Hilfen in Stufen, drei Fehler im Fehlertext müssen stimmen (von vier), Broschürenteil
   ab 40 Wörtern mit sichtbaren Satzanfängen; M7 ohne deutsche Hilfen, längere Lückentexte (mehr Formen, Verneinung, Fragen mit
   Fragewort), alle vier Fehler, Broschürenteil ab 60 Wörtern mit drei Sehenswürdigkeiten. Plus für M7 (m7): zwei eigene Sätze
   (simple past und he/she/it -s) und zwei Sätze aus Samis Entwurf verbessern (für R7 freiwillig).
   LehrplanPLUS E7 1.1 Leseverstehen (Notizen, kurze Texte), E7 2.2 Schreiben (Broschüre: Informationen ordnen, Texte planen,
   schreiben, überarbeiten; Bindewörter), E7 1.3 Sprechen (Gallery walk), E7 Sprachmittlung (an einer Kasse helfen), E7 3 (G1 simple
   past, G2 simple present, G3 Fragen und Kurzantworten, G4 possessive pronouns), E7 4 (Informationen aus dem Internet prüfen),
   E7 5 (England: Orte, Schule, Geschichte, Kultur).
   Texte: keine eigenen Lese- oder Hörtexte; kurze Material-Texte stehen in den Aufgaben. Die Beispielgruppe Harriet, Joel, Nadia
   und Sami ist erfunden; Rafi und Granny Joan kommen aus der Story dieser Unit (u1-story). Sachaussagen nur gesichert: die Römer
   kamen vor etwa 2000 Jahren nach Britannien, bauten Straßen, Städte und Kastelle, Soldaten aus vielen Ländern, Briefe auf dünnen
   Holztäfelchen; Canterbury in Kent im Südosten Englands, etwa eine Stunde mit dem Zug von London, kleine Stadt mit mehr als 50 000
   Einwohnern, Kathedrale über 900 Jahre alt, das Westgate (Stadttor) über 600 Jahre alt, Teile der alten Stadtmauer, Bootsfahrten
   auf dem Fluss, Westgate Gardens am Fluss.
   Förder-Links: simple past → unit1/extra/simple-past.html, he/she/it -s → unit1/extra/he-she-it.html, Fragen mit do/does →
   unit1/extra/do-does-questions.html, Possessivpronomen → unit1/extra/possessive-pronouns.html.
   Wörter der Unit (alle Abschnitte des Trainers) kommen bewusst vor: coast, exhibition, traffic, quiet, noisy, coal, mine, the past,
   north, to take (dauern), a.m., to catch (a bus), to act, healthy, builder, wave, artist, brochure, tour, culture.
   BILDER:
   1. Station „I can“ (Vorentlastung): sechs kleine Bilder in einer Reihe – Postkarte mit Strand, ein ruhiges Dorf mit Bushaltestelle,
      ein Schulbus am Morgen, ein dünnes Holztäfelchen mit alter Schrift, eine Kasse mit Familie, ein Cricketball vor drei Holzstäben
      (ohne Schrift, ohne Marken).
   2. Station „Unit task“ (Sprechanlass): vier Kinder am Gruppentisch mit Fotos einer großen alten Kathedrale und eines Stadttors,
      einer Karte, Schere und Kleber; eins schreibt, eins zeigt auf ein Foto; eine halbfertige Faltbroschüre liegt in der Mitte. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
const SP = { href: "unit1/extra/simple-past.html", text: "Extra: simple past Schritt für Schritt" };
const HSI = { href: "unit1/extra/he-she-it.html", text: "Extra: he, she, it – das s muss mit" };
const DODOES = { href: "unit1/extra/do-does-questions.html", text: "Extra: Fragen mit do und does" };
const POSS = { href: "unit1/extra/possessive-pronouns.html", text: "Extra: mine, yours, his, hers" };
D7Kit.seite({
  id: "u1-checkout",
  titel: "Checkout · Fit for the test: Unit 1",
  einleitung: "The test is coming! In this module you check what you can do after <b>Unit 1</b>: you test yourself on six things, revise words and the grammar of the unit, and then you do the <b>Unit task</b> – you plan a <b>brochure</b> about a town in England and write your part of it. Du siehst sofort, was schon sitzt und was du noch üben solltest.",
  zeit: "etwa 45 Minuten",
  ziele: ["✅ I check what I can do after Unit 1.", "📚 I know the important words of the unit.", "🧩 I use the simple past, the simple present, questions with do/does and mine, yours, his, hers … correctly.", "🗺️ I plan a brochure in a group: I order information and check it.", "✍️ I write my part of a brochure with linking words."],
  thema: "Unit 1 Out and about in England, Checkout: Wiederholung der ganzen Unit und Unit task Broschüre über eine Stadt in England",
  quiz: { profi: "Fit pro" },
  glossar: {
    checklist: ["checklist", "Eine checklist ist eine Liste mit Punkten, die man abhakt, wenn man sie kann."],
    brochure: ["brochure", "Eine brochure ist eine Broschüre: ein kleines Heft mit Texten, Fotos und einer Karte, zum Beispiel über eine Stadt."],
    unittask: ["unit task", "Die unit task ist die große Aufgabe am Ende der Unit. Ihr arbeitet dabei in der Gruppe."],
    linking: ["linking words", "Linking words sind Bindewörter wie and, but, because, so und after that. Sie verbinden Sätze."],
    gallery: ["gallery walk", "Beim gallery walk liegen alle Arbeiten auf den Tischen. Ihr geht herum wie in einer Ausstellung und seht sie euch an."],
    possessive: ["possessive pronoun", "Ein possessive pronoun (mine, yours, his, hers, ours, theirs) steht ohne Nomen danach: The bag is mine."],
    cathedral: ["cathedral", "Eine cathedral ist eine große, wichtige Kirche, ein Dom."],
    gate: ["city gate", "Ein city gate ist ein Stadttor. Früher kam man nur durch solche Tore in die Stadt."],
    fort: ["fort", "Ein fort ist ein Kastell, ein befestigtes Lager für Soldaten."]
  },
  stationen: [
    { kurz: "I can", ober: "Check yourself", titel: "What can I do now?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>our Unit 1 wall</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-co-wand.jpg\" width=\"1280\" height=\"853\" alt=\"A pin board in a classroom with photos from Unit 1: a seaside town, a canal boat, sheep in the hills, an English school, a Roman wall, a cricket match, a steel angel on a hill and a cathedral; a girl and a boy look at it.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What do you remember from Unit 1? Say one sentence about a photo. <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">At the end of Unit 1 you can do six things. Don't just say \"yes\" – <b>try it</b>! After each sentence there is a small task. <span class=\"de\">Lies die sechs Sätze. Nach jedem Satz kommt eine kleine Aufgabe. So siehst du gleich, ob es klappt.</span></p>" },
      { art: "merke", kopf: "CHECKLIST · I CAN …", html: "<ol><li><b>… talk about a holiday in England.</b> <i>We went to … · It was … · We saw …</i></li><li><b>… talk about my home town in detail.</b> <i>It's in the north of … · It's quiet / noisy · There aren't many buses.</i></li><li><b>… talk about life at school.</b> <i>I catch the bus at … · It takes … minutes · My favourite subject is …</i></li><li><b>… read a story about an event in history.</b> <i>What happened? When? – That's wrong. It was …</i></li><li><b>… help a tourist at a ticket office.</b> <i>She would like … · How much is …? · Is there a family ticket?</i></li><li><b>… understand a story and its turning point.</b> <i>What happens? What changes everything?</i></li></ol>" },
      { art: "mc", id: "k1", tag: "I can … 1/6", titel: "A holiday in England", lead: "<b>A postcard from Nadia:</b> \"Last week we ____ to the coast. We ____ in the sea every day.\" <span class=\"de\">Welche Wörter fehlen?</span>",
        foerder: SP,
        fragen: [
          { q: "Which words are missing?", o: ["went – swam", "go – swim", "goed – swimmed", "went – swimmed"], a: 0,
            e: "Nadia schreibt über letzte Woche: simple past. go → went und swim → swam sind unregelmäßig." }
        ] },
      { art: "mc", id: "k2", tag: "I can … 2/6", titel: "My home town", lead: "<b>Joel:</b> \"I live in a small village in the north of England. It's quiet, and the air is clean. But there aren't many buses, and the next town is a long way away.\" <span class=\"de\">Lies, was Joel sagt, und kreuze an.</span>",
        fragen: [
          { q: "What is not so good about Joel's village?", o: ["There aren't many buses.", "It is very noisy.", "The air is dirty.", "It is in the south of England."], a: 0,
            e: "Joel sagt: But there aren't many buses. Nach but kommt das, was nicht so gut ist." }
        ] },
      { art: "mc", id: "k3", tag: "I can … 3/6", titel: "Life at school", lead: "<b>Harriet's school day:</b> bus at 7.45 a.m. · twenty minutes to school · lessons start at 8.30 a.m. <span class=\"de\">Welcher Satz über Harriet ist richtig?</span>",
        foerder: HSI,
        fragen: [
          { q: "Which sentence about Harriet is correct?", o: ["Harriet catches the bus at a quarter to eight.", "Harriet catch the bus at a quarter to eight.", "Harriet catches the bus at a quarter past eight.", "Harriet don't catch the bus."], a: 0,
            e: "Harriet = she: catches (nach ch kommt -es). 7.45 Uhr ist a quarter to eight – Viertel vor acht." }
        ] },
      { art: "mc", id: "k4", tag: "I can … 4/6", titel: "A story from history", lead: "<b>About 2,000 years ago</b> the Romans came to Britain. They built roads, towns and <button class=\"term\" data-t=\"fort\">forts</button>. Soldiers from many countries lived in the forts. They wrote letters on thin pieces of wood. <span class=\"de\">Lies den kurzen Text. Dann berichtigst du einen falschen Satz – so wie in der Unit.</span>",
        fragen: [
          { q: "Somebody says: \"The Romans wrote letters on paper.\" That's wrong. What is right?", o: ["They wrote letters on thin pieces of wood.", "They wrote letters on stones.", "They didn't write letters.", "They wrote letters on the walls of the forts."], a: 0,
            e: "Im Text steht: They wrote letters on thin pieces of wood. So berichtigst du: That's wrong. They wrote letters on thin pieces of wood." }
        ] },
      { art: "mc", id: "k5", tag: "I can … 5/6", titel: "At a ticket office", lead: "You are at a ticket office in England with your German aunt. She says: <i>„Wir sind zwei Erwachsene und ein Kind. Gibt es eine Familienkarte?“</i> <span class=\"de\">Was sagst du der Verkäuferin auf Englisch?</span>",
        fragen: [
          { q: "What do you say to the assistant?", o: ["My aunt would like tickets for two adults and one child. Is there a family ticket?", "My aunt is two adults and a child. She wants a family.", "Two adults, one child. Family ticket now!", "My aunt would like a family. Is there a ticket?"], a: 0,
            e: "Du sagst das Wichtige in einfachen, höflichen Sätzen: wie viele Karten und die Frage nach der Familienkarte. Wort für Wort übersetzen klappt oft nicht." }
        ] },
      { art: "mc", id: "k6", tag: "I can … 6/6", titel: "A story and its turning point", lead: "<b>Rafi</b> thinks that cricket is boring. Then he plays in a match, and Granny Joan gives him tips. After the match he sees an old photo: Granny Joan was the best bowler in the club! <span class=\"de\">Wo ändert sich die Geschichte?</span>",
        fragen: [
          { q: "What is the turning point of the story?", o: ["Rafi sees the old photo and learns about Granny Joan.", "Rafi thinks that cricket is boring.", "Rafi plays in a match.", "Granny Joan gives Rafi tips."], a: 0,
            e: "Erst beim Foto ändert sich alles: Rafi erfährt Grannys Geheimnis und sieht Cricket ganz anders." }
        ] },
      { art: "merke", kopf: "MY SELF-CHECK", html: "<p>Look at your six results and colour the six points of the <button class=\"term\" data-t=\"checklist\">checklist</button> in your exercise book:</p><ul><li>✅ <b>green</b> – right at once: You can do it.</li><li>⚠️ <b>yellow</b> – right at the second try: Look at this part of the unit again.</li><li>❗ <b>red</b> – the box \"Das ist noch schwer?\" came up: Do the extra exercise first.</li></ul><p><span class=\"de\">Male die sechs Punkte im Heft grün, gelb oder rot an – je nachdem, wie es geklappt hat. Bei Rot hilft dir die Extra-Übung unter der Aufgabe.</span></p>" }
    ] },
    { kurz: "Words", ober: "Revision", titel: "Words from the whole unit", teile: [
      { art: "text", html: "<p class=\"lead\">Words are the base of everything. Check the words from <b>all parts</b> of Unit 1. <span class=\"de\">Wörter aus allen Abschnitten der Unit: zuordnen und Lückensätze.</span></p>" },
      ...zwei({ art: "paare", id: "woerter-paare", tag: "Match", titel: "Find the pairs",
          paare: [["coast", "Küste"], ["traffic", "Verkehr"], ["healthy", "gesund"], ["builder", "Bauarbeiter, Bauarbeiterin"], ["wave", "Welle"], ["brochure", "Broschüre, Prospekt"]] },
        { lead: "Match the English words with the German words. <span class=\"de\">Welches deutsche Wort passt?</span>",
          hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "Am Meer gibt es eine Küste und Wellen. In der Stadt gibt es viel Verkehr.", "coast = Küste · traffic = Verkehr · healthy = gesund · builder = Bauarbeiter · wave = Welle · brochure = Broschüre"] },
        { lead: "Match the English words with the German words." }),
      ...zwei({ art: "luecke", id: "woerter-luecke", tag: "Gap text", titel: "The right word",
          absaetze: [
            ["The village is very ", { g: "quiet" }, " – there are no cars at night."],
            ["In the past, many people in the north worked in a coal ", { g: "mine" }, "."],
            ["The bus journey to school ", { g: "takes" }, " twenty minutes."],
            ["My sister wants to ", { g: "act" }, " in the school play."],
            ["The ", { g: "exhibition" }, " in our school hall shows the best photos of the year."],
            ["The ", { g: "artist" }, " Antony Gormley made a huge angel of steel."]
          ], extra: ["noisy", "order"] },
        { lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          hilfen: ["Lies den ganzen Satz und überlege, welches Wort sinnvoll ist.", "Ohne Autos ist es nachts ruhig. Kohle holt man aus einem Bergwerk.", "quiet · mine · takes · act · exhibition · artist"] },
        { lead: "Complete the sentences with words from the box. Two words are extra." })
    ] },
    { kurz: "Grammar", ober: "Revision", titel: "Grammar of Unit 1", teile: [
      { art: "merke", kopf: "UNIT 1 IN FIVE LINES", html: "<ul><li><b>Simple past</b> – finished in the past: <i>-ed (helped)</i> or irregular <i>(come → came)</i>. Negative: <i>didn't + base form</i>. Questions: <i>Did …? · Where did …?</i></li><li><b>Simple present</b> – habits and facts: <i>I play · he plays</i>. He, she, it – the <b>s</b> must go with it!</li><li>Negative: <i>don't / doesn't + base form</i>.</li><li>Questions: <i>Do you …? · Does she …?</i> Short answers: <i>Yes, I do. · No, she doesn't.</i> With be: <i>Is he …? · Are they …?</i></li><li><button class=\"term\" data-t=\"possessive\">Possessive pronouns</button> stand without a noun: <i>my bag → it's mine · your → yours · his → his · her → hers · our → ours · their → theirs</i>.</li></ul>" },
      ...zwei({ art: "luecke", id: "g1-luecke", tag: "G1 · Simple past", titel: "Sami's holiday", foerder: SP },
        { lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Zwei Formen sind falsch und bleiben übrig.</span>",
          absaetze: [
            ["Last summer Sami ", { g: "visited" }, " his cousins by the sea."],
            ["They ", { g: "didn't stay" }, " at home – they were on the beach every day."],
            ["", { g: "Did" }, " you ", { g: "see" }, " the old castle? – Yes, we did."],
            ["The weather ", { g: "was" }, " great."]
          ], extra: ["didn't stayed", "saw"],
          hilfen: ["Last summer zeigt: Es ist vorbei – simple past.", "Nach didn't und nach Did steht die Grundform: didn't stay, Did you see …?", "visited · didn't stay · Did – see · was"] },
        { lead: "Complete the sentences with a whole verb form from the box. Two forms are wrong and are left over.",
          absaetze: [
            ["Last summer Sami ", { g: "visited" }, " his cousins by the sea."],
            ["They ", { g: "didn't stay" }, " at home, and they ", { g: "ate" }, " fish and chips every day."],
            ["Where ", { g: "did" }, " you stay? – In a small hotel. It ", { g: "wasn't" }, " expensive."],
            ["The beaches ", { g: "were" }, " beautiful."]
          ], extra: ["didn't stayed", "eated"] }),
      ...zwei({ art: "luecke", id: "g2-luecke", tag: "G2 · Simple present", titel: "School days", foerder: HSI },
        { lead: "Complete the sentences. <span class=\"de\">he, she, it – das s muss mit. Zwei Formen sind falsch und bleiben übrig.</span>",
          absaetze: [
            ["Harriet ", { g: "lives" }, " in a quiet village."],
            ["Her brother ", { g: "doesn't like" }, " the school bus."],
            ["Joel and Nadia ", { g: "walk" }, " to school."],
            ["Sami ", { g: "watches" }, " football every Saturday."]
          ], extra: ["live", "don't likes"],
          hilfen: ["Ist es eine Person (he, she) oder sind es mehrere (they)?", "Eine Person: -s oder -es (lives, watches). Verneinung: doesn't + Grundform.", "lives · doesn't like · walk · watches"] },
        { lead: "Complete the sentences. Two forms are wrong and are left over.",
          absaetze: [
            ["Harriet ", { g: "lives" }, " in a quiet village, but she ", { g: "doesn't like" }, " the long bus journey."],
            ["Joel and Nadia ", { g: "walk" }, " to school, so they ", { g: "don't need" }, " a bus."],
            ["Sami ", { g: "watches" }, " football every Saturday."]
          ], extra: ["don't likes", "watchs"] }),
      ...zwei({ art: "luecke", id: "g3-luecke", tag: "G3 · Questions and short answers", titel: "Ask and answer", foerder: DODOES },
        { lead: "Complete the questions and the short answer. <span class=\"de\">Do oder does? Bei Fragen mit be: Is oder Are. Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["", { g: "Does" }, " Harriet walk to school? – No, she ", { g: "doesn't" }, ". She catches the bus."],
            ["Where ", { g: "do" }, " Joel and Nadia live? – In a small village."],
            ["", { g: "Is" }, " Sami in your class? – Yes, he is."]
          ], extra: ["Do", "don't"],
          hilfen: ["Harriet = she → Does. Joel and Nadia = they → do.", "Die Kurzantwort wiederholt das Hilfswort: Does …? – No, she doesn't.", "Does – doesn't · do · Is"] },
        { lead: "Complete the questions and the short answer. Two words are extra.",
          absaetze: [
            ["", { g: "Does" }, " Harriet walk to school? – No, she ", { g: "doesn't" }, ". She catches the bus."],
            ["Where ", { g: "do" }, " Joel and Nadia live? – In a small village near the coast."],
            ["How long ", { g: "is" }, " the bus journey? – Twenty minutes."],
            ["", { g: "Are" }, " Joel and Nadia in the same class? – Yes, they are."]
          ], extra: ["Do", "isn't"] }),
      ...zwei({ art: "mc", id: "g4-mc", tag: "G4 · Possessive pronouns", titel: "Whose is it?", foerder: POSS },
        { lead: "Tick the right word. <span class=\"de\">Am Satzende steht kein Nomen mehr – dann brauchst du mine, yours, his, hers, ours oder theirs.</span>",
          fragen: [
            { q: "Is this Harriet's pen? – Yes, it's ____.", o: ["hers", "her", "his"], a: 0, e: "Harriet = she. Ohne Nomen danach: hers." },
            { q: "Are these Joel and Nadia's bikes? – Yes, they're ____.", o: ["theirs", "their", "ours"], a: 0, e: "Joel and Nadia = they. Ohne Nomen danach: theirs." }
          ],
          hilfen: ["Wem gehört es: einem Mädchen, einem Jungen oder mehreren?", "her pen → hers · their bikes → theirs"] },
        { lead: "Tick the right answer.",
          fragen: [
            { q: "Whose sandwiches are these? – They're Sami's. They're ____.", o: ["his", "him", "he's", "her"], a: 0, e: "Sami = he. Bei his sind Begleiter und Pronomen gleich: his sandwiches → they're his." },
            { q: "Which sentence is correct?", o: ["That brochure is ours, not yours.", "That brochure is our, not your.", "That brochure is ours, not your.", "That's ours brochure."], a: 0, e: "Ohne Nomen danach: ours und yours. Vor einem Nomen: our brochure." }
          ] }),
      { art: "text", html: "<p class=\"lead\">Now find the mistakes. In this text there are exactly <b>four mistakes</b> – they are printed in bold. <span class=\"de\">Genau vier Fehler stehen fett gedruckt – einer zu jedem Grammatikteil. Schreibe die vier Sätze richtig auf.</span></p><blockquote>Last weekend Joel <b>goed</b> to the coast. His sister <b>like</b> the beach. <b>Do</b> she swim every day? That towel isn't <b>my</b>.</blockquote>" },
      ...zwei({ art: "offen", id: "fehlertext", tag: "Find the mistakes", titel: "Write the four sentences correctly", foerder: SP },
        { lead: "Write all four sentences without the mistakes. <span class=\"de\">Schreibe alle vier Sätze richtig auf.</span>",
          fragen: [{ q: "Write the four sentences correctly.", m: "Last weekend Joel went to the coast. His sister likes the beach. Does she swim every day? That towel isn't mine.", k: ["joel went", "sister likes", "does she", "isn't mine|is not mine"], min: 3 }],
          hilfen: ["Satz 1: go ist unregelmäßig. Satz 2: his sister = she.", "Satz 3: she → Does. Satz 4: Am Ende steht kein Nomen."],
          tipp: "Satz 1: go → went. · Satz 2: he, she, it – das s muss mit. · Satz 3: Fragen mit she → Does. · Satz 4: ohne Nomen → mine." },
        { lead: "Write all four sentences without the mistakes.",
          fragen: [{ q: "Write the four sentences correctly.", m: "Last weekend Joel went to the coast. His sister likes the beach. Does she swim every day? That towel isn't mine.", k: ["joel went", "sister likes", "does she", "isn't mine|is not mine"], min: 4 }],
          tipp: "One mistake each: simple past · he, she, it -s · do or does · my or mine." }),
      { art: "offen", id: "eigene-saetze", m7: true, tag: "Your words", titel: "Two sentences of your own", lead: "Write <b>one sentence</b> about your last weekend (simple past) and <b>one sentence</b> about a friend's school day (he or she + simple present). <span class=\"de\">Für M7 Pflicht, für R7 freiwillig.</span>",
        foerder: HSI,
        fragen: [{ q: "Write a sentence about your last weekend and a sentence about a friend's school day.", m: "Last weekend I visited my grandma. My best friend catches the bus at seven o'clock.", k: ["visited|went|played|watched|saw|was|were|did|had|ate|made|met|stayed|bought|rode|swam|read|helped|cooked", "catches|goes|walks|takes|gets|has|likes|lives|plays|rides|does|starts|comes|eats|leaves"], min: 2 }],
        tipp: "Last weekend I … (went, played, visited …) · My friend … (catches, walks, likes …) – he, she, it: das s muss mit." }
    ] },
    { kurz: "Unit task", ober: "A brochure", titel: "Plan a brochure about a town in England", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a group plans a brochure</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-co-broschuere.jpg\" width=\"1280\" height=\"853\" alt=\"Four children at a group table plan a brochure: photos of a big cathedral and an old city gate, a drawn map, scissors and glue.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What are the children doing? Which town in England would you choose for your brochure? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Your group is going to make a <button class=\"term\" data-t=\"brochure\">brochure</button> about a town in England that is good for a holiday. Here is an example group: <b>Harriet</b>, <b>Joel</b>, <b>Nadia</b> and <b>Sami</b>. They chose <b>Canterbury</b>, a small, old city in the south-east of England. <span class=\"de\">Unit task: eine Broschüre in der Gruppe. Du ordnest die Schritte, prüfst eine Information, verteilst die Notizen der Beispielgruppe und schreibst dann einen Teil der Broschüre.</span></p>" },
      ...zwei({ art: "ordnen", id: "schritte", tag: "Six steps", titel: "How do you make a brochure?",
          schritte: ["Choose a town in England that is good for a holiday.", "Collect facts about the town from books and websites.", "Plan the pages: texts, photos and a map – what goes where?", "Everybody writes one part. Then you put the parts together.", "Read everything again: Are the facts and the English correct?", "Put the brochures on the tables, walk around and look at the others."] },
        { lead: "Put the six steps in the right order. <span class=\"de\">Was kommt zuerst, was zuletzt?</span>",
          hilfen: ["Zuerst braucht ihr einen Ort, ganz am Schluss stellt ihr die Broschüre vor.", "Erst sammeln, dann planen, dann schreiben, dann prüfen.", "1 Ort wählen · 2 Fakten sammeln · 3 Seiten planen · 4 schreiben · 5 prüfen · 6 vorstellen"] },
        { lead: "Put the six steps in the right order." }),
      { art: "merke", kopf: "STUDY SKILLS · FACTS FROM THE INTERNET", html: "<ul><li>Don't believe everything on one website. <b>Check</b> a fact on two or three websites.</li><li>Use books, too, and <b>ask your teacher</b> when you aren't sure.</li><li>Write down <b>where</b> you found the fact.</li></ul><p><span class=\"de\">Nicht alles im Internet stimmt. Prüfe eine Information auf mehreren Seiten oder frag deine Lehrkraft.</span></p>" },
      ...zwei({ art: "mc", id: "pruefen", tag: "Study skills", titel: "Is it true?" },
        { lead: "Nadia finds this on one website: <i>\"Canterbury Cathedral is 100 years old.\"</i> <span class=\"de\">Was soll Nadia tun?</span>",
          fragen: [
            { q: "What should Nadia do?", o: ["Check the fact on other websites or ask her teacher.", "Write it in the brochure at once.", "Write \"about 100 years\" – then it is always right.", "Take the cathedral out of the brochure."], a: 0, e: "Eine Information von nur einer Seite kann falsch sein. Nadia prüft sie auf anderen Seiten oder fragt ihre Lehrkraft." }
          ] },
        { lead: "Nadia finds this on one website: <i>\"Canterbury Cathedral is 100 years old.\"</i> Two other websites say: <i>\"more than 900 years old\"</i>.",
          fragen: [
            { q: "What is the best thing to do?", o: ["Use \"more than 900 years old\" and ask the teacher if she isn't sure.", "Use \"100 years old\" because she found it first.", "Write both numbers in the brochure.", "Leave out the cathedral because the facts are difficult."], a: 0, e: "Zwei Seiten sagen dasselbe, eine nicht – die eine ist wohl falsch. Im Zweifel fragt Nadia ihre Lehrkraft." }
          ] }),
      { art: "text", html: "<p class=\"lead\">Here are the group's <b>notes</b> about Canterbury. <span class=\"de\">Das sind die Notizen der Gruppe. Du brauchst sie für die nächsten Aufgaben.</span></p>" },
      { art: "material", daten: { typ: "tabelle", titel: "Our notes: Canterbury", kopf: ["Topic", "Notes"], reihen: [["Where?", "in Kent, in the south-east of England · about one hour from London by train"], ["How big?", "a small city · more than 50,000 people"], ["Things to see", "the cathedral – very famous, more than 900 years old · the Westgate – an old city gate, more than 600 years old · parts of the old city wall"], ["Things to do", "a boat trip on the river · a walk on the old city wall · a picnic in the Westgate Gardens"], ["Food and shopping", "small shops and cafés in the old streets"]] } },
      ...zwei({ art: "sort", id: "seiten", tag: "Step 3 · Organise", titel: "Which page?", buckets: ["Page 1: Welcome to Canterbury", "Page 2: Things to see", "Page 3: Things to do"] },
        { lead: "Put the notes on the right page of the brochure. <span class=\"de\">Auf welche Seite der Broschüre gehört die Notiz?</span>",
          items: [{ t: "in the south-east of England", b: 0 }, { t: "about one hour from London by train", b: 0 }, { t: "the cathedral", b: 1 }, { t: "the Westgate", b: 1 }, { t: "a boat trip on the river", b: 2 }, { t: "a picnic in the Westgate Gardens", b: 2 }],
          hilfen: ["Seite 1 sagt, wo Canterbury liegt und wie man hinkommt.", "Seite 2: Gebäude, die man ansieht. Seite 3: Dinge, die man tut."] },
        { lead: "Put the notes on the right page of the brochure.",
          items: [{ t: "in Kent, in the south-east of England", b: 0 }, { t: "about one hour from London by train", b: 0 }, { t: "more than 50,000 people", b: 0 }, { t: "the cathedral", b: 1 }, { t: "the Westgate", b: 1 }, { t: "parts of the old city wall", b: 1 }, { t: "a boat trip on the river", b: 2 }, { t: "a picnic in the Westgate Gardens", b: 2 }] }),
      { art: "merke", kopf: "WRITING SKILLS · LINKING WORDS", html: "<p>Linking words make your text easy to read:</p><div class=\"phrasen\"><span><b>and</b> – und</span><span><b>but</b> – aber</span><span><b>because</b> – weil</span><span><b>so</b> – also, deshalb</span><span><b>after that</b> – danach</span></div><p>A good brochure page has a <b>headline</b>, short paragraphs and photos. Talk to the reader: <i>You can … · Don't miss …</i></p>" },
      ...zwei({ art: "luecke", id: "bindewoerter", tag: "Writing skills", titel: "Linking words" },
        { lead: "Complete the sentences from the brochure with linking words. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
          absaetze: [
            ["Canterbury is a small city, ", { g: "but" }, " there is a lot to see."],
            ["First visit the cathedral. ", { g: "After that" }, ", walk to the Westgate."],
            ["You can go on a boat trip ", { g: "and" }, " have a picnic by the river."],
            ["Come in summer ", { g: "because" }, " the gardens are beautiful then."]
          ], extra: ["so", "than"],
          hilfen: ["but zeigt einen Gegensatz: klein – aber viel zu sehen.", "because gibt einen Grund an, after that sagt, was danach kommt.", "but · After that · and · because"] },
        { lead: "Complete the sentences from the brochure with linking words. Two words are extra.",
          absaetze: [
            ["Canterbury is a small city, ", { g: "but" }, " there is a lot to see."],
            ["The cathedral is very famous, ", { g: "so" }, " lots of visitors come every year."],
            ["First visit the cathedral. ", { g: "After that" }, ", walk to the Westgate."],
            ["You can go on a boat trip ", { g: "and" }, " have a picnic by the river."],
            ["Come in summer, ", { g: "because" }, " the gardens are full of flowers then."]
          ], extra: ["than", "if"] }),
      { art: "text", html: "<p class=\"lead\"><b>Step 4 · Write your part.</b> You write <b>page 2 or page 3</b> of the brochure – things to see or things to do in Canterbury. Use the group's notes. <span class=\"de\">Schritt 4: Du schreibst Seite 2 oder Seite 3 der Broschüre. Nimm die Notizen – aber schreibe ganze, eigene Sätze. Hol dir dann eine Rückmeldung und verbessere die Stelle, die genannt wird.</span></p>" },
      { art: "schreiben", id: "broschuere", nur: "R", tag: "Step 4 · Writing trainer", titel: "My page of the brochure", min: 40,
        auftrag: "<p><b>Write page 2 or page 3 of the brochure about Canterbury</b> (40 words or more). <span class=\"de\">Schreibe mindestens 40 Wörter. Die Satzanfänge helfen dir.</span></p><ul><li>a headline</li><li>two or more things to see or to do</li><li>one piece of information about each thing</li><li>linking words: and, but, after that, because</li></ul>",
        starter: ["Things to see in Canterbury", "Things to do in Canterbury", "You can visit …", "The cathedral is …", "After that, …", "You can also …", "Don't miss …", "Come to Canterbury!"],
        kriterien: ["Dein Text hat eine Überschrift.", "Du nennst mindestens zwei Dinge, die man in Canterbury sehen oder tun kann.", "Zu jedem Ding steht eine Information aus den Notizen.", "Du verbindest Sätze mit and, but, after that oder because.", "Du schreibst im simple present (You can visit … The cathedral is …)."] },
      { art: "schreiben", id: "broschuere", nur: "M", tag: "Step 4 · Writing trainer", titel: "My page of the brochure", min: 60,
        auftrag: "<p><b>Write page 2 or page 3 of the brochure about Canterbury</b> (60 words or more).</p><ul><li>a headline and a first sentence that makes the reader curious</li><li>three things to see or to do – with information about each</li><li>linking words: and, but, so, because, after that</li><li>talk to the reader: <i>You can … · Don't miss …</i></li></ul>",
        starter: ["Things to see in Canterbury", "Welcome to …", "Don't miss …", "It is more than … years old, so …", "After that, …", "If you like …, you can …", "Come and see …!"],
        kriterien: ["Dein Text hat eine Überschrift und einen ersten Satz, der neugierig macht.", "Du stellst mindestens drei Dinge vor, die man sehen oder tun kann – mit einer Information zu jedem.", "Du nutzt die Notizen, schreibst aber eigene, ganze Sätze.", "Du verbindest Sätze mit and, but, so, because oder after that.", "Du schreibst im simple present und sprichst die Leser direkt an (You can … Don't miss …)."] },
      { art: "text", html: "<p class=\"lead\"><b>Step 5 · Check.</b> Sami's first draft has two sentences with mistakes. <span class=\"de\">Plus-Aufgabe (für M7 Pflicht, für R7 freiwillig): Verbessere Samis zwei Sätze.</span></p><blockquote>Canterbury <b>have</b> a famous cathedral. It <b>very old</b>.</blockquote>" },
      { art: "offen", id: "entwurf", m7: true, tag: "Step 5 · Check", titel: "Correct Sami's draft", lead: "Write Sami's two sentences correctly. <span class=\"de\">Zwei Fehler sind fett gedruckt.</span>",
        foerder: HSI,
        fragen: [{ q: "Write Sami's two sentences correctly.", m: "Canterbury has a famous cathedral. It is very old.", k: ["canterbury has", "it is very old|it's very old|it is really old"], min: 2 }],
        tipp: "Satz 1: Canterbury = it – he, she, it: has. · Satz 2: Es fehlt ein Verb: is." },
      { art: "merke", kopf: "STEP 6 · GALLERY WALK", html: "<p>Put your brochures on the tables. Walk around, read the others and talk about them:</p><div class=\"phrasen\"><span>I'd like to visit … because …</span><span>Your photos are great!</span><span>I like your map.</span><span>What is … ?</span></div><p><span class=\"de\">Sagt am Ende, welche Stadt ihr am liebsten besuchen würdet – und warum.</span></p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      ...zwei({ art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?" },
        { lead: "Tick true or false. <span class=\"de\">Was gehört zu Unit 1?</span>",
          aussagen: [["After does you use the base form: Does she like …?", true], ["mine, yours and hers stand before a noun: This is mine bag.", false], ["With last week or yesterday you use the simple past.", true], ["A brochure has only text, no photos.", false], ["Linking words like but and after that make a text easier to read.", true]] },
        { lead: "Tick true or false.",
          aussagen: [["After does you use the base form: Does she like …?", true], ["A possessive pronoun stands without a noun: The bag is mine.", true], ["With every day or usually you use the simple past.", false], ["Facts from one website are always correct.", false], ["Linking words like but, so and after that connect sentences.", true]] })
    ] }
  ],
  weiter: { text: "Well done! You have checked what you can do after Unit 1, revised the words and the grammar and planned a brochure. Look at the tasks you found difficult once more – then you are fit for the test." }
});
