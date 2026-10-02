window.KohlenstoffKurs = {
  apiBase: (location.hostname.includes("github.io") || location.protocol === "file:")
    ? "https://englisch-9.onrender.com" : "",
  storageKey: "grumi-nt9-" + (/\/9R\//i.test(location.pathname) ? "r9" : "m9") + "-organische-rohstoffe-fortschritt",
  groups: [
    {
      id: "organische-rohstoffe",
      label: "Lernbereich 1.1",
      title: "Organische Rohstoffe",
      subtitle: "Sieben Module zu nachwachsenden und fossilen Rohstoffen"
    }
  ],
  modules: [
    {
      id: "m01",
      group: "organische-rohstoffe",
      nr: 1,
      // eigene Lernseite im Stil von NT 7 (Stationen, Film, Animationen, KI-Fragen)
      page: "modul-1.html",
      title: "Kohlenstoff, Holz und Raps",
      duration: "45 min",
      goal: "Du weist Kohlenstoff in organischen Stoffen nach, verfolgst den Weg vom Holz zum Zellstoff, nennst Produkte aus Raps und erklärst, warum regenerative Rohstoffe CO₂-neutral sind.",
      sections: [
        {
          title: "Kohlenstoff als Lebensgrundlage",
          text: [
            "Alle Lebewesen enthalten Kohlenstoffverbindungen. Deshalb zählen Stoffe aus Pflanzen, Tieren und ihren Überresten zu den organischen Stoffen. Werden solche Stoffe als Ausgangsmaterial genutzt, spricht man von organischen Rohstoffen.",
            "Holz und Raps sind regenerative Rohstoffe. Sie stammen aus Land- oder Forstwirtschaft und können nachwachsen. Das gelingt dauerhaft nur, wenn nicht mehr verbraucht wird, als neu entsteht."
          ]
        },
        {
          title: "Holz und Raps als Rohstoffe",
          text: [
            "Holz dient als Baumaterial für Gebäude und als Brennstoff, zum Beispiel in Form von Holzpellets. Es besteht etwa zur Hälfte aus Zellstoff (Cellulose) und zur Hälfte aus Holzstoff (Lignin).",
            "Für die Papierherstellung muss der Zellstoff vom Holzstoff abgetrennt werden. Aus Zellstoff entstehen Papiersorten vom Taschentuch bis zum festen Karton, außerdem Folien und Klebstoffe. Lignin ist Grundstoff für Textilien, Isoliermaterialien und Klebstoffe.",
            "Raps ist eine Feldfrucht mit einem hohen Anteil an Öl. Das Rapsöl wird aus den Samen gewonnen und vor allem als Speiseöl oder Biokraftstoff verwendet. In der chemischen Industrie dient es als Grundstoff für Farben und Kunststoffe. Damit kann derselbe Rohstoff stofflich oder energetisch genutzt werden."
          ]
        },
        {
          title: "Merkmale regenerativer Rohstoffe",
          text: [
            "Regenerative Rohstoffe sind im Prinzip unbegrenzt vorhanden und weltweit einsetzbar, weil sie in der Natur immer wieder nachwachsen."
          ],
          bullets: [
            "CO₂-neutral: Beim Wachsen binden die Pflanzen durch die Fotosynthese so viel Kohlenstoffdioxid, wie bei der späteren Nutzung wieder frei wird.",
            "Unbegrenzt vorhanden und weltweit einsetzbar.",
            "Oft werden sie in der Nähe des Herstellungsortes verwendet – das spart lange Transportwege.",
            "Anbau und Verarbeitung schaffen Arbeitsplätze vor Ort."
          ]
        }
      ],
      figures: [
        { src: "assets/holz-nutzung.png", caption: "Die PowerPoint-Grafik zeigt den Weg vom Holz zu Zellstoff, Lignin und verschiedenen Produkten." },
        { src: "assets/materialien/NT9-organische-Rohstoffe-image12.png", caption: "Aus Raps entstehen neben Biodiesel auch Rapsstroh, Futtermittel und Glycerin." }
      ],
      interactive: { type: "carbonAtoms" },
      tasks: [
        { type: "choice", prompt: "Welche Aussage beschreibt einen regenerativen Rohstoff?", options: ["Er bildet sich nur unter hohem Druck.", "Er kann bei nachhaltiger Nutzung nachwachsen.", "Er wird ausschließlich als Brennstoff genutzt."], answer: 1 },
        { type: "match", prompt: "Ordne Rohstoff und Nutzung zu.", pairs: [["Zellstoff", "Papier und Pappe"], ["Lignin", "chemische Produkte"], ["Rapsöl", "Speiseöl oder Biodiesel"]] },
        { type: "choice", prompt: "Warum bezeichnet man regenerative Rohstoffe als CO₂-neutral?", options: ["Bei ihrer Nutzung entsteht überhaupt kein Kohlenstoffdioxid.", "Die Pflanzen binden beim Wachsen so viel Kohlenstoffdioxid, wie später wieder frei wird.", "Das Kohlenstoffdioxid bleibt für immer im Holz gespeichert."], answer: 1 },
        { type: "choice", prompt: "Welche Aussage über regenerative Rohstoffe trifft NICHT zu?", options: ["Sie sind weltweit einsetzbar.", "Ihr Anbau kann Arbeitsplätze schaffen.", "Die Fotosynthese setzt dabei Kohlenstoffdioxid frei."], answer: 2 },
        { type: "text", prompt: "Erkläre, warum Holz und Raps organische und zugleich regenerative Rohstoffe sind.", expected: "Holz und Raps stammen von Lebewesen und enthalten Kohlenstoffverbindungen. Sie können nachwachsen, wenn Anbau und Nutzung nachhaltig erfolgen.", keywords: ["Lebewesen", "Kohlenstoff", "nachwachsen", "nachhaltig"] }
      ]
    },
    {
      id: "m02",
      group: "organische-rohstoffe",
      nr: 2,
      // eigene Lernseite im Stil von NT 7 (Stationen, Film, Animationen, KI-Fragen)
      page: "modul-2.html",
      title: "Biodiesel, Stärke und Nachhaltigkeit",
      duration: "45 min",
      goal: "Du beschreibst die Herstellung von Biodiesel und Stärke, testest die Stärkefolie im Film und beurteilst, wann regenerative Rohstoffe nachhaltig sind.",
      sections: [
        {
          title: "Vom Rapskorn zum Biodiesel",
          text: [
            "In der Ölmühle werden Rapssamen gepresst. Das Rapsöl reagiert in einer Biodieselanlage mit Methanol. Dabei entstehen Biodiesel und Glycerin. Biodiesel kann als Kraftstoff verwendet werden, Glycerin zum Beispiel in der Kosmetikindustrie.",
            "Biodiesel ist biologisch abbaubar und nutzt Kohlenstoff, den die Rapspflanze beim Wachsen aus der Luft aufgenommen hat. Trotzdem entstehen Belastungen durch Feldbearbeitung, Dünger, Pflanzenschutz und Verarbeitung."
          ]
        },
        {
          title: "Stärke als Industrierohstoff",
          text: [
            "Stärke wird in Pflanzen als Reservestoff gespeichert. Kartoffeln, Mais und Getreide liefern besonders viel davon. In Lebensmitteln bindet Stärke Wasser und dickt Speisen an.",
            "Auch die Industrie nutzt Stärke: für Papier, Tapetenkleister, Tabletten, Cremes und biologisch abbaubare Folien. Damit ist Stärke nicht nur Nährstoff, sondern auch ein wichtiger nachwachsender Rohstoff."
          ]
        }
      ],
      figures: [
        { src: "assets/materialien/NT9-organische-Rohstoffe-image12.png", caption: "Der Stoffstrom aus der PowerPoint zeigt Hauptprodukte und Nebenprodukte der Biodieselherstellung." },
        { src: "assets/staerke-rohstoffe.jpeg", caption: "Kartoffeln, Mais und Getreide sind typische Stärkelieferanten." }
      ],
      interactive: { type: "compareBars" },
      tasks: [
        { type: "order", prompt: "Bringe die Herstellung von Biodiesel in die richtige Reihenfolge.", steps: ["Raps ernten", "Rapssamen in der Ölmühle pressen", "Rapsöl mit Methanol umsetzen", "Biodiesel reinigen und nutzen"] },
        { type: "match", prompt: "Ordne Produkt und Verwendung zu.", pairs: [["Biodiesel", "Kraftstoff"], ["Glycerin", "Kosmetik"], ["Stärke", "Kleister oder Folie"]] },
        { type: "text", prompt: "Beurteile die Aussage: Biodiesel ist automatisch vollständig umweltfreundlich.", expected: "Die Aussage ist zu einfach. Raps wächst nach, aber sein Anbau benötigt große Flächen, Dünger und Pflanzenschutz. Auch Verarbeitung und Transport brauchen Energie. Biodiesel kann fossile Kraftstoffe nur teilweise ersetzen.", keywords: ["Fläche", "Dünger", "Pflanzenschutz", "Energie", "teilweise"] }
      ]
    },
    {
      id: "m04",
      group: "organische-rohstoffe",
      // Das frühere Modul 3 (m03, Nachhaltigkeit und Kaskadennutzung) wurde am 30.09.2026 gestrichen.
      // Die Kennungen m04 bis m06 bleiben, damit gespeicherter Fortschritt passt; angezeigt wird nr.
      nr: 3,
      // eigene Lernseite im Stil von NT 7 (Stationen, Film, Animationen, KI-Fragen)
      page: "modul-3.html",
      title: "Entstehung fossiler Rohstoffe",
      duration: "45 min",
      goal: "Du erklärst, was Fossilien sind, beschreibst die Entstehung von Erdöl, Erdgas und Kohle, vergleichst beide Wege und begründest, warum fossile Rohstoffe nicht nachhaltig sind.",
      sections: [
        {
          title: "Erdöl und Erdgas",
          text: [
            "Vor Millionen Jahren sanken abgestorbene Kleinstlebewesen auf den Meeresboden. Unter Luftabschluss entstand Faulschlamm. Sand, Geröll und Schlamm lagerten sich darüber ab. Mit wachsender Tiefe stiegen Druck und Temperatur.",
            "Die organischen Reste wandelten sich langsam in Erdöl und Erdgas um. Beide stiegen durch poröse Gesteinsschichten nach oben und sammelten sich unter einer undurchlässigen Deckschicht."
          ]
        },
        {
          title: "Kohle",
          text: [
            "Kohle entstand vor allem aus Pflanzenresten in früheren Sumpfwäldern. Unter Luftabschluss bildete sich zunächst Torf. Weitere Ablagerungen erhöhten den Druck. Über sehr lange Zeit entstanden daraus Braun- und Steinkohle.",
            "Fossile Rohstoffe bilden sich viel langsamer, als Menschen sie verbrauchen. Ihre Vorräte sind deshalb endlich und sie gelten nicht als regenerativ."
          ]
        }
      ],
      figures: [
        { src: "assets/materialien/NT9-organische-Rohstoffe-image23.png", caption: "Erdöl und Erdgas entstehen aus organischen Resten unter Sedimentschichten." },
        { src: "assets/materialien/NT9-organische-Rohstoffe-image22.png", caption: "Pflanzenreste werden über Torf und hohen Druck zu Kohle." }
      ],
      interactive: { type: "fossilTimeline" },
      tasks: [
        { type: "match", prompt: "Ordne die Ausgangsstoffe zu.", pairs: [["Kohle", "Pflanzenreste"], ["Erdöl und Erdgas", "Meereslebewesen"], ["Fossil", "erhaltener oder versteinerter Überrest"]] },
        { type: "order", prompt: "Ordne die Entstehung von Erdöl.", steps: ["Kleinstlebewesen sterben und sinken ab", "Faulschlamm entsteht unter Luftabschluss", "Sedimente erhöhen Druck und Temperatur", "Erdöl und Erdgas sammeln sich unter Deckgestein"] },
        { type: "text", prompt: "Erkläre den wichtigsten Unterschied zwischen der Entstehung von Kohle und Erdöl.", expected: "Kohle entstand überwiegend aus Pflanzenresten früherer Sumpfwälder. Erdöl und Erdgas entstanden vor allem aus abgestorbenen kleinen Meereslebewesen. Beide Vorgänge dauerten Millionen Jahre.", keywords: ["Pflanzenreste", "Sumpfwald", "Meereslebewesen", "Millionen Jahre"] }
      ]
    },
    {
      id: "m05",
      group: "organische-rohstoffe",
      nr: 4,
      // eigene Lernseite im Stil von NT 7 (Stationen, Film, Animationen, KI-Fragen)
      page: "modul-4.html",
      title: "Erdölaufbereitung und Fraktionen",
      duration: "45 min",
      goal: "Du erklärst die fraktionierte Destillation im Destillationsturm, begründest die Destillation bei vermindertem Druck, verbindest Molekülgröße, Siedetemperatur und Zähflüssigkeit und nennst Produkte aus Erdöl.",
      sections: [
        {
          title: "Trennen nach Siedetemperatur",
          text: [
            "Rohöl ist ein Stoffgemisch aus vielen Kohlenwasserstoffen. In der Raffinerie wird es gereinigt, auf etwa 350 °C erhitzt und als Dampf-Flüssigkeits-Gemisch in einen Destillationsturm geleitet.",
            "Im Turm ist es unten heiß und oben kühler. Die Dämpfe steigen auf, kühlen ab und kondensieren auf verschiedenen Zwischenböden. So entstehen Fraktionen mit ähnlichen Siedetemperaturen."
          ]
        },
        {
          title: "Eigenschaften und Verwendung",
          text: [
            "Kleine Moleküle haben niedrige Siedetemperaturen, sind dünnflüssig und leicht entzündlich. Dazu gehören Gase und Benzin. Größere Moleküle sieden bei höheren Temperaturen und sind zähflüssiger. Dazu gehören Dieselöl, Schmieröle und Bitumen.",
            "Sehr schwere Bestandteile würden sich bei noch höherer Temperatur zersetzen. Sie werden deshalb unter vermindertem Druck weiter destilliert. Dadurch sinken ihre Siedetemperaturen."
          ]
        }
      ],
      figures: [
        { src: "assets/materialien/NT9-organische-Rohstoffe-image25.png", caption: "Ein Destillationsturm trennt das Rohöl in Fraktionen mit ähnlichen Siedebereichen." },
        { src: "assets/erdoelfraktionen-flamme.png", caption: "Benzin und Kerosin verdampfen leichter als Diesel- und Motoröl und lassen sich deshalb leichter entzünden." }
      ],
      interactive: { type: "distillation" },
      tasks: [
        { type: "match", prompt: "Ordne die Fraktionen dem Bereich im Turm zu.", pairs: [["Gase", "ganz oben"], ["Benzin und Kerosin", "oben und in der Mitte"], ["Diesel und schwere Öle", "weiter unten"]] },
        { type: "choice", prompt: "Warum kondensieren verschiedene Fraktionen in unterschiedlicher Höhe?", options: ["Sie besitzen unterschiedliche Siedetemperaturen.", "Sie haben verschiedene Farben.", "Sie reagieren mit den Zwischenböden."], answer: 0 },
        { type: "text", prompt: "Erkläre den Zusammenhang zwischen Molekülgröße, Siedetemperatur und Zähflüssigkeit einer Erdölfraktion.", expected: "Mit zunehmender Molekülgröße steigen meist Siedetemperatur und Zähflüssigkeit. Kleine Moleküle verdampfen leichter und sind dünnflüssiger, große Moleküle sieden später und fließen zäher.", keywords: ["Molekülgröße", "Siedetemperatur", "zähflüssig", "klein", "groß"] }
      ]
    },
    {
      id: "m06",
      group: "organische-rohstoffe",
      nr: 5,
      // eigene Lernseite im Stil von NT 7 (Stationen, Film, Animationen, KI-Fragen)
      page: "modul-5.html",
      title: "Kohlenstoffkreislauf und Treibhauseffekt",
      duration: "45 min",
      goal: "Du verfolgst den Weg des Kohlenstoffs, erklärst den natürlichen und den verstärkten Treibhauseffekt, wertest das CO₂-Experiment aus, berechnest, wie viel CO₂ eine Reise verursacht, und widerlegst Klima-Mythen im Duell.",
      sections: [
        {
          title: "Kohlenstoff im Umlauf",
          text: [
            "Grüne Pflanzen nehmen Kohlenstoffdioxid aus der Luft auf und bauen bei der Fotosynthese Zucker und andere organische Stoffe auf. Atmung, Zersetzung und Verbrennung setzen Kohlenstoffdioxid wieder frei. Ozeane und Böden speichern ebenfalls große Mengen Kohlenstoff.",
            "Der natürliche Kreislauf ist annähernd ausgeglichen. Durch die Verbrennung von Kohle, Erdöl und Erdgas gelangt jedoch in kurzer Zeit zusätzlicher Kohlenstoff in die Atmosphäre, der zuvor Millionen Jahre gespeichert war."
          ]
        },
        {
          title: "Treibhauseffekt und Erdölnutzung",
          text: [
            "Treibhausgase halten einen Teil der Wärmestrahlung in der Atmosphäre zurück. Der natürliche Treibhauseffekt ermöglicht Leben. Steigt die Menge an Kohlenstoffdioxid, wird mehr Wärme zurückgehalten und das Klima verändert sich.",
            "Erdöl wird vor allem für Verkehr, Heizung und Energie genutzt. Ein kleinerer, aber wichtiger Anteil dient als Rohstoff für Kunststoffe, Medikamente, Farben, Waschmittel, Textilien und viele weitere Produkte. Ein Ersatz braucht deshalb Energiealternativen, Kreislaufwirtschaft und neue Ausgangsstoffe."
          ]
        }
      ],
      figures: [
        { src: "assets/materialien/NT9-organische-Rohstoffe-image46.jpeg", caption: "Die PowerPoint-Grafik zeigt, wie Treibhausgase einen Teil der Wärmestrahlung zurückhalten." },
        { src: "assets/materialien/NT9-organische-Rohstoffe-image49.png", caption: "Erdöl steckt in Kraftstoffen und in vielen Produkten des täglichen Lebens." }
      ],
      interactive: { type: "carbonCycle" },
      tasks: [
        { type: "choice", prompt: "Welcher Prozess entzieht der Atmosphäre Kohlenstoffdioxid?", options: ["Fotosynthese", "Atmung", "Verbrennung von Heizöl"], answer: 0 },
        { type: "match", prompt: "Ordne Prozess und Wirkung zu.", pairs: [["Fotosynthese", "bindet Kohlenstoff"], ["Atmung und Zersetzung", "setzen CO2 frei"], ["Verbrennung fossiler Rohstoffe", "führt zusätzlichen Kohlenstoff zu"]] },
        { type: "text", prompt: "Begründe, warum ein Leben mit deutlich weniger Erdöl schwierig, aber für den Klimaschutz wichtig ist.", expected: "Erdöl liefert Energie und ist Ausgangsstoff für viele Alltagsprodukte, daher braucht ein Ersatz neue Energieträger, Rohstoffe und Recycling. Weniger Verbrennung setzt weniger zusätzliches CO2 frei und bremst den verstärkten Treibhauseffekt.", keywords: ["Alltagsprodukte", "Energie", "Ersatz", "CO2", "Treibhauseffekt", "Klima"] }
      ]
    },
    {
      id: "m07",
      group: "organische-rohstoffe",
      nr: 6,
      // eigene Lernseite im Stil von NT 7 (Stationen, Animationen, KI-Grafiken)
      page: "modul-6.html",
      title: "Erdöl – Rohstoff mit Zukunft?",
      duration: "45 min",
      goal: "Du findest heraus, wo Erdöl im Alltag steckt und wofür es verwendet wird, und beurteilst es aus Sicht von Nachhaltigkeit, Ökologie und Ökonomie: Warum ist Erdöl so billig, und warum sind wir vom Import abhängig?",
      sections: [
        {
          title: "Verwendung und Bewertung",
          text: [
            "Der größte Teil des Erdöls wird verbrannt: etwa 35 % für Heizung, 29 % im Verkehr und 22 % zur Energiegewinnung. Nur etwa 7 % nutzt die chemische Industrie als Rohstoff für Kunststoffe, Kunstfasern, Farben und Medikamente.",
            "Erdöl ist endlich und damit nicht nachhaltig. Beim Verbrennen entsteht CO₂, Kunststoffmüll belastet die Meere. Erdölprodukte sind nur preiswert, weil die Umweltkosten nicht im Preis stecken. Deutschland muss fast alles Erdöl einführen."
          ]
        }
      ],
      tasks: []
    },
    {
      id: "m08",
      group: "organische-rohstoffe",
      nr: 7,
      // eigene Lernseite: Ersatz für Erdöl, fünf Rollen, KI-Diskussion allein und am Tisch
      page: "modul-7.html",
      title: "Ohne Erdöl – geht das?",
      duration: "90 min",
      goal: "Du lernst, was Erdöl als Energieträger und als Rohstoff ersetzen kann und welche Nachteile Ersatzstoffe haben. Dann vertrittst du in einer Diskussionsrunde eine von fünf Rollen – allein gegen die KI oder zu viert am Tisch – und bekommst ein Protokoll mit Faktenprüfung.",
      sections: [
        {
          title: "Ersatz und Diskussion",
          text: [
            "Als Energieträger lässt sich Erdöl durch erneuerbare Energien ersetzen, z. B. mit Wärmepumpen, Elektroautos, Bus und Bahn. Als Rohstoff helfen nachwachsende Rohstoffe wie Stärke für Bioplastik oder Raps für Biodiesel, dazu Sparen und Recycling.",
            "Ersatzstoffe sind oft noch teurer, brauchen Forschung und Ackerfläche. Darum wird gestritten, wie schnell der Umstieg gehen soll. In einer guten Diskussion begründet man seine Meinung mit Belegen, geht auf andere ein und sucht einen Kompromiss."
          ]
        }
      ],
      tasks: []
    }
  ]
};
