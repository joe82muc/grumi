/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Listening practice 1: Arriving in the USA (Kürzel D17)
   (reines Hörtraining mit drei Hörtexten rund um die Ankunft in Chicago: Durchsagen am Flughafen, ein Gespräch im Zubringerbus und
   eins an der Hotel-Rezeption – erst Zahlen, Uhrzeiten und Preise sicher hören, dann je Text Vorentlastung, Hörauftrag, Aufgaben,
   Transkript; am Ende much/many im Kontext, eine eigene Nachricht nach Hause und Kurz sichern)
   Buchprinzip (Höraufgaben der Unit, nur Aufbau, nichts übernommen): Multiple Choice mit drei Optionen; offene Fragen zu Zahlen und
   Anteilen (Notizen); vorher die Fragen genau lesen und beim Hören auf diese Stellen achten (Listening skills); in der leichteren
   Fassung Multiple Choice und ein Lückentext mit Wortkasten statt offener Fragen.
   Besser: drei Alltagssituationen mit eigenen Stimmen, Zahlen-Merkkasten (-teen/-ty, half past = halb …, Preise, Ziffer für Ziffer),
   Zahlenfallen bewusst eingebaut (fourteen/forty, fifteen/fifty, nine/nineteen), sofortige Rückmeldung, Hilfen in Stufen, Förder-Links
   nach zwei Fehlversuchen, BE/AE im Hotel (elevator/lift, first floor = Erdgeschoss in den USA), am Ende eine eigene Nachricht.
   Differenzierung: Texte als zwei eigene Fassungen (R7 119–147 Wörter, eine bis zwei Rollen; M7 183–249 Wörter, bis drei Rollen, mit
   Gate-Wechsel, Gründen, Altersgrenze beim Preis, Abreisezeit); Flughafen – R7 Lückentext mit vier Zahlen, M7 fünf Zahlen mit mehr
   Fallen; Bus – R7 Multiple Choice zu Zahlen und Preisen, M7 Notizen ohne Auswahl (Preis mit Altersgrenze: Nele zahlt schon den Erwachsenenpreis); Hotel – R7 Lückentext
   (Hotelkarte), M7 Notizen ohne Auswahl; much/many – R7 Wörter sortieren, M7 ganze Formen (How much/How many/too much/too many).
   Plus für M7 (m7, Pflicht in M7): warum Nele den Erwachsenenpreis zahlt, warum der third floor nur zwei Stockwerke hoch ist.
   LehrplanPLUS E7 1.2 Hörverstehen (Durchsage, Gespräch: Zahlen, Zeiten, Preise, Orte und Gründe entnehmen), E7 1.3 Schreiben (kurze
   Nachricht), E7 3 (much/many, too much/too many im Kontext; the most im Text), E7 5 (USA: Reisen, British/American English).
   Texte: texte/u4/u4-lp1-airport-r.js, u4-lp1-airport-m.js (Announcer = Frau), u4-lp1-shuttle-r.js (Mr Dawson = Mann,
   Nele = Mädchen), u4-lp1-shuttle-m.js (Mr Dawson = Mann, Mrs Becker = Frau, Nele = Mädchen), u4-lp1-hotel-r.js (Ms Reyes = Frau,
   Mr Becker = Mann), u4-lp1-hotel-m.js (Ms Reyes = Frau, Mr Becker = Mann, Nele = Mädchen).
   Alle Personen (Familie Becker, Mr Dawson, Ms Reyes, Greta Kranz), das Blue Heron Hotel, die Flüge, Gates und Preise sind erfunden;
   Chicago, Denver, Seattle und Frankfurt sind echte Städte. Sicher: Chicago liegt an einem sehr großen See; die Stadt ist für
   Deep-Dish-Pizza bekannt; im amerikanischen Englisch ist der first floor das Erdgeschoss (britisch ground floor), elevator = lift.
   Förder-Links: Zahlen am Flughafen (Lückentext, beide Züge) und Zahlen/Preise im Bus (R7, Multiple Choice) → u4_x6.html (Extra: Hören
   – Zahlen und Zeiten); much/many (Sortieren R7, Lückentext M7) → unit4/extra/much-many.html. Die Notizfelder (formular) der M7 haben
   keinen, weil das Formular keine Fehlversuche meldet.
   Wörter der Unit (bis Writing skills) und der Word banks kommen bewusst vor: dollar, huge, lake (wordbank), reservation, beautiful,
   the most …, much/many, so big, a.m./p.m., quarter past/to, half past, airport, passenger, exit, delay (Unit 2/3); neue Wörter: flight,
   gate, belt, shuttle bus, adult, traffic, reception, elevator, floor, check-out, local time (Vorentlastung und Glossar).
   BILDER:
   1. Station „Warm-up“ (Vorentlastung): eine große Ankunftshalle in einem amerikanischen Flughafen, eine Anzeigetafel mit Gates
      und Uhrzeiten, ein Gepäckband mit vielen gleichen schwarzen Koffern; ein Mädchen (13) mit Rucksack sucht ihre Tasche.
   2. Station „On the shuttle bus“ (Sprechanlass): ein Zubringerbus auf einer vollen Stadtautobahn, vorne ein freundlicher Fahrer,
      hinten große Koffer; durch das Fenster Hochhäuser und am Rand ein riesiger See.
   3. Station „At the hotel“ (Vorentlastung): eine helle Hotel-Rezeption, eine Frau gibt einem Vater Schlüsselkarten, daneben ein
      Mädchen mit Handy; ein Schild „Elevator →“ und ein kleines Schild „Pool on the roof“. */
const mitApo = liste => liste.concat(liste.filter(s => s.indexOf("'") >= 0).map(s => s.replace(/'/g, "’")));
D7Kit.seite({
  id: "u4-listening1",
  titel: "Listening practice 1 · Arriving in the USA",
  einleitung: "Nele Becker (13) and her family fly from Germany to <b>Chicago</b> in the USA. You listen to <b>three texts</b>: announcements at the airport, a talk on the shuttle bus and a talk at the hotel reception. Du übst, beim Hören Zahlen, Uhrzeiten, Gates, Preise und Zimmernummern sicher zu verstehen. Zu jedem Text liest du erst die Aufgaben, hörst dann zu und siehst am Ende den Text.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔢 I can hear the difference between numbers like thirteen and thirty.", "✈️ I understand announcements at an airport: gates, times and belts.", "🚌 I understand times and prices on a shuttle bus.", "🏨 I understand a room number, times and a password at a hotel."],
  thema: "Unit 4 USA – here we come!, Listening practice 1: Hörtraining (Flughafen, Zubringerbus, Hotel-Rezeption)",
  quiz: { profi: "Listening pro" },
  glossar: {
    flight: ["flight", "Flug: Ein flight ist eine Reise mit dem Flugzeug. Flüge haben eine Nummer, zum Beispiel flight two one nine."],
    gate: ["gate", "Flugsteig (Gate): Am gate steigst du in dein Flugzeug ein. Gates haben einen Buchstaben und eine Zahl, zum Beispiel A12."],
    belt: ["belt", "Gepäckband: Am Flughafen kommen die Koffer und Taschen auf einem belt aus dem Flugzeug. Ein seat belt ist ein Sicherheitsgurt."],
    shuttle: ["shuttle bus", "Zubringerbus: Ein shuttle bus fährt immer wieder zwischen zwei Orten hin und her, zum Beispiel zwischen dem Flughafen und der Stadt."],
    adult: ["adult", "Erwachsener, Erwachsene: Ein adult ist eine Person, die kein Kind mehr ist."],
    traffic: ["traffic", "Verkehr: Viel traffic heißt, dass viele Autos auf der Straße sind und man langsam fährt."],
    reception: ["reception", "Rezeption, Empfang: Dort meldest du dich im Hotel an und bekommst deinen Schlüssel."],
    elevator: ["elevator", "Aufzug: In den USA sagt man elevator, in Großbritannien lift."],
    floor: ["floor", "Stockwerk, Etage: Ein Hochhaus hat sehr viele floors."],
    localtime: ["local time", "Ortszeit: Das ist die Uhrzeit an dem Ort, an dem du gerade bist."],
    checkout: ["check-out", "Abreise aus dem Hotel: Bis zu dieser Uhrzeit musst du dein Zimmer am letzten Tag verlassen."],
    deepdish: ["deep-dish pizza", "Eine Pizza-Art, für die Chicago bekannt ist. Hör im Text, was der Fahrer darüber sagt."],
    teenty: ["-teen and -ty", "Zahlen mit -teen (13 bis 19) werden hinten betont, Zahlen mit -ty (30, 40, 50 …) vorne."]
  },
  stationen: [
    { kurz: "Warm-up", ober: "Before you listen", titel: "Get ready for the USA", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>arriving at an airport in the USA</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-l1-ankunft.jpg\" width=\"1280\" height=\"853\" alt=\"A big arrivals hall at an American airport: many black suitcases on a baggage belt; a girl with a backpack looks for her bag.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where is the girl? What is she looking for? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Nele Becker is thirteen. She flies with her family from <b>Frankfurt</b> to <b>Chicago</b> in the USA. You go with them: you land at the airport, take a bus to the city and go to the hotel. You are going to hear <b>three texts</b>. <span class=\"de\">Nele fliegt mit ihrer Familie nach Chicago. Du hörst Durchsagen am Flughafen, ein Gespräch im Bus und eins an der Hotel-Rezeption.</span></p><p>What do you want to know when you arrive at an airport? <span class=\"de\">Überlege kurz: Was willst du nach der Landung wissen – wo, wann, wie viel?</span></p>" },
      { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du für die drei Texte.</span>",
        paare: [["flight", "Flug"], ["gate", "Flugsteig (Gate)"], ["belt", "Gepäckband"], ["shuttle bus", "Zubringerbus"], ["reception", "Empfang im Hotel"], ["elevator", "Aufzug"]],
        hilfen: ["Am Flughafen kommen die Koffer auf einem belt.", "Im Hotel meldest du dich an der reception an.", "elevator ist amerikanisches Englisch, in Großbritannien sagt man lift."] },
      { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will hear these words.",
        paare: [["flight", "a trip by plane"], ["gate", "the place where you get on your plane"], ["belt", "where your bags come out at the airport"], ["shuttle bus", "a bus between the airport and the city"], ["reception", "the desk at the front of a hotel"], ["elevator", "lift (British English)"]],
        hilfen: ["Think of the airport first: plane, bags, bus. Then think of the hotel."] }
    ] },
    { kurz: "Numbers", ober: "Listening skills", titel: "Numbers, times and prices", teile: [
      { art: "merke", nur: "R", kopf: "LISTENING SKILLS: ZAHLEN", html: "<p><b>1. Lies zuerst die Fragen.</b> Dann weißt du, welche Zahl du suchst.</p><p><b>2. <button class=\"term\" data-t=\"teenty\">-teen oder -ty?</button></b> thir<u>teen</u> (13), six<u>teen</u> (16), eigh<u>teen</u> (18): Betonung hinten. <u>thir</u>ty (30), <u>six</u>ty (60), <u>eigh</u>ty (80): Betonung vorne.</p><p><b>3. Uhrzeiten:</b> half past eight = 8:30 (auf Deutsch: <b>halb neun!</b>) · a quarter past eleven = 11:15 · a quarter to ten = 9:45</p><p><b>4. Preise:</b> $12.50 = twelve dollars fifty · 35¢ = thirty-five cents</p><p><b>5. Nummern</b> sagt man oft Ziffer für Ziffer: room two oh eight = Zimmer 208 (oh = Null). Schreib Zahlen <b>sofort</b> auf.</p>" },
      { art: "merke", nur: "M", kopf: "LISTENING SKILLS: NUMBERS", html: "<ul><li><b>Read the questions first.</b> Then you know which number you need.</li><li><b><button class=\"term\" data-t=\"teenty\">-teen or -ty?</button></b> thir<u>teen</u>, six<u>teen</u>, eigh<u>teen</u> (13, 16, 18) are stressed at the end; <u>thir</u>ty, <u>six</u>ty, <u>eigh</u>ty (30, 60, 80) at the beginning.</li><li><b>Times:</b> half past eight = 8:30 <span class=\"de\">(halb neun!)</span> · a quarter past eleven = 11:15 · a quarter to ten = 9:45 · <b>a.m.</b> = before twelve noon, <b>p.m.</b> = after twelve noon</li><li><b>Prices:</b> $12.50 = twelve dollars fifty · 35¢ = thirty-five cents</li><li><b>Numbers</b> are often said one by one: room two oh eight = room 208 (oh = zero). Write them down at once.</li></ul>" },
      { art: "paare", id: "zahlen", nur: "R", tag: "Numbers", titel: "Numbers and times", lead: "Match the words and the numbers. <span class=\"de\">Lies die Wörter laut und finde die passende Zahl.</span>",
        paare: [["fourteen", "14"], ["forty", "40"], ["half past three", "3:30"], ["a quarter to five", "4:45"], ["seven dollars fifty", "$7.50"], ["seventy cents", "70¢"]],
        hilfen: ["-teen = 13 bis 19, -ty = 30, 40, 50 …", "half past three = 30 Minuten nach drei = halb vier.", "a quarter to five = Viertel vor fünf."] },
      { art: "paare", id: "zahlen", nur: "M", tag: "Numbers", titel: "Numbers and times", lead: "Match the words and the numbers.",
        paare: [["seventeen", "17"], ["seventy", "70"], ["five to nine", "8:55"], ["a quarter past two", "2:15"], ["nineteen dollars", "$19"], ["ninety cents", "90¢"]],
        hilfen: ["„to“ = before the full hour, „past“ = after the full hour."] },
      { art: "mc", id: "strategie", tag: "Choose", titel: "Half past …", lead: "Tick the right answer. <span class=\"de\">Wähle die richtige Uhrzeit.</span>",
        fragen: [
          { q: "You hear: \"The bus leaves at half past nine.\" What time is it?", o: ["9:30", "8:30", "9:15"], a: 0,
            e: "half past nine = 30 Minuten nach neun = 9:30. Auf Deutsch sagt man halb zehn – nicht halb neun." }
        ],
        hilfen: ["half past = 30 Minuten nach der vollen Stunde."] }
    ] },
    { kurz: "Airport", ober: "Listening 1 · at the airport", titel: "Welcome to Chicago", teile: [
      { art: "text", nur: "R", html: "<p class=\"lead\">Nele's plane from Frankfurt lands in <b>Chicago</b>. In the airport, she hears <b>announcements</b>. <span class=\"de\">Das Flugzeug landet in Chicago. Im Flughafen kommen Durchsagen.</span></p><p><b>Read the tasks first, then listen.</b> First listen for the topic, then for the numbers. <span class=\"de\">Erst die Aufgaben lesen, dann hören. Ein <button class=\"term\" data-t=\"flight\">flight</button> ist ein Flug, das <button class=\"term\" data-t=\"gate\">gate</button> der Flugsteig und ein <button class=\"term\" data-t=\"belt\">belt</button> das Gepäckband.</span></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Nele's plane from Frankfurt lands in <b>Chicago</b>. In the airport, she hears <b>announcements</b>. The first one tells you the <button class=\"term\" data-t=\"localtime\">local time</button>.</p><p><b>Read the tasks first, then listen.</b> First listen for the topic, then for the numbers and the reasons. Careful: one <button class=\"term\" data-t=\"gate\">gate</button> changes!</p>" },
      { art: "mc", id: "gist", tag: "The topic", titel: "Before you listen", lead: "Read the question. Then listen to the announcements below and tick the answer. <span class=\"de\">Beim ersten Hören nur das Wichtigste.</span>",
        fragen: [
          { q: "What are the announcements about?", o: ["flights, bags and buses at an airport", "trains and platforms at a station", "rooms and breakfast at a hotel"], a: 0,
            e: "Es geht um Flüge, ein Gepäckband und Busse in die Stadt – also um Durchsagen am Flughafen." }
        ] },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u4-lp1-airport-r", M: "u4-lp1-airport-m" },
        fragen: [
          { art: "luecke", id: "a-zahlen", nur: "R", titel: "Numbers", lead: "Listen again and complete the sentences. <span class=\"de\">Hör noch einmal zu und ergänze die Zahlen. Zwei Wörter bleiben übrig.</span>",
            foerder: { href: "u4_x6.html", text: "Extra: Hören – Zahlen und Zeiten" },
            absaetze: [["Bags from Frankfurt arrive at belt number ", { g: "seven" }, "."], ["The flight to Denver leaves from gate B ", { g: "fourteen" }, "."], ["The plane leaves at a quarter ", { g: "to" }, " four."], ["Shuttle buses leave every ", { g: "twenty" }, " minutes."]],
            extra: ["forty", "past"],
            hilfen: ["Es sind vier Angaben: ein Gepäckband, ein Gate, eine Uhrzeit und wie oft die Busse fahren.", "fourteen (14) hat die Betonung hinten, forty (40) vorne. Hör genau hin.", "a quarter to four = Viertel vor vier, a quarter past four = Viertel nach vier."] },
          { art: "luecke", id: "a-zahlen", nur: "M", titel: "Numbers", lead: "Listen again and complete the notes. Three words are extra.",
            foerder: { href: "u4_x6.html", text: "Extra: Hören – Zahlen und Zeiten" },
            absaetze: [["Bags from Frankfurt: belt number ", { g: "seven" }, "."], ["Flight four one six to Denver: now gate B ", { g: "fifty" }, "."], ["The Denver flight now leaves at ten ", { g: "past" }, " four."], ["The Seattle flight is about ", { g: "forty" }, " minutes late."], ["Shuttle buses leave every ", { g: "twenty" }, " minutes."]],
            extra: ["fifteen", "to", "fourteen"],
            hilfen: ["The gate changes. Listen for the new gate, not the old one.", "fifteen and fourteen are stressed at the end; fifty and forty at the beginning."] },
          { art: "tf", id: "a-tf", nur: "R", titel: "True or false?", lead: "Listen and decide. <span class=\"de\">Richtig oder falsch? Hör gut zu.</span>",
            aussagen: [["It is the afternoon in Chicago.", true], ["The flight to Seattle is on time.", false], ["Many bags look the same.", true], ["You can leave your bags alone at the airport.", false]],
            hilfen: ["Lies jede Aussage und hör nur auf diese eine Information.", "Achte auf afternoon, late und alone."] },
          { art: "tf", id: "a-tf", nur: "M", titel: "True or false?", lead: "Listen and decide.",
            aussagen: [["The Denver flight still leaves from gate B fifteen.", false], ["The Seattle flight is late because of bad weather.", true], ["The information desk is next to exit three.", false]],
            hilfen: ["Listen for the words will not leave from, because of and next to."] }
        ] },
      { art: "mc", id: "a-mc", nur: "M", tag: "A call", titel: "A call for a passenger", lead: "Listen to the announcement again and tick the right answer.",
        fragen: [
          { q: "Why must Greta Kranz go to the information desk?", o: ["Her uncle is waiting for her there.", "She has lost her bag.", "Her flight to Denver is late."], a: 0,
            e: "Die Durchsage sagt: „Your uncle is waiting for you there.“ Von einer verlorenen Tasche oder einem Flug nach Denver ist bei ihr keine Rede." }
        ] }
    ] },
    { kurz: "Shuttle bus", ober: "Listening 2 · on the bus", titel: "On the shuttle bus", teile: [
      { art: "text", nur: "R", html: "<p class=\"lead\">Nele and her family take the <button class=\"term\" data-t=\"shuttle\">shuttle bus</button> to their hotel, the <b>Blue Heron Hotel</b>. Nele talks to the driver, <b>Mr Dawson</b>. <span class=\"de\">Nele spricht mit dem Busfahrer. Achte auf Zahlen und Preise. Ein <button class=\"term\" data-t=\"adult\">adult</button> ist ein Erwachsener, <button class=\"term\" data-t=\"traffic\">traffic</button> ist der Verkehr.</span></p><p><b>Read the questions first, then listen.</b> <span class=\"de\">Lies erst die Fragen, dann hör zu.</span></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Nele, her parents and her little brother take the <button class=\"term\" data-t=\"shuttle\">shuttle bus</button> to the <b>Blue Heron Hotel</b>. They talk to the driver, <b>Mr Dawson</b>.</p><p><b>Read the notes first, then listen.</b> Listen for numbers, prices and reasons. Who pays for an adult ticket? <span class=\"de\">Achte darauf, wer den Preis für Erwachsene zahlt. Ein <button class=\"term\" data-t=\"adult\">adult</button> ist ein Erwachsener.</span></p>" },
      { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: { R: "u4-lp1-shuttle-r", M: "u4-lp1-shuttle-m" },
        fragen: [
          { art: "mc", id: "s-zahlen", nur: "R", titel: "Numbers and prices", lead: "Listen and tick the right answers. <span class=\"de\">Hör auf die Zahlen und Preise.</span>",
            foerder: { href: "u4_x6.html", text: "Extra: Hören – Zahlen und Zeiten" },
            fragen: [
              { q: "Which stop is the Blue Heron Hotel?", o: ["the fourth stop", "the fourteenth stop", "the second stop"], a: 0, e: "Mr Dawson sagt: „The Blue Heron is our fourth stop.“" },
              { q: "How much is a ticket for kids?", o: ["nine dollars", "nineteen dollars", "eighteen dollars"], a: 0, e: "Kinder zahlen nine dollars. Eighteen dollars ist der Preis für Erwachsene." },
              { q: "How much does Nele's family pay?", o: ["fifty-four dollars", "forty-five dollars", "fifty dollars"], a: 0, e: "Zwei Erwachsene (2 × 18) und zwei Kinder (2 × 9): 36 + 18 = 54. Mr Dawson sagt: „fifty-four dollars“." }
            ],
            hilfen: ["Hör auf drei Dinge: die Haltestelle, den Preis für Kinder und den Preis für die ganze Familie.", "Achte auf nine und nineteen: nineteen hat am Ende „-teen“.", "fifty-four = 54, forty-five = 45."] },
          { art: "formular", id: "s-notes", nur: "M", titel: "Your notes", lead: "Listen and write short notes. <span class=\"de\">Schreib die Zahl oder ein bis drei Wörter.</span>",
            kopf: "Notes: the shuttle bus",
            felder: [
              { label: "Which stop is the Blue Heron Hotel?", platz: "stop", loesung: ["fourth", "the fourth", "4th", "the 4th", "fourth stop", "the fourth stop", "4th stop", "the 4th stop", "4", "four", "stop 4", "stop four", "number four", "number 4", "stop number four", "stop number 4", "the fourth one", "our fourth stop", "its fourth stop"] },
              { label: "How long can the ride take today?", platz: "time", loesung: ["an hour", "one hour", "1 hour", "about an hour", "about one hour", "about 1 hour", "60 minutes", "sixty minutes", "about 60 minutes", "about sixty minutes", "1 h", "1h", "an hour today", "one hour today", "up to an hour", "60 min", "about 60 min"] },
              { label: "How much does the family pay?", platz: "price", loesung: ["sixty-three dollars", "sixty three dollars", "63 dollars", "$63", "63$", "63 $", "$ 63", "63", "sixty-three", "sixty three", "63 dollar", "$63.00", "63.00", "63.00 dollars", "63.00$", "63 usd", "usd 63", "63 us dollars"] }
            ],
            hilfen: ["Kids under twelve pay less. How old are Nele and her brother?", "Three adults and one kid: 3 × 18 + 9."] }
        ] },
      { art: "mc", id: "s-mc", nur: "R", tag: "Details", titel: "On the bus", lead: "Tick the right answers. You can listen to the text again. <span class=\"de\">Du kannst den Text oben noch einmal hören.</span>",
        fragen: [
          { q: "Where do big bags go?", o: ["at the back of the bus", "next to the seats", "under the driver's seat"], a: 0, e: "Mr Dawson sagt: „Big bags go at the back of the bus.“" },
          { q: "What is next to the hotel?", o: ["a big lake", "a big park", "the sea"], a: 0, e: "Das Hotel liegt an einem See. Der See ist so groß, dass er wie das Meer aussieht – es ist aber nicht das Meer." }
        ],
        hilfen: ["Bei der zweiten Frage: Mr Dawson sagt, dass etwas „looks like the sea“. Ist es wirklich das Meer?"] },
      { art: "mc", id: "s-mc", nur: "M", tag: "Details", titel: "On the bus", lead: "Tick the right answers. You can listen to the text again.",
        fragen: [
          { q: "Why can the ride take longer today?", o: ["There is a big baseball game in town.", "There is a storm in the city.", "The road to the lake is closed."], a: 0, e: "Mr Dawson sagt: „there's a big baseball game in town today, so there are too many cars on the road“." },
          { q: "What does Mr Dawson say about deep-dish pizza?", o: ["It is very thick, so most people eat it with a knife and fork.", "It is very thin, so people eat it with their hands.", "It is only for kids under twelve."], a: 0, e: "Er sagt: „It's very thick, so most people eat it with a knife and fork.“ Chicago ist für diese Pizza bekannt." }
        ] },
      { art: "mc", id: "s-m7", nur: "M", m7: true, tag: "Think about it", titel: "An adult ticket", lead: "Tick the right answer.",
        fragen: [
          { q: "Why does Nele pay the adult price?", o: ["Only kids under twelve pay less, and Nele is thirteen.", "Her ticket is for a bigger seat.", "Kids pay more on the shuttle bus."], a: 0,
            e: "Kinder unter zwölf zahlen neun Dollar. Nele ist dreizehn – deshalb sagt sie: „So I'm an adult today!“" }
        ] }
    ] },
    { kurz: "Hotel", ober: "Listening 3 · at the hotel", titel: "At the hotel reception", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at the hotel reception</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-l1-hotel.jpg\" width=\"1280\" height=\"853\" alt=\"A bright hotel reception: a friendly woman gives a father two key cards; a girl with a phone stands next to him; elevator doors in the background.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who are the people? What does the woman give the father? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\">At the <b>Blue Heron Hotel</b>, Mr Becker talks to <b>Ms Reyes</b> at the <button class=\"term\" data-t=\"reception\">reception</button>. <span class=\"de\">Herr Becker meldet die Familie im Hotel an. Ein <button class=\"term\" data-t=\"elevator\">elevator</button> ist ein Aufzug, ein <button class=\"term\" data-t=\"floor\">floor</button> ein Stockwerk.</span></p><p><b>Read the hotel card first, then listen.</b> <span class=\"de\">Lies erst die Hotelkarte, dann hör zu.</span></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">At the <b>Blue Heron Hotel</b>, Mr Becker and Nele talk to <b>Ms Reyes</b> at the <button class=\"term\" data-t=\"reception\">reception</button>.</p><p><b>Read the hotel card first, then listen.</b> Listen for numbers, times and a password. You will also hear <button class=\"term\" data-t=\"checkout\">check-out</button> and something about the <button class=\"term\" data-t=\"floor\">floors</button> in American hotels.</p>" },
      { art: "hoertext", id: "hoer3", tag: "🎧 Listening 3", hoertext: { R: "u4-lp1-hotel-r", M: "u4-lp1-hotel-m" },
        fragen: [
          { art: "luecke", id: "h-karte", nur: "R", titel: "The hotel card", lead: "Listen and complete the hotel card. <span class=\"de\">Ergänze die Karte. Zwei Wörter bleiben übrig.</span>",
            absaetze: [["The Beckers' room is on the ", { g: "third" }, " floor."], ["Breakfast is from half past ", { g: "six" }, " to ten o'clock."], ["The pool is on the ", { g: "roof" }, "."], ["The pool is open until ", { g: "nine" }, " o'clock in the evening."]],
            extra: ["second", "seven"],
            hilfen: ["Hör auf das Stockwerk, die Frühstückszeit und den Pool.", "third = dritte, second = zweite.", "Der Pool ist ganz oben im Hotel."] },
          { art: "formular", id: "h-form", nur: "M", titel: "The hotel card", lead: "Listen and fill in the hotel card. <span class=\"de\">Schreib Zahlen und kurze Notizen.</span>",
            kopf: "Hotel card: Becker family",
            felder: [
              { label: "Room number", platz: "number", loesung: ["318", "three one eight", "three eighteen", "three hundred and eighteen", "three hundred eighteen", "room 318", "room three one eight", "number 318", "room number 318", "3 1 8", "no. 318", "nr. 318", "nr 318", "#318", "room no. 318"] },
              { label: "Wi-Fi password", platz: "password", loesung: ["heron25", "heron 25", "heron two five", "heron 2 5", "heron, two, five", "heron two, five", "heron, 2, 5", "heron 2, 5", "heron-25", "heron_25", "heron, 25", "heron twenty-five", "heron twenty five", "heron, two five"] },
              { label: "Check-out time", platz: "time", loesung: mitApo(["twelve o'clock", "12 o'clock", "twelve", "12", "12 noon", "twelve noon", "noon", "at noon", "midday", "at midday", "12 pm", "12 p.m.", "12pm", "12:00", "12.00", "12:00 pm", "12.00 pm", "12:00 p.m.", "at twelve", "at 12", "at twelve o'clock", "at 12 o'clock", "at 12 noon", "at twelve noon", "at 12 pm", "at 12 p.m.", "at 12pm", "at 12:00", "at 12.00", "twelve o'clock noon", "12 o'clock noon", "twelve o'clock at noon", "at twelve o'clock at noon"]) },
              { label: "The pool closes at …", platz: "time", loesung: mitApo(["nine o'clock", "9 o'clock", "nine", "9", "9 pm", "9 p.m.", "9pm", "21:00", "21.00", "9:00", "9.00", "9:00 pm", "9.00 pm", "9:00 p.m.", "at nine", "at 9", "at nine o'clock", "at 9 o'clock", "at 9 pm", "at 9 p.m.", "at 9pm", "nine pm", "nine p.m.", "nine o'clock in the evening", "9 o'clock in the evening", "at nine o'clock in the evening", "at 9 o'clock in the evening", "nine in the evening", "9 in the evening", "at 21:00", "at 21.00"]) }
            ],
            hilfen: ["The password begins with a word from the name of the hotel.", "Listen for the words check-out and pool – the times come soon after them."] }
        ] },
      { art: "mc", id: "h-mc", nur: "R", tag: "Details", titel: "In the hotel", lead: "Tick the right answers. You can listen to the text again. <span class=\"de\">Du kannst den Text oben noch einmal hören.</span>",
        fragen: [
          { q: "What is the Wi-Fi password?", o: ["heron two five", "heron two nine", "heron five two"], a: 0, e: "Ms Reyes sagt: „The password is heron, two, five.“ Die Reihenfolge der Zahlen ist wichtig." },
          { q: "Where is the elevator?", o: ["on the left, next to the café", "on the right, next to the reception", "behind the hotel, next to the car park"], a: 0, e: "Ms Reyes sagt: „The elevator is on your left, next to the café.“" }
        ],
        hilfen: ["Das Passwort hat ein Wort und zwei Zahlen – in dieser Reihenfolge."] },
      { art: "mc", id: "h-mc", nur: "M", tag: "Details", titel: "In the hotel", lead: "Tick the right answers. You can listen to the text again.",
        fragen: [
          { q: "When is breakfast from Monday to Saturday?", o: ["from half past six to ten o'clock", "from seven to eleven o'clock", "from half past seven to ten o'clock"], a: 0, e: "Ms Reyes sagt: „from half past six to ten o'clock. On Sundays, it's from seven to eleven.“ Seven to eleven gilt nur sonntags." },
          { q: "What can you see from the pool on the roof?", o: ["the lake and the city", "the airport and the planes", "a baseball game"], a: 0, e: "Ms Reyes sagt: „From up there, you can see the lake and the city.“ Es ist the most beautiful view in the hotel." }
        ] },
      { art: "mc", id: "h-m7", nur: "M", m7: true, tag: "British or American?", titel: "The third floor", lead: "Tick the right answer.",
        fragen: [
          { q: "Nele thinks they have to go up three floors. Why do they only go up two?", o: ["In the USA, the first floor is the ground floor.", "Their room is on the second floor.", "The elevator only goes to the second floor."], a: 0,
            e: "In den USA ist der first floor das Erdgeschoss (britisch: ground floor). Der third floor liegt also nur zwei Stockwerke über dem Erdgeschoss." }
        ] }
    ] },
    { kurz: "Your turn", ober: "Language and writing", titel: "much, many and a message home", teile: [
      { art: "merke", kopf: "MUCH OR MANY?", html: "<p><b>many</b> + Nomen im Plural, die man zählen kann: <i>many friends, many photos</i> · <i>How many …?</i></p><p><b>much</b> + Nomen, die man nicht zählen kann: <i>much fun, much juice</i> · <i>How much …?</i> fragt auch nach dem Preis: <i>How much is the pizza?</i></p><p><b>too many / too much</b> = zu viele / zu viel: <i>too many people, too much homework</i></p>" },
      { art: "sort", id: "g11", nur: "R", tag: "Grammar in context", titel: "much or many?", lead: "Do we say <b>much</b> or <b>many</b>? Put the words in the right box. <span class=\"de\">Kann man es zählen (Plural)? Dann many. Kann man es nicht zählen? Dann much.</span>",
        foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" },
        buckets: ["much …", "many …"],
        items: [{ t: "time", b: 0 }, { t: "money", b: 0 }, { t: "traffic", b: 0 }, { t: "water", b: 0 }, { t: "bags", b: 1 }, { t: "flights", b: 1 }, { t: "stops", b: 1 }, { t: "keys", b: 1 }],
        hilfen: ["Wörter mit -s am Ende (Plural) kann man zählen: one bag, two bags.", "Zeit, Geld, Verkehr und Wasser kann man nicht einzeln zählen.", "much: time, money … · many: bags, flights …"] },
      { art: "luecke", id: "g11", nur: "M", tag: "Grammar in context", titel: "much or many?", lead: "Complete the sentences about the trip. <span class=\"de\">Jede Form passt nur an eine Stelle.</span>",
        foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" },
        absaetze: [["", { g: "How much" }, " is a ticket for the shuttle bus?"], ["", { g: "How many" }, " stops does the bus make before the hotel?"], ["Look at all the cars! There is ", { g: "too much" }, " traffic today."], ["We can't put all our bags in one taxi. We have got ", { g: "too many" }, " bags."]],
        hilfen: ["Can you count it? stops, bags → many. You cannot count traffic or a price → much."] },
      { art: "offen", id: "nachricht", nur: "R", tag: "Your words", titel: "A message home", lead: "You are in Chicago now. Write a short message to a friend at home. Say <b>where you are</b> and <b>one thing about your hotel</b>. <span class=\"de\">Schreib zwei kurze Sätze: Wo bist du? Wie ist dein Hotel?</span>",
        tipp: "Begin: Hi! We are in … · Our hotel is … · Our room is …",
        fragen: [{ q: "Write two sentences to a friend: Where are you? What is your hotel like?", m: "Hi! We are in Chicago now. Our hotel is big and our room is really nice.", k: ["chicago|usa|america|airport|city|hotel", "room|pool|roof|breakfast|lake|elevator|floor|café|cafe|bed|big|nice|great|cool|beautiful|small|huge|old|new|good|fantastic|amazing"], min: 2 }],
        hilfen: ["Fang so an: Hi! We are in Chicago now.", "Dann: Our hotel is … / Our room is …", "Beispiel für den Anfang: Hi! We are in Chicago now. Our hotel is …"] },
      { art: "offen", id: "nachricht", nur: "M", tag: "Your words", titel: "A message home", lead: "Write a message to a friend at home in <b>three sentences</b>. Say where you are, give <b>one detail with a number</b> (a time, a price or a room number) and say what you are going to do next.",
        tipp: "Use: We are in … · Our room is … / The bus ticket was … / Breakfast is at … · Tomorrow we are going to …",
        fragen: [{ q: "Write three sentences: where you are, one detail with a number and your plan.", m: "Hi! We are in Chicago now. Our hotel has more than two hundred rooms. Tomorrow we are going to eat deep-dish pizza.", k: ["chicago|usa|america|airport|city|hotel", "one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve|teen|twenty|thirty|forty|fifty|sixty|seventy|eighty|ninety|hundred|o'clock|half past|quarter|dollar|cent|0|1|2|3|4|5|6|7|8|9", "going to|'m going|want to|would like|'d like|let's|tomorrow|tonight|next|later|can't wait|plan"], min: 3 }] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "sichern", tag: "Check", titel: "Right or wrong?", lead: "Think about all three texts. <span class=\"de\">Denke an alle drei Texte.</span>",
        aussagen: [["At the airport, the bags from Frankfurt come on a belt.", true], ["The Beckers take a taxi to the hotel.", false], ["The shuttle bus has more than one stop.", true], ["Ms Reyes works at the airport.", false]],
        hilfen: ["Text 1 ist am Flughafen, Text 2 im Bus, Text 3 im Hotel."] }
    ] }
  ],
  weiter: { text: "Well done! You can now understand numbers, times and prices at an airport, on a bus and in a hotel. Listen to the texts again if a number was difficult." }
});
