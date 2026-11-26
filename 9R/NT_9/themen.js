/* Natur und Technik 9R: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder
 * (übersicht_themen.html), die Sperre auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung
 * (Klasse → Natur und Technik). Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe des Themenbereichs + Nummer – O = Organische Rohstoffe, R = Radioaktivität, K = Kernenergie,
 * P = Kunststoffe.
 * Ein vergebenes Kürzel bleibt für immer bei seiner Seite; Neues bekommt die nächste freie Nummer.
 *
 * Anders als bei Englisch ist hier alles von sich aus offen (offen: true) – die 9. Klassen arbeiten schon damit.
 * Die Lehrkraft sperrt je Klasse, was nicht zu sehen sein soll (Server: /api/n9, gemeinsam mit 9M, getrennt nach Klasse).
 *
 * Organische Rohstoffe (Module 1 bis 7) liegt je Zug in einem eigenen Ordner. Radioaktivität und Kernenergie nutzen
 * beide Züge gemeinsam (../../9/NT_9/…); „auch“ nennt die Unterseiten, die zu einer Seite gehören (Gruppenarbeit, Quiz).
 * Lernstand: Die Module 1 bis 7 heißen dort m01, m02, m04 … m08 (fester Kurs „nt9“ auf dem Server).
 */
GrumiKursliste.bauen({
  name: "NT9R", kurs: "nt9", stufe: 9, zuege: ["R"], fach: "Natur und Technik", titel: "Natur und Technik 9R", pfad: "/api/n9", ordner: "9R/NT_9/",
  intro: "Organische Rohstoffe, Radioaktivität und Kernenergie – mit Versuchen, Animationen und Übungen für die Probe und den Quali.",
  andere: { zug: "M", titel: "Natur und Technik 9M", href: "9M/NT_9/übersicht_themen.html" },
  uebersicht: "übersicht_themen.html",
  // je Themenbereich eine Probe über alle seine Seiten (Server: nt9-probe-daten.js); nt9r-probe1 ist die frühere, lange Fassung
  proben: { "nt9r-rohstoffe": "rohstoffe", "nt9r-radioaktivitaet": "radioaktivitaet", "nt9r-kernenergie": "kernenergie", "nt9r-probe1": "rohstoffe",
    // Probe 2 (seit 20.10.2026): nur Ankreuzen und Zuordnen, 50 Punkte, M-Schlüssel, 30 Minuten, ohne Note-6-Regel
    "nt9r-rohstoffe2": "rohstoffe",
    // Probe 3 (seit 20.10.2026): nach Themen sortiert, mit Transfer, 80 Punkte, nur Ankreuzen und Zuordnen, 45 Minuten
    "nt9r-rohstoffe3": "rohstoffe",
    // Kunststoffe (seit 22.10.2026): Block-Probe über P1, P2, P4, P5 (P3 ist für 9R ein Zusatzmodul), übliche Testregeln
    "nt9r-kunststoffe": "kunststoffe",
    // Probe 2 Kunststoffe (seit 18.11.2026): dieselben Aufgaben wie in 9M (P1 bis P5, also auch P3 und der 9M-Stoff
    // Polymerisation und Ökobilanz), 58 Punkte, 45 Minuten, übliche Testregeln, R-Schlüssel
    "nt9r-kunststoffe2": "kunststoffe",
    // Nervensystem und Kommunikationstechnik (seit 26.11.2026): je eine Probe über alle Module N1 bis N6 bzw. T1 bis T4,
    // Animationen, offene Fragen, 45 Minuten, übliche Testregeln – dieselben Aufgaben wie in 9M, R-Schlüssel
    "nt9r-nervensystem": "nervensystem", "nt9r-kommunikationstechnik": "kommunikationstechnik" },
  themen: [
    {
      id: "rohstoffe", nr: "01", titel: "Organische Rohstoffe", kurz: "Organische Rohstoffe", icon: "🛢️",
      text: "Nachwachsende und fossile Rohstoffe: woher sie kommen, was man daraus macht und was das für Klima und Zukunft bedeutet.",
      module: [
        { id: "m1", kz: "O1", titel: "Kohlenstoff, Holz und Raps", href: "App12_Organische_Rohstoffe/modul-1.html", art: "Modul", offen: true, ls: "m01",
          text: "Grundlagen und Nutzung regenerativer Rohstoffe." },
        { id: "m2", kz: "O2", titel: "Biodiesel und Stärke", href: "App12_Organische_Rohstoffe/modul-2.html", art: "Modul", offen: true, ls: "m02",
          text: "Herstellung, Verwendung und Grenzen." },
        { id: "m3", kz: "O3", titel: "Entstehung fossiler Rohstoffe", href: "App12_Organische_Rohstoffe/modul-3.html", art: "Modul", offen: true, ls: "m04",
          text: "Fossilien, Erdöl, Erdgas und Kohle." },
        { id: "m4", kz: "O4", titel: "Erdölaufbereitung und Fraktionen", href: "App12_Organische_Rohstoffe/modul-4.html", art: "Modul", offen: true, ls: "m05",
          text: "Destillation, Fraktionen und Produkte." },
        { id: "m5", kz: "O5", titel: "Kohlenstoffkreislauf und Treibhauseffekt", href: "App12_Organische_Rohstoffe/modul-5.html", art: "Modul", offen: true, ls: "m06",
          text: "Klimawandel, CO₂-Experiment und Klima-Duell." },
        { id: "m6", kz: "O6", titel: "Erdöl – Rohstoff mit Zukunft?", href: "App12_Organische_Rohstoffe/modul-6.html", art: "Modul", offen: true, ls: "m07",
          text: "Verwendung, Nachhaltigkeit und wahrer Preis." },
        { id: "m7", kz: "O7", titel: "Ohne Erdöl – geht das?", href: "App12_Organische_Rohstoffe/modul-7.html", art: "Modul", offen: true, ls: "m08",
          text: "Ersatzstoffe, fünf Stimmen und Diskussionsrunde." },
        // Zusatzmodul (extra): gehört nicht zum Probeninhalt, ist aber wie alles in NT 9 von sich aus offen (offen: true)
        { id: "training", kz: "O8", extra: "m7", titel: "Training für die Probe", href: "App12_Organische_Rohstoffe/training-probe.html", art: "Fragenkatalog", offen: true, ls: "nt9-training-rohstoffe-r",
          text: "Alle Fragen der Probe und weitere wichtige Fragen aus den Modulen 1 bis 7 – deine Antworten werden gespeichert." }
      ]
    },
    // Radioaktivität (neu gebaut 19.11.2026): eigene Lernseiten in App14_Materie (ra-1 … ra-6) auf den NT-7-Bausteinen, Kennungen und
    // Kürzel R1–R6 bleiben (daran hängen die Proben nt9m-/nt9r-radioaktivitaet). Die alten Seiten unter 9/NT_9/App3…App8 bleiben im
    // Repo (Links aus früheren Rückgaben), sind aber nirgends mehr verlinkt. Wunsch der Lehrkraft (24.11.2026): alle Module für 9M und 9R gleich, auch der 9M-Stoff des
    // Schulbuchs (R4, N4, N5, T4) – nur die Proben haben verschiedene Notenschlüssel.
    {
      id: "radioaktivitaet", nr: "02", titel: "Radioaktivität", kurz: "Radioaktivität", icon: "☢️",
      text: "Woher Strahlung kommt, wie man sie nachweist, was sie im Körper bewirkt und wofür man sie nutzt.",
      lernmaterial: { titel: "Lernen für die Probe: Arbeitsblätter und Regelheft", text: "Zu jedem Modul ein kurzer Regelhefteintrag zum Abschreiben, ein einfaches Arbeitsblatt und die Lösung zum Selbst-Kontrollieren." },
      module: [
        { id: "ra-nachweis", kz: "R1", titel: "Radioaktivität: überall – und wie man sie nachweist", href: "App14_Materie/ra-1.html", art: "Modul", offen: true, ls: "nt9-ra-1", blatt: "R1",
          text: "Boden-, Höhen- und Eigenstrahlung, Becquerels Entdeckung, Fotoplatte, Nebelkammer und Geiger-Müller-Zähler mit Zählrate und Nullrate." },
        { id: "ra-strahlungsarten", kz: "R2", titel: "Alpha, Beta, Gamma – die Strahlungsarten", href: "App14_Materie/ra-2.html", art: "Modul", offen: true, ls: "nt9-ra-2", blatt: "R2",
          text: "Abschirmung mit Papier, Aluminium und Blei, Ablenkung im elektrischen Feld, Isotope und der Zerfall von Atomkernen." },
        { id: "ra-halbwertszeit", kz: "R3", titel: "Die Halbwertszeit", href: "App14_Materie/ra-3.html", art: "Modul", offen: true, ls: "nt9-ra-3", blatt: "R3",
          text: "Das Münzexperiment, die Zerfallskurve und die Halbwertszeiten verschiedener Isotope." },
        { id: "ra-c14", kz: "R4", titel: "Altersbestimmung mit der C-14-Methode", href: "App14_Materie/ra-4.html", art: "Modul", offen: true, ls: "nt9-ra-4", blatt: "R4",
          text: "Aktivität in Becquerel, woher C-14 kommt, die Zerfallskurve und das Alter von Ötzi." },
        { id: "ra-folgen", kz: "R5", titel: "Was Strahlung im Körper anrichtet", href: "App14_Materie/ra-5.html", art: "Modul", offen: true, ls: "nt9-ra-5", blatt: "R5",
          text: "Strahlendosis in Sievert, Früh- und Spätschäden, genetische Schäden und die Strahlenbelastung im Alltag." },
        { id: "ra-anwendung", kz: "R6", titel: "Radioaktivität in Medizin und Technik", href: "App14_Materie/ra-6.html", art: "Modul", offen: true, ls: "nt9-ra-6", blatt: "R6",
          text: "Szintigramm, Strahlentherapie und Leckstellensuche – Nutzen und Risiko." }
      ]
    },
    // Kernenergie (neu gebaut 19.11.2026): App14_Materie/ke-1 … ke-4, Kennungen und Kürzel K1–K4 bleiben (Proben nt9m-/nt9r-kernenergie).
    // Dazu das Kernkraftwerk in echter Größe (AR): App14_Materie/ar-kernkraftwerk/, verlinkt aus K3.
    {
      id: "kernenergie", nr: "03", titel: "Kernenergie", kurz: "Kernenergie", icon: "⚛️",
      text: "Von der Kernspaltung zum Kraftwerk – und welche Risiken damit verbunden sind.",
      lernmaterial: { titel: "Lernen für die Probe: Arbeitsblätter und Regelheft", text: "Zu jedem Modul ein kurzer Regelhefteintrag zum Abschreiben, ein einfaches Arbeitsblatt und die Lösung zum Selbst-Kontrollieren." },
      module: [
        { id: "ke-kernspaltung", kz: "K1", titel: "Die Entdeckung der Kernspaltung", href: "App14_Materie/ke-1.html", art: "Modul", offen: true, ls: "nt9-ke-1", blatt: "K1",
          text: "Hahn, Strassmann und Meitner, wie ein Urankern zerbricht und wie viel Energie dabei frei wird." },
        { id: "ke-kettenreaktion", kz: "K2", titel: "Die Kettenreaktion", href: "App14_Materie/ke-2.html", art: "Modul", offen: true, ls: "nt9-ke-2", blatt: "K2",
          text: "Von einer Spaltung zu vielen: Modellversuche, gesteuert oder ungesteuert, die Atombombe." },
        { id: "ke-kraftwerk", kz: "K3", titel: "So arbeitet ein Kernkraftwerk", href: "App14_Materie/ke-3.html", art: "Modul", offen: true, ls: "nt9-ke-3", blatt: "K3",
          text: "Druckwasserreaktor, Regelstäbe und Energiekette – mit dem Kraftwerk in echter Größe (AR)." },
        { id: "ke-risiken", kz: "K4", titel: "Risiken und Folgen der Kernenergie", href: "App14_Materie/ke-4.html", art: "Modul", offen: true, ls: "nt9-ke-4", blatt: "K4",
          text: "Tschernobyl, Fukushima, radioaktiver Abfall und die Frage: Kernenergie – ja oder nein?" }
      ]
    },
    // Kunststoffe (seit 22.10.2026 auch 9R): dieselben Lernseiten wie 9M im eigenen Ordner App13_Kunststoffe (gleiche Dateien,
    // der Zug kommt aus dem Ordner). Was das Schulbuch als 9M-Stoff kennzeichnet, ist für 9R freiwillig: die Polymerisation
    // (Modul 2) und die Ökobilanz (Modul 5) als Plus-Teile, die Verarbeitung (P3) als Zusatzmodul (extra, nicht in der Probe).
    {
      id: "kunststoffe", nr: "04", titel: "Kunststoffe", kurz: "Kunststoffe", icon: "🧴",
      text: "Woraus Kunststoffe bestehen, welche Gruppen es gibt – und was mit dem Plastikmüll passiert.",
      module: [
        { id: "ku1", kz: "P1", titel: "Vielfalt der Kunststoffe", href: "App13_Kunststoffe/modul-1.html", art: "Modul", offen: true, ls: "nt9-ku1", blatt: "P1",
          text: "Kunststoffe im Alltag, Vor- und Nachteile, Recycling-Code und Eigenschaften im Test." },
        { id: "ku2", kz: "P2", titel: "Bau und Einteilung der Kunststoffe", href: "App13_Kunststoffe/modul-2.html", art: "Modul", offen: true, ls: "nt9-ku2", blatt: "P2",
          text: "Makromoleküle, Thermoplaste, Elastomere und Duroplaste – die Polymerisation als Zusatz." },
        { id: "ku3", kz: "P3", extra: "ku2", titel: "Kunststoffe verarbeiten (Zusatz)", href: "App13_Kunststoffe/modul-3.html", art: "Zusatzmodul", offen: true, ls: "nt9-ku3", blatt: "P3",
          text: "Freiwillig: Granulat, Schmelzpresse, Strangpressen, Spritzgießen und Folienblasen." },
        { id: "ku4", kz: "P4", titel: "Kunststoffmüll und Recycling", href: "App13_Kunststoffe/modul-4.html", art: "Modul", offen: true, ls: "nt9-ku4", blatt: "P4",
          text: "Plastik im Meer, Mikroplastik, gelber Sack und die drei Wege der Verwertung." },
        { id: "ku5", kz: "P5", titel: "Die PET-Flasche: Kreislauf und Mehrweg", href: "App13_Kunststoffe/modul-5.html", art: "Modul", offen: true, ls: "nt9-ku5", blatt: "P5",
          text: "Vom Erdöl zur Flasche und zurück, Einweg oder Mehrweg – die Ökobilanz als Zusatz." }
      ]
    },
    // In Vorbereitung (ohne href): Die Kinder sehen diese Bereiche nicht, in der Verwaltung stehen sie als Ausblick.
    // Ein Kürzel bekommt eine Seite erst, wenn es sie gibt.
    {
      id: "kohlenstoff", nr: "05", titel: "Kohlenwasserstoffe, Alkohol und Kohlenhydrate", kurz: "Kohlenstoff-Chemie", icon: "🧪",
      text: "Wie Kohlenstoff Ketten bildet – und was daraus alles entsteht.",
      module: [
        { id: "kw-kohlenwasserstoffe", titel: "Kohlenwasserstoffe" },
        { id: "kw-biomolekuele", titel: "Alkohol und Kohlenhydrate" }
      ]
    },
    {
      id: "mensch", nr: "06", titel: "Mensch und Gesundheit", kurz: "Mensch und Gesundheit", icon: "🧬",
      text: "Zellen, Erbinformation und angewandte Genetik.",
      module: [
        { id: "mg-zellen", titel: "Zellen – Bausteine des Lebens" },
        { id: "mg-genetik", titel: "Angewandte Genetik" }
      ]
    },
    // Grundlagen der Kommunikation (neu 19.11.2026): das Nervensystem, App14_Materie/ns-1 … ns-6, Kürzel N1–N6.
    {
      id: "nervensystem", nr: "07", titel: "Grundlagen der Kommunikation: das Nervensystem", kurz: "Nervensystem", icon: "🧠",
      text: "Vom Reiz zur Reaktion: wie Sinnesorgane, Nerven und Gehirn zusammenarbeiten, wie wir lernen und wie man das Nervensystem schützt.",
      lernmaterial: { titel: "Lernen für die Probe: Arbeitsblätter und Regelheft", text: "Zu jedem Modul ein kurzer Regelhefteintrag zum Abschreiben, ein einfaches Arbeitsblatt und die Lösung zum Selbst-Kontrollieren." },
      module: [
        { id: "ns-reiz", kz: "N1", titel: "Vom Reiz zur Reaktion", href: "App14_Materie/ns-1.html", art: "Modul", offen: true, ls: "nt9-ns-1", blatt: "N1",
          text: "Reize, Sinnesorgane, der Weg zum Gehirn und zurück zum Muskel – mit Reaktionstest." },
        { id: "ns-aufbau", kz: "N2", titel: "Der Aufbau des Nervensystems", href: "App14_Materie/ns-2.html", art: "Modul", offen: true, ls: "nt9-ns-2", blatt: "N2",
          text: "Zentrales und peripheres Nervensystem, die Teile des Gehirns, Rückenmark, Nervenzelle und Synapse." },
        { id: "ns-gedaechtnis", kz: "N3", titel: "Gedächtnis und Lernen", href: "App14_Materie/ns-3.html", art: "Modul", offen: true, ls: "nt9-ns-3", blatt: "N3",
          text: "Ultrakurzzeit-, Kurzzeit- und Langzeitgedächtnis, Lernkanäle, Vergessenskurve und Lerntipps." },
        { id: "ns-reflexe", kz: "N4", titel: "Reflexe schützen", href: "App14_Materie/ns-4.html", art: "Modul", offen: true, ls: "nt9-ns-4", blatt: "N4",
          text: "Der Reflexbogen über das Rückenmark, Kniesehnen- und Lidschlussreflex, Reflex oder bewusste Handlung?" },
        { id: "ns-vegetativ", kz: "N5", titel: "Das vegetative Nervensystem", href: "App14_Materie/ns-5.html", art: "Modul", offen: true, ls: "nt9-ns-5", blatt: "N5",
          text: "Sympathikus und Parasympathikus als Gegenspieler: Leistung oder Erholung." },
        { id: "ns-schutz", kz: "N6", titel: "Das Nervensystem braucht Schutz", href: "App14_Materie/ns-6.html", art: "Modul", offen: true, ls: "nt9-ns-6", blatt: "N6",
          text: "Schädel und Hirnhäute, Gehirnerschütterung, Schlaganfall, Querschnittslähmung und Stress." }
      ]
    },
    // Kommunikations- und Informationstechnik (neu 19.11.2026): App14_Materie/kt-1 … kt-4, Kürzel T1–T4.
    {
      id: "kommunikationstechnik", nr: "08", titel: "Kommunikations- und Informationstechnik", kurz: "Kommunikationstechnik", icon: "📡",
      text: "Mikrofon und Lautsprecher, Sensoren, Dioden und Transistoren: wie Technik Informationen aufnimmt, verarbeitet und ausgibt.",
      lernmaterial: { titel: "Lernen für die Probe: Arbeitsblätter und Regelheft", text: "Zu jedem Modul ein kurzer Regelhefteintrag zum Abschreiben, ein einfaches Arbeitsblatt und die Lösung zum Selbst-Kontrollieren." },
      module: [
        { id: "kt-mikrofon", kz: "T1", titel: "Mikrofon und Lautsprecher", href: "App14_Materie/kt-1.html", art: "Modul", offen: true, ls: "nt9-kt-1", blatt: "T1",
          text: "Wie Schall zu Strom wird und Strom zu Schall – und die Erfindung des Telefons." },
        { id: "kt-sensoren", kz: "T2", titel: "Sensoren – elektronische Umweltfühler", href: "App14_Materie/kt-2.html", art: "Modul", offen: true, ls: "nt9-kt-2", blatt: "T2",
          text: "Heißleiter und Kaltleiter, Lichtsensoren, Rauchmelder, Reed-Kontakt und die Sensoren im Smartphone." },
        { id: "kt-diode", kz: "T3", titel: "Diode und Leuchtdiode", href: "App14_Materie/kt-3.html", art: "Modul", offen: true, ls: "nt9-kt-3", blatt: "T3",
          text: "LEDs richtig anschließen, Dioden als Einbahnstraße für den Strom, aus Wechselstrom wird Gleichstrom." },
        { id: "kt-transistor", kz: "T4", titel: "Transistoren – Schalter und Verstärker", href: "App14_Materie/kt-4.html", art: "Modul", offen: true, ls: "nt9-kt-4", blatt: "T4",
          text: "Das Wassermodell, Steuer- und Arbeitsstromkreis, eine Lichtschranke bauen." }
      ]
    }
  ]
});
