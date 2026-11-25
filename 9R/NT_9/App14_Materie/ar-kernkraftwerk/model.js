import * as THREE from '../../../../tests/windrad-ar/vendor/three.module.js';
import { KRAFTWERK, leistungsanteil } from './reaktor.js';
export { createVergleich } from '../../../../7M/NT/ar-windrad/model.js';

// Eine Einheit = ein Meter. Das Reaktorgebäude steht im Ursprung, das Maschinenhaus rechts daneben (+x), der Kühlturm
// dahinter rechts. Farben wie in der Schnitt-Zeichnung des Moduls: Reaktordruckgefäß rot, Primärkreislauf orange,
// Dampferzeuger und Dampfleitung blau, Turbine grau, Generator blau, Steuerstäbe dunkel.
export const FARBEN = { druck: 0xd84a3a, primaer: 0xe8731c, dampf: 0x2f8fd8, turbine: 0x8e98a1, generator: 0x2f6fdb, steuer: 0x33414d, brenn: 0xf2b632, kondensator: 0x5fa8d3 };
const TAU = Math.PI * 2;

export function createKraftwerk() {
  const K = KRAFTWERK;
  const root = new THREE.Group();
  root.name = 'Kernkraftwerk';
  const beton = new THREE.MeshStandardMaterial({ color: 0xd9dcd6, roughness: .9 });
  const betonDunkel = new THREE.MeshStandardMaterial({ color: 0xb9bfc2, roughness: .95 });
  const huelle = new THREE.MeshStandardMaterial({ color: 0xe6e3dc, roughness: .8 });
  const hallenwand = new THREE.MeshStandardMaterial({ color: 0xcfd6dc, roughness: .8 });
  const dunkel = new THREE.MeshStandardMaterial({ color: 0x38464f, roughness: .7 });
  const stahlGlas = new THREE.MeshStandardMaterial({ color: 0x9aa9b5, transparent: true, opacity: .14, roughness: .4, metalness: .5, depthWrite: false });
  const rot = new THREE.MeshStandardMaterial({ color: FARBEN.druck, roughness: .5, metalness: .2 });
  const rotGlas = new THREE.MeshStandardMaterial({ color: FARBEN.druck, transparent: true, opacity: .32, roughness: .5, depthWrite: false });
  const orange = new THREE.MeshStandardMaterial({ color: FARBEN.primaer, roughness: .5 });
  const blau = new THREE.MeshStandardMaterial({ color: FARBEN.dampf, roughness: .5 });
  const blauGlas = new THREE.MeshStandardMaterial({ color: FARBEN.dampf, transparent: true, opacity: .35, roughness: .5, depthWrite: false });
  const gelb = new THREE.MeshStandardMaterial({ color: FARBEN.brenn, roughness: .5, emissive: 0xf2b632, emissiveIntensity: 0 });
  const steuer = new THREE.MeshStandardMaterial({ color: FARBEN.steuer, roughness: .6 });
  const grau = new THREE.MeshStandardMaterial({ color: FARBEN.turbine, metalness: .6, roughness: .4 });
  const generatorBlau = new THREE.MeshStandardMaterial({ color: FARBEN.generator, roughness: .5 });
  const kondens = new THREE.MeshStandardMaterial({ color: FARBEN.kondensator, roughness: .6 });
  // Dampf: weiche runde Wolke als Sprite-Bild (Canvas mit Farbverlauf)
  const wolkeBild = (() => {
    const c = document.createElement('canvas'); c.width = c.height = 128;
    const g = c.getContext('2d'), v = g.createRadialGradient(64, 64, 6, 64, 64, 62);
    v.addColorStop(0, 'rgba(255,255,255,.95)'); v.addColorStop(.55, 'rgba(255,255,255,.55)'); v.addColorStop(1, 'rgba(255,255,255,0)');
    g.fillStyle = v; g.fillRect(0, 0, 128, 128);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
  })();
  const wolke = new THREE.SpriteMaterial({ map: wolkeBild, color: 0xffffff, transparent: true, opacity: .55, depthWrite: false });
  const stoff = [beton, betonDunkel, huelle, hallenwand, dunkel, stahlGlas, rot, rotGlas, orange, blau, blauGlas, gelb, steuer, grau, generatorBlau, kondens, wolke, wolkeBild];

  const mesh = (geometry, material, parent = root) => { const o = new THREE.Mesh(geometry, material); parent.add(o); return o; };
  const kasten = (b, h, t, x, y, z, material, parent) => { const o = mesh(new THREE.BoxGeometry(b, h, t), material, parent); o.position.set(x, y, z); return o; };
  const saeule = (r, h, x, y, z, material, parent, seg = 24) => { const o = mesh(new THREE.CylinderGeometry(r, r, h, seg), material, parent); o.position.set(x, y, z); return o; };
  const rohr = (von, nach, r, material, parent) => {   // gerades Rohr zwischen zwei Punkten
    const a = new THREE.Vector3(...von), b = new THREE.Vector3(...nach), lang = a.distanceTo(b);
    const o = mesh(new THREE.CylinderGeometry(r, r, lang, 12), material, parent);
    o.position.copy(a).add(b).multiplyScalar(.5);
    o.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), b.clone().sub(a).normalize());
    return o;
  };

  /* ---------- Reaktorgebäude: Zylinder mit Kuppel, darin der Sicherheitsbehälter ---------- */
  const R = 28, wandHoch = K.reaktor - R;               // Kuppel = Halbkugel mit Radius R → Gesamthöhe K.reaktor
  const gebaeude = new THREE.Group();
  gebaeude.name = 'Reaktorgebäude';
  root.add(gebaeude);
  const wand = mesh(new THREE.CylinderGeometry(R, R, wandHoch, 48, 1, true), huelle, gebaeude);
  wand.position.y = wandHoch / 2;
  const kuppel = mesh(new THREE.SphereGeometry(R, 48, 24, 0, TAU, 0, Math.PI / 2), huelle, gebaeude);
  kuppel.position.y = wandHoch;
  const umriss = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.CylinderGeometry(R, R, wandHoch, 24, 1, true)), new THREE.LineBasicMaterial({ color: 0x7d8f9b }));
  umriss.position.y = wandHoch / 2;
  umriss.visible = false;
  gebaeude.add(umriss);
  mesh(new THREE.CylinderGeometry(R + 2, R + 2.5, 1, 48), betonDunkel, gebaeude).position.y = .5;
  kasten(4, 5, .4, 0, 2.5, R - .1, dunkel, gebaeude);                       // Tor

  const innen = new THREE.Group();
  innen.name = 'Inneres des Reaktorgebäudes';
  innen.visible = false;
  gebaeude.add(innen);
  // Sicherheitsbehälter: Stahlkugel
  const behaelter = mesh(new THREE.SphereGeometry(R - 2.5, 40, 24), stahlGlas, innen);
  behaelter.position.y = wandHoch - 2;
  behaelter.renderOrder = 2;
  // Reaktordruckgefäß: dickwandiger Stahlzylinder mit Deckel, der Kern leuchtet je nach Leistung
  const druck = new THREE.Group();
  druck.position.set(0, 8, 0);
  innen.add(druck);
  const gefaess = saeule(4.2, 12, 0, 6, 0, rotGlas, druck, 32);
  gefaess.renderOrder = 3;
  mesh(new THREE.SphereGeometry(4.2, 32, 12, 0, TAU, 0, Math.PI / 2), rotGlas, druck).position.y = 12;
  mesh(new THREE.TorusGeometry(4.3, .35, 8, 40), rot, druck).rotation.x = Math.PI / 2;
  const deckelRing = mesh(new THREE.TorusGeometry(4.3, .35, 8, 40), rot, druck);
  deckelRing.rotation.x = Math.PI / 2; deckelRing.position.y = 12;
  // Reaktorkern: Brennelemente (gelbe Stäbe) im Raster, Steuerstäbe (dunkel) fahren von oben hinein
  const kern = new THREE.Group();
  kern.position.y = 1.2;
  druck.add(kern);
  const brennGeo = new THREE.CylinderGeometry(.22, .22, 8, 8), steuerGeo = new THREE.CylinderGeometry(.2, .2, 8.4, 8);
  for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) {
    if (Math.abs(i) + Math.abs(j) > 5) continue;
    const b = mesh(brennGeo, gelb, kern);
    b.position.set(i * .9, 4, j * .9);
  }
  const staebe = new THREE.Group();
  kern.add(staebe);
  for (let i = -2; i <= 2; i += 2) for (let j = -2; j <= 2; j += 2) {
    const s = mesh(steuerGeo, steuer, staebe);
    s.position.set(i * .9 + .45, 4.2, j * .9 + .45);
  }
  const traverse = kasten(6, .5, 6, 0, 8.6, 0, steuer, staebe);                       // Antrieb oben, hebt und senkt alle Stäbe
  traverse.name = 'Steuerstab-Antrieb';
  // vier Dampferzeuger um das Druckgefäß, Primärkreislauf orange, Dampfleitung blau nach draußen
  const dampferzeuger = [];
  for (let n = 0; n < 4; n++) {
    const w = n / 4 * TAU + Math.PI / 4, x = Math.cos(w) * 14, z = Math.sin(w) * 14;
    const d = saeule(2.6, 18, x, 9 + 9, z, blau, innen, 24);
    d.name = 'Dampferzeuger';
    mesh(new THREE.SphereGeometry(2.6, 24, 10, 0, TAU, 0, Math.PI / 2), blau, innen).position.set(x, 27, z);
    rohr([Math.cos(w) * 4.2, 12, Math.sin(w) * 4.2], [x, 14, z], .7, orange, innen);          // heißes Wasser hin
    rohr([x, 9.5, z], [Math.cos(w) * 4.2, 9.5, Math.sin(w) * 4.2], .7, orange, innen);        // kühler zurück (Pumpe)
    saeule(1.3, 2.6, Math.cos(w) * 9, 9.5, Math.sin(w) * 9, orange, innen, 16).name = 'Hauptkühlmittelpumpe';
    dampferzeuger.push({ x, z });
  }
  // Dampfleitung zur Turbine (blau) und Speisewasser zurück (hellblau), durch die Wand nach +x
  const dampfSammler = rohr([0, 29, 0], [R + 2, 29, 0], 1.1, blau, innen);
  for (const d of dampferzeuger) rohr([d.x, 28.5, d.z], [0, 29, 0], .7, blau, innen);
  const speise = rohr([R + 2, 7, 6], [10, 7, 6], .7, kondens, innen);

  /* ---------- Maschinenhaus: Turbine und Generator ---------- */
  const halleL = 110, halleB = 42, halleH = 30, halleX = 42 + halleL / 2;
  const halle = new THREE.Group();
  halle.name = 'Maschinenhaus';
  halle.position.set(halleX, 0, 0);
  root.add(halle);
  const hallenHuelle = kasten(halleL, halleH, halleB, 0, halleH / 2, 0, hallenwand, halle);
  const hallenUmriss = new THREE.LineSegments(new THREE.EdgesGeometry(hallenHuelle.geometry), new THREE.LineBasicMaterial({ color: 0x7d8f9b }));
  hallenUmriss.position.copy(hallenHuelle.position);
  hallenUmriss.visible = false;
  halle.add(hallenUmriss);
  // Satteldach flach
  const dach = kasten(halleL + 2, 1.2, halleB + 2, 0, halleH + .6, 0, betonDunkel, halle);
  const halleInnen = new THREE.Group();
  halleInnen.visible = false;
  halle.add(halleInnen);
  // Dampfleitung kommt aus dem Reaktorgebäude (blau) zur Turbine
  rohr([-halleL / 2 - 2 - (halleX - R - 2 - halleL / 2), 29, 0], [-halleL / 2 + 6, 29, 0], 1.1, blau, halleInnen);
  rohr([-halleL / 2 + 6, 29, 0], [-halleL / 2 + 6, 17, 0], 1.1, blau, halleInnen);
  // Turbine: Welle entlang x mit Schaufelkränzen, dann Generator
  const welle = new THREE.Group();
  welle.position.set(-halleL / 2 + 36, 14, 0);
  halleInnen.add(welle);
  const turbine = mesh(new THREE.CylinderGeometry(1.4, 1.4, 60, 16), grau, welle);
  turbine.rotation.z = Math.PI / 2;
  turbine.position.x = 2;
  for (let i = 0; i < 6; i++) {
    const kranz = mesh(new THREE.CylinderGeometry(3 + i * .9, 3 + i * .9, 2.2, 28), grau, welle);
    kranz.rotation.z = Math.PI / 2;
    kranz.position.x = -24 + i * 7;
  }
  const generator = mesh(new THREE.CylinderGeometry(5.5, 5.5, 20, 28), generatorBlau, welle);
  generator.name = 'Generator';
  generator.rotation.z = Math.PI / 2;
  generator.position.x = 26;
  const kondensator = kasten(44, 7, 16, -6, 4, 0, kondens, halleInnen);
  kondensator.name = 'Kondensator';
  kasten(20, 10, 12, halleL / 2 + 16, 5, 10, dunkel, halle).name = 'Transformator';   // Transformator draußen neben der Halle
  // Masten der Stromleitung
  for (const x of [halleL / 2 + 40, halleL / 2 + 110]) {
    const mast = saeule(.8, 46, x, 23, 14, dunkel, halle, 8);
    kasten(14, .8, .8, x, 42, 14, dunkel, halle);
  }

  /* ---------- Kühlturm: Hyperboloid aus einem Profil ---------- */
  const turm = new THREE.Group();
  turm.name = 'Kühlturm';
  turm.position.set(190, 0, -130);
  root.add(turm);
  const profil = [];
  for (let i = 0; i <= 24; i++) {
    const t = i / 24, y = t * K.kuehlturm;
    const taille = .74, rT = K.kuehlturmTaille / 2, rF = K.kuehlturmFuss / 2, rK = K.kuehlturmKrone / 2;
    const r = t < taille ? rT + (rF - rT) * Math.pow(1 - t / taille, 1.6) : rT + (rK - rT) * Math.pow((t - taille) / (1 - taille), 1.3);
    profil.push(new THREE.Vector2(r, y));
  }
  const turmHuelle = mesh(new THREE.LatheGeometry(profil, 56), beton, turm);
  turmHuelle.material.side = THREE.DoubleSide;
  // Stützen am Fuß (der Turm steht auf schrägen Betonstützen, unten strömt die Luft ein)
  for (let i = 0; i < 28; i++) {
    const w = i / 28 * TAU, r = K.kuehlturmFuss / 2;
    const s = saeule(.9, 9, Math.cos(w) * r, 4.5, Math.sin(w) * r, betonDunkel, turm, 6);
    s.rotation.z = Math.cos(w) * .12; s.rotation.x = -Math.sin(w) * .12;
  }
  turmHuelle.position.y = 8;
  // Dampfwolke: Sprites, die über der Krone aufsteigen – mehr Dampf bei mehr Leistung
  const dampf = new THREE.Group();
  dampf.position.set(0, K.kuehlturm + 8, 0);
  turm.add(dampf);
  const wolken = [];
  for (let i = 0; i < 18; i++) {
    const s = new THREE.Sprite(wolke.clone());   // eigenes Material je Wolke: jede hat ihre eigene Durchsichtigkeit
    const start = Math.random();
    wolken.push({ s, t: start, dx: (Math.random() - .5) * 60, dz: (Math.random() - .5) * 60, groesse: 40 + Math.random() * 40 });
    dampf.add(s);
  }

  /* ---------- Abluftkamin ---------- */
  const kamin = saeule(2.2, K.kamin, -46, K.kamin / 2, -34, beton, root, 20);
  kamin.name = 'Abluftkamin';
  kasten(26, 12, 20, -52, 6, -10, hallenwand, root).name = 'Nebengebäude';

  let zeigeInnen = false, winkel = 0, drehTempo = 0, regelIst = 0, regelZiel = 0, leistung = 0;
  const marke = (x, y, z, eltern = root) => ({ objekt: eltern, punkt: new THREE.Vector3(x, y, z) });
  const innenDa = ctx => zeigeInnen && ctx.reaktorPx > 180;
  const nah = ctx => ctx.reaktorPx > 90;

  return {
    root, gebaeude, innen, halle,
    reaktorMitte: new THREE.Vector3(0, wandHoch * .7, 0),
    reaktorBreite: 2 * R,
    setInnen(wert) {
      zeigeInnen = Boolean(wert);
      for (const m of [huelle, hallenwand]) { m.transparent = zeigeInnen; m.opacity = zeigeInnen ? .12 : 1; m.depthWrite = !zeigeInnen; m.needsUpdate = true; }
      for (const o of [wand, kuppel, hallenHuelle]) o.renderOrder = zeigeInnen ? 4 : 0;
      innen.visible = halleInnen.visible = umriss.visible = hallenUmriss.visible = zeigeInnen;
    },
    // Regelstäbe: 0 ganz heraus, 1 ganz eingefahren
    setRegel(wert, sofort) { regelZiel = Math.min(1, Math.max(0, Number(wert) || 0)); if (sofort) regelIst = regelZiel; },
    leistung: () => leistung,
    animate(delta) {
      regelIst += (regelZiel - regelIst) * Math.min(1, delta * 2.5);
      if (Math.abs(regelZiel - regelIst) < .003) regelIst = regelZiel;
      // Steuerstäbe fahren von oben in den Kern: ganz draußen = 8 m über dem Kern, ganz drinnen = im Kern
      staebe.position.y = 8.2 * (1 - regelIst);
      const ziel = leistungsanteil(regelIst);
      leistung += (ziel - leistung) * Math.min(1, delta * 1.2);
      gelb.emissiveIntensity = .15 + leistung * 1.2;
      drehTempo += (leistung * 18 - drehTempo) * Math.min(1, delta * .8);
      winkel += drehTempo * delta;
      welle.rotation.x = winkel;
      for (const w of wolken) {
        w.t += delta * (.05 + leistung * .07);
        if (w.t > 1) { w.t -= 1; w.dx = (Math.random() - .5) * 60; w.dz = (Math.random() - .5) * 60; }
        const sichtbar = leistung > .03;
        w.s.visible = sichtbar;
        if (!sichtbar) continue;
        const hoch = w.t * (120 + leistung * 160);
        w.s.position.set(w.dx * (1 + w.t), hoch, w.dz * (1 + w.t));
        const groesse = w.groesse * (.6 + w.t * 1.6) * (.5 + leistung * .6);
        w.s.scale.set(groesse, groesse * .7, 1);
        w.s.material.opacity = Math.min(.6, leistung * .9) * (1 - w.t) * (w.t < .1 ? w.t * 10 : 1);
      }
    },
    schilder: [
      { id: 'kuehlturm', text: 'Kühlturm · ' + K.kuehlturm + ' m', ...marke(K.kuehlturmKrone / 2 * .3, K.kuehlturm + 6, 0, turm) },
      { id: 'reaktorgebaeude', text: 'Reaktorgebäude · etwa ' + K.reaktor + ' m', ...marke(R * .6, K.reaktor * .98, 0, gebaeude), wenn: ctx => !innenDa(ctx) },
      { id: 'maschinenhaus', text: 'Maschinenhaus', ...marke(0, halleH + 1, -halleB / 2, halle), wenn: ctx => !innenDa(ctx) },
      { id: 'kamin', text: 'Abluftkamin', ...marke(-46, K.kamin, -34), wenn: nah },
      { id: 'transformator', text: 'Transformator', ...marke(halleL / 2 + 16, 11, 10, halle), wenn: ctx => ctx.meterPx > 2.5 },
      { id: 'behaelter', text: 'Sicherheitsbehälter (Stahl)', ...marke(-R * .8, wandHoch - 2 + R * .5, 0, gebaeude), wenn: innenDa },
      { id: 'druck', text: 'Reaktordruckgefäß · Reaktorkern', farbe: '#c62828', ...marke(4.5, 20, 0, gebaeude), wenn: innenDa },
      { id: 'steuer', text: 'Steuerstäbe (Regelstäbe)', farbe: '#33414d', ...marke(0, 8 + 1.2 + 8.6 + 1, 3, gebaeude), wenn: innenDa },
      { id: 'brenn', text: 'Brennelemente (Uran)', farbe: '#b9860b', ...marke(-3, 12, -3, gebaeude), wenn: ctx => innenDa(ctx) && ctx.reaktorPx > 420 },
      { id: 'dampferzeuger', text: 'Dampferzeuger', farbe: '#1f6aa5', ...marke(dampferzeuger[0].x, 28, dampferzeuger[0].z, gebaeude), wenn: innenDa },
      { id: 'pumpe', text: 'Kühlmittelpumpe', farbe: '#e8731c', ...marke(9 * Math.cos(Math.PI / 4), 11, 9 * Math.sin(Math.PI / 4), gebaeude), wenn: ctx => innenDa(ctx) && ctx.reaktorPx > 420 },
      { id: 'turbine', text: 'Turbine', ...marke(-halleL / 2 + 24, 20, 0, halle), wenn: innenDa },
      { id: 'generator', text: 'Generator', farbe: '#2f6fdb', ...marke(-halleL / 2 + 62, 21, 0, halle), wenn: innenDa },
      { id: 'kondensator', text: 'Kondensator (Kühlwasser)', farbe: '#2b7fb0', ...marke(-halleL / 2 + 30, 8, -8, halle), wenn: innenDa }
    ],
    dispose() {
      root.traverse(o => { if (o.geometry) o.geometry.dispose(); });
      stoff.forEach(s => s.dispose());
    }
  };
}
