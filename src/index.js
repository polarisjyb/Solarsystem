import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// 구체 배경 이미지
import "../public/img/galaxy.jpg"
// import "../public/img/milky_way.jpg"

// 태양계 모듈
import Sun from './sun';
import Planet from './planet';
import Satellite from './satellite';

// 텍스처 이미지(행성)
import '../public/img/mercury.jpg';
import '../public/img/venus.jpg';
import '../public/img/earth.jpg';
import '../public/img/mars.jpg';
import '../public/img/jupiter.jpg';
import '../public/img/saturn.jpg';
import '../public/img/uranus.jpg';
import '../public/img/neptune.jpg';

// 텍스처 이미지(달)
import '../public/img/moon.jpg';

// scene, camera, renderer 생성
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 10, 20000);

/* camera 추가 */
camera.position.set( -450, 50, 200 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('root').appendChild(renderer.domElement);

// x축 (빨간색), y축 (녹색), z축 (파란색) 생성
// const axes = new THREE.AxesHelper(3000);
// scene.add(axes);

const controls = new OrbitControls(camera, renderer.domElement);

// enableDamping = true
// OrbitControls 컨트롤에 무게감을 부여하는데 사용할 수 있는 관성. 이 기능을 사용하도록 설정할 경우, 애니메이션 루프에서 controls.update 메소드를 호출해야 한다.
controls.enableDamping = true;

// dampingFactor - enableDamping 이 true 일 경우 적용 가능 - 값이 낮을 수록 컨트롤에 느껴지는 무게감이 증가한다.
controls.dampingFactor = 0.05;

// 배경 텍스처 이미지 로드
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('../public/img/galaxy.jpg');

// 배경으로 사용할 SphereGeometry 생성
const sphereGeometry = new THREE.SphereGeometry(5000, 50, 50);

// 텍스처를 배경 material 로 설정
const material = new THREE.MeshBasicMaterial({

  // 렌더링할 면의 면을 정의 (앞, 뒤 또는 둘 다)
  // 기본 값은 THREE.FrontSide - 앞면 그 외의 옵션은 THREE.BackSide(뒷면) or THREE.DoubleSide (앞, 뒷면)
  side: THREE.BackSide,
  map: texture,
});

// 배경에 적용할 mesh 생성
const background = new THREE.Mesh(sphereGeometry, material);
background.rotation.x = (Math.PI/180*63);

// scene 에 mesh 추가
scene.add(background);

// 태양 생성
const sun = new Sun(54, 0.0004);
sun.setPosition(0, 0, 0);
scene.add(sun.getMesh());

/* 행성 생성 (수, 금, 지(달), 화, 목, 토, 천, 해) */
// mercury (수성)
const mercury = new Planet(3, 74, '../public/img/mercury.jpg', 0.005, 0.005);
sun.getMesh().add(mercury.getMesh());

// scene.add(mercury.getMesh());
scene.add(mercury.getOrbit());

// venus (금성)
const venus = new Planet(4, 89, '../public/img/venus.jpg', 0.005, 0.004);
sun.getMesh().add(venus.getMesh());

// scene.add(venus.getMesh());
scene.add(venus.getOrbit());

// earth (지구)
const earth = new Planet(5, 104, '../public/img/earth.jpg', 0.02, 0.003);
sun.getMesh().add(earth.getMesh());

scene.add(earth.getOrbit());

// moon (달)
const moon = new Satellite(1, 10, '../public/img/moon.jpg');
earth.getMesh().add(moon.getMesh());

// mars (화성)
const mars = new Planet(5, 125, '../public/img/mars.jpg', 0.005, 0.002);
sun.getMesh().add(mars.getMesh());

// scene.add(mars.getMesh());
scene.add(mars.getOrbit());

// jupiter (목성)
const jupiter = new Planet(11.2, 304, '../public/img/jupiter.jpg', 0.005, 0.001);
sun.getMesh().add(jupiter.getMesh());

// scene.add(jupiter.getMesh());
scene.add(jupiter.getOrbit());

// saturn (토성)
const saturn = new Planet(9.4, 554, '../public/img/saturn.jpg', 0.005, 0.0009);
sun.getMesh().add(saturn.getMesh());

// scene.add(saturn.getMesh());
scene.add(saturn.getOrbit());

// uranus (천왕성)
const uranus = new Planet(6, 1054, '../public/img/uranus.jpg', 0.005, 0.0006);
sun.getMesh().add(uranus.getMesh());

// scene.add(uranus.getMesh());
scene.add(uranus.getOrbit());

// neptune (해왕성)
const neptune = new Planet(6, 1554, '../public/img/neptune.jpg', 0.005, 0.0005);
sun.getMesh().add(neptune.getMesh());

// scene.add(neptune.getMesh());
scene.add(neptune.getOrbit());

// /*
// BufferGeometry - three.js의 모든 Geometry들을 구성하는 방식으로 BufferAttributes 라는 데이터 배열들의 집합으로 구성된다.
// BoxGeometry(정육면체) 나 PlaneGeometry(평면체) 등은 이미 데이터가 세팅이 되어있는 Geometry들이라면,
// BufferGeometry는 사용자가 데이터를 생성해서 커스텀할 수 있는 Geometry라고 볼 수 있다.

// Geometry는 기본적으로 정점(Vertex)들의 집합이다. 그 정점에 속성을 부여해서 특정한 형태와 속성을 가진 Geometry를 만들 수 있다.
// BufferAttributes는 바로 이 속성값을 부여하는데 사용된다.
// */

// const parameters = {};
// parameters.count = 10000;
// parameters.size = 1;

// // generateGalaxy - 은하의 모양을 묘사하는 BufferGeometry 개체를 생성
// const generateGalaxy = () => {
//   const geometry = new THREE.BufferGeometry();

//   const positions = new Float32Array(parameters.count * 3);

//   for (let i = 0; i < parameters.count; i++) {
//     const i3 = i * 3;

//     positions[i3] = (Math.random() - 0.5) * 10000;
//     positions[i3 + 1] = (Math.random() - 0.5) * 10000;
//     positions[i3 + 2] = (Math.random() - 0.5) * 10000;
//   };

//   geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

//   const material = new THREE.PointsMaterial({

//     // point의 크기를 픽셀 단위로 정의 (기본값 - 1.0)
//     size: parameters.size,

//     // point의 크기가 카메라 심도에 의해 감쇠되는지 여부를 지정 (기본값 - true)
//     sizeAttenuation: true,
//   });

//   const points = new THREE.Points(geometry, material);
//   scene.add(points);

//   const GalaxyAnimation = () => {
//     points.rotation.x += Math.random() * 0.001;
//     points.rotation.y += Math.random() * 0.001;
//     points.rotation.z -= Math.random() * 0.001;
//   }

//   // 애니메이션
//   const animate = () => {
//     requestAnimationFrame(animate);

//     GalaxyAnimation();

//     renderer.render(scene, camera);
//   };
//   animate();
// };

// generateGalaxy();

// 애니메이션
const animate = () => {
  requestAnimationFrame(animate);

  sun.update();

  mercury.update();
  venus.update();
  earth.update();
  mars.update();
  jupiter.update();
  saturn.update();
  uranus.update();
  neptune.update();

  controls.update();

  renderer.render(scene, camera);

}

animate();