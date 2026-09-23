window.KohlenstoffKurs = {
  apiBase: (location.hostname.includes("github.io") || location.protocol === "file:")
    ? "https://englisch-9.onrender.com" : "",
  storageKey: "grumi-nt9-" + (/\/9R\//i.test(location.pathname) ? "r9" : "m9") + "-organische-rohstoffe-fortschritt",
  groups: [
    {
      id: "organische-rohstoffe",
      label: "Lernbereich 1.1",
      title: "Organische Rohstoffe",
      subtitle: "Sechs Module zu nachwachsenden und fossilen Rohstoffen"
    }
  ],
  modules: [
    {
      id: "m01",
      group: "organische-rohstoffe",
      nr: 1,
      title: "Kohlenstoff, Holz und Raps",
      duration: "45 min",
      image: "assets/materialien/NT9-organische-Rohstoffe-image9.png",
      imageAlt: "Verarbeitung von Holz zu Zellstoff, Papier und Produkten der chemischen Industrie",
      goal: "Du erklärst, was organische und regenerative Rohstoffe sind, und beschreibst die Nutzung von Holz und Raps.",
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
            "Holz dient als Baustoff und Brennstoff. Aus seinen Bestandteilen Zellstoff und Lignin entstehen außerdem Papier, Pappe, Textilien, Klebstoffe und weitere chemische Produkte.",
            "Rapssamen enthalten Öl. Rapsöl wird als Speiseöl, als Ausgangsstoff für Biodiesel sowie für Farben und Kunststoffe genutzt. Damit kann derselbe Rohstoff stofflich oder energetisch verwendet werden."
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
        { type: "text", prompt: "Erkläre, warum Holz und Raps organische und zugleich regenerative Rohstoffe sind.", expected: "Holz und Raps stammen von Lebewesen und enthalten Kohlenstoffverbindungen. Sie können nachwachsen, wenn Anbau und Nutzung nachhaltig erfolgen.", keywords: ["Lebewesen", "Kohlenstoff", "nachwachsen", "nachhaltig"] }
      ]
    },
    {
      id: "m02",
      group: "organische-rohstoffe",
      nr: 2,
      title: "Biodiesel und Stärke",
      duration: "45 min",
      image: "assets/raps-biodiesel.png",
      imageAlt: "Herstellung von Biodiesel aus Raps",
      goal: "Du beschreibst die Herstellung von Biodiesel und erklärst die vielseitige Nutzung von Stärke.",
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
      id: "m03",
      group: "organische-rohstoffe",
      nr: 3,
      title: "Nachhaltigkeit und Kaskadennutzung",
      duration: "45 min",
      image: "assets/materialien/NT9-organische-Rohstoffe-image14.jpeg",
      imageAlt: "Symbole für Nachhaltigkeit, Recycling und erneuerbare Rohstoffe",
      goal: "Du beurteilst die Nachhaltigkeit regenerativer Rohstoffe und erklärst Kaskaden- und Kreislaufwirtschaft.",
      sections: [
        {
          title: "Wann ist ein Rohstoff nachhaltig?",
          text: [
            "Nachhaltigkeit bedeutet ein Gleichgewicht zwischen Verbrauch und Wachstum. Eine Nutzung ist dann nachhaltig, wenn sie die Lebensgrundlagen zukünftiger Generationen erhält.",
            "Eine hohe Nachfrage nach Mais, Raps oder Holz kann dieses Gleichgewicht stören. Monokulturen verringern die Artenvielfalt, erhöhen das Schädlingsrisiko und führen oft zu mehr Dünger und Pflanzenschutz. Zusätzlich konkurrieren Energiepflanzen mit dem Anbau von Lebensmitteln."
          ]
        },
        {
          title: "Mehrfach nutzen statt sofort verbrennen",
          text: [
            "Bei der Kaskadennutzung wird Biomasse zuerst stofflich und möglichst mehrfach genutzt. Ein Holzbrett kann lange Teil eines Regals sein, danach zu einer Spanplatte verarbeitet und erst am Ende energetisch genutzt werden.",
            "Kreislaufwirtschaft versucht, Rohstoffe durch Wiederverwendung und Recycling lange im Umlauf zu halten. In einer Linearwirtschaft endet der Weg dagegen nach Herstellung und Nutzung als Abfall."
          ]
        }
      ],
      figures: [
        { src: "assets/materialien/NT9-organische-Rohstoffe-image19.jpeg", caption: "Kaskadennutzung: zuerst Produkte herstellen, später recyceln und erst zuletzt Energie gewinnen." },
        { src: "assets/kaskadennutzung-holz.png", caption: "Die Kreislaufgrafik aus der PowerPoint zeigt mehrere Nutzungsstufen von Holz." }
      ],
      interactive: { type: "cascade" },
      tasks: [
        { type: "choice", prompt: "Welche Maßnahme verbessert die Nachhaltigkeit am stärksten?", options: ["Holz sofort verbrennen", "Große Flächen nur mit einer Pflanzenart anbauen", "Holz mehrfach stofflich nutzen und erst am Ende verbrennen"], answer: 2 },
        { type: "order", prompt: "Ordne die Holz-Kaskade.", steps: ["Baum wächst", "Holz wird zum Regal", "Altholz wird zur Spanplatte", "Reststoffe liefern Energie"] },
        { type: "text", prompt: "Erkläre zwei Probleme, die durch eine starke Ausweitung des Rapsanbaus entstehen können.", expected: "Große Rapsflächen können Lebensmittelanbau verdrängen. Monokulturen verringern die Artenvielfalt und benötigen häufig mehr Dünger und Pflanzenschutzmittel.", keywords: ["Lebensmittel", "Fläche", "Monokultur", "Artenvielfalt", "Dünger", "Pflanzenschutz"] }
      ]
    },
    {
      id: "m04",
      group: "organische-rohstoffe",
      nr: 4,
      title: "Entstehung fossiler Rohstoffe",
      duration: "45 min",
      image: "assets/entstehung-erdoel-erdgas.png",
      imageAlt: "Entstehung von Erdöl und Erdgas aus Meereslebewesen",
      goal: "Du vergleichst die Entstehung von Kohle mit der Entstehung von Erdöl und Erdgas.",
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
      nr: 5,
      title: "Erdölaufbereitung und Fraktionen",
      duration: "45 min",
      image: "assets/raffinerie.jpeg",
      imageAlt: "Destillationsturm einer Raffinerie",
      goal: "Du erklärst die fraktionierte Destillation und leitest Eigenschaften der Erdölfraktionen aus ihrer Molekülgröße ab.",
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
      nr: 6,
      title: "Kohlenstoffkreislauf und Erdöl im Alltag",
      duration: "45 min",
      image: "assets/materialien/NT9-organische-Rohstoffe-image46.jpeg",
      imageAlt: "Grafik zum natürlichen Treibhauseffekt",
      goal: "Du erklärst den Kohlenstoffkreislauf, den verstärkten Treibhauseffekt und die Bedeutung von Erdöl im Alltag.",
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
    }
  ]
};
