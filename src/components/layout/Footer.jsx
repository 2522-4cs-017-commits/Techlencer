import { Twitter, Linkedin, Github, Instagram, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-navy-900 border-t border-white/5 pt-20 pb-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link to="/" className="font-heading font-bold text-2xl tracking-tighter text-white block mb-6">
                            TECHLENCER<span className="text-cyan-400">.</span>
                        </Link>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Elevating brands through premium digital experiences.
                            We blend aesthetics with performance.
                        </p>
                        <div className="flex space-x-4">
                            {[Twitter, Linkedin, Github, Instagram].map((Icon, i) => (
                                <a key={i} href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            {['Web Development', 'Digital Marketing', 'SEO Optimization', 'Brand Strategy', 'E-commerce Solutions'].map((item) => (
                                <li key={item}><Link to="/services" className="hover:text-cyan-400 transition-colors">{item}</Link></li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-slate-500">
                            <li><Link to="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
                            <li><Link to="/work" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
                            <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Get in Touch</h4>
                        <p className="text-slate-500 text-sm mb-4">
                            hello@techlencer.digital<br />
                            +1 (555) 123-4567
                        </p>
                        <p className="text-slate-500 text-sm mb-6">
                            123 Innovation Dr.<br />
                            Tech City, TC 90210
                        </p>
                        <Link to="/contact" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold text-sm group">
                            Start a project <ArrowUpRight size={16} className="ml-1 transform group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                    <p>© {new Date().getFullYear()} Techlencer Digital. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link to="#" className="hover:text-slate-400">Privacy Policy</Link>
                        <Link to="#" className="hover:text-slate-400">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
