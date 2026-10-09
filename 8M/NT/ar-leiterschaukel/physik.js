// Leiterschaukel: die Regeln des Versuchs – ohne Grafik, damit sie sich einzeln prüfen lassen.
// Es gilt die Elektronenrichtung (vom Minuspol zum Pluspol) und die Linke-Hand-Regel, genau wie im Modul:
//   e = +1: Die Elektronen fließen im Draht nach vorn (im Modul: "kommen auf dich zu"), -1: nach hinten
//   b = +1: Das Magnetfeld zeigt nach oben (Nordpol unten, Südpol oben), -1: nach unten
//   Ausschlag = e · b   (+1 = in den Magneten hinein, von vorn gesehen nach rechts)

export const STUFEN = [
  { name: 'klein', grad: 9 },
  { name: 'mittel', grad: 14 },
  { name: 'groß', grad: 20 }
];

const eins = wert => (Number(wert) < 0 ? -1 : 1);

export function stufe(staerke) {
  const nr = Math.round(Number(staerke) || 0);
  return STUFEN[Math.max(1, Math.min(STUFEN.length, nr)) - 1];
}

// Seite des Ausschlags: +1 in den Magneten hinein, -1 heraus, 0 kein Ausschlag
export function richtung(zustand) {
  if (!zustand || !zustand.an) return 0;
  return eins(zustand.e) * eins(zustand.b);
}

// Winkel, bei dem die Schaukel zur Ruhe kommt (Bogenmaß). feld: 1 = Magnet am Platz, 0 = Magnet herausgezogen
export function zielWinkel(zustand, feld = 1) {
  const anteil = Math.max(0, Math.min(1, Number(feld)));
  return richtung(zustand) * stufe(zustand.staerke).grad * Math.PI / 180 * anteil;
}

// Ein Schritt der gedämpften Schwingung um den Zielwinkel
export function schwinge(lage, ziel, delta) {
  let { winkel, tempo } = lage;
  const schritte = Math.max(1, Math.ceil(delta / .016)), dt = delta / schritte;
  for (let i = 0; i < schritte; i++) {
    tempo += (-30 * (winkel - ziel) - 2.4 * tempo) * dt;
    winkel += tempo * dt;
  }
  return { winkel, tempo };
}

export function beobachtung(zustand) {
  if (!zustand.an) return 'Strom aus: Es wirkt keine Kraft. Die Schaukel hängt ruhig.';
  const feld = eins(zustand.b) > 0 ? 'oben' : 'unten';
  const seite = richtung(zustand) > 0 ? 'in den Magneten hinein' : 'aus dem Magneten heraus';
  return 'Die Elektronen fließen vom Minuspol durch den Draht zum Pluspol. Das Magnetfeld zeigt nach ' + feld +
    '. Die Kraft schiebt die Schaukel ' + seite + '.';
}
