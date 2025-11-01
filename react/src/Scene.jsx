import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GizmoHelper, GizmoViewport, Environment } from "@react-three/drei";
import Model from "./Model";
import * as THREE from "three";
import { useRef, useEffect } from "react";

export default function Scene() {
  const controlsRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const cam = controlsRef.current?.object;
      if (cam) {
        const position = cam.position.clone();
        const direction = new THREE.Vector3();
        cam.getWorldDirection(direction);
        const formatVec3 = (v) => v.toArray().map((n) => Number(n).toFixed(2));
        const lookAt = position.clone().add(direction.multiplyScalar(10)); // 10 units ahead
        console.log(
          "Camera position:",
          cam.position.toArray().map((n) => n.toFixed(2))
        );
        // console.log(
        //   "Camera rotation:",
        //   cam.rotation.toArray().map((n) => n.toFixed(2))
        // );
        console.log("Camera look-at point:", formatVec3(lookAt));
      }
    }, 2000); // log every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <Canvas
      //''10.95', '5.03', '-4.04'
      camera={{ position: [10.95, 5.03, -4.04], fov: 50 }}
      //   camera={{ position: [10.09, 4.41, -5.83], fov: 50 }}
      //   gl={{
      //     toneMapping: THREE.ACESFilmicToneMapping,
      //     toneMappingExposure: 1.25,
      //   }}
    >
      {/* Lighting */}
      <ambientLight intensity={2.5} />
      <directionalLight position={[5, 10, 5]} intensity={11} />
      <Environment files="/assets/plains_sunset_2k.hdr" background blur={0.8} />
      {/* <Environment
        files="/assets/rural_evening_road_2k.hdr"
        background
        blur={0.8}
      /> */}

      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        target={[2.22, 2.39, 0.06]} //'2.22', '2.39', '0.06'
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
        minAzimuthAngle={-Math.PI}
        maxAzimuthAngle={Math.PI / 1}
        enableZoom={true}
        maxDistance={15}
        minDistance={3}
      />

      {/* Model */}
      <Model />
    </Canvas>
  );
}
