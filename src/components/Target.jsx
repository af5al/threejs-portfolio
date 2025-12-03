import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Target = (props) => {
  const ref = useRef();

  useGSAP(() => {
    gsap.to(ref.current.position, {
      y: 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group ref={ref} {...props}>
      <mesh>
        <sphereGeometry args={[0.6, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Rings */}
      {[1, 1.2, 1.4].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[r, 0.05, 16, 100]} />
          <meshStandardMaterial color={i % 2 === 0 ? "white" : "red"} />
        </mesh>
      ))}
    </group>
  );
};

export default Target;