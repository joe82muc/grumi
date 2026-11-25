/* Lernkarten zum Modul „Alpha, Beta, Gamma – die Strahlungsarten“ (NT 9, Radioaktivität 2, Modul-id ra-strahlungsarten). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("ra-strahlungsarten", [
  { id: "k1", art: "begriff", v: "Welche drei Strahlungsarten gibt es?", h: "α-Strahlung (Alpha), β-Strahlung (Beta) und γ-Strahlung (Gamma). α und β sind Teilchenstrahlung, γ ist eine elektromagnetische Welle." },
  { id: "k2", art: "versuch", v: "Was hält α-Strahlung auf?", h: "Schon ein Blatt Papier oder eine Postkarte. α-Strahlung hat eine sehr kurze Reichweite." },
  { id: "k3", art: "versuch", v: "Womit schirmt man β-Strahlung ab?", h: "Mit einer Aluminiumplatte von 1 mm Dicke. Durch Papier geht β-Strahlung hindurch." },
  { id: "k4", art: "versuch", v: "Wie gut schirmt Blei γ-Strahlung ab?", h: "13 mm Blei lassen noch etwa die Hälfte durch. Ganz abgeschirmt ist γ-Strahlung erst hinter mindestens 20 cm Blei." },
  { id: "k5", art: "bild", v: "Strahlung fliegt zwischen einer Plusplatte (oben) und einer Minusplatte (unten). Welche Bahn gehört zu α, β und γ?",
    bild: '<svg viewBox="0 0 300 120" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="10" width="150" height="9" rx="2" fill="#e05252"/><rect x="70" y="101" width="150" height="9" rx="2" fill="#4a6fa5"/>' +
      '<g font-family="Arial" font-size="16" font-weight="700"><text x="56" y="21" text-anchor="middle" fill="#c0392b">+</text><text x="56" y="112" text-anchor="middle" fill="#1f4f8f">−</text></g>' +
      '<rect x="6" y="49" width="28" height="22" rx="3" fill="#6b7a86"/>' +
      '<g fill="none" stroke="#15212b" stroke-width="2.5"><path d="M34 60 H70 Q145 60 220 34 L262 18"/><path d="M34 60 H262"/><path d="M34 60 H70 Q145 60 220 70 L262 76"/></g>' +
      '<g fill="#fff" stroke="#15212b" stroke-width="1.8"><circle cx="276" cy="16" r="10"/><circle cx="276" cy="56" r="10"/><circle cx="276" cy="84" r="10"/></g>' +
      '<g font-family="Arial" font-size="13" font-weight="700" text-anchor="middle" fill="#15212b"><text x="276" y="21">1</text><text x="276" y="61">2</text><text x="276" y="89">3</text></g></svg>',
    h: "1 = β (stark zum Pluspol, negativ geladen) · 2 = γ (geradeaus, ungeladen) · 3 = α (leicht zum Minuspol, positiv geladen)." },
  { id: "k6", art: "ursache", v: "Warum wird α-Strahlung im elektrischen Feld zum Minuspol abgelenkt?", h: "α-Teilchen sind positiv geladen. Gegensätzliche Ladungen ziehen sich an." },
  { id: "k7", art: "vergleich", v: "Warum wird α-Strahlung viel weniger abgelenkt als β-Strahlung?", h: "α-Teilchen sind schwere Heliumkerne. β-Teilchen sind Elektronen – winzig und fast ohne Masse. Leichtes lässt sich leichter ablenken." },
  { id: "k8", art: "begriff", v: "Woraus bestehen α-, β- und γ-Strahlung?", h: "α: Heliumkerne (2 Protonen + 2 Neutronen) · β: schnelle Elektronen · γ: elektromagnetische Welle wie Licht, aber mit viel mehr Energie." },
  { id: "k9", art: "begriff", v: "Was sind Isotope?", h: "Atome desselben Elements (gleich viele Protonen) mit verschieden vielen Neutronen. Sie reagieren chemisch gleich, sind aber verschieden schwer." },
  { id: "k10", art: "bild", v: "Wie heißen diese drei Wasserstoff-Isotope, und was unterscheidet sie?",
    bild: '<svg viewBox="0 0 300 90" xmlns="http://www.w3.org/2000/svg"><g stroke="#fff" stroke-width="1.5">' +
      '<circle cx="50" cy="42" r="13" fill="#e05252"/>' +
      '<circle cx="138" cy="42" r="13" fill="#e05252"/><circle cx="162" cy="42" r="13" fill="#4a6fa5"/>' +
      '<circle cx="250" cy="31" r="13" fill="#e05252"/><circle cx="238" cy="52" r="13" fill="#4a6fa5"/><circle cx="262" cy="52" r="13" fill="#4a6fa5"/></g>' +
      '<g font-family="Arial" font-size="13" font-weight="700" text-anchor="middle" fill="#15212b"><text x="50" y="84">A</text><text x="150" y="84">B</text><text x="250" y="84">C</text></g></svg>',
    h: "A = H-1 (normaler Wasserstoff, 1 Proton) · B = H-2 Deuterium (1 Proton + 1 Neutron) · C = H-3 Tritium (1 Proton + 2 Neutronen). Gleiche Protonenzahl, verschiedene Neutronenzahl." },
  { id: "k11", art: "formel", v: "Was geben Massenzahl und Kernladungszahl an?", h: "Massenzahl = Protonen + Neutronen (z. B. Kohlenstoff-14: 14). Kernladungszahl = Zahl der Protonen (Kohlenstoff: 6) – sie bestimmt das Element." },
  { id: "k12", art: "begriff", v: "Was passiert beim α-Zerfall?", h: "Ein instabiler Kern schleudert einen Heliumkern heraus (2 Protonen + 2 Neutronen). Es entsteht ein neues Element: Radon-222 → Polonium-218 + Helium-4." },
  { id: "k13", art: "begriff", v: "Was passiert beim β-Zerfall?", h: "Im Kern wird ein Neutron zu einem Proton und einem Elektron. Das Elektron fliegt heraus. 1 Proton mehr → neues Element, Massenzahl bleibt: Kohlenstoff-14 → Stickstoff-14." },
  { id: "k14", art: "formel", v: "Wie schreibt man eine Zerfallsgleichung? Ergänze: Ra-226 (88 Protonen) → ? + He-4 (α-Zerfall)",
    h: "Oben Massenzahl, unten Kernladungszahl; links und rechts gleiche Summen. 226 − 4 = 222, 88 − 2 = 86 → Radon: Ra-226 → Rn-222 + He-4." }
]);
