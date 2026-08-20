import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function DistortedShape() {
  const meshRef = useRef<Mesh>(null!);
  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.8}>
      <Icosahedron ref={meshRef} args={[1.6, 8]}>
        <MeshDistortMaterial
          color="#22d3ee"
          emissive="#7c3aed"
          emissiveIntensity={0.35}
          roughness={0.15}
          metalness={0.6}
          distort={0.35}
          speed={1.5}
        />
      </Icosahedron>
    </Float>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.9} />
      <pointLight position={[-5, -3, -5]} intensity={0.5} color="#a78bfa" />
      <DistortedShape />
      <Sparkles
        count={80}
        scale={6}
        size={2}
        speed={0.4}
        color="#7dd3fc"
        opacity={0.6}
      />
    </Canvas>
  );
}
