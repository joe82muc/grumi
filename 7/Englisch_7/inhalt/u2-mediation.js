/* Englisch 7 (7R/7M) · Unit 2 Fun in Wales and Scotland · Mediation: At a summer festival (Kürzel B16)
   (Sprachmittlung Englisch → Deutsch: Das Programm eines Musikfestivals lesen, für Mutter und kleinen Bruder das Wichtige
   auswählen, Unwichtiges weglassen, Notizen und Lückensätze auf Deutsch, eine kurze Zusammenfassung für die Mutter und eine
   Antwort für den Bruder als Gespräch mit KI-Prüfung; danach Sprechen auf Englisch (Welche Band? Schon einmal auf einem Konzert?).
   Besser als das Buch: Plus für M7 in der Gegenrichtung Deutsch → Englisch am Infostand.)
   Buchprinzip (BUCH-UNIT2.md, Abschnitt „Mediation“, nur Aufbau, nichts übernommen): englisches Festivalprogramm lesen → auf
   Deutsch in drei bis vier Sätzen zusammenfassen → deutsche Lückensätze mit Informationen aus dem Programm → Sprechen: Welchen
   Act würdest du sehen, und warst du schon einmal auf einem Konzert oder Festival? Besser: Situation und Adressat werden zuerst
   geklärt, das Auswählen wird geübt (Wichtig für Mama / nicht nötig), die Zusammenfassung prüft die KI auf Auswahl und
   Verständlichkeit (nicht Wort für Wort), Tipps in Stufen, R7 mit Auswahl statt Freitext und deutschen Satzanfängen.
   Differenzierung: andere Fassung des Programms (R7 195 Wörter, M7 346 Wörter mit Einzelheiten, die man weglassen muss) mit
   eigenen Zeilenangaben; Notizzettel – R7 wählt aus, M7 schreibt selbst; Zusammenfassung – R7 mit Satzanfang und Tipps, M7 ohne;
   Plus für M7 (m7): Infostand, drei Beiträge Deutsch ↔ Englisch (für R7 freiwillig, mit Satzanfängen).
   LehrplanPLUS E7 Sprachmittlung (Informationen aus einem englischen Programm sinngemäß auf Deutsch weitergeben, Adressat und
   Situation beachten, Wichtiges auswählen), E7 1.1 Leseverstehen (Programm), E7 1.3 Sprechen (Vorlieben nennen, present perfect:
   Have you ever …?), E7 3 (present perfect Fragen und Kurzantworten).
   Texte: u2-med-flyer-r / u2-med-flyer-m (Programmplakat). Alle Personen, Bands und das Festival sind erfunden; Oban gibt es an der
   Westküste Schottlands, die Herkunftsorte der Bands sind echte Städte. Wörter der Unit (ever, already, never, ceilidh, bagpipes,
   to book …) kommen bewusst vor. Förder-Links: keine (Auftrag).
   BILDER:
   1. Station „Get ready“ (Vorentlastung/Sprechanlass): ein buntes Plakat „Harbour Lights Festival“ an einer Hafenmauer in einer
      kleinen schottischen Hafenstadt, im Hintergrund Fischerboote, davor eine Mutter mit Regenjacke und ein Junge mit Schal.
   2. Station „Tell Mama“ (Situation): am Küchentisch einer Ferienwohnung liegt ein Flyer; die Mutter blickt ratlos darauf, ein
      Mädchen oder Junge (13) zeigt mit dem Finger auf eine Zeile, der kleine Bruder (8) tanzt im Hintergrund mit einem Stofftier.
   3. Station „Plus“ (Infostand): ein kleiner Infostand am Festivaltor, eine freundliche Frau in Warnweste gibt einer Familie
      Eintrittsbänder, hinter dem Tor sieht man ein großes Zelt mit Lichterketten und einen Leuchtturm im Abendlicht. */
D7Kit.seite({
  id: "u2-mediation",
  titel: "Mediation: At a summer festival",
  einleitung: "Your family is on holiday in <b>Oban</b> in Scotland. Your mum doesn't speak English – and there is a <b>music festival</b> at the harbour! <b>You help your family</b>: you read the programme and tell your mum in German what is important. Du lernst, das Wichtige auszuwählen und für die richtige Person einfach zu sagen – nicht Wort für Wort.",
  zeit: "etwa 45 Minuten",
  ziele: ["🌉 I help my family when they don't understand English.", "🎯 I think about who I help and what they need to know.", "✂️ I pick the important information and leave the rest out.", "🗣️ I say what I like and ask: Have you ever been to …?"],
  thema: "Unit 2 Fun in Wales and Scotland, Mediation: Festivalprogramm für die Familie zusammenfassen (Englisch → Deutsch), Plus Deutsch → Englisch",
  quiz: { profi: "Festival helper" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst weiter, was in einem englischen Text steht – auf Deutsch, für jemanden, der kein Englisch versteht. Nicht Wort für Wort, sondern das Wichtige."],
    stage: ["stage", "Bühne: Dort spielen die Bands und Sänger."],
    gates: ["gates", "Einlass, Eingangstore: Wenn die Tore öffnen, darf man aufs Gelände."],
    tent: ["tent", "Zelt: Auf dem Festival steht ein großes Zelt mit einer zweiten Bühne."],
    fireworks: ["fireworks", "Feuerwerk: Bunte Lichter am Himmel, meistens am Abend."],
    ferry: ["ferry", "Fähre: Ein Schiff, das Menschen und Autos über das Meer zu den Inseln bringt."],
    goat: ["goat", "Ziege: Ein Tier mit Hörnern, das auf Bauernhöfen lebt."],
    ceilidh: ["ceilidh", "Ceilidh: Ein schottischer Tanzabend mit Volksmusik, bei dem alle gemeinsam tanzen. Man spricht es „Kay-li“ aus."],
    beginners: ["beginners", "Anfänger: Menschen, die etwas zum ersten Mal lernen."],
    volunteer: ["volunteer", "Freiwilliger, Helfer: Jemand, der ohne Bezahlung hilft."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "You are the helper", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a festival in a harbour town</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-med-plakat.jpg\" width=\"1280\" height=\"853\" alt=\"A colourful poster on a harbour wall in a small Scottish harbour town; fishing boats behind, a mother and a boy.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where are the people? What kind of festival is it? What can they see and do? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">On the harbour wall in <b>Oban</b> you see a big poster: <b>Harbour Lights Festival</b>. Your family wants to go on Saturday. But your <b>mum</b> doesn't understand the English poster – and your little brother <b>Finn</b> (8) loves animals and dancing. <span class=\"de\">Deine Familie macht Urlaub in Oban an der Westküste Schottlands. Deine Mutter versteht kaum Englisch, dein kleiner Bruder Finn ist acht und mag Tiere und Tanzen. Du hilfst: Du liest das Programm und sagst deiner Mutter auf Deutsch, was sie wissen muss. Das heißt <button class=\"term\" data-t=\"mediation\">Mediation</button>.</span></p>" },
      { art: "merke", kopf: "MEDIATION – SO GEHT'S", html: "<ol><li><b>Who is it for?</b> Für wen sagst du es? Was braucht diese Person?</li><li><b>Pick the important things.</b> Wann, wo, wie viel, was für wen, was mitbringen?</li><li><b>Leave the rest out.</b> Nicht jede Zahl und jeder Name ist wichtig.</li><li><b>Say it simply – in German.</b> Kurze Sätze, wie du mit deiner Mutter sprichst. Keine Wort-für-Wort-Übersetzung.</li></ol>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du gleich im Programm.</span>",
        paare: [["stage", "Bühne"], ["fireworks", "Feuerwerk"], ["ferry", "Fähre"], ["goat", "Ziege"], ["beginners", "Anfänger"], ["rain jacket", "Regenjacke"]] },
      { art: "mc", id: "situation", tag: "Think first", titel: "Who do you help – and what do they need?", lead: "Tick the best answer. <span class=\"de\">Erst die Situation klären, dann lesen.</span>",
        fragen: [
          { q: "Who do you help in this situation?", o: ["Your mum, who doesn't understand English, and your brother Finn", "Your English teacher", "A tourist from the USA", "Your whole class"], a: 0,
            e: "Du vermittelst für deine Familie: Deine Mutter versteht das englische Plakat nicht, und Finn braucht Infos, die zu ihm passen." },
          { q: "Was braucht deine Mutter, um zu entscheiden, ob ihr hingeht?", o: ["Wann und wo es ist, was es kostet, was es für Finn gibt und was man mitbringen soll", "Jedes Wort des Plakats auf Deutsch", "Die Namen aller Sänger und ihre Lieder", "Nur die Uhrzeit des Feuerwerks"], a: 0,
            e: "Deine Mutter will planen: Zeit, Ort, Preis, Programm für Finn, Hinweise. Eine Wort-für-Wort-Übersetzung hilft ihr nicht." }
        ] }
    ] },
    { kurz: "Read", ober: "Station 2", titel: "Read the programme and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Here is the programme of the festival. Read it once. Don't stop at words you don't know. <span class=\"de\">Lies das Programm einmal ganz. Bleib nicht an unbekannten Wörtern hängen – manche stehen im Glossar (antippen).</span></p><p>The festival has two stages, a <button class=\"term\" data-t=\"tent\">tent</button> and a family programme. There are <button class=\"term\" data-t=\"fireworks\">fireworks</button> in the evening. A <button class=\"term\" data-t=\"ferry\">ferry</button> takes visitors back to the islands. A <button class=\"term\" data-t=\"stage\">stage</button> is the place where the bands play. A class for <button class=\"term\" data-t=\"beginners\">beginners</button> is for people who start something new.</p>" },
      { art: "lesetext", lesetext: { R: "u2-med-flyer-r", M: "u2-med-flyer-m" } },
      { art: "mc", id: "text-gl", tag: "The main idea", titel: "What is it?", lead: "Tick the correct answer. <span class=\"de\">Was ist das für ein Text?</span>",
        fragen: [
          { q: "What kind of text is this?", o: ["The programme of a music festival", "A letter from a friend", "A weather report", "An email from a hotel"], a: 0,
            e: "Es ist ein Programm: Uhrzeiten, Bühnen, Preise und Hinweise stehen in Listen. So etwas liest man gezielt." },
          { q: "In a text for families, the word \"beginners\" means …", o: ["people who learn something for the first time", "children under twelve", "the best dancers", "visitors from the islands"], a: 0,
            e: "Beginners sind Anfänger. Ein Tanzkurs „for beginners“ ist also für Leute, die noch nie getanzt haben." }
        ] },
      { art: "text", html: "<p class=\"lead\">Your mum asks questions. Find the information first. <span class=\"de\">Deine Mutter fragt nach. Tippe die Zeilen an, in denen die Antwort steht – so findest du Wichtiges schnell.</span></p>" },
      { art: "beleg", id: "zeilen", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Dann kannst du die Stelle auch angeben: (ll. 2–3).</span>", lesetext: "u2-med-flyer-r",
        fragen: [
          { q: "Mama fragt: „Ab wann dürfen wir aufs Gelände?“", zeilen: [2, 3], e: "In der zweiten Zeile steht „Gates open at 11 am“: Der Einlass ist ab 11 Uhr.", tipp: "Suche das Wort gates (Tore). Wann gehen sie auf?" },
          { q: "Mama fragt: „Was müssen Kinder unter zwölf zahlen?“", zeilen: [23, 24], e: "Bei TICKETS steht: Children under 12 free – kostenlos.", tipp: "Die Preise stehen unter TICKETS. Suche das Wort children." }
        ],
        hilfen: ["Suche im Programm die Überschrift, die zur Frage passt (TICKETS, FOR FAMILIES, GOOD TO KNOW …).", "Lies nur diesen Abschnitt, nicht das ganze Programm.", "Tippe die Zeile an, in der die Antwort steht, und prüfe dann."] },
      { art: "beleg", id: "zeilen", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Dann kannst du die Stelle auch angeben: (ll. 2–3).</span>", lesetext: "u2-med-flyer-m",
        fragen: [
          { q: "Mama fragt: „Ab wann dürfen wir aufs Gelände?“", zeilen: [2, 3], e: "In der zweiten Zeile steht: The gates are open from 11 am until midnight – von 11 Uhr bis Mitternacht.", tipp: "Suche das Wort gates (Tore). Wann gehen sie auf?" },
          { q: "Mama fragt: „Was müssen Kinder unter zwölf zahlen?“", zeilen: [34, 35], e: "Bei TICKETS steht: Children under 12 free – kostenlos.", tipp: "Die Preise stehen unter TICKETS. Suche das Wort children." },
          { q: "Mama fragt: „Was sollen wir wegen des Wetters mitnehmen?“", zeilen: [39, 40], e: "Bei GOOD TO KNOW steht: Bring a rain jacket – eine Regenjacke, weil sich das Wetter an der Küste schnell ändern kann.", tipp: "Hinweise stehen unter GOOD TO KNOW. Suche das Wort weather." }
        ] },
      { art: "text", html: "<p class=\"lead\">Not everything is important for your mum. <b>Sort the information.</b> <span class=\"de\">Deine Familie wohnt in Oban und geht zu Fuß zum Hafen. Was muss Mama wissen – und was kannst du weglassen?</span></p>" },
      { art: "sort", id: "wichtig", nur: "R", tag: "Important or not?", titel: "What does Mama need?", lead: "Put each piece of information in the right box. <span class=\"de\">Wichtig für Mama oder nicht nötig?</span>",
        hilfen: ["Frag dich: Hilft das Mama, ihren Tag zu planen – oder ist es nur eine Nebensache?", "Zeiten, Preise, Programm für Kinder und Hinweise zum Mitbringen sind wichtig.", "Fähre, T-Shirts und Helfer-Aufruf betreffen eure Familie nicht."],
        buckets: ["Important for Mama", "Not necessary"],
        items: [{ t: "Gates open at 11 am.", b: 0 }, { t: "Children under 12 are free.", b: 0 }, { t: "Kids' corner with rabbits and goats.", b: 0 }, { t: "Bring a rain jacket.", b: 0 },
                { t: "The last ferry leaves at 11 pm.", b: 1 }, { t: "Festival T-shirts are for sale at the red stall.", b: 1 }, { t: "Volunteers are welcome.", b: 1 }, { t: "No glass bottles, please.", b: 0 }] },
      { art: "sort", id: "wichtig", nur: "M", tag: "Important or not?", titel: "What does Mama need?", lead: "Put each piece of information in the right box. <span class=\"de\">Wichtig für Mama oder nicht nötig? Denk an eure Lage: Ihr wohnt in Oban.</span>",
        buckets: ["Important for Mama", "Not necessary"],
        items: [{ t: "The gates are open from 11 am until midnight.", b: 0 }, { t: "Children under 12 are free.", b: 0 }, { t: "There is a small farm with rabbits, goats and a pony.", b: 0 }, { t: "The ceilidh class for beginners is free.", b: 0 }, { t: "Bring a rain jacket.", b: 0 },
                { t: "Last year Maeve Calder played for nearly three thousand fans.", b: 1 }, { t: "The last ferry to the islands leaves at 11 pm.", b: 1 }, { t: "T-shirts and badges are for sale at the red stall.", b: 1 }, { t: "Volunteers are always welcome.", b: 1 }, { t: "The rock band has just finished a tour of Wales and Ireland.", b: 1 }] },
      { art: "markieren", id: "finn", tag: "Find it", titel: "What is good for Finn?", finde: "die wichtigen Wörter (Tanzkurs, Uhrzeit, Ort, Preis)", lead: "Finn likes dancing. Tap the important words for him. <span class=\"de\">Finn möchte tanzen. Tippe die Wörter an, die Mama für Finn braucht: Was, wann, wo, wie viel?</span>",
        satz: "The [[ceilidh dance class]] for beginners is at [[2.30 pm]] in the [[Market Tent]]. It is [[free]].", toleranz: 1,
        e: "Für Finn zählen: Tanzkurs für Anfänger, 14.30 Uhr, im Market Tent, kostenlos.",
        hilfen: ["Vier Dinge braucht Mama: was, wann, wo und wie viel es kostet.", "Das Wort ceilidh gehört zum Namen des Kurses. Die Uhrzeit steht in der Form 2.30 pm.", "Suche: ceilidh dance class · 2.30 pm · Market Tent · free"] }
    ] },
    { kurz: "Tell Mama", ober: "Station 3", titel: "Say it in German", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a flyer on the kitchen table</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u2/u2-med-flyer.jpg\" width=\"1280\" height=\"853\" alt=\"A mother looks puzzled at a flyer on a kitchen table; a girl points at it; a little brother dances behind.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the problem? How could the girl help her mother? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Now you write down what you know – in German. <span class=\"de\">Zuerst ein paar Lückensätze mit Informationen über die Acts, dann ein Notizzettel für Mama, zuletzt sagst du Mama und Finn selbst, was los ist.</span></p>" },
      { art: "luecke", id: "acts", tag: "In German", titel: "Who plays where?", lead: "Fill in the gaps with the information from the programme. <span class=\"de\">Ergänze die deutschen Sätze. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Auf der ", { g: "Lighthouse Stage" }, " spielt um 20 Uhr die Rockband Neon Tide."],
          ["Die Sängerin Maeve Calder kommt aus ", { g: "Dundee" }, " und singt Popsongs."],
          ["Das Duo Dai and Gwen spielt im ", { g: "Market Tent" }, " ruhige Lieder mit Gitarren."],
          ["Die Puffin Brothers kommen aus ", { g: "Stornoway" }, " und machen ", { g: "Folkmusik" }, "."],
          ["Die Highland Hoppers spielen ", { g: "Ceilidh" }, "-Musik – dazu kann man tanzen."],
          ["DJ Coral kommt aus ", { g: "Plymouth" }, " und legt abends Tanzmusik auf."]
        ], extra: ["Newcastle", "Rockmusik"] },
      { art: "formular", id: "notizen", nur: "R", titel: "Notes for Mama", lead: "Write notes for your mum. <span class=\"de\">Wähle für jede Zeile die richtige Antwort aus. Alles, was Mama wissen muss – und sonst nichts.</span>",
        kopf: "Notizzettel für Mama",
        felder: [
          { label: "Eintritt für dich (13 Jahre)", wahl: ["kostenlos", "6 Pfund", "12 Pfund", "18 Pfund"], loesung: ["6 Pfund"] },
          { label: "Eintritt für Finn (8 Jahre)", wahl: ["kostenlos", "6 Pfund", "12 Pfund"], loesung: ["kostenlos"] },
          { label: "Tanzkurs für Anfänger um", wahl: ["13.30 Uhr", "14.30 Uhr", "15.00 Uhr", "18.00 Uhr"], loesung: ["14.30 Uhr"] },
          { label: "Feuerwerk um", wahl: ["20.00 Uhr", "21.45 Uhr", "22.00 Uhr", "23.00 Uhr"], loesung: ["21.45 Uhr"] },
          { label: "Fish and Chips gibt es", wahl: ["am Hafen", "im Market Tent", "in der Kinderecke", "an der Fähre"], loesung: ["am Hafen"] },
          { label: "Nicht mitbringen:", wahl: ["Glasflaschen", "Regenjacken", "Sonnenbrillen", "Handys"], loesung: ["Glasflaschen"] }
        ] },
      { art: "formular", id: "notizen", nur: "M", titel: "Notes for Mama", lead: "Write notes for your mum. <span class=\"de\">Schreibe kurze Notizen auf Deutsch: nur das, was Mama wissen muss. Kurze Antworten genügen.</span>",
        kopf: "Notizzettel für Mama",
        felder: [
          { label: "Eintritt für dich (13 Jahre)", platz: "z. B. 3 Pfund", loesung: ["6 Pfund", "6 £", "£6", "6", "6,00 Pfund", "6 Pfund Eintritt", "6 Pfund (12 bis 16 Jahre)", "sechs Pfund", "sechs", "£ 6", "6 Pfund für mich", "ich zahle 6 Pfund"] },
          { label: "Eintritt für Finn (8 Jahre)", platz: "z. B. 3 Pfund", loesung: ["kostenlos", "frei", "gratis", "umsonst", "nichts", "0 Pfund", "0", "er zahlt nichts", "kostet nichts", "eintritt frei", "kostenlos (unter 12)", "frei (unter 12)", "null Pfund", "Finn zahlt nichts"] },
          { label: "Tanzkurs für Anfänger um", platz: "z. B. 10.15 Uhr", loesung: ["14.30 Uhr", "14:30 Uhr", "14.30", "14:30", "halb drei", "2.30 Uhr", "um 14.30 Uhr", "um 14:30 Uhr", "um halb drei", "14.30 uhr (halb drei)", "halb 3", "um halb 3", "2.30 pm", "um 2.30 Uhr", "14 Uhr 30", "um 14 Uhr 30"] },
          { label: "Feuerwerk um", platz: "z. B. 20.00 Uhr", loesung: ["21.45 Uhr", "21:45 Uhr", "21.45", "21:45", "9.45 Uhr", "viertel vor zehn", "dreiviertel zehn", "um 21.45 Uhr", "um 21:45 Uhr", "um viertel vor zehn", "viertel vor 10", "um viertel vor 10", "dreiviertel 10", "um dreiviertel zehn", "9.45 pm", "21 Uhr 45", "um 21 Uhr 45"] },
          { label: "Fish and Chips gibt es", platz: "z. B. im Zelt", loesung: ["am hafen", "beim hafen", "neben dem hafen", "hafen", "an der hafenmauer", "am hafen (den ganzen tag)", "im hafen", "am hafen, den ganzen tag", "am stand am hafen"] },
          { label: "Nicht mitbringen:", platz: "z. B. Hunde", loesung: ["glasflaschen", "keine glasflaschen", "flaschen aus glas", "glasflasche", "flaschen aus glas (keine glasflaschen)", "glas", "keine flaschen aus glas"] }
        ] },
      { art: "text", html: "<p class=\"lead\"><b>Now it's your turn.</b> Your mum and Finn ask you something. Answer them in German – short and simple. <span class=\"de\">Nach jeder Sprechblase schreibst du deine Antwort. Wähle, was wichtig ist, und lass Unwichtiges weg. Brauchst du Hilfe? Tippe auf „💡 Tipp“. Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist.</span></p>" },
      { art: "kette", id: "mama", nur: "R", tag: "Mediation · AI check", titel: "Tell Mama and Finn about the festival", lead: "Write your part in German. <span class=\"de\">Sag es kurz und einfach. Der Satzanfang und die Tipps helfen dir.</span>",
        thema: "Sprachmittlung in der Familie (Englisch 7, Mittelschule): Das Kind fasst das englische Programm eines Musikfestivals in Oban für seine Mutter zusammen (Tag, Ort, Beginn, Eintritt, Hinweise) und sagt dem kleinen Bruder, was es für Tiere und Tanzen gibt",
        rollen: { a: { name: "Mama", ic: "👩" }, b: { name: "Finn", ic: "🧒" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Hast du das Plakat gelesen? Da steht etwas von einem Festival im Hafen. Sag mir bitte in drei oder vier Sätzen, worum es geht – wann es ist, wann es losgeht und was es kostet." },
          { an: "a", sprache: "de", auftrag: "Tell Mama in German: three or four sentences. <span class=\"de\">Sag Mama in drei bis vier Sätzen das Wichtigste: Tag und Ort, Beginn, Eintritt, ein Beispiel für die Musik. Lass Unwichtiges weg.</span>", start: "Am Samstag",
            kriterien: ["Tag und Ort: Samstag, am Hafen in Oban", "Beginn: ab 11 Uhr", "Eintritt: mindestens eine Preisangabe (z. B. du 6 Pfund, Mama 12 Pfund, Finn kostenlos)", "Musik oder Programm kurz genannt, ohne alle sechs Acts aufzuzählen", "lässt Unwichtiges weg (Fähre, T-Shirts, Helfer)"],
            m: "Am Samstag ist im Hafen von Oban ein Musikfestival. Es geht ab 11 Uhr los, und es gibt zwei Bühnen mit Bands und Sängern. Der Eintritt kostet für dich 12 Pfund, für mich 6 Pfund, und Finn muss nichts bezahlen. Wir sollen eine Regenjacke mitnehmen.", k: ["samstag", "hafen|oban", "11|elf", "pfund|kostenlos|eintritt|frei|kostet|zahlen"],
            tipps: ["Vier Dinge für Mama: <b>wann</b> (Tag) und <b>wo</b> – <b>ab wann</b> – <b>was es kostet</b> – <b>was für Musik</b>.", "Samstag = Saturday · Hafen = harbour · ab 11 Uhr = Gates open at 11 am · Eintritt = tickets", "Die letzte Fähre und die T-Shirts braucht deine Mutter nicht – lass sie weg."] },
          { von: "b", text: "Mama, ich will da hin! Gibt es da auch etwas für mich? Ich mag Tiere. Und ich tanze so gern!" },
          { an: "b", sprache: "de", auftrag: "Tell Finn in German: one or two sentences. <span class=\"de\">Sag Finn, was es für Tiere und für das Tanzen gibt. Nenne bei dem Tanzen auch, wann.</span>", start: "Ja, in der Kinderecke",
            kriterien: ["Tiere: Kinderecke mit einem kleinen Bauernhof (Kaninchen, Ziegen)", "Tanzen: Ceilidh-Tanzkurs für Anfänger", "nennt die Uhrzeit des Tanzkurses (14.30 Uhr, halb drei) oder sagt, dass er am Nachmittag ist"],
            m: "Ja, in der Kinderecke gibt es einen kleinen Bauernhof mit Kaninchen und Ziegen. Und um halb drei gibt es einen Tanzkurs für Anfänger – der ist sogar kostenlos!", k: ["kaninchen|ziegen|bauernhof|tiere|hasen", "tanz|ceilidh|taenz", "halb drei|14|2.30|2:30|nachmittag|uhr"],
            tipps: ["Zwei Wünsche von Finn: <b>Tiere</b> und <b>Tanzen</b>. Was steht dazu im Programm?", "Kinderecke = kids' corner · Kaninchen = rabbits · Ziegen = goats · Tanzkurs = dance class", "Tanzkurs für Anfänger = ceilidh dance class for beginners · 2.30 pm = 14.30 Uhr = halb drei"] },
          { von: "a", text: "Das klingt gut. Dann gehen wir hin. Danke, dass du uns hilfst!" }
        ] },
      { art: "kette", id: "mama", nur: "M", tag: "Mediation · AI check", titel: "Tell Mama and Finn about the festival", lead: "Write your part in German. <span class=\"de\">Wie in einem echten Gespräch: kurz, einfach und nur das Wichtige. Bei Bedarf hilft dir ein Tipp.</span>",
        thema: "Sprachmittlung in der Familie (Englisch 7, Mittelschule): Das Kind fasst das englische Programm eines Musikfestivals in Oban für seine Mutter zusammen (Tag, Ort, Beginn, Eintritt, Hinweise) und sagt dem kleinen Bruder, was es für Tiere und Tanzen gibt",
        rollen: { a: { name: "Mama", ic: "👩" }, b: { name: "Finn", ic: "🧒" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Hast du das Plakat gelesen? Da steht etwas von einem Festival im Hafen. Sag mir bitte in drei oder vier Sätzen, worum es geht – wann es ist, wann es losgeht und was es kostet." },
          { an: "a", sprache: "de", auftrag: "Tell Mama in German: three or four sentences. Only what she needs.",
            kriterien: ["Tag und Ort: Samstag, am Hafen in Oban", "Beginn: ab 11 Uhr", "Eintritt: mindestens eine Preisangabe (z. B. du 6 Pfund, Mama 12 Pfund, Finn kostenlos)", "Musik oder Programm kurz genannt, ohne alle sechs Acts aufzuzählen", "lässt Unwichtiges weg (Fähre, Shuttlebus, T-Shirts, Helfer)"],
            m: "Am Samstag ist im Hafen von Oban ein Musikfestival. Es geht ab 11 Uhr los, und es gibt zwei Bühnen mit Bands und Sängern. Der Eintritt kostet für dich 12 Pfund, für mich 6 Pfund, und Finn muss nichts bezahlen. Wir sollen eine Regenjacke mitnehmen.", k: ["samstag", "hafen|oban", "11|elf", "pfund|kostenlos|eintritt|frei|kostet|zahlen"],
            tipps: ["Vier Dinge für Mama: <b>wann</b> und <b>wo</b> – <b>ab wann</b> – <b>was es kostet</b> – <b>was für Musik</b>. Alles andere kannst du weglassen."] },
          { von: "b", text: "Mama, ich will da hin! Gibt es da auch etwas für mich? Ich mag Tiere. Und ich tanze so gern!" },
          { an: "b", sprache: "de", auftrag: "Tell Finn in German: one or two sentences.",
            kriterien: ["Tiere: Kinderecke mit einem kleinen Bauernhof (Kaninchen, Ziegen, Pony)", "Tanzen: Ceilidh-Tanzkurs für Anfänger", "nennt die Uhrzeit des Tanzkurses (14.30 Uhr, halb drei) oder sagt, dass er am Nachmittag ist"],
            m: "Ja, in der Kinderecke gibt es einen kleinen Bauernhof mit Kaninchen, Ziegen und einem Pony. Und um halb drei gibt es einen Tanzkurs für Anfänger – der ist sogar kostenlos!", k: ["kaninchen|ziegen|bauernhof|tiere|hasen|pony", "tanz|ceilidh|taenz", "halb drei|14|2.30|2:30|nachmittag|uhr"],
            tipps: ["Zwei Wünsche von Finn: <b>Tiere</b> und <b>Tanzen</b>. Was steht dazu im Programm – und wann ist der Tanzkurs?"] },
          { von: "a", text: "Das klingt gut. Dann gehen wir hin. Danke, dass du uns hilfst!" }
        ] }
    ] },
    { kurz: "Your turn", ober: "Station 4", titel: "Which act? Have you ever …?", teile: [
      { art: "text", html: "<p class=\"lead\">Now you talk about <b>yourself</b>. <span class=\"de\">Jetzt sprichst du über dich: Welchen Act würdest du sehen – und warst du schon einmal auf einem Konzert oder Festival? Das übst du auf Englisch.</span></p>" },
      { art: "merke", kopf: "HAVE YOU EVER …?", html: "<p><b>Have/has + 3. Form</b> – du fragst nach einer Erfahrung im Leben:</p><div class=\"phrasen\"><span>Have you ever been to a concert?</span><span>Yes, I have. / No, I haven't.</span><span>I have never been to a festival.</span></div><p><b>Say what you like and why:</b></p><div class=\"phrasen\"><span>I would like to see … because …</span><span>I love … music.</span><span>It sounds great / funny / loud.</span></div>" },
      { art: "mc", id: "pp-mc", tag: "Language", titel: "Have you ever …?", lead: "Tick the correct answer. <span class=\"de\">Present perfect: Fragen und Kurzantworten.</span>",
        fragen: [
          { q: "Which question is correct?", o: ["Have you ever seen fireworks?", "Did you ever seen fireworks?", "Are you ever seen fireworks?", "Have you ever saw fireworks?"], a: 0,
            e: "Have + you + ever + 3. Form von see: seen. Die 2. Form (saw) steht nicht nach have." },
          { q: "A girl at the festival asks: \"Have you ever danced at a ceilidh?\" You haven't. What do you say?", o: ["No, I haven't.", "No, I don't.", "No, I didn't have.", "No, I'm not."], a: 0,
            e: "Auf eine Frage mit Have antwortest du mit have: Yes, I have. / No, I haven't." }
        ] },
      { art: "offen", id: "act", nur: "R", tag: "Speaking", titel: "Which act would you like to see?", lead: "Write one or two sentences. <span class=\"de\">Schreibe wie beim Sprechen: Welchen Act würdest du gern sehen – und warum?</span>",
        fragen: [{ q: "Which act would you like to see? Why?", m: "I would like to see The Highland Hoppers because I love dancing and ceilidh music is fun.", k: ["would like|'d like|want|love|like", "because|as |so |it is|it's|they are|they're|their"], min: 2 }],
        tipp: "Start like this: I would like to see … because … · I love … music. · The band sounds funny / great / loud." },
      { art: "offen", id: "act", nur: "M", tag: "Speaking", titel: "Which act would you like to see?", lead: "Write one or two sentences. <span class=\"de\">Schreibe wie beim Sprechen. Nenne einen Act und einen Grund.</span>",
        fragen: [{ q: "Which act would you like to see? Why?", m: "I would like to see The Highland Hoppers because I love dancing and ceilidh music is fun.", k: ["would like|'d like|want|love|like", "because|as |so |it is|it's|they are|they're|their"], min: 2 }],
        tipp: "Say which act and give a reason with because." },
      { art: "offen", id: "erfahrung", nur: "R", tag: "Speaking", titel: "Have you ever been to a concert or a festival?", lead: "Answer in English. <span class=\"de\">Antworte auf Englisch: Warst du schon einmal auf einem Konzert oder Festival? Ein bis zwei Sätze.</span>",
        fragen: [{ q: "Have you ever been to a concert or a festival? Tell us.", m: "Yes, I have. I have been to a concert with my family. It was loud, but I liked it.", k: ["have|'ve|haven't|never|ever", "been|seen|gone|heard|visited|danced|concert|festival"], min: 2 }],
        tipp: "Yes, I have. I have been to … · No, I haven't. I have never been to … · It was great / loud / boring." },
      { art: "offen", id: "erfahrung", nur: "M", tag: "Speaking", titel: "Have you ever been to a concert or a festival?", lead: "Answer in English. <span class=\"de\">Antworte mit Kurzantwort und einem Satz mehr. Nutze das present perfect.</span>",
        fragen: [{ q: "Have you ever been to a concert or a festival? Tell us.", m: "Yes, I have. I have been to a concert with my family. It was loud, but I liked it.", k: ["have|'ve|haven't|never|ever", "been|seen|gone|heard|visited|danced|concert|festival"], min: 2 }],
        tipp: "Start with a short answer: Yes, I have. / No, I haven't. Then say one more thing." }
    ] },
    { kurz: "Plus", ober: "Station 5 · Plus", titel: "At the information stand", teile: [
      { art: "text", html: "<p class=\"lead\">At the gate there is an <b>information stand</b>. Your mum has questions, but she can't ask in English. <b>This time you speak English for her.</b> <span class=\"de\">Plus-Aufgabe (für M7 Pflicht, für R7 freiwillig): Jetzt ist es umgekehrt. Deine Mutter sagt etwas auf Deutsch, und du fragst am Infostand auf Englisch nach. Zum Schluss sagst du ihr auf Deutsch, was du erfahren hast.</span></p>" },
      { art: "kette", id: "infostand", nur: "R", m7: true, tag: "Plus · AI check", titel: "Ask at the information stand", lead: "Write your part. <span class=\"de\">Die Satzanfänge und Tipps helfen dir.</span>",
        thema: "Sprachmittlung am Infostand eines Festivals in Oban (Englisch 7, Mittelschule): Das Kind fragt für seine Mutter nach dem Eintritt für die Familie und nach der Kinderecke und gibt die Antwort auf Deutsch weiter",
        rollen: { a: { name: "Mama", ic: "👩" }, b: { name: "Assistant", ic: "ℹ️" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Frag bitte die Frau am Infostand, wie viel der Eintritt für uns drei kostet. Du bist dreizehn, Finn ist acht." },
          { an: "b", sprache: "en", auftrag: "Ask the assistant. <span class=\"de\">Ihr seid zu dritt: Mama, Finn (8) und du (13). Frag nach dem Preis.</span>", start: "Hello! How much",
            kriterien: ["fragt nach dem Preis der Eintrittskarten", "sagt, dass sie zu dritt sind (Mutter, Bruder, du)", "nennt die Alter (8 und 13)"],
            m: "Hello! How much are the tickets for three people, please? My mum, my little brother (he is eight) and me (I am thirteen).", k: ["how much|price|cost", "three|3|mum|mother", "eight|8|thirteen|13"],
            tipps: ["Drei Angaben: <b>Preis</b> – <b>wie viele</b> Personen – <b>wie alt</b> ihr seid.", "Wie viel kostet …? = How much is/are …? · zu dritt = for three people · acht = eight · dreizehn = thirteen"] },
          { von: "b", text: "Hello! Adults pay twelve pounds. Young people from twelve to sixteen pay six pounds. Children under twelve are free. So that is eighteen pounds for your family." },
          { an: "a", sprache: "de", auftrag: "Tell Mama in German what you have to pay. <span class=\"de\">Sag, wer wie viel zahlt – und wie viel es zusammen ist.</span>", start: "Du zahlst",
            kriterien: ["Mama zahlt 12 Pfund, du 6 Pfund, Finn nichts", "zusammen 18 Pfund"],
            m: "Du zahlst 12 Pfund, ich 6 Pfund und Finn nichts. Das sind zusammen 18 Pfund.", k: ["12|zwoelf", "6|sechs", "18|achtzehn"],
            tipps: ["Drei Personen: <b>Mama</b>, <b>du</b>, <b>Finn</b>. Wer zahlt was? Dann der Preis zusammen.", "twelve = 12 · six = 6 · eighteen = 18 · free = kostenlos"] },
          { von: "a", text: "Gut, dass Finn nichts zahlt. Frag bitte noch, wo die Kinderecke ist und bis wann sie geöffnet hat." },
          { an: "b", sprache: "en", auftrag: "Ask the assistant. <span class=\"de\">Zwei Fragen: Wo ist die Kinderecke? Bis wann ist sie offen?</span>", start: "Where is",
            kriterien: ["fragt, wo die Kinderecke (kids' corner) ist", "fragt, bis wann sie geöffnet ist"],
            m: "Where is the kids' corner, please? And how long is it open?", k: ["where", "open|until|till|how long|close"],
            tipps: ["Zwei Fragen: <b>wo</b> – <b>bis wann</b>.", "Wo ist …? = Where is …? · Bis wann ist es offen? = How long is it open? / Until when is it open?"] },
          { von: "b", text: "The kids' corner is next to the Market Tent. It is open until five pm. Enjoy the festival!" }
        ] },
      { art: "kette", id: "infostand", nur: "M", m7: true, tag: "Plus · AI check", titel: "Ask at the information stand", lead: "Write your part. <span class=\"de\">Du sprichst für deine Mutter – ohne Satzanfang, bei Bedarf mit einem Tipp.</span>",
        thema: "Sprachmittlung am Infostand eines Festivals in Oban (Englisch 7, Mittelschule): Das Kind fragt für seine Mutter nach dem Eintritt für die Familie und nach der Kinderecke und gibt die Antwort auf Deutsch weiter",
        rollen: { a: { name: "Mama", ic: "👩" }, b: { name: "Assistant", ic: "ℹ️" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Frag bitte die Frau am Infostand, wie viel der Eintritt für uns drei kostet. Du bist dreizehn, Finn ist acht." },
          { an: "b", sprache: "en", auftrag: "Ask the assistant about the tickets for your family.",
            kriterien: ["fragt nach dem Preis der Eintrittskarten", "sagt, dass sie zu dritt sind (Mutter, Bruder, du)", "nennt die Alter (8 und 13)"],
            m: "Hello! How much are the tickets for three people, please? My mum, my little brother (he is eight) and me (I am thirteen).", k: ["how much|price|cost", "three|3|mum|mother", "eight|8|thirteen|13"],
            tipps: ["Drei Angaben: <b>Preis</b> – <b>wie viele</b> Personen – <b>wie alt</b> ihr seid."] },
          { von: "b", text: "Hello! Adults pay twelve pounds. Young people from twelve to sixteen pay six pounds. Children under twelve are free. So that is eighteen pounds for your family." },
          { an: "a", sprache: "de", auftrag: "Tell Mama in German what you have to pay.",
            kriterien: ["Mama zahlt 12 Pfund, du 6 Pfund, Finn nichts", "zusammen 18 Pfund"],
            m: "Du zahlst 12 Pfund, ich 6 Pfund und Finn nichts. Das sind zusammen 18 Pfund.", k: ["12|zwoelf", "6|sechs", "18|achtzehn"],
            tipps: ["Drei Personen: <b>Mama</b>, <b>du</b>, <b>Finn</b>. Wer zahlt was – und wie viel zusammen?"] },
          { von: "a", text: "Gut, dass Finn nichts zahlt. Frag bitte noch, wo die Kinderecke ist und bis wann sie geöffnet hat." },
          { an: "b", sprache: "en", auftrag: "Ask the assistant about the kids' corner.",
            kriterien: ["fragt, wo die Kinderecke (kids' corner) ist", "fragt, bis wann sie geöffnet ist"],
            m: "Where is the kids' corner, please? And how long is it open?", k: ["where", "open|until|till|how long|close"],
            tipps: ["Zwei Fragen: <b>wo</b> – <b>bis wann</b>."] },
          { von: "b", text: "The kids' corner is next to the Market Tent. It is open until five pm. Enjoy the festival!" }
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "regeln", tag: "True or false?", titel: "How do you help?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In a mediation you translate every word of the text.", false],
          ["Before you start, you think about who you help.", true],
          ["Prices and times must be right.", true],
          ["Unimportant details belong in your summary, too.", false],
          ["You can say it in short, simple sentences.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You can read a programme, choose what matters, leave out the rest and say it simply in German for the right person – and you can even ask questions in English for your family." }
});
