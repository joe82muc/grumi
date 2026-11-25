// Kernkraftwerk in echter Größe: Zahlen und Regeln – ohne Grafik, damit sie sich einzeln prüfen lassen.
// Alles passt zum Modul „So arbeitet ein Kernkraftwerk“ (ke-3.html): Druckwasserreaktor, Regelstäbe steuern die Leistung.
// Maße nach dem Kernkraftwerk Isar 2 bei Landshut (abgeschaltet im April 2023): Kühlturm 165 m hoch, unten etwa 153 m breit;
// Reaktorgebäude mit Kuppel etwa 60 m hoch; elektrische Leistung etwa 1 400 MW (netto). Vergleich wie beim Windrad:
// Frauenkirche 99 m, Olympiaturm 291 m.

export const KRAFTWERK = { kuehlturm: 165, kuehlturmFuss: 153, kuehlturmTaille: 86, kuehlturmKrone: 92, reaktor: 60, kamin: 120, leistungMW: 1400 };
export const VERGLEICH = { frauenkirche: 99, olympiaturm: 291 };

// Regelstäbe: 0 = ganz herausgezogen, 1 = ganz eingefahren. Je tiefer sie stecken, desto mehr Neutronen fangen sie ein,
// desto weniger Kernspaltungen je Sekunde laufen – und desto kleiner ist die Leistung. Ganz eingefahren: abgeschaltet.
export function leistungsanteil(regel) {
  const r = Math.min(1, Math.max(0, Number(regel) || 0));
  return r >= .98 ? 0 : Math.round((1 - r) * 100) / 100;
}

// 'aus' abgeschaltet · 'wenig' kleine Leistung · 'teil' Teillast · 'voll' volle Leistung
export function zustand(regel) {
  const p = leistungsanteil(regel);
  if (p === 0) return 'aus';
  if (p < .35) return 'wenig';
  return p < .85 ? 'teil' : 'voll';
}

const zahl = n => Math.round(n).toLocaleString('de-DE');

export function leistungMW(regel) {
  return Math.round(KRAFTWERK.leistungMW * leistungsanteil(regel));
}

export function beobachtung(regel) {
  const z = zustand(regel), p = leistungsanteil(regel);
  if (z === 'aus') return 'Die Regelstäbe sind ganz eingefahren. Sie fangen die Neutronen ein – die Kettenreaktion kommt zum Erliegen, der Reaktor ist abgeschaltet. Kein Dampf, kein Strom.';
  const satz = 'Von den zwei oder drei Neutronen jeder Spaltung löst ' + (p >= .85 ? 'genau eines' : 'weniger als eines') + ' eine neue Spaltung aus. ';
  if (z === 'wenig') return 'Die Regelstäbe stecken tief im Reaktorkern: nur wenige Spaltungen je Sekunde. Das Wasser wird kaum heiß, die Turbine dreht langsam. ' + 'Leistung etwa ' + zahl(leistungMW(regel)) + ' MW.';
  if (z === 'teil') return 'Teillast: Je weiter die Regelstäbe herausgezogen werden, desto mehr Kernspaltungen je Sekunde – mehr Wärme, mehr Dampf, mehr Strom. Leistung etwa ' + zahl(leistungMW(regel)) + ' MW.';
  return 'Volle Leistung: ' + satz + 'Die Zahl der Spaltungen bleibt konstant, das Wasser wird bis 300 °C heiß und bleibt unter hohem Druck flüssig. Leistung etwa ' + zahl(leistungMW(regel)) + ' MW.';
}

export function steckbrief(regel) {
  return {
    kuehlturm: 'Kühlturm: ' + zahl(KRAFTWERK.kuehlturm) + ' m hoch',
    reaktor: 'Reaktorgebäude: etwa ' + zahl(KRAFTWERK.reaktor) + ' m',
    regel: 'Regelstäbe: ' + zahl(Math.min(1, Math.max(0, Number(regel) || 0)) * 100) + ' % eingefahren',
    leistung: 'Leistung: ' + zahl(leistungMW(regel)) + ' MW'
  };
}

export function vergleich() {
  return 'Der Kühlturm (165 m) ist höher als die Frauenkirche (99 m), aber niedriger als der Olympiaturm (291 m). Er ist unten so breit wie anderthalb Fußballfelder.';
}
