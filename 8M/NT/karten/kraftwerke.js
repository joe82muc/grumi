/* Lernkarten zum Modul „Kraftwerke und der Weg des Stroms“ (NT 8). Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("kraftwerke", [
  { id: "k1", art: "begriff", v: "Wie arbeitet ein Wärmekraftwerk?", h: "Ein Brennstoff erhitzt Wasser zu Dampf. Der Dampf dreht die Turbine, die Turbine treibt den Generator an." },
  { id: "k2", art: "begriff", v: "Wie lautet die Energiekette im Wasserkraftwerk?", h: "Lageenergie des Wassers → Bewegungsenergie → Turbine → Generator → elektrische Energie." },
  { id: "k3", art: "begriff", v: "Welche Aufgabe hat der Generator im Kraftwerk?", h: "Er wandelt die Bewegungsenergie der Turbine in elektrische Energie um." },
  { id: "k4", art: "begriff", v: "Wozu dienen Kondensator und Kühlturm im Wärmekraftwerk?", h: "Im Kondensator wird der Dampf wieder zu Wasser. Die Abwärme gibt der Kühlturm an die Luft ab." },
  { id: "k5", art: "formel", v: "Wie berechnet man den Wirkungsgrad?", h: "Nutzbare (elektrische) Energie : eingesetzte Energie. Meist gibt man ihn in Prozent an." },
  { id: "k6", art: "bild", v: "Was zeigt das Bild?",
    bild: '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="30" width="180" height="26" fill="#f0a35e"/><rect x="10" y="30" width="72" height="26" fill="#1b8a4b"/><text x="46" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#fff">Strom</text><text x="136" y="48" text-anchor="middle" font-size="13" font-weight="700" fill="#5a2a00">Abwärme</text><text x="100" y="86" text-anchor="middle" font-size="14" font-weight="700" fill="#15212b">100 Teile hinein</text><text x="100" y="106" text-anchor="middle" font-size="12" fill="#566674">etwa 40 davon als Strom</text></svg>',
    h: "Den Wirkungsgrad eines Kohlekraftwerks: Von 100 Teilen Energie werden etwa 40 zu Strom, der Rest ist Abwärme." },
  { id: "k7", art: "ursache", v: "Warum ist der Wirkungsgrad eines Wärmekraftwerks klein?", h: "Ein großer Teil der Wärme bleibt im abgekühlten Dampf. Diese Abwärme kann die Turbine nicht mehr nutzen." },
  { id: "k8", art: "vergleich", v: "Welches Kraftwerk hat den höheren Wirkungsgrad: Wasser oder Kohle?", h: "Das Wasserkraftwerk mit etwa 90 %. Ein Kohlekraftwerk kommt auf etwa 40 %." },
  { id: "k9", art: "ursache", v: "Warum überträgt man Strom über weite Strecken mit Hochspannung?", h: "Bei hoher Spannung fließt für dieselbe Leistung eine kleinere Stromstärke. Die Leitung erwärmt sich weniger, es geht weniger Energie verloren." },
  { id: "k10", art: "anwendung", v: "Wozu braucht man Umspannwerke?", h: "Am Kraftwerk hebt man die Spannung an. Vor den Orten senkt man sie stufenweise ab, bis im Haus 230 V ankommen." },
  { id: "k11", art: "transfer", v: "Ein Wasserkraftwerk soll mehr Leistung liefern. Was kann sich ändern?", h: "Eine größere Fallhöhe oder mehr Wasser pro Sekunde. Beides erhöht die Leistung." },
  { id: "k12", art: "fehler", v: "Finde den Fehler: „Der Transformator im Kraftwerk erzeugt zusätzliche Energie.“", h: "Falsch. Er ändert nur die Höhe der Spannung. Energie erzeugt er nicht." },
  { id: "k13", art: "formel", v: "Die Leistung bleibt gleich (P = U · I). Die Spannung wird 100-mal größer. Was geschieht mit der Stromstärke?", h: "Sie wird 100-mal kleiner. Darum ist die Erwärmung der Leitung viel geringer.", m: true },
  { id: "k14", art: "vergleich", v: "Der Wirkungsgrad allein reicht nicht, um Kraftwerke zu bewerten. Welche Kriterien kommen dazu?", h: "Die Wirtschaftlichkeit (Kosten) und die Umweltverträglichkeit, zum Beispiel CO₂ und Eingriffe in die Landschaft.", m: true },
  { id: "k15", art: "begriff", v: "Was ist der Unterschied zwischen sachlichen und wertenden Aussagen?", h: "Sachliche Aussagen kann man prüfen, zum Beispiel mit einem Messwert. Wertende hängen von der Meinung ab („gut“, „schlecht“).", m: true },
  { id: "k16", art: "transfer", v: "Windrad und Photovoltaik: Was haben sie bei Brennstoff und CO₂ gemeinsam, und was ist ihr Nachteil?", h: "Beide brauchen keinen Brennstoff und stoßen im Betrieb kein CO₂ aus. Sie liefern aber nur bei Wind oder Sonne Strom.", m: true }
]);
