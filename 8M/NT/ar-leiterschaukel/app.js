import * as THREE from '../../../tests/windrad-ar/vendor/three.module.js';
import { OrbitControls } from '../../../tests/windrad-ar/vendor/OrbitControls.js';
import { createLeiterschaukel } from './model.js';
import { beobachtung, stufe } from './physik.js';

// Three.js, AR.js, Marker und Kamera-Daten liegen einmal im Repo: beim Windrad (tests/windrad-ar)
const WINDRAD = '../../../tests/windrad-ar/';
const $ = id => document.getElementById(id);
const AR_MODEL_SCALE = .5;
const state = { mode: '3d', scale: 1, facing: 'environment', ready: false, tracked: false };
const stage = $('stage');
let renderer, scene, camera, orbit, versuch, ground, arCamera, anchor;
let stream = null, tracker = null, markerControls = null, arModule = null;
let startVersion = 0, trackerVersion = 0, resizeTimer, toastTimer;
let lastTime = 0, frameCount = 0;
const sourceFrame = document.createElement('canvas');
const sourceContext = sourceFrame.getContext('2d', { willReadFrequently: true });
const video = $('camera');
const schilder = [];
const punkt = new THREE.Vector3();

function icons() { window.lucide?.createIcons(); }
function message(text) {
  $('toast').textContent = text;
  $('toast').hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('toast').hidden = true; }, 6500);
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
  $('camera-flip').hidden = mode !== 'ar';
  $('front-view').hidden = mode === 'ar';
  // Die Größe der Zeichenfläche bleibt beim Wechsel gleich, auch in Safari
  $('scale').disabled = mode !== 'ar';
}

function fitView(vonVorn = false) {
  const aspect = Math.max(.25, stage.clientWidth / stage.clientHeight);
  const distance = Math.max(6.9, 6 / aspect);
  // Von vorn: Blick auf das Drahtende, wie im Bild des Moduls
  if (vonVorn) camera.position.set(0, 1.5, distance);
  else camera.position.set(distance * .47, 1.3 + distance * .27, distance * .84);
  orbit.target.set(0, 1.3, 0);
  orbit.update();
}
function resize() {
  if (!renderer) return;
  const width = Math.max(1, stage.clientWidth), height = Math.max(1, stage.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(width, height, false);
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  if (state.mode === 'ar' && stream && arModule) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => setupTracker(startVersion).catch(error => {
      if (state.mode === 'ar') { stopAR(); message('AR konnte nach dem Drehen nicht fortgesetzt werden. ' + error.message); }
    }), 300);
  }
}

function buildScene() {
  renderer = new THREE.WebGLRenderer({ canvas: $('scene'), antialias: true, alpha: true, preserveDrawingBuffer: true });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.16;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xedf3f7);
  scene.fog = new THREE.Fog(0xedf3f7, 15, 42);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x9aa7b3, 2.4));
  const sun = new THREE.DirectionalLight(0xfffcf3, 3.2);
  sun.position.set(-4, 8, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -4, right: 4, top: 5, bottom: -4, near: .1, far: 25 });
  sun.shadow.bias = -.0003;
  sun.shadow.normalBias = .035;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xbcd9f2, 1);
  fill.position.set(4, 4, -5);
  scene.add(fill);
  ground = new THREE.Group();
  const surface = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshStandardMaterial({ color: 0xd5dfe6, roughness: 1 }));
  surface.rotation.x = -Math.PI / 2;
  surface.position.y = -.004;
  surface.receiveShadow = true;
  ground.add(surface);
  const grid = new THREE.GridHelper(20, 40, 0xb3c2cd, 0xc2cfd8);
  grid.material.transparent = true;
  grid.material.opacity = .35;
  ground.add(grid);
  scene.add(ground);
  versuch = createLeiterschaukel();
  scene.add(versuch.root);
  for (const eintrag of versuch.schilder) {
    const element = document.createElement('div');
    element.className = 'part-label';
    element.textContent = eintrag.text;
    element.hidden = true;
    if (eintrag.farbe) element.style.borderLeftColor = eintrag.farbe;
    stage.insertBefore(element, $('loading'));
    schilder.push({ ...eintrag, element });
  }
  camera = new THREE.PerspectiveCamera(42, 1, .02, 100);
  orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = .07;
  orbit.enablePan = false;
  orbit.minDistance = 2.6;
  orbit.maxDistance = 16;
  orbit.maxPolarAngle = Math.PI / 2.05;
  anchor = new THREE.Group();
  anchor.visible = false;
  scene.add(anchor);
  arCamera = new THREE.Camera();
  scene.add(arCamera);
  resize();
  fitView();
  renderer.setAnimationLoop(render);
  state.ready = true;
  document.body.dataset.ready = 'true';
  $('loading').hidden = true;
  status('3D-Modell bereit');
}

function drawVideoCover(context, width, height) {
  const ratio = Math.max(width / video.videoWidth, height / video.videoHeight);
  const sourceWidth = width / ratio, sourceHeight = height / ratio;
  context.drawImage(video, (video.videoWidth - sourceWidth) / 2, (video.videoHeight - sourceHeight) / 2, sourceWidth, sourceHeight, 0, 0, width, height);
}
function updateLabels(activeCamera) {
  const enabled = $('labels').checked && (state.mode !== 'ar' || state.tracked);
  const occupied = [];
  for (const { element, objekt, punkt: ort, wenn } of schilder) {
    if (!enabled || (wenn && !wenn())) { element.hidden = true; continue; }
    const projected = objekt.localToWorld(punkt.copy(ort)).project(activeCamera);
    const x = (projected.x * .5 + .5) * stage.clientWidth;
    const y = (-projected.y * .5 + .5) * stage.clientHeight;
    if (projected.z < -1 || projected.z > 1 || x < 0 || y < 42 || x > stage.clientWidth - 80 || y > stage.clientHeight - 24) { element.hidden = true; continue; }
    element.hidden = false;
    const width = element.offsetWidth, height = element.offsetHeight;
    const left = Math.min(stage.clientWidth - width - 12, Math.max(12, x));
    // Liegt schon ein Schild an dieser Stelle, rutscht dieses darunter
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
function render(time) {
  const delta = lastTime ? Math.min((time - lastTime) / 1000, .08) : 0;
  lastTime = time;
  if (!document.hidden) versuch.animate(delta);
  let activeCamera = camera;
  if (state.mode === 'ar') {
    activeCamera = arCamera;
    if (tracker && video.readyState >= 2 && video.videoWidth > 0) {
      drawVideoCover(sourceContext, sourceFrame.width, sourceFrame.height);
      tracker.update(sourceFrame);
      const visible = anchor.visible;
      if (visible !== state.tracked) {
        state.tracked = visible;
        status(visible ? 'Marker erkannt' : 'Marker nicht im Bild', visible ? 'ready' : 'searching');
      }
    }
  } else orbit.update();
  renderer.render(scene, activeCamera);
  updateLabels(activeCamera);
  frameCount++;
}

function disposeTracker(context = tracker, controls = markerControls) {
  if (typeof controls?.dispose === 'function') controls.dispose();
  const controller = context?.arController;
  // ARToolKit meldet "bereit" erst nach dem Start. Dieses Ereignis abwarten,
  // bevor eine abgelöste Erkennung samt ihrer Zuhörer entfernt wird.
  if (typeof controller?.dispose === 'function') setTimeout(() => {
    if (controller.artoolkit) controller.dispose();
  }, 50);
}
async function setupTracker(version) {
  const current = ++trackerVersion;
  const aspect = stage.clientWidth / Math.max(1, stage.clientHeight);
  sourceFrame.width = aspect > 1 ? 640 : Math.round(480 * aspect);
  sourceFrame.height = aspect > 1 ? Math.round(640 / aspect) : 480;
  const next = new arModule.ArToolkitContext({
    cameraParametersUrl: new URL(WINDRAD + 'assets/camera_para.dat', import.meta.url).href,
    detectionMode: 'mono', maxDetectionRate: 25,
    canvasWidth: sourceFrame.width, canvasHeight: sourceFrame.height
  });
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Die Marker-Erkennung antwortet nicht.')), 18000);
    next.init(() => { clearTimeout(timeout); resolve(); });
  });
  if (version !== startVersion || current !== trackerVersion || state.mode !== 'ar') { disposeTracker(next, null); return; }
  disposeTracker();
  anchor.visible = false;
  state.tracked = false;
  tracker = next;
  arCamera.projectionMatrix.copy(tracker.getProjectionMatrix());
  arCamera.projectionMatrixInverse.copy(arCamera.projectionMatrix).invert();
  markerControls = new arModule.ArMarkerControls(tracker, anchor, {
    type: 'pattern', patternUrl: new URL(WINDRAD + 'assets/patt.hiro', import.meta.url).href,
    changeMatrixMode: 'modelViewMatrix', size: 1,
    smooth: true, smoothCount: 4, smoothTolerance: .015, smoothThreshold: 1
  });
  status('Marker nicht im Bild', 'searching');
}

function releaseCamera() {
  stream?.getTracks().forEach(track => track.stop());
  stream = null;
  video.pause();
  video.srcObject = null;
  video.hidden = true;
}
function stopAR() {
  startVersion++;
  trackerVersion++;
  clearTimeout(resizeTimer);
  releaseCamera();
  disposeTracker();
  tracker = null;
  markerControls = null;
  state.tracked = false;
  anchor.visible = false;
  if (versuch) {
    scene.add(versuch.root);
    versuch.root.scale.setScalar(1);
    ground.visible = true;
    scene.background = new THREE.Color(0xedf3f7);
    scene.fog = new THREE.Fog(0xedf3f7, 15, 42);
    orbit.enabled = true;
  }
  selectMode('3d');
  $('mode-ar').disabled = false;
  status('3D-Modell bereit');
  resize();
}
async function startAR() {
  if (!state.ready || $('mode-ar').disabled) return;
  if (state.mode === 'ar') return;
  if (!window.isSecureContext || !navigator.mediaDevices?.getUserMedia) {
    message('Kamera-AR geht hier nicht. Öffne die Seite in Safari, Chrome oder Edge. Die 3D-Ansicht bleibt.');
    return;
  }
  const version = ++startVersion;
  $('mode-ar').disabled = true;
  status('Kamera wird gestartet', 'searching');
  let nextStream;
  try {
    nextStream = await navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: { ideal: state.facing }, width: { ideal: 1280 }, height: { ideal: 720 } } });
    if (version !== startVersion) { nextStream.getTracks().forEach(track => track.stop()); return; }
    stream = nextStream;
    video.srcObject = stream;
    let videoTimeout;
    try {
      await Promise.race([video.play(), new Promise((_, reject) => {
        videoTimeout = setTimeout(() => reject(new Error('Die Kamera liefert kein Bild.')), 10000);
      })]);
    } finally { clearTimeout(videoTimeout); }
    arModule = arModule || await import(WINDRAD + 'vendor/ar-threex.mjs');
    if (version !== startVersion) { nextStream.getTracks().forEach(track => track.stop()); return; }
    selectMode('ar');
    video.hidden = false;
    ground.visible = false;
    scene.background = null;
    scene.fog = null;
    orbit.enabled = false;
    anchor.add(versuch.root);
    versuch.root.scale.setScalar(AR_MODEL_SCALE * state.scale);
    await setupTracker(version);
  } catch (error) {
    nextStream?.getTracks().forEach(track => track.stop());
    if (version !== startVersion) return;
    stopAR();
    const description = {
      NotAllowedError: 'Der Zugriff auf die Kamera wurde nicht erlaubt.',
      NotFoundError: 'Keine Kamera gefunden.',
      NotReadableError: 'Die Kamera wird gerade von einer anderen App benutzt.',
      OverconstrainedError: 'Die Kamera kann diese Einstellung nicht.'
    }[error.name] || 'Kamera-AR konnte nicht gestartet werden.';
    message(description + ' Die 3D-Ansicht bleibt.');
    console.warn('Leiterschaukel AR:', error.name, error.message);
  } finally {
    if (version === startVersion) $('mode-ar').disabled = false;
  }
}

// ---------- Versuch bedienen ----------
function zeigeZustand() {
  const z = versuch.zustand();
  $('strom-an').classList.toggle('sel', z.an);
  $('strom-aus').classList.toggle('sel', !z.an);
  $('strom-an').setAttribute('aria-pressed', String(z.an));
  $('strom-aus').setAttribute('aria-pressed', String(!z.an));
  $('staerke-output').textContent = stufe(z.staerke).name;
  $('beobachtung').textContent = beobachtung(z);
  $('pole').textContent = z.b > 0 ? 'Südpol oben · Nordpol unten' : 'Nordpol oben · Südpol unten';
}
function tu(was) {
  const z = versuch.zustand();
  if (was === 'an') versuch.setze({ an: true });
  else if (was === 'aus') versuch.setze({ an: false });
  else if (was === 'kabel') versuch.setze({ e: -z.e });
  else if (was === 'magnet') versuch.setze({ b: -z.b });
  zeigeZustand();
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
  link.download = 'grumi-leiterschaukel' + (state.mode === 'ar' ? '-ar' : '') + '.png';
  link.click();
}

icons();
$('mode-ar').addEventListener('click', startAR);
$('mode-3d').addEventListener('click', () => { if (state.mode === 'ar' || stream || $('mode-ar').disabled) stopAR(); });
for (const knopf of document.querySelectorAll('[data-tu]')) knopf.addEventListener('click', () => { if (versuch) tu(knopf.dataset.tu); });
$('staerke').addEventListener('input', event => { versuch?.setze({ staerke: Number(event.target.value) }); zeigeZustand(); });
for (const [id, name] of [['zeige-elektronen', 'elektronen'], ['zeige-feld', 'feld'], ['zeige-hand', 'hand']]) {
  $(id).addEventListener('change', event => versuch?.zeige({ [name]: event.target.checked }));
}
$('labels').addEventListener('change', () => updateLabels(state.mode === 'ar' ? arCamera : camera));
$('scale').addEventListener('input', event => {
  state.scale = Number(event.target.value) / 100;
  $('scale-output').textContent = event.target.value + ' %';
  if (state.mode === 'ar') versuch.root.scale.setScalar(AR_MODEL_SCALE * state.scale);
});
$('camera-flip').addEventListener('click', () => {
  state.facing = state.facing === 'environment' ? 'user' : 'environment';
  stopAR();
  startAR();
});
$('reset-view').addEventListener('click', () => {
  if (!state.ready) return;
  if (state.mode === 'ar') {
    state.scale = 1; $('scale').value = '100'; $('scale-output').textContent = '100 %'; versuch.root.scale.setScalar(AR_MODEL_SCALE);
  } else fitView();
});
$('front-view').addEventListener('click', () => { if (state.ready && state.mode !== 'ar') fitView(true); });
$('snapshot').addEventListener('click', screenshot);
$('fullscreen').hidden = !document.fullscreenEnabled;
$('fullscreen').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.querySelector('.lab').requestFullscreen(); }
  catch (_error) { message('Vollbild geht in diesem Browser nicht.'); }
});
$('marker-open').addEventListener('click', () => $('marker-dialog').showModal());
$('marker-close').addEventListener('click', () => $('marker-dialog').close());
$('marker-dialog').addEventListener('click', event => { if (event.target === $('marker-dialog')) $('marker-dialog').close(); });
$('reload').addEventListener('click', () => location.reload());
window.addEventListener('pagehide', () => { if (stream || $('mode-ar').disabled) stopAR(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && (stream || $('mode-ar').disabled)) stopAR(); });
new ResizeObserver(resize).observe(stage);
try {
  // Auf dem Handy ist die Bühne klein: Beschriftung dort erst auf Wunsch
  if (window.matchMedia?.('(max-width: 720px)').matches) $('labels').checked = false;
  buildScene();
  versuch.zeige({ elektronen: $('zeige-elektronen').checked, feld: $('zeige-feld').checked, hand: $('zeige-hand').checked });
  versuch.setze({ staerke: Number($('staerke').value) });
  zeigeZustand();
  for (const knopf of document.querySelectorAll('[data-tu]')) knopf.disabled = false;
} catch (error) {
  $('loading').hidden = true;
  $('fatal').hidden = false;
  $('fatal-text').textContent = 'Die 3D-Grafik konnte nicht gestartet werden. Öffne die Seite in einem aktuellen Browser.';
  $('mode-ar').disabled = true;
  console.error('Leiterschaukel:', error);
}

if (new URLSearchParams(location.search).has('test')) {
  window.schaukelTest = {
    state: () => ({ ...state, ...versuch?.zustand(), ...versuch?.lage(), frames: frameCount, triangles: renderer?.info.render.triangles,
      hand: versuch?.hand.visible, kraft: versuch?.kraft.visible, elektronen: versuch?.elektronen.visible, kabel: versuch?.kabel[1].visible ? 1 : -1,
      anchorVisible: anchor?.visible, anchorMatrix: anchor?.matrix.toArray(), cameraActive: !!stream, detectionWidth: sourceFrame.width, detectionHeight: sourceFrame.height,
      schilder: schilder.filter(s => !s.element.hidden).map(s => s.id) }),
    ansicht: (x, y, z) => { camera.position.set(x, y, z); orbit.update(); },
    bounds: () => {
      const box = new THREE.Box3().setFromObject(versuch.root);
      const points = [];
      for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) points.push(new THREE.Vector3(x, y, z).project(state.mode === 'ar' ? arCamera : camera));
      return { minX: Math.min(...points.map(p => p.x)), maxX: Math.max(...points.map(p => p.x)), minY: Math.min(...points.map(p => p.y)), maxY: Math.max(...points.map(p => p.y)) };
    }
  };
}
