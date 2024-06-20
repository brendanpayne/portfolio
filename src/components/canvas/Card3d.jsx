import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { RoundedBox, Environment } from '@react-three/drei';
import { TextureLoader, ShaderMaterial } from 'three';
import * as THREE from 'three';

const Card3D = ({ imageUrl, isMouseOver, isMobile }) => {
  const groupRef = useRef();
  const { mouse, viewport } = useThree();

  useFrame(({ clock }) => {
    if (groupRef.current) {
      let targetRotationY = 0;
      let targetRotationX = 0;

      if (isMouseOver) {
        const x = (mouse.x * viewport.width) / 2;
        const y = (mouse.y * viewport.height) / 2;
        
        targetRotationY = Math.atan2(x, 10);
        targetRotationX = Math.atan2(y, 10);
      } else {
        const time = clock.getElapsedTime();
        targetRotationY = 0.05 * Math.sin(time);
        targetRotationX = 0.05 * Math.cos(time);
      }

      groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetRotationY, 0.1);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetRotationX, 0.1);
    }
  });

  const texture = useLoader(TextureLoader, imageUrl);
  texture.repeat.set(0.3, 0.25);
  texture.center.set(0.1, 0);

  const materials = [
    new THREE.MeshStandardMaterial({ 
      map: texture, 
      roughness: 0.8, 
      metalness: 1,
      side: THREE.FrontSide,
    }),
    new THREE.MeshStandardMaterial({ color: '#915EFF', roughness: 0.6, metalness: 0.8 }),
  ];

  return (
    <group ref={groupRef} position={[0, 0.5, 0]} castShadow>
      <ambientLight intensity={1} color={'#DDD'} />
      {/* 3D Card */}
      <mesh castShadow receiveShadow>
        <RoundedBox args={[3, 4, 0.2]} radius={0.1} smoothness={4} scale={isMobile ? 0.8 : 1}>
          {materials.map((material, index) => (
            <primitive key={index} object={material} attach={`material-${index}`} />
          ))}
        </RoundedBox>
      </mesh>
    </group>
  );
};

const Scene = ({ imageUrl, isMouseOver, isMobile }) => {
  return (
    <>
      <Card3D imageUrl={imageUrl} isMouseOver={isMouseOver} isMobile={isMobile} />
    </>
  );
};

const StaticLights = ({isMobile}) => {
  const shadowMaterial = new ShaderMaterial({
    transparent: true,
    side: THREE.DoubleSide,
    uniforms: {
      color: { value: new THREE.Color('#915EFF') },
      opacity: { value: 0.2 }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      uniform float opacity;
      varying vec2 vUv;
      void main() {
        float dist = distance(vUv, vec2(0.5));
        float alpha = smoothstep(0.0, 0.5, dist);
        gl_FragColor = vec4(color, opacity * (1.0 - alpha));
      }
    `
  });

  return (
    <group>
      <mesh receiveShadow position={isMobile? [0, -1.3, 0] : [0, -1.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry attach="geometry" args={isMobile ? [1.6, 32] : [2, 64]} />
        <primitive object={shadowMaterial} attach="material" />
      </mesh>
    </group>
  );
};

const Card3DCanvas = ({ imageUrl, className }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <div
      onMouseEnter={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
      className={className}
    >
      <Canvas
        shadows
        camera={{ position: [-2, 0, 5], fov: 70 }}
      >
        <StaticLights isMobile={isMobile} />
        <Scene imageUrl={imageUrl} isMouseOver={isMouseOver} isMobile={isMobile}/>
        <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/kloofendal_48d_partly_cloudy_puresky_1k.hdr"/>
      </Canvas>
    </div>
  );
};

export default Card3DCanvas;
