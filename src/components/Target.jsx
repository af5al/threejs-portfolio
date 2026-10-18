import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const ref = useRef();

  useGSAP(() => {
    if (!ref.current) return;
    gsap.to(ref.current.position, {
      y: '+=0.4',
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
    });
  });

  return (
    <group {...props}>
      <group ref={ref} scale={0.3}>
        <mesh>
          <sphereGeometry args={[0.5, 32, 32]} />
          <meshStandardMaterial color="#ef4444" emissive="#991b1b" emissiveIntensity={0.5} />
        </mesh>

        {/* Rings */}
        {[0.8, 1.1, 1.4].map((r, i) => (
          <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[r, 0.04, 16, 64]} />
            <meshStandardMaterial color={i % 2 === 0 ? '#ffffff' : '#ef4444'} />
          </mesh>
        ))}
      </group>
    </group>
  );
};

export default Target;