import * as THREE from 'three';

// Planet 생성
// (반지름, 태양으로부터의 거리, 색깔, 와이어프레임, 자전 속도, 공전 속도)
class Planet {
  constructor(radius, distanceFromSun, textureUrl, rotationSpeed, revolutionSpeed) {
    const texture = new THREE.TextureLoader().load(textureUrl);
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(distanceFromSun, 0, 0);
    
    // 생성되는 인스턴스의 distanceFromSun 초기화 
    this.distanceFromSun = distanceFromSun;

    // 행성의 자전 및 공전 속도 설정
    this.rotationSpeed = rotationSpeed;
    this.revolutionSpeed = revolutionSpeed;

    // 행성의 공전 각도 - 초기화 값 0, 자전 각도 - y축을 중심으로 원주율/2
    this.orbitAngle = 0;
    this.mesh.rotation.y = Math.PI / 2;

    // console.log(this.mesh.rotation.y)

    // 공전 궤도 생성
    // EllipseCurve 활용 (타원 곡선)
    const orbitCurve = new THREE.EllipseCurve(
      0, 0,          // x,y - 타원 중심점의 x, y 좌표
      distanceFromSun, distanceFromSun, // xRadius, yRadius - x, y 축의 반지름 반경
      0, 2 * Math.PI, // startAngle, endAngle - 호의 시작 및 끝 각도(radian 단위)
                      // 0 radian 에서 시작하여 2 * PI 라디안에서 끝 (완전한 타원을 그림)
      false,          // Clockwise - 타원이 시계 방향으로 그려지는지의 여부
      0               // rotation - x축에서 시계 반대 방향으로 radian 단위의 타원의 회전 각도 (기본값:0)
    );

    const orbitPoints = orbitCurve.getPoints(100);
    const orbitGeometry = new THREE.BufferGeometry().setFromPoints(orbitPoints);
    const orbitMaterial = new THREE.LineBasicMaterial();

    this.orbit = new THREE.Line(orbitGeometry, orbitMaterial);

    // 기본적으로 THREE.CircleGeometry 또는 THREE.EllipseCurve에서 생성된 THREE.Line 객체는 z축에 정렬되어 있으므로 x축을 중심으로 90도(π/2 라디안과 동일) 회전해야 한다. 
    // 태양계 행성의 궤도 평면인 x-z 평면에 평평하게 놓이도록 설정 (x축과 z축에 맞닿는 평면)
    this.orbit.rotation.x = Math.PI / 2;

    // 공전 궤도 위치 설정
    this.orbit.position.set(0, 0, 0);

    // this.orbit는 행성의 공전 궤도 경로를 나타내는 Line 객체를 참조.
    // this.orbit.name = 'orbit'로 설정하면 궤도 객체이름이 'orbit'로 설정된다.
    // scene에서 object(객체)를 찾거나 어떤 방법으로 제어가 필요한 경우 나중에 객체를 식별하는데 유용
    this.orbit.name = 'orbit';
    
    // 공전 궤도를 Scene에 추가
    this.mesh.add(this.orbit);    
  
  }

  getMesh() {
    return this.mesh;
  }

  getOrbit() {
    return this.orbit;
  }

  update() {
    this.orbitAngle -= this.revolutionSpeed;
    this.mesh.position.x = Math.cos(this.orbitAngle) * this.distanceFromSun;
    this.mesh.position.z = Math.sin(this.orbitAngle) * this.distanceFromSun;
    
    this.mesh.rotation.y += this.rotationSpeed;
    // console.log(this.mesh.rotation.y)
  }
};

export default Planet;

// 이전 코드
// import * as THREE from 'three';

// // Planet 생성
// // (반지름, 태양으로부터의 거리, 색깔, 와이어프레임, 자전 속도, 공전 속도)
// class Planet {
//   constructor(radius, distanceFromSun, color, wireframe, rotationSpeed, revolutionSpeed) {
//     const geometry = new THREE.SphereGeometry(radius, 32, 32);
//     const material = new THREE.MeshBasicMaterial({ color, wireframe });
//     this.mesh = new THREE.Mesh(geometry, material);
//     this.mesh.position.set(distanceFromSun, 0, 0);
    
//     // 생성되는 인스턴스의 distanceFromSun 초기화 
//     this.distanceFromSun = distanceFromSun;

//     // 행성의 자전 및 공전 속도 설정
//     this.rotationSpeed = rotationSpeed;
//     this.revolutionSpeed = revolutionSpeed;

//     // 행성의 공전 각도 초기화 값 0
//     this.orbitAngle = 0;
//     this.mesh.rotation.y = Math.PI / 2;

//     // 공전 궤도 라인 생성
//     const orbitGeometry = new THREE.CircleGeometry(distanceFromSun, 64);
//     const orbitMaterial = new THREE.LineBasicMaterial({ color: color });

//     this.orbit = new THREE.Line(orbitGeometry, orbitMaterial);
//     this.orbit.rotation.x = Math.PI / 2;

//     // 공전 궤도 위치 설정
//     this.orbit.position.set(0, 0, 0);

//     // 공전 궤도를 Scene에 추가
//     this.orbit.name = 'orbit';
//     this.mesh.add(this.orbit);    
  
//   }

//   getMesh() {
//     return this.mesh;
//   }

//   getOrbit() {
//     return this.orbit;
//   }

//   update() {
//     this.orbitAngle -= this.revolutionSpeed;
//     this.mesh.position.x = Math.cos(this.orbitAngle) * this.distanceFromSun;
//     this.mesh.position.z = Math.sin(this.orbitAngle) * this.distanceFromSun;
    
//     this.mesh.rotation.y += this.rotationSpeed;
//     // console.log(this.mesh.rotation.y)

//     // 공전 궤도 업데이트
//     this.orbit.rotation.z += this.revolutionSpeed;
//   }
// };

// export default Planet;