import * as THREE from '../../../tests/windrad-ar/vendor/three.module.js';
import { zielWinkel, schwinge, stufe, richtung } from './physik.js';

// Farben wie im Modul "Elektromotor": Nordpol rot, Südpol grün, Magnetfeld blau, Kraft rot, Elektronen orange
export const FARBEN = { nord: 0xc0392b, sued: 0x1b8a4b, feld: 0x2f6fdb, kraft: 0xe0453a, elektron: 0xf08a24, minus: 0x1f56b5, plus: 0xd2362b };

const OBEN = 2.45;        // Höhe der Aufhängung
const LANG = 1.5;         // Länge der Schaukel
const HALTER_Z = .45;     // die beiden Halter: vorn (+z) und hinten (-z)
const RUHE = OBEN - LANG; // Höhe des Drahtes in Ruhe
const HERAUS = 1.2;       // so weit wird der Magnet zum Umdrehen herausgezogen

// Weißes Zeichen als Bild (N, S, +, −); mit "scheibe" steht es auf einem farbigen Kreis
function zeichenBild(text, scheibe) {
  if (typeof document === 'undefined') return null;
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = 128;
  const c = canvas.getContext('2d');
  if (scheibe) {
    c.fillStyle = scheibe;
    c.beginPath();
    c.arc(64, 64, 58, 0, Math.PI * 2);
    c.fill();
    c.lineWidth = 6;
    c.strokeStyle = '#ffffff';
    c.stroke();
  }
  c.font = '800 ' + (scheibe ? 84 : 100) + 'px system-ui, Arial, sans-serif';
  c.textAlign = 'center';
  c.textBaseline = 'middle';
  c.lineJoin = 'round';
  if (!scheibe) {
    c.lineWidth = 12;
    c.strokeStyle = '#15212b55';
    c.strokeText(text, 64, 70);
  }
  c.fillStyle = '#ffffff';
  c.fillText(text, 64, scheibe ? 68 : 70);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 4;
  return texture;
}
// Zeichen, das immer zur Kamera zeigt
function schild(text, scheibe) {
  const map = zeichenBild(text, scheibe);
  return map && new THREE.Sprite(new THREE.SpriteMaterial({ map, transparent: true, depthWrite: false, toneMapped: false }));
}
// Zeichen, das fest auf einer Fläche steht (wie aufgedruckt)
function aufdruck(text, groesse) {
  const map = zeichenBild(text);
  return map && new THREE.Mesh(new THREE.PlaneGeometry(groesse, groesse), new THREE.MeshBasicMaterial({ map, transparent: true, depthWrite: false, toneMapped: false }));
}

// Pfeil, der im Ursprung beginnt und nach +y zeigt
function pfeil(laenge, dicke, material) {
  const gruppe = new THREE.Group();
  const spitze = Math.min(laenge * .45, dicke * 7);
  const schaft = new THREE.Mesh(new THREE.CylinderGeometry(dicke, dicke, laenge - spitze, 12), material);
  schaft.position.y = (laenge - spitze) / 2;
  const kegel = new THREE.Mesh(new THREE.ConeGeometry(dicke * 2.9, spitze, 18), material);
  kegel.position.y = laenge - spitze / 2;
  gruppe.add(schaft, kegel);
  return gruppe;
}

export function createLeiterschaukel() {
  const root = new THREE.Group();
  root.name = 'Leiterschaukel';
  // Der Versuch steht mittig auf der Platte (und damit mittig auf dem AR-Marker)
  const inhalt = new THREE.Group();
  inhalt.position.x = .2;
  root.add(inhalt);

  const platte = new THREE.MeshStandardMaterial({ color: 0xe9e2d3, roughness: .9 });
  const stahl = new THREE.MeshStandardMaterial({ color: 0x6b7780, metalness: .7, roughness: .35 });
  const dunkel = new THREE.MeshStandardMaterial({ color: 0x2b3138, roughness: .6 });
  const holz = new THREE.MeshStandardMaterial({ color: 0xc8a476, roughness: .85 });
  const alu = new THREE.MeshStandardMaterial({ color: 0xd3d8dc, metalness: .75, roughness: .3, emissive: 0x000000 });
  const nord = new THREE.MeshStandardMaterial({ color: FARBEN.nord, roughness: .45, metalness: .15 });
  const sued = new THREE.MeshStandardMaterial({ color: FARBEN.sued, roughness: .45, metalness: .15 });
  const feldFarbe = new THREE.MeshStandardMaterial({ color: FARBEN.feld, emissive: FARBEN.feld, emissiveIntensity: .35, roughness: .5, transparent: true, opacity: .85 });
  const kraftFarbe = new THREE.MeshStandardMaterial({ color: FARBEN.kraft, emissive: FARBEN.kraft, emissiveIntensity: .35, roughness: .5 });
  const elektronFarbe = new THREE.MeshStandardMaterial({ color: FARBEN.elektron, emissive: FARBEN.elektron, emissiveIntensity: .55, roughness: .4 });
  const minusFarbe = new THREE.MeshStandardMaterial({ color: FARBEN.minus, roughness: .55 });
  const plusFarbe = new THREE.MeshStandardMaterial({ color: FARBEN.plus, roughness: .55 });
  const gehaeuse = new THREE.MeshStandardMaterial({ color: 0x3d4f5f, roughness: .6, metalness: .2 });
  const lampe = new THREE.MeshStandardMaterial({ color: 0x33443a, emissive: 0x000000, roughness: .4 });
  const haut = new THREE.MeshStandardMaterial({ color: 0xf1d3b3, roughness: .75 });

  const mesh = (geometry, material, parent = inhalt) => {
    const object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  };
  const kasten = (b, h, t, x, y, z, material, parent) => {
    const object = mesh(new THREE.BoxGeometry(b, h, t), material, parent);
    object.position.set(x, y, z);
    return object;
  };

  // Tischplatte
  kasten(3.3, .08, 2.7, -.2, .04, 0, platte).castShadow = false;

  // Stativ mit Querstange und zwei Haltern
  kasten(.55, .07, .42, 0, .115, -1.1, stahl);
  mesh(new THREE.CylinderGeometry(.035, .035, 2.67, 20), stahl).position.set(0, 1.415, -1.1);
  const arm = mesh(new THREE.CylinderGeometry(.03, .03, 1.75, 16), stahl);
  arm.rotation.x = Math.PI / 2;
  arm.position.set(0, 2.68, -.255);
  kasten(.12, .12, .12, 0, 2.68, -1.1, dunkel);
  for (const z of [-HALTER_Z, HALTER_Z]) kasten(.14, .2, .14, 0, OBEN + .1, z, dunkel);

  // Schaukel: zwei Bänder und unten der Draht – dreht sich um die Aufhängung
  const schaukel = new THREE.Group();
  schaukel.name = 'Schaukel';
  schaukel.position.set(0, OBEN, 0);
  inhalt.add(schaukel);
  for (const z of [-HALTER_Z, HALTER_Z]) mesh(new THREE.CylinderGeometry(.012, .012, LANG, 8), alu, schaukel).position.set(0, -LANG / 2, z);
  const draht = mesh(new THREE.CylinderGeometry(.03, .03, 1.24, 16), alu, schaukel);
  draht.name = 'Draht';
  draht.rotation.x = Math.PI / 2;
  draht.position.y = -LANG;
  // Kraftpfeile an beiden Drahtenden (in der Mitte verdeckt sie der Magnet)
  const kraft = new THREE.Group();
  kraft.name = 'Kraft';
  kraft.position.y = -LANG;
  kraft.visible = false;
  schaukel.add(kraft);
  for (const z of [-.56, .56]) {
    const einer = pfeil(.5, .022, kraftFarbe);
    einer.rotation.z = -Math.PI / 2;
    einer.position.set(.06, 0, z);
    kraft.add(einer);
  }

  // Hufeisenmagnet: liegt auf einem Klotz, die Schenkel stehen über und unter dem Draht
  kasten(1.54, .37, .56, .32, .265, 0, holz);
  const magnet = new THREE.Group();
  magnet.name = 'Magnet';
  magnet.position.set(0, RUHE, 0);
  inhalt.add(magnet);
  kasten(1.3, .2, .44, .2, .4, 0, sued, magnet);
  kasten(.24, .5, .44, .97, .25, 0, sued, magnet);
  kasten(1.3, .2, .44, .2, -.4, 0, nord, magnet);
  kasten(.24, .5, .44, .97, -.25, 0, nord, magnet);
  // Aufdruck N und S: vorn, hinten, an den Enden und oben. Der Magnet ist oben und unten gleich gebaut –
  // steht er auf dem Kopf, zeigt der zweite Satz die Buchstaben wieder aufrecht.
  function buchstaben(oben, unten) {
    const gruppe = new THREE.Group();
    magnet.add(gruppe);
    const setze = (text, x, y, z, drehe) => {
      const einer = aufdruck(text, .19);
      if (!einer) return;
      einer.position.set(x, y, z);
      drehe?.(einer.rotation);
      gruppe.add(einer);
    };
    for (const [text, y] of [[oben, .4], [unten, -.4]]) {
      setze(text, .12, y, .223);
      setze(text, .12, y, -.223, r => { r.y = Math.PI; });
      setze(text, -.453, y, 0, r => { r.y = -Math.PI / 2; });
    }
    setze(oben, .12, .503, 0, r => { r.x = -Math.PI / 2; });
    return gruppe;
  }
  const aufrecht = buchstaben('S', 'N'), gewendet = buchstaben('N', 'S');
  gewendet.rotation.x = Math.PI;
  gewendet.visible = false;
  // Magnetfeld zwischen den Schenkeln: vom Nordpol zum Südpol
  const feldPfeile = new THREE.Group();
  feldPfeile.name = 'Magnetfeld';
  magnet.add(feldPfeile);
  for (const x of [-.3, .16, .6]) for (const z of [-.14, .14]) {
    const einer = pfeil(.52, .014, feldFarbe);
    einer.position.set(x, -.27, z);
    feldPfeile.add(einer);
  }

  // Netzgerät mit Minuspol (blau) und Pluspol (rot)
  const Z_MINUS = -.2, Z_PLUS = .2;
  kasten(.6, .4, .85, -1.5, .28, 0, gehaeuse);
  mesh(new THREE.CylinderGeometry(.05, .05, .04, 20), minusFarbe).position.set(-1.5, .5, Z_MINUS);
  mesh(new THREE.CylinderGeometry(.05, .05, .04, 20), plusFarbe).position.set(-1.5, .5, Z_PLUS);
  mesh(new THREE.CylinderGeometry(.065, .075, .06, 24), dunkel).position.set(-1.33, .51, 0);
  mesh(new THREE.SphereGeometry(.035, 16, 12), lampe).position.set(-1.68, .49, 0);
  for (const [zeichen, z, farbe] of [['−', Z_MINUS, '#1f56b5'], ['+', Z_PLUS, '#d2362b']]) {
    const eins = schild(zeichen, farbe);
    if (!eins) continue;
    eins.scale.setScalar(.19);
    eins.position.set(-1.72, .64, z * 1.5);
    inhalt.add(eins);
  }

  // Kabel: vom Netzgerät zu den Haltern. "aussen" lässt gekreuzte Kabel aneinander vorbeilaufen.
  function kabelKurve(zs, zh, aussen) {
    const mix = t => zs + (zh - zs) * t;
    return new THREE.CatmullRomCurve3([
      new THREE.Vector3(-1.5, .52, zs),
      new THREE.Vector3(-1.5, .98, zs),
      new THREE.Vector3(-1.3 - aussen, 1.75, mix(.5)),
      new THREE.Vector3(-.72 - aussen * .5, 2.42 + aussen * .4, mix(.9)),
      new THREE.Vector3(-.32, 2.56, zh),
      new THREE.Vector3(-.16, OBEN + .1, zh)
    ], false, 'centripetal');
  }
  const kurven = {
    minusHinten: kabelKurve(Z_MINUS, -HALTER_Z, 0), plusVorn: kabelKurve(Z_PLUS, HALTER_Z, 0),
    minusVorn: kabelKurve(Z_MINUS, HALTER_Z, .16), plusHinten: kabelKurve(Z_PLUS, -HALTER_Z, 0)
  };
  function kabelSatz(liste) {
    const gruppe = new THREE.Group();
    inhalt.add(gruppe);
    for (const [kurve, material] of liste) {
      mesh(new THREE.TubeGeometry(kurve, 56, .022, 8), material, gruppe);
      const stecker = mesh(new THREE.CylinderGeometry(.03, .03, .12, 12), material, gruppe);
      stecker.rotation.z = Math.PI / 2;
      stecker.position.copy(kurve.getPoint(1)).x += .05;
    }
    return gruppe;
  }
  // e = +1: Minus-Kabel am hinteren Halter – die Elektronen fließen im Draht nach vorn
  const kabel = {
    1: kabelSatz([[kurven.minusHinten, minusFarbe], [kurven.plusVorn, plusFarbe]]),
    [-1]: kabelSatz([[kurven.minusVorn, minusFarbe], [kurven.plusHinten, plusFarbe]])
  };

  // Weg der Elektronen: Minuspol → Kabel → Band → Draht → Band → Kabel → Pluspol
  function pfad(e) {
    const zA = e > 0 ? -HALTER_Z : HALTER_Z, zB = -zA;
    const hin = e > 0 ? kurven.minusHinten : kurven.minusVorn, zurueck = e > 0 ? kurven.plusVorn : kurven.plusHinten;
    const strecke = (a, b) => new THREE.LineCurve3(a, b);
    const teile = [
      { kurve: hin },
      { kurve: strecke(hin.getPoint(1), new THREE.Vector3(0, OBEN, zA)) },
      { kurve: strecke(new THREE.Vector3(0, 0, zA), new THREE.Vector3(0, -LANG, zA)), schaukel: true },
      { kurve: strecke(new THREE.Vector3(0, -LANG, zA), new THREE.Vector3(0, -LANG, zB)), schaukel: true },
      { kurve: strecke(new THREE.Vector3(0, -LANG, zB), new THREE.Vector3(0, 0, zB)), schaukel: true },
      { kurve: strecke(new THREE.Vector3(0, OBEN, zB), zurueck.getPoint(1)) },
      { kurve: zurueck, rueckwaerts: true }
    ];
    let laenge = 0;
    for (const teil of teile) { teil.laenge = teil.kurve.getLength(); teil.start = laenge; laenge += teil.laenge; }
    const anzahl = Math.round(laenge / .17);
    return { teile, laenge, anzahl, abstand: laenge / anzahl };
  }
  const pfade = { 1: pfad(1), [-1]: pfad(-1) };
  const elektronen = new THREE.InstancedMesh(new THREE.SphereGeometry(.042, 12, 8), elektronFarbe, Math.max(pfade[1].anzahl, pfade[-1].anzahl));
  elektronen.name = 'Elektronen';
  elektronen.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
  elektronen.frustumCulled = false;
  elektronen.count = 0;
  elektronen.visible = false;
  inhalt.add(elektronen);

  // Linke Hand: Daumen = Elektronen (+z), Zeigefinger = Magnetfeld (+y), Mittelfinger = Kraft (+x)
  const hand = new THREE.Group();
  hand.name = 'Linke Hand';
  // Sie schwebt rechts über dem Magneten, neben der Schaukel: Dort verdeckt sie nichts
  hand.position.set(.82, 2.1, .5);
  hand.visible = false;
  inhalt.add(hand);
  const flaeche = mesh(new THREE.CapsuleGeometry(.135, .1, 8, 20), haut, hand);
  flaeche.scale.x = .4;
  flaeche.position.set(-.03, -.17, -.02);
  const finger = (laenge, x, y, z, achse) => {
    const einer = mesh(new THREE.CapsuleGeometry(.042, laenge, 6, 12), haut, hand);
    if (achse === 'x') einer.rotation.z = -Math.PI / 2;
    if (achse === 'z') einer.rotation.x = Math.PI / 2;
    einer.position.set(x, y, z);
    return einer;
  };
  finger(.34, -.03, .17, .07, 'y');
  finger(.34, .17, -.03, -.01, 'x');
  finger(.3, -.03, -.2, .27, 'z');
  finger(.07, .04, -.06, -.085, 'x');
  finger(.06, .035, -.09, -.15, 'x');
  const zeigePfeil = pfeil(.3, .02, feldFarbe);
  zeigePfeil.position.set(-.03, .4, .07);
  const mittelPfeil = pfeil(.3, .02, kraftFarbe);
  mittelPfeil.rotation.z = -Math.PI / 2;
  mittelPfeil.position.set(.4, -.03, -.01);
  const daumenPfeil = pfeil(.3, .02, elektronFarbe);
  daumenPfeil.rotation.x = Math.PI / 2;
  daumenPfeil.position.set(-.03, -.2, .48);
  hand.add(zeigePfeil, mittelPfeil, daumenPfeil);

  const zustand = { an: false, e: 1, b: 1, staerke: 2 };
  const sicht = { elektronen: true, feld: true, hand: true };
  let lage = { winkel: 0, tempo: 0 }, versatz = 0, drehung = 0, feld = 1, lauf = 0;
  const punkt = new THREE.Vector3(), hilf = new THREE.Matrix4(), basis = new THREE.Matrix4();

  function elektronenSetzen() {
    const p = pfade[zustand.e > 0 ? 1 : -1];
    elektronen.count = p.anzahl;
    for (let i = 0; i < p.anzahl; i++) {
      const s = (i * p.abstand + lauf) % p.laenge;
      let teil = p.teile[0];
      for (const naechster of p.teile) { if (s >= naechster.start) teil = naechster; else break; }
      let u = Math.max(0, Math.min(1, (s - teil.start) / teil.laenge));
      if (teil.rueckwaerts) u = 1 - u;
      teil.kurve.getPointAt(u, punkt);
      if (teil.schaukel) punkt.applyMatrix4(schaukel.matrix);
      elektronen.setMatrixAt(i, hilf.makeTranslation(punkt.x, punkt.y, punkt.z));
    }
    elektronen.instanceMatrix.needsUpdate = true;
  }

  function uebernehmen() {
    const e = zustand.e > 0 ? 1 : -1, b = zustand.b > 0 ? 1 : -1;
    kabel[1].visible = e > 0;
    kabel[-1].visible = e < 0;
    alu.emissive.setHex(zustand.an ? FARBEN.elektron : 0x000000);
    alu.emissiveIntensity = zustand.an ? .3 : 0;
    lampe.emissive.setHex(zustand.an ? 0x42e07a : 0x000000);
    lampe.emissiveIntensity = zustand.an ? 1.4 : 0;
    feldPfeile.visible = sicht.feld;
    elektronen.visible = sicht.elektronen && zustand.an;
    // Die Hand bleibt eine linke Hand: Die drei Finger drehen sich gemeinsam mit
    basis.makeBasis(new THREE.Vector3(e * b, 0, 0), new THREE.Vector3(0, b, 0), new THREE.Vector3(0, 0, e));
    hand.quaternion.setFromRotationMatrix(basis);
    sichtbar();
  }
  function sichtbar() {
    const wirkt = zustand.an && feld > .5;
    hand.visible = sicht.hand && wirkt;
    kraft.visible = wirkt;
    if (wirkt) {
      kraft.rotation.y = richtung({ ...zustand, b: Math.cos(drehung) >= 0 ? 1 : -1 }) > 0 ? 0 : Math.PI;
      kraft.scale.setScalar(.7 + .2 * (zustand.staerke - 1));
    }
  }

  function animate(delta) {
    // Magnet umdrehen: herausziehen, drehen, wieder hineinschieben
    const zielDrehung = zustand.b > 0 ? 0 : Math.PI;
    if (Math.abs(drehung - zielDrehung) > 1e-3) {
      if (versatz < HERAUS - 1e-3) versatz = Math.min(HERAUS, versatz + 3.2 * delta);
      else drehung += Math.sign(zielDrehung - drehung) * Math.min(Math.abs(zielDrehung - drehung), 5 * delta);
    } else {
      drehung = zielDrehung;
      versatz = Math.max(0, versatz - 3.2 * delta);
    }
    magnet.position.x = versatz;
    magnet.rotation.x = drehung;
    aufrecht.visible = Math.cos(drehung) >= 0;
    gewendet.visible = !aufrecht.visible;
    feld = Math.max(0, 1 - versatz / .55);
    const b = Math.cos(drehung) >= 0 ? 1 : -1;
    lage = schwinge(lage, zielWinkel({ ...zustand, b }, feld), delta);
    schaukel.rotation.z = lage.winkel;
    schaukel.updateMatrix();
    sichtbar();
    if (elektronen.visible) {
      lauf += (.45 + .3 * zustand.staerke) * delta;
      elektronenSetzen();
    }
  }

  uebernehmen();
  schaukel.updateMatrix();

  return {
    root, inhalt, schaukel, draht, magnet, hand, elektronen, kraft, feldPfeile, kabel,
    zustand: () => ({ ...zustand }),
    lage: () => ({ winkel: lage.winkel, versatz, drehung, feld }),
    setze(neu) {
      Object.assign(zustand, neu);
      zustand.staerke = Math.max(1, Math.min(3, Math.round(Number(zustand.staerke) || 2)));
      uebernehmen();
    },
    zeige(neu) { Object.assign(sicht, neu); uebernehmen(); },
    animate,
    // Beschriftungen: Punkt im jeweiligen Bauteil, das Bauteil nimmt ihn bei jeder Bewegung mit
    schilder: [
      { id: 'magnet', text: 'Hufeisenmagnet', objekt: magnet, punkt: new THREE.Vector3(1.09, 0, .22) },
      { id: 'schaukel', text: 'Leiterschaukel', objekt: schaukel, punkt: new THREE.Vector3(0, -.5, HALTER_Z) },
      { id: 'netz', text: 'Netzgerät', objekt: inhalt, punkt: new THREE.Vector3(-1.5, .5, .42) },
      { id: 'feld', text: 'Magnetfeld', farbe: '#2f6fdb', objekt: magnet, punkt: new THREE.Vector3(-.3, 0, .14), wenn: () => sicht.feld },
      { id: 'kraft', text: 'Kraft', farbe: '#e0453a', objekt: kraft, punkt: new THREE.Vector3(.56, 0, .56), wenn: () => kraft.visible },
      { id: 'daumen', text: 'Daumen: Elektronen', farbe: '#f08a24', objekt: hand, punkt: new THREE.Vector3(-.03, -.2, .8), wenn: () => hand.visible },
      { id: 'zeigefinger', text: 'Zeigefinger: Magnetfeld', farbe: '#2f6fdb', objekt: hand, punkt: new THREE.Vector3(-.03, .72, .07), wenn: () => hand.visible },
      { id: 'mittelfinger', text: 'Mittelfinger: Kraft', farbe: '#e0453a', objekt: hand, punkt: new THREE.Vector3(.72, -.03, -.01), wenn: () => hand.visible }
    ]
  };
}
