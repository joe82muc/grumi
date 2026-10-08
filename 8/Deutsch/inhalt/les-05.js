/* Deutsch 8 · Lesen, Sachtexte und Medien · Modul 5: Texte vergleichen, Absichten erkennen
   (zwei Texte zum selben Thema: Werbetext eines erfundenen Anbieters und sachlicher Zeitungsbericht; Gemeinsamkeiten und
   Unterschiede in Inhalt, Sprache und Absender; Sichtweisen im Bericht; Aussageabsicht – R8 mit Leitfragen, M8 beurteilt
   Inhalt, Form und Absicht selbstständig und belegt mit Zitaten)
   LehrplanPLUS D8 2.3 (themengleiche Texte vergleichen; Intention erkennen – R8 anhand von Leitfragen, M8: Inhalt, Form und
   Intention kritisch beurteilen), 2.1 (Textaussagen belegen), 2.4 (Wirkungsabsichten und Gestaltungsmittel).
   Texte: „Lieferdrohnen über der Stadt“ – Werbetext (texte/lesen/drohnen-werbung-r.js/-m.js) und Zeitungsbericht
   (texte/lesen/drohnen-bericht-r.js/-m.js). Anbieter, Stadt, Zeitung, Personen und Zahlen sind erfunden. */
D7Kit.seite({
  id: "les-05",
  titel: "Texte vergleichen, Absichten erkennen",
  einleitung: "Lieferdrohnen über der Stadt – und zwei Texte, die davon so verschieden erzählen, wie es nur geht. Heute vergleichst du einen Werbetext mit einem Zeitungsbericht: Was sagen beide, was verschweigt der eine, und was wollen sie von dir?",
  zeit: "etwa 45 Minuten",
  ziele: ["🔍 Ich vergleiche zwei Texte zum selben Thema: Inhalt, Sprache, Absender.", "📌 Ich belege Gemeinsamkeiten und Unterschiede am Text.", "🎯 Ich erkenne, was ein Text erreichen will.", "⚖️ Ich beurteile, wofür ich welchem Text trauen kann."],
  quiz: { profi: "Vergleichs-Profi" },
  glossar: {
    werbetext: ["Werbetext", "Ein Text, der für ein Produkt oder ein Angebot wirbt. Er will, dass die Leser kaufen oder mitmachen."],
    bericht: ["Bericht", "Ein sachlicher Text über ein Ereignis oder einen Sachverhalt: Tatsachen, Zahlen mit Quelle, mehrere Sichtweisen."],
    absender: ["Absender", "Die Person, die Firma oder die Redaktion, die hinter einem Text steht."],
    sichtweise: ["Sichtweise", "Die Art, wie jemand eine Sache sieht und beurteilt – je nachdem, was ihm wichtig ist."],
    aussageabsicht: ["Aussageabsicht", "Das, was ein Text erreichen will: informieren, eine Meinung vertreten, zum Handeln bewegen oder unterhalten."],
    kleingedrucktes: ["Kleingedrucktes", "Einschränkungen und Bedingungen, die klein und am Rand stehen – oft hinter einem Sternchen (*)."]
  },
  stationen: [
    { kurz: "Zwei Texte", ober: "Lesen", titel: "Ein Thema – zwei Texte", teile: [
      { art: "text", html: "<p class=\"lead\">In der Stadt Rodenfels werden Lieferdrohnen getestet. Zwei Texte handeln davon: Text A steht auf der Internetseite des Anbieters „Surrbote“, Text B in der Zeitung „Rodenfelser Anzeiger“. Stadt, Anbieter und Zeitung sind erfunden. Lies beide Texte und achte darauf, <strong>wer</strong> hier schreibt.</p>" },
      { art: "lesetext", lesetext: { R: "les-drohnen-werbung-r", M: "les-drohnen-werbung-m" } },
      { art: "lesetext", lesetext: { R: "les-drohnen-bericht-r", M: "les-drohnen-bericht-m" } },
      { art: "mc", id: "erst", tag: "Erster Eindruck", fragen: [
        { q: "Worum geht es in beiden Texten?", o: ["um Drohnen, die in einer Stadt kleine Pakete ausliefern", "um Drohnen, die den Verkehr aus der Luft überwachen", "um Lieferwagen, die künftig ohne Fahrer unterwegs sind"], a: 0, e: "Das Thema ist dasselbe: Lieferdrohnen. Wie die Texte darüber schreiben, ist ganz verschieden." },
        { q: "Welcher Text spricht dich direkt mit „du“ an?", o: ["nur Text A", "nur Text B", "beide Texte"], a: 0, e: "Text A redet dich an („dein Paket“, „Lade jetzt …“). Text B berichtet, ohne die Leser anzusprechen." },
        { q: "In welchem Text kommen auch Menschen zu Wort, die Bedenken haben?", o: ["nur in Text B", "nur in Text A", "in beiden Texten"], a: 0, e: "Der Bericht nennt Befürworter und Kritiker. Der Werbetext kennt nur Begeisterte." }
      ] }
    ] },
    { kurz: "Vergleichen", ober: "Vergleichen", titel: "Was steht wo?", teile: [
      { art: "merke", kopf: "MERKE: So vergleichst du zwei Texte", html: "<ol><li><b>Thema:</b> Worum geht es in beiden?</li><li><b>Inhalt:</b> Was steht in beiden – und was nur in einem?</li><li><b>Sprache und Form:</b> Wie ist der Text geschrieben?</li><li><b><button class=\"term\" data-t=\"absender\">Absender</button> und Absicht:</b> Wer schreibt – und was will er erreichen?</li></ol>" },
      { art: "sort", id: "wo", tag: "Inhalt vergleichen", titel: "Nur in Text A, nur in Text B – oder in beiden?", lead: "Lies noch einmal nach, wenn du unsicher bist.", buckets: ["nur in Text A", "nur in Text B", "in beiden"], cols: 200, items: [
        { t: "dass schon viele Kunden begeistert sind", b: 0 },
        { t: "dass die erste Lieferung nichts kostet", b: 0 },
        { t: "dass Anwohner das Surren stört", b: 1 },
        { t: "dass eine Drohne nur ein Paket auf einmal bringt", b: 1 },
        { t: "dass der Stadtrat nach drei Monaten berät", b: 1 },
        { t: "dass man über eine App bestellt", b: 2 },
        { t: "dass das Paket an einem Landepunkt ankommt", b: 2 },
        { t: "dass die Drohne nach wenigen Minuten ankommt", b: 2 }
      ] },
      { art: "text", html: "<p>Text B ist ein <button class=\"term\" data-t=\"bericht\">Bericht</button>. Er lässt mehrere Menschen zu Wort kommen – jede und jeder hat eine eigene <button class=\"term\" data-t=\"sichtweise\">Sichtweise</button>.</p>" },
      { art: "paare", id: "sicht", tag: "Sichtweisen", titel: "Wer sieht die Drohnen wie?", lead: "Tippe links eine Person oder Gruppe an und rechts das, was ihr wichtig ist.", paare: [
        ["Bürgermeister", "ältere Menschen sollen profitieren"],
        ["Apothekerin", "Medikamente kommen schneller"],
        ["Anwohner an der Strecke", "das Surren stört"],
        ["Naturschutzverein", "brütende Vögel werden gestört"],
        ["Verkehrsforscher", "Drohnen ersetzen keine Lieferwagen"]
      ] },
      { art: "beleg", id: "bstellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "les-drohnen-bericht-r", fragen: [
        { q: "In welchen Zeilen steht, wie viel eine Drohne höchstens tragen kann?", zeilen: [8, 9], e: "Höchstens zwei Kilogramm – im Werbetext steht das nur ganz unten im Kleingedruckten.", tipp: "Suche unter der Zwischenüberschrift „So läuft der Test“ das Wort „Kilogramm“." },
        { q: "Der Bericht hat die Flüge nicht selbst gezählt. In welchen Zeilen sagt er, von wem die Zahl stammt?", zeilen: [11, 12], e: "„nach Angaben des Unternehmens“ – ein sachlicher Text nennt seine Quelle.", tipp: "Suche die Zahl 212." },
        { q: "In welchen Zeilen kommt eine Befürworterin wörtlich zu Wort?", zeilen: [16, 18], e: "Die Apothekerin wird wörtlich zitiert – mit Namen und Beruf. So weiß man, wer das gesagt hat.", tipp: "Suche die Anführungszeichen unter „Was dafür spricht“." }
      ], hilfen: ["Die Zwischenüberschriften helfen dir: Unter welcher steht die Antwort wohl?", "Zahlen findest du schnell, wenn du den Text nach Ziffern und Zahlwörtern absuchst."] },
      { art: "beleg", id: "bstellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Bericht?", lesetext: "les-drohnen-bericht-m", fragen: [
        { q: "In welchen Zeilen macht der Bericht deutlich, dass er die Zahlen des Unternehmens nicht ungeprüft als Tatsache hinstellt?", zeilen: [14, 17], e: "„Nach Angaben des Unternehmens“ und „Unabhängig überprüft sind diese Zahlen bisher nicht“ – der Bericht nennt die Quelle und ihre Grenzen.", tipp: "Suche die Zahl 212 und lies bis zum Ende des Absatzes." },
        { q: "In welchen Zeilen dämpft ein Fachmann die Erwartungen an Lieferdrohnen?", zeilen: [33, 38], e: "Der Verkehrsforscher vergleicht: ein Lieferwagen mehr als hundert Pakete, eine Drohne eines. Seine Äußerung steht in indirekter Rede.", tipp: "Suche das Wort „Erwartungen“." },
        { q: "In welchen Zeilen nennt der Bericht eine Frage, auf die das Unternehmen keine Antwort gegeben hat?", zeilen: [39, 40], e: "Den späteren Preis „ließ es auf Nachfrage offen“. Ein sachlicher Text sagt auch, was man noch nicht weiß.", tipp: "Lies den letzten Absatz." }
      ] }
    ] },
    { kurz: "Sprache", ober: "Untersuchen", titel: "Wie sprechen die beiden Texte?", teile: [
      { art: "text", html: "<p>Text A ist ein <button class=\"term\" data-t=\"werbetext\">Werbetext</button>. Schon an einem einzigen Satz hörst du, dass er anders klingt als der Bericht. Achte später auch auf das <button class=\"term\" data-t=\"kleingedrucktes\">Kleingedruckte</button> ganz unten.</p>" },
      { art: "markieren", id: "werb", nur: "R", tag: "Werbesprache", titel: "Welche Wörter preisen an?", satz: "Mit Surrbote kommt dein Einkauf [[blitzschnell]], [[sauber]] und fast [[lautlos]] zu dir geflogen.", finde: "die drei Wörter, die das Angebot anpreisen", e: "Solche Lobwörter sollen Lust auf das Angebot machen. Ob sie stimmen, erfährst du in der Werbung nicht." },
      { art: "markieren", id: "werb", nur: "M", tag: "Werbesprache", titel: "Wo übertreibt der Text?", satz: "Das Prinzip ist [[genial]] einfach, die Lieferung kommt in [[Rekordzeit]], und [[sauberer]] kann Einkaufen nicht sein.", finde: "die drei Wörter, mit denen der Text übertreibt", e: "„genial“, „Rekordzeit“ und die Steigerung „sauberer … nicht“ behaupten das Höchste – ohne jeden Beleg." },
      { art: "sort", id: "sprache", tag: "Sortieren", titel: "Sachlich oder werbend?", buckets: ["sachlich", "werbend"], cols: 240, items: [
        { t: "Eine Drohne kann höchstens zwei Kilogramm tragen.", b: 0 },
        { t: "Ein Flug dauert etwa sieben Minuten.", b: 0 },
        { t: "Nach Angaben des Unternehmens gab es 212 Flüge.", b: 0 },
        { t: "Der Stadtrat will die Ergebnisse auswerten.", b: 0 },
        { t: "Gönn dir die Zukunft!", b: 1 },
        { t: "Schneller als dein Hunger.", b: 1 },
        { t: "Worauf wartest du noch?", b: 1 },
        { t: "Sauberer kann Einkaufen nicht sein.", b: 1 }
      ] },
      { art: "beleg", id: "wstellen", nur: "R", tag: "Textstellen finden", titel: "Wo steht das im Werbetext?", lesetext: "les-drohnen-werbung-r", fragen: [
        { q: "Am Ende will der Text, dass du handelst. In welchen Zeilen steht, was du jetzt tun sollst und was du dafür bekommst?", zeilen: [10, 11], e: "App laden, erste Lieferung geschenkt – der Text endet mit einer Aufforderung und einem Lockangebot.", tipp: "Suche das Wort „geschenkt“." },
        { q: "In welchen Zeilen stehen die Einschränkungen, die der Text weiter oben verschweigt?", zeilen: [13, 14], e: "Nur im Testgebiet, nur bis 2 Kilogramm, nur bei gutem Wetter – das steht erst hinter dem Sternchen.", tipp: "Achte auf das Sternchen (*)." }
      ], hilfen: ["Werbung will, dass du etwas tust. Suche Verben in der Befehlsform: „Lade …“, „hol dir …“.", "Ein Sternchen (*) hinter einem Wort verweist auf das Kleingedruckte ganz unten."] },
      { art: "beleg", id: "wstellen", nur: "M", tag: "Textstellen finden", titel: "Wo steht das im Werbetext?", lesetext: "les-drohnen-werbung-m", fragen: [
        { q: "In welchen Zeilen will der Text mit einer Prozentzahl beeindrucken, ohne zu sagen, woher sie stammt?", zeilen: [11, 12], e: "„97 Prozent unserer Testkunden“ – wer wurde gefragt, wie viele, von wem? Das bleibt offen. Der Bericht dagegen nennt bei seinen Zahlen die Quelle.", tipp: "Suche das Wort „Prozent“." },
        { q: "In welchen Zeilen räumt der Anbieter selbst ein, dass sein Angebot nur eingeschränkt gilt?", zeilen: [17, 19], e: "Erst im Kleingedruckten stehen Höchstgewicht, Landepunkte und Wetter – also genau das, was der Haupttext verschweigt.", tipp: "Achte auf das Sternchen (*)." }
      ] },
      { art: "mc", id: "form", tag: "Vergleichen", fragen: [
        { q: "Der Werbetext verspricht, die Drohne sei kaum zu hören. Was steht dazu im Bericht?", o: ["Anwohner an der Flugstrecke stören sich am Surren.", "Die Drohnen fliegen so hoch, dass man sie nicht hört.", "Über das Geräusch der Drohnen steht dort nichts."], a: 0, e: "Hier ein Versprechen der Werbung, dort die Erfahrung der Anwohner. Erst der Vergleich zeigt, dass man der Werbung nicht alles glauben darf." },
        { q: "Warum lässt der Bericht Befürworter und Kritiker zu Wort kommen?", o: ["Damit sich die Leser selbst ein Urteil bilden können.", "Damit der Text länger und spannender wird.", "Weil die Zeitung selbst gegen die Drohnen ist."], a: 0, e: "Ein sachlicher Bericht zeigt mehrere Sichtweisen und ergreift nicht selbst Partei." }
      ] }
    ] },
    { kurz: "Absicht", ober: "Beurteilen", titel: "Was will der Text – und wem nützt er?", teile: [
      { art: "merke", kopf: "MERKE: Die Aussageabsicht", html: "<p>Jeder Text will etwas erreichen. Das nennt man <button class=\"term\" data-t=\"aussageabsicht\">Aussageabsicht</button>: informieren, eine Meinung vertreten, zum Handeln bewegen oder unterhalten. Vier Leitfragen helfen dir, sie zu erkennen:</p><ol><li><b>Wer schreibt?</b> Und was hat er davon?</li><li><b>Für wen?</b> Wer soll den Text lesen?</li><li><b>Was soll ich tun oder denken?</b></li><li><b>Was fehlt?</b> Was erfahre ich nicht?</li></ol>" },
      { art: "mc", id: "leit", nur: "R", tag: "Leitfragen", titel: "Drei Leitfragen an Text A", fragen: [
        { q: "Wer schreibt? – Wer steht hinter Text A?", o: ["das Unternehmen, das die Drohnen betreibt", "eine Zeitung, die über den Test berichtet", "die Stadt, die den Test erlaubt hat"], a: 0, e: "Text A stammt von Surrbote selbst. Das Unternehmen verdient Geld, wenn viele bestellen." },
        { q: "Was soll ich tun? – Was sollen die Leser nach Text A machen?", o: ["die App laden und bestellen", "zur Versammlung der Bürger gehen", "sich über Drohnen informieren"], a: 0, e: "„Lade jetzt die Surrbote-App …“ – der Text will, dass du Kunde wirst." },
        { q: "Was fehlt? – Was erfährst du im Haupttext von Text A nicht?", o: ["dass die Drohne nur bei gutem Wetter fliegt", "dass man über eine App bestellt", "dass das Paket an einem Landepunkt ankommt"], a: 0, e: "Die Einschränkungen stehen nur im Kleingedruckten: Testgebiet, 2 Kilogramm, Wetter." }
      ] },
      { art: "mc", id: "absicht", tag: "Absicht erkennen", fragen: [
        { q: "Welche Absicht hat Text B vor allem?", o: ["Er will sachlich informieren – über Vorteile und Bedenken.", "Er will erreichen, dass der Test sofort abgebrochen wird.", "Er will die Leser dazu bringen, bei Surrbote zu bestellen."], a: 0, e: "Der Bericht nennt Tatsachen, Zahlen mit Quelle und mehrere Sichtweisen. Eine Empfehlung gibt er nicht." }
      ] },
      { art: "mc", id: "klein", m7: true, tag: "Genau hinsehen", fragen: [
        { q: "Die Einschränkungen stehen im Werbetext nur ganz unten im Kleingedruckten, hinter einem Sternchen. Warum wohl?", o: ["Sie sollen den guten Eindruck nicht stören, müssen aber irgendwo stehen.", "Sie sind so unwichtig, dass kaum jemand sie wissen möchte.", "Dort unten liest sie jeder zuerst, weil ein Sternchen auffällt."], a: 0, e: "Mit dem Kleingedruckten kann der Anbieter sagen, er habe nichts verschwiegen. Wer nur den Haupttext liest, erfährt die Grenzen des Angebots trotzdem nicht." }
      ] },
      { art: "offen", id: "ref", tag: "Begründen", titel: "Welcher Text hilft dir?", fragen: [
        { q: "Du sollst deine Klasse in zwei Minuten über Lieferdrohnen informieren. Auf welchen Text stützt du dich? Nenne zwei Gründe.", m: "Ich stütze mich auf Text B, weil er sachlich ist und Zahlen mit Quelle nennt. Außerdem zeigt er Vorteile und Bedenken, während Text A nur etwas verkaufen will.", k: ["text b|bericht|zeitung", "sachlich|neutral|zahlen|quelle|fakten|tatsachen", "bedenken|kritik|nachteile|beide seiten|sichtweisen|verkaufen|werbung|wirbt"], min: 2 }
      ], tipp: "Wer informieren will, braucht Tatsachen – und sollte auch die Nachteile kennen.", hilfen: ["So kannst du beginnen: „Ich stütze mich auf Text …, weil …“", "Überlege: Welcher Text sagt, woher seine Zahlen stammen? Welcher zeigt auch die Bedenken?"] },
      { art: "offen", id: "urteil", nur: "M", m7: true, tag: "Selbstständig beurteilen", titel: "Inhalt, Form und Absicht von Text A", fragen: [
        { q: "Inhalt: Der Haupttext der Werbung verschweigt einiges. Nenne zwei Punkte, die du erst aus dem Bericht erfährst, und belege einen davon mit einem Zitat aus Text B (mit Zeile).", m: "Der Werbetext verschweigt, dass sich Anwohner am Surren stören und dass eine Drohne „jeweils nur eines“ (Z. 36) von mehr als hundert Paketen bringt, die ein Lieferwagen schafft.", k: ["surren|anwohner|kamera|vögel|preis|wetter|ein paket|nur eines|ersetzen|überprüft", "zeile|z."], min: 2 },
        { q: "Form und Absicht: Mit welchen sprachlichen Mitteln will Text A dich zum Bestellen bringen? Nenne zwei Mittel, jeweils mit einem kurzen Zitat.", m: "Der Text spricht mich direkt an und stellt Fragen wie „Wie oft hast du im Stau gestanden“. Außerdem übertreibt er, zum Beispiel mit „Sauberer kann Einkaufen nicht sein“, und fordert mich auf: „Lade jetzt die Surrbote-App“.", k: ["anrede|spricht mich|direkt an|frage|fragen", "übertreibung|übertreibt|superlativ|versprechen|verspricht|aufforderung|fordert|befehlsform|imperativ|prozent|abwert|werbespruch|slogan"], min: 2 }
      ], tipp: "Ein Zitat steht in Anführungszeichen. Bei Text B gehört die Zeile in Klammern dahinter." }
    ] },
    { kurz: "Sichern", ober: "Kurz sichern", titel: "Das nimmst du mit", teile: [
      { art: "tf", id: "sicher", tag: "Richtig oder falsch?", aussagen: [
        ["Zwei Texte zum selben Thema können ganz verschiedene Absichten haben.", true],
        ["Ein Werbetext stellt Vorteile und Nachteile gleich ausführlich dar.", false],
        ["Ein sachlicher Bericht sagt, woher seine Zahlen stammen.", true],
        ["Wer hinter einem Text steht, spielt für seine Absicht keine Rolle.", false],
        ["Direkte Anrede, Aufforderungen und Übertreibungen sind typisch für Werbung.", true],
        ["Beim Vergleichen achtet man auf Inhalt, Sprache, Absender und Absicht.", true]
      ] }
    ] }
  ],
  weiter: { href: "les_06.html", titel: "Modul 6: Medien prüfen: Wem kann ich trauen?", text: "Bei Werbung weißt du, wer dahintersteht. Im Netz ist das oft nicht so klar. Im nächsten Modul prüfst du Nachrichten, Schlagzeilen und Seiten: Wem kannst du trauen?" }
});
