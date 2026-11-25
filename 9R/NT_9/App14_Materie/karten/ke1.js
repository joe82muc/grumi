/* Lernkarten zum Modul „Die Entdeckung der Kernspaltung“ (NT 9, Kernenergie 1, Modul-id ke-kernspaltung). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("ke-kernspaltung", [
  { id: "k1", art: "begriff", v: "Wer entdeckte 1938 die Kernspaltung – und wer erklärte sie?", h: "Otto Hahn und Fritz Strassmann entdeckten sie 1938 in Berlin. Lise Meitner lieferte die Erklärung." },
  { id: "k2", art: "versuch", v: "Was wollten Hahn und Strassmann mit ihrem Versuch erreichen?", h: "Sie bestrahlten Uran mit Neutronen. Die Urankerne sollten ein Neutron einfangen und so ein neues, schwereres Element bilden." },
  { id: "k3", art: "versuch", v: "Was fanden Hahn und Strassmann stattdessen in der Uranprobe?", h: "Barium (56 Protonen) – ein viel leichteres Element als Uran (92 Protonen). Das konnten sie sich nicht erklären." },
  { id: "k4", art: "formel", v: "Wie rechnete Lise Meitner mit den Protonen?", h: "Kein Teilchen verschwindet: Uran hat 92 Protonen, Barium 56. Der zweite Kern hat 92 − 56 = 36 Protonen – das ist Krypton." },
  { id: "k5", art: "ursache", v: "Warum hatten Hahn und Strassmann das Krypton nicht bemerkt?", h: "Krypton ist ein Gas. Es entwich aus der Probe." },
  { id: "k6", art: "begriff", v: "Was ist Kernspaltung?", h: "Ein schwerer Atomkern (z. B. Uran-235) zerbricht in zwei etwa gleich große Trümmerkerne. Dabei wird sehr viel Energie frei. Den Begriff prägte Lise Meitner." },
  { id: "k7", art: "begriff", v: "Warum eignen sich Neutronen so gut, um Atomkerne zu beschießen?", h: "Neutronen haben keine elektrische Ladung. Der Kern stößt sie nicht ab, deshalb können sie in ihn eindringen." },
  { id: "k8", art: "bild", v: "Beschreibe den Ablauf einer Kernspaltung in vier Schritten.",
    bild: '<svg viewBox="0 0 300 92" xmlns="http://www.w3.org/2000/svg"><defs><marker id="k1pf" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0 0 L7 3.5 L0 7 Z" fill="#15212b"/></marker></defs>' +
      '<g fill="#4a6fa5"><circle cx="12" cy="40" r="5"/><circle cx="96" cy="40" r="5"/><circle cx="252" cy="12" r="4.5"/><circle cx="290" cy="34" r="4.5"/><circle cx="238" cy="70" r="4.5"/></g>' +
      '<g fill="#f2c1c1" stroke="#c0392b" stroke-width="2"><circle cx="46" cy="40" r="16"/><circle cx="117" cy="40" r="17"/><circle cx="164" cy="40" r="13"/><circle cx="186" cy="40" r="11"/><circle cx="232" cy="30" r="12"/><circle cx="270" cy="56" r="10"/></g>' +
      '<g stroke="#15212b" stroke-width="2" marker-end="url(#k1pf)"><path d="M19 40 H26"/><path d="M66 40 H84"/><path d="M138 40 H146"/><path d="M200 40 H214"/></g>' +
      '<g font-family="Arial" font-size="14" font-weight="700" fill="#15212b" text-anchor="middle"><text x="40" y="86">1</text><text x="112" y="86">2</text><text x="175" y="86">3</text><text x="255" y="86">4</text></g></svg>',
    h: "1. Ein Neutron trifft einen Uran-235-Kern. 2. Der Kern fängt es ein und ist kurz Uran-236. 3. Er schwingt und verformt sich wie eine Hantel. 4. Er zerbricht in zwei Trümmerkerne." },
  { id: "k9", art: "begriff", v: "Was entsteht bei jeder Kernspaltung außer den zwei Trümmerkernen?", h: "2 oder 3 neue Neutronen, γ-Strahlung und sehr viel Energie." },
  { id: "k10", art: "formel", v: "Prüfe die Massenzahlen: Uran-235 + 1 Neutron → Barium-144 + Krypton-89 + 3 Neutronen.", h: "235 + 1 = 236 und 144 + 89 + 3 = 236. Kein Kernbaustein geht verloren." },
  { id: "k11", art: "transfer", v: "Ein Urankern zerbricht in Lanthan-147 (57 Protonen) und 2 Neutronen. Welcher Kern entsteht noch?", h: "92 − 57 = 35 Protonen → Brom. Massenzahl: 236 − 147 − 2 = 87. Es entsteht Brom-87." },
  { id: "k12", art: "ursache", v: "Wie wird bei der Kernspaltung aus Kernenergie Wärme?", h: "Die Trümmerkerne rasen auseinander und stoßen Nachbarkerne an. Diese schwingen heftiger – die Materie wird heiß." },
  { id: "k13", art: "vergleich", v: "Vergleiche die Energie aus 1 g Uran-235 mit der aus 1 g Kohle.", h: "1 g Uran-235 liefert etwa 100 Millionen kJ, 1 g Kohle nur etwa 29 kJ." },
  { id: "k14", art: "anwendung", v: "Wofür wurde die Energie der Kernspaltung genutzt?", h: "Im Kernkraftwerk zur Stromerzeugung – aber auch für die Atombombe (1945 Hiroshima und Nagasaki)." }
]);
