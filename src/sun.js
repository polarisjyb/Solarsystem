import * as THREE from 'three';

// Sun 생성 (반지름, 색깔, 와이어프레임, 자전 속도)
class Sun {
  constructor(radius, color, wireframe, rotationSpeed) {
    const geometry = new THREE.SphereGeometry(radius, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color, wireframe });
    this.mesh = new THREE.Mesh(geometry, material);

    // 태양의 자전 및 각도 초기화
    this.rotationAngle = 0;
    this.rotationSpeed = rotationSpeed;
  }

  getMesh() {
    return this.mesh;
  }

  setPosition(x, y, z) {
    this.mesh.position.set(x, y, z);
  }

  update() {

    // 태양의 자전 업데이트
    this.rotationAngle += this.rotationSpeed;
    this.mesh.rotation.y = this.rotationAngle;
    
    // console.log(this.mesh.rotation.y)
  }
};

export default Sun;