import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../../../tests/windrad-ar/vendor/three.module.js';
import { createLeiterschaukel } from './model.js';
import { richtung, zielWinkel, schwinge, beobachtung, stufe } from './physik.js';

const laufe = (versuch, sekunden) => { for (let i = 0; i < sekunden * 60; i++) versuch.animate(1 / 60); };

test('Ausschlag folgt der Linke-Hand-Regel mit der Elektronenrichtung', () => {
  // wie im Modul und im Film: Südpol oben (Feld nach oben), Elektronen nach vorn → in den Magneten hinein (von vorn: nach rechts)
  assert.equal(richtung({ an: true, e: 1, b: 1 }), 1);
  assert.equal(richtung({ an: true, e: -1, b: 1 }), -1);
  assert.equal(richtung({ an: true, e: 1, b: -1 }), -1);
  assert.equal(richtung({ an: true, e: -1, b: -1 }), 1);
  assert.equal(richtung({ an: false, e: 1, b: 1 }), 0);
  // Gegenprobe mit der Physik: Kraft auf Elektronen F = q · v × B mit q < 0
  for (const e of [1, -1]) for (const b of [1, -1]) {
    const kraft = new THREE.Vector3(0, 0, e).cross(new THREE.Vector3(0, b, 0)).multiplyScalar(-1);
    assert.equal(Math.sign(kraft.x), richtung({ an: true, e, b }));
  }
});

test('mehr Strom: größerer Ausschlag; ohne Feld kein Ausschlag', () => {
  const klein = zielWinkel({ an: true, e: 1, b: 1, staerke: 1 }), gross = zielWinkel({ an: true, e: 1, b: 1, staerke: 3 });
  assert.ok(klein > 0 && gross > klein);
  assert.equal(zielWinkel({ an: true, e: 1, b: 1, staerke: 3 }, 0), 0);
  assert.equal(stufe(0).name, 'klein');
  assert.equal(stufe(99).name, 'groß');
  let lage = { winkel: 0, tempo: 0 };
  for (let i = 0; i < 600; i++) lage = schwinge(lage, .3, 1 / 60);
  assert.ok(Math.abs(lage.winkel - .3) < .002 && Math.abs(lage.tempo) < .01);
});

test('Beobachtung nennt Feldrichtung und Seite', () => {
  assert.match(beobachtung({ an: false, e: 1, b: 1 }), /keine Kraft/);
  assert.match(beobachtung({ an: true, e: 1, b: 1 }), /nach oben.*in den Magneten hinein/);
  assert.match(beobachtung({ an: true, e: -1, b: 1 }), /nach oben.*aus dem Magneten heraus/);
  assert.match(beobachtung({ an: true, e: 1, b: -1 }), /nach unten.*aus dem Magneten heraus/);
});

test('Modell: Strom an lenkt den Draht aus, Kabel tauschen und Magnet umdrehen kehren die Seite um', () => {
  const versuch = createLeiterschaukel();
  versuch.hand.removeFromParent();   // die Hand schwebt neben dem Aufbau
  const box = new THREE.Box3().setFromObject(versuch.root);
  versuch.inhalt.add(versuch.hand);
  assert.ok(Math.abs(box.min.y) < .001 && box.max.y > 2.6 && box.max.y < 2.9);
  assert.ok(Math.abs(box.min.x + box.max.x) < .02, 'steht mittig auf dem Marker');
  const drahtX = () => { versuch.root.updateMatrixWorld(true); return versuch.draht.getWorldPosition(new THREE.Vector3()).x - .2; };
  laufe(versuch, 1);
  assert.ok(Math.abs(drahtX()) < .001);
  assert.equal(versuch.kraft.visible, false);
  assert.equal(versuch.elektronen.visible, false);

  versuch.setze({ an: true });
  laufe(versuch, 6);
  assert.ok(drahtX() > .3, 'in den Magneten hinein');
  assert.equal(versuch.kraft.visible, true);
  assert.equal(versuch.hand.visible, true);
  assert.equal(versuch.elektronen.visible, true);
  assert.equal(versuch.kabel[1].visible, true);

  versuch.setze({ e: -1 });
  laufe(versuch, 6);
  assert.ok(drahtX() < -.3, 'Kabel getauscht: aus dem Magneten heraus');
  assert.equal(versuch.kabel[-1].visible, true);
  assert.equal(versuch.kabel[1].visible, false);

  versuch.setze({ b: -1 });
  laufe(versuch, .3);
  assert.ok(versuch.lage().versatz > .5, 'Magnet wird zum Umdrehen herausgezogen');
  laufe(versuch, 6);
  assert.ok(Math.abs(versuch.lage().versatz) < 1e-6 && Math.abs(versuch.lage().drehung - Math.PI) < 1e-6);
  assert.ok(drahtX() > .3, 'beides geändert: wieder in den Magneten hinein');

  versuch.setze({ an: false });
  laufe(versuch, 8);
  assert.ok(Math.abs(drahtX()) < .005);
  assert.equal(versuch.hand.visible, false);
});

test('Linke Hand bleibt eine linke Hand und zeigt mit dem Mittelfinger in Richtung des Ausschlags', () => {
  const versuch = createLeiterschaukel();
  for (const e of [1, -1]) for (const b of [1, -1]) {
    versuch.setze({ an: true, e, b });
    const q = versuch.hand.quaternion;
    const daumen = new THREE.Vector3(0, 0, 1).applyQuaternion(q), zeige = new THREE.Vector3(0, 1, 0).applyQuaternion(q), mittel = new THREE.Vector3(1, 0, 0).applyQuaternion(q);
    assert.ok(Math.abs(daumen.z - e) < 1e-9 && Math.abs(zeige.y - b) < 1e-9 && Math.abs(mittel.x - e * b) < 1e-9);
  }
});

test('Elektronen laufen vom Minuspol zum Pluspol und im Draht in Richtung e', () => {
  const versuch = createLeiterschaukel();
  const ort = new THREE.Matrix4(), a = new THREE.Vector3(), b = new THREE.Vector3();
  for (const e of [1, -1]) {
    versuch.setze({ an: true, e, staerke: 1 });
    versuch.animate(1 / 60);
    // das Elektron suchen, das gerade im Draht liegt (unten, zwischen den Bändern)
    let nr = -1;
    for (let i = 0; i < versuch.elektronen.count; i++) {
      versuch.elektronen.getMatrixAt(i, ort);
      a.setFromMatrixPosition(ort);
      if (a.y < 1.2 && Math.abs(a.z) < .2 && Math.abs(a.x) < .6) { nr = i; break; }
    }
    assert.ok(nr >= 0);
    versuch.elektronen.getMatrixAt(nr, ort);
    a.setFromMatrixPosition(ort);
    versuch.animate(1 / 60);
    versuch.elektronen.getMatrixAt(nr, ort);
    b.setFromMatrixPosition(ort);
    assert.equal(Math.sign(b.z - a.z), e);
  }
});
