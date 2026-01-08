import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import '../index.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => setIsOpen(false), [location]);

    const links = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'AI Stylist', path: '/ai-stylist' },
        { name: 'Booking', path: '/booking' },
    ];

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link to="/" className="logo" style={{ fontSize: '1.4rem', fontWeight: '700', textDecoration: 'none', color: 'white', letterSpacing: '4px' }}>
                    PARLOUR<span className="text-gold">CAFÉ</span>
                </Link>

                {/* Desktop Menu */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }} className="desktop-nav">
                    <div className="nav-links" style={{ display: 'flex', gap: '30px' }}>
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                style={{
                                    textDecoration: 'none',
                                    color: location.pathname === link.path ? 'var(--gold)' : 'white',
                                    fontSize: '0.75rem',
                                    textTransform: 'uppercase',
                                    fontWeight: '600',
                                    letterSpacing: '2px',
                                    opacity: location.pathname === link.path ? 1 : 0.6,
                                    transition: '0.3s'
                                }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Link to="/booking" className="btn-premium" style={{ padding: '10px 22px', fontSize: '0.7rem' }}>
                        Book Now <ArrowRight size={14} style={{ marginLeft: '6px' }} />
                    </Link>
                </div>

                {/* Mobile Trigger */}
                <div className="mobile-only" style={{ display: 'none', cursor: 'pointer', zIndex: 1100 }} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X color="var(--gold)" size={28} /> : <Menu color="var(--gold)" size={28} />}
                </div>
            </div>

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 1000, backdropFilter: 'blur(5px)' }}
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            style={{
                                position: 'fixed',
                                top: 0,
                                right: 0,
                                width: '80%',
                                height: '100vh',
                                background: '#080808',
                                zIndex: 1050,
                                padding: '120px 40px',
                                borderLeft: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '35px'
                            }}
                        >
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    style={{
                                        fontSize: '1.8rem',
                                        color: location.pathname === link.path ? 'var(--gold)' : 'white',
                                        textDecoration: 'none',
                                        fontFamily: 'Playfair Display, serif',
                                        letterSpacing: '2px'
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link to="/booking" className="btn-premium" style={{ marginTop: '20px', padding: '18px', justifyContent: 'center' }}>
                                Book Appointment
                            </Link>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 1024px) {
                    .desktop-nav { display: none !important; }
                    .mobile-only { display: block !important; }
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
