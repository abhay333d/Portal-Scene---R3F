import {
  Center,
  OrbitControls,
  Sparkles,
  useGLTF,
  useTexture,
} from "@react-three/drei";

export default function Experience() {
  const { nodes } = useGLTF("./model/portal.glb");
  const bakedTexture = useTexture("./model/baked.jpg");
  bakedTexture.flipY = false;
  return (
    <>
      <color args={["#030202"]} attach={"background"} />
      <OrbitControls makeDefault />

      <Center>
        <mesh geometry={nodes.baked.geometry}>
          <meshBasicMaterial map={bakedTexture} />
        </mesh>

        <mesh
          geometry={nodes.poleLightA.geometry}
          position={nodes.poleLightA.position}
          rotation={nodes.poleLightA.rotation}
          scale={nodes.poleLightA.scale}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>

        <mesh
          geometry={nodes.poleLightB.geometry}
          position={nodes.poleLightB.position}
          rotation={nodes.poleLightB.rotation}
          scale={nodes.poleLightB.scale}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>

        <mesh
          geometry={nodes.protalLight.geometry}
          position={nodes.protalLight.position}
          rotation={nodes.protalLight.rotation}
          scale={nodes.protalLight.scale}
        >
          <meshBasicMaterial color={"#ffffe5"} />
        </mesh>

        <Sparkles
          size={6}
          count={40}
          position-y={1}
          scale={[4, 2, 4]}
          speed={1}
        />
      </Center>
    </>
  );
}
