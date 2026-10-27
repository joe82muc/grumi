/* Deutsch 7 · Argumentieren und diskutieren · Probentraining: Ein Aufruf gegen Müll
   Auftrag vom 27.10.2026 (Fotos von zwei Seiten des Deutschbuchs zur Probenvorbereitung „Aufruf zur Müllvermeidung“ und
   eine Word-Datei der Lehrkraft mit den Lösungen zu zwei Aufgaben): ein kleines Modul für die M7, die Kinder können sich
   Musterlösungen anzeigen lassen und bekommen Tipps Schritt für Schritt. Ablauf wie im Buch (Aufgabe verstehen → Artikel
   lesen → Tabelle Sachinformationen / Verhaltensweisen → eigene Ideen → worauf achten → Aufruf schreiben → mit der
   Checkliste prüfen → Lerntagebuch), aber eigener Artikel, eigene Aufgabentexte und eine selbst gezeichnete Waage statt
   des Buchfotos (siehe Vorgabe „keine Schulbuch-Kopien“). Die beiden Lösungstabellen und der Merksatz stammen aus der
   Word-Datei der Lehrkraft und stehen deshalb wörtlich da; der Artikel enthält genau die Tatsachen, die die Tabelle braucht.
   LehrplanPLUS D7 2.1 (Informationen entnehmen), 3.1 (Schreibprozess planen), 3.2 (appellative Texte), 3.3 (überarbeiten). */
(function () {
  // Waage: Müllsäcke gegen ein 600-kg-Gewicht (eigene Zeichnung)
  const WAAGE = '<svg viewBox="0 0 360 200" role="img" aria-label="Eine Waage: Links liegen Müllsäcke, rechts ein Gewicht mit der Aufschrift 600 kg. Die Waage ist im Gleichgewicht.">' +
    '<rect x="130" y="184" width="100" height="10" rx="5" fill="#6b5640"/><rect x="176" y="62" width="8" height="124" fill="#8a7155"/>' +
    '<rect x="50" y="54" width="260" height="8" rx="4" fill="#5b4a3a"/><circle cx="180" cy="58" r="9" fill="#c98a3a" stroke="#5b4a3a" stroke-width="3"/>' +
    '<g stroke="#7b8794" stroke-width="2"><line x1="80" y1="62" x2="44" y2="138"/><line x1="80" y1="62" x2="116" y2="138"/><line x1="280" y1="62" x2="244" y2="138"/><line x1="280" y1="62" x2="316" y2="138"/></g>' +
    '<path d="M36 138 Q80 160 124 138 Z" fill="#9aa5b1"/><path d="M236 138 Q280 160 324 138 Z" fill="#9aa5b1"/>' +
    '<ellipse cx="62" cy="124" rx="19" ry="15" fill="#2f3e57"/><ellipse cx="98" cy="124" rx="19" ry="15" fill="#3d4a3d"/><ellipse cx="80" cy="104" rx="17" ry="14" fill="#4b5d3a"/>' +
    '<g fill="#1f2a1f"><path d="M58 109 l4 -7 l4 7 z"/><path d="M94 109 l4 -7 l4 7 z"/><path d="M76 90 l4 -7 l4 7 z"/></g>' +
    '<rect x="104" y="96" width="9" height="20" rx="3" fill="#6fb3e0" transform="rotate(20 108 106)"/><rect x="47" y="100" width="12" height="9" rx="2" fill="#e8c547" transform="rotate(-15 53 104)"/>' +
    '<path d="M244 138 L316 138 L306 98 L254 98 Z" fill="#4b5563"/><path d="M270 98 a10 9 0 0 1 20 0" fill="none" stroke="#4b5563" stroke-width="5"/>' +
    '<text x="280" y="125" text-anchor="middle" font-size="15" font-weight="700" fill="#fff">600 kg</text>' +
    '<text x="80" y="178" text-anchor="middle" font-size="13" fill="#3b2a14">Müll von einer Person</text><text x="280" y="178" text-anchor="middle" font-size="13" fill="#3b2a14">in einem Jahr</text></svg>';

  // Lösungen der Lehrkraft (Word-Datei „Müll vermeiden – Aufgaben 4 und 5“)
  const tabelle = (zeilen) => '<table class="mu-tab"><thead><tr><th>Sachinformationen: Was wissen wir über Müll?</th><th>Sinnvolle Verhaltensweisen: Was können wir tun?</th></tr></thead><tbody>' +
    zeilen.map(z => `<tr><td>${z[0]}</td><td>${z[1]}</td></tr>`).join("") + "</tbody></table>";
  const TAB4 = tabelle([
    ["In Deutschland entstehen riesige Mengen Müll.", "Recyclingpapier für Hefte und Blöcke verwenden."],
    ["Pro Person fallen in Deutschland über 600 kg Müll im Jahr an.", "Mehrwegflaschen statt Einwegflaschen benutzen."],
    ["Müll richtig zu entsorgen ist aufwendig und teuer.", "Brotzeitdosen statt Einwegverpackungen verwenden."],
    ["Falsch entsorgter Müll schadet Menschen, Tieren und Pflanzen.", "Verpackungsmüll vermeiden."],
    ["Im Meer sammeln sich riesige Mengen Plastikmüll.", "Weniger Müll produzieren."]]);
  const TAB5 = tabelle([
    ["Plastik bleibt sehr lange in der Umwelt.", "Stofftaschen statt Plastiktüten benutzen."],
    ["Oft werden noch essbare Lebensmittel weggeworfen.", "Nur so viel Essen kaufen, wie man braucht."],
    ["Auf dem Schulhof liegt manchmal Müll.", "Abfälle in den Mülleimer werfen."],
    ["Einwegprodukte verursachen viel Abfall.", "Eine wiederverwendbare Trinkflasche mitbringen."],
    ["Für Papier wird Holz benötigt.", "Papier auf beiden Seiten beschreiben."]]);

  // Musteraufruf mit seinen Bausteinen (eigener Text)
  const teil = (klasse, name, html) => `<div class="mu-teil"><span class="mu-chip ${klasse}">${name}</span><div>${html}</div></div>`;
  const MUSTER = '<details class="mu-muster"><summary>📄 Musteraufruf anzeigen</summary>' +
    teil("c-ueber", "Überschrift", "<h4>Schluss mit dem Müllberg – macht mit!</h4>") +
    teil("c-einl", "Einleitung", "<p>Liebe Mitschülerinnen und Mitschüler,</p><p>wusstet ihr, dass jeder von uns im Jahr mehr als 600 Kilogramm Müll wegwirft? Das ist ungefähr so viel, wie eine ausgewachsene Kuh wiegt! Auch bei uns quellen nach jeder Pause die Mülleimer über.</p>") +
    teil("c-info", "Hauptteil: Informationen", "<p>Der ganze Abfall verschwindet nicht einfach. Er muss abgeholt, sortiert, verbrannt oder wiederverwertet werden. Das ist aufwendig und kostet viel Geld.</p>") +
    teil("c-arg", "Hauptteil: Argumente", "<p>Noch schlimmer ist es, wenn Müll in der Natur landet, denn dann schadet er Menschen, Tieren und Pflanzen. In den Meeren treibt schon so viel Plastik, dass Fische, Seevögel und Schildkröten daran sterben. Weniger Müll schützt also die Umwelt – und spart obendrein Geld.</p>") +
    teil("c-auff", "Aufforderungen", "<p>Dabei können wir ganz leicht etwas tun: Bringt eure Brotzeit in einer Dose statt in Alufolie mit! Füllt eure Getränke in Mehrwegflaschen oder in eine Trinkflasche! Kauft Hefte und Blöcke aus Recyclingpapier! Und was trotzdem übrig bleibt, gehört in den richtigen Mülleimer!</p>") +
    teil("c-schluss", "Schluss mit Appell", "<p>Jede Tüte und jeder Becher weniger zählt. Macht mit – für eine saubere Schule und eine saubere Welt!</p><p>Euer Team der Schülerzeitung</p>") +
    "</details>";

  // Entwurf von Ben zum Prüfen mit der Checkliste (eigener Text mit eingebauten Schwächen)
  const BEN = '<div class="mu-ben"><h4>Müll</h4><p>Hallo. In Deutschland gibt es sehr viel Müll. Das ist nicht gut. Auch bei uns in der Schule liegt nach der Pause immer Zeug herum. Ich finde, man sollte weniger Müll machen. Aber das muss jeder selbst wissen.</p><p>Ben</p></div>';

  D7Kit.seite({
    id: "arg-11",
    titel: "Probentraining: Ein Aufruf gegen Müll",
    einleitung: "So übst du für die Probe: Du schreibst Schritt für Schritt einen Aufruf für die Schülerzeitung – von der Aufgabe über einen Internetartikel und eine Tabelle bis zum fertigen Text. Bei jeder Aufgabe helfen dir Tipps in Stufen. Zum Schluss kannst du dir die Musterlösung anzeigen lassen und vergleichen.",
    zeit: "etwa 45 Minuten",
    ziele: ["🔎 Ich verstehe, was die Aufgabe von mir verlangt.", "📋 Ich ordne Informationen aus einem Artikel in einer Tabelle.", "✍️ Ich schreibe einen Aufruf mit Überschrift, Einleitung, Informationen, Argumenten und Aufforderungen.", "✅ Ich prüfe einen Aufruf mit einer Checkliste."],
    haupttext: "arg-artikel-muell",
    glossar: {
      aufruf: ["Aufruf", "Ein Text, der andere überzeugen will, etwas zu tun: „Macht mit!“"],
      schuelerzeitung: ["Schülerzeitung", "Eine Zeitung, die Schülerinnen und Schüler für ihre Schule schreiben."],
      adressat: ["Adressat", "Die Person oder Gruppe, an die sich ein Text richtet – hier deine Mitschülerinnen und Mitschüler."],
      sachinfo: ["Sachinformation", "Eine Tatsache zum Thema, die man nachprüfen kann: „Jeder wirft über 600 kg Müll im Jahr weg.“"],
      verhalten: ["Verhaltensweise", "Das, was jemand tut: „Sie bringt eine Trinkflasche mit.“"],
      recyclingpapier: ["Recyclingpapier", "Papier, das aus Altpapier gemacht wird. Dafür müssen keine neuen Bäume gefällt werden."],
      mehrweg: ["Mehrwegflasche", "Eine Flasche mit Pfand, die man zurückgibt. Sie wird gespült und viele Male wieder befüllt."],
      einweg: ["Einwegverpackung", "Eine Verpackung, die nach einmal Benutzen im Müll landet, zum Beispiel Alufolie oder ein Plastikbecher."],
      entsorgen: ["entsorgen", "Müll so wegbringen, dass er sortiert, verbrannt oder wiederverwertet werden kann."],
      wiederverwerten: ["wiederverwerten", "Aus Abfall etwas Neues machen, zum Beispiel aus Altpapier neues Papier. Ein anderes Wort dafür ist recyceln."],
      argument: ["Argument", "Ein Grund, der zeigt, dass deine Meinung stimmt."],
      appell: ["Appell", "Eine eindringliche Aufforderung am Schluss: Die Leser sollen etwas tun."],
      aufforderungssatz: ["Aufforderungssatz", "Ein Satz, der sagt, was jemand tun soll. Das Verb steht vorn, am Ende steht oft ein Ausrufezeichen: „Bringt eine Dose mit!“"],
      gewohnheit: ["Gewohnheit", "Etwas, das man immer wieder so macht, ohne lange darüber nachzudenken."],
      ueberarbeiten: ["überarbeiten", "Einen Text noch einmal durchgehen und besser machen."],
      lerntagebuch: ["Lerntagebuch", "Ein Heft, in das du schreibst, wie du gelernt hast: Was ist gut gelungen? Was übe ich noch?"]
    },
    stationen: [
      { kurz: "Aufgabe", ober: "Schritt 1: Die Aufgabe verstehen", titel: "Was genau sollst du tun?", teile: [
        { art: "text", html: "<p class=\"lead\">So könnte die Aufgabe in deiner Probe lauten. Lies sie zweimal ganz genau.</p>" +
          "<div class=\"mu-aufgabe\"><b class=\"kopf\">📝 Aufgabe in der Probe</b><p>Wir alle produzieren immer mehr Abfall – das ist ein großes Problem für unsere Umwelt. Schreibe für die <button class=\"term\" data-t=\"schuelerzeitung\">Schülerzeitung</button> einen <button class=\"term\" data-t=\"aufruf\">Aufruf</button> an deine Mitschülerinnen und Mitschüler. Fordere sie darin auf, Müll zu vermeiden. Verwende dafür auch Informationen aus dem Internetartikel.</p></div>" },
        { art: "offen", id: "verstehen", tag: "✨ KI gibt Rückmeldung", titel: "Sag es mit eigenen Worten", lead: "Beantworte die drei Fragen kurz.", fragen: [
          { q: "Welche Textsorte sollst du schreiben – und wo erscheint dein Text?", m: "Ich soll einen Aufruf schreiben. Er erscheint in der Schülerzeitung.", k: ["aufruf|appell", "schülerzeitung|zeitung"] },
          { q: "Für wen schreibst du?", m: "Ich schreibe für meine Mitschülerinnen und Mitschüler an der Schule.", k: ["mitschüler|schüler|klasse|kinder|jugendliche|alle"] },
          { q: "Was sollen die Leserinnen und Leser nach dem Lesen tun?", m: "Sie sollen Müll vermeiden und weniger Abfall produzieren.", k: ["müll|abfall|verpack", "vermeid|weniger|reduz|spar"] }],
          hilfen: ["Achte in der Aufgabe auf die Wörter „Aufruf“, „Schülerzeitung“ und „Mitschülerinnen und Mitschüler“.", "Beantworte für dich vier W-Fragen: WAS schreibe ich? WO erscheint es? WER liest es? WAS sollen die Leser danach tun?"],
          loesung: "<ol><li>Einen <strong>Aufruf</strong>, der in der <strong>Schülerzeitung</strong> erscheint.</li><li>Für meine <strong>Mitschülerinnen und Mitschüler</strong>.</li><li>Sie sollen <strong>Müll vermeiden</strong>, also weniger Abfall machen.</li></ol><p>Dafür nutze ich auch Informationen aus dem Internetartikel.</p>" },
        { art: "sort", id: "achten", tag: "Zuordnen", titel: "Worauf achtest du bei einem Aufruf?", lead: "Was hilft dir, deine Mitschüler zu überzeugen? Ordne zu.", buckets: ["gehört in einen Aufruf", "gehört nicht hinein"], cols: 220, items: [
          { t: "eine Überschrift, die neugierig macht", b: 0 },
          { t: "Informationen und Argumente zum Thema", b: 0 },
          { t: "die Leser direkt ansprechen: „ihr“, „euch“", b: 0 },
          { t: "Aufforderungssätze wie „Macht mit!“", b: 0 },
          { t: "eine spannende Geschichte mit Höhepunkt", b: 1 },
          { t: "Beschimpfungen wie „Ihr Müllferkel!“", b: 1 },
          { t: "nur die eigene Meinung ohne Begründung", b: 1 },
          { t: "viele Fremdwörter, die keiner versteht", b: 1 }],
          hilfen: ["Frage bei jedem Kärtchen: Hilft mir das, meine Mitschüler zu überzeugen – oder ärgert oder verwirrt es sie eher?"],
          loesung: "<p><strong>Hinein gehören:</strong> eine Überschrift, die neugierig macht, Informationen und Argumente, die direkte Anrede und Aufforderungssätze.</p><p><strong>Nicht hinein gehören:</strong> eine erfundene Geschichte (das wäre eine Erzählung), Beschimpfungen, eine Meinung ohne Begründung und Wörter, die keiner versteht.</p>" }
      ] },
      { kurz: "Lesen", ober: "Schritt 2: Den Artikel lesen", titel: "Ein Internetartikel über Müll", teile: [
        { art: "text", html: "<p>Lies den Artikel in drei Schritten:</p><ol><li><b>Überfliegen:</b> Worum geht es? Lies die Überschrift und den ersten Satz jedes Absatzes.</li><li><b>Genau lesen:</b> Tippe Wörter an, die du nicht kennst, und kläre sie.</li><li><b>Wichtiges merken:</b> Was ist das Problem? Und was kann man dagegen tun?</li></ol>" +
          "<div class=\"mu-bild\">" + WAAGE + "<p>Mehr als 600 Kilogramm Müll wirft jeder Mensch in Deutschland in einem Jahr weg.</p></div>" },
        { art: "lesetext", lesetext: "arg-artikel-muell" },
        { art: "text", html: "<p>Über den Knopf <b>📖 Text</b> unten links kannst du den Artikel jederzeit wieder öffnen – auch in den nächsten Schritten.</p>" },
        { art: "mc", id: "lesen", tag: "Ankreuzen", titel: "Hast du das Wichtigste verstanden?", fragen: [
          { q: "Wie viel Müll wirft jeder Mensch in Deutschland im Jahr weg?", o: ["ungefähr 60 Kilogramm", "mehr als 600 Kilogramm", "ungefähr 6 000 Kilogramm"], a: 1, e: "Mehr als 600 Kilogramm – ungefähr so viel, wie eine ausgewachsene Kuh wiegt." },
          { q: "Warum ist Plastik im Meer so gefährlich?", o: ["Tiere halten es für Futter oder verfangen sich darin.", "Es macht das Meerwasser salzig.", "Schiffe können dann nicht mehr fahren."], a: 0, e: "Fische, Seevögel und Schildkröten fressen das Plastik oder verfangen sich darin – viele sterben daran." },
          { q: "Was schlägt der Artikel für die Schule vor?", o: ["das Pausenbrot ganz weglassen", "Recyclingpapier, Mehrwegflaschen und Brotzeitdosen", "den Müll im Klassenzimmer sammeln und verbrennen"], a: 1, e: "Hefte aus Recyclingpapier, Getränke in Mehrwegflaschen und das Pausenbrot in der Dose sparen Verpackungsmüll." },
          { q: "Was will der Artikel vor allem zeigen?", o: ["Müll ist ein großes Problem – aber jeder kann etwas dagegen tun.", "Müll ist kein Problem, weil er von allein verschwindet.", "Gegen Müll kann nur die Stadt etwas tun."], a: 0, e: "Zuerst beschreibt der Artikel das Problem, dann zeigt er, was jede und jeder tun kann." }] }
      ] },
      { kurz: "Tabelle", ober: "Schritt 3: Den Aufruf planen", titel: "Ordne die Informationen in einer Tabelle", teile: [
        { art: "merke", kopf: "Merke", html: "<p><button class=\"term\" data-t=\"sachinfo\">Sachinformationen</button> beschreiben ein Problem. <button class=\"term\" data-t=\"verhalten\">Verhaltensweisen</button> zeigen, was wir dagegen tun können.</p><p>Beispiel: „In Deutschland entstehen riesige Mengen Müll.“ ist eine Sachinformation. „Recyclingpapier für Hefte und Blöcke verwenden.“ ist eine sinnvolle Verhaltensweise.</p>" },
        { art: "sort", id: "tabelle", tag: "Tabelle", titel: "Sachinformation oder Verhaltensweise?", lead: "Ordne die Informationen aus dem Artikel in die richtige Spalte. Übertrage die Tabelle danach in dein Heft.", buckets: ["Sachinformationen: Was wissen wir über Müll?", "Sinnvolle Verhaltensweisen: Was können wir tun?"], cols: 240, items: [
          { t: "In Deutschland entstehen riesige Mengen Müll.", b: 0 },
          { t: "Pro Person fallen in Deutschland über 600 kg Müll im Jahr an.", b: 0 },
          { t: "Müll richtig zu entsorgen ist aufwendig und teuer.", b: 0 },
          { t: "Falsch entsorgter Müll schadet Menschen, Tieren und Pflanzen.", b: 0 },
          { t: "Im Meer sammeln sich riesige Mengen Plastikmüll.", b: 0 },
          { t: "Recyclingpapier für Hefte und Blöcke verwenden.", b: 1 },
          { t: "Mehrwegflaschen statt Einwegflaschen benutzen.", b: 1 },
          { t: "Brotzeitdosen statt Einwegverpackungen verwenden.", b: 1 },
          { t: "Verpackungsmüll vermeiden.", b: 1 },
          { t: "Weniger Müll produzieren.", b: 1 }],
          hilfen: ["Frage bei jedem Kärtchen: Beschreibt es, wie es ist – also ein Problem? Dann ist es eine Sachinformation. Sagt es, was man tun kann? Dann ist es eine Verhaltensweise.",
            "Die Probe: Lässt sich das Kärtchen in einen Aufforderungssatz verwandeln („Verwendet Recyclingpapier!“)? Dann gehört es zu den Verhaltensweisen."],
          loesung: TAB4 },
        { art: "offen", id: "eigene", tag: "✨ KI gibt Rückmeldung", titel: "Ergänze die Tabelle mit eigenen Ideen", lead: "Was weißt du selbst über Müll? Was kann man noch tun? Schreibe kurze Sätze oder Stichworte und ergänze sie auch in deinem Heft.", fragen: [
          { q: "Schreibe zwei weitere Sachinformationen über Müll, die nicht im Artikel stehen.", m: "Plastik bleibt sehr lange in der Umwelt. Oft werden noch essbare Lebensmittel weggeworfen.", k: ["plastik|lebensmittel|essen|schulhof|einweg|papier|holz|baum|wald|jahre|umwelt|natur|verpack|energie|klima|verbrenn"] },
          { q: "Schreibe drei weitere sinnvolle Verhaltensweisen, mit denen man Müll vermeiden kann.", m: "Stofftaschen statt Plastiktüten benutzen. Eine wiederverwendbare Trinkflasche mitbringen. Papier auf beiden Seiten beschreiben.", k: ["tasche|beutel|trinkflasche|flasche|papier|seiten|einkauf|essen|kaufen|mülleimer|reparier|tausch|leih|flohmarkt|wiederverwend"] }],
          hilfen: ["Denk an deinen Alltag: Was landet bei dir zu Hause, in der Pause und beim Einkaufen im Müll?",
            "Ideen für Sachinformationen: Wie lange bleibt Plastik in der Natur? Was passiert mit Essen, das niemand isst? Wie sieht der Schulhof nach der Pause aus? Woraus wird Papier gemacht?",
            "Ideen für Verhaltensweisen: Einkaufstasche, Trinkflasche, Papier, Lebensmittel, Mülleimer – was kann man da anders machen?"],
          loesung: TAB5 + "<p>Deine Ideen dürfen anders sein. Wichtig ist, dass sie in die richtige Spalte passen.</p>" }
      ] },
      { kurz: "Schreiben", ober: "Schritt 4: Den Aufruf schreiben", titel: "Dein Aufruf für die Schülerzeitung", teile: [
        { art: "offen", id: "ziel", tag: "✨ KI gibt Rückmeldung", titel: "Wie erreichst du dein Ziel?", fragen: [
          { q: "Du schreibst für deine Mitschülerinnen und Mitschüler. Worauf achtest du, damit sie wirklich mitmachen? Nenne drei Punkte.", m: "Ich spreche sie direkt mit „ihr“ und „euch“ an. Ich nenne Informationen und Gründe, die sie überzeugen. Am Schluss sage ich mit Aufforderungssätzen genau, was sie tun sollen – freundlich und gut verständlich.",
            k: ["ihr|euch|ansprech|anrede|direkt", "grund|gründe|argument|information|überzeug|beispiel|zahl", "aufforder|tun sollen|mitmach|freundlich|höflich|verständlich"], min: 2 }],
          hilfen: ["Stell dir vor, du liest den Aufruf selbst in der Schülerzeitung. Was bringt dich zum Mitmachen – und was nervt dich eher?", "Denk an vier Dinge: die Anrede, die Gründe, die Aufforderungen und den Ton (freundlich oder befehlend?)."],
          loesung: "<ul><li>Ich spreche meine Mitschüler direkt an („ihr“, „euch“) und schreibe so, dass alle es verstehen.</li><li>Ich nenne Informationen und <button class=\"term\" data-t=\"argument\">Argumente</button>, damit sie verstehen, warum Müllvermeiden wichtig ist.</li><li>Ich sage mit <button class=\"term\" data-t=\"aufforderungssatz\">Aufforderungssätzen</button> genau, was sie tun sollen – Dinge, die man an der Schule wirklich umsetzen kann.</li><li>Ich bleibe freundlich: Ich überzeuge, statt zu schimpfen oder zu drohen.</li></ul>" },
        { art: "schreiben", id: "aufruf", tag: "✨ Schreibtrainer", titel: "Schreibe deinen Aufruf",
          auftrag: "<p>Schreibe jetzt deinen <button class=\"term\" data-t=\"aufruf\">Aufruf</button> gegen Müll für die <button class=\"term\" data-t=\"schuelerzeitung\">Schülerzeitung</button>. Deine Tabelle ist dein Bauplan: Die linke Spalte liefert Informationen für den Hauptteil, die rechte Spalte Ideen für deine Aufforderungen. Hole dir eine Rückmeldung und <button class=\"term\" data-t=\"ueberarbeiten\">überarbeite</button> deinen Text. Brauchst du Hilfe? Die Tipps unten führen dich Schritt für Schritt durch den Aufruf.</p>",
          kriterien: ["eine Überschrift, die zum Thema passt und neugierig macht", "eine Einleitung, die die Mitschüler direkt anspricht und zum Weiterlesen anregt", "im Hauptteil wichtige Informationen aus dem Artikel (z. B. über 600 kg Müll pro Person und Jahr)", "Argumente: Warum lohnt es sich, Müll zu vermeiden?", "Verhaltensweisen, die du dir von den Lesern wünschst – als Aufforderungssätze mit Ausrufezeichen", "ein Schluss mit Appell und Gruß"],
          min: 100, starter: ["Liebe Mitschülerinnen und Mitschüler, …", "Wusstet ihr, dass …", "Das ist ein Problem, denn …", "Dabei können wir ganz leicht …", "Bringt …!", "Kauft …!", "Macht mit – …", "Euer / Eure …"],
          hilfen: [
            "<strong>Schritt 1 – Überschrift:</strong> kurz und neugierig. Eine Frage, ein Wortspiel oder eine Aufforderung, zum Beispiel: „Wer räumt eigentlich deinen Müll weg?“ oder „Weniger Müll – mehr Zukunft!“",
            "<strong>Schritt 2 – Einleitung:</strong> Sprich deine Mitschüler direkt an und wecke ihr Interesse mit einer Frage oder einer überraschenden Zahl aus dem Artikel: „Wusstet ihr, dass …?“",
            "<strong>Schritt 3 – Hauptteil, Informationen:</strong> Nimm zwei oder drei Sachinformationen aus der linken Spalte deiner Tabelle. Verbinde sie mit „denn“, „weil“ oder „deshalb“.",
            "<strong>Schritt 4 – Hauptteil, Argumente:</strong> Erkläre, warum sich Müllvermeiden lohnt: für die Tiere im Meer, für die Umwelt, für den Geldbeutel. Ein Beispiel aus eurer Schule macht dein Argument stärker.",
            "<strong>Schritt 5 – Aufforderungen:</strong> Nimm drei Ideen aus der rechten Spalte und mach daraus Aufforderungssätze: das Verb nach vorn, ein Ausrufezeichen ans Ende. „Bringt eure Brotzeit in einer Dose mit!“",
            "<strong>Schritt 6 – Schluss:</strong> Ein kräftiger Appell und ein Gruß, zum Beispiel: „Jeder Becher weniger zählt – macht mit!“ Lies danach alles noch einmal und vergleiche mit dem Musteraufruf unten."] },
        { art: "text", html: "<p><b>Musterlösung:</b> Schreibe zuerst deinen eigenen Aufruf. Dann vergleiche: Welche Bausteine hat der Musteraufruf, die dir noch fehlen?</p>" + MUSTER }
      ] },
      { kurz: "Prüfen", ober: "Schritt 5: Überprüfen und auswerten", titel: "Mit der Checkliste prüfen", teile: [
        { art: "merke", kopf: "Checkliste: Meinen Aufruf prüfen", html: "<ul><li>Passt meine Überschrift zum Thema und macht sie neugierig?</li><li>Lädt meine Einleitung zum Weiterlesen ein?</li><li>Nenne ich wichtige Informationen und Argumente?</li><li>Schreibe ich, was die Leser tun sollen?</li><li>Verwende ich Aufforderungssätze mit Ausrufezeichen?</li><li>Stimmen Rechtschreibung und Zeichensetzung?</li></ul>" },
        { art: "text", html: "<p>Ben aus der 7. Klasse hat einen ersten Entwurf geschrieben. Prüfe ihn mit der Checkliste.</p>" + BEN },
        { art: "tf", id: "ben", tag: "Richtig oder falsch?", titel: "Was sagt die Checkliste zu Bens Entwurf?", aussagen: [
          ["Bens Überschrift „Müll“ macht neugierig.", false],
          ["Ben nennt eine genaue Information aus dem Artikel, zum Beispiel eine Zahl.", false],
          ["Ben bringt ein Beispiel aus der Schule.", true],
          ["Ben erklärt, warum Müll für Menschen, Tiere und Pflanzen gefährlich ist.", false],
          ["In Bens Text fehlen Aufforderungssätze wie „Bringt eure Brotzeit in einer Dose mit!“", true],
          ["Der Satz „Aber das muss jeder selbst wissen.“ macht seinen Aufruf schwächer.", true]],
          hilfen: ["Lege die Checkliste neben Bens Text und gehe sie Punkt für Punkt durch."],
          loesung: "<p>Bens Text ist noch kein guter Aufruf: Die Überschrift ist langweilig, Zahlen und Gründe aus dem Artikel fehlen, und es gibt keinen einzigen Aufforderungssatz. Der letzte Satz nimmt dem Aufruf sogar die Kraft. Gut ist das Beispiel aus der Pause.</p>" },
        { art: "merke", kopf: "Jetzt du", html: "<p>Prüfe deinen eigenen Aufruf mit der Checkliste und <button class=\"term\" data-t=\"ueberarbeiten\">überarbeite</button> ihn, wo nötig. Der Schreibtrainer in Schritt 4 hakt die Punkte für dich ab.</p>" },
        { art: "merke", kopf: "📓 Lerntagebuch", html: "<p>Schreibe in dein <button class=\"term\" data-t=\"lerntagebuch\">Lerntagebuch</button> oder in dein Heft:</p><ul><li>Das ist mir bei meinem Aufruf gut gelungen: …</li><li>Darauf achte ich beim nächsten Aufruf besonders: …</li></ul>" }
      ] }
    ],
    weiter: { href: "index.html#argumentieren", titel: "Zur Übersicht Deutsch 7", text: "Stark – damit bist du für einen Aufruf in der Probe gut vorbereitet. In der Übersicht findest du die anderen Module zum Argumentieren." }
  });
})();
