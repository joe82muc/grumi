import * as THREE from './vendor/three.module.js';

export function rotorRpm(wind) {
  const speed = Math.max(0, Math.min(16, Number(wind) || 0));
  return speed < 3 ? 0 : Math.min(22, 4 + (speed - 3) * 2);
}

export function createWindrad() {
  const root = new THREE.Group();
  root.name = 'Windrad';
  const white = new THREE.MeshStandardMaterial({ color: 0xf9faf7, roughness: .42, metalness: .2 });
  const green = new THREE.MeshStandardMaterial({ color: 0x167e65, roughness: .4, metalness: .25 });
  const steel = new THREE.MeshStandardMaterial({ color: 0x647d7d, metalness: .7, roughness: .34 });
  const red = new THREE.MeshStandardMaterial({ color: 0xe36860, roughness: .5 });
  const copper = new THREE.MeshStandardMaterial({ color: 0xd3a259, metalness: .65, roughness: .4 });
  const shell = white.clone();
  const mesh = (geometry, material, parent = root) => {
    const object = new THREE.Mesh(geometry, material);
    object.castShadow = true;
    object.receiveShadow = true;
    parent.add(object);
    return object;
  };
  const base = mesh(new THREE.CylinderGeometry(.42, .47, .13, 48), new THREE.MeshStandardMaterial({ color: 0xc6cfca, roughness: .9 }));
  base.position.y = .065;
  const tower = mesh(new THREE.CylinderGeometry(.105, .195, 2.86, 48), white);
  tower.position.y = 1.56;
  const collar = mesh(new THREE.CylinderGeometry(.193, .195, .12, 48), green);
  collar.position.y = .22;
  const door = mesh(new THREE.BoxGeometry(.115, .24, .028), green);
  door.position.set(0, .3, .19);
  const nacelle = new THREE.Group();
  nacelle.position.y = 3.02;
  root.add(nacelle);
  const housing = mesh(new THREE.BoxGeometry(.49, .39, .88, 1, 1, 1), shell, nacelle);
  housing.position.z = .06;
  const stripe = mesh(new THREE.BoxGeometry(.5, .075, .88), green, nacelle);
  stripe.position.set(0, -.08, .06);
  const rear = mesh(new THREE.BoxGeometry(.29, .19, .06), steel, nacelle);
  rear.position.z = -.42;
  const shaft = mesh(new THREE.CylinderGeometry(.045, .045, 1.05, 24), steel, nacelle);
  shaft.rotation.x = Math.PI / 2;
  shaft.position.z = .17;
  const generator = new THREE.Group();
  generator.name = 'Generator';
  generator.position.z = -.12;
  nacelle.add(generator);
  const magnet = mesh(new THREE.CylinderGeometry(.12, .12, .24, 32), green, generator);
  magnet.rotation.x = Math.PI / 2;
  for (let i = 0; i < 8; i++) {
    const coil = mesh(new THREE.TorusGeometry(.05, .018, 6, 16), copper, nacelle);
    const angle = i * Math.PI / 4;
    coil.position.set(Math.sin(angle) * .155, Math.cos(angle) * .155, -.12);
    coil.rotation.set(Math.sin(angle) * .35, Math.cos(angle) * .35, angle);
  }
  const gear = mesh(new THREE.CylinderGeometry(.14, .14, .07, 20), steel, nacelle);
  gear.rotation.x = Math.PI / 2;
  gear.position.z = .29;
  const rotor = new THREE.Group();
  rotor.name = 'Rotor';
  rotor.position.set(0, 3.02, .64);
  root.add(rotor);
  const hub = mesh(new THREE.ConeGeometry(.165, .28, 48), green, rotor);
  hub.rotation.x = Math.PI / 2;
  hub.position.z = .12;
  const profile = new THREE.Shape();
  profile.moveTo(-.045, .12);
  profile.bezierCurveTo(-.18, .36, -.16, .81, -.06, 1.29);
  profile.quadraticCurveTo(-.02, 1.62, .025, 1.68);
  profile.quadraticCurveTo(.08, 1.58, .1, 1.23);
  profile.bezierCurveTo(.18, .65, .17, .34, .055, .12);
  profile.closePath();
  const geometry = new THREE.ExtrudeGeometry(profile, { depth: .032, bevelEnabled: true, bevelSegments: 2, steps: 1, bevelSize: .009, bevelThickness: .009, curveSegments: 16 });
  const tip = new THREE.Shape();
  tip.moveTo(-.045, 1.42); tip.lineTo(.077, 1.42); tip.quadraticCurveTo(.065, 1.62, .025, 1.68); tip.quadraticCurveTo(-.015, 1.62, -.045, 1.42);
  const tipGeometry = new THREE.ExtrudeGeometry(tip, { depth: .037, bevelEnabled: false, curveSegments: 12 });
  for (let i = 0; i < 3; i++) {
    const blade = new THREE.Group();
    blade.name = 'Rotorblatt ' + (i + 1);
    blade.rotation.z = i * Math.PI * 2 / 3;
    rotor.add(blade);
    mesh(geometry, white, blade);
    mesh(tipGeometry, red, blade).position.z = .009;
  }
  const topLight = mesh(new THREE.CylinderGeometry(.024, .026, .033, 12), red, nacelle);
  topLight.position.set(0, .214, -.18);
  const innerParts = [shaft, generator, gear];
  const coils = nacelle.children.filter(child => child.geometry?.type === 'TorusGeometry');
  innerParts.concat(coils).forEach(object => { object.visible = false; });
  return {
    root, rotor, generator,
    setInside(value) {
      shell.transparent = !!value;
      shell.opacity = value ? .15 : 1;
      shell.depthWrite = !value;
      shell.needsUpdate = true;
      stripe.visible = !value;
      innerParts.concat(coils).forEach(object => { object.visible = !!value; });
    },
    animate(delta, wind, paused) {
      if (!paused) {
        const angle = rotorRpm(wind) * Math.PI * 2 / 60 * delta;
        rotor.rotation.z -= angle;
        generator.rotation.z -= angle * 4;
      }
    }
  };
}
