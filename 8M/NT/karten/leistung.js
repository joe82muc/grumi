/* Lernkarten zum Modul „Elektrische Leistung und Stromkosten“ (NT 8). Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("leistung", [
  { id: "k1", art: "begriff", v: "Was bedeutet „Leistung“ in der Physik?", h: "Die Leistung sagt, wie viel Energie ein Gerät in jeder Sekunde umwandelt. Einheit: Watt (W)." },
  { id: "k2", art: "formel", v: "Wie berechnet man die elektrische Leistung?", h: "P = U · I. Spannung in Volt mal Stromstärke in Ampere ergibt die Leistung in Watt." },
  { id: "k3", art: "begriff", v: "Wie viel Watt sind 1 kW?", h: "1 kW = 1000 W. Zum Beispiel sind 2000 W gleich 2 kW." },
  { id: "k4", art: "bild", v: "Was verrät dir dieses Typenschild?",
    bild: '<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="180" height="100" rx="8" fill="#e8edf1" stroke="#566674" stroke-width="2"/><text x="100" y="34" text-anchor="middle" font-size="12" font-weight="700" fill="#566674">TYPENSCHILD</text><text x="100" y="60" text-anchor="middle" font-size="14" font-weight="700" fill="#15212b">230 V ~</text><text x="100" y="92" text-anchor="middle" font-size="22" font-weight="800" fill="#c0392b">1800 W</text></svg>',
    h: "Das Gerät braucht 230 V und hat eine Leistung von 1800 W, also 1,8 kW. Es wandelt in jeder Sekunde viel Energie um." },
  { id: "k5", art: "begriff", v: "Was bedeutet 1 kWh?", h: "Ein Gerät mit 1 kW läuft 1 Stunde. Dabei wird 1 kWh elektrische Energie umgewandelt." },
  { id: "k6", art: "versuch", v: "Wie findest du heraus, wie viel Energie ein Gerät wirklich braucht?", h: "Mit einem Energiemessgerät im Zwischenstecker: zwischen Steckdose und Gerät stecken und auf dem Display ablesen." },
  { id: "k7", art: "transfer", v: "Ein Wasserkocher (2 kW) läuft 30 Minuten. 1 kWh kostet 35 ct. Was kostet das?", h: "2 kW · 0,5 h = 1 kWh. 1 kWh · 35 ct = 35 ct." },
  { id: "k8", art: "vergleich", v: "Warum ist eine LED-Lampe sparsamer als eine Glühlampe?", h: "Sie leuchtet ähnlich hell, hat aber nur etwa 8 W statt 60 W. Sie wandelt weniger Energie um." },
  { id: "k9", art: "ursache", v: "Warum kostet Stand-by Geld, obwohl das Gerät „aus“ wirkt?", h: "Das Gerät braucht rund um die Uhr ein wenig Energie. Über ein Jahr summiert sich das." },
  { id: "k10", art: "begriff", v: "Was zeigt das Energielabel?", h: "Mit Buchstaben von A bis G, wie sparsam ein Gerät ist. A ist sehr sparsam, G hat einen hohen Energiebedarf." },
  { id: "k11", art: "fehler", v: "Finde den Fehler: „Das Gerät verbraucht Energie.“", h: "Energie geht nicht verloren, sie wird umgewandelt – oft auch in Wärme, die man nicht nutzen kann." },
  { id: "k12", art: "anwendung", v: "Nenne zwei Wege, Stromkosten zu senken.", h: "Zum Beispiel Geräte mit Steckerleiste ganz ausschalten und sparsame Geräte mit gutem Energielabel kaufen." },
  { id: "k13", art: "formel", v: "Wie berechnest du die Energie aus Leistung und Zeit?", h: "E = P · t. Mit P in kW und t in h erhältst du E in kWh.", m: true },
  { id: "k14", art: "formel", v: "Wann nutzt du E = U · I · t?", h: "Wenn Spannung, Stromstärke und Zeit bekannt sind. Erst P = U · I ausrechnen, dann mal t.", m: true },
  { id: "k15", art: "transfer", v: "Stand-by mit 12 W, ein Jahr lang (8760 h), 35 ct je kWh. Jahreskosten?", h: "0,012 kW · 8760 h = 105,12 kWh. Mal 0,35 € ergibt etwa 36,80 €.", m: true },
  { id: "k16", art: "begriff", v: "Wie rechnest du mW, W, kW, MW und GW um?", h: "Jeder Schritt ist das 1000-Fache: 1 GW = 1000 MW, 1 kW = 1000 W, 1 W = 1000 mW. Außerdem gilt 1 VA = 1 W.", m: true },
  { id: "k17", art: "ursache", v: "Ein Gerät hat 1150 W und hängt an 230 V. Wie groß ist die Stromstärke?", h: "Aus P = U · I folgt I = P : U = 1150 W : 230 V = 5 A.", m: true }
]);
