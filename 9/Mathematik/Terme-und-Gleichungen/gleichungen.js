(() => {
  const apiUrl =
    window.GRUMI_MATH_KI_API_URL ||
    (location.protocol === "file:" ||
    location.hostname === "localhost" ||
    location.hostname === "127.0.0.1"
      ? "http://127.0.0.1:3000/api/check"
      : "https://grumi-mathe-ki.onrender.com/api/check");
  const form = document.querySelector("#check-form");
  const equationInput = document.querySelector("#equation");
  const equationDisplay = document.querySelector("#equation-display");
  const taskLevelInput = document.querySelector("#task-level");
  const taskStepInput = document.querySelector("#task-step");
  const imageInput = document.querySelector("#image");
  const cameraInput = document.querySelector("#camera-image");
  const cameraButton = document.querySelector("#camera-button");
  const imageLabel = document.querySelector("#image-label");
  const checkButton = document.querySelector("#check-button");
  const feedback = document.querySelector("#feedback");
  const canvas = document.querySelector("#preview-canvas");
  const emptyPreview = document.querySelector("#empty-preview");
  const statusPill = document.querySelector("#server-status");
  const levelDownButton = document.querySelector("#prev-level");
  const levelUpButton = document.querySelector("#next-level");
  const nextButton = document.querySelector("#sample-button");
  const prevButton = document.querySelector("#prev-equation");
  const previewPanel = document.querySelector(".preview-panel");
  const equationGrid = document.querySelector("#equation-grid");
  const levelSwitch = document.querySelector("#level-switch");
  const levelTitle = document.querySelector("#level-title");
  const levelDescription = document.querySelector("#level-description");
  const levelProgress = document.querySelector("#level-progress");
  const taskStepPanel = document.querySelector("#task-step-panel");
  const taskProgressDots = document.querySelector("#task-progress-dots");
  const ctx = canvas.getContext("2d");
  const wordProblemPhotoSteps = [
    {
      title: "x festlegen",
      shortTitle: "x + Tabelle",
      description: "Lege x fest. Schreibe eine Tabelle.",
      hint: "Foto 1 muss x-Festlegung, Tabelle und geschweifte Klammer zeigen.",
    },
    {
      title: "Gleichung aufstellen",
      shortTitle: "Gleichung",
      description:
        "Stelle aus der Tabelle und der Gesamtangabe eine passende Gleichung auf.",
      hint: "Foto 2 muss die Gleichung zur Sachaufgabe zeigen.",
    },
    {
      title: "Gleichung lösen",
      shortTitle: "x lösen",
      description:
        "Löse die Gleichung Schritt für Schritt bis x = ... .",
      hint: "Foto 3 muss die Umformungen und den x-Wert zeigen.",
    },
    {
      title: "Bereiche ausrechnen",
      shortTitle: "Werte + Antwort",
      description:
        "Setze x in alle Terme ein und berechne die gesuchten Werte. Ein sinngemäßer Antwortsatz ist erlaubt, aber nicht Pflicht.",
      hint: "Foto 4 muss Einsetzen und alle gesuchten Werte zeigen. Antwortsatz optional.",
    },
  ];
  const levels = [
    {
      name: "Stufe 1",
      description: "Einfache Gleichungen ohne Klammern und ohne negative Zahlen.",
      equations: [
        "x + 4 = 10",
        "2x = 16",
        "2x + 6 = 22",
        "3x + 4 = 22",
        "4x - 8 = 24",
        "5x + 10 = 60",
        "6x - 12 = 36",
        "7x + 14 = 70",
        "8x - 16 = 48",
        "9x + 18 = 108",
      ],
    },
    {
      name: "Stufe 2",
      description: "Gleichungen mit negativen Zahlen.",
      equations: [
        "x + 5 = -3",
        "2x = -12",
        "3x + 6 = -12",
        "-2x + 4 = 16",
        "4x - 8 = -40",
        "-5x - 10 = 30",
        "6x + 12 = -36",
        "-7x + 14 = 70",
        "-3x - 15 = 9",
        "-4x + 6 = 38",
      ],
    },
    {
      name: "Stufe 3",
      description: "Gleichungen mit Klammern.",
      equations: [
        "2(x + 2) = 16",
        "3(x + 4) = 30",
        "2(x - 5) = 10",
        "4(x + 2) - 8 = 24",
        "3(x - 2) + 6 = 30",
        "5(x - 4) + 10 = 20",
        "2(-3x + 2) = -20",
        "-(2x - 8) = -12",
        "3(x - 5) + 2(x + 4) = 33",
        "4(x + 2) - 3(2x - 5) = 7",
      ],
    },
    {
      name: "Stufe 4",
      description: "Gleichungen mit Dezimalzahlen, teilweise mit negativen Zahlen.",
      equations: [
        "0,5x = 1,2",
        "2x + 1,4 = 6,2",
        "2,5x = 6",
        "1,5x + 2,1 = 5,7",
        "-2x + 1,2 = 5,2",
        "3,5x - 1,4 = 7",
        "-4x + 2,8 = 10,8",
        "0,5x + (-8) = -6,8",
        "-3,5x - 1,5 = -9,9",
        "2,5x + 1,5 = 7,5",
      ],
    },
    {
      name: "Stufe 5",
      description: "Gemischte und längere Gleichungen, auch mit negativen Zahlen und Zusammenfassen.",
      equations: [
        "3x + 5 + 2x = 45",
        "4x + 7 - x = 31",
        "-2x + 7 - x + (-8) = -25",
        "3(x - 2) + 2(x + 4) = 42",
        "2,5x + 3 + (-1,5x) = 11",
        "4(x + 2) + 3x = 64",
        "-4x + 2(x - 3) + 10 = -12",
        "5x - (2x + 6) + 4 = 22",
        "6 - (2x - 8) + 4x = 30",
        "3(x - 4) + 2(2x + 5) - x = 46",
      ],
    },
    {
      name: "Stufe 6",
      description: "Komplexe Klammergleichungen: Minusklammern, Faktoren und Dezimalzahlen.",
      equations: [
        "-(x - 6) = 4",
        "2(-3x + 2) = -20",
        "-(4 + 3x) = -16",
        "3(-2x + 5) = -9",
        "4(x + 2) - 3(2x - 5) = 15",
        "-5(2x - 4) + 3x = -8",
        "7 - (4x - 5,4) - 6(1,1x - 9) = 24",
        "-3(-1,2x + 2,1) - (0,6x + 2,7) - 5 = -2",
        "-5(6x + 12) + (20 + 34x) = -32",
        "4(x + 2) - 3(2x - 5) + 2(1 - x) = -15",
      ],
    },
    {
      name: "Stufe 7",
      description: "Gleichungen mit Brüchen, Dezimalzahlen, Klammern und gemeinsamem Nenner.",
      equations: [
        "1/2x = 6",
        "3/4x = 6",
        "2/5x = -4",
        "3/7x = 8 - 1/7x",
        "13 = 1/2x + 9",
        "-5 = 5/11x",
        "1/9x = -7/9x + 16",
        "5/7x + 2 = 13/14 + 0,5x",
        "(3/5)(x - 1) = (2/3)x + 0,2",
        "x/2 - 3(5 + x) = (1/2)(42 - 3x)",
      ],
    },
    {
      name: "Stufe 8",
      description: "Bruchgleichungen wie im Buch: einfache Brüche, ganze und negative Ergebnisse.",
      equations: [
        "1/2x = 6",
        "1/4x = 3",
        "2/5x = 8",
        "3/7x = 12",
        "12 = 1/3x",
        "-5 = 5/10x",
        "3/7x = 8 - 1/7x",
        "1/9x = -7/9x + 16",
        "3/4x - 2 = 1/2x + 1",
        "5/6x - 3 = 7/8x - 1,5",
      ],
    },
    {
      name: "Stufe 9",
      description: "Bruchgleichungen mit Hauptnenner, Klammern und Dezimalzahlen; Ergebnisse sind ganze Zahlen.",
      equations: [
        "1/2x - 9 = -2x - 4",
        "5/7x + 2 = 13/14 + 0,5x",
        "8/15x + (2x - 0,2) = 1/3x + 4,2",
        "5 - (4/5x + 12) = 1/2(-5,6x + 2)",
        "(2x - 13)/7 = (x - 9)/21",
        "3/4x - (18/25x + 3) = -1,07x + 30",
        "7 - (x - 1/5) = -4(-1/2x - 0,3)",
        "5(1/6x - 2/5) = 9 + 2x/9",
        "2,5x - (3,5x - 8) + 5(2,4x - 3) = 37",
        "7 - (4x - 5,4) - 6(1,1x - 9) = 24",
      ],
    },
    {
      name: "Stufe 10",
      description: "M-Stoff, nicht Quali-relevant: erst Definitionsmenge, dann Hauptnenner x oder x plus/minus Zahl, am Ende Lösungsmenge.",
      equations: [
        "60/x = 48/x + 2",
        "100/x = 170/x - 7",
        "400/x = 180/x + 11",
        "480/x - 20 = 160/x",
        "180/x - 9 = 84/x - 3",
        "48/(x - 8) = 12",
        "85/(x - 5) = 5",
        "96/(x - 8) = 3",
        "144/(x + 3) = -16",
        "480/(x + 20) = -24",
      ],
    },
    {
      name: "Stufe 11",
      description: "M-Stoff: erst Definitionsmenge, zwei Nennerfaktoren ohne quadratische Gleichung, am Ende Lösungsmenge.",
      equations: [
        "6/x = 1/(x - 5)",
        "2/(x - 5) + 4/x = 1/(x - 5)",
        "4/(x - 5) = 2/x",
        "10/x - 3/(x - 5) = 2/x",
        "7/(x - 5) - 2/x = 4/(x - 5)",
        "7/(2x + 15) = 1/(x - 5)",
        "6/(2x + 15) = 2/(x - 5)",
        "1/(2x + 15) = 1/(x - 5)",
        "5/(2x + 15) + 1/(x - 5) = 2/(2x + 15)",
        "4/(2x + 15) - 1/(x - 5) = 1/(2x + 15)",
      ],
    },
    {
      name: "Stufe 12",
      description: "M-Stoff: zwei Klammern ausmultiplizieren und gleichartige Terme zusammenfassen.",
      equations: [
        "Multipliziere: (x + 3)(x + 4)",
        "Multipliziere: (x - 4)(x + 7)",
        "Multipliziere: (x - 5)(x - 6)",
        "Multipliziere: (2x + 3)(x + 5)",
        "Multipliziere: (3x - 2)(x + 4)",
        "Multipliziere: (5 - x)(x + 8)",
        "Multipliziere: (-3 + x)(7 - x)",
        "Multipliziere: (4x - 1)(2x + 5)",
        "Multipliziere: (10 - x)(5 - x)",
        "Multipliziere: (12 + x)(x - 9)",
      ],
    },
    {
      name: "Stufe 13",
      description: "M-Stoff: quadratische Gleichungen lösen und die Lösungsmenge angeben.",
      equations: [
        "x² = 36",
        "x² = 0",
        "x² - 49 = 0",
        "3x² = 192",
        "2x² + 14 = 64",
        "0,25x² - 50 = 350",
        "160 - 0,75x² = 52",
        "x² + 9 = 0",
        "(x - 5)(x + 5) = 24",
        "(2x - 3)(2x + 3) = 391",
      ],
    },
    {
      name: "Stufe 14",
      description: "Einfache Sachaufgaben: x steht allein, die anderen Größen sind nur x plus oder minus eine Zahl.",
      equations: [
        "Sachaufgabe: Eine Schule bestellt 390 Hefte in drei Farben. Von den roten Heften werden 50 mehr bestellt als von den blauen Heften. Von den gelben Heften werden 20 weniger bestellt als von den blauen Heften. Wie viele Hefte jeder Farbe werden bestellt? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: In einem Lager stehen 315 Kartons in drei Reihen. In Reihe A stehen 25 weniger als in Reihe B. In Reihe C stehen 40 mehr als in Reihe B. Wie viele Kartons stehen in jeder Reihe? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Klasse sammelt 210 Pfandflaschen in drei Größen. Von den kleinen Flaschen gibt es 30 mehr als von den mittleren Flaschen. Von den großen Flaschen gibt es 15 weniger als von den mittleren Flaschen. Wie viele Flaschen jeder Größe wurden gesammelt? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Ein Sportgeschäft verkauft 310 Bälle in drei Farben. Von den roten Bällen werden 20 mehr verkauft als von den blauen Bällen. Von den gelben Bällen werden 10 weniger verkauft als von den blauen Bällen. Wie viele Bälle jeder Farbe werden verkauft? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Bibliothek verleiht 450 Bücher in drei Wochen. In Woche 1 werden 60 Bücher weniger verliehen als in Woche 2. In Woche 3 werden 90 Bücher mehr verliehen als in Woche 2. Wie viele Bücher werden in jeder Woche verliehen? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Bäckerei verkauft 240 Brötchen in drei Sorten. Von den Körnerbrötchen werden 18 weniger verkauft als von den normalen Brötchen. Von den Käsebrötchen werden 42 mehr verkauft als von den normalen Brötchen. Wie viele Brötchen jeder Sorte werden verkauft? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: In einer Werkstatt liegen 560 Schrauben in drei Kisten. In der kleinen Kiste liegen 80 weniger als in der mittleren Kiste. In der großen Kiste liegen 160 mehr als in der mittleren Kiste. Wie viele Schrauben liegen in jeder Kiste? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Gärtnerei verkauft 270 Pflanzen in drei Größen. Von den kleinen Pflanzen werden 45 mehr verkauft als von den mittleren Pflanzen. Von den großen Pflanzen werden 30 weniger verkauft als von den mittleren Pflanzen. Wie viele Pflanzen jeder Größe werden verkauft? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für ein Schulfest werden 380 Getränke in drei Sorten gekauft. Von den Wasserflaschen gibt es 40 mehr als von den Saftflaschen. Von den Limonadenflaschen gibt es 20 weniger als von den Saftflaschen. Wie viele Flaschen jeder Sorte gibt es? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Die Kita Mäusenest kauft 688 Holzklötze in drei Farben. Von den roten Holzklötzen werden 76 mehr bestellt als von den blauen Klötzen. Von den gelben Holzklötzen werden 102 weniger angeschafft als von den blauen Holzklötzen. Wie viele Holzklötze von jeder Farbe werden bestellt? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
      ],
    },
    {
      name: "Stufe 15",
      description: "Buchähnliche Sachaufgaben: x steht allein; doppelt, Hälfte, feste Werte und erste Klammern sind möglich.",
      equations: [
        "Sachaufgabe: Die Kita Mäusenest kauft 688 Holzklötze in drei Farben. Von den roten Holzklötzen werden halb so viele wie von den blauen Klötzen bestellt. Von den gelben Holzklötzen werden 102 weniger angeschafft als von den blauen Holzklötzen. Wie viele Holzklötze von jeder Farbe werden bestellt? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Schule bestellt 410 Hefte in drei Farben. Von den roten Heften werden doppelt so viele wie von den blauen Heften bestellt. Von den gelben Heften werden 30 weniger bestellt als von den blauen Heften. Wie viele Hefte jeder Farbe werden bestellt? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: In einer Werkstatt liegen 560 Schrauben in drei Kisten. In der kleinen Kiste liegen halb so viele Schrauben wie in der mittleren Kiste. In der großen Kiste liegen 140 Schrauben mehr als in der mittleren Kiste. Wie viele Schrauben liegen in jeder Kiste? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für ein Schulfest werden 360 Getränke in drei Sorten gekauft. Von den Wasserflaschen gibt es doppelt so viele wie von den Saftflaschen. Von den Limonadenflaschen gibt es 40 mehr als von den Saftflaschen. Wie viele Flaschen jeder Sorte gibt es? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Bücherei verleiht 450 Bücher in drei Bereichen. Kinderbücher werden halb so oft verliehen wie Jugendbücher. Sachbücher werden 90-mal mehr verliehen als Jugendbücher. Wie viele Bücher werden in jedem Bereich verliehen? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Drei Jugendliche sammeln zusammen 200 € Spenden. Julia sammelt 20 € mehr als Marcus. Corinna sammelt doppelt so viel wie Marcus. Wie viel sammelt jede Person? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für ein Spiel werden 270 Eintrittskarten verkauft. Von den Sitzplatzkarten werden halb so viele verkauft wie von den Stehplatzkarten. Von den Familienkarten werden 90 mehr verkauft als von den Stehplatzkarten. Wie viele Karten jeder Art wurden verkauft? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Sandi kauft einen Tisch, einen Schrank und eine Couch für insgesamt 1518 €. Die Couch kostet 256 €. Der Schrank kostet doppelt so viel wie Tisch und Couch zusammen. Wie viel kosten Tisch, Schrank und Couch? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Die Klasse 9a sammelt für eine Hilfsaktion 912 €. Die Klasse 9b sammelt 30 € mehr als 9a. Die Klasse 9c sammelt doppelt so viel wie 9a. Wie viel sammelt jede Klasse? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für einen Skikurs werden vier Gruppen gebildet. Gruppe A hat x Personen. Gruppe B hat 4 Personen mehr als A. Gruppe C hat doppelt so viele Personen wie A. Gruppe D hat 6 Personen weniger als C. Insgesamt nehmen 70 Personen teil. Wie viele Personen sind in jeder Gruppe? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
      ],
    },
    {
      name: "Stufe 16",
      description: "Schwere Buchaufgaben mit mindestens vier Bereichen: Anteile, Preise, feste Restwerte und gewichtete Gleichungen.",
      equations: [
        "Sachaufgabe: Bei einem Schulfest werden Lose verkauft. Ein Drittel aller Lose sind rote Lose. Ein Sechstel aller Lose sind blaue Lose. 150 Lose sind gelb. 50 Lose sind grün. Wie viele Lose wurden insgesamt verkauft und wie viele Lose jeder Farbe gibt es? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Schule sammelt Spenden. Klasse 9a sammelt ein Drittel der Gesamtsumme. Klasse 9b sammelt ein Sechstel der Gesamtsumme. Klasse 9c sammelt 450 €. Klasse 9d sammelt 300 € mehr als Klasse 9c. Wie viel Geld wurde insgesamt gesammelt und wie viel sammelte jede Klasse? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: In einer Gärtnerei werden Pflanzen verkauft. Ein Drittel aller Pflanzen sind Rosen. Ein Sechstel aller Pflanzen sind Tulpen. 180 Pflanzen sind Kräuter. Von den Stauden werden 60 mehr verkauft als von den Kräutern. Wie viele Pflanzen wurden insgesamt verkauft und wie viele Pflanzen jeder Art sind es? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Fischer Fritz verkauft seinen Fang. Ein Drittel des Fangs kauft der Hotelkoch. Der Fischhändler kauft 60 Fische mehr als der Hotelkoch. Ein Viertel des Fangs geht an eine Großküche. Einen Fisch kauft die Schiffskatze. 38 Fische räuchert Fritz. Wie viele Fische hat Fritz gefangen und wie viele Fische bekommt jeder Bereich? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für ein Bundesligaspiel werden Karten verkauft. Ein Viertel aller Karten geht an die Haupttribüne. Ein Drittel der übrigen Karten geht an die Gegentribüne. Ein Sechstel aller Karten geht an die Nordkurve. Für die Südkurve werden 5500 Karten mehr verkauft als für die Nordkurve. Wie viele Karten wurden insgesamt verkauft und wie viele Karten gehen an jeden Bereich? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für einen Skikurs werden vier Gruppen gebildet. Gruppe A hat x Personen. Gruppe B hat 4 Personen mehr als A. Gruppe C hat doppelt so viele Personen wie A. Gruppe D hat 6 Personen weniger als C. Der Wochenskipass kostet pro Person: A 27 €, B 27 €, C 31,50 €, D 54 €. Insgesamt wurden 909 € eingesammelt. Wie viele Personen sind in jeder Gruppe? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Schule richtet ein Schullandheim ein. Es gibt viermal so viele 4-Bett-Zimmer wie 6-Bett-Zimmer. Außerdem gibt es drei 2-Bett-Zimmer und zwei Einzelzimmer. Insgesamt sind 294 Betten vorhanden. Wie viele Zimmer jeder Art gibt es? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Eine Klasse sammelt Pfandflaschen. 25-Cent-Flaschen gibt es dreimal so viele wie 15-Cent-Flaschen. 8-Cent-Flaschen gibt es 20 weniger als 25-Cent-Flaschen. 50-Cent-Flaschen gibt es 10 mehr als 15-Cent-Flaschen. Insgesamt erhält die Klasse 167,40 €. Wie viele Flaschen jeder Sorte wurden gesammelt? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für ein Konzert werden vier Kartenarten verkauft. Haupttribünenkarten kosten 72,50 €, Gegentribünenkarten 63,00 €, Nordkurvenkarten 34,50 € und Südkurvenkarten 45,00 €. Haupttribünenkarten sind ein Drittel der Nordkurvenkarten, Gegentribünenkarten die Hälfte der Nordkurvenkarten und Südkurvenkarten 5500 mehr als Nordkurvenkarten. Insgesamt werden 1058500 € eingenommen. Wie viele Karten jeder Art wurden verkauft? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
        "Sachaufgabe: Für ein Trainingslager zahlen 10 Mädchen und 6 Jungen den vollen Preis. Drei Trainerinnen erhalten je 80 € Rabatt. Zwei Helfer erhalten je 120 € Rabatt. Insgesamt werden 4560 € bezahlt. Wie hoch ist der volle Preis und wie viel zahlen Trainerinnen und Helfer? Strategie wie im Beispiel: x festlegen, Terme bilden, Gleichung aufstellen, lösen, Werte einsetzen, Antwortsatz optional.",
      ],
    },
  ];
  const solved = levels.map(() => new Set());
  const photoStepProgress = levels.map((level) => level.equations.map(() => 0));
  let currentImage = null;
  let selectedImageFile = null;
  let selectedUploadFile = null;
  let imageReadyPromise = Promise.resolve(null);
  let currentLevelIndex = 0;
  let currentEquationIndex = 0;
  let currentTaskStepIndex = 0;

  function currentLevel() {
    return levels[currentLevelIndex];
  }

  function isStepwiseWordProblemLevel() {
    return ["Stufe 14", "Stufe 15", "Stufe 16"].includes(currentLevel().name);
  }

  function getStoredPhotoStepIndex() {
    return photoStepProgress[currentLevelIndex]?.[currentEquationIndex] ?? 0;
  }

  function setStoredPhotoStepIndex(index) {
    photoStepProgress[currentLevelIndex][currentEquationIndex] = Math.max(
      0,
      Math.min(index, wordProblemPhotoSteps.length - 1),
    );
  }

  function clearImageSelection() {
    imageInput.value = "";
    cameraInput.value = "";
    selectedImageFile = null;
    selectedUploadFile = null;
    imageReadyPromise = Promise.resolve(null);
    currentImage = null;
    drawPreview();
  }

  function setFeedback(kind, html) {
    feedback.className = `feedback-box ${kind}${html ? "" : " empty"}`;
    feedback.innerHTML = html;
  }

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function isTextTask(value) {
    return /^sachaufgabe\s*:/i.test(String(value ?? "")) || String(value ?? "").length > 90;
  }

  function splitTextTask(value) {
    const withoutPrefix = String(value ?? "").replace(/^sachaufgabe\s*:\s*/i, "").trim();
    const [taskText, strategyText = ""] = withoutPrefix.split(/\s*Strategie wie im Beispiel:\s*/i);
    return {
      taskText: taskText.trim(),
      strategyText: strategyText.trim().replace(/\.$/, ""),
    };
  }

  function getTextTaskTopic(value) {
    const { taskText } = splitTextTask(value);
    const rules = [
      [/theater/i, "Theaterkarten"],
      [/sparschwein|münzen/i, "Münzen"],
      [/mäusenest|holzklötze/i, "Holzklötze"],
      [/hefte/i, "Hefte"],
      [/werkstatt|schrauben/i, "Schrauben"],
      [/getränke|wasserflaschen|saftflaschen|limonaden/i, "Getränke"],
      [/gärtnerei|pflanzen/i, "Pflanzen"],
      [/bibliothek|bücherei|bücher/i, "Bücher"],
      [/eintrittskarten|kartenarten|haupttribünenkarten|nordkurvenkarten/i, "Eintrittskarten"],
      [/tisch|schrank|couch/i, "Möbelkauf"],
      [/hilfsaktion|klasse 9a/i, "Hilfsaktion"],
      [/turnier|punkte/i, "Turnierpunkte"],
      [/lager|kartons|reihe/i, "Kartons"],
      [/bäckerei|brötchen/i, "Brötchen"],
      [/pfandflaschen|flaschen/i, "Flaschen"],
      [/sportgeschäft|bälle/i, "Bälle"],
      [/lena|ben|älter/i, "Alter"],
      [/dreieck|seiten/i, "Dreieck"],
      [/hefte|stift/i, "Hefte & Stift"],
      [/zoo/i, "Zoo-Karten"],
      [/lisa|murat|nele/i, "Sammelgeld"],
      [/kilometer|läuft/i, "Kilometer"],
      [/buch|hardcover|taschenbuch/i, "Bücher"],
      [/klötze|farbe/i, "Klötze"],
      [/bus/i, "Busfahrt"],
      [/kochtöpfe/i, "Kochtöpfe"],
      [/zulieferer/i, "Zulieferer"],
      [/rockkonzert|preisklasse/i, "Konzertkarten"],
      [/sportgruppe|trainingslager/i, "Trainingslager"],
      [/stefan|markus|torsten|spenden/i, "Spenden"],
      [/julia|marcus|corinna/i, "Spenden"],
      [/wahl|stimmen/i, "Wahlstimmen"],
      [/schrauben/i, "Schrauben"],
      [/schulausflug/i, "Schulausflug"],
      [/skikurs|skipass/i, "Skikurs"],
      [/fischer|fische/i, "Fischer Fritz"],
      [/bundesligaspiel/i, "Bundesliga"],
      [/startkapital/i, "Startkapital"],
      [/schullandheim|zimmer|betten/i, "Zimmer & Betten"],
      [/schulfest/i, "Schulfest"],
      [/pfandflaschen/i, "Pfandflaschen"],
    ];
    const match = rules.find(([pattern]) => pattern.test(taskText));

    if (match) return match[1];

    return taskText.split(/[.?!]/)[0].slice(0, 28).trim() || "Sachaufgabe";
  }

  function renderTextTask(value) {
    const { taskText } = splitTextTask(value);

    return `
      <span class="task-card">
        <span class="task-badge">Sachaufgabe</span>
        <span class="task-text">${formatEquation(taskText)}</span>
      </span>
    `;
  }

  function renderTaskStepPanel() {
    if (!isStepwiseWordProblemLevel()) {
      taskStepInput.value = "";
      taskStepPanel.hidden = true;
      taskStepPanel.innerHTML = "";
      imageLabel.textContent = "Foto vom Rechenweg";
      checkButton.textContent = "Rechenweg prüfen";
      return;
    }

    currentTaskStepIndex = solved[currentLevelIndex].has(equationInput.value)
      ? wordProblemPhotoSteps.length - 1
      : getStoredPhotoStepIndex();
    const activeStep = wordProblemPhotoSteps[currentTaskStepIndex];
    taskStepInput.value = String(currentTaskStepIndex + 1);
    taskStepPanel.hidden = false;
    imageLabel.textContent = `${currentTaskStepIndex + 1}. Foto: ${activeStep.title}`;
    checkButton.textContent = `Foto ${currentTaskStepIndex + 1} prüfen`;
    taskStepPanel.innerHTML = `
      <div class="task-step-head">
        <strong>Foto ${currentTaskStepIndex + 1}</strong>
        <span>${currentTaskStepIndex + 1} / ${wordProblemPhotoSteps.length}</span>
      </div>
      <div class="task-step-list" aria-label="Foto-Schritte">
        ${wordProblemPhotoSteps
          .map((step, index) => {
            const state =
              index < currentTaskStepIndex
                ? "done"
                : index === currentTaskStepIndex
                  ? "active"
                  : "";
            return `<span class="${state}"><b>${index + 1}</b>${escapeHtml(step.shortTitle)}</span>`;
          })
          .join("")}
      </div>
    `;
  }

  function getEquationStatusText(equation, index) {
    if (solved[currentLevelIndex].has(equation)) return "richtig";
    if (isStepwiseWordProblemLevel()) {
      const stepIndex = photoStepProgress[currentLevelIndex]?.[index] ?? 0;
      return `Foto ${stepIndex + 1}/4`;
    }

    return isTextTask(equation) ? "" : `${index + 1}`;
  }

  function getTaskPreview(value, index) {
    if (!isTextTask(value)) return formatEquation(value);

    return `<span class="task-preview-index">${index + 1}</span><span>${escapeHtml(getTextTaskTopic(value))}</span>`;
  }

  function formatEquation(value) {
    const text = String(value ?? "").replace(/\^2/g, "²");
    const fractionPattern = /(\([^()]+\)|-?\d+(?:,\d+)?[a-zA-Z]?|-?[a-zA-Z]\d*|-?\d+(?:,\d+)?\s*[·*]\s*[a-zA-Z])\s*\/\s*(\([^()]+\)|-?[a-zA-Z]\d*|\d+(?:,\d+)?)/g;
    let html = "";
    let lastIndex = 0;
    let match;

    function cleanFractionPart(part) {
      const trimmed = String(part ?? "").trim();

      if (trimmed.startsWith("(") && trimmed.endsWith(")")) {
        return trimmed.slice(1, -1).trim();
      }

      return trimmed;
    }

    while ((match = fractionPattern.exec(text)) !== null) {
      const fractionEnd = match.index + match[0].length;
      const hasOnlyFractionParentheses = text[match.index - 1] === "(" && text[fractionEnd] === ")";
      const textBeforeFraction = text.slice(lastIndex, hasOnlyFractionParentheses ? match.index - 1 : match.index);
      const denominator = cleanFractionPart(match[2]);
      const shouldWrapVariableDenominator = !hasOnlyFractionParentheses && /^[a-zA-Z]\d*$/.test(denominator);
      const fractionHtml = `<span class="math-frac"><span class="math-frac-top">${escapeHtml(cleanFractionPart(match[1]))}</span><span class="math-frac-bottom">${escapeHtml(denominator)}</span></span>`;
      html += escapeHtml(textBeforeFraction);
      html += shouldWrapVariableDenominator
        ? `<span class="math-frac-wrap">( ${fractionHtml} )</span>`
        : fractionHtml;
      lastIndex = hasOnlyFractionParentheses ? fractionEnd + 1 : fractionEnd;
    }

    return html + escapeHtml(text.slice(lastIndex));
  }

  function cleanFeedbackLineLabel(value) {
    return String(value ?? "")
      .trim()
      .replace(/\b(?:sichtbare\s+)?(?:schritt|zeile)\s*\d+(?:\s*[-–]\s*\d+)?\s*[:.)-]?\s*/gi, "")
      .replace(/\b(?:sichtbare\s+)?(?:schritt|zeile)\s*[:.)-]?\s*/gi, "")
      .replace(/\s{2,}/g, " ")
      .replace(/^\s*(?!:\s*\d)[:.)]\s*/, "")
      .trim();
  }

  function isStandaloneCheckMark(value) {
    return /^[✓✔️✔√]+\.?$/u.test(String(value ?? "").trim());
  }

  function isDanglingExampleStart(value) {
    return /^\(?\s*z\.?\s*(?:b\.?)?\s*\.?\s*\)?$/i.test(String(value ?? "").trim());
  }

  function normalizeFeedbackSentences(value) {
    return String(value ?? "")
      .replace(/\bdann\s+([+\-−]\s*\d+(?:[,.]\d+)?x|[+\-−]\s*x|[+\-−]\s*\d+(?:[,.]\d+)?|[:÷]\s*\(?[+\-−]?\d+(?:[,.]\d+)?\)?):?/gi, "\n$1 auf beiden Seiten:")
      .replace(/\s*,\s*(?=[+\-−:÷]\s*(?:\(?[+\-−]?\d|\d+(?:[,.]\d+)?x|x))/g, "\n")
      .replace(/[;]\s*(?=[+\-−:÷]\s*(?:\(?[+\-−]?\d|\d+(?:[,.]\d+)?x|x))/g, "\n")
      .replace(/\s*→\s*(?=[+\-−:÷]\s*(?:\(?[+\-−]?\d|\d+(?:[,.]\d+)?x|x))/g, "\n")
      .replace(/auf beiden Seiten:\s*:/g, "auf beiden Seiten:")
      .replace(/\bAlle\s+e\s+korrekt\.?/gi, "Alles korrekt.");
  }

  function splitProbeSideSentences(value) {
    return String(value ?? "")
      .replace(/\s+und\s+((?=[^.\n]*=)[^.\n]+=\s*-?\d+(?:[,.]\d+)?\s*\.?\s*[✓✔]?)/gi, "\nRechte Seite: $1");
  }

  function normalizeOperationListLine(value) {
    return String(value ?? "").replace(/Umformungsschritte\s*\((.*)\)\s*sind\s+rechnerisch\s+korrekt/i, (_match, operations) => {
      const cleanOperations = String(operations).split(/\s*,\s*/).join(", ");

      return `Umformungsschritte: ${cleanOperations} sind rechnerisch korrekt`;
    }).replace(/Umformungen\s*\((.*)\)\s*(?:alle\s+)?korrekt\s*→/i, (_match, operations) => {
      const cleanOperations = String(operations)
        .split(/\s*,\s*/)
        .map((operation) => {
          const text = operation.trim();
          const division = text.match(/^\(([+\-−]?\d+(?:[,.]\d+)?)\)$/);

          return division ? `:(${division[1]})` : text;
        })
        .join(", ");

      return `Umformungen: ${cleanOperations} →`;
    });
  }

  function mergeSplitExampleLines(lines) {
    return lines.reduce((merged, line) => {
      const previous = merged[merged.length - 1] || "";
      const openParentheses = (previous.match(/\(/g) || []).length;
      const closeParentheses = (previous.match(/\)/g) || []).length;
      const previousNeedsExample = /\(?\s*z\.?\s*$/i.test(previous);
      const currentContinuesExample = /^b\.?\s+/i.test(line);
      const currentIsShortExampleFragment = /^(?:b\.?|d|l|=.*)$/i.test(line.trim());
      const previousEndsWithEquals = /=\s*$/.test(previous);
      const currentContinuesEquals = /^[^=]+(?:\{|\}|≠|\\|Q|R|N|Z|\d)/i.test(line.trim());
      const previousIsExamplePrefix = /\(?\s*z\.?\s*b\.?\s*\.?\s*$/i.test(previous);
      const currentIsDefinitionExample = /^[dD]\s*=?\s*$/.test(line) || /^[=]\s*.+/.test(line);
      const previousHasOpenOperationList = /umformungen\b[^(]*\([^)]*$/i.test(previous);
      const previousMentionsOpenOperationSteps = /umformungsschritte\b[^(]*\([^)]*$/i.test(previous);
      const currentContinuesOperationList = /^(?:[+\-−]\s*\d+(?:[,.]\d+)?x?|[·*]\s*x|[:÷]\s*\d+(?:[,.]\d+)?|\(?[+\-−]\s*\d+(?:[,.]\d+)?\)?\)?)\s*/i.test(line);

      if (previousNeedsExample && currentContinuesExample) {
        const prefix = previous.replace(/\s*\(?\s*z\.?\s*$/i, "").trim();
        const suffix = line.replace(/\)\s*$/, "");
        merged[merged.length - 1] = `${prefix} (z. ${suffix})`;
        return merged;
      }

      if (currentIsShortExampleFragment && previous) {
        merged[merged.length - 1] = `${previous} ${line}`.replace(/\s+/g, " ").trim();
        return merged;
      }

      if (previousEndsWithEquals && currentContinuesEquals) {
        merged[merged.length - 1] = `${previous} ${line}`.replace(/\s+/g, " ").trim();
        return merged;
      }

      if (previousIsExamplePrefix && currentIsDefinitionExample) {
        const separator = /^[=]/.test(line.trim()) ? " " : " ";
        merged[merged.length - 1] = `${previous}${separator}${line}`.replace(/\s+/g, " ").trim();
        return merged;
      }

      if (previousHasOpenOperationList && currentContinuesOperationList) {
        merged[merged.length - 1] = `${previous}, ${line}`;
        return merged;
      }

      if (previousMentionsOpenOperationSteps && currentContinuesOperationList) {
        merged[merged.length - 1] = `${previous}, ${line}`;
        return merged;
      }

      if (openParentheses > closeParentheses) {
        merged[merged.length - 1] = `${previous} ${line}`;
        return merged;
      }

      merged.push(line);
      return merged;
    }, []);
  }

  function splitFeedbackText(value) {
    const lines = normalizeFeedbackSentences(value)
      .replace(/\s*\n+\s*/g, "\n")
      .replace(/\s+und\s+((?=[^.\n]*=)[^.\n]+=\s*-?\d+(?:[,.]\d+)?\s*\.?\s*[✓✔]?)/gi, "\nRechte Seite: $1")
      .split(/\n|(?=\b(?:Schritt|Zeile)\s*\d+\s*:)/i)
      .map((line) => cleanFeedbackLineLabel(line));

    return mergeSplitExampleLines(lines)
      .map((line) => normalizeOperationListLine(line))
      .filter((line) => !isStandaloneCheckMark(line))
      .filter((line) => !isDanglingExampleStart(line))
      .filter(Boolean);
  }

  function isMissingHint(value) {
    return /^fehlt\s*:/i.test(String(value ?? "").trim());
  }

  function isCorrectPartialLine(value) {
    const text = String(value ?? "").trim().toLowerCase();

    return /\b(korrekt|richtig|stimmt)\b/.test(text) && !/\b(nicht|falsch|fehler|fehlt)\b/.test(text);
  }

  function describeEquationAction(value) {
    const text = String(value ?? "").trim();
    const match = text.match(/^([+\-−·*:÷]\s*(?:\(?-?\d+(?:[,.]\d+)?\)?|x))\s*(?:(→|->)|ergibt)?\s*:?$/i);

    if (!match) return text;

    return `${match[1]} auf beiden Seiten ${match[2] ? "→" : text.toLowerCase().includes("ergibt") ? "ergibt" : "→"}`;
  }

  function formatProbeNumber(value) {
    if (!Number.isFinite(value)) return "";
    const rounded = Math.round(value * 1000) / 1000;
    return Number.isInteger(rounded)
      ? String(rounded)
      : String(rounded).replace(".", ",");
  }

  function evaluateNumericExpression(value) {
    const expression = String(value ?? "")
      .replace(/,/g, ".")
      .replace(/·/g, "*")
      .replace(/−/g, "-")
      .replace(/÷/g, "/")
      .replace(/\s+/g, "")
      .replace(/(\d(?:\.\d+)?)\(/g, "$1*(")
      .replace(/\)(\d)/g, ")*$1");

    if (!/^[\d+\-*/().]+$/.test(expression) || !/\d/.test(expression)) {
      return null;
    }

    try {
      const result = Function(`"use strict"; return (${expression});`)();
      return Number.isFinite(result) ? Number(result) : null;
    } catch {
      return null;
    }
  }

  function renderProbeCheckLine(text, equation) {
    if (!/\bprobe\b/i.test(text)) return "";

    const equationParts = equation
      .split("=")
      .map((part) => part.trim())
      .filter(Boolean);

    if (equationParts.length < 2) return "";

    const leftValue = evaluateNumericExpression(equationParts[0]);
    const rightValue = evaluateNumericExpression(equationParts[equationParts.length - 1]);

    if (
      leftValue === null ||
      rightValue === null ||
      Math.abs(leftValue - rightValue) > 0.001
    ) {
      return "";
    }

    const checkEquation = `${formatProbeNumber(leftValue)} = ${formatProbeNumber(rightValue)}`;
    return `
      <span class="probe-check-line">
        <span class="feedback-equation-line probe-result-line">${formatEquation(checkEquation)}</span>
        <span class="line-check mini-check" aria-label="Probe stimmt">✓</span>
      </span>
    `;
  }

  function formatFeedbackLine(value) {
    const text = cleanFeedbackLineLabel(value);
    const sideMatch = text.match(/^(.*?\bLinks\s*:?\s*)(.+?)(?:\.\s*|\s+)Rechts\s*:?\s*(.+?)(?:\.\s*(.*)|$)/i);

    if (sideMatch) {
      const intro = cleanFeedbackLineLabel(sideMatch[1]);
      const left = sideMatch[2].trim().replace(/[.;,:]+$/, "");
      const right = sideMatch[3].trim().replace(/[.;,:]+$/, "");
      const rest = cleanFeedbackLineLabel(sideMatch[4] || "");

      return `
        ${intro ? `<span class="feedback-line-text">${formatEquation(intro)}</span>` : ""}
        <span class="feedback-line-text">Links:</span>
        <span class="feedback-equation-line">${formatEquation(left)}</span>
        <span class="feedback-line-text">Rechts:</span>
        <span class="feedback-equation-line">${formatEquation(right)}</span>
        ${rest ? `<span class="feedback-line-text">${formatEquation(rest)}</span>` : ""}
      `;
    }

    const equationPattern = /([()xX\d\s+\-−*/·,:;=.]+=[()xX\d\s+\-−*/·,:;.]+)/;
    const match = text.match(equationPattern);

    if (!match) {
      return formatEquation(text);
    }

    let equation = match[1]
      .trim()
      .replace(/^\s*[:;]\s*/, "")
      .replace(/^\s*(?!:\s*\d)[:.)]\s*/, "")
      .replace(/^(?:zeile\s*)?\d+\s*[.:)]\s*/i, "")
      .replace(/\s+\($/, "")
      .replace(/[.;,:]+$/, "");
    if (!/[xX\d]/.test(equation)) {
      return formatEquation(text);
    }
    let before = describeEquationAction(cleanFeedbackLineLabel(text.slice(0, match.index)))
      .replace(/\s*\(\s*$/g, "")
      .replace(/\s*\(\|\s*$/g, "")
      .trim();
    if (/\(hauptnenner$/i.test(before)) {
      before += ")";
    }
    const divisionMatch = equation.match(/^\(?([+\-−]?\d+(?:[,.]\d+)?)\)?\s*:\s*([xX].*=.*)$/);

    if (divisionMatch && /division\s+durch/i.test(before)) {
      before = `durch ${divisionMatch[1].replace("−", "-")} teilen`;
      equation = divisionMatch[2].trim();
    }

    const operationPrefixMatch = equation.match(/^\(?([+\-−]\s*\d+(?:[,.]\d+)?|[+\-−]\s*x|[+\-−]\s*\d+(?:[,.]\d+)?x)\)?\s*:\s*(.+)$/i);

    if (operationPrefixMatch) {
      const operation = operationPrefixMatch[1].replace(/\s+/g, "").replace("−", "-");
      const unsignedOperation = operation.replace(/^[+-]/, "");
      equation = operationPrefixMatch[2].trim();
      before = before.replace(/\s*(?:\(\|?\s*)?$/g, "").trim();
      if (before) {
        before = new RegExp(`\\b(?:subtrahiere|addiere)\\s+${unsignedOperation.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}\\b`, "i").test(before)
          ? before
          : `${before} und ${operation} auf beiden Seiten`;
      } else {
        before = `${operation} auf beiden Seiten`;
      }
    }

    equation = equation
      .trim()
      .replace(/^\s*[:;]\s*/, "")
      .replace(/\s+\($/, "")
      .replace(/[.;,:]+$/, "");

    const rawAfter = cleanFeedbackLineLabel(
      text.slice(match.index + match[1].length).replace(/^[–-]\s*/, ""),
    );
    const after = isStandaloneCheckMark(rawAfter) ? "" : rawAfter;

    return `
      ${before ? `<span class="feedback-line-text">${formatEquation(before)}</span>` : ""}
      <span class="feedback-equation-line">${formatEquation(equation)}</span>
      ${renderProbeCheckLine(text, equation)}
      ${after ? `<span class="feedback-line-text">${formatEquation(after)}</span>` : ""}
    `;
  }

  function renderLineList(lines, options = {}) {
    if (lines.length === 0) return "";

    const { checked = false, className = "", showChecks = checked } = options;

    return `
      <ol class="solution-lines ${className}">
        ${lines
          .map((line, index) => {
            const missingHint = isMissingHint(line);
            const lineChecked = !missingHint && (checked || isCorrectPartialLine(line));
            const showCheck = showChecks && lineChecked;
            return `
              <li class="${missingHint ? "missing-hint" : ""} ${lineChecked ? "checked" : ""}">
                <span class="step-box">${index + 1}.</span>
                <span class="solution-line-body">${formatFeedbackLine(line)}</span>
                ${showCheck ? `<span class="line-check" aria-label="richtig">✓</span>` : ""}
              </li>
            `;
          })
          .join("")}
      </ol>
    `;
  }

  function splitSuggestionText(value) {
    const lines = splitProbeSideSentences(normalizeFeedbackSentences(value))
      .replace(/\s*,\s*dann\s+/gi, "\nDann ")
      .replace(/\s*;\s*/g, "\n")
      .replace(/\s*\n+\s*/g, "\n")
      .split(/\n|(?<=\.)\s+(?=[A-ZÄÖÜ])/)
      .map((line) => cleanFeedbackLineLabel(line));

    return mergeSplitExampleLines(lines)
      .map((line) => normalizeOperationListLine(line))
      .filter((line) => !isStandaloneCheckMark(line))
      .filter((line) => !isDanglingExampleStart(line))
      .filter(Boolean);
  }

  function renderSuggestion(value) {
    const lines = splitSuggestionText(value);
    if (lines.length <= 1) {
      const line = lines[0] || value;
      return `
        <ol class="solution-lines next-steps single-step">
          <li class="${isMissingHint(line) ? "missing-hint" : ""}">
            <span class="step-box">1.</span>
            <span class="solution-line-body">${formatFeedbackLine(line)}</span>
          </li>
        </ol>
      `;
    }

    return `
      <ol class="solution-lines next-steps">
        ${lines
          .map((line, index) => `
            <li class="${isMissingHint(line) ? "missing-hint" : ""}">
              <span class="step-box">${index + 1}.</span>
              <span class="solution-line-body">${formatFeedbackLine(line)}</span>
            </li>
          `)
          .join("")}
      </ol>
    `;
  }

  function updateProgress() {
    const level = currentLevel();
    const done = solved[currentLevelIndex].size;
    levelTitle.textContent = level.name;
    levelDescription.textContent = level.description;
    levelProgress.textContent = `${done} / ${level.equations.length} richtig`;
    statusPill.textContent = level.name;
    [levelDownButton, levelUpButton].forEach((button) => {
      button.classList.toggle("complete", done === level.equations.length);
      button.classList.toggle("working", done < level.equations.length);
    });
    taskProgressDots.innerHTML = level.equations
      .map((equation, index) => {
        const state = solved[currentLevelIndex].has(equation)
          ? "done"
          : index === currentEquationIndex
            ? "active"
            : "";
        return `<span class="${state}" aria-label="Aufgabe ${index + 1}"></span>`;
      })
      .join("");
  }

  function renderLevelButtons() {
    levelSwitch.innerHTML = levels
      .map((level, index) => {
        const done = solved[index].size;
        const isActive = index === currentLevelIndex;
        return `
          <button type="button" class="${isActive ? "active" : ""}" data-level-index="${index}">
            <span>${escapeHtml(level.name)}</span>
            <strong>${done} / ${level.equations.length}</strong>
          </button>
        `;
      })
      .join("");

  }

  function renderEquationButtons() {
    const level = currentLevel();
    equationGrid.innerHTML = level.equations
      .map((equation, index) => {
        const isActive = index === currentEquationIndex;
        const isSolved = solved[currentLevelIndex].has(equation);
        const textTask = isTextTask(equation);
        return `
          <button type="button" class="${isActive ? "active" : ""} ${isSolved ? "solved" : ""}" data-equation-index="${index}">
            <span class="equation-text${textTask ? " text-task-text" : ""}">${getTaskPreview(equation, index)}</span>
            <strong>${getEquationStatusText(equation, index)}</strong>
          </button>
        `;
      })
      .join("");

    equationGrid.querySelectorAll("[data-equation-index]").forEach((button) => {
      button.addEventListener("click", () => {
        setEquation(Number(button.dataset.equationIndex));
      });
    });
  }

  function setEquation(index) {
    const level = currentLevel();
    currentEquationIndex = (index + level.equations.length) % level.equations.length;
    const equation = level.equations[currentEquationIndex];
    const textTask = isTextTask(equation);
    currentTaskStepIndex = getStoredPhotoStepIndex();
    equationInput.value = equation;
    taskLevelInput.value = level.name;
    equationDisplay.classList.toggle("text-task", textTask);
    equationDisplay.innerHTML = textTask
      ? renderTextTask(equation)
      : `<span class="equation-line">${formatEquation(equation)}</span>`;
    fitEquationDisplay();
    previewPanel.classList.remove("preview-ok", "preview-no");
    statusPill.classList.remove("ok", "error");
    updateProgress();
    renderTaskStepPanel();
    renderLevelButtons();
    renderEquationButtons();
  }

  function fitEquationDisplay() {
    requestAnimationFrame(() => {
      if (equationDisplay.classList.contains("text-task")) {
        equationDisplay.style.fontSize = "";
        return;
      }

      const maxSize = 48;
      const minSize = 10;
      const equationLine = equationDisplay.querySelector(".equation-line") || equationDisplay;
      equationDisplay.style.fontSize = `${maxSize}px`;

      while (
        equationLine.scrollWidth > equationDisplay.clientWidth - 44 &&
        parseFloat(equationDisplay.style.fontSize) > minSize
      ) {
        const nextSize = parseFloat(equationDisplay.style.fontSize) - 1;
        equationDisplay.style.fontSize = `${nextSize}px`;
      }
    });
  }

  function setLevel(index, equationIndex = 0) {
    currentLevelIndex = (index + levels.length) % levels.length;
    currentEquationIndex = equationIndex;
    setEquation(equationIndex);
    setFeedback("", "");
  }

  function stepEquation(direction) {
    const level = currentLevel();
    const nextEquationIndex = currentEquationIndex + direction;

    if (nextEquationIndex >= 0 && nextEquationIndex < level.equations.length) {
      setEquation(nextEquationIndex);
      return;
    }

    const nextLevelIndex =
      (currentLevelIndex + direction + levels.length) % levels.length;
    const targetLevel = levels[nextLevelIndex];
    const targetEquationIndex =
      direction > 0 ? 0 : targetLevel.equations.length - 1;
    setLevel(nextLevelIndex, targetEquationIndex);
  }

  function stepLevel(direction) {
    setLevel(currentLevelIndex + direction, 0);
  }

  function unlockNextLevelIfReady() {
    const level = currentLevel();
    const isComplete = solved[currentLevelIndex].size === level.equations.length;
    if (!isComplete || currentLevelIndex >= levels.length - 1) return false;

    const nextLevelIndex = currentLevelIndex + 1;
    const nextLevel = levels[nextLevelIndex];
    setLevel(nextLevelIndex);
    setFeedback("ok", `
      <h3>${escapeHtml(nextLevel.name)} freigeschaltet</h3>
      <p class="feedback-summary">Alle Aufgaben der vorherigen Stufe waren richtig. Jetzt: ${escapeHtml(nextLevel.description)}</p>
    `);
    return true;
  }

  function drawPreview() {
    if (!currentImage) {
      canvas.style.display = "none";
      emptyPreview.style.display = "block";
      return;
    }

    const maxWidth = 820;
    const scale = Math.min(1, maxWidth / currentImage.naturalWidth);
    canvas.width = Math.round(currentImage.naturalWidth * scale);
    canvas.height = Math.round(currentImage.naturalHeight * scale);
    canvas.style.display = "block";
    emptyPreview.style.display = "none";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(currentImage, 0, 0, canvas.width, canvas.height);
  }

  function makeJpegFileName(file) {
    const fallback = "rechenweg.jpg";
    if (!file?.name) return fallback;

    return file.name.replace(/\.[^.]+$/, "") + ".jpg";
  }

  function normalizeImageForUpload(img, file) {
    return new Promise((resolve) => {
      const maxSide = 1800;
      const longestSide = Math.max(img.naturalWidth, img.naturalHeight);
      const scale = Math.min(1, maxSide / longestSide);
      const width = Math.max(1, Math.round(img.naturalWidth * scale));
      const height = Math.max(1, Math.round(img.naturalHeight * scale));
      const uploadCanvas = document.createElement("canvas");
      const uploadContext = uploadCanvas.getContext("2d");

      if (!uploadContext) {
        resolve(file);
        return;
      }

      uploadCanvas.width = width;
      uploadCanvas.height = height;
      uploadContext.drawImage(img, 0, 0, width, height);
      uploadCanvas.toBlob(
        (blob) => {
          if (!blob) {
            resolve(file);
            return;
          }

          resolve(
            new File([blob], makeJpegFileName(file), {
              type: "image/jpeg",
              lastModified: Date.now(),
            }),
          );
        },
        "image/jpeg",
        0.9,
      );
    });
  }

  function loadImage(file) {
    previewPanel.classList.remove("preview-ok", "preview-no");
    if (!file) {
      selectedImageFile = null;
      selectedUploadFile = null;
      imageReadyPromise = Promise.resolve(null);
      currentImage = null;
      drawPreview();
      return;
    }

    selectedImageFile = file;
    selectedUploadFile = file;
    const img = new Image();
    imageReadyPromise = new Promise((resolve) => {
      img.onload = async () => {
        URL.revokeObjectURL(img.src);
        currentImage = img;
        drawPreview();
        selectedUploadFile = await normalizeImageForUpload(img, file);
        resolve(selectedUploadFile);
      };
      img.onerror = () => {
        URL.revokeObjectURL(img.src);
        selectedUploadFile = file;
        currentImage = null;
        drawPreview();
        setFeedback(
          "no",
          "<h3>Foto nicht lesbar</h3><p>Die Kamera-Aufnahme konnte nicht vorbereitet werden. Bitte versuche es noch einmal oder wähle ein JPG-Foto aus.</p>",
        );
        resolve(file);
      };
    });
    img.src = URL.createObjectURL(file);
  }

  function renderFeedback(data) {
    drawPreview();

    const kind = data.correct ? "ok" : "no";
    const title = data.correct ? "Richtig gelöst" : "Noch nicht richtig";
    const analysisLines = splitFeedbackText(
      data.analysis || "Kein Fehler im Rechenweg gefunden.",
    );
    const resultMark = data.correct ? "✓" : "×";
    const resultText = data.correct ? "Richtig" : "Falsch";
    const suggestionTitle = "So geht's weiter";

    previewPanel.classList.toggle("preview-ok", data.correct);
    previewPanel.classList.toggle("preview-no", !data.correct);
    statusPill.classList.toggle("ok", data.correct);
    statusPill.classList.toggle("error", !data.correct);
    statusPill.textContent = data.correct ? "Richtig" : "Fehler gefunden";
    let extraFeedback = "";
    if (data.correct && isStepwiseWordProblemLevel()) {
      const nextStep = wordProblemPhotoSteps[currentTaskStepIndex + 1];
      extraFeedback = nextStep
        ? `<div class="feedback-section next-photo-note"><span class="feedback-label">Weiter:</span><p>Jetzt ${escapeHtml(nextStep.title)} fotografieren.</p></div>`
        : `<div class="feedback-section next-photo-note"><span class="feedback-label">${escapeHtml(currentLevel().name)}:</span><p>Alle vier Fotos zu dieser Aufgabe sind erledigt.</p></div>`;
    }

    setFeedback(kind, `
      <div class="feedback-headline">
        <h3>${title}</h3>
        <span class="feedback-result-mark ${kind}" aria-label="${resultText}">${resultMark}</span>
      </div>
      <p class="feedback-summary">${escapeHtml(data.summary)}</p>
      <div class="feedback-section">
        <span class="feedback-label">${data.correct ? "Lösung:" : "Fehlerbeschreibung:"}</span>
        ${renderLineList(analysisLines, { checked: data.correct, showChecks: false })}
      </div>
      <div class="feedback-section tip-section">
        <span class="feedback-label tip-label">${suggestionTitle}:</span>
        ${renderSuggestion(data.suggestion)}
      </div>
      ${extraFeedback}
    `);

    if (data.correct) {
      if (
        isStepwiseWordProblemLevel() &&
        currentTaskStepIndex < wordProblemPhotoSteps.length - 1
      ) {
        setStoredPhotoStepIndex(currentTaskStepIndex + 1);
        currentTaskStepIndex = getStoredPhotoStepIndex();
        renderTaskStepPanel();
        renderEquationButtons();
        clearImageSelection();
        statusPill.classList.remove("error");
        statusPill.classList.add("ok");
        statusPill.textContent = `Foto ${currentTaskStepIndex + 1}`;
        return;
      }

      solved[currentLevelIndex].add(equationInput.value);
      updateProgress();
      renderTaskStepPanel();
      renderLevelButtons();
      renderEquationButtons();
      unlockNextLevelIfReady();
    }
  }

  function getServerFeedback(payload) {
    if (payload?.feedbackData && typeof payload.feedbackData === "object") {
      return payload.feedbackData;
    }

    if (typeof payload?.feedback === "string") {
      try {
        return JSON.parse(payload.feedback);
      } catch {
        return null;
      }
    }

    return null;
  }

  function renderFailedRequest(title, data, fallbackMessage) {
    const analysisLines = splitFeedbackText(data?.analysis || "");
    const suggestion = data?.suggestion || "Bitte versuche es gleich noch einmal.";

    setFeedback("no", `
      <h3>${escapeHtml(title)}</h3>
      <p class="feedback-summary">${escapeHtml(data?.summary || fallbackMessage)}</p>
      ${analysisLines.length
        ? `<div class="feedback-section">
            <span class="feedback-label">Servermeldung:</span>
            ${renderLineList(analysisLines)}
          </div>`
        : ""}
      <div class="feedback-section">
        <span class="feedback-label">Nächster Schritt:</span>
        ${renderSuggestion(suggestion)}
      </div>
    `);
  }

  imageInput.addEventListener("change", () => loadImage(imageInput.files[0]));
  cameraInput.addEventListener("change", () => loadImage(cameraInput.files[0]));
  cameraButton.addEventListener("click", () => cameraInput.click());

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const file =
      (await imageReadyPromise) || selectedUploadFile || selectedImageFile;
    if (!file) {
      setFeedback("no", "<h3>Foto fehlt</h3><p>Wähle zuerst ein Foto vom Rechenweg aus.</p>");
      return;
    }

    const formData = new FormData();
    formData.append("equation", equationInput.value.trim() || currentLevel().equations[0]);
    formData.append("taskLevel", currentLevel().name);
    formData.append("taskStep", taskStepInput.value);
    formData.append(
      "taskStepTitle",
      isStepwiseWordProblemLevel()
        ? wordProblemPhotoSteps[currentTaskStepIndex].title
        : "",
    );
    formData.append("image", file);

    setFeedback(
      "muted",
      "<h3>Prüfe...</h3><p>Da dies eine Testversion ist, kann es beim ersten Mal etwas länger dauern, bis der Server im Hintergrund hochfährt.</p>",
    );
    previewPanel.classList.remove("preview-ok", "preview-no");
    statusPill.classList.remove("ok", "error");
    statusPill.textContent = "Prüft";
    let failureTitle = "Prüfung nicht abgeschlossen";
    let failureStatus = "Prüfung fehlgeschlagen";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });
      const payload = await response.json().catch(() => ({}));
      const serverFeedback = getServerFeedback(payload);
      if (!response.ok) {
        failureTitle = response.status === 502
          ? "Antwort nicht lesbar"
          : "Prüfung nicht abgeschlossen";
        failureStatus = response.status === 502
          ? "Antwort nicht lesbar"
          : "Prüfung fehlgeschlagen";
        if (serverFeedback) {
          previewPanel.classList.remove("preview-ok", "preview-no");
          statusPill.classList.remove("ok");
          statusPill.classList.add("error");
          statusPill.textContent = failureStatus;
          renderFailedRequest(
            failureTitle,
            serverFeedback,
            "Die Prüfung ist fehlgeschlagen.",
          );
          return;
        }

        throw new Error("Die Prüfung ist fehlgeschlagen.");
      }
      renderFeedback(serverFeedback || JSON.parse(payload.feedback));
    } catch (error) {
      if (error instanceof TypeError) {
        failureTitle = "Prüfung nicht erreichbar";
        failureStatus = "Nicht erreichbar";
      }

      previewPanel.classList.remove("preview-ok", "preview-no");
      statusPill.classList.remove("ok");
      statusPill.classList.add("error");
      statusPill.textContent = failureStatus;
      setFeedback("muted", `
        <h3>${escapeHtml(failureTitle)}</h3>
        <p>${escapeHtml(error.message)}</p>
      `);
    }
  });

  nextButton.addEventListener("click", () => stepEquation(1));
  prevButton.addEventListener("click", () => stepEquation(-1));
  levelDownButton.addEventListener("click", () => stepLevel(-1));
  levelUpButton.addEventListener("click", () => stepLevel(1));
  levelSwitch.addEventListener("click", (event) => {
    const button = event.target.closest("[data-level-index]");
    if (!button) return;
    setLevel(Number(button.dataset.levelIndex));
  });

  setEquation(0);
  drawPreview();
  window.addEventListener("resize", fitEquationDisplay);
  document.fonts?.ready?.then(fitEquationDisplay);
})();
