window.GEO_QUALI = {
  levelLabel: "Zusammengesetzte Flächen",
  themeLine: "Thema: Zusammengesetzte Flächen (zerlegen in Teilflächen, oft mit Satz des Pythagoras), Mathematik 9.",
  tasks: [
    {
      id: "1",
      group: "Kreis + Dreieck",
      title: "Dreieck mit Halbkreis",
      text: "Eine Figur besteht aus einem rechtwinkligen Dreieck mit den Katheten 6 cm und 8 cm und einem Halbkreis über der 6 cm langen Seite (Durchmesser 6 cm). Berechne den gesamten Flächeninhalt. Rechne mit π = 3,14.",
      given: ["rechtwinkliges Dreieck: Katheten 6 cm und 8 cm", "Halbkreis über der 6-cm-Seite (d = 6 cm, r = 3 cm)", "π = 3,14"],
      searched: "Gesamtfläche",
      figure: "Rechtwinkliges Dreieck; auf der 6-cm-Kathete sitzt ein Halbkreis mit Durchmesser 6 cm.",
      figureSvg: `<svg viewBox="0 0 280 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechtwinkliges Dreieck mit Halbkreis">
  <path d="M60 40 A60 60 0 0 0 60 160 Z" fill="rgba(20,184,166,.18)" stroke="#0f766e" stroke-width="2"/>
  <polygon points="60,160 230,160 60,40" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="2"/>
  <path d="M76 160 L76 144 L60 144" fill="none" stroke="#0f766e" stroke-width="1.6"/>
  <text x="70" y="104">6 cm</text>
  <text x="142" y="182" text-anchor="middle">8 cm</text>
  <text x="22" y="103" text-anchor="middle" font-size="11" fill="#0b6b58">Halbkreis</text>
</svg>`,
      plan: ["A_Dreieck = (a · b)/2", "A_Halbkreis = (π · r²)/2", "A_gesamt = A_Dreieck + A_Halbkreis"],
      solution: "A_Dreieck = (6 · 8)/2 = 24 cm²; r = 6 : 2 = 3 cm; A_Halbkreis = (3,14 · 3²)/2 = (3,14 · 9)/2 = 14,13 cm²; A_gesamt = 24 + 14,13 = 38,13 cm².",
      result: "A = 38,13 cm²",
    },
    {
      id: "2",
      group: "Rechteck + Dreieck",
      title: "Figur mit Spitze",
      text: "Eine Figur besteht aus einem Rechteck (12 cm × 5 cm) und einer dreieckigen Spitze. Die Spitze ist ein rechtwinkliges Dreieck mit den Katheten 5 cm und 4 cm. Berechne den gesamten Flächeninhalt.",
      given: ["Rechteck 12 cm × 5 cm", "Dreiecks-Spitze: Katheten 5 cm und 4 cm"],
      searched: "Gesamtfläche",
      figure: "Rechteck; an der kurzen Seite (5 cm) sitzt ein rechtwinkliges Dreieck als Spitze.",
      figureSvg: `<svg viewBox="0 0 280 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechteck mit dreieckiger Spitze">
  <rect x="40" y="55" width="160" height="70" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <polygon points="200,55 200,125 248,125" fill="rgba(251,146,60,.20)" stroke="#9a3412" stroke-width="2"/>
  <path d="M200 110 L215 110 L215 125" fill="none" stroke="#9a3412" stroke-width="1.4"/>
  <text x="120" y="143" text-anchor="middle">12 cm</text>
  <text x="170" y="94">5 cm</text>
  <text x="222" y="143">4 cm</text>
</svg>`,
      plan: ["A_Rechteck = a · b", "A_Dreieck = (a · b)/2", "A_gesamt = A_Rechteck + A_Dreieck"],
      solution: "A_Rechteck = 12 · 5 = 60 cm²; A_Dreieck = (5 · 4)/2 = 10 cm²; A_gesamt = 60 + 10 = 70 cm².",
      result: "A = 70 cm²",
    },
    {
      id: "3",
      group: "Quali-Aufgabe",
      title: "Windrad aus Quadrat und Parallelogrammen",
      text: "Eine Figur besteht aus einem Quadrat mit der Seite 6 cm und vier deckungsgleichen Parallelogrammen mit der Grundseite g = 7,5 cm und der Höhe h = 6 cm. Berechne den gesamten Flächeninhalt der Figur.",
      given: ["Quadrat: Seite 6 cm", "4 gleiche Parallelogramme: g = 7,5 cm, h = 6 cm"],
      searched: "Gesamtfläche",
      figure: "Quadrat in der Mitte, an jeder Seite ein Parallelogramm (Windrad-Form).",
      figureSvg: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Windrad aus Quadrat und vier Parallelogrammen">
  <polygon points="130,80 170,80 205,30 165,30" fill="rgba(148,163,184,.35)" stroke="#475569" stroke-width="1.6"/>
  <polygon points="170,80 170,120 220,155 220,115" fill="rgba(148,163,184,.35)" stroke="#475569" stroke-width="1.6"/>
  <polygon points="170,120 130,120 95,170 135,170" fill="rgba(148,163,184,.35)" stroke="#475569" stroke-width="1.6"/>
  <polygon points="130,120 130,80 80,45 80,85" fill="rgba(148,163,184,.35)" stroke="#475569" stroke-width="1.6"/>
  <rect x="130" y="80" width="40" height="40" fill="#ffffff" stroke="#0f766e" stroke-width="2"/>
  <text x="150" y="105" text-anchor="middle">6</text>
  <text x="192" y="50">7,5</text>
  <text x="150" y="66" text-anchor="middle" font-size="11" fill="#0b6b58">h = 6</text>
</svg>`,
      plan: ["A_Quadrat = a²", "A_Parallelogramm = g · h", "A_gesamt = A_Quadrat + 4 · A_Parallelogramm"],
      solution: "A_Quadrat = 6² = 36 cm²; A_Parallelogramm = 7,5 · 6 = 45 cm²; A_gesamt = 36 + 4 · 45 = 36 + 180 = 216 cm².",
      result: "A = 216 cm²",
    },
    {
      id: "4",
      group: "Pythagoras",
      title: "Dreieck aus einem Quadrat",
      text: "Aus einem Quadrat wird ein rechtwinkliges, gleichschenkliges Dreieck ausgeschnitten. Die Hypotenuse ist 10 cm lang, der rechte Winkel liegt an der Spitze C. Berechne den Flächeninhalt des Dreiecks.",
      given: ["rechtwinkliges, gleichschenkliges Dreieck", "Hypotenuse c = 10 cm", "rechter Winkel an der Spitze C"],
      searched: "Flächeninhalt des Dreiecks",
      figure: "Rechtwinkliges Dreieck mit gleich langen Schenkeln; die Höhe auf die Hypotenuse ist halb so lang wie die Hypotenuse.",
      figureSvg: `<svg viewBox="0 0 260 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrat mit ausgeschnittenem Dreieck">
  <rect x="60" y="30" width="140" height="140" fill="none" stroke="#94a3b8" stroke-width="1.6" stroke-dasharray="5 4"/>
  <polygon points="60,170 200,170 130,100" fill="rgba(20,184,166,.15)" stroke="#0f766e" stroke-width="2"/>
  <path d="M121 109 L130 117 L139 109" fill="none" stroke="#0f766e" stroke-width="1.6"/>
  <text x="130" y="188" text-anchor="middle">10 cm</text>
  <text x="50" y="184">A</text>
  <text x="204" y="184">B</text>
  <text x="130" y="94" text-anchor="middle">C</text>
  <text x="84" y="42" font-size="11" fill="#64748b">Quadrat</text>
</svg>`,
      plan: ["Höhe auf die Hypotenuse: h = c : 2", "A = (c · h)/2"],
      solution: "Bei einem rechtwinkligen, gleichschenkligen Dreieck ist die Höhe auf die Hypotenuse halb so lang wie diese: h = 10 : 2 = 5 cm; A = (10 · 5)/2 = 25 cm².",
      result: "A = 25 cm²",
    },
    {
      id: "5",
      group: "Pythagoras",
      title: "Rechtwinkliges Trapez",
      text: "Ein rechtwinkliges Trapez hat die längere parallele Seite a = 12 cm und die Höhe h = 8 cm. Die schräge Seite ist 10 cm lang. a) Berechne mit dem Satz des Pythagoras die kürzere parallele Seite c. b) Berechne den Flächeninhalt des Trapezes.",
      given: ["a = 12 cm", "h = 8 cm", "schräge Seite 10 cm"],
      searched: "kürzere Seite c und Flächeninhalt A",
      figure: "Rechtwinkliges Trapez; die schräge Seite bildet mit der Höhe h und dem Überstand (a − c) ein rechtwinkliges Dreieck.",
      figureSvg: `<svg viewBox="0 0 260 195" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechtwinkliges Trapez">
  <polygon points="50,150 210,150 130,50 50,50" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <path d="M50 135 L65 135 L65 150" fill="none" stroke="#0f766e" stroke-width="1.4"/>
  <path d="M50 65 L65 65 L65 50" fill="none" stroke="#0f766e" stroke-width="1.4"/>
  <text x="130" y="170" text-anchor="middle">a = 12 cm</text>
  <text x="88" y="44" text-anchor="middle">c = 6 cm</text>
  <text x="80" y="104">h = 8 cm</text>
  <text x="178" y="96">10 cm</text>
</svg>`,
      partHints: {
        a: { sketch: true, formulas: ["Überstand x = √(10² − h²)", "c = a − x"] },
        b: { sketch: false, formulas: ["A = ((a + c)/2) · h"] },
      },
      plan: ["Überstand x = √(10² − 8²)", "c = a − x", "A = ((a + c)/2) · h"],
      solution: "a) x = √(10² − 8²) = √(100 − 64) = √36 = 6 cm; c = 12 − 6 = 6 cm. b) A = ((12 + 6)/2) · 8 = (18/2) · 8 = 9 · 8 = 72 cm².",
      result: "c = 6 cm; A = 72 cm²",
    },
    {
      id: "6",
      group: "Kreis + Rechteck",
      title: "Stanzteil mit Halbkreis",
      text: "Aus einem Rechteck (8 cm × 5 cm) wird an einer langen Seite ein Halbkreis mit dem Radius r = 2 cm ausgestanzt. Berechne den Flächeninhalt des Stanzteils. Rechne mit π = 3,14.",
      given: ["Rechteck 8 cm × 5 cm", "ausgestanzter Halbkreis r = 2 cm", "π = 3,14"],
      searched: "Flächeninhalt des Stanzteils",
      figure: "Rechteck mit einer halbkreisförmigen Aussparung an einer Seite.",
      figureSvg: `<svg viewBox="0 0 260 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rechteck mit halbkreisförmiger Aussparung">
  <path d="M50 50 H210 V150 H170 A40 40 0 0 1 90 150 H50 Z" fill="rgba(20,184,166,.12)" stroke="#0f766e" stroke-width="2"/>
  <text x="130" y="40" text-anchor="middle">8 cm</text>
  <text x="32" y="104">5 cm</text>
  <text x="130" y="138" text-anchor="middle" font-size="11" fill="#0b6b58">r = 2 cm</text>
</svg>`,
      plan: ["A_Rechteck = a · b", "A_Halbkreis = (π · r²)/2", "A = A_Rechteck − A_Halbkreis"],
      solution: "A_Rechteck = 8 · 5 = 40 cm²; A_Halbkreis = (3,14 · 2²)/2 = (3,14 · 4)/2 = 6,28 cm²; A = 40 − 6,28 = 33,72 cm².",
      result: "A = 33,72 cm²",
    },
  ],
};
