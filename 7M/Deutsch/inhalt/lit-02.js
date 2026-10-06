/* Deutsch 7 · Literatur und Medien · Modul 2: Figuren und ihre Beziehungen
   (direkt gesagt oder am Verhalten gezeigt, Gefühle und Gründe mit Textstellen belegen, Beziehung und ihre Veränderung,
   Schreibtrainer: Nachricht bzw. Tagebucheintrag aus Sicht einer Figur; Duell gegen die KI: Welche Deutung passt?)
   LehrplanPLUS D7 2.2 (Figuren beschreiben, ihr Verhalten und ihre Beziehungen erklären, Deutungen am Text belegen;
   M7: Widerspruch von Verhalten und Aussagen einer Figur), 3.2 (gestaltend schreiben: Perspektive einer Figur).
   Text: „Parzelle 14“ (texte/literatur/parzelle-14.js) – R7 10 Absätze, 35 Zeilen · M7 11 Absätze, 52 Zeilen.
   Die kurzen Texte im Duell sind eigene Texte für GRUMI. */
D7Kit.seite({
  id: "lit-02",
  titel: "Figuren und ihre Beziehungen",
  einleitung: "In guten Geschichten steht selten da: „Er war traurig.“ Du merkst es trotzdem – an dem, was eine Figur tut, sagt oder verschweigt. Heute liest du eine Erzählung über Finn und seinen Opa und lernst, Gefühle und Beziehungen am Text zu zeigen.",
  zeit: "etwa 45 Minuten",
  ziele: ["🔍 Ich unterscheide, was über eine Figur gesagt und was nur gezeigt wird.", "💬 Ich erkläre, warum eine Figur so handelt, und belege es mit einer Textstelle.", "🤝 Ich beschreibe, wie zwei Figuren zueinander stehen und was sich verändert.", "✍️ Ich schreibe aus der Sicht einer Figur."],
  haupttext: { R: "lit-parzelle-r", M: "lit-parzelle-m" },
  quiz: { profi: "Figuren-Profi" },
  glossar: {
    figur: ["Figur", "Eine erfundene Person (oder ein Tier) in einer Geschichte."],
    verhalten: ["Verhalten", "Alles, was eine Figur tut und sagt – und wie sie es tut."],
    erschliessen: ["erschließen", "Etwas herausfinden, das nicht wörtlich dasteht: aus Hinweisen im Text einen Schluss ziehen."],
    beleg: ["Textbeleg", "Die Stelle im Text, die eine Aussage beweist. Man gibt sie mit der Zeilennummer an: (Z. 12–13)."],
    deutung: ["Deutung", "Eine Erklärung dafür, was eine Stelle bedeutet. Eine Deutung muss zum Text passen und sich belegen lassen."],
    beziehung: ["Beziehung", "Wie zwei Figuren zueinander stehen: vertraut, gereizt, fremd, zerstritten …"]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Ein Tag im Garten", teile: [
      { art: "text", html: "<p class=\"lead\">In dieser Geschichte sagt der Erzähler fast nie, wie sich jemand fühlt. Lies deshalb genau: Was tun die <button class=\"term\" data-t=\"figur\">Figuren</button>? Was sagen sie – und was sagen sie nicht?</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lesetext: { R: "lit-parzelle-r", M: "lit-parzelle-m" } },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Was tun Finn und Opa an diesem Tag?", o: ["Sie räumen die Gartenhütte aus, weil Opa den Garten abgibt.", "Sie bauen im Garten eine neue Hütte.", "Sie machen den Garten für den Winter fertig.", "Sie suchen in der Hütte nach einem alten Holzschild."], a: 0, e: "Ab Montag gehört Parzelle 14 einer anderen Familie – deshalb muss alles heraus." },
        { q: "Warum gibt Opa den Garten ab?", o: ["Sein Knie macht die Gartenarbeit nicht mehr mit.", "Er hat die Freude an der Gartenarbeit verloren.", "Finn will ihm nicht mehr im Garten helfen.", "Die Familie zieht in eine andere Stadt."], a: 0, e: "Das steht direkt im Text. Wie es Opa damit geht, steht nicht da – das findest du gleich selbst heraus." }] }
    ] },
    { kurz: "Figuren", ober: "Verstehen", titel: "Gesagt oder gezeigt?", teile: [
      { art: "text", html: "<p>Über eine Figur erfährst du etwas auf zwei Wegen:</p>" },
      { art: "karten", karten: [
        { ic: "📝", titel: "Direkt gesagt", text: "Der Erzähler oder eine Figur spricht es aus: „Opas Knie machte die Arbeit im Garten nicht mehr mit.“" },
        { ic: "🔍", titel: "Am Verhalten gezeigt", text: "Du musst es aus dem <button class=\"term\" data-t=\"verhalten\">Verhalten</button> <button class=\"term\" data-t=\"erschliessen\">erschließen</button>: Wer ständig auf die Uhr sieht, will weg." }] },
      { art: "sort", id: "weg", tag: "Sortieren", titel: "Steht das da – oder musst du es erschließen?", buckets: ["steht direkt im Text", "aus dem Verhalten erschlossen"], cols: 240, items: [
        { t: "Opas Knie macht die Gartenarbeit nicht mehr mit.", b: 0 },
        { t: "Finn will um zwei am Baggersee sein.", b: 0 },
        { t: "Die beiden räumen seit neun Uhr die Hütte aus.", b: 0 },
        { t: "Ab Montag gehört der Garten einer anderen Familie.", b: 0 },
        { t: "Finn ist ungeduldig.", b: 1 },
        { t: "Opa fällt der Abschied vom Garten schwer.", b: 1 },
        { t: "Das Holzschild bedeutet Opa viel.", b: 1 },
        { t: "Am Ende ist Finn die Zeit mit Opa wichtiger als der See.", b: 1 }],
        hilfen: ["Frage dich bei jeder Karte: Könnte ich den Satz fast wörtlich im Text unterstreichen?", "Gefühle wie „ungeduldig“ oder „schwer fallen“ nennt der Erzähler hier nie. Die musst du erschließen."] },
      { art: "mc", id: "fig", tag: "Verhalten deuten", fragen: [
        { q: "Woran erkennst du, dass Finn am Anfang ungeduldig ist?", o: ["Er sieht auf die Uhr.", "Er atmet deutlich hörbar aus.", "Er fragt: „Wie lange brauchen wir noch?“", "Der Erzähler nennt ihn ungeduldig."], a: [0, 1, 2], e: "Das Wort „ungeduldig“ kommt im Text nicht vor. Du erkennst es an drei Dingen, die Finn tut und sagt." },
        { q: "Opa wickelt die Rosenschere ein, wickelt sie wieder aus und sieht sie an. Was zeigt das?", o: ["Es fällt ihm schwer, sich von seinen Gartensachen zu trennen.", "Er prüft, ob die Schere noch scharf genug ist.", "Er hat vergessen, was er gerade tun wollte.", "Er will Finn zeigen, wie man richtig einpackt."], a: 0, e: "Er behandelt die Schere, „als wäre sie aus Glas“. So geht man mit Dingen um, an denen man hängt." },
        { q: "„Opa, das ist eine Schere.“ – „Das weiß ich selbst.“ Wie klingt Opas Antwort?", o: ["schroff – er will nicht darüber reden, was in ihm vorgeht", "fröhlich – er macht einen Witz", "stolz – er freut sich über seine gute Schere", "besorgt – er fürchtet, dass Finn sich schneidet"], a: 0, e: "Opa antwortet knapp und abweisend. Über seine Gefühle spricht er nicht – er versteckt sie hinter kurzen Sätzen." }] }
    ] },
    { kurz: "Belegen", ober: "Ausprobieren", titel: "Gefühle und Gründe am Text zeigen", teile: [
      { art: "merke", html: "<ul><li>Was du über eine Figur vermutest, ist eine <button class=\"term\" data-t=\"deutung\">Deutung</button>. Sie gilt nur, wenn du sie <button class=\"term\" data-t=\"beleg\">belegen</button> kannst: Wo im Text zeigt sich das?</li><li>So schreibst du es auf: <em>Opa ist das Schild wichtig. Das sieht man daran, dass er … (Z. …).</em></li><li>Frage bei jedem Verhalten nach dem Grund: <strong>Warum</strong> tut die Figur das?</li></ul>" },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstelle finden", titel: "Wo zeigt sich das?", lesetext: "lit-parzelle-r", fragen: [
        { q: "Wo erfährst du, warum Opa den Garten abgibt?", zeilen: [5, 6], e: "Sein Knie macht die Arbeit im Garten nicht mehr mit.", tipp: "Suche das Wort „Knie“." },
        { q: "An welcher Stelle siehst du, dass Finn lieber woanders wäre?", zeilen: [9, 10], e: "Er sieht auf die Uhr und denkt an den Baggersee.", tipp: "Suche die Stelle, an der Finn an die anderen denkt." },
        { q: "An welcher Stelle zeigt sich, wie wichtig Opa das Holzschild ist?", zeilen: [21, 24], e: "Er nimmt es Finn weg, wischt die Erde ab und steckt es in seine Jackentasche.", tipp: "Was tut Opa, als Finn das Schild über den Müllsack hält?" },
        { q: "An welcher Stelle entscheidet sich Finn, bei Opa zu bleiben?", zeilen: [30, 31], e: "Er steckt das Handy zurück, ohne zu antworten.", tipp: "Suche die Stelle mit dem Handy." }] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstelle finden", titel: "Wo zeigt sich das?", lesetext: "lit-parzelle-m", fragen: [
        { q: "Wo erfährst du, warum Opa den Garten abgibt?", zeilen: [6, 7], e: "Sein Knie macht das Bücken und Graben nicht mehr mit.", tipp: "Suche das Wort „Knie“." },
        { q: "An welcher Stelle siehst du, dass Finn lieber woanders wäre?", zeilen: [11, 13], e: "Er schielt auf die Uhr und denkt an den Baggersee.", tipp: "Suche die Stelle, an der Finn an die anderen denkt." },
        { q: "Wo sagt Opa etwas, das nicht zu seinem Verhalten passt?", zeilen: [23, 24], e: "Hier behauptet Opa, der Garten sei ihm gleichgültig. Ob das stimmt, untersuchst du gleich noch genauer.", tipp: "Suche die Stelle, an der Opa Mama antwortet." },
        { q: "An welcher Stelle zeigt sich, wie wichtig Opa das Holzschild ist?", zeilen: [34, 38], e: "Er nimmt es Finn aus der Hand, wischt die Erde ab und schiebt es in die Innentasche seiner Jacke.", tipp: "Was tut Opa, als Finn das Schild über den Müllsack hält?" },
        { q: "An welcher Stelle entscheidet sich Finn, bei Opa zu bleiben?", zeilen: [45, 47], e: "Er steckt das Handy weg, ohne zu antworten, und stellt den Müllsack beiseite.", tipp: "Suche die Stelle mit dem Handy." }] },
      { art: "offen", id: "schild", nur: "R", tag: "Verhalten erklären", fragen: [
        { q: "Warum nimmt Opa Finn das Holzschild weg? Erkläre es in ein bis zwei Sätzen.", m: "Das Schild erinnert Opa an die Zeit, als Finn klein war und im Garten ein eigenes Beet hatte. Deshalb will er es behalten.", k: ["erinner|andenken|früher|klein|kind|damals", "behalten|aufheben|aufbewahren|wichtig|bedeutet|wertvoll|hängt|mitnehmen"] }], tipp: "Überlege: Wer hat das Schild beschriftet – und wann?",
        hilfen: ["So kannst du beginnen: Das Schild erinnert Opa an …", "Auf dem Schild steht FINNS BEET in krummen Buchstaben. Wie alt war Finn wohl, als er das geschrieben hat?", "Opa steckt das Schild in seine Jackentasche. Was macht man mit Dingen, die einem viel bedeuten?"] },
      { art: "offen", id: "schild", nur: "M", tag: "Verhalten erklären und belegen", fragen: [
        { q: "Warum nimmt Opa Finn das Holzschild weg? Erkläre es und belege deine Erklärung mit einer Textstelle (Zeilenangabe).", m: "Das Schild erinnert Opa an die Zeit, als Finn klein war und im Garten ein eigenes Beet hatte. Dass es ihm viel bedeutet, sieht man daran, dass er die Erde abwischt und es in die Innentasche seiner Jacke schiebt (Z. 36–38).", k: ["erinner|andenken|früher|klein|kind|damals", "bedeutet|wichtig|behalten|aufheben|aufbewahren|wertvoll|hängt", "z.|zeile"], min: 2 }], tipp: "Erst die Erklärung (Woran erinnert das Schild?), dann der Beleg: Das sieht man daran, dass … (Z. …)." },
      { art: "offen", id: "wider", nur: "M", m7: true, tag: "Sagen und Tun", fragen: [
        { q: "Opa sagt über den Garten: „Altes Zeug, sonst nichts“ (Z. 23–24). Meint er das wirklich so? Begründe mit dem, was er tut.", m: "Nein, er meint es nicht so. Er behauptet, der Garten sei ihm gleichgültig, aber er packt die Rosenschere ganz vorsichtig ein und steckt das Schild in seine Jacke. Was er tut, zeigt, dass er sehr am Garten hängt.", k: ["nein|nicht so|gegenteil|widerspr|stimmt nicht", "schere|schild|samentütchen|vorsichtig|sorgfältig|langsam|jacke|rücken", "hängt|schwer|traurig|wichtig|bedeutet|abschied|liebt"], min: 2 }], tipp: "Vergleiche: Was sagt Opa – und wie geht er mit der Schere, den Samentütchen und dem Schild um?" }
    ] },
    { kurz: "Beziehung", ober: "Verstehen und schreiben", titel: "Wie stehen die beiden zueinander?", teile: [
      { art: "text", html: "<p>Figuren stehen in einer <button class=\"term\" data-t=\"beziehung\">Beziehung</button> zueinander: Sie vertrauen sich, streiten, helfen einander oder gehen sich aus dem Weg. In einer Geschichte bleibt das selten gleich. Achte darauf, <strong>was sich verändert – und wodurch</strong>.</p>" },
      { art: "ordnen", id: "verlauf", tag: "Reihenfolge", titel: "Vom ersten bis zum letzten Satz: Was geschieht zwischen Finn und Opa?", schritte: [
        "Opa gibt Befehle, Finn atmet genervt aus.",
        "Finn fragt, wie lange es noch dauert.",
        "Finn will das Holzschild wegwerfen – Opa nimmt es ihm ab.",
        "Finn entdeckt die Bleistiftstriche am Türrahmen.",
        "Finn steckt das Handy weg, ohne zu antworten.",
        "Finn bittet Opa um einen neuen Strich.",
        "Opa sagt: „Dann stell dich hin.“"] },
      { art: "mc", id: "bez", tag: "Beziehung beschreiben", fragen: [
        { q: "Wie gehen Finn und Opa am Anfang miteinander um?", o: ["gereizt: Opa kommandiert, Finn will schnell fertig werden", "herzlich: Sie lachen viel und erzählen von früher", "gleichgültig: Sie arbeiten, ohne ein Wort zu wechseln", "feindselig: Sie beschimpfen sich laut"], a: 0, e: "„Nicht so!“ – „Wie lange brauchen wir noch?“ Beide sind angespannt, aber aus ganz verschiedenen Gründen." },
        { q: "Wodurch ändert sich Finns Verhalten?", o: ["Er sieht das Schild und die Striche und begreift, was der Garten für Opa bedeutet.", "Opa erklärt ihm ausführlich, warum er traurig ist.", "Seine Freunde sagen das Treffen am See ab.", "Mama verspricht ihm eine Belohnung fürs Helfen."], a: 0, e: "Niemand erklärt Finn etwas. Er versteht es selbst – durch das, was er sieht." },
        { q: "Was zeigt der Schluss über die beiden?", o: ["Sie sind sich wieder nah – auch wenn Opa das nur brummig zeigt.", "Sie haben sich endgültig zerstritten.", "Finn gibt nach, obwohl er immer noch wütend ist.", "Opa hat beschlossen, den Garten doch zu behalten."], a: 0, e: "„Aber gerade.“ klingt streng und ist doch liebevoll gemeint: Opa macht mit Finn das, was die beiden schon immer gemacht haben." }] },
      { art: "mc", id: "bleistift", m7: true, tag: "Deuten", fragen: [
        { q: "Opa sucht lange nach dem Bleistift, obwohl der hinter seinem Ohr steckt. Welche Deutung passt am besten zum Text?", o: ["Finns Bitte berührt ihn – er braucht einen Moment, bevor er antworten kann.", "Er ist vergesslich geworden und findet seine Sachen nicht mehr.", "Er will den Strich eigentlich nicht machen und zögert es hinaus.", "Er ärgert sich noch über Finn und lässt ihn absichtlich warten."], a: 0, e: "Vorher räuspert er sich, und danach sagt er sofort: „Dann stell dich hin.“ Wer nicht wollte oder noch böse wäre, würde anders antworten. Das Suchen verschafft ihm Zeit, sich zu fassen." }] },
      { art: "schreiben", id: "schreib", nur: "R", tag: "Schreibtrainer", titel: "Finns Nachricht an Opa", min: 30,
        auftrag: "<p><strong>Am Abend denkt Finn noch einmal an den Tag im Garten. Er schreibt Opa eine kurze Nachricht.</strong></p><p>Schreibe diese Nachricht aus Finns Sicht (mindestens 30 Wörter). Finn schreibt, was ihm heute aufgefallen ist und was er sich für die nächste Zeit mit Opa wünscht.</p>",
        starter: ["Hallo Opa,", "heute im Garten habe ich gemerkt, dass …", "Als ich die Striche am Türrahmen gesehen habe, …", "Ich wünsche mir, dass wir …", "Dein Finn"],
        kriterien: ["Die Nachricht ist aus Finns Sicht geschrieben (ich).", "Sie hat eine Anrede und einen Gruß am Schluss.", "Sie nimmt etwas auf, das in der Geschichte passiert ist.", "Sie passt zu dem, wie Finn am Ende der Geschichte ist."] },
      { art: "schreiben", id: "schreib", nur: "M", tag: "Schreibtrainer", titel: "Ein Tagebucheintrag", min: 60,
        auftrag: "<p><strong>Am Abend schreibt Finn in sein Tagebuch – oder Opa in seines.</strong></p><p>Wähle eine der beiden Figuren und schreibe ihren Tagebucheintrag über den Tag in Parzelle 14 (mindestens 60 Wörter). Die Figur hält fest, was sie erlebt, gedacht und gefühlt hat – auch das, was sie im Garten nicht laut gesagt hat.</p>",
        starter: ["Samstagabend.", "Heute haben wir die Gartenhütte ausgeräumt.", "Als ich das Schild gesehen habe, …", "Gesagt habe ich nichts, aber …", "Am meisten wird mir … fehlen."],
        kriterien: ["Der Eintrag ist in der Ich-Form aus der Sicht von Finn oder Opa geschrieben.", "Er nimmt mindestens zwei Ereignisse aus der Geschichte auf.", "Er nennt Gedanken und Gefühle, die in der Geschichte nur gezeigt werden.", "Er passt zu dem, was die Figur in der Geschichte tut und sagt.", "Er klingt wie ein Tagebuch: persönlich, mit Tag oder Tageszeit am Anfang."] }
    ] },
    { kurz: "KI-Duell", ober: "Zusatz", titel: "Duell: Welche Deutung passt zum Text?", teile: [
      { art: "duell", id: "deutduell", tag: "Zusatz · zählt nicht zum Lernfortschritt", zusatz: true, titel: "⚔️ Du gegen die KI",
        intro: "Fünf kurze Szenen, fünf Fragen: Welche Deutung passt zum Text? Die KI deutet mit. Aber Vorsicht: Manchmal behauptet sie etwas, das gar nicht im Text steht.",
        runden: [
          { material: "Jonte stellte sein Tablett ab. Am Tisch der anderen war kein Stuhl mehr frei. Er sah kurz hinüber, dann setzte er sich ans Fenster und holte sein Handy heraus, obwohl der Akku längst leer war.",
            q: "Welche Deutung passt zum Text?", o: ["Jonte tut beschäftigt, damit niemand merkt, wie allein er sich fühlt.", "Jonte will einem Freund eine Nachricht schreiben.", "Jonte sitzt am liebsten allein am Fenster.", "Die anderen haben mit Absicht keinen Stuhl für Jonte frei gelassen."], a: 0, ki: 0, kiText: "mit leerem Akku kann er nichts lesen und nichts schreiben. Das Handy ist nur ein Versteck.",
            e: "Er sieht erst zu den anderen hinüber – dort wollte er sitzen. Das leere Handy holt er nur heraus, um nicht verloren auszusehen." },
          { material: "„Schöner Pulli“, sagte Svea. Nele zog die Ärmel über die Hände. „Der ist von meiner Cousine. Schon alt.“ Svea nickte. „Steht dir trotzdem gut.“ In der nächsten Pause trug Nele ihre Jacke darüber, obwohl die Heizung lief.",
            q: "Welche Deutung passt zum Text?", o: ["Nele ist es unangenehm, dass sie einen getragenen Pulli anhat.", "Nele ist stolz auf den Pulli ihrer Cousine.", "Svea lacht Nele wegen des Pullis aus.", "Nele friert, weil es im Klassenzimmer kalt ist."], a: 0, ki: 2, kiText: "bei alten Sachen wird man in der Schule immer ausgelacht. Svea lacht bestimmt über sie.",
            e: "Davon steht nichts im Text: Svea lacht nicht, sie sagt zweimal etwas Nettes. Belegen lässt sich nur, was Nele tut – und das zeigt, dass sie sich schämt.",
            begruende: { q: "An welchem Verhalten erkennst du, dass Nele sich unwohl fühlt?", m: "Sie zieht die Ärmel über die Hände und trägt später ihre Jacke über dem Pulli, obwohl die Heizung läuft.", k: ["ärmel|jacke|heizung|versteck|verdeckt|darüber"] } },
          { material: "Der Trainer las die Aufstellung vor. Elif hörte ihren Namen nicht. Sie band ihre Schuhe auf und wieder zu, zweimal hintereinander. Als Pauline ihr auf die Schulter tippte, sagte sie: „Ist mir egal. Ich wollte heute sowieso nicht spielen.“",
            q: "Welche Deutung passt zum Text?", o: ["Elif ist enttäuscht, will es aber nicht zeigen.", "Elif ist es wirklich egal, ob sie spielt.", "Elif ist wütend auf Pauline.", "Elif hat sich am Fuß verletzt und kann nicht spielen."], a: 0, ki: 0, kiText: "wer seine Schuhe zweimal auf- und zubindet, hat nichts zu tun und will sein Gesicht verbergen. Der Satz „Ist mir egal“ passt nicht dazu.",
            e: "Was Elif sagt und was sie tut, passt nicht zusammen. Dann verrät meist das Verhalten, was wirklich los ist.",
            begruende: { q: "Warum glaubst du Elif den Satz „Ist mir egal“ nicht?", m: "Sie bindet ihre Schuhe zweimal auf und zu, um ihr Gesicht zu verstecken. Das zeigt, dass sie enttäuscht ist.", k: ["schuhe|bindet|zweimal|verhalten|namen nicht|versteck|verberg"] } },
          { material: "Tarek legte das Heft zurück auf Milenas Tisch. „Danke fürs Ausleihen.“ Auf der letzten Seite war ein Fettfleck, der vorher nicht da gewesen war. Milena blätterte das Heft durch, hielt bei der letzten Seite kurz an und klappte es zu. „Kein Problem“, sagte sie. Am nächsten Tag fragte Tarek wieder. „Heute brauche ich es selbst“, sagte Milena.",
            q: "Welche Deutung passt zum Text?", o: ["Milena hat den Fleck bemerkt und will ihr Heft nicht noch einmal verleihen.", "Milena hat den Fleck gar nicht gesehen.", "Milena und Tarek haben sich wegen des Flecks laut gestritten.", "Tarek hat den Fleck mit Absicht gemacht, um Milena zu ärgern."], a: 0, ki: 3, kiText: "Tarek entschuldigt sich nicht. Also hat er das Heft bestimmt absichtlich schmutzig gemacht.",
            e: "Ob es Absicht war, steht nirgends. Der Text zeigt nur: Milena hält bei der letzten Seite kurz an – sie hat den Fleck gesehen. Und am nächsten Tag hat sie plötzlich einen Grund, Nein zu sagen." },
          { material: "Frau Petzold stellte morgens einen Teller mit Keksen auf die Gartenmauer. „Für die Vögel“, sagte sie, wenn jemand fragte. Die Kekse waren immer verschwunden, sobald die Kinder von nebenan zur Schule gegangen waren. Seit Montag lagen jeden Morgen zwei Kekse mehr auf dem Teller.",
            q: "Welche Deutung passt zum Text?", o: ["Frau Petzold freut sich im Stillen, dass die Kinder ihre Kekse nehmen.", "Frau Petzold ärgert sich, dass die Kinder ihr die Kekse wegnehmen.", "Frau Petzold möchte nur die Vögel füttern.", "Die Kinder haben Frau Petzold um die Kekse gebeten."], a: 0, ki: 0, kiText: "wer sich ärgert, stellt keinen Teller mehr hin. Sie legt aber sogar zwei Kekse dazu.",
            e: "„Für die Vögel“ ist nur ihre Ausrede. Dass seit Montag mehr Kekse daliegen, zeigt: Sie tut es gern – für die Kinder." }
        ] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Manches über eine Figur wird ", { g: "direkt" }, " gesagt."],
        ["Vieles musst du aus ihrem ", { g: "Verhalten" }, " erschließen: aus dem, was sie tut und sagt."],
        ["Deine Deutung braucht einen ", { g: "Textbeleg" }, " mit Zeilenangabe."],
        ["Die ", { g: "Beziehung" }, " zwischen zwei Figuren kann sich im Lauf der Geschichte verändern."]], extra: ["Titel", "Reim"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["Was eine Figur fühlt, steht immer wörtlich im Text.", false],
        ["Aus dem Verhalten einer Figur kann man auf ihre Gefühle schließen.", true],
        ["Wenn eine Figur etwas anderes sagt, als sie tut, lohnt es sich, genau hinzusehen.", true],
        ["Eine Deutung ist richtig, sobald sie spannend klingt.", false],
        ["Eine Deutung muss sich mit einer Textstelle belegen lassen.", true],
        ["Die Beziehung zwischen zwei Figuren bleibt in einer Geschichte immer gleich.", false]] }
    ] }
  ],
  weiter: { href: "lit_03.html", titel: "Modul 3: Gedichte", text: "Du kannst jetzt zeigen, was in Figuren vorgeht. Im nächsten Modul werden die Texte noch kürzer: Du untersuchst <strong>Gedichte</strong> – Strophe, Vers, Reim und sprachliche Bilder." }
});
