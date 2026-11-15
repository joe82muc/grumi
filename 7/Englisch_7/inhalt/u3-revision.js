/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Revision: A day at the adventure park (Kürzel C19)
   (Wiederholung der Units 1–3 an einem Tag im „Oakridge Adventure Park“: einen Parkplan in Worten lesen, einer Wegbeschreibung
   zuhören und dem Weg folgen, selbst den Weg beschreiben, am Imbiss bestellen, rechnen und bezahlen, die Grammatik der Units –
   simple past, present perfect, going to, Ort vor Zeit, some/any – in kleinen Aufgaben wiederholen und am Schluss eine Postkarte
   über den Tag schreiben)
   Buchprinzip (BUCH-UNIT3, Revision, nur Aufbau, nichts übernommen): einen Parkplan ansehen und einer Wegbeschreibung zuhören,
   um mitzuverfolgen, wohin die Personen wollen · Kasten mit Wendungen für Wegbeschreibungen · selbst einen Weg beschreiben ·
   am Imbiss zuhören, was bestellt wird, und Höflichkeitsformeln ergänzen · zum Schluss ein Bestell-Gespräch nach Regieanweisungen
   in der Muttersprache spielen (fragen, was der Freund möchte, bestellen, den Preis hören, Geld und Wechselgeld, verabschieden).
   Besser: sofortige Rückmeldung, Hilfen in Stufen (R7 mit Satzanfängen und Tipps, M7 weniger), Förder-Links an den Stellen, an
   denen Kinder hängen bleiben, das Bestell-Gespräch als Sprechblasen-Kette, in der die KI jeden Beitrag prüft, kleine
   Wiederholungsaufgaben zur Grammatik und eine Postkarte mit KI-Rückmeldung.
   Differenzierung: Lesen und Hören – R7 und M7 haben eigene Fassungen derselben Situation (Plan R7 165 / M7 265 Wörter, Hörtext
   R7 137 / M7 226 Wörter) mit eigenen Zeilenangaben; M7 hört außerdem, dass der Wasserspielplatz geschlossen ist, und folgt einem
   längeren Weg; Rechnen – R7 einfacher, M7 mit drei Posten und größerem Schein; Bestell-Gespräch – R7 mit Satzanfängen und Tipps in
   zwei Stufen, M7 ohne Satzanfänge; Postkarte – R7 mindestens 40 Wörter mit Satzanfängen, M7 mindestens 60; Plus für M7 (m7): einen
   Weg vom Bauernhof zum Irrgarten beschreiben, einen Satz mit Ort vor Zeit schreiben (für R7 freiwillig).
   LehrplanPLUS E7 1.1 Leseverstehen (Parkplan, Einzelheiten und Textstellen), E7 1.2 Hörverstehen (Wegbeschreibung), E7 1.3 Sprechen
   (nach dem Weg fragen, bestellen, bezahlen), E7 2 Schreiben (Postkarte), E7 3 Grammatik (simple past, present perfect,
   going to, Ort vor Zeit, some/any/no), E7 4 Wortschatz (Orts- und Richtungsangaben, Essen und Trinken, Geld), E7 5 Alltag.
   Texte: „Oakridge Adventure Park – the plan in words“ (texte/u3/u3-rev-plan-r.js und -m.js) und „Which way to the Water
   Playground?“ (texte/u3/u3-rev-way-r.js und -m.js) – Nessa und Una (Mitarbeiterin des Parks). Der Park, die Wege, das Café
   „The Hungry Fox“, Oisin und Colm sind erfunden. Preise in Euro (Irland).
   Förder-Links: Weg hören und beschreiben → u3_x6.html (Wege-Wörter, einem Weg folgen, Weg ergänzen; transport.html übt
   Bus- und Bahnlinien und passt nicht zum Fußweg im Park), simple past oder present perfect → unit2/extra/signal-words.html,
   going to → unit2/extra/going-to.html, Ort vor Zeit → unit3/extra/word-order.html, some/any/no → unit3/extra/some-any.html.
   Wörter der Units bis hierher (across, opposite, next to, in front of, on the left/right, to take, near, path, to cost, each,
   to leave, ever, already, yet, until, before, after, at, on …) kommen bewusst vor.
   BILDER:
   1. Station „Warm-up“ (Vorentlastung, Sprechanlass): Ein Parkeingang mit Holztor und großem Schild, dahinter ein breiter Weg mit
      Eichen; links ein Kletterwald mit Seilbrücken, rechts eine Picknickwiese; ein Mädchen und ein kleiner Junge schauen auf einen
      Plan. Keine lesbare Schrift.
   2. Station „Plan“ (Parkplan): Der Plan von oben, gezeichnet wie eine Schatzkarte – Eingang mit rotem X unten, Hauptweg nach oben,
      zwei Seitenwege (rechts zuerst Maple Path, etwas weiter oben links Willow Path), ein kleiner Bach mit Brücke, Irrgarten, Bauernhof, Wasserspielplatz, Café mit Fuchsschild.
   3. Station „Snack bar“ (Sprechanlass): Ein Imbiss mit Holztresen und Tafelkarte, hinter dem Tresen ein junger Mann mit Schürze,
      davor zwei Jugendliche; auf dem Tresen ein Teller Pommes und zwei Becher. Keine lesbare Schrift. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag
  const D = s => ` <span class="de">${s}</span>`;
  const WEG = { href: "u3_x6.html", text: "Extra: Hören – einem Weg folgen" };
  const SIGNAL = { href: "unit2/extra/signal-words.html", text: "Extra: present perfect oder simple past?" };
  const GOING = { href: "unit2/extra/going-to.html", text: "Extra: going to" };
  const WORDORDER = { href: "unit3/extra/word-order.html", text: "Extra: Ort vor Zeit" };
  const SOMEANY = { href: "unit3/extra/some-any.html", text: "Extra: some oder any?" };

  // Bestell-Gespräch: R7 mit Satzanfängen und Tipps in zwei Stufen, M7 ohne Satzanfänge und mit einem Tipp
  const KETTE = (nur, r) => OHNE({
    art: "kette", id: "bestellen", nur, tag: "Role play · AI check", titel: "At The Hungry Fox",
    lead: "You are at the snack bar with your Irish friend Oisin. Write your parts in English." + (r ? D("Du schreibst auf Englisch. Die Anweisungen sind auf Deutsch. Der Satzanfang und die Tipps helfen dir.") : D("Du schreibst auf Englisch, die Anweisungen sind auf Deutsch.")),
    thema: "Bestellen am Imbiss (Englisch 7, Mittelschule): Das Kind fragt seinen irischen Freund, was er essen und trinken möchte, bestellt für beide beim Kellner Colm, bezahlt mit einem Schein, fragt nach den Toiletten und schlägt dem Freund etwas für nach dem Essen vor",
    rollen: { a: { name: "Oisin", ic: "🧒" }, b: { name: "Colm", ic: "🧑‍🍳" }, du: { name: "You" } },
    schritte: [
      { an: "a", sprache: "en", auftrag: "Du stehst mit deinem irischen Freund Oisin vor dem Café. Frage ihn, was er essen und was er trinken möchte.", start: r ? "What would you like" : undefined,
        kriterien: ["fragt Oisin, was er essen möchte", "fragt Oisin, was er trinken möchte"],
        m: "What would you like to eat and what would you like to drink?", k: ["what|which|do you want|would you like", "eat|food|have|hungry", "drink|juice|chocolate|water"],
        tipps: r ? ["Zwei Dinge: <b>essen</b> und <b>trinken</b>.", "What would you like to eat? · What would you like to drink?"] : ["Zwei Dinge: <b>essen</b> und <b>trinken</b>."] },
      { von: "a", text: "Hmm, let me look at the menu. I'd like the chicken burger and a hot chocolate, please. What about you?" },
      { an: "b", sprache: "en", auftrag: "Ihr geht zum Tresen. Begrüße Colm und bestelle für euch beide: für Oisin den Hühnchen-Burger und die heiße Schokolade, für dich den Veggie-Wrap und den Apfelsaft.", start: r ? "Hello. Can I have" : undefined,
        kriterien: ["begrüßt Colm", "bestellt für Oisin den Burger und die heiße Schokolade", "bestellt für sich den Wrap und den Apfelsaft"],
        m: "Hello! Can I have a chicken burger and a hot chocolate, please? And a veggie wrap and an apple juice for me.", k: ["hello|hi|good morning|good afternoon|excuse me", "burger|chicken", "chocolate", "wrap|veggie", "juice"],
        tipps: r ? ["Vier Dinge bestellen: <b>burger, hot chocolate, veggie wrap, apple juice</b>. Vergiss die Begrüßung nicht.", "Can I have …, please? · I'd like … · … for me"] : ["Vier Dinge bestellen. Vergiss die Begrüßung nicht."] },
      { von: "b", text: "Of course. That's one chicken burger, one hot chocolate, one veggie wrap and one apple juice. Altogether that's fifteen euros. Is that to eat in or to take away?" },
      { an: "b", sprache: "en", auftrag: "Sage, dass ihr hier esst, und gib Colm einen Zwanzig-Euro-Schein.", start: r ? "We'd like to" : undefined,
        kriterien: ["sagt, dass ihr hier esst (eat in)", "gibt Colm einen Zwanzig-Euro-Schein, bezahlt"],
        m: "We'd like to eat in, please. Here is a twenty-euro note.", k: ["eat in|eat here|sit|stay|have it here|here", "twenty|20|note|pay|here you are|here is|here's"],
        tipps: r ? ["Zwei Dinge: <b>hier essen</b> und <b>bezahlen</b>.", "eat in = hier essen · Here you are. · a twenty-euro note"] : ["Zwei Dinge: <b>hier essen</b> und <b>bezahlen</b>."] },
      { von: "b", text: "Thank you. Here is your change: five euros. Please take a seat. I'll bring the food to your table." },
      { an: "b", sprache: "en", auftrag: "Bedanke dich und frage Colm, wo die Toiletten sind.", start: r ? "Thank you. Excuse me," : undefined,
        kriterien: ["bedankt sich", "fragt, wo die Toiletten sind"],
        m: "Thank you. Excuse me, where are the toilets, please?", k: ["thank|thanks|cheers", "where", "toilet|loo|bathroom|restroom|ladies|gents"],
        tipps: r ? ["Zwei Dinge: <b>danken</b> und <b>nach dem Weg fragen</b>.", "Excuse me, where are …? · the toilets"] : ["Zwei Dinge: <b>danken</b> und <b>nach dem Weg fragen</b>."] },
      { von: "b", text: "The toilets are next to the café. You can't miss them." },
      { an: "a", sprache: "en", auftrag: "Du gehst zurück zu Oisin. Sage ihm, dass das Essen bald kommt, und schlage vor, nach dem Essen zum Bauernhof zu gehen.", start: r ? "Our food is" : undefined,
        kriterien: ["sagt, dass das Essen bald kommt", "schlägt vor, nach dem Essen zum Bauernhof zu gehen"],
        m: "Our food is coming soon. After lunch, let's go to the farm.", k: ["food|lunch|burger|order|coming|ready|soon", "after|later|then", "farm|animals"],
        tipps: r ? ["Zwei Dinge: <b>das Essen kommt bald</b> und <b>ein Vorschlag für danach</b>.", "coming soon · After lunch, let's … / How about …?"] : ["Zwei Dinge: <b>das Essen kommt bald</b> und <b>ein Vorschlag für danach</b>."] },
      { von: "a", text: "Good idea! I love animals. Let's go to the farm after lunch." }
    ]
  });
  // bei M7 keine Satzanfänge: leere Schlüssel entfernen
  const OHNE = k => { k.schritte.forEach(st => { if (st.start === undefined) delete st.start; }); return k; };

  // Postkarte: R7 40 Wörter mit Satzanfängen, M7 60 Wörter
  const POSTKARTE = (nur, min) => ({
    art: "schreiben", id: "postkarte", nur, tag: "Your task", titel: "A postcard from the park", min,
    auftrag: `<p><b>Write a postcard</b> to a friend or a cousin about your day at Oakridge Adventure Park (${min} words or more).${nur === "R" ? D(`Schreibe mindestens ${min} Wörter.`) : ""}</p><p>Your postcard has these parts:</p><ul><li>Dear …, + where you are</li><li>two things you did (the Maze, the Farm …) – say <b>where</b> and <b>when</b></li><li>what you ate or drank at The Hungry Fox (use <b>some, any, no</b> or <b>something</b>)</li><li>one thing you <b>have</b> or <b>haven't</b> done <b>yet</b></li><li>what you <b>are going to</b> do tomorrow, and a friendly ending</li></ul>`,
    starter: ["Dear …,", "I am at Oakridge Adventure Park.", "This morning we went to …", "We had lunch at The Hungry Fox at …", "We haven't … yet.", "Tomorrow we are going to …", "See you soon! / Love, …"],
    kriterien: ["Du beginnst mit einer Anrede und sagst, wo du bist.", "Du nennst zwei Dinge, die du getan hast, im simple past (went, saw, had …), mit Ort und Zeit.", "Du schreibst, was du am Imbiss gegessen oder getrunken hast, und benutzt some, any, no oder something.", "Du nennst mit dem present perfect etwas, das du schon oder noch nicht getan hast (have … / haven't … yet).", "Du sagst mit going to, was du morgen vorhast, und schließt freundlich ab."]
  });

  D7Kit.seite({
    id: "u3-revision",
    titel: "Revision · A day at the adventure park",
    einleitung: "Today you spend a day at <b>Oakridge Adventure Park</b>: you read the park plan, listen to the way, describe a way yourself, order lunch at a snack bar and pay. On the way you revise the grammar of Units 1 to 3 – <b>simple past, present perfect, going to, place before time, some and any</b> – and at the end you write a postcard. Du wiederholst viel aus den Units 1 bis 3 und siehst gleich, was schon sitzt.",
    zeit: "etwa 45 Minuten",
    ziele: ["🗺️ I read a park plan and find the places.", "🎧 I follow a description of the way.", "🧭 I describe the way to a place.", "🍔 I order food and drinks and pay.", "✉️ I write a postcard about my day."],
    thema: "Unit 3 Welcome to Ireland, Revision: Wegbeschreibung im Park, Bestellen am Imbiss, Wiederholung der Grammatik der Units 1–3",
    quiz: { profi: "Park pro" },
    glossar: {
      maze: ["maze", "Ein maze ist ein Irrgarten. Er hat viele Wege mit Hecken oder Wänden, und man muss den Weg nach draußen finden."],
      climbing: ["climbing forest", "Ein climbing forest ist ein Kletterwald. Dort klettert man auf Brücken und Seilen zwischen den Bäumen."],
      entry: ["last entry", "Last entry ist der letzte Einlass. Danach kommt niemand mehr hinein."],
      altogether: ["altogether", "Altogether heißt insgesamt: Das ist der ganze Preis für alles zusammen."],
      change: ["change", "Change ist hier das Wechselgeld. Das ist das Geld, das man zurückbekommt, wenn man mit einem großen Schein bezahlt."]
    },
    stationen: [
      { kurz: "Warm-up", ober: "Before you start", titel: "A day at the park", teile: [
        { art: "text", html: "<figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-rev-eingang.jpg\" width=\"1280\" height=\"853\" alt=\"The wooden gate of an adventure park, a path with oak trees, a climbing forest on the left, a picnic meadow on the right; a girl and her little brother look at a map board.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p><span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p>" },
        { art: "text", html: `<p class="lead">Today you are at <b>Oakridge Adventure Park</b>. There is a <button class="term" data-t="climbing">climbing forest</button>, a <button class="term" data-t="maze">maze</button>, a farm with animals, a water playground and a café called <b>The Hungry Fox</b>. <span class="de">Der Park und alles darin sind erfunden.</span></p><p>What would you do first? Why? <span class="de">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: `Find the pairs. <span class="de">Diese Wörter brauchst du heute.</span>`,
          paare: [["climbing forest", "Kletterwald"], ["maze", "Irrgarten"], ["water playground", "Wasserspielplatz"], ["farm", "Bauernhof"], ["change (money)", "Wechselgeld"], ["altogether", "insgesamt"]] },
        { art: "merke", kopf: "SAY THE WAY", html: `<p>You know these phrases from Topic 1. You need them in the park:</p><ul><li><b>Go straight</b> along … / <b>Walk straight on</b> to …</li><li><b>Take</b> the <b>first / second</b> path <b>on the left / on the right</b>.</li><li><b>Turn left / right</b> at …</li><li>Go <b>across</b> the bridge.</li><li>It is <b>next to</b> … · <b>opposite</b> … · <b>in front of</b> … · <b>at the end of</b> …</li></ul>` }
      ] },
      { kurz: "Plan", ober: "Plan and way", titel: "Where is what?", teile: [
        { art: "text", html: `<p class="lead">At the Entrance there is a plan of the park. We have written it in words. Read it once. <span class="de">Lies den Plan in Worten einmal ganz. Stell dir dabei den Park von oben vor: Der Eingang ist unten, der Hauptweg führt nach oben.</span></p>` },
        { art: "lesetext", lesetext: { R: "u3-rev-plan-r", M: "u3-rev-plan-m" } },
        { art: "text", html: `<p class="lead">Now find the information. Tap the lines in the text. <span class="de">Tippe die Zeilen an, in denen die Antwort steht. Der Plan bleibt über den Fragen stehen.</span></p>` },
        { art: "beleg", id: "plan-zeilen", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lesetext: "u3-rev-plan-r",
          lead: `Tap the lines with the answer. <span class="de">Dann kannst du die Stelle auch angeben, zum Beispiel so: (ll. 3–4).</span>`,
          hilfen: ["Lies die Frage und suche das passende Wort im Plan: Maze.", "Die Antwort steht in einem kurzen Absatz, der den Namen des Ortes enthält.", "Zeile für Zeile: Um welchen Ort geht es? Passt die Angabe zur Frage?"],
          fragen: [
            { q: "Where is the Maze?", zeilen: [12, 13], e: "Der Irrgarten liegt am Ende des Willow Path.", tipp: "Suche das Wort Maze." }
          ] },
        { art: "beleg", id: "plan-zeilen", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lesetext: "u3-rev-plan-m",
          lead: `Tap the lines with the answer. <span class="de">Dann kannst du die Stelle auch angeben, zum Beispiel so: (ll. 3–4).</span>`,
          fragen: [
            { q: "When is the last entry to the Farm?", zeilen: [15, 16], e: "Der letzte Einlass zum Bauernhof ist um halb vier.", tipp: "Suche die Zeile mit last entry." }
          ] },
        { art: "text", html: `<p class="lead">Nessa and her little brother are at the Entrance. They ask a member of staff for the way. <b>Read the questions first, then listen.</b> <span class="de">Erst die Fragen lesen, dann hören. Verfolge den Weg auf dem Plan mit dem Finger.</span></p>` },
        { art: "hoertext", id: "weg-hoer", tag: "🎧 Listening", hoertext: { R: "u3-rev-way-r", M: "u3-rev-way-m" }, foerder: WEG,
          fragen: [
            { art: "ordnen", id: "weg-reihe", nur: "R", tag: "Order", titel: "Follow Nessa's way", lead: `Put the steps in the order you hear them. <span class="de">Bring den Weg zum Wasserspielplatz in die richtige Reihenfolge.</span>`,
              schritte: ["Nessa goes straight along Oak Avenue.", "She walks past the Climbing Forest.", "She takes the first path on the right.", "She walks along Maple Path.", "She stops at the Water Playground, before the Little Bridge."],
              hilfen: ["Zuerst geht Nessa geradeaus auf dem Hauptweg.", "Den Wasserspielplatz erreicht sie ganz zum Schluss."] },
            { art: "ordnen", id: "weg-reihe", nur: "M", tag: "Order", titel: "Follow Nessa's way", lead: `Put the steps in the order you hear them.`,
              schritte: ["Nessa goes straight along Oak Avenue.", "She takes the first path on the right.", "She walks to the end of Maple Path.", "She goes across the Little Bridge.", "She arrives at the Farm.", "She walks back to Oak Avenue and on to Fox Square."],
              hilfen: ["The Farm comes before the café."] },
            { art: "mc", id: "weg-mc", nur: "R", tag: "Find the place", titel: "Where to?", lead: `Tick the correct answers. <span class="de">Wohin will Nessa, und wo gibt es Mittagessen?</span>`,
              fragen: [
                { q: "Where does Nessa want to go first?", o: ["To the Water Playground.", "To the Maze.", "To the Farm.", "To the Climbing Forest."], a: 0,
                  e: "Nessa fragt gleich am Anfang nach dem Weg zum Water Playground." },
                { q: "Where can Nessa have lunch?", o: ["At The Hungry Fox on Fox Square.", "At the Climbing Forest.", "At the Farm.", "At the Water Playground."], a: 0,
                  e: "Una schickt sie zum Café The Hungry Fox am Ende der Oak Avenue." }
              ] },
            { art: "mc", id: "weg-mc", nur: "M", tag: "Find the place", titel: "Where to?", lead: `Tick the correct answers.`,
              fragen: [
                { q: "Why can't Nessa go to the Water Playground first?", o: ["It is closed until two o'clock.", "It is too far away.", "It is only for adults.", "It is too cold today."], a: 0,
                  e: "Das Becken wird gereinigt; der Wasserspielplatz ist bis zwei Uhr zu." },
                { q: "How does Nessa get from the Farm to the café?", o: ["Back along Maple Path to Oak Avenue, turn right and walk straight on.", "Back along Maple Path to Oak Avenue, turn left and walk straight on.", "Straight on across the stream.", "Take Willow Path and turn right."], a: 0,
                  e: "Auf dem Rückweg geht sie nach Westen; Fox Square liegt dann rechts, am Ende der Oak Avenue." }
              ] }
          ] }
      ] },
      { kurz: "Snack bar", ober: "At The Hungry Fox", titel: "Order, pay, get your change", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>at the snack bar</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-rev-imbiss.jpg\" width=\"1280\" height=\"853\" alt=\"A young man with an apron behind the wooden counter of a snack bar; two teenagers in front; chips and two cups on the counter.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What can you buy here? What would you order? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Lunchtime! The café <b>The Hungry Fox</b> has a small menu. Look at the prices – in Ireland people pay in <b>euros</b>. <span class="de">In Irland zahlt man mit Euro. Die Speisekarte ist erfunden.</span></p>` },
        { art: "material", daten: { typ: "tabelle", titel: "The Hungry Fox – menu", kopf: ["Food and drinks", "Price"], reihen: [["chicken burger", "€6.00"], ["veggie wrap", "€4.50"], ["soup of the day", "€3.50"], ["chips", "€2.50"], ["ice cream (two scoops)", "€3.00"], ["hot chocolate", "€2.50"], ["apple juice", "€2.00"], ["water", "€1.50"]] } },
        { art: "merke", kopf: "AT THE SNACK BAR", html: `<p>These phrases are polite and useful:</p><ul><li><b>Can I have</b> a … <b>, please?</b> · <b>I'd like</b> a … / <b>We'd like</b> two …</li><li><b>Anything else?</b> – <b>No, thank you.</b> / <b>That's all.</b></li><li><b>Eat in or take away?</b></li><li><b>That's</b> … euros <b>altogether</b>. – <b>Here you are.</b></li><li><b>Here's your <button class="term" data-t="change">change</button>.</b> – <b>Thank you!</b></li></ul>` },
        { art: "mc", id: "rechnen", nur: "R", tag: "Maths", titel: "How much is it?", lead: `Look at the menu and tick the answers. <span class="de">Rechne mit den Preisen auf der Karte.</span>`,
          hilfen: ["Schau auf der Karte nach, was ein Becher kostet.", "Rechne Schritt für Schritt: erst der Preis, dann das Wechselgeld.", "Wechselgeld = Schein minus Preis."],
          fragen: [
            { q: "Two hot chocolates cost …", o: ["five euros.", "four euros.", "six euros.", "two euros fifty."], a: 0,
              e: "Eine heiße Schokolade kostet zwei Euro fünfzig, zwei kosten fünf Euro." },
            { q: "You pay for a veggie wrap with a ten-euro note. Your change is …", o: ["five euros fifty.", "four euros fifty.", "five euros.", "six euros."], a: 0,
              e: "Der Wrap kostet vier Euro fünfzig. Zehn Euro minus vier Euro fünfzig sind fünf Euro fünfzig." }
          ] },
        { art: "mc", id: "rechnen", nur: "M", tag: "Maths", titel: "How much is it?", lead: `Look at the menu and tick the answers.`,
          hilfen: ["Add the prices first. Then take the total from the note."],
          fragen: [
            { q: "Soup, chips and an apple juice cost …", o: ["eight euros altogether.", "seven euros fifty altogether.", "nine euros altogether.", "ten euros altogether."], a: 0,
              e: "Drei fünfzig plus zwei fünfzig plus zwei Euro sind acht Euro." },
            { q: "You pay for a chicken burger and an ice cream with a twenty-euro note. Your change is …", o: ["eleven euros.", "twelve euros.", "ten euros.", "nine euros."], a: 0,
              e: "Burger und Eis kosten zusammen neun Euro. Zwanzig minus neun sind elf Euro." }
          ] },
        { art: "text", html: `<p class="lead">Now <b>you</b> are at the snack bar. You are with your Irish friend <b>Oisin</b>. <span class="de">Die Anweisungen sind auf Deutsch. Du schreibst auf Englisch. Die KI prüft jeden Beitrag. Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist. Oisin und Colm sind erfunden.</span></p>` },
        KETTE("R", true),
        KETTE("M", false)
      ] },
      { kurz: "Language", ober: "Revision", titel: "Grammar of Units 1 to 3", teile: [
        { art: "merke", kopf: "DO YOU REMEMBER?", html: `<ul><li><b>Simple past</b> with a time: <i>yesterday, last week, two days ago</i> → <i>We went to the lake last summer.</i></li><li><b>Present perfect</b> with <i>ever, never, already, yet, just</i> → <i>I have never seen a goat.</i></li><li><b>going to</b> for plans: <i>I am going to visit my gran.</i></li><li><b>Place before time</b> at the end of a sentence: <i>We met at the bridge on Sunday.</i></li><li><b>some</b> in statements and offers, <b>any</b> in questions and negatives, <b>no</b> = not any: <i>There are some apples. · We haven't got any milk. · There is no bread.</i></li></ul>` },
        { art: "sort", id: "pp-sp", tag: "Sort", titel: "Present perfect or simple past?", foerder: SIGNAL,
          lead: `Put the sentences into the right box. <span class="de">Wenn gesagt wird, wann etwas war, steht das simple past.</span>`,
          buckets: ["Present perfect", "Simple past"],
          items: [{ t: "We have already seen the goats.", b: 0 }, { t: "I haven't tried the maze yet.", b: 0 }, { t: "Have you ever climbed in a forest like this?", b: 0 }, { t: "Nessa has just left the café.", b: 0 },
                  { t: "We went to the farm at ten o'clock.", b: 1 }, { t: "My brother had a hot chocolate yesterday.", b: 1 }, { t: "Did you go to the maze last summer?", b: 1 }, { t: "The bridge opened two years ago.", b: 1 }] },
        { art: "mc", id: "gt-mc", tag: "Choose", titel: "Plans", foerder: GOING,
          lead: `Tick the correct sentence. <span class="de">Pläne mit going to.</span>`,
          hilfen: ["going to braucht vorher am, is oder are.", "Nach going to steht to und das Verb in der Grundform."],
          fragen: [
            { q: "Which sentence is correct?", o: ["After lunch we are going to try the maze.", "After lunch we going to try the maze.", "After lunch we are go to try the maze.", "After lunch we are going try the maze."], a: 0,
              e: "Pläne: am/is/are + going to + Verb. Hier: we are going to try." },
            { q: "Nessa looks at the dark sky. What does she say?", o: ["It is going to rain.", "It going to rain.", "It is going rain.", "It are going to rain."], a: 0,
              e: "Bei it steht is: It is going to rain." }
          ] },
        { art: "mc", id: "ort-zeit", tag: "Choose", titel: "Place before time", foerder: WORDORDER,
          lead: `Tick the sentence with the right word order. <span class="de">Am Satzende kommt der Ort vor der Zeit.</span>`,
          hilfen: ["Frage dich: Wo? Wann? Die Antwort auf Wo? steht zuerst.", "Der Ort (at the station) steht vor der Zeit (on Friday)."],
          fragen: [
            { q: "Which sentence is right?", o: ["We met in the maze on Saturday.", "We met on Saturday in the maze.", "We on Saturday met in the maze.", "Met we in the maze on Saturday."], a: 0,
              e: "Am Satzende steht erst der Ort (in the maze), dann die Zeit (on Saturday)." },
            { q: "Which sentence is right?", o: ["I am going to meet my cousin at the station on Friday.", "I am going to meet my cousin on Friday at the station.", "I am going to meet on Friday my cousin at the station.", "I am going to on Friday meet my cousin at the station."], a: 0,
              e: "Erst der Ort (at the station), dann die Zeit (on Friday)." }
          ] },
        { art: "luecke", id: "sa-luecke", tag: "Gap text", titel: "At the café", foerder: SOMEANY,
          lead: `Complete the sentences. <span class="de">Zwei Wörter bleiben übrig.</span>`,
          hilfen: ["Wer etwas möchte und höflich fragt, sagt meistens some. In einem verneinten Satz steht any.", "Wenn nichts mehr da ist, passt no. Wenn man irgendetwas will, aber nicht genau sagt was, passt something.", "some · any · no · something"],
          absaetze: [
            ["I'm hungry. Can I have ", { g: "some" }, " chips, please?"],
            ["Sorry, we haven't got ", { g: "any" }, " soup today."],
            ["The ice cream is all gone. There is ", { g: "no" }, " ice cream left."],
            ["I'm thirsty. I need ", { g: "something" }, " to drink."]
          ], extra: ["anybody", "nobody"] },
        { art: "offen", id: "weg-m7", m7: true, foerder: WEG, tag: "Your words", titel: "From the Farm to the Maze",
          lead: `A visitor stands at the Farm and wants to go to the Maze. Write the way. <span class="de">Der Besucher geht zuerst über die Brücke zurück. Beschreibe den Weg in zwei bis vier Sätzen.</span>`,
          fragen: [{ q: "Write directions from the Farm to the Maze.", m: "Go back across the little bridge and along Maple Path to Oak Avenue. Turn right and walk straight on. Take the first path on the left. The Maze is at the end of the path.", k: ["back|across|bridge|go|walk", "right", "left|first|path", "maze"], min: 3 }],
          tipp: "Think: first back across the bridge, then along Maple Path to Oak Avenue. Which way do you turn there – and then?" },
        { art: "offen", id: "ort-zeit-m7", m7: true, tag: "Your words", titel: "Place before time",
          lead: `Write one sentence about a plan with a <b>place</b> and a <b>time</b>. <span class="de">Zum Beispiel: Wo und wann triffst du eine Freundin?</span>`,
          fragen: [{ q: "Write one sentence with a place and a time (place first).", m: "We are going to meet in front of the café at twelve o'clock.", k: ["meet|go|are|have|eat|visit|walk|see|play", "in|at|outside|near|by|next to", "o'clock|pm|am|tomorrow|today|on|after|before|lunch|morning|afternoon|saturday|sunday|friday|monday"], min: 3 }],
          tipp: "Start like this: We are going to meet … Say first where (in front of …, at …), then when (at two o'clock, on Saturday)." }
      ] },
      { kurz: "Postcard", ober: "Your day", titel: "A postcard from the park", teile: [
        { art: "text", html: `<p class="lead">It is the end of your day at Oakridge Adventure Park. Write a postcard. <span class="de">Du schreibst eine Postkarte über deinen Tag. Du darfst dir den Tag ausdenken: Was hast du erlebt, was hast du gegessen, was hast du noch vor?</span></p>` },
        POSTKARTE("R", 40),
        POSTKARTE("M", 60)
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know", lead: `Is it right or wrong? <span class="de">Stimmt das?</span>`,
          aussagen: [
            ["In Ireland people pay in euros.", true],
            ["\"Go across the bridge\" means: Geh über die Brücke.", true],
            ["We say: I have been to the farm yesterday.", false],
            ["The place comes before the time: We met at the café at one o'clock.", true],
            ["After Would you like …? we say: Yes, I'd like any chips, please.", false]
          ] }
      ] }
    ],
    weiter: { text: "Well done! You can follow and give directions, order and pay at a snack bar, and write about your day. Next: more practice with words and grammar." }
  });
})();
