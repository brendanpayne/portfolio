import { shaderMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { extend } from '@react-three/fiber';

const WaveShaderMaterial = shaderMaterial(
  // Uniforms
  {
    uTime: 0,
  },
  // Vertex Shader
  `
  uniform float uTime;
  varying vec3 vPosition;
  void main() {
    vPosition = position;
    vec3 pos = position;
    pos.z += sin(pos.x * 0.1 + uTime) * 5.0;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
  `,
  // Fragment Shader
  `
  varying vec3 vPosition;
  void main() {
    gl_FragColor = vec4(abs(sin(vPosition.z)), 0.1, 0.5, 1.0);
  }
  `
);

extend({ WaveShaderMaterial });

export { WaveShaderMaterial };