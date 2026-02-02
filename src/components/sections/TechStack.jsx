const technologies = [
    { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS", "Three.js", "GSAP"] },
    { category: "Backend", items: ["Node.js", "Python", "GraphQL", "PostgreSQL", "Redis"] },
    { category: "Platforms", items: ["Shopify Plus", "WordPress VIP", "AWS", "Vercel"] },
    { category: "Marketing", items: ["Google Ads", "Meta Pixel", "HubSpot", "Klaviyo"] }
];

const TechStack = () => {
    return (
        <section className="py-24 bg-navy-800/50">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="text-cyan-400">Arsenel</span></h2>
                    <p className="text-slate-400">Best-in-class technologies powering your growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {technologies.map((tech, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-xl">
                            <h3 className="text-lg font-bold text-white mb-6 border-b border-cyan-500/30 pb-2 inline-block">
                                {tech.category}
                            </h3>
                            <ul className="space-y-3">
                                {tech.items.map((item, i) => (
                                    <li key={i} className="text-slate-400 flex items-center">
                                        <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
