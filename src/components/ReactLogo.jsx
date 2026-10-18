import { useRef } from 'react';
import { Float } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const ReactLogo = ({ position, ...props }) => {
  const groupRef = useRef();

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.5;
      groupRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <Float floatIntensity={0.8} rotationIntensity={0.6} speed={1.5}>
      <group position={position} ref={groupRef} scale={0.2} {...props}>
        {/* React Nucleus / Core */}
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial
            color="#00d8ff"
            emissive="#00b4d8"
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* 3 Electron Orbital Rings */}
        {[0, Math.PI / 3, -Math.PI / 3].map((angle, index) => (
          <group key={index} rotation={[0, 0, angle]}>
            <mesh scale={[1, 0.4, 1]}>
              <torusGeometry args={[1.8, 0.06, 16, 64]} />
              <meshStandardMaterial
                color="#00d8ff"
                emissive="#0077b6"
                emissiveIntensity={0.6}
                roughness={0.2}
                metalness={0.7}
              />
            </mesh>
          </group>
        ))}
      </group>
    </Float>
  );
};

export default ReactLogo;

