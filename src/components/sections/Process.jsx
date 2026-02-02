import { useRef, useEffect } from 'react';
import { Target, Lightbulb, Code, Rocket } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        icon: Lightbulb,
        title: "Discovery & Strategy",
        description: "We map your entire digital galaxy. Understanding goals, audience, and market gravity."
    },
    {
        icon: Target,
        title: "Design & Prototype",
        description: "blueprint creation. Visualizing the trajectory before ignition."
    },
    {
        icon: Code,
        title: "Development & Core Fusion",
        description: "Building the engine. Clean code, robust architecture, high-performance systems."
    },
    {
        icon: Rocket,
        title: "Launch & Stabilization",
        description: "Liftoff. Deployment, testing, and orbital stabilization for long-term growth."
    }
];

const Process = () => {
    const sectionRef = useRef(null);
    const lineRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate the vertical line
            gsap.fromTo(lineRef.current,
                { height: 0 },
                {
                    height: "100%",
                    duration: 1,
                    ease: "none",
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top center",
                        end: "bottom center",
                        scrub: 1
                    }
                }
            );

            // Animate steps
            gsap.utils.toArray('.process-step').forEach((step, i) => {
                gsap.fromTo(step,
                    { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 0.8,
                        scrollTrigger: {
                            trigger: step,
                            start: "top 80%",
                            toggleActions: "play none none reverse"
                        }
                    }
                );
            });

        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 bg-navy-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold mb-4">Mission <span className="text-cyan-400">Protocol</span></h2>
                    <p className="text-slate-400">The trajectory to your success is calculated and precise.</p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-slate-800 h-full rounded-full">
                        <div ref={lineRef} className="w-full bg-cyan-500 shadow-[0_0_15px_rgba(34,211,238,0.6)] rounded-full"></div>
                    </div>

                    <div className="space-y-24">
                        {steps.map((step, index) => (
                            <div key={index} className={`process-step flex items-center justify-between ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                                <div className="w-5/12"></div>

                                <div className="z-10 bg-navy-900 p-2 rounded-full border-2 border-cyan-500 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                                    <step.icon size={24} className="text-cyan-400" />
                                </div>

                                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Process;
