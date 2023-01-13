import './style.css'

import * as THREE from 'three';

const scene = new THREE.Scene();
// 실제로 three.js 로 오브젝트를 표시하려면 장면과 카메라 및 렌더러, 3가지가 필요하다.

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
// camera - 화면에 어떤 것이 렌더링될 것인지 결정한다.

/*
  첫 번째 속성은 field of view (시야각) 이다.
  FOV(시야각)는 해당 시점의 화면이 보여지는 정도를 나타낸다. 값은 각도 값으로 설정한다.
*/ 

/*
  두 번째 속성은 aspect ratio(종횡비) 이다.
  대부분의 경우 요소의 높이와 너비에 맞추어 표시하지만 그렇지 않을 경우에는 와이드 스크린에 옛날 영화를
  트는 것 처럼 이미지가 틀어져 보일 것이다.
*/

/*
  다음 두 속성은 near 와 far 절단면이다.
  far 값 보다 멀리 있는 요소나 near 값 보다 가까이 있는 오브젝트는 렌더링 되지 않는다는 뜻이다.
  앱 성능 향상을 위해 사용할 수 있다.
*/

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
// renderer - 오브젝트가 그려지는 곳이다.
/*
  renderer 인스턴스를 생성함과 동시에, 렌더링 할 곳의 크기를 설정해줘야 한다.
*/

root.appendChild( renderer.domElement );
// renderer 엘리먼트는 HTML 문서 안에 <canvas> 라는 엘리먼트로 들어간다.
// #root 태그 자식 요소로 설정

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// x, y, z 축 좌표 1 값을 정점으로 하는 BoxGeometry를 geometry 라는 변수에 대입

const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
// MeshBasicMaterial - 단순 음영 처리 방식으로 geometry를 그리기 위한 재질
// 이 재질은 조명의 영향을 받지 않는다.

const cube = new THREE.Mesh( geometry, material );
// geometry 와 material 이 합쳐져 mesh를 이루고 변수 cube에 대입한다.

scene.add( cube );
// 장면에 객체를 추가한다.

camera.position.z = 3;
// 카메라 위치를 z축의 값으로 지정

const animate = () => {
  // 애니메이션 함수 생성

  requestAnimationFrame( animate );
  // 자바스크립트의 내장함수로 애니메이션을 구현한다.
  
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );
  // scene과 camera를 렌더링 한다.
};

animate();
// animate() 함수가 실행되면서 애니메이션이 구현된 오브젝트가 브라우저에 출력된다.

// webpack dev server ( npm run dev ), webpack prod ( npm run build 명령어 ) - dist 폴더 index.html 파일에서도 정상 출력 확인
