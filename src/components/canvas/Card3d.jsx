import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const Card3D = ({ imageUrl, isMouseOver }) => {
  const groupRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame(() => {
    if (groupRef.current) {
      let targetRotationY = 0;
      let targetRotationX = 0;

      if (isMouseOver) {
        // Convert mouse coordinates to viewport
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        
        // Calculate target rotation
        targetRotationY = Math.atan2(x, 10); 
        targetRotationX = Math.atan2(y, 10); 
      } else {
        const time = Date.now() * 0.0005;
        targetRotationY = Math.sin(time) * 0.1;
        targetRotationX = Math.cos(time) * 0.1;
      }

      // Smoothly interpolate rotation
      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetRotationX, 0.1);
    }
  });

  const texture = useLoader(TextureLoader, imageUrl);
  texture.repeat.set(0.3, 0.25);
  texture.center.set(0.1, 0);

  const materials = [
    new THREE.MeshStandardMaterial({ map: texture, roughness: 0.8, metalness: 0.2 }),
    new THREE.MeshStandardMaterial({ color: '#915EFF', roughness: 0.8, metalness: 0.2 }),
  ];

  return (
    <group ref={groupRef}>
      <ambientLight intensity={1} /> 
      <mesh>
        <RoundedBox args={[3, 4, 0.2]} radius={0.1} smoothness={4}>
          {materials.map((material, index) => (
            <primitive key={index} object={material} attach={`material-${index}`} />
          ))}
        </RoundedBox>
      </mesh>
    </group>
  );
};

const Scene = ({ imageUrl, isMouseOver }) => {
  return (
    <>
      <Card3D imageUrl={imageUrl} isMouseOver={isMouseOver} />
    </>
  );
};

const StaticLights = () => {
  return (
    <group>
      <directionalLight position={[10, 4, 3]} intensity={2} color={'#FFFFFF'} castShadow />
      <pointLight position={[0, 5, 1]} intensity={1} color={'#FFFFFF'} castShadow />
      <spotLight position={[5, 5, 10]} angle={0.2} intensity={2} color={'#915EFF'} castShadow />
    </group>
  );
};

const Card3DCanvas = ({ imageUrl }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setTimeout(() => setIsMouseOver(false), 500)}
      style={{ height: '100%', width: '100%' }}
    >
      <Canvas
        shadows
        camera={{ position: [-2, 0, 5], fov: 70 }}
        style={{ height: '100%', width: '100%' }}
      >
        <StaticLights />
        <Scene imageUrl={imageUrl} isMouseOver={isMouseOver} />
      </Canvas>
    </div>
  );
};

export default Card3DCanvas;
