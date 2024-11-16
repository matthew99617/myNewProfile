import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const AndroidIcon = (props) => {
    const androidRef = useRef();
    const { scene } = useGLTF('/public/models/android.glb')

    useGSAP(() => {
        gsap.to(androidRef.current.position, 
            { 
                y: androidRef.current.position.y + 0.5, 
                duration: 1.5,
                repeat: -1,
                yoyo: true
            }
        )
    })

    return (
        <mesh {...props} ref={androidRef}>
            <primitive object={scene} />
        </mesh>
    )
}

export default AndroidIcon