import * as THREE from '../../../tests/windrad-ar/vendor/three.module.js';
import { masse, drehzahl, zustand, VERGLEICH } from './physik.js';

// Eine Einheit = ein Meter. Der Rotor zeigt nach +z, die Gondel reicht nach -z.
// Farben wie in der Schnitt-Zeichnung des Moduls: Getriebe grün, Bremse rot, Generator blau, Wellen grau.
export const FARBEN = { getriebe: 0x43a047, zahnrad: 0x66bb6a, bremse: 0xe0453a, generator: 0x2f6fdb, welle: 0x9aa5ad, nachfuehrung: 0xf2b632 };

const TAU = Math.PI * 2;

// Zahnrad: Scheibe mit Zähnen, Achse entlang z
function zahnrad(radius, dicke, zaehne, material) {
  const rad = new THREE.Group();
  const scheibe = new THREE.Mesh(new THREE.CylinderGeometry(radius * .88, radius * .88, dicke, 28), material);
  scheibe.rotation.x = Math.PI / 2;
  rad.add(scheibe);
  const zahn = new THREE.BoxGeometry(radius * .2, radius * .26, dicke);
  for (let i = 0; i < zaehne; i++) {
    const einer = new THREE.Mesh(zahn, material), w = i / zaehne * TAU;
    einer.position.set(Math.sin(w) * radius * .93, Math.cos(w) * radius * .93, 0);
    einer.rotation.z = -w;
    rad.add(einer);
  }
  return rad;
}

// Rotorblatt: zeigt nach +y, Wurzel an der Nabe, Spitze bei y = radius
function blattForm(radius, nabe) {
  const form = new THREE.Shape(), b = radius * .085, y0 = nabe * .5, lang = radius - y0;
  form.moveTo(-b * .22, y0);
  form.bezierCurveTo(-b * .78, y0 + lang * .1, -b * .62, y0 + lang * .5, -b * .2, y0 + lang * .82);
  form.quadraticCurveTo(-b * .08, y0 + lang * .97, b * .06, radius);
  form.quadraticCurveTo(b * .26, y0 + lang * .93, b * .32, y0 + lang * .74);
  form.bezierCurveTo(b * .52, y0 + lang * .4, b * .5, y0 + lang * .13, b * .26, y0);
  form.closePath();
  return form;
}

export function createAnlage(a) {
  const m = masse(a), L = m.gondelLang, H = m.gondelHoch, W = m.gondelBreit;
  const root = new THREE.Group();
  root.name = 'Windkraftanlage ' + a.jahr;
  const weiss = new THREE.MeshStandardMaterial({ color: 0xf6f8f6, roughness: .5, metalness: .1 });
  const huelle = new THREE.MeshStandardMaterial({ color: 0xf6f8f6, roughness: .5, metalness: .1 });
  const beton = new THREE.MeshStandardMaterial({ color: 0xb9bfc2, roughness: .95 });
  const dunkel = new THREE.MeshStandardMaterial({ color: 0x38464f, roughness: .7 });
  const welle = new THREE.MeshStandardMaterial({ color: FARBEN.welle, metalness: .6, roughness: .4 });
  const getriebeGlas = new THREE.MeshStandardMaterial({ color: FARBEN.getriebe, transparent: true, opacity: .2, roughness: .6, depthWrite: false });
  const gruen = new THREE.MeshStandardMaterial({ color: FARBEN.zahnrad, roughness: .55, metalness: .2 });
  const rot = new THREE.MeshStandardMaterial({ color: FARBEN.bremse, roughness: .5 });
  const blau = new THREE.MeshStandardMaterial({ color: FARBEN.generator, roughness: .5 });
  const generatorGlas = new THREE.MeshStandardMaterial({ color: FARBEN.generator, transparent: true, opacity: .28, roughness: .5, depthWrite: false });
  const silber = new THREE.MeshStandardMaterial({ color: 0xc7ccd1, metalness: .7, roughness: .35 });
  const gelb = new THREE.MeshStandardMaterial({ color: FARBEN.nachfuehrung, roughness: .6 });
  const trafoFarbe = new THREE.MeshStandardMaterial({ color: 0x8fa1ae, roughness: .7 });
  const stoff = [weiss, huelle, beton, dunkel, welle, getriebeGlas, gruen, rot, blau, generatorGlas, silber, gelb, trafoFarbe];

  const mesh = (geometry, material, parent = root) => {
    const object = new THREE.Mesh(geometry, material);
    parent.add(object);
    return object;
  };
  const kasten = (b, h, t, x, y, z, material, parent) => {
    const object = mesh(new THREE.BoxGeometry(b, h, t), material, parent);
    object.position.set(x, y, z);
    return object;
  };
  const walze = (radius, lang, x, y, z, material, parent, segmente = 20) => {   // Achse entlang z
    const object = mesh(new THREE.CylinderGeometry(radius, radius, lang, segmente), material, parent);
    object.rotation.x = Math.PI / 2;
    object.position.set(x, y, z);
    return object;
  };

  // Die Welle des Rotors liegt etwas unter der Mitte der Gondel – so hat darüber das kleine Zahnrad Platz
  const achseY = -.12 * H, schnellY = achseY + .34 * H;
  const gondelY = a.hub - achseY;
  const ringHoch = Math.max(.25, L * .05);
  const turmHoch = gondelY - H / 2 - ringHoch;

  // Fundament, Turm mit Tür, Transformator
  mesh(new THREE.CylinderGeometry(m.turmUnten * 2.1, m.turmUnten * 2.3, .5, 40), beton).position.y = .25;
  const turm = mesh(new THREE.CylinderGeometry(m.turmOben, m.turmUnten, turmHoch, 44), weiss);
  turm.name = 'Turm';
  turm.position.y = turmHoch / 2;
  kasten(Math.min(1.1, m.turmUnten * .9), 2.1, .16, 0, 1.55, m.turmUnten * .99, dunkel);
  const trafo = kasten(3, 2.6, 2.4, m.turmUnten + 4, 1.3, 2, trafoFarbe);
  trafo.name = 'Transformator';

  // Gondelnachführung: Drehkranz zwischen Turm und Gondel
  const kranz = mesh(new THREE.CylinderGeometry(m.turmOben * 1.22, m.turmOben * 1.22, ringHoch, 36), gelb);
  kranz.name = 'Gondelnachführung';
  kranz.position.y = turmHoch + ringHoch / 2;

  // Gondel: das Maschinenhaus
  // Kopf der Anlage: Gondel und Rotor drehen sich gemeinsam auf dem Turm (Gondelnachführung)
  const kopf = new THREE.Group();
  kopf.name = 'Kopf';
  root.add(kopf);
  const gondel = new THREE.Group();
  gondel.name = 'Gondel';
  gondel.position.y = gondelY;
  kopf.add(gondel);
  const gehaeuse = kasten(W, H, L, 0, 0, 0, huelle, gondel);
  // Umriss der Gondel: zu sehen, wenn die Hülle durchsichtig ist
  const umriss = new THREE.LineSegments(new THREE.EdgesGeometry(gehaeuse.geometry), new THREE.LineBasicMaterial({ color: 0x7d8f9b }));
  umriss.visible = false;
  gondel.add(umriss);
  const nabeZ = L / 2 + m.nabe * .9;

  const innen = new THREE.Group();
  innen.name = 'Inneres der Gondel';
  innen.visible = false;
  gondel.add(innen);
  // Achse: langsame Welle vom Rotor zum Getriebe
  const achse = new THREE.Group();
  achse.position.set(0, achseY, 0);
  innen.add(achse);
  walze(H * .075, nabeZ - L * .1, 0, 0, (nabeZ + L * .1) / 2, welle, achse);
  kasten(H * .05, H * .17, L * .05, 0, 0, L * .36, dunkel, achse);                        // Marke: daran sieht man die Drehung
  // Getriebe: großes Zahnrad (langsam) treibt kleines Zahnrad (schnell)
  const getriebeKasten = kasten(W * .62, H * .84, L * .2, 0, achseY + .12 * H, L * .09, getriebeGlas, innen);
  getriebeKasten.renderOrder = 2;
  const kanten = new THREE.LineSegments(new THREE.EdgesGeometry(getriebeKasten.geometry), new THREE.LineBasicMaterial({ color: FARBEN.getriebe }));
  kanten.position.copy(getriebeKasten.position);
  innen.add(kanten);
  const gross = zahnrad(.25 * H, L * .05, 18, gruen);
  gross.position.set(0, achseY, L * .09);
  const klein = zahnrad(.09 * H, L * .05, 8, gruen);
  klein.position.set(0, schnellY, L * .09);
  innen.add(gross, klein);
  // schnelle Welle mit Bremse
  const schnell = new THREE.Group();
  schnell.position.set(0, schnellY, 0);
  innen.add(schnell);
  walze(H * .04, L * .3, 0, 0, -L * .06, welle, schnell);
  kasten(H * .03, H * .1, L * .04, 0, 0, -L * .05, dunkel, schnell);
  const scheibe = walze(H * .2, L * .018, 0, 0, -L * .13, silber, schnell, 32);
  scheibe.name = 'Bremsscheibe';
  const backen = [-1, 1].map(seite => kasten(H * .16, H * .1, L * .016, 0, schnellY + H * .14, -L * .13 + seite * L * .034, rot, innen));
  // Generator: ein Magnet dreht sich schnell – wie beim Fahrrad-Dynamo
  const generator = walze(H * .22, L * .26, 0, schnellY, -L * .33, generatorGlas, innen, 32);
  generator.name = 'Generator';
  generator.renderOrder = 2;
  for (const z of [-L * .46, -L * .2]) {
    const reif = mesh(new THREE.TorusGeometry(H * .22, H * .012, 8, 40), blau, innen);
    reif.position.set(0, schnellY, z);
  }
  const magnet = new THREE.Group();
  magnet.position.set(0, schnellY, -L * .33);
  innen.add(magnet);
  kasten(H * .16, H * .1, L * .18, -H * .08, 0, 0, rot, magnet);
  kasten(H * .16, H * .1, L * .18, H * .08, 0, 0, blau, magnet);

  // Windmessung auf dem Dach
  const mast = mesh(new THREE.CylinderGeometry(H * .012, H * .012, H * .3, 8), dunkel, gondel);
  mast.position.set(0, H / 2 + H * .15, -L * .36);
  const windrad = new THREE.Group();
  windrad.name = 'Windmessung';
  windrad.position.set(0, H / 2 + H * .3, -L * .36);
  gondel.add(windrad);
  for (let i = 0; i < 3; i++) {
    const w = i / 3 * TAU;
    mesh(new THREE.SphereGeometry(H * .035, 10, 8), dunkel, windrad).position.set(Math.sin(w) * H * .1, 0, Math.cos(w) * H * .1);
  }

  // Rotor: Nabe mit drei Rotorblättern
  const rotor = new THREE.Group();
  rotor.name = 'Rotor';
  rotor.position.set(0, a.hub, nabeZ);
  kopf.add(rotor);
  const kappe = mesh(new THREE.SphereGeometry(m.nabe, 28, 18), weiss, rotor);
  kappe.scale.z = 1.25;
  const tief = m.radius * .085 * .14;
  const blatt = new THREE.ExtrudeGeometry(blattForm(m.radius, m.nabe), { depth: tief, bevelEnabled: false, curveSegments: 14 });
  blatt.translate(0, 0, -tief / 2);
  for (let i = 0; i < 3; i++) {
    const eines = mesh(blatt, weiss, rotor);
    eines.name = 'Rotorblatt ' + (i + 1);
    eines.rotation.z = i * TAU / 3;
  }

  let zeigeInnen = false, winkel = 0, dreh = 0, backe = 1, kopfZiel = 0;   // dreh: Umdrehungen je Minute (läuft weich an und aus)
  const marke = (x, y, z, eltern = gondel) => ({ objekt: eltern, punkt: new THREE.Vector3(x, y, z) });
  const innenDa = ctx => zeigeInnen && ctx.gondelPx > 170;
  const nah = ctx => ctx.gondelPx > 110;

  return {
    root, kopf, rotor, gondel, innen, anlage: a, masse: m, gondelMitte: new THREE.Vector3(0, gondelY, 0),
    // Anfang und Ende der Gondel: daran misst die Seite, wie groß die Gondel gerade im Bild ist
    gondelEnden: [new THREE.Vector3(0, gondelY, L / 2), new THREE.Vector3(0, gondelY, -L / 2)],
    setInnen(wert) {
      zeigeInnen = Boolean(wert);
      huelle.transparent = zeigeInnen;
      huelle.opacity = zeigeInnen ? .13 : 1;
      huelle.depthWrite = !zeigeInnen;
      huelle.needsUpdate = true;
      gehaeuse.renderOrder = zeigeInnen ? 3 : 0;
      innen.visible = zeigeInnen;
      umriss.visible = zeigeInnen;
    },
    drehzahl: () => dreh,
    // Gondel samt Rotor auf dem Turm drehen (Bogenmaß); sofort = ohne Fahrt
    dreheKopf(ziel, sofort) { kopfZiel = ziel; if (sofort) kopf.rotation.y = ziel; },
    animate(delta, wind) {
      const rest = kopfZiel - kopf.rotation.y;
      kopf.rotation.y += Math.abs(rest) < .002 ? rest : Math.sign(rest) * Math.min(Math.abs(rest), delta * .8);
      const ziel = drehzahl(wind, a), sturm = zustand(wind) === 'sturm';
      // Der Rotor ist schwer: Er läuft langsam an – die Bremse hält ihn schnell an
      dreh += (ziel - dreh) * Math.min(1, delta * (sturm ? 2.2 : .9));
      if (Math.abs(ziel - dreh) < .002) dreh = ziel;
      winkel += dreh / 60 * TAU * delta;
      rotor.rotation.z = -winkel;
      achse.rotation.z = -winkel;
      gross.rotation.z = -winkel;
      const fix = winkel * (.25 / .09);                 // kleines Zahnrad: so viel schneller, wie es kleiner ist
      klein.rotation.z = fix + TAU / 16;
      schnell.rotation.z = fix;
      magnet.rotation.z = fix;
      windrad.rotation.y -= delta * Math.min(14, .6 + wind * .7);
      // Bremsbacken: bei Sturm an der Scheibe, sonst mit Luft
      backe += ((sturm ? 0 : 1) - backe) * Math.min(1, delta * 6);
      backen.forEach((b, i) => { b.position.z = -L * .13 + (i ? 1 : -1) * L * (.017 + .017 * backe); });
    },
    schilder: [
      { id: 'rotor', text: 'Rotor · Ø ' + a.d + ' m', ...marke(m.radius * .45, a.hub + m.radius * .45, nabeZ, kopf) },
      { id: 'gondel', text: 'Gondel', ...marke(W / 2, H * .3, -L * .1), wenn: ctx => !innenDa(ctx) },
      { id: 'turm', text: 'Turm · Nabenhöhe ' + a.hub + ' m', ...marke(m.turmOben, turmHoch * .55, 0, root) },
      { id: 'nabe', text: 'Nabe', ...marke(0, a.hub + m.nabe, nabeZ, kopf), wenn: nah },
      { id: 'windmessung', text: 'Windmessung', ...marke(0, H / 2 + H * .32, -L * .36), wenn: nah },
      { id: 'nachfuehrung', text: 'Gondelnachführung', farbe: '#b9860b', ...marke(m.turmOben * 1.22, turmHoch + ringHoch / 2, 0, root), wenn: nah },
      { id: 'achse', text: 'Achse', ...marke(0, achseY + H * .08, L * .34), wenn: innenDa },
      { id: 'getriebe', text: 'Getriebe', farbe: '#2e7d32', ...marke(W * .31, achseY + H * .5, L * .09), wenn: innenDa },
      { id: 'bremse', text: 'Bremse', farbe: '#c62828', ...marke(0, schnellY + H * .2, -L * .13), wenn: innenDa },
      { id: 'generator', text: 'Generator', farbe: '#2f6fdb', ...marke(H * .22, schnellY, -L * .33), wenn: innenDa },
      { id: 'transformator', text: 'Transformator', ...marke(m.turmUnten + 4, 2.7, 2, root), wenn: ctx => ctx.meterPx > 5 }
    ],
    dispose() {
      root.traverse(o => { if (o.geometry) o.geometry.dispose(); });
      stoff.forEach(s => s.dispose());
    }
  };
}

// Zum Vergleich wie im Modul: Frauenkirche (99 m) und Olympiaturm (291 m) – dazu ein Haus und ein Mensch
export function createVergleich() {
  const root = new THREE.Group();
  root.name = 'Vergleich';
  const ziegel = new THREE.MeshStandardMaterial({ color: 0xb5674f, roughness: .9 });
  const dach = new THREE.MeshStandardMaterial({ color: 0x9c4a3a, roughness: .9 });
  const kupfer = new THREE.MeshStandardMaterial({ color: 0x5f9d8a, roughness: .7 });
  const grau = new THREE.MeshStandardMaterial({ color: 0xc9ced3, roughness: .8 });
  const putz = new THREE.MeshStandardMaterial({ color: 0xf4e3c8, roughness: .9 });
  const jacke = new THREE.MeshStandardMaterial({ color: 0xf08a24, roughness: .8 });
  const mesh = (geometry, material, parent) => { const o = new THREE.Mesh(geometry, material); parent.add(o); return o; };
  const giebelhaus = (breit, wand, first, lang, mauer, ziegelDach, parent) => {      // Wände und Satteldach, First entlang z
    mesh(new THREE.BoxGeometry(breit, wand, lang), mauer, parent).position.y = wand / 2;
    const form = new THREE.Shape(), rand = breit * .04;
    form.moveTo(-breit / 2 - rand, wand); form.lineTo(breit / 2 + rand, wand); form.lineTo(0, first); form.closePath();
    const g = new THREE.ExtrudeGeometry(form, { depth: lang + rand * 2, bevelEnabled: false });
    g.translate(0, 0, -lang / 2 - rand);
    mesh(g, ziegelDach, parent);
  };

  // Frauenkirche: Langhaus und zwei Türme mit Hauben, 99 m
  const kirche = new THREE.Group();
  kirche.name = 'Frauenkirche';
  kirche.position.set(-235, 0, -30);
  root.add(kirche);
  giebelhaus(40, 36, 58, 96, ziegel, dach, kirche);
  for (const x of [-13, 13]) {
    mesh(new THREE.BoxGeometry(13, 86, 13), ziegel, kirche).position.set(x, 43, 52);
    const haube = mesh(new THREE.SphereGeometry(7.6, 20, 14), kupfer, kirche);
    haube.scale.y = (VERGLEICH.frauenkirche - 86) / 7.6;
    haube.position.set(x, 86, 52);
  }
  // Olympiaturm: Schaft, Turmkorb, Antenne, 291 m
  const turm = new THREE.Group();
  turm.name = 'Olympiaturm';
  turm.position.set(-150, 0, -50);
  root.add(turm);
  mesh(new THREE.CylinderGeometry(3.6, 8.2, 205, 28), grau, turm).position.y = 102.5;
  mesh(new THREE.CylinderGeometry(14, 11, 9, 32), grau, turm).position.y = 178;
  mesh(new THREE.CylinderGeometry(12.5, 14, 9, 32), grau, turm).position.y = 187;
  mesh(new THREE.CylinderGeometry(7, 9, 7, 28), grau, turm).position.y = 196;
  mesh(new THREE.CylinderGeometry(.9, 2.6, VERGLEICH.olympiaturm - 200, 14), grau, turm).position.y = 200 + (VERGLEICH.olympiaturm - 200) / 2;
  // Haus (10 m bis zum First) und Mensch (1,75 m)
  const haus = new THREE.Group();
  haus.name = 'Haus';
  haus.position.set(34, 0, 26);
  root.add(haus);
  giebelhaus(9, 6.2, 10, 11, putz, dach, haus);
  const mensch = new THREE.Group();
  mensch.name = 'Mensch';
  mensch.position.set(7, 0, 12);
  root.add(mensch);
  mesh(new THREE.CapsuleGeometry(.24, 1.02, 6, 12), jacke, mensch).position.y = .77;
  mesh(new THREE.SphereGeometry(.13, 14, 10), putz, mensch).position.y = 1.62;

  return {
    root,
    schilder: [
      { id: 'frauenkirche', text: 'Frauenkirche · 99 m', objekt: kirche, punkt: new THREE.Vector3(0, VERGLEICH.frauenkirche, 52) },
      { id: 'olympiaturm', text: 'Olympiaturm · 291 m', objekt: turm, punkt: new THREE.Vector3(0, 205, 0) },
      { id: 'haus', text: 'Haus · 10 m', objekt: haus, punkt: new THREE.Vector3(0, 10, 0), wenn: ctx => ctx.meterPx > 2.2 },
      { id: 'mensch', text: 'Mensch', objekt: mensch, punkt: new THREE.Vector3(0, 1.8, 0), wenn: ctx => ctx.meterPx > 9 }
    ]
  };
}
