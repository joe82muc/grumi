/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · More about: Special days in the USA (Kürzel D15)
   (einen Sachtext über vier besondere Tage nach Monaten lesen, Bilder den Monaten zuordnen, Einzelheiten und Textstellen
   finden, dann mit Feiertagen und Bräuchen in Bayern vergleichen, sagen, welchen Tag man gern mitfeiern würde, und G10/G11
   im Kontext; Plus: vergleichen und einer Oma auf Deutsch erklären, was Thanksgiving ist)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „More about“, nur Aufbau, nichts übernommen): vier Feiertage nach Monaten, je ein kurzer
   Textkasten → Bilder den Texten zuordnen → Wahlaufgabe: Bei welchem Fest würdest du gern mitfeiern und warum? ODER einen Text
   auf Deutsch zusammenfassen (kleine Mediation). Andere Auswahl als im Buch: Memorial Day (Mai), Fourth of July, Halloween
   (Oktober), Thanksgiving (November) – kein Tag zu Martin Luther King, kein Columbus Day; dazu der Vergleich mit Bayern.
   Besser: Lesestrategie (Monate als Überschriften nutzen), Sofort-Rückmeldung bei jeder Frage, Textstellen finden, ein
   eigener Vergleich mit Bayern (Karten, Zuordnen „nur USA / nur Bayern / beide“), Meinung mit KI-Hinweis, Station „Language“
   mit Förder-Links, beide Wahlaufgaben des Buchs als Aufgaben (Meinung für alle, Mediation als Plus).
   Differenzierung: Sachtext R7 210 Wörter, M7 316 Wörter (mit Herkunft des Namens Halloween, Lincoln 1863, Reiseverkehr) mit
   eigenen Zeilenangaben, Fragen und einer Textstelle mehr; R7 mit deutschen Hilfen und Hilfen in Stufen, M7 mit vier Antworten
   und ohne deutsche Hilfe; Plus für M7 (m7): einen Tag in den USA mit einem Tag in Bayern vergleichen (Englisch) und der Oma auf
   Deutsch erklären, was Thanksgiving ist (für R7 freiwillig).
   Sachaussagen (nur gesicherte): Memorial Day am letzten Montag im Mai, Gedenken an die Toten der Kriege, Fahnen auf Gräbern,
   Paraden, inoffizieller Sommerbeginn; 4. Juli 1776 Unabhängigkeitserklärung der dreizehn Kolonien von Großbritannien,
   Feuerwerk, Picknick, Rot-Weiß-Blau; Halloween am 31. Oktober, kein Feiertag, „Trick or treat“, Kürbisse, Name von „All Hallows'
   Eve“ (Abend vor Allerheiligen), viele Bräuche kamen mit Menschen aus Irland und Schottland; Thanksgiving am vierten Donnerstag
   im November, Truthahn, Kürbiskuchen, Football im Fernsehen, 1863 durch Präsident Abraham Lincoln nationaler Feiertag, viel
   Reiseverkehr. Bayern: Allerheiligen (1. November, Feiertag, Gräberbesuch), Tag der Deutschen Einheit (3. Oktober 1990),
   Erntedankfest (oft am ersten Sonntag im Oktober), Fasching (Februar oder März), Volkstrauertag (ein Sonntag im November).
   LehrplanPLUS E7 1.1 Leseverstehen (Sachtext in Abschnitten, Einzelheiten), E7 1.3 Sprechen (Meinung mit Begründung,
   vergleichen), E7 Sprachmittlung (Inhalt auf Deutsch weitergeben), E7 5 Landeskunde USA und interkulturelles Lernen,
   E7 3 (G10 more/most, G11 much/many im Kontext).
   Texte: „Special days in the USA“ (texte/u4/u4-more-days-r.js und -m.js). Keine erfundenen Personen.
   Förder-Links: more/most → unit4/extra/comparison.html, much/many → unit4/extra/much-many.html.
   Wörter der Unit „More about“ und „celebrations“ (holiday, to celebrate, independence, flag, fireworks, peaceful nicht,
   Thanksgiving, to begin; costume, carnival, procession, barbecue, dinner, party, to invite) kommen bewusst vor. Neu und im
   Glossar erklärt: grave, colony, parade, pumpkin, turkey, harvest.
   BILDER:
   1. Station „Get ready“ (Vorentlastung/Sprechanlass): vier kleine Bilder nebeneinander – kleine Fahnen auf Gräbern in einer
      Wiese, ein Feuerwerk über einem See, ein geschnitzter Kürbis mit Licht vor einer Haustür, ein Esstisch mit einem gebratenen
      Truthahn und einer Familie – ohne Schrift.
   2. Station „Bavaria“ (Vergleich): ein Dorf in Bayern im Herbst, eine Kirche mit Erntekrone, Äpfeln, Kürbissen und Brot vor dem
      Altar, daneben Kinder in Faschingskostümen auf einem zweiten kleinen Bild.
   3. Station „Language“ (Sprechanlass): Kinder in Halloween-Kostümen an einer Haustür, eine Frau hält eine Schüssel mit
      Süßigkeiten. */
const zwei = (basis, r, m) => [Object.assign({}, basis, r, { nur: "R" }), Object.assign({}, basis, m, { nur: "M" })];
D7Kit.seite({
  id: "u4-more",
  titel: "More about: Special days in the USA",
  einleitung: "Flags, fireworks, pumpkins and a big turkey: you read about four special days in the USA – one in May, one in July, one in October and one in November. Then you compare them with special days in Bavaria and say which day you would like to celebrate.",
  zeit: "etwa 40 Minuten",
  ziele: ["📖 I find information about four special days in the USA.", "🔎 I find details and the lines that show them.", "🥨 I compare special days in the USA and in Bavaria.", "🗣️ I say which day I would like to celebrate and why."],
  thema: "Unit 4 USA – here we come!, More about: Feiertage in den USA (Memorial Day, Fourth of July, Halloween, Thanksgiving) und Vergleich mit Bayern",
  quiz: { profi: "Holiday pro" },
  glossar: {
    grave: ["grave", "Grab: Dort liegt ein toter Mensch auf dem Friedhof."],
    colony: ["colony", "Kolonie: ein Gebiet, das von einem anderen Land regiert wird. Die dreizehn Kolonien an der Ostküste Nordamerikas gehörten zu Großbritannien, bis sie sich 1776 für unabhängig erklärten."],
    parade: ["parade", "Umzug, Parade: Viele Menschen gehen oder fahren mit Musik durch die Straßen."],
    pumpkin: ["pumpkin", "Kürbis: ein großes, oft orangefarbenes Gemüse. An Halloween schneidet man Gesichter hinein."],
    turkey: ["turkey", "Truthahn, Pute: ein großer Vogel. An Thanksgiving essen viele Familien einen gebratenen Truthahn."],
    harvest: ["harvest", "Ernte: das, was die Bauern im Sommer und Herbst von den Feldern und Bäumen holen, zum Beispiel Getreide und Obst."],
    trick: ["Trick or treat!", "„Süßes oder Saures!“: Das sagen Kinder an Halloween an der Haustür. Dann bekommen sie Süßigkeiten."]
  },
  haupttext: { R: "u4-more-days-r", M: "u4-more-days-m" },
  stationen: [
    { kurz: "Get ready", ober: "Before you read", titel: "Special days", teile: [
      { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-more-feste.jpg\" width=\"1280\" height=\"853\" alt=\"Three pictures: fireworks over a lake, a carved pumpkin with a light in front of a door, and a family at a big dinner with a roast turkey.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Look at the three pictures: <b>fireworks over a lake</b>, <b>a pumpkin with a face</b> and <b>a family at a big dinner</b>. Now imagine a fourth picture: <b>small flags on graves</b>. <span class=\"de\">Sieh dir die drei Bilder an und stell dir das vierte vor.</span></p><p>Which special days could it be? What do you celebrate in your family? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du gleich im Text.</span>",
        paare: [["holiday", "Feiertag"], ["to celebrate", "feiern"], ["independence", "Unabhängigkeit"], ["fireworks", "Feuerwerk"], ["costume", "Kostüm"], ["grave", "Grab"]],
        hilfen: ["Fang mit den Wörtern an, die du sicher kennst.", "independence steckt in Independence Day – dem Tag, an dem ein Land frei wurde.", "Ein grave findest du auf dem Friedhof."] },
      { art: "merke", kopf: "READING TIP", html: "<p>The text has <b>four parts</b>. The <b>months</b> are the headings: MAY, JULY, OCTOBER, NOVEMBER. When you look for information, find the right month first – then read only this part.</p><p><span class=\"de\">Die Monate sind die Überschriften. Such zuerst den passenden Monat, dann lies nur diesen Teil genau.</span></p>" }
    ] },
    { kurz: "The text", ober: "Reading", titel: "Read about special days", teile: [
      { art: "text", html: "<p class=\"lead\">Read the text. <span class=\"de\">Lies den Text einmal ganz. Unbekannte Wörter wie <button class=\"term\" data-t=\"pumpkin\">pumpkin</button>, <button class=\"term\" data-t=\"turkey\">turkey</button> oder <button class=\"term\" data-t=\"colony\">colony</button> kannst du antippen.</span></p>" },
      { art: "lesetext", lesetext: { R: "u4-more-days-r", M: "u4-more-days-m" } },
      { art: "paare", id: "bilder", tag: "Pictures", titel: "Which picture goes with which month?", lead: "Match each picture with the right part of the text. <span class=\"de\">Welches Bild passt zu welchem Monat?</span>",
        paare: [["small flags on graves", "May"], ["fireworks in the evening", "July"], ["a pumpkin with a light inside", "October"], ["a turkey dinner with the family", "November"]],
        hilfen: ["Lies die Überschriften: MAY, JULY, OCTOBER, NOVEMBER.", "Fireworks gehören zum Unabhängigkeitstag, der pumpkin zu Halloween."] },
      ...zwei({ art: "mc", id: "verstehen", tag: "Understanding", titel: "What does the text say?" },
        { lead: "Tick the correct answer. <span class=\"de\">Es gibt vier Möglichkeiten.</span>",
          fragen: [
            { q: "When is Memorial Day?", o: ["On the last Monday in May", "On 4 July", "On 31 October", "On the fourth Thursday in November"], a: 0, e: "Im Teil MAY steht: On the last Monday in May, Americans celebrate Memorial Day." },
            { q: "What happened on 4 July 1776?", o: ["Thirteen American colonies said that they were independent from Great Britain.", "The first Halloween party took place.", "The USA got fifty states.", "Families ate the first turkey dinner."], a: 0, e: "Im Teil JULY steht: Thirteen American colonies said that they were independent from Great Britain." },
            { q: "What do children do on the morning of Halloween?", o: ["They go to school as usual.", "They stay at home because it's a holiday.", "They watch a parade.", "They visit graves."], a: 0, e: "Halloween ist kein Feiertag: children go to school as usual. Erst am Abend ziehen sie mit Kostümen los." },
            { q: "What do many people do after the Thanksgiving dinner?", o: ["They watch American football on TV.", "They go from house to house.", "They watch fireworks.", "They put flags on graves."], a: 0, e: "Im Teil NOVEMBER steht: After dinner, many people watch American football on TV." }
          ],
          hilfen: ["Such zuerst den passenden Monat im Text.", "Bei Frage 3: Ist Halloween ein Feiertag? Lies den ersten Satz im Teil OCTOBER."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "Why is Memorial Day weekend a long weekend?", o: ["Memorial Day is always on a Monday.", "Schools close for a whole week.", "It is always in the summer holidays.", "Everybody goes to Great Britain."], a: 0, e: "Memorial Day ist immer der letzte Montag im Mai – mit Samstag und Sonntag sind das drei freie Tage." },
            { q: "Why do many people wear red, white and blue on the Fourth of July?", o: ["They are the colours of the flag.", "They are the colours of Halloween.", "Children have to wear them at school.", "They are the colours of the turkey."], a: 0, e: "Im Teil JULY steht: red, white and blue – the colours of the flag." },
            { q: "Where did many old Halloween customs come from?", o: ["From Ireland and Scotland", "From Great Britain's king", "From the thirteen colonies", "From President Lincoln"], a: 0, e: "Im Teil OCTOBER steht: Many old Halloween customs came to America with people from Ireland and Scotland." },
            { q: "Why are the roads and airports so busy at Thanksgiving?", o: ["So many people travel home to their families.", "Everybody goes to see the fireworks.", "Children travel to their schools.", "People fly to Great Britain for the holiday."], a: 0, e: "Am Ende steht: so many people travel home to their families." }
          ],
          hilfen: ["Find the right month first, then read this part carefully."] }),
      { art: "beleg", id: "zeilen", nur: "R", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text. <span class=\"de\">Tippe die Zeilen an, in denen die Antwort steht.</span>", lesetext: "u4-more-days-r",
        fragen: [
          { q: "What do Americans remember on Memorial Day?", zeilen: [4, 5], e: "They remember the soldiers who died for their country.", tipp: "Look at the part MAY." },
          { q: "What do children say at every door on Halloween?", zeilen: [18, 19], e: "They say \"Trick or treat!\" and get sweets.", tipp: "Look at the part OCTOBER." }
        ],
        hilfen: ["Such zuerst den Monat: MAY oder OCTOBER.", "Bei Halloween steht die Antwort in Anführungszeichen."] },
      { art: "beleg", id: "zeilen", nur: "M", tag: "Evidence from the text", titel: "Where does the text say that?", lead: "Tap the lines in the text.", lesetext: "u4-more-days-m",
        fragen: [
          { q: "What do Americans remember on Memorial Day?", zeilen: [4, 5], e: "They remember the men and women who died as soldiers in wars.", tipp: "Look at the part MAY." },
          { q: "Why do many people call the Fourth of July the birthday of the USA?", zeilen: [11, 13], e: "On 4 July 1776, thirteen colonies said that they were independent from Great Britain.", tipp: "Look at the part JULY and the words That is why." },
          { q: "Where does the name Halloween come from?", zeilen: [23, 25], e: "From \"All Hallows' Eve\" – the evening before All Saints' Day.", tipp: "Look at the end of the part OCTOBER." }
        ] }
    ] },
    { kurz: "Bavaria", ober: "Compare", titel: "Special days in Bavaria", teile: [
      { art: "text", html: "<p class=\"lead\">Now think about <b>Bavaria</b>. Some special days here are a bit like the days in the USA. Read the cards. <span class=\"de\">Lies die Karten über besondere Tage in Bayern und vergleiche sie mit den Tagen in den USA.</span></p>" },
      { art: "karten", karten: [
        { ic: "🕯️", titel: "1 November – All Saints' Day", text: "In Bavaria this day is a holiday. Many families visit the graves of their grandparents and put candles and flowers on them." },
        { ic: "🎉", titel: "3 October – German Unity Day", text: "On 3 October 1990, East and West Germany became one country again. The day is a holiday in all German states." },
        { ic: "🍎", titel: "The harvest festival", text: "In autumn – often on the first Sunday in October – many churches are full of fruit, vegetables and bread. People say thank you for the <button class=\"term\" data-t=\"harvest\">harvest</button>." },
        { ic: "🎭", titel: "Fasching", text: "In February or March, children and adults wear costumes at Fasching (carnival). There are parties and processions in many towns." },
        { ic: "🌹", titel: "Volkstrauertag", text: "On a Sunday in November, Germans remember the people who died in wars. There are quiet ceremonies at war memorials." }
      ] },
      ...zwei({ art: "sort", id: "vergleich", tag: "Compare", titel: "USA, Bavaria or both?", buckets: ["Only in the USA", "Only in Bavaria", "In both"] },
        { lead: "Put each item in the right box. <span class=\"de\">Gibt es das nur in den USA, nur in Bayern oder in beiden?</span>",
          hilfen: ["Lies die Karten und denk an den Text über die USA.", "Kostüme gibt es an Halloween und an Fasching.", "An Gefallene in Kriegen erinnert man am Memorial Day und am Volkstrauertag."],
          items: [{ t: "fireworks on 4 July", b: 0 }, { t: "a turkey dinner on a Thursday in November", b: 0 }, { t: "a holiday on 3 October", b: 1 }, { t: "visiting graves on 1 November", b: 1 }, { t: "remembering people who died in wars", b: 2 }, { t: "children wearing costumes", b: 2 }] },
        { lead: "Put each item in the right box.",
          items: [{ t: "fireworks on 4 July", b: 0 }, { t: "a turkey dinner on a Thursday in November", b: 0 }, { t: "a holiday on 3 October", b: 1 }, { t: "visiting graves on 1 November", b: 1 }, { t: "remembering people who died in wars", b: 2 }, { t: "children wearing costumes", b: 2 }, { t: "saying thank you for good things", b: 2 }] }),
      ...zwei({ art: "mc", id: "vergleich-mc", tag: "Compare", titel: "Which day is like it?" },
        { lead: "Tick the correct answer. <span class=\"de\">Vergleiche die Karten mit dem Text.</span>",
          fragen: [
            { q: "Which day in Bavaria is most like Memorial Day?", o: ["Volkstrauertag", "German Unity Day", "Fasching", "The harvest festival"], a: 0, e: "An beiden Tagen erinnern sich die Menschen an die Toten der Kriege." },
            { q: "Which Bavarian holiday is on the day after Halloween?", o: ["All Saints' Day", "German Unity Day", "Fasching", "Volkstrauertag"], a: 0, e: "Halloween ist am 31. Oktober, Allerheiligen am 1. November – am Tag danach." }
          ],
          hilfen: ["Memorial Day: Woran erinnern sich die Menschen? Welche Karte passt dazu?", "Halloween ist am 31. Oktober. Welches Datum kommt danach?"] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "Which day in Bavaria is most like Memorial Day?", o: ["Volkstrauertag", "German Unity Day", "Fasching", "The harvest festival"], a: 0, e: "An beiden Tagen erinnern sich die Menschen an die Toten der Kriege." },
            { q: "Which Bavarian holiday is on the day after Halloween?", o: ["All Saints' Day", "German Unity Day", "Fasching", "Volkstrauertag"], a: 0, e: "Halloween ist der Abend vor Allerheiligen (All Hallows' Eve) – Allerheiligen ist am 1. November." }
          ] }),
      ...zwei({ art: "offen", id: "mitfeiern", tag: "Your opinion", titel: "Which day would you like to celebrate?" },
        { lead: "Write <b>one or two sentences</b>. <span class=\"de\">Welchen Tag in den USA würdest du gern mitfeiern? Warum?</span>",
          fragen: [{ q: "Which special day in the USA would you like to celebrate? Why?", m: "I would like to celebrate Halloween because I love costumes and sweets.", k: ["memorial|fourth of july|independence|halloween|thanksgiving|4 july", "because|as |so "], min: 2 }],
          tipp: "Start like this: I would like to celebrate … because … · I love … / I think … is fun." },
        { lead: "Write <b>two sentences</b>: Which day would you like to celebrate in the USA – and why?",
          fragen: [{ q: "Which special day in the USA would you like to celebrate? Why?", m: "I would like to celebrate the Fourth of July because I love fireworks. I would also like to have a picnic with my friends.", k: ["memorial|fourth of july|independence|halloween|thanksgiving|4 july", "because|as |so "], min: 2 }],
          tipp: "Name the day, give a reason with because and say what you would do." }),
      { art: "offen", id: "vergleichen", m7: true, tag: "Plus · Compare", titel: "The USA and Bavaria",
        lead: "Compare one special day in the USA with one day in Bavaria. Write <b>two sentences</b>. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig. Nutze: Both … · In the USA …, but in Bavaria …</span>",
        fragen: [{ q: "Compare a special day in the USA with a day in Bavaria.", m: "Both Thanksgiving and the harvest festival are about saying thank you. In the USA families eat turkey, but in Bavaria many churches are full of fruit and bread.", k: ["both|but|in bavaria|in germany", "halloween|thanksgiving|fourth of july|independence|memorial", "fasching|all saints|unity|harvest|volkstrauertag|3 october|1 november"], min: 3 }],
        tipp: "Both … and … are … · In the USA …, but in Bavaria … · … is like …" },
      { art: "offen", id: "oma", m7: true, tag: "Plus · Mediation", titel: "Tell your grandma",
        lead: "Deine Oma fragt: <i>„Was ist eigentlich Thanksgiving?“</i> Erkläre es ihr <b>auf Deutsch</b> in zwei Sätzen. <span class=\"de\">Für M7 Pflicht, für R7 freiwillig. Nur das Wichtigste: wann, wer, was.</span>",
        fragen: [{ q: "Was ist Thanksgiving? Erkläre es deiner Oma auf Deutsch.", m: "Thanksgiving ist ein Feiertag in den USA am vierten Donnerstag im November. Die Familien kommen zusammen, essen Truthahn und sagen danke für die guten Dinge im Leben.", k: ["november|donnerstag", "familie|essen|truthahn|pute|dank|danke"], min: 2 }],
        tipp: "Wann ist der Tag? Was machen die Familien? Wofür sagen sie danke?" }
    ] },
    { kurz: "Language", ober: "more, most, much, many", titel: "Language: special days", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>trick or treat</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-more-halloween.jpg\" width=\"1280\" height=\"853\" alt=\"Children in Halloween costumes stand at a front door; a woman holds a bowl of sweets.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What are the children doing? Which costume would you like? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "merke", kopf: "LOOK AT THE LANGUAGE", html: "<p><b>Long adjectives:</b> <i>Christmas is more expensive than Easter. That was the most famous parade.</i><br><b>much / many:</b> <i>many flags · many towns · How many pumpkins? – much food · much fun · How much time?</i></p><p><span class=\"de\">Bei langen Adjektiven: more … than (mehr … als), the most … (am meisten). many steht bei Dingen, die man zählen kann, much bei Dingen, die man nicht zählen kann.</span></p>" },
      ...zwei({ art: "mc", id: "sprache-mc", tag: "Language", titel: "Choose the right words", foerder: { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" } },
        { lead: "Tick the correct answer. <span class=\"de\">Wähle die richtige Form.</span>",
          fragen: [
            { q: "In the USA, ____ people watch American football on Thanksgiving.", o: ["many", "much"], a: 0, e: "People kann man zählen – also many." },
            { q: "Which sentence is correct?", o: ["For children, Halloween is more exciting than Memorial Day.", "For children, Halloween is excitinger than Memorial Day.", "For children, Halloween is more exciting as Memorial Day.", "For children, Halloween is the more exciting than Memorial Day."], a: 0, e: "exciting ist lang: more exciting than – mit than, nicht as." }
          ],
          hilfen: ["Kann man es zählen? Dann many.", "Langes Adjektiv: more + Adjektiv + than."] },
        { lead: "Tick the correct answer.",
          fragen: [
            { q: "In the USA, ____ people watch American football on Thanksgiving.", o: ["many", "much", "a lot", "lots"], a: 0, e: "People kann man zählen – also many. A lot und lots brauchen of: a lot of people." },
            { q: "Which sentence is correct?", o: ["For children, Halloween is more exciting than Memorial Day.", "For children, Halloween is excitinger than Memorial Day.", "For children, Halloween is more exciting as Memorial Day.", "For children, Halloween is the more exciting than Memorial Day."], a: 0, e: "exciting ist lang: more exciting than – mit than, nicht as." }
          ],
          hilfen: ["Count it? Then many. Long adjective? Then more … than."] }),
      { art: "luecke", id: "sprache-luecke", tag: "Gap text", titel: "Special days", lead: "Complete the sentences with words from the box. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
        foerder: { href: "unit4/extra/much-many.html", text: "Extra: much oder many?" },
        hilfen: ["Kann man es zählen? Dann many, sonst much.", "Steht than im Satz? Dann more. Steht the davor? Dann most.", "Satz 1: most important · Satz 2: many · Satz 3: much · Satz 4: more exciting"],
        absaetze: [
          ["For many families, Thanksgiving is one of the ", { g: "most important" }, " days of the year."],
          ["Children get so ", { g: "many" }, " sweets at Halloween!"],
          ["Don't eat too ", { g: "much" }, " pumpkin pie!"],
          ["For me, fireworks are ", { g: "more exciting" }, " than parades."]
        ], extra: ["excitinger", "a lot"] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know", lead: "Decide: true or false? <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["Memorial Day is always on a Monday.", true],
          ["Halloween is a holiday, so children don't go to school.", false],
          ["On the Fourth of July, Americans celebrate their independence from Great Britain.", true],
          ["Thanksgiving is on the first Sunday in October.", false],
          ["In Bavaria, 1 November is a holiday.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You know four special days in the USA, you can compare them with special days in Bavaria, and you can say which day you would like to celebrate." }
});
