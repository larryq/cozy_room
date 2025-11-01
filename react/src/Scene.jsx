import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GizmoHelper, GizmoViewport } from "@react-three/drei";
import Model from "./Model";
import * as THREE from "three";
import { useRef, useEffect } from "react";

export default function Scene() {
  const controlsRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      const cam = controlsRef.current?.object;
      if (cam) {
        console.log(
          "Camera position:",
          cam.position.toArray().map((n) => n.toFixed(2))
        );
        console.log(
          "Camera rotation:",
          cam.rotation.toArray().map((n) => n.toFixed(2))
        );
      }
    }, 2000); // log every 2 seconds

    return () => clearInterval(interval);
  }, []);
  return (
    <Canvas
      camera={{ position: [10.09, 4.41, -5.83], fov: 50 }}
      //   gl={{
      //     toneMapping: THREE.ACESFilmicToneMapping,
      //     toneMappingExposure: 1.25,
      //   }}
    >
      <GizmoHelper alignment="bottom-right" margin={[80, 80]}>
        <GizmoViewport
          axisColors={["red", "green", "blue"]}
          labelColor="white"
        />
      </GizmoHelper>
      {/* Lighting */}
      <ambientLight intensity={2.5} />
      <directionalLight position={[5, 10, 5]} intensity={11} />

      {/* Controls */}
      <OrbitControls
        ref={controlsRef}
        target={[0, 0, 0]}
        minPolarAngle={Math.PI / 3}
        maxPolarAngle={Math.PI / 2.2}
        minAzimuthAngle={-Math.PI}
        maxAzimuthAngle={Math.PI / 1}
        enableZoom={true}
        maxDistance={110}
        minDistance={3}
      />

      {/* Model */}
      <Model />
    </Canvas>
  );
}
