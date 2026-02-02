import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StarBackground from './components/ui/StarBackground';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const LoadingFallback = () => (
    <div className="h-screen w-full flex items-center justify-center bg-navy-900 text-cyan-400">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
    </div>
);

function App() {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        <Router>
            <ScrollToTop />
            <div className="bg-navy-900 min-h-screen text-white overflow-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
                <StarBackground />
                <div className="relative z-10">
                    <Navbar />
                    <main>
                        <Suspense fallback={<LoadingFallback />}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/services" element={<Services />} />
                                <Route path="/work" element={<Work />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/contact" element={<Contact />} />
                            </Routes>
                        </Suspense>
                    </main>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
