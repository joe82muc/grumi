/* Englisch 7 (7R/7M) · Unit 4 USA – here we come! · Topic 1: Social media and me (Kürzel D9)
   (einen Blog über einen Besuch in einem Kulturzentrum der Ureinwohner Amerikas lesen, falsche Sätze verbessern und Textstellen
   finden, Wörter zu sozialen Medien, über die eigene Mediennutzung sprechen, einen Klassen-Podcast mit einer Umfrage hören,
   Steigerung mit more/the most und less/the least (G10) im Kontext, -er/-est wiederholen, Dinge vergleichen – und am Ende ein
   eigenes Statement zu sozialen Medien schreiben)
   Buchprinzip (BUCH-UNIT4.md, Topic 1, nur Aufbau, nichts übernommen): Blog lesen (Steigerungsformen eingebaut) → Culture-Kasten
   Zeitzonen → falsche Sätze verbessern (◒) und Warum-Fragen (●) → Tätigkeiten mit sozialen Medien (Wortverbindungen), über die
   eigene Nutzung sprechen → Umfrage hören mit Fragen, Listening skills (Fragen vorher lesen) → Language detective: more … than,
   the most, less … than, the least → Dinge mit more/less vergleichen → the most / the least einsetzen → Partner fragen
   („the most … thing ever“) → Task: Statement über die eigene Nutzung (gut / nicht so gut, Satzmuster). Besser: sofortige
   Rückmeldung, Hilfen in Stufen (R7 mit mehr Tipps), Förder-Links an den Stellen, an denen Kinder hängen bleiben, Belegstellen
   in den Zeilen, KI-Rückmeldung zum Statement nach einer Checkliste.
   Differenzierung: Lesen – eigene Fassungen (R7 247 / M7 376 Wörter) mit eigenen Zeilenangaben und eigenen Verbesserungssätzen;
   Hören – R7 166 Wörter, Notizen zum Auswählen; M7 245 Wörter mit dritter Sprecherin, Notizen selbst schreiben; Steigerung –
   R7 wählt aus zwei Formen, M7 aus vier; Schreiben – R7 mindestens 40 Wörter mit Satzanfängen sofort, M7 mindestens 60;
   Plus für M7 (m7): eine Warum-Frage zum Blog in eigenen Worten, das Nützlichste und das am wenigsten Nützliche am eigenen
   Handy (für R7 freiwillig).
   Respekt: „Native American“ als Bezeichnung, kein bestimmter Stamm, keine erfundenen Stammesdetails, keine Klischees; die
   Führerin ist eine junge Frau von heute (Studentin), die mit sozialen Medien die Sprache ihrer Großeltern lernt. Gesicherte
   Fakten: In Oklahoma haben heute mehr als dreißig Stämme ihren Sitz (39 anerkannte); viele Sprachen der Ureinwohner Amerikas
   sind bedroht; Oklahoma liegt in der Central Time Zone, Deutschland ist meist sieben Stunden voraus. Keine echten Apps oder
   Firmen.
   LehrplanPLUS E7 1.1 Leseverstehen (Blog, Einzelheiten und Textstellen), E7 1.2 Hörverstehen (Podcast, Zahlen, Notizen),
   E7 1.3 Sprechen (über die eigene Mediennutzung, Meinung erfragen), E7 2 Schreiben (Statement), E7 4 Wortschatz soziale Medien
   und Technik, E7 Grammatik G10 (more/the most, less/the least; -er/-est, better/worse).
   Texte: „Kayla's blog: A day at the cultural centre“ (texte/u4/u4-t1-blog-r.js und -m.js) – Kayla (13, Oklahoma), Ms Carter,
   Kommentar von Tyler; „Our class survey“ (texte/u4/u4-t1-survey-r.js und -m.js) – Kayla und Tyler (M7 dazu Ms Brooks). Alle
   Personen, das Kulturzentrum und die Zahlen der Umfrage sind erfunden.
   Förder-Links: Steigerung → unit4/extra/comparison.html („Extra: Steigern Schritt für Schritt“: kurz oder lang, -er oder more,
   the -est oder the most, more/most/less/least im Wortkasten), Wortschatz → unit4/extra/social-media.html („Extra: Social media
   words“: post, share, download, follow, chat, message, Geräte).
   Wortschatz der Unit bis Topic 1 (vacation, people, beautiful, tribe, to be interested in, social media, to share, video, to post,
   tablet, to remember, the most important, latest, the least difficult, newspaper, less, movie, useful; comparing: cheap, big,
   good, bad, exciting, beautiful, boring, expensive) und der Wordbank „Social media and technology“ (phone, laptop, message,
   chat, download, video call …) kommt bewusst vor. Neu und im Glossar: cultural centre, guide, in danger, survey, time zone.
   Rollen im Hörtext: Kayla = Mädchen (en-GB-LibbyNeural), Tyler = Junge (en-GB-RyanNeural), Ms Brooks = Frau (nur M7,
   en-GB-SoniaNeural).
   BILDER:
   1. Station „Get ready“ (Vorentlastung, Sprechanlass): Eine Schulklasse (USA, etwa 13 Jahre) in einem hellen, modernen Museum;
      eine junge Frau mit Namensschild zeigt den Kindern auf einem Tablet ein kurzes Video – keine Kostüme, kein Federschmuck.
   2. Station „The blog“ (Lesetext): Ein Mädchen sitzt abends am Schreibtisch und tippt auf einem Laptop einen Blogeintrag; auf
      dem Bildschirm nur Platzhalter-Zeilen und ein kleines Foto eines Museums, keine lesbare Schrift, kein App-Logo.
   3. Station „Our survey“ (Hören): Zwei Jugendliche (Mädchen, Junge) mit Kopfhörern vor einem Mikrofon in einem Klassenzimmer,
      an der Tafel ein einfaches Balkendiagramm ohne Beschriftung. */
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
  const MEDIEN = { href: "unit4/extra/social-media.html", text: "Extra: Social media words" };

  D7Kit.seite({
    id: "u4-topic1",
    titel: "Topic 1: Social media and me",
    einleitung: "Kayla lives in Oklahoma. On a school trip she meets a young woman who is learning the language of her grandparents – with <b>social media</b>. You read Kayla's blog, listen to a survey about phones and compare things with <b>more</b>, <b>the most</b>, <b>less</b> and <b>the least</b>. Then you write your own statement about social media.",
    zeit: "etwa 45 Minuten",
    ziele: ["📖 I understand a blog and find details in the text.", "📱 I talk about what I do online and how often.", "🎧 I understand the results of a survey.", "⚖️ I compare things with more/less … than and the most/the least.", "✍️ I write a statement about social media."],
    thema: "Unit 4 USA – here we come!, Topic 1: soziale Medien (Blog, Umfrage, Steigerung mit more/most, less/least)",
    quiz: { profi: "Social media pro" },
    glossar: {
      native: ["Native American", "Native Americans sind die Ureinwohner Amerikas. Ihre Völker lebten dort lange vor den Europäern. Viele nennen sich auch mit dem Namen ihres eigenen Volkes."],
      tribe: ["tribe", "Ein tribe ist ein Stamm oder Volk. In den USA gibt es viele Stämme der Ureinwohner, jeder mit eigener Geschichte und oft mit eigener Sprache."],
      centre: ["cultural centre", "Ein cultural centre ist ein Kulturzentrum. Dort zeigt man Geschichte, Kunst, Musik und Sprache, zum Beispiel mit Ausstellungen und Führungen."],
      guide: ["guide", "Ein guide ist ein Führer oder eine Führerin. Diese Person zeigt Besuchern einen Ort und erklärt ihn."],
      danger: ["in danger", "In danger heißt in Gefahr. Eine Sprache ist in Gefahr, wenn nur noch wenige Menschen sie sprechen."],
      survey: ["survey", "Ein survey ist eine Umfrage. Man stellt vielen Leuten dieselben Fragen und zählt die Antworten."],
      zone: ["time zone", "Eine time zone ist eine Zeitzone. Die USA sind so groß, dass es dort mehrere Zeitzonen gibt."]
    },
    haupttext: { R: "u4-t1-blog-r", M: "u4-t1-blog-m" },
    stationen: trenne([
      { kurz: "Get ready", ober: "Before you read", titel: "Social media and you", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a class trip to a cultural centre</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-t1-museum.jpg\" width=\"1280\" height=\"853\" alt=\"A class in a bright modern museum; a young woman shows the students a short video on a tablet; glass cases with pottery and baskets behind them.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Where are the students? What is the young woman showing them? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Kayla is thirteen and lives in <b>Oklahoma</b>, a state just north of Texas. Last Friday her class visited a <button class="term" data-t="centre">cultural centre</button> about <button class="term" data-t="native">Native American</button> history, art and languages. Then she wrote about it in her blog. <span class="de">Kayla und das Kulturzentrum sind erfunden. Oklahoma gibt es wirklich: Dort leben heute viele Stämme der Ureinwohner Amerikas.</span></p><p>How do <b>you</b> use your phone or the internet? Chatting, videos, games? <span class="de">Überlege kurz für dich: Wofür benutzt du dein Handy oder das Internet?</span></p>` },
        { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", foerder: MEDIEN,
          lead: `Find the pairs. <span class="de">Diese Wörter brauchst du im Blog. Tippe auf ein englisches Wort und dann auf seine Bedeutung.</span>`,
          paare: [["social media", "soziale Medien"], ["to post", "posten, online stellen"], ["to share", "teilen"], ["tribe", "Stamm, Volk"], ["useful", "nützlich"], ["in danger", "in Gefahr"]],
          hilfen: ["Fang mit den Wörtern an, die du schon kennst.", "Zwei Wörter sind Tätigkeiten im Internet: to post und to share.", "Tippe zuerst social media – das Wort klingt fast wie im Deutschen."] }
      ] },
      { kurz: "The blog", ober: "Reading", titel: "Kayla's blog", teile: [
        { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a blog post</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u4/u4-t1-blog.jpg\" width=\"1280\" height=\"853\" alt=\"A girl sits at her desk in the evening and types on a laptop; the screen shows grey lines and a small photo of a museum.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What is the girl doing? What could she write about? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
        { art: "text", html: `<p class="lead">Read Kayla's blog and Tyler's comment. Don't stop at words you don't know. <span class="de">Lies den Blog einmal ganz. Bleib nicht an unbekannten Wörtern hängen.</span></p>` },
        { art: "lesetext", lesetext: { R: "u4-t1-blog-r", M: "u4-t1-blog-m" } },
        { art: "merke", kopf: "CULTURE: TIME ZONES", html: `<p>The USA is so big that it has several <button class="term" data-t="zone">time zones</button>. When it is <b>eight o'clock in the evening</b> in Oklahoma, it is usually <b>three o'clock in the morning</b> in Germany – seven hours later. <span class="de">Die USA haben mehrere Zeitzonen. In Deutschland ist es meistens sieben Stunden später als in Oklahoma.</span></p>` },
        { art: "mc", id: "global", tag: "Main idea", titel: "What is the blog about?",
          lead: `Tick the correct answer. <span class="de">Worum geht es im Blog?</span>`,
          fragen: [
            { q: "What is Kayla's blog about?", o: ["a school trip and how people use social media", "a holiday in Germany", "a new phone for Kayla", "a baseball game at her school"], a: 0,
              e: "Kayla writes about the trip to the cultural centre and about social media." },
            { q: "How did Kayla feel when she heard about Ms Carter's videos?", o: ["surprised", "angry", "bored", "sad"], a: 0,
              e: "Kayla writes: I was surprised. She thought that social media was only for fun." }
          ] },
        { nur: "R", art: "luecke", id: "verbessern", tag: "Correct the sentences", titel: "What is wrong?",
          lead: `The crossed-out words are wrong. Put in the right words from the box. <span class="de">Die durchgestrichenen Wörter sind falsch. Setze das richtige Wort aus dem Kasten ein. Zwei Wörter bleiben übrig.</span>`,
          hilfen: ["Lies den Satz und suche die Stelle im Blog.", "Die Sätze stehen in derselben Reihenfolge wie im Blog.", "Ein Wort ist ein Wochentag, eines eine Zahl, eines ein Familienmitglied."],
          absaetze: [
            ["Kayla's class visited the cultural centre last <s>Monday</s> ", { g: "Friday" }, "."],
            ["More than <s>three</s> ", { g: "thirty" }, " Native American tribes have their home in Oklahoma."],
            ["Ms Carter is learning the language of her <s>teachers</s> ", { g: "grandparents" }, "."],
            ["Ms Carter says social media is more useful than a <s>film</s> ", { g: "book" }, "."],
            ["In Kayla's family, her <s>dad</s> ", { g: "grandpa" }, " still reads a newspaper every day."]
          ], extra: ["Tuesday", "parents"] },
        { nur: "M", art: "luecke", id: "verbessern", tag: "Correct the sentences", titel: "What is wrong?",
          lead: `The crossed-out words are wrong. Put in the right words from the box. Two words are left over.`,
          absaetze: [
            ["The building of the cultural centre is <s>small</s> ", { g: "huge" }, " and very modern."],
            ["Ms Carter works at the centre <s>every evening</s> ", { g: "at the weekends" }, "."],
            ["Often the <s>youngest</s> ", { g: "oldest" }, " people in a family still speak the language."],
            ["For Kayla, <s>playing games</s> ", { g: "chatting with friends" }, " is the most important thing on her phone."],
            ["Tyler's phone is <s>newer</s> ", { g: "older" }, " than Kayla's phone."]
          ], extra: ["every morning", "reading the news"] },
        { nur: "R", art: "beleg", id: "zeilen", tag: "Find the lines", titel: "Where does it say that?", lesetext: "u4-t1-blog-r",
          lead: `Tap the lines with the answer. <span class="de">Tippe die Zeilen an, in denen die Antwort steht.</span>`,
          hilfen: ["Lies die Frage und suche ein passendes Wort im Blog: danger, videos, Germany.", "Die Fragen stehen in derselben Reihenfolge wie der Blog.", "Zeile für Zeile: Passt der Satz zur Frage?"],
          fragen: [
            { q: "Why are many Native American languages in danger?", zeilen: [8, 9], e: "Not many people speak them now.", tipp: "Look for the word danger." },
            { q: "What do young people from Ms Carter's tribe watch?", zeilen: [12, 13], e: "They watch short videos with words and old stories.", tipp: "Look for the word videos." },
            { q: "What time is it in Germany when Kayla writes the blog?", zeilen: [22, 24], e: "It is three o'clock in the morning in Germany.", tipp: "Look for the word Germany." }
          ] },
        { nur: "M", art: "beleg", id: "zeilen", tag: "Find the lines", titel: "Where does it say that?", lesetext: "u4-t1-blog-m",
          lead: `Tap the lines with the answer.`,
          fragen: [
            { q: "Why does Ms Carter film her grandma?", zeilen: [16, 17], e: "Her grandma speaks the language better than anybody she knows.", tipp: "Look at what Ms Carter says about her grandma." },
            { q: "How many words could Kayla remember from the language room?", zeilen: [22, 23], e: "She could only remember two of them.", tipp: "Look for the language room." },
            { q: "What is Kayla going to do next week?", zeilen: [31, 32], e: "She is going to do a survey in her class.", tipp: "Look for next week." }
          ] },
        { nur: "M", art: "offen", id: "warum", m7: true, tag: "Challenge · Your words", titel: "Why is social media so useful?",
          lead: `Ms Carter says that social media is more useful than any book. Explain why in <b>one or two sentences</b>. Use your own words.`,
          fragen: [{ q: "Why is social media so useful for Ms Carter and the young people from her tribe?", m: "They can learn the language together with videos, and they can stay in contact even when they live far away from each other.", k: ["learn|language|words|stories|videos|questions", "together|each other|contact|far away|live far|share|send"], min: 2 }],
          tipp: "Look at lines 19–21. Start like this: They can … even when …" }
      ] },
      { kurz: "Our survey", ober: "Words and listening", titel: "What do you do online?", teile: [
        { art: "paare", id: "taetigkeiten", tag: "Words", titel: "Things you do online", foerder: MEDIEN,
          lead: `Match the English and the German. <span class="de">Was macht man mit dem Handy oder im Internet? Verbinde.</span>`,
          paare: [["send a message", "eine Nachricht schicken"], ["post a photo", "ein Foto posten"], ["share a video", "ein Video teilen"], ["chat with friends", "mit Freunden chatten"], ["make a video call", "ein Videotelefonat führen"], ["read the news", "Nachrichten lesen"], ["download a game", "ein Spiel herunterladen"]],
          hilfen: ["Schau zuerst auf das Verb: send, post, share, chat, make, read, download.", "Ein Videotelefonat führen heißt make a video call.", "download = herunterladen, share = teilen."] },
        { art: "merke", kopf: "HOW OFTEN?", html: `<p>Say how often you do something:</p><div class="phrasen"><span>every day</span><span>two times a day</span><span>once a week</span><span>at the weekend</span><span>never</span></div><p><i>I chat with my friends <b>every day</b>. I make a video call with my aunt <b>once a week</b>.</i></p>` },
        { nur: "R", art: "offen", id: "online", tag: "Your words", titel: "What do you do online?", lead: `Write <b>two sentences</b>: What do you do online? How often? <span class="de">Schreibe zwei Sätze: Was machst du online und wie oft?</span>`,
          fragen: [{ q: "What do you do online? How often?", m: "I chat with my friends every day. I watch videos at the weekend.", k: ["chat|send|post|share|watch|play|read|make|download|listen|call|write", "every day|every week|a day|a week|once|twice|times|at the weekend|weekends|never|often|sometimes|always|usually"], min: 2 }],
          tipp: "Start like this: I … every day. I … once a week.",
          hilfen: ["Nimm ein Verb aus der Aufgabe oben: chat, watch, send …", "Dann sage, wie oft: every day, once a week …", "Beispiel für den Aufbau: I send messages … / I play games …"] },
        { nur: "M", art: "offen", id: "online", tag: "Your words", titel: "What do you do online?", lead: `Write <b>two or three sentences</b>: What do you do online, how often – and what don't you do?`,
          fragen: [{ q: "What do you do online? How often? What don't you do?", m: "I send messages to my friends every day. I watch videos at the weekend, but I never post photos.", k: ["chat|send|post|share|watch|play|read|make|download|listen|call|write", "every day|every week|a day|a week|once|twice|times|at the weekend|weekends|never|often|sometimes|always|usually", "don't|do not|never|not"], min: 2 }],
          tipp: "Use: I … every day / once a week. I never …" },
        { art: "text", html: `<p class="lead">Kayla and Tyler did a <button class="term" data-t="survey">survey</button> in their class. Now they present the results in a class podcast. <span class="de">Kayla und Tyler stellen die Ergebnisse ihrer Umfrage vor.</span></p>` },
        { art: "merke", kopf: "LISTENING SKILLS", html: `<p><b>Before</b> you listen, read the questions carefully. Then you know what to listen for: numbers, names, things. <span class="de">Lies die Fragen vor dem ersten Hören genau. Achte beim Hören dann auf diese Stellen – zum Beispiel auf Zahlen.</span></p>` },
        { art: "hoertext", id: "umfrage", tag: "🎧 Class podcast", hoertext: { R: "u4-t1-survey-r", M: "u4-t1-survey-m" },
          fragen: [
            { art: "formular", id: "notizen", nur: "R", titel: "Your notes", lead: `Listen and choose the right answers. <span class="de">Hör zu und wähle für jede Frage die richtige Notiz.</span>`,
              kopf: "Notes: our class survey",
              felder: [
                { label: "How many students in the class have their own phone?", loesung: ["twenty"], wahl: ["twenty", "twenty-four", "fifteen"] },
                { label: "What is the most popular thing online?", loesung: ["sending messages"], wahl: ["sending messages", "watching videos", "playing games"] },
                { label: "What is the least popular thing?", loesung: ["reading the news"], wahl: ["reading the news", "playing games", "making video calls"] },
                { label: "How long are most students online every day?", loesung: ["about two hours"], wahl: ["about two hours", "about four hours", "about half an hour"] },
                { label: "What do twelve students do every week?", loesung: ["video calls with their grandparents"], wahl: ["video calls with their grandparents", "post photos of their pets", "read a newspaper"] }
              ] },
            { art: "formular", id: "notizen", nur: "M", titel: "Your notes", lead: `Listen and write short notes. <span class="de">Notiere zu jeder Frage ein bis fünf Wörter. Zahlen darfst du als Ziffer schreiben.</span>`,
              kopf: "Notes: our class survey",
              felder: [
                { label: "How many students are in the class?", platz: "a number", loesung: ["24", "twenty-four", "twenty four", "24 students", "twenty-four students"] },
                { label: "What is the most popular thing online?", platz: "two or three words", loesung: ["sending messages", "send messages", "messages", "sending messages to friends", "writing messages", "texting", "sending texts", "messaging", "chatting", "send messages to friends", "messages to friends", "sending a message"] },
                { label: "How many students said watching videos?", platz: "a number", loesung: ["6", "six", "6 students", "six students"] },
                { label: "What is the least popular thing?", platz: "two or three words", loesung: ["reading the news", "the news", "news", "read the news", "reading news", "reading the news on the phone", "reading news on the phone"] },
                { label: "What do twelve students do every week?", platz: "a few words", loesung: ["video calls with their grandparents", "make video calls with their grandparents", "they make video calls with their grandparents", "video calls with grandparents", "make video calls with grandparents", "video calls", "make video calls", "call their grandparents", "video call their grandparents", "video calls with grandma and grandpa", "talk to their grandparents", "video chat with their grandparents", "video calls to their grandparents", "a video call with their grandparents"] }
              ] }
          ] }
      ] },
      { kurz: "Language", ober: "more, most, less, least", titel: "Comparing things", teile: [
        { nur: "R", art: "merke", kopf: "LANGUAGE DETECTIVE", html: `<p>Look at Kayla's blog:</p><ul><li>For us, social media is <u>more useful than</u> a book.</li><li>It was <u>the most interesting</u> school trip of the year!</li><li>Newspapers are <u>less popular than</u> videos.</li><li>Reading the news is <u>the least important</u>.</li></ul><p><b>Short adjectives</b> (one syllable) get <b>-er</b> and <b>-est</b>: small – smaller – the smallest.<br><b>Long adjectives</b> get <b>more … than</b> and <b>the most</b>: useful – more useful – the most useful.<br>The opposite: <b>less … than</b> (weniger … als) and <b>the least</b> (am wenigsten).<br>Irregular: good – better – the best · bad – worse – the worst.</p><p><span class="de">Lange Adjektive steigerst du mit more/the most, für „weniger“ nimmst du less/the least. Vergiss das Wort <b>the</b> nicht!</span></p>` },
        { nur: "M", art: "merke", kopf: "LANGUAGE DETECTIVE", html: `<p>Look at Kayla's blog:</p><ul><li>For us, social media is <u>more useful than</u> any book.</li><li>It was <u>the most interesting</u> school trip that we have ever had!</li><li>Games are <u>less important than</u> they were last year.</li><li>It was <u>the least boring</u> language lesson ever!</li></ul><p><b>Short adjectives</b> (one syllable) and adjectives with <b>-y</b> (happy, funny) get <b>-er</b> and <b>-est</b>: small – smaller – the smallest, happy – happier – the happiest.<br><b>Long adjectives</b> get <b>more … than</b> and <b>the most</b>: useful – more useful – the most useful.<br>The opposite: <b>less … than</b> and <b>the least</b>.<br>Irregular: good – better – the best · bad – worse – the worst.<br>Never use both: <s>more cheaper</s>, <s>the most biggest</s>. And don't forget <b>the</b>!</p>` },
        { nur: "R", art: "sort", id: "kurz-lang", tag: "Sort", titel: "-er/-est or more/the most?", foerder: STEIGERN,
          lead: `Put the adjectives into the right box. <span class="de">Klatsche die Silben: Kurze Adjektive bekommen -er/-est, lange more/the most.</span>`,
          buckets: ["-er / the -est", "more / the most"],
          items: [{ t: "old", b: 0 }, { t: "new", b: 0 }, { t: "cheap", b: 0 }, { t: "fast", b: 0 }, { t: "useful", b: 1 }, { t: "popular", b: 1 }, { t: "important", b: 1 }, { t: "expensive", b: 1 }],
          hilfen: ["Zähle die Silben: old = eine Silbe, im-por-tant = drei Silben.", "Eine Silbe → -er/-est.", "useful, popular, important und expensive sind lang."] },
        { nur: "M", art: "sort", id: "kurz-lang", tag: "Sort", titel: "-er/-est or more/the most?", foerder: STEIGERN,
          lead: `Put the adjectives into the right box. Be careful with adjectives that end in -y.`,
          buckets: ["-er / the -est", "more / the most"],
          items: [{ t: "old", b: 0 }, { t: "big", b: 0 }, { t: "cheap", b: 0 }, { t: "easy", b: 0 }, { t: "useful", b: 1 }, { t: "popular", b: 1 }, { t: "interesting", b: 1 }, { t: "boring", b: 1 }],
          hilfen: ["Zähle die Silben. Adjektive auf -y wie easy bekommen -er/-est: easier.", "boring hat zwei Silben und bekommt more: more boring."] },
        { nur: "R", art: "mc", id: "formen", tag: "Choose", titel: "Which form is right?", foerder: STEIGERN,
          lead: `Tick the correct form. <span class="de">Kurz → -er/-est, lang → more/the most. Für „weniger“: less/the least.</span>`,
          hilfen: ["Steht than im Satz? Dann brauchst du die 1. Steigerung (-er oder more).", "Steht the davor? Dann brauchst du die 2. Steigerung (-est oder most/least).", "Kurze Wörter wie cheap bekommen -er, lange wie exciting bekommen more."],
          fragen: [
            { q: "Grandpa's newspaper is ____ than my tablet. (cheap)", o: ["cheaper", "more cheap"], a: 0,
              e: "cheap ist kurz (eine Silbe): cheaper than." },
            { q: "For Grandpa, the newspaper is ____ thing in the morning. (important)", o: ["the most important", "the importantest"], a: 0,
              e: "important ist lang: the most important." },
            { q: "My brother thinks his games are ____ than my videos. (exciting)", o: ["more exciting", "excitinger"], a: 0,
              e: "exciting ist lang: more exciting than." },
            { q: "Nobody uses our old radio. It is ____ thing in our house. (useful – am wenigsten)", o: ["the least useful", "the less useful"], a: 0,
              e: "Am wenigsten heißt the least: the least useful." }
          ] },
        { nur: "M", art: "mc", id: "formen", tag: "Choose", titel: "Which form is right?", foerder: STEIGERN,
          lead: `Tick the correct form.`,
          fragen: [
            { q: "Grandpa's newspaper is ____ than my tablet. (cheap)", o: ["cheaper", "more cheap", "more cheaper", "the cheapest"], a: 0,
              e: "cheap ist kurz: cheaper than. Nie more und -er zusammen." },
            { q: "For Grandpa, the newspaper is ____ thing in the morning. (important)", o: ["the most important", "the importantest", "most important", "the more important"], a: 0,
              e: "important ist lang: the most important – mit the." },
            { q: "My brother thinks his games are ____ than my videos. (exciting)", o: ["more exciting", "excitinger", "most exciting", "more excitinger"], a: 0,
              e: "exciting ist lang, mit than: more exciting than." },
            { q: "Nobody uses our old radio. It is ____ thing in our house. (useful – am wenigsten)", o: ["the least useful", "the less useful", "least useful", "the most useful"], a: 0,
              e: "Am wenigsten heißt the least – und the gehört dazu: the least useful." }
          ] },
        { art: "luecke", id: "most-least", tag: "Gap text", titel: "Kayla's family", foerder: STEIGERN,
          lead: `Complete the sentences with words from the box. <span class="de">Mit than → more oder less · ohne than → the most oder the least. Zwei Wörter bleiben übrig.</span>`,
          hilfen: ["Lies zuerst den ersten Satz: Er sagt dir, ob mehr oder weniger gemeint ist.", "Mit than: more oder less. Ohne than, als „das Meiste“: the most oder the least.", "Satz 1: Das Tablet war billig – also weniger teuer."],
          absaetze: [
            ["Mum's laptop was very expensive, but my tablet was cheap. My tablet is ", { g: "less" }, " expensive than Mum's laptop."],
            ["Everybody in my family watches videos. Videos are ", { g: "the most" }, " popular thing in our house."],
            ["My little sister never reads e-mails. For her, e-mails are ", { g: "the least" }, " interesting thing on the computer."],
            ["I can do a lot of things with my phone. I think it is ", { g: "more" }, " useful than a camera."]
          ], extra: ["most", "better"] },
        { art: "merke", kopf: "COMPARE THINGS", html: `<p>Say what you think:</p><div class="phrasen"><span>I think … is more … than …</span><span>I think … is less … than …</span><span>… is better / worse than …</span></div><p>Ideas: <i>phones – books · videos – newspapers · chatting – e-mails · games – sport</i><br>Adjectives: <i>useful · interesting · exciting · boring · expensive · important</i></p>` },
        { nur: "R", art: "offen", id: "vergleich", tag: "Your opinion", titel: "Compare two things",
          lead: `Write <b>one sentence</b>. Compare two things with <b>more … than</b> or <b>less … than</b>. <span class="de">Vergleiche zwei Dinge, zum Beispiel Videos und Zeitungen.</span>`,
          fragen: [{ q: "Compare two things: phones and books, videos and newspapers, or chatting and e-mails.", m: "I think videos are more interesting than newspapers.", k: ["more|less|better|worse", "than", "phone|phones|book|books|video|videos|newspaper|newspapers|chatting|e-mail|e-mails|email|emails|tablet|laptop|game|games|social media|message|messages|sport"], min: 3 }],
          tipp: "Start like this: I think … are more … than … / I think … is less … than …",
          hilfen: ["Wähle zwei Dinge aus dem Kasten oben.", "Wähle ein Adjektiv: useful, interesting, boring …", "Beispiel für den Aufbau: I think chatting is more … than …"] },
        { nur: "M", art: "offen", id: "vergleich", tag: "Your opinion", titel: "Compare two things",
          lead: `Write <b>two sentences</b>. Compare two pairs of things: once with <b>more … than</b> and once with <b>less … than</b>.`,
          fragen: [{ q: "Compare two pairs of things – once with more … than and once with less … than.", m: "I think videos are more interesting than newspapers. And e-mails are less popular than messages.", k: ["more", "less", "than", "phone|phones|book|books|video|videos|newspaper|newspapers|chatting|e-mail|e-mails|email|emails|tablet|laptop|game|games|social media|message|messages|sport"], min: 4 }],
          tipp: "Use: I think … is more … than … And … is less … than …" },
        { art: "offen", id: "handy", m7: true, tag: "Challenge · Your words", titel: "The most and the least useful",
          lead: `What is <b>the most useful</b> thing on your phone or tablet – and what is <b>the least useful</b>? Give a reason. <span class="de">Was ist das Nützlichste und was das am wenigsten Nützliche auf deinem Handy oder Tablet? Begründe.</span>`,
          fragen: [{ q: "What is the most useful thing on your phone or tablet – and what is the least useful? Why?", m: "The most useful thing on my phone is the map because I can find my way. The least useful thing is an old game because I never play it.", k: ["the most|most", "the least|least", "because|as|so|when"], min: 3 }],
          tipp: "Start like this: The most useful thing on my phone is … because … The least useful thing is …" },
        { art: "text", html: `<p><b>With a partner:</b> Ask and answer. <i>A: What's the most boring thing ever? – B: I think … is the most boring thing ever. – A: Really? I think it's less boring than …</i> <span class="de">Fragt euch gegenseitig nach dem Langweiligsten, Spannendsten, Nützlichsten …</span></p>` }
      ] },
      { kurz: "Your statement", ober: "Task", titel: "Your statement about social media", teile: [
        { art: "text", html: `<p class="lead">Now it is <b>your</b> turn. Write a short statement for your class: How do you use your phone, the internet and social media? What is good about it – and what is not so good? <span class="de">Du schreibst ein kurzes Statement: Wie nutzt du Handy, Internet und soziale Medien? Was ist gut, was nicht so gut? Danach kannst du es der Klasse vorlesen.</span></p>` },
        { art: "merke", kopf: "USEFUL PHRASES", html: `<p><b>👍 Good things</b></p><div class="phrasen"><span>It's easy to stay in contact with …</span><span>The most useful thing is …, because …</span><span>… is better than …</span></div><p><b>👎 Not so good things</b></p><div class="phrasen"><span>… is less useful than …</span><span>The least important thing is …</span><span>… is worse than …</span></div><p><b>Devices and how often</b></p><div class="phrasen"><span>I use my phone / tablet / laptop …</span><span>every day · two times a week · at the weekend</span></div>` },
        ...[40, 60].map((min, i) => ({
          art: "schreiben", id: "statement", nur: i === 0 ? "R" : "M", tag: "Your task", titel: "My statement about social media", min,
          auftrag: `<p><b>Write your statement</b> (${min} words or more).${i === 0 ? ` <span class="de">Schreibe mindestens 40 Wörter.</span>` : ""}</p><p>Answer these questions:</p><ul><li>Which devices do you use?</li><li>What do you do online – and how often?</li><li>What is good about social media or the internet?</li><li>What is not so good?</li></ul><p>Use <b>at least two</b> comparisons with <b>more … than, less … than, the most</b> or <b>the least</b>.</p>`,
          foerder: STEIGERN,
          starter: ["I use my phone …", "Every day I …", "I think chatting is more … than …", "The most useful thing is … because …", "But … is less … than …", "The least … thing is …"],
          kriterien: ["Du nennst die Geräte, die du benutzt (phone, tablet, laptop …).", "Du sagst, was du online machst und wie oft (every day, once a week …).", "Du nennst etwas Gutes an sozialen Medien oder am Internet.", "Du nennst etwas, das nicht so gut ist.", "Du benutzt mindestens zwei Vergleiche mit more … than, less … than, the most oder the least."]
        })),
        { art: "text", html: `<p><b>Tell your class!</b> Read your statement aloud. Your classmates say: <i>I agree</i> or <i>I don't agree, because …</i> <span class="de">Lies dein Statement vor. Die anderen sagen, ob sie zustimmen.</span></p>` }
      ] },
      { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
        { art: "tf", id: "sichern", tag: "True or false?", titel: "Check what you know",
          lead: `Decide: true or false? <span class="de">Richtig oder falsch?</span>`,
          aussagen: [
            ["Kayla's class visited a Native American cultural centre.", true],
            ["Ms Carter uses social media to learn a language.", true],
            ["For Kayla, reading the news is the most important thing on her phone.", false],
            ["Long adjectives like \"useful\" get more and the most.", true],
            ["The opposite of \"the most\" is \"the least\".", true],
            ["\"More cheap\" is correct English.", false]
          ] }
      ] }
    ]),
    weiter: { text: "Well done! You can read a blog about social media, talk about what you do online, understand a survey and compare things with more, the most, less and the least." }
  });
})();
