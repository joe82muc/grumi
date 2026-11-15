/* Englisch 7 (7R/7M) · Unit 1 Out and about in England · Revision: A day at the city farm (Kürzel A18)
   (Wiederholung am Ende der Unit 1: ein Tag auf der erfundenen Meadowbank City Farm – vier Orte des Hofs kennenlernen, vier kurze
   Gespräche hören und den Orten zuordnen, einen Tagesplan lesen und einen Dialog mit Zeiten und Orten ergänzen, im Hofladen zuhören
   (wer kauft was, wie viel kostet es?), Wendungen fürs Einkaufen ordnen, selbst einkaufen (Sprechblasen-Kette mit KI), Fragen mit
   do/does im Kontext und Kurz sichern)
   Buchprinzip (BUCH-UNIT1, Revision, nur Aufbau, nichts übernommen): Wimmelbild mit vier Personengruppen – vier Kurzdialoge den
   Personen zuordnen · Musterdialog mit Zeiten, Orten und einem Vorschlag („Why don't we …?“) nachspielen · zwei Kunden im Laden
   zuhören: wer kauft was, wie viele, wie viel bezahlt · Kasten mit Fragen im simple present (G3) · Einkaufswendungen in die richtige
   Reihenfolge bringen · Einkaufsgespräch mit Preisschildern spielen.
   Besser: statt Museum ein eigener Ort (Stadtbauernhof mit Fütterungszeiten, Ponyreiten, Hofladen), das „Wimmelbild“ als vier
   Ortskarten (A–D), sofortige Rückmeldung, Hilfen in Stufen (R7 mit drei Stufen und Satzanfängen), das Einkaufsgespräch als
   Sprechblasen-Kette, in der die KI jeden Beitrag prüft, Förder-Link bei den Fragen mit do/does.
   Differenzierung: Hörtexte als zwei eigene Fassungen (Gespräche R7 143 / M7 214 Wörter – in R7 nennen die Übergänge den nächsten
   Ort, in M7 erkennt man ihn am Gesprächsinhalt; Hofladen R7 123 Wörter mit zwei Rollen – Lola kauft für Mutter, Freundin und Bruder –,
   M7 190 Wörter mit drei Rollen und Rechnen mit Wechselgeld); Dialog mit Zeiten – R7 einzelne Wörter, M7 ganze Zeitangaben mit
   Fallen; Plan-Frage – R7 eine Angabe, M7 Schluss ziehen (Viertel vor fünf: was geht noch?); Einkaufswendungen – R7 sieben, M7 neun
   Zeilen; Kette – R7 mit Satzanfängen und zwei Tipps, M7 ohne Satzanfänge, mit Begründung (nur fünf Pfund) und zwei Fragen mit does;
   do/does – R7 Do oder Does wählen und Kurzantworten, M7 ganze Formen mit Fehlerfallen.
   Plus für M7 (m7, Pflicht in M7): was Toby mit „Yours is in your bag“ meint (mine/yours), eine Frage mit do/does zu einer Antwort
   schreiben.
   LehrplanPLUS E7 1.2 Hörverstehen (kurze Gespräche, Einkaufsgespräch: Ort, Zeiten, Preise, Gründe), E7 1.3 Sprechen (einkaufen,
   nach Preisen fragen, bezahlen – als geschriebenes Gespräch), E7 1.1 Leseverstehen (Tagesplan), E7 3 (Fragen und Kurzantworten mit
   do/does, mine/yours im Kontext), E7 5 (England: Stadtbauernhof, Pfund und Pence).
   Texte: texte/u1/u1-rev-farm-r.js und u1-rev-farm-m.js (Toby = Junge, Lola = Mädchen, Wilf = Mann), u1-rev-shop-r.js (Mr Dobson =
   Mann, Lola = Mädchen) und u1-rev-shop-m.js (Mr Dobson = Mann, Toby = Junge, Lola = Mädchen). Die Kette spricht Mr Dobson (Mann).
   Erfunden: Meadowbank City Farm, Toby, Lola, Wilf, Mr Dobson, alle Zeiten und Preise. Stadtbauernhöfe (city farms) gibt es in vielen
   englischen Städten.
   Förder-Links: Fragen mit do/does (Do oder Does, Kurzantworten R7; ganze Formen und richtige Frage M7) → unit1/extra/do-does-questions.html
   („Extra: Fragen mit do und does“).
   Wörter der Unit kommen bewusst vor: farm, farmer, goat, cow, milk, quiet, near, a.m./p.m., to take, healthy, I'm afraid, to order,
   to sound, mine, yours, his, ours, brilliant, adult, popular; neue Wörter: city farm, pen, hen, pony ride, jar, mug, change (Wechselgeld),
   duck pond (Vorentlastung und Glossar).
   BILDER:
   1. Station „Warm-up“ (Wimmelbild, Sprechanlass und Vorentlastung): ein kleiner Bauernhof mitten zwischen Stadthäusern, von oben
      gezeichnet – vorne eine Holzhütte mit Karten, links ein Ziegengehege mit einer weißen Ziege am Zaun, rechts
      eine Ponywiese mit kleinen Kindern mit Helm, hinten ein Hühnerstall mit Eierkorb und ein kleiner Laden; ein Mädchen (13) und ein
      Junge (11) mitten auf dem Weg. Die vier Orte mit großen Buchstaben A–D markiert (A Ziegen, B Ponys, C Hühner, D Hütte), keine
      weitere Schrift.
   2. Station „Farm shop“ (Sprechanlass): ein heller Hofladen mit Holzregalen – Eierkartons, Honiggläser in zwei Größen, Tassen mit
      einer Ziege darauf, ein Ständer mit Postkarten von Tieren; hinter der Theke ein freundlicher Mann mit Schürze, davor das Mädchen
      mit einem Geldschein. Keine Preise im Bild (sie sind Antworten der Hörfragen). */
(function () {
  const D = s => ` <span class="de">${s}</span>`;
  const FRAGEN = { href: "unit1/extra/do-does-questions.html", text: "Extra: Fragen mit do und does" };

  // Einkaufsgespräch im Hofladen: R7 mit Satzanfängen und Tipps in zwei Stufen, M7 ohne Satzanfänge (ein Tipp) und mit Fragen mit does
  const KETTE_R = {
    art: "kette", id: "einkauf", nur: "R", tag: "Role play · AI check", titel: "Your turn in the farm shop",
    lead: "You are in the Meadowbank farm shop. Write your parts in English." + D("Du schreibst auf Englisch. Die Anweisungen sind auf Deutsch. Der Satzanfang und die Tipps helfen dir. Die KI prüft jeden Beitrag."),
    thema: "Einkaufen im Hofladen eines Stadtbauernhofs (Englisch 7, Mittelschule): Das Kind grüßt den Verkäufer Mr Dobson, fragt, ob es Honig gibt, kauft ein kleines Glas, fragt nach dem Preis der Postkarten, kauft zwei und fragt nach dem Gesamtpreis, bezahlt mit einem Zehn-Pfund-Schein, bedankt sich und verabschiedet sich",
    rollen: { a: { name: "Mr Dobson", ic: "🧑‍🌾" }, du: { name: "You" } },
    schritte: [
      { von: "a", text: "Hello and welcome to the Meadowbank farm shop! Can I help you?" },
      { an: "a", sprache: "en", auftrag: "Grüße Mr Dobson und frage, ob er Honig verkauft.", start: "Hello. Do you sell",
        kriterien: ["grüßt Mr Dobson", "fragt, ob es im Laden Honig gibt"],
        m: "Hello. Do you sell honey?", k: ["hello|hi|good morning|good afternoon", "sell|have|got", "honey"],
        tipps: ["Zwei Dinge: <b>grüßen</b> und <b>nach Honig fragen</b>.", "Hello. · Do you sell …? · honey = Honig"] },
      { von: "a", text: "Yes, we do. Our honey comes from the bees here on the farm. A small jar is four pounds, and a big jar is six pounds." },
      { an: "a", sprache: "en", auftrag: "Sage, dass du ein kleines Glas möchtest. Frage dann, wie viel die Postkarten kosten.", start: "I'd like",
        kriterien: ["möchte ein kleines Glas Honig", "fragt nach dem Preis der Postkarten"],
        m: "I'd like a small jar, please. How much are the postcards?", k: ["small", "how much", "postcard"],
        tipps: ["Zwei Dinge: <b>ein kleines Glas</b> bestellen und <b>nach dem Preis</b> der Postkarten fragen.", "I'd like a small jar, please. · How much are …?"] },
      { von: "a", text: "The postcards are fifty pence each. They've got photos of our animals on them." },
      { an: "a", sprache: "en", auftrag: "Du möchtest zwei Postkarten. Frage, wie viel alles zusammen kostet.", start: "Can I have",
        kriterien: ["möchte zwei Postkarten", "fragt nach dem Preis für alles zusammen"],
        m: "Can I have two postcards, please? How much is that altogether?", k: ["two|2", "postcard", "how much|altogether|together|total"],
        tipps: ["Zwei Dinge: <b>zwei Postkarten</b> und <b>der Preis für alles</b>.", "Can I have two …, please? · How much is that altogether?"] },
      { von: "a", text: "One small jar of honey and two postcards. That's five pounds altogether." },
      { an: "a", sprache: "en", auftrag: "Bezahle mit einem Zehn-Pfund-Schein, bedanke dich und verabschiede dich.", start: "Here you are.",
        kriterien: ["bezahlt (gibt den Zehn-Pfund-Schein)", "bedankt sich", "verabschiedet sich"],
        m: "Here you are. Here's a ten-pound note. Thank you. Goodbye!", k: ["here you are|here is|here's|ten|10|note|pay", "thank|thanks", "bye|goodbye|see you|have a nice day"],
        tipps: ["Drei Dinge: <b>bezahlen</b>, <b>danken</b>, <b>verabschieden</b>.", "Here you are. · a ten-pound note · Thank you. · Goodbye!"] },
      { von: "a", text: "Thank you! Here's your change: five pounds. Enjoy the rest of your day at Meadowbank!" }
    ]
  };
  const KETTE_M = {
    art: "kette", id: "einkauf", nur: "M", tag: "Role play · AI check", titel: "Your turn in the farm shop",
    lead: "You are in the Meadowbank farm shop. You have only got <b>five pounds</b>. Write your parts in English." + D("Die Anweisungen sind auf Deutsch, du schreibst auf Englisch. Die KI prüft jeden Beitrag."),
    thema: "Einkaufen im Hofladen eines Stadtbauernhofs (Englisch 7, Mittelschule): Das Kind grüßt den Verkäufer Mr Dobson, fragt, ob es Honig gibt und woher er kommt, sagt, dass es nur fünf Pfund hat, und kauft das kleine Glas, kauft zwei Postkarten und fragt nach dem Gesamtpreis, bezahlt, bedankt sich und fragt, wann der Laden schließt",
    rollen: { a: { name: "Mr Dobson", ic: "🧑‍🌾" }, du: { name: "You" } },
    schritte: [
      { von: "a", text: "Good afternoon! Welcome to the Meadowbank farm shop. Can I help you?" },
      { an: "a", sprache: "en", auftrag: "Grüße Mr Dobson. Frage, ob er Honig verkauft und woher der Honig kommt.",
        kriterien: ["grüßt Mr Dobson", "fragt, ob es im Laden Honig gibt", "fragt, woher der Honig kommt"],
        m: "Good afternoon. Do you sell honey? And where does it come from?", k: ["hello|hi|good morning|good afternoon", "honey", "where"],
        tipps: ["Do you sell …? · Where does it come from?"] },
      { von: "a", text: "Yes, we do. It comes from the bees here on the farm. A small jar is four pounds, and a big jar is six pounds fifty." },
      { an: "a", sprache: "en", auftrag: "Du hast nur fünf Pfund. Sage das und bestelle das Glas, das du bezahlen kannst.",
        kriterien: ["sagt, dass er oder sie nur fünf Pfund hat", "bestellt das kleine Glas"],
        m: "I've only got five pounds, so I'd like a small jar, please.", k: ["five|5", "small"],
        tipps: ["I've only got … · so I'd like …"] },
      { von: "a", text: "Good choice. Anything else? Our postcards are fifty pence each." },
      { an: "a", sprache: "en", auftrag: "Kaufe zwei Postkarten und frage, wie viel alles zusammen kostet.",
        kriterien: ["möchte zwei Postkarten", "fragt nach dem Preis für alles zusammen"],
        m: "Two postcards, please. How much is that altogether?", k: ["two|2", "postcard", "how much|altogether|together|total"],
        tipps: ["How much is that altogether?"] },
      { von: "a", text: "That's five pounds altogether. Lucky you, that's exactly your money!" },
      { an: "a", sprache: "en", auftrag: "Bezahle, bedanke dich und frage, wann der Hofladen heute schließt.",
        kriterien: ["bezahlt", "bedankt sich", "fragt, wann der Laden schließt"],
        m: "Here you are. Thank you. What time does the shop close today?", k: ["here you are|here is|here's|pay|five|5", "thank|thanks", "when|what time", "close"],
        tipps: ["What time … the shop close? Denk an <b>does</b>."] },
      { von: "a", text: "Thank you. We close at half past four. Enjoy the rest of your day!" }
    ]
  };

  D7Kit.seite({
    id: "u1-revision",
    titel: "Revision · A day at the city farm",
    einleitung: "Toby (11) and his sister Lola (13) spend a day at <b>Meadowbank City Farm</b>. You listen to short dialogues, find times and places on the day plan, listen in the farm shop and go shopping yourself. On the way you revise <b>questions with do and does</b>. Du wiederholst, was du in Unit 1 gelernt hast – und siehst gleich, was schon sitzt.",
    zeit: "etwa 45 Minuten",
    ziele: ["🐐 I understand short dialogues and know where they are.", "🕒 I find times and places on a day plan.", "🛒 I understand who buys what and how much it costs.", "💬 I can buy something in a shop and ask questions with do and does."],
    thema: "Unit 1 Out and about in England, Revision: ein Tag auf einem Stadtbauernhof (Gespräche zuordnen, Tagesplan, Einkaufen, Fragen mit do/does)",
    quiz: { profi: "Farm pro" },
    glossar: {
      cityfarm: ["city farm", "Ein Stadtbauernhof: ein kleiner Bauernhof mitten in einer Stadt. Kinder können dort Tiere sehen, und der Eintritt ist oft frei."],
      pen: ["pen", "Ein pen ist ein Gehege: Dort leben Tiere wie Ziegen oder Schafe hinter einem Zaun."],
      hen: ["hen", "Eine hen ist eine Henne, also ein Huhn. Im hen house (Hühnerstall) legen die Hühner ihre Eier."],
      ponyride: ["pony ride", "Ein pony ride ist ein kurzer Ritt auf einem Pony."],
      under: ["under ten", "Children under ten sind Kinder unter zehn Jahren, also höchstens neun Jahre alt."],
      jar: ["jar", "Ein jar ist ein Glas mit Deckel, zum Beispiel für Honig oder Marmelade."],
      mug: ["mug", "Ein mug ist ein großer Becher, eine Tasse ohne Untertasse."],
      change: ["change", "Change ist hier das Wechselgeld. Das ist das Geld, das du zurückbekommst, wenn du mit einem großen Schein bezahlst."],
      pence: ["pence", "In England zahlt man mit Pfund (pounds, £) und Pence (p). Ein Pfund hat hundert Pence."],
      duckpond: ["duck pond", "Ein duck pond ist ein Ententeich."]
    },
    stationen: [
      { kurz: "Warm-up", ober: "Before you start", titel: "Welcome to Meadowbank", teile: [
        { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-rev-hof.jpg\" width=\"1280\" height=\"853\" alt=\"A small farm in the middle of a town: goats behind a fence, two ponies in a field and a hen house; a girl and her little brother stand at the open farm gate.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
        { art: "text", html: `<p class="lead">Toby and Lola are at a <button class="term" data-t="cityfarm">city farm</button>: a small farm in the middle of a big town. <b>Look at four places on the farm.</b>${D("Toby und Lola verbringen einen Tag auf einem Bauernhof in der Stadt. Sieh dir das Bild an und lies die vier Karten: Das sind vier Orte auf dem Hof. Der Hof und die Personen sind erfunden.")}</p>` },
        { art: "karten", karten: [
          { ic: "🐐", titel: "A · The goat pen", text: "Goats behind a fence. A sign: <i>Feeding time 10.30 a.m.</i>" },
          { ic: "🐴", titel: "B · The pony field", text: "Small ponies. Little children with helmets wait for a ride." },
          { ic: "🐔", titel: "C · The hen house", text: "Lots of hens and a basket with eggs." },
          { ic: "🗺️", titel: "D · The information hut", text: "A man gives out maps. A sign: <i>Entry free</i>." }
        ] },
        { art: "text", html: `<p>Which place would you like to see first? Why? ${D("Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.")}</p>` },
        { art: "paare", id: "woerter", nur: "R", tag: "Words you need", titel: "Match the words", lead: "Find the pairs." + D("Diese Wörter brauchst du heute."),
          paare: [["goat pen", "Ziegengehege"], ["hen", "Huhn, Henne"], ["pony ride", "Ponyreiten"], ["farm shop", "Hofladen"], ["jar", "Glas (für Honig)"], ["change", "Wechselgeld"]],
          hilfen: ["Eine goat ist eine Ziege. Ein pen ist ein Gehege.", "Mit dem change bekommst du Geld zurück.", "Ein jar hat einen Deckel. Honig ist oft darin."] },
        { art: "paare", id: "woerter", nur: "M", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. You will need these words today.",
          paare: [["goat pen", "a place with a fence where goats live"], ["hen", "a farm bird that lays eggs"], ["pony ride", "a short ride on a small horse"], ["farm shop", "a shop on a farm"], ["jar", "a glass with a lid, for honey"], ["change", "money you get back in a shop"]],
          hilfen: ["Three words are about the animals, three are about shopping."] }
      ] },
      { kurz: "Dialogues", ober: "Listening 1 · four places", titel: "Where are Toby and Lola?", teile: [
        { art: "text", nur: "R", html: `<p class="lead">Toby and Lola walk around the farm. You hear <b>four short dialogues</b>. Wilf works at the farm.${D("Toby und Lola gehen über den Hof. Du hörst vier kurze Gespräche. Lies zuerst die Aufgabe, dann hör zu: Wo sind die beiden gerade? Schau auf die vier Karten oben.")}</p>` },
        { art: "text", nur: "M", html: `<p class="lead">Toby and Lola walk around the farm. You hear <b>four short dialogues</b> with Wilf, who works at the farm. Nobody says the name of the place – listen for clues: animals, food, sounds.${D("Niemand nennt den Ort. Achte auf Hinweise: Tiere, Futter, Geräusche.")}</p>` },
        { art: "hoertext", id: "hoer1", tag: "🎧 Listening 1", hoertext: { R: "u1-rev-farm-r", M: "u1-rev-farm-m" },
          fragen: [
            { art: "ordnen", id: "orte", titel: "Put the places in order", lead: "Where are Toby and Lola? Put the places in the order you hear them." + D("In welcher Reihenfolge besuchen Toby und Lola die vier Orte?"),
              schritte: ["D · at the information hut", "A · at the goat pen", "B · at the pony field", "C · at the hen house"],
              hilfen: ["Zuerst bekommen die beiden eine Karte (map).", "Wo frisst ein Tier eine Karte? Wo will Toby reiten?", "Zum Schluss geht es um Eier."] }
          ] },
        { art: "mc", id: "dialog-mc", nur: "R", tag: "Details", titel: "At the farm", lead: "Tick the right answers. You can listen to the text again." + D("Du kannst den Text oben noch einmal hören."),
          fragen: [
            { q: "What is the white goat eating?", o: ["Toby's map", "Lola's bag", "an egg"], a: 0, e: "Toby ruft: „That white goat is eating my map!“ Lolas Karte ist in ihrer Tasche." },
            { q: "Why can't Toby ride a pony?", o: ["He is too old.", "He hasn't got any money.", "The ponies are tired."], a: 0, e: "Toby ist elf. Die Ponys sind nur für Kinder unter zehn." }
          ],
          hilfen: ["Bei der ersten Frage: Was hat Wilf den beiden am Anfang gegeben?", "Wie alt ist Toby? Für wen sind die Ponys?"] },
        { art: "mc", id: "dialog-mc", nur: "M", tag: "Details", titel: "At the farm", lead: "Tick the right answers. You can listen to the text again.",
          fragen: [
            { q: "How many eggs do the hens lay?", o: ["about twenty every day", "about twelve every day", "about two every day"], a: 0, e: "Wilf sagt: „About twenty every day.“ Um Viertel nach zwei sammelt er sie ein." },
            { q: "Why can't Toby ride a pony?", o: ["He is too old for the small ponies.", "He has only got one pound.", "The rides are only in the afternoon."], a: 0, e: "Toby ist elf. Die Ponys sind sehr klein, deshalb dürfen nur Kinder unter zehn reiten." }
          ] },
        { art: "mc", id: "dialog-m7", nur: "M", m7: true, tag: "Think about it", titel: "Mine or yours?", lead: "Tick the right answer.",
          fragen: [
            { q: "Lola asks: \"Are you sure it isn't mine?\" Toby answers: \"Yours is in your bag.\" What does Toby mean?", o: ["Lola's map is in her bag, so the goat is eating Toby's map.", "Toby's map is in Lola's bag.", "The goat is in Lola's bag."], a: 0,
              e: "yours = deine (Karte). Lolas Karte ist in ihrer Tasche – die Ziege frisst also Tobys Karte." }
          ] }
      ] },
      { kurz: "Day plan", ober: "Times and places", titel: "Today at Meadowbank", teile: [
        { art: "text", html: `<p class="lead">At the information hut there is a <b>plan for today</b>. Read it.${D("Lies den Tagesplan. Du brauchst ihn für die nächsten Aufgaben. a.m. = vormittags, p.m. = nachmittags.")}</p>` },
        { art: "material", daten: { typ: "tabelle", titel: "Meadowbank City Farm – today", kopf: ["What?", "Where?", "When?"], reihen: [
          ["Feeding the goats", "goat pen", "10.30 a.m."],
          ["Pony rides (children under ten, £2)", "pony field", "11.00 a.m. – 12.30 p.m."],
          ["Café: soup, sandwiches, cakes, ice cream", "next to the duck pond", "11.30 a.m. – 3.00 p.m."],
          ["Collecting eggs with Wilf", "hen house", "2.15 p.m."],
          ["Farm shop", "next to the entrance", "9.00 a.m. – 4.30 p.m."],
          ["The farm closes", "–", "5.00 p.m."]
        ] } },
        { art: "luecke", id: "plan-dialog", nur: "R", tag: "Dialogue", titel: "Toby and Lola make a plan", lead: "Look at the plan and complete the dialogue." + D("Schau in den Tagesplan. Zwei Wörter bleiben übrig."),
          absaetze: [
            ["<b>Toby:</b> When do they feed the goats?"],
            ["<b>Lola:</b> At half past ", { g: "ten" }, ", at the goat pen. Let's go there first."],
            ["<b>Toby:</b> OK. When does the café open?"],
            ["<b>Lola:</b> At half past ", { g: "eleven" }, ". It's next to the ", { g: "duck pond" }, "."],
            ["<b>Toby:</b> And where can we collect eggs?"],
            ["<b>Lola:</b> In the ", { g: "hen house" }, ". Why don't we go there at a quarter past two?"],
            ["<b>Toby:</b> Good idea. What time does the farm close?"],
            ["<b>Lola:</b> At ", { g: "five" }, " o'clock."]
          ],
          extra: ["twelve", "pony field"],
          hilfen: ["Such jede Frage im Plan: erst die Zeile (What?), dann Where? oder When?", "10.30 = half past ten, 11.30 = half past eleven.", "Der Hof schließt um 5.00 p.m."] },
        { art: "luecke", id: "plan-dialog", nur: "M", tag: "Dialogue", titel: "Toby and Lola make a plan", lead: "Look at the plan and complete the dialogue. Two answers are extra.",
          absaetze: [
            ["<b>Toby:</b> When do they feed the goats?"],
            ["<b>Lola:</b> At ", { g: "half past ten" }, ". Let's go to the goat pen first."],
            ["<b>Toby:</b> OK. And when does the café open?"],
            ["<b>Lola:</b> At ", { g: "half past eleven" }, ". It's ", { g: "next to the duck pond" }, "."],
            ["<b>Toby:</b> Where can we collect eggs?"],
            ["<b>Lola:</b> In the hen house. Why don't we go there at ", { g: "a quarter past two" }, "?"],
            ["<b>Toby:</b> Good idea. And the shop? We need eggs for Mum."],
            ["<b>Lola:</b> It's open until ", { g: "half past four" }, ", so we have lots of time."]
          ],
          extra: ["a quarter to two", "next to the entrance"],
          hilfen: ["10.30 = half past ten · 2.15 = a quarter past two · 4.30 = half past four"] },
        { art: "mc", id: "plan-mc", nur: "R", tag: "Read the plan", titel: "On the plan", lead: "Look at the plan and tick the right answer." + D("Schau in den Plan."),
          fragen: [
            { q: "Lola wants to help Wilf with the eggs. Where and when?", o: ["in the hen house at 2.15 p.m.", "in the hen house at 10.30 a.m.", "in the farm shop at 2.15 p.m."], a: 0, e: "Im Plan steht: Collecting eggs with Wilf – hen house – 2.15 p.m." }
          ],
          hilfen: ["Such im Plan das Wort eggs."] },
        { art: "mc", id: "plan-mc", nur: "M", tag: "Read the plan", titel: "On the plan", lead: "Look at the plan and tick the right answer.",
          fragen: [
            { q: "It is a quarter to five. What can Toby and Lola still do?", o: ["They can walk around the farm, but the shop is closed.", "They can buy eggs in the farm shop.", "They can have an ice cream in the café."], a: 0, e: "Der Hofladen schließt um halb fünf und das Café um drei. Der Hof selbst schließt erst um fünf." }
          ] }
      ] },
      { kurz: "Farm shop", ober: "Listening 2 · shopping", titel: "In the farm shop", teile: [
        { art: "text", nur: "R", html: `<p class="lead">Lola goes into the <b>farm shop</b>. Mr Dobson works there. Toby is outside with the goats.${D("Lola kauft im Hofladen ein. Lies erst die Aufgaben, dann hör zu: Was kauft sie – und für wen? Wie viel kostet es? Im Laden zahlt man mit Pfund und <button class=\"term\" data-t=\"pence\">Pence</button>.")}</p>` },
        { art: "text", nur: "M", html: `<p class="lead">Toby and Lola go into the <b>farm shop</b>. Mr Dobson works there. <b>Read the tasks first, then listen.</b> Who buys what? How much do they pay? You pay in pounds and <button class="term" data-t="pence">pence</button>.</p>` },
        { art: "hoertext", id: "hoer2", tag: "🎧 Listening 2", hoertext: { R: "u1-rev-shop-r", M: "u1-rev-shop-m" },
          fragen: [
            { art: "paare", id: "kauf", nur: "R", titel: "Who is it for?", lead: "Match the things and the people." + D("Was kauft Lola – und für wen? Eine Sache kauft sie nicht."),
              paare: [["a box of eggs", "for Lola's mum"], ["a postcard", "for Lola's friend"], ["a small jar of honey", "for Toby"], ["a mug with a goat", "too expensive – Lola doesn't buy it"]],
              hilfen: ["Hör auf for my mum, for my friend und my brother.", "Die Tasse kostet fünf Pfund. Was sagt Lola dazu?"] },
            { art: "sort", id: "kauf", nur: "M", titel: "Who buys what?", lead: "Put the things in the right box." + D("Wer kauft was? Zwei Dinge kauft niemand."),
              buckets: ["Toby", "Lola", "nobody"],
              items: [{ t: "a small jar of honey", b: 0 }, { t: "a box of eggs", b: 1 }, { t: "a mug with a goat", b: 1 }, { t: "three postcards", b: 1 }, { t: "a big jar of honey", b: 2 }, { t: "an ice cream", b: 2 }],
              hilfen: ["Toby has only got five pounds.", "The shop doesn't sell ice cream."] }
          ] },
        { art: "mc", id: "shop-mc", nur: "R", tag: "Prices", titel: "How much?", lead: "Tick the right answers. You can listen to the text again." + D("Hör auf die Preise."),
          fragen: [
            { q: "How much is a box of six eggs?", o: ["two pounds", "six pounds", "fifty pence"], a: 0, e: "Mr Dobson sagt: „A box of six eggs is two pounds.“ Sechs ist die Zahl der Eier, nicht der Preis." },
            { q: "How much does Lola pay altogether?", o: ["six pounds fifty", "three pounds fifty", "ten pounds"], a: 0, e: "Eier (2 £) + Postkarte (50 p) + Honig (4 £) = 6,50 £. Mit dem Zehn-Pfund-Schein bekommt sie 3,50 £ zurück." }
          ],
          hilfen: ["Achte auf das Wort altogether (insgesamt).", "Lola gibt zehn Pfund. Was sie zurückbekommt, ist das change – nicht der Preis."] },
        { art: "mc", id: "shop-mc", nur: "M", tag: "Prices", titel: "How much?", lead: "Tick the right answers. You can listen to the text again.",
          fragen: [
            { q: "Why does Toby buy the small jar of honey?", o: ["He has only got five pounds.", "The big jar is for his gran.", "He doesn't like honey."], a: 0, e: "Ein großes Glas kostet 6,50 £. Toby hat nur fünf Pfund – also nimmt er das kleine für vier Pfund." },
            { q: "How much does Lola pay altogether?", o: ["eight pounds fifty", "one pound fifty", "ten pounds"], a: 0, e: "Eier (2 £) + Tasse (5 £) + drei Postkarten (1,50 £) = 8,50 £. Mit zehn Pfund bekommt sie 1,50 £ zurück." }
          ] },
        { art: "ordnen", id: "wendungen", nur: "R", tag: "Shopping phrases", titel: "Put the dialogue in order", lead: "A customer buys a mug. Put the lines in the right order." + D("Bring das Einkaufsgespräch in die richtige Reihenfolge. Verkäufer und Kunde sprechen abwechselnd."),
          schritte: ["Hello! Can I help you?", "Yes, please. How much is this mug?", "It's five pounds.", "OK, I'd like the mug, please.", "Here you are. Anything else?", "No, thank you. Here's a ten-pound note.", "Thank you. And here's your change: five pounds."],
          hilfen: ["Der Verkäufer beginnt: Can I help you?", "Erst fragt der Kunde nach dem Preis, dann nimmt er die Tasse.", "Zum Schluss kommen das Geld und das Wechselgeld."] },
        { art: "ordnen", id: "wendungen", nur: "M", tag: "Shopping phrases", titel: "Put the dialogue in order", lead: "A customer buys some postcards. Put the lines in the right order.",
          schritte: ["Good morning! Can I help you?", "Yes, please. Do you sell postcards?", "Yes, we do. They're next to the door.", "How much are they?", "Fifty pence each.", "Then I'd like four postcards, please.", "That's two pounds. Anything else?", "No, thanks. That's all. Here you are.", "Thank you. Have a nice day!"],
          hilfen: ["The assistant and the customer speak in turns. First the customer asks if the shop sells postcards, then for the price."] },
        { art: "merke", kopf: "IN A SHOP", html: "<ul><li><b>Can I help you?</b> – <b>Yes, please. Do you sell …?</b></li><li><b>How much is</b> this mug? · <b>How much are</b> the postcards?</li><li><b>I'd like</b> … / <b>Can I have</b> …, please?</li><li><b>Anything else?</b> – <b>No, thanks. That's all.</b></li><li><b>That's</b> … pounds <b>altogether</b>. – <b>Here you are.</b></li><li><b>Here's your <button class=\"term\" data-t=\"change\">change</button>.</b> – <b>Thank you. Goodbye!</b></li></ul>" },
        { art: "text", html: `<p class="lead">Now it's <b>your</b> turn. You are in the farm shop. Mr Dobson is behind the counter.${D("Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist. Mr Dobson ist erfunden.")}</p>` },
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>your turn in the farm shop</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u1/u1-rev-laden.jpg\" width=\"1280\" height=\"853\" alt=\"A small farm shop with eggs, honey in small and big jars, postcards with animals and vegetables; a friendly man with a grey beard smiles behind the counter.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you buy here? What do you say to Mr Dobson? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        KETTE_R,
        KETTE_M
      ] },
      { kurz: "Language", ober: "Revision · G3", titel: "Questions with do and does", teile: [
        { art: "merke", nur: "R", kopf: "FRAGEN MIT DO UND DOES", html: "<p><b>Do</b> bei <i>I, you, we, they</i>: <i>Do you like goats?</i> · <i>Do your friends live near here?</i></p><p><b>Does</b> bei <i>he, she, it</i>: <i>Does Lola like honey?</i> · <i>Does the farm open on Sundays?</i> – das Verb danach hat <b>kein -s</b>!</p><p>Mit Fragewort: <b>When / Where / What time</b> + do/does …? <i>Where does Wilf live?</i></p><p>Kurzantworten: <i>Yes, I do. / No, I don't.</i> · <i>Yes, he does. / No, he doesn't.</i></p>" },
        { art: "merke", nur: "M", kopf: "QUESTIONS WITH DO AND DOES", html: "<ul><li><b>Do</b> with <i>I, you, we, they</i>: <i>Do you like ponies?</i></li><li><b>Does</b> with <i>he, she, it</i>: <i>Does Lola like goats?</i> – the verb after does has <b>no -s</b>.</li><li>Question word first: <b>When / Where / What time</b> + do/does …? <i>Where does Toby live?</i></li><li>Short answers: <i>Yes, I do. / No, I don't.</i> · <i>Yes, she does. / No, she doesn't.</i></li></ul>" },
        { art: "mc", id: "do-does", nur: "R", tag: "Grammar in context", titel: "Do or Does?", lead: "Tick the right word." + D("Bei he, she, it steht Does, sonst Do."), foerder: FRAGEN,
          fragen: [
            { q: "___ the café sell ice cream?", o: ["Does", "Do", "Is"], a: 0, e: "the café = it. Bei he, she, it steht Does." },
            { q: "___ Toby and Lola like the goats?", o: ["Do", "Does", "Are"], a: 0, e: "Toby and Lola = they. Bei I, you, we, they steht Do." },
            { q: "When ___ the farm shop close?", o: ["does", "do", "is"], a: 0, e: "the farm shop = it → does. Danach steht die Grundform close (ohne -s)." }
          ],
          hilfen: ["Ersetze die Person durch he, she, it oder they.", "the café = it · Toby and Lola = they", "he, she, it → Does · I, you, we, they → Do"] },
        { art: "luecke", id: "kurzantwort", nur: "R", tag: "Short answers", titel: "Yes or no?", lead: "Complete the short answers." + D("Ergänze die Kurzantworten. Zwei Wörter bleiben übrig."), foerder: FRAGEN,
          absaetze: [
            ["Does Wilf work at Meadowbank? – Yes, he ", { g: "does" }, "."],
            ["Do the ponies like apples? – Yes, they ", { g: "do" }, "."],
            ["Does Toby ride a pony? – No, he ", { g: "doesn't" }, ". He is too old."],
            ["Do you sell ice cream in the shop? – No, we ", { g: "don't" }, "."]
          ],
          extra: ["is", "isn't"],
          hilfen: ["Die Kurzantwort nimmt das Wort aus der Frage: Does …? – Yes, he does.", "Bei Nein kommt not dazu: doesn't, don't.", "he → does/doesn't · they, we → do/don't"] },
        { art: "luecke", id: "do-does", nur: "M", tag: "Grammar in context", titel: "In the farm shop", lead: "Complete the dialogue. Three forms are wrong – they never fit.", foerder: FRAGEN,
          absaetze: [
            ["<b>Toby:</b> ", { g: "Do you sell" }, " ice cream in the shop?"],
            ["<b>Mr Dobson:</b> No, ", { g: "we don't" }, ". But the café sells it."],
            ["<b>Lola:</b> ", { g: "Does Wilf" }, " collect the eggs every day?"],
            ["<b>Mr Dobson:</b> Yes, ", { g: "he does" }, ". Even on Sundays!"],
            ["<b>Toby:</b> What time ", { g: "does the café" }, " close?"]
          ],
          extra: ["Does you sell", "he do", "do the café"],
          hilfen: ["you, we → do · Wilf, the café → does. The short answer takes do or does from the question."] },
        { art: "mc", id: "frage-mc", nur: "M", tag: "Choose", titel: "Which question is correct?", lead: "Tick the correct question.", foerder: FRAGEN,
          fragen: [
            { q: "Which question is correct?", o: ["What time does the café open?", "What time do the café open?", "What time does the café opens?"], a: 0, e: "the café = it → does. Nach does steht die Grundform open (ohne -s)." },
            { q: "Which question is correct?", o: ["Do Toby and Lola live near the farm?", "Does Toby and Lola live near the farm?", "Do Toby and Lola lives near the farm?"], a: 0, e: "Toby and Lola = they → Do + Grundform live." }
          ] },
        { art: "offen", id: "frage-m7", nur: "M", m7: true, tag: "Your words", titel: "Ask the question", lead: "Here is an answer from the day plan: <b>\"The pony rides? They start at eleven o'clock.\"</b> Write the question.",
          tipp: "Start with When … or What time … and use do or does. Is it one pony ride or the pony rides (they)?",
          fragen: [{ q: "Write the question for this answer: \"The pony rides? They start at eleven o'clock.\"", m: "When do the pony rides start?", k: ["when|what time", "do", "pony|ponies|ride", "start|begin"], min: 4 }] }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "Check", titel: "Right or wrong?", lead: "Think about the whole day at Meadowbank." + D("Denke an den ganzen Tag auf dem Hof."),
          aussagen: [
            ["Entry to Meadowbank City Farm is free.", true],
            ["Toby rides a pony.", false],
            ["The farm shop sells eggs from the farm's hens.", true],
            ["\"Does the café sell ice cream?\" is a correct question.", true],
            ["\"Do Wilf work at the farm?\" is a correct question.", false]
          ],
          hilfen: ["Für die Ponys ist Toby zu alt.", "Wilf = he → Does."] }
      ] }
    ],
    weiter: { text: "Well done! You can understand short dialogues, find times on a plan, go shopping and ask questions with do and does. Listen to the farm shop dialogue again if a price was difficult." }
  });
})();
