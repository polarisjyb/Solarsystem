import './style.css'
import * as THREE from 'three';

// scene, camera, renderer 생성
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('root').appendChild(renderer.domElement);

