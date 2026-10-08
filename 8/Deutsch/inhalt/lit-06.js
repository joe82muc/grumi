/* Deutsch 8 · Literatur und Textanalyse · Modul 6: Gestaltend weiterschreiben
   (sich in eine Figur hineindenken: Gedanken und Gefühle aus dem Verhalten erschließen und belegen; Perspektive wechseln
   an einzelnen Sätzen – was weiß eine Figur, was kann sie nur vermuten?; Merkmale der Schreibform; dann die
   Schreibwerkstatt: R8 Brief oder E-Mail an eine Figur, M8 innerer Monolog einer Figur)
   LehrplanPLUS D8 3.2 (anschaulich erzählen – R8: Brief oder E-Mail an eine literarische Figur; M8: Monolog einer
   literarischen Figur; kreative Schreibformen: Wechsel der Erzählperspektive; gestaltendes Interpretieren – M8: innerer
   Monolog), 2.2 (zentrale Aussagen herausarbeiten, Beziehungen zwischen Figuren, Deutungen mit Textstellen belegen;
   Fachbegriff Erzählperspektive), 3.3 (mit Checkliste überarbeiten).
   Text: „Das Geschenk“ (texte/literatur/geschenk-r.js und -m.js) – erfunden. Die Formbeispiele vor der Schreibaufgabe
   gehören zu anderen Figuren und Augenblicken als der Schreibauftrag; ein Mustertext zum Auftrag steht nirgends. */
D7Kit.seite({
  id: "lit-06",
  titel: "Gestaltend weiterschreiben",
  einleitung: "Manche Geschichten sagen das Wichtigste nicht. Sie zeigen ein schnelles „Danke“, einen Blick auf den Kuchen, eine Mütze, die jemand tiefer ins Gesicht zieht – den Rest musst du dir denken. Heute denkst du dich in zwei Figuren hinein und schreibst dann selbst weiter.",
  zeit: "etwa 60 Minuten – gut für eine Doppelstunde",
  ziele: ["🔎 Ich erschließe, was Figuren denken und fühlen, und belege es am Text.", "🔄 Ich erzähle einen Augenblick aus der Sicht einer anderen Figur.", "📝 Ich kenne die Merkmale meiner Schreibform.", "✍️ Ich plane, schreibe und überarbeite einen eigenen Text zu einer Figur."],
  haupttext: { R: "lit-geschenk-r", M: "lit-geschenk-m" },
  quiz: { profi: "Figuren-Profi" },
  glossar: {
    figur: ["Figur", "Eine Person in einer erfundenen Geschichte."],
    perspektive: ["Erzählperspektive", "Der Blickwinkel, aus dem erzählt wird: Wessen Gedanken und Gefühle erfahren wir?"],
    wechsel: ["Perspektivwechsel", "Du erzählst dasselbe Geschehen aus der Sicht einer anderen Figur – mit dem, was sie weiß, sieht und fühlt."],
    ichform: ["Ich-Form", "Die Figur erzählt selbst: ich, mir, mein."],
    beleg: ["Textbeleg", "Eine Stelle im Text, die zeigt, dass deine Aussage stimmt – mit Zeilenangabe."],
    vermuten: ["vermuten", "Etwas für wahrscheinlich halten, ohne es sicher zu wissen: wahrscheinlich, vielleicht, offenbar."],
    monolog: ["innerer Monolog", "Die Gedanken einer Figur in der Ich-Form – so, als könnte man ihr beim Denken zuhören."],
    adressat: ["Adressat", "Die Person, an die du schreibst."],
    anlass: ["Anlass", "Der Grund, warum du schreibst. In einem Brief steht er am Anfang."]
  },
  stationen: [
    { kurz: "Lesen", ober: "Lesen", titel: "Ein Päckchen, zu schwer für ein Handy", teile: [
      { art: "text", html: "<p class=\"lead\">Tilo wird vierzehn. Sein Großvater schiebt ihm ein Päckchen über den Tisch. Lies die Geschichte in Ruhe – und achte darauf, was die <button class=\"term\" data-t=\"figur\">Figuren</button> tun, wenn sie nichts sagen.</p>" },
      { art: "lesetext", lesetext: { R: "lit-geschenk-r", M: "lit-geschenk-m" } },
      { art: "mc", id: "erst", tag: "Verstehen", fragen: [
        { q: "Warum ist Tilo von dem Geschenk enttäuscht?", o: ["Er hatte sich ein neues Handy gewünscht.", "Die Kamera ist kaputt und macht keine Bilder.", "Opa hätte seinen Geburtstag beinahe vergessen."], a: 0, e: "Seit Wochen redet Tilo von dem Handy. Schon am Gewicht des Päckchens merkt er, dass etwas anderes darin ist." },
        { q: "Was entdeckt Tilo, als er die Bilder abholt?", o: ["alte Aufnahmen von seiner Oma, seinem Vater und sich selbst als Baby", "dass alle seine eigenen Bilder schwarz geblieben sind", "einen Brief von Opa, der zwischen den Bildern steckt"], a: 0, e: "Auf dem Film waren schon Bilder – aus dem Sommer, in dem Tilo ein Baby war. Danach hat vierzehn Jahre lang niemand mehr damit fotografiert." },
        { q: "Wie endet die Geschichte?", o: ["Tilo geht zu Opa und bittet um einen neuen Film.", "Tilo verkauft die Kamera und spart auf ein Handy.", "Tilo zeigt die Bilder zuerst seiner Mutter."], a: 0, e: "„Ich brauche einen neuen Film.“ Mehr sagt Tilo nicht – was er damit meint, steht zwischen den Zeilen." }
      ] }
    ] },
    { kurz: "Hineindenken", ober: "Untersuchen", titel: "Was die Figuren fühlen – und woran man es merkt", teile: [
      { art: "text", html: "<p>In dieser Geschichte sagt niemand: „Ich bin enttäuscht“ oder „Ich bin traurig“. Trotzdem weißt du es. Der Text <b>zeigt</b> es – an dem, was die Figuren tun, wie sie sprechen und was sie verschweigen. Wer über eine Figur schreiben will, braucht solche Stellen als <button class=\"term\" data-t=\"beleg\">Textbeleg</button>.</p>" },
      { art: "beleg", id: "gef", nur: "R", tag: "Textstellen finden", titel: "Woran merkst du das?", lesetext: "lit-geschenk-r", fragen: [
        { q: "In welchen Zeilen merkst du an Tilos Verhalten, dass sein Dank nicht von Herzen kommt?", zeilen: [17, 18], e: "Er sagt es „schnell“ und weicht dem Blick seiner Mutter aus. Wer sich wirklich freut, sieht den anderen an.", tipp: "Suche die Stelle, an der Tilo „Danke“ sagt." },
        { q: "In welchen Zeilen zeigt Opas Verhalten an der Tür, dass ihn etwas bedrückt?", zeilen: [25, 27], e: "Er dreht sich um, „als wollte er etwas sagen“ – und zieht dann nur die Mütze tiefer. Er versteckt, wie es ihm geht.", tipp: "Suche das Wort „Mütze“." },
        { q: "In welchen Zeilen erfährst du, woran sich Tilo bei seiner Oma noch erinnert?", zeilen: [48, 49], e: "Nur an ihre Stimme – und nicht einmal da ist er sicher. Die Bilder zeigen ihm einen Menschen, den er fast nicht kennt.", tipp: "Die Stelle steht nach den alten Bildern." }
      ], hilfen: ["Achte auf Verhalten: Wohin sieht jemand? Wie schnell spricht er? Was tut er mit den Händen?", "Du darfst eine Zeile mehr oder weniger antippen. Wichtig ist die richtige Stelle."] },
      { art: "beleg", id: "gef", nur: "M", tag: "Textstellen finden", titel: "Woran merkst du das?", lesetext: "lit-geschenk-m", fragen: [
        { q: "In welchen Zeilen verrät ein Vergleich, dass der Großvater unsicher ist, wie sein Geschenk ankommt?", zeilen: [13, 14], e: "„wie jemand, der auf ein Urteil wartet“: Er sitzt gerade, die Hände gefaltet. Über seine Gefühle steht nichts da – der Vergleich lässt sie ahnen.", tipp: "Suche einen Vergleich mit „wie“, der Opas Haltung beschreibt." },
        { q: "In welchen Zeilen macht sich Tilo selbst etwas vor – und der Erzähler lässt es durchblicken?", zeilen: [36, 38], e: "„… redete er sich ein“: Tilo behauptet vor sich selbst, es sei nur Langeweile. Der Erzähler deutet an, dass es doch mit Opa zu tun hat.", tipp: "Achte auf ein Verb, das zeigt, dass etwas nicht ganz stimmt." },
        { q: "In welchen Zeilen begreift Tilo, dass Opas Satz über das Fotografieren mehr war als ein Tipp?", zeilen: [62, 64], e: "Er hatte den Satz „für eine Gebrauchsanweisung gehalten“. Jetzt versteht er: Opa sprach davon, was einem wichtig ist – und was man festhalten will.", tipp: "Lies die Stelle nach den alten Bildern." }
      ] },
      { art: "sort", id: "wer", tag: "Hineindenken", titel: "Wer könnte das am Geburtstagstisch denken?", lead: "Keiner dieser Gedanken steht im Text. Überlege, zu wem er passt.", buckets: ["Tilo", "Opa"], cols: 240, items: [
        { t: "Was soll ich denn mit dem alten Ding?", b: 0 },
        { t: "Hoffentlich merkt keiner, wie enttäuscht ich bin.", b: 0 },
        { t: "Ich habe es doch so oft erzählt.", b: 0 },
        { t: "Ob er versteht, was ich ihm da gebe?", b: 1 },
        { t: "Er hat sich etwas anderes gewünscht.", b: 1 },
        { t: "Ich hätte ihm erklären sollen, was mir diese Kamera bedeutet.", b: 1 }
      ] },
      { art: "offen", id: "opa", tag: "Erschließen und belegen", titel: "Was geht in Opa vor?", fragen: [
        { q: "Opa geht an diesem Tag früher als sonst. Was könnte in ihm vorgehen? Schreibe zwei Sätze und stütze dich auf eine Stelle im Text.", m: "Opa hat gemerkt, dass Tilo sich nicht über die Kamera freut, denn Tilo bedankt sich nur schnell und stellt sie gleich ins Regal. Deshalb ist er wahrscheinlich traurig und unsicher, ob sein Geschenk ein Fehler war.", k: ["gemerkt|merkt|bemerkt|spürt|sieht|gesehen|freut sich nicht|nicht freut|enttäuscht ist", "traurig|enttäuscht|unsicher|verletzt|bedrückt|fehler|zweifel|schade|weh", "regal|schnell|danke|kuchen|mütze|tür|hälfte|halbes"], min: 2 }
      ], tipp: "Zwei Schritte: 1. Was hat Opa am Tisch beobachtet? 2. Wie fühlt er sich deshalb vermutlich?", hilfen: ["So kannst du beginnen: Opa hat gemerkt, dass …", "Stellen, die dir helfen: Tilos schnelles „Danke“, die Kamera im Regal, der Kuchen, den Opa nicht aufisst."] }
    ] },
    { kurz: "Perspektive", ober: "Üben", titel: "Ein Augenblick – mehrere Sichtweisen", teile: [
      { art: "beispiel", nur: "R", kopf: "Derselbe Augenblick, zweimal erzählt", html: "<p><b>So steht es in der Geschichte</b> (der Erzähler bleibt bei Tilo):<br><i>Tilo nickte. Er stellte die Kamera ins Regal, zwischen die Pokale vom Schwimmen.</i></p><p><b>So könnte Opa es erzählen:</b><br><i>Der Junge nickte, aber er sah mich nicht an. Dann stellte er die Kamera ins Regal, zwischen seine Pokale. Dort würde sie wohl bleiben.</i></p>" },
      { art: "beispiel", nur: "M", kopf: "Derselbe Augenblick, zweimal erzählt", html: "<p><b>So steht es in der Geschichte</b> (der Erzähler bleibt bei Tilo):<br><i>Tilo nickte und stellte die Kamera ins Regal, zwischen die Pokale vom Schwimmen …</i></p><p><b>So könnte Opa es erzählen:</b><br><i>Der Junge nickte, aber er sah mich nicht an. Dann stellte er die Kamera ins Regal, zwischen seine Pokale. Dort würde sie wohl bleiben.</i></p>" },
      { art: "merke", kopf: "MERKE: Die Perspektive wechseln", html: "<p>Bei einem <button class=\"term\" data-t=\"wechsel\">Perspektivwechsel</button> erzählst du dasselbe Geschehen aus der Sicht einer anderen Figur. Die <button class=\"term\" data-t=\"perspektive\">Erzählperspektive</button> ändert sich, die Handlung nicht.</p><ol><li><b>Wer erzählt jetzt?</b> Schreibe in der <button class=\"term\" data-t=\"ichform\">Ich-Form</button> dieser Figur.</li><li><b>Was weiß sie – und was nicht?</b> Sie sieht und hört, was die anderen tun. Deren Gedanken kann sie nur <button class=\"term\" data-t=\"vermuten\">vermuten</button>: <i>wahrscheinlich, vielleicht, offenbar</i>.</li><li><b>Was fühlt sie dabei?</b> Das darfst du ergänzen – wenn es zum Text passt.</li><li><b>Nichts verändern:</b> Was im Text geschieht, bleibt so.</li></ol>" },
      { art: "mc", id: "persp", tag: "Sichtweisen erkennen", fragen: [
        { q: "Welcher Satz ist aus Opas Sicht erzählt?", o: ["Ich sah, wie der Junge das Papier aufriss, und hielt den Atem an.", "Ich riss das Papier auf und roch sofort den Keller.", "Tilo riss das Papier auf, während Opa die Hände faltete."], a: 0, e: "Hier beobachtet jemand „den Jungen“ – das kann nur Opa sein. Wer das Papier selbst aufreißt, ist Tilo. Im Satz mit beiden Namen spricht ein Erzähler von außen." },
        { q: "Du erzählst die Geburtstagsszene aus Opas Sicht. Was kann Opa nicht wissen?", o: ["was Tilo in diesem Moment über ihn denkt", "dass Tilo sich nur kurz und schnell bedankt", "dass die Kamera danach im Regal steht"], a: 0, e: "Opa sieht und hört, was Tilo tut. In Tilos Kopf kann er nicht schauen – er kann nur vermuten: „Wahrscheinlich dachte er …“" }
      ] },
      { art: "offen", id: "sicht", tag: "Selbst formulieren", titel: "Jetzt wechselst du die Perspektive", fragen: [
        { q: "Tilo bedankt sich bei Opa – schnell und ohne ihn anzusehen. Erzähle diesen Augenblick aus Tilos Sicht in der Ich-Form und verrate dabei, was er fühlt. (Ein bis zwei Sätze)", m: "Ich sagte schnell „Danke, Opa“ und schaute auf den Kuchen, damit niemand merkte, wie enttäuscht ich war.", k: ["ich |mir |mich |mein", "enttäusch|traurig|ärger|wütend|schäm|peinlich|gewünscht|handy|freute mich nicht|keine freude|schlecht", "danke|bedank|kuchen|opa"], min: 3 },
        { q: "Opa steht an der Tür und dreht sich noch einmal um. Erzähle aus Opas Sicht in der Ich-Form, was er tut und was er dabei denkt. (Ein bis zwei Sätze)", m: "An der Tür drehte ich mich noch einmal um, weil ich dem Jungen etwas erklären wollte. Aber mir fielen die richtigen Worte nicht ein, und so zog ich nur meine Mütze tiefer.", k: ["ich |mir |mich |mein", "tür|mütze|umdreh|drehte|dreh", "wollte|dachte|fiel|worte|sagen|erklären|wusste|hoffte|fragte mich|vielleicht"], min: 3 }
      ], tipp: "Ersetze den Namen durch „ich“. Frage dich dann: Was sieht diese Figur? Was fühlt sie? Was weiß sie nicht?", hilfen: ["So kannst du beginnen: Ich sagte … / An der Tür …", "Tilo fühlt Enttäuschung und vielleicht auch Scham. Opa möchte etwas erklären, findet aber keine Worte."] },
      { art: "offen", id: "mutter", m7: true, tag: "Dritte Sicht", titel: "Und die Mutter?", fragen: [
        { q: "Tilos Mutter sitzt mit am Tisch und beobachtet beide. Erzähle den Augenblick des „Danke“ aus ihrer Sicht in der Ich-Form (zwei Sätze): Was sieht sie – und was vermutet sie bei Tilo und bei Opa?", m: "Ich sah, wie Tilo sich viel zu schnell bedankte und dabei auf den Kuchen starrte. Wahrscheinlich war er enttäuscht, und an Opas gefalteten Händen merkte ich, dass er es auch gespürt hatte.", k: ["ich |mir |mich |mein", "tilo|sohn|junge", "opa|vater|großvater", "vermut|wahrscheinlich|vielleicht|ahnte|schien|offenbar|bestimmt|wohl|merkte|spürte|glaub"] }
      ], tipp: "Die Mutter kennt beide gut, aber auch sie kann nur beobachten und vermuten. Nenne etwas, das sie sieht, und zieh daraus einen Schluss." }
    ] },
    { kurz: "Schreibform", ober: "Vorbereiten", titel: "Deine Schreibform", teile: [
      { art: "beispiel", nur: "R", kopf: "So kann ein Brief an eine Figur beginnen (hier: an Jaro, einen Jungen aus einer anderen Geschichte)", html: "<p><i>Lieber Jaro,</i></p><p><i>ich habe gelesen, wie du im Treppenhaus den Zettel entdeckt hast. Dass du wütend warst, kann ich gut verstehen. Aber als du deine Nachbarin so angefahren hast, habe ich mich gefragt: Woher wolltest du wissen, dass sie es war? …</i></p><p>Anrede – Anlass – eine Stelle aus der Geschichte – die eigene Meinung: Das alles steckt schon in diesen wenigen Sätzen.</p>" },
      { art: "merke", nur: "R", kopf: "MERKE: Brief oder E-Mail an eine Figur", html: "<p>Du schreibst als <b>du selbst</b> – an eine Figur, als gäbe es sie wirklich.</p><ul><li><b>Anrede</b> – passend zum <button class=\"term\" data-t=\"adressat\">Adressaten</button>: <i>Lieber Tilo,</i></li><li><b><button class=\"term\" data-t=\"anlass\">Anlass</button></b> – warum du schreibst: <i>Ich habe gelesen, wie …</i></li><li><b>Hauptteil</b> – was du beobachtet hast, was du darüber denkst, was du fragst oder rätst. Nenne mindestens eine Stelle aus der Geschichte.</li><li><b>Schlusssatz und Gruß</b></li></ul><p>Der Ton: ehrlich, aber freundlich. Eine Figur in deinem Alter darfst du duzen.</p>" },
      { art: "sort", id: "form", nur: "R", tag: "Sortieren", titel: "Passt das in deinen Brief an Tilo?", buckets: ["passt", "passt nicht"], cols: 240, items: [
        { t: "Lieber Tilo,", b: 0 },
        { t: "Ich kann verstehen, dass du enttäuscht warst.", b: 0 },
        { t: "Mir ist aufgefallen, dass dein Opa früher gegangen ist.", b: 0 },
        { t: "Viele Grüße", b: 0 },
        { t: "Sehr geehrter Herr Tilo,", b: 1 },
        { t: "Tilo ist die Hauptfigur der Geschichte.", b: 1 },
        { t: "Du bist so undankbar, das ist echt das Letzte.", b: 1 },
        { t: "Mit vorzüglicher Hochachtung", b: 1 }
      ] },
      { art: "mc", id: "form2", nur: "R", tag: "Der richtige Ton", fragen: [
        { q: "Welcher Anfang passt zu einem Brief an Tilo?", o: ["Lieber Tilo, ich habe deine Geschichte gelesen und möchte dir etwas dazu sagen.", "Sehr geehrte Damen und Herren, hiermit nehme ich zu dem Vorfall Stellung.", "In der Kurzgeschichte „Das Geschenk“ geht es um einen Jungen namens Tilo."], a: 0, e: "Ein Brief spricht den Adressaten direkt an und nennt den Anlass. Der dritte Satz redet über Tilo – nicht mit ihm." },
        { q: "Du willst Tilo sagen, dass sein „Danke“ nicht ehrlich klang. Welcher Satz trifft den Ton?", o: ["Ich glaube, dein Opa hat gemerkt, dass dein Dank nicht von Herzen kam.", "Du bist so undankbar, dass man sich für dich schämen muss.", "Der Dank der Hauptfigur wirkt auf den Leser wenig überzeugend."], a: 0, e: "Ehrlich, aber freundlich – so kann Tilo die Kritik annehmen. Beschimpfen hilft nicht, und der sachliche Satz gehört in eine Textuntersuchung, nicht in einen Brief." }
      ] },
      { art: "beispiel", nur: "M", kopf: "So klingt ein innerer Monolog (hier: Tilos Mutter beim Abräumen)", html: "<p><i>Dieses „Danke“. Viel zu schnell. Hat Opa es gemerkt? Natürlich hat er es gemerkt, er merkt alles. Und ich sitze daneben und schneide Kuchen. Hätte ich etwas sagen sollen? Aber was? Dass der Junge eben vierzehn ist? Das weiß er selbst.</i></p>" },
      { art: "merke", nur: "M", kopf: "MERKE: Der innere Monolog", html: "<p>Im <button class=\"term\" data-t=\"monolog\">inneren Monolog</button> hörst du einer Figur beim Denken zu. Sie spricht nur mit sich selbst – niemand hört zu, niemand antwortet.</p><ul><li><b>Ich-Form</b>, meist <b>Präsens</b>; kein Erzähler, keine Redebegleitsätze, keine Anrede.</li><li><b>Gedanken springen:</b> Fragen, Ausrufe, abgebrochene Sätze, Erinnerungen, Zweifel.</li><li><b>Die Figur weiß nur, was sie wissen kann.</b> Was andere denken, vermutet sie.</li><li><b>Nah am Text:</b> Nichts darf dem widersprechen, was in der Geschichte steht.</li></ul>" },
      { art: "sort", id: "form", nur: "M", tag: "Sortieren", titel: "Innerer Monolog oder Erzählerbericht?", lead: "Tilo steht am Ende vor Opas Tür. Dieselben Gedanken – in zwei Formen.", buckets: ["innerer Monolog", "Erzählerbericht"], cols: 240, items: [
        { t: "Was sage ich jetzt? Entschuldigung? Danke?", b: 0 },
        { t: "Und wenn er gar nicht da ist?", b: 0 },
        { t: "Zweimal klingeln. Nicht öfter.", b: 0 },
        { t: "Er fragte sich, was er sagen sollte.", b: 1 },
        { t: "Tilo befürchtete, dass niemand zu Hause war.", b: 1 },
        { t: "Er klingelte zweimal und wartete.", b: 1 }
      ] },
      { art: "mc", id: "form2", nur: "M", tag: "Die Form treffen", fragen: [
        { q: "Welcher Satz könnte aus einem inneren Monolog von Tilo vor Opas Tür stammen?", o: ["Und wenn er fragt, warum ich komme – was sage ich dann?", "Tilo überlegte, was er auf Opas Frage antworten würde.", "„Warum kommst du?“, fragte Opa und öffnete die Tür."], a: 0, e: "Ich-Form, Präsens, eine Frage an sich selbst: So klingen Gedanken. Der zweite Satz ist Erzählerbericht, der dritte ein Stück Dialog." },
        { q: "Was unterscheidet den inneren Monolog von einem Brief?", o: ["Die Figur spricht nur mit sich selbst – ohne Anrede und ohne Gruß.", "Ein Erzähler berichtet in der Er-Form, was die Figur denkt.", "Die Figur wendet sich höflich an eine bestimmte Leserin."], a: 0, e: "Ein Brief hat einen Adressaten. Im inneren Monolog hört niemand zu – deshalb darf er sprunghaft, unfertig und ganz ehrlich sein." }
      ] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt schreibst du weiter", teile: [
      { art: "text", html: "<p class=\"lead\">In der Schreibwerkstatt arbeitest du in vier Schritten: <b>Planen → Schreiben → Überarbeiten → Abgeben</b>. Die Geschichte kannst du jederzeit als Material einblenden. Dein Text wird beim Schreiben automatisch gespeichert.</p>" },
      { art: "aufsatz", id: "aufsatz", tag: "Schreibwerkstatt", titel: "Das Geschenk – mein Text zu einer Figur", form: { R: "brief", M: "monolog" },
        auftrag: {
          R: "<p>Du hast Tilos Geburtstag miterlebt – als Leserin oder Leser. Jetzt meldest du dich bei ihm.</p><p>Schreibe einen <b>Brief oder eine E-Mail an Tilo</b> (mindestens 100 Wörter):</p><ul><li>Beginne mit einer Anrede und sag, warum du schreibst.</li><li>Sag Tilo, wie du sein Verhalten am Geburtstag siehst: Was kannst du verstehen, was nicht?</li><li>Schreibe ihm, was dir an seinem Opa aufgefallen ist. Nenne dazu eine Stelle aus der Geschichte.</li><li>Stell ihm eine Frage oder gib ihm einen Rat: Was könnte er Opa als Nächstes sagen? Was sollte auf den neuen Film?</li><li>Ende mit einem Schlusssatz und einem Gruß.</li></ul>",
          M: "<p>Der Abend von Tilos Geburtstag. Der Großvater ist nach Hause gegangen – früher als sonst. Jetzt sitzt er allein in seiner Küche.</p><p>Verfasse einen <b>inneren Monolog des Großvaters</b> (mindestens 150 Wörter):</p><ul><li>Lass ihn durchgehen, was er am Nachmittag beobachtet hat. Er kennt nur, was er selbst sehen und hören konnte.</li><li>Zeige seine Gefühle und Zweifel: War das Geschenk ein Fehler? Warum hat er an der Tür nichts gesagt?</li><li>Lass eine Erinnerung aufsteigen, die zu der Kamera gehört. Bleib bei dem, was die Geschichte hergibt.</li><li>Schreibe in der Ich-Form und im Präsens – mit Fragen, Ausrufen und Gedankensprüngen, ohne Erzähler.</li><li>Ende mit einem Entschluss oder mit einer offenen Frage.</li></ul>"
        },
        material: { lesetext: { R: "lit-geschenk-r", M: "lit-geschenk-m" } },
        min: { R: 100, M: 150 },
        kriterien: {
          R: ["Mein Brief beginnt mit einer Anrede und nennt den Anlass.", "Ich sage Tilo ehrlich und freundlich, wie ich sein Verhalten sehe.", "Ich beziehe mich auf mindestens eine Stelle aus der Geschichte.", "Ich stelle Tilo eine Frage oder gebe ihm einen Rat.", "Am Ende stehen ein Schlusssatz und ein Gruß."],
          M: ["Der Großvater spricht durchgehend in der Ich-Form – ohne Erzähler und ohne Anrede.", "Er weiß nur, was er selbst sehen und hören konnte; anderes vermutet er.", "Gefühle und Zweifel werden deutlich, eine Erinnerung gehört dazu.", "Die Sprache klingt nach Gedanken: Präsens, Fragen, Ausrufe, Gedankensprünge.", "Der Monolog widerspricht der Geschichte nicht und endet mit einem Entschluss oder einer offenen Frage."]
        },
        starter: {
          R: ["Lieber Tilo,", "ich habe gelesen, wie …", "Ich kann verstehen, dass …", "Mir ist aufgefallen, dass dein Opa …", "Hast du dir schon überlegt, …?", "Viele Grüße"],
          M: ["Jetzt sitze ich hier und …", "Warum habe ich nicht …?", "Damals, in jenem Sommer, …", "Ob der Junge …?", "Morgen …"]
        } }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", nur: "R", tag: "Richtig oder falsch?", aussagen: [
        ["Was eine Figur fühlt, erkennt man oft an dem, was sie tut oder verschweigt.", true],
        ["Wer die Perspektive wechselt, darf die Handlung nach Belieben ändern.", false],
        ["Eine Figur kann die Gedanken einer anderen Figur nur vermuten.", true],
        ["Ein Brief an eine Figur braucht Anrede, Anlass, Schlusssatz und Gruß.", true],
        ["In einem Brief an eine Figur rede ich über die Figur, nicht mit ihr.", false],
        ["Wer sich auf eine Stelle im Text bezieht, macht seinen Brief überzeugender.", true]
      ] },
      { art: "tf", id: "sicher", nur: "M", tag: "Richtig oder falsch?", aussagen: [
        ["Was eine Figur fühlt, erkennt man oft an dem, was sie tut oder verschweigt.", true],
        ["Wer die Perspektive wechselt, darf die Handlung nach Belieben ändern.", false],
        ["Eine Figur kann die Gedanken einer anderen Figur nur vermuten.", true],
        ["Ein innerer Monolog steht in der Ich-Form und kommt ohne Erzähler aus.", true],
        ["Im inneren Monolog spricht die Figur ihre Leser höflich an.", false],
        ["Fragen, Ausrufe und abgebrochene Sätze passen gut zu einem inneren Monolog.", true]
      ] }
    ] }
  ],
  weiter: { href: "index.html#literatur", titel: "Zurück zur Übersicht", text: "Du hast alle sechs Module zu Literatur und Textanalyse geschafft. In der Übersicht findest du die anderen Bereiche – und die Probe, sobald deine Lehrkraft sie freischaltet." }
});
