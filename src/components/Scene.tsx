'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { Suspense, useRef } from 'react'
import * as THREE from 'three'

export default function Scene() {
    return (
        <div className="fixed top-0 left-0 w-full h-screen -z-10">
            <Canvas
                camera={{ position: [0, 0, 5], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} />

                    <TechObject />

                    <Environment preset="city" />
                </Suspense>
            </Canvas>
        </div>
    )
}

function TechObject() {
    const meshRef = useRef<THREE.Mesh>(null)

    useFrame((state) => {
        if (!meshRef.current) return

        const time = state.clock.getElapsedTime()

        // Simple scroll mapping
        const scrollY = window.scrollY
        const maxScroll = document.body.scrollHeight - window.innerHeight || 1
        const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1)

        // Rotate
        meshRef.current.rotation.x = time * 0.1 + progress * Math.PI
        meshRef.current.rotation.y = time * 0.15 + progress * Math.PI * 2

        // Heartbeat Pulse Logic (Lub-Dub rhythm)
        // Simulate two distinct beats (Gaussian pulses) per cycle for a realistic heartbeat
        const t = (time * 1.2) % 1
        const b1 = Math.exp(-Math.pow((t - 0.15) * 20, 2)) // Lub
        const b2 = Math.exp(-Math.pow((t - 0.30) * 20, 2)) // Dub
        
        const pulse = (b1 + 0.5 * b2) * 0.04

        // Scale: Base + Scroll Zoom + Heartbeat
        const scale = 1 + progress * 0.5 + pulse
        meshRef.current.scale.setScalar(scale)
    })

    return (
        <mesh ref={meshRef} rotation={[0, 0, 0]}>
            <icosahedronGeometry args={[1.5, 2]} />
            <meshStandardMaterial
                color="#111"
                wireframe
                roughness={0.1}
                metalness={0.8}
            />
        </mesh>
    )
}
