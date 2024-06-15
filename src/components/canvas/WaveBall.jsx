import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';

const WaveBallCanvas = () => {
    return (
        <Canvas camera={{ position: [0, 12, 0] }}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <WaveBall />
        </Canvas>
    )
}

function WaveBall() {
  const texture = useLoader(THREE.TextureLoader, 'src/assets/email.png');
  const groupRef = useRef();
  const w = 50; // points 
  const h = 50; // lines
  const r = 5; // radius

  const lines = useMemo(() => {
    const linesArray = [];
    for (let i = 0; i < h; i++) {
      const points = [];
      for (let j = 0; j <= w; j++) {
        const t = (i / h) * Math.PI;
        const p = (j / w) * 2 * Math.PI;
        const x = r * Math.sin(t) * Math.cos(p);
        const y = r * Math.sin(t) * Math.sin(p);
        const z = r * Math.cos(t);
        points.push(new THREE.Vector3(x, y, z));
      }
      const geometry = new THREE.BufferGeometry().setFromPoints(points);
      linesArray.push({ geometry, points });
    }
    return linesArray;
  }, [w, h, r]);

  useFrame(({ clock, delta }) => {
    const time = clock.getElapsedTime();
    lines.forEach(({ geometry, points }, i) => {
      points.forEach((point, j) => {
          const wave = Math.sin((point.x * 0.3 + time)) + Math.cos((point.y * 0.3 + time));
          const newR = r + wave * 0.5;
          point.setLength(newR);
      });
      geometry.setFromPoints(points);
      geometry.attributes.position.needsUpdate = true;
    });

    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
      groupRef.current.rotation.x += -0.001;
    }
  });

  return (
    <group ref={groupRef}>
      {lines.map(({ geometry }, i) => (
        <line geometry={geometry} key={i}>
          <lineBasicMaterial color="#915EFF" />
        </line>
      ))}
      <sprite ref={groupRef} scale={[6, 5, 0]} renderOrder={1}>
        <spriteMaterial map={texture} />
      </sprite>
    </group>
  );
}


export default WaveBallCanvas