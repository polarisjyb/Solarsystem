import * as THREE from 'three';

// Sun 생성 (반지름, 색깔, 와이어프레임: true or false)
class Sun {
  constructor(radius, color, wireframe) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color, wireframe });
    this.mesh = new THREE.Mesh(geometry, material);
  }

  getMesh() {
    return this.mesh;
  }

  setPosition(x, y, z) {
    this.mesh.position.set(x, y, z);
  }
}

export default Sun;