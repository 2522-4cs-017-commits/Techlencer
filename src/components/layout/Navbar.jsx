import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contact' },
    ];

    const isActive = (path) => {
        if (path === '/' && location.pathname !== '/') return false;
        return location.pathname.startsWith(path);
    };

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'py-4 bg-navy-900/80 backdrop-blur-md shadow-lg border-b border-white/5' : 'py-6 bg-transparent'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <Link to="/" className="font-heading font-bold text-2xl tracking-tighter text-white">
                    TECHLENCER<span className="text-cyan-400">.</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-8 items-center h-full">
                    {navLinks.map((link) => {
                        if (link.name === 'Services') {
                            return (
                                <div key={link.name} className="relative group h-full flex items-center">
                                    <Link
                                        to={link.href}
                                        className={`text-sm font-medium transition-colors tracking-wide uppercase py-6 ${isActive(link.href) ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                                            }`}
                                    >
                                        {link.name}
                                    </Link>

                                    {/* Mega Menu Dropdown */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[800px] bg-navy-900 border border-white/10 rounded-xl shadow-2xl p-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 backdrop-blur-3xl">
                                        <div className="grid grid-cols-3 gap-8">
                                            {/* Column 1 */}
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-4 border-b border-cyan-500/30 pb-2 inline-block">Website Development</h4>
                                                <ul className="space-y-3">
                                                    <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors block">WordPress</Link></li>
                                                    <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors block">Shopify</Link></li>
                                                    <li><Link to="/services" className="text-slate-400 hover:text-cyan-400 text-sm transition-colors block">React Web Development</Link></li>
                                                </ul>
                                            </div>

                                            {/* Column 2 */}
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-4 border-b border-purple-500/30 pb-2 inline-block">Graphic Designing</h4>
                                                <ul className="space-y-3">
                                                    <li><Link to="/services" className="text-slate-400 hover:text-purple-400 text-sm transition-colors block">UI/UX Design</Link></li>
                                                    <li><Link to="/services" className="text-slate-400 hover:text-purple-400 text-sm transition-colors block">Figma Prototyping Services</Link></li>
                                                    <li><Link to="/services" className="text-slate-400 hover:text-purple-400 text-sm transition-colors block">Custom Web Design</Link></li>
                                                    <li><Link to="/services" className="text-slate-400 hover:text-purple-400 text-sm transition-colors block">Custom E-Commerce Design</Link></li>
                                                </ul>
                                            </div>

                                            {/* Column 3 */}
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-4 border-b border-orange-500/30 pb-2 inline-block">E-Commerce Development</h4>
                                                <ul className="space-y-3">
                                                    <li><Link to="/services" className="text-slate-400 hover:text-orange-400 text-sm transition-colors block">E-commerce Web Development</Link></li>
                                                    <li><Link to="/services" className="text-slate-400 hover:text-orange-400 text-sm transition-colors block">WooCommerce Development</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={link.name}
                                to={link.href}
                                className={`text-sm font-medium transition-colors tracking-wide uppercase ${isActive(link.href) ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="px-6 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-500/60 transition-all duration-300 text-sm font-semibold"
                    >
                        Start Project
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-xl border-b border-white/10 py-4 px-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-base font-medium transition-colors ${isActive(link.href) ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="inline-block text-center px-6 py-3 rounded-lg border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-semibold"
                    >
                        Start Project
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
