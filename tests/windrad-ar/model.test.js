import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from './vendor/three.module.js';
import { createWindrad, rotorRpm } from './model.js';

test('illustrative rotor speed is stopped in low wind and bounded', () => {
  assert.equal(rotorRpm(0), 0);
  assert.equal(rotorRpm(2), 0);
  assert.equal(rotorRpm(3), 4);
  assert.equal(rotorRpm(8), 14);
  assert.equal(rotorRpm(16), 22);
  assert.equal(rotorRpm(-1), 0);
  assert.equal(rotorRpm('invalid'), 0);
  assert.equal(rotorRpm(1000), 22);
});

test('wind turbine contains three blades and a visible, bounded full model', () => {
  const turbine = createWindrad();
  const blades = turbine.rotor.children.filter(object => object.name.startsWith('Rotorblatt'));
  assert.equal(blades.length, 3);
  const box = new THREE.Box3().setFromObject(turbine.root);
  assert.ok(box.max.y > 4.6 && box.max.y < 4.9);
  assert.ok(Math.abs(box.min.y) < .001);
  assert.ok(box.max.x - box.min.x > 2.8);
  assert.equal(turbine.generator.visible, false);
  turbine.setInside(true);
  assert.equal(turbine.generator.visible, true);
  turbine.setInside(false);
  assert.equal(turbine.generator.visible, false);
});

test('wind animates the rotor; pause and calm wind preserve its angle', () => {
  const turbine = createWindrad();
  turbine.animate(.5, 8, false);
  assert.ok(turbine.rotor.rotation.z < -.7);
  const angle = turbine.rotor.rotation.z;
  turbine.animate(2, 8, true);
  assert.equal(turbine.rotor.rotation.z, angle);
  turbine.animate(2, 0, false);
  assert.equal(turbine.rotor.rotation.z, angle);
});
