/* Deutsch 7 · Argumentieren und diskutieren · Einen Aufruf schreiben
   Auftrag vom 19.10.2026 (mit Fotos von drei Seiten des Deutschbuchs, Kapitel „Einen Aufruf schreiben“): ein Modul zu genau
   diesen Seiten, die Fragen beantworten die Kinder im Modul mit KI-Unterstützung und Tipps, dazu ein Regelheft-Eintrag und
   eine Hausaufgabe. Gewünscht war „exakt 1:1 inklusive text“ – das geht auf der öffentlichen Seite nicht (Urheberrecht,
   § 60a UrhG schließt Schulbücher aus; siehe auch die Vorgabe „keine Schulbuch-Kopien“). Deshalb: derselbe Ablauf und
   dieselben Themen wie im Buch (Aufruf zum Trinkwasser untersuchen → Gespräch übers Papiersparen → Mindmap → Adressaten,
   informierende und auffordernde Sätze, Argumente → Überschrift → Entwurf → überarbeiten), aber eigene Texte, eigene
   Namen, eigene Aufgabenformulierungen und selbst gezeichnete Bilder. Zahlen zum Wasser- und Papierverbrauch sind nachgeprüfte
   Richtwerte (Toilettenspülung 6 bis 9 Liter, Zähneputzen bei laufendem Hahn etwa 5 bis 7 Liter je Minute, Vollbad etwa
   150 Liter, fünf Minuten Duschen etwa 50 Liter; Papier in Deutschland rund 220 kg je Person und Jahr).
   LehrplanPLUS D7 3.2 (appellative und argumentierende Texte verfassen), 3.1 (Schreibprozess planen), 3.3 (überarbeiten).
   Für beide Züge gleich. */
(function () {
  // Aufruf der (erfundenen) Klasse 7c als Beitrag auf der Schulhomepage – eigener Text, selbst gezeichneter Tropfen
  const TROPFEN = '<svg viewBox="0 0 120 120" width="110" height="110" aria-hidden="true" style="flex:none"><defs><linearGradient id="arTr" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7cc4f2"/><stop offset="1" stop-color="#1f74b8"/></linearGradient></defs>' +
    '<ellipse cx="60" cy="104" rx="38" ry="8" fill="#cfe6f7"/><ellipse cx="60" cy="104" rx="22" ry="4.5" fill="none" stroke="#9ccbee" stroke-width="2"/>' +
    '<path d="M60 10 C60 10 30 50 30 70 a30 30 0 0 0 60 0 C90 50 60 10 60 10 Z" fill="url(#arTr)"/><path d="M46 66 a14 14 0 0 0 10 16" fill="none" stroke="#fff" stroke-width="5" stroke-linecap="round" opacity=".75"/></svg>';
  const AUFRUF = '<div class="ar-seite"><div class="ar-leiste">🏫 Schulhomepage · Neues aus den Klassen</div>' +
    '<h3 class="ar-titel">Jeder Tropfen zählt – spart Trinkwasser!</h3>' +
    '<div class="ar-inhalt">' + TROPFEN + '<div><p>Ohne Wasser gibt es kein Leben: Kein Mensch, kein Tier und keine Pflanze kann ohne Wasser überleben. Zwar ist der größte Teil unserer Erde mit Wasser bedeckt, doch fast alles davon ist salziges Meerwasser. Von 100 Litern Wasser auf der Erde sind nur etwa 3 Liter Süßwasser – und das meiste davon ist im Eis der Pole gefroren.</p>' +
    '<p>Bevor Wasser aus unserem Wasserhahn kommt, muss es aufwendig gereinigt werden. Das kostet viel Energie und Geld. Trotzdem gehen wir oft sorglos mit unserem Trinkwasser um: Bei jedem Spülen der Toilette fließen bis zu 9 Liter weg. Wer beim Zähneputzen drei Minuten lang das Wasser laufen lässt, verbraucht ungefähr 20 Liter. Ein volles Bad braucht etwa 150 Liter, fünf Minuten Duschen nur ungefähr 50 Liter.</p></div></div>' +
    '<div class="ar-mitmachen"><b>Macht mit!</b><ul><li>Drückt bei der Toilettenspülung die Spartaste!</li><li>Duscht lieber, statt zu baden!</li><li>Dreht beim Zähneputzen den Hahn zu – das ist echt easy!</li></ul></div>' +
    '<p class="ar-gruss">Eure Klasse 7c</p></div>';
  // Mindmap zum Papiersparen (eigene Zeichnung): drei Äste, die Kinder ordnen danach die Ideen aus dem Gespräch zu
  const MINDMAP = '<svg class="ar-mindmap" viewBox="0 0 640 230" role="img" aria-label="Mindmap: In der Mitte steht „Papier sparen“. Drei Äste: „Recyclingpapier verwenden“, „weniger Papier verbrauchen“ und „wiederverwenden“. An jedem Ast stehen noch Pünktchen für Ideen." style="width:100%;max-width:640px;height:auto">' +
    '<g stroke="#c98a3a" stroke-width="3" fill="none"><path d="M320 115 C250 115 230 50 150 50"/><path d="M320 115 C390 115 410 50 490 50"/><path d="M320 115 C320 160 330 185 330 195"/>' +
    '<path d="M150 50 L60 50"/><path d="M150 50 C120 50 110 90 70 92"/><path d="M490 50 L580 50"/><path d="M490 50 C520 50 530 90 570 92"/><path d="M330 195 L240 205"/><path d="M330 195 L420 205"/></g>' +
    '<rect x="230" y="92" width="180" height="46" rx="23" fill="#fff7ec" stroke="#c98a3a" stroke-width="3"/><text x="320" y="121" text-anchor="middle" font-size="18" font-weight="700" fill="#5a3a12">Papier sparen</text>' +
    '<g font-size="15" fill="#3b2a14" text-anchor="middle"><text x="140" y="40">Recyclingpapier verwenden</text><text x="500" y="40">weniger Papier verbrauchen</text><text x="330" y="186">wiederverwenden</text></g>' +
    '<g font-size="16" fill="#9a7b55" text-anchor="middle"><text x="44" y="56">…</text><text x="62" y="108">…</text><text x="598" y="56">…</text><text x="578" y="108">…</text><text x="232" y="222">…</text><text x="428" y="222">…</text></g></svg>';

  D7Kit.seite({
    id: "arg-10",
    titel: "Einen Aufruf schreiben",
    einleitung: "Mit einem Aufruf willst du andere überzeugen, etwas zu tun – zum Beispiel Wasser oder Papier zu sparen. Du untersuchst einen Aufruf, sammelst Ideen, planst und schreibst deinen eigenen. Die KI gibt dir zu jeder Antwort eine Rückmeldung.",
    zeit: "etwa 90 Minuten (zwei Unterrichtsstunden) und eine Hausaufgabe",
    ziele: ["🔎 Ich erkenne, an wen sich ein Aufruf richtet und was er erreichen will.", "🧠 Ich sammle Ideen und Argumente in einer Mindmap.", "📣 Ich formuliere Aufforderungssätze und eine Überschrift, die neugierig macht.", "✍️ Ich schreibe und überarbeite meinen eigenen Aufruf."],
    glossar: {
      aufruf: ["Aufruf", "Ein Text, der Menschen überzeugen will, etwas zu tun: „Macht mit!“"],
      appell: ["Appell", "Eine eindringliche Aufforderung: Die Leser sollen etwas tun oder lassen."],
      homepage: ["Schulhomepage", "Die Internetseite der Schule. Dort lesen Schüler, Eltern und Lehrkräfte Neuigkeiten."],
      adressat: ["Adressat", "Die Person oder Gruppe, an die sich ein Text richtet."],
      suesswasser: ["Süßwasser", "Wasser ohne Salz, zum Beispiel in Flüssen, Seen und im Grundwasser. Nur daraus kann Trinkwasser werden."],
      spartaste: ["Spartaste", "Ein kleiner Knopf an der Toilettenspülung. Dann fließt weniger Wasser."],
      informieren: ["informieren", "Jemandem Tatsachen mitteilen, damit er Bescheid weiß."],
      auffordern: ["auffordern", "Jemandem sagen, was er tun soll: „Kauft Hefte aus Recyclingpapier!“"],
      argument: ["Argument", "Ein Grund, der zeigt, dass deine Meinung stimmt."],
      recyclingpapier: ["Recyclingpapier", "Papier, das aus Altpapier gemacht wird. Dafür müssen keine neuen Bäume gefällt werden."],
      altpapier: ["Altpapier", "Gebrauchtes Papier, das gesammelt und wieder zu neuem Papier verarbeitet wird."],
      mindmap: ["Mindmap", "Eine Gedankenlandkarte: In der Mitte steht das Thema, an den Ästen stehen die Ideen dazu."],
      schmierpapier: ["Schmierpapier", "Papier für Notizen, das schon auf einer Seite beschrieben ist."],
      entwurf: ["Entwurf", "Die erste Fassung eines Textes. Danach wird er überarbeitet."],
      ueberarbeiten: ["überarbeiten", "Einen Text noch einmal durchgehen und besser machen."]
    },
    stationen: [
      { kurz: "Untersuchen", ober: "Lesen und untersuchen", titel: "Ein Aufruf auf der Schulhomepage", teile: [
        { art: "text", html: "<p class=\"lead\">Die Klasse 7c hat auf der <button class=\"term\" data-t=\"homepage\">Schulhomepage</button> einen <button class=\"term\" data-t=\"aufruf\">Aufruf</button> veröffentlicht. Lies ihn genau.</p>" + AUFRUF },
        { art: "offen", id: "wer", tag: "✨ KI gibt Rückmeldung", titel: "An wen richtet sich der Aufruf?", lead: "Beantworte die Fragen in Stichworten.", fragen: [
          { q: "Wer soll mit dem Aufruf angesprochen werden?", m: "alle, die die Schulhomepage lesen: vor allem die Schülerinnen und Schüler, aber auch Lehrkräfte und Eltern", k: ["schüler|kinder|jugendliche|mitschüler|klasse|alle|leser|eltern|lehr"] }],
          hilfen: ["Achte auf die Anrede im Aufruf: „Macht mit!“, „Drückt …“ – wer ist mit „ihr“ gemeint?", "Überlege: Wer liest die Seiten der Schulhomepage?", "Stichworte wie: die Mitschüler der Klasse 7c, alle Kinder der Schule, auch Eltern und Lehrkräfte."] },
        { art: "offen", id: "wo", tag: "✨ KI gibt Rückmeldung", fragen: [
          { q: "Warum veröffentlicht die Klasse 7c ihren Text auf der Schulhomepage?", m: "Dort lesen ihn viele Menschen der Schule: Schüler, Lehrkräfte und Eltern. So erreicht der Aufruf viele.", k: ["viele|alle|jeder|lesen|erreich|sehen|ganze schule|eltern"] }],
          hilfen: ["Wie viele Menschen würden den Aufruf lesen, wenn er nur im Klassenzimmer hängen würde?", "Auf der Homepage lesen ihn … (wer alles?)"] },
        { art: "offen", id: "ziel", tag: "✨ KI gibt Rückmeldung", fragen: [
          { q: "Was möchte die Klasse 7c mit ihrem Aufruf erreichen?", m: "Alle sollen weniger Trinkwasser verbrauchen und sorgsam damit umgehen.", k: ["spar|weniger|sorgsam|nicht verschwend|achten|bewusst|verbrauch"] }],
          hilfen: ["Lies die Überschrift noch einmal.", "Was sollen die Leser nach dem Lesen anders machen als vorher?"] },
        { art: "sort", id: "teile", tag: "Sortieren", titel: "Informiert der Satz – oder fordert er auf?", lead: "Ein Aufruf hat zwei Arten von Sätzen. Ordne die Sätze aus dem Aufruf zu.", buckets: ["informiert", "fordert auf"], cols: 200, items: [
          { t: "Von 100 Litern Wasser auf der Erde sind nur etwa 3 Liter Süßwasser.", b: 0 },
          { t: "Drückt bei der Toilettenspülung die Spartaste!", b: 1 },
          { t: "Ein volles Bad braucht etwa 150 Liter.", b: 0 },
          { t: "Duscht lieber, statt zu baden!", b: 1 },
          { t: "Wasser muss aufwendig gereinigt werden.", b: 0 },
          { t: "Dreht beim Zähneputzen den Hahn zu!", b: 1 }] },
        { art: "offen", id: "info", tag: "✨ KI gibt Rückmeldung", titel: "Untersuche den Aufruf genauer", fragen: [
          { q: "Worüber informieren die Schülerinnen und Schüler? Nenne zwei Informationen aus dem Aufruf.", m: "Nur etwa 3 von 100 Litern Wasser auf der Erde sind Süßwasser. Bei jedem Spülen der Toilette fließen bis zu 9 Liter Trinkwasser weg.", k: ["süßwasser|3 liter|drei|salz|meer|eis|reinig|energie|geld", "toilette|spül|zähne|bad|dusch|liter"] },
          { q: "Zu welchem Handeln fordert die Klasse 7c die Leserinnen und Leser auf? Nenne zwei Beispiele.", m: "Bei der Toilettenspülung die Spartaste drücken und duschen statt baden.", k: ["spartaste|taste|spül|dusch|bad|zähne|hahn|zudreh"] }],
          hilfen: ["Informationen sind Tatsachen, oft mit Zahlen. Aufforderungen enden oft mit einem Ausrufezeichen.", "Schau für die zweite Frage in den Kasten „Macht mit!“."] },
        { art: "merke", kopf: "Info: Der Aufruf", html: "<p>Mit einem <button class=\"term\" data-t=\"aufruf\">Aufruf</button> will jemand andere von etwas überzeugen und sie dazu bringen, sich auf eine bestimmte Weise zu verhalten. Darin stehen meist drei Arten von Textteilen:</p><ul><li>Sätze, die <button class=\"term\" data-t=\"informieren\">informieren</button> (Tatsachen, Zahlen),</li><li>Sätze, die begründen (<button class=\"term\" data-t=\"argument\">Argumente</button>),</li><li>Sätze, die <button class=\"term\" data-t=\"auffordern\">auffordern</button> (Macht mit! Dreht den Hahn zu!).</li></ul>" }
      ] },
      { kurz: "Ideen", ober: "Ideen sammeln", titel: "Die Klasse 7d will Papier sparen", teile: [
        { art: "text", html: "<p>Die Klasse 7d hat den Aufruf gelesen und spricht darüber. Lies das Gespräch.</p>" },
        { art: "lesetext", lesetext: "arg-gespraech-papier" },
        { art: "text", html: "<p>Sara, Emil, Mehmet, Lea und Jonas wollen selbst einen Text für die Schulhomepage schreiben. Sie wollen alle dazu aufrufen, weniger Papier zu verbrauchen. Dafür ordnen sie ihre Ideen in einer <button class=\"term\" data-t=\"mindmap\">Mindmap</button>.</p>" + MINDMAP },
        { art: "sort", id: "mindmap", tag: "Mindmap ordnen", titel: "An welchen Ast der Mindmap gehört die Idee?", lead: "Die Ideen stammen aus dem Gespräch.", buckets: ["Recyclingpapier verwenden", "weniger Papier verbrauchen", "wiederverwenden"], cols: 190, items: [
          { t: "Hefte aus Recyclingpapier kaufen", b: 0 },
          { t: "Blöcke aus Altpapier nehmen", b: 0 },
          { t: "die Rückseite als Schmierpapier benutzen", b: 1 },
          { t: "Spültuch statt Küchenpapier", b: 1 },
          { t: "Arbeitsblätter auf beiden Seiten kopieren", b: 1 },
          { t: "Geschenke in alte Zeitungen einpacken", b: 2 }] },
        { art: "offen", id: "eigen", tag: "✨ KI gibt Rückmeldung", titel: "Deine eigenen Ideen und Argumente", fragen: [
          { q: "Was spricht dafür, weniger Papier zu verbrauchen? Nenne ein Argument und eine eigene Idee, die noch nicht im Gespräch vorkommt.", m: "Argument: Wenn wir weniger Papier verbrauchen, müssen weniger Bäume gefällt werden, und das schützt den Wald. Idee: Hausaufgaben auf der Lernplattform abgeben statt auf Papier.", k: ["baum|wald|bäume|umwelt|wasser|energie|klima|tier|müll", "idee|digital|tablet|lernplattform|handtuch|stoff|beutel|tasche|drucken|ausdrucken"] }],
          hilfen: ["Denk an die Folgen: Was passiert für neues Papier mit dem Wald, mit Wasser und Energie?", "Ideen findest du überall: in der Schule (Drucker, Hefte), zu Hause (Küche, Bad), beim Einkaufen (Tüten, Prospekte).", "Satzanfänge: „Wenn wir weniger Papier verbrauchen, …“ · „Eine weitere Idee ist, …“"] }
      ] },
      { kurz: "Planen", ober: "Den Aufruf planen", titel: "Für wen schreibst du – und was sollen die Leser tun?", teile: [
        { art: "text", html: "<p>Die Klasse 7d will mit ihrem Aufruf die Mitschülerinnen und Mitschüler und auch die Lehrkräfte informieren. Am Schluss soll ein <button class=\"term\" data-t=\"appell\">Appell</button> stehen.</p>" },
        { art: "offen", id: "adressat", tag: "✨ KI gibt Rückmeldung", titel: "Jugendliche und Erwachsene ansprechen", fragen: [
          { q: "Der Aufruf soll Jugendliche und auch Erwachsene ansprechen. Worauf musst du beim Schreiben achten? Nenne zwei Punkte.", m: "Ich schreibe verständlich und höflich und benutze nicht zu viele Jugendwörter wie „easy“. Ich nenne Gründe, die auch Erwachsene überzeugen, und spreche alle an.", k: ["verständlich|einfach|klar|höflich|sachlich|freundlich|ordentlich", "jugend|wörter|slang|easy|cool|erwachsene|alle|gründe|argument|anrede"] }],
          hilfen: ["Lies im Aufruf zum Wasser den Satz „das ist echt easy!“. Würde deine Lehrerin so schreiben?", "Überlege: Welche Wörter verstehen alle? Welche Gründe überzeugen auch Eltern und Lehrkräfte?"] },
        { art: "offen", id: "warum", tag: "✨ KI gibt Rückmeldung", titel: "Überlege", fragen: [
          { q: "Warum sollten in einem Aufruf zum Papiersparen sowohl informierende als auch auffordernde Sätze stehen?", m: "Die Informationen erklären, warum Papiersparen wichtig ist. Die Aufforderungen sagen, was die Leser konkret tun sollen.", k: ["inform|erklär|wissen|warum|grund|tatsache", "auffordern|tun|handeln|machen|sollen|mitmachen"] },
          { q: "Warum ist es hilfreich, die eigene Meinung mit Argumenten zu begründen?", m: "Mit Argumenten überzeugt man die Leser eher, weil sie verstehen, warum sie mitmachen sollen.", k: ["überzeug|versteh|glaub|einseh|mitmach|grund|ernst"] }],
          hilfen: ["Stell dir einen Aufruf nur mit Befehlen vor: „Spart Papier! Kauft Recyclinghefte!“ Würdest du mitmachen, wenn du nicht weißt, warum?", "Informationen beantworten die Frage „Warum?“, Aufforderungen die Frage „Was soll ich tun?“."] },
        { art: "sort", id: "infos", tag: "Sortieren", titel: "Information oder Aufforderung?", lead: "Diese Sätze könnten im Aufruf der Klasse 7d stehen.", buckets: ["sachliche Information", "Aufforderung"], cols: 200, items: [
          { t: "Jeder Mensch in Deutschland verbraucht im Jahr über 200 Kilogramm Papier.", b: 0 },
          { t: "Kauft Hefte aus Recyclingpapier!", b: 1 },
          { t: "Für neues Papier werden Bäume gefällt.", b: 0 },
          { t: "Benutzt die Rückseite als Schmierpapier!", b: 1 },
          { t: "Recyclingpapier braucht nur etwa halb so viel Energie.", b: 0 },
          { t: "Packt Geschenke in alte Zeitungen ein!", b: 1 }] },
        { art: "offen", id: "auff", tag: "✨ KI gibt Rückmeldung", titel: "Aufforderungssätze", fragen: [
          { q: "Zu welchem Verhalten möchtest du die Leserinnen und Leser auffordern? Schreibe drei Aufforderungssätze. Starthilfe: „Achtet beim Heftkauf auf das Recyclingzeichen!“", m: "Benutzt die Rückseite von Blättern als Schmierpapier! Nehmt zu Hause ein Spültuch statt Küchenpapier! Packt Geschenke in alte Zeitungen ein!", k: ["benutz|nehmt|kauft|packt|verwendet|spart|achtet|druckt|kopiert|schreibt|macht|!"] }],
          hilfen: ["Ein Aufforderungssatz beginnt oft mit dem Verb und endet mit „!“: „Kauft …!“, „Benutzt …!“", "Nimm Ideen aus deiner Mindmap: Recyclingpapier, Schmierpapier, Spültuch, Geschenkpapier …"] },
        { art: "offen", id: "ueber", tag: "✨ KI gibt Rückmeldung", titel: "Eine Überschrift, die neugierig macht", fragen: [
          { q: "Formuliere eine Überschrift für den Aufruf zum Papiersparen, die neugierig macht.", m: "Papier wächst nicht auf Bäumen – oder doch?", k: ["papier|baum|bäume|wald|spar|recycl|blatt"] }],
          hilfen: ["Gute Überschriften sind kurz. Sie stellen eine Frage, spielen mit Wörtern oder überraschen.", "Vorbild: „Jeder Tropfen zählt – spart Trinkwasser!“ Was wäre so etwas für Papier?"] }
      ] },
      { kurz: "Schreiben", ober: "Schreiben und überarbeiten", titel: "Dein Aufruf zum Papiersparen", teile: [
        { art: "schreiben", id: "entwurf", tag: "✨ Schreibtrainer", titel: "Schreibe deinen Entwurf",
          auftrag: "<p>Schreibe jetzt deinen <button class=\"term\" data-t=\"entwurf\">Entwurf</button>: einen Aufruf für die Schulhomepage, der Mitschülerinnen, Mitschüler und Lehrkräfte informiert und am Schluss zum Papiersparen auffordert. Verwende deine Ergebnisse aus Station 3. Hole dir eine Rückmeldung und <button class=\"term\" data-t=\"ueberarbeiten\">überarbeite</button> deinen Entwurf danach.</p>",
          kriterien: ["eine Überschrift, die neugierig macht", "eine Einleitung, die zum Weiterlesen anregt", "im Hauptteil Informationen und Argumente zum Papiersparen", "am Schluss Aufforderungssätze: Was sollen die Leser tun?", "passt für Jugendliche und Erwachsene: verständlich und höflich"],
          min: 70, starter: ["Wusstet ihr, dass …", "Für neues Papier …", "Recyclingpapier …", "Deshalb …", "Macht mit: …", "Kauft …!", "Eure Klasse 7…"] },
        { art: "merke", kopf: "Überarbeiten: So prüfst du deinen Entwurf", html: "<ul><li>Macht die Überschrift neugierig?</li><li>Lädt die Einleitung zum Weiterlesen ein?</li><li>Stehen im Hauptteil Informationen und Argumente?</li><li>Sagen die Aufforderungen am Schluss genau, was die Leser tun sollen?</li><li>Stimmen Rechtschreibung und Satzzeichen (Ausrufezeichen!)?</li></ul><p>Tauscht eure Entwürfe auch zu zweit und gebt euch eine Rückmeldung.</p>" }
      ] },
      { kurz: "Regelheft", ober: "Sichern", titel: "Das gehört in dein Regelheft", teile: [
        { art: "regelheft", id: "heft", tag: "Regelheft", titel: "Schreibe den Eintrag in dein Regelheft", lead: "Schreibe sauber ab. Die Überschrift unterstreichst du mit dem Lineal, die roten Wörter schreibst du farbig.", kopf: "Einen Aufruf schreiben",
          html: "<p>Mit einem Aufruf will ich andere von etwas <span class=\"rot\">überzeugen</span> und sie zu einem bestimmten Verhalten <span class=\"rot\">auffordern</span>. Ein Aufruf hat informierende, argumentierende und auffordernde Teile.</p>" +
            "<ol><li><span class=\"rot\">Planen:</span> Für wen schreibe ich? Was will ich erreichen? Ich sammle Informationen und Argumente, zum Beispiel in einer Mindmap.</li>" +
            "<li><span class=\"rot\">Schreiben:</span><br>Überschrift, die neugierig macht<br>Einleitung, die zum Weiterlesen anregt<br>Hauptteil mit Informationen und Argumenten<br>Schluss mit Aufforderungssätzen (Macht mit! Kauft …!)</li>" +
            "<li><span class=\"rot\">Überarbeiten:</span> Inhalt, Sprache und Rechtschreibung prüfen.</li></ol>" },
        { art: "luecke", id: "merk", tag: "Lückentext", absaetze: [
          ["Mit einem Aufruf will ich andere ", { g: "überzeugen" }, " und zu einem Verhalten ", { g: "auffordern" }, "."],
          ["Die Überschrift soll ", { g: "neugierig" }, " machen. Im Hauptteil stehen Informationen und ", { g: "Argumente" }, "."],
          ["Am Schluss stehen ", { g: "Aufforderungssätze" }, ", zum Beispiel: „Macht mit!“"]], extra: ["Geschichte", "verstecken"] },
        { art: "tf", id: "tf", tag: "Richtig oder falsch?", aussagen: [
          ["Ein Aufruf soll Leserinnen und Leser zum Handeln bewegen.", true],
          ["In einem Aufruf stehen nur Befehle, aber keine Informationen.", false],
          ["Mit Argumenten überzeuge ich die Leser eher.", true],
          ["Ein Aufforderungssatz endet oft mit einem Ausrufezeichen.", true],
          ["Für Erwachsene und Jugendliche schreibe ich am besten nur in Jugendsprache.", false]] }
      ] },
      { kurz: "Hausaufgabe", ober: "Zu Hause", titel: "Hausaufgabe: Dein eigener Aufruf", teile: [
        { art: "merke", kopf: "🏠 Hausaufgabe", html: "<p>Schreibe einen Aufruf für die Schulhomepage zu <strong>einem</strong> dieser Themen:</p><ul><li>🗑️ Weniger Müll in der Pause</li><li>💡 Strom sparen in der Schule</li><li>🚲 Mit dem Rad oder zu Fuß zur Schule</li></ul><p>Gehe wie im Regelheft vor: planen, schreiben, überarbeiten. Dein Aufruf braucht eine Überschrift, eine Einleitung, Informationen und Argumente im Hauptteil und Aufforderungssätze am Schluss. Schreibe ihn ins Heft oder hier.</p>" },
        { art: "schreiben", id: "hausaufgabe", tag: "🏠 Hausaufgabe · ✨ Schreibtrainer", titel: "Mein Aufruf",
          auftrag: "<p>Schreibe einen Aufruf für die Schulhomepage zu einem der drei Themen: weniger Müll in der Pause, Strom sparen in der Schule oder mit dem Rad oder zu Fuß zur Schule. Nenne das Thema in der Überschrift.</p>",
          kriterien: ["eine Überschrift, die neugierig macht und zum Thema passt", "eine Einleitung, die zum Weiterlesen anregt", "im Hauptteil Informationen und Argumente", "am Schluss Aufforderungssätze", "verständlich und höflich für Jugendliche und Erwachsene"],
          min: 70, starter: ["Wusstet ihr, dass …", "Jeden Tag …", "Deshalb …", "Macht mit: …", "Lasst …!", "Eure Klasse 7…"] }
      ] }
    ],
    weiter: { href: "index.html#argumentieren", titel: "Zur Übersicht Deutsch 7", text: "In der Übersicht findest du die anderen Module zum Argumentieren – zum Beispiel die Leserbrief-Werkstatt." }
  });
})();
