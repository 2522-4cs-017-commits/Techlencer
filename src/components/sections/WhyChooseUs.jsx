import { Shield, Zap, Globe, Cpu } from 'lucide-react';

const features = [
    {
        icon: Globe,
        title: "Global Scale",
        description: "Infrastructure designed to handle traffic from any corner of the multiverse with zero latency."
    },
    {
        icon: Shield,
        title: "Enterprise Security",
        description: "Fortified with military-grade protocols to protect your digital assets."
    },
    {
        icon: Zap,
        title: "High-Velocity",
        description: "Optimized for speed. We shave milliseconds to boost conversions."
    },
    {
        icon: Cpu,
        title: "AI-Integrated",
        description: "Leveraging neural networks for automated insights and decision making."
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-navy-900 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="mb-16 md:w-2/3">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Built for <span className="text-cyan-400">Dominance</span></h2>
                    <p className="text-slate-400 text-lg leading-relaxed">
                        We don't just build websites; we engineer digital gravity.
                        Our systems are designed to pull customers into your orbit and keep them there.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div className="mb-6 inline-block p-4 rounded-2xl bg-slate-800/50 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-900 transition-colors duration-300">
                                <feature.icon size={32} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors">{feature.title}</h3>
                            <p className="text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4 group-hover:border-cyan-500 transition-colors">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
