import './style.css'
import * as THREE from 'three';

// scene, camera, renderer 생성
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('root').appendChild(renderer.domElement);

// 태양 생성
const sunGeometry = new THREE.SphereGeometry(1, 32, 32);
const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 });
const sun = new THREE.Mesh(sunGeometry, sunMaterial);
scene.add(sun);

/* 행성 생성 (수, 금, 지, 화, 목, 토, 천, 해) */
// mercury (수성)
const mercuryGeometry = new THREE.SphereGeometry(0.3, 32, 32);
const mercuryMaterial = new THREE.MeshBasicMaterial({ color: 0xff6600 });
const mercury = new THREE.Mesh(mercuryGeometry, mercuryMaterial);
mercury.position.set(2, 0, 0);
scene.add(mercury);

// venus (금성)
const venusGeometry = new THREE.SphereGeometry(0.5, 32, 32);
const venusMaterial = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const venus = new THREE.Mesh(venusGeometry, venusMaterial);
venus.position.set(-3, 0, 0);
scene.add(venus);

// earth (지구)
const earthGeometry = new THREE.SphereGeometry(0.6, 32, 32);
const earthMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const earth = new THREE.Mesh(earthGeometry, earthMaterial);
earth.position.set(0, 4, 0);
scene.add(earth);

// mars (화성)
const marsGeometry = new THREE.SphereGeometry(0.8, 32, 32);
const marsMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mars = new THREE.Mesh(marsGeometry, marsMaterial);
mars.position.set(0, -5, 0);
scene.add(mars);

// jupiter (목성)
const jupiterGeometry = new THREE.SphereGeometry(2, 32, 32);
const jupiterMaterial = new THREE.MeshBasicMaterial({ color: 0xff8000 });
const jupiter = new THREE.Mesh(jupiterGeometry, jupiterMaterial);
jupiter.position.set(8, 0, 0);
scene.add(jupiter);

// saturn (토성)
const saturnGeometry = new THREE.SphereGeometry(1.5, 32, 32);
const saturnMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
const saturn = new THREE.Mesh(saturnGeometry, saturnMaterial);
saturn.position.set(-10, 0, 0);
scene.add(saturn);

// uranus (천왕성)
const uranusGeometry = new THREE.SphereGeometry(1, 32, 32);
const uranusMaterial = new THREE.MeshBasicMaterial({ color: 0x00ffff });
const uranus = new THREE.Mesh(uranusGeometry, uranusMaterial);
uranus.position.set(0, 14, 0);
scene.add(uranus);

// neptune (해왕성)
const neptuneGeometry = new THREE.SphereGeometry(1, 32, 32);
const neptuneMaterial = new THREE.MeshBasicMaterial({ color: 0x808080 });
const neptune = new THREE.Mesh(neptuneGeometry, neptuneMaterial);
neptune.position.set(0, -16, 0);
scene.add(neptune);