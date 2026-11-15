/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Checkout: Fit for the test (Kürzel B22)
   (Wiederholung der ganzen Unit vor der Probe: sechs Ich-kann-Sätze mit je einer Mini-Aufgabe, Wörter, die Grammatik der Unit
   – going to, present perfect Aussagen/Verneinung, Fragen/Kurzantworten, present perfect oder simple past – mit Fehlertext,
   ein kurzer Lesetext, ein kurzer Hörtext und als Unit task eine Klassenumfrage „Have you ever …?“)
   Buchprinzip (Checkout, nur Aufbau, nichts übernommen): Checklist mit den sechs Kann-Zielen der Unit, je mit typischen
   Wendungen und einem Balken zum Selbsteinschätzen; Unit task in vier Schritten: Ideen sammeln (Fragen mit „been“ und mit
   anderen Verben), mit einem Partner die besten auswählen, Tabelle anlegen und Rechtschreibung/Verbformen prüfen, in der
   Klasse herumgehen und fragen. Besser: nach jedem Ich-kann-Satz sofort eine kleine Aufgabe mit Rückmeldung (der Balken ist
   dann keine Schätzung mehr), echte Wiederholung der Grammatik mit Fehlertext statt nur Lesen, Förder-Links zu den
   Extra-Seiten an den Stellen, an denen Kinder hängen bleiben, ein kurzer neuer Lese- und Hörtext zur Probe-Situation, und die
   Umfrage mit Verbformen-Check, Beispieltabelle und Hilfen in Stufen.
   Differenzierung: Lesen und Hören – R7 und M7 haben eigene Fassungen derselben Situation (Lesetext R7 93 / M7 137 Wörter,
   Hörtext R7 74 / M7 113 Wörter) mit eigenen Zeilenangaben und Fragen; Umfrage – R7 mit Hilfen in Stufen, M7 ohne;
   Plus für M7 (m7): zwei kurze Schreibaufgaben (eigene Sätze zu going to und present perfect, zwei Sätze zur Beispieltabelle).
   LehrplanPLUS E7 1.1 Leseverstehen, E7 1.2 Hörverstehen, E7 1.3 Sprechen (Umfrage), E7 2.3 Sprachmittlung (Programm auf Deutsch
   erklären), E7 3 (going to, present perfect Aussagen, Verneinung, Fragen, Kurzantworten, Abgrenzung zum simple past),
   E7 5 (Wales und Schottland, Alltag).
   Texte: „A bake sale for the library“ (texte/u2/u2-co-read-r.js und -m.js) – Elin schreibt ihrem Cousin Bryn, Dougal;
   „Where is my jacket?“ (texte/u2/u2-co-hear-r.js und -m.js) – Heather und Tavish. Dazu Freya und Callum (Beispieltabelle der
   Umfrage) und Rowan (Mini-Geschichte). Alle Personen sind erfunden.
   Förder-Links: going to → unit2/extra/going-to.html, have/has + 3. Form → unit2/extra/have-has-participle.html,
   Fragen → unit2/extra/have-has-questions.html, present perfect oder simple past → unit2/extra/signal-words.html,
   Hören → u2_x7.html.
   Wörter der Unit (alle Abschnitte des Trainers) kommen bewusst vor: castle, competition, bagpipes, to decide, left, to book,
   dangerous – safe, easy – difficult, boring – exciting, ever, yet, already, just, never, to find out.
   BILDER:
   1. Station „I can“ (Vorentlastung, Mini-Comic): vier Bilder in einer Reihe – ein Junge legt sein Sandwich auf eine Mauer, eine
      Möwe schaut zu, die Möwe fliegt mit dem Sandwich davon, der Junge hebt die Hände.
   2. Station „Read & listen“ (Lesetext): ein Verkaufstisch in einer Schulaula mit Blech voller Haferriegel, ein selbst gemaltes
      Schild „Bake sale“ und ein Mädchen, das gerade ein Plakat an die Wand klebt.
   3. Station „Unit task“ (Sprechanlass): Schulhof, Kinder gehen mit Klemmbrettern herum und befragen sich gegenseitig, an der
      Wand hängt eine große Tabelle mit Häkchen. */
D7Kit.seite({
  id: "u2-checkout",
  titel: "Checkout · Fit for the test: Unit 2",
  einleitung: "The test is coming! In this module you check what you can do after <b>Unit 2</b>: you test yourself on six things, revise words and grammar, read and listen to a short text, and then you do the <b>Unit task</b> – a class survey with <b>Have you ever …?</b>. Du siehst sofort, was schon sitzt und was du noch üben solltest.",
  zeit: "etwa 45 Minuten",
  ziele: ["✅ I check what I can do after Unit 2.", "📚 I know the important words of the unit.", "🧩 I use going to, the present perfect and the simple past correctly.", "🔎 I read and listen to short texts and find the details.", "📋 I write my own Have you ever …? questions for a class survey."],
  thema: "Unit 2 Fun in Wales and Scotland, Checkout: Wiederholung der ganzen Unit und Klassenumfrage (Have you ever …?)",
  quiz: { profi: "Fit pro" },
  glossar: {
    thirdform: ["3rd form", "Die 3. Form (past participle) braucht man für das present perfect: have/has + 3. Form. Bei regelmäßigen Verben endet sie auf -ed (played), bei vielen anderen ist sie unregelmäßig (been, done, seen)."],
    signal: ["signal words", "Signalwörter zeigen, welche Zeit passt. Ever, never, yet, already und just gehören zum present perfect; yesterday, last week und two days ago gehören zum simple past."],
    turning: ["turning point", "Wendepunkt: Das ist die Stelle in einer Geschichte oder in einem Film, an der sich plötzlich etwas ändert."],
    survey: ["survey", "Umfrage: Man stellt vielen Leuten dieselben Fragen und schreibt auf, was sie antworten."],
    stall: ["stall", "Verkaufsstand: Dort bieten Leute zum Beispiel Kuchen oder Bücher an."],
    flapjack: ["flapjack", "Das ist ein süßer Haferriegel, den man in Großbritannien oft selbst backt."],
    bake: ["bake sale", "Kuchenverkauf: Man backt Kuchen und verkauft sie, um Geld für etwas zu sammeln."]
  },
  stationen: [
    { kurz: "I can", ober: "Check yourself", titel: "What can I do now?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a funny moment</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-co-moewe.jpg\" width=\"1280\" height=\"853\" alt=\"A boy lays a sandwich on a wall, a seagull next to it grabs the sandwich.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What happens here? Tell the story in two or three sentences. <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">At the end of Unit 2 you can do six things. Don't just say \"yes\" – <b>try it</b>! After each sentence there is a small task. <span class=\"de\">Lies die sechs Sätze. Nach jedem Satz kommt eine kleine Aufgabe. So siehst du gleich, ob es klappt.</span></p>" },
      { art: "merke", kopf: "CHECKLIST · I CAN …", html: "<ol><li><b>… understand something about Wales and Scotland.</b> <i>the capital · the flag · the language</i></li><li><b>… present my favourite activity.</b> <i>My favourite activity is … · It is … because …</i></li><li><b>… arrange to meet somebody.</b> <i>Would you like to …? · I'm afraid I can't. · Could we meet …?</i></li><li><b>… read a comic.</b> <i>Look at the pictures and say what happens.</i></li><li><b>… explain a programme to somebody in German.</b> <i>time · place · what to bring</i></li><li><b>… understand a film or a story.</b> <i>What happens? What is the <button class=\"term\" data-t=\"turning\">turning point</button>?</i></li></ol>" },
      { art: "mc", id: "k1", tag: "I can … 1/6", titel: "Wales and Scotland", lead: "<b>Fact file:</b> People in Wales speak English and Welsh. The flag of Wales shows a red dragon. The capital of Scotland is Edinburgh. <span class=\"de\">Lies den Steckbrief und kreuze an.</span>",
        fragen: [
          { q: "What is on the flag of Wales?", o: ["A red dragon.", "A blue lion.", "A green castle.", "A yellow sheep."], a: 0,
            e: "Im Steckbrief steht: The flag of Wales shows a red dragon." }
        ] },
      { art: "mc", id: "k2", tag: "I can … 2/6", titel: "My favourite activity", lead: "You tell the class about your favourite activity. <span class=\"de\">Du stellst deine Lieblingsaktivität vor. Welcher Satz ist richtig gebaut?</span>",
        fragen: [
          { q: "Which sentence is correct?", o: ["My favourite activity is climbing because it is exciting.", "My favourite activity is climbing because exciting.", "My favourite activity climbing because it is exciting.", "Climbing my favourite activity is because exciting."], a: 0,
            e: "Ein richtiger Satz hat is und nach because einen ganzen Satz: it is exciting. Ohne it is fehlt das Verb." }
        ] },
      { art: "mc", id: "k3", tag: "I can … 3/6", titel: "Arranging to meet", lead: "Your friend asks: \"Would you like to go to the cinema on Friday?\" You have swimming training on Friday. <span class=\"de\">Du kannst am Freitag nicht. Was sagst du höflich?</span>",
        fragen: [
          { q: "What is the best answer?", o: ["I'm afraid I can't. I have swimming training. Could we meet on Saturday?", "No. I don't like the cinema.", "I can't. Friday is boring.", "Yes, I can, but I have swimming training."], a: 0,
            e: "Höflich ist: I'm afraid I can't + Grund + neuer Vorschlag. So bleibt die Verabredung möglich." }
        ] },
      { art: "mc", id: "k4", tag: "I can … 4/6", titel: "Reading a comic", lead: "<b>Panel 1:</b> A boy puts his sandwich on a wall. <b>Panel 2:</b> A seagull watches him. <b>Panel 3:</b> The seagull takes the sandwich and flies away. <b>Panel 4:</b> The boy says: \"Oh no! My lunch!\" <span class=\"de\">Vier Bilder – lies die Texte der Reihe nach.</span>",
        fragen: [
          { q: "Why does the boy say \"Oh no!\" in panel 4?", o: ["The seagull took his sandwich.", "The boy is hungry and wants a sandwich.", "The wall is too high.", "The seagull is too big."], a: 0,
            e: "In Bild 3 nimmt die Möwe das Sandwich und fliegt weg. Deshalb ruft der Junge in Bild 4 „Oh no!“." }
        ] },
      { art: "mc", id: "k5", tag: "I can … 5/6", titel: "Explaining a programme in German", lead: "<b>Saturday in the park:</b> 10.00 boat trip (free for children) · 13.00 picnic on the beach · 15.30 concert (bring a warm jacket, it can get cold). Your gran does not speak English. She asks: <i>„Wann ist das Konzert, und was soll ich mitbringen?“</i>",
        fragen: [
          { q: "Was sagst du deiner Oma?", o: ["Um halb vier. Du sollst eine warme Jacke mitnehmen.", "Um halb zwei. Du sollst ein Picknick mitnehmen.", "Um zehn Uhr. Der Eintritt für Kinder ist frei.", "Um halb vier. Du sollst Sonnencreme mitnehmen."], a: 0,
            e: "15.30 Uhr heißt „halb vier“. Mitbringen soll man eine warme Jacke. Du übersetzt nicht alles, sondern sagst nur, was deine Oma wissen will." }
        ] },
      { art: "mc", id: "k6", tag: "I can … 6/6", titel: "Understanding a story", lead: "<b>Rowan is looking for his bike.</b> He asks three neighbours, but nobody has seen it. Then his little sister laughs: \"It's in the garden, behind the bins!\" <span class=\"de\">Wo ändert sich die Geschichte plötzlich?</span>",
        fragen: [
          { q: "Which sentence is the turning point?", o: ["His sister says where the bike is.", "Rowan asks three neighbours.", "Rowan is looking for his bike.", "Nobody has seen the bike."], a: 0,
            e: "Der Wendepunkt ist die Stelle, an der Rowan endlich erfährt, wo das Rad steht. Vorher sucht er nur." }
        ] }
    ] },
    { kurz: "Words", ober: "Revision", titel: "Words from the whole unit", teile: [
      { art: "text", html: "<p class=\"lead\">Words are the base of everything. Check the words from <b>all parts</b> of Unit 2. <span class=\"de\">Wörter aus allen Abschnitten der Unit: Gegenteile und Lückensätze.</span></p>" },
      { art: "paare", id: "gegenteile", tag: "Opposites", titel: "Find the opposites", lead: "Match the words with their opposites. <span class=\"de\">Welches Wort ist das Gegenteil?</span>",
        hilfen: ["Denke an die deutschen Wörter: gefährlich – ungefährlich, einfach – schwierig.", "Zwei der Paare kennst du aus dem Alltag: always – never und big – small.", "dangerous – safe · easy – difficult · boring – exciting · big – small · always – never"],
        paare: [["dangerous", "safe"], ["easy", "difficult"], ["boring", "exciting"], ["big", "small"], ["always", "never"]] },
      { art: "luecke", id: "woerter-luecke", tag: "Gap text", titel: "The right word", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        hilfen: ["Lies den ganzen Satz und überlege, welches Wort sinnvoll ist: Wo steht ein Ort, wo ein Instrument?", "Eine Burg steht auf einem Hügel. Beim Dudelsack denkst du an Schottland.", "castle = Burg · competition = Wettkampf · bagpipes = Dudelsack · left = übrig · book = buchen"],
        absaetze: [
          ["The old ", { g: "castle" }, " stands on a hill above the town."],
          ["Our school team is in a swimming ", { g: "competition" }, " on Saturday."],
          ["A man in a kilt played the ", { g: "bagpipes" }, " at the festival."],
          ["There are only two pieces of cake ", { g: "left" }, "."],
          ["We must ", { g: "book" }, " the tickets today."]
        ], extra: ["spider", "reason"] }
    ] },
    { kurz: "Grammar", ober: "Revision", titel: "Grammar of Unit 2", teile: [
      { art: "merke", kopf: "UNIT 2 IN FIVE LINES", html: "<ul><li><b>going to</b> – plans and predictions: <i>I am / he is / we are going to + verb.</i> Negative: <i>aren't going to …</i></li><li><b>Present perfect</b> – <i>have / has + <button class=\"term\" data-t=\"thirdform\">3rd form</button></i>. Negative: <i>haven't / hasn't + 3rd form</i>. <b>Has</b> after he / she / it.</li><li><b>Questions</b> – <i>Have you …? Has she …?</i> Short answers: <i>Yes, I have. · No, she hasn't.</i></li><li><button class=\"term\" data-t=\"signal\">Signal words</button> of the present perfect: <b>ever, never, yet, already, just</b>.</li><li>If you say <b>when</b> something happened (<i>yesterday, last week, two days ago</i>), use the <b>simple past</b>.</li></ul>" },
      { art: "luecke", id: "gt-luecke", tag: "going to", titel: "Plans and predictions", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Pläne und Vorhersagen: Zwei Formen bleiben übrig.</span>",
        foerder: { href: "unit2/extra/going-to.html", text: "Extra: going to Schritt für Schritt" },
        hilfen: ["Look at the sky! ist eine Vorhersage – und bei Plänen für nächste Woche brauchst du auch going to. Achte auf is, are oder aren't.", "Bei we steht are, bei it steht is. Das Wort to darf nicht fehlen.", "Satz 1: is going to rain · Satz 2: are going to climb · Satz 3: aren't going to have"],
        absaetze: [
          ["Look at the sky! It is dark, so it ", { g: "is going to rain" }, "."],
          ["Next Saturday we ", { g: "are going to climb" }, " a hill near Inverness."],
          ["It's too cold, so we ", { g: "aren't going to have" }, " a picnic."]
        ], extra: ["are going climb", "is going to rained"] },
      { art: "luecke", id: "pp-luecke", tag: "Present perfect", titel: "What has happened?", lead: "Complete the sentences with a whole verb form from the box. <span class=\"de\">Aussage und Verneinung: Zwei Formen bleiben übrig.</span>",
        foerder: { href: "unit2/extra/have-has-participle.html", text: "Extra: have/has + 3. Form" },
        hilfen: ["Bei I und we brauchst du have, bei he, she, it und bei einer Person wie my sister brauchst du has. Dann kommt die 3. Form.", "Do → done, see → seen, buy → bought. Bei der Verneinung steht haven't oder hasn't davor.", "Satz 1: have done · Satz 2: has seen · Satz 3: haven't visited · Satz 4: has bought"],
        absaetze: [
          ["I ", { g: "have done" }, " my homework already."],
          ["My sister ", { g: "has seen" }, " that film three times."],
          ["We ", { g: "haven't visited" }, " Wales yet."],
          ["Our teacher ", { g: "has bought" }, " new books for the class."]
        ], extra: ["has went", "have buyed"] },
      { art: "luecke", id: "fragen-luecke", tag: "Questions and short answers", titel: "Ask and answer", lead: "Complete the questions and the short answers. <span class=\"de\">Frage und Kurzantwort gehören zusammen. Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit2/extra/have-has-questions.html", text: "Extra: Fragen mit have/has" },
        hilfen: ["Die Kurzantwort wiederholt das Hilfsverb der Frage: Has … ? – hasn't. Have … ? – haven't.", "Ever fragt nach „jemals“, yet steht am Ende und fragt nach „schon“.", "Satz 1: Has – ever – hasn't · Satz 2: Have – yet – haven't"],
        absaetze: [
          ["", { g: "Has" }, " your brother ", { g: "ever" }, " climbed a mountain? – No, he ", { g: "hasn't" }, "."],
          ["", { g: "Have" }, " you done your homework ", { g: "yet" }, "? – No, I ", { g: "haven't" }, "."]
        ], extra: ["did", "ago"] },
      { art: "sort", id: "pp-sp", tag: "Present perfect or simple past?", titel: "Which tense?", lead: "Put the sentences into the right box. <span class=\"de\">Wird gesagt, wann etwas war, steht das simple past.</span>",
        foerder: { href: "unit2/extra/signal-words.html", text: "Extra: Signalwörter erkennen" },
        hilfen: ["Suche in jedem Satz nach einem Signalwort: just, never, yet, ever gehören zum present perfect.", "Yesterday, last night, two weeks ago, on Sunday gehören zum simple past.", "Present perfect: just, never, yet, Have you seen …? · Simple past: ate last night, broke two weeks ago, saw on Sunday, met yesterday"],
        buckets: ["Present perfect", "Simple past"],
        items: [{ t: "I have just finished my project.", b: 0 }, { t: "She has never tried sushi.", b: 0 }, { t: "We haven't had lunch yet.", b: 0 }, { t: "Have you seen my keys?", b: 0 },
                { t: "We ate pizza last night.", b: 1 }, { t: "He broke his arm two weeks ago.", b: 1 }, { t: "Did you see the film on Sunday?", b: 1 }, { t: "I met her at school yesterday.", b: 1 }] },
      { art: "text", html: "<p class=\"lead\">Now find the mistakes. In this note there are exactly <b>three mistakes</b> – they are printed in bold. <span class=\"de\">Genau drei Fehler stehen fett gedruckt in dieser Nachricht. Schreibe die drei Sätze richtig auf.</span></p><blockquote>We <b>have visited</b> the museum yesterday. My brother <b>have</b> already sent a postcard. Tomorrow I am <b>going meet</b> my gran at the station.</blockquote>" },
      { art: "offen", id: "fehlertext", tag: "Find the mistakes", titel: "Write the three sentences correctly", lead: "Write all three sentences without the mistakes. <span class=\"de\">Schreibe alle drei Sätze richtig auf.</span>",
        foerder: { href: "unit2/extra/signal-words.html", text: "Extra: Signalwörter erkennen" },
        fragen: [{ q: "Write the three sentences correctly.", m: "We visited the museum yesterday. My brother has already sent a postcard. Tomorrow I am going to meet my gran at the station.", k: ["we visited", "brother has", "going to meet"], min: 3 }],
        tipp: "Satz 1: Mit yesterday steht das simple past. · Satz 2: Bei my brother heißt es has. · Satz 3: going to – das Wort to fehlt." },
      { art: "offen", id: "gt-pp-schreiben", m7: true, tag: "Your words", titel: "Your weekend", lead: "Write one sentence with <b>going to</b> and one question with <b>Have you ever …?</b> <span class=\"de\">Es geht um dein Wochenende und um eine Erfahrung.</span>",
        fragen: [{ q: "Write a sentence with going to and a question with Have you ever …?", m: "I am going to play football on Saturday. Have you ever played golf?", k: ["going to", "have you ever|has he ever|has she ever|have they ever"], min: 2 }],
        tipp: "Start like this: On Saturday I am going to … / Have you ever been to …? Use the 3rd form: been, played, tried …" }
    ] },
    { kurz: "Read & listen", ober: "Mini-check", titel: "Read and listen", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a bake sale</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-co-bake.jpg\" width=\"1280\" height=\"853\" alt=\"A sales table in a school hall with a tray of oat bars; a girl sticks a poster on the wall.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you see? Would you buy something? What? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">A short email and a short phone call – like in a test. <span class=\"de\">Erst ein kurzer Text, dann ein Telefonat.</span></p><p>New words: a <button class=\"term\" data-t=\"bake\">bake sale</button>, <button class=\"term\" data-t=\"flapjack\">flapjacks</button> and a <button class=\"term\" data-t=\"stall\">stall</button>.</p>" },
      { art: "lesetext", lesetext: { R: "u2-co-read-r", M: "u2-co-read-m" } },
      { art: "tf", id: "lesen-tf", nur: "R", tag: "Reading", titel: "True or false?", lead: "Tick true or false. <span class=\"de\">Der Text bleibt über der Aufgabe stehen.</span>",
        hilfen: ["Suche zu jeder Aussage die passende Stelle im Text.", "Achte auf Zahlen und auf Wörter wie already und yet."],
        aussagen: [
          ["The class is going to have a bake sale on Friday.", true],
          ["Elin made the flapjacks yesterday.", true],
          ["Elin has sold all twelve flapjacks.", false],
          ["Elin has already made the poster.", false]
        ] },
      { art: "tf", id: "lesen-tf", nur: "M", tag: "Reading", titel: "True or false?", lead: "Tick true or false. <span class=\"de\">Der Text bleibt über der Aufgabe stehen.</span>",
        aussagen: [
          ["The class wants to buy books for the school library.", true],
          ["Elin has sold three flapjacks to her neighbour.", true],
          ["Dougal hasn't finished his poster yet.", false],
          ["Elin made the flapjacks on her own.", false]
        ] },
      { art: "beleg", id: "lesen-beleg", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-co-read-r",
        hilfen: ["Suche das Wort „Come“ im Text.", "Es steht in der Nähe der Uhrzeit."],
        fragen: [
          { q: "Where does Elin say when Bryn must come?", zeilen: [9, 10], e: "Elin schreibt: Come on Friday at ten o'clock.", tipp: "Suche die Zeit mit o'clock." }
        ] },
      { art: "beleg", id: "lesen-beleg", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u2-co-read-m",
        fragen: [
          { q: "Where does Elin say how Bryn can help?", zeilen: [11, 12], e: "Elin fragt: Could you come at ten o'clock and help us carry the tables?", tipp: "Suche die Frage mit Could you …?" }
        ] },
      { art: "text", html: "<p class=\"lead\">Now listen. <b>Read the questions first, then listen.</b> <span class=\"de\">Erst die Fragen lesen, dann hören. Das Transkript erscheint, wenn du fertig bist.</span></p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: { R: "u2-co-hear-r", M: "u2-co-hear-m" },
        foerder: { href: "u2_x7.html", text: "Extra: Hören mit W-Fragen" },
        fragen: [
          { art: "mc", id: "hoer-mc", nur: "R", titel: "The phone call", lead: "Listen and tick the correct answers. <span class=\"de\">Hör zu und kreuze an.</span>",
            fragen: [
              { q: "What has Heather not done yet?", o: ["She has not called the climbing centre.", "She has not asked Tavish.", "She has not been to the climbing centre.", "She has not told anybody about the jacket."], a: 0,
                e: "Tavish fragt: Have you called the centre yet? Heather antwortet: Not yet." }
            ] },
          { art: "mc", id: "hoer-mc", nur: "M", titel: "The phone call", lead: "Listen and tick the correct answers.",
            fragen: [
              { q: "What does Tavish suggest?", o: ["Heather can send the centre a message.", "Heather can buy a new jacket.", "Heather can ask her teacher.", "Heather can wait until Saturday."], a: 0,
                e: "Tavish sagt: Why don't you send them a message instead? Das ist sein Vorschlag." }
            ] }
        ] }
    ] },
    { kurz: "Unit task", ober: "Have you ever …?", titel: "A class survey", teile: [
      { art: "text", html: "<p class=\"lead\">Your class is going to do a <button class=\"term\" data-t=\"survey\">survey</button>. Everybody asks the others: <b>Have you ever …?</b> <span class=\"de\">Unit task: eine Klassenumfrage. Du schreibst Fragen, prüfst sie, liest eine Beispieltabelle und fragst dann in der Klasse.</span></p><p><b>Step 1 · Collect ideas.</b> Write six questions: three with <b>been</b> (<i>been to a castle, been in a boat</i> …) and three with other verbs (<i>tried, seen, climbed</i> …).</p>" },
      { art: "offen", id: "umfrage-fragen", nur: "R", tag: "Step 1", titel: "Your six questions", lead: "Write six questions with <b>Have you ever …?</b> <span class=\"de\">Drei mit been, drei mit anderen Verben. Nimm die Satzanfänge als Hilfe.</span>",
        hilfen: ["Beginne jede Frage mit Have you ever und nimm dann die 3. Form: been, eaten, ridden, tried, seen.", "Mit been: Have you ever been to a castle? Have you ever been in a boat?", "Ein ganzes Beispiel: Have you ever been to a castle? Have you ever tried skiing? Have you ever climbed a hill?"],
        fragen: [{ q: "Write six questions: Have you ever …?", m: "Have you ever been to a castle? Have you ever been in a boat? Have you ever been to London? Have you ever tried skiing? Have you ever climbed a hill? Have you ever heard a wolf?", k: ["have you ever", "been to|been in|been on", "eaten|ridden|tried|seen|visited|met|climbed|swum|flown|done|gone|heard|read|won|played|made|taken|bought"], min: 3 }],
        tipp: "Start like this: Have you ever been to …? / Have you ever tried …? Use the 3rd form." },
      { art: "offen", id: "umfrage-fragen", nur: "M", tag: "Step 1", titel: "Your six questions", lead: "Write six questions with <b>Have you ever …?</b> Three with <i>been</i>, three with other verbs.",
        fragen: [{ q: "Write six questions: Have you ever …?", m: "Have you ever been to a castle? Have you ever been in a boat? Have you ever been to London? Have you ever tried skiing? Have you ever climbed a hill? Have you ever heard a wolf?", k: ["have you ever", "been to|been in|been on", "eaten|ridden|tried|seen|visited|met|climbed|swum|flown|done|gone|heard|read|won|played|made|taken|bought"], min: 3 }],
        tipp: "Start like this: Have you ever been to …? / Have you ever tried …? Use the 3rd form." },
      { art: "merke", kopf: "STEP 2 · CHOOSE TOGETHER", html: "<p>Find a partner. Read your questions and choose the <b>best six</b> together.</p><div class=\"phrasen\"><span>I like your question about …</span><span>Let's take this one.</span><span>I'm not sure about this one.</span><span>Is this question too easy?</span></div>" },
      { art: "merke", kopf: "STEP 3 · CHECK SPELLING AND VERB FORMS", html: "<p>Before you write the table, <b>check</b> every question: spelling and the <button class=\"term\" data-t=\"thirdform\">3rd form</button>. This list helps you:</p><p>do – <b>done</b> · go – <b>gone</b> · see – <b>seen</b> · eat – <b>eaten</b> · fly – <b>flown</b> · swim – <b>swum</b> · meet – <b>met</b> · take – <b>taken</b> · make – <b>made</b> · have – <b>had</b> · send – <b>sent</b> · write – <b>written</b></p>" },
      { art: "luecke", id: "formen-luecke", tag: "Step 3", titel: "Check the verb forms", lead: "Complete the survey questions with the 3rd form from the box. <span class=\"de\">Die Liste oben hilft dir. Zwei Wörter bleiben übrig.</span>",
        hilfen: ["Schlage das Verb in der Liste nach: Hinter dem Strich steht die 3. Form.", "swim → swum? fly → flown, meet → met, eat → eaten.", "Satz 1: swum · Satz 2: flown · Satz 3: met · Satz 4: eaten"],
        absaetze: [
          ["Have you ever ", { g: "swum" }, " in the sea?"],
          ["Have you ever ", { g: "flown" }, " in a plane?"],
          ["Have you ever ", { g: "met" }, " a famous person?"],
          ["Have you ever ", { g: "eaten" }, " snails?"]
        ], extra: ["swam", "flew"] },
      { art: "text", html: "<p class=\"lead\">Here is a table from <b>Freya</b> and <b>Callum</b>. They asked each other four questions. <span class=\"de\">Freya und Callum haben sich gegenseitig vier Fragen gestellt. Lies die Tabelle.</span></p>" },
      { art: "material", daten: { typ: "tabelle", titel: "Freya and Callum: Have you ever …?", kopf: ["Have you ever …?", "Freya", "Callum"], reihen: [["been to a castle?", "yes", "yes"], ["ridden a horse?", "yes", "no"], ["won a prize?", "no", "yes"], ["tried rock climbing?", "no", "no"]] } },
      { art: "luecke", id: "tabelle-luecke", tag: "Read the table", titel: "What does the table say?", lead: "Complete the sentences with words from the box. <span class=\"de\">Schau in die Tabelle. Zwei Wörter bleiben übrig.</span>",
        hilfen: ["Suche die Zeile in der Tabelle und lies, wer „yes“ und wer „no“ hat.", "Bei „no“ brauchst du die Verneinung: has not.", "Satz 1: been · Satz 2: ridden – has not · Satz 3: won"],
        absaetze: [
          ["Freya and Callum have both ", { g: "been" }, " to a castle."],
          ["Freya has ", { g: "ridden" }, " a horse, but Callum ", { g: "has not" }, "."],
          ["Callum has ", { g: "won" }, " a prize, but Freya has not."]
        ], extra: ["rode", "did not"] },
      { art: "offen", id: "tabelle-schreiben", m7: true, tag: "Your words", titel: "Two sentences about the table", lead: "Write two sentences about Freya and Callum. Use <b>but</b> or <b>both</b>. <span class=\"de\">Zum Beispiel über Pferde oder über Preise.</span>",
        fragen: [{ q: "Write two sentences about Freya and Callum.", m: "Freya has ridden a horse, but Callum hasn't. They have both been to a castle.", k: ["has|have", "but|both|neither", "freya|callum"], min: 3 }],
        tipp: "Start like this: Freya has … but Callum … / They have both … Use the table." },
      { art: "merke", kopf: "STEP 4 · WALK AROUND AND ASK", html: "<p>Now stand up, take your table and ask your classmates. For every question write down <b>how many say yes</b>.</p><div class=\"phrasen\"><span>Have you ever …?</span><span>Yes, I have. / No, I haven't.</span><span>Thank you. Next question!</span></div><p>At the end tell the class: <i>Six of us have been to a castle.</i></p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class=\"de\">Was gehört zu Unit 2?</span>",
        aussagen: [
          ["After he, she and it you use has.", true],
          ["With yesterday or last week you use the present perfect.", false],
          ["You use going to for plans: I'm going to see my gran.", true],
          ["The short answer to Have you ever tried it? is Yes, I did.", false],
          ["The 3rd form of make is made.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You have checked what you can do after Unit 2 and you have revised the important words and the grammar. Look at the tasks you found difficult once more – then you are fit for the test." }
});
