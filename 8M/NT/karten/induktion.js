/* Lernkarten zum Modul „Induktion: Spannung aus Bewegung“ (NT 8). Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("induktion", [
  { id: "k1", art: "begriff", v: "Was bedeutet Induktion?", h: "In einer Spule entsteht eine Spannung, wenn sich das Magnetfeld in der Spule ändert." },
  { id: "k2", art: "versuch", v: "Ein Magnet wird in eine Spule geschoben. Was zeigt der Spannungsmesser?", h: "Einen Ausschlag – solange der Magnet sich bewegt." },
  { id: "k3", art: "ursache", v: "Der Magnet ruht in der Spule. Was zeigt der Spannungsmesser?", h: "0. In Ruhe ändert sich das Magnetfeld nicht, also entsteht keine Spannung." },
  { id: "k4", art: "vergleich", v: "Hineinschieben und Herausziehen: Was unterscheidet den Ausschlag?", h: "Die Richtung. Der Zeiger schlägt beim Herausziehen zur anderen Seite aus." },
  { id: "k5", art: "ursache", v: "Je schneller der Magnet bewegt wird, desto …", h: "… größer ist die Induktionsspannung." },
  { id: "k6", art: "transfer", v: "Die Induktionsspannung soll größer werden. Was kannst du ändern?", h: "Schneller bewegen, mehr Windungen nehmen oder einen stärkeren Magneten verwenden." },
  { id: "k7", art: "bild", v: "Was zeigt das Bild: Wann schlägt der Zeiger aus?",
    bild: '<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg"><rect x="120" y="40" width="80" height="44" rx="6" fill="#fff4dc" stroke="#b9722a" stroke-width="2"/><g stroke="#b9722a" stroke-width="2"><line x1="132" y1="42" x2="132" y2="82"/><line x1="148" y1="42" x2="148" y2="82"/><line x1="164" y1="42" x2="164" y2="82"/><line x1="180" y1="42" x2="180" y2="82"/><line x1="192" y1="42" x2="192" y2="82"/></g><rect x="14" y="52" width="40" height="20" fill="#1b8a4b"/><rect x="54" y="52" width="40" height="20" fill="#c0392b"/><path d="M98 38 h26 m-8 -6 l8 6 l-8 6" fill="none" stroke="#e0453a" stroke-width="3"/><text x="110" y="104" text-anchor="middle" font-size="12" font-weight="700" fill="#15212b">Magnet bewegt sich zur Spule</text></svg>',
    h: "Der Zeiger schlägt aus, solange sich der Magnet bewegt und das Feld in der Spule sich ändert." },
  { id: "k8", art: "anwendung", v: "Wie entsteht beim Fahrraddynamo die Spannung für die Lampe?", h: "Das Rad dreht einen Magneten an einer Spule vorbei. Das Magnetfeld in der Spule ändert sich." },
  { id: "k9", art: "anwendung", v: "Wie leuchtet eine Schüttel-Taschenlampe ohne Batterie?", h: "Beim Schütteln bewegt sich ein Magnet durch eine Spule. Dabei entsteht Induktionsspannung." },
  { id: "k10", art: "fehler", v: "Finde den Fehler: „Ein starker Magnet in der Spule erzeugt immer Spannung.“", h: "Falsch. Nur wenn sich das Magnetfeld in der Spule ändert, zum Beispiel durch Bewegung." },
  { id: "k11", art: "transfer", v: "Warum geht die Dynamolampe an der Ampel aus?", h: "Das Rad steht, der Magnet ruht. Das Feld in der Spule ändert sich nicht." },
  { id: "k12", art: "versuch", v: "Du willst prüfen, ob die Windungszahl die Spannung beeinflusst. Was bleibt gleich?", h: "Magnet und Tempo. Nur die Windungszahl wird geändert.", m: true },
  { id: "k13", art: "ursache", v: "Warum entsteht Spannung, wenn man die Spule über einen ruhenden Magneten schiebt?", h: "Es zählt die Bewegung zwischen beiden: Das Magnetfeld in der Spule ändert sich.", m: true },
  { id: "k14", art: "transfer", v: "Beim kabellosen Laden bewegt sich kein Magnet. Warum entsteht trotzdem Spannung?", h: "Das Magnetfeld der Ladespule ändert sich dauernd und induziert Spannung in der Handyspule.", m: true },
  { id: "k15", art: "formel", v: "Bei 600 Windungen: 6 Skalenteile. Was erwartest du bei 1200 Windungen?", h: "12 Skalenteile. Doppelte Windungszahl, doppelte Spannung.", m: true }
]);
