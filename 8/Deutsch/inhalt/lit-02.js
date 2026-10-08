/* Deutsch 8 · Literatur und Textanalyse · Modul 2: Figuren und ihre Beziehungen
   (direkte und indirekte Charakterisierung, vom Verhalten auf Eigenschaften schließen, Dreischritt Eigenschaft – Textstelle –
   Erklärung, Figurenkonstellation und ihre Veränderung; Schreiben: R8 geführter Figurentext im Schreibtrainer,
   M8 Charakteristik in der Schreibwerkstatt: Planen → Schreiben → Überarbeiten → Abgeben)
   LehrplanPLUS D8 2.2 (Beziehungen zwischen Figuren diskutieren, Deutungen mit Zitaten belegen; M8: analytische Methoden,
   z. B. Charakteristik von Figuren), 3.2 (Ergebnisse einer Textuntersuchung darstellen), 3.1 (Zitate in eigene Texte einbauen).
   Texte: „Die neue Trainerin“ (texte/literatur/trainerin-r.js und -m.js) – eigene Kurzgeschichte,
   R8 15 Absätze, 61 Zeilen · M8 15 Absätze, 85 Zeilen. Alle Zeilenangaben unten nach zeig-text.js. */
D7Kit.seite({
  id: "lit-02",
  titel: "Figuren und ihre Beziehungen",
  einleitung: "Was für ein Mensch ist das? Gute Geschichten beantworten diese Frage selten in einem Satz – sie zeigen, was jemand tut, sagt und verschweigt. Heute liest du von einer Kapitänin, die es gewohnt ist, die Beste zu sein, und von einer Trainerin, die nie laut wird. Du lernst, Figuren zu durchschauen und deine Deutung zu belegen.",
  zeit: "etwa 60 Minuten – gut für eine Doppelstunde",
  ziele: ["🔍 Ich unterscheide direkte und indirekte Charakterisierung.", "📌 Ich schließe vom Verhalten auf Eigenschaften und belege sie am Text.", "🤝 Ich beschreibe, wie Figuren zueinander stehen und was sich verändert.", "✍️ Ich schreibe selbst über eine Figur – geordnet und mit Belegen."],
  haupttext: { R: "lit-trainerin-r", M: "lit-trainerin-m" },
  quiz: { profi: "Figuren-Profi" },
  glossar: {
    charakterisierung: ["Charakterisierung", "Alles, was ein Text über eine Figur verrät – und die Art, wie er es verrät: direkt oder indirekt."],
    direkt: ["direkte Charakterisierung", "Der Erzähler oder eine Figur spricht aus, wie jemand ist oder aussieht: „Geduld war nicht ihre Stärke.“"],
    indirekt: ["indirekte Charakterisierung", "Der Text zeigt nur, was eine Figur tut und sagt. Die Eigenschaft dahinter erschließt du selbst."],
    eigenschaft: ["Eigenschaft", "Ein Wesenszug, der zu einer Figur gehört: ehrgeizig, geduldig, stolz, taktvoll …"],
    beleg: ["Textbeleg", "Die Stelle, die eine Aussage beweist – als wörtliches Zitat oder als Zeilenangabe: (Z. 12–13)."],
    konstellation: ["Figurenkonstellation", "Das Geflecht der Beziehungen in einem Text: Wer steht wem nahe, wer steht gegen wen – und was ändert sich?"],
    charakteristik: ["Charakteristik", "Ein zusammenhängender, sachlicher Text über eine Figur: Angaben zur Person, Auftreten, Eigenschaften mit Belegen, Beziehungen, Gesamteindruck."],
    annahme: ["Annahme", "Im Volleyball: den Aufschlag der Gegner mit den Unterarmen abfangen und nach vorn spielen."],
    zuspiel: ["Zuspielerin", "Im Volleyball: Sie legt den angenommenen Ball so vor, dass eine Angreiferin ihn über das Netz schlagen kann."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Dienstagabend in der Halle", teile: [
      { art: "text", html: "<p class=\"lead\">Eine Volleyballmannschaft bekommt eine neue Trainerin – und die Kapitänin hat damit ein Problem. Lies genau: Was tun die Figuren? Was sagen sie – und was sagen andere über sie?</p><p>Zwei Wörter aus dem Volleyball vorab: Bei der <button class=\"term\" data-t=\"annahme\">Annahme</button> fängt man den Aufschlag der Gegner ab. Die <button class=\"term\" data-t=\"zuspiel\">Zuspielerin</button> legt den Ball dann für den Angriff vor.</p>" },
      { art: "lesetext", tag: "Lesen", titel: "Dein Text", lesetext: { R: "lit-trainerin-r", M: "lit-trainerin-m" } },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Welche Entscheidung der Trainerin ärgert Nora am meisten?", o: ["Am Samstag beginnt Leni, und Nora kommt erst später ins Spiel.", "Am Samstag soll Nora zuspielen, statt selbst anzugreifen.", "Am Samstag fährt die Mannschaft ohne Trainerin zum Spiel.", "Am Samstag wird Emine an Noras Stelle Kapitänin."], a: 0, e: "Für die Kapitänin, die immer „die Punkte gemacht“ hat, ist das ein harter Schlag." },
        { q: "Was tut Nora am Schluss?", o: ["Sie geht in die Halle zurück und bittet um weitere Aufschläge.", "Sie entschuldigt sich noch in der Umkleide bei Leni.", "Sie verlässt wütend die Halle und will nicht wiederkommen.", "Sie ruft Herrn Lohmann an und beschwert sich bei ihm."], a: 0, e: "Sie sagt weder „Entschuldigung“ noch „Du hattest recht“. Sie tut etwas – und das sagt mehr." }
      ] }
    ] },
    { kurz: "Charakter", ober: "Verstehen", titel: "Gesagt – oder gezeigt?", teile: [
      { art: "beispiel", kopf: "Zwei Sätze über Nora", html: "<p>„Geduld war nicht ihre Stärke.“</p><p>„Nora verdrehte die Augen.“</p><p>Der erste Satz <b>sagt</b> dir, wie Nora ist. Der zweite <b>zeigt</b> dir nur, was sie tut – den Schluss ziehst du selbst.</p>" },
      { art: "text", html: "<p>Wie ein Text eine Figur vorstellt, nennt man <button class=\"term\" data-t=\"charakterisierung\">Charakterisierung</button>. Es gibt zwei Wege: die <button class=\"term\" data-t=\"direkt\">direkte</button> und die <button class=\"term\" data-t=\"indirekt\">indirekte Charakterisierung</button>.</p>" },
      { art: "karten", karten: [
        { ic: "📝", titel: "Direkte Charakterisierung", text: "Es wird ausgesprochen: vom Erzähler, von einer anderen Figur oder von der Figur selbst. Auch eine Beschreibung des Aussehens gehört dazu." },
        { ic: "🔍", titel: "Indirekte Charakterisierung", text: "Es wird nur gezeigt: durch Verhalten, Sprechweise, Reaktionen. Die <button class=\"term\" data-t=\"eigenschaft\">Eigenschaft</button> dahinter musst du selbst erschließen." }] },
      { art: "sort", id: "weg", tag: "Sortieren", titel: "Direkt oder indirekt?", lead: "Wird es ausgesprochen – oder musst du es aus dem Verhalten schließen?", buckets: ["direkt: Es wird ausgesprochen", "indirekt: Du erschließt es"], cols: 240, items: [
        { t: "„Geduld war nicht ihre Stärke.“ (Erzähler über Nora)", b: 0 },
        { t: "„Du bist die Ehrgeizigste von uns allen.“ (Emine über Nora)", b: 0 },
        { t: "„Ich verliere eben nicht gern.“ (Nora über sich)", b: 0 },
        { t: "„Laut wurde sie nie.“ (Erzähler über Marit)", b: 0 },
        { t: "Nora verdreht bei der Ansage die Augen.", b: 1 },
        { t: "Marit geht neben Leni in die Knie und richtet ihr die Arme.", b: 1 },
        { t: "Leni läuft jedem Ball hinterher und sagt nichts.", b: 1 },
        { t: "Nora legt am Schluss Bälle in den Wagen.", b: 1 }],
        hilfen: ["Frage dich: Steht da ein Wort für eine Eigenschaft (Geduld, ehrgeizig, laut)? Dann ist es direkt.", "Wenn nur beschrieben wird, was jemand tut, musst du die Eigenschaft selbst finden – das ist indirekt."] },
      { art: "mc", id: "fig", tag: "Verhalten deuten", fragen: [
        { q: "Nora schlägt die Bälle so hart, dass Lenis Arme rot werden. Was zeigt das über Nora?", o: ["Sie lässt ihren Ärger an einer Schwächeren aus.", "Sie will Leni möglichst schnell etwas beibringen.", "Sie kann ihre Kraft beim Schlagen nicht einschätzen.", "Sie möchte der Trainerin ihre Technik vorführen."], a: 0, e: "Der Ärger gilt Marit und der Übung – aber er trifft Leni. Emine nennt das später beim Namen: „unfair“." },
        { q: "Marit sagt ihre Kritik so leise, dass sie nur Nora erreicht. Welche Eigenschaft zeigt sich darin?", o: ["Sie ist taktvoll: Sie stellt niemanden vor der Mannschaft bloß.", "Sie ist unsicher: Sie traut sich nicht, deutlich zu werden.", "Sie ist gleichgültig: Die Annahme ist ihr nicht so wichtig.", "Sie ist nachgiebig: Sie will dem Streit mit Nora ausweichen."], a: 0, e: "Unsicher oder nachgiebig ist Marit nicht – sie bleibt bei ihrer Entscheidung für Samstag. Sie wählt nur den Weg, der Nora nicht vor allen beschämt." },
        { q: "Nora sagt über Marit: „Die hat doch keine Ahnung von uns.“ Wie gehst du mit dieser direkten Aussage um?", o: ["Ich prüfe sie am Verhalten: Marit kennt von Anfang an alle zwölf Namen.", "Ich übernehme sie: Was eine Figur über eine andere sagt, stimmt immer.", "Ich übergehe sie: Aussagen von Figuren sind keine Charakterisierung.", "Ich glaube ihr: Die Kapitänin kennt ihre Mannschaft schließlich am besten."], a: 0, e: "Was eine Figur über eine andere sagt, verrät oft mehr über die Sprecherin: Nora ist gekränkt. Ob die Aussage stimmt, zeigt erst der Vergleich mit dem, was Marit tut." }
      ] }
    ] },
    { kurz: "Belegen", ober: "Belegen", titel: "Eigenschaft – Textstelle – Erklärung", teile: [
      { art: "merke", nur: "R", kopf: "MERKE: DER DREISCHRITT", html: "<p>Eine Aussage über eine Figur überzeugt erst mit einem <button class=\"term\" data-t=\"beleg\">Textbeleg</button>:</p><ol><li><b>Eigenschaft nennen:</b> Emine ist ehrlich.</li><li><b>Textstelle angeben:</b> Sie sagt zu ihrer besten Freundin: „Aber heute warst du unfair“ (Z. 44–45).</li><li><b>Erklären:</b> Sie redet Nora also nicht nach dem Mund, obwohl die beiden befreundet sind.</li></ol>" },
      { art: "merke", nur: "M", kopf: "MERKE: DER DREISCHRITT", html: "<p>Eine Deutung überzeugt erst mit einem <button class=\"term\" data-t=\"beleg\">Textbeleg</button> – am elegantesten mit einem Zitat, das du in deinen eigenen Satz einbaust:</p><ol><li><b>Eigenschaft nennen:</b> Emine ist aufrichtig.</li><li><b>Zitat einbauen:</b> Sie wirft ihrer besten Freundin vor, sie sei „unfair“ gewesen (Z. 64).</li><li><b>Erklären:</b> Sie redet Nora also nicht nach dem Mund, obwohl die beiden seit Jahren befreundet sind.</li></ol>" },
      { art: "beleg", id: "bel", nur: "R", tag: "Textstelle finden", titel: "Wo steht das – oder wo zeigt es sich?", lesetext: "lit-trainerin-r", fragen: [
        { q: "Wo beschreibt der Erzähler direkt, wie Marit aussieht?", zeilen: [13, 16], e: "Mitte zwanzig, klein, kurze Haare, zwei Finger mit Tape: Auch das Äußere gehört zur direkten Charakterisierung.", tipp: "Suche die Stelle, an der Marit zum ersten Mal mit Namen genannt wird." },
        { q: "An welcher Stelle zeigt sich, dass Leni zäh ist und nicht jammert?", zeilen: [23, 24], e: "Rote Arme, kein Wort der Klage – und jeden Ball holt sie selbst. Das Wort „zäh“ steht nicht da: indirekte Charakterisierung.", tipp: "Suche die Stelle, an der Lenis Arme rot werden. Was tut sie danach?" },
        { q: "Wo spricht eine andere Figur direkt aus, wie Nora ist?", zeilen: [43, 45], e: "Emine nennt Nora die Ehrgeizigste – und an diesem Abend unfair.", tipp: "Suche in der Umkleide: Wer sagt Nora die Meinung?" },
        { q: "An welcher Stelle merkst du, dass mit Marits rechtem Arm etwas nicht stimmt?", zeilen: [51, 53], e: "Sie wirft mit links und hebt den rechten Arm nie über die Schulter. Erklärt wird das nicht – der Text zeigt es nur.", tipp: "Lies, wie Marit die Bälle aufräumt." }],
        hilfen: ["Direkt heißt: Es steht ausdrücklich da. Indirekt heißt: Du siehst nur, was jemand tut.", "Die Geschichte hat drei Orte nacheinander: Halle, Umkleide, wieder Halle. Überlege zuerst, an welchem Ort die Antwort stehen muss."] },
      { art: "beleg", id: "bel", nur: "M", tag: "Textstelle finden", titel: "Wo steht das – oder wo zeigt es sich?", lesetext: "lit-trainerin-m", fragen: [
        { q: "An welcher Stelle erklärt der Erzähler, warum gerade Marits Ruhe Nora verunsichert?", zeilen: [25, 27], e: "„Gegen jemanden, der brüllt, kann man sich wehren.“ Marits Ruhe lässt Noras Trotz ins Leere laufen.", tipp: "Suche die Stelle direkt hinter dem Satz „Laut wurde sie nie.“" },
        { q: "Wo zeigt ein Vergleich, wie rücksichtslos Nora mit Leni übt?", zeilen: [30, 32], e: "„als stünde drüben ein Gegner und keine Mitspielerin“ – der Vergleich bewertet Noras Verhalten, ohne dass der Erzähler ein Urteil ausspricht.", tipp: "Einen Vergleich erkennst du hier an „als stünde …“." },
        { q: "Wo erfährst du, dass Nora den Lieblingssatz ihres alten Trainers bequem fand?", zeilen: [17, 18], e: "Der Satz hatte ihr „erlaubt“, keine Geduld zu brauchen. Der Erzähler sagt es ohne Vorwurf – was daraus folgt, überlässt er dir.", tipp: "Lies weiter, wo Herr Lohmann zu Ende gesprochen hat: Wie fand Nora seinen Satz?" },
        { q: "An welcher Stelle zählt Nora zusammen, was mit Marits Arm sein könnte?", zeilen: [77, 79], e: "Aufschläge von unten, nie ein Schmetterschlag: Nora zieht ihre Schlüsse. Der Text nennt die Verletzung nicht – er lässt sie erschließen.", tipp: "Suche die Stelle, an der Nora in der Tür steht und nachdenkt." }] },
      { art: "paare", id: "eig", tag: "Paare finden", titel: "Welches Verhalten zeigt welche Eigenschaft?", lead: "Tippe erst links eine Eigenschaft an, dann rechts das Verhalten, an dem man sie erkennt.", paare: [
        ["aufmerksam", "weiß im ersten Training schon alle zwölf Namen"],
        ["trotzig", "verdreht bei der Ansage die Augen"],
        ["zäh", "holt mit roten Armen jeden Ball selbst"],
        ["aufrichtig", "sagt der besten Freundin, dass sie unfair war"],
        ["überheblich", "behauptet: „Ohne mich verlieren wir.“"],
        ["konsequent", "bleibt bei der Entscheidung für Samstag"]] },
      { art: "offen", id: "leni", nur: "R", tag: "Selbst belegen", fragen: [
        { q: "Wie ist Leni? Nenne eine Eigenschaft und belege sie mit einer Textstelle (Zeile).", m: "Leni ist mutig. Obwohl ihre Stimme zittert, sagt sie zu Nora: „Ich habe nicht darum gebeten, dass ich anfangen darf“ (Z. 47–48).", k: ["mutig|tapfer|zäh|ehrlich|still|schüchtern|bescheiden|ausdauernd|fleißig|stark|ruhig", "z. |zeile", "stimme|zittert|gebeten|rot|ball|sagt nichts|bank|tür"], min: 2 }],
        tipp: "Geh im Dreischritt vor: Eigenschaft – Textstelle mit Zeile – kurze Erklärung.",
        hilfen: ["So kannst du beginnen: Leni ist … Das sieht man daran, dass sie … (Z. …).", "Passende Wörter: mutig, zäh, still, ehrlich, bescheiden.", "Zwei Stellen helfen dir: Z. 22–24 (beim Üben) und Z. 46–48 (an der Tür)."] },
      { art: "offen", id: "leni", nur: "M", tag: "Zitat einbauen", fragen: [
        { q: "Formuliere eine Deutung zu Leni im Dreischritt: Eigenschaft – Zitat, in deinen eigenen Satz eingebaut, mit Zeile – Erklärung.", m: "Leni wirkt schüchtern, ist aber mutig: Obwohl ihre Stimme „zitterte“, sieht sie Nora an und stellt klar, sie habe „nicht darum gebeten“, anfangen zu dürfen (Z. 68–70). Sie lässt sich also nicht zur Schuldigen machen, auch wenn ihr das Sprechen schwerfällt.", k: ["mutig|tapfer|zäh|ehrlich|schüchtern|bescheiden|selbstbewusst|stark|aufrichtig|unsicher", "z. |zeile", "„|\"|»|“"], min: 2 }],
        tipp: "Ein eingebautes Zitat ist kurz: zwei bis fünf Wörter aus dem Text, die sich in deinen Satz einfügen. Die Zeile steht in Klammern dahinter." }
    ] },
    { kurz: "Beziehungen", ober: "Untersuchen", titel: "Wer steht wie zu wem?", teile: [
      { art: "text", html: "<p>Figuren stehen nie allein. Wer zu wem hält, wer wen herausfordert und wer wen übersieht – dieses Geflecht nennt man <button class=\"term\" data-t=\"konstellation\">Figurenkonstellation</button>. Spannend wird es dort, wo sich eine Beziehung verschiebt.</p>" },
      { art: "paare", id: "konst", tag: "Figurenkonstellation", titel: "Welche Beschreibung passt zu welchem Paar?", paare: [
        ["Nora und Marit", "Kräftemessen: Die eine fordert, die andere wehrt sich."],
        ["Nora und Leni", "von oben herab: die Beste und die Ersatzspielerin"],
        ["Nora und Emine", "Freundschaft, die auch Kritik aushält"],
        ["Marit und Leni", "Förderung: Die eine traut der anderen etwas zu."],
        ["Nora und Herr Lohmann", "Sonderrolle: Er verlangte von ihr nur Punkte."]] },
      { art: "ordnen", id: "verlauf", tag: "Reihenfolge", titel: "Nora und Marit: Was geschieht zwischen dem ersten und dem letzten Satz?", schritte: [
        "Nora verdreht bei der Ansage die Augen.",
        "Nora lässt ihren Ärger an Leni aus.",
        "Nora nimmt nur drei von zehn Aufschlägen sauber an.",
        "Nora widerspricht: „Ohne mich verlieren wir.“",
        "Nora schimpft in der Umkleide über Marit.",
        "Nora sieht Marit beim Aufräumen zu.",
        "Nora bittet um weitere Aufschläge."] },
      { art: "mc", id: "bez", tag: "Beziehungen beschreiben", fragen: [
        { q: "Wie steht Nora am Anfang zu Marit?", o: ["ablehnend: Sie misst Marit an Herrn Lohmann und hält die Übung für überflüssig.", "ängstlich: Sie fürchtet sich vor Marits lauter Stimme und vor Strafen.", "bewundernd: Sie möchte unbedingt so spielen können wie die Trainerin.", "gleichgültig: Ihr ist es egal, wer das Training am Dienstag leitet."], a: 0, e: "Augenverdrehen, der Gedanke an Herrn Lohmann, später der offene Widerspruch – Nora wehrt sich gegen alles, was neu ist." },
        { q: "Wodurch kommt Nora am Schluss in Bewegung?", o: ["Sie hat ihre Schwäche gespürt, Emines Kritik gehört und Marit beim Aufräumen beobachtet.", "Marit hat ihr versprochen, dass sie am Samstag doch von Anfang an spielen darf.", "Leni hat ihr angeboten, am Samstag freiwillig auf der Bank sitzen zu bleiben.", "Herr Lohmann hat ihr geraten, sich bei der neuen Trainerin zu entschuldigen."], a: 0, e: "Niemand zwingt Nora. Drei Dinge wirken zusammen – und sie zieht selbst den Schluss daraus." },
        { q: "Nora bittet um zehn Aufschläge, Marit antwortet: „Zwanzig.“ Was zeigt das über die Beziehung der beiden am Ende?", o: ["Marit nimmt Noras Schritt an – und traut ihr mehr zu, als Nora selbst verlangt.", "Marit will Nora für ihr Verhalten gegenüber Leni noch einmal bestrafen.", "Marit hat keine Lust mehr und will Nora mit der hohen Zahl abschrecken.", "Marit gibt nach und will am Samstag nun doch lieber Nora aufstellen."], a: 0, e: "Kein Vorwurf, kein Lob – nur ein Angebot, das doppelt so groß ist wie die Bitte. So antwortet jemand, der an die andere glaubt und trotzdem etwas von ihr verlangt." }
      ] },
      { art: "mc", id: "arm", m7: true, tag: "Leerstelle deuten", fragen: [
        { q: "Marit schlägt nur von unten und mit links auf; den rechten Arm hebt sie nie über die Schulter. Erklärt wird das nicht. Welche Deutung lässt sich am Text am besten stützen?", o: ["Sie kann selbst nicht mehr angreifen – deshalb weiß sie, wie viel von der Annahme abhängt.", "Sie hat nie richtig Volleyball gespielt und versteht deshalb wenig vom Angriff.", "Sie schont ihren Arm mit Absicht, damit die Mädchen sie unterschätzen.", "Sie möchte Nora zeigen, dass man Aufschläge auch mit links schlagen darf."], a: 0, e: "Tape an den Fingern, Aufschläge von unten, der Arm bleibt unten: Der Text legt eine Verletzung nahe, ohne sie auszusprechen. Dass Marit deshalb so viel Wert auf die Annahme legt, ist eine Deutung – aber eine, die zu allem passt, was der Text zeigt." }
      ] },
      { art: "offen", id: "gefallen", nur: "M", m7: true, tag: "Beziehung deuten", fragen: [
        { q: "Emine sagt: „Lohmann hat dich nie annehmen lassen. Ein Gefallen war das nicht.“ (Z. 64–65) Erkläre, was sie damit über das Verhältnis zwischen Nora und ihrem früheren Trainer sagt.", m: "Herr Lohmann hat Nora bevorzugt und ihr alles Unbequeme erspart. Damit hat er ihr aber geschadet, denn sie hat die Annahme nie gelernt und hält sich trotzdem für unersetzlich.", k: ["bevorzug|liebling|verwöhn|geschont|erspart|sonderrolle|sonderbehandlung|leicht gemacht|durchgehen", "geschadet|schaden|nie gelernt|nicht gelernt|schwäche|kann sie nicht|fehlt|abhängig|unersetzlich|nachteil"], min: 2 }],
        tipp: "Ein Gefallen ist etwas, das einem guttut. Überlege: Was musste Nora wegen des Satzes „Den Rest machen die anderen“ nie üben – und was hat das mit dem heutigen Abend zu tun?" }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Eine Figur in Worte fassen", teile: [
      { art: "text", nur: "R", html: "<p class=\"lead\">Jetzt schreibst du selbst über eine Figur: über Marit, die neue Trainerin. Du brauchst dafür genau das, was du geübt hast – Eigenschaft, Textstelle, Erklärung.</p>" },
      { art: "merke", nur: "R", kopf: "SO GEHST DU VOR", html: "<ol><li><b>Vorstellen:</b> Wer ist die Figur? Wie sieht sie aus?</li><li><b>Eigenschaften:</b> Wie ist sie? Jede Eigenschaft bekommt eine Textstelle mit Zeile.</li><li><b>Eindruck:</b> Wie wirkt sie auf dich – und warum?</li></ol><p>Über Figuren schreibt man im Präsens: „Marit ist …“, nicht „Marit war …“.</p>" },
      { art: "text", nur: "M", html: "<p class=\"lead\">Jetzt schreibst du eine <button class=\"term\" data-t=\"charakteristik\">Charakteristik</button>. In der Schreibwerkstatt arbeitest du in vier Schritten: <b>Planen → Schreiben → Überarbeiten → Abgeben</b>. Dein Text wird beim Schreiben automatisch gespeichert.</p>" },
      { art: "merke", nur: "M", kopf: "MERKE: AUFBAU EINER CHARAKTERISTIK", html: "<ol><li><b>Einleitung:</b> Name, Alter, Lebensumstände, Rolle im Text.</li><li><b>Äußeres und Auftreten:</b> nur, was der Text hergibt.</li><li><b>Verhalten und Eigenschaften:</b> das Wichtigste. Jede Eigenschaft wird belegt – direkt Gesagtes zitierst du, Gezeigtes deutest du.</li><li><b>Beziehungen:</b> Wie geht die Figur mit anderen um? Was verändert sich?</li><li><b>Schluss:</b> dein begründeter Gesamteindruck.</li></ol><p>Eine Charakteristik steht im Präsens und bleibt sachlich. Sie erzählt die Handlung nicht nach, sondern ordnet nach Eigenschaften.</p>" },
      { art: "schreiben", id: "aufsatz", nur: "R", tag: "Schreibtrainer", titel: "Figurentext: Marit, die neue Trainerin", min: 70,
        auftrag: "<p><strong>Wie ist Marit, die neue Trainerin?</strong></p><p>Schreibe einen kurzen Text über sie (mindestens 70 Wörter). Gehe so vor:</p><ol><li>Stelle Marit vor: Wer ist sie, wie alt ist sie ungefähr, wie sieht sie aus?</li><li>Nenne <b>zwei Eigenschaften</b>. Belege jede mit einer Textstelle und gib die Zeile an: (Z. …).</li><li>Schreibe zum Schluss, wie Marit auf dich wirkt – und warum.</li></ol><p>Schreibe im Präsens. Den Text kannst du unten links über <b>📖 Text</b> einblenden.</p>",
        starter: ["Marit ist die neue Trainerin der Mannschaft.", "Sie ist … und hat …", "Marit ist …. Das sieht man daran, dass sie … (Z. …).", "Außerdem ist sie …, denn … (Z. …).", "Auf mich wirkt Marit …, weil …"],
        kriterien: ["Mein Text stellt Marit vor: wer sie ist und wie sie aussieht.", "Ich nenne zwei Eigenschaften.", "Jede Eigenschaft ist mit einer Textstelle und der Zeile belegt.", "Am Schluss steht mein Eindruck mit einer Begründung.", "Mein Text steht im Präsens."] },
      { art: "aufsatz", id: "aufsatz", nur: "M", tag: "Schreibwerkstatt", titel: "Charakteristik: Nora", form: "charakterisierung",
        auftrag: "<p>Verfasse eine <b>Charakteristik der Figur Nora</b> aus der Kurzgeschichte „Die neue Trainerin“ (mindestens 170 Wörter).</p><ul><li>Stelle Nora in der Einleitung vor: Name, Alter, ihre Rolle in der Mannschaft und in der Geschichte.</li><li>Beschreibe ihr Auftreten und ihr Verhalten. Leite daraus <b>mindestens drei Eigenschaften</b> ab und belege jede am Text – wenigstens zweimal mit einem wörtlichen Zitat, das du in deinen Satz einbaust (Z. …).</li><li>Unterscheide dabei, was über Nora <b>direkt gesagt</b> wird und was du aus ihrem Verhalten <b>erschließt</b>.</li><li>Gehe auf ihre Beziehung zu Marit und zu einer weiteren Figur ein. Berücksichtige, was sich am Ende verändert.</li><li>Formuliere im Schluss deinen begründeten Gesamteindruck.</li></ul><p>Schreibe sachlich und im Präsens. Die Geschichte kannst du über „Material“ jederzeit einblenden.</p>",
        material: { lesetext: "lit-trainerin-m" },
        min: 170,
        kriterien: ["Die Einleitung nennt Name, Alter und Rolle der Figur.", "Mindestens drei Eigenschaften sind benannt und am Text belegt – zweimal mit eingebautem Zitat und Zeilenangabe.", "Ich unterscheide, was direkt gesagt und was nur gezeigt wird.", "Noras Beziehung zu Marit und zu einer weiteren Figur ist beschrieben – auch die Veränderung am Ende.", "Der Schluss enthält meinen begründeten Gesamteindruck; der Text steht im Präsens und erzählt nicht nach."],
        starter: ["Nora ist die vierzehnjährige Kapitänin …", "Schon zu Beginn zeigt sich, dass …", "Dies wird deutlich, als sie … (Z. …).", "Der Erzähler sagt ausdrücklich, dass …", "Gegenüber Marit verhält sie sich zunächst …", "Am Ende jedoch …", "Insgesamt wirkt Nora auf mich …"] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "luecke", id: "lue", tag: "Lückentext", absaetze: [
        ["Sagt der Erzähler oder eine Figur ausdrücklich, wie jemand ist, spricht man von ", { g: "direkter" }, " Charakterisierung."],
        ["Bei der indirekten Charakterisierung schließt du vom ", { g: "Verhalten" }, " einer Figur auf ihre Eigenschaften."],
        ["Jede Eigenschaft braucht einen ", { g: "Beleg" }, ": ein Zitat oder eine Zeilenangabe."],
        ["Wie die Figuren zueinander stehen, zeigt die ", { g: "Figurenkonstellation" }, "."],
        ["Über Figuren schreibt man sachlich und im ", { g: "Präsens" }, "."]], extra: ["Präteritum", "Strophen"] },
      { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
        ["„Sie war mutig“ ist ein Beispiel für indirekte Charakterisierung.", false],
        ["Auch die Beschreibung des Aussehens gehört zur Charakterisierung.", true],
        ["Was eine Figur über eine andere sagt, muss nicht stimmen – man prüft es am Verhalten.", true],
        ["Eine Deutung ohne Textstelle bleibt eine bloße Behauptung.", true],
        ["Die Beziehungen zwischen Figuren bleiben in einer Geschichte immer gleich.", false],
        ["Wer über eine Figur schreibt, erzählt vor allem die Handlung spannend nach.", false]] }
    ] }
  ],
  weiter: { href: "lit_03.html", titel: "Modul 3: Erzählperspektive, Raum und Zeit", text: "Du kannst jetzt zeigen, was für Menschen in einer Geschichte stecken. Im nächsten Modul fragst du: <strong>Wer erzählt eigentlich?</strong> Und was machen Ort und Zeit mit der Stimmung?" }
});
