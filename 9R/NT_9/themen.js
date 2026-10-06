/* Natur und Technik 9R: alle Lernseiten in einer Liste – Grundlage für die Übersicht der Kinder
 * (übersicht_themen.html), die Sperre auf jeder Seite (js/kurs-sperre.js) und das Freischalten in der Verwaltung
 * (Klasse → Natur und Technik). Gerüst und Erklärung der Felder: js/kursliste.js (vor dieser Datei einbinden).
 *
 * Kürzel (kz): Buchstabe des Themenbereichs + Nummer – O = Organische Rohstoffe, R = Radioaktivität, K = Kernenergie.
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
  proben: { "nt9r-rohstoffe": "rohstoffe", "nt9r-radioaktivitaet": "radioaktivitaet", "nt9r-kernenergie": "kernenergie", "nt9r-probe1": "rohstoffe" },
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
          text: "Ersatzstoffe, fünf Stimmen und Diskussionsrunde." }
      ]
    },
    {
      id: "radioaktivitaet", nr: "02", titel: "Radioaktivität", kurz: "Radioaktivität", icon: "☢️",
      text: "Woher Strahlung kommt, wie man sie nachweist, was sie im Körper bewirkt und wofür man sie nutzt.",
      module: [
        { id: "ra-nachweis", kz: "R1", titel: "Radioaktivität und ihr Nachweis", href: "../../9/NT_9/App3_Radioaktivität und ihr Nachweis/uebersich_gruppenarbeit.html", art: "Gruppenarbeit", offen: true,
          auch: ["../../9/NT_9/App3_Radioaktivität und ihr Nachweis/radioaktivitaet-ueberall.html", "../../9/NT_9/App3_Radioaktivität und ihr Nachweis/nachweis-radioaktiver-strahlung.html",
            "../../9/NT_9/App3_Radioaktivität und ihr Nachweis/arbeitsauftraege-text1.html", "../../9/NT_9/App3_Radioaktivität und ihr Nachweis/arbeitsauftraege-text2.html",
            "../../9/NT_9/App3_Radioaktivität und ihr Nachweis/quiz.html"],
          text: "Woher Radioaktivität kommt und wie man sie nachweist – zwei Texte, Arbeitsaufträge und ein Quiz." },
        { id: "ra-strahlungsarten", kz: "R2", titel: "Die Strahlungsarten", href: "../../9/NT_9/App4_Strahlungsarten/strahlungsarten.html", art: "Modul", offen: true,
          text: "Alpha-, Beta- und Gammastrahlung: Eigenschaften und Abschirmung." },
        { id: "ra-halbwertszeit", kz: "R3", titel: "Die Halbwertszeit", href: "../../9/NT_9/App5_Halbwertszeit/halbwertszeit.html", art: "Modul", offen: true,
          text: "Wie schnell radioaktive Stoffe zerfallen – mit Diagrammen." },
        { id: "ra-c14", kz: "R4", titel: "Die C-14-Methode", href: "../../9/NT_9/App6_C14_Methode/c14methode_neu.html", art: "Modul", offen: true,
          text: "Wie man mit Radioaktivität das Alter von Funden bestimmt." },
        { id: "ra-folgen", kz: "R5", titel: "Biologische Folgen von Strahlung", href: "../../9/NT_9/App7_Folgen/folgen_strahlung.html", art: "Modul", offen: true,
          text: "Was Strahlung in Zellen und im Körper anrichtet – und wie man sich schützt." },
        { id: "ra-anwendung", kz: "R6", titel: "Anwendung radioaktiver Strahlung", href: "../../9/NT_9/App8_Anwendung radioaktiver Strahlung/anwendung_radioaktiver_strahlung.html", art: "Übung", offen: true,
          text: "Wofür radioaktive Strahlung genutzt wird." }
      ]
    },
    {
      id: "kernenergie", nr: "03", titel: "Kernenergie", kurz: "Kernenergie", icon: "⚛️",
      text: "Von der Kernspaltung zum Kraftwerk – und welche Risiken damit verbunden sind.",
      module: [
        { id: "ke-kernspaltung", kz: "K1", titel: "Die Kernspaltung", href: "../../9/NT_9/App9_Die Kernspaltung/kernspaltung.html", art: "Modul", offen: true,
          text: "Was passiert, wenn ein Neutron einen Uran-Kern trifft." },
        { id: "ke-kettenreaktion", kz: "K2", titel: "Die Kettenreaktion", href: "../../9/NT_9/App10_Die Kettenreaktion/kettenreaktion.html", art: "Modul", offen: true,
          text: "Wie aus einer Spaltung viele werden – und wie man das steuert." },
        { id: "ke-kraftwerk", kz: "K3", titel: "Arbeitsweise eines Kernkraftwerks", href: "../../9/NT_9/App11_Druckwasser/kernkraftwerk.html", art: "Modul", offen: true,
          auch: ["../../9/NT_9/App11_Druckwasser/app11_druckwasser_quiz.html"],
          text: "Druckwasserreaktor: von der Kernspaltung über Turbine und Generator zum Strom – mit Filmquiz." },
        { id: "ke-risiken", kz: "K4", titel: "Risiken und Folgen der Kernenergie", href: "../../9/NT_9/App2_Risiken und Gefahren der Kernenergie/übersicht_gruppenarbeit.html", art: "Gruppenarbeit", offen: true,
          auch: ["../../9/NT_9/App2_Risiken und Gefahren der Kernenergie/Tschernobyl/kernenergie-tschernobyl.html", "../../9/NT_9/App2_Risiken und Gefahren der Kernenergie/Fukushima/kernenergie-fukushima.html",
            "../../9/NT_9/App2_Risiken und Gefahren der Kernenergie/Radioaktiver_Abfall/kernenergie-radioaktiver-abfall.html", "../../9/NT_9/App2_Risiken und Gefahren der Kernenergie/quiz2.html",
            "../../9/NT_9/App2_Risiken und Gefahren der Kernenergie/40_jahre_tschernobyl.html"],
          text: "Tschernobyl, Fukushima und radioaktiver Abfall – Gruppenarbeit mit Quiz." }
      ]
    },
    // In Vorbereitung (ohne href): Die Kinder sehen diese Bereiche nicht, in der Verwaltung stehen sie als Ausblick.
    // Ein Kürzel bekommt eine Seite erst, wenn es sie gibt.
    {
      id: "kohlenstoff", nr: "04", titel: "Kohlenwasserstoffe, Kunststoffe und Biomoleküle", kurz: "Kohlenstoff-Chemie", icon: "🧪",
      text: "Wie Kohlenstoff Ketten bildet – und was daraus alles entsteht.",
      module: [
        { id: "kw-kohlenwasserstoffe", titel: "Kohlenwasserstoffe" },
        { id: "kw-kunststoffe", titel: "Kunststoffe" },
        { id: "kw-biomolekuele", titel: "Alkohol und Kohlenhydrate" }
      ]
    },
    {
      id: "mensch", nr: "05", titel: "Mensch und Gesundheit", kurz: "Mensch und Gesundheit", icon: "🧬",
      text: "Zellen, Erbinformation und angewandte Genetik.",
      module: [
        { id: "mg-zellen", titel: "Zellen – Bausteine des Lebens" },
        { id: "mg-genetik", titel: "Angewandte Genetik" }
      ]
    },
    {
      id: "kommunikation", nr: "06", titel: "Kommunikation und Informationstechnik", kurz: "Kommunikation", icon: "📡",
      text: "Wie Informationen übertragen werden.",
      module: [
        { id: "ko-grundlagen", titel: "Grundlagen der Kommunikation" },
        { id: "ko-technik", titel: "Kommunikations- und Informationstechnik" }
      ]
    }
  ]
});
