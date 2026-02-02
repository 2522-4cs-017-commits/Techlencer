const Portfolio = () => {
    return (
        <section id="work" className="min-h-screen w-full py-20 bg-navy-900/50">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center mb-16">Selected <span className="text-cyan-400">Works</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="group relative overflow-hidden rounded-2xl aspect-video glass-card border-0">
                            <div className="absolute inset-0 bg-gradient-to-t from-navy-900 to-transparent opacity-80 z-10" />
                            <div className="absolute bottom-0 left-0 p-8 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <h3 className="text-2xl font-bold text-white mb-2">Project Name {item}</h3>
                                <p className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">E-commerce • Branding</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
