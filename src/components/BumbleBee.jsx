import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const BumbleBee = (props) => {
  const { nodes, materials } = useGLTF('/models/transformers_2007_movie_bumblebee_2007.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <primitive object={nodes._rootJoint} />
          <skinnedMesh
            geometry={nodes.Object_7.geometry}
            material={materials.Body_1}
            skeleton={nodes.Object_7.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_8.geometry}
            material={materials.Endoskeleton_1}
            skeleton={nodes.Object_8.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_9.geometry}
            material={materials.Legs_1}
            skeleton={nodes.Object_9.skeleton}
          />
          <skinnedMesh
            geometry={nodes.Object_10.geometry}
            material={materials.Eyes_1}
            skeleton={nodes.Object_10.skeleton}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/transformers_2007_movie_bumblebee_2007.glb')
export default BumbleBee;
