/* Lernkarten zum Modul „Diode und Leuchtdiode“ (NT 9, Kommunikationstechnik 3, Modul-id kt-diode). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("kt-diode", [
  { id: "k1", art: "begriff", v: "Was bedeutet die Abkürzung LED?", h: "Light Emitting Diode – englisch für „Licht ausstrahlende Diode“. Auf Deutsch: Leuchtdiode." },
  { id: "k2", art: "vergleich", v: "Nenne vier Vorteile von LEDs gegenüber Glühlampen.", h: "Sie brauchen viel weniger Energie, werden nicht so heiß, halten viel länger und es gibt sie in allen Bauformen, Lichtstärken und Lichtfarben." },
  { id: "k3", art: "anwendung", v: "Wo findest du heute LEDs? Nenne fünf Beispiele.", h: "Lampen im Haus, Displays von Smartphones und Fernsehern, Taschenlampen und Fahrradlichter, Autoscheinwerfer, Straßenlampen, Partylichter." },
  { id: "k4", art: "ursache", v: "Warum dürfen Glühlampen für den Haushalt in Europa nicht mehr hergestellt werden?", h: "Sie verschwenden Energie: Den größten Teil machen sie zu Wärme, nur wenig zu Licht." },
  { id: "k5", art: "bild", v: "Welcher Draht dieser LED kommt an den Pluspol?",
    bild: '<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg">' +
      '<g stroke="#8e98a1" stroke-width="4"><line x1="88" y1="66" x2="88" y2="122"/><line x1="112" y1="66" x2="112" y2="100"/></g>' +
      '<rect x="74" y="58" width="52" height="10" rx="2" fill="#e05247" stroke="#a52a23" stroke-width="1.5"/>' +
      '<path d="M80 60 V32 A20 20 0 0 1 120 32 V60 Z" fill="#ef6a5e" stroke="#a52a23" stroke-width="2"/>' +
      '<g font-family="Arial" font-size="18" font-weight="700" fill="#15212b" text-anchor="middle"><text x="70" y="120">A</text><text x="132" y="100">B</text></g></svg>',
    h: "A, der längere Draht (Anode). Der kürzere Draht B (Kathode) kommt an den Minuspol." },
  { id: "k6", art: "ursache", v: "Was passiert, wenn man eine LED verkehrt herum anschließt?", h: "Sie bleibt dunkel. Eine LED lässt den Strom nur in einer Richtung durch." },
  { id: "k7", art: "ursache", v: "Wozu braucht eine LED einen Schutzwiderstand?", h: "Er begrenzt die Stromstärke. Ohne ihn fließt zu viel Strom – die LED wird zu heiß und geht kaputt." },
  { id: "k8", art: "bild", v: "Welches Schaltzeichen gehört zur Diode, welches zur Leuchtdiode?",
    bild: '<svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">' +
      '<g stroke="#15212b" stroke-width="2.5"><line x1="15" y1="38" x2="105" y2="38"/><line x1="135" y1="38" x2="225" y2="38"/></g>' +
      '<path d="M50 26 L50 50 L68 38 Z" fill="#15212b"/><line x1="68" y1="25" x2="68" y2="51" stroke="#15212b" stroke-width="3"/>' +
      '<path d="M170 26 L170 50 L188 38 Z" fill="#15212b"/><line x1="188" y1="25" x2="188" y2="51" stroke="#15212b" stroke-width="3"/>' +
      '<g stroke="#15212b" stroke-width="1.6"><line x1="184" y1="23" x2="194" y2="13"/><line x1="190" y1="27" x2="200" y2="17"/></g>' +
      '<g fill="#15212b"><path d="M196 11 L189 12 L194 17 Z"/><path d="M202 15 L195 16 L200 21 Z"/></g>' +
      '<g font-family="Arial" font-size="18" font-weight="700" fill="#15212b" text-anchor="middle"><text x="60" y="74">A</text><text x="180" y="74">B</text></g></svg>',
    h: "A ist die Diode: Dreieck mit Strich. B ist die Leuchtdiode (LED): zusätzlich zwei Pfeile nach außen für das Licht." },
  { id: "k9", art: "begriff", v: "Was macht eine Diode?", h: "Sie lässt den Strom nur in einer Richtung durch – wie eine Einbahnstraße." },
  { id: "k10", art: "begriff", v: "Woran erkennst du die Minus-Seite (Kathode) einer Universaldiode?", h: "Am hellen Ring. Im Schaltzeichen steht dafür der Strich." },
  { id: "k11", art: "versuch", v: "Durchlassrichtung und Sperrrichtung: Was ist der Unterschied?", h: "Durchlassrichtung: Die Minus-Seite der Diode (Ring) ist mit dem Minuspol verbunden – Strom fließt, das Lämpchen leuchtet. Sperrrichtung: andersherum – kein Strom." },
  { id: "k12", art: "anwendung", v: "Wie schützt eine Diode ein Gerät mit Batterien?", h: "Legt jemand die Batterien falsch herum ein, steht die Diode in Sperrrichtung. Es fließt kein Strom durch die Elektronik – sie bleibt heil." },
  { id: "k13", art: "vergleich", v: "Gleichstrom und Wechselstrom – was ist der Unterschied?", h: "Gleichstrom fließt immer in dieselbe Richtung (Batterie, Akku). Wechselstrom ändert ständig seine Richtung (Steckdose: 50-mal in der Sekunde hin und her)." },
  { id: "k14", art: "versuch", v: "Was zeigt ein Oszilloskop vor und hinter einer Diode – und wozu nutzt man das?", h: "Vor der Diode eine Welle mit Bergen und Tälern (Wechselspannung), dahinter nur noch die Berge, die positiven Halbwellen. So machen Dioden in Netzteilen und Ladegeräten aus Wechselstrom Gleichstrom." }
]);
