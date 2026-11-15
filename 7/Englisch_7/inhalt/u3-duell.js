/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Duelle: Unit 3 (Kürzel C22)
   Aufwärmen: richtig/falsch (gemeinsam), Ankreuzfragen (R7 leichter, M7 schwerer) und Zuordnen Wort – deutsche Bedeutung;
   Duell gegen die KI (6 Runden je Zug, die „KI“ irrt in zwei Runden mit einleuchtender Begründung, eine Runde mit
   Begründungssatz); Tischduell zu zweit an einem Gerät (12 kurze Fragen je Zug, Antworten zwei bis vier Wörter).
   Inhalt: Wörter der Unit 3 (Bus und Bahn, Ratschläge, Gefühle, Irland, Präpositionen der Zeit) und Grammatik
   G8 Ort vor Zeit (Angaben am Satzende), G9 some, any, no (+ something/anything/nothing, somebody/anybody/nobody).
   Buchprinzip (nur Aufbau, nichts übernommen): kurze Wiederholungsrunden am Ende der Unit. Besser: Gegner „KI“ klingt
   sicher und irrt manchmal – das Kind prüft mit der Regel; Rückmeldung zu jeder Antwort; Tischduell ohne Aufwand.
   Differenzierung: R7 mit deutschen Hilfen und einfacheren Runden (Wörter, some/any in Angebot und Verneinung, Ort vor
   Zeit mit Dreierauswahl), M7 englisch mit Sammelwörtern (anything, nobody), Vergangenheit und Begründungssatz zu some in
   einer neutralen Frage. Duelle sind Zusatz und zählen nicht zum Lernfortschritt.
   LehrplanPLUS E7 2 (Wortschatz, Grammatik: Wortstellung, some/any/no), E7 5 (Irland).
   Eigene Sätze, keine Texte aus Büchern oder Prüfungen. Keine Hörtexte, keine Personennamen.
   Die „KI“ irrt je Zug in zwei Runden mit Absicht – R7: Runde 3 (Zeit vor Ort: „at noon at the market“ als
   Regelfall), Runde 5 („I haven't got no money“, mit Begründungssatz); M7: Runde 2 (Zeit vor Ort in der Vergangenheit als
   „einzig richtige“ Form), Runde 5 („Have you got some brothers or sisters?“ in einer neutralen Frage, mit Begründungssatz).
   Die Erklärung stellt es richtig.
   BILDER:
   1. Station „Warm-up“ (Sprechanlass): zwei Kinder auf einer Bank an einer Bushaltestelle in einer irischen Kleinstadt
      spielen an einem Tablet ein Quiz-Duell, daneben ein Fahrplanaushang; ein Kleeblatt-Aufkleber klebt am Haltestellenschild.
   2. Station „Table duel“ (Vorentlastung): zwei Kinder sitzen an einem Tisch, das Tablet liegt in der Mitte zwischen ihnen,
      jedes hat eine Hand an seiner Antwortseite; ein Kleeblatt-Radiergummi und ein Busfahrschein liegen auf dem Tisch. */
D7Kit.seite({
  id: "u3-duell",
  titel: "Duels: Unit 3",
  einleitung: "Words and grammar from Unit 3 – mixed. Warm up, play against the AI (it sounds very sure, but it is not always right) and challenge someone at your table. <span class=\"de\">Wärm dich auf, tritt gegen die KI an und fordere jemanden am Tisch heraus.</span>",
  zeit: "etwa 20 Minuten",
  ziele: ["🧩 I put the place before the time and use some, any and no.", "⚔️ I notice when an answer sounds good but is wrong.", "👥 I play fair with a partner on one device."],
  thema: "Unit 3 Duelle",
  stationen: [
    { kurz: "Warm-up", ober: "Warm-up", titel: "True or false?", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a quiz duel at the bus stop</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-duell.jpg\" width=\"1280\" height=\"853\" alt=\"Two children play a quiz duel on one tablet on the bench of a bus stop; a small shamrock sticker on the pole.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who do you think is faster? Get ready – now it is your turn! <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "tf", id: "warm", nur: "R", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false. <span class=\"de\">Stimmt die Aussage?</span>", aussagen: [
        ["\"You should ask someone for help\" gives advice.", true],
        ["\"The tram stops at the library at noon\" has the usual order: place first, then time.", true],
        ["\"There aren't no seats on the bus\" is a correct sentence.", false],
        ["\"To get off\" means einsteigen.", false],
        ["\"Is anybody there?\" is a correct question.", true]
      ] },
      { art: "tf", id: "warm", nur: "M", tag: "Warm-up", titel: "Five quick statements", lead: "Tick true or false.", aussagen: [
        ["\"You should ask someone for help\" gives advice.", true],
        ["\"The tram stops at the library at noon\" has the usual order: place first, then time.", true],
        ["\"There aren't no seats on the bus\" is a correct sentence.", false],
        ["\"To get off\" means einsteigen.", false],
        ["\"Is anybody there?\" is a correct question.", true]
      ] },
      { art: "mc", id: "warm2", nur: "R", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer. <span class=\"de\">Kreuze die richtige Antwort an.</span>", fragen: [
        { q: "Complete: Have you got ___ brothers or sisters?", o: ["any", "some", "no"], a: 0, e: "In einer normalen Frage steht any: Have you got any brothers or sisters? Some steht in Fragen nur bei Angeboten und Bitten." },
        { q: "Complete: There is ___ bread. We must go shopping.", o: ["no", "any", "some"], a: 0, e: "\"There is no bread\" heißt: Es gibt kein Brot. Nach is (ohne not) steht no." },
        { q: "Which sentence has the place first and then the time?", o: ["We are meeting at the cinema at eight.", "We are meeting at eight at the cinema.", "We are meeting eight at the cinema."], a: 0, e: "Ort vor Zeit: at the cinema (Ort) – at eight (Zeit). Vor eight fehlt in der dritten Antwort außerdem das Wort at." },
        { q: "Complete: I'm ___ about the test.", o: ["worried", "strong", "clear"], a: 0, e: "worried = besorgt. Man ist worried about something." }
      ] },
      { art: "mc", id: "warm2", nur: "M", tag: "Warm-up", titel: "Four quick questions", lead: "Tick the correct answer.", fragen: [
        { q: "Choose the correct sentence.", o: ["There isn't any bread left.", "There isn't no bread left.", "There isn't some bread left."], a: 0, e: "After a negative (isn't) we use any. A second negative word (no) is not possible." },
        { q: "Complete: Could I have ___ water, please?", o: ["some", "any", "no"], a: 0, e: "In requests and offers we use some: Could I have some …? / Would you like some …?" },
        { q: "Which sentence follows the rule 'place before time'?", o: ["The coach leaves from the harbour at nine o'clock.", "The coach leaves at nine o'clock from the harbour.", "The coach leaves from nine o'clock the harbour."], a: 0, e: "Place (from the harbour), then time (at nine o'clock). The third sentence also mixes up the little words." },
        { q: "\"to be fed up with\" means …", o: ["die Nase voll haben von", "sich freuen auf", "Hunger haben auf"], a: 0, e: "I'm fed up with the rain = Ich habe den Regen satt." }
      ] },
      { art: "paare", id: "woerter", tag: "Warm-up", titel: "Words from Unit 3", lead: "Match the English word with its German meaning. <span class=\"de\">Welches deutsche Wort passt?</span>",
        paare: [["timetable", "Fahrplan"], ["return ticket", "Hin- und Rückfahrkarte"], ["journey", "Fahrt; Reise"], ["advice", "Rat; Ratschlag"], ["worried", "besorgt"], ["shamrock", "Kleeblatt"]],
        hilfen: ["Denk an die Wörter von Bus und Bahn: Fahrplan, Fahrkarte, Fahrt.", "Eines der Wörter ist ein Gefühl, eines ein irisches Symbol mit drei Blättern."] }
    ] },
    { kurz: "AI duel", ober: "Extra", titel: "Duel: You against the AI", teile: [
      { art: "duell", id: "duell", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule. <span class=\"de\">In zwei Runden irrt die KI. Denk an die Regel.</span>",
        runden: [
          { q: "Which sentence means \"einfache Fahrkarte\"?", o: ["I need a single ticket, please.", "I need a return ticket, please.", "I need an all-day ticket, please."], a: 0, ki: 0, kiText: "A single ticket is for one way only – that is the \"einfache Fahrkarte\".",
            e: "single ticket = einfache Fahrkarte (nur hin). Return ticket = Hin- und Rückfahrkarte, all-day ticket = Ganztagesticket." },
          { q: "Complete the offer: Would you like ___ tea?", o: ["some", "any", "no"], a: 0, ki: 0, kiText: "In an offer we use \"some\": \"Would you like some tea?\"",
            e: "Bei Angeboten und höflichen Bitten steht some: Would you like some tea? Das Gleiche gilt für Could I have some …?" },
          { q: "Which sentence has the usual order: place first, then time?", o: ["The bus arrives at the market at noon.", "The bus arrives at noon at the market.", "The bus arrives noon at the market."], a: 0, ki: 1, kiText: "The time is the most important information, so it must come first: \"The bus arrives at noon at the market\".",
            e: "Im Englischen steht die Ortsangabe meistens vor der Zeitangabe: at the market (Ort) – at noon (Zeit). Die Zeit ist nicht \"wichtiger\"; es gilt einfach diese Reihenfolge." },
          { q: "Which sentence gives advice?", o: ["You should take an umbrella.", "You are taking an umbrella.", "You took an umbrella."], a: 0, ki: 0, kiText: "\"Should\" + verb is used to give advice: \"You should take an umbrella\".",
            e: "Ratschläge gibst du mit should + Grundform: You should … Die anderen Sätze erzählen nur, was jemand tut oder tat." },
          { q: "Complete the sentence: I haven't got ___ money.", o: ["any", "no", "some"], a: 0, ki: 1, kiText: "I want to say it strongly, so I use \"no\": \"I haven't got no money\".",
            e: "Nach haven't (verneint) steht any: I haven't got any money. Oder du sagst: I've got no money. Zwei Verneinungen in einem Satz gehen im Englischen nicht.",
            begruende: { q: "Why is \"I haven't got no money\" wrong? Explain in one sentence.", m: "We cannot use two negatives; after haven't we need any.", k: ["any|double|doppelt|twice|two negatives|two negative|zwei verneinungen|nicht doppelt|2 verneinungen"] } },
          { q: "Complete the sentence: Look at the ___ to see when the next bus comes.", o: ["timetable", "key", "shamrock"], a: 0, ki: 0, kiText: "A timetable shows the times of buses and trains, so it fits here.",
            e: "timetable = Fahrplan. Dort steht, wann der nächste Bus kommt. Key ist der Schlüssel, shamrock das Kleeblatt." }
        ] },
      { art: "duell", id: "duell", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ You against the AI",
        intro: "The AI gets the same questions as you and explains every answer – very sure of itself. But be careful: in two rounds it is wrong. Don't let it confuse you – think of the rule.",
        runden: [
          { q: "Complete the sentence: You have to ___ buses at the market square.", o: ["change", "arrive", "cost"], a: 0, ki: 0, kiText: "To go from one bus to another bus we say \"change buses\".",
            e: "to change = umsteigen. You change buses (or trains) when your journey needs two of them." },
          { q: "Which sentence has the usual order: place first, then time?", o: ["We met at the station at four o'clock.", "We met at four o'clock at the station.", "We met four o'clock at the station."], a: 0, ki: 1, kiText: "\"We met at four o'clock at the station\" is the only correct form: the time is the main information, so it has to come first.",
            e: "Im Englischen steht am Satzende normalerweise der Ort vor der Zeit: at the station – at four o'clock. Zeit vor Ort ist also nicht die \"einzig richtige\" Form – die Regel heißt: Ort, dann Zeit." },
          { q: "Complete the sentence: I looked in the box, but there wasn't ___ in it.", o: ["anything", "something", "nothing"], a: 0, ki: 0, kiText: "After a negative like \"wasn't\" we use an any-word: \"there wasn't anything in it\".",
            e: "Nach wasn't (verneint) steht anything. Nothing geht nicht, weil schon not im Satz steht, und something passt nicht in einen verneinten Satz." },
          { q: "Which advice is correct?", o: ["You should talk to someone about it.", "You should to talk to someone about it.", "You should talks to someone about it."], a: 0, ki: 0, kiText: "After \"should\" the verb has no \"to\" and no \"-s\": \"You should talk\".",
            e: "should + Grundform ohne to und ohne -s. Es ist ein Modalverb." },
          { q: "Which question is correct?", o: ["Have you got any brothers or sisters?", "Have you got some brothers or sisters?", "Have you got no brothers or sisters?"], a: 0, ki: 1, kiText: "Brothers and sisters are something nice, so I use \"some\": \"Have you got some brothers or sisters?\" – \"some\" is always right for nice things.",
            e: "In einer normalen Frage, bei der du die Antwort nicht kennst, steht any: Have you got any brothers or sisters? Some steht in Fragen nur, wenn man etwas anbietet oder höflich bittet: Would you like some milk? Could I have some milk?",
            begruende: { q: "Why is \"some\" wrong in this question? Explain in one sentence.", m: "In a normal question we use any; some is for offers and requests.", k: ["any|offer|angebot|normal|neutral|frage|question|request|bitte"] } },
          { q: "Which sentence is correct?", o: ["Nobody was at home.", "Nobody wasn't at home.", "Anybody was at home."], a: 0, ki: 0, kiText: "\"Nobody\" is already negative, so the verb stays positive: \"Nobody was at home\".",
            e: "Nobody ist schon verneint. Ein zweites not (wasn't) ist falsch. Mit not würdest du sagen: There wasn't anybody at home." }
        ] }
    ] },
    { kurz: "Table duel", ober: "Extra", titel: "Table duel: Unit 3 pros", teile: [
      { art: "tischduell", id: "tisch", nur: "R", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "Place before time: which is right?", o: ["at the station at five", "at five at the station", "five at the station"], a: 0, e: "Ort vor Zeit: at the station – at five." },
        { q: "Offer: Would you like ___?", o: ["some tea", "any tea", "no tea"], a: 0, e: "In Angeboten steht some: Would you like some tea?" },
        { q: "I haven't got ___.", o: ["any sweets", "no sweets", "some sweets"], a: 0, e: "Nach haven't steht any: I haven't got any sweets." },
        { q: "\"Hin- und Rückfahrkarte\":", o: ["return ticket", "single ticket", "all-day ticket"], a: 0, e: "return ticket = Hin- und Rückfahrkarte." },
        { q: "\"umsteigen\":", o: ["to change", "to leave", "to cost"], a: 0, e: "to change = umsteigen (z. B. change buses)." },
        { q: "Give advice: ___ drink more water.", o: ["You should", "You did", "You are"], a: 0, e: "Ratschlag mit should: You should drink more water." },
        { q: "\"Nobody\" means …", o: ["not one person", "every person", "some persons"], a: 0, e: "nobody = niemand, keine Person." },
        { q: "\"Haltestelle\":", o: ["bus stop", "bus ticket", "bus map"], a: 0, e: "bus stop = Bushaltestelle." },
        { q: "\"Rat, Ratschlag\":", o: ["good advice", "good advise", "good adwice"], a: 0, e: "Das Nomen heißt advice (mit c)." },
        { q: "\"Kleeblatt\":", o: ["a shamrock", "a headline", "a campsite"], a: 0, e: "shamrock = Kleeblatt, das Symbol Irlands." },
        { q: "Which sport is from Ireland?", o: ["a hurling match", "a baseball match", "a sumo match"], a: 0, e: "Hurling ist eine irische Sportart mit Schläger und kleinem Ball." },
        { q: "St Patrick's Day is …", o: ["in March", "in June", "in October"], a: 0, e: "St Patrick's Day ist am 17. März." }
      ] },
      { art: "tischduell", id: "tisch", nur: "M", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "👥 Two players, one device", runden: 7, fragen: [
        { q: "Choose the right order.", o: ["at the pier at noon", "at noon at the pier", "noon at the pier"], a: 0, e: "Place before time: at the pier – at noon." },
        { q: "Complete: We haven't got ___ ideas.", o: ["any good", "some good", "no good"], a: 0, e: "After haven't we use any. No is not possible, because not is already in the sentence." },
        { q: "\"No one was there.\" means …", o: ["Nobody was there.", "Anybody was there.", "Somebody wasn't there."], a: 0, e: "Nobody = no one. It is already negative." },
        { q: "\"einfache Fahrkarte\":", o: ["single ticket", "return ticket", "day ticket"], a: 0, e: "single ticket = einfache Fahrkarte." },
        { q: "\"Aushang; Plakat\":", o: ["a notice", "a novel", "a note"], a: 0, e: "notice = Aushang. A note is a short message (Notiz)." },
        { q: "Complete: You ___ to them.", o: ["should talk", "should talking", "should to talk"], a: 0, e: "should + base form: You should talk to them." },
        { q: "\"not … any more\" means …", o: ["nicht mehr", "noch nicht", "nie mehr"], a: 0, e: "I don't play any more = Ich spiele nicht mehr." },
        { q: "\"to be fed up with\" means …", o: ["die Nase voll haben", "Hunger haben", "müde sein"], a: 0, e: "fed up with = die Nase voll haben von." },
        { q: "Her purse is empty. She has ___ left.", o: ["no money", "any money", "some money"], a: 0, e: "Empty purse: She has no money left." },
        { q: "Which is a word for time?", o: ["before dinner", "beside dinner", "behind dinner"], a: 0, e: "before = vor (zeitlich). Beside and behind are for places." },
        { q: "St Patrick's Day is on …", o: ["17 March", "17 May", "17 April"], a: 0, e: "St Patrick's Day is on 17 March." },
        { q: "A shamrock has …", o: ["three leaves", "five leaves", "one leaf"], a: 0, e: "A shamrock has three small leaves." }
      ] }
    ] }
  ],
  weiter: { text: "If a round went wrong: read the tip boxes of the Unit 3 grammar modules again, or try the vocabulary trainer." }
});
