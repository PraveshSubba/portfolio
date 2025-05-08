import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

const Dog = (props) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "/models/transformers_prime_ravage.glb"
  );
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group
                name="PimeRavageSkeleton_88"
                position={[0, 0, -0.363]}
                scale={0.02}
              >
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <skinnedMesh
                    name="Object_7"
                    geometry={nodes.Object_7.geometry}
                    material={materials.PrimeRavage}
                    skeleton={nodes.Object_7.skeleton}
                  />
                  <skinnedMesh
                    name="Object_8"
                    geometry={nodes.Object_8.geometry}
                    material={materials.PrimeRavageGlow}
                    skeleton={nodes.Object_8.skeleton}
                  />
                  <group name="PrimeRavage_87" />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

useGLTF.preload("/models/transformers_prime_ravage.glb");
export default Dog;
