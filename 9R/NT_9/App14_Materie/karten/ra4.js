/* Lernkarten zum Modul „Altersbestimmung mit der C-14-Methode“ (NT 9, Radioaktivität 4, Modul-id ra-c14). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("ra-c14", [
  { id: "k1", art: "begriff", v: "Was gibt die Aktivität A eines radioaktiven Stoffes an?", h: "Wie viele Atomkerne des Stoffes in einer Sekunde zerfallen. Je größer die Aktivität, desto stärker strahlt der Stoff." },
  { id: "k2", art: "formel", v: "Was bedeutet 1 Becquerel (Bq)?", h: "1 Bq = 1 Kernzerfall pro Sekunde. Becquerel ist die Einheit der Aktivität." },
  { id: "k3", art: "formel", v: "Ein Zähler misst 3 000 Impulse in einer Minute. Wie groß ist die Aktivität?", h: "Durch 60 teilen (1 Minute = 60 Sekunden): 3 000 : 60 = 50 Kernzerfälle pro Sekunde = 50 Bq." },
  { id: "k4", art: "begriff", v: "Was ist C-14?", h: "Ein radioaktives Isotop des Kohlenstoffs: 6 Protonen und 8 Neutronen. Daneben gibt es C-12 und C-13. Halbwertszeit von C-14: 5 730 Jahre." },
  { id: "k5", art: "ursache", v: "Wie entsteht C-14?", h: "Hoch oben in der Atmosphäre: Die Höhenstrahlung (kosmische Strahlung) verwandelt Stickstoff-14 in Kohlenstoff-14." },
  { id: "k6", art: "bild", v: "Der Weg des C-14: Was gehört in die Kästchen 1 bis 4?",
    bild: '<svg viewBox="0 0 300 92" xmlns="http://www.w3.org/2000/svg"><defs><marker id="ra4pf" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 Z" fill="#15212b"/></marker></defs>' +
      '<g fill="#fff" stroke="#15212b" stroke-width="1.8"><rect x="4" y="22" width="56" height="40" rx="6"/><rect x="80" y="22" width="56" height="40" rx="6"/><rect x="156" y="22" width="56" height="40" rx="6"/><rect x="232" y="22" width="64" height="40" rx="6"/></g>' +
      '<g stroke="#15212b" stroke-width="2" marker-end="url(#ra4pf)"><line x1="61" y1="42" x2="76" y2="42"/><line x1="137" y1="42" x2="152" y2="42"/><line x1="213" y1="42" x2="228" y2="42"/></g>' +
      '<g font-family="Arial" font-size="18" font-weight="700" text-anchor="middle" fill="#b8720a"><text x="32" y="49">1</text><text x="108" y="49">2</text><text x="184" y="49">3</text><text x="264" y="49">4</text></g>' +
      '<g font-family="Arial" font-size="10" text-anchor="middle" fill="#566674"><text x="32" y="78">in der Luft</text><text x="108" y="78">Gas</text><text x="184" y="78">nimmt CO₂ auf</text><text x="264" y="78">frisst Pflanzen</text></g></svg>',
    h: "1 = Stickstoff-14 wird durch Höhenstrahlung zu C-14 · 2 = CO₂ mit C-14 · 3 = Pflanze (Fotosynthese) · 4 = Tier (und Mensch) über die Nahrung." },
  { id: "k7", art: "ursache", v: "Warum bleibt der C-14-Anteil in einem lebenden Tier gleich?", h: "Es nimmt mit der Nahrung ständig neuen Kohlenstoff auf. Zerfallenes C-14 wird so immer ersetzt – der Anteil ist so groß wie in der Luft." },
  { id: "k8", art: "ursache", v: "Was passiert mit dem C-14, wenn ein Lebewesen stirbt?", h: "Es kommt kein neues C-14 mehr dazu. Das vorhandene zerfällt weiter (β-Zerfall zu Stickstoff-14). Der C-14-Anteil sinkt." },
  { id: "k9", art: "formel", v: "Wie viel C-14 ist nach 5 730, 11 460 und 17 190 Jahren noch übrig?", h: "Nach 5 730 Jahren (1 Halbwertszeit) 50 %, nach 11 460 Jahren 25 %, nach 17 190 Jahren 12,5 %. Der Rest halbiert sich immer wieder." },
  { id: "k10", art: "bild", v: "Lies an der Zerfallskurve ab: Wie alt sind die Funde A (50 % C-14) und B (25 % C-14)?",
    bild: '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg"><path d="M40 8 V110 H292" fill="none" stroke="#15212b" stroke-width="2"/>' +
      '<path d="M40.0 14.0 L47.0 24.9 L54.0 34.6 L61.0 43.2 L68.0 50.8 L75.0 57.6 L82.0 63.5 L89.0 68.8 L96.0 73.5 L103.0 77.7 L110.0 81.4 L117.0 84.6 L124.0 87.5 L131.0 90.1 L138.0 92.3 L145.0 94.4 L152.0 96.1 L159.0 97.7 L166.0 99.1 L173.0 100.4 L180.0 101.5 L187.0 102.4 L194.0 103.3 L201.0 104.1 L208.0 104.7 L215.0 105.3 L222.0 105.9 L229.0 106.3 L236.0 106.8 L242.9 107.1 L249.9 107.5 L256.9 107.7 L263.9 108.0 L270.9 108.2 L277.9 108.4 L284.9 108.6 L291.9 108.8" fill="none" stroke="#b8720a" stroke-width="3"/>' +
      '<g stroke="#7a4b05" stroke-width="1.3" stroke-dasharray="4 3" fill="none"><path d="M40 62 H80.1"/><path d="M40 86 H120.2"/></g>' +
      '<g fill="#fff" stroke="#15212b" stroke-width="1.8"><circle cx="80.1" cy="62" r="9"/><circle cx="120.2" cy="86" r="9"/></g>' +
      '<g font-family="Arial" font-size="11" font-weight="700" text-anchor="middle" fill="#15212b"><text x="80.1" y="66">A</text><text x="120.2" y="90">B</text></g>' +
      '<g font-family="Arial" font-size="10" text-anchor="end" fill="#566674"><text x="35" y="18">100 %</text><text x="35" y="66">50 %</text><text x="35" y="90">25 %</text></g>' +
      '<text x="166" y="126" font-family="Arial" font-size="10" text-anchor="middle" fill="#566674">Jahre nach dem Tod</text></svg>',
    h: "A: 50 % = 1 Halbwertszeit → etwa 5 730 Jahre. B: 25 % = 2 Halbwertszeiten → etwa 11 460 Jahre." },
  { id: "k11", art: "anwendung", v: "Wie alt ist Ötzi – und woher weiß man das?", h: "Sein Körper enthält noch etwa 53 % des C-14 eines lebenden Menschen. An der Zerfallskurve liest man ab: Er lebte vor rund 5 300 Jahren. Gefunden wurde er 1991 in den Ötztaler Alpen." },
  { id: "k12", art: "vergleich", v: "Welche Funde kann man mit der C-14-Methode datieren – welche nicht?", h: "Nur Reste von Lebewesen: Holz, Knochen, Leder, Stoff, Holzkohle. Nicht: Stein, Metall – sie haben nie C-14 aus der Luft aufgenommen." },
  { id: "k13", art: "fehler", v: "Stimmt das? „Mit der C-14-Methode kann man das Alter von Dinosaurier-Knochen bestimmen.“", h: "Falsch. Die Methode reicht nur bis etwa 50 000 Jahre – danach ist zu wenig C-14 übrig. Dinosaurier lebten vor mehr als 66 Millionen Jahren." },
  { id: "k14", art: "ursache", v: "Warum ist ein Alter aus der C-14-Methode immer nur ungefähr?", h: "Die Messung der Strahlung ist nie ganz genau, und auch das Ablesen an der Kurve nicht. Bei sehr alten Funden ist die Kurve so flach, dass kleine Fehler viel ausmachen." }
]);
