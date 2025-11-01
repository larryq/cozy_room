import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Model({ onLoaded }) {
  const { scene } = useGLTF("/assets/cozy_room_jpg.glb");

  return <primitive object={scene} />;
}
