import { Environment } from "@react-three/drei";
import { Fragment } from "react";

const Light = () => {
  return (
    <Fragment>
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[10, 10, 10]}
        shadow-mapSize={2048}
        castShadow
      />
      <Environment preset="city" />
    </Fragment>
  );
};

export default Light;
