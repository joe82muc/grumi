window.NT_CONTENT = {
  topics: [
    { title: "02 Atome und Materie", parts: ["Atommodelle", "Teilchen und Stoffe"] },
    { title: "03 Tiere", parts: ["Wirbeltierklassen", "Lebensräume"] },
    { title: "04 Mensch und Gesundheit", parts: ["Atmung", "Blut", "Blutkreislauf"] },
    { title: "05 Elektrizität", parts: ["Stromwirkungen und Stromfluss", "Stromkreis, Spannung und Stromstärke", "Widerstand und Stromsicherheit"] }
  ],
  units: [
    {
      id: "luft-alltag", title: "Luft ist nicht nichts", group: 1, minutes: 18,
      lead: "Du siehst Luft nicht. Trotzdem nimmt sie Platz ein, hat Masse und kann etwas bewegen.",
      paragraphs: [
        "Menschen und Tiere brauchen Luft zum Atmen. Pflanzen tauschen ebenfalls Gase mit ihrer Umgebung aus. Auch eine Flamme braucht einen Bestandteil der Luft: Sauerstoff.",
        "Ein aufgeblasener Ballon zeigt: Luft füllt einen Raum aus. Drückst du eine verschlossene Spritze vorsichtig zusammen, wird die eingeschlossene Luft zusammengedrückt. Luft hat zudem Masse: Ein Liter Luft wiegt ungefähr 1,2 bis 1,3 Gramm. Der genaue Wert hängt unter anderem von Temperatur und Luftdruck ab.",
        "Wird Luft erwärmt, dehnt sie sich aus. Warme Luft steigt oft auf, weil sie bei gleichem Druck weniger dicht als kühlere Luft ist. Bewegte Luft nennen wir Wind."
      ],
      image: "luft-im-alltag.png", imageAlt: "Bildcollage mit Alltagssituationen, in denen Luft eine Rolle spielt", imageCaption: "Aus der Unterrichtspräsentation: Luft begegnet uns überall.",
      video: { title: "Fünf Fakten über Luft", url: "https://schule.zdf.de/video/fuenf-fakten-ueber-luft-100", note: "ZDF goes Schule, etwa 10 Minuten. Öffnet in einem neuen Tab; die Aufgaben hier sind auch ohne Video lösbar." },
      words: [["Volumen", "Raum, den ein Stoff einnimmt."], ["Masse", "Wie viel Materie ein Körper enthält; messbar mit einer Waage."], ["komprimierbar", "Zusammendrückbar. Zwischen den Luftteilchen ist Platz."], ["Dichte", "Masse in einem bestimmten Volumen."]],
      checks: [
        { type: "choice", prompt: "Was zeigt ein aufgeblasener Ballon?", options: ["Luft nimmt Raum ein.", "Luft besteht nur aus Sauerstoff.", "Luft hat keine Masse."], answer: 0, explain: "Der Ballon wird größer, weil Luft Platz beansprucht." },
        { type: "match", prompt: "Ordne die Beobachtung der Eigenschaft zu.", pairs: [["Ballon wird größer", "Luft nimmt Raum ein"], ["Spritze lässt sich zusammendrücken", "Luft ist komprimierbar"], ["Warme Luft steigt auf", "Warme Luft ist weniger dicht"]] },
        { type: "reflect", prompt: "Warum erlischt eine Kerze unter einem umgestülpten Glas nach einiger Zeit?", expected: "Die Flamme braucht Sauerstoff. Unter dem Glas gelangt kein frischer Sauerstoff nach; irgendwann reicht er für die Verbrennung nicht mehr." }
      ]
    },
    {
      id: "gase", title: "Woraus besteht Luft?", group: 1, minutes: 22,
      lead: "Luft ist ein Gemisch mehrerer Gase, nicht ein einzelner Stoff.",
      paragraphs: [
        "Stell dir 100 Liter trockene Luft vor: ungefähr 78 Liter sind Stickstoff, 21 Liter Sauerstoff und 1 Liter andere Gase. Zu diesem Rest gehören vor allem Argon und in kleiner Menge Kohlenstoffdioxid. Wasserdampf kann je nach Wetter unterschiedlich viel dazukommen.",
        "Chemische Symbole helfen, Stoffe kurz zu schreiben: N₂ steht für Stickstoff, O₂ für Sauerstoff und CO₂ für Kohlenstoffdioxid. Die kleine tiefgestellte Zahl nennt die Zahl der Atome in einem Molekül. Ein O₂-Molekül hat zwei Sauerstoffatome. Ein CO₂-Molekül hat ein Kohlenstoffatom und zwei Sauerstoffatome.",
        "Achtung: Kohlenstoffmonoxid heißt CO, Kohlenstoffdioxid heißt CO₂. Das ist nicht dasselbe."
      ],
      image: "luftzusammensetzung.png", imageAlt: "Balkendiagramm: 78 Prozent Stickstoff, 21 Prozent Sauerstoff, 1 Prozent andere Gase", imageCaption: "Zusammensetzung von trockener Luft, aus der Unterrichtspräsentation.",
      extraImage: "molekuele.png", extraImageAlt: "Molekülmodelle für Stickstoff, Sauerstoff und Kohlenstoffdioxid", extraImageCaption: "Modelle und Formeln aus der Unterrichtspräsentation.",
      words: [["Gasgemisch", "Mehrere Gase zusammen, ohne dass daraus ein neuer Stoff wird."], ["Molekül", "Teilchen aus mindestens zwei verbundenen Atomen."], ["Atom", "Kleinster Baustein eines chemischen Elements."], ["chemische Formel", "Kurzschrift für die Atome in einem Teilchen."]],
      checks: [
        { type: "match", prompt: "Ordne Anteil und Gas zu.", pairs: [["78 %", "Stickstoff"], ["21 %", "Sauerstoff"], ["etwa 1 %", "andere Gase"]] },
        { type: "match", prompt: "Ordne Formel und Namen zu.", pairs: [["N₂", "Stickstoff"], ["O₂", "Sauerstoff"], ["CO₂", "Kohlenstoffdioxid"], ["CO", "Kohlenstoffmonoxid"]] },
        { type: "choice", prompt: "Wie viele Sauerstoffatome enthält ein CO₂-Molekül?", options: ["Eines", "Zwei", "Drei"], answer: 1, explain: "Die 2 hinter O bedeutet zwei Sauerstoffatome." }
      ]
    },
    {
      id: "luftdruck", title: "Luftdruck verstehen", group: 1, minutes: 15,
      lead: "Auch unsichtbare Luft kann auf Gegenstände drücken.",
      paragraphs: [
        "Über uns befindet sich eine hohe Luftsäule. Ihre Masse übt Druck aus. Diesen Druck nennen wir Luftdruck. Er wirkt nicht nur von oben, sondern in alle Richtungen.",
        "Ein Saugnapf hält, wenn man ihn gegen eine glatte Fläche drückt: Unter ihm ist dann weniger Luft. Die Außenluft drückt den Saugnapf an die Fläche. Mit zunehmender Höhe wird der Luftdruck meist geringer, weil weniger Luft über uns liegt.",
        "Ein Barometer misst den Luftdruck. Wetterberichte geben ihn oft in Hektopascal (hPa) an. Für die Probe ist vor allem die Erklärung wichtig, nicht ein bestimmter Zahlenwert."
      ],
      image: "luft-im-alltag.png", imageAlt: "Alltagssituationen mit Luft", imageCaption: "Luft wirkt auch dort, wo wir sie nicht sehen.",
      words: [["Druck", "Kraft, die auf eine Fläche wirkt."], ["Luftdruck", "Druck, den Luft auf ihre Umgebung ausübt."], ["Barometer", "Gerät zum Messen des Luftdrucks."], ["hPa", "Hektopascal; eine Einheit für Druck."]],
      checks: [
        { type: "choice", prompt: "Warum hält ein Saugnapf an einer glatten Scheibe?", options: ["Die Außenluft drückt ihn an die Scheibe.", "Er wird durch Sauerstoff magnetisch.", "Luft hat keinen Einfluss."], answer: 0, explain: "Außen ist der Luftdruck größer als unter dem Saugnapf." },
        { type: "match", prompt: "Was passt zusammen?", pairs: [["Barometer", "misst Luftdruck"], ["hPa", "Einheit für Druck"], ["höherer Berg", "meist geringerer Luftdruck"]] },
        { type: "reflect", prompt: "Erkläre, warum der Luftdruck auf einem hohen Berg meist geringer ist.", expected: "Über einem hohen Berg befindet sich weniger Luft als am Boden im Tal. Deshalb drückt eine kleinere Luftsäule auf die Fläche." }
      ]
    },
    {
      id: "wind", title: "Wind als Energiequelle", group: 1, minutes: 20,
      lead: "Wind bewegt Rotorblätter. Ein Generator macht daraus elektrischen Strom.",
      paragraphs: [
        "Schon früher trieb Wind Segelschiffe und Windmühlen an. Bei einer modernen Windkraftanlage dreht der Wind die Rotorblätter. Die Drehbewegung treibt über die Anlage einen Generator an. Der Generator erzeugt elektrischen Strom.",
        "Vorteil: Während des Betriebs braucht die Anlage keinen Brennstoff und stößt dabei kaum Luftschadstoffe aus. Nachteil: Die Stromerzeugung schwankt mit dem Wind. Standort, Landschaftsbild, Geräusche und der Schutz von Tieren müssen berücksichtigt werden.",
        "Die Grafik aus der Präsentation zeigt die Entwicklung bis 2020. Sie ist eine historische Darstellung und keine aktuelle Bestandszahl."
      ],
      image: "windkraft-entwicklung.png", imageAlt: "Historische Grafik zur Entwicklung der Windenergie bis 2020", imageCaption: "Historische Entwicklung bis 2020, aus der Unterrichtspräsentation.",
      words: [["Rotor", "Drehender Teil einer Windkraftanlage mit Blättern."], ["Generator", "Wandelt Bewegung in elektrische Energie um."], ["erneuerbare Energie", "Energie aus Quellen, die sich natürlich erneuern."], ["schwankend", "Nicht immer gleich stark verfügbar."]],
      checks: [
        { type: "match", prompt: "Ordne die Schritte der Energieumwandlung zu.", pairs: [["Wind", "bewegt Rotorblätter"], ["Rotor", "treibt den Generator an"], ["Generator", "erzeugt elektrischen Strom"]] },
        { type: "choice", prompt: "Welche Aussage ist ein Nachteil der Windkraft?", options: ["Es wird immer gleich viel Strom erzeugt.", "Bei Windstille wird wenig oder kein Strom erzeugt.", "Für den Betrieb muss ständig Kohle verbrannt werden."], answer: 1, explain: "Die Leistung hängt vom Wind ab." },
        { type: "reflect", prompt: "Nenne einen Vorteil und einen möglichen Konflikt bei Windkraftanlagen.", expected: "Vorteil: Bei der Stromerzeugung im Betrieb wird kein Brennstoff verbrannt. Konflikt: Standorte können Auswirkungen auf Tiere, Landschaft und Anwohner haben." }
      ]
    },
    {
      id: "feuer", title: "Feuer und das Feuerdreieck", group: 2, minutes: 20,
      lead: "Feuer entsteht nur, wenn drei Bedingungen gleichzeitig erfüllt sind.",
      paragraphs: [
        "Eine Verbrennung ist eine Reaktion mit Sauerstoff, bei der Wärme und meist Licht freiwerden. Für ein Feuer braucht es einen brennbaren Stoff, genügend Sauerstoff und eine ausreichend hohe Zündtemperatur. Diese drei Bedingungen bilden das Feuerdreieck.",
        "Fehlt eine Bedingung, kann das Feuer nicht weiterbrennen. Wasser kann einen Brand kühlen; eine Löschdecke kann die Sauerstoffzufuhr unterbrechen. Was geeignet ist, hängt vom brennenden Stoff ab. Brennendes Fett darf niemals mit Wasser gelöscht werden.",
        "Sind brennbare Teilchen fein verteilt und reagieren sehr schnell, kann es zu einer Explosion kommen. Das Beispiel Staubexplosion zeigt: Nicht nur große Holzstücke oder Flüssigkeiten können brennen. Führe solche Versuche niemals selbst durch."
      ],
      image: "feuerdreieck.png", imageAlt: "Feuerdreieck mit Brennstoff, Sauerstoff und Zündtemperatur", imageCaption: "Das Feuerdreieck aus der Unterrichtspräsentation.",
      extraImage: "feuer.jpeg", extraImageAlt: "Offenes Feuer", extraImageCaption: "Feuer ist nur unter den drei Bedingungen möglich.",
      words: [["Brennstoff", "Stoff, der brennen kann."], ["Zündtemperatur", "Temperatur, ab der ein Stoff zu brennen beginnt."], ["Verbrennung", "Chemische Reaktion mit Sauerstoff, bei der Energie frei wird."], ["Explosion", "Sehr schnelle Reaktion mit plötzlicher Ausdehnung und Druckanstieg."]],
      checks: [
        { type: "match", prompt: "Ordne die drei Bedingungen zu.", pairs: [["Holz", "Brennstoff"], ["Luftzufuhr", "Sauerstoff"], ["Funke", "Zündenergie / Temperatur"]] },
        { type: "choice", prompt: "Eine Kerze wird mit einer Löschdecke abgedeckt. Was fehlt ihr dann?", options: ["Brennstoff", "Sauerstoff", "Wachs"], answer: 1, explain: "Die Decke unterbricht die Zufuhr frischer Luft." },
        { type: "reflect", prompt: "Warum kann fein verteilter Mehlstaub gefährlich sein?", expected: "Viele kleine Staubteilchen haben zusammen eine große Oberfläche. Sie können in Luft sehr schnell mit Sauerstoff reagieren; so kann eine Staubexplosion entstehen." }
      ]
    },
    {
      id: "brandschutz", title: "Brände vermeiden und richtig reagieren", group: 2, minutes: 18,
      lead: "Brandschutz beginnt lange vor einem Brand.",
      paragraphs: [
        "Brennbares Material soll nicht an heiße Geräte oder offene Flammen gelangen. Elektrische Geräte werden sachgemäß verwendet; beschädigte Kabel meldest du einer erwachsenen Person. Fluchtwege bleiben frei.",
        "Bei einem Brand warnst du andere, bringst dich in Sicherheit und rufst die Feuerwehr über 112. Nenne den Ort, was brennt und ob Menschen in Gefahr sind. Bringe dich nicht selbst in Gefahr. Nur kleine Entstehungsbrände dürfen Erwachsene mit geeignetem Mittel bekämpfen.",
        "Merke: Wasser ist nicht für jeden Brand geeignet. Bei Fett- und elektrischen Bränden kann es gefährlich werden. Die wichtigste Schülerhandlung ist Alarmieren, Abstand halten und den Anweisungen folgen."
      ],
      image: "brand.jpeg", imageAlt: "Brand als Anlass für Brandschutz", imageCaption: "Ein Brand zeigt, warum Vorbeugung und richtiges Verhalten wichtig sind.",
      words: [["Brandschutz", "Maßnahmen, die Brände verhindern oder ihre Folgen begrenzen."], ["Fluchtweg", "Weg aus einem gefährdeten Gebäude ins Freie."], ["Notruf", "Anruf bei Feuerwehr oder Rettungsdienst über 112."], ["Löschmittel", "Stoff oder Gerät zum Löschen, passend zur Brandart."]],
      checks: [
        { type: "choice", prompt: "Was tust du bei einem größeren Brand zuerst?", options: ["Alle warnen, in Sicherheit gehen und 112 rufen.", "Allein mit Wasser löschen.", "Ein Foto machen und abwarten."], answer: 0, explain: "Menschen schützen und Feuerwehr alarmieren hat Vorrang." },
        { type: "match", prompt: "Ordne Verhalten und Grund zu.", pairs: [["Fluchtweg freihalten", "schnell hinauskommen"], ["Defektes Kabel melden", "Zündquelle vermeiden"], ["112 wählen", "Feuerwehr alarmieren"]] },
        { type: "reflect", prompt: "Warum darfst du brennendes Fett nicht mit Wasser löschen?", expected: "Wasser kann im heißen Fett schlagartig verdampfen und brennendes Fett herausschleudern. Alarmiere Erwachsene und bring dich in Sicherheit." }
      ]
    },
    {
      id: "oxidation", title: "Sauerstoff reagiert: Eisen und Apfel", group: 2, minutes: 20,
      lead: "Sauerstoff kann Stoffe verändern, auch ohne sichtbare Flamme.",
      paragraphs: [
        "Eisenwolle reagiert beim Erhitzen mit Sauerstoff zu Eisenoxid. Auf der Waage ist das Reaktionsprodukt schwerer als die Eisenwolle zuvor. Der zusätzliche Sauerstoff stammt aus der Luft und ist nun im neuen Stoff gebunden.",
        "Ein aufgeschnittener Apfel wird an der Luft braun. Dabei spielen Sauerstoff und Enzyme im Apfel zusammen. Das ist nicht dasselbe wie das Rosten von Eisen, aber beides zeigt eine Veränderung durch Reaktionen mit Sauerstoff.",
        "Wichtig für die Probe: Nicht behaupten, Sauerstoff sei aus dem Nichts entstanden. Die Masse des Eisens steigt durch die Aufnahme von Sauerstoff aus der Umgebung."
      ],
      image: "eisenwolle-waage.png", imageAlt: "Eisenwolle vor und nach der Reaktion auf einer Waage", imageCaption: "Versuch und Waage aus der Unterrichtspräsentation.",
      extraImage: "apfel.png", extraImageAlt: "Aufgeschnittener Apfel mit brauner Schnittfläche", extraImageCaption: "Eine Veränderung an der Luft: brauner Apfel.",
      video: { title: "Versuch mit Eisenwolle", url: "https://www.youtube.com/watch?v=8m2XQ2_tKtA", embed: "https://www.youtube-nocookie.com/embed/8m2XQ2_tKtA", note: "Beobachte besonders die Waage. Der Versuch wird nur im Video angeschaut, nicht zu Hause nachgemacht." },
      words: [["Oxidation", "Reaktion eines Stoffes mit Sauerstoff."], ["Eisenoxid", "Neuer Stoff, der bei der Reaktion von Eisen mit Sauerstoff entsteht."], ["Reaktionsprodukt", "Stoff, der nach einer chemischen Reaktion entsteht."], ["Enzym", "Stoff im Lebewesen, der chemische Reaktionen ermöglicht oder beschleunigt."]],
      checks: [
        { type: "choice", prompt: "Warum wird die erhitzte Eisenwolle schwerer?", options: ["Sie nimmt Sauerstoff aus der Luft auf.", "Die Waage erzeugt Eisen.", "Hitze hat selbst Masse."], answer: 0, explain: "Sauerstoff wird im Eisenoxid gebunden." },
        { type: "match", prompt: "Ordne Stoff und Beobachtung zu.", pairs: [["Eisen + Sauerstoff", "Eisenoxid entsteht"], ["aufgeschnittener Apfel + Luft", "Schnittfläche wird braun"], ["Waage nach Eisenreaktion", "größere Masse"]] },
        { type: "reflect", prompt: "Erkläre die Massenzunahme der Eisenwolle in zwei Sätzen.", expected: "Die Eisenwolle verbindet sich mit Sauerstoff aus der Luft. Das entstandene Eisenoxid enthält Eisen und zusätzlichen Sauerstoff und hat deshalb mehr Masse als das Eisen vorher." }
      ]
    },
    {
      id: "verschmutzung", title: "Luftverschmutzung und Gesundheit", group: 2, minutes: 25,
      lead: "Schadstoffe in der Luft können Menschen, Pflanzen und Klima belasten.",
      paragraphs: [
        "Autoabgase, Heizen, Industrie und Brände können Luftschadstoffe freisetzen. Feinstaub besteht aus winzigen festen oder flüssigen Teilchen. Besonders kleine Teilchen können tief in die Atemwege gelangen. Smog bezeichnet stark verschmutzte Luft, bei der die Sicht oft schlechter wird.",
        "Kohlenstoffmonoxid (CO) ist giftig. Kohlenstoffdioxid (CO₂) verstärkt als Treibhausgas den Klimawandel, ist aber nicht dasselbe wie CO. Stickstoffoxide und Schwefeldioxid können die Luft belasten und zur Bildung saurer Niederschläge beitragen. Bodennahes Ozon kann die Atemwege reizen.",
        "Das Max-Planck-Video erklärt an Beispielen aus Peking, Nordafrika und Europa Quellen und Wege von Feinstaub. Sein Ausblick auf 2050 ist eine Simulation unter bestimmten Annahmen, keine sichere Vorhersage. Die damaligen Gesundheitszahlen im Film sind historische Angaben; für die Probe musst du keine Zahlen auswendig lernen.",
        "Saubere Luft fördern wir zum Beispiel durch weniger Schadstoffausstoß, geeignete Filter, kluge Verkehrsplanung und erneuerbare Energie. Einzelne Maßnahmen ersetzen keine gemeinsamen Regeln und Technik."
      ],
      image: "smog-stadt.webp", imageAlt: "Stadt mit sichtbarer Luftverschmutzung", imageCaption: "Stadtluft aus der Unterrichtspräsentation.",
      extraImage: "luftverschmutzung.png", extraImageAlt: "Grafik zur Luftverschmutzung aus der Präsentation", extraImageCaption: "Luftverschmutzung betrifft Gesundheit und Umwelt.",
      video: { title: "Luftverschmutzung: Simulation bis 2050", url: "https://www.youtube.com/watch?v=Xn_bW692Lm8", embed: "https://www.youtube-nocookie.com/embed/Xn_bW692Lm8", note: "Max Planck Society. Der Text oben fasst die für die Probe wichtigen Aussagen des automatisch erzeugten deutschen Transkripts zusammen; Erkennungsfehler wurden fachlich geprüft." },
      words: [["Feinstaub", "Sehr kleine Teilchen, die in der Luft schweben."], ["Smog", "Stark verschmutzte Luft, oft mit schlechter Sicht."], ["Emission", "Ausstoß eines Stoffes in die Umwelt."], ["Szenario", "Mögliche Entwicklung unter bestimmten Annahmen, keine sichere Vorhersage."], ["Treibhausgas", "Gas, das Wärme in der Atmosphäre zurückhält."]],
      checks: [
        { type: "match", prompt: "Ordne den Stoff seiner Wirkung zu.", pairs: [["CO", "giftiges Gas"], ["CO₂", "Treibhausgas"], ["Feinstaub", "winzige Teilchen in der Luft"], ["bodennahes Ozon", "reizt Atemwege"]] },
        { type: "choice", prompt: "Was bedeutet die 2050-Darstellung im Video?", options: ["Eine Simulation mit Annahmen.", "Ein sicherer Bericht aus der Zukunft.", "Eine Messung aus dem Jahr 2050."], answer: 0, explain: "Eine Modellrechnung zeigt nur, was unter ihren Annahmen passieren könnte." },
        { type: "reflect", prompt: "Erkläre, warum sehr kleiner Feinstaub für Menschen problematisch ist.", expected: "Winzige Teilchen können tief in die Atemwege und teilweise weiter in den Körper gelangen. Sie können die Gesundheit schädigen." }
      ]
    }
  ]
};
