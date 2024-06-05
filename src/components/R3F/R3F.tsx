import { ContactShadows, Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Geo from "./Geo";

const R3F = () => {
  return (
    <Canvas camera={{ position: [0, 0.25, 12], fov: 35, rotation: [0, 0, 0] }}>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 10]}
        shadow-mapSize={2048}
        castShadow
      />
      <OrbitControls />
      <Geo />
      <ContactShadows
        position={[0, -2, 0]}
        opacity={1}
        scale={20}
        blur={3}
        far={4}
      />
      <Environment preset="city" />
    </Canvas>
  );
};

export default R3F;
