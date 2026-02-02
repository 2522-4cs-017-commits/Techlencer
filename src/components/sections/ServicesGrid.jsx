import { motion } from 'framer-motion';
import { Code, Palette, ShoppingBag, Layout, Figma, Database, ArrowRight } from 'lucide-react';

const services = [
    {
        id: 1,
        title: "Website Development",
        description: "Scalable, high-performance solutions engineered for growth. From custom React applications to robust WordPress architectures.",
        icon: <Code size={32} />,
        tags: ["React", "WordPress", "Shopify", "Custom Code"],
        colSpan: "md:col-span-2",
        color: "from-cyan-500 to-blue-600"
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Immersive user experiences designed with human-centric principles. We blend aesthetics with functionality.",
        icon: <Layout size={32} />,
        tags: ["User Research", "Wireframing", "Prototyping"],
        colSpan: "md:col-span-1",
        color: "from-purple-500 to-pink-600"
    },
    {
        id: 3,
        title: "E-commerce Development",
        description: "End-to-end commercial ecosystems. Specialized Woo-Commerce and Shopify solutions that drive conversion.",
        icon: <ShoppingBag size={32} />,
        tags: ["WooCommerce", "Payment Gateways", "Inventory"],
        colSpan: "md:col-span-1",
        color: "from-orange-500 to-red-600"
    },
    {
        id: 4,
        title: "Graphic Designing",
        description: "Visual storytelling that defines brands. Custom web assets and bespoke e-commerce visuals.",
        icon: <Palette size={32} />,
        tags: ["Branding", "Visual Identity", "Marketing Assets"],
        colSpan: "md:col-span-2",
        color: "from-emerald-500 to-teal-600"
    },
    {
        id: 5,
        title: "Figma Prototyping",
        description: "High-fidelity interactive prototypes that bridge the gap between imagination and reality.",
        icon: <Figma size={32} />,
        tags: ["Design Systems", "Interactive Flows"],
        colSpan: "md:col-span-1",
        color: "from-pink-500 to-rose-500"
    },
    {
        id: 6,
        title: "Custom Solutions",
        description: "Bespoke database and backend architectures for complex business logic.",
        icon: <Database size={32} />,
        tags: ["API Integration", "Database Design"],
        colSpan: "md:col-span-2 lg:col-span-1", // Adjust for aesthetics
        color: "from-blue-500 to-indigo-600"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100
        }
    }
};

const ServicesGrid = () => {
    return (
        <section className="min-h-screen w-full py-24 bg-navy-900 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">Expertise</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Engineering digital dominance through precision code and visionary design.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((service) => (
                        <motion.div
                            key={service.id}
                            variants={itemVariants}
                            className={`${service.colSpan} group relative p-[1px] rounded-3xl overflow-hidden`}
                        >
                            {/* Gradient Border */}
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Card Content */}
                            <div className="relative h-full bg-navy-900/90 backdrop-blur-xl rounded-[23px] p-8 flex flex-col justify-between hover:bg-navy-800/80 transition-colors duration-300">

                                <div className="mb-6">
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-purple-500/10`}>
                                        {service.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {service.tags.map((tag) => (
                                            <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full bg-white/5 text-slate-300 border border-white/5">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
                                        Explore Solutions <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesGrid;
