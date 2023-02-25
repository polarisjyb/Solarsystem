import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// scene, camera, renderer 생성
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('root').appendChild(renderer.domElement);

// x축 (빨간색), y축 (녹색), z축 (파란색) 생성
const axes = new THREE.AxesHelper(3000);
scene.add(axes);

const controls = new OrbitControls(camera, renderer.domElement);

// 태양 생성
const sunGeometry = new THREE.SphereGeometry(6, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

/* 행성 생성 (수, 금, 지, 화, 목, 토, 천, 해) */
// mercury (수성)
const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600, wireframe: true });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(8, 0, 0);
scene.add(mercury);

// venus (금성)
const venusGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(10, 0, 0);
scene.add(venus);

// earth (지구)
const earthGeometry = new THREE.SphereGeometry(0.7, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(12, 0, 0);
scene.add(earth);

// mars (화성)
const marsGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(15, 0, 0);
scene.add(mars);

// jupiter (목성)
const jupiterGeometry = new THREE.SphereGeometry(2, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xff8000, wireframe: true });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(20, 0, 0);
scene.add(jupiter);

// saturn (토성)
const saturnGeometry = new THREE.SphereGeometry(1.7, 32, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc, wireframe: true });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(25, 0, 0);
scene.add(saturn);

// uranus (천왕성)
const uranusGeometry = new THREE.SphereGeometry(1.3, 32, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(30, 0, 0);
scene.add(uranus);

// neptune (해왕성)
const neptuneGeometry = new THREE.SphereGeometry(1.2, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x808080, wireframe: true });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(35, 0, 0);
scene.add(neptune);

// 행성 애니메이션
function animate() {
  requestAnimationFrame(animate);

  mercury.rotation.y += 0.01;
  venus.rotation.y += 0.01;
  earth.rotation.y += 0.01;
  mars.rotation.y += 0.01;
  jupiter.rotation.y += 0.01;
  saturn.rotation.y += 0.01;
  uranus.rotation.y += 0.01;
  neptune.rotation.y += 0.01;

  renderer.render(scene, camera);
}
animate();

/* camera 추가 */
// camera.position.x = 30;
// camera.position.y = 30;
// camera.position.z = 30;
camera.position.set( 30, 30, 30 );

controls.update();
