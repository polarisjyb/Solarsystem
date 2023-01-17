import './style.css';
import * as THREE from 'three';

const init = () => {
  const scene = new THREE.Scene();
  // Scene은 렌더링 할 모든 객체와 카메라 광원을 저장하는 컨테이너 개념이다.

  const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  // THREE.PerspectiveCamera(fov, aspect, near, far)

  /*
  camera에는 PerspectiveCamera, OrthographicCamera 두 가지가 존재한다.
  PerspectiveCamera : 일상생활에서 우리가 보는 외관이라고 생각할 수 있다.
  OrthographicCamera : 직교 카메라, 시점으로부터 거리의 상관없이 모든 물체가 동일한 크기.
 */

  const renderer = new THREE.WebGLRenderer(/* { antialias: true } */);
  // WebGLRenderer 는 WebGL을 사용하여 scene을 렌더링한다.

  renderer.setClearColor(new THREE.Color(0xEEEEEE));
  // 헥스 코드를 사용하여 색 지정
  
  /*
  헥스 코드는 특정한 색을 표현하기 위한 색상 표현법이다.
  RGB 색상은 약 16,777,216가지의 색상을 표현할 수 있는데 이 많은 색상들을
  디지털 상에서 간편하고 정확하게 표현하기 위해 마련된 코드이다.
 */

  renderer.setSize(window.innerWidth, window.innerHeight);
  // .setSize(width: integer, height: integer, updateStyle: Boolean) 

  /*
  디바이스 픽셀 비율을 고려하여 출력 캔버스의 크기 (너비, 높이)를 조정한다.
  updateStyle을 false로 설정하면 출력 캔버스의 스타일이 변경되지 않는다.
  */

  const axes = new THREE.AxesHelper(20);
  // x축 (빨간색), y축 (녹색), z축 (파란색) 이 있다.
  // 오브젝트가 3차원 공간에서 렌더링 되는 위치를 확인하는 유용한 디버깅 툴이다.

  scene.add(axes);

  /* cube 생성 */
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
  // wireframe: true -> solid 오브젝트가 아닌, wireframe으로 렌더링 되도록 한다.

  const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

  // cube 위치 지정
  cube.position.x = -4;
  cube.position.y = 3;
  cube.position.z = 0;

  // cube scene에 추가 
  scene.add(cube);

  /* Sphere 생성 */
  const sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
  // SphereGeometry (반지름: float, 너비세그먼트: integer, 높이세그먼트: integer)
  const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0x7777ff, wireframe: true });
  const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);

  // sphere 위치 지정
  sphere.position.x = 20;
  sphere.position.y = 4;
  sphere.position.z = 2;

  
  // sphere scene에 추가 
  scene.add(sphere);
  
  /* camera 추가 */
  // x, y, z 속성을 사용해 카메라가 장면의 위에 떠다니도록 했다.
  camera.position.x = -30;
  camera.position.y = 20;
  camera.position.z = 40;
  camera.lookAt(scene.position);
  // lookAt: 장면의 중앙을 가리키도록 한다. 기본값은 (0, 0, 0) 
  
  // html 요소에 출력할 요소 추가
  document.getElementById('root').appendChild(renderer.domElement);
  
  // cube, sphere rotate animation 추가
  const animate = () => {
  cube.rotation.x -= 0.003;
  cube.rotation.z += 0.003;
  sphere.rotation.x += 0.003;
  sphere.rotation.y += 0.003;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  };
  
  animate(sphere);
};

window.onload = init;
