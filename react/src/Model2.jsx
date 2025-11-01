import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/cozy_room.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve.geometry}
        material={materials.SVGMat}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.tabletop.geometry}
        material={materials.tabletop}
        position={[0, 2.866, 5.669]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={materials["table legs"]}
        position={[1.814, 1.172, 5.608]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={materials["monitor stand"]}
        position={[-0.009, 2.958, 6.163]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane003.geometry}
        material={materials["couch cushion"]}
        position={[0.192, 2.959, 5.268]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane058.geometry}
        material={materials["couch cushion"]}
        position={[5.069, 5.439, 7.464]}
        rotation={[0.093, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane059.geometry}
        material={nodes.Plane059.material}
        position={[5.069, 5.304, 7.473]}
        rotation={[-0.477, 0.042, 0.462]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane008.geometry}
        material={materials.Material}
        position={[0.044, 2.987, 5.29]}
        rotation={[3.096, 0.004, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane014.geometry}
        material={materials["clock hands"]}
        position={[-0.043, 2.991, 5.373]}
        rotation={[3.096, 0.004, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane029.geometry}
        material={materials["computer sides"]}
        position={[0.208, 2.979, 5.276]}
        rotation={[3.096, 0.004, -3.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane030.geometry}
        material={materials["Material.008"]}
        position={[1.311, 2.958, 5.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane031.geometry}
        material={materials["floor planks"]}
        position={[1.333, 3.107, 5.587]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane032.geometry}
        material={materials["floor planks"]}
        position={[1.333, 3.107, 5.509]}
        rotation={[-0.03, -0.119, 0.156]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane033.geometry}
        material={materials["floor planks"]}
        position={[1.262, 3.131, 5.53]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane034.geometry}
        material={materials["floor planks"]}
        position={[1.368, 3.107, 5.53]}
        rotation={[0, 0, -0.141]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_petal.geometry}
        material={materials["pink flower.001"]}
        position={[1.985, 3.545, 6.166]}
        rotation={[-0.416, -0.13, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve.geometry}
        material={materials["pink flower"]}
        position={[2.189, 3.134, 6.378]}
        rotation={[0, 1.554, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_petal001.geometry}
        material={materials["pink flower"]}
        position={[2.184, 3.371, 6.396]}
        rotation={[0.354, 0.455, -0.697]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve001.geometry}
        material={materials["flower pot 1"]}
        position={[2.104, 3.128, 6.351]}
        rotation={[2.429, 0.594, -1.813]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_petal002.geometry}
        material={materials["pink flower.001"]}
        position={[2.197, 3.405, 6.195]}
        rotation={[-0.163, 0.451, -0.689]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve002.geometry}
        material={materials["flower pot 2"]}
        position={[2.091, 3.098, 6.293]}
        rotation={[1.916, 0.602, -1.814]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_petal003.geometry}
        material={materials["flower pot 1"]}
        position={[6.062, 4.028, 7.007]}
        rotation={[-0.416, -0.13, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve005.geometry}
        material={materials["pink flower.001"]}
        position={[6.195, 3.771, 7.142]}
        rotation={[0, 1.554, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_petal004.geometry}
        material={materials["procedural leaves"]}
        position={[-2.722, 5.63, 6.515]}
        rotation={[0.155, -0.13, 0.115]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve006.geometry}
        material={materials.clock}
        position={[-2.518, 5.184, 6.48]}
        rotation={[0.57, 1.554, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.flower_petal005.geometry}
        material={materials["pink flower"]}
        position={[-2.669, 5.597, 6.681]}
        rotation={[0.055, -0.194, -0.486]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve007.geometry}
        material={nodes.BézierCurve007.material}
        position={[-2.739, 5.217, 6.649]}
        rotation={[1.545, 0.965, -0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane035.geometry}
        material={materials["Material.008"]}
        position={[2.065, 2.919, 6.307]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={materials["Material.007"]}
        position={[1.733, 3.068, 5.805]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["keyboard upper keys"]}
        position={[1.879, 3.2, 5.813]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube.geometry}
        material={materials["speaker case"]}
        position={[1.079, 3.491, 6.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roundcube002.geometry}
        material={materials["speaker mesh"]}
        position={[1.079, 3.493, 6.129]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane036.geometry}
        material={materials["curved wood hanger"]}
        position={[1.905, 2.932, 5.249]}
        rotation={[0, 0.365, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={materials["curved wood hanger"]}
        position={[1.833, 3.288, 5.094]}
        rotation={[0, 0.365, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["floor planks"]}
        position={[1.905, 3.534, 5.269]}
        rotation={[Math.PI / 2, 0, -0.365]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={materials.headphone}
        position={[1.701, 3.244, 5.342]}
        rotation={[0.065, 0.355, 0.155]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["curved wood hanger"]}
        position={[2.999, 3.521, 5.928]}
        rotation={[0, -0.419, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={materials["clock hands"]}
        position={[1.701, 3.244, 5.342]}
        rotation={[0.065, 0.355, 0.155]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["coffee cup"]}
        position={[1.198, 3.073, 5.164]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder525.geometry}
        material={materials["Material.002"]}
        position={[1.198, 3.078, 5.164]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={materials["speaker mesh"]}
        position={[0.103, 2.123, 3.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder008.geometry}
        material={materials["speaker mesh"]}
        position={[-0.24, 1.039, 4.402]}
        rotation={[-Math.PI, 0.521, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={materials["seat cushion"]}
        position={[0.08, 2.959, 3.378]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={materials["speaker mesh"]}
        position={[0.093, 2.285, 3.304]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane044.geometry}
        material={materials["seat cushion"]}
        position={[0.103, 2.245, 3.83]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane049.geometry}
        material={materials["book 1"]}
        position={[3.62, 3.156, 5.983]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane048.geometry}
        material={materials["book 1"]}
        position={[3.258, 3.156, 5.983]}
        rotation={[0, -0.392, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane050.geometry}
        material={materials["book 2"]}
        position={[3.593, 3.243, 5.983]}
        rotation={[Math.PI, -0.529, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane072.geometry}
        material={materials["book 2"]}
        position={[-2.848, 4.984, 6.132]}
        rotation={[-1.548, 0.044, -2.765]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert.geometry}
        material={materials["pink flower.001"]}
        position={[2.887, 3.489, 5.999]}
        rotation={[0, -0.419, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert002.geometry}
        material={materials["pink flower"]}
        position={[2.871, 3.494, 5.873]}
        rotation={[0, 0.816, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert003.geometry}
        material={materials["pink flower"]}
        position={[2.886, 3.499, 5.767]}
        rotation={[-Math.PI, 0.818, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert004.geometry}
        material={materials["pink flower"]}
        position={[2.979, 3.508, 5.812]}
        rotation={[Math.PI, -0.066, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane057.geometry}
        material={materials["floor planks"]}
        position={[5.34, 4.357, 7.386]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert008.geometry}
        material={materials["curved wood hanger"]}
        position={[6.061, 4.656, 7.667]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert010.geometry}
        material={materials["Material.003"]}
        position={[6.063, 4.264, 7.132]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder011.geometry}
        material={materials["flower pot 2"]}
        position={[6.051, 3.658, 7.16]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert005.geometry}
        material={materials["pink flower.001"]}
        position={[-2.71, 5.487, 6.394]}
        rotation={[-2.616, 0.659, 2.384]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert006.geometry}
        material={materials["pink flower"]}
        position={[-2.495, 5.589, 6.745]}
        rotation={[0.222, 0.3, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert007.geometry}
        material={materials["pink flower"]}
        position={[-2.483, 5.601, 6.486]}
        rotation={[2.843, 0.773, -2.726]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert009.geometry}
        material={materials["sticky note"]}
        position={[-2.483, 5.601, 6.486]}
        rotation={[2.843, 0.773, -2.726]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Vert011.geometry}
        material={materials["sticky note"]}
        position={[-2.495, 5.589, 6.746]}
        rotation={[0.222, 0.3, 0.137]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane052.geometry}
        material={materials["speaker mesh"]}
        position={[4.89, 3.876, 7.692]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane053.geometry}
        material={materials["floor planks"]}
        position={[4.89, 3.876, 7.669]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane056.geometry}
        material={materials["floor planks"]}
        position={[6.257, 4.265, 7.454]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Slipper.geometry}
        material={materials["Material.008"]}
        position={[0.509, 1.112, 5.879]}
        rotation={[0, 1.081, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Slipper001.geometry}
        material={materials["Material.008"]}
        position={[-0.488, 1.112, 5.879]}
        rotation={[-Math.PI, 1.518, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane061.geometry}
        material={materials["microphone stand"]}
        position={[0.869, 1.021, 7.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane064.geometry}
        material={materials.keyboard}
        position={[0.869, 1.021, 7.117]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane062.geometry}
        material={materials["microphone stand"]}
        position={[0.869, 1.511, 7.117]}
        rotation={[0, -0.432, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane066.geometry}
        material={materials.keyboard}
        position={[0.869, 1.511, 7.117]}
        rotation={[0, -0.432, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder012.geometry}
        material={materials["procedural leaves"]}
        position={[6, 4.154, 6.734]}
        rotation={[2.389, -0.297, -0.057]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder014.geometry}
        material={materials["procedural leaves"]}
        position={[6.309, 4.119, 6.919]}
        rotation={[2.38, 0.328, 0.508]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder015.geometry}
        material={materials["procedural leaves"]}
        position={[5.841, 4.187, 7.171]}
        rotation={[0.035, -0.848, -2.758]}
      />
      <group position={[-2.392, 2.811, -2.154]} rotation={[-0.01, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039.geometry}
          material={materials["keyboard upper keys"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_1.geometry}
          material={materials.keyboard}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_2.geometry}
          material={materials.Material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube039_3.geometry}
          material={materials["Material.001"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder019.geometry}
        material={materials.Material}
        position={[-2.482, 1.769, 5.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube022.geometry}
        material={materials["floor planks"]}
        position={[-2.875, 4.307, 6.66]}
        rotation={[0, 0, -0.532]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sticky_Note003.geometry}
        material={materials["sticky note"]}
        position={[-1.383, 4.53, 7.813]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sticky_Note004.geometry}
        material={materials["sticky note"]}
        position={[-1.78, 4.148, 7.82]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder020.geometry}
        material={materials["flower pot 1"]}
        position={[-2.632, 4.988, 6.541]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder021.geometry}
        material={materials["ale glass"]}
        position={[-1.298, 3.801, 6.355]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane073.geometry}
        material={nodes.Plane073.material}
        position={[-2.918, 2.857, -0.533]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder023.geometry}
        material={materials.Material}
        position={[-2.482, 1.769, 5.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder024.geometry}
        material={materials["coffee cup"]}
        position={[-2.482, 1.769, 5.041]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sticky_Note006.geometry}
        material={nodes.Sticky_Note006.material}
        position={[-0.034, 4.609, 7.816]}
        rotation={[-Math.PI / 2, -0.954, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus002.geometry}
        material={nodes.Torus002.material}
        position={[-2.847, 6.401, 0.61]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus003.geometry}
        material={materials["couch cushion"]}
        position={[-2.847, 6.334, 0.61]}
        rotation={[0, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder018.geometry}
        material={materials["couch cushion"]}
        position={[-2.847, 6.271, 0.609]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALLS001.geometry}
        material={materials["floor planks"]}
        position={[-3.82, 4.889, 2.983]}
        rotation={[-0.002, 0.014, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALLS002.geometry}
        material={materials["floor planks"]}
        position={[-3.32, 3.359, 2.983]}
        rotation={[-0.002, 0.014, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={materials["floor planks"]}
        position={[-2.274, 6.672, 2.245]}
        rotation={[-1.573, -0.018, 1.585]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={materials["Material.004"]}
        position={[-2.874, 6.388, 2.245]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={materials["Material.004"]}
        position={[-2.874, 3.043, 2.15]}
        rotation={[0, 0, -0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={materials["floor planks"]}
        position={[-2.717, 4.617, 5.677]}
        rotation={[0, 0, -0.112]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube025.geometry}
        material={materials["floor planks"]}
        position={[0.159, 5.522, 7.422]}
        rotation={[-0.112, Math.PI / 2, 0]}
      />
      <group position={[-2.884, 3.192, -3.009]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008.geometry}
          material={materials["clock hands"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube008_1.geometry}
          material={materials["microphone stand"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve001.geometry}
        material={materials["SVGMat.001"]}
        position={[-2.997, 5.003, 5.484]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane074.geometry}
        material={materials["computer sides"]}
        position={[-3.031, 4.982, 5.484]}
        rotation={[0, 0, 1.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane075.geometry}
        material={materials["computer sides"]}
        position={[-3.031, 4.982, 4.903]}
        rotation={[0, 0, 1.704]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Curve002.geometry}
        material={materials["SVGMat.002"]}
        position={[-2.986, 4.996, 4.921]}
        rotation={[0, 0, 0.036]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle.geometry}
        material={materials.clock}
        position={[2.024, 5.888, 7.711]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane076.geometry}
        material={materials["clock hands"]}
        position={[2.024, 5.827, 7.739]}
        rotation={[Math.PI / 2, -0.163, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder022.geometry}
        material={materials["coffee cup"]}
        position={[2.024, 5.813, 7.719]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane078.geometry}
        material={materials["couch cushion"]}
        position={[0.916, 1.344, -2.732]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane079.geometry}
        material={materials["clock hands"]}
        position={[0.514, 1.318, -3.12]}
        rotation={[0, 0, -0.19]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALLS.geometry}
        material={materials["wall material"]}
        position={[0.304, 2.113, 1.832]}
        rotation={[-0.002, 0.014, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALLS004.geometry}
        material={materials.flooring}
        position={[0.304, 2.151, 1.832]}
        rotation={[-0.002, 0.014, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pizza.geometry}
        material={materials["Material.002"]}
        position={[0.531, 1.937, -3.213]}
        rotation={[0, -0.579, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Pizza001.geometry}
        material={materials["Material.002"]}
        position={[0.79, 1.937, -2.545]}
        rotation={[0, -1.459, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane081.geometry}
        material={materials["Material.008"]}
        position={[1.346, 1.632, -2.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane082.geometry}
        material={nodes.Plane082.material}
        position={[1.319, 1.454, -2.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane083.geometry}
        material={nodes.Plane083.material}
        position={[1.345, 2.055, -2.81]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane104.geometry}
        material={nodes.Plane104.material}
        position={[1.365, 2.048, -2.809]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane106.geometry}
        material={materials["computer sides"]}
        position={[-1.565, 1.481, 7.821]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane107.geometry}
        material={materials["computer sides"]}
        position={[-1.241, 1.481, 7.821]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane110.geometry}
        material={materials.flooring}
        position={[6.878, 7.415, 8.195]}
        rotation={[0, 0.01, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane111.geometry}
        material={materials["speaker case"]}
        position={[-3.191, 1.473, -3.313]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane105.geometry}
        material={materials["flower pot 2"]}
        position={[0.841, 5.571, 7.313]}
      />
      <group position={[0.782, 5.726, 7.313]} rotation={[0, Math.PI / 2, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve007_1.geometry}
          material={nodes.BézierCurve007_1.material}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve007_2.geometry}
          material={materials["procedural leaves"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.BézierCurve007_3.geometry}
          material={materials["flower pot 1"]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder210.geometry}
        material={materials["procedural leaves"]}
        position={[0.884, 4.902, 7.102]}
        rotation={[-0.359, 0.855, -0.554]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder320.geometry}
        material={materials["procedural leaves"]}
        position={[1.171, 5.026, 7.406]}
        rotation={[2.848, 0.868, 3.126]}
        scale={0.083}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder321.geometry}
        material={materials["procedural leaves"]}
        position={[1.17, 5.042, 7.397]}
        rotation={[0.361, 1.371, -2.268]}
        scale={0.068}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder323.geometry}
        material={materials["procedural leaves"]}
        position={[1.182, 5.023, 7.398]}
        rotation={[-0.388, -0.946, -2.854]}
        scale={0.165}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder325.geometry}
        material={materials["procedural leaves"]}
        position={[1.17, 5.013, 7.408]}
        rotation={[3.027, 0.419, -2.407]}
        scale={0.09}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder326.geometry}
        material={materials["procedural leaves"]}
        position={[1.164, 4.987, 7.393]}
        rotation={[-0.612, -0.89, 2.679]}
        scale={0.233}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder522.geometry}
        material={materials["procedural leaves"]}
        position={[1.092, 4.75, 7.085]}
        rotation={[0.491, 0.433, -0.859]}
        scale={0.2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane108.geometry}
        material={materials["lightbulbs 2"]}
        position={[-1.36, 5.277, 7.467]}
        rotation={[0.995, 1.447, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath.geometry}
        material={nodes.NurbsPath.material}
        position={[1.982, 4.949, 7.672]}
        rotation={[-2.146, 0.124, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane109.geometry}
        material={materials["lightbulbs 1"]}
        position={[-5.495, 5.166, 7.601]}
        rotation={[0.995, 1.447, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.NurbsPath001.geometry}
        material={nodes.NurbsPath001.material}
        position={[-3.021, 4.949, 7.672]}
        rotation={[-2.146, 0.124, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.frame.geometry}
        material={materials["computer sides"]}
        position={[0.051, 4.281, 6.125]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.screen_frame.geometry}
        material={materials["couch cushion"]}
        position={[0.051, 4.281, 6.102]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder026.geometry}
        material={materials["Material.002"]}
        position={[-3.116, 1.541, -3.316]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={-0.086}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve012.geometry}
        material={materials["clock hands"]}
        position={[-1.896, 1.548, -3.311]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.case_bottom.geometry}
        material={materials["computer sides"]}
        position={[-1.922, 2.946, 5.651]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_case.geometry}
        material={materials["Material.001"]}
        position={[-1.922, 2.892, 5.651]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.power_supply.geometry}
        material={materials["clock hands"]}
        position={[-1.9, 3.695, 5.971]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fan1.geometry}
        material={materials.clock}
        position={[-1.742, 3.393, 5.947]}
        rotation={[-Math.PI / 6, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fan2.geometry}
        material={materials.clock}
        position={[-1.742, 3.393, 5.667]}
        rotation={[-Math.PI / 6, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fan3.geometry}
        material={materials.clock}
        position={[-1.742, 3.393, 5.387]}
        rotation={[-Math.PI / 6, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.fan_shroud.geometry}
        material={materials["book 1"]}
        position={[-1.729, 3.404, 5.968]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve003.geometry}
        material={materials["clock hands"]}
        position={[-1.797, 3.645, 5.885]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BézierCurve004.geometry}
        material={materials["coffee cup"]}
        position={[-1.797, 3.761, 5.885]}
        rotation={[0, Math.PI / 2, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_case001.geometry}
        material={materials["computer sides"]}
        position={[-1.922, 2.892, 5.651]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.glass_case002.geometry}
        material={materials["computer sides"]}
        position={[-1.922, 2.981, 5.651]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.power_button.geometry}
        material={materials["clock hands"]}
        position={[-1.922, 2.892, 5.651]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rug.geometry}
        material={materials.rug}
        position={[3.969, 0.91, 1.885]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rug_pillow.geometry}
        material={materials.pillow}
        position={[3.433, 0.829, 1.632]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.rug001.geometry}
        material={materials.rug}
        position={[3.969, 0.91, 1.885]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cabinet_shell.geometry}
        material={materials["Material.008"]}
        position={[3.368, 2.042, 6.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.file_drawers.geometry}
        material={materials["Material.007"]}
        position={[3.368, 2.51, 5.932]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WALLS003.geometry}
        material={materials.flooring}
        position={[0.304, 1.528, 1.832]}
        rotation={[-0.002, 0.014, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane051.geometry}
        material={materials["flower pot 1"]}
        position={[2.899, 3.235, 5.875]}
        rotation={[0, -0.419, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.desk_light.geometry}
        material={materials.emitters}
        position={[-0.645, 2.751, 7.251]}
      />
    </group>
  );
}

useGLTF.preload("/cozy_room.glb");
