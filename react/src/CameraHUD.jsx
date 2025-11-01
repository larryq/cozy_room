import { useThree, useFrame } from "@react-three/fiber";

export default function CameraHUD() {
  const { camera } = useThree();

  useFrame(() => {
    console.log("Camera position:", {
      x: camera.position.x.toFixed(2),
      y: camera.position.y.toFixed(2),
      z: camera.position.z.toFixed(2),
    });
    console.log("Camera rotation:", {
      x: camera.rotation.x.toFixed(2),
      y: camera.rotation.y.toFixed(2),
      z: camera.rotation.z.toFixed(2),
    });
  });

  return null;
}
