import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const StarBackground = () => {
    return (
        <div className="w-full h-auto fixed inset-0 z-[0] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                </Suspense>
            </Canvas>
        </div>
    );
}

export default StarBackground;
