// Windkraftanlage in echter Größe: Zahlen und Regeln – ohne Grafik, damit sie sich einzeln prüfen lassen.
// Alles passt zum Modul „Windkraft: Strom aus bewegter Luft“ (windkraft-strom.html):
//   Station 4: dieselben fünf Anlagen (Jahr, Rotor-Durchmesser, Nabenhöhe, Leistung), Frauenkirche 99 m, Olympiaturm 291 m
//   Station 3: unter 3 m/s steht der Rotor, ab etwa 12 m/s größte Strommenge, über 25 m/s blockiert die Bremse

export const ANLAGEN = [
  { jahr: '1990', d: 15, hub: 30, kw: 30 },
  { jahr: '1995', d: 30, hub: 45, kw: 250 },
  { jahr: '2000', d: 70, hub: 70, kw: 1500 },
  { jahr: '2010', d: 126, hub: 140, kw: 4200 },
  { jahr: '2020', d: 220, hub: 200, kw: 12000 }
];
export const VERGLEICH = { frauenkirche: 99, olympiaturm: 291 };
export const WIND = { start: 3, voll: 12, sturm: 25 };

export function anlage(jahr) {
  return ANLAGEN.find(a => a.jahr === String(jahr)) || ANLAGEN[3];
}

// Maße einer Anlage in Metern. Gegeben sind Rotor-Durchmesser und Nabenhöhe; der Rest ist dazu passend geschätzt.
export function masse(a) {
  const radius = a.d / 2, gondelLang = 2 + .085 * a.d, gondelHoch = gondelLang * .34;
  const turmUnten = Math.max(.6, a.hub * .024);
  return {
    radius, spitze: a.hub + radius, gondelLang, gondelHoch, gondelBreit: gondelHoch,
    turmUnten, turmOben: turmUnten * .55, nabe: Math.max(.45, a.d * .018)
  };
}

// 'still' zu wenig Wind · 'dreht' · 'voll' größte Strommenge · 'sturm' Bremse blockiert
export function zustand(wind) {
  const v = Number(wind) || 0;
  if (v < WIND.start) return 'still';
  if (v > WIND.sturm) return 'sturm';
  return v >= WIND.voll ? 'voll' : 'dreht';
}

// Tempo der Flügelspitze in m/s: wächst mit dem Wind, ab 12 m/s nicht weiter
export function spitzenTempo(wind) {
  const z = zustand(wind);
  return z === 'still' || z === 'sturm' ? 0 : Math.min(Number(wind), WIND.voll) * 6.5;
}

// Umdrehungen des Rotors in der Minute: Große Rotoren drehen sich langsam – ihre Spitzen sind trotzdem schnell
export function drehzahl(wind, a) {
  return spitzenTempo(wind) / (Math.PI * a.d) * 60;
}

const zahl = n => Math.round(n).toLocaleString('de-DE');

export function beobachtung(wind, a) {
  const z = zustand(wind);
  if (z === 'still') return 'Zu wenig Wind: Erst ab etwa 3 m/s dreht sich der Rotor und die Anlage liefert Strom.';
  if (z === 'sturm') return 'Sturm! Der Wind ist zu stark. Die Bremse blockiert den Rotor, damit die Anlage nicht beschädigt wird.';
  const u = drehzahl(wind, a), tempo = spitzenTempo(wind) * 3.6;
  const dreh = 'Der Rotor dreht sich etwa ' + (u < 10 ? u.toLocaleString('de-DE', { maximumFractionDigits: 1 }) : zahl(u)) + '-mal in der Minute. Die Flügelspitzen sind dabei rund ' + zahl(tempo / 10) + '0 km/h schnell.';
  return z === 'voll' ? 'Ab etwa 12 m/s liefert die Anlage ihre größte Strommenge. ' + dreh : dreh + ' Mehr Wind – mehr Strom.';
}

export function steckbrief(a) {
  const m = masse(a);
  return { rotor: 'Rotor-Ø: ' + zahl(a.d) + ' m', nabe: 'Nabenhöhe: ' + zahl(a.hub) + ' m', spitze: 'Flügelspitze: bis ' + zahl(m.spitze) + ' m', leistung: 'Leistung: ' + zahl(a.kw) + ' kW' };
}

export function vergleich(a) {
  const spitze = masse(a).spitze;
  if (spitze > VERGLEICH.olympiaturm) return 'Die Flügelspitze reicht höher als der Olympiaturm (291 m).';
  if (spitze > VERGLEICH.frauenkirche) return 'Die Flügelspitze reicht höher als die Frauenkirche (99 m).';
  return 'Die Anlage ist kleiner als die Frauenkirche (99 m).';
}
