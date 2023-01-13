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

  /* planeGeometry 생성 */
  const planeGeometry = new THREE.PlaneGeometry(60, 20);
  // plane - 배경으로 사용할 2차원 사각형.
  // planeGeometry (width: float, height: float, widthSegments: integer, heightSegments: integer)

  /*
    width - x축 값에 따른 너비. 기본값은 1
    height - y축 값에 따른 높이. 기본값은 1
    widthSegments - 너비 세그먼트. x축을 따라 면을 분할한다. 기본값은 1
    heightSegments - 높이 세그먼트. y축을 따라 면을 분할한다. 기본값은 1
  */

  const planeMaterial = new THREE.MeshBasicMaterial({ color: 0xcccccc });
  // planeGeometry가 어떻게 보일지 설정 ( 평면의 색상이나 투명도 등 )

  const plane = new THREE.Mesh(planeGeometry, planeMaterial);
  // 형태, 재질을 합침, Mesh 메서드 사용

  // plane은 기본값이 수직으로 서있기 떄문에 rotation 값 조정으로 수평으로 만든다.
  // plane을 장면에 추가하기 전에 위치 지정을 해야한다.
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 15;
  plane.position.y = 0;
  plane.position.z = 9;

  scene.add(plane);

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

};

window.onload = init;