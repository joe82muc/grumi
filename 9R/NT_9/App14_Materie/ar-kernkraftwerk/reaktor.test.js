import test from 'node:test';
import assert from 'node:assert/strict';
import { KRAFTWERK, leistungsanteil, zustand, leistungMW, beobachtung, steckbrief, vergleich } from './reaktor.js';

test('Maße wie im Modul: Kühlturm 165 m, Reaktorgebäude etwa 60 m, Leistung 1 400 MW', () => {
  assert.equal(KRAFTWERK.kuehlturm, 165);
  assert.equal(KRAFTWERK.reaktor, 60);
  assert.equal(KRAFTWERK.leistungMW, 1400);
  assert.match(vergleich(), /höher als die Frauenkirche \(99 m\).*niedriger als der Olympiaturm \(291 m\)/);
});

test('Regelstäbe: herausgezogen = volle Leistung, ganz eingefahren = abgeschaltet', () => {
  assert.equal(leistungsanteil(0), 1);
  assert.equal(leistungsanteil(.5), .5);
  assert.equal(leistungsanteil(1), 0);
  assert.equal(leistungsanteil(.99), 0);
  assert.equal(leistungsanteil(-3), 1);
  assert.deepEqual([0, .1, .5, .7, .9, 1].map(zustand), ['voll', 'voll', 'teil', 'wenig', 'wenig', 'aus']);
  assert.equal(leistungMW(0), 1400);
  assert.equal(leistungMW(.5), 700);
  assert.equal(leistungMW(1), 0);
  assert.match(beobachtung(1), /abgeschaltet/);
  assert.match(beobachtung(.9), /nur wenige Spaltungen/);
  assert.match(beobachtung(.5), /Teillast.*700 MW/);
  assert.match(beobachtung(0), /Volle Leistung.*genau eines.*300 °C/);
  assert.deepEqual(steckbrief(.25), { kuehlturm: 'Kühlturm: 165 m hoch', reaktor: 'Reaktorgebäude: etwa 60 m', regel: 'Regelstäbe: 25 % eingefahren', leistung: 'Leistung: 1.050 MW' });
});
