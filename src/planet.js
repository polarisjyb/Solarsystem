import * as THREE from 'three';

// Planet 생성 (반지름, 태양으로부터의 거리, 색깔, 와이어프레임: true or false)
class Planet {
  constructor(radius, distanceFromSun, color, wireframe) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color, wireframe });
    this.mesh = new THREE.Mesh(geometry, material);
    this.mesh.position.set(distanceFromSun, 0, 0);
  }

  getMesh() {
    return this.mesh;
  }

};

export default Planet;
