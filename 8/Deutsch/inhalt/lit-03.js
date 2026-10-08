/* Deutsch 8 · Literatur und Textanalyse · Modul 3: Erzählperspektive, Raum und Zeit
   (Ich-Erzähler und Er-Erzähler, Innen- und Außensicht, Raumgestaltung und Stimmung, Zeitdehnung und Zeitraffung;
   Perspektive wechseln; Schreibtrainer: einen Abschnitt aus der Sicht der anderen Figur erzählen)
   LehrplanPLUS D8 2.2 (Erzählperspektive, Raum- und Zeitgestaltung als Gestaltungsmittel erkennen und in ihrer Wirkung
   beschreiben; M8: Wirkung begründen und am Text belegen).
   Texte: „Nachtwanderung“ (texte/literatur/nachtwanderung-r.js und -m.js) – eigener Erzähltext, zwei Teile:
   Teil 1 Ich-Erzählerin Selin (Innensicht), Teil 2 Er-Erzähler (Außensicht, Tobias und Selin).
   R8 437 Wörter, 51 Zeilen · M8 578 Wörter, 65 Zeilen. Alle Zeilenangaben unten nach zeig-text.js. */
D7Kit.seite({
  id: "lit-03",
  titel: "Erzählperspektive, Raum und Zeit",
  einleitung: "Dieselbe Nacht, derselbe Weg, dieselben Kinder – und doch erzählt jeder Text sie anders. Heute siehst du dir an, wer erzählt, wie nah der Erzähler den Figuren kommt und wie ein Text mit Raum und Zeit Stimmung macht.",
  zeit: "etwa 45 Minuten",
  ziele: ["🗣️ Ich unterscheide Ich-Erzähler und Er-Erzähler.", "👁️ Ich erkenne Innen- und Außensicht am Text.", "🌲 Ich beschreibe, wie Raum und Zeit Stimmung erzeugen.", "✍️ Ich erzähle einen Abschnitt aus der Sicht einer anderen Figur."],
  haupttext: { R: "lit-nacht-r", M: "lit-nacht-m" },
  quiz: { profi: "Perspektiven-Profi" },
  glossar: {
    perspektive: ["Erzählperspektive", "Der Blickwinkel, aus dem erzählt wird: Wer erzählt, und was kann er wissen?"],
    icherzaehler: ["Ich-Erzähler", "Eine Figur der Geschichte erzählt selbst und sagt „ich“. Man erlebt alles so, wie sie es erlebt."],
    ererzaehler: ["Er-Erzähler", "Der Erzähler gehört nicht zur Handlung und berichtet von den Figuren mit „er“, „sie“ und ihren Namen."],
    innensicht: ["Innensicht", "Der Text zeigt, was in einer Figur vorgeht: Gedanken, Gefühle, Wünsche, Ängste."],
    aussensicht: ["Außensicht", "Der Text berichtet nur, was man sehen und hören kann. Gefühle muss man aus dem Verhalten erschließen."],
    raum: ["Raumgestaltung", "Wie ein Ort beschrieben wird: Licht, Geräusche, Geruch, Enge oder Weite. Der Raum kann Stimmung machen."],
    stimmung: ["Stimmung", "Das Gefühl, das ein Text beim Lesen auslöst, zum Beispiel Unruhe, Spannung oder Erleichterung."],
    dehnung: ["Zeitdehnung", "Ein kurzer Augenblick wird sehr ausführlich erzählt. Die Erzählzeit ist länger als die erzählte Zeit."],
    raffung: ["Zeitraffung", "Eine lange Zeitspanne wird in wenigen Sätzen zusammengefasst. Die Erzählzeit ist kürzer als die erzählte Zeit."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Zwei Teile, ein Weg im Dunkeln", teile: [
      { art: "text", html: "<p class=\"lead\">Lies „Nachtwanderung“ ganz. Der Text hat zwei Teile. Beide spielen auf demselben Waldweg – aber jemand anderes erzählt. Achte darauf, was du jeweils über Selin erfährst.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lesetext: { R: "lit-nacht-r", M: "lit-nacht-m" } },
      { art: "mc", id: "erst", tag: "Wer erzählt?", fragen: [
        { q: "Wer erzählt Teil 1?", o: ["Selin selbst, in der Ich-Form", "Tobias, der hinter ihr geht", "Frau Kerner, die alles überblickt", "ein Erzähler, der außerhalb der Handlung steht"], a: 0, e: "„Ich ging als Vorletzte, gleich vor Tobias“ – wer „ich“ sagt und vor Tobias geht, ist Selin. Das nennt man einen <button class=\"term\" data-t=\"icherzaehler\">Ich-Erzähler</button>." },
        { q: "Woran erkennst du, dass Teil 2 einen Er-Erzähler hat?", o: ["Der Erzähler spricht von Tobias und Selin mit „er“ und „sie“ und kommt selbst nicht vor.", "Die Sätze sind in Teil 2 kürzer als in Teil 1.", "In Teil 2 reden die Figuren, in Teil 1 nicht.", "Teil 2 spielt am Tag, Teil 1 spielt in der Nacht."], a: 0, e: "Ein <button class=\"term\" data-t=\"ererzaehler\">Er-Erzähler</button> steht außerhalb der Geschichte. Satzlänge oder wörtliche Rede verraten die Erzählform nicht – entscheidend ist, wer „spricht“." }
      ] },
      { art: "merke", kopf: "MERKE: ERZÄHLPERSPEKTIVE", html: "<ul><li><b>Ich-Erzähler:</b> Eine Figur erzählt selbst („ich“). Nähe, aber auch ein begrenzter Blick: Sie weiß nur, was sie selbst erlebt.</li><li><b>Er-Erzähler:</b> Jemand außerhalb erzählt von den Figuren („er“, „sie“). Er kann mehr zeigen, aber auch auf Abstand bleiben.</li></ul><p>Die <button class=\"term\" data-t=\"perspektive\">Erzählperspektive</button> bestimmt, was die Leser erfahren – und wie nah sie den Figuren kommen.</p>" },
      { art: "sort", id: "pers", tag: "Sortieren", titel: "Ich-Erzähler oder Er-Erzähler?", lead: "Aus welchem Teil könnte der Satz stammen?", buckets: ["Teil 1 (Ich-Erzählerin)", "Teil 2 (Er-Erzähler)"], cols: 240, items: [
        { t: "Ich wollte rufen, aber meine Stimme gehörte mir nicht mehr.", b: 0 },
        { t: "Ich hielt den Atem an und zählte.", b: 0 },
        { t: "Ich ging als Vorletzte, gleich vor Tobias.", b: 0 },
        { t: "Er richtete den Lichtkegel auf den Boden.", b: 1 },
        { t: "Selin nickte.", b: 1 },
        { t: "Frau Kerner zählte kurz durch und nickte.", b: 1 }],
        hilfen: ["Suche in jedem Satz nach „ich“, „mein“ oder „mir“ – oder nach „er“, „sie“ und Namen.", "„Ich“, „mir“, „mein“: Teil 1. Namen und „er“: Teil 2."] }
    ] },
    { kurz: "Innen und außen", ober: "Verstehen", titel: "Wie nah kommt der Erzähler den Figuren?", teile: [
      { art: "text", html: "<p>Eine zweite Frage: <b>Was darf der Erzähler zeigen?</b> Bei der <button class=\"term\" data-t=\"innensicht\">Innensicht</button> erfährst du, was eine Figur denkt und fühlt. Bei der <button class=\"term\" data-t=\"aussensicht\">Außensicht</button> bekommst du nur zu sehen und zu hören, was auch eine Kamera aufnehmen würde. Beides gibt es bei Ich- und bei Er-Erzählern.</p>" },
      { art: "sort", id: "innen", tag: "Sortieren", titel: "Innensicht oder Außensicht?", lead: "Kann man das sehen oder hören – oder geschieht es nur im Kopf der Figur?", buckets: ["Innensicht", "Außensicht"], cols: 240, items: [
        { t: "Ich weiß nicht, warum ich stehen blieb.", b: 0 },
        { t: "Das Knacken kam näher, oder ich bildete es mir nur ein.", b: 0 },
        { t: "Sie schämte sich, dass er sie so sah.", b: 0 },
        { t: "Die Schultern zuckten, als er die Lampe einschaltete.", b: 1 },
        { t: "Selin zuckte bei jedem Geräusch zusammen.", b: 1 },
        { t: "Der Strahl zeigte Wurzeln und Tannennadeln.", b: 1 }],
        hilfen: ["Frage dich: Könnte jemand, der danebensteht, das wahrnehmen?", "Auch ein Er-Erzähler kann Gedanken zeigen, zum Beispiel mit „sie schämte sich“. Das ist trotzdem Innensicht."] },
      { art: "markieren", id: "mark", tag: "Markieren", titel: "Welche Wörter blicken in den Kopf?", satz: "Tobias [[sah]] die Arme, die eng am Körper lagen. Selin [[fühlte]], wie ihr Herz raste, und [[wünschte]], sie wäre schon auf der Lichtung.", finde: "die zwei Verben, die zeigen, was in Selin vorgeht", e: "„fühlte“ und „wünschte“ nennen Innenleben, das niemand sieht. „sah“ beschreibt, was man von außen wahrnimmt." },
      { art: "mc", id: "innen", tag: "Wirkung der Sicht", fragen: [
        { q: "Warum erfährst du in Teil 2 nicht, wovor Selin Angst hat?", o: ["Der Erzähler berichtet nur, was man sehen und hören kann.", "Der Erzähler kennt Selin nicht gut genug.", "Tobias will es für sich behalten.", "Der Text ist an dieser Stelle zu kurz."], a: 0, e: "Teil 2 bleibt bei der Außensicht: Er beschreibt Körper, Licht und Geräusche. Was Selin fühlt, musst du aus ihrem Verhalten schließen." },
        { q: "Was wissen die Leser nach Teil 1 mehr als Tobias?", o: ["Sie wissen, wie Selin sich fühlt und warum sie stehen bleibt.", "Sie wissen, wie der Weg zur Lichtung weitergeht.", "Sie wissen, was Frau Kerner den anderen sagt.", "Sie wissen, wie lange Tobias schon wartet."], a: 0, e: "Selin erzählt aus ihrem Kopf heraus. Tobias sieht nur, dass sie stehen bleibt." }
      ] },
      { art: "beleg", id: "innenbeleg", nur: "R", tag: "Am Text nachweisen", titel: "Wo zeigt sich die Sicht?", lesetext: "lit-nacht-r", fragen: [
        { q: "Wo erfährst du in Teil 1, dass Selin ihren eigenen Herzschlag hört?", zeilen: [2, 3], e: "„… aber ich hörte trotzdem mein Herz.“ Nur Selin selbst kann das wissen – ein Beispiel für Innensicht und Ich-Erzählung.", tipp: "Suche im ersten Absatz nach dem Wort „Herz“." },
        { q: "Wo beschreibt der Er-Erzähler nur Selins Körper, nicht ihre Gedanken?", zeilen: [28, 29], e: "Kopf drehen und Schultern zucken: Das sieht Tobias. Was Selin dabei fühlt, bleibt offen.", tipp: "Lies den Absatz nach „Selin?“, sagte er leise." }] },
      { art: "beleg", id: "innenbeleg", nur: "M", tag: "Am Text nachweisen", titel: "Wo zeigt sich die Sicht?", lesetext: "lit-nacht-m", fragen: [
        { q: "Wo erfährst du in Teil 1, dass Selin ihren eigenen Herzschlag hört?", zeilen: [3, 4], e: "„… doch ich hörte, wie mein Herz die Sekunden zählte.“ Nur Selin selbst kann das wissen – ein Beispiel für Innensicht und Ich-Erzählung.", tipp: "Suche im ersten Absatz nach dem Wort „Herz“." },
        { q: "Wo beschreibt der Er-Erzähler nur Selins Körper, nicht ihre Gedanken?", zeilen: [38, 39], e: "Kopf drehen und Schultern zucken: Das sieht Tobias. Was Selin dabei fühlt, bleibt offen.", tipp: "Lies den Absatz nach „Selin?“, sagte er leise." }] },
      { art: "mc", id: "wirkinnen", m7: true, tag: "Wirkung deuten", fragen: [
        { q: "Teil 2 nennt Selins Gefühle nie, sondern zeigt nur, wie sie wirkt. Welche Wirkung hat das auf die Leser?", o: ["Sie müssen Selins Angst selbst aus ihrem Verhalten erschließen und fühlen sich ihr dadurch nahe.", "Sie verlieren das Interesse an Selin, weil sie nichts Persönliches mehr erfahren.", "Sie verstehen Tobias jetzt besser, weil seine Gedanken ausführlich erzählt werden.", "Sie erfahren sicherer als in Teil 1, was Selin tatsächlich empfindet."], a: 0, e: "Außensicht verlangt Mitdenken: Wer sieht, dass Selin die Arme an den Körper presst und nicht antwortet, schließt selbst auf Angst. Gerade das kann die Anteilnahme verstärken. Sicherer als in Selins eigenem Bericht ist dieses Wissen aber nicht." }
      ] }
    ] },
    { kurz: "Raum", ober: "Untersuchen", titel: "Wie ein Ort Stimmung macht", teile: [
      { art: "text", html: "<p>Der Wald ist in diesem Text mehr als Kulisse. Wie ein Ort beschrieben wird – dunkel oder hell, eng oder weit, laut oder still –, macht <button class=\"term\" data-t=\"stimmung\">Stimmung</button>. Man nennt das <button class=\"term\" data-t=\"raum\">Raumgestaltung</button>.</p>" },
      { art: "paare", id: "raumpaare", tag: "Zuordnen", titel: "Welche Beschreibung, welche Wirkung?", lead: "Verbinde die Ortsangabe mit der Stimmung, die sie erzeugt.", paare: [
        ["Die Tannen stehen so dicht, dass kein Stern hindurchkommt.", "Enge und Bedrohung: kein Ausweg, kein Licht"],
        ["Der Weg ist schmal wie ein Flur ohne Wände.", "Unsicherheit: nichts gibt Halt oder Orientierung"],
        ["Die Dunkelheit riecht nach nassem Moos und kaltem Stein.", "Kälte und Fremdheit: man spürt den Ort mit allen Sinnen"],
        ["Die Wolken reißen auf, und die ersten Sterne blinken.", "Entspannung und Hoffnung: der Raum wird offen"]] },
      { art: "mc", id: "raum", tag: "Raum und Stimmung", fragen: [
        { q: "Der Weg ist „schmal wie ein Flur ohne Wände“. Welche Wirkung hat dieser Vergleich?", o: ["Er wirkt unsicher: Selin findet keinen Halt und sieht nicht, wohin sie geht.", "Er wirkt vertraut, denn einen Flur kennt jeder von zu Hause.", "Er zeigt, dass der Weg gerade und gut ausgebaut ist.", "Er zeigt, dass die Gruppe im Haus unterwegs ist."], a: 0, e: "Ein Flur ist sonst ein sicherer Ort mit Wänden. Hier fehlen sie. Der Vergleich verbindet Vertrautes mit einer fremden, unsicheren Lage." },
        { q: "Wodurch ändert sich die Stimmung am Ende des Textes?", o: ["Der Raum wird offen und hell: Lichtung, aufreißende Wolken, Sterne.", "Die Gruppe wird lauter und singt ein Lied.", "Der Wald wird dichter und der Weg schmaler.", "Frau Kerner schaltet alle Taschenlampen wieder an."], a: 0, e: "Der Text wechselt vom engen, dunklen Waldweg zur offenen Lichtung. Dieser Raumwechsel macht die Erleichterung spürbar." }
      ] },
      { art: "beleg", id: "raumbeleg", nur: "R", tag: "Am Text nachweisen", titel: "Wo wird der Raum zur Stimmung?", lesetext: "lit-nacht-r", fragen: [
        { q: "Wo wird der Waldweg als eng und unsicher beschrieben?", zeilen: [10, 11], e: "Flur ohne Wände, dichte Tannen, kein Stern: Der Raum drückt auf Selin.", tipp: "Suche den Vergleich mit dem Flur." },
        { q: "Wo wird der Raum offen und die Stimmung ruhiger?", zeilen: [46, 47], e: "Die Wolkendecke reißt auf, Sterne werden sichtbar: Der Raum öffnet sich und mit ihm die Stimmung.", tipp: "Suche die Stelle, an der es über den Tannenspitzen heller wird." }] },
      { art: "beleg", id: "raumbeleg", nur: "M", tag: "Am Text nachweisen", titel: "Wo wird der Raum zur Stimmung?", lesetext: "lit-nacht-m", fragen: [
        { q: "Wo wird der Waldweg als eng und unsicher beschrieben?", zeilen: [13, 14], e: "Flur ohne Wände, dichte Tannen, kein Stern: Der Raum drückt auf Selin.", tipp: "Suche den Vergleich mit dem Flur." },
        { q: "Wo wird der Raum offen und die Stimmung ruhiger?", zeilen: [58, 59], e: "Die Wolkendecke reißt auf, Sterne werden sichtbar: Der Raum öffnet sich und mit ihm die Stimmung.", tipp: "Suche die Stelle, an der es über den Tannenspitzen heller wird." }] }
    ] },
    { kurz: "Zeit", ober: "Untersuchen", titel: "Ein Augenblick – und eine Viertelstunde", teile: [
      { art: "text", html: "<p>Texte erzählen nicht alles gleich schnell. Manche Sekunden füllen eine halbe Seite, ganze Stunden einen Halbsatz. Wird ein Augenblick breit ausgemalt, ist das <button class=\"term\" data-t=\"dehnung\">Zeitdehnung</button>. Wird viel Zeit in einem Satz zusammengefasst, nennt man das <button class=\"term\" data-t=\"raffung\">Zeitraffung</button>.</p>" },
      { art: "sort", id: "zeit", tag: "Sortieren", titel: "Dehnung oder Raffung?", lead: "Wird der Augenblick ausgedehnt – oder wird viel Zeit zusammengefasst?", buckets: ["Zeitdehnung", "Zeitraffung"], cols: 240, items: [
        { t: "Ein Ast knackte. Noch einer.", b: 0 },
        { t: "Ich hielt den Atem an und zählte: eins, zwei, drei.", b: 0 },
        { t: "Ein einziger Augenblick dehnte sich, bis ich glaubte, er würde nie wieder aufhören.", b: 0 },
        { t: "Nach einer Weile hörte er hinter sich Schritte.", b: 1 },
        { t: "Eine Viertelstunde und zwei Wegbiegungen später erreichten sie die Lichtung.", b: 1 },
        { t: "Eine Weile sagte keiner etwas.", b: 1 }],
        hilfen: ["Frage dich: Wie lange dauert das im Text – und wie lange würde es wirklich dauern?", "Zwei Sekunden auf mehreren Zeilen: Dehnung. Viele Minuten in einem Satz: Raffung."] },
      { art: "mc", id: "zeit", tag: "Zeit und Wirkung", fragen: [
        { q: "Warum erzählt Teil 1 den Moment, in dem Selin stehen bleibt, so ausführlich?", o: ["Die Leser erleben ihre Angst Sekunde für Sekunde mit.", "Der Moment dauert in Wirklichkeit eine ganze Stunde.", "Die Autorin wollte den Text länger machen.", "Selin weiß nicht, wie spät es ist."], a: 0, e: "Zeitdehnung macht einen Augenblick schwer. Je genauer die Sekunden erzählt werden, desto stärker spürt man die Anspannung." },
        { q: "Warum fasst der Erzähler den Weg zur Lichtung in einem Satz zusammen?", o: ["Der Weg ist nicht mehr wichtig – wichtig ist, dass beide ihn zusammen schaffen.", "Der Weg war nur ein paar Meter lang.", "Der Erzähler hat vergessen, was auf dem Weg geschah.", "Tobias hat auf dem Weg nichts erlebt."], a: 0, e: "Durch Zeitraffung rückt das Wichtige in den Vordergrund: Selin ist nicht mehr allein. Die Viertelstunde selbst muss nicht erzählt werden." }
      ] },
      { art: "beleg", id: "zeitbeleg", nur: "R", tag: "Am Text nachweisen", titel: "Wo steckt die Zeitgestaltung?", lesetext: "lit-nacht-r", fragen: [
        { q: "Wo wird ein einzelner Augenblick besonders breit erzählt (Zeitdehnung)?", zeilen: [17, 22], e: "Knacken, Atem anhalten, Zählen, Rufen wollen: Wenige Sekunden füllen sechs Zeilen.", tipp: "Suche die Stelle mit „Ein Ast knackte. Noch einer.“ und lies bis zum Ende des Absatzes." },
        { q: "Wo wird viel Zeit in wenigen Zeilen zusammengefasst (Zeitraffung)?", zeilen: [41, 44], e: "Eine Viertelstunde, zwei Wegbiegungen, ein Bach, eine Bank – alles in einem Satz.", tipp: "Suche die Zeitangabe „Viertelstunde“." }] },
      { art: "beleg", id: "zeitbeleg", nur: "M", tag: "Am Text nachweisen", titel: "Wo steckt die Zeitgestaltung?", lesetext: "lit-nacht-m", fragen: [
        { q: "Wo wird ein einzelner Augenblick besonders breit erzählt (Zeitdehnung)?", zeilen: [23, 28], e: "Knacken, Atem anhalten, Zählen, Rufen wollen: Wenige Sekunden füllen sechs Zeilen.", tipp: "Suche die Stelle mit „Ein Ast knackte. Noch einer.“ und lies weiter, bis die Stimme versagt." },
        { q: "Wo wird viel Zeit in wenigen Zeilen zusammengefasst (Zeitraffung)?", zeilen: [52, 55], e: "Eine Viertelstunde, zwei Wegbiegungen, ein Bach, eine Bank – alles in einem Satz.", tipp: "Suche die Zeitangabe „Viertelstunde“." }] }
    ] },
    { kurz: "Schreiben", ober: "Selbst schreiben", titel: "Die Perspektive wechseln", teile: [
      { art: "text", html: "<p class=\"lead\">Wer die Perspektive wechselt, merkt, was sich verändert. Probiere es aus – zuerst mit zwei Sätzen, dann mit einem ganzen Abschnitt.</p>" },
      { art: "offen", id: "umschr", nur: "R", tag: "Umschreiben", fragen: [
        { q: "Schreibe den Satz „Ich hielt den Atem an und zählte: eins, zwei, drei.“ als Er-/Sie-Erzähler mit reiner Außensicht um (nur Sichtbares).", m: "Selin stand regungslos da. Ihre Lippen bewegten sich lautlos, als ob sie zählte.", k: ["selin|sie", "stand|regungslos|still|lippen|bewegt|reglos|atem"], min: 2 },
        { q: "Mach aus „Tobias richtete den Lichtkegel auf den Boden.“ einen Satz aus Tobias’ Ich-Sicht – mit einem Gedanken von ihm.", m: "Ich richtete den Lichtkegel auf den Boden, denn ich wollte nicht, dass sie sich angestarrt fühlt.", k: ["ich", "weil|denn|damit|wollte|dachte|nicht"], min: 2 }],
        tipp: "Satz 1: Aus „ich“ wird „sie“ – und was man nicht sehen kann, fällt weg. Satz 2: Aus „er“ wird „ich“ – und ein Gedanke kommt dazu.",
        hilfen: ["Satz 1 beginnt mit „Selin …“ oder „Sie …“. Was würde man bei ihr sehen?", "Satz 2 beginnt mit „Ich …“. Warum richtet Tobias das Licht nach unten? Schreibe es hinein."] },
      { art: "offen", id: "umschr", nur: "M", tag: "Umschreiben", fragen: [
        { q: "Schreibe den Satz „Ich hielt den Atem an und zählte: eins, zwei, drei.“ als Er-/Sie-Erzähler mit reiner Außensicht um. Gefühle dürfen nicht genannt werden – die Leser sollen sie erschließen.", m: "Selin stand regungslos da. Ihre Lippen bewegten sich lautlos, als ob sie zählte, und ihre Hände ballten sich zu Fäusten.", k: ["selin|sie", "stand|regungslos|still|lippen|bewegt|reglos|atem|fäuste"], min: 2 },
        { q: "Mach aus „Tobias richtete den Lichtkegel auf den Boden.“ einen Satz aus Tobias’ Ich-Sicht, der einen Gedanken oder ein Gefühl von ihm zeigt.", m: "Ich richtete den Lichtkegel auf den Boden, denn ich wollte nicht, dass sie sich angestarrt fühlt, und ich suchte nach einem Satz, der nicht dumm klingt.", k: ["ich", "weil|denn|damit|wollte|dachte|nicht|suchte"], min: 2 }],
        tipp: "Satz 1: Welche Zeichen von außen verraten die Angst, ohne dass sie genannt wird? Satz 2: Aus „er“ wird „ich“ – ein Gedanke oder Gefühl kommt hinzu." },
      { art: "schreiben", id: "schreib", nur: "R", tag: "Schreibtrainer", titel: "Tobias erzählt", min: 50,
        auftrag: "<p><strong>Erzähle den Moment auf dem Waldweg aus Tobias’ Sicht.</strong></p><p>Schreibe als Tobias in der Ich-Form (mindestens 50 Wörter), was er sieht, hört und denkt, als er Selin stehen sieht. Zeige seine Gedanken und Gefühle (Innensicht). Beschreibe auch, wie der Weg im Dunkeln wirkt.</p>",
        starter: ["Plötzlich blieb Selin stehen …", "Ich blieb auch stehen, denn …", "Ich dachte: …", "Der Weg lag so dunkel vor uns, dass …", "Ich richtete die Lampe …"],
        kriterien: ["Ich erzähle in der Ich-Form aus Tobias’ Sicht.", "Ich zeige mindestens einen Gedanken oder ein Gefühl von Tobias.", "Ich beschreibe, wie der dunkle Weg wirkt.", "Ich bleibe bei dem, was Tobias wissen kann."] },
      { art: "schreiben", id: "schreib", nur: "M", tag: "Schreibtrainer", titel: "Tobias erzählt", min: 80,
        auftrag: "<p><strong>Erzähle den Moment auf dem Waldweg aus Tobias’ Sicht.</strong></p><p>Schreibe als Tobias in der Ich-Form (mindestens 80 Wörter) von dem Augenblick, in dem er bemerkt, dass Selin zurückbleibt. Zeige seine Innensicht, gestalte den Raum so, dass er eine Stimmung erzeugt, und dehne mindestens einen Augenblick (Zeitdehnung). Tobias weiß nicht, was in Selin vorgeht – er kann es nur vermuten.</p>",
        starter: ["Das Rascheln hinter mir hörte plötzlich auf …", "Ich drehte mich um und sah …", "In mir arbeitete es: …", "Ich vermutete, dass …", "Die Dunkelheit war …"],
        kriterien: ["Ich erzähle durchgehend in der Ich-Form aus Tobias’ Sicht.", "Ich zeige seine Gedanken und Gefühle (Innensicht).", "Ich gestalte den Raum so, dass eine Stimmung entsteht.", "Mindestens einen Augenblick dehne ich bewusst.", "Ich lasse Tobias nur vermuten, was in Selin vorgeht."] },
      { art: "offen", id: "wirk", nur: "R", m7: true, tag: "Wirkung begründen", fragen: [
        { q: "Teil 1 und Teil 2 erzählen dieselbe Situation. Was kann der Ich-Erzähler zeigen, was der Er-Erzähler nicht kann? Belege mit einer Stelle aus Teil 1 (Z. …).", m: "Die Ich-Erzählerin kann ihre Gedanken und Gefühle zeigen. Das sieht man bei „Ich wollte rufen, aber meine Stimme gehörte mir nicht mehr“ (Z. 20–21). Der Er-Erzähler sieht davon nichts.", k: ["gedanken|gefühl|angst|innen|denkt|fühlt", "z. |zeile|„|\"", "ich wollte|stimme"], min: 2 }],
        tipp: "Nenne zuerst, was der Ich-Erzähler zeigen kann. Dann zitiere kurz eine Stelle und gib die Zeile an.",
        hilfen: ["Satzanfang: Der Ich-Erzähler kann …, zum Beispiel in „…“ (Z. …).", "Denke an Innensicht: Was erfährst du über Selin nur in Teil 1?"] },
      { art: "offen", id: "wirk", nur: "M", m7: true, tag: "Wirkung begründen", fragen: [
        { q: "Teil 1 und Teil 2 erzählen dieselbe Situation. Begründe, was der Perspektivwechsel bei den Lesern bewirkt. Belege mit je einem Zitat aus Teil 1 und Teil 2 (Zeile angeben).", m: "In Teil 1 erleben die Leser Selins Angst von innen, etwa bei „doch meine Stimme gehörte mir nicht mehr“ (Z. 27). In Teil 2 sehen sie nur das Verhalten, zum Beispiel, wie Tobias „den Lichtkegel auf den Boden“ richtet (Z. 40). Dadurch verstehen sie, was Selin fühlt, und sehen zugleich, dass Tobias es nur ahnt.", k: ["innen|gedanken|gefühl|angst|nähe|nah", "außen|sehen|verhalten|ahnt|schließen|abstand|vermut", "z. |zeile", "tobias"], min: 3 }],
        tipp: "Vergleiche, was die Leser jeweils wissen. Dann je ein Zitat mit Zeile – und ein Satz, der die Wirkung erklärt." }
    ] },
    { kurz: "Kurz sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Ein Ich-Erzähler ist selbst Figur der Geschichte.", true],
        ["Ein Er-Erzähler kann nie etwas über das Innere einer Figur sagen.", false],
        ["Bei der Außensicht erfährt man nur, was man sehen und hören kann.", true],
        ["Raumgestaltung hat nichts mit der Stimmung eines Textes zu tun.", false],
        ["Bei einer Zeitdehnung wird ein kurzer Augenblick sehr ausführlich erzählt.", true],
        ["Bei einer Zeitraffung werden viele Minuten in einem Satz erzählt.", true]] }
    ] }
  ],
  weiter: { href: "lit_04.html", titel: "Modul 4: Gedichte: Bilder und Wirkung", text: "Du weißt jetzt, wie Perspektive, Raum und Zeit eine Erzählung formen. Im nächsten Modul geht es um <strong>Gedichte</strong>: Wie entstehen Bilder und welche Wirkung haben sie?" }
});
