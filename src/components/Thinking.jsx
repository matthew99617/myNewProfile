import React, { useRef } from 'react'
import { Float, useGLTF } from '@react-three/drei'

const Thinking = (props) => {
  const { nodes, materials } = useGLTF('/models/thinking.glb')
  return (
    <Float dispose={null}>
      <group rotation={[1.5, 3, 5]} {...props}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={materials['Scene_-_Root']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={materials['Scene_-_Root']}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/thinking.glb')

export default Thinking