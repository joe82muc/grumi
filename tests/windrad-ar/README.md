# Windrad AR Test

Standalone test at https://joe82muc.github.io/grumi/tests/windrad-ar/.
No pupil data, authentication, analytics or changes to the learning platform.

## Modes

- 3D: animated Three.js wind turbine, orbit/zoom, wind speed, pause, cutaway,
  part labels, snapshot and fullscreen when the browser supports it.
- AR: AR.js marker tracking in the browser, also on iPad/iPhone Safari,
  Android and desktop webcam browsers with WebGL and getUserMedia.
  This is real marker-based AR, not a camera-overlay simulation.
  Print marker.html or show its marker on a second screen. The camera must
  see the marker; the model is anchored to it. No WebXR/ARCore required.

Camera access requires HTTPS or localhost, user permission, available camera
hardware and an unlocked device. An in-app browser may deny camera access;
open in Safari, Chrome or Edge instead. Without camera access, 3D stays available.
Video frames are processed on the device, never uploaded or recorded.
Rotor speed is an illustrative teaching animation, not a turbine specification.

## Dependencies

Local pinned assets, no runtime CDN:

- Three.js 0.160.1, MIT: https://github.com/mrdoob/three.js/tree/r160
- AR.js 3.4.8, MIT: https://github.com/AR-js-org/AR.js/tree/3.4.8
- Its bundled ARToolKit5 / artoolkit5-js 0.3.2 tracking engine is LGPL-3.0
  with the upstream static-linking exception. Unmodified source and build
  instructions: https://github.com/AR-js-org/artoolkit5-js.
- Hiro marker / camera calibration from AR.js 3.4.8.
- Lucide, ISC, existing GRUMI file under Kalender/vendor/lucide.min.js.

The corresponding dependency license texts are in vendor/.
