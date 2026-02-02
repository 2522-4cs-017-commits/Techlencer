import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import DigitalCore from '../3d/DigitalCore';
import { Suspense } from 'react';

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section id="home" className="h-screen w-full relative overflow-hidden bg-navy-900">

            {/* 3D Scene Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                    <Suspense fallback={null}>
                        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
                        <DigitalCore />
                    </Suspense>
                </Canvas>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center pointer-events-none">
                <div className="text-center px-6 mt-64">
                    {/* mt-64 pushes text down so it doesn't overlap core too much initially, or we can center it and have core behind */}
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">
                        Your Entire Digital Business,<br />
                        <span className="text-cyan-400 text-gradient">Mastered From One Core.</span>
                    </h1>
                    <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                        Systems-level precision meets creative velocity. The ultimate fusion for growth.
                    </p>
                    <div className="pointer-events-auto">
                        <Link to="/contact" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-navy-900 font-bold rounded-full transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40">
                            Initialize System
                        </Link>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
                <span className="text-slate-500 text-xs uppercase tracking-[0.2em]">Scroll to Initialize</span>
            </div>
        </section>
    );
};

export default Hero;
