import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Planet from './planet';
import Sun from './sun';

// scene, camera, renderer 생성
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('root').appendChild(renderer.domElement);

// x축 (빨간색), y축 (녹색), z축 (파란색) 생성
const axes = new THREE.AxesHelper(3000);
scene.add(axes);

const controls = new OrbitControls(camera, renderer.domElement);

// 태양 생성
const sun = new Sun(54, 0xfff600, true);
sun.setPosition(0, 0, 0);
scene.add(sun.getMesh());
// const sunGeometry = new THREE.SphereGeometry(54, 400, 200);
// const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xfff600, wireframe: true });
// const sun = new THREE.Mesh(sunGeometry, sunMaterial);
// scene.add(sun);


/* 행성 생성 (수, 금, 지(달), 화, 목, 토, 천, 해) */

// mercury (수성)
const mercury = new Planet(0.4, 74, 0xccff00, true);
scene.add(mercury.getMesh());

// venus (금성)
const venus = new Planet(0.9, 89, 0x0000ff, true);
scene.add(venus.getMesh());

// earth (지구)
const earth = new Planet(1, 104, 0x00ff00, true, 0.002, 0.002);
scene.add(earth.getMesh());

// mars (화성)
const mars = new Planet(0.5, 125, 0xff0000, true);
scene.add(mars.getMesh());

// jupiter (목성)
const jupiter = new Planet(11.2, 304, 0xff8000, true);
scene.add(jupiter.getMesh());

// saturn (토성)
const saturn = new Planet(9.4, 554, 0xcccccc, true);
scene.add(saturn.getMesh());

// uranus (천왕성)
const uranus = new Planet(4, 1054, 0x00ffff, true);
scene.add(uranus.getMesh());

// neptune (해왕성)
const neptune = new Planet(3.9, 1554, 0x808080, true);
scene.add(neptune.getMesh());

// mercury (수성)
// const mercuryGeometry = new THREE.SphereGeometry(0.4, 32, 32);
// const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
// const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
// mercury.position.set(74, 0, 0);
// scene.add(mercury);

// venus (금성)
// const venusGeometry = new THREE.SphereGeometry(0.9, 32, 32);
// const venusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
// const venus = new THREE.Mesh(venusGeometry, venusMaterial);
// venus.position.set(89, 0, 0);
// scene.add(venus);

// earth (지구)
// const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
// const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
// const earth = new THREE.Mesh(earthGeometry, earthMaterial);
// earth.position.set(104, 0, 0);
// scene.add(earth);

// mars (화성)
// const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
// const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
// const mars = new THREE.Mesh(marsGeometry, marsMaterial);
// mars.position.set(125, 0, 0);
// scene.add(mars);

// jupiter (목성)
// const jupiterGeometry = new THREE.SphereGeometry(11.2, 32, 32);
// const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xff8000, wireframe: true });
// const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
// jupiter.position.set(304, 0, 0);
// scene.add(jupiter);

// saturn (토성)
// const saturnGeometry = new THREE.SphereGeometry(9.4, 32, 32);
// const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true });
// const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
// saturn.position.set(554, 0, 0);
// scene.add(saturn);

// uranus (천왕성)
// const uranusGeometry = new THREE.SphereGeometry(4, 32, 32);
// const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
// const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
// uranus.position.set(1054, 0, 0);
// scene.add(uranus);

// neptune (해왕성)
// const neptuneGeometry = new THREE.SphereGeometry(3.9, 32, 32);
// const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });
// const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
// neptune.position.set(1554, 0, 0);
// scene.add(neptune);


/* camera 추가 */
// camera.position.x = 30;
// camera.position.y = 30;
// camera.position.z = 30;
camera.position.set( 0, 0, 2500 );

controls.update();

// 자전 애니메이션
const animate = () => {
  requestAnimationFrame(animate);

  earth.update();


  renderer.render(scene, camera);

}
animate();