import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, Text } from '@react-three/drei';
import * as THREE from 'three';

const Satellite = ({ position, color, icon, speed = 1, initialOffset = 0, ...props }) => {
    const ref = useRef(null);

    useFrame((state) => {
        if (ref.current) {
            const time = state.clock.getElapsedTime();
            const scrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const scrollProgress = Math.min(scrollY / viewportHeight, 1);

            // Orbit logic
            const angle = time * speed + initialOffset;
            // Merge to core: radius interpolation
            const baseRadius = 3;
            const radius = THREE.MathUtils.lerp(baseRadius, 0.5, scrollProgress);

            ref.current.position.x = Math.sin(angle) * radius;
            ref.current.position.z = Math.cos(angle) * radius;

            // Float upwards/downwards based on scroll to "merge" visually
            // Also reduce y offset to 0
            ref.current.position.y = THREE.MathUtils.lerp(position[1], 0, scrollProgress);

            ref.current.rotation.y += 0.02;

            // Scale down on merge
            const scale = THREE.MathUtils.lerp(1, 0, scrollProgress);
            ref.current.scale.setScalar(scale);
        }
    });

    return (
        <group ref={ref} {...props}>
            <Float speed={2} rotationIntensity={1} floatIntensity={1}>
                <mesh>
                    <sphereGeometry args={[0.3, 32, 32]} />
                    <meshPhysicalMaterial
                        color={color}
                        roughness={0.2}
                        metalness={0.8}
                        transmission={0.5}
                        thickness={1}
                    />
                </mesh>
                <Text
                    fontSize={0.2}
                    color="white"
                    position={[0, 0.5, 0]}
                    anchorX="center"
                    anchorY="bottom"
                >
                    {icon}
                </Text>
            </Float>
        </group>
    );
};

const DigitalCore = () => {
    const coreRef = useRef(null);

    useFrame((state) => {
        if (coreRef.current) {
            const time = state.clock.getElapsedTime();

            // Mouse follow effect
            const { x, y } = state.pointer;

            // Lerp for smooth rotation
            coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, y * 0.5, 0.1);
            coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, x * 0.5 + time * 0.2, 0.1);
        }
    });

    return (
        <group>
            {/* Central Core */}
            <Sphere ref={coreRef} args={[1.5, 64, 64]}>
                <MeshDistortMaterial
                    color="#22D3EE"
                    emissive="#020617"
                    emissiveIntensity={0.2}
                    distort={0.4}
                    speed={2}
                    roughness={0.1}
                    metalness={0.9}
                />
            </Sphere>

            {/* Lighting */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={2} color="#22D3EE" />
            <pointLight position={[-10, -10, -10]} intensity={1} color="#64748B" />
            <pointLight position={[0, 5, 0]} intensity={3} color="#ffffff" distance={10} />

            {/* Satellites */}
            <Satellite initialOffset={0} position={[3, 0, 0]} color="#F24E1E" icon="Figma" speed={0.5} />
            <Satellite initialOffset={Math.PI / 2} position={[0, 1.5, 3]} color="#61DAFB" icon="REACT" speed={0.6} />
            <Satellite initialOffset={Math.PI} position={[-3, -1, 0]} color="#96588A" icon="WOO-Commerce" speed={0.4} />
            <Satellite initialOffset={Math.PI * 1.5} position={[0, 2, -3]} color="#FF4081" icon="UI/UX design" speed={0.7} />
        </group>
    );
};

export default DigitalCore;
