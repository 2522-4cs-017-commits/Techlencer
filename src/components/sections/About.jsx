import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const StatItem = ({ label, value, suffix = "" }) => {
    const countRef = useRef(null);

    useEffect(() => {
        const el = countRef.current;

        gsap.fromTo(el,
            { innerText: 0 },
            {
                innerText: value,
                duration: 2,
                snap: { innerText: 1 },
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                onUpdate: function () {
                    if (el) el.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
                }
            }
        );
    }, [value, suffix]);

    return (
        <div className="text-center md:text-left">
            <h4 ref={countRef} className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading">0</h4>
            <p className="text-slate-500 text-sm uppercase tracking-wider font-semibold">{label}</p>
        </div>
    );
};

const About = () => {
    return (
        <section id="about" className="min-h-screen w-full py-24 bg-navy-900 relative overflow-hidden">
            {/* Decorative Blur */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-cyan-900/5 blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16 relative z-10">
                <div className="flex-1">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">The <span className="text-cyan-400">Authority</span></h2>
                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                        We are not just an agency; we are your digital command center.
                        Integrating design, development, and strategy into a unified force field for your brand.
                        Our mission is to defy gravity and elevate your business above the noise.
                    </p>

                    <div className="grid grid-cols-2 gap-12 mt-12 border-t border-white/10 pt-12">
                        <StatItem label="Projects Launch" value={100} suffix="+" />
                        <StatItem label="Client Retention" value={98} suffix="%" />
                        <StatItem label="Growth Rate" value={300} suffix="%" />
                        <StatItem label="Awards Won" value={12} />
                    </div>
                </div>

                <div className="flex-1 h-[500px] glass-card rounded-2xl flex items-center justify-center relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <div className="text-center p-8">
                        <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md border border-cyan-500/30">
                            <span className="text-3xl">🚀</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Visionary Team</h3>
                        <p className="text-slate-400 text-sm">Engineers, Artists, and Strategists united by code.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
