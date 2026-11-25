/* Lernkarten zum Modul „Transistoren – Schalter und Verstärker“ (NT 9, Kommunikationstechnik 4, Modul-id kt-transistor). Trainer: 8M/NT/karten.js.
   Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("kt-transistor", [
  { id: "k1", art: "begriff", v: "Was ist ein Transistor?", h: "Ein elektronisches Bauteil mit drei Anschlüssen. Mit einem kleinen Strom steuert er einen großen – als Schalter oder als Verstärker." },
  { id: "k2", art: "bild", v: "Wie heißen die drei Anschlüsse dieses Schaltzeichens?",
    bild: '<svg viewBox="0 0 200 130" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#15212b" stroke-width="2.4" stroke-linecap="round">' +
      '<path d="M30 65 H70 M110 33 V8 M110 97 V122"/><circle cx="100" cy="65" r="22" fill="#fff"/><line x1="64" y1="65" x2="92" y2="65"/>' +
      '<line x1="92" y1="52" x2="92" y2="78" stroke-width="4.4" stroke-linecap="butt"/><line x1="92" y1="59" x2="110" y2="48"/><line x1="110" y1="48" x2="110" y2="29"/>' +
      '<line x1="92" y1="71" x2="110" y2="82"/><line x1="110" y1="82" x2="110" y2="101"/></g><path d="M108.6 81.1 L100.3 80.3 L104 74.1 Z" fill="#15212b"/>' +
      '<g font-family="Arial" font-size="16" font-weight="700" fill="#566674"><text x="124" y="22">?</text><text x="38" y="56">?</text><text x="124" y="118">?</text></g></svg>',
    h: "Oben: Kollektor (C). Von der Seite: Basis (B). Unten mit dem Pfeil: Emitter (E)." },
  { id: "k3", art: "begriff", v: "Welche Bauformen von Transistoren gibt es?", h: "Transistoren im Metallgehäuse, im Plastikgehäuse mit drei Beinen und winzige SMD-Bauteile, die direkt auf die Platine gelötet werden." },
  { id: "k4", art: "begriff", v: "Was ist der Steuerstromkreis, was der Arbeitsstromkreis?", h: "Steuerstromkreis: über Basis und Emitter, kleiner Strom – er steuert. Arbeitsstromkreis: über Kollektor und Emitter, großer Strom – er bringt Lampe, Summer oder Lautsprecher zum Arbeiten." },
  { id: "k5", art: "ursache", v: "Erkläre das Wassermodell des Transistors.", h: "Ein kleiner Wasserstrom von B nach E öffnet die kleine Klappe. Sie ist fest mit der großen Klappe verbunden. Deshalb öffnet sich auch die große – viel Wasser fließt von C nach E. Kleiner Strom steuert großen Strom." },
  { id: "k6", art: "vergleich", v: "Was entspricht beim Wasserhahn der Basis des Transistors?", h: "Der Griff: Mit einer kleinen Drehung steuert man einen großen Wasserstrahl – so steuert ein kleiner Strom an der Basis einen großen Strom zwischen Kollektor und Emitter." },
  { id: "k7", art: "anwendung", v: "Wie arbeitet ein Transistor als Verstärker?", h: "Das Mikrofon liegt im Steuerstromkreis. Sein schwacher Strom steuert im Arbeitsstromkreis einen etwa 100-mal stärkeren Strom mit derselben Form – genug für den Lautsprecher. Verstärker haben meist mehrere Stufen." },
  { id: "k8", art: "begriff", v: "Wann schaltet ein Transistor den Arbeitsstromkreis ein?", h: "Wenn die Spannung zwischen Basis und Emitter mehr als 0,6 V beträgt. Dann fließt genug Strom durch die Basis." },
  { id: "k9", art: "versuch", v: "Lichtschranke: Was passiert, wenn jemand durch den Lichtstrahl läuft?", h: "Am LDR wird es dunkel, sein Widerstand wird groß. Die Spannung zwischen Basis und Emitter steigt über 0,6 V. Der Transistor schaltet den Arbeitsstromkreis ein – die Lampe leuchtet." },
  { id: "k10", art: "anwendung", v: "Wie wird aus der Lichtschranke eine Alarmanlage – und wie ein Schubladen-Alarm?", h: "Ein Summer statt der Lampe macht die Alarmanlage. Vertauscht man LDR und Widerstand, piept der Summer, sobald Licht auf den LDR fällt – zum Beispiel, wenn jemand eine dunkle Schublade öffnet." },
  { id: "k11", art: "begriff", v: "Welche Regeln gelten für Schaltpläne?", h: "Leitungen sind gerade, nur waagerecht oder senkrecht. Ein dicker Punkt = Verbindung. Kreuzen ohne Punkt = keine Verbindung. Nur ein geschlossener Stromkreis funktioniert." },
  { id: "k12", art: "bild", v: "Welche Bauteile zeigen diese Schaltzeichen (von links nach rechts)?",
    bild: '<svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#15212b" stroke-width="2.4">' +
      '<path d="M8 46 H24 M56 46 H72"/><rect x="24" y="38" width="32" height="16" fill="#fff"/><path d="M28 14 L36 32 M40 14 L48 32"/>' +
      '<path d="M108 46 H143 M151 46 H186"/><line x1="143" y1="32" x2="143" y2="60" stroke-width="3.5"/><line x1="151" y1="32" x2="151" y2="60" stroke-width="3.5"/>' +
      '<path d="M222 54 H234 M262 54 H292"/><path d="M234 54 A14 14 0 0 1 262 54 Z" fill="#fff"/></g>' +
      '<g fill="#15212b"><path d="M36 32 L30.5 28.6 L35.6 26.2 Z"/><path d="M48 32 L42.5 28.6 L47.6 26.2 Z"/></g>' +
      '<g font-family="Arial" font-size="15" font-weight="700" fill="#566674" text-anchor="middle"><text x="40" y="76">A</text><text x="147" y="76">B</text><text x="248" y="76">C</text></g></svg>',
    h: "A: Fotowiderstand (LDR) – Rechteck mit zwei Pfeilen, die auf ihn zeigen. B: Kondensator – zwei dicke Striche nebeneinander. C: Summer." },
  { id: "k13", art: "begriff", v: "Was macht ein Kondensator – und wofür braucht ihn der Wechselblinker?", h: "Ein Kondensator speichert elektrische Energie. Im Wechselblinker lädt er sich langsam auf, bis an der Basis 0,6 V erreicht sind – dann schaltet die Schaltung um. Größere Kondensatoren: langsameres Blinken." },
  { id: "k14", art: "transfer", v: "Eine Lampe soll angehen, wenn es kalt wird. Wie wandelst du die Lichtschranke ab?", h: "Statt des LDR baut man einen Heißleiter (NTC) ein. Wird es kalt, wird sein Widerstand groß, die Spannung an der Basis steigt über 0,6 V – die Lampe geht an." }
]);
