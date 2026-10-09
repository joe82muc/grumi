import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../../../tests/windrad-ar/vendor/three.module.js';
import { createAnlage, createVergleich } from './model.js';
import { ANLAGEN, anlage, masse, zustand, spitzenTempo, drehzahl, beobachtung, steckbrief, vergleich } from './physik.js';

test('Dieselben fünf Anlagen wie im Modul (Station 4)', () => {
  assert.deepEqual(ANLAGEN.map(a => [a.jahr, a.d, a.hub, a.kw]), [['1990', 15, 30, 30], ['1995', 30, 45, 250], ['2000', 70, 70, 1500], ['2010', 126, 140, 4200], ['2020', 220, 200, 12000]]);
  assert.equal(anlage('2000').d, 70);
  assert.equal(anlage('gibt es nicht').jahr, '2010');
  assert.equal(masse(anlage('2020')).spitze, 310);
  assert.match(vergleich(anlage('1990')), /kleiner als die Frauenkirche/);
  assert.match(vergleich(anlage('2010')), /höher als die Frauenkirche/);
  assert.match(vergleich(anlage('2020')), /höher als der Olympiaturm/);
  assert.deepEqual(steckbrief(anlage('2020')), { rotor: 'Rotor-Ø: 220 m', nabe: 'Nabenhöhe: 200 m', spitze: 'Flügelspitze: bis 310 m', leistung: 'Leistung: 12.000 kW' });
});

test('Wind wie im Modul (Station 3): unter 3 m/s Stillstand, ab 12 m/s volle Leistung, über 25 m/s Bremse', () => {
  assert.deepEqual([0, 2.5, 3, 8, 12, 25, 25.5, 30].map(zustand), ['still', 'still', 'dreht', 'dreht', 'voll', 'voll', 'sturm', 'sturm']);
  assert.equal(spitzenTempo(2), 0);
  assert.equal(spitzenTempo(30), 0);
  assert.equal(spitzenTempo(20), spitzenTempo(12));
  assert.ok(spitzenTempo(6) < spitzenTempo(12));
  // Große Rotoren drehen sich langsamer – bei gleichem Tempo der Flügelspitze
  const klein = drehzahl(12, anlage('1990')), gross = drehzahl(12, anlage('2020'));
  assert.ok(klein > 60 && klein < 130, String(klein));
  assert.ok(gross > 4 && gross < 12, String(gross));
  assert.match(beobachtung(1, anlage('2010')), /Zu wenig Wind/);
  assert.match(beobachtung(8, anlage('2010')), /Mehr Wind – mehr Strom/);
  assert.match(beobachtung(14, anlage('2010')), /größte Strommenge.*rund 280 km\/h/);
  assert.match(beobachtung(28, anlage('2010')), /Bremse blockiert den Rotor/);
});

test('Jede Anlage steht in echter Größe da: Nabe auf Nabenhöhe, Flügelspitze oben, Fuß am Boden', () => {
  for (const a of ANLAGEN) {
    const w = createAnlage(a), box = new THREE.Box3().setFromObject(w.root);
    w.root.updateMatrixWorld(true);
    assert.ok(Math.abs(w.rotor.getWorldPosition(new THREE.Vector3()).y - a.hub) < 1e-6, a.jahr + ' Nabenhöhe');
    assert.ok(Math.abs(box.max.y - (a.hub + a.d / 2)) < a.d * .01 + .05, a.jahr + ' Flügelspitze ' + box.max.y);
    assert.ok(Math.abs(box.min.y) < .01, a.jahr + ' Boden');
    assert.ok(Math.abs(box.max.x - box.min.x - a.d) < a.d * .16, a.jahr + ' Rotor-Durchmesser ' + (box.max.x - box.min.x));
    assert.equal(w.rotor.children.filter(o => o.name.startsWith('Rotorblatt')).length, 3);
    // Gondel: Die Enden liegen eine Gondellänge auseinander, die Mitte dazwischen
    assert.ok(Math.abs(w.gondelEnden[0].distanceTo(w.gondelEnden[1]) - w.masse.gondelLang) < 1e-9);
    w.dispose();
  }
});

test('In die Gondel schauen: Hülle wird durchsichtig, Achse, Getriebe, Bremse und Generator erscheinen', () => {
  const w = createAnlage(anlage('2010'));
  assert.equal(w.innen.visible, false);
  const ctxNah = { gondelPx: 400, meterPx: 30 }, ctxFern = { gondelPx: 20, meterPx: 1.5 };
  const sichtbar = ctx => w.schilder.filter(s => !s.wenn || s.wenn(ctx)).map(s => s.id);
  assert.deepEqual(sichtbar(ctxFern), ['rotor', 'gondel', 'turm']);
  assert.deepEqual(sichtbar(ctxNah), ['rotor', 'gondel', 'turm', 'nabe', 'windmessung', 'nachfuehrung', 'transformator']);
  w.setInnen(true);
  assert.equal(w.innen.visible, true);
  assert.deepEqual(sichtbar(ctxNah), ['rotor', 'turm', 'nabe', 'windmessung', 'nachfuehrung', 'achse', 'getriebe', 'bremse', 'generator', 'transformator']);
  assert.deepEqual(sichtbar(ctxFern), ['rotor', 'gondel', 'turm'], 'aus der Ferne bleiben die Innenteile ohne Schild');
  // Alle Innenteile liegen innerhalb der Gondel
  w.root.updateMatrixWorld(true);
  const huelle = new THREE.Box3().setFromCenterAndSize(w.gondelMitte, new THREE.Vector3(w.masse.gondelBreit, w.masse.gondelHoch, w.masse.gondelLang + w.masse.nabe * 2.2));
  const innen = new THREE.Box3().setFromObject(w.innen);
  assert.ok(huelle.containsBox(innen), JSON.stringify([huelle, innen]));
  w.setInnen(false);
  assert.equal(w.innen.visible, false);
});

test('Der Rotor läuft mit dem Wind an, bei Sturm hält ihn die Bremse an', () => {
  const a = anlage('2010'), w = createAnlage(a);
  const laufe = (sekunden, wind) => { for (let i = 0; i < sekunden * 30; i++) w.animate(1 / 30, wind); };
  laufe(2, 0);
  assert.equal(w.drehzahl(), 0);
  assert.ok(Math.abs(w.rotor.rotation.z) === 0, 'steht still');
  laufe(12, 8);
  assert.ok(Math.abs(w.drehzahl() - drehzahl(8, a)) < .05, String(w.drehzahl()));
  const vorher = w.rotor.rotation.z;
  laufe(1, 8);
  assert.ok(w.rotor.rotation.z < vorher, 'dreht weiter');
  laufe(8, 28);
  assert.ok(w.drehzahl() < .01, 'Sturm: Rotor steht ' + w.drehzahl());
  const steht = w.rotor.rotation.z;
  laufe(1, 28);
  assert.ok(Math.abs(w.rotor.rotation.z - steht) < 1e-3);
});

test('Vergleich: Frauenkirche 99 m, Olympiaturm 291 m, Haus und Mensch', () => {
  const v = createVergleich();
  v.root.updateMatrixWorld(true);
  const hoch = name => new THREE.Box3().setFromObject(v.root.getObjectByName(name)).max.y;
  assert.ok(Math.abs(hoch('Frauenkirche') - 99) < .5, String(hoch('Frauenkirche')));
  assert.ok(Math.abs(hoch('Olympiaturm') - 291) < .5, String(hoch('Olympiaturm')));
  assert.ok(Math.abs(hoch('Haus') - 10) < .2, String(hoch('Haus')));
  assert.ok(hoch('Mensch') > 1.6 && hoch('Mensch') < 1.9, String(hoch('Mensch')));
  // nichts steht im Rotor der größten Anlage (Radius 110 m um die Turmachse, Rotor zeigt nach +z)
  for (const name of ['Frauenkirche', 'Olympiaturm']) {
    const box = new THREE.Box3().setFromObject(v.root.getObjectByName(name));
    assert.ok(box.max.x < -110 || box.max.z < 0, name + ' ' + JSON.stringify(box));
  }
  assert.deepEqual(v.schilder.map(s => s.id), ['frauenkirche', 'olympiaturm', 'haus', 'mensch']);
});
