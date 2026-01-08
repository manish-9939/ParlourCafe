import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';
import Lenis from 'lenis';
import './index.css';

// Performance Optimized Lazy Loading
const Home = lazy(() => import('./pages/Home'));
const Services = lazy(() => import('./pages/Services'));
const Booking = lazy(() => import('./pages/Booking'));
const AIStylist = lazy(() => import('./pages/AIStylist'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));

// Transition wrapper to show loader on every route change
const PageTransitionWrapper = ({ children }) => {
  const location = useLocation();
  const [isNavigating, setIsNavigating] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setIsNavigating(true);
    const timer = setTimeout(() => {
      setIsNavigating(false);
      window.scrollTo(0, 0);
    }, 1800); // Elegant short transition

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      {isNavigating && <Loader />}
      {children}
    </>
  );
};

function App() {
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    // Initial entry loading
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    // Initialize Lenis only for desktop for maximum mobile performance
    const isMobile = window.innerWidth < 768;

    if (!isMobile) {
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);

      return () => {
        lenis.destroy();
        clearTimeout(timer);
      };
    }

    return () => clearTimeout(timer);
  }, []);

  if (initialLoading) {
    return <Loader />;
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <PageTransitionWrapper>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/booking" element={<Booking />} />
              <Route path="/ai-stylist" element={<AIStylist />} />
              <Route path="/service/:id" element={<ServiceDetail />} />
            </Routes>
          </Suspense>
        </PageTransitionWrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
