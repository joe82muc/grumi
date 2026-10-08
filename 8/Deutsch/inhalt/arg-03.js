/* Deutsch 8 · Argumentieren und Stellung nehmen · Modul 3: Gegenargumente bedenken und abwägen
   (Pro und Contra sammeln, zu einem Argument den passenden Einwand finden, Einwand aufgreifen – zugestehen – entkräften, drei Wege
   des Entkräftens, sachlich entkräften statt abtun, abwägen und einen Schluss ziehen; kurzer Schreibauftrag im Schreibtrainer.
   R8: geführt mit Satzanfängen und Hilfen; M8: Einwände beider Seiten entkräften, Abwägung selbst formulieren, Entscheidung und Kompromiss)
   LehrplanPLUS D8 3.2 (Argumente formulieren und gewichten, Schlüsse ziehen, begründete Stellungnahme), 1.3 (eigene Standpunkte
   vertreten; M8: auf Gegenargumente eingehen).
   Texte: zwei Stellungnahmen zur Streitfrage „Soziale Netzwerke erst ab 16?“ (texte/argumentieren/netzwerke-r.js und -m.js) – erfunden.
   Sachangabe in Station 1: Die meisten Netzwerke nennen in ihren eigenen Regeln ein Mindestalter von 13 Jahren. Nebenthema: Bildschirmzeit. */
D7Kit.seite({
  id: "arg-03",
  titel: "Gegenargumente bedenken und abwägen",
  einleitung: "Wer nur die eigenen Gründe kennt, verliert die Diskussion beim ersten „Ja, aber …“. Heute siehst du dir beide Seiten einer Streitfrage an, antwortest auf Einwände und triffst am Ende eine begründete Entscheidung.",
  zeit: "etwa 45 Minuten",
  ziele: ["📋 Ich sammle Argumente für beide Seiten einer Streitfrage.", "🔁 Ich greife einen Einwand auf und entkräfte ihn sachlich.", "⚖️ Ich wäge ab und begründe, welche Seite schwerer wiegt.", "✍️ Ich schreibe einen kurzen Beitrag mit Einwand und Schluss."],
  haupttext: { R: "arg-netzwerke-r", M: "arg-netzwerke-m" },
  quiz: { profi: "Abwäge-Profi" },
  glossar: {
    pro: ["Pro und Contra", "Lateinisch für „dafür“ und „dagegen“: die Gründe für und gegen etwas."],
    einwand: ["Einwand", "Ein Gegenargument: ein Grund, den die andere Seite gegen deine These vorbringt."],
    zugestehen: ["zugestehen", "Der Gegenseite recht geben, wo sie recht hat: „Es stimmt zwar, dass …“"],
    entkraeften: ["entkräften", "Mit einem Grund zeigen, dass ein Einwand weniger Gewicht hat, als es zuerst scheint."],
    abwaegen: ["abwägen", "Die Gründe beider Seiten nebeneinanderstellen und begründen, welche schwerer wiegen."],
    kompromiss: ["Kompromiss", "Eine Lösung, bei der jede Seite etwas bekommt und etwas aufgibt."]
  },
  stationen: [
    { kurz: "Zwei Seiten", ober: "Lesen und sammeln", titel: "Eine Frage, zwei Antworten", teile: [
      { art: "text", html: '<p class="lead">Die meisten sozialen Netzwerke erlauben die Anmeldung nach ihren eigenen Regeln ab 13 Jahren. Wäre 16 die bessere Grenze? Zwei aus der achten Klasse haben für die Schülerzeitung Stellung genommen. Lies beide Texte – und entscheide dich noch nicht.</p>' },
      { art: "lesetext", lesetext: { R: "arg-netzwerke-r", M: "arg-netzwerke-m" } },
      { art: "mc", id: "erst", tag: "Erster Überblick", fragen: [
        { q: "Wer vertritt welche Position?", o: ["Carla ist für die Altersgrenze von 16 Jahren, Jonte dagegen.", "Jonte ist für die Altersgrenze von 16 Jahren, Carla dagegen.", "Beide sind für die Altersgrenze, nennen aber andere Gründe."], a: 0, e: "Carla will die Grenze bei 16, Jonte lehnt sie ab. Beide sagen ihre Meinung gleich am Anfang." },
        { q: "Was haben die beiden Stellungnahmen gemeinsam?", o: ["Beide greifen ein Gegenargument auf und antworten darauf.", "Beide kommen am Ende zu genau demselben Ergebnis.", "Beide verzichten ganz auf Beispiele aus dem Alltag."], a: 0, e: "Carla geht auf die Sorge um Freundschaften ein, Jonte auf die lange Zeit am Handy. Genau darum geht es heute." }
      ] },
      { art: "sort", id: "sammeln", tag: "Sammeln", titel: "Pro oder Contra?", lead: 'Sammle die Gründe beider Seiten – so entsteht eine Liste mit <button class="term" data-t="pro">Pro und Contra</button>. Manche Gründe kennst du aus den Texten, andere sind neu.', buckets: ["Pro: für die Grenze bei 16", "Contra: gegen die Grenze bei 16"], cols: 240, items: [
        { t: "Netzwerke sind so gebaut, dass man schwer aufhören kann.", b: 0 },
        { t: "Der ständige Vergleich mit bearbeiteten Bildern setzt unter Druck.", b: 0 },
        { t: "Jüngere geben leichter persönliche Daten und Fotos preis.", b: 0 },
        { t: "Fremde können über Netzwerke leicht Kontakt zu Kindern aufnehmen.", b: 0 },
        { t: "Vereine und Jugendgruppen geben Termine oft nur dort bekannt.", b: 1 },
        { t: "Den Umgang mit dem Netz lernt man durch Übung, nicht durch Warten.", b: 1 },
        { t: "Ein Verbot lässt sich mit einem falschen Geburtsdatum umgehen.", b: 1 },
        { t: "In Netzwerken findet man Erklärvideos und kann eigene Ideen zeigen.", b: 1 }
      ], fertig: "✅ Richtig gesammelt! Du siehst: Beide Seiten haben Gründe, die man ernst nehmen muss." }
    ] },
    { kurz: "Einwand", ober: "Untersuchen", titel: "Die Gegenseite kommt zu Wort", teile: [
      { art: "beleg", id: "einw", nur: "R", tag: "Textstellen finden", titel: "Wo gehen Carla und Jonte auf die Gegenseite ein?", lesetext: "arg-netzwerke-r", fragen: [
        { q: "In welchen Zeilen nennt Carla einen Einwand der Gegenseite?", zeilen: [13, 14], e: "„Manche sagen, dass …“ – so holt Carla das Gegenargument in ihren Text.", tipp: "Suche bei Carla die Wendung „Manche sagen“." },
        { q: "Wo gibt Jonte der Gegenseite zuerst recht und entkräftet den Einwand dann?", zeilen: [27, 29], e: "„Es stimmt zwar, dass …“ gesteht etwas zu. Mit „Aber“ folgt die Antwort: Feste Zeiten lösen das Problem.", tipp: "Suche bei Jonte die Wörter „zwar“ und „Aber“." },
        { q: "In welcher Zeile zieht Carla ihren Schluss?", zeilen: [16, 16], e: "„Deshalb“ leitet den Schluss ein: Carla bleibt bei ihrer Meinung.", tipp: "Suche in Carlas Text das Wort „Deshalb“." }
      ], hilfen: ["Ein Einwand ist ein Grund der anderen Seite. Er wird oft mit „Manche sagen …“ eingeleitet.", "Wer der Gegenseite recht gibt, benutzt gern das Wort „zwar“."] },
      { art: "beleg", id: "einw", nur: "M", tag: "Textstellen finden", titel: "Wo gehen Carla und Jonte auf die Gegenseite ein?", lesetext: "arg-netzwerke-m", fragen: [
        { q: "In welchen Zeilen antwortet Carla auf den Einwand, Jüngere verlören ohne Netzwerke den Anschluss?", zeilen: [15, 17], e: "Sie gesteht erst zu („verständlich“) und entkräftet dann: Gilt die Grenze für alle, verabreden sich alle auf anderen Wegen.", tipp: "Der Einwand steht in Z. 14–15. Suche, was direkt danach kommt." },
        { q: "Wo wägt Carla ab – was ist ihr wichtiger?", zeilen: [18, 20], e: "„Wägt man beide Seiten ab …“: Der Schutz ist ihr wichtiger als der frühere Zugang. Daraus folgt ihr Schluss.", tipp: "Suche das Verb „abwägen“ in einer gebeugten Form." },
        { q: "In welchen Zeilen zieht Jonte seinen Schluss und nennt einen Mittelweg zwischen Verbot und völliger Freiheit?", zeilen: [42, 44], e: "Jonte lehnt die Grenze ab, schlägt aber einen Kompromiss vor: Einstieg ab 13 mit Zustimmung der Eltern.", tipp: "Lies den letzten Absatz vor Jontes Namen." }
      ] },
      { art: "merke", kopf: "MERKE: Der Dreischritt", html: '<ol><li><b><button class="term" data-t="einwand">Einwand</button> nennen</b> – „Manche sagen, dass …“, „Dagegen lässt sich einwenden, dass …“</li><li><b><button class="term" data-t="zugestehen">zugestehen</button></b>, was daran stimmt – „Es stimmt zwar, dass …“, „Diese Sorge ist verständlich.“</li><li><b><button class="term" data-t="entkraeften">entkräften</button></b> – „Aber …“, „Dennoch …“, „Allerdings …“</li></ol><p>Das gilt auch im Gespräch: Zeige erst, dass du zugehört hast („Ich verstehe, dass …“), und widersprich dann.</p>' },
      { art: "paare", id: "gegen", tag: "Zuordnen", titel: "Welcher Einwand passt zu welchem Argument?", lead: "Zu jedem Argument gibt es eine Antwort der anderen Seite. Finde die Paare.", paare: [
        ["Jüngere können sich schwer vom Bildschirm losreißen.", "Feste Bildschirmzeiten in der Familie setzen eine Grenze."],
        ["Ohne Netzwerke verpasst man Termine vom Verein.", "Termine kann ein Verein auch per Aushang oder E-Mail mitteilen."],
        ["Ein Verbot lässt sich mit einem falschen Geburtsdatum umgehen.", "Mit einer echten Altersprüfung wäre das viel schwerer."],
        ["Bearbeitete Bilder setzen Jüngere unter Druck.", "Im Unterricht kann man üben, solche Bilder zu durchschauen."],
        ["Den Umgang mit Netzwerken lernt man nur durch Übung.", "Üben kann man auch mit 16 noch – dann mit mehr Erfahrung."]
      ] },
      { art: "mc", id: "wozu", tag: "Verstehen", fragen: [
        { q: "Warum lohnt es sich, einen Einwand der Gegenseite selbst anzusprechen?", o: ["Man zeigt, dass man das Thema von beiden Seiten durchdacht hat.", "Man füllt damit Platz, wenn die eigenen Argumente ausgehen.", "Man beweist damit, dass die Gegenseite gar keine Gründe hat."], a: 0, e: "Wer den Einwand kennt und beantwortet, wirkt fair und gut vorbereitet. Verschweigt man ihn, bringt ihn ein anderer – und dann fehlt die Antwort." },
        { q: "Mit welcher Formulierung gestehst du der Gegenseite etwas zu?", o: ["Es stimmt zwar, dass …", "Das ist doch Unsinn, weil …", "Außerdem kommt hinzu, dass …"], a: 0, e: "„Zwar“ kündigt an: Hier gebe ich dir recht – aber gleich folgt mein „aber“." }
      ] }
    ] },
    { kurz: "Entkräften", ober: "Üben", titel: "Antworten statt abtun", teile: [
      { art: "sort", id: "fair", tag: "Sortieren", titel: "Entkräftet – oder nur abgetan?", lead: "Einen Einwand entkräftest du nur mit einem Grund. Wer ihn bloß beiseitewischt, überzeugt niemanden.", buckets: ["sachlich entkräftet", "nur abgetan"], cols: 240, items: [
        { t: "Es stimmt, dass Verbote umgangen werden. Mit einer Altersprüfung wäre das aber deutlich schwerer.", b: 0 },
        { t: "Sicher verpasst man manches. Wichtige Termine kann ein Verein jedoch auch anders mitteilen.", b: 0 },
        { t: "Zwar gibt es ungeeignete Inhalte, doch Jugendschutz-Einstellungen blenden vieles davon aus.", b: 0 },
        { t: "Wer das sagt, hat keine Ahnung vom Internet.", b: 1 },
        { t: "Das ist doch völliger Quatsch.", b: 1 },
        { t: "So etwas behaupten nur Leute, die selbst ständig am Handy hängen.", b: 1 }
      ] },
      { art: "karten", lead: "Drei Wege führen zu einer guten Antwort:", karten: [
        { ic: "🔧", titel: "Es gibt eine Lösung", text: "Das Problem besteht, lässt sich aber beheben: „Dagegen helfen feste Zeiten.“" },
        { ic: "🔍", titel: "Es trifft nur teilweise zu", text: "Der Einwand gilt nicht für alle oder nicht immer: „Das betrifft nur wenige.“" },
        { ic: "⚖️", titel: "Etwas anderes wiegt schwerer", text: "Der Nachteil stimmt, der Vorteil ist aber größer: „Wichtiger ist jedoch …“" }
      ] },
      { art: "mc", id: "weg", tag: "Welcher Weg?", fragen: [
        { q: "Jonte schreibt, gegen zu viel Zeit am Handy helfe eine Absprache in der Familie. Wie entkräftet er damit den Einwand?", o: ["Er zeigt eine Lösung für das Problem.", "Er bestreitet, dass es das Problem gibt.", "Er macht sich über den Einwand lustig."], a: 0, e: "Jonte gibt zu, dass viele zu lange am Handy sind. Seine Antwort: Das lässt sich regeln – auch ohne Altersgrenze." },
        { q: "Welche Antwort entkräftet den Einwand „Mit 13 ist man für soziale Netzwerke zu jung“ am besten?", o: ["Das hängt vom Kind ab; deshalb sollten die Eltern mitentscheiden.", "Zu jung? Ich kenne mich im Netz besser aus als alle Erwachsenen!", "Mit 13 darf man schließlich auch schon allein ins Kino gehen."], a: 0, e: "Die erste Antwort zeigt: Der Einwand trifft nur auf manche zu. Die zweite prahlt nur, die dritte geht am Thema vorbei." }
      ] },
      { art: "ordnen", id: "drei", tag: "Reihenfolge", titel: "Bring den Dreischritt in die richtige Reihenfolge", lead: "Vier Sätze aus einer Stellungnahme für die Altersgrenze – der letzte zieht die Folgerung.", schritte: [
        "Manche wenden ein, dass Jugendliche ohne Netzwerke Freunde verlieren.",
        "Diese Sorge ist verständlich, denn niemand möchte ausgeschlossen sein.",
        "Allerdings entstehen Freundschaften vor allem dort, wo man sich wirklich trifft: in der Klasse, im Verein, im Viertel.",
        "Daher wiegt dieser Einwand für mich weniger schwer als der Schutz der Jüngeren."
      ] },
      { art: "offen", id: "entk", nur: "R", tag: "Selbst formulieren", titel: "Entkräfte den Einwand", fragen: [
        { q: "Einwand: „In sozialen Netzwerken gibt es Inhalte, die nicht für Jüngere gemacht sind.“ Entkräfte ihn in zwei Sätzen. Beginne mit „Es stimmt zwar, dass …“ und antworte mit „Aber …“.", m: "Es stimmt zwar, dass es dort solche Inhalte gibt. Aber mit Jugendschutz-Einstellungen und der Hilfe der Eltern kann man vieles davon ausblenden.", k: ["zwar|stimmt|sicher|natürlich|versteh", "aber|doch|jedoch|trotzdem|allerdings|dennoch", "einstellung|eltern|filter|sperr|melde|blockier|regel|schutz|aufklär|lernen|unterricht|ausblend"], min: 3 }
      ], tipp: "Erster Satz: Gib der Gegenseite recht. Zweiter Satz: Zeige eine Lösung für das Problem.", hilfen: ["Überlege: Wer oder was kann Jüngere vor solchen Inhalten schützen?", "Mögliche Lösungen: Jugendschutz-Einstellungen, Regeln mit den Eltern, Inhalte melden und sperren."] },
      { art: "offen", id: "entk", nur: "M", tag: "Selbst formulieren", titel: "Entkräfte den Einwand – einmal für jede Seite", fragen: [
        { q: "Du bist gegen die Altersgrenze. Entkräfte in zwei Sätzen den Einwand: „In sozialen Netzwerken gibt es Inhalte, die nicht für Jüngere gemacht sind.“", m: "Zwar gibt es dort Inhalte, die für Jüngere ungeeignet sind. Mit Jugendschutz-Einstellungen und der Begleitung durch die Eltern lässt sich jedoch vieles davon ausblenden.", k: ["zwar|stimmt|sicher|natürlich|versteh|zugegeben|richtig", "aber|doch|jedoch|trotzdem|allerdings|dennoch", "einstellung|eltern|filter|sperr|melde|blockier|regel|schutz|aufklär|lernen|unterricht|ausblend|begleit"], min: 3 },
        { q: "Jetzt die andere Seite: Du bist für die Altersgrenze. Entkräfte den Einwand: „Wer keine Netzwerke nutzen darf, lernt den Umgang damit nie.“", m: "Es ist richtig, dass man den Umgang mit Netzwerken üben muss. Allerdings kann man das auch mit 16 noch lernen, und dann fällt es leichter, weil man Risiken besser einschätzt.", k: ["zwar|stimmt|sicher|natürlich|versteh|zugegeben|richtig", "aber|doch|jedoch|trotzdem|allerdings|dennoch", "16|später|älter|schule|unterricht|eltern|reif|einschätz|erfahr|lernen"], min: 3 }
      ], tipp: "Gestehe zu, was am Einwand stimmt, und wähle dann einen der drei Wege: Lösung zeigen, einschränken oder etwas Gewichtigeres nennen.", hilfen: ["Sieh dir die drei Karten noch einmal an: Welcher Weg passt zu diesem Einwand?"] }
    ] },
    { kurz: "Abwägen", ober: "Abwägen und Schluss ziehen", titel: "Was wiegt am Ende schwerer?", teile: [
      { art: "beispiel", kopf: "Die Waage", html: '<p><b>Linke Schale:</b> Schutz vor ungeeigneten Inhalten, weniger Vergleichsdruck, mehr Zeit für anderes.<br><b>Rechte Schale:</b> Kontakt zu Verein und Freunden, früh üben mit Begleitung, eigene Ideen zeigen.</p><p><button class="term" data-t="abwaegen">Abwägen</button> heißt: beide Schalen ansehen und begründen, welche für dich schwerer wiegt. Dabei darf ein anderer zu einem anderen Ergebnis kommen als du.</p>' },
      { art: "markieren", id: "signal", tag: "Signalwörter", titel: "Woran erkennst du, dass abgewogen wird?", satz: "[[Zwar]] gibt es im Netz ungeeignete Inhalte, [[doch]] der Nutzen für Kontakte und Hobbys [[wiegt schwerer]]. [[Insgesamt]] spricht deshalb mehr gegen eine starre Altersgrenze.", finde: "die vier Signale für das Abwägen", e: "„Zwar … doch“ stellt beide Seiten gegenüber, „wiegt schwerer“ gewichtet, „insgesamt“ leitet das Ergebnis ein." },
      { art: "mc", id: "abw", tag: "Abwägen und reagieren", fragen: [
        { q: "Welcher Satz wägt ab?", o: ["Zwar erleichtern Netzwerke den Kontakt, doch der Schutz der Jüngeren ist mir wichtiger.", "Netzwerke sind gefährlich, und deshalb gehören sie für alle Jüngeren streng verboten.", "Netzwerke erleichtern den Kontakt, und außerdem machen sie den meisten großen Spaß."], a: 0, e: "Nur der erste Satz nennt beide Seiten und sagt, welche schwerer wiegt. Die anderen bleiben einseitig." },
        { q: "Was gehört in den Schluss einer abwägenden Stellungnahme?", o: ["das Ergebnis: Welche Seite wiegt für mich schwerer?", "ein weiteres Argument, das bisher noch nicht vorkam", "eine Entschuldigung dafür, dass man anderer Meinung ist"], a: 0, e: "Der Schluss zieht das Ergebnis aus der Abwägung. Neue Argumente gehören in den Hauptteil." },
        { q: "In einer Diskussion sagt jemand: „Ohne Netzwerke ist man total abgehängt.“ Welche Antwort geht sachlich darauf ein?", o: ["Ich verstehe die Sorge. Aber wichtige Infos bekommt man auch anders.", "Du übertreibst mal wieder völlig, das ist doch einfach lächerlich.", "Darum geht es jetzt gar nicht. Mein Punkt ist ein ganz anderer."], a: 0, e: "Auch im Gespräch gilt der Dreischritt: zuhören, zugestehen, dann mit einem Grund widersprechen." }
      ] },
      { art: "merke", kopf: "MERKE: Abwägen und Schluss ziehen", html: '<ul><li>Zwar …, aber / doch …</li><li>Einerseits …, andererseits …</li><li>Wägt man beide Seiten ab, …</li><li>Schwerer wiegt für mich, dass …</li></ul><p>Der Schluss zieht das Ergebnis: eine klare Entscheidung – oder ein <button class="term" data-t="kompromiss">Kompromiss</button>, wenn beide Seiten gewichtige Gründe haben.</p>' },
      { art: "sort", id: "schluss", m7: true, tag: "Sortieren", titel: "Klare Entscheidung oder Kompromiss?", buckets: ["klare Entscheidung", "Kompromiss"], cols: 240, items: [
        { t: "Aus diesen Gründen bin ich für die Altersgrenze von 16 Jahren.", b: 0 },
        { t: "Insgesamt überwiegen für mich die Nachteile einer festen Grenze, deshalb lehne ich sie ab.", b: 0 },
        { t: "Deshalb sollte es bei der bisherigen Regelung bleiben.", b: 0 },
        { t: "Sinnvoll wäre ein Einstieg ab 14, wenn die Eltern zustimmen.", b: 1 },
        { t: "Ich schlage vor: Netzwerke schon früher, für Jüngere aber mit einem Zeitlimit.", b: 1 },
        { t: "Eine Lösung für beide Seiten wäre ein Jugendkonto, das die Eltern mit einrichten.", b: 1 }
      ] },
      { art: "offen", id: "waage", m7: true, tag: "Selbst formulieren", titel: "Ein abwägender Satz", fragen: [
        { q: "Neue Streitfrage: Sollen Eltern die Bildschirmzeit ihrer Kinder festlegen? Schreibe einen abwägenden Satz: Nenne mit „zwar“ einen Grund der einen Seite und mit „aber“ oder „doch“ den Grund, der für dich schwerer wiegt.", m: "Zwar schränkt eine feste Bildschirmzeit die Freiheit der Kinder ein, doch sie sorgt dafür, dass genug Zeit für Schule, Freunde und Bewegung bleibt.", k: ["zwar", "aber|doch|jedoch|dennoch|trotzdem|allerdings", "bildschirm|zeit|eltern|handy|kinder"], min: 3 }
      ], tipp: "Baue den Satz so: Zwar [Grund der einen Seite], doch [Grund, der für dich schwerer wiegt].", hilfen: ["Sammle erst je einen Grund: Was spricht für feste Zeiten, was dagegen?"] }
    ] },
    { kurz: "Schreiben", ober: "Schreiben", titel: "Jetzt entscheidest du", teile: [
      { art: "text", html: '<p class="lead">Du kennst jetzt beide Seiten. Zeit für deine eigene Antwort – kurz, aber vollständig.</p>' },
      { art: "schreiben", id: "beitrag", nur: "R", tag: "Schreibtrainer", titel: "Mein Beitrag: Soziale Netzwerke erst ab 16?", min: 60,
        auftrag: "<p><b>Die Streitfrage:</b> Sollen soziale Netzwerke erst ab 16 Jahren erlaubt sein?</p><p>Schreibe einen kurzen Beitrag für das Klassenforum (mindestens 60 Wörter):</p><ul><li>Sage klar, ob du dafür oder dagegen bist.</li><li>Nenne <b>dein wichtigstes Argument</b> mit Begründung und Beispiel.</li><li>Greife <b>einen Einwand</b> der anderen Seite auf und entkräfte ihn.</li><li>Schließe mit einem Satz, der dein Ergebnis zieht.</li></ul><p>Schreibe mit eigenen Worten – nicht aus den beiden Stellungnahmen abschreiben.</p>",
        starter: ["Ich bin dafür / dagegen, dass …", "Mein wichtigstes Argument ist, dass …", "Zum Beispiel …", "Es stimmt zwar, dass …", "Aber …", "Deshalb …"],
        kriterien: ["Meine Meinung steht klar am Anfang.", "Mein wichtigstes Argument hat eine Begründung und ein Beispiel.", "Ich greife einen Einwand der anderen Seite auf.", "Ich entkräfte den Einwand sachlich.", "Am Ende ziehe ich einen Schluss."] },
      { art: "schreiben", id: "beitrag", nur: "M", tag: "Schreibtrainer", titel: "Mein abwägender Beitrag: Soziale Netzwerke erst ab 16?", min: 100,
        auftrag: "<p><b>Die Streitfrage:</b> Sollen soziale Netzwerke erst ab 16 Jahren erlaubt sein?</p><p>Verfasse einen abwägenden Beitrag für das Klassenforum (mindestens 100 Wörter):</p><ul><li>Formuliere deine These.</li><li>Stütze sie mit <b>zwei Argumenten</b> – das stärkere zuletzt.</li><li>Greife den <b>stärksten Einwand</b> der Gegenseite auf, gestehe zu, was daran stimmt, und entkräfte ihn.</li><li>Wäge ab und ziehe einen Schluss: eine klare Entscheidung oder einen begründeten Kompromiss.</li></ul><p>Verwende eigene Formulierungen und mindestens ein Beispiel, das in den beiden Stellungnahmen nicht vorkommt.</p>",
        starter: ["Meiner Ansicht nach …", "Hinzu kommt, dass …", "Zwar lässt sich einwenden, dass …", "Dennoch …", "Wägt man beide Seiten ab, …"],
        kriterien: ["Meine These ist eindeutig formuliert.", "Zwei Argumente sind begründet und gestützt, das stärkere steht zuletzt.", "Der stärkste Einwand der Gegenseite wird genannt und sachlich entkräftet.", "Ich wäge ab und begründe, welche Seite schwerer wiegt.", "Der Schluss zieht ein Ergebnis: Entscheidung oder Kompromiss."] }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Wer ein Gegenargument selbst anspricht, zeigt, dass er beide Seiten kennt.", true],
        ["Einen Einwand entkräftet man am besten, indem man sich über ihn lustig macht.", false],
        ["„Es stimmt zwar, dass …“ gesteht der Gegenseite etwas zu.", true],
        ["Abwägen heißt, die eigenen Argumente noch einmal zu wiederholen.", false],
        ["Am Ende einer Abwägung steht ein Ergebnis – eine Entscheidung oder ein Kompromiss.", true],
        ["Ein Einwand verliert an Gewicht, wenn man zeigt, dass sich das Problem lösen lässt.", true]
      ] }
    ] }
  ],
  weiter: { href: "arg_04.html", titel: "Modul 4: Leserbrief und Kommentar", text: "Du kannst Argumente bauen, gewichten und abwägen. Im nächsten Modul machst du daraus einen ganzen Text – für Leserinnen und Leser, die du überzeugen willst." }
});
