import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useLoader, useFrame, useThree } from '@react-three/fiber';
import { Physics, useSphere, usePlane } from '@react-three/cannon';
import { technologies } from '../../constants';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const createRandomBalls = (count, scaleFactor) => {
  const balls = [];
  for (let i = 0; i < count; i++) {
    const ball = {
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        0
      ],
      size: (Math.random() * 2 + 2) * scaleFactor,
    };
    balls.push(ball);
  }
  return balls;
};

const Ball = ({ position, size, icon, color, scaleFactor, apiRef, id }) => {
  const [ref, api] = useSphere(() => ({
    mass: 1,
    position: position.map(coord => coord * scaleFactor),
    args: [size * scaleFactor],
    linearDamping: 0.9,
    angularDamping: 0.9,
  }));

  useEffect(() => {
    apiRef.current.push({ api, id });
  }, [api, apiRef, id]);

  const texture = useLoader(TextureLoader, icon);

  return (
    <group ref={ref}>
      <mesh>
        <circleGeometry args={[size, 32]} />
        <meshBasicMaterial color={color} transparent opacity={0.8} />
      </mesh>
      <mesh>
        <circleGeometry args={[size * 0.9, 32]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </group>
  );
};

const BoundaryPlane = ({ position, rotation, scale, color }) => {
  usePlane(() => ({
    position,
    rotation,
    type: 'Static',
  }));

  return (
    <mesh position={position} rotation={rotation} scale={scale}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial color={color} />
    </mesh>
  );
};

const DebugCircle = ({ mouse }) => {
  const ref = useRef();
  const { size, viewport } = useThree();

  useFrame(() => {
    if (ref.current) {
      const aspect = viewport.width / viewport.height;
      ref.current.position.set(mouse.current.x * viewport.width / 2, mouse.current.y * viewport.height / 2, 0);
    }
  });

  return (
    <mesh ref={ref}>
      <circleGeometry args={[0.5, 32]} />
      <meshBasicMaterial color="red" wireframe />
    </mesh>
  );
};

const FloatingBalls = ({ scaleFactor, mouse }) => {
  const apiRef = useRef([]);
  const radius = 5; // Radius within which the mouse affects the balls
  const cooldown = useRef(false); // To control impulse frequency

  useFrame(() => {
    if (cooldown.current) return;
    cooldown.current = true;
    setTimeout(() => (cooldown.current = false), 100); // Cooldown period

    const mousePosition = new THREE.Vector3(mouse.current.x * 25, mouse.current.y * 25, 0);
    apiRef.current.forEach(({ api, id }) => {
      api.position.subscribe(position => {
        const ballPosition = new THREE.Vector3(position[0], position[1], 0);
        const distance = ballPosition.distanceTo(mousePosition);
        if (distance < radius) {
          const direction = ballPosition.clone().sub(mousePosition).normalize().multiplyScalar(0.5); // Adjust force magnitude
          api.applyImpulse([direction.x, direction.y, 0], [Math.random() * 0.5, Math.random() * 0.5, 0]);
          console.log(`Ball ${technologies[id].name} at position (${position[0].toFixed(2)}, ${position[1].toFixed(2)}, ${position[2].toFixed(2)}) is being forced`);
        }
      });
    });
  });

  const [balls, setBalls] = useState(createRandomBalls(technologies.length, scaleFactor));

  useEffect(() => {
    setBalls(createRandomBalls(technologies.length, scaleFactor));
  }, [scaleFactor]);

  return (
    <>
      {balls.map((ball, index) => (
        <Ball
          key={index}
          id={index}
          position={ball.position}
          size={ball.size}
          icon={technologies[index].icon}
          color={technologies[index].color}
          scaleFactor={scaleFactor}
          apiRef={apiRef}
        />
      ))}
      <DebugCircle mouse={mouse} />
    </>
  );
};

const BallCanvas = () => {
  const [dimensions, setDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
  const mouse = useRef(new THREE.Vector2());

  useEffect(() => {
    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      mouse.current.set(
        (clientX / window.innerWidth) * 2 - 1,
        -(clientY / window.innerHeight) * 2 + 1,
      );
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const aspect = dimensions.width / dimensions.height;
  const boundaryThickness = 0.1;
  const scaleFactor = Math.min(dimensions.width, dimensions.height) / 1000;

  return (
    <div className="h-screen w-screen bg-primary flex items-center justify-center">
      <Canvas orthographic camera={{ zoom: 50 / aspect }}>
        <ambientLight intensity={1.0} />
        <directionalLight position={[5, 5, 5]} intensity={0.5} />
        <pointLight position={[-5, -5, -5]} intensity={0.5} />
        <Physics gravity={[0, 0, 0]}>
          <FloatingBalls scaleFactor={scaleFactor} mouse={mouse} />
          {/* Boundary Planes */}
          <BoundaryPlane
            position={[0, -dimensions.height / 100 * 1.5, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[dimensions.width / 100, boundaryThickness, 1]}
            color="red"
          /> {/* Bottom */}
          <BoundaryPlane
            position={[0, dimensions.height / 100 * 1.5, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[dimensions.width / 100, boundaryThickness, 1]}
            color="green"
          /> {/* Top */}
          <BoundaryPlane
            position={[-dimensions.width / 100 * 1.5, 0, 0]}
            rotation={[0, Math.PI / 2, 0]}
            scale={[dimensions.height / 100, boundaryThickness, 1]}
            color="blue"
          /> {/* Left */}
          <BoundaryPlane
            position={[dimensions.width / 100 * 1.5, 0, 0]}
            rotation={[0, -Math.PI / 2, 0]}
            scale={[dimensions.height / 100, boundaryThickness, 1]}
            color="yellow"
          /> {/* Right */}
        </Physics>
      </Canvas>
    </div>
  );
};

export default BallCanvas;
