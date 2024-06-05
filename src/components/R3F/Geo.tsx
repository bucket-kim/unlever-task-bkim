import { Float, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Torus001: THREE.Mesh;
    Torus002: THREE.Mesh;
    Torus003: THREE.Mesh;
    Torus004: THREE.Mesh;
    Torus005: THREE.Mesh;
    Graph_Geo: THREE.Mesh;
    Axis_Geo: THREE.Mesh;
  };
  materials: {
    Material: THREE.MeshStandardMaterial;
  };
};

const Geo = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes } = useGLTF("/models/geo.glb") as GLTFResult;

  const blackMat = new THREE.MeshStandardMaterial({
    color: "#adadad",
    opacity: 0.5,
    // transparent: true,
  });
  const purpleMat = new THREE.MeshStandardMaterial({
    color: "#aab7ff",
    opacity: 0.5,
    // transparent: true,
  });
  const purple001Mat = new THREE.MeshStandardMaterial({
    color: "#948cf1",
    opacity: 0.5,
    // transparent: true,
  });
  const purple002Mat = new THREE.MeshStandardMaterial({
    color: "#786ded",
    opacity: 0.5,
    // transparent: true,
  });
  const purple003Mat = new THREE.MeshStandardMaterial({
    color: "#6054ec",
    opacity: 0.5,
    // transparent: true,
  });
  const purple004Mat = new THREE.MeshStandardMaterial({
    color: "#792ee3",
    opacity: 0.5,
    // transparent: true,
  });
  const purple005Mat = new THREE.MeshStandardMaterial({
    color: "#2311ea",
    opacity: 0.5,
    // transparent: true,
  });

  return (
    <group {...props} dispose={null}>
      <Float
        floatIntensity={0.1}
        floatingRange={[1, 4]}
        rotationIntensity={0.1}
      >
        <group
          position={[-5, -1, 0]}
          rotation={[0, Math.PI / 1.5, 0]}
          scale={1.5}
        >
          <mesh
            name="Graph_Geo"
            castShadow
            receiveShadow
            geometry={nodes.Graph_Geo.geometry}
            material={purpleMat}
            userData={{ name: "Graph_Geo" }}
          />
          <mesh
            name="Axis_Geo"
            castShadow
            receiveShadow
            geometry={nodes.Axis_Geo.geometry}
            material={blackMat}
            userData={{ name: "Axis_Geo" }}
          />
        </group>
      </Float>
      <Float
        floatIntensity={0.1}
        floatingRange={[1, 4]}
        rotationIntensity={0.1}
      >
        <group
          position={[5, 0.5, 0]}
          rotation={[0, Math.PI / 0.45, 0]}
          scale={1.5}
        >
          {/* {Array.from({ length: 5 }).map((_, idx) => (
            <mesh
              key={idx}
              name={`Torus00${idx}`}
              castShadow
              receiveShadow
              geometry={nodes.Torus001.geometry}
              material={purple001Mat}
              userData={{ name: `Torus00${idx}` }}
            />
          ))} */}
          <mesh
            name="Torus001"
            castShadow
            receiveShadow
            geometry={nodes.Torus001.geometry}
            material={purple001Mat}
            userData={{ name: "Torus001" }}
          />
          <mesh
            name="Torus002"
            castShadow
            receiveShadow
            geometry={nodes.Torus002.geometry}
            material={purple002Mat}
            userData={{ name: "Torus002" }}
          />
          <mesh
            name="Torus003"
            castShadow
            receiveShadow
            geometry={nodes.Torus003.geometry}
            material={purple003Mat}
            userData={{ name: "Torus003" }}
          />
          <mesh
            name="Torus004"
            castShadow
            receiveShadow
            geometry={nodes.Torus004.geometry}
            material={purple004Mat}
            userData={{ name: "Torus004" }}
          />
          <mesh
            name="Torus005"
            castShadow
            receiveShadow
            geometry={nodes.Torus005.geometry}
            material={purple005Mat}
            userData={{ name: "Torus005" }}
          />
        </group>
      </Float>
    </group>
  );
};

export default Geo;

useGLTF.preload("/models/geo.glb");
