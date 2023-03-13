import * as THREE from 'three';

// Satellite 생성
// (반지름, 행성으로부터의 거리, 색깔, 와이어프레임, 자전 속도, 공전 속도)
class Satellite {
  constructor(radius, distanceFromPlanet, textureUrl, rotationSpeed, revolutionSpeed) {
    const texture = new THREE.TextureLoader().load(textureUrl);
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ map: texture });
    this.mesh = new THREE.Mesh(geometry, material);

    // 행성을 기준으로 위성의 초기 위치 설정
    this.mesh.position.set(distanceFromPlanet, 0, 0);

    // 위성의 자전 및 공전 속도 설정
    this.rotationSpeed = rotationSpeed;
    this.revolutionSpeed = revolutionSpeed;
    
    // 위성의 자전 각도 초기화 값 0
    this.rotationAngle = 0;

    // 생성되는 인스턴스의 distanceFromPlanet 초기화 
    this.distanceFromPlanet = distanceFromPlanet;
  }

  getMesh() {
    return this.mesh;
  }

  update() {
    // 위성의 자전 업데이트
    this.rotationAngle -= this.rotationSpeed;
    this.mesh.rotation.y = this.rotationAngle;

    // 행성 주변의 위성 위치 업데이트
    this.mesh.position.x = Math.cos(this.orbitAngle) * this.distanceFromPlanet;
    this.mesh.position.z = Math.sin(this.orbitAngle) * this.distanceFromPlanet;
  }
};

export default Satellite;