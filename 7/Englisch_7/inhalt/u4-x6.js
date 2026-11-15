/* Englisch 7 (7R/7M) · Unit 4 · Extra: Hören – Zahlen und Zeiten (Kürzel D27)
   Kleine Extra-Übung (Förder-Ziel von „Das ist noch schwer?“ bei Zahlen, Uhrzeiten und Preisen in den Hörtexten der Unit 4, vor allem
   Listening practice 1 und 2): erst Zahlwörter und Uhrzeiten verstehen (Merkkasten, Zahlen-Paare), dann ein kurzes, langsames Gespräch
   an einem Ticketschalter hören (Fragen zuerst lesen) und Steg, Preis und Uhrzeiten heraushören, zuletzt Zahlen in Wörter umsetzen (auch eine Ordnungszahl: fourth/fourteenth bzw. third/thirteenth – wie die Haltestelle
   und das Stockwerk in Listening practice 1).
   Buchprinzip (nur Aufbau, nichts übernommen): Wörter vorentlasten, dann gezielt hören (Multiple Choice, Lückensätze mit Wortkasten
   wie in der leichteren Fassung der Höraufgaben), dann sichern.
   Besser: sofortige Rückmeldung, deutscher Merkkasten (R7) zu -teen/-ty, half past = halb (nächste Stunde!), quarter past/to, a.m./p.m.,
   Dollar und Cent, Ziffer für Ziffer; die Sprecherin wiederholt schwierige Zahlen („one, three – thirteen“), wie es auch im Alltag
   üblich ist.
   Differenzierung: R7 mit deutschen Hilfen, ein Kinderpreis und zwei Uhrzeiten (66 Wörter); M7 englisch, ein Preis zum Zusammenrechnen,
   eine verpasste Fahrt und drei Zeitangaben (104 Wörter).
   LehrplanPLUS E7 1.2 Hörverstehen (kurzes Gespräch, Zahlen, Preise und Uhrzeiten entnehmen), E7 2 (Zahlen, Uhrzeit, Preise).
   Texte: texte/u4/u4-x6-boat-r.js, u4-x6-boat-m.js (Mateo = Junge, Ms Lowell = Frau). Personen und Bootsfahrt sind erfunden.
   Kein Förder-Link, kein Abschlussquiz (kleine Extra-Übung).
   BILDER:
   1. Station „Numbers“ (Vorentlastung): eine große Bahnhofsuhr, daneben eine Tafel mit Abfahrtszeiten und ein Preisschild „Kids $6.50“.
   2. Station „Listening“ (Sprechanlass): ein Ticketschalter an einem Hafen mit kleinen Ausflugsbooten und nummerierten Stegen, ein
      Junge mit Kappe kauft eine Karte bei einer Frau hinter der Scheibe. */
const x6 = (r, m) => ({ R: r, M: m });
D7Kit.seite({
  id: "u4-x6",
  titel: "Extra: Hören – Zahlen und Zeiten",
  einleitung: "Zahlen hört man schnell falsch: thirteen oder thirty? Viertel nach oder Viertel vor? Hier übst du Zahlen, Uhrzeiten und Preise in Dollar Schritt für Schritt – kurz und langsam.",
  zeit: "etwa 10 Minuten",
  ziele: ["🔢 I hear the difference between -teen and -ty.", "🕒 I understand times with half past, quarter past and quarter to.", "💵 I understand prices in dollars and cents."],
  thema: "Unit 4 Extra: Hören – Zahlen und Zeiten",
  stationen: [
    { kurz: "Numbers", ober: "Zahlen und Uhrzeiten", titel: "Numbers, times and prices", teile: [
      { art: "merke", nur: "R", kopf: "MERKE", html: "<p><b>-teen oder -ty?</b> thir<u>teen</u> (13) – <u>thir</u>ty (30): Bei <b>-teen</b> ist die Betonung <b>hinten</b>, bei <b>-ty</b> <b>vorne</b>. Oft sagt man die Ziffern noch einmal: „one, three – thirteen“.</p><p><b>Uhrzeiten:</b> half past eight = 8:30 (<b>halb neun!</b>) · a quarter past eleven = 11:15 · a quarter to ten = 9:45<br><b>a.m.</b> = vormittags · <b>p.m.</b> = nachmittags und abends: 7 p.m. = 19 Uhr</p><p><b>Preise:</b> $3.75 = three dollars seventy-five · 80¢ = eighty cents</p><p><b>Nummern:</b> gate B twelve = B12 · Zimmernummern sagt man oft Ziffer für Ziffer: room two oh eight = Zimmer 208 (oh = Null)</p><p><b>Ordnungszahlen:</b> 2nd = second (zweite) · 12th = twelfth (zwölfte) · 20th = twentieth (zwanzigste)</p>" },
      { art: "merke", nur: "M", kopf: "NOTE", html: "<p><b>-teen or -ty?</b> thir<u>teen</u> (13) – <u>thir</u>ty (30): <b>-teen</b> is stressed at the end, <b>-ty</b> at the beginning. People often say the numbers again: “one, three – thirteen”.</p><p><b>Times:</b> half past eight = 8:30 <span class=\"de\">(halb neun!)</span> · a quarter past eleven = 11:15 · a quarter to ten = 9:45 · ten to six = 5:50<br><b>a.m.</b> = before twelve noon · <b>p.m.</b> = after twelve noon: 7 p.m. = 19:00</p><p><b>Prices:</b> $3.75 = three dollars seventy-five · 80¢ = eighty cents</p><p><b>Numbers:</b> gate B twelve = B12 · room numbers are often said one by one: room two oh eight = 208 (oh = zero)</p><p><b>Ordinal numbers:</b> 2nd = second · 12th = twelfth · 20th = twentieth</p>" },
      { art: "paare", id: "zahlen", nur: "R", titel: "-teen or -ty?", lead: "Match the words and the numbers. <span class=\"de\">Sprich die Wörter leise mit: Wo ist die Betonung?</span>",
        paare: [["thirteen", "13"], ["thirty", "30"], ["fifteen", "15"], ["fifty", "50"], ["nineteen", "19"], ["ninety", "90"]],
        hilfen: ["-teen = 13 bis 19.", "-ty = 30, 40, 50 … 90."] },
      { art: "paare", id: "zahlen", nur: "M", titel: "-teen or -ty?", lead: "Match the words and the numbers.",
        paare: [["fourteen", "14"], ["forty", "40"], ["seventeen", "17"], ["seventy", "70"], ["eighteen", "18"], ["eighty", "80"]],
        hilfen: ["-teen = 13 to 19, -ty = 30, 40, 50 …"] },
      { art: "paare", id: "zeiten", nur: "R", titel: "What time is it?", lead: "Match the times. <span class=\"de\">Denk an: half past four = halb fünf.</span>",
        paare: [["half past four", "4:30"], ["a quarter past four", "4:15"], ["a quarter to five", "4:45"], ["ten to five", "4:50"]],
        hilfen: ["past = nach, to = vor.", "a quarter = ein Viertel = 15 Minuten."] },
      { art: "paare", id: "zeiten", nur: "M", titel: "What time is it?", lead: "Match the times.",
        paare: [["twenty past six", "6:20"], ["a quarter to seven", "6:45"], ["half past eleven", "11:30"], ["eight p.m.", "20:00"], ["five to nine", "8:55"]],
        hilfen: ["past = after the hour, to = before the next hour; p.m. = in the afternoon or evening."] }
    ] },
    { kurz: "Listening", ober: "At the ticket desk", titel: "Tickets for a boat trip", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at the ticket desk</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-x6-hafen.jpg\" width=\"1280\" height=\"853\" alt=\"A ticket desk at a harbour: a boy with a cap buys a ticket from a woman behind a glass window; small boats wait at the piers.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What does the boy want? What could he ask? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", nur: "R", html: "<p class=\"lead\"><b>Mateo</b> is on holiday in a city by the sea in the USA. He wants to go on a <b>boat trip</b>. He asks <b>Ms Lowell</b> at the ticket desk. <span class=\"de\">Mateo kauft eine Karte für eine Bootsfahrt. Ein pier ist ein Steg, an dem die Boote abfahren.</span></p><p><b>Read the questions first, then listen.</b> Listen for: <b>When?</b> <b>Which pier?</b> <b>How much?</b> <span class=\"de\">Lies erst die Fragen, dann hör zu.</span></p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\"><b>Mateo</b> is on holiday with his mum in a city by the sea in the USA. He wants to go on a <b>boat trip</b> and asks <b>Ms Lowell</b> at the ticket desk. A <b>pier</b> is the place where the boats leave.</p><p><b>Read the questions first, then listen.</b> Listen for the times, the pier and the prices. You can check the total price yourself: add up the two tickets.</p>" },
      { art: "hoertext", id: "hoer1", tag: "🎧 Listening", hoertext: x6("u4-x6-boat-r", "u4-x6-boat-m"),
        fragen: [
          { art: "mc", id: "x-mc", nur: "R", titel: "Pier and price", lead: "Listen and tick the right answers. <span class=\"de\">Hör auf die Zahlen.</span>",
            fragen: [
              { q: "Where does the boat leave from?", o: ["pier 13", "pier 30", "pier 3"], a: 0, e: "Ms Lowell sagt: „From pier thirteen. That's one, three – thirteen.“" },
              { q: "How much is a ticket for kids?", o: ["$6.50", "$16.50", "$6.15"], a: 0, e: "Ms Lowell sagt: „Kids pay six dollars fifty.“ – also $6.50." }
            ],
            hilfen: ["Bei der Nummer sagt Ms Lowell die Ziffern noch einmal: one, three.", "six dollars fifty = 6 Dollar und 50 Cent."] },
          { art: "luecke", id: "x-zeiten", nur: "R", titel: "The times", lead: "Listen again and complete the times. <span class=\"de\">Zwei Wörter bleiben übrig.</span>",
            absaetze: [["The boat leaves at half past ", { g: "two" }, "."], ["The boat is back at a quarter ", { g: "to" }, " four."]],
            extra: ["three", "past"],
            hilfen: ["half past two = halb drei.", "a quarter to four = Viertel vor vier."] },
          { art: "mc", id: "x-mc", nur: "M", titel: "Pier and price", lead: "Listen and tick the right answers.",
            fragen: [
              { q: "Which pier does the boat leave from?", o: ["pier 15", "pier 50", "pier 5"], a: 0, e: "Ms Lowell says: “Pier fifteen. Not fifty – one, five.”" },
              { q: "How much do Mateo and his mum pay?", o: ["$21.25", "$14.00", "$21.50"], a: 0, e: "One adult ($14.00) and one kid ($7.25): $21.25 – twenty-one dollars twenty-five." }
            ],
            hilfen: ["Mateo is twelve, so he pays the price for kids."] },
          { art: "luecke", id: "x-zeiten", nur: "M", titel: "The times", lead: "Listen again and complete the sentences. Two words are extra.",
            absaetze: [["The next boat leaves at a quarter ", { g: "past" }, " three."], ["The trip takes about ", { g: "ninety" }, " minutes."], ["They are back at a quarter ", { g: "to" }, " five."]],
            extra: ["nineteen", "half"],
            hilfen: ["The two o'clock boat is full. Listen for the next boat."] }
        ] }
    ] },
    { kurz: "Check", ober: "Zahlen in Wörtern", titel: "Say it in words", teile: [
      { art: "luecke", id: "x-woerter", nur: "R", titel: "Numbers in words", lead: "How do you say it? Complete the words. <span class=\"de\">So sagt man die Zahlen auf Englisch. Vier Wörter bleiben übrig.</span>",
        absaetze: [["$4.50 = four dollars ", { g: "fifty" }, "."], ["gate B16 = gate B ", { g: "sixteen" }, "."], ["7:15 = a quarter ", { g: "past" }, " seven."], ["room 312 = room three one ", { g: "two" }, "."], ["the 4th stop = the ", { g: "fourth" }, " stop."]],
        extra: ["fifteen", "sixty", "to", "fourteenth"],
        hilfen: ["16 endet auf -teen, 60 auf -ty.", "7:15 = Viertel nach sieben.", "Zimmernummern sagt man Ziffer für Ziffer. 4th ist die vierte, 14th die vierzehnte."] },
      { art: "luecke", id: "x-woerter", nur: "M", titel: "Numbers in words", lead: "How do you say it? Complete the words. Four words are extra.",
        absaetze: [["$12.99 = twelve dollars ", { g: "ninety-nine" }, "."], ["7:40 p.m. = twenty ", { g: "to" }, " eight in the evening."], ["gate C16 = gate C ", { g: "sixteen" }, "."], ["room 504 = room five ", { g: "oh" }, " four."], ["the 3rd floor = the ", { g: "third" }, " floor."]],
        extra: ["sixty", "past", "nineteen", "thirteenth"],
        hilfen: ["7:40 is twenty minutes before eight o'clock.", "Zero in a room number often sounds like the letter O.", "Most ordinal numbers end in -th – but not 1st, 2nd and 3rd."] }
    ] }
  ],
  weiter: { text: "Geh jetzt zurück zu deiner Aufgabe und probiere es noch einmal." }
});
