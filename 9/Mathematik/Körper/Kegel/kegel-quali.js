(() => {
  const root = document.querySelector("#quali-app");
  if (!root) return;

  const apiUrl =
    window.GRUMI_MATH_KI_API_URL ||
    (location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:3000/api/check"
      : "https://grumi-mathe-ki.onrender.com/api/check");

  const baseSteps = [
    {
      title: "Skizze, gegeben, gesucht",
      intro: "Das Foto soll zeigen, dass du die Aufgabe verstanden und sauber sortiert hast.",
      short: "Skizze",
    },
    {
      title: "Plan und Formel",
      intro: "Das Foto soll deinen Rechenplan zeigen: passende Formel, Radius aus d und bei Bedarf Pythagoras.",
      short: "Plan",
    },
    {
      title: "Rechnung",
      intro: "Das Foto soll Einsetzen, Umformen und Rechnen mit Einheiten zeigen.",
      short: "Rechnung",
    },
    {
      title: "Antwort und Einheit",
      intro: "Das Foto soll den Antwortsatz mit sinnvoll gerundetem Ergebnis und richtiger Einheit zeigen.",
      short: "Antwort",
    },
  ];

  // Hinweis: Die Zahlenwerte sind bewusst leicht gegenüber dem Buch verändert
  // (Urheberrecht). Aufgabentyp und Rechenweg bleiben gleich; alles ist neu
  // durchgerechnet. Fortlaufend nummeriert; die letzten beiden Aufgaben sind
  // zusammengesetzte Körper (Kegel mit Quader bzw. Zylinder).
  const tasks = [
    {
      id: "1",
      group: "Tabelle",
      title: "Kegelgrößen bestimmen",
      text: "Berechne die fehlenden Werte in der Tabelle. Runde auf zwei Nachkommastellen.",
      table: {
        cols: ["a", "b", "c", "d", "e"],
        rows: [
          { label: "r", cells: ["5 cm", "8 dm", "", "", ""] },
          { label: "s", cells: ["", "17 dm", "10 m", "", ""] },
          { label: "hₖ", cells: ["12 cm", "", "8 m", "9 dm", ""] },
          { label: "G", cells: ["", "", "", "", "2 m²"] },
          { label: "V", cells: ["", "", "", "600 dm³", "10 m³"] },
        ],
      },
      given: ["a) r = 5 cm; hₖ = 12 cm", "b) r = 8 dm; s = 17 dm", "c) s = 10 m; hₖ = 8 m", "d) hₖ = 9 dm; V = 600 dm³", "e) G = 2 m²; V = 10 m³"],
      searched: "r, s, hₖ, G und V",
      labels: { d: "", r: "r", h: "hₖ", s: "s" },
      plan: ["s² = r² + hₖ²", "G = π · r²", "V = ⅓ · G · hₖ"],
      solution: "a) s = √(5² + 12²) = 13 cm; G = π · 5² ≈ 78,54 cm²; V = ⅓ · 78,54 · 12 ≈ 314,16 cm³. b) hₖ = √(17² − 8²) = 15 dm; G ≈ 201,06 dm²; V ≈ 1005,31 dm³. c) r = √(10² − 8²) = 6 m; G ≈ 113,10 m²; V ≈ 301,59 m³. d) G = 3 · 600 : 9 ≈ 200 dm²; r = √(200/π) ≈ 7,98 dm; s = √(7,98² + 9²) ≈ 12,03 dm. e) hₖ = 3 · 10 : 2 = 15 m; r = √(2/π) ≈ 0,80 m; s = √(0,80² + 15²) ≈ 15,02 m.",
      result: "a) s = 13 cm; V ≈ 314,16 cm³. b) hₖ = 15 dm; V ≈ 1005,31 dm³. c) r = 6 m; V ≈ 301,59 m³. d) r ≈ 7,98 dm; s ≈ 12,03 dm. e) hₖ = 15 m; s ≈ 15,02 m.",
    },
    {
      id: "2",
      group: "Umkehraufgabe",
      title: "Sandhaufen: Höhe aus Umfang",
      text: "Ein kegelförmiger Sandhaufen hat am Boden den Umfang u = 43,96 m und ein Volumen von V = 205 m³. Berechne die Höhe des Sandhaufens. Runde auf zwei Dezimalstellen.",
      given: ["u = 43,96 m", "V = 205 m³"],
      searched: "hₖ",
      labels: { d: "", r: "?", h: "?", s: "" },
      plan: ["r = u : (2 · π)", "G = π · r²", "hₖ = 3V : G"],
      solution: "r = 43,96 : (2 · π) ≈ 7,00 m; G = π · 7² ≈ 153,94 m²; hₖ = 3 · 205 : 153,94 ≈ 4,00 m.",
      result: "hₖ ≈ 4,00 m",
    },
    {
      id: "3",
      group: "Sachaufgabe",
      title: "Bleiwürfel: Kegel gießen",
      text: "Ein Würfel aus Blei mit der Kantenlänge a = 10 cm wird eingeschmolzen. Aus der Schmelze wird ein Kegel mit dem Radius r = 5 cm gegossen. Berechne die Höhe und die Länge der Mantellinie s des Kegels. Runde auf zwei Dezimalstellen.",
      given: ["Würfel: a = 10 cm", "Kegel: r = 5 cm"],
      searched: "hₖ und s",
      labels: { d: "", r: "5 cm", h: "?", s: "?" },
      plan: ["V = a³ (Würfel)", "hₖ = 3V : (π · r²)", "s² = r² + hₖ²"],
      solution: "V = 10³ = 1000 cm³; hₖ = 3 · 1000 : (π · 5²) ≈ 38,20 cm; s = √(5² + 38,20²) ≈ 38,53 cm.",
      result: "hₖ ≈ 38,20 cm; s ≈ 38,53 cm",
    },
    {
      id: "4",
      group: "Umkehraufgabe",
      title: "Massiver Kegel: Höhe in dm",
      text: "Ein massiver Kegel hat ein Volumen von V = 35 dm³. Seine Grundfläche beträgt G = 1000 cm². Berechne die Höhe des Kegels in dm. Runde auf zwei Dezimalstellen.",
      given: ["V = 35 dm³", "G = 1000 cm²"],
      searched: "hₖ in dm",
      labels: { d: "", r: "", h: "?", s: "" },
      plan: ["G umrechnen: 1000 cm² = 10 dm²", "V = ⅓ · G · hₖ", "hₖ = 3V : G"],
      solution: "G = 1000 cm² = 10 dm²; hₖ = 3 · 35 : 10 = 10,50 dm.",
      result: "hₖ = 10,50 dm",
    },
    {
      id: "5",
      group: "Sachaufgabe",
      title: "Spitzhüte: Folie",
      text: "Für 24 Kinder sollen kegelförmige Spitzhüte außen mit Metallfolie beklebt werden. Jeder Hut hat den Durchmesser d = 20 cm und die Mantellinie s = 25 cm. a) Wie viele m² Folie werden insgesamt benötigt, wenn 20 % Verschnitt eingeplant werden? b) Die Folie gibt es in Bögen von 75 cm × 50 cm zu je 7,50 €. Wie viel muss bezahlt werden? Runde Zwischenergebnisse auf zwei Dezimalstellen.",
      given: ["24 Hüte", "d = 20 cm, s = 25 cm", "20 % Verschnitt", "Bogen 75 cm × 50 cm = 7,50 €"],
      searched: "Folienfläche und Kosten",
      labels: { d: "20 cm", r: "10 cm", h: "", s: "25 cm" },
      plan: ["r = d : 2", "M = π · r · s (ein Hut)", "Folie = 24 · M · 1,20", "Bögen = Folie : (0,75 m · 0,50 m), aufrunden", "Kosten = Bögen · 7,50 €"],
      partHints: {
        a: { sketch: false, formulas: ["r = d : 2", "M = π · r · s", "Folie = 24 · M · 1,20"] },
        b: { sketch: false, formulas: ["Bögen = Folie : (0,75 m · 0,50 m)", "Kosten = Bögen · 7,50 €"] },
      },
      solution: "r = 10 cm; M = π · 10 · 25 ≈ 785,40 cm²; 24 Hüte ≈ 18 849,56 cm² ≈ 1,88 m²; mit 20 %: ≈ 2,26 m². Ein Bogen = 0,375 m²; 2,26 : 0,375 ≈ 6,03 → 7 Bögen; Kosten = 7 · 7,50 € = 52,50 €.",
      result: "≈ 2,26 m² Folie; 7 Bögen; 52,50 €",
    },
    {
      id: "6",
      group: "Sachaufgabe",
      title: "Eisenzylinder: Kegel fräsen",
      text: "Aus einem massiven Eisenzylinder mit dem Durchmesser d = 20 cm und der Höhe 12 cm wird ein Kegel mit gleicher Grundfläche und gleicher Höhe gefräst. a) 1 cm³ Eisen wiegt 7,8 g. Wie schwer ist der fertige Kegel? Runde auf ganze Gramm. b) Aus dem Abfall wird ein Quader gegossen, der 12 cm lang und 6 cm breit sein soll. Berechne seine Höhe (auf eine Dezimalstelle).",
      given: ["d = 20 cm; Höhe 12 cm", "1 cm³ Eisen = 7,8 g", "Quader 12 cm × 6 cm"],
      searched: "Masse des Kegels und Höhe des Quaders",
      labels: { d: "20 cm", r: "10 cm", h: "12 cm", s: "" },
      shape: "zylinderkegel",
      plan: ["r = d : 2", "V_Kegel = ⅓ · π · r² · h", "Masse = V_Kegel · 7,8 g", "Abfall = π · r² · h − V_Kegel", "h_Quader = Abfall : (12 · 6)"],
      partHints: {
        a: { sketch: false, formulas: ["r = d : 2", "V_Kegel = ⅓ · π · r² · h", "Masse = V_Kegel · 7,8 g"] },
        b: { sketch: false, formulas: ["Abfall = π · r² · h − V_Kegel", "h_Quader = Abfall : (12 · 6)"] },
      },
      solution: "r = 10 cm; V_Kegel = ⅓ · π · 10² · 12 = 400π ≈ 1256,64 cm³; Masse ≈ 1256,64 · 7,8 ≈ 9802 g. Abfall = 1200π − 400π = 800π ≈ 2513,27 cm³; h = 2513,27 : (12 · 6) ≈ 34,9 cm.",
      result: "Masse ≈ 9802 g; Quaderhöhe ≈ 34,9 cm",
    },
    {
      id: "7",
      group: "Sachaufgabe",
      title: "Pavillon: Kupferdach",
      text: "Auf einem kreisrunden Pavillon mit dem Umfang u = 31,40 m wird ein kegelförmiges Kupferdach mit der Höhe hₖ = 3 m errichtet. Bei der Montage fallen 12 % Verschnitt an. a) Wie viele m² Kupferblech werden benötigt? b) 1 m² Kupferblech kostet 95 €, die Montage 4800 €. Wie teuer wird das Dach insgesamt? Runde Zwischenergebnisse auf zwei Dezimalstellen.",
      given: ["u = 31,40 m", "hₖ = 3 m", "12 % Verschnitt", "95 €/m²; Montage 4800 €"],
      searched: "Kupferblech in m² und Gesamtkosten",
      labels: { d: "", r: "?", h: "3 m", s: "?" },
      plan: ["r = u : (2 · π)", "s² = r² + hₖ²", "M = π · r · s; mit 12 %: M · 1,12", "Kosten = M · 95 € + 4800 €"],
      partHints: {
        a: { sketch: true, formulas: ["r = u : (2 · π)", "s² = r² + hₖ²", "M = π · r · s", "mit 12 %: M · 1,12"] },
        b: { sketch: false, formulas: ["Kosten = M · 95 € + 4800 €"] },
      },
      solution: "r = 31,40 : (2 · π) ≈ 5,00 m; s = √(5² + 3²) = √34 ≈ 5,83 m; M = π · 5 · 5,83 ≈ 91,58 m²; mit 12 %: ≈ 102,57 m². Kosten = 102,57 · 95 € + 4800 € ≈ 14 544,15 €.",
      result: "≈ 102,57 m² Kupferblech; Gesamtkosten ≈ 14 544,15 €",
    },
    {
      id: "8",
      group: "Sachaufgabe",
      title: "Sandberg: Formsand",
      text: "In einem Ziegelwerk liegt V = 300 m³ Formsand als kegelförmiger Sandberg auf Halde. Der Grundkreis hat den Umfang u = 43,96 m. Rechne mit π = 3,14. a) Berechne die Grundfläche. b) Wie hoch ist der Sandberg (auf ganze Meter)? c) Wie viele Fahrten sind nötig, wenn ein Lkw mit 20 t Ladegewicht alles wegschafft? 1 m³ Sand wiegt 1,5 t.",
      given: ["V = 300 m³", "u = 43,96 m", "π = 3,14", "Lkw 20 t; 1 m³ = 1,5 t"],
      searched: "G, hₖ und Anzahl Fahrten",
      labels: { d: "", r: "?", h: "?", s: "" },
      plan: ["r = u : (2 · π)", "G = π · r²", "hₖ = 3V : G", "Masse = V · 1,5 t", "Fahrten = Masse : 20 t (aufrunden)"],
      partHints: {
        a: { sketch: false, formulas: ["r = u : (2 · π)", "G = π · r²"] },
        b: { sketch: false, formulas: ["hₖ = 3V : G"] },
        c: { sketch: false, formulas: ["Masse = V · 1,5 t", "Fahrten = Masse : 20 t (aufrunden)"] },
      },
      solution: "r = 43,96 : (2 · 3,14) = 7,00 m; G = 3,14 · 7² = 153,86 m²; hₖ = 3 · 300 : 153,86 ≈ 5,85 m ≈ 6 m. Masse = 300 · 1,5 = 450 t; Fahrten = 450 : 20 = 22,5 → 23 Fahrten.",
      result: "G = 153,86 m²; hₖ ≈ 6 m; 23 Fahrten",
    },
    {
      id: "9",
      group: "Sachaufgabe",
      title: "Kerzen: Preis-Leistung",
      text: "Auf dem Weihnachtsmarkt werden kegelförmige Kerzen verkauft. Kerze A: r = 3 cm, hₖ = 8 cm, 2,49 €. Kerze B: d = 8 cm, hₖ = 10 cm, 4,99 €. Kerze C: u = 28 cm, hₖ = 14 cm, 8,99 €. Welche Kerze hat das beste Preis-Leistungs-Verhältnis (meiste cm³ pro €)? Runde auf zwei Dezimalstellen.",
      given: ["A: r = 3 cm, hₖ = 8 cm, 2,49 €", "B: d = 8 cm, hₖ = 10 cm, 4,99 €", "C: u = 28 cm, hₖ = 14 cm, 8,99 €"],
      searched: "bestes Preis-Leistungs-Verhältnis",
      labels: { d: "", r: "?", h: "?", s: "" },
      plan: ["V = ⅓ · π · r² · hₖ (r aus d bzw. u)", "cm³ pro € = V : Preis", "größter Wert = beste Kerze"],
      solution: "A: V = ⅓ · π · 3² · 8 ≈ 75,40 cm³ → 75,40 : 2,49 ≈ 30,28 cm³/€. B: r = 4 cm, V = ⅓ · π · 4² · 10 ≈ 167,55 cm³ → 167,55 : 4,99 ≈ 33,58 cm³/€. C: r = 28 : (2π) ≈ 4,46 cm, V = ⅓ · π · 4,46² · 14 ≈ 291,63 cm³ → 291,63 : 8,99 ≈ 32,44 cm³/€. Kerze B liefert die meisten cm³ pro €.",
      result: "Kerze B hat das beste Preis-Leistungs-Verhältnis (≈ 33,58 cm³/€)",
    },
    {
      id: "10",
      group: "Zusammengesetzt",
      title: "Größter Kegel aus einem Quader",
      text: "Ein Feinmechaniker dreht aus einem Quader mit quadratischer Grundfläche (a = 36 cm) den größtmöglichen Kegel mit der Mantellinie s = 30 cm. Quader und Kegel haben die gleiche Körperhöhe. a) Berechne die Höhe des Kegels. b) Berechne den entstehenden Abfall in cm³ und in Prozent. Runde auf zwei Dezimalstellen.",
      given: ["Quader: a = 36 cm", "Kegel: s = 30 cm", "gleiche Höhe"],
      searched: "hₖ und Abfall (cm³ und %)",
      labels: { a: "36 cm", d: "", r: "18 cm", h: "?", s: "30 cm" },
      shape: "quaderkegel",
      plan: ["r = a : 2", "hₖ = √(s² − r²)", "V_Quader = a² · hₖ", "V_Kegel = ⅓ · π · r² · hₖ", "Abfall = V_Quader − V_Kegel", "Prozent = Abfall : V_Quader · 100"],
      partHints: {
        a: {
          sketch: true,
          formulas: ["r = a : 2", "r² + hₖ² = s²"],
          rearrange: ["r² + hₖ² = s²", "18² + hₖ² = 30²", "324 + hₖ² = 900", "| − 324:  hₖ² = 576", "hₖ = √576"],
        },
        b: { sketch: false, formulas: ["V_Quader = a² · hₖ", "V_Kegel = ⅓ · π · r² · hₖ", "Abfall = V_Quader − V_Kegel", "Prozent = Abfall : V_Quader · 100"] },
      },
      solution: "r = 36 : 2 = 18 cm; hₖ = √(30² − 18²) = √576 = 24 cm. V_Quader = 36² · 24 = 31 104 cm³; V_Kegel = ⅓ · π · 18² · 24 = 2592π ≈ 8143,01 cm³; Abfall = 31 104 − 8143,01 ≈ 22 960,99 cm³; Prozent = 22 960,99 : 31 104 · 100 ≈ 73,82 %.",
      result: "hₖ = 24 cm; Abfall ≈ 22 960,99 cm³ (≈ 73,82 %)",
    },
    {
      id: "11",
      group: "Zusammengesetzt",
      title: "Werkstück aus Zylinder und zwei Kegeln",
      text: "Ein Werkstück besteht aus einem Zylinder und zwei gleichen Kegeln (siehe Skizze). Beide Kegel haben r = 6 cm und die Mantellinie s = 10 cm. Der zusammengesetzte Körper hat ein Volumen von 800 cm³. a) Höhe eines Kegels. b) Volumen eines Kegels. c) Volumen des Zylinders. d) Höhe des Zylinders h_z. e) Oberfläche des Werkstücks. Runde auf zwei Dezimalstellen.",
      given: ["r = 6 cm", "s = 10 cm", "V_gesamt = 800 cm³"],
      searched: "hₖ, V_Kegel, V_Zylinder, h_z und O",
      labels: { d: "", r: "6 cm", h: "?", s: "10 cm" },
      shape: "spindel",
      plan: ["hₖ = √(s² − r²)", "V_Kegel = ⅓ · π · r² · hₖ", "V_Zylinder = V_gesamt − 2 · V_Kegel", "h_z = V_Zylinder : (π · r²)", "O = 2 · π · r · s + 2 · π · r · h_z"],
      partHints: {
        a: {
          sketch: true,
          formulas: ["r² + hₖ² = s²"],
          rearrange: ["r² + hₖ² = s²", "6² + hₖ² = 10²", "36 + hₖ² = 100", "| − 36:  hₖ² = 64", "hₖ = √64"],
        },
        b: { sketch: false, formulas: ["V_Kegel = ⅓ · π · r² · hₖ"] },
        c: { sketch: false, formulas: ["V_Zylinder = V_gesamt − 2 · V_Kegel"] },
        d: { sketch: false, formulas: ["h_z = V_Zylinder : (π · r²)"] },
        e: { sketch: true, formulas: ["O = 2 · π · r · s + 2 · π · r · h_z"] },
      },
      solution: "hₖ = √(10² − 6²) = √64 = 8 cm; V_Kegel = ⅓ · π · 6² · 8 = 96π ≈ 301,59 cm³; V_Zylinder = 800 − 2 · 301,59 ≈ 196,81 cm³; h_z = 196,81 : (π · 6²) ≈ 1,74 cm; O = 2 · π · 6 · 10 + 2 · π · 6 · 1,74 ≈ 442,59 cm².",
      result: "hₖ = 8 cm; V_Kegel ≈ 301,59 cm³; V_Zylinder ≈ 196,81 cm³; h_z ≈ 1,74 cm; O ≈ 442,59 cm²",
    },
  ];

  const baseFormulas = {
    "1": ["s² = r² + hₖ²", "G = π · r²", "V = ⅓ · G · hₖ"],
    "2": ["u = 2 · π · r", "G = π · r²", "V = ⅓ · G · hₖ"],
    "3": ["V = a³", "V = ⅓ · π · r² · hₖ", "s² = r² + hₖ²"],
    "4": ["V = ⅓ · G · hₖ", "1 dm² = 100 cm²"],
    "5": ["r = d : 2", "M = π · r · s"],
    "6": ["V_Kegel = ⅓ · π · r² · h", "V_Zylinder = π · r² · h"],
    "7": ["u = 2 · π · r", "s² = r² + hₖ²", "M = π · r · s"],
    "8": ["u = 2 · π · r", "G = π · r²", "V = ⅓ · G · hₖ"],
    "9": ["V = ⅓ · π · r² · hₖ"],
    "10": ["r = a : 2", "s² = r² + hₖ²", "V_Quader = a² · hₖ", "V_Kegel = ⅓ · π · r² · hₖ"],
    "11": ["s² = r² + hₖ²", "V_Kegel = ⅓ · π · r² · hₖ", "V_Zylinder = π · r² · h_z", "M_Kegel = π · r · s", "M_Zylinder = 2 · π · r · h_z"],
  };

  // Umstell-Tipp: Werte einsetzen und nach der gesuchten Größe umstellen.
  const rearrange = {
    "1": [
      "Beispiel: V und G gegeben, hₖ gesucht",
      "V = ⅓ · G · hₖ",
      "600 = ⅓ · 200 · hₖ",
      "600 = 66,67 · hₖ",
      "| : 66,67",
      "hₖ = 600 : 66,67",
      "hₖ = 9 cm",
    ],
    "2": [
      "r = u : (2 · π) = 31,4 : 6,28 ≈ 5,00 m",
      "G = π · r² = π · 5² ≈ 78,54 m²",
      "V = ⅓ · G · hₖ",
      "205 = ⅓ · 78,54 · hₖ",
      "205 = 26,18 · hₖ",
      "| : 26,18",
      "hₖ = 205 : 26,18",
      "hₖ ≈ 7,83 m",
    ],
    "3": [
      "V = ⅓ · π · r² · hₖ",
      "1000 = ⅓ · π · 5² · hₖ",
      "1000 = ⅓ · 78,54 · hₖ",
      "1000 = 26,18 · hₖ",
      "| : 26,18",
      "hₖ = 1000 : 26,18",
      "hₖ ≈ 38,20 dm",
    ],
    "4": [
      "zuerst G umrechnen: 1000 cm² = 10 dm²",
      "V = ⅓ · G · hₖ",
      "35 = ⅓ · 10 · hₖ",
      "35 = 3,33 · hₖ",
      "| : 3,33",
      "hₖ = 35 : 3,33",
      "hₖ ≈ 10,50 dm",
    ],
  };

  // Erklärvideos (Lehrer Schmidt) je Aufgabentyp: Grundlagen Volumen/Oberfläche + Pythagoras.
  const videos = {
    "1": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }, { id: "FECtVbC-mgk", label: "Satz des Pythagoras" }],
    "2": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }],
    "3": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }, { id: "FECtVbC-mgk", label: "Satz des Pythagoras" }],
    "4": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }],
    "5": [{ id: "OGbBx5mPju8", label: "Kegel: Oberfläche" }],
    "6": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }, { id: "6sf_cvf4xxE", label: "Zylinder: Volumen" }],
    "7": [{ id: "OGbBx5mPju8", label: "Kegel: Oberfläche" }, { id: "FECtVbC-mgk", label: "Satz des Pythagoras" }],
    "8": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }],
    "9": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }],
    "10": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }, { id: "FECtVbC-mgk", label: "Satz des Pythagoras" }],
    "11": [{ id: "IsPM8oH5Cmw", label: "Kegel: Volumen" }, { id: "6sf_cvf4xxE", label: "Zylinder: Volumen" }, { id: "OGbBx5mPju8", label: "Kegel: Oberfläche" }, { id: "FECtVbC-mgk", label: "Satz des Pythagoras" }],
  };

  let currentTaskIndex = 0;
  let currentStepIndex = 0;
  let currentSteps = [];
  let hintPartKey = null;
  let selectedFile = null;
  let previewUrl = "";
  let hintVisible = false;
  const completed = new Set();

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  // Wandelt bereits escapeten Text so um, dass Brüche als echter Bruchstrich
  // erscheinen: einfache "x/y", geklammerte Zähler "(3 · V)/a²" und die
  // Unicode-Brüche wie ⅓ oder ½. So steht z. B. 1/3 ordentlich mit Strich.
  const vulgarFractions = {
    "½": ["1", "2"], "⅓": ["1", "3"], "⅔": ["2", "3"], "¼": ["1", "4"],
    "¾": ["3", "4"], "⅕": ["1", "5"], "⅙": ["1", "6"], "⅛": ["1", "8"],
  };
  function frac(numerator, denominator) {
    return `<span class="frac"><span>${numerator}</span><span>${denominator}</span></span>`;
  }
  function mathify(escapedText) {
    let out = escapedText.replace(
      /\(([^()]+)\)\/([^\s;,)<]+)/g,
      (match, numerator, denominator) => frac(numerator, denominator),
    );
    out = out.replace(
      /([A-Za-z0-9²³ₖₛ₀-₉]+)\/([A-Za-z0-9²³ₖₛ₀-₉]+)/g,
      (match, numerator, denominator) => frac(numerator, denominator),
    );
    out = out.replace(/[½⅓⅔¼¾⅕⅙⅛]/g, (glyph) => {
      const parts = vulgarFractions[glyph];
      return parts ? frac(parts[0], parts[1]) : glyph;
    });
    return out;
  }

  function completedKey(taskIndex = currentTaskIndex, stepIndex = currentStepIndex) {
    return `${taskIndex}:${stepIndex}`;
  }

  // Rendert die "gegeben"-Werte einer Tabellen-Aufgabe als übersichtliche
  // Tabelle (Spalten a–e, Zeilen = Größen; leere Zellen = gesucht).
  function givensTable(task) {
    const t = task.table;
    if (!t) return "";
    const head = t.cols.map((c) => `<th scope="col">${escapeHtml(c)})</th>`).join("");
    const body = t.rows
      .map((row) => {
        const cells = row.cells
          .map((cell) => (cell ? `<td>${escapeHtml(cell)}</td>` : `<td class="empty">?</td>`))
          .join("");
        return `<tr><th scope="row">${escapeHtml(row.label)}</th>${cells}</tr>`;
      })
      .join("");
    return `<div class="givens-wrap"><table class="givens-table"><thead><tr><td class="corner"></td>${head}</tr></thead><tbody>${body}</tbody></table></div>`;
  }

  // Zerlegt den Aufgabentext in Einleitung und Teilaufgaben a), b), c) ...
  // Gibt parts = [] zurück, wenn es keine echten Teilaufgaben gibt.
  function getSubtasks(task) {
    const text = String(task.text || "");
    const markerRe = /\s([a-h])\)\s/g;
    const markers = [];
    let match;
    while ((match = markerRe.exec(text)) !== null) {
      markers.push({ index: match.index, label: match[1], contentStart: markerRe.lastIndex });
    }
    if (markers.length < 2 || markers[0].label !== "a") {
      return { lead: text, parts: [] };
    }
    const lead = text.slice(0, markers[0].index).trim();
    const parts = markers.map((marker, index) => {
      const end = index + 1 < markers.length ? markers[index + 1].index : text.length;
      const body = text
        .slice(marker.contentStart, end)
        .trim()
        .replace(/[\s,;]+$/, "")
        .replace(/\s+(und|sowie|oder)$/i, "");
      return { label: marker.label, body };
    });
    return { lead, parts };
  }

  // Originalaufgabe übersichtlich darstellen: Einleitung als Absatz, dann jede
  // Teilaufgabe a), b), c) ... in einer eigenen Zeile.
  function taskTextHtml(task) {
    const { lead, parts } = getSubtasks(task);
    if (parts.length === 0) {
      return `<p class="task-text">${escapeHtml(String(task.text || ""))}</p>`;
    }
    let leadText = lead;
    if (leadText && !/[.:!?]$/.test(leadText)) leadText += ":";
    const leadHtml = leadText ? `<p class="task-text task-intro">${escapeHtml(leadText)}</p>` : "";
    const items = parts
      .map((part) => `<li><span class="part-label">${escapeHtml(part.label)})</span><span class="part-body">${escapeHtml(part.body)}</span></li>`)
      .join("");
    return `${leadHtml}<ul class="task-text task-parts">${items}</ul>`;
  }

  // Baut die Foto-Schritte. Ohne Teilaufgaben: die vier Standardschritte.
  // Mit a), b), c) ...: für jede Teilaufgabe alle vier Schritte nacheinander.
  function getSteps(task) {
    const { parts } = getSubtasks(task);
    if (parts.length === 0) {
      return baseSteps.map((base, index) => ({
        kind: index,
        part: null,
        partBody: "",
        kindShort: base.short,
        title: base.title,
        intro: base.intro,
      }));
    }
    const steps = [];
    parts.forEach((part) => {
      baseSteps.forEach((base, index) => {
        steps.push({
          kind: index,
          part: part.label,
          partBody: part.body,
          kindShort: base.short,
          title: `Teil ${part.label}) – ${base.title}`,
          intro: base.intro,
        });
      });
    });
    return steps;
  }

  // Eine einzelne Prüfzeile der KI hübsch aufbereiten: Häkchen bzw. Markierung,
  // "Label: Formel" trennen und die Formel mit Bruchstrich hervorheben.
  function formatFeedbackLine(rawLine, kind) {
    let line = String(rawLine).trim().replace(/^[-•*•]\s*/, "");
    line = line.replace(/[✓✔✅]+\s*$/u, "").trim();
    if (!line) return "";

    const isMissing = /^fehlt\b/i.test(line);
    let cls = "fb-line";
    let icon = "•";
    if (isMissing) {
      cls = "fb-line miss";
      icon = "✗";
    } else if (kind === "ok") {
      cls = "fb-line ok";
      icon = "✓";
    } else if (kind === "no") {
      cls = "fb-line warn";
      icon = "!";
    }

    const escaped = escapeHtml(line);
    const match = escaped.match(/^([^:<]{1,30}:)\s*(.+)$/);
    let content;
    if (match && /[=√π·]|\d/.test(match[2])) {
      content = `<span class="fb-label">${match[1]}</span> <span class="fb-eq">${mathify(match[2])}</span>`;
    } else {
      content = mathify(escaped);
    }
    return `<li class="${cls}"><span class="fb-ico">${icon}</span><span class="fb-text">${content}</span></li>`;
  }

  // Letzter Feedback-Aufruf, damit der Tipp-Button das Feedback neu zeichnen kann.
  let lastFeedback = null;

  // offerHint: { task, step, key } – zeigt bei Fehler einen kleinen Tipp-Button.
  function setFeedback(kind, title, body, lines = [], offerHint = null) {
    lastFeedback = { kind, title, body, lines, offerHint };
    const feedback = root.querySelector("#photo-feedback");
    if (!feedback) return;
    const safeKind = kind || "muted";
    feedback.className = `feedback-box ${safeKind}`;
    const titleIcon = safeKind === "ok" ? "✓" : safeKind === "no" ? "✗" : "•";
    const items = lines
      .map((line) => formatFeedbackLine(line, safeKind))
      .filter(Boolean)
      .join("");
    const bodyHtml = body
      ? `<p class="fb-suggestion">${mathify(escapeHtml(body))}</p>`
      : "";

    let hintHtml = "";
    if (offerHint && offerHint.key) {
      if (hintVisible) {
        hintHtml = `
          <div class="fb-hint">
            ${renderHintContent(offerHint.task, offerHint.step, offerHint.key)}
            <button class="hint-toggle fb-hint-hide" type="button">Tipp ausblenden</button>
          </div>`;
      } else {
        hintHtml = `
          <button class="fb-hint-btn" type="button">💡 Tipp anzeigen: ${escapeHtml(hintLabel(offerHint.key))}</button>`;
      }
    }

    feedback.innerHTML = `
      <h3><span class="fb-title-ico">${titleIcon}</span>${escapeHtml(title)}</h3>
      ${bodyHtml}
      ${items ? `<ul class="fb-list">${items}</ul>` : ""}
      ${hintHtml}
    `;

    feedback.querySelector(".fb-hint-btn")?.addEventListener("click", () => {
      hintVisible = true;
      setFeedback(kind, title, body, lines, offerHint);
    });
    feedback.querySelector(".fb-hint-hide")?.addEventListener("click", () => {
      hintVisible = false;
      setFeedback(kind, title, body, lines, offerHint);
    });
  }

  function mustItems(task, step) {
    const part = step.part;
    const partTag = part ? `Teil ${part}): ` : "";
    const partGoal = part && step.partBody ? ` (${step.partBody})` : "";
    if (step.kind === 0) {
      return part
        ? [
            `${partTag}gegeben & gesucht notieren${partGoal}`,
            "Skizze oder Bestimmungsdreieck passend zeichnen",
            "alle nötigen Werte mit Einheit aufschreiben",
            "klar markieren, was in diesem Teil gesucht ist",
          ]
        : [
            "Kegel oder Bestimmungsdreieck zeichnen",
            "gegebene Werte aus dem Text herausschreiben",
            "notieren, was gesucht ist",
            "Einheiten mit aufschreiben",
          ];
    }
    if (step.kind === 1) {
      return part
        ? [
            `${partTag}passende Formel auswählen${partGoal}`,
            "bei d zuerst den Radius r einplanen",
            "wenn nötig s bzw. hₖ mit Pythagoras vorbereiten",
            "kurz markieren, welcher Wert zuerst berechnet wird",
          ]
        : [
            "passende Formel(n) selbst auswählen",
            "den Rechenweg in sinnvoller Reihenfolge planen",
            "bei d zuerst den Radius r bilden",
            "kurz markieren, welcher Wert zuerst berechnet wird",
          ];
    }
    if (step.kind === 2) {
      return part
        ? [
            `${partTag}Werte einsetzen und ausrechnen`,
            "Zwischenschritte sauber rechnen",
            "bei d immer mit r weiterrechnen",
            "Einheiten mitschreiben",
          ]
        : [
            "Werte in die Formel einsetzen",
            "Zwischenschritte sauber rechnen",
            "bei d immer zuerst mit r weiterrechnen",
            "Einheiten mitschreiben",
          ];
    }
    return part
      ? [
          `${partTag}Antwortsatz mit Einheit schreiben`,
          "sinnvoll runden",
          "Ergebnis auf Plausibilität prüfen",
        ]
      : [
          `Ergebnis: ${task.result}`,
          "sinnvoll runden",
          "Antwortsatz mit passender Einheit schreiben",
        ];
  }

  function sketch(task) {
    const label = (key, fallback) => escapeHtml(task.labels[key] || fallback || "");
    const usesTriangle = task.plan.some((line) => line.includes("s²") || line.includes("√"));
    const triangleHidden = !usesTriangle;
    const sLabel = label("s", "s");
    const hLabel = label("h", "hₖ");
    const rLabel = label("r", "r");
    const dLabel = label("d", "d");
    const coneHeightLabel = (task.labels.h && task.labels.h !== "hₖ") ? `hₖ = ${hLabel}` : "hₖ";
    const slantLabel = (task.labels.s && task.labels.s !== "s") ? `s = ${sLabel}` : "s";
    const radiusLabel = (task.labels.r && task.labels.r !== "r") ? `r = ${rLabel}` : "r";
    const diameterLabel = (task.labels.d && task.labels.d !== "d") ? `d = ${dLabel}` : "d";

    if (task.shape === "spindel") {
      return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze: Werkstück aus zwei Kegeln und einem Zylinder">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <path d="M 84 168 L 150 250 L 216 168 Z" fill="rgba(251,146,60,.18)" stroke="#9a3412" stroke-width="2"/>
        <ellipse cx="150" cy="168" rx="66" ry="17" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="2"/>
        <path d="M 84 132 L 84 168 L 216 168 L 216 132 Z" fill="rgba(20,184,166,.16)" stroke="#0f766e" stroke-width="2"/>
        <path d="M 84 132 L 150 24 L 216 132 Z" fill="rgba(251,146,60,.22)" stroke="#9a3412" stroke-width="2"/>
        <ellipse cx="150" cy="132" rx="66" ry="17" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="2"/>
        <line x1="150" y1="24" x2="150" y2="250" stroke="#64748b" stroke-width="1.4" stroke-dasharray="6 5"/>
        <line x1="150" y1="132" x2="216" y2="132" stroke="#0f766e" stroke-width="3"/>
        <text class="svg-label" x="170" y="126" fill="#0f766e">${radiusLabel}</text>
        <text class="svg-label" x="186" y="78" fill="#334155" transform="rotate(58 186 78)">${slantLabel}</text>
        <line x1="64" y1="132" x2="64" y2="168" stroke="#be185d" stroke-width="2.5" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="8" y="155" fill="#be185d">h_z = ?</text>
        <text x="62" y="16" fill="#52627a" font-size="13" font-weight="700">Werkstück</text>
        <polygon points="300,205 440,205 300,98" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="3"/>
        <path d="M 300 181 L 324 181 L 324 205" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="300" y1="205" x2="440" y2="205" stroke="#0f766e" stroke-width="5"/>
        <line x1="300" y1="205" x2="300" y2="98" stroke="#be185d" stroke-width="5"/>
        <line x1="300" y1="98" x2="440" y2="205" stroke="#334155" stroke-width="5"/>
        <text class="svg-label" x="350" y="228" fill="#0f766e">${radiusLabel}</text>
        <text class="svg-label" x="250" y="150" fill="#be185d">${coneHeightLabel}</text>
        <text class="svg-label" x="366" y="135" fill="#334155" transform="rotate(37 366 135)">${slantLabel}</text>
        <text x="300" y="78" fill="#52627a" font-size="13" font-weight="700">Bestimmungsdreieck</text>
      </svg>`;
    }

    // Kegel, der aus einem Zylinder gefräst wird (Aufgabe 520).
    if (task.shape === "zylinderkegel") {
      return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze: Kegel aus Zylinder gefräst">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <path d="M 150 70 L 150 210" stroke="#0f766e" stroke-width="2"/>
        <path d="M 330 70 L 330 210" stroke="#0f766e" stroke-width="2"/>
        <ellipse cx="240" cy="210" rx="90" ry="22" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="2"/>
        <path d="M 150 210 A 90 22 0 0 0 330 210" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="2"/>
        <ellipse cx="240" cy="70" rx="90" ry="22" fill="rgba(20,184,166,.16)" stroke="#0f766e" stroke-width="2"/>
        <polygon points="240,70 150,210 330,210" fill="rgba(251,146,60,.22)" stroke="#9a3412" stroke-width="2.5"/>
        <line x1="240" y1="70" x2="240" y2="210" stroke="#be185d" stroke-width="2" stroke-dasharray="6 5"/>
        <line x1="150" y1="48" x2="330" y2="48" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="214" y="40" fill="#334155">d = ${dLabel}</text>
        <line x1="356" y1="70" x2="356" y2="210" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="362" y="148" fill="#be185d">h = ${hLabel}</text>
        <text x="150" y="30" fill="#52627a" font-size="13" font-weight="700">Kegel im Zylinder</text>
        <text class="svg-label" x="186" y="150" fill="#9a3412">Kegel</text>
        <text class="svg-label" x="262" y="150" fill="#0f766e">Abfall</text>
      </svg>`;
    }

    // Größter Kegel in einem Quader (Aufgabe 10).
    if (task.shape === "quaderkegel") {
      const aLabel = label("a", "a");
      return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze: größter Kegel in einem Quader">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <polygon points="60,70 190,70 230,40 100,40" fill="rgba(20,184,166,.06)" stroke="#0f766e" stroke-width="1.6"/>
        <polygon points="190,70 230,40 230,180 190,210" fill="rgba(20,184,166,.06)" stroke="#0f766e" stroke-width="1.6"/>
        <rect x="60" y="70" width="130" height="140" fill="rgba(20,184,166,.05)" stroke="#0f766e" stroke-width="2"/>
        <line x1="60" y1="210" x2="100" y2="180" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="5 4"/>
        <line x1="100" y1="180" x2="230" y2="180" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="5 4"/>
        <line x1="100" y1="180" x2="100" y2="40" stroke="#0f766e" stroke-width="1.4" stroke-dasharray="5 4"/>
        <ellipse cx="125" cy="210" rx="65" ry="16" fill="rgba(251,146,60,.16)" stroke="#9a3412" stroke-width="2"/>
        <polygon points="125,70 60,210 190,210" fill="rgba(251,146,60,.24)" stroke="#9a3412" stroke-width="2.5"/>
        <line x1="125" y1="70" x2="125" y2="210" stroke="#be185d" stroke-width="2" stroke-dasharray="6 5"/>
        <line x1="125" y1="210" x2="190" y2="210" stroke="#9a3412" stroke-width="2"/>
        <text class="svg-label" x="150" y="206" fill="#9a3412">${radiusLabel}</text>
        <text class="svg-label" x="92" y="150" fill="#be185d">${coneHeightLabel}</text>
        <text class="svg-label" x="150" y="120" fill="#334155" transform="rotate(56 150 120)">${slantLabel}</text>
        <line x1="60" y1="232" x2="190" y2="232" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="104" y="252" fill="#0f766e">a = ${aLabel}</text>
        <text x="60" y="28" fill="#52627a" font-size="13" font-weight="700">Kegel im Quader</text>
        <polygon points="320,205 440,205 320,90" fill="rgba(251,146,60,.10)" stroke="#9a3412" stroke-width="3"/>
        <path d="M 320 181 L 344 181 L 344 205" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="320" y1="205" x2="440" y2="205" stroke="#0f766e" stroke-width="5"/>
        <line x1="320" y1="205" x2="320" y2="90" stroke="#be185d" stroke-width="5"/>
        <line x1="320" y1="90" x2="440" y2="205" stroke="#9a3412" stroke-width="5"/>
        <text class="svg-label" x="368" y="226" fill="#0f766e">${radiusLabel}</text>
        <text class="svg-label" x="280" y="150" fill="#be185d">${coneHeightLabel}</text>
        <text class="svg-label" x="384" y="140" fill="#9a3412" transform="rotate(43 384 140)">${slantLabel}</text>
        <text x="318" y="78" fill="#52627a" font-size="13" font-weight="700">Bestimmungsdreieck</text>
      </svg>`;
    }

    const rightPanel = triangleHidden
      ? `
        <circle cx="350" cy="142" r="55" fill="rgba(20,184,166,.13)" stroke="#0f766e" stroke-width="3"/>
        <line x1="350" y1="142" x2="405" y2="142" stroke="#0f766e" stroke-width="4"/>
        <text class="svg-label" x="374" y="132" fill="#0f766e">${radiusLabel}</text>
        <text x="292" y="230" fill="#52627a" font-size="13" font-weight="700">Grundkreis</text>`
      : `
        <polygon points="290,205 440,205 290,78" fill="rgba(20,184,166,.10)" stroke="#0f766e" stroke-width="3"/>
        <path d="M 290 178 L 317 178 L 317 205" fill="none" stroke="#172033" stroke-width="3"/>
        <line x1="290" y1="205" x2="440" y2="205" stroke="#0f766e" stroke-width="5"/>
        <line x1="290" y1="205" x2="290" y2="78" stroke="#be185d" stroke-width="5"/>
        <line x1="290" y1="78" x2="440" y2="205" stroke="#334155" stroke-width="5"/>
        <text class="svg-label" x="340" y="228" fill="#0f766e">${radiusLabel}</text>
        <text class="svg-label" x="236" y="145" fill="#be185d">${coneHeightLabel}</text>
        <text class="svg-label" x="356" y="120" fill="#334155" transform="rotate(40 356 120)">${slantLabel}</text>
        <text x="306" y="55" fill="#52627a" font-size="13" font-weight="700">Bestimmungsdreieck</text>`;

    return `
      <svg viewBox="0 0 500 270" role="img" aria-label="Skizze zur Kegelaufgabe">
        <defs>
          <marker id="quali-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" fill="#334155"></path>
          </marker>
        </defs>
        <ellipse cx="145" cy="210" rx="88" ry="24" fill="rgba(20,184,166,.14)" stroke="#0f766e" stroke-width="2"/>
        <path d="M 145 42 L 57 210 Q 145 244 233 210 Z" fill="rgba(251,146,60,.22)" stroke="#9a3412" stroke-width="2.5"/>
        <line x1="145" y1="42" x2="145" y2="210" stroke="#be185d" stroke-width="3" stroke-dasharray="7 5"/>
        <line x1="145" y1="210" x2="233" y2="210" stroke="#0f766e" stroke-width="3"/>
        <line x1="145" y1="42" x2="233" y2="210" stroke="#334155" stroke-width="3"/>
        <line x1="57" y1="244" x2="233" y2="244" stroke="#334155" stroke-width="2" marker-start="url(#quali-arrow)" marker-end="url(#quali-arrow)"/>
        <text class="svg-label" x="116" y="263" fill="#334155">${diameterLabel}</text>
        <text class="svg-label" x="154" y="139" fill="#be185d">${coneHeightLabel}</text>
        <text class="svg-label" x="188" y="201" fill="#0f766e">${radiusLabel}</text>
        <text class="svg-label" x="194" y="103" fill="#334155" transform="rotate(62 194 103)">${slantLabel}</text>
        <text x="95" y="28" fill="#52627a" font-size="13" font-weight="700">Kegelskizze</text>
        ${rightPanel}
      </svg>`;
  }

  // Die zum aktuellen (Teil-)Schritt passenden Formeln. Bei Teilaufgaben nur
  // die wirklich nötigen Formeln, sonst die Grundformeln der Aufgabe.
  function getPartFormulas(task, step) {
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    if (ph && Array.isArray(ph.formulas)) return ph.formulas;
    return baseFormulas[task.id] || task.plan || [];
  }

  // Schritt-für-Schritt-Umstellen mit bereits eingesetzten Werten (eigener Tipp).
  function getRearrange(task, step) {
    const ph = step.part && task.partHints ? task.partHints[step.part] : null;
    if (ph && Array.isArray(ph.rearrange)) return ph.rearrange;
    const r = rearrange[task.id];
    if (!r) return [];
    if (Array.isArray(r)) return step.part ? [] : r;
    return r[step.part] || [];
  }

  // Genau ein Tipp passend zum aktuellen Foto-Schritt. Wird nur eingeblendet,
  // wenn die KI im Feedback einen Fehler gemeldet hat.
  // Foto 1 → Skizze bzw. gegeben/gesucht, Foto 2 → Grundformel,
  // Foto 3 → Umstellen mit Werten, Foto 4 → kein eigener Tipp.
  function hintForStep(task, step) {
    if (step.kind === 0) {
      const ph = step.part && task.partHints ? task.partHints[step.part] : null;
      const sketchOn = ph ? ph.sketch !== false : true;
      return sketchOn ? "skizze" : "geg";
    }
    if (step.kind === 1) {
      return getPartFormulas(task, step).length ? "formel" : "geg";
    }
    if (step.kind === 2) {
      return getRearrange(task, step).length ? "umstellen" : "formel";
    }
    return null;
  }

  // Inhalt genau eines Tipps (ohne Nummerierung) für die Anzeige unter dem Feedback.
  function renderHintContent(task, step, key) {
    if (key === "geg") {
      const gesucht = step.part ? `Teil ${step.part}) – ${step.partBody}` : task.searched;
      return `
        <div class="hint-block">
          <h4>Gegeben &amp; gesucht</h4>
          <div class="task-meta">
            ${task.given.map((value) => `<span>${escapeHtml(value)}</span>`).join("")}
            <span>gesucht: ${escapeHtml(gesucht)}</span>
          </div>
        </div>`;
    }
    if (key === "skizze") {
      return `
        <div class="hint-block">
          <h4>Skizze</h4>
          <div class="sketch-frame">${sketch(task)}</div>
        </div>`;
    }
    if (key === "formel") {
      const formulas = getPartFormulas(task, step);
      const title = step.part ? "Grundformel für diesen Teil" : "Grundformel (noch nicht umgestellt)";
      return `
        <div class="hint-block">
          <h4>${title}</h4>
          <div class="mini-plan">
            ${formulas.map((line) => `<div>${mathify(escapeHtml(line))}</div>`).join("")}
          </div>
        </div>`;
    }
    if (key === "umstellen") {
      const steps = getRearrange(task, step);
      return `
        <div class="hint-block">
          <h4>Werte einsetzen &amp; umstellen</h4>
          <div class="mini-plan rearrange-plan">
            ${steps.map((line) => `<div>${mathify(escapeHtml(line))}</div>`).join("")}
          </div>
        </div>`;
    }
    return "";
  }

  // Kurzes Label für den Tipp-Button im Feedback.
  function hintLabel(key) {
    if (key === "skizze") return "Skizze";
    if (key === "geg") return "gegeben & gesucht";
    if (key === "formel") return "passende Formel";
    if (key === "umstellen") return "Werte einsetzen & umstellen";
    return "Tipp";
  }

  function taskAiText(task, step) {
    const lines = [
      "Thema: Kegel Quali-Aufgabe Mathematik 9.",
      `Aufgabe ${task.id}: ${task.title}`,
      task.text,
      `Gegeben: ${task.given.join(", ")}`,
      `Gesucht: ${task.searched}`,
      `Erwarteter Rechenplan: ${task.plan.join("; ")}`,
      `Erwarteter Rechenweg: ${task.solution}`,
      `Erwartetes Ergebnis: ${task.result}`,
    ];
    if (step.part) {
      lines.push(`Aktuelle Teilaufgabe: ${step.part}) ${step.partBody}`);
      lines.push(`Wichtig: Pruefe in diesem Foto NUR die Teilaufgabe ${step.part}). Andere Teilaufgaben gehoeren nicht zu diesem Foto und duerfen hier fehlen.`);
    }
    lines.push(`Aktueller Foto-Schritt: Foto ${step.kind + 1} - ${baseSteps[step.kind].title}`);
    lines.push(`Pflichtbestandteile dieses Fotos: ${mustItems(task, step).join("; ")}`);
    return lines.join("\n");
  }

  function renderFeedbackFromServer(data, task, step) {
    const lines = String(data.analysis || "")
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean);
    // Nur bei Fehler einen passenden Tipp anbieten.
    let offerHint = null;
    if (!data.correct) {
      const key = hintForStep(task, step);
      if (key) offerHint = { task, step, key };
    }
    setFeedback(
      data.correct ? "ok" : "no",
      data.summary || (data.correct ? "Der Schritt passt." : "Da stimmt noch etwas nicht."),
      data.suggestion || (data.correct ? "Weiter zum nächsten Foto-Schritt." : "Verbessere den markierten Schritt und lade ein neues Foto hoch."),
      lines,
      offerHint,
    );
  }

  async function checkPhoto() {
    const task = tasks[currentTaskIndex];
    const step = currentSteps[currentStepIndex];
    const button = root.querySelector("#check-photo");
    if (!selectedFile) {
      setFeedback("no", "Foto fehlt", "Wähle zuerst ein Foto zu diesem Schritt aus.");
      return;
    }

    const formData = new FormData();
    formData.append("equation", taskAiText(task, step));
    formData.append("taskLevel", `Kegel Quali Aufgabe ${task.id}${step.part ? `, Teil ${step.part})` : ""}`);
    formData.append("taskStep", String(step.kind + 1));
    formData.append("taskStepTitle", baseSteps[step.kind].title);
    formData.append("image", selectedFile);

    button.disabled = true;
    hintVisible = false;
    setFeedback("muted", "Prüfe Foto...", "Die KI schaut nur auf den aktuell ausgewählten Foto-Schritt.");

    try {
      const response = await fetch(apiUrl, { method: "POST", body: formData });
      const payload = await response.json().catch(() => ({}));
      const feedback = payload.feedback
        ? (typeof payload.feedback === "string" ? JSON.parse(payload.feedback) : payload.feedback)
        : payload;

      if (!response.ok) {
        setFeedback("no", "Prüfung nicht abgeschlossen", feedback.suggestion || feedback.analysis || "Bitte versuche es gleich noch einmal.");
        return;
      }

      renderFeedbackFromServer(feedback, task, step);
      if (feedback.correct) {
        completed.add(completedKey());
      }
    } catch (error) {
      setFeedback("no", "Server nicht erreichbar", "Starte lokal die KI-App oder prüfe die Internetverbindung.");
    } finally {
      button.disabled = false;
    }
  }

  function chooseFile(file) {
    if (!file) return;
    selectedFile = file;
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    previewUrl = URL.createObjectURL(file);
    const preview = root.querySelector("#photo-preview");
    if (preview) {
      preview.innerHTML = `<img alt="Vorschau des Fotos" src="${previewUrl}">`;
    }
    setFeedback("muted", "Foto ausgewählt", "Klicke jetzt auf „Foto prüfen“.");
  }

  function moveTask(delta) {
    currentTaskIndex = (currentTaskIndex + delta + tasks.length) % tasks.length;
    currentStepIndex = 0;
    selectedFile = null;
    hintVisible = false;
    render();
  }

  function render() {
    const task = tasks[currentTaskIndex];
    const steps = getSteps(task);
    currentSteps = steps;
    if (currentStepIndex >= steps.length) currentStepIndex = 0;
    const step = steps[currentStepIndex];
    const must = mustItems(task, step);

    // Tipp gehört zum aktuellen (Teil-)Foto-Schritt: bei jedem Wechsel wieder
    // ausblenden, damit der Schüler erst selbst versucht.
    const partKey = `${currentTaskIndex}:${step.part || "_"}:${step.kind}`;
    if (partKey !== hintPartKey) {
      hintVisible = false;
      hintPartKey = partKey;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
      previewUrl = "";
    }

    root.innerHTML = `
      <aside class="quali-menu card">
        <h3>Aufgaben</h3>
        <div class="task-button-list">
          ${tasks.map((item, index) => `
            <button class="quali-task-button ${index === currentTaskIndex ? "active" : ""}" type="button" data-task="${index}">
              <span class="task-number">${item.id}</span>
              <span>${escapeHtml(item.title)}<small>${escapeHtml(item.group)}</small></span>
            </button>`).join("")}
        </div>
        <p class="menu-note">Jeder Foto-Schritt wird einzeln geprüft. So sehen die Schülerinnen und Schüler sofort, welcher Teil noch fehlt.</p>
      </aside>

      <section class="quali-work">
        <article class="task-head">
          <div class="task-title-row">
            <div>
              <span class="task-badge">${escapeHtml(task.group)}</span>
              <h2>Aufgabe ${task.id}: ${escapeHtml(task.title)}</h2>
            </div>
            <div class="nav-row">
              <button class="nav-button" type="button" id="prev-task">Zurück</button>
              <button class="nav-button" type="button" id="next-task">Nächste Aufgabe</button>
            </div>
          </div>
          ${taskTextHtml(task)}
          ${givensTable(task)}
        </article>

        <div class="quali-grid">
          <section class="photo-card">
            <article class="step-card">
              <h3>${step.part
                ? `Teil ${escapeHtml(step.part)}) – Foto ${step.kind + 1}: ${escapeHtml(baseSteps[step.kind].title)}`
                : `Foto ${currentStepIndex + 1}: ${escapeHtml(step.title)}`}</h3>
              <p class="step-progress">Schritt ${currentStepIndex + 1} von ${steps.length}</p>
              <p>${escapeHtml(step.intro)}</p>
              <ul class="must-list">
                ${must.map((item, index) => `<li data-index="${index + 1}">${mathify(escapeHtml(item))}</li>`).join("")}
              </ul>
            </article>

            <div class="upload-row">
              <label class="upload-label" for="photo-file">Datei auswählen</label>
              <input id="photo-file" type="file" accept="image/*">
              <label class="upload-label" for="photo-camera">Von Kamera aufnehmen</label>
              <input id="photo-camera" type="file" accept="image/*" capture="environment">
              <button class="check-button" type="button" id="check-photo">Foto prüfen</button>
            </div>

            <div id="photo-preview" class="preview-box">Noch kein Foto ausgewählt.</div>
            <div id="photo-feedback" class="feedback-box muted" aria-live="polite">
              <h3>Bereit</h3>
              <p>Lade ein Foto genau zu diesem Schritt hoch.</p>
            </div>

            <div class="nav-row">
              <button class="nav-button" type="button" id="prev-step">Vorheriger Foto-Schritt</button>
              <button class="nav-button" type="button" id="next-step">Nächster Foto-Schritt</button>
            </div>
          </section>
        </div>

      </section>
    `;

    root.querySelectorAll("[data-task]").forEach((button) => {
      button.addEventListener("click", () => {
        currentTaskIndex = Number(button.dataset.task);
        currentStepIndex = 0;
        selectedFile = null;
        hintVisible = false;
        render();
      });
    });
    root.querySelector("#prev-task")?.addEventListener("click", () => moveTask(-1));
    root.querySelector("#next-task")?.addEventListener("click", () => moveTask(1));
    root.querySelector("#prev-step")?.addEventListener("click", () => {
      currentStepIndex = Math.max(0, currentStepIndex - 1);
      selectedFile = null;
      render();
    });
    root.querySelector("#next-step")?.addEventListener("click", () => {
      currentStepIndex = Math.min(currentSteps.length - 1, currentStepIndex + 1);
      selectedFile = null;
      render();
    });
    root.querySelector("#photo-file")?.addEventListener("change", (event) => chooseFile(event.target.files?.[0]));
    root.querySelector("#photo-camera")?.addEventListener("change", (event) => chooseFile(event.target.files?.[0]));
    root.querySelector("#check-photo")?.addEventListener("click", checkPhoto);
  }

  render();
})();
