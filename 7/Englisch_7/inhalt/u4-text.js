/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Text: Sports at an American school (Kürzel D11)
   (einen Sachtext als Internetseite über den Schulsport an einer amerikanischen High School lesen: Satzhälften verbinden,
   Fragen beantworten, Textstellen finden, Sportwörter den Sportarten zuordnen, Steigerungsformen im Text (Wiederholung G10),
   sagen, welche Sportart man ausprobieren möchte – und zum Schluss eine Wahlaufgabe schreiben: Bericht über das Interview
   mit einem Partner ODER ein Text für die Sportseite der eigenen Schule)
   Buchprinzip (BUCH-UNIT4.md, Abschnitt „Text“, nur Aufbau, nichts übernommen): Sachtext als Internetseite mit Feldern je
   Sportart und Zwischenüberschrift → Satzanfänge und Satzenden verbinden → Sportwörter den Sportarten zuordnen → Wahlaufgabe
   (Partner zum Lieblingssport interviewen ODER über eine Sportart schreiben). Andere
   Auswahl als im Buch: track and field, softball, lacrosse, swimming, cheer team an einer erfundenen Schule. Besser: sofortige
   Rückmeldung, Belegstellen in den Zeilen, Hilfen in Stufen, Sporträtsel, KI-Rückmeldung zur Wahlaufgabe.
   Differenzierung: Lesetext R7 239 / M7 379 Wörter mit eigenen Zeilenangaben und eigenen Satzhälften, Fragen und Sportwörtern;
   R7 mit deutscher Hilfe und Hilfen in Stufen; Schreiben R7 mindestens 40 Wörter mit Satzanfängen sofort, M7 mindestens 60;
   Plus für M7 (m7): zwei Unterschiede zwischen Softball und Baseball erklären, den Schulsport in Pinewood mit dem eigenen
   vergleichen (für R7 freiwillig).
   Sachlich: Schulsport in den USA nach Jahreszeiten mit Probetrainings; Softball ähnelt Baseball (größerer Ball, kleineres
   Spielfeld, Pitcher wirft von unten); Lacrosse ist eine der ältesten Mannschaftssportarten Nordamerikas, von Ureinwohnern
   lange vor der Ankunft der Europäer gespielt und für viele ihrer Völker bis heute wichtig (respektvoll, ohne erfundene
   Einzelheiten); Jungen mit Helm, Mädchen mit Schutzbrille; Schwimmwettkämpfe (swim meets) mit vier Schwimmarten;
   Cheerleader feuern bei Football- und Basketballspielen an, Jungen und Mädchen; Lacrosse ist viel älter als Basketball (1891).
   Pinewood High School, Coach Rivera und alle Zahlen der Schule sind erfunden.
   LehrplanPLUS E7 1.1 Leseverstehen (Sachtext, Einzelheiten und Textstellen), E7 2 Schreiben (Bericht, Text für eine
   Internetseite), E7 1.3 Sprechen (Interview), E7 4 Wortschatz Sport, E7 5 (USA: Schule und Freizeit), Grammatik G10 im Text
   (Wiederholung).
   Texte: „Sports at Pinewood High“ (texte/u4/u4-text-sports-r.js und -m.js).
   Förder-Link: Steigerung im Text → unit4/extra/comparison.html („Extra: Steigern Schritt für Schritt“).
   Wortschatz der Unit „Text“ (playing field, baseball, to hit, bat, basket, point, to bounce, cheerleading, cheerleader, to jump,
   to motivate, oval) und der Wordbank „Sports and activities“ aus Unit 2 kommt bewusst vor. Neu und im Glossar: track and field,
   softball, lacrosse, season, try-out, swim meet, stroke, net, goal.
   BILDER:
   1. Station „Get ready“ (Vorentlastung, Sprechanlass): Fünf kleine Szenen als Bildkarten – Läuferinnen auf einer roten
      Laufbahn, eine Softball-Pitcherin wirft von unten, zwei Lacrosse-Spieler mit Schlägern mit Netz, eine Schwimmerin im
      Becken mit Bahnleinen, ein Cheer-Team (Jungen und Mädchen) beim Sprung am Spielfeldrand.
   2. Station „The website“ (Lesetext): Ein Schulgebäude mit Sportplatz, davor ein Schild ohne lesbare Schrift; Jugendliche in
      Sportkleidung verschiedener Sportarten.
   3. Station „Your choice“ (Schreiben): Zwei Jugendliche interviewen sich gegenseitig mit Notizblock und Ball. */
(function () {
  // deutsche Hilfe unter dem Arbeitsauftrag: R7 immer, M7 nur dort, wo sie nötig ist.
  // Teile mit <span class="de"> im Auftrag (auch Texte) und ohne eigenes nur: werden unten in R7 (mit Hilfe) und M7 (ohne) geteilt.
  const OHNE_DE = s => (s || "").replace(/<p><span class="de">.*?<\/span><\/p>/g, "").replace(/ ?<span class="de">.*?<\/span>/g, "");
  function trenne(stationen) {
    stationen.forEach(st => {
      st.teile = st.teile.flatMap(t => {
        const hat = /class="de"/.test((t.lead || "") + (t.auftrag || ""));
        if (t.art === "text" && !t.nur && /class="de"/.test(t.html || "")) return [Object.assign({}, t, { nur: "R" }), Object.assign({}, t, { nur: "M", html: OHNE_DE(t.html) })];
        if (t.nur || !hat || t.art === "text" || t.art === "merke") return [t];
        const m = Object.assign({}, t, { nur: "M" });
        if (t.lead) m.lead = OHNE_DE(t.lead);
        if (t.auftrag) m.auftrag = OHNE_DE(t.auftrag);
        return [Object.assign({}, t, { nur: "R" }), m];
      });
    });
    return stationen;
  }
  const STEIGERN = { href: "unit4/extra/comparison.html", text: "Extra: Steigern Schritt für Schritt" };

  D7Kit.seite({
    id: "u4-text",
    titel: "Text: Sports at an American school",
    einleitung: "Running, softball, lacrosse, swimming and cheerleading: At many American schools, sport is a big part of school life. You read the sports page of a high school, find details, learn sports words – and then you write about a sport yourself.",
    zeit: "etwa 40 Minuten",
    ziele: ["📖 I understand a website about sports at an American school.", "🔎 I find details and the right lines in the text.", "🏅 I put sports words into the right group.", "✍️ I write about a sport I like."],
    thema: "Unit 4 USA – here we come!, Text: Schulsport an einer amerikanischen High School (Sachtext als Internetseite)",
    quiz: { profi: "Sports pro" },
    glossar: {
      track: ["track and field", "Track and field ist Leichtathletik: laufen, springen und werfen. Der track ist die Laufbahn."],
      softball: ["softball", "Softball ist ein Schlagballspiel wie Baseball. Der Ball ist größer, und der Pitcher wirft ihn von unten."],
      lacrosse: ["lacrosse", "Lacrosse ist ein Mannschaftssport. Man fängt und wirft einen kleinen Ball mit einem Schläger, an dem oben ein kleines Netz hängt."],
      season: ["season", "Season heißt Jahreszeit oder Saison. An amerikanischen Schulen gibt es Sportarten für den Herbst (fall), den Winter und das Frühjahr (spring)."],
      tryout: ["try-out", "Ein try-out ist ein Probetraining. Dort zeigt man dem Trainer oder der Trainerin, was man kann."],
      meet: ["swim meet", "Ein swim meet ist ein Schwimmwettkampf zwischen mehreren Schulen oder Vereinen."],
      stroke: ["stroke", "Stroke heißt hier Schwimmart, zum Beispiel freestyle (Kraul), backstroke (Rücken), breaststroke (Brust) und butterfly (Delfin)."],
      coach: ["coach", "Ein coach ist ein Trainer oder eine Trainerin."],
      fall: ["fall", "Fall ist das amerikanische Wort für Herbst. Im britischen Englisch sagt man autumn."]
    },
    haupttext: { R: "u4-text-sports-r", M: "u4-text-sports-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "Sports at school", teile: [
        { art: "text", html: `<p class="lead">At many schools in the USA, students can play on a school team. Teams train after school and play against other schools. Every <button class="term" data-t="season">season</button> there are different sports. <span class="de">In den USA haben viele Schulen eigene Mannschaften. Sie trainieren nach dem Unterricht und spielen gegen andere Schulen.</span></p><p>Which sports do you know? Which sports can you do at your school? <span class="de">Überlege kurz für dich.</span></p>` },
        { art: "karten", karten: [
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-text-track.jpg\" width=\"1280\" height=\"853\" alt=\"Three girls run side by side on a red running track.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Track and field", text: "Running, jumping and throwing." },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-text-softball.jpg\" width=\"1280\" height=\"853\" alt=\"A softball pitcher throws the big yellow ball underarm; a batter with a helmet waits.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Softball", text: "A game with a bat and a big ball." },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-text-lacrosse.jpg\" width=\"1280\" height=\"853\" alt=\"Two lacrosse players with helmets run for the ball with their sticks.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Lacrosse", text: "A game with a stick and a small ball." },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-text-swim.jpg\" width=\"1280\" height=\"853\" alt=\"A girl swims front crawl in a pool with lane ropes.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Swimming", text: "Races in the pool." },
          { ic: "<img class=\"zoomable\" src=\"images/u4/u4-text-cheer.jpg\" width=\"1280\" height=\"853\" alt=\"A cheer team of boys and girls jumps high at the edge of the field.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:12px;display:block\">", titel: "Cheer team", text: "Dancing, jumping and shouting for the team." }
        ] },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words",
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du im Text. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["season", "Jahreszeit, Saison"], ["playing field", "Spielfeld"], ["net", "Netz"], ["goal", "Tor"], ["to motivate", "anfeuern, motivieren"], ["to practise", "üben, trainieren"]],
          hilfen: ["Fang mit den Wörtern an, die du schon aus dem Sport kennst.", "Zwei Wörter findest du beim Fußball: goal und net.", "to motivate klingt fast wie im Deutschen."] }
      ] },
      { kurz: "The website", ober: "Reading", titel: "Sports at Pinewood High", teile: [
        { art: "text", html: `<p class="lead">Read the sports page of Pinewood High School. Each sport has its own part with a heading. Don't stop at words you don't know. <span class="de">Lies die Internetseite einmal ganz. Die Schule ist erfunden, die Sportarten gibt es wirklich.</span></p>` },
        { art: "lesetext", lesetext: { R: "u4-text-sports-r", M: "u4-text-sports-m" } },
        { nur: "R", art: "paare", id: "satzhaelften", tag: "Match", titel: "Match the parts of the sentences",
          lead: `Match the beginnings and the ends of the sentences. <span class="de">Verbinde den Satzanfang mit dem passenden Satzende.</span>`,
          hilfen: ["Lies den Satzanfang und suche die Stelle im Text.", "Jeder Satzanfang gehört zu einer anderen Sportart.", "Track and field ist das größte Team."],
          paare: [["Every season you can", "try a new sport."], ["Track and field is", "the biggest team at the school."], ["In softball, the pitcher", "throws the ball from below."], ["At a swim meet, swimmers race", "against other schools."], ["Cheerleaders practise a lot", "because some jumps can be dangerous."]] },
        { nur: "M", art: "paare", id: "satzhaelften", tag: "Match", titel: "Match the parts of the sentences",
          lead: `Match the beginnings and the ends of the sentences.`,
          paare: [["The school year has", "three sports seasons."], ["Lacrosse players use a stick", "with a small net at the top."], ["The swimmers train in the pool", "at six o'clock in the morning."], ["At a swim meet, there are", "four different strokes."], ["Cheerleaders motivate the fans", "at football and basketball games."], ["The cheer team also takes part", "in competitions against other schools."]] },
        { nur: "R", art: "mc", id: "fragen", tag: "Understanding", titel: "Answer the questions",
          lead: `Tick the correct answer. <span class="de">Es gibt drei Möglichkeiten.</span>`,
          hilfen: ["Suche in der Frage ein Wort, das auch im Text steht: half, playing field, ball, fans.", "Lies nur den Teil mit der passenden Überschrift."],
          fragen: [
            { q: "How many students at Pinewood play on a team?", o: ["more than half", "only a few", "all of them"], a: 0,
              e: "More than half of the students play on a team." },
            { q: "Where does the softball team play?", o: ["on the playing field behind the school", "in the school pool", "in a big stadium in town"], a: 0,
              e: "The softball team plays on the playing field behind the school." },
            { q: "What do lacrosse players do with the ball?", o: ["They catch it, run with it and throw it into the goal.", "They hit it with a bat.", "They kick it with their feet."], a: 0,
              e: "They catch the ball with the net, run with it and throw it into the goal." },
            { q: "What do the cheerleaders do at games?", o: ["They motivate the fans.", "They sell hot dogs.", "They play basketball."], a: 0,
              e: "The cheerleaders motivate the fans at football and basketball games." }
          ] },
        { nur: "M", art: "mc", id: "fragen", tag: "Understanding", titel: "Answer the questions",
          lead: `Tick the correct answer.`,
          fragen: [
            { q: "What happens before a season starts?", o: ["There are try-outs, where you show the coach what you can do.", "There is a big party for all teams.", "The swimmers have a swim meet."], a: 0,
              e: "Before a season starts, there are try-outs." },
            { q: "What can you do in track and field?", o: ["run, jump or throw a heavy ball", "hit a ball with a bat", "dance and shout"], a: 0,
              e: "You can run short or long distances, do the long jump or the high jump, or throw a heavy ball." },
            { q: "Why is lacrosse special for many Native American nations?", o: ["It is still an important part of their culture.", "It is a new sport from Europe.", "It is only played in winter."], a: 0,
              e: "For many Native American nations, lacrosse is still an important part of their culture today." },
            { q: "What does Coach Rivera say about the swimming training?", o: ["It is the hardest training, but also the most fun.", "It is the easiest training at the school.", "It starts at six o'clock in the evening."], a: 0,
              e: "Coach Rivera says it is the hardest training at the school, but also the most fun." }
          ] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Find the lines", titel: "Where does the text say that?", lesetext: "u4-text-sports-r",
          lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`,
          hilfen: ["Lies die Überschrift des Teils: Lacrosse, Swimming, Cheer team.", "Die Fragen stehen in derselben Reihenfolge wie der Text."],
          fragen: [
            { q: "Who played lacrosse hundreds of years ago?", zeilen: [14, 15], e: "Native Americans played it long before the Europeans came.", tipp: "Look at the part about lacrosse." },
            { q: "When does the swimming team train?", zeilen: [18, 19], e: "Before school, at six o'clock in the morning.", tipp: "Look at the part about swimming." },
            { q: "Who can join the cheer team?", zeilen: [23, 24], e: "Boys and girls can join the team.", tipp: "Look at the part about the cheer team." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Find the lines", titel: "Where does the text say that?", lesetext: "u4-text-sports-m",
          lead: `Tap the lines with the answer.`,
          fragen: [
            { q: "Which team is the biggest at Pinewood?", zeilen: [11, 12], e: "Track and field: with more than eighty students, it is the biggest team.", tipp: "Look at the part about track and field." },
            { q: "What do girls wear when they play lacrosse?", zeilen: [24, 26], e: "Girls wear special glasses to protect their eyes.", tipp: "Look at the end of the part about lacrosse." },
            { q: "Why do the cheerleaders practise three times a week?", zeilen: [34, 36], e: "Some of their jumps can be dangerous.", tipp: "Look at the part about the cheer team." }
          ] },
        { nur: "M", art: "offen", id: "unterschiede", m7: true, tag: "Challenge · Your words", titel: "Softball and baseball",
          lead: `Explain <b>two differences</b> between softball and baseball. Use your own words.`,
          fragen: [{ q: "What are two differences between softball and baseball?", m: "In softball the ball is bigger and the field is smaller. The pitcher throws the ball from below.", k: ["ball|softball", "bigger|smaller|below|field|under"], min: 2 }],
          tipp: "Look at the part about softball. Start like this: In softball the ball is … and …" }
      ] },
      { kurz: "Sports words", ober: "Words", titel: "Which sport is it?", teile: [
        { nur: "R", art: "sort", id: "sportwoerter", tag: "Sort", titel: "Find the sports words",
          lead: `Put the words into the right box. <span class="de">Zu welcher Sportart gehört das Wort? Schau in den Text.</span>`,
          buckets: ["Track and field", "Softball", "Lacrosse", "Swimming", "Cheer team"],
          items: [{ t: "short distances", b: 0 }, { t: "long distances", b: 0 }, { t: "bat", b: 1 }, { t: "pitcher", b: 1 }, { t: "stick", b: 2 }, { t: "net", b: 2 }, { t: "pool", b: 3 }, { t: "swim meet", b: 3 }, { t: "dance", b: 4 }, { t: "shout", b: 4 }],
          hilfen: ["Suche jedes Wort im Text. Unter welcher Überschrift steht es?", "Zu jeder Sportart gehören genau zwei Wörter.", "bat und pitcher kennst du aus dem Baseball."] },
        { nur: "M", art: "sort", id: "sportwoerter", tag: "Sort", titel: "Find the sports words",
          lead: `Put the words into the right box.`,
          buckets: ["Track and field", "Softball", "Lacrosse", "Swimming", "Cheer team"],
          items: [{ t: "sprinters", b: 0 }, { t: "long jump", b: 0 }, { t: "batter", b: 1 }, { t: "bases", b: 1 }, { t: "stick", b: 2 }, { t: "net", b: 2 }, { t: "freestyle", b: 3 }, { t: "backstroke", b: 3 }, { t: "dance", b: 4 }, { t: "shout", b: 4 }] },
        { art: "mc", id: "raetsel", tag: "Sports riddles", titel: "What sport is it?",
          lead: `Read the riddle and tick the sport. <span class="de">Diese Sportarten kennst du vielleicht schon. Lies genau.</span>`,
          fragen: [
            { q: "You bounce the ball and throw it into a basket. Each basket gives you points.", o: ["basketball", "softball", "lacrosse"], a: 0,
              e: "In basketball you bounce the ball and throw it into the basket." },
            { q: "The ball is oval, and the players wear helmets. In the USA it is called football.", o: ["American football", "soccer", "swimming"], a: 0,
              e: "American football has an oval ball. In the USA people just say football – our football is soccer there." }
          ] }
      ] },
      { kurz: "Language", ober: "Comparing", titel: "Comparing sports", teile: [
        { art: "merke", kopf: "COMPARING SPORTS", html: `<p>Websites about sport often compare: Who is <b>faster</b>? Which sport is <b>the most popular</b>?</p><p>Short adjectives: <b>-er / the -est</b> (fast – faster – the fastest, small – smaller – the smallest) · Long adjectives: <b>more / the most</b> (popular – more popular – the most popular) · Irregular: <b>good – better – the best</b>.</p><p>After <b>one of</b> comes <b>the …-est</b> or <b>the most …</b> and a plural: <i>one of the fastest runners, one of the most popular sports</i>.</p><p><span class="de">Nach dem Vergleich kommt than: bigger than, more dangerous than.</span></p>` },
        { art: "luecke", id: "steigerung", tag: "Gap text", titel: "Compare the sports", foerder: STEIGERN,
          lead: `Complete the sentences with words from the box. <span class="de">Zwei Formen sind falsch und bleiben übrig.</span>`,
          hilfen: ["Steht than im Satz? Dann brauchst du bigger, older oder more …", "Steht one of davor? Dann brauchst du die 2. Steigerung mit the: the …-est.", "Falsch sind Formen wie the most old oder more big."],
          absaetze: [
            ["Lacrosse is one of ", { g: "the oldest" }, " sports in North America."],
            ["A softball is ", { g: "bigger" }, " than a baseball."],
            ["Lacrosse is much ", { g: "older" }, " than basketball."],
            ["I think cheerleading is ", { g: "more dangerous" }, " than swimming."]
          ], extra: ["the most old", "more big"] }
      ] },
      { kurz: "Your choice", ober: "Speaking and writing", titel: "Your turn: sports", teile: [
        { nur: "R", art: "offen", id: "ausprobieren", tag: "Your opinion", titel: "Which sport would you like to try?",
          lead: `Write <b>one or two sentences</b>. Which sport from Pinewood would you like to try? Why? <span class="de">Welche Sportart würdest du gern ausprobieren? Warum?</span>`,
          fragen: [{ q: "Which sport from Pinewood would you like to try? Why?", m: "I would like to try lacrosse because I like team sports and I want to catch the ball with a net.", k: ["would like|'d like|want|try|love", "track|field|running|softball|lacrosse|swimming|cheer|cheerleading", "because|it is|it's|i like|i can|fun|exciting"], min: 3 }],
          tipp: "Start like this: I would like to try … because …",
          hilfen: ["Wähle eine Sportart aus dem Text.", "Schreibe: I would like to try …", "Dann sage, warum: because I like team sports / because I love water / because …"] },
        { nur: "M", art: "offen", id: "ausprobieren", tag: "Your opinion", titel: "Which sport would you like to try?",
          lead: `Write <b>two sentences</b>. Which sport from Pinewood would you like to try – and which one not? Why?`,
          fragen: [{ q: "Which sport from Pinewood would you like to try – and which one not? Why?", m: "I would like to try lacrosse because it is a fast team sport. I wouldn't like to swim at six o'clock in the morning because I like to sleep.", k: ["would like|'d like|want|try|love", "track|field|running|softball|lacrosse|swimming|swim|cheer|cheerleading", "because|it is|it's|i like|i can|fun|exciting", "wouldn't|would not|don't|not"], min: 3 }],
          tipp: "Use: I would like to try … because … I wouldn't like to … because …" },
        { art: "offen", id: "vergleich-schule", m7: true, tag: "Challenge · Compare", titel: "Pinewood and your school",
          lead: `What is different at your school? Write <b>two sentences</b>. <span class="de">Was ist an deiner Schule anders als in Pinewood?</span>`,
          fragen: [{ q: "What is different at your school? Write two sentences.", m: "At Pinewood students play on school teams, but at my school we play football in a club. We don't have a swimming pool at our school.", k: ["my school|our school|we|at home|in germany|in bavaria", "but|don't|do not|isn't|aren't|haven't|different|no|not|club"], min: 2 }],
          tipp: "Start like this: At Pinewood … but at my school … / We don't have …" },
        { art: "merke", kopf: "HELP FOR YOUR TEXT", html: `<p><b>Questions for an interview:</b> <i>What is your favourite sport? · What do you need for it? · Where do you play or train? · How often do you train?</i></p><p><b>A report:</b> <i>My partner's favourite sport is … He / She needs … He / She trains … times a week at …</i></p><p><b>A text for a sports page:</b> <i>… is a team sport / a sport for one person. · You need … · You can … · The best thing about … is …</i></p>` },
        { art: "schreiben", id: "wahl", nur: "R", tag: "Your task", titel: "Choose A or B", min: 40,
          auftrag: `<p><b>Choose one task</b> (40 words or more). <span class="de">Wähle eine Aufgabe, mindestens 40 Wörter.</span></p><p><b>A) Interview a partner</b> about his or her favourite sport. Then write a short report.</p><p><b>B) Write a short text for your school's sports page</b> about a sport you like.</p><p>Write the letter (A or B) at the start. Say what you need for the sport, where you can do it and how often. <span class="de">Schreibe den Buchstaben A oder B an den Anfang.</span></p>`,
          starter: ["A) My partner's favourite sport is …", "He / She needs …", "He / She trains … times a week.", "B) … is a great sport.", "You need …", "The best thing about it is …"],
          kriterien: ["Du schreibst am Anfang A oder B.", "Du nennst die Sportart.", "Du sagst, was man dafür braucht (Ausrüstung).", "Du sagst, wo und wie oft man trainiert oder spielt.", "Der Text hat mindestens 40 Wörter."] },
        { art: "schreiben", id: "wahl", nur: "M", tag: "Your task", titel: "Choose A or B", min: 60,
          auftrag: `<p><b>Choose one task</b> (60 words or more):</p><p><b>A) Interview a partner</b> about his or her favourite sport (equipment, place, how often, why he or she likes it). Then write a short report for the class.</p><p><b>B) Write a text for your school's sports page</b> about a sport you like: rules, equipment, where and how often you can do it – and why it is great.</p><p>Write the letter of your task (A or B) at the start. Use at least one comparison (better than, the most …).</p>`,
          starter: ["A) My partner's favourite sport is …", "He / She needs … and trains …", "He / She likes it because …", "B) … is one of the most … sports.", "You need … and you can …", "It is better than … because …"],
          kriterien: ["Du schreibst am Anfang A oder B und nennst die Sportart.", "Du sagst, was man braucht und wie man spielt oder trainiert (Ausrüstung, Regeln).", "Du sagst, wo und wie oft man die Sportart macht.", "Du begründest, warum die Sportart gut ist (because …).", "Du benutzt mindestens einen Vergleich (better than, more … than, the most …), und der Text hat mindestens 60 Wörter."] },
        { art: "text", html: `<p><b>Read it to the class!</b> Read your report or your text aloud. The class guesses: Would you like to try this sport? <span class="de">Lies deinen Text vor. Die anderen sagen, ob sie die Sportart ausprobieren möchten.</span></p>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["At Pinewood, you can try a new sport every season.", true],
            ["Softball is a lot like basketball.", false],
            ["Lacrosse is a new sport from Europe.", false],
            ["Swimming is a summer sport at Pinewood.", false],
            ["Cheerleaders dance, jump and shout.", true],
            ["\"The oldest\" is a form of \"old\".", true]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! Now you know a lot about sports at an American school, and you can write about a sport you like." }
  });
})();
