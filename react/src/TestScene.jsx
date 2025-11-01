import { Canvas } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

function Helmet() {
  const { scene } = useGLTF("/assets/cozy_room.glb");
  return <primitive object={scene} scale={2} />;
}

export default function TestScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Helmet />
    </Canvas>
  );
}
