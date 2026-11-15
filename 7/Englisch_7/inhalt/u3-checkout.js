/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Checkout: Fit for the test: Unit 3 (Kürzel C16)
   (Wiederholung der ganzen Unit vor der Probe: sechs Ich-kann-Sätze mit je einer Mini-Aufgabe, Wörter, die Grammatik der Unit
   – Ort vor Zeit (G8), some/any/no (G9) – mit Fehlertext, ein kurzer Lesetext, ein kurzer Hörtext und als Unit task eine
   Fotogeschichte „The lost phone“ in der Gruppe)
   Buchprinzip (Checkout, nur Aufbau, nichts übernommen): Checklist mit den sechs Kann-Zielen der Unit, je mit typischen
   Wendungen und einem Balken zum Selbsteinschätzen; Unit task „Fotogeschichte“ in sechs Schritten in der Gruppe: gute Geschichte
   finden, Plan machen (Wo? Wer? Was? Wie viele Fotos?), Texte und Sprechblasen zu den Bildern, Entwurf prüfen, Reinschrift,
   vorstellen und Rückmeldung holen. Besser: nach jedem Ich-kann-Satz sofort eine kleine Aufgabe mit Rückmeldung (der Balken ist
   dann keine Schätzung mehr), echte Wiederholung der Grammatik mit Fehlertext statt nur Lesen, Förder-Links zu den Extra-Seiten
   an den Stellen, an denen Kinder hängen bleiben, ein kurzer neuer Lese- und Hörtext zur Probe-Situation, und die Fotogeschichte
   mit Schritte-ordnen, Beispielplan einer Gruppe zum Lesen und Auswerten, eigenem Plan, Sprechblasen und Hilfen in Stufen.
   Differenzierung: Lesen und Hören – R7 und M7 haben eigene Fassungen derselben Situation (Lesetext R7 96 / M7 169 Wörter,
   Hörtext R7 79 / M7 148 Wörter) mit eigenen Zeilenangaben und Fragen; Sprechblasen – R7 mit Satzanfängen und Hilfen in Stufen,
   M7 ohne; Plus für M7 (m7): zwei kurze Schreibaufgaben (zwei Sätze zur Beispieltabelle mit Ort vor Zeit, drei Sätze mit
   Zeitwörtern first/then/later).
   LehrplanPLUS E7 1.1 Leseverstehen, E7 1.2 Hörverstehen, E7 1.3 Sprechen (Rat geben, Fahrt planen), E7 2.2 Schreiben (Sprechblasen,
   Planung), E7 2.3 Sprachmittlung (Steckbrief auf Deutsch → Englisch), E7 3 (Ort vor Zeit, some/any/no), E7 5 (Irland, Alltag).
   Texte: u3-co-read-r/-m (E-Mail „A trip to Ennis“), u3-co-hear-r/-m (Fahrkartenschalter). Personen sind erfunden (Bridie, Clare,
   Jakob Berger, Fergal, Brona, Grainne, Aidan, Dermot, Emer, Padraig, Niall, Nuala); Ennis ist nur als Ausflugsziel genannt.
   Förder-Links: Fahrt planen → unit3/extra/transport.html, Rat geben → unit3/extra/advice.html, Ort vor Zeit →
   unit3/extra/word-order.html, some/any/no → unit3/extra/some-any.html, Hören → u3_x6.html.
   Wörter der Unit (alle Abschnitte des Trainers) kommen bewusst vor: timetable, to change, journey, single/return ticket, advice,
   fed up, guest, should, euro, shamrock, hurling, finally, surprise, each other, workshop.
   BILDER:
   1. Station „I can“ (Vorentlastung): vier kleine Bilder in einer Reihe – ein Kind steht an einer Bushaltestelle und schaut auf
      den Fahrplan, ein Mädchen an einem Zugfenster, zwei Kinder in grünen Jacken mit kleinem Kleeblatt am Pulli bei einem
      Straßenfest, zwei Kinder streiten um einen Ball.
   2. Station „Read & listen“ (Lesetext): ein Bahnsteig am Morgen, eine Schulklasse mit Mänteln und Rucksäcken wartet, die Lehrerin
      hält eine Mappe in der Hand, der Zug fährt gerade ein.
   3. Station „Unit task“ (Sprechanlass): sechs Fotos einer Fotogeschichte als Collage – Handy auf einer Bank an der Bushaltestelle,
      Bus, Junge sucht in seinen Taschen, Mädchen findet das Handy, Schulhoftor, Danke-Handschlag. */
D7Kit.seite({
  id: "u3-checkout",
  titel: "Checkout · Fit for the test: Unit 3",
  einleitung: "The test is coming! In this module you check what you can do after <b>Unit 3</b>: you test yourself on six things, revise words and grammar, read and listen to a short text, and then you do the <b>Unit task</b> – a <b>photo story</b> called <i>The lost phone</i>. Du siehst sofort, was schon sitzt und was du noch üben solltest.",
  zeit: "etwa 45 Minuten",
  ziele: ["✅ I check what I can do after Unit 3.", "📚 I know the important words of the unit.", "🧩 I put place before time and use some, any and no correctly.", "🔎 I read and listen to short texts and find the details.", "📸 I plan a photo story and write the speech bubbles."],
  thema: "Unit 3 Welcome to Ireland, Checkout: Wiederholung der ganzen Unit und Fotogeschichte (The lost phone)",
  quiz: { profi: "Fit pro" },
  glossar: {
    turning: ["turning point", "Wendepunkt: Das ist die Stelle in einer Geschichte, an der sich plötzlich etwas ändert."],
    timetable: ["timetable", "Fahrplan: Er zeigt, wann ein Bus oder ein Zug abfährt und wann er ankommt."],
    photostory: ["photo story", "Fotogeschichte: Man erzählt eine kleine Geschichte mit mehreren Fotos, zu denen Texte oder Sprechblasen gehören."],
    bubble: ["speech bubble", "Sprechblase: Darin steht, was eine Person auf dem Bild sagt."],
    draft: ["draft", "Entwurf: Das ist die erste Fassung deines Textes, die du später noch verbesserst."],
    place: ["place and time", "Eine Ortsangabe sagt, wo etwas passiert (at the station). Eine Zeitangabe sagt, wann es passiert (on Friday). Am Satzende steht der Ort vor der Zeit."]
  },
  stationen: [
    { kurz: "I can", ober: "Check yourself", titel: "What can I do now?", teile: [
      { art: "text", html: "<p class='lead'>At the end of Unit 3 you can do six things. Don't just say \"yes\" – <b>try it</b>! After each sentence there is a small task. <span class='de'>Lies die sechs Sätze. Nach jedem Satz kommt eine kleine Aufgabe. So siehst du gleich, ob es klappt.</span></p>" },
      { art: "merke", kopf: "CHECKLIST · I CAN …", html: "<ol><li><b>… understand something about Ireland.</b> <i>the euro · St Patrick's Day · hurling</i></li><li><b>… plan a journey by bus and train.</b> <i>timetable · You have to change. · a single ticket / a return ticket</i></li><li><b>… give somebody advice.</b> <i>You should … · Why don't you …? · I think you could …</i></li><li><b>… read a story about moving house.</b> <i>How does she feel? What helps?</i></li><li><b>… tell somebody in English about a person.</b> <i>He plays … · He trains on … · She likes …</i></li><li><b>… understand a story about an argument.</b> <i>Why do they argue? What is the <button class='term' data-t='turning'>turning point</button>?</i></li></ol>" },
      { art: "mc", id: "k1", tag: "I can … 1/6", titel: "Ireland", lead: "<b>Fact file:</b> People in the Republic of Ireland pay with euros. On 17 March the Irish celebrate St Patrick's Day: many people wear green clothes and a small shamrock. Hurling is a fast sport – players hit a small ball with a stick. <span class='de'>Lies den Steckbrief und kreuze an.</span>",
        fragen: [
          { q: "What do many people wear on St Patrick's Day?", o: ["Green clothes and a shamrock.", "Red hats and warm coats.", "Blue shirts with a number.", "White clothes and a stick."], a: 0,
            e: "Im Steckbrief steht: many people wear green clothes and a small shamrock." }
        ] },
      { art: "mc", id: "k2", tag: "I can … 2/6", titel: "Planning a journey", lead: "<b>Timetable:</b> Bus 21, school to station – leaves 09.10, arrives 09.30 · leaves 09.40, arrives 10.00. The train to the coast leaves the station at 09.45. <span class='de'>Du willst den Zug um 09.45 Uhr nehmen. Welchen Bus nimmst du?</span>",
        foerder: { href: "unit3/extra/transport.html", text: "Extra: Verkehr und Weg" },
        fragen: [
          { q: "Which bus gets you to the station before the train leaves?", o: ["The bus at 09.10.", "The bus at 09.40.", "Both buses.", "Neither bus."], a: 0,
            e: "Der Bus um 09.10 Uhr kommt um 09.30 Uhr an – also vor dem Zug. Der Bus um 09.40 Uhr kommt erst um 10.00 Uhr an, da ist der Zug schon weg." }
        ] },
      { art: "mc", id: "k3", tag: "I can … 3/6", titel: "Giving advice", lead: "Your friend Clare says: \"I'm fed up. I don't know anybody in my new class.\" <span class='de'>Clare ist neu in der Klasse. Welcher Rat ist gut?</span>",
        foerder: { href: "unit3/extra/advice.html", text: "Extra: Ratschläge geben" },
        fragen: [
          { q: "What is good advice for Clare?", o: ["You should ask somebody to sit with you at lunch.", "You should stay at home and do nothing.", "You can't be fed up.", "I am fed up, too."], a: 0,
            e: "Ein Ratschlag mit should macht einen Vorschlag, der hilft. Neue Leute kennenlernen hilft Clare, zu Hause bleiben nicht." }
        ] },
      { art: "mc", id: "k4", tag: "I can … 4/6", titel: "A story about moving", lead: "<b>Bridie moved to a new town.</b> On her first day at school she sat alone at lunch and felt unhappy. Then a girl came to her table and said: \"Do you want to sit with us?\" Bridie smiled for the first time that day. <span class='de'>Was verändert Bridies Tag?</span>",
        fragen: [
          { q: "What changes Bridie's day?", o: ["A girl asks her to sit with her friends.", "Bridie goes home early.", "Bridie goes to a different school.", "The teacher gives her a book."], a: 0,
            e: "Bridie fühlt sich allein. Dann lädt das Mädchen sie an den Tisch ein – das ändert alles, und Bridie lächelt." }
        ] },
      { art: "mc", id: "k5", tag: "I can … 5/6", titel: "Telling somebody about a person", lead: "<b>Steckbrief:</b> „Jakob Berger ist 14 Jahre alt und spielt seit drei Jahren Tischtennis im Verein. Er trainiert dienstags und donnerstags. Sein Hund heißt Mats.“ Dein irischer Freund fragt: <i>\"What does Jakob do in his free time?\"</i>",
        fragen: [
          { q: "What do you say?", o: ["He plays table tennis in a club. He trains on Tuesdays and Thursdays.", "He is fourteen. His dog is called Mats.", "He plays table tennis on Mondays. He has got a dog.", "He plays football in a club. He trains on Tuesdays and Thursdays."], a: 0,
            e: "Dein Freund fragt nach der Freizeit. Du sagst also Sport und Trainingstage. Alter und Hund hat er nicht gefragt, und Fußball oder Montag wären falsch." }
        ] },
      { art: "mc", id: "k6", tag: "I can … 6/6", titel: "Understanding an argument", lead: "<b>Fergal and Brona both want the ball.</b> \"It's my turn!\" – \"No, it's mine!\" They shout and nobody plays. Then Brona says: \"Why don't we play together? We can have two teams.\" Fergal laughs. <span class='de'>Wo ändert sich die Geschichte?</span>",
        fragen: [
          { q: "Which sentence is the turning point?", o: ["Brona suggests playing together.", "Fergal and Brona shout.", "Both children want the ball.", "Nobody plays."], a: 0,
            e: "Der Wendepunkt ist die Stelle, an der der Streit endet: Brona schlägt vor, zusammen zu spielen. Vorher streiten die beiden nur." }
        ] }
    ] },
    { kurz: "Words", ober: "Revision", titel: "Words from the whole unit", teile: [
      { art: "text", html: "<p class='lead'>Words are the base of everything. Check the words from <b>all parts</b> of Unit 3. <span class='de'>Wörter aus allen Abschnitten der Unit: zuordnen und Lückensätze.</span></p>" },
      { art: "paare", id: "woerter-paare", tag: "Match", titel: "Find the pairs", lead: "Match the English words with the German words. <span class='de'>Welches deutsche Wort passt?</span>",
        hilfen: ["Denke an die Situationen: Bus, Rat, Gast, Streit.", "Zwei Wörter kennst du von Fahrten: timetable und journey.", "timetable = Fahrplan · journey = Fahrt · advice = Rat · guest = Gast · shamrock = Kleeblatt · to celebrate = feiern"],
        paare: [["timetable", "Fahrplan"], ["journey", "Fahrt"], ["advice", "Rat"], ["guest", "Gast"], ["shamrock", "Kleeblatt"], ["to celebrate", "feiern"]] },
      { art: "luecke", id: "woerter-luecke", tag: "Gap text", titel: "The right word", lead: "Complete the sentences with words from the box. <span class='de'>Zwei Wörter bleiben übrig.</span>",
        hilfen: ["Lies den ganzen Satz und überlege, welches Wort sinnvoll ist: Wo steht ein Fahrplan, wer kommt zu Besuch?", "Wer zu Besuch kommt, ist ein guest. Wer die Nase voll hat, ist fed up.", "timetable = Fahrplan · change = umsteigen · guest = Gast · fed up = die Nase voll · advice = Rat"],
        absaetze: [
          ["Look at the ", { g: "timetable" }, " – the next bus is at ten."],
          ["This bus doesn't go to the lake. You have to ", { g: "change" }, " at the station."],
          ["My cousin is our ", { g: "guest" }, " this weekend."],
          ["I'm ", { g: "fed up" }, " with the rain."],
          ["Clare asks her teacher for ", { g: "advice" }, "."]
        ], extra: ["workshop", "poem"] }
    ] },
    { kurz: "Grammar", ober: "Revision", titel: "Grammar of Unit 3", teile: [
      { art: "merke", kopf: "UNIT 3 IN FIVE LINES", html: "<ul><li><b>Place before time:</b> If a sentence ends with <button class='term' data-t='place'>place and time</button>, the place comes first: <i>We met <b>at the café</b> <b>on Friday</b>.</i></li><li><b>some</b> – in positive sentences: <i>We have got some apples.</i></li><li><b>any</b> – in negative sentences and questions: <i>We haven't got any tickets. Have you got any milk?</i></li><li><b>no</b> – means \"not any\" in a positive sentence: <i>There is no cheese.</i> Never use <i>no</i> together with <i>not</i>.</li><li><b>something / anything / nothing</b> and <b>somebody / anybody / nobody</b> work in the same way.</li></ul>" },
      { art: "luecke", id: "wo-luecke", tag: "Place and time", titel: "Where? When?", lead: "Complete the sentences with the words from the box. <span class='de'>Jede Lücke ist ein Ort oder eine Zeit. Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit3/extra/word-order.html", text: "Extra: Ort vor Zeit Schritt für Schritt" },
        hilfen: ["Frage in jedem Satz: Wo? und Wann? Der Ort kommt zuerst.", "Satz 1: erst der Ort (at the bakery), dann die Zeit (yesterday).", "Satz 1: at the bakery – yesterday · Satz 2: in the park – next Sunday · Satz 3: in the lake – right now"],
        absaetze: [
          ["Fergal bought some bread ", { g: "at the bakery" }, " ", { g: "yesterday" }, "."],
          ["We are going to have a picnic ", { g: "in the park" }, " ", { g: "next Sunday" }, "."],
          ["Look! Brona is swimming ", { g: "in the lake" }, " ", { g: "right now" }, "."]
        ], extra: ["to school", "very"] },
      { art: "luecke", id: "sa-luecke", tag: "some, any, no", titel: "Which word?", lead: "Complete the sentences with the words from the box. <span class='de'>Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit3/extra/some-any.html", text: "Extra: some oder any?" },
        hilfen: ["Schau zuerst: Ist der Satz bejaht oder verneint? Steht n't im Satz?", "Nach haven't got steht any. no steht in einem bejahten Satz, in dem sonst nicht verneint wird.", "Satz 1: some · Satz 2: any · Satz 3: no · Satz 4: anything · Satz 5: something"],
        absaetze: [
          ["There are ", { g: "some" }, " sandwiches in the bag, so we can eat."],
          ["I haven't got ", { g: "any" }, " money for the bus."],
          ["There is ", { g: "no" }, " bus on Sunday, so we must walk."],
          ["It is dark. I can't see ", { g: "anything" }, "."],
          ["Wait here! I've got ", { g: "something" }, " special for you."]
        ], extra: ["none", "nobody"] },
      { art: "text", html: "<p class='lead'>Now find the mistakes. In this note there are exactly <b>three mistakes</b> – they are printed in bold. <span class='de'>Genau drei Fehler stehen fett gedruckt in dieser Nachricht. Schreibe die drei Sätze richtig auf.</span></p><blockquote>We waited <b>on Monday at the bus stop</b>. There wasn't <b>some</b> bus. Dermot hasn't got <b>no</b> ticket.</blockquote>" },
      { art: "offen", id: "fehlertext", tag: "Find the mistakes", titel: "Write the three sentences correctly", lead: "Write all three sentences without the mistakes. <span class='de'>Schreibe alle drei Sätze richtig auf.</span>",
        foerder: { href: "unit3/extra/some-any.html", text: "Extra: some oder any?" },
        fragen: [{ q: "Write the three sentences correctly.", m: "We waited at the bus stop on Monday. There wasn't any bus. Dermot hasn't got a ticket.", k: ["at the bus stop on monday", "any bus|was no bus|wasn't a bus|was not a bus", "hasn't got a ticket|hasn't got any ticket|has no ticket|has got no ticket|has not got a ticket|has not got any ticket|doesn't have a ticket|doesn't have any ticket|does not have a ticket|does not have any ticket"], min: 3 }],
        tipp: "Satz 1: Ort vor Zeit – erst wo, dann wann. · Satz 2: Nach wasn't steht any. · Satz 3: hasn't got verneint schon – no darf nicht noch einmal verneinen." }
    ] },
    { kurz: "Read & listen", ober: "Mini-check", titel: "Read and listen", teile: [
      { art: "text", html: "<p class='lead'>An email about a trip and a conversation at a ticket office – like in a test. <span class='de'>Erst ein kurzer Text, dann ein Gespräch am Schalter.</span></p><p>Before you read, imagine: <b>a school class waits on a platform in the morning</b>. What do the children take with them?</p>" },
      { art: "lesetext", lesetext: { R: "u3-co-read-r", M: "u3-co-read-m" } },
      { art: "tf", id: "lesen-tf", nur: "R", tag: "Reading", titel: "True or false?", lead: "Tick true or false. <span class='de'>Der Text bleibt über der Aufgabe stehen.</span>",
        hilfen: ["Suche zu jeder Aussage die passende Stelle im Text.", "Achte auf Wörter wie only, yet und any."],
        aussagen: [
          ["The class is going to Ennis on Tuesday.", true],
          ["The class is going to travel by bus only.", false],
          ["The class has got the tickets.", false],
          ["The children should take a coat.", true]
        ] },
      { art: "tf", id: "lesen-tf", nur: "M", tag: "Reading", titel: "True or false?", lead: "Tick true or false. <span class='de'>Der Text bleibt über der Aufgabe stehen.</span>",
        aussagen: [
          ["The class must bring the money for the tickets on Friday.", true],
          ["There is a direct train from Grainne's town to Ennis.", false],
          ["Grainne likes wearing hats.", false],
          ["Aidan can still come if he asks his parents today.", true]
        ] },
      { art: "beleg", id: "lesen-beleg", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class='de'>Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-co-read-r",
        hilfen: ["Suche die Uhrzeit mit o'clock.", "Es steht im Satz mit dem Wort leaves."],
        fragen: [
          { q: "Where does Grainne say when the train leaves?", zeilen: [4, 5], e: "Grainne schreibt: The train leaves at eight o'clock.", tipp: "Suche die Zeit mit o'clock." }
        ] },
      { art: "beleg", id: "lesen-beleg", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class='de'>Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u3-co-read-m",
        fragen: [
          { q: "Where does Grainne say why the class changes from the train to a bus?", zeilen: [3, 4], e: "Sie schreibt: … by bus because there isn't a direct train from our town.", tipp: "Suche das Wort because." }
        ] },
      { art: "text", html: "<p class='lead'>Now listen. <b>Read the questions first, then listen.</b> <span class='de'>Erst die Fragen lesen, dann hören. Das Transkript erscheint, wenn du fertig bist.</span></p>" },
      { art: "hoertext", id: "hoer", tag: "🎧 Listening", hoertext: { R: "u3-co-hear-r", M: "u3-co-hear-m" },
        foerder: { href: "u3_x6.html", text: "Extra: Hören und einem Weg folgen" },
        fragen: [
          { art: "mc", id: "hoer-mc", nur: "R", titel: "At the ticket office", lead: "Listen and tick the correct answers. <span class='de'>Hör zu und kreuze an.</span>",
            fragen: [
              { q: "How much is one return ticket?", o: ["Twelve euros.", "Two euros.", "Nine euros.", "Twenty euros."], a: 0,
                e: "Padraig sagt: A return ticket is twelve euros." }
            ] },
          { art: "tf", id: "hoer-tf", nur: "R", titel: "Is it true?", lead: "Tick true or false. <span class='de'>Richtig oder falsch?</span>",
            aussagen: [
              ["Emer has to change trains.", false],
              ["There isn't any café on the train.", true]
            ] },
          { art: "mc", id: "hoer-mc", nur: "M", titel: "At the ticket office", lead: "Listen and tick the correct answers.",
            fragen: [
              { q: "Why does Emer take the group ticket?", o: ["It is cheaper than four return tickets.", "It is faster than a normal ticket.", "The ticket office has no other tickets.", "Padraig says it is a rule."], a: 0,
                e: "Padraig sagt: The group ticket is cheaper. Deshalb nimmt Emer sie." }
            ] },
          { art: "tf", id: "hoer-tf", nur: "M", titel: "Is it true?", lead: "Tick true or false.",
            aussagen: [
              ["The train leaves from platform two.", true],
              ["There is a café on the train.", false]
            ] }
        ] }
    ] },
    { kurz: "Unit task", ober: "A photo story", titel: "The lost phone", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a photo story in six pictures</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-co-fotostory.jpg\" width=\"1280\" height=\"853\" alt=\"A photo story in six pictures: a boy leaves his phone on a bench at a bus stop and gets on the bus, looks for it on the bus, a girl finds it and gives it back to him at the school gate.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What happens in the six pictures? Tell the story with first, then and later. <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class='lead'>Your group is going to make a <button class='term' data-t='photostory'>photo story</button> called <b>The lost phone</b>. Three or four children work together. <span class='de'>Unit task: eine Fotogeschichte in der Gruppe. Du planst die Geschichte, liest den Plan einer Beispielgruppe, schreibst Sprechblasen und stellst die Geschichte dann vor.</span></p><p>First, the group must know the six steps. Put them in the right order.</p>" },
      { art: "ordnen", id: "schritte", tag: "Steps", titel: "Six steps for a photo story", lead: "Put the six steps in the right order. <span class='de'>Was kommt zuerst, was zuletzt?</span>",
        hilfen: ["Zuerst braucht ihr eine Idee, ganz am Schluss kommt das Publikum.", "Erst planen, dann Fotos machen. Erst die Fotos, dann die Sprechblasen.", "1 Idee · 2 Plan · 3 Fotos · 4 Sprechblasen · 5 prüfen · 6 vorstellen"],
        schritte: ["Choose a story idea together: a phone is lost.", "Make a plan: where, when and who is in each photo?", "Take six photos that tell the story.", "Write the speech bubbles for your photos.", "Read your draft with a friend and check the spelling.", "Present your photo story and ask the class for feedback."] },
      { art: "merke", kopf: "HINT FOR YOUR GROUP", html: "<p><b>Take six photos</b> – two for the beginning, two for the middle and two for the end. Every photo needs one place and one time. Use <b>time words</b> to link the photos: <i>first · then · later · after that · the next day · in the end</i>.</p><p>A <button class='term' data-t='bubble'>speech bubble</button> shows what a person says. Keep it short: one or two sentences.</p>" },
      { art: "text", html: "<p class='lead'>Here is the plan of <b>Niall</b> and <b>Nuala</b>. Their story: Niall loses his phone, and Nuala finds it. <span class='de'>Niall und Nuala haben ihre Geschichte schon geplant. Lies die Tabelle.</span></p>" },
      { art: "material", daten: { typ: "tabelle", titel: "Niall and Nuala: The lost phone", kopf: ["Photo", "Where?", "When?", "What happens?"], reihen: [["1", "at the bus stop", "in the morning", "Niall puts his phone on the bench."], ["2", "at the bus stop", "in the morning", "The bus comes. Niall gets on."], ["3", "on the bus", "at ten past eight", "Niall looks for his phone. It's gone!"], ["4", "at the bus stop", "at half past eight", "Nuala finds a phone on the bench."], ["5", "at the school gate", "at nine o'clock", "Nuala asks: \"Is this your phone?\""], ["6", "at the school gate", "at nine o'clock", "Niall says thank you."]] } },
      { art: "luecke", id: "plan-luecke", tag: "Read the plan", titel: "What does the plan say?", lead: "Complete the sentences with words from the box. <span class='de'>Schau in die Tabelle. Zwei Angaben bleiben übrig.</span>",
        foerder: { href: "unit3/extra/word-order.html", text: "Extra: Ort vor Zeit Schritt für Schritt" },
        hilfen: ["Suche die Foto-Nummer in der Tabelle und lies die Spalten Where? und When?.", "Bei Foto 3 steht die Angabe zum Ort in der Spalte Where?.", "Satz 1: on the bus · Satz 2: half past eight · Satz 3: school gate"],
        absaetze: [
          ["In photo 3 Niall is ", { g: "on the bus" }, " and looks for his phone."],
          ["Nuala finds the phone at ", { g: "half past eight" }, "."],
          ["In photos 5 and 6 the children are at the ", { g: "school gate" }, "."]
        ], extra: ["in the park", "ten o'clock"] },
      { art: "offen", id: "plan-satz", m7: true, tag: "Your words", titel: "Two sentences about the plan", lead: "Write two sentences about the plan. Say <b>where</b> and <b>when</b>. <span class='de'>Ort vor Zeit.</span>",
        fragen: [{ q: "Write two sentences about the plan of Niall and Nuala.", m: "Nuala finds the phone at the bus stop at half past eight. Niall and Nuala are at the school gate at nine o'clock.", k: ["nuala|niall", "at the bus stop at half past eight|at the school gate at nine o'clock|on the bus at ten past eight|at the bus stop in the morning"], min: 2 }],
        tipp: "Start like this: Nuala finds the phone … / In photo 5 the children are … Place before time: at the school gate at nine o'clock." },
      { art: "offen", id: "eigener-plan", tag: "Your plan", titel: "Roles and scenes", lead: "Plan your own photo story <i>The lost phone</i>. Write who plays which role and where photos 1 and 3 are. <span class='de'>Wer spielt wen? Wo und wann spielen Foto 1 und Foto 3?</span>",
        hilfen: ["Zwei Rollen reichen: ein Kind verliert das Handy, ein Kind findet es.", "Nimm die Satzanfänge: … is the girl who loses the phone. Photo 1 is …", "Ein ganzes Beispiel: Clare is the girl who loses the phone. Fergal is the boy who finds it. Photo 1 is at the bus stop in the morning. Photo 3 is at the school gate on Monday."],
        fragen: [{ q: "Write the roles and say where photos 1 and 3 are.", m: "Clare is the girl who loses the phone. Fergal is the boy who finds it. Photo 1 is at the bus stop in the morning. Photo 3 is at the school gate on Monday.", k: ["is the|plays the", "photo 1|photo one", "photo 3|photo three"], min: 3 }],
        tipp: "Start like this: … is the girl / boy who … · Photo 1 is at … Place before time." },
      { art: "offen", id: "sprechblasen", nur: "R", tag: "Speech bubbles", titel: "Photo 5: What do they say?", lead: "In photo 5 Nuala gives the phone back to Niall. Write one speech bubble for Nuala and one for Niall. <span class='de'>Schreibe, was Nuala sagt und was Niall antwortet.</span>",
        hilfen: ["Nuala fragt, ob das Handy Niall gehört. Niall bedankt sich.", "Nuala: Excuse me, is this …? · Niall: Yes, it is! Thank …", "Nuala: Excuse me, is this your phone? Niall: Yes, it is! Thank you very much."],
        fragen: [{ q: "Write what Nuala says and what Niall answers.", m: "Excuse me, is this your phone? Yes, it is! Thank you very much.", k: ["is this your|is that your|is this yours|did you lose|have you lost", "thank you|thanks"], min: 2 }],
        tipp: "Nuala: Excuse me, is this …? · Niall: Yes, … Thank …" },
      { art: "offen", id: "sprechblasen", nur: "M", tag: "Speech bubbles", titel: "Photo 5: What do they say?", lead: "In photo 5 Nuala gives the phone back to Niall. Write one speech bubble for Nuala and one for Niall.",
        fragen: [{ q: "Write what Nuala says and what Niall answers.", m: "Excuse me, is this your phone? Yes, it is! Thank you very much.", k: ["is this your|is that your|is this yours|did you lose|have you lost", "thank you|thanks"], min: 2 }],
        tipp: "Two short bubbles: Nuala asks something, Niall answers and says thank you." },
      { art: "offen", id: "zeitwoerter", m7: true, tag: "Your words", titel: "Time words", lead: "Write three sentences about the story of Niall and Nuala. Use <b>first</b>, <b>then</b> and <b>later</b> (or <i>after that</i>, <i>the next day</i>).",
        fragen: [{ q: "Write three sentences with time words.", m: "First Niall puts his phone on the bench. Then he gets on the bus. Later Nuala finds the phone.", k: ["first|at first", "then", "later|after that|the next day|in the end"], min: 3 }],
        tipp: "Start like this: First Niall … / Then he … / Later Nuala … Use the plan." },
      { art: "merke", kopf: "STEPS 5 AND 6 · CHECK AND PRESENT", html: "<p>Before you present, <b>check</b> your <button class='term' data-t='draft'>draft</button>: Is every photo there? Is the spelling right? Place before time?</p><div class='phrasen'><span>Our story is called …</span><span>In photo three you can see …</span><span>The turning point is photo …</span><span>Do you have any questions?</span></div><p>At the end ask the class: <i>Which story was the best, and why?</i></p>" }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Am I ready?", teile: [
      { art: "tf", id: "bereit", tag: "Study tips", titel: "Am I ready for the test?", lead: "Tick true or false. <span class='de'>Was gehört zu Unit 3?</span>",
        aussagen: [
          ["At the end of a sentence the place comes before the time.", true],
          ["After haven't got you use some: I haven't got some money.", false],
          ["You can say: There isn't no bus.", false],
          ["You can start good advice with You should …", true],
          ["A speech bubble shows what a person says.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You have checked what you can do after Unit 3 and you have revised the important words and the grammar. Look at the tasks you found difficult once more – then you are fit for the test." }
});
