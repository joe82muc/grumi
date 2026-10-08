/* Lernkarten zum Modul „Generator, Wechselspannung und Transformator“ (NT 8). Kennungen k1 … nie neu vergeben – daran hängt der Lernstand. */
NT8Karten.satz("generator-trafo", [
  { id: "k1", art: "begriff", v: "Was macht ein Generator?", h: "Er wandelt Bewegungsenergie in elektrische Energie um. Ein Magnet und eine Spule bewegen sich gegeneinander." },
  { id: "k2", art: "ursache", v: "Warum entsteht im Generator eine Spannung?", h: "Durch die Drehung ändert sich das Magnetfeld in der Spule. Das nennt man Induktion." },
  { id: "k3", art: "versuch", v: "Du drehst den Magneten im Generator schneller. Was beobachtest du?", h: "Die Spannung wird größer, die Lampe leuchtet heller. Steht der Magnet still, ist die Spannung 0 V." },
  { id: "k4", art: "anwendung", v: "Nenne drei Generatoren aus dem Alltag und ihren Antrieb.", h: "Fahrraddynamo (Reifen), Kraftwerk (Turbine), Notstromgenerator (Motor)." },
  { id: "k5", art: "vergleich", v: "Gleichspannung und Wechselspannung: Wie bewegen sich die Elektronen?", h: "Gleichspannung: immer in eine Richtung. Wechselspannung: hin und her." },
  { id: "k6", art: "bild", v: "Welche Spannung zeigt das Diagramm?",
    bild: '<svg viewBox="0 0 220 120" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="120" fill="#0f2233"/><line x1="10" y1="60" x2="210" y2="60" stroke="#4a6a85" stroke-width="1.5"/><path d="M10 60 C35 -5 60 -5 85 60 S135 125 160 60 S185 -5 210 60" fill="none" stroke="#6ee7a8" stroke-width="3"/></svg>',
    h: "Eine Wechselspannung: Sie schwingt ständig hin und her und wechselt dabei ihre Richtung." },
  { id: "k7", art: "begriff", v: "Was bedeutet 50 Hz im Stromnetz?", h: "50 Schwingungen der Wechselspannung in jeder Sekunde. Hertz ist die Einheit der Frequenz." },
  { id: "k8", art: "begriff", v: "Aus welchen Teilen besteht ein Transformator?", h: "Aus Primärspule, Sekundärspule und einem geschlossenen Eisenkern." },
  { id: "k9", art: "bild", v: "Benenne die Teile des Transformators im Bild.",
    bild: '<svg viewBox="0 0 220 130" xmlns="http://www.w3.org/2000/svg"><path d="M50 15 H170 V115 H50 Z M72 35 V95 H148 V35 Z" fill="#8795a1" stroke="#4a5a67" stroke-width="2" fill-rule="evenodd"/><g stroke="#c0392b" stroke-width="3.5"><line x1="36" y1="40" x2="86" y2="40"/><line x1="36" y1="55" x2="86" y2="55"/><line x1="36" y1="70" x2="86" y2="70"/><line x1="36" y1="85" x2="86" y2="85"/></g><g stroke="#2f6fdb" stroke-width="3.5"><line x1="134" y1="50" x2="184" y2="50"/><line x1="134" y1="65" x2="184" y2="65"/><line x1="134" y1="80" x2="184" y2="80"/></g><text x="60" y="126" font-size="11" font-weight="800" fill="#c0392b" text-anchor="middle">Primär</text><text x="160" y="126" font-size="11" font-weight="800" fill="#2f6fdb" text-anchor="middle">Sekundär</text><text x="110" y="9" font-size="11" font-weight="800" fill="#15212b" text-anchor="middle">Eisenkern</text></svg>',
    h: "Links die Primärspule, rechts die Sekundärspule, dazwischen der geschlossene Eisenkern." },
  { id: "k10", art: "ursache", v: "Warum funktioniert ein Transformator nicht mit Gleichspannung?", h: "Das Magnetfeld im Kern ändert sich dann nicht. Ohne Änderung entsteht in der Sekundärspule keine Spannung." },
  { id: "k11", art: "formel", v: "Wie lautet die Formel für den unbelasteten Transformator?", h: "U₁ : U₂ = N₁ : N₂. Die Spannungen verhalten sich wie die Windungszahlen." },
  { id: "k12", art: "transfer", v: "N₁ = 1000, N₂ = 100, U₁ = 230 V. Wie groß ist U₂?", h: "Die Sekundärspule hat ein Zehntel der Windungen: U₂ = 23 V." },
  { id: "k13", art: "anwendung", v: "Nenne zwei Anwendungen des Transformators.", h: "Netzteil und Ladegerät (230 V → kleine Spannung), Umspannwerk, Schmelzofen." },
  { id: "k14", art: "fehler", v: "Finde den Fehler: „Ein Transformator erzeugt Energie.“", h: "Falsch. Er verändert nur die Höhe der Wechselspannung, Energie erzeugt er nicht.", m: true },
  { id: "k15", art: "begriff", v: "Was bedeuten Amplitude und Periode?", h: "Amplitude: größter Wert der Spannung. Periode T: Dauer einer vollen Schwingung, es gilt f = 1 : T.", m: true },
  { id: "k16", art: "formel", v: "Wie hängen die Stromstärken am Trafo mit den Windungen zusammen?", h: "I₁ : I₂ = N₂ : N₁. Wird die Spannung kleiner, wird die Stromstärke größer.", m: true },
  { id: "k17", art: "vergleich", v: "Generator und Elektromotor: Was ist gleich, was anders?", h: "Beide haben Magnet und Spule. Der Generator wandelt Bewegung in elektrische Energie um, der Motor umgekehrt.", m: true }
]);
