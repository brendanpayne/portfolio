import * as THREE from 'three'
import { useRef } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { MarchingCubes, MarchingCube, Environment, Bounds } from '@react-three/drei'
import { Physics, RigidBody, BallCollider } from '@react-three/rapier'
import { technologies } from '../../constants'

function Ball({ icon, color, position }) {
  const api = useRef()
  const texture = useLoader(THREE.TextureLoader, icon)
  const spriteRef = useRef()

  const initialPosition = [position[0], position[1], 0]

  useFrame((state, delta) => {
    delta = Math.min(delta, 0.1)
    const currentPosition = api.current.translation()
    
    currentPosition.z = 0
    api.current.setTranslation(currentPosition, true)

    api.current.applyImpulse(
      new THREE.Vector3()
        .copy(currentPosition)
        .normalize()
        .multiplyScalar(delta * -0.01),
    )

    if (spriteRef.current) {
      spriteRef.current.position.set(currentPosition.x, currentPosition.y, 1)
      spriteRef.current.lookAt(state.camera.position)
    }
  })

  return (
    <>
      <RigidBody ref={api} colliders={false} linearDamping={4} angularDamping={0.95} position={initialPosition}>
        <MarchingCube strength={0.5} subtract={20} color={color} />
        <BallCollider args={[0.1]} type="dynamic" />
      </RigidBody>
      <sprite ref={spriteRef} scale={[0.2, 0.2, 0.2]} renderOrder={1}>
        <spriteMaterial map={texture} />
      </sprite>
    </>
  )
}

function Pointer({ vec = new THREE.Vector3() }) {
  const ref = useRef()
  useFrame(({ pointer, viewport }) => {
    const { width, height } = viewport.getCurrentViewport()
    vec.set(pointer.x * (width / 2), pointer.y * (height / 2), 0)
    ref.current.setNextKinematicTranslation(vec)
  })
  return (
    <RigidBody type="kinematicPosition" colliders={false} ref={ref}>
      <MarchingCube strength={0} color="#915EFF" />
      <BallCollider args={[0.01]} type="dynamic" />
    </RigidBody>
  )
}

const BallCanvas = () => {
  return (
    <Canvas orthographic camera={{ zoom: 10 }}>
      <ambientLight intensity={1} />
      <Physics gravity={[0, 0, 0]}>
        <MarchingCubes resolution={80} maxPolyCount={20000} enableUvs={false} enableColors>
        <meshStandardMaterial vertexColors thickness={0.3} roughness={0.25} />
          {technologies.map((tech, index) => (
            <Ball key={index} icon={tech.icon} color={tech.color} position={[Math.random() - 0.5, Math.random() - 0.5, 0]} />
          ))}
          <Pointer />
        </MarchingCubes>
      </Physics>
      <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/brown_photostudio_02_1k.hdr" />
      <Bounds fit clip observe margin={1}>
        <mesh visible={false}>
          <boxGeometry />
        </mesh>
      </Bounds>
    </Canvas>
  )
}

export default BallCanvas
