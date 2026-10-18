import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import { Float, useTexture } from '@react-three/drei';

const Cube = ({ position, ...props }) => {
  const texture = useTexture('/textures/cube.webp');
  const cubeRef = useRef();
  const [hovered, setHovered] = useState(false);

  useGSAP(() => {
    gsap
      .timeline({
        repeat: -1,
        repeatDelay: 0.5,
      })
      .to(cubeRef.current.rotation, {
        y: hovered ? '+=2' : `+=${Math.PI * 2}`,
        x: hovered ? '+=2' : `-=${Math.PI * 2}`,
        duration: 2.5,
        stagger: {
          each: 0.15,
        },
      });
  });

  return (
    <Float floatIntensity={1}>
      <group position={position} rotation={[2.6, 0.8, -1.8]} scale={0.35} dispose={null} {...props}>
        <mesh
          ref={cubeRef}
          castShadow
          receiveShadow
          onPointerEnter={() => setHovered(true)}>
          <boxGeometry args={[1.4, 1.4, 1.4]} />
          <meshMatcapMaterial matcap={texture} toneMapped={false} />
        </mesh>
      </group>
    </Float>
  );
};

useTexture.preload('/textures/cube.webp');

export default Cube;

