import { ContactShadows } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Geo from "./Geo";
import Light from "./Light/Light";

const R3F = () => {
  return (
    <Canvas camera={{ position: [0, 0.25, 12], fov: 35, rotation: [0, 0, 0] }}>
      <Light />
      <Geo />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={1}
        scale={20}
        blur={3}
        far={4}
      />
    </Canvas>
  );
};

export default R3F;
