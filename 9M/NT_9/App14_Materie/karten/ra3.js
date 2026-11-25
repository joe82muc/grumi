/* Lernkarten zum Modul „Die Halbwertszeit“ (NT 9, Radioaktivität 3, Modul-id ra-halbwertszeit). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("ra-halbwertszeit", [
  { id: "k1", art: "begriff", v: "Was ist die Halbwertszeit?", h: "Die Zeit, nach der die Hälfte der Kerne eines radioaktiven Isotops zerfallen ist. Dann ist auch die Strahlung nur noch halb so groß." },
  { id: "k2", art: "versuch", v: "Wie läuft das Münzspiel zur Halbwertszeit ab?", h: "100 Münzen werfen, alle mit der Zahl oben aussortieren, den Rest zählen und notieren, mit dem Rest wieder werfen. Nach jedem Wurf bleibt etwa die Hälfte übrig." },
  { id: "k3", art: "ursache", v: "Warum weichen die Werte beim Münzspiel von der Hälfte ab – und was hilft?", h: "Ob eine Münze die Zahl zeigt, ist Zufall. Bei wenigen Münzen sind die Abweichungen groß. Man spielt mehrere Runden und bildet den Mittelwert." },
  { id: "k4", art: "begriff", v: "Kann man vorhersagen, wann ein einzelner Atomkern zerfällt?", h: "Nein, das ist Zufall. Erst bei sehr vielen Kernen gilt die feste Regel: In einer Halbwertszeit zerfällt die Hälfte." },
  { id: "k5", art: "formel", v: "Wie viel ist nach 1, 2, 3 und 4 Halbwertszeiten noch da?", h: "1/2 (50 %) · 1/4 (25 %) · 1/8 (12,5 %) · 1/16 (6,25 %)." },
  { id: "k6", art: "fehler", v: "Finde den Fehler: „Nach zwei Halbwertszeiten ist alles zerfallen.“", h: "In jeder Halbwertszeit zerfällt die Hälfte vom Rest, nicht vom Anfang. Nach zwei Halbwertszeiten ist noch ein Viertel da." },
  { id: "k7", art: "bild", v: "Lies an dieser Zerfallskurve ab: Wie groß ist die Halbwertszeit?",
    bild: '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="150" fill="#fff"/>' +
      '<g stroke="#e1e8ee" stroke-width="1"><line x1="40" y1="72" x2="290" y2="72"/><line x1="40" y1="42" x2="290" y2="42"/><line x1="40" y1="102" x2="290" y2="102"/><line x1="100" y1="12" x2="100" y2="132"/><line x1="160" y1="12" x2="160" y2="132"/><line x1="220" y1="12" x2="220" y2="132"/><line x1="280" y1="12" x2="280" y2="132"/></g>' +
      '<path d="M40 12 V132 H292" fill="none" stroke="#15212b" stroke-width="2"/>' +
      '<path d="M40 12L47.5 22L55 31.1L62.5 39.5L70 47.1L77.5 54.2L85 60.6L92.5 66.6L100 72L107.5 77L115 81.5L122.5 85.7L130 89.6L137.5 93.1L145 96.3L152.5 99.3L160 102L167.5 104.5L175 106.8L182.5 108.9L190 110.8L197.5 112.5L205 114.2L212.5 115.6L220 117L227.5 118.2L235 119.4L242.5 120.4L250 121.4L257.5 122.3L265 123.1L272.5 123.8L280 124.5" fill="none" stroke="#c0392b" stroke-width="3" stroke-linejoin="round"/>' +
      '<g font-family="Arial" font-size="11" font-weight="700" fill="#15212b" text-anchor="end"><text x="35" y="16">800</text><text x="35" y="76">400</text><text x="35" y="106">200</text><text x="35" y="136">0</text></g>' +
      '<g font-family="Arial" font-size="11" font-weight="700" fill="#15212b" text-anchor="middle"><text x="40" y="146">0</text><text x="100" y="146">2</text><text x="160" y="146">4</text><text x="220" y="146">6</text><text x="280" y="146">8 h</text></g></svg>',
    h: "2 Stunden. Die Hälfte von 800 ist 400 – auf der Kurve gehört 400 zu 2 Stunden. Nach 4 Stunden sind es 200." },
  { id: "k8", art: "vergleich", v: "Nenne die Halbwertszeiten von Iod-128, Radium-226 und Uran-238.", h: "Iod-128: etwa 30 Minuten · Radium-226: etwa 1 600 Jahre · Uran-238: 4,4 Milliarden Jahre. Jedes Isotop hat seine eigene Halbwertszeit; sie bleibt immer gleich." },
  { id: "k9", art: "formel", v: "Wie rechnest du mit der Halbwertszeit?", h: "1. Zeit : Halbwertszeit = Zahl der Halbwertszeiten. 2. Den Anfangswert so oft halbieren. 3. Antwortsatz schreiben." },
  { id: "k10", art: "transfer", v: "10 000 Kerne Iod-128 (Halbwertszeit etwa 30 Minuten): Wie viele sind nach 2 Stunden noch da?", h: "2 Stunden = 120 Minuten = 4 Halbwertszeiten. 10 000 → 5 000 → 2 500 → 1 250 → 625 Kerne." },
  { id: "k11", art: "transfer", v: "Nach 2 Stunden ist von einem Stoff nur noch ein Viertel da. Wie groß ist die Halbwertszeit?", h: "Ein Viertel = 2-mal halbiert = 2 Halbwertszeiten. 2 Stunden : 2 = 1 Stunde." },
  { id: "k12", art: "bild", v: "Was zeigt dieses Säulendiagramm vom Münzspiel?",
    bild: '<svg viewBox="0 0 300 140" xmlns="http://www.w3.org/2000/svg"><rect width="300" height="140" fill="#fff"/>' +
      '<g fill="#cd7f32"><rect x="40" y="20" width="30" height="100"/><rect x="90" y="68" width="30" height="52"/><rect x="140" y="97" width="30" height="23"/><rect x="190" y="107" width="30" height="13"/><rect x="240" y="114" width="30" height="6"/></g>' +
      '<path d="M30 120 H285" stroke="#15212b" stroke-width="2"/>' +
      '<g font-family="Arial" font-size="12" font-weight="700" fill="#15212b" text-anchor="middle"><text x="55" y="15">100</text><text x="105" y="63">52</text><text x="155" y="92">23</text><text x="205" y="102">13</text><text x="255" y="109">6</text>' +
      '<text x="55" y="135">Start</text><text x="105" y="135">1</text><text x="155" y="135">2</text><text x="205" y="135">3</text><text x="255" y="135">4. Wurf</text></g></svg>',
    h: "Nach jedem Wurf bleibt etwa die Hälfte der Münzen übrig. Die Säulen werden erst schnell, dann immer langsamer kleiner – wie bei einer Zerfallskurve. Kleine Abweichungen sind Zufall." },
  { id: "k13", art: "anwendung", v: "Warum nimmt man für Untersuchungen im Krankenhaus Isotope mit kurzer Halbwertszeit?", h: "Sie zerfallen schnell. Nach kurzer Zeit ist fast nichts mehr davon im Körper. So wird der Körper nur kurz durch Strahlung belastet." }
]);
