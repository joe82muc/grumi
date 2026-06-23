window.GEO_QUALI = {
  levelLabel: "Dreiecke",
  themeLine: "Thema: Dreiecke und Satz des Pythagoras, Mathematik 9.",
  // Eigene Werte (kein 1:1-Buchabdruck); Aufgabentyp gleich, neu durchgerechnet.
  tasks: [
    {
      id: "1",
      group: "Tabelle",
      title: "Fehlende Werte im Dreieck",
      text: "Berechne die fehlenden Werte in der Tabelle (allgemeines Dreieck).",
      table: {
        cols: ["a", "b", "c", "d"],
        rows: [
          { label: "g", cells: ["6 cm", "8 cm", "", "2,5 dm"] },
          { label: "h", cells: ["4 cm", "", "9 m", "4 dm"] },
          { label: "A", cells: ["", "20 cm²", "27 m²", ""] },
        ],
      },
      given: ["a) g = 6 cm, h = 4 cm", "b) g = 8 cm, A = 20 cm²", "c) h = 9 m, A = 27 m²", "d) g = 2,5 dm, h = 4 dm"],
      searched: "fehlende Werte g, h oder A",
      noSketch: true,
      plan: ["A = (g · h)/2", "h = (2 · A)/g", "g = (2 · A)/h"],
      solution: "a) A = (6 · 4)/2 = 12 cm². b) h = (2 · 20)/8 = 5 cm. c) g = (2 · 27)/9 = 6 m. d) A = (2,5 · 4)/2 = 5 dm².",
      result: "a) A = 12 cm²; b) h = 5 cm; c) g = 6 m; d) A = 5 dm²",
    },
    {
      id: "2",
      group: "Grundlagen",
      title: "Flächeninhalt eines Dreiecks",
      text: "Ein Dreieck hat die Grundseite g = 12 cm und die zugehörige Höhe h = 7 cm. Berechne den Flächeninhalt.",
      given: ["g = 12 cm", "h = 7 cm"],
      searched: "Flächeninhalt A",
      plan: ["A = (g · h)/2"],
      solution: "A = (12 · 7)/2 = 84/2 = 42 cm².",
      result: "A = 42 cm²",
    },
    {
      id: "3",
      group: "Grundlagen",
      title: "Rechtwinkliges Dreieck",
      text: "Ein rechtwinkliges Dreieck hat die Katheten a = 9 cm und b = 6 cm. Berechne den Flächeninhalt.",
      given: ["a = 9 cm", "b = 6 cm", "rechter Winkel zwischen a und b"],
      searched: "Flächeninhalt A",
      plan: ["A = (a · b)/2"],
      solution: "A = (9 · 6)/2 = 54/2 = 27 cm².",
      result: "A = 27 cm²",
    },
    {
      id: "4",
      group: "Umkehraufgabe",
      title: "Fehlende Kathete aus der Fläche",
      text: "Ein rechtwinkliges Dreieck hat den Flächeninhalt A = 24 cm². Eine Kathete ist a = 6 cm lang. Berechne die zweite Kathete b.",
      given: ["A = 24 cm²", "a = 6 cm"],
      searched: "Kathete b",
      plan: ["A = (a · b)/2", "b = (2 · A)/a"],
      solution: "b = (2 · 24)/6 = 48/6 = 8 cm.",
      result: "b = 8 cm",
    },
    {
      id: "5",
      group: "Pythagoras",
      title: "Hypotenuse berechnen",
      text: "Ein rechtwinkliges Dreieck hat die Katheten a = 9 cm und b = 12 cm. Berechne die Länge der Hypotenuse c.",
      given: ["a = 9 cm", "b = 12 cm"],
      searched: "Hypotenuse c",
      plan: ["c² = a² + b²", "c = √(a² + b²)"],
      solution: "c² = 9² + 12² = 81 + 144 = 225; c = √225 = 15 cm.",
      result: "c = 15 cm",
    },
    {
      id: "6",
      group: "Pythagoras",
      title: "Fehlende Kathete berechnen",
      text: "In einem rechtwinkligen Dreieck ist die Hypotenuse c = 20 cm und eine Kathete a = 16 cm. Berechne die zweite Kathete b.",
      given: ["c = 20 cm", "a = 16 cm"],
      searched: "Kathete b",
      plan: ["b² = c² − a²", "b = √(c² − a²)"],
      solution: "b² = 20² − 16² = 400 − 256 = 144; b = √144 = 12 cm.",
      result: "b = 12 cm",
    },
    {
      id: "7",
      group: "Pythagoras",
      title: "Rechtwinklig? (Umkehrung)",
      text: "Prüfe mit der Umkehrung des Satzes von Pythagoras, ob die Dreiecke rechtwinklig sind. Die längste Seite ist jeweils c.",
      given: ["a) a = 6, b = 8, c = 10", "b) a = 7, b = 24, c = 25", "c) a = 8, b = 9, c = 12", "d) a = 12, b = 16, c = 20"],
      searched: "rechtwinklig: ja oder nein",
      noSketch: true,
      plan: ["Vergleiche a² + b² mit c²", "a² + b² = c² → rechtwinklig", "a² + b² ≠ c² → nicht rechtwinklig"],
      solution: "a) 6² + 8² = 36 + 64 = 100 = 10² → rechtwinklig. b) 7² + 24² = 49 + 576 = 625 = 25² → rechtwinklig. c) 8² + 9² = 64 + 81 = 145 ≠ 144 = 12² → nicht rechtwinklig. d) 12² + 16² = 144 + 256 = 400 = 20² → rechtwinklig.",
      result: "a) ja; b) ja; c) nein; d) ja",
    },
    {
      id: "8",
      group: "Pythagoras",
      title: "Gleichschenkliges Dreieck",
      text: "Ein gleichschenkliges Dreieck hat die Basis a = 10 cm und die Schenkel b = 13 cm. Berechne die Höhe h auf die Basis, den Flächeninhalt und den Umfang.",
      given: ["Basis a = 10 cm", "Schenkel b = 13 cm"],
      searched: "Höhe h, Flächeninhalt A und Umfang u",
      figure: "Gleichschenkliges Dreieck; die Höhe h teilt die Basis a in zwei Teile von je a/2.",
      figureSvg: `<svg viewBox="0 0 240 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gleichschenkliges Dreieck">
  <polygon points="50,170 190,170 120,40" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <line x1="120" y1="40" x2="120" y2="170" stroke="#475569" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M120 158 L132 158 L132 170" fill="none" stroke="#475569" stroke-width="1.2"/>
  <text x="120" y="188" text-anchor="middle">a = 10 cm</text>
  <text x="58" y="100">b = 13 cm</text>
  <text x="150" y="100">b = 13 cm</text>
  <text x="126" y="112">h</text>
</svg>`,
      plan: ["h = √(b² − (a/2)²)", "A = (a · h)/2", "u = a + 2 · b"],
      solution: "h = √(13² − 5²) = √(169 − 25) = √144 = 12 cm; A = (10 · 12)/2 = 60 cm²; u = 10 + 2 · 13 = 36 cm.",
      result: "h = 12 cm; A = 60 cm²; u = 36 cm",
    },
    {
      id: "9",
      group: "Pythagoras",
      title: "Gleichseitiges Dreieck",
      text: "Ein gleichseitiges Dreieck hat die Seitenlänge a = 8 cm. Berechne die Höhe und den Flächeninhalt. Runde auf zwei Dezimalstellen.",
      given: ["a = 8 cm (alle Seiten gleich)"],
      searched: "Höhe h und Flächeninhalt A",
      figure: "Gleichseitiges Dreieck; die Höhe h steht senkrecht auf einer Seite und teilt sie in a/2.",
      plan: ["h = √(a² − (a/2)²)", "A = (a · h)/2"],
      solution: "h = √(8² − 4²) = √(64 − 16) = √48 ≈ 6,93 cm; A = (8 · 6,93)/2 ≈ 27,71 cm².",
      result: "h ≈ 6,93 cm; A ≈ 27,71 cm²",
    },
    {
      id: "10",
      group: "Sachaufgabe",
      title: "Laterne am Seil",
      text: "Zwischen zwei Häusern hängt ein 13 m langes Seil, in dessen Mitte eine 0,5 m hohe Laterne befestigt ist. Die Befestigungspunkte sind 12 m voneinander entfernt und liegen 6 m über der Straße. Berechne den Abstand zwischen dem Laternenboden und der Straße.",
      given: ["Seil 13 m lang", "Abstand der Häuser 12 m", "Aufhängung 6 m über der Straße", "Laterne 0,5 m hoch"],
      searched: "Abstand Laternenboden – Straße",
      figure: "Gleichschenkliges Dreieck: zwei Seilhälften je 6,5 m, waagrechter Abstand 12 m, Durchhang v in der Mitte.",
      figureSvg: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Laterne am Seil zwischen zwei Häusern">
  <line x1="40" y1="40" x2="40" y2="210" stroke="#94a3b8" stroke-width="6"/>
  <line x1="280" y1="40" x2="280" y2="210" stroke="#94a3b8" stroke-width="6"/>
  <line x1="20" y1="210" x2="300" y2="210" stroke="#94a3b8" stroke-width="3"/>
  <line x1="40" y1="90" x2="280" y2="90" stroke="#475569" stroke-width="1.4" stroke-dasharray="5 4"/>
  <path d="M40 90 L160 140 L280 90" fill="none" stroke="#0f766e" stroke-width="2"/>
  <line x1="160" y1="90" x2="160" y2="140" stroke="#9a3412" stroke-width="1.2" stroke-dasharray="4 3"/>
  <rect x="152" y="140" width="16" height="12" fill="rgba(251,146,60,.4)" stroke="#9a3412" stroke-width="1.4"/>
  <line x1="296" y1="90" x2="296" y2="210" stroke="#334155" stroke-width="1"/>
  <text x="160" y="82" text-anchor="middle">12 m</text>
  <text x="300" y="154">6 m</text>
  <text x="84" y="106">Seil 13 m</text>
  <text x="174" y="150" font-size="11">0,5 m</text>
</svg>`,
      plan: ["halbe Seillänge: 13 m : 2 = 6,5 m", "halber Hausabstand: 12 m : 2 = 6 m", "Durchhang v = √(6,5² − 6²)", "Laterne hängt bei 6 m − v", "Abstand = (6 m − v) − 0,5 m"],
      solution: "Halbe Seillänge = 6,5 m, halber Abstand = 6 m; v = √(6,5² − 6²) = √(42,25 − 36) = √6,25 = 2,5 m. Die Laterne hängt bei 6 − 2,5 = 3,5 m; der Laternenboden liegt 3,5 − 0,5 = 3,0 m über der Straße.",
      result: "Abstand = 3,0 m",
    },
  ],
  // Erklärvideos (Lehrer Schmidt) je Aufgabe – datenschutzfreundlich erst auf Klick.
  videos: {
    "1": { id: "UZSU-leMOKc", label: "Fläche Dreieck" },
    "2": { id: "UZSU-leMOKc", label: "Fläche Dreieck" },
    "3": { id: "UZSU-leMOKc", label: "Fläche Dreieck" },
    "4": { id: "UZSU-leMOKc", label: "Fläche Dreieck" },
    "5": { id: "FECtVbC-mgk", label: "Satz des Pythagoras" },
    "6": { id: "FECtVbC-mgk", label: "Satz des Pythagoras" },
    "7": { id: "FECtVbC-mgk", label: "Satz des Pythagoras" },
    "8": { id: "FECtVbC-mgk", label: "Satz des Pythagoras" },
    "9": { id: "FECtVbC-mgk", label: "Satz des Pythagoras" },
    "10": { id: "FECtVbC-mgk", label: "Satz des Pythagoras" },
  },
  // Nur die Grundformel als Tipp (nicht schon umgestellt).
  baseFormulas: {
    "1": ["A = (g · h)/2"],
    "2": ["A = (g · h)/2"],
    "3": ["A = (a · b)/2"],
    "4": ["A = (a · b)/2"],
    "5": ["a² + b² = c²"],
    "6": ["a² + b² = c²"],
    "7": ["a² + b² = c²  (Umkehrung: gilt die Gleichung?)"],
    "8": ["(a/2)² + h² = b²", "A = (a · h)/2", "u = a + 2 · b"],
    "9": ["(a/2)² + h² = a²", "A = (a · h)/2"],
    "10": ["Seilhälfte² = Abstandhälfte² + v²"],
  },
  // Schritt für Schritt: Werte einsetzen, dann nach der gesuchten Größe umstellen.
  rearrange: {
    "1": [
      "Beispiel: A und g gegeben, h gesucht",
      "A = (g · h)/2",
      "20 = (8 · h)/2",
      "| · 2:  40 = 8 · h",
      "| : 8:  h = 40 : 8",
    ],
    "4": [
      "A = (a · b)/2",
      "24 = (6 · b)/2",
      "| · 2:  48 = 6 · b",
      "| : 6:  b = 48 : 6",
    ],
    "5": [
      "a² + b² = c²",
      "9² + 12² = c²",
      "81 + 144 = c²",
      "225 = c²",
      "c = √225",
    ],
    "6": [
      "a² + b² = c²",
      "16² + b² = 20²",
      "256 + b² = 400",
      "| − 256:  b² = 144",
      "b = √144",
    ],
    "8": [
      "(a/2)² + h² = b²",
      "5² + h² = 13²",
      "25 + h² = 169",
      "| − 25:  h² = 144",
      "h = √144",
    ],
    "9": [
      "(a/2)² + h² = a²",
      "4² + h² = 8²",
      "16 + h² = 64",
      "| − 16:  h² = 48",
      "h = √48",
    ],
    "10": [
      "Seilhälfte² = Abstandhälfte² + v²",
      "6,5² = 6² + v²",
      "42,25 = 36 + v²",
      "| − 36:  v² = 6,25",
      "v = √6,25",
    ],
  },
};
