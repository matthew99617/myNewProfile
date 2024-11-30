import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Models from '../components/Models'
import CanvasLoader from '../components/CanvasLoader'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import AndroidIcon from '../components/AndroidIcon'
import { Leva, useControls } from 'leva'
import ReactLogo from '../components/ReactLogo'
import Cube from '../components/Cube'
import Thinking from '../components/Thinking'
import HeroCamera from '../components/HeroCamera'
import Button from '../components/Button'

const Hero = () => {

    // const controls = useControls('Models', {
    //     positionX: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionY: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     positionZ: {
    //         value: 2.5,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationY: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -10,
    //         max: 10,
    //     },
    //     scale: {
    //         value: 1,
    //         min: 0.1,
    //         max: 10,
    //     }
    // })
    const isSmall = useMediaQuery({ maxWidth: 440 })
    const isMobile = useMediaQuery({ maxWidth: 768 })
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 })

    const sizes = calculateSizes(isSmall, isMobile, isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-generalsans'>Hi, I am Matthew<span className="waving-hand">👋</span></p>

                <div className='w-full h-full absolute inset-0'>
                    {/* <Leva /> */}
                    <Canvas className='w-full h-full'>
                        <Suspense fallback={<CanvasLoader />}>
                            <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                            <HeroCamera isMobile={isMobile}>
                                <Models
                                    position={sizes.deskPosition}
                                    rotation={[0.4, 4.7, 0]}
                                    scale={sizes.deskScale} />
                            </HeroCamera>

                            <group>
                                <AndroidIcon
                                    position={sizes.androidIconPosition}
                                    scale={0.2}
                                    rotation={[0.4, 0.4, -0.4]}
                                />

                                <ReactLogo
                                    position={sizes.reactLogoPosition}
                                />

                                <Cube position={sizes.cubePosition} />

                                <Thinking
                                    position={sizes.thinkPosition}
                                    scale={1.3} />
                            </group>

                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                        </Suspense>
                    </Canvas>
                </div>

                <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                    <a href='#about' className='w-fit'>
                        <Button name="Contact Me" isBeam containerClass="sm:w-fit w-full sm:min-w-96"></Button>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero