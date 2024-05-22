import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const WavesCanvas = () => {
    return (
        <Canvas camera={{ position: [10, 25, 10] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Waves />
        </Canvas>
    )
}

function Waves() {
    const groupRef = useRef();
    const w = 200;
    const h = 200;

    const lines = useMemo(() => {
      const linesArray = [];
      for (let i = 0; i < h; i++) {
        const points = new Array(w).fill().map((_, j) => new THREE.Vector3(i - w / 2, 0, j - h / 2));
        const geometry = new THREE.BufferGeometry().setFromPoints(points);
        linesArray.push({ geometry, points });
      }
      return linesArray;
    }, [w, h]);
  
    useFrame(({ clock, delta }) => {
      const time = clock.getElapsedTime();
      lines.forEach(({ geometry, points }, i) => {
        points.forEach((point, j) => {
            point.y = Math.sin((i + time) * 0.3) * 2 + Math.cos((j + time) * 0.4) * 2;
        });
        geometry.setFromPoints(points);
        geometry.attributes.position.needsUpdate = true;
      });
  
      if (groupRef.current) {
        groupRef.current.rotation.y += 0.0002;
      }
    });
  
    return (
      <group ref={groupRef}>
        {lines.map(({ geometry }, i) => (
          <line geometry={geometry} key={i}>
            <lineBasicMaterial color="#915EFF" />
          </line>
        ))}
      </group>
    );
}

export default WavesCanvas