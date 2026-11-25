import * as THREE from '../../../../tests/windrad-ar/vendor/three.module.js';
import { OrbitControls } from '../../../../tests/windrad-ar/vendor/OrbitControls.js';
import { createKraftwerk, createVergleich } from './model.js';
import { KRAFTWERK, beobachtung, steckbrief, vergleich as vergleichSatz, zustand } from './reaktor.js';

/* Kernkraftwerk in echter Größe (nach dem Muster 7M/NT/ar-windrad).
   3D:  das Kraftwerk zum Drehen, mit Frauenkirche und Olympiaturm zum Vergleich; „In den Reaktor schauen“ macht Reaktorgebäude
        und Maschinenhaus durchsichtig: Reaktordruckgefäß mit Brennelementen und Steuerstäben, Dampferzeuger, Turbine, Generator.
        Die Regelstäbe lassen sich ein- und ausfahren – Leistung, Dampfwolke und Turbine folgen.
   AR:  draußen – das Kamerabild ist der Hintergrund, der Lagesensor des Geräts dreht die Blickrichtung mit. Das Kraftwerk steht
        in echter Größe in einiger Entfernung; ohne Marker, ohne WebXR – läuft deshalb auch in Safari auf iPad und iPhone. */
const $ = id => document.getElementById(id);
const rad = THREE.MathUtils.degToRad, grad = THREE.MathUtils.radToDeg;
const parameter = new URLSearchParams(location.search), TEST = parameter.has('test');
const AUGEN = 1.5;                                                                      // Höhe des Geräts über dem Boden in m
const KAMERA_WINKEL = Math.max(40, Math.min(90, Number(parameter.get('fov')) || 62));   // Blickwinkel der Kamera über die lange Bildseite
const BLICK_3D = 42;
const state = { mode: '3d', regel: 0, abstand: 250, zoom: 1, ready: false, erklaert: false };
const stage = $('stage'), video = $('camera');
let renderer, scene, camera, orbit, boden, platz, werk, vergleich;
let stream = null, startVersion = 0, toastTimer, lastTime = 0, frameCount = 0;
let schilder = [], ctx = { reaktorPx: 0, meterPx: 0 };
const sensor = { da: false, laeuft: false, alpha: 0, beta: 0, gamma: 0 };
const zielQ = new THREE.Quaternion(), richtung = new THREE.Vector3(0, 0, -1);
const punkt = new THREE.Vector3(), hilf = new THREE.Vector3();

function icons() { window.lucide?.createIcons(); }
function message(text) {
  $('toast').textContent = text;
  $('toast').hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('toast').hidden = true; }, 7000);
}
function status(text, kind = 'ready') {
  $('status').textContent = text;
  $('status-dot').className = 'status-dot ' + kind;
}
function selectMode(mode) {
  state.mode = mode;
  document.body.dataset.mode = mode;
  for (const name of ['3d', 'ar']) {
    $('mode-' + name).classList.toggle('selected', mode === name);
    $('mode-' + name).setAttribute('aria-pressed', String(mode === name));
  }
  $('aufstellen').hidden = mode !== 'ar';
  $('richtung').hidden = true;
  for (const id of ['abstand', 'zoom']) $(id).disabled = mode !== 'ar';
}

/* ---------- 3D-Ansicht ---------- */
function fitView() {
  const mit = $('vergleich').checked;
  const hoch = Math.max(KRAFTWERK.kuehlturm + 60, mit ? 291 : 0) * 1.06;
  const links = mit ? -330 : -70, rechts = 330, mitte = (links + rechts) / 2;
  const aspect = Math.max(.25, stage.clientWidth / stage.clientHeight), t = Math.tan(rad(BLICK_3D / 2));
  const distance = Math.max(hoch / 2 / t, (rechts - links) * 1.1 / 2 / (t * aspect)) * 1.1;
  orbit.target.set(mitte, hoch * .4, -40);
  camera.position.set(mitte + distance * .3, hoch * .4 + distance * .1, distance * .95);
  orbit.minDistance = 3;
  orbit.update();
}
function zumReaktor() {
  $('innen').checked = true;
  $('labels').checked = true;          // ganz nah gehören die Namen der Bauteile dazu
  werk.setInnen(true);
  if (state.mode === 'ar') {
    // Fernglas: so weit heranholen, dass das Reaktorgebäude etwa die halbe Bildbreite füllt
    const proMeter = stage.clientHeight / (2 * hilf.copy(werk.reaktorMitte).add(platz.position).distanceTo(camera.position) * Math.tan(rad(arBlick(1) / 2)));
    setzeZoom(stage.clientWidth * .5 / (proMeter * werk.reaktorBreite));
    message('Halte das Gerät ruhig und richte es auf das runde Reaktorgebäude mit der Kuppel.');
    return;
  }
  const g = werk.reaktorMitte, B = werk.reaktorBreite;
  orbit.target.set(g.x + 20, g.y - 8, g.z);
  // schräg von vorn-rechts, damit Druckgefäß, Dampferzeuger und die Turbine im Maschinenhaus zu sehen sind
  camera.position.set(g.x + B * 1.4, g.y + B * .5, g.z + B * 1.9);
  orbit.minDistance = 8;
  orbit.update();
}
function resize() {
  if (!renderer) return;
  const width = Math.max(1, stage.clientWidth), height = Math.max(1, stage.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
}

function buildScene() {
  renderer = new THREE.WebGLRenderer({ canvas: $('scene'), antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.12;
  scene = new THREE.Scene();
  himmel(true);
  scene.add(new THREE.HemisphereLight(0xffffff, 0xa9bda3, 2.5));
  const sonne = new THREE.DirectionalLight(0xfffaf0, 3);
  sonne.position.set(-300, 600, 500);
  scene.add(sonne);
  boden = new THREE.Mesh(new THREE.CircleGeometry(5000, 64), new THREE.MeshStandardMaterial({ color: 0xb5d39a, roughness: 1 }));
  boden.rotation.x = -Math.PI / 2;
  boden.position.y = -.02;
  scene.add(boden);
  platz = new THREE.Group();          // hier steht das Kraftwerk; draußen rückt der ganze Platz in Blickrichtung
  scene.add(platz);
  vergleich = createVergleich();
  vergleich.root.position.x = -70;    // links neben dem Kraftwerk
  platz.add(vergleich.root);
  werk = createKraftwerk();
  werk.setInnen($('innen').checked);
  werk.setRegel(state.regel, true);
  platz.add(werk.root);
  schilder = [...werk.schilder, ...vergleich.schilder.map(s => ({ ...s, vergleich: true }))].map(eintrag => {
    const element = document.createElement('div');
    element.className = 'part-label';
    element.textContent = eintrag.text;
    element.hidden = true;
    if (eintrag.farbe) element.style.borderLeftColor = eintrag.farbe;
    stage.insertBefore(element, $('loading'));
    return { ...eintrag, element };
  });
  camera = new THREE.PerspectiveCamera(BLICK_3D, 1, .3, 9000);
  orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = .07;
  orbit.enablePan = false;
  orbit.maxDistance = 3500;
  orbit.maxPolarAngle = Math.PI * .9;
  resize();
  if (parameter.get('ansicht') === 'reaktor') zumReaktor(); else fitView();
  renderer.setAnimationLoop(render);
  state.ready = true;
  document.body.dataset.ready = 'true';
  $('loading').hidden = true;
  status('3D-Modell in echter Größe');
}
function himmel(an) {
  scene.background = an ? new THREE.Color(0xd3e9fa) : null;
  scene.fog = an ? new THREE.Fog(0xd3e9fa, 1200, 5200) : null;
}

/* ---------- Beschriftung ---------- */
function updateLabels() {
  const enabled = $('labels').checked;
  // Wie groß ist das Reaktorgebäude gerade im Bild? Davon hängt ab, welche Schilder Platz haben.
  const weit = hilf.copy(werk.reaktorMitte).applyMatrix4(platz.matrixWorld).distanceTo(camera.position);
  ctx.meterPx = stage.clientHeight / (2 * Math.max(1, weit) * Math.tan(rad(camera.fov / 2)));
  ctx.reaktorPx = ctx.meterPx * werk.reaktorBreite;
  const occupied = [];
  for (const { element, objekt, punkt: ort, wenn, vergleich: zumVergleich } of schilder) {
    if (!enabled || (zumVergleich && !vergleich.root.visible) || (wenn && !wenn(ctx))) { element.hidden = true; continue; }
    const projected = objekt.localToWorld(punkt.copy(ort)).project(camera);
    const x = (projected.x * .5 + .5) * stage.clientWidth;
    const y = (-projected.y * .5 + .5) * stage.clientHeight;
    if (projected.z < -1 || projected.z > 1 || x < 0 || y < 42 || x > stage.clientWidth - 60 || y > stage.clientHeight - 24) { element.hidden = true; continue; }
    element.hidden = false;
    const width = element.offsetWidth, height = element.offsetHeight;
    const left = Math.min(stage.clientWidth - width - 12, Math.max(12, x));
    let top = y;
    for (let runde = 0; runde < 8; runde++) {
      const other = occupied.find(o => left < o.left + o.width + 4 && o.left < left + width + 4 && top < o.top + o.height + 3 && o.top < top + height + 3);
      if (!other) break;
      top = other.top + other.height + 4;
    }
    if (top > stage.clientHeight - height - 6) { element.hidden = true; continue; }
    element.style.left = left + 'px';
    element.style.top = top + 'px';
    occupied.push({ left, top, width, height });
  }
}

/* ---------- Draußen: Kamera und Lagesensor (wie beim Windrad) ---------- */
function arBlick(zoom = state.zoom) {
  const W = stage.clientWidth, H = Math.max(1, stage.clientHeight), vw = video.videoWidth || 1280, vh = video.videoHeight || 720;
  const anzeige = Math.max(W / vw, H / vh), brennweite = Math.max(vw, vh) / 2 / Math.tan(rad(KAMERA_WINKEL) / 2);
  return grad(2 * Math.atan(H / 2 / (brennweite * anzeige * zoom)));
}
const euler = new THREE.Euler(), q0 = new THREE.Quaternion(), q1 = new THREE.Quaternion(-Math.sqrt(.5), 0, 0, Math.sqrt(.5)), zAchse = new THREE.Vector3(0, 0, 1);
function lageZuBlick(ziel) {
  const dreh = typeof window.orientation === 'number' ? window.orientation : (screen.orientation && screen.orientation.angle) || 0;
  euler.set(sensor.beta, sensor.alpha, -sensor.gamma, 'YXZ');
  ziel.setFromEuler(euler).multiply(q1).multiply(q0.setFromAxisAngle(zAchse, -rad(dreh)));
}
function onLage(e) {
  if (e.beta == null && e.gamma == null) return;
  sensor.alpha = rad(e.alpha || 0);
  sensor.beta = rad(e.beta || 0);
  sensor.gamma = rad(e.gamma || 0);
  sensor.da = true;
}
async function sensorErlaubnis() {
  const D = window.DeviceOrientationEvent;
  if (!D) return TEST ? 'ok' : 'fehlt';
  if (typeof D.requestPermission !== 'function') return 'ok';
  try { return (await D.requestPermission()) === 'granted' ? 'ok' : 'abgelehnt'; } catch (_e) { return 'abgelehnt'; }
}
function aufstellen() {
  lageZuBlick(zielQ);
  punkt.set(0, 0, -1).applyQuaternion(zielQ);
  punkt.y = 0;
  if (punkt.lengthSq() > .04) richtung.copy(punkt).normalize();
  stelle();
}
function stelle() {
  platz.position.copy(richtung).multiplyScalar(state.abstand);
  platz.rotation.y = Math.atan2(-richtung.x, -richtung.z);
  platz.updateMatrixWorld(true);
  if (state.mode === 'ar') status('Das Kraftwerk steht ' + state.abstand + ' m vor dir', 'ready');
}
function setzeZoom(wert) {
  state.zoom = Math.max(1, Math.min(12, Math.round(wert * 2) / 2));
  $('zoom').value = String(state.zoom);
  $('zoom-output').textContent = state.zoom.toLocaleString('de-DE') + '-fach';
  video.style.transform = state.mode === 'ar' && state.zoom > 1 ? 'scale(' + state.zoom + ')' : '';
}
// Pfeil am Rand, wenn das Reaktorgebäude nicht im Bild ist
function richtungZeigen() {
  const chip = $('richtung');
  hilf.copy(werk.reaktorMitte).applyMatrix4(platz.matrixWorld);
  const imRaum = punkt.copy(hilf).applyMatrix4(camera.matrixWorldInverse), bild = hilf.project(camera);
  const hinten = imRaum.z > 0;
  let text = '', wo = '';
  if (hinten || Math.abs(bild.x) > 1) { const rechts = imRaum.x > 0; text = rechts ? 'Kraftwerk ▶' : '◀ Kraftwerk'; wo = rechts ? 'rechts' : 'links'; }
  else if (bild.y > 1) { text = '▲ Reaktor weiter oben'; wo = 'oben'; }
  else if (bild.y < -1) { text = '▼ weiter unten'; wo = 'unten'; }
  chip.hidden = !text;
  if (text) { chip.textContent = text; chip.dataset.wo = wo; }
}

function drawVideoCover(context, width, height) {
  const ratio = Math.max(width / video.videoWidth, height / video.videoHeight) * state.zoom;
  const sourceWidth = width / ratio, sourceHeight = height / ratio;
  context.drawImage(video, (video.videoWidth - sourceWidth) / 2, (video.videoHeight - sourceHeight) / 2, sourceWidth, sourceHeight, 0, 0, width, height);
}
function render(time) {
  const delta = lastTime ? Math.min((time - lastTime) / 1000, .1) : 0;
  lastTime = time;
  if (!document.hidden) werk.animate(delta);
  // Ganz nah am Reaktor stehen die Vergleichsbauten nur verwirrend im Hintergrund
  vergleich.root.visible = $('vergleich').checked && !(state.mode === '3d' && ctx.reaktorPx > 260);
  if (state.mode === 'ar') {
    if (sensor.da) {
      lageZuBlick(zielQ);
      if (sensor.laeuft) camera.quaternion.slerp(zielQ, 1 - Math.exp(-delta * 16 / Math.sqrt(state.zoom)));
      else { camera.quaternion.copy(zielQ); sensor.laeuft = true; }
    }
    camera.position.set(0, AUGEN, 0);
    const blick = arBlick();
    if (Math.abs(blick - camera.fov) > .01) { camera.fov = blick; camera.updateProjectionMatrix(); }
    camera.updateMatrixWorld();
    richtungZeigen();
  } else {
    const weit = Math.max(1, camera.position.distanceTo(orbit.target));
    orbit.maxPolarAngle = Math.PI / 2 + Math.asin(Math.min(.98, Math.max(0, (orbit.target.y - AUGEN) / weit)));
    orbit.update();
  }
  renderer.render(scene, camera);
  updateLabels();
  frameCount++;
}

function releaseCamera() {
  stream?.getTracks().forEach(track => track.stop());
  stream = null;
  video.pause();
  video.srcObject = null;
  video.hidden = true;
  video.style.transform = '';
}
function stopAR() {
  startVersion++;
  releaseCamera();
  window.removeEventListener('deviceorientation', onLage);
  sensor.da = sensor.laeuft = false;
  if (werk) {
    platz.position.set(0, 0, 0);
    platz.rotation.y = 0;
    platz.updateMatrixWorld(true);
    boden.visible = true;
    himmel(true);
    orbit.enabled = true;
    camera.fov = BLICK_3D;
    camera.updateProjectionMatrix();
  }
  selectMode('3d');
  $('mode-ar').disabled = false;
  status('3D-Modell in echter Größe');
  resize();
  if (werk) fitView();
}
async function startAR() {
  if (!state.ready || $('mode-ar').disabled || state.mode === 'ar') return;
  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
    message('Die Kamera geht hier nicht. Öffne die Seite in Safari, Chrome oder Edge. Die 3D-Ansicht bleibt.');
    return;
  }
  const version = ++startVersion;
  $('mode-ar').disabled = true;
  status('Kamera wird gestartet', 'searching');
  let nextStream;
  try {
    const erlaubt = await sensorErlaubnis();
    if (erlaubt === 'fehlt') throw Object.assign(new Error('kein Sensor'), { name: 'KeinSensor' });
    window.addEventListener('deviceorientation', onLage);
    if (erlaubt === 'abgelehnt') {
      for (let i = 0; i < 12 && !sensor.da; i++) await new Promise(resolve => setTimeout(resolve, 60));
      if (!sensor.da) throw Object.assign(new Error('abgelehnt'), { name: 'SensorAbgelehnt' });
    }
    nextStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: 'environment' }, width: { ideal: 1280 }, height: { ideal: 720 } } });
    if (version !== startVersion) { nextStream.getTracks().forEach(track => track.stop()); return; }
    stream = nextStream;
    video.srcObject = stream;
    let videoTimeout;
    try {
      await Promise.race([video.play(), new Promise((_, reject) => { videoTimeout = setTimeout(() => reject(new Error('Die Kamera liefert kein Bild.')), 10000); })]);
    } finally { clearTimeout(videoTimeout); }
    for (let i = 0; i < 50 && !sensor.da; i++) await new Promise(resolve => setTimeout(resolve, 60));
    if (version !== startVersion) return;
    if (!sensor.da) throw Object.assign(new Error('keine Lage'), { name: 'KeinSensor' });
    selectMode('ar');
    video.hidden = false;
    boden.visible = false;
    himmel(false);
    orbit.enabled = false;
    setzeZoom(1);
    sensor.laeuft = false;
    aufstellen();
    resize();
  } catch (error) {
    nextStream?.getTracks().forEach(track => track.stop());
    if (version !== startVersion) return;
    stopAR();
    const description = {
      NotAllowedError: 'Der Zugriff auf die Kamera wurde nicht erlaubt.',
      NotFoundError: 'Keine Kamera gefunden.',
      NotReadableError: 'Die Kamera wird gerade von einer anderen App benutzt.',
      OverconstrainedError: 'Die Kamera kann diese Einstellung nicht.',
      KeinSensor: 'Dieses Gerät meldet nicht, wohin es zeigt. Draußen-AR geht mit Tablet oder Handy.',
      SensorAbgelehnt: 'Ohne den Bewegungssensor geht es nicht. Lade die Seite neu und tippe bei der Frage auf „Erlauben“.'
    }[error.name] || 'Die AR-Ansicht konnte nicht gestartet werden.';
    message(description + ' Die 3D-Ansicht bleibt.');
    console.warn('Kernkraftwerk AR:', error.name, error.message);
  } finally {
    if (version === startVersion) $('mode-ar').disabled = false;
  }
}

/* ---------- Bedienen ---------- */
function zeigeZustand() {
  const s = steckbrief(state.regel), z = zustand(state.regel);
  $('c-kuehlturm').textContent = s.kuehlturm;
  $('c-reaktor').textContent = s.reaktor;
  $('c-regel').textContent = s.regel;
  $('c-leistung').textContent = s.leistung;
  $('regel-output').textContent = Math.round(state.regel * 100) + ' % eingefahren' + (z === 'aus' ? ' · abgeschaltet' : '');
  $('regel-output').classList.toggle('sturm', z === 'aus');
  $('beobachtung').textContent = beobachtung(state.regel);
  $('vergleich-satz').textContent = vergleichSatz();
}
function screenshot() {
  if (!state.ready) return;
  const image = document.createElement('canvas');
  image.width = renderer.domElement.width;
  image.height = renderer.domElement.height;
  const context = image.getContext('2d');
  if (state.mode === 'ar' && video.videoWidth) drawVideoCover(context, image.width, image.height);
  context.drawImage(renderer.domElement, 0, 0);
  const link = document.createElement('a');
  link.href = image.toDataURL('image/png');
  link.download = 'grumi-kernkraftwerk' + (state.mode === 'ar' ? '-ar' : '') + '.png';
  link.click();
}

icons();
$('mode-ar').addEventListener('click', () => { if (state.mode === 'ar') return; if (state.erklaert) startAR(); else $('hilfe-dialog').showModal(); });
$('hilfe-los').addEventListener('click', () => { state.erklaert = true; $('hilfe-dialog').close(); startAR(); });
$('hilfe-open').addEventListener('click', () => $('hilfe-dialog').showModal());
$('hilfe-close').addEventListener('click', () => $('hilfe-dialog').close());
$('hilfe-dialog').addEventListener('click', event => { if (event.target === $('hilfe-dialog')) $('hilfe-dialog').close(); });
$('mode-3d').addEventListener('click', () => { if (state.mode === 'ar' || stream || $('mode-ar').disabled) stopAR(); });
$('regel').addEventListener('input', event => { state.regel = Number(event.target.value) / 100; werk?.setRegel(state.regel); zeigeZustand(); });
$('innen').addEventListener('change', event => { werk?.setInnen(event.target.checked); });
$('vergleich').addEventListener('change', () => { if (state.mode === '3d' && ctx.reaktorPx <= 260) fitView(); });
$('abstand').addEventListener('input', event => {
  state.abstand = Number(event.target.value);
  $('abstand-output').textContent = state.abstand + ' m';
  if (state.mode === 'ar') stelle();
});
$('zoom').addEventListener('input', event => setzeZoom(Number(event.target.value)));
$('aufstellen').addEventListener('click', () => { if (state.mode === 'ar' && sensor.da) { aufstellen(); message('Das Kraftwerk steht jetzt dort, wohin du schaust.'); } });
$('reset-view').addEventListener('click', () => { if (!state.ready) return; if (state.mode === 'ar') setzeZoom(1); else fitView(); });
$('reaktor-view').addEventListener('click', () => { if (state.ready) zumReaktor(); });
$('snapshot').addEventListener('click', screenshot);
$('fullscreen').hidden = !document.fullscreenEnabled;
$('fullscreen').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.querySelector('.lab').requestFullscreen(); }
  catch (_error) { message('Vollbild geht in diesem Browser nicht.'); }
});
$('reload').addEventListener('click', () => location.reload());
window.addEventListener('pagehide', () => { if (stream || $('mode-ar').disabled) stopAR(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && (stream || $('mode-ar').disabled)) stopAR(); });
new ResizeObserver(resize).observe(stage);
try {
  if (window.matchMedia?.('(max-width: 720px)').matches) $('labels').checked = false;
  if (parameter.get('ansicht') === 'reaktor') $('innen').checked = true;
  state.regel = Number($('regel').value) / 100;
  buildScene();
  selectMode('3d');
  zeigeZustand();
} catch (error) {
  $('loading').hidden = true;
  $('fatal').hidden = false;
  $('fatal-text').textContent = 'Die 3D-Grafik konnte nicht gestartet werden. Öffne die Seite in einem aktuellen Browser.';
  $('mode-ar').disabled = true;
  console.error('Kernkraftwerk:', error);
}

if (TEST) {
  window.kraftwerkTest = {
    state: () => {
      const reaktor = hilf.copy(werk.reaktorMitte).applyMatrix4(platz.matrixWorld).project(camera);
      return { ...state, sensor: sensor.da, leistung: +werk.leistung().toFixed(3), fov: camera.fov, innen: werk.innen.visible, vergleich: vergleich.root.visible,
        platz: platz.position.toArray().map(n => +n.toFixed(2)), drehung: +platz.rotation.y.toFixed(3), kamera: camera.position.toArray().map(n => +n.toFixed(2)),
        blick: new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion).toArray().map(n => +n.toFixed(3)), reaktor: [+reaktor.x.toFixed(3), +reaktor.y.toFixed(3), +reaktor.z.toFixed(4)],
        reaktorPx: Math.round(ctx.reaktorPx), frames: frameCount, triangles: renderer?.info.render.triangles, cameraActive: !!stream,
        richtung: $('richtung').hidden ? '' : $('richtung').textContent, videoZoom: video.style.transform, schilder: schilder.filter(s => !s.element.hidden).map(s => s.id) };
    },
    lage: (alpha, beta, gamma) => {
      try { window.dispatchEvent(new DeviceOrientationEvent('deviceorientation', { alpha, beta, gamma })); }
      catch (_e) { onLage({ alpha, beta, gamma }); }
      if (!sensor.da && !window.DeviceOrientationEvent) onLage({ alpha, beta, gamma });
    },
    ansicht: (x, y, z, tx, ty, tz) => { camera.position.set(x, y, z); if (tx != null) orbit.target.set(tx, ty, tz); orbit.update(); }
  };
}
