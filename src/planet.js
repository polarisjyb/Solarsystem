import * as THREE from 'three';

// Planet 생성
// (반지름, 태양으로부터의 거리, 색깔, 와이어프레임, 자전 속도, 공전 속도)
class Planet {
  constructor(radius, distanceFromSun, color, wireframe, rotationSpeed, revolutionSpeed) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color, wireframe });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(distanceFromSun, 0, 0);
    
    // 자전, 공전 속도
    this.distanceFromSun = distanceFromSun;

    this.rotationSpeed = rotationSpeed;
    this.revolutionSpeed = revolutionSpeed;

    this.orbitAngle = 0;
    this.mesh.rotation.y = Math.PI / 2;
  }

  getMesh() {
    return this.mesh;
  }

  update() {
    this.orbitAngle += this.revolutionSpeed;
    this.mesh.position.x = Math.cos(this.orbitAngle) * this.distanceFromSun;
    this.mesh.position.z = Math.sin(this.orbitAngle) * this.distanceFromSun;
    
    this.mesh.rotation.y += this.rotationSpeed;
    // console.log(this.mesh.rotation.y)
  }
};

export default Planet;
