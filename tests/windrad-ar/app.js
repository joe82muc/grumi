import * as THREE from './vendor/three.module.js';
import { OrbitControls } from './vendor/OrbitControls.js';
import { createWindrad, rotorRpm } from './model.js';

const $ = id => document.getElementById(id);
const AR_MODEL_SCALE = .1;
const state = { mode: '3d', wind: 8, paused: false, scale: 1, facing: 'environment', ready: false, tracked: false };
const stage = $('stage');
let renderer, scene, camera, orbit, turbine, ground, windLines, arCamera, anchor;
let stream = null, tracker = null, markerControls = null, arModule = null;
let startVersion = 0, trackerVersion = 0, resizeTimer, toastTimer;
let lastTime = 0, motionTime = 0, frameCount = 0;
const sourceFrame = document.createElement('canvas');
const sourceContext = sourceFrame.getContext('2d', { willReadFrequently: true });
const video = $('camera');
const partPositions = [
  ['label-rotor', new THREE.Vector3(-1.12, 3.48, .65)],
  ['label-generator', new THREE.Vector3(.33, 3.02, -.1)],
  ['label-tower', new THREE.Vector3(.14, 1.44, .12)]
];

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
  $('ar-size').hidden = mode !== 'ar';
}

function fitView() {
  const aspect = Math.max(.25, stage.clientWidth / stage.clientHeight);
  const distance = Math.max(8.2, 5 / aspect);
  camera.position.set(distance * .49, 2.32 + distance * .17, distance * .87);
  orbit.target.set(0, 2.34, 0);
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
  scene.background = new THREE.Color(0xedf5f0);
  scene.fog = new THREE.Fog(0xedf5f0, 15, 42);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x9caf9a, 2.5));
  const sun = new THREE.DirectionalLight(0xfffcf3, 3.5);
  sun.position.set(-4, 8, 6);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -5, right: 5, top: 6, bottom: -5, near: .1, far: 25 });
  sun.shadow.bias = -.0003;
  sun.shadow.normalBias = .035;
  scene.add(sun);
  const fill = new THREE.DirectionalLight(0xb3e2ec, 1);
  fill.position.set(4, 4, -5);
  scene.add(fill);
  ground = new THREE.Group();
  const surface = new THREE.Mesh(new THREE.PlaneGeometry(120, 120), new THREE.MeshStandardMaterial({ color: 0xd2e1cd, roughness: 1 }));
  surface.rotation.x = -Math.PI / 2;
  surface.receiveShadow = true;
  ground.add(surface);
  const grid = new THREE.GridHelper(20, 40, 0xaec5ad, 0xbdcfb8);
  grid.position.y = .003;
  grid.material.transparent = true;
  grid.material.opacity = .35;
  ground.add(grid);
  scene.add(ground);
  turbine = createWindrad();
  scene.add(turbine.root);
  windLines = new THREE.Group();
  const windMaterial = new THREE.LineBasicMaterial({ color: 0x78b2a5, transparent: true, opacity: .33 });
  for (let i = 0; i < 18; i++) {
    const geometry = new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(0, 0, -.45), new THREE.Vector3(0, 0, .45),
      new THREE.Vector3(.045, 0, .34), new THREE.Vector3(0, 0, .45), new THREE.Vector3(-.045, 0, .34)
    ]);
    const line = new THREE.Line(geometry, windMaterial);
    line.userData = { x: (i % 6 - 2.5) * .72, y: .75 + Math.floor(i / 6) * 1.15, offset: i * .49 };
    windLines.add(line);
  }
  scene.add(windLines);
  camera = new THREE.PerspectiveCamera(42, 1, .02, 100);
  orbit = new OrbitControls(camera, renderer.domElement);
  orbit.enableDamping = true;
  orbit.dampingFactor = .07;
  orbit.enablePan = false;
  orbit.minDistance = 3.4;
  orbit.maxDistance = 15;
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
  $('pause').disabled = false;
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
  for (const [id, point] of partPositions) {
    const element = $(id);
    if (!enabled) { element.hidden = true; continue; }
    const projected = turbine.root.localToWorld(point.clone()).project(activeCamera);
    const x = (projected.x * .5 + .5) * stage.clientWidth;
    const y = (-projected.y * .5 + .5) * stage.clientHeight;
    if (projected.z < -1 || projected.z > 1 || x < 0 || y < 42 || x > stage.clientWidth - 80 || y > stage.clientHeight - 24) { element.hidden = true; continue; }
    let top = y;
    for (const other of occupied) if (Math.abs(other.x - x) < 105 && Math.abs(other.y - top) < 30) top += 32;
    if (top > stage.clientHeight - 30) { element.hidden = true; continue; }
    element.hidden = false;
    element.style.left = Math.min(stage.clientWidth - element.offsetWidth - 12, Math.max(12, x)) + 'px';
    element.style.top = top + 'px';
    occupied.push({ x, y: top });
  }
}
function render(time) {
  const delta = lastTime ? Math.min((time - lastTime) / 1000, .08) : 0;
  lastTime = time;
  if (!document.hidden) {
    turbine.animate(delta, state.wind, state.paused);
    if (!state.paused) motionTime += delta * state.wind / 8;
  }
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
  } else {
    orbit.update();
    windLines.visible = state.wind > 0;
    windLines.children.forEach(line => {
      const { x, y, offset } = line.userData;
      line.position.set(x, y, (motionTime * 1.8 + offset) % 8 - 4);
    });
  }
  renderer.render(scene, activeCamera);
  updateLabels(activeCamera);
  frameCount++;
}

function disposeTracker(context = tracker, controls = markerControls) {
  if (typeof controls?.dispose === 'function') controls.dispose();
  if (typeof context?.arController?.dispose === 'function') context.arController.dispose();
}
async function setupTracker(version) {
  const current = ++trackerVersion;
  const aspect = stage.clientWidth / Math.max(1, stage.clientHeight);
  sourceFrame.width = aspect > 1 ? 640 : Math.round(480 * aspect);
  sourceFrame.height = aspect > 1 ? Math.round(640 / aspect) : 480;
  const next = new arModule.ArToolkitContext({
    cameraParametersUrl: new URL('./assets/camera_para.dat', import.meta.url).href,
    detectionMode: 'mono', maxDetectionRate: 25,
    canvasWidth: sourceFrame.width, canvasHeight: sourceFrame.height
  });
  await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('Marker-Erkennung antwortet nicht.')), 18000);
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
    type: 'pattern', patternUrl: new URL('./assets/patt.hiro', import.meta.url).href,
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
  if (turbine) {
    scene.add(turbine.root);
    turbine.root.scale.setScalar(1);
    ground.visible = true;
    windLines.visible = state.wind > 0;
    scene.background = new THREE.Color(0xedf5f0);
    scene.fog = new THREE.Fog(0xedf5f0, 15, 42);
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
    message('Kamera-AR ist hier nicht verfuegbar. Oeffne die HTTPS-Seite in Safari, Chrome oder Edge. Die 3D-Ansicht bleibt aktiv.');
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
    arModule = arModule || await import('./vendor/ar-threex.mjs');
    if (version !== startVersion) { nextStream.getTracks().forEach(track => track.stop()); return; }
    selectMode('ar');
    video.hidden = false;
    ground.visible = false;
    windLines.visible = false;
    scene.background = null;
    scene.fog = null;
    orbit.enabled = false;
    anchor.add(turbine.root);
    turbine.root.scale.setScalar(AR_MODEL_SCALE * state.scale);
    await setupTracker(version);
  } catch (error) {
    nextStream?.getTracks().forEach(track => track.stop());
    if (version !== startVersion) return;
    stopAR();
    const description = {
      NotAllowedError: 'Kamerazugriff wurde nicht erlaubt.',
      NotFoundError: 'Keine Kamera gefunden.',
      NotReadableError: 'Die Kamera ist gerade von einer anderen App belegt.',
      OverconstrainedError: 'Die Kamera unterstuetzt diese Einstellung nicht.'
    }[error.name] || 'Kamera-AR konnte nicht gestartet werden.';
    message(description + ' Die 3D-Ansicht bleibt aktiv.');
    console.warn('Windrad AR:', error.name, error.message);
  } finally {
    if (version === startVersion) $('mode-ar').disabled = false;
  }
}

function updateReadings() {
  const rpm = state.paused ? 0 : rotorRpm(state.wind);
  $('wind-output').textContent = state.wind + ' m/s';
  $('rpm').textContent = String(Math.round(rpm));
  $('operation').textContent = state.paused ? 'Pausiert' : rpm === 0 ? 'Stillstand' : 'Dreht sich';
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
  link.download = 'grumi-windrad' + (state.mode === 'ar' ? '-ar' : '') + '.png';
  link.click();
}

icons();
$('mode-ar').addEventListener('click', startAR);
$('mode-3d').addEventListener('click', () => { if (state.mode === 'ar' || stream || $('mode-ar').disabled) stopAR(); });
$('wind').addEventListener('input', event => { state.wind = Number(event.target.value); updateReadings(); });
$('pause').addEventListener('click', () => {
  state.paused = !state.paused;
  const button = $('pause');
  button.innerHTML = '<i data-lucide="' + (state.paused ? 'play' : 'pause') + '"></i>';
  button.title = button.ariaLabel = state.paused ? 'Animation fortsetzen' : 'Animation pausieren';
  button.setAttribute('aria-pressed', String(state.paused));
  icons();
  updateReadings();
});
$('inside').addEventListener('change', event => turbine?.setInside(event.target.checked));
$('labels').addEventListener('change', () => updateLabels(state.mode === 'ar' ? arCamera : camera));
$('scale').addEventListener('input', event => {
  state.scale = Number(event.target.value) / 100;
  $('scale-output').textContent = event.target.value + ' %';
  if (state.mode === 'ar') turbine.root.scale.setScalar(AR_MODEL_SCALE * state.scale);
});
$('camera-flip').addEventListener('click', () => {
  state.facing = state.facing === 'environment' ? 'user' : 'environment';
  stopAR();
  startAR();
});
$('reset-view').addEventListener('click', () => {
  if (!state.ready) return;
  if (state.mode === 'ar') {
    state.scale = 1; $('scale').value = '100'; $('scale-output').textContent = '100 %'; turbine.root.scale.setScalar(AR_MODEL_SCALE);
  } else fitView();
});
$('snapshot').addEventListener('click', screenshot);
$('fullscreen').hidden = !document.fullscreenEnabled;
$('fullscreen').addEventListener('click', async () => {
  try { if (document.fullscreenElement) await document.exitFullscreen(); else await document.querySelector('.lab').requestFullscreen(); }
  catch (_error) { message('Vollbild ist in diesem Browser nicht verfuegbar.'); }
});
$('marker-open').addEventListener('click', () => $('marker-dialog').showModal());
$('marker-close').addEventListener('click', () => $('marker-dialog').close());
$('marker-dialog').addEventListener('click', event => { if (event.target === $('marker-dialog')) $('marker-dialog').close(); });
$('reload').addEventListener('click', () => location.reload());
window.addEventListener('pagehide', () => { if (stream || $('mode-ar').disabled) stopAR(); });
document.addEventListener('visibilitychange', () => { if (document.hidden && (stream || $('mode-ar').disabled)) stopAR(); });
new ResizeObserver(resize).observe(stage);
try {
  buildScene();
  updateReadings();
} catch (error) {
  $('loading').hidden = true;
  $('fatal').hidden = false;
  $('fatal-text').textContent = 'Die 3D-Grafik konnte nicht gestartet werden. Bitte oeffne die Seite in einem aktuellen Browser mit aktivierter Hardwarebeschleunigung.';
  $('mode-ar').disabled = true;
  console.error('Windrad:', error);
}

if (new URLSearchParams(location.search).has('test')) {
  window.windradTest = {
    state: () => ({ ...state, rotorAngle: turbine?.rotor.rotation.z, frames: frameCount, triangles: renderer?.info.render.triangles, inside: $('inside').checked, anchorMatrix: anchor?.matrix.toArray(), cameraActive: !!stream, detectionWidth: sourceFrame.width, detectionHeight: sourceFrame.height, cameraPosition: camera?.position.toArray() }),
    bounds: () => {
      const box = new THREE.Box3().setFromObject(turbine.root);
      const points = [];
      for (const x of [box.min.x, box.max.x]) for (const y of [box.min.y, box.max.y]) for (const z of [box.min.z, box.max.z]) points.push(new THREE.Vector3(x, y, z).project(state.mode === 'ar' ? arCamera : camera));
      return { minX: Math.min(...points.map(p => p.x)), maxX: Math.max(...points.map(p => p.x)), minY: Math.min(...points.map(p => p.y)), maxY: Math.max(...points.map(p => p.y)) };
    }
  };
}
