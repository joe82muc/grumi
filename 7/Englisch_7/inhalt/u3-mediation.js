/* Englisch 7 (7R/7M) · Unit 3 Welcome to Ireland · Mediation: A star from Germany (Kürzel C14)
   (Sprachmittlung Deutsch → Englisch, mündlich gedacht: Der irische Austauschpartner Fionn sieht in der Schülerzeitung ein Foto
   einer jungen deutschen Schwimmerin und fragt nach. Das Kind liest den deutschen Steckbrief, wählt das Wichtige aus, lässt
   Unwichtiges weg, übt das Umschreiben („Ich kenne das Wort nicht – ich sage es einfach anders“) und die Redemittel und gibt
   dann in einem Gespräch mit Fionn (Sprechblasen-Kette mit KI-Prüfung) auf Englisch weiter, was er wissen will.)
   Buchprinzip (BUCH-UNIT3.md, Abschnitt „Meet a German star“, nur Aufbau, nichts übernommen): Vorentlastung durch ein Hören/Thema →
   deutscher Steckbrief einer jungen bekannten Person → Situation mit Austauschpartner (wer ist sie, wie wurde sie, was hat sie
   erreicht), Hilfswörter statt Wortliste → am Ende selbst sprechen (Möchtest du …?). Besser: Situation und Adressat werden zuerst
   geklärt, das Auswählen wird geübt (Wichtig für Fionn / weglassen), Umschreiben wird eigens geübt, das Gespräch ist eine
   Kette mit Rückfragen und KI-Rückmeldung (nicht Wort für Wort), Tipps in Stufen.
   Differenzierung: andere Fassung des Steckbriefs (R7 164 Wörter, M7 266 Wörter mit mehr Einzelheiten zum Weglassen) mit eigenen
   Zeilenangaben; Auswählen – R7 mit neun, M7 mit elf Aussagen; Gespräch – R7 mit Satzanfängen und Tipps in drei Stufen, M7 ohne
   Satzanfang und mit einem Tipp; Plus für M7 (m7): Fionn erzählt von seinem Sonntagsschwimmen im Meer, das Kind sagt es der Oma
   auf Deutsch und antwortet Fionn auf Englisch (für R7 freiwillig, mit Satzanfängen).
   LehrplanPLUS E7 Sprachmittlung (Informationen aus einem deutschen Steckbrief auswählen und auf Englisch weitergeben, Adressat und
   Situation beachten, Kommunikationsstrategie Umschreiben), E7 1.1 Leseverstehen (Steckbrief, Einzelheiten entnehmen),
   E7 1.3 Sprechen (eine Person vorstellen), E7 3 (simple present, present perfect Aussage und Frage: She has won …, Has she won any …?).
   Texte: u3-med-steckbrief-r / u3-med-steckbrief-m (deutscher Steckbrief, sprache „de“). Marie Wendt, ihr Trainer, Fionn und alle
   Angaben sind erfunden; Rosenheim und Bayern gibt es. Wörter der Unit (medal, to win, any, to train, free time, advice …) und
   Unit 1/2 (present perfect, ever) kommen bewusst vor. Förder-Links: keine (Auftrag).
   Hinweis: zeig-text.js meldet bei den deutschen Texten „sprache ist nicht en“ – gewollt (Ausgangstext ist Deutsch, wie in 9R).
   BILDER:
   1. Station „Get ready“ (Vorentlastung/Sprechanlass): Fionn (13, rote Haare, Kapuzenpulli) und ein deutscher Junge/Mädchen am
      Frühstückstisch, zwischen ihnen die aufgeschlagene Schülerzeitung mit dem Foto einer lachenden Schwimmerin mit Badekappe.
   2. Station „Say it simply“ (Umschreiben): Zeichnung eines Mädchens, das mit den Händen ein Wort „malt“ (Wasser, Welle,
      Verein), daneben Sprechblasen mit Fragezeichen.
   3. Station „Plus“: Fionn und sein Vater in Badekleidung am Strand an einem grauen Wintermorgen, dampfende Thermoskanne. */
D7Kit.seite({
  id: "u3-mediation",
  titel: "Mediation: A star from Germany",
  einleitung: "Your exchange partner <b>Fionn</b> from Ireland is staying with your family. In your school newspaper he sees a <b>photo of a young swimmer</b> – and he has lots of questions. But the article is in <b>German</b>! <b>You help Fionn</b>: you read the profile and tell him in English what is important. Du lernst, das Wichtige auszuwählen, Unwichtiges wegzulassen und ein fehlendes Wort einfach zu umschreiben – nicht Wort für Wort zu übersetzen.",
  zeit: "etwa 45 Minuten",
  ziele: ["🌉 I help a friend who doesn't understand German.", "✂️ I pick the important information and leave the rest out.", "🧩 I explain a word in a simple way when I don't know it.", "🗣️ I say: She comes from … · She has won … · She trains …"],
  thema: "Unit 3 Welcome to Ireland, Mediation: Steckbrief einer jungen Schwimmerin für den irischen Austauschpartner (Deutsch → Englisch, mündlich), Plus Englisch → Deutsch",
  quiz: { profi: "Mediation star" },
  glossar: {
    mediation: ["mediation", "Sprachmittlung: Du gibst weiter, was in einem Text oder Gespräch steht – in der anderen Sprache, für jemanden, der es nicht versteht. Nicht Wort für Wort, sondern das Wichtige."],
    medal: ["medal", "Medaille: Die Besten bei einem Wettkampf bekommen eine Gold-, Silber- oder Bronzemedaille."],
    competition: ["competition", "Wettkampf: Mehrere Sportler treten gegeneinander an, und einer gewinnt."],
    weak: ["weak", "schwach: Ein schwaches Bein hat weniger Kraft als ein starkes."],
    rolemodel: ["role model", "Vorbild: Das ist eine Person, die man gut findet und der man ähnlich sein möchte."],
    parasw: ["para swimming", "Para-Schwimmen: Das sind Schwimmwettkämpfe für Menschen mit einer Behinderung, zum Beispiel mit einem schwächeren Bein oder Arm. Die besten Para-Sportler nehmen an den Paralympics teil."],
    paraphrase: ["to explain in another way", "umschreiben: Wenn dir ein englisches Wort fehlt, sagst du in einfachen Worten, was es ist – zum Beispiel „a club where people swim together“ für „Schwimmverein“."],
    newspaper: ["school newspaper", "Schülerzeitung: Das ist eine Zeitung, die Schülerinnen und Schüler für ihre Schule machen."]
  },
  stationen: [
    { kurz: "Get ready", ober: "Station 1", titel: "You are the helper", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>breakfast with a guest</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-med-fruehstueck.jpg\" width=\"1280\" height=\"853\" alt=\"An Irish boy and a German girl at the breakfast table look at a photo of a swimmer in a school newspaper.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>Who are the two? What is the boy looking at? What could he ask? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Fionn from <b>Ireland</b> is staying with your family for two weeks. At breakfast he opens your <button class=\"term\" data-t=\"newspaper\">school newspaper</button>. There is a photo of a girl with a swimming cap and a medal. <span class=\"de\">Fionn ist zwei Wochen bei deiner Familie zu Besuch. Beim Frühstück sieht er in der Schülerzeitung das Foto eines Mädchens mit Badekappe und Medaille. Er kann kein Deutsch – und der Artikel ist auf Deutsch. Du hilfst: Du liest den Steckbrief und erzählst Fionn auf Englisch das Wichtige. Das heißt <button class=\"term\" data-t=\"mediation\">Mediation</button>.</span></p>" },
      { art: "merke", kopf: "MEDIATION – SO GEHT'S", html: "<ol><li><b>Who is it for?</b> Wer fragt? Was will er wissen?</li><li><b>Pick the important things.</b> Wer ist die Person? Was kann sie? Was hat sie erreicht?</li><li><b>Leave the rest out.</b> Nicht jede Zahl und jeder Name ist wichtig.</li><li><b>Say it simply – in English.</b> Kurze, einfache Sätze. Fehlt dir ein Wort, <button class=\"term\" data-t=\"paraphrase\">umschreibe</button> es.</li></ol>" },
      { art: "paare", id: "woerter", tag: "Words you need", titel: "Match the words", lead: "Find the pairs. <span class=\"de\">Diese Wörter brauchst du gleich im Gespräch mit Fionn.</span>",
        paare: [["swimmer", "Schwimmerin"], ["medal", "Medaille"], ["competition", "Wettkampf"], ["weak", "schwach"], ["free time", "Freizeit"], ["role model", "Vorbild"]] },
      { art: "mc", id: "situation", tag: "Think first", titel: "Who do you help – and what does he need?", lead: "Tick the best answer. <span class=\"de\">Erst die Situation klären, dann lesen.</span>",
        fragen: [
          { q: "Who do you help in this situation?", o: ["Fionn, your exchange partner from Ireland, who can't read German", "Your German teacher", "A tourist who asks the way", "Your grandma, who doesn't understand English"], a: 0,
            e: "Du vermittelst für Fionn: Er sieht den deutschen Artikel, versteht ihn aber nicht und möchte wissen, wer das Mädchen ist." },
          { q: "Was braucht Fionn, damit er die Schwimmerin versteht?", o: ["Wer sie ist, was sie macht und was sie erreicht hat – in einfachem Englisch", "Jedes Wort des Artikels als Übersetzung", "Alle Namen ihrer Familie und ihrer Haustiere", "Nur ihre Schuhgröße"], a: 0,
            e: "Fionn ist neugierig auf die Person. Eine Wort-für-Wort-Übersetzung würde ihn mit Nebensachen überladen." }
        ] }
    ] },
    { kurz: "Read", ober: "Station 2", titel: "Read and choose", teile: [
      { art: "text", html: "<p class=\"lead\">Here is the profile from the school newspaper. It is in <b>German</b>. Read it once. <span class=\"de\">Lies den Steckbrief einmal ganz. Para-Schwimmen, Wettkampf und Medaille kannst du im Glossar nachschlagen (antippen): <button class=\"term\" data-t=\"parasw\">para swimming</button> · <button class=\"term\" data-t=\"competition\">competition</button> · <button class=\"term\" data-t=\"medal\">medal</button>.</span></p>" },
      { art: "lesetext", lesetext: { R: "u3-med-steckbrief-r", M: "u3-med-steckbrief-m" } },
      { art: "mc", id: "text-gl", tag: "The main idea", titel: "What is it about?", lead: "Tick the correct answer. <span class=\"de\">Worum geht es in dem Steckbrief?</span>",
        fragen: [
          { q: "What is the text about?", o: ["A young swimmer from Bavaria", "A football match", "A school trip to Ireland", "A cooking competition"], a: 0,
            e: "Es ist ein Steckbrief über Marie Wendt, eine junge Schwimmerin aus Bayern." },
          { q: "What kind of swimmer is Marie?", o: ["A para swimmer – she swims in special races", "A swimming teacher", "A lifeguard at a lake", "A swimmer who has never won a medal"], a: 0,
            e: "Marie ist Para-Schwimmerin: Sie tritt bei Wettkämpfen für Menschen mit einer Behinderung an. Medaillen hat sie schon." }
        ] },
      { art: "text", html: "<p class=\"lead\">Fionn asks questions. Find the information first. <span class=\"de\">Fionn fragt nach. Tippe die Zeilen an, in denen die Antwort steht – so findest du das Wichtige schnell.</span></p>" },
      { art: "beleg", id: "zeilen", nur: "R", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Dann kannst du die Stelle auch angeben: (ll. 16–17).</span>", lesetext: "u3-med-steckbrief-r",
        fragen: [
          { q: "Fionn fragt: „Wie alt ist sie, und woher kommt sie?“", zeilen: [2, 2], e: "In der zweiten Zeile steht: Marie ist 15 Jahre alt und kommt aus Rosenheim in Bayern.", tipp: "Die Angaben zur Person stehen ganz am Anfang. Suche die Zahl." },
          { q: "Fionn fragt: „Wie oft trainiert sie?“", zeilen: [13, 14], e: "Im Abschnitt zum Training steht: Marie trainiert sechsmal in der Woche. Morgens um sechs Uhr schwimmt sie vor der Schule.", tipp: "Suche das Wort trainiert." }
        ],
        hilfen: ["Suche im Steckbrief den Abschnitt, der zur Frage passt (Person, Sport, Erfolge, Training, Freizeit …).", "Lies nur diesen Abschnitt, nicht den ganzen Text.", "Tippe die Zeile an, in der die Antwort steht, und prüfe dann."] },
      { art: "beleg", id: "zeilen", nur: "M", tag: "Find the lines", titel: "Where does it say that?", lead: "Tap the lines with the answer. <span class=\"de\">Dann kannst du die Stelle auch angeben: (ll. 22–23).</span>", lesetext: "u3-med-steckbrief-m",
        fragen: [
          { q: "Fionn fragt: „Wie alt ist sie, und woher kommt sie?“", zeilen: [2, 2], e: "In der zweiten Zeile steht: Marie Wendt ist 15 Jahre alt und wohnt in Rosenheim in Bayern.", tipp: "Die Angaben zur Person stehen ganz am Anfang. Suche die Zahl." },
          { q: "Fionn fragt: „Wie oft trainiert sie, und wann?“", zeilen: [17, 19], e: "Im Abschnitt zum Training steht: sechsmal in der Woche, dreimal davon schon um sechs Uhr morgens vor der Schule.", tipp: "Suche das Wort trainiert." },
          { q: "Fionn fragt: „Was ist ihr großer Traum?“", zeilen: [30, 30], e: "Weiter unten steht: Marie träumt davon, einmal bei den Paralympics zu schwimmen.", tipp: "Suche das Wort träumt." }
        ] },
      { art: "text", html: "<p class=\"lead\">Not everything is important for Fionn. <b>Sort the information.</b> <span class=\"de\">Was sollst du Fionn erzählen – und was lässt du weg? Denk daran: Er ist neugierig auf die Person, nicht auf ihr Lieblingsessen.</span></p>" },
      { art: "sort", id: "wichtig", nur: "R", tag: "Important or not?", titel: "What does Fionn need?", lead: "Put each piece of information in the right box. <span class=\"de\">Erzählen oder weglassen?</span>",
        hilfen: ["Frag dich: Sagt das etwas über die Sportlerin und ihre Erfolge – oder ist es eine Nebensache?", "Alter, Herkunft, Sportart, Medaillen und Training sind wichtig. Dazu der große Traum.", "Haustier, Trainer, Bruder und Essen kannst du weglassen."],
        buckets: ["Tell Fionn", "Leave out"],
        items: [{ t: "Marie ist 15 Jahre alt.", b: 0 }, { t: "Marie kommt aus Bayern.", b: 0 }, { t: "Sie ist Para-Schwimmerin.", b: 0 }, { t: "Sie hat schon fünf Medaillen gewonnen.", b: 0 }, { t: "Sie trainiert sechsmal in der Woche.", b: 0 },
                { t: "Ihr Hund heißt Bruno.", b: 1 }, { t: "Ihr Trainer heißt Herr Kraus.", b: 1 }, { t: "Ihr Lieblingsessen sind Käsespätzle.", b: 1 }, { t: "Ihr Bruder ist älter als sie.", b: 1 }] },
      { art: "sort", id: "wichtig", nur: "M", tag: "Important or not?", titel: "What does Fionn need?", lead: "Put each piece of information in the right box. <span class=\"de\">Erzählen oder weglassen? Fionn will wissen, wer sie ist, was sie macht und was sie erreicht hat.</span>",
        buckets: ["Tell Fionn", "Leave out"],
        items: [{ t: "Marie ist 15 und wohnt in Bayern.", b: 0 }, { t: "Sie schwimmt in Para-Wettkämpfen, weil ihr rechtes Bein schwächer ist.", b: 0 }, { t: "Im Sommer hat sie bei den deutschen Jugendmeisterschaften Gold gewonnen.", b: 0 }, { t: "Sie trainiert sechsmal in der Woche, oft schon um sechs Uhr morgens.", b: 0 }, { t: "Sie träumt davon, bei den Paralympics zu schwimmen.", b: 0 },
                { t: "Ihr Bruder spielt Fußball.", b: 1 }, { t: "Ihr Hund heißt Bruno.", b: 1 }, { t: "Ihre Schuhgröße ist 38.", b: 1 }, { t: "Ihr Trainer ist seit zehn Jahren im Verein.", b: 1 }, { t: "Ihr Lieblingsessen sind Käsespätzle.", b: 1 }, { t: "Ihr Lieblingsfach ist Biologie.", b: 1 }] },
      { art: "markieren", id: "training", tag: "Find it", titel: "What is the key information about her training?", finde: "die wichtigen Wörter (wie oft, wann)", lead: "Fionn wants to know about her training. Tap the important words. <span class=\"de\">Tippe die Wörter an, die du Fionn sagst: Wie oft? Wann?</span>",
        satz: "Marie trainiert [[sechsmal in der Woche]], oft [[morgens um sechs Uhr]] vor der Schule. Ihr Hund Bruno wartet zu Hause auf sie.", toleranz: 1,
        e: "Für Fionn zählen: sechsmal in der Woche und morgens um sechs Uhr. Der Hund ist eine Nebensache.",
        hilfen: ["Zwei Dinge will Fionn wissen: wie oft und wann.", "Wie oft: eine Zahl und ein Zeitraum. Wann: eine Uhrzeit.", "Suche: sechsmal in der Woche · morgens um sechs Uhr"] }
    ] },
    { kurz: "Say it simply", ober: "Station 3", titel: "Explain it in simple English", teile: [
      { art: "text", html: "<p class=\"lead\"><b>A word is missing?</b> <span class=\"de\">Du kennst bei manchen deutschen Wörtern das englische Wort nicht – das ist normal. Gute Sprachmittler geben nicht auf: Sie sagen es in einfachen Worten. Das heißt <button class=\"term\" data-t=\"paraphrase\">umschreiben</button>.</span></p>" },
      { art: "merke", kopf: "I DON'T KNOW THE WORD – SO I EXPLAIN IT", html: "<div class=\"phrasen\"><span>It's a person who …</span><span>It's a place where …</span><span>It's something you …</span><span>It's like a … but …</span></div><p>Beispiel für „Bäckerei“: <b>It's a shop where you buy bread.</b></p>" },
      { art: "paare", id: "umschreiben", tag: "Say it another way", titel: "German word – simple explanation", lead: "Find the pairs. <span class=\"de\">Welche einfache englische Erklärung passt zu dem deutschen Wort?</span>",
        paare: [["Schwimmverein", "a club where people swim and train together"], ["Vorbild", "a person you want to be like"], ["Rückenschwimmen", "swimming on your back"], ["Jugendmeisterschaft", "a big race for young people"], ["Para-Schwimmerin", "a swimmer with a weaker leg or arm"]] },
      { art: "mc", id: "umschreiben-mc", tag: "Say it another way", titel: "What do you say to Fionn?", lead: "Tick the best answer. <span class=\"de\">Du kennst das englische Wort nicht. Was ist am besten?</span>",
        fragen: [
          { q: "You don't know the English word for \"Wettkampf\". What do you say?", o: ["It's a day when swimmers race against each other.", "I say the German word very loudly.", "I say nothing and look at the table.", "It's a big competition-day-party."], a: 0,
            e: "Du erklärst es in einfachen Worten: Was passiert dort? Wer macht was? So versteht Fionn dich auch ohne das Wort." },
          { q: "Which explanation helps Fionn most?", o: ["A club is a place where people do sport together.", "A club is a thing for the hand.", "A club is a German word.", "A club is a strong, big cake."], a: 0,
            e: "Gut umschreiben heißt: einfach und sachlich sagen, was etwas ist oder wo man es findet." }
        ] },
      { art: "merke", kopf: "SAY IT IN ENGLISH – HELPFUL PHRASES", html: "<div class=\"phrasen\"><span>Felix comes from Munich.</span><span>He is twelve years old.</span><span>He has scored ten goals this year.</span><span>He plays every Friday.</span><span>His dream is to be a doctor.</span><span>He says: \"…\"</span></div><p>Present perfect: <b>has/have + 3. Form</b> – du sagst, was jemand schon geschafft hat.</p>" },
      { art: "luecke", id: "phrasen", tag: "In English", titel: "Tell Fionn about Marie", lead: "Fill in the gaps. <span class=\"de\">Ergänze die englischen Sätze über Marie. Zwei Wörter bleiben übrig.</span>",
        absaetze: [
          ["Marie ", { g: "comes" }, " from Rosenheim in Bavaria."],
          ["She ", { g: "is" }, " fifteen years old."],
          ["She ", { g: "has won" }, " five medals."],
          ["She ", { g: "trains" }, " six times a week."],
          ["Her ", { g: "dream" }, " is to swim at the Paralympics."]
        ], extra: ["live", "winning"] },
      { art: "mc", id: "pp-mc", tag: "Language", titel: "Has she won any medals?", lead: "Tick the correct answer. <span class=\"de\">Present perfect: Frage und Kurzantwort.</span>",
        fragen: [
          { q: "Fionn asks: \"Has she won any medals?\" Marie has won five. What do you say?", o: ["Yes, she has.", "Yes, she is.", "Yes, she does.", "Yes, she have."], a: 0,
            e: "Auf eine Frage mit Has antwortest du mit has: Yes, she has. / No, she hasn't." }
        ] }
    ] },
    { kurz: "Talk to Fionn", ober: "Station 4", titel: "Tell Fionn about Marie", teile: [
      { art: "text", html: "<p class=\"lead\"><b>Now it's your turn.</b> Fionn looks at the photo and asks you questions. Answer in English – short and simple. <span class=\"de\">Nach jeder Sprechblase schreibst du deine Antwort auf Englisch, so wie du sie Fionn sagen würdest. Wähle, was wichtig ist, und lass Unwichtiges weg. Fehlt dir ein Wort, umschreibe es. Brauchst du Hilfe? Tippe auf „💡 Tipp“. Die nächste Sprechblase kommt, wenn dein Beitrag geprüft ist.</span></p>" },
      { art: "kette", id: "fionn", nur: "R", tag: "Mediation · AI check", titel: "Tell Fionn about Marie Wendt", lead: "Write your part in English. <span class=\"de\">Sag es kurz und einfach. Der Satzanfang und die Tipps helfen dir.</span>",
        thema: "Sprachmittlung Deutsch → Englisch (Englisch 7, Mittelschule): Das Kind gibt dem irischen Austauschpartner Fionn aus einem deutschen Steckbrief über die junge Para-Schwimmerin Marie Wendt weiter, wer sie ist, was Para-Schwimmen bedeutet, was sie gewonnen hat, wie oft sie trainiert und was sie in der Freizeit macht",
        rollen: { a: { name: "Fionn", ic: "🧑" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Hey, who is the girl in your school newspaper? She has a medal. Is she famous?" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn who she is. <span class=\"de\">Sag Fionn: Wie heißt sie, wie alt ist sie, woher kommt sie und was macht sie?</span>", start: "Her name is",
            kriterien: ["nennt den Namen: Marie Wendt (Marie genügt)", "Alter: 15", "Herkunft: Bayern (Rosenheim) oder Deutschland", "Sport: sie ist Schwimmerin"],
            m: "Her name is Marie Wendt. She is fifteen and she comes from Bavaria in Germany. She is a swimmer.", k: ["marie|wendt|name", "15|fifteen", "bavaria|rosenheim|germany", "swim"],
            tipps: ["Vier Dinge für Fionn: <b>Name</b> – <b>Alter</b> – <b>woher</b> – <b>was sie macht</b>.", "Name = name · 15 = fifteen · Bayern = Bavaria · Schwimmerin = swimmer · sie kommt aus = she comes from", "Her name is Marie Wendt. She is … years old. She comes from … She is a …"] },
          { von: "a", text: "Cool! Next to the photo it says \"Para-Schwimmerin\". What's a para swimmer? I don't know the word." },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Explain \"para swimmer\" in simple English. <span class=\"de\">Umschreibe „Para-Schwimmerin“: Was ist das? Und was ist bei Marie besonders?</span>", start: "Para swimmers",
            kriterien: ["erklärt einfach: besondere Wettkämpfe für Menschen mit einem schwächeren Körper / einer Behinderung", "nennt, dass Leas rechtes Bein schwächer ist"],
            m: "Para swimmers swim in special races for people with a weaker body. Marie's right leg is weaker, so she swims in these races.", k: ["special|race|competition|compet", "leg|body|arm|disab|weak|differen"],
            tipps: ["Du musst das Wort nicht kennen. Sag, <b>was es ist</b>: besondere Rennen für Leute mit einem schwächeren Körper.", "Rennen = races · besondere = special · Bein = leg · schwächer = weaker · rechts = right", "Para swimmers swim in special races for people with … Marie's right leg is …"] },
          { von: "a", text: "Oh, I see! Cool. Has she won any medals?" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn about her medals. <span class=\"de\">Sag Fionn, was sie schon gewonnen hat. Nutze das present perfect (has won).</span>", start: "Yes, she has",
            kriterien: ["sagt, dass sie Medaillen gewonnen hat (present perfect: has won)", "nennt fünf Medaillen insgesamt oder Gold im Sommer bei den deutschen Jugendmeisterschaften"],
            m: "Yes, she has. She has won five medals. In the summer she won gold at the German youth championships.", k: ["won|win|medal", "five|5|gold|summer|championship"],
            tipps: ["Zwei Dinge: <b>dass</b> sie gewonnen hat und <b>was</b> (wie viele oder Gold im Sommer).", "gewonnen = won · Medaille = medal · fünf = five · Gold = gold · Im Sommer = in the summer", "Yes, she has. She has won … medals. In the summer she won …"] },
          { von: "a", text: "Wow! How often does she train? She must be tired at school!" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn how often she trains. <span class=\"de\">Sag Fionn, wie oft sie trainiert und wann sie vor der Schule schwimmt.</span>", start: "She trains",
            kriterien: ["wie oft: sechsmal in der Woche", "wann: früh am Morgen vor der Schule (um sechs Uhr)"],
            m: "She trains six times a week. She swims at six o'clock in the morning before school.", k: ["six|6", "week|every|times", "morning|six|before school|early"],
            tipps: ["Zwei Dinge: <b>wie oft</b> und <b>wann</b>.", "sechsmal in der Woche = six times a week · morgens = in the morning · vor der Schule = before school", "She trains … times a week. She swims at … in the morning before school."] },
          { von: "a", text: "That's hard work! What does she do in her free time? And what does she say about swimming?" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn about her free time and what she says. <span class=\"de\">Sag Fionn ein Hobby von Marie und was sie über das Schwimmen sagt (Zitat).</span>", start: "She likes",
            kriterien: ["nennt mindestens ein Hobby (lesen, Gitarre, wandern)", "gibt ihr Zitat sinngemäß weiter: Im Wasser fühlt sie sich frei, das Bein ist kein Problem"],
            m: "She likes reading, playing the guitar and hiking with her grandad. She says: In the water I feel free.", k: ["read|guitar|hik|walk|music|book", "free|feels|feel|water|says|quote"],
            tipps: ["Zwei Dinge: <b>ein Hobby</b> (oder mehrere) und <b>ihr Satz</b> über das Wasser.", "lesen = reading · Gitarre spielen = playing the guitar · wandern = hiking · frei = free · Wasser = water", "She likes … She says: In the water she feels …"] },
          { von: "a", text: "Cool! Thanks for telling me. I want to watch her swim one day!" }
        ] },
      { art: "kette", id: "fionn", nur: "M", tag: "Mediation · AI check", titel: "Tell Fionn about Marie Wendt", lead: "Write your part in English. <span class=\"de\">Wie in einem echten Gespräch: kurz, einfach und nur das Wichtige. Fehlt dir ein Wort, umschreibe es. Bei Bedarf hilft dir ein Tipp.</span>",
        thema: "Sprachmittlung Deutsch → Englisch (Englisch 7, Mittelschule): Das Kind gibt dem irischen Austauschpartner Fionn aus einem deutschen Steckbrief über die junge Para-Schwimmerin Marie Wendt weiter, wer sie ist, was Para-Schwimmen bedeutet, was sie gewonnen hat, wie oft sie trainiert und was sie in der Freizeit macht",
        rollen: { a: { name: "Fionn", ic: "🧑" }, du: { name: "You" } },
        schritte: [
          { von: "a", text: "Hey, who is the girl in your school newspaper? She has a medal. Is she famous?" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn who she is.",
            kriterien: ["nennt den Namen: Marie Wendt (Marie genügt)", "Alter: 15", "Herkunft: Bayern (Rosenheim) oder Deutschland", "Sport: sie ist Schwimmerin"],
            m: "Her name is Marie Wendt. She is fifteen and she comes from Bavaria in Germany. She is a swimmer.", k: ["marie|wendt|name", "15|fifteen", "bavaria|rosenheim|germany", "swim"],
            tipps: ["Vier Dinge für Fionn: <b>Name</b> – <b>Alter</b> – <b>woher</b> – <b>was sie macht</b>."] },
          { von: "a", text: "Cool! Next to the photo it says \"Para-Schwimmerin\". What's a para swimmer? I don't know the word." },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Explain \"para swimmer\" in simple English.",
            kriterien: ["erklärt einfach: besondere Wettkämpfe für Menschen mit einem schwächeren Körper / einer Behinderung", "nennt, dass Leas rechtes Bein schwächer ist"],
            m: "Para swimmers swim in special races for people with a weaker body. Marie's right leg is weaker, so she swims in her own class.", k: ["special|race|competition|compet|class", "leg|body|arm|disab|weak|differen"],
            tipps: ["Du musst das Wort nicht kennen. Sag, <b>was es ist</b>, und <b>was bei Marie so ist</b>."] },
          { von: "a", text: "Oh, I see! Cool. Has she won any medals?" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn about her medals.",
            kriterien: ["sagt, dass sie Medaillen gewonnen hat (present perfect: has won)", "nennt fünf Medaillen insgesamt oder Gold im Sommer bei den deutschen Jugendmeisterschaften"],
            m: "Yes, she has. She has won five medals. This summer she won gold at the German youth championships.", k: ["won|win|medal", "five|5|gold|summer|championship"],
            tipps: ["Zwei Dinge: <b>dass</b> sie gewonnen hat und <b>was</b>."] },
          { von: "a", text: "Wow! How often does she train? She must be tired at school!" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn how often she trains.",
            kriterien: ["wie oft: sechsmal in der Woche", "wann: früh am Morgen vor der Schule (um sechs Uhr)"],
            m: "She trains six times a week. Three times she swims at six o'clock in the morning before school.", k: ["six|6", "week|every|times", "morning|six|before school|early"],
            tipps: ["Zwei Dinge: <b>wie oft</b> und <b>wann</b>."] },
          { von: "a", text: "That's hard work! What does she do in her free time? And what does she say about swimming?" },
          { an: "a", sprache: "en", ueber: "She", auftrag: "Tell Fionn about her free time and what she says about swimming.",
            kriterien: ["nennt mindestens ein Hobby (lesen, Gitarre, wandern)", "gibt ihr Zitat sinngemäß weiter: Im Wasser fühlt sie sich frei, das Bein ist kein Problem"],
            m: "She likes reading crime stories, playing the guitar and hiking with her grandad. She says: In the water I feel free. My leg isn't a problem.", k: ["read|guitar|hik|walk|music|book", "free|feels|feel|water|says|quote"],
            tipps: ["Zwei Dinge: <b>ein Hobby</b> (oder mehrere) und <b>ihr Satz</b> über das Wasser."] },
          { von: "a", text: "Cool! Thanks for telling me. I want to watch her swim one day!" }
        ] }
    ] },
    { kurz: "Plus", ober: "Station 5 · Plus", titel: "Fionn tells a story", teile: [
      { art: "text", html: "<p class=\"lead\">Look at the picture: <b>a swim in the sea in winter</b>. <span class=\"de\">Tippe das Bild an, um es zu vergrößern.</span></p><figure style=\"margin:0 0 6px;max-width:100%\"><img class=\"zoomable\" src=\"images/u3/u3-med-winterbad.jpg\" width=\"1280\" height=\"853\" alt=\"A boy and his father come out of the cold sea on a grey winter morning; a thermos and two steaming cups wait on a rock.\" loading=\"lazy\" style=\"width:100%;height:auto;border-radius:14px\"></figure><p>What are the two doing? Would you swim in the sea in winter? <span class=\"de\">Sprich mit einer Partnerin oder einem Partner – oder überlege für dich.</span></p>" },
      { art: "text", html: "<p class=\"lead\">Now it is the other way round. <b>Fionn tells a story – and your grandma is in the room.</b> <span class=\"de\">Plus-Aufgabe (für M7 Pflicht, für R7 freiwillig): Jetzt vermittelst du in beide Richtungen. Fionn erzählt etwas auf Englisch, und deine Oma versteht es nicht. Du sagst es ihr auf Deutsch. Dann fragt Fionn dich etwas, und du antwortest ihm auf Englisch.</span></p>" },
      { art: "kette", id: "oma", nur: "R", m7: true, tag: "Plus · AI check", titel: "Fionn, Oma and you", lead: "Write your part. <span class=\"de\">Die Satzanfänge und Tipps helfen dir.</span>",
        thema: "Sprachmittlung in beide Richtungen (Englisch 7, Mittelschule): Der irische Austauschpartner Fionn erzählt, dass er mit seinem Vater sonntags im Meer schwimmt; das Kind gibt es der Oma auf Deutsch weiter und antwortet Fionn auf Englisch",
        rollen: { a: { name: "Oma", ic: "👵" }, b: { name: "Fionn", ic: "🧑" }, du: { name: "You" } },
        schritte: [
          { von: "b", text: "In Ireland my dad and I swim in the sea every Sunday – even in winter! The water is only eight degrees, but afterwards we have a hot chocolate." },
          { von: "a", text: "Was erzählt Fionn denn da? Ich habe nichts verstanden." },
          { an: "a", sprache: "de", auftrag: "Tell Oma in German. <span class=\"de\">Sag Oma auf Deutsch, was Fionn erzählt hat.</span>", start: "Fionn schwimmt",
            kriterien: ["Fionn schwimmt sonntags mit seinem Vater im Meer", "auch im Winter, das Wasser ist nur etwa acht Grad kalt"],
            m: "Fionn schwimmt jeden Sonntag mit seinem Papa im Meer, sogar im Winter. Das Wasser ist nur acht Grad kalt, aber danach gibt es eine heiße Schokolade.", k: ["sonntag", "meer|see", "winter|kalt|acht|8"],
            tipps: ["Drei Dinge: <b>wann</b> – <b>wo</b> – <b>wie kalt</b>.", "every Sunday = jeden Sonntag · in the sea = im Meer · even in winter = sogar im Winter · eight degrees = acht Grad"] },
          { von: "b", text: "Do you swim outside in Germany, too?" },
          { an: "b", sprache: "en", auftrag: "Answer Fionn in English. <span class=\"de\">Antworte Fionn auf Englisch: Schwimmt ihr draußen? Wo?</span>", start: "Yes, a little",
            kriterien: ["beantwortet die Frage (ja, nein, manchmal)", "nennt einen Ort zum Schwimmen (See, Schwimmbad, Freibad, Fluss)"],
            m: "Yes, a little. In summer we swim in the lake near our town, but in winter I go to the pool.", k: ["yes|no|sometimes|a little", "lake|pool|river|swimming|outdoor|bath|sea"],
            tipps: ["Zwei Dinge: <b>ja oder nein</b> – <b>wo</b> du schwimmst.", "See = lake · Schwimmbad = swimming pool · im Sommer = in summer · im Winter = in winter"] },
          { von: "a", text: "Na, der ist ja ganz schön tapfer. Das Wasser im Meer wäre mir viel zu kalt." }
        ] },
      { art: "kette", id: "oma", nur: "M", m7: true, tag: "Plus · AI check", titel: "Fionn, Oma and you", lead: "Write your part. <span class=\"de\">Du vermittelst in beide Richtungen – ohne Satzanfang, bei Bedarf mit einem Tipp.</span>",
        thema: "Sprachmittlung in beide Richtungen (Englisch 7, Mittelschule): Der irische Austauschpartner Fionn erzählt, dass er mit seinem Vater sonntags im Meer schwimmt; das Kind gibt es der Oma auf Deutsch weiter und antwortet Fionn auf Englisch",
        rollen: { a: { name: "Oma", ic: "👵" }, b: { name: "Fionn", ic: "🧑" }, du: { name: "You" } },
        schritte: [
          { von: "b", text: "In Ireland my dad and I swim in the sea every Sunday – even in winter! The water is only eight degrees, but afterwards we have a hot chocolate." },
          { von: "a", text: "Was erzählt Fionn denn da? Ich habe nichts verstanden." },
          { an: "a", sprache: "de", auftrag: "Tell Oma in German what Fionn said.",
            kriterien: ["Fionn schwimmt sonntags mit seinem Vater im Meer", "auch im Winter, das Wasser ist nur etwa acht Grad kalt"],
            m: "Fionn schwimmt jeden Sonntag mit seinem Papa im Meer, sogar im Winter. Das Wasser ist nur acht Grad kalt, aber danach gibt es eine heiße Schokolade.", k: ["sonntag", "meer|see", "winter|kalt|acht|8"],
            tipps: ["Drei Dinge: <b>wann</b> – <b>wo</b> – <b>wie kalt</b>."] },
          { von: "b", text: "Do you swim outside in Germany, too?" },
          { an: "b", sprache: "en", auftrag: "Answer Fionn in English.",
            kriterien: ["beantwortet die Frage (ja, nein, manchmal)", "nennt einen Ort zum Schwimmen (See, Schwimmbad, Freibad, Fluss)"],
            m: "Yes, a little. In summer we swim in the lake near our town, but in winter I go to the pool.", k: ["yes|no|sometimes|a little", "lake|pool|river|swimming|outdoor|bath|sea"],
            tipps: ["Zwei Dinge: <b>ja oder nein</b> – <b>wo</b> du schwimmst."] },
          { von: "a", text: "Na, der ist ja ganz schön tapfer. Das Wasser im Meer wäre mir viel zu kalt." }
        ] }
    ] },
    { kurz: "Check", ober: "Kurz sichern", titel: "Sum it up", teile: [
      { art: "tf", id: "regeln", tag: "True or false?", titel: "How do you help?", lead: "Tick true or false. <span class=\"de\">Richtig oder falsch?</span>",
        aussagen: [
          ["In a mediation you translate every word of the text.", false],
          ["You choose the information that your friend wants to know.", true],
          ["If you don't know a word, you can explain it in simple English.", true],
          ["Details like the name of a pet belong in every summary.", false],
          ["Short, simple sentences are fine.", true]
        ] }
    ] }
  ],
  weiter: { text: "Well done! You can read a German profile, choose what matters, leave the rest out and say it simply in English for a friend – and when a word is missing, you explain it in another way." }
});
